// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QOe
// matched 2.1.88 source: src/utils/editor.ts
// class=modified (alt of src/utils/editor.ts)  jaccard=0.2274  score=0.4064  fileCov=0.3404
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QOe] deps: Qi, ft, HI, je, _0
((Lnr = require("child_process")), (Rnr = require("path")));
HOf = new Set(["start", "cmd", "cmd.exe"]);
((TOf = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"]),
  (vOf = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/),
  (wOf = new Set(["code", "cursor", "windsurf", "codium"])));
IOf = Cn(() => {
  if (process.env.VISUAL?.trim()) return process.env.VISUAL.trim();
  if (process.env.EDITOR?.trim()) return process.env.EDITOR.trim();
  return ["code", "vi", "nano"].find((t) => AOf(t));
});
function kOf(e) {
  return QNo(e) !== void 0;
}
function yz(e) {
  let t = qt(),
    n = Cu.get(process.stdout);
  if (!n) throw Error("Ink instance not found - cannot pause rendering");
  let r = $q();
  if (!r)
    return {
      content: null,
    };
  try {
    t.statSync(e);
  } catch {
    return {
      content: null,
    };
  }
  let o = !kOf(r);
  if (o) n.enterAlternateScreen();
  else (n.pause(), n.suspendStdin());
  try {
    let s = xOf[r] ?? r,
      i = s.split(" "),
      a = i[0] ?? s,
      l = i.slice(1),
      c;
    if (
      ((c = HBl.spawnSync(a, [...l, e], {
        stdio: "inherit",
      })),
      c.error || c.signal || (c.status !== null && c.status !== 0))
    ) {
      let d = yk(r);
      return {
        content: null,
        error: c.error
          ? `Couldn't open ${d} \u2014 ${c.error.message}`
          : c.signal
            ? `${d} closed unexpectedly (${c.signal})`
            : `${d} quit unexpectedly (exit code ${c.status})`,
      };
    }
    return {
      content: t.readFileSync(e, {
        encoding: "utf-8",
      }),
    };
  } catch {
    return {
      content: null,
    };
  } finally {
    if (o) n.exitAlternateScreen();
    else (n.resumeStdin(), n.resume());
  }
}
function ROf(e, t, n) {
  let r = e;
  for (let [o, s] of Object.entries(n))
    if (s.type === "text") {
      let i = parseInt(o),
        a = s.content,
        l = r.indexOf(a);
      if (l !== -1) {
        let c = L0e(a),
          u = Kat(i, c);
        r = r.slice(0, l) + u + r.slice(l + a.length);
      }
    }
  return r;
}
function LOf(e) {
  let t = e.split(`
`);
  if (t.length > ABl) ((t = t.slice(-ABl)), t.unshift("\u2026 (earlier output truncated)"));
  return (
    `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` +
    `${t.map((r) => (r ? `# ${r}` : "#")).join(`
`)}
${eBo}

`
  );
}
function DOf(e) {
  let t = e.indexOf(eBo);
  if (t === -1) return e;
  return e.slice(t + eBo.length).replace(/^\r?\n\r?\n?/, "");
}
function K$(e, t, n) {
  let r = qt(),
    o = Jst();
  try {
    let s = t ? sX(e, t) : e,
      i = n ? LOf(n) + s : s;
    fwe(o, i, {
      encoding: "utf-8",
      flush: true,
    });
    let a = yz(o);
    if (a.content === null) return a;
    let l = a.content;
    if (n) l = DOf(l);
    if (
      l.endsWith(`
`) &&
      !l.endsWith(`

`)
    )
      l = l.slice(0, -1);
    if (t) l = ROf(l, e, t);
    return {
      content: l,
    };
  } finally {
    try {
      r.unlinkSync(o);
    } catch {}
  }
}
var HBl,
  xOf,
  eBo =
    "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  ABl = 50;
