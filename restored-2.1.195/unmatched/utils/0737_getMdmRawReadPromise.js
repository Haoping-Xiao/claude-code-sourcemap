// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ICe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var ICe = E(() => {
  xpn();
  kvs();
  ORt();
  je();
  Mm();
  fn();
  At();
  PB();
  ys();
  Rd();
  Is();
  Jt();
  vf();
  hY();
  mCe();
  Sx();
  lj();
  oLt();
  qO = require("path");
});
var Qws = {};
_t(Qws, {
  startMdmRawRead: () => startMdmRawRead,
  getMdmRawReadPromise: () => getMdmRawReadPromise,
  fireRawRead: () => fireRawRead
});
function Xws(e, t) {
  return new Promise(n => {
    try {
      Jws.execFile(e, t, {
        encoding: "utf-8",
        timeout: bvs,
        windowsHide: !0
      }, (r, o) => {
        n({
          stdout: o ?? "",
          code: r ? 1 : 0
        });
      });
    } catch {
      n({
        stdout: "",
        code: 1
      });
    }
  });
}
function fireRawRead() {
  return (async () => {
    if (MRt()) {
      let [e, t] = await Promise.all([Xws(CRr, ["query", Ifn, "/v", vet]), Xws(CRr, ["query", xfn, "/v", vet])]);
      return {
        plistStdouts: null,
        hklmStdout: e.code === 0 ? e.stdout : null,
        hkcuStdout: t.code === 0 ? t.stdout : null
      };
    }
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null
    };
  })();
}
function startMdmRawRead() {
  if (ELr) return;
  ELr = fireRawRead();
}
function getMdmRawReadPromise() {
  return ELr;
}
var Jws,
  ELr = null;