// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ell
// matched 2.1.88 source: src/components/Message.tsx
// class=modified  jaccard=0.325  score=0.5464  fileCov=0.4451
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ell] deps: Ye, co, rll, fIo, ill, gll, _ll
((bll = R(lt(), 1)), (u_t = R(se(), 1)));
function lif(e) {
  let t = uKn.c(108),
    {
      message: n,
      lookups: r,
      containerWidth: o,
      addMargin: s,
      tools: i,
      commands: a,
      verbose: l,
      inProgressToolUseIDs: c,
      progressMessagesForMessage: u,
      shouldAnimate: d,
      shouldShowDot: p,
      style: f,
      width: m,
      isTranscriptMode: g,
      onOpenRateLimitOptions: h,
      isActiveCollapsedGroup: y,
      isUserContinuation: b,
      latestBashOutputUUID: _,
      disableDisplayOverride: S,
    } = e,
    A = b === void 0 ? false : b;
  switch (n.type) {
    case "attachment": {
      let v = o ?? "100%",
        C;
      if (t[0] !== s || t[1] !== g || t[2] !== n.attachment || t[3] !== l)
        ((C = RH.jsx(pal, {
          addMargin: s,
          attachment: n.attachment,
          verbose: l,
          isTranscriptMode: g,
        })),
          (t[0] = s),
          (t[1] = g),
          (t[2] = n.attachment),
          (t[3] = l),
          (t[4] = C));
      else C = t[4];
      let x;
      if (t[5] !== v || t[6] !== C)
        ((x = RH.jsx(U, {
          flexDirection: "column",
          width: v,
          children: C,
        })),
          (t[5] = v),
          (t[6] = C),
          (t[7] = x));
      else x = t[7];
      return x;
    }
    case "assistant": {
      let v;
      if (t[8] !== r.firstTextBlockUuidByMessageID || t[9] !== n.message.id)
        ((v = r.firstTextBlockUuidByMessageID.get(n.message.id)),
          (t[8] = r.firstTextBlockUuidByMessageID),
          (t[9] = n.message.id),
          (t[10] = v));
      else v = t[10];
      let C = v,
        x = o ?? "100%",
        I;
      if (
        t[11] !== s ||
        t[12] !== a ||
        t[13] !== S ||
        t[14] !== C ||
        t[15] !== c ||
        t[16] !== g ||
        t[17] !== r ||
        t[18] !== n.advisorModel ||
        t[19] !== n.message.content ||
        t[20] !== n.message.id ||
        t[21] !== n.uuid ||
        t[22] !== h ||
        t[23] !== u ||
        t[24] !== d ||
        t[25] !== p ||
        t[26] !== i ||
        t[27] !== l ||
        t[28] !== m
      ) {
        let D;
        if (
          t[30] !== s ||
          t[31] !== a ||
          t[32] !== S ||
          t[33] !== C ||
          t[34] !== c ||
          t[35] !== g ||
          t[36] !== r ||
          t[37] !== n.advisorModel ||
          t[38] !== n.message.id ||
          t[39] !== n.uuid ||
          t[40] !== h ||
          t[41] !== u ||
          t[42] !== d ||
          t[43] !== p ||
          t[44] !== i ||
          t[45] !== l ||
          t[46] !== m
        )
          ((D = (P, O) =>
            RH.jsx(
              uif,
              {
                param: P,
                addMargin: s,
                tools: i,
                commands: a,
                verbose: l,
                inProgressToolUseIDs: c,
                progressMessagesForMessage: u,
                shouldAnimate: d,
                shouldShowDot: p,
                width: m,
                inProgressToolCallCount: c.size,
                isTranscriptMode: g,
                lookups: r,
                onOpenRateLimitOptions: h,
                advisorModel: n.advisorModel,
                messageUuid: n.uuid,
                apiMessageId: S ? void 0 : n.message.id,
                isFirstTextBlock: C === void 0 || C === n.uuid,
              },
              O,
            )),
            (t[30] = s),
            (t[31] = a),
            (t[32] = S),
            (t[33] = C),
            (t[34] = c),
            (t[35] = g),
            (t[36] = r),
            (t[37] = n.advisorModel),
            (t[38] = n.message.id),
            (t[39] = n.uuid),
            (t[40] = h),
            (t[41] = u),
            (t[42] = d),
            (t[43] = p),
            (t[44] = i),
            (t[45] = l),
            (t[46] = m),
            (t[47] = D));
        else D = t[47];
        ((I = n.message.content.map(D)),
          (t[11] = s),
          (t[12] = a),
          (t[13] = S),
          (t[14] = C),
          (t[15] = c),
          (t[16] = g),
          (t[17] = r),
          (t[18] = n.advisorModel),
          (t[19] = n.message.content),
          (t[20] = n.message.id),
          (t[21] = n.uuid),
          (t[22] = h),
          (t[23] = u),
          (t[24] = d),
          (t[25] = p),
          (t[26] = i),
          (t[27] = l),
          (t[28] = m),
          (t[29] = I));
      } else I = t[29];
      let k;
      if (t[48] !== x || t[49] !== I)
        ((k = RH.jsx(U, {
          flexDirection: "column",
          width: x,
          children: I,
        })),
          (t[48] = x),
          (t[49] = I),
          (t[50] = k));
      else k = t[50];
      return k;
    }
    case "user": {
      if (n.isCompactSummary) {
        let O = g ? "transcript" : "prompt",
          L;
        if (t[51] !== n || t[52] !== O)
          ((L = RH.jsx(Wol, {
            message: n,
            screen: O,
          })),
            (t[51] = n),
            (t[52] = O),
            (t[53] = L));
        else L = t[53];
        return L;
      }
      let v;
      if (t[54] !== n.imagePasteIds || t[55] !== n.message.content) {
        v = [];
        let O = 0;
        for (let L of n.message.content)
          if (L.type === "image") {
            let M = n.imagePasteIds?.[O];
            (O++, v.push(M ?? O));
          } else v.push(O);
        ((t[54] = n.imagePasteIds), (t[55] = n.message.content), (t[56] = v));
      } else v = t[56];
      let C = _ === n.uuid,
        x = o ?? "100%",
        I;
      if (
        t[57] !== s ||
        t[58] !== v ||
        t[59] !== g ||
        t[60] !== A ||
        t[61] !== r ||
        t[62] !== n ||
        t[63] !== u ||
        t[64] !== f ||
        t[65] !== i ||
        t[66] !== l
      )
        ((I = n.message.content.map((O, L) =>
          RH.jsx(
            cif,
            {
              message: n,
              addMargin: s,
              tools: i,
              progressMessagesForMessage: u,
              param: O,
              style: f,
              verbose: l,
              imageIndex: v[L],
              isUserContinuation: A,
              lookups: r,
              isTranscriptMode: g,
            },
            L,
          ),
        )),
          (t[57] = s),
          (t[58] = v),
          (t[59] = g),
          (t[60] = A),
          (t[61] = r),
          (t[62] = n),
          (t[63] = u),
          (t[64] = f),
          (t[65] = i),
          (t[66] = l),
          (t[67] = I));
      else I = t[67];
      let k;
      if (t[68] !== x || t[69] !== I)
        ((k = RH.jsx(U, {
          flexDirection: "column",
          width: x,
          children: I,
        })),
          (t[68] = x),
          (t[69] = I),
          (t[70] = k));
      else k = t[70];
      let D = k,
        P;
      if (t[71] !== D || t[72] !== C)
        ((P = C
          ? RH.jsx(tda, {
              children: D,
            })
          : D),
          (t[71] = D),
          (t[72] = C),
          (t[73] = P));
      else P = t[73];
      return P;
    }
    case "system": {
      if (n.subtype === "compact_boundary") {
        if (Ns()) return null;
        let C;
        if (t[74] === Symbol.for("react.memo_cache_sentinel")) ((C = RH.jsx(Nal, {})), (t[74] = C));
        else C = t[74];
        return C;
      }
      if (n.subtype === "microcompact_boundary") return null;
      if (n.subtype === "read_divider") {
        let C;
        if (t[78] !== n.content)
          ((C = RH.jsx(U, {
            marginTop: 1,
            width: "100%",
            children: RH.jsx(qh, {
              title: n.content,
              color: "inactive",
            }),
          })),
            (t[78] = n.content),
            (t[79] = C));
        else C = t[79];
        return C;
      }
      if (n.subtype === "local_command") {
        let C;
        if (t[80] !== n.content)
          ((C = {
            type: "text",
            text: n.content,
          }),
            (t[80] = n.content),
            (t[81] = C));
        else C = t[81];
        let x;
        if (t[82] !== s || t[83] !== g || t[84] !== C || t[85] !== l)
          ((x = RH.jsx(c6e, {
            addMargin: s,
            param: C,
            verbose: l,
            isTranscriptMode: g,
          })),
            (t[82] = s),
            (t[83] = g),
            (t[84] = C),
            (t[85] = l),
            (t[86] = x));
        else x = t[86];
        return x;
      }
      let v;
      if (t[87] !== s || t[88] !== g || t[89] !== n || t[90] !== l)
        ((v = RH.jsx(Xal, {
          message: n,
          addMargin: s,
          verbose: l,
          isTranscriptMode: g,
        })),
          (t[87] = s),
          (t[88] = g),
          (t[89] = n),
          (t[90] = l),
          (t[91] = v));
      else v = t[91];
      return v;
    }
    case "grouped_tool_use": {
      let v;
      if (t[92] !== s || t[93] !== c || t[94] !== r || t[95] !== n || t[96] !== d || t[97] !== i)
        ((v = RH.jsx(Ual, {
          message: n,
          tools: i,
          lookups: r,
          inProgressToolUseIDs: c,
          shouldAnimate: d,
          addMargin: s,
        })),
          (t[92] = s),
          (t[93] = c),
          (t[94] = r),
          (t[95] = n),
          (t[96] = d),
          (t[97] = i),
          (t[98] = v));
      else v = t[98];
      return v;
    }
    case "collapsed_read_search": {
      let v = l || g,
        C;
      if (
        t[99] !== s ||
        t[100] !== c ||
        t[101] !== y ||
        t[102] !== r ||
        t[103] !== n ||
        t[104] !== d ||
        t[105] !== v ||
        t[106] !== i
      )
        ((C = RH.jsx(cP, {
          children: RH.jsx(Mal, {
            message: n,
            inProgressToolUseIDs: c,
            shouldAnimate: d,
            verbose: v,
            tools: i,
            lookups: r,
            isActiveGroup: y,
            addMargin: s,
          }),
        })),
          (t[99] = s),
          (t[100] = c),
          (t[101] = y),
          (t[102] = r),
          (t[103] = n),
          (t[104] = d),
          (t[105] = v),
          (t[106] = i),
          (t[107] = C));
      else C = t[107];
      return C;
    }
  }
}
function cif(e) {
  let t = uKn.c(25),
    {
      message: n,
      addMargin: r,
      tools: o,
      progressMessagesForMessage: s,
      param: i,
      style: a,
      verbose: l,
      imageIndex: c,
      isUserContinuation: u,
      lookups: d,
      isTranscriptMode: p,
    } = e,
    { columns: f } = br();
  switch (i.type) {
    case "text": {
      if (n.origin?.kind === "peer" && n.origin.senderTaskId !== void 0) {
        let g;
        if (t[0] !== r || t[1] !== p || t[2] !== n.origin.from || t[3] !== i)
          ((g = RH.jsx(Zal, {
            addMargin: r,
            param: i,
            fromName: n.origin.from,
            isTranscriptMode: p,
          })),
            (t[0] = r),
            (t[1] = p),
            (t[2] = n.origin.from),
            (t[3] = i),
            (t[4] = g));
        else g = t[4];
        return g;
      }
      let m;
      if (
        t[5] !== r ||
        t[6] !== p ||
        t[7] !== n.planContent ||
        t[8] !== n.timestamp ||
        t[9] !== i ||
        t[10] !== l
      )
        ((m = RH.jsx(c6e, {
          addMargin: r,
          param: i,
          verbose: l,
          planContent: n.planContent,
          isTranscriptMode: p,
          timestamp: n.timestamp,
        })),
          (t[5] = r),
          (t[6] = p),
          (t[7] = n.planContent),
          (t[8] = n.timestamp),
          (t[9] = i),
          (t[10] = l),
          (t[11] = m));
      else m = t[11];
      return m;
    }
    case "image": {
      let m = r && !u,
        g;
      if (t[12] !== c || t[13] !== m)
        ((g = RH.jsx(Fzn, {
          imageId: c,
          addMargin: m,
        })),
          (t[12] = c),
          (t[13] = m),
          (t[14] = g));
      else g = t[14];
      return g;
    }
    case "tool_result": {
      let m = f - 5,
        g;
      if (
        t[15] !== p ||
        t[16] !== d ||
        t[17] !== n ||
        t[18] !== i ||
        t[19] !== s ||
        t[20] !== a ||
        t[21] !== m ||
        t[22] !== o ||
        t[23] !== l
      )
        ((g = RH.jsx(Sll, {
          param: i,
          message: n,
          lookups: d,
          progressMessagesForMessage: s,
          style: a,
          tools: o,
          verbose: l,
          width: m,
          isTranscriptMode: p,
        })),
          (t[15] = p),
          (t[16] = d),
          (t[17] = n),
          (t[18] = i),
          (t[19] = s),
          (t[20] = a),
          (t[21] = m),
          (t[22] = o),
          (t[23] = l),
          (t[24] = g));
      else g = t[24];
      return g;
    }
    default:
      return;
  }
}
function uif(e) {
  let t = uKn.c(62),
    {
      param: n,
      addMargin: r,
      tools: o,
      commands: s,
      verbose: i,
      inProgressToolUseIDs: a,
      progressMessagesForMessage: l,
      shouldAnimate: c,
      shouldShowDot: u,
      width: d,
      inProgressToolCallCount: p,
      isTranscriptMode: f,
      lookups: m,
      onOpenRateLimitOptions: g,
      advisorModel: h,
      messageUuid: y,
      apiMessageId: b,
      isFirstTextBlock: _,
    } = e,
    S;
  if (t[0] !== b || t[1] !== n.type)
    ((S = (v) => (n.type === "text" && b !== void 0 ? v.displayedMessageContent[b] : void 0)),
      (t[0] = b),
      (t[1] = n.type),
      (t[2] = S));
  else S = t[2];
  let A = dT(S);
  if (Pj(n)) return null;
  switch (n.type) {
    case "tool_use": {
      let v;
      if (
        t[15] !== r ||
        t[16] !== s ||
        t[17] !== p ||
        t[18] !== a ||
        t[19] !== f ||
        t[20] !== m ||
        t[21] !== y ||
        t[22] !== n ||
        t[23] !== l ||
        t[24] !== c ||
        t[25] !== u ||
        t[26] !== o ||
        t[27] !== i
      )
        ((v = RH.jsx(oil, {
          param: n,
          addMargin: r,
          tools: o,
          commands: s,
          verbose: i,
          inProgressToolUseIDs: a,
          progressMessagesForMessage: l,
          shouldAnimate: c,
          shouldShowDot: u,
          inProgressToolCallCount: p,
          lookups: m,
          isTranscriptMode: f,
          messageUuid: y,
        })),
          (t[15] = r),
          (t[16] = s),
          (t[17] = p),
          (t[18] = a),
          (t[19] = f),
          (t[20] = m),
          (t[21] = y),
          (t[22] = n),
          (t[23] = l),
          (t[24] = c),
          (t[25] = u),
          (t[26] = o),
          (t[27] = i),
          (t[28] = v));
      else v = t[28];
      return v;
    }
    case "text": {
      if (A !== void 0 && !i) {
        if (!_) return null;
        let C;
        if (t[29] !== A)
          ((C = {
            type: "text",
            text: A,
          }),
            (t[29] = A),
            (t[30] = C));
        else C = t[30];
        let x;
        if (
          t[31] !== r ||
          t[32] !== y ||
          t[33] !== g ||
          t[34] !== u ||
          t[35] !== C ||
          t[36] !== i ||
          t[37] !== d
        )
          ((x = RH.jsx(RCo, {
            param: C,
            addMargin: r,
            shouldShowDot: u,
            verbose: i,
            width: d,
            onOpenRateLimitOptions: g,
            messageUuid: y,
          })),
            (t[31] = r),
            (t[32] = y),
            (t[33] = g),
            (t[34] = u),
            (t[35] = C),
            (t[36] = i),
            (t[37] = d),
            (t[38] = x));
        else x = t[38];
        return x;
      }
      let v;
      if (
        t[39] !== r ||
        t[40] !== y ||
        t[41] !== g ||
        t[42] !== n ||
        t[43] !== u ||
        t[44] !== i ||
        t[45] !== d
      )
        ((v = RH.jsx(RCo, {
          param: n,
          addMargin: r,
          shouldShowDot: u,
          verbose: i,
          width: d,
          onOpenRateLimitOptions: g,
          messageUuid: y,
        })),
          (t[39] = r),
          (t[40] = y),
          (t[41] = g),
          (t[42] = n),
          (t[43] = u),
          (t[44] = i),
          (t[45] = d),
          (t[46] = v));
      else v = t[46];
      return v;
    }
    case "redacted_thinking": {
      if (!f && !i) return null;
      let v;
      if (t[47] !== r)
        ((v = RH.jsx(tsl, {
          addMargin: r,
        })),
          (t[47] = r),
          (t[48] = v));
      else v = t[48];
      return v;
    }
    case "thinking": {
      if (!f && !i) return null;
      let v;
      if (t[49] !== r || t[50] !== f || t[51] !== n || t[52] !== i)
        ((v = RH.jsx(Rzn, {
          addMargin: r,
          param: n,
          isTranscriptMode: f,
          verbose: i,
        })),
          (t[49] = r),
          (t[50] = f),
          (t[51] = n),
          (t[52] = i),
          (t[53] = v));
      else v = t[53];
      return v;
    }
    case "server_tool_use":
    case "advisor_tool_result": {
      if (b8e(n)) {
        let v = i || f,
          C;
        if (
          t[54] !== r ||
          t[55] !== h ||
          t[56] !== m.erroredToolUseIDs ||
          t[57] !== m.resolvedToolUseIDs ||
          t[58] !== n ||
          t[59] !== c ||
          t[60] !== v
        )
          ((C = RH.jsx(Qol, {
            block: n,
            addMargin: r,
            resolvedToolUseIDs: m.resolvedToolUseIDs,
            erroredToolUseIDs: m.erroredToolUseIDs,
            shouldAnimate: c,
            verbose: v,
            advisorModel: h,
          })),
            (t[54] = r),
            (t[55] = h),
            (t[56] = m.erroredToolUseIDs),
            (t[57] = m.resolvedToolUseIDs),
            (t[58] = n),
            (t[59] = c),
            (t[60] = v),
            (t[61] = C));
        else C = t[61];
        return C;
      }
      return (ke(Error(`Unable to render server tool block: ${n.type}`)), null);
    }
    default:
      return (ke(Error(`Unable to render message type: ${n.type}`)), null);
  }
}
function dif(e, t) {
  if (e.message.uuid !== t.message.uuid) return false;
  if (e.verbose !== t.verbose) return false;
  let n = e.latestBashOutputUUID === e.message.uuid,
    r = t.latestBashOutputUUID === t.message.uuid;
  if (n !== r) return false;
  if (e.isTranscriptMode !== t.isTranscriptMode) return false;
  if (e.containerWidth !== t.containerWidth) return false;
  if (e.isStatic && t.isStatic) {
    let o =
        e.message.type === "system" && e.message.subtype === "turn_duration"
          ? e.message.briefHiddenCount
          : void 0,
      s =
        t.message.type === "system" && t.message.subtype === "turn_duration"
          ? t.message.briefHiddenCount
          : void 0;
    return o === s;
  }
  return false;
}
var uKn, All, RH, dQ;
