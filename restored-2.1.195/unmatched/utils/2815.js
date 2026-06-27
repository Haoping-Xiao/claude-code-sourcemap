// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c5e
// matched 2.1.88 source: src/utils/model/agent.ts
// class=new  jaccard=0.0464  score=0.073  fileCov=0.113
// note: nearest: src/utils/model/agent.ts (0.0464); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c5e = E(() => {
  ft();
  wr();
  Un();
  oo();
  e1();
  ste();
  jG();
  NE();
  dr();
  Cp();
  m1();
  Vw();
  y1n();
  QO();
  je();
  NX();
  Ls();
  DD();
  vM();
  Ao();
  BE();
  gAn();
  mio();
  taa = {
    value: "sonnet",
    label: "Sonnet",
    description: `Sonnet 4.6 \xB7 ${T1n}`
  }, Kia = {
    value: "haiku",
    label: "Haiku",
    description: `Haiku 4.5 \xB7 ${Sio}`
  };
  Nap = new Set(["claude-vscode"]);
});
function BX() {
  return !Oe.CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK;
}
function oaa() {
  return BX() && wc("switchModelsOnFlag", true).value && NY();
}
function fSe(e) {
  if (i_e(e)) return "eap";
  return "other";
}
function jap() {
  let e = Oe.ANTHROPIC_DEFAULT_OPUS_MODEL;
  if (e) {
    let t = mo(e);
    return t.replace(/\[1m\]$/, "").startsWith("claude-") && !dte(t) ? void 0 : e;
  }
  return aLe().map(t => t.value).filter(t => typeof t === "string" && t.length > 0).map(t => t.replace(/\[1m\]$/, "")).find(t => mo(t).replace(/\[1m\]$/, "") === "claude-opus-4-8");
}
function saa(e) {
  return Gap(aaa(e));
}
function iaa(e) {
  return aaa(e) !== void 0;
}
function aaa(e) {
  let t = mo(e);
  if (Cvi(t)) return;
  if (!ICn(t) && !Mte(t) && !i_e(e) && !C9(e)) return;
  if (!td()) return jap();
  let n = O_();
  if (!dte(mo(n))) return;
  if (/\[1m\]/i.test(e)) return n;
  let r = JIe(n);
  if (r !== n && XIe(e, r)) return;
  return r;
}
function Gap(e) {
  if (e === void 0) return;
  let t = n => !cte(n, v9()) && (nU(n) ?? (xa(n) || KS(n)));
  if (t(e)) return e;
  return O2r().find(n => dte(mo(n)) && t(n));
}
function laa(e) {
  let t = e?.match(/https:\/\/claude\.com\/form\/\S+/)?.[0].replace(/[.,;:!?)]+$/, "");
  return t != null && t.length <= qap ? t : Wap;
}
function w1n() {
  return BX();
}
function Qct(e) {
  return e === "cyber" || e === "bio";
}
function uaa(e) {
  return e === "frontier_llm" || e === "reasoning_extraction";
}
function Zct(e) {
  return Qct(e) || uaa(e) ? e : "other";
}
function Tio(e) {
  return `${wp(e)}'s safeguards flagged this message. The safeguards are intentionally broad right now and may flag safe and routine coding, cybersecurity, or biology work. These measures let us bring you Mythos-level capabilities sooner, and we're working to refine them.`;
}
function vio(e, t) {
  return uaa(t) ? `${wp(e)}'s safeguards flagged this message. This sometimes happens with safe, normal conversations.` : zap;
}
function C1n(e, t, n) {
  let r = wp(t);
  return `${Qct(n) ? Tio(e) : vio(e, n)} Switched to ${r}. ${Jct}`;
}
function paa(e, t, n) {
  let r = wp(t);
  return `${Qct(n) ? Tio(e) : vio(e, n)} Switched to ${r}. ${Jct}`;
}
function Kap(e) {
  let t = e;
  if (t.length > 0 && !/[.!?\u2026\u3002\uFF01\uFF1F'")\]]$/.test(t)) {
    let n = Math.max(0, t.length - 48),
      r = Math.max(t.lastIndexOf(" "), t.lastIndexOf(`
`), t.lastIndexOf("\t"));
    if (r > 0 && r >= n) t = t.slice(0, r).trimEnd();
  }
  return t.trimEnd();
}
function faa(e) {
  let t = e.flatMap(s => !s.isApiErrorMessage && Array.isArray(s.message.content) ? s.message.content : []),
    n = Kap(t.flatMap(s => s.type === "text" ? [s.text] : []).join(`

`).trim()),
    r = t.flatMap(s => s.type === "tool_use" ? [s.input] : []),
    o = r.some(s => typeof s === "object" && s !== null && Object.keys(s).length === 0 || QFe(s));
  return {
    partialTextChars: n.length,
    toolUseCount: r.length,
    hadEmptyInputToolUse: o
  };
}
function maa({
  salvage: e,
  streamedText: t,
  serverRetainedUuids: n
}) {
  if (e === null) return t.trim().length > 0 ? {
    kind: "mint",
    text: t
  } : {
    kind: "none"
  };
  if (n === null) return {
    kind: "mint",
    text: e + t
  };
  return t.trim().length > 0 ? {
    kind: "mint-replacing",
    text: e + t,
    replacesUuids: n
  } : {
    kind: "none"
  };
}
function gaa() {
  return qBe() && !(VBe() ?? []).includes("refusal_fallback_prompt");
}
function haa(e) {
  if (!e.isMainThread) return "subagent";
  if (e.requestDialog === void 0) return "no_dialog_host";
  if (wc("switchModelsOnFlag", true).value) return "setting";
  if (e.consumerLacksDialogCapability) return "no_consumer_capability";
  return;
}
function yaa(e) {
  return e.isMainThread && (e.requestDialog === void 0 || e.consumerLacksDialogCapability) && wc("switchModelsOnFlag", true).value === false;
}
function _aa() {
  if (td()) return;
  return "To enable automatic fallback on this provider, set `ANTHROPIC_DEFAULT_FABLE_MODEL` to your Fable 5 model ID and `ANTHROPIC_DEFAULT_OPUS_MODEL` to your Opus 4.8 model ID.";
}
function baa(e, t) {
  return `${Qct(t) ? Tio(e) : vio(e, t)} ${Jct}`;
}
function Saa(e, t) {
  return {
    retry_fallback: `Switch to ${wp(t)}`,
    edit_prompt: `Edit prompt and retry with ${wp(e)}`
  };
}
var u5e = "https://support.claude.com/en/articles/15363606",
  Jct,
  Wap = "https://claude.com/form/cyber-use-case",
  qap = 400,
  caa = "Switch models when a message is flagged",
  Vap = "These measures let us bring you Mythos-level capabilities sooner, and we're working to refine them.",
  daa,
  zap = "This model's safeguards flagged this message. This sometimes happens with safe, normal conversations.";