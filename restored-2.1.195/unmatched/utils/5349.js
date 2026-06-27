// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ycr
// matched 2.1.88 source: src/components/messageActions.tsx
// class=new  jaccard=0.0397  score=0.1922  fileCov=0.0477
// note: nearest: src/components/messageActions.tsx (0.0397); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ycr] deps: IB, dn, vy, je, At, sr, g0
wdc = UZt * 4, Tdc = wdc * 10;
Rim = Cn(e => {
  T(`[footerLinks] skipping a 'regex' entry with non-string fields (pattern/url/label types: ${e}); the entry is preserved in settings`, {
    level: "warn"
  }), It("repl_footer_links", "unreadable_entry");
}), Kcr = /\{([^{}]+)\}/g, Lim = /\(\?<([^>=!][^>]*)>/g, Dim = Cn((e, t, n) => {
  let r = new Set([...t.matchAll(Lim)].map(o => o[1]));
  for (let [, o] of n.matchAll(Kcr)) if (o !== void 0 && !r.has(o)) T(`[footerLinks] template references {${o}} but pattern ${t} has no such named capture group`, {
    level: "warn"
  });
}), Pim = /^(?:\.|%2e){1,2}$/i;
$im = /[\x00-\x1f\x7f]/g;
Bim = Cn(e => {
  let t = xdc(e.replace(Kcr, "x"));
  if (!t || !w8r.has(t.protocol)) return T(`[footerLinks] url template "${e}" must have a literal origin with an allowlisted scheme (e.g. https://host/...); skipping`, {
    level: "warn"
  }), It("repl_footer_links", "bad_url_template"), null;
  return Idc(t);
});
Uim = Cn(e => {
  try {
    return new RegExp(e, "g");
  } catch (t) {
    return T(`[footerLinks] invalid pattern ${e}: ${be(t)}`, {
      level: "warn"
    }), It("repl_footer_links", "invalid_pattern"), null;
  }
});
function Ldc() {
  let e = $Lr("footerLinksRegexes").flat();
  return e.length > 0 ? e : void 0;
}
function Ddc() {
  Hdc((e, t) => {
    let n = Ldc(),
      r = t.footerLinks.filter(s => s.key !== void 0),
      o = !n || n.length === 0 ? r : jim(e, n, r);
    if (t.footerLinks.length === o.length && t.footerLinks.every((s, i) => {
      let a = o[i];
      return a !== void 0 && s.url === a.url && s.dedupUrl === a.dedupUrl && s.label === a.label && s.prefix === a.prefix && s.key === a.key && s.color === a.color;
    })) return null;
    return {
      footerLinks: o
    };
  });
}
function Pdc(e, t) {
  try {
    let n = Ldc();
    if (!n || n.length === 0) return;
    let r = Mdc(Wim(e)),
      o = r ? R9o(n, r).reverse() : [];
    if (o.length === 0) return;
    xe("repl_footer_links"), t(s => {
      let i = L9o(s.footerLinks, o);
      return i === s.footerLinks ? s : {
        ...s,
        footerLinks: i
      };
    });
  } catch (n) {
    ke(n), Le("repl_footer_links", "scan_failed");
  }
}
function jim(e, t, n = []) {
  if (!t || t.length === 0) return n;
  let r = Mdc(e);
  if (!r) return n;
  return L9o(n, R9o(t, r).reverse());
}
function Mdc(e) {
  let t = "",
    n = 0;
  for (let r = e.length - 1; r >= 0 && t.length < D9o && n < Fim; r--) {
    let o = e[r];
    if (!Gim(o)) continue;
    n++;
    let s = [];
    for (let i of mS([o], true)) {
      let a = zim(i);
      if (a) s.push(a);
    }
    if (s.length > 0) {
      let i = s.join(`
`);
      t = t ? i + `
` + t : i;
    }
  }
  return t.length > D9o ? t.slice(-D9o) : t;
}
function Gim(e) {
  if (e.type === "assistant") return Array.isArray(e.message.content) && e.message.content.some(t => t.type === "text");
  if (e.type === "user") {
    if (e.isMeta || !Array.isArray(e.message.content)) return false;
    return e.message.content.some(t => t.type === "tool_result" && (typeof t.content === "string" || Array.isArray(t.content) && t.content.some(n => n.type === "text")));
  }
  return false;
}
function Wim(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "user" && !n.isMeta && !bfe(n) && !qim(n) && !Vim(n)) return e.slice(t + 1);
  }
  return e.slice();
}
function qim(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return false;
  let t = e.message.content[0];
  return t?.type === "text" && (t.text === _N || t.text === Jv);
}
function Vim(e) {
  if (e.type !== "user") return false;
  let t = e.message.content,
    n = typeof t === "string" ? t : Array.isArray(t) && t[0]?.type === "text" ? t[0].text : "",
    r = n.startsWith(Rdc) ? n.slice(Rdc.length) : n;
  return r.startsWith(lVo) || r.startsWith(cVo) || r.startsWith(uVo);
}
function zim(e) {
  if (e.type === "assistant") {
    let t = e.message.content[0];
    return t.type === "text" ? P9o(t.text) : "";
  }
  if (e.type === "user") {
    if (e.isMeta) return "";
    let t = e.message.content[0];
    if (t.type !== "tool_result") return "";
    if (typeof t.content === "string") return P9o(t.content);
    if (Array.isArray(t.content)) return P9o(zl(t.content, `
`));
    return "";
  }
  return "";
}
function P9o(e) {
  return e.length > kdc ? e.slice(-kdc) : e;
}
var kdc = 8192,
  D9o = 65536,
  Fim = 256,
  Rdc = `<system-reminder>
`;