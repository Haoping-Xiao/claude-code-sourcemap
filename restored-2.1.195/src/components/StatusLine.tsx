// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b8o
// matched 2.1.88 source: src/components/StatusLine.tsx
// class=modified  jaccard=0.1821  score=0.4617  fileCov=0.2311
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module b8o] deps: EJt, m8o, FDn, Ed, y8o, C5, uTt, rnr
((lmc = R(lt(), 1)), (gNe = R(se(), 1)));
class cmc {
  pending = null;
  cancelScheduledFlush = null;
  scheduleTimeout;
  onFlush;
  flushIntervalMs;
  boundFlush;
  constructor({ scheduleTimeout: e, onFlush: t, flushIntervalMs: n }) {
    ((this.scheduleTimeout = e),
      (this.onFlush = t),
      (this.flushIntervalMs = n),
      (this.boundFlush = this.flush.bind(this)));
  }
  apply(e) {
    let t = e(this.pending);
    if (t === null) {
      this.clear();
      return;
    }
    if (((this.pending = t), this.cancelScheduledFlush === null))
      this.cancelScheduledFlush = this.scheduleTimeout(this.boundFlush, this.flushIntervalMs);
  }
  clear() {
    ((this.pending = null), this.dispose(), this.onFlush(null));
  }
  peek() {
    return this.pending;
  }
  dispose() {
    if (this.cancelScheduledFlush !== null)
      (this.cancelScheduledFlush(), (this.cancelScheduledFlush = null));
  }
  flush() {
    ((this.cancelScheduledFlush = null), this.onFlush(this.pending));
  }
}
function umc({ scheduleTimeout: e, onFlush: t, flushIntervalMs: n = 100 }) {
  return new cmc({
    scheduleTimeout: e,
    onFlush: t,
    flushIntervalMs: n,
  });
}
function pmc(e, t, n, r = G) {
  if (!e.current) return;
  ((e.current = false), r(t, n()));
}
async function Hcm(e) {
  let {
      signal: t,
      executeCommand: n,
      getCommandLength: r,
      pendingResultLogRef: o,
      onResult: s,
      logFn: i = G,
    } = e,
    a = r();
  try {
    let l = await n();
    if (t.aborted) return;
    if ((s(l), l))
      pmc(
        o,
        "tengu_status_line_result",
        () => {
          let c = l.split(`
`),
            u = 0;
          for (let d of c) {
            let p = rn(d);
            if (p > u) u = p;
          }
          return {
            char_length: l.length,
            visual_width: u,
            line_count: c.length,
            command_length: a,
          };
        },
        i,
      );
  } catch {}
}
function fmc(e) {
  return nKe(e?.statusLine) !== void 0;
}
function Tcm(e, t) {
  let n = CCn(e, t);
  return {
    total_input_tokens: e
      ? e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens
      : 0,
    total_output_tokens: e?.output_tokens ?? 0,
    context_window_size: t,
    current_usage: e,
    used_percentage: n.used,
    remaining_percentage: n.remaining,
  };
}
function vcm(e, t, n, r, o, s, i, a, l, c, u, d, p, f) {
  let m = TO(),
    g = Gm(),
    h = VR({
      permissionMode: e,
      mainLoopModel: i,
      exceeds200kTokens: t,
    }),
    y = r?.outputStyle || uP,
    b = Kct(o),
    _ = nH(h, OS()),
    S = Rt(),
    A = Gg(S) ?? dz(S),
    v = f5e(),
    C = {
      ...(v.five_hour && {
        five_hour: {
          used_percentage: v.five_hour.utilization * 100,
          resets_at: v.five_hour.resets_at,
        },
      }),
      ...(v.seven_day && {
        seven_day: {
          used_percentage: v.seven_day.utilization * 100,
          resets_at: v.seven_day.resets_at,
        },
      }),
    };
  return {
    ...Td(),
    cwd: d,
    ...(A && {
      session_name: A,
    }),
    model: {
      id: h,
      display_name: wp(h),
    },
    workspace: {
      current_dir: d,
      project_dir: yr(),
      added_dirs: s,
      ...(a && {
        git_worktree: a,
      }),
      ...(l && {
        repo: l,
      }),
    },
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
    output_style: {
      name: y,
    },
    cost: {
      total_cost_usd: jb(),
      total_duration_ms: Gie(),
      total_api_duration_ms: WH(),
      total_lines_added: vge(),
      total_lines_removed: wge(),
    },
    context_window: Tcm(b, _),
    exceeds_200k_tokens: t,
    fast_mode: n,
    ...(Kw(h) && {
      effort: {
        level: RM(h, p),
      },
    }),
    thinking: {
      enabled: f !== false,
    },
    ...((C.five_hour || C.seven_day) && {
      rate_limits: C,
    }),
    ...(V$() && {
      vim: {
        mode: u ?? "INSERT",
      },
    }),
    ...(m && {
      agent: {
        name: m,
      },
    }),
    ...(Ju() !== null && {
      remote: {
        session_id: Rt(),
      },
    }),
    ...(c && {
      pr: {
        number: c.number,
        url: c.url,
        ...(c.reviewState && {
          review_state: c.reviewState,
        }),
        ...(c.kind && {
          kind: c.kind,
        }),
      },
    }),
    ...(g && {
      worktree: {
        name: g.worktreeName,
        path: g.worktreePath,
        branch: g.worktreeBranch,
        original_cwd: g.originalCwd,
        original_branch: g.originalBranch,
      },
    }),
  };
}
function S8o(e) {
  return MI(e)?.uuid ?? null;
}
function StatusLineInner({ messagesRef: e, lastAssistantMessageId: t, tokenUsage: n, vimMode: r }) {
  let o = wA.useRef(void 0),
    s = Ht((Y) => Y.toolPermissionContext.mode),
    i = Ht((Y) => Y.toolPermissionContext.additionalWorkingDirectories),
    a = Ht((Y) => Y.statusLineText),
    l = Ho(),
    c = G_(),
    u = nKe(c?.statusLine),
    d = kH(),
    p = Ht((Y) => Y.fastMode ?? false),
    f = Ht((Y) => Y.effortValue),
    m = Ht((Y) => Y.thinkingEnabled),
    g = Ht((Y) => Y.prStatus),
    h = wA.useRef(c);
  h.current = c;
  let y = wA.useRef(u);
  y.current = u;
  let b = wA.useRef(r);
  b.current = r;
  let _ = wA.useRef(s);
  _.current = s;
  let S = wA.useRef(i);
  S.current = i;
  let A = wA.useRef(d);
  A.current = d;
  let v = wA.useRef(p);
  v.current = p;
  let C = wA.useRef(f);
  C.current = f;
  let x = wA.useRef(m);
  x.current = m;
  let I = wA.useRef(g);
  I.current = g;
  let k = wA.useRef({
      messageId: null,
      tokenUsage: n,
      exceeds200kTokens: false,
      permissionMode: s,
      vimMode: r,
      mainLoopModel: d,
      fastMode: p,
      effortValue: f,
      thinkingEnabled: m,
      prStatus: g,
    }),
    D = wA.useRef(true),
    P = wA.useRef(true),
    O = wA.useRef(true),
    L = wA.useCallback(async () => {
      o.current?.abort();
      let Y = new AbortController();
      o.current = Y;
      let z = Py(e.current),
        K = D.current;
      D.current = false;
      let Z = k.current.exceeds200kTokens,
        J = S8o(z);
      if (J !== k.current.messageId)
        ((Z = g1n(z)), (k.current.messageId = J), (k.current.exceeds200kTokens = Z));
      let ne = $t(),
        [oe, re] = await Promise.all([aRr(ne), vl() ? Promise.resolve(null) : gY()]),
        ee = re ? Dae(re) : null;
      await Hcm({
        signal: Y.signal,
        executeCommand: () =>
          q5o(
            vcm(
              _.current,
              Z,
              v.current,
              h.current,
              z,
              Array.from(S.current.keys()),
              A.current,
              oe,
              ee,
              I.current,
              b.current,
              ne,
              C.current,
              x.current,
            ),
            Y.signal,
            void 0,
            K,
          ),
        getCommandLength: () => y.current?.command.length,
        pendingResultLogRef: O,
        onResult: (ce) => {
          l((ae) => {
            if (ae.statusLineText === ce) return ae;
            return {
              ...ae,
              statusLineText: ce,
            };
          });
        },
      });
    }, [e, l]),
    M = vW(() => {
      L();
    }, 300);
  wA.useEffect(() => {
    if (
      t !== k.current.messageId ||
      n !== k.current.tokenUsage ||
      s !== k.current.permissionMode ||
      r !== k.current.vimMode ||
      d !== k.current.mainLoopModel ||
      p !== k.current.fastMode ||
      f !== k.current.effortValue ||
      m !== k.current.thinkingEnabled ||
      g !== k.current.prStatus
    )
      ((k.current.tokenUsage = n),
        (k.current.permissionMode = s),
        (k.current.vimMode = r),
        (k.current.mainLoopModel = d),
        (k.current.fastMode = p),
        (k.current.effortValue = f),
        (k.current.thinkingEnabled = m),
        (k.current.prStatus = g),
        M());
  }, [t, n, s, r, d, p, f, m, g, M]);
  let N = u?.refreshInterval;
  Gc(M, N !== void 0 ? Math.max(1, N) * 1000 : null);
  let B = u?.command,
    $ = wA.useRef(true);
  wA.useEffect(() => {
    if ($.current) {
      $.current = false;
      return;
    }
    ((D.current = true), (P.current = true), (O.current = true), L());
  }, [B, L]);
  let q = u;
  wA.useEffect(() => {
    if (!q) return;
    pmc(P, "tengu_status_line_mount", () => ({
      command_length: q.command.length,
      padding: q.padding,
    }));
  }, [q]);
  let W = wA.useRef(false);
  (wA.useEffect(() => {
    if (W.current) return;
    if (!q) return;
    if (((W.current = true), c?.disableAllHooks === true))
      T("Status line is configured but disableAllHooks is true", {
        level: "warn",
      });
    if (!ad())
      (VL("statusline", 1),
        l((Y) => {
          if (Y.setupIssues.statuslineIssueCount === 1) return Y;
          return {
            ...Y,
            setupIssues: {
              ...Y.setupIssues,
              statuslineIssueCount: 1,
            },
          };
        }),
        T("Status line command skipped: workspace trust not accepted", {
          level: "warn",
        }));
  }, [q, c?.disableAllHooks, l]),
    wA.useEffect(
      () => (
        L(),
        () => {
          o.current?.abort();
        }
      ),
      [],
    ));
  let V = u?.padding ?? 0;
  return OTe.jsx(U, {
    paddingX: V,
    gap: 2,
    children: a
      ? OTe.jsx(Ccm, {
          text: a,
        })
      : Ns()
        ? OTe.jsx(w, {
            children: " ",
          })
        : null,
  });
}
function Ccm(e) {
  let t = dmc.c(11),
    { text: n } = e,
    r,
    o,
    s,
    i;
  if (t[0] !== n) {
    i = Symbol.for("react.early_return_sentinel");
    e: {
      let l = kcm(n);
      if (l.length === 1) {
        let c = OTe.jsx(bd, {
            children: n,
          }),
          u;
        if (t[5] !== c)
          ((u = OTe.jsx(w, {
            dimColor: true,
            wrap: "truncate",
            children: c,
          })),
            (t[5] = c),
            (t[6] = u));
        else u = t[6];
        i = u;
        break e;
      }
      ((r = U), (o = "column"), (s = l.map(Icm)));
    }
    ((t[0] = n), (t[1] = r), (t[2] = o), (t[3] = s), (t[4] = i));
  } else ((r = t[1]), (o = t[2]), (s = t[3]), (i = t[4]));
  if (i !== Symbol.for("react.early_return_sentinel")) return i;
  let a;
  if (t[7] !== r || t[8] !== o || t[9] !== s)
    ((a = OTe.jsx(r, {
      flexDirection: o,
      children: s,
    })),
      (t[7] = r),
      (t[8] = o),
      (t[9] = s),
      (t[10] = a));
  else a = t[10];
  return a;
}
function Icm(e, t) {
  return OTe.jsx(
    w,
    {
      dimColor: true,
      wrap: "truncate",
      children: OTe.jsx(bd, {
        children: e,
      }),
    },
    t,
  );
}
function kcm(e) {
  let t = e.split(`
`);
  if (t.length === 1) return t;
  let n = [t[0]],
    r = "";
  for (let o = 1; o < t.length; o++)
    ((r += (t[o - 1].match(xcm) ?? []).join("")), n.push(r + t[o]));
  return n;
}
var dmc, wA, OTe, xcm, mmc;
