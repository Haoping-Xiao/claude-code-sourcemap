// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gHi
// matched 2.1.88 source: node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
// class=new  jaccard=0.0406  score=0.041  fileCov=0.7898
// note: nearest: node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js (0.0406); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gHi = Q(Mwn => {
  Object.defineProperty(Mwn, "__esModule", {
    value: true
  });
  Mwn.Colours = void 0;
  class Nm {
    static isEnabled(e) {
      return e && e.isTTY && (typeof e.getColorDepth === "function" ? e.getColorDepth() > 2 : true);
    }
    static refresh() {
      if (Nm.enabled = Nm.isEnabled(process === null || process === void 0 ? void 0 : process.stderr), !this.enabled) Nm.reset = "", Nm.bright = "", Nm.dim = "", Nm.red = "", Nm.green = "", Nm.yellow = "", Nm.blue = "", Nm.magenta = "", Nm.cyan = "", Nm.white = "", Nm.grey = "";else Nm.reset = "\x1B[0m", Nm.bright = "\x1B[1m", Nm.dim = "\x1B[2m", Nm.red = "\x1B[31m", Nm.green = "\x1B[32m", Nm.yellow = "\x1B[33m", Nm.blue = "\x1B[34m", Nm.magenta = "\x1B[35m", Nm.cyan = "\x1B[36m", Nm.white = "\x1B[37m", Nm.grey = "\x1B[90m";
    }
  }
  Mwn.Colours = Nm;
  Nm.enabled = false;
  Nm.reset = "";
  Nm.bright = "";
  Nm.dim = "";
  Nm.red = "";
  Nm.green = "";
  Nm.yellow = "";
  Nm.blue = "";
  Nm.magenta = "";
  Nm.cyan = "";
  Nm.white = "";
  Nm.grey = "";
  Nm.refresh();
});