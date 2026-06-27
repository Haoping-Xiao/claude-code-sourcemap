// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OJt
// matched 2.1.88 source: src/utils/model/deprecation.ts
// class=partial  jaccard=0.1956  score=0.2063  fileCov=0.7903
// note: low-confidence suggestion: src/utils/model/deprecation.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var OJt = E(() => {
  BE();
  DD();
  Ao();
  Ls();
  UJl = {
    "claude-opus-4-1": {
      modelName: "Claude Opus 4.1",
      retirementDates: {
        firstParty: null,
        bedrock: null,
        vertex: null,
        foundry: null,
        anthropicAws: null,
        mantle: null,
        gateway: null
      },
      remappedTo: "the latest Opus"
    },
    "claude-opus-4-0": {
      modelName: "Claude Opus 4",
      retirementDates: {
        firstParty: "June 15, 2026",
        bedrock: "May 31, 2026",
        vertex: "September 14, 2026",
        foundry: null,
        anthropicAws: null,
        mantle: null,
        gateway: null
      },
      remappedTo: "the latest Opus"
    },
    "claude-sonnet-4-0": {
      modelName: "Claude Sonnet 4",
      retirementDates: {
        firstParty: "June 15, 2026",
        bedrock: "October 14, 2026",
        vertex: "September 14, 2026",
        foundry: null,
        anthropicAws: null,
        mantle: null,
        gateway: null
      }
    },
    "claude-3-opus": {
      modelName: "Claude 3 Opus",
      retirementDates: {
        firstParty: "January 5, 2026",
        bedrock: "January 15, 2026",
        vertex: "January 5, 2026",
        foundry: "January 5, 2026",
        anthropicAws: null,
        mantle: null,
        gateway: null
      }
    },
    "claude-3-7-sonnet": {
      modelName: "Claude 3.7 Sonnet",
      retirementDates: {
        firstParty: "February 19, 2026",
        bedrock: "April 28, 2026",
        vertex: "May 11, 2026",
        foundry: "February 19, 2026",
        anthropicAws: null,
        mantle: null,
        gateway: null
      }
    },
    "claude-3-5-haiku": {
      modelName: "Claude 3.5 Haiku",
      retirementDates: {
        firstParty: "February 19, 2026",
        bedrock: null,
        vertex: null,
        foundry: null,
        anthropicAws: null,
        mantle: null,
        gateway: null
      }
    }
  };
});
var qJl = {};
_t(qJl, {
  call: () => call
});
function R6f({
  hasConversationMessages: e,
  onDone: t
}) {
  let n = Ht(b => b.mainLoopModel),
    r = Ht(b => b.mainLoopModelForSession),
    o = Ht(b => b.fastMode),
    s = Ht(b => b.effortValue),
    i = Ht(b => b.cacheMissAckedAtOutputTokens),
    a = Ho(),
    {
      addNotification: l
    } = Li(),
    [c, u] = cTe.useState(null),
    [d, p] = cTe.useState(null),
    f = cTe.useRef(!1);
  function m() {
    G("tengu_model_command_menu", {
      action: We("cancel")
    });
    let b = xP(n);
    t(`Kept model as ${wt.bold(b)}`, {
      display: "system"
    });
  }
  function g(b, _, S = !1) {
    if (!S && JOo(b)) {
      p({
        model: b,
        effort: _
      });
      return;
    }
    if (XOo(b, n, r, i)) {
      u({
        model: b,
        effort: _,
        kind: "model"
      });
      return;
    }
    if (_ !== void 0 && vNt(_, s, Zer(b), i, e)) {
      u({
        model: b,
        effort: _,
        kind: "effort"
      });
      return;
    }
    h(b, _);
  }
  function h(b, _) {
    if (G("tengu_model_command_menu", {
      action: b,
      from_model: n,
      to_model: b
    }), _ !== void 0) wNt(_);
    Wie(), a(C => ({
      ...C,
      mainLoopModel: b,
      mainLoopModelForSession: null,
      ...(_ !== void 0 && {
        effortValue: _
      })
    }));
    let S = f.current;
    if (f.current = !1, S) _7t(b);
    xe("model_switch"), WJl(b, l);
    let A = `Set model to ${wt.bold(xP(b))}${S ? " and saved as your default for new sessions" : " for this session only"}`;
    if (_ !== void 0) A += ` with ${wt.bold(_)} effort`;
    let v = void 0;
    if (sc()) {
      if (zIe(), !rg(b) && o) a(C => ({
        ...C,
        fastMode: !1
      })), v = !1;else if (rg(b) && Fx() && o) A += " \xB7 Fast mode ON", v = !0;
    }
    if (xOe(b, v === !0, nT())) A += " \xB7 Draws from usage credits";
    if (v === !1) A += " \xB7 Fast mode OFF";
    if (S) A += zOo(b);
    t(A);
  }
  if (d) {
    let {
      model: b,
      effort: _
    } = d;
    return fme.jsx(PJt, {
      variant: "picker",
      onDone: (S, A) => {
        if (p(null), S === "consent") {
          g(b, _, !0);
          return;
        }
        f.current = !1, t(A ?? `Kept model as ${wt.bold(xP(n))}`, {
          display: "system"
        });
      }
    });
  }
  if (c) return fme.jsx(lHt, {
    kind: c.kind,
    model: c.model,
    effort: c.effort,
    onConfirm: () => h(c.model, c.effort),
    onCancel: () => {
      u(null), f.current = !1;
    }
  });
  return fme.jsx(hKe, {
    initial: n,
    sessionModel: r,
    onSelect: g,
    onSetDefault: b => {
      f.current = !0;
    },
    onCancel: m,
    isStandaloneCommand: !0,
    skipSettingsWrite: !0,
    showFastModeNotice: sc() && o && rg(n) && Fx()
  });
}
function L6f(e) {
  let t = GJl.c(29),
    {
      args: n,
      onDone: r
    } = e,
    o = Dc(),
    s = Ho(),
    {
      addNotification: i
    } = Li(),
    [a, l] = cTe.useState(null),
    [c, u] = cTe.useState(null),
    d;
  if (t[0] !== i || t[1] !== r || t[2] !== s || t[3] !== o) d = y => {
    let b = !vl(),
      _ = etr(y, () => o.getState(), s, b);
    WJl(y, i), r(_);
  }, t[0] = i, t[1] = r, t[2] = s, t[3] = o, t[4] = d;else d = t[4];
  let p = d,
    f;
  if (t[5] !== p || t[6] !== o) f = y => {
    let b = o.getState();
    if (XOo(y, b.mainLoopModel, b.mainLoopModelForSession, b.cacheMissAckedAtOutputTokens)) {
      l({
        model: y
      });
      return;
    }
    p(y);
  }, t[5] = p, t[6] = o, t[7] = f;else f = t[7];
  let m = f,
    g,
    h;
  if (t[8] !== n || t[9] !== r || t[10] !== m || t[11] !== s) g = () => {
    let y = Ju();
    if (y && NA()) {
      y7t(n).then(b => {
        if (!b.ok) {
          r(b.message, {
            display: "system"
          });
          return;
        }
        if (FQ(b.model)) {
          It("model_fable_consent", "remote_thin_client_blocked"), r("Fable 5 uses usage credits, and this cloud session can\u2019t show the consent prompt yet \xB7 switch models from the workspace, or consent once in a local session first", {
            display: "system"
          });
          return;
        }
        let _ = n === "default" ? null : n;
        return y.sendControlRequest({
          subtype: "set_model",
          model: _ ?? void 0
        }).then(() => {
          s(S => ({
            ...S,
            mainLoopModel: _,
            mainLoopModelForSession: null
          })), xe("model_switch"), r(_ === null ? "Reset model to the workspace default" : `Set model to ${wt.bold(xP(_))}`);
        }).catch(S => {
          T(`[remote] set_model rejected: ${be(S)}`);
          let A = S instanceof $Jt;
          Le("model_switch", A ? "timeout" : "remote_rejected"), r(A ? `No response from the cloud session \u2014 the switch to ${n} may still have been applied` : `Cloud session couldn't switch to ${n}`, {
            display: "system"
          });
        });
      });
      return;
    }
    y7t(n).then(b => {
      if (!b.ok) {
        r(b.message, {
          display: "system"
        });
        return;
      }
      if (JOo(b.model)) {
        u({
          model: b.model
        });
        return;
      }
      m(b.model);
    });
  }, h = [n, r, s, m], t[8] = n, t[9] = r, t[10] = m, t[11] = s, t[12] = g, t[13] = h;else g = t[12], h = t[13];
  if (cTe.useEffect(g, h), c) {
    let {
        model: y
      } = c,
      b;
    if (t[14] !== y || t[15] !== r || t[16] !== m || t[17] !== o) b = fme.jsx(PJt, {
      variant: "picker",
      onDone: (_, S) => {
        if (u(null), _ === "consent") {
          m(y);
          return;
        }
        r(S ?? `Kept model as ${wt.bold(xP(o.getState().mainLoopModel))}`, {
          display: "system"
        });
      }
    }), t[14] = y, t[15] = r, t[16] = m, t[17] = o, t[18] = b;else b = t[18];
    return b;
  }
  if (a) {
    let y;
    if (t[19] !== p || t[20] !== a.model) y = () => p(a.model), t[19] = p, t[20] = a.model, t[21] = y;else y = t[21];
    let b;
    if (t[22] !== r || t[23] !== o) b = () => r(`Kept model as ${wt.bold(xP(o.getState().mainLoopModel))}`, {
      display: "system"
    }), t[22] = r, t[23] = o, t[24] = b;else b = t[24];
    let _;
    if (t[25] !== a.model || t[26] !== y || t[27] !== b) _ = fme.jsx(lHt, {
      kind: "model",
      model: a.model,
      effort: void 0,
      onConfirm: y,
      onCancel: b
    }), t[25] = a.model, t[26] = y, t[27] = b, t[28] = _;else _ = t[28];
    return _;
  }
  return null;
}
function WJl(e, t) {
  let n = mir(e);
  if (!n) return;
  t({
    key: "model-deprecation-warning",
    kind: "warning",
    text: n,
    color: "warning",
    priority: "immediate",
    invalidates: ["model-deprecation-warning"]
  });
}
function D6f(e) {
  let {
      onDone: t
    } = e,
    n = Ht($6f),
    r = Ht(M6f),
    o = Ht(P6f);
  return t(ttr({
    mainLoopModel: n,
    mainLoopModelForSession: r,
    effortValue: o
  }, wt.bold)), null;
}
function P6f(e) {
  return e.effortValue;
}
function M6f(e) {
  return e.mainLoopModelForSession;
}
function $6f(e) {
  return e.mainLoopModel;
}
var GJl,
  cTe,
  fme,
  call = async (e, t, n) => {
    if (n = n?.trim() || "", Iae.includes(n)) return G("tengu_model_command_inline_help", {
      args: n
    }), fme.jsx(D6f, {
      onDone: e
    });
    if (_G.includes(n)) {
      e("Run /model to open the model selection menu, or /model [modelName] to set the model.", {
        display: "system"
      });
      return;
    }
    if (n) return G("tengu_model_command_inline", {
      args_hash: Dd(n),
      args_length: n.length
    }), fme.jsx(L6f, {
      args: n,
      onDone: e
    });
    if (Ju()) {
      e("Model picker shows local options in cloud sessions \u2014 pass a model name, e.g. /model sonnet", {
        display: "system"
      });
      return;
    }
    return fme.jsx(R6f, {
      onDone: e,
      hasConversationMessages: t.messages.length > 0
    });
  };