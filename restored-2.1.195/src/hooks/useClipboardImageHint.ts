// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DGe
// matched 2.1.88 source: src/hooks/useClipboardImageHint.ts
// class=modified  jaccard=0.2321  score=0.3544  fileCov=0.4022
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DGe] deps: dn, ADn, je, Bi, ys, HDn, xW, vn, Is, OB, bUt, kv
((m8i = require("crypto")),
  (Wce = require("path")),
  (SUt = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"],
  }));
IDn = /\.(png|jpe?g|gif|webp)$/i;
y8i = /^(?:[A-Za-z]:\\|\\\\)/;
function useClipboardImageHint(isFocused, enabled) {
  let { addNotification: n } = Li(),
    r = jat.useRef(isFocused),
    o = jat.useRef(0),
    s = jat.useRef(null),
    i = ks();
  jat.useEffect(() => {
    let a = r.current;
    if (((r.current = isFocused), !enabled || !isFocused || a)) return;
    if (s.current) s.current();
    return (
      (s.current = i.setTimeout(async () => {
        s.current = null;
        let l = Date.now();
        if (l - o.current < n6d) return;
        if (await g8i())
          ((o.current = l),
            n({
              key: NOTIFICATION_KEY,
              kind: "contextual",
              text: `Image in clipboard \xB7 ${eC("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
              priority: "immediate",
              timeoutMs: 8000,
            }));
      }, t6d)),
      () => {
        if (s.current) (s.current(), (s.current = null));
      }
    );
  }, [isFocused, enabled, n, i]);
}
var jat,
  NOTIFICATION_KEY = "clipboard-image-hint",
  t6d = 1000,
  n6d = 30000;
