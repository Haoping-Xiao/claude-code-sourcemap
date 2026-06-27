// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wba
// matched 2.1.88 source: src/native-ts/color-diff/index.ts
// class=modified (alt of src/native-ts/color-diff/index.ts)  jaccard=0.2635  score=0.4664  fileCov=0.3773
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Wba = E(() => {
  iu();
  b5e();
  eco();
  Tc();
  vn();
  sr();
  fBn = require("path");
  xSe = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };
  nco = [0, 95, 135, 175, 215, 255];
  ((Cba = new Map([
    ["keyword", Gl(249, 38, 114)],
    ["_storage", Gl(102, 217, 239)],
    ["built_in", Gl(166, 226, 46)],
    ["type", Gl(166, 226, 46)],
    ["literal", Gl(190, 132, 255)],
    ["number", Gl(190, 132, 255)],
    ["string", Gl(230, 219, 116)],
    ["title", Gl(166, 226, 46)],
    ["title.function", Gl(166, 226, 46)],
    ["title.class", Gl(166, 226, 46)],
    ["title.class.inherited", Gl(166, 226, 46)],
    ["params", Gl(253, 151, 31)],
    ["comment", Gl(117, 113, 94)],
    ["meta", Gl(117, 113, 94)],
    ["attr", Gl(166, 226, 46)],
    ["attribute", Gl(166, 226, 46)],
    ["variable", Gl(255, 255, 255)],
    ["variable.language", Gl(255, 255, 255)],
    ["property", Gl(255, 255, 255)],
    ["operator", Gl(249, 38, 114)],
    ["punctuation", Gl(248, 248, 242)],
    ["symbol", Gl(190, 132, 255)],
    ["regexp", Gl(230, 219, 116)],
    ["subst", Gl(248, 248, 242)],
  ])),
    (Iba = new Map([
      ["keyword", Gl(167, 29, 93)],
      ["_storage", Gl(167, 29, 93)],
      ["built_in", Gl(0, 134, 179)],
      ["type", Gl(0, 134, 179)],
      ["literal", Gl(0, 134, 179)],
      ["number", Gl(0, 134, 179)],
      ["string", Gl(24, 54, 145)],
      ["title", Gl(121, 93, 163)],
      ["title.function", Gl(121, 93, 163)],
      ["title.class", Gl(0, 0, 0)],
      ["title.class.inherited", Gl(0, 0, 0)],
      ["params", Gl(0, 134, 179)],
      ["comment", Gl(150, 152, 150)],
      ["meta", Gl(150, 152, 150)],
      ["attr", Gl(0, 134, 179)],
      ["attribute", Gl(0, 134, 179)],
      ["variable", Gl(0, 134, 179)],
      ["variable.language", Gl(0, 134, 179)],
      ["property", Gl(0, 134, 179)],
      ["operator", Gl(167, 29, 93)],
      ["punctuation", Gl(51, 51, 51)],
      ["symbol", Gl(0, 134, 179)],
      ["regexp", Gl(24, 54, 145)],
      ["subst", Gl(51, 51, 51)],
    ])),
    (jyp = new Set([
      "const",
      "let",
      "var",
      "function",
      "class",
      "type",
      "interface",
      "enum",
      "namespace",
      "module",
      "def",
      "fn",
      "func",
      "struct",
      "trait",
      "impl",
    ])),
    (Gyp = new Map([
      ["keyword", _L(13)],
      ["_storage", _L(14)],
      ["built_in", _L(14)],
      ["type", _L(14)],
      ["literal", _L(12)],
      ["number", _L(12)],
      ["string", _L(10)],
      ["title", _L(11)],
      ["title.function", _L(11)],
      ["title.class", _L(11)],
      ["comment", _L(8)],
      ["meta", _L(8)],
    ])));
  xba = new Map([
    ["Dockerfile", "dockerfile"],
    ["Makefile", "makefile"],
    ["Rakefile", "ruby"],
    ["Gemfile", "ruby"],
    ["CMakeLists", "cmake"],
  ]);
});
function A4t() {
  if (ml(process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) return "env";
  return null;
}
function qba() {
  return A4t() === null ? oco : null;
}
function Vba() {
  return A4t() === null ? sco : null;
}
function zba(e) {
  return A4t() === null ? Gba(e) : null;
}
