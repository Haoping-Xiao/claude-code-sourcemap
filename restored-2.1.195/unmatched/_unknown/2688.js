// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UFt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UFt = E(() => {
  Vlt();
});
function FFt() {
  if (globalThis[ino] == null) {
    let e = new globalThis.TextEncoder(),
      t = new globalThis.TextDecoder(),
      n;
    globalThis[ino] = {
      encodeUtf8(r) {
        return e.encode(r);
      },
      decodeUtf8(r, o) {
        if (o) {
          if (n === void 0) n = new globalThis.TextDecoder("utf-8", {
            fatal: !0
          });
          return n.decode(r);
        }
        return t.decode(r);
      },
      checkUtf8(r) {
        try {
          return encodeURIComponent(r), !0;
        } catch (o) {
          return !1;
        }
      }
    };
  }
  return globalThis[ino];
}
var ino;