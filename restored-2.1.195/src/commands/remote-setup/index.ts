// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Unc
// matched 2.1.88 source: src/commands/remote-setup/index.ts
// class=modified  jaccard=0.1807  score=0.2166  fileCov=0.522
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Unc] deps: Un, jc
((PXf = {
  type: "local-jsx",
  name: "web-setup",
  description: "Set up Claude Code on the web with your GitHub account",
  availability: ["claude-ai"],
  isEnabled: () =>
    at("tengu_cobalt_lantern", false) && Us("allow_remote_sessions") && Us("allow_quick_web_setup"),
  get isHidden() {
    return !Us("allow_remote_sessions") || !Us("allow_quick_web_setup");
  },
  load: () => Promise.resolve().then(() => (Nnc(), Onc)),
}),
  (MXf = PXf));
async function Gnc(e, t) {
  let n = {
      slashCommandCounts: new Map(),
      mcpServerCounts: new Map(),
      sessionDescriptors: [],
      sessionFileCount: 0,
    },
    r = Date.now() - t * 24 * 60 * 60 * 1000,
    o;
  try {
    o = await vHt.readdir(e);
  } catch (a) {
    if (Vo(a)) return n;
    throw a;
  }
  let s = o.filter((a) => car.extname(a) === ".jsonl"),
    i = (
      await Promise.all(
        s.map(async (a) => {
          let l = car.join(e, a);
          try {
            let c = await vHt.stat(l);
            if (!c.isFile() || c.mtimeMs < r || c.size > $Xf) return null;
            return l;
          } catch (c) {
            if (Vo(c)) return null;
            throw c;
          }
        }),
      )
    ).filter((a) => a !== null);
  for (let a of i) {
    let l;
    try {
      l = await vHt.readFile(a, "utf-8");
    } catch (u) {
      if (Vo(u)) continue;
      throw u;
    }
    n.sessionFileCount++;
    let c = {
      prNumbers: [],
    };
    for (let u of l.split(`
`)) {
      if (u.length < 10) continue;
      if (u.includes(jnc) || u.includes(UXf))
        for (let d of u.matchAll(NXf)) {
          let p = d[1];
          n.slashCommandCounts.set(p, (n.slashCommandCounts.get(p) ?? 0) + 1);
        }
      if (u.includes(FXf) && u.includes('"name":"mcp__'))
        for (let d of u.matchAll(BXf)) {
          let p = d[1];
          n.mcpServerCounts.set(p, (n.mcpServerCounts.get(p) ?? 0) + 1);
        }
      if (u.includes(jXf)) {
        let d = qXf.exec(u);
        if (d) c.title = d[1];
      }
      if (u.includes(GXf)) {
        let d = VXf.exec(u);
        if (d) {
          let p = Number(d[1]);
          if (!c.prNumbers.includes(p)) c.prNumbers.push(p);
        }
      }
      if (!c.firstMessage && u.includes(WXf) && !u.includes(jnc) && !u.includes('"content":[')) {
        let d = zXf.exec(u);
        if (d) {
          let p = d[1].replace(/\\n/g, " ").replace(/\\"/g, '"');
          if (p.length > 3 && !p.startsWith("<")) c.firstMessage = p.slice(0, OXf);
        }
      }
    }
    if (c.title || c.prNumbers.length > 0 || c.firstMessage) n.sessionDescriptors.push(c);
  }
  if (n.sessionDescriptors.length > Fnc)
    (n.sessionDescriptors.sort((a, l) => {
      let c = (a.title ? 2 : 0) + (a.prNumbers.length > 0 ? 1 : 0);
      return (l.title ? 2 : 0) + (l.prNumbers.length > 0 ? 1 : 0) - c;
    }),
      (n.sessionDescriptors = n.sessionDescriptors.slice(0, Fnc)));
  return n;
}
var vHt,
  car,
  $Xf = 52428800,
  OXf = 200,
  Fnc = 60,
  NXf,
  BXf,
  jnc = '"content":"<command-name>/',
  UXf = '"content":"<command-message>',
  FXf = '"type":"tool_use"',
  jXf = '"type":"custom-title"',
  GXf = '"type":"pr-link"',
  WXf = '"role":"user"',
  qXf,
  VXf,
  zXf;
