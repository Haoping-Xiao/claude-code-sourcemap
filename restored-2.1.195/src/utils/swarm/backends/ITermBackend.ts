// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T0o
// matched 2.1.88 source: src/utils/swarm/backends/ITermBackend.ts
// class=modified  jaccard=0.5669  score=0.8922  fileCov=0.6086
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: ITermBackend
// [unwrapped __esm module T0o] deps: dn, je, Bi, hN, qJ, cAe, d9t
hhl = Promise.resolve();
v0o(H0o);
function bff() {
  let e,
    t = new Promise((r) => {
      e = r;
    }),
    n = Shl;
  return ((Shl = t), n.then(() => e));
}
function Z6t(e) {
  return $n(EHo(), e);
}
function Sff(e) {
  let t = e.match(/Created new pane:\s*(.+)/);
  if (t && t[1]) return t[1].trim();
  return "";
}
function Eff() {
  let e = process.env.ITERM_SESSION_ID;
  if (!e) return null;
  let t = e.indexOf(":");
  if (t === -1) return null;
  return e.slice(t + 1);
}
class ITermBackend {
  type = "iterm2";
  displayName = "iTerm2";
  supportsHideShow = false;
  async isAvailable() {
    let e = $6();
    if ((T(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e))
      return (T("[ITermBackend] isAvailable: false (not in iTerm2)"), false);
    let t = await lht();
    return (T(`[ITermBackend] isAvailable: ${t} (it2 CLI ${t ? "found" : "not found"})`), t);
  }
  async isRunningInside() {
    let e = $6();
    return (T(`[ITermBackend] isRunningInside: ${e}`), e);
  }
  async createTeammatePaneInSwarmView(e, t) {
    T(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${t}`);
    let n = await bff();
    try {
      while (true) {
        let r = !x7n;
        T(`[ITermBackend] Creating pane: isFirstTeammate=${r}, existingPanes=${zAe.length}`);
        let o, s;
        if (r) {
          let l = Eff();
          if (l)
            ((o = ["session", "split", "-v", "-s", l]),
              T(`[ITermBackend] First split from leader session: ${l}`));
          else
            ((o = ["session", "split", "-v"]),
              T("[ITermBackend] First split from active session (no leader ID)"));
        } else if (((s = zAe.at(-1)), s))
          ((o = ["session", "split", "-s", s]),
            T(`[ITermBackend] Subsequent split from teammate session: ${s}`));
        else
          ((o = ["session", "split"]),
            T("[ITermBackend] Subsequent split from active session (no teammate ID)"));
        let i = await Z6t(o);
        if (i.code !== 0) {
          if (s) {
            let l = await Z6t(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(s)) {
              T(
                `[ITermBackend] Split failed targeting dead session ${s}, pruning and retrying: ${i.stderr}`,
              );
              let c = zAe.indexOf(s);
              if (c !== -1) zAe.splice(c, 1);
              if (zAe.length === 0) x7n = false;
              continue;
            }
          }
          throw new IF(`Failed to create iTerm2 split pane: ${i.stderr}`);
        }
        if (r) x7n = true;
        let a = Sff(i.stdout);
        if (!a) throw Error(`Failed to parse session ID from split output: ${i.stdout}`);
        return (
          T(`[ITermBackend] Created teammate pane for ${e}: ${a}`),
          zAe.push(a),
          {
            paneId: a,
            isFirstTeammate: r,
          }
        );
      }
    } finally {
      n();
    }
  }
  async sendCommandToPane(e, t, n) {
    try {
      Lht(t);
    } catch (s) {
      throw (Le("swarm_pane_spawn", "swarm_pane_command_control_chars"), s);
    }
    let r = e ? ["-s", e] : [];
    await Z6t(["session", "send", ...r, "\x15"]);
    let o = await Z6t(["session", "run", ...r, t]);
    if (o.code !== 0) throw new IF(`Failed to send command to iTerm2 pane ${e}: ${o.stderr}`);
  }
  async setPaneBorderColor(e, t, n) {}
  async setPaneTitle(e, t, n, r) {}
  async enablePaneBorderStatus(e, t) {}
  async rebalancePanes(e, t) {
    T("[ITermBackend] Pane rebalancing not implemented for iTerm2");
  }
  async killPane(e, t) {
    let n = await Z6t(["session", "close", "-f", "-s", e]),
      r = zAe.indexOf(e);
    if (r !== -1) zAe.splice(r, 1);
    if (zAe.length === 0) x7n = false;
    return n.code === 0;
  }
  async hidePane(e, t) {
    return (T("[ITermBackend] hidePane not supported in iTerm2"), false);
  }
  async showPane(e, t, n) {
    return (T("[ITermBackend] showPane not supported in iTerm2"), false);
  }
}
var zAe,
  x7n = false,
  Shl;
