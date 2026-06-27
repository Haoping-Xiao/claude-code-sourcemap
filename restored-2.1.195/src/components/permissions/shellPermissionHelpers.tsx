// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QAc
// matched 2.1.88 source: src/components/permissions/shellPermissionHelpers.tsx
// class=modified  jaccard=0.2919  score=0.4699  fileCov=0.4351
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QAc] deps: ink/styles.ts, components/permissions/AskUserQuestionPermissionRequest/SubmitQuestionsView.tsx, components/permissions/AskUserQuestionPermissionRequest/use-multiple-choice-state.ts, components/permissions/AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx, components/CustomSelect/use-multi-select-state.ts, utils/plugins/pluginPolicy.ts, highlight.js/lib/languages/reasonml.js, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/debug.ts, context/notifications.tsx, hooks/toolPermission/permissionLogging.ts, utils/permissions/permissionSetup.ts, utils/imageResizer.ts, utils/processUserInput/processTextPrompt.ts, utils/sequential.ts, @xmldom/xmldom/lib/entities.js, hooks/usePasteHandler.ts, utils/permissions/filesystem.ts
((Xzo = R(lt(), 1)), (bpr = R(rt(), 1)), (atn = R(se(), 1)));
function n_m(e) {
  switch (e.length) {
    case 0:
      return "";
    case 1:
      return IA.jsx(w, {
        bold: true,
        children: e[0],
      });
    case 2:
      return IA.jsxs(w, {
        children: [
          IA.jsx(w, {
            bold: true,
            children: e[0],
          }),
          " and ",
          IA.jsx(w, {
            bold: true,
            children: e[1],
          }),
        ],
      });
    default:
      return IA.jsxs(w, {
        children: [
          IA.jsx(w, {
            bold: true,
            children: e.slice(0, -1).join(", "),
          }),
          ", and",
          " ",
          IA.jsx(w, {
            bold: true,
            children: e.slice(-1)[0],
          }),
        ],
      });
  }
}
function Jzo(e) {
  if (e.join(", ").length > 50) return "similar";
  return n_m(e);
}
function ltn(e) {
  if (e.length === 0) return "";
  let t = e.map((n) => DZ.basename(n) || n);
  if (t.length === 1)
    return IA.jsxs(w, {
      children: [
        IA.jsx(w, {
          bold: true,
          children: t[0],
        }),
        DZ.sep,
      ],
    });
  if (t.length === 2)
    return IA.jsxs(w, {
      children: [
        IA.jsx(w, {
          bold: true,
          children: t[0],
        }),
        DZ.sep,
        " and ",
        IA.jsx(w, {
          bold: true,
          children: t[1],
        }),
        DZ.sep,
      ],
    });
  return IA.jsxs(w, {
    children: [
      IA.jsx(w, {
        bold: true,
        children: t[0],
      }),
      DZ.sep,
      ", ",
      IA.jsx(w, {
        bold: true,
        children: t[1],
      }),
      DZ.sep,
      " and ",
      e.length - 2,
      " more",
    ],
  });
}
function generateShellSuggestionsLabel(suggestions, shellToolName, commandTransform) {
  let allRules = suggestions.filter((p) => p.type === "addRules").flatMap((p) => p.rules || []),
    readRules = allRules.filter((p) => p.toolName === "Read"),
    shellRules = allRules.filter((p) => p.toolName === shellToolName),
    directories = suggestions
      .filter((p) => p.type === "addDirectories")
      .flatMap((p) => p.directories || []),
    readPaths = readRules.map((p) => p.ruleContent?.replace("/**", "") || "").filter((p) => p),
    l = Uo(
      shellRules.flatMap((p) => {
        if (!p.ruleContent) return [];
        let f =
          p.ruleContent.endsWith(":*") || p.ruleContent.endsWith(" *")
            ? p.ruleContent.slice(0, -2)
            : p.ruleContent;
        return commandTransform ? commandTransform(f) : f;
      }),
    ),
    c = directories.length > 0,
    u = readPaths.length > 0,
    d = l.length > 0;
  if (u && !c && !d) {
    if (readPaths.length === 1) {
      let p = readPaths[0],
        f = DZ.basename(p) || p;
      return IA.jsxs(w, {
        children: [
          "Yes, allow reading from ",
          IA.jsx(w, {
            bold: true,
            children: f,
          }),
          DZ.sep,
          " from this project",
        ],
      });
    }
    return IA.jsxs(w, {
      children: ["Yes, allow reading from ", ltn(readPaths), " from this project"],
    });
  }
  if (c && !u && !d) {
    if (directories.length === 1) {
      let p = directories[0],
        f = DZ.basename(p) || p;
      return IA.jsxs(w, {
        children: [
          "Yes, and always allow access to ",
          IA.jsx(w, {
            bold: true,
            children: f,
          }),
          DZ.sep,
          " from this project",
        ],
      });
    }
    return IA.jsxs(w, {
      children: ["Yes, and always allow access to ", ltn(directories), " from this project"],
    });
  }
  if (d && !c && !u)
    return IA.jsxs(w, {
      children: [
        "Yes, and don't ask again for ",
        Jzo(l),
        " commands in",
        " ",
        IA.jsx(w, {
          bold: true,
          children: UAt(yr()),
        }),
      ],
    });
  if ((c || u) && !d) {
    let p = [...directories, ...readPaths];
    if (c && u)
      return IA.jsxs(w, {
        children: ["Yes, and always allow access to ", ltn(p), " from this project"],
      });
  }
  if ((c || u) && d) {
    let p = [...directories, ...readPaths];
    if (p.length === 1 && l.length === 1)
      return IA.jsxs(w, {
        children: ["Yes, and allow access to ", ltn(p), " and", " ", Jzo(l), " commands"],
      });
    return IA.jsxs(w, {
      children: ["Yes, and allow ", ltn(p), " access and", " ", Jzo(l), " commands"],
    });
  }
  return null;
}
var DZ, IA;
