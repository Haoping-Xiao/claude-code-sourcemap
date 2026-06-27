// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o6n
// matched 2.1.88 source: src/utils/notebook.ts
// class=modified  jaccard=0.631  score=0.7759  fileCov=0.7717
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var o6n = E(() => {
  ft();
  kt();
  Lo();
  Yf();
  _$();
  fn();
  xW();
  BGt();
  sr();
  J8n = require("fs/promises");
  UZp = /^data:([^;]+);base64,(.+)$/;
});
function GZp(e) {
  let t = 0;
  for (let n of e) {
    if (!n) continue;
    if (((t += (n.text?.length ?? 0) + (n.image?.image_data.length ?? 0)), t > jZp)) return true;
  }
  return false;
}
function xvo(e) {
  if (!e) return "";
  let t = Array.isArray(e) ? e.join("") : e,
    { truncatedContent: n } = Xel(t);
  return n;
}
function WZp(e) {
  for (let t of ["image/png", "image/jpeg"]) {
    let n = e[t];
    if (typeof n !== "string") continue;
    let r = n.replace(/\s/g, "");
    if (oX(Buffer.from(r, "base64")) === null) return;
    return {
      image_data: r,
      media_type: t,
    };
  }
  return;
}
function qZp(e) {
  switch (e.output_type) {
    case "stream":
      return {
        output_type: e.output_type,
        text: xvo(e.text),
      };
    case "execute_result":
    case "display_data":
      return {
        output_type: e.output_type,
        text: xvo(e.data?.["text/plain"]),
        image: e.data && WZp(e.data),
      };
    case "error":
      return {
        output_type: e.output_type,
        text: xvo(`${e.ename}: ${e.evalue}
${e.traceback.join(`
`)}`),
      };
  }
}
function Jel(e, t, n, r) {
  let o = e.id ?? `cell-${t}`,
    s = {
      cellType: e.cell_type,
      source: Array.isArray(e.source) ? e.source.join("") : e.source,
      execution_count: e.cell_type === "code" ? e.execution_count || void 0 : void 0,
      cell_id: o,
    };
  if (e.cell_type === "code") s.language = n;
  if (e.cell_type === "code" && e.outputs?.length) {
    let i = e.outputs.map(qZp);
    if (!r && GZp(i)) {
      let a = Su()
        ? `${Co} with: cat <notebook_path> | jq '.cells[${t}].outputs'`
        : `${Ss} with: Get-Content <notebook_path> | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -Index ${t} | Select-Object -ExpandProperty outputs`;
      s.outputs = [
        {
          output_type: "stream",
          text: `Outputs are too large to include. Use ${a}`,
        },
      ];
    } else s.outputs = i;
  }
  return s;
}
function VZp(e) {
  let t = [];
  if (e.cellType !== "code") t.push(`<cell_type>${e.cellType}</cell_type>`);
  if (e.language !== "python" && e.cellType === "code")
    t.push(`<language>${e.language}</language>`);
  return {
    text: `<cell id="${e.cell_id}">${t.join("")}${e.source}</cell id="${e.cell_id}">`,
    type: "text",
  };
}
function zZp(e) {
  let t = [];
  if (e.text)
    t.push({
      text: `
${e.text}`,
      type: "text",
    });
  if (e.image)
    t.push({
      type: "image",
      source: {
        data: e.image.image_data,
        media_type: e.image.media_type,
        type: "base64",
      },
    });
  return t;
}
function KZp(e) {
  let t = VZp(e),
    n = e.outputs?.flatMap(zZp);
  return [t, ...(n ?? [])];
}
async function Qel(e, t) {
  let n = ds(e),
    o = (await qt().readFileBytes(n)).toString("utf-8"),
    s;
  try {
    s = Ft(o);
  } catch (a) {
    throw new kvo(
      `Notebook file is not valid JSON (it may be truncated, corrupted, or still being written): ${a instanceof Error ? a.message : String(a)}`,
    );
  }
  if (!Array.isArray(s?.cells) || s.cells.some((a) => a === null || typeof a !== "object"))
    throw new kvo(
      'Notebook file is not a valid Jupyter notebook (top-level "cells" must be an array of cell objects).',
    );
  let i = s.metadata?.language_info?.name ?? "python";
  if (t) {
    let a = s.cells.find((l) => l.id === t);
    if (!a) throw Error(`Cell with ID "${t}" not found in notebook`);
    return [Jel(a, s.cells.indexOf(a), i, true)];
  }
  return s.cells.map((a, l) => Jel(a, l, i, false));
}
function Zel(e, t) {
  let n = e.flatMap(KZp);
  return {
    tool_use_id: t,
    type: "tool_result",
    content: n.reduce((r, o) => {
      if (r.length === 0) return [o];
      let s = r.at(-1);
      if (s && s.type === "text" && o.type === "text")
        return (
          (s.text +=
            `
` + o.text),
          r
        );
      return (r.push(o), r);
    }, []),
  };
}
function U9t(e) {
  let t = e.match(/^cell-(\d+)$/);
  if (t && t[1]) {
    let n = parseInt(t[1], 10);
    return isNaN(n) ? void 0 : n;
  }
  return;
}
var jZp = 10000 /* 1e4 */,
  kvo;
