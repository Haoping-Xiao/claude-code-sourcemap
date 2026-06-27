// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uj
// class=new  (no 2.1.88 match)
// note: 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var Uj = Q((tYh, t4i) => {
  var R7r = Mit(),
    Zji = lBt(),
    yjd = kU(),
    e4i = S7r(),
    _jd = sGe(),
    bjd = v2i(),
    Sjd = C2i(),
    Ejd = k2i(),
    Ajd = D2i(),
    Hjd = M2i(),
    Tjd = O2i(),
    vjd = B2i(),
    wjd = F2i(),
    Cjd = j7(),
    Ijd = q2i(),
    xjd = z2i(),
    kjd = HRn(),
    Rjd = J2i(),
    Ljd = Z2i(),
    Djd = uBt(),
    Pjd = TRn(),
    Mjd = E7r(),
    $jd = A7r(),
    Ojd = vRn(),
    Njd = wRn(),
    Bjd = H7r(),
    Ujd = lji(),
    Fjd = pBt(),
    jjd = G7(),
    Gjd = mBt(),
    Wjd = Tji(),
    qjd = wji(),
    Vjd = Iji(),
    zjd = Rji(),
    Kjd = Dji(),
    Yjd = kRn(),
    Xjd = Bji(),
    Jjd = Fji(),
    Qjd = Wji(),
    Zjd = Vji(),
    e4d = Qji();
  t4i.exports = {
    parse: _jd,
    valid: bjd,
    clean: Sjd,
    inc: Ejd,
    diff: Ajd,
    major: Hjd,
    minor: Tjd,
    patch: vjd,
    prerelease: wjd,
    compare: Cjd,
    rcompare: Ijd,
    compareLoose: xjd,
    compareBuild: kjd,
    sort: Rjd,
    rsort: Ljd,
    gt: Djd,
    lt: Pjd,
    eq: Mjd,
    neq: $jd,
    gte: Ojd,
    lte: Njd,
    cmp: Bjd,
    coerce: Ujd,
    Comparator: Fjd,
    Range: jjd,
    satisfies: Gjd,
    toComparators: Wjd,
    maxSatisfying: qjd,
    minSatisfying: Vjd,
    minVersion: zjd,
    validRange: Kjd,
    outside: Yjd,
    gtr: Xjd,
    ltr: Jjd,
    intersects: Qjd,
    simplifyRange: Zjd,
    subset: e4d,
    SemVer: yjd,
    re: R7r.re,
    src: R7r.src,
    tokens: R7r.t,
    SEMVER_SPEC_VERSION: Zji.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: Zji.RELEASE_TYPES,
    compareIdentifiers: e4i.compareIdentifiers,
    rcompareIdentifiers: e4i.rcompareIdentifiers
  };
});
var n4i = {};
_t(n4i, {
  getEraseScreenSequence: () => getEraseScreenSequence,
  getClearTerminalSequence: () => getClearTerminalSequence,
  eraseViewportInPlace: () => eraseViewportInPlace
});
function getClearTerminalSequence() {
  return Jx + Ait + dH;
}
function getEraseScreenSequence() {
  return Jx + dH;
}
function eraseViewportInPlace(e) {
  return dH + (Oke + $Yr(1)).repeat(e) + dH;
}
var sYh;