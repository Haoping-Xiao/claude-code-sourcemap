// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qhl
// matched 2.1.88 source: src/utils/listSessionsImpl.ts
// class=modified  jaccard=0.1971  score=0.3732  fileCov=0.2947
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qhl] deps: Xr, ql, Ye, ii, wr, Jt
((F0o = R(se(), 1)),
  (Fff = ve(() => H.strictObject({}))),
  (jff = ve(() =>
    H.object({
      role: H.string().optional(),
      dismissed: H.boolean().optional(),
    }),
  )));
Jhl = ti({
  name: $7n,
  searchHint: "show the Cowork onboarding role picker",
  maxResultSizeChars: 10000 /* 1e4 */,
  get inputSchema() {
    return Fff();
  },
  get outputSchema() {
    return jff();
  },
  isEnabled: Gff,
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  requiresUserInteraction() {
    return true;
  },
  async description() {
    return Yhl;
  },
  async prompt() {
    return Xhl;
  },
  toAutoClassifierInput() {
    return "show onboarding role picker";
  },
  async checkPermissions(e, t) {
    return {
      behavior: "ask",
      message: "Pick your role?",
      updatedInput: {},
    };
  },
  async call(e, t) {
    let { role: n, dismissed: r } = e;
    return {
      data: {
        ...(typeof n === "string" &&
          n.trim() !== "" && {
            role: n,
          }),
        ...(typeof r === "boolean" && {
          dismissed: r,
        }),
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: De(e),
    };
  },
  renderToolUseMessage() {
    return null;
  },
  renderToolResultMessage(e) {
    return F0o.jsx(qn, {
      children: F0o.jsx(w, {
        children: e.role !== void 0 ? `Role: ${e.role}` : "Role picker dismissed",
      }),
    });
  },
});
function fbt(e, t, n) {
  let { head: r, tail: o, mtime: s, size: i } = t,
    a = r.indexOf(`
`),
    l = a >= 0 ? r.slice(0, a) : r;
  if (l.includes('"isSidechain":true') || l.includes('"isSidechain": true')) return null;
  let c =
      Kb(o, "customTitle") ||
      Kb(r, "customTitle") ||
      Kb(o, "aiTitle") ||
      Kb(r, "aiTitle") ||
      void 0,
    u = Gpn(r) || void 0,
    d = EG(r, "timestamp"),
    p;
  if (d) {
    let b = Date.parse(d);
    if (!Number.isNaN(b)) p = b;
  }
  let f = c || Kb(o, "lastPrompt") || Kb(o, "summary") || u;
  if (!f) return null;
  let m = Kb(o, "gitBranch") || EG(r, "gitBranch") || void 0,
    g = EG(r, "cwd") || n || void 0,
    h = o
      .split(
        `
`,
      )
      .findLast((b) => b.includes('"type":"tag"') && b.includes('"tag":"')),
    y = h ? Kb(h, "tag") || void 0 : void 0;
  return {
    sessionId: e,
    summary: f,
    lastModified: s,
    fileSize: i,
    customTitle: c,
    firstPrompt: u,
    gitBranch: m,
    cwd: g,
    tag: y,
    createdAt: p,
  };
}
async function G6e(e, t, n) {
  let r;
  try {
    r = await dbt.readdir(e);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      r.map(async (s) => {
        if (!s.endsWith(".jsonl")) return null;
        let i = FS(s.slice(0, -6));
        if (!i) return null;
        let a = pbt.join(e, s);
        if (!t)
          return {
            sessionId: i,
            filePath: a,
            mtime: 0,
            projectPath: n,
          };
        try {
          let l = await dbt.stat(a);
          return {
            sessionId: i,
            filePath: a,
            mtime: l.mtime.getTime(),
            projectPath: n,
          };
        } catch {
          return null;
        }
      }),
    )
  ).filter((s) => s !== null);
}
async function Zhl(e, t) {
  let n = await Wpn(e.filePath);
  if (!n) return null;
  if (!t && KEs(n.head, n.tail)) return null;
  let r = fbt(e.sessionId, n, e.projectPath);
  if (!r) return null;
  if (e.mtime) r.lastModified = e.mtime;
  return r;
}
function qff(e, t) {
  if (t.mtime !== e.mtime) return t.mtime - e.mtime;
  return t.sessionId < e.sessionId ? -1 : t.sessionId > e.sessionId ? 1 : 0;
}
async function Vff(e, t, n, r) {
  e.sort(qff);
  let o = [],
    s = t && t > 0 ? t : 1 / 0,
    i = 0,
    a = new Set();
  for (let l = 0; l < e.length && o.length < s; ) {
    let c = Math.min(l + Wff, e.length),
      u = e.slice(l, c),
      d = await Promise.all(u.map((p) => Zhl(p, r)));
    for (let p = 0; p < d.length && o.length < s; p++) {
      l++;
      let f = d[p];
      if (!f) continue;
      if (a.has(f.sessionId)) continue;
      if ((a.add(f.sessionId), i < n)) {
        i++;
        continue;
      }
      o.push(f);
    }
  }
  return o;
}
async function zff(e, t) {
  let n = await Promise.all(e.map((s) => Zhl(s, t))),
    r = new Map();
  for (let s of n) {
    if (!s) continue;
    let i = r.get(s.sessionId);
    if (!i || s.lastModified > i.lastModified) r.set(s.sessionId, s);
  }
  let o = [...r.values()];
  return (
    o.sort((s, i) =>
      i.lastModified !== s.lastModified
        ? i.lastModified - s.lastModified
        : i.sessionId < s.sessionId
          ? -1
          : i.sessionId > s.sessionId
            ? 1
            : 0,
    ),
    o
  );
}
async function Kff(e, t, n) {
  let r = await jA(e),
    o;
  if (t)
    try {
      o = await e9(r);
    } catch {
      o = [];
    }
  else o = [];
  if (o.length <= 1) {
    let d = [];
    for (let p of await Px(r)) d.push(...(await G6e(p, n, r)));
    return d;
  }
  let s = PO(),
    i = false,
    a = o.map((d) => {
      let p = LE(d);
      return {
        path: d,
        prefix: i ? p.toLowerCase() : p,
      };
    });
  a.sort((d, p) => p.prefix.length - d.prefix.length);
  let l;
  try {
    l = await dbt.readdir(s, {
      withFileTypes: true,
    });
  } catch {
    let d = [];
    for (let p of await Px(r)) d.push(...(await G6e(p, n, r)));
    return d;
  }
  let c = [],
    u = new Set();
  for (let d of await Px(r)) {
    let p = pbt.basename(d);
    (u.add(i ? p.toLowerCase() : p), c.push(...(await G6e(d, n, r))));
  }
  for (let d of l) {
    if (!d.isDirectory()) continue;
    let p = i ? d.name.toLowerCase() : d.name;
    if (u.has(p)) continue;
    for (let { path: f, prefix: m } of a)
      if (p === m || (m.length >= ZZe && p.startsWith(m + "-"))) {
        (u.add(p), c.push(...(await G6e(pbt.join(s, d.name), n, f))));
        break;
      }
  }
  return c;
}
async function Yff(e) {
  let t = PO(),
    n;
  try {
    n = await dbt.readdir(t, {
      withFileTypes: true,
    });
  } catch {
    return [];
  }
  return (
    await Promise.all(n.filter((o) => o.isDirectory()).map((o) => G6e(pbt.join(t, o.name), e)))
  ).flat();
}
async function eyl(e) {
  let { dir: t, limit: n, offset: r, includeWorktrees: o, includeProgrammatic: s } = e ?? {},
    i = r ?? 0,
    a = s ?? true,
    l = (n !== void 0 && n > 0) || i > 0,
    c = t ? await Kff(t, o ?? true, l) : await Yff(l);
  if (!l) return zff(c, a);
  return Vff(c, n, i, a);
}
var dbt,
  pbt,
  Wff = 32;
