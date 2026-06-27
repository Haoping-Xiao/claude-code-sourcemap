// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rnl
// matched 2.1.88 source: src/utils/markdown.ts
// class=modified  jaccard=0.378  score=0.6333  fileCov=0.4839
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Rnl = E(() => {
  iwo = class iwo extends Error {
    constructor(e) {
      super(e);
      this.name = "PlanPreconditionError";
    }
  };
});
var Lnl = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use AskUserQuestion first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use AskUserQuestion to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use AskUserQuestion first, then use exit plan mode tool after clarifying the approach.
`;
function b6n() {
  if (Dnl) return;
  Dnl = true;
  let e = e5e.prototype.table;
  ug.use({
    tokenizer: {
      del(t) {
        let n = /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(t),
          r = n?.[1];
        if (!n || r === void 0) return;
        return {
          type: "del",
          raw: n[0],
          text: r,
          tokens: this.lexer.inlineTokens(r),
        };
      },
      def() {
        return;
      },
      table(t) {
        let n = this.rules.block.table.exec(t);
        if (!n) return;
        let r = n[0],
          o = r
            .split(
              `
`,
            )
            .map(stf),
          s = o.join(`
`),
          i = s === r ? e.call(this, t) : e.call(this, s + t.slice(r.length));
        if (i) {
          if (itf(o, i.header.length)) return;
          if (s !== r) i.raw = r;
        }
        return i;
      },
    },
  });
}
function S6n(e, t, n = null) {
  return (
    b6n(),
    ug
      .lexer(RMe(e))
      .map((r) => oR(r, t, 0, null, null, n))
      .join("")
      .trim()
  );
}
function oR(e, t, n = 0, r = null, o = null, s = null, i = false, a = vI()) {
  switch (e.type) {
    case "blockquote": {
      let l = (e.tokens ?? []).map((u) => oR(u, t, 0, null, null, s, false, a)).join(""),
        c = wt.dim(Kvs);
      return l
        .split(SP)
        .map((u) => (Ja(u).trim() ? `${c} ${wt.italic(u)}` : u))
        .join(SP);
    }
    case "code": {
      let l = e.lang ?? "",
        c = l.match(/^[\w.+#-]+/)?.[0] ?? "",
        u = s && l && s.supportsLanguage(l) ? l : s && c && s.supportsLanguage(c) ? c : "plaintext",
        d = l && !s?.supportsLanguage(l) ? wt.dim(l) + SP : "";
      if (!s) return d + e.text + SP;
      return (
        d +
        s.highlight(e.text, {
          language: u,
        }) +
        SP
      );
    }
    case "codespan":
      return Io("permission", t)(e.text);
    case "em":
      return wt.italic((e.tokens ?? []).map((l) => oR(l, t, 0, null, o, s, i, a)).join(""));
    case "strong":
      return wt.bold((e.tokens ?? []).map((l) => oR(l, t, 0, null, o, s, i, a)).join(""));
    case "del": {
      let l = (e.tokens ?? []).map((c) => oR(c, t, 0, null, o, s, i, a)).join("");
      return u4i() && wt.level > 0 ? wt.strikethrough(l) : `~~${l}~~`;
    }
    case "heading":
      switch (e.depth) {
        case 1:
          return (
            wt.bold.italic.underline(
              (e.tokens ?? []).map((l) => oR(l, t, 0, null, null, s, false, a)).join(""),
            ) +
            SP +
            SP
          );
        case 2:
          return (
            wt.bold((e.tokens ?? []).map((l) => oR(l, t, 0, null, null, s, false, a)).join("")) +
            SP +
            SP
          );
        default:
          return (
            wt.bold((e.tokens ?? []).map((l) => oR(l, t, 0, null, null, s, false, a)).join("")) +
            SP +
            SP
          );
      }
    case "hr":
      return "---";
    case "image": {
      if (!e.text && !e.title) return e.href;
      let l = e.text ? `${e.text} ` : "",
        c = e.title ? ` "${e.title}"` : "";
      return `${l}(${e.href}${c})`;
    }
    case "link": {
      let l = e.title ? ` ("${e.title}")` : "";
      if (e.href.startsWith("mailto:")) {
        let p = e.href.replace(/^mailto:/, "");
        return (e.text && e.text !== p ? `${e.text} (${p})` : p) + l;
      }
      let c = a ? rtf(e.href) : e.href,
        u = (e.tokens ?? []).map((p) => oR(p, t, 0, null, e, s, false, a)).join(""),
        d = Ja(u);
      if (d && d !== e.href)
        return (
          sP(c, u, {
            themeName: t,
            supportsHyperlinks: a,
          }) + l
        );
      return (
        sP(c, e.href, {
          themeName: t,
          supportsHyperlinks: a,
        }) + l
      );
    }
    case "list":
      return e.items
        .map((l, c) => oR(l, t, n, e.ordered ? e.start + c : null, e, s, false, a))
        .join("");
    case "list_item":
      return (e.tokens ?? [])
        .map((l) => {
          let c = oR(l, t, n + 1, r, e, s, false, a);
          if (l.type === "code" || l.type === "blockquote" || l.type === "hr") return c;
          return `${"  ".repeat(n)}${c}`;
        })
        .join("");
    case "paragraph":
      return (e.tokens ?? []).map((l) => oR(l, t, 0, null, null, s, false, a)).join("") + SP;
    case "space":
      return SP;
    case "br":
      return SP;
    case "text":
      if (o?.type === "link") return e.text;
      if (o?.type === "list_item") {
        let l = e.tokens
            ? e.tokens.map((p) => oR(p, t, n, r, e, s, true, a)).join("")
            : Pnl(awo(e.text, t, a)),
          c = r === null ? "-" : `${dtf(n, r)}.`,
          u = o.tokens?.[0] === e,
          d = o.task && u ? `[${o.checked ? "x" : " "}] ` : "";
        return `${c} ${d}${l}${SP}`;
      }
      return i ? Pnl(awo(e.text, t, a)) : awo(e.text, t, a);
    case "table": {
      let c = function (p) {
          return Ja(p?.map((f) => oR(f, t, 0, null, null, s, false, a)).join("") ?? "");
        },
        l = e,
        u = l.header.map((p, f) => {
          let m = rn(c(p.tokens));
          for (let g of l.rows) {
            let h = rn(c(g[f]?.tokens));
            m = Math.max(m, h);
          }
          return Math.max(m, 3);
        }),
        d = "| ";
      return (
        l.header.forEach((p, f) => {
          let m = p.tokens?.map((b) => oR(b, t, 0, null, null, s, false, a)).join("") ?? "",
            g = c(p.tokens),
            h = u[f],
            y = l.align?.[f];
          d += _6n(m, rn(g), h, y) + " | ";
        }),
        (d = d.trimEnd() + SP),
        (d += "|"),
        u.forEach((p) => {
          let f = "-".repeat(p + 2);
          d += f + "|";
        }),
        (d += SP),
        l.rows.forEach((p) => {
          ((d += "| "),
            p.forEach((f, m) => {
              let g = f.tokens?.map((_) => oR(_, t, 0, null, null, s, false, a)).join("") ?? "",
                h = c(f.tokens),
                y = u[m],
                b = l.align?.[m];
              d += _6n(g, rn(h), y, b) + " | ";
            }),
            (d = d.trimEnd() + SP));
        }),
        d + SP
      );
    }
    case "escape":
      return e.text;
    case "html":
      return e.text;
    case "def":
      return "";
  }
  return e.raw;
}
function rtf(e) {
  if (!/^file:/i.test(e)) return e;
  let t = e.slice(5);
  if (t.startsWith("//")) {
    if (((t = t.slice(2)), t === "localhost")) t = "/";
    else if (t.startsWith("localhost/")) t = t.slice(9);
  }
  let n = t.search(/[#?]/),
    r = n === -1 ? "" : t.slice(n),
    o = n === -1 ? t : t.slice(0, n);
  if (o === "") return e;
  try {
    o = decodeURIComponent(o);
  } catch {}
  o = otf(o);
  let s = Z9t.isAbsolute(o) ? o : Z9t.resolve($t(), o);
  return Mnl.pathToFileURL(s).href + r;
}
function otf(e, t = Z9t.isAbsolute) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && t(e.slice(1))) return e.slice(1);
  return e;
}
function stf(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = "",
    n = 0;
  while (n < e.length) {
    if (e[n] !== "`") {
      t += e[n++];
      continue;
    }
    let r = 0;
    while (e[n + r] === "`") r++;
    let o = e.slice(n, n + r),
      s = n + r,
      i = -1;
    while (s < e.length) {
      if (e[s] !== "`") {
        s++;
        continue;
      }
      let a = 0;
      while (e[s + a] === "`") a++;
      if (a === r) {
        i = s;
        break;
      }
      s += a;
    }
    if (i === -1) {
      ((t += o), (n += r));
      continue;
    }
    t += o;
    for (let a = n + r; a < i; a++) {
      let l = e[a];
      if (l !== "|") {
        t += l;
        continue;
      }
      let c = 0;
      while (e[a - 1 - c] === "\\") c++;
      t += c % 2 === 0 ? "\\|" : "|";
    }
    ((t += o), (n = i + r));
  }
  return t;
}
function itf(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = atf(e[n]);
    for (let o = t; o < r.length; o++) if (r[o].trim()) return true;
  }
  return false;
}
function atf(e) {
  let n = e
    .replace(/\|/g, (r, o, s) => {
      let i = false,
        a = o;
      while (--a >= 0 && s[a] === "\\") i = !i;
      return i ? "|" : " |";
    })
    .split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function awo(e, t, n = vI()) {
  if (!n) return e;
  let r = sRr(),
    o = r && !ntf.has(r) ? r : JH;
  return e.replace(
    ttf,
    (s, i, a, l) =>
      i +
      sP(`https://${o}/${a}/issues/${l}`, `${a}#${l}`, {
        themeName: t,
        supportsHyperlinks: n,
      }),
  );
}
function ltf(e) {
  let t = "";
  while (e > 0) (e--, (t = String.fromCharCode(97 + (e % 26)) + t), (e = Math.floor(e / 26)));
  return t;
}
function utf(e) {
  let t = "";
  for (let [n, r] of ctf) while (e >= n) ((t += r), (e -= n));
  return t;
}
function Pnl(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function dtf(e, t) {
  switch (e) {
    case 0:
    case 1:
      return t.toString();
    case 2:
      return ltf(t);
    case 3:
      return utf(t);
    default:
      return t.toString();
  }
}
function _6n(e, t, n, r) {
  let o = Math.max(0, n - t);
  if (r === "center") {
    let s = Math.floor(o / 2);
    return " ".repeat(s) + e + Ff(" ", o - s);
  }
  if (r === "right") return " ".repeat(o) + e;
  return e + " ".repeat(o);
}
var Z9t,
  Mnl,
  SP = `
`,
  Dnl = false,
  ttf,
  ntf,
  ctf;
