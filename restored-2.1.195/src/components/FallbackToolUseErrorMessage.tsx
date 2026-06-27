// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gpt
// matched 2.1.88 source: src/components/FallbackToolUseErrorMessage.tsx
// class=modified  jaccard=0.3098  score=0.6604  fileCov=0.3685
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function hMa(e) {
  if (typeof e === "string") return dRp(e, 9);
  if (!Array.isArray(e)) return false;
  let t = 0;
  for (let n of e) {
    if (((t += 1), t > 10)) return true;
    if (n.type !== "text") continue;
    let r = n.text,
      o = 0;
    while (t <= 10) {
      if (
        ((o = r.indexOf(
          `
`,
          o,
        )),
        o === -1)
      )
        break;
      (o++, t++);
    }
    if (t > 10) return true;
  }
  return false;
}
function dRp(e, t) {
  let n = 0;
  for (let r = 0; r <= t; r++) {
    if (
      ((n = e.indexOf(
        `
`,
        n,
      )),
      n === -1)
    )
      return false;
    n++;
  }
  return true;
}
var Jmo = 10;
function sjn(e) {
  return e.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
function AT(e) {
  let t = yMa.c(24),
    { result: n, verbose: r } = e,
    o,
    s,
    i,
    a,
    l,
    c,
    u;
  if (t[0] !== n || t[1] !== r) {
    let g;
    if (typeof n !== "string") g = "Tool execution failed";
    else {
      let h = xl(n, "tool_use_error") ?? n,
        _ = sjn(h)
          .replace(/<\/?error>/g, "")
          .trim();
      if (!r && _.includes("InputValidationError: ")) g = "Invalid tool parameters";
      else if (_.startsWith("Error: ") || _.startsWith("Cancelled: ")) g = _;
      else g = `Error: ${_}`;
    }
    ((a =
      hu(
        g,
        `
`,
      ) +
      1 -
      Jmo),
      (i = qn),
      (s = U),
      (u = "column"),
      (o = w),
      (l = "error"),
      (c = KNn(
        r
          ? g
          : g
              .split(
                `
`,
              )
              .slice(0, Jmo).join(`
`),
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l),
      (t[7] = c),
      (t[8] = u));
  } else ((o = t[2]), (s = t[3]), (i = t[4]), (a = t[5]), (l = t[6]), (c = t[7]), (u = t[8]));
  let d;
  if (t[9] !== o || t[10] !== l || t[11] !== c)
    ((d = Wpt.jsx(o, {
      color: l,
      children: c,
    })),
      (t[9] = o),
      (t[10] = l),
      (t[11] = c),
      (t[12] = d));
  else d = t[12];
  let p;
  if (t[13] !== a || t[14] !== r)
    ((p =
      !r &&
      Wpt.jsx(d$, {
        count: a,
        expandable: true,
      })),
      (t[13] = a),
      (t[14] = r),
      (t[15] = p));
  else p = t[15];
  let f;
  if (t[16] !== s || t[17] !== u || t[18] !== d || t[19] !== p)
    ((f = Wpt.jsxs(s, {
      flexDirection: u,
      children: [d, p],
    })),
      (t[16] = s),
      (t[17] = u),
      (t[18] = d),
      (t[19] = p),
      (t[20] = f));
  else f = t[20];
  let m;
  if (t[21] !== i || t[22] !== f)
    ((m = Wpt.jsx(i, {
      children: f,
    })),
      (t[21] = i),
      (t[22] = f),
      (t[23] = m));
  else m = t[23];
  return m;
}
var yMa, Wpt;
