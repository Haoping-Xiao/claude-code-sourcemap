// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uut
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0175  score=0.941  fileCov=0.0175
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0175); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uut = E(() => {
  je();
  At();
  vn();
  dn();
  Rx();
  c_();
  ole();
  fla = [2500, 5000, 7500, 15000].map(e => ({
    id: "",
    credit_minor_units: e,
    price_minor_units: e,
    discount_minor_units: 0,
    local_credit_minor_units: e,
    local_price_minor_units: e
  })), Glp = {
    default: dla([[2500, 0], [5000, 0], [7500, 0], [15000, 0]]),
    discounted: dla([[5000, 10], [25000, 20], [1e5, 30]])
  };
});
function Dy(e) {
  return e;
}
function bla(e) {
  return async function (n, r, o) {
    if (Wlp(r)) return Vlp(e, n, r, o);
    return qlp(e, n, r, o);
  };
}
function Wlp(e) {
  return typeof e === "object" && e !== null && Symbol.asyncIterator in e;
}
async function qlp(e, t, n, r) {
  let o = t.payload().safeParse(n);
  if (!o.success) return t.default;
  let s;
  try {
    let {
      replied: a
    } = e.request({
      kind: t.kind,
      payload: o.data
    }, r);
    s = await a;
  } catch {
    return t.default;
  }
  if ("cancelled" in s) return t.default;
  let i = t.result().safeParse(s.result);
  return i.success ? i.data : t.default;
}
async function Vlp(e, t, n, r) {
  let o = n[Symbol.asyncIterator](),
    s = await o.next();
  if (s.done) return t.default;
  let i = t.payload().safeParse(s.value);
  if (!i.success) return o.return?.(void 0), t.default;
  let a = new AbortController(),
    l = () => a.abort();
  if (r?.signal) if (r.signal.aborted) a.abort();else r.signal.addEventListener("abort", l, {
    once: !0
  });
  let {
      replied: c,
      update: u
    } = e.request({
      kind: t.kind,
      payload: i.data
    }, {
      signal: a.signal,
      queueBehind: r?.queueBehind
    }),
    d;
  (async () => {
    try {
      while (!a.signal.aborted) {
        let g = await o.next();
        if (g.done) return;
        if (a.signal.aborted) return;
        let h = t.payload().safeParse(g.value);
        if (!h.success) continue;
        u(h.data);
      }
    } catch (g) {
      d = g, a.abort();
    }
  })().catch(() => {});
  let f;
  try {
    f = await c;
  } finally {
    r?.signal?.removeEventListener("abort", l), o.return?.(void 0);
  }
  if (d !== void 0) throw d;
  if ("cancelled" in f) return t.default;
  let m = t.result().safeParse(f.result);
  return m.success ? m.data : t.default;
}
function Sla(e) {
  if (e === void 0) return !1;
  if (qBe() && !(VBe() ?? []).includes(ySe.kind)) return !1;
  return !0;
}
function dut(e, t) {
  return tH(e) && !Lia(mo(e)) && Tjt() && Sla(t);
}
function Ela(e) {
  return e.isMainThread && Sla(e.requestDialog);
}
function Ala(e) {
  if (r_() !== void 0) return !1;
  if (Oe.ANTHROPIC_MODEL) return !1;
  if (Mhe("model") !== "userSettings") return !1;
  let t = yn("userSettings")?.model;
  if (t === void 0 || !tH(zo(t))) return !1;
  return io("userSettings", {
    model: e
  }), !0;
}
async function Y1n() {
  let e = A0();
  if (e) return rut(e.isEnabled ? null : "overage_not_provisioned"), e.isEnabled ? "enabled" : "disabled";
  let t = null;
  try {
    t = await Wue();
  } catch {
    return "unknown";
  }
  let n = t?.extra_usage;
  if (n?.is_enabled === !0) return rut(null), "enabled";
  if (x1n(n)) return rut(n?.disabled_reason ?? null), "blocked";
  return n?.is_enabled === !1 ? "disabled" : "unknown";
}
async function Jio({
  skipLiveCheck: e = !1
} = {}) {
  if (!e) {
    let n = await Y1n();
    if (n === "enabled" || n === "blocked") return !0;
  }
  let t = await z1n();
  if (t) rut(null);
  return t;
}
async function Hla() {
  if (oLe(), !sLe()) await Y1n();
  return pio();
}
var ySe;