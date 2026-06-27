// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gKn
// matched 2.1.88 source: src/utils/hooks/sessionHooks.ts
// class=modified  jaccard=0.2398  score=0.6032  fileCov=0.2847
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gKn] deps: zwt, eis, Ull, BBe, _Ue, jll, IRr, xin
((Lif = kfn(function (e, t) {
  var n = {};
  if (e == null) return n;
  var r = false;
  if (
    ((t = Fve(t, function (s) {
      return ((s = wK(s, e)), r || (r = s.length > 1), s);
    })),
    UK(e, GJe(e), n),
    r)
  )
    n = Zss(n, xif | kif | Rif, Fll);
  var o = t.length;
  while (o--) Bll(n, t[o]);
  return n;
})),
  ($F = Lif));
function hKn(e, t) {
  if (e.type !== t.type) return false;
  let n = (r, o) => (r.if ?? "") === (o.if ?? "");
  switch (e.type) {
    case "command": {
      let r = XWe();
      return (
        t.type === "command" &&
        e.command === t.command &&
        De(e.args ?? null) === De(t.args ?? null) &&
        (e.shell ?? r) === (t.shell ?? r) &&
        n(e, t)
      );
    }
    case "prompt":
      return t.type === "prompt" && e.prompt === t.prompt && n(e, t);
    case "agent":
      return t.type === "agent" && e.prompt === t.prompt && n(e, t);
    case "http":
      return t.type === "http" && e.url === t.url && n(e, t);
    case "mcp_tool":
      return (
        t.type === "mcp_tool" &&
        e.server === t.server &&
        e.tool === t.tool &&
        De(e.input ?? {}) === De(t.input ?? {}) &&
        n(e, t)
      );
    case "function":
      return false;
  }
}
function W8t(e, t, n, r, o, s, i) {
  removeFunctionHook(e, t, n, r, o, s, i);
}
function addFunctionHook(setAppState, sessionId, event, matcher, callback, errorMessage, options) {
  let a = options?.id || `function-hook-${Date.now()}-${Math.random()}`,
    l = {
      type: "function",
      id: a,
      timeout: options?.timeout || 5000,
      callback: callback,
      errorMessage: errorMessage,
    };
  return (removeFunctionHook(setAppState, sessionId, event, matcher, l), a);
}
function removeFunctionHook(setAppState, sessionId, event, hookId, o, s, i) {
  (setAppState((a) => {
    let l = a.sessionHooks.get(sessionId) ?? {
        hooks: {},
      },
      c = l.hooks[event] || [],
      u = c.findIndex((f) => f.matcher === hookId && f.skillRoot === i),
      d;
    if (u >= 0) {
      d = [...c];
      let f = d[u],
        m =
          o.type === "function" && o.id
            ? f.hooks.findIndex((h) => h.hook.type === "function" && h.hook.id === o.id)
            : -1,
        g =
          m >= 0
            ? f.hooks.with(m, {
                hook: o,
                onHookSuccess: s,
              })
            : [
                ...f.hooks,
                {
                  hook: o,
                  onHookSuccess: s,
                },
              ];
      d[u] = {
        matcher: f.matcher,
        skillRoot: f.skillRoot,
        hooks: g,
      };
    } else
      d = [
        ...c,
        {
          matcher: hookId,
          skillRoot: i,
          hooks: [
            {
              hook: o,
              onHookSuccess: s,
            },
          ],
        },
      ];
    let p = {
      ...l.hooks,
      [event]: d,
    };
    return (
      a.sessionHooks.set(sessionId, {
        hooks: p,
      }),
      a
    );
  }),
    T(`Added session hook for event ${event} in session ${sessionId}`));
}
function removeSessionHook(setAppState, sessionId, event, hook) {
  (setAppState((o) => {
    let s = o.sessionHooks.get(sessionId);
    if (!s) return o;
    let a = (s.hooks[event] || [])
        .map((c) => {
          let u = c.hooks.filter((d) => !hKn(d.hook, hook));
          return u.length > 0
            ? {
                ...c,
                hooks: u,
              }
            : null;
        })
        .filter((c) => c !== null),
      l =
        a.length > 0
          ? {
              ...s.hooks,
              [event]: a,
            }
          : {
              ...s.hooks,
            };
    if (a.length === 0) delete l[event];
    return (
      o.sessionHooks.set(sessionId, {
        ...s,
        hooks: l,
      }),
      o
    );
  }),
    T(`Removed session hook for event ${event} in session ${sessionId}`));
}
function Gll(e) {
  return e.map((t) => ({
    matcher: t.matcher,
    skillRoot: t.skillRoot,
    hooks: t.hooks.map((n) => n.hook).filter((n) => n.type !== "function"),
  }));
}
function XMe(e, t, n) {
  let r = e.sessionHooks.get(t);
  if (!r) return new Map();
  let o = new Map();
  if (n) {
    let s = r.hooks[n];
    if (s) o.set(n, Gll(s));
    return o;
  }
  for (let s of GO) {
    let i = r.hooks[s];
    if (i) o.set(s, Gll(i));
  }
  return o;
}
function Vll(e, t, n) {
  let r = e.sessionHooks.get(t);
  if (!r) return new Map();
  let o = new Map(),
    s = (i) =>
      i
        .map((a) => ({
          matcher: a.matcher,
          hooks: a.hooks.map((l) => l.hook).filter((l) => l.type === "function"),
        }))
        .filter((a) => a.hooks.length > 0);
  if (n) {
    let i = r.hooks[n];
    if (i) {
      let a = s(i);
      if (a.length > 0) o.set(n, a);
    }
    return o;
  }
  for (let i of GO) {
    let a = r.hooks[i];
    if (a) {
      let l = s(a);
      if (l.length > 0) o.set(i, l);
    }
  }
  return o;
}
function zll(e, t, n, r, o) {
  let s = e.sessionHooks.get(t);
  if (!s) return;
  let i = s.hooks[n];
  if (!i) return;
  for (let a of i)
    if (a.matcher === r || r === "") {
      let l = a.hooks.find((c) => hKn(c.hook, o));
      if (l) return l;
    }
  return;
}
function clearSessionHooks(setAppState, sessionId) {
  (setAppState((n) => (n.sessionHooks.delete(sessionId), n)),
    T(`Cleared all session hooks for session ${sessionId}`));
}
function f6e(e) {
  return {
    add(t, n, r, o, s) {
      W8t(e, t, n, r, o, void 0, s);
    },
    remove(t, n, r) {
      removeSessionHook(e, t, n, r);
    },
    clear(t) {
      clearSessionHooks(e, t);
    },
  };
}
