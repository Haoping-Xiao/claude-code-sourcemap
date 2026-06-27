// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Eor
// matched 2.1.88 source: src/components/LogoV2/ChannelsNotice.tsx
// class=modified  jaccard=0.3852  score=0.4606  fileCov=0.7017
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Eor = E(() => {
  Un();
  wr();
  yAt = {
    heading: "Learn the moves",
    body:
      "Quick lessons on the things power users do \u2014 plan mode, undo, " +
      "subagents, memory. About 5 minutes. Come back any time with /powerup.",
    banner:
      "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, " +
      "@-mentions, and how to teach Claude your rules.",
  };
});
function P5l() {
  let e = L5l.c(30),
    [t] = D5l.useState(m4f),
    { channels: n, disabled: r, is3P: o, policyBlocked: s, list: i, unmatched: a } = t;
  if (n.length === 0) return null;
  let l = n.some(f4f),
    c = Lsn() && l ? "Channels" : Lsn() ? "--dangerously-load-development-channels" : "--channels";
  if (o) {
    let f;
    if (e[0] !== c || e[1] !== i)
      ((f = t2.jsxs(w, {
        color: "warning",
        children: [c, " ignored (", i, ")"],
      })),
        (e[0] = c),
        (e[1] = i),
        (e[2] = f));
    else f = e[2];
    let m;
    if (e[3] === Symbol.for("react.memo_cache_sentinel"))
      ((m = t2.jsx(w, {
        dimColor: true,
        children: "Channels are not available on third-party providers",
      })),
        (e[3] = m));
    else m = e[3];
    let g;
    if (e[4] !== f)
      ((g = t2.jsxs(U, {
        flexDirection: "column",
        children: [f, m],
      })),
        (e[4] = f),
        (e[5] = g));
    else g = e[5];
    return g;
  }
  if (r) {
    let f;
    if (e[6] !== c || e[7] !== i)
      ((f = t2.jsxs(w, {
        color: "warning",
        children: [c, " ignored (", i, ")"],
      })),
        (e[6] = c),
        (e[7] = i),
        (e[8] = f));
    else f = e[8];
    let m;
    if (e[9] === Symbol.for("react.memo_cache_sentinel"))
      ((m = t2.jsx(w, {
        dimColor: true,
        children: "Channels are not currently available",
      })),
        (e[9] = m));
    else m = e[9];
    let g;
    if (e[10] !== f)
      ((g = t2.jsxs(U, {
        flexDirection: "column",
        children: [f, m],
      })),
        (e[10] = f),
        (e[11] = g));
    else g = e[11];
    return g;
  }
  if (s) {
    let f;
    if (e[12] !== c || e[13] !== i)
      ((f = t2.jsxs(w, {
        color: "warning",
        children: [c, " blocked by org policy (", i, ")"],
      })),
        (e[12] = c),
        (e[13] = i),
        (e[14] = f));
    else f = e[14];
    let m, g;
    if (e[15] === Symbol.for("react.memo_cache_sentinel"))
      ((m = t2.jsx(w, {
        dimColor: true,
        children: "Inbound messages will be silently dropped",
      })),
        (g = t2.jsx(w, {
          dimColor: true,
          children: "Have an administrator set channelsEnabled: true in managed settings to enable",
        })),
        (e[15] = m),
        (e[16] = g));
    else ((m = e[15]), (g = e[16]));
    let h;
    if (e[17] !== a) ((h = a.map(p4f)), (e[17] = a), (e[18] = h));
    else h = e[18];
    let y;
    if (e[19] !== f || e[20] !== h)
      ((y = t2.jsxs(U, {
        flexDirection: "column",
        children: [f, m, g, h],
      })),
        (e[19] = f),
        (e[20] = h),
        (e[21] = y));
    else y = e[21];
    return y;
  }
  let u;
  if (e[22] !== c || e[23] !== i)
    ((u = t2.jsxs(w, {
      dimColor: true,
      children: [
        "Channels (experimental) messages from ",
        i,
        " inject directly in this session \xB7 restart without ",
        c,
        " to stop",
      ],
    })),
      (e[22] = c),
      (e[23] = i),
      (e[24] = u));
  else u = e[24];
  let d;
  if (e[25] !== a) ((d = a.map(d4f)), (e[25] = a), (e[26] = d));
  else d = e[26];
  let p;
  if (e[27] !== u || e[28] !== d)
    ((p = t2.jsxs(U, {
      flexDirection: "column",
      children: [u, d],
    })),
      (e[27] = u),
      (e[28] = d),
      (e[29] = p));
  else p = e[29];
  return p;
}
function d4f(e) {
  return t2.jsxs(
    w,
    {
      color: "warning",
      children: [VXt(e.entry), " \xB7 ", e.why],
    },
    `${VXt(e.entry)}:${e.why}`,
  );
}
function p4f(e) {
  return t2.jsxs(
    w,
    {
      color: "warning",
      children: [VXt(e.entry), " \xB7 ", e.why],
    },
    `${VXt(e.entry)}:${e.why}`,
  );
}
function f4f(e) {
  return !e.dev;
}
function m4f() {
  let e = MA();
  if (e.length === 0)
    return {
      channels: e,
      disabled: false,
      is3P: false,
      policyBlocked: false,
      list: "",
      unmatched: [],
    };
  let t = e.map(VXt).join(", "),
    n = yn("policySettings"),
    r = $Yn(n?.allowedChannelPlugins);
  return {
    channels: e,
    disabled: !GAe(),
    is3P: fr() !== "firstParty",
    policyBlocked: q_t(n),
    list: t,
    unmatched: g4f(e, r),
  };
}
function VXt(e) {
  return e.kind === "plugin" ? `plugin:${e.name}@${e.marketplace}` : `server:${e.name}`;
}
function g4f(e, t) {
  let n = ["enterprise", "user", "project", "local"],
    r = new Set();
  for (let l of n) for (let c of Object.keys(bT(l).servers)) r.add(c);
  let o = Object.keys(ex().plugins),
    { entries: s, source: i } = t,
    a = [];
  for (let l of e) {
    if (l.kind === "server") {
      if (!r.has(l.name))
        a.push({
          entry: l,
          why: "no MCP server configured with that name",
        });
      if (!l.dev)
        a.push({
          entry: l,
          why: "server: entries need --dangerously-load-development-channels",
        });
      continue;
    }
    if (!Une(o, `${l.name}@${l.marketplace}`))
      a.push({
        entry: l,
        why: "plugin not installed",
      });
    if (!l.dev && !s.some((c) => c.plugin === l.name && c.marketplace === l.marketplace))
      a.push({
        entry: l,
        why:
          i === "org"
            ? "not on your org's approved channels list"
            : "not on the approved channels allowlist",
      });
  }
  return a;
}
var L5l, D5l, t2;
