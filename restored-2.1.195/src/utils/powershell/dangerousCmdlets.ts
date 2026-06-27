// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZLo
// matched 2.1.88 source: src/utils/powershell/dangerousCmdlets.ts
// class=modified  jaccard=0.7573  score=0.9925  fileCov=0.7617
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZLo] deps: utils/permissions/dangerousPatterns.ts, utils/powershell/parser.ts
((XLo = new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"])),
  (JLo = new Set([
    "invoke-command",
    "invoke-expression",
    "start-job",
    "start-threadjob",
    "register-scheduledjob",
    "register-engineevent",
    "register-objectevent",
    "register-wmievent",
    "new-pssession",
    "enter-pssession",
  ])),
  (QLo = new Set([
    "import-module",
    "ipmo",
    "install-module",
    "save-module",
    "update-module",
    "install-script",
    "save-script",
  ])),
  (Ibf = [
    "pwsh",
    "powershell",
    "cmd",
    "bash",
    "wsl",
    "sh",
    "start-process",
    "start",
    "add-type",
    "new-object",
  ]));
((kbf = new Set(["invoke-webrequest", "invoke-restmethod"])),
  (Rbf = new Set([
    "set-alias",
    "sal",
    "new-alias",
    "nal",
    "set-variable",
    "sv",
    "new-variable",
    "nv",
  ])),
  (Lbf = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod"])),
  (Dbf = new Set([
    "select-object",
    "sort-object",
    "group-object",
    "where-object",
    "measure-object",
    "write-output",
    "write-host",
    "start-sleep",
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
    "out-string",
    "out-host",
    "ipconfig",
    "hostname",
    "route",
    "arp",
  ])),
  (aTl = (() => {
    let e = new Set([
      ...Ibf,
      ...XLo,
      ...JLo,
      ...QLo,
      ...kbf,
      ...Rbf,
      ...Lbf,
      ...Dbf,
      "foreach-object",
      ...v6t.filter((t) => !t.includes(" ")),
    ]);
    return new Set([...e, ...xbf(e)]);
  })()));
function Mbf(e) {
  return e
    .toLowerCase()
    .replace(/\[\]$/, "")
    .replace(/\[.*\]$/, "")
    .trim();
}
function eDo(e) {
  return Pbf.has(Mbf(e));
}
var Pbf;
