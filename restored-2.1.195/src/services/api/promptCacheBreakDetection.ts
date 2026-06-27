// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b5e
// matched 2.1.88 source: src/services/api/promptCacheBreakDetection.ts
// class=modified  jaccard=0.4509  score=0.5934  fileCov=0.6526
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var b5e = E(() => {
  Bla();
  aao();
  Wla();
  qla();
});
function tca() {
  return process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop";
}
function WX() {
  if (Oe.CLAUDE_CODE_IS_COWORK) return true;
  return tca();
}
function nca() {
  return Oe.CLAUDE_CODE_IS_COWORK;
}
function rca() {
  return eca.join(YU(), `cache-break-state-${Rt()}.json`);
}
function ccp() {
  if (dao || !nca()) return;
  dao = true;
  try {
    let e = Zla.readFileSync(rca(), "utf8"),
      t = lcp().safeParse(Ft(e));
    if (!t.success) return;
    for (let [n, r] of Object.entries(t.data)) {
      if (V8.has(n)) continue;
      V8.set(n, {
        ...r,
        pendingChanges: null,
        buildDiffContent: () => "",
      });
    }
  } catch {}
}
function S5e() {
  if (!nca()) return;
  try {
    let e = {};
    for (let [r, o] of V8) {
      let { buildDiffContent: s, pendingChanges: i, ...a } = o;
      e[r] = a;
    }
    let t = rca(),
      n = De(e);
    Xla = Xla.then(() =>
      sNn.mkdir(YU(), {
        recursive: true,
        mode: 448,
      }),
    )
      .then(() => sNn.writeFile(t, n))
      .catch(() => {});
  } catch {}
}
function mcp(e) {
  return e.includes("haiku");
}
function iNn(e, t) {
  if (e === "compact") return "repl_main_thread";
  for (let n of dcp) if (e.startsWith(n)) return t || e;
  return null;
}
function Jla(e) {
  return e.map((t) => {
    if (!("cache_control" in t)) return t;
    let { cache_control: n, ...r } = t;
    return r;
  });
}
function mao(e) {
  let t = e.text;
  return typeof t === "string" ? t : void 0;
}
function Qla(e) {
  return mao(e)?.startsWith(gcp) ?? false;
}
function Sut(e) {
  let t = Bun.hash(De(e));
  return typeof t === "bigint" ? Number(t & 0xffffffffn) : t;
}
function uao(e) {
  if (!e.startsWith("mcp__")) return e;
  let t = e.split("__")[1];
  if (!t) return "mcp";
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent" || xzr.has(t)) return `mcp__${t}`;
  return "mcp";
}
function pao(e, t) {
  if (typeof e === "string") {
    t.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "container_upload":
    case "compaction":
      break;
    default: {
      let r = e;
      break;
    }
  }
  if ((t.push(e.type), "text" in e && typeof e.text === "string"))
    t.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") t.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") t.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") t.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") t.push("n", e.name);
  if ("input" in e && e.input !== void 0) t.push("p", De(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let r = e.source;
    if ((t.push("m", String(r.type ?? ""), String(r.media_type ?? "")), typeof r.data === "string"))
      t.push(String(r.data.length));
  }
  let n = "content" in e ? e.content : void 0;
  if (Array.isArray(n)) {
    t.push("[", String(n.length));
    for (let r of n) pao(r, t);
    t.push("]");
  } else if (typeof n === "string") t.push("c", String(n.length), n.slice(0, 32), n.slice(-32));
  for (let [r, o] of Object.entries(e)) {
    if (hcp.has(r) || o === void 0) continue;
    let s = typeof o === "string" ? o : De(o);
    t.push(r, s.length > 256 ? `len:${s.length}` : s);
  }
}
function ycp(e) {
  return e.map((t) => {
    let n = [t.message.role],
      r = t.message.content;
    if (Array.isArray(r)) {
      n.push(String(r.length));
      for (let s of r) pao(s, n);
    } else pao(r, n);
    let o = Bun.hash(n.join("|"));
    return typeof o === "bigint" ? Number(o & 0xffffffffn) : o;
  });
}
function _cp(e, t) {
  let n = {};
  for (let r = 0; r < e.length; r++) n[t[r] ?? `__idx_${r}`] = Sut(e[r]);
  return n;
}
function bcp(e) {
  let t = 0;
  for (let n of e) t += mao(n)?.length ?? 0;
  return t;
}
function Scp(e, t, n) {
  let r = e.map((s) => s.text).join(`

`),
    o = t
      .map((s) => {
        if (!("name" in s)) return "unknown";
        let i = "description" in s ? s.description : "",
          a = "input_schema" in s ? De(s.input_schema) : "";
        return `${s.name}
  description: ${i}
  input_schema: ${a}`;
      })
      .sort().join(`

`);
  return `Model: ${n}

=== System Prompt ===

${r}

=== Tools (${t.length}) ===

${o}
`;
}
function oca(e) {
  try {
    let {
        system: t,
        toolSchemas: n,
        querySource: r,
        model: o,
        agentId: s,
        fastMode: i,
        globalCacheStrategy: a = "",
        betas: l = [],
        autoModeActive: c = false,
        isUsingOverage: u = false,
        is1hCacheTTL: d = false,
        queryDepth: p,
        cacheDiagnosis: f = false,
        effortValue: m,
        extraBodyParams: g,
        messagesForAPI: h,
      } = e,
      y = iNn(r, s);
    if (!y) return;
    let b = Jla(t).filter((de) => !Qla(de)),
      _ = Jla(n),
      S = Sut(b),
      A = Sut(_),
      v = Sut(
        t.filter((de) => !Qla(de)).map((de) => ("cache_control" in de ? de.cache_control : null)),
      ),
      C = n.map((de) => ("name" in de ? de.name : "unknown")),
      x = () => _cp(_, C),
      I = () => b.map((de) => Sut(de)),
      k = () => b.map((de) => mao(de)?.length ?? 0),
      D = bcp(b),
      P = () => Scp(t, n, o),
      O = i ?? false,
      L = [...l].sort(),
      M = m === void 0 ? "" : String(m),
      N = g === void 0 ? 0 : Sut(g),
      B = h ? ycp(h) : [];
    ccp();
    let $ = V8.get(y);
    if (!$) {
      while (V8.size >= ucp) {
        let de = V8.keys().next().value;
        if (de !== void 0) V8.delete(de);
      }
      (V8.set(y, {
        systemHash: S,
        toolsHash: A,
        cacheControlHash: v,
        toolNames: C,
        systemCharCount: D,
        model: o,
        fastMode: O,
        globalCacheStrategy: a,
        betas: L,
        autoModeActive: c,
        isUsingOverage: u,
        is1hCacheTTL: d,
        queryDepth: p,
        cacheDiagnosis: f,
        effortValue: M,
        extraBodyHash: N,
        callCount: 1,
        pendingChanges: null,
        prevCacheReadTokens: null,
        cacheDeletionsPending: false,
        messageHashes: B,
        buildDiffContent: P,
        perToolHashes: x(),
        perBlockHashes: I(),
        perBlockLengths: k(),
      }),
        S5e());
      return;
    }
    $.callCount++;
    let q = S !== $.systemHash,
      W = A !== $.toolsHash,
      V = o !== $.model,
      Y = O !== $.fastMode,
      z = v !== $.cacheControlHash,
      K = a !== $.globalCacheStrategy,
      Z = L.length !== $.betas.length || L.some((de, Ee) => de !== $.betas[Ee]),
      J = c !== $.autoModeActive,
      ne = u !== $.isUsingOverage,
      oe = f !== $.cacheDiagnosis,
      re = M !== $.effortValue,
      ee = N !== $.extraBodyHash,
      ce = $.messageHashes.findIndex((de, Ee) => B[Ee] !== de),
      ae = ce !== -1;
    if (q || W || V || Y || z || K || Z || J || ne || oe || re || ee || ae) {
      let de = new Set($.toolNames),
        Ee = new Set(C),
        me = new Set($.betas),
        pe = new Set(L),
        ge = C.filter((we) => !de.has(we)),
        he = $.toolNames.filter((we) => !Ee.has(we)),
        ie = [];
      if (W) {
        let we = x();
        for (let Ce of C) {
          if (!de.has(Ce)) continue;
          if (we[Ce] !== $.perToolHashes[Ce]) ie.push(Ce);
        }
        $.perToolHashes = we;
      }
      let le = $.perBlockHashes.length,
        He = b.length,
        ye = [],
        ue = [];
      if (q) {
        let we = I(),
          Ce = k();
        if (He === le) {
          for (let Ie = 0; Ie < He; Ie++)
            if (we[Ie] !== $.perBlockHashes[Ie])
              (ye.push(Ie), ue.push(Ce[Ie] - $.perBlockLengths[Ie]));
        }
        (($.perBlockHashes = we), ($.perBlockLengths = Ce));
      }
      $.pendingChanges = {
        systemPromptChanged: q,
        toolSchemasChanged: W,
        modelChanged: V,
        fastModeChanged: Y,
        cacheControlChanged: z,
        globalCacheStrategyChanged: K,
        betasChanged: Z,
        autoModeChanged: J,
        overageChanged: ne,
        cacheDiagnosisChanged: oe,
        effortChanged: re,
        extraBodyChanged: ee,
        messagesHistoryChanged: ae,
        firstChangedMessageIndex: ce,
        prevMessageCount: $.messageHashes.length,
        addedToolCount: ge.length,
        removedToolCount: he.length,
        addedTools: ge,
        removedTools: he,
        changedToolSchemas: ie,
        prevBlockCount: le,
        newBlockCount: He,
        changedBlockIndices: ye,
        changedBlockLengthDeltas: ue,
        systemCharDelta: D - $.systemCharCount,
        previousModel: $.model,
        newModel: o,
        prevGlobalCacheStrategy: $.globalCacheStrategy,
        newGlobalCacheStrategy: a,
        addedBetas: L.filter((we) => !me.has(we)),
        removedBetas: $.betas.filter((we) => !pe.has(we)),
        prevEffortValue: $.effortValue,
        newEffortValue: M,
        buildPrevDiffContent: $.buildDiffContent,
      };
    } else $.pendingChanges = null;
    (($.systemHash = S),
      ($.toolsHash = A),
      ($.cacheControlHash = v),
      ($.toolNames = C),
      ($.systemCharCount = D),
      ($.model = o),
      ($.fastMode = O),
      ($.globalCacheStrategy = a),
      ($.betas = L),
      ($.autoModeActive = c),
      ($.isUsingOverage = u),
      ($.is1hCacheTTL = d),
      ($.queryDepth = p),
      ($.cacheDiagnosis = f),
      ($.effortValue = M),
      ($.extraBodyHash = N),
      ($.messageHashes = B),
      ($.buildDiffContent = P),
      S5e());
  } catch (t) {
    ke(t);
  }
}
async function sca(e, t, n, r, o, s, i) {
  let a = iNn(e, o);
  if (!a) return;
  let l = V8.get(a);
  if (!l) return;
  if (mcp(l.model)) return;
  try {
    let c = l.prevCacheReadTokens;
    l.prevCacheReadTokens = t;
    let u = r.findLast((A) => A.type === "assistant"),
      d = u ? Date.now() - new Date(u.timestamp).getTime() : null;
    if (c === null) return;
    let p = l.pendingChanges;
    if (l.cacheDeletionsPending) {
      ((l.cacheDeletionsPending = false),
        T(`[PROMPT CACHE] cache deletion applied, cache read: ${c} \u2192 ${t} (expected drop)`),
        (l.pendingChanges = null));
      return;
    }
    let f = c - t;
    if (t >= c * 0.95 || f < pcp) {
      l.pendingChanges = null;
      return;
    }
    let m = [];
    if (p) {
      if (p.modelChanged) m.push(`model changed (${p.previousModel} \u2192 ${p.newModel})`);
      if (p.systemPromptChanged) {
        let A = p.systemCharDelta,
          v = A === 0 ? "" : A > 0 ? ` (+${A} chars)` : ` (${A} chars)`;
        m.push(`system prompt changed${v}`);
      }
      if (p.toolSchemasChanged) {
        let A =
          p.addedToolCount > 0 || p.removedToolCount > 0
            ? ` (+${p.addedToolCount}/-${p.removedToolCount} tools)`
            : " (tool prompt/schema changed, same tool set)";
        m.push(`tools changed${A}`);
      }
      if (p.fastModeChanged) m.push("fast mode toggled");
      if (p.globalCacheStrategyChanged)
        m.push(
          `global cache strategy changed (${p.prevGlobalCacheStrategy || "none"} \u2192 ${p.newGlobalCacheStrategy || "none"})`,
        );
      if (p.cacheControlChanged && !p.globalCacheStrategyChanged && !p.systemPromptChanged)
        m.push("cache_control changed (scope or TTL)");
      if (p.betasChanged) {
        let A = p.addedBetas.length ? `+${p.addedBetas.join(",")}` : "",
          v = p.removedBetas.length ? `-${p.removedBetas.join(",")}` : "",
          C = [A, v].filter(Boolean).join(" ");
        m.push(`betas changed${C ? ` (${C})` : ""}`);
      }
      if (p.autoModeChanged) m.push("auto mode toggled");
      if (p.overageChanged) m.push("overage state changed (TTL flip expected)");
      if (p.cacheDiagnosisChanged) m.push("cache diagnosis toggled");
      if (p.effortChanged)
        m.push(
          `effort changed (${p.prevEffortValue || "default"} \u2192 ${p.newEffortValue || "default"})`,
        );
      if (p.extraBodyChanged) m.push("extra body params changed");
      if (p.messagesHistoryChanged)
        m.push(
          `message history mutated at index ${p.firstChangedMessageIndex}/${p.prevMessageCount}`,
        );
    }
    let g = d !== null && d > fcp,
      h = d !== null && d > fao,
      y;
    if (m.length > 0) y = m.join(", ");
    else if (h) y = "possible 1h TTL expiry (prompt unchanged)";
    else if (g) y = "possible 5min TTL expiry (prompt unchanged)";
    else if (d !== null) y = "likely server-side (prompt unchanged, <5min gap)";
    else y = "unknown cause";
    G("tengu_prompt_cache_break", {
      systemPromptChanged: p?.systemPromptChanged ?? false,
      toolSchemasChanged: p?.toolSchemasChanged ?? false,
      modelChanged: p?.modelChanged ?? false,
      fastModeChanged: p?.fastModeChanged ?? false,
      cacheControlChanged: p?.cacheControlChanged ?? false,
      globalCacheStrategyChanged: p?.globalCacheStrategyChanged ?? false,
      betasChanged: p?.betasChanged ?? false,
      autoModeChanged: p?.autoModeChanged ?? false,
      overageChanged: p?.overageChanged ?? false,
      cacheDiagnosisChanged: p?.cacheDiagnosisChanged ?? false,
      effortChanged: p?.effortChanged ?? false,
      extraBodyChanged: p?.extraBodyChanged ?? false,
      messagesHistoryChanged: p?.messagesHistoryChanged ?? false,
      firstChangedMessageIndex: p?.firstChangedMessageIndex ?? -1,
      addedToolCount: p?.addedToolCount ?? 0,
      removedToolCount: p?.removedToolCount ?? 0,
      systemCharDelta: p?.systemCharDelta ?? 0,
      prevBlockCount: p?.prevBlockCount ?? 0,
      newBlockCount: p?.newBlockCount ?? 0,
      changedBlockIndices: (p?.changedBlockIndices ?? []).join(","),
      changedBlockLengthDeltas: (p?.changedBlockLengthDeltas ?? []).join(","),
      addedTools: (p?.addedTools ?? []).map(uao).join(","),
      removedTools: (p?.removedTools ?? []).map(uao).join(","),
      changedToolSchemas: (p?.changedToolSchemas ?? []).map(uao).join(","),
      addedBetas: (p?.addedBetas ?? []).join(","),
      removedBetas: (p?.removedBetas ?? []).join(","),
      prevGlobalCacheStrategy: p?.prevGlobalCacheStrategy ?? "",
      newGlobalCacheStrategy: p?.newGlobalCacheStrategy ?? "",
      systemHash: l.systemHash,
      toolsHash: l.toolsHash,
      is1hCacheTTL: l.is1hCacheTTL,
      queryDepth: l.queryDepth,
      querySource: Bh(e),
      model: l.model,
      globalCacheStrategy: l.globalCacheStrategy,
      callNumber: l.callCount,
      prevCacheReadTokens: c,
      cacheReadTokens: t,
      cacheCreationTokens: n,
      timeSinceLastAssistantMsg: d ?? -1,
      lastAssistantMsgOver5minAgo: g,
      lastAssistantMsgOver1hAgo: h,
      isCowork: Oe.CLAUDE_CODE_IS_COWORK,
      isDesktop: tca(),
      requestId: s ?? "",
      previousMessageId: i ?? "",
    });
    let b,
      _ = b ? `, diff: ${b}` : "",
      S = `[PROMPT CACHE BREAK] ${y} [source=${e}, call #${l.callCount}, cache read: ${c} \u2192 ${t}, creation: ${n}${_}]`;
    (T(S, {
      level: "warn",
    }),
      (l.pendingChanges = null));
  } catch (c) {
    ke(c);
  } finally {
    S5e();
  }
}
function ica(e, t) {
  try {
    G("tengu_prompt_cache_diagnosis_received", {
      diagnosisType: e.type,
      tokensMissed: e.cache_missed_input_tokens ?? -1,
      requestId: t.requestId ?? "",
      previousMessageId: t.previousMessageId ?? "",
      model: t.model,
      isCowork: Oe.CLAUDE_CODE_IS_COWORK,
      is1hCacheTTL: t.is1hCacheTTL,
      querySource: Bh(t.querySource),
      queryDepth: t.queryDepth,
    });
  } catch (n) {
    ke(n);
  }
}
function aca(e, t) {
  let n = iNn(e, t),
    r = n ? V8.get(n) : void 0;
  if (r) ((r.cacheDeletionsPending = true), S5e());
}
function Bjt(e, t) {
  let n = t ?? iNn(e),
    r = n ? V8.get(n) : void 0;
  if (r) ((r.prevCacheReadTokens = null), S5e());
}
function lca(e) {
  (V8.delete(e), S5e());
}
function cca() {
  (V8.clear(), (dao = false), S5e());
}
var Zla,
  sNn,
  eca,
  V8,
  lcp,
  dao = false,
  Xla,
  ucp = 10,
  dcp,
  pcp = 2000,
  fcp = 300000,
  fao = 3600000,
  gcp = "x-anthropic-billing-header:",
  hcp;
