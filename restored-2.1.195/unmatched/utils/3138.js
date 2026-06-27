// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HEa
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HEa = E(() => {
  DBn();
  sE = G5e((e, t) => {
    let {
        transformer: n = p => p ? "yes" : "no"
      } = e,
      [r, o] = Q1("idle"),
      [s, i] = Q1(""),
      a = RSe(e.theme),
      l = F5e({
        status: r,
        theme: a
      });
    j5e((p, f) => {
      if (Yut(p)) {
        let m = e.default !== false;
        if (/^(y|yes)/i.test(s)) m = true;else if (/^(n|no)/i.test(s)) m = false;
        i(n(m)), o("done"), t(m);
      } else i(f.line);
    });
    let c = s,
      u = "";
    if (r === "done") c = a.style.answer(s);else u = ` ${a.style.defaultAnswer(e.default === false ? "y/N" : "Y/n")}`;
    let d = a.style.message(e.message, r);
    return `${l} ${d}${u} ${c}`;
  });
});
var Oy;