// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aeo
// matched 2.1.88 source: src/utils/processUserInput/processSlashCommand.tsx
// class=new  jaccard=0.0181  score=0.1555  fileCov=0.02
// note: nearest: src/utils/processUserInput/processSlashCommand.tsx (0.0181); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aeo = E(() => {
  bKi = require("crypto");
});
function SKi(e, t) {
  BPn.set(e, t);
}
function vKd(e) {
  return BPn.get(e);
}
function AKi(e) {
  EKi.add(e);
}
function VU(e, t, n, r, o) {
  try {
    let s = wKd(e, t, n);
    if (r) {
      let i = xM(e);
      if (i === "main" || i === "subagent") {
        if (s.attributionMcpServer = r, o) s.attributionMcpTool = o;
      }
    }
    return s;
  } catch (s) {
    return ke(s), {};
  }
}
function wKd(e, t, n) {
  if (!e) return {};
  if (e.startsWith("agent:builtin:")) return {
    attributionAgent: e.slice(14),
    ...NPn(t)
  };
  if (e.startsWith("agent:custom:")) {
    let r = e.slice(13);
    return {
      attributionAgent: r,
      ...NPn(t, fzr(r))
    };
  }
  if (e.startsWith("agent:")) return NPn(t);
  if (xM(e) === "main" && n) return NPn(n);
  return {};
}
function NPn(e, t) {
  if (!e) return t ? {
    attributionPlugin: t
  } : {};
  let n = fzr(e) ?? t;
  return {
    attributionSkill: e,
    ...(n && {
      attributionPlugin: n
    })
  };
}
function nFt(e, t) {
  let n = TKi(e, t),
    r = {};
  if (n.attributionAgent !== void 0) {
    r.attributionAgent = hlt(n.attributionAgent);
    let o = tFt(t.attributionAgent, n.attributionAgent, HKi);
    if (o !== void 0) r.attributionAgentHash = o;
  }
  if (n.attributionSkill !== void 0) {
    r.attributionSkill = hlt(n.attributionSkill);
    let o = tFt(t.attributionSkill, n.attributionSkill, Qj);
    if (o !== void 0) r.attributionSkillHash = o;
  }
  if (n.attributionPlugin !== void 0) {
    r.attributionPlugin = hlt(n.attributionPlugin);
    let o = tFt(t.attributionPlugin, n.attributionPlugin, Qj);
    if (o !== void 0) r.attributionPluginHash = o;
  }
  if (n.attributionMcpServer !== void 0) {
    r.attributionMcpServer = hlt(n.attributionMcpServer);
    let o = tFt(t.attributionMcpServer, n.attributionMcpServer, UPn);
    if (o !== void 0) r.attributionMcpServerHash = o;
  }
  if (n.attributionMcpTool !== void 0) {
    r.attributionMcpTool = hlt(n.attributionMcpTool);
    let o = tFt(t.attributionMcpTool, n.attributionMcpTool, UPn);
    if (o !== void 0) r.attributionMcpToolHash = o;
  }
  return r;
}
function tFt(e, t, n) {
  if (t !== n || e === void 0 || e === n) return;
  return hlt(eFt(e));
}
function ylt(e, t) {
  let {
      attributionAgent: n,
      attributionSkill: r,
      attributionPlugin: o,
      attributionMcpServer: s,
      attributionMcpTool: i
    } = TKi(e, t),
    a = o ? vKd(o) : void 0;
  return {
    ...(n && {
      "agent.name": n
    }),
    ...(r && {
      "skill.name": r
    }),
    ...(o && {
      "plugin.name": o
    }),
    ...(a && {
      "marketplace.name": a
    }),
    ...(s && {
      "mcp_server.name": s
    }),
    ...(i && {
      "mcp_tool.name": i
    })
  };
}
function TKi(e, t) {
  try {
    return CKd(e, t);
  } catch (n) {
    return ke(n), {};
  }
}
function CKd(e, t) {
  let {
      attributionAgent: n,
      attributionSkill: r,
      attributionPlugin: o,
      attributionMcpServer: s,
      attributionMcpTool: i
    } = t,
    a = {};
  if (s !== void 0) {
    let l = EKi.has(s);
    if (a.attributionMcpServer = l ? hc(s) : UPn, i !== void 0) a.attributionMcpTool = l ? hc(i) : UPn;
  }
  if (n !== void 0) if (e?.startsWith("agent:builtin:")) a.attributionAgent = n;else {
    let l = o !== void 0 && BPn.has(o);
    a.attributionAgent = l ? n : HKi;
  }
  if (o !== void 0) {
    if (BPn.has(o)) {
      if (a.attributionPlugin = o, r !== void 0) a.attributionSkill = r;
    } else if (a.attributionPlugin = Qj, r !== void 0) a.attributionSkill = Qj;
  } else if (r !== void 0) a.attributionSkill = r;
  return a;
}
function hlt(e) {
  return kh(e);
}
var BPn,
  EKi,
  HKi = "custom",
  Qj = "third-party",
  UPn = "custom";