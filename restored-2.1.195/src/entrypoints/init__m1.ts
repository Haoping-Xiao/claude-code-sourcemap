// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vfc
// matched 2.1.88 source: src/entrypoints/init.ts
// class=modified (alt of src/entrypoints/init.ts)  jaccard=0.0922  score=1  fileCov=0.0922
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vfc = E(() => {
  Ye();
  S6();
  C5();
  Gre();
  Jt();
  mE();
  vi();
  ((Hfc = R(lt(), 1)), (jz = R(se(), 1)));
});
var wfc = {};
_t(wfc, {
  initializeTelemetryAfterTrust: () => initializeTelemetryAfterTrust,
  init: () => init,
});
function initializeTelemetryAfterTrust() {
  if (eyo()) {
    if (Ir() && mC())
      s8o().catch((e) => {
        T(`[3P telemetry] Eager telemetry init failed (beta tracing): ${be(e)}`, {
          level: "error",
        });
      });
    (T("[3P telemetry] Waiting for remote managed settings before telemetry init"),
      bVe()
        .then(async () => {
          (T("[3P telemetry] Remote managed settings loaded, initializing telemetry"),
            e3(),
            await s8o());
        })
        .catch((e) => {
          T(`[3P telemetry] Telemetry init failed (remote settings path): ${be(e)}`, {
            level: "error",
          });
        }));
  } else
    s8o().catch((e) => {
      T(`[3P telemetry] Telemetry init failed: ${be(e)}`, {
        level: "error",
      });
    });
}
async function s8o() {
  if (o8o) return;
  o8o = !0;
  try {
    await dcm();
  } catch (e) {
    throw ((o8o = !1), e);
  } finally {
    Y_r();
  }
}
async function dcm() {
  let { initializeTelemetry: e } = await Promise.resolve().then(() => (nAo(), tAo)),
    t = await e();
  if (t)
    (j_r(t, (r, o) => {
      let s = t?.createCounter(r, o);
      return {
        add(i, a = {}) {
          let c = {
            ...QGe(),
            ...a,
          };
          s?.add(i, c);
        },
      };
    }),
      G_r()?.add(1, {
        start_type: fbr(),
      }));
}
var o8o = !1,
  init;
