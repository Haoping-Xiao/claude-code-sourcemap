// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zOt
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/googleauth.js
// class=new  jaccard=0.0364  score=0.4973  fileCov=0.0378
// note: nearest: node_modules/google-auth-library/build/src/auth/googleauth.js (0.0364); dir inferred from dep-graph -> services; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: vertexAuthFetch, buildVertexGoogleAuth
var avi = {};
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