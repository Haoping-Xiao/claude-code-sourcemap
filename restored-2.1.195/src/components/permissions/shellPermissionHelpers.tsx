// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QAc
// matched 2.1.88 source: src/components/permissions/shellPermissionHelpers.tsx
// class=modified  jaccard=0.2331  score=0.2786  fileCov=0.5877
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QAc = E(() => {
  WLn();
  GAc();
  VAc();
  KAc();
  tC();
  HN();
  w4();
  Tc();
  Ye();
  ps();
  kt();
  uo();
  eVe();
  lT();
  xW();
  _Tt();
  vn();
  e8t();
  I1();
  KI();
  ((Xzo = R(lt(), 1)), (bpr = R(rt(), 1)), (atn = R(se(), 1)));
});
function n_m(e) {
  switch (e.length) {
    case 0:
      return "";
    case 1:
      return IA.jsx(w, {
        bold: true,
        children: e[0],
      });
    case 2:
      return IA.jsxs(w, {
        children: [
          IA.jsx(w, {
            bold: true,
            children: e[0],
          }),
          " and ",
          IA.jsx(w, {
            bold: true,
            children: e[1],
          }),
        ],
      });
    default:
      return IA.jsxs(w, {
        children: [
          IA.jsx(w, {
            bold: true,
            children: e.slice(0, -1).join(", "),
          }),
          ", and",
          " ",
          IA.jsx(w, {
            bold: true,
            children: e.slice(-1)[0],
          }),
        ],
      });
  }
}
function Jzo(e) {
  if (e.join(", ").length > 50) return "similar";
  return n_m(e);
}
function ltn(e) {
  if (e.length === 0) return "";
  let t = e.map((n) => DZ.basename(n) || n);
  if (t.length === 1)
    return IA.jsxs(w, {
      children: [
        IA.jsx(w, {
          bold: true,
          children: t[0],
        }),
        DZ.sep,
      ],
    });
  if (t.length === 2)
    return IA.jsxs(w, {
      children: [
        IA.jsx(w, {
          bold: true,
          children: t[0],
        }),
        DZ.sep,
        " and ",
        IA.jsx(w, {
          bold: true,
          children: t[1],
        }),
        DZ.sep,
      ],
    });
  return IA.jsxs(w, {
    children: [
      IA.jsx(w, {
        bold: true,
        children: t[0],
      }),
      DZ.sep,
      ", ",
      IA.jsx(w, {
        bold: true,
        children: t[1],
      }),
      DZ.sep,
      " and ",
      e.length - 2,
      " more",
    ],
  });
}
function Spr(e, t, n) {
  let r = e.filter((p) => p.type === "addRules").flatMap((p) => p.rules || []),
    o = r.filter((p) => p.toolName === "Read"),
    s = r.filter((p) => p.toolName === t),
    i = e.filter((p) => p.type === "addDirectories").flatMap((p) => p.directories || []),
    a = o.map((p) => p.ruleContent?.replace("/**", "") || "").filter((p) => p),
    l = Uo(
      s.flatMap((p) => {
        if (!p.ruleContent) return [];
        let f =
          p.ruleContent.endsWith(":*") || p.ruleContent.endsWith(" *")
            ? p.ruleContent.slice(0, -2)
            : p.ruleContent;
        return n ? n(f) : f;
      }),
    ),
    c = i.length > 0,
    u = a.length > 0,
    d = l.length > 0;
  if (u && !c && !d) {
    if (a.length === 1) {
      let p = a[0],
        f = DZ.basename(p) || p;
      return IA.jsxs(w, {
        children: [
          "Yes, allow reading from ",
          IA.jsx(w, {
            bold: true,
            children: f,
          }),
          DZ.sep,
          " from this project",
        ],
      });
    }
    return IA.jsxs(w, {
      children: ["Yes, allow reading from ", ltn(a), " from this project"],
    });
  }
  if (c && !u && !d) {
    if (i.length === 1) {
      let p = i[0],
        f = DZ.basename(p) || p;
      return IA.jsxs(w, {
        children: [
          "Yes, and always allow access to ",
          IA.jsx(w, {
            bold: true,
            children: f,
          }),
          DZ.sep,
          " from this project",
        ],
      });
    }
    return IA.jsxs(w, {
      children: ["Yes, and always allow access to ", ltn(i), " from this project"],
    });
  }
  if (d && !c && !u)
    return IA.jsxs(w, {
      children: [
        "Yes, and don't ask again for ",
        Jzo(l),
        " commands in",
        " ",
        IA.jsx(w, {
          bold: true,
          children: UAt(yr()),
        }),
      ],
    });
  if ((c || u) && !d) {
    let p = [...i, ...a];
    if (c && u)
      return IA.jsxs(w, {
        children: ["Yes, and always allow access to ", ltn(p), " from this project"],
      });
  }
  if ((c || u) && d) {
    let p = [...i, ...a];
    if (p.length === 1 && l.length === 1)
      return IA.jsxs(w, {
        children: ["Yes, and allow access to ", ltn(p), " and", " ", Jzo(l), " commands"],
      });
    return IA.jsxs(w, {
      children: ["Yes, and allow ", ltn(p), " access and", " ", Jzo(l), " commands"],
    });
  }
  return null;
}
var DZ, IA;
