// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lil
// matched 2.1.88 source: src/components/messages/UserLocalCommandOutputMessage.tsx
// class=modified  jaccard=0.3431  score=0.6565  fileCov=0.4182
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lil] deps: si, np, Ye, co
((kil = R(lt(), 1)), (Vpe = R(se(), 1)));
function UserLocalCommandOutputMessage(e) {
  let t = Vzn.c(2),
    { content: n } = e,
    r;
  if (t[0] !== n) {
    let o = xl(n, "local-command-stdout"),
      s = xl(n, "local-command-stderr");
    if (((r = []), o?.trim() && o.trim() !== zw))
      r.push(
        vN.jsx(
          IndentedContent,
          {
            children: o.trim(),
          },
          "stdout",
        ),
      );
    if (s?.trim())
      r.push(
        vN.jsx(
          IndentedContent,
          {
            children: s.trim(),
          },
          "stderr",
        ),
      );
    ((t[0] = n), (t[1] = r));
  } else r = t[1];
  if (r.length === 0) return null;
  return r;
}
function IndentedContent(e) {
  let t = Vzn.c(5),
    { children: n } = e;
  if (n.startsWith(`${mv} `) || n.startsWith(`${BO} `)) {
    let s;
    if (t[0] !== n)
      ((s = vN.jsx(CloudLaunchContent, {
        children: n,
      })),
        (t[0] = n),
        (t[1] = s));
    else s = t[1];
    return s;
  }
  let r;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((r = vN.jsx(w, {
      dimColor: true,
      children: "  \u23BF  ",
    })),
      (t[2] = r));
  else r = t[2];
  let o;
  if (t[3] !== n)
    ((o = vN.jsxs(U, {
      flexDirection: "row",
      children: [
        r,
        vN.jsx(U, {
          flexDirection: "column",
          flexGrow: 1,
          children: vN.jsx(zg, {
            children: n,
          }),
        }),
      ],
    })),
      (t[3] = n),
      (t[4] = o));
  else o = t[4];
  return o;
}
function CloudLaunchContent(e) {
  let t = Vzn.c(19),
    { children: n } = e,
    r = n[0],
    o,
    s,
    i;
  if (t[0] !== n) {
    let m = n.indexOf(`
`),
      g = m === -1 ? n.slice(2) : n.slice(2, m);
    s = m === -1 ? "" : n.slice(m + 1).trim();
    let h = g.indexOf(" \xB7 ");
    ((o = h === -1 ? g : g.slice(0, h)),
      (i = h === -1 ? "" : g.slice(h)),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i));
  } else ((o = t[1]), (s = t[2]), (i = t[3]));
  let a = i,
    l;
  if (t[4] !== r)
    ((l = vN.jsxs(w, {
      color: "background",
      children: [r, " "],
    })),
      (t[4] = r),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== o)
    ((c = vN.jsx(w, {
      bold: true,
      children: o,
    })),
      (t[6] = o),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] !== a)
    ((u =
      a &&
      vN.jsx(w, {
        dimColor: true,
        children: a,
      })),
      (t[8] = a),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] !== l || t[11] !== c || t[12] !== u)
    ((d = vN.jsxs(w, {
      children: [l, c, u],
    })),
      (t[10] = l),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d));
  else d = t[13];
  let p;
  if (t[14] !== s)
    ((p =
      s &&
      vN.jsxs(U, {
        flexDirection: "row",
        children: [
          vN.jsx(w, {
            dimColor: true,
            children: "  \u23BF  ",
          }),
          vN.jsx(w, {
            dimColor: true,
            children: s,
          }),
        ],
      })),
      (t[14] = s),
      (t[15] = p));
  else p = t[15];
  let f;
  if (t[16] !== d || t[17] !== p)
    ((f = vN.jsxs(U, {
      flexDirection: "column",
      children: [d, p],
    })),
      (t[16] = d),
      (t[17] = p),
      (t[18] = f));
  else f = t[18];
  return f;
}
var Vzn, vN;
