// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _je
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=partial  jaccard=0.1685  score=1  fileCov=0.1685
// note: low-confidence suggestion: node_modules/@smithy/signature-v4/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _je = E(() => {
  Qjr = "X-Amz-Date".toLowerCase(), yci = ["authorization", Qjr, "date"], _ci = "X-Amz-Signature".toLowerCase(), bci = "X-Amz-Security-Token".toLowerCase(), Sci = {
    authorization: !0,
    "cache-control": !0,
    connection: !0,
    expect: !0,
    from: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    "user-agent": !0,
    "x-amzn-trace-id": !0
  }, Eci = /^proxy-/, Aci = /^sec-/;
});
var SHn,
  e4r,
  EHn = (e, t, n) => `${e}/${t}/${n}/${Zjr}`,
  Ici = async (e, t, n, r, o) => {
    let s = await Cci(e, t.secretAccessKey, t.accessKeyId),
      i = `${n}:${r}:${o}:${gte(s)}:${t.sessionToken}`;
    if (i in SHn) return SHn[i];
    e4r.push(i);
    while (e4r.length > vci) delete SHn[e4r.shift()];
    let a = `AWS4${t.secretAccessKey}`;
    for (let l of [n, r, o, Zjr]) a = await Cci(e, a, l);
    return SHn[i] = a;
  },
  Cci = (e, t, n) => {
    let r = new e(t);
    return r.update(lxe(n)), r.digest();
  };