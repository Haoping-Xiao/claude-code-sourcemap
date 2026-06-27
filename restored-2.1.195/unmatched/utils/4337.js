// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zyl
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/typescript.js
// class=new  jaccard=0.0551  score=0.1764  fileCov=0.0742
// note: nearest: node_modules/highlight.js/lib/languages/typescript.js (0.0551); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zyl = E(() => {
  kt();
  Du();
  Q0o();
  eXn();
  X6e();
  je();
  At();
  co();
  lg();
  Jt();
  mzt();
  Xyl();
  Qyl = require("crypto");
});
function Nmf(e) {
  let t = [],
    n = [],
    r = 0;
  function o(i, a) {
    if (r >= e_l) return;
    if (r += a.length, i.push(a), r >= e_l) i.push("[console output truncated at 50MB]");
  }
  function s(i) {
    return i.map(a => {
      if (typeof a === "string") return a;
      try {
        return e.stringify(a, null, 2);
      } catch {
        return e.toStr(a);
      }
    }).join(" ");
  }
  return {
    log: (...i) => o(t, s(i)),
    info: (...i) => o(t, s(i)),
    debug: (...i) => o(t, s(i)),
    error: (...i) => o(n, s(i)),
    warn: (...i) => o(n, s(i)),
    getStdout: () => t.join(`
`),
    getStderr: () => n.join(`
`),
    clear: () => {
      t.length = 0, n.length = 0, r = 0;
    }
  };
}
function wzt(e) {
  return typeof e === "object" && e !== null && r_l.has(e);
}
function _S(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  } catch {
    throw new vzt(t);
  }
}
function o_l(e) {
  let t = new Set([...Bmf, ...n_l, ...e.toolWrapperNames]);
  for (let n of t) {
    let r = Object.getOwnPropertyDescriptor(e.vmContext, n);
    if (r && !r.configurable) return n;
  }
  return null;
}
function Tzt(e) {
  Object.setPrototypeOf(e, null);
  try {
    delete e.constructor, delete e.prototype;
  } catch {}
  return e;
}
function Umf(e) {
  let t = J6e.runInContext(`(() => {
      // Capture intrinsics in closure NOW (literal-eval time, pre-user-code).
      // Global identifiers inside these function bodies resolve at CALL time
      // via globalThis \u2014 hardenVMIntrinsics freezes the String/Object
      // constructor OBJECTS but the globalThis bindings stay writable, so VM
      // code can reassign globalThis.String and a call-time lookup would use
      // it (same convention as createVMClone in vmHardening.ts). The
      // value-captured members below (Err/stringify/parse/toStr/exotics) are
      // immune by construction.
      const _String = String, _keys = Object.keys,
            _defineProperty = Object.defineProperty, _isArray = Array.isArray
      // Single error-message extractor for EVERY catch in this literal
      // (also exported as errMsg). Read .message ONCE \u2014 a stateful accessor
      // can return a string to a typeof check and a hostile VM value to a
      // re-read, smuggling a non-string into {error} objects that cross to
      // the host. String() fallback via the captured intrinsic; never
      // throws ('<unprintable thrown value>' for poison getters), so a
      // throwing getter can't turn an {error} return into a raw rejection.
      const _errStr = (e) => {
        try {
          const m = e?.message
          return typeof m === 'string' ? m : _String(e)
        } catch {
          return '<unprintable thrown value>'
        }
      }
      return {
      arr: () => [],
      obj: () => ({}),
      wrap: (hostFn, cloneFn) => (input) => {
        const p = (async () => {
          try { return cloneFn(await hostFn(input)) }
          catch (e) {
            if (e?.name === 'ReplayCacheExhausted') throw e
            return { error: _errStr(e) }
          }
        })()
        p.catch(() => {})
        return p
      },
      wrapN: (hostFn, cloneFn) => (...args) => {
        const p = (async () => {
          try { return cloneFn(await hostFn(...args)) }
          catch (e) {
            if (e?.name === 'ReplayCacheExhausted') throw e
            return { error: _errStr(e) }
          }
        })()
        p.catch(() => {})
        return p
      },
      wrapPropagate: (hostFn, cloneFn, Err) => (input) => {
        const p = (async () => {
          try { return cloneFn(await hostFn(input)) }
          catch (e) {
            const err = new Err(_errStr(e))
            // Read .name once for the same stateful-accessor reason.
            const n = e?.name
            if (typeof n === 'string') {
              _defineProperty(err, 'name', { value: n, configurable: true, writable: true })
            }
            throw err
          }
        })()
        p.catch(() => {})
        return p
      },
      callVM: (vmFn, cloneFn) => async (input) => ({__proto__: null, v: cloneFn(await vmFn(input))}),
      resolveDeep: async (v, cloneFn) => {
        // This catch's return is the one resolveDeep exit that bypasses
        // cloneFn, so the {error} value MUST be a primitive \u2014 _errStr
        // guarantees a string, keeping raw VM objects from crossing the
        // boundary by identity.
        try { v = await v } catch (e) { return {__proto__: null, v: { error: _errStr(e) }} }
        if (v !== null && typeof v === 'object' && !_isArray(v)) {
          try {
            for (const k of _keys(v)) {
              try {
                const val = v[k]
                if (val === null || typeof val !== 'object' || typeof val.then !== 'function') continue
                _defineProperty(v, k, { value: await val, writable: true, enumerable: true, configurable: true })
              } catch (e) {
                _defineProperty(v, k, { value: { error: _errStr(e) }, writable: true, enumerable: true, configurable: true })
              }
            }
          } catch {}
        }
        try { return {__proto__: null, v: cloneFn(v)} } catch { return {__proto__: null, v: undefined} }
      },
      awaitVM: async (v) => v,
      exotics: new Set([
        Date, Map, Set, WeakMap, WeakSet, RegExp, Promise,
        Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError,
        ArrayBuffer, SharedArrayBuffer, DataView,
        Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
        Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array,
        ...(typeof URL !== 'undefined' ? [URL] : []),
      ].map(C => C.prototype)),
      Err: Error,
      stringify: JSON.stringify,
      parse: JSON.parse,
      toStr: String,
      errMsg: _errStr,
      }
    })()`, e);
  function n(a) {
    let l;
    try {
      l = t.errMsg(a);
    } catch {
      return "<unprintable thrown value>";
    }
    return typeof l === "string" ? l : "<unprintable thrown value>";
  }
  function r(a, l = new WeakMap(), c = !0) {
    if (typeof a === "function") return;
    if (a === null || typeof a !== "object") return a;
    if (oRo.types.isProxy(a)) return;
    let u = l.get(a);
    if (u !== void 0) return u;
    if (!Object.hasOwn(a, "then") && !Object.hasOwn(a, "toJSON") && !Object.hasOwn(a, "toString") && !Object.hasOwn(a, "valueOf") && !Object.hasOwn(a, Symbol.toPrimitive) && t.exotics.has(Object.getPrototypeOf(a))) {
      if (c) try {
        Object.preventExtensions(a);
      } catch {
        return;
      }
      return a;
    }
    if (Array.isArray(a)) {
      let p = t.arr();
      l.set(a, p);
      let f = Number.isSafeInteger(a.length) ? a.length : 0,
        m = Math.min(f, 4096);
      for (let g = 0; g < m; g++) {
        let h = Object.getOwnPropertyDescriptor(a, g);
        p[g] = r(h && "value" in h ? h.value : void 0, l, c);
      }
      return p.length = f, p;
    }
    let d = t.obj();
    l.set(a, d);
    for (let p of Object.keys(a)) {
      let f = Object.getOwnPropertyDescriptor(a, p);
      Object.defineProperty(d, p, {
        value: r(f && "value" in f ? f.value : void 0, l, c),
        writable: !0,
        enumerable: !0,
        configurable: !0
      });
    }
    return d;
  }
  let o = new WeakSet();
  function s(a) {
    return o.add(a), a;
  }
  function i(a) {
    throw new t.Err(n(a));
  }
  return {
    fn: a => Tzt((...l) => {
      try {
        return a(...l);
      } catch (c) {
        i(c);
      }
    }),
    clone: r,
    throwVM: a => {
      throw new t.Err(a);
    },
    stringify: t.stringify,
    parse: t.parse,
    toStr: t.toStr,
    errMsg: n,
    asyncData: a => {
      let l = Tzt(c => a(c));
      return s(t.wrap(l, r));
    },
    asyncDataN: a => {
      let l = Tzt((...c) => a(...c));
      return s(t.wrapN(l, r));
    },
    asyncDataPropagate: a => {
      let l = Tzt(c => a(c));
      return s(t.wrapPropagate(l, r, t.Err));
    },
    asyncDataVM: a => {
      let l = u => r(u, void 0, !1),
        c = t.wrap(a, r);
      return s(Tzt(u => {
        try {
          return c(l(u));
        } catch (d) {
          i(d);
        }
      }));
    },
    hostCallVM: a => {
      let l = t.callVM(a, r);
      return c => l(r(c));
    },
    resolveDeep: a => t.resolveDeep(a, r),
    awaitVM: t.awaitVM,
    isSealedAsync: a => typeof a === "function" && o.has(a)
  };
}
function rXn(e, t) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n && "value" in n ? n.value : void 0;
}
function s_l(e, t, n, r, o, s, i, a, l) {
  let c = {
    __proto__: null,
    log: t.fn(n.log),
    info: t.fn(n.info),
    debug: t.fn(n.debug),
    error: t.fn(n.error),
    warn: t.fn(n.warn)
  };
  _S(e, "console", c);
  for (let [p, f] of Object.entries(r)) _S(e, p, t.asyncData(f));
  for (let [p, f] of Object.entries(o)) _S(e, p, t.asyncDataN(f));
  let u = J6e.runInContext('(f) => { try { if (typeof f === "function") f() } catch {} }', e);
  _S(e, "setTimeout", t.fn((p, f) => {
    if (typeof p !== "function") return 0;
    let m = Number(setTimeout(() => u(p), typeof f === "number" ? f : void 0));
    return a.add(m), m;
  })), _S(e, "clearTimeout", t.fn(p => {
    if (typeof p !== "number") return;
    clearTimeout(p), a.delete(p);
  })), _S(e, "setInterval", t.fn((p, f) => {
    if (typeof p !== "function") return 0;
    let m = Number(setInterval(() => u(p), typeof f === "number" ? f : void 0));
    return a.add(m), m;
  })), _S(e, "clearInterval", t.fn(p => {
    if (typeof p !== "number") return;
    clearInterval(p), a.delete(p);
  })), _S(e, "atob", t.fn(p => atob(t.toStr(p)))), _S(e, "btoa", t.fn(p => btoa(t.toStr(p)))), _S(e, "shQuote", t.fn(p => `'${t.toStr(p).replaceAll("'", "'\\''")}'`));
  let d = t.fn((p, f, m, g, h) => {
    if (typeof p !== "string" || !Omf.test(p)) t.throwVM(`registerTool: name must match ^[a-zA-Z0-9_-]{1,111}$ (wire name is prefixed with 'eval_registered__'), got ${typeof p}: ${t.toStr(p).slice(0, 50)}`);
    if (i.has(p) && !s.has(p)) t.throwVM(`registerTool: '${p}' collides with a built-in global; choose a different name`);
    let y = t.parse(t.stringify(m) ?? "null");
    if (y === null || typeof y !== "object" || Array.isArray(y)) t.throwVM(`registerTool: schema must be a JSON-serializable object, got ${y === null ? "null" : Array.isArray(y) ? "array" : typeof y}`);
    let {
        displayName: b
      } = i_l(h, ["displayName"]),
      _ = t.toStr(f),
      S = b == null ? void 0 : t.toStr(b);
    _S(e, p, t.asyncDataVM(g)), s.set(p, {
      name: p,
      description: _,
      schema: y,
      handler: t.hostCallVM(g),
      displayName: S
    });
  });
  _S(e, "registerTool", d), _S(e, "unregisterTool", t.fn(p => {
    if (!s.has(p)) return !1;
    s.delete(p);
    try {
      delete e[p];
    } catch {
      throw new vzt(p);
    }
    return !0;
  })), _S(e, "listTools", t.fn(() => t.clone([...s.keys()]))), Vmf(e, t, l, c.log), _S(e, "getTool", t.fn(p => {
    let f = s.get(p);
    return f ? t.clone({
      name: f.name,
      description: f.description,
      schema: f.schema,
      displayName: f.displayName
    }) : void 0;
  }));
}
function i_l(e, t) {
  let n = {};
  if (e === null || typeof e !== "object" || oRo.types.isProxy(e)) return n;
  for (let r of t) {
    let o = Object.getOwnPropertyDescriptor(e, r);
    if (!o || !("value" in o)) continue;
    let s = o.value;
    if (typeof s === "string" || typeof s === "number" || typeof s === "boolean") n[r] = s;
  }
  return n;
}
function Vmf(e, t, n, r) {
  function o(u) {
    let d = t.toStr(u);
    return nXn.isAbsolute(d) ? d : nXn.resolve(n.cwd, d);
  }
  function s(u, d) {
    let p = rXn(e, u);
    if (typeof p !== "function" || !t.isSealedAsync(p)) t.throwVM(`${u} tool is not available in this REPL context`);
    return p(d);
  }
  function i(u) {
    return u !== null && typeof u === "object" ? u : {};
  }
  function a(u, d) {
    return typeof u[d] === "string" ? u[d] : "";
  }
  function l(u) {
    if (u !== void 0) return {
      path: o(u)
    };
    return n.cwd !== $t() ? {
      path: n.cwd
    } : {};
  }
  async function c(u, d) {
    let p = Su(),
      f = n.cwd === $t() ? "" : p ? `cd ${zmf(n.cwd)} && ` : `Set-Location -LiteralPath ${Fat(n.cwd, "the REPL working directory")}; `,
      m = i(await s(p ? Co : Ss, {
        command: f + u,
        ...(typeof d === "number" && {
          timeout: d
        })
      })),
      g = a(m, "stdout"),
      h = a(m, "stderr"),
      y = a(m, "error");
    return [g, h && `[stderr]
${h}`, y && `[error] ${y}`].filter(Boolean).join(`
`);
  }
  _S(e, "sh", t.asyncDataN((u, d) => c(t.toStr(u), d))), _S(e, "gh", t.asyncDataN(u => {
    let d = t.toStr(u).trim(),
      p = n.repo;
    if (p && !qmf.test(d)) {
      if (Wmf.test(d)) d = `${d} -R ${p}`;
      d = d.replaceAll("repos/:owner/:repo", `repos/${p}`);
    }
    return c(`gh ${d}`);
  })), _S(e, "cat", t.asyncDataN(async (u, d, p) => {
    let f = i(await s(Fmf, {
        file_path: o(u),
        ...(typeof d === "number" && {
          offset: d
        }),
        ...(typeof p === "number" && {
          limit: p
        })
      })),
      m = i(f.file);
    return a(m, "content") || a(f, "error");
  })), _S(e, "rg", t.asyncDataN(async (u, d, p) => {
    let f = i_l(p, Gmf),
      m = i(await s(t_l, {
        pattern: t.toStr(u),
        output_mode: "content",
        "-n": !0,
        ...l(d),
        ...(f.A !== void 0 && {
          "-A": f.A
        }),
        ...(f.B !== void 0 && {
          "-B": f.B
        }),
        ...(f.C !== void 0 && {
          "-C": f.C
        }),
        ...(f.glob !== void 0 && {
          glob: f.glob
        }),
        ...(f.head !== void 0 && {
          head_limit: f.head
        }),
        ...(f.type !== void 0 && {
          type: f.type
        }),
        ...(f.i !== void 0 && {
          "-i": f.i
        })
      }));
    return a(m, "content") || a(m, "error");
  })), _S(e, "rgf", t.asyncDataN(async (u, d, p) => {
    let f = i(await s(t_l, {
      pattern: t.toStr(u),
      output_mode: "files_with_matches",
      ...l(d),
      ...(typeof p === "string" && {
        glob: p
      })
    }));
    return Array.isArray(f.filenames) ? f.filenames : [];
  })), _S(e, "gl", t.asyncDataN(async (u, d) => {
    let p = i(await s(wu, {
      pattern: t.toStr(u),
      ...l(d)
    }));
    return Array.isArray(p.filenames) ? p.filenames : [];
  })), _S(e, "put", t.asyncDataN(async (u, d) => {
    let p = i(await s(jmf, {
        file_path: o(u),
        content: t.toStr(d)
      })),
      f = a(p, "error");
    return f ? `[error] ${f}` : "";
  })), _S(e, "chdir", t.fn(u => {
    n.cwd = o(u);
  })), _S(e, "log", r), _S(e, "str", t.fn((u, d, p) => {
    if (typeof d === "function") t.throwVM("str: function replacer not supported");
    return t.stringify(u, d, p);
  }));
}
function zmf(e) {
  return `'${e.replaceAll("'", "'\\''")}'`;
}
function oXn(e, t) {
  if (e.helperState.cwd = $t(), t !== void 0) e.helperState.repo = t;
  _S(e.vmContext, "REPO", e.helperState.repo ?? ""), _S(e.vmContext, "o", e.sealers.clone({}));
}
function sXn(e, t) {
  let n = t === void 0 ? rXn(e.vmContext, "o") : t;
  return e.sealers.resolveDeep(n);
}
function iXn(e, t, n, r, o) {
  let s = new Map(),
    i = new Set(),
    a = new Set(),
    l = {
      cwd: $t(),
      repo: void 0
    },
    c = J6e.createContext({
      __proto__: null
    }, {
      codeGeneration: {
        strings: !0,
        wasm: !1
      }
    }),
    u = Umf(c),
    d = Nmf(u);
  J6e.runInContext(`Promise.prototype.toString = function () {
      throw new TypeError(
        "REPL: unawaited Promise coerced to string. Shorthand results used " +
        "inline need 'await' \u2014 e.g. const c = await cat(f); put(f, c + s). " +
        "Auto-await applies only to o.* keys at return time.",
      )
    }`, c), x6e(c);
  let p = rRo(e.filter(m => !Ql(m, Fm)), t, n, r, o),
    f = J0o(u.stringify, t, o);
  s_l(c, u, d, p, f, s, i, a, l), Object.keys(c).forEach(m => i.add(m)), n_l.forEach(m => i.add(m));
  try {
    J6e.runInContext("Object.getOwnPropertyNames(globalThis)", c).forEach(g => i.add(g));
  } catch {
    ["JSON", "Array", "Object", "Promise", "globalThis"].forEach(m => i.add(m));
  }
  return i.add("__proto__"), {
    vmContext: c,
    registeredTools: s,
    reservedGlobals: i,
    toolWrapperNames: new Set([...Object.keys(p), ...Object.keys(f)]),
    boundaryUuid: null,
    console: d,
    sealers: u,
    activeTimers: a,
    clearAllTimers: () => {
      for (let m of a) clearTimeout(m);
      a.clear();
    },
    replayLog: [],
    helperState: l
  };
}
function a_l(e, t, n, r, o, s) {
  let i = rRo(t.filter(l => !Ql(l, Fm)), n, r, o, s),
    a = J0o(e.sealers.stringify, n, s);
  s_l(e.vmContext, e.sealers, e.console, i, a, e.registeredTools, e.reservedGlobals, e.activeTimers, e.helperState);
  for (let l of Object.keys(i)) e.toolWrapperNames.add(l);
  for (let l of Object.keys(a)) e.toolWrapperNames.add(l);
}
var nXn,
  oRo,
  J6e,
  Omf,
  n_l,
  e_l = 52428800,
  r_l,
  vzt,
  Bmf,
  Fmf = "Read",
  jmf = "Write",
  t_l = "Grep",
  Gmf,
  Wmf,
  qmf;