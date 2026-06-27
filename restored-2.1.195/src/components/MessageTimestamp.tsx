// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y5l
// matched 2.1.88 source: src/components/MessageTimestamp.tsx
// class=modified  jaccard=0.4456  score=0.6357  fileCov=0.5985
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module y5l] deps: marked/lib/marked.esm.js, hooks/useTerminalSize.ts
((g5l = R(lt(), 1)), (zFo = R(se(), 1)));
function MessageTimestamp(t0) {
  let t = _5l.c(10),
    { message: message, isTranscriptMode: r, showMessageTimestamps: o } = t0,
    s = o === void 0 ? false : o;
  if (
    !(
      message.timestamp &&
      message.type === "assistant" &&
      (s || (r && message.message.content.some(r4f)))
    )
  )
    return null;
  let a, l, c;
  if (t[0] !== message.timestamp)
    ((l = new Date(message.timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })),
      (a = U),
      (c = rn(l)),
      (t[0] = message.timestamp),
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
