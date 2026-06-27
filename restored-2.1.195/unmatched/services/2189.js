// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ozr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ozr = E(() => {
  Q1t = {
    fromJSON(e) {
      return {
        seconds: B$i(e.seconds) ? globalThis.Number(e.seconds) : 0,
        nanos: B$i(e.nanos) ? globalThis.Number(e.nanos) : 0
      };
    },
    toJSON(e) {
      let t = {};
      if (e.seconds !== void 0) t.seconds = Math.round(e.seconds);
      if (e.nanos !== void 0) t.nanos = Math.round(e.nanos);
      return t;
    },
    create(e) {
      return Q1t.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = l$d();
      return t.seconds = e.seconds ?? 0, t.nanos = e.nanos ?? 0, t;
    }
  };
});
function c$d() {
  return {
    account_id: 0,
    organization_uuid: "",
    account_uuid: ""
  };
}
function szr(e) {
  return e !== null && e !== void 0;
}
var __e;