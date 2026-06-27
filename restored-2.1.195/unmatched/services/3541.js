// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N3n
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var N3n = Q((C__, MFa) => {
  MFa.exports = b_;
  var CJ = Ode(),
    Kyo,
    O3n = CJ.LongBits,
    LFa = CJ.base64,
    DFa = CJ.utf8;
  function l5t(e, t, n) {
    this.fn = e, this.len = t, this.next = void 0, this.val = n;
  }
  function Xyo() {}
  function e1p(e) {
    this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
  }
  function b_() {
    this.len = 0, this.head = new l5t(Xyo, 0, 0), this.tail = this.head, this.states = null;
  }
  var PFa = function () {
    return CJ.Buffer ? function () {
      return (b_.create = function () {
        return new Kyo();
      })();
    } : function () {
      return new b_();
    };
  };
  b_.create = PFa();
  b_.alloc = function (t) {
    return new CJ.Array(t);
  };
  if (CJ.Array !== Array) b_.alloc = CJ.pool(b_.alloc, CJ.Array.prototype.subarray);
  b_.prototype._push = function (t, n, r) {
    return this.tail = this.tail.next = new l5t(t, n, r), this.len += n, this;
  };
  function Jyo(e, t, n) {
    t[n] = e & 255;
  }
  function t1p(e, t, n) {
    while (e > 127) t[n++] = e & 127 | 128, e >>>= 7;
    t[n] = e;
  }
  function Qyo(e, t) {
    this.len = e, this.next = void 0, this.val = t;
  }
  Qyo.prototype = Object.create(l5t.prototype);
  Qyo.prototype.fn = t1p;
  b_.prototype.uint32 = function (t) {
    return this.len += (this.tail = this.tail.next = new Qyo((t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this;
  };
  b_.prototype.int32 = function (t) {
    return t < 0 ? this._push(Zyo, 10, O3n.fromNumber(t)) : this.uint32(t);
  };
  b_.prototype.sint32 = function (t) {
    return this.uint32((t << 1 ^ t >> 31) >>> 0);
  };
  function Zyo(e, t, n) {
    while (e.hi) t[n++] = e.lo & 127 | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
    while (e.lo > 127) t[n++] = e.lo & 127 | 128, e.lo = e.lo >>> 7;
    t[n++] = e.lo;
  }
  b_.prototype.uint64 = function (t) {
    var n = O3n.from(t);
    return this._push(Zyo, n.length(), n);
  };
  b_.prototype.int64 = b_.prototype.uint64;
  b_.prototype.sint64 = function (t) {
    var n = O3n.from(t).zzEncode();
    return this._push(Zyo, n.length(), n);
  };
  b_.prototype.bool = function (t) {
    return this._push(Jyo, 1, t ? 1 : 0);
  };
  function Yyo(e, t, n) {
    t[n] = e & 255, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24;
  }
  b_.prototype.fixed32 = function (t) {
    return this._push(Yyo, 4, t >>> 0);
  };
  b_.prototype.sfixed32 = b_.prototype.fixed32;
  b_.prototype.fixed64 = function (t) {
    var n = O3n.from(t);
    return this._push(Yyo, 4, n.lo)._push(Yyo, 4, n.hi);
  };
  b_.prototype.sfixed64 = b_.prototype.fixed64;
  b_.prototype.float = function (t) {
    return this._push(CJ.float.writeFloatLE, 4, t);
  };
  b_.prototype.double = function (t) {
    return this._push(CJ.float.writeDoubleLE, 8, t);
  };
  var n1p = CJ.Array.prototype.set ? function (t, n, r) {
    n.set(t, r);
  } : function (t, n, r) {
    for (var o = 0; o < t.length; ++o) n[r + o] = t[o];
  };
  b_.prototype.bytes = function (t) {
    var n = t.length >>> 0;
    if (!n) return this._push(Jyo, 1, 0);
    if (CJ.isString(t)) {
      var r = b_.alloc(n = LFa.length(t));
      LFa.decode(t, r, 0), t = r;
    }
    return this.uint32(n)._push(n1p, n, t);
  };
  b_.prototype.string = function (t) {
    var n = DFa.length(t);
    return n ? this.uint32(n)._push(DFa.write, n, t) : this._push(Jyo, 1, 0);
  };
  b_.prototype.fork = function () {
    return this.states = new e1p(this), this.head = this.tail = new l5t(Xyo, 0, 0), this.len = 0, this;
  };
  b_.prototype.reset = function () {
    if (this.states) this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next;else this.head = this.tail = new l5t(Xyo, 0, 0), this.len = 0;
    return this;
  };
  b_.prototype.ldelim = function () {
    var t = this.head,
      n = this.tail,
      r = this.len;
    if (this.reset().uint32(r), r) this.tail.next = t.next, this.tail = n, this.len += r;
    return this;
  };
  b_.prototype.finish = function () {
    var t = this.head.next,
      n = this.constructor.alloc(this.len),
      r = 0;
    while (t) t.fn(t.val, n, r), r += t.len, t = t.next;
    return n;
  };
  b_._configure = function (e) {
    Kyo = e, b_.create = PFa(), Kyo._configure();
  };
});