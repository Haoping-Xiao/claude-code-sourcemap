// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fXa
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx
// class=modified (alt of src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx)  jaccard=0.0217  score=0.0366  fileCov=0.0506
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fXa] deps: Ye, ps, Cc, Bs, f_, Ko, Mg, wb, vH, H9n
((dXa = R(lt(), 1)), (T9n = R(rt(), 1)), (L6 = R(se(), 1)));
function M7p(e) {
  let t = {
    CLAUDE_CODE_USE_BEDROCK: "1",
    CLAUDE_CODE_USE_VERTEX: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    AWS_REGION: e.region,
    AWS_PROFILE: void 0,
    AWS_BEARER_TOKEN_BEDROCK: void 0,
    AWS_ACCESS_KEY_ID: void 0,
    AWS_SECRET_ACCESS_KEY: void 0,
    AWS_SESSION_TOKEN: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0,
  };
  switch (e.authMethod) {
    case "profile":
      t.AWS_PROFILE = e.awsProfile;
      break;
    case "bearer":
      t.AWS_BEARER_TOKEN_BEDROCK = e.bearerToken;
      break;
    case "accessKey":
      if (
        ((t.AWS_ACCESS_KEY_ID = e.accessKeyId),
        (t.AWS_SECRET_ACCESS_KEY = e.secretAccessKey),
        e.sessionToken)
      )
        t.AWS_SESSION_TOKEN = e.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (e.pinSonnet) t.ANTHROPIC_DEFAULT_SONNET_MODEL = e.pinSonnet;
  if (e.pinOpus) t.ANTHROPIC_DEFAULT_OPUS_MODEL = e.pinOpus;
  if (e.pinFable) t.ANTHROPIC_DEFAULT_FABLE_MODEL = e.pinFable;
  if (e.pinHaiku) t.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.pinHaiku;
  return t;
}
function hXa(e) {
  let t = mXa.c(30),
    { onComplete: n } = e,
    { goBack: r, wizardData: o } = Eu(),
    [s, i] = gXa.useState(null),
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((a = fM(xg("userSettings") ?? "~/.claude/settings.json")), (t[0] = a));
  else a = t[0];
  let l = a,
    c;
  if (t[1] !== o) ((c = M7p(o)), (t[1] = o), (t[2] = c));
  else c = t[2];
  let u = c,
    d;
  if (t[3] !== u) ((d = Object.entries(u).filter(N7p)), (t[3] = u), (t[4] = d));
  else d = t[4];
  let p = d,
    f;
  if (
    t[5] !== u ||
    t[6] !== n ||
    t[7] !== o.authMethod ||
    t[8] !== o.awsProfile ||
    t[9] !== o.pinFable ||
    t[10] !== o.pinHaiku ||
    t[11] !== o.pinOpus ||
    t[12] !== o.pinSonnet ||
    t[13] !== o.verifiedIdentity
  )
    ((f = () => {
      let { error: A } = io("userSettings", {
        env: u,
      });
      if (A) {
        i(A.message);
        return;
      }
      (G("tengu_bedrock_setup_complete", {
        auth_method: Oo(o.authMethod),
        pinned_models: Boolean(o.pinSonnet || o.pinOpus || o.pinFable || o.pinHaiku),
        verified: Boolean(o.verifiedIdentity),
      }),
        n(
          `Bedrock configuration saved to ${l}.${o.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${o.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`,
        ));
    }),
      (t[5] = u),
      (t[6] = n),
      (t[7] = o.authMethod),
      (t[8] = o.awsProfile),
      (t[9] = o.pinFable),
      (t[10] = o.pinHaiku),
      (t[11] = o.pinOpus),
      (t[12] = o.pinSonnet),
      (t[13] = o.verifiedIdentity),
      (t[14] = f));
  else f = t[14];
  let m = f,
    g;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((g = D6.jsxs(w, {
      children: ["These will be written to ", l, " under env:"],
    })),
      (t[15] = g));
  else g = t[15];
  let h;
  if (t[16] !== p)
    ((h = D6.jsx(U, {
      flexDirection: "column",
      children: p.map(O7p),
    })),
      (t[16] = p),
      (t[17] = h));
  else h = t[17];
  let y;
  if (t[18] !== o.verifiedIdentity)
    ((y =
      o.verifiedIdentity &&
      D6.jsxs(w, {
        dimColor: true,
        children: [
          D6.jsx(Hs, {
            status: "success",
            withSpace: true,
          }),
          "Verified as ",
          o.verifiedIdentity,
        ],
      })),
      (t[18] = o.verifiedIdentity),
      (t[19] = y));
  else y = t[19];
  let b;
  if (t[20] !== s)
    ((b = D6.jsx(Va, {
      error: s,
    })),
      (t[20] = s),
      (t[21] = b));
  else b = t[21];
  let _;
  if (t[22] !== r || t[23] !== m)
    ((_ = D6.jsx(Kl, {
      confirmLabel: "Save",
      cancelLabel: "Cancel",
      onConfirm: m,
      onCancel: r,
    })),
      (t[22] = r),
      (t[23] = m),
      (t[24] = _));
  else _ = t[24];
  let S;
  if (t[25] !== h || t[26] !== y || t[27] !== b || t[28] !== _)
    ((S = D6.jsx(Pc, {
      subtitle: "Confirm and save",
      children: D6.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [g, h, y, b, _],
      }),
    })),
      (t[25] = h),
      (t[26] = y),
      (t[27] = b),
      (t[28] = _),
      (t[29] = S));
  else S = t[29];
  return S;
}
function O7p(e) {
  let [t, n] = e;
  return D6.jsxs(
    w,
    {
      children: [
        "  ",
        D6.jsx(w, {
          color: "suggestion",
          children: t,
        }),
        " =",
        " ",
        $7p.has(t)
          ? D6.jsx(w, {
              dimColor: true,
              children: "(hidden)",
            })
          : n,
      ],
    },
    t,
  );
}
function N7p(e) {
  return e[1] !== void 0;
}
var mXa, gXa, D6, $7p;
