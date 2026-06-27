// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RUt
// matched 2.1.88 source: src/utils/textHighlighting.ts
// class=modified  jaccard=0.5013  score=1  fileCov=0.5013
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function S6i(e, t) {
  if (t.length === 0)
    return [
      {
        text: e,
        start: 0,
      },
    ];
  let n = [...t].sort((s, i) => {
      if (s.start !== i.start) return s.start - i.start;
      return i.priority - s.priority;
    }),
    r = [],
    o = [];
  for (let s of n) {
    if (s.start === s.end) continue;
    if (
      !o.some(
        (a) =>
          (s.start >= a.start && s.start < a.end) ||
          (s.end > a.start && s.end <= a.end) ||
          (s.start <= a.start && s.end >= a.end),
      )
    )
      (r.push(s),
        o.push({
          start: s.start,
          end: s.end,
        }));
  }
  return new E6i(e).segment(r);
}
class E6i {
  text;
  tokens;
  visiblePos = 0;
  stringPos = 0;
  tokenIdx = 0;
  charIdx = 0;
  codes = [];
  constructor(e) {
    this.text = e;
    this.tokens = Fit(e);
  }
  segment(e) {
    let t = [];
    for (let r of e) {
      let o = this.segmentTo(r.start);
      if (o) t.push(o);
      let s = this.segmentTo(r.end);
      if (s) ((s.highlight = r), t.push(s));
    }
    let n = this.segmentTo(1 / 0);
    if (n) t.push(n);
    return t;
  }
  segmentTo(e) {
    if (this.tokenIdx >= this.tokens.length || e <= this.visiblePos) return null;
    let t = this.visiblePos;
    while (this.tokenIdx < this.tokens.length) {
      let l = this.tokens[this.tokenIdx];
      if (l.type !== "ansi") break;
      (this.codes.push(l), (this.stringPos += l.code.length), this.tokenIdx++);
    }
    let n = this.stringPos,
      r = [...this.codes];
    while (this.visiblePos < e && this.tokenIdx < this.tokens.length) {
      let l = this.tokens[this.tokenIdx];
      if (l.type === "ansi")
        (this.codes.push(l), (this.stringPos += l.code.length), this.tokenIdx++);
      else {
        let c = e - this.visiblePos,
          u = l.value.length - this.charIdx,
          d = Math.min(c, u);
        if (
          ((this.stringPos += d),
          (this.visiblePos += d),
          (this.charIdx += d),
          this.charIdx >= l.value.length)
        )
          (this.tokenIdx++, (this.charIdx = 0));
      }
    }
    if (this.stringPos === n) return null;
    let o = b6i(r),
      s = b6i(this.codes);
    this.codes = s;
    let i = v1(o),
      a = v1(Y_e(s));
    return {
      text: i + this.text.substring(n, this.stringPos) + a,
      start: t,
    };
  }
}
function b6i(e) {
  return z7(e).filter((t) => t.code !== t.endCode);
}
