// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f7r
// matched 2.1.88 source: src/utils/earlyInput.ts
// class=modified  jaccard=0.7222  score=0.8461  fileCov=0.8314
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module f7r]
((c2i = R(rt(), 1)), (u2i = c2i.createContext(false)));
u2i.displayName = "InternalAccessibilityContext";
yRn = u2i;
var h7r = {};
_t(h7r, {
  stopCapturingEarlyInput: () => stopCapturingEarlyInput,
  startCapturingEarlyInput: () => startCapturingEarlyInput,
  seedEarlyInput: () => seedEarlyInput,
  processChunk: () => processChunk,
  isCapturingEarlyInput: () => isCapturingEarlyInput,
  hasEarlyInput: () => hasEarlyInput,
  consumeEarlyInput: () => consumeEarlyInput,
});
function startCapturingEarlyInput() {
  if (
    !process.stdin.isTTY ||
    Dit ||
    process.argv.includes("-p") ||
    process.argv.includes("--print")
  )
    return;
  ((Dit = true), (fne = ""));
  try {
    (process.stdin.setEncoding("utf8"),
      process.stdin.setRawMode(true),
      process.stdin.ref(),
      (iBt = () => {
        let e = process.stdin.read();
        while (e !== null) {
          if (typeof e === "string") processChunk(e);
          e = process.stdin.read();
        }
      }),
      process.stdin.on("readable", iBt));
  } catch {
    Dit = false;
  }
}
function processChunk(e) {
  let t = 0;
  while (t < e.length) {
    let n = e[t],
      r = n.charCodeAt(0);
    if (r === 3) {
      (stopCapturingEarlyInput(), process.exit(130));
      return;
    }
    if (r === 4) {
      stopCapturingEarlyInput();
      return;
    }
    if (r === 127 || r === 8) {
      if (fne.length > 0) {
        let o = GK(fne);
        fne = fne.slice(0, -(o.length || 1));
      }
      t++;
      continue;
    }
    if (r === 27) {
      t++;
      let o = t < e.length ? e.charCodeAt(t) : -1;
      if (o === 91) {
        t++;
        while (t < e.length && e.charCodeAt(t) < 64) t++;
        if (t < e.length) t++;
      } else if (o === 93 || o === 80 || o === 88 || o === 94 || o === 95) {
        t++;
        while (t < e.length) {
          let s = e.charCodeAt(t);
          if (s === 7) {
            t++;
            break;
          }
          if (s === 27 && t + 1 < e.length && e.charCodeAt(t + 1) === 92) {
            t += 2;
            break;
          }
          t++;
        }
      } else if (o === 79) t += 2;
      else if (o !== -1 && o !== 27) t++;
      continue;
    }
    if (r < 32 && r !== 9 && r !== 10 && r !== 13) {
      t++;
      continue;
    }
    if (r === 13) {
      ((fne += `
`),
        t++);
      continue;
    }
    ((fne += n), t++);
  }
}
function stopCapturingEarlyInput() {
  if (!Dit) return;
  if (((Dit = false), iBt)) (process.stdin.removeListener("readable", iBt), (iBt = null));
}
function consumeEarlyInput() {
  stopCapturingEarlyInput();
  let e = fne.trim();
  return ((fne = ""), e);
}
function hasEarlyInput() {
  return fne.trim().length > 0;
}
function seedEarlyInput(e) {
  fne = e;
}
function isCapturingEarlyInput() {
  return Dit;
}
var fne = "",
  Dit = false,
  iBt = null;
