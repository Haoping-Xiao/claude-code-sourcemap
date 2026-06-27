// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xEi
// matched 2.1.88 source: node_modules/default-browser/windows.js
// class=partial  jaccard=0.2155  score=1  fileCov=0.2155
// note: low-confidence suggestion: node_modules/default-browser/windows.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xEi = E(() => {
  IEi();
});
async function gqr(e = uwd) {
  let {
      stdout: t
    } = await e("reg", ["QUERY", " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice", "/v", "ProgId"]),
    n = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(t);
  if (!n) throw new mqr(`Cannot find Windows browser in stdout: ${JSON.stringify(t)}`);
  let {
      id: r
    } = n.groups,
    o = dwd[r];
  if (!o) throw new mqr(`Unknown browser ID: ${r}`);
  return o;
}
var kEi, REi, uwd, dwd, mqr;