// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VXn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VXn = E(() => {
  fh();
  hAl = [dAl, pAl, fAl, mAl, gAl], sLo = `${dAl}
${pAl}
${fAl}`, Gyf = `${sLo}
${mAl}
${gAl}`, iLo = `### Reuse

The angles above hunt for bugs; this one and the next two hunt for cleanup in
the changed code. ${Lbt}`, yAl = `## Phase 2 \u2014 Verify (1-vote, 3-state)

Dedup candidates that point at the same line/mechanism, keeping the one with
the most concrete failure scenario. For each remaining candidate, run **one
verifier** via the ${ss} tool: give it the diff, the relevant
file(s), and the candidate, and have it return exactly one of:

${aLo}

Keep candidates where the vote is CONFIRMED or PLAUSIBLE.
`, Wyf = `## Phase 2 \u2014 Verify (1-vote, recall-biased)

Dedup near-duplicates (same defect, same location, same reason \u2192 keep one). For
each remaining candidate, run **one verifier** via the ${ss} tool:
give it the diff, the relevant file(s), and the candidate; it returns exactly
one of **CONFIRMED / PLAUSIBLE / REFUTED**.

${lLo}

Keep **CONFIRMED and PLAUSIBLE**. Drop REFUTED.
`, qyf = `## Phase 3 \u2014 Sweep for gaps

Run **one more finder** as a fresh reviewer who has the verified list. Re-read
the diff and enclosing functions looking ONLY for defects not already listed.
Do not re-derive or re-confirm anything already there \u2014 the job is gaps. Focus
on what the first pass tends to miss: ${cLo}

Surface **up to 8 additional candidates**, each naming a defect not already on
the list. If nothing new, return an empty sweep \u2014 do not pad.
`, qXn = `\`medium effort \u2192 3+5 angles \xD7 6 candidates \u2192 1-vote verify \u2192 \u22648 findings\`

You are reviewing for **precision** at medium effort: every finding you surface
should be one a maintainer would act on.

${Rbt}
## Phase 1 \u2014 Find candidates (3 correctness angles + 3 cleanup angles + 1 altitude angle + 1 conventions angle, up to 6 each)

Run **8 independent finder angles** via the ${ss} tool. Each
surfaces **up to 6 candidate findings** with \`file\`, \`line\`, a one-line
\`summary\`, and a concrete \`failure_scenario\`.

${sLo}
${iLo}
${N$e}
${B$e}
${U$e}
${Dbt}
${Yzt}
Pass every candidate with a nameable failure scenario through \u2014 finders that
silently drop half-believed candidates bypass the verify step and are the
dominant cause of misses.

${yAl}
${uLo(8)}`, bAl = `\`high effort \u2192 3+5 angles \xD7 6 candidates \u2192 1-vote verify (recall-biased) \u2192 \u226410 findings\`

You are reviewing for **recall** at high effort: catch every real bug a careful
reviewer would catch in one sitting. At this level, catching real bugs matters
more than avoiding false positives. Err on the side of surfacing.

${Rbt}
## Phase 1 \u2014 Find candidates (3 correctness angles + 3 cleanup angles + 1 altitude angle + 1 conventions angle, up to 6 each)

Run **8 independent finder angles** via the ${ss} tool. Each
surfaces **up to 6 candidate findings** with \`file\`, \`line\`, a one-line
\`summary\`, and a concrete \`failure_scenario\`.

${sLo}
${iLo}
${N$e}
${B$e}
${U$e}
${Dbt}
${Yzt}
Pass every candidate with a nameable failure scenario through \u2014 finders that
silently drop half-believed candidates bypass the verify step and are the
dominant cause of misses.

${Wyf}
${uLo(10)}`, EAl = SAl("xhigh"), AAl = SAl("max");
});
function wAl() {
  r7n(`export const meta = {
  name: ${JSON.stringify(Dct)},
  description: ${JSON.stringify(HAl)},
  whenToUse: ${JSON.stringify(TAl)},
  phases: ${JSON.stringify(vAl)},
}

// code-review: Scope \u2192 Find (barrier) \u2192 group-by-location \u2192 Verify \u2192 Sweep (xhigh/max) \u2192 Synthesize
// Effort parameterization mirrors the inline /code-review cells:
//   high  \u2192 3 correctness + 5 cleanup angles \xD7 6 \u2192 \u226410 findings
//   xhigh \u2192 5 correctness + 5 cleanup angles \xD7 8 \u2192 sweep \u2192 \u226415 findings
//   max   \u2192 same structure as xhigh (the API reasoning effort differs, not the fan-out)
const LEVEL_PARAMS = {
  high: { correctnessAngles: 3, perAngle: 6, maxFindings: 10, sweep: false },
  xhigh: { correctnessAngles: 5, perAngle: 8, maxFindings: 15, sweep: true },
  max: { correctnessAngles: 5, perAngle: 8, maxFindings: 15, sweep: true },
}
const SWEEP_MAX = 8

const RAW_ARGS = (typeof args === "string" ? args : "").trim()
const FIRST = RAW_ARGS.split(/\\s+/)[0] || ""
// Own-property check so Object.prototype keys ("constructor", "toString") never parse as a level.
const FIRST_IS_LEVEL = Object.prototype.hasOwnProperty.call(LEVEL_PARAMS, FIRST)
const LEVEL = FIRST_IS_LEVEL ? FIRST : "high"
const TARGET = FIRST_IS_LEVEL ? RAW_ARGS.slice(FIRST.length).trim() : RAW_ARGS
const P = LEVEL_PARAMS[LEVEL]

// Prompt fragments shared with the inline /code-review cells (one source of truth).
const CORRECTNESS_ANGLES = ${JSON.stringify(Vyf)}
const CLEANUP_ANGLES = ${JSON.stringify(zyf)}
const VERDICT_LADDER = ${JSON.stringify(aLo)}
const VERDICT_LADDER_RECALL = ${JSON.stringify(lLo)}
const CLEANUP_PRECEDENCE = ${JSON.stringify(Yzt)}
const SWEEP_GAP_FOCUS = ${JSON.stringify(cLo)}

// \u2500\u2500\u2500 Schemas \u2500\u2500\u2500
const SCOPE_SCHEMA = {
  type: "object", required: ["diffCommand", "files", "summary"],
  properties: {
    diffCommand: { type: "string" },
    files: { type: "array", items: { type: "string" } },
    claudeMdFiles: { type: "array", items: { type: "string" } },
    summary: { type: "string" },
    conventions: { type: "string" },
  },
}
const CANDIDATES_SCHEMA = {
  type: "object", required: ["candidates"],
  properties: {
    candidates: { type: "array", items: {
      type: "object", required: ["file", "summary", "failure_scenario"],
      properties: {
        file: { type: "string", description: "repo-relative path exactly as listed under Changed files in the review scope" },
        line: { type: "number" },
        summary: { type: "string" },
        failure_scenario: { type: "string" },
      },
    }},
  },
}
// One verifier per distinct (file, line) location, returning a verdict per
// candidate at that location \u2014 instead of one verifier per candidate. Cuts
// verifier-agent count by the cross-finder location-collision rate (~40% at
// p50) without dropping any candidate.
const GROUP_VERDICT_SCHEMA = {
  type: "object", required: ["verdicts"],
  properties: {
    verdicts: { type: "array", items: {
      type: "object", required: ["index", "verdict", "evidence"],
      properties: {
        index: { type: "number", description: "the [i] label of the candidate this verdict is for" },
        verdict: { enum: ["CONFIRMED", "PLAUSIBLE", "REFUTED"] },
        evidence: { type: "string" },
      },
    }},
  },
}
const REPORT_SCHEMA = {
  type: "object", required: ["summary", "decisions"],
  properties: {
    summary: { type: "string" },
    decisions: { type: "array", items: {
      type: "object", required: ["index"],
      properties: {
        index: { type: "number", description: "the [i] label of a finding to keep in the report" },
        merge: { type: "array", items: { type: "number" }, description: "[i] labels of findings that describe the same root cause, folded into this one" },
      },
    }},
  },
}

// \u2500\u2500\u2500 Phase 0: Scope \u2500\u2500\u2500
phase("Scope")
const scope = await agent(
  "Establish the scope of a code review.\\n\\n" +
  (TARGET
    ? "Review target / instructions (passed by the user, verbatim): \\"" + TARGET + "\\". If it names a PR number, branch, ref range, or file path, build the matching git diff command for it; if it is a free-form instruction (e.g. only review certain files, focus on certain areas), honor any scope restriction when building the diff command and start from the current branch diff ('git diff @{upstream}...HEAD', falling back to 'git diff main...HEAD' or 'git diff HEAD~1') for whatever it does not narrow.\\n"
    : "No explicit target \u2014 review the current branch: prefer 'git diff @{upstream}...HEAD' (fall back to 'git diff main...HEAD' or 'git diff HEAD~1'), and if there are uncommitted changes also include 'git diff HEAD'.\\n") +
  "\\n1. Determine the exact diff command(s) for the review and run them to confirm they produce a non-empty diff.\\n" +
  "2. List the changed files.\\n" +
  "3. Summarize what changed in one paragraph.\\n" +
  "4. List the CLAUDE.md files that apply to the changed files (the user-level ~/.claude/CLAUDE.md, the repo-root CLAUDE.md, plus any CLAUDE.md or CLAUDE.local.md in a directory that is an ancestor of a changed file). Read each one that exists and note conventions a reviewer should know.\\n\\n" +
  "Return diffCommand exactly as a reviewer should run it. Structured output only.",
  { label: "scope", schema: SCOPE_SCHEMA }
)
if (!scope) {
  return { error: "Scope agent returned no result \u2014 cannot establish the review scope." }
}
if (!scope.files || scope.files.length === 0) {
  return { level: LEVEL, target: TARGET || undefined, summary: "No changes found to review.", findings: [], stats: { finders: 0, candidates: 0, verifierAgents: 0, verified: 0 } }
}
log(LEVEL + " review: " + scope.files.length + " changed files")

const claudeMdFiles = scope.claudeMdFiles || []
const SCOPE_BLOCK =
  "## Review scope\\n" +
  "Diff command: " + scope.diffCommand + "\\n" +
  "Changed files (" + scope.files.length + "):\\n" +
  scope.files.map(f => "  - " + f).join("\\n") + "\\n" +
  "Applicable CLAUDE.md files (" + claudeMdFiles.length + "):\\n" +
  (claudeMdFiles.length > 0 ? claudeMdFiles.map(f => "  - " + f).join("\\n") : "  (none)") + "\\n\\n" +
  "## What changed\\n" + scope.summary + "\\n\\n" +
  "## Conventions\\n" + (scope.conventions || "(none noted)") + "\\n" +
  // The user's verbatim target/instructions ride along to every finder,
  // verifier, and sweep agent so focus areas and skip requests are honored,
  // not just used for diff scoping.
  (TARGET
    ? "\\n## User instructions (verbatim)\\n" + TARGET + "\\nHonor any scope restrictions or focus areas stated above \u2014 they take precedence over your angle's default breadth. Do not surface findings the instructions ask to skip.\\n"
    : "")

// \u2500\u2500\u2500 Prompts \u2500\u2500\u2500
const FINDER_PROMPT = f =>
  "## Code-review finder \u2014 " + f.label + "\\n\\n" + SCOPE_BLOCK + "\\n" +
  "Run the diff command above and review ONLY through the lens of your assigned angle:\\n\\n" +
  f.text + "\\n" +
  (f.kind === "cleanup" ? CLEANUP_PRECEDENCE + "\\n" : "") +
  "Surface up to " + P.perAngle + " candidate findings, each with file, line, a one-line summary, and a concrete failure_scenario \u2014 the user-visible consequence (error, wrong output, data loss), not an intermediate state (value stale, set grows). " +
  "Pass every candidate with a nameable failure scenario through \u2014 do not silently drop half-believed candidates; an independent verifier judges them next. " +
  "If nothing qualifies, return an empty list.\\n\\nStructured output only."

// Finders may return absolute, repo-relative, or backslash-separated paths
// for the same file. Normalize once at ingest by suffix-matching against
// scope.files (which the Scope agent returns repo-relative) so every
// downstream consumer \u2014 group key, verifier prompt header, synthesis block,
// final report \u2014 sees the same path. Longest match wins so that when one
// changed-file path is itself a suffix of another (util/x.ts vs a/util/x.ts),
// an absolute path canonicalizes to the more-specific entry.
const canonFile = raw => {
  if (!raw) return ""
  const p = raw.replace(/\\\\/g, "/")
  let best = ""
  for (const sf of scope.files) {
    if ((p === sf || p.endsWith("/" + sf)) && sf.length > best.length) best = sf
  }
  return best || p
}
const ingest = (cs, cap, kind) => cs.slice(0, cap).map(c => ({ ...c, file: canonFile(c.file), kind }))
const loc = c => c.file + (c.line != null ? ":" + c.line : "")
const inBounds = (i, n) => Number.isInteger(i) && i >= 0 && i < n

const GROUP_VERIFIER_PROMPT = group =>
  "## Code-review verifier\\n\\n" + SCOPE_BLOCK + "\\n" +
  "## Candidate findings at " + loc(group[0]) + "\\n" +
  group.map((c, i) =>
    "[" + i + "] Summary: " + c.summary + "\\n" +
    "    Failure scenario: " + c.failure_scenario
  ).join("\\n") + "\\n\\n" +
  "Run the diff command above, read the relevant file(s), and return one verdict per candidate. " +
  "Judge EACH candidate independently on its own claim \u2014 candidates at the same location may describe distinct issues, the same issue, or a mix. " +
  "Reference each by its [i] index.\\n\\n" +
  VERDICT_LADDER + "\\n\\n" + VERDICT_LADDER_RECALL + "\\n\\n" +
  "Structured output only. Evidence must quote or cite the relevant line(s)."

// \u2500\u2500\u2500 Same-location verifier merge \u2014 group ingested candidates by loc(c),
// one verifier agent per location returning N verdicts. Grouping is not
// dedup: every candidate keeps its own verdict; the synthesis step merges
// semantic dupes. A candidate the verifier did not render a verdict on
// (agent died, or it omitted that index) is dropped \u2014 same policy as the
// old per-candidate verifier \u2014 so unverified candidates never reach the
// report as fabricated PLAUSIBLE. Trade-off vs per-candidate: one verifier-
// agent failure now drops every candidate at that location instead of one.
let verifierAgents = 0

async function verifyGroups(candidates) {
  const byLoc = Object.create(null)
  for (const c of candidates) (byLoc[loc(c)] ||= []).push(c)
  const groups = Object.values(byLoc)
  verifierAgents += groups.length
  const out = await parallel(groups.map(g => async () => {
    const short = g[0].file.split("/").pop()
    const r = await agent(GROUP_VERIFIER_PROMPT(g), { label: "verify:" + short + "(" + g.length + ")", phase: "Verify", schema: GROUP_VERDICT_SCHEMA })
    if (!r) return []
    const byIdx = {}
    for (const v of r.verdicts) if (inBounds(v.index, g.length)) byIdx[v.index] = v
    return g.flatMap((c, i) => byIdx[i] ? [{ ...c, verdict: byIdx[i].verdict, evidence: byIdx[i].evidence }] : [])
  }))
  return out.filter(Boolean).flat()
}

// \u2500\u2500\u2500 Find (barrier) \u2192 group \u2192 Verify. The barrier is the deliberate trade
// for cross-finder location merge: grouping needs every finder's output, so
// wall-clock += max(finder) \u2212 median(finder) vs the old per-finder pipeline.
const FINDERS = CORRECTNESS_ANGLES.slice(0, P.correctnessAngles)
  .map(a => ({ ...a, kind: "correctness" }))
  .concat(CLEANUP_ANGLES.map(a => ({ ...a, kind: "cleanup" })))

const finderOuts = await parallel(FINDERS.map(f => () =>
  agent(FINDER_PROMPT(f), { label: f.label, phase: "Find", schema: CANDIDATES_SCHEMA }).then(r => {
    if (!r) return []
    log(f.label + ": " + r.candidates.length + " candidates")
    return ingest(r.candidates, P.perAngle, f.kind)
  })
))
const allCandidates = finderOuts.filter(Boolean).flat()
let candidatesSeen = allCandidates.length

let verified = await verifyGroups(allCandidates)

// \u2500\u2500\u2500 Sweep (xhigh/max): one fresh finder hunting only for gaps \u2500\u2500\u2500
if (P.sweep) {
  phase("Sweep")
  const knownBlock = verified.length > 0
    ? verified.map(c => "- " + loc(c) + " \u2014 " + c.summary).join("\\n")
    : "(none)"
  const sweep = await agent(
    "## Code-review sweep \u2014 gaps only\\n\\n" + SCOPE_BLOCK + "\\n" +
    "## Already-found candidates (do NOT re-derive or re-confirm these)\\n" + knownBlock + "\\n\\n" +
    "Re-read the diff and the enclosing functions looking ONLY for defects not already listed. " +
    "Focus on what the first pass tends to miss: " + SWEEP_GAP_FOCUS + "\\n\\n" +
    "Surface up to " + SWEEP_MAX + " additional candidates. If nothing new, return an empty list \u2014 do not pad.\\n\\nStructured output only.",
    { label: "sweep", phase: "Sweep", schema: CANDIDATES_SCHEMA }
  )
  if (sweep && sweep.candidates.length > 0) {
    const sliced = ingest(sweep.candidates, SWEEP_MAX, "correctness")
    candidatesSeen += sliced.length
    log("sweep: " + sliced.length + " candidates")
    const sweepVerified = await verifyGroups(sliced)
    verified = verified.concat(sweepVerified)
  }
}

const surviving = verified.filter(c => c.verdict !== "REFUTED")
const refuted = verified.filter(c => c.verdict === "REFUTED")
log("Verify done: " + verified.length + " verified \u2192 " + surviving.length + " kept, " + refuted.length + " refuted")

const stats = {
  level: LEVEL,
  finders: FINDERS.length,
  candidates: candidatesSeen,
  verifierAgents,
  verified: verified.length,
  refuted: refuted.length,
}

if (surviving.length === 0) {
  return {
    level: LEVEL, target: TARGET || undefined,
    summary: "No findings survived verification.",
    findings: [],
    stats,
  }
}

// \u2500\u2500\u2500 Synthesize: rank, merge semantic dupes, cap \u2500\u2500\u2500
phase("Synthesize")
// Correctness bugs outrank cleanup findings when the cap forces a cut;
// CONFIRMED outranks PLAUSIBLE within each group.
const rank = c => (c.kind === "cleanup" ? 2 : 0) + (c.verdict === "PLAUSIBLE" ? 1 : 0)
const ranked = surviving.slice().sort((a, b) => rank(a) - rank(b))
const block = ranked.map((c, i) =>
  "### [" + i + "] " + loc(c) + " (" + c.verdict + (c.kind === "cleanup" ? ", cleanup" : "") + ")\\n" +
  c.summary + "\\nFailure scenario: " + c.failure_scenario + "\\nVerifier evidence: " + c.evidence + "\\n"
).join("\\n")

const report = await agent(
  "## Synthesis: final code-review report\\n\\n" +
  ranked.length + " findings survived independent verification (" + LEVEL + "-effort review). They are numbered [0]-[" + (ranked.length - 1) + "] below.\\n\\n" + block + "\\n" +
  "## Instructions\\n" +
  "Return decisions about findings BY INDEX \u2014 never re-emit finding text.\\n" +
  "1. For each distinct defect, emit one decision with its index. When several findings describe the same defect (same root cause), keep one entry and list the others in its merge array.\\n" +
  "2. Order decisions most-severe first. Correctness bugs always outrank cleanup findings.\\n" +
  "3. Keep at most " + P.maxFindings + " decisions; omit the least severe beyond the cap.\\n" +
  "4. Write a 2-3 sentence summary of the review.\\n\\nStructured output only.",
  { label: "synthesize", schema: REPORT_SCHEMA }
)

// Assembler invariants:
//   1. No silent drops while there is room: every verified finding either appears
//      (as primary or merge note) or is omitted only because the cap is full.
//   2. The displayed primary is the synthesizer's choice (d.index) \u2014 it picks the
//      best-described representative; we only escalate the verdict label when a
//      merged member is CONFIRMED.
//   3. The summary describes the report actually returned.
const decisions = report && Array.isArray(report.decisions) ? report.decisions : []
const seen = new Set()
const claim = i => (inBounds(i, ranked.length) && !seen.has(i) ? (seen.add(i), true) : false)
const findings = []
for (const d of decisions) {
  if (findings.length >= P.maxFindings) break
  if (!claim(d.index)) continue
  const c = ranked[d.index]
  const merged = (Array.isArray(d.merge) ? d.merge : []).filter(claim).map(i => ranked[i])
  const verdict = merged.some(m => m.verdict === "CONFIRMED") ? "CONFIRMED" : c.verdict
  const also = merged.length > 0 ? " [same root cause also at: " + merged.map(loc).join(", ") + "]" : ""
  findings.push({ file: c.file, line: c.line, summary: c.summary + also, failure_scenario: c.failure_scenario, verdict })
}
const usedDecisions = findings.length > 0
let backfilled = 0
for (let i = 0; i < ranked.length && findings.length < P.maxFindings; i++) {
  if (seen.has(i)) continue
  const c = ranked[i]
  findings.push({ file: c.file, line: c.line, summary: c.summary, failure_scenario: c.failure_scenario, verdict: c.verdict })
  backfilled++
}
const summary = usedDecisions && report
  ? report.summary + (backfilled > 0 ? " (" + backfilled + " additional verified finding" + (backfilled === 1 ? "" : "s") + " appended unmerged.)" : "")
  : "Synthesis step was skipped or its decisions were unusable \u2014 returning verified findings ranked, unmerged."

return {
  level: LEVEL,
  target: TARGET || undefined,
  summary,
  findings,
  refuted: refuted.map(c => ({ file: c.file, line: c.line, summary: c.summary })),
  stats: { ...stats, reported: findings.length },
}`, {
    name: Dct,
    description: HAl,
    whenToUse: TAl,
    phases: vAl
  }, {
    hidden: true
  });
}
var HAl = "Workflow-backed code review \u2014 one finder agent per review angle, an independent verifier for every distinct (file, line) location across the pooled candidates, then a ranked, capped findings report.",
  TAl = 'Launched by the /code-review skill at high, xhigh, or max effort when workflows are enabled. Pass args as "<level> [target]" \u2014 level is high, xhigh, or max; target is an optional PR number, branch, ref range, path, or free-form review instructions (e.g. "only review src/foo.ts", "focus on error handling").',
  vAl,
  Vyf,
  zyf;