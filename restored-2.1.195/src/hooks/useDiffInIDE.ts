// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sfl
// matched 2.1.88 source: src/hooks/useDiffInIDE.ts
// class=modified  jaccard=0.3331  score=0.7271  fileCov=0.3807
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Sfl = E(() => {
  kt();
  Du();
  fb();
});
function Efl(e, t, n, r) {
  let o = r === "single",
    s = yMe({
      filePath: e,
      oldContent: t,
      newContent: n,
      singleHunk: o,
    });
  if (s.length === 0) return [];
  if (o && s.length > 1) ke(Error(`Unexpected number of hunks: ${s.length}. Expected 1 hunk.`));
  return Lel(s);
}
async function Afl(e, t, n, r) {
  let o = !1,
    s = ds(e),
    i = "";
  try {
    i = XC(s);
  } catch (c) {
    if (!wn(c)) throw c;
  }
  async function a() {
    if (o) return;
    o = !0;
    try {
      await Ako(r, l);
    } catch (c) {
      T(`Failed to close diff tab in IDE: ${c instanceof Error ? c.message : String(c)}`, {
        level: "error",
      });
    }
    (process.off("beforeExit", a), n.abortController.signal.removeEventListener("abort", a));
  }
  (n.abortController.signal.addEventListener("abort", a), process.on("beforeExit", a));
  let l = p5(n.options.mcpClients);
  try {
    let { updatedFile: c } = Evo({
      filePath: s,
      fileContents: i,
      edits: t,
    });
    if (!l || l.type !== "connected") throw Error("IDE client not available");
    let u = s,
      d = l.config.ideRunningInWindows === !0;
    if (Vt() === "wsl" && d && process.env.WSL_DISTRO_NAME)
      u = await new I0e(process.env.WSL_DISTRO_NAME).toIDEPath(s);
    let p = await Rre(
        "openDiff",
        {
          old_file_path: u,
          new_file_path: u,
          new_file_contents: c,
          tab_name: r,
        },
        l,
      ),
      f = Array.isArray(p) ? p : [p];
    if (tdf(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: f[1].text,
        }
      );
    else if (Zuf(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: c,
        }
      );
    else if (edf(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: i,
        }
      );
    throw Error("Not accepted");
  } catch (c) {
    throw (
      T(`Failed to show diff in IDE: ${c instanceof Error ? c.message : String(c)}`, {
        level: "error",
      }),
      a(),
      c
    );
  }
}
async function Ako(e, t) {
  try {
    if (!t || t.type !== "connected") throw Error("IDE client not available");
    (await Rre(
      "close_tab",
      {
        tab_name: e,
      },
      t,
    ),
      xe("ide_close_diff_tab"));
  } catch (n) {
    (T(`Failed to close diff tab in IDE: ${n instanceof Error ? n.message : String(n)}`, {
      level: "error",
    }),
      It("ide_close_diff_tab", "ide_close_diff_tab_failed"));
  }
}
function Zuf(e) {
  return (
    Array.isArray(e) &&
    typeof e[0] === "object" &&
    e[0] !== null &&
    "type" in e[0] &&
    e[0].type === "text" &&
    "text" in e[0] &&
    e[0].text === "TAB_CLOSED"
  );
}
function edf(e) {
  return (
    Array.isArray(e) &&
    typeof e[0] === "object" &&
    e[0] !== null &&
    "type" in e[0] &&
    e[0].type === "text" &&
    "text" in e[0] &&
    e[0].text === "DIFF_REJECTED"
  );
}
function tdf(e) {
  return (
    Array.isArray(e) &&
    e[0]?.type === "text" &&
    e[0].text === "FILE_SAVED" &&
    typeof e[1].text === "string"
  );
}
var AYn;
