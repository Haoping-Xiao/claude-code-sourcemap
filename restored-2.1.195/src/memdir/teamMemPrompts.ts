// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MM
// matched 2.1.88 source: src/memdir/teamMemPrompts.ts
// class=modified  jaccard=0.2773  score=0.3695  fileCov=0.5261
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MM] deps: ft, Un, At, Uh
((O3e = require("fs/promises")), (FD = require("path")));
Yw = class Yw extends Error {
  constructor(e) {
    super(e);
    this.name = "PathTraversalError";
  }
};
function $Ni(e, t = !1) {
  let n = mm(),
    r = cT(),
    o = t
      ? [
          "## How to save memories",
          "",
          "Write each memory to its own file in the chosen directory (private or team, per the type's scope guidance) using this frontmatter format:",
          "",
          ...Lke,
          "",
          "- Keep the name, description, and type fields in memory files up-to-date with the content",
          "- Organize memory semantically by topic, not chronologically",
          "- Update or remove memories that turn out to be wrong or outdated",
          "- Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one.",
        ]
      : [
          "## How to save memories",
          "",
          "Saving a memory is a two-step process:",
          "",
          "**Step 1** \u2014 write the memory to its own file in the chosen directory (private or team, per the type's scope guidance) using this frontmatter format:",
          "",
          ...Lke,
          "",
          `**Step 2** \u2014 add a pointer to that file in \`${uH}\` in the private directory. The single \`${uH}\` indexes both private and team memories \u2014 use a path like \`file.md\` for private memories and \`team/file.md\` for team memories. Each entry should be one line, under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. It has no frontmatter. Never write memory content directly into \`${uH}\`.`,
          "",
          `- \`${uH}\` is loaded into your conversation context \u2014 lines after ${D7} will be truncated, so keep the index concise`,
          "- Keep the name, description, and type fields in memory files up-to-date with the content",
          "- Organize memory semantically by topic, not chronologically",
          "- Update or remove memories that turn out to be wrong or outdated",
          "- Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one.",
        ];
  return [
    "# Memory",
    "",
    `You have a persistent, file-based memory system with two directories: a private directory at \`${n}\` and a shared team directory at \`${r}\`. ${a0n}`,
    "",
    "You should build up this memory system over time so that future conversations can have a complete picture of who the user is, how they'd like to collaborate with you, what behaviors to avoid or repeat, and the context behind the work the user gives you.",
    "",
    "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.",
    "",
    "## Memory scope",
    "",
    "There are two scope levels:",
    "",
    `- private: memories that are private between you and the current user. They persist across conversations with only this specific user and are stored at the root \`${n}\`.`,
    `- team: memories that are shared with and contributed by all of the users who work within this project directory. Team memories are synced at the beginning of every session and they are stored at \`${r}\`.`,
    "",
    ...MNt($Nt),
    ...NNt,
    "- You MUST avoid saving sensitive data within shared team memories. For example, never save API keys or user credentials.",
    "",
    ...o,
    "",
    "## When to access memories",
    "- When memories (personal or team) seem relevant, or the user references prior work with them or others in their organization.",
    "- You MUST access memory when the user explicitly asks you to check, recall, or remember.",
    "- If the user says to *ignore* or *not use* memory: Do not apply remembered facts, cite, compare against, or mention memory content.",
    u0n,
    "",
    ...BNt,
    "",
    "## Memory and other forms of persistence",
    "Memory is one of several persistence mechanisms available to you as you assist the user in a given conversation. The distinction is often that memory can be recalled in future conversations and should not be used for persisting information that is only useful within the scope of the current conversation.",
    "- When to use or update a plan instead of memory: If you are about to start a non-trivial implementation task and would like to reach alignment with the user on your approach you should use a Plan rather than saving this information to memory. Similarly, if you already have a plan within the conversation and you have changed your approach persist that change by updating the plan rather than saving a memory.",
    "- When to use or update tasks instead of memory: When you need to break your work in current conversation into discrete steps or keep track of your progress use tasks instead of saving to memory. Tasks are great for persisting information about the work that needs to be done in the current conversation, but memory should be reserved for information that will be useful in future conversations.",
    ...(e ?? []),
  ].join(`
`);
}
function ONi(e, t, n, r = !1) {
  let o = cT(),
    s = (_) => (p0n.join(o, _) + p0n.sep).normalize("NFC"),
    i = e.map((_) => s(_.mount)),
    a = t.map((_) => s(_.mount)),
    l = e.length === 1,
    c = i[0],
    u = e.length > 0,
    d = l
      ? `You have a persistent, file-based team memory directory at \`${c}\`. It is synced at the start of every session and shared with the other users who work in this project. ${P_e}`
      : u
        ? `You have a persistent, file-based team memory system with ${i.length} directories, each synced and shared with the other users in this project:
${i.map((_) => `- \`${_}\``).join(`
`)}
These directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).`
        : "You have read-only access to team memory synced from your project. You cannot persist new memories in this session.",
    p =
      a.length > 0
        ? [
            "",
            `You also have read-only team memory at ${a.map((_) => `\`${_}\``).join(", ")}. Read from ${a.length === 1 ? "it" : "these"} when relevant, but do not write there \u2014 changes will not persist.`,
          ]
        : [],
    f = (_) => _.promptIndex ?? uH,
    m = e.every((_) => _.promptIndex !== void 0),
    g = l
      ? `\`${c}\``
      : `the appropriate team directory (${i.map((_) => `\`${_}\``).join(" or ")})`,
    h = l
      ? `${c}${f(e[0])}`
      : `the index file in that same directory (${e.map((_) => `\`${s(_.mount)}${f(_)}\``).join(", ")})`,
    y = !u
      ? []
      : r
        ? [
            "",
            "## How to save memories",
            "",
            `Write each memory to its own file in ${g} using this frontmatter format:`,
            "",
            ...Lke,
            "",
            "- Keep the name, description, and type fields in memory files up-to-date with the content",
            "- Organize memory semantically by topic, not chronologically",
            "- Update or remove memories that turn out to be wrong or outdated",
            "- Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one.",
          ]
        : [
            "",
            "## How to save memories",
            "",
            "Saving a memory is a two-step process:",
            "",
            `**Step 1** \u2014 write the memory to its own file in ${g} using this frontmatter format:`,
            "",
            ...Lke,
            "",
            `**Step 2** \u2014 add a pointer to that file in ${l ? `\`${h}\`` : h}. Each entry should be one line, under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. The index has no frontmatter. Never write memory content directly into the index.`,
            "",
            m
              ? `- The index file is loaded into your conversation context \u2014 lines after ${D7} will be truncated, so keep it concise`
              : "- Keep the index concise so you can scan it quickly when recalling memories",
            "- Keep the name, description, and type fields in memory files up-to-date with the content",
            "- Organize memory semantically by topic, not chronologically",
            "- Update or remove memories that turn out to be wrong or outdated",
            "- Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one.",
          ];
  return [
    "# Memory",
    "",
    d,
    ...p,
    ...(u
      ? [
          "",
          "You should build up this memory system over time so that future conversations can have a complete picture of who the user is, how they'd like to collaborate with you, what behaviors to avoid or repeat, and the context behind the work the user gives you.",
          "",
          "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.",
        ]
      : [
          "",
          "If the user asks you to remember something, explain that memory is read-only in this session.",
        ]),
    "",
    ...MNt($Nt),
    ...(u
      ? [
          "",
          `There is no separate private memory directory in this session. Save every memory type to ${l ? `\`${c}\`` : "one of the team directories listed above"}, bearing in mind it is shared with teammates.`,
        ]
      : []),
    ...NNt,
    "- You MUST avoid saving sensitive data within shared team memories. For example, never save API keys or user credentials.",
    ...y,
    "",
    "## When to access memories",
    "- When memories seem relevant, or the user references prior work with them or others in their organization.",
    "- You MUST access memory when the user explicitly asks you to check, recall, or remember.",
    "- If the user says to *ignore* or *not use* memory: Do not apply remembered facts, cite, compare against, or mention memory content.",
    u0n,
    "",
    ...BNt,
    "",
    "## Memory and other forms of persistence",
    "Memory is one of several persistence mechanisms available to you as you assist the user in a given conversation. The distinction is often that memory can be recalled in future conversations and should not be used for persisting information that is only useful within the scope of the current conversation.",
    "- When to use or update a plan instead of memory: If you are about to start a non-trivial implementation task and would like to reach alignment with the user on your approach you should use a Plan rather than saving this information to memory. Similarly, if you already have a plan within the conversation and you have changed your approach persist that change by updating the plan rather than saving a memory.",
    "- When to use or update tasks instead of memory: When you need to break your work in current conversation into discrete steps or keep track of your progress use tasks instead of saving to memory. Tasks are great for persisting information about the work that needs to be done in the current conversation, but memory should be reserved for information that will be useful in future conversations.",
    ...(n ?? []),
  ].join(`
`);
}
var p0n;
