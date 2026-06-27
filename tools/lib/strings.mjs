// 共享: 从 JS/TS 源码中提取字符串字面量集合, 作为跨版本匹配的稳定指纹。
// minify 会改变变量名/格式, 但**字符串字面量内容**与**对象属性名**基本保持不变。

// 提取双引号/单引号字符串内容 + 模板字面量的静态片段 (按 ${...} 切分)。
// 返回去重后的字符串数组 (长度过滤在调用方做)。
export function extractStringLiterals(code) {
  const out = new Set();
  const n = code.length;
  let i = 0;
  // 简易扫描器: 跳过 // 与 /* */ 注释, 捕获 "..." '...' `...`
  while (i < n) {
    const c = code[i];
    // 行注释
    if (c === "/" && code[i + 1] === "/") {
      i += 2;
      while (i < n && code[i] !== "\n") i++;
      continue;
    }
    // 块注释
    if (c === "/" && code[i + 1] === "*") {
      i += 2;
      while (i < n && !(code[i] === "*" && code[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      let buf = "";
      while (i < n) {
        const ch = code[i];
        if (ch === "\\") {
          buf += ch + (code[i + 1] || "");
          i += 2;
          continue;
        }
        if (ch === q) {
          i++;
          break;
        }
        if (ch === "\n") {
          // 未闭合(可能是误判), 放弃
          break;
        }
        buf += ch;
        i++;
      }
      out.add(buf);
      continue;
    }
    if (c === "`") {
      i++;
      let buf = "";
      while (i < n) {
        const ch = code[i];
        if (ch === "\\") {
          buf += ch + (code[i + 1] || "");
          i += 2;
          continue;
        }
        if (ch === "`") {
          i++;
          out.add(buf);
          buf = "";
          break;
        }
        // 模板插值: ${ ... } -> 切断为静态片段
        if (ch === "$" && code[i + 1] === "{") {
          out.add(buf);
          buf = "";
          i += 2;
          // 跳过插值表达式 (粗略, 计 {} 深度)
          let depth = 1;
          while (i < n && depth > 0) {
            if (code[i] === "{") depth++;
            else if (code[i] === "}") depth--;
            i++;
          }
          continue;
        }
        buf += ch;
        i++;
      }
      if (buf) out.add(buf);
      continue;
    }
    i++;
  }
  return out;
}

// 规范化 + 长度过滤, 得到用于指纹的字符串集合。
export function fingerprintSet(code, minLen = 6) {
  const raw = extractStringLiterals(code);
  const set = new Set();
  for (let s of raw) {
    // 还原常见转义以提高跨 quote 一致性
    s = s.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
    s = s.trim();
    if (s.length < minLen) continue;
    if (s.length > 400) s = s.slice(0, 400); // 截断超长
    set.add(s);
  }
  return set;
}

// 提取对象属性名: 成员访问 `.foo`、对象字面量键 `foo:`、方法/简写。
// esbuild/bun 默认**不重命名属性名**, 故它在 minify 前后保持一致, 是稳定指纹。
// 去掉注释与字符串后再扫描, 避免把字符串内容误当属性。
export function extractPropertyNames(code, minLen = 4) {
  const set = new Set();
  // 先去字符串与注释 (用占位符), 避免 .foo 出现在字符串里造成噪声
  const stripped = code
    .replace(/\/\/[^\n]*/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/'(?:[^'\\]|\\.)*'/g, "''")
    .replace(/`(?:[^`\\]|\\.)*`/g, "``");
  // 成员访问 .prop (排除可选链 ?. 同样捕获)
  const memRe = /\.\s*([A-Za-z_$][A-Za-z0-9_$]*)/g;
  let m;
  while ((m = memRe.exec(stripped)) !== null) {
    if (m[1].length >= minLen) set.add(m[1]);
  }
  // 对象字面量/类成员键 foo: 或 foo( (方法)
  const keyRe = /[{,;\s]([A-Za-z_$][A-Za-z0-9_$]*)\s*[:(]/g;
  while ((m = keyRe.exec(stripped)) !== null) {
    if (m[1].length >= minLen) set.add(m[1]);
  }
  return set;
}

// 组合指纹: 字符串(str:) + 属性名(prop:) 双通道带命名空间, 便于统一 IDF 处理。
export function fingerprintTokens(code, { strMinLen = 6, propMinLen = 5 } = {}) {
  const out = new Set();
  for (const s of fingerprintSet(code, strMinLen)) out.add("str:" + s);
  for (const p of extractPropertyNames(code, propMinLen)) out.add("prop:" + p);
  return out;
}
