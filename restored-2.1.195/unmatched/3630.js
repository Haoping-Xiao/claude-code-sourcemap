// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s3a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s3a = Q(o3a => {
  var obo = o3a,
    r3a = obo.isAbsolute = function (t) {
      return /^(?:\/|\w+:)/.test(t);
    },
    rbo = obo.normalize = function (t) {
      t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
      var n = t.split("/"),
        r = r3a(t),
        o = "";
      if (r) o = n.shift() + "/";
      for (var s = 0; s < n.length;) if (n[s] === "..") {
        if (s > 0 && n[s - 1] !== "..") n.splice(--s, 2);else if (r) n.splice(s, 1);else ++s;
      } else if (n[s] === ".") n.splice(s, 1);else ++s;
      return o + n.join("/");
    };
  obo.resolve = function (t, n, r) {
    if (!r) n = rbo(n);
    if (r3a(n)) return n;
    if (!r) t = rbo(t);
    return (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? rbo(t + "/" + n) : n;
  };
});