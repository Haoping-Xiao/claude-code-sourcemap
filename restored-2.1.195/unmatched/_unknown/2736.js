// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cro
// matched 2.1.88 source: node_modules/@opentelemetry/otlp-transformer/build/src/metrics/internal.js
// class=new  jaccard=0.0217  score=0.142  fileCov=0.025
// note: nearest: node_modules/@opentelemetry/otlp-transformer/build/src/metrics/internal.js (0.0217); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cro] deps: _ue, nct, ERe, tro, Eta, nno, xWe
wta = -9223372036854775808n;
iro = $8(Pu.DYN), {
  BYTES: aro,
  DOUBLE: UW,
  INT: XD,
  STRING: lro,
  UINT: O1
} = Pu, Rta = [Do(EX, [XD, XD], XD, (e, t) => ere(e + t, EX)), Do(EX, [O1, O1], O1, (e, t) => kWe(e.value + t.value, EX)), Do(EX, [UW, UW], UW, (e, t) => e + t), Do(EX, [F_, F_], F_, ytp), Do(EX, [QE, F_], QE, Cta), Do(EX, [F_, QE], QE, Cta), Do(EX, [lro, lro], lro, (e, t) => e + t), Do(EX, [aro, aro], aro, htp), Do(EX, [iro, iro], iro, tta), Do(Wbe, [XD, XD], XD, (e, t) => ere(e - t, Wbe)), Do(Wbe, [O1, O1], O1, (e, t) => kWe(e.value - t.value, Wbe)), Do(Wbe, [UW, UW], UW, (e, t) => e - t), Do(Wbe, [QE, QE], F_, Ita), Do(Wbe, [F_, F_], F_, Ita), Do(Wbe, [QE, F_], QE, _tp), Do(rct, [XD, XD], XD, (e, t) => ere(e * t, rct)), Do(rct, [O1, O1], O1, (e, t) => kWe(e.value * t.value, rct)), Do(rct, [UW, UW], UW, (e, t) => e * t), Do(F$n, [XD, XD], XD, (e, t) => xta(XD, e, t)), Do(F$n, [O1, O1], O1, (e, t) => Ube(xta(O1, e.value, t.value))), Do(F$n, [UW, UW], UW, (e, t) => e / t), Do(Jno, [XD, XD], XD, (e, t) => kta(XD, e, t)), Do(Jno, [O1, O1], O1, (e, t) => Ube(kta(O1, e.value, t.value))), Do(Qno, [XD], XD, e => ere(-e)), Do(Qno, [UW], UW, e => -e)];
function Etp(e) {
  switch (e) {
    case "true":
    case "True":
    case "TRUE":
    case "t":
    case "1":
      return true;
    case "false":
    case "False":
    case "FALSE":
    case "f":
    case "0":
      return false;
  }
  throw Error(`Unable to convert string '${e}' to bool`);
}
function Atp(e) {
  try {
    return Stp.decode(e);
  } catch (t) {
    throw Error(`Failed to decode bytes as string: ${t}`);
  }
}
function Htp(e) {
  try {
    return Pea(M1, e);
  } catch (t) {
    throw Error(`Failed to parse timestamp: ${t}`);
  }
}
function Ttp(e) {
  if (_X(e)) return wWe(r2t(e.$typeName));
  return s2t(e);
}
function qbe(e) {
  return e;
}
var btp, Stp, G$n, W$n, HRe, uro, AX, KU, vtp, TRe, Lta;