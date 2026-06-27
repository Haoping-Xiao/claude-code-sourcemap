// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o6s
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
// class=new  jaccard=0.0226  score=1  fileCov=0.0226
// note: nearest: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js (0.0226); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var o6s = E(() => {
  lBr();
});
var s6s = e => {
    let {
      signer: t
    } = e;
    return Object.assign(e, {
      signer: async n => {
        let r = await t(n);
        if (hod(r)) return new cBr({
          signer: r
        });
        throw Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
      }
    });
  },
  hod = e => !!e;