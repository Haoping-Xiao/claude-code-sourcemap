// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cta
// matched 2.1.88 source: node_modules/commander/lib/command.js
// class=new  jaccard=0.0088  score=0.5606  fileCov=0.0089
// note: nearest: node_modules/commander/lib/command.js (0.0088); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cta = E(() => {
  j$n = class j$n {
    _name;
    _aliases;
    constructor(e = "") {
      this._name = e, this._aliases = new Map();
    }
    static ROOT = new j$n();
    name() {
      return this._name;
    }
    aliases() {
      return this._aliases;
    }
    resolveCandidateNames(e) {
      if (e.startsWith(".")) {
        let o = e.substring(1),
          s = this.findAlias(o);
        if (s !== void 0) return [s];
        return [o];
      }
      let t = this.findAlias(e);
      if (t !== void 0) return [t];
      if (this.name() === "") return [e];
      let n = this.name(),
        r = [n + "." + e];
      for (let o = n.lastIndexOf("."); o >= 0; o = n.lastIndexOf(".")) n = n.substring(0, o), r.push(n + "." + e);
      return r.push(e), r;
    }
    findAlias(e) {
      let t = e,
        n = "",
        r = e.indexOf(".");
      if (r >= 0) t = e.substring(0, r), n = e.substring(r);
      let o = this._aliases.get(t);
      if (o === void 0) return;
      return o + n;
    }
  };
});
function Zno(...e) {
  return Rno(rtp, ...e);
}
var rtp;