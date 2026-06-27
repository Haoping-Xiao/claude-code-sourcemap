// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fp
// matched 2.1.88 source: src/utils/tokens.ts
// class=modified  jaccard=0.263  score=0.4936  fileCov=0.3601
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fp]
Sia = require("events");
fap = new FinalizationRegistry(({ parentSignalRef: e, handler: t }) => {
  e.deref()?.removeEventListener("abort", t);
});
map = new Set(["user-cancel", "remote-cancel", "interrupt"]);
function lre(e) {
  if (
    e?.type === "assistant" &&
    "usage" in e.message &&
    !(e.message.content[0]?.type === "text" && a5e.has(e.message.content[0].text)) &&
    e.message.model !== _I
  )
    return e.message.usage;
  return;
}
function uio(e) {
  if (e?.type === "assistant" && "id" in e.message && e.message.model !== _I) return e.message.id;
  return;
}
function cre(e) {
  return (
    e.input_tokens +
    (e.cache_creation_input_tokens ?? 0) +
    (e.cache_read_input_tokens ?? 0) +
    e.output_tokens
  );
}
function OX(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let n = e[t],
      r = n ? lre(n) : void 0;
    if (r) return cre(r);
    t--;
  }
  return 0;
}
function dio(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let n = e[t],
      r = n ? lre(n) : void 0;
    if (r) {
      let o = r.iterations;
      if (o && o.length > 0) {
        let s = o.at(-1);
        return s.input_tokens + s.output_tokens;
      }
      return r.input_tokens + r.output_tokens;
    }
    t--;
  }
  return 0;
}
function Kct(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t],
      r = n ? lre(n) : void 0;
    if (r)
      return {
        input_tokens: r.input_tokens,
        output_tokens: r.output_tokens,
        cache_creation_input_tokens: r.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens: r.cache_read_input_tokens ?? 0,
      };
  }
  return null;
}
function Hia(e, t) {
  let n = 0;
  for (let r of e) {
    let o = lre(r);
    if (!o) continue;
    let s = uio(r);
    if (!s || t.has(s)) continue;
    (t.add(s), (n += o.input_tokens + (o.cache_creation_input_tokens ?? 0) + o.output_tokens));
  }
  return n;
}
function g1n(e) {
  let n = e.findLast((o) => o.type === "assistant");
  if (!n) return false;
  let r = lre(n);
  return r ? cre(r) > 200000 : false;
}
function h1n(e) {
  let t = 0;
  for (let n of e.message.content)
    if (n.type === "text") t += n.text.length;
    else if (n.type === "thinking") t += l5e(n.signature?.length ?? 0);
    else if (n.type === "redacted_thinking") t += n.data.length;
    else if (n.type === "tool_use") t += De(n.input).length;
  return t;
}
function eA(e, t) {
  let n = Tia(e);
  if (!n) return qv(e, t);
  return cre(n.usage) + qv(e.slice(n.anchorIndex + 1), t);
}
function Tia(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let n = e[t],
      r = n ? lre(n) : void 0;
    if (n && r) {
      let o = uio(n);
      if (o) {
        let s = t - 1;
        while (s >= 0) {
          let i = e[s],
            a = i ? uio(i) : void 0;
          if (a === o) t = s;
          else if (a !== void 0) break;
          s--;
        }
      }
      return {
        usage: r,
        anchorIndex: t,
      };
    }
    t--;
  }
  return null;
}
function via(e, t) {
  let n = Tia(e),
    r = n ? e.slice(n.anchorIndex + 1) : [...e];
  return qv(lk(r), t);
}
