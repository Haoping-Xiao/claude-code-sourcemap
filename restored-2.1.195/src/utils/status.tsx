// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dgt
// matched 2.1.88 source: src/utils/status.tsx
// class=modified  jaccard=0.4768  score=0.6489  fileCov=0.6426
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Dgt = E(() => {
  Kv();
  dr();
});
function OVn(e) {
  let t = e.map((n) => n.filter((r) => !r.antOnly));
  return (t.push(e.flatMap((n) => n.filter((r) => r.antOnly))), t);
}
function rKa() {
  return [];
}
function oKa(e, t = null, n) {
  let r = e?.find((o) => o.name === "ide");
  if (t) {
    let o = yk(t.ideType),
      s = kre(t.ideType) ? "plugin" : "extension";
    if (t.error)
      return [
        {
          label: "IDE",
          value: dKa.jsxs(w, {
            children: [
              Io("error", n)(nt.cross),
              " Error installing ",
              o,
              " ",
              s,
              ": ",
              t.error,
              `
`,
              "Please restart your IDE and try again.",
            ],
          }),
        },
      ];
    if (t.installed)
      if (r && r.type === "connected") {
        if (t.installedVersion !== r.serverInfo?.version)
          return [
            {
              label: "IDE",
              value: `Connected to ${o} ${s} version ${t.installedVersion} (server version: ${r.serverInfo?.version})`,
            },
          ];
        else
          return [
            {
              label: "IDE",
              value: `Connected to ${o} ${s} version ${t.installedVersion}`,
            },
          ];
      } else
        return [
          {
            label: "IDE",
            value: `Installed ${o} ${s}`,
          },
        ];
  } else if (r) {
    let o = Zdo(r) ?? "IDE";
    if (r.type === "connected")
      return [
        {
          label: "IDE",
          value: `Connected to ${o} extension`,
        },
      ];
    else
      return [
        {
          label: "IDE",
          value: `${Io("error", n)(nt.cross)} Not connected to ${o}`,
        },
      ];
  }
  return [];
}
function sKa(e = [], t) {
  let n = e.filter((s) => s.name !== "ide");
  if (!n.length) return [];
  let r = {
    connected: 0,
    pending: 0,
    needsAuth: 0,
    disabled: 0,
    failed: 0,
  };
  for (let s of n)
    switch (s.type) {
      case "connected":
        r.connected++;
        break;
      case "pending":
        r.pending++;
        break;
      case "needs-auth":
        r.needsAuth++;
        break;
      case "disabled":
        r.disabled++;
        break;
      case "failed":
        r.failed++;
        break;
    }
  let o = [];
  if (r.connected) o.push(Io("success", t)(`${r.connected} connected`));
  if (r.needsAuth) o.push(Io("warning", t)(`${r.needsAuth} need auth`));
  if (r.pending) o.push(Io("inactive", t)(`${r.pending} pending`));
  if (r.disabled) o.push(Io("inactive", t)(`${r.disabled} disabled`));
  if (r.failed) o.push(Io("error", t)(`${r.failed} failed`));
  return [
    {
      label: "MCP servers",
      value: `${o.join(", ")} ${Io("inactive", t)("\xB7 /mcp")}`,
    },
  ];
}
async function iKa() {
  if (gce()) return [];
  let e = await Wv(),
    t = XRe(e),
    n = [],
    r = YRe();
  return (
    t.forEach((o) => {
      let s = kd(o.path);
      n.push(`Large ${s} will impact performance (${ou(o.content.length)} chars > ${ou(r)})`);
    }),
    n
  );
}
function aKa() {
  return [
    {
      label: "Setting sources",
      value: $w()
        .filter((r) => {
          if (r === "policySettings" && Fae()) return !0;
          let o = yn(r);
          return o !== null && Object.keys(o).length > 0;
        })
        .map((r) => {
          if (r === "policySettings") {
            if (Fae()) return "Enterprise managed settings (helper)";
            let o = $he();
            if (o === null) return null;
            switch (o) {
              case "remote":
                return "Enterprise managed settings (remote)";
              case "plist":
                return "Enterprise managed settings (plist)";
              case "hklm":
                return "Enterprise managed settings (HKLM)";
              case "file": {
                let { hasBase: s, hasDropIns: i } = DLr();
                if (s && i) return "Enterprise managed settings (file + drop-ins)";
                if (i) return "Enterprise managed settings (drop-ins)";
                return "Enterprise managed settings (file)";
              }
              case "parent":
                return "Enterprise managed settings (parent process)";
              case "hkcu":
                return "Enterprise managed settings (HKCU)";
            }
          }
          return mvs(r);
        })
        .filter((r) => r !== null),
    },
  ];
}
async function lKa() {
  return (await R9e()).map((t) => t.message);
}
async function cKa() {
  let e = await I9e(),
    t = [],
    { errors: n } = OPe();
  if (n.length > 0) {
    let o = Uo(n.map((s) => s.file)).join(", ");
    t.push(`Found invalid entries in: ${o}.`);
  }
  if (
    (e.warnings.forEach((r) => {
      t.push(r.issue);
    }),
    e.hasUpdatePermissions === !1)
  )
    t.push("No write permissions for auto-updates");
  return t;
}
function NVn() {
  let e = X4e();
  if (!e) return [];
  let t = [];
  if (e.subscription)
    t.push({
      label: "Login method",
      value: `${e.subscription} account`,
    });
  if (e.tokenSource)
    t.push({
      label: "Auth token",
      value: e.tokenSource,
    });
  if (e.apiKeySource)
    t.push({
      label: "API key",
      value: e.apiKeySource,
    });
  if (iH())
    t.push({
      label: "Profile",
      value: VSn(),
    });
  if (e.organization && !process.env.IS_DEMO)
    t.push({
      label: "Organization",
      value: e.organization,
    });
  if (e.email && !process.env.IS_DEMO)
    t.push({
      label: "Email",
      value: e.email,
    });
  return t;
}
function BVn() {
  let e = fr(),
    t = [];
  if (e !== "firstParty") {
    let o = QDt(),
      s = o ? `${ote[e]} + ${ote[o]}` : ote[e];
    t.push({
      label: "API provider",
      value: s,
    });
  }
  if (e === "firstParty") {
    let o = process.env.ANTHROPIC_BASE_URL;
    if (o)
      t.push({
        label: "Anthropic base URL",
        value: o,
      });
  } else if (e === "bedrock") {
    let o = process.env.ANTHROPIC_BEDROCK_BASE_URL;
    if (o)
      t.push({
        label: "Bedrock base URL",
        value: o,
      });
    t.push({
      label: "AWS region",
      value: nKa(),
    });
    let s = process.env.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (s)
      t.push({
        label: "Bedrock service tier",
        value: s,
      });
    if (ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH))
      t.push({
        value: "AWS auth skipped",
      });
  } else if (e === "vertex") {
    let o = process.env.ANTHROPIC_VERTEX_BASE_URL;
    if (o)
      t.push({
        label: "Vertex base URL",
        value: o,
      });
    let s = process.env.ANTHROPIC_VERTEX_PROJECT_ID;
    if (s)
      t.push({
        label: "GCP project",
        value: s,
      });
    if (
      (t.push({
        label: "Default region",
        value: Osn(),
      }),
      ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH))
    )
      t.push({
        value: "GCP auth skipped",
      });
  } else if (e === "foundry") {
    let o = process.env.ANTHROPIC_FOUNDRY_BASE_URL;
    if (o)
      t.push({
        label: "Microsoft Foundry base URL",
        value: o,
      });
    let s = process.env.ANTHROPIC_FOUNDRY_RESOURCE;
    if (s)
      t.push({
        label: "Microsoft Foundry resource",
        value: s,
      });
    if (ut(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH))
      t.push({
        value: "Microsoft Foundry auth skipped",
      });
  } else if (e === "anthropicAws") {
    let o = process.env.ANTHROPIC_AWS_BASE_URL;
    if (o)
      t.push({
        label: "Claude Platform on AWS base URL",
        value: o,
      });
    let s = process.env.ANTHROPIC_AWS_WORKSPACE_ID;
    if (s)
      t.push({
        label: "Workspace ID",
        value: s,
      });
    if (
      (t.push({
        label: "AWS region",
        value: vFe(),
      }),
      ut(process.env.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH))
    )
      t.push({
        value: "Claude Platform on AWS auth skipped",
      });
  } else if (e === "gateway") {
    let o = km();
    if (o)
      t.push({
        label: "Gateway URL",
        value: o.url,
      });
  }
  if (e === "mantle" || QDt() === "mantle") {
    let o = process.env.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (o)
      t.push({
        label: "Amazon Bedrock (Mantle) base URL",
        value: o,
      });
    if (e === "mantle")
      t.push({
        label: "AWS region",
        value: nKa(),
      });
    if (ut(process.env.CLAUDE_CODE_SKIP_MANTLE_AUTH))
      t.push({
        value: "Amazon Bedrock (Mantle) auth skipped",
      });
  }
  let n = ID();
  if (n)
    t.push({
      label: "Proxy",
      value: n,
    });
  let r = UB();
  if (process.env.NODE_EXTRA_CA_CERTS)
    t.push({
      label: "Additional CA cert(s)",
      value: process.env.NODE_EXTRA_CA_CERTS,
    });
  if (r) {
    if (r.cert && process.env.CLAUDE_CODE_CLIENT_CERT)
      t.push({
        label: "mTLS client cert",
        value: process.env.CLAUDE_CODE_CLIENT_CERT,
      });
    if (r.key && process.env.CLAUDE_CODE_CLIENT_KEY)
      t.push({
        label: "mTLS client key",
        value: process.env.CLAUDE_CODE_CLIENT_KEY,
      });
  }
  return t;
}
function nKa() {
  let { region: e, source: t } = Dkr();
  switch (t) {
    case "env":
      return e;
    case "shared-config":
      return `${e} (from AWS config)`;
    case "default":
      return (nj(), `${e} (default \u2014 set AWS_REGION or add a region to your AWS config)`);
  }
}
function uKa(e) {
  return bj(e);
}
var dKa;
