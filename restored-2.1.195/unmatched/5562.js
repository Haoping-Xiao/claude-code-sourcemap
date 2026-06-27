// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SAc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SAc = E(() => {
  Ye();
  uo();
  hYt();
  i6e();
  Ko();
  lEe();
  _Ac = R(lt(), 1), Bme = R(se(), 1);
});
function EAc(e, t) {
  let n = otn.useRef(!1),
    r = otn.useRef(null);
  otn.useEffect(() => {
    let o = p5(e);
    if (r.current !== (o ?? null)) n.current = !1, r.current = o || null, t({
      lineCount: 0,
      lineStart: void 0,
      text: void 0,
      filePath: void 0
    });
    if (n.current || !o) return;
    let s = i => {
      if (i.selection?.start && i.selection?.end) {
        let {
            start: a,
            end: l
          } = i.selection,
          c = l.line - a.line + 1;
        if (l.character === 0) c--;
        let u = {
          lineCount: c,
          lineStart: a.line + 1,
          text: i.text,
          filePath: i.filePath
        };
        t(u);
      }
    };
    o.client.setNotificationHandler(_ym(), i => {
      if (r.current !== o) return;
      try {
        let a = i.params;
        if (a.selection && a.selection.start && a.selection.end) s(a);else if (a.text !== void 0) s({
          selection: null,
          text: a.text,
          filePath: a.filePath
        });
      } catch (a) {
        ke(a);
      }
    }), n.current = !0;
  }, [e, t]);
}
var otn, _ym;