// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Zo
// matched 2.1.88 source: src/services/api/claude.ts
// class=new  jaccard=0.0199  score=0.3546  fileCov=0.0207
// note: nearest: src/services/api/claude.ts (0.0199); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Zo = E(() => {
  er();
  Ao();
  jG();
});
function qWc(e, t, n, r = null, o) {
  if (!e.body || e.status >= 400) return e;
  let s = (e.headers.get("content-type") ?? "").includes("text/event-stream"),
    i = e.body.getReader(),
    a = hOm(s, r, o),
    l = false;
  async function c() {
    if (l) return;
    l = true;
    try {
      let d = await a.usage();
      if (d) n(t(d));
    } catch (d) {
      gu("warn", `usage metering failed: ${be(d)}`);
    }
  }
  let u = new ReadableStream({
    async pull(d) {
      try {
        let p = await i.read();
        if (p.done) {
          c(), d.close();
          return;
        }
        a.push(p.value), d.enqueue(p.value);
      } catch (p) {
        c(), d.error(p);
      }
    },
    async cancel(d) {
      c(), await i.cancel(d);
    }
  });
  return new Response(u, {
    status: e.status,
    statusText: e.statusText,
    headers: e.headers
  });
}
function hOm(e, t, n) {
  let r = new TextDecoder();
  if (e) {
    let a = "",
      l = bOm();
    return {
      push(c) {
        a += r.decode(c, {
          stream: true
        });
        let u = a.split(yOm);
        a = u.pop() ?? "";
        for (let d of u) GWc(l, d);
        if (a.length > jWc) a = "";
      },
      async usage() {
        if (a !== "") GWc(l, a), a = "";
        return SOm(l);
      }
    };
  }
  let o = "",
    s = 0,
    i = false;
  return {
    push(a) {
      let l = r.decode(a, {
        stream: true
      });
      if (s += l.length, i) return;
      if (o += l, o.length > jWc) i = true, o = "";
    },
    async usage() {
      let a = i ? null : EOm(o);
      if (a) return a;
      if (s === 0) return null;
      return {
        input_tokens: (await t?.().catch(() => null)) ?? 0,
        output_tokens: Math.ceil(s / VWc),
        speed: n
      };
    }
  };
}
function bOm() {
  return {
    usage: {
      input_tokens: 0,
      output_tokens: 0
    },
    seen: false,
    estOutputChars: 0,
    sawOutputTokens: false
  };
}
function GWc(e, t) {
  let n = bZo(t, "event:"),
    r = n ? t.slice(n[0], n[1]).trim() : null;
  if (r === "content_block_delta") {
    WWc(e, t);
    return;
  }
  if (r !== null && r !== "message_start" && r !== "message_delta") return;
  if (r === null) {
    if (!t.includes('"usage"')) {
      if (t.includes('"content_block_delta"')) WWc(e, t);
      return;
    }
  }
  let o = bZo(t, "data:");
  if (!o) return;
  let s;
  try {
    s = JSON.parse(t.slice(o[0], o[1]).trim());
  } catch {
    return;
  }
  let i = AOm().safeParse(s);
  if (!i.success) return;
  if (i.data.type === "message_start" && i.data.message?.usage) {
    zWc(e.usage, i.data.message.usage), e.seen = true;
    return;
  }
  if (i.data.type === "content_block_delta" && i.data.delta) {
    let a = i.data.delta;
    e.estOutputChars += (a.text?.length ?? 0) + (a.partial_json?.length ?? 0) + (a.thinking?.length ?? 0);
    return;
  }
  if (i.data.type === "message_delta" && i.data.usage) {
    if (i.data.usage.output_tokens !== void 0) e.usage.output_tokens = i.data.usage.output_tokens, e.sawOutputTokens = true;
    if (i.data.usage.server_tool_use !== void 0) e.usage.server_tool_use = i.data.usage.server_tool_use;
    e.seen = true;
  }
}
function WWc(e, t) {
  let n = bZo(t, "data:");
  if (n) e.estOutputChars += Math.max(0, n[1] - n[0] - _Om);
}
function bZo(e, t) {
  let n = 0;
  while (true) {
    if (e.startsWith(t, n)) {
      let o = n + t.length;
      if (e.charCodeAt(o) === 32) o += 1;
      let s = e.indexOf(`
`, o);
      return [o, s === -1 ? e.length : s];
    }
    let r = e.indexOf(`
`, n);
    if (r === -1) return null;
    n = r + 1;
  }
}
function SOm(e) {
  if (!e.sawOutputTokens && e.estOutputChars > 0) e.usage.output_tokens = Math.ceil(e.estOutputChars / VWc), e.seen = true;
  return e.seen ? e.usage : null;
}
function EOm(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  let n = HOm().safeParse(t);
  if (!n.success || !n.data.usage) return null;
  let r = {
    input_tokens: 0,
    output_tokens: 0
  };
  if (zWc(r, n.data.usage), r.output_tokens = n.data.usage.output_tokens ?? 0, n.data.usage.server_tool_use !== void 0) r.server_tool_use = n.data.usage.server_tool_use;
  return r;
}
function zWc(e, t) {
  if (e.input_tokens = t.input_tokens ?? e.input_tokens, e.cache_read_input_tokens = t.cache_read_input_tokens, e.cache_creation_input_tokens = t.cache_creation_input_tokens, t.server_tool_use !== void 0) e.server_tool_use = t.server_tool_use;
  if (t.speed !== void 0) e.speed = t.speed;
}
var jWc = 8388608,
  yOm,
  VWc = 4,
  _Om = 80,
  SZo,
  AOm,
  HOm;