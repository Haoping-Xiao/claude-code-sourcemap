// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yxe
// matched 2.1.88 source: src/utils/model/modelCapabilities.ts
// class=modified  jaccard=0.227  score=0.4159  fileCov=0.3333
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Yxe = E(() => {
  PR();
  Qi();
  og();
  oo();
  xAn();
  Ld();
  Gx();
  Ao();
  Ls();
  Mh();
  ft();
  Rc();
  wFe();
  je();
  Mm();
  fn();
  drt();
  Jt();
  sr();
  dn();
  Un();
  kt();
  yje();
  frt();
  cvi = require("crypto");
  ((Rkd = Cn(() => xe("provider_route"))),
    (Lkd = {
      __auth: {
        provider: null,
        tokenCache: null,
        resolution: null,
        error: null,
        extraHeaders: {},
      },
    }));
  TCn = class TCn extends Error {
    idleMs;
    bytesReceived;
    ttfbMs;
    bodyReadPending;
    cfRay;
    sleptMs;
    constructor(e, t = 0, n, r = true, o, s = 0) {
      super(`stream idle: no bytes for ${e}ms`);
      ((this.name = "StreamIdleTimeoutError"),
        (this.idleMs = e),
        (this.bytesReceived = t),
        (this.ttfbMs = n),
        (this.bodyReadPending = r),
        (this.cfRay = o),
        (this.sleptMs = s));
    }
  };
  uvi = class uvi extends Error {
    sleptMs;
    code = "StreamSuspended";
    constructor(e) {
      super("Stream watchdog detected system suspend; aborting to retry on a fresh connection");
      this.sleptMs = e;
      this.name = "StreamSuspendedError";
    }
  };
});
function hvi() {
  return C9r.join(tr(), "cache");
}
function yvi() {
  return C9r.join(hvi(), "model-capabilities.json");
}
function _vi() {
  return false;
}
function Gkd(e) {
  return [...e].sort((t, n) => n.id.length - t.id.length || t.id.localeCompare(n.id));
}
function bvi(e) {
  if (!_vi()) return;
  let t = w9r(yvi());
  if (!t || t.length === 0) return;
  let n = e.toLowerCase(),
    r = t.find((o) => o.id.toLowerCase() === n);
  if (r) return r;
  return t.find((o) => n.includes(o.id.toLowerCase()));
}
async function Svi() {
  if (!_vi()) return;
  if (Vi()) return;
  try {
    let e = await G9({
        maxRetries: 1,
        agentContext: of(),
      }),
      t = bo() ? [kw] : void 0,
      n = [];
    for await (let s of e.models.list({
      betas: t,
    })) {
      let i = gvi().safeParse(s);
      if (i.success) n.push(i.data);
    }
    if (n.length === 0) return;
    let r = yvi(),
      o = Gkd(n);
    if (L_(w9r(r), o)) {
      T("[modelCapabilities] cache unchanged, skipping write");
      return;
    }
    (await vCn.mkdir(hvi(), {
      recursive: true,
    }),
      await vCn.writeFile(
        r,
        De({
          models: o,
          timestamp: Date.now(),
        }),
        {
          encoding: "utf-8",
          mode: 384,
        },
      ),
      w9r.cache.delete(r),
      T(`[modelCapabilities] cached ${o.length} models`));
  } catch (e) {
    T(`[modelCapabilities] fetch failed: ${e instanceof Error ? e.message : "unknown"}`);
  }
}
var mvi, vCn, C9r, gvi, jkd, w9r;
