// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f8l
// matched 2.1.88 source: src/components/tasks/RemoteSessionProgress.tsx
// class=modified  jaccard=0.4149  score=0.7  fileCov=0.5046
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module f8l] deps: Yyt, Ye, ps, ii, LL, es, co, Bs, vi, Ko, eIo, rjo, YHe
((d8l = R(lt(), 1)), (AS = R(se(), 1)));
function formatReviewStageCounts(stage, found, verified, refuted) {
  if (!stage) return `${found} found \xB7 ${verified} verified`;
  if (stage === "synthesizing") {
    let o = [`${verified} verified`];
    if (refuted > 0) o.push(`${refuted} refuted`);
    return (o.push("deduping"), o.join(" \xB7 "));
  }
  if (stage === "verifying") {
    let o = [`${found} found`, `${verified} verified`];
    if (refuted > 0) o.push(`${refuted} refuted`);
    return o.join(" \xB7 ");
  }
  return found > 0 ? `${found} found` : "finding";
}
function ojo(e) {
  let t = lsr.c(5),
    { text: n, phase: r } = e,
    o = r === void 0 ? 0 : r,
    s;
  if (t[0] !== n) ((s = [...n]), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== o || t[3] !== s)
    ((i = $H.jsx($H.Fragment, {
      children: s.map((a, l) =>
        $H.jsx(
          w,
          {
            color: q9(l + o),
            children: a,
          },
          l,
        ),
      ),
    })),
      (t[2] = o),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  return i;
}
function sjo(e, t, n) {
  let r = ijo.useRef(e),
    o = ijo.useRef(t);
  if (n || e < r.current) r.current = e;
  else if (e > r.current && t !== o.current) ((r.current += 1), (o.current = t));
  return r.current;
}
function ReviewRainbowLine(t0) {
  let t = lsr.c(20),
    { session: n } = t0,
    r = G_(),
    o = Sd(),
    s;
  if (t[0] !== o || t[1] !== r.prefersReducedMotion)
    ((s = Mv(r.prefersReducedMotion) || o),
      (t[0] = o),
      (t[1] = r.prefersReducedMotion),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a = n.reviewProgress,
    l = n.status === "running",
    [, c] = Kf(l && !i ? m8l : null),
    u = a?.bugsFound ?? 0,
    d = a?.bugsVerified ?? 0,
    p = a?.bugsRefuted ?? 0,
    f = i || !l,
    m = sjo(u, c, f),
    g = sjo(d, c, f),
    h = sjo(p, c, f),
    y = Math.floor(c / (m8l * 3)) % 7;
  if (n.status === "completed") {
    let I, k;
    if (t[3] === Symbol.for("react.memo_cache_sentinel"))
      ((I = $H.jsxs(w, {
        color: "background",
        children: [BO, " "],
      })),
        (k = $H.jsx(ojo, {
          text: "ultrareview",
          phase: 0,
        })),
        (t[3] = I),
        (t[4] = k));
    else ((I = t[3]), (k = t[4]));
    let D;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((D = $H.jsxs($H.Fragment, {
        children: [
          I,
          k,
          $H.jsxs(w, {
            dimColor: true,
            children: [
              " ready \xB7 ",
              $H.jsx(ht, {
                chord: "shift+down",
                action: "view",
              }),
            ],
          }),
        ],
      })),
        (t[5] = D));
    else D = t[5];
    return D;
  }
  if (n.status === "failed") {
    let I;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((I = $H.jsxs($H.Fragment, {
        children: [
          $H.jsxs(w, {
            color: "background",
            children: [BO, " "],
          }),
          $H.jsx(ojo, {
            text: "ultrareview",
            phase: 0,
          }),
          $H.jsxs(w, {
            color: "error",
            dimColor: true,
            children: [" \xB7 ", "error"],
          }),
        ],
      })),
        (t[6] = I));
    else I = t[6];
    return I;
  }
  let b;
  if (t[7] !== m || t[8] !== a || t[9] !== h || t[10] !== g)
    ((b = !a ? "setting up" : formatReviewStageCounts(a.stage, m, g, h)),
      (t[7] = m),
      (t[8] = a),
      (t[9] = h),
      (t[10] = g),
      (t[11] = b));
  else b = t[11];
  let _ = b,
    S;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((S = $H.jsxs(w, {
      color: "background",
      children: [mv, " "],
    })),
      (t[12] = S));
  else S = t[12];
  let A = l ? y : 0,
    v;
  if (t[13] !== A)
    ((v = $H.jsx(ojo, {
      text: "ultrareview",
      phase: A,
    })),
      (t[13] = A),
      (t[14] = v));
  else v = t[14];
  let C;
  if (t[15] !== _)
    ((C = $H.jsxs(w, {
      dimColor: true,
      children: [" \xB7 ", _],
    })),
      (t[15] = _),
      (t[16] = C));
  else C = t[16];
  let x;
  if (t[17] !== v || t[18] !== C)
    ((x = $H.jsxs($H.Fragment, {
      children: [S, v, C],
    })),
      (t[17] = v),
      (t[18] = C),
      (t[19] = x));
  else x = t[19];
  return x;
}
function RemoteSessionProgress(t0) {
  let t = lsr.c(11),
    { session: n } = t0;
  if (n.isRemoteReview) {
    let a;
    if (t[0] !== n)
      ((a = $H.jsx(ReviewRainbowLine, {
        session: n,
      })),
        (t[0] = n),
        (t[1] = a));
    else a = t[1];
    return a;
  }
  if (n.status === "completed") {
    let a;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((a = $H.jsx(w, {
        bold: true,
        color: "success",
        dimColor: true,
        children: "done",
      })),
        (t[2] = a));
    else a = t[2];
    return a;
  }
  if (n.status === "failed") {
    let a;
    if (t[3] === Symbol.for("react.memo_cache_sentinel"))
      ((a = $H.jsx(w, {
        bold: true,
        color: "error",
        dimColor: true,
        children: "error",
      })),
        (t[3] = a));
    else a = t[3];
    return a;
  }
  if (!n.todoList.length) {
    let a;
    if (t[4] !== n.status)
      ((a = $H.jsxs(w, {
        dimColor: true,
        children: [n.status, "\u2026"],
      })),
        (t[4] = n.status),
        (t[5] = a));
    else a = t[5];
    return a;
  }
  let r;
  if (t[6] !== n.todoList) ((r = On(n.todoList, i5f)), (t[6] = n.todoList), (t[7] = r));
  else r = t[7];
  let o = r,
    s = n.todoList.length,
    i;
  if (t[8] !== o || t[9] !== s)
    ((i = $H.jsxs(w, {
      dimColor: true,
      children: [o, "/", s],
    })),
      (t[8] = o),
      (t[9] = s),
      (t[10] = i));
  else i = t[10];
  return i;
}
function i5f(e) {
  return e.status === "completed";
}
var lsr,
  ijo,
  $H,
  m8l = 80;
