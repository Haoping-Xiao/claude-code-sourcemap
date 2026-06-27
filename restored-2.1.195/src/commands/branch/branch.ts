// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y$o
// matched 2.1.88 source: src/commands/branch/branch.ts
// class=modified  jaccard=0.4313  score=0.6214  fileCov=0.5849
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: deriveFirstPrompt, createFork, call, branchAndResume
function deriveFirstPrompt(firstUserMessage) {
  let t = firstUserMessage?.message?.content;
  if (!t) return "Branched conversation";
  let n = typeof t === "string" ? t : t.find((r) => r.type === "text")?.text;
  if (!n) return "Branched conversation";
  return n.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() || "Branched conversation";
}
async function createFork(customTitle, t, n) {
  let r = QLl.randomUUID(),
    o = Rt(),
    s = Jh(yr()),
    i = Pk(r),
    a = ML() ?? em();
  await ker.mkdir(s, {
    recursive: true,
    mode: 448,
  });
  let l;
  try {
    ((l = xer.createReadStream(a, {
      encoding: "utf8",
    })),
      await X$o.once(l, "open"));
  } catch (S) {
    if (wn(S)) throw Error("No conversation to branch");
    throw (ke(S), S);
  }
  let c = xer.createWriteStream(i, {
      encoding: "utf8",
      mode: 384,
    }),
    u = null;
  c.on("error", (S) => {
    u = Zr(S);
  });
  let d = ZLl.createInterface({
      input: l,
      crlfDelay: 1 / 0,
    }),
    p = new Set(customTitle.map((S) => S.uuid)),
    f = new Map(),
    m = [],
    g = async () => {
      (c.destroy(), await ker.unlink(i).catch(() => {}));
    },
    h = async (S) => {
      if (u) throw (await g(), u);
      if (!c.write(S)) await X$o.once(c, "drain").catch(() => {});
    };
  try {
    for await (let S of d) {
      if (S.length === 0) continue;
      let A;
      try {
        A = Ft(S);
      } catch {
        continue;
      }
      if (A.type === "content-replacement" && A.sessionId === o) {
        m.push(...A.replacements);
        continue;
      }
      if (!J5(A) || A.isSidechain || !p.has(A.uuid)) continue;
      f.set(A.uuid, A);
    }
  } catch (S) {
    throw (await g(), S);
  } finally {
    (d.close(), l.destroy());
  }
  let y = null,
    b = null,
    _ = [];
  try {
    for (let S of customTitle) {
      let A = f.get(S.uuid);
      if (!A) continue;
      let v =
          A.type === "system" && A.subtype === "model_refusal_fallback"
            ? {
                neutralizedByFork: true,
              }
            : void 0,
        C = {
          ...A,
          ...v,
          sessionId: r,
          parentUuid: y,
          isSidechain: false,
          sessionKind: void 0,
          forkedFrom: {
            sessionId: o,
            messageUuid: A.uuid,
          },
        },
        x = {
          ...A,
          ...v,
          sessionId: r,
        };
      if (
        (_.push(x),
        (b = A),
        await h(
          De(C) +
            `
`,
        ),
        A.type !== "progress")
      )
        y = A.uuid;
    }
  } catch (S) {
    throw (await g(), S);
  }
  if (b === null) throw (await g(), Error("No messages to branch"));
  if (n?.length)
    for (let S of n) {
      let A = {
          ...S,
          cwd: b.cwd,
          userType: b.userType,
          entrypoint: b.entrypoint,
          version: b.version,
          gitBranch: b.gitBranch,
          sessionId: r,
          timestamp: new Date().toISOString(),
        },
        v = {
          ...A,
          parentUuid: y,
          isSidechain: false,
        };
      if (
        (_.push(A),
        await h(
          De(v) +
            `
`,
        ),
        S.type !== "progress")
      )
        y = S.uuid;
    }
  if (m.length > 0)
    await h(
      De({
        type: "content-replacement",
        sessionId: r,
        replacements: m,
      }) +
        `
`,
    );
  if ((c.end(), await eDl.finished(c).catch(() => {}), u)) throw (await g(), u);
  return {
    sessionId: r,
    title: t,
    forkPath: i,
    serializedMessages: _,
    contentReplacementRecords: m,
  };
}
async function getUniqueForkName(baseName) {
  let t = `${baseName} (Branch)`;
  if (
    (
      await OQ(t, {
        exact: true,
      })
    ).length === 0
  )
    return t;
  let r = await OQ(`${baseName} (Branch`),
    o = new Set([1]),
    s = new RegExp(`^${wx(baseName)} \\(Branch(?: (\\d+))?\\)$`);
  for (let a of r) {
    let l = a.customTitle?.match(s);
    if (l)
      if (l[1]) o.add(parseInt(l[1], 10));
      else o.add(1);
  }
  let i = 2;
  while (o.has(i)) i++;
  return `${baseName} (Branch ${i})`;
}
async function rDl(onDone, context, n = {}) {
  let r = Rt(),
    o = Gg(r);
  try {
    let {
        sessionId: s,
        title: i,
        forkPath: a,
        serializedMessages: l,
        contentReplacementRecords: c,
      } = await createFork(onDone.messages, n.customTitle, n.extraMessages),
      u = new Date(),
      d = deriveFirstPrompt(l.find((b) => b.type === "user")),
      p = i?.replace(/\s+/g, " ").trim() ?? (await getUniqueForkName(d)),
      f = i ? "user" : "auto";
    (await Aq(s, p, a, f),
      await Pze(s, p, a, f),
      G("tengu_conversation_forked", {
        message_count: l.length,
        has_custom_title: !!i,
      }));
    let m = {
        date: bi(u.toISOString(), "T"),
        messages: l,
        fullPath: a,
        value: u.getTime(),
        created: u,
        modified: u,
        firstPrompt: d,
        messageCount: l.length,
        isSidechain: false,
        sessionId: s,
        customTitle: p,
        agentName: p,
        contentReplacements: c,
      },
      g = i ? ` "${p}"` : "",
      h = o ? ` ("${o}")` : "",
      y = `Branched conversation${g}. You are now in the new branch (session ${s}). Use /resume ${r}${h} to return to the original, or run \`claude -r ${r}\` in a new terminal.`;
    if (onDone.resume)
      (await onDone.resume(s, m, "fork"),
        Zce(XE(), p, "user"),
        context(y, {
          display: "system",
        }));
    else context(`Branched conversation${g}. Resume with: /resume ${s}`);
    return true;
  } catch (s) {
    let i = s instanceof Error ? s.message : "Unknown error occurred";
    return (context(`Failed to branch conversation: ${i}`), false);
  }
}
async function call(e, t, n) {
  return (
    await rDl(t, e, {
      customTitle: n?.trim() || void 0,
    }),
    null
  );
}
var QLl, X$o, xer, ker, ZLl, eDl;
