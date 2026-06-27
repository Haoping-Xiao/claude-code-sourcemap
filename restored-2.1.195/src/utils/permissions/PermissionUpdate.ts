// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fre
// matched 2.1.88 source: src/utils/permissions/PermissionUpdate.ts
// class=modified  jaccard=0.5714  score=0.884  fileCov=0.6177
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fre] deps: ft, er, je, wr, PB, ys, Rd, vn, vf, dr, Jt, QH
rup = ["allow", "deny", "ask"];
iup = OO;
function Jjt(e) {
  if (!e) return [];
  return e.flatMap((t) => {
    switch (t.type) {
      case "addRules":
        return t.rules;
      default:
        return [];
    }
  });
}
function applyPermissionUpdate(context, update) {
  switch (update.type) {
    case "setMode":
      if (update.mode === "bypassPermissions" && !context.isBypassPermissionsModeAvailable)
        return (
          T(
            "Ignoring permission update: setMode 'bypassPermissions' rejected \u2014 mode is not available (disableBypassPermissionsMode set, or session not launched in bypassPermissions mode)",
          ),
          context
        );
      return (
        T(`Applying permission update: Setting mode to '${update.mode}'`),
        {
          ...context,
          mode: update.mode,
        }
      );
    case "addRules": {
      let n = update.rules.map((o) => Pp(o));
      T(
        `Applying permission update: Adding ${update.rules.length} ${update.behavior} rule(s) to destination '${update.destination}': ${De(n)}`,
      );
      let r =
        update.behavior === "allow"
          ? "alwaysAllowRules"
          : update.behavior === "deny"
            ? "alwaysDenyRules"
            : "alwaysAskRules";
      return {
        ...context,
        [r]: {
          ...context[r],
          [update.destination]: [...(context[r][update.destination] || []), ...n],
        },
      };
    }
    case "replaceRules": {
      let n = update.rules.map((o) => Pp(o));
      T(
        `Replacing all ${update.behavior} rules for destination '${update.destination}' with ${update.rules.length} rule(s): ${De(n)}`,
      );
      let r =
        update.behavior === "allow"
          ? "alwaysAllowRules"
          : update.behavior === "deny"
            ? "alwaysDenyRules"
            : "alwaysAskRules";
      return {
        ...context,
        [r]: {
          ...context[r],
          [update.destination]: n,
        },
      };
    }
    case "addDirectories": {
      T(
        `Applying permission update: Adding ${update.directories.length} director${update.directories.length === 1 ? "y" : "ies"} with destination '${update.destination}': ${De(update.directories)}`,
      );
      let n = new Map(context.additionalWorkingDirectories);
      for (let r of update.directories)
        n.set(r, {
          path: r,
          source: update.destination,
        });
      return {
        ...context,
        additionalWorkingDirectories: n,
      };
    }
    case "removeRules": {
      let n = update.rules.map((a) => Pp(a));
      T(
        `Applying permission update: Removing ${update.rules.length} ${update.behavior} rule(s) from source '${update.destination}': ${De(n)}`,
      );
      let r =
          update.behavior === "allow"
            ? "alwaysAllowRules"
            : update.behavior === "deny"
              ? "alwaysDenyRules"
              : "alwaysAskRules",
        o = context[r][update.destination] || [],
        s = new Set(n),
        i = o.filter((a) => !s.has(a));
      return {
        ...context,
        [r]: {
          ...context[r],
          [update.destination]: i,
        },
      };
    }
    case "removeDirectories": {
      T(
        `Applying permission update: Removing ${update.directories.length} director${update.directories.length === 1 ? "y" : "ies"}: ${De(update.directories)}`,
      );
      let n = new Map(context.additionalWorkingDirectories);
      for (let r of update.directories) n.delete(r);
      return {
        ...context,
        additionalWorkingDirectories: n,
      };
    }
    default:
      return context;
  }
}
function T4(e, t) {
  let n = e;
  for (let r of t) n = applyPermissionUpdate(n, r);
  return n;
}
function supportsPersistence(destination) {
  return (
    destination === "localSettings" ||
    destination === "userSettings" ||
    destination === "projectSettings"
  );
}
function persistPermissionUpdate(update) {
  if (!supportsPersistence(update.destination)) return;
  if (update.type === "setMode" && update.mode === "bypassPermissions") {
    T(
      `setMode:'bypassPermissions' is session-scoped; not persisting as defaultMode to ${update.destination}`,
    );
    return;
  }
  switch (
    (T(`Persisting permission update: ${update.type} to source '${update.destination}'`),
    update.type)
  ) {
    case "addRules": {
      (T(`Persisting ${update.rules.length} ${update.behavior} rule(s) to ${update.destination}`),
        jca(
          {
            ruleValues: update.rules,
            ruleBehavior: update.behavior,
          },
          update.destination,
        ));
      break;
    }
    case "addDirectories": {
      T(
        `Persisting ${update.directories.length} director${update.directories.length === 1 ? "y" : "ies"} to ${update.destination}`,
      );
      let n = yn(update.destination)?.permissions?.additionalDirectories || [],
        r = update.directories.filter((o) => !n.includes(o));
      if (r.length > 0) {
        let o = [...n, ...r];
        io(update.destination, {
          permissions: {
            additionalDirectories: o,
          },
        });
      }
      break;
    }
    case "removeRules": {
      T(`Removing ${update.rules.length} ${update.behavior} rule(s) from ${update.destination}`);
      let r = (yn(update.destination)?.permissions || {})[update.behavior] || [],
        o = new Set(update.rules.map(Pp)),
        s = r.filter((i) => {
          let a = Pp(Ig(i));
          return !o.has(a);
        });
      io(update.destination, {
        permissions: {
          [update.behavior]: s,
        },
      });
      break;
    }
    case "removeDirectories": {
      T(
        `Removing ${update.directories.length} director${update.directories.length === 1 ? "y" : "ies"} from ${update.destination}`,
      );
      let n = yn(update.destination)?.permissions?.additionalDirectories || [],
        r = new Set(update.directories),
        o = n.filter((s) => !r.has(s));
      io(update.destination, {
        permissions: {
          additionalDirectories: o,
        },
      });
      break;
    }
    case "setMode": {
      (T(`Persisting mode '${update.mode}' to ${update.destination}`),
        io(update.destination, {
          permissions: {
            defaultMode: update.mode,
          },
        }));
      break;
    }
    case "replaceRules": {
      T(
        `Replacing all ${update.behavior} rules in ${update.destination} with ${update.rules.length} rule(s)`,
      );
      let t = update.rules.map(Pp);
      io(update.destination, {
        permissions: {
          [update.behavior]: t,
        },
      });
      break;
    }
  }
}
function Y8(e) {
  for (let t of e) persistPermissionUpdate(t);
}
function v5e(e, t = "session") {
  let n = xNn(e);
  if (n === "/") return;
  return {
    type: "addRules",
    rules: [
      {
        toolName: "Read",
        ruleContent: Gca.posix.isAbsolute(n) ? `/${n}/**` : `${n}/**`,
      },
    ],
    behavior: "allow",
    destination: t,
  };
}
var Gca;
