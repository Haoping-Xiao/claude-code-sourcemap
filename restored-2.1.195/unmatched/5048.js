// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OKl
// matched 2.1.88 source: src/tools/TaskUpdateTool/TaskUpdateTool.ts
// class=new  jaccard=0.0174  score=0.0656  fileCov=0.0231
// note: nearest: src/tools/TaskUpdateTool/TaskUpdateTool.ts (0.0174); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var OKl = E(() => {
  si();
  _i();
  Ye();
  ps();
  Bs();
  vi();
  B_();
  Ko();
  Xce();
  Mg();
  Zjo = R(lt(), 1), tTe = R(rt(), 1), Zg = R(se(), 1);
});
var NKl = {};
_t(NKl, {
  call: () => call
});
function AVf(e) {
  let t = e.match(EVf);
  if (!t) return null;
  let n = parseInt(t[1], 10);
  if (n < 1) return null;
  let r;
  switch (t[2].toLowerCase()) {
    case "s":
      r = `*/${Math.max(1, Math.ceil(n / 60))} * * * *`;
      break;
    case "m":
      r = n <= 59 ? `*/${n} * * * *` : `0 */${Math.round(n / 60)} * * *`;
      break;
    case "h":
      if (n > 23) return null;
      r = `0 */${n} * * *`;
      break;
    case "d":
      if (n > 31) return null;
      r = `0 0 */${n} * *`;
      break;
    default:
      return null;
  }
  return F1(r) ? r : null;
}
var BKl,
  EVf,
  call = async (e, t) => {
    G("tengu_loops_command", {});
    let n = await Mue(),
      r = dSt(t.getAppState(), Rt()),
      o = [...n.map(a => ({
        kind: "cron",
        id: a.id,
        cron: a.cron,
        human: r$(a.cron),
        prompt: a.prompt
      })), ...r.map((a, l) => ({
        kind: "stophook",
        id: `stophook-${l}`,
        condition: a.prompt
      }))];
    async function s(a) {
      if (a.kind === "cron") {
        try {
          await Pue([a.id]), e(`Loop ${a.id} deleted`, {
            display: "system"
          });
        } catch (c) {
          e(`Failed to delete loop ${a.id}: ${c}`, {
            display: "system"
          });
        }
        return;
      }
      let l = fSt(t);
      e(l === null ? "Stop hook not found" : "Stop hook cleared", {
        display: "system"
      });
    }
    async function i(a) {
      if (a.kind === "cron") {
        let c = AVf(a.interval);
        if (!c) {
          e(`Invalid interval: ${a.interval}`, {
            display: "system"
          });
          return;
        }
        let u = await wct(c, a.prompt, !0, !1);
        e(`Loop ${u} created (${r$(c)})`, {
          display: "system"
        });
        return;
      }
      let l = pSt(a.condition, t);
      e(l ?? "Stop hook set", {
        display: "system"
      });
    }
    return BKl.jsx($Kl, {
      loops: o,
      onDelete: a => void s(a),
      onCreate: a => void i(a),
      onCancel: () => e("", {
        display: "skip"
      })
    });
  };