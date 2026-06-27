// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oct
// matched 2.1.88 source: node_modules/marked/lib/marked.esm.js
// class=partial  jaccard=0.1177  score=0.5246  fileCov=0.1317
// note: low-confidence suggestion: node_modules/marked/lib/marked.esm.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Oct = E(() => {
  n5e = gso();
  sjt = {
    exec: () => null
  };
  _4 = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: e => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
  }, vsp = /^(?:[ \t]*(?:\n|$))+/, wsp = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Csp = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ljt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Isp = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Joa = /(?:[*+-]|\d{1,9}[.)])/, Qoa = rE(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Joa).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), hso = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xsp = /^[^\n]+/, yso = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ksp = rE(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", yso).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Rsp = rE(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Joa).getRegex(), _so = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Lsp = rE("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", _so).replace("tag", ZOn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Zoa = rE(hso).replace("hr", ljt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ZOn).getRegex(), Dsp = rE(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Zoa).getRegex(), bso = {
    blockquote: Dsp,
    code: wsp,
    def: ksp,
    fences: Csp,
    heading: Isp,
    hr: ljt,
    html: Lsp,
    lheading: Qoa,
    list: Rsp,
    newline: vsp,
    paragraph: Zoa,
    table: sjt,
    text: xsp
  }, qoa = rE("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ljt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ZOn).getRegex(), Psp = {
    ...bso,
    table: qoa,
    paragraph: rE(hso).replace("hr", ljt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", qoa).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ZOn).getRegex()
  }, Msp = {
    ...bso,
    html: rE(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _so).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: sjt,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: rE(hso).replace("hr", ljt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Qoa).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  }, $sp = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Osp = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, esa = /^( {2,}|\\)\n(?!\s*$)/, Nsp = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, e1n = /[\p{P}\p{S}]/u, Sso = /[\s\p{P}\p{S}]/u, tsa = /[^\s\p{P}\p{S}]/u, Bsp = rE(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Sso).getRegex(), nsa = /(?!~)[\p{P}\p{S}]/u, Usp = /(?!~)[\s\p{P}\p{S}]/u, Fsp = /(?:[^\s\p{P}\p{S}]|~)/u, jsp = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, rsa = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Gsp = rE(rsa, "u").replace(/punct/g, e1n).getRegex(), Wsp = rE(rsa, "u").replace(/punct/g, nsa).getRegex(), qsp = rE(osa, "gu").replace(/notPunctSpace/g, tsa).replace(/punctSpace/g, Sso).replace(/punct/g, e1n).getRegex(), Vsp = rE(osa, "gu").replace(/notPunctSpace/g, Fsp).replace(/punctSpace/g, Usp).replace(/punct/g, nsa).getRegex(), zsp = rE("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, tsa).replace(/punctSpace/g, Sso).replace(/punct/g, e1n).getRegex(), Ksp = rE(/\\(punct)/, "gu").replace(/punct/g, e1n).getRegex(), Ysp = rE(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xsp = rE(_so).replace("(?:-->|$)", "-->").getRegex(), Jsp = rE("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xsp).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), QOn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Qsp = rE(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", QOn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ssa = rE(/^!?\[(label)\]\[(ref)\]/).replace("label", QOn).replace("ref", yso).getRegex(), isa = rE(/^!?\[(ref)\](?:\[\])?/).replace("ref", yso).getRegex(), Zsp = rE("reflink|nolink(?!\\()", "g").replace("reflink", ssa).replace("nolink", isa).getRegex(), Eso = {
    _backpedal: sjt,
    anyPunctuation: Ksp,
    autolink: Ysp,
    blockSkip: jsp,
    br: esa,
    code: Osp,
    del: sjt,
    emStrongLDelim: Gsp,
    emStrongRDelimAst: qsp,
    emStrongRDelimUnd: zsp,
    escape: $sp,
    link: Qsp,
    nolink: isa,
    punctuation: Bsp,
    reflink: ssa,
    reflinkSearch: Zsp,
    tag: Jsp,
    text: Nsp,
    url: sjt
  }, eip = {
    ...Eso,
    link: rE(/^!?\[(label)\]\((.*?)\)/).replace("label", QOn).getRegex(),
    reflink: rE(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", QOn).getRegex()
  }, mso = {
    ...Eso,
    emStrongRDelimAst: Vsp,
    emStrongLDelim: Wsp,
    url: rE(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }, tip = {
    ...mso,
    br: rE(esa).replace("{2,}", "*").getRegex(),
    text: rE(mso.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  }, JOn = {
    normal: bso,
    gfm: Psp,
    pedantic: Msp
  }, rjt = {
    normal: Eso,
    gfm: mso,
    breaks: tip,
    pedantic: eip
  }, nip = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  ijt = class ijt {
    options;
    block;
    constructor(e) {
      this.options = e || n5e;
    }
    static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    provideLexer() {
      return this.block ? b4.lex : b4.lexInline;
    }
    provideParser() {
      return this.block ? MX.parse : MX.parseInline;
    }
  };
  t5e = new n1n();
  ug.options = ug.setOptions = function (e) {
    return t5e.setOptions(e), ug.defaults = t5e.defaults, Xoa(ug.defaults), ug;
  };
  ug.getDefaults = gso;
  ug.defaults = n5e;
  ug.use = function (...e) {
    return t5e.use(...e), ug.defaults = t5e.defaults, Xoa(ug.defaults), ug;
  };
  ug.walkTokens = function (e, t) {
    return t5e.walkTokens(e, t);
  };
  ug.parseInline = t5e.parseInline;
  ug.Parser = MX;
  ug.parser = MX.parse;
  ug.Renderer = ajt;
  ug.TextRenderer = t1n;
  ug.Lexer = b4;
  ug.lexer = b4.lex;
  ug.Tokenizer = e5e;
  ug.Hooks = ijt;
  ug.parse = ug;
  Uxy = ug.options, Fxy = ug.setOptions, jxy = ug.use, Gxy = ug.walkTokens, Wxy = ug.parseInline, qxy = MX.parse, Vxy = b4.lex;
});