// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jdc
// matched 2.1.88 source: src/utils/claudeDesktop.ts
// class=modified  jaccard=0.6856  score=0.9028  fileCov=0.7403
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: readClaudeDesktopMcpServers, getClaudeDesktopConfigPath
// [unwrapped __esm module jdc] deps: l0t, jun, Vb, rq, jDe, X2o, ii, uDe, LL, fp, og, CAt, je, At, ik, P2o, vn, bm, co, Ao, Gy, _$, Jt, IAt, Gor, mzt, yZn
Zim = [rsr];
var qdc = {};
async function getClaudeDesktopConfigPath() {
  let e = Vt();
  if (!Kkr.includes(e))
    throw Error(
      `Unsupported platform: ${e} - Claude Desktop integration only works on macOS and WSL.`,
    );
  if (e === "macos")
    return O9o.join(
      Gdc.homedir(),
      "Library",
      "Application Support",
      "Claude",
      "claude_desktop_config.json",
    );
  let t = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
  if (t) {
    let r = `/mnt/c${t.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return (await ZYe.stat(r), r);
    } catch {}
  }
  try {
    try {
      let r = await ZYe.readdir("/mnt/c/Users", {
        withFileTypes: true,
      });
      for (let o of r) {
        if (
          o.name === "Public" ||
          o.name === "Default" ||
          o.name === "Default User" ||
          o.name === "All Users"
        )
          continue;
        let s = O9o.join(
          "/mnt/c/Users",
          o.name,
          "AppData",
          "Roaming",
          "Claude",
          "claude_desktop_config.json",
        );
        try {
          return (await ZYe.stat(s), s);
        } catch {}
      }
    } catch {}
  } catch (n) {
    T(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, {
      level: "error",
    });
  }
  throw Error(
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.",
  );
}
async function readClaudeDesktopMcpServers() {
  if (!Kkr.includes(Vt()))
    throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let e = await getClaudeDesktopConfigPath(),
      t;
    try {
      t = await ZYe.readFile(e, {
        encoding: "utf8",
      });
    } catch (s) {
      if (on(s) === "ENOENT") return {};
      throw s;
    }
    let n = Ia(t);
    if (!n || typeof n !== "object") return {};
    let r = n.mcpServers;
    if (!r || typeof r !== "object") return {};
    let o = {};
    for (let [s, i] of Object.entries(r)) {
      if (!i || typeof i !== "object") continue;
      let a = YRt().safeParse(i);
      if (a.success) o[s] = a.data;
    }
    return o;
  } catch (e) {
    return (
      T(`Failed to read Claude Desktop MCP servers: ${e}`, {
        level: "error",
      }),
      {}
    );
  }
}
var ZYe, Gdc, O9o;
