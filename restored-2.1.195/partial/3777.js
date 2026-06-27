// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P9a
// matched 2.1.88 source: node_modules/@opentelemetry/resources/build/src/detectors/EnvDetector.js
// class=partial  jaccard=0.1677  score=0.266  fileCov=0.3124
// note: low-confidence suggestion: node_modules/@opentelemetry/resources/build/src/detectors/EnvDetector.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P9a = Q(Eqn => {
  Object.defineProperty(Eqn, "__esModule", {
    value: !0
  });
  Eqn.envDetector = void 0;
  var a8p = qi(),
    l8p = Bte(),
    L9a = soe();
  class D9a {
    _MAX_LENGTH = 255;
    _COMMA_SEPARATOR = ",";
    _LABEL_KEY_VALUE_SPLITTER = "=";
    detect(e) {
      let t = {},
        n = (0, L9a.getStringFromEnv)("OTEL_RESOURCE_ATTRIBUTES"),
        r = (0, L9a.getStringFromEnv)("OTEL_SERVICE_NAME");
      if (n) try {
        let o = this._parseResourceAttributes(n);
        Object.assign(t, o);
      } catch (o) {
        a8p.diag.debug(`EnvDetector failed: ${o instanceof Error ? o.message : o}`);
      }
      if (r) t[l8p.ATTR_SERVICE_NAME] = r;
      return {
        attributes: t
      };
    }
    _parseResourceAttributes(e) {
      if (!e) return {};
      let t = {},
        n = e.split(this._COMMA_SEPARATOR).filter(r => r.trim() !== "");
      for (let r of n) {
        let o = r.split(this._LABEL_KEY_VALUE_SPLITTER);
        if (o.length !== 2) throw Error(`Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${r}". Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`);
        let [s, i] = o,
          a = s.trim(),
          l = i.trim();
        if (a.length === 0) throw Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${r}".`);
        let c, u;
        try {
          c = decodeURIComponent(a), u = decodeURIComponent(l);
        } catch (d) {
          throw Error(`Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${r}": ${d instanceof Error ? d.message : d}`);
        }
        if (c.length > this._MAX_LENGTH) throw Error(`Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${c}".`);
        if (u.length > this._MAX_LENGTH) throw Error(`Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${c}".`);
        t[c] = u;
      }
      return t;
    }
  }
  Eqn.envDetector = new D9a();
});