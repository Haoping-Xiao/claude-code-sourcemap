// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S6
// matched 2.1.88 source: src/utils/mailbox.ts
// class=modified  jaccard=0.58  score=0.9446  fileCov=0.6004
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S6] deps: ink/events/terminal-event.ts, ink/styles.ts, ink/components/Box.tsx, ink/reconciler.ts, hooks/useTerminalSize.ts, utils/debug.ts, utils/sequential.ts, components/ScrollKeybindingHandler.tsx, components/PromptInput/PromptInput.tsx, utils/debug.ts, keybindings/defaultBindings.ts, keybindings/schema.ts, keybindings/KeybindingProviderSetup.tsx
((Fho = R(lt(), 1)), (qI = R(rt(), 1)), (ePe = R(se(), 1)));
class jho {
  queue = [];
  waiters = [];
  changed = Mi();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(e) {
    this._revision++;
    let t = this.waiters.findIndex((n) => n.fn(e));
    if (t !== -1) {
      let n = this.waiters.splice(t, 1)[0];
      if (n) {
        (n.resolve(e), this.notify());
        return;
      }
    }
    (this.queue.push(e), this.notify());
  }
  poll(e = () => true) {
    let t = this.queue.findIndex(e);
    if (t === -1) return;
    return this.queue.splice(t, 1)[0];
  }
  receive(e = () => true) {
    let t = this.queue.findIndex(e);
    if (t !== -1) {
      let n = this.queue.splice(t, 1)[0];
      if (n) return (this.notify(), Promise.resolve(n));
    }
    return new Promise((n) => {
      this.waiters.push({
        fn: e,
        resolve: n,
      });
    });
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}
