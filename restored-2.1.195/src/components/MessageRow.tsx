// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S5l
// matched 2.1.88 source: src/components/MessageRow.tsx
// class=modified  jaccard=0.3807  score=0.6476  fileCov=0.4801
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S5l] deps: Tc, Ye
((_5l = R(lt(), 1)), (KFo = R(se(), 1)));
function H5l(e, t, n, r) {
  for (let o = t + 1; o < e.length; o++) {
    let s = e[o];
    if (s?.type === "assistant") {
      let i = s.message.content[0];
      if (i?.type === "thinking" || i?.type === "redacted_thinking") continue;
      if (i?.type === "tool_use") {
        if (Aze(i.name, i.input, n).isCollapsible) continue;
        if (r.has(i.id)) continue;
      }
      return true;
    }
    if (s?.type === "system" || s?.type === "attachment") continue;
    if (s?.type === "user") {
      if (s.message.content[0]?.type === "tool_result") continue;
    }
    if (s?.type === "grouped_tool_use") {
      let i = s.messages[0]?.message.content[0]?.input;
      if (Aze(s.toolName, i, n).isCollapsible) continue;
    }
    return true;
  }
  return false;
}
function o4f(e) {
  let t = E5l.c(73),
    {
      message: n,
      isUserContinuation: r,
      hasContentAfter: o,
      tools: s,
      commands: i,
      verbose: a,
      showMessageTimestamps: l,
      inProgressToolUseIDs: c,
      streamingToolUseIDs: u,
      screen: d,
      canAnimate: p,
      onOpenRateLimitOptions: f,
      latestBashOutputUUID: m,
      columns: g,
      isLoading: h,
      lookups: y,
    } = e,
    b = d === "transcript",
    _ = n.type === "grouped_tool_use",
    S = n.type === "collapsed_read_search",
    A;
  if (t[0] !== o || t[1] !== c || t[2] !== S || t[3] !== h || t[4] !== n)
    ((A = S && (TDo(n, c) || (h && !o))),
      (t[0] = o),
      (t[1] = c),
      (t[2] = S),
      (t[3] = h),
      (t[4] = n),
      (t[5] = A));
  else A = t[5];
  let v = A,
    C;
  if (t[6] !== S || t[7] !== _ || t[8] !== n)
    ((C = _ ? n.displayMessage : S ? kvl(n) : n), (t[6] = S), (t[7] = _), (t[8] = n), (t[9] = C));
  else C = t[9];
  let x = C,
    I;
  if (t[10] !== S || t[11] !== _ || t[12] !== y || t[13] !== n)
    ((I = _ || S ? [] : I5l(n, y)),
      (t[10] = S),
      (t[11] = _),
      (t[12] = y),
      (t[13] = n),
      (t[14] = I));
  else I = t[14];
  let k = I,
    D;
  if (
    t[15] !== c ||
    t[16] !== S ||
    t[17] !== _ ||
    t[18] !== y ||
    t[19] !== n ||
    t[20] !== d ||
    t[21] !== u
  ) {
    let K = _ || S ? _or : C5l(n, y);
    ((D = w5l(n, u, c, K, d, y)),
      (t[15] = c),
      (t[16] = S),
      (t[17] = _),
      (t[18] = y),
      (t[19] = n),
      (t[20] = d),
      (t[21] = u),
      (t[22] = D));
  } else D = t[22];
  let P = D,
    O = false;
  if (p)
    if (_) {
      let K;
      if (t[23] !== c || t[24] !== n.messages) {
        let Z;
        if (t[26] !== c)
          ((Z = (J) => {
            let ne = J.message.content[0];
            return ne?.type === "tool_use" && c.has(ne.id);
          }),
            (t[26] = c),
            (t[27] = Z));
        else Z = t[27];
        ((K = n.messages.some(Z)), (t[23] = c), (t[24] = n.messages), (t[25] = K));
      } else K = t[25];
      O = K;
    } else if (S) {
      let K;
      if (t[28] !== c || t[29] !== n) ((K = TDo(n, c)), (t[28] = c), (t[29] = n), (t[30] = K));
      else K = t[30];
      O = K;
    } else {
      let K;
      if (t[31] !== c || t[32] !== n) {
        let Z = jHe(n);
        ((K = !Z || c.has(Z)), (t[31] = c), (t[32] = n), (t[33] = K));
      } else K = t[33];
      O = K;
    }
  let L;
  if (
    t[34] !== x.message ||
    t[35] !== x.timestamp ||
    t[36] !== x.type ||
    t[37] !== b ||
    t[38] !== l
  )
    ((L =
      x.type === "assistant" &&
      (l || (b && x.message.content.some(s4f))) &&
      (x.timestamp || x.message.model)),
      (t[34] = x.message),
      (t[35] = x.timestamp),
      (t[36] = x.type),
      (t[37] = b),
      (t[38] = l),
      (t[39] = L));
  else L = t[39];
  let M = L,
    N = !M,
    B = M ? void 0 : g,
    $;
  if (
    t[40] !== i ||
    t[41] !== c ||
    t[42] !== v ||
    t[43] !== P ||
    t[44] !== b ||
    t[45] !== r ||
    t[46] !== m ||
    t[47] !== y ||
    t[48] !== n ||
    t[49] !== f ||
    t[50] !== k ||
    t[51] !== O ||
    t[52] !== N ||
    t[53] !== B ||
    t[54] !== s ||
    t[55] !== a
  )
    (($ = FHe.jsx(dQ, {
      message: n,
      lookups: y,
      addMargin: N,
      containerWidth: B,
      tools: s,
      commands: i,
      verbose: a,
      inProgressToolUseIDs: c,
      progressMessagesForMessage: k,
      shouldAnimate: O,
      shouldShowDot: true,
      isTranscriptMode: b,
      isStatic: P,
      onOpenRateLimitOptions: f,
      isActiveCollapsedGroup: v,
      isUserContinuation: r,
      latestBashOutputUUID: m,
    })),
      (t[40] = i),
      (t[41] = c),
      (t[42] = v),
      (t[43] = P),
      (t[44] = b),
      (t[45] = r),
      (t[46] = m),
      (t[47] = y),
      (t[48] = n),
      (t[49] = f),
      (t[50] = k),
      (t[51] = O),
      (t[52] = N),
      (t[53] = B),
      (t[54] = s),
      (t[55] = a),
      (t[56] = $));
  else $ = t[56];
  let q = $;
  if (!M) {
    let K;
    if (t[57] !== q)
      ((K = FHe.jsx(cP, {
        children: q,
      })),
        (t[57] = q),
        (t[58] = K));
    else K = t[58];
    return K;
  }
  let W;
  if (t[59] !== x || t[60] !== b || t[61] !== l)
    ((W = FHe.jsx(b5l, {
      message: x,
      isTranscriptMode: b,
      showMessageTimestamps: l,
    })),
      (t[59] = x),
      (t[60] = b),
      (t[61] = l),
      (t[62] = W));
  else W = t[62];
  let V;
  if (t[63] !== x || t[64] !== b)
    ((V = FHe.jsx(h5l, {
      message: x,
      isTranscriptMode: b,
    })),
      (t[63] = x),
      (t[64] = b),
      (t[65] = V));
  else V = t[65];
  let Y;
  if (t[66] !== V || t[67] !== W)
    ((Y = FHe.jsxs(U, {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 1,
      marginTop: 1,
      children: [W, V],
    })),
      (t[66] = V),
      (t[67] = W),
      (t[68] = Y));
  else Y = t[68];
  let z;
  if (t[69] !== g || t[70] !== q || t[71] !== Y)
    ((z = FHe.jsx(cP, {
      children: FHe.jsxs(U, {
        width: g,
        flexDirection: "column",
        children: [Y, q],
      }),
    })),
      (t[69] = g),
      (t[70] = q),
      (t[71] = Y),
      (t[72] = z));
  else z = t[72];
  return z;
}
function s4f(e) {
  return e.type === "text";
}
function i4f(e, t) {
  if (e.type === "grouped_tool_use")
    return e.messages.some((r) => {
      let o = r.message.content[0];
      return o?.type === "tool_use" && t.has(o.id);
    });
  if (e.type === "collapsed_read_search") return i_t(e).some((o) => t.has(o));
  let n = jHe(e);
  return !!n && t.has(n);
}
function a4f(e, t) {
  if (e.type === "grouped_tool_use")
    return e.messages.every((r) => {
      let o = r.message.content[0];
      return o?.type === "tool_use" && t.has(o.id);
    });
  if (e.type === "collapsed_read_search") return i_t(e).every((o) => t.has(o));
  if (e.type === "assistant") {
    let r = e.message.content[0];
    if (r?.type === "server_tool_use") return t.has(r.id);
  }
  let n = jHe(e);
  return !n || t.has(n);
}
function l4f(e, t) {
  if (e.message !== t.message) return false;
  if (e.screen !== t.screen) return false;
  if (e.verbose !== t.verbose) return false;
  if (e.showMessageTimestamps !== t.showMessageTimestamps) return false;
  if (e.message.type === "collapsed_read_search" && t.screen !== "transcript") return false;
  if (e.columns !== t.columns) return false;
  let n = e.latestBashOutputUUID === e.message.uuid,
    r = t.latestBashOutputUUID === t.message.uuid;
  if (n !== r) return false;
  let o = i4f(e.message, e.streamingToolUseIDs),
    s = a4f(e.message, e.lookups.resolvedToolUseIDs);
  if (o || !s) return false;
  return true;
}
var E5l, A5l, FHe, T5l;
