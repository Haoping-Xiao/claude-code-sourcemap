// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k9o
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/util.js
// class=new  jaccard=0.0187  score=0.1245  fileCov=0.0215
// note: nearest: node_modules/undici/lib/web/fetch/util.js (0.0187); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module k9o] deps: je, At
Adc = [];
function Cdc(e, t, n) {
  let r = e.find(o => o.key === t);
  if (n === null) return r ? e.filter(o => o.key !== t) : e;
  if (r && r.url === n.url && r.dedupUrl === n.dedupUrl && r.label === n.label && r.prefix === n.prefix && r.color === n.color) return e;
  return [{
    ...n,
    key: t
  }, ...e.filter(o => o.key !== t && (o.key !== void 0 || !zcr(o, n)))];
}
function R9o(e, t) {
  if (!e || e.length === 0 || !t) return [];
  let n = [];
  for (let r of e) {
    if (r.type !== "regex") continue;
    let {
      pattern: o,
      url: s,
      label: i
    } = r;
    if (typeof o !== "string" || typeof s !== "string" || i !== void 0 && typeof i !== "string") {
      Rim(`${typeof o}/${typeof s}/${typeof i}`);
      continue;
    }
    let a = Uim(o);
    if (!a) continue;
    let l = Bim(s);
    if (l === null) continue;
    Dim(`${o}\x00${s}\x00${i ?? ""}`, o, `${s}
${i ?? ""}`);
    let c = 0,
      u = [],
      d = false,
      p = false,
      f = false,
      m = performance.now();
    try {
      for (let h of t.matchAll(a)) {
        if (++c > Tdc) {
          T(`[footerLinks] pattern ${o} exceeded ${Tdc} matches in one scan; stopping (newest matches beyond the ceiling are not collected)`, {
            level: "warn"
          }), It("repl_footer_links", "scan_ceiling");
          break;
        }
        if (u.push(h), u.length > wdc) u.shift();
      }
      for (let h of u) {
        let y = h.groups ?? {},
          b = Mim(s, y);
        if (b !== null && b.length > vdc) {
          if (!p) p = true, T(`[footerLinks] dropping over-length url (${b.length} > ${vdc} chars) for pattern ${o}`, {
            level: "warn"
          }), It("repl_footer_links", "url_too_long");
          continue;
        }
        let _ = b === null ? null : xdc(b);
        if (b === null || !_ || Idc(_) !== l) {
          if (!d) d = true, T(`[footerLinks] dropping ${b === null ? "dot-segment" : _ ? "origin-shifted" : "unparseable"} url for pattern ${o}`, {
            level: "warn"
          }), It("repl_footer_links", b === null ? "dot_segment_url" : _ ? "origin_shifted" : "unparseable_url");
          continue;
        }
        let S = Rs(Oim(i ? Nim(i, y) : h[0]).trim(), xim);
        if (S === "") {
          if (!f) f = true, T(`[footerLinks] dropping match with empty label for pattern ${o}`, {
            level: "warn"
          }), It("repl_footer_links", "empty_label");
          continue;
        }
        n.push({
          index: h.index ?? 0,
          match: {
            url: b,
            label: S
          }
        });
      }
    } catch (h) {
      T(`[footerLinks] regex exec failed for ${o}: ${be(h)}`, {
        level: "warn"
      }), It("repl_footer_links", "regex_exec_failed");
    }
    let g = performance.now() - m;
    if (g > kim) T(`[footerLinks] slow pattern (${Math.round(g)}ms): ${o}`, {
      level: "warn"
    });
  }
  return n.sort((r, o) => r.index - o.index).map(r => r.match);
}
function Mim(e, t) {
  let n = e.replace(Kcr, (s, i) => encodeURIComponent(Bin(Object.hasOwn(t, i) ? t[i] ?? "" : ""))),
    r = n.search(/[?#]/);
  return (r === -1 ? n : n.slice(0, r)).split(/[/\\]/).some(s => Pim.test(s)) ? null : n;
}
function Oim(e) {
  return Ja(e).replace($im, "");
}
function Nim(e, t) {
  return e.replace(Kcr, (n, r) => Object.hasOwn(t, r) ? t[r] ?? "" : "");
}
function Idc(e) {
  return e.origin !== "null" ? e.origin : `${e.protocol}//${e.host}`;
}
function xdc(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function L9o(e, t) {
  if (t.length === 0) return e;
  let [n, r] = aFe(e, a => a.key !== void 0),
    o = [];
  for (let a of t) {
    if (o.some(l => zcr(l, a)) || n.some(l => zcr(l, a))) continue;
    o.push(a);
  }
  if (o.length === 0) return e;
  let s = r.filter(a => !o.some(l => zcr(l, a))),
    i = [...n, ...[...o, ...s].slice(0, UZt)];
  if (i.length === e.length && i.every((a, l) => {
    let c = e[l];
    return a === c || a.url === c.url && a.dedupUrl === c.dedupUrl && a.label === c.label && a.prefix === c.prefix && a.key === c.key && a.color === c.color;
  })) return e;
  return i;
}
function zcr(e, t) {
  return e.url === t.url || e.url === t.dedupUrl || e.dedupUrl === t.url || e.dedupUrl !== void 0 && e.dedupUrl === t.dedupUrl;
}
var UZt = 5,
  wdc,
  Tdc,
  xim = 28,
  vdc = 2048,
  kim = 50,
  Rim,
  Kcr,
  Lim,
  Dim,
  Pim,
  $im,
  Bim,
  Uim;