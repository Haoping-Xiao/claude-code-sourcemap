// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aEl
// matched 2.1.88 source: src/tools/MCPTool/classifyForCollapse.ts
// class=modified (alt of src/tools/MCPTool/classifyForCollapse.ts)  jaccard=0.0035  score=0.0236  fileCov=0.0041
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: DesignSyncTool, DesignSyncPreconditionError
// [unwrapped __esm module aEl] deps: Rc, H0, oo, je, At, Ls, qd, HXn
Rka(MRo);
Dka(() => !!Tbt());
function qhf(e) {
  let t = Whf[e.method],
    n = t.present.filter((o) => e[o] === void 0),
    r = t.nonEmpty.filter((o) => {
      let s = e[o];
      return s === void 0 || (Array.isArray(s) && s.length === 0);
    });
  return [...n, ...r];
}
function zhf(e) {
  return (
    e === "list_projects" ||
    e === "get_project" ||
    e === "list_files" ||
    e === "get_file" ||
    e === "report_validate"
  );
}
function lEl(e) {
  if (!e) return "?";
  return e.length > 12 ? `${e.slice(0, 8)}\u2026` : e;
}
function ORo(e) {
  switch (e?.method) {
    case "list_projects":
      return "List design-system projects";
    case "get_project":
      return "Read project metadata";
    case "list_files":
      return "List project files";
    case "get_file":
      return e.path ? `Read ${e.path}` : "Read file";
    case "finalize_plan": {
      let t = e.writes?.length ?? 0,
        n = e.deletes?.length ?? 0;
      return `Upload design system (${n > 0 ? `${t} to upload, ${n} to delete` : `${t} to upload`})`;
    }
    case "write_files": {
      let t = e.files?.length ?? 0,
        n = On(e.files ?? [], (o) => o.localPath !== void 0),
        r =
          n > 0 && n < t
            ? ` (${n} from disk, ${t - n} inline)`
            : n === t && t > 0
              ? " from disk"
              : "";
      return `Write ${t} ${bn(t, "file")}${r}`;
    }
    case "delete_files":
      return `Delete ${e.paths?.length ?? 0} ${bn(e.paths?.length ?? 0, "file")}`;
    case "register_assets":
      return `Register ${e.assets?.length ?? 0} ${bn(e.assets?.length ?? 0, "asset card")}`;
    case "unregister_assets":
      return `Unregister ${e.paths?.length ?? 0} ${bn(e.paths?.length ?? 0, "asset card")}`;
    case "create_project":
      return e.name ? `Create project "${e.name}"` : "Create design-system project";
    case "report_validate":
      return "Report validate metrics";
    default:
      return "Design sync";
  }
}
function Khf(e, t) {
  switch (e) {
    case "needs_design_login":
      if (t?.isNonInteractiveSession)
        return `DesignSync needs design-system authorization, but /design-login requires an interactive terminal and is not available in this environment. If this is claude.ai/code, ask the user to use Claude Design's "Send to Claude Code Web" (which seeds the project into the workspace) or to provide the project files directly.`;
      return "DesignSync needs design-system authorization. Run /design-login to authorize it with your claude.ai account \u2014 this works even when this session authenticates with an API key or a provider token.";
    case "design_refresh_failed":
      if (t?.isNonInteractiveSession)
        return "Could not refresh the design access token (transient error). Retry shortly; if the error persists, the stored credential needs re-authorization from an interactive Claude Code terminal (not available here).";
      return "Could not refresh the design access token (transient error). Retry shortly, or run /design-login to re-authorize.";
    case "expand_failed":
      if (t?.isNonInteractiveSession)
        return "Could not add design scopes to the token. Re-authentication is required from an interactive Claude Code terminal (not available in this environment).";
      return 'Could not add design scopes to the token. Run /login, select "Claude account with subscription", and retry \u2014 or run /design-login to authorize design access separately.';
    case "wrong_provider":
      return "DesignSync is only available with claude.ai authentication. It is not supported through Bedrock, Vertex, or other third-party providers.";
    case "essential_traffic_only":
      return "DesignSync is unavailable while nonessential network traffic is restricted (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set). Unset it to use /design-sync.";
  }
}
async function Jhf(e) {
  let t = $Ro(),
    n = await MRo();
  if (
    !n.ok &&
    n.reason === "needs_design_login" &&
    t &&
    !e?.isNonInteractiveSession &&
    e?.permissionMode !== void 0 &&
    Xhf.has(e.permissionMode)
  ) {
    let r = await JSl(e?.signal);
    if (r.ok)
      return {
        accessToken: r.accessToken,
        expanded: false,
      };
    throw new DesignSyncPreconditionError(
      `DesignSync needs design-system authorization. ${r.message}`,
    );
  }
  if (!n.ok) {
    let r = n.reason === "expand_failed" ? "DesignSync needs a claude.ai login. " : "",
      o = n.detail ? ` (${n.detail})` : "";
    throw new DesignSyncPreconditionError(
      `${r}${Khf(n.reason, {
        isNonInteractiveSession: e?.isNonInteractiveSession,
      })}${o}`,
    );
  }
  return {
    accessToken: n.accessToken,
    expanded: n.expanded,
  };
}
function PL(e, t, n) {
  if (e === void 0) throw Error(`${n} requires "${t}"`);
  return e;
}
async function uEl(e) {
  return P$e.realpath(Voe.resolve($t(), e ?? "."));
}
async function eyf(e, t) {
  let n = B$(e.path);
  if (e.localPath === void 0) {
    if (e.data === void 0) throw Error(`write_files: ${n} has neither data nor localPath`);
    return {
      path: n,
      data: e.data,
      encoding: e.encoding,
      mimeType: e.mimeType,
    };
  }
  if (e.data !== void 0) throw Error(`write_files: ${n} has both data and localPath`);
  if (t === void 0)
    throw Error(
      "write_files with localPath requires a plan finalized with localDir. Re-run finalize_plan with the bundle directory.",
    );
  let r = (p) => (p.endsWith(Voe.sep) ? p : p + Voe.sep),
    o = Voe.resolve(t),
    s = Voe.resolve(o, e.localPath);
  if (s !== o && !s.startsWith(r(o)))
    throw Error("write_files: localPath must be inside the directory approved at finalize_plan.");
  let [i, a] = await Promise.all([P$e.realpath(s), P$e.realpath(o)]);
  if (i !== a && !i.startsWith(r(a)))
    throw Error("write_files: localPath resolves outside the directory approved at finalize_plan.");
  let l = NRo.constants.O_NOFOLLOW,
    c = await P$e.open(i, NRo.constants.O_RDONLY | l),
    u;
  try {
    let p = await c.stat();
    if (!p.isFile()) throw Error("write_files: localPath must be a regular file.");
    if (p.size > cEl) throw Error(`write_files: file at localPath exceeds the ${cEl} byte limit.`);
    u = await c.readFile();
  } finally {
    await c.close();
  }
  let d = Voe.extname(i).slice(1).toLowerCase();
  return Zhf.has(d)
    ? {
        path: n,
        data: u.toString("utf8"),
        mimeType: e.mimeType,
      }
    : {
        path: n,
        data: u.toString("base64"),
        encoding: "base64",
        mimeType: e.mimeType,
      };
}
async function tyf(e, t, n) {
  switch (e.method) {
    case "list_projects": {
      let { items: r } = await $Sl(
        t,
        {
          type: xRo,
        },
        n,
      );
      return {
        method: "list_projects",
        projects: r
          .filter((s) => s.canEdit ?? s.isOwned ?? false)
          .map((s) => ({
            projectId: s.projectId,
            name: s.name,
            ownerDisplayName: s.ownerDisplayName,
            isOwned: s.isOwned,
            updatedAt: s.updatedAt,
          })),
      };
    }
    case "get_project": {
      let r = PL(e.projectId, "projectId", e.method),
        o = await NSl(t, r, n);
      return {
        method: "get_project",
        projectId: o.projectId,
        name: o.name,
        type: o.type,
        ownerDisplayName: o.ownerDisplayName,
        isOwned: o.isOwned,
        canEdit: o.canEdit,
      };
    }
    case "list_files": {
      let r = PL(e.projectId, "projectId", e.method);
      return {
        method: "list_files",
        paths: await BSl(t, r, n),
      };
    }
    case "get_file": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.path, "path", e.method),
        s = await USl(t, r, o, void 0, n);
      return {
        method: "get_file",
        path: o,
        content: s.content,
        contentType: s.contentType,
        isBase64: s.isBase64,
        truncated: s.truncated,
      };
    }
    case "finalize_plan": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.writes, "writes", e.method).map(B$),
        s = PL(e.deletes, "deletes", e.method).map(B$),
        i = await uEl(e.localDir);
      return {
        method: "finalize_plan",
        planId: nEl({
          projectId: r,
          writes: o,
          deletes: s,
          localDir: i,
        }),
        writes: o,
        deletes: s,
      };
    }
    case "write_files": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.planId, "planId", e.method),
        s = PL(e.files, "files", e.method),
        i = Ozt(o);
      if (!i || i.projectId !== r)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let a = s.map((p) => p.path).filter(LRo);
      if (a.length > 0)
        throw Error(
          `Cannot write reserved paths: ${a.join(", ")}. CLAUDE.md and .claude/ carry instructions to the design agent and are blocked regardless of the plan.`,
        );
      let l = s.map((p) => B$(p.path)).filter((p) => !$zt(p, i.writes));
      if (l.length > 0)
        throw Error(
          `Cannot write paths outside the finalized plan: ${l.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let c = 32,
        u = [];
      for (let p = 0; p < s.length; p += c) {
        if (n.aborted) throw new ru();
        let f = s.slice(p, p + c);
        u.push(...(await Promise.all(f.map((m) => eyf(m, i.localDir)))));
      }
      return {
        method: "write_files",
        written: (await OSl(t, r, u, {}, n)).length,
      };
    }
    case "delete_files": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.planId, "planId", e.method),
        s = PL(e.paths, "paths", e.method),
        i = Ozt(o);
      if (!i || i.projectId !== r)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let a = s.filter(LRo);
      if (a.length > 0)
        throw Error(
          `Cannot delete reserved paths: ${a.join(", ")}. CLAUDE.md and .claude/ carry instructions to the design agent and are blocked regardless of the plan.`,
        );
      let l = s.map(B$).filter((u) => !$zt(u, i.deletes));
      if (l.length > 0)
        throw Error(
          `Cannot delete paths outside the finalized plan: ${l.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      return {
        method: "delete_files",
        deleted: await FSl(t, r, s.map(B$), n),
      };
    }
    case "register_assets": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.planId, "planId", e.method),
        s = PL(e.assets, "assets", e.method),
        i = Ozt(o);
      if (!i || i.projectId !== r)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let a = s.map((c) => B$(c.path)).filter((c) => !$zt(c, i.writes));
      if (a.length > 0)
        throw Error(
          `Cannot register paths outside the finalized plan: ${a.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let l = 0;
      for (let c of s) {
        if (n.aborted) throw new ru();
        (await GSl(
          t,
          r,
          {
            ...c,
            path: B$(c.path),
          },
          n,
        ),
          l++);
      }
      return {
        method: "register_assets",
        registered: l,
      };
    }
    case "unregister_assets": {
      let r = PL(e.projectId, "projectId", e.method),
        o = PL(e.planId, "planId", e.method),
        s = PL(e.paths, "paths", e.method),
        i = Ozt(o);
      if (!i || i.projectId !== r)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let a = s.map(B$).filter((c) => !$zt(c, i.deletes));
      if (a.length > 0)
        throw Error(
          `Cannot unregister cards for paths outside the finalized plan's deletes: ${a.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let l = 0;
      for (let c of s.map(B$)) {
        if (n.aborted) throw new ru();
        (await WSl(t, r, c, n), l++);
      }
      return {
        method: "unregister_assets",
        unregistered: l,
      };
    }
    case "create_project": {
      let r = PL(e.name, "name", e.method),
        o = await jSl(t, r, n);
      return {
        method: "create_project",
        projectId: o.projectId,
        name: o.name,
      };
    }
    case "report_validate":
      return {
        method: "report_validate",
      };
  }
}
var NRo,
  P$e,
  Voe,
  Fhf,
  jhf,
  Ghf,
  Whf,
  qoe,
  Vhf,
  Yhf =
    "Upgraded your claude.ai login to include design-system access (user:design:read, user:design:write). This lets /design-sync read and write your org's design-system projects on claude.ai/design.",
  DesignSyncPreconditionError,
  Xhf,
  DesignSyncTool,
  Zhf,
  cEl = 5242880;
