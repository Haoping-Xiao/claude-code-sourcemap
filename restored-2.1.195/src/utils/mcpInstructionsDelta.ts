// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hYt
// matched 2.1.88 source: src/utils/mcpInstructionsDelta.ts
// class=modified  jaccard=0.4948  score=0.8305  fileCov=0.5504
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function qze(e) {
  return e.type === "image" && e.content.length > 0;
}
function o0l(e) {
  if (!e) return;
  let t = Object.values(e)
    .filter(qze)
    .map((n) => n.id);
  return t.length > 0 ? t : void 0;
}
function getMcpInstructionsDelta(mcpClients, messages, clientSideInstructions) {
  let r = new Set(),
    o = 0,
    s = 0;
  for (let d of messages) {
    if (d.type !== "attachment") continue;
    if ((o++, d.attachment.type !== "mcp_instructions_delta")) continue;
    s++;
    for (let p of d.attachment.addedNames) r.add(p);
    for (let p of d.attachment.removedNames) r.delete(p);
  }
  let i = mcpClients.filter((d) => d.type === "connected"),
    a = new Set(i.map((d) => d.name)),
    l = new Map();
  for (let d of i)
    if (d.instructions)
      l.set(
        d.name,
        `## ${d.name}
${d.instructions}`,
      );
  for (let d of clientSideInstructions) {
    if (!a.has(d.serverName)) continue;
    let p = l.get(d.serverName);
    l.set(
      d.serverName,
      p
        ? `${p}

${d.block}`
        : `## ${d.serverName}
${d.block}`,
    );
  }
  let c = [];
  for (let [d, p] of l)
    if (!r.has(d))
      c.push({
        name: d,
        block: p,
      });
  let u = [];
  for (let d of r) if (!a.has(d)) u.push(d);
  if (c.length === 0 && u.length === 0) return null;
  return (
    G("tengu_mcp_instructions_pool_change", {
      addedCount: c.length,
      removedCount: u.length,
      priorAnnouncedCount: r.size,
      clientSideCount: clientSideInstructions.length,
      messagesLength: messages.length,
      attachmentCount: o,
      midCount: s,
    }),
    c.sort((d, p) => d.name.localeCompare(p.name)),
    {
      addedNames: c.map((d) => d.name),
      addedBlocks: c.map((d) => d.block),
      removedNames: u.sort(),
    }
  );
}
