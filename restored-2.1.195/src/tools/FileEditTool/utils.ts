// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bMe
// matched 2.1.88 source: src/tools/FileEditTool/utils.ts
// class=modified  jaccard=0.6464  score=1  fileCov=0.6464
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bMe = E(() => {
  b5e();
  Hu();
  sr();
  Rm();
  je();
  Dpe();
  At();
  oc();
  Hel();
  uDe();
  u_();
  ((bvo = /\\u[0-9a-fA-F]{4}/), (Svo = /[\u0080-\uffff]/));
  xZp = {
    "<fnr>": "<function_results>",
    "<n>": "<name>",
    "</n>": "</name>",
    "<o>": "<output>",
    "</o>": "</output>",
    "<e>": "<error>",
    "</e>": "</error>",
    "<s>": "<system>",
    "</s>": "</system>",
    "<r>": "<result>",
    "</r>": "</result>",
    "< META_START >": "<META_START>",
    "< META_END >": "<META_END>",
    "< EOT >": "<EOT>",
    "< META >": "<META>",
    "< SOS >": "<SOS>",
    "\n\nH:": `

Human:`,
    "\n\nA:": `

Assistant:`,
  };
});
async function Oel(e, t, n = 3) {
  let r = await N9t(e);
  if (r === null) return null;
  try {
    return await Hvo(r, t, n);
  } finally {
    await r.close();
  }
}
async function N9t(e) {
  if (Fc(e) && !qp(e)) return null;
  try {
    return await $el.open(e, "r");
  } catch (t) {
    if (wn(t)) return null;
    throw t;
  }
}
async function Hvo(e, t, n) {
  if (t === "")
    return {
      content: "",
      lineOffset: 1,
      truncated: !1,
    };
  let r = Buffer.from(t, "utf8"),
    o = 0;
  for (let d = 0; d < r.length; d++) if (r[d] === K8n) o++;
  let s,
    i = r.length + o - 1,
    a = Buffer.allocUnsafe(SMe + i),
    l = 0,
    c = 0,
    u = 0;
  while (l < z8n) {
    let { bytesRead: d } = await e.read(a, u, SMe, l);
    if (d === 0) break;
    let p = u + d,
      f = Mel(a, r, p),
      m = r.length;
    if (f === -1 && o > 0)
      ((s ??= Buffer.from(
        t.replaceAll(
          `
`,
          `\r
`,
        ),
        "utf8",
      )),
        (f = Mel(a, s, p)),
        (m = s.length));
    if (f !== -1) {
      let h = l - u + f;
      return await LZp(e, a, h, m, n, c + Avo(a, 0, f));
    }
    l += d;
    let g = Math.min(i, p);
    ((c += Avo(a, 0, p - g)), (u = g), a.copyWithin(0, p - u, p));
  }
  return {
    content: "",
    lineOffset: 1,
    truncated: l >= z8n,
  };
}
async function Y8n(e) {
  let t = Buffer.allocUnsafe(SMe),
    n = 0;
  for (;;) {
    if (n === t.length) {
      let o = Buffer.allocUnsafe(Math.min(t.length * 2, z8n + SMe));
      (t.copy(o, 0, 0, n), (t = o));
    }
    let { bytesRead: r } = await e.read(t, n, t.length - n, n);
    if (r === 0) break;
    if (((n += r), n > z8n)) return null;
  }
  return Nel(t, n);
}
function Mel(e, t, n) {
  let r = e.indexOf(t);
  return r === -1 || r + t.length > n ? -1 : r;
}
function Avo(e, t, n) {
  let r = 0;
  for (let o = t; o < n; o++) if (e[o] === K8n) r++;
  return r;
}
function Nel(e, t) {
  let n = e.toString("utf8", 0, t);
  return n.includes("\r")
    ? n.replaceAll(
        `\r
`,
        `
`,
      )
    : n;
}
async function LZp(e, t, n, r, o, s) {
  let i = Math.min(n, SMe),
    { bytesRead: a } = await e.read(t, 0, i, n - i),
    l = n,
    c = 0;
  for (let b = a - 1; b >= 0 && c <= o; b--) {
    if (t[b] === K8n) {
      if ((c++, c > o)) break;
    }
    l--;
  }
  let u = n - l,
    d = s - Avo(t, a - u, a) + 1,
    p = n + r,
    { bytesRead: f } = await e.read(t, 0, SMe, p),
    m = p;
  c = 0;
  for (let b = 0; b < f; b++)
    if ((m++, t[b] === K8n)) {
      if ((c++, c >= o + 1)) break;
    }
  let g = m - l,
    h = g <= t.length ? t : Buffer.allocUnsafe(g),
    { bytesRead: y } = await e.read(h, 0, g, l);
  return {
    content: Nel(h, y),
    lineOffset: d,
    truncated: !1,
  };
}
var $el,
  SMe = 8192,
  z8n = 10485760,
  K8n = 10;
