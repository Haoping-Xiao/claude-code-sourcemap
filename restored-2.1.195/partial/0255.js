// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DAr
// matched 2.1.88 source: node_modules/zod/v4/core/errors.js
// class=partial  jaccard=0.153  score=1  fileCov=0.153
// note: low-confidence suggestion: node_modules/zod/v4/core/errors.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DAr = E(() => {
  _Qe();
  ep();
  Hxt = Kr("$ZodError", las), EQe = Kr("$ZodError", las, {
    Parent: Error
  });
});
var gan = e => (t, n, r, o) => {
    let s = r ? Object.assign(r, {
        async: !1
      }) : {
        async: !1
      },
      i = t._zod.run({
        value: n,
        issues: []
      }, s);
    if (i instanceof Promise) throw new nhe();
    if (i.issues.length) {
      let a = new (o?.Err ?? e)(i.issues.map(l => GV(l, s, h0())));
      throw pan(a, o?.callee), a;
    }
    return i.value;
  },
  $Ue,
  han = e => async (t, n, r, o) => {
    let s = r ? Object.assign(r, {
        async: !0
      }) : {
        async: !0
      },
      i = t._zod.run({
        value: n,
        issues: []
      }, s);
    if (i instanceof Promise) i = await i;
    if (i.issues.length) {
      let a = new (o?.Err ?? e)(i.issues.map(l => GV(l, s, h0())));
      throw pan(a, o?.callee), a;
    }
    return i.value;
  },
  OUe,
  yan = e => (t, n, r) => {
    let o = r ? {
        ...r,
        async: !1
      } : {
        async: !1
      },
      s = t._zod.run({
        value: n,
        issues: []
      }, o);
    if (s instanceof Promise) throw new nhe();
    return s.issues.length ? {
      success: !1,
      error: new (e ?? Hxt)(s.issues.map(i => GV(i, o, h0())))
    } : {
      success: !0,
      data: s.value
    };
  },
  Awe,
  _an = e => async (t, n, r) => {
    let o = r ? Object.assign(r, {
        async: !0
      }) : {
        async: !0
      },
      s = t._zod.run({
        value: n,
        issues: []
      }, o);
    if (s instanceof Promise) s = await s;
    return s.issues.length ? {
      success: !1,
      error: new e(s.issues.map(i => GV(i, o, h0())))
    } : {
      success: !0,
      data: s.value
    };
  },
  Hwe;