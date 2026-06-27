// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YJn
// matched 2.1.88 source: src/utils/sessionFileAccessHooks.ts
// class=modified  jaccard=0.3157  score=0.7465  fileCov=0.3536
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: registerSessionFileAccessHooks, isMemoryFileAccess
// [unwrapped __esm module YJn] deps: services/analytics/firstPartyEventLoggingExporter.ts, services/analytics/metadata.ts, services/teamMemorySync/teamMemSecretGuard.ts, memdir/teamMemPrompts.ts, utils/debugFilter.ts, utils/config.ts, utils/debug.ts, utils/errors.ts, utils/git.ts, dn, utils/debug.ts, zod/v4/classic/schemas.js, utils/plugins/schemas.ts, PDo, cli/print.ts, services/teamMemorySync/watcher.ts
((VJn = require("fs/promises")), (tSt = require("path")), (NAf = typeof Bun !== "undefined"));
((kb = {
  team: WJn(),
  user: WJn(),
}),
  (Kwl = {
    team: new Set(["team_memory_too_many_entries", "http_413"]),
    user: new Set(),
  }));
function tCl(e, t) {
  switch (e) {
    case Ds: {
      let n = Vg.inputSchema.safeParse(t);
      return n.success ? n.data.file_path : null;
    }
    case ka: {
      let n = d6n().safeParse(t);
      return n.success ? n.data.file_path : null;
    }
    case Wc: {
      let n = dA.inputSchema.safeParse(t);
      return n.success ? n.data.file_path : null;
    }
    default:
      return null;
  }
}
function JAf(e, t) {
  switch (e) {
    case Ds: {
      let n = Vg.inputSchema.safeParse(t);
      if (!n.success) return null;
      return bKt(n.data.file_path);
    }
    case qc: {
      let n = L$.inputSchema.safeParse(t);
      if (!n.success) return null;
      if (n.data.path) {
        let r = bKt(n.data.path);
        if (r) return r;
      }
      if (n.data.glob) {
        let r = vJn(n.data.glob);
        if (r) return r;
      }
      return null;
    }
    case wu: {
      let n = Z4.inputSchema.safeParse(t);
      if (!n.success) return null;
      if (n.data.path) {
        let o = bKt(n.data.path);
        if (o) return o;
      }
      let r = vJn(n.data.pattern);
      if (r) return r;
      return null;
    }
    default:
      return null;
  }
}
function isMemoryFileAccess(e, t) {
  let n = tCl(e, t);
  if (n && (Sze(n) || P7(n))) return true;
  return false;
}
async function handleSessionFileAccess(input, _toolUseID, _signal) {
  if (input.hook_event_name !== "PostToolUse") return {};
  let r = JAf(input.tool_name, input.tool_input),
    o = WPt.getStore(),
    s = o ? G2r(o) : void 0,
    i = s
      ? {
          subagent_name: s,
        }
      : {};
  if (r === "session_transcript")
    G("tengu_transcript_accessed", {
      ...i,
    });
  let a = tCl(input.tool_name, input.tool_input);
  if (a && Sze(a))
    switch (
      (G("tengu_memdir_accessed", {
        tool: input.tool_name,
        ...i,
      }),
      input.tool_name)
    ) {
      case Ds:
        G("tengu_memdir_file_read", {
          ...i,
        });
        break;
      case ka:
        (G("tengu_memdir_file_edit", {
          ...i,
        }),
          zJn(a));
        break;
      case Wc:
        (G("tengu_memdir_file_write", {
          ...i,
        }),
          zJn(a));
        break;
    }
  if (a && P7(a))
    switch (
      (G("tengu_team_mem_accessed", {
        tool: input.tool_name,
        ...i,
      }),
      input.tool_name)
    ) {
      case Ds:
        G("tengu_team_mem_file_read", {
          ...i,
        });
        break;
      case ka:
        G("tengu_team_mem_file_edit", {
          ...i,
        });
        break;
      case Wc:
        G("tengu_team_mem_file_write", {
          ...i,
        });
        break;
    }
  if (a && (input.tool_name === ka || input.tool_name === Wc) && P7(a)) {
    let l = await swl(a, cT());
    if (l !== null)
      return (
        G("tengu_team_mem_prompt_index_near_cap", {
          ...i,
        }),
        {
          hookSpecificOutput: {
            hookEventName: "PostToolUse",
            additionalContext: l,
          },
        }
      );
  }
  if (a && (input.tool_name === ka || input.tool_name === Wc)) {
    let l = await nwl(a);
    if (l !== null)
      return (
        G("tengu_memdir_entrypoint_near_cap", {
          ...i,
        }),
        {
          hookSpecificOutput: {
            hookEventName: "PostToolUse",
            additionalContext: l,
          },
        }
      );
  }
  return {};
}
function registerSessionFileAccessHooks() {
  let e = {
    type: "callback",
    callback: handleSessionFileAccess,
    timeout: 1,
    internal: true,
  };
  Dge({
    PostToolUse: [
      {
        matcher: Ds,
        hooks: [e],
      },
      {
        matcher: qc,
        hooks: [e],
      },
      {
        matcher: wu,
        hooks: [e],
      },
      {
        matcher: ka,
        hooks: [e],
      },
      {
        matcher: Wc,
        hooks: [e],
      },
    ],
  });
}
