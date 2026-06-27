// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dec
// matched 2.1.88 source: src/utils/settings/permissionValidation.ts
// class=new  jaccard=0.0194  score=0.0663  fileCov=0.0266
// note: nearest: src/utils/settings/permissionValidation.ts (0.0194); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dec = E(() => {
  cec = Symbol.for("mcp.completable");
  (function (e) {
    e.Completable = "McpCompletable";
  })(lec || (lec = {}));
});
function jKf(e) {
  let t = [];
  if (e.length === 0) return {
    isValid: !1,
    warnings: ["Tool name cannot be empty"]
  };
  if (e.length > 128) return {
    isValid: !1,
    warnings: [`Tool name exceeds maximum length of 128 characters (current: ${e.length})`]
  };
  if (e.includes(" ")) t.push("Tool name contains spaces, which may cause parsing issues");
  if (e.includes(",")) t.push("Tool name contains commas, which may cause parsing issues");
  if (e.startsWith("-") || e.endsWith("-")) t.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts");
  if (e.startsWith(".") || e.endsWith(".")) t.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts");
  if (!FKf.test(e)) {
    let n = e.split("").filter(r => !/[A-Za-z0-9._-]/.test(r)).filter((r, o, s) => s.indexOf(r) === o);
    return t.push(`Tool name contains invalid characters: ${n.map(r => `"${r}"`).join(", ")}`, "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)"), {
      isValid: !1,
      warnings: t
    };
  }
  return {
    isValid: !0,
    warnings: t
  };
}
function GKf(e, t) {
  if (t.length > 0) {
    console.warn(`Tool name validation warning for "${e}":`);
    for (let n of t) console.warn(`  - ${n}`);
    console.warn("Tool registration will proceed, but this may cause compatibility issues."), console.warn("Consider updating the tool name to conform to the MCP tool naming standard."), console.warn("See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.");
  }
}
function F3o(e) {
  let t = jKf(e);
  return GKf(e, t.warnings), t.isValid;
}
var FKf;