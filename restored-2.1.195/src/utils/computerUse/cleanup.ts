// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nIl
// matched 2.1.88 source: src/utils/computerUse/cleanup.ts
// class=modified  jaccard=0.2693  score=0.5518  fileCov=0.3447
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var nIl = E(() => {
  At();
  vn();
  Jt();
  dn();
  ZE();
});
async function* tOe(e) {
  let n = e.getAppState().computerUseMcpState?.hiddenDuringTurn,
    r = !!(n && n.size > 0),
    o = qFn();
  if (!r && !o) return;
  let s = !1;
  if (r) {
    let { unhideComputerUseApps: i } = await Promise.resolve().then(() => (ffo(), SRa)),
      a = !1,
      l = i([...n]).then(
        () => {
          a = !0;
        },
        (d) => {
          ((a = !0), T(`[Computer Use MCP] auto-unhide failed: ${be(d)}`));
        },
      ),
      c = XY(),
      u = setTimeout(c.resolve, STf);
    if ((await Promise.race([l, c.promise]).finally(() => clearTimeout(u)), !a)) s = !0;
    QSe(e.setAppState, (d) =>
      d?.hiddenDuringTurn === void 0
        ? d
        : {
            ...d,
            hiddenDuringTurn: void 0,
          },
    );
  }
  if (o) {
    try {
      pRa();
    } catch (i) {
      T(`[Computer Use MCP] unregisterEscHotkey failed: ${be(i)}`);
    }
    (VFn(),
      yield {
        type: "os_notification",
        message: "Claude is done using your computer",
        notificationType: "computer_use_exit",
      });
  }
  if (s) Le("computeruse_turn_cleanup", "unhide_timeout");
  else xe("computeruse_turn_cleanup");
}
var STf = 5000;
