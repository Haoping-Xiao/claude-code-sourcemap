// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yll
// matched 2.1.88 source: src/utils/swarm/backends/types.ts
// class=partial  jaccard=0.1303  score=0.3904  fileCov=0.1637
// note: low-confidence suggestion: src/utils/swarm/backends/types.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yll = E(() => {
  qee();
  je();
  pQ();
});
function yKn(e, t, n = "replace") {
  e(r => {
    let o = r.alwaysDenyRules.command,
      s = n === "union" ? Uo([...(o ?? []), ...t]) : [...t];
    if ((o?.length ?? 0) === s.length && (o ?? []).every((a, l) => a === s[l])) return r;
    return {
      ...r,
      alwaysDenyRules: {
        ...r.alwaysDenyRules,
        command: s.length > 0 ? s : void 0
      }
    };
  });
}
var CIo = () => {};
function p_t(e) {
  let t = e.startsWith("/") ? e.slice(1) : e,
    n = t.search(/\s/);
  if (n === -1) return {
    name: t,
    args: ""
  };
  return {
    name: t.slice(0, n),
    args: t.slice(n + 1).trim()
  };
}
function JMe(e) {
  let t = e.trim();
  if (!t.startsWith("/")) return null;
  let {
    name: n,
    args: r
  } = p_t(t);
  if (!n) return null;
  let o = "(MCP)";
  if (r === o) return {
    commandName: `${n} ${o}`,
    args: "",
    isMcp: true
  };
  if (r.startsWith(o) && /\s/.test(r.charAt(o.length))) return {
    commandName: `${n} ${o}`,
    args: r.slice(o.length).trimStart(),
    isMcp: true
  };
  return {
    commandName: n,
    args: r,
    isMcp: false
  };
}
var q8t = () => {};
function _Kn(e, t) {
  if (!e.subcommands) return;
  let n = t.trimStart(),
    r = n.search(/\s/),
    o = r === -1 ? n : n.slice(0, r),
    s = o ? e.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let i = r === -1 ? "" : n.slice(r + 1).trimStart();
  return {
    targetName: s,
    consumedToken: o,
    remainingArgs: i.replace(/(?:^|\s)--comment(?=\s|$)/g, "").trim()
  };
}
function Jll(e) {
  return Dif.has(e) ? `/${e}` : null;
}
var Dif,
  Xll = "(?:\\./)?(?:(?:npx|bunx|uvx|uv\\s+run)\\s+)?",
  kab,
  Rab;