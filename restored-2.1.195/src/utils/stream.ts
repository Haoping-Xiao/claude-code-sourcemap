// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eLe
// matched 2.1.88 source: src/utils/stream.ts
// class=modified  jaccard=0.7643  score=0.777  fileCov=0.979
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eLe]
E4 = class E4 {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = false;
  hasError;
  started = false;
  constructor(e) {
    this.returned = e;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return ((this.started = true), this);
  }
  next() {
    if (this.queue.length > 0)
      return Promise.resolve({
        done: false,
        value: this.queue.shift(),
      });
    if (this.isDone)
      return Promise.resolve({
        done: true,
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
          done: false,
          value: e,
        }));
    } else this.queue.push(e);
  }
  done() {
    if (((this.isDone = true), this.readResolve)) {
      let e = this.readResolve;
      ((this.readResolve = void 0),
        (this.readReject = void 0),
        e({
          done: true,
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
    if (((this.isDone = true), this.returned)) this.returned();
    return Promise.resolve({
      done: true,
      value: void 0,
    });
  }
};
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
