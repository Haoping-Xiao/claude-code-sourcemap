// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UNt
// matched 2.1.88 source: src/memdir/memoryTypes.ts
// class=modified  jaccard=0.4114  score=0.5331  fileCov=0.6431
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var UNt = E(() => {
  Un();
  PNt();
  KKr = ["user", "feedback", "project", "reference"];
  hNd = {
    user: "the user's role, expertise, or working preferences",
    feedback:
      "a correction or confirmation of how you should approach work. Confirmations ('yes, good call') are quieter than corrections \u2014 watch for them",
    project: "ongoing work, deadlines, or decisions not derivable from code or git history",
    reference:
      "where to find information in an external system (issue tracker, dashboard, channel)",
  };
  (($Nt = [
    "## Types of memory",
    "",
    "There are several discrete types of memory that you can store in your memory system. Each type below declares a <scope> of `private`, `team`, or guidance for choosing between the two.",
    "",
    "<types>",
    "<type>",
    "    <name>user</name>",
    "    <scope>always private</scope>",
    "    <description>Contain information about the user's role, goals, responsibilities, and knowledge. Great user memories help you tailor your future behavior to the user's preferences and perspective. Your goal in reading and writing these memories is to build up an understanding of who the user is and how you can be most helpful to them specifically. For example, you should collaborate with a senior software engineer differently than a student who is coding for the very first time. Keep in mind, that the aim here is to be helpful to the user. Avoid writing memories about the user that could be viewed as a negative judgement or that are not relevant to the work you're trying to accomplish together.</description>",
    "    <when_to_save>When you learn any details about the user's role, preferences, responsibilities, or knowledge</when_to_save>",
    "    <how_to_use>When your work should be informed by the user's profile or perspective. For example, if the user is asking you to explain a part of the code, you should answer that question in a way that is tailored to the specific details that they will find most valuable or that helps them build their mental model in relation to domain knowledge they already have.</how_to_use>",
    "    <examples>",
    "    user: I'm a data scientist investigating what logging we have in place",
    "    assistant: [saves private user memory: user is a data scientist, currently focused on observability/logging]",
    "",
    "    user: I've been writing Go for ten years but this is my first time touching the React side of this repo",
    "    assistant: [saves private user memory: deep Go expertise, new to React and this project's frontend \u2014 frame frontend explanations in terms of backend analogues]",
    "    </examples>",
    "</type>",
    "<type>",
    "    <name>feedback</name>",
    "    <scope>default to private. Save as team only when the guidance is clearly a project-wide convention that every contributor should follow (e.g., a testing policy, a build invariant), not a personal style preference.</scope>",
    "    <description>Guidance the user has given you about how to approach work \u2014 both what to avoid and what to keep doing. These are a very important type of memory to read and write as they allow you to remain coherent and responsive to the way you should approach work in the project. Record from failure AND success: if you only save corrections, you will avoid past mistakes but drift away from approaches the user has already validated, and may grow overly cautious. Before saving a private feedback memory, check that it doesn't contradict a team feedback memory \u2014 if it does, either don't save it or note the override explicitly.</description>",
    `    <when_to_save>Any time the user corrects your approach ("no not that", "don't", "stop doing X") OR confirms a non-obvious approach worked ("yes exactly", "perfect, keep doing that", accepting an unusual choice without pushback). Corrections are easy to notice; confirmations are quieter \u2014 watch for them. In both cases, save what is applicable to future conversations, especially if surprising or not obvious from the code. Include *why* so you can judge edge cases later.</when_to_save>`,
    "    <how_to_use>Let these memories guide your behavior so that the user and other users in the project do not need to offer the same guidance twice.</how_to_use>",
    "    <body_structure>Lead with the rule itself, then a **Why:** line (the reason the user gave \u2014 often a past incident or strong preference) and a **How to apply:** line (when/where this guidance kicks in). Knowing *why* lets you judge edge cases instead of blindly following the rule.</body_structure>",
    "    <examples>",
    "    user: don't mock the database in these tests \u2014 we got burned last quarter when mocked tests passed but the prod migration failed",
    "    assistant: [saves team feedback memory: integration tests must hit a real database, not mocks. Reason: prior incident where mock/prod divergence masked a broken migration. Team scope: this is a project testing policy, not a personal preference]",
    "",
    "    user: stop summarizing what you just did at the end of every response, I can read the diff",
    "    assistant: [saves private feedback memory: this user wants terse responses with no trailing summaries. Private because it's a communication preference, not a project convention]",
    "",
    "    user: yeah the single bundled PR was the right call here, splitting this one would've just been churn",
    "    assistant: [saves private feedback memory: for refactors in this area, user prefers one bundled PR over many small ones. Confirmed after I chose this approach \u2014 a validated judgment call, not a correction]",
    "    </examples>",
    "</type>",
    "<type>",
    "    <name>project</name>",
    "    <scope>private or team, but strongly bias toward team</scope>",
    "    <description>Information that you learn about ongoing work, goals, initiatives, bugs, or incidents within the project that is not otherwise derivable from the code or git history. Project memories help you understand the broader context and motivation behind the work users are working on within this working directory.</description>",
    '    <when_to_save>When you learn who is doing what, why, or by when. These states change relatively quickly so try to keep your understanding of this up to date. Always convert relative dates in user messages to absolute dates when saving (e.g., "Thursday" \u2192 "2026-03-05"), so the memory remains interpretable after time passes.</when_to_save>',
    "    <how_to_use>Use these memories to more fully understand the details and nuance behind the user's request, anticipate coordination issues across users, make better informed suggestions.</how_to_use>",
    "    <body_structure>Lead with the fact or decision, then a **Why:** line (the motivation \u2014 often a constraint, deadline, or stakeholder ask) and a **How to apply:** line (how this should shape your suggestions). Project memories decay fast, so the why helps future-you judge whether the memory is still load-bearing.</body_structure>",
    "    <examples>",
    "    user: we're freezing all non-critical merges after Thursday \u2014 mobile team is cutting a release branch",
    "    assistant: [saves team project memory: merge freeze begins 2026-03-05 for mobile release cut. Flag any non-critical PR work scheduled after that date]",
    "",
    "    user: the reason we're ripping out the old auth middleware is that legal flagged it for storing session tokens in a way that doesn't meet the new compliance requirements",
    "    assistant: [saves team project memory: auth middleware rewrite is driven by legal/compliance requirements around session token storage, not tech-debt cleanup \u2014 scope decisions should favor compliance over ergonomics]",
    "    </examples>",
    "</type>",
    "<type>",
    "    <name>reference</name>",
    "    <scope>usually team</scope>",
    "    <description>Stores pointers to where information can be found in external systems. These memories allow you to remember where to look to find up-to-date information outside of the project directory.</description>",
    "    <when_to_save>When you learn about resources in external systems and their purpose. For example, that bugs are tracked in a specific project in Linear or that feedback can be found in a specific Slack channel.</when_to_save>",
    "    <how_to_use>When the user references an external system or information that may be in an external system.</how_to_use>",
    "    <examples>",
    `    user: check the Linear project "INGEST" if you want context on these tickets, that's where we track all pipeline bugs`,
    '    assistant: [saves team reference memory: pipeline bugs are tracked in Linear project "INGEST"]',
    "",
    "    user: the Grafana board at grafana.internal/d/api-latency is what oncall watches \u2014 if you're touching request handling, that's the thing that'll page someone",
    "    assistant: [saves team reference memory: grafana.internal/d/api-latency is the oncall latency dashboard \u2014 check it when editing request-path code]",
    "    </examples>",
    "</type>",
    "</types>",
    "",
  ]),
    (ONt = [
      "## Types of memory",
      "",
      "There are several discrete types of memory that you can store in your memory system:",
      "",
      "<types>",
      "<type>",
      "    <name>user</name>",
      "    <description>Contain information about the user's role, goals, responsibilities, and knowledge. Great user memories help you tailor your future behavior to the user's preferences and perspective. Your goal in reading and writing these memories is to build up an understanding of who the user is and how you can be most helpful to them specifically. For example, you should collaborate with a senior software engineer differently than a student who is coding for the very first time. Keep in mind, that the aim here is to be helpful to the user. Avoid writing memories about the user that could be viewed as a negative judgement or that are not relevant to the work you're trying to accomplish together.</description>",
      "    <when_to_save>When you learn any details about the user's role, preferences, responsibilities, or knowledge</when_to_save>",
      "    <how_to_use>When your work should be informed by the user's profile or perspective. For example, if the user is asking you to explain a part of the code, you should answer that question in a way that is tailored to the specific details that they will find most valuable or that helps them build their mental model in relation to domain knowledge they already have.</how_to_use>",
      "    <examples>",
      "    user: I'm a data scientist investigating what logging we have in place",
      "    assistant: [saves user memory: user is a data scientist, currently focused on observability/logging]",
      "",
      "    user: I've been writing Go for ten years but this is my first time touching the React side of this repo",
      "    assistant: [saves user memory: deep Go expertise, new to React and this project's frontend \u2014 frame frontend explanations in terms of backend analogues]",
      "    </examples>",
      "</type>",
      "<type>",
      "    <name>feedback</name>",
      "    <description>Guidance the user has given you about how to approach work \u2014 both what to avoid and what to keep doing. These are a very important type of memory to read and write as they allow you to remain coherent and responsive to the way you should approach work in the project. Record from failure AND success: if you only save corrections, you will avoid past mistakes but drift away from approaches the user has already validated, and may grow overly cautious.</description>",
      `    <when_to_save>Any time the user corrects your approach ("no not that", "don't", "stop doing X") OR confirms a non-obvious approach worked ("yes exactly", "perfect, keep doing that", accepting an unusual choice without pushback). Corrections are easy to notice; confirmations are quieter \u2014 watch for them. In both cases, save what is applicable to future conversations, especially if surprising or not obvious from the code. Include *why* so you can judge edge cases later.</when_to_save>`,
      "    <how_to_use>Let these memories guide your behavior so that the user does not need to offer the same guidance twice.</how_to_use>",
      "    <body_structure>Lead with the rule itself, then a **Why:** line (the reason the user gave \u2014 often a past incident or strong preference) and a **How to apply:** line (when/where this guidance kicks in). Knowing *why* lets you judge edge cases instead of blindly following the rule.</body_structure>",
      "    <examples>",
      "    user: don't mock the database in these tests \u2014 we got burned last quarter when mocked tests passed but the prod migration failed",
      "    assistant: [saves feedback memory: integration tests must hit a real database, not mocks. Reason: prior incident where mock/prod divergence masked a broken migration]",
      "",
      "    user: stop summarizing what you just did at the end of every response, I can read the diff",
      "    assistant: [saves feedback memory: this user wants terse responses with no trailing summaries]",
      "",
      "    user: yeah the single bundled PR was the right call here, splitting this one would've just been churn",
      "    assistant: [saves feedback memory: for refactors in this area, user prefers one bundled PR over many small ones. Confirmed after I chose this approach \u2014 a validated judgment call, not a correction]",
      "    </examples>",
      "</type>",
      "<type>",
      "    <name>project</name>",
      "    <description>Information that you learn about ongoing work, goals, initiatives, bugs, or incidents within the project that is not otherwise derivable from the code or git history. Project memories help you understand the broader context and motivation behind the work the user is doing within this working directory.</description>",
      '    <when_to_save>When you learn who is doing what, why, or by when. These states change relatively quickly so try to keep your understanding of this up to date. Always convert relative dates in user messages to absolute dates when saving (e.g., "Thursday" \u2192 "2026-03-05"), so the memory remains interpretable after time passes.</when_to_save>',
      "    <how_to_use>Use these memories to more fully understand the details and nuance behind the user's request and make better informed suggestions.</how_to_use>",
      "    <body_structure>Lead with the fact or decision, then a **Why:** line (the motivation \u2014 often a constraint, deadline, or stakeholder ask) and a **How to apply:** line (how this should shape your suggestions). Project memories decay fast, so the why helps future-you judge whether the memory is still load-bearing.</body_structure>",
      "    <examples>",
      "    user: we're freezing all non-critical merges after Thursday \u2014 mobile team is cutting a release branch",
      "    assistant: [saves project memory: merge freeze begins 2026-03-05 for mobile release cut. Flag any non-critical PR work scheduled after that date]",
      "",
      "    user: the reason we're ripping out the old auth middleware is that legal flagged it for storing session tokens in a way that doesn't meet the new compliance requirements",
      "    assistant: [saves project memory: auth middleware rewrite is driven by legal/compliance requirements around session token storage, not tech-debt cleanup \u2014 scope decisions should favor compliance over ergonomics]",
      "    </examples>",
      "</type>",
      "<type>",
      "    <name>reference</name>",
      "    <description>Stores pointers to where information can be found in external systems. These memories allow you to remember where to look to find up-to-date information outside of the project directory.</description>",
      "    <when_to_save>When you learn about resources in external systems and their purpose. For example, that bugs are tracked in a specific project in Linear or that feedback can be found in a specific Slack channel.</when_to_save>",
      "    <how_to_use>When the user references an external system or information that may be in an external system.</how_to_use>",
      "    <examples>",
      `    user: check the Linear project "INGEST" if you want context on these tickets, that's where we track all pipeline bugs`,
      '    assistant: [saves reference memory: pipeline bugs are tracked in Linear project "INGEST"]',
      "",
      "    user: the Grafana board at grafana.internal/d/api-latency is what oncall watches \u2014 if you're touching request handling, that's the thing that'll page someone",
      "    assistant: [saves reference memory: grafana.internal/d/api-latency is the oncall latency dashboard \u2014 check it when editing request-path code]",
      "    </examples>",
      "</type>",
      "</types>",
      "",
    ]),
    (NNt = [
      "## What NOT to save in memory",
      "",
      "- Code patterns, conventions, architecture, file paths, or project structure \u2014 these can be derived by reading the current project state.",
      "- Git history, recent changes, or who-changed-what \u2014 `git log` / `git blame` are authoritative.",
      "- Debugging solutions or fix recipes \u2014 the fix is in the code; the commit message has the context.",
      "- Anything already documented in CLAUDE.md files.",
      "- Ephemeral task details: in-progress work, temporary state, current conversation context.",
      "",
      "These exclusions apply even when the user explicitly asks you to save. If they ask you to save a PR list or activity summary, ask what was *surprising* or *non-obvious* about it \u2014 that is the part worth keeping.",
    ]),
    (PNi = [
      "## When to access memories",
      "- When memories seem relevant, or the user references prior-conversation work.",
      "- You MUST access memory when the user explicitly asks you to check, recall, or remember.",
      "- If the user says to *ignore* or *not use* memory: Do not apply remembered facts, cite, compare against, or mention memory content.",
      u0n,
    ]),
    (BNt = [
      "## Before recommending from memory",
      "",
      "A memory that names a specific function, file, or flag is a claim that it existed *when the memory was written*. It may have been renamed, removed, or never merged. Before recommending it:",
      "",
      "- If the memory names a file path: check the file exists.",
      "- If the memory names a function or flag: grep for it.",
      "- If the user is about to act on your recommendation (not just asking about history), verify first.",
      "",
      '"The memory says X exists" is not the same as "X exists now."',
      "",
      "A memory that summarizes repo state (activity logs, architecture snapshots) is frozen in time. If the user asks about *recent* or *current* state, prefer `git log` or reading the code over recalling the snapshot.",
    ]),
    (Lke = kNi(KKr)));
});
function JKr(e) {
  if (e.includes("\x00")) throw new Yw(`Null byte in path key: "${e}"`);
  let t;
  try {
    t = decodeURIComponent(e);
  } catch {
    t = e;
  }
  if (t !== e && (t.includes("..") || t.includes("/")))
    throw new Yw(`URL-encoded traversal in path key: "${e}"`);
  let n = e.normalize("NFKC");
  if (n !== e && (n.includes("..") || n.includes("/") || n.includes("\\") || n.includes("\x00")))
    throw new Yw(`Unicode-normalized traversal in path key: "${e}"`);
  if (e.includes("\\")) throw new Yw(`Backslash in path key: "${e}"`);
  if (e.startsWith("/")) throw new Yw(`Absolute path key: "${e}"`);
  return e;
}
function cL() {
  if (!lu()) return false;
  if (process.env.CLAUDE_MEMORY_STORES?.trim()) return true;
  return at("tengu_herring_clock", false);
}
function cT() {
  return (FD.join(mm(), "team") + FD.sep).normalize("NFC");
}
async function QKr(...e) {
  let t = MNi(mm()),
    n = await O3e.realpath(FD.dirname(t));
  return FD.join(n, FD.basename(t), ...e);
}
async function M_e(e, ...t) {
  try {
    let n = await QKr(...t);
    return (await O3e.realpath(MNi(e))) === n ? "ok" : "escape";
  } catch (n) {
    let r = on(n);
    if (r === "ENOENT" || r === "ENOTDIR") return "absent";
    return "escape";
  }
}
function ZKr() {
  if (!cL()) return false;
  return ACt() === "has-content";
}
async function eYr(e) {
  let t = [],
    n = e;
  for (let r = FD.dirname(n); n !== r; r = FD.dirname(n))
    try {
      let o = await O3e.realpath(n);
      return t.length === 0 ? o : FD.join(o, ...t.reverse());
    } catch (o) {
      let s = on(o);
      if (s === "ENOENT")
        try {
          if ((await O3e.lstat(n)).isSymbolicLink())
            throw new Yw(`Dangling symlink detected (target does not exist): "${n}"`);
        } catch (i) {
          if (i instanceof Yw) throw i;
        }
      else if (s === "ELOOP") throw new Yw(`Symlink loop detected in path: "${n}"`);
      else if (s !== "ENOTDIR" && s !== "ENAMETOOLONG")
        throw new Yw(`Cannot verify path containment (${s}): "${n}"`);
      (t.push(n.slice(r.length + FD.sep.length)), (n = r));
    }
  return e;
}
async function _Nd(e) {
  let t;
  try {
    t = await O3e.realpath(cT().replace(/[/\\]+$/, ""));
  } catch (n) {
    let r = on(n);
    if (r === "ENOENT" || r === "ENOTDIR") return true;
    return false;
  }
  if (e === t) return true;
  return e.startsWith(t + FD.sep);
}
function $_e(e) {
  let t = FD.resolve(e).normalize("NFC").toLowerCase(),
    n = cT().normalize("NFC").toLowerCase();
  return t + FD.sep === n || t.startsWith(n);
}
async function d0n(e) {
  JKr(e);
  let t = cT(),
    n = FD.join(t, e),
    r = FD.resolve(n);
  if (!r.startsWith(t)) throw new Yw(`Key escapes team memory directory: "${e}"`);
  let o = await eYr(r);
  if (!(await _Nd(o))) throw new Yw(`Key escapes team memory directory via symlink: "${e}"`);
  return r;
}
function P7(e) {
  return cL() && $_e(e);
}
var O3e,
  FD,
  Yw,
  MNi = (e) => e.replace(/[/\\]+$/, "");
