// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wYn
// matched 2.1.88 source: src/utils/permissions/dangerousPatterns.ts
// class=modified  jaccard=0.3736  score=0.4061  fileCov=0.8237
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wYn = E(() => {
  ((v6t = [
    "python",
    "python3",
    "python2",
    "node",
    "deno",
    "tsx",
    "ruby",
    "perl",
    "php",
    "lua",
    "npx",
    "bunx",
    "npm run",
    "yarn run",
    "pnpm run",
    "bun run",
    "bash",
    "sh",
    "ssh",
  ]),
    (Hko = [...v6t, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo"]),
    (TYn = ["curl", "wget", "kubectl", "aws", "gcloud", "gsutil"]),
    (vYn = []),
    (xfl = new Set([...TYn, ...vYn])),
    (kfl = {
      kubectl: new Set([
        "exec",
        "apply",
        "create",
        "delete",
        "run",
        "cp",
        "port-forward",
        "proxy",
        "patch",
        "edit",
        "replace",
        "attach",
        "debug",
        "scale",
        "rollout",
        "drain",
        "cordon",
        "taint",
      ]),
      ...!1,
    }),
    (Rfl = [...Hko, ...[]]));
});
function w6t(e, t) {
  if (e !== Co) return !1;
  if (t === void 0 || t === "") return !0;
  if (/^[\s*]+$/.test(t)) return !0;
  return C6t(t, Rfl);
}
function C6t(e, t) {
  let n = e.trim().toLowerCase();
  if (n === "*") return !0;
  for (let r of t) {
    let o = r.toLowerCase();
    if (n === o) return !0;
    if (n === `${o}:*` || n === `${o} *`) return !0;
    if (n === `${o}*`) return !0;
    if (n.startsWith(`${o} `) && n.endsWith("*")) {
      let s = n.slice(o.length + 1);
      if (xfl.has(o)) {
        if (/[$`]/.test(s)) return !0;
        let i = kfl[o];
        if (i === "all") return !0;
        let a = s
            .replace(/[\s:*]+$/, "")
            .split(/\s+/)
            .filter(Boolean),
          l = 0;
        for (; l < a.length; l++) {
          let u = a[l];
          if (!u.startsWith("-")) break;
          if (!u.includes("=") && l + 1 < a.length && !a[l + 1].startsWith("-")) l++;
        }
        let c = a[l];
        if (c === void 0) {
          if ((o === "curl" || o === "wget") && a.some((u) => u.includes("://"))) continue;
          return !0;
        }
        if (i?.has(c)) return !0;
        continue;
      }
      if (s.startsWith("-")) {
        let i = s.slice(0, -1);
        if (!(/^python[\d.]*$/.test(o) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(i))) return !0;
      }
    }
  }
  return !1;
}
function I6t(e, t) {
  if (e !== Ss) return !1;
  if (t === void 0 || t === "") return !0;
  if (/^[\s*]+$/.test(t)) return !0;
  let n = t.trim().toLowerCase();
  if (n === "*") return !0;
  let r = [
    ...v6t,
    "pwsh",
    "powershell",
    "cmd",
    "wsl",
    "iex",
    "invoke-expression",
    "icm",
    "invoke-command",
    "start-process",
    "saps",
    "start",
    "start-job",
    "sajb",
    "start-threadjob",
    "register-objectevent",
    "register-engineevent",
    "register-wmievent",
    "register-scheduledjob",
    "new-pssession",
    "nsn",
    "enter-pssession",
    "etsn",
    "add-type",
    "new-object",
  ];
  for (let o of r) {
    if (n === o) return !0;
    if (n === `${o}:*`) return !0;
    if (n === `${o}*`) return !0;
    if (n === `${o} *`) return !0;
    if (n.startsWith(`${o} -`) && n.endsWith("*")) return !0;
    let s = o.indexOf(" "),
      i = s === -1 ? `${o}.exe` : `${o.slice(0, s)}.exe${o.slice(s)}`;
    if (n === i) return !0;
    if (n === `${i}:*`) return !0;
    if (n === `${i}*`) return !0;
    if (n === `${i} *`) return !0;
    if (n.startsWith(`${i} -`) && n.endsWith("*")) return !0;
  }
  return !1;
}
function Tko(e, t) {
  return wD(e) === ss;
}
function vko() {
  return NLr();
}
function C6e(e, t) {
  if ((e === Co || e === Ss) && vko()) return !0;
  let n = `${e}\x00${t ?? ""}`,
    r = Lfl.get(n);
  if (r !== void 0) return r;
  let o = w6t(e, t) || I6t(e, t) || Tko(e, t);
  return (Lfl.set(n, o), o);
}
var Lfl;
