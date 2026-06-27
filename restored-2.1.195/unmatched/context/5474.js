// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g_c
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.009  score=0.3082  fileCov=0.0092
// note: nearest: src/cli/print.ts (0.009); dir inferred from dep-graph -> context; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module g_c] deps: si, uo, iKn, Ye, YHe
$6o = R(lt(), 1), m_c = R(rt(), 1), FTe = R(se(), 1);
function y_c(e, t) {
  let n = new Set();
  for (let {
    id: r,
    tokenCount: o
  } of t) {
    n.add(r);
    let s = e.get(r);
    if (!s) e.set(r, s = []);
    if (s.push(o), s.length > h_c) s.splice(0, s.length - h_c);
  }
  for (let r of e.keys()) if (!n.has(r)) e.delete(r);
}
function Mfm(e) {
  if ("label" in e && typeof e.label === "string") return e.label;
  if (e.type === "local_agent") return e.progress?.summary;
  if (e.type === "local_bash" && e.kind !== "monitor") return e.command;
  if (e.type === "local_workflow") return e.workflowName ?? e.summary;
  if (e.type === "remote_agent") return e.title;
  if (e.type === "in_process_teammate") return DAt(e);
  return;
}
function N6o() {
  let e = N_() ? yn("policySettings")?.subagentStatusLine : hLt("subagentStatusLine");
  return e?.type === "command" ? e.command : void 0;
}
async function __c(e, t, n, r) {
  if (Mj()) return {};
  if (HTe()) return T("Skipping subagentStatusLine execution - workspace trust not accepted"), {};
  let o = N6o();
  if (o === void 0 || e.length === 0) return {};
  let s = $t(),
    i = {
      ...Td(),
      columns: t,
      tasks: e.map(g => ({
        id: g.id,
        name: n.get(g.id),
        type: g.type,
        status: g.status,
        description: g.description,
        label: Mfm(g) || g.description,
        startTime: g.startTime,
        tokenCount: g.progress?.tokenCount ?? 0,
        tokenSamples: r.get(g.id) ?? [],
        cwd: g.cwd ?? s
      }))
    },
    a = Vt() === "windows",
    l = a ? Hhe() : null,
    c = a && !l ? await d6() : null,
    u = a && l ? g => g.replaceAll("\\", "/") : g => g,
    d = {
      ...DM(),
      ...Upt(Wqe(i)),
      CLAUDE_PROJECT_DIR: u(rc())
    };
  if (l) Npn(d, l);
  let p = {
      cwd: s,
      env: d,
      timeout: Dfm,
      input: De(i),
      preserveOutputOnError: true
    },
    f = c ? await Gr(c, WGt(o), {
      ...p
    }) : await Gr(l ? Bpn(o) : o, [], {
      shell: a ? l ?? true : true,
      ...p
    });
  if (f.code !== 0) return T(`subagentStatusLine exited ${f.code}: ${f.error ?? f.stderr}`, {
    level: "error"
  }), {};
  let m = {};
  for (let g of f.stdout.split(`
`)) {
    if (!g.trim()) continue;
    let h;
    try {
      h = Ft(g);
    } catch {
      T(`subagentStatusLine emitted non-JSON line: ${g}`, {
        level: "error"
      });
      continue;
    }
    let y = Pfm().safeParse(h);
    if (!y.success) {
      T(`subagentStatusLine emitted invalid schema: ${y.error.message}`, {
        level: "error"
      });
      continue;
    }
    m[y.data.id] = {
      content: y.data.content
    };
  }
  return m;
}
var Dfm = 5000,
  Pfm,
  h_c = 16;