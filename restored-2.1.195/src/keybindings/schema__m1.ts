// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ezi
// matched 2.1.88 source: src/keybindings/schema.ts
// class=modified (alt of src/keybindings/schema.ts)  jaccard=0.0877  score=0.3748  fileCov=0.1027
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ezi = E(() => {
  Wzd = {
    "confirm:yes": {
      description: "confirm",
    },
    "confirm:no": {
      description: "cancel",
    },
    "confirm:previous": {
      description: "navigate",
    },
    "confirm:next": {
      description: "navigate",
    },
    "confirm:nextField": {
      description: "next field",
    },
    "confirm:previousField": {
      description: "previous field",
    },
    "confirm:toggle": {
      description: "toggle",
    },
    "confirm:cycleMode": {
      description: "cycle mode",
    },
    "confirm:toggleExplanation": {
      description: "explanation",
    },
    "select:next": {
      description: "navigate",
    },
    "select:previous": {
      description: "navigate",
    },
    "select:pageUp": {
      description: "page up",
    },
    "select:pageDown": {
      description: "page down",
    },
    "select:first": {
      description: "first",
    },
    "select:last": {
      description: "last",
    },
    "select:accept": {
      description: "select",
    },
    "select:cancel": {
      description: "cancel",
    },
    "tabs:next": {
      description: "switch tab",
    },
    "tabs:previous": {
      description: "switch tab",
    },
    "app:toggleReplTab": {
      description: "switch tab",
    },
  };
});
function Hzi(e) {
  let t = Azi.c(18),
    { boundary: n, fallback: r, order: o, omit: s, max: i, maxWidth: a } = e,
    l = r === void 0 ? null : r,
    c = i === void 0 ? qzd : i,
    u = KE(),
    { focusManager: d, rootNode: p } = fbe.useContext(J7),
    [f, m] = fbe.useState(0),
    g,
    h;
  if (t[0] !== u || t[1] !== d)
    ((g = () => {
      if (!u || !d) return;
      let I = () => m(Vzd),
        k = d.subscribe(I),
        D = u.keyHandlerRegistry.scopesChanged.subscribe(I);
      return (
        I(),
        () => {
          (k(), D());
        }
      );
    }),
      (h = [u, d]),
      (t[0] = u),
      (t[1] = d),
      (t[2] = g),
      (t[3] = h));
  else ((g = t[2]), (h = t[3]));
  fbe.useEffect(g, h);
  let y = d?.activeElement ?? null,
    b = n?.current ?? p ?? null,
    _;
  if (
    t[4] !== u ||
    t[5] !== c ||
    t[6] !== a ||
    t[7] !== s ||
    t[8] !== o ||
    t[9] !== y ||
    t[10] !== b
  )
    ((_ = zzd({
      ctx: u,
      activeElement: y,
      boundaryNode: b,
      order: o,
      omit: s,
      max: c,
      maxWidth: a,
    })),
      (t[4] = u),
      (t[5] = c),
      (t[6] = a),
      (t[7] = s),
      (t[8] = o),
      (t[9] = y),
      (t[10] = b),
      (t[11] = _));
  else _ = t[11];
  let S = _,
    A = fbe.useRef(null),
    v,
    C;
  if (t[12] !== S.fellBack || t[13] !== S.hadEntryWithoutDescription)
    ((v = () => {
      let I = S.fellBack ? "fell_back" : S.hadEntryWithoutDescription ? "no_description" : "ok";
      if (I === A.current) return;
      let k = A.current === null;
      if (((A.current = I), k && I === "fell_back")) return;
      if (I === "ok") xe("keybinding_auto_hints");
      else It("keybinding_auto_hints", I);
    }),
      (C = [S.fellBack, S.hadEntryWithoutDescription]),
      (t[12] = S.fellBack),
      (t[13] = S.hadEntryWithoutDescription),
      (t[14] = v),
      (t[15] = C));
  else ((v = t[14]), (C = t[15]));
  if ((fbe.useEffect(v, C), S.fellBack)) return l;
  let x;
  if (t[16] !== S.text)
    ((x = Tzi.jsx(w, {
      dimColor: true,
      italic: true,
      children: S.text,
    })),
      (t[16] = S.text),
      (t[17] = x));
  else x = t[17];
  return x;
}
function Vzd(e) {
  return e + 1;
}
function zzd({
  ctx: e,
  activeElement: t,
  boundaryNode: n,
  order: r,
  omit: o,
  max: s,
  maxWidth: i,
}) {
  let a = {
    fellBack: true,
    text: "",
    hadEntryWithoutDescription: false,
  };
  if (!e || !t || !n) return a;
  let l = [],
    c = false,
    u = 0,
    d = t;
  while (d) {
    let x = d === n,
      I = e.keyHandlerRegistry.decls.get(d);
    if (I)
      for (let k of I.entriesRef.current) {
        if (!k.action) continue;
        l.push({
          action: k.action,
          hint: k.hint,
          scope: I.scope,
          depth: u,
          isBoundary: x,
        });
      }
    if (x) {
      c = true;
      break;
    }
    ((d = d.parentNode), u++);
  }
  if (!c) return a;
  if (!l.some((x) => !x.isBoundary)) return a;
  let f = new Set(o ?? []),
    m = new Set(),
    g = false,
    h = [];
  for (let x of l) {
    if (f.has(x.action)) continue;
    let I = x.hint ?? Szi(x.action)?.description;
    if (!I) {
      g = true;
      continue;
    }
    if (m.has(I)) continue;
    let k = bqi(x.action, x.scope ? [x.scope] : [], e.bindings);
    if (!k) continue;
    (m.add(I),
      h.push({
        action: x.action,
        text: `${nX(k)} ${I}`,
        depth: x.depth,
      }));
  }
  let y = new Map();
  ((r ?? []).forEach((x, I) => y.set(x, I)),
    h.sort((x, I) => {
      let k = y.get(x.action) ?? 1 / 0,
        D = y.get(I.action) ?? 1 / 0;
      if (k !== D) return k - D;
      return x.depth - I.depth;
    }));
  let b = " \xB7 ",
    _ = rn(b),
    S = 0,
    A = [];
  for (;;) {
    A = [];
    let x = 0;
    for (let D of h) {
      if (A.length >= s) break;
      let P = (A.length === 0 ? 0 : _) + rn(D.text);
      if (i !== void 0 && x + P + S > i && A.length > 0) break;
      (A.push(D.text), (x += P));
    }
    let I = h.length - A.length;
    if (i === void 0 || I === 0) break;
    let k = rn(`${b}+${I} more`);
    if (k <= S) break;
    S = k;
  }
  if (A.length === 0) return a;
  let v = h.length - A.length;
  return {
    fellBack: false,
    text: v > 0 ? `${A.join(b)}${b}+${v} more` : A.join(b),
    hadEntryWithoutDescription: g,
  };
}
var Azi,
  fbe,
  Tzi,
  qzd = 4;
