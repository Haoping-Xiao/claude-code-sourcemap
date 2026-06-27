// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MDl
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.013  score=0.0821  fileCov=0.0152
// note: nearest: src/components/Settings/Config.tsx (0.013); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var MDl = E(() => {
  Lo();
  ys();
  Yf();
  Gy();
});
var ODl = {};
_t(ODl, {
  call: () => call,
  CdTrustPrompt: () => CdTrustPrompt
});
function YYt(e) {
  let t = _Oo.c(7),
    {
      message: n,
      args: r,
      onDone: o
    } = e;
  Pd(o, 0);
  let s;
  if (t[0] !== r) s = CC.jsxs(w, {
    dimColor: !0,
    children: [nt.pointer, " /cd ", r]
  }), t[0] = r, t[1] = s;else s = t[1];
  let i;
  if (t[2] !== n) i = CC.jsx(qn, {
    children: CC.jsx(w, {
      children: n
    })
  }), t[2] = n, t[3] = i;else i = t[3];
  let a;
  if (t[4] !== s || t[5] !== i) a = CC.jsxs(U, {
    flexDirection: "column",
    children: [s, i]
  }), t[4] = s, t[5] = i, t[6] = a;else a = t[6];
  return a;
}
function CdTrustPrompt(e) {
  let t = _Oo.c(12),
    {
      directory: n,
      onConfirm: r,
      onCancel: o
    } = e,
    s;
  if (t[0] !== n) s = CC.jsx(w, {
    bold: !0,
    children: n
  }), t[0] = n, t[1] = s;else s = t[1];
  let i, a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) i = CC.jsxs(w, {
    children: ["This session hasn", "'", "t worked here before. Is this a directory you created or one you trust?"]
  }), a = CC.jsxs(w, {
    children: ["Claude Code", "'", "ll be able to read, edit, and execute files here."]
  }), t[2] = i, t[3] = a;else i = t[2], a = t[3];
  let l;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) l = CC.jsx(w, {
    dimColor: !0,
    children: CC.jsx(xs, {
      url: "https://code.claude.com/docs/en/security",
      children: "Security guide"
    })
  }), t[4] = l;else l = t[4];
  let c;
  if (t[5] !== o || t[6] !== r) c = CC.jsx(Kl, {
    confirmLabel: "Yes, move here",
    cancelLabel: "No, stay put",
    onConfirm: r,
    onCancel: o
  }), t[5] = o, t[6] = r, t[7] = c;else c = t[7];
  let u;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) u = CC.jsx(w, {
    dimColor: !0,
    children: CC.jsxs(Tn, {
      children: [CC.jsx(ht, {
        chord: "enter",
        action: "confirm"
      }), CC.jsx(ht, {
        chord: "escape",
        action: "cancel"
      })]
    })
  }), t[8] = u;else u = t[8];
  let d;
  if (t[9] !== s || t[10] !== c) d = CC.jsx(Lf, {
    color: "warning",
    titleColor: "warning",
    title: "Moving to a new directory:",
    children: CC.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [s, i, a, l, c, u]
    })
  }), t[9] = s, t[10] = c, t[11] = d;else d = t[11];
  return d;
}
async function Wkf(e) {
  if (Oe.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let t = new Set();
  for (let s of await Wv()) t.add(dv(s.path));
  let n = [],
    r = e;
  while (r !== XYt.parse(r).root) n.push(r), r = XYt.dirname(r);
  let o = [];
  for (let s of n.reverse()) o.push(...(await bjt(s, e, t)));
  return _jt(o);
}
async function qkf(e) {
  let t = $t(),
    n = yr();
  process.chdir(e), Uy(e), _D($t());
  let r = !0;
  try {
    await bOo();
  } catch (a) {
    r = !1;
    let l = !1;
    try {
      process.chdir(t), l = !0;
    } catch {
      T(`/cd transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${a}`, {
        level: "error"
      });
    }
    if (l) throw Uy(t), _D(n), a;
  }
  if (r) await eKi($t());
  mY(), cb.cache.clear?.(), bS()?.refreshGitBranch?.(), xo.refreshConfig(), G("tengu_cd_command", {});
  let o = await Wkf(e),
    s = Ner(e),
    i = aw(`The session's working directory has changed to ${s} (via /cd). The environment block at the start of this conversation still names the ` + "previous directory \u2014 that information is stale. All tool calls and " + `relative paths now resolve from ${s}.`);
  return o ? `${i}

${o}` : i;
}
function Vkf(e, t) {
  if (t.result === "blockedByRule") {
    let n = Pp(t.rule.ruleValue),
      r = COe(t.rule.source);
    if (t.rule.ruleValue.ruleContent === void 0) return `Can't move to ${wt.bold(e)} \u2014 /cd is turned off by the ${wt.bold(n)} rule in ${r}. Update the rule in /permissions to move between directories again.`;
    return `Can't move to ${wt.bold(e)} \u2014 it's excluded by the ${wt.bold(n)} rule in ${r}. Pick a directory outside that rule, or update it in /permissions.`;
  }
  return `Can't move to ${wt.bold(e)} \u2014 /cd is limited to directories matching ${t.allowedPatterns.map(n => wt.bold(n)).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.`;
}
async function call(e, t, n) {
  let r = (n ?? "").trim();
  if (!r) return CC.jsx(YYt, {
    message: "Usage: /cd <path>",
    args: "",
    onDone: () => e("Usage: /cd <path>")
  });
  let o = ds(r);
  try {
    if (!(await Oer.stat(o)).isDirectory()) {
      let c = `${wt.bold(o)} is not a directory. Did you mean ${wt.bold(XYt.dirname(o))}?`;
      return CC.jsx(YYt, {
        message: c,
        args: r,
        onDone: () => e(c)
      });
    }
  } catch (l) {
    let c = on(l);
    if (c === "ENOENT" || c === "ENOTDIR" || c === "EACCES" || c === "EPERM") {
      let u = `Couldn't find a directory at ${wt.bold(o)}.`;
      return CC.jsx(YYt, {
        message: u,
        args: r,
        onDone: () => e(u)
      });
    }
    throw l;
  }
  let s = o;
  try {
    s = await Oer.realpath(o);
  } catch {
    s = o;
  }
  if (s === $t()) {
    let l = `Already in ${wt.bold(s)}.`;
    return CC.jsx(YYt, {
      message: l,
      args: r,
      onDone: () => e(l)
    });
  }
  let i = PDl({
    requestedPath: o,
    canonicalPath: s
  }, Fr(t));
  if (i.result !== "allowed") {
    let l = Vkf(s, i);
    return CC.jsx(YYt, {
      message: l,
      args: r,
      onDone: () => e(l)
    });
  }
  let a = async () => {
    try {
      let l = await qkf(s);
      e(`Moved to ${wt.bold(s)}`, {
        display: "system",
        metaMessages: [l]
      });
    } catch (l) {
      T(`/cd relocate failed: ${l}`, {
        level: "error"
      }), e(`Couldn't move to ${wt.bold(s)} \u2014 the directory may no longer exist, or the session couldn't be moved. Staying in ${wt.bold($t())}.`);
    }
  };
  if (YSt(s)) return await a(), null;
  return CC.jsx(CdTrustPrompt, {
    directory: s,
    onConfirm: () => {
      JYt(s), a();
    },
    onCancel: () => {
      e(`Staying in ${wt.bold($t())}`);
    }
  });
}
var _Oo, Oer, XYt, CC;