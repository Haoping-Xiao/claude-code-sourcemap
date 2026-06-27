// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tdr
// matched 2.1.88 source: src/utils/shell/readOnlyCommandValidation.ts
// class=new  jaccard=0.013  score=0.3691  fileCov=0.0133
// note: nearest: src/utils/shell/readOnlyCommandValidation.ts (0.013); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tdr = E(() => {
  Xa();
  w4();
  lPn();
  ZS();
  Ye();
  uo();
  Mne();
  Pne();
  kTt = R(lt(), 1), qz = R(se(), 1), Hdm = {
    r: 153,
    g: 153,
    b: 153
  }, Tdm = {
    r: 185,
    g: 185,
    b: 185
  };
});
function Dhc() {
  return ndr.join(tr(), "cache", "my-closed-issues.json");
}
function Ldm(e) {
  return new Date(e - Rdm * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
async function Phc() {
  if (Ir()) return null;
  if (Vi()) return null;
  let e = Dt(),
    t = Date.now();
  if (t - (e.closedIssuesLastChecked ?? 0) < kdm) return null;
  let n = t,
    {
      stdout: r,
      code: o
    } = await $n("gh", ["issue", "list", "-R", "anthropics/claude-code", "--author", "@me", "--state", "closed", "--search", `closed:>${Ldm(t)}`, "--json", "number,title,closedAt,stateReason", "--limit", "30"], {
      timeout: xdm,
      preserveOutputOnError: !1
    }),
    s = Date.now() - n,
    i = null;
  if (o === 0) try {
    i = Ft(r).filter(d => d.stateReason === "COMPLETED").map(d => ({
      number: d.number,
      title: d.title,
      closedAt: d.closedAt
    }));
  } catch (u) {
    T(`Failed to parse gh issue list output: ${u}`, {
      level: "error"
    });
  }
  if (i !== null) try {
    let u = Dhc();
    await RTt.mkdir(ndr.dirname(u), {
      recursive: !0
    }), await RTt.writeFile(u, De(i), {
      encoding: "utf-8"
    });
  } catch (u) {
    T(`Failed to write closed-issues cache: ${u}`, {
      level: "error"
    });
  }
  let a = e.closedIssuesAcknowledged ?? [],
    l = a;
  if (i !== null) {
    let u = new Set(i.map(d => d.number));
    l = a.filter(d => u.has(d));
  }
  let c = l.length !== a.length || l.some((u, d) => u !== a[d]);
  return gn(u => ({
    ...u,
    closedIssuesLastChecked: t,
    ...(c && {
      closedIssuesAcknowledged: l
    })
  })), s;
}
async function o6o() {
  try {
    let e = await RTt.readFile(Dhc(), {
        encoding: "utf-8"
      }),
      t = Ft(e);
    return Array.isArray(t) ? t : [];
  } catch (e) {
    if (!wn(e)) ke(e);
    return [];
  }
}
function s6o(e) {
  let t = new Set(Dt().closedIssuesAcknowledged ?? []);
  return e.filter(n => !t.has(n.number));
}
function Mhc(e) {
  if (e.length === 0) return;
  let t = Dt().closedIssuesAcknowledged ?? [],
    n = Uo([...t, ...e]);
  if (n.length === t.length) return;
  gn(r => ({
    ...r,
    closedIssuesAcknowledged: n
  }));
}
var RTt,
  ndr,
  xdm = 5000,
  kdm = 86400000,
  Rdm = 30;