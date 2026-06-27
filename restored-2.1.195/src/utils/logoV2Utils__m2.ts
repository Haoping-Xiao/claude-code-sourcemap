// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mjo
// matched 2.1.88 source: src/utils/logoV2Utils.ts
// class=modified (alt of src/utils/logoV2Utils.ts)  jaccard=0.018  score=0.0245  fileCov=0.0642
// note: deminified; 5 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mjo = E(() => {
  _i();
  Ye();
  ps();
  U8l();
  $7();
  Lo();
  Bs();
  vi();
  f_();
  Ko();
  Mg();
  ((F8l = R(lt(), 1)), (lYe = R(rt(), 1)), (ZL = R(se(), 1)));
});
var K8l = {};
_t(K8l, {
  computeVisibleWindow: () => computeVisibleWindow,
  buildAgentDetailLines: () => buildAgentDetailLines,
  agentDisplayStatus: () => agentDisplayStatus,
  WorkflowDetailDialog: () => WorkflowDetailDialog,
  PhaseScrollIndicator: () => PhaseScrollIndicator,
});
function computeVisibleWindow(e, t, n) {
  if (t <= n)
    return {
      from: 0,
      to: t,
      above: 0,
      below: 0,
    };
  let r = Math.floor(n / 2),
    o = Math.max(0, Math.min(e - r, t - n)),
    s = o + n;
  return {
    from: o,
    to: s,
    above: o,
    below: t - s,
  };
}
function cYe(e) {
  return e.state === "start" || e.state === "progress";
}
function agentDisplayStatus(e, t) {
  if (e.state === "done") return "done";
  if (e.state === "error") return e.skipped ? "skipped" : "failed";
  if (!t) return "interrupted";
  return e.queuedAt != null && e.startedAt == null ? "queued" : "running";
}
function msr(e) {
  switch (e) {
    case "done":
      return {
        glyph: nt.tick,
        color: "success",
      };
    case "failed":
      return {
        glyph: nt.cross,
        color: "error",
      };
    case "skipped":
      return {
        glyph: nt.cross,
        color: "subtle",
      };
    case "queued":
    case "interrupted":
      return {
        glyph: Bvs,
        color: "subtle",
      };
    case "running":
      return {
        glyph: gc,
        color: "subtle",
      };
  }
}
function bjo(e, t) {
  return t ? `showing ${e} ${t}` : `${e} ${bn(e, "agent")}`;
}
function G8l(e, t) {
  if (e.status === "not-started") return "Not started yet";
  return t ? `No ${t} agents` : "No agents";
}
function $At(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function A5f(e, t) {
  let n = agentDisplayStatus(e, t),
    r = j6t(e.model, e.fallbackModel, {
      compact: true,
    }),
    o = [];
  if (e.isolation != null) o.push(e.isolation);
  if (e.tokens != null) o.push(`${gl(e.tokens)} tok`);
  if (e.toolCalls != null && e.toolCalls > 0) o.push(`${e.toolCalls} ${bn(e.toolCalls, "tool")}`);
  if (e.durationMs != null) o.push(Yi(e.durationMs));
  if (n === "running" && e.lastProgressAt != null) {
    let s = Math.floor((Date.now() - e.lastProgressAt) / 1000);
    if (s >= 30) o.push(`idle ${Yi(s * 1000)}`);
  }
  if (n === "queued") o.push("queued");
  if (n === "interrupted") o.push("stopped");
  if (n === "skipped") o.push("skipped");
  if (n === "failed") {
    let s = e.error ? Gd(e.error).trim() : "";
    o.push(s ? `failed: ${s}` : "failed");
  }
  return {
    model: r,
    stats: o.join(" \xB7 "),
  };
}
function W8l(e, t, n, r) {
  if (t <= 0) return [];
  let { model: o, stats: s } = A5f(e, r),
    i = n ? "permission" : void 0,
    a = !n,
    l = (f, m) => (m <= 0 ? "" : Rs(f, m)),
    c = o,
    u = s,
    d = c && u ? 1 : 0;
  if (rn(c) + d + rn(u) > t) {
    if (((u = l(u, t - rn(c) - d)), rn(c) + (c && u ? 1 : 0) + rn(u) > t))
      c = l(c, t - rn(u) - (u ? 1 : 0));
  }
  let p = Math.max(0, t - rn(c) - rn(u));
  return [
    {
      text: c,
      color: i,
      dimColor: a,
    },
    {
      text: " ".repeat(p),
    },
    {
      text: u,
      color: i,
      dimColor: a,
    },
  ];
}
function ome(e) {
  let t = sme.c(9),
    { segs: n, contentWidth: r } = e,
    o = n.reduce(T5f, 0),
    s = Math.max(0, r - o),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((i = aa.jsxs(w, {
      color: "text",
      children: [" ", FO.pipe, " "],
    })),
      (t[0] = i));
  else i = t[0];
  let a;
  if (t[1] !== n) ((a = n.map(H5f)), (t[1] = n), (t[2] = a));
  else a = t[2];
  let l;
  if (t[3] !== s) ((l = " ".repeat(s)), (t[3] = s), (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((c = aa.jsxs(w, {
      color: "text",
      children: [" ", FO.pipe],
    })),
      (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== a || t[7] !== l)
    ((u = aa.jsxs(w, {
      wrap: "truncate-end",
      children: [i, a, l, c],
    })),
      (t[6] = a),
      (t[7] = l),
      (t[8] = u));
  else u = t[8];
  return u;
}
function H5f(e, t) {
  return aa.jsx(
    w,
    {
      color: e.color,
      dimColor: e.dimColor,
      bold: e.bold ?? false,
      children: e.text,
    },
    t,
  );
}
function T5f(e, t) {
  return e + rn(t.text);
}
function uYe(e, t) {
  let n = e.from > 0 ? nt.arrowUp : " ",
    r = e.to < t ? nt.arrowDown : " ";
  return `${n} ${e.from + 1}${Xvs}${e.to} of ${t} ${r}`;
}
function PhaseScrollIndicator(e) {
  let t = sme.c(5),
    { win: n, total: r } = e,
    o;
  if (t[0] !== r || t[1] !== n) ((o = uYe(n, r)), (t[0] = r), (t[1] = n), (t[2] = o));
  else o = t[2];
  let s = `  ${o}`,
    i;
  if (t[3] !== s)
    ((i = aa.jsx(w, {
      dimColor: true,
      wrap: "truncate-end",
      children: s,
    })),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  return i;
}
function v5f(e) {
  let t = sme.c(69),
    {
      phase: n,
      selectedAgent: r,
      level: o,
      contentWidth: s,
      viewport: i,
      tight: a,
      workflowActive: l,
      filterLabel: c,
    } = e,
    u = n.agents,
    d;
  if (t[0] !== s) ((d = $ae.repeat(s + 2)), (t[0] = s), (t[1] = d));
  else d = t[1];
  let p = d,
    f,
    m;
  if (
    t[2] !== u ||
    t[3] !== p ||
    t[4] !== s ||
    t[5] !== c ||
    t[6] !== o ||
    t[7] !== n ||
    t[8] !== r ||
    t[9] !== a ||
    t[10] !== i ||
    t[11] !== l
  ) {
    let y = computeVisibleWindow(r, u.length, i);
    m = [];
    let b = bjo(u.length, c);
    if (a) {
      let A = Rs(` \xB7 ${b}`, Math.max(1, s - 1)),
        v = Math.max(1, s - rn(A)),
        C;
      if (t[14] !== n.title || t[15] !== v)
        ((C = Rs(n.title, v)), (t[14] = n.title), (t[15] = v), (t[16] = C));
      else C = t[16];
      let x;
      if (t[17] !== C)
        ((x = {
          text: C,
          color: "permission",
          bold: true,
        }),
          (t[17] = C),
          (t[18] = x));
      else x = t[18];
      let I;
      if (t[19] !== A)
        ((I = {
          text: A,
          dimColor: true,
        }),
          (t[19] = A),
          (t[20] = I));
      else I = t[20];
      let k;
      if (t[21] !== x || t[22] !== I) ((k = [x, I]), (t[21] = x), (t[22] = I), (t[23] = k));
      else k = t[23];
      let D;
      if (t[24] !== s || t[25] !== k)
        ((D = aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: k,
          },
          "title",
        )),
          (t[24] = s),
          (t[25] = k),
          (t[26] = D));
      else D = t[26];
      m.push(D);
    } else {
      let A;
      if (t[27] !== s || t[28] !== n.title)
        ((A = Rs(n.title, s)), (t[27] = s), (t[28] = n.title), (t[29] = A));
      else A = t[29];
      let v;
      if (t[30] !== A)
        ((v = [
          {
            text: A,
            color: "permission",
            bold: true,
          },
        ]),
          (t[30] = A),
          (t[31] = v));
      else v = t[31];
      let C;
      if (t[32] !== s || t[33] !== v)
        ((C = aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: v,
          },
          "title",
        )),
          (t[32] = s),
          (t[33] = v),
          (t[34] = C));
      else C = t[34];
      m.push(C);
      let x = {
          text: Rs(b, s),
          dimColor: true,
        },
        I;
      if (t[35] !== x) ((I = [x]), (t[35] = x), (t[36] = I));
      else I = t[36];
      let k;
      if (t[37] !== s || t[38] !== I)
        ((k = aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: I,
          },
          "count",
        )),
          (t[37] = s),
          (t[38] = I),
          (t[39] = k));
      else k = t[39];
      m.push(k);
      let D;
      if (t[40] === Symbol.for("react.memo_cache_sentinel"))
        ((D = [
          {
            text: "",
          },
        ]),
          (t[40] = D));
      else D = t[40];
      let P;
      if (t[41] !== s)
        ((P = aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: D,
          },
          "gap",
        )),
          (t[41] = s),
          (t[42] = P));
      else P = t[42];
      m.push(P);
    }
    let _ = m.length;
    if (u.length === 0) {
      let A;
      if (t[43] !== c || t[44] !== n) ((A = G8l(n, c)), (t[43] = c), (t[44] = n), (t[45] = A));
      else A = t[45];
      let v;
      if (t[46] !== A)
        ((v = [
          {
            text: A,
            dimColor: true,
          },
        ]),
          (t[46] = A),
          (t[47] = v));
      else v = t[47];
      let C;
      if (t[48] !== s || t[49] !== v)
        ((C = aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: v,
          },
          "empty",
        )),
          (t[48] = s),
          (t[49] = v),
          (t[50] = C));
      else C = t[50];
      m.push(C);
    } else {
      let A = Math.min(22, Math.max(4, s - 5));
      for (let v = y.from; v < y.to; v++) {
        let C = u[v],
          x = o === "agents" && v === r,
          { glyph: I, color: k } = msr(agentDisplayStatus(C, l)),
          D = Rs(C.label, A),
          P = " ".repeat(Math.max(0, A - rn(D))),
          O = Math.max(0, s - (A + 5));
        m.push(
          aa.jsx(
            ome,
            {
              contentWidth: s,
              segs: [
                {
                  text: x ? nt.pointer : " ",
                  color: "permission",
                },
                {
                  text: " ",
                },
                {
                  text: I,
                  color: k,
                },
                {
                  text: " ",
                },
                {
                  text: `${D}${P}`,
                  color: x ? "permission" : void 0,
                  dimColor: !x && cYe(C),
                },
                {
                  text: " ",
                },
                ...W8l(C, O, x, l),
              ],
            },
            `a-${v}`,
          ),
        );
      }
    }
    let S = m.length - _;
    for (let A = S; A < i; A++)
      m.push(
        aa.jsx(
          ome,
          {
            contentWidth: s,
            segs: [
              {
                text: "",
              },
            ],
          },
          `pad-${A}`,
        ),
      );
    if (u.length > i) {
      let A = ` ${uYe(y, u.length)} `,
        v = Math.max(0, s + 2 - rn(A)),
        C;
      if (t[51] !== v) ((C = $ae.repeat(v)), (t[51] = v), (t[52] = C));
      else C = t[52];
      let x;
      if (t[53] !== C)
        ((x = aa.jsxs(w, {
          color: "text",
          children: [" ", UO.bottomLeft, C],
        })),
          (t[53] = C),
          (t[54] = x));
      else x = t[54];
      let I;
      if (t[55] !== A)
        ((I = aa.jsx(w, {
          dimColor: true,
          children: A,
        })),
          (t[55] = A),
          (t[56] = I));
      else I = t[56];
      let k;
      if (t[57] === Symbol.for("react.memo_cache_sentinel"))
        ((k = aa.jsx(w, {
          color: "text",
          children: UO.bottomRight,
        })),
          (t[57] = k));
      else k = t[57];
      let D;
      if (t[58] !== x || t[59] !== I)
        ((D = aa.jsxs(w, {
          wrap: "truncate-end",
          children: [x, I, k],
        })),
          (t[58] = x),
          (t[59] = I),
          (t[60] = D));
      else D = t[60];
      f = D;
    } else {
      let A;
      if (t[61] !== p)
        ((A = aa.jsxs(w, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", UO.bottomLeft, p, UO.bottomRight],
        })),
          (t[61] = p),
          (t[62] = A));
      else A = t[62];
      f = A;
    }
    ((t[2] = u),
      (t[3] = p),
      (t[4] = s),
      (t[5] = c),
      (t[6] = o),
      (t[7] = n),
      (t[8] = r),
      (t[9] = a),
      (t[10] = i),
      (t[11] = l),
      (t[12] = f),
      (t[13] = m));
  } else ((f = t[12]), (m = t[13]));
  let g;
  if (t[63] !== p)
    ((g = aa.jsxs(w, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", UO.topLeft, p, UO.topRight],
    })),
      (t[63] = p),
      (t[64] = g));
  else g = t[64];
  let h;
  if (t[65] !== f || t[66] !== m || t[67] !== g)
    ((h = aa.jsxs(U, {
      flexDirection: "column",
      children: [g, m, f],
    })),
      (t[65] = f),
      (t[66] = m),
      (t[67] = g),
      (t[68] = h));
  else h = t[68];
  return h;
}
function V8l(e) {
  let t = sme.c(16),
    { left: n, right: r, leftWidth: o, rightWidth: s } = e,
    i = Math.max(0, o - n.reduce(x5f, 0)),
    a = Math.max(0, s - r.reduce(I5f, 0)),
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = aa.jsxs(w, {
      color: "text",
      children: [" ", FO.pipe, " "],
    })),
      (t[0] = l));
  else l = t[0];
  let c;
  if (t[1] !== n) ((c = n.map(C5f)), (t[1] = n), (t[2] = c));
  else c = t[2];
  let u;
  if (t[3] !== i) ((u = " ".repeat(i)), (t[3] = i), (t[4] = u));
  else u = t[4];
  let d;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((d = aa.jsxs(w, {
      color: "text",
      children: [" ", FO.pipe, " "],
    })),
      (t[5] = d));
  else d = t[5];
  let p;
  if (t[6] !== r) ((p = r.map(w5f)), (t[6] = r), (t[7] = p));
  else p = t[7];
  let f;
  if (t[8] !== a) ((f = " ".repeat(a)), (t[8] = a), (t[9] = f));
  else f = t[9];
  let m;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((m = aa.jsxs(w, {
      color: "text",
      children: [" ", FO.pipe],
    })),
      (t[10] = m));
  else m = t[10];
  let g;
  if (t[11] !== c || t[12] !== u || t[13] !== p || t[14] !== f)
    ((g = aa.jsxs(w, {
      wrap: "truncate-end",
      children: [l, c, u, d, p, f, m],
    })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = p),
      (t[14] = f),
      (t[15] = g));
  else g = t[15];
  return g;
}
function w5f(e, t) {
  return aa.jsx(
    w,
    {
      color: e.color,
      dimColor: e.dimColor,
      bold: e.bold ?? false,
      children: e.text,
    },
    t,
  );
}
function C5f(e, t) {
  return aa.jsx(
    w,
    {
      color: e.color,
      dimColor: e.dimColor,
      bold: e.bold ?? false,
      children: e.text,
    },
    t,
  );
}
function I5f(e, t) {
  return e + rn(t.text);
}
function x5f(e, t) {
  return e + rn(t.text);
}
function j8l(e, t) {
  let n = [],
    r = 0;
  if (t.label) {
    let i = ` ${Rs(t.label.text, Math.max(1, e - 2))} `;
    ((r += rn(i)),
      n.push(
        aa.jsx(
          w,
          {
            color: t.label.color ?? "text",
            bold: t.label.bold,
            children: i,
          },
          "label",
        ),
      ));
  }
  let o = t.tag ? ` ${Rs(t.tag, Math.max(0, e - r - 2))} ` : "",
    s = Math.max(0, e - r - rn(o));
  if (
    (n.push(
      aa.jsx(
        w,
        {
          color: "text",
          children: $ae.repeat(s),
        },
        "dash",
      ),
    ),
    o)
  )
    n.push(
      aa.jsx(
        w,
        {
          dimColor: true,
          children: o,
        },
        "tag",
      ),
    );
  return n;
}
function fsr(e) {
  let t = sme.c(20),
    {
      pos: n,
      leftWidth: r,
      rightWidth: o,
      leftTitle: s,
      rightTitle: i,
      leftTag: a,
      rightTag: l,
    } = e,
    c = n === "top" ? UO.topLeft : UO.bottomLeft,
    u = n === "top" ? FO.teeDown : FO.teeUp,
    d = n === "top" ? UO.topRight : UO.bottomRight,
    p;
  if (t[0] !== c)
    ((p = aa.jsxs(w, {
      color: "text",
      children: [" ", c],
    })),
      (t[0] = c),
      (t[1] = p));
  else p = t[1];
  let f = r + 2,
    m;
  if (t[2] !== a || t[3] !== s || t[4] !== f)
    ((m = j8l(f, {
      label: s
        ? {
            text: s,
          }
        : void 0,
      tag: a,
    })),
      (t[2] = a),
      (t[3] = s),
      (t[4] = f),
      (t[5] = m));
  else m = t[5];
  let g;
  if (t[6] !== u)
    ((g = aa.jsx(w, {
      color: "text",
      children: u,
    })),
      (t[6] = u),
      (t[7] = g));
  else g = t[7];
  let h = o + 2,
    y;
  if (t[8] !== l || t[9] !== i || t[10] !== h)
    ((y = j8l(h, {
      label: i
        ? {
            text: i,
          }
        : void 0,
      tag: l,
    })),
      (t[8] = l),
      (t[9] = i),
      (t[10] = h),
      (t[11] = y));
  else y = t[11];
  let b;
  if (t[12] !== d)
    ((b = aa.jsx(w, {
      color: "text",
      children: d,
    })),
      (t[12] = d),
      (t[13] = b));
  else b = t[13];
  let _;
  if (t[14] !== p || t[15] !== m || t[16] !== g || t[17] !== y || t[18] !== b)
    ((_ = aa.jsxs(w, {
      wrap: "truncate-end",
      children: [p, m, g, y, b],
    })),
      (t[14] = p),
      (t[15] = m),
      (t[16] = g),
      (t[17] = y),
      (t[18] = b),
      (t[19] = _));
  else _ = t[19];
  return _;
}
function k5f(e, t, n, r, o) {
  let s = t === n,
    i = e.status === "done",
    a = e.status === "failed",
    l = i ? nt.tick : a ? nt.cross : String(t + 1),
    c = s ? "permission" : i ? "success" : a ? "error" : "subtle",
    u = e.totalCount > 0 ? `${e.doneCount}/${e.totalCount}` : "",
    d = r === "phases" && s ? `${nt.pointer} ` : "  ",
    p = rn(d) + rn(l) + 1,
    f = u ? 1 + rn(u) : 0,
    m = Rs(e.title, Math.max(1, o - p - f)),
    g = Math.max(0, o - p - rn(m) - f),
    h = !s && e.status === "not-started",
    y = [
      {
        text: d,
        color: s ? "permission" : void 0,
      },
      {
        text: l,
        color: c,
      },
      {
        text: " ",
      },
      {
        text: m,
        color: s ? "permission" : void 0,
        dimColor: h,
      },
      {
        text: " ".repeat(g),
      },
    ];
  if (u)
    y.push(
      {
        text: " ",
      },
      {
        text: u,
        color: s ? "permission" : "subtle",
      },
    );
  return y;
}
function R5f(e, t, n, r, o, s, i) {
  let a = r === "agents" && t === n,
    { glyph: l, color: c } = msr(agentDisplayStatus(e, i)),
    u = Rs(e.label, s),
    d = " ".repeat(Math.max(0, s - rn(u))),
    p = Math.max(0, o - (s + 4));
  return [
    {
      text: a ? nt.pointer : " ",
      color: "permission",
    },
    {
      text: l,
      color: c,
    },
    {
      text: " ",
    },
    {
      text: `${u}${d}`,
      color: a ? "permission" : void 0,
      dimColor: !a && cYe(e),
    },
    {
      text: " ",
    },
    ...W8l(e, p, a, i),
  ];
}
function L5f(e, t, n, r, o) {
  let s = t === n,
    { glyph: i, color: a } = msr(agentDisplayStatus(e, o)),
    l = Rs(e.label, Math.max(1, r - 4));
  return [
    {
      text: s ? `${nt.pointer} ` : "  ",
      color: "permission",
    },
    {
      text: i,
      color: a,
    },
    {
      text: " ",
    },
    {
      text: l,
      color: s ? "permission" : void 0,
      dimColor: !s && cYe(e),
    },
  ];
}
function D5f(e) {
  let t = sme.c(41),
    {
      phases: n,
      selectedPhase: r,
      clampedPhase: o,
      clampedAgent: s,
      level: i,
      leftWidth: a,
      rightWidth: l,
      viewport: c,
      workflowActive: u,
      filterLabel: d,
    } = e,
    p = r.agents,
    f,
    m,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v;
  if (
    t[0] !== p ||
    t[1] !== s ||
    t[2] !== o ||
    t[3] !== d ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== n ||
    t[7] !== l ||
    t[8] !== r ||
    t[9] !== c ||
    t[10] !== u
  ) {
    let I = computeVisibleWindow(o, n.length, c),
      k = computeVisibleWindow(s, p.length, c),
      D = Math.min(24, Math.max(6, Math.floor(l * 0.42))),
      P = [];
    for (let N = 0; N < c; N++) {
      let B = I.from + N,
        $ = k.from + N,
        q = B < I.to ? k5f(n[B], B, o, i, a) : [],
        W;
      if ($ < k.to) W = R5f(p[$], $, s, i, l, D, u);
      else if (p.length === 0 && N === 0)
        W = [
          {
            text: G8l(r, d),
            dimColor: true,
          },
        ];
      else W = [];
      P.push(
        aa.jsx(
          V8l,
          {
            left: q,
            right: W,
            leftWidth: a,
            rightWidth: l,
          },
          N,
        ),
      );
    }
    let O = r.title,
      L;
    if (t[21] !== p.length || t[22] !== d)
      ((L = bjo(p.length, d)), (t[21] = p.length), (t[22] = d), (t[23] = L));
    else L = t[23];
    let M = `${O} \xB7 ${L}`;
    if (((m = U), (S = "column"), t[24] !== a || t[25] !== M || t[26] !== l))
      ((A = aa.jsx(fsr, {
        pos: "top",
        leftWidth: a,
        rightWidth: l,
        leftTitle: "Phases",
        rightTitle: M,
      })),
        (t[24] = a),
        (t[25] = M),
        (t[26] = l),
        (t[27] = A));
    else A = t[27];
    ((v = P),
      (f = fsr),
      (g = "bottom"),
      (h = a),
      (y = l),
      (b = n.length > c ? uYe(I, n.length) : void 0),
      (_ = p.length > c ? uYe(k, p.length) : void 0),
      (t[0] = p),
      (t[1] = s),
      (t[2] = o),
      (t[3] = d),
      (t[4] = a),
      (t[5] = i),
      (t[6] = n),
      (t[7] = l),
      (t[8] = r),
      (t[9] = c),
      (t[10] = u),
      (t[11] = f),
      (t[12] = m),
      (t[13] = g),
      (t[14] = h),
      (t[15] = y),
      (t[16] = b),
      (t[17] = _),
      (t[18] = S),
      (t[19] = A),
      (t[20] = v));
  } else
    ((f = t[11]),
      (m = t[12]),
      (g = t[13]),
      (h = t[14]),
      (y = t[15]),
      (b = t[16]),
      (_ = t[17]),
      (S = t[18]),
      (A = t[19]),
      (v = t[20]));
  let C;
  if (t[28] !== f || t[29] !== g || t[30] !== h || t[31] !== y || t[32] !== b || t[33] !== _)
    ((C = aa.jsx(f, {
      pos: g,
      leftWidth: h,
      rightWidth: y,
      leftTag: b,
      rightTag: _,
    })),
      (t[28] = f),
      (t[29] = g),
      (t[30] = h),
      (t[31] = y),
      (t[32] = b),
      (t[33] = _),
      (t[34] = C));
  else C = t[34];
  let x;
  if (t[35] !== m || t[36] !== S || t[37] !== A || t[38] !== v || t[39] !== C)
    ((x = aa.jsxs(m, {
      flexDirection: S,
      children: [A, v, C],
    })),
      (t[35] = m),
      (t[36] = S),
      (t[37] = A),
      (t[38] = v),
      (t[39] = C),
      (t[40] = x));
  else x = t[40];
  return x;
}
function M5f(e, t, n) {
  let r = sme.c(7),
    [o, s] = OP.useState(null),
    i;
  if (r[0] !== t || r[1] !== e)
    ((i = () => {
      if (!e || !t) return;
      let l = false;
      return (
        O8l(e, t).then((c) => {
          if (!l)
            s({
              agentId: t,
              transcript: c,
            });
        }),
        () => {
          l = true;
        }
      );
    }),
      (r[0] = t),
      (r[1] = e),
      (r[2] = i));
  else i = r[2];
  let a;
  if (r[3] !== t || r[4] !== n || r[5] !== e)
    ((a = [e, t, n]), (r[3] = t), (r[4] = n), (r[5] = e), (r[6] = a));
  else a = r[6];
  if ((OP.useEffect(i, a), !e || !t)) return null;
  if (!o || o.agentId !== t) return "loading";
  return o.transcript;
}
function yjo(e, t) {
  let n = [];
  for (let r of e.split(`
`)) {
    if (r === "") {
      n.push("");
      continue;
    }
    n.push(...Yin(r, Math.max(1, t)));
  }
  return n;
}
function buildAgentDetailLines({
  agent: e,
  status: t,
  transcript: n,
  promptExpanded: r,
  width: o,
  nowMs: s,
}) {
  let i = [],
    a = "  ",
    l = Math.max(8, o - 2),
    { glyph: c, color: u } = msr(t),
    d = [];
  if (e.model != null) d.push(j6t(e.model, e.fallbackModel));
  if (e.agentType != null) d.push(e.agentType);
  if (e.isolation != null)
    d.push(
      e.isolation === "remote" && e.remoteSessionId ? `remote ${e.remoteSessionId}` : e.isolation,
    );
  if (e.cached) d.push("from resume journal");
  if (e.attempt != null && e.attempt > 1) {
    let _ =
      e.lastAttemptReason === "throttled"
        ? "throttled"
        : e.lastAttemptReason === "user-retry"
          ? "user retry"
          : "stalled";
    d.push(`attempt ${e.attempt} (${_})`);
  }
  let p = rn(c) + 1 + rn(_jo[t]),
    f = d.length > 0 ? Rs(` \xB7 ${d.join(" \xB7 ")}`, Math.max(0, o - p)) : "";
  i.push([
    {
      text: c,
      color: u,
    },
    {
      text: " ",
    },
    {
      text: _jo[t],
      color: u,
      bold: true,
    },
    ...(f
      ? [
          {
            text: f,
            dimColor: true,
          },
        ]
      : []),
  ]);
  let m = [];
  if (e.tokens != null) m.push(`${gl(e.tokens)} tok`);
  if (e.toolCalls != null && e.toolCalls > 0)
    m.push(`${e.toolCalls} ${bn(e.toolCalls, "tool call")}`);
  if (e.durationMs != null) m.push(Yi(e.durationMs));
  if (t === "queued" && e.queuedAt != null) m.push(`waiting ${Yi(Math.max(0, s - e.queuedAt))}`);
  if (t === "running" && e.lastProgressAt != null) {
    let _ = Math.floor((s - e.lastProgressAt) / 1000);
    if (_ >= 30) m.push(`idle ${Yi(_ * 1000)}`);
  }
  if (m.length > 0)
    i.push([
      {
        text: Rs(m.join(" \xB7 "), o),
        dimColor: true,
      },
    ]);
  i.push([
    {
      text: "",
    },
  ]);
  let g = n !== "loading" && n?.prompt ? n.prompt : (e.promptPreview ?? ""),
    h = g ? yjo(g, l) : [],
    y = h.length > gjo,
    b = [
      {
        text: "Prompt",
        bold: true,
        dimColor: true,
      },
    ];
  if (y)
    b.push({
      text: ` \xB7 ${h.length} lines${r ? "" : ` \xB7 ${$Rr} expand`}`,
      dimColor: true,
    });
  if ((i.push(b), g)) {
    let _ = r ? h : h.slice(0, gjo);
    for (let S of _)
      i.push([
        {
          text: "  " + S,
          dimColor: true,
        },
      ]);
    if (!r && y) {
      let S = h.length - gjo;
      i.push([
        {
          text: `${"  "}\u2026 ${S} more ${bn(S, "line")}`,
          dimColor: true,
        },
      ]);
    }
  } else
    i.push([
      {
        text:
          "  " +
          (t === "queued"
            ? "Available once the agent starts."
            : n === "loading"
              ? "Loading\u2026"
              : t === "running"
                ? "Not available yet (agent still running)."
                : "Transcript not available."),
        dimColor: true,
      },
    ]);
  if (
    (i.push([
      {
        text: "",
      },
    ]),
    t !== "queued")
  ) {
    let _ = n !== "loading" && n ? n.toolCalls : [];
    if (
      (i.push([
        {
          text: "Activity",
          bold: true,
          dimColor: true,
        },
        ...(_.length > hjo
          ? [
              {
                text: ` \xB7 last ${hjo} of ${_.length} tool calls`,
                dimColor: true,
              },
            ]
          : []),
      ]),
      _.length > 0)
    )
      for (let S of _.slice(-hjo)) {
        let A = S.summary ? `(${S.summary})` : "";
        i.push([
          {
            text: Rs(`  ${S.name}${A}`, o),
            dimColor: true,
          },
        ]);
      }
    else if (e.lastToolName != null) {
      let S = e.lastToolSummary ? `(${e.lastToolSummary})` : "";
      i.push([
        {
          text: Rs(`  ${e.lastToolName}${S}`, o),
          dimColor: true,
        },
      ]);
    } else
      i.push([
        {
          text: `  ${t === "running" ? "No tool calls yet." : "No tool calls."}`,
          dimColor: true,
        },
      ]);
    i.push([
      {
        text: "",
      },
    ]);
  }
  switch (
    (i.push([
      {
        text: "Outcome",
        bold: true,
        dimColor: true,
      },
    ]),
    t)
  ) {
    case "queued":
      i.push([
        {
          text: "  Waiting for an agent slot.",
          dimColor: true,
        },
      ]);
      break;
    case "running":
      i.push([
        {
          text: `${"  "}Still running\u2026`,
          dimColor: true,
        },
      ]);
      break;
    case "interrupted":
      i.push([
        {
          text: "  The workflow stopped before this agent finished.",
          dimColor: true,
        },
      ]);
      break;
    case "skipped":
      i.push([
        {
          text: "  Skipped by user.",
          dimColor: true,
        },
      ]);
      break;
    case "failed": {
      for (let _ of yjo(e.error ?? "failed", l))
        i.push([
          {
            text: "  " + _,
            color: "error",
          },
        ]);
      break;
    }
    case "done": {
      let _ = n !== "loading" && n?.finalText ? n.finalText : (e.resultPreview ?? "");
      if (!_)
        i.push([
          {
            text: "  " + (n === "loading" ? "Loading\u2026" : "(empty)"),
            dimColor: true,
          },
        ]);
      else
        for (let S of yjo(_, l))
          i.push([
            {
              text: "  " + S,
            },
          ]);
      break;
    }
  }
  return {
    lines: i,
    promptExpandable: y,
  };
}
function $5f(e) {
  let t = sme.c(42),
    {
      phase: n,
      clampedAgent: r,
      agentLabel: o,
      detailLines: s,
      cardScroll: i,
      leftWidth: a,
      rightWidth: l,
      viewport: c,
      workflowActive: u,
      filterLabel: d,
    } = e,
    p = n.agents,
    f,
    m,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v;
  if (
    t[0] !== o ||
    t[1] !== p ||
    t[2] !== i ||
    t[3] !== r ||
    t[4] !== s ||
    t[5] !== d ||
    t[6] !== a ||
    t[7] !== n.title ||
    t[8] !== l ||
    t[9] !== c ||
    t[10] !== u
  ) {
    let I = computeVisibleWindow(r, p.length, c),
      k = Math.max(0, s.length - c),
      D = $At(i, 0, k),
      P = Math.min(s.length, D + c),
      O = [];
    for (let B = 0; B < c; B++) {
      let $ = I.from + B,
        q = $ < I.to ? L5f(p[$], $, r, a, u) : [],
        W = D + B,
        V = W < P ? s[W] : [];
      O.push(
        aa.jsx(
          V8l,
          {
            left: q,
            right: V,
            leftWidth: a,
            rightWidth: l,
          },
          B,
        ),
      );
    }
    ((m = U), (S = "column"));
    let L = n.title,
      M;
    if (t[21] !== p.length || t[22] !== d)
      ((M = bjo(p.length, d)), (t[21] = p.length), (t[22] = d), (t[23] = M));
    else M = t[23];
    let N = `${L} \xB7 ${M}`;
    if (t[24] !== o || t[25] !== a || t[26] !== l || t[27] !== N)
      ((A = aa.jsx(fsr, {
        pos: "top",
        leftWidth: a,
        rightWidth: l,
        leftTitle: N,
        rightTitle: o,
      })),
        (t[24] = o),
        (t[25] = a),
        (t[26] = l),
        (t[27] = N),
        (t[28] = A));
    else A = t[28];
    ((v = O),
      (f = fsr),
      (g = "bottom"),
      (h = a),
      (y = l),
      (b = p.length > c ? uYe(I, p.length) : void 0),
      (_ =
        s.length > c
          ? uYe(
              {
                from: D,
                to: P,
              },
              s.length,
            )
          : void 0),
      (t[0] = o),
      (t[1] = p),
      (t[2] = i),
      (t[3] = r),
      (t[4] = s),
      (t[5] = d),
      (t[6] = a),
      (t[7] = n.title),
      (t[8] = l),
      (t[9] = c),
      (t[10] = u),
      (t[11] = f),
      (t[12] = m),
      (t[13] = g),
      (t[14] = h),
      (t[15] = y),
      (t[16] = b),
      (t[17] = _),
      (t[18] = S),
      (t[19] = A),
      (t[20] = v));
  } else
    ((f = t[11]),
      (m = t[12]),
      (g = t[13]),
      (h = t[14]),
      (y = t[15]),
      (b = t[16]),
      (_ = t[17]),
      (S = t[18]),
      (A = t[19]),
      (v = t[20]));
  let C;
  if (t[29] !== f || t[30] !== g || t[31] !== h || t[32] !== y || t[33] !== b || t[34] !== _)
    ((C = aa.jsx(f, {
      pos: g,
      leftWidth: h,
      rightWidth: y,
      leftTag: b,
      rightTag: _,
    })),
      (t[29] = f),
      (t[30] = g),
      (t[31] = h),
      (t[32] = y),
      (t[33] = b),
      (t[34] = _),
      (t[35] = C));
  else C = t[35];
  let x;
  if (t[36] !== m || t[37] !== S || t[38] !== A || t[39] !== v || t[40] !== C)
    ((x = aa.jsxs(m, {
      flexDirection: S,
      children: [A, v, C],
    })),
      (t[36] = m),
      (t[37] = S),
      (t[38] = A),
      (t[39] = v),
      (t[40] = C),
      (t[41] = x));
  else x = t[41];
  return x;
}
function O5f(e) {
  let t = sme.c(43),
    { agentLabel: n, position: r, detailLines: o, cardScroll: s, contentWidth: i, viewport: a } = e,
    l;
  if (t[0] !== i) ((l = $ae.repeat(i + 2)), (t[0] = i), (t[1] = l));
  else l = t[1];
  let c = l,
    u = Math.max(0, o.length - a),
    d,
    p;
  if (
    t[2] !== n ||
    t[3] !== c ||
    t[4] !== s ||
    t[5] !== i ||
    t[6] !== o ||
    t[7] !== u ||
    t[8] !== r ||
    t[9] !== a
  ) {
    let g = $At(s, 0, u),
      h = Math.min(o.length, g + a);
    p = [];
    let y = ` \xB7 ${r}`,
      b = Math.max(1, i - rn(y)),
      _;
    if (t[12] !== n || t[13] !== b) ((_ = Rs(n, b)), (t[12] = n), (t[13] = b), (t[14] = _));
    else _ = t[14];
    let S;
    if (t[15] !== _)
      ((S = {
        text: _,
        color: "permission",
        bold: true,
      }),
        (t[15] = _),
        (t[16] = S));
    else S = t[16];
    let A;
    if (t[17] !== y)
      ((A = {
        text: y,
        dimColor: true,
      }),
        (t[17] = y),
        (t[18] = A));
    else A = t[18];
    let v;
    if (t[19] !== S || t[20] !== A) ((v = [S, A]), (t[19] = S), (t[20] = A), (t[21] = v));
    else v = t[21];
    let C;
    if (t[22] !== i || t[23] !== v)
      ((C = aa.jsx(
        ome,
        {
          contentWidth: i,
          segs: v,
        },
        "title",
      )),
        (t[22] = i),
        (t[23] = v),
        (t[24] = C));
    else C = t[24];
    p.push(C);
    for (let x = g; x < h; x++)
      p.push(
        aa.jsx(
          ome,
          {
            contentWidth: i,
            segs: o[x],
          },
          `l-${x}`,
        ),
      );
    for (let x = h - g; x < a; x++)
      p.push(
        aa.jsx(
          ome,
          {
            contentWidth: i,
            segs: [
              {
                text: "",
              },
            ],
          },
          `pad-${x}`,
        ),
      );
    if (o.length > a) {
      let x = ` ${uYe(
          {
            from: g,
            to: h,
          },
          o.length,
        )} `,
        I = Math.max(0, i + 2 - rn(x)),
        k;
      if (t[25] !== I) ((k = $ae.repeat(I)), (t[25] = I), (t[26] = k));
      else k = t[26];
      let D;
      if (t[27] !== k)
        ((D = aa.jsxs(w, {
          color: "text",
          children: [" ", UO.bottomLeft, k],
        })),
          (t[27] = k),
          (t[28] = D));
      else D = t[28];
      let P;
      if (t[29] !== x)
        ((P = aa.jsx(w, {
          dimColor: true,
          children: x,
        })),
          (t[29] = x),
          (t[30] = P));
      else P = t[30];
      let O;
      if (t[31] === Symbol.for("react.memo_cache_sentinel"))
        ((O = aa.jsx(w, {
          color: "text",
          children: UO.bottomRight,
        })),
          (t[31] = O));
      else O = t[31];
      let L;
      if (t[32] !== P || t[33] !== D)
        ((L = aa.jsxs(w, {
          wrap: "truncate-end",
          children: [D, P, O],
        })),
          (t[32] = P),
          (t[33] = D),
          (t[34] = L));
      else L = t[34];
      d = L;
    } else {
      let x;
      if (t[35] !== c)
        ((x = aa.jsxs(w, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", UO.bottomLeft, c, UO.bottomRight],
        })),
          (t[35] = c),
          (t[36] = x));
      else x = t[36];
      d = x;
    }
    ((t[2] = n),
      (t[3] = c),
      (t[4] = s),
      (t[5] = i),
      (t[6] = o),
      (t[7] = u),
      (t[8] = r),
      (t[9] = a),
      (t[10] = d),
      (t[11] = p));
  } else ((d = t[10]), (p = t[11]));
  let f;
  if (t[37] !== c)
    ((f = aa.jsxs(w, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", UO.topLeft, c, UO.topRight],
    })),
      (t[37] = c),
      (t[38] = f));
  else f = t[38];
  let m;
  if (t[39] !== d || t[40] !== p || t[41] !== f)
    ((m = aa.jsxs(U, {
      flexDirection: "column",
      children: [f, p, d],
    })),
      (t[39] = d),
      (t[40] = p),
      (t[41] = f),
      (t[42] = m));
  else m = t[42];
  return m;
}
function WorkflowDetailDialog({
  workflow: e,
  onDone: t,
  onBack: n,
  onKill: r,
  onSkipAgent: o,
  onRetryAgent: s,
  onPause: i,
  onResume: a,
  initialPhaseIndex: l,
}) {
  Wh("workflow-detail-dialog");
  let { availableRows: c, width: u, rows: d } = Zml(),
    p = Math.max(12, u - 6),
    f = egl(e),
    m = OP.useMemo(() => ogl(e), [e.workflowProgress, e.phases]),
    g = OP.useMemo(() => sgl(m, e.agentCount), [m, e.agentCount]),
    [h, y] = OP.useState(() => (l !== void 0 ? Math.max(0, l) : 0)),
    [b, _] = OP.useState(0),
    [S, A] = OP.useState(l !== void 0 ? "agents" : "phases"),
    [v, C] = OP.useState(false),
    [x, I] = OP.useState(0),
    [k, D] = OP.useState(false),
    [P, O] = OP.useState("all"),
    L = Math.min(h, Math.max(0, m.length - 1)),
    M = m[L],
    N = e.status === "running",
    B = OP.useMemo(() => {
      if (!M || P === "all" || S === "phases") return M;
      return {
        ...M,
        agents: M.agents.filter((ze) => agentDisplayStatus(ze, N) === P),
      };
    }, [M, P, S, N]),
    $ = B ? Math.min(b, Math.max(0, B.agents.length - 1)) : 0,
    [q, W] = OP.useState(false),
    V = e.script.length > 0,
    Y = OP.useMemo(() => {
      if (!V) return "";
      let ze = ZI(e.script);
      if (!("error" in ze)) return ze.meta.name;
      return N_e(e.summary ?? e.description);
    }, [V, e.script, e.summary, e.description]),
    z = OP.useMemo(() => igl(e), [e.script, e.description, e.summary]),
    { name: K, subtext: Z, stats: J } = agl(e, z, g, f);
  function ne() {
    (I(0), D(false));
  }
  function oe(ze) {
    (y((Mt) => $At($At(Mt, 0, m.length - 1) + ze, 0, m.length - 1)), _(0), ne());
  }
  function re(ze) {
    if (!B) return;
    (_((Mt) => $At($At(Mt, 0, B.agents.length - 1) + ze, 0, B.agents.length - 1)), ne());
  }
  function ee(ze) {
    I((Mt) => Math.max(0, Mt + ze));
  }
  function ce(ze) {
    if (S === "phases") {
      oe(ze);
      return;
    }
    re(ze);
  }
  function ae() {
    if ((C(false), S === "agent")) {
      A("agents");
      return;
    }
    if (S === "agents") {
      A("phases");
      return;
    }
    if (n) n();
    else t();
  }
  function de() {
    if (M && M.agents.length > 0) (_(0), O("all"), A("agents"));
  }
  function Ee() {
    if (!pe || !M) return;
    if (P !== "all") (O("all"), _(M.agents.indexOf(pe)));
    if ((ne(), Ie === "loading")) C(true);
    else A("agent");
  }
  function me() {
    if (!M || v) return;
    let ze = new Set(M.agents.map((Mt) => agentDisplayStatus(Mt, N)));
    (O((Mt) => {
      let Qt = hJt.indexOf(Mt);
      for (let Er = 0; Er < hJt.length; Er++) {
        Qt = (Qt + 1) % hJt.length;
        let pt = hJt[Qt];
        if (pt === "all" || ze.has(pt)) break;
      }
      return hJt[Qt];
    }),
      _(0),
      ne());
  }
  let pe = S !== "phases" && B ? B.agents[$] : void 0,
    ge = pe ? agentDisplayStatus(pe, N) : void 0,
    he = !!pe && cYe(pe) && !!pe.agentId && (!!o || !!r),
    ie = !!pe && cYe(pe) && !!pe.agentId && !!s,
    le = u - 9,
    He = B ? Math.max(14, ...B.agents.map((ze) => 4 + rn(ze.label))) : 14,
    ye = Math.max(12, Math.min(30, He, le - 30)),
    ue = le - ye,
    we = S === "agent" && m.length > 0 && u >= 64 && ue >= 30,
    Ce = we ? ue : p,
    Ie = M5f(e.workflowRunId, pe?.agentId, pe?.toolCalls),
    Ve = Pd(v ? P5f : null);
  if (v) {
    if (!pe) C(false);
    else if (Ie !== "loading" || Ve) (C(false), A("agent"));
  }
  let Ze = ge === "queued" || ge === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Be = OP.useMemo(
      () =>
        S === "agent" && pe && ge
          ? buildAgentDetailLines({
              agent: pe,
              status: ge,
              transcript: Ie,
              promptExpanded: k,
              width: Ce,
              nowMs: Ze,
            })
          : {
              lines: [],
              promptExpandable: false,
            },
      [S, pe, ge, Ie, k, Ce, Ze],
    ),
    Me = Be.lines;
  function Ue() {
    if (!pe || !cYe(pe)) return;
    if (pe.agentId && o) o(pe.agentId);
    else if (r) r();
  }
  function tt() {
    if (pe && cYe(pe) && pe.agentId) s?.(pe.agentId);
  }
  No(
    {
      "confirm:previous": () => ce(-1),
      "confirm:next": () => ce(1),
    },
    {
      context: "Confirmation",
    },
  );
  let bt = e.status === "running" && !!i,
    Ke = e.status === "paused" && !!e.scriptPath && !!e.workflowRunId && !!a,
    Et = e.status === "running" && !!r && S === "phases";
  function ct() {
    if (bt) i?.();
    else if (Ke) a?.(Nko(e));
  }
  let Je = (ze) => {
      if (ze.ctrl || ze.meta) return;
      if (ze.key === "j") {
        if ((ze.preventDefault(), S === "agent")) ee(1);
        else ce(1);
      } else if (ze.key === "k") {
        if ((ze.preventDefault(), S === "agent")) ee(-1);
        else ce(-1);
      } else if (ze.key === "return" || ze.key === "right") {
        if ((ze.preventDefault(), S === "phases")) de();
        else if (S === "agents") Ee();
        else if (ze.key === "return" && Be.promptExpandable) (D((Mt) => !Mt), I(0));
      } else if (ze.key === "left") (ze.preventDefault(), ae());
      else if (ze.key === "r" && ie) (ze.preventDefault(), tt());
      else if (ze.key === "x" && he) (ze.preventDefault(), Ue());
      else if (ze.key === "x" && Et) (ze.preventDefault(), r?.());
      else if (ze.key === " ") (ze.preventDefault(), t());
      else if (ze.key === "p" && (bt || Ke)) (ze.preventDefault(), ct());
      else if (ze.key === "f" && S === "agents") (ze.preventDefault(), me());
      else if (ze.key === "s" && V) (ze.preventDefault(), W(true));
    },
    gt = m.length > 0;
  if (q)
    return aa.jsx(psr, {
      script: e.script,
      defaultName: Y,
      onDone: (ze) => {
        if (ze) t(ze);
        else W(false);
      },
    });
  let st = c < 18,
    xt = c - (st ? 8 : 11),
    vt = Math.max(1, xt - 3),
    jt = m.length > vt,
    en = jt ? Math.max(1, vt - 1) : m.length,
    Dn = Math.max(1, xt - en - (jt ? 1 : 0)),
    nn = computeVisibleWindow(L, m.length, en),
    Ln = Math.max(
      14,
      ...m.map((ze, Mt) => {
        let Qt =
            ze.status === "done" ? nt.tick : ze.status === "failed" ? nt.cross : String(Mt + 1),
          Er = ze.totalCount > 0 ? `${ze.doneCount}/${ze.totalCount}` : "";
        return 2 + rn(Qt) + 1 + rn(ze.title) + (Er ? 1 + rn(Er) : 0);
      }),
    ),
    Hn = Math.max(12, Math.min(34, Ln, le - 24)),
    kr = le - Hn,
    Mr = S !== "agent" && gt && u >= 64 && kr >= 20,
    fe = Math.max(1, c - (st ? 7 : 8)),
    Te = Math.max(3, c - (st ? 8 : 9)),
    Re = we ? fe : Te,
    Ne = Math.max(0, Me.length - Re);
  if (x > Ne) I(Ne);
  let it = P !== "all" && S !== "phases" ? _jo[P].toLowerCase() : void 0,
    Tt = [];
  if (S === "agent") {
    if ((Tt.push(`${Wee}${r9} agent`), Me.length > Re)) Tt.push("j/k scroll");
    if (Be.promptExpandable) Tt.push(`${$Rr} prompt`);
  } else if (gt) Tt.push(`${Wee}${r9} select`);
  if (he) Tt.push("x stop");
  if (Et) Tt.push("x stop workflow");
  if (ie) Tt.push("r restart");
  if (bt) Tt.push("p pause");
  else if (Ke) Tt.push("p resume");
  if (S === "agents" && gt) Tt.push(it ? `f filter: ${it}` : "f filter");
  if ((Tt.push("esc back"), V)) Tt.push("s save");
  let un = Tt.join(" \xB7 ");
  return aa.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: Je,
    children: aa.jsx(zn, {
      title: null,
      hideBorder: true,
      hideInputGuide: true,
      onCancel: ae,
      color: "text",
      children: aa.jsxs(U, {
        flexDirection: "column",
        width: u,
        minHeight: Math.max(st ? 8 : 12, Math.min(c - 1, d - 6)),
        maxHeight: Math.max(st ? 8 : 11, c - 1),
        overflowY: "hidden",
        children: [
          !gt
            ? aa.jsxs(aa.Fragment, {
                children: [
                  aa.jsx(Fl, {
                    children: "No agents yet.",
                  }),
                  aa.jsx(U, {
                    flexGrow: 1,
                  }),
                ],
              })
            : S === "agent" && pe && B
              ? aa.jsxs(aa.Fragment, {
                  children: [
                    aa.jsx(a7n, {
                      name: K,
                      subtext: Z,
                      stats: J,
                      width: u,
                    }),
                    !st &&
                      aa.jsx(U, {
                        height: 1,
                      }),
                    we
                      ? aa.jsx($5f, {
                          phase: B,
                          clampedAgent: $,
                          agentLabel: pe.label,
                          detailLines: Me,
                          cardScroll: x,
                          leftWidth: ye,
                          rightWidth: ue,
                          viewport: fe,
                          workflowActive: N,
                          filterLabel: it,
                        })
                      : aa.jsx(O5f, {
                          agentLabel: pe.label,
                          position: `${$ + 1}/${B.agents.length}`,
                          detailLines: Me,
                          cardScroll: x,
                          contentWidth: p,
                          viewport: Te,
                        }),
                    aa.jsx(U, {
                      flexGrow: 1,
                    }),
                  ],
                })
              : Mr && B
                ? aa.jsxs(aa.Fragment, {
                    children: [
                      aa.jsx(a7n, {
                        name: K,
                        subtext: Z,
                        stats: J,
                        width: u,
                      }),
                      !st &&
                        aa.jsx(U, {
                          height: 1,
                        }),
                      aa.jsx(D5f, {
                        phases: m,
                        selectedPhase: B,
                        clampedPhase: L,
                        clampedAgent: $,
                        level: S === "phases" ? "phases" : "agents",
                        leftWidth: Hn,
                        rightWidth: kr,
                        viewport: fe,
                        workflowActive: N,
                        filterLabel: it,
                      }),
                      aa.jsx(U, {
                        flexGrow: 1,
                      }),
                    ],
                  })
                : aa.jsxs(aa.Fragment, {
                    children: [
                      aa.jsx(a7n, {
                        name: K,
                        subtext: Z,
                        stats: J,
                        width: u,
                      }),
                      !st &&
                        aa.jsx(U, {
                          height: 1,
                        }),
                      m.slice(nn.from, nn.to).map((ze, Mt) => {
                        let Qt = nn.from + Mt;
                        return aa.jsx(
                          tgl,
                          {
                            index: Qt + 1,
                            title: ze.title,
                            done: ze.doneCount,
                            total: ze.totalCount,
                            status: ze.status,
                            selected: Qt === L,
                          },
                          `${Qt}-${ze.title}`,
                        );
                      }),
                      jt &&
                        aa.jsx(PhaseScrollIndicator, {
                          win: nn,
                          total: m.length,
                        }),
                      aa.jsx(U, {
                        flexGrow: 1,
                      }),
                      B
                        ? aa.jsx(v5f, {
                            phase: B,
                            selectedAgent: $,
                            level: S === "phases" ? "phases" : "agents",
                            contentWidth: p,
                            viewport: Dn,
                            tight: st,
                            workflowActive: N,
                            filterLabel: it,
                          })
                        : null,
                    ],
                  }),
          aa.jsxs(w, {
            dimColor: true,
            italic: true,
            wrap: "truncate-end",
            children: [" ", un],
          }),
        ],
      }),
    }),
  });
}
var sme,
  OP,
  aa,
  hJt,
  gjo = 2,
  hjo = 3,
  P5f = 100,
  _jo;
