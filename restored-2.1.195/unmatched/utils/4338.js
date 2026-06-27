// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sRo
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/typescript.js
// class=new  jaccard=0.0369  score=0.1353  fileCov=0.0483
// note: nearest: node_modules/highlight.js/lib/languages/typescript.js (0.0369); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sRo = E(() => {
  ii();
  Lo();
  At();
  bUt();
  _m();
  WAe();
  EI();
  jv();
  Fyl();
  Zyl();
  nXn = require("path"), oRo = require("util"), J6e = R(require("vm")), Omf = /^[a-zA-Z0-9_-]{1,111}$/, n_l = ["sh", "cat", "rg", "rgf", "gl", "put", "gh", "chdir", "log", "str", "o", "REPO"];
  r_l = new WeakSet();
  vzt = class vzt extends mi {
    key;
    constructor(e) {
      super(`REPL sandbox code made the global '${e}' non-configurable; the host cannot restore it`, "REPL sandbox pinned a managed global non-configurable");
      this.name = "VMContextPoisonedError", this.key = e, r_l.add(this);
    }
  };
  Bmf = ["console", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "atob", "btoa", "shQuote", "registerTool", "unregisterTool", "listTools", "getTool"];
  Gmf = ["A", "B", "C", "glob", "head", "type", "i"];
  Wmf = /^(pr|issue|run|workflow|release|label|cache)\b/, qmf = /(^|\s)(-R|--repo\b)/;
});
function aRo(e) {
  return Array.from(e.values()).filter(t => t.phase === "complete" || t.phase === "error").map(t => t.phase === "error" ? {
    kind: "err",
    toolName: t.toolName,
    error: t.error ?? ""
  } : {
    kind: "ok",
    toolName: t.toolName,
    result: t.result
  });
}
function c_l(e, t) {
  if (e === null || typeof e !== "object") return "";
  let n = e[t];
  return typeof n === "string" ? n : "";
}
function Kmf(e) {
  if (e.type !== "assistant" || e.isVirtual) return [];
  let t = e.message.content;
  if (!Array.isArray(t)) return [];
  return t.filter(n => n.type === "tool_use" && n.name === Fm).map(n => ({
    id: n.id,
    code: c_l(n.input, "code")
  }));
}
function Ymf(e) {
  if (e.type !== "assistant" || !e.isVirtual) return;
  let t = e.message.content;
  if (!Array.isArray(t)) return;
  let n = t[0];
  return n?.type === "tool_use" ? n.name : void 0;
}
function Xmf(e, t) {
  if (e.type !== "user" || !e.isVirtual) return;
  let n = e.message.content;
  if (!Array.isArray(n)) return;
  let r = n[0];
  if (r?.type !== "tool_result") return;
  return r.is_error ? {
    kind: "err",
    toolName: t,
    error: typeof r.content === "string" ? r.content : ""
  } : {
    kind: "ok",
    toolName: t,
    result: e.toolUseResult
  };
}
function Jmf(e, t) {
  if (e.type !== "user" || e.isVirtual) return;
  let n = e.message.content;
  if (!Array.isArray(n)) return;
  if (!n.some(o => o.type === "tool_result" && o.tool_use_id === t)) return;
  return c_l(e.toolUseResult, "error").length > 0;
}
function aXn(e) {
  let t = [],
    n,
    r = () => {
      if (!n) return;
      t.push({
        code: n.code,
        calls: n.calls,
        threw: n.threw
      }), n = void 0;
    };
  for (let o of e) {
    if (o.type !== "assistant" && o.type !== "user") continue;
    if (o.isVirtual) {
      if (!n) continue;
      let i = Ymf(o);
      if (i !== void 0) {
        n.pendingName = i;
        continue;
      }
      let a = n.pendingName;
      if (a === void 0) continue;
      let l = Xmf(o, a);
      if (!l) continue;
      n.calls.push(l), n.pendingName = void 0;
      continue;
    }
    let s = Kmf(o);
    if (s.length > 0) {
      for (let i of s) r(), n = {
        replId: i.id,
        code: i.code,
        calls: [],
        threw: false,
        pendingName: void 0
      };
      continue;
    }
    if (n) {
      let i = Jmf(o, n.replId);
      if (i !== void 0) n.threw = i;
    }
  }
  return r(), t;
}
function Qmf(e) {
  return {
    error: e
  };
}
function egf(e, t) {
  let n = 0,
    r = [],
    o = l => {
      if (r.length < Zmf) r.push(l);
    },
    s = l => {
      let c = e[n];
      if (!c) throw new u_l(l, e.length);
      if (n++, c.toolName !== l) o(`position ${n - 1}: expected ${c.toolName}, invoked ${l}`);
      return c;
    },
    i = l => async function () {
      await new Promise(d => setImmediate(d));
      let u = s(l);
      return u.kind === "ok" ? u.result : Qmf(u.error);
    };
  return {
    wrappers: Object.fromEntries(t.map(l => [l, i(l)])),
    diagnostics: () => ({
      consumed: n,
      total: e.length,
      drift: r
    })
  };
}
async function tgf(e, t) {
  let n = [...e.toolWrapperNames],
    {
      wrappers: r,
      diagnostics: o
    } = egf(t.calls, n),
    s = n.map(i => [i, rXn(e.vmContext, i)]);
  try {
    n.forEach(u => {
      _S(e.vmContext, u, e.sealers.asyncDataPropagate(r[u]));
    }), oXn(e);
    let i = J7n(t.code),
      l = new l_l.Script(i, {
        filename: "repl-replay.js",
        importModuleDynamically: () => {
          throw efe("import() is not available in REPL code.");
        }
      }).runInContext(e.vmContext, {
        timeout: iRo
      });
    await vc(e.sealers.awaitVM(l).then(u => sXn(e, Q7n(u))), iRo, `REPL replay timed out after ${iRo}ms`);
    let c = o();
    if (t.threw) return {
      kind: "drift",
      reason: "original threw, replay succeeded",
      consumed: c.consumed,
      total: c.total
    };
    if (c.drift.length > 0 || c.consumed !== c.total) return {
      kind: "drift",
      reason: c.drift[0] ?? `consumed ${c.consumed}/${c.total} cached calls`,
      consumed: c.consumed,
      total: c.total
    };
    return {
      kind: "ok",
      consumed: c.consumed,
      total: c.total
    };
  } catch (i) {
    if (wzt(i)) throw i;
    let a = o(),
      l = e.sealers.errMsg(i);
    if (t.threw) {
      if (a.drift.length > 0 || a.consumed !== a.total) return {
        kind: "drift",
        reason: a.drift[0] ?? `consumed ${a.consumed}/${a.total} before expected throw`,
        consumed: a.consumed,
        total: a.total
      };
      return {
        kind: "ok",
        consumed: a.consumed,
        total: a.total
      };
    }
    return {
      kind: "threw",
      error: l
    };
  } finally {
    s.forEach(([i, a]) => {
      try {
        _S(e.vmContext, i, a);
      } catch {}
    }), e.console.clear();
  }
}
async function d_l(e, t) {
  let n = [];
  for (let o of t) {
    let s = await tgf(e, o);
    if (n.push(s), s.kind !== "ok") T(`REPL replay ${s.kind} at block ${n.length}/${t.length}: ${"error" in s ? s.error : s.reason}`, {
      level: "warn"
    });
  }
  let r = o_l(e);
  if (r !== null) throw new vzt(r);
  return n;
}
function p_l(e) {
  let t = On(e, s => s.kind === "ok"),
    n = On(e, s => s.kind === "drift"),
    r = On(e, s => s.kind === "threw"),
    o = r > 0 || n > 0 ? `${t}/${e.length} blocks replayed cleanly (${n} drifted, ${r} threw)` : `${t} blocks replayed`;
  return {
    ok: t,
    drifted: n,
    threw: r,
    summary: o
  };
}
var l_l,
  u_l,
  Zmf = 100,
  iRo = 30000;