// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z6
// matched 2.1.88 source: src/utils/bash/bashParser.ts
// class=new  jaccard=0.0358  score=0.4466  fileCov=0.0375
// note: nearest: src/utils/bash/bashParser.ts (0.0358); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z6 = E(() => {
  ft();
  np();
  dn();
  yC();
  $S();
  Lo();
  RE();
  ys();
  vn();
  bm();
  tA();
  bH();
  OI();
  S_();
  CXn();
  u8t();
  Ovl = require("fs/promises");
  IEf = [/\(y\/n\)/i, /\[y\/n\]/i, /\(yes\/no\)/i, /\b(?:Do you|Would you|Shall I|Are you sure|Ready to)\b.*\? *$/i, /Press (any key|Enter)/i, /Continue\?/i, /Overwrite\?/i];
  W7n = {
    name: "LocalShellTask",
    type: "local_bash",
    async kill(e, t) {
      yAe(e, t);
    }
  };
});
function DEf(e) {
  let t = e.slice(e.lastIndexOf("/") + 1).toLowerCase();
  return jvl.has(t) || jvl.has(t.replace(/\.(exe|bat|cmd|com)$/, "").replace(/(?<=[a-z])[\d.]+$/, ""));
}
function Wvl(e) {
  let t = e.filter(r => !LEf.has(r.type));
  if (t.length !== 1 || t[0].type !== "command") return false;
  let n = false;
  for (let r of t[0].children) {
    if (r.type === "command_name") continue;
    if (n) return false;
    if (Gvl.has(r.type) || r.type === "concatenation" && r.children.some(o => Gvl.has(o.type))) {
      n = true;
      continue;
    }
    if (!MEf.has(r.type)) return false;
  }
  return true;
}
function RDo(e) {
  if (e.type === "string") return e.children.filter(t => t.type !== '"').map(RDo).join("");
  if (e.type === "concatenation") return e.children.map(RDo).join("");
  return e.text;
}
function Vvl(e) {
  if (!e) return [];
  if (e.length > kEf) return null;
  let t = hL().parse(e);
  if (!t) return null;
  if (!Wvl(t.children)) return null;
  let n = [],
    r = /\$[({]|`|[<>]\(/,
    o = false,
    s = i => {
      if (i.type === "ERROR") {
        o = true;
        return;
      }
      if (i.type === "command_substitution" || i.type === "process_substitution") {
        if (!Wvl(i.children)) {
          o = true;
          return;
        }
      }
      if (i.type === "string" && i.children.some(a => !PEf.has(a.type))) {
        o = true;
        return;
      }
      if (i.type === "concatenation" && i.children.some(a => a.type === "simple_expansion" || a.type === "$")) {
        o = true;
        return;
      }
      if (i.type === "expansion") {
        o = true;
        return;
      }
      if (i.type === "arithmetic_expansion") {
        o = true;
        return;
      }
      if (i.type === "raw_string" || i.type === "ansi_c_string") {
        o = true;
        return;
      }
      if (i.type === "regex" || i.type === "extglob_pattern" || i.type === "word") {
        if (r.test(i.text) || i.type === "word" && i.text.includes("\\")) o = true;
        return;
      }
      if (REf.has(i.type)) return;
      if (i.type === "command") {
        let a = i.children.find(l => l.type === "command_name")?.children[0];
        if (a && (a.type !== "word" || !$Ef.test(a.text) || DEf(a.text))) {
          o = true;
          return;
        }
        n.push(i.children.map(RDo).join(" "));
      }
      for (let a of i.children) s(a);
    };
  return s(t), o ? null : n;
}
var kEf = 10000 /* 1e4 */,
  qvl,
  REf,
  LEf,
  jvl,
  PEf,
  Gvl,
  MEf,
  $Ef;