// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module izr
// matched 2.1.88 source: src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts
// class=modified  jaccard=0.7472  score=0.9138  fileCov=0.8038
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module izr]
__e = {
  fromJSON(e) {
    return {
      account_id: szr(e.account_id) ? globalThis.Number(e.account_id) : 0,
      organization_uuid: szr(e.organization_uuid) ? globalThis.String(e.organization_uuid) : "",
      account_uuid: szr(e.account_uuid) ? globalThis.String(e.account_uuid) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.account_id !== void 0) t.account_id = Math.round(e.account_id);
    if (e.organization_uuid !== void 0) t.organization_uuid = e.organization_uuid;
    if (e.account_uuid !== void 0) t.account_uuid = e.account_uuid;
    return t;
  },
  create(e) {
    return __e.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = c$d();
    return (
      (t.account_id = e.account_id ?? 0),
      (t.organization_uuid = e.organization_uuid ?? ""),
      (t.account_uuid = e.account_uuid ?? ""),
      t
    );
  },
};
function u$d() {
  return {
    actor_id: "",
    repository_id: "",
    repository_owner_id: "",
  };
}
function d$d() {
  return {
    platform: "",
    node_version: "",
    terminal: "",
    package_managers: "",
    runtimes: "",
    is_running_with_bun: false,
    is_ci: false,
    is_claubbit: false,
    is_github_action: false,
    is_claude_code_action: false,
    is_claude_ai_auth: false,
    version: "",
    github_event_name: "",
    github_actions_runner_environment: "",
    github_actions_runner_os: "",
    github_action_ref: "",
    wsl_version: "",
    github_actions_metadata: void 0,
    arch: "",
    is_claude_code_remote: false,
    remote_environment_type: "",
    claude_code_container_id: "",
    claude_code_remote_session_id: "",
    tags: [],
    deployment_environment: "",
    is_conductor: false,
    version_base: "",
    coworker_type: "",
    build_time: "",
    is_local_agent_mode: false,
    linux_distro_id: "",
    linux_distro_version: "",
    linux_kernel: "",
    vcs: "",
    platform_raw: "",
    shell: "",
  };
}
function p$d() {
  return {
    slack_team_id: "",
    is_enterprise_install: false,
    trigger: "",
    creation_method: "",
  };
}
function f$d() {
  return {
    event_name: "",
    client_timestamp: void 0,
    model: "",
    session_id: "",
    user_type: "",
    betas: "",
    env: void 0,
    entrypoint: "",
    agent_sdk_version: "",
    is_interactive: false,
    client_type: "",
    process: "",
    additional_metadata: "",
    auth: void 0,
    server_timestamp: void 0,
    event_id: "",
    device_id: "",
    swe_bench_run_id: "",
    swe_bench_instance_id: "",
    swe_bench_task_id: "",
    email: "",
    agent_id: "",
    parent_session_id: "",
    agent_type: "",
    slack: void 0,
    team_name: "",
    skill_name: "",
    plugin_name: "",
    marketplace_name: "",
    repl_code: "",
  };
}
function m$d(e) {
  let t = (e.seconds || 0) * 1000;
  return ((t += (e.nanos || 0) / 1000000) /* 1e6 */, new globalThis.Date(t));
}
function U$i(e) {
  if (e instanceof globalThis.Date) return e;
  else if (typeof e === "string") return new globalThis.Date(e);
  else return m$d(Q1t.fromJSON(e));
}
function il(e) {
  return e !== null && e !== void 0;
}
var tkn, nkn, rkn, okn;
