// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ybe
// matched 2.1.88 source: src/utils/bash/bashParser.ts
// class=partial  jaccard=0.1394  score=0.9052  fileCov=0.1415
// note: low-confidence suggestion: src/utils/bash/bashParser.ts; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ybe = E(() => {
  knp = {
    parse: Nnp
  }, UTy = Promise.resolve();
  dct = new Set(["?", "$", "@", "*", "#", "-", "!", "_"]), Rnp = new Set(["export", "declare", "typeset", "readonly", "local"]), Oro = new Set(["if", "then", "elif", "else", "fi", "while", "until", "for", "in", "do", "done", "case", "esac", "function", "select"]);
  crp = {
    "=": 2,
    "+=": 2,
    "-=": 2,
    "*=": 2,
    "/=": 2,
    "%=": 2,
    "<<=": 2,
    ">>=": 2,
    "&=": 2,
    "^=": 2,
    "|=": 2,
    "||": 4,
    "&&": 5,
    "|": 6,
    "^": 7,
    "&": 8,
    "==": 9,
    "!=": 9,
    "<": 10,
    ">": 10,
    "<=": 10,
    ">=": 10,
    "<<": 11,
    ">>": 11,
    "+": 12,
    "-": 12,
    "*": 13,
    "/": 13,
    "%": 13,
    "**": 14
  }, urp = new Set(["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|=", "**"]);
});
var rra = {};
_t(rra, {
  parseCommandRaw: () => parseCommandRaw,
  parseCommand: () => parseCommand,
  findCommandNode: () => findCommandNode,
  extractCommandArguments: () => extractCommandArguments,
  PARSE_ABORTED: () => PARSE_ABORTED
});
async function parseCommand(e) {
  if (!e || e.length > nra) return null;
  try {
    let t = hL().parse(e);
    if (!t) return null;
    let n = findCommandNode(t, null),
      r = hrp(n);
    return {
      rootNode: t,
      envVars: r,
      commandNode: n,
      originalCommand: e
    };
  } catch {
    return null;
  }
}
async function parseCommandRaw(e) {
  if (!e) return null;
  if (e.length > nra) return G("tengu_tree_sitter_parse_abort", {
    cmdLength: e.length,
    panic: !1
  }), PARSE_ABORTED;
  try {
    let t = hL().parse(e);
    if (t === null) return G("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !1
    }), PARSE_ABORTED;
    return t;
  } catch {
    return G("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !0
    }), PARSE_ABORTED;
  }
}
function findCommandNode(e, t) {
  let {
    type: n,
    children: r
  } = e;
  if (Uro.has(n)) return e;
  if (n === "variable_assignment" && t) return t.children.find(o => Uro.has(o.type) && o.startIndex > e.startIndex) ?? null;
  if (n === "pipeline") {
    for (let o of r) {
      let s = findCommandNode(o, e);
      if (s) return s;
    }
    return null;
  }
  if (n === "redirected_statement") return r.find(o => Uro.has(o.type)) ?? null;
  for (let o of r) {
    let s = findCommandNode(o, e);
    if (s) return s;
  }
  return null;
}
function hrp(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let n of e.children) if (n.type === "variable_assignment") t.push(n.text);else if (n.type === "command_name" || n.type === "word") break;
  return t;
}
function extractCommandArguments(e) {
  if (e.type === "declaration_command") {
    let r = e.children[0];
    return r && mrp.has(r.text) ? [r.text] : [];
  }
  let t = [],
    n = !1;
  for (let r of e.children) {
    if (r.type === "variable_assignment") continue;
    if (r.type === "command_name" || !n && r.type === "word") {
      n = !0;
      let o = r.children[0] ?? r;
      if (o.type === "concatenation") t.push(o.children.some(s => Bro.has(s.type)) ? o.text : o.children.map(yOn).join(""));else t.push(yOn(o));
      continue;
    }
    if (grp.has(r.type)) t.push(yOn(r));else if (r.type === "concatenation") {
      if (r.children.some(o => Bro.has(o.type))) break;
      t.push(r.children.map(yOn).join(""));
    } else if (Bro.has(r.type)) break;
  }
  return t;
}
function yOn(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return yrp(e.text);
}
function yrp(e) {
  return e.length >= 2 && (e[0] === '"' && e.at(-1) === '"' || e[0] === "'" && e.at(-1) === "'") ? e.slice(1, -1) : e;
}
var nra = 1e4,
  mrp,
  grp,
  Bro,
  Uro,
  PARSE_ABORTED;