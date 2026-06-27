// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pYn
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/HTMLParser.js
// class=new  jaccard=0.0355  score=1  fileCov=0.0355
// note: nearest: node_modules/@mixmark-io/domino/lib/HTMLParser.js (0.0355); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pYn = Q((Jdb, vpl) => {
  vpl.exports = E_;
  var wcf = rYn(),
    Ccf = sYn(),
    zxo = IN(),
    nd = kk().NAMESPACE,
    ypl = eYn(),
    hS = ypl.elements,
    H6e = Function.prototype.apply.bind(Array.prototype.push),
    iYn = -1,
    P_t = 1,
    NF = 2,
    Kg = 3,
    Jpe = 4,
    Icf = 5,
    xcf = [],
    kcf = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i,
    Rcf = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
    rpl = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i,
    Lcf = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i,
    v6e = Object.create(null);
  v6e[nd.HTML] = {
    __proto__: null,
    address: !0,
    applet: !0,
    area: !0,
    article: !0,
    aside: !0,
    base: !0,
    basefont: !0,
    bgsound: !0,
    blockquote: !0,
    body: !0,
    br: !0,
    button: !0,
    caption: !0,
    center: !0,
    col: !0,
    colgroup: !0,
    dd: !0,
    details: !0,
    dir: !0,
    div: !0,
    dl: !0,
    dt: !0,
    embed: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    frame: !0,
    frameset: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    head: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    html: !0,
    iframe: !0,
    img: !0,
    input: !0,
    li: !0,
    link: !0,
    listing: !0,
    main: !0,
    marquee: !0,
    menu: !0,
    meta: !0,
    nav: !0,
    noembed: !0,
    noframes: !0,
    noscript: !0,
    object: !0,
    ol: !0,
    p: !0,
    param: !0,
    plaintext: !0,
    pre: !0,
    script: !0,
    section: !0,
    select: !0,
    source: !0,
    style: !0,
    summary: !0,
    table: !0,
    tbody: !0,
    td: !0,
    template: !0,
    textarea: !0,
    tfoot: !0,
    th: !0,
    thead: !0,
    title: !0,
    tr: !0,
    track: !0,
    ul: !0,
    wbr: !0,
    xmp: !0
  };
  v6e[nd.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  v6e[nd.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0,
    "annotation-xml": !0
  };
  var Xxo = Object.create(null);
  Xxo[nd.HTML] = {
    __proto__: null,
    address: !0,
    div: !0,
    p: !0
  };
  var _pl = Object.create(null);
  _pl[nd.HTML] = {
    __proto__: null,
    dd: !0,
    dt: !0
  };
  var M_t = Object.create(null);
  M_t[nd.HTML] = {
    __proto__: null,
    table: !0,
    thead: !0,
    tbody: !0,
    tfoot: !0,
    tr: !0
  };
  var bpl = Object.create(null);
  bpl[nd.HTML] = {
    __proto__: null,
    dd: !0,
    dt: !0,
    li: !0,
    menuitem: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rb: !0,
    rp: !0,
    rt: !0,
    rtc: !0
  };
  var Spl = Object.create(null);
  Spl[nd.HTML] = {
    __proto__: null,
    caption: !0,
    colgroup: !0,
    dd: !0,
    dt: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rb: !0,
    rp: !0,
    rt: !0,
    rtc: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    thead: !0,
    tr: !0
  };
  var cYn = Object.create(null);
  cYn[nd.HTML] = {
    __proto__: null,
    table: !0,
    template: !0,
    html: !0
  };
  var uYn = Object.create(null);
  uYn[nd.HTML] = {
    __proto__: null,
    tbody: !0,
    tfoot: !0,
    thead: !0,
    template: !0,
    html: !0
  };
  var Jxo = Object.create(null);
  Jxo[nd.HTML] = {
    __proto__: null,
    tr: !0,
    template: !0,
    html: !0
  };
  var Epl = Object.create(null);
  Epl[nd.HTML] = {
    __proto__: null,
    button: !0,
    fieldset: !0,
    input: !0,
    keygen: !0,
    object: !0,
    output: !0,
    select: !0,
    textarea: !0,
    img: !0
  };
  var Qpe = Object.create(null);
  Qpe[nd.HTML] = {
    __proto__: null,
    applet: !0,
    caption: !0,
    html: !0,
    table: !0,
    td: !0,
    th: !0,
    marquee: !0,
    object: !0,
    template: !0
  };
  Qpe[nd.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0,
    "annotation-xml": !0
  };
  Qpe[nd.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  var dYn = Object.create(Qpe);
  dYn[nd.HTML] = Object.create(Qpe[nd.HTML]);
  dYn[nd.HTML].ol = !0;
  dYn[nd.HTML].ul = !0;
  var Qxo = Object.create(Qpe);
  Qxo[nd.HTML] = Object.create(Qpe[nd.HTML]);
  Qxo[nd.HTML].button = !0;
  var Apl = Object.create(null);
  Apl[nd.HTML] = {
    __proto__: null,
    html: !0,
    table: !0,
    template: !0
  };
  var Dcf = Object.create(null);
  Dcf[nd.HTML] = {
    __proto__: null,
    optgroup: !0,
    option: !0
  };
  var Hpl = Object.create(null);
  Hpl[nd.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0
  };
  var Tpl = Object.create(null);
  Tpl[nd.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  var opl = {
      __proto__: null,
      "xlink:actuate": nd.XLINK,
      "xlink:arcrole": nd.XLINK,
      "xlink:href": nd.XLINK,
      "xlink:role": nd.XLINK,
      "xlink:show": nd.XLINK,
      "xlink:title": nd.XLINK,
      "xlink:type": nd.XLINK,
      "xml:base": nd.XML,
      "xml:lang": nd.XML,
      "xml:space": nd.XML,
      xmlns: nd.XMLNS,
      "xmlns:xlink": nd.XMLNS
    },
    spl = {
      __proto__: null,
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    },
    ipl = {
      __proto__: null,
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    },
    apl = {
      __proto__: null,
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    },
    Pcf = {
      __proto__: null,
      AElig: 198,
      "AElig;": 198,
      AMP: 38,
      "AMP;": 38,
      Aacute: 193,
      "Aacute;": 193,
      "Abreve;": 258,
      Acirc: 194,
      "Acirc;": 194,
      "Acy;": 1040,
      "Afr;": [55349, 56580],
      Agrave: 192,
      "Agrave;": 192,
      "Alpha;": 913,
      "Amacr;": 256,
      "And;": 10835,
      "Aogon;": 260,
      "Aopf;": [55349, 56632],
      "ApplyFunction;": 8289,
      Aring: 197,
      "Aring;": 197,
      "Ascr;": [55349, 56476],
      "Assign;": 8788,
      Atilde: 195,
      "Atilde;": 195,
      Auml: 196,
      "Auml;": 196,
      "Backslash;": 8726,
      "Barv;": 10983,
      "Barwed;": 8966,
      "Bcy;": 1041,
      "Because;": 8757,
      "Bernoullis;": 8492,
      "Beta;": 914,
      "Bfr;": [55349, 56581],
      "Bopf;": [55349, 56633],
      "Breve;": 728,
      "Bscr;": 8492,
      "Bumpeq;": 8782,
      "CHcy;": 1063,
      COPY: 169,
      "COPY;": 169,
      "Cacute;": 262,
      "Cap;": 8914,
      "CapitalDifferentialD;": 8517,
      "Cayleys;": 8493,
      "Ccaron;": 268,
      Ccedil: 199,
      "Ccedil;": 199,
      "Ccirc;": 264,
      "Cconint;": 8752,
      "Cdot;": 266,
      "Cedilla;": 184,
      "CenterDot;": 183,
      "Cfr;": 8493,
      "Chi;": 935,
      "CircleDot;": 8857,
      "CircleMinus;": 8854,
      "CirclePlus;": 8853,
      "CircleTimes;": 8855,
      "ClockwiseContourIntegral;": 8754,
      "CloseCurlyDoubleQuote;": 8221,
      "CloseCurlyQuote;": 8217,
      "Colon;": 8759,
      "Colone;": 10868,
      "Congruent;": 8801,
      "Conint;": 8751,
      "ContourIntegral;": 8750,
      "Copf;": 8450,
      "Coproduct;": 8720,
      "CounterClockwiseContourIntegral;": 8755,
      "Cross;": 10799,
      "Cscr;": [55349, 56478],
      "Cup;": 8915,
      "CupCap;": 8781,
      "DD;": 8517,
      "DDotrahd;": 10513,
      "DJcy;": 1026,
      "DScy;": 1029,
      "DZcy;": 1039,
      "Dagger;": 8225,
      "Darr;": 8609,
      "Dashv;": 10980,
      "Dcaron;": 270,
      "Dcy;": 1044,
      "Del;": 8711,
      "Delta;": 916,
      "Dfr;": [55349, 56583],
      "DiacriticalAcute;": 180,
      "DiacriticalDot;": 729,
      "DiacriticalDoubleAcute;": 733,
      "DiacriticalGrave;": 96,
      "DiacriticalTilde;": 732,
      "Diamond;": 8900,
      "DifferentialD;": 8518,
      "Dopf;": [55349, 56635],
      "Dot;": 168,
      "DotDot;": 8412,
      "DotEqual;": 8784,
      "DoubleContourIntegral;": 8751,
      "DoubleDot;": 168,
      "DoubleDownArrow;": 8659,
      "DoubleLeftArrow;": 8656,
      "DoubleLeftRightArrow;": 8660,
      "DoubleLeftTee;": 10980,
      "DoubleLongLeftArrow;": 10232,
      "DoubleLongLeftRightArrow;": 10234,
      "DoubleLongRightArrow;": 10233,
      "DoubleRightArrow;": 8658,
      "DoubleRightTee;": 8872,
      "DoubleUpArrow;": 8657,
      "DoubleUpDownArrow;": 8661,
      "DoubleVerticalBar;": 8741,
      "DownArrow;": 8595,
      "DownArrowBar;": 10515,
      "DownArrowUpArrow;": 8693,
      "DownBreve;": 785,
      "DownLeftRightVector;": 10576,
      "DownLeftTeeVector;": 10590,
      "DownLeftVector;": 8637,
      "DownLeftVectorBar;": 10582,
      "DownRightTeeVector;": 10591,
      "DownRightVector;": 8641,
      "DownRightVectorBar;": 10583,
      "DownTee;": 8868,
      "DownTeeArrow;": 8615,
      "Downarrow;": 8659,
      "Dscr;": [55349, 56479],
      "Dstrok;": 272,
      "ENG;": 330,
      ETH: 208,
      "ETH;": 208,
      Eacute: 201,
      "Eacute;": 201,
      "Ecaron;": 282,
      Ecirc: 202,
      "Ecirc;": 202,
      "Ecy;": 1069,
      "Edot;": 278,
      "Efr;": [55349, 56584],
      Egrave: 200,
      "Egrave;": 200,
      "Element;": 8712,
      "Emacr;": 274,
      "EmptySmallSquare;": 9723,
      "EmptyVerySmallSquare;": 9643,
      "Eogon;": 280,
      "Eopf;": [55349, 56636],
      "Epsilon;": 917,
      "Equal;": 10869,
      "EqualTilde;": 8770,
      "Equilibrium;": 8652,
      "Escr;": 8496,
      "Esim;": 10867,
      "Eta;": 919,
      Euml: 203,
      "Euml;": 203,
      "Exists;": 8707,
      "ExponentialE;": 8519,
      "Fcy;": 1060,
      "Ffr;": [55349, 56585],
      "FilledSmallSquare;": 9724,
      "FilledVerySmallSquare;": 9642,
      "Fopf;": [55349, 56637],
      "ForAll;": 8704,
      "Fouriertrf;": 8497,
      "Fscr;": 8497,
      "GJcy;": 1027,
      GT: 62,
      "GT;": 62,
      "Gamma;": 915,
      "Gammad;": 988,
      "Gbreve;": 286,
      "Gcedil;": 290,
      "Gcirc;": 284,
      "Gcy;": 1043,
      "Gdot;": 288,
      "Gfr;": [55349, 56586],
      "Gg;": 8921,
      "Gopf;": [55349, 56638],
      "GreaterEqual;": 8805,
      "GreaterEqualLess;": 8923,
      "GreaterFullEqual;": 8807,
      "GreaterGreater;": 10914,
      "GreaterLess;": 8823,
      "GreaterSlantEqual;": 10878,
      "GreaterTilde;": 8819,
      "Gscr;": [55349, 56482],
      "Gt;": 8811,
      "HARDcy;": 1066,
      "Hacek;": 711,
      "Hat;": 94,
      "Hcirc;": 292,
      "Hfr;": 8460,
      "HilbertSpace;": 8459,
      "Hopf;": 8461,
      "HorizontalLine;": 9472,
      "Hscr;": 8459,
      "Hstrok;": 294,
      "HumpDownHump;": 8782,
      "HumpEqual;": 8783,
      "IEcy;": 1045,
      "IJlig;": 306,
      "IOcy;": 1025,
      Iacute: 205,
      "Iacute;": 205,
      Icirc: 206,
      "Icirc;": 206,
      "Icy;": 1048,
      "Idot;": 304,
      "Ifr;": 8465,
      Igrave: 204,
      "Igrave;": 204,
      "Im;": 8465,
      "Imacr;": 298,
      "ImaginaryI;": 8520,
      "Implies;": 8658,
      "Int;": 8748,
      "Integral;": 8747,
      "Intersection;": 8898,
      "InvisibleComma;": 8291,
      "InvisibleTimes;": 8290,
      "Iogon;": 302,
      "Iopf;": [55349, 56640],
      "Iota;": 921,
      "Iscr;": 8464,
      "Itilde;": 296,
      "Iukcy;": 1030,
      Iuml: 207,
      "Iuml;": 207,
      "Jcirc;": 308,
      "Jcy;": 1049,
      "Jfr;": [55349, 56589],
      "Jopf;": [55349, 56641],
      "Jscr;": [55349, 56485],
      "Jsercy;": 1032,
      "Jukcy;": 1028,
      "KHcy;": 1061,
      "KJcy;": 1036,
      "Kappa;": 922,
      "Kcedil;": 310,
      "Kcy;": 1050,
      "Kfr;": [55349, 56590],
      "Kopf;": [55349, 56642],
      "Kscr;": [55349, 56486],
      "LJcy;": 1033,
      LT: 60,
      "LT;": 60,
      "Lacute;": 313,
      "Lambda;": 923,
      "Lang;": 10218,
      "Laplacetrf;": 8466,
      "Larr;": 8606,
      "Lcaron;": 317,
      "Lcedil;": 315,
      "Lcy;": 1051,
      "LeftAngleBracket;": 10216,
      "LeftArrow;": 8592,
      "LeftArrowBar;": 8676,
      "LeftArrowRightArrow;": 8646,
      "LeftCeiling;": 8968,
      "LeftDoubleBracket;": 10214,
      "LeftDownTeeVector;": 10593,
      "LeftDownVector;": 8643,
      "LeftDownVectorBar;": 10585,
      "LeftFloor;": 8970,
      "LeftRightArrow;": 8596,
      "LeftRightVector;": 10574,
      "LeftTee;": 8867,
      "LeftTeeArrow;": 8612,
      "LeftTeeVector;": 10586,
      "LeftTriangle;": 8882,
      "LeftTriangleBar;": 10703,
      "LeftTriangleEqual;": 8884,
      "LeftUpDownVector;": 10577,
      "LeftUpTeeVector;": 10592,
      "LeftUpVector;": 8639,
      "LeftUpVectorBar;": 10584,
      "LeftVector;": 8636,
      "LeftVectorBar;": 10578,
      "Leftarrow;": 8656,
      "Leftrightarrow;": 8660,
      "LessEqualGreater;": 8922,
      "LessFullEqual;": 8806,
      "LessGreater;": 8822,
      "LessLess;": 10913,
      "LessSlantEqual;": 10877,
      "LessTilde;": 8818,
      "Lfr;": [55349, 56591],
      "Ll;": 8920,
      "Lleftarrow;": 8666,
      "Lmidot;": 319,
      "LongLeftArrow;": 10229,
      "LongLeftRightArrow;": 10231,
      "LongRightArrow;": 10230,
      "Longleftarrow;": 10232,
      "Longleftrightarrow;": 10234,
      "Longrightarrow;": 10233,
      "Lopf;": [55349, 56643],
      "LowerLeftArrow;": 8601,
      "LowerRightArrow;": 8600,
      "Lscr;": 8466,
      "Lsh;": 8624,
      "Lstrok;": 321,
      "Lt;": 8810,
      "Map;": 10501,
      "Mcy;": 1052,
      "MediumSpace;": 8287,
      "Mellintrf;": 8499,
      "Mfr;": [55349, 56592],
      "MinusPlus;": 8723,
      "Mopf;": [55349, 56644],
      "Mscr;": 8499,
      "Mu;": 924,
      "NJcy;": 1034,
      "Nacute;": 323,
      "Ncaron;": 327,
      "Ncedil;": 325,
      "Ncy;": 1053,
      "NegativeMediumSpace;": 8203,
      "NegativeThickSpace;": 8203,
      "NegativeThinSpace;": 8203,
      "NegativeVeryThinSpace;": 8203,
      "NestedGreaterGreater;": 8811,
      "NestedLessLess;": 8810,
      "NewLine;": 10,
      "Nfr;": [55349, 56593],
      "NoBreak;": 8288,
      "NonBreakingSpace;": 160,
      "Nopf;": 8469,
      "Not;": 10988,
      "NotCongruent;": 8802,
      "NotCupCap;": 8813,
      "NotDoubleVerticalBar;": 8742,
      "NotElement;": 8713,
      "NotEqual;": 8800,
      "NotEqualTilde;": [8770, 824],
      "NotExists;": 8708,
      "NotGreater;": 8815,
      "NotGreaterEqual;": 8817,
      "NotGreaterFullEqual;": [8807, 824],
      "NotGreaterGreater;": [8811, 824],
      "NotGreaterLess;": 8825,
      "NotGreaterSlantEqual;": [10878, 824],
      "NotGreaterTilde;": 8821,
      "NotHumpDownHump;": [8782, 824],
      "NotHumpEqual;": [8783, 824],
      "NotLeftTriangle;": 8938,
      "NotLeftTriangleBar;": [10703, 824],
      "NotLeftTriangleEqual;": 8940,
      "NotLess;": 8814,
      "NotLessEqual;": 8816,
      "NotLessGreater;": 8824,
      "NotLessLess;": [8810, 824],
      "NotLessSlantEqual;": [10877, 824],
      "NotLessTilde;": 8820,
      "NotNestedGreaterGreater;": [10914, 824],
      "NotNestedLessLess;": [10913, 824],
      "NotPrecedes;": 8832,
      "NotPrecedesEqual;": [10927, 824],
      "NotPrecedesSlantEqual;": 8928,
      "NotReverseElement;": 8716,
      "NotRightTriangle;": 8939,
      "NotRightTriangleBar;": [10704, 824],
      "NotRightTriangleEqual;": 8941,
      "NotSquareSubset;": [8847, 824],
      "NotSquareSubsetEqual;": 8930,
      "NotSquareSuperset;": [8848, 824],
      "NotSquareSupersetEqual;": 8931,
      "NotSubset;": [8834, 8402],
      "NotSubsetEqual;": 8840,
      "NotSucceeds;": 8833,
      "NotSucceedsEqual;": [10928, 824],
      "NotSucceedsSlantEqual;": 8929,
      "NotSucceedsTilde;": [8831, 824],
      "NotSuperset;": [8835, 8402],
      "NotSupersetEqual;": 8841,
      "NotTilde;": 8769,
      "NotTildeEqual;": 8772,
      "NotTildeFullEqual;": 8775,
      "NotTildeTilde;": 8777,
      "NotVerticalBar;": 8740,
      "Nscr;": [55349, 56489],
      Ntilde: 209,
      "Ntilde;": 209,
      "Nu;": 925,
      "OElig;": 338,
      Oacute: 211,
      "Oacute;": 211,
      Ocirc: 212,
      "Ocirc;": 212,
      "Ocy;": 1054,
      "Odblac;": 336,
      "Ofr;": [55349, 56594],
      Ograve: 210,
      "Ograve;": 210,
      "Omacr;": 332,
      "Omega;": 937,
      "Omicron;": 927,
      "Oopf;": [55349, 56646],
      "OpenCurlyDoubleQuote;": 8220,
      "OpenCurlyQuote;": 8216,
      "Or;": 10836,
      "Oscr;": [55349, 56490],
      Oslash: 216,
      "Oslash;": 216,
      Otilde: 213,
      "Otilde;": 213,
      "Otimes;": 10807,
      Ouml: 214,
      "Ouml;": 214,
      "OverBar;": 8254,
      "OverBrace;": 9182,
      "OverBracket;": 9140,
      "OverParenthesis;": 9180,
      "PartialD;": 8706,
      "Pcy;": 1055,
      "Pfr;": [55349, 56595],
      "Phi;": 934,
      "Pi;": 928,
      "PlusMinus;": 177,
      "Poincareplane;": 8460,
      "Popf;": 8473,
      "Pr;": 10939,
      "Precedes;": 8826,
      "PrecedesEqual;": 10927,
      "PrecedesSlantEqual;": 8828,
      "PrecedesTilde;": 8830,
      "Prime;": 8243,
      "Product;": 8719,
      "Proportion;": 8759,
      "Proportional;": 8733,
      "Pscr;": [55349, 56491],
      "Psi;": 936,
      QUOT: 34,
      "QUOT;": 34,
      "Qfr;": [55349, 56596],
      "Qopf;": 8474,
      "Qscr;": [55349, 56492],
      "RBarr;": 10512,
      REG: 174,
      "REG;": 174,
      "Racute;": 340,
      "Rang;": 10219,
      "Rarr;": 8608,
      "Rarrtl;": 10518,
      "Rcaron;": 344,
      "Rcedil;": 342,
      "Rcy;": 1056,
      "Re;": 8476,
      "ReverseElement;": 8715,
      "ReverseEquilibrium;": 8651,
      "ReverseUpEquilibrium;": 10607,
      "Rfr;": 8476,
      "Rho;": 929,
      "RightAngleBracket;": 10217,
      "RightArrow;": 8594,
      "RightArrowBar;": 8677,
      "RightArrowLeftArrow;": 8644,
      "RightCeiling;": 8969,
      "RightDoubleBracket;": 10215,
      "RightDownTeeVector;": 10589,
      "RightDownVector;": 8642,
      "RightDownVectorBar;": 10581,
      "RightFloor;": 8971,
      "RightTee;": 8866,
      "RightTeeArrow;": 8614,
      "RightTeeVector;": 10587,
      "RightTriangle;": 8883,
      "RightTriangleBar;": 10704,
      "RightTriangleEqual;": 8885,
      "RightUpDownVector;": 10575,
      "RightUpTeeVector;": 10588,
      "RightUpVector;": 8638,
      "RightUpVectorBar;": 10580,
      "RightVector;": 8640,
      "RightVectorBar;": 10579,
      "Rightarrow;": 8658,
      "Ropf;": 8477,
      "RoundImplies;": 10608,
      "Rrightarrow;": 8667,
      "Rscr;": 8475,
      "Rsh;": 8625,
      "RuleDelayed;": 10740,
      "SHCHcy;": 1065,
      "SHcy;": 1064,
      "SOFTcy;": 1068,
      "Sacute;": 346,
      "Sc;": 10940,
      "Scaron;": 352,
      "Scedil;": 350,
      "Scirc;": 348,
      "Scy;": 1057,
      "Sfr;": [55349, 56598],
      "ShortDownArrow;": 8595,
      "ShortLeftArrow;": 8592,
      "ShortRightArrow;": 8594,
      "ShortUpArrow;": 8593,
      "Sigma;": 931,
      "SmallCircle;": 8728,
      "Sopf;": [55349, 56650],
      "Sqrt;": 8730,
      "Square;": 9633,
      "SquareIntersection;": 8851,
      "SquareSubset;": 8847,
      "SquareSubsetEqual;": 8849,
      "SquareSuperset;": 8848,
      "SquareSupersetEqual;": 8850,
      "SquareUnion;": 8852,
      "Sscr;": [55349, 56494],
      "Star;": 8902,
      "Sub;": 8912,
      "Subset;": 8912,
      "SubsetEqual;": 8838,
      "Succeeds;": 8827,
      "SucceedsEqual;": 10928,
      "SucceedsSlantEqual;": 8829,
      "SucceedsTilde;": 8831,
      "SuchThat;": 8715,
      "Sum;": 8721,
      "Sup;": 8913,
      "Superset;": 8835,
      "SupersetEqual;": 8839,
      "Supset;": 8913,
      THORN: 222,
      "THORN;": 222,
      "TRADE;": 8482,
      "TSHcy;": 1035,
      "TScy;": 1062,
      "Tab;": 9,
      "Tau;": 932,
      "Tcaron;": 356,
      "Tcedil;": 354,
      "Tcy;": 1058,
      "Tfr;": [55349, 56599],
      "Therefore;": 8756,
      "Theta;": 920,
      "ThickSpace;": [8287, 8202],
      "ThinSpace;": 8201,
      "Tilde;": 8764,
      "TildeEqual;": 8771,
      "TildeFullEqual;": 8773,
      "TildeTilde;": 8776,
      "Topf;": [55349, 56651],
      "TripleDot;": 8411,
      "Tscr;": [55349, 56495],
      "Tstrok;": 358,
      Uacute: 218,
      "Uacute;": 218,
      "Uarr;": 8607,
      "Uarrocir;": 10569,
      "Ubrcy;": 1038,
      "Ubreve;": 364,
      Ucirc: 219,
      "Ucirc;": 219,
      "Ucy;": 1059,
      "Udblac;": 368,
      "Ufr;": [55349, 56600],
      Ugrave: 217,
      "Ugrave;": 217,
      "Umacr;": 362,
      "UnderBar;": 95,
      "UnderBrace;": 9183,
      "UnderBracket;": 9141,
      "UnderParenthesis;": 9181,
      "Union;": 8899,
      "UnionPlus;": 8846,
      "Uogon;": 370,
      "Uopf;": [55349, 56652],
      "UpArrow;": 8593,
      "UpArrowBar;": 10514,
      "UpArrowDownArrow;": 8645,
      "UpDownArrow;": 8597,
      "UpEquilibrium;": 10606,
      "UpTee;": 8869,
      "UpTeeArrow;": 8613,
      "Uparrow;": 8657,
      "Updownarrow;": 8661,
      "UpperLeftArrow;": 8598,
      "UpperRightArrow;": 8599,
      "Upsi;": 978,
      "Upsilon;": 933,
      "Uring;": 366,
      "Uscr;": [55349, 56496],
      "Utilde;": 360,
      Uuml: 220,
      "Uuml;": 220,
      "VDash;": 8875,
      "Vbar;": 10987,
      "Vcy;": 1042,
      "Vdash;": 8873,
      "Vdashl;": 10982,
      "Vee;": 8897,
      "Verbar;": 8214,
      "Vert;": 8214,
      "VerticalBar;": 8739,
      "VerticalLine;": 124,
      "VerticalSeparator;": 10072,
      "VerticalTilde;": 8768,
      "VeryThinSpace;": 8202,
      "Vfr;": [55349, 56601],
      "Vopf;": [55349, 56653],
      "Vscr;": [55349, 56497],
      "Vvdash;": 8874,
      "Wcirc;": 372,
      "Wedge;": 8896,
      "Wfr;": [55349, 56602],
      "Wopf;": [55349, 56654],
      "Wscr;": [55349, 56498],
      "Xfr;": [55349, 56603],
      "Xi;": 926,
      "Xopf;": [55349, 56655],
      "Xscr;": [55349, 56499],
      "YAcy;": 1071,
      "YIcy;": 1031,
      "YUcy;": 1070,
      Yacute: 221,
      "Yacute;": 221,
      "Ycirc;": 374,
      "Ycy;": 1067,
      "Yfr;": [55349, 56604],
      "Yopf;": [55349, 56656],
      "Yscr;": [55349, 56500],
      "Yuml;": 376,
      "ZHcy;": 1046,
      "Zacute;": 377,
      "Zcaron;": 381,
      "Zcy;": 1047,
      "Zdot;": 379,
      "ZeroWidthSpace;": 8203,
      "Zeta;": 918,
      "Zfr;": 8488,
      "Zopf;": 8484,
      "Zscr;": [55349, 56501],
      aacute: 225,
      "aacute;": 225,
      "abreve;": 259,
      "ac;": 8766,
      "acE;": [8766, 819],
      "acd;": 8767,
      acirc: 226,
      "acirc;": 226,
      acute: 180,
      "acute;": 180,
      "acy;": 1072,
      aelig: 230,
      "aelig;": 230,
      "af;": 8289,
      "afr;": [55349, 56606],
      agrave: 224,
      "agrave;": 224,
      "alefsym;": 8501,
      "aleph;": 8501,
      "alpha;": 945,
      "amacr;": 257,
      "amalg;": 10815,
      amp: 38,
      "amp;": 38,
      "and;": 8743,
      "andand;": 10837,
      "andd;": 10844,
      "andslope;": 10840,
      "andv;": 10842,
      "ang;": 8736,
      "ange;": 10660,
      "angle;": 8736,
      "angmsd;": 8737,
      "angmsdaa;": 10664,
      "angmsdab;": 10665,
      "angmsdac;": 10666,
      "angmsdad;": 10667,
      "angmsdae;": 10668,
      "angmsdaf;": 10669,
      "angmsdag;": 10670,
      "angmsdah;": 10671,
      "angrt;": 8735,
      "angrtvb;": 8894,
      "angrtvbd;": 10653,
      "angsph;": 8738,
      "angst;": 197,
      "angzarr;": 9084,
      "aogon;": 261,
      "aopf;": [55349, 56658],
      "ap;": 8776,
      "apE;": 10864,
      "apacir;": 10863,
      "ape;": 8778,
      "apid;": 8779,
      "apos;": 39,
      "approx;": 8776,
      "approxeq;": 8778,
      aring: 229,
      "aring;": 229,
      "ascr;": [55349, 56502],
      "ast;": 42,
      "asymp;": 8776,
      "asympeq;": 8781,
      atilde: 227,
      "atilde;": 227,
      auml: 228,
      "auml;": 228,
      "awconint;": 8755,
      "awint;": 10769,
      "bNot;": 10989,
      "backcong;": 8780,
      "backepsilon;": 1014,
      "backprime;": 8245,
      "backsim;": 8765,
      "backsimeq;": 8909,
      "barvee;": 8893,
      "barwed;": 8965,
      "barwedge;": 8965,
      "bbrk;": 9141,
      "bbrktbrk;": 9142,
      "bcong;": 8780,
      "bcy;": 1073,
      "bdquo;": 8222,
      "becaus;": 8757,
      "because;": 8757,
      "bemptyv;": 10672,
      "bepsi;": 1014,
      "bernou;": 8492,
      "beta;": 946,
      "beth;": 8502,
      "between;": 8812,
      "bfr;": [55349, 56607],
      "bigcap;": 8898,
      "bigcirc;": 9711,
      "bigcup;": 8899,
      "bigodot;": 10752,
      "bigoplus;": 10753,
      "bigotimes;": 10754,
      "bigsqcup;": 10758,
      "bigstar;": 9733,
      "bigtriangledown;": 9661,
      "bigtriangleup;": 9651,
      "biguplus;": 10756,
      "bigvee;": 8897,
      "bigwedge;": 8896,
      "bkarow;": 10509,
      "blacklozenge;": 10731,
      "blacksquare;": 9642,
      "blacktriangle;": 9652,
      "blacktriangledown;": 9662,
      "blacktriangleleft;": 9666,
      "blacktriangleright;": 9656,
      "blank;": 9251,
      "blk12;": 9618,
      "blk14;": 9617,
      "blk34;": 9619,
      "block;": 9608,
      "bne;": [61, 8421],
      "bnequiv;": [8801, 8421],
      "bnot;": 8976,
      "bopf;": [55349, 56659],
      "bot;": 8869,
      "bottom;": 8869,
      "bowtie;": 8904,
      "boxDL;": 9559,
      "boxDR;": 9556,
      "boxDl;": 9558,
      "boxDr;": 9555,
      "boxH;": 9552,
      "boxHD;": 9574,
      "boxHU;": 9577,
      "boxHd;": 9572,
      "boxHu;": 9575,
      "boxUL;": 9565,
      "boxUR;": 9562,
      "boxUl;": 9564,
      "boxUr;": 9561,
      "boxV;": 9553,
      "boxVH;": 9580,
      "boxVL;": 9571,
      "boxVR;": 9568,
      "boxVh;": 9579,
      "boxVl;": 9570,
      "boxVr;": 9567,
      "boxbox;": 10697,
      "boxdL;": 9557,
      "boxdR;": 9554,
      "boxdl;": 9488,
      "boxdr;": 9484,
      "boxh;": 9472,
      "boxhD;": 9573,
      "boxhU;": 9576,
      "boxhd;": 9516,
      "boxhu;": 9524,
      "boxminus;": 8863,
      "boxplus;": 8862,
      "boxtimes;": 8864,
      "boxuL;": 9563,
      "boxuR;": 9560,
      "boxul;": 9496,
      "boxur;": 9492,
      "boxv;": 9474,
      "boxvH;": 9578,
      "boxvL;": 9569,
      "boxvR;": 9566,
      "boxvh;": 9532,
      "boxvl;": 9508,
      "boxvr;": 9500,
      "bprime;": 8245,
      "breve;": 728,
      brvbar: 166,
      "brvbar;": 166,
      "bscr;": [55349, 56503],
      "bsemi;": 8271,
      "bsim;": 8765,
      "bsime;": 8909,
      "bsol;": 92,
      "bsolb;": 10693,
      "bsolhsub;": 10184,
      "bull;": 8226,
      "bullet;": 8226,
      "bump;": 8782,
      "bumpE;": 10926,
      "bumpe;": 8783,
      "bumpeq;": 8783,
      "cacute;": 263,
      "cap;": 8745,
      "capand;": 10820,
      "capbrcup;": 10825,
      "capcap;": 10827,
      "capcup;": 10823,
      "capdot;": 10816,
      "caps;": [8745, 65024],
      "caret;": 8257,
      "caron;": 711,
      "ccaps;": 10829,
      "ccaron;": 269,
      ccedil: 231,
      "ccedil;": 231,
      "ccirc;": 265,
      "ccups;": 10828,
      "ccupssm;": 10832,
      "cdot;": 267,
      cedil: 184,
      "cedil;": 184,
      "cemptyv;": 10674,
      cent: 162,
      "cent;": 162,
      "centerdot;": 183,
      "cfr;": [55349, 56608],
      "chcy;": 1095,
      "check;": 10003,
      "checkmark;": 10003,
      "chi;": 967,
      "cir;": 9675,
      "cirE;": 10691,
      "circ;": 710,
      "circeq;": 8791,
      "circlearrowleft;": 8634,
      "circlearrowright;": 8635,
      "circledR;": 174,
      "circledS;": 9416,
      "circledast;": 8859,
      "circledcirc;": 8858,
      "circleddash;": 8861,
      "cire;": 8791,
      "cirfnint;": 10768,
      "cirmid;": 10991,
      "cirscir;": 10690,
      "clubs;": 9827,
      "clubsuit;": 9827,
      "colon;": 58,
      "colone;": 8788,
      "coloneq;": 8788,
      "comma;": 44,
      "commat;": 64,
      "comp;": 8705,
      "compfn;": 8728,
      "complement;": 8705,
      "complexes;": 8450,
      "cong;": 8773,
      "congdot;": 10861,
      "conint;": 8750,
      "copf;": [55349, 56660],
      "coprod;": 8720,
      copy: 169,
      "copy;": 169,
      "copysr;": 8471,
      "crarr;": 8629,
      "cross;": 10007,
      "cscr;": [55349, 56504],
      "csub;": 10959,
      "csube;": 10961,
      "csup;": 10960,
      "csupe;": 10962,
      "ctdot;": 8943,
      "cudarrl;": 10552,
      "cudarrr;": 10549,
      "cuepr;": 8926,
      "cuesc;": 8927,
      "cularr;": 8630,
      "cularrp;": 10557,
      "cup;": 8746,
      "cupbrcap;": 10824,
      "cupcap;": 10822,
      "cupcup;": 10826,
      "cupdot;": 8845,
      "cupor;": 10821,
      "cups;": [8746, 65024],
      "curarr;": 8631,
      "curarrm;": 10556,
      "curlyeqprec;": 8926,
      "curlyeqsucc;": 8927,
      "curlyvee;": 8910,
      "curlywedge;": 8911,
      curren: 164,
      "curren;": 164,
      "curvearrowleft;": 8630,
      "curvearrowright;": 8631,
      "cuvee;": 8910,
      "cuwed;": 8911,
      "cwconint;": 8754,
      "cwint;": 8753,
      "cylcty;": 9005,
      "dArr;": 8659,
      "dHar;": 10597,
      "dagger;": 8224,
      "daleth;": 8504,
      "darr;": 8595,
      "dash;": 8208,
      "dashv;": 8867,
      "dbkarow;": 10511,
      "dblac;": 733,
      "dcaron;": 271,
      "dcy;": 1076,
      "dd;": 8518,
      "ddagger;": 8225,
      "ddarr;": 8650,
      "ddotseq;": 10871,
      deg: 176,
      "deg;": 176,
      "delta;": 948,
      "demptyv;": 10673,
      "dfisht;": 10623,
      "dfr;": [55349, 56609],
      "dharl;": 8643,
      "dharr;": 8642,
      "diam;": 8900,
      "diamond;": 8900,
      "diamondsuit;": 9830,
      "diams;": 9830,
      "die;": 168,
      "digamma;": 989,
      "disin;": 8946,
      "div;": 247,
      divide: 247,
      "divide;": 247,
      "divideontimes;": 8903,
      "divonx;": 8903,
      "djcy;": 1106,
      "dlcorn;": 8990,
      "dlcrop;": 8973,
      "dollar;": 36,
      "dopf;": [55349, 56661],
      "dot;": 729,
      "doteq;": 8784,
      "doteqdot;": 8785,
      "dotminus;": 8760,
      "dotplus;": 8724,
      "dotsquare;": 8865,
      "doublebarwedge;": 8966,
      "downarrow;": 8595,
      "downdownarrows;": 8650,
      "downharpoonleft;": 8643,
      "downharpoonright;": 8642,
      "drbkarow;": 10512,
      "drcorn;": 8991,
      "drcrop;": 8972,
      "dscr;": [55349, 56505],
      "dscy;": 1109,
      "dsol;": 10742,
      "dstrok;": 273,
      "dtdot;": 8945,
      "dtri;": 9663,
      "dtrif;": 9662,
      "duarr;": 8693,
      "duhar;": 10607,
      "dwangle;": 10662,
      "dzcy;": 1119,
      "dzigrarr;": 10239,
      "eDDot;": 10871,
      "eDot;": 8785,
      eacute: 233,
      "eacute;": 233,
      "easter;": 10862,
      "ecaron;": 283,
      "ecir;": 8790,
      ecirc: 234,
      "ecirc;": 234,
      "ecolon;": 8789,
      "ecy;": 1101,
      "edot;": 279,
      "ee;": 8519,
      "efDot;": 8786,
      "efr;": [55349, 56610],
      "eg;": 10906,
      egrave: 232,
      "egrave;": 232,
      "egs;": 10902,
      "egsdot;": 10904,
      "el;": 10905,
      "elinters;": 9191,
      "ell;": 8467,
      "els;": 10901,
      "elsdot;": 10903,
      "emacr;": 275,
      "empty;": 8709,
      "emptyset;": 8709,
      "emptyv;": 8709,
      "emsp13;": 8196,
      "emsp14;": 8197,
      "emsp;": 8195,
      "eng;": 331,
      "ensp;": 8194,
      "eogon;": 281,
      "eopf;": [55349, 56662],
      "epar;": 8917,
      "eparsl;": 10723,
      "eplus;": 10865,
      "epsi;": 949,
      "epsilon;": 949,
      "epsiv;": 1013,
      "eqcirc;": 8790,
      "eqcolon;": 8789,
      "eqsim;": 8770,
      "eqslantgtr;": 10902,
      "eqslantless;": 10901,
      "equals;": 61,
      "equest;": 8799,
      "equiv;": 8801,
      "equivDD;": 10872,
      "eqvparsl;": 10725,
      "erDot;": 8787,
      "erarr;": 10609,
      "escr;": 8495,
      "esdot;": 8784,
      "esim;": 8770,
      "eta;": 951,
      eth: 240,
      "eth;": 240,
      euml: 235,
      "euml;": 235,
      "euro;": 8364,
      "excl;": 33,
      "exist;": 8707,
      "expectation;": 8496,
      "exponentiale;": 8519,
      "fallingdotseq;": 8786,
      "fcy;": 1092,
      "female;": 9792,
      "ffilig;": 64259,
      "fflig;": 64256,
      "ffllig;": 64260,
      "ffr;": [55349, 56611],
      "filig;": 64257,
      "fjlig;": [102, 106],
      "flat;": 9837,
      "fllig;": 64258,
      "fltns;": 9649,
      "fnof;": 402,
      "fopf;": [55349, 56663],
      "forall;": 8704,
      "fork;": 8916,
      "forkv;": 10969,
      "fpartint;": 10765,
      frac12: 189,
      "frac12;": 189,
      "frac13;": 8531,
      frac14: 188,
      "frac14;": 188,
      "frac15;": 8533,
      "frac16;": 8537,
      "frac18;": 8539,
      "frac23;": 8532,
      "frac25;": 8534,
      frac34: 190,
      "frac34;": 190,
      "frac35;": 8535,
      "frac38;": 8540,
      "frac45;": 8536,
      "frac56;": 8538,
      "frac58;": 8541,
      "frac78;": 8542,
      "frasl;": 8260,
      "frown;": 8994,
      "fscr;": [55349, 56507],
      "gE;": 8807,
      "gEl;": 10892,
      "gacute;": 501,
      "gamma;": 947,
      "gammad;": 989,
      "gap;": 10886,
      "gbreve;": 287,
      "gcirc;": 285,
      "gcy;": 1075,
      "gdot;": 289,
      "ge;": 8805,
      "gel;": 8923,
      "geq;": 8805,
      "geqq;": 8807,
      "geqslant;": 10878,
      "ges;": 10878,
      "gescc;": 10921,
      "gesdot;": 10880,
      "gesdoto;": 10882,
      "gesdotol;": 10884,
      "gesl;": [8923, 65024],
      "gesles;": 10900,
      "gfr;": [55349, 56612],
      "gg;": 8811,
      "ggg;": 8921,
      "gimel;": 8503,
      "gjcy;": 1107,
      "gl;": 8823,
      "glE;": 10898,
      "gla;": 10917,
      "glj;": 10916,
      "gnE;": 8809,
      "gnap;": 10890,
      "gnapprox;": 10890,
      "gne;": 10888,
      "gneq;": 10888,
      "gneqq;": 8809,
      "gnsim;": 8935,
      "gopf;": [55349, 56664],
      "grave;": 96,
      "gscr;": 8458,
      "gsim;": 8819,
      "gsime;": 10894,
      "gsiml;": 10896,
      gt: 62,
      "gt;": 62,
      "gtcc;": 10919,
      "gtcir;": 10874,
      "gtdot;": 8919,
      "gtlPar;": 10645,
      "gtquest;": 10876,
      "gtrapprox;": 10886,
      "gtrarr;": 10616,
      "gtrdot;": 8919,
      "gtreqless;": 8923,
      "gtreqqless;": 10892,
      "gtrless;": 8823,
      "gtrsim;": 8819,
      "gvertneqq;": [8809, 65024],
      "gvnE;": [8809, 65024],
      "hArr;": 8660,
      "hairsp;": 8202,
      "half;": 189,
      "hamilt;": 8459,
      "hardcy;": 1098,
      "harr;": 8596,
      "harrcir;": 10568,
      "harrw;": 8621,
      "hbar;": 8463,
      "hcirc;": 293,
      "hearts;": 9829,
      "heartsuit;": 9829,
      "hellip;": 8230,
      "hercon;": 8889,
      "hfr;": [55349, 56613],
      "hksearow;": 10533,
      "hkswarow;": 10534,
      "hoarr;": 8703,
      "homtht;": 8763,
      "hookleftarrow;": 8617,
      "hookrightarrow;": 8618,
      "hopf;": [55349, 56665],
      "horbar;": 8213,
      "hscr;": [55349, 56509],
      "hslash;": 8463,
      "hstrok;": 295,
      "hybull;": 8259,
      "hyphen;": 8208,
      iacute: 237,
      "iacute;": 237,
      "ic;": 8291,
      icirc: 238,
      "icirc;": 238,
      "icy;": 1080,
      "iecy;": 1077,
      iexcl: 161,
      "iexcl;": 161,
      "iff;": 8660,
      "ifr;": [55349, 56614],
      igrave: 236,
      "igrave;": 236,
      "ii;": 8520,
      "iiiint;": 10764,
      "iiint;": 8749,
      "iinfin;": 10716,
      "iiota;": 8489,
      "ijlig;": 307,
      "imacr;": 299,
      "image;": 8465,
      "imagline;": 8464,
      "imagpart;": 8465,
      "imath;": 305,
      "imof;": 8887,
      "imped;": 437,
      "in;": 8712,
      "incare;": 8453,
      "infin;": 8734,
      "infintie;": 10717,
      "inodot;": 305,
      "int;": 8747,
      "intcal;": 8890,
      "integers;": 8484,
      "intercal;": 8890,
      "intlarhk;": 10775,
      "intprod;": 10812,
      "iocy;": 1105,
      "iogon;": 303,
      "iopf;": [55349, 56666],
      "iota;": 953,
      "iprod;": 10812,
      iquest: 191,
      "iquest;": 191,
      "iscr;": [55349, 56510],
      "isin;": 8712,
      "isinE;": 8953,
      "isindot;": 8949,
      "isins;": 8948,
      "isinsv;": 8947,
      "isinv;": 8712,
      "it;": 8290,
      "itilde;": 297,
      "iukcy;": 1110,
      iuml: 239,
      "iuml;": 239,
      "jcirc;": 309,
      "jcy;": 1081,
      "jfr;": [55349, 56615],
      "jmath;": 567,
      "jopf;": [55349, 56667],
      "jscr;": [55349, 56511],
      "jsercy;": 1112,
      "jukcy;": 1108,
      "kappa;": 954,
      "kappav;": 1008,
      "kcedil;": 311,
      "kcy;": 1082,
      "kfr;": [55349, 56616],
      "kgreen;": 312,
      "khcy;": 1093,
      "kjcy;": 1116,
      "kopf;": [55349, 56668],
      "kscr;": [55349, 56512],
      "lAarr;": 8666,
      "lArr;": 8656,
      "lAtail;": 10523,
      "lBarr;": 10510,
      "lE;": 8806,
      "lEg;": 10891,
      "lHar;": 10594,
      "lacute;": 314,
      "laemptyv;": 10676,
      "lagran;": 8466,
      "lambda;": 955,
      "lang;": 10216,
      "langd;": 10641,
      "langle;": 10216,
      "lap;": 10885,
      laquo: 171,
      "laquo;": 171,
      "larr;": 8592,
      "larrb;": 8676,
      "larrbfs;": 10527,
      "larrfs;": 10525,
      "larrhk;": 8617,
      "larrlp;": 8619,
      "larrpl;": 10553,
      "larrsim;": 10611,
      "larrtl;": 8610,
      "lat;": 10923,
      "latail;": 10521,
      "late;": 10925,
      "lates;": [10925, 65024],
      "lbarr;": 10508,
      "lbbrk;": 10098,
      "lbrace;": 123,
      "lbrack;": 91,
      "lbrke;": 10635,
      "lbrksld;": 10639,
      "lbrkslu;": 10637,
      "lcaron;": 318,
      "lcedil;": 316,
      "lceil;": 8968,
      "lcub;": 123,
      "lcy;": 1083,
      "ldca;": 10550,
      "ldquo;": 8220,
      "ldquor;": 8222,
      "ldrdhar;": 10599,
      "ldrushar;": 10571,
      "ldsh;": 8626,
      "le;": 8804,
      "leftarrow;": 8592,
      "leftarrowtail;": 8610,
      "leftharpoondown;": 8637,
      "leftharpoonup;": 8636,
      "leftleftarrows;": 8647,
      "leftrightarrow;": 8596,
      "leftrightarrows;": 8646,
      "leftrightharpoons;": 8651,
      "leftrightsquigarrow;": 8621,
      "leftthreetimes;": 8907,
      "leg;": 8922,
      "leq;": 8804,
      "leqq;": 8806,
      "leqslant;": 10877,
      "les;": 10877,
      "lescc;": 10920,
      "lesdot;": 10879,
      "lesdoto;": 10881,
      "lesdotor;": 10883,
      "lesg;": [8922, 65024],
      "lesges;": 10899,
      "lessapprox;": 10885,
      "lessdot;": 8918,
      "lesseqgtr;": 8922,
      "lesseqqgtr;": 10891,
      "lessgtr;": 8822,
      "lesssim;": 8818,
      "lfisht;": 10620,
      "lfloor;": 8970,
      "lfr;": [55349, 56617],
      "lg;": 8822,
      "lgE;": 10897,
      "lhard;": 8637,
      "lharu;": 8636,
      "lharul;": 10602,
      "lhblk;": 9604,
      "ljcy;": 1113,
      "ll;": 8810,
      "llarr;": 8647,
      "llcorner;": 8990,
      "llhard;": 10603,
      "lltri;": 9722,
      "lmidot;": 320,
      "lmoust;": 9136,
      "lmoustache;": 9136,
      "lnE;": 8808,
      "lnap;": 10889,
      "lnapprox;": 10889,
      "lne;": 10887,
      "lneq;": 10887,
      "lneqq;": 8808,
      "lnsim;": 8934,
      "loang;": 10220,
      "loarr;": 8701,
      "lobrk;": 10214,
      "longleftarrow;": 10229,
      "longleftrightarrow;": 10231,
      "longmapsto;": 10236,
      "longrightarrow;": 10230,
      "looparrowleft;": 8619,
      "looparrowright;": 8620,
      "lopar;": 10629,
      "lopf;": [55349, 56669],
      "loplus;": 10797,
      "lotimes;": 10804,
      "lowast;": 8727,
      "lowbar;": 95,
      "loz;": 9674,
      "lozenge;": 9674,
      "lozf;": 10731,
      "lpar;": 40,
      "lparlt;": 10643,
      "lrarr;": 8646,
      "lrcorner;": 8991,
      "lrhar;": 8651,
      "lrhard;": 10605,
      "lrm;": 8206,
      "lrtri;": 8895,
      "lsaquo;": 8249,
      "lscr;": [55349, 56513],
      "lsh;": 8624,
      "lsim;": 8818,
      "lsime;": 10893,
      "lsimg;": 10895,
      "lsqb;": 91,
      "lsquo;": 8216,
      "lsquor;": 8218,
      "lstrok;": 322,
      lt: 60,
      "lt;": 60,
      "ltcc;": 10918,
      "ltcir;": 10873,
      "ltdot;": 8918,
      "lthree;": 8907,
      "ltimes;": 8905,
      "ltlarr;": 10614,
      "ltquest;": 10875,
      "ltrPar;": 10646,
      "ltri;": 9667,
      "ltrie;": 8884,
      "ltrif;": 9666,
      "lurdshar;": 10570,
      "luruhar;": 10598,
      "lvertneqq;": [8808, 65024],
      "lvnE;": [8808, 65024],
      "mDDot;": 8762,
      macr: 175,
      "macr;": 175,
      "male;": 9794,
      "malt;": 10016,
      "maltese;": 10016,
      "map;": 8614,
      "mapsto;": 8614,
      "mapstodown;": 8615,
      "mapstoleft;": 8612,
      "mapstoup;": 8613,
      "marker;": 9646,
      "mcomma;": 10793,
      "mcy;": 1084,
      "mdash;": 8212,
      "measuredangle;": 8737,
      "mfr;": [55349, 56618],
      "mho;": 8487,
      micro: 181,
      "micro;": 181,
      "mid;": 8739,
      "midast;": 42,
      "midcir;": 10992,
      middot: 183,
      "middot;": 183,
      "minus;": 8722,
      "minusb;": 8863,
      "minusd;": 8760,
      "minusdu;": 10794,
      "mlcp;": 10971,
      "mldr;": 8230,
      "mnplus;": 8723,
      "models;": 8871,
      "mopf;": [55349, 56670],
      "mp;": 8723,
      "mscr;": [55349, 56514],
      "mstpos;": 8766,
      "mu;": 956,
      "multimap;": 8888,
      "mumap;": 8888,
      "nGg;": [8921, 824],
      "nGt;": [8811, 8402],
      "nGtv;": [8811, 824],
      "nLeftarrow;": 8653,
      "nLeftrightarrow;": 8654,
      "nLl;": [8920, 824],
      "nLt;": [8810, 8402],
      "nLtv;": [8810, 824],
      "nRightarrow;": 8655,
      "nVDash;": 8879,
      "nVdash;": 8878,
      "nabla;": 8711,
      "nacute;": 324,
      "nang;": [8736, 8402],
      "nap;": 8777,
      "napE;": [10864, 824],
      "napid;": [8779, 824],
      "napos;": 329,
      "napprox;": 8777,
      "natur;": 9838,
      "natural;": 9838,
      "naturals;": 8469,
      nbsp: 160,
      "nbsp;": 160,
      "nbump;": [8782, 824],
      "nbumpe;": [8783, 824],
      "ncap;": 10819,
      "ncaron;": 328,
      "ncedil;": 326,
      "ncong;": 8775,
      "ncongdot;": [10861, 824],
      "ncup;": 10818,
      "ncy;": 1085,
      "ndash;": 8211,
      "ne;": 8800,
      "neArr;": 8663,
      "nearhk;": 10532,
      "nearr;": 8599,
      "nearrow;": 8599,
      "nedot;": [8784, 824],
      "nequiv;": 8802,
      "nesear;": 10536,
      "nesim;": [8770, 824],
      "nexist;": 8708,
      "nexists;": 8708,
      "nfr;": [55349, 56619],
      "ngE;": [8807, 824],
      "nge;": 8817,
      "ngeq;": 8817,
      "ngeqq;": [8807, 824],
      "ngeqslant;": [10878, 824],
      "nges;": [10878, 824],
      "ngsim;": 8821,
      "ngt;": 8815,
      "ngtr;": 8815,
      "nhArr;": 8654,
      "nharr;": 8622,
      "nhpar;": 10994,
      "ni;": 8715,
      "nis;": 8956,
      "nisd;": 8954,
      "niv;": 8715,
      "njcy;": 1114,
      "nlArr;": 8653,
      "nlE;": [8806, 824],
      "nlarr;": 8602,
      "nldr;": 8229,
      "nle;": 8816,
      "nleftarrow;": 8602,
      "nleftrightarrow;": 8622,
      "nleq;": 8816,
      "nleqq;": [8806, 824],
      "nleqslant;": [10877, 824],
      "nles;": [10877, 824],
      "nless;": 8814,
      "nlsim;": 8820,
      "nlt;": 8814,
      "nltri;": 8938,
      "nltrie;": 8940,
      "nmid;": 8740,
      "nopf;": [55349, 56671],
      not: 172,
      "not;": 172,
      "notin;": 8713,
      "notinE;": [8953, 824],
      "notindot;": [8949, 824],
      "notinva;": 8713,
      "notinvb;": 8951,
      "notinvc;": 8950,
      "notni;": 8716,
      "notniva;": 8716,
      "notnivb;": 8958,
      "notnivc;": 8957,
      "npar;": 8742,
      "nparallel;": 8742,
      "nparsl;": [11005, 8421],
      "npart;": [8706, 824],
      "npolint;": 10772,
      "npr;": 8832,
      "nprcue;": 8928,
      "npre;": [10927, 824],
      "nprec;": 8832,
      "npreceq;": [10927, 824],
      "nrArr;": 8655,
      "nrarr;": 8603,
      "nrarrc;": [10547, 824],
      "nrarrw;": [8605, 824],
      "nrightarrow;": 8603,
      "nrtri;": 8939,
      "nrtrie;": 8941,
      "nsc;": 8833,
      "nsccue;": 8929,
      "nsce;": [10928, 824],
      "nscr;": [55349, 56515],
      "nshortmid;": 8740,
      "nshortparallel;": 8742,
      "nsim;": 8769,
      "nsime;": 8772,
      "nsimeq;": 8772,
      "nsmid;": 8740,
      "nspar;": 8742,
      "nsqsube;": 8930,
      "nsqsupe;": 8931,
      "nsub;": 8836,
      "nsubE;": [10949, 824],
      "nsube;": 8840,
      "nsubset;": [8834, 8402],
      "nsubseteq;": 8840,
      "nsubseteqq;": [10949, 824],
      "nsucc;": 8833,
      "nsucceq;": [10928, 824],
      "nsup;": 8837,
      "nsupE;": [10950, 824],
      "nsupe;": 8841,
      "nsupset;": [8835, 8402],
      "nsupseteq;": 8841,
      "nsupseteqq;": [10950, 824],
      "ntgl;": 8825,
      ntilde: 241,
      "ntilde;": 241,
      "ntlg;": 8824,
      "ntriangleleft;": 8938,
      "ntrianglelefteq;": 8940,
      "ntriangleright;": 8939,
      "ntrianglerighteq;": 8941,
      "nu;": 957,
      "num;": 35,
      "numero;": 8470,
      "numsp;": 8199,
      "nvDash;": 8877,
      "nvHarr;": 10500,
      "nvap;": [8781, 8402],
      "nvdash;": 8876,
      "nvge;": [8805, 8402],
      "nvgt;": [62, 8402],
      "nvinfin;": 10718,
      "nvlArr;": 10498,
      "nvle;": [8804, 8402],
      "nvlt;": [60, 8402],
      "nvltrie;": [8884, 8402],
      "nvrArr;": 10499,
      "nvrtrie;": [8885, 8402],
      "nvsim;": [8764, 8402],
      "nwArr;": 8662,
      "nwarhk;": 10531,
      "nwarr;": 8598,
      "nwarrow;": 8598,
      "nwnear;": 10535,
      "oS;": 9416,
      oacute: 243,
      "oacute;": 243,
      "oast;": 8859,
      "ocir;": 8858,
      ocirc: 244,
      "ocirc;": 244,
      "ocy;": 1086,
      "odash;": 8861,
      "odblac;": 337,
      "odiv;": 10808,
      "odot;": 8857,
      "odsold;": 10684,
      "oelig;": 339,
      "ofcir;": 10687,
      "ofr;": [55349, 56620],
      "ogon;": 731,
      ograve: 242,
      "ograve;": 242,
      "ogt;": 10689,
      "ohbar;": 10677,
      "ohm;": 937,
      "oint;": 8750,
      "olarr;": 8634,
      "olcir;": 10686,
      "olcross;": 10683,
      "oline;": 8254,
      "olt;": 10688,
      "omacr;": 333,
      "omega;": 969,
      "omicron;": 959,
      "omid;": 10678,
      "ominus;": 8854,
      "oopf;": [55349, 56672],
      "opar;": 10679,
      "operp;": 10681,
      "oplus;": 8853,
      "or;": 8744,
      "orarr;": 8635,
      "ord;": 10845,
      "order;": 8500,
      "orderof;": 8500,
      ordf: 170,
      "ordf;": 170,
      ordm: 186,
      "ordm;": 186,
      "origof;": 8886,
      "oror;": 10838,
      "orslope;": 10839,
      "orv;": 10843,
      "oscr;": 8500,
      oslash: 248,
      "oslash;": 248,
      "osol;": 8856,
      otilde: 245,
      "otilde;": 245,
      "otimes;": 8855,
      "otimesas;": 10806,
      ouml: 246,
      "ouml;": 246,
      "ovbar;": 9021,
      "par;": 8741,
      para: 182,
      "para;": 182,
      "parallel;": 8741,
      "parsim;": 10995,
      "parsl;": 11005,
      "part;": 8706,
      "pcy;": 1087,
      "percnt;": 37,
      "period;": 46,
      "permil;": 8240,
      "perp;": 8869,
      "pertenk;": 8241,
      "pfr;": [55349, 56621],
      "phi;": 966,
      "phiv;": 981,
      "phmmat;": 8499,
      "phone;": 9742,
      "pi;": 960,
      "pitchfork;": 8916,
      "piv;": 982,
      "planck;": 8463,
      "planckh;": 8462,
      "plankv;": 8463,
      "plus;": 43,
      "plusacir;": 10787,
      "plusb;": 8862,
      "pluscir;": 10786,
      "plusdo;": 8724,
      "plusdu;": 10789,
      "pluse;": 10866,
      plusmn: 177,
      "plusmn;": 177,
      "plussim;": 10790,
      "plustwo;": 10791,
      "pm;": 177,
      "pointint;": 10773,
      "popf;": [55349, 56673],
      pound: 163,
      "pound;": 163,
      "pr;": 8826,
      "prE;": 10931,
      "prap;": 10935,
      "prcue;": 8828,
      "pre;": 10927,
      "prec;": 8826,
      "precapprox;": 10935,
      "preccurlyeq;": 8828,
      "preceq;": 10927,
      "precnapprox;": 10937,
      "precneqq;": 10933,
      "precnsim;": 8936,
      "precsim;": 8830,
      "prime;": 8242,
      "primes;": 8473,
      "prnE;": 10933,
      "prnap;": 10937,
      "prnsim;": 8936,
      "prod;": 8719,
      "profalar;": 9006,
      "profline;": 8978,
      "profsurf;": 8979,
      "prop;": 8733,
      "propto;": 8733,
      "prsim;": 8830,
      "prurel;": 8880,
      "pscr;": [55349, 56517],
      "psi;": 968,
      "puncsp;": 8200,
      "qfr;": [55349, 56622],
      "qint;": 10764,
      "qopf;": [55349, 56674],
      "qprime;": 8279,
      "qscr;": [55349, 56518],
      "quaternions;": 8461,
      "quatint;": 10774,
      "quest;": 63,
      "questeq;": 8799,
      quot: 34,
      "quot;": 34,
      "rAarr;": 8667,
      "rArr;": 8658,
      "rAtail;": 10524,
      "rBarr;": 10511,
      "rHar;": 10596,
      "race;": [8765, 817],
      "racute;": 341,
      "radic;": 8730,
      "raemptyv;": 10675,
      "rang;": 10217,
      "rangd;": 10642,
      "range;": 10661,
      "rangle;": 10217,
      raquo: 187,
      "raquo;": 187,
      "rarr;": 8594,
      "rarrap;": 10613,
      "rarrb;": 8677,
      "rarrbfs;": 10528,
      "rarrc;": 10547,
      "rarrfs;": 10526,
      "rarrhk;": 8618,
      "rarrlp;": 8620,
      "rarrpl;": 10565,
      "rarrsim;": 10612,
      "rarrtl;": 8611,
      "rarrw;": 8605,
      "ratail;": 10522,
      "ratio;": 8758,
      "rationals;": 8474,
      "rbarr;": 10509,
      "rbbrk;": 10099,
      "rbrace;": 125,
      "rbrack;": 93,
      "rbrke;": 10636,
      "rbrksld;": 10638,
      "rbrkslu;": 10640,
      "rcaron;": 345,
      "rcedil;": 343,
      "rceil;": 8969,
      "rcub;": 125,
      "rcy;": 1088,
      "rdca;": 10551,
      "rdldhar;": 10601,
      "rdquo;": 8221,
      "rdquor;": 8221,
      "rdsh;": 8627,
      "real;": 8476,
      "realine;": 8475,
      "realpart;": 8476,
      "reals;": 8477,
      "rect;": 9645,
      reg: 174,
      "reg;": 174,
      "rfisht;": 10621,
      "rfloor;": 8971,
      "rfr;": [55349, 56623],
      "rhard;": 8641,
      "rharu;": 8640,
      "rharul;": 10604,
      "rho;": 961,
      "rhov;": 1009,
      "rightarrow;": 8594,
      "rightarrowtail;": 8611,
      "rightharpoondown;": 8641,
      "rightharpoonup;": 8640,
      "rightleftarrows;": 8644,
      "rightleftharpoons;": 8652,
      "rightrightarrows;": 8649,
      "rightsquigarrow;": 8605,
      "rightthreetimes;": 8908,
      "ring;": 730,
      "risingdotseq;": 8787,
      "rlarr;": 8644,
      "rlhar;": 8652,
      "rlm;": 8207,
      "rmoust;": 9137,
      "rmoustache;": 9137,
      "rnmid;": 10990,
      "roang;": 10221,
      "roarr;": 8702,
      "robrk;": 10215,
      "ropar;": 10630,
      "ropf;": [55349, 56675],
      "roplus;": 10798,
      "rotimes;": 10805,
      "rpar;": 41,
      "rpargt;": 10644,
      "rppolint;": 10770,
      "rrarr;": 8649,
      "rsaquo;": 8250,
      "rscr;": [55349, 56519],
      "rsh;": 8625,
      "rsqb;": 93,
      "rsquo;": 8217,
      "rsquor;": 8217,
      "rthree;": 8908,
      "rtimes;": 8906,
      "rtri;": 9657,
      "rtrie;": 8885,
      "rtrif;": 9656,
      "rtriltri;": 10702,
      "ruluhar;": 10600,
      "rx;": 8478,
      "sacute;": 347,
      "sbquo;": 8218,
      "sc;": 8827,
      "scE;": 10932,
      "scap;": 10936,
      "scaron;": 353,
      "sccue;": 8829,
      "sce;": 10928,
      "scedil;": 351,
      "scirc;": 349,
      "scnE;": 10934,
      "scnap;": 10938,
      "scnsim;": 8937,
      "scpolint;": 10771,
      "scsim;": 8831,
      "scy;": 1089,
      "sdot;": 8901,
      "sdotb;": 8865,
      "sdote;": 10854,
      "seArr;": 8664,
      "searhk;": 10533,
      "searr;": 8600,
      "searrow;": 8600,
      sect: 167,
      "sect;": 167,
      "semi;": 59,
      "seswar;": 10537,
      "setminus;": 8726,
      "setmn;": 8726,
      "sext;": 10038,
      "sfr;": [55349, 56624],
      "sfrown;": 8994,
      "sharp;": 9839,
      "shchcy;": 1097,
      "shcy;": 1096,
      "shortmid;": 8739,
      "shortparallel;": 8741,
      shy: 173,
      "shy;": 173,
      "sigma;": 963,
      "sigmaf;": 962,
      "sigmav;": 962,
      "sim;": 8764,
      "simdot;": 10858,
      "sime;": 8771,
      "simeq;": 8771,
      "simg;": 10910,
      "simgE;": 10912,
      "siml;": 10909,
      "simlE;": 10911,
      "simne;": 8774,
      "simplus;": 10788,
      "simrarr;": 10610,
      "slarr;": 8592,
      "smallsetminus;": 8726,
      "smashp;": 10803,
      "smeparsl;": 10724,
      "smid;": 8739,
      "smile;": 8995,
      "smt;": 10922,
      "smte;": 10924,
      "smtes;": [10924, 65024],
      "softcy;": 1100,
      "sol;": 47,
      "solb;": 10692,
      "solbar;": 9023,
      "sopf;": [55349, 56676],
      "spades;": 9824,
      "spadesuit;": 9824,
      "spar;": 8741,
      "sqcap;": 8851,
      "sqcaps;": [8851, 65024],
      "sqcup;": 8852,
      "sqcups;": [8852, 65024],
      "sqsub;": 8847,
      "sqsube;": 8849,
      "sqsubset;": 8847,
      "sqsubseteq;": 8849,
      "sqsup;": 8848,
      "sqsupe;": 8850,
      "sqsupset;": 8848,
      "sqsupseteq;": 8850,
      "squ;": 9633,
      "square;": 9633,
      "squarf;": 9642,
      "squf;": 9642,
      "srarr;": 8594,
      "sscr;": [55349, 56520],
      "ssetmn;": 8726,
      "ssmile;": 8995,
      "sstarf;": 8902,
      "star;": 9734,
      "starf;": 9733,
      "straightepsilon;": 1013,
      "straightphi;": 981,
      "strns;": 175,
      "sub;": 8834,
      "subE;": 10949,
      "subdot;": 10941,
      "sube;": 8838,
      "subedot;": 10947,
      "submult;": 10945,
      "subnE;": 10955,
      "subne;": 8842,
      "subplus;": 10943,
      "subrarr;": 10617,
      "subset;": 8834,
      "subseteq;": 8838,
      "subseteqq;": 10949,
      "subsetneq;": 8842,
      "subsetneqq;": 10955,
      "subsim;": 10951,
      "subsub;": 10965,
      "subsup;": 10963,
      "succ;": 8827,
      "succapprox;": 10936,
      "succcurlyeq;": 8829,
      "succeq;": 10928,
      "succnapprox;": 10938,
      "succneqq;": 10934,
      "succnsim;": 8937,
      "succsim;": 8831,
      "sum;": 8721,
      "sung;": 9834,
      sup1: 185,
      "sup1;": 185,
      sup2: 178,
      "sup2;": 178,
      sup3: 179,
      "sup3;": 179,
      "sup;": 8835,
      "supE;": 10950,
      "supdot;": 10942,
      "supdsub;": 10968,
      "supe;": 8839,
      "supedot;": 10948,
      "suphsol;": 10185,
      "suphsub;": 10967,
      "suplarr;": 10619,
      "supmult;": 10946,
      "supnE;": 10956,
      "supne;": 8843,
      "supplus;": 10944,
      "supset;": 8835,
      "supseteq;": 8839,
      "supseteqq;": 10950,
      "supsetneq;": 8843,
      "supsetneqq;": 10956,
      "supsim;": 10952,
      "supsub;": 10964,
      "supsup;": 10966,
      "swArr;": 8665,
      "swarhk;": 10534,
      "swarr;": 8601,
      "swarrow;": 8601,
      "swnwar;": 10538,
      szlig: 223,
      "szlig;": 223,
      "target;": 8982,
      "tau;": 964,
      "tbrk;": 9140,
      "tcaron;": 357,
      "tcedil;": 355,
      "tcy;": 1090,
      "tdot;": 8411,
      "telrec;": 8981,
      "tfr;": [55349, 56625],
      "there4;": 8756,
      "therefore;": 8756,
      "theta;": 952,
      "thetasym;": 977,
      "thetav;": 977,
      "thickapprox;": 8776,
      "thicksim;": 8764,
      "thinsp;": 8201,
      "thkap;": 8776,
      "thksim;": 8764,
      thorn: 254,
      "thorn;": 254,
      "tilde;": 732,
      times: 215,
      "times;": 215,
      "timesb;": 8864,
      "timesbar;": 10801,
      "timesd;": 10800,
      "tint;": 8749,
      "toea;": 10536,
      "top;": 8868,
      "topbot;": 9014,
      "topcir;": 10993,
      "topf;": [55349, 56677],
      "topfork;": 10970,
      "tosa;": 10537,
      "tprime;": 8244,
      "trade;": 8482,
      "triangle;": 9653,
      "triangledown;": 9663,
      "triangleleft;": 9667,
      "trianglelefteq;": 8884,
      "triangleq;": 8796,
      "triangleright;": 9657,
      "trianglerighteq;": 8885,
      "tridot;": 9708,
      "trie;": 8796,
      "triminus;": 10810,
      "triplus;": 10809,
      "trisb;": 10701,
      "tritime;": 10811,
      "trpezium;": 9186,
      "tscr;": [55349, 56521],
      "tscy;": 1094,
      "tshcy;": 1115,
      "tstrok;": 359,
      "twixt;": 8812,
      "twoheadleftarrow;": 8606,
      "twoheadrightarrow;": 8608,
      "uArr;": 8657,
      "uHar;": 10595,
      uacute: 250,
      "uacute;": 250,
      "uarr;": 8593,
      "ubrcy;": 1118,
      "ubreve;": 365,
      ucirc: 251,
      "ucirc;": 251,
      "ucy;": 1091,
      "udarr;": 8645,
      "udblac;": 369,
      "udhar;": 10606,
      "ufisht;": 10622,
      "ufr;": [55349, 56626],
      ugrave: 249,
      "ugrave;": 249,
      "uharl;": 8639,
      "uharr;": 8638,
      "uhblk;": 9600,
      "ulcorn;": 8988,
      "ulcorner;": 8988,
      "ulcrop;": 8975,
      "ultri;": 9720,
      "umacr;": 363,
      uml: 168,
      "uml;": 168,
      "uogon;": 371,
      "uopf;": [55349, 56678],
      "uparrow;": 8593,
      "updownarrow;": 8597,
      "upharpoonleft;": 8639,
      "upharpoonright;": 8638,
      "uplus;": 8846,
      "upsi;": 965,
      "upsih;": 978,
      "upsilon;": 965,
      "upuparrows;": 8648,
      "urcorn;": 8989,
      "urcorner;": 8989,
      "urcrop;": 8974,
      "uring;": 367,
      "urtri;": 9721,
      "uscr;": [55349, 56522],
      "utdot;": 8944,
      "utilde;": 361,
      "utri;": 9653,
      "utrif;": 9652,
      "uuarr;": 8648,
      uuml: 252,
      "uuml;": 252,
      "uwangle;": 10663,
      "vArr;": 8661,
      "vBar;": 10984,
      "vBarv;": 10985,
      "vDash;": 8872,
      "vangrt;": 10652,
      "varepsilon;": 1013,
      "varkappa;": 1008,
      "varnothing;": 8709,
      "varphi;": 981,
      "varpi;": 982,
      "varpropto;": 8733,
      "varr;": 8597,
      "varrho;": 1009,
      "varsigma;": 962,
      "varsubsetneq;": [8842, 65024],
      "varsubsetneqq;": [10955, 65024],
      "varsupsetneq;": [8843, 65024],
      "varsupsetneqq;": [10956, 65024],
      "vartheta;": 977,
      "vartriangleleft;": 8882,
      "vartriangleright;": 8883,
      "vcy;": 1074,
      "vdash;": 8866,
      "vee;": 8744,
      "veebar;": 8891,
      "veeeq;": 8794,
      "vellip;": 8942,
      "verbar;": 124,
      "vert;": 124,
      "vfr;": [55349, 56627],
      "vltri;": 8882,
      "vnsub;": [8834, 8402],
      "vnsup;": [8835, 8402],
      "vopf;": [55349, 56679],
      "vprop;": 8733,
      "vrtri;": 8883,
      "vscr;": [55349, 56523],
      "vsubnE;": [10955, 65024],
      "vsubne;": [8842, 65024],
      "vsupnE;": [10956, 65024],
      "vsupne;": [8843, 65024],
      "vzigzag;": 10650,
      "wcirc;": 373,
      "wedbar;": 10847,
      "wedge;": 8743,
      "wedgeq;": 8793,
      "weierp;": 8472,
      "wfr;": [55349, 56628],
      "wopf;": [55349, 56680],
      "wp;": 8472,
      "wr;": 8768,
      "wreath;": 8768,
      "wscr;": [55349, 56524],
      "xcap;": 8898,
      "xcirc;": 9711,
      "xcup;": 8899,
      "xdtri;": 9661,
      "xfr;": [55349, 56629],
      "xhArr;": 10234,
      "xharr;": 10231,
      "xi;": 958,
      "xlArr;": 10232,
      "xlarr;": 10229,
      "xmap;": 10236,
      "xnis;": 8955,
      "xodot;": 10752,
      "xopf;": [55349, 56681],
      "xoplus;": 10753,
      "xotime;": 10754,
      "xrArr;": 10233,
      "xrarr;": 10230,
      "xscr;": [55349, 56525],
      "xsqcup;": 10758,
      "xuplus;": 10756,
      "xutri;": 9651,
      "xvee;": 8897,
      "xwedge;": 8896,
      yacute: 253,
      "yacute;": 253,
      "yacy;": 1103,
      "ycirc;": 375,
      "ycy;": 1099,
      yen: 165,
      "yen;": 165,
      "yfr;": [55349, 56630],
      "yicy;": 1111,
      "yopf;": [55349, 56682],
      "yscr;": [55349, 56526],
      "yucy;": 1102,
      yuml: 255,
      "yuml;": 255,
      "zacute;": 378,
      "zcaron;": 382,
      "zcy;": 1079,
      "zdot;": 380,
      "zeetrf;": 8488,
      "zeta;": 950,
      "zfr;": [55349, 56631],
      "zhcy;": 1078,
      "zigrarr;": 8669,
      "zopf;": [55349, 56683],
      "zscr;": [55349, 56527],
      "zwj;": 8205,
      "zwnj;": 8204
    },
    lpl = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g,
    Mcf = 32,
    $cf = /[^\r"&\u0000]+/g,
    Ocf = /[^\r'&\u0000]+/g,
    Ncf = /[^\r\t\n\f &>\u0000]+/g,
    Bcf = /[^\r\t\n\f \/>A-Z\u0000]+/g,
    Ucf = /[^\r\t\n\f \/=>A-Z\u0000]+/g,
    Fcf = /[^\]\r\u0000\uffff]*/g,
    jcf = /[^&<\r\u0000\uffff]*/g,
    cpl = /[^<\r\u0000\uffff]*/g,
    Gcf = /[^\r\u0000\uffff]*/g,
    upl = /(?:(\/)?([a-z]+)>)|[\s\S]/g,
    dpl = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g,
    aYn = /[^\x09\x0A\x0C\x0D\x20]/,
    Kxo = /[^\x09\x0A\x0C\x0D\x20]/g,
    Wcf = /[^\x00\x09\x0A\x0C\x0D\x20]/,
    T6e = /^[\x09\x0A\x0C\x0D\x20]+/,
    lYn = /\x00/g;
  function BF(e) {
    var t = 16384;
    if (e.length < t) return String.fromCharCode.apply(String, e);
    var n = "";
    for (var r = 0; r < e.length; r += t) n += String.fromCharCode.apply(String, e.slice(r, r + t));
    return n;
  }
  function qcf(e) {
    var t = [];
    for (var n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
    return t;
  }
  function yS(e, t) {
    if (typeof t === "string") return e.namespaceURI === nd.HTML && e.localName === t;
    var n = t[e.namespaceURI];
    return n && n[e.localName];
  }
  function ppl(e) {
    return yS(e, Hpl);
  }
  function fpl(e) {
    if (yS(e, Tpl)) return !0;
    if (e.namespaceURI === nd.MATHML && e.localName === "annotation-xml") {
      var t = e.getAttribute("encoding");
      if (t) t = t.toLowerCase();
      if (t === "text/html" || t === "application/xhtml+xml") return !0;
    }
    return !1;
  }
  function Vcf(e) {
    if (e in ipl) return ipl[e];else return e;
  }
  function mpl(e) {
    for (var t = 0, n = e.length; t < n; t++) if (e[t][0] in spl) e[t][0] = spl[e[t][0]];
  }
  function gpl(e) {
    for (var t = 0, n = e.length; t < n; t++) if (e[t][0] === "definitionurl") {
      e[t][0] = "definitionURL";
      break;
    }
  }
  function Yxo(e) {
    for (var t = 0, n = e.length; t < n; t++) if (e[t][0] in opl) e[t].push(opl[e[t][0]]);
  }
  function hpl(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      var o = e[n][0],
        s = e[n][1];
      if (t.hasAttribute(o)) continue;
      t._setAttribute(o, s);
    }
  }
  E_.ElementStack = function () {
    this.elements = [], this.top = null;
  };
  E_.ElementStack.prototype.push = function (e) {
    this.elements.push(e), this.top = e;
  };
  E_.ElementStack.prototype.pop = function (e) {
    this.elements.pop(), this.top = this.elements[this.elements.length - 1];
  };
  E_.ElementStack.prototype.popTag = function (e) {
    for (var t = this.elements.length - 1; t > 0; t--) {
      var n = this.elements[t];
      if (yS(n, e)) break;
    }
    this.elements.length = t, this.top = this.elements[t - 1];
  };
  E_.ElementStack.prototype.popElementType = function (e) {
    for (var t = this.elements.length - 1; t > 0; t--) if (this.elements[t] instanceof e) break;
    this.elements.length = t, this.top = this.elements[t - 1];
  };
  E_.ElementStack.prototype.popElement = function (e) {
    for (var t = this.elements.length - 1; t > 0; t--) if (this.elements[t] === e) break;
    this.elements.length = t, this.top = this.elements[t - 1];
  };
  E_.ElementStack.prototype.removeElement = function (e) {
    if (this.top === e) this.pop();else {
      var t = this.elements.lastIndexOf(e);
      if (t !== -1) this.elements.splice(t, 1);
    }
  };
  E_.ElementStack.prototype.clearToContext = function (e) {
    for (var t = this.elements.length - 1; t > 0; t--) if (yS(this.elements[t], e)) break;
    this.elements.length = t + 1, this.top = this.elements[t];
  };
  E_.ElementStack.prototype.contains = function (e) {
    return this.inSpecificScope(e, Object.create(null));
  };
  E_.ElementStack.prototype.inSpecificScope = function (e, t) {
    for (var n = this.elements.length - 1; n >= 0; n--) {
      var r = this.elements[n];
      if (yS(r, e)) return !0;
      if (yS(r, t)) return !1;
    }
    return !1;
  };
  E_.ElementStack.prototype.elementInSpecificScope = function (e, t) {
    for (var n = this.elements.length - 1; n >= 0; n--) {
      var r = this.elements[n];
      if (r === e) return !0;
      if (yS(r, t)) return !1;
    }
    return !1;
  };
  E_.ElementStack.prototype.elementTypeInSpecificScope = function (e, t) {
    for (var n = this.elements.length - 1; n >= 0; n--) {
      var r = this.elements[n];
      if (r instanceof e) return !0;
      if (yS(r, t)) return !1;
    }
    return !1;
  };
  E_.ElementStack.prototype.inScope = function (e) {
    return this.inSpecificScope(e, Qpe);
  };
  E_.ElementStack.prototype.elementInScope = function (e) {
    return this.elementInSpecificScope(e, Qpe);
  };
  E_.ElementStack.prototype.elementTypeInScope = function (e) {
    return this.elementTypeInSpecificScope(e, Qpe);
  };
  E_.ElementStack.prototype.inButtonScope = function (e) {
    return this.inSpecificScope(e, Qxo);
  };
  E_.ElementStack.prototype.inListItemScope = function (e) {
    return this.inSpecificScope(e, dYn);
  };
  E_.ElementStack.prototype.inTableScope = function (e) {
    return this.inSpecificScope(e, Apl);
  };
  E_.ElementStack.prototype.inSelectScope = function (e) {
    for (var t = this.elements.length - 1; t >= 0; t--) {
      var n = this.elements[t];
      if (n.namespaceURI !== nd.HTML) return !1;
      var r = n.localName;
      if (r === e) return !0;
      if (r !== "optgroup" && r !== "option") return !1;
    }
    return !1;
  };
  E_.ElementStack.prototype.generateImpliedEndTags = function (e, t) {
    var n = t ? Spl : bpl;
    for (var r = this.elements.length - 1; r >= 0; r--) {
      var o = this.elements[r];
      if (e && yS(o, e)) break;
      if (!yS(this.elements[r], n)) break;
    }
    this.elements.length = r + 1, this.top = this.elements[r];
  };
  E_.ActiveFormattingElements = function () {
    this.list = [], this.attrs = [];
  };
  E_.ActiveFormattingElements.prototype.MARKER = {
    localName: "|"
  };
  E_.ActiveFormattingElements.prototype.insertMarker = function () {
    this.list.push(this.MARKER), this.attrs.push(this.MARKER);
  };
  E_.ActiveFormattingElements.prototype.push = function (e, t) {
    var n = 0;
    for (var r = this.list.length - 1; r >= 0; r--) {
      if (this.list[r] === this.MARKER) break;
      if (i(e, this.list[r], this.attrs[r])) {
        if (n++, n === 3) {
          this.list.splice(r, 1), this.attrs.splice(r, 1);
          break;
        }
      }
    }
    this.list.push(e);
    var o = [];
    for (var s = 0; s < t.length; s++) o[s] = t[s];
    this.attrs.push(o);
    function i(a, l, c) {
      if (a.localName !== l.localName) return !1;
      if (a._numattrs !== c.length) return !1;
      for (var u = 0, d = c.length; u < d; u++) {
        var p = c[u][0],
          f = c[u][1];
        if (!a.hasAttribute(p)) return !1;
        if (a.getAttribute(p) !== f) return !1;
      }
      return !0;
    }
  };
  E_.ActiveFormattingElements.prototype.clearToMarker = function () {
    for (var e = this.list.length - 1; e >= 0; e--) if (this.list[e] === this.MARKER) break;
    if (e < 0) e = 0;
    this.list.length = e, this.attrs.length = e;
  };
  E_.ActiveFormattingElements.prototype.findElementByTag = function (e) {
    for (var t = this.list.length - 1; t >= 0; t--) {
      var n = this.list[t];
      if (n === this.MARKER) break;
      if (n.localName === e) return n;
    }
    return null;
  };
  E_.ActiveFormattingElements.prototype.indexOf = function (e) {
    return this.list.lastIndexOf(e);
  };
  E_.ActiveFormattingElements.prototype.remove = function (e) {
    var t = this.list.lastIndexOf(e);
    if (t !== -1) this.list.splice(t, 1), this.attrs.splice(t, 1);
  };
  E_.ActiveFormattingElements.prototype.replace = function (e, t, n) {
    var r = this.list.lastIndexOf(e);
    if (r !== -1) this.list[r] = t, this.attrs[r] = n;
  };
  E_.ActiveFormattingElements.prototype.insertAfter = function (e, t) {
    var n = this.list.lastIndexOf(e);
    if (n !== -1) this.list.splice(n, 0, t), this.attrs.splice(n, 0, t);
  };
  function E_(e, t, n) {
    var r = null,
      o = 0,
      s = 0,
      i = !1,
      a = !1,
      l = 0,
      c = [],
      u = "",
      d = !0,
      p = 0,
      f = Tt,
      m,
      g,
      h = "",
      y = "",
      b = [],
      _ = "",
      S = "",
      A = [],
      v = [],
      C = [],
      x = [],
      I = [],
      k = !1,
      D = nb,
      P = null,
      O = [],
      L = new E_.ElementStack(),
      M = new E_.ActiveFormattingElements(),
      N = t !== void 0,
      B = null,
      $ = null,
      q = !0;
    if (t) q = t.ownerDocument._scripting_enabled;
    if (n && n.scripting_enabled === !1) q = !1;
    var W = !0,
      V = !1,
      Y,
      z,
      K = [],
      Z = !1,
      J = !1,
      ne = {
        document: function () {
          return oe;
        },
        _asDocumentFragment: function () {
          var et = oe.createDocumentFragment(),
            Xe = oe.firstChild;
          while (Xe.hasChildNodes()) et.appendChild(Xe.firstChild);
          return et;
        },
        pause: function () {
          p++;
        },
        resume: function () {
          p--, this.parse("");
        },
        parse: function (et, Xe, tn) {
          var Ar;
          if (p > 0) return u += et, !0;
          if (l === 0) {
            if (u) et = u + et, u = "";
            if (Xe) et += "\uFFFF", i = !0;
            if (r = et, o = et.length, s = 0, d) {
              if (d = !1, r.charCodeAt(0) === 65279) s = 1;
            }
            l++, Ar = ce(tn), u = r.substring(s, o), l--;
          } else {
            if (l++, c.push(r, o, s), r = et, o = et.length, s = 0, ce(), Ar = !1, u = r.substring(s, o), s = c.pop(), o = c.pop(), r = c.pop(), u) r = u + r.substring(s), o = r.length, s = 0, u = "";
            l--;
          }
          return Ar;
        }
      },
      oe = new wcf(!0, e);
    if (oe._parser = ne, oe._scripting_enabled = q, t) {
      if (t.ownerDocument._quirks) oe._quirks = !0;
      if (t.ownerDocument._limitedQuirks) oe._limitedQuirks = !0;
      if (t.namespaceURI === nd.HTML) switch (t.localName) {
        case "title":
        case "textarea":
          f = un;
          break;
        case "style":
        case "xmp":
        case "iframe":
        case "noembed":
        case "noframes":
        case "script":
        case "plaintext":
          f = Qt;
          break;
      }
      var re = oe.createElement("html");
      if (oe._appendChild(re), L.push(re), t instanceof hS.HTMLTemplateElement) O.push(Wn);
      nn();
      for (var ee = t; ee !== null; ee = ee.parentElement) if (ee instanceof hS.HTMLFormElement) {
        $ = ee;
        break;
      }
    }
    function ce(et) {
      var Xe, tn, Ar, Yr;
      while (s < o) {
        if (p > 0 || et && et()) return !0;
        switch (typeof f.lookahead) {
          case "undefined":
            if (Xe = r.charCodeAt(s++), a) {
              if (a = !1, Xe === 10) {
                s++;
                continue;
              }
            }
            switch (Xe) {
              case 13:
                if (s < o) {
                  if (r.charCodeAt(s) === 10) s++;
                } else a = !0;
                f(10);
                break;
              case 65535:
                if (i && s === o) {
                  f(iYn);
                  break;
                }
              default:
                f(Xe);
                break;
            }
            break;
          case "number":
            Xe = r.charCodeAt(s);
            var Wo = f.lookahead,
              Ri = !0;
            if (Wo < 0) Ri = !1, Wo = -Wo;
            if (Wo < o - s) tn = Ri ? r.substring(s, s + Wo) : null, Yr = !1;else if (i) {
              if (tn = Ri ? r.substring(s, o) : null, Yr = !0, Xe === 65535 && s === o - 1) Xe = iYn;
            } else return !0;
            f(Xe, tn, Yr);
            break;
          case "string":
            Xe = r.charCodeAt(s), Ar = f.lookahead;
            var qa = r.indexOf(Ar, s);
            if (qa !== -1) tn = r.substring(s, qa + Ar.length), Yr = !1;else {
              if (!i) return !0;
              if (tn = r.substring(s, o), Xe === 65535 && s === o - 1) Xe = iYn;
              Yr = !0;
            }
            f(Xe, tn, Yr);
            break;
        }
      }
      return !1;
    }
    function ae(et, Xe) {
      for (var tn = 0; tn < I.length; tn++) if (I[tn][0] === et) return;
      if (Xe !== void 0) I.push([et, Xe]);else I.push([et]);
    }
    function de() {
      dpl.lastIndex = s - 1;
      var et = dpl.exec(r);
      if (!et) throw Error("should never happen");
      var Xe = et[1];
      if (!Xe) return !1;
      var tn = et[2],
        Ar = tn.length;
      switch (tn[0]) {
        case '"':
        case "'":
          tn = tn.substring(1, Ar - 1), s += et[0].length - 1, f = Fi;
          break;
        default:
          f = Jn, s += et[0].length - 1, tn = tn.substring(0, Ar - 1);
          break;
      }
      for (var Yr = 0; Yr < I.length; Yr++) if (I[Yr][0] === Xe) return !0;
      return I.push([Xe, tn]), !0;
    }
    function Ee() {
      k = !1, h = "", I.length = 0;
    }
    function me() {
      k = !0, h = "", I.length = 0;
    }
    function pe() {
      b.length = 0;
    }
    function ge() {
      _ = "";
    }
    function he() {
      S = "";
    }
    function ie() {
      A.length = 0;
    }
    function le() {
      v.length = 0, C = null, x = null;
    }
    function He() {
      C = [];
    }
    function ye() {
      x = [];
    }
    function ue() {
      V = !0;
    }
    function we() {
      return L.top && L.top.namespaceURI !== "http://www.w3.org/1999/xhtml";
    }
    function Ce(et) {
      return y === et;
    }
    function Ie() {
      if (K.length > 0) {
        var et = BF(K);
        if (K.length = 0, J) {
          if (J = !1, et[0] === `
`) et = et.substring(1);
          if (et.length === 0) return;
        }
        Et(P_t, et), Z = !1;
      }
      J = !1;
    }
    function Ve(et) {
      et.lastIndex = s - 1;
      var Xe = et.exec(r);
      if (Xe && Xe.index === s - 1) {
        if (Xe = Xe[0], s += Xe.length - 1, i && s === o) Xe = Xe.slice(0, -1), s--;
        return Xe;
      } else throw Error("should never happen");
    }
    function Ze(et) {
      et.lastIndex = s - 1;
      var Xe = et.exec(r)[0];
      if (!Xe) return !1;
      return Be(Xe), s += Xe.length - 1, !0;
    }
    function Be(et) {
      if (K.length > 0) Ie();
      if (J) {
        if (J = !1, et[0] === `
`) et = et.substring(1);
        if (et.length === 0) return;
      }
      Et(P_t, et);
    }
    function Me() {
      if (k) Et(Kg, h);else {
        var et = h;
        h = "", y = et, Et(NF, et, I);
      }
    }
    function Ue() {
      if (s === o) return !1;
      upl.lastIndex = s;
      var et = upl.exec(r);
      if (!et) throw Error("should never happen");
      var Xe = et[2];
      if (!Xe) return !1;
      var tn = et[1];
      if (tn) s += Xe.length + 2, Et(Kg, Xe);else s += Xe.length + 1, y = Xe, Et(NF, Xe, xcf);
      return !0;
    }
    function tt() {
      if (k) Et(Kg, h, null, !0);else Et(NF, h, I, !0);
    }
    function bt() {
      Et(Icf, BF(v), C ? BF(C) : void 0, x ? BF(x) : void 0);
    }
    function Ke() {
      Ie(), D(iYn), oe.modclock = 1;
    }
    var Et = ne.insertToken = function (Xe, tn, Ar, Yr) {
      Ie();
      var Wo = L.top;
      if (!Wo || Wo.namespaceURI === nd.HTML) D(Xe, tn, Ar, Yr);else if (Xe !== NF && Xe !== P_t) dc(Xe, tn, Ar, Yr);else if (ppl(Wo) && (Xe === P_t || Xe === NF && tn !== "mglyph" && tn !== "malignmark") || Xe === NF && tn === "svg" && Wo.namespaceURI === nd.MATHML && Wo.localName === "annotation-xml" || fpl(Wo)) z = !0, D(Xe, tn, Ar, Yr), z = !1;else dc(Xe, tn, Ar, Yr);
    };
    function ct(et) {
      var Xe = L.top;
      if (st && yS(Xe, M_t)) Dn(function (tn) {
        return tn.createComment(et);
      });else {
        if (Xe instanceof hS.HTMLTemplateElement) Xe = Xe.content;
        Xe._appendChild(Xe.ownerDocument.createComment(et));
      }
    }
    function Je(et) {
      var Xe = L.top;
      if (st && yS(Xe, M_t)) Dn(function (Ar) {
        return Ar.createTextNode(et);
      });else {
        if (Xe instanceof hS.HTMLTemplateElement) Xe = Xe.content;
        var tn = Xe.lastChild;
        if (tn && tn.nodeType === zxo.TEXT_NODE) tn.appendData(et);else Xe._appendChild(Xe.ownerDocument.createTextNode(et));
      }
    }
    function gt(et, Xe, tn) {
      var Ar = ypl.createElement(et, Xe, null);
      if (tn) for (var Yr = 0, Wo = tn.length; Yr < Wo; Yr++) Ar._setAttribute(tn[Yr][0], tn[Yr][1]);
      return Ar;
    }
    var st = !1;
    function xt(et, Xe) {
      var tn = vt(function (Ar) {
        return gt(Ar, et, Xe);
      });
      if (yS(tn, Epl)) tn._form = $;
      return tn;
    }
    function vt(et) {
      var Xe;
      if (st && yS(L.top, M_t)) Xe = Dn(et);else if (L.top instanceof hS.HTMLTemplateElement) Xe = et(L.top.content.ownerDocument), L.top.content._appendChild(Xe);else Xe = et(L.top.ownerDocument), L.top._appendChild(Xe);
      return L.push(Xe), Xe;
    }
    function jt(et, Xe, tn) {
      return vt(function (Ar) {
        var Yr = Ar._createElementNS(et, tn, null);
        if (Xe) for (var Wo = 0, Ri = Xe.length; Wo < Ri; Wo++) {
          var qa = Xe[Wo];
          if (qa.length === 2) Yr._setAttribute(qa[0], qa[1]);else Yr._setAttributeNS(qa[2], qa[0], qa[1]);
        }
        return Yr;
      });
    }
    function en(et) {
      for (var Xe = L.elements.length - 1; Xe >= 0; Xe--) if (L.elements[Xe] instanceof et) return Xe;
      return -1;
    }
    function Dn(et) {
      var Xe,
        tn,
        Ar = -1,
        Yr = -1,
        Wo;
      if (Ar = en(hS.HTMLTableElement), Yr = en(hS.HTMLTemplateElement), Yr >= 0 && (Ar < 0 || Yr > Ar)) Xe = L.elements[Yr];else if (Ar >= 0) if (Xe = L.elements[Ar].parentNode, Xe) tn = L.elements[Ar];else Xe = L.elements[Ar - 1];
      if (!Xe) Xe = L.elements[0];
      if (Xe instanceof hS.HTMLTemplateElement) Xe = Xe.content;
      if (Wo = et(Xe.ownerDocument), Wo.nodeType === zxo.TEXT_NODE) {
        var Ri;
        if (tn) Ri = tn.previousSibling;else Ri = Xe.lastChild;
        if (Ri && Ri.nodeType === zxo.TEXT_NODE) return Ri.appendData(Wo.data), Wo;
      }
      if (tn) Xe.insertBefore(Wo, tn);else Xe._appendChild(Wo);
      return Wo;
    }
    function nn() {
      var et = !1;
      for (var Xe = L.elements.length - 1; Xe >= 0; Xe--) {
        var tn = L.elements[Xe];
        if (Xe === 0) {
          if (et = !0, N) tn = t;
        }
        if (tn.namespaceURI === nd.HTML) {
          var Ar = tn.localName;
          switch (Ar) {
            case "select":
              for (var Yr = Xe; Yr > 0;) {
                var Wo = L.elements[--Yr];
                if (Wo instanceof hS.HTMLTemplateElement) break;else if (Wo instanceof hS.HTMLTableElement) {
                  D = XT;
                  return;
                }
              }
              D = Ih;
              return;
            case "tr":
              D = mx;
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              D = RA;
              return;
            case "caption":
              D = HR;
              return;
            case "colgroup":
              D = TE;
              return;
            case "table":
              D = Sg;
              return;
            case "template":
              D = O[O.length - 1];
              return;
            case "body":
              D = Ji;
              return;
            case "frameset":
              D = Ya;
              return;
            case "html":
              if (B === null) D = rh;else D = Cd;
              return;
            default:
              if (!et) {
                if (Ar === "head") {
                  D = Jm;
                  return;
                }
                if (Ar === "td" || Ar === "th") {
                  D = YT;
                  return;
                }
              }
          }
        }
        if (et) {
          D = Ji;
          return;
        }
      }
    }
    function Ln(et, Xe) {
      xt(et, Xe), f = ze, P = D, D = oh;
    }
    function Hn(et, Xe) {
      xt(et, Xe), f = un, P = D, D = oh;
    }
    function kr(et, Xe) {
      return {
        elt: gt(et, M.list[Xe].localName, M.attrs[Xe]),
        attrs: M.attrs[Xe]
      };
    }
    function Mr() {
      if (M.list.length === 0) return;
      var et = M.list[M.list.length - 1];
      if (et === M.MARKER) return;
      if (L.elements.lastIndexOf(et) !== -1) return;
      for (var Xe = M.list.length - 2; Xe >= 0; Xe--) {
        if (et = M.list[Xe], et === M.MARKER) break;
        if (L.elements.lastIndexOf(et) !== -1) break;
      }
      for (Xe = Xe + 1; Xe < M.list.length; Xe++) {
        var tn = vt(function (Ar) {
          return kr(Ar, Xe).elt;
        });
        M.list[Xe] = tn;
      }
    }
    var fe = {
      localName: "BM"
    };
    function Te(et) {
      if (yS(L.top, et) && M.indexOf(L.top) === -1) return L.pop(), !0;
      var Xe = 0;
      while (Xe < 8) {
        Xe++;
        var tn = M.findElementByTag(et);
        if (!tn) return !1;
        var Ar = L.elements.lastIndexOf(tn);
        if (Ar === -1) return M.remove(tn), !0;
        if (!L.elementInScope(tn)) return !0;
        var Yr = null,
          Wo;
        for (var Ri = Ar + 1; Ri < L.elements.length; Ri++) if (yS(L.elements[Ri], v6e)) {
          Yr = L.elements[Ri], Wo = Ri;
          break;
        }
        if (!Yr) return L.popElement(tn), M.remove(tn), !0;else {
          var qa = L.elements[Ar - 1];
          M.insertAfter(tn, fe);
          var Mc = Yr,
            Fd = Yr,
            cm = Wo,
            Qm,
            Jk = 0;
          while (!0) {
            if (Jk++, Mc = L.elements[--cm], Mc === tn) break;
            if (Qm = M.indexOf(Mc), Jk > 3 && Qm !== -1) M.remove(Mc), Qm = -1;
            if (Qm === -1) {
              L.removeElement(Mc);
              continue;
            }
            var JT = kr(qa.ownerDocument, Qm);
            if (M.replace(Mc, JT.elt, JT.attrs), L.elements[cm] = JT.elt, Mc = JT.elt, Fd === Yr) M.remove(fe), M.insertAfter(JT.elt, fe);
            Mc._appendChild(Fd), Fd = Mc;
          }
          if (st && yS(qa, M_t)) Dn(function () {
            return Fd;
          });else if (qa instanceof hS.HTMLTemplateElement) qa.content._appendChild(Fd);else qa._appendChild(Fd);
          var RS = kr(Yr.ownerDocument, M.indexOf(tn));
          while (Yr.hasChildNodes()) RS.elt._appendChild(Yr.firstChild);
          Yr._appendChild(RS.elt), M.remove(tn), M.replace(fe, RS.elt, RS.attrs), L.removeElement(tn);
          var cD = L.elements.lastIndexOf(Yr);
          L.elements.splice(cD + 1, 0, RS.elt);
        }
      }
      return !0;
    }
    function Re() {
      L.pop(), D = P;
      return;
    }
    function Ne() {
      if (delete oe._parser, L.elements.length = 0, oe.defaultView) oe.defaultView.dispatchEvent(new hS.Event("load", {}));
    }
    function it(et, Xe) {
      f = Xe, s--;
    }
    function Tt(et) {
      switch (et) {
        case 38:
          m = Tt, f = C_;
          break;
        case 60:
          if (Ue()) break;
          f = Er;
          break;
        case 0:
          K.push(et), Z = !0;
          break;
        case -1:
          Ke();
          break;
        default:
          Ze(jcf) || K.push(et);
          break;
      }
    }
    function un(et) {
      switch (et) {
        case 38:
          m = un, f = C_;
          break;
        case 60:
          f = pn;
          break;
        case 0:
          K.push(65533), Z = !0;
          break;
        case -1:
          Ke();
          break;
        default:
          K.push(et);
          break;
      }
    }
    function ze(et) {
      switch (et) {
        case 60:
          f = _o;
          break;
        case 0:
          K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          Ze(cpl) || K.push(et);
          break;
      }
    }
    function Mt(et) {
      switch (et) {
        case 60:
          f = lr;
          break;
        case 0:
          K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          Ze(cpl) || K.push(et);
          break;
      }
    }
    function Qt(et) {
      switch (et) {
        case 0:
          K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          Ze(Gcf) || K.push(et);
          break;
      }
    }
    function Er(et) {
      switch (et) {
        case 33:
          f = Yn;
          break;
        case 47:
          f = pt;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          Ee(), it(et, ln);
          break;
        case 63:
          it(et, nr);
          break;
        default:
          K.push(60), it(et, Tt);
          break;
      }
    }
    function pt(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          me(), it(et, ln);
          break;
        case 62:
          f = Tt;
          break;
        case -1:
          K.push(60), K.push(47), Ke();
          break;
        default:
          it(et, nr);
          break;
      }
    }
    function ln(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = Jn;
          break;
        case 47:
          f = xn;
          break;
        case 62:
          f = Tt, Me();
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          h += String.fromCharCode(et + 32);
          break;
        case 0:
          h += String.fromCharCode(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          h += Ve(Bcf);
          break;
      }
    }
    function pn(et) {
      if (et === 47) pe(), f = ir;else K.push(60), it(et, un);
    }
    function ir(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          me(), it(et, Rr);
          break;
        default:
          K.push(60), K.push(47), it(et, un);
          break;
      }
    }
    function Rr(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (Ce(h)) {
            f = Jn;
            return;
          }
          break;
        case 47:
          if (Ce(h)) {
            f = xn;
            return;
          }
          break;
        case 62:
          if (Ce(h)) {
            f = Tt, Me();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          h += String.fromCharCode(et + 32), b.push(et);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          h += String.fromCharCode(et), b.push(et);
          return;
        default:
          break;
      }
      K.push(60), K.push(47), H6e(K, b), it(et, un);
    }
    function _o(et) {
      if (et === 47) pe(), f = Xo;else K.push(60), it(et, ze);
    }
    function Xo(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          me(), it(et, Pn);
          break;
        default:
          K.push(60), K.push(47), it(et, ze);
          break;
      }
    }
    function Pn(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (Ce(h)) {
            f = Jn;
            return;
          }
          break;
        case 47:
          if (Ce(h)) {
            f = xn;
            return;
          }
          break;
        case 62:
          if (Ce(h)) {
            f = Tt, Me();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          h += String.fromCharCode(et + 32), b.push(et);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          h += String.fromCharCode(et), b.push(et);
          return;
        default:
          break;
      }
      K.push(60), K.push(47), H6e(K, b), it(et, ze);
    }
    function lr(et) {
      switch (et) {
        case 47:
          pe(), f = eo;
          break;
        case 33:
          f = Nt, K.push(60), K.push(33);
          break;
        default:
          K.push(60), it(et, Mt);
          break;
      }
    }
    function eo(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          me(), it(et, Kn);
          break;
        default:
          K.push(60), K.push(47), it(et, Mt);
          break;
      }
    }
    function Kn(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (Ce(h)) {
            f = Jn;
            return;
          }
          break;
        case 47:
          if (Ce(h)) {
            f = xn;
            return;
          }
          break;
        case 62:
          if (Ce(h)) {
            f = Tt, Me();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          h += String.fromCharCode(et + 32), b.push(et);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          h += String.fromCharCode(et), b.push(et);
          return;
        default:
          break;
      }
      K.push(60), K.push(47), H6e(K, b), it(et, Mt);
    }
    function Nt(et) {
      if (et === 45) f = Ut, K.push(45);else it(et, Mt);
    }
    function Ut(et) {
      if (et === 45) f = jn, K.push(45);else it(et, Mt);
    }
    function Fn(et) {
      switch (et) {
        case 45:
          f = xi, K.push(45);
          break;
        case 60:
          f = So;
          break;
        case 0:
          K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          K.push(et);
          break;
      }
    }
    function xi(et) {
      switch (et) {
        case 45:
          f = jn, K.push(45);
          break;
        case 60:
          f = So;
          break;
        case 0:
          f = Fn, K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          f = Fn, K.push(et);
          break;
      }
    }
    function jn(et) {
      switch (et) {
        case 45:
          K.push(45);
          break;
        case 60:
          f = So;
          break;
        case 62:
          f = Mt, K.push(62);
          break;
        case 0:
          f = Fn, K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          f = Fn, K.push(et);
          break;
      }
    }
    function So(et) {
      switch (et) {
        case 47:
          pe(), f = Mo;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          pe(), K.push(60), it(et, js);
          break;
        default:
          K.push(60), it(et, Fn);
          break;
      }
    }
    function Mo(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          me(), it(et, rs);
          break;
        default:
          K.push(60), K.push(47), it(et, Fn);
          break;
      }
    }
    function rs(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (Ce(h)) {
            f = Jn;
            return;
          }
          break;
        case 47:
          if (Ce(h)) {
            f = xn;
            return;
          }
          break;
        case 62:
          if (Ce(h)) {
            f = Tt, Me();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          h += String.fromCharCode(et + 32), b.push(et);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          h += String.fromCharCode(et), b.push(et);
          return;
        default:
          break;
      }
      K.push(60), K.push(47), H6e(K, b), it(et, Fn);
    }
    function js(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
          if (BF(b) === "script") f = Gn;else f = Fn;
          K.push(et);
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          b.push(et + 32), K.push(et);
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          b.push(et), K.push(et);
          break;
        default:
          it(et, Fn);
          break;
      }
    }
    function Gn(et) {
      switch (et) {
        case 45:
          f = cr, K.push(45);
          break;
        case 60:
          f = En, K.push(60);
          break;
        case 0:
          K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          K.push(et);
          break;
      }
    }
    function cr(et) {
      switch (et) {
        case 45:
          f = Lt, K.push(45);
          break;
        case 60:
          f = En, K.push(60);
          break;
        case 0:
          f = Gn, K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          f = Gn, K.push(et);
          break;
      }
    }
    function Lt(et) {
      switch (et) {
        case 45:
          K.push(45);
          break;
        case 60:
          f = En, K.push(60);
          break;
        case 62:
          f = Mt, K.push(62);
          break;
        case 0:
          f = Gn, K.push(65533);
          break;
        case -1:
          Ke();
          break;
        default:
          f = Gn, K.push(et);
          break;
      }
    }
    function En(et) {
      if (et === 47) pe(), f = Sn, K.push(47);else it(et, Gn);
    }
    function Sn(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
          if (BF(b) === "script") f = Fn;else f = Gn;
          K.push(et);
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          b.push(et + 32), K.push(et);
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          b.push(et), K.push(et);
          break;
        default:
          it(et, Gn);
          break;
      }
    }
    function Jn(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 47:
          f = xn;
          break;
        case 62:
          f = Tt, Me();
          break;
        case -1:
          Ke();
          break;
        case 61:
          ge(), _ += String.fromCharCode(et), f = Qn;
          break;
        default:
          if (de()) break;
          ge(), it(et, Qn);
          break;
      }
    }
    function Qn(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
        case -1:
          it(et, gr);
          break;
        case 61:
          f = fo;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          _ += String.fromCharCode(et + 32);
          break;
        case 0:
          _ += String.fromCharCode(65533);
          break;
        case 34:
        case 39:
        case 60:
        default:
          _ += Ve(Ucf);
          break;
      }
    }
    function gr(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 47:
          ae(_), f = xn;
          break;
        case 61:
          f = fo;
          break;
        case 62:
          f = Tt, ae(_), Me();
          break;
        case -1:
          ae(_), Ke();
          break;
        default:
          ae(_), ge(), it(et, Qn);
          break;
      }
    }
    function fo(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          he(), f = cs;
          break;
        case 39:
          he(), f = Gs;
          break;
        case 62:
        default:
          he(), it(et, la);
          break;
      }
    }
    function cs(et) {
      switch (et) {
        case 34:
          ae(_, S), f = Fi;
          break;
        case 38:
          m = cs, f = C_;
          break;
        case 0:
          S += String.fromCharCode(65533);
          break;
        case -1:
          Ke();
          break;
        case 10:
          S += String.fromCharCode(et);
          break;
        default:
          S += Ve($cf);
          break;
      }
    }
    function Gs(et) {
      switch (et) {
        case 39:
          ae(_, S), f = Fi;
          break;
        case 38:
          m = Gs, f = C_;
          break;
        case 0:
          S += String.fromCharCode(65533);
          break;
        case -1:
          Ke();
          break;
        case 10:
          S += String.fromCharCode(et);
          break;
        default:
          S += Ve(Ocf);
          break;
      }
    }
    function la(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          ae(_, S), f = Jn;
          break;
        case 38:
          m = la, f = C_;
          break;
        case 62:
          ae(_, S), f = Tt, Me();
          break;
        case 0:
          S += String.fromCharCode(65533);
          break;
        case -1:
          s--, f = Tt;
          break;
        case 34:
        case 39:
        case 60:
        case 61:
        case 96:
        default:
          S += Ve(Ncf);
          break;
      }
    }
    function Fi(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = Jn;
          break;
        case 47:
          f = xn;
          break;
        case 62:
          f = Tt, Me();
          break;
        case -1:
          Ke();
          break;
        default:
          it(et, Jn);
          break;
      }
    }
    function xn(et) {
      switch (et) {
        case 62:
          f = Tt, tt(!0);
          break;
        case -1:
          Ke();
          break;
        default:
          it(et, Jn);
          break;
      }
    }
    function nr(et, Xe, tn) {
      var Ar = Xe.length;
      if (tn) s += Ar - 1;else s += Ar;
      var Yr = Xe.substring(0, Ar - 1);
      Yr = Yr.replace(/\u0000/g, "\uFFFD"), Yr = Yr.replace(/\u000D\u000A/g, `
`), Yr = Yr.replace(/\u000D/g, `
`), Et(Jpe, Yr), f = Tt;
    }
    nr.lookahead = ">";
    function Yn(et, Xe, tn) {
      if (Xe[0] === "-" && Xe[1] === "-") {
        s += 2, ie(), f = Xn;
        return;
      }
      if (Xe.toUpperCase() === "DOCTYPE") s += 7, f = us;else if (Xe === "[CDATA[" && we()) s += 7, f = ca;else f = nr;
    }
    Yn.lookahead = 7;
    function Xn(et) {
      switch (ie(), et) {
        case 45:
          f = Jr;
          break;
        case 62:
          f = Tt, Et(Jpe, BF(A));
          break;
        default:
          it(et, zr);
          break;
      }
    }
    function Jr(et) {
      switch (et) {
        case 45:
          f = To;
          break;
        case 62:
          f = Tt, Et(Jpe, BF(A));
          break;
        case -1:
          Et(Jpe, BF(A)), Ke();
          break;
        default:
          A.push(45), it(et, zr);
          break;
      }
    }
    function zr(et) {
      switch (et) {
        case 60:
          A.push(et), f = to;
          break;
        case 45:
          f = Qs;
          break;
        case 0:
          A.push(65533);
          break;
        case -1:
          Et(Jpe, BF(A)), Ke();
          break;
        default:
          A.push(et);
          break;
      }
    }
    function to(et) {
      switch (et) {
        case 33:
          A.push(et), f = vs;
          break;
        case 60:
          A.push(et);
          break;
        default:
          it(et, zr);
          break;
      }
    }
    function vs(et) {
      switch (et) {
        case 45:
          f = bs;
          break;
        default:
          it(et, zr);
          break;
      }
    }
    function bs(et) {
      switch (et) {
        case 45:
          f = Da;
          break;
        default:
          it(et, Qs);
          break;
      }
    }
    function Da(et) {
      switch (et) {
        case 62:
        case -1:
          it(et, To);
          break;
        default:
          it(et, To);
          break;
      }
    }
    function Qs(et) {
      switch (et) {
        case 45:
          f = To;
          break;
        case -1:
          Et(Jpe, BF(A)), Ke();
          break;
        default:
          A.push(45), it(et, zr);
          break;
      }
    }
    function To(et) {
      switch (et) {
        case 62:
          f = Tt, Et(Jpe, BF(A));
          break;
        case 33:
          f = ji;
          break;
        case 45:
          A.push(45);
          break;
        case -1:
          Et(Jpe, BF(A)), Ke();
          break;
        default:
          A.push(45), A.push(45), it(et, zr);
          break;
      }
    }
    function ji(et) {
      switch (et) {
        case 45:
          A.push(45), A.push(45), A.push(33), f = Qs;
          break;
        case 62:
          f = Tt, Et(Jpe, BF(A));
          break;
        case -1:
          Et(Jpe, BF(A)), Ke();
          break;
        default:
          A.push(45), A.push(45), A.push(33), it(et, zr);
          break;
      }
    }
    function us(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = X;
          break;
        case -1:
          le(), ue(), bt(), Ke();
          break;
        default:
          it(et, X);
          break;
      }
    }
    function X(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          le(), v.push(et + 32), f = Se;
          break;
        case 0:
          le(), v.push(65533), f = Se;
          break;
        case 62:
          le(), ue(), f = Tt, bt();
          break;
        case -1:
          le(), ue(), bt(), Ke();
          break;
        default:
          le(), v.push(et), f = Se;
          break;
      }
    }
    function Se(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = qe;
          break;
        case 62:
          f = Tt, bt();
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          v.push(et + 32);
          break;
        case 0:
          v.push(65533);
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          v.push(et);
          break;
      }
    }
    function qe(et, Xe, tn) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          s += 1;
          break;
        case 62:
          f = Tt, s += 1, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          if (Xe = Xe.toUpperCase(), Xe === "PUBLIC") s += 6, f = ot;else if (Xe === "SYSTEM") s += 6, f = fi;else ue(), f = sd;
          break;
      }
    }
    qe.lookahead = 6;
    function ot(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = zt;
          break;
        case 34:
          He(), f = cn;
          break;
        case 39:
          He(), f = hr;
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function zt(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          He(), f = cn;
          break;
        case 39:
          He(), f = hr;
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function cn(et) {
      switch (et) {
        case 34:
          f = Tr;
          break;
        case 0:
          C.push(65533);
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          C.push(et);
          break;
      }
    }
    function hr(et) {
      switch (et) {
        case 39:
          f = Tr;
          break;
        case 0:
          C.push(65533);
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          C.push(et);
          break;
      }
    }
    function Tr(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = Br;
          break;
        case 62:
          f = Tt, bt();
          break;
        case 34:
          ye(), f = Pa;
          break;
        case 39:
          ye(), f = nc;
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function Br(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 62:
          f = Tt, bt();
          break;
        case 34:
          ye(), f = Pa;
          break;
        case 39:
          ye(), f = nc;
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function fi(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          f = oi;
          break;
        case 34:
          ye(), f = Pa;
          break;
        case 39:
          ye(), f = nc;
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function oi(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          ye(), f = Pa;
          break;
        case 39:
          ye(), f = nc;
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          ue(), f = sd;
          break;
      }
    }
    function Pa(et) {
      switch (et) {
        case 34:
          f = Qp;
          break;
        case 0:
          x.push(65533);
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          x.push(et);
          break;
      }
    }
    function nc(et) {
      switch (et) {
        case 39:
          f = Qp;
          break;
        case 0:
          x.push(65533);
          break;
        case 62:
          ue(), f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          x.push(et);
          break;
      }
    }
    function Qp(et) {
      switch (et) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 62:
          f = Tt, bt();
          break;
        case -1:
          ue(), bt(), Ke();
          break;
        default:
          f = sd;
          break;
      }
    }
    function sd(et) {
      switch (et) {
        case 62:
          f = Tt, bt();
          break;
        case -1:
          bt(), Ke();
          break;
        default:
          break;
      }
    }
    function ca(et) {
      switch (et) {
        case 93:
          f = _p;
          break;
        case -1:
          Ke();
          break;
        case 0:
          Z = !0;
        default:
          Ze(Fcf) || K.push(et);
          break;
      }
    }
    function _p(et) {
      switch (et) {
        case 93:
          f = bg;
          break;
        default:
          K.push(93), it(et, ca);
          break;
      }
    }
    function bg(et) {
      switch (et) {
        case 93:
          K.push(93);
          break;
        case 62:
          Ie(), f = Tt;
          break;
        default:
          K.push(93), K.push(93), it(et, ca);
          break;
      }
    }
    function C_(et) {
      switch (pe(), b.push(38), et) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 60:
        case 38:
        case -1:
          it(et, dl);
          break;
        case 35:
          b.push(et), f = Zy;
          break;
        default:
          it(et, Xm);
          break;
      }
    }
    function Xm(et) {
      lpl.lastIndex = s;
      var Xe = lpl.exec(r);
      if (!Xe) throw Error("should never happen");
      var tn = Xe[1];
      if (!tn) {
        f = dl;
        return;
      }
      switch (s += tn.length, H6e(b, qcf(tn)), m) {
        case cs:
        case Gs:
        case la:
          if (tn[tn.length - 1] !== ";") {
            if (/[=A-Za-z0-9]/.test(r[s])) {
              f = dl;
              return;
            }
          }
          break;
        default:
          break;
      }
      pe();
      var Ar = Pcf[tn];
      if (typeof Ar === "number") b.push(Ar);else H6e(b, Ar);
      f = dl;
    }
    Xm.lookahead = -Mcf;
    function Zy(et) {
      switch (g = 0, et) {
        case 120:
        case 88:
          b.push(et), f = dd;
          break;
        default:
          it(et, Ch);
          break;
      }
    }
    function dd(et) {
      switch (et) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
          it(et, kS);
          break;
        default:
          it(et, dl);
          break;
      }
    }
    function Ch(et) {
      switch (et) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          it(et, Pb);
          break;
        default:
          it(et, dl);
          break;
      }
    }
    function kS(et) {
      switch (et) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
          g *= 16, g += et - 55;
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
          g *= 16, g += et - 87;
          break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          g *= 16, g += et - 48;
          break;
        case 59:
          f = ay;
          break;
        default:
          it(et, ay);
          break;
      }
    }
    function Pb(et) {
      switch (et) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          g *= 10, g += et - 48;
          break;
        case 59:
          f = ay;
          break;
        default:
          it(et, ay);
          break;
      }
    }
    function ay(et) {
      if (g in apl) g = apl[g];else if (g > 1114111 || g >= 55296 && g < 57344) g = 65533;
      if (pe(), g <= 65535) b.push(g);else g = g - 65536, b.push(55296 + (g >> 10)), b.push(56320 + (g & 1023));
      it(et, dl);
    }
    function dl(et) {
      switch (m) {
        case cs:
        case Gs:
        case la:
          S += BF(b);
          break;
        default:
          H6e(K, b);
          break;
      }
      it(et, m);
    }
    function nb(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Xe = Xe.replace(T6e, ""), Xe.length === 0) return;
          break;
        case 4:
          oe._appendChild(oe.createComment(Xe));
          return;
        case 5:
          var Yr = Xe,
            Wo = tn,
            Ri = Ar;
          if (oe.appendChild(new Ccf(oe, Yr, Wo, Ri)), V || Yr.toLowerCase() !== "html" || kcf.test(Wo) || Ri && Ri.toLowerCase() === Rcf || Ri === void 0 && rpl.test(Wo)) oe._quirks = !0;else if (Lcf.test(Wo) || Ri !== void 0 && rpl.test(Wo)) oe._limitedQuirks = !0;
          D = KT;
          return;
      }
      oe._quirks = !0, D = KT, D(et, Xe, tn, Ar);
    }
    function KT(et, Xe, tn, Ar) {
      var Yr;
      switch (et) {
        case 1:
          if (Xe = Xe.replace(T6e, ""), Xe.length === 0) return;
          break;
        case 5:
          return;
        case 4:
          oe._appendChild(oe.createComment(Xe));
          return;
        case 2:
          if (Xe === "html") {
            Yr = gt(oe, Xe, tn), L.push(Yr), oe.appendChild(Yr), D = rh;
            return;
          }
          break;
        case 3:
          switch (Xe) {
            case "html":
            case "head":
            case "body":
            case "br":
              break;
            default:
              return;
          }
      }
      Yr = gt(oe, "html", null), L.push(Yr), oe.appendChild(Yr), D = rh, D(et, Xe, tn, Ar);
    }
    function rh(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Xe = Xe.replace(T6e, ""), Xe.length === 0) return;
          break;
        case 5:
          return;
        case 4:
          ct(Xe);
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "head":
              var Yr = xt(Xe, tn);
              B = Yr, D = Jm;
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "html":
            case "head":
            case "body":
            case "br":
              break;
            default:
              return;
          }
      }
      rh(NF, "head", null), D(et, Xe, tn, Ar);
    }
    function Jm(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          var Yr = Xe.match(T6e);
          if (Yr) Je(Yr[0]), Xe = Xe.substring(Yr[0].length);
          if (Xe.length === 0) return;
          break;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "meta":
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
              xt(Xe, tn), L.pop();
              return;
            case "title":
              Hn(Xe, tn);
              return;
            case "noscript":
              if (!q) {
                xt(Xe, tn), D = ly;
                return;
              }
            case "noframes":
            case "style":
              Ln(Xe, tn);
              return;
            case "script":
              vt(function (Wo) {
                var Ri = gt(Wo, Xe, tn);
                if (Ri._parser_inserted = !0, Ri._force_async = !1, N) Ri._already_started = !0;
                return Ie(), Ri;
              }), f = Mt, P = D, D = oh;
              return;
            case "template":
              xt(Xe, tn), M.insertMarker(), W = !1, D = Wn, O.push(D);
              return;
            case "head":
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "head":
              L.pop(), D = Cd;
              return;
            case "body":
            case "html":
            case "br":
              break;
            case "template":
              if (!L.contains("template")) return;
              L.generateImpliedEndTags(null, "thorough"), L.popTag("template"), M.clearToMarker(), O.pop(), nn();
              return;
            default:
              return;
          }
          break;
      }
      Jm(Kg, "head", null), D(et, Xe, tn, Ar);
    }
    function ly(et, Xe, tn, Ar) {
      switch (et) {
        case 5:
          return;
        case 4:
          Jm(et, Xe);
          return;
        case 1:
          var Yr = Xe.match(T6e);
          if (Yr) Jm(et, Yr[0]), Xe = Xe.substring(Yr[0].length);
          if (Xe.length === 0) return;
          break;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "style":
              Jm(et, Xe, tn);
              return;
            case "head":
            case "noscript":
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "noscript":
              L.pop(), D = Jm;
              return;
            case "br":
              break;
            default:
              return;
          }
          break;
      }
      ly(Kg, "noscript", null), D(et, Xe, tn, Ar);
    }
    function Cd(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          var Yr = Xe.match(T6e);
          if (Yr) Je(Yr[0]), Xe = Xe.substring(Yr[0].length);
          if (Xe.length === 0) return;
          break;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "body":
              xt(Xe, tn), W = !1, D = Ji;
              return;
            case "frameset":
              xt(Xe, tn), D = Ya;
              return;
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              L.push(B), Jm(NF, Xe, tn), L.removeElement(B);
              return;
            case "head":
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "template":
              return Jm(et, Xe, tn, Ar);
            case "body":
            case "html":
            case "br":
              break;
            default:
              return;
          }
          break;
      }
      Cd(NF, "body", null), W = !0, D(et, Xe, tn, Ar);
    }
    function Ji(et, Xe, tn, Ar) {
      var Yr, Wo, Ri, qa;
      switch (et) {
        case 1:
          if (Z) {
            if (Xe = Xe.replace(lYn, ""), Xe.length === 0) return;
          }
          if (W && aYn.test(Xe)) W = !1;
          Mr(), Je(Xe);
          return;
        case 5:
          return;
        case 4:
          ct(Xe);
          return;
        case -1:
          if (O.length) return Wn(et);
          Ne();
          return;
        case 2:
          switch (Xe) {
            case "html":
              if (L.contains("template")) return;
              hpl(tn, L.elements[0]);
              return;
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              Jm(NF, Xe, tn);
              return;
            case "body":
              if (Yr = L.elements[1], !Yr || !(Yr instanceof hS.HTMLBodyElement) || L.contains("template")) return;
              W = !1, hpl(tn, Yr);
              return;
            case "frameset":
              if (!W) return;
              if (Yr = L.elements[1], !Yr || !(Yr instanceof hS.HTMLBodyElement)) return;
              if (Yr.parentNode) Yr.parentNode.removeChild(Yr);
              while (!(L.top instanceof hS.HTMLHtmlElement)) L.pop();
              xt(Xe, tn), D = Ya;
              return;
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn);
              return;
            case "menu":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              if (yS(L.top, "menuitem")) L.pop();
              xt(Xe, tn);
              return;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              if (L.top instanceof hS.HTMLHeadingElement) L.pop();
              xt(Xe, tn);
              return;
            case "pre":
            case "listing":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn), J = !0, W = !1;
              return;
            case "form":
              if ($ && !L.contains("template")) return;
              if (L.inButtonScope("p")) Ji(Kg, "p");
              if (qa = xt(Xe, tn), !L.contains("template")) $ = qa;
              return;
            case "li":
              W = !1;
              for (Wo = L.elements.length - 1; Wo >= 0; Wo--) {
                if (Ri = L.elements[Wo], Ri instanceof hS.HTMLLIElement) {
                  Ji(Kg, "li");
                  break;
                }
                if (yS(Ri, v6e) && !yS(Ri, Xxo)) break;
              }
              if (L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn);
              return;
            case "dd":
            case "dt":
              W = !1;
              for (Wo = L.elements.length - 1; Wo >= 0; Wo--) {
                if (Ri = L.elements[Wo], yS(Ri, _pl)) {
                  Ji(Kg, Ri.localName);
                  break;
                }
                if (yS(Ri, v6e) && !yS(Ri, Xxo)) break;
              }
              if (L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn);
              return;
            case "plaintext":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn), f = Qt;
              return;
            case "button":
              if (L.inScope("button")) Ji(Kg, "button"), D(et, Xe, tn, Ar);else Mr(), xt(Xe, tn), W = !1;
              return;
            case "a":
              var Mc = M.findElementByTag("a");
              if (Mc) Ji(Kg, Xe), M.remove(Mc), L.removeElement(Mc);
            case "b":
            case "big":
            case "code":
            case "em":
            case "font":
            case "i":
            case "s":
            case "small":
            case "strike":
            case "strong":
            case "tt":
            case "u":
              Mr(), M.push(xt(Xe, tn), tn);
              return;
            case "nobr":
              if (Mr(), L.inScope(Xe)) Ji(Kg, Xe), Mr();
              M.push(xt(Xe, tn), tn);
              return;
            case "applet":
            case "marquee":
            case "object":
              Mr(), xt(Xe, tn), M.insertMarker(), W = !1;
              return;
            case "table":
              if (!oe._quirks && L.inButtonScope("p")) Ji(Kg, "p");
              xt(Xe, tn), W = !1, D = Sg;
              return;
            case "area":
            case "br":
            case "embed":
            case "img":
            case "keygen":
            case "wbr":
              Mr(), xt(Xe, tn), L.pop(), W = !1;
              return;
            case "input":
              Mr(), qa = xt(Xe, tn), L.pop();
              var Fd = qa.getAttribute("type");
              if (!Fd || Fd.toLowerCase() !== "hidden") W = !1;
              return;
            case "param":
            case "source":
            case "track":
              xt(Xe, tn), L.pop();
              return;
            case "hr":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              if (yS(L.top, "menuitem")) L.pop();
              xt(Xe, tn), L.pop(), W = !1;
              return;
            case "image":
              Ji(NF, "img", tn, Ar);
              return;
            case "textarea":
              xt(Xe, tn), J = !0, W = !1, f = un, P = D, D = oh;
              return;
            case "xmp":
              if (L.inButtonScope("p")) Ji(Kg, "p");
              Mr(), W = !1, Ln(Xe, tn);
              return;
            case "iframe":
              W = !1, Ln(Xe, tn);
              return;
            case "noembed":
              Ln(Xe, tn);
              return;
            case "select":
              if (Mr(), xt(Xe, tn), W = !1, D === Sg || D === HR || D === RA || D === mx || D === YT) D = XT;else D = Ih;
              return;
            case "optgroup":
            case "option":
              if (L.top instanceof hS.HTMLOptionElement) Ji(Kg, "option");
              Mr(), xt(Xe, tn);
              return;
            case "menuitem":
              if (yS(L.top, "menuitem")) L.pop();
              Mr(), xt(Xe, tn);
              return;
            case "rb":
            case "rtc":
              if (L.inScope("ruby")) L.generateImpliedEndTags();
              xt(Xe, tn);
              return;
            case "rp":
            case "rt":
              if (L.inScope("ruby")) L.generateImpliedEndTags("rtc");
              xt(Xe, tn);
              return;
            case "math":
              if (Mr(), gpl(tn), Yxo(tn), jt(Xe, tn, nd.MATHML), Ar) L.pop();
              return;
            case "svg":
              if (Mr(), mpl(tn), Yxo(tn), jt(Xe, tn, nd.SVG), Ar) L.pop();
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "frame":
            case "head":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
          }
          Mr(), xt(Xe, tn);
          return;
        case 3:
          switch (Xe) {
            case "template":
              Jm(Kg, Xe, tn);
              return;
            case "body":
              if (!L.inScope("body")) return;
              D = Cs;
              return;
            case "html":
              if (!L.inScope("body")) return;
              D = Cs, D(et, Xe, tn);
              return;
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "button":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "listing":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "pre":
            case "section":
            case "summary":
            case "ul":
              if (!L.inScope(Xe)) return;
              L.generateImpliedEndTags(), L.popTag(Xe);
              return;
            case "form":
              if (!L.contains("template")) {
                var cm = $;
                if ($ = null, !cm || !L.elementInScope(cm)) return;
                L.generateImpliedEndTags(), L.removeElement(cm);
              } else {
                if (!L.inScope("form")) return;
                L.generateImpliedEndTags(), L.popTag("form");
              }
              return;
            case "p":
              if (!L.inButtonScope(Xe)) Ji(NF, Xe, null), D(et, Xe, tn, Ar);else L.generateImpliedEndTags(Xe), L.popTag(Xe);
              return;
            case "li":
              if (!L.inListItemScope(Xe)) return;
              L.generateImpliedEndTags(Xe), L.popTag(Xe);
              return;
            case "dd":
            case "dt":
              if (!L.inScope(Xe)) return;
              L.generateImpliedEndTags(Xe), L.popTag(Xe);
              return;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              if (!L.elementTypeInScope(hS.HTMLHeadingElement)) return;
              L.generateImpliedEndTags(), L.popElementType(hS.HTMLHeadingElement);
              return;
            case "sarcasm":
              break;
            case "a":
            case "b":
            case "big":
            case "code":
            case "em":
            case "font":
            case "i":
            case "nobr":
            case "s":
            case "small":
            case "strike":
            case "strong":
            case "tt":
            case "u":
              var Qm = Te(Xe);
              if (Qm) return;
              break;
            case "applet":
            case "marquee":
            case "object":
              if (!L.inScope(Xe)) return;
              L.generateImpliedEndTags(), L.popTag(Xe), M.clearToMarker();
              return;
            case "br":
              Ji(NF, Xe, null);
              return;
          }
          for (Wo = L.elements.length - 1; Wo >= 0; Wo--) if (Ri = L.elements[Wo], yS(Ri, Xe)) {
            L.generateImpliedEndTags(Xe), L.popElement(Ri);
            break;
          } else if (yS(Ri, v6e)) return;
          return;
      }
    }
    function oh(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          Je(Xe);
          return;
        case -1:
          if (L.top instanceof hS.HTMLScriptElement) L.top._already_started = !0;
          L.pop(), D = P, D(et);
          return;
        case 3:
          if (Xe === "script") Re();else L.pop(), D = P;
          return;
        default:
          return;
      }
    }
    function Sg(et, Xe, tn, Ar) {
      function Yr(Ri) {
        for (var qa = 0, Mc = Ri.length; qa < Mc; qa++) if (Ri[qa][0] === "type") return Ri[qa][1].toLowerCase();
        return null;
      }
      switch (et) {
        case 1:
          if (z) {
            Ji(et, Xe, tn, Ar);
            return;
          } else if (yS(L.top, M_t)) {
            Y = [], P = D, D = rb, D(et, Xe, tn, Ar);
            return;
          }
          break;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case 2:
          switch (Xe) {
            case "caption":
              L.clearToContext(cYn), M.insertMarker(), xt(Xe, tn), D = HR;
              return;
            case "colgroup":
              L.clearToContext(cYn), xt(Xe, tn), D = TE;
              return;
            case "col":
              Sg(NF, "colgroup", null), D(et, Xe, tn, Ar);
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              L.clearToContext(cYn), xt(Xe, tn), D = RA;
              return;
            case "td":
            case "th":
            case "tr":
              Sg(NF, "tbody", null), D(et, Xe, tn, Ar);
              return;
            case "table":
              if (!L.inTableScope(Xe)) return;
              Sg(Kg, Xe), D(et, Xe, tn, Ar);
              return;
            case "style":
            case "script":
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
            case "input":
              var Wo = Yr(tn);
              if (Wo !== "hidden") break;
              xt(Xe, tn), L.pop();
              return;
            case "form":
              if ($ || L.contains("template")) return;
              $ = xt(Xe, tn), L.popElement($);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "table":
              if (!L.inTableScope(Xe)) return;
              L.popTag(Xe), nn();
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case -1:
          Ji(et, Xe, tn, Ar);
          return;
      }
      st = !0, Ji(et, Xe, tn, Ar), st = !1;
    }
    function rb(et, Xe, tn, Ar) {
      if (et === P_t) {
        if (Z) {
          if (Xe = Xe.replace(lYn, ""), Xe.length === 0) return;
        }
        Y.push(Xe);
      } else {
        var Yr = Y.join("");
        if (Y.length = 0, aYn.test(Yr)) st = !0, Ji(P_t, Yr), st = !1;else Je(Yr);
        D = P, D(et, Xe, tn, Ar);
      }
    }
    function HR(et, Xe, tn, Ar) {
      function Yr() {
        if (!L.inTableScope("caption")) return !1;
        return L.generateImpliedEndTags(), L.popTag("caption"), M.clearToMarker(), D = Sg, !0;
      }
      switch (et) {
        case 2:
          switch (Xe) {
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              if (Yr()) D(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "caption":
              Yr();
              return;
            case "table":
              if (Yr()) D(et, Xe, tn, Ar);
              return;
            case "body":
            case "col":
            case "colgroup":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
          }
          break;
      }
      Ji(et, Xe, tn, Ar);
    }
    function TE(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          var Yr = Xe.match(T6e);
          if (Yr) Je(Yr[0]), Xe = Xe.substring(Yr[0].length);
          if (Xe.length === 0) return;
          break;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "col":
              xt(Xe, tn), L.pop();
              return;
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "colgroup":
              if (!yS(L.top, "colgroup")) return;
              L.pop(), D = Sg;
              return;
            case "col":
              return;
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case -1:
          Ji(et, Xe, tn, Ar);
          return;
      }
      if (!yS(L.top, "colgroup")) return;
      TE(Kg, "colgroup"), D(et, Xe, tn, Ar);
    }
    function RA(et, Xe, tn, Ar) {
      function Yr() {
        if (!L.inTableScope("tbody") && !L.inTableScope("thead") && !L.inTableScope("tfoot")) return;
        L.clearToContext(uYn), RA(Kg, L.top.localName, null), D(et, Xe, tn, Ar);
      }
      switch (et) {
        case 2:
          switch (Xe) {
            case "tr":
              L.clearToContext(uYn), xt(Xe, tn), D = mx;
              return;
            case "th":
            case "td":
              RA(NF, "tr", null), D(et, Xe, tn, Ar);
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
              Yr();
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "table":
              Yr();
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              if (L.inTableScope(Xe)) L.clearToContext(uYn), L.pop(), D = Sg;
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "td":
            case "th":
            case "tr":
              return;
          }
          break;
      }
      Sg(et, Xe, tn, Ar);
    }
    function mx(et, Xe, tn, Ar) {
      function Yr() {
        if (!L.inTableScope("tr")) return !1;
        return L.clearToContext(Jxo), L.pop(), D = RA, !0;
      }
      switch (et) {
        case 2:
          switch (Xe) {
            case "th":
            case "td":
              L.clearToContext(Jxo), xt(Xe, tn), D = YT, M.insertMarker();
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
            case "tr":
              if (Yr()) D(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "tr":
              Yr();
              return;
            case "table":
              if (Yr()) D(et, Xe, tn, Ar);
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              if (L.inTableScope(Xe)) {
                if (Yr()) D(et, Xe, tn, Ar);
              }
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "td":
            case "th":
              return;
          }
          break;
      }
      Sg(et, Xe, tn, Ar);
    }
    function YT(et, Xe, tn, Ar) {
      switch (et) {
        case 2:
          switch (Xe) {
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              if (L.inTableScope("td")) YT(Kg, "td"), D(et, Xe, tn, Ar);else if (L.inTableScope("th")) YT(Kg, "th"), D(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "td":
            case "th":
              if (!L.inTableScope(Xe)) return;
              L.generateImpliedEndTags(), L.popTag(Xe), M.clearToMarker(), D = mx;
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
              return;
            case "table":
            case "tbody":
            case "tfoot":
            case "thead":
            case "tr":
              if (!L.inTableScope(Xe)) return;
              YT(Kg, L.inTableScope("td") ? "td" : "th"), D(et, Xe, tn, Ar);
              return;
          }
          break;
      }
      Ji(et, Xe, tn, Ar);
    }
    function Ih(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Z) {
            if (Xe = Xe.replace(lYn, ""), Xe.length === 0) return;
          }
          Je(Xe);
          return;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case -1:
          Ji(et, Xe, tn, Ar);
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "option":
              if (L.top instanceof hS.HTMLOptionElement) Ih(Kg, Xe);
              xt(Xe, tn);
              return;
            case "optgroup":
              if (L.top instanceof hS.HTMLOptionElement) Ih(Kg, "option");
              if (L.top instanceof hS.HTMLOptGroupElement) Ih(Kg, Xe);
              xt(Xe, tn);
              return;
            case "select":
              Ih(Kg, Xe);
              return;
            case "input":
            case "keygen":
            case "textarea":
              if (!L.inSelectScope("select")) return;
              Ih(Kg, "select"), D(et, Xe, tn, Ar);
              return;
            case "script":
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          switch (Xe) {
            case "optgroup":
              if (L.top instanceof hS.HTMLOptionElement && L.elements[L.elements.length - 2] instanceof hS.HTMLOptGroupElement) Ih(Kg, "option");
              if (L.top instanceof hS.HTMLOptGroupElement) L.pop();
              return;
            case "option":
              if (L.top instanceof hS.HTMLOptionElement) L.pop();
              return;
            case "select":
              if (!L.inSelectScope(Xe)) return;
              L.popTag(Xe), nn();
              return;
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
      }
    }
    function XT(et, Xe, tn, Ar) {
      switch (Xe) {
        case "caption":
        case "table":
        case "tbody":
        case "tfoot":
        case "thead":
        case "tr":
        case "td":
        case "th":
          switch (et) {
            case 2:
              XT(Kg, "select"), D(et, Xe, tn, Ar);
              return;
            case 3:
              if (L.inTableScope(Xe)) XT(Kg, "select"), D(et, Xe, tn, Ar);
              return;
          }
      }
      Ih(et, Xe, tn, Ar);
    }
    function Wn(et, Xe, tn, Ar) {
      function Yr(Wo) {
        D = Wo, O[O.length - 1] = D, D(et, Xe, tn, Ar);
      }
      switch (et) {
        case 1:
        case 4:
        case 5:
          Ji(et, Xe, tn, Ar);
          return;
        case -1:
          if (!L.contains("template")) Ne();else L.popTag("template"), M.clearToMarker(), O.pop(), nn(), D(et, Xe, tn, Ar);
          return;
        case 2:
          switch (Xe) {
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              Jm(et, Xe, tn, Ar);
              return;
            case "caption":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
              Yr(Sg);
              return;
            case "col":
              Yr(TE);
              return;
            case "tr":
              Yr(RA);
              return;
            case "td":
            case "th":
              Yr(mx);
              return;
          }
          Yr(Ji);
          return;
        case 3:
          switch (Xe) {
            case "template":
              Jm(et, Xe, tn, Ar);
              return;
            default:
              return;
          }
      }
    }
    function Cs(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (aYn.test(Xe)) break;
          Ji(et, Xe);
          return;
        case 4:
          L.elements[0]._appendChild(oe.createComment(Xe));
          return;
        case 5:
          return;
        case -1:
          Ne();
          return;
        case 2:
          if (Xe === "html") {
            Ji(et, Xe, tn, Ar);
            return;
          }
          break;
        case 3:
          if (Xe === "html") {
            if (N) return;
            D = Yc;
            return;
          }
          break;
      }
      D = Ji, D(et, Xe, tn, Ar);
    }
    function Ya(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Xe = Xe.replace(Kxo, ""), Xe.length > 0) Je(Xe);
          return;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case -1:
          Ne();
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "frameset":
              xt(Xe, tn);
              return;
            case "frame":
              xt(Xe, tn), L.pop();
              return;
            case "noframes":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          if (Xe === "frameset") {
            if (N && L.top instanceof hS.HTMLHtmlElement) return;
            if (L.pop(), !N && !(L.top instanceof hS.HTMLFrameSetElement)) D = Ki;
            return;
          }
          break;
      }
    }
    function Ki(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Xe = Xe.replace(Kxo, ""), Xe.length > 0) Je(Xe);
          return;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case -1:
          Ne();
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "noframes":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
        case 3:
          if (Xe === "html") {
            D = Yl;
            return;
          }
          break;
      }
    }
    function Yc(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (aYn.test(Xe)) break;
          Ji(et, Xe, tn, Ar);
          return;
        case 4:
          oe._appendChild(oe.createComment(Xe));
          return;
        case 5:
          Ji(et, Xe, tn, Ar);
          return;
        case -1:
          Ne();
          return;
        case 2:
          if (Xe === "html") {
            Ji(et, Xe, tn, Ar);
            return;
          }
          break;
      }
      D = Ji, D(et, Xe, tn, Ar);
    }
    function Yl(et, Xe, tn, Ar) {
      switch (et) {
        case 1:
          if (Xe = Xe.replace(Kxo, ""), Xe.length > 0) Ji(et, Xe, tn, Ar);
          return;
        case 4:
          oe._appendChild(oe.createComment(Xe));
          return;
        case 5:
          Ji(et, Xe, tn, Ar);
          return;
        case -1:
          Ne();
          return;
        case 2:
          switch (Xe) {
            case "html":
              Ji(et, Xe, tn, Ar);
              return;
            case "noframes":
              Jm(et, Xe, tn, Ar);
              return;
          }
          break;
      }
    }
    function dc(et, Xe, tn, Ar) {
      function Yr(Mc) {
        for (var Fd = 0, cm = Mc.length; Fd < cm; Fd++) switch (Mc[Fd][0]) {
          case "color":
          case "face":
          case "size":
            return !0;
        }
        return !1;
      }
      var Wo;
      switch (et) {
        case 1:
          if (W && Wcf.test(Xe)) W = !1;
          if (Z) Xe = Xe.replace(lYn, "\uFFFD");
          Je(Xe);
          return;
        case 4:
          ct(Xe);
          return;
        case 5:
          return;
        case 2:
          switch (Xe) {
            case "font":
              if (!Yr(tn)) break;
            case "b":
            case "big":
            case "blockquote":
            case "body":
            case "br":
            case "center":
            case "code":
            case "dd":
            case "div":
            case "dl":
            case "dt":
            case "em":
            case "embed":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
            case "head":
            case "hr":
            case "i":
            case "img":
            case "li":
            case "listing":
            case "menu":
            case "meta":
            case "nobr":
            case "ol":
            case "p":
            case "pre":
            case "ruby":
            case "s":
            case "small":
            case "span":
            case "strong":
            case "strike":
            case "sub":
            case "sup":
            case "table":
            case "tt":
            case "u":
            case "ul":
            case "var":
              if (N) break;
              do L.pop(), Wo = L.top; while (Wo.namespaceURI !== nd.HTML && !ppl(Wo) && !fpl(Wo));
              Et(et, Xe, tn, Ar);
              return;
          }
          if (Wo = L.elements.length === 1 && N ? t : L.top, Wo.namespaceURI === nd.MATHML) gpl(tn);else if (Wo.namespaceURI === nd.SVG) Xe = Vcf(Xe), mpl(tn);
          if (Yxo(tn), jt(Xe, tn, Wo.namespaceURI), Ar) {
            if (Xe === "script" && Wo.namespaceURI === nd.SVG) ;
            L.pop();
          }
          return;
        case 3:
          if (Wo = L.top, Xe === "script" && Wo.namespaceURI === nd.SVG && Wo.localName === "script") L.pop();else {
            var Ri = L.elements.length - 1,
              qa = L.elements[Ri];
            for (;;) {
              if (qa.localName.toLowerCase() === Xe) {
                L.popElement(qa);
                break;
              }
              if (qa = L.elements[--Ri], qa.namespaceURI !== nd.HTML) continue;
              D(et, Xe, tn, Ar);
              break;
            }
          }
          return;
      }
    }
    return ne.testTokenizer = function (et, Xe, tn, Ar) {
      var Yr = [];
      switch (Xe) {
        case "PCDATA state":
          f = Tt;
          break;
        case "RCDATA state":
          f = un;
          break;
        case "RAWTEXT state":
          f = ze;
          break;
        case "PLAINTEXT state":
          f = Qt;
          break;
      }
      if (tn) y = tn;
      if (Et = function (Ri, qa, Mc, Fd) {
        switch (Ie(), Ri) {
          case 1:
            if (Yr.length > 0 && Yr[Yr.length - 1][0] === "Character") Yr[Yr.length - 1][1] += qa;else Yr.push(["Character", qa]);
            break;
          case 4:
            Yr.push(["Comment", qa]);
            break;
          case 5:
            Yr.push(["DOCTYPE", qa, Mc === void 0 ? null : Mc, Fd === void 0 ? null : Fd, !V]);
            break;
          case 2:
            var cm = Object.create(null);
            for (var Qm = 0; Qm < Mc.length; Qm++) {
              var Jk = Mc[Qm];
              if (Jk.length === 1) cm[Jk[0]] = "";else cm[Jk[0]] = Jk[1];
            }
            var JT = ["StartTag", qa, cm];
            if (Fd) JT.push(!0);
            Yr.push(JT);
            break;
          case 3:
            Yr.push(["EndTag", qa]);
            break;
          case -1:
            break;
        }
      }, !Ar) this.parse(et, !0);else {
        for (var Wo = 0; Wo < et.length; Wo++) this.parse(et[Wo]);
        this.parse("", !0);
      }
      return Yr;
    }, ne;
  }
});