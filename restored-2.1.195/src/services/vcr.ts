// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GX
// matched 2.1.88 source: src/services/vcr.ts
// class=modified  jaccard=0.3501  score=0.6361  fileCov=0.4377
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GX] deps: Qi, ft, TM, Ioo, kt, frt, ii, LX, mZn, Vw, BE, je, fn, Jt, IX, yZn
Qwf = Cn(
  async (e, t, n, r) => {
    let o = e.filter((s) => y4(s));
    if (o.length === 0) return 0;
    try {
      let s = await iOe(
        o,
        t,
        {
          activeAgents: n,
          allAgents: n,
        },
        r,
      );
      if (s === 0) return null;
      return Math.max(0, s - pZn);
    } catch {
      return null;
    }
  },
  (e) =>
    e
      .filter((t) => y4(t))
      .map((t) => t.name)
      .join(","),
);
function SZn() {
  return false;
}
async function withFixture(input, fixtureName, n) {
  if (!SZn()) return await n();
  let r = fYt.createHash("sha1").update(De(input)).digest("hex").slice(0, 12),
    o = xSt.join(
      process.env.CLAUDE_CODE_TEST_FIXTURES_ROOT ?? $t(),
      `fixtures/${fixtureName}-${r}.json`,
    );
  try {
    return Ft(
      await pHe.readFile(o, {
        encoding: "utf8",
      }),
    );
  } catch (i) {
    if (on(i) !== "ENOENT") throw i;
  }
  if ((Oe.isCI || false) && !Oe.VCR_RECORD)
    throw Error(`Fixture missing: ${o}. Re-run tests with VCR_RECORD=1, then commit the result.`);
  let s = await n();
  return (
    await pHe.mkdir(xSt.dirname(o), {
      recursive: true,
    }),
    await pHe.writeFile(o, De(s, null, 2), {
      encoding: "utf8",
    }),
    s
  );
}
async function withVCR(messages, t) {
  if (!SZn()) return await t();
  let n = lk(
      messages.filter((i) => {
        if (i.type === "attachment") return i.attachment.type !== "agent_listing_delta";
        if (i.type !== "user") return true;
        if (i.isMeta) return false;
        return true;
      }),
    ),
    r = mapMessages(
      n.map((i) => i.message.content),
      dehydrateValue,
    ),
    o = xSt.join(
      process.env.CLAUDE_CODE_TEST_FIXTURES_ROOT ?? $t(),
      `fixtures/${r.map((i) => fYt.createHash("sha1").update(De(i)).digest("hex").slice(0, 6)).join("-")}.json`,
    );
  try {
    let i = Ft(
      await pHe.readFile(o, {
        encoding: "utf8",
      }),
    );
    return (
      i.output.forEach(oCf),
      i.output.map((a, l) => Okl(a, hydrateValue, l, fYt.randomUUID()))
    );
  } catch (i) {
    if (on(i) !== "ENOENT") throw i;
  }
  if (Oe.isCI && !Oe.VCR_RECORD)
    throw Error(`Anthropic API fixture missing: ${o}. Re-run tests with VCR_RECORD=1, then commit the result. Input messages:
${De(r, null, 2)}`);
  let s = await t();
  if (Oe.isCI && !Oe.VCR_RECORD) return s;
  return (
    await pHe.mkdir(xSt.dirname(o), {
      recursive: true,
    }),
    await pHe.writeFile(
      o,
      De(
        {
          input: r,
          output: s.map((i, a) => Okl(i, dehydrateValue, a)),
        },
        null,
        2,
      ),
      {
        encoding: "utf8",
      },
    ),
    s
  );
}
function oCf(e) {
  if (e.type !== "assistant") return;
  let t = e.message.model,
    n = e.message.usage,
    r = WY(t, n);
  boe(r, n, t);
}
function mapMessages(messages, t) {
  return messages.map((n) => {
    if (typeof n === "string") return t(n);
    return n.map((r) => {
      switch (r.type) {
        case "tool_result":
          if (typeof r.content === "string")
            return {
              ...r,
              content: t(r.content),
            };
          if (Array.isArray(r.content))
            return {
              ...r,
              content: r.content.map((o) => {
                switch (o.type) {
                  case "text":
                    return {
                      ...o,
                      text: t(o.text),
                    };
                  case "image":
                    return o;
                  default:
                    return;
                }
              }),
            };
          return r;
        case "text":
          return {
            ...r,
            text: t(r.text),
          };
        case "tool_use":
          return {
            ...r,
            input: bZn(r.input, t),
          };
        case "image":
          return iCf(r);
        default:
          return;
      }
    });
  });
}
function iCf(e) {
  if (e.source.type !== "base64") return e;
  return {
    ...e,
    source: {
      ...e.source,
      data: "[IMAGE_DATA]",
    },
  };
}
function bZn(e, t) {
  return xw(e, (n, r) => {
    if (Array.isArray(n)) return n.map((o) => bZn(o, t));
    if (VZe(n)) return bZn(n, t);
    return t(n, r, e);
  });
}
function mapAssistantMessage(message, t, index, uuid) {
  return {
    uuid: uuid ?? `UUID-${index}`,
    requestId: "REQUEST_ID",
    timestamp: message.timestamp,
    isApiErrorMessage: message.isApiErrorMessage,
    apiError: message.apiError,
    error: message.error,
    errorDetails: message.errorDetails,
    healsDistinctCarrier: message.healsDistinctCarrier,
    message: {
      ...message.message,
      content: message.message.content
        .map((o) => {
          switch (o.type) {
            case "text":
              return {
                ...o,
                text: t(o.text),
                citations: o.citations || [],
              };
            case "tool_use":
              return {
                ...o,
                input: bZn(o.input, t),
              };
            default:
              return o;
          }
        })
        .filter(Boolean),
    },
    type: "assistant",
  };
}
function Okl(e, t, n, r) {
  if (e.type === "assistant") return mapAssistantMessage(e, t, n, r);
  else return e;
}
function dehydrateValue(e) {
  if (typeof e !== "string") return e;
  let t = $t(),
    n = tr(),
    r = e
      .replace(/num_files="\d+"/g, 'num_files="[NUM]"')
      .replace(/duration_ms="\d+"/g, 'duration_ms="[DURATION]"')
      .replace(/cost_usd="\d+"/g, 'cost_usd="[COST]"')
      .replaceAll(n, "[CONFIG_HOME]")
      .replaceAll(t, "[CWD]")
      .replace(/Available commands:.+/, "Available commands: [COMMANDS]");
  if (
    ((r = r
      .replace(/\[CWD\][^\s"'<>]*/g, (o) => o.replaceAll("\\\\", "/").replaceAll("\\", "/"))
      .replace(/\[CONFIG_HOME\][^\s"'<>]*/g, (o) =>
        o.replaceAll("\\\\", "/").replaceAll("\\", "/"),
      )),
    r.includes("Files modified by user:"))
  )
    return "Files modified by user: [FILES]";
  return r;
}
function hydrateValue(e) {
  if (typeof e !== "string") return e;
  return e
    .replaceAll("[NUM]", "1")
    .replaceAll("[DURATION]", "100")
    .replaceAll("[CONFIG_HOME]", tr())
    .replaceAll("[CWD]", $t());
}
async function* RMo(e, t) {
  if (!SZn()) return yield* t();
  let n = [],
    r = await withVCR(e, async () => {
      for await (let o of t())
        if (o.type === "fallback_request" && o.creditCode !== null)
          n.push({
            ...o,
            creditCode: null,
          });
        else n.push(o);
      return n;
    });
  if (r.length > 0) {
    yield* r;
    return;
  }
  yield* n;
}
async function withTokenCountVCR(messages, tools, n) {
  if (!SZn()) return await n();
  let r = $t().replace(/[^a-zA-Z0-9]/g, "-"),
    o = dehydrateValue(
      De({
        messages: messages,
        tools: tools,
      }),
    )
      .replaceAll(r, "[CWD_SLUG]")
      .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, "[UUID]")
      .replace(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?/g, "[TIMESTAMP]");
  return (
    await withFixture(o, "token-count", async () => ({
      tokenCount: await n(),
    }))
  ).tokenCount;
}
var fYt, pHe, xSt;
