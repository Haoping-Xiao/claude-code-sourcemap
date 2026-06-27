// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vw
// matched 2.1.88 source: src/utils/betas.ts
// class=modified  jaccard=0.1973  score=0.6494  fileCov=0.2208
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vw] deps: Qi, Un, ft, TM, GY, oo, BE, je, fn, mye, k0, Oot, Ao, JOt, Ls, Bot, m1
Rvi = new Set([FY]);
RCn = Cn((e) => {
  if (T9("hipaa")) return false;
  if (ut(process.env.CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM)) return true;
  let t = W9(e, "mid_conversation_system");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-opus-4-6" ||
    n === "claude-opus-4-7" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-sonnet-4-6" ||
    n === "claude-haiku-4-5"
  )
    return false;
  if (JB(n, "mid_conv_system") || n === "claude-mythos-5") return true;
  return ZO(l_(e));
});
(($9r = Cn((e) => {
  let t = [],
    n = mo(e),
    r = n.includes("haiku"),
    o = fr(),
    s = CM();
  if (!r) t.push(Y2e);
  if (bo() || (M9r() && !nPt() && iH())) t.push(qIe);
  if (Sy(e)) t.push(FY);
  if (!ut(process.env.DISABLE_INTERLEAVED_THINKING) && QOt(e)) t.push(Gnt);
  if (s && QOt(e) && !Ir() && !xCn()) t.push(kPt);
  if (cAn && s && QOt(e) && fr() === "firstParty") t.push(cAn);
  if (s && R9r()) t.push(RPt);
  let i = ut(process.env.USE_API_CONTEXT_MANAGEMENT) && false,
    a = n0d(e);
  if (ZO(l_(e)) && !F4e() && (i || a)) t.push(X2e);
  let l = at("tengu_tool_pear", false);
  if (ZO(l_(e)) && !F4e() && j4e(e) && l) t.push(lte);
  if (o === "vertex" && t0d(n)) t.push(IPt);
  if (o === "foundry") t.push(IPt);
  if (s) t.push(qnt);
  if (RCn(e)) t.push(jY);
  if (process.env.ANTHROPIC_BETAS)
    t.push(
      ...process.env.ANTHROPIC_BETAS.split(",")
        .map((c) => c.trim())
        .filter(Boolean)
        .map(b2r),
    );
  return t;
})),
  (V9 = Cn((e) => {
    let t = $9r(e);
    if (l_(e) === "bedrock") return t.filter((n) => !S2r.has(n));
    return t;
  })),
  (O9r = Cn((e) => $9r(e).filter((n) => S2r.has(n)))));
Pvi = new Set([Y2e, Gnt, FY, X2e, lte, IPt, Wnt, xPt, T0, o1]);
function OCn(e) {
  let t = e.trim();
  if (!/^https?:\/\//i.test(t)) t = `https://${t}`;
  t = t.replace(/\/$/, "");
  let n = new URL(t);
  if (n.protocol === "http:" && !r0d.has(n.hostname))
    throw Error(
      "Gateway URL must use https:// (got http://). Plain HTTP is only allowed for localhost during development.",
    );
  return t;
}
function PCn(e) {
  let t = e.replace(/%.*$/, "").toLowerCase();
  if (l_e.isIPv4(t)) {
    let [o = 0, s = 0] = t.split(".").map(Number);
    return (
      o === 10 ||
      (o === 172 && s >= 16 && s <= 31) ||
      (o === 192 && s === 168) ||
      o === 127 ||
      (o === 169 && s === 254) ||
      (o === 100 && s >= 64 && s <= 127)
    );
  }
  if (!l_e.isIPv6(t)) return false;
  let n = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(t);
  if (n?.[1]) return PCn(n[1]);
  if (t === "::1") return true;
  let r = parseInt(/^([0-9a-f]{1,4}):/.exec(t)?.[1] ?? "0", 16);
  return (r >= 65152 && r <= 65215) || (r >= 64512 && r <= 65023);
}
async function $vi(e) {
  let t = new URL(e),
    n = t.hostname.replace(/^\[|\]$/g, ""),
    r = l_e.isIPv4(n) || l_e.isIPv6(n),
    o = ID();
  if (o && !g9(e)) {
    let a, l;
    try {
      if (((a = new URL(o).hostname.replace(/^\[|\]$/g, "")), !a)) throw Error("no hostname");
      l =
        l_e.isIPv4(a) || l_e.isIPv6(a)
          ? [a]
          : (
              await vc(
                B9r.lookup(a, {
                  all: true,
                }),
                10000 /* 1e4 */,
                "DNS resolution timed out",
              )
            ).map((d) => d.address);
    } catch {
      throw new mi(
        "Could not resolve the configured HTTP proxy. Connect to your organization's network (or VPN) and try again.",
        "gateway login: could not parse or resolve proxy host",
      );
    }
    if (l.length === 0 || l.some((u) => !PCn(u))) {
      let u = l_e.isIPv6(n) ? `[${n}]:${t.port || (t.protocol === "http:" ? "80" : "443")}` : n;
      throw new mi(
        `Gateway login would go through proxy ${a}, which is not on a private network. Add ${u} to NO_PROXY for a direct connection, or use a proxy on your organization's private network.`,
        "gateway login: HTTP proxy host is not private",
      );
    }
  }
  let s;
  if (r) s = [n];
  else
    try {
      s = (
        await vc(
          B9r.lookup(n, {
            all: true,
          }),
          10000 /* 1e4 */,
          "DNS resolution timed out",
        )
      ).map((a) => a.address);
    } catch {
      throw new mi(
        `Could not resolve gateway host ${n}. Connect to your organization's network (or VPN) and try again.`,
        "gateway login: could not resolve gateway host",
      );
    }
  if (s.length === 0)
    throw new mi(
      `Could not resolve gateway host ${n}.`,
      "gateway login: gateway host resolved to zero addresses",
    );
  let i = s.find((a) => !PCn(a));
  if (i !== void 0) {
    let a = s.some((l) => PCn(l));
    throw new mi(
      `Gateway hosts must be on your organization's private network; ${n} resolves to the public (or unrecognized) address ${i}. ` +
        (a
          ? "Every address for a gateway host must be private \u2014 if this is " +
            "a dual-stack DNS name, publish only private records for it (for example, remove the public AAAA record)."
          : r
            ? "Use your gateway's private (internal) address or DNS name instead."
            : "Connect to your organization's network (or VPN) and try again."),
      "gateway login: gateway host resolves to a public address",
    );
  }
}
async function ZOt(e, t = 10000 /* 1e4 */) {
  let n = new URL(e),
    r = n.hostname.replace(/^\[|\]$/g, "");
  if (n.protocol !== "https:")
    return {
      hostname: r,
      fingerprint: "http-loopback",
    };
  let o = n.port ? Number(n.port) : 443,
    s = DG(),
    i = UB(),
    a = ID(),
    l = a && !g9(e) ? await o0d(a, r, o, t) : void 0;
  return new Promise((c, u) => {
    let d = $Cn.connect(
      {
        host: r,
        port: o,
        servername: r,
        socket: l,
        timeout: t,
        ...(s && {
          ca: s,
        }),
        ...i,
      },
      () => {
        try {
          let p = d.getPeerCertificate(),
            f =
              typeof p?.fingerprint256 === "string"
                ? p.fingerprint256.replaceAll(":", "").toLowerCase()
                : "";
          if ((d.destroy(), !f)) u(Error("could not read TLS certificate fingerprint"));
          else
            c({
              hostname: r,
              fingerprint: f,
            });
        } catch (p) {
          (d.destroy(), u(Error(be(p))));
        }
      },
    );
    (d.setTimeout(t),
      d.once("error", (p) => u(Error(be(p)))),
      d.once("timeout", () => {
        (d.destroy(), l?.destroy(), u(Error("TLS connection timed out")));
      }));
  });
}
function o0d(e, t, n, r = 10000 /* 1e4 */) {
  let o = new URL(e),
    s = o.protocol === "https:",
    i = s ? MCn.request : Mvi.request,
    a = t.includes(":") ? `[${t}]` : t,
    l = {
      Host: `${a}:${n}`,
    };
  if (o.username) {
    let u = `${decodeURIComponent(o.username)}:${decodeURIComponent(o.password)}`;
    l["Proxy-Authorization"] = "Basic " + Buffer.from(u).toString("base64");
  }
  let c = DG();
  return new Promise((u, d) => {
    let p = i({
      host: o.hostname,
      port: o.port || (s ? 443 : 80),
      method: "CONNECT",
      path: `${a}:${n}`,
      timeout: r,
      headers: l,
      ...(s && {
        ...(c && {
          ca: c,
        }),
        ...UB(),
      }),
    });
    (p.once("connect", (f, m) => {
      if (f.statusCode !== 200) (m.destroy(), d(Error(`proxy CONNECT failed: ${f.statusCode}`)));
      else u(m);
    }),
      p.once("error", (f) => d(Error(be(f)))),
      p.once("timeout", () => {
        (p.destroy(), d(Error("proxy CONNECT timed out")));
      }),
      p.end());
  });
}
async function e1t(e) {
  return (await wl().readAsync())?.gatewayTrust?.[e];
}
function Ovi(e) {
  let t = DG();
  return new MCn.Agent({
    ...UB(),
    ...(t && {
      ca: t,
    }),
    checkServerIdentity: (n, r) => {
      let o = $Cn.checkServerIdentity(n, r);
      if (o) return o;
      if (
        (typeof r.fingerprint256 === "string"
          ? r.fingerprint256.replaceAll(":", "").toLowerCase()
          : "") !== e
      )
        return Error(NCn);
      return;
    },
  });
}
async function Nvi(e, t) {
  let n = await wl().mutate((r) => ({
    ...r,
    gatewayTrust: {
      ...(r.gatewayTrust ?? {}),
      [e]: t,
    },
  }));
  if (!n.success)
    throw Error(`Failed to persist gateway TLS pin${n.warning ? `: ${n.warning}` : ""}`);
}
var B9r,
  Mvi,
  MCn,
  l_e,
  $Cn,
  r0d,
  NCn = "gateway TLS certificate does not match the pinned fingerprint";
