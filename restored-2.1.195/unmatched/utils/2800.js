// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oso
// matched 2.1.88 source: src/bridge/createSession.ts
// class=new  jaccard=0.0155  score=0.0355  fileCov=0.0267
// note: nearest: src/bridge/createSession.ts (0.0155); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Oso = E(() => {
  fn();
  dr();
});
function Nso() {
  return XS() !== null;
}
function s5e() {
  return Nso();
}
async function i5e(e, t, n, r) {
  let o = await Os.post(Vip, {
    op: e,
    ...t
  }, {
    auth: "session-jwt",
    timeout: jsa,
    validateStatus: () => true,
    signal: r
  });
  if (o.ok && o.status >= 300) throw new Fct(n, o.status, zip(o.data));
  return lSe(o, n);
}
function zip(e) {
  return e !== null && typeof e === "object" && "error" in e && typeof e.error === "string" ? e.error : e;
}
function JRe(e) {
  return {
    auth: "teleport-org",
    timeout: jsa,
    headers: {
      "anthropic-beta": kw
    },
    validateStatus: () => true,
    signal: e
  };
}
function QRe(e, t) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${t}`;
}
async function ZRe(e, t) {
  if (s5e()) return i5e("detail", {}, "get project detail", t);
  let n = await Os.get(QRe(e, "/detail"), JRe(t));
  return lSe(n, "get project detail");
}
async function Gsa(e, t) {
  if (s5e()) return i5e("kb-stats", {}, "get knowledge stats", t);
  let n = await Os.get(QRe(e, "/kb/stats"), JRe(t));
  return lSe(n, "get knowledge stats");
}
async function Wsa(e, t, n) {
  if (s5e()) return i5e("read-doc", {
    doc_uuid: t
  }, "read doc", n);
  let r = await Os.get(QRe(e, `/docs/${encodeURIComponent(t)}`), JRe(n));
  return lSe(r, "read doc");
}
async function qsa(e, t, n) {
  if (s5e()) return i5e("read-file", {
    file_uuid: t
  }, "read file", n);
  let r = await Os.get(QRe(e, `/files/${encodeURIComponent(t)}/extracted`), JRe(n));
  return lSe(r, "read file");
}
async function Bso(e, t, n, r) {
  if (s5e()) return i5e("write-doc", {
    file_name: t,
    content: n
  }, "create doc", r);
  let o = await Os.post(QRe(e, "/docs"), {
    file_name: t,
    content: n
  }, JRe(r));
  return lSe(o, "create doc");
}
async function Vsa(e, t, n, r) {
  let o = await Os.patch(QRe(e, `/docs/${encodeURIComponent(t)}`), {
    content: n
  }, JRe(r));
  return lSe(o, "update doc");
}
async function Uso(e, t, n) {
  if (s5e()) {
    await i5e("delete-doc", {
      doc_uuid: t
    }, "delete doc", n);
    return;
  }
  let r = await Os.delete(QRe(e, `/docs/${encodeURIComponent(t)}`), JRe(n));
  lSe(r, "delete doc");
}
async function zsa(e, t, n, r) {
  if (s5e()) return Fsa(await i5e("kb-search", {
    query: t,
    n
  }, "search knowledge base", r));
  let o = await Os.get(QRe(e, `/kb/search?query=${encodeURIComponent(t)}&n=${n}`), JRe(r));
  return Fsa(lSe(o, "search knowledge base"));
}
function Fsa(e) {
  if (typeof e === "string") try {
    return Ft(e);
  } catch {
    return e;
  }
  return e;
}
function Ksa(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
function lSe(e, t) {
  if (!e.ok) throw new Fct(t, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new Fct(t, e.status, e.data);
  return e.data;
}
function Kip(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${De(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var jsa = 30000,
  Vip = "/v2/ccr-sessions/-/chat-project",
  Fct;