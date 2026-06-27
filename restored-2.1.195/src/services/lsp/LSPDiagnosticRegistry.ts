// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ypt
// matched 2.1.88 source: src/services/lsp/LSPDiagnosticRegistry.ts
// class=modified  jaccard=0.5419  score=0.797  fileCov=0.6288
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function registerPendingLSPDiagnostic({ serverName: e, files: t }) {
  let n = rLa.randomUUID();
  (T(`LSP Diagnostics: Registering ${t.length} diagnostic file(s) from ${e} (ID: ${n})`),
    Pre.set(n, {
      serverName: e,
      files: t,
      timestamp: Date.now(),
      attachmentSent: false,
    }));
}
function nLa(e) {
  switch (e) {
    case "Error":
      return 1;
    case "Warning":
      return 2;
    case "Info":
      return 3;
    case "Hint":
      return 4;
    default:
      return 4;
  }
}
function sLa(e) {
  return De({
    message: e.message,
    severity: e.severity,
    range: e.range,
    source: e.source || null,
    code: e.code || null,
  });
}
function deduplicateDiagnosticFiles(allFiles) {
  let fileMap = new Map(),
    dedupedFiles = [];
  for (let r of allFiles) {
    if (!fileMap.has(r.uri))
      (fileMap.set(r.uri, new Set()),
        dedupedFiles.push({
          uri: r.uri,
          diagnostics: [],
        }));
    let o = fileMap.get(r.uri),
      s = dedupedFiles.find((a) => a.uri === r.uri),
      i = EDe.get(r.uri) || new Set();
    for (let a of r.diagnostics)
      try {
        let l = sLa(a);
        if (o.has(l) || i.has(l)) continue;
        (o.add(l), s.diagnostics.push(a));
      } catch (l) {
        let c = Zr(l),
          u = a.message?.substring(0, 100) || "<no message>";
        (i6(
          Error(
            `Failed to deduplicate diagnostic in ${r.uri}: ${c.message}. Diagnostic message: ${u}`,
          ),
          "Failed to deduplicate diagnostic",
        ),
          s.diagnostics.push(a));
      }
  }
  return dedupedFiles.filter((r) => r.diagnostics.length > 0);
}
function checkForLSPDiagnostics() {
  T(`LSP Diagnostics: Checking registry - ${Pre.size} pending`);
  let allFiles = [],
    serverNames = new Set(),
    n = [];
  for (let u of Pre.values())
    if (!u.attachmentSent) (allFiles.push(...u.files), serverNames.add(u.serverName), n.push(u));
  if (allFiles.length === 0) return [];
  let dedupedFiles,
    o = false;
  try {
    dedupedFiles = deduplicateDiagnosticFiles(allFiles);
  } catch (u) {
    let d = Zr(u);
    (i6(
      Error(`Failed to deduplicate LSP diagnostics: ${d.message}`),
      "Failed to deduplicate LSP diagnostics",
    ),
      (o = true),
      (dedupedFiles = allFiles));
  }
  for (let u of n) u.attachmentSent = true;
  for (let [u, d] of Pre) if (d.attachmentSent) Pre.delete(u);
  let s = allFiles.reduce((u, d) => u + d.diagnostics.length, 0),
    i = dedupedFiles.reduce((u, d) => u + d.diagnostics.length, 0);
  if (s > i) T(`LSP Diagnostics: Deduplication removed ${s - i} duplicate diagnostic(s)`);
  let a = 0,
    l = 0;
  for (let u of dedupedFiles) {
    if (
      (u.diagnostics.sort((p, f) => nLa(p.severity) - nLa(f.severity)), u.diagnostics.length > c2n)
    )
      ((l += u.diagnostics.length - c2n), (u.diagnostics = u.diagnostics.slice(0, c2n)));
    let d = tLa - a;
    if (u.diagnostics.length > d)
      ((l += u.diagnostics.length - d), (u.diagnostics = u.diagnostics.slice(0, d)));
    a += u.diagnostics.length;
  }
  if (((dedupedFiles = dedupedFiles.filter((u) => u.diagnostics.length > 0)), l > 0))
    T(
      `LSP Diagnostics: Volume limiting removed ${l} diagnostic(s) (max ${c2n}/file, ${tLa} total)`,
    );
  for (let u of dedupedFiles) {
    if (!EDe.has(u.uri)) EDe.set(u.uri, new Set());
    let d = EDe.get(u.uri);
    for (let p of u.diagnostics)
      try {
        d.add(sLa(p));
      } catch (f) {
        let m = Zr(f),
          g = p.message?.substring(0, 100) || "<no message>";
        i6(
          Error(
            `Failed to track delivered diagnostic in ${u.uri}: ${m.message}. Diagnostic message: ${g}`,
          ),
          "Failed to track delivered diagnostic",
        );
      }
  }
  let c = dedupedFiles.reduce((u, d) => u + d.diagnostics.length, 0);
  if (c === 0)
    return (
      T("LSP Diagnostics: No new diagnostics to deliver (all filtered by deduplication)"),
      []
    );
  if (
    (T(
      `LSP Diagnostics: Delivering ${dedupedFiles.length} file(s) with ${c} diagnostic(s) from ${serverNames.size} server(s)`,
    ),
    o)
  )
    It("lsp_diagnostics_deliver", "lsp_diagnostics_dedup_failed");
  else xe("lsp_diagnostics_deliver");
  return [
    {
      serverName: Array.from(serverNames).join(", "),
      files: dedupedFiles,
    },
  ];
}
function clearAllLSPDiagnostics() {
  (T(`LSP Diagnostics: Clearing ${Pre.size} pending diagnostic(s)`), Pre.clear());
}
function resetAllLSPDiagnosticState() {
  (T(`LSP Diagnostics: Resetting all state (${Pre.size} pending, ${EDe.size} files tracked)`),
    Pre.clear(),
    EDe.clear());
}
function clearDeliveredDiagnosticsForFile(fileUri) {
  if (EDe.has(fileUri))
    (T(`LSP Diagnostics: Clearing delivered diagnostics for ${fileUri}`), EDe.delete(fileUri));
}
function d2n(e) {
  let t = 0;
  for (let [n, r] of Pre) {
    let o = r.files.filter((s) => s.uri !== e);
    if (o.length === r.files.length) continue;
    if (o.length === 0) Pre.delete(n);
    else r.files = o;
    t++;
  }
  if (t > 0) T(`LSP Diagnostics: Purged ${t} pending entry(ies) referencing ${e}`);
}
var rLa,
  c2n = 10,
  tLa = 30,
  Gxp = 500,
  Pre,
  EDe;
