// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jke
// matched 2.1.88 source: src/keybindings/match.ts
// class=modified (alt of src/keybindings/match.ts)  jaccard=0.2725  score=1  fileCov=0.2725
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Jke = E(() => {
  ft();
  wr();
  Bke();
  ZS();
});
function d4d() {
  ((U7r = true), (F7r = true), NRn++);
}
function g4i() {
  ((F7r = false), (NRn = 0));
}
function h4i() {
  let e = NRn;
  return ((NRn = 0), e);
}
function BRn() {
  if (U7r) return true;
  if (
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 ||
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0
  )
    return ((U7r = true), true);
  return false;
}
function y4i() {
  return F7r;
}
function _4i() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
  };
}
function b4i(e, t, n, r) {
  if (!T1().jediTerm) return (g4i(), t);
  let o = null;
  for (let s = 0; s < t.length; s++) {
    let i = t[s];
    if (i.kind !== "key") {
      o?.push(i);
      continue;
    }
    if (i.name === "wheelup" || i.name === "wheeldown") {
      if (n - e.lastWheelTime > j7r) ((e.lastWheelDownTime = 0), g4i());
      if (((e.lastWheelTime = n), i.name === "wheeldown")) e.lastWheelDownTime = n;
      if (i.name === "wheelup" && n - e.lastWheelDownTime < f4d && BRn()) {
        ((o ??= t.slice(0, s)),
          o.push({
            ...i,
            name: "wheeldown",
          }));
        continue;
      }
      o?.push(i);
      continue;
    }
    if (
      (i.name === "up" || i.name === "down") &&
      !i.ctrl &&
      !i.meta &&
      !i.shift &&
      !i.isPasted &&
      n - e.lastWheelTime < p4d
    ) {
      if (!m4i) ((m4i = true), r());
      (d4d(), (o ??= t.slice(0, s)));
      continue;
    }
    o?.push(i);
  }
  return o ?? t;
}
var U7r = false,
  m4i = false,
  F7r = false,
  NRn = 0,
  p4d = 75,
  f4d = 250,
  j7r = 200;
