// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oyc
// matched 2.1.88 source: src/utils/suggestions/commandSuggestions.ts
// class=modified  jaccard=0.1847  score=0.1963  fileCov=0.7564
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oyc = E(() => {
  rpm = {
    advisor: "config",
    agents: "config",
    autocompact: "config",
    brief: "config",
    channel: "config",
    chrome: "config",
    color: "config",
    config: "config",
    effort: "config",
    env: "config",
    experiments: "config",
    "extra-usage": "config",
    fast: "config",
    focus: "config",
    goal: "config",
    hooks: "config",
    ide: "config",
    "install-github-app": "config",
    "install-slack-app": "config",
    issue: "config",
    keybindings: "config",
    mcp: "config",
    memory: "config",
    model: "config",
    "output-style": "config",
    passes: "config",
    "pause-memory": "config",
    permissions: "config",
    plan: "config",
    plugin: "config",
    powerup: "config",
    pride: "config",
    "privacy-settings": "config",
    "pro-trial-expired": "config",
    "rate-limit-options": "config",
    "remote-control": "config",
    "remote-env": "config",
    sandbox: "config",
    "scroll-speed": "config",
    "setup-bedrock": "config",
    "setup-vertex": "config",
    "terminal-setup": "config",
    theme: "config",
    tui: "config",
    upgrade: "config",
    "usage-credits": "config",
    vim: "config",
    voice: "config",
    "web-setup": "config",
    wellbeing: "config",
    "add-dir": "action",
    "ant-trace": "action",
    "backfill-sessions": "action",
    background: "action",
    branch: "action",
    btw: "action",
    cd: "action",
    clear: "action",
    compact: "action",
    copy: "action",
    "debug-tool-call": "action",
    desktop: "action",
    exit: "action",
    export: "action",
    feedback: "action",
    heapdump: "action",
    "design-login": "action",
    login: "action",
    logout: "action",
    "mock-limits": "action",
    "oauth-refresh": "action",
    onboarding: "action",
    "perf-issue": "action",
    radio: "action",
    "reload-plugins": "action",
    "reload-skills": "action",
    rename: "action",
    "reset-limits": "action",
    resume: "action",
    "simulate-usage": "action",
    rewind: "action",
    stickers: "action",
    stop: "action",
    teleport: "action",
    update: "action",
    context: "info",
    diff: "info",
    doctor: "info",
    help: "info",
    "input-debug": "info",
    mobile: "info",
    recap: "info",
    "release-notes": "info",
    "render-debug": "info",
    session: "info",
    skills: "info",
    status: "info",
    usage: "info",
    version: "info",
    "autofix-pr": "agent",
    autopilot: "agent",
    bugfix: "agent",
    daemon: "agent",
    dashboard: "agent",
    docs: "agent",
    fork: "agent",
    investigate: "agent",
    schedule: "agent",
    "list-agents": "agent",
    loops: "agent",
    tasks: "agent",
    ultraplan: "agent",
    ultrareview: "agent",
    workflows: "agent",
  };
});
function opm(e) {
  if (c6o?.commands === e) return c6o.fuse;
  let t = e
      .filter((r) => !r.isHidden)
      .map((r) => {
        let o = r.name,
          s = xu(r),
          i = o.split(syc).filter(Boolean),
          a = s !== o ? s.split(syc).filter(Boolean) : [];
        return {
          descriptionKey: (r.description ?? "")
            .split(" ")
            .map((l) => ppm(l))
            .filter(Boolean),
          partKey: i.length > 1 ? i : void 0,
          displayPartKey: a.length > 1 ? a : void 0,
          commandName: o,
          displayName: s,
          command: r,
          aliasKey: r.aliases,
        };
      }),
    n = new oZ(t, {
      includeScore: !0,
      threshold: 0.3,
      location: 0,
      distance: 100,
      keys: [
        {
          name: "commandName",
          weight: 3,
        },
        {
          name: "displayName",
          weight: 2,
        },
        {
          name: "partKey",
          weight: 2,
        },
        {
          name: "aliasKey",
          weight: 2,
        },
        {
          name: "displayPartKey",
          weight: 1,
        },
        {
          name: "descriptionKey",
          weight: 0.5,
        },
      ],
    });
  return (
    (c6o = {
      commands: e,
      fuse: n,
    }),
    n
  );
}
function iyc(e) {
  return (
    typeof e === "object" && e !== null && "name" in e && typeof e.name === "string" && "type" in e
  );
}
function udr(e, t) {
  if (e.startsWith("/")) {
    let l = e.indexOf(" "),
      c = l === -1 ? e.slice(1) : e.slice(1, l);
    if (spm.has(c)) return null;
  }
  let r = e.slice(0, t).match(/[\s\u3002\u3001\uFF1F\uFF01]\/([a-zA-Z0-9._:-]*)$/);
  if (!r || r.index === void 0) return null;
  let o = r.index + 1,
    i = e.slice(o + 1).match(/^[a-zA-Z0-9._:-]*/),
    a = i ? i[0] : "";
  if (t > o + 1 + a.length) return null;
  return {
    token: "/" + a,
    startPos: o,
    partialCommand: a,
  };
}
function d6o(e, t) {
  if (!e) return null;
  let n = f6o("/" + e, t);
  if (n.length === 0) return null;
  let r = e.toLowerCase();
  for (let o of n) {
    if (!iyc(o.metadata)) continue;
    for (let s of [o.metadata.name, xu(o.metadata)])
      if (s.toLowerCase().startsWith(r)) {
        let i = s.slice(e.length);
        if (i)
          return {
            suffix: i,
            fullCommand: s,
          };
      }
  }
  return null;
}
function p6o(e) {
  return !/[^a-zA-Z0-9.:\-_]/.test(e);
}
function f7e(e) {
  if (!e.startsWith("/")) return !1;
  let t = e.indexOf(" "),
    n = t === -1 ? e.slice(1) : e.slice(1, t);
  if (p6o(n)) return !0;
  let r = n.indexOf(":");
  return r > 0 && wKn(n.slice(0, r)) && n.slice(r + 1).includes("://");
}
function ipm(e) {
  if (!f7e(e)) return !1;
  if (!e.includes(" ")) return !1;
  if (e.endsWith(" ")) return !1;
  return !0;
}
function apm(e) {
  return `/${e} `;
}
function cdr(e) {
  let t = e.name;
  if (e.type === "prompt") {
    if (e.source === "plugin" && e.pluginInfo?.repository)
      return `${t}:${e.source}:${e.pluginInfo.repository}`;
    return `${t}:${e.source}`;
  }
  return `${t}:${e.type}`;
}
function lpm(e, t) {
  if (!t || t.length === 0 || e === "") return;
  return t.find((n) => n.toLowerCase().startsWith(e));
}
function cpm() {
  return Oe.CLAUDE_CODE_ENABLE_MENU_KIND_LANES || at("tengu_mint_lanes", !1);
}
function upm(e) {
  return !1;
}
function dpm(e) {
  if (e.type !== "prompt") return upm(e.name) ? "ANT" : void 0;
  switch (ryc(e)) {
    case "project":
      return "project";
    case "plugin":
    case "managed":
      return "org";
    default:
      return;
  }
}
function u6o(e, t, n, r) {
  let o = xu(e),
    s = n ? ` (${n})` : "",
    i = e.type === "prompt" && e.kind === "workflow",
    l =
      (t ? (e.menuDescription ?? e.description) : i ? e.description : yse(e)) +
      (e.type === "prompt" && e.argNames?.length ? ` (arguments: ${e.argNames.join(", ")})` : "");
  return {
    id: cdr(e),
    displayText: `/${o}${s}`,
    tag: i ? "dynamic workflow" : void 0,
    description: l,
    metadata: e,
    matchedAlias: n,
    query: r,
    ...(t && {
      kind: nyc(e),
      sourceTag: dpm(e),
    }),
  };
}
function f6o(e, t) {
  if (!f7e(e)) return [];
  if (ipm(e)) return [];
  t = EYt(t);
  let n = e.slice(1).toLowerCase().trim(),
    r = cpm();
  if (n === "") {
    let d = t.filter((A) => !A.isHidden && !Poe(A)),
      p = [],
      f = d
        .filter((A) => A.type === "prompt")
        .map((A) => ({
          cmd: A,
          score: P8e(A.name),
        }))
        .filter((A) => A.score > 0)
        .sort((A, v) => v.score - A.score);
    for (let A of f.slice(0, 5)) p.push(A.cmd);
    let m = new Set(p.map((A) => cdr(A))),
      g = [],
      h = [],
      y = [],
      b = [],
      _ = [];
    d.forEach((A) => {
      if (m.has(cdr(A))) return;
      if (A.type === "local" || A.type === "local-jsx") g.push(A);
      else if (A.type === "prompt" && (A.source === "userSettings" || A.source === "localSettings"))
        h.push(A);
      else if (A.type === "prompt" && A.source === "projectSettings") y.push(A);
      else if (A.type === "prompt" && A.source === "policySettings") b.push(A);
      else _.push(A);
    });
    let S = (A, v) => xu(A).localeCompare(xu(v));
    return (
      g.sort(S),
      h.sort(S),
      y.sort(S),
      b.sort(S),
      _.sort(S),
      [...p, ...g, ...h, ...y, ...b, ..._].map((A) => u6o(A, r))
    );
  }
  let o = (d) => xu(d).toLowerCase() === n || d.name.toLowerCase() === n,
    s = t.find((d) => d.isHidden && o(d));
  if (s && t.some((d) => !d.isHidden && o(d))) s = void 0;
  let u = opm(t)
    .search(n)
    .filter((d) => !Poe(d.item.command))
    .map((d) => {
      let p = d.item.commandName.toLowerCase(),
        f = d.item.displayName.toLowerCase(),
        m = d.item.aliasKey?.map((h) => h.toLowerCase()) ?? [],
        g = d.item.command.type === "prompt" ? P8e(d.item.command.name) : 0;
      return {
        r: d,
        name: p,
        display: f,
        aliases: m,
        usage: g,
      };
    })
    .sort((d, p) => {
      let f = d.name,
        m = p.name,
        g = d.aliases,
        h = p.aliases,
        y = f === n || d.display === n,
        b = m === n || p.display === n;
      if (y && !b) return -1;
      if (b && !y) return 1;
      let _ = g.some((L) => L === n),
        S = h.some((L) => L === n);
      if (_ && !S) return -1;
      if (S && !_) return 1;
      let A = (L, M) =>
          Math.min(L.startsWith(n) ? L.length : 1 / 0, M.startsWith(n) ? M.length : 1 / 0),
        v = A(f, d.display),
        C = A(m, p.display),
        x = v < 1 / 0,
        I = C < 1 / 0;
      if (x && !I) return -1;
      if (I && !x) return 1;
      if (x && I && v !== C) return v - C;
      let k = g.find((L) => L.startsWith(n)),
        D = h.find((L) => L.startsWith(n));
      if (k && !D) return -1;
      if (D && !k) return 1;
      if (k && D && k.length !== D.length) return k.length - D.length;
      let P = Math.floor((d.r.score ?? 0) * 10),
        O = Math.floor((p.r.score ?? 0) * 10);
      if (P !== O) return P - O;
      return p.usage - d.usage;
    })
    .map((d) => {
      let p = d.r.item.command,
        f = lpm(n, p.aliases);
      return u6o(p, r, f, n);
    });
  if (s) {
    let d = cdr(s);
    if (!u.some((p) => p.id === d)) return [u6o(s, r, void 0, n), ...u];
  }
  return u;
}
function m6o(e, t, n, r, o, s) {
  if (typeof e !== "string") {
    let c = kyt(e.metadata);
    if (c) {
      let u = c.replacement;
      if ((r(u), o(u.length), t && !c.partial)) s(u.trim(), !0);
      return {
        newInput: u,
        reSuggest: c.partial,
      };
    }
  }
  let i, a;
  if (typeof e === "string") ((i = e), (a = t ? h6e(i, n) : void 0));
  else {
    if (!iyc(e.metadata)) return null;
    let c = e.matchedAlias;
    ((i = c && fA(c, n) === e.metadata ? c : e.metadata.name), (a = e.metadata));
  }
  if (hk()) {
    if (a?.type === "prompt" && a.urlTemplate) {
      let c = `/${xu(a)}`;
      return (
        r(c),
        o(c.length),
        {
          newInput: c,
          reSuggest: !0,
        }
      );
    }
  }
  let l = apm(i);
  if ((r(l), o(l.length), t && a)) {
    if (a.type !== "prompt" || (a.argNames ?? []).length === 0) s(l, !0);
  }
  return {
    newInput: l,
    reSuggest: !1,
  };
}
function ppm(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}
var syc,
  c6o = null,
  spm;
