// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FQn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FQn = E(() => {
  YKt = {
    tasks: 0,
    queued: 0,
    kinds: [],
    items: []
  };
});
function jQn() {
  return QKt.useSyncExternalStore(sz.subscribe, () => sz.getState().value);
}
function QIl() {
  return QKt.useSyncExternalStore(sz.subscribe, () => sz.getState().value === "");
}
function Mze() {
  return sz.getState().value;
}
function _St(e) {
  sz.setState(t => {
    if (t.value === e) return t;
    if (t.launchWarning !== null && t.value !== "" && e === "") return {
      ...t,
      value: e,
      launchWarning: null
    };
    return {
      ...t,
      value: e
    };
  });
}
function bSt() {
  return QKt.useSyncExternalStore(sz.subscribe, () => sz.getState().active);
}
function UPo(e) {
  sz.setState(t => t.active === e ? t : {
    ...t,
    active: e
  });
}
function ZIl() {
  return QKt.useSyncExternalStore(sz.subscribe, () => sz.getState().launchWarning);
}
function exl() {
  return sz.getState().launchWarning;
}
function cHe(e) {
  sz.setState(t => t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t : {
    ...t,
    launchWarning: e
  });
}
var QKt, sz;