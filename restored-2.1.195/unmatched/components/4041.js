// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AN
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0204  score=0.5293  fileCov=0.0208
// note: nearest: src/ink/styles.ts (0.0204); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module AN] deps: @mixmark-io/domino/lib/Document.js, marked/lib/marked.esm.js, highlight.js/lib/languages/reasonml.js, ink/supports-hyperlinks.ts, hooks/useTerminalSize.ts, hooks/toolPermission/permissionLogging.ts, @xmldom/xmldom/lib/entities.js, utils/messages.ts, utils/markdown.ts
E6n = R(lt(), 1), Fnl = R(rt(), 1), eQ = R(se(), 1), x8e = new Map(), ytf = /[#*`|[>\-_~]|\n\n|(?:^|\n) {0,3}\d+\. |https?:\/\/|www\./;
function A6n(e) {
  let t = Gnl.c(3),
    {
      plan: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = k8e.jsx(w, {
    color: "subtle",
    children: "User rejected Claude's plan:"
  }), t[0] = r;else r = t[0];
  let o;
  if (t[1] !== n) o = k8e.jsx(qn, {
    children: k8e.jsxs(U, {
      flexDirection: "column",
      children: [r, k8e.jsx(U, {
        borderStyle: "round",
        borderColor: "planMode",
        paddingX: 1,
        overflow: "hidden",
        children: k8e.jsx(zg, {
          children: n
        })
      })]
    })
  }), t[1] = n, t[2] = o;else o = t[2];
  return o;
}
var Gnl, k8e;