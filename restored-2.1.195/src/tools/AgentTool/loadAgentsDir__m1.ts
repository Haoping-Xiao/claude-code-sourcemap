// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ty
// matched 2.1.88 source: src/tools/AgentTool/loadAgentsDir.ts
// class=modified (alt of src/tools/AgentTool/loadAgentsDir.ts)  jaccard=0.1911  score=0.5772  fileCov=0.2222
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module ty] deps: Qi, Xr, Uh, ANt, kt, MPn, bCe, gb, je, Cp, Iv, vn, pq, DE, eer, L7, lj, Jt, II, u_, lf, nC, IL, M7, gLl, wer
((vLl = require("path")), (wLl = ve(() => H.union([H.string(), H.record(H.string(), Nae())]))));
((CLl = ve(() =>
  H.object({
    description: H.string().min(1, "Description cannot be empty"),
    tools: H.array(H.string()).optional(),
    disallowedTools: H.array(H.string()).optional(),
    prompt: H.string().min(1, "Prompt cannot be empty"),
    model: H.string()
      .trim()
      .min(1, "Model cannot be empty")
      .transform((e) => (e.toLowerCase() === "inherit" ? "inherit" : e))
      .optional(),
    effort: H.union([H.enum(xv), H.number().int()]).optional(),
    permissionMode: H.enum(yM).optional(),
    mcpServers: H.array(wLl()).optional(),
    hooks: IG().optional(),
    maxTurns: H.number().int().positive().optional(),
    skills: H.array(H.string()).optional(),
    initialPrompt: H.string().optional(),
    memory: H.enum(["user", "project", "local"]).optional(),
    background: H.boolean().optional(),
    isolation: H.enum(["worktree", "remote"]).optional(),
  }),
)),
  (jxf = ve(() => H.record(H.string(), CLl()))));
CP = Cn(async (e) => {
  if (lc("agents")) {
    let t = yHe();
    return {
      activeAgents: t,
      allAgents: t,
    };
  }
  try {
    let t = await _q("agents", e),
      n = [],
      r = t
        .map((c) => {
          let { filePath: u, baseDir: d, frontmatter: p, content: f, source: m } = c,
            g = xLl(u, d, p, f, m);
          if (!g) {
            if (!p.name) return null;
            let h = Gxf(p);
            return (
              n.push({
                path: u,
                error: h,
              }),
              T(`Failed to parse agent from ${u}: ${h}`),
              G("tengu_agent_parse_error", {
                error: h,
                location: $e(m),
              }),
              null
            );
          }
          if (c.fromAdditionalDirectory) g.fromAdditionalDirectory = true;
          return g;
        })
        .filter((c) => c !== null),
      s = await FYt().catch((c) => (ke(c), [])),
      a = [...yHe(), ...s, ...r],
      l = YF(a);
    Z0e(
      "agent",
      [...a, ...l].map((c) => ({
        name: c.agentType,
        source: c.source,
      })),
      {
        resolves: true,
      },
    );
    for (let c of l) if (c.color) QPe(c.agentType, c.color);
    return {
      activeAgents: l,
      allAgents: a,
      failedFiles: n.length > 0 ? n : void 0,
    };
  } catch (t) {
    let n = t instanceof Error ? t.message : String(t);
    (T(`Error loading agent definitions: ${n}`), ke(t));
    let r = yHe();
    return {
      activeAgents: r,
      allAgents: r,
      failedFiles: [
        {
          path: "unknown",
          error: n,
        },
      ],
    };
  }
});
function qxf(e) {
  let t = kLl.c(7),
    { message: n, args: r, onDone: o } = e;
  Pd(o, 0);
  let s;
  if (t[0] !== r)
    ((s = _He.jsxs(w, {
      dimColor: true,
      children: [nt.pointer, " /add-dir ", r],
    })),
      (t[0] = r),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== n)
    ((i = _He.jsx(qn, {
      children: _He.jsx(w, {
        children: n,
      }),
    })),
      (t[2] = n),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== s || t[5] !== i)
    ((a = _He.jsxs(U, {
      flexDirection: "column",
      children: [s, i],
    })),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a));
  else a = t[6];
  return a;
}
async function call(e, t, n) {
  let r = (n ?? "").trim(),
    o = Fr(t),
    s = async (a, l = false) => {
      let u = {
        type: "addDirectories",
        directories: [a],
        destination: l ? "localSettings" : "session",
      };
      t.setToolPermissionContext((m) => My(m, u));
      let d = c0();
      if (!d.includes(a)) (Pge([...d, a]), W0(), wq(), KW(), rF.emit());
      (xo.refreshConfig(), j$o(a), nKi("--add-dir", a));
      let p;
      if (l)
        try {
          (zue(u), (p = `Added ${wt.bold(a)} as a working directory and saved to local settings`));
        } catch (m) {
          p = `Added ${wt.bold(a)} as a working directory. Failed to save to local settings: ${m instanceof Error ? m.message : "Unknown error"}`;
        }
      else p = `Added ${wt.bold(a)} as a working directory for this session`;
      let f = `${p} ${wt.dim("\xB7 /permissions to manage")}`;
      e(f);
    };
  if (!r)
    return _He.jsx(BUt, {
      permissionContext: o,
      onAddDirectory: s,
      onCancel: () => {
        e("Did not add a working directory.");
      },
    });
  let i = await Aat(r, o);
  if (i.resultType !== "success") {
    let a = Hat(i);
    return _He.jsx(qxf, {
      message: a,
      args: n ?? "",
      onDone: () => e(a),
    });
  }
  return _He.jsx(BUt, {
    directoryPath: i.absolutePath,
    permissionContext: o,
    onAddDirectory: s,
    onCancel: () => {
      e(`Did not add ${wt.bold(i.absolutePath)} as a working directory.`);
    },
  });
}
var kLl, _He;
