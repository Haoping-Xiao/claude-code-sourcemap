// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MHo
// matched 2.1.88 source: src/utils/commandLifecycle.ts
// class=modified  jaccard=0.3977  score=1  fileCov=0.3977
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MHo = E(() => {
  si();
  _i();
  Tc();
  Ye();
  uo();
  IL();
  sA();
  ZPe();
  es();
  bk();
  m0e();
  ((nJa = R(lt(), 1)), (j9e = R(rt(), 1)), (RT = R(se(), 1)));
});
class sJa {
  #e = void 0;
  #t = !1;
  #n = null;
  #r = null;
  #o = null;
  #l = null;
  #s = null;
  #a = null;
  #c = Mi();
  #u = 0;
  #i = !1;
  getSnapshot = () => (this.#t ? void 0 : this.#e);
  subscribe = (e) => {
    let t = this.#c.subscribe(e);
    if ((this.#u++, !this.#i)) ((this.#i = !0), (this.#a = _Oa(this.#m)), this.#d());
    let n = !1;
    return () => {
      if (n) return;
      if (((n = !0), t(), this.#u--, this.#u === 0)) this.#b();
    };
  };
  #p() {
    this.#c.emit();
  }
  #h(e) {
    if (e === this.#r && this.#n !== null) return;
    (this.#n?.close(), (this.#n = null), (this.#r = e));
    try {
      ((this.#n = oJa.watch(e, this.#m)), this.#n.unref());
    } catch {}
  }
  #m = () => {
    if (this.#l) clearTimeout(this.#l);
    ((this.#l = setTimeout(() => void this.#d(), _Xp)), this.#l.unref());
  };
  refetch = () => this.#d();
  #d = async () => {
    let e = yF();
    this.#h(T5(e));
    let t = (await W4(e)).filter((o) => !o.metadata?._internal);
    if (!this.#i) return;
    let n = t.some((o) => o.status !== "completed"),
      r = !vXp(this.#e, t);
    if (r) this.#e = t;
    if (n || t.length === 0) ((this.#t = t.length === 0), this.#g());
    else if (this.#o === null && !this.#t)
      ((this.#o = setTimeout(this.#y.bind(this, e), yXp)), this.#o.unref());
    if (r) this.#p();
    if (this.#s) (clearTimeout(this.#s), (this.#s = null));
    if (n) ((this.#s = setTimeout(this.#m, bXp)), this.#s.unref());
  };
  #y(e) {
    this.#o = null;
    let t = yF();
    if (t !== e) return;
    W4(t).then(async (n) => {
      if (n.length > 0 && n.every((o) => o.status === "completed"))
        (await EOa(t), (this.#e = []), (this.#t = !0));
      this.#p();
    });
  }
  #g() {
    if (this.#o) (clearTimeout(this.#o), (this.#o = null));
  }
  #b() {
    if (
      (this.#n?.close(),
      (this.#n = null),
      (this.#r = null),
      this.#a?.(),
      (this.#a = null),
      this.#g(),
      this.#l)
    )
      clearTimeout(this.#l);
    if (this.#s) clearTimeout(this.#s);
    ((this.#l = null), (this.#s = null), (this.#i = !1));
  }
}
function EXp() {
  return (SXp ??= new sJa());
}
function $Vt() {
  let e = Ht((r) => r.teamContext),
    n = EH() && !da() && (!e || wM(e)) ? EXp() : null;
  return G9n.useSyncExternalStore(n ? n.subscribe : HXp, n ? n.getSnapshot : TXp);
}
function iJa() {
  let e = $Vt(),
    t = Ho(),
    n = e === void 0;
  return (
    G9n.useEffect(() => {
      if (!n) return;
      t((r) => {
        if (r.expandedView !== "tasks") return r;
        return {
          ...r,
          expandedView: "none",
        };
      });
    }, [n, t]),
    e
  );
}
function vXp(e, t) {
  if (e === void 0 || e.length !== t.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = e[n],
      o = t[n];
    if (
      r.id !== o.id ||
      r.status !== o.status ||
      r.subject !== o.subject ||
      r.activeForm !== o.activeForm ||
      r.owner !== o.owner ||
      r.description !== o.description ||
      !rJa(r.blockedBy, o.blockedBy) ||
      !rJa(r.blocks, o.blocks)
    )
      return !1;
  }
  return !0;
}
function rJa(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var oJa,
  G9n,
  yXp = 5000,
  _Xp = 50,
  bXp = 5000,
  SXp = null,
  AXp = () => {},
  HXp = () => AXp,
  TXp = () => {
    return;
  };
