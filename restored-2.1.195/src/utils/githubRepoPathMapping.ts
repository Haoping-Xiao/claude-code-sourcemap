// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yMc
// matched 2.1.88 source: src/utils/githubRepoPathMapping.ts
// class=modified  jaccard=0.1801  score=0.3177  fileCov=0.2938
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yMc] deps: er, je
RIm = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal",
};
class t7o {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(e) {
    let t = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = t;
    if (
      ((this.lastRenderTime = t),
      this.totalFrames++,
      this.frameDurations.push(e),
      this.frameDurations.length > 3600)
    )
      this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0)
      return;
    let e = this.lastRenderTime - this.firstRenderTime;
    if (e <= 0) return;
    let t = this.totalFrames / (e / 1000),
      n = this.frameDurations.slice().sort((i, a) => a - i),
      r = Math.max(0, Math.ceil(n.length * 0.01) - 1),
      o = n[r],
      s = o > 0 ? 1000 / o : 0;
    return {
      averageFps: Math.round(t * 100) / 100,
      low1PctFps: Math.round(s * 100) / 100,
    };
  }
}
async function bMc() {
  try {
    let e = await uCe();
    if (!e) {
      T("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let t = yr(),
      r = Tu(t) ?? t,
      o;
    try {
      o = o_(await _Mc.realpath(r));
    } catch {
      o = r;
    }
    let s = e.toLowerCase(),
      a = Dt().githubRepoPaths?.[s] ?? [];
    if (a[0] === o) {
      T(`Path ${o} already tracked for repo ${s}`);
      return;
    }
    let l = a.filter((u) => u !== o),
      c = [o, ...l];
    (gn((u) => ({
      ...u,
      githubRepoPaths: {
        ...u.githubRepoPaths,
        [s]: c,
      },
    })),
      T(`Added ${o} to tracked paths for repo ${s}`));
  } catch (e) {
    T(`Error updating repo path mapping: ${e}`);
  }
}
function Zfr(e) {
  let t = Dt(),
    n = e.toLowerCase();
  return t.githubRepoPaths?.[n] ?? [];
}
async function emr(e) {
  let t = await Promise.all(e.map(ed));
  return e.filter((n, r) => t[r]);
}
async function SMc(e, t) {
  try {
    let n = await bRt(e);
    if (!n) return false;
    let r = zFe(n);
    if (!r) return false;
    return r.toLowerCase() === t.toLowerCase();
  } catch {
    return false;
  }
}
function EMc(e, t) {
  let n = Dt(),
    r = e.toLowerCase(),
    o = n.githubRepoPaths?.[r] ?? [],
    s = o.filter((a) => a !== t);
  if (s.length === o.length) return;
  let i = {
    ...n.githubRepoPaths,
  };
  if (s.length === 0) delete i[r];
  else i[r] = s;
  (gn((a) => ({
    ...a,
    githubRepoPaths: i,
  })),
    T(`Removed ${t} from tracked paths for repo ${r}`));
}
var _Mc;
