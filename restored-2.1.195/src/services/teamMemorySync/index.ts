// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hwl
// matched 2.1.88 source: src/services/teamMemorySync/index.ts
// class=modified  jaccard=0.2623  score=0.3664  fileCov=0.4802
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hwl] deps: Xr
((fAf = ve(() =>
  H.object({
    entries: H.record(H.string(), H.string()),
    entryChecksums: H.record(H.string(), H.string()).optional(),
    deletedEntries: H.record(H.string(), H.number()).optional(),
  }),
)),
  (pwl = ve(() =>
    H.object({
      organizationId: H.string().optional(),
      repo: H.string(),
      version: H.number().optional(),
      lastModified: H.string(),
      checksum: H.string(),
      content: fAf(),
    }),
  )),
  (fwl = ve(() =>
    H.object({
      checksum: H.string().optional(),
      version: H.number().optional(),
      entryChecksums: H.record(H.string(), H.string()).optional(),
      deletedEntries: H.record(H.string(), H.number()).optional(),
    }),
  )),
  (mwl = ve(() =>
    H.object({
      error: H.object({
        details: H.object({
          error_code: H.literal("team_memory_too_many_entries"),
          max_entries: H.number().int().positive(),
          received_entries: H.number().int().positive(),
        }),
      }),
    }),
  )),
  (gwl = ve(() =>
    H.object({
      error: H.object({
        type: H.string().optional(),
        message: H.string().optional(),
        details: H.object({
          error_code: H.string().optional(),
        }).optional(),
      }).optional(),
    }),
  )));
function NDo(e, t, n) {
  let r = n ? `&view=${n}` : "";
  if (e === "team") return `/api/claude_code/team_memory?repo=${encodeURIComponent(t)}${r}`;
  return `/api/claude_code/memory?scope=user&repo=${encodeURIComponent(t)}${r}`;
}
function Swl(e) {
  return e === "team" ? cT() : x2n();
}
async function Ewl(e, t, n) {
  if ((await M_e(t, ...(e === "team" ? ["team"] : []))) === "escape")
    return (
      T(`${n}: memory root escapes its canonical location \u2014 skipping sync (fail closed)`, {
        level: "error",
      }),
      true
    );
  return false;
}
function Awl(e, t) {
  return e === "team" ? d0n(t) : R2n(t);
}
function ywl(e, t) {
  if (e === "user" && oEe(t)) return true;
  return false;
}
function z$e(e) {
  return e === "team" ? "team-memory-sync" : "personal-memory-sync";
}
function BDo(e, t) {
  return {
    scope: e,
    repoSlug: t,
    lastKnownChecksum: null,
    serverChecksums: new Map(),
    serverMaxEntries: null,
    pulled: false,
    tombstonedKeys: new Set(),
    tombstonedPriorHashes: new Map(),
    keptDivergentHashes: new Map(),
    keptUnreadable: new Set(),
    pullPromise: null,
    aborted: false,
  };
}
function MJn(e) {
  return "sha256:" + bwl.createHash("sha256").update(e, "utf8").digest("hex");
}
function $Jn() {
  if (!_u()) return false;
  if (!bo()) return false;
  return WE() && z4e(xB) && z4e(qwe);
}
function $Do(e) {
  return e.length > _wl ? e.slice(0, _wl) : e;
}
function UDo(e) {
  if (!ab(e)) return {};
  return Hwl(e.response?.data);
}
function Hwl(e) {
  if (e === void 0 || e === null) return {};
  let t = gwl().safeParse(e);
  if (!t.success) return {};
  let n = t.data.error;
  if (!n) return {};
  return {
    ...(n.message !== void 0 && {
      serverMessage: $Do(n.message),
    }),
    ...(n.type !== void 0 && {
      serverErrorType: $Do(n.type),
    }),
    ...(n.details?.error_code !== void 0 && {
      serverErrorCode: $Do(n.details.error_code),
    }),
  };
}
async function gAf(e, t) {
  let n = z$e(e.scope);
  try {
    let r = {};
    if (t) r["If-None-Match"] = `"${t.replaceAll('"', "")}"`;
    let o = await Os.get(NDo(e.scope, e.repoSlug), {
      refreshOAuth: true,
      headers: r,
      timeout: ODo,
      validateStatus: (l) => l === 200 || l === 304 || l === 404,
    });
    if (!o.ok)
      return {
        success: false,
        error: o.reason === "no-auth" ? o.detail : o.reason,
        skipRetry: true,
        errorType: "auth",
      };
    let s = o.response;
    if (s.status === 304)
      return (
        T(`${n}: not modified (304)`, {
          level: "debug",
        }),
        {
          success: true,
          notModified: true,
          checksum: t ?? void 0,
        }
      );
    if (s.status === 404) {
      let { serverErrorCode: l, serverMessage: c } = Hwl(s.data);
      return (
        T(`${n}: 404 (code=${l ?? "none"}): ${c ?? "no remote data"}`, {
          level: "debug",
        }),
        (e.lastKnownChecksum = null),
        {
          success: true,
          isEmpty: true,
          serverErrorCode: l,
          serverMessage: c,
        }
      );
    }
    let i = pwl().safeParse(s.data);
    if (!i.success)
      return (
        T(`${n}: invalid response format`, {
          level: "warn",
        }),
        {
          success: false,
          error: "Invalid memory response format",
          skipRetry: true,
          errorType: "parse",
        }
      );
    let a = i.data.checksum || s.headers.etag?.replace(/^"|"$/g, "") || void 0;
    if (a) e.lastKnownChecksum = a;
    return (
      T(`${n}: fetched successfully (checksum: ${a ?? "none"})`, {
        level: "debug",
      }),
      {
        success: true,
        data: i.data,
        isEmpty: false,
        checksum: a,
      }
    );
  } catch (r) {
    let { kind: o, status: s, message: i } = $A(r),
      a = ab(r) ? De(r.response?.data ?? "") : "";
    if (o !== "other")
      T(`${n}: fetch error ${s}: ${a}`, {
        level: "warn",
      });
    let l = UDo(r);
    switch (o) {
      case "auth":
        return {
          success: false,
          error:
            s === 403 ? `Forbidden by server policy: ${a}` : `Not authorized for memory sync: ${a}`,
          skipRetry: true,
          errorType: s === 403 ? "forbidden" : "auth",
          httpStatus: s,
          ...l,
        };
      case "timeout":
        return {
          success: false,
          error: "Memory sync request timeout",
          errorType: "timeout",
        };
      case "network":
        return {
          success: false,
          error: "Cannot connect to server",
          errorType: "network",
        };
      default:
        return {
          success: false,
          error: i,
          errorType: "unknown",
          httpStatus: s,
          ...l,
        };
    }
  }
}
async function hAf(e) {
  try {
    let t = await Os.get(NDo(e.scope, e.repoSlug, "hashes"), {
      refreshOAuth: true,
      timeout: ODo,
      validateStatus: (i) => i === 200 || i === 404,
    });
    if (!t.ok)
      return {
        success: false,
        error: t.reason === "no-auth" ? t.detail : t.reason,
        errorType: "auth",
      };
    let n = t.response;
    if (n.status === 404)
      return (
        (e.lastKnownChecksum = null),
        {
          success: true,
          entryChecksums: {},
        }
      );
    let r = fwl().safeParse(n.data),
      o = (r.success ? r.data.checksum : void 0) || n.headers.etag?.replace(/^"|"$/g, ""),
      s = r.success ? r.data.entryChecksums : void 0;
    if (!s)
      return {
        success: false,
        error: "Server did not return entryChecksums (?view=hashes unsupported)",
        errorType: "parse",
      };
    if (o) e.lastKnownChecksum = o;
    return {
      success: true,
      version: r.success ? r.data.version : void 0,
      checksum: o,
      entryChecksums: s,
      deletedEntries: r.success ? r.data.deletedEntries : void 0,
    };
  } catch (t) {
    let { kind: n, status: r, message: o } = $A(t),
      s = UDo(t);
    switch (n) {
      case "auth":
        return {
          success: false,
          error: r === 403 ? "Forbidden by server policy" : "Not authorized",
          errorType: r === 403 ? "forbidden" : "auth",
          httpStatus: r,
          ...s,
        };
      case "timeout":
        return {
          success: false,
          error: "Timeout",
          errorType: "timeout",
        };
      case "network":
        return {
          success: false,
          error: "Network error",
          errorType: "network",
        };
      default:
        return {
          success: false,
          error: o,
          errorType: "unknown",
          httpStatus: r,
          ...s,
        };
    }
  }
}
async function yAf(e, t) {
  let n = null;
  for (let r = 1; r <= MDo + 1; r++) {
    if (((n = await gAf(e, t)), n.success || n.skipRetry)) return n;
    if (r > MDo) return n;
    let o = TJ(r);
    (T(`${z$e(e.scope)}: retry ${r}/${MDo}`, {
      level: "debug",
    }),
      await Nn(o));
  }
  return n;
}
function _Af(e) {
  let t = Object.keys(e).sort();
  if (t.length === 0) return [];
  let n = Buffer.byteLength('{"entries":{}}', "utf8"),
    r = (a, l) => Buffer.byteLength(De(a), "utf8") + Buffer.byteLength(De(l), "utf8") + 2,
    o = [],
    s = {},
    i = n;
  for (let a of t) {
    let l = r(a, e[a]);
    if (i + l > mAf && Object.keys(s).length > 0) (o.push(s), (s = {}), (i = n));
    ((s[a] = e[a]), (i += l));
  }
  return (o.push(s), o);
}
async function bAf(e, t, n, r) {
  let o = z$e(e.scope);
  try {
    let s = {
      "Content-Type": "application/json",
    };
    if (n) s["If-Match"] = `"${n.replaceAll('"', "")}"`;
    let i = {
      entries: t,
    };
    if (r.length > 0) i.soft_delete_keys = [...r];
    let a = await Os.put(NDo(e.scope, e.repoSlug), i, {
      refreshOAuth: true,
      headers: s,
      timeout: ODo,
      validateStatus: (d) => d === 200 || d === 412,
    });
    if (!a.ok)
      return {
        success: false,
        error: a.reason === "no-auth" ? a.detail : a.reason,
        errorType: "auth",
      };
    let l = a.response;
    if (l.status === 412)
      return (
        T(`${o}: conflict (412 Precondition Failed)`, {
          level: "info",
        }),
        {
          success: false,
          conflict: true,
          error: "ETag mismatch",
        }
      );
    let c = l.data?.checksum;
    if (c) e.lastKnownChecksum = c;
    let u = r.length > 0 ? `, soft-deleted ${r.length}` : "";
    return (
      T(`${o}: uploaded ${Object.keys(t).length} entries${u} (checksum: ${c ?? "none"})`, {
        level: "debug",
      }),
      {
        success: true,
        checksum: c,
        lastModified: l.data?.lastModified,
      }
    );
  } catch (s) {
    let i = ab(s) ? De(s.response?.data ?? "") : "";
    T(`${o}: upload failed: ${s instanceof Error ? s.message : ""} ${i}`, {
      level: "warn",
    });
    let { kind: a, status: l, message: c } = $A(s),
      u = l === 403 ? "forbidden" : a === "http" || a === "other" ? "unknown" : a,
      d = UDo(s),
      p,
      f;
    if (l === 413 && ab(s)) {
      let m = mwl().safeParse(s.response?.data);
      if (m.success)
        ((p = m.data.error.details.max_entries), (f = m.data.error.details.received_entries));
    }
    return {
      success: false,
      error: c,
      errorType: u,
      httpStatus: l,
      ...d,
      ...(p !== void 0 && {
        serverMaxEntries: p,
      }),
      ...(f !== void 0 && {
        serverReceivedEntries: f,
      }),
    };
  }
}
async function SAf(e, t) {
  let n = z$e(e),
    r = Swl(e),
    o = {},
    s = new Set(),
    i = [],
    a = true;
  async function l(u) {
    try {
      let d = await VF.readdir(u, {
        withFileTypes: true,
      });
      await Promise.all(
        d.map(async (p) => {
          let f = vze.join(u, p.name);
          if (p.isDirectory()) {
            let m = vze.relative(r, f).replaceAll("\\", "/");
            if (ywl(e, m)) return;
            await l(f);
          } else if (p.isFile()) {
            if (p.name.startsWith(".") || !(p.name.endsWith(".md") || p.name.endsWith(".txt")))
              return;
            let m = vze.relative(r, f).replaceAll("\\", "/");
            if (ywl(e, m)) return;
            s.add(m);
            try {
              let g = await VF.stat(f);
              if (g.size > Tze) {
                T(`${n}: skipping oversized file ${p.name} (${g.size} > ${Tze} bytes)`, {
                  level: "info",
                });
                return;
              }
              let h = await VF.readFile(f, "utf8"),
                y = YJe(h);
              if (y.length > 0) {
                let b = y[0];
                (i.push({
                  path: m,
                  ruleId: b.ruleId,
                  label: b.label,
                }),
                  T(`${n}: skipping "${m}" \u2014 detected ${b.label}`, {
                    level: "warn",
                  }));
                return;
              }
              o[m] = h;
            } catch {}
          }
        }),
      );
    } catch (d) {
      let p = on(d);
      if (p === "EACCES" || p === "EPERM") a = false;
      if (p !== "ENOENT" && p !== "EACCES" && p !== "EPERM") throw d;
    }
  }
  if (await Ewl(e, r, n))
    return {
      entries: {},
      diskKeys: new Set(),
      diskTrusted: false,
      skippedSecrets: i,
    };
  await l(r);
  let c = Object.keys(o).sort();
  if (t !== null && c.length > t) {
    let u = c.slice(t);
    if (
      (T(
        `${n}: ${c.length} local entries exceeds server cap of ${t}; ${u.length} file(s) will NOT sync: ${u.join(", ")}. Consider consolidating or removing some memory files.`,
        {
          level: "warn",
        },
      ),
      e === "team")
    )
      G("tengu_team_mem_entries_capped", {
        total_entries: c.length,
        dropped_count: u.length,
        max_entries: t,
      });
    let d = {};
    for (let p of c.slice(0, t)) d[p] = o[p];
    return {
      entries: d,
      diskKeys: s,
      diskTrusted: a,
      skippedSecrets: i,
    };
  }
  return {
    entries: o,
    diskKeys: s,
    diskTrusted: a,
    skippedSecrets: i,
  };
}
async function EAf(e, t, n) {
  let r = z$e(e),
    o = await Promise.all(
      Object.entries(t).map(async ([c, u]) => {
        let d;
        try {
          d = await Awl(e, c);
        } catch (f) {
          if (f instanceof Yw)
            return (
              T(`${r}: ${f.message}`, {
                level: "warn",
              }),
              {
                relPath: c,
                outcome: "failed",
              }
            );
          throw f;
        }
        if (Buffer.byteLength(u, "utf8") > Tze)
          return (
            T(`${r}: skipping oversized remote entry "${c}"`, {
              level: "info",
            }),
            {
              relPath: c,
              outcome: "failed",
            }
          );
        try {
          let f = await VF.stat(d);
          if (f.size > Tze) {
            if (e === "user")
              return (
                T(
                  `${r}: keeping oversized local "${c}" (${f.size} > ${Tze} bytes) \u2014 pinned out of push delta this session (fail safe)`,
                  {
                    level: "warn",
                  },
                ),
                {
                  relPath: c,
                  outcome: "kept_divergent",
                  unreadable: true,
                }
              );
          } else {
            let m = await VF.readFile(d, "utf8");
            if (m === u)
              return {
                relPath: c,
                outcome: "matched",
              };
            if (e === "user") {
              let g = n.get(c);
              if (!(g !== void 0 && MJn(m) === g))
                return (
                  T(
                    `${r}: keeping local "${c}" \u2014 not overwriting with server copy (unproven stale mirror; pinned out of push delta until locally edited)`,
                    {
                      level: "warn",
                    },
                  ),
                  {
                    relPath: c,
                    outcome: "kept_divergent",
                    hashAtPull: MJn(m),
                  }
                );
            }
          }
        } catch (f) {
          let m = on(f);
          if (e === "user" && m !== void 0 && m !== "ENOENT" && m !== "ENOTDIR")
            return (
              T(
                `${r}: keeping unreadable local "${c}" (${m}) \u2014 pinned out of push delta this session (fail safe)`,
                {
                  level: "warn",
                },
              ),
              {
                relPath: c,
                outcome: "kept_divergent",
                unreadable: true,
              }
            );
          if (m !== void 0 && m !== "ENOENT" && m !== "ENOTDIR")
            T(`${r}: unexpected read error for "${c}": ${m}`, {
              level: "debug",
            });
        }
        try {
          let f = d.substring(0, d.lastIndexOf(vze.sep));
          return (
            await VF.mkdir(f, {
              recursive: true,
            }),
            await VF.writeFile(d, u, "utf8"),
            {
              relPath: c,
              outcome: "written",
            }
          );
        } catch (f) {
          return (
            T(`${r}: failed to write "${c}": ${f}`, {
              level: "warn",
            }),
            {
              relPath: c,
              outcome: "failed",
            }
          );
        }
      }),
    ),
    s = On(o, (c) => c.outcome === "written"),
    i = new Set(o.filter((c) => c.outcome === "failed").map((c) => c.relPath)),
    a = new Map(),
    l = new Set();
  for (let c of o) {
    if (c.outcome !== "kept_divergent") continue;
    if (c.unreadable) l.add(c.relPath);
    else if (c.hashAtPull !== void 0) a.set(c.relPath, c.hashAtPull);
  }
  return {
    filesWritten: s,
    unwrittenKeys: i,
    keptDivergentHashes: a,
    keptUnreadable: l,
  };
}
async function AAf(e, t) {
  let n = e.scope,
    r = z$e(n),
    o = Object.keys(t);
  if (o.length === 0) return 0;
  let s = await Promise.all(
    o.map(async (i) => {
      let a;
      try {
        a = await Awl(n, i);
      } catch {
        return false;
      }
      if (n === "user") {
        let l;
        try {
          l = (await VF.stat(a)).size;
        } catch (d) {
          if (on(d) !== "ENOENT")
            T(`${r}: cannot stat tombstoned "${i}" before reap: ${on(d)}`, {
              level: "warn",
            });
          return false;
        }
        let c = e.tombstonedPriorHashes.get(i);
        if (c === void 0)
          return (
            T(
              `${r}: keeping unverifiable tombstoned "${i}" (no prior server hash) \u2014 not reaping`,
              {
                level: "debug",
              },
            ),
            It(gfe[n].conflict, "unverified_tombstone_skip"),
            false
          );
        if (l > Tze)
          return (
            T(
              `${r}: keeping oversized tombstoned "${i}" (${l} > ${Tze} bytes) \u2014 not reaping`,
              {
                level: "warn",
              },
            ),
            false
          );
        let u;
        try {
          u = await VF.readFile(a, "utf8");
        } catch (d) {
          if (on(d) !== "ENOENT")
            T(`${r}: cannot read tombstoned "${i}" to verify before reap: ${on(d)}`, {
              level: "warn",
            });
          return false;
        }
        if (MJn(u) !== c)
          return (
            T(
              `${r}: keeping locally-modified tombstoned "${i}" (diverged from server mirror) \u2014 not reaping`,
              {
                level: "warn",
              },
            ),
            xe(gfe[n].conflict),
            false
          );
      }
      try {
        return (await VF.unlink(a), true);
      } catch (l) {
        let c = on(l);
        if (c !== "ENOENT")
          T(`${r}: failed to reap tombstoned "${i}": ${c}`, {
            level: "warn",
          });
        return false;
      }
    }),
  );
  return On(s, Boolean);
}
function FDo(e) {
  if (Vi()) return false;
  if (!Us("allow_memory_sync")) return false;
  return $Jn();
}
function vKt() {
  if (!lu()) return false;
  if (Vi()) return false;
  if (!Us("allow_memory_sync")) return false;
  return XS() !== null || $Jn();
}
async function jDo(e, t) {
  if (e.pullPromise) return e.pullPromise;
  let n = HAf(e, t);
  e.pullPromise = n;
  try {
    return await n;
  } finally {
    e.pullPromise = null;
  }
}
async function HAf(e, t) {
  let n = t?.skipEtagCache ?? false,
    r = Date.now(),
    o = z$e(e.scope);
  if (!$Jn())
    return (
      Zbt(e.scope, r, {
        success: false,
        errorType: "no_oauth",
      }),
      {
        success: false,
        filesWritten: 0,
        filesReaped: 0,
        entryCount: 0,
        error: "OAuth not available",
      }
    );
  if (await Ewl(e.scope, Swl(e.scope), o))
    return (
      Zbt(e.scope, r, {
        success: false,
        errorType: "aborted",
      }),
      {
        success: false,
        filesWritten: 0,
        filesReaped: 0,
        entryCount: 0,
        errorType: "aborted",
        error: "memory root escapes its canonical location \u2014 pull skipped (fail closed)",
      }
    );
  let s = n ? null : e.lastKnownChecksum,
    i = await yAf(e, s);
  if (!i.success) {
    if (e.scope === "team" && i.errorType === "forbidden") pJe("not-available");
    return (
      Zbt(e.scope, r, {
        success: false,
        errorType: i.errorType,
        status: i.httpStatus,
        serverMessage: i.serverMessage,
        serverErrorCode: i.serverErrorCode,
        serverErrorType: i.serverErrorType,
      }),
      {
        success: false,
        filesWritten: 0,
        filesReaped: 0,
        entryCount: 0,
        error: i.error,
        errorType: i.errorType,
        ...(i.httpStatus !== void 0 && {
          httpStatus: i.httpStatus,
        }),
      }
    );
  }
  if (i.notModified)
    return (
      (e.pulled = true),
      Zbt(e.scope, r, {
        success: true,
        notModified: true,
      }),
      {
        success: true,
        filesWritten: 0,
        filesReaped: 0,
        entryCount: 0,
        notModified: true,
      }
    );
  if (i.isEmpty) {
    if (
      (e.serverChecksums.clear(),
      e.tombstonedKeys.clear(),
      e.keptDivergentHashes.clear(),
      e.keptUnreadable.clear(),
      (e.pulled = true),
      e.scope === "team")
    )
      pJe(i.serverErrorCode === TAf ? "not-available" : "empty");
    return (
      Zbt(e.scope, r, {
        success: true,
        serverErrorCode: i.serverErrorCode,
        serverMessage: i.serverMessage,
      }),
      {
        success: true,
        filesWritten: 0,
        filesReaped: 0,
        entryCount: 0,
      }
    );
  }
  let a = i.data.content.entries,
    l = i.data.content.entryChecksums,
    c = i.data.content.deletedEntries ?? {};
  e.tombstonedKeys = new Set(Object.keys(c));
  let u = new Map(e.serverChecksums);
  e.tombstonedPriorHashes = new Map();
  for (let y of e.tombstonedKeys) {
    let b = u.get(y);
    if (b !== void 0) e.tombstonedPriorHashes.set(y, b);
  }
  if ((e.serverChecksums.clear(), l))
    for (let [y, b] of Object.entries(l)) e.serverChecksums.set(y, b);
  else
    T(
      `${o}: server response missing entryChecksums (pre-#283027 deploy) \u2014 next push will be full, not delta`,
      {
        level: "debug",
      },
    );
  let {
    filesWritten: d,
    unwrittenKeys: p,
    keptDivergentHashes: f,
    keptUnreadable: m,
  } = await EAf(e.scope, a, u);
  ((e.keptDivergentHashes = f), (e.keptUnreadable = m));
  let g = await AAf(e, c);
  if (d > 0 || g > 0) {
    let { clearMemoryFileCaches: y } = await Promise.resolve().then(() => (dC(), Usa));
    y();
  }
  for (let y of p) e.serverChecksums.delete(y);
  e.pulled = true;
  let h = Object.keys(a).length;
  if (e.scope === "team") pJe(h > 0 ? "has-content" : "empty");
  return (
    T(
      `${o}: pulled ${d} files` +
        (g > 0 ? `, reaped ${g} tombstoned` : "") +
        (p.size > 0 ? ` (${p.size} entries skipped)` : ""),
      {
        level: "info",
      },
    ),
    Zbt(e.scope, r, {
      success: true,
      filesWritten: d,
      filesReaped: g,
    }),
    {
      success: true,
      filesWritten: d,
      filesReaped: g,
      entryCount: h,
    }
  );
}
async function GDo(e) {
  let t = Date.now(),
    n = z$e(e.scope),
    r = 0;
  if (!$Jn())
    return (
      mfe(e.scope, t, {
        success: false,
        errorType: "no_oauth",
      }),
      {
        success: false,
        filesUploaded: 0,
        error: "OAuth not available",
        errorType: "no_oauth",
      }
    );
  if (e.scope === "team" && ACt() === "not-available")
    return (
      T(`${n}: push skipped: server marked not-available`, {
        level: "debug",
      }),
      mfe(e.scope, t, {
        success: false,
        errorType: "server_unavailable",
      }),
      {
        success: false,
        filesUploaded: 0,
        error: "Team memory server marked not-available",
        errorType: "server_unavailable",
      }
    );
  if (e.scope === "user" && !e.pulled) {
    let m = await jDo(e, {
      skipEtagCache: true,
    });
    if (!m.success) {
      let g = m.errorType === "parse" ? "unknown" : (m.errorType ?? "network");
      return (
        T(
          `${n}: deferring push \u2014 no pull basis yet (initial pull not completed: ${m.error}, type=${g})`,
          {
            level: "warn",
          },
        ),
        mfe(e.scope, t, {
          success: false,
          errorType: g,
          status: m.httpStatus,
        }),
        {
          success: false,
          filesUploaded: 0,
          error: "initial pull not completed \u2014 deferring push to avoid blind overwrite",
          errorType: g,
          ...(m.httpStatus !== void 0 && {
            httpStatus: m.httpStatus,
          }),
        }
      );
    }
  }
  let o = await SAf(e.scope, e.serverMaxEntries),
    s = o.entries,
    i = o.diskKeys,
    a = o.diskTrusted,
    l = o.skippedSecrets,
    c = [];
  if (e.pulled && a) {
    for (let m of e.serverChecksums.keys())
      if (!i.has(m) && !e.keptUnreadable.has(m) && !e.keptDivergentHashes.has(m)) c.push(m);
  } else if (e.pulled && !a)
    T(`${n}: dir inaccessible \u2014 suppressing soft-delete`, {
      level: "warn",
    });
  if (l.length > 0) {
    let m = l.map((g) => `"${g.path}" (${g.label})`).join(", ");
    if (
      (T(
        `${n}: ${l.length} file(s) skipped due to detected secrets: ${m}. Remove the secret(s) to enable sync for these files.`,
        {
          level: "warn",
        },
      ),
      e.scope === "team")
    )
      G("tengu_team_mem_secret_skipped", {
        file_count: l.length,
        rule_ids: l.map((g) => g.ruleId).join(","),
      });
    else It(gfe[e.scope].conflict, "personal_memory_secret_skipped");
  }
  let u = new Map();
  for (let [m, g] of Object.entries(s)) {
    let h = MJn(g);
    if (e.tombstonedKeys.has(m)) {
      let y = e.tombstonedPriorHashes.get(m);
      if (e.scope !== "user" || y === void 0 || y === h) {
        if (e.scope === "user" && y === void 0)
          It(gfe[e.scope].conflict, "unverified_tombstone_drop");
        continue;
      }
    }
    u.set(m, h);
  }
  let d = false,
    p = 0,
    f = 0;
  for (let m = 0; m <= PJn; m++) {
    let g = {};
    for (let [v, C] of u) {
      if (e.keptDivergentHashes.get(v) === C) continue;
      if (e.keptUnreadable.has(v)) continue;
      if (e.serverChecksums.get(v) !== C) g[v] = s[v];
    }
    if (Object.keys(g).length === 0 && c.length === 0) {
      if (!a) It(gfe[e.scope].conflict, "root_escape");
      return (
        mfe(e.scope, t, {
          success: true,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: d,
          conflictRetries: r,
        }),
        {
          success: true,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          ...(l.length > 0 && {
            skippedSecrets: l,
          }),
        }
      );
    }
    let y = _Af(g);
    if (y.length === 0) y.push({});
    let b;
    for (let v = 0; v < y.length; v++) {
      if (e.aborted || (e.scope === "user" && !Nqe()))
        return (
          T(
            `${n}: push aborted mid-flight (personal sync disabled) after ${v}/${y.length} batch(es)`,
            {
              level: "warn",
            },
          ),
          mfe(e.scope, t, {
            success: false,
            filesUploaded: p,
            errorType: "aborted",
          }),
          {
            success: false,
            filesUploaded: p,
            error: "push aborted \u2014 personal sync disabled mid-flight",
            errorType: "aborted",
          }
        );
      let C = y[v],
        x = v === 0 ? c : [];
      if (((b = await bAf(e, C, e.lastKnownChecksum, x)), !b.success)) break;
      for (let I of Object.keys(C))
        (e.serverChecksums.set(I, u.get(I)),
          e.keptDivergentHashes.delete(I),
          e.keptUnreadable.delete(I));
      if (((p += Object.keys(C).length), x.length > 0)) {
        for (let I of x) e.serverChecksums.delete(I);
        ((f += x.length), (c.length = 0));
      }
    }
    if (((b = b), b.success)) {
      if (e.scope === "team" && u.size > 0) pJe("has-content");
      let v = f > 0 ? `${p} of ${u.size} files, soft-deleted ${f}` : `${p} of ${u.size} files`;
      return (
        T(y.length > 1 ? `${n}: pushed ${v} in ${y.length} batches` : `${n}: pushed ${v} (delta)`, {
          level: "info",
        }),
        mfe(e.scope, t, {
          success: true,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: d,
          conflictRetries: r,
          putBatches: y.length > 1 ? y.length : void 0,
        }),
        {
          success: true,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          checksum: b.checksum,
          ...(l.length > 0 && {
            skippedSecrets: l,
          }),
        }
      );
    }
    if (!b.conflict) {
      if (b.serverMaxEntries !== void 0)
        ((e.serverMaxEntries = b.serverMaxEntries),
          T(
            `${n}: learned server max_entries=${b.serverMaxEntries} from 413; next push will truncate to this`,
            {
              level: "warn",
            },
          ));
      return (
        mfe(e.scope, t, {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflictRetries: r,
          putBatches: y.length > 1 ? y.length : void 0,
          errorType: b.errorType,
          status: b.httpStatus,
          errorCode: b.serverErrorCode,
          serverMaxEntries: b.serverMaxEntries,
          serverReceivedEntries: b.serverReceivedEntries,
          serverMessage: b.serverMessage,
          serverErrorCode: b.serverErrorCode,
          serverErrorType: b.serverErrorType,
        }),
        {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          error: b.error,
          errorType: b.errorType,
          httpStatus: b.httpStatus,
          serverMessage: b.serverMessage,
          serverErrorCode: b.serverErrorCode,
          serverErrorType: b.serverErrorType,
        }
      );
    }
    if (((d = true), m >= PJn))
      return (
        T(`${n}: giving up after ${PJn} conflict retries`, {
          level: "warn",
        }),
        mfe(e.scope, t, {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: true,
          conflictRetries: r,
          errorType: "conflict",
        }),
        {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: true,
          error: "Conflict resolution failed after retries",
        }
      );
    (r++,
      T(`${n}: conflict (412), probing server hashes (attempt ${m + 1}/${PJn})`, {
        level: "info",
      }));
    let _ = await hAf(e);
    if (!_.success) {
      let v = _.errorType === "parse" ? void 0 : _.errorType;
      return (
        mfe(e.scope, t, {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: true,
          conflictRetries: r,
          errorType: v ?? "conflict",
          status: _.httpStatus,
          serverMessage: _.serverMessage,
          serverErrorCode: _.serverErrorCode,
          serverErrorType: _.serverErrorType,
        }),
        {
          success: false,
          filesUploaded: p,
          ...(f > 0 && {
            filesSoftDeleted: f,
          }),
          conflict: true,
          error: `Conflict resolution hashes probe failed: ${_.error}`,
          ...(v !== void 0 && {
            errorType: v,
          }),
          ...(_.httpStatus !== void 0 && {
            httpStatus: _.httpStatus,
          }),
          ...(_.serverMessage !== void 0 && {
            serverMessage: _.serverMessage,
          }),
          ...(_.serverErrorCode !== void 0 && {
            serverErrorCode: _.serverErrorCode,
          }),
          ...(_.serverErrorType !== void 0 && {
            serverErrorType: _.serverErrorType,
          }),
        }
      );
    }
    let S = new Set(e.serverChecksums.keys()),
      A = new Map(e.serverChecksums);
    e.serverChecksums.clear();
    for (let [v, C] of Object.entries(_.entryChecksums))
      if (S.has(v) || i.has(v)) e.serverChecksums.set(v, C);
    if (e.scope === "user") {
      let v = 0;
      for (let [C, x] of u) {
        let I = A.get(C);
        if (I === void 0) continue;
        if (_.entryChecksums[C] !== I && x === I) (e.keptDivergentHashes.set(C, x), v++);
      }
      if (v > 0) It(gfe[e.scope].conflict, "conflict_probe_kept_divergent");
    }
    if (c.length > 0) {
      let v = c.filter((C) => {
        let x = _.entryChecksums[C];
        if (x === void 0) return true;
        return x === A.get(C);
      });
      if (v.length !== c.length) {
        let C = new Set(v),
          x = c.filter((I) => !C.has(I));
        T(
          `${n}: dropping ${x.length} stale soft-delete(s) \u2014 concurrently re-created/modified server-side`,
          {
            level: "warn",
          },
        );
        for (let I of x) e.serverChecksums.delete(I);
      }
      ((c.length = 0), c.push(...v));
    }
    for (let v of Object.keys(_.deletedEntries ?? {})) {
      e.tombstonedKeys.add(v);
      let C = A.get(v);
      if (C !== void 0) e.tombstonedPriorHashes.set(v, C);
      if (e.scope !== "user") {
        u.delete(v);
        continue;
      }
      let x = u.get(v);
      if (x === void 0) continue;
      if (C !== void 0 && x === C) u.delete(v);
      else if (C !== void 0);
      else (u.delete(v), It(gfe[e.scope].conflict, "unverified_tombstone_drop"));
    }
  }
  return (
    mfe(e.scope, t, {
      success: false,
      filesUploaded: p,
      ...(f > 0 && {
        filesSoftDeleted: f,
      }),
      conflictRetries: r,
    }),
    {
      success: false,
      filesUploaded: p,
      ...(f > 0 && {
        filesSoftDeleted: f,
      }),
      error: "Unexpected end of conflict resolution loop",
    }
  );
}
function Zbt(e, t, n) {
  let r = gfe[e].pull,
    o = e === "team" ? "team_memory" : "personal_memory";
  if (n.success) xe(r);
  else
    switch (n.errorType) {
      case "no_oauth":
      case "auth":
      case "forbidden":
      case "timeout":
      case "network":
      case "aborted":
        It(r, `${o}_pull_${n.errorType}`);
        break;
      case "parse":
        Le(r, `${o}_pull_parse`);
        break;
      default:
        Le(r, `${o}_pull_unknown`);
    }
  if (e !== "team") return;
  G("tengu_team_mem_sync_pull", {
    success: n.success,
    files_written: n.filesWritten ?? 0,
    not_modified: n.notModified ?? false,
    duration_ms: Date.now() - t,
    ...(n.filesReaped && {
      files_reaped: n.filesReaped,
    }),
    ...(n.errorType && {
      errorType: n.errorType,
    }),
    ...(n.status && {
      status: n.status,
    }),
    ...(n.serverMessage !== void 0 && {
      server_message: n.serverMessage,
    }),
    ...(n.serverErrorCode !== void 0 && {
      server_error_code: n.serverErrorCode,
    }),
    ...(n.serverErrorType !== void 0 && {
      server_error_type: n.serverErrorType,
    }),
  });
}
function mfe(e, t, n) {
  let r = gfe[e].push,
    o = gfe[e].conflict,
    s = e === "team" ? "team_memory" : "personal_memory";
  if (n.success) {
    if ((xe(r), n.conflict)) xe(o);
  } else
    switch (n.errorType) {
      case "no_oauth":
        It(r, `${s}_push_no_oauth`);
        break;
      case "auth":
        Le(r, `${s}_push_auth`);
        break;
      case "forbidden":
        It(r, `${s}_push_forbidden`);
        break;
      case "timeout":
        Le(r, `${s}_push_timeout`);
        break;
      case "network":
        Le(r, `${s}_push_network`);
        break;
      case "aborted":
        It(r, `${s}_push_aborted`);
        break;
      case "server_unavailable":
        It(r, `${s}_push_server_unavailable`);
        break;
      case "conflict":
        (Le(r, `${s}_push_conflict_exhausted`), Le(o, `${s}_conflict_exhausted`));
        break;
      default:
        Le(r, `${s}_push_unknown`);
    }
  if (e !== "team") return;
  G("tengu_team_mem_sync_push", {
    success: n.success,
    files_uploaded: n.filesUploaded ?? 0,
    conflict: n.conflict ?? false,
    conflict_retries: n.conflictRetries ?? 0,
    duration_ms: Date.now() - t,
    ...(n.filesSoftDeleted && {
      files_soft_deleted: n.filesSoftDeleted,
    }),
    ...(n.errorType && {
      errorType: n.errorType,
    }),
    ...(n.status && {
      status: n.status,
    }),
    ...(n.putBatches && {
      put_batches: n.putBatches,
    }),
    ...(n.errorCode && {
      error_code: n.errorCode,
    }),
    ...(n.serverMaxEntries !== void 0 && {
      server_max_entries: n.serverMaxEntries,
    }),
    ...(n.serverReceivedEntries !== void 0 && {
      server_received_entries: n.serverReceivedEntries,
    }),
    ...(n.serverErrorCode !== void 0 && {
      server_error_code: n.serverErrorCode,
    }),
    ...(n.serverMessage !== void 0 && {
      server_message: n.serverMessage,
    }),
    ...(n.serverErrorType !== void 0 && {
      server_error_type: n.serverErrorType,
    }),
  });
}
var bwl,
  VF,
  vze,
  ODo = 30000,
  Tze = 250000,
  mAf = 200000,
  MDo = 3,
  PJn = 2,
  gfe,
  _wl = 256,
  TAf = "team_memory_feature_unavailable";
