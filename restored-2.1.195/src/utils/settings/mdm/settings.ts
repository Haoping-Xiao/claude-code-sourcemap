// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ymn
// matched 2.1.88 source: src/utils/settings/mdm/settings.ts
// class=modified  jaccard=0.3134  score=0.718  fileCov=0.3574
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ymn = E(() => {
  mCe();
  Jws = require("child_process");
});
function x1u() {
  if (_mn) return;
  _mn = (async () => {
    let e = Date.now(),
      t = HLr() ?? cLt(),
      { mdm: n, hkcu: r, wslInherits: o } = oCs(await t);
    ((vLr = n), (wLr = r), (bmn = o));
    let s = Date.now() - e;
    if ((T(`MDM settings load completed in ${s}ms`), Object.keys(n.settings).length > 0)) {
      T(`MDM settings found: ${Object.keys(n.settings).join(", ")}`);
      try {
        In("info", "mdm_settings_loaded", {
          duration_ms: s,
          key_count: Object.keys(n.settings).length,
          error_count: n.errors.length,
        });
      } catch {}
    }
  })();
}
async function Uet() {
  if (!_mn) x1u();
  await _mn;
}
function Uae() {
  return vLr ?? xCe;
}
function kCe() {
  return wLr ?? xCe;
}
function Vee() {
  return bmn;
}
function nCs(e, t, n) {
  ((vLr = e), (wLr = t), (bmn = n));
}
async function rCs() {
  let e = await cLt();
  return oCs(e);
}
function TLr(e, t) {
  let n = Ia(e, false);
  if (!n || typeof n !== "object")
    return {
      settings: {},
      errors: [],
    };
  let { settings: r, errors: o } = vCe(n, t);
  return {
    settings: r ?? {},
    errors: o,
  };
}
function Zws(e, t = "Settings") {
  let n = e.split(/\r?\n/),
    r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    o = new RegExp(`^\\s+${r}\\s+REG_(?:EXPAND_)?SZ\\s+(.*)$`, "i");
  for (let s of n) {
    let i = s.match(o);
    if (i && i[1]) return i[1].trimEnd();
  }
  return null;
}
function oCs(e) {
  let t = [];
  if (e.plistStdouts && e.plistStdouts.length > 0) {
    let { stdout: i, label: a } = e.plistStdouts[0],
      l = TLr(i, a),
      { wslInheritsWindowsSettings: c, ...u } = l.settings;
    if (Object.keys(u).length > 0)
      return {
        mdm: l,
        hkcu: xCe,
        wslInherits: false,
      };
    t.push(...l.errors);
  }
  let n = null;
  if (e.hklmStdout) {
    let i = Zws(e.hklmStdout);
    if (i) n = TLr(i, `Registry: ${Ifn}\\${vet}`);
  }
  if (n) t.push(...n.errors);
  let r =
      t.length > 0
        ? {
            settings: {},
            errors: t,
          }
        : xCe,
    o = MRt(),
    s = false;
  if (o) {
    if (((s = n?.settings.wslInheritsWindowsSettings === true || R1u()), !s))
      return {
        mdm: r,
        hkcu: xCe,
        wslInherits: false,
      };
  }
  if (n) {
    let { wslInheritsWindowsSettings: i, ...a } = n.settings;
    if (Object.keys(a).length > 0)
      return {
        mdm: n,
        hkcu: xCe,
        wslInherits: s,
      };
  }
  if (k1u(s))
    return {
      mdm: r,
      hkcu: xCe,
      wslInherits: s,
    };
  if (e.hkcuStdout) {
    let i = Zws(e.hkcuStdout);
    if (i) {
      let a = TLr(i, `Registry: ${xfn}\\${vet}`);
      if (!o || a.settings.wslInheritsWindowsSettings === true) {
        let { wslInheritsWindowsSettings: l, ...c } = a.settings;
        return {
          mdm: r,
          hkcu: {
            settings: c,
            errors: a.errors,
          },
          wslInherits: s,
        };
      }
      if (a.errors.length > 0)
        return {
          mdm: r,
          hkcu: {
            settings: {},
            errors: a.errors,
          },
          wslInherits: s,
        };
    }
  }
  return {
    mdm: r,
    hkcu: xCe,
    wslInherits: s,
  };
}
function k1u(e) {
  if (e && tCs(NO)) return true;
  return tCs(QC());
}
function eCs(e) {
  let t = sM(Ia(XC(e), false));
  if (!t || typeof t !== "object") return false;
  Dhe(t, e);
  let { wslInheritsWindowsSettings: n, ...r } = t;
  return Object.keys(r).length > 0;
}
function CLr() {
  if (!MRt() || !bmn) return "";
  let e = [];
  try {
    e.push(XC(Bae.join(NO, "managed-settings.json")));
  } catch {
    e.push("");
  }
  try {
    let t = Bae.join(NO, "managed-settings.d"),
      n = qt()
        .readdirSync(t)
        .filter(
          (r) =>
            (r.isFile() || r.isSymbolicLink()) &&
            r.name.endsWith(".json") &&
            !r.name.startsWith("."),
        )
        .map((r) => r.name)
        .sort();
    for (let r of n)
      try {
        e.push(`${r}\x00${XC(Bae.join(t, r))}`);
      } catch {
        e.push(`${r}\x00`);
      }
  } catch {}
  return e.join("\x01");
}
function R1u() {
  function e(t) {
    try {
      let n = Ia(XC(t), false);
      return (
        !!n &&
        typeof n === "object" &&
        "wslInheritsWindowsSettings" in n &&
        n.wslInheritsWindowsSettings === true
      );
    } catch {
      return false;
    }
  }
  if (e(Bae.join(NO, "managed-settings.json"))) return true;
  try {
    let t = Bae.join(NO, "managed-settings.d");
    for (let n of qt().readdirSync(t))
      if (
        (n.isFile() || n.isSymbolicLink()) &&
        n.name.endsWith(".json") &&
        !n.name.startsWith(".") &&
        e(Bae.join(t, n.name))
      )
        return true;
  } catch {}
  return false;
}
function tCs(e) {
  try {
    if (eCs(Bae.join(e, "managed-settings.json"))) return true;
  } catch {}
  try {
    let t = Bae.join(e, "managed-settings.d"),
      n = qt().readdirSync(t);
    for (let r of n) {
      if (
        !(r.isFile() || r.isSymbolicLink()) ||
        !r.name.endsWith(".json") ||
        r.name.startsWith(".")
      )
        continue;
      try {
        if (eCs(Bae.join(t, r.name))) return true;
      } catch {}
    }
  } catch {}
  return false;
}
var Bae,
  xCe,
  vLr = null,
  wLr = null,
  bmn = false,
  _mn = null;
