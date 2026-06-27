// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VM
// matched 2.1.88 source: src/utils/claudeInChrome/common.ts
// class=modified  jaccard=0.5247  score=1  fileCov=0.5247
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VM] deps: dn, Un, je, At, Bi, Is, kv, _0
((lKi = require("fs")),
  (KZr = require("fs/promises")),
  (_be = require("os")),
  (v8 = require("path")),
  (nue = `mcp__${VD}__`));
((plt = {
  chrome: {
    name: "Google Chrome",
    macos: {
      appName: "Google Chrome",
      dataPath: ["Library", "Application Support", "Google", "Chrome"],
      nativeMessagingPath: [
        "Library",
        "Application Support",
        "Google",
        "Chrome",
        "NativeMessagingHosts",
      ],
    },
    linux: {
      binaries: ["google-chrome", "google-chrome-stable"],
      dataPath: [".config", "google-chrome"],
      nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["Google", "Chrome", "User Data"],
      registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
    },
  },
  brave: {
    name: "Brave",
    macos: {
      appName: "Brave Browser",
      dataPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser"],
      nativeMessagingPath: [
        "Library",
        "Application Support",
        "BraveSoftware",
        "Brave-Browser",
        "NativeMessagingHosts",
      ],
    },
    linux: {
      binaries: ["brave-browser", "brave"],
      dataPath: [".config", "BraveSoftware", "Brave-Browser"],
      nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
      registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
    },
  },
  arc: {
    name: "Arc",
    macos: {
      appName: "Arc",
      dataPath: ["Library", "Application Support", "Arc", "User Data"],
      nativeMessagingPath: [
        "Library",
        "Application Support",
        "Arc",
        "User Data",
        "NativeMessagingHosts",
      ],
    },
    linux: {
      binaries: [],
      dataPath: [],
      nativeMessagingPath: [],
    },
    windows: {
      dataPath: ["Arc", "User Data"],
      registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts",
    },
  },
  chromium: {
    name: "Chromium",
    macos: {
      appName: "Chromium",
      dataPath: ["Library", "Application Support", "Chromium"],
      nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"],
    },
    linux: {
      binaries: ["chromium", "chromium-browser"],
      dataPath: [".config", "chromium"],
      nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["Chromium", "User Data"],
      registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts",
    },
  },
  edge: {
    name: "Microsoft Edge",
    macos: {
      appName: "Microsoft Edge",
      dataPath: ["Library", "Application Support", "Microsoft Edge"],
      nativeMessagingPath: [
        "Library",
        "Application Support",
        "Microsoft Edge",
        "NativeMessagingHosts",
      ],
    },
    linux: {
      binaries: ["microsoft-edge", "microsoft-edge-stable"],
      dataPath: [".config", "microsoft-edge"],
      nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["Microsoft", "Edge", "User Data"],
      registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
    },
  },
  vivaldi: {
    name: "Vivaldi",
    macos: {
      appName: "Vivaldi",
      dataPath: ["Library", "Application Support", "Vivaldi"],
      nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"],
    },
    linux: {
      binaries: ["vivaldi", "vivaldi-stable"],
      dataPath: [".config", "vivaldi"],
      nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["Vivaldi", "User Data"],
      registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
    },
  },
  opera: {
    name: "Opera",
    macos: {
      appName: "Opera",
      dataPath: ["Library", "Application Support", "com.operasoftware.Opera"],
      nativeMessagingPath: [
        "Library",
        "Application Support",
        "com.operasoftware.Opera",
        "NativeMessagingHosts",
      ],
    },
    linux: {
      binaries: ["opera"],
      dataPath: [".config", "opera"],
      nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"],
    },
    windows: {
      dataPath: ["Opera Software", "Opera Stable"],
      registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
      useRoaming: true,
    },
  },
}),
  (XUt = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"]));
dlt = new Set();
function mlt(e) {
  return bbe(e) || uke(e) || e === Met;
}
