// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lg
// matched 2.1.88 source: src/utils/bash/bashParser.ts
// class=modified  jaccard=0.0984  score=0.1229  fileCov=0.3304
// note: deminified; 35 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lg] deps: uQi, SWe, Xto, IB, ft, dn, Un, kt, bLt, hna, je, Q9, fn, Hu, Is, Eue, vf, hY, mCe, dr, _1, AKr, u_, lf, TX, At, Yf, tre, Hro, Nna
((hT = require("fs")), (za = require("path")));
oOn = class oOn extends Error {
  constructor(e) {
    super(e);
    this.name = "SandboxInitFailedError";
  }
};
vro = class vro extends Error {
  constructor(e) {
    super(e);
    this.name = "SandboxBridgeUnavailableError";
  }
};
wRe = Cn(() => ({}));
sOn = new Set();
((cct = []), (g2t = []), (iOn = new Map()));
h2t = Cn(() => {
  try {
    cS.updateConfig(f2t(jo() ?? {}));
  } catch (n) {
    T(`checkDependencies: settings unavailable, skipping SRT config seed: ${n}`);
  }
  let { rgPath: e, rgArgs: t } = DWe();
  return cS.checkDependencies({
    command: e,
    args: t,
  });
});
lOn = Cn(() => {
  if (Vt() === "windows") return false;
  return cS.isSupportedPlatform();
});
xo = {
  initialize: jna,
  isSandboxingEnabled: uOn,
  isSandboxEnabledInSettings: $We,
  isPlatformInEnabledList: cOn,
  getSandboxUnavailableReason: Hnp,
  isAutoAllowBashIfSandboxedEnabled: Snp,
  areUnsandboxedCommandsAllowed: Enp,
  isSandboxRequired: Fna,
  areSandboxSettingsLockedByPolicy: vnp,
  areUnsandboxedCommandsForbiddenByPolicy: Anp,
  setSandboxSettings: wnp,
  getExcludedCommands: Cnp,
  wrapWithSandbox: Inp,
  refreshConfig: xro,
  addSessionAllowedHost: ynp,
  reset: xnp,
  checkDependencies: h2t,
  getConfig: cS.getConfig,
  getFsReadConfig: () => {
    let e = cS.getConfig();
    if (e?.filesystem.disabled)
      return {
        denyOnly: e.filesystem.denyRead.map(NW),
        allowWithinDeny: (e.filesystem.allowRead ?? []).map(NW),
      };
    return cS.getFsReadConfig();
  },
  getFsWriteConfig: () => {
    let e = cS.getConfig();
    if (e?.filesystem.disabled)
      return {
        allowOnly: e.filesystem.allowWrite.map(NW),
        denyWithinAllow: e.filesystem.denyWrite.map(NW),
      };
    return cS.getFsWriteConfig();
  },
  getNetworkRestrictionConfig: () => {
    if (cS.getConfig()?.network?.allowedDomains === void 0) return {};
    return cS.getNetworkRestrictionConfig();
  },
  getIgnoreViolations: cS.getIgnoreViolations,
  getLinuxGlobPatternWarnings: Tnp,
  isSupportedPlatform: lOn,
  getAllowUnixSockets: cS.getAllowUnixSockets,
  getAllowLocalBinding: cS.getAllowLocalBinding,
  getAllowMachLookup: cS.getAllowMachLookup,
  getEnableWeakerNestedSandbox: cS.getEnableWeakerNestedSandbox,
  getProxyPort: cS.getProxyPort,
  getProxyAuthToken: cS.getProxyAuthToken,
  getSocksProxyPort: cS.getSocksProxyPort,
  getLinuxHttpSocketPath: cS.getLinuxHttpSocketPath,
  getLinuxSocksSocketPath: cS.getLinuxSocksSocketPath,
  waitForNetworkInitialization: cS.waitForNetworkInitialization,
  getSandboxViolationStore: cS.getSandboxViolationStore,
  annotateStderrWithSandboxFailures: cS.annotateStderrWithSandboxFailures,
  cleanupAfterCommand: () => {
    (cS.cleanupAfterCommand(), _np(), bnp());
  },
};
function hL() {
  return knp;
}
function Lnp(e) {
  return {
    src: e,
    len: e.length,
    i: 0,
    b: 0,
    heredocs: [],
    byteTable: null,
  };
}
function St(e) {
  let t = e.src.charCodeAt(e.i);
  if ((e.i++, t < 128)) e.b++;
  else if (t < 2048) e.b += 2;
  else if (t >= 55296 && t <= 56319) ((e.b += 4), e.i++);
  else e.b += 3;
}
function Zt(e, t = 0) {
  return e.i + t < e.len ? e.src[e.i + t] : "";
}
function Jna(e, t) {
  if (e.byteTable) return e.byteTable[t];
  let n = new Uint32Array(e.len + 1),
    r = 0,
    o = 0;
  while (o < e.len) {
    n[o] = r;
    let s = e.src.charCodeAt(o);
    if (s < 128) (r++, o++);
    else if (s < 2048) ((r += 2), o++);
    else if (s >= 55296 && s <= 56319) ((n[o + 1] = r + 2), (r += 4), (o += 2));
    else ((r += 3), o++);
  }
  return ((n[e.len] = r), (e.byteTable = n), n[t]);
}
function Qna(e) {
  return (
    (e >= "a" && e <= "z") ||
    (e >= "A" && e <= "Z") ||
    (e >= "0" && e <= "9") ||
    e === "_" ||
    e === "/" ||
    e === "." ||
    e === "-" ||
    e === "+" ||
    e === ":" ||
    e === "@" ||
    e === "%" ||
    e === "," ||
    e === "~" ||
    e === "^" ||
    e === "?" ||
    e === "*" ||
    e === "!" ||
    e === "=" ||
    e === "[" ||
    e === "]"
  );
}
function Dnp(e) {
  return Qna(e) || e === "\\";
}
function Lro(e) {
  return (
    e === "" ||
    e === " " ||
    e === "\t" ||
    e ===
      `
` ||
    e === "\r" ||
    e === ";" ||
    e === "&" ||
    e === "|" ||
    e === "(" ||
    e === ")" ||
    e === "<" ||
    e === ">"
  );
}
function XU(e) {
  return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z") || e === "_";
}
function nre(e) {
  return XU(e) || (e >= "0" && e <= "9");
}
function iC(e) {
  return e >= "0" && e <= "9";
}
function Pnp(e) {
  return iC(e) || (e >= "a" && e <= "f") || (e >= "A" && e <= "F");
}
function Mnp(e) {
  return nre(e) || e === "@";
}
function $np(e) {
  return (
    e !== "" &&
    e !== " " &&
    e !== "\t" &&
    e !==
      `
` &&
    e !== "<" &&
    e !== ">" &&
    e !== "|" &&
    e !== "&" &&
    e !== ";" &&
    e !== "(" &&
    e !== ")" &&
    e !== "'" &&
    e !== '"' &&
    e !== "`" &&
    e !== "\\"
  );
}
function ra(e) {
  while (e.i < e.len) {
    let t = e.src[e.i];
    if (t === " " || t === "\t" || t === "\r") St(e);
    else if (t === "\\") {
      if (
        e.src[e.i + 1] ===
        `
`
      )
        (St(e), St(e));
      else break;
    } else break;
  }
}
function Onp(e) {
  while (e.i < e.len) {
    let t = e.src[e.i];
    if (t === " " || t === "\t") St(e);
    else if (
      t === "\\" &&
      e.src[e.i + 1] ===
        `
`
    )
      (St(e), St(e));
    else break;
  }
}
function nextToken(e, t = "arg") {
  ra(e);
  let n = e.b;
  if (e.i >= e.len)
    return {
      type: "EOF",
      value: "",
      start: n,
      end: n,
    };
  let r = e.src[e.i],
    o = Zt(e, 1),
    s = Zt(e, 2);
  if (
    r ===
    `
`
  )
    return (
      St(e),
      {
        type: "NEWLINE",
        value: `
`,
        start: n,
        end: e.b,
      }
    );
  if (r === "#") {
    let i = e.i > 0 ? e.src[e.i - 1] : "";
    if (i === "" || " \t\n;&|<>()`".includes(i)) {
      let a = e.i;
      while (
        e.i < e.len &&
        e.src[e.i] !==
          `
`
      )
        St(e);
      return {
        type: "COMMENT",
        value: e.src.slice(a, e.i),
        start: n,
        end: e.b,
      };
    }
  }
  if (r === "&" && o === "&")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "&&",
        start: n,
        end: e.b,
      }
    );
  if (r === "|" && o === "|")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "||",
        start: n,
        end: e.b,
      }
    );
  if (r === "|" && o === "&")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "|&",
        start: n,
        end: e.b,
      }
    );
  if (r === ";" && o === ";" && s === "&")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: ";;&",
        start: n,
        end: e.b,
      }
    );
  if (r === ";" && o === ";")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: ";;",
        start: n,
        end: e.b,
      }
    );
  if (r === ";" && o === "&")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: ";&",
        start: n,
        end: e.b,
      }
    );
  if (r === ">" && o === ">")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: ">>",
        start: n,
        end: e.b,
      }
    );
  if (r === ">" && o === "&" && s === "-")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: ">&-",
        start: n,
        end: e.b,
      }
    );
  if (r === ">" && o === "&")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: ">&",
        start: n,
        end: e.b,
      }
    );
  if (r === ">" && o === "|")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: ">|",
        start: n,
        end: e.b,
      }
    );
  if (r === "&" && o === ">" && s === ">")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: "&>>",
        start: n,
        end: e.b,
      }
    );
  if (r === "&" && o === ">")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "&>",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "<" && s === "<")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: "<<<",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "<" && s === "-")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: "<<-",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "<")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "<<",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "&" && s === "-")
    return (
      St(e),
      St(e),
      St(e),
      {
        type: "OP",
        value: "<&-",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "&")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "<&",
        start: n,
        end: e.b,
      }
    );
  if (r === "<" && o === "(")
    return (
      St(e),
      St(e),
      {
        type: "LT_PAREN",
        value: "<(",
        start: n,
        end: e.b,
      }
    );
  if (r === ">" && o === "(")
    return (
      St(e),
      St(e),
      {
        type: "GT_PAREN",
        value: ">(",
        start: n,
        end: e.b,
      }
    );
  if (r === "(" && o === "(")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "((",
        start: n,
        end: e.b,
      }
    );
  if (r === ")" && o === ")")
    return (
      St(e),
      St(e),
      {
        type: "OP",
        value: "))",
        start: n,
        end: e.b,
      }
    );
  if (r === "|" || r === "&" || r === ";" || r === ">" || r === "<")
    return (
      St(e),
      {
        type: "OP",
        value: r,
        start: n,
        end: e.b,
      }
    );
  if (r === "(" || r === ")")
    return (
      St(e),
      {
        type: "OP",
        value: r,
        start: n,
        end: e.b,
      }
    );
  if (t === "cmd") {
    if (
      r === "[" &&
      o === "[" &&
      (s === " " ||
        s === "\t" ||
        s ===
          `
` ||
        s === "" ||
        s === "(")
    )
      return (
        St(e),
        St(e),
        {
          type: "OP",
          value: "[[",
          start: n,
          end: e.b,
        }
      );
    if (r === "[")
      return (
        St(e),
        {
          type: "OP",
          value: "[",
          start: n,
          end: e.b,
        }
      );
    if (
      r === "{" &&
      (o === " " ||
        o === "\t" ||
        o ===
          `
`)
    )
      return (
        St(e),
        {
          type: "OP",
          value: "{",
          start: n,
          end: e.b,
        }
      );
    if (r === "}")
      return (
        St(e),
        {
          type: "OP",
          value: "}",
          start: n,
          end: e.b,
        }
      );
    if (r === "!" && (o === " " || o === "\t"))
      return (
        St(e),
        {
          type: "OP",
          value: "!",
          start: n,
          end: e.b,
        }
      );
  }
  if (r === '"')
    return (
      St(e),
      {
        type: "DQUOTE",
        value: '"',
        start: n,
        end: e.b,
      }
    );
  if (r === "'") {
    let i = e.i;
    St(e);
    while (e.i < e.len && e.src[e.i] !== "'") St(e);
    if (e.i < e.len) St(e);
    return {
      type: "SQUOTE",
      value: e.src.slice(i, e.i),
      start: n,
      end: e.b,
    };
  }
  if (r === "$") {
    if (o === "(" && s === "(")
      return (
        St(e),
        St(e),
        St(e),
        {
          type: "DOLLAR_DPAREN",
          value: "$((",
          start: n,
          end: e.b,
        }
      );
    if (o === "(")
      return (
        St(e),
        St(e),
        {
          type: "DOLLAR_PAREN",
          value: "$(",
          start: n,
          end: e.b,
        }
      );
    if (o === "{")
      return (
        St(e),
        St(e),
        {
          type: "DOLLAR_BRACE",
          value: "${",
          start: n,
          end: e.b,
        }
      );
    if (o === "'") {
      let i = e.i;
      (St(e), St(e));
      while (e.i < e.len && e.src[e.i] !== "'") {
        if (e.src[e.i] === "\\" && e.i + 1 < e.len) St(e);
        St(e);
      }
      if (e.i < e.len) St(e);
      return {
        type: "ANSI_C",
        value: e.src.slice(i, e.i),
        start: n,
        end: e.b,
      };
    }
    return (
      St(e),
      {
        type: "DOLLAR",
        value: "$",
        start: n,
        end: e.b,
      }
    );
  }
  if (r === "`")
    return (
      St(e),
      {
        type: "BACKTICK",
        value: "`",
        start: n,
        end: e.b,
      }
    );
  if (iC(r)) {
    let i = e.i;
    while (i < e.len && iC(e.src[i])) i++;
    let a = i < e.len ? e.src[i] : "";
    if (a === ">" || a === "<") {
      let l = e.i;
      while (e.i < i) St(e);
      return {
        type: "WORD",
        value: e.src.slice(l, e.i),
        start: n,
        end: e.b,
      };
    }
  }
  if (Dnp(r) || r === "{" || r === "}") {
    let i = e.i;
    while (e.i < e.len) {
      let a = e.src[e.i];
      if (a === "\\") {
        if (e.i + 1 >= e.len) break;
        if (
          e.src[e.i + 1] ===
          `
`
        ) {
          (St(e), St(e));
          continue;
        }
        (St(e), St(e));
        continue;
      }
      if (!Qna(a) && a !== "{" && a !== "}" && a !== "#") break;
      St(e);
    }
    if (e.i > i) {
      let a = e.src.slice(i, e.i);
      if (/^-?\d+$/.test(a))
        return {
          type: "NUMBER",
          value: a,
          start: n,
          end: e.b,
        };
      return {
        type: "WORD",
        value: a,
        start: n,
        end: e.b,
      };
    }
  }
  return (
    St(e),
    {
      type: "WORD",
      value: r,
      start: n,
      end: e.b,
    }
  );
}
function Nnp(e, t) {
  let n = Lnp(e),
    r = Bnp(e),
    o = {
      L: n,
      src: e,
      srcBytes: r,
      isAscii: r === e.length,
      nodeCount: 0,
      deadline: performance.now() + (t ?? 50),
      aborted: false,
      inBacktick: 0,
      inDquote: 0,
      stopToken: null,
      zshBraceDiff: false,
    };
  try {
    let s = parseProgram(o);
    if (o.aborted) return null;
    if (o.zshBraceDiff) return kn(o, "ERROR", s.startIndex, s.endIndex, [s]);
    return s;
  } catch {
    return null;
  }
}
function Bnp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r < 128) t++;
    else if (r < 2048) t += 2;
    else if (r >= 55296 && r <= 56319) ((t += 4), n++);
    else t += 3;
  }
  return t;
}
function checkBudget(e) {
  if ((e.nodeCount++, e.nodeCount > 50000)) throw ((e.aborted = true), Error("budget"));
  if ((e.nodeCount & 127) === 0 && performance.now() > e.deadline)
    throw ((e.aborted = true), Error("timeout"));
}
function kn(e, t, n, r, o) {
  return (
    checkBudget(e),
    {
      type: t,
      text: CRe(e, n, r),
      startIndex: n,
      endIndex: r,
      children: o,
    }
  );
}
function CRe(e, t, n) {
  if (e.isAscii) return e.src.slice(t, n);
  let r = e.L;
  if (!r.byteTable) Jna(r, 0);
  let o = r.byteTable,
    s = 0,
    i = e.src.length;
  while (s < i) {
    let l = (s + i) >>> 1;
    if (o[l] < t) s = l + 1;
    else i = l;
  }
  let a = s;
  ((s = a), (i = e.src.length));
  while (s < i) {
    let l = (s + i) >>> 1;
    if (o[l] < n) s = l + 1;
    else i = l;
  }
  return e.src.slice(a, s);
}
function Wu(e, t, n) {
  return kn(e, t, n.start, n.end, []);
}
function parseProgram(e) {
  let t = [];
  ra(e.L);
  while (true) {
    let o = Qf(e.L);
    if (nextToken(e.L, "cmd").type === "NEWLINE") {
      ra(e.L);
      continue;
    }
    Iu(e.L, o);
    break;
  }
  let n = e.L.b;
  while (e.L.i < e.L.len) {
    let o = Qf(e.L),
      s = nextToken(e.L, "cmd");
    if (s.type === "EOF") break;
    if (s.type === "NEWLINE") continue;
    if (s.type === "COMMENT") {
      t.push(Wu(e, "comment", s));
      continue;
    }
    Iu(e.L, o);
    let i = parseStatements(e, null);
    for (let a of i) t.push(a);
    if (i.length === 0) {
      let a = nextToken(e.L, "cmd");
      if (a.type === "EOF") break;
      if (a.type === "OP" && a.value === ";;" && t.length > 0) continue;
      t.push(kn(e, "ERROR", a.start, a.end, []));
    }
  }
  let r = t.length > 0 ? e.srcBytes : n;
  return kn(e, "program", n, r, t);
}
function Qf(e) {
  return e.b * 65536 + e.i;
}
function Iu(e, t) {
  ((e.i = t & 65535), (e.b = t >>> 16));
}
function parseStatements(e, terminator) {
  let n = [];
  while (true) {
    ra(e.L);
    let r = Qf(e.L),
      o = nextToken(e.L, "cmd");
    if (o.type === "EOF") {
      Iu(e.L, r);
      break;
    }
    if (o.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Dro(e);
      continue;
    }
    if (o.type === "COMMENT") {
      n.push(Wu(e, "comment", o));
      continue;
    }
    if (terminator && o.type === "OP" && o.value === terminator) {
      Iu(e.L, r);
      break;
    }
    if (
      o.type === "OP" &&
      (o.value === ")" ||
        o.value === "}" ||
        o.value === ";;" ||
        o.value === ";&" ||
        o.value === ";;&" ||
        o.value === "))" ||
        o.value === "]]" ||
        o.value === "]")
    ) {
      Iu(e.L, r);
      break;
    }
    if (o.type === "BACKTICK" && e.inBacktick > 0) {
      Iu(e.L, r);
      break;
    }
    if (
      o.type === "WORD" &&
      (o.value === "then" ||
        o.value === "elif" ||
        o.value === "else" ||
        o.value === "fi" ||
        o.value === "do" ||
        o.value === "done" ||
        o.value === "esac")
    ) {
      Iu(e.L, r);
      break;
    }
    Iu(e.L, r);
    let s = parseAndOr(e);
    if (!s) break;
    (n.push(s), ra(e.L));
    let i = Qf(e.L),
      a = nextToken(e.L, "cmd");
    if (a.type === "OP" && (a.value === ";" || a.value === "&")) {
      let l = Qf(e.L),
        c = nextToken(e.L, "cmd");
      if (
        (Iu(e.L, l),
        n.push(Wu(e, a.value, a)),
        c.type === "EOF" ||
          (c.type === "OP" &&
            (c.value === ")" ||
              c.value === "}" ||
              c.value === ";;" ||
              c.value === ";&" ||
              c.value === ";;&")) ||
          (c.type === "WORD" &&
            (c.value === "then" ||
              c.value === "elif" ||
              c.value === "else" ||
              c.value === "fi" ||
              c.value === "do" ||
              c.value === "done" ||
              c.value === "esac")))
      )
        continue;
    } else if (a.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Dro(e);
      continue;
    } else Iu(e.L, i);
  }
  return n;
}
function parseAndOr(e) {
  let t = parsePipeline(e);
  if (!t) return null;
  while (true) {
    let n = Qf(e.L),
      r = nextToken(e.L, "cmd");
    if (r.type === "OP" && (r.value === "&&" || r.value === "||")) {
      let o = Wu(e, r.value, r);
      zbe(e);
      let s = parsePipeline(e);
      if (!s) {
        t = kn(e, "list", t.startIndex, o.endIndex, [t, o]);
        break;
      }
      if (s.type === "redirected_statement" && s.children.length >= 2) {
        let i = s.children[0],
          a = s.children.slice(1),
          l = kn(e, "list", t.startIndex, i.endIndex, [t, o, i]),
          c = a.at(-1);
        t = kn(e, "redirected_statement", l.startIndex, c.endIndex, [l, ...a]);
      } else t = kn(e, "list", t.startIndex, s.endIndex, [t, o, s]);
    } else {
      Iu(e.L, n);
      break;
    }
  }
  return t;
}
function zbe(e) {
  while (true) {
    let t = Qf(e.L);
    if (nextToken(e.L, "cmd").type !== "NEWLINE") {
      Iu(e.L, t);
      break;
    }
  }
}
function parsePipeline(e) {
  let t = parseCommand(e);
  if (!t) return null;
  let n = [t];
  while (true) {
    let o = Qf(e.L),
      s = nextToken(e.L, "cmd");
    if (s.type === "OP" && (s.value === "|" || s.value === "|&")) {
      let i = Wu(e, s.value, s);
      zbe(e);
      let a = parseCommand(e);
      if (!a) {
        n.push(i);
        break;
      }
      if (a.type === "redirected_statement" && a.children.length >= 2 && n.length >= 1) {
        let l = a.children[0],
          c = a.children.slice(1),
          u = [...n, i, l],
          d = kn(e, "pipeline", u[0].startIndex, l.endIndex, u),
          p = c.at(-1),
          f = kn(e, "redirected_statement", d.startIndex, p.endIndex, [d, ...c]);
        ((n.length = 0), n.push(f), (t = f));
        continue;
      }
      n.push(i, a);
    } else {
      Iu(e.L, o);
      break;
    }
  }
  if (n.length === 1) return n[0];
  let r = n.at(-1);
  return kn(e, "pipeline", n[0].startIndex, r.endIndex, n);
}
function parseCommand(e) {
  ra(e.L);
  let t = Qf(e.L),
    n = nextToken(e.L, "cmd");
  if (n.type === "EOF") return (Iu(e.L, t), null);
  if (n.type === "OP" && n.value === "!") {
    let r = Wu(e, "!", n),
      o = parseCommand(e);
    if (!o) return kn(e, "negated_command", r.startIndex, r.endIndex, [r]);
    if (o.type === "redirected_statement" && o.children.length >= 2) {
      let s = o.children[0],
        i = o.children.slice(1),
        a = kn(e, "negated_command", r.startIndex, s.endIndex, [r, s]),
        l = i.at(-1);
      return kn(e, "redirected_statement", a.startIndex, l.endIndex, [a, ...i]);
    }
    return kn(e, "negated_command", r.startIndex, o.endIndex, [r, o]);
  }
  if (n.type === "OP" && n.value === "(") {
    let r = Wu(e, "(", n),
      o = parseStatements(e, ")"),
      s = nextToken(e.L, "cmd"),
      i =
        s.type === "OP" && s.value === ")" ? Wu(e, ")", s) : kn(e, ")", r.endIndex, r.endIndex, []),
      a = kn(e, "subshell", r.startIndex, i.endIndex, [r, ...o, i]);
    return Tue(e, a);
  }
  if (n.type === "OP" && n.value === "((") {
    let r = Wu(e, "((", n),
      o = b2t(e, "))", "var"),
      s = nextToken(e.L, "cmd"),
      i = s.value === "))" ? Wu(e, "))", s) : kn(e, "))", r.endIndex, r.endIndex, []);
    return kn(e, "compound_statement", r.startIndex, i.endIndex, [r, ...o, i]);
  }
  if (n.type === "OP" && n.value === "{") {
    let r = Wu(e, "{", n),
      o = parseStatements(e, "}"),
      s = nextToken(e.L, "cmd"),
      i =
        s.type === "OP" && s.value === "}" ? Wu(e, "}", s) : kn(e, "}", r.endIndex, r.endIndex, []),
      a = kn(e, "compound_statement", r.startIndex, i.endIndex, [r, ...o, i]);
    return Tue(e, a);
  }
  if (n.type === "OP" && (n.value === "[" || n.value === "[[")) {
    let r = Wu(e, n.value, n),
      o = n.value === "[" ? "]" : "]]",
      s = Qf(e.L),
      i = Vna(e, o);
    if ((ra(e.L), n.value === "[" && Zt(e.L) !== "]")) {
      Iu(e.L, s);
      let d = e.stopToken;
      e.stopToken = "]";
      let p = parseCommand(e);
      if (((e.stopToken = d), p && p.type === "redirected_statement")) i = p;
      else (Iu(e.L, s), (i = Vna(e, o)));
      ra(e.L);
    }
    let a = Qf(e.L),
      l = nextToken(e.L, "arg"),
      c;
    if (l.value === o && Lro(Zt(e.L))) c = Wu(e, o, l);
    else (Iu(e.L, a), (c = kn(e, o, r.endIndex, r.endIndex, [])));
    let u = i ? [r, i, c] : [r, c];
    return Tue(e, kn(e, "test_command", r.startIndex, c.endIndex, u));
  }
  if (n.type === "WORD") {
    if (n.value === "if") return Tue(e, parseIf(e, n), true);
    if (n.value === "while" || n.value === "until") return Tue(e, parseWhile(e, n), true);
    if (n.value === "for") return Tue(e, parseFor(e, n), true);
    if (n.value === "select") return Tue(e, parseFor(e, n), true);
    if (n.value === "case") return Tue(e, parseCase(e, n), true);
    if (n.value === "function") return parseFunction(e, n);
    if (Rnp.has(n.value)) return Tue(e, parseDeclaration(e, n));
    if (n.value === "unset" || n.value === "unsetenv") return Tue(e, irp(e, n));
  }
  return (Iu(e.L, t), parseSimpleCommand(e));
}
function parseSimpleCommand(e) {
  let t = e.L.b,
    n = [],
    r = [];
  while (true) {
    ra(e.L);
    let y = tryParseAssignment(e);
    if (y) {
      n.push(y);
      continue;
    }
    let b = tryParseRedirect(e);
    if (b) {
      r.push(b);
      continue;
    }
    break;
  }
  ra(e.L);
  let o = Qf(e.L),
    s = nextToken(e.L, "cmd");
  if (
    s.type === "EOF" ||
    s.type === "NEWLINE" ||
    s.type === "COMMENT" ||
    s.type === "BACKTICK" ||
    (s.type === "OP" && s.value !== "{" && s.value !== "[" && s.value !== "[[") ||
    (s.type === "WORD" && Oro.has(s.value) && s.value !== "in")
  ) {
    if ((Iu(e.L, o), n.length === 1 && r.length === 0)) return n[0];
    if (r.length > 0 && n.length === 0) {
      let y = r.at(-1);
      return kn(e, "redirected_statement", r[0].startIndex, y.endIndex, r);
    }
    if (n.length > 1 && r.length === 0) {
      let y = n.at(-1);
      return kn(e, "variable_assignments", n[0].startIndex, y.endIndex, n);
    }
    if (n.length > 0 || r.length > 0) {
      let y = [...n, ...r],
        b = y.at(-1);
      return kn(e, "command", t, b.endIndex, y);
    }
    return null;
  }
  Iu(e.L, o);
  let i = Qf(e.L),
    a = parseWord(e, "cmd");
  if (a && a.type === "word") {
    if ((ra(e.L), Zt(e.L) === "(" && Zt(e.L, 1) === ")")) {
      let y = nextToken(e.L, "cmd"),
        b = nextToken(e.L, "cmd"),
        _ = Wu(e, "(", y),
        S = Wu(e, ")", b);
      (ra(e.L), zbe(e));
      let A = parseCommand(e);
      if (A) {
        let v = [A];
        if (
          A.type === "redirected_statement" &&
          A.children.length >= 2 &&
          A.children[0].type === "compound_statement"
        )
          v = A.children;
        let C = v.at(-1);
        return kn(e, "function_definition", a.startIndex, C.endIndex, [a, _, S, ...v]);
      }
    }
  }
  Iu(e.L, i);
  let l = parseWord(e, "cmd");
  if (!l) {
    if (n.length === 1) return n[0];
    return null;
  }
  let c = kn(e, "command_name", l.startIndex, l.endIndex, [l]),
    u = [],
    d = [],
    p = null;
  while (true) {
    ra(e.L);
    let y = tryParseRedirect(e, true);
    if (y) {
      if (y.type === "heredoc_redirect") p = y;
      else if (y.type === "herestring_redirect") u.push(y);
      else d.push(y);
      continue;
    }
    if (d.length > 0) break;
    if (e.stopToken === "]" && Zt(e.L) === "]") break;
    let b = Qf(e.L),
      _ = nextToken(e.L, "arg");
    if (
      _.type === "EOF" ||
      _.type === "NEWLINE" ||
      _.type === "COMMENT" ||
      (_.type === "OP" &&
        (_.value === "|" ||
          _.value === "|&" ||
          _.value === "&&" ||
          _.value === "||" ||
          _.value === ";" ||
          _.value === ";;" ||
          _.value === ";&" ||
          _.value === ";;&" ||
          _.value === "&" ||
          _.value === ")" ||
          _.value === "}" ||
          _.value === "))"))
    ) {
      Iu(e.L, b);
      break;
    }
    Iu(e.L, b);
    let S = parseWord(e, "arg");
    if (!S) {
      if (Zt(e.L) === "(") {
        let A = nextToken(e.L, "cmd"),
          v = Wu(e, "(", A),
          C = parseStatements(e, ")"),
          x = Qf(e.L),
          I = nextToken(e.L, "cmd"),
          k;
        if (I.type === "OP" && I.value === ")") k = Wu(e, ")", I);
        else (Iu(e.L, x), (k = kn(e, ")", v.endIndex, v.endIndex, [])));
        u.push(kn(e, "subshell", v.startIndex, k.endIndex, [v, ...C, k]));
        continue;
      }
      break;
    }
    if (S.type === "word" && S.text === "=") {
      u.push(kn(e, "ERROR", S.startIndex, S.endIndex, [S]));
      continue;
    }
    if (
      (S.type === "word" || S.type === "concatenation") &&
      Zt(e.L) === "(" &&
      e.L.b === S.endIndex
    ) {
      u.push(kn(e, "ERROR", S.startIndex, S.endIndex, [S]));
      continue;
    }
    u.push(S);
  }
  let f = [...n, ...r, c, ...u],
    m = f.length > 0 ? f.at(-1).endIndex : c.endIndex,
    g = f[0].startIndex,
    h = kn(e, "command", g, m, f);
  if (p) {
    Dro(e);
    let y = e.L.heredocs.shift();
    if (y && p.children.length >= 2) {
      let S = kn(
          e,
          "heredoc_body",
          y.bodyStart,
          y.bodyEnd,
          y.quoted ? [] : parseHeredocBodyContent(e, y.bodyStart, y.bodyEnd),
        ),
        A = kn(e, "heredoc_end", y.endStart, y.endEnd, []);
      (p.children.push(S, A), (p.endIndex = y.endEnd), (p.text = CRe(e, p.startIndex, y.endEnd)));
    }
    let b = [...r, p, ...d],
      _ = r.length > 0 ? Math.min(h.startIndex, r[0].startIndex) : h.startIndex;
    return kn(e, "redirected_statement", _, p.endIndex, [h, ...b]);
  }
  if (d.length > 0) {
    let y = d.at(-1);
    return kn(e, "redirected_statement", h.startIndex, y.endIndex, [h, ...d]);
  }
  return h;
}
function Tue(e, t, n = false) {
  let r = [];
  while (true) {
    ra(e.L);
    let s = Qf(e.L),
      i = tryParseRedirect(e);
    if (!i) break;
    if (i.type === "herestring_redirect" && !n) {
      Iu(e.L, s);
      break;
    }
    r.push(i);
  }
  if (r.length === 0) return t;
  let o = r.at(-1);
  return kn(e, "redirected_statement", t.startIndex, o.endIndex, [t, ...r]);
}
function tryParseAssignment(e) {
  let t = Qf(e.L);
  ra(e.L);
  let n = e.L.b;
  if (!XU(Zt(e.L))) return (Iu(e.L, t), null);
  while (nre(Zt(e.L))) St(e.L);
  let r = e.L.b,
    o = r;
  if (Zt(e.L) === "[") {
    St(e.L);
    let h = 1;
    while (e.L.i < e.L.len && h > 0) {
      let y = Zt(e.L);
      if (y === "[") h++;
      else if (y === "]") h--;
      St(e.L);
    }
    o = e.L.b;
  }
  let s = Zt(e.L),
    i = Zt(e.L, 1),
    a;
  if (s === "=" && i !== "=") a = "=";
  else if (s === "+" && i === "=") a = "+=";
  else return (Iu(e.L, t), null);
  let l = kn(e, "variable_name", n, r, []),
    c = l;
  if (o > r) {
    let h = kn(e, "[", r, r + 1, []),
      y = parseSubscriptIndex(e, r + 1, o - 1),
      b = kn(e, "]", o - 1, o, []);
    c = kn(e, "subscript", n, o, [l, h, y, b]);
  }
  let u = e.L.b;
  if ((St(e.L), a === "+=")) St(e.L);
  let d = e.L.b,
    p = kn(e, a, u, d, []),
    f = null;
  if (Zt(e.L) === "(") {
    let h = nextToken(e.L, "cmd"),
      y = Wu(e, "(", h),
      b = [y];
    while (true) {
      if ((ra(e.L), Zt(e.L) === ")")) break;
      let A = parseWord(e, "arg");
      if (!A) break;
      b.push(A);
    }
    let _ = nextToken(e.L, "cmd"),
      S = _.value === ")" ? Wu(e, ")", _) : kn(e, ")", y.endIndex, y.endIndex, []);
    (b.push(S), (f = kn(e, "array", y.startIndex, S.endIndex, b)));
  } else {
    let h = Zt(e.L);
    if (
      h &&
      h !== " " &&
      h !== "\t" &&
      h !==
        `
` &&
      h !== ";" &&
      h !== "&" &&
      h !== "|" &&
      h !== ")" &&
      h !== "}"
    )
      f = parseWord(e, "arg");
  }
  let m = f ? [c, p, f] : [c, p],
    g = f ? f.endIndex : d;
  return kn(e, "variable_assignment", n, g, m);
}
function Gnp(e) {
  ra(e.L);
  let t = Zt(e.L);
  if ((t === "@" || t === "*") && Zt(e.L, 1) === "]") {
    let n = e.L.b;
    return (St(e.L), kn(e, "word", n, e.L.b, []));
  }
  if (t === "(" && Zt(e.L, 1) === "(") {
    let n = e.L.b;
    (St(e.L), St(e.L));
    let r = kn(e, "((", n, e.L.b, []),
      o = fOn(e, "))", "var");
    ra(e.L);
    let s;
    if (Zt(e.L) === ")" && Zt(e.L, 1) === ")") {
      let a = e.L.b;
      (St(e.L), St(e.L), (s = kn(e, "))", a, e.L.b, [])));
    } else s = kn(e, "))", e.L.b, e.L.b, []);
    let i = o ? [r, o, s] : [r, s];
    return kn(e, "compound_statement", r.startIndex, s.endIndex, i);
  }
  return fOn(e, "]", "word");
}
function parseSubscriptIndex(e, startB, endB) {
  let r = CRe(e, startB, endB);
  if (/^\d+$/.test(r)) return kn(e, "number", startB, endB, []);
  if (/^\$([a-zA-Z_]\w*)$/.exec(r)) {
    let s = kn(e, "$", startB, startB + 1, []),
      i = kn(e, "variable_name", startB + 1, endB, []);
    return kn(e, "simple_expansion", startB, endB, [s, i]);
  }
  if (r.length === 2 && r[0] === "$" && dct.has(r[1])) {
    let s = kn(e, "$", startB, startB + 1, []),
      i = kn(e, "special_variable_name", startB + 1, endB, []);
    return kn(e, "simple_expansion", startB, endB, [s, i]);
  }
  return kn(e, "word", startB, endB, []);
}
function Wna(e) {
  let t = Zt(e.L);
  if (
    t === "" ||
    t ===
      `
`
  )
    return false;
  if (t === "|" || t === "&" || t === ";" || t === "(" || t === ")") return false;
  if (t === "<" || t === ">") return Zt(e.L, 1) === "(";
  if (iC(t)) {
    let n = e.L.i;
    while (n < e.L.len && iC(e.L.src[n])) n++;
    let r = n < e.L.len ? e.L.src[n] : "";
    if (r === ">" || r === "<") return false;
  }
  if (t === "}") return false;
  if (e.stopToken === "]" && t === "]") return false;
  return true;
}
function tryParseRedirect(e, t = false) {
  let n = Qf(e.L);
  ra(e.L);
  let r = null;
  if (iC(Zt(e.L))) {
    let i = e.L.b,
      a = e.L.i;
    while (a < e.L.len && iC(e.L.src[a])) a++;
    let l = a < e.L.len ? e.L.src[a] : "";
    if (l === ">" || l === "<") {
      while (e.L.i < a) St(e.L);
      r = kn(e, "file_descriptor", i, e.L.b, []);
    }
  }
  if (r === null && Zt(e.L) === "{") {
    let i = e.L.i + 1;
    if (i < e.L.len && /[A-Za-z_]/.test(e.L.src[i])) {
      while (i < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[i])) i++;
      if (e.L.src[i] === "[") {
        let a = 0,
          l = false,
          c = false;
        while (i < e.L.len) {
          let u = e.L.src[i];
          if (l) {
            if (u === "'") l = false;
          } else if (c) {
            if (u === "\\" && i + 1 < e.L.len) i++;
            else if (u === '"') c = false;
          } else if (u === "\\" && i + 1 < e.L.len) i++;
          else if (u === "'") l = true;
          else if (u === '"') c = true;
          else if (u === "[") a++;
          else if (u === "]") {
            if ((a--, a === 0)) {
              i++;
              break;
            }
          } else if (
            u === "\\" &&
            e.L.src[i + 1] ===
              `
`
          ) {
            i += 2;
            continue;
          } else if (
            u ===
            `
`
          )
            break;
          i++;
        }
      }
      if (e.L.src[i] === "}") {
        let a = i + 1 < e.L.len ? e.L.src[i + 1] : "";
        if (a === ">" || a === "<") {
          let l = e.L.b;
          while (e.L.i <= i) St(e.L);
          r = kn(e, "variable_name", l, e.L.b, []);
        }
      }
    }
  }
  let o = nextToken(e.L, "arg");
  if (o.type !== "OP") return (Iu(e.L, n), null);
  let s = o.value;
  if (s === "<<<") {
    let i = Wu(e, "<<<", o);
    ra(e.L);
    let a = parseWord(e, "arg"),
      l = a ? a.endIndex : i.endIndex,
      c = a ? [i, a] : [i];
    return kn(e, "herestring_redirect", r ? r.startIndex : i.startIndex, l, r ? [r, ...c] : c);
  }
  if (s === "<<" || s === "<<-") {
    let i = Wu(e, s, o);
    Onp(e.L);
    let a = e.L.b,
      l = false,
      c = "",
      u = Zt(e.L);
    if (u === "'" || u === '"') {
      ((l = true), St(e.L));
      while (e.L.i < e.L.len && Zt(e.L) !== u) ((c += Zt(e.L)), St(e.L));
      if (e.L.i < e.L.len) St(e.L);
    } else if (u === "\\") {
      if (
        ((l = true),
        St(e.L),
        e.L.i < e.L.len &&
          Zt(e.L) !==
            `
`)
      )
        ((c += Zt(e.L)), St(e.L));
      while (e.L.i < e.L.len && nre(Zt(e.L))) ((c += Zt(e.L)), St(e.L));
    } else while (e.L.i < e.L.len && $np(Zt(e.L))) ((c += Zt(e.L)), St(e.L));
    let d = e.L.b;
    if (u === '"' && /[`$\\\n]/.test(c))
      throw ((e.aborted = true), Error("heredoc delimiter contains substitution/escape chars"));
    if (e.L.i < e.L.len) {
      let g = Zt(e.L);
      if (
        g !== " " &&
        g !== "\t" &&
        g !==
          `
` &&
        g !== "<" &&
        g !== ">" &&
        g !== "|" &&
        g !== "&" &&
        g !== ";" &&
        g !== "(" &&
        g !== ")"
      )
        throw ((e.aborted = true), Error("heredoc delimiter word continues past scanned segment"));
    }
    if (/[\uD800-\uDFFF]/.test(c))
      throw ((e.aborted = true), Error("heredoc delimiter contains astral/surrogate code unit"));
    let p = kn(e, "heredoc_start", a, d, []);
    e.L.heredocs.push({
      delim: c,
      stripTabs: s === "<<-",
      quoted: l,
      bodyStart: 0,
      bodyEnd: 0,
      endStart: 0,
      endEnd: 0,
    });
    let f = r ? [r, i, p] : [i, p],
      m = r ? r.startIndex : i.startIndex;
    while (true) {
      ra(e.L);
      let g = Zt(e.L);
      if (
        g ===
          `
` ||
        g === "" ||
        e.L.i >= e.L.len
      )
        break;
      if (g === ">" || g === "<" || iC(g)) {
        let b = Qf(e.L),
          _ = tryParseRedirect(e);
        if (_ && _.type === "file_redirect") {
          f.push(_);
          continue;
        }
        Iu(e.L, b);
      }
      if (g === "|" && Zt(e.L, 1) !== "|") {
        let b = e.L.b;
        (St(e.L), ra(e.L));
        let _ = [];
        while (true) {
          let S = parseCommand(e);
          if (!S) break;
          if ((_.push(S), ra(e.L), Zt(e.L) === "|" && Zt(e.L, 1) !== "|")) {
            let A = e.L.b;
            (St(e.L), _.push(kn(e, "|", A, e.L.b, [])), ra(e.L));
            continue;
          }
          break;
        }
        if (_.length > 0) {
          let S = _.at(-1);
          f.push(kn(e, "pipeline", _[0].startIndex, S.endIndex, _));
        } else f.push(kn(e, "ERROR", b, e.L.b, []));
        continue;
      }
      if ((g === "&" && Zt(e.L, 1) === "&") || (g === "|" && Zt(e.L, 1) === "|")) {
        let b = e.L.b;
        (St(e.L), St(e.L), ra(e.L));
        let _ = parseCommand(e);
        if (_) f.push(_);
        else f.push(kn(e, "ERROR", b, e.L.b, []));
        continue;
      }
      if (g === "&" || g === ";" || g === "(" || g === ")") {
        let b = e.L.b;
        while (
          e.L.i < e.L.len &&
          Zt(e.L) !==
            `
`
        )
          St(e.L);
        f.push(kn(e, "ERROR", b, e.L.b, []));
        break;
      }
      let h = parseWord(e, "arg");
      if (h) {
        f.push(h);
        continue;
      }
      let y = e.L.b;
      while (
        e.L.i < e.L.len &&
        Zt(e.L) !==
          `
`
      )
        St(e.L);
      if (e.L.b > y) f.push(kn(e, "ERROR", y, e.L.b, []));
      break;
    }
    return kn(e, "heredoc_redirect", m, e.L.b, f);
  }
  if (s === "<&-" || s === ">&-") {
    let i = Wu(e, s, o),
      a = [];
    if (r) a.push(r);
    (a.push(i), ra(e.L));
    let l = Qf(e.L),
      c = Wna(e) ? parseWord(e, "arg") : null;
    if (c) a.push(c);
    else Iu(e.L, l);
    let u = r ? r.startIndex : i.startIndex,
      d = c ? c.endIndex : i.endIndex;
    return kn(e, "file_redirect", u, d, a);
  }
  if (
    s === ">" ||
    s === ">>" ||
    s === ">&" ||
    s === ">|" ||
    s === "&>" ||
    s === "&>>" ||
    s === "<" ||
    s === "<&"
  ) {
    let i = Wu(e, s, o),
      a = [];
    if (r) a.push(r);
    a.push(i);
    let l = i.endIndex,
      c = 0;
    while (true) {
      if ((ra(e.L), !Wna(e))) break;
      if (!t && c >= 1) break;
      let d = Zt(e.L),
        p = Zt(e.L, 1),
        f = null;
      if ((d === "<" || d === ">") && p === "(") f = parseProcessSub(e);
      else f = parseWord(e, "arg");
      if (!f) break;
      (a.push(f), (l = f.endIndex), c++);
    }
    let u = r ? r.startIndex : i.startIndex;
    return kn(e, "file_redirect", u, l, a);
  }
  return (Iu(e.L, n), null);
}
function parseProcessSub(e) {
  let t = Zt(e.L);
  if ((t !== "<" && t !== ">") || Zt(e.L, 1) !== "(") return null;
  let n = e.L.b;
  (St(e.L), St(e.L));
  let r = kn(e, t + "(", n, e.L.b, []),
    o = parseStatements(e, ")");
  ra(e.L);
  let s;
  if (Zt(e.L) === ")") {
    let i = e.L.b;
    (St(e.L), (s = kn(e, ")", i, e.L.b, [])));
  } else s = kn(e, ")", e.L.b, e.L.b, []);
  return kn(e, "process_substitution", n, s.endIndex, [r, ...o, s]);
}
function Dro(e) {
  while (
    e.L.i < e.L.len &&
    e.L.src[e.L.i] !==
      `
`
  )
    St(e.L);
  if (e.L.i < e.L.len) St(e.L);
  for (let t of e.L.heredocs) {
    t.bodyStart = e.L.b;
    let n = t.delim.length;
    if (t.stripTabs && t.delim.startsWith("\t"))
      throw ((e.aborted = true), Error("ambiguous heredoc terminator (<<- tab-prefixed delim)"));
    while (e.L.i < e.L.len) {
      let r = e.L.i,
        o = e.L.b,
        s = r;
      if (t.stripTabs) while (s < e.L.len && e.L.src[s] === "\t") s++;
      if (e.L.src.startsWith(t.delim, s)) {
        let i = s + n,
          a = i < e.L.len ? e.L.src[i] : "";
        if (
          a === "" ||
          a ===
            `
` ||
          a === "\r"
        ) {
          t.bodyEnd = o;
          while (e.L.i < s) St(e.L);
          t.endStart = e.L.b;
          for (let c = 0; c < n; c++) St(e.L);
          if (
            ((t.endEnd = e.L.b),
            e.L.i < e.L.len &&
              e.L.src[e.L.i] ===
                `
`)
          )
            St(e.L);
          return;
        }
        let l = i;
        while (l < e.L.len) {
          let c = e.L.src[l];
          if (
            c ===
            `
`
          )
            break;
          if (c === ")" || c === "`" || c === "}")
            throw ((e.aborted = true), Error("ambiguous heredoc terminator (shell_eof_token)"));
          l++;
        }
      }
      while (
        e.L.i < e.L.len &&
        e.L.src[e.L.i] !==
          `
`
      )
        St(e.L);
      if (e.L.i < e.L.len) St(e.L);
    }
    ((t.bodyEnd = e.L.b), (t.endStart = e.L.b), (t.endEnd = e.L.b));
  }
}
function parseHeredocBodyContent(e, start, end) {
  let r = Qf(e.L);
  Vnp(e, start);
  let o = [],
    s = e.L.b,
    i = false;
  while (e.L.b < end) {
    let a = Zt(e.L);
    if (a === "\\") {
      let l = Zt(e.L, 1);
      if (l === "$" || l === "`" || l === "\\") {
        (St(e.L), St(e.L));
        continue;
      }
      St(e.L);
      continue;
    }
    if (a === "$" || a === "`") {
      if (a === "$" && Zt(e.L, 1) === "'") {
        St(e.L);
        continue;
      }
      let l = e.L.b,
        c = parseDollarLike(e);
      if (
        c &&
        (c.type === "simple_expansion" ||
          c.type === "expansion" ||
          c.type === "command_substitution" ||
          c.type === "arithmetic_expansion")
      ) {
        if (i && l > s) o.push(kn(e, "heredoc_content", s, l, []));
        (o.push(c), (s = e.L.b), (i = true));
      }
      continue;
    }
    St(e.L);
  }
  if (i) o.push(kn(e, "heredoc_content", s, end, []));
  return (Iu(e.L, r), o);
}
function Vnp(e, t) {
  if (!e.L.byteTable) Jna(e.L, 0);
  let n = e.L.byteTable,
    r = 0,
    o = e.src.length;
  while (r < o) {
    let s = (r + o) >>> 1;
    if (n[s] < t) r = s + 1;
    else o = s;
  }
  ((e.L.i = r), (e.L.b = t));
}
function parseWord(e, _ctx) {
  ra(e.L);
  let n = [];
  while (e.L.i < e.L.len) {
    let s = Zt(e.L);
    if (
      s === " " ||
      s === "\t" ||
      s ===
        `
` ||
      s === "\r" ||
      s === "" ||
      s === "|" ||
      s === "&" ||
      s === ";" ||
      s === "(" ||
      s === ")"
    )
      break;
    if (s === "<" || s === ">") {
      if (Zt(e.L, 1) === "(") {
        let a = parseProcessSub(e);
        if (a) n.push(a);
        continue;
      }
      break;
    }
    if (s === '"') {
      n.push(parseDoubleQuoted(e));
      continue;
    }
    if (s === "'") {
      let a = nextToken(e.L, "arg");
      n.push(Wu(e, "raw_string", a));
      continue;
    }
    if (s === "$") {
      let a = Zt(e.L, 1);
      if (a === "'") {
        let c = nextToken(e.L, "arg");
        n.push(Wu(e, "ansi_c_string", c));
        continue;
      }
      if (a === '"') {
        let c = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1,
        };
        (St(e.L), n.push(Wu(e, "$", c)), n.push(parseDoubleQuoted(e)));
        continue;
      }
      if (a === "`") {
        let c = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1,
        };
        (St(e.L), n.push(Wu(e, "$", c)));
        continue;
      }
      let l = parseDollarLike(e);
      if (l) n.push(l);
      continue;
    }
    if (s === "`") {
      if (e.inBacktick > 0) break;
      let a = parseBacktick(e);
      if (a) n.push(a);
      continue;
    }
    if (s === "{") {
      let a = tryParseBraceExpr(e);
      if (a) {
        n.push(a);
        continue;
      }
      let l = Zt(e.L, 1);
      if (
        l === ";" ||
        l === "|" ||
        l === "&" ||
        l ===
          `
` ||
        l === "" ||
        l === ")" ||
        l === " " ||
        l === "\t"
      ) {
        let u = e.L.b;
        (St(e.L), n.push(kn(e, "word", u, e.L.b, [])));
        continue;
      }
      let c = Ynp(e);
      if (c) {
        for (let u of c) n.push(u);
        continue;
      }
    }
    if (s === "}") {
      let a = e.L.b;
      (St(e.L), n.push(kn(e, "word", a, e.L.b, [])));
      continue;
    }
    if (s === "[" || s === "]") {
      let a = e.L.b;
      (St(e.L), n.push(kn(e, "word", a, e.L.b, [])));
      continue;
    }
    let i = znp(e);
    if (!i) break;
    if (
      i.type === "word" &&
      /^-?(0x)?[0-9]+#$/.test(i.text) &&
      Zt(e.L) === "$" &&
      (Zt(e.L, 1) === "{" || Zt(e.L, 1) === "(")
    ) {
      let a = parseDollarLike(e);
      if (a) {
        n.push(kn(e, "number", i.startIndex, a.endIndex, [a]));
        continue;
      }
    }
    n.push(i);
  }
  if (n.length === 0) return null;
  if (n.length === 1) return n[0];
  let r = n[0],
    o = n.at(-1);
  return kn(e, "concatenation", r.startIndex, o.endIndex, n);
}
function znp(e) {
  let t = e.L.b,
    n = e.L.i;
  while (e.L.i < e.L.len) {
    let s = Zt(e.L);
    if (s === "\\") {
      if (e.L.i + 1 >= e.L.len) break;
      if (
        e.L.src[e.L.i + 1] ===
        `
`
      )
        break;
      (St(e.L), St(e.L));
      continue;
    }
    if (
      s === " " ||
      s === "\t" ||
      s ===
        `
` ||
      s === "\r" ||
      s === "" ||
      s === "|" ||
      s === "&" ||
      s === ";" ||
      s === "(" ||
      s === ")" ||
      s === "<" ||
      s === ">" ||
      s === '"' ||
      s === "'" ||
      s === "$" ||
      s === "`" ||
      s === "{" ||
      s === "}" ||
      s === "[" ||
      s === "]"
    )
      break;
    St(e.L);
  }
  if (e.L.b === t) return null;
  let r = e.src.slice(n, e.L.i),
    o = /^-?\d+$/.test(r) ? "number" : "word";
  return kn(e, o, t, e.L.b, []);
}
function tryParseBraceExpr(e) {
  let t = Qf(e.L);
  if (Zt(e.L) !== "{") return null;
  let n = e.L.b;
  St(e.L);
  let r = e.L.b,
    o = e.L.b;
  while (iC(Zt(e.L)) || XU(Zt(e.L))) St(e.L);
  let s = e.L.b;
  if (s === o || Zt(e.L) !== "." || Zt(e.L, 1) !== ".") return (Iu(e.L, t), null);
  let i = e.L.b;
  (St(e.L), St(e.L));
  let a = e.L.b,
    l = e.L.b;
  while (iC(Zt(e.L)) || XU(Zt(e.L))) St(e.L);
  let c = e.L.b;
  if (c === l || Zt(e.L) !== "}") return (Iu(e.L, t), null);
  let u = e.L.b;
  St(e.L);
  let d = e.L.b,
    p = CRe(e, o, s),
    f = CRe(e, l, c),
    m = /^\d+$/.test(p),
    g = /^\d+$/.test(f);
  if (m !== g) return (Iu(e.L, t), null);
  if (!m && (p.length !== 1 || f.length !== 1)) return (Iu(e.L, t), null);
  let h = m ? "number" : "word",
    y = g ? "number" : "word";
  return kn(e, "brace_expression", n, d, [
    kn(e, "{", n, r, []),
    kn(e, h, o, s, []),
    kn(e, "..", i, a, []),
    kn(e, y, l, c, []),
    kn(e, "}", u, d, []),
  ]);
}
function Ynp(e) {
  if (Zt(e.L) !== "{") return null;
  let t = e.L.b;
  St(e.L);
  let n = e.L.b,
    r = [kn(e, "word", t, n, [])];
  while (e.L.i < e.L.len) {
    let o = Zt(e.L);
    if (
      o === "}" ||
      o ===
        `
` ||
      o === ";" ||
      o === "|" ||
      o === "&" ||
      o === " " ||
      o === "\t" ||
      o === "<" ||
      o === ">" ||
      o === "(" ||
      o === ")"
    )
      break;
    if (o === "[" || o === "]") {
      let a = e.L.b;
      (St(e.L), r.push(kn(e, "word", a, e.L.b, [])));
      continue;
    }
    let s = e.L.b;
    while (e.L.i < e.L.len) {
      let a = Zt(e.L);
      if (a === "\\" && e.L.i + 1 < e.L.len) {
        (St(e.L), St(e.L));
        continue;
      }
      if (
        a === "}" ||
        a ===
          `
` ||
        a === ";" ||
        a === "|" ||
        a === "&" ||
        a === " " ||
        a === "\t" ||
        a === "<" ||
        a === ">" ||
        a === "(" ||
        a === ")" ||
        a === "[" ||
        a === "]"
      )
        break;
      St(e.L);
    }
    let i = e.L.b;
    if (i > s) {
      let a = CRe(e, s, i),
        l = /^-?\d+$/.test(a) ? "number" : "word";
      r.push(kn(e, l, s, i, []));
    } else break;
  }
  if (Zt(e.L) === "}") {
    let o = e.L.b;
    (St(e.L), r.push(kn(e, "word", o, e.L.b, [])));
  }
  return r;
}
function parseDoubleQuoted(e) {
  let t = e.L.b;
  (St(e.L), e.inDquote++);
  let n = e.L.b,
    o = [kn(e, '"', t, n, [])],
    s = e.L.b,
    i = e.L.i,
    a = () => {
      if (e.L.b > s) {
        let c = e.src.slice(i, e.L.i);
        if (!/^[ \t]+$/.test(c)) o.push(kn(e, "string_content", s, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let c = Zt(e.L);
    if (c === '"') break;
    if (c === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (
      c ===
      `
`
    ) {
      (a(), St(e.L), (s = e.L.b), (i = e.L.i));
      continue;
    }
    if (c === "$") {
      let u = Zt(e.L, 1);
      if (u === "(" || u === "{" || XU(u) || dct.has(u) || iC(u)) {
        a();
        let d = parseDollarLike(e);
        if (d) o.push(d);
        ((s = e.L.b), (i = e.L.i));
        continue;
      }
      if (u !== '"' && u !== "") {
        a();
        let d = e.L.b;
        (St(e.L), o.push(kn(e, "$", d, e.L.b, [])), (s = e.L.b), (i = e.L.i));
        continue;
      }
    }
    if (c === "`") {
      a();
      let u = parseBacktick(e);
      if (u) o.push(u);
      ((s = e.L.b), (i = e.L.i));
      continue;
    }
    St(e.L);
  }
  a();
  let l;
  if (Zt(e.L) === '"') {
    let c = e.L.b;
    (St(e.L), (l = kn(e, '"', c, e.L.b, [])));
  } else l = kn(e, '"', e.L.b, e.L.b, []);
  return (o.push(l), e.inDquote--, kn(e, "string", t, l.endIndex, o));
}
function parseDollarLike(e) {
  let t = Zt(e.L, 1),
    n = e.L.b;
  if (t === "(" && Zt(e.L, 2) === "(") {
    (St(e.L), St(e.L), St(e.L));
    let i = kn(e, "$((", n, e.L.b, []),
      a = Qf(e.L),
      l = b2t(e, "))", "var");
    ra(e.L);
    let c,
      u = false;
    if (Zt(e.L) !== ")" || Zt(e.L, 1) !== ")") (Xna(e, a, "))"), (u = true));
    if (Zt(e.L) === ")" && Zt(e.L, 1) === ")") {
      let d = e.L.b;
      (St(e.L), St(e.L), (c = kn(e, "))", d, e.L.b, [])));
    } else c = kn(e, "))", e.L.b, e.L.b, []);
    return kn(e, u ? "ERROR" : "arithmetic_expansion", n, c.endIndex, [i, ...l, c]);
  }
  if (t === "[") {
    (St(e.L), St(e.L));
    let i = kn(e, "$[", n, e.L.b, []),
      a = Qf(e.L),
      l = b2t(e, "]", "var");
    ra(e.L);
    let c,
      u = false;
    if (Zt(e.L) !== "]") (Xna(e, a, "]"), (u = true));
    if (Zt(e.L) === "]") {
      let d = e.L.b;
      (St(e.L), (c = kn(e, "]", d, e.L.b, [])));
    } else c = kn(e, "]", e.L.b, e.L.b, []);
    return kn(e, u ? "ERROR" : "arithmetic_expansion", n, c.endIndex, [i, ...l, c]);
  }
  if (t === "(") {
    (St(e.L), St(e.L));
    let i = kn(e, "$(", n, e.L.b, []),
      a = e.inDquote;
    e.inDquote = 0;
    let l = parseStatements(e, ")");
    ((e.inDquote = a), ra(e.L));
    let c,
      u = false;
    if (Zt(e.L) === ")") {
      let d = e.L.b;
      (St(e.L), (c = kn(e, ")", d, e.L.b, [])));
    } else {
      u = true;
      let d = e.L.b,
        p = 1;
      while (e.L.i < e.L.len) {
        let f = Zt(e.L);
        if (f === "\\" && e.L.i + 1 < e.L.len) {
          (St(e.L), St(e.L));
          continue;
        }
        if (f === '"' || f === "'") {
          St(e.L);
          while (e.L.i < e.L.len && Zt(e.L) !== f) {
            if (f === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "`") {
          St(e.L);
          while (e.L.i < e.L.len && Zt(e.L) !== "`") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "$") {
          (St(e.L), St(e.L));
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "'") {
          (St(e.L), St(e.L));
          while (e.L.i < e.L.len && Zt(e.L) !== "'") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "(") p++;
        else if (f === ")") {
          if ((p--, p === 0)) break;
        }
        St(e.L);
      }
      if ((l.push(kn(e, "ERROR", d, e.L.b, [])), Zt(e.L) === ")")) {
        let f = e.L.b;
        (St(e.L), (c = kn(e, ")", f, e.L.b, [])));
      } else c = kn(e, "ERROR", e.L.b, e.L.b, []);
    }
    if (
      !u &&
      l.length === 1 &&
      l[0].type === "redirected_statement" &&
      l[0].children.length === 1 &&
      l[0].children[0].type === "file_redirect"
    )
      l = l[0].children;
    return kn(e, u ? "ERROR" : "command_substitution", n, c.endIndex, [i, ...l, c]);
  }
  if (t === "{") {
    (St(e.L), St(e.L));
    let i = kn(e, "${", n, e.L.b, []),
      a = parseExpansionBody(e),
      l,
      c = false;
    while (
      Zt(e.L) ===
      `
`
    )
      St(e.L);
    if (Zt(e.L) === "}") {
      let u = e.L.b;
      (St(e.L), (l = kn(e, "}", u, e.L.b, [])));
    } else {
      c = true;
      let u = e.L.b,
        d = 1;
      while (e.L.i < e.L.len) {
        let f = Zt(e.L);
        if (f === "\\" && e.L.i + 1 < e.L.len) {
          (St(e.L), St(e.L));
          continue;
        }
        if (f === '"' || f === "'") {
          St(e.L);
          while (e.L.i < e.L.len && Zt(e.L) !== f) {
            if (f === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "(") {
          let m = 1;
          (St(e.L), St(e.L));
          while (e.L.i < e.L.len && m > 0) {
            let g = Zt(e.L);
            if (g === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            else if (g === "$" && Zt(e.L, 1) === "$") St(e.L);
            else if (g === "$" && Zt(e.L, 1) === "'") {
              (St(e.L), St(e.L));
              while (e.L.i < e.L.len && Zt(e.L) !== "'") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (g === '"' || g === "'") {
              St(e.L);
              while (e.L.i < e.L.len && Zt(e.L) !== g) {
                if (g === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (g === "`") {
              St(e.L);
              while (e.L.i < e.L.len && Zt(e.L) !== "`") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (g === "(") m++;
            else if (g === ")") m--;
            St(e.L);
          }
          continue;
        }
        if (f === "`") {
          St(e.L);
          while (e.L.i < e.L.len && Zt(e.L) !== "`") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "$") {
          (St(e.L), St(e.L));
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "'") {
          (St(e.L), St(e.L));
          while (e.L.i < e.L.len && Zt(e.L) !== "'") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (e.L.i < e.L.len) St(e.L);
          continue;
        }
        if (f === "$" && Zt(e.L, 1) === "{") (d++, St(e.L));
        else if (f === "}") {
          if ((d--, d === 0)) break;
        }
        St(e.L);
      }
      let p = kn(e, "ERROR", u, e.L.b, []);
      if (Zt(e.L) === "}") {
        let f = e.L.b;
        (St(e.L), (l = kn(e, "}", f, e.L.b, [])));
      } else l = kn(e, "ERROR", e.L.b, e.L.b, []);
      a.push(p);
    }
    if (!c && e.inDquote > 0 && CRe(e, i.endIndex, l.startIndex).includes("'")) c = true;
    return kn(e, c || e.zshBraceDiff ? "ERROR" : "expansion", n, l.endIndex, [i, ...a, l]);
  }
  St(e.L);
  let r = e.L.b,
    o = kn(e, "$", n, r, []),
    s = Zt(e.L);
  if (s === "_" && !nre(Zt(e.L, 1))) {
    let i = e.L.b;
    St(e.L);
    let a = kn(e, "special_variable_name", i, e.L.b, []);
    return kn(e, "simple_expansion", n, e.L.b, [o, a]);
  }
  if (XU(s)) {
    let i = e.L.b;
    while (nre(Zt(e.L))) St(e.L);
    let a = kn(e, "variable_name", i, e.L.b, []);
    return kn(e, "simple_expansion", n, e.L.b, [o, a]);
  }
  if (iC(s)) {
    let i = e.L.b;
    St(e.L);
    let a = kn(e, "variable_name", i, e.L.b, []);
    return kn(e, "simple_expansion", n, e.L.b, [o, a]);
  }
  if (dct.has(s)) {
    let i = e.L.b;
    St(e.L);
    let a = kn(e, "special_variable_name", i, e.L.b, []);
    return kn(e, "simple_expansion", n, e.L.b, [o, a]);
  }
  if (s === "'") {
    St(e.L);
    while (e.L.i < e.L.len && Zt(e.L) !== "'") {
      if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
      St(e.L);
    }
    if (Zt(e.L) === "'") St(e.L);
    return kn(e, "ansi_c_string", n, e.L.b, []);
  }
  return o;
}
function parseExpansionBody(e) {
  let t = [];
  ra(e.L);
  {
    let s = Zt(e.L),
      i = Zt(e.L, 1);
    if (s === "#" && i === "!" && Zt(e.L, 2) === "}") return (St(e.L), St(e.L), t);
    if (s === "!" && i === "#") {
      let a = 2;
      if (Zt(e.L, a) === "#") a++;
      if (Zt(e.L, a) === " ") a++;
      if (Zt(e.L, a) === "}") {
        while (a-- > 0) St(e.L);
        return t;
      }
    }
  }
  if (Zt(e.L) === "#") {
    let s = e.L.b;
    (St(e.L), t.push(kn(e, "#", s, e.L.b, [])));
  }
  let n = Zt(e.L);
  if ((n === "!" || n === "=" || n === "~") && (XU(Zt(e.L, 1)) || iC(Zt(e.L, 1)))) {
    let s = e.L.b;
    (St(e.L), t.push(kn(e, n, s, e.L.b, [])));
  }
  if ((ra(e.L), XU(Zt(e.L)))) {
    let s = e.L.b;
    while (nre(Zt(e.L))) St(e.L);
    t.push(kn(e, "variable_name", s, e.L.b, []));
  } else if (iC(Zt(e.L))) {
    let s = e.L.b;
    while (iC(Zt(e.L))) St(e.L);
    t.push(kn(e, "variable_name", s, e.L.b, []));
  } else if (dct.has(Zt(e.L))) {
    let s = e.L.b;
    (St(e.L), t.push(kn(e, "special_variable_name", s, e.L.b, [])));
  }
  if (Zt(e.L) === "[") {
    let s = t.at(-1),
      i = e.L.b;
    St(e.L);
    let a = kn(e, "[", i, e.L.b, []),
      l = Gnp(e);
    ra(e.L);
    let c = e.L.b;
    if (Zt(e.L) === "]") St(e.L);
    let u = kn(e, "]", c, e.L.b, []);
    if (s) {
      let d = l ? [s, a, l, u] : [s, a, u];
      t[t.length - 1] = kn(e, "subscript", s.startIndex, e.L.b, d);
    }
  }
  ra(e.L);
  let r = Zt(e.L);
  if ((r === "*" || r === "@") && Zt(e.L, 1) === "}") {
    let s = e.L.b;
    return (St(e.L), t.push(kn(e, r, s, e.L.b, [])), t);
  }
  if (r === "@" && XU(Zt(e.L, 1))) {
    let s = e.L.b;
    (St(e.L), t.push(kn(e, "@", s, e.L.b, [])));
    while (nre(Zt(e.L))) St(e.L);
    return t;
  }
  let o = Zt(e.L);
  if (o === ":") {
    let s = Zt(e.L, 1);
    if (s === "}") return (St(e.L), t);
    if (s !== "-" && s !== "=" && s !== "?" && s !== "+") {
      (St(e.L), ra(e.L));
      let i = Zt(e.L),
        a;
      if (i === "-" && iC(Zt(e.L, 1))) {
        let l = e.L.b;
        St(e.L);
        while (iC(Zt(e.L))) St(e.L);
        a = kn(e, "number", l, e.L.b, []);
      } else a = fOn(e, ":}", "var");
      if (a) t.push(a);
      if ((ra(e.L), Zt(e.L) === ":")) {
        (St(e.L), ra(e.L));
        let l = Zt(e.L),
          c;
        if (l === "-" && iC(Zt(e.L, 1))) {
          let u = e.L.b;
          St(e.L);
          while (iC(Zt(e.L))) St(e.L);
          c = kn(e, "number", u, e.L.b, []);
        } else c = fOn(e, "}", "var");
        if (c) t.push(c);
      }
      return t;
    }
  }
  if (
    o === ":" ||
    o === "#" ||
    o === "%" ||
    o === "/" ||
    o === "^" ||
    o === "," ||
    o === "-" ||
    o === "=" ||
    o === "?" ||
    o === "+"
  ) {
    let s = e.L.b,
      i = Zt(e.L, 1),
      a = o;
    if (o === ":" && (i === "-" || i === "=" || i === "?" || i === "+"))
      (St(e.L), St(e.L), (a = o + i));
    else if ((o === "#" || o === "%" || o === "/" || o === "^" || o === ",") && i === o)
      (St(e.L), St(e.L), (a = o + o));
    else St(e.L);
    t.push(kn(e, a, s, e.L.b, []));
    let l =
      a === "#" ||
      a === "##" ||
      a === "%" ||
      a === "%%" ||
      a === "/" ||
      a === "//" ||
      a === "^" ||
      a === "^^" ||
      a === "," ||
      a === ",,";
    if (a === "/" || a === "//") {
      let c = Zt(e.L);
      if (c === "#" || c === "%") {
        let u = e.L.b;
        (St(e.L), t.push(kn(e, c, u, e.L.b, [])));
      }
      if (Zt(e.L) === '"') {
        t.push(parseDoubleQuoted(e));
        let u = dOn(e, "regex", true);
        if (u) t.push(u);
      } else {
        let u = dOn(e, "regex", true);
        if (u) t.push(u);
      }
      if (Zt(e.L) === "/") {
        let u = e.L.b;
        (St(e.L), t.push(kn(e, "/", u, e.L.b, [])));
        let d = dOn(e, "replword", false);
        if (d)
          if (
            d.type === "concatenation" &&
            d.children.length === 2 &&
            d.children[0].type === "command_substitution"
          )
            (t.push(d.children[0]), t.push(d.children[1]));
          else t.push(d);
      }
    } else if (a === "#" || a === "##" || a === "%" || a === "%%") for (let c of Jnp(e)) t.push(c);
    else {
      let c = dOn(e, l ? "regex" : "word", false);
      if (c) t.push(c);
    }
  }
  return t;
}
function dOn(e, t, n) {
  let r = e.L.b;
  if (t === "word" && Zt(e.L) === "(") {
    St(e.L);
    let c = [kn(e, "(", r, e.L.b, [])];
    while (e.L.i < e.L.len) {
      ra(e.L);
      let u = Zt(e.L);
      if (
        u === ")" ||
        u === "}" ||
        u ===
          `
` ||
        u === ""
      )
        break;
      let d = e.L.b;
      while (e.L.i < e.L.len) {
        let p = Zt(e.L);
        if (
          p === ")" ||
          p === "}" ||
          p === " " ||
          p === "\t" ||
          p ===
            `
` ||
          p === ""
        )
          break;
        if (p === "\\" && e.L.i + 1 < e.L.len) {
          (St(e.L), St(e.L));
          continue;
        }
        if (p === "$" && Zt(e.L, 1) === "$") {
          (St(e.L), St(e.L));
          continue;
        }
        if (p === "$" && Zt(e.L, 1) === "'") {
          (St(e.L), St(e.L));
          while (e.L.i < e.L.len && Zt(e.L) !== "'") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (Zt(e.L) === "'") St(e.L);
          continue;
        }
        if (p === "$" && Zt(e.L, 1) === "(") e.zshBraceDiff = true;
        if (p === '"' || p === "'") {
          St(e.L);
          while (e.L.i < e.L.len && Zt(e.L) !== p) {
            if (p === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (Zt(e.L) === p) St(e.L);
          continue;
        }
        if (p === "`") {
          ((e.zshBraceDiff = true), St(e.L));
          while (e.L.i < e.L.len && Zt(e.L) !== "`") {
            if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            St(e.L);
          }
          if (Zt(e.L) === "`") St(e.L);
          continue;
        }
        if (p === "{") e.zshBraceDiff = true;
        St(e.L);
      }
      if (e.L.b > d) c.push(kn(e, "word", d, e.L.b, []));
      else break;
    }
    if (Zt(e.L) === ")") {
      let u = e.L.b;
      (St(e.L), c.push(kn(e, ")", u, e.L.b, [])));
    }
    while (
      Zt(e.L) ===
      `
`
    )
      St(e.L);
    return kn(e, "array", r, e.L.b, c);
  }
  if (t === "regex") {
    while (e.L.i < e.L.len) {
      let c = Zt(e.L);
      if (c === "{") e.zshBraceDiff = true;
      if (c === "}") break;
      if (n && c === "/") break;
      if (c === "\\" && e.L.i + 1 < e.L.len) {
        (St(e.L), St(e.L));
        continue;
      }
      if (c === '"' || c === "'") {
        St(e.L);
        while (e.L.i < e.L.len && Zt(e.L) !== c) {
          if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          St(e.L);
        }
        if (Zt(e.L) === c) St(e.L);
        continue;
      }
      if (c === "`") {
        ((e.zshBraceDiff = true), St(e.L));
        while (e.L.i < e.L.len && Zt(e.L) !== "`") {
          if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          St(e.L);
        }
        if (Zt(e.L) === "`") St(e.L);
        continue;
      }
      if (c === "$") {
        let u = Zt(e.L, 1);
        if (u === "{") {
          let d = 0;
          (St(e.L), St(e.L), d++);
          while (e.L.i < e.L.len && d > 0) {
            let p = Zt(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            else if (p === "$" && Zt(e.L, 1) === "$") St(e.L);
            else if (p === "$" && Zt(e.L, 1) === "'") {
              (St(e.L), St(e.L));
              while (e.L.i < e.L.len && Zt(e.L) !== "'") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === '"' || p === "'") {
              St(e.L);
              while (e.L.i < e.L.len && Zt(e.L) !== p) {
                if (p === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === "`") {
              ((e.zshBraceDiff = true), St(e.L));
              while (e.L.i < e.L.len && Zt(e.L) !== "`") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === "$" && Zt(e.L, 1) === "{") (d++, St(e.L));
            else if (p === "$" && Zt(e.L, 1) === "(") e.zshBraceDiff = true;
            else if (p === "{") e.zshBraceDiff = true;
            else if (p === "}") d--;
            St(e.L);
          }
          continue;
        }
        if (u === "(") {
          e.zshBraceDiff = true;
          let d = 0;
          (St(e.L), St(e.L), d++);
          while (e.L.i < e.L.len && d > 0) {
            let p = Zt(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) St(e.L);
            else if (p === "$" && Zt(e.L, 1) === "$") St(e.L);
            else if (p === "$" && Zt(e.L, 1) === "'") {
              (St(e.L), St(e.L));
              while (e.L.i < e.L.len && Zt(e.L) !== "'") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === '"' || p === "'") {
              St(e.L);
              while (e.L.i < e.L.len && Zt(e.L) !== p) {
                if (p === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === "`") {
              St(e.L);
              while (e.L.i < e.L.len && Zt(e.L) !== "`") {
                if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
                St(e.L);
              }
            } else if (p === "(") d++;
            else if (p === ")") d--;
            St(e.L);
          }
          continue;
        }
      }
      St(e.L);
    }
    let l = e.L.b;
    if (l === r) return null;
    return kn(e, "regex", r, l, []);
  }
  let o = [],
    s = e.L.b,
    i = () => {
      if (e.L.b > s) o.push(kn(e, "word", s, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let l = Zt(e.L);
    if (l === "}") break;
    if (l === "{") e.zshBraceDiff = true;
    if (n && l === "/") break;
    if (l === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    let c = Zt(e.L, 1);
    if (l === "$") {
      if (c === "{" || c === "(" || c === "[") {
        i();
        let u = parseDollarLike(e);
        if (u) o.push(u);
        s = e.L.b;
        continue;
      }
      if (c === "'") {
        i();
        let u = e.L.b;
        (St(e.L), St(e.L));
        while (e.L.i < e.L.len && Zt(e.L) !== "'") {
          if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          St(e.L);
        }
        if (Zt(e.L) === "'") St(e.L);
        (o.push(kn(e, "ansi_c_string", u, e.L.b, [])), (s = e.L.b));
        continue;
      }
      if (XU(c) || iC(c) || dct.has(c)) {
        i();
        let u = parseDollarLike(e);
        if (u) o.push(u);
        s = e.L.b;
        continue;
      }
    }
    if (l === '"') {
      (i(), o.push(parseDoubleQuoted(e)), (s = e.L.b));
      continue;
    }
    if (l === "'") {
      i();
      let u = e.L.b;
      St(e.L);
      while (e.L.i < e.L.len && Zt(e.L) !== "'") St(e.L);
      if (Zt(e.L) === "'") St(e.L);
      (o.push(kn(e, "raw_string", u, e.L.b, [])), (s = e.L.b));
      continue;
    }
    if ((l === "<" || l === ">") && c === "(") {
      ((e.zshBraceDiff = true), i());
      let u = parseProcessSub(e);
      if (u) o.push(u);
      s = e.L.b;
      continue;
    }
    if (l === "`") {
      i();
      let u = parseBacktick(e);
      if (u) o.push(u);
      s = e.L.b;
      continue;
    }
    St(e.L);
  }
  if ((i(), o.length > 1 && o[0].type === "word" && /^[ \t]+$/.test(o[0].text))) o.shift();
  if (o.length === 0) return null;
  if (o.length === 1) return o[0];
  let a = o.at(-1);
  return kn(e, "concatenation", o[0].startIndex, a.endIndex, o);
}
function Jnp(e) {
  let t = [],
    n = e.L.b,
    r = () => {
      if (e.L.b > n) t.push(kn(e, "regex", n, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let o = Zt(e.L);
    if (o === "}") break;
    if (o === "{") e.zshBraceDiff = true;
    if (o === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (o === '"') {
      (r(), t.push(parseDoubleQuoted(e)), (n = e.L.b));
      continue;
    }
    if (o === "'") {
      r();
      let s = e.L.b;
      St(e.L);
      while (e.L.i < e.L.len && Zt(e.L) !== "'") St(e.L);
      if (Zt(e.L) === "'") St(e.L);
      (t.push(kn(e, "raw_string", s, e.L.b, [])), (n = e.L.b));
      continue;
    }
    if (o === "`") {
      ((e.zshBraceDiff = true), St(e.L));
      while (e.L.i < e.L.len && Zt(e.L) !== "`") {
        if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
        St(e.L);
      }
      if (Zt(e.L) === "`") St(e.L);
      continue;
    }
    if (o === "$") {
      let s = Zt(e.L, 1);
      if (s === "$") {
        (St(e.L), St(e.L));
        continue;
      }
      if (s === "'") {
        r();
        let i = e.L.b;
        (St(e.L), St(e.L));
        while (e.L.i < e.L.len && Zt(e.L) !== "'") {
          if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          St(e.L);
        }
        if (Zt(e.L) === "'") St(e.L);
        (t.push(kn(e, "ansi_c_string", i, e.L.b, [])), (n = e.L.b));
        continue;
      }
      if (s === "{") {
        let i = 1;
        (St(e.L), St(e.L));
        while (e.L.i < e.L.len && i > 0) {
          let a = Zt(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          else if (a === "$" && Zt(e.L, 1) === "$") St(e.L);
          else if (a === "$" && Zt(e.L, 1) === "'") {
            (St(e.L), St(e.L));
            while (e.L.i < e.L.len && Zt(e.L) !== "'") {
              if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === '"' || a === "'") {
            St(e.L);
            while (e.L.i < e.L.len && Zt(e.L) !== a) {
              if (a === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === "`") {
            ((e.zshBraceDiff = true), St(e.L));
            while (e.L.i < e.L.len && Zt(e.L) !== "`") {
              if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === "$" && Zt(e.L, 1) === "{") (i++, St(e.L));
          else if (a === "$" && Zt(e.L, 1) === "(") e.zshBraceDiff = true;
          else if (a === "{") e.zshBraceDiff = true;
          else if (a === "}") i--;
          St(e.L);
        }
        continue;
      }
      if (s === "(") {
        e.zshBraceDiff = true;
        let i = 1;
        (St(e.L), St(e.L));
        while (e.L.i < e.L.len && i > 0) {
          let a = Zt(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) St(e.L);
          else if (a === "$" && Zt(e.L, 1) === "$") St(e.L);
          else if (a === "$" && Zt(e.L, 1) === "'") {
            (St(e.L), St(e.L));
            while (e.L.i < e.L.len && Zt(e.L) !== "'") {
              if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === '"' || a === "'") {
            St(e.L);
            while (e.L.i < e.L.len && Zt(e.L) !== a) {
              if (a === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === "`") {
            St(e.L);
            while (e.L.i < e.L.len && Zt(e.L) !== "`") {
              if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
              St(e.L);
            }
          } else if (a === "(") i++;
          else if (a === ")") i--;
          St(e.L);
        }
        continue;
      }
    }
    St(e.L);
  }
  return (r(), t);
}
function parseBacktick(e) {
  let t = e.L.b;
  St(e.L);
  let n = kn(e, "`", t, e.L.b, []),
    r = e.L.i;
  {
    let c = false;
    while (r < e.L.len) {
      let u = e.L.src[r];
      if (u === "\\") {
        let d = e.L.src[r + 1];
        if (d === "`" || d === "$" || d === "\\") c = true;
        r += 2;
        continue;
      }
      if (u === "`") break;
      r++;
    }
    if (c) {
      let u = e.L.b;
      while (e.L.i < r) St(e.L);
      let d = kn(e, "backtick_escape_unsupported", u, e.L.b, []),
        p;
      if (Zt(e.L) === "`") {
        let f = e.L.b;
        (St(e.L), (p = kn(e, "`", f, e.L.b, [])));
      } else p = kn(e, "`", e.L.b, e.L.b, []);
      return kn(e, "command_substitution", t, p.endIndex, [n, d, p]);
    }
  }
  e.inBacktick++;
  let o = e.inDquote;
  e.inDquote = 0;
  let s = Qf(e.L),
    i = e.L.heredocs;
  e.L.heredocs = [];
  let a = [];
  while (true) {
    if ((ra(e.L), Zt(e.L) === "`" || Zt(e.L) === "")) break;
    let c = Qf(e.L),
      u = nextToken(e.L, "cmd");
    if (u.type === "EOF" || u.type === "BACKTICK") {
      Iu(e.L, c);
      break;
    }
    if (u.type === "NEWLINE") continue;
    Iu(e.L, c);
    let d = parseAndOr(e);
    if (!d) break;
    if ((a.push(d), ra(e.L), Zt(e.L) === "`")) break;
    let p = Qf(e.L),
      f = nextToken(e.L, "cmd");
    if (f.type === "OP" && (f.value === ";" || f.value === "&")) a.push(Wu(e, f.value, f));
    else if (f.type !== "NEWLINE") Iu(e.L, p);
  }
  if (((e.L.heredocs = i), e.inBacktick--, (e.inDquote = o), e.L.i !== r)) {
    Iu(e.L, s);
    while (e.L.i < r) St(e.L);
    ((a.length = 0), a.push(kn(e, "backtick_body_overrun", n.endIndex, e.L.b, [])));
  }
  let l;
  if (Zt(e.L) === "`") {
    let c = e.L.b;
    (St(e.L), (l = kn(e, "`", c, e.L.b, [])));
  } else l = kn(e, "`", e.L.b, e.L.b, []);
  if (a.length === 0) return null;
  return kn(e, "command_substitution", t, l.endIndex, [n, ...a, l]);
}
function parseIf(e, ifTok) {
  let n = Wu(e, "if", ifTok),
    r = [n],
    o = parseStatements(e, null);
  (r.push(...o), _2t(e, "then", r));
  let s = parseStatements(e, null);
  r.push(...s);
  while (true) {
    let a = Qf(e.L),
      l = nextToken(e.L, "cmd");
    if (l.type === "WORD" && l.value === "elif") {
      let c = Wu(e, "elif", l),
        u = parseStatements(e, null),
        d = [c, ...u];
      _2t(e, "then", d);
      let p = parseStatements(e, null);
      d.push(...p);
      let f = d.at(-1);
      r.push(kn(e, "elif_clause", c.startIndex, f.endIndex, d));
    } else if (l.type === "WORD" && l.value === "else") {
      let c = Wu(e, "else", l),
        u = parseStatements(e, null),
        d = u.length > 0 ? u.at(-1) : c;
      r.push(kn(e, "else_clause", c.startIndex, d.endIndex, [c, ...u]));
    } else {
      Iu(e.L, a);
      break;
    }
  }
  _2t(e, "fi", r);
  let i = r.at(-1);
  return kn(e, "if_statement", n.startIndex, i.endIndex, r);
}
function parseWhile(e, kwTok) {
  let n = Wu(e, kwTok.value, kwTok),
    r = [n],
    o = parseStatements(e, null);
  r.push(...o);
  let s = Pro(e);
  if (s) r.push(s);
  let i = r.at(-1);
  return kn(e, "while_statement", n.startIndex, i.endIndex, r);
}
function parseFor(e, forTok) {
  let n = Wu(e, forTok.value, forTok);
  if ((ra(e.L), forTok.value === "for" && Zt(e.L) === "(" && Zt(e.L, 1) === "(")) {
    let d = e.L.b;
    (St(e.L), St(e.L));
    let p = kn(e, "((", d, e.L.b, []),
      f = [n, p];
    for (let b = 0; b < 3; b++) {
      ra(e.L);
      let _ = b2t(e, b < 2 ? ";" : "))", "assign");
      if ((f.push(..._), b < 2)) {
        if (Zt(e.L) === ";") {
          let S = e.L.b;
          (St(e.L), f.push(kn(e, ";", S, e.L.b, [])));
        }
      }
    }
    if ((ra(e.L), Zt(e.L) === ")" && Zt(e.L, 1) === ")")) {
      let b = e.L.b;
      (St(e.L), St(e.L), f.push(kn(e, "))", b, e.L.b, [])));
    }
    let m = Qf(e.L),
      g = nextToken(e.L, "cmd");
    if (g.type === "OP" && g.value === ";") f.push(Wu(e, ";", g));
    else if (g.type !== "NEWLINE") Iu(e.L, m);
    let h = Pro(e);
    if (h) f.push(h);
    else if ((zbe(e), ra(e.L), Zt(e.L) === "{")) {
      let b = e.L.b;
      St(e.L);
      let _ = kn(e, "{", b, e.L.b, []),
        S = parseStatements(e, "}"),
        A;
      if (Zt(e.L) === "}") {
        let v = e.L.b;
        (St(e.L), (A = kn(e, "}", v, e.L.b, [])));
      } else A = kn(e, "}", e.L.b, e.L.b, []);
      f.push(kn(e, "compound_statement", _.startIndex, A.endIndex, [_, ...S, A]));
    }
    let y = f.at(-1);
    return kn(e, "c_style_for_statement", n.startIndex, y.endIndex, f);
  }
  let r = [n],
    o = nextToken(e.L, "arg");
  if (o.type === "WORD" && XU(o.value[0] ?? "") && [...o.value].every(nre))
    r.push(kn(e, "variable_name", o.start, o.end, []));
  else r.push(kn(e, "ERROR", o.start, o.end, []));
  ra(e.L);
  let s = Qf(e.L),
    i = nextToken(e.L, "arg");
  if (i.type === "WORD" && i.value === "in") {
    r.push(Wu(e, "in", i));
    while (true) {
      ra(e.L);
      let d = Zt(e.L);
      if (
        d === ";" ||
        d ===
          `
` ||
        d === ""
      )
        break;
      let p = parseWord(e, "arg");
      if (!p) break;
      r.push(p);
    }
  } else Iu(e.L, s);
  let a = Qf(e.L),
    l = nextToken(e.L, "cmd");
  if (l.type === "OP" && l.value === ";") r.push(Wu(e, ";", l));
  else if (l.type !== "NEWLINE") Iu(e.L, a);
  let c = Pro(e);
  if (c) r.push(c);
  let u = r.at(-1);
  return kn(e, "for_statement", n.startIndex, u.endIndex, r);
}
function Pro(e) {
  zbe(e);
  let t = Qf(e.L),
    n = nextToken(e.L, "cmd");
  if (n.type !== "WORD" || n.value !== "do") return (Iu(e.L, t), null);
  let r = Wu(e, "do", n),
    o = parseStatements(e, null),
    s = [r, ...o];
  _2t(e, "done", s);
  let i = s.at(-1);
  return kn(e, "do_group", r.startIndex, i.endIndex, s);
}
function parseCase(e, caseTok) {
  let n = Wu(e, "case", caseTok),
    r = [n];
  ra(e.L);
  let o = parseWord(e, "arg");
  if (o) r.push(o);
  (ra(e.L), _2t(e, "in", r), zbe(e));
  while (true) {
    (ra(e.L), zbe(e));
    let i = Qf(e.L),
      a = nextToken(e.L, "arg");
    if (a.type === "WORD" && a.value === "esac") {
      r.push(Wu(e, "esac", a));
      break;
    }
    if (a.type === "EOF") break;
    Iu(e.L, i);
    let l = parseCaseItem(e);
    if (!l) break;
    r.push(l);
  }
  let s = r.at(-1);
  return kn(e, "case_statement", n.startIndex, s.endIndex, r);
}
function parseCaseItem(e) {
  ra(e.L);
  let t = e.L.b,
    n = [];
  if (Zt(e.L) === "(") {
    let l = e.L.b;
    (St(e.L), n.push(kn(e, "(", l, e.L.b, [])));
  }
  let r = true;
  while (true) {
    ra(e.L);
    let l = Zt(e.L);
    if (l === ")" || l === "") break;
    let c = nrp(e);
    if (c.length === 0) break;
    if (!r && c.length > 1) {
      let u = c.map((f) =>
          f.type === "extglob_pattern" ? kn(e, "word", f.startIndex, f.endIndex, []) : f,
        ),
        d = u[0],
        p = u.at(-1);
      n.push(kn(e, "concatenation", d.startIndex, p.endIndex, u));
    } else n.push(...c);
    if (
      ((r = false),
      ra(e.L),
      Zt(e.L) === "\\" &&
        Zt(e.L, 1) ===
          `
`)
    )
      (St(e.L), St(e.L), ra(e.L));
    if (Zt(e.L) === "|") {
      let u = e.L.b;
      if (
        (St(e.L),
        n.push(kn(e, "|", u, e.L.b, [])),
        Zt(e.L) === "\\" &&
          Zt(e.L, 1) ===
            `
`)
      )
        (St(e.L), St(e.L));
    } else break;
  }
  if (Zt(e.L) === ")") {
    let l = e.L.b;
    (St(e.L), n.push(kn(e, ")", l, e.L.b, [])));
  }
  let o = parseStatements(e, null);
  n.push(...o);
  let s = Qf(e.L),
    i = nextToken(e.L, "cmd");
  if (i.type === "OP" && (i.value === ";;" || i.value === ";&" || i.value === ";;&"))
    n.push(Wu(e, i.value, i));
  else Iu(e.L, s);
  if (n.length === 0) return null;
  if (o.length === 0)
    for (let l = 0; l < n.length; l++) {
      let c = n[l];
      if (c.type !== "extglob_pattern") continue;
      let u = CRe(e, c.startIndex, c.endIndex);
      if (/^[-+?*@!][a-zA-Z]/.test(u) && !/[*?(]/.test(u))
        n[l] = kn(e, "word", c.startIndex, c.endIndex, []);
    }
  let a = n.at(-1);
  return kn(e, "case_item", t, a.endIndex, n);
}
function nrp(e) {
  ra(e.L);
  let t = Qf(e.L),
    n = e.L.b,
    r = e.L.i,
    o = 0,
    s = false,
    i = false,
    a = false;
  while (e.L.i < e.L.len) {
    let d = Zt(e.L);
    if (d === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (d === '"' || d === "'") {
      ((a = true), St(e.L));
      while (e.L.i < e.L.len && Zt(e.L) !== d) {
        if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
        St(e.L);
      }
      if (Zt(e.L) === d) St(e.L);
      continue;
    }
    if (d === "(") {
      (o++, St(e.L));
      continue;
    }
    if (o > 0) {
      if (d === ")") {
        (o--, St(e.L));
        continue;
      }
      if (
        d ===
        `
`
      )
        break;
      St(e.L);
      continue;
    }
    if (
      d === ")" ||
      d === "|" ||
      d === " " ||
      d === "\t" ||
      d ===
        `
`
    )
      break;
    if (d === "$") s = true;
    if (d === "[") i = true;
    St(e.L);
  }
  if (e.L.b === n) return [];
  let l = e.src.slice(r, e.L.i),
    c = /[*?+@!]\(/.test(l);
  if (a && !c) return (Iu(e.L, t), parseCasePatternSegmented(e));
  if (!c && (s || i)) {
    Iu(e.L, t);
    let d = parseWord(e, "arg");
    return d ? [d] : [];
  }
  let u = c || /[*?]/.test(l) || /^[-+?*@!][a-zA-Z]/.test(l) ? "extglob_pattern" : "word";
  return [kn(e, u, n, e.L.b, [])];
}
function parseCasePatternSegmented(e) {
  let t = [],
    n = e.L.b,
    r = e.L.i,
    o = () => {
      if (e.L.i > r) {
        let s = e.src.slice(r, e.L.i),
          i = /[*?]/.test(s) ? "extglob_pattern" : "word";
        t.push(kn(e, i, n, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let s = Zt(e.L);
    if (s === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (s === '"') {
      (o(), t.push(parseDoubleQuoted(e)), (n = e.L.b), (r = e.L.i));
      continue;
    }
    if (s === "'") {
      o();
      let i = nextToken(e.L, "arg");
      (t.push(Wu(e, "raw_string", i)), (n = e.L.b), (r = e.L.i));
      continue;
    }
    if (
      s === ")" ||
      s === "|" ||
      s === " " ||
      s === "\t" ||
      s ===
        `
`
    )
      break;
    St(e.L);
  }
  return (o(), t);
}
function parseFunction(e, fnTok) {
  let n = Wu(e, "function", fnTok);
  ra(e.L);
  let r = nextToken(e.L, "arg"),
    o = kn(e, "word", r.start, r.end, []),
    s = [n, o];
  if ((ra(e.L), Zt(e.L) === "(" && Zt(e.L, 1) === ")")) {
    let l = nextToken(e.L, "cmd"),
      c = nextToken(e.L, "cmd");
    (s.push(Wu(e, "(", l)), s.push(Wu(e, ")", c)));
  }
  (ra(e.L), zbe(e));
  let i = parseCommand(e);
  if (i)
    if (
      i.type === "redirected_statement" &&
      i.children.length >= 2 &&
      i.children[0].type === "compound_statement"
    )
      s.push(...i.children);
    else s.push(i);
  let a = s.at(-1);
  return kn(e, "function_definition", n.startIndex, a.endIndex, s);
}
function parseDeclaration(e, kwTok) {
  let n = Wu(e, kwTok.value, kwTok),
    r = [n],
    o = [];
  while (true) {
    ra(e.L);
    let c = tryParseRedirect(e);
    if (c) {
      o.push(c);
      continue;
    }
    let u = Zt(e.L);
    if (
      u === "" ||
      u ===
        `
` ||
      u === ";" ||
      u === "&" ||
      u === "|" ||
      u === ")" ||
      u === "<" ||
      u === ">"
    )
      break;
    let d = tryParseAssignment(e);
    if (d) {
      r.push(d);
      continue;
    }
    if (u === '"' || u === "'" || u === "$") {
      let m = parseWord(e, "arg");
      if (m) {
        r.push(m);
        continue;
      }
      break;
    }
    let p = Qf(e.L),
      f = nextToken(e.L, "arg");
    if (f.type === "WORD" || f.type === "NUMBER") {
      if (f.value.startsWith("-")) r.push(Wu(e, "word", f));
      else if (XU(f.value[0] ?? "")) r.push(kn(e, "variable_name", f.start, f.end, []));
      else r.push(Wu(e, "word", f));
    } else {
      Iu(e.L, p);
      break;
    }
  }
  let s = r.at(-1),
    i = kn(e, "declaration_command", n.startIndex, s.endIndex, r);
  if (o.length === 0) return i;
  let a = o.at(-1),
    l = Math.max(i.endIndex, a.endIndex);
  return kn(e, "redirected_statement", n.startIndex, l, [i, ...o]);
}
function irp(e, t) {
  let n = Wu(e, "unset", t),
    r = [n],
    o = [];
  while (true) {
    ra(e.L);
    let c = tryParseRedirect(e);
    if (c) {
      o.push(c);
      continue;
    }
    let u = Zt(e.L);
    if (
      u === "" ||
      u ===
        `
` ||
      u === ";" ||
      u === "&" ||
      u === "|" ||
      u === ")" ||
      u === "<" ||
      u === ">"
    )
      break;
    let d = parseWord(e, "arg");
    if (!d) break;
    if (d.type === "word") {
      if (d.text.startsWith("-")) r.push(d);
      else r.push(kn(e, "variable_name", d.startIndex, d.endIndex, []));
    } else r.push(d);
  }
  let s = r.at(-1),
    i = kn(e, "unset_command", n.startIndex, s.endIndex, r);
  if (o.length === 0) return i;
  let a = o.at(-1),
    l = Math.max(i.endIndex, a.endIndex);
  return kn(e, "redirected_statement", n.startIndex, l, [i, ...o]);
}
function _2t(e, t, n) {
  zbe(e);
  let r = Qf(e.L),
    o = nextToken(e.L, "cmd");
  if (o.type === "WORD" && o.value === t) n.push(Wu(e, t, o));
  else Iu(e.L, r);
}
function Vna(e, t) {
  return parseTestOr(e, t);
}
function parseTestOr(e, closer) {
  let n = zna(e, closer);
  if (!n) return null;
  while (true) {
    ra(e.L);
    let r = Qf(e.L);
    if (closer === "]]" && Zt(e.L) === "|" && Zt(e.L, 1) === "|") {
      let o = e.L.b;
      (St(e.L), St(e.L));
      let s = kn(e, "||", o, e.L.b, []);
      hOn(e, closer);
      let i = zna(e, closer);
      if (!i) {
        Iu(e.L, r);
        break;
      }
      n = kn(e, "binary_expression", n.startIndex, i.endIndex, [n, s, i]);
    } else break;
  }
  return n;
}
function zna(e, t) {
  let n = parseTestUnary(e, t);
  if (!n) return null;
  while (true) {
    ra(e.L);
    let r = Qf(e.L);
    if (t === "]]" && Zt(e.L) === "&" && Zt(e.L, 1) === "&") {
      let o = e.L.b;
      (St(e.L), St(e.L));
      let s = kn(e, "&&", o, e.L.b, []);
      hOn(e, t);
      let i = parseTestUnary(e, t);
      if (!i) {
        Iu(e.L, r);
        break;
      }
      n = kn(e, "binary_expression", n.startIndex, i.endIndex, [n, s, i]);
    } else break;
  }
  return n;
}
function hOn(e, t) {
  if ((ra(e.L), t === "]]"))
    while (true) {
      let n = Zt(e.L);
      if (
        n ===
        `
`
      )
        (St(e.L), ra(e.L));
      else if (n === "#")
        while (
          Zt(e.L) &&
          Zt(e.L) !==
            `
`
        )
          St(e.L);
      else break;
    }
}
function parseTestUnary(e, closer) {
  if ((hOn(e, closer), Zt(e.L) === "(")) {
    let r = e.L.b;
    St(e.L);
    let o = kn(e, "(", r, e.L.b, []),
      s = parseTestOr(e, closer);
    ra(e.L);
    let i;
    if (Zt(e.L) === ")") {
      let l = e.L.b;
      (St(e.L), (i = kn(e, ")", l, e.L.b, [])));
    } else i = kn(e, ")", e.L.b, e.L.b, []);
    let a = s ? [o, s, i] : [o, i];
    return kn(e, "parenthesized_expression", o.startIndex, i.endIndex, a);
  }
  return parseTestBinary(e, closer);
}
function parseTestNegatablePrimary(e, closer) {
  hOn(e, closer);
  let n = Zt(e.L),
    r = (o) =>
      o === " " ||
      o === "\t" ||
      o ===
        `
` ||
      o === "";
  if (n === "!" && (r(Zt(e.L, 1)) || Zt(e.L, 1) === "(")) {
    let o = e.L.b;
    St(e.L);
    let s = kn(e, "!", o, e.L.b, []),
      i = parseTestNegatablePrimary(e, closer);
    if (!i) return s;
    return kn(e, "unary_expression", s.startIndex, i.endIndex, [s, i]);
  }
  if (n === "(") {
    let o = e.L.b;
    St(e.L);
    let s = kn(e, "(", o, e.L.b, []),
      i = parseTestOr(e, closer);
    ra(e.L);
    let a;
    if (Zt(e.L) === ")") {
      let c = e.L.b;
      (St(e.L), (a = kn(e, ")", c, e.L.b, [])));
    } else a = kn(e, ")", e.L.b, e.L.b, []);
    let l = i ? [s, i, a] : [s, a];
    return kn(e, "parenthesized_expression", s.startIndex, a.endIndex, l);
  }
  if (n === "-" && XU(Zt(e.L, 1))) {
    let o = Qf(e.L),
      s = e.L.b;
    St(e.L);
    while (nre(Zt(e.L))) St(e.L);
    if (!r(Zt(e.L))) return (Iu(e.L, o), pOn(e, closer));
    let i = kn(e, "test_operator", s, e.L.b, []);
    ra(e.L);
    let a = pOn(e, closer);
    if (!a) return i;
    return kn(e, "unary_expression", i.startIndex, a.endIndex, [i, a]);
  }
  return pOn(e, closer);
}
function parseTestBinary(e, closer) {
  ra(e.L);
  let n = parseTestNegatablePrimary(e, closer);
  if (!n) return null;
  ra(e.L);
  let r = Zt(e.L),
    o = Zt(e.L, 1),
    s = null,
    i = e.L.b;
  if (r === "=" && o === "=") (St(e.L), St(e.L), (s = kn(e, "==", i, e.L.b, [])));
  else if (r === "!" && o === "=") (St(e.L), St(e.L), (s = kn(e, "!=", i, e.L.b, [])));
  else if (r === "=" && o === "~") (St(e.L), St(e.L), (s = kn(e, "=~", i, e.L.b, [])));
  else if (r === "=" && o !== "=") (St(e.L), (s = kn(e, "=", i, e.L.b, [])));
  else if (closer === "]]" && r === "<" && o !== "<") (St(e.L), (s = kn(e, "<", i, e.L.b, [])));
  else if (closer === "]]" && r === ">" && o !== ">") (St(e.L), (s = kn(e, ">", i, e.L.b, [])));
  else if (r === "-" && XU(o)) {
    St(e.L);
    while (nre(Zt(e.L))) St(e.L);
    s = kn(e, "test_operator", i, e.L.b, []);
  }
  if (!s) return n;
  if ((ra(e.L), closer === "]]")) {
    let l = s.type;
    if (l === "=~") {
      ra(e.L);
      let c = Zt(e.L),
        u = null;
      if (c === '"' || c === "'") {
        let d = Qf(e.L),
          p = c === '"' ? parseDoubleQuoted(e) : Wu(e, "raw_string", nextToken(e.L, "arg")),
          f = e.L.i,
          m = f;
        while (m < e.L.len && (e.src[m] === " " || e.src[m] === "\t")) m++;
        let g = e.src[m] ?? "",
          h = m + 1;
        while (e.src[h] === "\\")
          if (
            e.src[h + 1] ===
            `
`
          )
            h += 2;
          else if (
            e.src[h + 1] === "\r" &&
            e.src[h + 2] ===
              `
`
          )
            h += 3;
          else break;
        let y = e.src[h] ?? "";
        if (
          (g === "]" && y === "]" && m > f) ||
          (g === "&" && y === "&") ||
          (g === "|" && y === "|" && m > f) ||
          g ===
            `
` ||
          g === ""
        )
          u = p;
        else Iu(e.L, d);
      }
      if (!u) u = Yna(e, true);
      if (!u) return n;
      return kn(e, "binary_expression", n.startIndex, u.endIndex, [n, s, u]);
    }
    if (l === "=") {
      let c = Yna(e, false);
      if (!c) return n;
      return kn(e, "binary_expression", n.startIndex, c.endIndex, [n, s, c]);
    }
    if (l === "==" || l === "!=") {
      let c = lrp(e);
      if (c.length === 0) return n;
      let u = c.at(-1);
      return kn(e, "binary_expression", n.startIndex, u.endIndex, [n, s, ...c]);
    }
  }
  let a = pOn(e, closer);
  if (!a) return n;
  return kn(e, "binary_expression", n.startIndex, a.endIndex, [n, s, a]);
}
function Yna(e, t) {
  ra(e.L);
  let n = e.L.b,
    r = 0;
  while (e.L.i < e.L.len) {
    let o = Zt(e.L);
    if (o === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (
      o ===
      `
`
    ) {
      if (r === 0) break;
      St(e.L);
      continue;
    }
    if (o === '"' || o === "'") {
      let s = o;
      St(e.L);
      while (e.L.i < e.L.len && Zt(e.L) !== s) {
        if (s === '"' && Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
        St(e.L);
      }
      if (e.L.i < e.L.len) St(e.L);
      continue;
    }
    if (o === "`") {
      St(e.L);
      while (e.L.i < e.L.len && Zt(e.L) !== "`") {
        if (Zt(e.L) === "\\" && e.L.i + 1 < e.L.len) St(e.L);
        St(e.L);
      }
      if (e.L.i < e.L.len) St(e.L);
      continue;
    }
    if (r === 0) {
      if (o === " " || o === "\t") break;
      if (o === "&" || (!t && o === "|")) break;
      if (o === ")") break;
    }
    if (o === "(") r++;
    else if (o === ")" && r > 0) r--;
    St(e.L);
  }
  if (e.L.b === n) return null;
  return kn(e, "regex", n, e.L.b, []);
}
function lrp(e) {
  ra(e.L);
  let t = [],
    n = e.L.b,
    r = e.L.i,
    o = 0,
    s = () => {
      if (e.L.i > r) {
        let i = e.src.slice(r, e.L.i),
          a = /^\d+$/.test(i) ? "number" : "extglob_pattern";
        t.push(kn(e, a, n, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let i = Zt(e.L);
    if (i === "\\" && e.L.i + 1 < e.L.len) {
      (St(e.L), St(e.L));
      continue;
    }
    if (
      i ===
      `
`
    ) {
      if (o === 0) break;
      St(e.L);
      continue;
    }
    if (o === 0) {
      if (i === "&" || i === "|") break;
      if (i === " " || i === "\t") {
        let a = e.L.i;
        for (;;) {
          let d = e.L.src[a];
          if (d === " " || d === "\t") a++;
          else if (
            d === "\\" &&
            e.L.src[a + 1] ===
              `
`
          )
            a += 2;
          else if (
            d === "\\" &&
            e.L.src[a + 1] === "\r" &&
            e.L.src[a + 2] ===
              `
`
          )
            a += 3;
          else break;
        }
        let l = e.L.src[a] ?? "",
          c = a + 1;
        while (e.L.src[c] === "\\")
          if (
            e.L.src[c + 1] ===
            `
`
          )
            c += 2;
          else if (
            e.L.src[c + 1] === "\r" &&
            e.L.src[c + 2] ===
              `
`
          )
            c += 3;
          else break;
        let u = e.L.src[c] ?? "";
        if (
          (l === "]" && u === "]") ||
          (l === "&" && u === "&") ||
          (l === "|" && u === "|") ||
          l === "#" ||
          l ===
            `
`
        )
          break;
        St(e.L);
        continue;
      }
    }
    if (i === "$") {
      let a = Zt(e.L, 1);
      if (a === "'") {
        s();
        let l = nextToken(e.L, "arg");
        (t.push(Wu(e, "ansi_c_string", l)), (n = e.L.b), (r = e.L.i));
        continue;
      }
      if (a === '"') {
        s();
        let l = {
          type: "DOLLAR",
          value: "$",
          start: e.L.b,
          end: e.L.b + 1,
        };
        (St(e.L), t.push(Wu(e, "$", l)), t.push(parseDoubleQuoted(e)), (n = e.L.b), (r = e.L.i));
        continue;
      }
      if (a === "(" || a === "{" || XU(a) || dct.has(a)) {
        s();
        let l = parseDollarLike(e);
        if (l) t.push(l);
        ((n = e.L.b), (r = e.L.i));
        continue;
      }
    }
    if (i === '"') {
      (s(), t.push(parseDoubleQuoted(e)), (n = e.L.b), (r = e.L.i));
      continue;
    }
    if (i === "'") {
      s();
      let a = nextToken(e.L, "arg");
      (t.push(Wu(e, "raw_string", a)), (n = e.L.b), (r = e.L.i));
      continue;
    }
    if (i === "`") {
      s();
      let a = parseBacktick(e);
      if (a) t.push(a);
      ((n = e.L.b), (r = e.L.i));
      continue;
    }
    if ((i === "<" || i === ">") && Zt(e.L, 1) === "(") {
      s();
      let a = parseProcessSub(e);
      if (a) t.push(a);
      ((n = e.L.b), (r = e.L.i));
      continue;
    }
    if (i === ")" && o === 0) break;
    if (i === "(") o++;
    else if (i === ")" && o > 0) o--;
    St(e.L);
  }
  return (s(), t);
}
function pOn(e, t) {
  if ((ra(e.L), t === "]" && Zt(e.L) === "]" && Lro(Zt(e.L, 1) ?? ""))) return null;
  if (t === "]]" && Zt(e.L) === "]" && Zt(e.L, 1) === "]" && Lro(Zt(e.L, 2) ?? "")) return null;
  return parseWord(e, "arg");
}
function Xna(e, t, n) {
  Iu(e.L, t);
  let r = 0;
  while (e.L.i < e.L.len) {
    let o = Zt(e.L);
    if (n === "))" || n === ")") {
      if (o === "(") r++;
      else if (o === ")")
        if (r === 0) {
          if (n === ")" || Zt(e.L, 1) === ")") return;
        } else r--;
    } else if (n === "]") {
      if (o === "[") r++;
      else if (o === "]") {
        if (r === 0) return;
        r--;
      }
    } else if (E2t(e, n)) return;
    St(e.L);
  }
}
function fOn(e, t, n = "var") {
  return parseArithTernary(e, t, n);
}
function b2t(e, t, n = "var") {
  let r = [];
  while (true) {
    let o = parseArithTernary(e, t, n);
    if (o) r.push(o);
    if ((ra(e.L), Zt(e.L) === "," && !E2t(e, t))) {
      St(e.L);
      continue;
    }
    break;
  }
  return r;
}
function parseArithTernary(e, stop, mode) {
  let r = Mro(e, stop, 0, mode);
  if (!r) return null;
  if ((ra(e.L), Zt(e.L) === "?")) {
    let o = e.L.b;
    St(e.L);
    let s = kn(e, "?", o, e.L.b, []),
      i = Mro(e, ":", 0, mode);
    ra(e.L);
    let a;
    if (Zt(e.L) === ":") {
      let d = e.L.b;
      (St(e.L), (a = kn(e, ":", d, e.L.b, [])));
    } else a = kn(e, ":", e.L.b, e.L.b, []);
    let l = parseArithTernary(e, stop, mode),
      c = l ?? a,
      u = [r, s];
    if (i) u.push(i);
    if ((u.push(a), l)) u.push(l);
    return kn(e, "ternary_expression", r.startIndex, c.endIndex, u);
  }
  return r;
}
function drp(e) {
  let t = Zt(e.L),
    n = Zt(e.L, 1),
    r = Zt(e.L, 2);
  if (t === "<" && n === "<" && r === "=") return ["<<=", 3];
  if (t === ">" && n === ">" && r === "=") return [">>=", 3];
  if (t === "*" && n === "*") return ["**", 2];
  if (t === "<" && n === "<") return ["<<", 2];
  if (t === ">" && n === ">") return [">>", 2];
  if (t === "=" && n === "=") return ["==", 2];
  if (t === "!" && n === "=") return ["!=", 2];
  if (t === "<" && n === "=") return ["<=", 2];
  if (t === ">" && n === "=") return [">=", 2];
  if (t === "&" && n === "&") return ["&&", 2];
  if (t === "|" && n === "|") return ["||", 2];
  if (t === "+" && n === "=") return ["+=", 2];
  if (t === "-" && n === "=") return ["-=", 2];
  if (t === "*" && n === "=") return ["*=", 2];
  if (t === "/" && n === "=") return ["/=", 2];
  if (t === "%" && n === "=") return ["%=", 2];
  if (t === "&" && n === "=") return ["&=", 2];
  if (t === "^" && n === "=") return ["^=", 2];
  if (t === "|" && n === "=") return ["|=", 2];
  if (t === "+" && n !== "+") return ["+", 1];
  if (t === "-" && n !== "-") return ["-", 1];
  if (t === "*") return ["*", 1];
  if (t === "/") return ["/", 1];
  if (t === "%") return ["%", 1];
  if (t === "<") return ["<", 1];
  if (t === ">") return [">", 1];
  if (t === "&") return ["&", 1];
  if (t === "|") return ["|", 1];
  if (t === "^") return ["^", 1];
  if (t === "=") return ["=", 1];
  return null;
}
function Mro(e, t, n, r) {
  let o = parseArithUnary(e, t, r);
  if (!o) return null;
  while (true) {
    if ((ra(e.L), E2t(e, t))) break;
    if (Zt(e.L) === ",") break;
    let s = drp(e);
    if (!s) break;
    let [i, a] = s,
      l = crp[i];
    if (l === void 0 || l < n) break;
    let c = e.L.b;
    for (let f = 0; f < a; f++) St(e.L);
    let u = kn(e, i, c, e.L.b, []),
      d = urp.has(i) ? l : l + 1,
      p = Mro(e, t, d, r);
    if (!p) break;
    o = kn(e, "binary_expression", o.startIndex, p.endIndex, [o, u, p]);
  }
  return o;
}
function parseArithUnary(e, stop, mode) {
  if ((ra(e.L), E2t(e, stop))) return null;
  let r = Zt(e.L),
    o = Zt(e.L, 1);
  if ((r === "+" && o === "+") || (r === "-" && o === "-")) {
    let s = e.L.b;
    (St(e.L), St(e.L));
    let i = kn(e, r + o, s, e.L.b, []),
      a = parseArithUnary(e, stop, mode);
    if (!a) return i;
    return kn(e, "unary_expression", i.startIndex, a.endIndex, [i, a]);
  }
  if (r === "-" || r === "+" || r === "!" || r === "~") {
    if (mode !== "var" && r === "-" && iC(o)) {
      let l = e.L.b;
      St(e.L);
      while (iC(Zt(e.L))) St(e.L);
      return kn(e, "number", l, e.L.b, []);
    }
    let s = e.L.b;
    St(e.L);
    let i = kn(e, r, s, e.L.b, []),
      a = parseArithUnary(e, stop, mode);
    if (!a) return i;
    return kn(e, "unary_expression", i.startIndex, a.endIndex, [i, a]);
  }
  return parseArithPostfix(e, stop, mode);
}
function parseArithPostfix(e, stop, mode) {
  let r = parseArithPrimary(e, stop, mode);
  if (!r) return null;
  let o = Zt(e.L),
    s = Zt(e.L, 1);
  if ((o === "+" && s === "+") || (o === "-" && s === "-")) {
    let i = e.L.b;
    (St(e.L), St(e.L));
    let a = kn(e, o + s, i, e.L.b, []);
    return kn(e, "postfix_expression", r.startIndex, a.endIndex, [r, a]);
  }
  return r;
}
function parseArithPrimary(e, stop, mode) {
  if ((ra(e.L), E2t(e, stop))) return null;
  let r = Zt(e.L);
  if (r === "(") {
    let o = e.L.b;
    St(e.L);
    let s = kn(e, "(", o, e.L.b, []),
      i = b2t(e, ")", mode);
    ra(e.L);
    let a;
    if (Zt(e.L) === ")") {
      let l = e.L.b;
      (St(e.L), (a = kn(e, ")", l, e.L.b, [])));
    } else a = kn(e, ")", e.L.b, e.L.b, []);
    return kn(e, "parenthesized_expression", s.startIndex, a.endIndex, [s, ...i, a]);
  }
  if (r === '"') return parseDoubleQuoted(e);
  if (r === "$") return parseDollarLike(e);
  if (iC(r)) {
    let o = e.L.b;
    while (iC(Zt(e.L))) St(e.L);
    if (e.L.b - o === 1 && r === "0" && (Zt(e.L) === "x" || Zt(e.L) === "X")) {
      St(e.L);
      while (Pnp(Zt(e.L))) St(e.L);
    } else if (Zt(e.L) === "#") {
      St(e.L);
      while (Mnp(Zt(e.L))) St(e.L);
    }
    return kn(e, "number", o, e.L.b, []);
  }
  if (XU(r)) {
    let o = e.L.b;
    while (nre(Zt(e.L))) St(e.L);
    let s = Zt(e.L);
    if (mode === "assign") {
      ra(e.L);
      let a = Zt(e.L),
        l = Zt(e.L, 1);
      if (a === "=" && l !== "=") {
        let c = kn(e, "variable_name", o, e.L.b, []),
          u = e.L.b;
        St(e.L);
        let d = kn(e, "=", u, e.L.b, []),
          p = parseArithTernary(e, stop, mode),
          f = p ? p.endIndex : d.endIndex;
        return kn(e, "variable_assignment", o, f, p ? [c, d, p] : [c, d]);
      }
    }
    if (s === "[") {
      let a = kn(e, "variable_name", o, e.L.b, []),
        l = e.L.b;
      St(e.L);
      let c = kn(e, "[", l, e.L.b, []),
        u = parseArithTernary(e, "]", "var") ?? parseDollarLike(e);
      ra(e.L);
      let d;
      if (Zt(e.L) === "]") {
        let f = e.L.b;
        (St(e.L), (d = kn(e, "]", f, e.L.b, [])));
      } else d = kn(e, "]", e.L.b, e.L.b, []);
      let p = u ? [a, c, u, d] : [a, c, d];
      return kn(e, "subscript", o, d.endIndex, p);
    }
    return kn(e, mode === "var" ? "variable_name" : "word", o, e.L.b, []);
  }
  return null;
}
function E2t(e, t) {
  let n = Zt(e.L);
  if (t === "))") return n === ")" && Zt(e.L, 1) === ")";
  if (t === ")") return n === ")";
  if (t === ";") return n === ";";
  if (t === ":") return n === ":";
  if (t === "]") return n === "]";
  if (t === "}") return n === "}";
  if (t === ":}") return n === ":" || n === "}";
  return (
    n === "" ||
    n ===
      `
`
  );
}
var knp, UTy, dct, Rnp, Oro, crp, urp;
