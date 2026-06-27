// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _a
// matched 2.1.88 source: src/utils/plans.ts
// class=modified  jaccard=0.1999  score=0.2473  fileCov=0.5104
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _a = E(() => {
  Qi();
  kt();
  ft();
  v0n();
  Zf();
  np();
  d8n();
  jv();
  $S();
  Pw();
  Rm();
  fd();
  Ld();
  Lo();
  je();
  Mm();
  fn();
  At();
  es();
  ys();
  QVt();
  sa();
  Yp();
  Rd();
  vn();
  co();
  Hu();
  y_();
  jS();
  ih();
  Jt();
  X4();
  sr();
  Mp();
  HO();
  ((c2 = require("fs")),
    (Hl = require("fs/promises")),
    (vh = require("path")),
    (asc = require("string_decoder")),
    (EZf = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION),
    (lsc = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/));
  csc = {
    user: "dedup-transcript",
    assistant: "dedup-transcript",
    attachment: "dedup-transcript",
    system: "dedup-transcript",
    progress: "dedup-transcript",
    summary: "always",
    "custom-title": "always",
    "ended-by-model": "always",
    "ai-title": "always",
    "last-prompt": "always",
    tag: "always",
    "agent-name": "always",
    "agent-color": "always",
    "agent-setting": "always",
    "pr-link": "always",
    "frame-link": "always",
    "bridge-session": "always",
    "file-history-snapshot": "always",
    "attribution-snapshot": "always",
    "speculation-accept": "always",
    mode: "always",
    "permission-mode": "always",
    "isolation-latch": "always",
    "worktree-state": "always",
    "queue-operation": "always",
    "marble-origami-commit": "always",
    "marble-origami-snapshot": "always",
    "marble-origami-reset": "always",
    "content-replacement": "route-by-agent",
    "fork-context-ref": "route-by-agent",
  };
  TZf = new Set(["bash_progress", "powershell_progress", "mcp_progress", ...[], "repl_tool_call"]);
  BYe = new Map();
  jse = class jse extends Error {
    code;
    constructor(e, t) {
      super(e);
      this.code = t;
    }
  };
  ((m5o = Mi()), (g5o = m5o.subscribe));
  ((nZt = Mi()), (hlr = nZt.subscribe));
  YQn = Mi();
  Q1e = Cn(
    async (e) => {
      try {
        let { messages: t } = await Lsc(e);
        return new Set(t.keys());
      } catch (t) {
        return (ke(t), new Set());
      }
    },
    (e) => e,
  );
  JWo = /[^a-zA-Z0-9/\\:-]/;
  nem = new Set([]);
});
function L$e(e, t) {
  let n = e ?? Rt(),
    r = Zve(),
    o = r.get(n);
  if (!o) {
    let s = gS(),
      i = t ? Yzr(t) : "";
    for (let a = 0; a < cem; a++) {
      o = i ? `${i}-${$st()}` : vkn();
      let l = Lz.join(s, `${o}.md`);
      if (!qt().existsSync(l)) break;
    }
    r.set(n, o);
  }
  return o;
}
function jAt(e) {
  return Zve().get(e ?? Rt());
}
function S5o(e, t) {
  Zve().set(e, t);
}
function ePl() {
  Zve().clear();
}
function _P(e) {
  let t = L$e(Rt());
  if (!e) return Lz.join(gS(), `${t}.md`);
  return Lz.join(gS(), `${t}-agent-${e}.md`);
}
function bP(e) {
  let t = _P(e);
  try {
    return qt().readFileSync(t, {
      encoding: "utf-8",
    });
  } catch (n) {
    if (wn(n)) return null;
    if (Vo(n)) return (T(`getPlan: read failed for ${t}: ${n}`), null);
    return (ke(n), null);
  }
}
function Osc(e) {
  return e.messages.find((t) => t.slug)?.slug;
}
async function _8n(e, t) {
  let n = Osc(e);
  if (!n) return !1;
  let r = t ?? Rt();
  S5o(r, n);
  let o = Lz.join(gS(), `${n}.md`);
  try {
    return (await qs().read(o), !0);
  } catch (s) {
    if (!wn(s)) {
      if (Vo(s)) return (T(`copyPlanForResume: read failed for ${o}: ${s}`), !1);
      return (ke(s), !1);
    }
    if (H0n() === null) return !1;
    T(`Plan file missing during resume: ${o}. Attempting recovery.`);
    let i = dem(e.messages, "plan"),
      a = null;
    if (i && i.content.length > 0)
      ((a = i.content),
        T(`Plan recovered from file snapshot, ${a.length} chars`, {
          level: "info",
        }));
    else if (((a = uem(e)), a))
      T(`Plan recovered from message history, ${a.length} chars`, {
        level: "info",
      });
    if (a)
      try {
        return (await qs().write(o, a), !0);
      } catch (l) {
        if (Vo(l)) return (T(`Plan recovery write failed for ${o}: ${l}`), !1);
        return (ke(l), !1);
      }
    return (
      T("Plan file recovery failed: no file snapshot or plan content found in message history"),
      !1
    );
  }
}
async function Nsc(e, t) {
  let n = Osc(e);
  if (!n) return !1;
  let r = gS(),
    o = Lz.join(r, `${n}.md`),
    s = L$e(t),
    i = Lz.join(r, `${s}.md`);
  try {
    return (await qs().copy(o, i), !0);
  } catch (a) {
    if (wn(a)) return !1;
    if (Vo(a)) return (T(`copyPlanForFork: copy failed for ${o}: ${a}`), !1);
    return (ke(a), !1);
  }
}
function uem(e) {
  for (let t = e.messages.length - 1; t >= 0; t--) {
    let n = e.messages[t];
    if (!n) continue;
    if (n.type === "assistant") {
      let { content: r } = n.message;
      if (Array.isArray(r)) {
        for (let o of r)
          if (o.type === "tool_use" && o.name === jD) {
            let i = o.input?.plan;
            if (typeof i === "string" && i.length > 0) return i;
          }
      }
    }
    if (n.type === "user") {
      let r = n;
      if (typeof r.planContent === "string" && r.planContent.length > 0) return r.planContent;
    }
    if (n.type === "attachment") {
      let r = n;
      if (r.attachment?.type === "plan_file_reference") {
        let o = r.attachment.planContent;
        if (typeof o === "string" && o.length > 0) return o;
      }
    }
  }
  return null;
}
function dem(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (
      r?.type === "system" &&
      "subtype" in r &&
      r.subtype === "file_snapshot" &&
      "snapshotFiles" in r
    )
      return r.snapshotFiles.find((s) => s.key === t);
  }
  return;
}
async function H6n() {
  if (H0n() === null) return;
  try {
    let e = [],
      t = bP();
    if (t)
      e.push({
        key: "plan",
        path: _P(),
        content: t,
      });
    if (e.length === 0) return;
    let n = {
        type: "system",
        subtype: "file_snapshot",
        content: "File snapshot",
        level: "info",
        isMeta: !0,
        timestamp: new Date().toISOString(),
        uuid: $sc.randomUUID(),
        snapshotFiles: e,
      },
      { recordTranscript: r } = await Promise.resolve().then(() => (_a(), nVe));
    await r([n]);
  } catch (e) {
    ke(e);
  }
}
var $sc,
  Lz,
  cem = 10,
  gS;
