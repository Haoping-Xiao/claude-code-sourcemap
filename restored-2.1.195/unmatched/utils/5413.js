// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pgc
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0076  score=0.1193  fileCov=0.0081
// note: nearest: src/utils/sessionStorage.ts (0.0076); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pgc = E(() => {
  Hp();
  Won();
  ft();
  Rm();
  je();
  wr();
  At();
  Gx();
  qd();
  ugc = require("fs/promises"), tum = Age.randomUUID(), num = {
    teardown: () => {},
    pulseIfClientPresent: () => {}
  };
});
async function hgc(e, t, n) {
  let [r, o] = await Promise.all([t.readMain(), t.readSubagents()]),
    s = new Set();
  for (let c of r?.events ?? []) {
    let u = c.payload.uuid;
    if (typeof u === "string") s.add(u);
  }
  for (let c of o?.events ?? []) {
    let u = c.payload.uuid;
    if (typeof u === "string") s.add(u);
  }
  T(`[persistence-sync] Server has ${s.size} events since compaction`);
  let i = c => {
      T(`[persistence-sync] Write failed: ${c}`);
    },
    a = await mgc(Pk(Rt()), s);
  for (let c of a) e("transcript", c, {
    ...(pA(c) && {
      isCompaction: !0,
      preservedEventIds: c.compactMetadata?.preservedMessages?.uuids
    })
  }).catch(i);
  let l = 0;
  for (let {
    agentId: c,
    path: u
  } of await oum(n)) {
    let d = await mgc(u, s);
    for (let p of d) e("transcript", p, {
      ...(pA(p) && {
        isCompaction: !0,
        preservedEventIds: p.compactMetadata?.preservedMessages?.uuids
      }),
      agentId: c
    }).catch(i);
    l += d.length;
  }
  return T(`[persistence-sync] Uploaded ${a.length} main + ${l} subagent entries`), {
    uploadedMain: a.length,
    uploadedSubagents: l
  };
}
async function oum(e) {
  let n = (await Promise.all(e.map(async a => {
      let l = uk(a);
      try {
        let c = await ggc.stat(l);
        return {
          agentId: a,
          path: l,
          size: c.size,
          mtimeMs: c.mtimeMs
        };
      } catch {
        return null;
      }
    }))).filter(a => a !== null),
    r = n.filter(a => a.size <= oCe),
    o = r.sort((a, l) => l.mtimeMs - a.mtimeMs).slice(0, fgc),
    s = n.length - r.length,
    i = r.length - o.length;
  if (s > 0 || i > 0) T(`[persistence-sync] Subagent backfill capped: ${s} over ${oCe}B, ${i} beyond ${fgc}-agent limit (live stream unaffected)`);
  return o;
}
async function mgc(e, t) {
  let n = [];
  try {
    for await (let r of $in(e)) {
      let o;
      try {
        o = Ft(r);
      } catch {
        continue;
      }
      if (!zHt(o)) continue;
      if (!t.has(o.uuid)) n.push(o);
      if (pA(o)) break;
    }
  } catch (r) {
    if (wn(r)) return [];
    throw r;
  }
  return n.reverse();
}
var ggc,
  fgc = 20;