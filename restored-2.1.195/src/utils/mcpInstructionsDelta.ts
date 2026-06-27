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
  let announced = new Set(),
    o = 0,
    s = 0;
  for (let d of messages) {
    if (d.type !== "attachment") continue;
    if ((o++, d.attachment.type !== "mcp_instructions_delta")) continue;
    s++;
    for (let p of d.attachment.addedNames) announced.add(p);
    for (let p of d.attachment.removedNames) announced.delete(p);
  }
  let connected = mcpClients.filter((d) => d.type === "connected"),
    a = new Set(connected.map((d) => d.name)),
    blocks = new Map();
  for (let d of connected)
    if (d.instructions)
      blocks.set(
        d.name,
        `## ${d.name}
${d.instructions}`,
      );
  for (let d of clientSideInstructions) {
    if (!a.has(d.serverName)) continue;
    let p = blocks.get(d.serverName);
    blocks.set(
      d.serverName,
      p
        ? `${p}

${d.block}`
        : `## ${d.serverName}
${d.block}`,
    );
  }
  let added = [];
  for (let [d, p] of blocks)
    if (!announced.has(d))
      added.push({
        name: d,
        block: p,
      });
  let u = [];
  for (let d of announced) if (!a.has(d)) u.push(d);
  if (added.length === 0 && u.length === 0) return null;
  return (
    G("tengu_mcp_instructions_pool_change", {
      addedCount: added.length,
      removedCount: u.length,
      priorAnnouncedCount: announced.size,
      clientSideCount: clientSideInstructions.length,
      messagesLength: messages.length,
      attachmentCount: o,
      midCount: s,
    }),
    added.sort((d, p) => d.name.localeCompare(p.name)),
    {
      addedNames: added.map((d) => d.name),
      addedBlocks: added.map((d) => d.block),
      removedNames: u.sort(),
    }
  );
}
