// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lne
// matched 2.1.88 source: src/utils/imageResizer.ts
// class=modified  jaccard=0.5419  score=0.6873  fileCov=0.7192
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Lne = E(() => {
  H8 = {
    maxWidth: 2000,
    maxHeight: 2000,
    maxBase64Size: 5242880,
    targetRawSize: 3932160,
  };
});
function i8i(e) {
  if (e instanceof Error) {
    let n = e;
    if (
      n.code === "MODULE_NOT_FOUND" ||
      n.code === "ERR_MODULE_NOT_FOUND" ||
      n.code === "ERR_DLOPEN_FAILED"
    )
      return jQr;
    if (n.code === "EACCES" || n.code === "EPERM") return G8d;
    if (n.code === "ENOMEM") return o8i;
  }
  let t = be(e);
  if (t.includes("Native image processor module not available")) return jQr;
  if (
    t.includes("unsupported image format") ||
    t.includes("Input buffer") ||
    t.includes("Input file is missing") ||
    t.includes("Input file has corrupt header") ||
    t.includes("corrupt header") ||
    t.includes("corrupt image") ||
    t.includes("premature end") ||
    t.includes("zlib: data error") ||
    t.includes("zero width") ||
    t.includes("zero height") ||
    t.startsWith("Failed to decode image:") ||
    t.startsWith("Failed to guess image format:") ||
    t === "Unable to determine image format"
  )
    return B8d;
  if (
    t.includes("pixel limit") ||
    t.includes("too many pixels") ||
    t.includes("exceeds pixel") ||
    t.includes("image dimensions")
  )
    return U8d;
  if (
    t.includes("out of memory") ||
    t.includes("Cannot allocate") ||
    t.includes("memory allocation")
  )
    return o8i;
  if (t.includes("timeout") || t.includes("timed out")) return F8d;
  if (t.includes("Vips")) return j8d;
  return s8i;
}
function a8i(e, t) {
  if (e === s8i) return !0;
  if (e === jQr) return on(t) !== "ERR_DLOPEN_FAILED";
  return !1;
}
function l8i(e) {
  let t =
      e instanceof Error
        ? e.name !== "Error"
          ? e.name
          : (e.constructor?.name ?? "Error")
        : typeof e,
    n = e instanceof Error ? String(e.code ?? "") : "";
  return {
    error_name: t,
    error_code: n,
  };
}
function c8i(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = ((t << 5) + t + e.charCodeAt(n)) | 0;
  return t >>> 0;
}
async function x0e(e, t, n, r) {
  if (e.length === 0) throw new NU("Image file is empty (0 bytes)");
  try {
    let o = await lbe(),
      i = await o(e).metadata(),
      a = i.format ?? n,
      l = a === "jpg" ? "jpeg" : a;
    if (!i.width || !i.height) {
      let h = RGe(e);
      if (h === void 0 || h.width > r.maxWidth || h.height > r.maxHeight)
        throw new NU(
          `Unable to resize image \u2014 could not verify image dimensions are within the ${r.maxWidth}x${r.maxHeight}px API limit.`,
        );
      if (t > r.targetRawSize)
        return (
          G("tengu_image_resize", {
            over_byte_limit: !0,
            over_dimension_limit: !1,
            original_size_bytes: t,
          }),
          {
            buffer: await o(e)
              .jpeg({
                quality: 80,
              })
              .toBuffer(),
            mediaType: "jpeg",
          }
        );
      return {
        buffer: e,
        mediaType: l,
      };
    }
    let { width: c, height: u } = i,
      d = c,
      p = u;
    if (t <= r.targetRawSize && d <= r.maxWidth && p <= r.maxHeight)
      return {
        buffer: e,
        mediaType: l,
        dimensions: {
          originalWidth: c,
          originalHeight: u,
          displayWidth: d,
          displayHeight: p,
        },
      };
    let f = d > r.maxWidth || p > r.maxHeight,
      m = l === "png";
    if (
      (G("tengu_image_resize", {
        over_byte_limit: t > r.targetRawSize,
        over_dimension_limit: f,
        original_size_bytes: t,
        original_width: c,
        original_height: u,
      }),
      !f && t > r.targetRawSize)
    ) {
      if (m) {
        let h = await o(e)
          .png({
            compressionLevel: 9,
            palette: !0,
          })
          .toBuffer();
        if (h.length <= r.targetRawSize)
          return {
            buffer: h,
            mediaType: "png",
            dimensions: {
              originalWidth: c,
              originalHeight: u,
              displayWidth: d,
              displayHeight: p,
            },
          };
      }
      for (let h of [80, 60, 40, 20]) {
        let y = await o(e)
          .jpeg({
            quality: h,
          })
          .toBuffer();
        if (y.length <= r.targetRawSize)
          return {
            buffer: y,
            mediaType: "jpeg",
            dimensions: {
              originalWidth: c,
              originalHeight: u,
              displayWidth: d,
              displayHeight: p,
            },
          };
      }
    }
    if (d > r.maxWidth) ((p = Math.round((p * r.maxWidth) / d)), (d = r.maxWidth));
    if (p > r.maxHeight) ((d = Math.round((d * r.maxHeight) / p)), (p = r.maxHeight));
    T(`Resizing to ${d}x${p}`);
    let g = await o(e)
      .resize(d, p, {
        fit: "inside",
        withoutEnlargement: !0,
      })
      .toBuffer();
    if (g.length > r.targetRawSize) {
      if (m) {
        let _ = await o(e)
          .resize(d, p, {
            fit: "inside",
            withoutEnlargement: !0,
          })
          .png({
            compressionLevel: 9,
            palette: !0,
          })
          .toBuffer();
        if (_.length <= r.targetRawSize)
          return {
            buffer: _,
            mediaType: "png",
            dimensions: {
              originalWidth: c,
              originalHeight: u,
              displayWidth: d,
              displayHeight: p,
            },
          };
      }
      for (let _ of [80, 60, 40, 20]) {
        let S = await o(e)
          .resize(d, p, {
            fit: "inside",
            withoutEnlargement: !0,
          })
          .jpeg({
            quality: _,
          })
          .toBuffer();
        if (S.length <= r.targetRawSize)
          return {
            buffer: S,
            mediaType: "jpeg",
            dimensions: {
              originalWidth: c,
              originalHeight: u,
              displayWidth: d,
              displayHeight: p,
            },
          };
      }
      let h = Math.min(d, 1000),
        y = Math.round((p * h) / Math.max(d, 1));
      T("Still too large, compressing with JPEG");
      let b = await o(e)
        .resize(h, y, {
          fit: "inside",
          withoutEnlargement: !0,
        })
        .jpeg({
          quality: 20,
        })
        .toBuffer();
      return (
        T(`JPEG compressed buffer size: ${b.length}`),
        {
          buffer: b,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: c,
            originalHeight: u,
            displayWidth: h,
            displayHeight: y,
          },
        }
      );
    }
    return {
      buffer: g,
      mediaType: l,
      dimensions: {
        originalWidth: c,
        originalHeight: u,
        displayWidth: d,
        displayHeight: p,
      },
    };
  } catch (o) {
    if (o instanceof NU) throw o;
    let s = i8i(o),
      i = be(o);
    if (a8i(s, o)) ke(o);
    else
      T(`Image resize failed: ${i}`, {
        level: "error",
      });
    G("tengu_image_resize_failed", {
      original_size_bytes: t,
      error_type: s,
      error_message_hash: c8i(i),
      ...l8i(o),
    });
    let l = hUt(e).slice(6),
      c = Math.ceil((t * 4) / 3),
      u = RGe(e);
    if (u === void 0)
      throw new NU(
        "Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " +
          "Please convert the image to PNG, JPEG, GIF, or WebP.",
      );
    let d = u.width > r.maxWidth || u.height > r.maxHeight;
    if (c <= r.maxBase64Size && !d)
      return (
        G("tengu_image_resize_fallback", {
          original_size_bytes: t,
          base64_size_bytes: c,
          error_type: s,
        }),
        {
          buffer: e,
          mediaType: l,
        }
      );
    throw new NU(
      d
        ? `Unable to resize image \u2014 dimensions exceed the ${r.maxWidth}x${r.maxHeight}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.`
        : `Unable to resize image (${Ra(t)} raw, ${Ra(c)} base64). The image exceeds the ${Ra(r.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`,
    );
  }
}
async function W8d(e, t, n) {
  let r = await lbe(),
    o = (u) =>
      r(e)
        .jpeg({
          quality: u,
        })
        .toBuffer(),
    s = e,
    i = 90;
  if (!/jpe?g/i.test(n)) {
    let u = await o(90);
    if (u.length < s.length) s = u;
    if (u.length <= t) return u;
    i = 89;
  }
  let l = 1,
    c;
  for (let u = 0; u < 5; u++) {
    let d = Math.floor((l + i) / 2),
      p = await o(d);
    if (p.length < s.length) s = p;
    if (p.length <= t) ((c = p), (l = d + 1));
    else i = d - 1;
    if (l > i) break;
  }
  return c ?? s;
}
async function FM({ data: e, mediaType: t, limits: n }) {
  let r = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64"),
    o = t?.includes("/") ? t.split("/")[1] || "png" : t || "png",
    s;
  try {
    s = await x0e(r, r.length, o, n);
  } catch (l) {
    if (l instanceof NU)
      return (
        G("tengu_image_resize_degraded", {}),
        {
          block: {
            type: "text",
            text: `[Image could not be processed: ${l.message}]`,
          },
        }
      );
    throw l;
  }
  let i = s.buffer;
  if (i.length > UQr)
    try {
      i = await W8d(s.buffer, UQr, s.mediaType);
    } catch (l) {
      T(`Image byte-budget compression failed, passing through unbudgeted: ${be(l)}`, {
        level: "error",
      });
    }
  return {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: hUt(i),
        data: i.toString("base64"),
      },
    },
    dimensions: s.dimensions,
  };
}
async function u8i(e, t) {
  if (e.source.type !== "base64")
    return {
      block: e,
    };
  return FM({
    data: e.source.data,
    mediaType: e.source.media_type,
    limits: t,
  });
}
async function d8i(e, t, n) {
  let r = n?.split("/")[1] || "jpeg",
    o = r === "jpg" ? "jpeg" : r;
  try {
    let s = await lbe(),
      i = await s(e).metadata(),
      a = i.format || o,
      l = e.length,
      c = {
        imageBuffer: e,
        metadata: i,
        format: a,
        maxBytes: t,
        originalSize: l,
      };
    if (l <= t) return _Ut(e, a, l);
    let u = await q8d(c, s);
    if (u) return u;
    if (a === "png") {
      let p = await z8d(c, s);
      if (p) return p;
    }
    let d = await K8d(c, 50, s);
    if (d) return d;
    return await Y8d(c, s);
  } catch (s) {
    let i = i8i(s),
      a = be(s);
    if (a8i(i, s)) ke(s);
    else
      T(`Image compression failed: ${a}`, {
        level: "error",
      });
    if (
      (G("tengu_image_compress_failed", {
        original_size_bytes: e.length,
        max_bytes: t,
        error_type: i,
        error_message_hash: c8i(a),
        ...l8i(s),
      }),
      e.length <= t)
    ) {
      let l = hUt(e);
      return {
        base64: e.toString("base64"),
        mediaType: l,
        originalSize: e.length,
      };
    }
    throw new NU(
      `Unable to compress image (${Ra(e.length)}) to fit within ${Ra(t)}. Please use a smaller image.`,
    );
  }
}
async function p8i(e, t, n) {
  let r = Math.floor(t / 0.125),
    o = Math.floor(r * 0.75);
  return d8i(e, o, n);
}
async function f8i(e, t) {
  if (e.source.type !== "base64") return e;
  let n = Buffer.from(e.source.data, "base64");
  if (n.length <= t) return e;
  let r = await d8i(n, t);
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: r.mediaType,
      data: r.base64,
    },
  };
}
function _Ut(e, t, n) {
  let r = t === "jpg" ? "jpeg" : t;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${r}`,
    originalSize: n,
  };
}
async function q8d(e, t) {
  let n = [1, 0.75, 0.5, 0.25];
  for (let r of n) {
    let o = Math.round((e.metadata.width || 2000) * r),
      s = Math.round((e.metadata.height || 2000) * r),
      i = t(e.imageBuffer).resize(o, s, {
        fit: "inside",
        withoutEnlargement: !0,
      });
    i = V8d(i, e.format);
    let a = await i.toBuffer();
    if (a.length <= e.maxBytes) return _Ut(a, e.format, e.originalSize);
  }
  return null;
}
function V8d(e, t) {
  switch (t) {
    case "png":
      return e.png({
        compressionLevel: 9,
        palette: !0,
      });
    case "jpeg":
    case "jpg":
      return e.jpeg({
        quality: 80,
      });
    case "webp":
      return e.webp({
        quality: 80,
      });
    default:
      return e;
  }
}
async function z8d(e, t) {
  let n = await t(e.imageBuffer)
    .resize(800, 800, {
      fit: "inside",
      withoutEnlargement: !0,
    })
    .png({
      compressionLevel: 9,
      palette: !0,
      colors: 64,
    })
    .toBuffer();
  if (n.length <= e.maxBytes) return _Ut(n, "png", e.originalSize);
  return null;
}
async function K8d(e, t, n) {
  let r = await n(e.imageBuffer)
    .resize(600, 600, {
      fit: "inside",
      withoutEnlargement: !0,
    })
    .jpeg({
      quality: t,
    })
    .toBuffer();
  if (r.length <= e.maxBytes) return _Ut(r, "jpeg", e.originalSize);
  return null;
}
async function Y8d(e, t) {
  let n = await t(e.imageBuffer)
    .resize(400, 400, {
      fit: "inside",
      withoutEnlargement: !0,
    })
    .jpeg({
      quality: 20,
    })
    .toBuffer();
  return _Ut(n, "jpeg", e.originalSize);
}
function Uat(e, t) {
  let { originalWidth: n, originalHeight: r, displayWidth: o, displayHeight: s } = e;
  if (!n || !r || !o || !s || o <= 0 || s <= 0) {
    if (t) return `[Image source: ${t}]`;
    return null;
  }
  let i = n !== o || r !== s;
  if (!i && !t) return null;
  let a = [];
  if (t) a.push(`source: ${t}`);
  if (i) {
    let l = n / o;
    a.push(
      `original ${n}x${r}, displayed at ${o}x${s}. Multiply coordinates by ${l.toFixed(2)} to map to original image.`,
    );
  }
  return `[Image: ${a.join(", ")}]`;
}
var jQr = 1,
  B8d = 2,
  s8i = 3,
  U8d = 4,
  o8i = 5,
  F8d = 6,
  j8d = 7,
  G8d = 8,
  NU;
