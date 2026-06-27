// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kRa
// matched 2.1.88 source: src/utils/computerUse/appNames.ts
// class=modified  jaccard=0.5203  score=0.7718  fileCov=0.6149
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kRa = E(() => {
  ((ixp = ["/Applications/", "/System/Applications/"]),
    (axp = [
      /Helper(?:$|\s\()/,
      /Agent(?:$|\s\()/,
      /Service(?:$|\s\()/,
      /Uninstaller(?:$|\s\()/,
      /Updater(?:$|\s\()/,
      /^\./,
    ]),
    (lxp = new Set([
      "com.apple.Safari",
      "com.google.Chrome",
      "com.microsoft.edgemac",
      "org.mozilla.firefox",
      "company.thebrowser.Browser",
      "com.tinyspeck.slackmacgap",
      "us.zoom.xos",
      "com.microsoft.teams2",
      "com.microsoft.teams",
      "com.apple.MobileSMS",
      "com.apple.mail",
      "com.microsoft.Word",
      "com.microsoft.Excel",
      "com.microsoft.Powerpoint",
      "com.microsoft.Outlook",
      "com.apple.iWork.Pages",
      "com.apple.iWork.Numbers",
      "com.apple.iWork.Keynote",
      "com.google.GoogleDocs",
      "notion.id",
      "com.apple.Notes",
      "md.obsidian",
      "com.linear",
      "com.figma.Desktop",
      "com.microsoft.VSCode",
      "com.apple.Terminal",
      "com.googlecode.iterm2",
      "com.github.GitHubDesktop",
      "com.apple.finder",
      "com.apple.iCal",
      "com.apple.systempreferences",
    ])),
    (cxp = /^[\p{L}\p{M}\p{N}_ .&'()+-]+$/u));
});
var Afo = {};
_t(Afo, {
  runComputerUseMcpServer: () => runComputerUseMcpServer,
  createComputerUseMcpServerForCli: () => createComputerUseMcpServerForCli,
});
async function mxp() {
  try {
    let e = U4(),
      t = await Dre(() => e.apps.listInstalled(), RRa);
    return xRa(t, LRa.homedir());
  } catch {
    T(
      `[Computer Use MCP] app enumeration exceeded ${RRa}ms or failed; tool description omits list`,
    );
    return;
  }
}
async function createComputerUseMcpServerForCli() {
  let e = ZFn(),
    t = apt(),
    n = Jpo(e, t),
    r = await mxp(),
    o = Cqe(e.executor.capabilities, t, r);
  return (
    n.setRequestHandler(XK, async () =>
      e.isDisabled()
        ? {
            tools: [],
          }
        : {
            tools: o,
          },
    ),
    n
  );
}
async function runComputerUseMcpServer() {
  (eEe(), Iqe());
  let e = await createComputerUseMcpServerForCli(),
    t = new oFe(),
    n = false,
    r = async () => {
      if (n) return;
      ((n = true), await Promise.all([A_e(), k_e()]), process.exit(0));
    };
  (process.stdin.on("end", () => void r()),
    process.stdin.on("error", () => void r()),
    T("[Computer Use MCP] Starting MCP server"),
    await e.connect(t),
    T("[Computer Use MCP] MCP server started"));
}
var LRa,
  RRa = 1000;
