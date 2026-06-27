// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $jo
// matched 2.1.88 source: src/components/permissions/rules/AddPermissionRules.tsx
// class=modified  jaccard=0.474  score=0.7799  fileCov=0.5472
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $jo] deps: Ye, RN
((czl = R(lt(), 1)), (ZHe = R(se(), 1)));
function optionForPermissionSaveDestination(e) {
  switch (e) {
    case "localSettings":
      return {
        label: "Project settings (local)",
        description: `Saved in ${kG("localSettings")}`,
        value: e,
      };
    case "projectSettings":
      return {
        label: "Project settings",
        description: `Checked in at ${kG("projectSettings")}`,
        value: e,
      };
    case "userSettings":
      return {
        label: "User settings",
        description: "Saved in at ~/.claude/settings.json",
        value: e,
      };
  }
}
function AddPermissionRules(e) {
  let t = uzl.c(26),
    {
      onAddRules: n,
      onCancel: r,
      ruleValues: o,
      ruleBehavior: s,
      initialContext: i,
      setToolPermissionContext: a,
    } = e,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = DRt.map(optionForPermissionSaveDestination)), (t[0] = l));
  else l = t[0];
  let c = l,
    u;
  if (t[1] !== i || t[2] !== n || t[3] !== r || t[4] !== s || t[5] !== o || t[6] !== a)
    ((u = (A) => {
      if (A === "cancel") {
        r();
        return;
      } else if (DRt.includes(A)) {
        let v = A,
          C = My(i, {
            type: "addRules",
            rules: o,
            behavior: s,
            destination: v,
          });
        (zue({
          type: "addRules",
          rules: o,
          behavior: s,
          destination: v,
        }),
          a(C));
        let x = o.map((P) => ({
            ruleValue: P,
            ruleBehavior: s,
            source: v,
          })),
          I = xo.isSandboxingEnabled() && xo.isAutoAllowBashIfSandboxedEnabled(),
          D = vnr(C, {
            sandboxAutoAllowEnabled: I,
          }).filter((P) =>
            o.some(
              (O) =>
                O.toolName === P.rule.ruleValue.toolName &&
                O.ruleContent === P.rule.ruleValue.ruleContent,
            ),
          );
        n(x, D);
      }
    }),
      (t[1] = i),
      (t[2] = n),
      (t[3] = r),
      (t[4] = s),
      (t[5] = o),
      (t[6] = a),
      (t[7] = u));
  else u = t[7];
  let d = u,
    p;
  if (t[8] !== o.length) ((p = bn(o.length, "rule")), (t[8] = o.length), (t[9] = p));
  else p = t[9];
  let f = `Add ${s} permission ${p}`,
    m;
  if (t[10] !== o) ((m = o.map(Tqf)), (t[10] = o), (t[11] = m));
  else m = t[11];
  let g;
  if (t[12] !== m)
    ((g = ime.jsx(U, {
      flexDirection: "column",
      paddingX: 2,
      children: m,
    })),
      (t[12] = m),
      (t[13] = g));
  else g = t[13];
  let h =
      o.length === 1 ? "Where should this rule be saved?" : "Where should these rules be saved?",
    y;
  if (t[14] !== h)
    ((y = ime.jsx(w, {
      children: h,
    })),
      (t[14] = h),
      (t[15] = y));
  else y = t[15];
  let b;
  if (t[16] !== d)
    ((b = ime.jsx(Sr, {
      options: c,
      onChange: d,
    })),
      (t[16] = d),
      (t[17] = b));
  else b = t[17];
  let _;
  if (t[18] !== y || t[19] !== b)
    ((_ = ime.jsxs(U, {
      flexDirection: "column",
      marginY: 1,
      children: [y, b],
    })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = _));
  else _ = t[20];
  let S;
  if (t[21] !== r || t[22] !== g || t[23] !== _ || t[24] !== f)
    ((S = ime.jsxs(zn, {
      title: f,
      onCancel: r,
      color: "permission",
      children: [g, _],
    })),
      (t[21] = r),
      (t[22] = g),
      (t[23] = _),
      (t[24] = f),
      (t[25] = S));
  else S = t[25];
  return S;
}
function Tqf(e) {
  return ime.jsxs(
    U,
    {
      flexDirection: "column",
      children: [
        ime.jsx(w, {
          bold: true,
          children: Pp(e),
        }),
        ime.jsx(wsr, {
          ruleValue: e,
        }),
      ],
    },
    Pp(e),
  );
}
var uzl, ime;
