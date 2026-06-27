// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fka
// matched 2.1.88 source: src/services/teamMemorySync/index.ts
// class=new  jaccard=0.0282  score=0.138  fileCov=0.0342
// note: nearest: src/services/teamMemorySync/index.ts (0.0282); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fka = E(() => {
  At();
  eqe();
  Zwp = new Set(["1", "2"]), eCp = new Set(["x", "X", "g", "L", "K"]), tCp = new Set(["S", "D", "V", "M"]);
  z3t = class z3t extends mi {
    entryName;
    constructor(e, t) {
      super(`Unsafe tar entry "${e}": ${t}`, "tar archive contains an unsafe entry");
      this.entryName = e;
    }
  };
  wFn = class wFn extends mi {
    entryName;
    constructor(e) {
      super(`Tar entry "${e}" is a symlink or hardlink \u2014 links are not permitted in skill archives`, "tar archive contains a link entry");
      this.entryName = e;
    }
  };
  CFn = class CFn extends mi {
    entryName;
    constructor(e, t) {
      super(`Tar entry "${e}" has unsupported typeflag '${t}' (sparse/GNU-special entries are not permitted in skill archives)`, "tar archive contains an unsupported entry type");
      this.entryName = e;
    }
  };
  Bka = class Bka extends mi {
    constructor(e) {
      super(`Tar header at offset ${e} has an invalid checksum`, "tar header has an invalid checksum");
    }
  };
  vpo = class vpo extends mi {
    constructor(e) {
      super(e, "tar header is malformed");
    }
  };
  K3t = class K3t extends mi {
    a;
    b;
    constructor(e, t) {
      super(`Archive entries "${e}" and "${t}" alias the same path on disk (case-folding or dot-segment normalization)`, "archive contains entries that alias the same disk path");
      this.a = e;
      this.b = t;
    }
  };
  IFn = class IFn extends mi {
    constructor(e) {
      super(`Tar archive has more than ${e} entries`, "tar archive exceeds the entry-count limit");
    }
  };
  Y3t = class Y3t extends mi {
    constructor(e) {
      super(`Tar archive uncompressed content exceeds ${Math.round(e / 1000000 /* 1e6 */)}MB`, "tar archive exceeds the uncompressed-size limit");
    }
  };
});
function Wka() {
  return fde.join(tr(), xpo);
}
function X3t(e) {
  return jka.createHash("sha256").update(e).digest("hex");
}
function qka(e, t, n) {
  let r = X3t(`${e}\x00${n}`).slice(0, 8),
    o = t.replace(/[^A-Za-z0-9._-]/g, "-");
  return `${hc(e)}--${o}--${r}`;
}
function Aqe(e) {
  if (!e) return;
  let t = /^(?:sha256:)?([0-9a-fA-F]{64})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : void 0;
}
async function kpo(e) {
  try {
    let t = await YSe.readFile(fde.join(e, Gka), "utf8"),
      n = aCp().safeParse(Ft(t));
    return n.success ? n.data : null;
  } catch {
    return null;
  }
}
async function lCp(e, t) {
  await YSe.mkdir(e, {
    recursive: true
  }), await YSe.writeFile(fde.join(e, Gka), De(t));
}
async function J3t(e, t) {
  let n = qka(e, t.name, t.url),
    r = fde.join(Wka(), n),
    o = {
      hit: false,
      slugDir: r
    },
    s,
    i = Aqe(t.digest ?? void 0);
  if (i) s = i;else {
    let l = await kpo(r);
    if (!l || Date.now() - l.fetchedAt >= iCp) return o;
    s = l.cacheKey;
  }
  let a = fde.join(r, s);
  try {
    let l = await YSe.readFile(fde.join(a, "SKILL.md"), "utf8");
    return {
      hit: true,
      dir: a,
      cacheKey: s,
      skillMd: l
    };
  } catch {
    return o;
  }
}
async function xFn(e, t, n) {
  let r = qka(e, t.name, t.url),
    o = fde.join(Wka(), r),
    s = fde.join(o, n),
    i = await YSe.stat(fde.join(s, "SKILL.md")).then(a => a.isFile()).catch(() => false);
  if (i) sn(e, `Skill '${t.name}' content unchanged \u2014 reusing extraction at ${s}`);
  return {
    slugDir: o,
    keyDir: s,
    alreadyExtracted: i
  };
}
async function kFn(e, t, n) {
  await lCp(e, {
    url: t.url,
    cacheKey: n,
    declaredDigest: Aqe(t.digest ?? void 0),
    fetchedAt: Date.now()
  });
}
var jka,
  YSe,
  fde,
  xpo = "mcp-skill-archives",
  Gka = "meta.json",
  iCp = 86400000,
  aCp;