// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A5i
// matched 2.1.88 source: src/ink/Ansi.tsx
// class=modified  jaccard=0.67  score=0.9308  fileCov=0.7051
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var A5i = E(() => {
  Mce();
  mGe();
  _5i();
  ((OJr = R(lt(), 1)),
    (E5i = R(rt(), 1)),
    (Cne = R(se(), 1)),
    (bd = E5i.memo(function (t) {
      let n = OJr.c(19),
        { children: r, dimColor: o, italic: s, wrap: i } = t;
      if (typeof r !== "string") {
        let f = !!o,
          m = !!s,
          g = String(r),
          h;
        if (n[0] !== f || n[1] !== m || n[2] !== g || n[3] !== i)
          ((h = Cne.jsx(nS, {
            dim: f,
            italic: m,
            wrap: i,
            children: g,
          })),
            (n[0] = f),
            (n[1] = m),
            (n[2] = g),
            (n[3] = i),
            (n[4] = h));
        else h = n[4];
        return h;
      }
      if (r === "") return null;
      let a, l;
      if (n[5] !== r || n[6] !== o || n[7] !== s || n[8] !== i) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          let f = LWd(r);
          if (f.length === 0) {
            l = null;
            break e;
          }
          if (f.length === 1 && !$Wd(f[0].props)) {
            l = Cne.jsx(nS, {
              dim: !!o,
              italic: !!s,
              wrap: i,
              children: f[0].text,
            });
            break e;
          }
          let m;
          if (n[11] !== o || n[12] !== s)
            ((m = (g, h) => {
              let y = g.props.hyperlink;
              if (o) g.props.dim = !0;
              if (s) g.props.italic = !0;
              let b = OWd(g.props);
              if (y)
                return b
                  ? Cne.jsx(
                      xs,
                      {
                        url: y,
                        children: Cne.jsx(S5i, {
                          color: g.props.color,
                          backgroundColor: g.props.backgroundColor,
                          dim: g.props.dim,
                          bold: g.props.bold,
                          italic: g.props.italic,
                          underline: g.props.underline,
                          strikethrough: g.props.strikethrough,
                          inverse: g.props.inverse,
                          children: g.text,
                        }),
                      },
                      h,
                    )
                  : Cne.jsx(
                      xs,
                      {
                        url: y,
                        children: g.text,
                      },
                      h,
                    );
              return b
                ? Cne.jsx(
                    S5i,
                    {
                      color: g.props.color,
                      backgroundColor: g.props.backgroundColor,
                      dim: g.props.dim,
                      bold: g.props.bold,
                      italic: g.props.italic,
                      underline: g.props.underline,
                      strikethrough: g.props.strikethrough,
                      inverse: g.props.inverse,
                      children: g.text,
                    },
                    h,
                  )
                : g.text;
            }),
              (n[11] = o),
              (n[12] = s),
              (n[13] = m));
          else m = n[13];
          a = f.map(m);
        }
        ((n[5] = r), (n[6] = o), (n[7] = s), (n[8] = i), (n[9] = a), (n[10] = l));
      } else ((a = n[9]), (l = n[10]));
      if (l !== Symbol.for("react.early_return_sentinel")) return l;
      let c = a,
        u = !!o,
        d = !!s,
        p;
      if (n[14] !== c || n[15] !== u || n[16] !== d || n[17] !== i)
        ((p = Cne.jsx(nS, {
          dim: u,
          italic: d,
          wrap: i,
          children: c,
        })),
          (n[14] = c),
          (n[15] = u),
          (n[16] = d),
          (n[17] = i),
          (n[18] = p));
      else p = n[18];
      return p;
    })));
  PWd = {
    black: "ansi:black",
    red: "ansi:red",
    green: "ansi:green",
    yellow: "ansi:yellow",
    blue: "ansi:blue",
    magenta: "ansi:magenta",
    cyan: "ansi:cyan",
    white: "ansi:white",
    brightBlack: "ansi:blackBright",
    brightRed: "ansi:redBright",
    brightGreen: "ansi:greenBright",
    brightYellow: "ansi:yellowBright",
    brightBlue: "ansi:blueBright",
    brightMagenta: "ansi:magentaBright",
    brightCyan: "ansi:cyanBright",
    brightWhite: "ansi:whiteBright",
  };
});
function ks() {
  let e = H5i.useContext(SW);
  if (!e) throw Error("useClock must be used within a ClockProvider");
  return e;
}
var H5i;
