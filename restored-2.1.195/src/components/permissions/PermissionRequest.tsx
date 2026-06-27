// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aKo
// matched 2.1.88 source: src/components/permissions/PermissionRequest.tsx
// class=modified  jaccard=0.036  score=0.1333  fileCov=0.0471
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var aKo = E(() => {
  W4o();
  Y8o();
  DAc();
  Ed();
  MAc();
  QAc();
  B8n();
  cHc();
  pHc();
  U8n();
  ovo();
  Qpo();
  hNe();
  gHc();
  $zo();
  GNn();
  svo();
  ivo();
  AHc();
  put();
  F8n();
  UTo();
  wHc();
  Zvo();
  nKo();
  MHc();
  y6n();
  ewo();
  NHc();
  BKt();
  FHc();
  two();
  WHc();
  nwo();
  ((oTc = R(lt(), 1)),
    (sTc = R(rt(), 1)),
    (VP = R(se(), 1)),
    (nTc = (eTc(), ro(ZHc)).WorkflowPermissionDialog),
    (xpr = (l0o(), ro(a0o)).workflowPermissionDialog));
  if (tTc) {
    let e = tTc;
    oKo = ({ payload: t, answer: n }) =>
      VP.jsx(e, {
        payload: t,
        answer: n,
      });
  }
  if (nTc) {
    let e = nTc;
    sKo = ({ payload: t, answer: n }) =>
      VP.jsx(e, {
        payload: t,
        answer: n,
      });
  }
  ((iKo = {
    [Vht.kind]: "modal",
  }),
    (iTc = {
      [kMe.kind]: jme,
      [Q9t.kind]: jme,
      [J9t.kind]: jme,
      [X9t.kind]: jme,
      [fMe.kind]: jme,
      [y8e.kind]: jme,
      [D9t.kind]: "Claude Code wants to enter plan mode",
      [Vht.kind]: "Claude Code needs your approval for the plan",
      [Y9t.kind]: jme,
      [_8e.kind]: jme,
      ...{
        [LQ.kind]: "Session paused",
      },
      [ySe.kind]: "Session paused",
      [L9t.kind]: jme,
      ...(Ipr && {
        [Ipr.kind]: "Claude needs your approval for a review artifact",
      }),
      ...(xpr && {
        [xpr.kind]: jme,
      }),
    }));
  lTc = {
    [x8n.kind]: J_m,
    [GFn.kind]: Q_m,
    [But.kind]: Z_m,
    [kMe.kind]: ebm,
    [Q9t.kind]: tbm,
    [J9t.kind]: nbm,
    [X9t.kind]: rbm,
    [fMe.kind]: obm,
    [y8e.kind]: sbm,
    [D9t.kind]: ibm,
    [Vht.kind]: abm,
    [Y9t.kind]: lbm,
    [_8e.kind]: cbm,
    ...{
      [LQ.kind]: ubm,
    },
    [ySe.kind]: dbm,
    [L9t.kind]: pbm,
    ...(oKo &&
      Ipr && {
        [Ipr.kind]: oKo,
      }),
    ...(sKo &&
      xpr && {
        [xpr.kind]: sKo,
      }),
  };
});
function lKo(e) {
  let t = mtn.c(14),
    { channel: n, variant: r, components: o, layouts: s, notifications: i } = e,
    a = r === void 0 ? "inline" : r,
    l = o === void 0 ? lTc : o,
    c = s === void 0 ? iKo : s,
    u = i === void 0 ? iTc : i;
  cKo(n);
  let d = xAc();
  if (!d) return null;
  if ((c[d.kind] ?? "inline") !== a) return null;
  let f = u[d.kind],
    m = l[d.kind];
  if (!m) return (w3.dismiss(d.id), null);
  let g;
  if (t[0] !== f || t[1] !== d.id)
    ((g =
      f !== void 0 &&
      ftn.jsx(fbm, {
        dialogId: d.id,
        message: f,
      })),
      (t[0] = f),
      (t[1] = d.id),
      (t[2] = g));
  else g = t[2];
  let h;
  if (t[3] !== d.id || t[4] !== d.swappedAt)
    ((h = (_) => {
      if (d.swappedAt !== void 0 && Date.now() - d.swappedAt < 150) return;
      w3.answer(d.id, _);
    }),
      (t[3] = d.id),
      (t[4] = d.swappedAt),
      (t[5] = h));
  else h = t[5];
  let y;
  if (t[6] !== m || t[7] !== h || t[8] !== d.payload)
    ((y = ftn.jsx(m, {
      payload: d.payload,
      answer: h,
    })),
      (t[6] = m),
      (t[7] = h),
      (t[8] = d.payload),
      (t[9] = y));
  else y = t[9];
  let b;
  if (t[10] !== g || t[11] !== y || t[12] !== d.id)
    ((b = ftn.jsxs(
      U,
      {
        flexDirection: "column",
        width: "100%",
        children: [g, y],
      },
      d.id,
    )),
      (t[10] = g),
      (t[11] = y),
      (t[12] = d.id),
      (t[13] = b));
  else b = t[13];
  return b;
}
function fbm(e) {
  let t = mtn.c(4),
    { dialogId: n, message: r } = e;
  ben(r, "permission_prompt");
  let o = Dyt(),
    s,
    i;
  if (t[0] !== o || t[1] !== n)
    ((s = () => {
      if (cTc === n) return;
      ((cTc = n), o());
    }),
      (i = [o, n]),
      (t[0] = o),
      (t[1] = n),
      (t[2] = s),
      (t[3] = i));
  else ((s = t[2]), (i = t[3]));
  return (kpr.useEffect(s, i), null);
}
function mbm(e) {
  let t = mtn.c(5),
    n = o7e(),
    r = hpr(),
    o,
    s;
  if (t[0] !== e || t[1] !== n || t[2] !== r)
    ((o = () => {
      if (!e || !n || r === null) return;
      G("tengu_dialoghost_suppressed", {
        reason: $e(r),
      });
    }),
      (s = [e, n, r]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s));
  else ((o = t[3]), (s = t[4]));
  kpr.useEffect(o, s);
}
function cKo(e) {
  let t = mtn.c(3);
  mbm(e !== void 0);
  let n, r;
  if (t[0] !== e)
    ((n = () => {
      if (!e) return;
      let o = new Set(),
        s = e.subscribe((c) => {
          (o.add(c.id), w3.open(c));
        }),
        i = e.onCancel(gbm),
        a = e.onUpdate((c) => {
          let { id: u, payload: d } = c;
          if (o.has(u)) w3.update(u, d);
        }),
        l = w3.onClosed((c) => {
          if (!o.delete(c.id)) return;
          e.reply(
            c.type === "answered"
              ? {
                  id: c.id,
                  result: c.result,
                }
              : {
                  id: c.id,
                  cancelled: true,
                },
          );
        });
      return () => {
        (s(), i(), a(), l());
        for (let c of o)
          (w3.dismiss(c),
            e.reply({
              id: c,
              cancelled: true,
            }));
        o.clear();
      };
    }),
      (r = [e]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r));
  else ((n = t[1]), (r = t[2]));
  kpr.useEffect(n, r);
}
function gbm(e) {
  w3.dismiss(e);
}
var mtn, kpr, ftn, cTc;
