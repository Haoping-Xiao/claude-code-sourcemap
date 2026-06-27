// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z8r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z8r = Q(pst => {
  Object.defineProperty(pst, "__esModule", {
    value: !0
  });
  pst.defaultTextMapSetter = pst.defaultTextMapGetter = void 0;
  pst.defaultTextMapGetter = {
    get(e, t) {
      if (e == null) return;
      return e[t];
    },
    keys(e) {
      if (e == null) return [];
      return Object.keys(e);
    }
  };
  pst.defaultTextMapSetter = {
    set(e, t, n) {
      if (e == null) return;
      e[t] = n;
    }
  };
});