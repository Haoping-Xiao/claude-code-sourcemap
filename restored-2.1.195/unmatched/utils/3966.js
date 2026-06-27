// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QVt
// matched 2.1.88 source: src/services/analytics/metadata.ts
// class=new  jaccard=0.0151  score=0.1367  fileCov=0.0167
// note: nearest: src/services/analytics/metadata.ts (0.0151); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QVt] deps: kt, Rm, Bi, sa
zQa = require("path");
function Zc(e, t, n) {
  if (uTo) return;
  if (e === "skills_load_ms" && ZVt[e] !== void 0) return;
  if (ZVt[e] = Math.round(t), n !== void 0) YQa[e] = Math.round(n);
}
function rZa(e) {
  return ZVt[e];
}
function oZa() {
  let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
  if (!Number.isFinite(e)) return;
  Zc("spawn_to_exec_ms", Date.now() - process.uptime() * 1000 - e, e - performance.timeOrigin);
}
function sZa() {
  dTo = true;
}
function iZa() {
  cTo = performance.now();
}
function aZa(e, t) {
  XQa = e === null ? "miss" : cTo !== void 0 && cTo < t ? "hit" : "pending";
}
function lZa(e, t, n, r, o, s) {
  JQa = e, QQa = t, ZQa = n, eZa = r, tZa = o, nZa = s;
}
function cZa() {
  let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
  if (!Number.isFinite(e)) return;
  Zc("first_message_read_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
}
function uZa() {
  let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
  if (!Number.isFinite(e)) return;
  Zc("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
}
function dZa() {
  if (!ut(process.env.CLAUDE_CODE_REMOTE)) return;
  if (uTo || Object.keys(ZVt).length === 0) return;
  return uTo = true, {
    entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    warm_spare_claimed: dTo,
    resume_hydrate_prefetch: XQa,
    resume_hydrate_on_disk_bytes: JQa,
    resume_hydrate_ccr_bytes: QQa,
    resume_hydrate_ccr_events: ZQa,
    resume_hydrate_delta_events: eZa,
    resume_hydrate_delta_fetch_attempted: tZa,
    resume_hydrate_anchor_walkback: nZa,
    phases: {
      ...ZVt
    },
    time_origin_ms: performance.timeOrigin,
    phase_start_ms: {
      ...YQa
    }
  };
}
function pZa() {
  if (m8n !== void 0) return;
  let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
  if (!Number.isFinite(e)) return;
  m8n = Date.now() - e;
}
function fZa() {
  if (KQa || m8n === void 0) return;
  return KQa = true, {
    ms: m8n,
    warmSpareClaimed: dTo,
    timeOriginMs: performance.timeOrigin
  };
}
var ZVt,
  YQa,
  dTo = false,
  cTo,
  XQa,
  JQa,
  QQa,
  ZQa,
  eZa,
  tZa,
  nZa,
  uTo = false,
  m8n,
  KQa = false;