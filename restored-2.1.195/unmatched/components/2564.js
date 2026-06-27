// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gm
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0057  score=0.3741  fileCov=0.0057
// note: nearest: src/screens/REPL.tsx (0.0057); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gm = E(() => {
  si();
  Ye();
  q6i = R(lt(), 1), SPn = R(se(), 1), wZr = {
    success: {
      icon: nt.tick,
      color: "success",
      ariaLabel: "done:"
    },
    error: {
      icon: nt.cross,
      color: "error",
      ariaLabel: "failed:"
    },
    warning: {
      icon: nt.warning,
      color: "warning",
      ariaLabel: "warning:"
    },
    info: {
      icon: nt.info,
      color: "suggestion",
      ariaLabel: "note:"
    },
    pending: {
      icon: nt.circle,
      color: void 0,
      ariaLabel: "pending:"
    },
    loading: {
      icon: "\u2026",
      color: void 0,
      ariaLabel: "loading:"
    }
  };
});
function Wh(e, t) {
  let n = V6i.c(8),
    r = t === void 0 ? true : t,
    s = tlt.useContext(vat)?.setState,
    i,
    a;
  if (n[0] !== r || n[1] !== e || n[2] !== s) i = () => {
    if (!r || !s) return;
    return s(u => {
      if (u.activeOverlays.has(e)) return u;
      let d = new Set(u.activeOverlays);
      return d.add(e), {
        ...u,
        activeOverlays: d
      };
    }), () => {
      s(u => {
        if (!u.activeOverlays.has(e)) return u;
        let d = new Set(u.activeOverlays);
        return d.delete(e), {
          ...u,
          activeOverlays: d
        };
      });
    };
  }, a = [e, r, s], n[0] = r, n[1] = e, n[2] = s, n[3] = i, n[4] = a;else i = n[3], a = n[4];
  tlt.useEffect(i, a);
  let l, c;
  if (n[5] !== r) l = () => {
    if (!r) return;
    return pzd;
  }, c = [r], n[5] = r, n[6] = l, n[7] = c;else l = n[6], c = n[7];
  tlt.useLayoutEffect(l, c);
}
function pzd() {
  return Cu.get(process.stdout)?.invalidatePrevFrame();
}
function z6i() {
  return Ht(fzd);
}
function fzd(e) {
  return e.activeOverlays.size > 0;
}
function pbe() {
  return Ht(mzd);
}
function mzd(e) {
  for (let t of e.activeOverlays) if (!uzd.has(t)) return true;
  return false;
}
function EPn() {
  return dT(gzd) ?? false;
}
function gzd(e) {
  for (let t of e.activeOverlays) if (dzd.has(t)) return true;
  return false;
}
var V6i, tlt, uzd, dzd;