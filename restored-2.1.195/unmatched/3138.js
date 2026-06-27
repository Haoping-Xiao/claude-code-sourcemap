// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HEa
// class=new  (no 2.1.88 match)
// note: 0 renamed
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
        let m = e.default !== !1;
        if (/^(y|yes)/i.test(s)) m = !0;else if (/^(n|no)/i.test(s)) m = !1;
        i(n(m)), o("done"), t(m);
      } else i(f.line);
    });
    let c = s,
      u = "";
    if (r === "done") c = a.style.answer(s);else u = ` ${a.style.defaultAnswer(e.default === !1 ? "y/N" : "Y/n")}`;
    let d = a.style.message(e.message, r);
    return `${l} ${d}${u} ${c}`;
  });
});
var Oy;