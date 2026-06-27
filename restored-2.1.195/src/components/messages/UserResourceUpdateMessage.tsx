// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zil
// matched 2.1.88 source: src/components/messages/UserResourceUpdateMessage.tsx
// class=modified  jaccard=0.2187  score=0.5131  fileCov=0.2759
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zil] deps: ft, Ye, Un, uo, wr, vn, sr, Yil
((Jil = R(lt(), 1)), (iIo = R(se(), 1)));
function parseUpdates(e) {
  let t = [],
    n =
      /<mcp-resource-update\s+server="([^"]+)"\s+uri="([^"]+)"[^>]*>(?:[\s\S]*?<reason>([^<]+)<\/reason>)?/g,
    r;
  while ((r = n.exec(e)) !== null)
    t.push({
      kind: "resource",
      server: r[1] ?? "",
      target: r[2] ?? "",
      reason: r[3],
    });
  let o =
    /<mcp-polling-update\s+type="([^"]+)"\s+server="([^"]+)"\s+tool="([^"]+)"[^>]*>(?:[\s\S]*?<reason>([^<]+)<\/reason>)?/g;
  while ((r = o.exec(e)) !== null)
    t.push({
      kind: "polling",
      server: r[2] ?? "",
      target: r[3] ?? "",
      reason: r[4],
    });
  return t;
}
function isf(e) {
  if (e.startsWith("file://")) {
    let t = e.slice(7),
      n = t.split("/");
    return n[n.length - 1] || t;
  }
  if (e.length > 40) return e.slice(0, 39) + "\u2026";
  return e;
}
function UserResourceUpdateMessage(e) {
  let t = eal.c(12),
    { addMargin: n, param: r } = e,
    { text: o } = r,
    s,
    i,
    a,
    l,
    c;
  if (t[0] !== n || t[1] !== o) {
    c = Symbol.for("react.early_return_sentinel");
    e: {
      let d = parseUpdates(o);
      if (d.length === 0) {
        c = null;
        break e;
      }
      ((s = U), (i = "column"), (a = n ? 1 : 0), (l = d.map(_temp)));
    }
    ((t[0] = n), (t[1] = o), (t[2] = s), (t[3] = i), (t[4] = a), (t[5] = l), (t[6] = c));
  } else ((s = t[2]), (i = t[3]), (a = t[4]), (l = t[5]), (c = t[6]));
  if (c !== Symbol.for("react.early_return_sentinel")) return c;
  let u;
  if (t[7] !== s || t[8] !== i || t[9] !== a || t[10] !== l)
    ((u = IAe.jsx(s, {
      flexDirection: i,
      marginTop: a,
      children: l,
    })),
      (t[7] = s),
      (t[8] = i),
      (t[9] = a),
      (t[10] = l),
      (t[11] = u));
  else u = t[11];
  return u;
}
function _temp(e, t) {
  return IAe.jsx(
    U,
    {
      children: IAe.jsxs(w, {
        children: [
          IAe.jsx(w, {
            color: "success",
            children: qvs,
          }),
          " ",
          IAe.jsxs(w, {
            dimColor: true,
            children: [e.server, ":"],
          }),
          " ",
          IAe.jsx(w, {
            color: "suggestion",
            children: e.kind === "resource" ? isf(e.target) : e.target,
          }),
          e.reason &&
            IAe.jsxs(w, {
              dimColor: true,
              children: [" \xB7 ", e.reason],
            }),
        ],
      }),
    },
    t,
  );
}
var eal, IAe;
