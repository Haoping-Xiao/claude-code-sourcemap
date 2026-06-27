// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gHc
// matched 2.1.88 source: src/components/permissions/FilePermissionDialog/permissionOptions.tsx
// class=modified  jaccard=0.4504  score=0.6724  fileCov=0.577
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gHc] deps: ft, Fy, X0, Ye, kt, uo
((fHc = R(lt(), 1)), (x3 = R(se(), 1)));
function v_m(e) {
  let t = ds(e),
    n = ds(`${yr()}/.claude`),
    r = ym(t),
    o = ym(n);
  return r.startsWith(o + k7e.sep.toLowerCase()) || r.startsWith(o + "/");
}
function w_m(e) {
  let t = ds(e),
    n = k7e.join(hHc.homedir(), ".claude"),
    r = ym(t),
    o = ym(n);
  return r.startsWith(o + k7e.sep.toLowerCase()) || r.startsWith(o + "/");
}
function yHc({
  filePath: e,
  toolPermissionContext: t,
  operationType: n = "write",
  onRejectFeedbackChange: r,
  onAcceptFeedbackChange: o,
  yesInputMode: s = false,
  noInputMode: i = false,
}) {
  let a = [],
    l = eC("chat:cycleMode", "Chat", "shift+tab");
  if (s && o)
    a.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: o,
      allowEmptySubmitToCancel: true,
      option: {
        type: "accept-once",
      },
    });
  else
    a.push({
      label: "Yes",
      value: "yes",
      option: {
        type: "accept-once",
      },
    });
  let c = JU(e, t),
    u = v_m(e),
    d = w_m(e);
  if ((u || d) && n !== "read")
    a.push({
      label: "Yes, and allow Claude to edit its own settings for this session",
      value: "yes-claude-folder",
      option: {
        type: "accept-session",
        scope: d ? "global-claude-folder" : "claude-folder",
      },
    });
  else {
    let p;
    if (c) {
      if (n === "read") p = "Yes, during this session";
      else
        p = kNe.jsxs(w, {
          children: [
            "Yes, allow all edits during this session",
            " ",
            kNe.jsxs(w, {
              bold: true,
              children: ["(", l, ")"],
            }),
          ],
        });
    } else {
      let f = MB(e),
        m = k7e.basename(f) || "this directory";
      if (n === "read")
        p = kNe.jsxs(w, {
          children: [
            "Yes, allow reading from ",
            kNe.jsxs(w, {
              bold: true,
              children: [m, "/"],
            }),
            " during this session",
          ],
        });
      else
        p = kNe.jsxs(w, {
          children: [
            "Yes, allow all edits in ",
            kNe.jsxs(w, {
              bold: true,
              children: [m, "/"],
            }),
            " during this session ",
            kNe.jsxs(w, {
              bold: true,
              children: ["(", l, ")"],
            }),
          ],
        });
    }
    a.push({
      label: p,
      value: "yes-session",
      option: {
        type: "accept-session",
      },
    });
  }
  if (i && r)
    a.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: r,
      allowEmptySubmitToCancel: true,
      option: {
        type: "reject",
      },
    });
  else
    a.push({
      label: "No",
      value: "no",
      option: {
        type: "reject",
      },
    });
  return a;
}
var hHc, k7e, kNe;
