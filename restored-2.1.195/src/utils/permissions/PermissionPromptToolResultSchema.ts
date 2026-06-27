// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tXo
// matched 2.1.88 source: src/utils/permissions/PermissionPromptToolResultSchema.ts
// class=modified  jaccard=0.39  score=0.6464  fileCov=0.4957
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var tXo = E(() => {
  Xr();
  je();
  $I();
  H7n();
  ((SNH = ve(() =>
    ol.object({
      tool_name: ol.string().describe("The name of the tool requesting permission"),
      input: ol.record(ol.string(), ol.unknown()).describe("The input for the tool"),
      tool_use_id: ol.string().optional().describe("The unique tool use request ID"),
    }),
  )),
    (QBc = ve(() =>
      ol
        .enum(["user_temporary", "user_permanent", "user_reject"])
        .optional()
        .catch(void 0),
    )),
    (QRm = ve(() =>
      ol.object({
        behavior: ol.literal("allow"),
        updatedInput: ol.record(ol.string(), ol.unknown()),
        updatedPermissions: ol
          .array(nbt())
          .optional()
          .catch((e) => {
            T(
              `Malformed updatedPermissions from SDK host ignored: ${e.error.issues[0]?.message ?? "unknown"}`,
              {
                level: "warn",
              },
            );
            return;
          }),
        toolUseID: ol.string().optional(),
        decisionClassification: QBc(),
      }),
    )),
    (ZRm = ve(() =>
      ol.object({
        behavior: ol.literal("deny"),
        message: ol.string(),
        interrupt: ol.boolean().optional(),
        toolUseID: ol.string().optional(),
        decisionClassification: QBc(),
      }),
    )),
    (unn = ve(() => ol.union([QRm(), ZRm()]))));
});
function ZBc(e, t, n, r) {
  return {
    tool_name: `dialog:${e}`,
    display_tool_name: "Claude needs your input",
    action_description: eLm[e] ?? `Respond to the ${e} dialog to continue`,
    raw_command: void 0,
    tool_use_id: r ?? "",
    request_id: n,
    input: {
      dialog_kind: e,
      payload: t,
    },
  };
}
var eLm;
