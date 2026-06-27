// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zOt
// class=new  (no 2.1.88 match)
// note: 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var zOt = E(() => {
  S9r();
  S9r();
});
var avi = {};
_t(avi, {
  vertexAuthFetch: () => vertexAuthFetch,
  buildVertexGoogleAuth: () => buildVertexGoogleAuth
});
async function buildVertexGoogleAuth(e, t) {
  if (e.kind === "skip") return {
    getClient: () => ({
      getRequestHeaders: async () => new Headers()
    })
  };
  let {
    GoogleAuth: n
  } = await Promise.resolve().then(() => R(qOt(), 1));
  return new n({
    scopes: kkd,
    ...(e.kind === "keyFile" && {
      keyFilename: e.path
    }),
    ...(t && {
      projectId: t
    }),
    clientOptions: {
      transporterOptions: {
        fetchImplementation: vertexAuthFetch
      }
    }
  });
}
async function vertexAuthFetch(e, t) {
  let n = t?.agent?.options;
  if (!n?.cert && !n?.key) return fetch(e, t);
  let r = {
    cert: n.cert,
    key: n.key,
    ...(n.ca && {
      ca: n.ca
    })
  };
  return fetch(e, {
    ...t,
    tls: r
  });
}
var kkd;