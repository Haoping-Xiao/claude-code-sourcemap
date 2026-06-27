// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mio
// matched 2.1.88 source: src/utils/model/modelOptions.ts
// class=modified  jaccard=0.2152  score=0.3357  fileCov=0.3747
// note: deminified; 13 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mio] deps: services/analytics/growthbook.ts
fio = {};
function Cap() {
  return AAn() ? " \xB7 Set by your organization" : "";
}
function getDefaultOptionForUser(e) {
  if (bo())
    return {
      value: null,
      label: "Default (recommended)",
      description: HAn(e),
    };
  let t = !td(),
    n = Uw(),
    r = e && rg(n),
    o = t || AAn() ? "" : r ? ple(true, n) : ` \xB7 ${eU(ule)}`;
  return {
    value: null,
    label: t ? "Default" : "Default (recommended)",
    description: `Use the default model (currently ${FPt(n)})${o}${Cap()}`,
  };
}
function v1n() {
  return !td() || fr() === "anthropicAws" || !_u();
}
function gio() {
  return rU(O_());
}
function getCustomSonnetOption() {
  let e = process.env.ANTHROPIC_DEFAULT_SONNET_MODEL;
  if (v1n() && e) {
    let t = Sy(e);
    return {
      value: "sonnet",
      label: process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_NAME ?? e,
      description:
        process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION ??
        `Custom Sonnet model${t ? " (1M context)" : ""}`,
      descriptionForModel: `${process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION ?? `Custom Sonnet model${t ? " with 1M context" : ""}`} (${e})`,
    };
  }
}
function getSonnet46Option() {
  let e = !td();
  return {
    value: e ? Vp().sonnet46 : "sonnet",
    label: "Sonnet",
    description: `Sonnet 4.6 \xB7 ${T1n}${e ? "" : ` \xB7 ${eU(gye)}`}`,
    descriptionForModel:
      "Sonnet 4.6 - efficient for routine tasks. Generally recommended for most coding tasks",
  };
}
function Fia() {
  let e = process.env.ANTHROPIC_DEFAULT_FABLE_MODEL;
  if (v1n() && e)
    return {
      value: "fable",
      label: process.env.ANTHROPIC_DEFAULT_FABLE_MODEL_NAME ?? e,
      description: process.env.ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION ?? "Custom Fable model",
      descriptionForModel: `${process.env.ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION ?? "Custom Fable model"} (${e})`,
    };
}
function _io() {
  let e = !td(),
    t = `Fable 5 \xB7 ${Xia}`;
  if (!eF() && jue()) t += " \xB7 Requires usage credits";
  return {
    value: e ? Vp().fable5 : "fable",
    label: "Fable",
    description: t,
    descriptionForModel: "Fable 5 - most capable for your hardest and longest-running tasks",
  };
}
function getCustomOpusOption() {
  let e = process.env.ANTHROPIC_DEFAULT_OPUS_MODEL;
  if (v1n() && e) {
    let t = Sy(e);
    return {
      value: "opus",
      label: process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME ?? e,
      description:
        process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION ??
        `Custom Opus model${t ? " (1M context)" : ""}`,
      descriptionForModel: `${process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION ?? `Custom Opus model${t ? " with 1M context" : ""}`} (${e})`,
    };
  }
}
function getOpus41Option() {
  return {
    value: Vp().opus41,
    label: "Opus 4.1",
    description: "Opus 4.1 \xB7 Legacy",
    descriptionForModel: "Opus 4.1 - legacy version",
  };
}
function xap() {
  return {
    value: !td() ? Vp().opus46 : "claude-opus-4-6",
    label: "Opus 4.6",
    description: "Opus 4.6 \xB7 Legacy",
    descriptionForModel: "Opus 4.6 - previous Opus version",
  };
}
function kap() {
  return {
    value: !td() ? Vp().opus47 : "claude-opus-4-7",
    label: "Opus 4.7",
    description: "Opus 4.7 \xB7 Legacy",
    descriptionForModel: "Opus 4.7 - previous Opus version",
  };
}
function Jia(e = false) {
  let t = !td(),
    n = ple(e, "claude-opus-4-8");
  return {
    value: t ? Vp().opus48 : "opus",
    label: "Opus",
    description: `Opus 4.8 \xB7 ${vjt}${t ? "" : n}`,
    descriptionForModel: "Opus 4.8 - best for everyday, complex tasks",
  };
}
function getSonnet46_1MOption() {
  let e = !td();
  return {
    value: e ? Vp().sonnet46 + "[1m]" : "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: `Sonnet 4.6 for long sessions${e ? "" : ` \xB7 ${eU(gye)}`}`,
    descriptionForModel:
      "Sonnet 4.6 with 1M context window - for long sessions with large codebases",
  };
}
function Rap(e = false, t = true) {
  return {
    value: !td() ? Vp().opus46 + "[1m]" : "claude-opus-4-6[1m]",
    label: "Opus 4.6 (1M context)",
    description: `Opus 4.6 for long sessions${t ? ple(e, "claude-opus-4-6") : ""}`,
    descriptionForModel: "Opus 4.6 with 1M context window - for long sessions with large codebases",
  };
}
function Lap() {
  return {
    value: !td() ? Vp().opus47 + "[1m]" : "claude-opus-4-7[1m]",
    label: "Opus 4.7 (1M context)",
    description: "Opus 4.7 for long sessions",
    descriptionForModel: "Opus 4.7 with 1M context window - for long sessions with large codebases",
  };
}
function Wia(e = false) {
  let t = !td(),
    n = ple(e, "claude-opus-4-8");
  return {
    value: t ? Vp().opus48 + "[1m]" : "opus[1m]",
    label: "Opus (1M context)",
    description: `Opus 4.8 for long sessions${t ? "" : n}`,
    descriptionForModel: "Opus 4.8 with 1M context window - for long sessions with large codebases",
  };
}
function getCustomHaikuOption() {
  let e = process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL;
  if (v1n() && e)
    return {
      value: "haiku",
      label: process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME ?? e,
      description: process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION ?? "Custom Haiku model",
      descriptionForModel: `${process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION ?? "Custom Haiku model"} (${e})`,
    };
}
function getHaiku45Option() {
  let e = !td();
  return {
    value: "haiku",
    label: "Haiku",
    description: `Haiku 4.5 \xB7 ${Sio}${e ? "" : ` \xB7 ${eU(x2r)}`}`,
    descriptionForModel:
      "Haiku 4.5 - fastest for quick answers. Lower cost but less capable than Sonnet 4.6.",
  };
}
function getHaiku35Option() {
  return {
    value: "haiku",
    label: "Haiku",
    description: `Haiku 3.5 for simple tasks${!td() ? "" : ` \xB7 ${eU(I2r)}`}`,
    descriptionForModel:
      "Haiku 3.5 - faster and lower cost, but less capable than Sonnet. Use for simple tasks.",
  };
}
function Pap() {
  return WG() === Vp().haiku45 ? getHaiku45Option() : getHaiku35Option();
}
function Eio() {
  if (Di() === "pro" && at("tengu_gypsum_kite", false)) return " \xB7 ~2\xD7 usage vs Sonnet";
  return "";
}
function Aio(e = false) {
  let t = !td();
  return {
    value: "opus",
    label: "Opus",
    description: `Opus 4.8 \xB7 ${vjt}${Eio()}${t || !e ? "" : ` \xB7 ${eU(ule)}`}`,
  };
}
function getMaxSonnet46_1MOption() {
  let e = !td(),
    t = bo() ? " \xB7 Draws from usage credits" : "";
  return {
    value: "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: `Sonnet 4.6 with 1M context${t}${!(t !== "" && !e) ? "" : ` \xB7 ${eU(gye)}`}`,
  };
}
function zia() {
  let e = !td(),
    t = bo() ? " \xB7 Draws from usage credits" : "",
    n = t !== "" && !e;
  return {
    value: "opus[1m]",
    label: "Opus (1M context)",
    description: `Opus 4.8 with 1M context${Eio()}${t}${!n ? "" : ` \xB7 ${eU(ule)}`}`,
  };
}
function Zia(e = false, t = false) {
  let n = !td(),
    r = ple(t, "claude-opus-4-8");
  return {
    value: n ? Vp().opus48 + "[1m]" : "opus[1m]",
    label: "Opus (1M context)",
    description: `Opus 4.8 with 1M context \xB7 ${vjt}${Eio()}${n || !e ? "" : r}`,
    descriptionForModel: "Opus 4.8 with 1M context - best for everyday, complex tasks",
  };
}
function eaa(e = false, t = false) {
  return {
    ...Zia(e, t),
    label: "Opus",
  };
}
function getOpusPlanOption() {
  return {
    value: "opusplan",
    label: "Opus Plan Mode",
    description: "Use Opus in plan mode, Sonnet otherwise",
  };
}
function getModelFamilyInfo(model, t) {
  let n = bio(Uw());
  if (n !== "opus" && n !== "sonnet") return model;
  let r = n === "opus" && nT();
  if (model.some((i) => i.value === n || (r && i.value === `${n}[1m]`))) return model;
  let o = bo(),
    s;
  if (n === "sonnet") {
    let i = jx();
    if (mo(i) === "claude-sonnet-4-6") s = o ? taa : getSonnet46Option();
    else {
      let a = $h(dp(i)) ?? "Sonnet";
      s = {
        value: "sonnet",
        label: "Sonnet",
        description: `${a} \xB7 ${T1n}`,
        descriptionForModel: `${a} - efficient for routine tasks`,
      };
    }
  } else if (r) s = eaa(!o, t);
  else {
    let i = O_();
    if (mo(i) === "claude-opus-4-8") s = o ? Aio(false) : Jia(t);
    else {
      let a = $h(dp(i)) ?? "Opus";
      s = {
        value: "opus",
        label: "Opus",
        description: `${a} \xB7 ${vjt}${o ? "" : ple(t, i)}`,
        descriptionForModel: `${a} - best for everyday, complex tasks`,
      };
    }
  }
  return (model.splice(model.findIndex((i) => i.value === null) + 1, 0, s), model);
}
function Oap(e = false) {
  if (bo()) {
    if (mle() || QIe() || Eye()) {
      let a = [getDefaultOptionForUser(e)];
      if (!nT() && ure() && !gio()) a.push(zia());
      if ((a.push(taa), uSe())) a.push(getMaxSonnet46_1MOption());
      return (a.push(Kia), getModelFamilyInfo(a, e));
    }
    let i = [getDefaultOptionForUser(e)];
    if (uSe()) i.push(getMaxSonnet46_1MOption());
    if (nT()) i.push(eaa());
    else if ((i.push(Aio(false)), ure() && !gio())) i.push(zia());
    return (i.push(Kia), getModelFamilyInfo(i, e));
  }
  if (td()) {
    let i = [getDefaultOptionForUser(e)],
      a = getCustomOpusOption();
    if (a !== void 0) i.push(a);
    else if (!nT() && ure() && !gio()) i.push(Wia(e));
    let l = getCustomSonnetOption();
    if (l !== void 0) i.push(l);
    else if ((i.push(getSonnet46Option()), uSe())) i.push(getSonnet46_1MOption());
    i.push(getCustomHaikuOption() ?? getHaiku45Option());
    let c = Fia();
    if (c !== void 0) Yct(i, c);
    else if (fr() === "anthropicAws" && pSe("fable5")) Yct(i, _io());
    return getModelFamilyInfo(i, e);
  }
  let t = [getDefaultOptionForUser(e)],
    n = getCustomSonnetOption();
  if (n !== void 0) t.push(n);
  else if (pSe("sonnet46")) {
    if ((t.push(getSonnet46Option()), uSe())) t.push(getSonnet46_1MOption());
  }
  let r = getCustomOpusOption();
  if (r !== void 0) t.push(r);
  else {
    if (pSe("opus41")) t.push(getOpus41Option());
    if (pSe("opus48")) {
      if ((t.push(Jia()), ure() && !rU(Vp().opus48))) t.push(Wia());
    }
    if (pSe("opus47")) {
      if ((t.push(kap()), ure() && !rU(Vp().opus47))) t.push(Lap());
    }
    if (pSe("opus46")) {
      if ((t.push(xap()), ure())) t.push(Rap(e));
    }
  }
  let o = getCustomHaikuOption();
  if (o !== void 0) t.push(o);
  else if (pSe("haiku45") || pSe("haiku35")) t.push(Pap());
  let s = Fia();
  if (s !== void 0 || pSe("fable5")) Yct(t, s ?? _io());
  return t;
}
function pSe(e) {
  let t = yc[e];
  if (t[fr()] !== null) return true;
  return Boolean(Dr().modelOverrides?.[t.firstParty]);
}
function naa(e) {
  let t = $h(e);
  if (!t) return null;
  let n = mo(e),
    r = null;
  if (n.includes("fable"))
    r = {
      alias: "Fable",
      aliasModel: tje(),
      slogan: Xia,
    };
  else if (n.includes("sonnet"))
    r = {
      alias: "Sonnet",
      aliasModel: jx(),
      slogan: T1n,
    };
  else if (n.includes("opus"))
    r = {
      alias: "Opus",
      aliasModel: O_(),
      slogan: vjt,
    };
  else if (n.includes("haiku"))
    r = {
      alias: "Haiku",
      aliasModel: WG(),
      slogan: Sio,
    };
  if (!r)
    return {
      value: e,
      label: t,
      description: `Custom model (${e})`,
    };
  let o = $h(r.aliasModel),
    s = Object.values(yc).map((a) => mo(a.firstParty)),
    i = s.indexOf(n);
  if (o && i !== -1 && i < s.indexOf(mo(r.aliasModel)) && xa(r.aliasModel))
    return {
      value: e,
      label: t,
      description: `Newer version available \xB7 select ${r.alias} for ${o}`,
    };
  return {
    value: e,
    label: t,
    description: `${r.slogan} (${e})`,
  };
}
function aLe(e = false) {
  return Xct(e).filter((t) => !t.disabled);
}
function Hio(e) {
  if (!Nap.has(Oe.CLAUDE_CODE_ENTRYPOINT ?? "")) return [];
  if (fr() !== "firstParty") return [];
  if (!_u()) return [];
  return e.filter((t) => t.disabled === true);
}
function raa() {
  return Hio(Xct());
}
function Xct(e = false) {
  let t = new Set(),
    n = getModelOptions(e).filter((i) => {
      if (i.value === null) return true;
      if (t.has(i.value))
        return (
          T(`model options: dropping duplicate row "${i.label}" (value ${i.value})`, {
            level: "warn",
          }),
          false
        );
      return (t.add(i.value), true);
    }),
    o = Fap(n).map((i) => {
      if (i.disabled === true) return i;
      try {
        let a = Nia(mo(i.value === null ? Ey() : zo(i.value)));
        if (a !== null)
          return {
            ...i,
            disabled: true,
            description: a,
          };
      } catch (a) {
        T(`model-error-overrides picker hint failed: ${a}`, {
          level: "error",
        });
      }
      return i;
    }),
    s = o.filter((i) => i.disabled === true);
  if (s.length === 0) return o;
  return [...o.filter((i) => i.disabled !== true), ...s];
}
function getModelOptions(e) {
  let t = Oap(e),
    n = process.env.ANTHROPIC_CUSTOM_MODEL_OPTION;
  if (n && !t.some((l) => l.value === n))
    t.push({
      value: n,
      label: process.env.ANTHROPIC_CUSTOM_MODEL_OPTION_NAME ?? n,
      description: process.env.ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION ?? `Custom model (${n})`,
    });
  for (let l of mAn()) if (!t.some((c) => A1n(c, l))) Yct(t, l);
  let r = fr();
  if (r === "firstParty" || r === "gateway") {
    let l = r === "gateway" || _u();
    for (let c of _ye()) {
      if (c.disabled && !l) continue;
      if (!t.some((u) => A1n(u, c))) Yct(t, c);
    }
  }
  let { availableModels: o } = jo() ?? {};
  if (o)
    for (let l of o) {
      let c = l.trim();
      if (!c.startsWith("anthropic.") || t.some((u) => u.value === c)) continue;
      t.push({
        value: c,
        label: c,
        description: "Custom model",
      });
    }
  let s = null,
    i = GG(),
    a = $2();
  if (i !== void 0 && i !== null) s = i;
  else if (a !== void 0 && a !== null) s = a;
  if (s === null || t.some((l) => l.value === s)) return iLe(t);
  else if (s === "opusplan") return iLe([...t, getOpusPlanOption()]);
  else if (H1n(s)) {
    let l = {
        value: s,
        label: "",
        description: "",
      },
      c = t.findIndex((u) => A1n(u, l));
    if (c !== -1)
      t[c] = {
        ...t[c],
        value: s,
      };
    else
      Yct(t, {
        ..._io(),
        value: s,
      });
    return iLe(t);
  } else if (s === "opus") {
    if (!td()) {
      let l = O_();
      return iLe(
        t.map((c) =>
          c.value === l
            ? {
                ...c,
                value: "opus",
              }
            : c,
        ),
      );
    }
    return iLe([
      ...t.map((l) =>
        l.value === "opus[1m]" && l.label === "Opus"
          ? {
              ...l,
              label: "Opus (1M context)",
            }
          : l,
      ),
      Aio(false),
    ]);
  } else if (s === "opus[1m]" && td()) return iLe([...t, Zia(false)]);
  else {
    let l = naa(s);
    if (l) {
      let c = t.find((u) => A1n(u, l));
      if (c)
        return iLe(
          t.map((u) =>
            u === c
              ? {
                  ...u,
                  value: s,
                }
              : u,
          ),
        );
      t.push(l);
    } else
      t.push({
        value: s,
        label: s,
        description: "Custom model",
      });
    return iLe(t);
  }
}
function Uap(e) {
  let t = Object.keys(yc);
  for (let n = t.length - 1; n >= 0; n--) {
    let r = yc[t[n]].firstParty;
    if (mo(r).includes(e) && xa(r)) return r;
  }
  return null;
}
function iLe(e) {
  if (!(jo() || {}).availableModels && v9().size === 0) return e;
  let n = new Set();
  return e.flatMap((r) => {
    if (r.value === null || xa(r.value)) return [r];
    let o = ya(r.value);
    if (!tU(o) || !td()) return [];
    let s = Uap(o);
    if (s === null) return [];
    let a = r.value !== o && ute(s) ? `${s}[1m]` : s,
      l = mo(s),
      c = a !== s;
    if (
      n.has(a) ||
      e.some(
        (d) =>
          d !== r &&
          d.value !== null &&
          (ya(d.value) !== d.value) === c &&
          mo(ya(d.value)) === l &&
          xa(d.value),
      )
    )
      return [];
    let u = naa(a);
    if (u === null) return [];
    return (n.add(a), [u]);
  });
}
function wjt(e) {
  return e.map((t) => {
    let n = t.value === null ? "default" : t.value,
      r = n === "default" ? Ey() : zo(n),
      o = Kw(r),
      s = Uot(r),
      i = rg(t.value),
      a = a_e(r);
    return {
      value: n,
      displayName: t.label,
      description: t.description,
      ...(o && {
        supportsEffort: true,
        supportedEffortLevels: xv.filter((l) => {
          if (l === "max" && !Hke(r)) return false;
          if (l === "xhigh" && !Yte(r)) return false;
          return true;
        }),
      }),
      ...(s && {
        supportsAdaptiveThinking: true,
      }),
      ...(i && {
        supportsFastMode: true,
      }),
      ...(a && {
        supportsAutoMode: true,
      }),
      ...(t.disabled && {
        disabled: true,
      }),
    };
  });
}
function A1n(e, t) {
  if (e.value === t.value) return true;
  return typeof e.value === "string" && typeof t.value === "string" && Yia(e.value) && Yia(t.value);
}
function H1n(e) {
  return e === "fable" || e === "fable[1m]" || yye(e);
}
function Yia(e) {
  if (e === "fable" || e === "fable[1m]") return true;
  return /(?:^|\.)claude-fable-5(?:[-@]\d{8})?(?:-v\d+(?::\d+)?)?(?:\[[12]m\])?$/i.test(e);
}
function Fap(e) {
  if (!xia() || eF() || eH() || !kia() || !(dSe() || Gue())) return e;
  return e.map((t) => {
    if (t.disabled === true || typeof t.value !== "string" || !H1n(t.value)) return t;
    let n = jue() ? "" : " \u2014 requires usage credits";
    return {
      ...t,
      disabled: true,
      label: "Fable (disabled)",
      description: `${t.description}${n}`,
    };
  });
}
function Yct(e, t) {
  if (!(typeof t.value === "string" && H1n(t.value))) {
    e.push(t);
    return;
  }
  let n = e.findIndex((s) => s.value === null);
  if (n === -1) {
    e.splice(0, 0, t);
    return;
  }
  let r = bio(Ey()),
    o = n + 1;
  while (o < e.length) {
    let s = e[o]?.value;
    if (typeof s !== "string") break;
    if ((r !== null && bio(s) === r) || H1n(s)) o++;
    else break;
  }
  e.splice(o, 0, t);
}
function bio(e) {
  let t = e.toLowerCase();
  if (t.includes("fable")) return "fable";
  if (t.includes("opus")) return "opus";
  if (t.includes("sonnet")) return "sonnet";
  if (t.includes("haiku")) return "haiku";
  return null;
}
var T1n = "Efficient for routine tasks",
  vjt = "Best for everyday, complex tasks",
  Sio = "Fastest for quick answers",
  Xia = "Most capable for your hardest and longest-running tasks",
  taa,
  Kia,
  Nap;
