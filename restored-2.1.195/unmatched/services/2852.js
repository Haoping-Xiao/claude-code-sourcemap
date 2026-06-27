// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H5e
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H5e = E(() => {
  Hca = require("os");
  Dcp = /[\w.+-]{1,64}@[\w-]{1,63}(?:\.[\w-]{1,63}){0,7}\.[A-Za-z][\w-]{0,62}/g;
  Mcp = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, $cp = /\b(?:[A-Fa-f0-9]{1,4}:){2,7}(?::?[A-Fa-f0-9]{1,4}){1,7}\b/g, Ocp = /^\d{1,2}:\d{2}:\d{2}$/;
  Bcp = /(^|[^\w/.-])((?:\+\d{1,3}[ \t.-]?)?\(?\d{2,4}\)?[ \t.-]\d{2,4}[ \t.-]\d{2,4}(?:[ \t.-]\d{2,4}(?![ \t.-]\d))?)(?!\w)/g, Ucp = /^\s*\d{4}[-.]\d{2}[-.]\d{2}(?:[ T]\d{1,2})?\s*$/, Fcp = /\+\d{7,15}\b/g;
  Gcp = [[/\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/gi, "Bearer <token>"], [/(:\s*)Basic\s+[A-Za-z0-9+/=]{8,}/gi, "$1Basic <token>"], [/\bsk-ant-[A-Za-z0-9_-]{8,}/g, "<token>"], [/\bsk-[A-Za-z0-9_-]{20,}/g, "<token>"], [/\bAKIA[0-9A-Z]{16}\b/g, "<token>"], [/\bASIA[0-9A-Z]{16}\b/g, "<token>"], [/\barn:(aws[\w-]*):([\w-]*):([\w-]*):\d*:[^\s"')\],]*/g, "arn:$1:$2:$3:<redacted>"], [/\bgh[opusr]_[A-Za-z0-9]{36,}/g, "<token>"], [/\bxox[baprs]-[A-Za-z0-9-]{10,}/g, "<token>"], [/\bey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, "<jwt>"], [/(?<![A-Za-z0-9+_-])(?!mcp__)(?=[a-z_]*[A-Z0-9+-])[A-Za-z0-9+_-]{40,}={0,2}\b/g, "<blob>"]];
  zcp = /\{\s*\\?["'](?:type\\?["']\s*:\s*\\?["']error|request_id\\?["']\s*:\s*\\?["']req_|error\\?["']\s*:\s*\{)[^]*/g;
});
async function Hut(e, t) {
  return;
}
var vao, Xcp, Jcp;