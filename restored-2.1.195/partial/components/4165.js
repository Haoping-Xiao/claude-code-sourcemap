// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gll
// matched 2.1.88 source: src/components/messages/UserToolResultMessage/utils.tsx
// class=partial  jaccard=0.1587  score=0.5249  fileCov=0.1853
// note: low-confidence suggestion: src/components/messages/UserToolResultMessage/utils.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gll] deps: components/messages/HookProgressMessage.tsx, hooks/useTerminalSize.ts, context/notifications.tsx, services/mockRateLimits.ts, commands/add-dir/validation.ts, ink/styles.ts
fll = R(lt(), 1), O8t = R(rt(), 1), zMe = R(se(), 1);
function yll(e, t, n) {
  let r = hll.c(7),
    o;
  if (r[0] !== n.toolUseByToolUseID || r[1] !== e || r[2] !== t) {
    e: {
      let s = n.toolUseByToolUseID.get(e);
      if (!s) {
        o = null;
        break e;
      }
      let i = _l(t, s.name);
      if (i) {
        o = {
          tool: i,
          toolUse: s
        };
        break e;
      }
      if (!iif.has(s.name)) {
        o = null;
        break e;
      }
      let a = _l(tit() ?? [], s.name);
      if (!a) {
        o = null;
        break e;
      }
      let l;
      if (r[4] !== a || r[5] !== s) l = {
        tool: a,
        toolUse: s
      }, r[4] = a, r[5] = s, r[6] = l;else l = r[6];
      o = l;
    }
    r[0] = n.toolUseByToolUseID, r[1] = e, r[2] = t, r[3] = o;
  } else o = r[3];
  return o;
}
var hll, iif;