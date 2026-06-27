// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fgo
// matched 2.1.88 source: src/utils/tasks.ts
// class=modified  jaccard=0.4197  score=0.8822  fileCov=0.4446
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Fgo = E(() => {
  (($Dp = ["id", "task_id"]), (ODp = ["active_form"]));
});
function yOa(e) {
  if (jgo === e) return;
  ((jgo = e), dWt());
}
function dWt() {
  try {
    hOa.emit();
  } catch {}
}
function bOa(e) {
  return pft.join(T5(e), FDp);
}
async function Ggo(e) {
  let t = bOa(e);
  try {
    let n = (await qs().read(t)).trim(),
      r = parseInt(n, 10);
    return isNaN(r) ? 0 : r;
  } catch {
    return 0;
  }
}
async function SOa(e, t) {
  let n = bOa(e);
  await qs().write(n, String(t));
}
function EH() {
  if (ml(process.env.CLAUDE_CODE_ENABLE_TASKS)) return false;
  return true;
}
async function EOa(e) {
  let t = T5(e),
    n = await Vgo(e),
    r;
  try {
    r = await Ay(n, pWt);
    let o = await AOa(e);
    if (o > 0) {
      let i = await Ggo(e);
      if (o > i) await SOa(e, o);
    }
    let s;
    try {
      s = await qs().list(t);
    } catch {
      s = [];
    }
    for (let i of s)
      if (i.endsWith(".json") && !i.startsWith(".")) {
        let a = pft.join(t, i);
        try {
          await qs().delete(a);
        } catch {}
      }
    dWt();
  } finally {
    if (r) await r();
  }
}
function yF() {
  if (process.env.CLAUDE_CODE_TASK_LIST_ID) return process.env.CLAUDE_CODE_TASK_LIST_ID;
  let e = w0();
  if (e) return e.teamName;
  return rp() || jgo || Rt();
}
function fft(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function T5(e) {
  return pft.join(tr(), "tasks", fft(e));
}
function mft(e, t) {
  return pft.join(T5(e), `${fft(t)}.json`);
}
async function Wgo(e) {
  let t = T5(e);
  try {
    await qs().mkdir(t);
  } catch {}
}
async function AOa(e) {
  let t = T5(e),
    n;
  try {
    n = await qs().list(t);
  } catch {
    return 0;
  }
  let r = 0;
  for (let o of n) {
    if (!o.endsWith(".json")) continue;
    let s = parseInt(o.replace(".json", ""), 10);
    if (!isNaN(s) && s > r) r = s;
  }
  return r;
}
async function jDp(e) {
  let [t, n] = await Promise.all([AOa(e), Ggo(e)]);
  return Math.max(t, n);
}
async function HOa(e, t) {
  let n = await Vgo(e),
    r;
  try {
    r = await Ay(n, pWt);
    let o = await jDp(e),
      s = String(o + 1),
      i = {
        id: s,
        ...t,
      },
      a = mft(e, s);
    return (await qs().write(a, De(i, null, 2)), dWt(), s);
  } finally {
    if (r) await r();
  }
}
async function Bre(e, t) {
  let n = mft(e, t);
  try {
    let r = await qs().read(n),
      o = Ft(r),
      s = UDp().safeParse(o);
    if (!s.success)
      return (T(`[Tasks] Task ${t} failed schema validation: ${s.error.message}`), null);
    return s.data;
  } catch (r) {
    if (on(r) === "ENOENT") return null;
    if ((T(`[Tasks] Failed to read task ${t}: ${be(r)}`), !(r instanceof SyntaxError))) ke(r);
    return null;
  }
}
async function TOa(e, t, n) {
  let r = await Bre(e, t);
  if (!r) return null;
  let o = {
      ...r,
      ...n,
      id: t,
    },
    s = mft(e, t);
  return (await qs().write(s, De(o, null, 2)), dWt(), o);
}
async function hEe(e, t, n) {
  let r = mft(e, t);
  if (!(await Bre(e, t))) return null;
  let s;
  try {
    return ((s = await Ay(r, pWt)), await TOa(e, t, n));
  } finally {
    await s?.();
  }
}
async function Fjn(e, t) {
  let n = mft(e, t);
  try {
    let r = parseInt(t, 10);
    if (!isNaN(r)) {
      let s = await Ggo(e);
      if (r > s) await SOa(e, r);
    }
    try {
      await qs().delete(n);
    } catch (s) {
      if (on(s) === "ENOENT") return false;
      throw s;
    }
    let o = await W4(e);
    for (let s of o) {
      let i = s.blocks.filter((l) => l !== t),
        a = s.blockedBy.filter((l) => l !== t);
      if (i.length !== s.blocks.length || a.length !== s.blockedBy.length)
        await hEe(e, s.id, {
          blocks: i,
          blockedBy: a,
        });
    }
    return (dWt(), true);
  } catch {
    return false;
  }
}
async function W4(e) {
  let t = T5(e),
    n;
  try {
    n = await qs().list(t);
  } catch {
    return [];
  }
  let r = n.filter((s) => s.endsWith(".json")).map((s) => s.replace(".json", ""));
  return (await Promise.all(r.map((s) => Bre(e, s))))
    .filter((s) => s !== null)
    .sort((s, i) => Number(s.id) - Number(i.id));
}
async function qgo(e, t, n) {
  let [r, o] = await Promise.all([Bre(e, t), Bre(e, n)]);
  if (!r || !o) return false;
  if (!r.blocks.includes(n))
    await hEe(e, t, {
      blocks: [...r.blocks, n],
    });
  if (!o.blockedBy.includes(t))
    await hEe(e, n, {
      blockedBy: [...o.blockedBy, t],
    });
  return true;
}
function GDp(e) {
  return pft.join(T5(e), ".lock");
}
async function Vgo(e) {
  await Wgo(e);
  let t = GDp(e);
  try {
    await gOa.writeFile(t, "", {
      flag: "wx",
    });
  } catch {}
  return t;
}
async function vOa(e, t, n, r = {}) {
  let o = mft(e, t);
  if (!(await Bre(e, t)))
    return {
      success: false,
      reason: "task_not_found",
    };
  if (r.checkAgentBusy) return WDp(e, t, n);
  let i;
  try {
    i = await Ay(o, pWt);
    let a = await Bre(e, t);
    if (!a)
      return {
        success: false,
        reason: "task_not_found",
      };
    if (a.owner && a.owner !== n)
      return {
        success: false,
        reason: "already_claimed",
        task: a,
      };
    if (a.status === "completed")
      return {
        success: false,
        reason: "already_resolved",
        task: a,
      };
    let l = await W4(e),
      c = new Set(l.filter((p) => p.status !== "completed").map((p) => p.id)),
      u = a.blockedBy.filter((p) => c.has(p));
    if (u.length > 0)
      return {
        success: false,
        reason: "blocked",
        task: a,
        blockedByTasks: u,
      };
    return {
      success: true,
      task: await TOa(e, t, {
        owner: n,
      }),
    };
  } catch (a) {
    return (
      T(`[Tasks] Failed to claim task ${t}: ${be(a)}`),
      ke(a),
      {
        success: false,
        reason: "task_not_found",
      }
    );
  } finally {
    if (i) await i();
  }
}
async function WDp(e, t, n) {
  let r = await Vgo(e),
    o;
  try {
    o = await Ay(r, pWt);
    let s = await W4(e),
      i = s.find((d) => d.id === t);
    if (!i)
      return {
        success: false,
        reason: "task_not_found",
      };
    if (i.owner && i.owner !== n)
      return {
        success: false,
        reason: "already_claimed",
        task: i,
      };
    if (i.status === "completed")
      return {
        success: false,
        reason: "already_resolved",
        task: i,
      };
    let a = new Set(s.filter((d) => d.status !== "completed").map((d) => d.id)),
      l = i.blockedBy.filter((d) => a.has(d));
    if (l.length > 0)
      return {
        success: false,
        reason: "blocked",
        task: i,
        blockedByTasks: l,
      };
    let c = s.filter((d) => d.status !== "completed" && d.owner === n && d.id !== t);
    if (c.length > 0)
      return {
        success: false,
        reason: "agent_busy",
        task: i,
        busyWithTasks: c.map((d) => d.id),
      };
    return {
      success: true,
      task: await hEe(e, t, {
        owner: n,
      }),
    };
  } catch (s) {
    return (
      T(`[Tasks] Failed to claim task ${t} with busy check: ${be(s)}`),
      ke(s),
      {
        success: false,
        reason: "task_not_found",
      }
    );
  } finally {
    if (o) await o();
  }
}
async function gft(e, t, n, r) {
  let s = (await W4(e)).filter((l) => l.status !== "completed" && (l.owner === t || l.owner === n));
  for (let l of s)
    await hEe(e, l.id, {
      owner: void 0,
      status: "pending",
    });
  if (s.length > 0) T(`[Tasks] Unassigned ${s.length} task(s) from ${n}`);
  let a = `${n} ${r === "terminated" ? "was terminated" : "has shut down"}.`;
  if (s.length > 0) {
    let l = s.map((c) => `#${c.id} "${c.subject}"`).join(", ");
    a += ` ${s.length} task(s) were unassigned: ${l}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: s.map((l) => ({
      id: l.id,
      subject: l.subject,
    })),
    notificationMessage: a,
  };
}
var gOa,
  pft,
  hOa,
  jgo,
  _Oa,
  rVe,
  UDp,
  FDp = ".highwatermark",
  pWt;
