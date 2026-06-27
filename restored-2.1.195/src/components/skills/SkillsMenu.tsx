// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W9l
// matched 2.1.88 source: src/components/skills/SkillsMenu.tsx
// class=modified  jaccard=0.1915  score=0.233  fileCov=0.5184
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var W9l = E(() => {
  ft();
  Bke();
  wr();
  uf();
  ((XWf = {
    type: "local-jsx",
    name: "scroll-speed",
    description: "Adjust mouse wheel scroll speed",
    isEnabled: () => {
      if (!Ns()) return !1;
      let e = fy();
      return !(e ? JV.includes(e.terminal ?? "") : E1.isJetBrainsIdeTerminal());
    },
    load: () => Promise.resolve().then(() => (j9l(), U9l)),
  }),
    (G9l = XWf));
});
function QWf(e, t) {
  let n = yn("policySettings")?.skillOverrides?.[t];
  if (n)
    return {
      value: n,
      source: "policy",
    };
  let r = yn("flagSettings")?.skillOverrides?.[t];
  if (r)
    return {
      value: r,
      source: "flag",
    };
  if (e.disableModelInvocation)
    return {
      value: "user-invocable-only",
      source: "author",
    };
  if (e.source === "plugin")
    return {
      value: "on",
      source: "plugin",
    };
  return;
}
function ZWf(e) {
  return yn("projectSettings")?.skillOverrides?.[e] ?? yn("userSettings")?.skillOverrides?.[e];
}
function z9l(e) {
  switch (e) {
    case "mcp":
    case "plugin":
      return e;
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return wG(e);
  }
}
function K9l({ onExit: e, commands: t, bytesPerToken: n }) {
  let [r, o] = r2.useState(!1),
    s = r2.useMemo(() => {
      let B = t.filter(
        ($) =>
          $.type === "prompt" &&
          ($.loadedFrom === "skills" ||
            $.loadedFrom === "commands_DEPRECATED" ||
            $.loadedFrom === "plugin" ||
            $.loadedFrom === "mcp"),
      );
      if (r) {
        let $ = new Map(B.map((q) => [q, fKt(q)]));
        return B.sort((q, W) => ($.get(W) ?? 0) - ($.get(q) ?? 0) || xu(q).localeCompare(xu(W)));
      }
      return B.sort(
        ($, q) => String($.source).localeCompare(String(q.source)) || xu($).localeCompare(xu(q)),
      );
    }, [t, r]),
    i = r2.useMemo(() => yn("localSettings")?.skillOverrides ?? {}, []),
    a = r2.useMemo(() => {
      let B = new Map();
      for (let $ of s) {
        let q = ZWf($.name);
        if (q) B.set($.name, q);
      }
      return B;
    }, [s]),
    l = r2.useMemo(() => {
      let B = new Map();
      for (let $ of s) {
        let q = QWf($, $.name);
        if (q) B.set($, q);
      }
      return B;
    }, [s]),
    [c, u] = r2.useState(() => {
      let B = {};
      for (let $ of s) {
        if ($.name in B) continue;
        B[$.name] = l.get($)?.value ?? i[$.name] ?? a.get($.name) ?? "on";
      }
      return B;
    }),
    [d, p] = r2.useState(s[0]),
    f = Pg(),
    [m, g] = r2.useState(!1),
    h = r2.useRef(m),
    {
      query: y,
      setQuery: b,
      cursorOffset: _,
      handleKeyDown: S,
      handlePaste: A,
    } = Uk({
      isActive: m,
      onExit: () => {
        ((h.current = !1), g(!1));
      },
      passthroughCtrlKeys: ["c", "d"],
    });
  ig();
  let v = r2.useMemo(() => {
      if (!y) return s;
      let B = y.toLowerCase();
      return s.filter(
        ($) =>
          $.name.toLowerCase().includes(B) ||
          ($.description ?? "").toLowerCase().includes(B) ||
          z9l($.source).toLowerCase().includes(B),
      );
    }, [s, y]),
    { rows: C } = bb(br()),
    x = _b(C - 13, 4, v.length),
    I = () => {
      let B = d;
      if (!B || !v.includes(B)) return;
      if (l.has(B)) return;
      u(($) => {
        let q = $[B.name] ?? "on",
          W = Z2o[(Z2o.indexOf(q) + 1) % Z2o.length];
        return {
          ...$,
          [B.name]: W,
        };
      });
    },
    k = () => {
      let B = new Set(Array.from(l.keys(), (Y) => Y.name)),
        $ = new Set(B),
        q = {},
        W = 0,
        V = 0;
      for (let Y of s) {
        if ($.has(Y.name)) continue;
        $.add(Y.name);
        let z = c[Y.name] ?? "on",
          K = a.get(Y.name) ?? "on",
          Z = i[Y.name] ?? K,
          J = z === K ? void 0 : z;
        if (J !== i[Y.name]) ((q[Y.name] = J), W++);
        if (z !== Z) V++;
      }
      if (W > 0) {
        let { error: Y } = io("localSettings", {
          skillOverrides: q,
        });
        if (Y) {
          e(`Failed to save skill overrides: ${Y.message}`, {
            display: "system",
          });
          return;
        }
        w5();
      }
      e(V > 0 ? `Updated ${V} skill ${bn(V, "override")}` : "No changes", {
        display: "system",
      });
    },
    D = Uu("confirm:no", "Settings", "esc"),
    P = Uu("settings:sortByTokens", "Settings", "t");
  (No(
    {
      "select:accept": I,
      "settings:sortByTokens": () => o((B) => !B),
    },
    {
      context: "Settings",
      isActive: !m && v.length > 0,
    },
  ),
    No(
      {
        "confirm:no": k,
      },
      {
        context: "Settings",
        isActive: !m,
      },
    ));
  let O = r2.useCallback(
      (B) => {
        if (h.current) {
          S(B);
          return;
        }
        if (B.ctrl || B.meta) return;
        if (B.name === "backspace") {
          if (y) (B.preventDefault(), (h.current = !0), g(!0), b(y.slice(0, -1)));
          return;
        }
        if (B.name.length > 1 && B.name !== "number") return;
        if (B.key.length >= 1 && B.key !== " ") {
          (B.preventDefault(), (h.current = !0), g(!0));
          let $ = B.key.startsWith("/") ? B.key.slice(1) : B.key;
          b(y + $);
        }
      },
      [S, b, y],
    ),
    L = r2.useCallback(
      (B) => {
        if (h.current) {
          A(B);
          return;
        }
        let $ = B.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
        if ($.length === 0) return;
        (B.preventDefault(), (h.current = !0), g(!0));
        let q = $.startsWith("/") ? $.slice(1) : $;
        b(y + q);
      },
      [A, b, y],
    );
  if (s.length === 0)
    return ix.jsx(zn, {
      title: "Skills",
      onCancel: () =>
        e("Skills dialog dismissed", {
          display: "system",
        }),
      inputGuide: ix.jsx(mr, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "close",
      }),
      children: ix.jsx(Fl, {
        hint: Tl()
          ? `Custom skills are disabled in safe mode \u2014 ${qH()} to load them`
          : "Create skills in .claude/skills/ or ~/.claude/skills/",
        children: "No skills found",
      }),
    });
  let M = y
      ? `${v.length}/${s.length} ${bn(s.length, "skill")}`
      : `${s.length} ${bn(s.length, "skill")}`,
    N = m
      ? "type to filter \xB7 \u2193/enter to select \xB7 esc to clear"
      : v.length === 0
        ? `/ to search, ${D} to close`
        : `enter/space to cycle, / to search, ${P} to sort, ${D} to close`;
  return ix.jsx(zn, {
    title: "Skills",
    subtitle: `${M}${r ? " \xB7 sorted by tokens" : ""} \xB7 ${N}`,
    onCancel: () =>
      e("Skills dialog dismissed", {
        display: "system",
      }),
    isCancelActive: !1,
    hideInputGuide: !0,
    children: ix.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: O,
      onPaste: L,
      children: [
        ix.jsx(LP, {
          query: y,
          isFocused: m,
          isTerminalFocused: f,
          cursorOffset: _,
          placeholder: "Search skills\u2026",
        }),
        v.length === 0
          ? ix.jsx(U, {
              marginTop: 1,
              children: ix.jsx(Fl, {
                children: `No skills match "${y}"`,
              }),
            })
          : ix.jsx(
              JEt,
              {
                visibleCount: x,
                isDisabled: m,
                wrap: !0,
                overflowHint: "count",
                onFocus: (B) => p(v[B]),
                children: v.map((B) =>
                  ix.jsx(
                    JEt.Item,
                    {
                      children: ix.jsx(e5f, {
                        skill: B,
                        lock: l.get(B),
                        state: l.get(B)?.value ?? c[B.name] ?? "on",
                        bytesPerToken: n,
                      }),
                    },
                    `${B.name}-${B.source}`,
                  ),
                ),
              },
              r ? "tok" : "name",
            ),
        s.some((B) => B.source === "plugin") &&
          ix.jsx(U, {
            marginTop: 1,
            children: ix.jsx(w, {
              dimColor: !0,
              children: "Plugin skills are managed via /plugin",
            }),
          }),
        Tl() &&
          ix.jsx(U, {
            marginTop: 1,
            children: ix.jsxs(w, {
              dimColor: !0,
              children: [
                "Custom skills are disabled in safe mode \u2014",
                " ",
                `${qH()} to load them`,
              ],
            }),
          }),
      ],
    }),
  });
}
function e5f(e) {
  let t = V9l.c(22),
    { skill: n, lock: r, state: o, bytesPerToken: s } = e,
    i = ljl(),
    a = JWf[o],
    l;
  if (t[0] !== s || t[1] !== n) ((l = sae(fKt(n, s))), (t[0] = s), (t[1] = n), (t[2] = l));
  else l = t[2];
  let c = `${l} tok`,
    u;
  if (t[3] !== a.color || t[4] !== a.glyph || t[5] !== a.label || t[6] !== r)
    ((u = r
      ? ix.jsx(w, {
          dimColor: !0,
          children: "\uD83D\uDD12 " + a.label.padEnd(9),
        })
      : ix.jsxs(w, {
          color: a.color,
          children: [a.glyph, " ", a.label.padEnd(9)],
        })),
      (t[3] = a.color),
      (t[4] = a.glyph),
      (t[5] = a.label),
      (t[6] = r),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((d = ix.jsx(w, {
      children: "  ",
    })),
      (t[8] = d));
  else d = t[8];
  let p = i ? "suggestion" : void 0,
    f;
  if (t[9] !== n.name || t[10] !== p)
    ((f = ix.jsx(w, {
      color: p,
      children: n.name,
    })),
      (t[9] = n.name),
      (t[10] = p),
      (t[11] = f));
  else f = t[11];
  let m;
  if (t[12] !== n.source) ((m = z9l(n.source)), (t[12] = n.source), (t[13] = m));
  else m = t[13];
  let g = r ? ` \xB7 locked by ${r.source}` : "",
    h;
  if (t[14] !== m || t[15] !== g || t[16] !== c)
    ((h = ix.jsxs(w, {
      dimColor: !0,
      children: [" ", "\xB7 ", m, " \xB7 ", c, g],
    })),
      (t[14] = m),
      (t[15] = g),
      (t[16] = c),
      (t[17] = h));
  else h = t[17];
  let y;
  if (t[18] !== u || t[19] !== f || t[20] !== h)
    ((y = ix.jsxs(U, {
      children: [u, d, f, h],
    })),
      (t[18] = u),
      (t[19] = f),
      (t[20] = h),
      (t[21] = y));
  else y = t[21];
  return y;
}
var V9l, r2, ix, Z2o, JWf;
