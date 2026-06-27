// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $nc
// matched 2.1.88 source: src/commands/remote-setup/remote-setup.tsx
// class=modified  jaccard=0.4989  score=0.7114  fileCov=0.6255
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module $nc] deps: constants/betas.ts, constants/oauth.ts, utils/env.ts, services/mcp/officialRegistry.ts, utils/debug.ts, utils/teleport/api.ts
BGo = class BGo {
  #e;
  constructor(e) {
    this.#e = e;
  }
  reveal() {
    return this.#e;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
};
async function checkLoginState() {
  if (!(await Pnc()))
    return {
      status: "not_signed_in",
    };
  let e = await aar();
  if (e === "not_installed")
    return {
      status: "gh_not_installed",
    };
  if (e === "not_authenticated")
    return {
      status: "gh_not_authenticated",
    };
  let { stdout: t } = await pv("gh", ["auth", "token"], {
      stdout: "pipe",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    }),
    n = t.trim();
  if (!n)
    return {
      status: "gh_not_authenticated",
    };
  return {
    status: "has_gh_token",
    token: new BGo(n),
  };
}
function errorMessage(err, codeUrl) {
  switch (err.kind) {
    case "not_signed_in":
      return `Login failed. Please visit ${codeUrl} and login using the GitHub App`;
    case "invalid_token":
      return "GitHub rejected that token. Run `gh auth login` and try again.";
    case "server":
      return `Server error (${err.status}). Try again in a moment.`;
    case "network":
      return "Couldn't reach the server. Check your connection.";
  }
}
function Web({ onDone: e }) {
  let [step, n] = THt.useState({
      name: "checking",
    }),
    r = THt.useRef(!1);
  THt.useEffect(() => {
    (G("tengu_remote_setup_started", {}),
      checkLoginState().then(async (a) => {
        if (r.current) return;
        switch (a.status) {
          case "not_signed_in":
            (G("tengu_remote_setup_result", {
              result: We("not_signed_in"),
            }),
              e("Not signed in to Claude. Run /login first."));
            return;
          case "gh_not_installed":
          case "gh_not_authenticated": {
            let l = `${lar()}/onboarding?step=alt-auth`;
            if ((await ac(l), r.current)) return;
            (G("tengu_remote_setup_result", {
              result: $e(a.status),
            }),
              e(
                a.status === "gh_not_installed"
                  ? `GitHub CLI not found. Install it via https://cli.github.com/, then run \`gh auth login\`, or connect GitHub on the web: ${l}`
                  : `GitHub CLI not authenticated. Run \`gh auth login\` and try again, or connect GitHub on the web: ${l}`,
              ));
            return;
          }
          case "has_gh_token": {
            let l = await Mnc();
            if (r.current) return;
            n({
              name: "confirm",
              token: a.token,
              existingOAuth: l === "oauth",
            });
          }
        }
      }));
  }, []);
  let o = () => {
      ((r.current = !0),
        G("tengu_remote_setup_result", {
          result: We("cancelled"),
        }),
        e());
    },
    s = async (a) => {
      n({
        name: "uploading",
      });
      let l = await Dnc(a);
      if (r.current) return;
      if (!l.ok) {
        (G("tengu_remote_setup_result", {
          result: We("import_failed"),
          error_kind: $e(l.error.kind),
        }),
          e(errorMessage(l.error, lar())));
        return;
      }
      let c = !0;
      try {
        c = (await Ure()).length === 0;
      } catch {
        c = !0;
      }
      if (r.current) return;
      if (c) {
        try {
          await yft();
        } catch (d) {
          T(`[web-setup] Failed to create default environment: ${d}`, {
            level: "warn",
          });
        }
        if (r.current) return;
      }
      let u = lar();
      if ((await ac(u), r.current)) return;
      (G("tengu_remote_setup_result", {
        result: We("success"),
      }),
        e(`Connected as ${l.result.github_username}. Opened ${u}`));
    };
  if (step.name === "checking" || step.name === "uploading")
    return mZ.jsx(zn, {
      title: "Connect Claude on the web to GitHub?",
      onCancel: o,
      hideInputGuide: !0,
      children: mZ.jsx(Vc, {
        message:
          step.name === "uploading"
            ? "Connecting GitHub to Claude\u2026"
            : "Checking login status\u2026",
      }),
    });
  let i = step.token;
  return mZ.jsxs(zn, {
    title: "Connect Claude on the web to GitHub?",
    onCancel: o,
    hideInputGuide: !0,
    children: [
      mZ.jsxs(U, {
        flexDirection: "column",
        children: [
          mZ.jsx(w, {
            children:
              "Claude on the web requires connecting to your GitHub account to clone and push code on your behalf.",
          }),
          mZ.jsx(w, {
            dimColor: !0,
            children: "Your local credentials are used to authenticate with GitHub",
          }),
          step.existingOAuth &&
            mZ.jsx(U, {
              marginTop: 1,
              children: mZ.jsxs(w, {
                color: "warning",
                children: [
                  "You're already connected via the GitHub App. Continuing replaces your authentication credential for Claude Code on the web. Your repository access will change to reflect your local token's scopes. You can reconnect the GitHub App from",
                  " ",
                  OSe(),
                  " later.",
                ],
              }),
            }),
        ],
      }),
      mZ.jsx(Kl, {
        confirmLabel: step.existingOAuth ? "Replace connection" : "Continue",
        cancelLabel: "Cancel",
        onConfirm: () => void s(i),
        onCancel: o,
      }),
    ],
  });
}
async function call(e) {
  return mZ.jsx(Web, {
    onDone: e,
  });
}
var THt, mZ;
