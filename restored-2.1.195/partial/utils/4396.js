// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iAl
// matched 2.1.88 source: src/tools/WebSearchTool/WebSearchTool.ts
// class=partial  jaccard=0.0777  score=0.1422  fileCov=0.1464
// note: low-confidence suggestion: src/tools/WebSearchTool/WebSearchTool.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iAl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, utils/config.ts, components/CustomSelect/select.tsx, commands/add-dir/validation.ts, constants/oauth.ts, tools/WebFetchTool/WebFetchTool.ts, tools/WebFetchTool/utils.ts, ink/terminal-focus-state.ts, commands/insights.ts, hooks/useTerminalSize.ts, dn, services/mockRateLimits.ts, @mixmark-io/domino/lib/htmlelts.js, utils/concurrentSessions.ts, Il, utils/debug.ts, main.tsx, RE, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/nativeInstaller/download.ts, utils/file.ts, utils/task/diskOutput.ts, utils/plans.ts, utils/concurrentSessions.ts, @xmldom/xmldom/lib/entities.js, tools/AgentTool/builtInAgents.ts
sze = require("fs/promises"), O$e = require("path"), tHe = R(se(), 1);
tAl = `Render an HTML or Markdown file to an Artifact \u2014 a default-private web page hosted on claude.ai that the user can later choose to share with their teammates. Use this when communicating visually would be clearer than terminal text.

**Before writing the page, you MUST load the \`${ozn}\` skill** to calibrate how much design investment this particular request warrants. Then write the content to a file (via Write/Edit) and call Artifact with its path. The file is wrapped in a \`<!doctype html>\u2026<head>\u2026</head><body>\` skeleton at publish time, so write the page content directly \u2014 no \`<!DOCTYPE>\`, \`<html>\`, \`<head>\`, or \`<body>\` tags of your own. The file includes a minimal CSS reset. Unless the user names a location, put the file in your scratchpad directory if one is listed in your system prompt.

**Title**: Set a concise \`<title>\` in the HTML \u2014 it names the artifact in the browser tab and gallery. Keep it stable across redeploys. Add a one-sentence \`<meta name="description" content="\u2026">\` \u2014 it becomes the gallery card's subtitle.

**To update**: Edit the file, then call Artifact again with the same file path \u2014 it redeploys to the same URL. A different file path claims a new URL so only use a different path if you intend to create a separate new Artifact.

**To update an artifact the user gives you a URL for** (an artifact link not published in this session): pass the URL as \`url\`. Without it, a fresh session always mints a new URL \u2014 there is no other way to target an existing one.

**To read an existing artifact's content**: call WebFetch with its URL.

**Self-contained only**: A strict CSP blocks requests to any external host \u2014 CDN scripts, external stylesheets, fonts, remote images, fetch/XHR/WebSockets. Inline all CSS/JS and embed assets as data: URIs.

**Responsive**: Use relative units, flexbox/grid, \`max-width:100%\` on images. Wide content (tables, diagrams, code blocks) must scroll inside its own \`overflow-x: auto\` container \u2014 the page body must never scroll horizontally.

**Favicon** (required): Pass one or two emoji as \`favicon\` (e.g. \`"\uD83D\uDCCA"\`, \`"\uD83D\uDC1B"\`, \`"\u26A1\uD83D\uDD25"\`). It becomes the browser-tab icon. Emoji only \u2014 no SVG, no markup. Keep it the **same** across redeploys of an artifact \u2014 users find their tab by its icon, and a changed favicon reads as a different page. Only pick a new emoji on a hard pivot in what the artifact is about (new investigation, new deliverable), not for incremental updates.`, nAl = ve(() => H.strictObject({
  file_path: H.string().describe("Path to an .html or .md file to render. Use a short, distinctive basename \u2014 it is the fallback title if the HTML has no <title>."),
  favicon: H.string().min(1).max(32).describe('Browser-tab icon: one or two emoji (e.g. "\uD83D\uDCCA"). No markup. Keep stable across redeploys; change only on a hard topic pivot.'),
  label: H.string().max(60).optional().describe('Short human-readable name for this version, max 60 chars (e.g. "fixed-background"). Shown in the version picker. Not a description \u2014 keep it to a few words.'),
  url: H.string().optional().describe("Existing artifact URL to redeploy to. Pass when the user gives you a URL for an artifact not published in this session; omit for new artifacts or same-session redeploys. Must be an artifact the user owns."),
  force: H.boolean().optional().describe("Overwrite without a conflict check. Use only after a 409 when you have reconciled with the other session's version and intend to replace it. Omit (or false) to send baseVersion so a concurrent write 409s instead of being silently clobbered."),
  ...(nHe && nHe.isFrameMcpEnabled() && {
    mcp: nHe.frameMcpInputSchema()
  })
})), Nyf = ve(() => H.object({
  url: H.string(),
  path: H.string(),
  title: H.string().optional(),
  version: H.string().optional(),
  mcpDropped: H.string().optional()
}));
QRo = ti({
  name: g4,
  searchHint: "render an HTML or Markdown file to a claude.ai web page",
  briefStandalone: true,
  shouldDefer: false,
  maxResultSizeChars: 1000,
  preserveToolUseResultInSubagents: true,
  userFacingName() {
    return "Artifact";
  },
  get inputSchema() {
    return nAl();
  },
  get outputSchema() {
    return Nyf();
  },
  isEnabled() {
    return GRe();
  },
  isConcurrencySafe() {
    return false;
  },
  isReadOnly() {
    return false;
  },
  ruleContentField: "file_path",
  getPath({
    file_path: e
  }) {
    return ds(e);
  },
  async checkPermissions(e, t) {
    let n = Fr(t),
      r = ZJ(QRo, e, n);
    if (r.behavior === "deny") return r;
    let o = r.behavior === "ask",
      s = ds(e.file_path),
      i = t.getAppState().frameUrls[s],
      a = e.url ?? i?.url,
      l = a ? J2t(a) : null,
      c = H6t(),
      u = c && l ? VRo(l.slug) : void 0;
    if (c && !l) KRo(s);
    if (c && l) {
      if (zRo(s, l.slug), !(!!t.toolUseId && u?.lastProbeToolUseId === t.toolUseId)) {
        let b = await _ko(l, t.abortController.signal);
        if (b.err === null) {
          let _ = YRo(b.mode, b.shared);
          if (_.mode === "unknown") It("artifact_share_status", "unknown_share_mode");else xe("artifact_share_status");
          NXn(l.slug, {
            ..._,
            lastProbeToolUseId: t.toolUseId
          });
        } else T(`[artifact] share-status probe failed: ${b.err}`), NXn(l.slug, {
          mode: u?.mode ?? "owner",
          isSharedLive: u?.isSharedLive ?? false,
          lastProbeToolUseId: t.toolUseId,
          probeFailed: true
        });
        u = VRo(l.slug);
      }
    }
    let d = u?.isSharedLive === true || u?.probeFailed;
    if (!o && e.url === void 0 && JRo(e) === void 0 && i !== void 0 && l !== null && !d) return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "Redeploy of an artifact already published this session"
      }
    };
    let p = null;
    if (!o && O$e.extname(s).toLowerCase() !== ".md") try {
      let y = await sze.open(s, "r");
      try {
        let b = Buffer.alloc(sso),
          {
            bytesRead: _
          } = await y.read(b, 0, b.length, 0);
        p = zOn(b.toString("utf8", 0, _));
      } finally {
        await y.close();
      }
    } catch {}
    let f = p ?? rAl(i, e.url),
      m = XRo(e),
      g = m ? `, granting the page access to your connectors${m}` : "",
      h = u?.probeFailed ? "a page on claude.ai (share status could not be confirmed)" : u?.isSharedLive ? `a page shared with ${ZEl(u.mode)} on claude.ai (viewers see updates immediately)` : u !== void 0 && u.mode !== "owner" ? "a page on claude.ai (viewers see a pinned earlier version)" : "a private page on claude.ai";
    return {
      behavior: "ask",
      message: f !== void 0 && f !== null ? `Claude wants to publish "${f}" (${e.file_path}) to ${h}${g}` : `Claude wants to publish ${e.file_path} to ${h}${g}`,
      ...(r.behavior === "ask" && {
        suggestions: r.suggestions,
        blockedPath: r.blockedPath
      }),
      decisionReason: {
        type: "other",
        reason: d ? "Publishing to a shared-live artifact requires confirmation" : "Publishing a file to the web requires confirmation"
      },
      ...(r.behavior === "ask" && r.decisionReason?.type === "rule" && {
        decisionReason: r.decisionReason
      })
    };
  },
  toAutoClassifierInput(e) {
    let {
        file_path: t,
        url: n
      } = e,
      r = [t];
    if (n) r.push(`\u2192 ${n}`);
    let o;
    try {
      o = r.join(" ") + XRo(e);
    } catch {
      return "";
    }
    if (!H6t()) return o;
    o = o.replace(/[[\]]/g, " ");
    try {
      let s = typeof t === "string" ? QEl(ds(t)) : void 0;
      if (s?.isSharedLive || s?.probeFailed) o += ` [shared-live: ${s.probeFailed ? "unknown" : s.mode}]`;
    } catch {}
    return o;
  },
  async description() {
    return "Render an HTML or Markdown file to an Artifact \u2014 a default-private claude.ai web page the user can share with teammates.";
  },
  async prompt({
    tools: e
  }) {
    return nHe && "mcp" in nAl().shape ? `${tAl}

${nHe.buildFrameMcpPrompt(e)}` : tAl;
  },
  async validateInput(e, t) {
    let {
        file_path: n,
        favicon: r,
        url: o
      } = e,
      s = O$e.extname(n).toLowerCase();
    if (s !== ".html" && s !== ".htm" && s !== ".md") return {
      result: false,
      message: `unsupported file type: ${s || "(none)"} \u2014 use .html or .md`,
      errorCode: 1
    };
    if (r.includes("<")) return {
      result: false,
      message: "favicon must be one or two emoji \u2014 no markup",
      errorCode: 6
    };
    if (o !== void 0) {
      let a = J2t(o);
      if (a === null) return {
        result: false,
        message: `not an artifact URL: ${o}`,
        errorCode: 4
      };
      let l = $s().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
      if (a.env !== l) return {
        result: false,
        message: `that artifact URL is for ${a.env}, but this session targets ${l} claude.ai \u2014 republish it here to mint a ${l} URL, or switch environments`,
        errorCode: 5
      };
    }
    if (ZJ(QRo, e, Fr(t)).behavior === "allow") {
      let a = ds(n);
      if (!a.startsWith("\\\\") && !a.startsWith("//")) try {
        let l = await sze.stat(a);
        if (l.size > SQ) return {
          result: false,
          message: `too large: ${Math.ceil(l.size / 1024 / 1024)}MB (max ${SQ / 1024 / 1024}MB)`,
          errorCode: 3
        };
      } catch (l) {
        if (wn(l)) return {
          result: false,
          message: await oAl(a),
          errorCode: 2
        };
      }
    }
    return {
      result: true
    };
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null) return null;
    if ("content" in e || "title" in e) return "The Artifact tool reads from a file on disk \u2014 it does not take inline `content` or `title`. " + "Write the page to an .html or .md file first (Write/Edit), then call Artifact with `file_path` pointing at it. Set the title via an HTML `<title>` tag in the file.";
    if ("label" in e && typeof e.label === "string" && e.label.length > 60) return "`label` is a short version name (max 60 chars). Move longer text into the page content.";
    return null;
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let n = e.mcpDropped ? `

\u26A0 The mcp manifest was rejected by the server and the page was published without it (the page's connector bridge will be unavailable). Server said: ${e.mcpDropped}` : "";
    return {
      tool_use_id: t,
      type: "tool_result",
      content: `Published ${e.path} at ${e.url}${n}`
    };
  },
  renderToolUseMessage(e) {
    let {
        file_path: t,
        url: n
      } = e,
      r = XRo(e);
    return tHe.jsxs(w, {
      children: [t, n && tHe.jsxs(w, {
        dimColor: true,
        children: [" \u2192 ", n]
      }), r && tHe.jsx(w, {
        dimColor: true,
        children: r
      })]
    });
  },
  renderToolResultMessage(e) {
    return tHe.jsx(qn, {
      children: tHe.jsx(w, {
        dimColor: true,
        children: tHe.jsxs(Tn, {
          children: ["published", tHe.jsx(xs, {
            url: e.url,
            children: e.url
          })]
        })
      })
    });
  },
  async call(e, t) {
    let {
        file_path: n,
        favicon: r,
        label: o,
        url: s
      } = e,
      i = JRo(e),
      a = ds(n),
      c = O$e.extname(a).toLowerCase() === ".md",
      u;
    try {
      u = await sze.stat(a);
    } catch (I) {
      if (wn(I)) throw new QWe(await oAl(a), "file_not_found");
      throw I;
    }
    if (u.size > SQ) throw new QWe(`too large: ${Math.ceil(u.size / 1024 / 1024)}MB (max ${SQ / 1024 / 1024}MB)`, "too_large_raw");
    let d = await sze.readFile(a, "utf8"),
      p = c ? XEl(d) : d;
    t.readFileState.set(a, {
      content: d,
      timestamp: Math.floor(u.mtimeMs),
      offset: void 0,
      limit: void 0
    });
    let f = t.getAppState(),
      m = f.frameUrls[a],
      g = s ?? m?.url,
      h = g ? Oue(g) : null,
      y = SYn(),
      b = "force" in e && e.force === true,
      _ = y && !b && h !== null ? f.artifactReadVersions?.[h] : void 0;
    if (y && h !== null && _ === void 0 && !b) throw new QWe("This session hasn't viewed the latest version of the artifact. WebFetch the URL first, or pass force:true to overwrite.", "stale_version_guard");
    let S = (c ? null : zOn(d)) ?? rAl(m, s) ?? O$e.parse(a).name,
      A = c ? "" : iso(d, O$e.parse(a).name.toLowerCase()),
      v = await gko(p, {
        ...(h && {
          slug: h
        }),
        title: S,
        favicon: r,
        label: o,
        ...(A && {
          description: A
        }),
        ...(i && {
          mcp: i
        }),
        ...(_ && {
          baseVersion: _
        })
      });
    if (v.err !== null) {
      if (y && v.liveVersion && h !== null && !v.conflict) t.setArtifactReadVersion(h, v.liveVersion);
      throw new QWe(v.err, v.conflict ? "publish_conflict" : "publish_rejected");
    }
    if (H6t() && v.read !== void 0) zRo(a, v.slug), NXn(v.slug, YRo(v.read, v.shared));
    if (h === null && t.agentId === void 0 && !t.options.isNonInteractiveSession && !Js() && !wf() && !TF() && !oY() && !ml(Oe.CLAUDE_CODE_ARTIFACT_AUTO_OPEN)) {
      let I = v.url;
      try {
        let k = new URL(v.url);
        k.searchParams.set("via", "auto_preview"), I = k.toString();
      } catch {}
      ac(I);
    }
    if (t.setAppState(I => {
      let {
        [a]: k,
        ...D
      } = I.frameUrls;
      if (h !== null) {
        for (let [P, O] of Object.entries(D)) if (Oue(O.url) === h) delete D[P], KRo(P);
      }
      return {
        ...I,
        frameUrls: {
          ...D,
          [a]: {
            url: v.url,
            updatedAt: Date.now(),
            title: S,
            favicon: r
          }
        }
      };
    }), y) t.setArtifactReadVersion(v.slug, v.version);
    let C = Rt(),
      x = ML() ?? Pk(C);
    return BXn(x, {
      type: "frame-link",
      sessionId: C,
      path: a,
      frameUrl: v.url,
      timestamp: new Date().toISOString()
    }).catch(() => {}), {
      data: {
        url: v.url,
        path: a,
        title: S,
        ...(y && {
          version: v.version
        }),
        ...(v.mcpDropped !== void 0 && {
          mcpDropped: v.mcpDropped
        })
      }
    };
  }
});
function xbt() {
  if (Vi()) return false;
  if (!Us("allow_team_onboarding")) return false;
  if (!WE()) return false;
  return at("tengu_flint_harbor_share", false);
}
function FXn(e) {
  if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `Onboarding guide unavailable: ${e.reason}`);
  return e.data;
}
function jXn() {
  if (!Us("allow_team_onboarding")) throw Error("Onboarding guide unavailable: policy-disabled");
}
async function aAl(e, t) {
  jXn();
  let n = await Os.post("/api/organizations/:orgUUID/claude_code/onboarding", {
      content: e,
      name: t
    }, UXn),
    r = FXn(n);
  return G("tengu_team_onboarding_share_created", {}), r;
}
async function ZRo(e, t) {
  jXn();
  let n = await Os.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`, {
      content: t
    }, UXn),
    r = FXn(n);
  return G("tengu_team_onboarding_share_updated", {}), r;
}
async function lAl(e) {
  jXn();
  let t = await Os.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`, UXn);
  FXn(t), G("tengu_team_onboarding_share_deleted", {});
}
async function eLo() {
  jXn();
  let e = await Os.get("/api/organizations/:orgUUID/claude_code/onboarding", UXn);
  return FXn(e).guides;
}
var Byf = 10000 /* 1e4 */,
  UXn;