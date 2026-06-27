// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yp
// matched 2.1.88 source: src/utils/gracefulShutdown.ts
// class=modified (alt of src/utils/gracefulShutdown.ts)  jaccard=0.1465  score=0.247  fileCov=0.2646
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yp] deps: iu, Qi, det, ft, FK, HI, IJr, ZS, q7, jh, kt, fb, fho, fd, Ld, je, Mm, wr, fn, At, lT, uf, ED, zH, ojn, vWt, _a, sG
((u4n = require("util")), (bEe = require("fs")));
Eho = Cn(() => {
  jee(() => {});
  let e = process.ppid;
  if (
    (process.on("SIGINT", () => {
      if (process.argv.includes("-p") || process.argv.includes("--print")) return;
      (In("info", "shutdown_signal", {
        signal: "SIGINT",
      }),
        ki(0));
    }),
    process.on("SIGTERM", () => {
      let n = {
        uptime_s: Math.round(process.uptime()),
        ppid_changed: process.ppid !== e,
        stdin_at_eof: process.stdin.readableEnded,
        stdin_destroyed: process.stdin.destroyed,
        is_tty: process.stdin.isTTY ?? false,
      };
      (In("info", "shutdown_signal", {
        signal: "SIGTERM",
        ...n,
      }),
        G("tengu_shutdown_signal", {
          signal: We("SIGTERM"),
          ...n,
        }),
        ki(143));
    }),
    process.env.CLAUDE_BG_BACKEND === "daemon")
  )
    process.on("SIGHUP", () => {
      In("info", "shutdown_signal", {
        signal: "SIGHUP_ignored_bg",
      });
    });
  else
    (process.on("SIGHUP", () => {
      (In("info", "shutdown_signal", {
        signal: "SIGHUP",
      }),
        ki(129));
    }),
      g1a());
  jEr((n, r) => {
    if (!Ax()) return;
    (In("info", "shutdown_signal", {
      signal: `${n}_${r}`,
    }),
      ki(0));
  });
  let t = (n) => {
    let r = f1a(n);
    if (!(!r && n instanceof Error)) {
      if (typeof n === "string")
        return {
          error_name: "string",
          error_message: xc(n).slice(0, 2000),
          isHostError: false,
        };
      let c = r ? l4n(n, "name") : m1a(n, "name"),
        u = l4n(n, "message"),
        d = [];
      if (c !== void 0) d.push(c);
      if (u !== void 0) d.push(u);
      let p = d.length > 0 ? xc(d.join(": ")).slice(0, 2000) : void 0,
        f = l4n(n, "stack");
      return {
        error_name: "non-error",
        error_message: p,
        error_stack: f !== void 0 ? xc(f).slice(0, 4000) : void 0,
        isHostError: false,
      };
    }
    let s = n,
      i,
      a,
      l;
    try {
      i = s.name;
    } catch {}
    try {
      a = s.message;
    } catch {}
    try {
      l = s.stack;
    } catch {}
    return {
      error_name: typeof i === "string" ? i : "Error",
      error_message: typeof a === "string" ? xc(a).slice(0, 2000) : void 0,
      error_stack: typeof l === "string" ? xc(l).slice(0, 4000) : void 0,
      isHostError: true,
    };
  };
  (process.on("uncaughtException", (n) => {
    if (cVe) return;
    let r = t(n);
    In("error", "uncaught_exception", r);
    let o = r.isHostError ? LM(n) : l1a(r);
    if (
      (G("tengu_uncaught_exception", {
        error_name: r.error_name,
        ...o,
      }),
      r.isHostError)
    )
      AWt(n, "uncaught_exception");
    if (ySr()) {
      if (
        ((cVe = true),
        T(
          `Uncaught exception under CLAUDE_CODE_SUPERVISED \u2014 exiting ${SWt}: ${r.error_name}`,
          {
            level: "error",
          },
        ),
        Js() && !HT())
      )
        sv("uncaught:" + r.error_name);
      ki(SWt);
      return;
    }
    let s = c1a(Date.now());
    if (IWt.length < GPp || s)
      IWt.push({
        name: r.error_name,
        message: (r.error_message ?? "").slice(0, 200),
        topFrame: o.error_top_frame,
      });
    if (s) {
      (G("tengu_uncaught_exception_loop", {
        count: Aft,
        window_ms: bho,
        error_name: r.error_name,
        error_message_hash: o.error_message_hash,
      }),
        dVe());
      try {
        for (let i of IWt)
          bEe.writeSync(
            2,
            `Uncaught exception (loop): ${i.name}: ${i.message}${i.topFrame ? ` at ${i.topFrame}` : ""}
`,
          );
        bEe.writeSync(
          2,
          `Uncaught exception loop detected (${Aft} in ${bho}ms) \u2014 forcing shutdown
`,
        );
      } catch {}
      ki(1);
      return;
    }
    if (Js() && !HT()) {
      (sv("uncaught:" + r.error_name), ki(1));
      return;
    }
    a1a(r.error_message ?? r.error_name);
  }),
    process.on("unhandledRejection", (n) => {
      if (cVe) return;
      let r = t(n);
      if (pVe && r.isHostError && WPp(n)) {
        T(`Swallowed MCP ConnectionClosed during shutdown: ${be(n)}`);
        return;
      }
      if (
        (In("error", "unhandled_rejection", r),
        G("tengu_unhandled_rejection", {
          error_name: r.error_name,
          ...(r.isHostError ? LM(n) : l1a(r)),
        }),
        r.isHostError)
      )
        AWt(n, "unhandled_rejection");
      if (r.isHostError && lh(n)) {
        T("Swallowed unhandled AbortError rejection (not exiting bg/supervised worker)");
        return;
      }
      if (ySr()) {
        if (
          ((cVe = true),
          T(
            `Unhandled rejection under CLAUDE_CODE_SUPERVISED \u2014 exiting ${SWt}: ${r.error_name}`,
            {
              level: "error",
            },
          ),
          Js() && !HT())
        )
          sv("unhandled:" + r.error_name);
        ki(SWt);
        return;
      }
      if (Js() && !HT()) {
        (sv("unhandled:" + r.error_name), ki(1));
        return;
      }
      a1a(r.error_message ?? r.error_name);
    }));
});
IWt = [];
h1a = class h1a extends Error {
  constructor() {
    super("Cleanup timeout");
  }
};
function xde(e) {
  b1a.add(e);
}
function S1a() {
  for (let e of b1a) e();
}
var b1a;
