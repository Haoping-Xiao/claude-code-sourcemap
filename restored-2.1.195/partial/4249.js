// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hfl
// matched 2.1.88 source: src/hooks/useDiffInIDE.ts
// class=partial  jaccard=0.1326  score=0.3683  fileCov=0.1717
// note: low-confidence suggestion: src/hooks/useDiffInIDE.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hfl = E(() => {
  kt();
  Du();
  PB();
  Hu();
  dn();
  bMe();
  er();
  je();
  Dpe();
  At();
  aE();
  HDn();
  vn();
  Is();
  AYn = R(rt(), 1);
});
function ndf(e, t) {
  if (e === xH) {
    let n = xH.inputSchema.parse(t);
    return {
      filePath: n.file_path,
      edits: [{
        old_string: n.old_string,
        new_string: n.new_string,
        replace_all: n.replace_all || !1
      }]
    };
  }
  if (e === dA) {
    let n = dA.inputSchema.parse(t),
      r = "";
    if (!Fc(n.file_path) || qp(n.file_path)) try {
      r = XC(n.file_path);
    } catch (o) {
      if (!wn(o)) throw o;
    }
    return {
      filePath: n.file_path,
      edits: [{
        old_string: r,
        new_string: n.content,
        replace_all: !1
      }]
    };
  }
  return null;
}
function rdf(e, t, n) {
  let r = n[0];
  if (!r) return t;
  if (e === xH) return {
    ...t,
    old_string: r.old_string,
    new_string: r.new_string,
    replace_all: r.replace_all || !1
  };
  if (e === dA) return {
    ...t,
    content: r.new_string
  };
  return t;
}
function wfl(e, t, n) {
  if (e !== xH && e !== dA) return null;
  let r = n.options.mcpClients;
  if (!yqe(r)) return null;
  if (Dt().diffTool !== "auto") return null;
  let o = ndf(e, t);
  if (o === null) return null;
  if (Fc(o.filePath) && !qp(o.filePath)) return null;
  if (o.filePath.endsWith(".ipynb")) return null;
  let s = p5(r);
  if (!s) return null;
  return {
    ideName: R3t(r) ?? "IDE",
    ideClient: s,
    filePath: o.filePath,
    edits: o.edits
  };
}
function Cfl(e) {
  let {
      ctx: t,
      tool: n,
      input: r,
      permissionResult: o,
      permissionPromptStartTimeMs: s,
      eligibility: i,
      claim: a,
      notifyBridge: l,
      dismissAndTeardown: c,
      resolveOnce: u
    } = e,
    {
      filePath: d,
      edits: p,
      ideName: f,
      ideClient: m
    } = i,
    g = Tfl.randomUUID().slice(0, 6),
    h = `\u273B [Claude Code] ${vfl.basename(d)} (${g}) \u29C9`,
    y = !1;
  function b() {
    if (y) return;
    y = !0, Ako(h, m).catch(S => {
      T(`closeTabInIDE failed: ${S}`, {
        level: "error"
      });
    });
  }
  let _ = {
    ideName: f,
    toolName: Ui(n.name),
    editCount: p.length
  };
  return G("tengu_ext_will_show_diff", {}), Afl(d, p, t.toolUseContext, h).then(({
    oldContent: S,
    newContent: A
  }) => {
    let v = Efl(d, S, A, "single"),
      x = {
        ..._,
        isNewFile: S === ""
      };
    if (v.length === 0) {
      if (!a()) return;
      b(), G("tengu_ext_diff_rejected", x), xe("ide_diff_view"), l({
        behavior: "deny",
        message: "User denied via IDE"
      }), c(), t.logDecision({
        decision: "reject",
        source: {
          type: "user_reject",
          hasFeedback: !1
        }
      }, {
        permissionPromptStartTimeMs: s
      }), u(t.cancelAndAbort(void 0));
      return;
    }
    if (!a()) return;
    b();
    let I = rdf(n, r, v);
    G("tengu_ext_diff_accepted", x), xe("ide_diff_view"), l({
      behavior: "allow",
      updatedInput: I,
      updatedPermissions: []
    }), c(), t.logDecision({
      decision: "accept",
      source: {
        type: "user",
        permanent: !1
      }
    }, {
      permissionPromptStartTimeMs: s
    }), u(t.handleUserAllow(I, [], void 0, s, void 0, o.decisionReason));
  }).catch(S => {
    if (t.toolUseContext.abortController.signal.aborted) return;
    T(`IDE diff view failed: ${S instanceof Error ? S.message : String(S)}`, {
      level: "error"
    }), It("ide_diff_view", "ide_diff_view_failed");
  }), {
    closeTab: b
  };
}
var Tfl, vfl;