// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Klt
// matched 2.1.88 source: node_modules/zod/v3/helpers/util.js
// class=new  jaccard=0.0591  score=0.0808  fileCov=0.1808
// note: nearest: node_modules/zod/v3/helpers/util.js (0.0591); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Klt] deps: node-forge/lib/util.js, @smithy/core/dist-cjs/submodules/cbor/index.js
(function (e) {
  e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32";
})(sC || (sC = {}));
function Pbe(e, t) {
  let n = e.fieldKind == "list" ? gue(t, e) : e.fieldKind == "map" ? hue(t, e) : mno(e, t);
  if (n === true) return;
  let r;
  switch (e.fieldKind) {
    case "list":
      r = `expected ${IQi(e)}, got ${gL(t)}`;
      break;
    case "map":
      r = `expected ${xQi(e)}, got ${gL(t)}`;
      break;
    default:
      r = m$n(e, t, n);
  }
  return new D1(e, r);
}
function fno(e, t, n) {
  let r = mno(e, n);
  if (r !== true) return new D1(e, `list item #${t + 1}: ${m$n(e, n, r)}`);
  return;
}
function vQi(e, t, n) {
  let r = wQi(t, e.mapKey);
  if (r !== true) return new D1(e, `invalid map key: ${m$n({
    scalar: e.mapKey
  }, t, r)}`);
  let o = mno(e, n);
  if (o !== true) return new D1(e, `map entry ${gL(t)}: ${m$n(e, n, o)}`);
  return;
}
function mno(e, t) {
  if (e.scalar !== void 0) return wQi(t, e.scalar);
  if (e.enum !== void 0) {
    if (e.enum.open) return Number.isInteger(t);
    return e.enum.values.some(n => n.number === t);
  }
  return P1(t, e.message);
}
function wQi(e, t) {
  switch (t) {
    case pr.DOUBLE:
      return typeof e == "number";
    case pr.FLOAT:
      if (typeof e != "number") return false;
      if (Number.isNaN(e) || !Number.isFinite(e)) return true;
      if (e > lno || e < cno) return `${e.toFixed()} out of range`;
      return true;
    case pr.INT32:
    case pr.SFIXED32:
    case pr.SINT32:
      if (typeof e !== "number" || !Number.isInteger(e)) return false;
      if (e > dno || e < pno) return `${e.toFixed()} out of range`;
      return true;
    case pr.FIXED32:
    case pr.UINT32:
      if (typeof e !== "number" || !Number.isInteger(e)) return false;
      if (e > uno || e < 0) return `${e.toFixed()} out of range`;
      return true;
    case pr.BOOL:
      return typeof e == "boolean";
    case pr.STRING:
      if (typeof e != "string") return false;
      return FFt().checkUtf8(e) || "invalid UTF8";
    case pr.BYTES:
      return e instanceof Uint8Array;
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      if (typeof e == "bigint" || typeof e == "number" || typeof e == "string" && e.length > 0) try {
        return U_.parse(e), true;
      } catch (n) {
        return `${e} out of range`;
      }
      return false;
    case pr.FIXED64:
    case pr.UINT64:
      if (typeof e == "bigint" || typeof e == "number" || typeof e == "string" && e.length > 0) try {
        return U_.uParse(e), true;
      } catch (n) {
        return `${e} out of range`;
      }
      return false;
  }
}
function m$n(e, t, n) {
  if (n = typeof n == "string" ? `: ${n}` : `, got ${gL(t)}`, e.scalar !== void 0) return `expected ${_Zd(e.scalar)}` + n;
  if (e.enum !== void 0) return `expected ${e.enum.toString()}` + n;
  return `expected ${CQi(e.message)}` + n;
}
function gL(e) {
  switch (typeof e) {
    case "object":
      if (e === null) return "null";
      if (e instanceof Uint8Array) return `Uint8Array(${e.length})`;
      if (Array.isArray(e)) return `Array(${e.length})`;
      if (gue(e)) return IQi(e.field());
      if (hue(e)) return xQi(e.field());
      if (P1(e)) return CQi(e.desc);
      if (_X(e)) return `message ${e.$typeName}`;
      return "object";
    case "string":
      return e.length > 30 ? "string" : `"${e.split('"').join("\\\"")}"`;
    case "boolean":
      return String(e);
    case "number":
      return String(e);
    case "bigint":
      return String(e) + "n";
    default:
      return typeof e;
  }
}
function CQi(e) {
  return `ReflectMessage (${e.typeName})`;
}
function IQi(e) {
  switch (e.listKind) {
    case "message":
      return `ReflectList (${e.message.toString()})`;
    case "enum":
      return `ReflectList (${e.enum.toString()})`;
    case "scalar":
      return `ReflectList (${pr[e.scalar]})`;
  }
}
function xQi(e) {
  switch (e.mapKind) {
    case "message":
      return `ReflectMap (${pr[e.mapKey]}, ${e.message.toString()})`;
    case "enum":
      return `ReflectMap (${pr[e.mapKey]}, ${e.enum.toString()})`;
    case "scalar":
      return `ReflectMap (${pr[e.mapKey]}, ${pr[e.scalar]})`;
  }
}
function _Zd(e) {
  switch (e) {
    case pr.STRING:
      return "string";
    case pr.BOOL:
      return "boolean";
    case pr.INT64:
    case pr.SINT64:
    case pr.SFIXED64:
      return "bigint (int64)";
    case pr.UINT64:
    case pr.FIXED64:
      return "bigint (uint64)";
    case pr.BYTES:
      return "Uint8Array";
    case pr.DOUBLE:
      return "number (float64)";
    case pr.FLOAT:
      return "number (float32)";
    case pr.FIXED32:
    case pr.UINT32:
      return "number (uint32)";
    case pr.INT32:
    case pr.SFIXED32:
    case pr.SINT32:
      return "number (int32)";
  }
}