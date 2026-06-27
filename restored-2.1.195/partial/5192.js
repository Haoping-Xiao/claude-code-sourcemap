// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pec
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
// class=partial  jaccard=0.066  score=0.1877  fileCov=0.0923
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pec = E(() => {
  FKf = /^[A-Za-z0-9._-]{1,128}$/;
});
class j3o {
  constructor(e) {
    this._mcpServer = e;
  }
  registerToolTask(e, t, n) {
    let r = {
      taskSupport: "required",
      ...t.execution
    };
    if (r.taskSupport === "forbidden") throw Error(`Cannot register task-based tool '${e}' with taskSupport 'forbidden'. Use registerTool() instead.`);
    return this._mcpServer._createRegisteredTool(e, t.title, t.description, t.inputSchema, t.outputSchema, t.annotations, r, t._meta, n);
  }
}
class W3o {
  constructor(e, t) {
    this._registeredResources = {}, this._registeredResourceTemplates = {}, this._registeredTools = {}, this._registeredPrompts = {}, this._toolHandlersInitialized = !1, this._completionHandlerInitialized = !1, this._resourceHandlersInitialized = !1, this._promptHandlersInitialized = !1, this.server = new mhe(e, t);
  }
  get experimental() {
    if (!this._experimental) this._experimental = {
      tasks: new j3o(this)
    };
    return this._experimental;
  }
  async connect(e) {
    return await this.server.connect(e);
  }
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    if (this._toolHandlersInitialized) return;
    this.server.assertCanSetRequestHandler(B1e(XK)), this.server.assertCanSetRequestHandler(B1e(qV)), this.server.registerCapabilities({
      tools: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(XK, () => ({
      tools: Object.entries(this._registeredTools).filter(([, e]) => e.enabled).map(([e, t]) => {
        let n = {
          name: e,
          title: t.title,
          description: t.description,
          inputSchema: (() => {
            let r = PQe(t.inputSchema);
            return r ? Hwr(r, {
              strictUnions: !0,
              pipeStrategy: "input"
            }) : WKf;
          })(),
          annotations: t.annotations,
          execution: t.execution,
          _meta: t._meta
        };
        if (t.outputSchema) {
          let r = PQe(t.outputSchema);
          if (r) n.outputSchema = Hwr(r, {
            strictUnions: !0,
            pipeStrategy: "output"
          });
        }
        return n;
      })
    })), this.server.setRequestHandler(qV, async (e, t) => {
      try {
        let n = this._registeredTools[e.params.name];
        if (!n) throw new gi(Si.InvalidParams, `Tool ${e.params.name} not found`);
        if (!n.enabled) throw new gi(Si.InvalidParams, `Tool ${e.params.name} disabled`);
        let r = !!e.params.task,
          o = n.execution?.taskSupport,
          s = "createTask" in n.handler;
        if ((o === "required" || o === "optional") && !s) throw new gi(Si.InternalError, `Tool ${e.params.name} has taskSupport '${o}' but was not registered with registerToolTask`);
        if (o === "required" && !r) throw new gi(Si.MethodNotFound, `Tool ${e.params.name} requires task augmentation (taskSupport: 'required')`);
        if (o === "optional" && !r && s) return await this.handleAutomaticTaskPolling(n, e, t);
        let i = await this.validateToolInput(n, e.params.arguments, e.params.name),
          a = await this.executeToolHandler(n, i, t);
        if (r) return a;
        return await this.validateToolOutput(n, a, e.params.name), a;
      } catch (n) {
        if (n instanceof gi) {
          if (n.code === Si.UrlElicitationRequired) throw n;
        }
        return this.createToolError(n instanceof Error ? n.message : String(n));
      }
    }), this._toolHandlersInitialized = !0;
  }
  createToolError(e) {
    return {
      content: [{
        type: "text",
        text: e
      }],
      isError: !0
    };
  }
  async validateToolInput(e, t, n) {
    if (!e.inputSchema) return;
    let o = PQe(e.inputSchema) ?? e.inputSchema,
      s = await ecn(o, t);
    if (!s.success) {
      let i = "error" in s ? s.error : "Unknown error",
        a = tcn(i);
      throw new gi(Si.InvalidParams, `Input validation error: Invalid arguments for tool ${n}: ${a}`);
    }
    return s.data;
  }
  async validateToolOutput(e, t, n) {
    if (!e.outputSchema) return;
    if (!("content" in t)) return;
    if (t.isError) return;
    if (!t.structuredContent) throw new gi(Si.InvalidParams, `Output validation error: Tool ${n} has an output schema but no structured content was provided`);
    let r = PQe(e.outputSchema),
      o = await ecn(r, t.structuredContent);
    if (!o.success) {
      let s = "error" in o ? o.error : "Unknown error",
        i = tcn(s);
      throw new gi(Si.InvalidParams, `Output validation error: Invalid structured content for tool ${n}: ${i}`);
    }
  }
  async executeToolHandler(e, t, n) {
    let r = e.handler;
    if ("createTask" in r) {
      if (!n.taskStore) throw Error("No task store provided.");
      let s = {
        ...n,
        taskStore: n.taskStore
      };
      if (e.inputSchema) return await Promise.resolve(r.createTask(t, s));else return await Promise.resolve(r.createTask(s));
    }
    if (e.inputSchema) return await Promise.resolve(r(t, n));else return await Promise.resolve(r(n));
  }
  async handleAutomaticTaskPolling(e, t, n) {
    if (!n.taskStore) throw Error("No task store provided for task-capable tool.");
    let r = await this.validateToolInput(e, t.params.arguments, t.params.name),
      o = e.handler,
      s = {
        ...n,
        taskStore: n.taskStore
      },
      i = r ? await Promise.resolve(o.createTask(r, s)) : await Promise.resolve(o.createTask(s)),
      a = i.task.taskId,
      l = i.task,
      c = l.pollInterval ?? 5000;
    while (l.status !== "completed" && l.status !== "failed" && l.status !== "cancelled") {
      await new Promise(d => setTimeout(d, c));
      let u = await n.taskStore.getTask(a);
      if (!u) throw new gi(Si.InternalError, `Task ${a} not found during polling`);
      l = u;
    }
    return await n.taskStore.getTaskResult(a);
  }
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) return;
    this.server.assertCanSetRequestHandler(B1e(Bcn)), this.server.registerCapabilities({
      completions: {}
    }), this.server.setRequestHandler(Bcn, async e => {
      switch (e.params.ref.type) {
        case "ref/prompt":
          return kcs(e), this.handlePromptCompletion(e, e.params.ref);
        case "ref/resource":
          return Rcs(e), this.handleResourceCompletion(e, e.params.ref);
        default:
          throw new gi(Si.InvalidParams, `Invalid completion reference: ${e.params.ref}`);
      }
    }), this._completionHandlerInitialized = !0;
  }
  async handlePromptCompletion(e, t) {
    let n = this._registeredPrompts[t.name];
    if (!n) throw new gi(Si.InvalidParams, `Prompt ${t.name} not found`);
    if (!n.enabled) throw new gi(Si.InvalidParams, `Prompt ${t.name} disabled`);
    if (!n.argsSchema) return YJt;
    let o = cae(n.argsSchema)?.[e.params.argument.name];
    if (!U3o(o)) return YJt;
    let s = uec(o);
    if (!s) return YJt;
    let i = await s(e.params.argument.value, e.params.context);
    return mec(i);
  }
  async handleResourceCompletion(e, t) {
    let n = Object.values(this._registeredResourceTemplates).find(s => s.resourceTemplate.uriTemplate.toString() === t.uri);
    if (!n) {
      if (this._registeredResources[t.uri]) return YJt;
      throw new gi(Si.InvalidParams, `Resource template ${e.params.ref.uri} not found`);
    }
    let r = n.resourceTemplate.completeCallback(e.params.argument.name);
    if (!r) return YJt;
    let o = await r(e.params.argument.value, e.params.context);
    return mec(o);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) return;
    this.server.assertCanSetRequestHandler(B1e(Pcn)), this.server.assertCanSetRequestHandler(B1e(Mcn)), this.server.assertCanSetRequestHandler(B1e($cn)), this.server.registerCapabilities({
      resources: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(Pcn, async (e, t) => {
      let n = Object.entries(this._registeredResources).filter(([o, s]) => s.enabled).map(([o, s]) => ({
          uri: o,
          name: s.name,
          ...s.metadata
        })),
        r = [];
      for (let o of Object.values(this._registeredResourceTemplates)) {
        if (!o.resourceTemplate.listCallback) continue;
        let s = await o.resourceTemplate.listCallback(t);
        for (let i of s.resources) r.push({
          ...o.metadata,
          ...i
        });
      }
      return {
        resources: [...n, ...r]
      };
    }), this.server.setRequestHandler(Mcn, async () => ({
      resourceTemplates: Object.entries(this._registeredResourceTemplates).map(([t, n]) => ({
        name: t,
        uriTemplate: n.resourceTemplate.uriTemplate.toString(),
        ...n.metadata
      }))
    })), this.server.setRequestHandler($cn, async (e, t) => {
      let n = new URL(e.params.uri),
        r = this._registeredResources[n.toString()];
      if (r) {
        if (!r.enabled) throw new gi(Si.InvalidParams, `Resource ${n} disabled`);
        return r.readCallback(n, t);
      }
      for (let o of Object.values(this._registeredResourceTemplates)) {
        let s = o.resourceTemplate.uriTemplate.match(n.toString());
        if (s) return o.readCallback(n, s, t);
      }
      throw new gi(Si.InvalidParams, `Resource ${n} not found`);
    }), this._resourceHandlersInitialized = !0;
  }
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) return;
    this.server.assertCanSetRequestHandler(B1e(Ocn)), this.server.assertCanSetRequestHandler(B1e(Ncn)), this.server.registerCapabilities({
      prompts: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(Ocn, () => ({
      prompts: Object.entries(this._registeredPrompts).filter(([, e]) => e.enabled).map(([e, t]) => ({
        name: e,
        title: t.title,
        description: t.description,
        arguments: t.argsSchema ? qKf(t.argsSchema) : void 0
      }))
    })), this.server.setRequestHandler(Ncn, async (e, t) => {
      let n = this._registeredPrompts[e.params.name];
      if (!n) throw new gi(Si.InvalidParams, `Prompt ${e.params.name} not found`);
      if (!n.enabled) throw new gi(Si.InvalidParams, `Prompt ${e.params.name} disabled`);
      if (n.argsSchema) {
        let r = PQe(n.argsSchema),
          o = await ecn(r, e.params.arguments);
        if (!o.success) {
          let a = "error" in o ? o.error : "Unknown error",
            l = tcn(a);
          throw new gi(Si.InvalidParams, `Invalid arguments for prompt ${e.params.name}: ${l}`);
        }
        let s = o.data,
          i = n.callback;
        return await Promise.resolve(i(s, t));
      } else {
        let r = n.callback;
        return await Promise.resolve(r(t));
      }
    }), this._promptHandlersInitialized = !0;
  }
  resource(e, t, ...n) {
    let r;
    if (typeof n[0] === "object") r = n.shift();
    let o = n[0];
    if (typeof t === "string") {
      if (this._registeredResources[t]) throw Error(`Resource ${t} is already registered`);
      let s = this._createRegisteredResource(e, void 0, t, r, o);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), s;
    } else {
      if (this._registeredResourceTemplates[e]) throw Error(`Resource template ${e} is already registered`);
      let s = this._createRegisteredResourceTemplate(e, void 0, t, r, o);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), s;
    }
  }
  registerResource(e, t, n, r) {
    if (typeof t === "string") {
      if (this._registeredResources[t]) throw Error(`Resource ${t} is already registered`);
      let o = this._createRegisteredResource(e, n.title, t, n, r);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), o;
    } else {
      if (this._registeredResourceTemplates[e]) throw Error(`Resource template ${e} is already registered`);
      let o = this._createRegisteredResourceTemplate(e, n.title, t, n, r);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), o;
    }
  }
  _createRegisteredResource(e, t, n, r, o) {
    let s = {
      name: e,
      title: t,
      metadata: r,
      readCallback: o,
      enabled: !0,
      disable: () => s.update({
        enabled: !1
      }),
      enable: () => s.update({
        enabled: !0
      }),
      remove: () => s.update({
        uri: null
      }),
      update: i => {
        if (typeof i.uri < "u" && i.uri !== n) {
          if (delete this._registeredResources[n], i.uri) this._registeredResources[i.uri] = s;
        }
        if (typeof i.name < "u") s.name = i.name;
        if (typeof i.title < "u") s.title = i.title;
        if (typeof i.metadata < "u") s.metadata = i.metadata;
        if (typeof i.callback < "u") s.readCallback = i.callback;
        if (typeof i.enabled < "u") s.enabled = i.enabled;
        this.sendResourceListChanged();
      }
    };
    return this._registeredResources[n] = s, s;
  }
  _createRegisteredResourceTemplate(e, t, n, r, o) {
    let s = {
      resourceTemplate: n,
      title: t,
      metadata: r,
      readCallback: o,
      enabled: !0,
      disable: () => s.update({
        enabled: !1
      }),
      enable: () => s.update({
        enabled: !0
      }),
      remove: () => s.update({
        name: null
      }),
      update: l => {
        if (typeof l.name < "u" && l.name !== e) {
          if (delete this._registeredResourceTemplates[e], l.name) this._registeredResourceTemplates[l.name] = s;
        }
        if (typeof l.title < "u") s.title = l.title;
        if (typeof l.template < "u") s.resourceTemplate = l.template;
        if (typeof l.metadata < "u") s.metadata = l.metadata;
        if (typeof l.callback < "u") s.readCallback = l.callback;
        if (typeof l.enabled < "u") s.enabled = l.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResourceTemplates[e] = s;
    let i = n.uriTemplate.variableNames;
    if (Array.isArray(i) && i.some(l => !!n.completeCallback(l))) this.setCompletionRequestHandler();
    return s;
  }
  _createRegisteredPrompt(e, t, n, r, o) {
    let s = {
      title: t,
      description: n,
      argsSchema: r === void 0 ? void 0 : GUe(r),
      callback: o,
      enabled: !0,
      disable: () => s.update({
        enabled: !1
      }),
      enable: () => s.update({
        enabled: !0
      }),
      remove: () => s.update({
        name: null
      }),
      update: i => {
        if (typeof i.name < "u" && i.name !== e) {
          if (delete this._registeredPrompts[e], i.name) this._registeredPrompts[i.name] = s;
        }
        if (typeof i.title < "u") s.title = i.title;
        if (typeof i.description < "u") s.description = i.description;
        if (typeof i.argsSchema < "u") s.argsSchema = GUe(i.argsSchema);
        if (typeof i.callback < "u") s.callback = i.callback;
        if (typeof i.enabled < "u") s.enabled = i.enabled;
        this.sendPromptListChanged();
      }
    };
    if (this._registeredPrompts[e] = s, r) {
      if (Object.values(r).some(a => {
        let l = a instanceof FV ? a._def?.innerType : a;
        return U3o(l);
      })) this.setCompletionRequestHandler();
    }
    return s;
  }
  _createRegisteredTool(e, t, n, r, o, s, i, a, l) {
    F3o(e);
    let c = {
      title: t,
      description: n,
      inputSchema: fec(r),
      outputSchema: fec(o),
      annotations: s,
      execution: i,
      _meta: a,
      handler: l,
      enabled: !0,
      disable: () => c.update({
        enabled: !1
      }),
      enable: () => c.update({
        enabled: !0
      }),
      remove: () => c.update({
        name: null
      }),
      update: u => {
        if (typeof u.name < "u" && u.name !== e) {
          if (typeof u.name === "string") F3o(u.name);
          if (delete this._registeredTools[e], u.name) this._registeredTools[u.name] = c;
        }
        if (typeof u.title < "u") c.title = u.title;
        if (typeof u.description < "u") c.description = u.description;
        if (typeof u.paramsSchema < "u") c.inputSchema = GUe(u.paramsSchema);
        if (typeof u.outputSchema < "u") c.outputSchema = GUe(u.outputSchema);
        if (typeof u.callback < "u") c.handler = u.callback;
        if (typeof u.annotations < "u") c.annotations = u.annotations;
        if (typeof u._meta < "u") c._meta = u._meta;
        if (typeof u.enabled < "u") c.enabled = u.enabled;
        this.sendToolListChanged();
      }
    };
    return this._registeredTools[e] = c, this.setToolRequestHandlers(), this.sendToolListChanged(), c;
  }
  tool(e, ...t) {
    if (this._registeredTools[e]) throw Error(`Tool ${e} is already registered`);
    let n, r, o, s;
    if (typeof t[0] === "string") n = t.shift();
    if (t.length > 1) {
      let a = t[0];
      if (G3o(a)) {
        if (r = t.shift(), t.length > 1 && typeof t[0] === "object" && t[0] !== null && !G3o(t[0])) s = t.shift();
      } else if (typeof a === "object" && a !== null) {
        if (Object.values(a).some(l => typeof l === "object" && l !== null)) throw Error(`Tool ${e} expected a Zod schema or ToolAnnotations, but received an unrecognized object`);
        s = t.shift();
      }
    }
    let i = t[0];
    return this._createRegisteredTool(e, void 0, n, r, o, s, {
      taskSupport: "forbidden"
    }, void 0, i);
  }
  registerTool(e, t, n) {
    if (this._registeredTools[e]) throw Error(`Tool ${e} is already registered`);
    let {
      title: r,
      description: o,
      inputSchema: s,
      outputSchema: i,
      annotations: a,
      _meta: l
    } = t;
    return this._createRegisteredTool(e, r, o, s, i, a, {
      taskSupport: "forbidden"
    }, l, n);
  }
  prompt(e, ...t) {
    if (this._registeredPrompts[e]) throw Error(`Prompt ${e} is already registered`);
    let n;
    if (typeof t[0] === "string") n = t.shift();
    let r;
    if (t.length > 1) r = t.shift();
    let o = t[0],
      s = this._createRegisteredPrompt(e, void 0, n, r, o);
    return this.setPromptRequestHandlers(), this.sendPromptListChanged(), s;
  }
  registerPrompt(e, t, n) {
    if (this._registeredPrompts[e]) throw Error(`Prompt ${e} is already registered`);
    let {
        title: r,
        description: o,
        argsSchema: s
      } = t,
      i = this._createRegisteredPrompt(e, r, o, s, n);
    return this.setPromptRequestHandlers(), this.sendPromptListChanged(), i;
  }
  isConnected() {
    return this.server.transport !== void 0;
  }
  async sendLoggingMessage(e, t) {
    return this.server.sendLoggingMessage(e, t);
  }
  sendResourceListChanged() {
    if (this.isConnected()) this.server.sendResourceListChanged();
  }
  sendToolListChanged() {
    if (this.isConnected()) this.server.sendToolListChanged();
  }
  sendPromptListChanged() {
    if (this.isConnected()) this.server.sendPromptListChanged();
  }
}
function gec(e) {
  return e !== null && typeof e === "object" && "parse" in e && typeof e.parse === "function" && "safeParse" in e && typeof e.safeParse === "function";
}
function hec(e) {
  return "_def" in e || "_zod" in e || gec(e);
}
function G3o(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (hec(e)) return !1;
  if (Object.keys(e).length === 0) return !0;
  return Object.values(e).some(gec);
}
function fec(e) {
  if (!e) return;
  if (G3o(e)) return GUe(e);
  if (!hec(e)) throw Error("inputSchema must be a Zod schema or raw shape, received an unrecognized object");
  return e;
}
function qKf(e) {
  let t = cae(e);
  if (!t) return [];
  return Object.entries(t).map(([n, r]) => {
    let o = wls(r),
      s = Cls(r);
    return {
      name: n,
      description: o,
      required: !s
    };
  });
}
function B1e(e) {
  let n = cae(e)?.method;
  if (!n) throw Error("Schema is missing a method literal");
  let r = ncn(n);
  if (typeof r === "string") return r;
  throw Error("Schema method literal must be a string");
}
function mec(e) {
  return {
    completion: {
      values: e.slice(0, 100),
      total: e.length,
      hasMore: e.length > 100
    }
  };
}
var WKf, YJt;