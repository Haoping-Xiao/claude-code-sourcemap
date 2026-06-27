// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MDc
// matched 2.1.88 source: src/hooks/notifs/useIDEStatusIndicator.tsx
// class=modified  jaccard=0.4395  score=0.9056  fileCov=0.4606
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MDc] deps: ft, Zf, uo, fut, vn, Eue
$tn = R(rt(), 1);
function useIDEStatusIndicator(e) {
  let t = $Dc.c(20),
    { ideSelection: n, mcpClients: r, ideInstallationStatus: o } = e,
    { addNotification: s, removeNotification: i } = Li(),
    { status: a, ideName: l } = xdr(r),
    c;
  if (t[0] !== o) ((c = o ? kre(o?.ideType) : false), (t[0] = o), (t[1] = c));
  else c = t[1];
  let u = c,
    d = o?.error || u,
    p = a === "connected" && n?.source !== "diff" && (n?.filePath || (n?.text && n.lineCount > 0)),
    f = a === "connected" && !p,
    m = d && !u && !f && !p,
    g = d && u && !f && !p,
    h,
    y;
  if (t[2] !== s || t[3] !== l || t[4] !== a || t[5] !== i || t[6] !== m || t[7] !== g)
    ((h = () => {
      if (vl()) return;
      if (m || g || a !== "disconnected" || !l) {
        i("ide-status-disconnected");
        return;
      }
      s({
        key: "ide-status-disconnected",
        kind: "warning",
        text: `${l} disconnected`,
        color: "error",
        priority: "medium",
      });
    }),
      (y = [s, i, a, l, m, g]),
      (t[2] = s),
      (t[3] = l),
      (t[4] = a),
      (t[5] = i),
      (t[6] = m),
      (t[7] = g),
      (t[8] = h),
      (t[9] = y));
  else ((h = t[8]), (y = t[9]));
  qfr.useEffect(h, y);
  let b, _;
  if (t[10] !== s || t[11] !== i || t[12] !== g)
    ((b = () => {
      if (vl()) return;
      if (!g) {
        i("ide-status-jetbrains-disconnected");
        return;
      }
      s({
        key: "ide-status-jetbrains-disconnected",
        kind: "warning",
        text: "IDE plugin not connected \xB7 /status for info",
        priority: "medium",
      });
    }),
      (_ = [s, i, g]),
      (t[10] = s),
      (t[11] = i),
      (t[12] = g),
      (t[13] = b),
      (t[14] = _));
  else ((b = t[13]), (_ = t[14]));
  qfr.useEffect(b, _);
  let S, A;
  if (t[15] !== s || t[16] !== i || t[17] !== m)
    ((S = () => {
      if (vl()) return;
      if (!m) {
        i("ide-status-install-error");
        return;
      }
      s({
        key: "ide-status-install-error",
        kind: "warning",
        text: "IDE extension install failed (see /status for info)",
        color: "error",
        priority: "medium",
      });
    }),
      (A = [s, i, m]),
      (t[15] = s),
      (t[16] = i),
      (t[17] = m),
      (t[18] = S),
      (t[19] = A));
  else ((S = t[18]), (A = t[19]));
  qfr.useEffect(S, A);
}
var $Dc, qfr;
