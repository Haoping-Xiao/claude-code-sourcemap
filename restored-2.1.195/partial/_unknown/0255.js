// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DAr
// matched 2.1.88 source: node_modules/zod/v4/core/parse.js
// class=partial  jaccard=0.2029  score=0.6254  fileCov=0.2309
// note: low-confidence suggestion: node_modules/zod/v4/core/parse.js; 0 renamed
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
        async: false
      }) : {
        async: false
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
        async: true
      }) : {
        async: true
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
        async: false
      } : {
        async: false
      },
      s = t._zod.run({
        value: n,
        issues: []
      }, o);
    if (s instanceof Promise) throw new nhe();
    return s.issues.length ? {
      success: false,
      error: new (e ?? Hxt)(s.issues.map(i => GV(i, o, h0())))
    } : {
      success: true,
      data: s.value
    };
  },
  Awe,
  _an = e => async (t, n, r) => {
    let o = r ? Object.assign(r, {
        async: true
      }) : {
        async: true
      },
      s = t._zod.run({
        value: n,
        issues: []
      }, o);
    if (s instanceof Promise) s = await s;
    return s.issues.length ? {
      success: false,
      error: new e(s.issues.map(i => GV(i, o, h0())))
    } : {
      success: true,
      data: s.value
    };
  },
  Hwe;