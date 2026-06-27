// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vM
// matched 2.1.88 source: src/utils/model/model.ts
// class=modified  jaccard=0.283  score=0.3564  fileCov=0.5789
// note: deminified; 64 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: swapShrinksContextWindow, strip1mTag, resolvesToDefaultModel, resolveSkillModelOverride, resolveModelAliasEnvFree, resetEnforcementWarnDedupForTests, renderModelSetting, renderModelName, renderDefaultModelSetting, parseUserSpecifiedModel, normalizeModelStringForAPI, modelDisplayString, isWindowSilentDefaultPick, isPinnedFableModel, isOpus1mMergeEnabled, isNonCustomOpusModel, isNonCustomMythosModel, isNonCustomFableModel, isMythosModelValue, isMythosFamilyOrPinnedModel, isMythosA …
function getSmallFastModel() {
  if (process.env.ANTHROPIC_SMALL_FAST_MODEL) return iI(process.env.ANTHROPIC_SMALL_FAST_MODEL);
  let e = fr(),
    t = (e === "firstParty" && (_u() || j2r())) || e === "anthropicAws";
  if (!process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL && !t) return getMainLoopModel();
  return getDefaultHaikuModel();
}
function isNonCustomFableModel(e) {
  return e === "claude-fable-5";
}
function isNonCustomMythosModel(e) {
  return e === "claude-mythos-5";
}
function swapShrinksContextWindow(e, t) {
  let n = OS();
  return nH(t, n) < nH(e, n);
}
function isNonCustomOpusModel(e) {
  return (
    e === "claude-opus-4-0" ||
    e === "claude-opus-4-1" ||
    e === "claude-opus-4-5" ||
    e === "claude-opus-4-6" ||
    e === "claude-opus-4-7" ||
    e === "claude-opus-4-8"
  );
}
function getUserSpecifiedModelSetting() {
  let e,
    t = r_();
  if (t !== void 0) e = t;
  else {
    let n = $2();
    e = n !== void 0 ? n : (process.env.ANTHROPIC_MODEL ?? jo()?.model ?? void 0);
  }
  if (e && !xa(e)) return;
  return e;
}
function getMainLoopModel() {
  let e = getUserSpecifiedModelSetting();
  if (e !== void 0 && e !== null) return parseUserSpecifiedModel(e);
  return getDefaultMainLoopModel();
}
function getBestModel() {
  if (isFableAvailable()) {
    let e = getDefaultFableModel();
    if (M2r) return e;
    M2r = !0;
    try {
      if (xa(e)) return e;
    } finally {
      M2r = !1;
    }
  }
  return getDefaultOpusModel();
}
function isFableModelValue(e) {
  return e.includes("claude-fable-5");
}
function isMythosModelValue(e) {
  return e.includes("claude-mythos-5");
}
function isFableAvailable() {
  if (
    fr() === "firstParty" &&
    _u() &&
    _ye().some(
      (t) => t.disabled === !0 && typeof t.value === "string" && isFableModelValue(t.value),
    )
  )
    return !1;
  if (process.env.ANTHROPIC_DEFAULT_FABLE_MODEL) return !0;
  let e = fr();
  if (e !== "firstParty" && e !== "gateway") return !1;
  if (e === "firstParty" && !_u()) return !1;
  return _ye().some(
    (t) => t.disabled !== !0 && typeof t.value === "string" && isFableModelValue(t.value),
  );
}
function isMythosAvailable() {
  if (fr() !== "firstParty" || !_u()) return !1;
  return (_ye() ?? []).some(
    (e) => e.disabled !== !0 && typeof e.value === "string" && isMythosModelValue(e.value),
  );
}
function isPinnedFableModel(e) {
  let t = Oe.ANTHROPIC_DEFAULT_FABLE_MODEL;
  if (!t) return !1;
  return ya(e) === ya(t);
}
function isFableFamilyOrPinnedModel(e) {
  return ya(getCanonicalName(e)) === "claude-fable-5" || isPinnedFableModel(e);
}
function isMythosFamilyOrPinnedModel(e) {
  return ya(getCanonicalName(e)) === "claude-mythos-5";
}
function getClassifierOpusReroute(e) {
  let t = Oe.ANTHROPIC_DEFAULT_OPUS_MODEL;
  if (t === void 0) {
    let r = Vp();
    if (((t = r.opus48), fr() === "firstParty"))
      t = cUr.map((o) => r[o]).find((o) => xa(o)) ?? r.opus48;
  }
  let n = iI(t);
  if ((Sy(e) || rU(e)) && !Sy(n) && !vAn(getCanonicalName(n))) return iI(n + "[1m]");
  return n;
}
function getActiveOpusLineupIds() {
  let e = Vp();
  return cUr.map((t) => e[t]);
}
function getModelUnavailabilityReason(e, t) {
  if (fr() !== "firstParty" || !_u()) return null;
  let n = v0(e.toLowerCase().trim()) ? parseUserSpecifiedModel(e) : e,
    r = t?.ignoreModelOverrides
      ? (l) => firstPartyNameToCanonical(ya(l.toLowerCase()).trim())
      : upd,
    o = r(e),
    s = r(n),
    i = _ye().find(
      (l) =>
        l.disabled === !0 && typeof l.value === "string" && (r(l.value) === o || r(l.value) === s),
    );
  if (i)
    return {
      reason: "disabled",
      description: i.description,
    };
  let a = t?.ignoreModelOverrides ? firstPartyNameToCanonical(n) : getCanonicalName(n);
  if (!isFableAvailable() && a === "claude-fable-5")
    return {
      reason: "absent",
      displayName: getPublicModelDisplayName(n) ?? "That model",
    };
  if (!isMythosAvailable() && isNonCustomMythosModel(a))
    return {
      reason: "absent",
      displayName: getPublicModelDisplayName(n) ?? "That model",
    };
  return null;
}
function upd(e) {
  return getCanonicalName(ya(e.toLowerCase()).trim());
}
function dpd(e) {
  return e.toLowerCase().includes("fable");
}
function getAntRegistryContextWindow(e) {
  return;
}
function antRegistryGrants1M(e) {
  return !1;
}
function getDefaultFableModel() {
  let e = process.env.ANTHROPIC_DEFAULT_FABLE_MODEL || $2r();
  return iI(NY() ? strip1mTag(e) : e);
}
function $2r(e = Vp()) {
  let t = e.fable5;
  return NY() ? strip1mTag(t) : t;
}
function getDefaultOpusModel() {
  if (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL) return iI(process.env.ANTHROPIC_DEFAULT_OPUS_MODEL);
  return YIe();
}
function YIe(e = Vp()) {
  if (fr() === "mantle") return e[DEFAULT_MANTLE_OPUS_KEY];
  if (!td()) return e[DEFAULT_3P_OPUS_KEY];
  if (fr() !== "firstParty") return e.opus47;
  return e.opus48;
}
function getDefaultSonnetModel() {
  if (process.env.ANTHROPIC_DEFAULT_SONNET_MODEL)
    return iI(process.env.ANTHROPIC_DEFAULT_SONNET_MODEL);
  return _An();
}
function _An(e = Vp()) {
  if (!td()) return e[DEFAULT_3P_SONNET_KEY];
  return e.sonnet46;
}
function getDefaultHaikuModel() {
  if (process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL)
    return iI(process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL);
  return N2r();
}
function N2r(e = Vp()) {
  return e[DEFAULT_3P_HAIKU_KEY];
}
function isModeDependentModelSetting(e) {
  return e === "opusplan" || e === "haiku";
}
function getRuntimeMainLoopModel(e) {
  let { permissionMode: t, mainLoopModel: n, exceeds200kTokens: r = !1 } = e,
    o = getUserSpecifiedModelSetting();
  if ((o === "opusplan" || o === "opusplan[1m]") && t === "plan" && !r) {
    let a =
      o === "opusplan[1m]" || isOpus1mMergeEnabled()
        ? w9(getDefaultOpusModel())
        : getDefaultOpusModel();
    if (!((isModelAllowedUnderActiveEnforcement(a) ?? xa(a)) && !cte(a, v9()))) {
      if (
        !i1.has(
          "Plan mode: the opusplan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
        )
      )
        (i1.add(
          "Plan mode: the opusplan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
        ),
          T(
            "Plan mode: the opusplan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
            {
              level: "warn",
            },
          ));
      return parseUserSpecifiedModel(o);
    }
    return a;
  }
  if (getUserSpecifiedModelSetting() === "haiku" && t === "plan") {
    let i = getDefaultSonnetModel();
    if (!((isModelAllowedUnderActiveEnforcement(i) ?? xa(i)) && !cte(i, v9()))) {
      if (
        !i1.has(
          "Plan mode: the haiku plan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
        )
      )
        (i1.add(
          "Plan mode: the haiku plan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
        ),
          T(
            "Plan mode: the haiku plan upgrade model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead",
            {
              level: "warn",
            },
          ));
      return parseUserSpecifiedModel("haiku");
    }
    return i;
  }
  return n;
}
function w9(e) {
  return e.replace(/(\[1m\])+$/i, "") + "[1m]";
}
function getDefaultMainLoopModelSetting() {
  let { setting: e, envFamily: t, concreteBaseline: n } = B2r(),
    r = getEnforcedDefaultModel(e, t, n) ?? e;
  return entitlementStepDownDefault(r) ?? r;
}
function entitlementStepDownDefault(e) {
  let t = v9();
  if (t.size === 0 || !cte(e, t)) return null;
  let n = [
      {
        family: "opus",
        model: getDefaultOpusModel(),
      },
      {
        family: "sonnet",
        model: getDefaultSonnetModel(),
      },
      {
        family: "haiku",
        model: getDefaultHaikuModel(),
      },
    ],
    r = getCanonicalName(parseUserSpecifiedModel(e)),
    o = n.findIndex((i) => r.includes(i.family)),
    s = o !== -1 ? o : isFableFamilyOrPinnedModel(parseUserSpecifiedModel(e)) ? 0 : 1;
  for (let { model: i } of n.slice(s)) if (xa(i)) return i;
  return null;
}
function B2r() {
  if (bo()) {
    if (mle() || QIe() || Eye())
      return {
        setting: isOpus1mMergeEnabled() ? w9(getDefaultOpusModel()) : getDefaultOpusModel(),
        envFamily: "opus",
      };
  } else if (td())
    return {
      setting: isOpus1mMergeEnabled() ? w9(getDefaultOpusModel()) : getDefaultOpusModel(),
      envFamily: "opus",
    };
  if (fr() === "mantle")
    return {
      setting: Vp()[DEFAULT_MANTLE_OPUS_KEY],
      envFamily: null,
      concreteBaseline: String($Ie()[DEFAULT_MANTLE_OPUS_KEY]),
    };
  return {
    setting: getDefaultSonnetModel(),
    envFamily: "sonnet",
  };
}
function getEnforcedDefaultModel(e, t, n) {
  let r = jo() || {},
    o = r.availableModels,
    s = r.enforceAvailableModels,
    i = {},
    a = Goi();
  if (a.state === "refused") return null;
  let l = a.state === "inactive" && a.cascadeTrusted;
  if (a.state === "active") ((o = a.allowlist), (s = !0), (i = a.overridesMap));
  else if (!a.cascadeTrusted) return null;
  if (!s) return null;
  if (l && Object.keys(i).length === 0 && r.modelOverrides) i = r.modelOverrides;
  if (!o || o.length === 0) return null;
  let c = {
      overridesMap: i,
      envFreeAliasResolution: !0,
      allowlist: o,
    },
    u = (C) => {
      let x = firstPartyNameToCanonical(ya(C));
      for (let [I, k] of Object.entries(i)) if (firstPartyNameToCanonical(ya(I)) === x) return k;
      return;
    },
    d = (C, x) => {
      let I = ya(C);
      if (x?.isConcreteEntry) return C;
      let k = u(I);
      if (!k?.trim()) return C;
      k = k.trim();
      {
        let D = ya(k).trim().toLowerCase(),
          P = Sy(k),
          O = v0(D) ? yAn(D) : null;
        if (O !== null) k = P ? w9(O) : O;
        else {
          let L = D.startsWith("claude-") ? D : `claude-${D}`;
          if (isLegacyOpusFirstParty(L) && td()) {
            let M = YIe($Ie());
            k = P ? w9(M) : M;
          }
        }
      }
      if (
        getModelUnavailabilityReason(ya(k), {
          ignoreModelOverrides: !0,
        }) !== null
      ) {
        let D = `enforceAvailableModels: the managed modelOverrides target "${k}" is server-unavailable; using the unmapped candidate`;
        if (!i1.has(D))
          (i1.add(D),
            T(D, {
              level: "warn",
            }));
        return C;
      }
      if (I !== C) return eligible1mSuffixTarget(k) ? w9(k) : ya(k);
      if (Sy(k) && !eligible1mSuffixTarget(k)) return ya(k);
      return k;
    },
    p = null,
    f = String(e),
    m = ya(f.trim().toLowerCase()),
    g = Sy(e),
    h = m.startsWith("claude-") ? m : `claude-${m}`,
    y = isLegacyOpusFirstParty(h) ? YIe($Ie()) : yAn(m);
  if (y !== null) {
    let x = m !== f.trim().toLowerCase() && eligible1mSuffixTarget(y) ? w9(y) : ya(y),
      I = parseUserSpecifiedModel(f);
    if (ya(I) !== ya(y)) p = x;
    if (xa(x, c))
      if (ya(I) !== ya(y)) {
        if (
          getModelUnavailabilityReason(x, {
            ignoreModelOverrides: !0,
          }) === null
        )
          return d(x);
      } else return null;
  } else {
    let C = $Ie(),
      x = fpd(C);
    if (t !== void 0) {
      if (t !== null) {
        let I = x.find(([P]) => P === t);
        if (I === void 0) throw Error(`steeringVarTable has no row for tier family "${t}"`);
        let k = I[3],
          D = k();
        if (typeof D === "string" && ya(D).toLowerCase() !== m) {
          let P = k();
          p = g && eligible1mSuffixTarget(P) ? w9(P) : P;
        }
      }
      if (t === null && n !== void 0 && ya(n).toLowerCase() !== m) p = n;
    } else {
      let I = (() => {
          for (let [, , D, P] of x) {
            let O = P();
            if (typeof O === "string" && ya(O).toLowerCase() === m) return D;
          }
          return null;
        })(),
        k = x;
      for (let [, D, P, O] of k) {
        if (D === void 0 || ya(D.trim().toLowerCase()) !== m) continue;
        if (I !== null && I <= P) continue;
        {
          let L = O();
          p = g && eligible1mSuffixTarget(L) ? w9(L) : L;
        }
        break;
      }
    }
    if (xa(e, c)) return null;
  }
  let b = [];
  for (let C of o) {
    let x = C.trim();
    if (!x) continue;
    let I = x.toLowerCase(),
      k = ya(I),
      D = yAn(k);
    if (D !== null) {
      let W = I !== k && eligible1mSuffixTarget(D) ? w9(D) : D;
      if (Foi(W) && xa(W, c)) {
        if (
          getModelUnavailabilityReason(W, {
            ignoreModelOverrides: !0,
          }) === null
        )
          return d(W);
        b.push(x);
      }
      continue;
    }
    let P = ya(I),
      O = P.startsWith("claude-") ? P : `claude-${P}`;
    if (isLegacyOpusFirstParty(O) && td()) {
      let q = YIe($Ie()),
        V = I !== P && eligible1mSuffixTarget(q) ? w9(q) : q;
      if (
        getModelUnavailabilityReason(V, {
          ignoreModelOverrides: !0,
        }) === null
      )
        return d(V);
      b.push(x);
      continue;
    }
    let L = fr() !== "foundry" && !I.startsWith("claude-") && hpd.test(I),
      M = L || (fr() !== "foundry" && I.startsWith("claude-")),
      N = parseUserSpecifiedModel(L ? `claude-${I}` : M ? I : x),
      B = ya(N).toLowerCase();
    if (M && !/[-@]\d{8}$/.test(B) && firstPartyNameToCanonical(B) !== B) continue;
    if (!Foi(N)) continue;
    let $ = !M || /[-@]\d{8}$/.test(B);
    if (xa(N, c)) {
      if (
        getModelUnavailabilityReason(N, {
          ignoreModelOverrides: !0,
        }) === null
      ) {
        let q = ya(N);
        if (q !== N)
          return d(eligible1mSuffixTarget(N) ? N : q, {
            isConcreteEntry: $,
          });
        return d(N, {
          isConcreteEntry: $,
        });
      }
      b.push(x);
    }
  }
  let _ = p !== null ? u(p) : void 0,
    S = _ !== void 0 && ya(_).trim().toLowerCase() === ya(e).trim().toLowerCase(),
    A =
      p !== null
        ? S
          ? "tier default is the admin-mapped value \u2014 pinning its canonical builtin (the policy mapping re-applies at the exit)"
          : "user steering detected \u2014 pinning the env-free tier builtin (policy-mapped if applicable)"
        : "keeping the tier default",
    v =
      b.length > 0
        ? `enforceAvailableModels: no availableModels entry survived; ${b.length} entr${b.length === 1 ? "y was" : "ies were"} allowed but skipped as server-unavailable (${b.join(", ")}); ${A}`
        : `enforceAvailableModels: no availableModels entry expands to an allowed model; ${A}`;
  if (!i1.has(v))
    (i1.add(v),
      T(v, {
        level: "warn",
      }));
  return p !== null ? d(p) : null;
}
function eligible1mSuffixTarget(e) {
  let t = ya(e).trim().toLowerCase();
  if (!t.startsWith("claude-")) return !0;
  return !vAn(firstPartyNameToCanonical(t)) && (t.includes("opus") ? isOpus1mMergeEnabled() : !0);
}
function fpd(e) {
  return [
    ["haiku", Oe.ANTHROPIC_DEFAULT_HAIKU_MODEL, 0, () => N2r(e)],
    ["sonnet", Oe.ANTHROPIC_DEFAULT_SONNET_MODEL, 1, () => _An(e)],
    ["opus", Oe.ANTHROPIC_DEFAULT_OPUS_MODEL, 2, () => YIe(e)],
  ];
}
function Goi() {
  try {
    let e = mLt(),
      t = yn("policySettings"),
      n = (i) => {
        if (!t || e.length === 0) return;
        let a = i
          ? "enforceAvailableModels: an admin policy source failed to load; enforcing the surviving admin tier (the failed source may carry a different policy \u2014 fix it to restore full coverage)"
          : "enforceAvailableModels: an admin policy source failed to load and the surviving admin tier carries no model policy \u2014 model enforcement is OFF; the failed source may have carried it";
        if (!i1.has(a))
          (i1.add(a),
            T(a, {
              level: "warn",
            }));
      };
    if (e.length > 0 && !gLt()) {
      if (
        !i1.has(
          "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
        )
      )
        (i1.add(
          "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
        ),
          T(
            "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
            {
              level: "warn",
            },
          ));
      return {
        state: "refused",
      };
    }
    if (!t)
      return {
        state: "inactive",
        cascadeTrusted: !0,
      };
    let { availableModels: r, enforceAvailableModels: o, modelOverrides: s } = t;
    if (e.length === 0 && r === void 0 && o === void 0 && s === void 0 && $he() === "hkcu")
      return {
        state: "inactive",
        cascadeTrusted: !0,
      };
    if (o && r === void 0) {
      if (
        !i1.has(
          "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
        )
      )
        (i1.add(
          "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
        ),
          T(
            "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
            {
              level: "warn",
            },
          ));
      return (
        n(!1),
        {
          state: "inactive",
          cascadeTrusted: !1,
        }
      );
    }
    if (o !== !0 || r === void 0 || r.length === 0)
      return (
        n(!1),
        {
          state: "inactive",
          cascadeTrusted: !1,
        }
      );
    return (
      n(!0),
      {
        state: "active",
        allowlist: r,
        overridesMap: s ?? {},
      }
    );
  } catch (e) {
    let t = `enforceAvailableModels: policy-tier settings read failed; refusing cascade-trust mode: ${e instanceof Error ? e.message : String(e)}`;
    if (!i1.has(t))
      (i1.add(t),
        T(t, {
          level: "warn",
        }));
    return {
      state: "refused",
    };
  }
}
function isModelAllowedUnderActiveEnforcement(e) {
  let t = Goi();
  if (t.state === "refused") return !1;
  if (t.state === "inactive") return null;
  let n = {
    allowlist: t.allowlist,
    overridesMap: t.overridesMap,
    envFreeAliasResolution: !0,
  };
  if (!xa(e, n)) return !1;
  let r = e.trim().toLowerCase(),
    o = /\[1m\]/i.test(r) ? ya(r).trim() : r;
  return !(v0(o) || (td() && isLegacyOpusFirstParty(o))) || hAn(o, n);
}
function resetEnforcementWarnDedupForTests() {
  i1.clear();
}
function resolvesToDefaultModel(e) {
  return (
    ya(parseUserSpecifiedModel(e)).toLowerCase() === ya(getDefaultMainLoopModel()).toLowerCase()
  );
}
function isExemptDefaultResolvingPick(e) {
  let t = ya(e.trim().toLowerCase());
  if (isModeDependentModelSetting(t)) return !1;
  if (t === "best") return !1;
  return resolvesToDefaultModel(e);
}
function isWindowSilentDefaultPick(e) {
  if (!isExemptDefaultResolvingPick(e)) return !1;
  let t = e.trim().toLowerCase();
  return (
    parseUserSpecifiedModel(e).toLowerCase() === getDefaultMainLoopModel().toLowerCase() ||
    (v0(t) && t === ya(t))
  );
}
function resolveModelAliasEnvFree(e) {
  let t = ya(e),
    n = yAn(t);
  if (n !== null) return n.toLowerCase();
  let r = t.startsWith("claude-") ? t : `claude-${t}`;
  if (td() && isLegacyOpusFirstParty(r)) return YIe($Ie()).toLowerCase();
  return null;
}
function Foi(e) {
  let t = e.toLowerCase();
  if (gpd.test(t)) return !0;
  if (t.startsWith("arn:aws:bedrock:")) return !0;
  if (fr() === "foundry") return !0;
  return !1;
}
function yAn(e) {
  let t = $Ie();
  switch (e) {
    case "opus":
      return YIe(t);
    case "sonnet":
      return _An(t);
    case "haiku":
      return N2r(t);
    case "fable":
      return $2r(t);
    case "opusplan":
      return _An(t);
    case "best":
      return isFableAvailable() ? $2r(t) : YIe(t);
    default:
      return null;
  }
}
function isDefaultModelEnforced() {
  let e = B2r();
  if (getEnforcedDefaultModel(e.setting, e.envFamily, e.concreteBaseline) !== null) return !0;
  return entitlementStepDownDefault(e.setting) !== null;
}
function getDefaultMainLoopModel() {
  return parseUserSpecifiedModel(getDefaultMainLoopModelSetting());
}
function getFableDeclineFallbackModel() {
  let e = getDefaultMainLoopModel();
  if (!isFableFamilyOrPinnedModel(e)) return e;
  for (let t of [getDefaultOpusModel(), getDefaultSonnetModel(), getDefaultHaikuModel()]) {
    if (isFableFamilyOrPinnedModel(t)) continue;
    if (isModelAllowedUnderActiveEnforcement(t) ?? xa(t)) return t;
  }
  return null;
}
function firstPartyNameToCanonical(e) {
  if (((e = e.toLowerCase()), e.includes("claude-fable-5"))) return "claude-fable-5";
  if (e.includes("claude-mythos-5")) return "claude-mythos-5";
  if (e.includes("claude-opus-4-8")) return "claude-opus-4-8";
  if (e.includes("claude-opus-4-7")) return "claude-opus-4-7";
  if (e.includes("claude-opus-4-6")) return "claude-opus-4-6";
  if (e.includes("claude-opus-4-5")) return "claude-opus-4-5";
  if (e.includes("claude-opus-4-1")) return "claude-opus-4-1";
  if (/claude-opus-4(?!-\d(?!\d))/.test(e)) return "claude-opus-4-0";
  if (e.includes("claude-sonnet-4-6")) return "claude-sonnet-4-6";
  if (e.includes("claude-sonnet-4-5")) return "claude-sonnet-4-5";
  if (/claude-sonnet-4(?!-\d(?!\d))/.test(e)) return "claude-sonnet-4-0";
  if (e.includes("claude-haiku-4-5")) return "claude-haiku-4-5";
  if (e.includes("claude-3-7-sonnet")) return "claude-3-7-sonnet";
  if (e.includes("claude-3-5-sonnet")) return "claude-3-5-sonnet";
  if (e.includes("claude-3-5-haiku")) return "claude-3-5-haiku";
  if (e.includes("claude-3-opus")) return "claude-3-opus";
  if (e.includes("claude-3-sonnet")) return "claude-3-sonnet";
  if (e.includes("claude-3-haiku")) return "claude-3-haiku";
  return e.replace(/-\d{8}$/, "");
}
function getCanonicalName(e) {
  let t = Hnt(e);
  if (t !== e) return firstPartyNameToCanonical(t);
  if (e.includes("application-inference-profile")) {
    let n = BCt(normalizeModelStringForAPI(e));
    if (n) return firstPartyNameToCanonical(n);
  }
  return firstPartyNameToCanonical(t);
}
function bytesPerTokenForModel(e) {
  if (!e) return 4;
  let t = parseUserSpecifiedModel(e),
    n = ya(getCanonicalName(t)).replace(/[._]/g, "-");
  return ypd.has(n) ? 4 : 3;
}
function getClaudeAiUserDefaultModelDescription(e = !1) {
  let t = B2r(),
    n = getEnforcedDefaultModel(t.setting, t.envFamily, t.concreteBaseline),
    r = n ?? t.setting,
    s = entitlementStepDownDefault(r) ?? n;
  if (s !== null)
    return `${getMarketingNameForModel(normalizeModelStringForAPI(s)) ?? renderModelName(s)} \xB7 Set by your organization`;
  if (mle() || QIe() || Eye()) {
    let a = getDefaultOpusModel(),
      l = getMarketingNameForModel(normalizeModelStringForAPI(a)) ?? "Opus",
      c = e && rg(a);
    if (isOpus1mMergeEnabled())
      return `${l} with 1M context \xB7 Best for everyday, complex tasks${c ? getOpusPricingSuffix(!0, a) : ""}`;
    return `${l} \xB7 Best for everyday, complex tasks${c ? getOpusPricingSuffix(!0, a) : ""}`;
  }
  return `${getMarketingNameForModel(normalizeModelStringForAPI(getDefaultSonnetModel())) ?? "Sonnet"} \xB7 Efficient for routine tasks`;
}
function renderDefaultModelSetting(e) {
  if (e === "opusplan") return "Opus in plan mode, else Sonnet";
  return renderModelName(parseUserSpecifiedModel(e));
}
function getOpusPricingSuffix(e, t) {
  if (fr() !== "firstParty") return "";
  let n = eU(Xnt(e, getCanonicalName(t)));
  return ` \xB7${e ? ` (${gCe})` : ""} ${n}`;
}
function isOpus1mMergeEnabled() {
  if (Sye() || Aye() || fr() !== "firstParty") return !1;
  if (bo() && Di() === null) return !1;
  return !0;
}
function renderModelSetting(e) {
  if (e === "opusplan") return "Opus Plan";
  if (v0(e)) return renderModelName(parseUserSpecifiedModel(e));
  return renderModelName(e);
}
function getModelSourceAnnotation() {
  if (r_() !== void 0) return "";
  if (process.env.ANTHROPIC_MODEL) return "";
  switch (Mhe("model")) {
    case "projectSettings":
      return ` (from ${kG("projectSettings")})`;
    case "policySettings":
      return " (from managed settings)";
    default:
      return "";
  }
}
function getPublicModelDisplayName(e) {
  let t = e.endsWith("[1m]") ? " (1M context)" : "";
  switch (getCanonicalName(e)) {
    case "claude-fable-5":
      return "Fable 5";
    case "claude-mythos-5":
      return "Mythos 5";
    case "claude-opus-4-8":
      return "Opus 4.8" + t;
    case "claude-opus-4-7":
      return "Opus 4.7" + t;
    case "claude-opus-4-6":
      return "Opus 4.6" + t;
    case "claude-opus-4-5":
      return "Opus 4.5" + t;
    case "claude-opus-4-1":
      return "Opus 4.1" + t;
    case "claude-opus-4-0":
      return "Opus 4" + t;
    case "claude-sonnet-4-6":
      return "Sonnet 4.6" + t;
    case "claude-sonnet-4-5":
      return "Sonnet 4.5" + t;
    case "claude-sonnet-4-0":
      return "Sonnet 4" + t;
    case "claude-3-7-sonnet":
      return "Sonnet 3.7";
    case "claude-3-5-sonnet":
      return "Sonnet 3.5";
    case "claude-haiku-4-5":
      return "Haiku 4.5" + t;
    case "claude-3-5-haiku":
      return "Haiku 3.5";
    default:
      return null;
  }
}
function renderModelName(e) {
  let t = normalizeModelStringForAPI(e);
  if (y9(t) === null) {
    let r = [...mAn(), ..._ye()].find(
      (o) => typeof o.value === "string" && normalizeModelStringForAPI(o.value) === t,
    );
    if (r?.label) return r.label;
  }
  let n = getPublicModelDisplayName(e);
  if (n) return n;
  return e;
}
function getPublicModelName(e) {
  let t = getPublicModelDisplayName(e);
  if (t) return `Claude ${t}`;
  return `Claude (${e})`;
}
function parseUserSpecifiedModel(e) {
  let t = e.trim(),
    n = t.toLowerCase(),
    r = Sy(n),
    o = r ? ya(n).trim() : n;
  if (v0(o))
    switch (o) {
      case "fable": {
        let s = getDefaultFableModel();
        return iI(s + (r && !NY() && !Sy(s) ? "[1m]" : ""));
      }
      case "opusplan":
        return iI(getDefaultSonnetModel() + (r ? "[1m]" : ""));
      case "sonnet":
        return iI(getDefaultSonnetModel() + (r ? "[1m]" : ""));
      case "haiku":
        return iI(getDefaultHaikuModel() + (r ? "[1m]" : ""));
      case "opus":
        return r ? iI(w9(getDefaultOpusModel())) : getDefaultOpusModel();
      case "best":
        return getBestModel();
      default:
    }
  if (td() && isLegacyOpusFirstParty(o) && isLegacyModelRemapEnabled())
    return r ? iI(w9(getDefaultOpusModel())) : getDefaultOpusModel();
  if (r && NY() && dpd(o) && rU(o)) return iI(t.replace(/(\[1m\])+$/i, "").trim());
  if (r) return iI(t.replace(/(\[1m\])+$/i, "").trim() + "[1m]");
  return iI(t);
}
function resolveSkillModelOverride(e, t) {
  let n = parseUserSpecifiedModel(e);
  if (!isExemptDefaultResolvingPick(n) && !xa(n))
    return (
      T(
        `Skill/command model "${e}" is not in the availableModels allowlist; keeping the session model`,
        {
          level: "warn",
        },
      ),
      t
    );
  let r = Sy(t) || rU(t) || antRegistryGrants1M(t);
  if (Sy(e) || !r) return e;
  let o = parseUserSpecifiedModel(e);
  if (rU(o)) return o;
  if (antRegistryGrants1M(o)) return o;
  if (I9(o)) return e + "[1m]";
  return e;
}
function isLegacyOpusFirstParty(e) {
  return _pd.includes(e);
}
function isLegacyModelRemapEnabled() {
  return !ut(process.env.CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP);
}
function modelDisplayString(e) {
  if (e === null) {
    if (bo()) return `Default (${getClaudeAiUserDefaultModelDescription()})`;
    return `Default (${getDefaultMainLoopModel()})`;
  }
  let t = parseUserSpecifiedModel(e);
  return e === t ? t : `${e} (${t})`;
}
function getMarketingNameForModel(e) {
  if (fr() === "foundry") return;
  let t = e.toLowerCase().includes("[1m]"),
    n = getCanonicalName(e);
  if (n === "claude-fable-5") return "Fable 5";
  if (n === "claude-mythos-5") return "Mythos 5";
  if (n === "claude-opus-4-8") return t ? "Opus 4.8 (1M context)" : "Opus 4.8";
  if (n === "claude-opus-4-7") return t ? "Opus 4.7 (1M context)" : "Opus 4.7";
  if (n === "claude-opus-4-6") return t ? "Opus 4.6 (1M context)" : "Opus 4.6";
  if (n === "claude-opus-4-5") return "Opus 4.5";
  if (n === "claude-opus-4-1") return "Opus 4.1";
  if (n === "claude-opus-4-0") return "Opus 4";
  if (n === "claude-sonnet-4-6") return t ? "Sonnet 4.6 (1M context)" : "Sonnet 4.6";
  if (n === "claude-sonnet-4-5") return t ? "Sonnet 4.5 (1M context)" : "Sonnet 4.5";
  if (n === "claude-sonnet-4-0") return t ? "Sonnet 4 (1M context)" : "Sonnet 4";
  if (n === "claude-3-7-sonnet") return "Claude 3.7 Sonnet";
  if (n === "claude-3-5-sonnet") return "Claude 3.5 Sonnet";
  if (n === "claude-haiku-4-5") return "Haiku 4.5";
  if (n === "claude-3-5-haiku") return "Claude 3.5 Haiku";
  return;
}
function normalizeModelStringForAPI(e) {
  return e.replace(/\[(1|2)m\]/gi, "");
}
function strip1mTag(e) {
  return e.replace(/\[1m\]/gi, "");
}
var M2r = !1,
  DEFAULT_3P_OPUS_KEY = "opus46",
  DEFAULT_3P_SONNET_KEY = "sonnet45",
  DEFAULT_3P_HAIKU_KEY = "haiku45",
  DEFAULT_MANTLE_OPUS_KEY = "opus47",
  DEFAULT_3P_FABLE_KEY = "fable5",
  i1,
  gpd,
  hpd,
  ypd,
  _pd;
