// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lx
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0077  score=0.3228  fileCov=0.0078
// note: nearest: src/main.tsx (0.0077); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lx = E(() => {
  wr();
  fn();
  F0u = new Set(["cli", "mcp", "sdk-cli", "sdk-ts", "sdk-py", "bench", "claude-vscode", "claude-code-github-action", "local-agent", "claude-desktop", "remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_desktop", "remote_mobile", "claude_in_slack", "claude-in-slack", "claude-in-teams", "claude-desktop-3p", "claude-security", "ssh-remote"]);
  j0u = new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
  G0u = new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork", "remote_baku"]);
});
function V0u() {
  let e = new Map();
  for (let [t, n] of Object.entries(Rw)) {
    for (let [r, o] of Object.entries(n)) Rw[r] = {
      open: `\x1B[${o[0]}m`,
      close: `\x1B[${o[1]}m`
    }, n[r] = Rw[r], e.set(o[0], o[1]);
    Object.defineProperty(Rw, t, {
      value: n,
      enumerable: !1
    });
  }
  return Object.defineProperty(Rw, "codes", {
    value: e,
    enumerable: !1
  }), Rw.color.close = "\x1B[39m", Rw.bgColor.close = "\x1B[49m", Rw.color.ansi = pbs(), Rw.color.ansi256 = fbs(), Rw.color.ansi16m = mbs(), Rw.bgColor.ansi = pbs(10), Rw.bgColor.ansi256 = fbs(10), Rw.bgColor.ansi16m = mbs(10), Object.defineProperties(Rw, {
    rgbToAnsi256: {
      value(t, n, r) {
        if (t === n && n === r) {
          if (t < 8) return 16;
          if (t > 248) return 231;
          return Math.round((t - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(t) {
        let n = /[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));
        if (!n) return [0, 0, 0];
        let [r] = n;
        if (r.length === 3) r = [...r].map(s => s + s).join("");
        let o = Number.parseInt(r, 16);
        return [o >> 16 & 255, o >> 8 & 255, o & 255];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: t => Rw.rgbToAnsi256(...Rw.hexToRgb(t)),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(t) {
        if (t < 8) return 30 + t;
        if (t < 16) return 90 + (t - 8);
        let n, r, o;
        if (t >= 232) n = ((t - 232) * 10 + 8) / 255, r = n, o = n;else {
          t -= 16;
          let a = t % 36;
          n = Math.floor(t / 36) / 5, r = Math.floor(a / 6) / 5, o = a % 6 / 5;
        }
        let s = Math.max(n, r, o) * 2;
        if (s === 0) return 30;
        let i = 30 + (Math.round(o) << 2 | Math.round(r) << 1 | Math.round(n));
        if (s === 2) i += 60;
        return i;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: (t, n, r) => Rw.ansi256ToAnsi(Rw.rgbToAnsi256(t, n, r)),
      enumerable: !1
    },
    hexToAnsi: {
      value: t => Rw.ansi256ToAnsi(Rw.hexToAnsi256(t)),
      enumerable: !1
    }
  }), Rw;
}
var pbs = (e = 0) => t => `\x1B[${t + e}m`,
  fbs = (e = 0) => t => `\x1B[${38 + e};5;${t}m`,
  mbs = (e = 0) => (t, n, r) => `\x1B[${38 + e};2;${t};${n};${r}m`,
  Rw,
  Tig,
  W0u,
  q0u,
  vig,
  z0u,
  $ee;