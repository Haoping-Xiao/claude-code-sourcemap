// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $yl
// matched 2.1.88 source: src/tools/SyntheticOutputTool/SyntheticOutputTool.ts
// class=partial  jaccard=0.2173  score=0.5251  fileCov=0.2704
// note: low-confidence suggestion: src/tools/SyntheticOutputTool/SyntheticOutputTool.ts; dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $yl] deps: IB, _m, _0, u_, jv
Amf = Cn(async () => (await Gf("gh")) !== null);
function Oyl(e, t) {
  let n = [];
  for (let [, r] of e) n.push(vmf(r, t));
  return n;
}
function Hmf(e, t) {
  let n;
  try {
    n = t.stringify(e, null, 2);
  } catch {
    n = t.toStr(e);
  }
  return K6e.jsx(qn, {
    children: K6e.jsx(w, {
      children: n
    })
  });
}
function Tmf(e, {
  verbose: t
}) {
  return K6e.jsx(qn, {
    children: K6e.jsx(w, {
      color: "error",
      children: typeof e === "string" ? e : "Error"
    })
  });
}
function vmf(e, t) {
  let n = H.object({}).passthrough();
  return ti({
    name: `eval_registered__${e.name}`,
    maxResultSizeChars: 100000 /* 1e5 */,
    async prompt() {
      return e.description;
    },
    async description() {
      return e.description;
    },
    inputSchema: n,
    inputJSONSchema: e.schema,
    isEnabled() {
      return true;
    },
    isConcurrencySafe() {
      return false;
    },
    isReadOnly() {
      return false;
    },
    toAutoClassifierInput(o) {
      let s = Object.keys(o);
      return s.length > 0 ? `${e.name}(${s.join(", ")})` : e.name;
    },
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `Execute registered tool "${e.name}"`
      };
    },
    async call(o) {
      let {
        v: s
      } = await e.handler(o);
      return {
        data: s
      };
    },
    userFacingName() {
      return e.displayName ?? e.name;
    },
    getToolUseSummary() {
      return null;
    },
    mapToolResultToToolResultBlockParam(o, s) {
      let i;
      try {
        i = t.stringify(o);
      } catch {
        i = t.toStr(o);
      }
      return {
        tool_use_id: s,
        type: "tool_result",
        content: i
      };
    },
    renderToolUseMessage(o) {
      try {
        let s = De(o, null, 2);
        return `${e.name}(${s})`;
      } catch {
        return `${e.name}(...)`;
      }
    },
    renderToolResultMessage: o => Hmf(o, t),
    renderToolUseRejectedMessage() {
      return K6e.jsx(qn, {
        children: K6e.jsx(w, {
          color: "warning",
          children: "Rejected"
        })
      });
    },
    renderToolUseErrorMessage: Tmf,
    renderToolUseProgressMessage() {
      return null;
    }
  });
}
var K6e;