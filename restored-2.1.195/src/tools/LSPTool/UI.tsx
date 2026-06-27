// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lbl
// matched 2.1.88 source: src/tools/LSPTool/UI.tsx
// class=modified  jaccard=0.3817  score=0.5442  fileCov=0.5611
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lbl = E(() => {
  Q8();
  E5();
  ql();
  Ye();
  oc();
  co();
  nbl();
  ((rbl = R(lt(), 1)),
    (Lk = R(se(), 1)),
    (Mgf = {
      goToDefinition: {
        singular: "definition",
        plural: "definitions",
      },
      findReferences: {
        singular: "reference",
        plural: "references",
      },
      documentSymbol: {
        singular: "symbol",
        plural: "symbols",
      },
      workspaceSymbol: {
        singular: "symbol",
        plural: "symbols",
      },
      hover: {
        singular: "hover info",
        plural: "hover info",
        special: "available",
      },
      goToImplementation: {
        singular: "implementation",
        plural: "implementations",
      },
      prepareCallHierarchy: {
        singular: "call item",
        plural: "call items",
      },
      incomingCalls: {
        singular: "caller",
        plural: "callers",
      },
      outgoingCalls: {
        singular: "callee",
        plural: "callees",
      },
    }));
});
function Ugf(e, t) {
  let n = dbl.pathToFileURL(t).href,
    r = {
      line: e.line - 1,
      character: e.character - 1,
    };
  switch (e.operation) {
    case "goToDefinition":
      return {
        method: "textDocument/definition",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
    case "findReferences":
      return {
        method: "textDocument/references",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
          context: {
            includeDeclaration: true,
          },
        },
      };
    case "hover":
      return {
        method: "textDocument/hover",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
    case "documentSymbol":
      return {
        method: "textDocument/documentSymbol",
        params: {
          textDocument: {
            uri: n,
          },
        },
      };
    case "workspaceSymbol":
      return {
        method: "workspace/symbol",
        params: {
          query: e.query ?? "",
        },
      };
    case "goToImplementation":
      return {
        method: "textDocument/implementation",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
    case "prepareCallHierarchy":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
    case "incomingCalls":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
    case "outgoingCalls":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: {
          textDocument: {
            uri: n,
          },
          position: r,
        },
      };
  }
}
function pbl(e) {
  let t = e.length;
  for (let n of e) if (n.children && n.children.length > 0) t += pbl(n.children);
  return t;
}
function fXn(e) {
  return new Set(e.map((t) => t.uri)).size;
}
function Fgf(e) {
  let t = e.replace(/^file:\/\//, "");
  if (/^\/[A-Za-z]:/.test(t)) t = t.slice(1);
  try {
    t = decodeURIComponent(t);
  } catch {}
  return t;
}
async function cbl(e, t) {
  if (e.length === 0) return e;
  let n = new Map();
  for (let i of e) if (i.uri && !n.has(i.uri)) n.set(i.uri, Fgf(i.uri));
  let r = Uo(n.values());
  if (r.length === 0) return e;
  let o = new Set(),
    s = 50;
  for (let i = 0; i < r.length; i += s) {
    let a = r.slice(i, i + s),
      l = await Gr("git", ["check-ignore", ...a], {
        cwd: t,
        preserveOutputOnError: false,
        timeout: 5000,
      });
    if (l.code === 0 && l.stdout)
      for (let c of l.stdout.split(`
`)) {
        let u = c.trim();
        if (u) o.add(u);
      }
  }
  if (o.size === 0) return e;
  return e.filter((i) => {
    let a = n.get(i.uri);
    return !a || !o.has(a);
  });
}
function jgf(e) {
  return "targetUri" in e;
}
function mXn(e) {
  if (jgf(e))
    return {
      uri: e.targetUri,
      range: e.targetSelectionRange || e.targetRange,
    };
  return e;
}
function Ggf(e, t, n) {
  switch (e) {
    case "goToDefinition": {
      let o = (Array.isArray(t) ? t : t ? [t] : []).map(mXn),
        s = o.filter((a) => !a || !a.uri);
      if (s.length > 0)
        T(
          `LSP server returned ${s.length} location(s) with undefined URI for goToDefinition on ${n}. This indicates malformed data from the LSP server.`,
          {
            level: "error",
          },
        );
      let i = o.filter((a) => a && a.uri);
      return {
        formatted: yRo(t, n),
        resultCount: i.length,
        fileCount: fXn(i),
      };
    }
    case "findReferences": {
      let r = t || [],
        o = r.filter((i) => !i || !i.uri);
      if (o.length > 0)
        T(
          `LSP server returned ${o.length} location(s) with undefined URI for findReferences on ${n}. This indicates malformed data from the LSP server.`,
          {
            level: "error",
          },
        );
      let s = r.filter((i) => i && i.uri);
      return {
        formatted: W_l(t, n),
        resultCount: s.length,
        fileCount: fXn(s),
      };
    }
    case "hover":
      return {
        formatted: q_l(t, n),
        resultCount: t ? 1 : 0,
        fileCount: t ? 1 : 0,
      };
    case "documentSymbol": {
      let r = t || [],
        s = r.length > 0 && r[0] && "range" in r[0] ? pbl(r) : r.length;
      return {
        formatted: z_l(t, n),
        resultCount: s,
        fileCount: r.length > 0 ? 1 : 0,
      };
    }
    case "workspaceSymbol": {
      let r = t || [],
        o = r.filter((a) => !a || !a.location || !a.location.uri);
      if (o.length > 0)
        T(
          `LSP server returned ${o.length} symbol(s) with undefined location URI for workspaceSymbol on ${n}. This indicates malformed data from the LSP server.`,
          {
            level: "error",
          },
        );
      let s = r.filter((a) => a && a.location && a.location.uri),
        i = s.map((a) => a.location);
      return {
        formatted: _Ro(t, n),
        resultCount: s.length,
        fileCount: fXn(i),
      };
    }
    case "goToImplementation": {
      let o = (Array.isArray(t) ? t : t ? [t] : []).map(mXn),
        s = o.filter((a) => !a || !a.uri);
      if (s.length > 0)
        T(
          `LSP server returned ${s.length} location(s) with undefined URI for goToImplementation on ${n}. This indicates malformed data from the LSP server.`,
          {
            level: "error",
          },
        );
      let i = o.filter((a) => a && a.uri);
      return {
        formatted: yRo(t, n),
        resultCount: i.length,
        fileCount: fXn(i),
      };
    }
    case "prepareCallHierarchy": {
      let r = t || [];
      return {
        formatted: K_l(t, n),
        resultCount: r.length,
        fileCount: r.length > 0 ? Wgf(r) : 0,
      };
    }
    case "incomingCalls": {
      let r = t || [];
      return {
        formatted: Y_l(t, n),
        resultCount: r.length,
        fileCount: r.length > 0 ? qgf(r) : 0,
      };
    }
    case "outgoingCalls": {
      let r = t || [];
      return {
        formatted: X_l(t, n),
        resultCount: r.length,
        fileCount: r.length > 0 ? Vgf(r) : 0,
      };
    }
  }
}
function Wgf(e) {
  let t = e.map((n) => n.uri).filter((n) => n);
  return new Set(t).size;
}
function qgf(e) {
  let t = e.map((n) => n.from?.uri).filter((n) => n);
  return new Set(t).size;
}
function Vgf(e) {
  let t = e.map((n) => n.to?.uri).filter((n) => n);
  return new Set(t).size;
}
var ubl,
  bRo,
  dbl,
  Ogf = 10000000 /* 1e7 */,
  Ngf,
  Bgf,
  SRo;
