// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xBl
// matched 2.1.88 source: src/commands/memory/index.ts
// class=partial  jaccard=0.1556  score=0.2232  fileCov=0.3395
// note: low-confidence suggestion: src/commands/memory/index.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var xBl = E(() => {
  $Of = {
    type: "local-jsx",
    name: "memory",
    description: "Open a memory file in your editor",
    load: () => Promise.resolve().then(() => (CBl(), wBl))
  }, IBl = $Of;
});
var kBl = {};
_t(kBl, {
  call: () => call
});
var call = async () => {
  let e = !bD();
  return ECt(e), G("tengu_memory_toggled", {
    toggled_off: e
  }), {
    type: "text",
    value: e ? `Memory paused for this session \xB7 this conversation will not write or read new memories, and previously-loaded memory content should not be referenced.

Run /pause-memory again to resume.` : "Memory resumed \xB7 memory content may be referenced and new memories can be saved."
  };
};