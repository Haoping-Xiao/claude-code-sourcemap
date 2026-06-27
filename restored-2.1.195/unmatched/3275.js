// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Eka
// matched 2.1.88 source: node_modules/zod/v4/core/to-json-schema.js
// class=new  jaccard=0.0337  score=0.1428  fileCov=0.0422
// note: nearest: node_modules/zod/v4/core/to-json-schema.js (0.0337); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Eka = E(() => {
  Fwp = ["anyOf", "oneOf", "allOf"], jwp = /^[a-zA-Z0-9_.-]{1,64}$/, Gwp = ["$defs", "definitions", "$schema", "additionalProperties", "description", "title"];
});
function zwp(e) {
  let t = e.inputSchema?.properties ?? {},
    n = Object.keys(t),
    r = [];
  if (e.description) r.push(e.description.slice(0, uJ));
  for (let a of n) {
    let l = t[a],
      c = l && typeof l === "object" && "description" in l ? l.description : void 0;
    if (typeof c === "string") r.push(c);
  }
  if (r.length === 0) return;
  let o = r.join(`
`).toLowerCase(),
    s = [...hpo];
  for (let a of n) {
    let l = a.toLowerCase();
    if (a.length >= 4 && !Vwp.has(l)) s.push(`<${l}>`, `</${l}>`);
  }
  let i = s.find(a => o.includes(a));
  if (i === void 0) return;
  return hpo.some(a => a === i) ? "invoke" : "param";
}
function Tka(e, t, n, r, o) {
  let s = 0,
    i = 0,
    a;
  for (let d of e) {
    let p = zwp(d);
    if (p === void 0) continue;
    if (p === "invoke") s++;else i++;
    a ??= d.name;
  }
  let l = o?.slice(0, uJ).toLowerCase(),
    c = l !== void 0 && hpo.some(d => l.includes(d)),
    u = s + i;
  if (u === 0 && !c) return;
  G("tengu_mcp_description_contains_toolcall_xml", {
    matchedToolCount: u,
    invokeCount: s,
    paramCount: i,
    instructionsMatch: c,
    sampleToolName: a ? Rwt(a, n) : void 0,
    mcpServerName: Rwt(t, n),
    ...(r && {
      mcpServerBaseUrl: r
    })
  });
}
function Hka(e, t) {
  return e.length >= t.length && e.slice(-t.length).toLowerCase() === t.toLowerCase();
}
function vka(e, t, n, r, o, s) {
  let i = e;
  for (let [a, l] of Object.entries(e)) {
    if (typeof l !== "string") continue;
    let c = l.length - 1;
    while (c >= 0 && (l.charCodeAt(c) === 32 || l.charCodeAt(c) === 9 || l.charCodeAt(c) === 10 || l.charCodeAt(c) === 13)) c--;
    if (c >= 0) {
      let g = l.charCodeAt(c);
      if (g >= 33 && g <= 126 && g !== 62) continue;
    }
    let u = l.trimEnd();
    if (!Hka(u, Aka)) continue;
    u = u.slice(0, -Aka.length).trimEnd();
    let d = `</${a}>`,
      p = Hka(u, d);
    if (p) u = u.slice(0, -d.length).trimEnd();
    let f = p && new RegExp(`<${wx(a)}[\\s>/]`, "i").test(l),
      m = !p ? We("param_close") : f ? We("open_guard") : void 0;
    if (G("tengu_mcp_arg_trailing_invoke_suffix", {
      wouldStrip: m === void 0,
      missKind: m,
      flagOn: o,
      paramNameLen: a.length,
      strippedToLen: u.length,
      mcpToolName: Rwt(t, r),
      mcpServerName: Rwt(n, r),
      ...(s && {
        mcpServerBaseUrl: s
      })
    }), m !== void 0 || !o) continue;
    if (i === e) i = {
      ...e
    };
    i[a] = u, sn(n, `stripped trailing </${a}></invoke> from ${t}.${a} (model emission artifact)`);
  }
  return i;
}
var hpo,
  Vwp,
  Aka = "</invoke>";