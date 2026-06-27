// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VUc
// matched 2.1.88 source: src/services/api/filesApi.ts
// class=new  jaccard=0.0337  score=0.0903  fileCov=0.0511
// note: nearest: src/services/api/filesApi.ts (0.0337); dir inferred from dep-graph -> utils; 6 renamed
// ─────────────────────────────────────────────────────────────────────────
var VUc = E(() => {
  dn();
  u8t();
  je();
  RE();
  tA();
});
function yXo({
  message: e,
  held: t,
  holdBackActive: n,
  emit: r
}) {
  if (n) {
    t.push(e);
    return;
  }
  _Xo(t, r), r(e);
}
function _Xo(e, t) {
  for (let n of e) t(n);
  e.length = 0;
}
var EXo = {};
_t(EXo, {
  stageFile: () => stageFile,
  resolveStageFileRoot: () => resolveStageFileRoot,
  destFromMountPath: () => destFromMountPath,
  STAGE_FILE_ROOT: () => STAGE_FILE_ROOT,
  STAGE_FILE_MOUNT_PREFIX: () => STAGE_FILE_MOUNT_PREFIX,
  DEFAULT_STAGE_FILE_ROOT: () => DEFAULT_STAGE_FILE_ROOT
});
function resolveStageFileRoot(e) {
  if (!e) return DEFAULT_STAGE_FILE_ROOT;
  if (!Lmr(e)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return JUc(e);
}
function destFromMountPath(e) {
  if (e.includes("\x00")) throw Error("mount_path contains null bytes");
  if (!Lmr(e)) throw Error("mount_path must be absolute");
  let t = JUc(e),
    n = QUc(STAGE_FILE_MOUNT_PREFIX, t);
  if (n === "" || n === "." || n.split(ZUc).includes("..") || Lmr(n)) throw Error(`mount_path must be under ${STAGE_FILE_MOUNT_PREFIX}/`);
  return ILm(STAGE_FILE_ROOT, n);
}
function kLm(e, t) {
  let n = QUc(e, t);
  if (n === ".." || n.startsWith(".." + ZUc) || Lmr(n)) {
    let r = Error("dest parent escaped stage root");
    throw r.code = "STAGE_PARENT_ESCAPE", r;
  }
}
function RLm(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}
function YUc(e, t) {
  let {
    kind: n,
    status: r
  } = $A(t);
  return {
    kind: n,
    status: r,
    message: `${e} failed: ${n}${r ? ` ${r}` : ""}`
  };
}
async function stageFile(e) {
  if (!Oe.CLAUDE_CODE_REMOTE_SESSION_ID) return {
    ok: !1,
    error: "CLAUDE_CODE_REMOTE_SESSION_ID unset"
  };
  let n;
  try {
    n = destFromMountPath(e.mount_path);
  } catch (u) {
    return {
      ok: !1,
      error: u instanceof Error ? u.message : String(u)
    };
  }
  if (!e.force) try {
    if ((await P3.stat(n)).isFile()) return In("debug", "stage_file_noop_already_present", {}), G("tengu_stage_file_completed", {
      ok: !0,
      noop_already_present: !0,
      duration_ms: 0
    }), {
      ok: !0,
      noop: "already_present"
    };
  } catch {}
  let r = performance.now(),
    o = () => Math.round(performance.now() - r),
    s,
    i;
  try {
    let d = await Os.get("/worker/files", {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: KUc
    });
    if (!d.ok) return G("tengu_stage_file_completed", {
      ok: !1,
      gated: !0,
      duration_ms: o()
    }), In("warn", "stage_file_list_gated", {
      reason: d.reason,
      duration_ms: o()
    }), {
      ok: !1,
      error: `list gated: ${d.reason}`
    };
    if (d.status < 200 || d.status >= 300) return G("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: o()
    }), In("warn", "stage_file_list_failed", {
      kind: "http",
      status: d.status,
      duration_ms: o()
    }), {
      ok: !1,
      error: `list failed: http ${d.status}`
    };
    if (s = d.data.filestore_jwt, i = d.data.filesystem_id, !s || !i) return {
      ok: !1,
      error: "list returned incomplete credential"
    };
  } catch (u) {
    let {
      kind: d,
      status: p,
      message: f
    } = YUc("list", u);
    return G("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: o()
    }), In("warn", "stage_file_list_failed", {
      kind: d,
      status: p,
      duration_ms: o()
    }), {
      ok: !1,
      error: f
    };
  }
  let a;
  try {
    let u = await Os.post("/v1/filestore/fs/readFile", {
      filesystem_id: i,
      path: e.mount_path
    }, {
      auth: "none",
      host: "api",
      headers: {
        Authorization: `Bearer ${s}`
      },
      responseType: "arraybuffer",
      timeout: KUc,
      maxContentLength: xLm
    });
    if (!u.ok) return G("tengu_stage_file_completed", {
      ok: !1,
      gated: !0,
      duration_ms: o()
    }), In("warn", "stage_file_read_gated", {
      reason: u.reason,
      duration_ms: o()
    }), {
      ok: !1,
      error: `read gated: ${u.reason}`
    };
    if (u.status < 200 || u.status >= 300) return G("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: o()
    }), In("warn", "stage_file_read_failed", {
      kind: "http",
      status: u.status,
      duration_ms: o()
    }), {
      ok: !1,
      error: `read failed: http ${u.status}`
    };
    a = Buffer.from(u.data);
  } catch (u) {
    let {
      kind: d,
      status: p,
      message: f
    } = YUc("read", u);
    return G("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: o()
    }), In("warn", "stage_file_read_failed", {
      kind: d,
      status: p,
      duration_ms: o()
    }), {
      ok: !1,
      error: f
    };
  }
  let l = o(),
    c = `${n}.tmp.${Date.now()}.${Math.random().toString(36).slice(2)}`;
  try {
    await P3.mkdir(zUc(n), {
      recursive: !0
    });
    let u = await P3.realpath(STAGE_FILE_ROOT),
      d = await P3.realpath(zUc(n));
    kLm(u, d), await P3.writeFile(c, a), await P3.chmod(c, 292), await P3.rename(c, n);
  } catch (u) {
    if (await P3.unlink(c).catch(() => {}), RLm(u) && !Oe.CLAUDE_STAGE_FILE_ROOT) return G("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      fetch_ms: l,
      duration_ms: o(),
      bytes: 0
    }), In("debug", "stage_file_noop_readonly_mount", {
      duration_ms: o()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    let d = typeof u === "object" && u !== null && "code" in u ? String(u.code) : "unknown";
    return G("tengu_stage_file_completed", {
      ok: !1,
      fetch_ms: l,
      duration_ms: o(),
      bytes: a.length
    }), In("warn", "stage_file_write_failed", {
      code: d,
      duration_ms: o()
    }), {
      ok: !1,
      error: `write failed: ${d}`
    };
  }
  return G("tengu_stage_file_completed", {
    ok: !0,
    fetch_ms: l,
    duration_ms: o(),
    bytes: a.length
  }), In("info", "stage_file_ok", {
    bytes: a.length,
    fetch_ms: l,
    duration_ms: o()
  }), {
    ok: !0
  };
}
var P3,
  XUc,
  zUc,
  Lmr,
  ILm,
  JUc,
  QUc,
  ZUc,
  DEFAULT_STAGE_FILE_ROOT = "/mnt/user-data/uploads",
  STAGE_FILE_ROOT,
  STAGE_FILE_MOUNT_PREFIX = "/uploads",
  xLm = 67108864,
  KUc = 30000;