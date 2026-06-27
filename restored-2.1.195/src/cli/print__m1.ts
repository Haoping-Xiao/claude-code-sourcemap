// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OZl
// matched 2.1.88 source: src/cli/print.ts
// class=modified (alt of src/cli/print.ts)  jaccard=0.0777  score=0.3269  fileCov=0.0925
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var OZl = E(() => {
  qee();
  Jt();
  eLe();
  dn();
  kt();
  Won();
  je();
  At();
  $Zl = Symbol("suppressControlResponse");
  R3o = class R3o {
    transport;
    isSingleUserTurn;
    canUseTool;
    hooks;
    abortController;
    jsonSchema;
    initConfig;
    onElicitation;
    getOAuthToken;
    getHostAuthToken;
    onUserDialog;
    pendingControlResponses = new Map();
    cleanupPerformed = false;
    sdkMessages;
    inputStream = new E4();
    initialization;
    cancelControllers = new Map();
    hookCallbacks = new Map();
    nextCallbackId = 0;
    initHooksPayload;
    sdkMcpTransports = new Map();
    sdkMcpServerInstances = new Map();
    pendingMcpResponses = new Map();
    firstResultReceivedResolve;
    firstResultReceived = false;
    lastErrorResultText;
    transcriptMirrorBatcher;
    cleanupCallbacks = [];
    cleanupPromise;
    setIsSingleUserTurn(e) {
      this.isSingleUserTurn = e;
    }
    setTranscriptMirrorBatcher(e) {
      this.transcriptMirrorBatcher = e;
    }
    reportMirrorError(e, t) {
      let n = {
        type: "system",
        subtype: "mirror_error",
        error: t,
        key: e,
        uuid: Age.randomUUID(),
        session_id: e.sessionId,
      };
      this.inputStream.enqueue(n);
    }
    addCleanupCallback(e) {
      if (this.cleanupPerformed) e();
      else this.cleanupCallbacks.push(e);
    }
    isClosed() {
      return this.cleanupPerformed;
    }
    hasBidirectionalNeeds() {
      return (
        this.sdkMcpTransports.size > 0 ||
        (this.hooks !== void 0 && Object.keys(this.hooks).length > 0) ||
        this.canUseTool !== void 0 ||
        this.onElicitation !== void 0 ||
        this.onUserDialog !== void 0 ||
        this.getOAuthToken !== void 0 ||
        this.getHostAuthToken !== void 0
      );
    }
    constructor(e, t, n, r, o, s = new Map(), i, a, l, c, u, d) {
      this.transport = e;
      this.isSingleUserTurn = t;
      this.canUseTool = n;
      this.hooks = r;
      this.abortController = o;
      this.jsonSchema = i;
      this.initConfig = a;
      this.onElicitation = l;
      this.getOAuthToken = c;
      this.getHostAuthToken = u;
      this.onUserDialog = d;
      for (let [p, f] of s) this.connectSdkMcpServer(p, f);
      ((this.sdkMessages = this.readSdkMessages()),
        this.readMessages(),
        (this.initialization = this.initialize()),
        this.initialization.catch(() => {}));
    }
    setError(e) {
      this.inputStream.error(e);
    }
    async stopTask(e) {
      await this.request({
        subtype: "stop_task",
        task_id: e,
      });
    }
    async backgroundTasks(e) {
      return (
        (
          await this.request({
            subtype: "background_tasks",
            tool_use_id: e,
          })
        ).response.backgrounded ?? true
      );
    }
    close() {
      this.cleanup();
    }
    cleanup(e) {
      if (this.cleanupPromise) return this.cleanupPromise;
      return (
        (this.cleanupPerformed = true),
        (this.cleanupPromise = this.performCleanup(e)),
        this.cleanupPromise
      );
    }
    async performCleanup(e) {
      for (let t of this.cleanupCallbacks)
        try {
          t();
        } catch {}
      if (((this.cleanupCallbacks = []), this.transcriptMirrorBatcher))
        try {
          await this.transcriptMirrorBatcher.flush();
        } catch {}
      try {
        for (let n of this.cancelControllers.values()) n.abort();
        (this.cancelControllers.clear(), this.transport.close());
        let t = e ?? Error("Query closed before response received");
        for (let { reject: n } of this.pendingControlResponses.values()) n(t);
        this.pendingControlResponses.clear();
        for (let { reject: n } of this.pendingMcpResponses.values()) n(t);
        (this.pendingMcpResponses.clear(), this.hookCallbacks.clear());
        for (let n of this.sdkMcpTransports.values()) n.close().catch(() => {});
        if ((this.sdkMcpTransports.clear(), e)) this.inputStream.error(e);
        else this.inputStream.done();
      } catch (t) {}
      if (this.transport.waitForExit) {
        let t = new AbortController();
        try {
          await Promise.race([this.transport.waitForExit(), Nn(2000, t.signal)]);
        } catch {
        } finally {
          t.abort();
        }
      }
    }
    next(...[e]) {
      return this.sdkMessages.next(...[e]);
    }
    async return(e) {
      return (await this.cleanup(), this.sdkMessages.return(e));
    }
    async throw(e) {
      return (await this.cleanup(), this.sdkMessages.throw(e));
    }
    [Symbol.asyncIterator]() {
      return this.sdkMessages;
    }
    async [Symbol.asyncDispose]() {
      await this.cleanup();
    }
    async readMessages() {
      try {
        for await (let e of this.transport.readMessages()) {
          if (e.type === "control_response") {
            let t = this.pendingControlResponses.get(e.response.request_id);
            if (t) t.handler(e.response);
            continue;
          } else if (e.type === "control_request") {
            this.handleControlRequest(e);
            continue;
          } else if (e.type === "control_cancel_request") {
            this.handleControlCancelRequest(e);
            continue;
          } else if (e.type === "keep_alive") continue;
          else if (e.type === "transcript_mirror") {
            this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
            continue;
          }
          if (
            e.type === "system" &&
            (e.subtype === "post_turn_summary" || e.subtype === "task_summary")
          ) {
            this.inputStream.enqueue(e);
            continue;
          }
          if (e.type === "result") {
            if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
            if (
              ((this.lastErrorResultText = e.is_error
                ? e.subtype === "success"
                  ? e.result
                  : e.errors.join("; ")
                : void 0),
              (this.firstResultReceived = true),
              this.firstResultReceivedResolve)
            )
              this.firstResultReceivedResolve();
            if (this.isSingleUserTurn)
              (T("[Query.readMessages] First result received for single-turn query, closing stdin"),
                this.transport.endInput());
          } else if (!(e.type === "system" && e.subtype === "session_state_changed"))
            this.lastErrorResultText = void 0;
          this.inputStream.enqueue(e);
        }
        if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
        if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
        (this.inputStream.done(), this.cleanup());
      } catch (e) {
        if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
        if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
        if (this.lastErrorResultText !== void 0 && !(e instanceof WO)) {
          let t = Error(`Claude Code returned an error result: ${this.lastErrorResultText}`);
          (T(`[Query.readMessages] Replacing exit error with result text. Original: ${be(e)}`),
            this.inputStream.error(t),
            this.cleanup(t));
          return;
        }
        (this.inputStream.error(e), this.cleanup(e));
      }
    }
    async handleControlRequest(e) {
      if (this.cancelControllers.has(e.request_id)) {
        T(
          `[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`,
        );
        return;
      }
      let t = new AbortController();
      this.cancelControllers.set(e.request_id, t);
      try {
        let n = await this.processControlRequest(e, t.signal);
        if (this.cleanupPerformed) return;
        if (n === $Zl) return;
        let r = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: n,
          },
        };
        await Promise.resolve(
          this.transport.write(
            De(r) +
              `
`,
          ),
        );
      } catch (n) {
        if (this.cleanupPerformed) return;
        let r = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: be(n),
          },
        };
        try {
          await Promise.resolve(
            this.transport.write(
              De(r) +
                `
`,
            ),
          );
        } catch (o) {
          T(`[Query.handleControlRequest] Error-response write failed: ${be(o)}`, {
            level: "error",
          });
        }
      } finally {
        this.cancelControllers.delete(e.request_id);
      }
    }
    handleControlCancelRequest(e) {
      let t = this.cancelControllers.get(e.request_id);
      if (t) (t.abort(), this.cancelControllers.delete(e.request_id));
    }
    async processControlRequest(e, t) {
      if (e.request.subtype === "can_use_tool") {
        if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
        return {
          ...(await this.canUseTool(e.request.tool_name, e.request.input, {
            signal: t,
            suggestions: e.request.permission_suggestions,
            blockedPath: e.request.blocked_path,
            decisionReason: e.request.decision_reason,
            title: e.request.title,
            displayName: e.request.display_name,
            description: e.request.description,
            toolUseID: e.request.tool_use_id,
            agentID: e.request.agent_id,
          })),
          toolUseID: e.request.tool_use_id,
        };
      } else if (e.request.subtype === "hook_callback")
        return await this.handleHookCallbacks(
          e.request.callback_id,
          e.request.input,
          e.request.tool_use_id,
          t,
        );
      else if (e.request.subtype === "mcp_message") {
        let n = e.request,
          r = this.sdkMcpTransports.get(n.server_name);
        if (!r) throw Error(`SDK MCP server not found: ${n.server_name}`);
        if ("method" in n.message && "id" in n.message && n.message.id !== null)
          return {
            mcp_response: await this.handleMcpControlRequest(n.server_name, n, r),
          };
        else {
          if (r.onmessage) r.onmessage(n.message);
          return {
            mcp_response: {
              jsonrpc: "2.0",
              result: {},
              id: 0,
            },
          };
        }
      } else if (e.request.subtype === "elicitation") {
        let n = e.request;
        if (this.onElicitation)
          return await this.onElicitation(
            {
              serverName: n.mcp_server_name,
              message: n.message,
              mode: n.mode,
              url: n.url,
              elicitationId: n.elicitation_id,
              requestedSchema: n.requested_schema,
              title: n.title,
              displayName: n.display_name,
              description: n.description,
            },
            {
              signal: t,
            },
          );
        return {
          action: "decline",
        };
      } else if (e.request.subtype === "request_user_dialog") {
        if (this.onUserDialog)
          return await this.onUserDialog(
            {
              dialogKind: e.request.dialog_kind,
              payload: e.request.payload,
              toolUseID: e.request.tool_use_id,
            },
            {
              signal: t,
            },
          );
        return (
          T(
            `[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`,
          ),
          G("tengu_request_user_dialog_response_ignored", {
            shape: $e("auto_cancel"),
          }),
          $Zl
        );
      } else if (e.request.subtype === "oauth_token_refresh") {
        if (!this.getOAuthToken) throw Error("getOAuthToken callback is not provided.");
        return {
          accessToken:
            (await this.getOAuthToken({
              signal: t,
            })) ?? null,
        };
      } else if (e.request.subtype === "host_auth_token_refresh") {
        if (!this.getHostAuthToken) throw Error("getHostAuthToken callback is not provided.");
        return {
          authToken:
            (await this.getHostAuthToken({
              signal: t,
            })) ?? null,
        };
      }
      throw Error("Unsupported control request subtype: " + e.request.subtype);
    }
    async *readSdkMessages() {
      try {
        for await (let e of this.inputStream) yield e;
      } finally {
        await this.cleanup();
      }
    }
    async initialize() {
      if (this.hooks && !this.initHooksPayload) {
        this.initHooksPayload = {};
        for (let [r, o] of Object.entries(this.hooks))
          if (o.length > 0)
            this.initHooksPayload[r] = o.map((s) => {
              let i = [];
              for (let a of s.hooks) {
                let l = `hook_${this.nextCallbackId++}`;
                (this.hookCallbacks.set(l, a), i.push(l));
              }
              return {
                matcher: s.matcher,
                hookCallbackIds: i,
                timeout: s.timeout,
              };
            });
      }
      let e = this.sdkMcpTransports.size > 0 ? Array.from(this.sdkMcpTransports.keys()) : void 0,
        t = {
          subtype: "initialize",
          hooks: this.initHooksPayload,
          sdkMcpServers: e,
          jsonSchema: this.jsonSchema,
          systemPrompt:
            typeof this.initConfig?.systemPrompt === "string"
              ? [this.initConfig.systemPrompt]
              : this.initConfig?.systemPrompt,
          appendSystemPrompt: this.initConfig?.appendSystemPrompt,
          planModeInstructions: this.initConfig?.planModeInstructions,
          appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
          toolAliases: this.initConfig?.toolAliases,
          excludeDynamicSections: this.initConfig?.excludeDynamicSections,
          agents: this.initConfig?.agents,
          title: this.initConfig?.title,
          skills: Array.isArray(this.initConfig?.skills) ? this.initConfig.skills : void 0,
          webSearchIsolationExemptMcpServers: this.initConfig?.webSearchIsolationExemptMcpServers,
          promptSuggestions: this.initConfig?.promptSuggestions,
          agentProgressSummaries: this.initConfig?.agentProgressSummaries,
          forwardSubagentText: this.initConfig?.forwardSubagentText,
          supportedDialogKinds: this.initConfig?.supportedDialogKinds,
        };
      return (await this.request(t)).response;
    }
    async interrupt() {
      return yl("sdk_interrupt", async () => {
        await this.request({
          subtype: "interrupt",
        });
      });
    }
    async setPermissionMode(e) {
      await this.request({
        subtype: "set_permission_mode",
        mode: e,
      });
    }
    async setMcpPermissionModeOverride(e, t) {
      return (
        (
          await this.request({
            subtype: "set_mcp_permission_mode_override",
            serverName: e,
            mode: t,
          })
        ).response ?? {}
      );
    }
    async setModel(e) {
      await this.request({
        subtype: "set_model",
        model: e,
      });
    }
    async setMaxThinkingTokens(e, t) {
      await this.request({
        subtype: "set_max_thinking_tokens",
        max_thinking_tokens: e,
        thinking_display: t,
      });
    }
    async applyFlagSettings(e) {
      return yl("sdk_apply_flag_settings", async () => {
        await this.request({
          subtype: "apply_flag_settings",
          settings: e,
        });
      });
    }
    async getSettings() {
      return (
        await this.request({
          subtype: "get_settings",
        })
      ).response;
    }
    async rewindFiles(e, t) {
      return yl(
        "sdk_rewind_files",
        async () =>
          (
            await this.request({
              subtype: "rewind_files",
              user_message_id: e,
              dry_run: t?.dryRun,
            })
          ).response,
      );
    }
    async cancelAsyncMessage(e) {
      return (
        await this.request({
          subtype: "cancel_async_message",
          message_uuid: e,
        })
      ).response.cancelled;
    }
    async seedReadState(e, t) {
      await this.request({
        subtype: "seed_read_state",
        path: e,
        mtime: t,
      });
    }
    async enableRemoteControl(e, t) {
      return (
        await this.request({
          subtype: "remote_control",
          enabled: e,
          ...(t !== void 0 && {
            name: t,
          }),
        })
      ).response;
    }
    async submitFeedback(e, t) {
      return (
        await this.request({
          subtype: "submit_feedback",
          description: e,
          surface: t?.surface,
        })
      ).response;
    }
    async generateSessionTitle(e, t) {
      return yl(
        "sdk_session_title_generate",
        async () =>
          (
            await this.request({
              subtype: "generate_session_title",
              description: e,
              persist: t?.persist,
            })
          ).response.title,
      );
    }
    async askSideQuestion(e) {
      return yl("sdk_side_question", async () => {
        let n = (
          await this.request({
            subtype: "side_question",
            question: e,
          })
        ).response;
        return n.response === null
          ? null
          : {
              response: n.response,
              synthetic: n.synthetic ?? false,
            };
      });
    }
    async launchUltrareview(e, t) {
      return (
        await this.request({
          subtype: "ultrareview_launch",
          args: e,
          confirm: t?.confirm ?? false,
        })
      ).response;
    }
    async messageRated(e) {
      await this.request({
        subtype: "message_rated",
        messageUuid: e.messageUuid,
        sentiment: e.sentiment,
        surface: e.surface,
        cleared: e.cleared ?? false,
      });
    }
    processPendingPermissionRequests(e) {
      for (let t of e)
        if (t.request.subtype === "can_use_tool") this.handleControlRequest(t).catch(() => {});
    }
    processPendingUserDialogRequests(e) {
      for (let t of e)
        if (t.request.subtype === "request_user_dialog")
          this.handleControlRequest(t).catch(() => {});
    }
    request(e) {
      let t = Math.random().toString(36).substring(2, 15),
        n = {
          request_id: t,
          type: "control_request",
          request: e,
        },
        r = e.subtype === "initialize";
      return new Promise((o, s) => {
        (this.pendingControlResponses.set(t, {
          handler: (i) => {
            if ((this.pendingControlResponses.delete(t), i.subtype === "success")) o(i);
            else s(Error(i.error));
            if (!r && (i.pending_permission_requests || i.pending_user_dialog_requests))
              T(
                `[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${e.subtype})`,
              );
            else {
              if (i.pending_permission_requests)
                this.processPendingPermissionRequests(i.pending_permission_requests);
              if (i.pending_user_dialog_requests)
                this.processPendingUserDialogRequests(i.pending_user_dialog_requests);
            }
          },
          reject: s,
        }),
          Promise.resolve(
            this.transport.write(
              De(n) +
                `
`,
            ),
          ).catch((i) => {
            (this.pendingControlResponses.delete(t), s(i));
          }));
      });
    }
    initializationResult() {
      return this.initialization;
    }
    reinitialize() {
      return yl("sdk_reinitialize", () => this.initialize());
    }
    async supportedCommands() {
      return (await this.initialization).commands;
    }
    async supportedModels() {
      return (await this.initialization).models;
    }
    async supportedAgents() {
      return (await this.initialization).agents;
    }
    async reconnectMcpServer(e) {
      await this.request({
        subtype: "mcp_reconnect",
        serverName: e,
      });
    }
    async toggleMcpServer(e, t) {
      return yl("sdk_mcp_toggle_server", async () => {
        await this.request({
          subtype: "mcp_toggle",
          serverName: e,
          enabled: t,
        });
      });
    }
    async enableChannel(e) {
      return yl("sdk_mcp_enable_channel", async () => {
        await this.request({
          subtype: "channel_enable",
          serverName: e,
        });
      });
    }
    async mcpAuthenticate(e, t) {
      return (
        await this.request({
          subtype: "mcp_authenticate",
          serverName: e,
          redirectUri: t,
        })
      ).response;
    }
    async mcpClearAuth(e) {
      return (
        await this.request({
          subtype: "mcp_clear_auth",
          serverName: e,
        })
      ).response;
    }
    async mcpSubmitOAuthCallbackUrl(e, t) {
      return (
        await this.request({
          subtype: "mcp_oauth_callback_url",
          serverName: e,
          callbackUrl: t,
        })
      ).response;
    }
    async claudeAuthenticate(e) {
      return (
        await this.request({
          subtype: "claude_authenticate",
          loginWithClaudeAi: e,
        })
      ).response;
    }
    async claudeOAuthCallback(e, t) {
      return (
        await this.request({
          subtype: "claude_oauth_callback",
          authorizationCode: e,
          state: t,
        })
      ).response;
    }
    async claudeOAuthWaitForCompletion() {
      return (
        await this.request({
          subtype: "claude_oauth_wait_for_completion",
        })
      ).response;
    }
    async mcpServerStatus() {
      return (
        await this.request({
          subtype: "mcp_status",
        })
      ).response.mcpServers;
    }
    async getContextUsage() {
      return (
        await this.request({
          subtype: "get_context_usage",
        })
      ).response;
    }
    async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET() {
      return (
        await this.request({
          subtype: "get_usage",
        })
      ).response;
    }
    async readFile(e, t) {
      try {
        return (
          await this.request({
            subtype: "read_file",
            path: e,
            max_bytes: t?.maxBytes,
            encoding: t?.encoding,
          })
        ).response;
      } catch {
        return null;
      }
    }
    async reloadPlugins() {
      return yl(
        "sdk_reload_plugins",
        async () =>
          (
            await this.request({
              subtype: "reload_plugins",
            })
          ).response,
      );
    }
    async reloadSkills() {
      return yl(
        "sdk_reload_skills",
        async () =>
          (
            await this.request({
              subtype: "reload_skills",
            })
          ).response,
      );
    }
    async setMcpServers(e) {
      return yl("sdk_mcp_set_servers", async () => {
        let t = {},
          n = {};
        for (let [a, l] of Object.entries(e))
          if (l.type === "sdk" && "instance" in l) t[a] = l.instance;
          else n[a] = l;
        let r = new Set(this.sdkMcpServerInstances.keys()),
          o = new Set(Object.keys(t));
        for (let a of r) if (!o.has(a)) await this.disconnectSdkMcpServer(a);
        for (let [a, l] of Object.entries(t)) if (!r.has(a)) this.connectSdkMcpServer(a, l);
        let s = {};
        for (let a of Object.keys(t))
          s[a] = {
            type: "sdk",
            name: a,
          };
        return (
          await this.request({
            subtype: "mcp_set_servers",
            servers: {
              ...n,
              ...s,
            },
          })
        ).response;
      });
    }
    async accountInfo() {
      return (await this.initialization).account;
    }
    async streamInput(e) {
      T("[Query.streamInput] Starting to process input stream");
      try {
        let t = 0;
        for await (let n of e) {
          if (
            (t++,
            T(`[Query.streamInput] Processing message ${t}: ${n.type}`),
            this.abortController?.signal.aborted)
          )
            break;
          await Promise.resolve(
            this.transport.write(
              De(n) +
                `
`,
            ),
          );
        }
        if (
          (T(`[Query.streamInput] Finished processing ${t} messages from input stream`),
          t > 0 && this.hasBidirectionalNeeds())
        )
          (T("[Query.streamInput] Has bidirectional needs, waiting for first result"),
            await this.waitForFirstResult());
        (T("[Query] Calling transport.endInput() to close stdin to CLI process"),
          this.transport.endInput());
      } catch (t) {
        if (!(t instanceof WO)) throw t;
      }
    }
    waitForFirstResult() {
      if (this.firstResultReceived)
        return (
          T("[Query.waitForFirstResult] Result already received, returning immediately"),
          Promise.resolve()
        );
      return new Promise((e) => {
        if (this.abortController?.signal.aborted) {
          e();
          return;
        }
        (this.abortController?.signal.addEventListener("abort", () => e(), {
          once: true,
        }),
          (this.firstResultReceivedResolve = e));
      });
    }
    handleHookCallbacks(e, t, n, r) {
      let o = this.hookCallbacks.get(e);
      if (!o) throw Error(`No hook callback found for ID: ${e}`);
      return o(t, n, {
        signal: r,
      });
    }
    connectSdkMcpServer(e, t) {
      let n = new Tpo((r) => this.sendMcpServerMessageToCli(e, r));
      (this.sdkMcpTransports.set(e, n),
        this.sdkMcpServerInstances.set(e, t),
        t.connect(n).catch((r) => {
          if (this.sdkMcpTransports.get(e) === n) this.sdkMcpTransports.delete(e);
          if (this.sdkMcpServerInstances.get(e) === t) this.sdkMcpServerInstances.delete(e);
          T(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${r}`, {
            level: "error",
          });
        }));
    }
    async disconnectSdkMcpServer(e) {
      let t = this.sdkMcpTransports.get(e);
      if (t) (await t.close(), this.sdkMcpTransports.delete(e));
      this.sdkMcpServerInstances.delete(e);
    }
    sendMcpServerMessageToCli(e, t) {
      if ("id" in t && t.id !== null && t.id !== void 0) {
        let r = `${e}:${t.id}`,
          o = this.pendingMcpResponses.get(r);
        if (o) {
          (o.resolve(t), this.pendingMcpResponses.delete(r));
          return;
        }
      }
      let n = {
        type: "control_request",
        request_id: Age.randomUUID(),
        request: {
          subtype: "mcp_message",
          server_name: e,
          message: t,
        },
      };
      Promise.resolve(
        this.transport.write(
          De(n) +
            `
`,
        ),
      ).catch((r) => {
        T(`[Query.sendMcpServerMessageToCli] Transport write failed: ${r}`, {
          level: "error",
        });
      });
    }
    handleMcpControlRequest(e, t, n) {
      let r = "id" in t.message ? t.message.id : null,
        o = `${e}:${r}`;
      return new Promise((s, i) => {
        let a = () => {
            this.pendingMcpResponses.delete(o);
          },
          l = (u) => {
            (a(), s(u));
          },
          c = (u) => {
            (a(), i(u));
          };
        if (
          (this.pendingMcpResponses.set(o, {
            resolve: l,
            reject: c,
          }),
          n.onmessage)
        )
          n.onmessage(t.message);
        else {
          (a(), i(Error("No message handler registered")));
          return;
        }
      });
    }
  };
});
class L3o {
  send;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  constructor(e, t = 60000, n, r = Lir, o = Dir, s = vKf) {
    this.send = e;
    this.sendTimeoutMs = t;
    this.onError = n;
    this.maxPendingEntries = r;
    this.maxPendingBytes = o;
    this.backoffMs = s;
  }
  enqueue(e, t) {
    let n = De(t).length;
    if (
      (this.pending.push({
        filePath: e,
        entries: t,
        bytes: n,
      }),
      (this.pendingEntries += t.length),
      (this.pendingBytes += n),
      this.pendingEntries > this.maxPendingEntries || this.pendingBytes > this.maxPendingBytes)
    )
      ((this.flushPromise = this.drain()), this.flushPromise.catch(() => {}));
  }
  async flush() {
    let e = this.drain();
    if (((this.flushPromise = e), await e, this.flushPromise === e)) this.flushPromise = null;
  }
  async drain() {
    let e = this.flushPromise,
      t = this.pending.splice(0);
    if (((this.pendingEntries = 0), (this.pendingBytes = 0), e)) await e;
    if (t.length === 0) return;
    await this.doFlush(t);
  }
  async doFlush(e) {
    let t = new Map();
    for (let r of e) {
      let o = t.get(r.filePath);
      if (o) o.push(...r.entries);
      else t.set(r.filePath, r.entries.slice());
    }
    let n = this.backoffMs.length + 1;
    for (let [r, o] of t) {
      let s = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${r}`,
        i,
        a = 1;
      for (; a <= n; a++)
        try {
          (await vc(this.send(r, o), this.sendTimeoutMs, s), (i = void 0));
          break;
        } catch (l) {
          if (((i = Zr(l)), i.message === s)) break;
          let c = this.backoffMs[a - 1];
          if (c === void 0) break;
          await Nn(c);
        }
      if (i) {
        T(`[TranscriptMirrorBatcher] flush failed for ${r} after ${a} attempt(s): ${i}`, {
          level: "error",
        });
        try {
          this.onError?.(r, i);
        } catch (l) {
          T(`[TranscriptMirrorBatcher] onError callback threw: ${l}`, {
            level: "error",
          });
        }
      }
    }
  }
}
var Lir = 500,
  Dir = 1048576,
  vKf;
