// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dko
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/mathematica.js
// class=new  jaccard=0.0006  score=0.0555  fileCov=0.0006
// note: nearest: node_modules/highlight.js/lib/languages/mathematica.js (0.0006); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dko = Q((VYn, lml) => {
  (function (e, t) {
    typeof VYn === "object" && typeof lml < "u" ? t(VYn) : typeof define === "function" && define.amd ? define(["exports"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, t((e.acorn = e.acorn || {}, e.acorn.walk = {})));
  })(VYn, function (e) {
    function t(y, b, _, S, A) {
      if (!_) _ = h;
      (function v(C, x, I) {
        var k = I || C.type;
        if (g(_, k, C, x, v), b[k]) b[k](C, x);
      })(y, S, A);
    }
    function n(y, b, _, S, A) {
      var v = [];
      if (!_) _ = h;
      (function C(x, I, k) {
        var D = k || x.type,
          P = x !== v[v.length - 1];
        if (P) v.push(x);
        if (g(_, D, x, I, C), b[D]) b[D](x, I || v, v);
        if (P) v.pop();
      })(y, S, A);
    }
    function r(y, b, _, S, A) {
      var v = _ ? p(_, S || void 0) : S;
      (function C(x, I, k) {
        v[k || x.type](x, I, C);
      })(y, b, A);
    }
    function o(y) {
      if (typeof y === "string") return function (b) {
        return b === y;
      };else if (!y) return function () {
        return !0;
      };else return y;
    }
    var s = function (b, _) {
      this.node = b, this.state = _;
    };
    function i(y, b, _, S, A) {
      if (!_) _ = h;
      var v;
      (function C(x, I, k) {
        var D = k || x.type;
        if (g(_, D, x, I, C), v !== x) b(x, I, D), v = x;
      })(y, S, A);
    }
    function a(y, b, _, S) {
      if (!_) _ = h;
      var A = [],
        v;
      (function C(x, I, k) {
        var D = k || x.type,
          P = x !== A[A.length - 1];
        if (P) A.push(x);
        if (g(_, D, x, I, C), v !== x) b(x, I || A, A, D), v = x;
        if (P) A.pop();
      })(y, S);
    }
    function l(y, b, _, S, A, v) {
      if (!A) A = h;
      S = o(S);
      try {
        (function C(x, I, k) {
          var D = k || x.type;
          if ((b == null || x.start <= b) && (_ == null || x.end >= _)) g(A, D, x, I, C);
          if ((b == null || x.start === b) && (_ == null || x.end === _) && S(D, x)) throw new s(x, I);
        })(y, v);
      } catch (C) {
        if (C instanceof s) return C;
        throw C;
      }
    }
    function c(y, b, _, S, A) {
      if (_ = o(_), !S) S = h;
      try {
        (function v(C, x, I) {
          var k = I || C.type;
          if (C.start > b || C.end < b) return;
          if (g(S, k, C, x, v), _(k, C)) throw new s(C, x);
        })(y, A);
      } catch (v) {
        if (v instanceof s) return v;
        throw v;
      }
    }
    function u(y, b, _, S, A) {
      if (_ = o(_), !S) S = h;
      try {
        (function v(C, x, I) {
          if (C.end < b) return;
          var k = I || C.type;
          if (C.start >= b && _(k, C)) throw new s(C, x);
          g(S, k, C, x, v);
        })(y, A);
      } catch (v) {
        if (v instanceof s) return v;
        throw v;
      }
    }
    function d(y, b, _, S, A) {
      if (_ = o(_), !S) S = h;
      var v;
      return function C(x, I, k) {
        if (x.start > b) return;
        var D = k || x.type;
        if (x.end <= b && (!v || v.node.end < x.end) && _(D, x)) v = new s(x, I);
        g(S, D, x, I, C);
      }(y, A), v;
    }
    function p(y, b) {
      var _ = Object.create(b || h);
      for (var S in y) _[S] = y[S];
      return _;
    }
    function f(y, b, _) {
      _(y, b);
    }
    function m(y, b, _) {}
    function g(y, b, _, S, A) {
      if (y[b] == null) throw Error("No walker function defined for node type " + b);
      y[b](_, S, A);
    }
    var h = {};
    h.Program = h.BlockStatement = h.StaticBlock = function (y, b, _) {
      for (var S = 0, A = y.body; S < A.length; S += 1) {
        var v = A[S];
        _(v, b, "Statement");
      }
    }, h.Statement = f, h.EmptyStatement = m, h.ExpressionStatement = h.ParenthesizedExpression = h.ChainExpression = function (y, b, _) {
      return _(y.expression, b, "Expression");
    }, h.IfStatement = function (y, b, _) {
      if (_(y.test, b, "Expression"), _(y.consequent, b, "Statement"), y.alternate) _(y.alternate, b, "Statement");
    }, h.LabeledStatement = function (y, b, _) {
      return _(y.body, b, "Statement");
    }, h.BreakStatement = h.ContinueStatement = m, h.WithStatement = function (y, b, _) {
      _(y.object, b, "Expression"), _(y.body, b, "Statement");
    }, h.SwitchStatement = function (y, b, _) {
      _(y.discriminant, b, "Expression");
      for (var S = 0, A = y.cases; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.SwitchCase = function (y, b, _) {
      if (y.test) _(y.test, b, "Expression");
      for (var S = 0, A = y.consequent; S < A.length; S += 1) {
        var v = A[S];
        _(v, b, "Statement");
      }
    }, h.ReturnStatement = h.YieldExpression = h.AwaitExpression = function (y, b, _) {
      if (y.argument) _(y.argument, b, "Expression");
    }, h.ThrowStatement = h.SpreadElement = function (y, b, _) {
      return _(y.argument, b, "Expression");
    }, h.TryStatement = function (y, b, _) {
      if (_(y.block, b, "Statement"), y.handler) _(y.handler, b);
      if (y.finalizer) _(y.finalizer, b, "Statement");
    }, h.CatchClause = function (y, b, _) {
      if (y.param) _(y.param, b, "Pattern");
      _(y.body, b, "Statement");
    }, h.WhileStatement = h.DoWhileStatement = function (y, b, _) {
      _(y.test, b, "Expression"), _(y.body, b, "Statement");
    }, h.ForStatement = function (y, b, _) {
      if (y.init) _(y.init, b, "ForInit");
      if (y.test) _(y.test, b, "Expression");
      if (y.update) _(y.update, b, "Expression");
      _(y.body, b, "Statement");
    }, h.ForInStatement = h.ForOfStatement = function (y, b, _) {
      _(y.left, b, "ForInit"), _(y.right, b, "Expression"), _(y.body, b, "Statement");
    }, h.ForInit = function (y, b, _) {
      if (y.type === "VariableDeclaration") _(y, b);else _(y, b, "Expression");
    }, h.DebuggerStatement = m, h.FunctionDeclaration = function (y, b, _) {
      return _(y, b, "Function");
    }, h.VariableDeclaration = function (y, b, _) {
      for (var S = 0, A = y.declarations; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.VariableDeclarator = function (y, b, _) {
      if (_(y.id, b, "Pattern"), y.init) _(y.init, b, "Expression");
    }, h.Function = function (y, b, _) {
      if (y.id) _(y.id, b, "Pattern");
      for (var S = 0, A = y.params; S < A.length; S += 1) {
        var v = A[S];
        _(v, b, "Pattern");
      }
      _(y.body, b, y.expression ? "Expression" : "Statement");
    }, h.Pattern = function (y, b, _) {
      if (y.type === "Identifier") _(y, b, "VariablePattern");else if (y.type === "MemberExpression") _(y, b, "MemberPattern");else _(y, b);
    }, h.VariablePattern = m, h.MemberPattern = f, h.RestElement = function (y, b, _) {
      return _(y.argument, b, "Pattern");
    }, h.ArrayPattern = function (y, b, _) {
      for (var S = 0, A = y.elements; S < A.length; S += 1) {
        var v = A[S];
        if (v) _(v, b, "Pattern");
      }
    }, h.ObjectPattern = function (y, b, _) {
      for (var S = 0, A = y.properties; S < A.length; S += 1) {
        var v = A[S];
        if (v.type === "Property") {
          if (v.computed) _(v.key, b, "Expression");
          _(v.value, b, "Pattern");
        } else if (v.type === "RestElement") _(v.argument, b, "Pattern");
      }
    }, h.Expression = f, h.ThisExpression = h.Super = h.MetaProperty = m, h.ArrayExpression = function (y, b, _) {
      for (var S = 0, A = y.elements; S < A.length; S += 1) {
        var v = A[S];
        if (v) _(v, b, "Expression");
      }
    }, h.ObjectExpression = function (y, b, _) {
      for (var S = 0, A = y.properties; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.FunctionExpression = h.ArrowFunctionExpression = h.FunctionDeclaration, h.SequenceExpression = function (y, b, _) {
      for (var S = 0, A = y.expressions; S < A.length; S += 1) {
        var v = A[S];
        _(v, b, "Expression");
      }
    }, h.TemplateLiteral = function (y, b, _) {
      for (var S = 0, A = y.quasis; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
      for (var C = 0, x = y.expressions; C < x.length; C += 1) {
        var I = x[C];
        _(I, b, "Expression");
      }
    }, h.TemplateElement = m, h.UnaryExpression = h.UpdateExpression = function (y, b, _) {
      _(y.argument, b, "Expression");
    }, h.BinaryExpression = h.LogicalExpression = function (y, b, _) {
      _(y.left, b, "Expression"), _(y.right, b, "Expression");
    }, h.AssignmentExpression = h.AssignmentPattern = function (y, b, _) {
      _(y.left, b, "Pattern"), _(y.right, b, "Expression");
    }, h.ConditionalExpression = function (y, b, _) {
      _(y.test, b, "Expression"), _(y.consequent, b, "Expression"), _(y.alternate, b, "Expression");
    }, h.NewExpression = h.CallExpression = function (y, b, _) {
      if (_(y.callee, b, "Expression"), y.arguments) for (var S = 0, A = y.arguments; S < A.length; S += 1) {
        var v = A[S];
        _(v, b, "Expression");
      }
    }, h.MemberExpression = function (y, b, _) {
      if (_(y.object, b, "Expression"), y.computed) _(y.property, b, "Expression");
    }, h.ExportNamedDeclaration = h.ExportDefaultDeclaration = function (y, b, _) {
      if (y.declaration) _(y.declaration, b, y.type === "ExportNamedDeclaration" || y.declaration.id ? "Statement" : "Expression");
      if (y.source) _(y.source, b, "Expression");
      if (y.attributes) for (var S = 0, A = y.attributes; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.ExportAllDeclaration = function (y, b, _) {
      if (y.exported) _(y.exported, b);
      if (_(y.source, b, "Expression"), y.attributes) for (var S = 0, A = y.attributes; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.ImportAttribute = function (y, b, _) {
      _(y.value, b, "Expression");
    }, h.ImportDeclaration = function (y, b, _) {
      for (var S = 0, A = y.specifiers; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
      if (_(y.source, b, "Expression"), y.attributes) for (var C = 0, x = y.attributes; C < x.length; C += 1) {
        var I = x[C];
        _(I, b);
      }
    }, h.ImportExpression = function (y, b, _) {
      if (_(y.source, b, "Expression"), y.options) _(y.options, b, "Expression");
    }, h.ImportSpecifier = h.ImportDefaultSpecifier = h.ImportNamespaceSpecifier = h.Identifier = h.PrivateIdentifier = h.Literal = m, h.TaggedTemplateExpression = function (y, b, _) {
      _(y.tag, b, "Expression"), _(y.quasi, b, "Expression");
    }, h.ClassDeclaration = h.ClassExpression = function (y, b, _) {
      return _(y, b, "Class");
    }, h.Class = function (y, b, _) {
      if (y.id) _(y.id, b, "Pattern");
      if (y.superClass) _(y.superClass, b, "Expression");
      _(y.body, b);
    }, h.ClassBody = function (y, b, _) {
      for (var S = 0, A = y.body; S < A.length; S += 1) {
        var v = A[S];
        _(v, b);
      }
    }, h.MethodDefinition = h.PropertyDefinition = h.Property = function (y, b, _) {
      if (y.computed) _(y.key, b, "Expression");
      if (y.value) _(y.value, b, "Expression");
    }, e.ancestor = n, e.base = h, e.findNodeAfter = u, e.findNodeAround = c, e.findNodeAt = l, e.findNodeBefore = d, e.full = i, e.fullAncestor = a, e.make = p, e.recursive = r, e.simple = t;
  });
});
function m$e(e) {
  return Object.setPrototypeOf(e, null), delete e.constructor, delete e.prototype, e;
}
function KYn(e) {
  zYn.runInContext(Ndf, e);
}
function cml(e) {
  let t = new Set(),
    n = r => r();
  return e?.addEventListener("abort", () => {
    for (let r of t) clearTimeout(r);
    t.clear();
  }, {
    once: !0
  }), {
    setTimeout: HQ((r, o) => {
      if (e?.aborted) return 0;
      let s = typeof o === "number" ? o : typeof o === "string" ? +o || 0 : 0,
        i = Number(setTimeout(() => {
          try {
            n(r);
          } catch {}
        }, s));
      return t.add(i), i;
    }),
    clearTimeout: HQ(r => {
      if (typeof r === "number" || typeof r === "string") {
        let o = typeof r === "number" ? r : +r;
        if (t.has(o)) t.delete(o), clearTimeout(o);
      }
    }),
    bindVMInvoke: r => {
      n = r;
    }
  };
}
function Bdf(e) {
  let {
      parse: t
    } = qYn(),
    n = Dko(),
    r = `(async () => {'use strict';
`,
    o = `(async () => {'use strict';
${e}
})()`,
    s = t(o, {
      ecmaVersion: "latest",
      sourceType: "script",
      allowHashBang: !0
    });
  n.full(s, u => {
    if (u.name?.startsWith(Fp)) throw SyntaxError(`Identifier '${u.name}' is reserved.`);
    if (u.type === "WithStatement") throw SyntaxError("'with' statements are not supported in workflow scripts.");
  });
  let i = [],
    a = u => {
      if (!u) return;
      i.push([u.start, ` ${Fp}((`], [u.end, "))"]);
    },
    l = u => {
      for (let d = u.length - 2; d >= 0; d--) {
        let p = u[d];
        if (p && (p.type === "FunctionDeclaration" || p.type === "FunctionExpression" || p.type === "ArrowFunctionExpression")) return p;
      }
      return;
    };
  if (n.ancestor(s, {
    VariableDeclaration(u) {
      if (u.kind === "await using") throw SyntaxError("'await using' declarations are not supported in workflow scripts.");
    },
    AwaitExpression(u) {
      a(u.argument);
    },
    ArrowFunctionExpression(u) {
      if (u.async && u.expression) a(u.body);
    },
    ForOfStatement(u) {
      if (u.await) i.push([u.right.start, ` ${Fp}a((`], [u.right.end, "))"]);
    },
    ReturnStatement(u, d, p) {
      let f = l(p);
      if (!f?.async) return;
      if (f.generator) {
        if (u.argument) i.push([u.argument.start, ` await ${Fp}((`], [u.argument.end, "))"]);
      } else a(u.argument);
    },
    YieldExpression(u, d, p) {
      let f = l(p);
      if (!(f?.async && f.generator)) return;
      if (u.delegate) {
        if (u.argument) i.push([u.argument.start, ` ${Fp}a((`], [u.argument.end, "))"]);
      } else a(u.argument);
    }
  }), i.length === 0) return e;
  i.sort((u, d) => d[0] - u[0]);
  let c = o;
  for (let [u, d] of i) c = c.slice(0, u) + d + c.slice(u);
  return c.slice(28, c.length - 5);
}
function K_t(e) {
  try {
    Function(`async function _check() {'use strict';
${e}
}`);
    let t = Bdf(e),
      n = `((${Fp} => ((${Fp}a) => async () => {'use strict';
${t}
})(${Fp}it => ({[Symbol.asyncIterator](){const ${Fp}ai = ${Fp}it[Symbol.asyncIterator];if (${Fp}ai != null && typeof ${Fp}ai !== 'function') throw new TypeError('@@asyncIterator is not a function');const ${Fp}i = ${Fp}ai != null ? ${Fp}ai.call(${Fp}it) : ${Fp}it[Symbol.iterator]();if (${Fp}i === null || (typeof ${Fp}i !== 'object' && typeof ${Fp}i !== 'function')) throw new TypeError('Iterator is not an object');const ${Fp}nxt = ${Fp}i.next;if (typeof ${Fp}nxt !== 'function') throw new TypeError('Iterator.next is not a function');const ${Fp}ret = ${Fp}i.return;const ${Fp}thr = ${Fp}i.throw;const ${Fp}w = s => ${Fp}(s).then(s => { if (s === null || (typeof s !== 'object' && typeof s !== 'function')) throw new TypeError('Iterator result is not an object'); const done = s.done; return ${Fp}(s.value).then(value => ({value, done})) });return {next:v=>${Fp}w(${Fp}nxt.call(${Fp}i,v)),return:v=>${Fp}w(typeof ${Fp}ret==='function'?${Fp}ret.call(${Fp}i,v):{value:v,done:true}),throw:e=>typeof ${Fp}thr==='function'?${Fp}w(${Fp}thr.call(${Fp}i,e)):${Fp}(typeof ${Fp}ret==='function'?${Fp}ret.call(${Fp}i):undefined).then(()=>{throw new TypeError('The iterator does not provide a throw method')})}}})))(Promise.resolve.bind(Promise)))()`;
    return {
      ok: !0,
      vmScript: new zYn.Script(n, {
        filename: "workflow.js",
        importModuleDynamically: () => {
          throw efe("import() is not available in workflow scripts.");
        }
      })
    };
  } catch (t) {
    return {
      ok: !1,
      error: `SyntaxError: ${t instanceof Error ? t.message : String(t)}`
    };
  }
}
var zYn,
  $df = "Date.now() / new Date() are unavailable in workflow scripts (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.",
  Odf = "Math.random() is unavailable in workflow scripts (breaks resume). For N independent samples, include the index in the agent label or prompt.",
  Ndf,
  YYn = 30000,
  Fp = "__wRg$";