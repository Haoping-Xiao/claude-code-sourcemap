// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bwr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bwr = E(() => {
  OR();
});
var uus = (e, t, n) => {
  switch (t) {
    case Ii.ZodString:
      return Wcn(e, n);
    case Ii.ZodNumber:
      return eus(e, n);
    case Ii.ZodObject:
      return tus(e, n);
    case Ii.ZodBigInt:
      return Ncs(e, n);
    case Ii.ZodBoolean:
      return Bcs();
    case Ii.ZodDate:
      return ewr(e, n);
    case Ii.ZodUndefined:
      return aus(n);
    case Ii.ZodNull:
      return Xcs(n);
    case Ii.ZodArray:
      return Ocs(e, n);
    case Ii.ZodUnion:
    case Ii.ZodDiscriminatedUnion:
      return Qcs(e, n);
    case Ii.ZodIntersection:
      return Wcs(e, n);
    case Ii.ZodTuple:
      return ius(e, n);
    case Ii.ZodRecord:
      return Vcn(e, n);
    case Ii.ZodLiteral:
      return qcs(e, n);
    case Ii.ZodEnum:
      return Gcs(e);
    case Ii.ZodNativeEnum:
      return Kcs(e);
    case Ii.ZodNullable:
      return Zcs(e, n);
    case Ii.ZodOptional:
      return nus(e, n);
    case Ii.ZodMap:
      return zcs(e, n);
    case Ii.ZodSet:
      return sus(e, n);
    case Ii.ZodLazy:
      return () => e.getter()._def;
    case Ii.ZodPromise:
      return ous(e, n);
    case Ii.ZodNaN:
    case Ii.ZodNever:
      return Ycs(n);
    case Ii.ZodEffects:
      return jcs(e, n);
    case Ii.ZodAny:
      return Cw(n);
    case Ii.ZodUnknown:
      return lus(n);
    case Ii.ZodDefault:
      return Fcs(e, n);
    case Ii.ZodBranded:
      return jcn(e, n);
    case Ii.ZodReadonly:
      return cus(e, n);
    case Ii.ZodCatch:
      return Ucs(e, n);
    case Ii.ZodPipeline:
      return rus(e, n);
    case Ii.ZodFunction:
    case Ii.ZodVoid:
    case Ii.ZodSymbol:
      return;
    default:
      return (r => {
        return;
      })(t);
  }
};