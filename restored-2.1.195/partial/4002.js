// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AMe
// matched 2.1.88 source: src/components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx
// class=partial  jaccard=0.2359  score=1  fileCov=0.2359
// note: low-confidence suggestion: src/components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AMe = E(() => {
  w4();
  Ye();
  oc();
  uf();
  t0e();
  sr();
  qel();
  gBn();
  Ivo = R(lt(), 1), EMe = R(rt(), 1), eq = R(se(), 1), LF = EMe.memo(function (t) {
    let n = Ivo.c(21),
      {
        code: r,
        filePath: o,
        width: s,
        dim: i
      } = t,
      a = i === void 0 ? !1 : i,
      l = EMe.useRef(null),
      [c, u] = EMe.useState(s || OZp),
      [d] = na(),
      f = G_().syntaxHighlightingDisabled ?? !1,
      m;
    if (n[0] !== r || n[1] !== o || n[2] !== f) {
      e: {
        if (f) {
          m = null;
          break e;
        }
        let C = Vba();
        if (!C) {
          m = null;
          break e;
        }
        m = new C(dY(r), o);
      }
      n[0] = r, n[1] = o, n[2] = f, n[3] = m;
    } else m = n[3];
    let g = m,
      h,
      y;
    if (n[4] !== s) h = () => {
      if (!s && l.current) {
        let {
          width: C
        } = tX(l.current);
        if (C > 0) u(C - 2);
      }
    }, y = [s], n[4] = s, n[5] = h, n[6] = y;else h = n[5], y = n[6];
    EMe.useEffect(h, y);
    let b;
    e: {
      if (g === null) {
        b = null;
        break e;
      }
      let C;
      if (n[7] !== g || n[8] !== a || n[9] !== c || n[10] !== d) C = g.render(d, c, a), n[7] = g, n[8] = a, n[9] = c, n[10] = d, n[11] = C;else C = n[11];
      b = C;
    }
    let _ = b,
      S;
    e: {
      if (!Ns()) {
        S = 0;
        break e;
      }
      let C = hu(r, `
`) + 1,
        x;
      if (n[12] !== C) x = C.toString(), n[12] = C, n[13] = x;else x = n[13];
      S = x.length + 2;
    }
    let A = S,
      v;
    if (n[14] !== r || n[15] !== a || n[16] !== o || n[17] !== A || n[18] !== _ || n[19] !== f) v = eq.jsx(U, {
      ref: l,
      children: _ ? eq.jsx(U, {
        flexDirection: "column",
        children: _.map((C, x) => A > 0 ? eq.jsx(NZp, {
          line: C,
          gutterWidth: A
        }, x) : eq.jsx(w, {
          children: eq.jsx(bd, {
            children: C
          })
        }, x))
      }) : eq.jsx(Wel, {
        code: r,
        filePath: o,
        dim: a,
        skipColoring: f
      })
    }), n[14] = r, n[15] = a, n[16] = o, n[17] = A, n[18] = _, n[19] = f, n[20] = v;else v = n[20];
    return v;
  });
});
function zel(e) {
  let t = Vel.c(15),
    {
      file_path: n,
      content: r,
      fileExists: o,
      oldContent: s
    } = e,
    {
      columns: i
    } = br(),
    a;
  e: {
    if (!o) {
      a = null;
      break e;
    }
    let f;
    if (t[0] !== r || t[1] !== n || t[2] !== s) f = j6({
      filePath: n,
      fileContents: s,
      edits: [{
        old_string: s,
        new_string: r,
        replace_all: !1
      }]
    }), t[0] = r, t[1] = n, t[2] = s, t[3] = f;else f = t[3];
    a = f;
  }
  let l = a,
    c;
  if (t[4] !== r) c = Gd(r), t[4] = r, t[5] = c;else c = t[5];
  let u = c,
    d;
  if (t[6] !== i || t[7] !== r || t[8] !== n || t[9] !== u || t[10] !== l || t[11] !== s) d = l ? Wwe(l.map(f => Zht.jsx(Xue, {
    patch: f,
    dim: !1,
    filePath: n,
    firstLine: u,
    fileContent: s,
    width: i - 2
  }, f.newStart)), BZp) : Zht.jsx(LF, {
    code: r || "(No content)",
    filePath: n
  }), t[6] = i, t[7] = r, t[8] = n, t[9] = u, t[10] = l, t[11] = s, t[12] = d;else d = t[12];
  let p;
  if (t[13] !== d) p = Zht.jsx(Q4, {
    paddingX: 1,
    children: d
  }), t[13] = d, t[14] = p;else p = t[14];
  return p;
}
function BZp(e) {
  return Zht.jsx(wI, {
    fromLeftEdge: !0,
    children: Zht.jsx(w, {
      dimColor: !0,
      children: "..."
    })
  }, `ellipsis-${e}`);
}
var Vel, Zht;