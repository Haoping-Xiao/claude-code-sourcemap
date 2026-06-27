// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xsi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xsi = Q((Bsh, rxe) => {
  var lrt = vsi(),
    {
      toPromise: JAn,
      toSync: QAn,
      toSyncOptions: hjr
    } = Csi();
  async function Isi(e, t) {
    let n = await JAn(lrt.lock)(e, t);
    return JAn(n);
  }
  function nfd(e, t) {
    let n = QAn(lrt.lock)(e, hjr(t));
    return QAn(n);
  }
  function rfd(e, t) {
    return JAn(lrt.unlock)(e, t);
  }
  function ofd(e, t) {
    return QAn(lrt.unlock)(e, hjr(t));
  }
  function sfd(e, t) {
    return JAn(lrt.check)(e, t);
  }
  function ifd(e, t) {
    return QAn(lrt.check)(e, hjr(t));
  }
  rxe.exports = Isi;
  rxe.exports.lock = Isi;
  rxe.exports.unlock = rfd;
  rxe.exports.lockSync = nfd;
  rxe.exports.unlockSync = ofd;
  rxe.exports.check = sfd;
  rxe.exports.checkSync = ifd;
});
function _jr() {
  if (!yjr) yjr = xsi();
  return yjr;
}
async function Ay(e, t) {
  let n = await _jr().lock(e, t);
  return Object.assign(n, {
    [Symbol.asyncDispose]: n
  });
}
function ksi(e, t) {
  let n = _jr().lockSync(e, t);
  return Object.assign(n, {
    [Symbol.dispose]: n
  });
}
function Rsi(e, t) {
  return _jr().check(e, t);
}
var yjr;
async function afd(e) {
  if (Lsi.getStore()) return e();
  let t = Dsi,
    n = XY();
  Dsi = n.promise;
  try {
    await t;
    let r = BY();
    await qs().mkdir(r);
    let o = await Ay(Msi.join(r, ".storage-write"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: s => T(`[secureStorage] write lock compromised: ${be(s)}`, {
        level: "warn"
      })
    });
    try {
      return await Lsi.run(!0, e);
    } finally {
      await o().catch(s => T(`[secureStorage] write lock release failed: ${be(s)}`, {
        level: "warn"
      }));
    }
  } finally {
    n.resolve();
  }
}
function oMt(e, t) {
  return afd(async () => {
    e.invalidateCache?.();
    let n = await (e.readAsyncStrict?.() ?? e.readAsync());
    if (n === UAn) return {
      success: !1,
      transient: !0
    };
    let r = n ?? {},
      o = t(r);
    return o === r ? {
      success: !0
    } : await e.update(o);
  });
}
var Psi, Msi, Lsi, Dsi;