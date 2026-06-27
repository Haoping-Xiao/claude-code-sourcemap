// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wka
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/HTMLParser.js
// class=new  jaccard=0.0072  score=0.6275  fileCov=0.0072
// note: nearest: node_modules/@mixmark-io/domino/lib/HTMLParser.js (0.0072); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wka = E(() => {
  vn();
  sr();
  kt();
  hpo = ["<invoke>", "<invoke ", "<invoke\t", `<invoke
`, "</invoke>"], Vwp = new Set(["address", "area", "article", "audio", "base", "body", "button", "cite", "code", "data", "details", "dialog", "figure", "footer", "form", "head", "header", "html", "image", "input", "label", "link", "main", "mark", "menu", "meta", "object", "option", "output", "path", "picture", "script", "section", "select", "slot", "source", "span", "style", "summary", "table", "template", "text", "time", "title", "video"]);
});
function Cka(e) {
  return Ywp.has(e);
}
function Xwp(e) {
  let t = e.channel_id ?? e.channel;
  if (typeof t !== "string" || !t) return null;
  let n = t.replace(/^#/, ""),
    r = `#${n}`,
    o = Kwp.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
  return {
    label: r,
    url: o
  };
}
function Ika() {
  return {
    userFacingName() {
      return "Slacked";
    },
    renderToolUseMessage(e, {
      verbose: t
    }) {
      if (!t) return "";
      let n = Pae(e);
      if (n !== null) return n;
      return Object.entries(e).map(([r, o]) => `${r}: ${De(o)}`).join(", ");
    },
    renderToolUseTag(e) {
      let t = Xwp(e);
      if (t === null) return null;
      return ypo.jsx(U, {
        flexWrap: "nowrap",
        marginLeft: 1,
        children: ypo.jsx(bd, {
          children: t.url && vI() ? sP(t.url, t.label) : t.label
        })
      });
    }
  };
}
var ypo, Kwp, Ywp;