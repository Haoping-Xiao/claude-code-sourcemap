// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I1c
// matched 2.1.88 source: src/utils/deepLink/protocolHandler.ts
// class=modified  jaccard=0.284  score=0.376  fileCov=0.5372
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: waitForUrlEvent, handleUrlSchemeLaunch, handleDeepLinkUri
// [unwrapped __esm module I1c] deps: er, je, Bi, _0
((H1c = require("child_process")),
  (T1c = require("path")),
  (Smr = [
    {
      name: "iTerm2",
      bundleId: "com.googlecode.iterm2",
      app: "iTerm",
    },
    {
      name: "Ghostty",
      bundleId: "com.mitchellh.ghostty",
      app: "Ghostty",
    },
    {
      name: "Kitty",
      bundleId: "net.kovidgoyal.kitty",
      app: "kitty",
    },
    {
      name: "Alacritty",
      bundleId: "org.alacritty",
      app: "Alacritty",
    },
    {
      name: "WezTerm",
      bundleId: "com.github.wez.wezterm",
      app: "WezTerm",
    },
    {
      name: "Terminal.app",
      bundleId: "com.apple.Terminal",
      app: "Terminal",
      termProgramAliases: ["apple_terminal"],
    },
  ]),
  (jxm = [
    "ghostty",
    "kitty",
    "alacritty",
    "wezterm",
    "gnome-terminal",
    "konsole",
    "xfce4-terminal",
    "mate-terminal",
    "tilix",
    "xterm",
  ]));
Yxm = /^[A-Za-z0-9 /._=-]+$/;
var x1c = {};
function Jxm() {
  if (Emr) return Emr;
  return null;
}
function waitForUrlEvent(e) {
  let t = Jxm();
  if (!t) return null;
  return t.waitForUrlEvent(e);
}
var Emr = null;
var k1c = () => {};
var P1c = {};
async function handleDeepLinkUri(e) {
  T(`Handling deep link URI: ${e}`);
  let t;
  try {
    t = CSc(e);
  } catch (a) {
    let l = a instanceof Error ? a.message : String(a);
    return (console.error(`Deep link error: ${l}`), Le("deep_link_handle", "parse_failed"), 1);
  }
  T(`Parsed deep link action: ${De(t)}`);
  let n = await R1c.realpath(process.execPath).catch(() => process.execPath),
    { cwd: r, resolvedRepo: o } = await ekm(t),
    s = o ? await a_c(r) : void 0,
    i;
  try {
    i = await v1c(n, {
      query: t.query,
      cwd: r,
      repo: o,
      lastFetchMs: s?.getTime(),
    });
  } catch (a) {
    let l = a instanceof Error ? a.message : String(a);
    return (console.error(`Deep link error: ${l}`), Le("deep_link_handle", "launch_error"), 1);
  }
  if (!i)
    return (
      console.error(
        "Failed to open a terminal. Make sure a supported terminal emulator is installed.",
      ),
      Le("deep_link_handle", "no_terminal"),
      1
    );
  return (xe("deep_link_handle"), 0);
}
async function handleUrlSchemeLaunch() {
  if (process.env.__CFBundleIdentifier !== Szo) return null;
  try {
    let { waitForUrlEvent: e } = await Promise.resolve().then(() => (k1c(), x1c)),
      t = e(5000);
    if (!t) return null;
    return await handleDeepLinkUri(t);
  } catch {
    return null;
  }
}
async function ekm(e) {
  if (e.cwd)
    return {
      cwd: e.cwd,
    };
  if (e.repo) {
    let t = Zfr(e.repo),
      n = await emr(t);
    if (n[0])
      return (
        T(`Resolved repo ${e.repo} \u2192 ${n[0]}`),
        {
          cwd: n[0],
          resolvedRepo: e.repo,
        }
      );
    T(`No local clone found for repo ${e.repo}, falling back to home`);
  }
  return {
    cwd: L1c.homedir(),
  };
}
var R1c, L1c;
