// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kSl
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.002  score=0.1328  fileCov=0.002
// note: nearest: src/main.tsx (0.002); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kSl = E(() => {
  Ye();
  kt();
  ISl = R(lt(), 1), xSl = R(rt(), 1), Pzt = R(se(), 1);
});
function RSl(e) {
  if (!e.message) return "";
  return e.message;
}
function LSl(e) {
  let t;
  if (e.disabledReason === "config_off") t = mq.jsxs(U, {
    flexDirection: "row",
    children: [mq.jsxs(w, {
      children: ['Not sent because "Push when Claude decides" is disabled in', " "]
    }), mq.jsx(IRo, {
      command: "config"
    }), mq.jsx(w, {
      children: "."
    })]
  });else if (e.disabledReason === "user_present") t = mq.jsx(w, {
    children: "Not sent because you're active in this terminal."
  });else if (e.disabledReason === "no_transport") t = e.localSent ? mq.jsx(w, {
    children: "Terminal notification sent."
  }) : mq.jsxs(U, {
    flexDirection: "row",
    children: [mq.jsx(w, {
      children: "Not sent \u2014 Remote Control is off. Enable with "
    }), mq.jsx(IRo, {
      command: "remote-control"
    }), mq.jsx(w, {
      children: "."
    })]
  });else {
    if (e.localSent === void 0) return null;
    t = mq.jsx(w, {
      children: e.localSent ? "Terminal and mobile notification sent." : "Mobile notification sent."
    });
  }
  return mq.jsx(qn, {
    height: 1,
    children: t
  });
}
var mq;