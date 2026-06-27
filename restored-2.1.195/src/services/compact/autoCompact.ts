// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pre
// matched 2.1.88 source: src/services/compact/autoCompact.ts
// class=modified  jaccard=0.1076  score=0.174  fileCov=0.2198
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pre] deps: dre, ft, ft, put, $pe, lf, jv, Q1n, Vv, er, BE, tao, Il, je, Cp, At, ik, q0, mwo, sp, vn, Ekl, co, Ao, Hu, KI, tA, aze, y_, _Le, _a, Jt, bH, aS, m5, u$, GX, dn, Un, kt, pke, fb, ZE, tP, lZn, mLe, H5e, gNn, U1, q8, Iao
Tq = class Tq extends Error {};
function Pwf(e) {
  return e instanceof Tq || K1(be(e)) || Xie(e, cZn) || Xie(e, bMo);
}
function Rkl(e, t, n) {
  let r = (e?.consecutiveFailures ?? 0) + 1;
  if (r >= Lkl)
    (T(
      `autocompact: circuit breaker tripped after ${r} consecutive failures${t ? " (reactive path)" : ""} \u2014 skipping future attempts this session`,
      {
        level: "warn",
      },
    ),
      G("tengu_auto_compact_circuit_breaker", {
        consecutiveFailures: r,
        ...(t && {
          routedThroughReactive: t,
        }),
        ...(n && {
          thresholdSource: $e(n),
        }),
      }));
  return {
    kind: "failed",
    consecutiveFailures: r,
    routedThroughReactive: t,
    thresholdSource: n,
  };
}
function Mwf(e, t, n, r = 0) {
  let o = Kct(e);
  if (!o) return null;
  let s = o.input_tokens + o.cache_read_input_tokens + o.cache_creation_input_tokens,
    i = qv(e, rH(t)),
    a = Math.max(0, s - r - i),
    l = Ajt(t, n);
  if (a <= l) return null;
  let c = 0,
    u = 0,
    d = (p) => {
      for (let f of p) {
        let m = f;
        if (m.type === "document") c++;
        else if (m.type === "image") u++;
        else if (m.type === "tool_result" && Array.isArray(m.content)) d(m.content);
      }
    };
  for (let p of e) {
    let f = p.message?.content;
    if (Array.isArray(f)) d(f);
  }
  return {
    prefixTokens: a,
    thresholdTokens: l,
    totalInputTokens: s,
    messagesEstimate: i,
    snipTokensFreed: r,
    documentBlockCount: c,
    imageBlockCount: u,
  };
}
function $wf() {
  return ut(process.env.CLAUDE_CODE_COLD_COMPACT);
}
async function Owf(e, t, n, r, o = 0) {
  if (Gct(r)) return false;
  if (tLe(r)) return false;
  if (!pC()) return false;
  if ($X() && !nLe(t, n)) return false;
  let s = eA(e, rH(t)) - o,
    i = rLe(s, t, n);
  return (
    T(`autocompact: tokens=${s} level=${i.level} effectiveWindow=${are(t, n)}`),
    i.level === "compact" || i.level === "blocked"
  );
}
async function* eMo(e, t, n, r, o, s, i) {
  if (Oe.DISABLE_COMPACT)
    return {
      kind: "not_needed",
    };
  if (o?.consecutiveFailures !== void 0 && o.consecutiveFailures >= Lkl)
    return {
      kind: "failure_breaker_open",
    };
  let a = t.options.mainLoopModel,
    l = t.options.autoCompactWindow;
  if (!(await Owf(e, a, l, r, s)))
    return {
      kind: "not_needed",
    };
  let u = Mwf(e, a, l, s);
  if (u)
    (T(
      `autocompact: fixed prefix ~${u.prefixTokens} > threshold ${u.thresholdTokens} \u2014 compaction cannot help`,
      {
        level: "warn",
      },
    ),
      It("compact_auto", "compact_auto_prefix_overflow"),
      G("tengu_auto_compact_prefix_overflow", {
        ...u,
        wouldHaveBlocked: true,
      }));
  let d = p1n(o),
    { consecutiveRapidRefills: p } = d;
  if (d.action === "trip")
    return (
      T(
        `autocompact: rapid-refill breaker tripped \u2014 ${p} consecutive refills within <${bia} turns each (last was ${o?.turnCounter} turns)`,
        {
          level: "warn",
        },
      ),
      It("compact_auto", "compact_auto_rapid_refill_breaker"),
      {
        kind: "rapid_refill_breaker_tripped",
      }
    );
  let f = d1n(a, l),
    m = Nwf(a, l);
  if (r !== void 0 && f !== "auto" && $X()) {
    (T(`autocompact: routing through reactive (thresholdSource=${f})`),
      G("tengu_auto_compact_routed_reactive", {
        thresholdSource: $e(f),
      }));
    let y = performance.now(),
      b = r,
      { result: _, hookBlocked: S } = yield* jct(async (A, v, C) => {
        let x;
        if (i) {
          let k = c$(A.abortController),
            D = setTimeout((P) => P.abort(eP("recovery-timeout")), m1n, k);
          D.unref?.();
          try {
            x = await i({
              toolUseContext: {
                ...A,
                abortController: k,
              },
              messages: e,
              querySource: b,
              trigger: "threshold",
              detectedAt: y,
            });
          } finally {
            clearTimeout(D);
          }
        }
        let I = await pQn({
          hasAttempted: false,
          querySource: b,
          aborted: A.abortController.signal.aborted,
          messages: e,
          cacheSafeParams: {
            ...n,
            toolUseContext: A,
          },
          precomputed: x?.swap,
          precomputeOutcome: x?.outcome,
          userWaitStartedAt: y,
          thresholdSource: f,
          spinnerHintText: m,
        });
        if (I.result === null && x?.emittedEarlyCompactStart)
          (A.onCompactEvent?.({
            type: "compact_progress",
            event: {
              type: "compact_end",
            },
          }),
            A.onCompactEvent?.({
              type: "sdk_status",
              status: null,
            }));
        return I;
      }, t);
    if (_)
      return {
        kind: "compacted",
        result: _,
        consecutiveRapidRefills: p,
        thresholdSource: f,
        routedThroughReactive: true,
      };
    if (S)
      return {
        kind: "hook_blocked",
        thresholdSource: f,
        routedThroughReactive: true,
      };
    return Rkl(o, true, f);
  }
  let g = {
      isRecompactionInChain: o?.compacted === true,
      turnsSincePreviousCompact: o?.turnCounter ?? -1,
      previousCompactTurnId: o?.turnId,
      autoCompactThreshold: Ajt(a, l),
      querySource: r,
    },
    h = $wf();
  try {
    let y = yield* jct((b, _, S) => w7n(e, b, n, true, void 0, true, g, h, m, _, S), t);
    return (
      hfe(r, t.setAppState, t.agentId, n.stickyBetas),
      {
        kind: "compacted",
        result: y,
        consecutiveRapidRefills: p,
        thresholdSource: f,
        routedThroughReactive: false,
      }
    );
  } catch (y) {
    if (be(y).startsWith(abt))
      return {
        kind: "hook_blocked",
        routedThroughReactive: false,
      };
    if (!Xie(y, t3))
      if (Pwf(y))
        T(`autocompact failed: ${be(y)}`, {
          level: "error",
        });
      else ke(y);
    return Rkl(o, false, void 0);
  }
}
function Nwf(e, t) {
  let n = mo(e);
  if (eio(n) === void 0) return null;
  let { source: r, configured: o } = A4(e, t),
    s = nH(e, OS());
  if ((r !== "experiment" && r !== "clientdata") || o >= s) return null;
  return `Compacting at auto window (${gl(o)} tokens) \xB7 /autocompact to configure`;
}
var Lkl = 3;
