// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tvt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tvt = E(() => {
  jpr();
  wr();
  uf();
  Is();
  hkc = R(lt(), 1), ykc = R(se(), 1);
});
function bkc() {
  return {
    scanStates: new Map(),
    inFlightScans: new Set()
  };
}
async function Skc(e, t) {
  let {
    scanStates: n,
    inFlightScans: r
  } = e;
  if (r.has(t)) return null;
  r.add(t);
  try {
    let o = await _kc.open(t, "r");
    try {
      let {
          size: s,
          ino: i
        } = await o.stat(),
        a = n.get(t);
      if (a && (a.ino !== i || a.offset > s)) a = void 0;
      if (a && a.tail.length > 0) {
        let f = Buffer.alloc(a.tail.length),
          {
            bytesRead: m
          } = await o.read(f, 0, f.length, a.offset - f.length);
        if (m !== f.length || !f.equals(a.tail)) a = void 0;
      }
      if (!a) a = {
        ino: i,
        offset: 0,
        tail: Buffer.alloc(0),
        count: 0,
        recent: []
      }, n.set(t, a);
      if (s > a.offset) {
        let f = a.count,
          m = a.recent.slice(),
          g = Buffer.alloc(Math.min(mTm, s - a.offset)),
          h = null,
          y = a.offset,
          b = a.offset,
          _ = a.tail;
        while (y < s) {
          let {
            bytesRead: S
          } = await o.read(g, 0, Math.min(g.length, s - y), y);
          if (S <= 0) break;
          let A = g.subarray(0, S),
            v = h ? h.length : 0,
            C = h ? Buffer.concat([h, A]) : A,
            x = 0,
            I = C.indexOf(10, v);
          while (I !== -1) {
            let k = C.toString("utf-8", x, I);
            if (k.includes(gTm)) {
              let D = k.match(hTm),
                P = D ? Date.parse(D[1]) : NaN;
              if (Number.isFinite(P)) {
                if (f++, m.push(P), m.length > fTm) m.shift();
              }
            }
            x = I + 1, I = C.indexOf(10, x);
          }
          if (b += x, y += S, x >= CKo) _ = Buffer.from(C.subarray(x - CKo, x));else if (x > 0) {
            let k = Buffer.concat([_, C.subarray(0, x)]);
            _ = k.subarray(Math.max(0, k.length - CKo));
          }
          h = x < C.length ? Buffer.from(C.subarray(x)) : null;
        }
        if (b > a.offset) a.offset = b, a.count = f, a.recent = m, a.tail = _;
      }
      let {
        count: l,
        recent: c
      } = a;
      if (c.length < 2) return {
        count: l,
        nextAt: null
      };
      let u = [];
      for (let f = 1; f < c.length; f++) u.push(c[f] - c[f - 1]);
      u.sort((f, m) => f - m);
      let d = u[Math.floor(u.length / 2)],
        p = c.at(-1) + d;
      return {
        count: l,
        nextAt: p > Date.now() ? p : null
      };
    } finally {
      await o.close();
    }
  } finally {
    r.delete(t);
  }
}
function Ekc(e, t) {
  for (let n of e.scanStates.keys()) if (!t.has(n)) e.scanStates.delete(n);
}
var _kc,
  fTm = 7,
  mTm = 1048576,
  CKo = 16,
  gTm = '"subtype":"scheduled_task_fire"',
  hTm;