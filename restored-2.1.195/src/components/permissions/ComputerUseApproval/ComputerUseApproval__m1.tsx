// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m_t
// matched 2.1.88 source: src/components/permissions/ComputerUseApproval/ComputerUseApproval.tsx
// class=modified (alt of src/components/permissions/ComputerUseApproval/ComputerUseApproval.tsx)  jaccard=0.0158  score=0.0537  fileCov=0.0219
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module m_t] deps: zb, oo, e1, er, je, dn, Un, c_
Mif = ve(() =>
  dt.object({
    feature: dt.string().min(1),
    command: dt
      .string()
      .optional()
      .transform((e) => (e === "" ? void 0 : e)),
    startsAt: Qll(),
    endsAt: Qll(),
    hideCommandChip: dt.boolean().optional(),
    creditless: dt.boolean().optional(),
    titleLabel: SKn(),
    commandBlurb: SKn(),
    tipBlurb: SKn(),
    isTopPriorityAnnouncement: dt.boolean().optional(),
    announcementLines: dt
      .array(
        dt.object({
          text: dt.string(),
          style: dt.enum(["bold", "dim"]).optional(),
        }),
      )
      .optional()
      .transform((e) => {
        let t = e?.filter((n) => n.text !== "");
        return t?.length ? t : void 0;
      })
      .catch(void 0),
    tips: dt
      .array(dt.string())
      .optional()
      .transform((e) => {
        let t = e?.filter(Boolean);
        return t?.length ? t : void 0;
      })
      .catch(void 0),
    redeemBy: SKn(),
  }),
);
Nif = ve(() =>
  dt.object({
    error: dt.object({
      message: dt.string(),
    }),
  }),
);
function icl({ commandName: e, agentId: t, isNonInteractiveSession: n, setAppState: r }) {
  if (t !== void 0 || n) return;
  if (Js()) return;
  rcl(e);
  let o = vKn();
  if (!HKn(e)) return;
  if (TKn(e)) {
    scl(e, r);
    return;
  }
  o.then((s) => {
    if (TKn(e)) {
      scl(e, r);
      return;
    }
    if (!s) return;
    let i = AKn();
    if (!i) return;
    r((a) => ({
      ...a,
      fotwClaim: {
        phase: "needs_payment_setup",
        command: i,
        amountMinorUnits: s.amountMinorUnits,
        currency: s.currency,
      },
    }));
  });
}
function scl(e, t) {
  let n = AKn(),
    r = DAe();
  if (!n || !r) return;
  (t((o) => ({
    ...o,
    fotwClaim: {
      phase: "pending",
      command: n,
      amountMinorUnits: r.amountMinorUnits,
      currency: r.currency,
    },
  })),
    tcl(e)
      .catch(() => ({
        outcome: "failed",
      }))
      .then((o) => {
        t((s) => {
          let i = s.fotwClaim;
          if (!i || i.command !== n) return s;
          if (o.outcome === "granted")
            return {
              ...s,
              fotwClaim: {
                phase: "granted",
                command: i.command,
                amountMinorUnits: o.amountMinorUnits,
                currency: o.currency,
              },
            };
          return {
            ...s,
            fotwClaim: {
              ...i,
              phase: "failed",
            },
          };
        });
      }));
}
