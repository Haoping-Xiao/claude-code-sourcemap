// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m5l
// matched 2.1.88 source: src/services/compact/grouping.ts
// class=modified  jaccard=0.4919  score=1  fileCov=0.4919
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var m5l = E(() => {
  Ye();
  _i();
  Tc();
  GXt();
  es();
  x8t();
  ZWl();
  r5l();
  er();
  Fh();
  nne();
  HUt();
  u5l();
  hAt();
  lEe();
  KKe();
  wr();
  uo();
  Cp();
  HN();
  Ao();
  oo();
  ((d5l = R(lt(), 1)), (p5l = R(rt(), 1)), (Qg = R(se(), 1)));
});
function h5l(e) {
  let t = g5l.c(5),
    { message: n, isTranscriptMode: r } = e;
  if (!(r && n.type === "assistant" && n.message.model && n.message.content.some(n4f))) return null;
  let s = rn(n.message.model) + 8,
    i;
  if (t[0] !== n.message.model)
    ((i = zFo.jsx(w, {
      dimColor: true,
      children: n.message.model,
    })),
      (t[0] = n.message.model),
      (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] !== s || t[3] !== i)
    ((a = zFo.jsx(U, {
      minWidth: s,
      children: i,
    })),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  return a;
}
function n4f(e) {
  return e.type === "text";
}
var g5l, zFo;
