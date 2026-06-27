// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ghl
// matched 2.1.88 source: src/utils/swarm/backends/TmuxBackend.ts
// class=modified  jaccard=0.6082  score=0.8177  fileCov=0.7037
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: respawnPaneWithCommand, TmuxBackend
function yhl(e) {
  let t = `Failed to create teammate pane: ${e}`,
    n = e.toLowerCase();
  return n.includes("no space") || n.includes("too small")
    ? `${t} \u2014 no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.`
    : t;
}
function _ff() {
  let e,
    t = new Promise((r) => {
      e = r;
    }),
    n = hhl;
  return ((hhl = t), n.then(() => e));
}
function _hl(e) {
  return {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan",
  }[e];
}
function i3(e) {
  let t = R9n(),
    n = t ? ["-S", t, ...e] : e;
  return $n(M6, n);
}
function jF(e) {
  return $n(M6, ["-L", wVt(), ...e]);
}
async function respawnPaneWithCommand(e, t, n) {
  await $n(M6, [...e, "set-option", "-p", "-t", t, "remain-on-exit", "failed"]);
  let r = await $n(M6, [...e, "respawn-pane", "-k", "-t", t, "--", n]);
  if (r.code !== 0) throw new IF(`Failed to send command to pane ${t}: ${r.stderr}`);
}
class TmuxBackend {
  type = "tmux";
  displayName = "tmux";
  supportsHideShow = true;
  cachedLeaderWindowTarget = null;
  firstPaneUsedForExternal = false;
  async isAvailable() {
    return YPe();
  }
  async isRunningInside() {
    return coe();
  }
  async createTeammatePaneInSwarmView(e, t) {
    let n = await _ff();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(e, t);
      return await this.createTeammatePaneExternal(e, t);
    } finally {
      n();
    }
  }
  async sendCommandToPane(e, t, n = false) {
    try {
      Lht(t);
    } catch (s) {
      throw (Le("swarm_pane_spawn", "swarm_pane_command_control_chars"), s);
    }
    let r = R9n(),
      o = n ? ["-L", wVt()] : r ? ["-S", r] : [];
    await respawnPaneWithCommand(o, e, t);
  }
  async setPaneBorderColor(e, t, n = false) {
    let r = _hl(t),
      o = n ? jF : i3;
    (await o(["set-option", "-p", "-t", e, "window-style", `bg=default,fg=${r}`]),
      await o(["set-option", "-p", "-t", e, "pane-border-style", `fg=${r}`]),
      await o(["set-option", "-p", "-t", e, "pane-active-border-style", `fg=${r}`]));
  }
  async setPaneTitle(e, t, n, r = false) {
    let o = _hl(n),
      s = r ? jF : i3;
    (await s(["select-pane", "-t", e, "-T", t]),
      await s([
        "set-option",
        "-p",
        "-t",
        e,
        "pane-border-format",
        `#[fg=${o},bold] #{pane_title} #[default]`,
      ]));
  }
  async enablePaneBorderStatus(e, t = false) {
    let n = e || (await this.getCurrentWindowTarget());
    if (!n) return;
    await (t ? jF : i3)(["set-option", "-w", "-t", n, "pane-border-status", "top"]);
  }
  async rebalancePanes(e, t) {
    if (t) await this.rebalancePanesWithLeader(e);
    else await this.rebalancePanesTiled(e);
  }
  async killPane(e, t = false) {
    return (await (t ? jF : i3)(["kill-pane", "-t", e])).code === 0;
  }
  async hidePane(e, t = false) {
    let n = t ? jF : i3;
    await n(["new-session", "-d", "-s", _Ho]);
    let r = await n(["break-pane", "-d", "-s", e, "-t", `${_Ho}:`]);
    if (r.code === 0) T(`[TmuxBackend] Hidden pane ${e}`);
    else T(`[TmuxBackend] Failed to hide pane ${e}: ${r.stderr}`);
    return r.code === 0;
  }
  async showPane(e, t, n = false) {
    let r = n ? jF : i3,
      o = await r(["join-pane", "-h", "-s", e, "-t", t]);
    if (o.code !== 0) return (T(`[TmuxBackend] Failed to show pane ${e}: ${o.stderr}`), false);
    (T(`[TmuxBackend] Showed pane ${e} in ${t}`),
      await r(["select-layout", "-t", t, "main-vertical"]));
    let i = (await r(["list-panes", "-t", t, "-F", "#{pane_id}"])).stdout
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean);
    if (i[0]) await r(["resize-pane", "-t", i[0], "-x", "30%"]);
    return true;
  }
  async getCurrentPaneId() {
    let e = k9n();
    if (e) return e;
    let t = await i3(["display-message", "-p", "#{pane_id}"]);
    if (t.code !== 0)
      return (T(`[TmuxBackend] Failed to get current pane ID (exit ${t.code}): ${t.stderr}`), null);
    return t.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (this.cachedLeaderWindowTarget) return this.cachedLeaderWindowTarget;
    let e = k9n(),
      t = ["display-message"];
    if (e) t.push("-t", e);
    t.push("-p", "#{window_id}");
    let n = await i3(t);
    if (n.code !== 0)
      return (
        T(`[TmuxBackend] Failed to get current window target (exit ${n.code}): ${n.stderr}`),
        null
      );
    return ((this.cachedLeaderWindowTarget = n.stdout.trim()), this.cachedLeaderWindowTarget);
  }
  async getCurrentWindowPaneCount(e, t = false) {
    let n = e || (await this.getCurrentWindowTarget());
    if (!n) return null;
    let r = ["list-panes", "-t", n, "-F", "#{pane_id}"],
      o = t ? await jF(r) : await i3(r);
    if (o.code !== 0)
      return (
        T(`[TmuxBackend] Failed to get pane count for ${n} (exit ${o.code}): ${o.stderr}`, {
          level: "error",
        }),
        null
      );
    return On(
      o.stdout.trim().split(`
`),
      Boolean,
    );
  }
  async hasSessionInSwarm(e) {
    return (await jF(["has-session", "-t", e])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!(await this.hasSessionInSwarm(P6))) {
      let s = await jF([
        "new-session",
        "-d",
        "-s",
        P6,
        "-n",
        oht,
        "-P",
        "-F",
        "#{pane_id}",
        "--",
        KPe,
      ]);
      if (s.code !== 0)
        throw new IF(`Failed to create swarm session: ${s.stderr || "Unknown error"}`);
      let i = s.stdout.trim(),
        a = `${P6}:${oht}`;
      return (
        T(`[TmuxBackend] Created external swarm session with window ${a}, pane ${i}`),
        {
          windowTarget: a,
          paneId: i,
        }
      );
    }
    let n = (await jF(["list-windows", "-t", P6, "-F", "#{window_name}"])).stdout
        .trim()
        .split(
          `
`,
        )
        .filter(Boolean),
      r = `${P6}:${oht}`;
    if (n.includes(oht)) {
      let i = (await jF(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout
        .trim()
        .split(
          `
`,
        )
        .filter(Boolean);
      return {
        windowTarget: r,
        paneId: i[0] || "",
      };
    }
    let o = await jF(["new-window", "-t", P6, "-n", oht, "-P", "-F", "#{pane_id}", "--", KPe]);
    if (o.code !== 0)
      throw new IF(`Failed to create swarm-view window: ${o.stderr || "Unknown error"}`);
    return {
      windowTarget: r,
      paneId: o.stdout.trim(),
    };
  }
  async createTeammatePaneWithLeader(e, t) {
    let n = await this.getCurrentPaneId(),
      r = await this.getCurrentWindowTarget();
    if (!n || !r) throw new IF("Could not determine current tmux pane/window");
    let o = await this.getCurrentWindowPaneCount(r);
    if (o === null) throw new IF("Could not determine pane count for current window");
    let s = o === 1,
      i;
    if (s)
      i = await i3([
        "split-window",
        "-d",
        "-t",
        n,
        "-h",
        "-l",
        "70%",
        "-P",
        "-F",
        "#{pane_id}",
        "--",
        KPe,
      ]);
    else {
      let u = (await i3(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout
          .trim()
          .split(
            `
`,
          )
          .filter(Boolean)
          .slice(1),
        d = u.length,
        p = d % 2 === 1,
        f = Math.floor((d - 1) / 2),
        m = u[f] || u.at(-1);
      i = await i3([
        "split-window",
        "-d",
        "-t",
        m,
        p ? "-v" : "-h",
        "-P",
        "-F",
        "#{pane_id}",
        "--",
        KPe,
      ]);
    }
    if (i.code !== 0) throw new IF(yhl(i.stderr));
    let a = i.stdout.trim();
    return (
      T(`[TmuxBackend] Created teammate pane for ${e}: ${a}`),
      await this.setPaneBorderColor(a, t),
      await this.setPaneTitle(a, e, t),
      await this.rebalancePanesWithLeader(r),
      {
        paneId: a,
        isFirstTeammate: s,
      }
    );
  }
  async createTeammatePaneExternal(e, t) {
    let { windowTarget: n, paneId: r } = await this.createExternalSwarmSession(),
      o = await this.getCurrentWindowPaneCount(n, true);
    if (o === null) throw new IF("Could not determine pane count for swarm window");
    let s = !this.firstPaneUsedForExternal && o === 1,
      i;
    if (s)
      ((i = r),
        (this.firstPaneUsedForExternal = true),
        T(`[TmuxBackend] Using initial pane for first teammate ${e}: ${i}`),
        await this.enablePaneBorderStatus(n, true));
    else {
      let l = (await jF(["list-panes", "-t", n, "-F", "#{pane_id}"])).stdout
          .trim()
          .split(
            `
`,
          )
          .filter(Boolean),
        c = l.length,
        u = c % 2 === 1,
        d = Math.floor((c - 1) / 2),
        p = l[d] || l.at(-1),
        f = await jF([
          "split-window",
          "-d",
          "-t",
          p,
          u ? "-v" : "-h",
          "-P",
          "-F",
          "#{pane_id}",
          "--",
          KPe,
        ]);
      if (f.code !== 0) throw new IF(yhl(f.stderr));
      ((i = f.stdout.trim()), T(`[TmuxBackend] Created teammate pane for ${e}: ${i}`));
    }
    return (
      await this.setPaneBorderColor(i, t, true),
      await this.setPaneTitle(i, e, t, true),
      await this.rebalancePanesTiled(n),
      {
        paneId: i,
        isFirstTeammate: s,
      }
    );
  }
  async rebalancePanesWithLeader(e) {
    let n = (await i3(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean);
    if (n.length <= 2) return;
    await i3(["select-layout", "-t", e, "main-vertical"]);
    let r = n[0];
    (await i3(["resize-pane", "-t", r, "-x", "30%"]),
      T(`[TmuxBackend] Rebalanced ${n.length - 1} teammate panes with leader`));
  }
  async rebalancePanesTiled(e) {
    let n = (await jF(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean);
    if (n.length <= 1) return;
    (await jF(["select-layout", "-t", e, "tiled"]),
      T(`[TmuxBackend] Rebalanced ${n.length} teammate panes with tiled layout`));
  }
}
var hhl;
