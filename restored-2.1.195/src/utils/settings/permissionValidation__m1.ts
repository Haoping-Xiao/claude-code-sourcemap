// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dec
// matched 2.1.88 source: src/utils/settings/permissionValidation.ts
// class=modified (alt of src/utils/settings/permissionValidation.ts)  jaccard=0.0326  score=0.1182  fileCov=0.043
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dec]
cec = Symbol.for("mcp.completable");
(function (e) {
  e.Completable = "McpCompletable";
})(lec || (lec = {}));
function validatePermissionRule(e) {
  let t = [];
  if (e.length === 0)
    return {
      isValid: false,
      warnings: ["Tool name cannot be empty"],
    };
  if (e.length > 128)
    return {
      isValid: false,
      warnings: [`Tool name exceeds maximum length of 128 characters (current: ${e.length})`],
    };
  if (e.includes(" ")) t.push("Tool name contains spaces, which may cause parsing issues");
  if (e.includes(",")) t.push("Tool name contains commas, which may cause parsing issues");
  if (e.startsWith("-") || e.endsWith("-"))
    t.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts");
  if (e.startsWith(".") || e.endsWith("."))
    t.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts");
  if (!FKf.test(e)) {
    let n = e
      .split("")
      .filter((r) => !/[A-Za-z0-9._-]/.test(r))
      .filter((r, o, s) => s.indexOf(r) === o);
    return (
      t.push(
        `Tool name contains invalid characters: ${n.map((r) => `"${r}"`).join(", ")}`,
        "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)",
      ),
      {
        isValid: false,
        warnings: t,
      }
    );
  }
  return {
    isValid: true,
    warnings: t,
  };
}
function GKf(e, t) {
  if (t.length > 0) {
    console.warn(`Tool name validation warning for "${e}":`);
    for (let n of t) console.warn(`  - ${n}`);
    (console.warn("Tool registration will proceed, but this may cause compatibility issues."),
      console.warn("Consider updating the tool name to conform to the MCP tool naming standard."),
      console.warn(
        "See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.",
      ));
  }
}
function F3o(e) {
  let t = validatePermissionRule(e);
  return (GKf(e, t.warnings), t.isValid);
}
var FKf;
