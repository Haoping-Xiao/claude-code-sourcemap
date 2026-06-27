// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pqi
// matched 2.1.88 source: src/keybindings/loadUserBindings.ts
// class=modified  jaccard=0.5315  score=0.6698  fileCov=0.7203
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pqi = E(() => {
  Xr();
  sr();
  JLn();
  QLn();
  a5d = ve(() =>
    H.object({
      context: H.string(),
      bindings: H.record(H.string(), H.string().nullable()),
    }),
  );
  dqi = Cat;
});
function E8() {
  return at("tengu_keybinding_customization_release", true);
}
function _5d() {
  let e = {
    bindings: null,
    warnings: [],
    watcher: null,
    initialized: false,
    disposed: false,
    lastCustomBindingsLogDate: null,
    changed: Mi(),
    [Symbol.dispose]() {
      if (((e.disposed = true), e.watcher)) (e.watcher.close(), (e.watcher = null));
      e.changed.clear();
    },
  };
  return e;
}
function gqi(e, t) {
  let n = new Date().toISOString().slice(0, 10);
  if (e.lastCustomBindingsLogDate === n) return;
  ((e.lastCustomBindingsLogDate = n),
    G("tengu_custom_keybindings_loaded", {
      user_binding_count: t,
    }));
}
function rbe() {
  return tDn.join(tr(), "keybindings.json");
}
function sQr() {
  return XLn(wat);
}
async function b5d(e) {
  let t = sQr();
  if (!E8() || lc("keybindings"))
    return {
      bindings: t,
      warnings: [],
    };
  let n = rbe();
  try {
    let r = await eDn.readFile(n, "utf-8"),
      o = Ft(r),
      s;
    if (typeof o === "object" && o !== null && "bindings" in o) s = o.bindings;
    else
      return (
        T('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'),
        Le("keybinding_load_user_config", "keybinding_config_invalid_format"),
        {
          bindings: t,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: 'keybindings.json must have a "bindings" array',
              suggestion: 'Use format: { "bindings": [ ... ] }',
            },
          ],
        }
      );
    if (!ZLn(s)) {
      let u = !Array.isArray(s)
          ? '"bindings" must be an array'
          : "keybindings.json contains invalid block structure",
        d = !Array.isArray(s)
          ? 'Set "bindings" to an array of keybinding blocks'
          : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (
        T(`[keybindings] Invalid keybindings.json: ${u}`),
        Le("keybinding_load_user_config", "keybinding_config_invalid_structure"),
        {
          bindings: t,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: u,
              suggestion: d,
            },
          ],
        }
      );
    }
    let i = XLn(s);
    T(`[keybindings] Loaded ${i.length} user bindings from ${n}`);
    let a = [...t, ...i];
    gqi(e, i.length);
    let c = [...rQr(r), ...oQr(s, a)];
    if (c.length > 0) T(`[keybindings] Found ${c.length} validation issue(s)`);
    return (
      xe("keybinding_load_user_config"),
      {
        bindings: a,
        warnings: c,
      }
    );
  } catch (r) {
    if (wn(r))
      return (
        xe("keybinding_load_user_config"),
        {
          bindings: t,
          warnings: [],
        }
      );
    return (
      T(`[keybindings] Error loading ${n}: ${be(r)}`),
      Le("keybinding_load_user_config", "keybinding_config_parse_error"),
      {
        bindings: t,
        warnings: [
          {
            type: "parse_error",
            severity: "error",
            message: `Failed to parse keybindings.json: ${be(r)}`,
          },
        ],
      }
    );
  }
}
function nDn(e) {
  if (e.bindings) return e.bindings;
  return lUt(e).bindings;
}
function lUt(e) {
  if (e.bindings)
    return {
      bindings: e.bindings,
      warnings: e.warnings,
    };
  let t = sQr();
  if (!E8() || lc("keybindings"))
    return (
      (e.bindings = t),
      (e.warnings = []),
      {
        bindings: e.bindings,
        warnings: e.warnings,
      }
    );
  let n = rbe();
  try {
    let r = mqi.readFileSync(n, "utf-8"),
      o = Ft(r),
      s;
    if (typeof o === "object" && o !== null && "bindings" in o) s = o.bindings;
    else
      return (
        Le("keybinding_load_user_config", "keybinding_config_invalid_format"),
        (e.bindings = t),
        (e.warnings = [
          {
            type: "parse_error",
            severity: "error",
            message: 'keybindings.json must have a "bindings" array',
            suggestion: 'Use format: { "bindings": [ ... ] }',
          },
        ]),
        {
          bindings: e.bindings,
          warnings: e.warnings,
        }
      );
    if (!ZLn(s)) {
      let l = !Array.isArray(s)
          ? '"bindings" must be an array'
          : "keybindings.json contains invalid block structure",
        c = !Array.isArray(s)
          ? 'Set "bindings" to an array of keybinding blocks'
          : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (
        Le("keybinding_load_user_config", "keybinding_config_invalid_structure"),
        (e.bindings = t),
        (e.warnings = [
          {
            type: "parse_error",
            severity: "error",
            message: l,
            suggestion: c,
          },
        ]),
        {
          bindings: e.bindings,
          warnings: e.warnings,
        }
      );
    }
    let i = XLn(s);
    (T(`[keybindings] Loaded ${i.length} user bindings from ${n}`),
      (e.bindings = [...t, ...i]),
      gqi(e, i.length));
    let a = rQr(r);
    if (((e.warnings = [...a, ...oQr(s, e.bindings)]), e.warnings.length > 0))
      T(`[keybindings] Found ${e.warnings.length} validation issue(s)`);
    return (
      xe("keybinding_load_user_config"),
      {
        bindings: e.bindings,
        warnings: e.warnings,
      }
    );
  } catch (r) {
    if (wn(r))
      return (
        xe("keybinding_load_user_config"),
        (e.bindings = t),
        (e.warnings = []),
        {
          bindings: e.bindings,
          warnings: e.warnings,
        }
      );
    return (
      T(`[keybindings] Error loading ${n}: ${be(r)}`),
      Le("keybinding_load_user_config", "keybinding_config_parse_error"),
      (e.bindings = t),
      (e.warnings = [
        {
          type: "parse_error",
          severity: "error",
          message: `Failed to parse keybindings.json: ${be(r)}`,
        },
      ]),
      {
        bindings: e.bindings,
        warnings: e.warnings,
      }
    );
  }
}
async function hqi(e) {
  if (e.initialized || e.disposed) return;
  if (!E8() || lc("keybindings")) {
    T("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let t = rbe(),
    n = tDn.dirname(t);
  try {
    if (!(await eDn.stat(n)).isDirectory()) {
      (T(`[keybindings] Not watching: ${n} is not a directory`),
        It("keybinding_watcher_init", "watch_dir_inaccessible"));
      return;
    }
  } catch {
    (T(`[keybindings] Not watching: ${n} does not exist`),
      It("keybinding_watcher_init", "watch_dir_inaccessible"));
    return;
  }
  ((e.initialized = true),
    T(`[keybindings] Watching for changes to ${t}`),
    (e.watcher = S1.watch(t, {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: h5d,
        pollInterval: y5d,
      },
      ignorePermissionErrors: true,
      usePolling: true,
      interval: 2000,
      atomic: true,
    })),
    e.watcher.on("add", (r) => fqi(e, r)),
    e.watcher.on("change", (r) => fqi(e, r)),
    e.watcher.on("unlink", (r) => S5d(e, r)),
    e.watcher.on("error", (r) =>
      T(`[keybindings] watcher error: ${be(r)}`, {
        level: "warn",
      }),
    ),
    Ci(e),
    xe("keybinding_watcher_init"));
}
async function fqi(e, t) {
  T(`[keybindings] Detected change to ${t}`);
  try {
    let n = await b5d(e);
    ((e.bindings = n.bindings),
      (e.warnings = n.warnings),
      e.changed.emit(n),
      xe("keybinding_hot_reload"));
  } catch (n) {
    (T(`[keybindings] Error reloading: ${be(n)}`),
      It("keybinding_hot_reload", "keybinding_reload_failed"));
  }
}
function S5d(e, t) {
  T(`[keybindings] Detected deletion of ${t}`);
  let n = sQr();
  ((e.bindings = n),
    (e.warnings = []),
    e.changed.emit({
      bindings: n,
      warnings: [],
    }));
}
var mqi,
  eDn,
  tDn,
  h5d = 500,
  y5d = 200,
  Gj;
