// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module URn
// matched 2.1.88 source: src/ink/termio/tokenize.ts
// class=modified  jaccard=0.4335  score=0.8369  fileCov=0.4735
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function createTokenizer(e) {
  let t = "ground",
    n = "",
    r = e?.x10Mouse ?? false,
    o = e?.forOutput ?? false;
  return {
    feed(s) {
      let i = tokenize(s, t, n, false, r, o);
      return ((t = i.state.state), (n = i.state.buffer), i.tokens);
    },
    flush() {
      let s = tokenize("", t, n, true, r, o);
      return ((t = s.state.state), (n = s.state.buffer), s.tokens);
    },
    reset() {
      ((t = "ground"), (n = ""));
    },
    buffer() {
      return n;
    },
  };
}
function tokenize(e, t, n, r, o, s) {
  let i = [],
    a = {
      state: t,
      buffer: "",
    },
    l = n + e,
    c = 0,
    u = 0,
    d = 0,
    p = () => {
      if (c > u) {
        let m = l.slice(u, c);
        if (m)
          i.push({
            type: "text",
            value: m,
          });
      }
      u = c;
    },
    f = (m) => {
      if (m)
        i.push({
          type: "sequence",
          value: m,
        });
      ((a.state = "ground"), (u = c));
    };
  while (c < l.length) {
    let m = l.charCodeAt(c);
    switch (a.state) {
      case "ground":
        if (m === rne.ESC) (p(), (d = c), (a.state = "escape"), c++);
        else if (m === rne.DEL) {
          if (m4d.test(l.slice(u, c))) c++;
          else
            (p(),
              c++,
              i.push({
                type: "text",
                value: "\x7F",
              }),
              (u = c));
        } else if (!s && m < 32 && l.length < 64) {
          if ((p(), c++, m === 13 && l.charCodeAt(c) === 10)) c++;
          (i.push({
            type: "text",
            value: String.fromCharCode(m),
          }),
            (u = c));
        } else c++;
        break;
      case "escape":
        if (m === gW.CSI) ((a.state = "csi"), c++);
        else if (m === gW.OSC) ((a.state = "osc"), c++);
        else if (m === gW.DCS) ((a.state = "dcs"), c++);
        else if (!o && m === gW.APC) ((a.state = "apc"), c++);
        else if (!o && m === gW.PM) ((a.state = "pm"), c++);
        else if (!o && (m === gW.SOS || m === 107)) ((a.state = "sos"), c++);
        else if (m === 79) ((a.state = "ss3"), c++);
        else if (o && (m === 32 || m === 13 || m === 10 || m === 9))
          (c++,
            i.push({
              type: "text",
              value: l.slice(d, c),
            }),
            (a.state = "ground"),
            (u = c));
        else if (o && YNt(m))
          (i.push({
            type: "text",
            value: l.slice(d, c),
          }),
            (a.state = "ground"),
            (u = c));
        else if (YNt(m)) ((a.state = "escapeIntermediate"), c++);
        else if (m === rne.DEL)
          (c++,
            i.push({
              type: "text",
              value: l.slice(d, c),
            }),
            (a.state = "ground"),
            (u = c));
        else if (DYr(m)) (c++, f(l.slice(d, c)));
        else if (m === rne.ESC) (f(l.slice(d, c)), (d = c), (a.state = "escape"), c++);
        else if (m < 32)
          (c++,
            i.push({
              type: "text",
              value: l.slice(d, c),
            }),
            (a.state = "ground"),
            (u = c));
        else ((a.state = "ground"), (u = d));
        break;
      case "escapeIntermediate":
        if (YNt(m)) c++;
        else if (DYr(m)) (c++, f(l.slice(d, c)));
        else ((a.state = "ground"), (u = d));
        break;
      case "csi":
        if (
          o &&
          m === 77 &&
          c - d === 2 &&
          (c + 1 >= l.length || l.charCodeAt(c + 1) >= 32) &&
          (c + 2 >= l.length || l.charCodeAt(c + 2) >= 32) &&
          (c + 3 >= l.length || l.charCodeAt(c + 3) >= 32)
        ) {
          if (c + 4 <= l.length) ((c += 4), f(l.slice(d, c)));
          else c = l.length;
          break;
        }
        if (bUi(m)) (c++, f(l.slice(d, c)));
        else if (_Ui(m) || YNt(m)) c++;
        else ((a.state = "ground"), (u = d));
        break;
      case "ss3":
        if (m >= 64 && m <= 126) (c++, f(l.slice(d, c)));
        else ((a.state = "ground"), (u = d));
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (m === rne.BEL && a.state !== "pm" && a.state !== "sos") (c++, f(l.slice(d, c)));
        else if (m === rne.ESC && c + 1 < l.length) {
          if (l.charCodeAt(c + 1) === gW.ST) ((c += 2), f(l.slice(d, c)));
          else (f(l.slice(d, c)), (d = c), (a.state = "escape"), c++);
        } else if (m === rne.CAN || m === rne.SUB) (c++, f(l.slice(d, c)));
        else c++;
        break;
    }
  }
  if (a.state === "ground") p();
  else if (r) {
    let m = l.slice(d);
    if (m)
      i.push({
        type: "sequence",
        value: m,
      });
    a.state = "ground";
  } else a.buffer = l.slice(d);
  return {
    tokens: i,
    state: a,
  };
}
var m4d;
