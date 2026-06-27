// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K5a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var K5a = Q(f5n => {
  Object.defineProperty(f5n, "__esModule", {
    value: !0
  });
  f5n.PriorityQueue = void 0;
  var Umt = 0,
    JSo = e => Math.floor(e / 2),
    p5n = e => e * 2 + 1,
    uqt = e => e * 2 + 2;
  class z5a {
    constructor(e = (t, n) => t > n) {
      this.comparator = e, this.heap = [];
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this.heap[Umt];
    }
    push(...e) {
      return e.forEach(t => {
        this.heap.push(t), this.siftUp();
      }), this.size();
    }
    pop() {
      let e = this.peek(),
        t = this.size() - 1;
      if (t > Umt) this.swap(Umt, t);
      return this.heap.pop(), this.siftDown(), e;
    }
    replace(e) {
      let t = this.peek();
      return this.heap[Umt] = e, this.siftDown(), t;
    }
    greater(e, t) {
      return this.comparator(this.heap[e], this.heap[t]);
    }
    swap(e, t) {
      [this.heap[e], this.heap[t]] = [this.heap[t], this.heap[e]];
    }
    siftUp() {
      let e = this.size() - 1;
      while (e > Umt && this.greater(e, JSo(e))) this.swap(e, JSo(e)), e = JSo(e);
    }
    siftDown() {
      let e = Umt;
      while (p5n(e) < this.size() && this.greater(p5n(e), e) || uqt(e) < this.size() && this.greater(uqt(e), e)) {
        let t = uqt(e) < this.size() && this.greater(uqt(e), p5n(e)) ? uqt(e) : p5n(e);
        this.swap(e, t), e = t;
      }
    }
  }
  f5n.PriorityQueue = z5a;
});