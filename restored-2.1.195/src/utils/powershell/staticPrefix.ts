// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kHc
// matched 2.1.88 source: src/utils/powershell/staticPrefix.ts
// class=modified  jaccard=0.3824  score=0.8846  fileCov=0.4025
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function $_m(e) {
  let t = [];
  for (let n of e.statements)
    for (let r of n.commands) if (r.elementType === "CommandAst") t.push(r);
  return t;
}
async function extractPrefixFromElement(cmd) {
  if (cmd.nameType === "application") return null;
  let t = cmd.name;
  if (!t) return null;
  if (!/^[A-Za-z0-9_+-]+$/.test(t)) return null;
  if (aTl.has(t.toLowerCase())) return null;
  if (cmd.nameType === "cmdlet") return t;
  if (cmd.elementTypes?.[0] !== "StringConstant") return null;
  for (let i = 0; i < cmd.args.length; i++) {
    let a = cmd.elementTypes[i + 1];
    if (a !== "StringConstant" && a !== "Parameter") return null;
  }
  let n = t.toLowerCase(),
    r = await DDe(n),
    prefix = await q2n(t, cmd.args, r),
    s = 0;
  for (let i of prefix.split(" ").slice(1)) {
    if (i.includes("\\")) return null;
    while (s < cmd.args.length) {
      let a = cmd.args[s];
      if (a === i) break;
      if (a.startsWith("-")) {
        if (
          (s++,
          r?.options && s < cmd.args.length && cmd.args[s] !== i && !cmd.args[s].startsWith("-"))
        ) {
          let l = a.toLowerCase();
          if (
            r.options.find((u) => (Array.isArray(u.name) ? u.name.includes(l) : u.name === l))?.args
          )
            s++;
        }
        continue;
      }
      return null;
    }
    if (s >= cmd.args.length) return null;
    s++;
  }
  if (!prefix.includes(" ") && (r?.subcommands?.length || Gqe[n])) return null;
  return prefix;
}
async function LHc(e, t) {
  let n = await iEe(e);
  if (!n.valid) return [];
  let r = $_m(n);
  if (r.length <= 1) {
    let a = r[0] ? await extractPrefixFromElement(r[0]) : null;
    return a ? [a] : [];
  }
  let o = [];
  for (let a of r) {
    if (t?.(a)) continue;
    let l = await extractPrefixFromElement(a);
    if (l) o.push(l);
  }
  if (o.length === 0) return [];
  let s = new Map();
  for (let a of o) {
    let l = bi(a, " ").toLowerCase(),
      c = s.get(l);
    if (c) c.push(a);
    else s.set(l, [a]);
  }
  let i = [];
  for (let [a, l] of s) {
    let c = O_m(l);
    if ((c === "" ? 0 : hu(c, " ") + 1) <= 1) {
      if ((await DDe(a))?.subcommands?.length || Gqe[a]) continue;
    }
    i.push(c);
  }
  return i;
}
function O_m(e) {
  if (e.length === 0) return "";
  if (e.length === 1) return e[0];
  let t = e[0].split(" "),
    n = t.length;
  for (let r = 1; r < e.length; r++) {
    let o = e[r].split(" "),
      s = 0;
    while (s < n && s < o.length && o[s].toLowerCase() === t[s].toLowerCase()) s++;
    if (((n = s), n === 0)) break;
  }
  return t.slice(0, n).join(" ");
}
