// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JOr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0071  score=1  fileCov=0.0071
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0071); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JOr = E(() => {
  Kyn();
  ADt = class ADt extends JO {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(e) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, ADt.prototype);
    }
  };
  HDt = class HDt extends JO {
    name = "InternalServerException";
    $fault = "server";
    constructor(e) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...e
      });
      Object.setPrototypeOf(this, HDt.prototype);
    }
  };
  TDt = class TDt extends JO {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, TDt.prototype);
    }
  };
  vDt = class vDt extends JO {
    name = "ThrottlingException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, vDt.prototype);
    }
  };
  wDt = class wDt extends JO {
    name = "ValidationException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, wDt.prototype);
    }
  };
  CDt = class CDt extends JO {
    name = "ConflictException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ConflictException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, CDt.prototype);
    }
  };
  IDt = class IDt extends JO {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, IDt.prototype);
    }
  };
  xDt = class xDt extends JO {
    name = "TooManyTagsException";
    $fault = "client";
    resourceName;
    constructor(e) {
      super({
        name: "TooManyTagsException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, xDt.prototype), this.resourceName = e.resourceName;
    }
  };
  kDt = class kDt extends JO {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ResourceInUseException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, kDt.prototype);
    }
  };
  RDt = class RDt extends JO {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(e) {
      super({
        name: "ServiceUnavailableException",
        $fault: "server",
        ...e
      });
      Object.setPrototypeOf(this, RDt.prototype);
    }
  };
});
var $Y, zKu, cWs, uWs, KKu, YKu, XKu, dWs, pWs, JKu, QOr, ZOr, Zae, e1r, t1r, R2e, Ytt, vIe, QKu, fWs, e_n, t_n, ZKu, eYu, mWs, DDt, tYu, gWs, nYu, Ktt, Yyn, hWs, yWs, PDt, rYu, oYu, n_n, sYu, Xyn, _Ws, iYu, bWs, SWs, TIe, aYu, lYu, n1r, EWs, cYu, r1r, uYu, dYu, pYu, fYu, mYu, gYu, hYu, yYu, r_n, _Yu, bYu, SYu, Jyn, EYu, MDt, AYu, HYu, TYu, vYu, wYu, CYu, IYu, xYu, kYu, RYu, LYu, DYu, PYu, MYu, $Yu, OYu, NYu, BYu, UYu, FYu, $Dt, jYu, o_n, s_n, GYu, WYu, i_n, qYu, VYu, zYu, KYu, YYu, XYu, JYu, QYu, ZYu, e7u, t7u, n7u, r7u, o7u, o1r, AWs, s7u, i7u, a7u, l7u, c7u, u7u, d7u, p7u, f7u, m7u, g7u, h7u, y7u, _7u, b7u, S7u, E7u, A7u, H7u, T7u, v7u, w7u, C7u, I7u, x7u, k7u, R7u, L7u, D7u, P7u, M7u, $7u, O7u, N7u, B7u, U7u, F7u, j7u, G7u, W7u, q7u, V7u, z7u, K7u, Y7u, X7u, J7u, Q7u, Z7u, eXu, tXu, nXu, rXu, oXu, sXu, iXu, aXu, lXu, cXu, uXu, dXu, pXu, fXu, mXu, gXu, hXu, yXu, _Xu, bXu, SXu, EXu, AXu, HXu, TXu, vXu, wXu, CXu, IXu, xXu, kXu, RXu, LXu, DXu, PXu, MXu, $Xu, OXu, NXu, BXu, UXu, FXu, jXu, GXu, WXu, qXu, HWs, VXu, zXu, KXu, YXu, XXu, JXu, QXu, ZXu, eJu, tJu, nJu, nte, rJu, TWs, oJu, sJu, iJu, aJu, lJu, cJu, uJu, dJu, pJu, fJu, mJu, gJu, hJu, yJu, _Ju, bJu, SJu, EJu, AJu, HJu, TJu, vJu, wJu, CJu, IJu, xJu, kJu, RJu, LJu, DJu, PJu, MJu, $Ju, OJu, NJu, BJu, UJu, FJu, jJu, GJu, WJu, qJu, VJu, zJu, KJu, YJu, XJu, JJu, QJu, ZJu, eQu, vWs, wWs, tQu, nQu, rQu, oQu, sQu, CWs, iQu, aQu, lQu, IWs, xWs, kWs, cQu, uQu, dQu, pQu, fQu, mQu, gQu, RWs, hQu, yQu, _Qu, bQu, LWs, SQu, EQu, AQu, HQu, TQu, DWs, vQu, wQu, CQu, IQu, xQu, kQu, RQu, LQu, DQu, PWs, MWs, PQu, MQu, $Qu, OQu, NQu, BQu, UQu, FQu, jQu, GQu, WQu, qQu, VQu, zQu, KQu, YQu, XQu, JQu, QQu, ZQu, eZu, tZu, nZu, rZu, oZu, sZu, iZu, aZu, lZu, cZu, uZu, dZu, pZu, fZu, mZu, gZu, hZu, yZu, _Zu, bZu, SZu, EZu, AZu, $Ws, a_n, HZu, TZu, vZu, wZu, CZu, IZu, xZu, kZu, RZu, LZu, DZu, s1r, PZu, MZu, $Zu, l_n, OWs, OZu, NZu, BZu, UZu, FZu, jZu, GZu, WZu, qZu, VZu, zZu, KZu, YZu, XZu, i1r, NWs, JZu, QZu, ZZu, eed, ted, ned, red, oed, sed, BWs, ied, aed, led, ced, ued, ded, ped, fed, med, ged, hed, yed, _ed, bed, Sed, a1r, Eed, UWs, Aed, Hed, Ted, ved, wed, Ced, Ied, xed, ked, Red, Led, Ded, Ped, Med, l1r, $ed, Oed, Ned, Bed, Ued, Fed, jed, Ged, wIe, Wed, qed, Ved, zed, sWs, c1r, Ked, Yed, LDt, u1r, Xed, Jed, Qed, Zed, etd, ttd, ntd, rtd, FWs, otd, std, jWs, itd, atd, ltd, ctd, utd, dtd, ptd, ftd, mtd, gtd, htd, ytd, GWs, _td, btd, Std, Etd, Atd, iWs, Htd, Ttd, vtd, wtd, Ctd, Itd, xtd, ktd, Qyn, Rtd, Ltd, Dtd, Ptd, Mtd, $td, WWs, Otd, Ntd, Btd, Utd, Ftd, jtd, qWs, Gtd, Wtd, qtd, Vtd, ztd, Ktd, Ytd, Xtd, Jtd, d1r, Qtd, Ztd, end, tnd, aWs, lWs, GR, VWs, nnd, Zyn, rnd, ond, zWs, snd, ind, and, lnd, cnd, und, p1r, f1r, KWs, dnd, YWs, pnd, fnd, mnd, gnd, hnd, ynd, c_n, m1r, g1r, _nd, bnd, Snd, End, XWs, JWs, QWs, ZWs, e5s, t5s, n5s, r5s, o5s, s5s, i5s, a5s, l5s, c5s, u5s, d5s, p5s, f5s, m5s, g5s, h5s, y5s, _5s, b5s, S5s, E5s, A5s, H5s, T5s, v5s, w5s, C5s, I5s, x5s, k5s, R5s, L5s, D5s, P5s, M5s, $5s, O5s, N5s, B5s, U5s, F5s, j5s, G5s, W5s, q5s, V5s, z5s, K5s, Y5s, X5s, J5s, Q5s, Z5s, eqs, tqs, nqs, rqs, oqs, sqs, iqs, aqs, lqs, cqs, uqs, dqs, pqs, fqs, mqs, gqs, hqs, yqs, _qs, bqs, Sqs, Eqs, Aqs, Hqs, Tqs, vqs, wqs, Cqs, Iqs, xqs, kqs, Rqs, Lqs, Dqs, Pqs, Mqs, $qs;