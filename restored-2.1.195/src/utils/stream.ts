// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eLe
// matched 2.1.88 source: src/utils/stream.ts
// class=modified  jaccard=0.5452  score=0.5452  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var eLe = E(() => {
  E4 = class E4 {
    returned;
    queue = [];
    readResolve;
    readReject;
    isDone = !1;
    hasError;
    started = !1;
    constructor(e) {
      this.returned = e;
    }
    [Symbol.asyncIterator]() {
      if (this.started) throw Error("Stream can only be iterated once");
      return ((this.started = !0), this);
    }
    next() {
      if (this.queue.length > 0)
        return Promise.resolve({
          done: !1,
          value: this.queue.shift(),
        });
      if (this.isDone)
        return Promise.resolve({
          done: !0,
          value: void 0,
        });
      if (this.hasError) return Promise.reject(this.hasError);
      return new Promise((e, t) => {
        ((this.readResolve = e), (this.readReject = t));
      });
    }
    enqueue(e) {
      if (this.readResolve) {
        let t = this.readResolve;
        ((this.readResolve = void 0),
          (this.readReject = void 0),
          t({
            done: !1,
            value: e,
          }));
      } else this.queue.push(e);
    }
    done() {
      if (((this.isDone = !0), this.readResolve)) {
        let e = this.readResolve;
        ((this.readResolve = void 0),
          (this.readReject = void 0),
          e({
            done: !0,
            value: void 0,
          }));
      }
    }
    error(e) {
      if (((this.hasError = e), this.readReject)) {
        let t = this.readReject;
        ((this.readResolve = void 0), (this.readReject = void 0), t(e));
      }
    }
    return() {
      if (((this.isDone = !0), this.returned)) this.returned();
      return Promise.resolve({
        done: !0,
        value: void 0,
      });
    }
  };
});
async function* jct(e, t) {
  let n = new E4(),
    r = {
      ...t,
      onCompactEvent: (a) => n.enqueue(a),
    },
    o = (a) => {
      n.enqueue({
        type: "notification",
        notification: a,
      });
    },
    s = (a) => {
      n.enqueue(a);
    },
    i;
  return (
    e(r, o, s).then(
      (a) => {
        ((i = a), n.done());
      },
      (a) => n.error(a),
    ),
    yield* n,
    i
  );
}
