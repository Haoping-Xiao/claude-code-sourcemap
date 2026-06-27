// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E8n
// matched 2.1.88 source: src/utils/teleport/gitBundle.ts
// class=modified  jaccard=0.4668  score=0.593  fileCov=0.6869
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module E8n] deps: Hp, TM, Lo, je, At, Ls, dn, kt, GY
((xZa = require("crypto")),
  (Tht = R(require("fs/promises"))),
  (K5 = R(require("path"))),
  (kZa = `${h2r.header},${qIe.header}`));
s8e = class s8e extends Error {
  constructor(e) {
    super(e);
    this.name = "UploadNonRetriableError";
  }
};
function NZa() {
  return at("tengu_ccr_bundle_max_bytes", null) ?? DQp;
}
async function BZa(e, t) {
  let n = await Gr(go(), ["count-objects", "-v"], {
    cwd: e,
    abortSignal: t,
  });
  if (n.code !== 0)
    return {
      sizeBytes: null,
      inPackCount: null,
    };
  let r = n.stdout.match(/^size-pack:\s*(\d+)/m),
    o = n.stdout.match(/^in-pack:\s*(\d+)/m);
  return {
    sizeBytes: r ? Number(r[1]) * 1024 : null,
    inPackCount: o ? Number(o[1]) : null,
  };
}
async function UZa(e) {
  let t = Tu(e?.cwd ?? $t());
  if (!t)
    return {
      tooLarge: false,
      sizeBytes: null,
      inPackCount: null,
    };
  let { sizeBytes: n, inPackCount: r } = await BZa(t, e?.signal);
  if (n === null)
    return {
      tooLarge: false,
      sizeBytes: null,
      inPackCount: r,
    };
  let o = NZa();
  return {
    tooLarge: n > 3 * o && (n > 100 * o || (r !== null && r > 5000000)),
    sizeBytes: n,
    inPackCount: r,
  };
}
async function _bundleWithFallback(gitRoot, bundlePath, maxBytes, hasStash, signal, s) {
  let i = hasStash ? ["refs/seed/stash"] : [],
    a = (_) =>
      Gr(go(), ["bundle", "create", bundlePath, _, ...i], {
        cwd: gitRoot,
        abortSignal: signal,
      }),
    { sizeBytes: l, inPackCount: c } = await BZa(gitRoot, signal),
    u = l !== null && l > maxBytes,
    d = l !== null && l > 3 * maxBytes,
    p = d && ((l !== null && l > 100 * maxBytes) || (c !== null && c > 5000000));
  if (u)
    T(
      `[gitBundle] size-pack ${(l / 1024 / 1024).toFixed(0)}MB > ${(maxBytes / 1024 / 1024).toFixed(0)}MB cap; skipping --all${d ? " and HEAD" : ""}${p ? " and squashed" : ""}`,
    );
  if (!u) {
    let _ = await a("--all");
    if (_.code !== 0)
      return {
        ok: false,
        error: `git bundle create --all failed (${_.code}): ${_.stderr.slice(0, 200)}`,
        failReason: "git_error",
      };
    let { size: S } = await vht.stat(bundlePath);
    if (S <= maxBytes)
      return {
        ok: true,
        size: S,
        scope: "all",
      };
    T(
      `[gitBundle] --all bundle is ${(S / 1024 / 1024).toFixed(1)}MB (> ${(maxBytes / 1024 / 1024).toFixed(0)}MB), retrying HEAD-only`,
    );
  }
  if (!d) {
    let _ = await a("HEAD");
    if (_.code !== 0)
      return {
        ok: false,
        error: `git bundle create HEAD failed (${_.code}): ${_.stderr.slice(0, 200)}`,
        failReason: "git_error",
      };
    let { size: S } = await vht.stat(bundlePath);
    if (S <= maxBytes)
      return {
        ok: true,
        size: S,
        scope: "head",
      };
    T(`[gitBundle] HEAD bundle is ${(S / 1024 / 1024).toFixed(1)}MB, retrying squashed-root`);
  }
  if (p)
    return {
      ok: false,
      error: "Repo is too large to bundle. Please setup GitHub on https://claude.ai/code",
      failReason: "too_large",
    };
  let f = hasStash ? "refs/seed/stash^{tree}" : "HEAD^{tree}",
    m = [];
  if (s) {
    let [_, S] = await Promise.all(
      [f, `${s}^{tree}`].map((v) =>
        Gr(go(), ["rev-parse", v], {
          cwd: gitRoot,
          abortSignal: signal,
        }),
      ),
    );
    if (_?.code === 0 && _.stdout.trim() === S?.stdout.trim())
      return {
        ok: false,
        error:
          "It doesn't look like you have any new commits or changes to review. Stage or commit them first?",
        failReason: "no_changes",
      };
    let A = await Gr(go(), ["commit-tree", `${s}^{tree}`, "-m", "seed-base"], {
      cwd: gitRoot,
      abortSignal: signal,
    });
    if (A.code === 0) m = ["-p", A.stdout.trim()];
    else
      T(
        `[gitBundle] baseRef commit-tree failed (${A.code}), squashing without parent: ${A.stderr.slice(0, 200)}`,
      );
  }
  let g = await Gr(go(), ["commit-tree", f, ...m, "-m", "seed"], {
    cwd: gitRoot,
    abortSignal: signal,
  });
  if (g.code !== 0)
    return {
      ok: false,
      error: `git commit-tree failed (${g.code}): ${g.stderr.slice(0, 200)}`,
      failReason: "git_error",
    };
  let h = g.stdout.trim();
  await Gr(go(), ["update-ref", "refs/seed/root", h], {
    cwd: gitRoot,
  });
  let y = await Gr(go(), ["bundle", "create", bundlePath, "refs/seed/root"], {
    cwd: gitRoot,
    abortSignal: signal,
  });
  if (y.code !== 0)
    return {
      ok: false,
      error: `git bundle create refs/seed/root failed (${y.code}): ${y.stderr.slice(0, 200)}`,
      failReason: "git_error",
    };
  let { size: b } = await vht.stat(bundlePath);
  if (b <= maxBytes)
    return {
      ok: true,
      size: b,
      scope: "squashed",
    };
  return {
    ok: false,
    error: "Repo is too large to bundle. Please setup GitHub on https://claude.ai/code",
    failReason: "too_large",
  };
}
async function createAndUploadGitBundle(config, opts) {
  let n = opts?.cwd ?? $t(),
    r = Tu(n);
  if (!r)
    return (
      Le("teleport_git_bundle_upload", "empty_repo"),
      {
        success: false,
        error: "Not in a git repository",
      }
    );
  for (let c of ["refs/seed/stash", "refs/seed/root"])
    await Gr(go(), ["update-ref", "-d", c], {
      cwd: r,
    });
  let o = await Gr(go(), ["for-each-ref", "--count=1", "refs/"], {
    cwd: r,
  });
  if (o.code === 0 && o.stdout.trim() === "")
    return (
      G("tengu_ccr_bundle_upload", {
        outcome: We("empty_repo"),
      }),
      Le("teleport_git_bundle_upload", "empty_repo"),
      {
        success: false,
        error: "Repository has no commits yet",
        failReason: "empty_repo",
      }
    );
  let s = await Gr(go(), ["stash", "create"], {
      cwd: r,
      abortSignal: opts?.signal,
    }),
    i = s.code === 0 ? s.stdout.trim() : "",
    a = i !== "";
  if (s.code !== 0 && s.stderr.trim() === "")
    T(
      `[gitBundle] git stash create exited ${s.code} with no output \u2014 treating as no uncommitted changes`,
    );
  else if (s.code !== 0) {
    if (
      (T(`[gitBundle] git stash create failed (${s.code}): ${s.stderr.slice(0, 200)}`),
      (
        await Gr(go(), ["rev-parse", "--verify", "HEAD"], {
          cwd: r,
        })
      ).code === 0)
    )
      return (
        G("tengu_ccr_bundle_upload", {
          outcome: We("stash_failed"),
        }),
        Le("teleport_git_bundle_upload", "stash_failed"),
        {
          success: false,
          error: `Could not capture uncommitted changes (git stash create: ${Gd(s.stderr.trim())}). Run \`git add .\` or commit, then retry.`,
          failReason: "stash_failed",
        }
      );
  } else if (a)
    (T(`[gitBundle] Captured WIP as stash ${i}`),
      await Gr(go(), ["update-ref", "refs/seed/stash", i], {
        cwd: r,
      }));
  let l = Jst("ccr-seed", ".bundle");
  try {
    let c = NZa(),
      u = await _bundleWithFallback(r, l, c, a, opts?.signal, opts?.baseRef);
    if (!u.ok)
      return (
        T(`[gitBundle] ${u.error}`),
        G("tengu_ccr_bundle_upload", {
          outcome: $e(u.failReason),
          max_bytes: c,
        }),
        Le("teleport_git_bundle_upload", u.failReason),
        {
          success: false,
          error: u.error,
          failReason: u.failReason,
        }
      );
    let d = await $Za(l, "_source_seed.bundle", config, {
      signal: opts?.signal,
    });
    if (!d.success)
      return (
        G("tengu_ccr_bundle_upload", {
          outcome: We("failed"),
        }),
        Le("teleport_git_bundle_upload", "upload_failed"),
        {
          success: false,
          error: d.error,
        }
      );
    if (
      (T(`[gitBundle] Uploaded ${d.size} bytes as file_id ${d.fileId}`),
      G("tengu_ccr_bundle_upload", {
        outcome: We("success"),
        size_bytes: d.size,
        scope: $e(u.scope),
        has_wip: a,
      }),
      u.scope === "head")
    )
      It("teleport_git_bundle_upload", "fallback_head");
    else if (u.scope === "squashed") It("teleport_git_bundle_upload", "fallback_squashed");
    else xe("teleport_git_bundle_upload");
    return {
      success: true,
      fileId: d.fileId,
      bundleSizeBytes: d.size,
      scope: u.scope,
      hasWip: a,
    };
  } finally {
    try {
      await vht.unlink(l);
    } catch {
      T(`[gitBundle] Could not delete ${l} (non-fatal)`);
    }
    for (let c of ["refs/seed/stash", "refs/seed/root"])
      await Gr(go(), ["update-ref", "-d", c], {
        cwd: r,
      });
  }
}
var vht,
  DQp = 104857600;
