// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uDe
// matched 2.1.88 source: src/utils/toolResultStorage.ts
// class=modified  jaccard=0.533  score=0.7242  fileCov=0.6688
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uDe = E(() => {
  Qi();
  Un();
  oc();
  ade = class ade extends Error {
    tokenCount;
    maxTokens;
    constructor(e, t) {
      super(
        `File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`,
      );
      this.tokenCount = e;
      this.maxTokens = t;
      this.name = "MaxFileReadTokenExceededError";
    }
  };
  ((jSe = Cn(() => {
    let e = at("tengu_amber_wren", {}),
      t =
        typeof e?.maxSizeBytes === "number" && Number.isFinite(e.maxSizeBytes) && e.maxSizeBytes > 0
          ? e.maxSizeBytes
          : t0r,
      r =
        fvp() ??
        (typeof e?.maxTokens === "number" && Number.isFinite(e.maxTokens) && e.maxTokens > 0
          ? e.maxTokens
          : pvp),
      o = typeof e?.includeMaxSizeInPrompt === "boolean" ? e.includeMaxSizeInPrompt : void 0,
      s = typeof e?.targetedRangeNudge === "boolean" ? e.targetedRangeNudge : void 0;
    return {
      maxSizeBytes: t,
      maxTokens: r,
      includeMaxSizeInPrompt: o,
      targetedRangeNudge: s,
    };
  })),
    (pqe = Cn(() => at("tengu_tab_read_sep", !1))));
});
function mIa(e, t, n = e4t) {
  if (!Number.isFinite(t)) return t;
  let o = at(gvp, {})?.[e];
  if (typeof o === "number" && Number.isFinite(o) && o > 0) return o;
  return Math.min(t, n);
}
function hvp() {
  return QUn.join(aj(yr()), Rt());
}
function lde() {
  return QUn.join(hvp(), Pdo);
}
function T3t(e, t) {
  let n = t ? "json" : "txt";
  return QUn.join(lde(), `${e}.${n}`);
}
async function GSe() {
  try {
    await qs().mkdir(lde());
  } catch {}
}
async function pDe(e, t) {
  let n = Array.isArray(e);
  if (n) {
    if (e.some((l) => l.type !== "text"))
      return {
        error: "Cannot persist tool results containing non-text content",
      };
  }
  await GSe();
  let r = T3t(t, n),
    o = n ? De(e, null, 2) : e;
  try {
    (await qs().writeExclusive(r, o), T(`Persisted tool result to ${r} (${Ra(o.length)})`));
  } catch (a) {
    if (on(a) !== "EEXIST")
      return (
        T(`Failed to persist tool result to ${r}: ${fIa(Zr(a))}`, {
          level: "error",
        }),
        {
          error: fIa(Zr(a)),
        }
      );
  }
  let { preview: s, hasMore: i } = v3t(o, Gdt);
  return {
    filepath: r,
    originalSize: o.length,
    isJson: n,
    preview: s,
    hasMore: i,
  };
}
function fDe(e) {
  let t = `${dDe}
`;
  return (
    (t += `Output too large (${Ra(e.originalSize)}). Full output saved to: ${e.filepath}

`),
    (t += `Preview (first ${Ra(Gdt)}):
`),
    (t += e.preview),
    (t += e.hasMore
      ? `
...
`
      : `
`),
    (t += Mdo),
    t
  );
}
async function Wdt(e, t, n) {
  let r = e.mapToolResultToToolResultBlockParam(t, n);
  return hIa(r, e.name, mIa(e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling));
}
async function gIa(e, t, n, r) {
  return hIa(e, t, mIa(t, n, r));
}
function yvp(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every(
    (t) =>
      typeof t === "object" &&
      "type" in t &&
      t.type === "text" &&
      "text" in t &&
      (typeof t.text !== "string" || t.text.trim() === ""),
  );
}
async function hIa(e, t, n) {
  let r = e.content;
  if (yvp(r))
    return (
      G("tengu_tool_empty_result", {
        toolName: Ui(t),
      }),
      {
        ...e,
        content: `(${t} completed with no output)`,
      }
    );
  if (!r) return e;
  if (bIa(r)) return e;
  let o = SIa(r),
    s = n ?? qca;
  if (o <= s) return e;
  let i = await pDe(r, e.tool_use_id);
  if (mDe(i)) return e;
  let a = fDe(i);
  return (
    G("tengu_tool_result_persisted", {
      toolName: Ui(t),
      originalSizeBytes: i.originalSize,
      persistedSizeBytes: a.length,
      estimatedOriginalTokens: Math.ceil(i.originalSize / t4t),
      estimatedPersistedTokens: Math.ceil(a.length / t4t),
      thresholdUsed: s,
    }),
    {
      ...e,
      content: a,
    }
  );
}
function v3t(e, t) {
  if (e.length <= t)
    return {
      preview: e,
      hasMore: !1,
    };
  let r = e.slice(0, t).lastIndexOf(`
`),
    o = r > t * 0.5 ? r : t;
  return {
    preview: e.slice(0, o),
    hasMore: !0,
  };
}
function mDe(e) {
  return "error" in e;
}
function w3t() {
  return {
    seenIds: new Set(),
    replacements: new Map(),
  };
}
function yIa(e) {
  return {
    seenIds: new Set(e.seenIds),
    replacements: new Map(e.replacements),
  };
}
function _Ia(e, t) {
  if (!at("tengu_hawthorn_steeple", !1)) return;
  if (e) return ZUn(e, t ?? []);
  return w3t();
}
function _vp(e) {
  return typeof e === "string" && (e.startsWith(dDe) || e === mvp);
}
function bIa(e) {
  return (
    Array.isArray(e) &&
    e.some(
      (t) => typeof t === "object" && "type" in t && (t.type === "image" || t.type === "document"),
    )
  );
}
function SIa(e) {
  if (typeof e === "string") return e.length;
  return e.reduce((t, n) => t + (n.type === "text" ? n.text.length : 0), 0);
}
function bvp(e) {
  let t = new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    let r = n.message.content;
    if (!Array.isArray(r)) continue;
    for (let o of r) if (o.type === "tool_use") t.set(o.id, o.name);
  }
  return t;
}
function Svp(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap((t) => {
    if (t.type !== "tool_result" || !t.content) return [];
    if (_vp(t.content)) return [];
    if (bIa(t.content)) return [];
    return [
      {
        toolUseId: t.tool_use_id,
        content: t.content,
        size: SIa(t.content),
      },
    ];
  });
}
function EIa(e) {
  let t = [],
    n = [],
    r = () => {
      if (n.length > 0) t.push(n);
      n = [];
    },
    o = new Set();
  for (let s of e)
    if (s.type === "user") n.push(...Svp(s));
    else if (s.type === "assistant") {
      if (!o.has(s.message.id)) (r(), o.add(s.message.id));
    }
  return (r(), t);
}
function Evp(e, t) {
  return e.reduce(
    (n, r) => {
      let o = t.replacements.get(r.toolUseId);
      if (o !== void 0)
        n.mustReapply.push({
          ...r,
          replacement: o,
        });
      else if (t.seenIds.has(r.toolUseId)) n.frozen.push(r);
      else n.fresh.push(r);
      return n;
    },
    {
      mustReapply: [],
      frozen: [],
      fresh: [],
    },
  );
}
function Avp(e, t, n) {
  let r = [...e].sort((i, a) => a.size - i.size),
    o = [],
    s = t + e.reduce((i, a) => i + a.size, 0);
  for (let i of r) {
    if (s <= n) break;
    (o.push(i), (s -= i.size));
  }
  return o;
}
function Hvp(e, t) {
  return e.map((n) => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return n;
    let r = n.message.content;
    if (!r.some((s) => s.type === "tool_result" && t.has(s.tool_use_id))) return n;
    return {
      ...n,
      message: {
        ...n.message,
        content: r.map((s) => {
          if (s.type !== "tool_result") return s;
          let i = t.get(s.tool_use_id);
          return i === void 0
            ? s
            : {
                ...s,
                content: i,
              };
        }),
      },
    };
  });
}
async function Tvp(e) {
  let t = await pDe(e.content, e.toolUseId);
  if (mDe(t)) return null;
  return {
    content: fDe(t),
    originalSize: t.originalSize,
  };
}
async function vvp(e, t, n = new Set()) {
  let r = EIa(e),
    o = n.size > 0 ? bvp(e) : void 0,
    s = (m) => o !== void 0 && n.has(o.get(m) ?? ""),
    i = Vca,
    a = new Map(),
    l = [],
    c = 0,
    u = 0;
  for (let m of r) {
    let { mustReapply: g, frozen: h, fresh: y } = Evp(m, t);
    if ((g.forEach((x) => a.set(x.toolUseId, x.replacement)), (c += g.length), y.length === 0)) {
      m.forEach((x) => t.seenIds.add(x.toolUseId));
      continue;
    }
    y.filter((x) => s(x.toolUseId)).forEach((x) => t.seenIds.add(x.toolUseId));
    let _ = y.filter((x) => !s(x.toolUseId)),
      S = h.reduce((x, I) => x + I.size, 0),
      A = _.reduce((x, I) => x + I.size, 0),
      v = S + A > i ? Avp(_, S, i) : [],
      C = new Set(v.map((x) => x.toolUseId));
    if (
      (m.filter((x) => !C.has(x.toolUseId)).forEach((x) => t.seenIds.add(x.toolUseId)),
      v.length === 0)
    )
      continue;
    (u++, l.push(...v));
  }
  if (a.size === 0 && l.length === 0)
    return {
      messages: e,
      newlyReplaced: [],
    };
  let d = await Promise.all(l.map(async (m) => [m, await Tvp(m)])),
    p = [],
    f = 0;
  for (let [m, g] of d) {
    if ((t.seenIds.add(m.toolUseId), g === null)) continue;
    ((f += m.size),
      a.set(m.toolUseId, g.content),
      t.replacements.set(m.toolUseId, g.content),
      p.push({
        kind: "tool-result",
        toolUseId: m.toolUseId,
        replacement: g.content,
      }),
      G("tengu_tool_result_persisted_message_budget", {
        originalSizeBytes: g.originalSize,
        persistedSizeBytes: g.content.length,
        estimatedOriginalTokens: Math.ceil(g.originalSize / t4t),
        estimatedPersistedTokens: Math.ceil(g.content.length / t4t),
      }));
  }
  if (a.size === 0)
    return {
      messages: e,
      newlyReplaced: [],
    };
  if (p.length > 0)
    (T(
      `Per-message budget: persisted ${p.length} tool results across ${u} over-budget message(s), shed ~${Ra(f)}, ${c} re-applied`,
    ),
      G("tengu_message_level_tool_result_budget_enforced", {
        resultsPersisted: p.length,
        messagesOverBudget: u,
        replacedSizeBytes: f,
        reapplied: c,
      }));
  return {
    messages: Hvp(e, a),
    newlyReplaced: p,
  };
}
async function AIa(e, t, n, r) {
  if (!t) return e;
  let o = await vvp(e, t, r);
  if (o.newlyReplaced.length > 0) n?.(o.newlyReplaced);
  return o.messages;
}
function ZUn(e, t, n) {
  let r = w3t(),
    o = new Set(
      EIa(e)
        .flat()
        .map((s) => s.toolUseId),
    );
  for (let s of o) r.seenIds.add(s);
  for (let s of t)
    if (s.kind === "tool-result" && o.has(s.toolUseId))
      r.replacements.set(s.toolUseId, s.replacement);
  if (n) {
    for (let [s, i] of n) if (o.has(s) && !r.replacements.has(s)) r.replacements.set(s, i);
  }
  return r;
}
function eFn(e, t, n) {
  if (!e) return;
  return ZUn(t, n, e.replacements);
}
function fIa(e) {
  let t = e;
  if (t.code)
    switch (t.code) {
      case "ENOENT":
        return `Directory not found: ${t.path ?? "unknown path"}`;
      case "EACCES":
        return `Permission denied: ${t.path ?? "unknown path"}`;
      case "ENOSPC":
        return "No space left on device";
      case "EROFS":
        return "Read-only file system";
      case "EMFILE":
        return "Too many open files";
      case "EEXIST":
        return `File already exists: ${t.path ?? "unknown path"}`;
      default:
        return `${t.code}: ${t.message}`;
    }
  return e.message;
}
var QUn,
  Pdo = "tool-results",
  dDe = "<persisted-output>",
  Mdo = "</persisted-output>",
  mvp = "[Old tool result content cleared]",
  gvp = "tengu_velvet_ibis",
  Gdt = 2000;
