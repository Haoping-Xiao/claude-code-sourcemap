// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h7t
// matched 2.1.88 source: src/commands/model/model.tsx
// class=modified  jaccard=0.1489  score=0.3696  fileCov=0.1995
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function SetModelAndClose(e) {
  let t = e === "default" ? null : e;
  if (t && cte(t, v9()))
    return (
      Le("model_switch", "denied_by_entitlement"),
      {
        ok: false,
        message: `Model '${t}' is restricted by your organization's settings. Run /model to choose a different model.`,
      }
    );
  if (t && !xa(t))
    return (
      Le("model_switch", "not_allowed"),
      {
        ok: false,
        message: `Model '${t}' is not available. Your organization restricts model selection.`,
      }
    );
  if (t && KOo(t))
    return (
      Le("model_switch", "opus_1m_unavailable"),
      {
        ok: false,
        message:
          "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (t && isSonnet1mUnavailable(t))
    return (
      Le("model_switch", "sonnet_1m_unavailable"),
      {
        ok: false,
        message:
          "Sonnet 4.6 with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (t) {
    let n = KIe(t);
    if (n)
      switch (n.reason) {
        case "disabled":
          return (
            Le("model_switch", "disabled_by_org"),
            {
              ok: false,
              message: `Model '${t}' is not currently available for your account${n.description ? `. ${n.description}` : "."}`,
            }
          );
        case "absent": {
          let r = await S8t(rMl(t) ? zo(t) : t, {
            forceServerProbe: true,
          });
          if (!r.valid)
            return (
              Le("model_switch", r.notFound ? "fable_unavailable" : "fable_probe_failed"),
              {
                ok: false,
                message: r.notFound
                  ? `${n.displayName} isn't available for your account yet. Run /model to pick another model.`
                  : r.error,
              }
            );
          return (
            RPe(),
            {
              ok: true,
              model: t,
            }
          );
        }
      }
  }
  if (!t || rMl(t))
    return {
      ok: true,
      model: t,
    };
  try {
    let n = await S8t(t);
    if (!n.valid)
      return (
        Le("model_switch", "invalid_model"),
        {
          ok: false,
          message: n.error,
        }
      );
    return {
      ok: true,
      model: t,
    };
  } catch (n) {
    return (
      Le("model_switch", "validate_exception"),
      {
        ok: false,
        message: `Failed to validate model: ${be(n)}`,
      }
    );
  }
}
function ModelPickerWrapper(e, t, n, r) {
  let o = t().fastMode;
  if (
    (Wie(),
    n((a) => ({
      ...a,
      mainLoopModel: e,
      mainLoopModelForSession: null,
    })),
    r)
  )
    _7t(e);
  xe("model_switch");
  let s = `Set model to ${wt.bold(xP(e))}${r ? " and saved as your default for new sessions" : " for this session only"}`,
    i = void 0;
  if (sc()) {
    if ((zIe(), !rg(e) && o))
      (n((a) => ({
        ...a,
        fastMode: false,
      })),
        (i = false));
    else if (rg(e) && o) ((s += " \xB7 Fast mode ON"), (i = true));
  }
  if (xOe(e, i === true, nT())) s += " \xB7 Draws from usage credits";
  if (i === false) s += " \xB7 Fast mode OFF";
  return ((s += zOo(e)), s);
}
function _7t(e) {
  (io("userSettings", {
    model: e ?? void 0,
  }),
    xe("model_set_default"));
}
function zOo(e) {
  let t = Mhe("model");
  if (t !== "projectSettings" && t !== "localSettings" && t !== "policySettings") return "";
  let n = yn(t)?.model;
  if (n === void 0 || e === n) return "";
  let r = t === "policySettings" ? "Managed settings" : kG(t);
  return wt.dim(`
     ${r} pins ${wt.bold(KY(n))} \u2014 that applies on restart`);
}
function rMl(e) {
  return v0(e.toLowerCase().trim());
}
function KOo(e) {
  let t = e.toLowerCase();
  return !ure() && !nT() && t.includes("opus") && t.includes("[1m]");
}
function isSonnet1mUnavailable(e) {
  let t = e.toLowerCase();
  return !uSe() && (t.includes("sonnet[1m]") || t.includes("sonnet-4-6[1m]"));
}
function xP(e) {
  let t = FPt(e ?? Uw());
  return e === null ? `${t} (default)` : t;
}
function Zer(e) {
  return zo(e ?? Uw());
}
function XOo(e, t, n, r) {
  let o = Gb();
  if (o === 0 || o === r) return false;
  return Zer(e) !== Zer(n ?? t);
}
function ShowModelAndClose(e, t = (n) => n) {
  let n = xP(e.mainLoopModel),
    r = e.effortValue !== void 0 ? ` (effort: ${e.effortValue})` : "";
  if (e.mainLoopModelForSession)
    return `Current model: ${t(xP(e.mainLoopModelForSession))} (session override from plan mode)
Base model: ${n}${r}`;
  return `Current model: ${n}${r}`;
}
function JOo(e) {
  let t = e ?? Uw();
  if (!tH(zo(t))) return false;
  return Dia();
}
function FQ(e) {
  if (e === null) return false;
  return tH(zo(e)) && Tjt();
}
