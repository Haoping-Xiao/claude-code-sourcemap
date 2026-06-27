// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qAo
// matched 2.1.88 source: node_modules/xmlbuilder/lib/XMLWriterBase.js
// class=partial  jaccard=0.0878  score=0.1278  fileCov=0.2189
// note: low-confidence suggestion: node_modules/xmlbuilder/lib/XMLWriterBase.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qAo = Q(yf => {
  function CKa(e) {
    try {
      if (typeof e !== "function") e = RegExp;
      var t = new e("\uD834\uDF06", "u").exec("\uD834\uDF06");
      return !!t && t[0].length === 2;
    } catch (n) {}
    return !1;
  }
  var Ugt = CKa();
  function NPe(e) {
    if (e.source[0] !== "[") throw Error(e + " can not be used with chars");
    return e.source.slice(1, e.source.lastIndexOf("]"));
  }
  function Ngt(e, t) {
    if (e.source[0] !== "[") throw Error("/" + e.source + "/ can not be used with chars_without");
    if (!t || typeof t !== "string") throw Error(JSON.stringify(t) + " is not a valid search");
    if (e.source.indexOf(t) === -1) throw Error('"' + t + '" is not is /' + e.source + "/");
    if (t === "-" && e.source.indexOf(t) !== 1) throw Error('"' + t + '" is not at the first postion of /' + e.source + "/");
    return new RegExp(e.source.replace(t, ""), Ugt ? "u" : "");
  }
  function qm(e) {
    var t = this;
    return new RegExp(Array.prototype.slice.call(arguments).map(function (n) {
      var r = typeof n === "string";
      if (r && t === void 0 && n === "|") throw Error("use regg instead of reg to wrap expressions with `|`!");
      return r ? n : n.source;
    }).join(""), Ugt ? "mu" : "m");
  }
  function ap(e) {
    if (arguments.length === 0) throw Error("no parameters provided");
    return qm.apply(ap, ["(?:"].concat(Array.prototype.slice.call(arguments), [")"]));
  }
  var OKp = "\uFFFD",
    BPe = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/;
  if (Ugt) BPe = qm("[", NPe(BPe), "\\u{10000}-\\u{10FFFF}", "]");
  var NKp = new RegExp("[^" + NPe(BPe) + "]", Ugt ? "u" : ""),
    UAo = /[\x20\x09\x0D\x0A]/,
    BKp = NPe(UAo),
    cE = qm(UAo, "+"),
    zI = qm(UAo, "*"),
    cVt = /[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  if (Ugt) cVt = qm("[", NPe(cVt), "\\u{10000}-\\u{10FFFF}", "]");
  var UKp = NPe(cVt),
    FAo = qm("[", UKp, NPe(/[-.0-9\xB7]/), NPe(/[\u0300-\u036F\u203F-\u2040]/), "]"),
    UJ = qm(cVt, FAo, "*"),
    EKa = qm(FAo, "+"),
    FKp = qm("&", UJ, ";"),
    jKp = ap(/&#[0-9]+;|&#x[0-9a-fA-F]+;/),
    uVt = ap(FKp, "|", jKp),
    dVt = qm("%", UJ, ";"),
    jAo = ap(qm('"', ap(/[^%&"]/, "|", dVt, "|", uVt), "*", '"'), "|", qm("'", ap(/[^%&']/, "|", dVt, "|", uVt), "*", "'")),
    GKp = ap('"', ap(/[^<&"]/, "|", uVt), "*", '"', "|", "'", ap(/[^<&']/, "|", uVt), "*", "'"),
    WKp = Ngt(cVt, ":"),
    qKp = Ngt(FAo, ":"),
    AKa = qm(WKp, qKp, "*"),
    pVt = qm(AKa, ap(":", AKa), "?"),
    VKp = qm("^", pVt, "$"),
    zKp = qm("(", pVt, ")"),
    Bgt = ap(/"[^"]*"|'[^']*'/),
    KKp = qm(/^<\?/, "(", UJ, ")", ap(cE, "(", BPe, "*?)"), "?", /\?>/),
    HKa = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/,
    fVt = ap('"', HKa, '*"', "|", "'", Ngt(HKa, "'"), "*'"),
    IKa = "<!--",
    xKa = "-->",
    YKp = qm(IKa, ap(Ngt(BPe, "-"), "|", qm("-", Ngt(BPe, "-"))), "*", xKa),
    TKa = "#PCDATA",
    XKp = ap(qm(/\(/, zI, TKa, ap(zI, /\|/, zI, pVt), "*", zI, /\)\*/), "|", qm(/\(/, zI, TKa, zI, /\)/)),
    JKp = /[?*+]?/,
    QKp = qm(/\([^>]+\)/, JKp),
    ZKp = ap("EMPTY", "|", "ANY", "|", XKp, "|", QKp),
    eYp = "<!ELEMENT",
    tYp = qm(eYp, cE, ap(pVt, "|", dVt), cE, ap(ZKp, "|", dVt), zI, ">"),
    nYp = qm("NOTATION", cE, /\(/, zI, UJ, ap(zI, /\|/, zI, UJ), "*", zI, /\)/),
    rYp = qm(/\(/, zI, EKa, ap(zI, /\|/, zI, EKa), "*", zI, /\)/),
    oYp = ap(nYp, "|", rYp),
    sYp = ap(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, "|", oYp),
    iYp = ap(/#REQUIRED|#IMPLIED/, "|", ap(ap("#FIXED", cE), "?", GKp)),
    aYp = ap(cE, UJ, cE, sYp, cE, iYp),
    lYp = "<!ATTLIST",
    cYp = qm(lYp, cE, UJ, aYp, "*", zI, ">"),
    BAo = "about:legacy-compat",
    uYp = ap('"' + BAo + '"', "|", "'" + BAo + "'"),
    GAo = "SYSTEM",
    FVn = "PUBLIC",
    jVn = ap(ap(GAo, cE, Bgt), "|", ap(FVn, cE, fVt, cE, Bgt)),
    dYp = qm("^", ap(ap(GAo, cE, "(?<SystemLiteralOnly>", Bgt, ")"), "|", ap(FVn, cE, "(?<PubidLiteral>", fVt, ")", cE, "(?<SystemLiteral>", Bgt, ")"))),
    pYp = qm("^", fVt, "$"),
    fYp = qm("^", Bgt, "$"),
    mYp = ap(cE, "NDATA", cE, UJ),
    gYp = ap(jAo, "|", ap(jVn, mYp, "?")),
    kKa = "<!ENTITY",
    hYp = qm(kKa, cE, UJ, cE, gYp, zI, ">"),
    yYp = ap(jAo, "|", jVn),
    _Yp = qm(kKa, cE, "%", cE, UJ, cE, yYp, zI, ">"),
    bYp = ap(hYp, "|", _Yp),
    SYp = qm(FVn, cE, fVt),
    EYp = qm("<!NOTATION", cE, UJ, cE, ap(jVn, "|", SYp), zI, ">"),
    WAo = qm(zI, "=", zI),
    vKa = /1[.]\d+/,
    AYp = qm(cE, "version", WAo, ap("'", vKa, "'", "|", '"', vKa, '"')),
    wKa = /[A-Za-z][-A-Za-z0-9._]*/,
    HYp = ap(cE, "encoding", WAo, ap('"', wKa, '"', "|", "'", wKa, "'")),
    TYp = ap(cE, "standalone", WAo, ap("'", ap("yes", "|", "no"), "'", "|", '"', ap("yes", "|", "no"), '"')),
    vYp = qm(/^<\?xml/, AYp, HYp, "?", TYp, "?", zI, /\?>/),
    wYp = "<!DOCTYPE",
    CYp = "<![CDATA[",
    IYp = "]]>",
    xYp = /<!\[CDATA\[/,
    kYp = /\]\]>/,
    RYp = qm(BPe, "*?", kYp),
    LYp = qm(xYp, RYp);
  yf.chars = NPe;
  yf.chars_without = Ngt;
  yf.detectUnicodeSupport = CKa;
  yf.reg = qm;
  yf.regg = ap;
  yf.ABOUT_LEGACY_COMPAT = BAo;
  yf.ABOUT_LEGACY_COMPAT_SystemLiteral = uYp;
  yf.AttlistDecl = cYp;
  yf.CDATA_START = CYp;
  yf.CDATA_END = IYp;
  yf.CDSect = LYp;
  yf.Char = BPe;
  yf.Comment = YKp;
  yf.COMMENT_START = IKa;
  yf.COMMENT_END = xKa;
  yf.DOCTYPE_DECL_START = wYp;
  yf.elementdecl = tYp;
  yf.EntityDecl = bYp;
  yf.EntityValue = jAo;
  yf.ExternalID = jVn;
  yf.ExternalID_match = dYp;
  yf.Name = UJ;
  yf.NotationDecl = EYp;
  yf.Reference = uVt;
  yf.PEReference = dVt;
  yf.PI = KKp;
  yf.PUBLIC = FVn;
  yf.PubidLiteral = fVt;
  yf.PubidLiteral_match = pYp;
  yf.QName = pVt;
  yf.QName_exact = VKp;
  yf.QName_group = zKp;
  yf.S = cE;
  yf.SChar_s = BKp;
  yf.S_OPT = zI;
  yf.SYSTEM = GAo;
  yf.SystemLiteral = Bgt;
  yf.SystemLiteral_match = fYp;
  yf.InvalidChar = NKp;
  yf.UNICODE_REPLACEMENT_CHARACTER = OKp;
  yf.UNICODE_SUPPORT = Ugt;
  yf.XMLDecl = vYp;
});