// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ntc
// matched 2.1.88 source: src/components/agents/AgentsMenu.tsx
// class=modified (alt of src/components/agents/AgentsMenu.tsx)  jaccard=0.025  score=0.0451  fileCov=0.0533
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ntc] deps: ft, lH, Vl, Fy, vi, TVt, gm, iQt, VQ, zOe, Qir, Ye, er, At, vn, Jbe
((bGo = R(lt(), 1)), (pTe = require("path")), (xYe = R(rt(), 1)), (Zq = R(se(), 1)));
function Btc(e) {
  if (e === "~" || e.startsWith("~/")) return Ftc.homedir() + e.slice(1);
  return e;
}
async function jtc() {
  let [e, t] = await Promise.all([
    hHt().catch((n) => (ke(n), [])),
    uR()
      .then((n) => n !== null)
      .catch(() => false),
  ]);
  return {
    tasks: e,
    daemonAlive: t,
  };
}
function Gtc({ task: e, onBack: t, onEdit: n, onDone: r, refresh: o }) {
  let [s, i] = EHt.useState(false),
    [a, l] = EHt.useState(false);
  async function c() {
    if (s) return;
    i(true);
    try {
      (await XJt(
        b7f({
          ...e,
          enabled: !e.enabled,
        }),
      ),
        await o(),
        r(`${e.enabled ? "Disabled" : "Enabled"} scheduled task '${e.id}'.`, {
          display: "system",
        }));
    } catch (p) {
      (ke(p),
        r(`Toggle failed: ${be(p)}`, {
          display: "system",
        }));
    }
  }
  async function u() {
    if (s) return;
    i(true);
    try {
      (await JJt(e.id),
        await o(),
        r(`Removed scheduled task '${e.id}'.`, {
          display: "system",
        }));
    } catch (p) {
      (T(`Failed to remove scheduled task '${e.id}' from daemon.json: ${be(p)}`, {
        level: "error",
      }),
        r(`Remove failed: ${be(p)}`, {
          display: "system",
        }));
    }
  }
  if (a)
    return YN.jsx(zn, {
      title: "Remove task?",
      subtitle: `Delete '${e.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`,
      onCancel: () => l(false),
      color: "error",
      children: YN.jsx(Kl, {
        cancelFirst: true,
        focus: "cancel",
        confirmLabel: "Yes, remove",
        cancelLabel: "No, cancel",
        onConfirm: () => void u(),
        onCancel: () => l(false),
      }),
    });
  let d = [
    {
      label: e.enabled ? "Disable" : "Enable",
      value: "toggle",
    },
    {
      label: "Edit",
      value: "edit",
    },
    {
      label: "Remove",
      value: "remove",
    },
    {
      label: "Back",
      value: "back",
    },
  ];
  return YN.jsxs(zn, {
    title: e.id,
    onCancel: t,
    children: [
      YN.jsxs(U, {
        flexDirection: "column",
        marginBottom: 1,
        children: [
          YN.jsxs(w, {
            dimColor: true,
            children: ["Cron ", e.cron, " (", r$(e.cron), ")"],
          }),
          YN.jsxs(w, {
            dimColor: true,
            children: ["Directory ", e.directory],
          }),
          YN.jsxs(w, {
            dimColor: true,
            children: ["Prompt ", e.prompt],
          }),
          YN.jsxs(w, {
            dimColor: true,
            children: [
              "Status",
              " ",
              YN.jsx(Hs, {
                status: e.enabled ? "success" : "pending",
                withSpace: true,
              }),
              e.enabled ? "enabled" : "disabled",
            ],
          }),
          YN.jsxs(w, {
            dimColor: true,
            children: ["Mode ", e.permissionMode],
          }),
          e.model &&
            YN.jsxs(w, {
              dimColor: true,
              children: ["Model ", e.model],
            }),
          YN.jsxs(w, {
            dimColor: true,
            children: ["Timeout ", e.runTimeoutMinutes, "m"],
          }),
          YN.jsxs(w, {
            dimColor: true,
            children: ["Max queue ", e.maxQueued],
          }),
        ],
      }),
      YN.jsx(Sr, {
        options: d,
        isDisabled: s,
        onChange: (p) => {
          if (p === "back") return t();
          if (p === "edit") return n(e);
          if (p === "remove") return l(true);
          if (p === "toggle") return void c();
        },
        onCancel: t,
      }),
    ],
  });
}
function Wtc({
  defaultDir: e,
  existingIds: t,
  prefill: n,
  modelOptions: r = [
    {
      label: "default",
      value: "",
    },
  ],
  onCancel: o,
  onDone: s,
  onSaved: i,
}) {
  let a = n !== void 0,
    l = a ? t.filter((_) => _ !== n.id) : t,
    [c, u] = EHt.useState({
      prompt: n?.prompt ?? "",
      schedule: n?.cron ?? "",
      dir: n?.directory ?? e,
      id: n?.id ?? "",
      permissionMode: n?.permissionMode ?? "dontAsk",
      model: n?.model ?? "",
    }),
    [d, p] = EHt.useState(a),
    [f, m] = EHt.useState(false);
  function g(_, S) {
    if (_ === "id") p(true);
    u((A) => {
      if (A[_] === S) return A;
      let v = {
        ...A,
        [_]: S,
      };
      if (_ !== "id" && !d && (_ === "prompt" || _ === "dir"))
        v.id = Utc(aQt.resolve(Btc(v.dir?.trim() || e)), v.prompt ?? "");
      return v;
    });
  }
  let h =
      n?.model && !r.some((_) => _.value === n.model)
        ? [
            ...r,
            {
              label: n.model,
              value: n.model,
            },
          ]
        : r,
    y = [
      {
        type: "text",
        key: "prompt",
        label: "Prompt",
        placeholder: "/babysit-prs",
        required: true,
        hint: () => "Sent to Claude on each fire. Slash commands work.",
      },
      {
        type: "text",
        key: "schedule",
        label: "Schedule",
        placeholder: "5m, 2h, 1d  or  */15 * * * *",
        required: true,
        validate: (_) => (_.trim() === "" ? null : (Hct(_).error ?? null)),
        hint: (_) => {
          if (_.trim() === "") return;
          let S = Hct(_);
          return S.error ? void 0 : `${S.human} \xB7 ${S.cron}`;
        },
      },
      {
        type: "text",
        key: "dir",
        label: "Directory",
        placeholder: e,
      },
      {
        type: "text",
        key: "id",
        label: "Id",
        validate: (_) => {
          let S = _.trim();
          if (S !== "" && l.includes(S)) return `id '${S}' is already in use`;
          return null;
        },
        hint: () => (d ? void 0 : "Auto-generated from prompt and directory."),
      },
      {
        type: "select",
        key: "permissionMode",
        label: "Permission mode",
        options: gHt.map((_) => ({
          label: _,
          value: _,
        })),
      },
      {
        type: "select",
        key: "model",
        label: "Model",
        options: h,
        hint: (_) =>
          h.find((S) => S.value === _)?.description ??
          (_ === "" ? "Uses your configured default model." : void 0),
      },
    ];
  async function b() {
    if (f) return;
    m(true);
    let _ = aQt.resolve(Btc(c.dir?.trim() || e)),
      S = Hct(c.schedule ?? "");
    if (S.cron === void 0) {
      m(false);
      return;
    }
    let A = c.id?.trim() || Utc(_, c.prompt?.trim() ?? ""),
      v = c.permissionMode ?? "dontAsk",
      C = c.model?.trim() || void 0,
      x = {
        id: A,
        cron: S.cron,
        prompt: c.prompt.trim(),
        directory: _,
        enabled: n?.enabled ?? true,
        permissionMode: v,
        runTimeoutMinutes: n?.runTimeoutMinutes ?? 30,
        maxQueued: n?.maxQueued ?? 1,
        ...(C && {
          model: C,
        }),
      };
    try {
      if (a && n.id !== A) await JJt(n.id);
      (await XJt(x), await i(A, a));
    } catch (I) {
      (ke(I),
        s(`Save failed: ${be(I)}`, {
          display: "system",
        }));
    }
  }
  return YN.jsx(qPe, {
    title: a ? `Edit '${n.id}'` : "New scheduled task",
    subtitle: "Fire a prompt on a recurring schedule",
    fields: y,
    values: c,
    onChange: g,
    onSubmit: () => void b(),
    onCancel: o,
    submitLabel: a ? "Save changes" : "Create task",
  });
}
function lQt(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}
function Utc(e, t) {
  let n = lQt(aQt.basename(e)),
    r = lQt(t.split(/\s+/).slice(0, 4).join(" "));
  return [n, r].filter(Boolean).join("-") || "task";
}
function b7f(e) {
  return {
    id: e.id,
    cron: e.cron,
    prompt: e.prompt,
    directory: e.directory,
    enabled: e.enabled,
    permissionMode: e.permissionMode,
    runTimeoutMinutes: e.runTimeoutMinutes,
    maxQueued: e.maxQueued,
    ...(e.model && {
      model: e.model,
    }),
  };
}
var _7f, Ftc, aQt, EHt, YN;
