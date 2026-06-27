// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j8o
// matched 2.1.88 source: src/bridge/inboundAttachments.ts
// class=modified  jaccard=0.5943  score=0.8533  fileCov=0.662
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resolveInboundAttachments, resolveAndPrepend, prependPathRefs, extractInboundAttachments
function a7e(e) {
  T(`[bridge:inbound-attach] ${e}`);
}
function extractInboundAttachments(e) {
  if (typeof e !== "object" || e === null || !("file_attachments" in e)) return [];
  let t = xum().safeParse(e.file_attachments);
  return t.success ? t.data : [];
}
function kum(e) {
  return yen.basename(e).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment";
}
function Rum() {
  return yen.join(tr(), "uploads", Rt());
}
async function Lum(e) {
  let t = LN();
  if (!t) {
    a7e("skip: no oauth token");
    return;
  }
  let n;
  try {
    let a = `${czt()}/api/oauth/files/${encodeURIComponent(e.file_uuid)}/content`,
      l = await po.get(a, {
        headers: {
          Authorization: `Bearer ${t}`,
        },
        responseType: "arraybuffer",
        timeout: Cum,
        validateStatus: () => true,
      });
    if (l.status !== 200) {
      a7e(`fetch ${e.file_uuid} failed: status=${l.status}`);
      return;
    }
    n = Buffer.from(l.data);
  } catch (a) {
    a7e(`fetch ${e.file_uuid} threw: ${a}`);
    return;
  }
  let r = kum(e.file_name),
    o = (e.file_uuid.slice(0, 8) || Lgc.randomUUID().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"),
    s = Rum(),
    i = yen.join(s, `${o}-${r}`);
  try {
    (await Dur.mkdir(s, {
      recursive: true,
    }),
      await Dur.writeFile(i, n));
  } catch (a) {
    a7e(`write ${i} failed: ${a}`);
    return;
  }
  return (a7e(`resolved ${e.file_uuid} \u2192 ${i} (${n.length} bytes)`), i);
}
async function resolveInboundAttachments(e) {
  if (e.length === 0) return "";
  if ((a7e(`resolving ${e.length} attachment(s)`), !LN()))
    return (a7e("skip: no oauth token"), It("bridge_attachment_resolve", "no_token"), "");
  let n = (await Promise.all(e.map(Lum))).filter((r) => r !== void 0);
  if (n.length === 0) return (Le("bridge_attachment_resolve", "all_failed"), "");
  if (n.length < e.length) It("bridge_attachment_resolve", "partial_failed");
  else xe("bridge_attachment_resolve");
  return n.map((r) => `@"${r}"`).join(" ") + " ";
}
function prependPathRefs(e, t) {
  if (!t) return e;
  if (typeof e === "string") return t + e;
  let n = e.findLastIndex((r) => r.type === "text");
  if (n !== -1) {
    let r = e[n];
    if (r.type === "text")
      return [
        ...e.slice(0, n),
        {
          ...r,
          text: t + r.text,
        },
        ...e.slice(n + 1),
      ];
  }
  return [
    ...e,
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
