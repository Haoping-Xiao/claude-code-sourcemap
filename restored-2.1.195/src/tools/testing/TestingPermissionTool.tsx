// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N_l
// matched 2.1.88 source: src/tools/testing/TestingPermissionTool.tsx
// class=modified  jaccard=0.1116  score=0.1165  fileCov=0.7282
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var N_l = E(() => {
  Xr();
  ii();
  ((Dgf = ve(() => H.strictObject({}))),
    (v0b = ti({
      name: O_l,
      maxResultSizeChars: 100000 /* 1e5 */,
      async description() {
        return "Test tool that always asks for permission";
      },
      async prompt() {
        return "Test tool that always asks for permission before executing. Used for end-to-end testing.";
      },
      get inputSchema() {
        return Dgf();
      },
      userFacingName() {
        return "TestingPermission";
      },
      isEnabled() {
        return false;
      },
      isConcurrencySafe() {
        return true;
      },
      isReadOnly() {
        return true;
      },
      async checkPermissions() {
        return {
          behavior: "ask",
          message: "Run test?",
        };
      },
      renderToolUseMessage() {
        return null;
      },
      renderToolUseProgressMessage() {
        return null;
      },
      renderToolUseQueuedMessage() {
        return null;
      },
      renderToolUseRejectedMessage() {
        return null;
      },
      renderToolResultMessage() {
        return null;
      },
      renderToolUseErrorMessage() {
        return null;
      },
      async call() {
        return {
          data: `${O_l} executed successfully`,
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return {
          type: "tool_result",
          content: String(e),
          tool_use_id: t,
        };
      },
    })));
});
function Czt(e, t) {
  if (!e)
    return (
      T("formatUri called with undefined URI - indicates malformed LSP server response", {
        level: "warn",
      }),
      "<unknown location>"
    );
  let n = e.replace(/^file:\/\//, "");
  if (/^\/[A-Za-z]:/.test(n)) n = n.slice(1);
  try {
    n = decodeURIComponent(n);
  } catch (r) {
    let o = be(r);
    T(`Failed to decode LSP URI '${e}': ${o}. Using un-decoded path: ${n}`, {
      level: "warn",
    });
  }
  if (t) {
    let r = j_l.relative(t, n).replaceAll("\\", "/");
    if (r.length < n.length && !r.startsWith("../../")) return r;
  }
  return n.replaceAll("\\", "/");
}
function G_l(e, t) {
  let n = new Map();
  for (let r of e) {
    let o = "uri" in r ? r.uri : r.location.uri,
      s = Czt(o, t),
      i = n.get(s);
    if (i) i.push(r);
    else n.set(s, [r]);
  }
  return n;
}
function pXn(e, t) {
  let n = Czt(e.uri, t),
    r = e.range.start.line + 1,
    o = e.range.start.character + 1;
  return `${n}:${r}:${o}`;
}
function B_l(e) {
  return {
    uri: e.targetUri,
    range: e.targetSelectionRange || e.targetRange,
  };
}
function U_l(e) {
  return "targetUri" in e;
}
function yRo(e, t) {
  if (!e)
    return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
  if (Array.isArray(e)) {
    let r = e.map((a) => (U_l(a) ? B_l(a) : a)),
      o = r.filter((a) => !a || !a.uri);
    if (o.length > 0)
      T(
        `formatGoToDefinitionResult: Filtering out ${o.length} invalid location(s) - this should have been caught earlier`,
        {
          level: "warn",
        },
      );
    let s = r.filter((a) => a && a.uri);
    if (s.length === 0)
      return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
    if (s.length === 1) return `Defined in ${pXn(s[0], t)}`;
    let i = s.map((a) => `  ${pXn(a, t)}`).join(`
`);
    return `Found ${s.length} definitions:
${i}`;
  }
  let n = U_l(e) ? B_l(e) : e;
  return `Defined in ${pXn(n, t)}`;
}
function W_l(e, t) {
  if (!e || e.length === 0)
    return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  let n = e.filter((i) => !i || !i.uri);
  if (n.length > 0)
    T(
      `formatFindReferencesResult: Filtering out ${n.length} invalid location(s) - this should have been caught earlier`,
      {
        level: "warn",
      },
    );
  let r = e.filter((i) => i && i.uri);
  if (r.length === 0)
    return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  if (r.length === 1)
    return `Found 1 reference:
  ${pXn(r[0], t)}`;
  let o = G_l(r, t),
    s = [`Found ${r.length} references across ${o.size} files:`];
  for (let [i, a] of o) {
    s.push(`
${i}:`);
    for (let l of a) {
      let c = l.range.start.line + 1,
        u = l.range.start.character + 1;
      s.push(`  Line ${c}:${u}`);
    }
  }
  return s.join(`
`);
}
function Pgf(e) {
  if (Array.isArray(e))
    return e.map((t) => {
      if (typeof t === "string") return t;
      return t.value;
    }).join(`

`);
  if (typeof e === "string") return e;
  if ("kind" in e) return e.value;
  return e.value;
}
function q_l(e, t) {
  if (!e)
    return "No hover information available. This may occur if the cursor is not on a symbol, or if the LSP server has not fully indexed the file.";
  let n = Pgf(e.contents);
  if (e.range) {
    let r = e.range.start.line + 1,
      o = e.range.start.character + 1;
    return `Hover info at ${r}:${o}:

${n}`;
  }
  return n;
}
function _bt(e) {
  return (
    {
      [1]: "File",
      [2]: "Module",
      [3]: "Namespace",
      [4]: "Package",
      [5]: "Class",
      [6]: "Method",
      [7]: "Property",
      [8]: "Field",
      [9]: "Constructor",
      [10]: "Enum",
      [11]: "Interface",
      [12]: "Function",
      [13]: "Variable",
      [14]: "Constant",
      [15]: "String",
      [16]: "Number",
      [17]: "Boolean",
      [18]: "Array",
      [19]: "Object",
      [20]: "Key",
      [21]: "Null",
      [22]: "EnumMember",
      [23]: "Struct",
      [24]: "Event",
      [25]: "Operator",
      [26]: "TypeParameter",
    }[e] || "Unknown"
  );
}
function V_l(e, t = 0) {
  let n = [],
    r = "  ".repeat(t),
    o = _bt(e.kind),
    s = `${r}${e.name} (${o})`;
  if (e.detail) s += ` ${e.detail}`;
  let i = e.range.start.line + 1;
  if (((s += ` - Line ${i}`), n.push(s), e.children && e.children.length > 0))
    for (let a of e.children) n.push(...V_l(a, t + 1));
  return n;
}
function z_l(e, t) {
  if (!e || e.length === 0)
    return "No symbols found in document. This may occur if the file is empty, not supported by the LSP server, or if the server has not fully indexed the file.";
  let n = e[0];
  if (n && "location" in n) return _Ro(e, t);
  let o = ["Document symbols:"];
  for (let s of e) o.push(...V_l(s));
  return o.join(`
`);
}
function _Ro(e, t) {
  if (!e || e.length === 0)
    return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let n = e.filter((i) => !i || !i.location || !i.location.uri);
  if (n.length > 0)
    T(
      `formatWorkspaceSymbolResult: Filtering out ${n.length} invalid symbol(s) - this should have been caught earlier`,
      {
        level: "warn",
      },
    );
  let r = e.filter((i) => i && i.location && i.location.uri);
  if (r.length === 0)
    return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let o = [`Found ${r.length} ${bn(r.length, "symbol")} in workspace:`],
    s = G_l(r, t);
  for (let [i, a] of s) {
    o.push(`
${i}:`);
    for (let l of a) {
      let c = _bt(l.kind),
        u = l.location.range.start.line + 1,
        d = `  ${l.name} (${c}) - Line ${u}`;
      if (l.containerName) d += ` in ${l.containerName}`;
      o.push(d);
    }
  }
  return o.join(`
`);
}
function F_l(e, t) {
  if (!e.uri)
    return (
      T("formatCallHierarchyItem: CallHierarchyItem has undefined URI", {
        level: "warn",
      }),
      `${e.name} (${_bt(e.kind)}) - <unknown location>`
    );
  let n = Czt(e.uri, t),
    r = e.range.start.line + 1,
    o = _bt(e.kind),
    s = `${e.name} (${o}) - ${n}:${r}`;
  if (e.detail) s += ` [${e.detail}]`;
  return s;
}
function K_l(e, t) {
  if (!e || e.length === 0) return "No call hierarchy item found at this position";
  if (e.length === 1) return `Call hierarchy item: ${F_l(e[0], t)}`;
  let n = [`Found ${e.length} call hierarchy items:`];
  for (let r of e) n.push(`  ${F_l(r, t)}`);
  return n.join(`
`);
}
function Y_l(e, t) {
  if (!e || e.length === 0) return "No incoming calls found (nothing calls this function)";
  let n = [`Found ${e.length} incoming ${bn(e.length, "call")}:`],
    r = new Map();
  for (let o of e) {
    if (!o.from) {
      T("formatIncomingCallsResult: CallHierarchyIncomingCall has undefined from field", {
        level: "warn",
      });
      continue;
    }
    let s = Czt(o.from.uri, t),
      i = r.get(s);
    if (i) i.push(o);
    else r.set(s, [o]);
  }
  for (let [o, s] of r) {
    n.push(`
${o}:`);
    for (let i of s) {
      if (!i.from) continue;
      let a = _bt(i.from.kind),
        l = i.from.range.start.line + 1,
        c = `  ${i.from.name} (${a}) - Line ${l}`;
      if (i.fromRanges && i.fromRanges.length > 0) {
        let u = i.fromRanges.map((d) => `${d.start.line + 1}:${d.start.character + 1}`).join(", ");
        c += ` [calls at: ${u}]`;
      }
      n.push(c);
    }
  }
  return n.join(`
`);
}
function X_l(e, t) {
  if (!e || e.length === 0) return "No outgoing calls found (this function calls nothing)";
  let n = [`Found ${e.length} outgoing ${bn(e.length, "call")}:`],
    r = new Map();
  for (let o of e) {
    if (!o.to) {
      T("formatOutgoingCallsResult: CallHierarchyOutgoingCall has undefined to field", {
        level: "warn",
      });
      continue;
    }
    let s = Czt(o.to.uri, t),
      i = r.get(s);
    if (i) i.push(o);
    else r.set(s, [o]);
  }
  for (let [o, s] of r) {
    n.push(`
${o}:`);
    for (let i of s) {
      if (!i.to) continue;
      let a = _bt(i.to.kind),
        l = i.to.range.start.line + 1,
        c = `  ${i.to.name} (${a}) - Line ${l}`;
      if (i.fromRanges && i.fromRanges.length > 0) {
        let u = i.fromRanges.map((d) => `${d.start.line + 1}:${d.start.character + 1}`).join(", ");
        c += ` [called from: ${u}]`;
      }
      n.push(c);
    }
  }
  return n.join(`
`);
}
var j_l;
