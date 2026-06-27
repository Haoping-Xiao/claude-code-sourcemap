// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Afc
// matched 2.1.88 source: src/upstreamproxy/upstreamproxy.ts
// class=modified  jaccard=0.1466  score=0.2575  fileCov=0.2539
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: showInvalidConfigDialog
// [unwrapped __esm module Afc] deps: dn, fd, je, wr, fn, At, Bi, Mx, iWe, kM, C7n, ofc, pfc
((ffc = require("child_process")),
  (sO = require("fs/promises")),
  (e8o = require("os")),
  ($Te = require("path")),
  (gfc = [
    "/etc/ssl/certs/ca-certificates.crt",
    "/etc/pki/tls/certs/ca-bundle.crt",
    "/etc/ssl/cert.pem",
  ]),
  (hfc = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "169.254.0.0/16",
    "anthropic.com",
    ".anthropic.com",
    "*.anthropic.com",
    "registry.npmjs.org",
    "jsr.io",
    "npm.jsr.io",
    "pypi.org",
    "files.pythonhosted.org",
    "index.crates.io",
    "proxy.golang.org",
    "host.docker.internal",
  ]),
  (r8o = [
    ...hfc,
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local",
  ].join(",")),
  (Vlm = hfc.join(",")),
  (vS = {
    enabled: false,
    noProxy: r8o,
  }));
Ylm = [
  ["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m],
  ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m],
  ["git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m],
];
ncm = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;
ocm = [
  {
    dir: "/usr/local/share/ca-certificates",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-certificates"],
  },
  {
    dir: "/etc/pki/ca-trust/source/anchors",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-trust", "extract"],
  },
];
function acm(e) {
  let t = Hfc.c(19),
    { filePath: n, errorDescription: r, onExit: o, onReset: s } = e,
    i;
  if (t[0] !== o || t[1] !== s)
    ((i = (g) => {
      if (g === "exit") o();
      else s();
    }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] !== n)
    ((l = jz.jsxs(w, {
      children: [
        "The configuration file at ",
        jz.jsx(w, {
          bold: true,
          children: n,
        }),
        " contains invalid JSON.",
      ],
    })),
      (t[3] = n),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== r)
    ((c = jz.jsx(w, {
      children: r,
    })),
      (t[5] = r),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] !== l || t[8] !== c)
    ((u = jz.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [l, c],
    })),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((d = jz.jsx(w, {
      bold: true,
      children: "Choose an option:",
    })),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((p = [
      {
        label: "Exit and fix manually",
        value: "exit",
      },
      {
        label: "Reset with default configuration",
        value: "reset",
      },
    ]),
      (t[11] = p));
  else p = t[11];
  let f;
  if (t[12] !== a || t[13] !== o)
    ((f = jz.jsxs(U, {
      flexDirection: "column",
      children: [
        d,
        jz.jsx(Sr, {
          options: p,
          onChange: a,
          onCancel: o,
        }),
      ],
    })),
      (t[12] = a),
      (t[13] = o),
      (t[14] = f));
  else f = t[14];
  let m;
  if (t[15] !== o || t[16] !== u || t[17] !== f)
    ((m = jz.jsxs(zn, {
      title: "Configuration error",
      color: "error",
      onCancel: o,
      children: [u, f],
    })),
      (t[15] = o),
      (t[16] = u),
      (t[17] = f),
      (t[18] = m));
  else m = t[18];
  return m;
}
async function showInvalidConfigDialog({ error: e }) {
  let t = {
    ...lN(false),
    theme: lcm,
  };
  await new Promise(async (n) => {
    let { unmount: r } = await b8(
      jz.jsx(AH, {
        children: jz.jsx(TT, {
          children: jz.jsx(acm, {
            filePath: e.filePath,
            errorDescription: e.message,
            onExit: () => {
              (r(), n(), process.exit(1));
            },
            onReset: () => {
              (fwe(e.filePath, De(e.defaultConfig, null, 2), {
                flush: false,
                encoding: "utf8",
              }),
                r(),
                n(),
                process.exit(0));
            },
          }),
        }),
      }),
      t,
    );
  });
}
var Hfc,
  jz,
  lcm = "dark";
