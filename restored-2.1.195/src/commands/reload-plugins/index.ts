// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N7l
// matched 2.1.88 source: src/commands/reload-plugins/index.ts
// class=modified  jaccard=0.2064  score=0.2356  fileCov=0.6248
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module N7l]
((j9f = {
  type: "local",
  name: "reload-plugins",
  description: "Activate pending plugin changes in the current session",
  argumentHint: "[--force]",
  supportsNonInteractive: false,
  thinClientDispatch: "control-request",
  load: () => Promise.resolve().then(() => (O7l(), $7l)),
}),
  (Ksr = j9f));
var B7l = {};
var call = async (e, t) => {
  let n = $t(),
    r = await aC(n),
    o = new Set(r.map((p) => p.name));
  (W0(), KW());
  let s = await aC(n),
    i = new Set(s.map((p) => p.name));
  rF.emit();
  let a = On(s, (p) => !o.has(p.name)),
    l = On(r, (p) => !i.has(p.name)),
    c = [];
  if (a > 0) c.push(`${a} added`);
  if (l > 0) c.push(`${l} removed`);
  let u = c.length > 0 ? c.join(", ") : "no changes",
    d = Tl() ? " (custom skills are disabled in safe mode)" : "";
  return {
    type: "text",
    value: `Reloaded skills: ${s.length} ${bn(s.length, "skill")} available (${u})${d}`,
  };
};
