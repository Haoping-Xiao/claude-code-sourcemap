// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $pt
// matched 2.1.88 source: src/utils/plugins/walkPluginMarkdown.ts
// class=new  jaccard=0.0446  score=0.0577  fileCov=0.1648
// note: nearest: src/utils/plugins/walkPluginMarkdown.ts (0.0446); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $pt = E(() => {
  je();
  ih();
  qkp = new Set([1]), Vkp = new Set(["plugin"]), aPa = /^[ \t]*<claude-code-hint\s+([^>]*?)\s*\/>[ \t]*$/gm, zkp = /(\w+)=(?:"([^"]*)"|([^\s/>]+))/g;
  lPa = Mi(), cPa = lPa.emit;
  fPa = lPa.subscribe;
});
function gPa(e) {
  if (e === 9 || e === 10) return !1;
  return e < 32 || e >= 127 && e <= 159;
}
function sEe(e) {
  for (let t = 0; t < e.length; t++) if (gPa(e.charCodeAt(t))) return !1;
  return !0;
}
function Yv(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t += gPa(e.charCodeAt(n)) ? "\uFFFD" : e[n];
  return t;
}
function DGt(e) {
  if (Rj()) return;
  if (mPa()) return;
  let t = Dt().claudeCodeHints;
  if (t?.disabled) return;
  let n = t?.plugin ?? [];
  if (n.length >= Xkp) return;
  let r = e.value,
    {
      name: o,
      marketplace: s
    } = Qo(r);
  if (!o || !s) return;
  if (!zD(s)) return;
  if (n.includes(r)) return;
  if (b5(r)) return;
  if (GI(r)) return;
  if (hPa.has(r)) return;
  hPa.add(r), uPa(e);
}
async function yPa(e) {
  let t = e.value,
    {
      name: n,
      marketplace: r
    } = Qo(t),
    o = await EL(t);
  if (G("tengu_plugin_hint_detected", {
    _PROTO_plugin_name: n ?? "",
    _PROTO_marketplace_name: r ?? "",
    result: We(o ? "passed" : "not_in_cache")
  }), !o) return T(`[hintRecommendation] ${t} not found in marketplace cache`), null;
  return {
    pluginId: t,
    pluginName: fS(o.entry),
    marketplaceName: r ?? "",
    pluginDescription: o.entry.description,
    sourceCommand: e.sourceCommand
  };
}
function _Pa(e) {
  gn(t => {
    let n = t.claudeCodeHints?.plugin ?? [];
    if (n.includes(e)) return t;
    return {
      ...t,
      claudeCodeHints: {
        ...t.claudeCodeHints,
        plugin: [...n, e]
      }
    };
  });
}
function bPa() {
  gn(e => {
    if (e.claudeCodeHints?.disabled) return e;
    return {
      ...e,
      claudeCodeHints: {
        ...e.claudeCodeHints,
        disabled: !0
      }
    };
  });
}
var Xkp = 100,
  hPa;