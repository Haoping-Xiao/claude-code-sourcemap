// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t4r
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/awsrequestsigner.js
// class=new  jaccard=0.0301  score=1  fileCov=0.0301
// note: nearest: node_modules/google-auth-library/build/src/auth/awsrequestsigner.js (0.0301); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module t4r] deps: @smithy/util-hex-encoding/dist-cjs/index.js, @smithy/signature-v4/dist-cjs/index.js, @smithy/signature-v4/dist-cjs/index.js
SHn = {}, e4r = [];
var AHn = ({
  headers: e
}, t, n) => {
  let r = {};
  for (let o of Object.keys(e).sort()) {
    if (e[o] == null) continue;
    let s = o.toLowerCase();
    if (s in Sci || t?.has(s) || Eci.test(s) || Aci.test(s)) {
      if (!n || n && !n.has(s)) continue;
    }
    r[s] = e[o].trim().replace(/\s+/g, " ");
  }
  return r;
};