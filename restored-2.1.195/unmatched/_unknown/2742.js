// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fna
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.004  score=0.102  fileCov=0.0042
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.004); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fna = E(() => {
  Qne();
  SX();
  _ue();
  nct();
  ZFt();
  ERe();
  TWe();
  xWe();
  sna = new Set([32, 9, 10, 11, 12, 13, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288]);
  Utp = new Map([[0, "\\0"], [7, "\\a"], [8, "\\b"], [9, "\\t"], [10, "\\n"], [11, "\\v"], [12, "\\f"], [13, "\\r"], [34, "\\\""], [92, "\\\\"]]);
  ({
    STRING: Um,
    INT: HX,
    DYN: pna
  } = Pu), Xtp = $8(pna), K$n = $8(pna), yro = [Do("strings.quote", [Um], Um, Ftp), Kh("charAt", Um, [HX], Um, $tp), Kh("indexOf", Um, [Um], HX, ena), Kh("indexOf", Um, [Um, HX], HX, ena), Kh("lastIndexOf", Um, [Um], HX, tna), Kh("lastIndexOf", Um, [Um, HX], HX, tna), Kh("lowerAscii", Um, [], Um, Otp), Kh("upperAscii", Um, [], Um, Ntp), Kh("replace", Um, [Um, Um], Um, nna), Kh("replace", Um, [Um, Um, HX], Um, nna), Kh("split", Um, [Um], K$n, rna), Kh("split", Um, [Um, HX], K$n, rna), Kh("substring", Um, [HX], Um, ona), Kh("substring", Um, [HX, HX], Um, ona), Kh("trim", Um, [], Um, Btp), Kh("join", K$n, [], Um, ina), Kh("join", K$n, [Um], Um, ina), Kh("format", Um, [Xtp], Um, Ktp)];
});