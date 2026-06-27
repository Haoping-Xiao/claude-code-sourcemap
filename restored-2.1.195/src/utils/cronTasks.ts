// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vX
// matched 2.1.88 source: src/utils/cronTasks.ts
// class=modified  jaccard=0.3038  score=0.627  fileCov=0.3708
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vX]
iop = [
  {
    min: 0,
    max: 59,
  },
  {
    min: 0,
    max: 23,
  },
  {
    min: 1,
    max: 31,
  },
  {
    min: 1,
    max: 12,
  },
  {
    min: 0,
    max: 6,
  },
];
jra = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function eSe(e) {
  return $On.join(e ?? rc(), dop);
}
async function readCronTasks(dir) {
  let t = qt(),
    n;
  try {
    n = await t.readFile(eSe(dir), {
      encoding: "utf-8",
    });
  } catch (i) {
    if (Vo(i)) return [];
    return (ke(i), []);
  }
  let r = Ia(n, false);
  if (!r || typeof r !== "object") return [];
  let o = r;
  if (!Array.isArray(o.tasks)) return [];
  let s = [];
  for (let i of o.tasks) {
    if (
      !i ||
      typeof i.id !== "string" ||
      typeof i.cron !== "string" ||
      typeof i.prompt !== "string" ||
      typeof i.createdAt !== "number"
    ) {
      T(`[ScheduledTasks] skipping malformed task: ${De(i)}`);
      continue;
    }
    if (!F1(i.cron)) {
      T(`[ScheduledTasks] skipping task ${i.id} with invalid cron '${i.cron}'`);
      continue;
    }
    s.push({
      id: i.id,
      cron: i.cron,
      prompt: i.prompt,
      createdAt: i.createdAt,
      ...(typeof i.lastFiredAt === "number" && {
        lastFiredAt: i.lastFiredAt,
      }),
      ...(i.recurring && {
        recurring: true,
      }),
      ...(i.permanent && {
        permanent: true,
      }),
      ...(typeof i.createdBySessionId === "string" && {
        createdBySessionId: i.createdBySessionId,
      }),
      ...(typeof i.createdByPid === "number" && {
        createdByPid: i.createdByPid,
      }),
      ...(typeof i.createdByProcStart === "string" && {
        createdByProcStart: i.createdByProcStart,
      }),
    });
  }
  return s;
}
function OOn(e) {
  let t;
  try {
    t = Wra.readFileSync(eSe(e), "utf-8");
  } catch {
    return false;
  }
  let n = Ia(t, false);
  if (!n || typeof n !== "object") return false;
  let r = n.tasks;
  return Array.isArray(r) && r.length > 0;
}
async function B2t(e, t) {
  let n = t ?? rc();
  await MOn.mkdir($On.join(n, ".claude"), {
    recursive: true,
  });
  let r = {
    tasks: e.map(({ durable: o, ...s }) => s),
  };
  await MOn.writeFile(
    eSe(n),
    De(r, null, 2) +
      `
`,
    "utf-8",
  );
}
async function wct(e, t, n, r, o) {
  let s = Gra.randomUUID().slice(0, 8),
    i = {
      id: s,
      cron: e,
      prompt: t,
      createdAt: Date.now(),
      ...(n && {
        recurring: true,
      }),
    };
  if (!r)
    return (
      Rge({
        ...i,
        ...(o && {
          agentId: o,
        }),
      }),
      s
    );
  let a = await readCronTasks();
  return (
    a.push({
      ...i,
      createdBySessionId: Rt(),
      createdByPid: process.pid,
      createdByProcStart: fte(),
    }),
    await B2t(a),
    s
  );
}
async function Pue(e, t) {
  if (e.length === 0) return;
  if (t === void 0 && IK(e) === e.length) return;
  let n = new Set(e),
    r = await readCronTasks(t),
    o = r.filter((s) => !n.has(s.id));
  if (o.length === r.length) return;
  await B2t(o, t);
}
async function qra(e, t, n) {
  if (e.length === 0) return;
  let r = new Set(e),
    o = await readCronTasks(n),
    s = false;
  for (let i of o) if (r.has(i.id)) ((i.lastFiredAt = t), (s = true));
  if (!s) return;
  await B2t(o, n);
}
async function Mue(e) {
  let t = await readCronTasks(e);
  if (e !== void 0) return t;
  let n = Hw().map((r) => ({
    ...r,
    durable: false,
  }));
  return [...t, ...n];
}
function Tct(e, t) {
  let n = F1(e);
  if (!n) return null;
  let r = Act(n, new Date(t));
  return r ? r.getTime() : null;
}
function Vra(e) {
  let t = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(t) ? t : 0;
}
function U2t(e, t, n, r = O8) {
  let o = Tct(e, t);
  if (o === null) return null;
  let s = Tct(e, o);
  if (s === null) return o;
  let i = s - o;
  if (uop.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < i && i >= N2t && i - r.cacheLeadMs < N2t)
    return t + i - r.cacheLeadMs;
  let a = Math.min(Vra(n) * r.recurringFrac * i, r.recurringCapMs);
  return o + a;
}
function NOn(e, t, n, r = O8) {
  let o = Tct(e, t);
  if (o === null) return null;
  if (new Date(o).getMinutes() % r.oneShotMinuteMod !== 0) return o;
  let s = r.oneShotFloorMs + Vra(n) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(o - s, t);
}
function zra(e, t) {
  return e.filter((n) => {
    let r = Tct(n.cron, n.createdAt);
    return r !== null && r < t;
  });
}
var Gra,
  Wra,
  MOn,
  $On,
  N2t = 300000,
  uop,
  dop,
  O8;
