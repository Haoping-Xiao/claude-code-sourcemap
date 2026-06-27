// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G$i
// matched 2.1.88 source: src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts
// class=modified  jaccard=0.4143  score=0.5858  fileCov=0.5858
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module G$i] deps: ozr, izr
azr = {
  fromJSON(e) {
    return {
      event_id: J9(e.event_id) ? globalThis.String(e.event_id) : "",
      timestamp: J9(e.timestamp) ? j$i(e.timestamp) : void 0,
      experiment_id: J9(e.experiment_id) ? globalThis.String(e.experiment_id) : "",
      variation_id: J9(e.variation_id) ? globalThis.Number(e.variation_id) : 0,
      environment: J9(e.environment) ? globalThis.String(e.environment) : "",
      user_attributes: J9(e.user_attributes) ? globalThis.String(e.user_attributes) : "",
      experiment_metadata: J9(e.experiment_metadata)
        ? globalThis.String(e.experiment_metadata)
        : "",
      device_id: J9(e.device_id) ? globalThis.String(e.device_id) : "",
      auth: J9(e.auth) ? __e.fromJSON(e.auth) : void 0,
      session_id: J9(e.session_id) ? globalThis.String(e.session_id) : "",
      anonymous_id: J9(e.anonymous_id) ? globalThis.String(e.anonymous_id) : "",
      event_metadata_vars: J9(e.event_metadata_vars)
        ? globalThis.String(e.event_metadata_vars)
        : "",
      server_timestamp: J9(e.server_timestamp) ? j$i(e.server_timestamp) : void 0,
    };
  },
  toJSON(e) {
    let t = {};
    if (e.event_id !== void 0) t.event_id = e.event_id;
    if (e.timestamp !== void 0) t.timestamp = e.timestamp.toISOString();
    if (e.experiment_id !== void 0) t.experiment_id = e.experiment_id;
    if (e.variation_id !== void 0) t.variation_id = Math.round(e.variation_id);
    if (e.environment !== void 0) t.environment = e.environment;
    if (e.user_attributes !== void 0) t.user_attributes = e.user_attributes;
    if (e.experiment_metadata !== void 0) t.experiment_metadata = e.experiment_metadata;
    if (e.device_id !== void 0) t.device_id = e.device_id;
    if (e.auth !== void 0) t.auth = __e.toJSON(e.auth);
    if (e.session_id !== void 0) t.session_id = e.session_id;
    if (e.anonymous_id !== void 0) t.anonymous_id = e.anonymous_id;
    if (e.event_metadata_vars !== void 0) t.event_metadata_vars = e.event_metadata_vars;
    if (e.server_timestamp !== void 0) t.server_timestamp = e.server_timestamp.toISOString();
    return t;
  },
  create(e) {
    return azr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = g$d();
    return (
      (t.event_id = e.event_id ?? ""),
      (t.timestamp = e.timestamp ?? void 0),
      (t.experiment_id = e.experiment_id ?? ""),
      (t.variation_id = e.variation_id ?? 0),
      (t.environment = e.environment ?? ""),
      (t.user_attributes = e.user_attributes ?? ""),
      (t.experiment_metadata = e.experiment_metadata ?? ""),
      (t.device_id = e.device_id ?? ""),
      (t.auth = e.auth !== void 0 && e.auth !== null ? __e.fromPartial(e.auth) : void 0),
      (t.session_id = e.session_id ?? ""),
      (t.anonymous_id = e.anonymous_id ?? ""),
      (t.event_metadata_vars = e.event_metadata_vars ?? ""),
      (t.server_timestamp = e.server_timestamp ?? void 0),
      t
    );
  },
};
function V$i() {
  return Oe.CLAUDE_CODE_BUBBLEWRAP;
}
function y$d() {
  return czr ?? false;
}
function K$i() {
  return (
    typeof process.getuid === "function" &&
    process.getuid() === 0 &&
    process.env.IS_SANDBOX !== "1" &&
    !Oe.CLAUDE_CODE_BUBBLEWRAP
  );
}
function b$d() {
  return uzr ?? false;
}
function S$d() {
  return false;
}
function E$d() {
  return false;
}
async function Y$i() {
  if (wst !== void 0) return wst;
  try {
    let e = await Y2r(process.pid, 10);
    for (let t of e) {
      let n = t.toLowerCase();
      for (let r of JV) if (n.includes(r)) return ((wst = r), r);
    }
  } catch {}
  return ((wst = null), null);
}
async function A$d() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (Oe.platform !== "darwin") return (await Y$i()) || "pycharm";
  }
  return Oe.terminal;
}
function H$d() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (Oe.platform !== "darwin") {
      if (wst !== void 0) return wst || "pycharm";
      return "pycharm";
    }
  }
  return Oe.terminal;
}
async function pzr() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") await Y$i();
}
var W$i,
  q$i,
  czr,
  z$i,
  uzr,
  _$d,
  dzr = null,
  wst,
  h1;
