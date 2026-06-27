// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cUl
// matched 2.1.88 source: src/commands/keybindings/keybindings.ts
// class=modified  jaccard=0.3551  score=0.7015  fileCov=0.4183
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
async function call() {
  if (!E8())
    return {
      type: "text",
      value: "Keybinding customization is disabled in this environment.",
    };
  let e = rbe(),
    t = false;
  await qs().mkdir(dUl.dirname(e));
  try {
    await uUl.writeFile(e, lUl(), {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch (o) {
    if (on(o) === "EEXIST") t = true;
    else throw o;
  }
  let n = await yz(e);
  if (n.error)
    return {
      type: "text",
      value: `${t ? "Opened" : "Created"} ${e}. ${n.error}`,
    };
  let r = Tl()
    ? ` (Safe mode: custom keybindings are disabled this session \u2014 changes take effect after you ${qH()}.)`
    : "";
  return {
    type: "text",
    value: t
      ? `Opened ${e} in your editor.${r}`
      : `Created ${e} with template. Opened in your editor.${r}`,
  };
}
var uUl, dUl;
