// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gGe
// matched 2.1.88 source: src/ink/render-node-to-output.ts
// class=modified  jaccard=0.392  score=0.6974  fileCov=0.4723
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gGe]
((lat = []),
  (GGd = {
    enabled: VBt,
    events: lat,
    position: bJr,
  }),
  (WGd = new Set()),
  (ALn = new Set()));
function hGe() {
  return {
    overlayActive: false,
    layoutShifted: false,
    scrollHint: null,
    scrollDrainNode: null,
    followScroll: null,
    absoluteRectsPrev: [],
    absoluteRectsCur: [],
  };
}
function DWi(e) {
  ((e.overlayActive = false),
    (e.layoutShifted = false),
    (e.scrollHint = null),
    (e.scrollDrainNode = null),
    (e.followScroll = null),
    (e.absoluteRectsPrev = e.absoluteRectsCur),
    (e.absoluteRectsCur = []));
}
function JGd(e, t, n) {
  let r = t > 0 ? 1 : -1,
    o = Math.abs(t),
    s = 0;
  if (o > TJr) ((s += r * (o - TJr)), (o = TJr));
  let i = o <= zGd ? o : o < KGd ? YGd : XGd;
  s += r * i;
  let a = o - i,
    l = Math.max(1, n - 1),
    c = Math.abs(s);
  if (c > l) {
    let u = c - l;
    return ((e.pendingScrollDelta = r * (a + u)), r * l);
  }
  return ((e.pendingScrollDelta = a > 0 ? r * a : void 0), s);
}
function QGd(e, t, n) {
  let r = Math.abs(t),
    o = Math.max(1, n - 1),
    s = Math.min(o, Math.max(VGd, (r * 3) >> 2));
  if (r <= s) return ((e.pendingScrollDelta = void 0), t);
  let i = t > 0 ? s : -s;
  return ((e.pendingScrollDelta = t - i), i);
}
function TLn(e, t) {
  return `${xWi}8;;${t}${kWi}${e}${xWi}8;;${kWi}`;
}
function ZGd(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) t += e[o].text.length;
  if (HLn.length < t) HLn = new Uint32Array(Math.max(t, HLn.length * 2));
  let n = HLn.subarray(0, t),
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let s = r + e[o].text.length;
    (n.fill(o, r, s), (r = s));
  }
  return n;
}
function eWd(e, t, n, r, o = false, s) {
  let i = e.split(`
`),
    a = [],
    l = 0;
  for (let c = 0; c < i.length; c++) {
    let u = i[c];
    if (o && u.length > 0) {
      let h = /\s/.test(u[0]);
      if (l < r.length && /\s/.test(r[l]) && !h) while (l < r.length && /\s/.test(r[l])) l++;
    }
    let d = "",
      p = 0,
      f = n[l] ?? 0;
    for (let h = 0; h < u.length; h++) {
      let y = n[l] ?? f;
      if (y !== f) {
        let b = u.slice(p, h),
          _ = t[f];
        if (_) {
          let S = Lit(b, _.styles);
          if (_.hyperlink) S = TLn(S, _.hyperlink);
          d += S;
        } else d += b;
        ((p = h), (f = y));
      }
      l++;
    }
    let m = u.slice(p),
      g = t[f];
    if (g) {
      let h = Lit(m, g.styles);
      if (g.hyperlink) h = TLn(h, g.hyperlink);
      d += h;
    } else d += m;
    if ((a.push(d), l < r.length && r[l] === "\r")) l++;
    if (
      l < r.length &&
      r[l] ===
        `
`
    )
      l++;
    if (s?.[c + 1] === Ane.ContinuationElidedSep && l < r.length && r[l] === " ") l++;
    if (o && c < i.length - 1) {
      let h = i[c + 1],
        y = h.length > 0 ? h[0] : null;
      while (l < r.length && /\s/.test(r[l])) {
        if (y !== null && r[l] === y) break;
        l++;
      }
    }
  }
  return a.join(`
`);
}
function RWi(e, t, n) {
  let r = n === "wrap-stream";
  if (n !== "wrap" && n !== "wrap-trim" && !r)
    return {
      wrapped: C1(e, t, n),
      softWrap: void 0,
    };
  let o = r ? "wrap" : n,
    s = e.replace(
      /\r\n?/g,
      `
`,
    ).split(`
`),
    i = [],
    a = [];
  for (let l of s) {
    let c = C1(l, t, o).split(`
`);
    for (let u = 0; u < c.length; u++) {
      if (u === 0) {
        (i.push(c[u]), a.push(Ane.HardBreak));
        continue;
      }
      let d = c[u],
        p = d.startsWith(" ") ? d.slice(1) : d,
        f = WBt(p) > 0 ? p : d;
      (i.push(f), a.push(f.length < d.length ? Ane.ContinuationElidedSep : Ane.Continuation));
    }
  }
  if (r) (i.pop(), a.pop());
  return {
    wrapped: i.join(`
`),
    softWrap: a,
  };
}
function tWd(e, t, n) {
  let r = e.childNodes[0]?.yogaNode;
  if (r) {
    let o = r.getComputedLeft(),
      s = r.getComputedTop();
    if (
      ((t =
        `
`.repeat(s) + gJr(t, o)),
      n && s > 0)
    )
      n.unshift(...Array(s).fill(Ane.HardBreak));
  }
  return t;
}
function renderNodeToOutput(
  node,
  output,
  n,
  {
    offsetX: r = 0,
    offsetY: o = 0,
    prevScreen: s,
    skipSelfBlit: i = false,
    inheritedBackgroundColor: a,
  },
) {
  let { yogaNode: l } = node;
  if (l) {
    if (l.getDisplay() === 1) {
      if (node.dirty) {
        let _ = Cy.get(node);
        if (_)
          (output.clear({
            x: Math.floor(_.x),
            y: Math.floor(_.y),
            width: Math.floor(_.width),
            height: Math.floor(_.height),
          }),
            zBt(node),
            (n.layoutShifted = true));
      }
      return;
    }
    let c = r + l.getComputedLeft(),
      u = l.getComputedTop(),
      d = o + u,
      p = l.getComputedWidth(),
      f = l.getComputedHeight();
    if (d < 0 && node.style.position === "absolute") d = 0;
    let m = Cy.get(node);
    if (
      !node.dirty &&
      !i &&
      node.pendingScrollDelta === void 0 &&
      m &&
      m.x === c &&
      m.y === d &&
      m.width === p &&
      m.height === f &&
      s
    ) {
      let _ = Math.floor(c),
        S = Math.floor(d),
        A = Math.floor(p),
        v = Math.floor(f);
      if ((output.blit(s, _, S, A, v), node.style.position === "absolute"))
        n.absoluteRectsCur.push(m);
      PWi(node, output, n, s, _, S, A, v);
      return;
    }
    let g = m !== void 0 && (m.x !== c || m.y !== d || m.width !== p || m.height !== f);
    if (g) n.layoutShifted = true;
    if (m && (node.dirty || g))
      output.clear(
        {
          x: Math.floor(m.x),
          y: Math.floor(m.y),
          width: Math.floor(m.width),
          height: Math.floor(m.height),
        },
        node.style.position === "absolute",
      );
    let h = wBt.get(node),
      y = h !== void 0;
    if (y) {
      n.layoutShifted = true;
      for (let _ of h)
        output.clear({
          x: Math.floor(_.x),
          y: Math.floor(_.y),
          width: Math.floor(_.width),
          height: Math.floor(_.height),
        });
      wBt.delete(node);
    }
    if (f === 0 && oWd(node, l)) {
      Cy.set(node, {
        x: c,
        y: d,
        width: p,
        height: f,
        top: u,
      });
      for (let _ of node.childNodes) if (_.nodeName !== "#text") MWi(_, c, d);
      node.dirty = false;
      return;
    }
    if (node.nodeName === "ink-raw-ansi") {
      let _ = node.attributes.rawText;
      if (_) output.write(c, d, _);
    } else if (node.nodeName === "ink-text") {
      let _ = KRn(
          node,
          a
            ? {
                backgroundColor: a,
              }
            : void 0,
        ),
        S = _.map((A) => A.text).join("");
      if (S.length > 0) {
        let A = Math.min(gWi(l), output.width - c),
          v = node.style.textWrap ?? "wrap",
          C = v === "wrap-stream" || WBt(S) > A,
          x,
          I;
        if (C && _.length === 1) {
          let k = _[0],
            D = RWi(S, A, v);
          ((I = D.softWrap),
            (x = D.wrapped
              .split(
                `
`,
              )
              .map((P) => {
                let O = Lit(P, k.styles);
                if (k.hyperlink) O = TLn(O, k.hyperlink);
                return O;
              }).join(`
`)));
        } else if (C) {
          let k = RWi(S, A, v);
          I = k.softWrap;
          let D = ZGd(_);
          x = eWd(k.wrapped, _, D, S, v === "wrap-trim", k.softWrap);
        } else
          x = _.map((k) => {
            let D = Lit(k.text, k.styles);
            if (k.hyperlink) D = TLn(D, k.hyperlink);
            return D;
          }).join("");
        ((x = tWd(node, x, I)), output.write(c, d, x, I));
      }
    } else if (node.nodeName === "ink-box") {
      let _ = node.style.backgroundColor ?? a;
      if (node.style.noSelect) {
        let P = Math.floor(c),
          O = node.style.noSelect === "from-left-edge";
        output.noSelect({
          x: O ? 0 : P,
          y: Math.floor(d),
          width: O ? P + Math.floor(p) : Math.floor(p),
          height: Math.floor(f),
        });
      }
      let S = node.style.overflowX ?? node.style.overflow,
        A = node.style.overflowY ?? node.style.overflow,
        v = S === "hidden" || S === "scroll",
        C = A === "hidden" || A === "scroll",
        x = A === "scroll",
        I = v || C,
        k,
        D;
      if (I) {
        let P = v ? c + l.getComputedBorder(0) : void 0,
          O = v ? c + l.getComputedWidth() - l.getComputedBorder(2) : void 0;
        ((k = C ? d + l.getComputedBorder(1) : void 0),
          (D = C ? d + l.getComputedHeight() - l.getComputedBorder(3) : void 0),
          output.clip({
            x1: P,
            x2: O,
            y1: k,
            y2: D,
          }));
      }
      if (x) {
        let P = l.getComputedPadding(1),
          O = Math.max(0, (D ?? d + f) - (k ?? d) - P - l.getComputedPadding(3)),
          L = node.childNodes.find((pe) => pe.yogaNode),
          M = L?.yogaNode,
          N = M?.getComputedHeight() ?? 0,
          B = node.scrollHeight ?? N,
          $ = node.scrollViewportHeight ?? O;
        ((node.scrollHeight = N),
          (node.scrollViewportHeight = O),
          (node.scrollViewportTop = (k ?? d) + P));
        let q = Math.max(0, N - O);
        if (node.scrollAnchor) {
          let pe = node.scrollAnchor.el.yogaNode?.getComputedTop();
          if (pe != null)
            ((node.scrollTop = pe + node.scrollAnchor.offset), (node.pendingScrollDelta = void 0));
          node.scrollAnchor = void 0;
        }
        let W = node.scrollTop ?? 0,
          V = node.attributes.stickyScroll,
          Y = node.stickyScroll ?? Boolean(V),
          z = Y ? B : Math.max(node.scrollHeightHwm ?? 0, B);
        node.scrollHeightHwm = Y ? void 0 : Math.max(z, N);
        let K = Math.max(0, z - $),
          Z = N >= B,
          J = node.attributes.followGrowth !== false;
        if ((Y || (V !== false && J && Z && W >= K)) && (node.pendingScrollDelta ?? 0) >= 0) {
          if (
            ((node.scrollTop = q),
            (node.pendingScrollDelta = void 0),
            node.stickyScroll === false && W >= K)
          ) {
            if (q - W > 3)
              T(
                `render-node-to-output: positional follow re-enabled sticky (scrollTop=${W} prevMax=${K} \u2192 newMax=${q}, prevH=${B} \u2192 ${N})`,
              );
            node.stickyScroll = true;
          }
        }
        let oe = node.scrollTop ?? 0,
          re = node.pendingScrollDelta,
          ee = node.scrollClampMin,
          ce = node.scrollClampMax,
          ae = ee !== void 0 && ce !== void 0;
        if (re !== void 0 && re !== 0) {
          let ge = ae && ((re < 0 && oe < ee) || (re > 0 && oe > ce)) ? Math.min(4, O >> 3) : O,
            he = T1().useAdaptiveDrain,
            ie = he ? JGd(node, re, ge) : QGd(node, re, ge);
          ((oe += ie), CWi(ie, node.pendingScrollDelta ?? 0, he ? "adaptive" : "proportional"));
        } else if (re === 0) node.pendingScrollDelta = void 0;
        let de = Math.max(0, Math.min(oe, q)),
          Ee = ae ? Math.max(ee, Math.min(de, ce)) : de;
        if (((node.scrollTop = de), de !== oe)) node.pendingScrollDelta = void 0;
        if (node.pendingScrollDelta !== void 0) n.scrollDrainNode = node;
        de = Ee;
        let me = de - (node.scrollTopRendered ?? de);
        if (me !== 0) {
          let pe = node.scrollViewportTop ?? 0;
          n.followScroll = {
            delta: me,
            viewportLeft: Math.floor(c),
            viewportRight: Math.floor(c + p) - 1,
            viewportTop: pe,
            viewportBottom: pe + O - 1,
          };
        }
        if (((node.scrollTopRendered = de), L && M)) {
          let pe = c + M.getComputedLeft(),
            ge = d + M.getComputedTop() - de,
            he = Cy.get(L),
            ie = null;
          if (he && he.y !== ge) {
            let Ce = he.y - ge,
              Ie = Math.floor(d + M.getComputedTop()),
              Ve = Ie + O - 1;
            if (
              Math.floor(c) <= 0 &&
              Math.floor(c + p) >= output.width &&
              m?.y === d &&
              m.height === f &&
              O > 0 &&
              Math.abs(Ce) < O
            )
              ((ie = {
                top: Ie,
                bottom: Ve,
                delta: Ce,
              }),
                (n.scrollHint = ie));
            else n.layoutShifted = true;
          }
          let le = M.getComputedHeight(),
            He = he?.height ?? le,
            ye = le - He,
            ue = !ie || ye === 0 || (ie.delta > 0 && ye === ie.delta),
            we = s && ue && !n.overlayActive;
          if (ie && !we) n.scrollHint = null;
          if (ie && we) {
            let { top: Ce, bottom: Ie, delta: Ve } = ie,
              Ze = Math.floor(p);
            (output.blit(s, Math.floor(c), Ce, Ze, Ie - Ce + 1), output.shift(Ce, Ie, Ve));
            let Be = Ve > 0 ? Ie - Ve + 1 : Ce,
              Me = Ve > 0 ? Ie : Ce - Ve - 1;
            (output.clear({
              x: Math.floor(c),
              y: Be,
              width: Ze,
              height: Me - Be + 1,
            }),
              output.clip({
                x1: void 0,
                x2: void 0,
                y1: Be,
                y2: Me + 1,
              }));
            let Ue = L.dirty ? new Set(L.childNodes.filter((bt) => bt.dirty)) : null;
            if (
              (vJr(L, output, n, pe, ge, y, void 0, Be - ge, Me + 1 - ge, _, true),
              output.unclip(),
              Ue)
            ) {
              let bt = Be - ge,
                Ke = Me + 1 - ge,
                Et = " ".repeat(Ze),
                ct = 0,
                Je;
              for (let gt of L.childNodes) {
                let st = gt,
                  xt = Ue.has(gt);
                if (!xt && ct === 0) {
                  if (Cy.has(st)) continue;
                }
                let vt = st.yogaNode;
                if (!vt) continue;
                let jt = vt.getComputedTop(),
                  en = vt.getComputedHeight(),
                  Dn = jt + en;
                if (xt) {
                  let Hn = Cy.get(st);
                  ct += en - (Hn ? Hn.height : 0);
                }
                if (Dn <= de || jt >= de + O) continue;
                if (jt >= bt && Dn <= Ke) continue;
                let nn = Math.floor(ge + jt);
                if (!xt) {
                  let Hn = Cy.get(st);
                  if (Hn) {
                    let kr = Math.floor(Hn.y) - Ve;
                    if (kr === nn) continue;
                    let Mr = Math.max(kr, ie.top),
                      fe = Math.min(kr + Hn.height, Je ?? ie.bottom + 1);
                    if (Mr < fe)
                      output.write(
                        Math.floor(c),
                        Mr,
                        Array(fe - Mr).fill(Et).join(`
`),
                      );
                  }
                }
                let Ln = Math.min(Math.floor(ge + Dn), Math.floor((k ?? d) + P + O));
                if (nn < Ln) {
                  Je ??= nn;
                  let Hn = Array(Ln - nn).fill(Et).join(`
`);
                  (output.write(Math.floor(c), nn, Hn),
                    output.clip({
                      x1: void 0,
                      x2: void 0,
                      y1: nn,
                      y2: Ln,
                    }),
                    renderNodeToOutput(st, output, n, {
                      offsetX: pe,
                      offsetY: ge,
                      prevScreen: void 0,
                      inheritedBackgroundColor: _,
                    }),
                    output.unclip());
                }
              }
            }
            let tt = n.absoluteRectsPrev.length ? " ".repeat(Ze) : "";
            for (let bt of n.absoluteRectsPrev) {
              if (bt.y >= Ie + 1 || bt.y + bt.height <= Ce) continue;
              let Ke = Math.max(Ce, Math.floor(bt.y) - Ve),
                Et = Math.min(Ie + 1, Math.floor(bt.y + bt.height) - Ve);
              if (Ke >= Be && Et <= Me + 1) continue;
              if (Ke >= Et) continue;
              let ct = Array(Et - Ke).fill(tt).join(`
`);
              (output.write(Math.floor(c), Ke, ct),
                output.clip({
                  x1: void 0,
                  x2: void 0,
                  y1: Ke,
                  y2: Et,
                }),
                vJr(L, output, n, pe, ge, y, void 0, Ke - ge, Et - ge, _, true),
                output.unclip());
            }
          } else {
            let Ce = he && he.y !== ge;
            if (Ce && k !== void 0 && D !== void 0)
              output.clear({
                x: Math.floor(c),
                y: Math.floor(k),
                width: Math.floor(p),
                height: Math.floor(D - k),
              });
            vJr(L, output, n, pe, ge, y, Ce || g ? void 0 : s, de, de + O, _);
          }
          (Cy.set(L, {
            x: pe,
            y: ge,
            width: M.getComputedWidth(),
            height: M.getComputedHeight(),
          }),
            (L.dirty = false));
        }
      } else {
        let P = node.style.backgroundColor;
        if (P || node.style.opaque) {
          let O = l.getComputedBorder(0),
            L = l.getComputedBorder(2),
            M = l.getComputedBorder(1),
            N = l.getComputedBorder(3),
            B = Math.floor(p) - O - L,
            $ = Math.floor(f) - M - N;
          if (B > 0 && $ > 0) {
            let q = " ".repeat(B),
              W = P
                ? Lit(q, {
                    backgroundColor: P,
                  })
                : q,
              V = Array($).fill(W).join(`
`);
            output.write(c + O, d + M, V);
          }
        }
        LWi(node, output, n, c, d, y, P || node.style.opaque ? void 0 : s, _);
      }
      if (I) output.unclip();
      AWi(c, d, node, output);
    } else if (node.nodeName === "ink-root") LWi(node, output, n, c, d, y, s, a);
    let b = {
      x: c,
      y: d,
      width: p,
      height: f,
      top: u,
    };
    if ((Cy.set(node, b), node.style.position === "absolute")) n.absoluteRectsCur.push(b);
    node.dirty = false;
  }
}
function nWd(e, t, n) {
  for (let r of e.childNodes) {
    let o = r;
    if (o.style.position !== "absolute") continue;
    let s = o.yogaNode;
    if (!s || s.getDisplay() === 1) continue;
    let i = Cy.get(o);
    if (!i) continue;
    let a = t + s.getComputedLeft(),
      l = n + s.getComputedTop();
    if (l < 0) l = 0;
    if (
      i.x !== a ||
      i.y !== l ||
      i.width !== s.getComputedWidth() ||
      i.height !== s.getComputedHeight()
    )
      return true;
  }
  return false;
}
function LWi(e, t, n, r, o, s, i, a) {
  let l = i !== void 0 && nWd(e, r, o),
    c = false,
    u = false;
  for (let d of e.childNodes) {
    let p = d,
      f = p.dirty,
      m = p.style.position === "absolute";
    if (
      (renderNodeToOutput(p, t, n, {
        offsetX: r,
        offsetY: o,
        prevScreen: s || c || (l && !m) ? void 0 : i,
        skipSelfBlit: u && m && !p.style.opaque && p.style.backgroundColor === void 0,
        inheritedBackgroundColor: a,
      }),
      f && !c)
    )
      if (!rWd(p) || m) c = true;
      else u = true;
  }
}
function rWd(e) {
  let t = e.style.overflowX ?? e.style.overflow,
    n = e.style.overflowY ?? e.style.overflow;
  return (t === "hidden" || t === "scroll") && (n === "hidden" || n === "scroll");
}
function oWd(e, t) {
  let n = e.parentNode;
  if (!n) return false;
  let r = t.getComputedTop(),
    o = n.childNodes,
    s = o.indexOf(e);
  for (let i = s + 1; i < o.length; i++) {
    let a = o[i].yogaNode;
    if (!a) continue;
    return a.getComputedTop() === r;
  }
  for (let i = s - 1; i >= 0; i--) {
    let a = o[i].yogaNode;
    if (!a) continue;
    return a.getComputedTop() === r;
  }
  return false;
}
function PWi(e, t, n, r, o, s, i, a) {
  let l = o + i,
    c = s + a;
  for (let u of e.childNodes) {
    if (u.nodeName === "#text") continue;
    let d = u;
    if (d.style.position === "absolute") {
      let p = Cy.get(d);
      if (p) {
        n.absoluteRectsCur.push(p);
        let f = Math.floor(p.x),
          m = Math.floor(p.y),
          g = Math.floor(p.width),
          h = Math.floor(p.height);
        if (f < o || m < s || f + g > l || m + h > c) t.blit(r, f, m, g, h);
      }
    }
    PWi(d, t, n, r, o, s, i, a);
  }
}
function vJr(e, t, n, r, o, s, i, a, l, c, u = false) {
  let d = false,
    p = 0;
  for (let f of e.childNodes) {
    let m = f,
      g = m.yogaNode;
    if (g) {
      let y = Cy.get(m),
        b,
        _;
      if (y?.top !== void 0 && !m.dirty && p === 0) ((b = y.top), (_ = y.height));
      else {
        if (((b = g.getComputedTop()), (_ = g.getComputedHeight()), m.dirty))
          p += _ - (y ? y.height : 0);
        if (y) y.top = b;
      }
      if (b + _ <= a || b >= l) {
        if (!u) zBt(m);
        continue;
      }
    }
    let h = m.dirty;
    if (
      (renderNodeToOutput(m, t, n, {
        offsetX: r,
        offsetY: o,
        prevScreen: s || d ? void 0 : i,
        inheritedBackgroundColor: c,
      }),
      h)
    )
      d = true;
  }
}
function zBt(e) {
  Cy.delete(e);
  for (let t of e.childNodes) if (t.nodeName !== "#text") zBt(t);
}
function MWi(e, t, n) {
  let r = e.yogaNode;
  if (!r || r.getDisplay() === 1) return;
  let o = t + r.getComputedLeft(),
    s = n + r.getComputedTop();
  Cy.set(e, {
    x: o,
    y: s,
    width: r.getComputedWidth(),
    height: r.getComputedHeight(),
    top: r.getComputedTop(),
  });
  for (let i of e.childNodes) if (i.nodeName !== "#text") MWi(i, o, s);
}
var VGd = 4,
  zGd = 5,
  KGd = 12,
  YGd = 2,
  XGd = 3,
  TJr = 30,
  xWi = "\x1B]",
  kWi = "\x07",
  HLn,
  yGe;
