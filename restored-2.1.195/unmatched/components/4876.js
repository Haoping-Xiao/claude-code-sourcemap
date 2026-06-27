// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yFo
// matched 2.1.88 source: src/components/mcp/MCPListPanel.tsx
// class=new  jaccard=0.0213  score=0.026  fileCov=0.1041
// note: nearest: src/components/mcp/MCPListPanel.tsx (0.0213); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yFo = E(() => {
  Ye();
  Bs();
  Ko();
  hFo();
  OXt = R(lt(), 1), Ys = R(se(), 1);
  Sz = [{
    id: "at-mentions",
    title: "Talk to your codebase",
    tagline: "@ files, line refs",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Type ", Ys.jsx(dAt, {
          children: "@"
        }), " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code."]
      }), Ys.jsx(Qfe, {
        frames: [`> what does [suggestion:@]
#type a file name\u2026`, `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`, `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`, `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`]
      }), Ys.jsxs(w, {
        children: ["Reference specific lines with ", Ys.jsx(cw, {
          children: "src/app.ts:42"
        }), " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor."]
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Also try: ", Ys.jsx(cw, {
          children: "@folder/"
        }), " to attach a whole directory tree."]
      })]
    })
  }, {
    id: "modes",
    title: "Steer with modes",
    tagline: "shift+tab, plan, auto",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Press ", Ys.jsx(dAt, {
          children: "shift+tab"
        }), " to cycle permission modes. Each mode changes how much Claude asks before acting:"]
      }), Ys.jsx(kGl, {}), Ys.jsxs(U, {
        flexDirection: "column",
        paddingLeft: 2,
        children: [Ys.jsxs(w, {
          children: [Ys.jsx(w, {
            color: "success",
            children: "default"
          }), " \u2014 ask before every edit"]
        }), Ys.jsxs(w, {
          children: [Ys.jsx(w, {
            color: "autoAccept",
            children: "accept edits"
          }), " \u2014 edit freely, ask for commands"]
        }), Ys.jsxs(w, {
          children: [Ys.jsx(w, {
            color: "planMode",
            children: "plan"
          }), " \u2014 research and propose, never touch files"]
        }), Ys.jsxs(w, {
          children: [Ys.jsx(w, {
            color: "warning",
            children: "auto"
          }), " \u2014 Claude decides what is safe"]
        })]
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Use ", Ys.jsx(w, {
          color: "planMode",
          children: "plan"
        }), " for big refactors you want to review first. Use ", Ys.jsx(w, {
          color: "warning",
          children: "auto"
        }), " for long unattended tasks. Run ", Ys.jsx(cw, {
          children: "/permissions"
        }), " to pre-allow specific commands so Claude stops asking about them."]
      })]
    })
  }, {
    id: "undo",
    title: "Undo anything",
    tagline: "/rewind, Esc-Esc",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Claude checkpoints your files before every edit. Press", " ", Ys.jsx(dAt, {
          children: "Esc Esc"
        }), " (double-tap) to open ", Ys.jsx(cw, {
          children: "/rewind"
        }), " and roll back to any prior state \u2014 code, conversation, or both."]
      }), Ys.jsx(Qfe, {
        frames: [`[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`, `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`, `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`]
      }), Ys.jsx(w, {
        children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean."
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Also: ", Ys.jsx(cw, {
          children: "/clear"
        }), " wipes conversation but keeps files.", " ", Ys.jsx(cw, {
          children: "/branch"
        }), " forks the conversation to try two approaches."]
      })]
    })
  }, {
    id: "background",
    title: "Run in the background",
    tagline: "tasks, /tasks",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Long builds and test suites do not have to block you. Add", " ", Ys.jsx(dAt, {
          children: "&"
        }), " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes."]
      }), Ys.jsx(Qfe, {
        frames: [`> run the test suite [claude:&]
#task started in background`, `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`]
      }), Ys.jsxs(w, {
        children: ["Run ", Ys.jsx(cw, {
          children: "/tasks"
        }), " to see everything in flight. Claude can read task output mid-run and react to failures automatically."]
      }), Ys.jsx(w, {
        dimColor: !0,
        children: "Subagents also run as tasks \u2014 it is all one queue."
      })]
    })
  }, {
    id: "memory",
    title: "Teach Claude your rules",
    tagline: "CLAUDE.md, /memory",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Drop a ", Ys.jsx(cw, {
          children: "CLAUDE.md"
        }), " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."]
      }), Ys.jsx(Qfe, {
        frames: [`#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`, `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`, `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`]
      }), Ys.jsxs(w, {
        children: ["Run ", Ys.jsx(cw, {
          children: "/init"
        }), " to generate a starter CLAUDE.md from your codebase. Run ", Ys.jsx(cw, {
          children: "/memory"
        }), " to edit it inline."]
      }), Ys.jsx(w, {
        dimColor: !0,
        children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides."
      })]
    })
  }, {
    id: "mcp",
    title: "Extend with tools",
    tagline: "MCP, /mcp",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ", Ys.jsx(cw, {
          children: "/mcp"
        }), " to browse and connect servers."]
      }), Ys.jsx(Qfe, {
        frames: [`> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`, `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`, `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`]
      }), Ys.jsx(w, {
        children: 'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.'
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["From your shell:", " ", Ys.jsx(cw, {
          children: "claude mcp add my-server -- npx some-mcp-pkg"
        }), " to wire one up without leaving the terminal."]
      })]
    })
  }, {
    id: "automate",
    title: "Automate your workflow",
    tagline: "skills, hooks",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Save a prompt to ", Ys.jsx(cw, {
          children: ".claude/skills/deploy/SKILL.md"
        }), " and it becomes ", Ys.jsx(cw, {
          children: "/deploy"
        }), " \u2014 type it, Claude runs it. Run", " ", Ys.jsx(cw, {
          children: "/skills"
        }), " to see what you have."]
      }), Ys.jsx(Qfe, {
        frames: [`> [suggestion:/deploy] staging
#\u25D0 skill: deploy`, `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`, `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`]
      }), Ys.jsxs(w, {
        children: ["Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ", Ys.jsx(cw, {
          children: "/hooks"
        }), " to see what fires when."]
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Run ", Ys.jsx(cw, {
          children: "/install-github-app"
        }), " to let Claude review PRs when tagged."]
      })]
    })
  }, {
    id: "subagents",
    title: "Multiply yourself",
    tagline: "subagents, /agents",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsx(w, {
        children: 'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.'
      }), Ys.jsx(Qfe, {
        frames: [`> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`, `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`, `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`, `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`]
      }), Ys.jsxs(w, {
        children: ["Define specialized agents in ", Ys.jsx(cw, {
          children: ".claude/agents/"
        }), " \u2014 a test runner, a code reviewer, a docs writer \u2014 each with its own tools and instructions. Run ", Ys.jsx(cw, {
          children: "/agents"
        }), " to manage them."]
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Subagents run in isolated context. For true parallel sessions on separate branches, launch with ", Ys.jsx(cw, {
          children: "claude --worktree"
        }), "."]
      })]
    })
  }, {
    id: "cross-device",
    title: "Code from anywhere",
    tagline: "/remote-control, /teleport",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Run ", Ys.jsx(cw, {
          children: "/remote-control"
        }), " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control."]
      }), Ys.jsx(Qfe, {
        frames: [`> [suggestion:/remote-control]
#\u25D0 connecting\u2026`, `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`, `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`, `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`]
      }), Ys.jsxs(w, {
        children: ["Started a session on the web and want to move it here? Run", " ", Ys.jsx(cw, {
          children: "/teleport"
        }), " to pull it into this terminal with full history."]
      }), Ys.jsx(w, {
        dimColor: !0,
        children: "Kick off a long task, close your laptop, check progress from your phone."
      })]
    })
  }, {
    id: "model-dial",
    title: "Dial the model",
    tagline: "/model, /effort",
    body: Ys.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ys.jsxs(w, {
        children: ["Run ", Ys.jsx(cw, {
          children: "/model"
        }), " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."]
      }), Ys.jsx(Qfe, {
        frames: [`> [suggestion:/effort] high
#effort set to [claude:high]`, `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`, `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`]
      }), Ys.jsxs(w, {
        children: [Ys.jsx(cw, {
          children: "/effort"
        }), " controls how long Claude thinks before answering.", " ", Ys.jsx(dAt, {
          children: "high"
        }), " for tricky bugs, ", Ys.jsx(dAt, {
          children: "low"
        }), " when you just need a quick edit."]
      }), Ys.jsxs(w, {
        dimColor: !0,
        children: ["Also: ", Ys.jsx(cw, {
          children: "/fast"
        }), " toggles fast mode \u2014 same model, faster output."]
      })]
    })
  }];
});
function Krr(e) {
  let t = _Fo.c(47),
    {
      onExit: n
    } = e,
    [r, o] = NXt.useState(F2f),
    [s, i] = NXt.useState(null),
    [a, l] = NXt.useState(Sz[0].id),
    [c, u] = NXt.useState(!1),
    d;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) d = () => u(!1), t[0] = d;else d = t[0];
  let p = d,
    f;
  if (t[1] !== r) f = function ($) {
    l($.id), i($), G("tengu_powerup_lesson_opened", {
      lesson_id: $e($.id),
      was_already_unlocked: r.has($.id),
      unlocked_count: r.size
    });
  }, t[1] = r, t[2] = f;else f = t[2];
  let m = f,
    g;
  if (t[3] !== r) g = function ($) {
    if (r.has($)) return;
    let q = new Set(r).add($);
    if (o(q), gn(W => ({
      ...W,
      powerupsUnlocked: [...q]
    })), G("tengu_powerup_lesson_completed", {
      lesson_id: $e($),
      unlocked_count: q.size,
      all_unlocked: q.size === Sz.length
    }), q.size === Sz.length) u(!0);
  }, t[3] = r, t[4] = g;else g = t[4];
  let h = g,
    y;
  if (t[5] !== r) y = Sz.map(B => {
    let $ = r.has(B.id),
      q = `${$ ? nt.tick : nt.circle} ${B.title}`;
    return {
      label: $ ? ox.jsx(w, {
        color: "success",
        children: q
      }) : q,
      value: B.id,
      description: B.tagline
    };
  }), t[5] = r, t[6] = y;else y = t[6];
  let b = y;
  if (s) {
    let B;
    if (t[7] !== r || t[8] !== s.id) B = r.has(s.id), t[7] = r, t[8] = s.id, t[9] = B;else B = t[9];
    let $;
    if (t[10] !== h || t[11] !== s.id) $ = () => {
      h(s.id), i(null);
    }, t[10] = h, t[11] = s.id, t[12] = $;else $ = t[12];
    let q;
    if (t[13] === Symbol.for("react.memo_cache_sentinel")) q = () => i(null), t[13] = q;else q = t[13];
    let W;
    if (t[14] !== B || t[15] !== $ || t[16] !== s) W = ox.jsx(G2f, {
      lesson: s,
      isUnlocked: B,
      onDone: $,
      onBack: q
    }), t[14] = B, t[15] = $, t[16] = s, t[17] = W;else W = t[17];
    return W;
  }
  let _ = r.size === Sz.length,
    S;
  if (t[18] !== _) S = _ ? ox.jsx(xGl, {
    text: "All powered up"
  }) : ox.jsx(w, {
    bold: !0,
    color: "claude",
    children: "Power-ups"
  }), t[18] = _, t[19] = S;else S = t[19];
  let A;
  if (t[20] !== r.size) A = ox.jsxs(w, {
    dimColor: !0,
    children: [" ", r.size, "/", Sz.length, " unlocked", " "]
  }), t[20] = r.size, t[21] = A;else A = t[21];
  let v = r.size / Sz.length,
    C;
  if (t[22] !== v) C = ox.jsx(ZW, {
    ratio: v,
    width: 16,
    fillColor: "claude",
    emptyColor: "inactive"
  }), t[22] = v, t[23] = C;else C = t[23];
  let x;
  if (t[24] !== S || t[25] !== A || t[26] !== C) x = ox.jsxs(U, {
    marginBottom: 1,
    children: [S, A, C]
  }), t[24] = S, t[25] = A, t[26] = C, t[27] = x;else x = t[27];
  let I = _ ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.",
    k;
  if (t[28] !== I) k = ox.jsx(U, {
    marginBottom: 1,
    children: ox.jsx(w, {
      dimColor: !0,
      wrap: "wrap",
      children: I
    })
  }), t[28] = I, t[29] = k;else k = t[29];
  let D;
  if (t[30] !== m) D = B => {
    let $ = Sz.find(q => q.id === B);
    if ($) m($);
  }, t[30] = m, t[31] = D;else D = t[31];
  let P;
  if (t[32] !== n) P = () => n("Power-ups closed"), t[32] = n, t[33] = P;else P = t[33];
  let O;
  if (t[34] !== b || t[35] !== a || t[36] !== D || t[37] !== P) O = ox.jsx(Sr, {
    options: b,
    hideIndexes: !0,
    visibleOptionCount: Sz.length,
    defaultFocusValue: a,
    onChange: D,
    onCancel: P
  }), t[34] = b, t[35] = a, t[36] = D, t[37] = P, t[38] = O;else O = t[38];
  let L;
  if (t[39] === Symbol.for("react.memo_cache_sentinel")) L = ox.jsx(U, {
    marginTop: 1,
    children: ox.jsx(RGl, {})
  }), t[39] = L;else L = t[39];
  let M;
  if (t[40] !== c) M = c && ox.jsx(IGl, {
    onDone: p
  }), t[40] = c, t[41] = M;else M = t[41];
  let N;
  if (t[42] !== k || t[43] !== O || t[44] !== M || t[45] !== x) N = ox.jsx(Fu, {
    color: "claude",
    children: ox.jsxs(U, {
      flexDirection: "column",
      children: [x, k, O, L, M]
    })
  }), t[42] = k, t[43] = O, t[44] = M, t[45] = x, t[46] = N;else N = t[46];
  return N;
}
function F2f() {
  let e = Dt().powerupsUnlocked ?? [];
  return new Set(e.filter(j2f));
}
function j2f(e) {
  return Sz.some(t => t.id === e);
}
function G2f(e) {
  let t = _Fo.c(15),
    {
      lesson: n,
      isUnlocked: r,
      onDone: o,
      onBack: s
    } = e,
    i;
  if (t[0] !== s || t[1] !== o) i = {
    "confirm:yes": o,
    "confirm:no": s
  }, t[0] = s, t[1] = o, t[2] = i;else i = t[2];
  let a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) a = {
    context: "Confirmation"
  }, t[3] = a;else a = t[3];
  No(i, a);
  let l = r ? "success" : "pending",
    c;
  if (t[4] !== l) c = ox.jsx(Hs, {
    status: l,
    withSpace: !0
  }), t[4] = l, t[5] = c;else c = t[5];
  let u;
  if (t[6] !== n.title) u = ox.jsx(w, {
    bold: !0,
    color: "claude",
    children: n.title
  }), t[6] = n.title, t[7] = u;else u = t[7];
  let d;
  if (t[8] !== c || t[9] !== u) d = ox.jsxs(U, {
    children: [c, u]
  }), t[8] = c, t[9] = u, t[10] = d;else d = t[10];
  let p;
  if (t[11] === Symbol.for("react.memo_cache_sentinel")) p = ox.jsx(LGl, {}), t[11] = p;else p = t[11];
  let f;
  if (t[12] !== n.body || t[13] !== d) f = ox.jsx(Fu, {
    color: "claude",
    children: ox.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [d, n.body, p]
    })
  }), t[12] = n.body, t[13] = d, t[14] = f;else f = t[14];
  return f;
}
var _Fo, NXt, ox;