// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o6n
// matched 2.1.88 source: src/utils/notebook.ts
// class=modified  jaccard=0.5279  score=0.8515  fileCov=0.5814
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module o6n] deps: services/analytics/index.ts, utils/debug.ts, utils/fsOperations.ts, utils/task/diskOutput.ts, utils/Shell.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/imageResizer.ts, BGt, services/teamMemorySync/secretScanner.ts
J8n = require("fs/promises");
UZp = /^data:([^;]+);base64,(.+)$/;
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
function extractImage(data) {
  for (let t of ["image/png", "image/jpeg"]) {
    let n = data[t];
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
function processOutput(output) {
  switch (output.output_type) {
    case "stream":
      return {
        output_type: output.output_type,
        text: xvo(output.text),
      };
    case "execute_result":
    case "display_data":
      return {
        output_type: output.output_type,
        text: xvo(output.data?.["text/plain"]),
        image: output.data && extractImage(output.data),
      };
    case "error":
      return {
        output_type: output.output_type,
        text: xvo(`${output.ename}: ${output.evalue}
${output.traceback.join(`
`)}`),
      };
  }
}
function processCell(cell, index, codeLanguage, includeLargeOutputs) {
  let o = cell.id ?? `cell-${index}`,
    s = {
      cellType: cell.cell_type,
      source: Array.isArray(cell.source) ? cell.source.join("") : cell.source,
      execution_count: cell.cell_type === "code" ? cell.execution_count || void 0 : void 0,
      cell_id: o,
    };
  if (cell.cell_type === "code") s.language = codeLanguage;
  if (cell.cell_type === "code" && cell.outputs?.length) {
    let i = cell.outputs.map(processOutput);
    if (!includeLargeOutputs && GZp(i)) {
      let a = Su()
        ? `${Co} with: cat <notebook_path> | jq '.cells[${index}].outputs'`
        : `${Ss} with: Get-Content <notebook_path> | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -Index ${index} | Select-Object -ExpandProperty outputs`;
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
function cellContentToToolResult(cell) {
  let t = [];
  if (cell.cellType !== "code") t.push(`<cell_type>${cell.cellType}</cell_type>`);
  if (cell.language !== "python" && cell.cellType === "code")
    t.push(`<language>${cell.language}</language>`);
  return {
    text: `<cell id="${cell.cell_id}">${t.join("")}${cell.source}</cell id="${cell.cell_id}">`,
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
  let t = cellContentToToolResult(e),
    n = e.outputs?.flatMap(zZp);
  return [t, ...(n ?? [])];
}
async function readNotebook(notebookPath, cellId) {
  let n = ds(notebookPath),
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
  if (cellId) {
    let a = s.cells.find((l) => l.id === cellId);
    if (!a) throw Error(`Cell with ID "${cellId}" not found in notebook`);
    return [processCell(a, s.cells.indexOf(a), i, true)];
  }
  return s.cells.map((a, l) => processCell(a, l, i, false));
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
