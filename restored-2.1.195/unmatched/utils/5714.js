// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iLc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0077  score=0.2109  fileCov=0.0079
// note: nearest: src/screens/REPL.tsx (0.0077); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iLc = E(() => {
  ft();
  p4n();
  uo();
  vn();
  u2o();
  vfr = R(rt(), 1);
});
function wfr(e) {
  return e.type === "user" && !e.isMeta && !e.isCompactSummary && !e.isVirtual;
}
function lLc(e) {
  let t = e.at(-1);
  return t?.type === "system" && t.subtype === "away_summary";
}
function cLc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (wfr(n)) return false;
    if (n.type !== "assistant") continue;
    let r = n.message.content[0];
    if (r?.type === "tool_use" && r.name === Ip) {
      let o = r.input?.text;
      if (typeof o === "string" && o.length > 0) return true;
    }
  }
  return false;
}
function Bwm(e) {
  let t = 0,
    n = -1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (wfr(s)) t++;
    if (s.type === "system" && s.subtype === "away_summary") n = o;
  }
  if (t < Owm) return false;
  if (n === -1) return true;
  let r = 0;
  for (let o = n + 1; o < e.length; o++) if (wfr(e[o])) r++;
  return r >= Nwm;
}
async function Uwm(e, t, n) {
  if (t.current) return;
  try {
    await uLc.unlink(e);
  } catch {
    return;
  }
  n.current?.({
    force: true
  });
}
function pLc(e, t, n, r, o = true) {
  let s = ks(),
    i = zP.useRef(null),
    a = zP.useRef(0),
    l = zP.useRef(e),
    c = zP.useRef(n),
    u = zP.useRef(null),
    d = zP.useRef(null),
    p = zP.useRef(null),
    f = zP.useRef(IYo),
    m = zP.useRef(null),
    g = zP.useRef(null),
    h = zP.useRef(null),
    y = zP.useRef(false),
    b = zP.useRef(false);
  if (l.current = e, c.current && !n) d.current = Date.now(), p.current = iCt();
  c.current = n;
  let _ = Dc(),
    S = Ht(C => C.awaySummaryEnabled),
    A = o && S,
    v = at("tengu_sedge_lantern_config", {
      delayMs: IYo
    })?.delayMs;
  f.current = typeof v === "number" && Number.isFinite(v) ? Math.max(30000, v) : IYo, zP.useEffect(() => {
    if (!A) return;
    function C() {
      i.current?.abort(), i.current = null;
    }
    async function x(D) {
      let P = d.current,
        O = p.current;
      if (P === null || O === null) {
        T("[awaySummary] skipped: cache age unknown");
        return;
      }
      if (Date.now() - P > O * 0.9) {
        T("[awaySummary] skipped: cache stale");
        return;
      }
      if (!D?.force && true && ck.status !== "allowed") {
        T("[awaySummary] skipped: at or near rate limit");
        return;
      }
      if (!D?.force && Mze() !== "") {
        T("[awaySummary] skipped: draft input present");
        return;
      }
      if (!D?.force) {
        let {
          pendingAgents: $,
          pendingWorkflows: q
        } = $8t({
          tasks: _.getState().tasks,
          queuedCommands: qX()
        });
        if ($ > 0 || q > 0) {
          T("[awaySummary] skipped: background work pending");
          return;
        }
      }
      if (!D?.force && NRe()) {
        T("[awaySummary] skipped: loop wakeup pending");
        return;
      }
      if (!D?.force && !Bwm(l.current)) return;
      if (lLc(l.current)) return;
      if (cLc(l.current)) {
        T("[awaySummary] skipped: StructuredOutput recap present");
        return;
      }
      C();
      let L = new AbortController();
      i.current = L;
      let M = await KGt(L.signal);
      if (L.signal.aborted) return;
      if (M.kind !== "ok") {
        Le("away_summary_generate", "generate_failed");
        return;
      }
      let N = M.text,
        B = a.current < 3 ? `${N} (disable recaps in /config)` : N;
      a.current++, t($ => [...$, hcc(B)]), xe("away_summary_generate");
    }
    function I() {
      let D = N7();
      if (D === "blurred") {
        m.current = Date.now();
        let P = d.current,
          O = p.current ?? 3600000;
        if (P !== null && Date.now() - P >= Math.min(f.current, O * 0.8) && !c.current) x();
      } else if (D === "focused") {
        if (C(), m.current !== null) {
          let P = Date.now(),
            O = P - m.current;
          if (O >= $wm) g.current = P, h.current = O, y.current = true, b.current = lLc(l.current) || cLc(l.current);
          m.current = null;
        }
      }
    }
    let k = K3e(I);
    return u.current = x, I(), () => {
      k(), C(), u.current = null, m.current = null, g.current = null, h.current = null, y.current = false, b.current = false;
    };
  }, [A, t, _]), zP.useEffect(() => {
    if (n) return;
    if (!A) return;
    let C = d.current;
    if (C === null) return;
    let x = p.current ?? 3600000,
      I = Math.min(f.current, x * 0.8),
      k = Math.max(0, I - (Date.now() - C));
    return s.setTimeout(() => {
      if (N7() === "blurred" && !c.current) u.current?.();
    }, k);
  }, [n, A, s]), zP.useEffect(() => {
    if (!A) return;
    if (!y.current) return;
    let C = e.at(-1);
    if (!C || !wfr(C)) return;
    let x = g.current;
    if (x === null) return;
    G("tengu_return_to_session", {
      msSinceFocus: Date.now() - x,
      blurDurationMs: h.current ?? 0,
      hadRecap: b.current,
      scrolledBeforeSubmit: r.current > x,
      isFullscreen: Ns()
    }), y.current = false, g.current = null, m.current = null, h.current = null, b.current = false;
  }, [e, A]), zP.useEffect(() => {
    {
      if (!A) return;
      if (!Js()) return;
      let C = process.env.CLAUDE_JOB_DIR;
      if (!C) return;
      let x = dLc.join(C, iWo),
        I = s.setTimeout(function k() {
          try {
            Uwm(x, c, u);
          } finally {
            I = s.setTimeout(k, aLc);
          }
        }, aLc);
      return () => I();
    }
  }, [A, s]);
}
var uLc,
  dLc,
  zP,
  IYo = 180000,
  $wm = 300000,
  aLc = 500,
  Owm = 3,
  Nwm = 2;