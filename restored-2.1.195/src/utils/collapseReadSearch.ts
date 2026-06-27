// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Svl
// matched 2.1.88 source: src/utils/collapseReadSearch.ts
// class=modified  jaccard=0.4555  score=0.71  fileCov=0.5595
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function iEf(e) {
  let t = e;
  return t?.file_path ?? t?.path;
}
function aEf(e) {
  let t = e;
  if (!t) return false;
  if (t.path) {
    if (Eze(t.path) || SDo(t.path)) return true;
  }
  if (t.glob && hvl(t.glob)) return true;
  if (t.command && gvl(t.command)) return true;
  return false;
}
function lEf(e, t) {
  if (e !== Wc && e !== ka) return false;
  let n = iEf(t);
  return n !== void 0 && Eze(n);
}
function EDo(e) {
  let t =
    "$ " +
    e
      .split(
        `
`,
      )
      .map((n) => n.replace(/\s+/g, " ").trim())
      .filter((n) => n !== "").join(`
`);
  return t.length > Evl ? t.slice(0, Evl - 1) + "\u2026" : t;
}
function Aze(e, t, n) {
  if (e === Fm) {
    let l = qpe();
    return {
      isCollapsible: !l,
      isSearch: false,
      isRead: false,
      isList: false,
      isREPL: !l,
      isMemoryWrite: false,
      isAbsorbedSilently: !l,
    };
  }
  if (lEf(e, t))
    return {
      isCollapsible: true,
      isSearch: false,
      isRead: false,
      isList: false,
      isREPL: false,
      isMemoryWrite: true,
      isAbsorbedSilently: false,
    };
  if (Ns() && e === _h)
    return {
      isCollapsible: true,
      isSearch: false,
      isRead: false,
      isList: false,
      isREPL: false,
      isMemoryWrite: false,
      isAbsorbedSilently: true,
    };
  let r = _l(n, e) ?? _l(xAe(), e);
  if (r?.isMcp)
    return {
      isCollapsible: true,
      isSearch: false,
      isRead: false,
      isList: false,
      isREPL: false,
      isMemoryWrite: false,
      isAbsorbedSilently: false,
      mcpServerName: r.mcpInfo?.serverName,
    };
  if (!r?.isSearchOrReadCommand)
    return {
      isCollapsible: false,
      isSearch: false,
      isRead: false,
      isList: false,
      isREPL: false,
      isMemoryWrite: false,
      isAbsorbedSilently: false,
    };
  let o = r.isSearchOrReadCommand(t ?? {}),
    s = o.isList ?? false,
    i = o.isSearch || o.isRead || s,
    a = W1.includes(e);
  return {
    isCollapsible: i || (Ns() ? a : false),
    isSearch: o.isSearch,
    isRead: o.isRead,
    isList: s,
    isREPL: false,
    isMemoryWrite: false,
    isAbsorbedSilently: false,
    isBash: Ns() ? !i && a : void 0,
  };
}
function U8t(e, t) {
  if (e?.type === "tool_use" && e.name) {
    let n = Aze(e.name, e.input, t);
    if (n.isCollapsible || n.isREPL)
      return {
        isSearch: n.isSearch,
        isRead: n.isRead,
        isList: n.isList,
        isREPL: n.isREPL,
        isMemoryWrite: n.isMemoryWrite,
        isAbsorbedSilently: n.isAbsorbedSilently,
        mcpServerName: n.mcpServerName,
        isBash: n.isBash,
      };
  }
  return null;
}
function cEf(e) {
  if (e.type === "assistant") {
    let t = e.message.content[0];
    return t?.type === "tool_use" ? t.name : null;
  }
  if (e.type === "grouped_tool_use") return e.toolName;
  return null;
}
function uEf(e, t) {
  let n = Avl.get(e);
  if (n?.tools === t) return n.info;
  let r = cEf(e),
    o = r === null ? void 0 : (_l(t, r) ?? _l(xAe(), r));
  if (n && o === n.resolvedTool) return ((n.tools = t), n.info);
  let s = dEf(e, t);
  return (
    Avl.set(e, {
      tools: t,
      resolvedTool: o,
      info: s,
    }),
    s
  );
}
function dEf(e, t) {
  let n = null;
  if (e.type === "assistant") {
    let s = e.message.content[0],
      i = U8t(s, t);
    if (i && s?.type === "tool_use")
      n = {
        name: s.name,
        input: s.input,
        ...i,
      };
  } else if (e.type === "grouped_tool_use") {
    let s = e.messages[0]?.message.content[0],
      i = U8t(
        s
          ? {
              type: "tool_use",
              name: e.toolName,
              input: s.input,
            }
          : void 0,
        t,
      );
    if (i && s?.type === "tool_use")
      n = {
        name: e.toolName,
        input: s.input,
        ...i,
      };
  }
  if (!n) return null;
  let r =
      !n.isMemoryWrite &&
      !n.isAbsorbedSilently &&
      !n.mcpServerName &&
      !(Ns() && n.isBash) &&
      !n.isList &&
      !n.isSearch,
    o = null;
  if (r)
    o = yEf(e).map((s) => ({
      path: s,
      isTeamMem: P7(s),
      isAutoManagedMemory: Eze(s),
    }));
  return {
    ...n,
    toolUseIds: xvl(e),
    toolUseCount: hEf(e),
    readPaths: o,
  };
}
function Hvl(e) {
  if (e.type === "assistant") {
    let t = e.message.content[0];
    if (t?.type === "text" && t.text.trim().length > 0 && !Cvl(t.text)) return true;
  }
  return false;
}
function Cvl(e) {
  return e.trim() === zw || e === zte;
}
function ADo(e) {
  if (e.type !== "assistant") return false;
  let t = e.message.content[0];
  return t?.type === "text" && Cvl(t.text);
}
function pEf(e) {
  return e.type === "system" && e.subtype === "stop_hook_summary" && e.hookLabel === "PreToolUse";
}
function Ivl(e) {
  if (e.type === "assistant") {
    let t = e.message.content[0];
    if (t?.type === "thinking" || t?.type === "redacted_thinking") return true;
  }
  if (e.type === "attachment") return true;
  if (e.type === "system") return true;
  return false;
}
function fEf(e) {
  if (e.type !== "assistant") return;
  let t = e.message.content[0];
  if (t?.type !== "thinking" || !t.thinking?.trim()) return;
  return {
    message: e,
    text: t.thinking,
  };
}
function mEf(e) {
  if (e.type === "assistant") return e.message.content[0]?.type === "tool_use";
  if (e.type === "grouped_tool_use") return e.messages[0]?.message.content[0]?.type === "tool_use";
  return false;
}
function gEf(e, t) {
  if (e.type === "user") {
    let n = e.message.content.filter((r) => r.type === "tool_result");
    return n.length > 0 && n.every((r) => t.has(r.tool_use_id));
  }
  return false;
}
function xvl(e) {
  if (e.type === "assistant") {
    let t = e.message.content[0];
    if (t?.type === "tool_use") return [t.id];
  }
  if (e.type === "grouped_tool_use")
    return e.messages
      .map((t) => {
        let n = t.message.content[0];
        return n.type === "tool_use" ? n.id : "";
      })
      .filter(Boolean);
  return [];
}
function i_t(e) {
  let t = [];
  for (let n of e.messages) t.push(...xvl(n));
  return t;
}
function TDo(e, t) {
  return i_t(e).some((n) => t.has(n));
}
function kvl(e) {
  let t = e.displayMessage;
  if (t.type === "grouped_tool_use") return t.displayMessage;
  return t;
}
function hEf(e) {
  if (e.type === "grouped_tool_use") return e.messages.length;
  return 1;
}
function yEf(e) {
  let t = [];
  if (e.type === "assistant") {
    let n = e.message.content[0];
    if (n?.type === "tool_use") {
      let r = n.input;
      if (r?.file_path) t.push(r.file_path);
    }
  } else if (e.type === "grouped_tool_use")
    for (let n of e.messages) {
      let r = n.message.content[0];
      if (r?.type === "tool_use") {
        let o = r.input;
        if (o?.file_path) t.push(o.file_path);
      }
    }
  return t;
}
function _Ef(e, t) {
  if (e.type !== "user") return;
  let n = e.toolUseResult;
  if (!n?.stdout && !n?.stderr) return;
  let r =
    (n.stdout ?? "") +
    `
` +
    (n.stderr ?? "");
  for (let o of e.message.content) {
    if (o.type !== "tool_result") continue;
    let s = t.bashCommands?.get(o.tool_use_id);
    if (!s) continue;
    let { commit: i, push: a, branch: l, pr: c } = lft(s, r);
    if (i) t.commits?.push(i);
    if (a) t.pushes?.push(a);
    if (l) t.branches?.push(l);
    if (c) t.prs?.push(c);
    if (i || a || l || c) t.gitOpBashCount = (t.gitOpBashCount ?? 0) + 1;
  }
}
function Tvl() {
  let e = {
    messages: [],
    searchCount: 0,
    readFilePaths: new Set(),
    readOperationCount: 0,
    listCount: 0,
    toolUseIds: new Set(),
    memorySearchCount: 0,
    memoryReadFilePaths: new Set(),
    memoryWriteCount: 0,
    nonMemSearchArgs: [],
    latestDisplayHint: void 0,
    thoughtForMs: 0,
    latestThinkingSummary: void 0,
    hookTotalMs: 0,
    hookCount: 0,
    hookInfos: [],
  };
  if (
    ((e.teamMemorySearchCount = 0),
    (e.teamMemoryReadFilePaths = new Set()),
    (e.teamMemoryWriteCount = 0),
    (e.mcpCallCount = 0),
    (e.mcpServerNames = new Set()),
    Ns())
  )
    ((e.bashCount = 0),
      (e.bashCommands = new Map()),
      (e.commits = []),
      (e.pushes = []),
      (e.branches = []),
      (e.prs = []),
      (e.gitOpBashCount = 0));
  return e;
}
function bEf(e) {
  let t = e.messages[0],
    n = e.readFilePaths.size > 0 ? e.readFilePaths.size : e.readOperationCount,
    r = e.memoryReadFilePaths.size,
    o = r + (e.relevantMemories?.length ?? 0),
    s = e.teamMemoryReadFilePaths,
    i = [...e.readFilePaths].filter((d) => !e.memoryReadFilePaths.has(d) && !(s?.has(d) ?? false)),
    a = e.teamMemorySearchCount ?? 0,
    l = e.teamMemoryReadFilePaths?.size ?? 0,
    c = e.teamMemoryWriteCount ?? 0,
    u = {
      type: "collapsed_read_search",
      searchCount: Math.max(0, e.searchCount - e.memorySearchCount - a),
      readCount: Math.max(0, n - r - l),
      listCount: e.listCount,
      replCount: 0,
      memorySearchCount: e.memorySearchCount,
      memoryReadCount: o,
      memoryWriteCount: e.memoryWriteCount,
      readFilePaths: i,
      searchArgs: e.nonMemSearchArgs,
      latestDisplayHint: e.latestDisplayHint,
      messages: e.messages,
      displayMessage: t,
      uuid: `collapsed-${t.uuid}`,
      timestamp: t.timestamp,
    };
  if (
    ((u.teamMemorySearchCount = a),
    (u.teamMemoryReadCount = l),
    (u.teamMemoryWriteCount = c),
    (e.mcpCallCount ?? 0) > 0)
  )
    ((u.mcpCallCount = e.mcpCallCount), (u.mcpServerNames = [...(e.mcpServerNames ?? [])]));
  if (Ns()) {
    if ((e.bashCount ?? 0) > 0)
      ((u.bashCount = e.bashCount), (u.gitOpBashCount = e.gitOpBashCount));
    if ((e.commits?.length ?? 0) > 0) u.commits = e.commits;
    if ((e.pushes?.length ?? 0) > 0) u.pushes = e.pushes;
    if ((e.branches?.length ?? 0) > 0) u.branches = e.branches;
    if ((e.prs?.length ?? 0) > 0) u.prs = e.prs;
  }
  if (e.hookCount > 0)
    ((u.hookTotalMs = e.hookTotalMs), (u.hookCount = e.hookCount), (u.hookInfos = e.hookInfos));
  if (e.relevantMemories && e.relevantMemories.length > 0) u.relevantMemories = e.relevantMemories;
  if (e.thoughtForMs > 0) u.thoughtForMs = e.thoughtForMs;
  if (e.latestThinkingSummary !== void 0) u.latestThinkingSummary = e.latestThinkingSummary;
  return u;
}
function Rvl(e, t) {
  let n = qpe(),
    r = [],
    o = Tvl(),
    s = [],
    i;
  function a() {
    if (o.messages.length === 0) return;
    r.push(bEf(o));
    let l = new Set();
    for (let c of s) {
      if (c.type === "attachment" && c.attachment.type === "hook_permission_decision") {
        let u = `${c.attachment.decision}:${c.attachment.hookEvent}`;
        if (l.has(u)) continue;
        l.add(u);
      }
      r.push(c);
    }
    ((s = []), (o = Tvl()));
  }
  for (let l of e) {
    if (
      n &&
      (l.type === "assistant" || l.type === "user") &&
      l.isVirtual === true &&
      l.message.content[0]?.type !== "thinking"
    )
      continue;
    let c = mEf(l) ? uEf(l, t) : null,
      u = c === null ? fEf(l) : void 0;
    if (c) {
      o.latestThinkingSummary = void 0;
      let d = c.toolUseCount;
      if (c.isMemoryWrite) {
        if (_vl(c.name, c.input)) o.teamMemoryWriteCount = (o.teamMemoryWriteCount ?? 0) + d;
        else o.memoryWriteCount += d;
      } else if (c.isAbsorbedSilently);
      else if (c.mcpServerName) {
        ((o.mcpCallCount = (o.mcpCallCount ?? 0) + d), o.mcpServerNames?.add(c.mcpServerName));
        let p = c.input;
        if (p?.query) o.latestDisplayHint = `"${p.query}"`;
      } else if (Ns() && c.isBash) {
        o.bashCount = (o.bashCount ?? 0) + d;
        let p = c.input;
        if (p?.command) {
          o.latestDisplayHint = PNn(p.command) ?? EDo(p.command);
          for (let f of c.toolUseIds) o.bashCommands?.set(f, p.command);
        }
      } else if (c.isList) {
        o.listCount += d;
        let p = c.input;
        if (p?.command) o.latestDisplayHint = EDo(p.command);
      } else if (c.isSearch) {
        if (((o.searchCount += d), yvl(c.input)))
          o.teamMemorySearchCount = (o.teamMemorySearchCount ?? 0) + d;
        else if (aEf(c.input)) o.memorySearchCount += d;
        else {
          let p = c.input;
          if (p?.pattern)
            (o.nonMemSearchArgs.push(p.pattern), (o.latestDisplayHint = `"${p.pattern}"`));
        }
      } else {
        let p = c.readPaths ?? [];
        for (let f of p)
          if ((o.readFilePaths.add(f.path), f.isTeamMem)) o.teamMemoryReadFilePaths?.add(f.path);
          else if (f.isAutoManagedMemory) o.memoryReadFilePaths.add(f.path);
          else o.latestDisplayHint = kd(f.path);
        if (p.length === 0) {
          o.readOperationCount += d;
          let f = c.input;
          if (f?.command) o.latestDisplayHint = EDo(f.command);
        }
      }
      for (let p of c.toolUseIds) o.toolUseIds.add(p);
      o.messages.push(l);
    } else if (gEf(l, o.toolUseIds)) {
      if ((o.messages.push(l), Ns() && o.bashCommands?.size)) _Ef(l, o);
    } else if (o.messages.length > 0 && pEf(l))
      ((o.hookCount += l.hookCount),
        (o.hookTotalMs +=
          l.totalDurationMs ?? l.hookInfos.reduce((d, p) => d + (p.durationMs ?? 0), 0)),
        o.hookInfos.push(...l.hookInfos));
    else if (
      o.messages.length > 0 &&
      l.type === "attachment" &&
      l.attachment.type === "relevant_memories"
    )
      ((o.relevantMemories ??= []), o.relevantMemories.push(...l.attachment.memories));
    else if (Lvl(l)) (a(), r.push(l));
    else if (u !== void 0) {
      if (((o.latestThinkingSummary = u.text.trim().replace(/\s+/g, " ")), i !== void 0)) {
        let d = Date.parse(l.timestamp) - Date.parse(i);
        if (Number.isFinite(d) && d > 0) o.thoughtForMs += Math.min(d, mIo);
      }
      o.messages.push(u.message);
    } else if (Ivl(l) || ADo(l)) {
      if (o.messages.length > 0) s.push(l);
      else r.push(l);
    } else (a(), r.push(l));
    if ("timestamp" in l && typeof l.timestamp === "string") i = l.timestamp;
  }
  return (a(), r);
}
function Lvl(e) {
  if (e.type !== "attachment") return false;
  let t = e.attachment;
  if (t.type !== "queued_command" || t.commandMode !== "prompt") return false;
  let n = t.origin;
  if (!t.isMeta && Y1(n)) return true;
  if (n?.kind === "channel") return true;
  return (n?.kind, false);
}
function vvl(e) {
  if (e.type === "user") return e.message.content[0]?.type !== "tool_result";
  return Lvl(e);
}
function SEf(e, t) {
  if (
    ((e.searchCount += t.searchCount),
    (e.readCount += t.readCount),
    (e.listCount += t.listCount),
    (e.replCount += t.replCount),
    (e.memorySearchCount += t.memorySearchCount),
    (e.memoryReadCount += t.memoryReadCount),
    (e.memoryWriteCount += t.memoryWriteCount),
    t.mcpCallCount)
  )
    ((e.mcpCallCount = (e.mcpCallCount ?? 0) + t.mcpCallCount),
      (e.mcpServerNames = Uo([...(e.mcpServerNames ?? []), ...(t.mcpServerNames ?? [])])));
  if (t.bashCount) e.bashCount = (e.bashCount ?? 0) + t.bashCount;
  if (t.gitOpBashCount) e.gitOpBashCount = (e.gitOpBashCount ?? 0) + t.gitOpBashCount;
  if (t.otherToolCount) e.otherToolCount = (e.otherToolCount ?? 0) + t.otherToolCount;
  if (t.frameCount) e.frameCount = (e.frameCount ?? 0) + t.frameCount;
  if (t.editFileCount) e.editFileCount = (e.editFileCount ?? 0) + t.editFileCount;
  if (t.linesAdded) e.linesAdded = (e.linesAdded ?? 0) + t.linesAdded;
  if (t.linesRemoved) e.linesRemoved = (e.linesRemoved ?? 0) + t.linesRemoved;
  if (t.commits?.length) e.commits = [...(e.commits ?? []), ...t.commits];
  if (t.pushes?.length) e.pushes = [...(e.pushes ?? []), ...t.pushes];
  if (t.branches?.length) e.branches = [...(e.branches ?? []), ...t.branches];
  if (t.prs?.length) e.prs = [...(e.prs ?? []), ...t.prs];
  if (t.readFilePaths?.length) e.readFilePaths = [...(e.readFilePaths ?? []), ...t.readFilePaths];
  if (t.searchArgs?.length) e.searchArgs = [...(e.searchArgs ?? []), ...t.searchArgs];
  if (t.hookCount)
    ((e.hookCount = (e.hookCount ?? 0) + t.hookCount),
      (e.hookTotalMs = (e.hookTotalMs ?? 0) + (t.hookTotalMs ?? 0)),
      (e.hookInfos = [...(e.hookInfos ?? []), ...(t.hookInfos ?? [])]));
  if (((e.latestDisplayHint = t.latestDisplayHint ?? e.latestDisplayHint), t.thoughtForMs))
    e.thoughtForMs = (e.thoughtForMs ?? 0) + t.thoughtForMs;
  ((e.latestThinkingSummary = t.latestThinkingSummary ?? e.latestThinkingSummary),
    e.messages.push(...t.messages));
}
function Dvl(e, t, n, r = false) {
  let o = [],
    s = 0;
  while (s < e.length) {
    let i = e[s];
    if (!vvl(i)) {
      (o.push(i), s++);
      continue;
    }
    (o.push(i), s++);
    let a = s;
    while (a < e.length && !vvl(e[a])) a++;
    let l = r && a === e.length;
    if (l) {
      let b = a - 1;
      while (b >= s && Ivl(e[b])) b--;
      let _ = b >= s ? e[b] : void 0;
      if (_?.type === "assistant" && _.message.stop_reason !== null && (Hvl(_) || ADo(_)))
        l = false;
    }
    let c = -1;
    if (!l) {
      for (let b = a - 1; b >= s; b--)
        if (Hvl(e[b])) {
          c = b;
          break;
        }
    }
    let u = new Set(),
      d = new Set();
    for (let b = a - 1; !l && b >= s; b--) {
      let _ = e[b];
      if (_.type !== "assistant") continue;
      let S = _.message.content[0];
      if (S?.type !== "tool_use" || d.has(S.name)) continue;
      if ((d.add(S.name), _l(t, S.name)?.briefStandalone)) {
        u.add(b);
        for (let A = b + 1; A < a; A++) {
          let v = e[A];
          if (v.type === "assistant") break;
          if (v.type !== "user") continue;
          let C = v.message.content[0];
          if (C?.type === "tool_result" && C.tool_use_id === S.id) {
            u.add(A);
            break;
          }
        }
      }
    }
    let p = null,
      f = a,
      m,
      g = 0;
    for (let b = s; b < a; b++) {
      if (b === c || u.has(b)) continue;
      let _ = e[b];
      if (_.type === "system") {
        if (_.subtype === "informational" && _.level === "info") g++;
        else if (_.subtype === "stop_hook_summary" && _.hookLabel !== void 0);
        else u.add(b);
        continue;
      }
      let S = null;
      if (_.type === "collapsed_read_search") S = _;
      else if (_.type === "grouped_tool_use")
        S = wvl(
          _,
          _.toolName,
          _.messages.map((A) => A.message.content[0]?.input),
          t,
        );
      else if (_.type === "assistant") {
        let A = _.message.content[0];
        if (A?.type === "tool_use") S = wvl(_, A.name, [A.input], t);
        else if (ADo(_)) g++;
        else if (l && A?.type === "text" && A.text.trim().length > 0) m = A.text;
        else if (A?.type === "thinking" || A?.type === "redacted_thinking") g++;
      } else if (_.type === "user") {
        if (p) {
          p.messages.push(_);
          let A = _.toolUseResult,
            v =
              A?.toolStats ??
              (A?.status === "async_launched" && A.agentId ? n?.(A.agentId) : void 0);
          if (v) {
            if (((p.readCount += v.readCount), (p.searchCount += v.searchCount), v.bashCount))
              p.bashCount = (p.bashCount ?? 0) + v.bashCount;
            if (v.editFileCount) p.editFileCount = (p.editFileCount ?? 0) + v.editFileCount;
            if (v.linesAdded) p.linesAdded = (p.linesAdded ?? 0) + v.linesAdded;
            if (v.linesRemoved) p.linesRemoved = (p.linesRemoved ?? 0) + v.linesRemoved;
            if (v.otherToolCount) p.otherToolCount = (p.otherToolCount ?? 0) + v.otherToolCount;
            if (v.frameCount) p.frameCount = (p.frameCount ?? 0) + v.frameCount;
          }
        }
      }
      if (_.type === "attachment") g++;
      if (S)
        if (p) SEf(p, S);
        else
          ((p = {
            ...S,
            messages: [...S.messages],
          }),
            (f = b));
    }
    if (c !== -1) u.add(c);
    let h = [...u].map((b) => [b, e[b]]);
    if (p) {
      if (((p.uuid = `brief-${p.uuid}`), m)) p.pendingText = m;
      ((p.hookCount = void 0), (p.hookTotalMs = void 0), (p.hookInfos = void 0), h.push([f, p]));
    }
    h.sort((b, _) => b[0] - _[0]);
    let y = l ? 0 : a - s - h.length - g;
    for (let [, b] of h)
      o.push(
        y > 0 && b.type === "system" && b.subtype === "turn_duration"
          ? {
              ...b,
              briefHiddenCount: y,
            }
          : b,
      );
    s = a;
  }
  return o;
}
function wvl(e, t, n, r) {
  let o = _l(r, t),
    s = n.length,
    i = {
      type: "collapsed_read_search",
      searchCount: 0,
      readCount: 0,
      listCount: 0,
      replCount: 0,
      memorySearchCount: 0,
      memoryReadCount: 0,
      memoryWriteCount: 0,
      messages: [e],
      displayMessage: e,
      uuid: e.uuid,
      timestamp: e.timestamp,
    };
  if (t === ss || t === r8) return i;
  if (o?.isMcp) {
    if (((i.mcpCallCount = s), o.mcpInfo?.serverName)) i.mcpServerNames = [o.mcpInfo.serverName];
  } else if (B6n.has(t)) {
    i.editFileCount = s;
    let a = 0,
      l = 0;
    for (let c of n) {
      let u = U6n(t, c);
      ((a += u.added), (l += u.removed));
    }
    if (a > 0) i.linesAdded = a;
    if (l > 0) i.linesRemoved = l;
  } else if (t === sEf) i.frameCount = s;
  else i.otherToolCount = s;
  return i;
}
function pKn(e, t, n, r = 0, o, s = 0) {
  let i = [];
  if (o) {
    let { memorySearchCount: l, memoryReadCount: c, memoryWriteCount: u } = o;
    if (c > 0) {
      let d = n
        ? i.length === 0
          ? "Recalling"
          : "recalling"
        : i.length === 0
          ? "Recalled"
          : "recalled";
      i.push(`${d} ${c} ${c === 1 ? "memory" : "memories"}`);
    }
    if (l > 0) {
      let d = n
        ? i.length === 0
          ? "Searching"
          : "searching"
        : i.length === 0
          ? "Searched"
          : "searched";
      i.push(`${d} memories`);
    }
    if (u > 0) {
      let d = n ? (i.length === 0 ? "Writing" : "writing") : i.length === 0 ? "Wrote" : "wrote";
      i.push(`${d} ${u} ${u === 1 ? "memory" : "memories"}`);
    }
    bvl(o, n, i);
  }
  if (e > 0) {
    let l = n
      ? i.length === 0
        ? "Searching for"
        : "searching for"
      : i.length === 0
        ? "Searched for"
        : "searched for";
    i.push(`${l} ${e} ${e === 1 ? "pattern" : "patterns"}`);
  }
  if (t > 0) {
    let l = n ? (i.length === 0 ? "Reading" : "reading") : i.length === 0 ? "Read" : "read";
    i.push(`${l} ${t} ${t === 1 ? "file" : "files"}`);
  }
  if (s > 0) {
    let l = n ? (i.length === 0 ? "Listing" : "listing") : i.length === 0 ? "Listed" : "listed";
    i.push(`${l} ${s} ${s === 1 ? "directory" : "directories"}`);
  }
  if (r > 0) {
    let l = n ? "REPL'ing" : "REPL'd";
    i.push(`${l} ${r} ${r === 1 ? "time" : "times"}`);
  }
  let a = i.join(", ");
  return n ? `${a}\u2026` : a;
}
function j9n(e) {
  if (e.length === 0) return;
  let t = 0,
    n = 0;
  for (let o = e.length - 1; o >= 0; o--) {
    let s = e[o];
    if (s.isSearch) t++;
    else if (s.isRead) n++;
    else break;
  }
  if (t + n >= 2) return pKn(t, n, true);
  for (let o = e.length - 1; o >= 0; o--)
    if (e[o]?.activityDescription) return e[o].activityDescription;
  return;
}
var sEf,
  Evl = 300,
  mIo = 600000,
  Avl;
