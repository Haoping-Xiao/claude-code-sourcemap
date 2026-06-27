// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.025  score=1  fileCov=0.025
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.025); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IBr = E(() => {
  pSn();
  jDt = class jDt extends xD {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(e) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, jDt.prototype);
    }
  };
  N2e = class N2e extends xD {
    name = "InternalServerException";
    $fault = "server";
    constructor(e) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...e
      });
      Object.setPrototypeOf(this, N2e.prototype);
    }
  };
  B2e = class B2e extends xD {
    name = "ThrottlingException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, B2e.prototype);
    }
  };
  U2e = class U2e extends xD {
    name = "ValidationException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, U2e.prototype);
    }
  };
  GDt = class GDt extends xD {
    name = "ConflictException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ConflictException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, GDt.prototype);
    }
  };
  WDt = class WDt extends xD {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, WDt.prototype);
    }
  };
  qDt = class qDt extends xD {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, qDt.prototype);
    }
  };
  VDt = class VDt extends xD {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(e) {
      super({
        name: "ServiceUnavailableException",
        $fault: "server",
        ...e
      });
      Object.setPrototypeOf(this, VDt.prototype);
    }
  };
  zDt = class zDt extends xD {
    name = "ModelErrorException";
    $fault = "client";
    originalStatusCode;
    resourceName;
    constructor(e) {
      super({
        name: "ModelErrorException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, zDt.prototype), this.originalStatusCode = e.originalStatusCode, this.resourceName = e.resourceName;
    }
  };
  KDt = class KDt extends xD {
    name = "ModelNotReadyException";
    $fault = "client";
    $retryable = {};
    constructor(e) {
      super({
        name: "ModelNotReadyException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, KDt.prototype);
    }
  };
  YDt = class YDt extends xD {
    name = "ModelTimeoutException";
    $fault = "client";
    constructor(e) {
      super({
        name: "ModelTimeoutException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, YDt.prototype);
    }
  };
  F2e = class F2e extends xD {
    name = "ModelStreamErrorException";
    $fault = "client";
    originalStatusCode;
    originalMessage;
    constructor(e) {
      super({
        name: "ModelStreamErrorException",
        $fault: "client",
        ...e
      });
      Object.setPrototypeOf(this, F2e.prototype), this.originalStatusCode = e.originalStatusCode, this.originalMessage = e.originalMessage;
    }
  };
});
var NG, EYs, mSn, Ood, AYs, Nod, xBr, Bod, Uod, Fod, jod, God, Wod, qod, Vod, zod, kBr, Kod, HYs, Yod, Xod, Jod, Qod, Zod, esd, tsd, nsd, rsd, osd, ssd, isd, asd, lsd, csd, usd, dsd, psd, fsd, TYs, msd, gsd, hsd, ysd, _sd, vYs, bsd, Ssd, Esd, gSn, Asd, Hsd, Tsd, vsd, fSn, wsd, Csd, JDt, Isd, xsd, ksd, Rsd, Lsd, Dsd, Psd, Msd, $sd, Osd, wYs, Nsd, Bsd, Usd, Fsd, jsd, Gsd, Wsd, qsd, Vsd, zsd, Ksd, Ysd, Xsd, Jsd, CYs, IYs, Qsd, xYs, kYs, hSn, Zsd, eid, tid, nid, rid, oid, sid, iid, aid, RYs, lid, cid, uid, did, ySn, RBr, pid, _Sn, LYs, fid, mid, LBr, DYs, gid, hid, yid, bSn, SSn, _id, bid, Sid, Eid, Aid, ESn, PYs, DBr, Hid, Tid, vid, wid, Cid, Iid, ASn, MYs, xid, kid, Rid, Lid, Did, Pid, Mid, $id, Oid, $Ys, Nid, Bid, SYs, PBr, XDt, Uid, Fid, jid, Gid, Wid, qid, Vid, zid, Kid, Yid, Xid, MBr, Jid, $Br, Qid, Zid, ead, tad, nad, rad, OYs, NYs, OBr, oad, BYs, sad, iad, aad, lad, cad, uad, dad, pad, fad, mad, gad, UYs, had, yad, _ad, bad, Sad, Ead, Aad, Had, Tad, vad, wad, Cad, Iad, xad, kad, Rad, FYs, jYs, GYs, WYs, qYs, VYs, zYs, KYs, YYs, XYs;