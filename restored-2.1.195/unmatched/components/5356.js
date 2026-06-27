// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FZt
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0011  score=0.1743  fileCov=0.0011
// note: nearest: src/screens/REPL.tsx (0.0011); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FZt] deps: hooks/useTerminalSize.ts, components/design-system/Ratchet.tsx, main.tsx
N9o = R(lt(), 1), ko = R(se(), 1);
async function ham(e) {
  let t = [];
  for (let n of e) {
    let r = {
        plugin: n.name
      },
      o = `${n.name}:`;
    if (n.themesPath) t.push(...(await CYr(n.themesPath, r, o)));
    for (let s of n.themesPaths ?? []) t.push(...(await CYr(s, r, o)));
  }
  return wYr(t), xe("plugin_load_themes"), t.sort((n, r) => n.name.localeCompare(r.name));
}
async function epc(e) {
  if (lc("themes")) return q3e.setState(() => []), [];
  let t = await ham(e);
  return q3e.setState(() => t), t;
}