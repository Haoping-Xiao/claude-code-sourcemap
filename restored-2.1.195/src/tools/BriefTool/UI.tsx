// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l3
// matched 2.1.88 source: src/tools/BriefTool/UI.tsx
// class=modified  jaccard=0.2652  score=0.4507  fileCov=0.3918
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l3] deps: services/analytics/index.ts, services/analytics/growthbook.ts, main.tsx, utils/thinking.ts, tools/BriefTool/prompt.ts
gmf = `In brief mode, plain assistant text is hidden from the user \u2014 only ${j1} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function xyl() {
  return "";
}
function renderToolResultMessage(output, _progressMessages, options) {
  let r = (output.attachments?.length ?? 0) > 0;
  if (!output.message && !r) return null;
  if (options?.isTranscriptMode)
    return MT.jsxs(U, {
      flexDirection: "row",
      marginTop: 1,
      children: [
        MT.jsx(U, {
          minWidth: 2,
          children: MT.jsx(w, {
            color: "text",
            children: gc,
          }),
        }),
        MT.jsxs(U, {
          flexDirection: "column",
          children: [
            output.message
              ? MT.jsx(zg, {
                  children: output.message,
                })
              : null,
            MT.jsx(pzt, {
              attachments: output.attachments,
            }),
          ],
        }),
      ],
    });
  if (options?.isBriefOnly) {
    let o = output.sentAt ? Yzn(output.sentAt) : "";
    return MT.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      paddingLeft: 2,
      children: [
        MT.jsxs(U, {
          flexDirection: "row",
          children: [
            MT.jsx(w, {
              color: "briefLabelClaude",
              children: "Claude",
            }),
            o
              ? MT.jsxs(w, {
                  dimColor: true,
                  children: [" ", o],
                })
              : null,
          ],
        }),
        MT.jsxs(U, {
          flexDirection: "column",
          children: [
            output.message
              ? MT.jsx(zg, {
                  children: output.message,
                })
              : null,
            MT.jsx(pzt, {
              attachments: output.attachments,
            }),
          ],
        }),
      ],
    });
  }
  return MT.jsxs(U, {
    flexDirection: "row",
    marginTop: 1,
    children: [
      MT.jsx(wI, {
        fromLeftEdge: true,
        minWidth: 2,
        children: MT.jsx(w, {
          color: "text",
          children: gc,
        }),
      }),
      MT.jsxs(U, {
        flexDirection: "column",
        children: [
          output.message
            ? MT.jsx(zg, {
                children: output.message,
              })
            : null,
          MT.jsx(pzt, {
            attachments: output.attachments,
          }),
        ],
      }),
    ],
  });
}
function pzt(e) {
  let t = Iyl.c(4),
    { attachments: n } = e;
  if (!n || n.length === 0) return null;
  let r;
  if (t[0] !== n) ((r = n.map(_temp)), (t[0] = n), (t[1] = r));
  else r = t[1];
  let o;
  if (t[2] !== r)
    ((o = MT.jsx(U, {
      flexDirection: "column",
      marginTop: 1,
      children: r,
    })),
      (t[2] = r),
      (t[3] = o));
  else o = t[3];
  return o;
}
function _temp(att) {
  return MT.jsxs(
    U,
    {
      flexDirection: "row",
      children: [
        MT.jsxs(w, {
          dimColor: true,
          children: [nt.pointerSmall, " ", att.isImage ? "[image]" : "[file]", " "],
        }),
        MT.jsx(w, {
          children: kd(att.path),
        }),
        MT.jsxs(w, {
          dimColor: true,
          children: [" (", Ra(att.size), ")"],
        }),
      ],
    },
    att.file_uuid ?? att.path,
  );
}
var Iyl, MT;
