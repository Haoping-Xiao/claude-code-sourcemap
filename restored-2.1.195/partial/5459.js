// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Syc
// matched 2.1.88 source: src/hooks/useTypeahead.tsx
// class=partial  jaccard=0.0769  score=0.1093  fileCov=0.2056
// note: low-confidence suggestion: src/hooks/useTypeahead.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Syc = E(() => {
  ior();
  JSt();
  BI();
  Ryt();
  IL();
  es();
  vn();
  byc = require("path");
});
function kpm(e, t, n) {
  if (t === void 0) return !1;
  let r = e.length - t.length,
    o = n - r;
  return r > 0 && o >= 0 && e.slice(0, o) + e.slice(n) === t && /^[a-z0-9_+-]*:$/.test(e.slice(o, n));
}
function g7e(e) {
  return typeof e === "object" && e !== null && "type" in e && (e.type === "directory" || e.type === "file");
}
function Yse(e, t, n) {
  if (n.length === 0) return -1;
  if (t < 0) return 0;
  let r = e[t];
  if (!r) return 0;
  let o = n.findIndex(s => s.id === r.id);
  return o >= 0 ? o : 0;
}
function Ayc(e) {
  let t = e.metadata;
  return t?.sessionId ? `/resume ${t.sessionId}` : `/resume ${e.displayText}`;
}
function E6o(e) {
  if (e.isQuoted) return e.token.slice(2).replace(/"$/, "");else if (e.token.startsWith("@")) return e.token.substring(1);else return e.token;
}
function A6o(e) {
  let {
      displayText: t,
      mode: n,
      hasAtPrefix: r,
      needsQuotes: o,
      isQuoted: s,
      isComplete: i
    } = e,
    a = i ? " " : "";
  if (s || o) return n === "bash" ? `"${t}"${a}` : `@"${t}"${a}`;else if (r) return n === "bash" ? `${t}${a}` : `@${t}${a}`;else return t;
}
function H6o(e, t, n, r, o, s) {
  let l = t.slice(0, n).lastIndexOf(" ") + 1,
    c;
  if (s === "variable") c = "$" + e.displayText + " ";else if (s === "command") c = e.displayText + " ";else c = e.displayText;
  let u = t.slice(0, l) + c + t.slice(n);
  r(u), o(l + c.length);
}
function PTt(e, t, n, r, o, s) {
  let i = t.slice(0, n).match(r);
  if (!i || i.index === void 0) return;
  let a = i.index + (i[1]?.length ?? 0),
    l = t.slice(0, a),
    c = l + e.displayText + " " + t.slice(n);
  o(c), s(l.length + e.displayText.length + 1);
}
async function Rpm(e, t, n) {
  if (vl()) return [];
  try {
    if (hdr) hdr.abort();
    return hdr = new AbortController(), await Qhc(e, t, hdr.signal, n);
  } catch {
    return G("tengu_shell_completion_failed", {}), [];
  }
}
function Hyc(e, t, n, r, o) {
  let s = o ? "/" : " ",
    i = e.slice(0, n),
    a = e.slice(n + r),
    l = "@" + t + s;
  return {
    newInput: i + l + a,
    cursorPos: i.length + l.length
  };
}
function UTe(e, t, n = !1) {
  if (!e) return null;
  let r = e.substring(0, t);
  if (n) {
    let c = /@"([^"]*)"?$/,
      u = r.match(c);
    if (u && u.index !== void 0) {
      let p = e.substring(t).match(/^[^"]*"?/),
        f = p ? p[0] : "";
      return {
        token: u[0] + f,
        startPos: u.index,
        isQuoted: !0
      };
    }
  }
  if (n) {
    let c = r.lastIndexOf("@");
    if (c >= 0 && (c === 0 || /[\s\u3002\u3001\uFF1F\uFF01]/.test(r[c - 1]))) {
      let u = r.substring(c),
        d = u.match(vpm);
      if (d && d[0].length === u.length) {
        let f = e.substring(t).match(Eyc),
          m = f ? f[0] : "";
        return {
          token: d[0] + m,
          startPos: c,
          isQuoted: !1
        };
      }
    }
  }
  let o = n ? wpm : Cpm,
    s = r.match(o);
  if (!s || s.index === void 0) return null;
  let a = e.substring(t).match(Eyc),
    l = a ? a[0] : "";
  return {
    token: s[0] + l,
    startPos: s.index,
    isQuoted: !1
  };
}
function Lpm(e) {
  if (f7e(e)) {
    let t = e.indexOf(" ");
    if (t === -1) return {
      commandName: e.slice(1),
      args: ""
    };
    return {
      commandName: e.slice(1, t),
      args: e.slice(t + 1)
    };
  }
  return null;
}
function Tyc(e, t) {
  return !e && t.includes(" ") && !t.endsWith(" ");
}
function vyc({
  commands: e,
  onInputChange: t,
  onSubmit: n,
  setCursorOffset: r,
  input: o,
  cursorOffset: s,
  mode: i,
  agents: a,
  setSuggestionsState: l,
  suggestionsState: {
    suggestions: c,
    selectedSuggestion: u,
    hoveredSuggestionId: d,
    commandArgumentHint: p,
    suggestionsEmptyMessage: f
  },
  suppressSuggestions: m,
  markAccepted: g,
  onModeChange: h,
  sessionEnvVars: y
}) {
  let {
      addNotification: b
    } = Li(),
    _ = Uu("chat:thinkingToggle", "Chat", "alt+t"),
    [S, A] = Ym.useState("none"),
    v = Ym.useRef(d);
  v.current = d ?? null;
  let C = Ym.useMemo(() => {
      let Ke = e.filter(ct => !ct.isHidden);
      if (Ke.length === 0) return;
      return Math.max(...Ke.map(ct => xu(ct).length)) + 6;
    }, [e]),
    [x, I] = Ym.useState(void 0),
    k = Ht(Ke => Ke.mcp.resources),
    D = Ht(Ke => Ke.mcp.resourceTemplates),
    P = Dc(),
    O = Ho(),
    L = Ym.useCallback(() => {
      let Ke = P.getState();
      YRa(Ke.mcp.clients, Ke.mcp.resourceTemplates).then(Et => {
        if (Et.length === 0) return;
        let ct = !1;
        if (O(Je => {
          let gt = Je.mcp.resourceTemplates;
          for (let {
            client: st,
            templates: xt
          } of Et) {
            if (st.name in gt || !Je.mcp.clients.some(vt => vt.type === "connected" && vt.client === st.client)) continue;
            gt = {
              ...gt,
              [st.name]: xt
            };
          }
          if (gt === Je.mcp.resourceTemplates) return Je;
          return ct = !0, {
            ...Je,
            mcp: {
              ...Je.mcp,
              resourceTemplates: gt
            }
          };
        }), ct && K.current === "at") z.current = null;
      });
    }, [P, O]),
    M = Ht(Ke => Ke.promptSuggestion),
    N = Ht(Ke => !!Ke.viewingAgentTaskId),
    B = KE(),
    [$, q] = Ym.useState(void 0),
    W = Ym.useMemo(() => {
      if (i !== "prompt" || m) return;
      let Ke = udr(o, s);
      if (!Ke) return;
      let Et = d6o(Ke.partialCommand, e);
      if (!Et) return;
      return {
        text: Et.suffix,
        fullCommand: Et.fullCommand,
        insertPosition: Ke.startPos + 1 + Ke.partialCommand.length
      };
    }, [o, s, i, e, m]),
    V = m ? void 0 : i === "prompt" ? W : $,
    Y = Ym.useRef(s);
  Y.current = s;
  let z = Ym.useRef(null),
    K = Ym.useRef("file"),
    Z = Ym.useRef(""),
    J = Ym.useRef(""),
    ne = Ym.useRef("at-path"),
    oe = Ym.useRef(""),
    re = Ym.useRef(""),
    ee = Ym.useRef(c);
  ee.current = c;
  let ce = Ym.useRef(null),
    ae = Ym.useCallback(() => {
      l(() => ({
        commandArgumentHint: void 0,
        suggestions: [],
        selectedSuggestion: -1
      })), A("none"), I(void 0), q(void 0);
    }, [l]),
    de = Ym.useCallback(async (Ke, Et = !1) => {
      z.current = Ke, K.current = Et ? "at" : "file";
      let ct = vl(),
        Je = null,
        gt = Et && !ct ? P.getState().mcp.resourceTemplates : D;
      if (Et && !ct) {
        if (L(), Je = await mdr(Ke, gt, P.getState().mcp.clients, "@"), z.current !== Ke) return;
      }
      if (!Je) Je = await _6o(Cfe, Ke, ct ? {} : k, ct ? [] : a, Et, ct ? {} : gt);
      if (z.current !== Ke) return;
      if (Je.length === 0) {
        l(() => ({
          commandArgumentHint: void 0,
          suggestions: [],
          selectedSuggestion: -1
        })), A("none"), I(void 0);
        return;
      }
      l(st => ({
        commandArgumentHint: void 0,
        suggestions: Je,
        selectedSuggestion: Yse(st.suggestions, st.selectedSuggestion, Je)
      })), A(Je.length > 0 ? "file" : "none"), I(void 0);
    }, [k, D, P, L, l, A, I, a]);
  Ym.useEffect(() => {
    let Ke = setImmediate(() => {
        if (!vl()) e7t(Cfe);
      }),
      Et = Cfe.indexBuildComplete.subscribe(() => {
        let ct = z.current;
        if (ct === null) return;
        let Je = K.current;
        if (Je === "slash-template") return;
        z.current = null, de(ct, Je === "at");
      });
    return () => {
      clearImmediate(Ke), Et();
    };
  }, [de]);
  let Ee = vW(de, 50),
    me = Ym.useCallback(async Ke => {
      re.current = Ke;
      let Et = await yyc(P.getState().mcp.clients, Ke);
      if (re.current !== Ke) return;
      l(ct => ({
        commandArgumentHint: void 0,
        suggestions: Et,
        selectedSuggestion: Yse(ct.suggestions, ct.selectedSuggestion, Et)
      })), A(Et.length > 0 ? "slack-channel" : "none"), I(void 0);
    }, [l]),
    pe = vW(me, 150),
    ge = Ym.useCallback(async (Ke, Et, ct) => {
      z.current = Ke, K.current = "slash-template";
      let Je = await mdr(Ke, {
        [Et]: ct
      }, P.getState().mcp.clients, "/");
      if (z.current !== Ke) return;
      let gt = Je ?? [];
      l(() => ({
        commandArgumentHint: void 0,
        suggestions: gt,
        selectedSuggestion: gt.length > 0 ? 0 : -1
      })), A(gt.length > 0 ? "command" : "none"), I(void 0);
    }, [l]),
    he = vW(ge, 150),
    ie = Ym.useCallback(async (Ke, Et, ct) => {
      let Je = Et ?? Y.current;
      if (m) {
        Ee.cancel(), he.cancel(), ae();
        return;
      }
      if (i === "prompt") {
        let vt = udr(Ke, Je);
        if (vt) {
          if (d6o(vt.partialCommand, e)) {
            l(() => ({
              commandArgumentHint: void 0,
              suggestions: [],
              selectedSuggestion: -1
            })), A("none"), I(void 0);
            return;
          }
        }
      }
      if (i === "bash" && Ke.trim()) {
        let vt = Ke.slice(0, Je).lastIndexOf(" ") + 1,
          jt = Ke.slice(vt, Je);
        if (jt && (AZr(jt) || jt.includes("/"))) {
          J.current = jt;
          let Dn = await HZr(jt, {
            maxResults: 10
          });
          if (J.current !== jt) return;
          if (Dn.length > 0) {
            q(void 0), l(nn => ({
              suggestions: Dn,
              selectedSuggestion: Yse(nn.suggestions, nn.selectedSuggestion, Dn),
              commandArgumentHint: void 0
            })), ne.current = "bash-path", A("directory");
            return;
          }
        }
        if (S === "directory" && ne.current === "bash-path") ae();
        oe.current = Ke;
        let en = await uyc(Ke);
        if (oe.current !== Ke) return;
        if (en) {
          q({
            text: en.suffix,
            fullCommand: en.fullCommand,
            insertPosition: Ke.length
          }), l(() => ({
            commandArgumentHint: void 0,
            suggestions: [],
            selectedSuggestion: -1
          })), A("none"), I(void 0);
          return;
        } else q(void 0);
      }
      let gt = i !== "bash" ? Ke.substring(0, Je).match(gdr) : null;
      if (gt) {
        let vt = (gt[2] ?? "").toLowerCase(),
          jt = P.getState(),
          en = [],
          Dn = new Set();
        if (el() && jt.teamContext) for (let nn of Object.values(jt.teamContext.teammates ?? {})) {
          if (nn.name === Hd) continue;
          if (!nn.name.toLowerCase().startsWith(vt)) continue;
          Dn.add(nn.name), en.push({
            id: `dm-${nn.name}`,
            displayText: `@${nn.name}`,
            description: "send message"
          });
        }
        for (let [nn, Ln] of jt.agentNameRegistry) {
          if (Dn.has(nn)) continue;
          if (!nn.toLowerCase().startsWith(vt)) continue;
          let Hn = jt.tasks[Ln]?.status;
          en.push({
            id: `dm-${nn}`,
            displayText: `@${nn}`,
            description: Hn ? `send message \xB7 ${Hn}` : "send message"
          });
        }
        if (en.length > 0) {
          Ee.cancel(), he.cancel(), l(nn => ({
            commandArgumentHint: void 0,
            suggestions: en,
            selectedSuggestion: Yse(nn.suggestions, nn.selectedSuggestion, en)
          })), A("agent"), I(void 0);
          return;
        }
      }
      if (i === "prompt") {
        let vt = Ke.substring(0, Je).match(b6o);
        if (vt && fdr(P.getState().mcp.clients)) {
          pe(vt[2]);
          return;
        } else if (S === "slack-channel") pe.cancel(), ae();
      }
      if (Den && i === "prompt") {
        let vt = Ke.substring(0, Je),
          jt = kpm(Ke, ct, Je) ? vt.match(xpm) : null;
        if (jt) {
          let Dn = Den.getEmoji(jt[2]);
          if (Dn) {
            let nn = (jt.index ?? 0) + (jt[1]?.length ?? 0),
              Ln = Ke.slice(0, nn) + Dn + Ke.slice(Je);
            t(Ln), r(nn + Dn.length), ae();
            return;
          }
        }
        let en = vt.match(S6o);
        if (en) {
          let Dn = Den.getEmojiSuggestions(en[2]);
          if (Dn.length > 0) {
            l(nn => ({
              commandArgumentHint: void 0,
              suggestions: Dn,
              selectedSuggestion: Yse(nn.suggestions, nn.selectedSuggestion, Dn)
            })), A("emoji"), I(void 0);
            return;
          }
        }
        if (S === "emoji") ae();
      }
      let st = Ke.substring(0, Je).match(Ipm),
        xt = Je === Ke.length && Je > 0 && Ke.length > 0 && Ke[Je - 1] === " ";
      if (i === "prompt" && f7e(Ke) && Je > 0) {
        let vt = Lpm(Ke);
        if (vt && vt.commandName === "add-dir" && vt.args) {
          let {
            args: jt
          } = vt;
          if (jt.match(/\s+$/)) {
            Ee.cancel(), he.cancel(), ae();
            return;
          }
          let en = await mPn(jt);
          if (en.length > 0) {
            l(Dn => ({
              suggestions: en,
              selectedSuggestion: Yse(Dn.suggestions, Dn.selectedSuggestion, en),
              commandArgumentHint: void 0
            })), ne.current = "command-arg", A("directory");
            return;
          }
          Ee.cancel(), he.cancel(), ae();
          return;
        }
        if (vt && vt.commandName === "resume" && vt.args !== void 0 && vt.args.trim().length > 0 && Ke.includes(" ")) {
          let {
              args: jt
            } = vt,
            Dn = (await OQ(jt, {
              limit: 10
            })).map(nn => {
              let Ln = qg(nn);
              return {
                id: `resume-title-${Ln}`,
                displayText: nn.customTitle ?? nn.aiTitle,
                description: QJe(nn),
                metadata: {
                  sessionId: Ln
                }
              };
            });
          if (Dn.length > 0) {
            l(nn => ({
              suggestions: Dn,
              selectedSuggestion: Yse(nn.suggestions, nn.selectedSuggestion, Dn),
              commandArgumentHint: void 0
            })), A("custom-title");
            return;
          }
          ae();
          return;
        }
        if (vt && Ke.includes(" ")) {
          let jt = fA(vt.commandName, e);
          if (jt?.getArgumentCompletions) {
            let en = await tyc(Ke, jt.getArgumentCompletions);
            if (en.length > 0) {
              l(Dn => ({
                suggestions: en,
                selectedSuggestion: Yse(Dn.suggestions, Dn.selectedSuggestion, en),
                commandArgumentHint: void 0
              })), A("command"), I(void 0);
              return;
            }
            Ee.cancel(), he.cancel(), ae();
            return;
          }
        }
      }
      if (i === "prompt" && f7e(Ke) && Je > 0 && !Tyc(xt, Ke)) {
        let vt = void 0;
        if (Ke.length > 1) {
          let Dn = Ke.indexOf(" "),
            nn = Dn === -1 ? Ke.slice(1) : Ke.slice(1, Dn),
            Ln = Dn !== -1 && Ke.slice(Dn + 1).trim().length > 0,
            Hn = Dn !== -1 && Ke.length === Dn + 1;
          if (Dn !== -1) {
            let kr = fA(nn, e);
            if (kr || Ln) {
              if (kr?.argumentHint && Hn) vt = kr.argumentHint;else if (kr?.type === "prompt" && kr.argNames?.length && Ke.endsWith(" ")) {
                let Mr = Ke.slice(Dn + 1),
                  fe = bmo(Mr);
                vt = KDa(kr.argNames, fe);
              }
              l(() => ({
                commandArgumentHint: vt,
                suggestions: [],
                selectedSuggestion: -1
              })), A("none"), I(void 0);
              return;
            }
          }
        }
        if (hk()) {
          let Dn = Ke.slice(1),
            nn = Dn.indexOf(":");
          if (nn > 0 && Dn.slice(nn + 1).includes("://")) {
            let Ln = Dn.slice(0, nn),
              Hn = Lol(e, Ln);
            if (Hn.length > 0) {
              if (z.current === Dn) return;
              Ee.cancel(), he(Dn, Ln, Hn);
              return;
            }
          }
          he.cancel();
        }
        let jt = f6o(Ke, e),
          en = bi(Ke.slice(1), " ");
        if (l(Dn => ({
          commandArgumentHint: vt,
          suggestions: jt,
          selectedSuggestion: Ke === ct ? Yse(Dn.suggestions, Dn.selectedSuggestion, jt) : jt.length > 0 ? 0 : -1,
          suggestionsEmptyMessage: jt.length === 0 && Ke.length > 1 && p6o(en) ? `No commands match "${Ke}"` : void 0
        })), A("command"), jt.length > 0) I(C);
        return;
      }
      if (S === "command") Ee.cancel(), he.cancel(), ae();else if (f7e(Ke) && Tyc(xt, Ke)) l(vt => vt.commandArgumentHint ? {
        ...vt,
        commandArgumentHint: void 0
      } : vt);
      if (S === "custom-title") ae();
      if (S === "agent" && ee.current.some(vt => vt.id?.startsWith("dm-"))) {
        if (!Ke.substring(0, Je).match(gdr)) ae();
      }
      if (st && i !== "bash") {
        let vt = UTe(Ke, Je, !0);
        if (vt && vt.token.startsWith("@")) {
          let jt = E6o(vt);
          if (AZr(jt)) {
            J.current = jt;
            let en = await HZr(jt, {
              maxResults: 10
            });
            if (J.current !== jt) return;
            if (en.length > 0) {
              l(Dn => ({
                suggestions: en,
                selectedSuggestion: Yse(Dn.suggestions, Dn.selectedSuggestion, en),
                commandArgumentHint: void 0
              })), ne.current = "at-path", A("directory");
              return;
            }
          }
          if (z.current === jt) return;
          Ee(jt, !0);
          return;
        }
      }
      if (S === "file") {
        let vt = UTe(Ke, Je, !0);
        if (vt) {
          let jt = E6o(vt);
          if (z.current === jt) return;
          Ee(jt, !1);
        } else Ee.cancel(), he.cancel(), ae();
      }
      if (S === "shell") {
        let vt = ee.current[0]?.metadata?.inputSnapshot;
        if (i !== "bash" || Ke !== vt) Ee.cancel(), he.cancel(), ae();
      }
      if (S === "directory" && ne.current === "bash-path" && i !== "bash") Ee.cancel(), he.cancel(), ae();
    }, [S, e, l, ae, de, Ee, pe, he, i, m, t, r, C]);
  Ym.useEffect(() => {
    if (ce.current === o) return;
    let Ke = Z.current;
    if (Ke !== o) Z.current = o, z.current = null;
    ce.current = null, ie(o, void 0, Ke);
  }, [o, ie]);
  let le = Ym.useCallback(async () => {
      if (V) {
        if (i === "bash") {
          t(V.fullCommand), r(V.fullCommand.length), q(void 0);
          return;
        }
        let Ke = udr(o, s);
        if (Ke) {
          let Et = o.slice(0, Ke.startPos),
            ct = o.slice(Ke.startPos + Ke.token.length),
            Je = Et + "/" + V.fullCommand + " " + ct,
            gt = Ke.startPos + 1 + V.fullCommand.length + 1;
          t(Je), r(gt);
          return;
        }
      }
      if (c.length > 0) {
        Ee.cancel(), pe.cancel(), he.cancel();
        let Ke = v.current ? c.findIndex(Je => Je.id === v.current) : -1,
          Et = Ke >= 0 ? Ke : u === -1 ? 0 : u,
          ct = c[Et];
        if (S === "command" && Et < c.length) {
          if (ct) {
            let Je = m6o(ct, !1, e, t, r, n);
            if (Je?.reSuggest) ie(Je.newInput, Je.newInput.length);else ae();
          }
        } else if (S === "custom-title" && c.length > 0) {
          if (ct) {
            let Je = Ayc(ct);
            t(Je), r(Je.length), ae();
          }
        } else if (S === "directory" && c.length > 0) {
          let Je = c[Et];
          if (Je) {
            let gt;
            if (ne.current === "bash-path") {
              let st = o.slice(0, s).lastIndexOf(" ") + 1,
                xt = g7e(Je.metadata) && Je.metadata.type === "directory",
                vt = Je.displayText + (xt ? "" : " ");
              gt = o.slice(0, st) + vt + o.slice(s);
              let jt = st + vt.length;
              if (t(gt), r(jt), xt) ie(gt, jt);else ae();
            } else if (ne.current === "command-arg") {
              let st = o.indexOf(" "),
                xt = o.slice(0, st + 1),
                vt = g7e(Je.metadata) && Je.metadata.type === "directory" ? "/" : " ";
              if (gt = xt + Je.id + vt, t(gt), r(gt.length), g7e(Je.metadata) && Je.metadata.type === "directory") l(jt => ({
                ...jt,
                commandArgumentHint: void 0
              })), ie(gt, gt.length);else ae();
            } else {
              let xt = UTe(o, s, !0) ?? UTe(o, s, !1);
              if (xt) {
                let vt = g7e(Je.metadata) && Je.metadata.type === "directory",
                  jt = Hyc(o, Je.id, xt.startPos, xt.token.length, vt);
                if (gt = jt.newInput, t(gt), r(jt.cursorPos), vt) l(en => ({
                  ...en,
                  commandArgumentHint: void 0
                })), ie(gt, jt.cursorPos);else ae();
              } else ae();
            }
          }
        } else if (S === "shell" && c.length > 0) {
          let Je = c[Et];
          if (Je) {
            let gt = Je.metadata;
            H6o(Je, o, s, t, r, gt?.completionType), ae();
          }
        } else if (S === "agent" && c.length > 0 && c[Et]?.id?.startsWith("dm-")) {
          let Je = c[Et];
          if (Je) PTt(Je, o, s, gdr, t, r), ae();
        } else if (S === "slack-channel" && c.length > 0) {
          let Je = c[Et];
          if (Je) PTt(Je, o, s, b6o, t, r), ae();
        } else if (Den && S === "emoji" && c.length > 0) {
          let Je = c[Et];
          if (Je) PTt(Je, o, s, S6o, t, r), ae();
        } else if (S === "file" && c.length > 0) {
          let Je = UTe(o, s, !0);
          if (!Je) {
            ae();
            return;
          }
          let st = c.some(jt => kyt(jt.metadata) !== null) ? "" : wOo(c),
            xt = Je.token.startsWith("@"),
            vt;
          if (Je.isQuoted) vt = Je.token.slice(2).replace(/"$/, "").length;else if (xt) vt = Je.token.length - 1;else vt = Je.token.length;
          if (st.length > vt) {
            let jt = A6o({
              displayText: st,
              mode: i,
              hasAtPrefix: xt,
              needsQuotes: !1,
              isQuoted: Je.isQuoted,
              isComplete: !1
            });
            n7t(jt, o, Je.token, Je.startPos, t, r), ie(o.replace(Je.token, jt), s);
          } else if (Et < c.length) {
            let jt = c[Et];
            if (jt) {
              let en = kyt(jt.metadata),
                Dn = en ? `${en.replacement}${en.partial ? "" : " "}` : A6o({
                  displayText: jt.displayText,
                  mode: i,
                  hasAtPrefix: xt,
                  needsQuotes: jt.displayText.includes(" "),
                  isQuoted: Je.isQuoted,
                  isComplete: !0
                }),
                nn = n7t(Dn, o, Je.token, Je.startPos, t, r);
              if (en?.partial) ie(nn, Je.startPos + Dn.length);else ae();
            }
          }
        }
      } else if (o.trim() !== "") {
        let Ke, Et;
        if (i === "bash") {
          Ke = "shell";
          let ct = await Rpm(o, s, y);
          if (ct.length === 1) {
            let Je = ct[0];
            if (Je) {
              let gt = Je.metadata;
              H6o(Je, o, s, t, r, gt?.completionType);
            }
            Et = [];
          } else Et = ct;
        } else {
          Ke = "file";
          let ct = UTe(o, s, !0);
          if (ct) {
            let Je = ct.token.startsWith("@"),
              gt = E6o(ct),
              st = vl();
            z.current = gt, K.current = Je ? "at" : "file";
            let xt = Je && !st ? P.getState().mcp.resourceTemplates : D,
              vt = null;
            if (Je && !st) {
              if (L(), vt = await mdr(gt, xt, P.getState().mcp.clients, "@"), z.current !== gt) return;
            }
            if (Et = vt ?? (await _6o(Cfe, gt, st ? {} : k, st ? [] : a, Je, st ? {} : xt)), z.current !== gt) return;
          } else Et = [];
        }
        if (Et.length > 0) l(ct => ({
          commandArgumentHint: void 0,
          suggestions: Et,
          selectedSuggestion: Yse(ct.suggestions, ct.selectedSuggestion, Et)
        })), A(Ke), I(void 0);
      }
    }, [c, u, o, S, e, i, t, r, n, ae, s, ie, k, D, P, L, l, a, Ee, pe, he, V, y]),
    He = Ym.useCallback(Ke => {
      let Et = v.current ? c.findIndex(gt => gt.id === v.current) : -1,
        ct = Ke ?? (Et >= 0 ? Et : u);
      if (ct < 0 || c.length === 0) return;
      let Je = c[ct];
      if (S === "command" && ct < c.length) {
        if (Je) {
          if (Ke === void 0 && Je.id.startsWith(eyc) && /^\/\S+\s+$/.test(o)) {
            Ee.cancel(), he.cancel(), ae(), n(o, !0);
            return;
          }
          let gt = m6o(Je, Ke === void 0, e, t, r, n);
          if (Ee.cancel(), he.cancel(), gt?.reSuggest) ie(gt.newInput, gt.newInput.length);else ae();
        }
      } else if (S === "custom-title" && ct < c.length) {
        if (Je) {
          let gt = Ayc(Je);
          t(gt), r(gt.length), n(gt, !0), Ee.cancel(), he.cancel(), ae();
        }
      } else if (S === "shell" && ct < c.length) {
        if (Je) {
          let gt = Je.metadata;
          H6o(Je, o, s, t, r, gt?.completionType), Ee.cancel(), he.cancel(), ae();
        }
      } else if (S === "agent" && ct < c.length && Je?.id?.startsWith("dm-")) PTt(Je, o, s, gdr, t, r), Ee.cancel(), he.cancel(), ae();else if (S === "slack-channel" && ct < c.length) {
        if (Je) PTt(Je, o, s, b6o, t, r), pe.cancel(), ae();
      } else if (Den && S === "emoji" && ct < c.length) {
        if (Je) PTt(Je, o, s, S6o, t, r), ae();
      } else if (S === "file" && ct < c.length) {
        let gt = UTe(o, s, !0);
        if (gt) {
          if (Je) {
            let st = kyt(Je.metadata),
              xt = gt.token.startsWith("@"),
              vt = st ? `${st.replacement}${st.partial ? "" : " "}` : A6o({
                displayText: Je.displayText,
                mode: i,
                hasAtPrefix: xt,
                needsQuotes: Je.displayText.includes(" "),
                isQuoted: gt.isQuoted,
                isComplete: !0
              }),
              jt = n7t(vt, o, gt.token, gt.startPos, t, r);
            if (Ee.cancel(), he.cancel(), st?.partial) ie(jt, gt.startPos + vt.length);else ae();
          }
        }
      } else if (S === "directory" && ct < c.length) {
        if (Je) {
          if (ne.current === "bash-path") {
            if (Ee.cancel(), he.cancel(), Ke === void 0) {
              ae(), n(o, !1);
              return;
            }
            let xt = o.slice(0, s).lastIndexOf(" ") + 1,
              vt = g7e(Je.metadata) && Je.metadata.type === "directory",
              jt = Je.displayText + (vt ? "" : " "),
              en = o.slice(0, xt) + jt + o.slice(s);
            t(en), r(xt + jt.length), ae();
            return;
          }
          if (ne.current === "command-arg") {
            if (Ee.cancel(), he.cancel(), Ke !== void 0) {
              let xt = o.indexOf(" "),
                vt = o.slice(0, xt + 1),
                jt = g7e(Je.metadata) && Je.metadata.type === "directory",
                en = vt + Je.id + (jt ? "/" : " ");
              if (t(en), r(en.length), jt) ie(en, en.length);else ae();
              return;
            }
            ae(), n(o, !0);
            return;
          }
          let st = UTe(o, s, !0) ?? UTe(o, s, !1);
          if (st) {
            let xt = g7e(Je.metadata) && Je.metadata.type === "directory",
              vt = Hyc(o, Je.id, st.startPos, st.token.length, xt);
            t(vt.newInput), r(vt.cursorPos);
          }
          Ee.cancel(), he.cancel(), ae();
        }
      }
    }, [c, u, S, e, o, s, i, t, r, n, ae, Ee, pe, he, ie]),
    ye = Ym.useCallback(() => {
      le();
    }, [le]),
    ue = Ym.useCallback(() => {
      Ee.cancel(), pe.cancel(), he.cancel(), ae(), ce.current = o;
    }, [Ee, pe, he, ae, o]),
    we = Ym.useCallback(() => {
      l(Ke => ({
        ...Ke,
        hoveredSuggestionId: null,
        selectedSuggestion: Ke.selectedSuggestion <= 0 ? c.length - 1 : Ke.selectedSuggestion - 1
      }));
    }, [c.length, l]),
    Ce = Ym.useCallback(() => {
      l(Ke => ({
        ...Ke,
        hoveredSuggestionId: null,
        selectedSuggestion: Ke.selectedSuggestion >= c.length - 1 ? 0 : Ke.selectedSuggestion + 1
      }));
    }, [c.length, l]),
    Ie = Ym.useCallback(Ke => {
      l(Et => Et.hoveredSuggestionId === Ke ? Et : {
        ...Et,
        hoveredSuggestionId: Ke
      });
    }, [l]),
    Ve = Ym.useRef(He);
  Ve.current = He;
  let Ze = Ym.useCallback(Ke => Ve.current(Ke), []),
    Be = Ym.useMemo(() => ({
      "autocomplete:accept": ye,
      "autocomplete:dismiss": ue,
      "autocomplete:previous": we,
      "autocomplete:next": Ce
    }), [ye, ue, we, Ce]),
    Me = c.length > 0 || !!V,
    Ue = pbe();
  Wh("autocomplete", Me), fPn("Autocomplete", Me), No(Be, {
    context: "Autocomplete",
    isActive: Me && !Ue
  });
  function tt(Ke) {
    let Et = ek(Ke);
    if (Et !== "prompt") {
      h(Et);
      let ct = BU(Ke);
      t(ct), r(ct.length);
    } else t(Ke), r(Ke.length);
  }
  return {
    suggestions: c,
    selectedSuggestion: u,
    suggestionType: S,
    maxColumnWidth: x,
    commandArgumentHint: p,
    suggestionsEmptyMessage: f,
    inlineGhostText: V,
    handleKeyDown: Ke => {
      if (Ke.name === "right" && !N) {
        let {
          text: ct,
          shownAt: Je
        } = M;
        if (ct && Je > 0 && o === "") {
          g(), tt(ct), Ke.preventDefault(), Ke.stopImmediatePropagation();
          return;
        }
      }
      if (Ke.name === "tab" && !Ke.shift) {
        if (c.length > 0 || V) return;
        let {
          text: ct,
          shownAt: Je
        } = M;
        if (ct && Je > 0 && o === "" && !N) {
          Ke.preventDefault(), g(), tt(ct);
          return;
        }
        if (o.trim() === "") Ke.preventDefault(), b({
          key: "thinking-toggle-hint",
          kind: "hint",
          jsx: wyc.jsxs(w, {
            dimColor: !0,
            children: ["Use ", _, " to toggle thinking"]
          }),
          priority: "immediate",
          timeoutMs: 3000
        });
        return;
      }
      if (c.length === 0) return;
      let Et = B?.pendingChord != null;
      if (Ke.ctrl && Ke.key === "n" && !Et) {
        Ke.preventDefault(), Ce();
        return;
      }
      if (Ke.ctrl && Ke.key === "p" && !Et) {
        Ke.preventDefault(), we();
        return;
      }
      if (Ke.name === "return" && !Ke.shift && !Ke.meta) Ke.preventDefault(), He();
    },
    selectSuggestion: Ze,
    setHoveredSuggestion: Ie,
    hoveredSuggestionId: d ?? null
  };
}
var Ym,
  wyc,
  vpm,
  Eyc,
  wpm,
  Cpm,
  Ipm,
  b6o,
  S6o,
  xpm,
  Den = null,
  gdr,
  hdr = null;