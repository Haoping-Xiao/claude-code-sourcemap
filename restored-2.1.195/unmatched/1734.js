// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cxe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cxe = E(() => {/*! @azure/msal-common v15.13.1 2025-10-29 */});
class Wx {
  constructor(e) {
    let t = e ? sH.trimArrayEntries([...e]) : [],
      n = t ? sH.removeEmptyStringsFromArray(t) : [];
    if (!n || !n.length) throw jE(Jje);
    this.scopes = new Set(), n.forEach(r => this.scopes.add(r));
  }
  static fromString(e) {
    let n = (e || vo.EMPTY_STRING).split(" ");
    return new Wx(n);
  }
  static createSearchScopes(e) {
    let t = e && e.length > 0 ? e : [...iU],
      n = new Wx(t);
    if (!n.containsOnlyOIDCScopes()) n.removeOIDCScopes();else n.removeScope(vo.OFFLINE_ACCESS_SCOPE);
    return n;
  }
  containsScope(e) {
    let t = this.printScopesLowerCase().split(" "),
      n = new Wx(t);
    return e ? n.scopes.has(e.toLowerCase()) : !1;
  }
  containsScopeSet(e) {
    if (!e || e.scopes.size <= 0) return !1;
    return this.scopes.size >= e.scopes.size && e.asArray().every(t => this.containsScope(t));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return pGr.forEach(t => {
      if (this.containsScope(t)) e += 1;
    }), this.scopes.size === e;
  }
  appendScope(e) {
    if (e) this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach(t => this.appendScope(t));
    } catch (t) {
      throw ts(jje);
    }
  }
  removeScope(e) {
    if (!e) throw ts(Fje);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    pGr.forEach(e => {
      this.scopes.delete(e);
    });
  }
  unionScopeSets(e) {
    if (!e) throw ts(Exe);
    let t = new Set();
    return e.scopes.forEach(n => t.add(n.toLowerCase())), this.scopes.forEach(n => t.add(n.toLowerCase())), t;
  }
  intersectingScopeSets(e) {
    if (!e) throw ts(Exe);
    if (!e.containsOnlyOIDCScopes()) e.removeOIDCScopes();
    let t = this.unionScopeSets(e),
      n = e.getScopeCount(),
      r = this.getScopeCount();
    return t.size < r + n;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let e = [];
    return this.scopes.forEach(t => e.push(t)), e;
  }
  printScopes() {
    if (this.scopes) return this.asArray().join(" ");
    return vo.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}