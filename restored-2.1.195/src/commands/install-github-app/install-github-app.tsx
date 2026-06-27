// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EFl
// matched 2.1.88 source: src/commands/install-github-app/install-github-app.tsx
// class=modified  jaccard=0.54  score=0.7546  fileCov=0.655
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var EFl = E(() => {
  si();
  lJ();
  Ko();
  R6();
  Ye();
  ps();
  ((bFl = R(lt(), 1)), (Wk = R(se(), 1)));
});
var AFl = {};
_t(AFl, {
  call: () => call,
});
function H1f(e) {
  let [t] = eZ.useState(() => lI()),
    [n, r] = eZ.useState({
      ...A1f,
      useExistingKey: !!t,
      selectedApiKeyOption: t ? "existing" : eS() ? "oauth" : "new",
    }),
    o = ks();
  (ig(),
    No(
      {
        "confirm:no": () => e.onDone("Installation cancelled by user"),
      },
      {
        context: "Settings",
        isActive: n.step !== "success" && n.step !== "error" && n.step !== "oauth-flow",
      },
    ),
    eZ.useEffect(() => {
      G("tengu_install_github_app_started", {});
    }, []));
  let s = eZ.useCallback(async () => {
    let I = [];
    if (
      (
        await S0("gh --version", {
          reject: !1,
        })
      ).exitCode !== 0
    )
      I.push({
        title: "GitHub CLI not found",
        message: "GitHub CLI (gh) does not appear to be installed or accessible.",
        instructions: [
          "Install GitHub CLI from https://cli.github.com/",
          "macOS: brew install gh",
          "Windows: winget install --id GitHub.cli",
          "Linux: See installation instructions at https://github.com/cli/cli#installation",
        ],
      });
    let D = await S0("gh auth status -a", {
      reject: !1,
    });
    if (D.exitCode !== 0)
      I.push({
        title: "GitHub CLI not authenticated",
        message: "GitHub CLI does not appear to be authenticated.",
        instructions: [
          "Run: gh auth login",
          "Follow the prompts to authenticate with GitHub",
          "Or set up authentication using environment variables or other methods",
        ],
      });
    else {
      let O = D.stdout.match(/Token scopes:.*$/m);
      if (O) {
        let L = O[0],
          M = [];
        if (!L.includes("repo")) M.push("repo");
        if (!L.includes("workflow")) M.push("workflow");
        if (M.length > 0) {
          r((N) => ({
            ...N,
            step: "error",
            error: `GitHub CLI is missing required permissions: ${M.join(", ")}.`,
            errorReason: "Missing required scopes",
            errorInstructions: [
              `Your GitHub CLI authentication is missing the "${M.join('" and "')}" ${bn(M.length, "scope")} needed to manage GitHub Actions and secrets.`,
              "",
              "To fix this, run:",
              "  gh auth refresh -h github.com -s repo,workflow",
              "",
              "This will add the necessary permissions to manage workflows and secrets.",
            ],
          }));
          return;
        }
      }
    }
    let P = (await XFe()) ?? "";
    (G("tengu_install_github_app_step_completed", {
      step: We("check-gh"),
    }),
      r((O) => ({
        ...O,
        warnings: I,
        currentRepo: P,
        selectedRepoName: P,
        useCurrentRepo: !!P,
        step: I.length > 0 ? "warnings" : "choose-repo",
      })));
  }, []);
  eZ.useEffect(() => {
    if (n.step === "check-gh") s();
  }, [n.step, s]);
  let i = eZ.useCallback(
    async (I, k) => {
      r((D) => ({
        ...D,
        step: "creating",
        currentWorkflowInstallStep: 0,
      }));
      try {
        (await yFl(
          n.selectedRepoName,
          I,
          k,
          () => {
            r((D) => ({
              ...D,
              currentWorkflowInstallStep: D.currentWorkflowInstallStep + 1,
            }));
          },
          n.workflowAction === "skip",
          n.selectedWorkflows,
          n.authType,
          {
            useCurrentRepo: n.useCurrentRepo,
            workflowExists: n.workflowExists,
            secretExists: n.secretExists,
          },
        ),
          G("tengu_install_github_app_step_completed", {
            step: We("creating"),
          }),
          r((D) => ({
            ...D,
            step: "success",
          })));
      } catch (D) {
        let P = D instanceof Error ? D.message : "Failed to set up GitHub Actions";
        if (P.includes("workflow file already exists"))
          (G("tengu_install_github_app_error", {
            reason: We("workflow_file_exists"),
          }),
            r((O) => ({
              ...O,
              step: "error",
              error: "A Claude workflow file already exists in this repository.",
              errorReason: "Workflow file conflict",
              errorInstructions: [
                "The file .github/workflows/claude.yml already exists",
                "You can either:",
                "  1. Delete the existing file and run this command again",
                "  2. Update the existing file manually using the template from:",
                `     ${Vfe}`,
              ],
            })));
        else
          (G("tengu_install_github_app_error", {
            reason: We("setup_github_actions_failed"),
          }),
            r((O) => ({
              ...O,
              step: "error",
              error: P,
              errorReason: "GitHub Actions setup failed",
              errorInstructions: [],
            })));
      }
    },
    [
      n.selectedRepoName,
      n.workflowAction,
      n.selectedWorkflows,
      n.useCurrentRepo,
      n.workflowExists,
      n.secretExists,
      n.authType,
    ],
  );
  async function a() {
    await ac("https://github.com/apps/claude");
  }
  async function l(I) {
    try {
      let k = await $n("gh", ["api", `repos/${I}`, "--jq", ".permissions.admin"]);
      if (k.code === 0)
        return {
          hasAccess: k.stdout.trim() === "true",
        };
      if (k.stderr.includes("404") || k.stderr.includes("Not Found"))
        return {
          hasAccess: !1,
          error: "repository_not_found",
        };
      return {
        hasAccess: !1,
      };
    } catch {
      return {
        hasAccess: !1,
      };
    }
  }
  async function c(I) {
    return (
      (await $n("gh", ["api", `repos/${I}/contents/.github/workflows/claude.yml`, "--jq", ".sha"]))
        .code === 0
    );
  }
  async function u() {
    let I = await $n("gh", ["secret", "list", "--app", "actions", "--repo", n.selectedRepoName]);
    if (I.code === 0) {
      if (
        I.stdout
          .split(
            `
`,
          )
          .some((P) => /^ANTHROPIC_API_KEY\s+/.test(P))
      )
        r((P) => ({
          ...P,
          secretExists: !0,
          step: "check-existing-secret",
        }));
      else if (t)
        (r((P) => ({
          ...P,
          apiKeyOrOAuthToken: t,
          useExistingKey: !0,
        })),
          await i(t, n.secretName));
      else
        r((P) => ({
          ...P,
          step: "api-key",
        }));
    } else if (t)
      (r((k) => ({
        ...k,
        apiKeyOrOAuthToken: t,
        useExistingKey: !0,
      })),
        await i(t, n.secretName));
    else
      r((k) => ({
        ...k,
        step: "api-key",
      }));
  }
  let d = async () => {
      if (n.step === "warnings")
        (G("tengu_install_github_app_step_completed", {
          step: We("warnings"),
        }),
          r((I) => ({
            ...I,
            step: "install-app",
          })),
          o.setTimeout(a, 0));
      else if (n.step === "choose-repo") {
        let I = n.useCurrentRepo ? n.currentRepo : n.selectedRepoName;
        if (!I.trim()) return;
        let k = [];
        {
          let O, L;
          if (I.includes("://"))
            try {
              let M = new URL(I);
              ((O = M.hostname), (L = M.pathname.replace(/^\/+/, "")));
            } catch {}
          else {
            let M = I.match(/^[^@]+@([^:]+):(.+)$/);
            if (M) ((O = M[1]), (L = M[2]));
            else {
              let N = I.search(/[:/]/);
              if (N > 0) ((O = I.slice(0, N)), (L = I.slice(N + 1)));
            }
          }
          if (O && $m(O)) {
            let M = L?.match(/^([^/]+\/[^/]+?)(?:\.git)?\/?$/);
            if (M?.[1]) I = M[1];
            else
              k.push({
                title: "Invalid GitHub URL format",
                message: "The repository URL format appears to be invalid.",
                instructions: [
                  `Use format: owner/repo or https://${JH}/owner/repo`,
                  "Example: anthropics/claude-cli",
                ],
              });
          }
        }
        if (!I.includes("/"))
          k.push({
            title: "Repository format warning",
            message: 'Repository should be in format "owner/repo"',
            instructions: ["Use format: owner/repo", "Example: anthropics/claude-cli"],
          });
        let D = await l(I);
        if (D.error === "repository_not_found")
          k.push({
            title: "Repository not found",
            message: `Repository ${I} was not found or you don't have access.`,
            instructions: [
              `Check that the repository name is correct: ${I}`,
              "Ensure you have access to this repository",
              'For private repositories, make sure your GitHub token has the "repo" scope',
              "You can add the repo scope with: gh auth refresh -h github.com -s repo,workflow",
            ],
          });
        else if (!D.hasAccess)
          k.push({
            title: "Admin permissions required",
            message: `You might need admin permissions on ${I} to set up GitHub Actions.`,
            instructions: [
              "Repository admins can install GitHub Apps and set secrets",
              "Ask a repository admin to run this command if setup fails",
              "Alternatively, you can use the manual setup instructions",
            ],
          });
        let P = await c(I);
        if (k.length > 0) {
          let O = [...n.warnings, ...k];
          r((L) => ({
            ...L,
            selectedRepoName: I,
            workflowExists: P,
            warnings: O,
            step: "warnings",
          }));
        } else
          (G("tengu_install_github_app_step_completed", {
            step: We("choose-repo"),
          }),
            r((O) => ({
              ...O,
              selectedRepoName: I,
              workflowExists: P,
              step: "install-app",
            })),
            o.setTimeout(a, 0));
      } else if (n.step === "install-app")
        (G("tengu_install_github_app_step_completed", {
          step: We("install-app"),
        }),
          r((I) => ({
            ...I,
            step: "setup-actions-prompt",
          })));
      else if (n.step === "check-existing-workflow") return;
      else if (n.step === "select-workflows") return;
      else if (n.step === "check-existing-secret") {
        if (
          (G("tengu_install_github_app_step_completed", {
            step: We("check-existing-secret"),
          }),
          n.useExistingSecret)
        )
          await i(null, n.secretName);
        else await i(n.apiKeyOrOAuthToken, n.secretName);
      } else if (n.step === "api-key") {
        if (n.selectedApiKeyOption === "oauth") return;
        let I = n.selectedApiKeyOption === "existing" ? t : n.apiKeyOrOAuthToken;
        if (!I) {
          (G("tengu_install_github_app_error", {
            reason: We("api_key_missing"),
          }),
            r((D) => ({
              ...D,
              step: "error",
              error: "API key is required",
            })));
          return;
        }
        r((D) => ({
          ...D,
          apiKeyOrOAuthToken: I,
          useExistingKey: n.selectedApiKeyOption === "existing",
        }));
        let k = await $n("gh", [
          "secret",
          "list",
          "--app",
          "actions",
          "--repo",
          n.selectedRepoName,
        ]);
        if (k.code === 0) {
          if (
            k.stdout
              .split(
                `
`,
              )
              .some((O) => /^ANTHROPIC_API_KEY\s+/.test(O))
          )
            (G("tengu_install_github_app_step_completed", {
              step: We("api-key"),
            }),
              r((O) => ({
                ...O,
                secretExists: !0,
                step: "check-existing-secret",
              })));
          else
            (G("tengu_install_github_app_step_completed", {
              step: We("api-key"),
            }),
              await i(I, n.secretName));
        } else
          (G("tengu_install_github_app_step_completed", {
            step: We("api-key"),
          }),
            await i(I, n.secretName));
      }
    },
    p = (I) => {
      r((k) => ({
        ...k,
        selectedRepoName: I,
      }));
    },
    f = (I) => {
      r((k) => ({
        ...k,
        apiKeyOrOAuthToken: I,
      }));
    },
    m = (I) => {
      r((k) => ({
        ...k,
        selectedApiKeyOption: I,
      }));
    },
    g = eZ.useCallback(() => {
      (G("tengu_install_github_app_step_completed", {
        step: We("api-key"),
      }),
        r((I) => ({
          ...I,
          step: "oauth-flow",
        })));
    }, []),
    h = eZ.useCallback(
      (I) => {
        (G("tengu_install_github_app_step_completed", {
          step: We("oauth-flow"),
        }),
          r((k) => ({
            ...k,
            apiKeyOrOAuthToken: I,
            useExistingKey: !1,
            secretName: "CLAUDE_CODE_OAUTH_TOKEN",
            authType: "oauth_token",
          })),
          i(I, "CLAUDE_CODE_OAUTH_TOKEN"));
      },
      [i],
    ),
    y = eZ.useCallback(() => {
      r((I) => ({
        ...I,
        step: "api-key",
      }));
    }, []),
    b = (I) => {
      if (I && !/^[a-zA-Z0-9_]+$/.test(I)) return;
      r((k) => ({
        ...k,
        secretName: I,
      }));
    },
    _ = (I) => {
      r((k) => ({
        ...k,
        useCurrentRepo: I,
        selectedRepoName: I ? k.currentRepo : "",
      }));
    },
    S = (I) => {
      r((k) => ({
        ...k,
        useExistingKey: I,
      }));
    },
    A = (I) => {
      r((k) => ({
        ...k,
        useExistingSecret: I,
        secretName: I ? "ANTHROPIC_API_KEY" : "",
      }));
    },
    v = (I) => {
      if (
        (G("tengu_install_github_app_step_completed", {
          step: We("setup-actions-prompt"),
          action: $e(I),
        }),
        I === "skip")
      )
        r((k) => ({
          ...k,
          step: "success",
          appOnlyInstall: !0,
        }));
      else if (n.workflowExists)
        r((k) => ({
          ...k,
          step: "check-existing-workflow",
        }));
      else
        r((k) => ({
          ...k,
          step: "select-workflows",
        }));
    },
    C = async (I) => {
      if (I === "exit") {
        e.onDone("Installation cancelled by user");
        return;
      }
      if (
        (G("tengu_install_github_app_step_completed", {
          step: We("check-existing-workflow"),
        }),
        r((k) => ({
          ...k,
          workflowAction: I,
        })),
        I === "skip" || I === "update")
      )
        if (t) await u();
        else
          r((k) => ({
            ...k,
            step: "api-key",
          }));
    };
  function x(I) {
    if ((I.preventDefault(), n.step === "success")) G("tengu_install_github_app_completed", {});
    e.onDone(
      n.step === "success"
        ? n.appOnlyInstall
          ? "GitHub App installed!"
          : "GitHub Actions setup complete!"
        : n.error
          ? `Couldn't install GitHub App: ${n.error}
For manual setup instructions, see: ${Vfe}`
          : `GitHub App installation failed
For manual setup instructions, see: ${Vfe}`,
    );
  }
  switch (n.step) {
    case "check-gh":
      return qN.jsx(WUl, {});
    case "warnings":
      return qN.jsx(SFl, {
        warnings: n.warnings,
        onContinue: d,
      });
    case "choose-repo":
      return qN.jsx(zUl, {
        currentRepo: n.currentRepo,
        useCurrentRepo: n.useCurrentRepo,
        repoUrl: n.selectedRepoName,
        onRepoUrlChange: p,
        onToggleUseCurrentRepo: _,
        onSubmit: d,
      });
    case "install-app":
      return qN.jsx(sFl, {
        repoUrl: n.selectedRepoName,
        onSubmit: d,
      });
    case "setup-actions-prompt":
      return qN.jsx(pFl, {
        onSelect: v,
        onCancel: () => e.onDone("Installation cancelled by user"),
      });
    case "check-existing-workflow":
      return qN.jsx(nFl, {
        repoName: n.selectedRepoName,
        onSelectAction: C,
      });
    case "check-existing-secret":
      return qN.jsx(FUl, {
        useExistingSecret: n.useExistingSecret,
        secretName: n.secretName,
        onToggleUseExistingSecret: A,
        onSecretNameChange: b,
        onSubmit: d,
      });
    case "api-key":
      return qN.jsx(OUl, {
        existingApiKey: t,
        useExistingKey: n.useExistingKey,
        apiKeyOrOAuthToken: n.apiKeyOrOAuthToken,
        onApiKeyChange: f,
        onToggleUseExistingKey: S,
        onSubmit: d,
        onCreateOAuthToken: eS() ? g : void 0,
        selectedOption: n.selectedApiKeyOption,
        onSelectOption: m,
      });
    case "creating":
      return qN.jsx(XUl, {
        currentWorkflowInstallStep: n.currentWorkflowInstallStep,
        secretExists: n.secretExists,
        useExistingSecret: n.useExistingSecret,
        secretName: n.secretName,
        skipWorkflow: n.workflowAction === "skip",
        selectedWorkflows: n.selectedWorkflows,
      });
    case "success":
      return qN.jsx(U, {
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: x,
        children: qN.jsx(gFl, {
          secretExists: n.secretExists,
          useExistingSecret: n.useExistingSecret,
          secretName: n.secretName,
          skipWorkflow: n.workflowAction === "skip",
          appOnlyInstall: n.appOnlyInstall,
        }),
      });
    case "error":
      return qN.jsx(U, {
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: x,
        children: qN.jsx(ZUl, {
          error: n.error,
          errorReason: n.errorReason,
          errorInstructions: n.errorInstructions,
        }),
      });
    case "select-workflows":
      return qN.jsx(xUl, {
        defaultSelections: n.selectedWorkflows,
        onSubmit: (I) => {
          if (
            (G("tengu_install_github_app_step_completed", {
              step: We("select-workflows"),
            }),
            r((k) => ({
              ...k,
              selectedWorkflows: I,
            })),
            t)
          )
            u();
          else
            r((k) => ({
              ...k,
              step: "api-key",
            }));
        },
      });
    case "oauth-flow":
      return qN.jsx(cFl, {
        onSuccess: h,
        onCancel: y,
      });
  }
}
async function call(e) {
  return qN.jsx(H1f, {
    onDone: e,
  });
}
var eZ, qN, A1f;
