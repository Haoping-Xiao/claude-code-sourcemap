// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uo
// matched 2.1.88 source: src/context/notifications.tsx
// class=partial  jaccard=0.2398  score=1  fileCov=0.2398
// note: low-confidence suggestion: src/context/notifications.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uo = E(() => {
  A0e = R(rt(), 1), vat = A0e.createContext(null);
});
function iUt(e, t) {
  let n = e.current?.key === t,
    r = e.queue.some(s => s.key === t),
    o = e.pinned.some(s => s.key === t);
  if (!n && !r && !o) return e;
  return {
    current: n ? null : e.current,
    queue: e.queue.filter(s => s.key !== t),
    pinned: o ? e.pinned.filter(s => s.key !== t) : e.pinned
  };
}
function zLn({
  children: e
}) {
  let t = S8.useRef({
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    }
  }).current;
  return oqi.jsx(rqi.Provider, {
    value: t,
    children: e
  });
}
function Li() {
  let e = Dc(),
    t = Ho(),
    n = ks(),
    r = S8.useContext(rqi),
    o = S8.useRef({
      clearTimer: {
        current: null
      },
      mountCount: {
        current: 0
      }
    }).current,
    {
      clearTimer: s,
      mountCount: i
    } = r ?? o,
    a = S8.useCallback(() => {
      t(u => {
        let d = QWd(u.notifications.queue);
        if (u.notifications.current !== null || !d) return u;
        let p = d.key;
        return s.current?.(), s.current = n.setTimeout(() => {
          s.current = null, t(f => {
            if (f.notifications.current?.key !== p) return f;
            return {
              ...f,
              notifications: {
                ...f.notifications,
                current: null
              }
            };
          }), a();
        }, d.timeoutMs ?? JJr), {
          ...u,
          notifications: {
            ...u.notifications,
            queue: u.notifications.queue.filter(f => f !== d),
            current: d
          }
        };
      });
    }, [t, s, n]),
    l = S8.useCallback(u => {
      if (u.pinned) {
        t(d => {
          if (d.notifications.pinned.some(p => p.key === u.key)) return d;
          return {
            ...d,
            notifications: {
              ...d.notifications,
              pinned: [...d.notifications.pinned, u]
            }
          };
        });
        return;
      }
      if (u.priority === "immediate") {
        if (s.current) s.current(), s.current = null;
        s.current = n.setTimeout(() => {
          s.current = null, t(d => {
            if (d.notifications.current?.key !== u.key) return d;
            return {
              ...d,
              notifications: {
                ...d.notifications,
                queue: d.notifications.queue.filter(p => !u.invalidates?.includes(p.key)),
                current: null
              }
            };
          }), a();
        }, u.timeoutMs ?? JJr), t(d => ({
          ...d,
          notifications: {
            ...d.notifications,
            current: u,
            queue: [...(d.notifications.current ? [d.notifications.current] : []), ...d.notifications.queue].filter(p => nqi(p, u))
          }
        }));
        return;
      }
      t(d => {
        if (u.fold) {
          if (d.notifications.current?.key === u.key) {
            let h = u.fold(d.notifications.current, u);
            if (s.current) s.current(), s.current = null;
            let y = h.key;
            return s.current = n.setTimeout(() => {
              s.current = null, t(b => {
                if (b.notifications.current?.key !== y) return b;
                return {
                  ...b,
                  notifications: {
                    ...b.notifications,
                    current: null
                  }
                };
              }), a();
            }, h.timeoutMs ?? JJr), {
              ...d,
              notifications: {
                ...d.notifications,
                current: h
              }
            };
          }
          let g = d.notifications.queue.findIndex(h => h.key === u.key);
          if (g !== -1) {
            let h = u.fold(d.notifications.queue[g], u),
              y = [...d.notifications.queue];
            return y[g] = h, {
              ...d,
              notifications: {
                ...d.notifications,
                queue: y
              }
            };
          }
        }
        if (!(!new Set(d.notifications.queue.map(g => g.key)).has(u.key) && d.notifications.current?.key !== u.key)) return d;
        let m = d.notifications.current !== null && u.invalidates?.includes(d.notifications.current.key);
        if (m && s.current) s.current(), s.current = null;
        return {
          ...d,
          notifications: {
            ...d.notifications,
            current: m ? null : d.notifications.current,
            queue: [...d.notifications.queue.filter(g => nqi(g, u)), u]
          }
        };
      }), a();
    }, [t, a, s, n]),
    c = S8.useCallback(u => {
      t(d => {
        let p = iUt(d.notifications, u);
        if (p === d.notifications) return d;
        if (d.notifications.current?.key === u && s.current) s.current(), s.current = null;
        return {
          ...d,
          notifications: p
        };
      }), a();
    }, [t, a, s]);
  return S8.useEffect(() => {
    if (i.current++, e.getState().notifications.queue.length > 0) a();
    return () => {
      if (i.current--, i.current === 0 && s.current) s.current(), s.current = null;
    };
  }, []), {
    addNotification: l,
    removeNotification: c
  };
}
function nqi(e, t) {
  return (e.priority !== "immediate" || e.requeueOnPreempt === true) && !t.invalidates?.includes(e.key);
}
function QWd(e) {
  if (e.length === 0) return;
  return e.reduce((t, n) => sUt[n.priority] < sUt[t.priority] ? n : t);
}
var S8,
  oqi,
  JJr = 8000,
  rqi,
  sUt;