// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module put
// matched 2.1.88 source: src/memdir/findRelevantMemories.ts
// class=modified (alt of src/memdir/findRelevantMemories.ts)  jaccard=0.0999  score=0.2766  fileCov=0.1353
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var put = E(() => {
  Xr();
  ft();
  uut();
  mSe();
  z1();
  ole();
  wr();
  NX();
  Ao();
  dr();
  ySe = Dy({
    kind: "fable_overage_consent_prompt",
    payload: ve(() =>
      H.object({
        overagesEnabled: H.boolean(),
        balanceCents: H.number().nullable().optional(),
        currency: H.string().nullable().optional(),
      }),
    ),
    result: ve(() => H.enum(["consent", "switch_default", "cancelled"])),
    default: "cancelled",
  });
});
function pLe() {
  return {
    stateByDir: {},
    lastUsage: null,
  };
}
function y5e(e) {
  if (!e) return;
  ((e.stateByDir = {}), (e.lastUsage = null));
}
function Tla(e, t) {
  return e.stateByDir[t];
}
function vla(e, t, n, r, o) {
  let s = {
    memories: n,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Available memories:
${r}`,
            ...(o && {
              cache_control: o,
            }),
          },
        ],
      },
    ],
  };
  return ((e.stateByDir[t] = s), s);
}
function wla(e, t, n, r) {
  let o = e.stateByDir[t];
  if (!o) return;
  e.stateByDir[t] = {
    ...o,
    messages: [
      ...o.messages,
      {
        role: "user",
        content: [
          {
            type: "text",
            text: n,
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: r,
          },
        ],
      },
    ],
  };
}
var X1n = "memdir_relevance",
  Qio = "memdir_aki_extract";
function Zio() {
  return !1;
}
