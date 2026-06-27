// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y7a
// matched 2.1.88 source: src/services/notifier.ts
// class=modified  jaccard=0.4918  score=0.7782  fileCov=0.5721
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module Y7a] (exports=uHo)
var uHo = {};
var z7a = TYa();
Object.keys(z7a).forEach(function (e) {
  uHo[e] = z7a[e];
});
var K7a = V7a();
Object.keys(K7a).forEach(function (e) {
  uHo[e] = K7a[e];
});
async function sendNotification(e, t) {
  let n = wc("preferredNotifChannel", "auto").value;
  await cJ(e);
  let r = await sendToChannel(n, e, t);
  if (r === "error") Le("notification_show", "send_failed");
  else xe("notification_show");
  G("tengu_notification_method_used", {
    configured_channel: $e(n),
    method_used: r,
    term: Oe.terminal,
    attacher_term: fy()?.terminal ?? null,
  });
}
async function sendToChannel(e, t, n) {
  let r = t.title || X7a;
  try {
    switch (e) {
      case "auto":
        return sendAuto(t, n);
      case "iterm2":
        return (n.notifyITerm2(t), "iterm2");
      case "iterm2_with_bell":
        return (n.notifyITerm2(t), n.notifyBell(), "iterm2_with_bell");
      case "kitty":
        return (
          n.notifyKitty({
            ...t,
            title: r,
            id: J7a(),
          }),
          "kitty"
        );
      case "ghostty":
        return (
          n.notifyGhostty({
            ...t,
            title: r,
          }),
          "ghostty"
        );
      case "terminal_bell":
        return (n.notifyBell(), "terminal_bell");
      case "notifications_disabled":
        return "disabled";
      default:
        return "none";
    }
  } catch {
    return "error";
  }
}
async function sendAuto(e, t) {
  let n = e.title || X7a;
  switch (fy()?.terminal ?? Oe.terminal) {
    case "Apple_Terminal": {
      if (await isAppleTerminalBellDisabled()) return (t.notifyBell(), "terminal_bell");
      return "no_method_available";
    }
    case "iTerm.app":
      return (t.notifyITerm2(e), "iterm2");
    case "kitty":
      return (
        t.notifyKitty({
          ...e,
          title: n,
          id: J7a(),
        }),
        "kitty"
      );
    case "ghostty":
      return (
        t.notifyGhostty({
          ...e,
          title: n,
        }),
        "ghostty"
      );
    default:
      return "no_method_available";
  }
}
function J7a() {
  return Math.floor(Math.random() * 10000 /* 1e4 */);
}
async function isAppleTerminalBellDisabled() {
  try {
    if ((fy()?.terminal ?? Oe.terminal) !== "Apple_Terminal") return false;
    let t = (
      await $n("osascript", [
        "-e",
        'tell application "Terminal" to name of current settings of front window',
      ])
    ).stdout.trim();
    if (!t) return false;
    let n = await $n("defaults", ["export", "com.apple.Terminal", "-"]);
    if (n.code !== 0) return false;
    let i = (await Promise.resolve().then(() => R(Y7a(), 1))).parse(n.stdout)?.[
      "Window Settings"
    ]?.[t];
    if (!i) return false;
    return i.Bell === false;
  } catch (e) {
    return (
      T(
        `Failed to read Apple Terminal bell setting: ${e instanceof Error ? e.message : String(e)}`,
        {
          level: "error",
        },
      ),
      false
    );
  }
}
var X7a = "Claude Code";
