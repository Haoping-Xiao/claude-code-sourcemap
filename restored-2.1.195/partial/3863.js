// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SYa
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/dom-parser.js
// class=partial  jaccard=0.1646  score=0.226  fileCov=0.3775
// note: low-confidence suggestion: node_modules/@xmldom/xmldom/lib/dom-parser.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SYa = Q(Zgt => {
  var N9e = $9e(),
    s7p = ZAo(),
    i7p = lVt(),
    mYa = nYa(),
    a7p = fYa(),
    l7p = s7p.DOMImplementation,
    c7p = N9e.hasDefaultHTMLNamespace,
    u7p = N9e.isHTMLMimeType,
    d7p = N9e.isValidMimeType,
    yYa = N9e.MIME_TYPE,
    tHo = N9e.NAMESPACE,
    gYa = i7p.ParseError,
    p7p = a7p.XMLReader;
  function _Ya(e) {
    return e.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028\u2029]/g, `
`);
  }
  function bYa(e) {
    if (e = e || {}, e.locator === void 0) e.locator = !0;
    if (this.assign = e.assign || N9e.assign, this.domHandler = e.domHandler || n9n, this.onError = e.onError || e.errorHandler, e.errorHandler && typeof e.errorHandler !== "function") throw TypeError("errorHandler object is no longer supported, switch to onError!");else if (e.errorHandler) e.errorHandler("warning", "The `errorHandler` option has been deprecated, use `onError` instead!", this);
    this.normalizeLineEndings = e.normalizeLineEndings || _Ya, this.locator = !!e.locator, this.xmlns = this.assign(Object.create(null), e.xmlns);
  }
  bYa.prototype.parseFromString = function (e, t) {
    if (!d7p(t)) throw TypeError('DOMParser.parseFromString: the provided mimeType "' + t + '" is not valid.');
    var n = this.assign(Object.create(null), this.xmlns),
      r = mYa.XML_ENTITIES,
      o = n[""] || null;
    if (c7p(t)) r = mYa.HTML_ENTITIES, o = tHo.HTML;else if (t === yYa.XML_SVG_IMAGE) o = tHo.SVG;
    n[""] = o, n.xml = n.xml || tHo.XML;
    var s = new this.domHandler({
        mimeType: t,
        defaultNamespace: o,
        onError: this.onError
      }),
      i = this.locator ? {} : void 0;
    if (this.locator) s.setDocumentLocator(i);
    var a = new p7p();
    a.errorHandler = s, a.domBuilder = s;
    var l = !N9e.isHTMLMimeType(t);
    if (l && typeof e !== "string") a.errorHandler.fatalError("source is not a string");
    if (a.parse(this.normalizeLineEndings(String(e)), n, r), !s.doc.documentElement) a.errorHandler.fatalError("missing root element");
    return s.doc;
  };
  function n9n(e) {
    var t = e || {};
    this.mimeType = t.mimeType || yYa.XML_APPLICATION, this.defaultNamespace = t.defaultNamespace || null, this.cdata = !1, this.currentElement = void 0, this.doc = void 0, this.locator = void 0, this.onError = t.onError;
  }
  function Qgt(e, t) {
    t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
  }
  n9n.prototype = {
    startDocument: function () {
      var e = new l7p();
      this.doc = u7p(this.mimeType) ? e.createHTMLDocument(!1) : e.createDocument(this.defaultNamespace, "");
    },
    startElement: function (e, t, n, r) {
      var o = this.doc,
        s = o.createElementNS(e, n || t),
        i = r.length;
      t9n(this, s), this.currentElement = s, this.locator && Qgt(this.locator, s);
      for (var a = 0; a < i; a++) {
        var e = r.getURI(a),
          l = r.getValue(a),
          n = r.getQName(a),
          c = o.createAttributeNS(e, n);
        this.locator && Qgt(r.getLocator(a), c), c.value = c.nodeValue = l, s.setAttributeNode(c);
      }
    },
    endElement: function (e, t, n) {
      this.currentElement = this.currentElement.parentNode;
    },
    startPrefixMapping: function (e, t) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, t) {
      var n = this.doc.createProcessingInstruction(e, t);
      this.locator && Qgt(this.locator, n), t9n(this, n);
    },
    ignorableWhitespace: function (e, t, n) {},
    characters: function (e, t, n) {
      if (e = hYa.apply(this, arguments), e) {
        if (this.cdata) var r = this.doc.createCDATASection(e);else var r = this.doc.createTextNode(e);
        if (this.currentElement) this.currentElement.appendChild(r);else if (/^\s*$/.test(e)) this.doc.appendChild(r);
        this.locator && Qgt(this.locator, r);
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      if (e) e.lineNumber = 0;
      this.locator = e;
    },
    comment: function (e, t, n) {
      e = hYa.apply(this, arguments);
      var r = this.doc.createComment(e);
      this.locator && Qgt(this.locator, r), t9n(this, r);
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, n, r) {
      var o = this.doc.implementation;
      if (o && o.createDocumentType) {
        var s = o.createDocumentType(e, t, n, r);
        this.locator && Qgt(this.locator, s), t9n(this, s), this.doc.doctype = s;
      }
    },
    reportError: function (e, t) {
      if (typeof this.onError === "function") try {
        this.onError(e, t, this);
      } catch (n) {
        throw new gYa("Reporting " + e + ' "' + t + '" caused ' + n, this.locator);
      } else console.error("[xmldom " + e + "]\t" + t, f7p(this.locator));
    },
    warning: function (e) {
      this.reportError("warning", e);
    },
    error: function (e) {
      this.reportError("error", e);
    },
    fatalError: function (e) {
      throw this.reportError("fatalError", e), new gYa(e, this.locator);
    }
  };
  function f7p(e) {
    if (e) return `
@#[line:` + e.lineNumber + ",col:" + e.columnNumber + "]";
  }
  function hYa(e, t, n) {
    if (typeof e == "string") return e.substr(t, n);else {
      if (e.length >= t + n || t) return new java.lang.String(e, t, n) + "";
      return e;
    }
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
    n9n.prototype[e] = function () {
      return null;
    };
  });
  function t9n(e, t) {
    if (!e.currentElement) e.doc.appendChild(t);else e.currentElement.appendChild(t);
  }
  function m7p(e) {
    if (e === "error") throw "onErrorStopParsing";
  }
  function g7p() {
    throw "onWarningStopParsing";
  }
  Zgt.__DOMHandler = n9n;
  Zgt.DOMParser = bYa;
  Zgt.normalizeLineEndings = _Ya;
  Zgt.onErrorStopParsing = m7p;
  Zgt.onWarningStopParsing = g7p;
});