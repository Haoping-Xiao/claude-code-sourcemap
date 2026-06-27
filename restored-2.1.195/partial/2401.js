// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mGe
// matched 2.1.88 source: src/ink/styles.ts
// class=partial  jaccard=0.0879  score=0.6268  fileCov=0.0928
// note: low-confidence suggestion: src/ink/styles.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mGe = E(() => {
  NGi = R(lt(), 1), BGi = R(se(), 1), uGd = {
    wrap: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "wrap"
    },
    "wrap-trim": {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "wrap-trim"
    },
    "wrap-stream": {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "wrap-stream"
    },
    end: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "end"
    },
    middle: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "middle"
    },
    "truncate-end": {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "truncate-end"
    },
    truncate: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "truncate"
    },
    "truncate-middle": {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "truncate-middle"
    },
    "truncate-start": {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: "truncate-start"
    }
  };
});
function pGd(e) {
  return e.includes("$bunfs") || e.includes("~BUN") || e.includes("/snapshot/") || e.startsWith("node:");
}
function fGd(e) {
  return e.some(({
    value: t
  }) => t.length > dGd);
}
function FGi() {
  return mGd ??= new nJr.default({
    cwd: process.cwd(),
    internals: nJr.default.nodeInternals()
  });
}
function rJr({
  error: e
}) {
  let t = e.stack ? e.stack.split(`
`).slice(1) : void 0,
    n = t ? FGi().parseLine(t[0]) : void 0,
    r = UGi(n?.file),
    o,
    s = 0;
  if (r && n?.line && !pGd(r)) try {
    let i = jGi.readFileSync(r, "utf8");
    if (o = xGi(i, n.line), o && fGd(o)) o = void 0;
    if (o) for (let {
      line: a
    } of o) s = Math.max(s, String(a).length);
  } catch {}
  return D0.jsxs(Iy, {
    flexDirection: "column",
    padding: 1,
    children: [D0.jsxs(Iy, {
      children: [D0.jsxs(nS, {
        backgroundColor: "ansi:red",
        color: "ansi:white",
        children: [" ", "ERROR", " "]
      }), D0.jsxs(nS, {
        children: [" ", e.message]
      })]
    }), n && r && D0.jsx(Iy, {
      marginTop: 1,
      children: D0.jsxs(nS, {
        dim: !0,
        children: [r, ":", n.line, ":", n.column]
      })
    }), n && o && D0.jsx(Iy, {
      marginTop: 1,
      flexDirection: "column",
      children: o.map(({
        line: i,
        value: a
      }) => D0.jsxs(Iy, {
        children: [D0.jsx(Iy, {
          width: s + 1,
          children: D0.jsxs(nS, {
            dim: i !== n.line,
            backgroundColor: i === n.line ? "ansi:red" : void 0,
            color: i === n.line ? "ansi:white" : void 0,
            children: [String(i).padStart(s, " "), ":"]
          })
        }), D0.jsx(nS, {
          backgroundColor: i === n.line ? "ansi:red" : void 0,
          color: i === n.line ? "ansi:white" : void 0,
          children: " " + a
        }, i)]
      }, i))
    }), e.stack && D0.jsx(Iy, {
      marginTop: 1,
      flexDirection: "column",
      children: e.stack.split(`
`).slice(1).map(i => {
        let a = FGi().parseLine(i);
        if (!a) return D0.jsxs(Iy, {
          children: [D0.jsx(nS, {
            dim: !0,
            children: "- "
          }), D0.jsx(nS, {
            bold: !0,
            children: i
          })]
        }, i);
        return D0.jsxs(Iy, {
          children: [D0.jsx(nS, {
            dim: !0,
            children: "- "
          }), D0.jsx(nS, {
            bold: !0,
            children: a.function
          }), D0.jsxs(nS, {
            dim: !0,
            children: [" ", "(", UGi(a.file) ?? "", ":", a.line, ":", a.column, ")"]
          })]
        }, i);
      })
    })]
  });
}
var jGi,
  nJr,
  D0,
  UGi = e => e?.replace(`file://${process.cwd()}/`, ""),
  dGd = 200,
  mGd;