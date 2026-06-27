// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Oc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0104  score=0.6236  fileCov=0.0105
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _Oc = E(() => {
  kt();
  fd();
  sG();
  vq();
  _k();
  q9t();
});
var HOc = {};
_t(HOc, {
  loadSettingsFromFlag: () => loadSettingsFromFlag,
  loadSettingSourcesFromFlag: () => loadSettingSourcesFromFlag,
  loadManagedSettingsFromFlag: () => loadManagedSettingsFromFlag,
  eagerLoadSettings: () => eagerLoadSettings,
});
function loadSettingsFromFlag(e) {
  try {
    let t = e.trim(),
      n = t.startsWith("{") && t.endsWith("}"),
      r;
    if (n) {
      let o = Ia(t);
      if (!o) return ws("Error: Invalid JSON provided to --settings");
      let s = JSON.stringify(o).replace(
        /[\u007f-\u009f]/g,
        (i) => "\\u" + i.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"),
      );
      ((r = Jst("claude-settings", ".json", {
        contentHash: s,
      })),
        hbr(s));
    } else {
      let { resolvedPath: o } = jd(qt(), e);
      try {
        bOc.readFileSync(o, "utf8");
      } catch (s) {
        if (wn(s)) return ws(`Error: Settings file not found: ${o}`);
        throw s;
      }
      r = o;
    }
    (gbr(r), n_());
  } catch (t) {
    if (t instanceof Error)
      T(`Error processing --settings: ${be(t)}`, {
        level: "error",
      });
    return ws(`Error processing settings: ${be(t)}`);
  }
}
function loadManagedSettingsFromFlag(e) {
  let t = Ia(e.trim(), false);
  if (!t || typeof t !== "object" || Array.isArray(t)) {
    T("--managed-settings ignored: invalid JSON object", {
      level: "warn",
    });
    return;
  }
  (bbr(t), n_());
}
function loadSettingSourcesFromFlag(e) {
  try {
    let t = gvs(e);
    (Pbr(t), n_());
  } catch (t) {
    if (t instanceof Error)
      T(`Invalid --setting-sources flag: ${be(t)}`, {
        level: "error",
      });
    return ws(`Error processing --setting-sources: ${be(t)}`);
  }
}
function eagerLoadSettings() {
  let e = performance.now();
  pa("eagerLoadSettings_start");
  let t = KCn("--settings");
  if (t) loadSettingsFromFlag(t);
  let n = KCn("--managed-settings");
  if (n) loadManagedSettingsFromFlag(n);
  let r = KCn("--setting-sources");
  if (r !== void 0) loadSettingSourcesFromFlag(r);
  (pa("eagerLoadSettings_end"), Zc("settings_load_ms", performance.now() - e, e));
}
var bOc;
