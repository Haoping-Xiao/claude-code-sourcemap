// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CSl
// matched 2.1.88 source: src/tools/BriefTool/BriefTool.ts
// class=modified (alt of src/tools/BriefTool/BriefTool.ts)  jaccard=0.2578  score=0.439  fileCov=0.3845
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var CSl = E(() => {
  Xr();
  ft();
  Un();
  kt();
  ii();
  fn();
  Ls();
  qd();
  sr();
  z0o();
  l3();
  vSl();
  ((Thf = ve(() =>
    H.strictObject({
      files: H.preprocess(
        (e) => (typeof e === "string" ? [e] : e),
        H.array(H.string()).min(1),
      ).describe(
        "File paths (absolute or relative to cwd) to send to the user. Always pass an array, even for a single file.",
      ),
      caption: H.string().optional().describe("Optional short caption for the file(s)."),
      status: H.enum(["normal", "proactive"]).describe(
        "Use 'proactive' when you're surfacing a file the user hasn't asked for and needs to see now \u2014 a generated artifact, a completed report. Use 'normal' when replying to something the user just said.",
      ),
    }),
  )),
    (vhf = ve(() =>
      H.object({
        caption: H.string().optional(),
        attachments: H.array(
          H.object({
            path: H.string(),
            size: H.number(),
            isImage: H.boolean(),
            file_uuid: H.string().optional(),
            media_type: H.string().optional(),
          }),
        ).describe("Resolved file metadata"),
      }),
    )),
    (whf = ti({
      name: K2t,
      searchHint: "deliver files (screenshots, reports, artifacts) to the user",
      briefStandalone: true,
      maxResultSizeChars: 100000 /* 1e5 */,
      userFacingName() {
        return "";
      },
      get inputSchema() {
        return Thf();
      },
      get outputSchema() {
        return vhf();
      },
      isEnabled() {
        if (fr() !== "firstParty" || Vi()) return false;
        if (!at("tengu_send_user_file", true)) return false;
        return (
          (d0() ||
            !!process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE ||
            ut(process.env.CLAUDE_CODE_REMOTE)) &&
          !z6e()
        );
      },
      isConcurrencySafe() {
        return true;
      },
      isReadOnly() {
        return true;
      },
      toAutoClassifierInput(e) {
        return e.caption ?? `[${e.files?.length ?? 0} file(s)]`;
      },
      async validateInput({ files: e }, t) {
        return K7n(e);
      },
      async description() {
        return qoo;
      },
      async prompt() {
        return Voo;
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let n = e.attachments.length,
          r = e.attachments
            .filter((o) => o.file_uuid !== void 0)
            .map((o) => `  ${o.path} \u2192 file_uuid: ${o.file_uuid}`);
        return {
          tool_use_id: t,
          type: "tool_result",
          content:
            `${n} ${bn(n, "file")} delivered to user.` +
            (r.length > 0
              ? `
${r.join(`
`)}`
              : ""),
        };
      },
      renderToolUseMessage: HSl,
      renderToolResultMessage: TSl,
      async call({ files: e, caption: t, status: n }, r) {
        G("tengu_send_user_file", {
          proactive: n === "proactive",
          file_count: e.length,
        });
        let o = r.getAppState(),
          s = await Y7n(e, {
            replBridgeEnabled: o.replBridgeEnabled,
            signal: r.abortController.signal,
          });
        return {
          data: {
            caption: t,
            attachments: s,
          },
        };
      },
    })));
});
function IRo(e) {
  let t = ISl.c(13),
    { command: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = eua()), (t[0] = r));
  else r = t[0];
  let o = r,
    [s, i] = xSl.useState(false);
  if (!o) {
    let p;
    if (t[1] !== n)
      ((p = Pzt.jsxs(w, {
        underline: true,
        children: ["/", n],
      })),
        (t[1] = n),
        (t[2] = p));
    else p = t[2];
    return p;
  }
  let a;
  if (t[3] !== n)
    ((a = () => {
      (G("tengu_slash_link_clicked", {
        command: n,
      }),
        o(n));
    }),
      (t[3] = n),
      (t[4] = a));
  else a = t[4];
  let l, c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((l = () => i(true)), (c = () => i(false)), (t[5] = l), (t[6] = c));
  else ((l = t[5]), (c = t[6]));
  let u;
  if (t[7] !== n || t[8] !== s)
    ((u = Pzt.jsxs(w, {
      underline: true,
      bold: s,
      children: ["/", n],
    })),
      (t[7] = n),
      (t[8] = s),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] !== a || t[11] !== u)
    ((d = Pzt.jsx(U, {
      onClick: a,
      onMouseEnter: l,
      onMouseLeave: c,
      children: u,
    })),
      (t[10] = a),
      (t[11] = u),
      (t[12] = d));
  else d = t[12];
  return d;
}
var ISl, xSl, Pzt;
