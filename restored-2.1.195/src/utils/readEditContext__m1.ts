// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mRr
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mRr = E(() => {
  Lo();
  je();
  At();
  Bi();
  sa();
  ((pCe = require("fs/promises")), (fRr = require("os")), (Che = require("path")));
});
function IRt(e, t = false) {
  let n = e.length,
    r = 0,
    o = "",
    s = 0,
    i = 16,
    a = 0,
    l = 0,
    c = 0,
    u = 0,
    d = 0;
  function p(_, S) {
    let A = 0,
      v = 0;
    while (A < _ || !S) {
      let C = e.charCodeAt(r);
      if (C >= 48 && C <= 57) v = v * 16 + C - 48;
      else if (C >= 65 && C <= 70) v = v * 16 + C - 65 + 10;
      else if (C >= 97 && C <= 102) v = v * 16 + C - 97 + 10;
      else break;
      (r++, A++);
    }
    if (A < _) v = -1;
    return v;
  }
  function f(_) {
    ((r = _), (o = ""), (s = 0), (i = 16), (d = 0));
  }
  function m() {
    let _ = r;
    if (e.charCodeAt(r) === 48) r++;
    else {
      r++;
      while (r < e.length && _et(e.charCodeAt(r))) r++;
    }
    if (r < e.length && e.charCodeAt(r) === 46)
      if ((r++, r < e.length && _et(e.charCodeAt(r)))) {
        r++;
        while (r < e.length && _et(e.charCodeAt(r))) r++;
      } else return ((d = 3), e.substring(_, r));
    let S = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101)) {
      if ((r++, (r < e.length && e.charCodeAt(r) === 43) || e.charCodeAt(r) === 45)) r++;
      if (r < e.length && _et(e.charCodeAt(r))) {
        r++;
        while (r < e.length && _et(e.charCodeAt(r))) r++;
        S = r;
      } else d = 3;
    }
    return e.substring(_, S);
  }
  function g() {
    let _ = "",
      S = r;
    while (true) {
      if (r >= n) {
        ((_ += e.substring(S, r)), (d = 2));
        break;
      }
      let A = e.charCodeAt(r);
      if (A === 34) {
        ((_ += e.substring(S, r)), r++);
        break;
      }
      if (A === 92) {
        if (((_ += e.substring(S, r)), r++, r >= n)) {
          d = 2;
          break;
        }
        switch (e.charCodeAt(r++)) {
          case 34:
            _ += '"';
            break;
          case 92:
            _ += "\\";
            break;
          case 47:
            _ += "/";
            break;
          case 98:
            _ += "\b";
            break;
          case 102:
            _ += "\f";
            break;
          case 110:
            _ += `
`;
            break;
          case 114:
            _ += "\r";
            break;
          case 116:
            _ += "\t";
            break;
          case 117:
            let C = p(4, true);
            if (C >= 0) _ += String.fromCharCode(C);
            else d = 4;
            break;
          default:
            d = 5;
        }
        S = r;
        continue;
      }
      if (A >= 0 && A <= 31)
        if (CRt(A)) {
          ((_ += e.substring(S, r)), (d = 2));
          break;
        } else d = 6;
      r++;
    }
    return _;
  }
  function h() {
    if (((o = ""), (d = 0), (s = r), (l = a), (u = c), r >= n)) return ((s = n), (i = 17));
    let _ = e.charCodeAt(r);
    if (gRr(_)) {
      do (r++, (o += String.fromCharCode(_)), (_ = e.charCodeAt(r)));
      while (gRr(_));
      return (i = 15);
    }
    if (CRt(_)) {
      if ((r++, (o += String.fromCharCode(_)), _ === 13 && e.charCodeAt(r) === 10))
        (r++,
          (o += `
`));
      return (a++, (c = r), (i = 14));
    }
    switch (_) {
      case 123:
        return (r++, (i = 1));
      case 125:
        return (r++, (i = 2));
      case 91:
        return (r++, (i = 3));
      case 93:
        return (r++, (i = 4));
      case 58:
        return (r++, (i = 6));
      case 44:
        return (r++, (i = 5));
      case 34:
        return (r++, (o = g()), (i = 10));
      case 47:
        let S = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          r += 2;
          while (r < n) {
            if (CRt(e.charCodeAt(r))) break;
            r++;
          }
          return ((o = e.substring(S, r)), (i = 12));
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          let A = n - 1,
            v = false;
          while (r < A) {
            let C = e.charCodeAt(r);
            if (C === 42 && e.charCodeAt(r + 1) === 47) {
              ((r += 2), (v = true));
              break;
            }
            if ((r++, CRt(C))) {
              if (C === 13 && e.charCodeAt(r) === 10) r++;
              (a++, (c = r));
            }
          }
          if (!v) (r++, (d = 1));
          return ((o = e.substring(S, r)), (i = 13));
        }
        return ((o += String.fromCharCode(_)), r++, (i = 16));
      case 45:
        if (((o += String.fromCharCode(_)), r++, r === n || !_et(e.charCodeAt(r)))) return (i = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return ((o += m()), (i = 11));
      default:
        while (r < n && y(_)) (r++, (_ = e.charCodeAt(r)));
        if (s !== r) {
          switch (((o = e.substring(s, r)), o)) {
            case "true":
              return (i = 8);
            case "false":
              return (i = 9);
            case "null":
              return (i = 7);
          }
          return (i = 16);
        }
        return ((o += String.fromCharCode(_)), r++, (i = 16));
    }
  }
  function y(_) {
    if (gRr(_) || CRt(_)) return false;
    switch (_) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function b() {
    let _;
    do _ = h();
    while (_ >= 12 && _ <= 15);
    return _;
  }
  return {
    setPosition: f,
    getPosition: () => r,
    scan: t ? b : h,
    getToken: () => i,
    getTokenValue: () => o,
    getTokenOffset: () => s,
    getTokenLength: () => r - s,
    getTokenStartLine: () => l,
    getTokenStartCharacter: () => s - u,
    getTokenError: () => d,
  };
}
function gRr(e) {
  return e === 32 || e === 9;
}
function CRt(e) {
  return e === 10 || e === 13;
}
function _et(e) {
  return e >= 48 && e <= 57;
}
var evs;
