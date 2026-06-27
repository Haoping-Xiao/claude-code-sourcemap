// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fpo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fpo = E(() => {
  plo();
  Fun();
  U3t = class U3t extends Error {
    constructor(e) {
      super(`wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`);
      this.name = "StdoutOverflowError";
    }
  };
  F3t = class F3t extends dlo {
    overflowError;
    constructor(e) {
      super(e);
      this._readBuffer = new mka(ppo, t => {
        this.overflowError = t, queueMicrotask(() => void this.close());
      });
    }
  };
});
function Nwp(e) {
  let t = 0,
    n = 0,
    r = !1;
  return new TransformStream({
    transform(o, s) {
      let i = -1;
      for (let a = 0; a < o.length; a++) {
        let l = o[a];
        if (r && l === 10) {
          r = !1;
          continue;
        }
        if (r = !1, l === 10 || l === 13) {
          if (n === 0) i = a;
          n = 0, r = l === 13;
        } else n++;
      }
      if (t = i >= 0 ? o.length - 1 - i : t + o.length, t > e) {
        s.error(new gka(e));
        return;
      }
      s.enqueue(o);
    }
  });
}
function Zdt(e) {
  return async (t, n) => {
    let r = await e(t, n);
    if (!r.body || r.body.locked || r.status < 200 || r.status > 599) return r;
    let o = r.body.pipeThrough(Nwp(Owp)),
      s = new Response(o, {
        status: r.status,
        statusText: r.statusText,
        headers: r.headers
      });
    return Object.defineProperty(s, "url", {
      value: r.url
    }), Object.defineProperty(s, "redirected", {
      value: r.redirected
    }), Object.defineProperty(s, "type", {
      value: r.type
    }), s;
  };
}
var Owp,
  mpo = "without an SSE event boundary",
  gka;