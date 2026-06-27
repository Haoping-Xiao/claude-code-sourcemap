// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SKr
// matched 2.1.88 source: src/utils/plugins/pluginVersioning.ts
// class=new  jaccard=0.0284  score=0.0823  fileCov=0.0416
// note: nearest: src/utils/plugins/pluginVersioning.ts (0.0284); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SKr = E(() => {
  I1i = require("crypto");
});
function EKr(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}
function XOd(e, t = 5) {
  let n = [],
    r;
  for (let o of e.slice(0, 4000).split(`
`)) {
    let s = o.trim();
    if (!s.startsWith("at ")) continue;
    let i = s.slice(3),
      a = i.indexOf(" (");
    if (r === void 0) {
      let u = (a !== -1 ? i.slice(a + 2, -1) : i).match(/([^/\\]+:\d+:\d+)\)?$/);
      if (u) r = u[1];
    }
    let l = a !== -1 ? i.slice(0, a) : i;
    if (l = l.replace(/^async\s+/, "").replace(/^new\s+/, ""), l.includes("/") || l.includes("\\") || /:\d/.test(l)) continue;
    if (l) n.push(l);
    if (n.length >= t) break;
  }
  return {
    names: n,
    topFrame: r
  };
}
function JOd(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}
function LM(e) {
  try {
    let t = JOd(e instanceof Error ? e.message : e),
      n = {
        error_message_hash: Dd(EKr(t))
      },
      r = xd(e);
    if (r !== void 0) n.error_code = r;
    if (e instanceof Error) {
      let o = yUe(e.constructor?.name);
      if (o !== void 0) n.error_constructor = o;
      if (typeof e.stack === "string") {
        let {
          names: s,
          topFrame: i
        } = XOd(e.stack);
        if (s.length > 0) n.error_stack_hash = Dd(s.join("|"));
        if (i !== void 0) {
          let a = oss(i);
          if (a !== void 0) n.error_top_frame = a;
        }
      }
    }
    return n;
  } catch {
    return {};
  }
}
function x1i(e, t) {
  let n = BK(e) ?? "unknown";
  try {
    T(`[reportRenderError] React boundary caught ${n}: ${be(e)}`, {
      level: "error"
    });
  } catch {}
  let r = t?.componentStack;
  (async () => {
    try {
      await my("tengu_uncaught_exception", {
        error_name: n,
        ...LM(e),
        source: We("react_render"),
        ...(r && {
          error_component_stack_hash: Dd(r)
        })
      }), await Promise.all([A_e(), k_e()]);
    } catch {}
  })();
}