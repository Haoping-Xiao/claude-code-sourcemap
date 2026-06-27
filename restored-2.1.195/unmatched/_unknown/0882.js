// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BPs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BPs = Q(lMr => {
  Object.defineProperty(lMr, "__esModule", {
    value: true
  });
  lMr.parseXML = B3u;
  var N3u = NPs(),
    aMr = new N3u.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (e, t) => t.trim() === "" && t.includes(`
`) ? "" : void 0
    });
  aMr.addEntity("#xD", "\r");
  aMr.addEntity("#10", `
`);
  function B3u(e) {
    return aMr.parse(e, true);
  }
});