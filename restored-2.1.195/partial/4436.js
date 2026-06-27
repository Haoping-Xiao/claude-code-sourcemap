// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hDo
// matched 2.1.88 source: node_modules/get-east-asian-width/lookup.js
// class=partial  jaccard=0.0848  score=0.1263  fileCov=0.2054
// note: low-confidence suggestion: node_modules/get-east-asian-width/lookup.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hDo = E(() => {
  Fvo();
  ql();
  co();
  E5();
  Uvo();
  vMe();
  Ye();
  je();
  Dpe();
  At();
  oc();
  vn();
  KI();
  X8n();
  sr();
  bMe();
  mDo = R(lt(), 1), Ybt = R(rt(), 1), ON = R(se(), 1);
});
function ZSf(e) {
  try {
    let t = Bee(e);
    return {
      content: t.content,
      fileExists: !0,
      encoding: t.encoding,
      lineEndings: t.lineEndings
    };
  } catch (t) {
    if (wn(t)) return {
      content: "",
      fileExists: !1,
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
  return e === "applies" && at("tengu_cedar_sundial", !1);
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
    if (at("tengu_velvet_hammer", !1) || at(Not("tengu_velvet_hammer", s), !1)) return !1;
    throw new O_e(h0n);
  }
  if (Fee(e) <= n.timestamp) return !1;
  if ((n.offset ?? 1) <= 1 && n.limit === void 0 && Uue(n, t)) return !1;
  if (pvl(yDo(t, r, o))) return !0;
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