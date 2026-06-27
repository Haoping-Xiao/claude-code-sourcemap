// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E9l
// matched 2.1.88 source: src/commands/review/ultrareviewCommand.tsx
// class=modified  jaccard=0.125  score=0.1941  fileCov=0.2601
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module E9l] deps: Vl, vi, q9n, NVt, Y2o, tC, w4, Ye, Zor, er, Mne, sYe, kAt
((nsr = R(lt(), 1)), (nme = R(rt(), 1)), (Db = R(se(), 1)));
var A9l = {};
function xWf(e) {
  return e.map((t) => (t.type === "text" ? t.text : "")).filter(Boolean).join(`
`);
}
async function kWf(e, t, n, r, o, s) {
  let i = await Qor(e, t, r, {
    applyFixesOnComplete: o,
  });
  if (s?.aborted) return;
  if (i)
    n(xWf(i.blocks), {
      shouldQuery: true,
      metaMessages: i.launched
        ? [
            `The output above is already visible to the user. Briefly acknowledge it without repeating the target, URL, or billing note. Findings will arrive via task-notification.${o ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}`,
          ]
        : void 0,
    });
  else
    n(
      "Ultrareview failed to launch the cloud session. Check that this is a GitHub repo and try again.",
      {
        display: "system",
      },
    );
}
var H9l,
  call = async (e, t, n) => {
    let r = dW("allow_remote_sessions", "Cloud sessions", "are");
    if (r)
      return (
        e(r, {
          display: "system",
        }),
        null
      );
    let { scopeArgs: o, applyFixes: s } = G2o(n),
      i = await Xor(o);
    if (!i.ok)
      return (
        e(i.error, {
          display: "system",
        }),
        null
      );
    let a = i.scope,
      l = await Jor();
    switch (l.kind) {
      case "blocked": {
        G("tengu_review_overage_blocked", {
          reason: l.reason,
        });
        let c = l.actionUrl
            ? `
  \u2192 ${l.actionUrl}`
            : "",
          u =
            l.actionUrl?.includes("/admin-settings/") && Wyt() && !eH()
              ? `
  Run /usage-credits to request this from your admin.`
              : "";
        return (
          e(`${l.message}${c}${u}`, {
            display: "system",
          }),
          null
        );
      }
      case "needs-confirm":
      case "proceed":
        if (l.kind === "needs-confirm") G("tengu_review_overage_dialog_shown", {});
        return H9l.jsx(S9l, {
          subtitle: l.kind === "needs-confirm" ? nQ() : l.billingNote || null,
          body: l.kind === "needs-confirm" ? l.body : void 0,
          scope: a,
          onProceed: async (c) => {
            if ((await kWf(a, t, e, l.billingNote, s, c), !c.aborted && l.kind === "needs-confirm"))
              Yor();
          },
          onCancel: () =>
            e("Ultrareview cancelled.", {
              display: "system",
            }),
        });
    }
  };
