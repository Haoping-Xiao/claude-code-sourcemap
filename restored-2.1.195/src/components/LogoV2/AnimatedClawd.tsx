// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bCo
// matched 2.1.88 source: src/components/LogoV2/AnimatedClawd.tsx
// class=modified  jaccard=0.4756  score=0.7452  fileCov=0.5679
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bCo = E(() => {
  Ye();
  Mne();
  dr();
  x8t();
  ((Tsl = R(lt(), 1)),
    (Gpe = R(rt(), 1)),
    (q6 = R(se(), 1)),
    (Esl = {
      dot: "\xB7",
      wave: "~",
    }));
  ((Azn = [
    ..._Co(),
    ...ew("arms-up", 0, 3),
    ...ew("default", 0, 1),
    ..._Co(),
    ...ew("arms-up", 0, 3),
    ...ew("default", 0, 1),
  ]),
    (vsl = [...ew("look-right", 0, 5), ...ew("look-left", 0, 5), ...ew("default", 0, 1)]),
    (Arf = [...ew("default", 0, 12), ...ew("look-right", 0, 5), ...ew("look-left", 0, 5)]),
    (Asl = [Azn, vsl]),
    (wsl = {
      pose: "default",
      offset: 0,
    }));
  ((vrf = [...Azn, ...ew("default", 1, 3)]),
    (wrf = [
      ...ew("look-left", 0, 2),
      ...ew("look-right", 0, 2),
      ...ew("look-left", 0, 2),
      ...ew("arms-up", 0, 3),
      ...ew("default", 0, 1),
    ]),
    (Crf = [
      ...ew("default", 1, 1, -Isl),
      ...ew("arms-up", 0, 2, -6),
      ...ew("default", 0, 1, -6),
      ...ew("default", 1, 1, -6),
      ...ew("arms-up", 0, 2, -3),
      ...ew("default", 0, 1, -3),
      ...ew("default", 1, 1, -3),
      ...ew("arms-up", 0, 2, 0),
      ..._Co(0),
      ...ew("default", 0, 1, 0),
    ]),
    (Hsl = {
      jump: Azn,
      look: vsl,
      celebrate: vrf,
      skip: Crf,
      spin: wrf,
    }));
});
function jyt(e) {
  let t = e.toUpperCase();
  return xrf[t] ?? `${t} `;
}
function Yy(e, t, n = "precise") {
  let r = t.toUpperCase(),
    o = jyt(r);
  if (krf.has(r)) return `${o}${Math.round(e)}`;
  let s = e / 100;
  if (n === "whole") return `${o}${Math.round(s)}`;
  if (n === "fit" && s % 1 === 0) return `${o}${s}`;
  return `${o}${s.toFixed(2)}`;
}
var xrf, krf;
