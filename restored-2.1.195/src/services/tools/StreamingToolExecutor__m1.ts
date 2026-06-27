// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module __l
// matched 2.1.88 source: src/services/tools/StreamingToolExecutor.ts
// class=modified (alt of src/services/tools/StreamingToolExecutor.ts)  jaccard=0.0651  score=0.2178  fileCov=0.0849
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module __l] deps: ql, Ye, Kyt
((f_l = R(rt(), 1)), (x$e = R(se(), 1)));
function ngf(e, t) {
  let n = Woe(xAe(), t),
    r = new Set(e.map((s) => s.name)),
    o = e.filter((s) => !Ql(s, ss) && !Ql(s, Fm));
  for (let s of n) if (!r.has(s.name)) o.push(s);
  return o;
}
function b_l(e, t) {
  if (typeof e === "string" && e.trim() !== "") return e;
  let n = agf(e);
  if (n !== void 0) return n;
  try {
    return H_l.inspect(e, {
      colors: false,
      depth: t,
      customInspect: false,
    });
  } catch {
    return "[non-serializable value]";
  }
}
function agf(e) {
  try {
    if (e === null || typeof e !== "object" || Array.isArray(e) || e.constructor?.name !== "Object")
      return;
    let t = Object.entries(e);
    if (t.length === 0 || t.some(([n, r]) => typeof r !== "string" || igf.has(n))) return;
    return t.map(
      ([n, r]) => `${n}:
${r}`,
    ).join(`

`);
  } catch {
    return;
  }
}
function S_l(e) {
  let t = [];
  for (let n of e.values()) {
    if (n.phase === "start" || n.phase === "executing") continue;
    (t.push(
      dE({
        content: [
          {
            type: "tool_use",
            id: n.toolUseId,
            name: n.toolName,
            input: n.toolInput,
          },
        ],
        isVirtual: true,
      }),
    ),
      t.push(
        Rn({
          content: [
            {
              type: "tool_result",
              tool_use_id: n.toolUseId,
              content: n.phase === "error" ? (n.error ?? "") : "",
              is_error: n.phase === "error",
            },
          ],
          toolUseResult: n.result,
          isVirtual: true,
        }),
      ));
  }
  return t;
}
function lgf(e, t) {
  let n = e.get(t.toolUseId);
  if (n) ((n.phase = t.phase), (n.result = t.result), (n.error = t.error));
  else
    e.set(t.toolUseId, {
      toolUseId: t.toolUseId,
      toolName: t.toolName,
      toolInput: t.toolInput,
      phase: t.phase,
      result: t.result,
      error: t.error,
    });
}
function cgf(e) {
  let t = [];
  for (let n of e.values()) {
    if (n.phase !== "complete") continue;
    let r = n.result;
    if (
      r != null &&
      typeof r === "object" &&
      r.type === "image" &&
      r.file != null &&
      typeof r.file === "object" &&
      typeof r.file.base64 === "string" &&
      r.file.base64.length > 0 &&
      typeof r.file.type === "string"
    )
      t.push({
        base64: r.file.base64,
        mediaType: r.file.type,
      });
  }
  return t.slice(0, ugf);
}
function dgf(e) {
  let t = [];
  for (let n of e.values()) {
    if (n.phase !== "complete") continue;
    let r = n.result;
    if (
      r != null &&
      typeof r === "object" &&
      r.type === "pdf" &&
      r.file != null &&
      typeof r.file === "object" &&
      typeof r.file.base64 === "string" &&
      r.file.base64.length > 0
    )
      t.push({
        base64: r.file.base64,
      });
  }
  return t.slice(0, pgf);
}
function E_l() {
  let e = woa()?.match(/trim(\d+)k/);
  return e ? parseInt(e[1], 10) * 1000 : 100000 /* 1e5 */;
}
function A_l(e, t, n, r, o) {
  if (wzt(e))
    throw (
      t.clearAllTimers(),
      t.console.clear(),
      n.setReplContext(r, o()),
      new mi(
        `${e.message}. The REPL context was reset \u2014 rerun your code; ` +
          "global state (variables, registered tools) starts fresh.",
        "REPL context poisoned by non-configurable global; context reset",
      )
    );
  throw e;
}
function fgf() {
  let e;
  return {
    promise: new Promise((n, r) => {
      e = r;
    }),
    reject: e,
  };
}
function mgf(e, t) {
  let n = 0,
    r = e,
    o = 0,
    s,
    i = false;
  function a() {
    if (i || s !== void 0 || n > 0) return;
    if (r <= 0) {
      ((i = true), t());
      return;
    }
    ((o = Date.now()),
      (s = setTimeout(() => {
        ((i = true), t());
      }, r)),
      s.unref?.());
  }
  function l() {
    if (s === void 0) return;
    (clearTimeout(s), (s = void 0), (r -= Date.now() - o));
  }
  return {
    start: a,
    onToolStart: () => {
      if (n++ === 0) l();
    },
    onToolEnd: () => {
      if (--n === 0) a();
    },
    cancel: () => {
      ((i = true), l());
    },
  };
}
function ygf(e) {
  let t = new Map(),
    n = (r, o) => {
      (t.delete(r.toolUseId), e(r, o));
    };
  return {
    arm: (r) => {
      let o = t.get(r.toolUseId);
      if (o !== void 0) (clearTimeout(o), t.delete(r.toolUseId));
      if (r.nativeTimeoutMs === void 0) return;
      let s = Math.ceil(r.nativeTimeoutMs * hgf) + ggf;
      if (s >= lXn) return;
      let i = setTimeout(n, s, r, s);
      (i.unref?.(), t.set(r.toolUseId, i));
    },
    clear: (r) => {
      let o = t.get(r);
      if (o !== void 0) (clearTimeout(o), t.delete(r));
    },
    cancel: () => {
      for (let r of t.values()) clearTimeout(r);
      t.clear();
    },
  };
}
function _gf(e) {
  return;
}
var H_l,
  T_l,
  rgf,
  ogf,
  sgf = 30000,
  lXn = 600000,
  igf,
  ugf = 8,
  pgf = 4,
  cRo,
  ggf = 5000,
  hgf = 1.5;
