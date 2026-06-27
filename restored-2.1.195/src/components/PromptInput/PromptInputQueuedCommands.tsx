// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z_c
// matched 2.1.88 source: src/components/PromptInput/PromptInputQueuedCommands.tsx
// class=modified  jaccard=0.3843  score=1  fileCov=0.3843
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Z_c = E(() => {
  si();
  Ye();
  IL();
  Mp();
  sA();
  ((Y6o = R(lt(), 1)), (E7e = R(se(), 1)));
});
function Cmm(e) {
  try {
    return Ft(e)?.type === "idle_notification";
  } catch {
    return !1;
  }
}
function Imm(e) {
  return `<${Oc}>
<${Zu}>+${e} more tasks completed</${Zu}>
<${up}>completed</${up}>
</${Oc}>`;
}
function xmm(e) {
  let t = e.filter((a) => typeof a.value !== "string" || !Cmm(a.value)),
    n = t.filter((a) => a.mode === "task-notification"),
    r = t.filter((a) => a.mode !== "task-notification");
  if (n.length <= J6o) return [...r, ...n];
  let o = n.slice(0, J6o - 1),
    s = n.length - (J6o - 1),
    i = {
      value: Imm(s),
      mode: "task-notification",
      agentId: ls(),
    };
  return [...r, ...o, i];
}
function kmm() {
  let e = ebc.c(20),
    t = Mme(),
    n = Ht(Mmm),
    r = Ht(Pmm),
    o = Ht(Dmm),
    s;
  if (e[0] !== t) {
    e: {
      if (t.length === 0) {
        s = null;
        break e;
      }
      let p = t.filter(Lmm);
      if (p.length === 0) {
        s = null;
        break e;
      }
      let f = xmm(p),
        m = mS(f.map(Rmm)),
        g;
      if (e[2] !== m || e[3] !== f)
        ((g = {
          messages: m,
          processedCommands: f,
        }),
          (e[2] = m),
          (e[3] = f),
          (e[4] = g));
      else g = e[4];
      s = g;
    }
    ((e[0] = t), (e[1] = s));
  } else s = e[1];
  let i = s,
    a;
  e: {
    if (r === null || i === null) {
      a = -1;
      break e;
    }
    let p;
    if (e[5] !== r || e[6] !== t || e[7] !== i) {
      let m = t.filter(XW)[r];
      ((p = m ? i.processedCommands.indexOf(m) : -1),
        (e[5] = r),
        (e[6] = t),
        (e[7] = i),
        (e[8] = p));
    } else p = e[8];
    a = p;
  }
  let l = a;
  if (n || i === null) return null;
  let c = l !== -1,
    u;
  if (e[9] !== l || e[10] !== i.messages || e[11] !== c || e[12] !== o) {
    let p;
    if (e[14] !== l || e[15] !== c || e[16] !== o)
      ((p = (f, m) =>
        Rdr.jsx(
          qil,
          {
            isFirst: m === 0,
            useBriefLayout: o,
            selectionHighlight: c ? (m === l ? "on" : "off") : void 0,
            children: Rdr.jsx(dQ, {
              message: f,
              lookups: LAe,
              addMargin: !1,
              tools: [],
              commands: [],
              verbose: !1,
              inProgressToolUseIDs: wmm,
              progressMessagesForMessage: [],
              shouldAnimate: !1,
              shouldShowDot: !1,
              isTranscriptMode: !1,
              isStatic: !0,
            }),
          },
          m,
        )),
        (e[14] = l),
        (e[15] = c),
        (e[16] = o),
        (e[17] = p));
    else p = e[17];
    ((u = i.messages.map(p)),
      (e[9] = l),
      (e[10] = i.messages),
      (e[11] = c),
      (e[12] = o),
      (e[13] = u));
  } else u = e[13];
  let d;
  if (e[18] !== u)
    ((d = Rdr.jsx(U, {
      marginTop: 1,
      flexDirection: "column",
      children: u,
    })),
      (e[18] = u),
      (e[19] = d));
  else d = e[19];
  return d;
}
function Rmm(e) {
  let t = e.value;
  if (e.mode === "bash" && typeof t === "string") t = `<bash-input>${t}</bash-input>`;
  return Rn({
    content: t,
  });
}
function Lmm(e) {
  return rua(e);
}
function Dmm(e) {
  return e.isBriefOnly;
}
function Pmm(e) {
  return e.queueEditIndex;
}
function Mmm(e) {
  return !!e.viewingAgentTaskId;
}
var ebc,
  tbc,
  Rdr,
  wmm,
  J6o = 3,
  Ldr;
