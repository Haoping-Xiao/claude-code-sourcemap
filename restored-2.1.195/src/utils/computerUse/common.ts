// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S_e
// matched 2.1.88 source: src/utils/computerUse/common.ts
// class=modified  jaccard=0.4923  score=0.7564  fileCov=0.585
// note: deminified; 0 identifiers renamed from _t exports
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
function mOi(e) {
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
