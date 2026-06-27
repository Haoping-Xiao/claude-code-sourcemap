// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IXn
// matched 2.1.88 source: src/utils/messages.ts
// class=modified (alt of src/utils/messages.ts)  jaccard=0.0135  score=0.2772  fileCov=0.014
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IXn]
$El = [
  "[Request interrupted by user]",
  "[Request interrupted by user for tool use]",
  "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
];
function $$e() {
  return Kx() && !da();
}
function Syf(e, t) {
  if (!e) return "idle-fork";
  return t ? "defer-then-fork" : "abort-then-fork";
}
function Eyf(e) {
  let { inFlight: t } = e;
  if (e.isBg)
    return {
      ok: true,
      via: "detach",
      inFlight: t,
    };
  if (!e.fleetEnabled)
    return {
      ok: false,
      reason: "fleet-disabled",
      inFlight: t,
    };
  if (e.isRemote)
    return {
      ok: false,
      reason: "remote",
      inFlight: t,
    };
  if (e.isExternalLoading)
    return {
      ok: false,
      reason: "loading",
      inFlight: t,
    };
  return {
    ok: true,
    via: Syf(e.isLoading, e.betweenCalls),
    inFlight: t,
  };
}
function xXn(e, t) {
  return !t && !Ayf(e);
}
function Ayf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "assistant") return n.message?.stop_reason === null;
    if (n.type === "user") return false;
  }
  return false;
}
function kXn(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "assistant") {
      if (r.message?.stop_reason !== null) return t;
      for (let o of r.message?.content ?? [])
        if (o.type === "text" && typeof o.text === "string") t += o.text.length;
    } else if (r.type === "user") return t;
  }
  return t;
}
function RXn(e, t) {
  let n = e.length;
  for (let o = e.length - 1; o >= 0; o--) {
    let s = e[o];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      n = o;
    } else if (s.type === "user") break;
  }
  let r = "";
  for (let o = n; o < e.length; o++) {
    let s = e[o];
    if (s.type !== "assistant") continue;
    for (let i of s.message?.content ?? [])
      if (i.type === "text" && typeof i.text === "string") r += i.text;
  }
  return r + (t ?? "");
}
function FRo(e) {
  let t = 0;
  for (let n of e)
    if (
      n.priority === "later" ||
      n.mode === "bash" ||
      (typeof n.value === "string" && n.value.trim().startsWith("/") && !n.skipSlashCommands)
    )
      t++;
  return t;
}
function OEl(e) {
  if (e.type !== "user") return false;
  let t = e.message?.content;
  return Array.isArray(t) && t.length > 0 && t.every((n) => n.type === "tool_result");
}
function Hyf(e) {
  if (e.type === "system") return true;
  if (e.type === "assistant") {
    let t = e.message?.stop_reason;
    return t === null || t === "tool_use";
  }
  if (e.type === "user") return jzt(e);
  return false;
}
function Gzt(e) {
  let t = e.length,
    n = false;
  while (t > 0) {
    let o = e[t - 1];
    if (o.type === "user") {
      if (jzt(o)) n ||= OEl(o);
      else if (n && OEl(o));
      else break;
    } else if (o.type === "assistant") {
      if (!Hyf(o)) break;
      n = false;
    }
    t--;
  }
  let r = e
    .slice(t)
    .filter((o) => o.type !== "user" && o.type !== "assistant" && o.type !== "system");
  if (t + r.length === e.length) return e;
  return [...e.slice(0, t), ...r];
}
function Wzt(e) {
  let t = Gzt(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n].type;
    if (r === "user" || r === "assistant") return t[n].uuid;
  }
  return;
}
function NEl(e, t) {
  if (e === null || e.length < 1 || e.length > t.length) return false;
  let n = e.length - 1;
  if (t[n]?.uuid !== e.uuid) return false;
  for (let r = e.length; r < t.length; r++) {
    let o = t[r].type;
    if (o === "user" || o === "assistant") return false;
  }
  return true;
}
function LXn(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "user") return !jzt(n);
    if (n.type === "assistant") return false;
  }
  return false;
}
function DXn(e) {
  return e.ok && e.via !== "detach";
}
function Cbt(e) {
  return Eyf({
    ...e,
    fleetEnabled: Kx(),
    isRemote: da(),
  });
}
