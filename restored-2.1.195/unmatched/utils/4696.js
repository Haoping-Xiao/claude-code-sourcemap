// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gfe
// matched 2.1.88 source: node_modules/undici/lib/web/fileapi/util.js
// class=new  jaccard=0.0373  score=0.1105  fileCov=0.0532
// note: nearest: node_modules/undici/lib/web/fileapi/util.js (0.0373); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Gfe = E(() => {
  lH();
  Lo();
  At();
  Jt();
  RNo();
  WL();
  q$();
  fnr = require("net"), vNl = require("string_decoder");
});
function z7t() {
  return {
    proto: hp,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {}
  };
}
async function h3(e) {
  let t;
  try {
    let r = await Wfe.lstat(gse());
    if (!r.isFile() || r.size > C$f) {
      if (!e?.silent) if (ke(Error(`roster.json ${r.isFile() ? `too large (${r.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`)), G("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 1,
        errCode: r.isFile() ? We("E2BIG") : We("EFTYPE")
      }), r.isFile()) await gnr();else await Wfe.rm(gse(), {
        recursive: !0,
        force: !0
      }).catch(o => ke(o));
      return {
        ...z7t(),
        parseFailed: !0
      };
    }
    t = Ft(await Wfe.readFile(gse(), "utf8"));
  } catch (r) {
    if (wn(r)) return z7t();
    if (!e?.silent) ke(r), G("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: xd(r) ?? BK(r)
    }), await gnr();
    return {
      ...z7t(),
      parseFailed: !0
    };
  }
  let n;
  try {
    n = RPl().safeParse(t);
  } catch (r) {
    if (!e?.silent) ke(r), G("tengu_bg_roster_parse_failed", {
      orphaned: CNl(t),
      quarantined: 1,
      errCode: BJe(r)
    }), await gnr();
    return {
      ...z7t(),
      parseFailed: !0
    };
  }
  if (n.success) return n.data;
  if (!e?.silent) {
    let r = CNl(t),
      o = n.error.issues[0];
    ke(Error(`roster.json parse failed (orphaning ${r} worker(s)): ${o?.message}`)), G("tengu_bg_roster_parse_failed", {
      orphaned: r,
      quarantined: 1,
      issuePath: o?.path.map(s => typeof s === "string" && !w$f.has(s) ? "*" : String(s)).join("."),
      issueCode: Oo(o?.code)
    }), await gnr();
  }
  return {
    ...z7t(),
    parseFailed: !0
  };
}
async function gnr() {
  await Wfe.rename(gse(), `${gse()}.corrupt.${Date.now()}`).catch(e => ke(e));
}
function CNl(e) {
  let t = e !== null && typeof e === "object" ? e.workers : void 0;
  return t !== null && typeof t === "object" && !Array.isArray(t) ? Object.keys(t).length : 0;
}
async function I$f(e) {
  let t = gse();
  await Wfe.mkdir(xNl.dirname(t), {
    recursive: !0,
    mode: 448
  }).catch(() => {}), await eg(t, De(e, null, 2), 384).catch(n => {
    let r = on(n);
    if (r && Jie.has(r)) {
      T(`[daemon] roster write failed: ${r}`, {
        level: "error"
      });
      return;
    }
    throw n;
  });
}
function CEt(e) {
  let t = INl.then(async () => {
    let n = await h3(),
      r = e(n) ?? n;
    r.supervisorPid = process.pid, r.updatedAt = Date.now(), await I$f(r);
  });
  return INl = t.catch(() => {}), t;
}
var Wfe,
  xNl,
  w$f,
  C$f = 8388608,
  INl;