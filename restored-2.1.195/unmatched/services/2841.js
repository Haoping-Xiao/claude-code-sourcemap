// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aao
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aao = E(() => {
  Ula = class Ula extends _Se {
    constructor() {
      super(...arguments);
      this.tokenize = tcp;
    }
    equals(e, t, n) {
      if (n.ignoreWhitespace) {
        if (!n.newlineIsToken || !e.includes(`
`)) e = e.trim();
        if (!n.newlineIsToken || !t.includes(`
`)) t = t.trim();
      } else if (n.ignoreNewlineAtEof && !n.newlineIsToken) {
        if (e.endsWith(`
`)) e = e.slice(0, -1);
        if (t.endsWith(`
`)) t = t.slice(0, -1);
      }
      return super.equals(e, t, n);
    }
  };
  Fla = new Ula();
});
function lao(e, t, n) {
  return Gla.diff(e, t, n);
}
var jla, Gla;