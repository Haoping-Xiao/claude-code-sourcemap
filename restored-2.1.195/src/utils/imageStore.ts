// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dfc
// matched 2.1.88 source: src/utils/imageStore.ts
// class=modified  jaccard=0.4355  score=0.9204  fileCov=0.4525
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Mfc() {
  return XZt.join(tr(), IMAGE_STORE_DIR, Rt());
}
async function mcm() {
  let e = Mfc();
  await fur.mkdir(e, {
    recursive: true,
  });
}
function $fc(e, t) {
  let n = t.split("/")[1] || "png";
  return XZt.join(Mfc(), `${e}.${n}`);
}
function hTt(e, t) {
  if (e.type !== "image") return null;
  let n = $fc(e.id, e.mediaType || "image/png");
  return (Bfc(t, e.id, n), n);
}
async function yTt(e, t) {
  let n = await storeImage(e);
  if (n) Bfc(t, e.id, n);
  return n;
}
async function Ofc(e, t) {
  let n = new Map();
  for (let [r, o] of Object.entries(e))
    if (o.type === "image") {
      let s = await storeImage(o);
      if (s) n.set(Number(r), s);
    }
  if (n.size > 0)
    t((r) => {
      let o = r.storedImagePaths;
      for (let [s, i] of n) o = Ufc(o, s, i);
      return o === r.storedImagePaths
        ? r
        : {
            ...r,
            storedImagePaths: o,
          };
    });
  return n;
}
async function storeImage(content) {
  if (content.type !== "image") return null;
  try {
    await mcm();
    let t = $fc(content.id, content.mediaType || "image/png"),
      n = await fur.open(t, "w", 384);
    try {
      (await n.writeFile(content.content, {
        encoding: "base64",
      }),
        await n.datasync());
    } finally {
      await n.close();
    }
    return (T(`Stored image ${content.id} to ${t}`), t);
  } catch (t) {
    return (T(`Failed to store image: ${t}`), null);
  }
}
function Bfc(e, t, n) {
  e((r) => {
    let o = Ufc(r.storedImagePaths, t, n);
    return o === r.storedImagePaths
      ? r
      : {
          ...r,
          storedImagePaths: o,
        };
  });
}
function Ufc(e, t, n) {
  if (e.get(t) === n) return e;
  let r = new Map(e);
  if (!r.has(t))
    while (r.size >= fcm) {
      let o = r.keys().next().value;
      if (o === void 0) break;
      r.delete(o);
    }
  return (r.set(t, n), r);
}
async function cleanupOldImageCaches() {
  let e = qt(),
    t = XZt.join(tr(), IMAGE_STORE_DIR),
    n = Rt();
  try {
    let r;
    try {
      r = await e.readdir(t);
    } catch {
      return;
    }
    for (let o of r) {
      if (o.name === n) continue;
      let s = XZt.join(t, o.name);
      try {
        (await e.rm(s, {
          recursive: true,
          force: true,
        }),
          T(`Cleaned up old image cache: ${s}`));
      } catch {}
    }
    try {
      if ((await e.readdir(t)).length === 0) await e.rmdir(t);
    } catch {}
  } catch {}
}
var fur,
  XZt,
  IMAGE_STORE_DIR = "image-cache",
  fcm = 200;
