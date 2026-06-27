// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eJl
// matched 2.1.88 source: src/components/WorktreeExitDialog.tsx
// class=modified  jaccard=0.47  score=0.6214  fileCov=0.6586
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eJl] deps: fH, _i, Ye, kt, uf, Vl, vi, zX
((QXl = R(lt(), 1)), (aTe = R(se(), 1)));
function rJl() {
  return (_a(), ro(nVe));
}
function Y8f() {
  rJl().saveWorktreeState(null);
}
function sHt(e) {
  let t = e;
  while (true)
    try {
      (process.chdir(t), Uy(t));
      break;
    } catch {
      let n = nJl.dirname(t);
      if (n === t) break;
      t = n;
    }
  if (t !== e)
    T(`Original directory ${e} no longer exists \u2014 returned to ${t} instead`, {
      level: "warn",
    });
  (Y8f(), gS.cache.clear?.());
}
function WorktreeExitDialog(e) {
  let t = tJl.c(29),
    { onDone: n, onCancel: r } = e,
    [o, s] = M1e.useState("loading"),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = []), (t[0] = i));
  else i = t[0];
  let [a, l] = M1e.useState(i),
    [c, u] = M1e.useState(0),
    [d, p] = M1e.useState(),
    f;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((f = Gm()), (t[1] = f));
  else f = t[1];
  let m = f,
    g;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((g = rJl().getCurrentSessionTitle(Rt())), (t[2] = g));
  else g = t[2];
  let h = g,
    y,
    b;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((y = () => {
      (async function () {
        if (m?.enteredExisting) {
          (await Q6e(),
            sHt(m.originalCwd),
            p(`Returned to ${m.originalCwd} (worktree at ${m.worktreePath} left in place)`),
            s("done"));
          return;
        }
        let Y = [],
          z = m
            ? await Gr("git", ["status", "--porcelain"], {
                cwd: m.worktreePath,
              })
            : {
                stdout: "",
                stderr: "",
                code: 1,
                error: void 0,
              };
        if (m && !m.hookBased && z.code !== 0) {
          (dme(null), _Ee(), sHt(m.originalCwd));
          let K = m.tmuxSessionName
            ? `. Detached tmux session ${m.tmuxSessionName} may still be running \u2014 end it with: tmux kill-session -t ${m.tmuxSessionName}`
            : "";
          (p(`Worktree at ${m.worktreePath} is no longer accessible \u2014 exiting${K}`),
            s("done"));
          return;
        }
        if (z.stdout)
          ((Y = z.stdout
            .split(
              `
`,
            )
            .filter(X8f)),
            l(Y));
        if (m) {
          let { stdout: K } = await Gr(
              "git",
              ["rev-list", "--count", `${m.originalHeadCommit}..HEAD`],
              {
                cwd: m.worktreePath,
              },
            ),
            Z = parseInt(K.trim()) || 0;
          if ((u(Z), Y.length === 0 && Z === 0 && !h)) {
            (s("removing-clean"),
              Ebt().then((J) => {
                if ((sHt(m.originalCwd), J))
                  (G("tengu_worktree_removed", {
                    source: We("exit_dialog"),
                    commits: 0,
                    changed_files: 0,
                  }),
                    p("Worktree removed (no changes)"));
                else p(`Worktree could not be removed \u2014 kept at ${m.worktreePath}`);
                s("done");
              }));
            return;
          } else s("asking");
        }
      })();
    }),
      (b = [m, h]),
      (t[3] = y),
      (t[4] = b));
  else ((y = t[3]), (b = t[4]));
  M1e.useEffect(y, b);
  let _, S;
  if (t[5] !== n || t[6] !== d || t[7] !== o)
    ((_ = () => {
      if (o === "done") n(d);
    }),
      (S = [o, n, d]),
      (t[5] = n),
      (t[6] = d),
      (t[7] = o),
      (t[8] = _),
      (t[9] = S));
  else ((_ = t[8]), (S = t[9]));
  if ((M1e.useEffect(_, S), !m))
    return (
      n("No active worktree session found", {
        display: "system",
      }),
      null
    );
  if (o === "loading" || o === "done") return null;
  let A;
  if (t[10] !== a || t[11] !== c)
    ((A = async function (V) {
      if (!m) return;
      let Y = Boolean(m.tmuxSessionName);
      if (V === "keep" || V === "keep-with-tmux") {
        if (
          (s("keeping"),
          G("tengu_worktree_kept", {
            commits: c,
            changed_files: a.length,
          }),
          await Q6e(),
          sHt(m.originalCwd),
          Y)
        )
          p(
            `Worktree kept. Your work is saved at ${m.worktreePath} on branch ${m.worktreeBranch}. Reattach to tmux session with: tmux attach -t ${m.tmuxSessionName}`,
          );
        else
          p(`Worktree kept. Your work is saved at ${m.worktreePath} on branch ${m.worktreeBranch}`);
        s("done");
      } else if (V === "keep-kill-tmux") {
        if (
          (s("keeping"),
          G("tengu_worktree_kept", {
            commits: c,
            changed_files: a.length,
          }),
          m.tmuxSessionName)
        )
          await Sbt(m.tmuxSessionName);
        (await Q6e(),
          sHt(m.originalCwd),
          p(
            `Worktree kept at ${m.worktreePath} on branch ${m.worktreeBranch}. Tmux session terminated.`,
          ),
          s("done"));
      } else if (V === "remove" || V === "remove-with-tmux") {
        if ((s("removing"), m.tmuxSessionName)) await Sbt(m.tmuxSessionName);
        let z = await Ebt();
        if ((sHt(m.originalCwd), !z)) {
          (p(`Worktree could not be removed \u2014 kept at ${m.worktreePath}`), s("done"));
          return;
        }
        G("tengu_worktree_removed", {
          source: We("exit_dialog"),
          commits: c,
          changed_files: a.length,
        });
        let K = Y ? " Tmux session terminated." : "";
        if (c > 0 && a.length > 0)
          p(
            `Worktree removed. ${c} ${c === 1 ? "commit" : "commits"} and uncommitted changes were discarded.${K}`,
          );
        else if (c > 0)
          p(
            `Worktree removed. ${c} ${c === 1 ? "commit" : "commits"} on ${m.worktreeBranch} ${c === 1 ? "was" : "were"} discarded.${K}`,
          );
        else if (a.length > 0) p(`Worktree removed. Uncommitted changes were discarded.${K}`);
        else p(`Worktree removed.${K}`);
        s("done");
      }
    }),
      (t[10] = a),
      (t[11] = c),
      (t[12] = A));
  else A = t[12];
  let v = A;
  if (o === "keeping") {
    let W;
    if (t[13] === Symbol.for("react.memo_cache_sentinel"))
      ((W = ume.jsxs(U, {
        flexDirection: "row",
        marginY: 1,
        children: [
          ume.jsx(Vu, {}),
          ume.jsx(w, {
            children: "Keeping worktree\u2026",
          }),
        ],
      })),
        (t[13] = W));
    else W = t[13];
    return W;
  }
  if (o === "removing-clean" || o === "removing") {
    let W =
        o === "removing-clean"
          ? "Cleaning up worktree (no pending changes)\u2026"
          : "Removing worktree\u2026",
      V;
    if (t[14] === Symbol.for("react.memo_cache_sentinel")) ((V = ume.jsx(Vu, {})), (t[14] = V));
    else V = t[14];
    let Y;
    if (t[15] !== W)
      ((Y = ume.jsxs(U, {
        flexDirection: "row",
        marginY: 1,
        children: [
          V,
          ume.jsx(w, {
            children: W,
          }),
        ],
      })),
        (t[15] = W),
        (t[16] = Y));
    else Y = t[16];
    return Y;
  }
  let C = m.worktreeBranch,
    x = a.length > 0,
    I = c > 0,
    k;
  if (x && I)
    k = `You have ${a.length} uncommitted ${a.length === 1 ? "file" : "files"} and ${c} ${c === 1 ? "commit" : "commits"} on ${C}. All will be lost if you remove.`;
  else if (x)
    k = `You have ${a.length} uncommitted ${a.length === 1 ? "file" : "files"}. These will be lost if you remove the worktree.`;
  else if (I)
    k = `You have ${c} ${c === 1 ? "commit" : "commits"} on ${C}. The branch will be deleted if you remove the worktree.`;
  else if (h)
    k = `This session was named "${h}". Keep the worktree to resume it later, or remove it to clean up.`;
  else
    k =
      "You are working in a worktree. Keep it to continue working there, or remove it to clean up.";
  let D;
  if (t[17] !== v || t[18] !== r)
    ((D = function () {
      if (r) {
        r();
        return;
      }
      v("keep");
    }),
      (t[17] = v),
      (t[18] = r),
      (t[19] = D));
  else D = t[19];
  let P = D,
    O = x || I ? "All changes and commits will be lost." : "Clean up the worktree directory.",
    L = Boolean(m.tmuxSessionName),
    M;
  if (t[20] !== O)
    ((M = L
      ? [
          {
            label: "Keep worktree and tmux session",
            value: "keep-with-tmux",
            description: `Stays at ${m.worktreePath}. Reattach with: tmux attach -t ${m.tmuxSessionName}`,
          },
          {
            label: "Keep worktree, end tmux session",
            value: "keep-kill-tmux",
            description: `Keeps worktree at ${m.worktreePath}, terminates tmux session.`,
          },
          {
            label: "Remove worktree and tmux session",
            value: "remove-with-tmux",
            description: O,
          },
        ]
      : [
          {
            label: "Keep worktree",
            value: "keep",
            description: `Stays at ${m.worktreePath}`,
          },
          {
            label: "Remove worktree",
            value: "remove",
            description: O,
          },
        ]),
      (t[20] = O),
      (t[21] = M));
  else M = t[21];
  let N = M,
    B = L ? "keep-with-tmux" : "keep",
    $;
  if (t[22] !== v || t[23] !== N)
    (($ = ume.jsx(Sr, {
      defaultFocusValue: B,
      options: N,
      onChange: v,
    })),
      (t[22] = v),
      (t[23] = N),
      (t[24] = $));
  else $ = t[24];
  let q;
  if (t[25] !== P || t[26] !== k || t[27] !== $)
    ((q = ume.jsx(zn, {
      title: "Exiting worktree session",
      subtitle: k,
      onCancel: P,
      children: $,
    })),
      (t[25] = P),
      (t[26] = k),
      (t[27] = $),
      (t[28] = q));
  else q = t[28];
  return q;
}
function X8f(e) {
  return e.trim() !== "";
}
var tJl, nJl, M1e, ume;
