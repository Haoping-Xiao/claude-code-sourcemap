// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module egc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0058  score=0.301  fileCov=0.0059
// note: nearest: src/screens/REPL.tsx (0.0058); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var egc = E(() => {
  ft();
  uo();
  sA();
  _a();
  wZ = R(rt(), 1);
});
function oen(e, t, n) {
  if (e === "now") return e;
  return t && qcm.has(t) || n && Kcm.has(n) ? "later" : e;
}
function Ycm() {
  return false;
}
function Xcm() {
  return false;
}
function Jcm(e, t) {
  return e !== void 0 && Vcm.has(e) && t === rgc && Ycm();
}
function Qcm(e, t) {
  return e === zcm && t === ogc && Xcm();
}
function sen(e, t) {
  return Jcm(e, t) || Qcm(e, t);
}
function sgc(e) {
  return e === rgc || e === ogc;
}
function ien(e, t) {
  if (e && e.kind !== "peer") return e;
  if (t && Wcm.has(t)) return {
    kind: "task-notification"
  };
  if (t && Gcm.has(t)) return {
    kind: "human"
  };
  return;
}
function wur(e) {
  return e.verifiedSlackHumanTurn === true && e.priority !== "now";
}
function igc(e, t) {
  if (e === "now") return e;
  return t ? "later" : e;
}
function Cur(e) {
  let r = e.trimStart(),
    o = false;
  while (r.startsWith("<system-reminder>")) {
    let i = r.indexOf("</system-reminder>");
    if (i < 0) break;
    r = r.slice(i + 18).trimStart(), o = true;
  }
  let s = (o ? r : e).trimEnd();
  while (s.endsWith("</system-reminder>")) {
    let i = s.lastIndexOf(`
`);
    if (!(i < 0 ? s : s.slice(i + 1)).startsWith("<system-reminder>")) break;
    s = (i < 0 ? "" : s.slice(0, i)).trimEnd(), o = true;
  }
  if (!o) return e;
  return s === "" ? e : s;
}
function I8o(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r.type !== "text") continue;
    let o = Cur(r.text);
    if (o === r.text) continue;
    t ??= [...e], t[n] = {
      ...r,
      text: o
    };
  }
  return t ?? e;
}
function Iur(e) {
  if (e.type !== "user") return;
  let t = e.message?.content;
  if (!t) return;
  if (Array.isArray(t) && t.length === 0) return;
  let n = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
    r = "client_platform" in e && typeof e.client_platform === "string" ? e.client_platform : void 0,
    o = "inbound_origin" in e && typeof e.inbound_origin === "string" ? e.inbound_origin : void 0,
    s = Array.isArray(t) ? Zcm(I8o(eum(t))) : Cur(t);
  if (Array.isArray(s) && s.length === 0) return;
  return {
    content: s,
    uuid: n,
    clientPlatform: r,
    inboundOrigin: o
  };
}
function agc(e) {
  return;
}
function Zcm(e) {
  if (!e.some(tgc)) return e;
  return e.filter(t => !tgc(t));
}
function tgc(e) {
  if (e.type !== "text") return false;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function eum(e) {
  if (!e.some(ngc)) return e;
  return e.map(t => {
    if (!ngc(t)) return t;
    let n = t.source,
      r = typeof n.mediaType === "string" && n.mediaType ? n.mediaType : TDn(t.source.data);
    return {
      ...t,
      source: {
        type: "base64",
        media_type: r,
        data: t.source.data
      }
    };
  });
}
function ngc(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return false;
  return !e.source.media_type;
}
var Gcm,
  Wcm,
  qcm,
  Vcm,
  rgc = "slack_human",
  zcm = "claude-in-teams",
  ogc = "teams_human",
  Kcm;