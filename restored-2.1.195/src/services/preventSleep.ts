// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wmc
// matched 2.1.88 source: src/services/preventSleep.ts
// class=modified  jaccard=0.166  score=0.3027  fileCov=0.2688
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wmc = E(() => {
  Ye();
  Un();
  er();
  fn();
  es();
  mE();
  vi();
  ((Hmc = R(lt(), 1)), (STt = R(se(), 1)));
});
function xmc() {
  if ((r7e++, r7e === 1)) {
    if (zse !== null) (clearTimeout(zse), (zse = null));
    (Dmc(), Ocm());
  }
}
function kmc() {
  if (r7e > 0) r7e--;
  if (r7e === 0 && zse === null)
    ((zse = setTimeout(() => {
      ((zse = null), Lmc(), H8o());
    }, Mcm)),
      zse.unref());
}
function $cm() {
  if (((r7e = 0), zse !== null)) (clearTimeout(zse), (zse = null));
  (Lmc(), H8o());
}
function Rmc() {
  let e = String(Dcm);
  if (Vt() === "macos") return ["caffeinate", ["-i", "-t", e]];
  return null;
}
function Ocm() {
  if (Rmc() === null) return;
  if (ETt !== null) return;
  ((ETt = setInterval(() => {
    if (r7e > 0 || zse !== null)
      (T("Restarting sleep inhibitor to maintain prevention"), H8o(), Dmc());
  }, Pcm)),
    ETt.unref());
}
function Lmc() {
  if (ETt !== null) (clearInterval(ETt), (ETt = null));
}
function Dmc() {
  let e = Rmc();
  if (e === null) return;
  if (iV !== null) return;
  if (!Cmc)
    ((Cmc = true),
      Ci(async () => {
        $cm();
      }));
  try {
    let [t, n] = e;
    ((iV = Imc.spawn(t, n, {
      stdio: "ignore",
      windowsHide: true,
    })),
      iV.unref());
    let r = iV;
    (iV.on("error", (o) => {
      if ((T(`sleep inhibitor spawn error: ${o.message}`), iV === r)) iV = null;
    }),
      iV.on("exit", () => {
        if (iV === r) iV = null;
      }),
      T(`Started ${t} to prevent sleep`));
  } catch {
    iV = null;
  }
}
function H8o() {
  if (iV !== null) {
    let e = iV;
    iV = null;
    try {
      (e.kill("SIGKILL"), T("Stopped sleep inhibitor, allowing sleep"));
    } catch {}
  }
}
var Imc,
  Dcm = 300,
  Pcm = 240000,
  Mcm = 30000,
  iV = null,
  ETt = null,
  zse = null,
  r7e = 0,
  Cmc = false;
