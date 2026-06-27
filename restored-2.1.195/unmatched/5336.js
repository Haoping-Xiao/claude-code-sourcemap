// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tdc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tdc = Q(TZ => {
  var {
      Argument: Quc
    } = Ncr(),
    {
      Command: S9o
    } = Juc(),
    {
      CommanderError: Eim,
      InvalidArgumentError: Zuc
    } = $Zt(),
    {
      Help: Aim
    } = f9o(),
    {
      Option: edc
    } = g9o();
  TZ.program = new S9o();
  TZ.createCommand = e => new S9o(e);
  TZ.createOption = (e, t) => new edc(e, t);
  TZ.createArgument = (e, t) => new Quc(e, t);
  TZ.Command = S9o;
  TZ.Option = edc;
  TZ.Argument = Quc;
  TZ.Help = Aim;
  TZ.CommanderError = Eim;
  TZ.InvalidArgumentError = Zuc;
  TZ.InvalidOptionArgumentError = Zuc;
});