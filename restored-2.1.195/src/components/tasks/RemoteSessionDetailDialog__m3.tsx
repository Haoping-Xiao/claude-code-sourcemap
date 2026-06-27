// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DAl
// matched 2.1.88 source: src/components/tasks/RemoteSessionDetailDialog.tsx
// class=modified (alt of src/components/tasks/RemoteSessionDetailDialog.tsx)  jaccard=0.0127  score=0.1398  fileCov=0.0138
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: initBundledWorkflows
// [unwrapped __esm module DAl] deps: o7n
RAl = [
  {
    title: "Scope",
    detail: "Decompose question (from args) into 5 search angles",
  },
  {
    title: "Search",
    detail: "5 parallel WebSearch agents, one per angle",
  },
  {
    title: "Fetch",
    detail: "URL-dedup, fetch top 15 sources, extract falsifiable claims",
  },
  {
    title: "Verify",
    detail: "3-vote adversarial verification per claim (need 2/3 refutes to kill)",
  },
  {
    title: "Synthesize",
    detail: "Merge semantic dupes, rank by confidence, cite sources",
  },
];
function initBundledWorkflows() {
  (LAl(), wAl());
}
