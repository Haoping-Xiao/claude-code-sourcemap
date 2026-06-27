// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yyr
// matched 2.1.88 source: src/utils/suggestions/slackChannelSuggestions.ts
// class=new  jaccard=0.0568  score=0.3458  fileCov=0.0636
// note: nearest: src/utils/suggestions/slackChannelSuggestions.ts (0.0568); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yyr]
crs = globalThis.process?.getBuiltinModule?.("async_hooks"), sJe = crs ? e => crs.AsyncResource.bind(e) : e => e;
function ut(e) {
  if (!e) return false;
  if (typeof e === "boolean") return e;
  let t = String(e).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(t);
}
function ml(e) {
  if (e === void 0) return false;
  if (typeof e === "boolean") return !e;
  let t = String(e).toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(t);
}
function Uie(e) {
  if (!e || e.startsWith("-") || e.startsWith("/")) return false;
  if (e.includes("..")) return false;
  if (e.split("/").some(t => t === "." || t === "")) return false;
  return /^[a-zA-Z0-9/._+@-]+$/.test(e);
}
function Mi() {
  let e = new Set();
  return {
    subscribe(t) {
      let n = sJe(t);
      return e.add(n), () => {
        e.delete(n);
      };
    },
    emit(...t) {
      let n;
      for (let r of e) try {
        r(...t);
      } catch (o) {
        (n ??= []).push(o);
      }
      if (n) throw n.length === 1 ? n[0] : AggregateError(n, "Signal listener(s) threw");
    },
    clear() {
      e.clear();
    }
  };
}