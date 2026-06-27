// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c9r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c9r = Q(yCn => {
  Object.defineProperty(yCn, "__esModule", {
    value: !0
  });
  yCn.ExternalAccountClient = void 0;
  var Nxd = zxe(),
    Bxd = zVr(),
    Uxd = YVr(),
    Fxd = l9r();
  class MTi {
    constructor() {
      throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    static fromJSON(e) {
      if (e && e.type === Nxd.EXTERNAL_ACCOUNT_TYPE) {
        if (e.credential_source?.environment_id) return new Uxd.AwsClient(e);else if (e.credential_source?.executable) return new Fxd.PluggableAuthClient(e);else return new Bxd.IdentityPoolClient(e);
      } else return null;
    }
  }
  yCn.ExternalAccountClient = MTi;
});