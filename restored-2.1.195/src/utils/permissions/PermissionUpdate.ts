// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fre
// matched 2.1.88 source: src/utils/permissions/PermissionUpdate.ts
// class=modified  jaccard=0.5714  score=0.884  fileCov=0.6177
// note: deminified; 0 identifiers renamed from _t exports
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
function My(e, t) {
  switch (t.type) {
    case "setMode":
      if (t.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable)
        return (
          T(
            "Ignoring permission update: setMode 'bypassPermissions' rejected \u2014 mode is not available (disableBypassPermissionsMode set, or session not launched in bypassPermissions mode)",
          ),
          e
        );
      return (
        T(`Applying permission update: Setting mode to '${t.mode}'`),
        {
          ...e,
          mode: t.mode,
        }
      );
    case "addRules": {
      let n = t.rules.map((o) => Pp(o));
      T(
        `Applying permission update: Adding ${t.rules.length} ${t.behavior} rule(s) to destination '${t.destination}': ${De(n)}`,
      );
      let r =
        t.behavior === "allow"
          ? "alwaysAllowRules"
          : t.behavior === "deny"
            ? "alwaysDenyRules"
            : "alwaysAskRules";
      return {
        ...e,
        [r]: {
          ...e[r],
          [t.destination]: [...(e[r][t.destination] || []), ...n],
        },
      };
    }
    case "replaceRules": {
      let n = t.rules.map((o) => Pp(o));
      T(
        `Replacing all ${t.behavior} rules for destination '${t.destination}' with ${t.rules.length} rule(s): ${De(n)}`,
      );
      let r =
        t.behavior === "allow"
          ? "alwaysAllowRules"
          : t.behavior === "deny"
            ? "alwaysDenyRules"
            : "alwaysAskRules";
      return {
        ...e,
        [r]: {
          ...e[r],
          [t.destination]: n,
        },
      };
    }
    case "addDirectories": {
      T(
        `Applying permission update: Adding ${t.directories.length} director${t.directories.length === 1 ? "y" : "ies"} with destination '${t.destination}': ${De(t.directories)}`,
      );
      let n = new Map(e.additionalWorkingDirectories);
      for (let r of t.directories)
        n.set(r, {
          path: r,
          source: t.destination,
        });
      return {
        ...e,
        additionalWorkingDirectories: n,
      };
    }
    case "removeRules": {
      let n = t.rules.map((a) => Pp(a));
      T(
        `Applying permission update: Removing ${t.rules.length} ${t.behavior} rule(s) from source '${t.destination}': ${De(n)}`,
      );
      let r =
          t.behavior === "allow"
            ? "alwaysAllowRules"
            : t.behavior === "deny"
              ? "alwaysDenyRules"
              : "alwaysAskRules",
        o = e[r][t.destination] || [],
        s = new Set(n),
        i = o.filter((a) => !s.has(a));
      return {
        ...e,
        [r]: {
          ...e[r],
          [t.destination]: i,
        },
      };
    }
    case "removeDirectories": {
      T(
        `Applying permission update: Removing ${t.directories.length} director${t.directories.length === 1 ? "y" : "ies"}: ${De(t.directories)}`,
      );
      let n = new Map(e.additionalWorkingDirectories);
      for (let r of t.directories) n.delete(r);
      return {
        ...e,
        additionalWorkingDirectories: n,
      };
    }
    default:
      return e;
  }
}
function T4(e, t) {
  let n = e;
  for (let r of t) n = My(n, r);
  return n;
}
function Pao(e) {
  return e === "localSettings" || e === "userSettings" || e === "projectSettings";
}
function zue(e) {
  if (!Pao(e.destination)) return;
  if (e.type === "setMode" && e.mode === "bypassPermissions") {
    T(
      `setMode:'bypassPermissions' is session-scoped; not persisting as defaultMode to ${e.destination}`,
    );
    return;
  }
  switch ((T(`Persisting permission update: ${e.type} to source '${e.destination}'`), e.type)) {
    case "addRules": {
      (T(`Persisting ${e.rules.length} ${e.behavior} rule(s) to ${e.destination}`),
        jca(
          {
            ruleValues: e.rules,
            ruleBehavior: e.behavior,
          },
          e.destination,
        ));
      break;
    }
    case "addDirectories": {
      T(
        `Persisting ${e.directories.length} director${e.directories.length === 1 ? "y" : "ies"} to ${e.destination}`,
      );
      let n = yn(e.destination)?.permissions?.additionalDirectories || [],
        r = e.directories.filter((o) => !n.includes(o));
      if (r.length > 0) {
        let o = [...n, ...r];
        io(e.destination, {
          permissions: {
            additionalDirectories: o,
          },
        });
      }
      break;
    }
    case "removeRules": {
      T(`Removing ${e.rules.length} ${e.behavior} rule(s) from ${e.destination}`);
      let r = (yn(e.destination)?.permissions || {})[e.behavior] || [],
        o = new Set(e.rules.map(Pp)),
        s = r.filter((i) => {
          let a = Pp(Ig(i));
          return !o.has(a);
        });
      io(e.destination, {
        permissions: {
          [e.behavior]: s,
        },
      });
      break;
    }
    case "removeDirectories": {
      T(
        `Removing ${e.directories.length} director${e.directories.length === 1 ? "y" : "ies"} from ${e.destination}`,
      );
      let n = yn(e.destination)?.permissions?.additionalDirectories || [],
        r = new Set(e.directories),
        o = n.filter((s) => !r.has(s));
      io(e.destination, {
        permissions: {
          additionalDirectories: o,
        },
      });
      break;
    }
    case "setMode": {
      (T(`Persisting mode '${e.mode}' to ${e.destination}`),
        io(e.destination, {
          permissions: {
            defaultMode: e.mode,
          },
        }));
      break;
    }
    case "replaceRules": {
      T(`Replacing all ${e.behavior} rules in ${e.destination} with ${e.rules.length} rule(s)`);
      let t = e.rules.map(Pp);
      io(e.destination, {
        permissions: {
          [e.behavior]: t,
        },
      });
      break;
    }
  }
}
function Y8(e) {
  for (let t of e) zue(t);
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
