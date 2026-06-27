// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m4t
// matched 2.1.88 source: src/tools/ListMcpResourcesTool/ListMcpResourcesTool.ts
// class=modified  jaccard=0.476  score=0.6277  fileCov=0.6632
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module m4t] deps: Xr, BI, qNn, ii, At, vn, Jt, ILe, cda
((jup = ve(() =>
  H.object({
    server: H.string().optional().describe("Optional server name to filter resources by"),
  }),
)),
  (Gup = ve(() =>
    H.array(
      H.object({
        uri: H.string().describe("Resource URI"),
        name: H.string().describe("Resource name"),
        mimeType: H.string().optional().describe("MIME type of the resource"),
        description: H.string().optional().describe("Resource description"),
        server: H.string().describe("Server that provides this resource"),
      }),
    ),
  )),
  (QW = ti({
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.server ?? "";
    },
    shouldDefer: true,
    name: Kue,
    aliases: ["ListMcpResources"],
    searchHint: "list resources from connected MCP servers",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return zua;
    },
    async prompt() {
      return Kua;
    },
    get inputSchema() {
      return jup();
    },
    get outputSchema() {
      return Gup();
    },
    async call(e, { options: { mcpClients: t } }) {
      let { server: n } = e,
        r = n ? Slo(t, n) : t;
      if (n && r.length === 0)
        throw new mi(
          `Server "${n}" not found. Available servers: ${t.map((s) => s.name).join(", ")}`,
          "MCP server not found",
        );
      return {
        data: (
          await Promise.all(
            r.map(async (s) => {
              if (s.type !== "connected") return [];
              try {
                let i = await CSe(s);
                return await v4(i);
              } catch (i) {
                return (au(s.name, be(i)), []);
              }
            }),
          )
        ).flat(),
      };
    },
    renderToolUseMessage: ada,
    userFacingName: () => "listMcpResources",
    renderToolResultMessage: lda,
    isResultTruncated(e, { columns: t }) {
      return X1(De(e, null, 2), t);
    },
    mapToolResultToToolResultBlockParam(e, t) {
      if (!e || e.length === 0)
        return {
          tool_use_id: t,
          type: "tool_result",
          content:
            "No resources found. MCP servers may still provide tools even if they have no resources.",
        };
      return {
        tool_use_id: t,
        type: "tool_result",
        content: De(e),
      };
    },
  })));
function XNn() {
  let e = process.env.MAX_MCP_OUTPUT_TOKENS;
  if (e) {
    let r = parseInt(e, 10);
    if (Number.isFinite(r) && r > 0) return r;
  }
  let n = at("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof n === "number" && Number.isFinite(n) && n > 0) return n;
  return qup;
}
function Uut(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let t = e,
    n = false;
  for (let r of t)
    if (r.type === "text" && "_meta" in r && r._meta) {
      n = true;
      break;
    }
  if (!n) return e;
  return t.map((r) => {
    if (r.type === "text" && "_meta" in r && r._meta) {
      let { _meta: o, ...s } = r;
      return s;
    }
    return r;
  });
}
function dda(e) {
  return e.type === "text";
}
function pda(e) {
  return e.type === "image";
}
function g4t(e) {
  if (!e) return 0;
  if (typeof e === "string") return If(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((t, n) => {
    if (dda(n)) return t + If(n.text);
    else if (pda(n)) return t + uda;
    return t;
  }, 0);
}
function Vup() {
  return XNn() * 4;
}
function zup() {
  return `

[OUTPUT TRUNCATED - exceeded ${XNn()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function Kup(e, t) {
  let n = [],
    r = 0;
  for (let o of e)
    if (dda(o)) {
      let s = t - r;
      if (s <= 0) break;
      if (o.text.length <= s) (n.push(o), (r += o.text.length));
      else {
        let i = {
          type: "text",
          text: o.text.slice(0, s),
        };
        if (o._meta) i._meta = o._meta;
        n.push(i);
        break;
      }
    } else if (pda(o)) {
      let s = uda * 4;
      if (r + s <= t) (n.push(o), (r += s));
      else {
        let i = t - r;
        if (i > 0) {
          let a = Math.floor(i * 0.75);
          try {
            let l = await f8i(o, a);
            if ((n.push(l), l.source.type === "base64")) r += l.source.data.length;
            else r += s;
          } catch {}
        }
      }
    } else n.push(o);
  return n;
}
async function Tlo(e) {
  if (!e) return false;
  if (g4t(e) <= XNn() * Wup) return false;
  try {
    let r = await P5e(
      typeof e === "string"
        ? [
            {
              role: "user",
              content: e,
            },
          ]
        : [
            {
              role: "user",
              content: e,
            },
          ],
      [],
    );
    return !!(r && r > XNn());
  } catch (n) {
    return (ke(n), false);
  }
}
async function Yup(e) {
  if (!e) return e;
  let t = Vup(),
    n = zup();
  if (typeof e === "string") return mwe(e, t) + n;
  else {
    let r = await Kup(e, t);
    return (
      r.push({
        type: "text",
        text: n,
      }),
      r
    );
  }
}
async function h4t(e) {
  if (!(await Tlo(e))) return e;
  return await Yup(e);
}
var Wup = 0.5,
  uda = 1600,
  qup = 25000;
