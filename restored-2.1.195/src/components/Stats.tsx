// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JOl
// matched 2.1.88 source: src/components/Stats.tsx
// class=modified  jaccard=0.3541  score=0.8505  fileCov=0.3776
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var JOl = E(() => {
  iu();
  si();
  fH();
  _i();
  p8();
  Tc();
  Ye();
  ps();
  PVt();
  es();
  vOl();
  Ao();
  NOl();
  Fh();
  jOl();
  nne();
  Mke();
  lJ();
  Ko();
  kP();
  EC();
  ((mEt = R(lt(), 1)), (qOl = R(_Ol(), 1)), (JF = R(rt(), 1)), (_s = R(se(), 1)));
  ((GOl = {
    "7d": "Last 7 days",
    "30d": "Last 30 days",
    all: "All time",
  }),
    (ztr = ["all", "7d", "30d"]));
  dPf = {
    todaySeconds: 0,
    weekSeconds: 0,
    longestStretchMs: 0,
    lastWeekSessions: {
      count: 0,
      medianMs: 0,
      averageMs: 0,
      longestMs: 0,
    },
  };
  ((gPf = [
    {
      name: "The Little Prince",
      tokens: 22000,
    },
    {
      name: "The Old Man and the Sea",
      tokens: 35000,
    },
    {
      name: "A Christmas Carol",
      tokens: 37000,
    },
    {
      name: "Animal Farm",
      tokens: 39000,
    },
    {
      name: "Fahrenheit 451",
      tokens: 60000,
    },
    {
      name: "The Great Gatsby",
      tokens: 62000,
    },
    {
      name: "Slaughterhouse-Five",
      tokens: 64000,
    },
    {
      name: "Brave New World",
      tokens: 83000,
    },
    {
      name: "The Catcher in the Rye",
      tokens: 95000,
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      tokens: 103000,
    },
    {
      name: "The Hobbit",
      tokens: 123000,
    },
    {
      name: "1984",
      tokens: 123000,
    },
    {
      name: "To Kill a Mockingbird",
      tokens: 130000,
    },
    {
      name: "Pride and Prejudice",
      tokens: 156000,
    },
    {
      name: "Dune",
      tokens: 244000,
    },
    {
      name: "Moby-Dick",
      tokens: 268000,
    },
    {
      name: "Crime and Punishment",
      tokens: 274000,
    },
    {
      name: "A Game of Thrones",
      tokens: 381000,
    },
    {
      name: "Anna Karenina",
      tokens: 468000,
    },
    {
      name: "Don Quixote",
      tokens: 520000,
    },
    {
      name: "The Lord of the Rings",
      tokens: 576000,
    },
    {
      name: "The Count of Monte Cristo",
      tokens: 603000,
    },
    {
      name: "Les Mis\xE9rables",
      tokens: 689000,
    },
    {
      name: "War and Peace",
      tokens: 730000,
    },
  ]),
    (hPf = [
      {
        name: "a TED talk",
        minutes: 18,
      },
      {
        name: "an episode of The Office",
        minutes: 22,
      },
      {
        name: "listening to Abbey Road",
        minutes: 47,
      },
      {
        name: "a yoga class",
        minutes: 60,
      },
      {
        name: "a World Cup soccer match",
        minutes: 90,
      },
      {
        name: "a half marathon (average time)",
        minutes: 120,
      },
      {
        name: "the movie Inception",
        minutes: 148,
      },
      {
        name: "watching Titanic",
        minutes: 195,
      },
      {
        name: "a transatlantic flight",
        minutes: 420,
      },
      {
        name: "a full night of sleep",
        minutes: 480,
      },
    ]));
});
function WOe(e) {
  let t = QOl.c(27),
    { onClose: n, context: r, defaultTab: o } = e,
    [s, i] = GOe.useState(o),
    [a, l] = GOe.useState(false),
    [c, u] = GOe.useState(false),
    [d, p] = GOe.useState(false),
    f = YE(),
    { rows: m } = bb(br()),
    g = f ? m + 1 : Math.max(15, Math.min(Math.floor(m * 0.8), 30)),
    [h] = GOe.useState(IPf);
  ig();
  let y;
  if (t[0] !== n || t[1] !== a)
    ((y = () => {
      if (a) return;
      n("Settings dialog dismissed", {
        display: "system",
      });
    }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = y));
  else y = t[2];
  let b = y,
    _ = !a && !(s === "Config" && c) && !(s === "Gates" && d) && s !== "Stats",
    S;
  if (t[3] !== _)
    ((S = {
      context: "Settings",
      isActive: _,
    }),
      (t[3] = _),
      (t[4] = S));
  else S = t[4];
  $r("confirm:no", b, S);
  let A;
  if (t[5] !== r || t[6] !== h)
    ((A = WQ.jsx(
      sm,
      {
        title: "Status",
        children: WQ.jsx(HMl, {
          context: r,
          diagnosticsPromise: h,
        }),
      },
      "status",
    )),
      (t[5] = r),
      (t[6] = h),
      (t[7] = A));
  else A = t[7];
  let v;
  if (t[8] !== g || t[9] !== r || t[10] !== n)
    ((v = WQ.jsx(
      sm,
      {
        title: "Config",
        children: WQ.jsx(GOe.Suspense, {
          fallback: null,
          children: WQ.jsx(K$l, {
            context: r,
            onClose: n,
            setTabsHidden: l,
            onIsSearchModeChange: u,
            contentHeight: g,
          }),
        }),
      },
      "config",
    )),
      (t[8] = g),
      (t[9] = r),
      (t[10] = n),
      (t[11] = v));
  else v = t[11];
  let C;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((C = WQ.jsx(
      sm,
      {
        title: "Usage",
        children: WQ.jsx(hOl, {}),
      },
      "usage",
    )),
      (t[12] = C));
  else C = t[12];
  let x;
  if (t[13] !== n)
    ((x = WQ.jsx(
      sm,
      {
        title: "Stats",
        children: WQ.jsx(zOl, {
          onClose: n,
        }),
      },
      "stats",
    )),
      (t[13] = n),
      (t[14] = x));
  else x = t[14];
  let I;
  if (t[15] !== g) ((I = []), (t[15] = g), (t[16] = I));
  else I = t[16];
  let k;
  if (t[17] !== A || t[18] !== v || t[19] !== x || t[20] !== I)
    ((k = [A, v, C, x, ...I]), (t[17] = A), (t[18] = v), (t[19] = x), (t[20] = I), (t[21] = k));
  else k = t[21];
  let D = k,
    P = o !== "Config" && o !== "Gates",
    O;
  if (t[22] !== s || t[23] !== P || t[24] !== D || t[25] !== a)
    ((O = WQ.jsx(Fu, {
      color: "permission",
      children: WQ.jsx(cR, {
        title: "Settings",
        color: "permission",
        selectedTab: s,
        onTabChange: i,
        hidden: a,
        initialHeaderFocused: P,
        children: D,
      }),
    })),
      (t[22] = s),
      (t[23] = P),
      (t[24] = D),
      (t[25] = a),
      (t[26] = O));
  else O = t[26];
  return O;
}
function IPf() {
  return AMl().catch(xPf);
}
function xPf() {
  return [];
}
var QOl, GOe, WQ;
