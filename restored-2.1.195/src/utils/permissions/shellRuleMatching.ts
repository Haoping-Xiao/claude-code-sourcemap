// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $I
// matched 2.1.88 source: src/utils/permissions/shellRuleMatching.ts
// class=modified  jaccard=0.2656  score=0.6488  fileCov=0.3102
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $I = E(() => {
  je();
  dr();
  Jt();
  Yf();
  QH();
  fre();
  Gca = require("path");
});
function Qjt(e) {
  return e.match(/^(.+):\*$/)?.[1] ?? null;
}
function Mao(e) {
  if (e.endsWith(":*")) return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] === "*") {
      let n = 0,
        r = t - 1;
      while (r >= 0 && e[r] === "\\") (n++, r--);
      if (n % 2 === 0) return !0;
    }
  return !1;
}
function Wca(e) {
  let t = e.trimEnd();
  if (!t.endsWith("*")) return !1;
  let n = 0,
    r = t.length - 2;
  while (r >= 0 && t[r] === "\\") (n++, r--);
  return n % 2 === 0;
}
function X8(e, t, n = !1, r = !1) {
  let o = e.trim(),
    s = r ? o.replace(/[ \t]+/g, " ") : o,
    i = r ? t.replace(/[ \t]+/g, " ") : t,
    a = "",
    l = 0;
  while (l < s.length) {
    let h = s[l];
    if (h === "\\" && l + 1 < s.length) {
      let y = s[l + 1];
      if (y === "*") {
        ((a += "\x00ESCAPED_STAR\x00"), (l += 2));
        continue;
      } else if (y === "\\") {
        ((a += "\x00ESCAPED_BACKSLASH\x00"), (l += 2));
        continue;
      }
    }
    ((a += h), l++);
  }
  let p = a
      .replace(/[.+?^${}()|[\]\\'"]/g, "\\$&")
      .replace(uup, "\x00GLOBSTAR\x00")
      .replaceAll("*", ".*")
      .replace(dup, "/(?:.*/)?")
      .replace(lup, "\\*")
      .replace(cup, "\\\\"),
    f = (a.match(/\*/g) || []).length;
  if (p.endsWith(" .*") && f === 1) p = p.slice(0, -3) + "( .*)?";
  let m = "s" + (n ? "i" : "");
  return new RegExp(`^${p}$`, m).test(i);
}
function kNn(e) {
  let t = Qjt(e);
  if (t !== null)
    return {
      type: "prefix",
      prefix: t,
    };
  if (Mao(e))
    return {
      type: "wildcard",
      pattern: e,
    };
  return {
    type: "exact",
    command: e,
  };
}
function RNn(e, t) {
  return [
    {
      type: "addRules",
      rules: [
        {
          toolName: e,
          ruleContent: t,
        },
      ],
      behavior: "allow",
      destination: "localSettings",
    },
  ];
}
function Zjt(e, t) {
  return [
    {
      type: "addRules",
      rules: [
        {
          toolName: e,
          ruleContent: `${t} *`,
        },
      ],
      behavior: "allow",
      destination: "localSettings",
    },
  ];
}
var lup, cup, uup, dup;
