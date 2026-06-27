// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gnc
// matched 2.1.88 source: src/components/tasks/RemoteSessionDetailDialog.tsx
// class=new  jaccard=0.0343  score=0.1547  fileCov=0.0422
// note: nearest: src/components/tasks/RemoteSessionDetailDialog.tsx (0.0343); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gnc = E(() => {
  Un();
  zqe();
  aXf = {
    type: "local",
    name: "recap",
    description: "Generate a one-line session recap now",
    isEnabled: () => at("tengu_sedge_lantern", !0),
    supportsNonInteractive: !1,
    thinClientDispatch: "post-text",
    load: () => Promise.resolve({
      call: iXf
    })
  }, lXf = aXf;
});
function ync(e) {
  let t = $Go.c(39),
    {
      messages: n,
      onDone: r
    } = e,
    o = Ht(uXf),
    [, s] = hnc.useState(0),
    i;
  if (t[0] !== s) i = () => s(cXf), t[0] = s, t[1] = i;else i = t[1];
  if (Gc(i, o ? 1000 : null), o) {
    let d = Date.now() - o.setAt,
      p;
    if (t[2] !== d) p = Yi(d, {
      mostSignificantOnly: !0
    }), t[2] = d, t[3] = p;else p = t[3];
    let f = p,
      m = Gb() - o.tokensAtStart,
      g;
    if (t[4] !== m) g = gl(m), t[4] = m, t[5] = g;else g = t[5];
    let h = g,
      y = `running ${f}`,
      b;
    if (t[6] !== o.iterations) b = o.iterations > 0 && `${o.iterations} ${bn(o.iterations, "turn")}`, t[6] = o.iterations, t[7] = b;else b = t[7];
    let _ = `${h} tokens`,
      S;
    if (t[8] !== y || t[9] !== b || t[10] !== _) S = [y, b, _].filter(Boolean), t[8] = y, t[9] = b, t[10] = _, t[11] = S;else S = t[11];
    let v = S.join(" \xB7 "),
      C;
    if (t[12] === Symbol.for("react.memo_cache_sentinel")) C = LC.jsxs(Tn, {
      children: [LC.jsx(w, {
        children: "/goal clear to stop early"
      }), LC.jsx(ht, {
        chord: "escape",
        action: "dismiss"
      })]
    }), t[12] = C;else C = t[12];
    let x;
    if (t[13] !== o.condition) x = LC.jsx(MGo, {
      label: "Goal",
      children: o.condition
    }), t[13] = o.condition, t[14] = x;else x = t[14];
    let I;
    if (t[15] !== o.lastReason) I = o.lastReason ? LC.jsx(MGo, {
      label: "Last check",
      children: Gd(o.lastReason.trim())
    }) : null, t[15] = o.lastReason, t[16] = I;else I = t[16];
    let k;
    if (t[17] !== x || t[18] !== I) k = LC.jsxs(U, {
      flexDirection: "column",
      children: [x, I]
    }), t[17] = x, t[18] = I, t[19] = k;else k = t[19];
    let D;
    if (t[20] !== r || t[21] !== v || t[22] !== k) D = LC.jsx(zn, {
      title: `${Nfn} Goal active`,
      subtitle: v,
      onCancel: r,
      inputGuide: C,
      children: k
    }), t[20] = r, t[21] = v, t[22] = k, t[23] = D;else D = t[23];
    return D;
  }
  let a;
  if (t[24] !== n || t[25] !== r) {
    a = Symbol.for("react.early_return_sentinel");
    e: {
      let d = AIl(n);
      if (d) {
        let p = [];
        if (d.durationMs !== void 0) p.push(Yi(d.durationMs, {
          mostSignificantOnly: !0
        }));
        if (d.iterations !== void 0) p.push(`${d.iterations} ${bn(d.iterations, "turn")}`);
        if (d.tokens !== void 0) p.push(`${gl(d.tokens)} tokens`);
        let f;
        if (t[27] === Symbol.for("react.memo_cache_sentinel")) f = LC.jsxs(w, {
          children: [LC.jsx(Hs, {
            status: "success",
            withSpace: !0
          }), "Goal achieved"]
        }), t[27] = f;else f = t[27];
        let m = p.join(" \xB7 "),
          g;
        if (t[28] === Symbol.for("react.memo_cache_sentinel")) g = LC.jsxs(Tn, {
          children: [LC.jsx(w, {
            children: "/goal <condition> to set another"
          }), LC.jsx(ht, {
            chord: "escape",
            action: "dismiss"
          })]
        }), t[28] = g;else g = t[28];
        let h;
        if (t[29] !== d) h = LC.jsx(MGo, {
          label: "Goal",
          children: d.condition
        }), t[29] = d, t[30] = h;else h = t[30];
        let y;
        if (t[31] !== r || t[32] !== m || t[33] !== h) y = LC.jsx(zn, {
          title: f,
          subtitle: m,
          color: "success",
          onCancel: r,
          inputGuide: g,
          children: h
        }), t[31] = r, t[32] = m, t[33] = h, t[34] = y;else y = t[34];
        a = y;
        break e;
      }
    }
    t[24] = n, t[25] = r, t[26] = a;
  } else a = t[26];
  if (a !== Symbol.for("react.early_return_sentinel")) return a;
  let l, c;
  if (t[35] === Symbol.for("react.memo_cache_sentinel")) l = LC.jsx(ht, {
    chord: "escape",
    action: "dismiss"
  }), c = LC.jsx(Fl, {
    hint: "/goal <condition> to set one",
    children: "No goal set"
  }), t[35] = l, t[36] = c;else l = t[35], c = t[36];
  let u;
  if (t[37] !== r) u = LC.jsx(zn, {
    title: "Goal",
    onCancel: r,
    inputGuide: l,
    children: c
  }), t[37] = r, t[38] = u;else u = t[38];
  return u;
}
function cXf(e) {
  return e + 1;
}
function uXf(e) {
  return e.activeGoal;
}
function MGo(e) {
  let t = $Go.c(7),
    {
      label: n,
      children: r
    } = e,
    o;
  if (t[0] !== n) o = LC.jsx(U, {
    flexShrink: 0,
    children: LC.jsxs(w, {
      dimColor: !0,
      children: [n, ": "]
    })
  }), t[0] = n, t[1] = o;else o = t[1];
  let s;
  if (t[2] !== r) s = LC.jsx(U, {
    flexGrow: 1,
    children: LC.jsx(w, {
      wrap: "wrap",
      children: r
    })
  }), t[2] = r, t[3] = s;else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s) i = LC.jsxs(U, {
    flexDirection: "row",
    children: [o, s]
  }), t[4] = o, t[5] = s, t[6] = i;else i = t[6];
  return i;
}
var $Go, hnc, LC;