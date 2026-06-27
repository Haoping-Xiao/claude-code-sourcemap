// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $5c
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0169  score=0.0888  fileCov=0.0204
// note: nearest: src/utils/sessionStorage.ts (0.0169); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var $5c = E(() => {
  iu();
  lH();
  VQ();
  dn();
  kt();
  Du();
  FEe();
  YQr();
  er();
  je();
  MPe();
  wr();
  Yp();
  kgt();
  A9e();
  wAo();
  BJ();
  IVn();
  ED();
  LOe();
  dr();
  P5c = require("path");
});
var U5c = {};
_t(U5c, {
  importConversationsHandler: () => importConversationsHandler,
  importConversations: () => importConversations
});
function mrn(e) {
  return e.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 128) || "file";
}
async function frn(e, t) {
  return FZ.writeFile(e, t, {
    mode: 384,
    flag: "wx"
  }).then(() => !0, n => {
    if (n.code !== "EEXIST") throw n;
    return !1;
  });
}
function b1m(e) {
  return e.length >= 5 && e[0] === 37 && e[1] === 80 && e[2] === 68 && e[3] === 70 && e[4] === 45;
}
function S1m(e, t) {
  let n = e.content.find(s => s.type === "text")?.text ?? e.text,
    r = (e.attachments ?? []).map(s => `

<file name="${s.file_name}">
${s.extracted_content}
</file>`).join("");
  return (t.length > 0 ? `${t.join(`
`)}
` : "") + n + r;
}
async function E1m(e, t, n, r) {
  let o = {
    parentUuid: e.parent_message_uuid ?? null,
    isSidechain: !1,
    uuid: e.uuid,
    timestamp: e.created_at,
    cwd: t,
    userType: "external",
    sessionId: n,
    version: "claude-export-import"
  };
  if (e.sender === "human") {
    let i = [],
      a = [];
    for (let u of e.files ?? []) {
      let d = r[u.file_uuid];
      if (!d) continue;
      let p = oX(Buffer.from(d));
      if (p) try {
        let {
          block: f
        } = await FM({
          data: Buffer.from(d),
          mediaType: p,
          limits: H8
        });
        i.push(f);
      } catch {
        let f = `${u.file_uuid}-${mrn(u.file_name)}`;
        a.push(`@"${gV.join(t, "files", f)}"`);
      } else if (b1m(d)) i.push({
        type: "document",
        source: {
          type: "base64",
          media_type: "application/pdf",
          data: Buffer.from(d).toString("base64")
        }
      });else {
        let f = `${u.file_uuid}-${mrn(u.file_name)}`;
        a.push(`@"${gV.join(t, "files", f)}"`);
      }
    }
    let l = S1m(e, a),
      c = i.length > 0 ? l.trim().length > 0 ? [...i, {
        type: "text",
        text: l
      }] : i : l;
    return {
      ...o,
      type: "user",
      message: {
        role: "user",
        content: c
      }
    };
  }
  let s = e.content.filter(i => i.type === "text" && typeof i.text === "string").map(i => ({
    type: "text",
    text: i.text,
    citations: []
  }));
  return {
    ...o,
    type: "assistant",
    requestId: void 0,
    message: {
      id: e.uuid,
      type: "message",
      role: "assistant",
      model: "claude-export-import",
      content: s.length > 0 ? s : [{
        type: "text",
        text: e.text,
        citations: []
      }],
      container: null,
      context_management: null,
      stop_details: null,
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: {
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
        cache_creation: null,
        server_tool_use: null,
        service_tier: null,
        inference_geo: null,
        iterations: null,
        speed: null
      }
    }
  };
}
function A1m(e, t) {
  let n = [];
  if (e.conversations.length !== t.conversations + t.skipped) n.push(`conversations: manifest=${e.conversations.length} imported=${t.conversations + t.skipped}`);
  let r = e.conversations.reduce((s, i) => s + i.message_count, 0);
  if (r !== t.messages) n.push(`messages: manifest=${r} imported=${t.messages}`);
  if (e.projects.length !== t.projects) n.push(`projects: manifest=${e.projects.length} imported=${t.projects}`);
  let o = e.projects.reduce((s, i) => s + i.doc_count, 0);
  if (o !== t.docs) n.push(`docs: manifest=${o} imported=${t.docs}`);
  return n;
}
async function H1m(e) {
  let {
    size: t
  } = await FZ.stat(e);
  if (t > O5c) throw Error(`export file is ${t} bytes; refusing to read more than ${O5c}`);
  if (!e.endsWith(".zip")) return {
    ...Ft(await FZ.readFile(e, "utf8")),
    files: {}
  };
  let n = await nde(await FZ.readFile(e)),
    r = new TextDecoder(),
    o = i => {
      let a = n[i];
      if (!a) throw Error(`export zip missing ${i}`);
      return Ft(r.decode(a));
    },
    s = {};
  for (let [i, a] of Object.entries(n)) {
    if (!i.startsWith("files/")) continue;
    let l = gV.basename(i);
    if (l.length === 0 || !N5c.test(l)) continue;
    s[l] = a;
  }
  return {
    manifest: o("manifest.json"),
    conversations: o("conversations.json"),
    projects: o("projects.json"),
    files: s
  };
}
async function importConversations(e, t) {
  let n = await H1m(e),
    r = aj(t.cwd),
    o = {
      conversations: 0,
      skipped: 0,
      messages: 0,
      projects: 0,
      docs: 0,
      files: 0,
      manifestDiff: [],
      jsonlPaths: [],
      titles: [],
      projectList: n.projects.map(l => ({
        uuid: l.uuid,
        name: l.name,
        dirName: `${lQt(l.name) || "project"}-${l.uuid}`
      })),
      conversationProjects: {}
    };
  if (!t.dryRun) await FZ.mkdir(r, {
    recursive: !0,
    mode: 448
  }), await FZ.mkdir(gV.join(t.cwd, "projects"), {
    recursive: !0,
    mode: 448
  }), await FZ.mkdir(gV.join(t.cwd, "files"), {
    recursive: !0,
    mode: 448
  });
  let s = l => {
      let c = l.name.trim();
      if (c && c !== "New conversation") return c;
      return l.chat_messages.find(d => d.sender === "human")?.text.trim().slice(0, 60) || "Untitled";
    },
    i = {};
  for (let l of n.conversations) for (let c of l.chat_messages) for (let u of c.files ?? []) i[u.file_uuid] = u.file_name;
  for (let l of n.conversations) {
    let c = Ywt(l.uuid, _1m),
      u = await Promise.all(l.chat_messages.map(f => E1m(f, t.cwd, c, n.files))),
      d = u.map(f => De(f)).join(`
`) + (u.length ? `
` : ""),
      p = gV.join(r, `${c}.jsonl`);
    if (o.jsonlPaths.push(p), o.titles.push(s(l)), o.conversationProjects[c] = l.project_uuid ?? null, o.messages += u.length, !t.dryRun) {
      if (!(await frn(p, d))) {
        o.skipped += 1;
        continue;
      }
    }
    o.conversations += 1;
  }
  let a = new Set();
  for (let l of n.projects) {
    let c = `${lQt(l.name) || "project"}-${l.uuid}`;
    if (!N5c.test(c)) continue;
    let u = gV.join(t.cwd, "projects", c);
    if (!t.dryRun) await FZ.mkdir(u, {
      recursive: !0,
      mode: 448
    });
    let d = l.prompt_template?.trim();
    if (d && !t.dryRun) await frn(gV.join(u, "CLAUDE.md"), d);
    for (let p of l.docs) {
      let f = mrn(p.filename ?? ""),
        m = /[a-zA-Z0-9]/.test(f) ? f : "untitled.md";
      if (o.docs += 1, !t.dryRun) await frn(gV.join(u, m), p.content ?? "");
    }
    for (let p of l.files ?? []) {
      let f = n.files[p.file_uuid];
      if (!f) continue;
      if (a.add(p.file_uuid), o.files += 1, !t.dryRun) await frn(gV.join(u, mrn(p.file_name)), f);
    }
    o.projects += 1;
  }
  for (let [l, c] of Object.entries(n.files)) {
    if (a.has(l)) continue;
    let u = i[l],
      d = u ? `${l}-${mrn(u)}` : l;
    if (!t.dryRun) await frn(gV.join(t.cwd, "files", d), c);
    o.files += 1;
  }
  return o.manifestDiff = A1m(n.manifest, o), o;
}
async function importConversationsHandler(e, t) {
  if (!ut(process.env.CLAUDE_IMPORT_CONVERSATIONS)) return ws("import-conversations is not enabled");
  if (!t.cwd) return ws("--cwd is required");
  let n = await jA(t.cwd),
    r = await importConversations(e, {
      cwd: n,
      dryRun: t.dryRun
    }),
    o = t.dryRun ? "[dry-run] " : "";
  if (process.stdout.write(`${o}imported: conversations=${r.conversations} skipped=${r.skipped} messages=${r.messages} projects=${r.projects} docs=${r.docs} files=${r.files}
`), await new Promise(s => process.stdout.write(De({
    sessionIds: r.jsonlPaths.map(i => gV.basename(i, ".jsonl")),
    titles: r.titles,
    jsonlPaths: r.jsonlPaths,
    cwd: n,
    projects: r.projectList,
    conversationProjects: r.conversationProjects,
    counts: {
      conversations: r.conversations,
      projects: r.projects,
      files: r.files,
      docs: r.docs,
      skipped: r.skipped
    }
  }) + `
`, s)), r.manifestDiff.length > 0) process.stderr.write(`manifest mismatch:
  ` + r.manifestDiff.join(`
  `) + `
`), process.exit(1);
  process.exit(0);
}
var FZ,
  gV,
  _1m = "5f3a2c5e-6b8f-4b27-9c0e-2d7f1a9b3c44",
  N5c,
  O5c = 1073741824;