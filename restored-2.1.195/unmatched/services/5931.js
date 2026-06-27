// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gJo
// matched 2.1.88 source: node_modules/eventsource/dist/index.js
// class=new  jaccard=0.0444  score=0.4934  fileCov=0.0465
// note: nearest: node_modules/eventsource/dist/index.js (0.0444); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ODm = async (e, t, n) => {
    let r,
      o,
      s = false;
    if (typeof AbortController === "function") r = new AbortController(), o = setTimeout(() => {
      s = true, r.abort();
    }, t);
    let i = await fetch(e.href, {
      signal: r ? r.signal : void 0,
      redirect: "manual",
      headers: n.headers
    }).catch(a => {
      if (s) throw new Wmr();
      throw a;
    });
    if (o !== void 0) clearTimeout(o);
    if (i.status !== 200) throw new oD("Expected 200 OK from the JSON Web Key Set HTTP response");
    try {
      return await i.json();
    } catch (a) {
      throw new oD("Failed to parse the JSON Web Key Set HTTP response as JSON");
    }
  },
  fjc;