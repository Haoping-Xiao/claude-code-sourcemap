// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pGa
// matched 2.1.88 source: node_modules/protobufjs/ext/descriptor/index.js
// class=new  jaccard=0.0368  score=0.2089  fileCov=0.0427
// note: nearest: node_modules/protobufjs/ext/descriptor/index.js (0.0368); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module pGa] (exports=BS_, module=jjp)
var BS_ = {};
var jjp = {
  exports: BS_
};
jjp.exports = {
  nested: {
    google: {
      nested: {
        protobuf: {
          nested: {
            Api: {
              fields: {
                name: {
                  type: "string",
                  id: 1
                },
                methods: {
                  rule: "repeated",
                  type: "Method",
                  id: 2
                },
                options: {
                  rule: "repeated",
                  type: "Option",
                  id: 3
                },
                version: {
                  type: "string",
                  id: 4
                },
                sourceContext: {
                  type: "SourceContext",
                  id: 5
                },
                mixins: {
                  rule: "repeated",
                  type: "Mixin",
                  id: 6
                },
                syntax: {
                  type: "Syntax",
                  id: 7
                }
              }
            },
            Method: {
              fields: {
                name: {
                  type: "string",
                  id: 1
                },
                requestTypeUrl: {
                  type: "string",
                  id: 2
                },
                requestStreaming: {
                  type: "bool",
                  id: 3
                },
                responseTypeUrl: {
                  type: "string",
                  id: 4
                },
                responseStreaming: {
                  type: "bool",
                  id: 5
                },
                options: {
                  rule: "repeated",
                  type: "Option",
                  id: 6
                },
                syntax: {
                  type: "Syntax",
                  id: 7
                }
              }
            },
            Mixin: {
              fields: {
                name: {
                  type: "string",
                  id: 1
                },
                root: {
                  type: "string",
                  id: 2
                }
              }
            },
            SourceContext: {
              fields: {
                fileName: {
                  type: "string",
                  id: 1
                }
              }
            },
            Option: {
              fields: {
                name: {
                  type: "string",
                  id: 1
                },
                value: {
                  type: "Any",
                  id: 2
                }
              }
            },
            Syntax: {
              values: {
                SYNTAX_PROTO2: 0,
                SYNTAX_PROTO3: 1
              }
            }
          }
        }
      }
    }
  }
};