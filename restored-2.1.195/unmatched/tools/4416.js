// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dze
// matched 2.1.88 source: src/utils/file.ts
// class=new  jaccard=0.028  score=0.4109  fileCov=0.0292
// note: nearest: src/utils/file.ts (0.028); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dze]
uze = /[\s\u0085\u180e]+/, $Lo = /^[\s\u0085\u180e]+/, V_f = /^['"\u2018-\u201F]+|['"\u2018-\u201F]+$/g;
z_f = {
  t: "\t",
  n: `
`,
  r: "\r",
  f: "\f",
  v: "\v"
};
function UHl(e) {
  if (!e.startsWith("../")) return e;
  let t = Yoe(TP.basename($t()));
  if (!t) return e;
  let n = "../" + t + "/",
    r = e;
  while (r.startsWith(n)) r = r.slice(n.length);
  if (r === "../" + t) return ".";
  return r;
}
function rJn(e) {
  let t = e;
  if (t = hq(t), t.length > 0 && (F4.has(t[0]) || t[0] === "/")) {
    let r = t.indexOf(":", 1);
    if (r > 0) t = hq(t.slice(r + 1));
  }
  if (t = Mk(t), t = MN(t), t = t.replace(/^(?:[A-Za-z0-9_.]+\\){0,3}FileSystem::/i, ""), t = t.replace(/^[A-Za-z]:(?![/\\])/, "./"), t = t.replaceAll("\\", "/"), t === "~" || t.startsWith("~/")) t = (BHl.homedir() + t.slice(1)).replaceAll("\\", "/");
  let n = "";
  if (/^[A-Za-z]:\//.test(t)) n = t.slice(0, 2), t = t.slice(2);
  if (t = t.split("/").map(r => {
    if (r === "") return r;
    let o;
    do {
      if (o = r, r = r.replace(/ +$/, ""), r === "." || r === "..") return r;
      r = r.replace(/\.+$/, "");
    } while (r !== o);
    return r || ".";
  }).join("/"), t = TP.posix.normalize(t), n) t = n + t;
  if (t.startsWith("./")) t = t.slice(2);
  return t;
}
function Yoe(e) {
  return e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s").normalize("NFC").replaceAll("\u03C2", "\u03C3");
}
function FHl(e) {
  let t = qt(),
    n = $t(),
    r = TP.resolve(n, e),
    o = eae(t, r) ?? r,
    s = jd(t, n).resolvedPath,
    i = s.endsWith(TP.sep) ? s : s + TP.sep,
    a = Yoe(o),
    l = Yoe(s),
    c = Yoe(i);
  if (a === l) return ".";
  if (!a.startsWith(c)) return null;
  return a.slice(c.length).replaceAll("\\", "/");
}
function $Hl(e) {
  if (e === "head" || e === ".git") return true;
  if (e.startsWith(".git/") || /^git~\d+($|\/)/.test(e)) return true;
  for (let t of K_f) {
    if (t === "head") continue;
    if (e === t || e.startsWith(t + "/")) return true;
  }
  return false;
}
function jbt(e) {
  let t = rJn(e),
    n = UHl(Yoe(t));
  if ($Hl(n)) return true;
  let r = FHl(t);
  if (r !== null && $Hl(r)) return true;
  return false;
}
function oJn(e) {
  let t = rJn(e),
    n = UHl(Yoe(t));
  if (OHl(n)) return true;
  let r = FHl(t);
  if (r !== null && OHl(r)) return true;
  return false;
}
function OHl(e) {
  if (e === ".git" || e.startsWith(".git/")) return true;
  return /^git~\d+($|\/)/.test(e);
}
function sJn(e) {
  if (!e.includes(",")) return [e];
  return [e, ...e.split(",")];
}
function NHl(e) {
  return /[*?[\]$]/.test(e);
}
function tbf(e) {
  let t = qt(),
    n = $t(),
    r = TP.resolve(n, e),
    o = Fc(r) ? r : eae(t, r) ?? r,
    s = jd(t, n).resolvedPath,
    i = Yoe(o);
  if (Yoe(s) === i) return true;
  let a = jd(t, yr()).resolvedPath,
    l = TP.relative(a, s);
  if (l === ".." || l.startsWith(".." + TP.sep) || TP.isAbsolute(l)) return false;
  let c = Yoe(a),
    u = s;
  for (;;) {
    if (Yoe(u) === i) return true;
    if (Yoe(u) === c || u === TP.dirname(u)) return false;
    u = TP.dirname(u);
  }
}
function jHl(e, t = false) {
  let n = [],
    r = [],
    o,
    s = false,
    i = false,
    a = [];
  for (let p = 0; p < e.length; p++) {
    let f = hq(e[p]);
    if (f.length === 0 || !F4.has(f[0])) {
      r.push(e[p]);
      continue;
    }
    let m = f.indexOf(":", 1),
      g = (m > 0 ? f.slice(1, m) : f.slice(1)).toLowerCase(),
      h = m > 0 ? f.slice(m + 1) : void 0;
    if (g === "") return true;
    let y = "destination".startsWith(g),
      b = X_f.has(g) || "literalpath".startsWith(g),
      _ = b || Y_f.some(x => x.startsWith(g)),
      S = J_f.has(g) || Z_f.some(x => x.startsWith(g)),
      A = Q_f.has(g) || ebf.some(x => x.startsWith(g));
    if (Number(y) + Number(_) + Number(S) + Number(A) !== 1) return true;
    if (S) {
      if ("container".startsWith(g) && h !== void 0) {
        let x = Mk(hq(h));
        if (!/^\$true$/i.test(x.trim())) i = true;
      }
      continue;
    }
    let C = h ?? e[++p];
    if (C === void 0) continue;
    if (y) o = C;else if (_) if (s = true, b) a.push(...C.split(","));else n.push(...C.split(","));
  }
  let l = (s ? 0 : 1) + (o === void 0 ? 1 : 0);
  if (r.length > l) return true;
  let c,
    u = 0;
  if (!s && u < r.length) n.push(...r[u].split(",")), u++;
  if (o === void 0 && u < r.length) c = r[u];
  if (n.length === 0 && a.length === 0 && !t) return false;
  let d = o ?? c;
  if (d !== void 0) {
    let p = rJn(d);
    if (p === "") p = ".";
    if (NHl(p)) return true;
    if (!tbf(p)) return false;
  }
  if (i || t) return true;
  for (let [p, f] of [[false, n], [true, a]]) for (let m of f) {
    let g = rJn(m);
    if (g === "") g = ".";
    if (p ? /\$/.test(g) : NHl(g)) return true;
    let h = TP.posix.basename(g);
    if (h === "." || h === "..") return true;
    if (jbt(h)) return true;
  }
  return false;
}
var BHl, TP, K_f, Y_f, X_f, J_f, Q_f, Z_f, ebf;