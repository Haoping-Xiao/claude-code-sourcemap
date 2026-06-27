// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uAl
// matched 2.1.88 source: src/utils/commitAttribution.ts
// class=new  jaccard=0.0153  score=0.0422  fileCov=0.0234
// note: nearest: src/utils/commitAttribution.ts (0.0153); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uAl = E(() => {
  Xr();
  ft();
  GXn();
  ii();
  At();
  kbt = require("fs/promises"), oLo = require("path"), Uyf = ve(() => H.strictObject({
    mode: H.enum(["check", "update", "create", "delete"]).default("check").describe("'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove a guide."),
    short_code: H.string().regex(/^[A-Za-z0-9_-]{1,64}$/).optional().describe("Short code of a specific guide to target (returned by a previous call). Honored by check, update, and delete \u2014 skips the org-wide lookup and targets this guide directly.")
  })), Fyf = ve(() => H.object({
    status: H.enum(["created", "updated", "deleted", "has_existing", "unavailable"]),
    share_url: H.string().optional(),
    short_code: H.string().optional(),
    message: H.string()
  })), jyf = ti({
    name: zzt,
    searchHint: "upload ONBOARDING.md and get a team share link",
    maxResultSizeChars: 1000,
    async description() {
      return tLo;
    },
    isEnabled() {
      return xbt();
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    get inputSchema() {
      return Uyf();
    },
    get outputSchema() {
      return Fyf();
    },
    async validateInput() {
      return {
        result: !0
      };
    },
    async prompt() {
      return tLo;
    },
    toAutoClassifierInput(e) {
      return `share onboarding guide (mode: ${e.mode ?? "check"})`;
    },
    isDestructive(e) {
      return e.mode === "delete";
    },
    renderToolUseMessage(e) {
      return e.mode && e.mode !== "check" ? e.mode : null;
    },
    async call({
      mode: e = "check",
      short_code: t
    }) {
      if (e === "delete") try {
        let s = t ?? (await nLo())?.short_code;
        if (!s) return ize("No guide found for this org to delete.");
        return await lAl(s), {
          data: {
            status: "deleted",
            message: `Guide ${s} deleted.`
          }
        };
      } catch (s) {
        let i = s instanceof Error ? s.message : String(s);
        return ize(`Delete didn't go through (${i}).`);
      }
      if (e === "check") try {
        let s = t ? (await eLo()).find(i => i.short_code === t) : await nLo();
        if (s) {
          let i = oLo.join(yr(), Kzt),
            a = null;
          try {
            a = (await kbt.stat(i)).size;
          } catch (u) {
            if (!wn(u)) throw u;
          }
          if (a === null) return {
            data: {
              status: "has_existing",
              share_url: s.share_url,
              short_code: s.short_code,
              message: `A guide already exists for this org at ${s.share_url} (short_code: ${s.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).`
            }
          };
          if (a > WXn) return ize(`${Kzt} is over ${WXn / 1024}KB. Trim it before sharing.`);
          let l = await kbt.readFile(i, "utf8"),
            c = await ZRo(s.short_code, l);
          return rLo("updated", c.share_url, c.short_code, !1);
        }
      } catch (s) {
        let i = s instanceof Error ? s.message : String(s);
        return ize(`Upload didn't go through (${i}). Fall back to the manual share copy.`);
      }
      let n = oLo.join(yr(), Kzt),
        r;
      try {
        r = (await kbt.stat(n)).size;
      } catch (s) {
        if (wn(s)) return ize(`${Kzt} not found in the current directory. Write the guide first.`);
        throw s;
      }
      if (r > WXn) return ize(`${Kzt} is over ${WXn / 1024}KB. Trim it before sharing.`);
      let o = await kbt.readFile(n, "utf8");
      try {
        if (e === "update") {
          let i = t ?? (await nLo())?.short_code;
          if (i) {
            let a = await ZRo(i, o);
            return rLo("updated", a.share_url, a.short_code, !0);
          }
        }
        let s = await aAl(o);
        return rLo("created", s.share_url, s.short_code, !1);
      } catch (s) {
        let i = s instanceof Error ? s.message : String(s);
        return ize(`Upload didn't go through (${i}). Fall back to the manual share copy.`);
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `[${e.status}] ${e.message}`
      };
    }
  });
});
var Rbt = "## Phase 0 \u2014 Gather the diff\n\nRun `git diff @{upstream}...HEAD` (or `git diff main...HEAD` / `git diff HEAD~1`\nif there's no upstream) to get the unified diff under review. If there are\nuncommitted changes, or the range diff is empty, also run `git diff HEAD` and\ninclude the working-tree changes in scope \u2014 the review often runs before the\ncommit. If a PR number, branch name, or file path was passed as an argument,\nreview that target instead. Treat this diff as the review scope.\n",
  Lbt = `Flag new code that re-implements something the codebase
already has \u2014 Grep shared/utility modules and files adjacent to the change,
and name the existing helper to call instead.
`,
  N$e = `### Simplification

Flag unnecessary complexity the diff adds: redundant or derivable state,
copy-paste with slight variation, deep nesting, dead code left behind. Name
the simpler form that does the same job.
`,
  B$e = `### Efficiency

Flag wasted work the diff introduces: redundant computation or repeated I/O,
independent operations run sequentially, blocking work added to startup or
hot paths. Also flag long-lived objects built from closures or captured
environments \u2014 they keep the entire enclosing scope alive for the object's
lifetime (a memory leak when that scope holds large values); prefer a
class/struct that copies only the fields it needs. Name the cheaper
alternative.
`,
  Dbt = `### Conventions (CLAUDE.md)

Find the CLAUDE.md files that govern the changed code: the user-level
~/.claude/CLAUDE.md, the repo-root CLAUDE.md, plus any CLAUDE.md or
CLAUDE.local.md in a directory that is an ancestor of a changed file (a
directory's CLAUDE.md only applies to files at or below it). Read each one
that exists, then check the diff for clear violations of the rules they state.

Only flag a violation when you can quote the exact rule and the exact line
that breaks it \u2014 no style preferences, no vague "spirit of the doc"
inferences. In the finding, name the CLAUDE.md path and quote the rule so the
report can cite it. If no CLAUDE.md applies, return nothing for this angle.
`,
  U$e = `### Altitude

Check that each change is implemented at the right depth, not as a fragile
bandaid. Special cases layered on shared infrastructure are a sign the fix
isn't deep enough \u2014 prefer generalizing the underlying mechanism over adding
special cases.
`;
var dAl = `### Angle A \u2014 line-by-line diff scan

Read every hunk in the diff, line by line. Then Read the enclosing function for
each hunk \u2014 bugs in unchanged lines of a touched function are in scope (the PR
re-exposes or fails to fix them). For every line ask: what input, state, timing,
or platform makes this line wrong? Look for inverted/wrong conditions,
off-by-one, null/undefined deref, missing \`await\`, falsy-zero checks,
wrong-variable copy-paste, error swallowed in catch, unescaped regex metachars.
`,
  pAl = `### Angle B \u2014 removed-behavior auditor

For every line the diff DELETES or replaces, name the invariant or behavior it
enforced, then search the new code for where that invariant is re-established.
If you can't find it, that's a candidate: a removed guard, a dropped error
path, a narrowed validation, a deleted test that was covering a real case.
`,
  fAl = `### Angle C \u2014 cross-file tracer

For each function the diff changes, find its callers (Grep for the symbol) and
check whether the change breaks any call site: a new precondition, a changed
return shape, a new exception, a timing/ordering dependency. Also check callees:
does a parallel change in the same PR make a call unsafe?
`,
  mAl = `### Angle D \u2014 language-pitfall specialist

Scan for the classic pitfalls of the diff's language/framework \u2014 for example:
JS falsy-zero, \`==\` coercion, closure-captured loop var; Python mutable default
args, late-binding closures; Go nil-map write, range-var capture; SQL injection;
timezone/DST drift; float equality. Flag any instance the diff introduces.
`,
  gAl = `### Angle E \u2014 wrapper/proxy correctness

When the PR adds or modifies a type that wraps another (cache, proxy, decorator,
adapter): check that every method routes to the wrapped instance and not back
through a registry/session/global \u2014 e.g. a caching provider holding a
\`delegate\` field that resolves IDs via \`session.get(...)\` instead of
\`delegate.get(...)\` will re-enter the cache or recurse. Also check that the
wrapper forwards all the methods the callers actually use.
`,
  hAl,
  sLo,
  Gyf,
  iLo,
  Yzt = "Cleanup, altitude, and conventions candidates use the same\n`file`/`line`/`summary` shape; in `failure_scenario`, state the concrete\ncost (what is duplicated, wasted, harder to maintain, or which CLAUDE.md rule\nis broken) instead of a crash. Correctness bugs always outrank cleanup,\naltitude, and conventions findings when the output cap forces a cut.\n",
  aLo = `- **CONFIRMED** \u2014 can name the inputs/state that trigger it and the wrong
  output or crash. Quote the line.
- **PLAUSIBLE** \u2014 mechanism is real, trigger is uncertain (timing, env,
  config). State what would confirm it.
- **REFUTED** \u2014 factually wrong (code doesn't say that) or guarded elsewhere.
  Quote the line that proves it.`,
  lLo = `**PLAUSIBLE by default** \u2014 do not refute a candidate for being "speculative" or
"depends on runtime state" when the state is realistic: concurrency races,
nil/undefined on a rare-but-reachable path (error handler, cold cache, missing
optional field), falsy-zero treated as missing, off-by-one on a boundary the
code does not exclude, retry storms / partial failures, regex/allowlist that
lost an anchor. These are PLAUSIBLE.

**REFUTED** only when constructible from the code: factually wrong (quote the
actual line); provably impossible (type/constant/invariant \u2014 show it); already
handled in this diff (cite the guard); or pure style with no observable effect.`,
  yAl,
  Wyf,
  cLo = `moved/extracted code that dropped a guard
or anchor; second-tier footguns (dataclass default evaluated once, \`hash()\`
non-determinism, lock-scope shrink, predicate methods with side effects);
setup/teardown asymmetry in tests; config defaults flipped.`,
  qyf,
  uLo = e => `## Output

Return findings as a JSON array of at most ${e} objects:

\`\`\`json
[
  {
    "file": "path/to/file.ext",
    "line": 123,
    "summary": "one-sentence statement of the bug",
    "failure_scenario": "concrete inputs/state \u2192 wrong output/crash"
  }
]
\`\`\`

Ranked most-severe first. If more than ${e} survive, keep the ${e} most
severe. If nothing survives verification, return \`[]\`.
`,
  _Al = `\`low effort \u2192 1 diff pass \u2192 no verify \u2192 \u22644 findings\`

## Turn 1 \u2014 read

One tool call: read the unified diff (\`git diff @{upstream}...HEAD; git diff HEAD\`
to cover both committed and uncommitted changes, or \`git diff main...HEAD\` /
the target passed as an argument). Skip test/fixture
hunks (\`test/\`, \`spec/\`, \`__tests__/\`, \`*_test.*\`, \`*.test.*\`,
\`fixtures/\`, \`testdata/\`) \u2014 test-file changes are not reviewed at this level.
No subagents, no full-file reads.

## Turn 2 \u2014 findings

Flag runtime-correctness bugs visible from the hunk alone: inverted/wrong
condition, off-by-one, null/undefined deref where adjacent lines show the value
can be absent, removed guard, falsy-zero check, missing \`await\`,
wrong-variable copy-paste, error swallowed in a catch that should propagate.
Also flag \u2014 still from the hunk alone \u2014 new code that duplicates an existing
helper visible in the diff context, and dead code the diff leaves behind.

Do **not** flag style, naming, perf, missing tests, or anything outside the
hunk.

Output at most **4 findings**, most-severe first, one line each:
\`path/to/file.ext:123 \u2014 what's wrong and the concrete failure\`. If nothing
qualifies, output exactly \`(none)\`.
`,
  qXn,
  bAl,
  SAl = e => `\`${e} effort \u2192 5+5 angles \xD7 8 candidates \u2192 1-vote verify \u2192 sweep \u2192 \u226415 findings\`

You are reviewing for **recall** at ${e === "max" ? "maximum" : "extra-high"} effort: catch every real bug. At
this level, catching real bugs matters more than avoiding false positives \u2014 a
missed bug ships. Err on the side of surfacing.

${Rbt}
## Phase 1 \u2014 Find candidates (5 correctness angles + 3 cleanup angles + 1 altitude angle + 1 conventions angle, up to 8 each)

Run **10 independent finder angles** via the ${ss} tool. Each
surfaces **up to 8 candidate findings**. Do NOT let one angle's conclusions
suppress another's \u2014 if two angles flag the same line for different reasons,
record both.

${Gyf}
${iLo}
${N$e}
${B$e}
${U$e}
${Dbt}
${Yzt}
${yAl}
This is recall mode \u2014 a single non-REFUTED vote carries the finding. Do NOT
drop on uncertainty.

${qyf}
${uLo(15)}`,
  EAl,
  AAl;