// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cms
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/core.mjs
// class=partial  jaccard=0.2182  score=1  fileCov=0.2182
// note: low-confidence suggestion: node_modules/@growthbook/growthbook/dist/esm/core.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cms = E(() => {
  m0t();
  kIr = {};
});
function glu(e) {
  let t = new Map();
  if (e.global.forcedFeatureValues) e.global.forcedFeatureValues.forEach((n, r) => t.set(r, n));
  if (e.user.forcedFeatureValues) e.user.forcedFeatureValues.forEach((n, r) => t.set(r, n));
  return t;
}
function hlu(e) {
  if (e.global.forcedVariations && e.user.forcedVariations) return {
    ...e.global.forcedVariations,
    ...e.user.forcedVariations
  };else if (e.global.forcedVariations) return e.global.forcedVariations;else if (e.user.forcedVariations) return e.user.forcedVariations;else return {};
}
async function cZe(e) {
  try {
    await e();
  } catch (t) {}
}
function ums(e, t, n) {
  if (e.user.trackedExperiments) {
    let o = ldn(t, n);
    if (e.user.trackedExperiments.has(o)) return [];
    e.user.trackedExperiments.add(o);
  }
  if (e.user.enableDevMode && e.user.devLogs) e.user.devLogs.push({
    experiment: t,
    result: n,
    timestamp: Date.now().toString(),
    logType: "experiment"
  });
  let r = [];
  if (e.global.trackingCallback) {
    let o = e.global.trackingCallback;
    r.push(cZe(() => o(t, n, e.user)));
  }
  if (e.user.trackingCallback) {
    let o = e.user.trackingCallback;
    r.push(cZe(() => o(t, n)));
  }
  if (e.global.eventLogger) {
    let o = e.global.eventLogger;
    r.push(cZe(() => o(mlu, {
      experimentId: t.key,
      variationId: n.key,
      hashAttribute: n.hashAttribute,
      hashValue: n.hashValue
    }, e.user)));
  }
  return r;
}
function ylu(e, t, n) {
  if (e.user.trackedFeatureUsage) {
    let r = JSON.stringify(n.value);
    if (e.user.trackedFeatureUsage[t] === r) return;
    if (e.user.trackedFeatureUsage[t] = r, e.user.enableDevMode && e.user.devLogs) e.user.devLogs.push({
      featureKey: t,
      result: n,
      timestamp: Date.now().toString(),
      logType: "feature"
    });
  }
  if (e.global.onFeatureUsage) {
    let r = e.global.onFeatureUsage;
    cZe(() => r(t, n, e.user));
  }
  if (e.user.onFeatureUsage) {
    let r = e.user.onFeatureUsage;
    cZe(() => r(t, n));
  }
  if (e.global.eventLogger) {
    let r = e.global.eventLogger;
    cZe(() => r(flu, {
      feature: t,
      source: n.source,
      value: n.value,
      ruleId: n.source === "defaultValue" ? "$default" : n.ruleId || "",
      variationId: n.experimentResult ? n.experimentResult.key : ""
    }, e.user));
  }
}
function idn(e, t) {
  if (t.stack.evaluatedFeatures.has(e)) return jwe(t, e, null, "cyclicPrerequisite");
  t.stack.evaluatedFeatures.add(e), t.stack.id = e;
  let n = glu(t);
  if (n.has(e)) return jwe(t, e, n.get(e), "override");
  if (!t.global.features || !t.global.features[e]) return jwe(t, e, null, "unknownFeature");
  let r = t.global.features[e];
  if (r.rules) {
    let o = new Set(t.stack.evaluatedFeatures);
    e: for (let s of r.rules) {
      if (s.parentConditions) for (let l of s.parentConditions) {
        t.stack.evaluatedFeatures = new Set(o);
        let c = idn(l.id, t);
        if (c.source === "cyclicPrerequisite") return jwe(t, e, null, "cyclicPrerequisite");
        let u = {
          value: c.value
        };
        if (!Fwe(u, l.condition || {})) {
          if (l.gate) return jwe(t, e, null, "prerequisite");
          continue e;
        }
      }
      if (s.filters && fms(s.filters, t)) continue;
      if ("force" in s) {
        if (s.condition && !pms(s.condition, t)) continue;
        if (!_lu(t, s.seed || e, s.hashAttribute, t.user.saveStickyBucketAssignmentDoc && !s.disableStickyBucketing ? s.fallbackAttribute : void 0, s.range, s.coverage, s.hashVersion)) continue;
        if (s.tracks) s.tracks.forEach(l => {
          if (!ums(t, l.experiment, l.result).length && t.global.saveDeferredTrack) t.global.saveDeferredTrack({
            experiment: l.experiment,
            result: l.result
          });
        });
        return jwe(t, e, s.force, "force", s.id);
      }
      if (!s.variations) continue;
      let i = {
        variations: s.variations,
        key: s.key || e
      };
      if ("coverage" in s) i.coverage = s.coverage;
      if (s.weights) i.weights = s.weights;
      if (s.hashAttribute) i.hashAttribute = s.hashAttribute;
      if (s.fallbackAttribute) i.fallbackAttribute = s.fallbackAttribute;
      if (s.disableStickyBucketing) i.disableStickyBucketing = s.disableStickyBucketing;
      if (s.bucketVersion !== void 0) i.bucketVersion = s.bucketVersion;
      if (s.minBucketVersion !== void 0) i.minBucketVersion = s.minBucketVersion;
      if (s.namespace) i.namespace = s.namespace;
      if (s.meta) i.meta = s.meta;
      if (s.ranges) i.ranges = s.ranges;
      if (s.name) i.name = s.name;
      if (s.phase) i.phase = s.phase;
      if (s.seed) i.seed = s.seed;
      if (s.hashVersion) i.hashVersion = s.hashVersion;
      if (s.filters) i.filters = s.filters;
      if (s.condition) i.condition = s.condition;
      let {
        result: a
      } = adn(i, e, t);
      if (t.global.onExperimentEval && t.global.onExperimentEval(i, a), a.inExperiment && !a.passthrough) return jwe(t, e, a.value, "experiment", s.id, i, a);
    }
  }
  return jwe(t, e, r.defaultValue === void 0 ? null : r.defaultValue, "defaultValue");
}
function adn(e, t, n) {
  let r = e.key,
    o = e.variations.length;
  if (o < 2) return {
    result: Iw(n, e, -1, !1, t)
  };
  if (n.global.enabled === !1 || n.user.enabled === !1) return {
    result: Iw(n, e, -1, !1, t)
  };
  if (e = blu(e, n), e.urlPatterns && !edn(n.user.url || "", e.urlPatterns)) return {
    result: Iw(n, e, -1, !1, t)
  };
  let s = Kfs(r, n.user.url || "", o);
  if (s !== null) return {
    result: Iw(n, e, s, !1, t)
  };
  let i = hlu(n);
  if (r in i) {
    let h = i[r];
    return {
      result: Iw(n, e, h, !1, t)
    };
  }
  if (e.status === "draft" || e.active === !1) return {
    result: Iw(n, e, -1, !1, t)
  };
  let {
    hashAttribute: a,
    hashValue: l
  } = iFe(n, e.hashAttribute, n.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing ? e.fallbackAttribute : void 0);
  if (!l) return {
    result: Iw(n, e, -1, !1, t)
  };
  let c = -1,
    u = !1,
    d = !1;
  if (n.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing) {
    let {
      variation: h,
      versionIsBlocked: y
    } = Alu({
      ctx: n,
      expKey: e.key,
      expBucketVersion: e.bucketVersion,
      expHashAttribute: e.hashAttribute,
      expFallbackAttribute: e.fallbackAttribute,
      expMinBucketVersion: e.minBucketVersion,
      expMeta: e.meta
    });
    u = h >= 0, c = h, d = !!y;
  }
  if (!u) {
    if (e.filters) {
      if (fms(e.filters, n)) return {
        result: Iw(n, e, -1, !1, t)
      };
    } else if (e.namespace && !qfs(l, e.namespace)) return {
      result: Iw(n, e, -1, !1, t)
    };
    if (e.include && !Yfs(e.include)) return {
      result: Iw(n, e, -1, !1, t)
    };
    if (e.condition && !pms(e.condition, n)) return {
      result: Iw(n, e, -1, !1, t)
    };
    if (e.parentConditions) {
      let h = new Set(n.stack.evaluatedFeatures);
      for (let y of e.parentConditions) {
        n.stack.evaluatedFeatures = new Set(h);
        let b = idn(y.id, n);
        if (b.source === "cyclicPrerequisite") return {
          result: Iw(n, e, -1, !1, t)
        };
        let _ = {
          value: b.value
        };
        if (!Fwe(_, y.condition || {})) return {
          result: Iw(n, e, -1, !1, t)
        };
      }
    }
    if (e.groups && !Elu(e.groups, n)) return {
      result: Iw(n, e, -1, !1, t)
    };
  }
  if (e.url && !Slu(e.url, n)) return {
    result: Iw(n, e, -1, !1, t)
  };
  let p = p0t(e.seed || r, l, e.hashVersion || 1);
  if (p === null) return {
    result: Iw(n, e, -1, !1, t)
  };
  if (!u) {
    let h = e.ranges || zfs(o, e.coverage === void 0 ? 1 : e.coverage, e.weights);
    c = Vfs(p, h);
  }
  if (d) return {
    result: Iw(n, e, -1, !1, t, void 0, !0)
  };
  if (c < 0) return {
    result: Iw(n, e, -1, !1, t)
  };
  if ("force" in e) return {
    result: Iw(n, e, e.force === void 0 ? -1 : e.force, !1, t)
  };
  if (n.global.qaMode || n.user.qaMode) return {
    result: Iw(n, e, -1, !1, t)
  };
  if (e.status === "stopped") return {
    result: Iw(n, e, -1, !1, t)
  };
  let f = Iw(n, e, c, !0, t, p, u);
  if (n.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing) {
    let {
      changed: h,
      key: y,
      doc: b
    } = Tlu(n, a, f0t(l), {
      [RIr(e.key, e.bucketVersion)]: f.key
    });
    if (h) n.user.stickyBucketAssignmentDocs = n.user.stickyBucketAssignmentDocs || {}, n.user.stickyBucketAssignmentDocs[y] = b, n.user.saveStickyBucketAssignmentDoc(b);
  }
  let m = ums(n, e, f);
  if (m.length === 0 && n.global.saveDeferredTrack) n.global.saveDeferredTrack({
    experiment: e,
    result: f
  });
  let g = !m.length ? void 0 : m.length === 1 ? m[0] : Promise.all(m).then(() => {});
  return "changeId" in e && e.changeId && n.global.recordChangeId && n.global.recordChangeId(e.changeId), {
    result: f,
    trackingCall: g
  };
}
function jwe(e, t, n, r, o, s, i) {
  let a = {
    value: n,
    on: !!n,
    off: !n,
    source: r,
    ruleId: o || ""
  };
  if (s) a.experiment = s;
  if (i) a.experimentResult = i;
  if (r !== "override") ylu(e, t, a);
  return a;
}
function dms(e) {
  return {
    ...e.user.attributes,
    ...e.user.attributeOverrides
  };
}
function pms(e, t) {
  return Fwe(dms(t), e, t.global.savedGroups || {});
}
function fms(e, t) {
  return e.some(n => {
    let {
      hashValue: r
    } = iFe(t, n.attribute);
    if (!r) return !0;
    let o = p0t(n.seed, r, n.hashVersion || 2);
    if (o === null) return !0;
    return !n.ranges.some(s => Zun(o, s));
  });
}
function _lu(e, t, n, r, o, s, i) {
  if (!o && s === void 0) return !0;
  if (!o && s === 0) return !1;
  let {
    hashValue: a
  } = iFe(e, n, r);
  if (!a) return !1;
  let l = p0t(t, a, i || 1);
  if (l === null) return !1;
  return o ? Zun(l, o) : s !== void 0 ? l <= s : !0;
}
function Iw(e, t, n, r, o, s, i) {
  let a = !0;
  if (n < 0 || n >= t.variations.length) n = 0, a = !1;
  let {
      hashAttribute: l,
      hashValue: c
    } = iFe(e, t.hashAttribute, e.user.saveStickyBucketAssignmentDoc && !t.disableStickyBucketing ? t.fallbackAttribute : void 0),
    u = t.meta ? t.meta[n] : {},
    d = {
      key: u.key || "" + n,
      featureId: o,
      inExperiment: a,
      hashUsed: r,
      variationId: n,
      value: t.variations[n],
      hashAttribute: l,
      hashValue: c,
      stickyBucketUsed: !!i
    };
  if (u.name) d.name = u.name;
  if (s !== void 0) d.bucket = s;
  if (u.passthrough) d.passthrough = u.passthrough;
  return d;
}
function blu(e, t) {
  let n = e.key,
    r = t.global.overrides;
  if (r && r[n]) {
    if (e = Object.assign({}, e, r[n]), typeof e.url === "string") e.url = TIr(e.url);
  }
  return e;
}
function iFe(e, t, n) {
  let r = t || "id",
    o = "",
    s = dms(e);
  if (s[r]) o = s[r];
  if (!o && n) {
    if (s[n]) o = s[n];
    if (o) r = n;
  }
  return {
    hashAttribute: r,
    hashValue: o
  };
}
function Slu(e, t) {
  let n = t.user.url;
  if (!n) return !1;
  let r = n.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
  if (e.test(n)) return !0;
  if (e.test(r)) return !0;
  return !1;
}
function Elu(e, t) {
  let n = t.global.groups || {};
  for (let r = 0; r < e.length; r++) if (n[e[r]]) return !0;
  return !1;
}
function Alu(e) {
  let {
    ctx: t,
    expKey: n,
    expBucketVersion: r,
    expHashAttribute: o,
    expFallbackAttribute: s,
    expMinBucketVersion: i,
    expMeta: a
  } = e;
  r = r || 0, i = i || 0, o = o || "id", a = a || [];
  let l = RIr(n, r),
    c = Hlu(t, o, s);
  if (i > 0) for (let p = 0; p <= i; p++) {
    let f = RIr(n, p);
    if (c[f] !== void 0) return {
      variation: -1,
      versionIsBlocked: !0
    };
  }
  let u = c[l];
  if (u === void 0) return {
    variation: -1
  };
  let d = a.findIndex(p => p.key === u);
  if (d < 0) return {
    variation: -1
  };
  return {
    variation: d
  };
}
function RIr(e, t) {
  return t = t || 0, `${e}__${t}`;
}
function LIr(e, t) {
  return `${e}||${t}`;
}
function Hlu(e, t, n) {
  if (!e.user.stickyBucketAssignmentDocs) return {};
  let {
      hashAttribute: r,
      hashValue: o
    } = iFe(e, t),
    s = LIr(r, f0t(o)),
    {
      hashAttribute: i,
      hashValue: a
    } = iFe(e, n),
    l = a ? LIr(i, f0t(a)) : null,
    c = {};
  if (l && e.user.stickyBucketAssignmentDocs[l]) Object.assign(c, e.user.stickyBucketAssignmentDocs[l].assignments || {});
  if (e.user.stickyBucketAssignmentDocs[s]) Object.assign(c, e.user.stickyBucketAssignmentDocs[s].assignments || {});
  return c;
}
function Tlu(e, t, n, r) {
  let o = LIr(t, n),
    s = e.user.stickyBucketAssignmentDocs && e.user.stickyBucketAssignmentDocs[o] ? e.user.stickyBucketAssignmentDocs[o].assignments || {} : {},
    i = {
      ...s,
      ...r
    },
    a = JSON.stringify(s) !== JSON.stringify(i);
  return {
    key: o,
    doc: {
      attributeName: t,
      attributeValue: n,
      assignments: i
    },
    changed: a
  };
}
function vlu(e, t) {
  let n = new Set(),
    r = t && t.features ? t.features : e.global.features || {},
    o = t && t.experiments ? t.experiments : e.global.experiments || [];
  return Object.keys(r).forEach(s => {
    let i = r[s];
    if (i.rules) {
      for (let a of i.rules) if (a.variations) {
        if (n.add(a.hashAttribute || "id"), a.fallbackAttribute) n.add(a.fallbackAttribute);
      }
    }
  }), o.map(s => {
    if (n.add(s.hashAttribute || "id"), s.fallbackAttribute) n.add(s.fallbackAttribute);
  }), Array.from(n);
}
async function mms(e, t, n) {
  let r = DIr(e, n);
  return t.getAllAssignments(r);
}
function DIr(e, t) {
  let n = {};
  return vlu(e, t).forEach(o => {
    let {
      hashValue: s
    } = iFe(e, o);
    n[o] = f0t(s);
  }), n;
}
async function gms(e, t, n) {
  if (e = {
    ...e
  }, e.encryptedFeatures) {
    try {
      e.features = JSON.parse(await sFe(e.encryptedFeatures, t, n));
    } catch (r) {
      console.error(r);
    }
    delete e.encryptedFeatures;
  }
  if (e.encryptedExperiments) {
    try {
      e.experiments = JSON.parse(await sFe(e.encryptedExperiments, t, n));
    } catch (r) {
      console.error(r);
    }
    delete e.encryptedExperiments;
  }
  if (e.encryptedSavedGroups) {
    try {
      e.savedGroups = JSON.parse(await sFe(e.encryptedSavedGroups, t, n));
    } catch (r) {
      console.error(r);
    }
    delete e.encryptedSavedGroups;
  }
  return e;
}
function hms(e) {
  let t = e.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: t.replace(/\/*$/, ""),
    streamingHost: (e.streamingHost || t).replace(/\/*$/, ""),
    apiRequestHeaders: e.apiHostRequestHeaders,
    streamingHostRequestHeaders: e.streamingHostRequestHeaders
  };
}
function ldn(e, t) {
  return t.hashAttribute + t.hashValue + e.key + t.variationId;
}
var flu = "Feature Evaluated",
  mlu = "Experiment Viewed";