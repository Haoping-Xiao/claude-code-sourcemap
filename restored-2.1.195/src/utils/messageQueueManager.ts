// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kut
// matched 2.1.88 source: src/utils/messageQueueManager.ts
// class=modified  jaccard=0.3846  score=0.6464  fileCov=0.4871
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kut = E(() => {
  ft();
});
function Zca(e) {
  Qca = e;
}
function eua() {
  return Qca;
}
var Qca = null;
function ASe(e, t) {
  let n = Rt(),
    r = {
      type: "queue-operation",
      operation: e,
      timestamp: new Date().toISOString(),
      sessionId: n,
      ...(t !== void 0 && {
        content: t,
      }),
    };
  Wao(r);
}
function mup(e) {
  return !fup.has(e);
}
function XW(e) {
  return mup(e.mode) && !e.isMeta && Y1(e.origin);
}
function rua(e, t) {
  let n = typeof t === "boolean" ? t : !1;
  if (e.origin?.kind === "channel") return !0;
  if (e.origin?.kind === "task-notification") return !0;
  if (e.origin?.kind === "auto-continuation") return !0;
  if (e.origin?.kind === "peer") {
    if (e.origin.senderTaskId !== void 0) return !0;
    if (n) return !0;
  }
  return XW(e);
}
function oua(e) {
  return typeof e.value === "string" && e.value.trim().startsWith("/") && !e.skipSlashCommands;
}
function tua(e) {
  return typeof e === "string"
    ? e
    : zl(
        e,
        `
`,
      );
}
function nua(e, t) {
  if (typeof e === "string") return [];
  let n = [],
    r = 0;
  for (let o of e)
    if (o.type === "image" && o.source.type === "base64")
      (n.push({
        id: t + r,
        type: "image",
        content: o.source.data,
        mediaType: o.source.media_type,
        filename: `image${r + 1}`,
      }),
        r++);
  return n;
}
function gup() {
  let e = [],
    t = Object.freeze([]),
    n = Mi(),
    r = new Set();
  function o() {
    ((t = Object.freeze([...e])), n.emit());
  }
  function s(L) {
    r.add(L);
  }
  function i(L) {
    return r.delete(L);
  }
  let a = null;
  function l(L) {
    a = L;
  }
  function c(L) {
    if (L === void 0 || a === L) a = null;
  }
  function u(L) {
    return a !== null && a.some(L);
  }
  function d() {
    return t;
  }
  function p() {
    return [...e];
  }
  function f() {
    return e.length;
  }
  function m() {
    return On(e, V0);
  }
  function g() {
    return e.length > 0;
  }
  function h() {
    if (e.length > 0) o();
  }
  function y(L) {
    (e.push({
      ...L,
      priority: L.priority ?? "next",
      timestamp: L.timestamp ?? new Date().toISOString(),
    }),
      o(),
      ASe("enqueue", typeof L.value === "string" ? L.value : void 0));
  }
  function b(L) {
    (e.push({
      ...L,
      priority: L.priority ?? "later",
      timestamp: L.timestamp ?? new Date().toISOString(),
    }),
      o(),
      ASe("enqueue", typeof L.value === "string" ? L.value : void 0));
  }
  function _(L) {
    if (e.length === 0) return;
    let M = -1,
      N = 1 / 0;
    for (let $ = 0; $ < e.length; $++) {
      let q = e[$];
      if (L && !L(q)) continue;
      let W = LNn[q.priority ?? "next"];
      if (W < N) ((M = $), (N = W));
    }
    if (M === -1) return;
    let [B] = e.splice(M, 1);
    return (o(), ASe("dequeue"), B);
  }
  function S() {
    if (e.length === 0) return [];
    let L = [...e];
    ((e.length = 0), o());
    for (let M of L) ASe("dequeue");
    return L;
  }
  function A(L) {
    if (e.length === 0) return;
    let M = -1,
      N = 1 / 0;
    for (let B = 0; B < e.length; B++) {
      let $ = e[B];
      if (L && !L($)) continue;
      let q = LNn[$.priority ?? "next"];
      if (q < N) ((M = B), (N = q));
    }
    if (M === -1) return;
    return e[M];
  }
  function v(L) {
    let M = [],
      N = [];
    for (let B of e)
      if (L(B)) M.push(B);
      else N.push(B);
    if (M.length === 0) return [];
    ((e.length = 0), e.push(...N), o());
    for (let B of M) ASe("dequeue");
    return M;
  }
  function C(L) {
    if (L.length === 0) return;
    let M = e.length;
    for (let N = e.length - 1; N >= 0; N--) if (L.includes(e[N])) e.splice(N, 1);
    if (e.length !== M) o();
    for (let N of L) ASe("remove");
  }
  function x(L) {
    let M = [];
    for (let N = e.length - 1; N >= 0; N--) if (L(e[N])) M.unshift(e.splice(N, 1)[0]);
    if (M.length > 0) {
      o();
      for (let N of M) ASe("remove");
    }
    return M;
  }
  function I() {
    if (e.length === 0) return;
    let L = Nao(e, (M) => M.mode);
    (T(
      `[clearCommandQueue] dropping ${e.length} queued command(s): ${Object.entries(L)
        .map(([M, N]) => `${M}=${N.length}`)
        .join(" ")}`,
      {
        level: "warn",
      },
    ),
      (e.length = 0),
      o());
  }
  function k() {
    ((e.length = 0), (t = Object.freeze([])), r.clear(), c());
  }
  function D(L, M) {
    if (e.length === 0) return;
    let { editable: N = [], nonEditable: B = [] } = Nao([...e], (z) =>
      XW(z) ? "editable" : "nonEditable",
    );
    if (N.length === 0) return;
    let $ = N.map((z) => tua(z.value)),
      q = [...$, L].filter(Boolean).join(`
`),
      W =
        $.join(`
`).length +
        1 +
        M,
      V = [],
      Y = Date.now();
    for (let z of N) {
      if (z.pastedContents) {
        for (let Z of Object.values(z.pastedContents)) if (Z.type === "image") V.push(Z);
      }
      let K = nua(z.value, Y);
      (V.push(...K), (Y += K.length));
    }
    for (let z of N) ASe("popAll", typeof z.value === "string" ? z.value : void 0);
    return (
      (e.length = 0),
      e.push(...B),
      o(),
      {
        text: q,
        cursorOffset: W,
        images: V,
      }
    );
  }
  function P(L, M, N) {
    let $ = e.filter(XW)[L];
    if (!$) return;
    let q = tua($.value),
      W = [q, M].filter(Boolean).join(`
`),
      V = q.length + 1 + N,
      Y = [];
    if ($.pastedContents) {
      for (let K of Object.values($.pastedContents)) if (K.type === "image") Y.push(K);
    }
    (Y.push(...nua($.value, Date.now())),
      ASe("popOne", typeof $.value === "string" ? $.value : void 0));
    let z = e.indexOf($);
    if (z !== -1) (e.splice(z, 1), o());
    return {
      text: W,
      cursorOffset: V,
      images: Y,
    };
  }
  function O(L) {
    let M = LNn[L];
    return e.filter((N) => LNn[N.priority ?? "next"] <= M);
  }
  return {
    subscribe: n.subscribe,
    getCommandQueueSnapshot: d,
    getCommandQueue: p,
    getCommandQueueLength: f,
    getMainThreadQueueLength: m,
    hasCommandsInQueue: g,
    recheckCommandQueue: h,
    enqueue: y,
    enqueuePendingNotification: b,
    dequeue: _,
    dequeueAll: S,
    peek: A,
    dequeueAllMatching: v,
    remove: C,
    removeByFilter: x,
    clearCommandQueue: I,
    resetCommandQueue: k,
    popAllEditable: D,
    popEditableAt: P,
    getCommandsByMaxPriority: O,
    markCancelPending: s,
    consumeCancelPending: i,
    setInFlightDrainBatch: l,
    clearInFlightDrainBatch: c,
    someInFlightDrainCommand: u,
  };
}
function aua() {
  return Ug.getCommandQueue().some((e) => V0(e) && XW(e));
}
var LNn,
  fup,
  Ug,
  sua,
  iua,
  HSe,
  Rut,
  qX,
  Bao,
  Uao,
  TSe,
  A1y,
  j_,
  Ad,
  I5e,
  H1y,
  J8,
  ALe,
  lua,
  cua,
  uua,
  T1y,
  n4t,
  dua,
  pua,
  Fao,
  jao,
  Gao;
