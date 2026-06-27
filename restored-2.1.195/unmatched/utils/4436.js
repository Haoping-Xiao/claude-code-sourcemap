// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hDo
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.004  score=0.2132  fileCov=0.0041
// note: nearest: src/cli/print.ts (0.004); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hDo] deps: Fvo, ql, co, E5, Uvo, vMe, Ye, je, Dpe, At, oc, vn, KI, X8n, sr, bMe
mDo = R(lt(), 1), Ybt = R(rt(), 1), ON = R(se(), 1);
function ZSf(e) {
  try {
    let t = Bee(e);
    return {
      content: t.content,
      fileExists: true,
      encoding: t.encoding,
      lineEndings: t.lineEndings
    };
  } catch (t) {
    if (wn(t)) return {
      content: "",
      fileExists: false,
      encoding: "utf8",
      lineEndings: "LF"
    };
    throw t;
  }
}
function yDo(e, t, n) {
  if (t === "") return "no_match";
  let r = _Me(e, t);
  if (!r) return "no_match";
  if (!n) {
    let o = e.indexOf(r);
    if (e.indexOf(r, o + r.length) !== -1) return "ambiguous";
  }
  return "applies";
}
function pvl(e) {
  return e === "applies" && at("tengu_cedar_sundial", false);
}
function eEf({
  absoluteFilePath: e,
  fileContents: t,
  lastRead: n,
  oldString: r,
  replaceAll: o,
  model: s
}) {
  if (!n) {
    if (at("tengu_velvet_hammer", false) || at(Not("tengu_velvet_hammer", s), false)) return false;
    throw new O_e(h0n);
  }
  if (Fee(e) <= n.timestamp) return false;
  if ((n.offset ?? 1) <= 1 && n.limit === void 0 && Uue(n, t)) return false;
  if (pvl(yDo(t, r, o))) return true;
  throw new O_e(y0n);
}
function fvl(e) {
  switch (e) {
    case "no_match":
      return We("errorCode8");
    case "ambiguous":
      return We("errorCode9");
    case "applies":
      return We("success");
  }
}
function tEf(e, t, n) {
  return fvl(yDo(e, t, n));
}
var oHe,
  dvl = 1073741824,
  xH;