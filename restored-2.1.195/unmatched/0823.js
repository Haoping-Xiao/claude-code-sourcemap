// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ttt
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/server.js
// class=new  jaccard=0.0559  score=0.2813  fileCov=0.0652
// note: nearest: node_modules/@grpc/grpc-js/build/src/server.js (0.0559); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ttt = Q((ISg, mgn) => {
  var H0s, T0s, v0s, w0s, C0s, I0s, x0s, k0s, R0s, L0s, D0s, P0s, M0s, pgn, DDr, $0s, O0s, N0s, ett, B0s, U0s, F0s, j0s, G0s, W0s, q0s, V0s, z0s, fgn, K0s, Y0s, X0s;
  (function (e) {
    var t = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function (r) {
      e(n(t, n(r)));
    });else if (typeof mgn === "object" && typeof mgn.exports === "object") e(n(t, n(mgn.exports)));else e(n(t));
    function n(r, o) {
      if (r !== t) if (typeof Object.create === "function") Object.defineProperty(r, "__esModule", {
        value: !0
      });else r.__esModule = !0;
      return function (s, i) {
        return r[s] = o ? o(s, i) : i;
      };
    }
  })(function (e) {
    var t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (s, i) {
      s.__proto__ = i;
    } || function (s, i) {
      for (var a in i) if (Object.prototype.hasOwnProperty.call(i, a)) s[a] = i[a];
    };
    H0s = function (s, i) {
      if (typeof i !== "function" && i !== null) throw TypeError("Class extends value " + String(i) + " is not a constructor or null");
      t(s, i);
      function a() {
        this.constructor = s;
      }
      s.prototype = i === null ? Object.create(i) : (a.prototype = i.prototype, new a());
    }, T0s = Object.assign || function (s) {
      for (var i, a = 1, l = arguments.length; a < l; a++) {
        i = arguments[a];
        for (var c in i) if (Object.prototype.hasOwnProperty.call(i, c)) s[c] = i[c];
      }
      return s;
    }, v0s = function (s, i) {
      var a = {};
      for (var l in s) if (Object.prototype.hasOwnProperty.call(s, l) && i.indexOf(l) < 0) a[l] = s[l];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var c = 0, l = Object.getOwnPropertySymbols(s); c < l.length; c++) if (i.indexOf(l[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, l[c])) a[l[c]] = s[l[c]];
      }
      return a;
    }, w0s = function (s, i, a, l) {
      var c = arguments.length,
        u = c < 3 ? i : l === null ? l = Object.getOwnPropertyDescriptor(i, a) : l,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") u = Reflect.decorate(s, i, a, l);else for (var p = s.length - 1; p >= 0; p--) if (d = s[p]) u = (c < 3 ? d(u) : c > 3 ? d(i, a, u) : d(i, a)) || u;
      return c > 3 && u && Object.defineProperty(i, a, u), u;
    }, C0s = function (s, i) {
      return function (a, l) {
        i(a, l, s);
      };
    }, I0s = function (s, i, a, l, c, u) {
      function d(v) {
        if (v !== void 0 && typeof v !== "function") throw TypeError("Function expected");
        return v;
      }
      var p = l.kind,
        f = p === "getter" ? "get" : p === "setter" ? "set" : "value",
        m = !i && s ? l.static ? s : s.prototype : null,
        g = i || (m ? Object.getOwnPropertyDescriptor(m, l.name) : {}),
        h,
        y = !1;
      for (var b = a.length - 1; b >= 0; b--) {
        var _ = {};
        for (var S in l) _[S] = S === "access" ? {} : l[S];
        for (var S in l.access) _.access[S] = l.access[S];
        _.addInitializer = function (v) {
          if (y) throw TypeError("Cannot add initializers after decoration has completed");
          u.push(d(v || null));
        };
        var A = (0, a[b])(p === "accessor" ? {
          get: g.get,
          set: g.set
        } : g[f], _);
        if (p === "accessor") {
          if (A === void 0) continue;
          if (A === null || typeof A !== "object") throw TypeError("Object expected");
          if (h = d(A.get)) g.get = h;
          if (h = d(A.set)) g.set = h;
          if (h = d(A.init)) c.unshift(h);
        } else if (h = d(A)) if (p === "field") c.unshift(h);else g[f] = h;
      }
      if (m) Object.defineProperty(m, l.name, g);
      y = !0;
    }, x0s = function (s, i, a) {
      var l = arguments.length > 2;
      for (var c = 0; c < i.length; c++) a = l ? i[c].call(s, a) : i[c].call(s);
      return l ? a : void 0;
    }, k0s = function (s) {
      return typeof s === "symbol" ? s : "".concat(s);
    }, R0s = function (s, i, a) {
      if (typeof i === "symbol") i = i.description ? "[".concat(i.description, "]") : "";
      return Object.defineProperty(s, "name", {
        configurable: !0,
        value: a ? "".concat(a, " ", i) : i
      });
    }, L0s = function (s, i) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(s, i);
    }, D0s = function (s, i, a, l) {
      function c(u) {
        return u instanceof a ? u : new a(function (d) {
          d(u);
        });
      }
      return new (a || (a = Promise))(function (u, d) {
        function p(g) {
          try {
            m(l.next(g));
          } catch (h) {
            d(h);
          }
        }
        function f(g) {
          try {
            m(l.throw(g));
          } catch (h) {
            d(h);
          }
        }
        function m(g) {
          g.done ? u(g.value) : c(g.value).then(p, f);
        }
        m((l = l.apply(s, i || [])).next());
      });
    }, P0s = function (s, i) {
      var a = {
          label: 0,
          sent: function () {
            if (u[0] & 1) throw u[1];
            return u[1];
          },
          trys: [],
          ops: []
        },
        l,
        c,
        u,
        d = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return d.next = p(0), d.throw = p(1), d.return = p(2), typeof Symbol === "function" && (d[Symbol.iterator] = function () {
        return this;
      }), d;
      function p(m) {
        return function (g) {
          return f([m, g]);
        };
      }
      function f(m) {
        if (l) throw TypeError("Generator is already executing.");
        while (d && (d = 0, m[0] && (a = 0)), a) try {
          if (l = 1, c && (u = m[0] & 2 ? c.return : m[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, m[1])).done) return u;
          if (c = 0, u) m = [m[0] & 2, u.value];
          switch (m[0]) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return a.label++, {
                value: m[1],
                done: !1
              };
            case 5:
              a.label++, c = m[1], m = [0];
              continue;
            case 7:
              m = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if ((u = a.trys, !(u = u.length > 0 && u[u.length - 1])) && (m[0] === 6 || m[0] === 2)) {
                a = 0;
                continue;
              }
              if (m[0] === 3 && (!u || m[1] > u[0] && m[1] < u[3])) {
                a.label = m[1];
                break;
              }
              if (m[0] === 6 && a.label < u[1]) {
                a.label = u[1], u = m;
                break;
              }
              if (u && a.label < u[2]) {
                a.label = u[2], a.ops.push(m);
                break;
              }
              if (u[2]) a.ops.pop();
              a.trys.pop();
              continue;
          }
          m = i.call(s, a);
        } catch (g) {
          m = [6, g], c = 0;
        } finally {
          l = u = 0;
        }
        if (m[0] & 5) throw m[1];
        return {
          value: m[0] ? m[1] : void 0,
          done: !0
        };
      }
    }, M0s = function (s, i) {
      for (var a in s) if (a !== "default" && !Object.prototype.hasOwnProperty.call(i, a)) fgn(i, s, a);
    }, fgn = Object.create ? function (s, i, a, l) {
      if (l === void 0) l = a;
      var c = Object.getOwnPropertyDescriptor(i, a);
      if (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) c = {
        enumerable: !0,
        get: function () {
          return i[a];
        }
      };
      Object.defineProperty(s, l, c);
    } : function (s, i, a, l) {
      if (l === void 0) l = a;
      s[l] = i[a];
    }, pgn = function (s) {
      var i = typeof Symbol === "function" && Symbol.iterator,
        a = i && s[i],
        l = 0;
      if (a) return a.call(s);
      if (s && typeof s.length === "number") return {
        next: function () {
          if (s && l >= s.length) s = void 0;
          return {
            value: s && s[l++],
            done: !s
          };
        }
      };
      throw TypeError(i ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, DDr = function (s, i) {
      var a = typeof Symbol === "function" && s[Symbol.iterator];
      if (!a) return s;
      var l = a.call(s),
        c,
        u = [],
        d;
      try {
        while ((i === void 0 || i-- > 0) && !(c = l.next()).done) u.push(c.value);
      } catch (p) {
        d = {
          error: p
        };
      } finally {
        try {
          if (c && !c.done && (a = l.return)) a.call(l);
        } finally {
          if (d) throw d.error;
        }
      }
      return u;
    }, $0s = function () {
      for (var s = [], i = 0; i < arguments.length; i++) s = s.concat(DDr(arguments[i]));
      return s;
    }, O0s = function () {
      for (var s = 0, i = 0, a = arguments.length; i < a; i++) s += arguments[i].length;
      for (var l = Array(s), c = 0, i = 0; i < a; i++) for (var u = arguments[i], d = 0, p = u.length; d < p; d++, c++) l[c] = u[d];
      return l;
    }, N0s = function (s, i, a) {
      if (a || arguments.length === 2) {
        for (var l = 0, c = i.length, u; l < c; l++) if (u || !(l in i)) {
          if (!u) u = Array.prototype.slice.call(i, 0, l);
          u[l] = i[l];
        }
      }
      return s.concat(u || Array.prototype.slice.call(i));
    }, ett = function (s) {
      return this instanceof ett ? (this.v = s, this) : new ett(s);
    }, B0s = function (s, i, a) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var l = a.apply(s, i || []),
        c,
        u = [];
      return c = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), p("next"), p("throw"), p("return", d), c[Symbol.asyncIterator] = function () {
        return this;
      }, c;
      function d(b) {
        return function (_) {
          return Promise.resolve(_).then(b, h);
        };
      }
      function p(b, _) {
        if (l[b]) {
          if (c[b] = function (S) {
            return new Promise(function (A, v) {
              u.push([b, S, A, v]) > 1 || f(b, S);
            });
          }, _) c[b] = _(c[b]);
        }
      }
      function f(b, _) {
        try {
          m(l[b](_));
        } catch (S) {
          y(u[0][3], S);
        }
      }
      function m(b) {
        b.value instanceof ett ? Promise.resolve(b.value.v).then(g, h) : y(u[0][2], b);
      }
      function g(b) {
        f("next", b);
      }
      function h(b) {
        f("throw", b);
      }
      function y(b, _) {
        if (b(_), u.shift(), u.length) f(u[0][0], u[0][1]);
      }
    }, U0s = function (s) {
      var i, a;
      return i = {}, l("next"), l("throw", function (c) {
        throw c;
      }), l("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function l(c, u) {
        i[c] = s[c] ? function (d) {
          return (a = !a) ? {
            value: ett(s[c](d)),
            done: !1
          } : u ? u(d) : d;
        } : u;
      }
    }, F0s = function (s) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var i = s[Symbol.asyncIterator],
        a;
      return i ? i.call(s) : (s = typeof pgn === "function" ? pgn(s) : s[Symbol.iterator](), a = {}, l("next"), l("throw"), l("return"), a[Symbol.asyncIterator] = function () {
        return this;
      }, a);
      function l(u) {
        a[u] = s[u] && function (d) {
          return new Promise(function (p, f) {
            d = s[u](d), c(p, f, d.done, d.value);
          });
        };
      }
      function c(u, d, p, f) {
        Promise.resolve(f).then(function (m) {
          u({
            value: m,
            done: p
          });
        }, d);
      }
    }, j0s = function (s, i) {
      if (Object.defineProperty) Object.defineProperty(s, "raw", {
        value: i
      });else s.raw = i;
      return s;
    };
    var n = Object.create ? function (s, i) {
        Object.defineProperty(s, "default", {
          enumerable: !0,
          value: i
        });
      } : function (s, i) {
        s.default = i;
      },
      r = function (s) {
        return r = Object.getOwnPropertyNames || function (i) {
          var a = [];
          for (var l in i) if (Object.prototype.hasOwnProperty.call(i, l)) a[a.length] = l;
          return a;
        }, r(s);
      };
    G0s = function (s) {
      if (s && s.__esModule) return s;
      var i = {};
      if (s != null) {
        for (var a = r(s), l = 0; l < a.length; l++) if (a[l] !== "default") fgn(i, s, a[l]);
      }
      return n(i, s), i;
    }, W0s = function (s) {
      return s && s.__esModule ? s : {
        default: s
      };
    }, q0s = function (s, i, a, l) {
      if (a === "a" && !l) throw TypeError("Private accessor was defined without a getter");
      if (typeof i === "function" ? s !== i || !l : !i.has(s)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return a === "m" ? l : a === "a" ? l.call(s) : l ? l.value : i.get(s);
    }, V0s = function (s, i, a, l, c) {
      if (l === "m") throw TypeError("Private method is not writable");
      if (l === "a" && !c) throw TypeError("Private accessor was defined without a setter");
      if (typeof i === "function" ? s !== i || !c : !i.has(s)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return l === "a" ? c.call(s, a) : c ? c.value = a : i.set(s, a), a;
    }, z0s = function (s, i) {
      if (i === null || typeof i !== "object" && typeof i !== "function") throw TypeError("Cannot use 'in' operator on non-object");
      return typeof s === "function" ? i === s : s.has(i);
    }, K0s = function (s, i, a) {
      if (i !== null && i !== void 0) {
        if (typeof i !== "object" && typeof i !== "function") throw TypeError("Object expected.");
        var l, c;
        if (a) {
          if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
          l = i[Symbol.asyncDispose];
        }
        if (l === void 0) {
          if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
          if (l = i[Symbol.dispose], a) c = l;
        }
        if (typeof l !== "function") throw TypeError("Object not disposable.");
        if (c) l = function () {
          try {
            c.call(this);
          } catch (u) {
            return Promise.reject(u);
          }
        };
        s.stack.push({
          value: i,
          dispose: l,
          async: a
        });
      } else if (a) s.stack.push({
        async: !0
      });
      return i;
    };
    var o = typeof SuppressedError === "function" ? SuppressedError : function (s, i, a) {
      var l = Error(a);
      return l.name = "SuppressedError", l.error = s, l.suppressed = i, l;
    };
    Y0s = function (s) {
      function i(u) {
        s.error = s.hasError ? new o(u, s.error, "An error was suppressed during disposal.") : u, s.hasError = !0;
      }
      var a,
        l = 0;
      function c() {
        while (a = s.stack.pop()) try {
          if (!a.async && l === 1) return l = 0, s.stack.push(a), Promise.resolve().then(c);
          if (a.dispose) {
            var u = a.dispose.call(a.value);
            if (a.async) return l |= 2, Promise.resolve(u).then(c, function (d) {
              return i(d), c();
            });
          } else l |= 1;
        } catch (d) {
          i(d);
        }
        if (l === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
        if (s.hasError) throw s.error;
      }
      return c();
    }, X0s = function (s, i) {
      if (typeof s === "string" && /^\.\.?\//.test(s)) return s.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, l, c, u, d) {
        return l ? i ? ".jsx" : ".js" : c && (!u || !d) ? a : c + u + "." + d.toLowerCase() + "js";
      });
      return s;
    }, e("__extends", H0s), e("__assign", T0s), e("__rest", v0s), e("__decorate", w0s), e("__param", C0s), e("__esDecorate", I0s), e("__runInitializers", x0s), e("__propKey", k0s), e("__setFunctionName", R0s), e("__metadata", L0s), e("__awaiter", D0s), e("__generator", P0s), e("__exportStar", M0s), e("__createBinding", fgn), e("__values", pgn), e("__read", DDr), e("__spread", $0s), e("__spreadArrays", O0s), e("__spreadArray", N0s), e("__await", ett), e("__asyncGenerator", B0s), e("__asyncDelegator", U0s), e("__asyncValues", F0s), e("__makeTemplateObject", j0s), e("__importStar", G0s), e("__importDefault", W0s), e("__classPrivateFieldGet", q0s), e("__classPrivateFieldSet", V0s), e("__classPrivateFieldIn", z0s), e("__addDisposableResource", K0s), e("__disposeResources", Y0s), e("__rewriteRelativeImportExtension", X0s);
  });
});