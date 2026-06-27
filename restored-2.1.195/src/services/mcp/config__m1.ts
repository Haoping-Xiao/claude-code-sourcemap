// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S_e
// matched 2.1.88 source: src/services/mcp/config.ts
// class=modified (alt of src/services/mcp/config.ts)  jaccard=0.0044  score=0.0598  fileCov=0.0047
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S_e] deps: wr
$$d = {
  "iTerm.app": "com.googlecode.iterm2",
  Apple_Terminal: "com.apple.Terminal",
  ghostty: "com.mitchellh.ghostty",
  kitty: "net.kovidgoyal.kitty",
  WarpTerminal: "dev.warp.Warp-Stable",
  vscode: "com.microsoft.VSCode",
};
ckn = {
  screenshotFiltering: "native",
  platform: "darwin",
};
function ukn(e) {
  let t = O$d;
  if (!t) return false;
  let n, r;
  try {
    ((n = new URL(e)), (r = new URL(t)));
  } catch {
    return false;
  }
  if (
    (n.protocol === "wss:"
      ? `https://${n.host}`
      : n.protocol === "ws:"
        ? `http://${n.host}`
        : n.origin) !== r.origin
  )
    return false;
  return wzr.some((s) => n.pathname.includes(s));
}
function unwrapCcrProxyUrl(e) {
  if (!ukn(e)) return false;
  let t;
  try {
    t = new URL(e);
  } catch {
    return false;
  }
  let n = t.searchParams.get("mcp_url");
  if (!n) return false;
  try {
    let r = new URL(n);
    return N$d.has(r.hostname) && r.pathname === "/devices/mcp";
  } catch {
    return false;
  }
}
function dke(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let t = new URL(e.url);
    return (
      (t.search = ""),
      (t.username = ""),
      (t.password = ""),
      (t.hash = ""),
      t.toString().replace(/\/$/, "")
    );
  } catch {
    return;
  }
}
var wzr, O$d, N$d;
