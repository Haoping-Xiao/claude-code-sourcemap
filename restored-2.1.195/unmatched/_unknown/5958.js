// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s4c
// matched 2.1.88 source: node_modules/protobufjs/src/namespace.js
// class=new  jaccard=0.0485  score=0.1931  fileCov=0.0608
// note: nearest: node_modules/protobufjs/src/namespace.js (0.0485); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module s4c] (exports=gzH, module=o4c)
var gzH = {};
var o4c = {
  exports: gzH
};
o4c.exports = tb;
tb.Node = Q7e;
tb.create = tb;
function tb(e) {
  var t = this;
  if (!(t instanceof tb)) t = new tb();
  if (t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach === "function") e.forEach(function (o) {
    t.push(o);
  });else if (arguments.length > 0) for (var n = 0, r = arguments.length; n < r; n++) t.push(arguments[n]);
  return t;
}
tb.prototype.removeNode = function (e) {
  if (e.list !== this) throw Error("removing node which does not belong to this list");
  var {
    next: t,
    prev: n
  } = e;
  if (t) t.prev = n;
  if (n) n.next = t;
  if (e === this.head) this.head = t;
  if (e === this.tail) this.tail = n;
  return e.list.length--, e.next = null, e.prev = null, e.list = null, t;
};
tb.prototype.unshiftNode = function (e) {
  if (e === this.head) return;
  if (e.list) e.list.removeNode(e);
  var t = this.head;
  if (e.list = this, e.next = t, t) t.prev = e;
  if (this.head = e, !this.tail) this.tail = e;
  this.length++;
};
tb.prototype.pushNode = function (e) {
  if (e === this.tail) return;
  if (e.list) e.list.removeNode(e);
  var t = this.tail;
  if (e.list = this, e.prev = t, t) t.next = e;
  if (this.tail = e, !this.head) this.head = e;
  this.length++;
};
tb.prototype.push = function () {
  for (var e = 0, t = arguments.length; e < t; e++) aPm(this, arguments[e]);
  return this.length;
};
tb.prototype.unshift = function () {
  for (var e = 0, t = arguments.length; e < t; e++) lPm(this, arguments[e]);
  return this.length;
};
tb.prototype.pop = function () {
  if (!this.tail) return;
  var e = this.tail.value;
  if (this.tail = this.tail.prev, this.tail) this.tail.next = null;else this.head = null;
  return this.length--, e;
};
tb.prototype.shift = function () {
  if (!this.head) return;
  var e = this.head.value;
  if (this.head = this.head.next, this.head) this.head.prev = null;else this.tail = null;
  return this.length--, e;
};
tb.prototype.forEach = function (e, t) {
  t = t || this;
  for (var n = this.head, r = 0; n !== null; r++) e.call(t, n.value, r, this), n = n.next;
};
tb.prototype.forEachReverse = function (e, t) {
  t = t || this;
  for (var n = this.tail, r = this.length - 1; n !== null; r--) e.call(t, n.value, r, this), n = n.prev;
};
tb.prototype.get = function (e) {
  for (var t = 0, n = this.head; n !== null && t < e; t++) n = n.next;
  if (t === e && n !== null) return n.value;
};
tb.prototype.getReverse = function (e) {
  for (var t = 0, n = this.tail; n !== null && t < e; t++) n = n.prev;
  if (t === e && n !== null) return n.value;
};
tb.prototype.map = function (e, t) {
  t = t || this;
  var n = new tb();
  for (var r = this.head; r !== null;) n.push(e.call(t, r.value, this)), r = r.next;
  return n;
};
tb.prototype.mapReverse = function (e, t) {
  t = t || this;
  var n = new tb();
  for (var r = this.tail; r !== null;) n.push(e.call(t, r.value, this)), r = r.prev;
  return n;
};
tb.prototype.reduce = function (e, t) {
  var n,
    r = this.head;
  if (arguments.length > 1) n = t;else if (this.head) r = this.head.next, n = this.head.value;else throw TypeError("Reduce of empty list with no initial value");
  for (var o = 0; r !== null; o++) n = e(n, r.value, o), r = r.next;
  return n;
};
tb.prototype.reduceReverse = function (e, t) {
  var n,
    r = this.tail;
  if (arguments.length > 1) n = t;else if (this.tail) r = this.tail.prev, n = this.tail.value;else throw TypeError("Reduce of empty list with no initial value");
  for (var o = this.length - 1; r !== null; o--) n = e(n, r.value, o), r = r.prev;
  return n;
};
tb.prototype.toArray = function () {
  var e = Array(this.length);
  for (var t = 0, n = this.head; n !== null; t++) e[t] = n.value, n = n.next;
  return e;
};
tb.prototype.toArrayReverse = function () {
  var e = Array(this.length);
  for (var t = 0, n = this.tail; n !== null; t++) e[t] = n.value, n = n.prev;
  return e;
};
tb.prototype.slice = function (e, t) {
  if (t = t || this.length, t < 0) t += this.length;
  if (e = e || 0, e < 0) e += this.length;
  var n = new tb();
  if (t < e || t < 0) return n;
  if (e < 0) e = 0;
  if (t > this.length) t = this.length;
  for (var r = 0, o = this.head; o !== null && r < e; r++) o = o.next;
  for (; o !== null && r < t; r++, o = o.next) n.push(o.value);
  return n;
};
tb.prototype.sliceReverse = function (e, t) {
  if (t = t || this.length, t < 0) t += this.length;
  if (e = e || 0, e < 0) e += this.length;
  var n = new tb();
  if (t < e || t < 0) return n;
  if (e < 0) e = 0;
  if (t > this.length) t = this.length;
  for (var r = this.length, o = this.tail; o !== null && r > t; r--) o = o.prev;
  for (; o !== null && r > e; r--, o = o.prev) n.push(o.value);
  return n;
};
tb.prototype.splice = function (e, t, ...n) {
  if (e > this.length) e = this.length - 1;
  if (e < 0) e = this.length + e;
  for (var r = 0, o = this.head; o !== null && r < e; r++) o = o.next;
  var s = [];
  for (var r = 0; o && r < t; r++) s.push(o.value), o = this.removeNode(o);
  if (o === null) o = this.tail;
  if (o !== this.head && o !== this.tail) o = o.prev;
  for (var r = 0; r < n.length; r++) o = iPm(this, o, n[r]);
  return s;
};
tb.prototype.reverse = function () {
  var e = this.head,
    t = this.tail;
  for (var n = e; n !== null; n = n.prev) {
    var r = n.prev;
    n.prev = n.next, n.next = r;
  }
  return this.head = t, this.tail = e, this;
};
function iPm(e, t, n) {
  var r = t === e.head ? new Q7e(n, null, t, e) : new Q7e(n, t, t.next, e);
  if (r.next === null) e.tail = r;
  if (r.prev === null) e.head = r;
  return e.length++, r;
}
function aPm(e, t) {
  if (e.tail = new Q7e(t, e.tail, null, e), !e.head) e.head = e.tail;
  e.length++;
}
function lPm(e, t) {
  if (e.head = new Q7e(t, null, e.head, e), !e.tail) e.tail = e.head;
  e.length++;
}
function Q7e(e, t, n, r) {
  if (!(this instanceof Q7e)) return new Q7e(e, t, n, r);
  if (this.list = r, this.value = e, t) t.next = this, this.prev = t;else this.prev = null;
  if (n) n.prev = this, this.next = n;else this.next = null;
}
try {
  r4c()(tb);
} catch (e) {}