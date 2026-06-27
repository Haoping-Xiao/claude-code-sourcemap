// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nSs
// matched 2.1.88 source: node_modules/lodash.camelcase/index.js
// class=new  jaccard=0.014  score=1  fileCov=0.014
// note: nearest: node_modules/lodash.camelcase/index.js (0.014); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nSs = E(() => {
  ARu = bRu + SRu + ERu, Vbs = HRu + TRu + vRu + wRu, Nbs = "[" + Vbs + "]", IRu = "[" + ARu + "]", xRu = "[" + Gbs + "]", Ybs = "[" + Wbs + "]", Xbs = "[^" + jbs + Vbs + Kbs + Gbs + Wbs + qbs + "]", RRu = "(?:" + IRu + "|" + kRu + ")", LRu = "[^" + jbs + "]", PZe = "[" + qbs + "]", Bbs = "(?:" + Ybs + "|" + Xbs + ")", PRu = "(?:" + PZe + "|" + Xbs + ")", Ubs = "(?:" + zbs + "(?:d|ll|m|re|s|t|ve))?", Fbs = "(?:" + zbs + "(?:D|LL|M|RE|S|T|VE))?", Zbs = RRu + "?", eSs = "[" + CRu + "]?", MRu = "(?:" + DRu + "(?:" + [LRu, Jbs, Qbs].join("|") + ")" + eSs + Zbs + ")*", NRu = eSs + Zbs + MRu, BRu = "(?:" + [xRu, Jbs, Qbs].join("|") + ")" + NRu, URu = RegExp([PZe + "?" + Ybs + "+" + Ubs + "(?=" + [Nbs, PZe, "$"].join("|") + ")", PRu + "+" + Fbs + "(?=" + [Nbs, PZe + Bbs, "$"].join("|") + ")", PZe + "?" + Bbs + "+" + Ubs, PZe + "+" + Fbs, ORu, $Ru, Kbs, BRu].join("|"), "g");
  tSs = FRu;
});
function jRu(e, t, n) {
  if (e = Bie(e), t = n ? void 0 : t, t === void 0) return $bs(e) ? tSs(e) : Pbs(e);
  return e.match(t) || [];
}
var rSs;