// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module __
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=modified  jaccard=0.2878  score=0.7807  fileCov=0.3132
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module __] deps: ft, INt, xNt, Lo, wr, Q9, fn, vf, lmn, dr, _1, L3e, Gy, fre, Un, qLn, kt, EI, lC, LL, ys, Vw, je, Yp, Ao, Ls, Is, _m, aS, CYn, wYn, $I, QH, qho, rcr, rcr, L3e
((Clc = require("path")), (Ilc = require("path")), (nO = (Eoe(), ro(Ope))));
lrm = [...Hko, ...TYn, ...vYn];
wlc = Symbol("no-cached-auto-mode-config");
function ffe(e, t = "Custom item") {
  let n = e.split(`
`);
  for (let r of n) {
    let o = r.trim();
    if (o) {
      let i = o.match(/^#+\s+(.+)$/)?.[1] ?? o;
      return i.length > 100 ? i.substring(0, 97) + "..." : i;
    }
  }
  return t;
}
function Mlc(e) {
  if (e === void 0 || e === null) return null;
  if (!e) return [];
  let t = [];
  if (typeof e === "string") t = [e];
  else if (Array.isArray(e)) t = e.filter((r) => typeof r === "string");
  if (t.length === 0) return [];
  let n = wN(t);
  if (n.includes("*")) return ["*"];
  return n;
}
function TOe(e) {
  let t = Mlc(e);
  if (t === null) return e === void 0 ? void 0 : [];
  if (t.includes("*")) return;
  return t;
}
function kQ(e) {
  let t = Mlc(e);
  if (t === null) return [];
  return t;
}
async function grm(e) {
  try {
    let t = await Mz.lstat(e, {
      bigint: true,
    });
    if (t.dev === 0n && t.ino === 0n) return null;
    return `${t.dev}:${t.ino}`;
  } catch {
    return null;
  }
}
function hrm(e) {
  let t = Tu(e),
    n = Tu(rc());
  if (!t || !n) return t;
  let r = qf(e);
  if (r && dv(r) === dv(n)) return t;
  let o = dv(t),
    s = dv(n);
  if (o !== s && o.startsWith(s + d2.sep)) return n;
  return t;
}
function WSt(e, t) {
  let n = (r) => (r === void 0 ? 1 / 0 : (r.match(/[/\\]/g)?.length ?? 0));
  return n(e.baseDir) - n(t.baseDir);
}
function O6e(e, t) {
  let n = d2.resolve(Plc.homedir()).normalize("NFC"),
    r = hrm(t),
    o = d2.resolve(t),
    s = [];
  while (true) {
    if (dv(o) === dv(n)) break;
    let i = d2.join(o, ".claude", e);
    try {
      (Dlc.statSync(i), s.push(i));
    } catch (l) {
      if (Vo(l));
      else if (on(l) === "ENFILE")
        T(`getProjectDirsUpToHome: stat ${i} hit ENFILE (system fd-table full); skipping`, {
          level: "error",
        });
      else throw l;
    }
    if (r && dv(o) === dv(r)) break;
    let a = d2.dirname(o);
    if (a === o) break;
    o = a;
  }
  return s;
}
async function yrm(e, t) {
  let n = [],
    r = new Set();
  async function o(s) {
    if (t.aborted) return;
    try {
      let i = await Mz.stat(s, {
        bigint: true,
      });
      if (i.isDirectory()) {
        let a = i.dev !== void 0 && i.ino !== void 0 ? `${i.dev}:${i.ino}` : await Mz.realpath(s);
        if (r.has(a)) {
          T(`Skipping already visited directory (circular symlink): ${s}`);
          return;
        }
        r.add(a);
      }
    } catch (i) {
      let a = i instanceof Error ? i.message : String(i);
      T(`Failed to stat directory ${s}: ${a}`);
      return;
    }
    try {
      let i = await Mz.readdir(s, {
        withFileTypes: true,
      });
      for (let a of i) {
        if (t.aborted) break;
        let l = d2.join(s, a.name);
        try {
          if (a.isSymbolicLink())
            try {
              let c = await Mz.stat(l);
              if (c.isDirectory()) await o(l);
              else if (c.isFile() && a.name.endsWith(".md")) n.push(l);
            } catch (c) {
              let u = c instanceof Error ? c.message : String(c);
              T(`Failed to follow symlink ${l}: ${u}`);
            }
          else if (a.isDirectory()) await o(l);
          else if (a.isFile() && a.name.endsWith(".md")) n.push(l);
        } catch (c) {
          let u = c instanceof Error ? c.message : String(c);
          T(`Failed to access ${l}: ${u}`);
        }
      }
    } catch (i) {
      let a = i instanceof Error ? i.message : String(i);
      T(`Failed to read directory ${s}: ${a}`);
    }
  }
  return (await o(e), n);
}
async function Kbt(e) {
  let t = ut("true"),
    n = AbortSignal.timeout(3000),
    r = null,
    o;
  try {
    o = t
      ? await yrm(e, n)
      : await Aue(["--files", "--hidden", "--follow", "--no-ignore", "--glob", "*.md"], e, n);
  } catch (i) {
    if (Vo(i)) return [];
    if (i instanceof tOn)
      return (T(`loadMarkdownFilesFromDir: ripgrep timed out scanning ${e}`), []);
    throw i;
  }
  return (
    await Promise.all(
      o.map(async (i) => {
        try {
          let a = await Mz.readFile(i, {
              encoding: "utf-8",
            }),
            { frontmatter: l, content: c } = Bm(a, i, {
              normalizeKeys: true,
            });
          return {
            filePath: i,
            frontmatter: l,
            content: c,
          };
        } catch (a) {
          let l = a instanceof Error ? a.message : String(a);
          return (T(`Failed to read/parse markdown file:  ${i}: ${l}`), null);
        }
      }),
    )
  ).filter((i) => i !== null);
}
var Dlc, Mz, Plc, d2, XDl, _q;
