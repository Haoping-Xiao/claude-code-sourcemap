// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ono
// matched 2.1.88 source: node_modules/protobufjs/src/reader.js
// class=partial  jaccard=0.1144  score=0.2111  fileCov=0.1997
// note: low-confidence suggestion: node_modules/protobufjs/src/reader.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ono] deps: Jlt
fep = yue("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"), SRe = sk(fep, 0);
function gep(e) {
  return e ? Object.assign(Object.assign({}, BZi), e) : BZi;
}
function UZi(e, t, n) {
  return C$n(new jFt(), gep(n), ok(e, t)).finish();
}
function C$n(e, t, n) {
  var r;
  for (let o of n.sortedFields) {
    if (!n.isSet(o)) {
      if (o.presence == mep) throw Error(`cannot encode ${o} to binary: required field not set`);
      continue;
    }
    Nno(e, t, n, o);
  }
  if (t.writeUnknownFields) for (let {
    no: o,
    wireType: s,
    data: i
  } of (r = n.getUnknown()) !== null && r !== void 0 ? r : []) e.tag(o, s).raw(i);
  return e;
}
function Nno(e, t, n, r) {
  var o;
  switch (r.fieldKind) {
    case "scalar":
    case "enum":
      I$n(e, n.desc.typeName, r.name, (o = r.scalar) !== null && o !== void 0 ? o : pr.INT32, r.number, n.get(r));
      break;
    case "list":
      hep(e, t, r, n.get(r));
      break;
    case "message":
      FZi(e, t, r, n.get(r));
      break;
    case "map":
      for (let [s, i] of n.get(r)) yep(e, t, r, s, i);
      break;
  }
}
function I$n(e, t, n, r, o, s) {
  jZi(e.tag(o, _ep(r)), t, n, r, s);
}
function FZi(e, t, n, r) {
  if (n.delimitedEncoding) C$n(e.tag(n.number, sC.StartGroup), t, r).tag(n.number, sC.EndGroup);else C$n(e.tag(n.number, sC.LengthDelimited).fork(), t, r).join();
}
function hep(e, t, n, r) {
  var o;
  if (n.listKind == "message") {
    for (let i of r) FZi(e, t, n, i);
    return;
  }
  let s = (o = n.scalar) !== null && o !== void 0 ? o : pr.INT32;
  if (n.packed) {
    if (!r.size) return;
    e.tag(n.number, sC.LengthDelimited).fork();
    for (let i of r) jZi(e, n.parent.typeName, n.name, s, i);
    e.join();
    return;
  }
  for (let i of r) I$n(e, n.parent.typeName, n.name, s, n.number, i);
}
function yep(e, t, n, r, o) {
  var s;
  switch (e.tag(n.number, sC.LengthDelimited).fork(), I$n(e, n.parent.typeName, n.name, n.mapKey, 1, r), n.mapKind) {
    case "scalar":
    case "enum":
      I$n(e, n.parent.typeName, n.name, (s = n.scalar) !== null && s !== void 0 ? s : pr.INT32, 2, o);
      break;
    case "message":
      C$n(e.tag(2, sC.LengthDelimited).fork(), t, o).join();
      break;
  }
  e.join();
}
function jZi(e, t, n, r, o) {
  try {
    switch (r) {
      case pr.STRING:
        e.string(o);
        break;
      case pr.BOOL:
        e.bool(o);
        break;
      case pr.DOUBLE:
        e.double(o);
        break;
      case pr.FLOAT:
        e.float(o);
        break;
      case pr.INT32:
        e.int32(o);
        break;
      case pr.INT64:
        e.int64(o);
        break;
      case pr.UINT64:
        e.uint64(o);
        break;
      case pr.FIXED64:
        e.fixed64(o);
        break;
      case pr.BYTES:
        e.bytes(o);
        break;
      case pr.FIXED32:
        e.fixed32(o);
        break;
      case pr.SFIXED32:
        e.sfixed32(o);
        break;
      case pr.SFIXED64:
        e.sfixed64(o);
        break;
      case pr.SINT64:
        e.sint64(o);
        break;
      case pr.UINT32:
        e.uint32(o);
        break;
      case pr.SINT32:
        e.sint32(o);
        break;
    }
  } catch (s) {
    if (s instanceof Error) throw Error(`cannot encode field ${t}.${n} to binary: ${s.message}`);
    throw s;
  }
}
function _ep(e) {
  switch (e) {
    case pr.BYTES:
    case pr.STRING:
      return sC.LengthDelimited;
    case pr.DOUBLE:
    case pr.FIXED64:
    case pr.SFIXED64:
      return sC.Bit64;
    case pr.FIXED32:
    case pr.SFIXED32:
    case pr.FLOAT:
      return sC.Bit32;
    default:
      return sC.Varint;
  }
}
var mep = 3,
  BZi;