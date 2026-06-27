// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cds
// matched 2.1.88 source: node_modules/ajv/dist/core.js
// class=new  jaccard=0.0201  score=0.3121  fileCov=0.021
// note: nearest: node_modules/ajv/dist/core.js (0.0201); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cds = Q((tQm, Sru) => {
  Sru.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [{
          format: "relative-json-pointer"
        }, {
          format: "json-pointer"
        }]
      }
    },
    additionalProperties: false
  };
});