// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cPl
// matched 2.1.88 source: src/commands/copy/copy.tsx
// class=modified  jaccard=0.4284  score=0.6095  fileCov=0.5904
// note: deminified; 5 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cPl = E(() => {
  IL();
  ((b0f = {
    type: "local-jsx",
    name: "color",
    description: "Set the prompt bar color for this session",
    immediate: true,
    argumentHint: `[${[...Ky, "default"].join("|")}]`,
    requires: {
      ink: true,
    },
    load: () => Promise.resolve().then(() => (xOo(), sPl)),
  }),
    (lPl = {
      type: "local",
      name: "color",
      supportsNonInteractive: true,
      description: "Set the prompt bar color for this session",
      argumentHint: `[${[...Ky, "default"].join("|")}]`,
      load: () => Promise.resolve().then(() => (aPl(), iPl)),
    }),
    (kOo = b0f));
});
var EPl = {};
_t(EPl, {
  tableTokenToMarkdown: () => tableTokenToMarkdown,
  normalizeTablesInMarkdown: () => normalizeTablesInMarkdown,
  fileExtension: () => fileExtension,
  collectRecentAssistantTexts: () => collectRecentAssistantTexts,
  call: () => call,
});
function E0f(e) {
  let t = ug.lexer(RMe(e)),
    n = [];
  for (let r of t)
    if (r.type === "code") {
      let o = r;
      n.push({
        code: o.text,
        lang: o.lang,
      });
    }
  return n;
}
function uPl(e) {
  return e.tokens.map((t) => t.raw).join("");
}
function A0f(e) {
  return [e.header.map(uPl), ...e.rows.map((t) => t.map(uPl))];
}
function tableTokenToMarkdown(e) {
  let t = A0f(e).map((l) => l.map((c) => c.replace(/\|/g, "\\|").replace(/[\r\n]/g, " "))),
    n = t[0].map((l, c) => Math.max(3, ...t.map((u) => rn(u[c] ?? "")))),
    r = (l) => `| ${l.map((c, u) => c + " ".repeat(Math.max(0, n[u] - rn(c)))).join(" | ")} |`,
    o = (l, c) => {
      switch (c) {
        case "center":
          return `:${Ff("-", l - 2)}:`;
        case "right":
          return `${Ff("-", l - 1)}:`;
        case "left":
          return `:${Ff("-", l - 1)}`;
        default:
          return "-".repeat(l);
      }
    },
    s = `| ${n.map((l, c) => o(l, e.align[c] ?? null)).join(" | ")} |`,
    [i, ...a] = t;
  return [r(i), s, ...a.map(r)].join(`
`);
}
function normalizeTablesInMarkdown(e) {
  let t = ug.lexer(e),
    n = e,
    r = 0,
    o = 0;
  for (let s of t) {
    let i = e.indexOf(s.raw, r);
    if (i === -1) continue;
    if (((r = i + s.raw.length), s.type !== "table")) continue;
    let a = s.raw.match(/\n*$/)?.[0] ?? "",
      l = tableTokenToMarkdown(s) + a;
    ((n = n.slice(0, i + o) + l + n.slice(i + s.raw.length + o)), (o += l.length - s.raw.length));
  }
  return n;
}
function collectRecentAssistantTexts(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0 && t.length < S0f; n--) {
    let r = e[n];
    if (r?.type !== "assistant" || r.isApiErrorMessage) continue;
    let o = r.message.content;
    if (!Array.isArray(o)) continue;
    let s = zl(
      o,
      `

`,
    );
    if (s) t.push(s);
  }
  return t;
}
function fileExtension(e) {
  if (e) {
    let t = e.replace(/[^a-zA-Z0-9]/g, "");
    if (t && t !== "plaintext") return `.${t}`;
  }
  return ".txt";
}
async function SPl(e, t) {
  let n = qE(),
    r = fPl.join(n, t);
  return (
    await pPl.mkdir(n, {
      recursive: true,
      mode: 448,
    }),
    await r0r(r, e, {
      encoding: "utf-8",
    }),
    r
  );
}
async function ROo(e, t) {
  let n = await AI(e);
  if (n) process.stdout.write(n);
  let r =
      hu(
        e,
        `
`,
      ) + 1,
    s = `Copied to clipboard (${e.length} characters, ${r} lines)`,
    i = z0n(e);
  try {
    let a = await SPl(e, t),
      l = i
        ? `
\u26A0 ${i}; the file below is unaffected`
        : "";
    return `${s}${l}
Also written to ${a}`;
  } catch {
    let a = i
      ? `
\u26A0 ${i}`
      : "";
    return `${s}${a}`;
  }
}
function H0f(e, t) {
  let n = Gd(e);
  if (rn(n) <= t) return n;
  let r = "",
    o = 0,
    s = t - 1;
  for (let i of n) {
    let a = rn(i);
    if (o + a > s) break;
    ((r += i), (o += a));
  }
  return r + "\u2026";
}
function T0f(e) {
  let t = dPl.c(35),
    { fullText: n, codeBlocks: r, messageAge: o, onDone: s } = e,
    i = mPl.useRef("full"),
    a = `${n.length} chars, ${
      hu(
        n,
        `
`,
      ) + 1
    } lines`,
    l;
  if (t[0] !== a)
    ((l = {
      label: "Full response",
      value: "full",
      description: a,
    }),
      (t[0] = a),
      (t[1] = l));
  else l = t[1];
  let c;
  if (t[2] !== r || t[3] !== l) {
    let k;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((k = {
        label: "Always copy full response",
        value: "always",
        description: "Skip this picker in the future (revert via /config)",
      }),
        (t[5] = k));
    else k = t[5];
    ((c = [l, ...r.map(w0f), k]), (t[2] = r), (t[3] = l), (t[4] = c));
  } else c = t[4];
  let u = c,
    d;
  if (t[6] !== r || t[7] !== n)
    ((d = function (D) {
      if (D === "full" || D === "always")
        return {
          text: n,
          filename: gPl,
        };
      let P = r[D];
      return {
        text: P.code,
        filename: `copy${fileExtension(P.lang)}`,
        blockIndex: D,
      };
    }),
      (t[6] = r),
      (t[7] = n),
      (t[8] = d));
  else d = t[8];
  let p = d,
    f;
  if (t[9] !== r.length || t[10] !== p || t[11] !== o || t[12] !== s)
    ((f = async function (D) {
      let P = p(D);
      if (D === "always") {
        if (!Dt().copyFullResponse) gn(v0f);
        G("tengu_copy", {
          block_count: r.length,
          always: true,
          message_age: o,
        });
        let L = await ROo(P.text, P.filename);
        s(`${L}
Preference saved. Use /config to change copyFullResponse`);
        return;
      }
      G("tengu_copy", {
        selected_block: P.blockIndex,
        block_count: r.length,
        message_age: o,
      });
      let O = await ROo(P.text, P.filename);
      s(O);
    }),
      (t[9] = r.length),
      (t[10] = p),
      (t[11] = o),
      (t[12] = s),
      (t[13] = f));
  else f = t[13];
  let m = f,
    g;
  if (t[14] !== r.length || t[15] !== p || t[16] !== o || t[17] !== s) {
    let k = async function (P) {
      let O = p(P);
      G("tengu_copy", {
        selected_block: O.blockIndex,
        block_count: r.length,
        message_age: o,
        write_shortcut: true,
      });
      try {
        let L = await SPl(O.text, O.filename);
        s(`Written to ${L}`);
      } catch (L) {
        let M = L;
        s(`Failed to write file: ${M instanceof Error ? M.message : M}`);
      }
    };
    ((g = function (P) {
      if (P.key === "w" && !P.ctrl && !P.meta) (P.preventDefault(), k(i.current));
    }),
      (t[14] = r.length),
      (t[15] = p),
      (t[16] = o),
      (t[17] = s),
      (t[18] = g));
  } else g = t[18];
  let h = g,
    y;
  if (t[19] === Symbol.for("react.memo_cache_sentinel"))
    ((y = UQ.jsx(w, {
      dimColor: true,
      children: "Select content to copy:",
    })),
      (t[19] = y));
  else y = t[19];
  let b;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((b = (k) => {
      i.current = k;
    }),
      (t[20] = b));
  else b = t[20];
  let _;
  if (t[21] !== m)
    ((_ = (k) => {
      m(k);
    }),
      (t[21] = m),
      (t[22] = _));
  else _ = t[22];
  let S;
  if (t[23] !== s)
    ((S = () => {
      s("Copy cancelled", {
        display: "system",
      });
    }),
      (t[23] = s),
      (t[24] = S));
  else S = t[24];
  let A;
  if (t[25] !== u || t[26] !== S || t[27] !== _)
    ((A = UQ.jsx(Sr, {
      options: u,
      hideIndexes: false,
      onFocus: b,
      onChange: _,
      onCancel: S,
    })),
      (t[25] = u),
      (t[26] = S),
      (t[27] = _),
      (t[28] = A));
  else A = t[28];
  let v, C;
  if (t[29] === Symbol.for("react.memo_cache_sentinel"))
    ((v = UQ.jsx(ht, {
      chord: "enter",
      action: "copy",
      format: {
        keyCase: "lower",
      },
    })),
      (C = UQ.jsx(ht, {
        chord: "w",
        action: "write to file",
      })),
      (t[29] = v),
      (t[30] = C));
  else ((v = t[29]), (C = t[30]));
  let x;
  if (t[31] === Symbol.for("react.memo_cache_sentinel"))
    ((x = UQ.jsx(vb, {
      children: UQ.jsxs(Tn, {
        children: [
          v,
          C,
          UQ.jsx(ht, {
            chord: "escape",
            action: "cancel",
            format: {
              keyCase: "lower",
            },
          }),
        ],
      }),
    })),
      (t[31] = x));
  else x = t[31];
  let I;
  if (t[32] !== h || t[33] !== A)
    ((I = UQ.jsx(Fu, {
      children: UQ.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: h,
        children: [y, A, x],
      }),
    })),
      (t[32] = h),
      (t[33] = A),
      (t[34] = I));
  else I = t[34];
  return I;
}
function v0f(e) {
  return {
    ...e,
    copyFullResponse: true,
  };
}
function w0f(e, t) {
  let n =
    hu(
      e.code,
      `
`,
    ) + 1;
  return {
    label: H0f(e.code, 60),
    value: t,
    description: [e.lang, n > 1 ? `${n} lines` : void 0].filter(Boolean).join(", ") || void 0,
  };
}
var dPl,
  pPl,
  fPl,
  mPl,
  UQ,
  gPl = "response.md",
  S0f = 20,
  call = async (e, t, n) => {
    let r = collectRecentAssistantTexts(t.messages);
    if (r.length === 0) return (e("No assistant message to copy"), null);
    let o = 0,
      s = n?.trim();
    if (s) {
      let c = Number(s);
      if (!Number.isInteger(c) || c < 1)
        return (e(`Usage: /copy [N] where N is 1 (latest), 2, 3, \u2026 Got: ${s}`), null);
      if (c > r.length)
        return (
          e(
            `Only ${r.length} assistant ${r.length === 1 ? "message" : "messages"} available to copy`,
          ),
          null
        );
      o = c - 1;
    }
    let i = normalizeTablesInMarkdown(r[o]),
      a = E0f(i),
      l = Dt();
    if (a.length === 0 || l.copyFullResponse) {
      G("tengu_copy", {
        always: l.copyFullResponse,
        block_count: a.length,
        message_age: o,
      });
      let c = await ROo(i, gPl);
      return (e(c), null);
    }
    return UQ.jsx(T0f, {
      fullText: i,
      codeBlocks: a,
      messageAge: o,
      onDone: e,
    });
  };
