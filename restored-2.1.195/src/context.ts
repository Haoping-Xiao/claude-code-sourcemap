// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S4
// matched 2.1.88 source: src/context.ts
// class=modified  jaccard=0.3799  score=0.6008  fileCov=0.5081
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var S4 = E(() => {
  Qi();
  ft();
  YWe();
  Woa();
  dn();
  oo();
  dC();
  gb();
  je();
  Mm();
  fn();
  At();
  Bi();
  sa();
  Oso();
  _m();
  ((Zip = (Wso(), ro(nia)).getProjectContextBlock),
    (zso = Cn(async () => {
      let e = Date.now();
      In("info", "git_status_started");
      let t = Date.now(),
        n = await cb();
      if (
        (In("info", "git_is_git_check_completed", {
          duration_ms: Date.now() - t,
          is_git: n,
        }),
        !n)
      )
        return (
          In("info", "git_status_skipped_not_git", {
            duration_ms: Date.now() - e,
          }),
          xe("context_git_detect"),
          null
        );
      try {
        let r = Date.now(),
          [o, s, i, a, l] = await Promise.all([
            ub(),
            vD(),
            $n(go(), ["--no-optional-locks", "status", "--short"], {
              preserveOutputOnError: !1,
            }).then(({ stdout: d }) => d.trim()),
            $n(go(), ["--no-optional-locks", "log", "--oneline", "-n", "5"], {
              preserveOutputOnError: !1,
            }).then(({ stdout: d }) => d.trim()),
            $n(go(), ["config", "user.name"], {
              preserveOutputOnError: !1,
            }).then(({ stdout: d }) => d.trim()),
          ]);
        In("info", "git_commands_completed", {
          duration_ms: Date.now() - r,
          status_length: i.length,
        });
        let c = Su() ? Co : Ss,
          u =
            i.length > qso
              ? i.substring(0, qso) +
                `
... (truncated because it exceeds 2k characters. If you need more information, run "git status" using ${c})`
              : i;
        return (
          In("info", "git_status_completed", {
            duration_ms: Date.now() - e,
            truncated: i.length > qso,
          }),
          xe("context_git_detect"),
          [
            "This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.",
            `Current branch: ${o}`,
            `Main branch (you will usually use this for PRs): ${s}`,
            ...(l ? [`Git user: ${l}`] : []),
            `Status:
${u || "(clean)"}`,
            `Recent commits:
${a}`,
          ].join(`

`)
        );
      } catch (r) {
        return (
          In("error", "git_status_failed", {
            duration_ms: Date.now() - e,
          }),
          It("context_git_detect", "git_cmd_failed"),
          T(`Failed to get git status for system context: ${be(r)}`, {
            level: "error",
          }),
          null
        );
      }
    }, Vso)),
    (hH = Cn(
      async (e) => {
        let t = Date.now();
        In("info", "system_context_started");
        let n = ut(process.env.CLAUDE_CODE_REMOTE) || !Ejt() ? null : await zso();
        return (
          In("info", "system_context_completed", {
            duration_ms: Date.now() - t,
            has_git_status: n !== null,
            has_injection: e !== void 0,
          }),
          {
            ...(n && {
              gitStatus: n,
            }),
            ...(ut(process.env.CLAUDE_CODE_PERFORCE_MODE) && {
              perforceMode: `This is a Perforce workspace. Files not yet opened for edit are read-only; if a file is read-only, run \`p4 edit <file>\` via ${Su() ? Co : Ss} to check it out before modifying. Files that are already writable have been opened and can be edited directly.`,
            }),
            ...{},
          }
        );
      },
      (e) => `${Vso()}\x00${e ?? ""}`,
    )));
  if (!(hH.cache instanceof Map)) hH.cache = new Map();
  uS = Cn(async () => {
    let e = Date.now();
    In("info", "user_context_started");
    let t = gce(),
      n = t ? null : _jt(yjt(await Wv()));
    if (!t) xe("context_claude_md_load");
    Lbr(n || null);
    let r = process.env.ANTHROPIC_UNIX_SOCKET ? void 0 : Lc()?.emailAddress,
      o = await Zip();
    return (
      In("info", "user_context_completed", {
        duration_ms: Date.now() - e,
        claudemd_length: n?.length ?? 0,
        claudemd_disabled: Boolean(t),
        has_user_email: Boolean(r),
        has_project_context: Boolean(o),
      }),
      {
        ...(n && {
          claudeMd: n,
        }),
        ...(r && {
          userEmail: `The user's email address is ${r}.`,
        }),
        ...(o && {
          attachedProject: o,
        }),
        currentDate: Goa(sSe()),
      }
    );
  }, Vso);
});
var E4;
