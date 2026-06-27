// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nko
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/Window.js
// class=partial  jaccard=0.1203  score=1  fileCov=0.1203
// note: low-confidence suggestion: node_modules/@mixmark-io/domino/lib/Window.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nko = Q((npb, Opl) => {
  var euf = y6t(),
    tuf = WIo(),
    nuf = Rpl(),
    b6t = kk();
  Opl.exports = mYn;
  function mYn(e) {
    this.document = e || new euf(null).createHTMLDocument(""), this.document._scripting_enabled = !0, this.document.defaultView = this, this.location = new nuf(this, this.document._address || "about:blank");
  }
  mYn.prototype = Object.create(tuf.prototype, {
    console: {
      value: console
    },
    history: {
      value: {
        back: b6t.nyi,
        forward: b6t.nyi,
        go: b6t.nyi
      }
    },
    navigator: {
      value: Dpl()
    },
    window: {
      get: function () {
        return this;
      }
    },
    self: {
      get: function () {
        return this;
      }
    },
    frames: {
      get: function () {
        return this;
      }
    },
    parent: {
      get: function () {
        return this;
      }
    },
    top: {
      get: function () {
        return this;
      }
    },
    length: {
      value: 0
    },
    frameElement: {
      value: null
    },
    opener: {
      value: null
    },
    onload: {
      get: function () {
        return this._getEventHandler("load");
      },
      set: function (e) {
        this._setEventHandler("load", e);
      }
    },
    getComputedStyle: {
      value: function (t) {
        return t.style;
      }
    }
  });
  b6t.expose(Mpl(), mYn);
  b6t.expose(tko(), mYn);
});