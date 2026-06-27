// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F4o
// matched 2.1.88 source: src/commands/export/export.tsx
// class=modified  jaccard=0.5058  score=0.8388  fileCov=0.5602
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: sanitizeFilename, extractFirstPrompt, call
// [unwrapped __esm module F4o] deps: qXt, Yj, xne, C5, jDe, LPe
((aHt = R(rt(), 1)), (DJt = R(se(), 1)));
function g6f(e) {
  let t = e.getFullYear(),
    n = String(e.getMonth() + 1).padStart(2, "0"),
    r = String(e.getDate()).padStart(2, "0"),
    o = String(e.getHours()).padStart(2, "0"),
    s = String(e.getMinutes()).padStart(2, "0"),
    i = String(e.getSeconds()).padStart(2, "0");
  return `${t}-${n}-${r}-${o}${s}${i}`;
}
function extractFirstPrompt(e) {
  let t = e.find((o) => o.type === "user");
  if (!t || t.type !== "user") return "";
  let n = t.message?.content,
    r = "";
  if (typeof n === "string") r = n.trim();
  else if (Array.isArray(n)) {
    let o = n.find((s) => s.type === "text");
    if (o && "text" in o) r = o.text.trim();
  }
  if (((r = Gd(r)), r.length > 50)) r = r.substring(0, 49) + "\u2026";
  return r;
}
function sanitizeFilename(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
async function h6f(e) {
  let t = e.options.tools || [];
  return cir(e.messages, t);
}
async function call(onDone, context, args) {
  let r = await h6f(context),
    o = args.trim();
  if (o) {
    try {
      let l = await lir(o, r);
      (xe("export_file"), onDone(`Conversation exported to: ${l}`));
    } catch (l) {
      (Le("export_file", "write_failed"),
        onDone(
          `Failed to export conversation: ${l instanceof Error ? l.message : "Unknown error"}`,
        ));
    }
    return null;
  }
  let s = extractFirstPrompt(context.messages),
    i = g6f(new Date()),
    a;
  if (s) {
    let l = sanitizeFilename(s);
    a = l ? `${i}-${l}.txt` : `conversation-${i}.txt`;
  } else a = `conversation-${i}.txt`;
  return CJl.jsx(AJl, {
    content: r,
    defaultFilename: a,
    onDone: (l) => {
      onDone(l.message);
    },
  });
}
var CJl;
