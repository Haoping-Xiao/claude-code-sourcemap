// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kUl
// matched 2.1.88 source: src/constants/github-app.ts
// class=modified  jaccard=0.1473  score=0.1575  fileCov=0.6945
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kUl = E(() => {
  Ye();
  Cc();
  w7t();
  Bs();
  vi();
  Ko();
  ((CUl = R(lt(), 1)),
    (IUl = R(rt(), 1)),
    (Nq = R(se(), 1)),
    (m1f = [
      {
        value: "claude",
        label: "@Claude Code - Tag @claude in issues and PR comments",
      },
      {
        value: "claude-review",
        label: "Claude Code Review - Automated code review on new PRs",
      },
    ]),
    (g1f = Nq.jsxs(Tn, {
      children: [
        Nq.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        Nq.jsx(ht, {
          chord: "space",
          action: "toggle",
        }),
        Nq.jsx(ht, {
          chord: "enter",
          action: "confirm",
        }),
        Nq.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        }),
      ],
    })));
});
var RUl = "Add Claude Code GitHub Workflow",
  Vfe = "https://github.com/anthropics/claude-code-action/blob/main/docs/setup.md",
  LUl = `name: Claude Code

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
      actions: read # Required for Claude to read CI results on PRs
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # This is an optional setting that allows Claude to read CI results on PRs
          additional_permissions: |
            actions: read

          # Optional: Give a custom prompt to Claude. If this is not specified, Claude will perform the instructions specified in the comment that tagged it.
          # prompt: 'Update the pull request description to include a summary of changes.'

          # Optional: Add claude_args to customize behavior and configuration
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options
          # claude_args: '--allowed-tools Bash(gh pr *)'

`,
  DUl = `## \uD83E\uDD16 Installing Claude Code GitHub App

This PR adds a GitHub Actions workflow that enables Claude Code integration in our repository.

### What is Claude Code?

[Claude Code](https://claude.com/claude-code) is an AI coding agent that can help with:
- Bug fixes and improvements  
- Documentation updates
- Implementing new features
- Code reviews and suggestions
- Writing tests
- And more!

### How it works

Once this PR is merged, we'll be able to interact with Claude by mentioning @claude in a pull request or issue comment.
Once the workflow is triggered, Claude will analyze the comment and surrounding context, and execute on the request in a GitHub action.

### Important Notes

- **This workflow won't take effect until this PR is merged**
- **@claude mentions won't work until after the merge is complete**
- The workflow runs automatically whenever Claude is mentioned in PR or issue comments
- Claude gets access to the entire PR or issue context including files, diffs, and previous comments

### Security

- Our Anthropic API key is securely stored as a GitHub Actions secret
- Only users with write access to the repository can trigger the workflow
- All Claude runs are stored in the GitHub Actions run history
- Claude's default tools are limited to reading/writing files and interacting with our repo by creating comments, branches, and commits.
- We can add more allowed tools by adding them to the workflow file like:

\`\`\`
allowed_tools: Bash(npm install),Bash(npm run build),Bash(npm run lint),Bash(npm run test)
\`\`\`

There's more information in the [Claude Code action repo](https://github.com/anthropics/claude-code-action).

After merging this PR, let's try mentioning @claude in a comment on any PR to get started!`,
  PUl = `name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize, ready_for_review, reopened]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          plugin_marketplaces: 'https://github.com/anthropics/claude-code.git'
          plugins: 'code-review@claude-code-plugins'
          prompt: '/code-review:code-review \${{ github.repository }}/pull/\${{ github.event.pull_request.number }}'
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options

`;
function OUl(e) {
  let t = MUl.c(55),
    {
      existingApiKey: n,
      apiKeyOrOAuthToken: r,
      onApiKeyChange: o,
      onSubmit: s,
      onToggleUseExistingKey: i,
      onCreateOAuthToken: a,
      selectedOption: l,
      onSelectOption: c,
    } = e,
    u = l === void 0 ? (n ? "existing" : a ? "oauth" : "new") : l,
    [d, p] = $Ul.useState(0),
    f = br(),
    [m] = na(),
    g;
  if (t[0] !== n || t[1] !== a || t[2] !== c || t[3] !== i || t[4] !== u)
    ((g = () => {
      if (u === "new" && a) c("oauth");
      else if (u === "oauth" && n) (c("existing"), i(true));
    }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = c),
      (t[3] = i),
      (t[4] = u),
      (t[5] = g));
  else g = t[5];
  let h = g,
    y;
  if (t[6] !== a || t[7] !== c || t[8] !== i || t[9] !== u)
    ((y = () => {
      if (u === "existing") (c(a ? "oauth" : "new"), i(false));
      else if (u === "oauth") c("new");
    }),
      (t[6] = a),
      (t[7] = c),
      (t[8] = i),
      (t[9] = u),
      (t[10] = y));
  else y = t[10];
  let b = y,
    _;
  if (t[11] !== a || t[12] !== s || t[13] !== u)
    ((_ = () => {
      if (u === "oauth" && a) a();
      else s();
    }),
      (t[11] = a),
      (t[12] = s),
      (t[13] = u),
      (t[14] = _));
  else _ = t[14];
  let S = _,
    A = u === "new",
    v;
  if (t[15] !== S || t[16] !== b || t[17] !== h)
    ((v = {
      "confirm:previous": h,
      "confirm:next": b,
      "confirm:yes": S,
    }),
      (t[15] = S),
      (t[16] = b),
      (t[17] = h),
      (t[18] = v));
  else v = t[18];
  let C = !A,
    x;
  if (t[19] !== C)
    ((x = {
      context: "Confirmation",
      isActive: C,
    }),
      (t[19] = C),
      (t[20] = x));
  else x = t[20];
  No(v, x);
  let I;
  if (t[21] !== b || t[22] !== h)
    ((I = {
      "confirm:previous": h,
      "confirm:next": b,
    }),
      (t[21] = b),
      (t[22] = h),
      (t[23] = I));
  else I = t[23];
  let k;
  if (t[24] !== A)
    ((k = {
      context: "Confirmation",
      isActive: A,
    }),
      (t[24] = A),
      (t[25] = k));
  else k = t[25];
  No(I, k);
  let D;
  if (t[26] === Symbol.for("react.memo_cache_sentinel"))
    ((D = zL.jsx(U, {
      marginBottom: 1,
      children: zL.jsx(LH, {
        subtitle: "Choose API key",
        children: "Install GitHub App",
      }),
    })),
      (t[26] = D));
  else D = t[26];
  let P;
  if (t[27] !== n || t[28] !== u || t[29] !== m)
    ((P =
      n &&
      zL.jsx(U, {
        marginBottom: 1,
        children: zL.jsxs(w, {
          children: [
            u === "existing" ? Io("success", m)("> ") : "  ",
            "Use your existing Claude Code API key",
          ],
        }),
      })),
      (t[27] = n),
      (t[28] = u),
      (t[29] = m),
      (t[30] = P));
  else P = t[30];
  let O;
  if (t[31] !== a || t[32] !== u || t[33] !== m)
    ((O =
      a &&
      zL.jsx(U, {
        marginBottom: 1,
        children: zL.jsxs(w, {
          children: [
            u === "oauth" ? Io("success", m)("> ") : "  ",
            "Create a long-lived token with your Claude subscription",
          ],
        }),
      })),
      (t[31] = a),
      (t[32] = u),
      (t[33] = m),
      (t[34] = O));
  else O = t[34];
  let L;
  if (t[35] !== u || t[36] !== m)
    ((L = u === "new" ? Io("success", m)("> ") : "  "), (t[35] = u), (t[36] = m), (t[37] = L));
  else L = t[37];
  let M;
  if (t[38] !== L)
    ((M = zL.jsx(U, {
      marginBottom: 1,
      children: zL.jsxs(w, {
        children: [L, "Enter a new API key"],
      }),
    })),
      (t[38] = L),
      (t[39] = M));
  else M = t[39];
  let N;
  if (t[40] !== r || t[41] !== d || t[42] !== o || t[43] !== s || t[44] !== u || t[45] !== f)
    ((N =
      u === "new" &&
      zL.jsx(Ta, {
        value: r,
        onChange: o,
        onSubmit: s,
        onPaste: o,
        focus: true,
        placeholder: "sk-ant\u2026 (Create a new key at https://platform.claude.com/settings/keys)",
        mask: "*",
        columns: f.columns,
        cursorOffset: d,
        onChangeCursorOffset: p,
        showCursor: true,
      })),
      (t[40] = r),
      (t[41] = d),
      (t[42] = o),
      (t[43] = s),
      (t[44] = u),
      (t[45] = f),
      (t[46] = N));
  else N = t[46];
  let B;
  if (t[47] !== P || t[48] !== O || t[49] !== M || t[50] !== N)
    ((B = zL.jsxs(U, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [D, P, O, M, N],
    })),
      (t[47] = P),
      (t[48] = O),
      (t[49] = M),
      (t[50] = N),
      (t[51] = B));
  else B = t[51];
  let $;
  if (t[52] === Symbol.for("react.memo_cache_sentinel"))
    (($ = zL.jsx(U, {
      marginLeft: 3,
      children: zL.jsx(w, {
        dimColor: true,
        children: zL.jsxs(Tn, {
          children: [
            zL.jsx(ht, {
              chord: ["up", "down"],
              action: "select",
            }),
            zL.jsx(ht, {
              chord: "enter",
              action: "continue",
            }),
          ],
        }),
      }),
    })),
      (t[52] = $));
  else $ = t[52];
  let q;
  if (t[53] !== B)
    ((q = zL.jsxs(zL.Fragment, {
      children: [B, $],
    })),
      (t[53] = B),
      (t[54] = q));
  else q = t[54];
  return q;
}
var MUl, $Ul, zL;
