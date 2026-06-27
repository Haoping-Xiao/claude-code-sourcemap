// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module URn
// matched 2.1.88 source: src/ink/termio/tokenize.ts
// class=modified  jaccard=0.4335  score=0.8369  fileCov=0.4735
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function createTokenizer(options) {
  let t = "ground",
    n = "",
    r = options?.x10Mouse ?? false,
    o = options?.forOutput ?? false;
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
function tokenize(input, initialState, initialBuffer, flush, x10Mouse, s) {
  let i = [],
    result = {
      state: initialState,
      buffer: "",
    },
    data = initialBuffer + input,
    c = 0,
    u = 0,
    d = 0,
    p = () => {
      if (c > u) {
        let m = data.slice(u, c);
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
      ((result.state = "ground"), (u = c));
    };
  while (c < data.length) {
    let m = data.charCodeAt(c);
    switch (result.state) {
      case "ground":
        if (m === rne.ESC) (p(), (d = c), (result.state = "escape"), c++);
        else if (m === rne.DEL) {
          if (m4d.test(data.slice(u, c))) c++;
          else
            (p(),
              c++,
              i.push({
                type: "text",
                value: "\x7F",
              }),
              (u = c));
        } else if (!s && m < 32 && data.length < 64) {
          if ((p(), c++, m === 13 && data.charCodeAt(c) === 10)) c++;
          (i.push({
            type: "text",
            value: String.fromCharCode(m),
          }),
            (u = c));
        } else c++;
        break;
      case "escape":
        if (m === gW.CSI) ((result.state = "csi"), c++);
        else if (m === gW.OSC) ((result.state = "osc"), c++);
        else if (m === gW.DCS) ((result.state = "dcs"), c++);
        else if (!x10Mouse && m === gW.APC) ((result.state = "apc"), c++);
        else if (!x10Mouse && m === gW.PM) ((result.state = "pm"), c++);
        else if (!x10Mouse && (m === gW.SOS || m === 107)) ((result.state = "sos"), c++);
        else if (m === 79) ((result.state = "ss3"), c++);
        else if (x10Mouse && (m === 32 || m === 13 || m === 10 || m === 9))
          (c++,
            i.push({
              type: "text",
              value: data.slice(d, c),
            }),
            (result.state = "ground"),
            (u = c));
        else if (x10Mouse && YNt(m))
          (i.push({
            type: "text",
            value: data.slice(d, c),
          }),
            (result.state = "ground"),
            (u = c));
        else if (YNt(m)) ((result.state = "escapeIntermediate"), c++);
        else if (m === rne.DEL)
          (c++,
            i.push({
              type: "text",
              value: data.slice(d, c),
            }),
            (result.state = "ground"),
            (u = c));
        else if (DYr(m)) (c++, f(data.slice(d, c)));
        else if (m === rne.ESC) (f(data.slice(d, c)), (d = c), (result.state = "escape"), c++);
        else if (m < 32)
          (c++,
            i.push({
              type: "text",
              value: data.slice(d, c),
            }),
            (result.state = "ground"),
            (u = c));
        else ((result.state = "ground"), (u = d));
        break;
      case "escapeIntermediate":
        if (YNt(m)) c++;
        else if (DYr(m)) (c++, f(data.slice(d, c)));
        else ((result.state = "ground"), (u = d));
        break;
      case "csi":
        if (
          x10Mouse &&
          m === 77 &&
          c - d === 2 &&
          (c + 1 >= data.length || data.charCodeAt(c + 1) >= 32) &&
          (c + 2 >= data.length || data.charCodeAt(c + 2) >= 32) &&
          (c + 3 >= data.length || data.charCodeAt(c + 3) >= 32)
        ) {
          if (c + 4 <= data.length) ((c += 4), f(data.slice(d, c)));
          else c = data.length;
          break;
        }
        if (bUi(m)) (c++, f(data.slice(d, c)));
        else if (_Ui(m) || YNt(m)) c++;
        else ((result.state = "ground"), (u = d));
        break;
      case "ss3":
        if (m >= 64 && m <= 126) (c++, f(data.slice(d, c)));
        else ((result.state = "ground"), (u = d));
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (m === rne.BEL && result.state !== "pm" && result.state !== "sos")
          (c++, f(data.slice(d, c)));
        else if (m === rne.ESC && c + 1 < data.length) {
          if (data.charCodeAt(c + 1) === gW.ST) ((c += 2), f(data.slice(d, c)));
          else (f(data.slice(d, c)), (d = c), (result.state = "escape"), c++);
        } else if (m === rne.CAN || m === rne.SUB) (c++, f(data.slice(d, c)));
        else c++;
        break;
    }
  }
  if (result.state === "ground") p();
  else if (flush) {
    let m = data.slice(d);
    if (m)
      i.push({
        type: "sequence",
        value: m,
      });
    result.state = "ground";
  } else result.buffer = data.slice(d);
  return {
    tokens: i,
    state: result,
  };
}
var m4d;
