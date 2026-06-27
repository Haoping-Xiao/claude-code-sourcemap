// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lVt
// matched 2.1.88 source: node_modules/undici/lib/web/websocket/websocket.js
// class=new  jaccard=0.0403  score=0.0745  fileCov=0.0807
// note: nearest: node_modules/undici/lib/web/websocket/websocket.js (0.0403); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lVt = Q(aVt => {
  var MKp = $9e();
  function yKa(e, t) {
    e.prototype = Object.create(Error.prototype, {
      constructor: {
        value: e
      },
      name: {
        value: e.name,
        enumerable: !0,
        writable: t
      }
    });
  }
  var sVt = MKp.freeze({
      Error: "Error",
      IndexSizeError: "IndexSizeError",
      DomstringSizeError: "DomstringSizeError",
      HierarchyRequestError: "HierarchyRequestError",
      WrongDocumentError: "WrongDocumentError",
      InvalidCharacterError: "InvalidCharacterError",
      NoDataAllowedError: "NoDataAllowedError",
      NoModificationAllowedError: "NoModificationAllowedError",
      NotFoundError: "NotFoundError",
      NotSupportedError: "NotSupportedError",
      InUseAttributeError: "InUseAttributeError",
      InvalidStateError: "InvalidStateError",
      SyntaxError: "SyntaxError",
      InvalidModificationError: "InvalidModificationError",
      NamespaceError: "NamespaceError",
      InvalidAccessError: "InvalidAccessError",
      ValidationError: "ValidationError",
      TypeMismatchError: "TypeMismatchError",
      SecurityError: "SecurityError",
      NetworkError: "NetworkError",
      AbortError: "AbortError",
      URLMismatchError: "URLMismatchError",
      QuotaExceededError: "QuotaExceededError",
      TimeoutError: "TimeoutError",
      InvalidNodeTypeError: "InvalidNodeTypeError",
      DataCloneError: "DataCloneError",
      EncodingError: "EncodingError",
      NotReadableError: "NotReadableError",
      UnknownError: "UnknownError",
      ConstraintError: "ConstraintError",
      DataError: "DataError",
      TransactionInactiveError: "TransactionInactiveError",
      ReadOnlyError: "ReadOnlyError",
      VersionError: "VersionError",
      OperationError: "OperationError",
      NotAllowedError: "NotAllowedError",
      OptOutError: "OptOutError"
    }),
    _Ka = Object.keys(sVt);
  function bKa(e) {
    return typeof e === "number" && e >= 1 && e <= 25;
  }
  function $Kp(e) {
    return typeof e === "string" && e.substring(e.length - sVt.Error.length) === sVt.Error;
  }
  function iVt(e, t) {
    if (bKa(e)) this.name = _Ka[e], this.message = t || "";else this.message = e, this.name = $Kp(t) ? t : sVt.Error;
    if (Error.captureStackTrace) Error.captureStackTrace(this, iVt);
  }
  yKa(iVt, !0);
  Object.defineProperties(iVt.prototype, {
    code: {
      enumerable: !0,
      get: function () {
        var e = _Ka.indexOf(this.name);
        if (bKa(e)) return e;
        return 0;
      }
    }
  });
  var SKa = {
      INDEX_SIZE_ERR: 1,
      DOMSTRING_SIZE_ERR: 2,
      HIERARCHY_REQUEST_ERR: 3,
      WRONG_DOCUMENT_ERR: 4,
      INVALID_CHARACTER_ERR: 5,
      NO_DATA_ALLOWED_ERR: 6,
      NO_MODIFICATION_ALLOWED_ERR: 7,
      NOT_FOUND_ERR: 8,
      NOT_SUPPORTED_ERR: 9,
      INUSE_ATTRIBUTE_ERR: 10,
      INVALID_STATE_ERR: 11,
      SYNTAX_ERR: 12,
      INVALID_MODIFICATION_ERR: 13,
      NAMESPACE_ERR: 14,
      INVALID_ACCESS_ERR: 15,
      VALIDATION_ERR: 16,
      TYPE_MISMATCH_ERR: 17,
      SECURITY_ERR: 18,
      NETWORK_ERR: 19,
      ABORT_ERR: 20,
      URL_MISMATCH_ERR: 21,
      QUOTA_EXCEEDED_ERR: 22,
      TIMEOUT_ERR: 23,
      INVALID_NODE_TYPE_ERR: 24,
      DATA_CLONE_ERR: 25
    },
    $Ao = Object.entries(SKa);
  for (Ogt = 0; Ogt < $Ao.length; Ogt++) OAo = $Ao[Ogt][0], iVt[OAo] = $Ao[Ogt][1];
  var OAo, Ogt;
  function NAo(e, t) {
    if (this.message = e, this.locator = t, Error.captureStackTrace) Error.captureStackTrace(this, NAo);
  }
  yKa(NAo);
  aVt.DOMException = iVt;
  aVt.DOMExceptionName = sVt;
  aVt.ExceptionCode = SKa;
  aVt.ParseError = NAo;
});