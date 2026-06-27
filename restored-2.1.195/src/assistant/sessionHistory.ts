// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wen
// matched 2.1.88 source: src/assistant/sessionHistory.ts
// class=modified  jaccard=0.2213  score=0.3982  fileCov=0.3325
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function qdr(e) {
  let { accessToken: t } = await Lj();
  return {
    sessionUrl: `${$s().BASE_API_URL}/v1/code/sessions/${e}`,
    headers: aH(t),
  };
}
async function Gbc(e, t, n) {
  let r = await po
    .get(`${e.sessionUrl}/events`, {
      headers: e.headers,
      params: t,
      timeout: 15000,
      validateStatus: () => true,
    })
    .catch(() => null);
  if (!r || r.status !== 200) return (T(`[${n}] HTTP ${r?.status ?? "error"}`), null);
  let o = Array.isArray(r.data.data) ? r.data.data : [],
    s = [];
  for (let a = o.length - 1; a >= 0; a--) {
    let l = o[a];
    if (l?.payload) {
      let c = l.sequence_num === void 0 ? void 0 : parseInt(String(l.sequence_num), 10);
      s.push({
        payload: l.payload,
        createdAt: l.created_at,
        source: l.source,
        sequenceNum: c !== void 0 && !isNaN(c) ? c : void 0,
      });
    }
  }
  let i = r.data.next_cursor ?? null;
  return {
    events: s,
    firstId: i,
    hasMore: i !== null,
  };
}
async function fetchLatestEvents(e, t = Wdr, n) {
  let r = await Gbc(
    e,
    {
      limit: t,
      sort_order: "desc",
    },
    "fetchLatestEvents",
  );
  if (n?.reportFeatureHealth !== false)
    if (r === null) Le("assistant_history_load", "http_error");
    else xe("assistant_history_load");
  return r;
}
async function fetchOlderEvents(e, t, n = Wdr) {
  return Gbc(
    e,
    {
      limit: n,
      sort_order: "desc",
      cursor: t,
    },
    "fetchOlderEvents",
  );
}
var Wdr = 100;
