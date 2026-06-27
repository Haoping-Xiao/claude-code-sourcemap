// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tYo
// matched 2.1.88 source: src/commands/review.ts
// class=modified (alt of src/commands/review.ts)  jaccard=0.0226  score=0.0299  fileCov=0.0848
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: mountFleetViewWithComposerBack
// [unwrapped __esm module tYo] deps: iu, si, det, ft, lH, rir, N4o, Zf, e6o, fTc, n6o, Bs, Coe, gDe, Ko, dzn, x8t, eKn, OUt, tdr, Pfe, Pne, djo, Xa, Ed, nbe, Gfe, zj, hNo, Jat, jur, yZr, dse, gTc, _i, lPn, Cen, $pr, wOe, _Ln, tUt, Kce, _at, jLn, HI, m8, Tc, ZS, Y3e, jh, Ye, FAe, xar, gzo, yKo, xHt, ag, S6, pWo, Lar, dn, Un, kt, Du, _F, jc, TKo, C5, uo, IL, LX, sA, vy, fd, Ld, er, Lo, je, wr, At, es, ys, uf, ift, sa, DGe, m0, vn, GXt, I1, Ao, c5e, Hu, Jbe, Is, y3, zH, Mne, bJt, Gre, Vke, Y9, jS, Jt, sr, NDe, g0, _ht, okc, ckc, fkc, tvt, Akc
((D7e = R(lt(), 1)),
  (Dkc = require("crypto")),
  (Pkc = require("fs/promises")),
  (Gme = require("path")),
  (zKo = R(rt(), 1)),
  (jr = R(rt(), 1)),
  (Mkc = require("url")),
  (ur = R(se(), 1)));
IKo = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g;
((LKo = ["review", "blocked", "working", "done"]),
  (Hkc = {
    review: "Ready for review",
    blocked: "Needs input",
    working: "Working",
    done: "Completed",
  }),
  (HTm = {
    review: "",
    blocked: "Sessions that have a question or need your decision land here",
    working:
      "Sessions Claude is actively working on \u2014 they keep running even if you close the terminal",
    done: "Finished sessions wait here for you to review",
  }));
kTm = new Set(["EPIPE", "ECONNRESET", "ECONNREFUSED", "ENOTCONN"]);
Kpr = class Kpr extends Error {
  constructor(e) {
    super(e);
    this.name = "FleetActionUnconfirmedError";
  }
};
OKo = new Map();
NKo = new Map();
((Jpr = new Map()),
  (FKo = []),
  (qpr = new Map()),
  (jKo = new Map()),
  (GKo = new Map()),
  (qkc = new Map()));
vkc = {
  error: 2,
  warning: 1,
};
NTm = {
  error: 3,
  warning: 2,
  success: 1,
};
UTm = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/;
((KTm = {
  agent: "background",
  repo: "repo",
  skill: "skill",
  command: "command",
  workflow: "workflow",
  routine: "routine",
  model: "model",
}),
  (xkc = {
    agent: "@",
    repo: "@",
    routine: "@",
    skill: "/",
    command: "/",
    workflow: "/",
    model: "/",
  }),
  (YTm = {
    kind: "model",
    name: "model",
    description: "Set model for this FleetView session (not persisted)",
  }));
((kkc = []), (Rkc = []));
var Ttn = {};
async function mountFleetViewWithComposerBack(e, t) {
  await eYo(e, t);
}
