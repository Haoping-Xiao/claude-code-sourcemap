// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xIl
// matched 2.1.88 source: src/services/extractMemories/extractMemories.ts
// class=modified  jaccard=0.0451  score=0.2603  fileCov=0.0517
// note: deminified; 5 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xIl = E(() => {
  u_();
  lf();
  nC();
  EI();
  lC();
  _m();
});
var NQn = {};
_t(NQn, {
  isAllowedAutoMemWritePath: () => isAllowedAutoMemWritePath,
  initExtractMemories: () => initExtractMemories,
  executeExtractMemories: () => executeExtractMemories,
  drainPendingExtraction: () => drainPendingExtraction,
  createAutoMemCanUseTool: () => createAutoMemCanUseTool,
});
function LPo(e) {
  return e.type === "user" || e.type === "assistant";
}
function GTf(e, t) {
  if (t === null || t === void 0) return On(e, LPo);
  let n = false,
    r = 0;
  for (let o of e) {
    if (!n) {
      if (o.uuid === t) n = true;
      continue;
    }
    if (LPo(o)) r++;
  }
  if (!n) return On(e, LPo);
  return r;
}
function WTf(e, t) {
  let n = t === void 0;
  for (let r of e) {
    if (!n) {
      if (r.uuid === t) n = true;
      continue;
    }
    if (r.type !== "assistant") continue;
    let o = r.message.content;
    if (!Array.isArray(o)) continue;
    for (let s of o) {
      let i = PIl(s);
      if (i !== void 0 && C7(i)) return true;
    }
  }
  return false;
}
function RIl(e) {
  return On(e.split(/\s+/), Boolean);
}
function LIl(e) {
  if (e.type !== "user" || e.isMeta) return false;
  let t = e.message.content;
  if (typeof t === "string") return RIl(t) >= kIl;
  if (!Array.isArray(t)) return false;
  return t.some((n) => n.type === "text" && RIl(n.text) >= kIl);
}
function qTf(e, t) {
  let n = t === void 0;
  for (let r of e) {
    if (!n) {
      if (r.uuid === t) n = true;
      continue;
    }
    if (LIl(r)) return true;
  }
  if (!n) return e.some(LIl);
  return false;
}
function $Qn(e, t) {
  return (
    T(`[autoMem] denied ${e.name}: ${t}`),
    G("tengu_auto_mem_tool_denied", {
      tool_name: Ui(e.name),
    }),
    {
      behavior: "deny",
      message: t,
      decisionReason: {
        type: "other",
        reason: t,
      },
    }
  );
}
function VTf(e) {
  let t = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (t.length < 2) return false;
  if (!/^(remove-item|ri|del|erase|rd|rm|rmdir)$/i.test(t[0])) return false;
  let n = 0;
  for (let r = 1; r < t.length; r++) {
    let o = t[r];
    if (/^-(?:Literal)?Path$/i.test(o)) continue;
    if (o.startsWith("-")) return false;
    let s =
      (o.startsWith('"') && o.endsWith('"')) || (o.startsWith("'") && o.endsWith("'"))
        ? o.slice(1, -1)
        : o;
    if (/[*?[\]$`(){}|;&<>"',]/.test(s)) return false;
    if (!s.endsWith(".md")) return false;
    if (!C7(s)) return false;
    n++;
  }
  return n > 0;
}
async function zTf(e) {
  let t = await mct(e);
  if (t.kind !== "simple") return false;
  if (t.commands.length !== 1) return false;
  let n = t.commands[0];
  if (!n) return false;
  if (n.argv[0] !== "rm") return false;
  if (n.redirects.length > 0) return false;
  if (n.envVars.length > 0) return false;
  let r = 0,
    o = false;
  for (let s = 1; s < n.argv.length; s++) {
    let i = n.argv[s];
    if (i === void 0) continue;
    if (!o) {
      if (i === "--") {
        o = true;
        continue;
      }
      if (i.startsWith("-")) {
        if (i === "--recursive" || /^-[a-zA-Z]*[rR]/.test(i)) return false;
        continue;
      }
    }
    if (/[*?[]/.test(i)) return false;
    if (!i.startsWith("/") || !i.endsWith(".md")) return false;
    if (!C7(i)) return false;
    r++;
  }
  return r > 0;
}
function isAllowedAutoMemWritePath(e) {
  return e.endsWith(".md") && fNt(e);
}
function createAutoMemCanUseTool(e) {
  return async (t, n, r) => {
    if (bD()) return $Qn(t, "Memory is paused. Run /pause-memory to resume automemory.");
    if (t.name === Fm)
      return {
        behavior: "allow",
        updatedInput: n,
      };
    if (t.name === Ds || t.name === qc || t.name === wu) {
      let s = Bbt(t, n, r.getAppState().toolPermissionContext);
      if (s) return $Qn(t, s.message);
      return {
        behavior: "allow",
        updatedInput: n,
      };
    }
    if (t.name === Co || t.name === Ss) {
      let s = t.inputSchema.safeParse(n);
      if (s.success) {
        if (t.isReadOnly(s.data))
          return {
            behavior: "allow",
            updatedInput: n,
          };
        let l = s.data.command;
        if (typeof l === "string") {
          if (t.name === Co ? await zTf(l) : VTf(l))
            return {
              behavior: "allow",
              updatedInput: n,
            };
        }
      }
      let i = t.name === Co;
      return $Qn(
        t,
        `Only read-only shell commands and ${i ? "rm" : "Remove-Item"} with all paths inside ${e} are permitted in this context (${i ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`,
      );
    }
    if ((t.name === ka || t.name === Wc) && "file_path" in n) {
      let s = n.file_path;
      if (typeof s === "string" && isAllowedAutoMemWritePath(s))
        return {
          behavior: "allow",
          updatedInput: n,
        };
    }
    let o = Su() ? Co : Ss;
    return $Qn(
      t,
      `only ${Ds}, ${qc}, ${wu}, read-only ${o}, and ${ka}/${Wc} within ${e} are allowed`,
    );
  };
}
function PIl(e) {
  if (e.type !== "tool_use" || (e.name !== ka && e.name !== Wc)) return;
  let t = e.input;
  if (typeof t === "object" && t !== null && "file_path" in t) {
    let n = t.file_path;
    return typeof n === "string" ? n : void 0;
  }
  return;
}
function KTf(e) {
  let t = [];
  for (let n of e) {
    if (n.type !== "assistant") continue;
    let r = n.message.content;
    if (!Array.isArray(r)) continue;
    for (let o of r) {
      let s = PIl(o);
      if (s !== void 0 && isAllowedAutoMemWritePath(s)) t.push(s);
    }
  }
  return Uo(t);
}
function initExtractMemories() {
  let e = new Set(),
    t,
    n = false,
    r = false,
    o = 0,
    s;
  async function i({ context: l, appendSystemMessage: c, isTrailingRun: u }) {
    let { messages: d } = l,
      p = mm(),
      f = GTf(d, t);
    if (WTf(d, t)) {
      T("[extractMemories] skipping \u2014 conversation already wrote to memory files");
      let _ = d.at(-1);
      if (_?.uuid) t = _.uuid;
      G("tengu_extract_memories_skipped_direct_write", {
        message_count: f,
      });
      return;
    }
    if (!qTf(d, t)) {
      T("[extractMemories] skipping \u2014 no user prose since last extraction");
      let _ = d.at(-1);
      if (_?.uuid) t = _.uuid;
      G("tengu_extract_memories_skipped_no_prose", {
        message_count: f,
      });
      return;
    }
    let m = cL(),
      g = at("tengu_bramble_lintel", null) ?? 1,
      h = createAutoMemCanUseTool(p),
      y = g6(l);
    if (!u) {
      if ((o++, o < g)) return;
    }
    ((o = 0), (r = true));
    let b = Date.now();
    try {
      T(`[extractMemories] starting \u2014 ${f} new messages, memoryDir=${p}`);
      let _ = PQn(await DQn(p, Sl().signal)),
        S = IIl(f, _, m),
        A = await dk({
          promptMessages: [
            Rn({
              content: S,
            }),
          ],
          cacheSafeParams: y,
          canUseTool: h,
          querySource: "extract_memories",
          forkLabel: "extract_memories",
          skipTranscript: true,
          maxTurns: 5,
          skipCacheWrite: hSt(),
        }),
        v = d.at(-1);
      if (v?.uuid) t = v.uuid;
      let C = KTf(A.messages),
        x = On(A.messages, (O) => O.type === "assistant"),
        I =
          A.totalUsage.input_tokens +
          A.totalUsage.cache_creation_input_tokens +
          A.totalUsage.cache_read_input_tokens,
        k = I > 0 ? ((A.totalUsage.cache_read_input_tokens / I) * 100).toFixed(1) : "0.0";
      if (
        (T(
          `[extractMemories] finished \u2014 ${C.length} files written, cache: read=${A.totalUsage.cache_read_input_tokens} create=${A.totalUsage.cache_creation_input_tokens} input=${A.totalUsage.input_tokens} (${k}% hit)`,
        ),
        C.length > 0)
      )
        T(`[extractMemories] memories saved: ${C.join(", ")}`);
      else T("[extractMemories] no memories saved this run");
      let D = C.filter((O) => DIl.basename(O) !== uH),
        P = On(D, $_e);
      if (
        (G("tengu_extract_memories_extraction", {
          input_tokens: A.totalUsage.input_tokens,
          output_tokens: A.totalUsage.output_tokens,
          cache_read_input_tokens: A.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: A.totalUsage.cache_creation_input_tokens,
          message_count: f,
          turn_count: x,
          files_written: C.length,
          memories_saved: D.length,
          team_memories_saved: P,
          duration_ms: Date.now() - b,
        }),
        T(
          `[extractMemories] writtenPaths=${C.length} memoryPaths=${D.length} appendSystemMessage defined=${c != null}`,
        ),
        D.length > 0)
      ) {
        let O = BQn(D);
        ((O.teamCount = P), c?.(O));
      }
      xe("memory_extract");
    } catch (_) {
      (T(`[extractMemories] error: ${_}`),
        G("tengu_extract_memories_error", {
          duration_ms: Date.now() - b,
        }),
        Le("memory_extract", "agent_error"));
    } finally {
      r = false;
      let _ = s;
      if (((s = void 0), _ && g <= 1))
        (T("[extractMemories] running trailing extraction for stashed context"),
          await i({
            context: _.context,
            appendSystemMessage: _.appendSystemMessage,
            isTrailingRun: true,
          }));
    }
  }
  async function a(l, c) {
    if (l.toolUseContext.agentId) return;
    if (!at("tengu_passport_quail", false)) return;
    if (!lu()) return;
    if (Ju() !== null) return;
    if (r) {
      (T("[extractMemories] extraction in progress \u2014 stashing for trailing run"),
        G("tengu_extract_memories_coalesced", {}),
        (s = {
          context: l,
          appendSystemMessage: c,
        }));
      return;
    }
    await i({
      context: l,
      appendSystemMessage: c,
    });
  }
  ((MIl = async (l, c) => {
    let u = a(l, c);
    e.add(u);
    try {
      await u;
    } finally {
      e.delete(u);
    }
  }),
    ($Il = async (l = 60000) => {
      if (e.size === 0) return;
      await Promise.race([
        Promise.all(e).catch(() => {}),
        new Promise((c) => setTimeout(c, l).unref()),
      ]);
    }));
}
async function executeExtractMemories(e, t) {
  await MIl?.(e, t);
}
async function drainPendingExtraction(e) {
  await $Il(e);
}
var DIl,
  kIl = 3,
  MIl = null,
  $Il = async () => {};
