// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jdt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jdt = E(() => {
  wr();
});
function uqe(e) {
  let t = e?.extensions?.[Ldo];
  return t != null && typeof t === "object" && "directoryRead" in t && t.directoryRead === !0;
}
async function oIa(e, t) {
  if (!uqe(e.capabilities)) throw Error("readMcpDirectory called on a server without directoryRead capability");
  let n = [],
    r,
    o = 0;
  do {
    let s;
    try {
      s = await e.client.request({
        method: "resources/directory/read",
        params: {
          uri: t,
          ...(r && {
            cursor: r
          })
        }
      }, zUe, {
        timeout: o6()
      });
    } catch (i) {
      if (o === 0 || !(i instanceof gi && i.code === Si.InvalidParams)) throw i;
      return sn(e.name, `resources/directory/read ${t}: page ${o + 1} returned InvalidParams on cursor; returning ${n.length} entries from prior pages`), n;
    }
    n.push(...s.resources), r = s.nextCursor, o++;
  } while (r && o < rIa);
  if (r) sn(e.name, `resources/directory/read ${t}: stopped at ${rIa} pages with more pending`);
  return n;
}
var S3t = "inode/directory",
  rIa = 20;