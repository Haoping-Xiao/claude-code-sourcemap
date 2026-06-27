// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K$e
// matched 2.1.88 source: src/utils/attribution.ts
// class=modified  jaccard=0.388  score=0.7304  fileCov=0.4528
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var K$e = E(() => {
  h6();
  er();
  fn();
});
function sCl() {
  if (Oe.CLAUDE_CODE_SUPPRESS_SESSION_ATTRIBUTION) return null;
  if (Dr().attribution?.sessionUrl === !1) return null;
  if (bCt() === "remote") {
    let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
    if (!e) return null;
    let t = process.env.SESSION_INGRESS_URL;
    if (c4t(e, t)) return null;
    return dS(e, t);
  }
  if (d0()) {
    let e = bS();
    if (!e || e.outboundOnly) return null;
    if (c4t(e.bridgeSessionId, e.sessionIngressUrl)) return null;
    return dS(e.bridgeSessionId, e.sessionIngressUrl);
  }
  return null;
}
function eHf(e, t) {
  return {
    commit: e.commit
      ? `${e.commit}
Claude-Session: ${t}`
      : `Claude-Session: ${t}`,
    pr: e.pr
      ? `${e.pr}

${t}`
      : t,
  };
}
function wze() {
  let e = tHf(),
    t = sCl();
  return t ? eHf(e, t) : e;
}
function tHf() {
  let e = As(),
    t = tH(e) ? TAn(MIe.firstParty) : iCl(e) ? TAn(e) : "Claude",
    n = `\uD83E\uDD16 Generated with [Claude Code](${L5e})`,
    r = `Co-Authored-By: ${t} <noreply@anthropic.com>`,
    o = Dr(),
    s = o.attribution;
  if (s && (s.commit !== void 0 || s.pr !== void 0))
    return {
      commit: s.commit ?? r,
      pr: s.pr ?? n,
    };
  if (o.includeCoAuthoredBy === !1)
    return {
      commit: "",
      pr: "",
    };
  return {
    commit: r,
    pr: n,
  };
}
function iCl(e) {
  if (qY(e) === null) return !1;
  let t = Hnt(e);
  if (t !== e && Object.hasOwn(MSn, t)) return !0;
  let n = mo(e),
    r = dp(e).toLowerCase(),
    o = r.indexOf(n),
    s = n.length;
  if (o === -1 && n.endsWith("-0")) {
    let u = n.slice(0, -2);
    ((o = r.indexOf(u)), (s = u.length));
  }
  if (o === -1) {
    if (!e.includes("application-inference-profile")) return !1;
    let u = BCt(dp(e));
    return !!u && iCl(u);
  }
  let i = r.slice(0, o),
    a = r.slice(o + s),
    l = i === "" || /[./]$/.test(i),
    c = /^(?:-fast|-latest)?(?:-v\d+@\d{8}|[-@]\d{8})?(?:-v\d+(?::\d+)?)?$/.test(a);
  return l && c;
}
function rCl(e) {
  for (let t of KSs) if (e.includes(`<${t}>`)) return !0;
  return !1;
}
function nHf(e) {
  let t = 0;
  for (let n of e) {
    if (n.type !== "user") continue;
    let r = n.message?.content;
    if (!r) continue;
    let o = !1;
    if (typeof r === "string") {
      if (rCl(r)) continue;
      o = r.trim().length > 0;
    } else if (Array.isArray(r))
      o = r.some((s) => {
        if (!s || typeof s !== "object" || !("type" in s)) return !1;
        return (
          (s.type === "text" && typeof s.text === "string" && !rCl(s.text)) ||
          s.type === "image" ||
          s.type === "document"
        );
      });
    if (o) t++;
  }
  return t;
}
function rHf(e) {
  let t = e.filter(
    (n) =>
      n.type === "user" &&
      !("isSidechain" in n && n.isSidechain) &&
      !("isMeta" in n && n.isMeta) &&
      !("isCompactSummary" in n && n.isCompactSummary),
  );
  return nHf(t);
}
async function oHf(e) {
  let t = e.attribution;
  if (!t) return null;
  let n = t.fileStates,
    o = n instanceof Map ? Array.from(n.keys()) : Object.keys(n);
  if (o.length === 0) return null;
  try {
    return await ygo([t], o);
  } catch (s) {
    return (ke(s), null);
  }
}
function iHf(e) {
  let t = 0;
  for (let n of e) {
    if (n.type !== "assistant") continue;
    let r = n.message?.content;
    if (!Array.isArray(r)) continue;
    for (let o of r) {
      if (o.type !== "tool_use" || !sHf.has(o.name)) continue;
      if (XDo(o.name, o.input)) t++;
    }
  }
  return t;
}
async function aHf() {
  try {
    let e = em(),
      t = (await oCl.stat(e)).size,
      r = (await qpn(e, t)).postBoundaryBuf,
      o = fCe(r),
      s = o.findLastIndex(
        (a) => a.type === "system" && "subtype" in a && a.subtype === "compact_boundary",
      ),
      i = s >= 0 ? o.slice(s + 1) : o;
    return {
      promptCount: rHf(i),
      memoryAccessCount: iHf(i),
    };
  } catch {
    return {
      promptCount: 0,
      memoryAccessCount: 0,
    };
  }
}
async function aCl(e) {
  let t = sCl(),
    n = await lHf(e, t);
  if (!t || n.includes(t)) return n;
  return n
    ? `${n}

${t}`
    : t;
}
async function lHf(e, t) {
  let n = Dr();
  if (n.attribution?.pr) return n.attribution.pr;
  if (n.includeCoAuthoredBy === !1) return "";
  let r = `\uD83E\uDD16 Generated with [Claude Code](${L5e})`,
    o = e();
  if ((T(`PR Attribution: appState.attribution exists: ${!!o.attribution}`), o.attribution)) {
    let m = o.attribution.fileStates,
      h = m instanceof Map ? m.size : Object.keys(m).length;
    T(`PR Attribution: fileStates count: ${h}`);
  }
  let [s, { promptCount: i, memoryAccessCount: a }, l] = await Promise.all([
      oHf(o),
      aHf(),
      Ajn(BDe()),
    ]),
    c = s?.summary.claudePercent ?? 0;
  T(`PR Attribution: claudePercent: ${c}, promptCount: ${i}, memoryAccessCount: ${a}`);
  let u = mo(As()),
    d = l ? u : o$a(u);
  if (c === 0 && i === 0 && a === 0) return (T("PR Attribution: returning default (no data)"), r);
  let p = a > 0 ? `, ${a} ${a === 1 ? "memory" : "memories"} recalled` : "",
    f = `\uD83E\uDD16 Generated with [Claude Code](${L5e}) (${c}% ${i}-shotted by ${d}${p})`;
  return (T(`PR Attribution: returning summary: ${f}`), f);
}
var oCl, sHf;
