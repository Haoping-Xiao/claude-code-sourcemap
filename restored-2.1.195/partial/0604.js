// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ej
// matched 2.1.88 source: node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
// class=partial  jaccard=0.1542  score=0.2346  fileCov=0.3104
// note: low-confidence suggestion: node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ej = Q(Z2 => {
  var K0t = Akr(),
    fSs = Hkr(),
    Tkr = uSs(),
    ppn = require("path"),
    fpn = dSs(),
    $Ze = pSs(),
    gSs = "AWS_PROFILE",
    hSs = "default",
    mLu = e => e.profile || process.env[gSs] || hSs,
    HFe = ".",
    gLu = e => Object.entries(e).filter(([t]) => {
      let n = t.indexOf(HFe);
      if (n === -1) return !1;
      return Object.values(fpn.IniSectionType).includes(t.substring(0, n));
    }).reduce((t, [n, r]) => {
      let o = n.indexOf(HFe),
        s = n.substring(0, o) === fpn.IniSectionType.PROFILE ? n.substring(o + 1) : n;
      return t[s] = r, t;
    }, {
      ...(e.default && {
        default: e.default
      })
    }),
    hLu = "AWS_CONFIG_FILE",
    ySs = () => process.env[hLu] || ppn.join(K0t.getHomeDir(), ".aws", "config"),
    yLu = "AWS_SHARED_CREDENTIALS_FILE",
    _Lu = () => process.env[yLu] || ppn.join(K0t.getHomeDir(), ".aws", "credentials"),
    bLu = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    SLu = ["__proto__", "profile __proto__"],
    vkr = e => {
      let t = {},
        n,
        r;
      for (let o of e.split(/\r?\n/)) {
        let s = o.split(/(^|\s)[;#]/)[0].trim();
        if (s[0] === "[" && s[s.length - 1] === "]") {
          n = void 0, r = void 0;
          let a = s.substring(1, s.length - 1),
            l = bLu.exec(a);
          if (l) {
            let [, c,, u] = l;
            if (Object.values(fpn.IniSectionType).includes(c)) n = [c, u].join(HFe);
          } else n = a;
          if (SLu.includes(a)) throw Error(`Found invalid profile name "${a}"`);
        } else if (n) {
          let a = s.indexOf("=");
          if (![0, -1].includes(a)) {
            let [l, c] = [s.substring(0, a).trim(), s.substring(a + 1).trim()];
            if (c === "") r = l;else {
              if (r && o.trimStart() === o) r = void 0;
              t[n] = t[n] || {};
              let u = r ? [r, l].join(HFe) : l;
              t[n][u] = c;
            }
          }
        }
      }
      return t;
    },
    mSs = () => ({}),
    _Ss = async (e = {}) => {
      let {
          filepath: t = _Lu(),
          configFilepath: n = ySs()
        } = e,
        r = K0t.getHomeDir(),
        o = "~/",
        s = t;
      if (t.startsWith("~/")) s = ppn.join(r, t.slice(2));
      let i = n;
      if (n.startsWith("~/")) i = ppn.join(r, n.slice(2));
      let a = await Promise.all([$Ze.readFile(i, {
        ignoreCache: e.ignoreCache
      }).then(vkr).then(gLu).catch(mSs), $Ze.readFile(s, {
        ignoreCache: e.ignoreCache
      }).then(vkr).catch(mSs)]);
      return {
        configFile: a[0],
        credentialsFile: a[1]
      };
    },
    ELu = e => Object.entries(e).filter(([t]) => t.startsWith(fpn.IniSectionType.SSO_SESSION + HFe)).reduce((t, [n, r]) => ({
      ...t,
      [n.substring(n.indexOf(HFe) + 1)]: r
    }), {}),
    ALu = () => ({}),
    HLu = async (e = {}) => $Ze.readFile(e.configFilepath ?? ySs()).then(vkr).then(ELu).catch(ALu),
    TLu = (...e) => {
      let t = {};
      for (let n of e) for (let [r, o] of Object.entries(n)) if (t[r] !== void 0) Object.assign(t[r], o);else t[r] = o;
      return t;
    },
    vLu = async e => {
      let t = await _Ss(e);
      return TLu(t.configFile, t.credentialsFile);
    },
    wLu = {
      getFileRecord() {
        return $Ze.fileIntercept;
      },
      interceptFile(e, t) {
        $Ze.fileIntercept[e] = Promise.resolve(t);
      },
      getTokenRecord() {
        return Tkr.tokenIntercept;
      },
      interceptToken(e, t) {
        Tkr.tokenIntercept[e] = t;
      }
    };
  Object.defineProperty(Z2, "getSSOTokenFromFile", {
    enumerable: !0,
    get: function () {
      return Tkr.getSSOTokenFromFile;
    }
  });
  Object.defineProperty(Z2, "readFile", {
    enumerable: !0,
    get: function () {
      return $Ze.readFile;
    }
  });
  Z2.CONFIG_PREFIX_SEPARATOR = HFe;
  Z2.DEFAULT_PROFILE = hSs;
  Z2.ENV_PROFILE = gSs;
  Z2.externalDataInterceptor = wLu;
  Z2.getProfileName = mLu;
  Z2.loadSharedConfigFiles = _Ss;
  Z2.loadSsoSessionData = HLu;
  Z2.parseKnownFiles = vLu;
  Object.keys(K0t).forEach(function (e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Z2, e)) Object.defineProperty(Z2, e, {
      enumerable: !0,
      get: function () {
        return K0t[e];
      }
    });
  });
  Object.keys(fSs).forEach(function (e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Z2, e)) Object.defineProperty(Z2, e, {
      enumerable: !0,
      get: function () {
        return fSs[e];
      }
    });
  });
});