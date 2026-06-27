// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kjl
// matched 2.1.88 source: src/utils/plugins/validatePlugin.ts
// class=modified (alt of src/utils/plugins/validatePlugin.ts)  jaccard=0.0223  score=0.0778  fileCov=0.0303
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kjl] deps: @xmldom/xmldom/lib/entities.js, context/modalContext.tsx, react/cjs/react.production.js, components/CustomSelect/select.tsx, hooks/useTerminalSize.ts, services/teamMemorySync/secretScanner.ts
((Ijl = R(lt(), 1)),
  (Mu = R(se(), 1)),
  (uBf = {
    good: "success",
    warn: "warning",
    poor: "error",
  }),
  (dBf = {
    on: {
      glyph: nt.tick,
      label: "on",
      color: "success",
    },
    "name-only": {
      glyph: nt.bullet,
      label: "name-only",
    },
    "user-invocable-only": {
      glyph: nt.circle,
      label: "user-only",
      color: "warning",
    },
    off: {
      glyph: nt.cross,
      label: "off",
      color: "error",
    },
  }));
function ZEt(e) {
  return e?.kind === "item" || e?.kind === "disabled-header";
}
function pBf(e) {
  switch (e.type) {
    case "plugin":
      return e.isEnabled && e.errorCount > 0;
    case "failed-plugin":
    case "flagged-plugin":
      return true;
    case "mcp":
      return (e.status === "needs-auth" || e.status === "failed") && !dUo(e);
    case "skill":
      return false;
  }
}
function validatePluginManifest(filePath, t) {
  if (t === "policy" || t === "flag") return filePath;
  if (t === "author") return filePath === "off" ? "user-invocable-only" : "off";
  let n = uUo.indexOf(filePath);
  return uUo[(n + 1) % uUo.length];
}
function Rjl(e) {
  return (
    (e.type === "plugin" && !e.isEnabled) ||
    (e.type === "mcp" && e.status === "disabled") ||
    (e.type === "skill" && e.override === "off")
  );
}
function dUo(e) {
  return (
    e.type === "mcp" &&
    (e.status === "needs-auth" || e.status === "failed") &&
    e.everConnected === false
  );
}
function Djl(
  e,
  { searchQuery: t, favoriteIds: n, showDisabled: r, disusedDays: o, keepInPlaceIds: s },
) {
  if (t) {
    let p = t.toLowerCase();
    return e
      .filter(
        (f) =>
          f.name.toLowerCase().includes(p) ||
          ("displayName" in f && f.displayName?.toLowerCase().includes(p)) ||
          ("description" in f && f.description?.toLowerCase().includes(p)),
      )
      .map((f) => ({
        kind: "item",
        section: "main",
        item: f,
      }));
  }
  let errors = [],
    a = null,
    l = (p, f) => {
      let m = a?.section !== p;
      if (m) {
        if (errors.length > 0 && errors.at(-1)?.kind !== "disabled-header")
          errors.push({
            kind: "spacer",
          });
        if (p === "attention" || p === "favorites" || p === "disused")
          errors.push({
            kind: "section-header",
            section: p,
          });
      }
      if ((p === "main" || p === "disabled") && (m || a?.item.scope !== f.scope)) {
        if (!m)
          errors.push({
            kind: "spacer",
          });
        errors.push({
          kind: "scope-header",
          scope: f.scope,
        });
      }
      let g =
          !m &&
          f.type === "mcp" &&
          f.parentId !== void 0 &&
          ((a?.item.type === "plugin" && a.item.id === f.parentId) ||
            (a?.item.type === "mcp" && a.item.indented && a.item.parentId === f.parentId)),
        h =
          f.type === "mcp" && f.indented && !g
            ? {
                ...f,
                indented: false,
              }
            : f;
      (errors.push({
        kind: "item",
        section: p,
        item: h,
      }),
        (a = {
          section: p,
          item: h,
        }));
    },
    c = new Set();
  for (let p of e) if (pBf(p)) (l("attention", p), c.add(p.id));
  for (let p of e) if (n.has(p.id) && !c.has(p.id)) (l("favorites", p), c.add(p.id));
  if (o && o.size > 0) {
    for (let p of e)
      if (p.type === "plugin" && p.isEnabled && o.has(p.id) && !c.has(p.id))
        (l("disused", {
          ...p,
          unusedDays: o.get(p.id),
        }),
          c.add(p.id));
  }
  let u = (p) => (Rjl(p) || dUo(p)) && !s?.has(p.id);
  for (let p of e) if (!u(p) && !c.has(p.id)) l("main", p);
  let d = e.filter(u);
  if (d.length > 0) {
    if (errors.length > 0)
      errors.push({
        kind: "spacer",
      });
    if (
      (errors.push({
        kind: "disabled-header",
        disabledCount: On(d, Rjl),
        unusedConnectorCount: On(d, dUo),
      }),
      r)
    )
      for (let p of d) l("disabled", p);
  }
  return errors;
}
var uUo;
