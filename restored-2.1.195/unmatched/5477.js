// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v_c
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var v_c = E(() => {
  Tc();
  Ye();
  Mg();
  NOe();
  H_c = R(lt(), 1), BTt = R(se(), 1);
  T_c = Nfm;
});
function C_c() {
  let [e, t] = Cdr.useState(null);
  return Cdr.useEffect(() => {
    if (!Js() || vl()) return;
    let n = _c(XE()),
      r,
      o = async () => {
        let i = (await zi(n))?.children?.find(l => l.kind !== "frame"),
          a = i ? Number(i.id) : NaN;
        if (!i || !Number.isFinite(a)) return;
        t(l => l?.number === a && l.url === i.href ? l : {
          number: a,
          url: i.href
        });
      };
    try {
      r = w_c.watch(n, (s, i) => {
        if (i && !i.startsWith("state.json")) return;
        o();
      }), r.on("error", s => T(`[useBgSessionPr] watcher error: ${be(s)}`, {
        level: "warn"
      })), r.unref();
    } catch (s) {
      T(`[useBgSessionPr] watch skipped: ${be(s)}`);
    }
    return o(), () => r?.close();
  }, []), e;
}
var w_c, Cdr;