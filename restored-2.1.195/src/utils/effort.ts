// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HU
// matched 2.1.88 source: src/utils/effort.ts
// class=modified  jaccard=0.1078  score=0.2187  fileCov=0.1754
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function Kw(e) {
  let t = W9(e, "effort");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-haiku-4-5"
  )
    return !1;
  if (ut(process.env.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT)) return !0;
  if (JB(n, "effort") || n === "claude-mythos-5") return !0;
  return ZO(l_(e));
}
function Hke(e) {
  let t = W9(e, "max_effort");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-haiku-4-5"
  )
    return !1;
  if (JB(n, "max_effort") || n === "claude-mythos-5") return !0;
  return ZO(l_(e));
}
function Yte(e) {
  let t = W9(e, "xhigh_effort");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-opus-4-6" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-sonnet-4-6" ||
    n === "claude-haiku-4-5"
  )
    return !1;
  if (JB(n, "xhigh_effort") || n === "claude-mythos-5") return !0;
  return ZO(l_(e));
}
function t8(e) {
  return JS() && (e === void 0 || (Yte(e) && I3e("xhigh", e)));
}
function Xte(e, t, n) {
  return n === !0 && JS() && x7(e, t) === "xhigh";
}
function uce(e) {
  return xv.includes(e);
}
function Ake(e) {
  return xv.indexOf(e);
}
function Vst(e) {
  let t = fr();
  if (t !== "firstParty" && t !== "gateway") return null;
  let n = mo(JIe(e.trim().toLowerCase())),
    r = $Pt().find((o) => mo(JIe(o.apiName.trim().toLowerCase())) === n)?.maxEffortLevel;
  return r != null && uce(r) ? r : null;
}
function I3e(e, t) {
  let n = Vst(t);
  return n === null || Ake(e) <= Ake(n);
}
function x3e(e) {
  return xv.filter((t) => I3e(t, e));
}
function yKr(e, t) {
  let n = Vst(t);
  return n !== null && Ake(e) > Ake(n) ? n : e;
}
function KOd(e, t) {
  if (t === "xhigh") return Yte(e);
  if (t === "max") return Hke(e);
  return !0;
}
function H1i(e) {
  let t = Vst(e);
  return t !== null && xv.some((n) => Ake(n) > Ake(t) && KOd(e, n));
}
function Gkn(e, t) {
  if (typeof e !== "string" || !uce(e)) return null;
  let n = Vst(t);
  if (n === null || Ake(e) <= Ake(n)) return null;
  let r = x7(t, e) ?? n;
  return `Effort '${e}' exceeds your organization's limit for ${t}; using '${r}'.`;
}
function dce(e) {
  return String(e);
}
function zst(e) {
  let t = e.trim().toLowerCase(),
    n = T1i[t] ?? t;
  return uce(n) ? n : void 0;
}
function v1i(e) {
  let t = zst(e);
  if (t !== void 0)
    return {
      level: t,
      warning: void 0,
    };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${xv.join(", ")}.`,
  };
}
function TU(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && E1i(e)) return e;
  let t = String(e).toLowerCase(),
    n = T1i[t] ?? t;
  if (uce(n)) return n;
  let r = parseInt(t, 10);
  if (!isNaN(r) && E1i(r)) return r;
  return;
}
function Tke(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function _Kr(e) {
  let t = Dr().ultracode === !0 || !1;
  if (t) Dj();
  return t;
}
function w1i(e, t, n, r) {
  return n !== void 0 || r || e !== t ? e : void 0;
}
function k3e() {
  let e = process.env.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto" ? null : TU(e);
}
function R3e(e) {
  let t = mo(e);
  if (t.includes("opus-4-7")) return !Dt().unpinOpus47LaunchEffort;
  if (t.includes("opus-4-8")) return !Dt().unpinOpus48LaunchEffort;
  if (t.includes("fable-5") || C9(e)) return !Dt().unpinFable5LaunchEffort;
  return !1;
}
function vke() {
  let e = Dt();
  return Boolean(
    e.unpinOpus47LaunchEffort && e.unpinOpus48LaunchEffort && e.unpinFable5LaunchEffort,
  );
}
function Dj() {
  gn((e) =>
    e.unpinOpus47LaunchEffort && e.unpinOpus48LaunchEffort && e.unpinFable5LaunchEffort
      ? e
      : {
          ...e,
          unpinOpus47LaunchEffort: !0,
          unpinOpus48LaunchEffort: !0,
          unpinFable5LaunchEffort: !0,
        },
  );
}
function x7(e, t) {
  if (!Kw(e)) return;
  let n = R3e(e),
    r = CNt(e),
    o = k3e();
  if (o === null && !n) return;
  let i = o ?? (n ? r : void 0) ?? t ?? r;
  if (typeof i === "string" && uce(i)) i = yKr(i, e);
  if (i === "max" && !Hke(e)) i = "high";
  if (i === "xhigh" && !Yte(e)) i = "high";
  return i;
}
function vNt(e, t, n, r, o) {
  if (!o) return !1;
  let s = Gb();
  if (s === 0 || s === r) return !1;
  if (!Kw(n)) return !1;
  if (R3e(n)) {
    if (e === void 0 || e === CNt(n)) return !1;
  } else if (x7(n, e) === x7(n, t)) return !1;
  if (NA() && e !== void 0 && Tke(e) === void 0) return !1;
  return !0;
}
function wNt(e) {
  let t = e !== void 0 ? Tke(e) : void 0;
  if (e === void 0 || t !== void 0) {
    let n = io("userSettings", {
      effortLevel: t,
    });
    if (n.error) return n.error;
  }
  Dj();
  return;
}
function Wkn(e) {
  if (TU(e) !== void 0) Dj();
  return C1i({
    cli: {
      effort: e,
    },
    env: process.env,
    settings: Dr(),
  });
}
function RM(e, t) {
  let n = x7(e, t) ?? "high";
  return x_e(n);
}
function lL(e, t) {
  return Kw(e) ? RM(e, t) : void 0;
}
function Kst(e, t) {
  if (t === void 0) return "";
  let n = x7(e, t);
  if (n === void 0) return "";
  return ` with ${dce(x_e(n))} effort`;
}
function E1i(e) {
  return Number.isInteger(e);
}
function x_e(e) {
  if (typeof e === "string") return uce(e) ? e : "high";
  return "high";
}
function YOd(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return `Deeper reasoning than high, just below maximum (${jkn})`;
    case "max":
      return `Maximum capability with deepest reasoning. ${TNt}`;
  }
}
function bKr(e) {
  if (typeof e === "string") {
    let t = YOd(e);
    if (e === "high" && Aye() && at("tengu_slate_finch", !1))
      return `${t} \xB7 burns fastest \u2014 medium handles most tasks`;
    return t;
  }
  return "Balanced approach with standard implementation and testing";
}
function CNt(e) {
  return VIe(mo(e))?.default_effort ?? "high";
}
var xv,
  jkn = "Fable 5, Opus 4.7+",
  A1i = "Fable 5, Opus 4.6+, Sonnet 4.6",
  TNt =
    "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.",
  T1i;
