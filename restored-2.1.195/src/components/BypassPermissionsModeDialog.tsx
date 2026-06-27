// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k$c
// matched 2.1.88 source: src/components/BypassPermissionsModeDialog.tsx
// class=modified  jaccard=0.4682  score=0.6566  fileCov=0.62
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: BypassPermissionsModeDialog
// [unwrapped __esm module k$c] deps: Eor, Ye, kt, Fy, RLe, FZt, yFo, bFo
((C$c = R(lt(), 1)), (I$c = R(rt(), 1)), (nK = R(se(), 1)));
function BypassPermissionsModeDialog(e) {
  let t = R$c.c(7),
    { onAccept: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = []), (t[0] = r));
  else r = t[0];
  umr.useEffect(ixm, r);
  let o = umr.useRef(false),
    s;
  if (t[1] !== n)
    ((s = function (p) {
      if (o.current || HT()) return;
      o.current = true;
      e: switch (p) {
        case "accept": {
          (G("tengu_bypass_permissions_mode_dialog_accept", {}),
            io("userSettings", {
              skipDangerousModePermissionPrompt: true,
            }),
            n());
          break e;
        }
        case "decline":
          Bc(1);
      }
    }),
      (t[1] = n),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((a = () => {
      ((o.current = true), Bc(0));
    }),
      (t[3] = a));
  else a = t[3];
  let l = a,
    c;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((c = ove.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        ove.jsxs(w, {
          children: [
            "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.",
            ove.jsx(HW, {}),
            "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged.",
          ],
        }),
        ove.jsx(w, {
          children:
            "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode.",
        }),
        ove.jsx(xs, {
          url: "https://code.claude.com/docs/en/security",
        }),
      ],
    })),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== i)
    ((u = ove.jsxs(zn, {
      title: "WARNING: Claude Code running in Bypass Permissions mode",
      color: "error",
      onCancel: l,
      children: [
        c,
        ove.jsx(Kl, {
          cancelFirst: true,
          focus: "cancel",
          confirmLabel: "Yes, I accept",
          cancelLabel: "No, exit",
          onConfirm: () => i("accept"),
          onCancel: () => i("decline"),
        }),
      ],
    })),
      (t[5] = i),
      (t[6] = u));
  else u = t[6];
  return u;
}
function ixm() {
  G("tengu_bypass_permissions_mode_dialog_shown", {});
}
var R$c, umr, ove;
