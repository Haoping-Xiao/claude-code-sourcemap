// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jtl
// matched 2.1.88 source: src/tools/GrepTool/GrepTool.ts
// class=modified (alt of src/tools/GrepTool/GrepTool.ts)  jaccard=0.0489  score=1  fileCov=0.0489
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jtl] deps: react/cjs/react.production.js, components/VirtualMessageList.tsx, commands/add-dir/validation.ts, hooks/useTerminalSize.ts, utils/nativeInstaller/download.ts, utils/profilerBase.ts, utils/messages.ts
((Ntl = R(lt(), 1)), (XI = R(se(), 1)));
function qvo(e, t, n = 0) {
  if (t === 0)
    return {
      items: e.slice(n),
      appliedLimit: void 0,
    };
  let r = t ?? Oef,
    o = e.slice(n, n + r),
    s = e.length - n > r;
  return {
    items: o,
    appliedLimit: s ? r : void 0,
  };
}
function formatLimitInfo(appliedLimit, appliedOffset) {
  let parts = [];
  if (appliedLimit !== void 0) parts.push(`limit: ${appliedLimit}`);
  if (appliedOffset) parts.push(`offset: ${appliedOffset}`);
  return parts.join(", ");
}
var Mef,
  $ef,
  Oef = 250,
  Nef,
  L$;
