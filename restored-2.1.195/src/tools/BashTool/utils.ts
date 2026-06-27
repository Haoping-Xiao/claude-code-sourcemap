// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kel
// matched 2.1.88 source: src/tools/BashTool/utils.ts
// class=modified  jaccard=0.2922  score=0.9365  fileCov=0.2981
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Kel] deps: _i, Ye, Dpe, sr, E8e, AMe, Kut
((Vel = R(lt(), 1)), (Zht = R(se(), 1)));
function Z8n(e) {
  let t = e.split(`
`),
    n = 0;
  while (n < t.length && t[n]?.trim() === "") n++;
  let r = t.length - 1;
  while (r >= 0 && t[r]?.trim() === "") r--;
  if (n > r) return "";
  return t.slice(n, r + 1).join(`
`);
}
function B9t(e) {
  return /^data:image\/[a-z0-9.+_-]+;base64,/i.test(e);
}
function Yel(e) {
  let t = e.trim().match(UZp);
  if (!t || !t[1] || !t[2]) return null;
  return {
    mediaType: t[1],
    data: t[2],
  };
}
function e6n(e, t) {
  let n = Yel(e);
  if (!n) return null;
  let r = oX(Buffer.from(n.data, "base64"));
  if (r === null) return null;
  return {
    tool_use_id: t,
    type: "tool_result",
    content: [
      {
        type: "image",
        source: {
          type: "base64",
          media_type: r,
          data: n.data,
        },
      },
    ],
  };
}
async function t6n(e, t, n, r) {
  let o = e;
  if (t) {
    if ((n ?? (await J8n.stat(t)).size) > FZp) return null;
    o = await J8n.readFile(t, "utf8");
  }
  let s = Yel(o);
  if (!s) return null;
  let i = Buffer.from(s.data, "base64"),
    a = s.mediaType.split("/")[1] || "png",
    l = await x0e(i, i.length, a, r);
  return `data:image/${l.mediaType};base64,${l.buffer.toString("base64")}`;
}
function Xel(e) {
  let t = B9t(e);
  if (t)
    return {
      totalLines: 1,
      truncatedContent: e,
      isImage: t,
    };
  let n = Npt();
  if (e.length <= n)
    return {
      totalLines:
        hu(
          e,
          `
`,
        ) + 1,
      truncatedContent: e,
      isImage: t,
    };
  let r = e.slice(0, n),
    o =
      hu(
        e,
        `
`,
        n,
      ) + 1,
    s = `${r}

... [${o} lines truncated] ...`;
  return {
    totalLines:
      hu(
        e,
        `
`,
      ) + 1,
    truncatedContent: s,
    isImage: t,
  };
}
function r6n(e) {
  let t = $t(),
    n = yr(),
    r = Brs();
  if (r || (t !== n && !JU(t, e))) {
    try {
      Uy(n);
    } catch {
      return true;
    }
    if (!r) return (G("tengu_bash_tool_reset_to_original_dir", {}), true);
  }
  return false;
}
var J8n,
  Q8n = 25,
  UZp,
  FZp = 20971520,
  n6n = (e) => `${e.trim()}
Shell cwd was reset to ${$t()}`;
