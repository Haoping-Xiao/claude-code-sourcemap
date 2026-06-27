// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tfe
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/mathematica.js
// class=new  jaccard=0.0003  score=0.0614  fileCov=0.0003
// note: nearest: node_modules/highlight.js/lib/languages/mathematica.js (0.0003); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tfe = E(() => {
  ft();
  np();
  dn();
  yC();
  fp();
  je();
  bm();
  tA();
  Jt();
  bH();
  xF();
  OI();
  pml = require("fs/promises");
  Udf = {
    name: "LocalWorkflowTask",
    type: "local_workflow",
    async kill(e, t) {
      qAe(e, t);
    }
  };
});
function ZI(e) {
  if (e.length > Oj) return {
    error: `Script exceeds ${Oj} bytes`
  };
  let t;
  try {
    let {
      parse: l
    } = qYn();
    t = l(e, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: !0,
      allowReturnOutsideFunction: !0
    });
  } catch (l) {
    return {
      error: `Script parse error: ${l instanceof Error ? l.message : String(l)}. Workflow scripts must be plain JavaScript \u2014 TypeScript syntax (type annotations like \`: string[]\`, interfaces, generics) fails to parse.`
    };
  }
  let n = t.body[0];
  if (!n || n.type !== "ExportNamedDeclaration" || !jdf(n)) return {
    error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script"
  };
  let o = n.declaration.declarations[0].init,
    s;
  try {
    s = gml(o);
  } catch (l) {
    return {
      error: `meta must be a pure literal: ${l instanceof Error ? l.message : String(l)}`
    };
  }
  let i = Wdf(s);
  if ("error" in i) return i;
  let a = e.slice(n.end).replace(/^[;\s]*\n/, "").trimStart();
  return {
    meta: i.meta,
    scriptBody: a
  };
}
function jdf(e) {
  let t = e.declaration;
  if (!t || t.type !== "VariableDeclaration") return !1;
  if (t.kind !== "const" || t.declarations.length !== 1) return !1;
  let n = t.declarations[0];
  return n.id.type === "Identifier" && n.id.name === "meta" && n.init?.type === "ObjectExpression";
}
function mml(e) {
  switch (e.type) {
    case "Literal":
      return e.value;
    case "ArrayExpression":
      return e.elements.map(n => {
        if (n === null) throw Error("sparse arrays not allowed");
        if (n.type === "SpreadElement") throw Error("spread not allowed in meta");
        return mml(n);
      });
    case "ObjectExpression":
      return gml(e);
    case "TemplateLiteral":
      {
        let t = e;
        if (t.expressions.length > 0) throw Error("template interpolation not allowed in meta");
        return t.quasis.map(n => n.value.cooked ?? "").join("");
      }
    case "UnaryExpression":
      {
        let t = e;
        if (t.operator === "-" && t.argument.type === "Literal" && typeof t.argument.value === "number") return -t.argument.value;
        throw Error("only negative-number unary allowed in meta");
      }
    default:
      throw Error(`non-literal node type in meta: ${e.type}`);
  }
}
function gml(e) {
  let t = Object.create(null);
  for (let n of e.properties) {
    if (n.type !== "Property") throw Error("only plain properties allowed in meta");
    let r = n;
    if (r.computed) throw Error("computed keys not allowed in meta");
    if (r.method || r.kind !== "init") throw Error("methods/accessors not allowed in meta");
    t[Gdf(r)] = mml(r.value);
  }
  return t;
}
function Gdf(e) {
  let t;
  if (e.key.type === "Identifier") t = e.key.name;else if (e.key.type === "Literal") t = String(e.key.value);else throw Error(`unsupported key type in meta: ${e.key.type}`);
  if (Fdf.has(t)) throw Error(`reserved key name not allowed in meta: ${t}`);
  return t;
}
function Wdf(e) {
  let t = e.name;
  if (typeof t !== "string" || t.length === 0) return {
    error: "meta.name must be a non-empty string"
  };
  let n = e.description;
  if (typeof n !== "string" || n.length === 0) return {
    error: "meta.description must be a non-empty string"
  };
  let r = typeof e.title === "string" && e.title.length > 0 ? e.title : void 0,
    o = typeof e.whenToUse === "string" ? e.whenToUse : void 0,
    s = qdf(e.phases);
  return {
    meta: {
      name: t,
      description: n,
      title: r,
      whenToUse: o,
      phases: s
    }
  };
}
function qdf(e) {
  if (!Array.isArray(e)) return;
  let t = [];
  for (let n of e) if (n && typeof n === "object" && "title" in n) {
    let {
      title: r,
      detail: o,
      model: s
    } = n;
    if (typeof r === "string") t.push({
      title: r,
      detail: typeof o === "string" ? o : void 0,
      model: typeof s === "string" ? s : void 0
    });
  }
  return t.length > 0 ? t : void 0;
}
var Fdf;