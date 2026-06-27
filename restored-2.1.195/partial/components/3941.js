// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CH
// matched 2.1.88 source: node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
// class=partial  jaccard=0.0852  score=0.5765  fileCov=0.0909
// note: low-confidence suggestion: node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CH = E(() => {
  Ye();
  EC();
  PJa = R(lt(), 1), W9e = R(se(), 1);
});
async function OJa() {
  let e = new Set(),
    t = $Ja.homedir();
  for (let {
    path: n,
    re: r
  } of [{
    path: WHo.join(t, ".aws", "config"),
    re: /^\[(?:profile\s+)?([^\]]+)\]/gm
  }, {
    path: WHo.join(t, ".aws", "credentials"),
    re: /^\[([^\]]+)\]/gm
  }]) try {
    for (let o of (await MJa.readFile(n, "utf8")).matchAll(r)) {
      let s = o[1]?.trim();
      if (s && !s.startsWith("sso-session ")) e.add(s);
    }
  } catch {}
  return [...e].sort();
}
var MJa, $Ja, WHo;