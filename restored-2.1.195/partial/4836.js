// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X4l
// matched 2.1.88 source: node_modules/qrcode/lib/core/segments.js
// class=partial  jaccard=0.1148  score=0.5273  fileCov=0.1279
// note: low-confidence suggestion: node_modules/qrcode/lib/core/segments.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X4l = Q(sAt => {
  var ES = d1e(),
    q4l = M4l(),
    V4l = O4l(),
    z4l = B4l(),
    K4l = F4l(),
    xXt = RUo(),
    Nrr = c1e(),
    DUf = j4l();
  function G4l(e) {
    return unescape(encodeURIComponent(e)).length;
  }
  function kXt(e, t, n) {
    let r = [],
      o;
    while ((o = e.exec(n)) !== null) r.push({
      data: o[0],
      index: o.index,
      mode: t,
      length: o[0].length
    });
    return r;
  }
  function Y4l(e) {
    let t = kXt(xXt.NUMERIC, ES.NUMERIC, e),
      n = kXt(xXt.ALPHANUMERIC, ES.ALPHANUMERIC, e),
      r,
      o;
    if (Nrr.isKanjiModeEnabled()) r = kXt(xXt.BYTE, ES.BYTE, e), o = kXt(xXt.KANJI, ES.KANJI, e);else r = kXt(xXt.BYTE_KANJI, ES.BYTE, e), o = [];
    return t.concat(n, r, o).sort(function (i, a) {
      return i.index - a.index;
    }).map(function (i) {
      return {
        data: i.data,
        mode: i.mode,
        length: i.length
      };
    });
  }
  function OUo(e, t) {
    switch (t) {
      case ES.NUMERIC:
        return q4l.getBitsLength(e);
      case ES.ALPHANUMERIC:
        return V4l.getBitsLength(e);
      case ES.KANJI:
        return K4l.getBitsLength(e);
      case ES.BYTE:
        return z4l.getBitsLength(e);
    }
  }
  function PUf(e) {
    return e.reduce(function (t, n) {
      let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
      if (r && r.mode === n.mode) return t[t.length - 1].data += n.data, t;
      return t.push(n), t;
    }, []);
  }
  function MUf(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      switch (r.mode) {
        case ES.NUMERIC:
          t.push([r, {
            data: r.data,
            mode: ES.ALPHANUMERIC,
            length: r.length
          }, {
            data: r.data,
            mode: ES.BYTE,
            length: r.length
          }]);
          break;
        case ES.ALPHANUMERIC:
          t.push([r, {
            data: r.data,
            mode: ES.BYTE,
            length: r.length
          }]);
          break;
        case ES.KANJI:
          t.push([r, {
            data: r.data,
            mode: ES.BYTE,
            length: G4l(r.data)
          }]);
          break;
        case ES.BYTE:
          t.push([{
            data: r.data,
            mode: ES.BYTE,
            length: G4l(r.data)
          }]);
      }
    }
    return t;
  }
  function $Uf(e, t) {
    let n = {},
      r = {
        start: {}
      },
      o = ["start"];
    for (let s = 0; s < e.length; s++) {
      let i = e[s],
        a = [];
      for (let l = 0; l < i.length; l++) {
        let c = i[l],
          u = "" + s + l;
        a.push(u), n[u] = {
          node: c,
          lastCount: 0
        }, r[u] = {};
        for (let d = 0; d < o.length; d++) {
          let p = o[d];
          if (n[p] && n[p].node.mode === c.mode) r[p][u] = OUo(n[p].lastCount + c.length, c.mode) - OUo(n[p].lastCount, c.mode), n[p].lastCount += c.length;else {
            if (n[p]) n[p].lastCount = c.length;
            r[p][u] = OUo(c.length, c.mode) + 4 + ES.getCharCountIndicator(c.mode, t);
          }
        }
      }
      o = a;
    }
    for (let s = 0; s < o.length; s++) r[o[s]].end = 0;
    return {
      map: r,
      table: n
    };
  }
  function W4l(e, t) {
    let n,
      r = ES.getBestModeForData(e);
    if (n = ES.from(t, r), n !== ES.BYTE && n.bit < r.bit) throw Error('"' + e + '" cannot be encoded with mode ' + ES.toString(n) + `.
 Suggested mode is: ` + ES.toString(r));
    if (n === ES.KANJI && !Nrr.isKanjiModeEnabled()) n = ES.BYTE;
    switch (n) {
      case ES.NUMERIC:
        return new q4l(e);
      case ES.ALPHANUMERIC:
        return new V4l(e);
      case ES.KANJI:
        return new K4l(e);
      case ES.BYTE:
        return new z4l(e);
    }
  }
  sAt.fromArray = function (t) {
    return t.reduce(function (n, r) {
      if (typeof r === "string") n.push(W4l(r, null));else if (r.data) n.push(W4l(r.data, r.mode));
      return n;
    }, []);
  };
  sAt.fromString = function (t, n) {
    let r = Y4l(t, Nrr.isKanjiModeEnabled()),
      o = MUf(r),
      s = $Uf(o, n),
      i = DUf.find_path(s.map, "start", "end"),
      a = [];
    for (let l = 1; l < i.length - 1; l++) a.push(s.table[i[l]].node);
    return sAt.fromArray(PUf(a));
  };
  sAt.rawSplit = function (t) {
    return sAt.fromArray(Y4l(t, Nrr.isKanjiModeEnabled()));
  };
});