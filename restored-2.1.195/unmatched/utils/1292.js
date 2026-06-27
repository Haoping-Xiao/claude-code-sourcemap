// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xnt
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0137  score=0.1818  fileCov=0.0146
// note: nearest: src/utils/sessionStorage.ts (0.0137); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xnt] deps: Qi, At
D7s = require("fs"), q2e = require("path"), Ild = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"], _9 = Cn(() => {
  let e = KSn(),
    t = process.env.ANTHROPIC_PROFILE?.trim();
  if (t) {
    if (e === null) return null;
    let n = TUr(e, t);
    return n === "oidc_federation" || n === "user_oauth" ? "profile-explicit" : null;
  }
  if (Ild.every(n => process.env[n]?.trim())) return "env-quad";
  if (e !== null) {
    let n = TUr(e, zSn(e));
    if (n === "oidc_federation" || n === "user_oauth") return "profile-implicit";
  }
  return null;
});
V2e = Cn(() => {
  let e = _9();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let t = KSn();
  if (t === null) return null;
  let n = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : zSn(t),
    r = TUr(t, n);
  return r === "oidc_federation" || r === "user_oauth" ? r : null;
}), xld = Cn(() => {
  let e = _9();
  if (e === null || e === "env-quad") return;
  let t = KSn();
  if (t === null) return;
  let n = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : zSn(t),
    r = oPt(P7s(t, n));
  if (r === null) return;
  try {
    let o = JSON.parse(r);
    return {
      organizationUuid: o.organization_uuid,
      organizationName: o.organization_name,
      accountEmail: o.account_email,
      workspaceName: o.workspace_name
    };
  } catch {
    return;
  }
});
class O7s {
  read(e) {
    return uI.readFile(e, "utf8");
  }
  readBytes(e) {
    return uI.readFile(e);
  }
  write(e, t, n) {
    return uI.writeFile(e, t, {
      encoding: "utf8",
      mode: n
    });
  }
  async mkdir(e) {
    try {
      await uI.mkdir(e, {
        recursive: true
      });
    } catch (t) {
      if (on(t) !== "EEXIST") throw t;
    }
  }
  atomicWrite(e, t, n) {
    return eg(e, t, n);
  }
  delete(e) {
    return uI.unlink(e);
  }
  list(e) {
    return uI.readdir(e);
  }
  append(e, t, n) {
    return uI.appendFile(e, t, {
      encoding: "utf8",
      mode: n
    });
  }
  writeExclusive(e, t, n) {
    return uI.writeFile(e, t, {
      encoding: "utf8",
      flag: "wx",
      mode: n
    });
  }
  writeBytes(e, t) {
    return uI.writeFile(e, t);
  }
  copy(e, t) {
    return uI.copyFile(e, t);
  }
  async stat(e) {
    return {
      mtimeMs: (await uI.stat(e)).mtimeMs
    };
  }
  async listEntries(e) {
    return (await uI.readdir(e, {
      withFileTypes: true
    })).map(n => ({
      name: n.name,
      isDirectory: n.isDirectory(),
      isFile: n.isFile()
    }));
  }
  async readRange(e, t, n) {
    vUr("readRange", "offset", t), vUr("readRange", "length", n);
    let r = await uI.open(e, "r");
    try {
      return await M7s(r, t, n);
    } finally {
      await r.close();
    }
  }
  async readTail(e, t) {
    vUr("readTail", "maxBytes", t);
    let n = await uI.open(e, "r");
    try {
      let {
          size: r
        } = await n.stat(),
        o = Math.min(t, r);
      return await M7s(n, r - o, o);
    } finally {
      await n.close();
    }
  }
}
function vUr(e, t, n) {
  if (!Number.isInteger(n) || n < 0) throw RangeError(`${e}: ${t} must be a non-negative integer, got ${n}`);
}
async function M7s(e, t, n) {
  if (n === 0) return Buffer.alloc(0);
  let r = Buffer.alloc(n),
    o = 0;
  while (o < n) {
    let {
      bytesRead: s
    } = await e.read(r, o, n - o, t + o);
    if (s === 0) break;
    o += s;
  }
  return o === n ? r : Buffer.from(r.subarray(0, o));
}
function qs() {
  return kld.getStore() ?? new O7s();
}
var $7s, uI, kld;