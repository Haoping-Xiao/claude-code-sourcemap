// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uhr
// matched 2.1.88 source: src/cli/update.ts
// class=modified  jaccard=0.468  score=0.5831  fileCov=0.7032
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uhr] deps: Ye, dn, At, Ao, Hoe, dr, Epe, Jt, LPe, JN
pve = R(se(), 1);
var M5c = {};
_t(M5c, {
  update: () => update,
});
async function update() {
  if (Oe.DISABLE_UPDATES)
    ($i(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`),
      await ki(0));
  (G("tengu_update_check", {}),
    $i(`Current version: ${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION
    }
`));
  let e = jQ(),
    t = Yqt(),
    n = t ? (t === "claude-code@latest" ? "latest" : "stable") : Rgt() ? "stable" : e,
    r = n === "rc" ? "slow" : n;
  ($i(`Checking for updates to ${r} version...
`),
    T("update: Starting update check"),
    T("update: Running diagnostic"));
  let o = await I9e();
  if (
    (T(`update: Installation type: ${o.installationType}`),
    T(`update: Config install method: ${o.configInstallMethod}`),
    o.multipleInstallations.length > 1)
  ) {
    ($i(`
`),
      $i(
        wt.yellow("Warning: Multiple installations found") +
          `
`,
      ));
    for (let b of o.multipleInstallations) {
      let _ = o.installationType === b.type ? " (currently running)" : "";
      $i(`- ${b.type} at ${b.path}${_}
`);
    }
  }
  if (o.warnings.length > 0) {
    $i(`
`);
    for (let b of o.warnings)
      (T(`update: Warning detected: ${b.issue}`),
        T(`update: Showing warning: ${b.issue}`),
        $i(
          wt.yellow(`Warning: ${b.issue}
`),
        ),
        $i(
          wt.bold(`Fix: ${b.fix.replaceAll("`", "")}
`),
        ));
  }
  let s = Dt();
  if (!s.installMethod && o.installationType !== "package-manager") {
    ($i(`
`),
      $i(`Updating configuration to track installation method...
`));
    let b = "unknown";
    switch (o.installationType) {
      case "npm-local":
        b = "local";
        break;
      case "native":
        b = "native";
        break;
      case "npm-global":
        b = "global";
        break;
      default:
        b = "unknown";
    }
    (gn((_) => ({
      ..._,
      installMethod: b,
    })),
      $i(`Installation method set to: ${b}
`));
  }
  if (o.installationType === "development")
    ($i(`
`),
      $i(
        wt.yellow("Warning: Cannot update development build") +
          `
`,
      ),
      await ki(1));
  if (o.installationType === "package-manager") {
    let b = await C9e();
    if (
      ($i(`
`),
      b === "homebrew")
    ) {
      $i(`Claude is managed by Homebrew.
`);
      let _ = `brew upgrade ${t ?? "claude-code"}`,
        S = await TVn(t ?? "claude-code", n);
      if (S === null)
        ($i(`Could not check for updates (network check skipped or unavailable).
`),
          $i(`To update manually, run:
`),
          $i(
            wt.bold(`  ${_}`) +
              `
`,
          ));
      else if (
        !aL(
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          S,
        )
      )
        ($i(`Update available: ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        } \u2192 ${S}
`),
          $i(`
`),
          $i(`To update, run:
`),
          $i(
            wt.bold(`  ${_}`) +
              `
`,
          ));
      else
        $i(`Claude is up to date!
`);
      if (t !== "claude-code@latest")
        ($i(`
`),
          $i(
            wt.dim(`Tip: For more frequent updates, use the claude-code@latest cask:
`),
          ),
          $i(
            wt.dim(
              `  brew uninstall --cask ${t ?? "claude-code"} && brew install --cask claude-code@latest`,
            ) +
              `
`,
          ));
    } else if (b === "winget") {
      $i(`Claude is managed by winget.
`);
      let _ = await Igt(n);
      if (
        _ &&
        !aL(
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          _,
        )
      )
        ($i(`Update available: ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        } \u2192 ${_}
`),
          $i(`
`),
          $i(`To update, run:
`),
          $i(
            wt.bold("  winget upgrade Anthropic.ClaudeCode") +
              `
`,
          ));
      else
        $i(`Claude is up to date!
`);
    } else if (b === "apk") {
      $i(`Claude is managed by apk.
`);
      let _ = await Igt(n);
      if (
        _ &&
        !aL(
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          _,
        )
      )
        ($i(`Update available: ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        } \u2192 ${_}
`),
          $i(`
`),
          $i(`To update, run:
`),
          $i(
            wt.bold("  apk upgrade claude-code") +
              `
`,
          ));
      else
        $i(`Claude is up to date!
`);
    } else
      ($i(`Claude is managed by a package manager.
`),
        $i(`Please use your package manager to update.
`));
    await ki(0);
  }
  if (
    s.installMethod &&
    o.configInstallMethod !== "not set" &&
    o.installationType !== "package-manager"
  ) {
    let { installationType: b, configInstallMethod: _ } = o,
      A =
        {
          "npm-local": "local",
          "npm-global": "global",
          native: "native",
          development: "development",
          unknown: "unknown",
        }[b] || b;
    if (A !== _ && _ !== "unknown")
      ($i(`
`),
        $i(
          wt.yellow("Warning: Configuration mismatch") +
            `
`,
        ),
        $i(`Config expects: ${_} installation
`),
        $i(`Currently running: ${b}
`),
        $i(
          wt.yellow(`Updating the ${b} installation you are currently using`) +
            `
`,
        ),
        gn((v) => ({
          ...v,
          installMethod: A,
        })),
        $i(`Config updated to reflect current installation method: ${A}
`));
  }
  if (o.installationType === "native") {
    if (
      (T("update: Detected native installation, using native updater"),
      Dr()?.minimumVersion || yn("policySettings")?.requiredMaximumVersion)
    ) {
      let b = await Jqt(n).catch(() => null),
        _ = b ? HVn(b) : null;
      if (b && _)
        ($i(
          wt.yellow(
            `The ${r} channel is at ${b}, which is ${_}. Staying on ${
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION
            }.`,
          ) +
            `
`,
        ),
          await ki(0));
    }
    Jqt(n)
      .then((b) => {
        if (
          b &&
          b !==
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.VERSION
        )
          $i(`Updating to ${b}...
`);
      })
      .catch(() => {});
    try {
      let b = await L9e(n, !1);
      if (b.lockFailed) {
        let _ = b.lockHolderPid ? ` (PID ${b.lockHolderPid})` : "";
        ($i(
          wt.yellow(
            `Another Claude process${_} is currently running. Please try again in a moment.`,
          ) +
            `
`,
        ),
          await ki(0));
      }
      if (!b.latestVersion)
        (process.stderr.write(`Failed to check for updates
`),
          await ki(1));
      if (
        b.wasUpdated &&
        b.latestVersion !==
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
      )
        ($i(
          wt.green(
            `Successfully updated from ${
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION
            } to version ${b.latestVersion}`,
          ) +
            `
`,
        ),
          await KQr(),
          await D5c(b.latestVersion));
      else
        $i(
          wt.green(
            `Claude Code is up to date (${
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION
            })`,
          ) +
            `
`,
        );
      await ki(0);
    } catch (b) {
      (process.stderr.write(`Error: Failed to install native update
`),
        process.stderr.write(
          String(b) +
            `
`,
        ),
        process.stderr.write(`Try running "claude doctor" for diagnostics
`),
        await ki(1));
    }
  }
  if (s.installMethod !== "native") await nVt();
  (T("update: Checking npm registry for latest version"),
    T(
      `update: Package URL: ${
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.PACKAGE_URL
      }`,
    ));
  let i = n === "stable" ? "stable" : "latest",
    a = `npm view ${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.PACKAGE_URL
    }@${i} version`;
  T(`update: Running: ${a}`);
  let l = await Igt(n);
  if ((T(`update: Latest version from npm: ${l || "FAILED"}`), !l)) {
    if (
      (T("update: Failed to get latest version from npm registry"),
      process.stderr.write(
        wt.red("Failed to check for updates") +
          `
`,
      ),
      process.stderr.write(`Unable to fetch latest version from npm registry
`),
      process.stderr.write(`
`),
      process.stderr.write(`Possible causes:
`),
      process.stderr.write(`  \u2022 Network connectivity issues
`),
      process.stderr.write(`  \u2022 npm registry is unreachable
`),
      process.stderr.write(`  \u2022 Corporate proxy/firewall blocking npm
`),
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.PACKAGE_URL &&
        !{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.PACKAGE_URL.startsWith("@anthropic"))
    )
      process.stderr.write(`  \u2022 Internal/development build not published to npm
`);
    (process.stderr.write(`
`),
      process.stderr.write(`Try:
`),
      process.stderr.write(`  \u2022 Check your internet connection
`),
      process.stderr.write(`  \u2022 Run with --debug flag for more details
`));
    let b =
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.PACKAGE_URL || "@anthropic-ai/claude-code";
    (process.stderr.write(`  \u2022 Manually check: npm view ${b} version
`),
      process.stderr.write(`  \u2022 Check if you need to login: npm whoami
`),
      await ki(1));
  }
  let { maxVersion: c, forceDowngradeEnabled: u } = await v9e(),
    d = l,
    p = !1;
  if (
    u &&
    c &&
    wgt(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      c,
      "auto_updater",
    )
  )
    ((d = c), (p = !0));
  else if (c && l && cH(l, c))
    (T(`update: maxVersion ${c} is set, capping update from ${l} to ${c}`),
      (d = cH(
        c,
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      )
        ? c
        : {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION));
  let f = d ? HVn(d) : null;
  if (d && f) {
    let b =
      d === l
        ? `The ${r} channel is at ${d}`
        : `The update target is capped at ${d} by a server-side version policy`;
    ($i(
      wt.yellow(
        `${b}, which is ${f}. Staying on ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        }.`,
      ) +
        `
`,
    ),
      await ki(0));
  }
  if (
    d ===
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION
  )
    ($i(
      wt.green(
        `Claude Code is up to date (${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        })`,
      ) +
        `
`,
    ),
      await ki(0));
  if (
    !p &&
    d &&
    qte(
      d,
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    )
  )
    ($i(
      wt.yellow(
        `You're running ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        }, which is newer than the ${r} channel's ${d}. Skipping update. To switch back to the channel version, run claude install ${d}.`,
      ) +
        `
`,
    ),
      await ki(0));
  if (p)
    (G("tengu_auto_updater_forced_downgrade", {
      from_version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      to_version: tS(d),
    }),
      $i(
        wt.yellow(
          `Downgrading to ${d} (current: ${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.VERSION
          }) \u2014 required by a server-side version policy.`,
        ) +
          `
`,
      ));
  else
    $i(`New version available: ${d} (current: ${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION
    })
`);
  $i(`Installing update...
`);
  let m = !1,
    g = "";
  switch (o.installationType) {
    case "npm-local":
      ((m = !0), (g = "local"));
      break;
    case "npm-global":
      ((m = !1), (g = "global"));
      break;
    case "unknown": {
      let b = await E9e();
      ((m = b),
        (g = b ? "local" : "global"),
        $i(
          wt.yellow("Warning: Could not determine installation type") +
            `
`,
        ),
        $i(`Attempting ${g} update based on file detection...
`));
      break;
    }
    default:
      (Le("update_apply", "update_apply_unsupported_install_type"),
        process.stderr.write(`Error: Cannot update ${o.installationType} installation
`),
        await ki(1));
  }
  ($i(`Using ${g} installation update method...
`),
    T(`update: Update method determined: ${g}`),
    T(`update: useLocalUpdate: ${m}`));
  let h, y;
  if (m)
    (T("update: Calling installOrUpdateClaudePackage() for local update"), (h = await qqt(n, d)));
  else
    (T("update: Calling installGlobalPackage() for global update"),
      (y = await Kqt(d)),
      (h = y.status));
  if ((T(`update: Installation status: ${h}`), h !== "in_progress"))
    await w9e({
      timestamp: new Date().toISOString(),
      path: m ? "npm-local" : "npm-global",
      outcome: h === "success" ? "success" : "failed",
      status: h,
      version_from: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      version_to: d,
      error_code:
        h === "install_failed" && xgt()
          ? "update_apply_restore_failed"
          : y?.failureHint === "windows_running_exe_lock"
            ? "update_apply_exe_locked"
            : null,
    });
  switch (h) {
    case "success":
      ($i(
        wt.green(
          p
            ? `Successfully downgraded from ${
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.195",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-06-26T01:00:56Z",
                  GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                }.VERSION
              } to version ${d}`
            : `Successfully updated from ${
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.195",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-06-26T01:00:56Z",
                  GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                }.VERSION
              } to version ${d}`,
        ) +
          `
`,
      ),
        await KQr(),
        await D5c(d));
      break;
    case "no_permissions":
      if (
        (process.stderr.write(`Error: Insufficient permissions to install update
`),
        m)
      )
        (process.stderr.write(`Try manually updating with:
`),
          process.stderr.write(`  cd ~/.claude/local && npm update ${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.PACKAGE_URL
          }
`));
      else
        (process.stderr.write(`Try running with sudo or fix npm permissions
`),
          process.stderr.write(`Or consider using native installation with: claude install
`));
      await ki(1);
      break;
    case "install_failed": {
      let b = xgt();
      if (!b && y?.failureHint === "windows_running_exe_lock") {
        (process.stderr
          .write(`Error: Update failed because claude.exe is in use. Close other Claude Code sessions (including VS Code), then run claude update again, or run claude doctor.
`),
          await ki(1));
        break;
      }
      if (
        (process.stderr.write(`Error: Failed to install update
`),
        b)
      )
        (process.stderr
          .write(`Your Claude Code executable could not be restored after the failed update. It was preserved at ${b.preservedPath}
`),
          process.stderr
            .write(`Rename it back to ${P5c.basename(b.originalPath)}, or reinstall with: npm i -g ${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.PACKAGE_URL
          }
`));
      else if (m)
        (process.stderr.write(`Try manually updating with:
`),
          process.stderr.write(`  cd ~/.claude/local && npm update ${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.PACKAGE_URL
          }
`));
      else
        process.stderr.write(`Or consider using native installation with: claude install
`);
      await ki(1);
      break;
    }
    case "in_progress":
      (process.stderr.write(`Error: Another instance is currently performing an update
`),
        process.stderr.write(`Please wait and try again later
`),
        await ki(1));
      break;
  }
  await ki(0);
}
async function D5c(e) {
  if (await mNl(e))
    $i(
      wt.dim(
        `${w_e()} will restart on the new version shortly; background jobs continue uninterrupted`,
      ) +
        `
`,
    );
}
var P5c;
