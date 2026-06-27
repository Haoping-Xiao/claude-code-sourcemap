// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HJl
// matched 2.1.88 source: src/utils/exportRenderer.tsx
// class=partial  jaccard=0.1861  score=0.7815  fileCov=0.1963
// note: low-confidence suggestion: src/utils/exportRenderer.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HJl = E(() => {
  U4o();
  _i();
  jh();
  Ye();
  ps();
  dn();
  Cc();
  Vl();
  Bs();
  vi();
  Ko();
  Mg();
  $1e = R(rt(), 1), Cz = R(se(), 1);
});
function d6f({
  children: e
}) {
  let {
      bindings: t
    } = lUt(Gj),
    n = aHt.useRef(null),
    r = aHt.useRef(new Map()),
    o = aHt.useRef(new Set()),
    s = aHt.useRef(new Set()).current,
    i = aHt.useRef(dPn());
  return DJt.jsx(pPn, {
    bindings: t,
    pendingChordRef: n,
    pendingChord: null,
    setPendingChord: () => {},
    activeContexts: s,
    registerActiveContext: () => {},
    unregisterActiveContext: () => {},
    handlerRegistryRef: r,
    preDispatchRef: o,
    keyHandlerRegistry: i.current,
    children: e
  });
}
function p6f(e) {
  for (let t of e) if (t.type === "assistant") {
    let n = t.message.model;
    if (n && n !== _I) return n;
  }
  return;
}
function f6f(e) {
  if (!("message" in e)) return 1;
  let t = e.message.content;
  return Array.isArray(t) ? t.length : 1;
}
async function m6f(e, t, n, {
  columns: r,
  verbose: o = false,
  chunkSize: s = 40,
  onProgress: i
} = {}) {
  let a = p6f(e),
    l = a ? {
      ...y6(),
      mainLoopModel: a
    } : void 0,
    c = d => _gt(DJt.jsx(AH, {
      initialState: l,
      children: DJt.jsx(d6f, {
        children: DJt.jsx(nYe, {
          messages: e,
          tools: t,
          commands: [],
          verbose: o,
          toolJSX: null,
          inProgressToolUseIDs: new Set(),
          isMessageSelectorVisible: false,
          conversationId: "export",
          screen: "prompt",
          latchAnnouncementSlot: false,
          streamingToolUses: [],
          showAllInTranscript: true,
          isLoading: false,
          renderRange: d,
          disableRenderCap: true
        })
      })
    }), r),
    u = s;
  for (let d of e) u += f6f(d);
  for (let d = 0; d < u; d += s) {
    let p = await c([d, d + s]);
    if (Ja(p).trim() === "") break;
    await n(p), i?.(d + s);
  }
}
async function cir(e, t = [], n) {
  let r = [];
  return await m6f(e, t, o => void r.push(Ja(o)), {
    columns: n
  }), r.join("");
}
var aHt, DJt;