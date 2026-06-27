// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CTt
// matched 2.1.88 source: src/hooks/useIdeAtMentioned.ts
// class=modified  jaccard=0.2713  score=0.6113  fileCov=0.3279
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CTt] deps: bm
Zgc = R(rt(), 1);
function Uur(e, t) {
  let n = wen.useRef(void 0),
    r = wen.useRef(t);
  ((r.current = t),
    wen.useEffect(() => {
      let o = p5(e);
      if (n.current !== o) n.current = o;
      if (o)
        o.client.setNotificationHandler(sdm(), (s) => {
          if (n.current !== o) return;
          try {
            let i = s.params,
              a = i.lineStart !== void 0 ? i.lineStart + 1 : void 0,
              l = i.lineEnd !== void 0 ? i.lineEnd + 1 : void 0;
            (r.current({
              filePath: i.filePath,
              lineStart: a,
              lineEnd: l,
            }),
              xe("ide_at_mention"));
          } catch (i) {
            (ke(i), Le("ide_at_mention", "ide_at_mention_failed"));
          }
        });
    }, [e]));
}
function Fur(e, t) {
  let n = ehc.default.relative($t(), e.filePath),
    r;
  if (e.lineStart && e.lineEnd)
    r =
      e.lineStart === e.lineEnd ? `@${n}#L${e.lineStart} ` : `@${n}#L${e.lineStart}-${e.lineEnd} `;
  else r = `@${n} `;
  if (t !== void 0 && !/\s/.test(t)) r = ` ${r}`;
  return r;
}
var ehc,
  wen,
  odm = "at_mentioned",
  sdm;
