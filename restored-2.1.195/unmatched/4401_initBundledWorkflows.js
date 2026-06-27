// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DAl
// matched 2.1.88 source: src/components/tasks/RemoteSessionDetailDialog.tsx
// class=new  jaccard=0.0161  score=0.1188  fileCov=0.0182
// note: nearest: src/components/tasks/RemoteSessionDetailDialog.tsx (0.0161); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var DAl = E(() => {
  o7n();
  RAl = [{
    title: "Scope",
    detail: "Decompose question (from args) into 5 search angles"
  }, {
    title: "Search",
    detail: "5 parallel WebSearch agents, one per angle"
  }, {
    title: "Fetch",
    detail: "URL-dedup, fetch top 15 sources, extract falsifiable claims"
  }, {
    title: "Verify",
    detail: "3-vote adversarial verification per claim (need 2/3 refutes to kill)"
  }, {
    title: "Synthesize",
    detail: "Merge semantic dupes, rank by confidence, cite sources"
  }];
});
var PAl = {};
_t(PAl, {
  initBundledWorkflows: () => initBundledWorkflows
});
function initBundledWorkflows() {
  LAl(), wAl();
}