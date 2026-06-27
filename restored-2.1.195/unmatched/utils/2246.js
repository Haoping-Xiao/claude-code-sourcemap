// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WKr
// matched 2.1.88 source: src/services/teamMemorySync/index.ts
// class=new  jaccard=0.0238  score=0.0802  fileCov=0.0328
// note: nearest: src/services/teamMemorySync/index.ts (0.0238); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WKr = E(() => {
  D_e = class D_e extends Error {
    path;
    expected;
    actual;
    existingId;
    constructor(e, t, n, r) {
      super(`conflict on ${e}: expected ${t ?? "<none>"}, actual ${n ?? "<unknown>"}`);
      this.path = e;
      this.expected = t;
      this.actual = n;
      this.existingId = r;
      this.name = "ConflictError";
    }
  };
  _ce = class _ce extends Error {
    path;
    constructor(e) {
      super(`not found: ${e}`);
      this.path = e;
      this.name = "NotFoundError";
    }
  };
  M3e = class M3e extends Error {
    cause;
    constructor(e, t) {
      super(e);
      this.cause = t;
      this.name = "UnavailableError";
    }
  };
  $j = class $j extends Error {
    reason;
    constructor(e, t) {
      super(t ?? `permanent: ${e}`);
      this.reason = e;
      this.name = "PermanentError";
    }
  };
});
function $3e(e) {
  return (e.startsWith("/") ? e : "/" + e).replace(/\/{2,}/g, "/");
}
function HNi(e) {
  let t = Object.entries(e).map(([n, r]) => `${encodeURIComponent(n)}=${encodeURIComponent(String(r))}`);
  return t.length ? "?" + t.join("&") : "";
}
function aNd(e) {
  return typeof e === "object" && e !== null && Symbol.asyncIterator in e;
}
function TNi(e) {
  if (typeof e === "object" && e !== null && "destroy" in e && typeof e.destroy === "function") e.destroy();
}
function ait(e, t, n) {
  if (e === 429 || e >= 500) throw new M3e(`${t}: HTTP ${e}`);
  let r = n && typeof n === "object" && "message" in n ? ` (${String(n.message)})` : "";
  throw new $j(`http_${e}`, `${t}: HTTP ${e}${r}`);
}
function lit(e, t) {
  if (e.reason === "no-auth") throw new $j("no_oauth", `${t}: ${e.detail}`);
  throw new M3e(`${t}: ${e.reason}`);
}
class o0n {
  mode;
  label;
  partitionId;
  listBase;
  exportBase;
  reqOpts;
  constructor(e) {
    this.mode = e.mode, this.label = e.mount;
    let t = e.path.replace(/\/+$/, "");
    this.partitionId = t, this.listBase = t + nNd, this.exportBase = t + rNd, this.reqOpts = {
      timeout: eNd,
      validateStatus: () => true,
      auth: XS() ? "session-jwt" : void 0
    };
  }
  entryPath(e) {
    return `${this.listBase}/${encodeURIComponent(e)}`;
  }
  assertWritable(e) {
    if (this.mode === "ro") throw Error(`MemoryServiceBackend[${this.label}]: ${e} refused on read-only mount`);
  }
  async list(e) {
    let t = [],
      n;
    for (let r = 0;; r++) {
      if (r >= ENi) throw new $j("list_page_limit", `list ${this.label}: exceeded ${ENi} pages (stuck next_page cursor?)`);
      let o = {
        limit: tNd
      };
      if (e !== void 0) o.path_prefix = $3e(e);
      if (n) o.page = n;
      let s = await Os.get(`${this.listBase}${HNi(o)}`, this.reqOpts);
      if (!s.ok) lit(s, `list ${this.label}`);
      if (s.status === 404) {
        if (n === void 0) return T(`memory-backend[${this.label}]: list 404 (store not provisioned) \u2014 treating as empty`, {
          level: "debug"
        }), [];
        throw new M3e(`list ${this.label}: 404 on page ${r} (cursor expired or store deleted mid-walk)`);
      }
      if (s.status >= 400) ait(s.status, `list ${this.label}`, s.data);
      let i = oNd().safeParse(s.data);
      if (!i.success) throw new $j("malformed_response", `list ${this.label}: malformed response: ${i.error.message}`);
      for (let a of i.data.data) {
        if (a.type !== "memory" && a.type !== "memory_metadata") continue;
        let l = qKr().safeParse(a);
        if (!l.success) throw new $j("malformed_response", `list ${this.label}: malformed memory item: ${l.error.message}`);
        t.push({
          id: l.data.id,
          path: $3e(l.data.path),
          sha256: l.data.content_sha256,
          sizeBytes: l.data.content_size_bytes
        });
      }
      if (n = i.data.next_page ?? void 0, !n) break;
    }
    return t;
  }
  async readByPath(e) {
    let t = $3e(e),
      r = (await this.list(t)).find(o => o.path === t);
    if (!r) return null;
    return this.read(r.id);
  }
  async exportAll() {
    let e = `export ${this.label}`,
      t = await Os.get(this.exportBase, {
        ...this.reqOpts,
        responseType: "stream"
      });
    if (!t.ok) lit(t, e);
    if (t.status >= 400) {
      if (TNi(t.data), t.status === 404) throw new _ce(this.label);
      ait(t.status, e, void 0);
    }
    if (!aNd(t.data)) throw new $j("malformed_response", `${e}: response is not a stream`);
    let n = t.data;
    return {
      stream: n,
      destroy: () => TNi(n)
    };
  }
  async read(e) {
    let t = `read ${this.label}:${e}`,
      n = await Os.get(this.entryPath(e), this.reqOpts);
    if (!n.ok) lit(n, t);
    if (n.status === 404) throw new _ce(e);
    if (n.status >= 400) ait(n.status, t, n.data);
    let r = sNd().safeParse(n.data);
    if (!r.success) throw new $j("malformed_response", `${t}: malformed response: ${r.error.message}`);
    return {
      content: r.data.content,
      sha256: r.data.content_sha256
    };
  }
  async create(e, t) {
    this.assertWritable("create");
    let n = $3e(e),
      r = `create ${this.label}:${n}`,
      o = await Os.post(this.listBase, {
        path: n,
        content: t
      }, this.reqOpts);
    if (!o.ok) lit(o, r);
    if (o.status === 409) {
      let i = iNd().safeParse(o.data),
        a = i.success ? i.data.error : void 0,
        l = a?.conflicting_memory_id && a.conflicting_path !== void 0 && $3e(a.conflicting_path) === n ? a.conflicting_memory_id : void 0;
      throw new D_e(n, null, void 0, l);
    }
    if (o.status >= 400) ait(o.status, r, o.data);
    let s = ANi().safeParse(o.data);
    if (!s.success) throw new $j("malformed_response", `${r}: malformed response: ${s.error.message}`);
    return {
      id: s.data.id,
      sha256: s.data.content_sha256
    };
  }
  async update(e, t, n) {
    this.assertWritable("update");
    let r = `update ${this.label}:${e}`,
      o = {
        content: t
      };
    if (n !== null) o.precondition = {
      type: "content_sha256",
      content_sha256: n
    };
    let s = await Os.post(this.entryPath(e), o, this.reqOpts);
    if (!s.ok) lit(s, r);
    if (s.status === 404) throw new _ce(e);
    if (s.status === 409) throw new D_e(e, n, void 0);
    if (s.status >= 400) ait(s.status, r, s.data);
    let i = ANi().safeParse(s.data);
    if (!i.success) throw new $j("malformed_response", `${r}: malformed response: ${i.error.message}`);
    return {
      id: i.data.id,
      sha256: i.data.content_sha256
    };
  }
  async delete(e, t) {
    this.assertWritable("delete");
    let n = `delete ${this.label}:${e}`,
      r = {};
    if (t !== null) r.expected_content_sha256 = t;
    let o = await Os.delete(`${this.entryPath(e)}${HNi(r)}`, this.reqOpts);
    if (!o.ok) lit(o, n);
    if (o.status === 404) {
      if (t !== null) throw new _ce(e);
      return;
    }
    if (o.status === 409) throw new D_e(e, t, void 0);
    if (o.status >= 400) ait(o.status, n, o.data);
  }
}
function s0n(e) {
  return e.map(t => new o0n(t));
}
var eNd = 30000,
  tNd = 100,
  ENi = 50,
  nNd = "/memories",
  rNd = "/memories/export",
  vNi,
  qKr,
  oNd,
  sNd,
  ANi,
  iNd;