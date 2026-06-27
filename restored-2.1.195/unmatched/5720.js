// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wLc
// matched 2.1.88 source: src/tools/RemoteTriggerTool/RemoteTriggerTool.ts
// class=new  jaccard=0.0437  score=0.1285  fileCov=0.0621
// note: nearest: src/tools/RemoteTriggerTool/RemoteTriggerTool.ts (0.0437); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wLc = E(() => {
  Ed();
  Ye();
  id();
  kt();
  uHt();
  uo();
  Rtn = R(rt(), 1), nie = R(se(), 1);
});
function Kwm() {
  return `${$s().CLAUDE_AI_ORIGIN}/code/routines`;
}
function Ywm(e) {
  let t = Date.now() - Date.parse(e);
  if (!Number.isFinite(t) || t < 60000) return "just now";
  return `${Yi(t, {
    mostSignificantOnly: !0
  })} ago`;
}
function Cfr(e, t) {
  return Date.parse(e) > Date.parse(t);
}
function Xwm(e, t) {
  let n = t;
  return {
    fired: e.filter(o => {
      if (!o.run_once_at || !o.last_fired_at) return !1;
      if (!Cfr(o.last_fired_at, t)) return !1;
      if (Cfr(o.last_fired_at, n)) n = o.last_fired_at;
      return !0;
    }),
    nextWatermark: n
  };
}
function Jwm(e) {
  let t = Kwm(),
    n = e.reduce((o, s) => Cfr(s.last_fired_at ?? "", o.last_fired_at ?? "") ? s : o),
    r = n.last_fired_at ? Ywm(n.last_fired_at) : "";
  if (e.length === 1) {
    let o = e[0];
    return {
      jsx: L3.jsxs(L3.Fragment, {
        children: [L3.jsx(Hs, {
          status: "success",
          withSpace: !0
        }), L3.jsx(w, {
          dimColor: !0,
          children: "routine "
        }), L3.jsx(w, {
          color: "suggestion",
          children: o.name
        }), L3.jsxs(w, {
          dimColor: !0,
          children: [" ", "ran", r ? ` ${r}` : "", " \xB7 ", t, "/"]
        }), L3.jsx(w, {
          color: "suggestion",
          children: o.id
        })]
      }),
      url: `${t}/${o.id}`
    };
  }
  return {
    jsx: L3.jsxs(L3.Fragment, {
      children: [L3.jsx(Hs, {
        status: "success",
        withSpace: !0
      }), L3.jsxs(w, {
        dimColor: !0,
        children: [e.length, " routines ran", r ? ` (latest ${r})` : "", " \xB7", " "]
      }), L3.jsx(w, {
        color: "suggestion",
        children: "/routines"
      })]
    }),
    url: t
  };
}
function ILc() {
  let e = CLc.c(3),
    {
      addNotification: t
    } = Li(),
    n = Ifr.useRef(!1),
    r,
    o;
  if (e[0] !== t) r = () => {
    if (n.current) return;
    if (n.current = !0, da() || Vi() || !bo() || !at("tengu_surreal_dali", !1) || !Us("allow_remote_sessions")) return;
    let s = Dt().routineFiredWatermark;
    if (s === void 0) {
      let i = new Date().toISOString();
      gn(a => a.routineFiredWatermark !== void 0 ? a : {
        ...a,
        routineFiredWatermark: i
      });
      return;
    }
    (async () => {
      let i;
      try {
        i = await fSl();
      } catch (u) {
        T(`[routine-fired] fetchTriggers failed: ${u}`, {
          level: "warn"
        });
        return;
      }
      let {
        fired: a,
        nextWatermark: l
      } = Xwm(i, s);
      if (a.length === 0) return;
      let {
        jsx: c
      } = Jwm(a);
      t({
        key: zwm,
        kind: "event",
        jsx: c,
        priority: "medium",
        timeoutMs: 30000
      }), G("tengu_routine_fired_notification_shown", {
        count: a.length,
        trigger_ids: a.map(Qwm).join(",")
      }), gn(u => u.routineFiredWatermark !== void 0 && !Cfr(l, u.routineFiredWatermark) ? u : {
        ...u,
        routineFiredWatermark: l
      });
    })();
  }, o = [t], e[0] = t, e[1] = r, e[2] = o;else r = e[1], o = e[2];
  Ifr.useEffect(r, o);
}
function Qwm(e) {
  return e.id;
}
var CLc,
  Ifr,
  L3,
  zwm = "routine-fired";