// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y5l
// matched 2.1.88 source: src/components/MessageTimestamp.tsx
// class=modified  jaccard=0.4047  score=1  fileCov=0.4047
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var y5l = E(() => {
  Tc();
  Ye();
  ((g5l = R(lt(), 1)), (zFo = R(se(), 1)));
});
function b5l(e) {
  let t = _5l.c(10),
    { message: n, isTranscriptMode: r, showMessageTimestamps: o } = e,
    s = o === void 0 ? false : o;
  if (!(n.timestamp && n.type === "assistant" && (s || (r && n.message.content.some(r4f)))))
    return null;
  let a, l, c;
  if (t[0] !== n.timestamp)
    ((l = new Date(n.timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })),
      (a = U),
      (c = rn(l)),
      (t[0] = n.timestamp),
      (t[1] = a),
      (t[2] = l),
      (t[3] = c));
  else ((a = t[1]), (l = t[2]), (c = t[3]));
  let u;
  if (t[4] !== l)
    ((u = KFo.jsx(w, {
      dimColor: true,
      children: l,
    })),
      (t[4] = l),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] !== a || t[7] !== c || t[8] !== u)
    ((d = KFo.jsx(a, {
      minWidth: c,
      children: u,
    })),
      (t[6] = a),
      (t[7] = c),
      (t[8] = u),
      (t[9] = d));
  else d = t[9];
  return d;
}
function r4f(e) {
  return e.type === "text";
}
var _5l, KFo;
