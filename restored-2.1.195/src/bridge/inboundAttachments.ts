// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j8o
// matched 2.1.88 source: src/bridge/inboundAttachments.ts
// class=modified  jaccard=0.5943  score=0.8533  fileCov=0.662
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resolveInboundAttachments, resolveAndPrepend, prependPathRefs, extractInboundAttachments
function debug(msg) {
  T(`[bridge:inbound-attach] ${msg}`);
}
function extractInboundAttachments(msg) {
  if (typeof msg !== "object" || msg === null || !("file_attachments" in msg)) return [];
  let parsed = xum().safeParse(msg.file_attachments);
  return parsed.success ? parsed.data : [];
}
function kum(e) {
  return yen.basename(e).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment";
}
function Rum() {
  return yen.join(tr(), "uploads", Rt());
}
async function resolveOne(att) {
  let t = LN();
  if (!t) {
    debug("skip: no oauth token");
    return;
  }
  let n;
  try {
    let a = `${czt()}/api/oauth/files/${encodeURIComponent(att.file_uuid)}/content`,
      l = await po.get(a, {
        headers: {
          Authorization: `Bearer ${t}`,
        },
        responseType: "arraybuffer",
        timeout: Cum,
        validateStatus: () => true,
      });
    if (l.status !== 200) {
      debug(`fetch ${att.file_uuid} failed: status=${l.status}`);
      return;
    }
    n = Buffer.from(l.data);
  } catch (a) {
    debug(`fetch ${att.file_uuid} threw: ${a}`);
    return;
  }
  let r = kum(att.file_name),
    o = (att.file_uuid.slice(0, 8) || Lgc.randomUUID().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"),
    s = Rum(),
    i = yen.join(s, `${o}-${r}`);
  try {
    (await Dur.mkdir(s, {
      recursive: true,
    }),
      await Dur.writeFile(i, n));
  } catch (a) {
    debug(`write ${i} failed: ${a}`);
    return;
  }
  return (debug(`resolved ${att.file_uuid} \u2192 ${i} (${n.length} bytes)`), i);
}
async function resolveInboundAttachments(attachments) {
  if (attachments.length === 0) return "";
  if ((debug(`resolving ${attachments.length} attachment(s)`), !LN()))
    return (debug("skip: no oauth token"), It("bridge_attachment_resolve", "no_token"), "");
  let n = (await Promise.all(attachments.map(resolveOne))).filter((r) => r !== void 0);
  if (n.length === 0) return (Le("bridge_attachment_resolve", "all_failed"), "");
  if (n.length < attachments.length) It("bridge_attachment_resolve", "partial_failed");
  else xe("bridge_attachment_resolve");
  return n.map((r) => `@"${r}"`).join(" ") + " ";
}
function prependPathRefs(content, t) {
  if (!t) return content;
  if (typeof content === "string") return t + content;
  let n = content.findLastIndex((r) => r.type === "text");
  if (n !== -1) {
    let r = content[n];
    if (r.type === "text")
      return [
        ...content.slice(0, n),
        {
          ...r,
          text: t + r.text,
        },
        ...content.slice(n + 1),
      ];
  }
  return [
    ...content,
    {
      type: "text",
      text: t.trimEnd(),
    },
  ];
}
async function resolveAndPrepend(e, t) {
  let n = extractInboundAttachments(e);
  if (n.length === 0) return t;
  let r = await resolveInboundAttachments(n);
  return prependPathRefs(t, r);
}
var Lgc,
  Dur,
  yen,
  Cum = 30000,
  Ium,
  xum;
