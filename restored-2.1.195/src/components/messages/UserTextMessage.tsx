// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cal
// matched 2.1.88 source: src/components/messages/UserTextMessage.tsx
// class=modified  jaccard=0.2407  score=0.5963  fileCov=0.2876
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cal] deps: @xmldom/xmldom/lib/entities.js, env-paths/index.js, hooks/useTerminalSize.ts
((aal = R(lt(), 1)), (e_t = R(se(), 1)), (msf = new RegExp(`<${bhe}>[\\s\\S]*?</${bhe}>\\n*`)));
function UserTextMessage(t0) {
  let t = dal.c(50),
    { addMargin: n, param: r, verbose: o, planContent: s, isTranscriptMode: i, timestamp: a } = t0;
  if (typeof r.text !== "string" || !r.text || r.text.trim() === zw) return null;
  if (s) {
    let c;
    if (t[0] !== n || t[1] !== s)
      ((c = n3.jsx(Kzn, {
        addMargin: n,
        planContent: s,
      })),
        (t[0] = n),
        (t[1] = s),
        (t[2] = c));
    else c = t[2];
    return c;
  }
  if (el() && jzn(r.text)) {
    let c;
    if (t[3] !== n || t[4] !== i || t[5] !== r || t[6] !== o)
      ((c = n3.jsx(bil, {
        addMargin: n,
        param: r,
        verbose: o,
        isTranscriptMode: i,
      })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = r),
        (t[6] = o),
        (t[7] = c));
    else c = t[7];
    return c;
  }
  if (
    r.text.startsWith(kFe) ||
    (r.text.startsWith(Vte) &&
      r.text.startsWith(
        kFe,
        r.text.indexOf(`
`) + 1,
      ))
  ) {
    let c;
    if (t[8] === Symbol.for("react.memo_cache_sentinel")) ((c = (ial(), ro(sal))), (t[8] = c));
    else c = t[8];
    let { UserChannelMessage: u } = c,
      d;
    if (t[9] !== n || t[10] !== r)
      ((d = n3.jsx(u, {
        addMargin: n,
        param: r,
      })),
        (t[9] = n),
        (t[10] = r),
        (t[11] = d));
    else d = t[11];
    return d;
  }
  if (xl(r.text, Cae)) return null;
  if (r.text.includes(`<${CFe}>`)) return null;
  if (r.text.startsWith("<bash-stdout") || r.text.startsWith("<bash-stderr")) {
    let c;
    if (t[16] !== r.text || t[17] !== o)
      ((c = n3.jsx(Cil, {
        content: r.text,
        verbose: o,
      })),
        (t[16] = r.text),
        (t[17] = o),
        (t[18] = c));
    else c = t[18];
    return c;
  }
  if (r.text.startsWith("<local-command-stdout") || r.text.startsWith("<local-command-stderr")) {
    let c;
    if (t[19] !== r.text)
      ((c = n3.jsx(Pil, {
        content: r.text,
      })),
        (t[19] = r.text),
        (t[20] = c));
    else c = t[20];
    return c;
  }
  if (r.text === _N || r.text === Jv) {
    let c;
    if (t[21] === Symbol.for("react.memo_cache_sentinel"))
      ((c = n3.jsx(qn, {
        height: 1,
        children: n3.jsx(Fpe, {}),
      })),
        (t[21] = c));
    else c = t[21];
    return c;
  }
  if (r.text.includes("<bash-input>")) {
    let c;
    if (t[22] !== n || t[23] !== r)
      ((c = n3.jsx(Wzn, {
        addMargin: n,
        param: r,
      })),
        (t[22] = n),
        (t[23] = r),
        (t[24] = c));
    else c = t[24];
    return c;
  }
  if (r.text.includes(`<${zC}>`)) {
    let c;
    if (t[25] !== n || t[26] !== r)
      ((c = n3.jsx(Ril, {
        addMargin: n,
        param: r,
      })),
        (t[25] = n),
        (t[26] = r),
        (t[27] = c));
    else c = t[27];
    return c;
  }
  if (r.text.includes("<user-memory-input>")) {
    let c;
    if (t[28] !== n || t[29] !== r.text)
      ((c = n3.jsx(Oil, {
        addMargin: n,
        text: r.text,
      })),
        (t[28] = n),
        (t[29] = r.text),
        (t[30] = c));
    else c = t[30];
    return c;
  }
  if (r.text.includes(`<${Oc}`)) {
    let c;
    if (t[31] !== n || t[32] !== r)
      ((c = n3.jsx(Eil, {
        addMargin: n,
        param: r,
      })),
        (t[31] = n),
        (t[32] = r),
        (t[33] = c));
    else c = t[33];
    return c;
  }
  if (r.text.includes("<mcp-resource-update") || r.text.includes("<mcp-polling-update")) {
    let c;
    if (t[34] !== n || t[35] !== r)
      ((c = n3.jsx(tal, {
        addMargin: n,
        param: r,
      })),
        (t[34] = n),
        (t[35] = r),
        (t[36] = c));
    else c = t[36];
    return c;
  }
  if (r.text.includes("<fork-boilerplate>")) {
    let c;
    if (t[37] === Symbol.for("react.memo_cache_sentinel")) ((c = (cal(), ro(lal))), (t[37] = c));
    else c = t[37];
    let { UserForkBoilerplateMessage: u } = c,
      d;
    if (t[38] !== n || t[39] !== r)
      ((d = n3.jsx(u, {
        addMargin: n,
        param: r,
      })),
        (t[38] = n),
        (t[39] = r),
        (t[40] = d));
    else d = t[40];
    return d;
  }
  let l;
  if (t[45] !== n || t[46] !== i || t[47] !== r || t[48] !== a)
    ((l = n3.jsx(Qil, {
      addMargin: n,
      param: r,
      isTranscriptMode: i,
      timestamp: a,
    })),
      (t[45] = n),
      (t[46] = i),
      (t[47] = r),
      (t[48] = a),
      (t[49] = l));
  else l = t[49];
  return l;
}
var dal, n3;
