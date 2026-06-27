// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ior
// matched 2.1.88 source: node_modules/fuse.js/dist/fuse.mjs
// class=partial  jaccard=0.1592  score=0.2871  fileCov=0.2633
// note: low-confidence suggestion: node_modules/fuse.js/dist/fuse.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ior = E(() => {
  sWl = Object.prototype.hasOwnProperty;
  gjf = {
    includeMatches: !1,
    findAllMatches: !1,
    minMatchCharLength: 1
  }, hjf = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
  }, yjf = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, _jf = {
    useExtendedSearch: !1,
    getFn: mjf,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1
  }, Gp = {
    ...hjf,
    ...gjf,
    ...yjf,
    ..._jf
  }, bjf = /[^ ]+/g;
  hWl = class hWl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(e) {
      let t = e === this.pattern;
      return {
        isMatch: t,
        score: t ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  yWl = class yWl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(e) {
      let n = e.indexOf(this.pattern) === -1;
      return {
        isMatch: n,
        score: n ? 0 : 1,
        indices: [0, e.length - 1]
      };
    }
  };
  _Wl = class _Wl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(e) {
      let t = e.startsWith(this.pattern);
      return {
        isMatch: t,
        score: t ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  bWl = class bWl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(e) {
      let t = !e.startsWith(this.pattern);
      return {
        isMatch: t,
        score: t ? 0 : 1,
        indices: [0, e.length - 1]
      };
    }
  };
  SWl = class SWl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(e) {
      let t = e.endsWith(this.pattern);
      return {
        isMatch: t,
        score: t ? 0 : 1,
        indices: [e.length - this.pattern.length, e.length - 1]
      };
    }
  };
  EWl = class EWl extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(e) {
      let t = !e.endsWith(this.pattern);
      return {
        isMatch: t,
        score: t ? 0 : 1,
        indices: [0, e.length - 1]
      };
    }
  };
  MFo = class MFo extends UHe {
    constructor(e, {
      location: t = Gp.location,
      threshold: n = Gp.threshold,
      distance: r = Gp.distance,
      includeMatches: o = Gp.includeMatches,
      findAllMatches: s = Gp.findAllMatches,
      minMatchCharLength: i = Gp.minMatchCharLength,
      isCaseSensitive: a = Gp.isCaseSensitive,
      ignoreLocation: l = Gp.ignoreLocation
    } = {}) {
      super(e);
      this._bitapSearch = new PFo(e, {
        location: t,
        threshold: n,
        distance: r,
        includeMatches: o,
        findAllMatches: s,
        minMatchCharLength: i,
        isCaseSensitive: a,
        ignoreLocation: l
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(e) {
      return this._bitapSearch.searchIn(e);
    }
  };
  $Fo = class $Fo extends UHe {
    constructor(e) {
      super(e);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(e) {
      let t = 0,
        n,
        r = [],
        o = this.pattern.length;
      while ((n = e.indexOf(this.pattern, t)) > -1) t = n + o, r.push([n, t - 1]);
      let s = !!r.length;
      return {
        isMatch: s,
        score: s ? 0 : 1,
        indices: r
      };
    }
  };
  xFo = [hWl, $Fo, _Wl, bWl, EWl, SWl, yWl, MFo], lWl = xFo.length, vjf = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  Ijf = new Set([MFo.type, $Fo.type]);
  kFo = [];
  oor = {
    AND: "$and",
    OR: "$or"
  }, LFo = {
    PATH: "$path",
    PATTERN: "$val"
  };
  oZ.version = "7.0.0";
  oZ.createIndex = gWl;
  oZ.parseIndex = Ejf;
  oZ.config = Gp;
  oZ.parseQuery = HWl;
  xjf(AWl);
});
function TWl({
  enabled: e,
  isLoading: t,
  hasToolsInProgress: n
}) {
  if (!e) return null;
  if (t || n) return "indeterminate";
  return "completed";
}
function vWl(e) {
  if (e.type !== "user") return !1;
  let t = e.message.content[0];
  if (t?.type !== "text") return !1;
  if (!t.text.includes(`<${Oc}`)) return !1;
  if (xl(t.text, up) !== "completed") return !1;
  return xl(t.text, Zu)?.startsWith(Qbt) ?? !1;
}
function wWl(e, t) {
  if (!Ns()) return e;
  if (t) return e;
  let n = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (vWl(o)) {
      let s = 0;
      while (r < e.length && vWl(e[r])) s++, r++;
      if (s === 1) n.push(o);else n.push({
        ...o,
        message: {
          role: "user",
          content: [{
            type: "text",
            text: `<${Oc}><${up}>completed</${up}><${Zu}>${s} background commands completed</${Zu}></${Oc}>`
          }]
        }
      });
    } else n.push(o), r++;
  }
  return n;
}