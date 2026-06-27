// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Fc
// matched 2.1.88 source: src/services/api/errors.ts
// class=new  jaccard=0.0111  score=0.0966  fileCov=0.0124
// note: nearest: src/services/api/errors.ts (0.0111); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Fc = E(() => {
  ft();
  m4o();
  lNc();
  a8t();
  U7o();
  EVe();
  oXo();
  lT();
  sXo();
  cUc();
  Zf();
  fUc();
  LL();
  dre();
  TJt();
  kt();
  fb();
  Un();
  i2o();
  SC();
  tP();
  eKe();
  lze();
  PR();
  je();
  Mm();
  ii();
  ty();
  tQ();
  bm();
  kut();
  bmr();
  gUc();
  uTt();
  vn();
  ED();
  cYt();
  wpe();
  I6e();
  j_t();
  $g();
  p6e();
  GNn();
  put();
  BKt();
  UX();
  SUc();
  ik();
  Hu();
  y6e();
  NYo();
  Nue();
  EUc();
  vUc();
  MZn();
  Yp();
  fd();
  CUc();
  Lo();
  gKn();
  Gwe();
  ghe();
  yBn();
  JYo();
  V9o();
  _F();
  jc();
  Lne();
  loe();
  Rur();
  xur();
  G8o();
  DFn();
  Gy();
  xUc();
  Rd();
  tXo();
  fp();
  EAe();
  XKe();
  lXo();
  VYt();
  kAt();
  _Le();
  e7o();
  G4();
  dr();
  Eue();
  C4n();
  NE();
  __();
  Yqe();
  q0();
  zqe();
  oo();
  e1();
  Lx();
  S9e();
  Mgt();
  Ls();
  aAn();
  ft();
  rit();
  w7o();
  i$();
  m4t();
  H3t();
  I3t();
  Von();
  _a();
  h6();
  uKo();
  ZUt();
  BI();
  cqe();
  Kv();
  cTt();
  Cre();
  AFn();
  sp();
  Vb();
  Ox();
  g$();
  DUc();
  pXo();
  C5e();
  Kv();
  a5();
  vft();
  H1e();
  co();
  B7t();
  D7t();
  np();
  OI();
  z1();
  Ao();
  vM();
  c5e();
  Cp();
  m1();
  Vw();
  ste();
  ft();
  m5();
  B9n();
  oje();
  Y4();
  H4n();
  I7e();
  lg();
  $I();
  dC();
  S4();
  yLe();
  Yf();
  OKt();
  sG();
  X4();
  Rze();
  $S();
  sF();
  Jt();
  lpr();
  MUc();
  gpr();
  Zf();
  Vv();
  ty();
  wr();
  fn();
  NUc();
  zsr();
  Xh();
  IX();
  Mp();
  YI();
  hP();
  bk();
  xF();
  aYo();
  JJ();
  sYo();
  Z6();
  q6e();
  BUc();
  jUc();
  VUc();
  tA();
  Un();
  At();
  X6e();
  Ist();
  Uh();
  RF();
  V7e = require("fs/promises"), q7e = require("path"), Kme = require("process"), px = require("crypto"), iFc = (gjn(), ro(rgo)), WNe = (l$(), ro(qW)), PLm = (qYo(), ro(RPc)), MLm = (F2t(), ro(Kra)), aFc = (WW(), ro(Ioa)), $Lm = (KWe(), ro(zWe)), OLm = (VKt(), ro(NQn)), fnn = new Set(), Dmr = [];
});
var IXo = {};
_t(IXo, {
  reportPrefetchOutcome: () => reportPrefetchOutcome,
  prefetchRemoteHistory: () => prefetchRemoteHistory,
  historyPageToSeed: () => historyPageToSeed,
  consumePrefetchedHistory: () => consumePrefetchedHistory
});
function YLm() {
  if (mnn === null) mnn = CXo.join(NFc.tmpdir(), `cc-history-prefetch-${process.pid}`), Ci(() => mnn === null ? void 0 : Yme.rm(mnn, {
    recursive: !0,
    force: !0
  }).catch(() => {}));
  return mnn;
}
function prefetchRemoteHistory(e) {
  if (fr() !== "firstParty") return;
  if (!gtn.test(e)) {
    T(`[historyPrefetch] ${e} fails CCR_SESSION_ID_RE \u2014 refusing`, {
      level: "warn"
    });
    return;
  }
  let t = gnn.get(e);
  if (t && !t.settled) return;
  let n = YLm(),
    r = CXo.join(n, `${e}.${Date.now()}.json`),
    o = performance.now(),
    s = (async () => {
      await Yme.mkdir(n, {
        recursive: !0,
        mode: 448
      });
      let a = await Os.get(`/v1/code/sessions/${e}/events?limit=${Wdr}&sort_order=desc`, {
        auth: "teleport-org",
        responseType: "stream",
        timeout: 15000,
        validateStatus: () => !0
      });
      if (!a.ok) return T(`[historyPrefetch] ${e} gate=${a.reason} ${"detail" in a ? a.detail : ""}`), null;
      if (a.status !== 200) return T(`[historyPrefetch] ${e} HTTP ${a.status}`), a.data.resume(), null;
      return await BFc.pipeline(a.data, OFc.createWriteStream(r, {
        mode: 384
      })), r;
    })().catch(a => (T(`[historyPrefetch] ${e} failed: ${be(a)}`), Yme.unlink(r).catch(() => {}), null)),
    i = {
      path: r,
      written: s,
      settled: !1
    };
  if (gnn.set(e, i), t) Yme.unlink(t.path).catch(() => {});
  s.then(a => {
    i.settled = !0, T(`[historyPrefetch] ${e} ${a ? `\u2192 ${a}` : "null"} +${(performance.now() - o).toFixed(0)}ms`);
  });
}
async function consumePrefetchedHistory(e, t) {
  if (!gnn.has(e)) prefetchRemoteHistory(e);
  let n = gnn.get(e);
  if (gnn.delete(e), !n) return null;
  let r = await n.written;
  if (r === null) return null;
  let o;
  try {
    o = await Yme.readFile(r, "utf8");
  } catch (u) {
    if (!wn(u)) T(`[historyPrefetch] read ${r} failed: ${be(u)}`);
    return null;
  } finally {
    await Yme.unlink(r).catch(() => {});
  }
  let s = JLm(o);
  if (s === null) return T(`[historyPrefetch] ${e} parse failed`), null;
  if (!s.hasMore) return historyPageToSeed(s, t);
  let i = await qdr(e).catch(() => null);
  if (i === null) return historyPageToSeed(s, t);
  let {
      events: a,
      firstId: l
    } = s,
    c = 1;
  while (l !== null && c < KLm) {
    let u = await Vdr(i, l);
    if (u === null) break;
    c++, a.unshift(...u.events), l = u.hasMore ? u.firstId : null, s = u;
  }
  return T(`[historyPrefetch] ${e} walked ${c} pages, ${a.length} events, complete=${l === null}`), historyPageToSeed({
    events: a,
    firstId: l,
    hasMore: l !== null
  }, t);
}
function JLm(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  let n = Array.isArray(t.data) ? t.data : [],
    r = [];
  for (let s = n.length - 1; s >= 0; s--) {
    let i = n[s];
    if (i?.payload) {
      let a = i.sequence_num === void 0 ? void 0 : parseInt(String(i.sequence_num), 10);
      r.push({
        payload: i.payload,
        createdAt: i.created_at,
        source: i.source,
        sequenceNum: a !== void 0 && !isNaN(a) ? a : void 0
      });
    }
  }
  let o = t.next_cursor ?? null;
  return {
    events: r,
    firstId: o,
    hasMore: o !== null
  };
}
function historyPageToSeed(e, t) {
  let n = [],
    r = 0,
    o = new Set();
  for (let s of e.events) {
    if (s.sequenceNum !== void 0 && s.sequenceNum > r) r = s.sequenceNum;
    if (s.source === "worker") {
      let a = ENe(s.payload);
      if (a) for (let l of a.uuids) o.add(l);
    }
    if (!QLm(s)) continue;
    let i = ANe(s.payload, t ? {
      convertToolResults: !0,
      convertUserTextMessages: !0
    } : {
      convertUserTextMessages: !0
    });
    if (i.type === "message") n.push(i.message);
  }
  if (o.size > 0) n = n.filter(s => !o.has(s.uuid));
  return {
    messages: n,
    maxSequenceNum: r,
    complete: !e.hasMore
  };
}
function QLm(e) {
  if (e.source === void 0 || e.source === "worker") return !0;
  if (e.payload.type === "user") return !z4o(e.payload);
  return V4o.has(e.payload.type);
}
function reportPrefetchOutcome(e) {
  if (e === null) It("remote_history_prefetch", "miss");else if (!e.complete) It("remote_history_prefetch", "incomplete");else if (e.maxSequenceNum === 0) It("remote_history_prefetch", "no_seq");else xe("remote_history_prefetch");
}
var OFc,
  Yme,
  NFc,
  CXo,
  BFc,
  KLm = 10,
  mnn = null,
  gnn;