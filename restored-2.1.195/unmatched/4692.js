// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zOe
// matched 2.1.88 source: src/components/mcp/MCPRemoteServerMenu.tsx
// class=new  jaccard=0.0266  score=0.0814  fileCov=0.0379
// note: nearest: src/components/mcp/MCPRemoteServerMenu.tsx (0.0266); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zOe = E(() => {
  fn();
  vNo = require("path");
});
function KOe() {
  let e = process.env.XDG_RUNTIME_DIR || `/run/user/${process.getuid()}`;
  try {
    return gNl.statSync(wKe.join(e, "systemd")).isDirectory();
  } catch {
    return !1;
  }
}
function INo() {
  if (!dm()) return process.argv[1];
  return wKe.join(Sde(), "claude");
}
function lnr(e) {
  return e.replace(/[\r\n]/g, " ").replaceAll("%", "%%");
}
function wNo(e) {
  let t = lnr(e);
  return t.includes(" ") ? `"${t}"` : t;
}
function xNo() {
  let e = process.env.XDG_CONFIG_HOME || wKe.join(CNo.homedir(), ".config");
  return wKe.join(e, "systemd", "user", `${CHe}.service`);
}
async function j7t(e) {
  let {
      jsonPath: t,
      logPath: n
    } = e,
    r = INo(),
    o = process.env.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let s = xNo(),
      i = `${CHe}.service`;
    try {
      let u = process.env.XDG_CONFIG_HOME || wKe.join(CNo.homedir(), ".config");
      await zQ.mkdir(wKe.join(u, "systemd", "user"), {
        recursive: !0
      }), await zQ.writeFile(s, `[Unit]
Description=Claude Daemon
After=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=10

[Service]
Type=simple
Environment="PATH=${lnr(o)}"
ExecStart=${wNo(r)} daemon --json-path ${wNo(t)} --log-file ${wNo(n)} --origin service
Restart=always
RestartSec=1
StandardOutput=append:${lnr(n)}
StandardError=append:${lnr(n)}

[Install]
WantedBy=default.target
`, "utf8");
    } catch (u) {
      return {
        ok: !1,
        error: be(u),
        serviceId: CHe,
        servicePath: s
      };
    }
    await $n("systemctl", ["--user", "daemon-reload"], {
      useCwd: !1
    });
    let {
      code: a,
      stderr: l,
      error: c
    } = await $n("systemctl", ["--user", "enable", "--now", i], {
      useCwd: !1
    });
    if (a !== 0) return {
      ok: !1,
      error: l || c || "systemctl enable failed",
      serviceId: CHe,
      servicePath: s
    };
    return await $n("systemctl", ["--user", "restart", i], {
      useCwd: !1
    }), {
      ok: !0,
      serviceId: CHe,
      servicePath: s
    };
  }
  return {
    ok: !1,
    error: `service install not available on ${"linux"} \u2014 the daemon runs on demand instead`,
    serviceId: CHe,
    servicePath: ""
  };
}
async function AEt() {
  {
    let e = xNo(),
      t = `${CHe}.service`;
    await $n("systemctl", ["--user", "disable", "--now", t], {
      useCwd: !1
    });
    try {
      await zQ.unlink(e);
    } catch (n) {
      if (!wn(n)) return {
        ok: !1,
        error: be(n)
      };
    }
    return await $n("systemctl", ["--user", "daemon-reload"], {
      useCwd: !1
    }), {
      ok: !0
    };
  }
  return {
    ok: !1,
    error: "service uninstall not available on linux"
  };
}
async function cnr() {
  return kNo("start");
}
async function G7t() {
  return kNo("stop");
}
async function hNl() {
  return kNo("restart");
}
async function kNo(e) {
  if (!1) switch (e) {
    case "start":
    case "stop":
    case "restart":
  }
  {
    let {
      code: t,
      stderr: n,
      error: r
    } = await $n("systemctl", ["--user", e, `${CHe}.service`], {
      useCwd: !1
    });
    if (t !== 0) return {
      ok: !1,
      error: n || r || `systemctl ${e} failed`
    };
    return {
      ok: !0
    };
  }
  return {
    ok: !1,
    error: `service ${e} not available on ${"linux"} \u2014 the daemon runs on demand instead`
  };
}
async function unr() {
  let e = xNo();
  if (!e) return !1;
  let t;
  try {
    let s = await zQ.stat(e);
    if (!s.isFile() || s.size > 1048576) return !1;
    t = await zQ.readFile(e, "utf8");
  } catch {
    return !1;
  }
  let n = t.match(/^ExecStart=(?:"([^"]+)"|(\S+))/m),
    r = n?.[1] ?? n?.[2];
  if (!r) return !1;
  let o = r.replaceAll("%%", "%");
  try {
    return await zQ.access(o), !1;
  } catch {
    return !0;
  }
}
async function KQ() {
  {
    let {
      code: e,
      stderr: t,
      error: n
    } = await $n("systemctl", ["--user", "status", `${CHe}.service`], {
      useCwd: !1
    });
    if (n || t.includes("Failed to connect to bus")) return !1;
    return e === 0 || e === 3;
  }
  return !1;
}
var gNl,
  zQ,
  CNo,
  wKe,
  CHe = "com.anthropic.claude-daemon";