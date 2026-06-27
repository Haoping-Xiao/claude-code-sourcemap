// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MMe
// matched 2.1.88 source: src/commands/commit-push-pr.ts
// class=modified (alt of src/commands/commit-push-pr.ts)  jaccard=0.0237  score=0.0949  fileCov=0.0306
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
var ozn = "artifact-design",
  woe = "code-review",
  Y8e = "verify",
  y8t = "simplify",
  Vwo = "commit",
  zwo = "pr",
  Kwo = "commit-push-pr";
function kyt(e) {
  if (
    typeof e === "object" &&
    e !== null &&
    "replacement" in e &&
    typeof e.replacement === "string" &&
    "partial" in e &&
    typeof e.partial === "boolean"
  )
    return {
      replacement: e.replacement,
      partial: e.partial,
    };
  return null;
}
function Lol(e, t) {
  let n = [],
    r = `${t}:`;
  for (let o of e) {
    if (o.type !== "prompt" || !o.urlTemplate) continue;
    if (!o.name.startsWith(r)) continue;
    n.push({
      uriTemplate: o.urlTemplate,
      name: o.name,
      description: o.description,
      server: t,
    });
  }
  return n;
}
function Ywo(e) {
  let t = e.indexOf("{");
  return t === -1 ? e : e.slice(0, t);
}
function szn(e, t) {
  let n = e.indexOf(":");
  if (n <= 0) return null;
  let r = e.slice(0, n),
    o = e.slice(n + 1);
  if (!o.includes("://")) return null;
  for (let s of t)
    if (s.type === "prompt" && s.urlTemplate && s.name.startsWith(`${r}:`) && Ynf(o, s.urlTemplate))
      return {
        commandName: s.name,
        args: o,
      };
  return null;
}
function Ynf(e, t) {
  let n = izn(t),
    r = 0;
  for (let o = 0; o < n.length; o++) {
    let s = n[o];
    if (s.type === "literal") {
      if (!e.startsWith(s.value, r)) return false;
      r += s.value.length;
    } else {
      let i = o + 1;
      while (n[i]?.type === "variable") i++;
      let a = n[i];
      if (a?.type === "literal") {
        let c = i === n.length - 1 ? e.lastIndexOf(a.value) : e.indexOf(a.value, r);
        if (c <= r) return false;
        ((r = c), (o = i - 1));
      } else return e.length > r;
    }
  }
  return r === e.length;
}
function Dol(e) {
  let t = izn(e.template.uriTemplate),
    n = Object.keys(e.resolvedArgs).length,
    r = 0;
  for (let o = 0; o < t.length; o++) {
    if (t[o].type !== "variable") continue;
    if (r === n) return t[o + 1]?.type === "literal" && t[o + 2]?.type === "variable";
    r++;
  }
  return false;
}
function izn(e) {
  let t = [],
    n = 0,
    r = 0;
  while (n < e.length)
    if (e[n] === "{") {
      if (n > r)
        t.push({
          type: "literal",
          value: e.slice(r, n),
        });
      let o = e.indexOf("}", n);
      if (o === -1)
        return (
          t.push({
            type: "literal",
            value: e.slice(n),
          }),
          t
        );
      let s = e.slice(n + 1, o);
      ((s = s.replace(/^[+#./;?&]/, "").replace(/\*$|:\d+$/, "")),
        (s = bi(s, ",")),
        t.push({
          type: "variable",
          name: s,
        }),
        (n = o + 1),
        (r = n));
    } else n++;
  if (r < e.length)
    t.push({
      type: "literal",
      value: e.slice(r),
    });
  return t;
}
function Xnf(e, t) {
  let n = izn(e.uriTemplate),
    r = {},
    o = 0;
  for (let s = 0; s < n.length; s++) {
    let i = n[s];
    if (i.type === "literal") {
      let a = t.slice(o);
      if (a.length < i.value.length) return null;
      if (!a.startsWith(i.value)) return null;
      o += i.value.length;
    } else {
      let a = n[s + 1],
        l = a?.type === "literal" ? a.value : null,
        c = t.slice(o);
      if (l) {
        let u = c.indexOf(l);
        if (u === -1)
          return {
            template: e,
            argName: i.name,
            argValue: c,
            resolvedArgs: r,
            valueStartIndex: o,
          };
        ((r[i.name] = c.slice(0, u)), (o += u));
      } else
        return {
          template: e,
          argName: i.name,
          argValue: c,
          resolvedArgs: r,
          valueStartIndex: o,
        };
    }
  }
  return null;
}
function Pol(e, t) {
  let n = null,
    r = [-1, -1, -1];
  for (let o of t) {
    let s = Xnf(o, e);
    if (!s) continue;
    let i = [
      Object.keys(s.resolvedArgs).length,
      s.valueStartIndex,
      (o.uriTemplate.match(/\{/g) ?? []).length,
    ];
    if (
      !n ||
      i[0] > r[0] ||
      (i[0] === r[0] && i[1] > r[1]) ||
      (i[0] === r[0] && i[1] === r[1] && i[2] > r[2])
    )
      ((n = s), (r = i));
  }
  return n;
}
function Mol(e, t, n) {
  let r = e.slice(0, t.valueStartIndex),
    o = izn(t.template.uriTemplate),
    s = -1,
    i = 0;
  for (let u = 0; u < o.length; u++)
    if (o[u].type === "variable") {
      if (i === Object.keys(t.resolvedArgs).length) {
        s = u;
        break;
      }
      i++;
    }
  let a = s + 1;
  while (o[a]?.type === "variable") a++;
  let l = s >= 0 ? o[a] : void 0,
    c = l?.type === "literal" ? l.value : "";
  return r + n + c;
}
