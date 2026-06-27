// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C4n
// matched 2.1.88 source: src/state/AppState.tsx
// class=modified  jaccard=0.1725  score=0.6543  fileCov=0.1897
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: AppStateProvider
// [unwrapped __esm module C4n] deps: utils/sessionStorage.ts, utils/swarm/backends/teammateModeSnapshot.ts, ORt, utils/config.ts, utils/debug.ts, utils/tempfile.ts, tools/FileReadTool/FileReadTool.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/plugins/loadPluginHooks.ts, utils/file.ts, utils/permissions/shellRuleMatching.ts, utils/markdownConfigLoader.ts, utils/permissions/permissionSetup.ts, utils/permissions/PermissionUpdate.ts, utils/settings/applySettingsChange.ts, utils/fsOperations.ts, utils/settings/changeDetector.ts, utils/settings/settings.ts
nNa = require("path");
function AppStateProvider(t0) {
  let t = oNa.c(23),
    { children: n, initialState: r, onChangeAppState: o } = t0;
  if (jre.useContext(rNa))
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  let i;
  if (t[0] !== r || t[1] !== o) ((i = () => uL(r ?? y6(), o)), (t[0] = r), (t[1] = o), (t[2] = i));
  else i = t[2];
  let [store] = jre.useState(i),
    l,
    c;
  if (t[3] !== store)
    ((l = () => {
      let S = () => E4n(store.getState().tasks),
        A = Ci(S);
      return () => {
        (S(), A());
      };
    }),
      (c = [store]),
      (t[3] = store),
      (t[4] = l),
      (t[5] = c));
  else ((l = t[4]), (c = t[5]));
  jre.useEffect(l, c);
  let u, d;
  if (t[6] !== store)
    ((u = () => (yJe(() => store.getState().mcp.clients), nMp)),
      (d = [store]),
      (t[6] = store),
      (t[7] = u),
      (t[8] = d));
  else ((u = t[7]), (d = t[8]));
  jre.useEffect(u, d);
  let p;
  if (t[9] !== store.setState)
    ((p = () => A4n(store.setState)), (t[9] = store.setState), (t[10] = p));
  else p = t[10];
  let f;
  if (t[11] !== store) ((f = [store]), (t[11] = store), (t[12] = f));
  else f = t[12];
  jre.useEffect(p, f);
  let m;
  if (t[13] !== store.setState)
    ((m = (S) => v4n(S, store.setState)), (t[13] = store.setState), (t[14] = m));
  else m = t[14];
  let g = jre.useEffectEvent(m);
  Ift(g);
  let h;
  if (t[15] !== g)
    ((h = () => {
      w4n(() => g("policySettings"));
    }),
      (t[15] = g),
      (t[16] = h));
  else h = t[16];
  let y;
  if (t[17] === Symbol.for("react.memo_cache_sentinel")) ((y = []), (t[17] = y));
  else y = t[17];
  jre.useEffect(h, y);
  let b;
  if (t[18] !== n)
    ((b = NWt.jsx(J1a, {
      children: NWt.jsx(tMp, {
        children: n,
      }),
    })),
      (t[18] = n),
      (t[19] = b));
  else b = t[19];
  let _;
  if (t[20] !== store || t[21] !== b)
    ((_ = NWt.jsx(rNa.Provider, {
      value: true,
      children: NWt.jsx(vat.Provider, {
        value: store,
        children: b,
      }),
    })),
      (t[20] = store),
      (t[21] = b),
      (t[22] = _));
  else _ = t[22];
  return _;
}
function nMp() {
  return yJe(void 0);
}
var oNa, sNa, jre, NWt, tMp, rNa;
