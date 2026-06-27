// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xar
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0045  score=0.0426  fileCov=0.005
// note: nearest: src/cli/print.ts (0.0045); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xar = E(() => {
  LQt();
  har();
  zj();
  dn();
  kt();
  _F();
  jc();
  ver();
  ty();
  Lo();
  je();
  At();
  jS();
  HO();
  xHt();
  ag();
  CQt = require("crypto"), a2 = require("fs/promises"), LHt = require("path");
  Bse = Rrc(jYt);
  xQt = [];
  OJf = {
    name: "exec",
    description: ""
  };
});
function Frc(e) {
  let t = [],
    n = [];
  for (let r of PQt(e.schedule)) if (F1(r)) n.push({
    type: "cron",
    expression: r
  });else t.push(`invalid cron expression "${r}" in schedule`);
  for (let r of dWo(e.on)) {
    let {
      trigger: o,
      warnings: s
    } = NJf(r);
    if (t.push(...s), o) n.push(o);
  }
  return {
    triggers: n,
    warnings: t
  };
}
function NJf(e) {
  if (typeof e === "string") {
    let t = e.trim();
    if (Brc.test(t)) return {
      trigger: DQt(t, []),
      warnings: []
    };
    return GJf(t);
  }
  if (MQt(e)) {
    let t = [],
      n = typeof e.event === "string" ? e.event.trim() : "";
    if (!Brc.test(n)) return {
      trigger: null,
      warnings: [`invalid event "${n || "<missing>"}" in on: entry`]
    };
    let r = [],
      o = PQt(e.branches);
    if (o.length > 0) r.push({
      field: "ref",
      op: "in",
      values: o
    });
    let s = PQt(e.paths);
    if (s.length > 0) r.push({
      field: "paths",
      op: "glob_any",
      values: s
    });
    let i = PQt(e.labels);
    if (i.length > 0) r.push({
      field: "labels",
      op: "in",
      values: i
    });
    if (typeof e.channel === "string" && e.channel.trim() !== "") r.push({
      field: "channel",
      op: "eq",
      values: [qJf(e.channel)]
    });
    r.push(...BJf(e.where, t));
    for (let a of dWo(e.filter)) {
      let l = WJf(a);
      if (l) r.push(l);
    }
    return {
      trigger: DQt(n, r),
      warnings: t
    };
  }
  return {
    trigger: null,
    warnings: ["on: entry must be a string or {event: ...} mapping"]
  };
}
function BJf(e, t) {
  if (e === void 0) return [];
  if (Array.isArray(e)) {
    let n = [];
    for (let r of e) {
      if (!MQt(r) || Object.keys(r).length !== 1) {
        t.push("where: list element must be a single-field map {field: predicate}");
        continue;
      }
      n.push(...Urc(r, t));
    }
    return n;
  }
  if (MQt(e)) return Urc(e, t);
  return t.push("where: must be a map of field\u2192predicate, or a list of single-field maps"), [];
}
function Urc(e, t) {
  let n = [];
  for (let [r, o] of Object.entries(e)) if (o === null || o === void 0) t.push(`where: missing predicate for "${r}"`);else if (kar(o)) n.push({
    field: r,
    op: "eq",
    values: [Rar(o)]
  });else if (Array.isArray(o)) {
    if (o.length === 0) t.push(`where: empty list for "${r}"`);else if (o.every(kar)) n.push({
      field: r,
      op: "in",
      values: o.map(Rar)
    });else t.push(`where: list for "${r}" mixes scalars and objects; use {one_of: [...]} or an op object`);
  } else if (MQt(o)) {
    let s = Object.keys(o);
    if (s.length === 0) t.push(`where: empty predicate for "${r}"`);
    for (let i of s) {
      let a = UJf(r, i, o[i], t);
      if (a) n.push(a);
    }
  } else t.push(`where: unsupported predicate for "${r}"`);
  return n;
}
function UJf(e, t, n, r) {
  let o = t.toLowerCase(),
    s = jrc[o];
  if (!s) {
    let i = FJf(o);
    return r.push(`where: unknown op "${t}" on "${e}"${i ? ` (did you mean "${i}"?)` : ""}; valid ops: ${Grc.join(", ")}`), null;
  }
  if (s.list) {
    if (!Array.isArray(n)) return r.push(`where: "${t}" on "${e}" takes a list; use is/is_not for a single value`), null;
    if (n.length === 0) return r.push(`where: "${t}" on "${e}" needs at least one value`), null;
    if (!n.every(kar)) return r.push(`where: "${t}" on "${e}" list must contain scalars`), null;
    return {
      field: e,
      op: s.op,
      values: n.map(Rar)
    };
  }
  if (Array.isArray(n)) return r.push(`where: "${t}" on "${e}" takes a single value; use one_of/none_of for a list`), null;
  if (!kar(n)) return r.push(`where: "${t}" on "${e}" needs a scalar value`), null;
  return {
    field: e,
    op: s.op,
    values: [Rar(n)]
  };
}
function kar(e) {
  return typeof e === "string" || typeof e === "number" || typeof e === "boolean";
}
function Rar(e) {
  return typeof e === "string" ? e : String(e);
}
function FJf(e) {
  let t,
    n = 3;
  for (let r of Grc) {
    let o = jJf(e, r);
    if (o < n) n = o, t = r;
  }
  return t;
}
function jJf(e, t) {
  let n = Array.from({
    length: t.length + 1
  }, (r, o) => o);
  for (let r = 1; r <= e.length; r++) {
    let o = n[0];
    n[0] = r;
    for (let s = 1; s <= t.length; s++) {
      let i = n[s];
      n[s] = Math.min(n[s] + 1, n[s - 1] + 1, o + (e[r - 1] === t[s - 1] ? 0 : 1)), o = i;
    }
  }
  return n[t.length];
}
function GJf(e) {
  let t = e.match(/^cron\(\s*(.+?)\s*\)$/);
  if (t) {
    let r = t[1];
    if (!F1(r)) return {
      trigger: null,
      warnings: [`invalid cron expression in "${e}"`]
    };
    return {
      trigger: {
        type: "cron",
        expression: r
      },
      warnings: [`deprecated 'on: ${e}'; use top-level 'schedule: "${r}"'`]
    };
  }
  if (e === "github:pull-request-opened") return {
    trigger: DQt("github.pull_request.opened", []),
    warnings: [`deprecated 'on: ${e}'; use 'on: github.pull_request.opened'`]
  };
  if (e === "github:pull-request-merged") return {
    trigger: DQt("github.pull_request.merged", []),
    warnings: [`deprecated 'on: ${e}'; use 'on: github.pull_request.merged'`]
  };
  let n = e.match(/^slack:new-message\(\s*channel\s*:\s*#?([^\s)]+)\s*\)$/);
  if (n) {
    let r = n[1];
    return {
      trigger: DQt("slack.message", [{
        field: "channel",
        op: "eq",
        values: [r]
      }]),
      warnings: [`deprecated 'on: ${e}'; use 'on: {event: slack.message, channel: ${r}}'`]
    };
  }
  return {
    trigger: null,
    warnings: [`invalid trigger "${e}"`]
  };
}
function DQt(e, t) {
  let n = e.indexOf(".");
  return {
    type: "event",
    provider: e.slice(0, n),
    event: e,
    filter: t
  };
}
function WJf(e) {
  if (!MQt(e)) return null;
  let t = typeof e.field === "string" ? e.field : "",
    n = typeof e.op === "string" ? e.op : "";
  if (!t || !n) return null;
  return {
    field: t,
    op: n,
    values: PQt(e.values)
  };
}
function qJf(e) {
  let t = e.trim();
  return t.startsWith("#") ? t.slice(1) : t;
}
function MQt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function dWo(e) {
  if (e === void 0 || e === null) return [];
  return Array.isArray(e) ? e : [e];
}
function PQt(e) {
  return dWo(e).map(t => typeof t === "string" ? t.trim() : "").filter(t => t !== "");
}
function VJf(e) {
  switch (e.type) {
    case "cron":
      return `cron(${e.expression})`;
    case "event":
      {
        let t = e.filter.find(n => n.field === "channel")?.values[0];
        return t ? `${e.event}#${t}` : e.event;
      }
  }
}
function Wrc(e) {
  return e.map(VJf).join(", ");
}
var Brc, jrc, Grc;