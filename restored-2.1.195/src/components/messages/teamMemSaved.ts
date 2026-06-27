// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gIo
// matched 2.1.88 source: src/components/messages/teamMemSaved.ts
// class=modified  jaccard=0.4313  score=0.6569  fileCov=0.5567
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gIo = E(() => {
  AW();
  Ye();
  UX();
  dzn();
  ((Gal = R(lt(), 1)), (a_t = R(se(), 1)), (jal = `learn more: ${u5e}`));
});
function Wal(e) {
  let t = e.teamCount ?? 0;
  if (t === 0) return null;
  return {
    segment: `${t} team ${t === 1 ? "memory" : "memories"}`,
    count: t,
  };
}
var qal;
