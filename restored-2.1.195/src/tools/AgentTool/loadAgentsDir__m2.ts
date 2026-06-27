// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fKr
// matched 2.1.88 source: src/tools/AgentTool/loadAgentsDir.ts
// class=modified (alt of src/tools/AgentTool/loadAgentsDir.ts)  jaccard=0.0949  score=0.2031  fileCov=0.1512
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fKr = E(() => {
  je();
  jOd = [
    "name",
    "description",
    "model",
    "allowed-tools",
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "effort",
    "shell",
    "version",
    "when_to_use",
    "paths",
    "hooks",
    "context",
    "agent",
    "created_by",
    "improved_by",
    "mcpServers",
    "lspServers",
    "agents",
    "outputStyles",
    "themes",
    "workflows",
    "channels",
    "monitors",
    "settings",
    "experimental",
    "commands",
    "skills",
    "dependencies",
    "userConfig",
    "metadata",
    "displayName",
    "defaultEnabled",
    "fallback",
    "evals",
    "author",
    "homepage",
    "repository",
    "license",
    "keywords",
    "compatibility",
    "tools",
    "disallowedTools",
    "color",
    "permissionMode",
    "maxTurns",
    "initialPrompt",
    "memory",
    "background",
    "isolation",
    "keep-coding-instructions",
    "force-for-plugin",
    "type",
    "originSessionId",
    "hide-from-slash-command-tool",
  ];
  rqh = new Map(jOd.map((e) => [GOd(e), e]));
});
function Kte(e) {
  return Bun.YAML.parse(e);
}
function Pkn(e) {
  return (
    Bun.YAML.stringify(e, null, 2) +
    `
`
  );
}
function qOd(e) {
  let t = e.split(`
`),
    n = [];
  for (let r of t) {
    let o = r.match(/^([a-zA-Z_-]+):\s+(.+)$/);
    if (o) {
      let [, s, i] = o;
      if (!s || !i) {
        n.push(r);
        continue;
      }
      if ((i.startsWith('"') && i.endsWith('"')) || (i.startsWith("'") && i.endsWith("'"))) {
        n.push(r);
        continue;
      }
      if (i.startsWith("[") && i.endsWith("]"))
        try {
          if (Array.isArray(Kte(i))) {
            n.push(r);
            continue;
          }
        } catch {}
      if (WOd.test(i)) {
        let a = i.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
        n.push(`${s}: "${a}"`);
        continue;
      }
    }
    n.push(r);
  }
  return n.join(`
`);
}
function Bm(e, t, n) {
  let r = e.match(I_e);
  if (!r)
    return {
      frontmatter: {},
      content: e,
    };
  let o = r[1] || "",
    s = e.slice(r[0].length),
    i = (c) => c,
    a = {},
    l;
  try {
    a = i(y1i(Kte(o)));
  } catch {
    try {
      let c = qOd(o).replace(/^\t+/gm, (u) => "  ".repeat(u.length));
      a = i(y1i(Kte(c)));
    } catch (c) {
      l = c instanceof Error ? c.message : String(c);
      let u = t ? ` in ${t}` : "";
      T(`Failed to parse YAML frontmatter${u}: ${l}`, {
        level: "warn",
      });
    }
  }
  return {
    frontmatter: a,
    content: s,
    ...(l !== void 0 && {
      parseError: l,
    }),
  };
}
function y1i(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) return e;
  return {};
}
function HNt(e) {
  if (Array.isArray(e)) return e.flatMap(HNt);
  if (typeof e !== "string") return [];
  let t = [],
    n = "",
    r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    if (i === "{") (r++, (n += i));
    else if (i === "}") (r--, (n += i));
    else if (i === "," && r === 0) {
      let a = n.trim();
      if (a) t.push(a);
      n = "";
    } else n += i;
  }
  let o = n.trim();
  if (o) t.push(o);
  return t.filter((s) => s.length > 0).flatMap((s) => b1i(s));
}
function b1i(e) {
  let t = e.match(/^([^{]*)\{([^}]+)\}(.*)$/);
  if (!t) return [e];
  let n = t[1] || "",
    r = t[2] || "",
    o = t[3] || "",
    s = r.split(",").map((a) => a.trim()),
    i = [];
  for (let a of s) {
    let l = n + a + o,
      c = b1i(l);
    i.push(...c);
  }
  return i;
}
function Mkn(e) {
  if (e === void 0 || e === null) return;
  let t = typeof e === "number" ? e : parseInt(String(e), 10);
  if (Number.isInteger(t) && t > 0) return t;
  return;
}
function AU(e, t, n) {
  if (e == null) return null;
  if (typeof e === "string") return e.trim() || null;
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  let r = n ? `${n}:${t}` : (t ?? "unknown");
  return (
    T(`Description invalid for ${r} - omitting`, {
      level: "warn",
    }),
    null
  );
}
function $kn(e) {
  let t = (n) => (n != null && typeof n === "object" && !Array.isArray(n) ? Object.keys(n) : []);
  return Uo([...Object.keys(e), ...t(e.metadata), ...t(e.experimental)]);
}
function qst(e) {
  return e === true || e === "true";
}
function C3e(e) {
  if (e === true || e === "true") return true;
  if (e === false || e === "false") return false;
  return;
}
function Okn(e, t) {
  if (e == null) return;
  let n = String(e).trim().toLowerCase();
  if (n === "") return;
  if (_1i.includes(n)) return n;
  T(
    `Frontmatter 'shell: ${e}' in ${t} is not recognized. Valid values: ${_1i.join(", ")}. Falling back to bash.`,
    {
      level: "warn",
    },
  );
  return;
}
var WOd, I_e, _1i;
