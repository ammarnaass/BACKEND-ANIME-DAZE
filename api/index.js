"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dotenv/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/dotenv/dist/index.cjs"(exports2, module2) {
    var j = (e, n) => () => {
      try {
        return n || e((n = { exports: {} }).exports, n), n.exports;
      } catch (t) {
        throw n = 0, t;
      }
    };
    var k = j((xe, U) => {
      function G(e) {
        return typeof e == "string" ? !["false", "0", "no", "off", ""].includes(e.toLowerCase()) : !!e;
      }
      function Y(e = process.env) {
        let n = {};
        for (let t of ["ENCODING", "PATH", "QUIET", "DEBUG", "OVERRIDE", "FAST"]) {
          let o = e[`DOTENV_${t}`] != null ? e[`DOTENV_${t}`] : e[`DOTENV_CONFIG_${t}`];
          o != null && (n[t.toLowerCase()] = t === "ENCODING" || t === "PATH" ? o : G(o));
        }
        return n;
      }
      U.exports = { parseBoolean: G, optionsFromEnv: Y };
    });
    var N = j((ye, x) => {
      var z = require("fs"), I = require("path"), Z = require("os"), { URL: ee, fileURLToPath: te } = require("url"), { parseBoolean: $, optionsFromEnv: B } = k(), re = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg, b = new Uint8Array(256);
      for (let e = 48; e <= 57; e++) b[e] = 1;
      for (let e = 65; e <= 90; e++) b[e] = 1;
      for (let e = 97; e <= 122; e++) b[e] = 1;
      b[45] = 1;
      b[46] = 1;
      b[95] = 1;
      function ne(e) {
        let n = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let o;
        for (; (o = re.exec(t)) != null; ) {
          let r = o[1], s = o[2] || "";
          s = s.trim();
          let i = s[0];
          s = s.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), i === '"' && (s = s.replace(/\\n/g, `
`), s = s.replace(/\\r/g, "\r")), n[r] = s;
        }
        return n;
      }
      function w(e) {
        return e <= 32 ? e === 32 || e >= 9 && e <= 13 : e >= 160 && (e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279);
      }
      function q(e) {
        return e === 10 || e === 8232 || e === 8233;
      }
      function oe(e) {
        let n = {}, t = typeof e == "string" ? e : e.toString();
        t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, `
`));
        let o = t.length, r = 0;
        for (; r < o; ) {
          let s = t.charCodeAt(r);
          for (; r < o && w(s); ) r++, s = t.charCodeAt(r);
          if (r >= o) break;
          if (s === 35) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let i = -1;
          if (s === 101 && r + 6 < o && t.charCodeAt(r + 1) === 120 && t.charCodeAt(r + 2) === 112 && t.charCodeAt(r + 3) === 111 && t.charCodeAt(r + 4) === 114 && t.charCodeAt(r + 5) === 116) {
            let v = t.charCodeAt(r + 6);
            if (w(v)) {
              let u = r + 7;
              for (; u < o && w(t.charCodeAt(u)); ) u++;
              b[t.charCodeAt(u)] && (i = r + 6, r = u);
            } else s = t.charCodeAt(r);
          }
          let l = r, d = 0;
          for (; r < o && (d = t.charCodeAt(r), b[d]); ) r++;
          if (r === l) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let h = t.slice(l, r), f = r;
          if (r >= o && (d = 0), w(d)) do
            r++, d = r < o ? t.charCodeAt(r) : 0;
          while (w(d));
          if (d === 61) r++;
          else if (d === 58 && r === f && r + 1 < o && w(t.charCodeAt(r + 1))) r += 2;
          else {
            for (r = i === -1 ? f : i; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let c = r, a = r;
          for (; a < o && w(t.charCodeAt(a)); ) a++;
          let g = t.charCodeAt(a), p, y = false;
          if (g === 39 || g === 34 || g === 96) {
            let v = t[a], u = t.indexOf(v, a + 1), m = -1, C = -1;
            for (; u !== -1; ) {
              let O = t.charCodeAt(u - 1) === 92, E = u + 1;
              for (; E < o && !q(t.charCodeAt(E)) && w(t.charCodeAt(E)); ) E++;
              if ((E === o || q(t.charCodeAt(E)) || t.charCodeAt(E) === 35) && (m = u, C = E), !O) break;
              u = t.indexOf(v, u + 1);
            }
            if (m !== -1) {
              if (p = t.slice(a + 1, m), r = C, t.charCodeAt(r) === 35) for (; r < o && !q(t.charCodeAt(r)); ) r++;
              y = true;
            }
          }
          if (!y) {
            let v = t.indexOf(`
`, c);
            v === -1 && (v = o);
            let u;
            if (o < 4096) u = t.indexOf("#", c), (u === -1 || u > v) && (u = v);
            else for (u = c; u < v && t.charCodeAt(u) !== 35; ) u++;
            let m = c, C = u;
            for (; m < C && w(t.charCodeAt(m)); ) m++;
            for (; C > m && w(t.charCodeAt(C - 1)); ) C--;
            let O = t.charCodeAt(m);
            if (p = t.slice(m, C), p.includes("\u2028") || p.includes("\u2029") ? p = p.replace(/^(['"`])([\s\S]*)\1$/mg, "$2") : C - m >= 2 && (O === 39 || O === 34 || O === 96) && t.charCodeAt(C - 1) === O && (p = t.slice(m + 1, C - 1)), r = u, u < v) for (; r < o && !q(t.charCodeAt(r)); ) r++;
          }
          g === 34 && (y || a < r) && p.indexOf("\\") !== -1 && (p = p.replace(/\\n/g, `
`).replace(/\\r/g, "\r")), n[h] = p;
        }
        return n;
      }
      function se(e, n) {
        return n && $(n.fast) ? oe(e) : ne(e);
      }
      function T(e) {
        console.log(`\u2506 ${e}`);
      }
      function ie(e) {
        console.error(`\u25C7 ${e}`);
      }
      function V(e) {
        return e[0] === "~" ? I.join(Z.homedir(), e.slice(1)) : e;
      }
      function ce(e = {}) {
        let n = { ...e };
        for (let t of Object.keys(n)) n[t] === void 0 && delete n[t];
        return { ...B(), ...n };
      }
      function ae(e) {
        e = ce(e);
        let n = I.resolve(process.cwd(), ".env"), t = "utf8", o = process.env;
        e && e.processEnv != null && (o = e.processEnv);
        let r = $(e && e.debug);
        e && e.encoding ? t = e.encoding : r && T("no encoding is specified (UTF-8 is used by default)");
        let s = [n];
        if (e && e.path) if (!Array.isArray(e.path)) s = [V(e.path)];
        else {
          s = [];
          for (let c of e.path) s.push(V(c));
        }
        let i, l = {}, d = { fast: e.fast };
        for (let c of s) try {
          let a = A.parse(z.readFileSync(c, { encoding: t }), d);
          A.populate(l, a, e);
        } catch (a) {
          r && T(`failed to load ${c} ${a.message}`), i = a;
        }
        let h = A.populate(o, l, e), f = $(Object.prototype.hasOwnProperty.call(e, "quiet") ? e.quiet : B(o).quiet);
        if (r || !f) {
          let c = Object.keys(h).length, a = [];
          for (let g of s) try {
            let p = I.relative(process.cwd(), g instanceof ee ? te(g) : g);
            a.push(p);
          } catch (p) {
            r && T(`failed to load ${g} ${p.message}`), i = p;
          }
          ie(`injected env (${c}) from ${a.join(",")}`);
        }
        return i ? { parsed: l, error: i } : { parsed: l };
      }
      function le(e) {
        return A.configDotenv(e);
      }
      function fe(e, n, t = {}) {
        let o = $(t && t.debug), r = $(t && t.override), s = {};
        if (e === null || typeof e != "object" || n === null || typeof n != "object") {
          let i = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw i.code = "OBJECT_REQUIRED", i;
        }
        for (let i of Object.keys(n)) Object.prototype.hasOwnProperty.call(e, i) ? (r === true && (e[i] = n[i], s[i] = n[i]), o && T(r === true ? `"${i}" is already defined and WAS overwritten` : `"${i}" is already defined and was NOT overwritten`)) : (e[i] = n[i], s[i] = n[i]);
        return s;
      }
      var A = { configDotenv: ae, config: le, parse: se, populate: fe };
      x.exports.configDotenv = A.configDotenv;
      x.exports.config = A.config;
      x.exports.parse = A.parse;
      x.exports.populate = A.populate;
      x.exports = A;
    });
    var M = j((Te, W) => {
      var _ = require("child_process"), ue = require("fs"), L = require("path");
      function de(e) {
        let n = ['"'], t = 0;
        for (let o of e) {
          if (o === "\\") {
            t++;
            continue;
          }
          o === '"' ? n.push("\\".repeat(t * 2 + 1), '"') : n.push("\\".repeat(t), o), t = 0;
        }
        return n.push("\\".repeat(t * 2), '"'), n.join("");
      }
      function H(e, n = 1) {
        for (let t = 0; t < n; t++) {
          let o = [];
          for (let r of e) {
            let s = r.charCodeAt(0), i = s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122, l = "\\/:._-".includes(r);
            !i && !l && s < 128 && o.push("^"), o.push(r);
          }
          e = o.join("");
        }
        return e;
      }
      function P(e, n) {
        let t = Object.keys(e).reverse().find((o) => o.toUpperCase() === n);
        return t === void 0 ? void 0 : e[t];
      }
      function pe(e, n, t) {
        let o = (P(n, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").filter(Boolean), s = o.some((l) => e.toLowerCase().endsWith(l.toLowerCase())) ? ["", ...o] : [...o, ""], i = /[\\/]/.test(e) ? [t] : [t, ...(P(n, "PATH") || "").split(";")];
        for (let l of i) for (let d of s) {
          let h = L.resolve(t, l.replace(/^"|"$/g, ""), e + d);
          try {
            if (ue.statSync(h).isFile()) return h;
          } catch {
          }
        }
      }
      function he(e, n, t) {
        if (process.platform !== "win32") return _.spawn(e, n, t);
        let o = t.env || process.env, r = pe(e, o, t.cwd || process.cwd());
        if (r && /\.(?:exe|com)$/i.test(r)) return _.spawn(r, n, t);
        let s = /\.(?:bat|cmd)$/i.test(r || e), i = [H(L.normalize(r || e))];
        for (let d of n) i.push(H(de(d), s ? 2 : 1));
        let l = i.join(" ");
        return _.spawn(P(o, "COMSPEC") || "cmd.exe", ["/d", "/v:off", "/s", "/c", `"${l}"`], { ...t, windowsVerbatimArguments: true });
      }
      W.exports = he;
    });
    var X = j(($e, F) => {
      var ge = require("fs"), me = require("os"), Q = require("path"), ve = require("child_process"), Ce = M(), R = N(), { optionsFromEnv: J } = k();
      function D() {
        console.log(["Usage: dotenv run [--help] [-q|--quiet] [--debug] [--override] [--fast] [-f|--file <paths>] [--] <command> [args...]", "", "Run a command with environment variables from a .env file.", "Place dotenv options before the command; all following arguments go to the command.", "", "Options:", "  -f, --file <paths>  .env paths, comma-separated or repeated (default: .env)", "  -q, --quiet suppress the injected env message", "  --debug     enable debug logging", "  --override  override existing environment variables", "  --fast      use the faster character-scanner parser", "", "Environment variables (DOTENV_CONFIG_* names remain as fallbacks):", "  DOTENV_PATH, DOTENV_ENCODING, DOTENV_QUIET,", "  DOTENV_DEBUG, DOTENV_OVERRIDE,", "  DOTENV_FAST"].join(`
`));
      }
      function we(e) {
        let n = [], t = false, o, r, s, i, l = -1;
        for (let h = 0; h < e.length; h++) {
          let f = e[h];
          if (f === "--") {
            l = h + 1;
            break;
          }
          if (f === "--help" || f === "-h") return { help: true };
          if (f === "--quiet" || f === "-q") {
            o = true;
            continue;
          }
          if (f === "--debug") {
            r = true;
            continue;
          }
          if (f === "--override") {
            s = true;
            continue;
          }
          if (f === "--fast") {
            i = true;
            continue;
          }
          if (f === "-f" || f === "--file" || f.startsWith("-f=") || f.startsWith("--file=")) {
            let c = f.indexOf("="), a = c === -1 ? f : f.slice(0, c), g = c === -1 ? e[++h] : f.slice(c + 1);
            if (!g || g === "--") return { error: `${a} requires a path` };
            let p = g.split(",").map((y) => y.trim()).filter(Boolean);
            if (p.length === 0) return { error: `${a} requires a path` };
            n.push(...p), t = true;
            continue;
          }
          if (f.startsWith("-")) return { error: `unknown option: ${f}` };
          l = h;
          break;
        }
        let d = l === -1 ? [] : e.slice(l);
        return { paths: n, pathSet: t, quiet: o, debug: r, override: s, fast: i, command: d };
      }
      function Ae(e) {
        return e[0] === "~" ? Q.join(me.homedir(), e.slice(1)) : e;
      }
      function Ee(e) {
        let n = J(), t = { encoding: n.encoding || "utf8", quiet: n.quiet, debug: n.debug === true, override: n.override === true, fast: n.fast === true, paths: [".env"], defaultPath: true };
        return n.path && (t.paths = [n.path], t.defaultPath = false), e.pathSet && (t.paths = e.paths, t.defaultPath = false), e.quiet != null && (t.quiet = e.quiet), e.debug != null && (t.debug = e.debug), e.override != null && (t.override = e.override), e.fast != null && (t.fast = e.fast), t;
      }
      function be(e) {
        let n = {}, t = [], o = { override: e.override, debug: e.debug };
        for (let s of e.paths) {
          let i = Q.resolve(process.cwd(), Ae(s));
          try {
            let l = R.parse(ge.readFileSync(i, { encoding: e.encoding }), { fast: e.fast });
            R.populate(n, l, o), t.push(s);
          } catch (l) {
            if (e.debug && console.log(`\u2506 failed to load ${s} ${l.message}`), !(e.defaultPath && l.code === "ENOENT")) throw l;
          }
        }
        return { injected: R.populate(process.env, n, o), loadedPaths: t };
      }
      function K(e) {
        let n = e[0];
        if (n === "--help" || n === "-h") {
          D();
          return;
        }
        if (n !== "run") {
          D(), process.exitCode = 1;
          return;
        }
        let t = we(e.slice(1));
        if (t.help) {
          D();
          return;
        }
        if (t.error) {
          console.error(`dotenv: ${t.error}`), D(), process.exitCode = 1;
          return;
        }
        if (t.command.length === 0) {
          D(), process.exitCode = 1;
          return;
        }
        let o = Ee(t);
        try {
          let c = be(o);
          if (!(o.quiet == null ? J().quiet : o.quiet)) {
            let g = `\u25C7 injected env (${Object.keys(c.injected).length})`;
            c.loadedPaths.length > 0 && (g += ` from ${c.loadedPaths.join(", ")}`), console.error(g);
          }
        } catch (c) {
          console.error(`dotenv: ${c.message}`), process.exitCode = 1;
          return;
        }
        let r = !!process.stdin.isTTY, s = process.platform !== "win32" && !r, i = Ce(t.command[0], t.command.slice(1), { stdio: "inherit", detached: s }), l = /* @__PURE__ */ new Map(), d = 0;
        function h(c) {
          if (!(!i.pid || i.exitCode !== null || i.signalCode !== null)) {
            if (process.platform === "win32") {
              ve.spawnSync("taskkill", ["/pid", String(i.pid), "/T", "/F"], { stdio: "ignore" });
              return;
            }
            try {
              process.kill(s ? -i.pid : i.pid, c);
            } catch (a) {
              if (a.code !== "ESRCH") throw a;
            }
          }
        }
        function f() {
          for (let [c, a] of l) process.removeListener(c, a);
        }
        for (let c of ["SIGINT", "SIGTERM", "SIGHUP", "SIGQUIT"]) {
          let a = () => {
            if (c === "SIGINT") {
              if (d++, r && process.platform !== "win32" && d === 1) return;
              if (d > 1) {
                h(d === 2 ? "SIGTERM" : "SIGKILL");
                return;
              }
            }
            h(c);
          };
          l.set(c, a), process.on(c, a);
        }
        i.on("error", function(c) {
          f(), console.error(`dotenv: ${c.message}`), process.exitCode = 1;
        }), i.on("exit", function(c, a) {
          f(), typeof c == "number" ? process.exit(c) : (setInterval(() => {
          }, 1e3), process.kill(process.pid, a));
        });
      }
      F.exports = K;
      require.main === F && K(process.argv.slice(2));
    });
    var S = N();
    var qe = X();
    module2.exports = S;
    module2.exports.config = S.config;
    module2.exports.configDotenv = S.configDotenv;
    module2.exports.parse = S.parse;
    module2.exports.populate = S.populate;
    require.main === module2 && qe(process.argv.slice(2));
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  app: () => app,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  return new Response(arrayBuffer, { headers: { "Content-Type": contentType.replace(/^[^;]+/, (mediaType) => mediaType.toLowerCase()) } }).formData();
};

// node_modules/hono/dist/utils/body.js
var MAX_NESTED_OBJECTS = 1e4;
var isRawRequest = (request) => "headers" in request;
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const mediaType = (isRawRequest(request) ? request.headers : request.raw.headers).get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") return parseFormData(request, {
    all,
    dot
  });
  return {};
};
async function parseFormData(request, options) {
  if (!isRawRequest(request) && request.bodyCache.formData) return convertFormDataToBodyData(await request.bodyCache.formData, options);
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const arrayBuffer = await request.arrayBuffer();
  const formDataPromise = bufferToFormData(arrayBuffer, headers.get("Content-Type") || "");
  if (!isRawRequest(request)) request.bodyCache.formData = formDataPromise;
  const formData = await formDataPromise;
  if (formData) return convertFormDataToBodyData(formData, options);
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  const nestingState = { count: 0 };
  formData.forEach((value, key) => {
    if (!(options.all || key.endsWith("[]"))) form[key] = value;
    else handleParsingAllValues(form, key, value);
  });
  if (options.dot) Object.entries(form).forEach(([key, value]) => {
    if (key.includes(".")) {
      handleParsingNestedValues(form, key, value, nestingState);
      delete form[key];
    }
  });
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) form[key].push(value);
    else form[key] = [form[key], value];
  } else if (!key.endsWith("[]")) form[key] = value;
  else form[key] = [value];
};
var handleParsingNestedValues = (form, key, value, state) => {
  if (/(?:^|\.)__proto__\./.test(key)) return;
  let nestedForm = form;
  const keys = key.split(".", 34);
  if (keys.length > 33) throwNestingLimitExceeded();
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) nestedForm[key2] = value;
    else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        if (state.count++ >= MAX_NESTED_OBJECTS) throwNestingLimitExceeded();
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};
var throwNestingLimitExceeded = () => {
  throw new Error("Nesting limit exceeded");
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") paths.shift();
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return {
    groups,
    path
  };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) if (paths[j].includes(mark)) {
      paths[j] = paths[j].replace(mark, groups[i][1]);
      break;
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") return "*";
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [
        cacheKey,
        match2[1],
        new RegExp(`^${match2[2]}(?=/${next})`)
      ] : [
        label,
        match2[1],
        new RegExp(`^${match2[2]}$`)
      ];
      else patternCache[cacheKey] = [
        label,
        match2[1],
        true
      ];
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder2) => {
  try {
    return decoder2(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder2(match2);
      } catch {
        return match2;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) break;
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var stripPathPrefix = (rawPath, decodedPath, prefixLength) => {
  if (rawPath.at(-1) === "/" && decodedPath.at(-1) !== "/") rawPath = rawPath.slice(0, -1);
  let index = 0;
  for (let i = decodedPath.indexOf("/"); i !== -1 && i < prefixLength; i = decodedPath.indexOf("/", i + 1)) {
    index = rawPath.indexOf("/", index + 1);
    if (index === -1) return "/";
  }
  return rawPath.slice(index) || "/";
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) sub = mergePath(sub, ...rest);
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) return null;
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) basePath += "/" + segment;
    else if (/\:/.test(segment)) {
      if (segment.charCodeAt(segment.length - 1) === 63) {
        if (results.length === 0 && basePath === "") results.push("/");
        else results.push(basePath);
        const optionalSegment = segment.slice(0, -1);
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else basePath += "/" + segment;
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var tryDecodeURIComponent = (str) => str.indexOf("%") !== -1 ? tryDecode(str, decodeURIComponent_) : str;
var _decodeURI = (value) => {
  if (value.indexOf("+") !== -1) value = value.replace(/\+/g, " ");
  return tryDecodeURIComponent(value);
};
var _getQueryParam = (url, key, multiple) => {
  const hashIndex = url.indexOf("#", 8);
  if (hashIndex !== -1) url = url.slice(0, hashIndex);
  let encoded;
  if (!multiple && key && key.indexOf("%") === -1 && key.indexOf("+") === -1) {
    const queryIndex = url.indexOf("?", 8);
    let keyIndex2 = queryIndex;
    if (keyIndex2 === -1) return;
    if (!url.startsWith(key, keyIndex2 + 1)) keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61 || trailingKeyCode === 38 || isNaN(trailingKeyCode)) {
        if (keyIndex2 > queryIndex && /(?:^|&)[^=&]*[%+]/.test(url.slice(queryIndex + 1, keyIndex2))) break;
        if (trailingKeyCode === 61) {
          const valueIndex = keyIndex2 + key.length + 2;
          const endIndex = url.indexOf("&", valueIndex);
          return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
        }
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) return;
  }
  const results = /* @__PURE__ */ Object.create(null);
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) valueIndex = -1;
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex);
    if (encoded) name = _decodeURI(name);
    keyIndex = nextKeyIndex;
    if (name === "") continue;
    let value;
    if (valueIndex === -1) value = "";
    else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) value = _decodeURI(value);
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) results[name] = [];
      results[name].push(value);
    } else results[name] ??= value;
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = class {
  /**
  * `.raw` can get the raw Request object.
  *
  * @see {@link https://hono.dev/docs/api/request#raw}
  *
  * @example
  * ```ts
  * // For Cloudflare Workers
  * app.post('/', async (c) => {
  *   const metadata = c.req.raw.cf?.hostMetadata?
  *   ...
  * })
  * ```
  */
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  /**
  * `.path` can get the pathname of the request.
  *
  * @see {@link https://hono.dev/docs/api/request#path}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const pathname = c.req.path // `/about/me`
  * })
  * ```
  */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex]?.[1][key];
    const param = this.#getParamValue(paramKey);
    return param && tryDecodeURIComponent(param);
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex]?.[1] ?? {});
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) decoded[key] = tryDecodeURIComponent(value);
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) return this.raw.headers.get(name) ?? void 0;
    const headerData = /* @__PURE__ */ Object.create(null);
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) return cachedBody;
    for (const anyCachedKey in bodyCache) return bodyCache[anyCachedKey].then((body) => {
      if (anyCachedKey === "json") body = JSON.stringify(body);
      const contentType = anyCachedKey === "formData" ? void 0 : raw2.headers.get("content-type");
      return new Response(body, { headers: contentType ? { "Content-Type": contentType } : void 0 })[key]();
    });
    return bodyCache[key] = raw2[key]();
  };
  /**
  * `.json()` can parse Request body of type `application/json`
  *
  * @see {@link https://hono.dev/docs/api/request#json}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.json()
  * })
  * ```
  */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
  * `.text()` can parse Request body of type `text/plain`
  *
  * @see {@link https://hono.dev/docs/api/request#text}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.text()
  * })
  * ```
  */
  text() {
    return this.#cachedBody("text");
  }
  /**
  * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
  *
  * @see {@link https://hono.dev/docs/api/request#arraybuffer}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.arrayBuffer()
  * })
  * ```
  */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
  * `.bytes()` parses the request body as a `Uint8Array`.
  *
  * @see {@link https://hono.dev/docs/api/request#bytes}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.bytes()
  * })
  * ```
  */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
  * Parses the request body as a `Blob`.
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.blob();
  * });
  * ```
  * @see https://hono.dev/docs/api/request#blob
  */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
  * Parses the request body as `FormData`.
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.formData();
  * });
  * ```
  * @see https://hono.dev/docs/api/request#formdata
  */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
  * Adds validated data to the request.
  *
  * @param target - The target of the validation.
  * @param data - The validated data to add.
  */
  addValidatedData(target, data) {
    (this.#validatedData ??= {})[target] = data;
  }
  valid(target) {
    return this.#validatedData?.[target];
  }
  /**
  * `.url` can get the request url strings.
  *
  * @see {@link https://hono.dev/docs/api/request#url}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const url = c.req.url // `http://localhost:8787/about/me`
  *   ...
  * })
  * ```
  */
  get url() {
    return this.raw.url;
  }
  /**
  * `.method` can get the method name of the request.
  *
  * @see {@link https://hono.dev/docs/api/request#method}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const method = c.req.method // `GET`
  * })
  * ```
  */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
  * `.matchedRoutes` can return a matched route in the handler
  *
  * @deprecated
  *
  * Use matchedRoutes helper defined in "hono/route" instead.
  *
  * @see {@link https://hono.dev/docs/api/request#matchedroutes}
  *
  * @example
  * ```ts
  * app.use('*', async function logger(c, next) {
  *   await next()
  *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
  *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
  *     console.log(
  *       method,
  *       ' ',
  *       path,
  *       ' '.repeat(Math.max(10 - path.length, 0)),
  *       name,
  *       i === c.req.routeIndex ? '<- respond from here' : ''
  *     )
  *   })
  * })
  * ```
  */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
  * `.routePath` can retrieve the path registered within the handler
  *
  * @deprecated
  *
  * Use routePath helper defined in "hono/route" instead.
  *
  * @see {@link https://hono.dev/docs/api/request#routepath}
  *
  * @example
  * ```ts
  * app.get('/posts/:id', (c) => {
  *   return c.json({ path: c.req.routePath })
  * })
  * ```
  */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) str = str.toString();
    if (str instanceof Promise) str = await str;
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) return Promise.resolve(str);
  if (buffer) buffer[0] += str;
  else buffer = [str];
  const resStr = Promise.all(callbacks.map((c) => c({
    phase,
    buffer,
    context
  }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) return raw(await resStr, callbacks);
  else return resStr;
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
};
var createResponseInstance = (body, init) => new Response(body, init);
var Context = class {
  #rawRequest;
  #req;
  /**
  * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
  *
  * @see {@link https://hono.dev/docs/api/context#env}
  *
  * @example
  * ```ts
  * // Environment object for Cloudflare Workers
  * app.get('*', async c => {
  *   const counter = c.env.COUNTER
  * })
  * ```
  */
  env = {};
  #var;
  finalized = false;
  /**
  * `.error` can get the error object from the middleware if the Handler throws an error.
  *
  * @see {@link https://hono.dev/docs/api/context#error}
  *
  * @example
  * ```ts
  * app.use('*', async (c, next) => {
  *   await next()
  *   if (c.error) {
  *     // do something...
  *   }
  * })
  * ```
  */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
  * Creates an instance of the Context class.
  *
  * @param req - The Request object.
  * @param options - Optional configuration options for the context.
  */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
  * `.req` is the instance of {@link HonoRequest}.
  */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#event}
  * The FetchEvent associated with the current request.
  *
  * @throws Will throw an error if the context does not have a FetchEvent.
  */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) return this.#executionCtx;
    else throw Error("This context has no FetchEvent");
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#executionctx}
  * The ExecutionContext associated with the current request.
  *
  * @throws Will throw an error if the context does not have an ExecutionContext.
  */
  get executionCtx() {
    if (this.#executionCtx) return this.#executionCtx;
    else throw Error("This context has no ExecutionContext");
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#res}
  * The Response object for the current request.
  */
  get res() {
    return this.#res ||= createResponseInstance(null, { headers: this.#preparedHeaders ??= new Headers() });
  }
  /**
  * Sets the Response object for the current request.
  *
  * @param _res - The Response object to set.
  */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") continue;
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) _res.headers.append("set-cookie", cookie);
        } else _res.headers.set(k, v);
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
  * `.render()` can create a response within a layout.
  *
  * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
  *
  * @example
  * ```ts
  * app.get('/', (c) => {
  *   return c.render('Hello!')
  * })
  * ```
  */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
  * Sets the layout for the response.
  *
  * @param layout - The layout to set.
  * @returns The layout function.
  */
  setLayout = (layout) => this.#layout = layout;
  /**
  * Gets the current layout for the response.
  *
  * @returns The current layout function.
  */
  getLayout = () => this.#layout;
  /**
  * `.setRenderer()` can set the layout in the custom middleware.
  *
  * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
  *
  * @example
  * ```tsx
  * app.use('*', async (c, next) => {
  *   c.setRenderer((content) => {
  *     return c.html(
  *       <html>
  *         <body>
  *           <p>{content}</p>
  *         </body>
  *       </html>
  *     )
  *   })
  *   await next()
  * })
  * ```
  */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
  * `.header()` can set headers.
  *
  * @see {@link https://hono.dev/docs/api/context#header}
  *
  * @example
  * ```ts
  * app.get('/welcome', (c) => {
  *   // Set headers
  *   c.header('X-Message', 'Hello!')
  *   c.header('Content-Type', 'text/plain')
  *
  *   // Append multiple headers using the append option (e.g. Vary)
  *   c.header('Vary', 'Accept-Encoding', { append: true })
  *   c.header('Vary', 'User-Agent', { append: true })
  *
  *   return c.body('Thank you for coming')
  * })
  * ```
  */
  header = (name, value, options) => {
    if (this.finalized && !this.#res.bodyUsed) this.#res = createResponseInstance(this.#res.body, this.#res);
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) headers.delete(name);
    else if (options?.append) headers.append(name, value);
    else headers.set(name, value);
  };
  status = (status) => {
    this.#status = status;
  };
  /**
  * `.set()` can set the value specified by the key.
  *
  * @see {@link https://hono.dev/docs/api/context#set-get}
  *
  * @example
  * ```ts
  * app.use('*', async (c, next) => {
  *   c.set('message', 'Hono is hot!!')
  *   await next()
  * })
  * ```
  */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
  * `.get()` can use the value specified by the key.
  *
  * @see {@link https://hono.dev/docs/api/context#set-get}
  *
  * @example
  * ```ts
  * app.get('/', (c) => {
  *   const message = c.get('message')
  *   return c.text(`The message is "${message}"`)
  * })
  * ```
  */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
  * `.var` can access the value of a variable.
  *
  * @see {@link https://hono.dev/docs/api/context#var}
  *
  * @example
  * ```ts
  * const result = c.var.client.oneMethod()
  * ```
  */
  get var() {
    if (!this.#var) return {};
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders;
    if (typeof arg === "object" && arg.headers) {
      responseHeaders ??= new Headers();
      for (const [key, value] of new Headers(arg.headers)) if (key === "set-cookie") responseHeaders.append(key, value);
      else responseHeaders.set(key, value);
    }
    if (headers) {
      if (!responseHeaders) {
        let count = 0;
        for (const k in headers) if (++count > 1 || typeof headers[k] !== "string") {
          responseHeaders = new Headers();
          break;
        }
      }
      if (responseHeaders) for (const k in headers) {
        const v = headers[k];
        if (typeof v === "string") responseHeaders.set(k, v);
        else {
          responseHeaders.delete(k);
          for (const v2 of v) responseHeaders.append(k, v2);
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, {
      status,
      headers: responseHeaders ?? headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
  * `.body()` can return the HTTP response.
  * You can set headers with `.header()` and set HTTP status code with `.status`.
  * This can also be set in `.text()`, `.json()` and so on.
  *
  * @see {@link https://hono.dev/docs/api/context#body}
  *
  * @example
  * ```ts
  * app.get('/welcome', (c) => {
  *   // Set headers
  *   c.header('X-Message', 'Hello!')
  *   c.header('Content-Type', 'text/plain')
  *   // Set HTTP status code
  *   c.status(201)
  *
  *   // Return the response body
  *   return c.body('Thank you for coming')
  * })
  * ```
  */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
  * `.text()` can render text as `Content-Type:text/plain`.
  *
  * @see {@link https://hono.dev/docs/api/context#text}
  *
  * @example
  * ```ts
  * app.get('/say', (c) => {
  *   return c.text('Hello!')
  * })
  * ```
  */
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(text, arg, setDefaultContentType(TEXT_PLAIN, headers));
  };
  /**
  * `.json()` can render JSON as `Content-Type:application/json`.
  *
  * @see {@link https://hono.dev/docs/api/context#json}
  *
  * @example
  * ```ts
  * app.get('/api', (c) => {
  *   return c.json({ message: 'Hello!' })
  * })
  * ```
  */
  json = (object, arg, headers) => {
    return this.#newResponse(JSON.stringify(object), arg, setDefaultContentType("application/json", headers));
  };
  html = (html, arg, headers) => {
    const res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  };
  /**
  * `.redirect()` can Redirect, default status code is 302.
  *
  * @see {@link https://hono.dev/docs/api/context#redirect}
  *
  * @example
  * ```ts
  * app.get('/redirect', (c) => {
  *   return c.redirect('/')
  * })
  * app.get('/redirect-permanently', (c) => {
  *   return c.redirect('/', 301)
  * })
  * ```
  */
  redirect = (location, status) => {
    const locationString = String(location);
    this.header("Location", !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString));
    return this.newResponse(null, status ?? 302);
  };
  /**
  * `.notFound()` can return the Not Found Response.
  *
  * @see {@link https://hono.dev/docs/api/context#notfound}
  *
  * @example
  * ```ts
  * app.get('/notfound', (c) => {
  *   return c.notFound()
  * })
  * ```
  */
  notFound = () => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) throw new Error("next() called multiple times");
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else handler = i === middleware.length && next || void 0;
      if (handler) try {
        res = await handler(context, () => dispatch(i + 1));
      } catch (err) {
        if (err instanceof Error && onError) {
          context.error = err;
          res = await onError(err, context);
          isError = true;
        } else throw err;
      }
      else if (context.finalized === false && onNotFound) res = await onNotFound(context);
      if (res && (context.finalized === false || isError)) context.res = res;
      return context;
    }
  };
};

// node_modules/hono/dist/router.js
var METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "options",
  "patch",
  "query"
];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/utils/mount.js
var getPathPrefixLength = (c, pathPrefix, routePath) => {
  if (!/[:*]/.test(pathPrefix)) return pathPrefix.length;
  const path = c.req.path;
  const matchResult = c.req[GET_MATCH_RESULT];
  const paramNames = /* @__PURE__ */ new Set();
  let length = 0;
  for (const part of splitRoutingPath(pathPrefix)) {
    const pattern = getPattern(part);
    if (pattern && pattern !== "*") {
      const name = pattern[1];
      if (paramNames.has(name)) throw new Error(`mount(): Duplicate path parameter "${name}" in "${routePath}".`);
      paramNames.add(name);
    }
    if (pattern && pattern !== "*" && pattern[2] !== true) {
      const value = matchResult.length === 2 ? matchResult[1][matchResult[0][c.req.routeIndex][1][pattern[1]]] : matchResult[0][c.req.routeIndex][1][pattern[1]];
      length += value.length + 1;
    } else if (pattern || part.endsWith("*")) {
      const end = path.indexOf("/", length + 1);
      length = end === -1 ? path.length : end;
    } else length += part.length + 1;
  }
  return length;
};
var createMountedRequest = (c, pathPrefix, routePath) => {
  if (/[^/]\*$/.test(routePath)) throw new Error(`mount(): Wildcard must follow "/" in "${routePath}".`);
  const url = new URL(c.req.raw.url);
  url.pathname = stripPathPrefix(url.pathname, c.req.path, getPathPrefixLength(c, pathPrefix, routePath));
  return new Request(url, c.req.raw);
};

// node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class Hono2 {
  get;
  post;
  put;
  delete;
  options;
  patch;
  query;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    [...METHODS, "all"].forEach((method) => {
      this[method] = (args1, ...args) => {
        const methodName = method.toUpperCase();
        if (typeof args1 === "string") this.#path = args1;
        else this.#addRoute(methodName, this.#path, args1);
        args.forEach((handler) => {
          this.#addRoute(methodName, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          const methodName = m.toUpperCase();
          for (const handler of handlers) this.#addRoute(methodName, this.#path, handler);
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") this.#path = arg1;
      else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute("ALL", this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono2({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  /**
  * `.route()` allows grouping other Hono instance in routes.
  *
  * @see {@link https://hono.dev/docs/api/routing#grouping}
  *
  * @param {string} path - base Path
  * @param {Hono} app - other Hono instance
  * @returns {Hono} routed Hono instance
  *
  * @example
  * ```ts
  * const app = new Hono()
  * const app2 = new Hono()
  *
  * app2.get("/user", (c) => c.text("user"))
  * app.route("/api", app2) // GET /api/user
  * ```
  */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) handler = r.handler;
      else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
  * `.basePath()` allows base paths to be specified.
  *
  * @see {@link https://hono.dev/docs/api/routing#base-path}
  *
  * @param {string} path - base Path
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * const api = new Hono().basePath('/api')
  * ```
  */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
  * `.onError()` handles an error and returns a customized Response.
  *
  * @see {@link https://hono.dev/docs/api/hono#error-handling}
  *
  * @param {ErrorHandler} handler - request Handler for error
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * app.onError((err, c) => {
  *   console.error(`${err}`)
  *   return c.text('Custom Error Message', 500)
  * })
  * ```
  */
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  /**
  * `.notFound()` allows you to customize a Not Found Response.
  *
  * @see {@link https://hono.dev/docs/api/hono#not-found}
  *
  * @param {NotFoundHandler} handler - request handler for not-found
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * app.notFound((c) => {
  *   return c.text('Custom 404 Message', 404)
  * })
  * ```
  */
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  /**
  * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
  *
  * @deprecated Use `mount()` from `hono/mount` instead. `.mount()` will be removed in v5.
  *
  * @see {@link https://hono.dev/docs/api/hono#mount}
  *
  * @param {string} path - base Path
  * @param {Function} applicationHandler - other Request Handler
  * @param {MountOptions} [options] - options of `.mount()`
  * @returns {Hono} mounted Hono instance
  *
  * @example
  * ```ts
  * import { Router as IttyRouter } from 'itty-router'
  * import { Hono } from 'hono'
  * // Create itty-router application
  * const ittyRouter = IttyRouter()
  * // GET /itty-router/hello
  * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
  *
  * const app = new Hono()
  * app.mount('/itty-router', ittyRouter.handle)
  * ```
  *
  * @example
  * ```ts
  * const app = new Hono()
  * // Send the request to another application without modification.
  * app.mount('/app', anotherApp, {
  *   replaceRequest: (req) => req,
  * })
  * ```
  */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") optionHandler = options;
      else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) replaceRequest = (request) => request;
        else replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    const mergedPath = mergePath(this._basePath, path);
    const defaultReplaceRequest = (c) => createMountedRequest(c, mergedPath.replace(/\/$/, ""), mergePath(mergedPath, "*"));
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest ? replaceRequest(c.req.raw) : defaultReplaceRequest(c), ...getOptions(c));
      if (res) return res;
      await next();
    };
    this.#addRoute("ALL", mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) return this.errorHandler(err, c);
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
  * `.fetch()` will be entry point of your app.
  *
  * @see {@link https://hono.dev/docs/api/hono#fetch}
  *
  * @param {Request} request - request Object of request
  * @param {Env} env - env Object
  * @param {ExecutionContext} executionCtx - context of execution
  * @returns {Response | Promise<Response>} response of request
  *
  */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
  * `.request()` is a useful method for testing.
  * You can pass a URL or pathname to send a GET request.
  * app will return a Response object.
  * ```ts
  * test('GET /hello is ok', async () => {
  *   const res = await app.request('/hello')
  *   expect(res.status).toBe(200)
  * })
  * ```
  * @see https://hono.dev/docs/api/hono#request
  */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  };
  /**
  * `.fire()` automatically adds a global fetch event listener.
  * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
  * @deprecated
  * Use `fire` from `hono/service-worker` instead.
  * ```ts
  * import { Hono } from 'hono'
  * import { fire } from 'hono/service-worker'
  *
  * const app = new Hono()
  * // ...
  * fire(app)
  * ```
  * @see https://hono.dev/docs/api/hono#fire
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
  * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
  */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/utils.js
var createNullObject = () => /* @__PURE__ */ Object.create(null);

// node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = ((method2, path2) => {
    const matcher = matchers[method2] || matchers["ALL"];
    const staticMatch = matcher[2][path2];
    if (staticMatch) return staticMatch;
    const match3 = path2.match(matcher[0]);
    if (!match3) return [[], emptyParam];
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  });
  this.match = match2;
  return match2(method, path);
}

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = "[^]*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/[^]*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = /* @__PURE__ */ new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) return b.length === 1 ? a < b ? -1 : 1 : -1;
  if (b.length === 1) return 1;
  if (a === "[^]*" || a === "(?:|/[^]*)") return b === "[^]*" ? -1 : 1;
  else if (b === "[^]*" || b === "(?:|/[^]*)") return -1;
  if (a === "[^/]+") return 1;
  else if (b === "[^/]+") return -1;
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class Node2 {
  #index;
  #varIndex;
  #children = createNullObject();
  insert(tokens, index, paramMap, context, keys) {
    let node = this;
    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      const pattern = token.length === 1 ? token === "*" ? i === len - 1 ? [
        "",
        "",
        ONLY_WILDCARD_REG_EXP_STR
      ] : [
        "",
        "",
        LABEL_REG_EXP_STR
      ] : null : token === "/*" ? [
        "",
        "",
        TAIL_WILDCARD_REG_EXP_STR
      ] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
      let nextNode;
      if (pattern) {
        const name = pattern[1];
        let regexpStr = pattern[2] || "[^/]+";
        if (name && pattern[2]) {
          if (new RegExp(regexpStr).test("")) throw PATH_ERROR;
          regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
          if (/\((?!\?:)/.test(regexpStr)) throw PATH_ERROR;
          if (regexpStr.length === 1 && regExpMetaChars.has(regexpStr)) throw PATH_ERROR;
        }
        keys.push(regexpStr);
        nextNode = node.#children[regexpStr];
        if (!nextNode) {
          if (regexpStr !== "[^]*" && regexpStr !== "(?:|/[^]*)") {
            for (const k in node.#children) if ((regexpStr.length > 1 || k.length > 1) && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
          }
          nextNode = node.#children[regexpStr] = new Node2();
        }
        if (name !== "") {
          nextNode.#varIndex ??= context.varIndex++;
          paramMap.push([name, nextNode.#varIndex]);
        }
      } else {
        keys.push(token);
        nextNode = node.#children[token];
        if (!nextNode) {
          for (const k in node.#children) if (k.length > 1 && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
          nextNode = node.#children[token] = new Node2();
        }
      }
      node = nextNode;
    }
    if (node.#index !== void 0) throw PATH_ERROR;
    node.#index = index;
  }
  buildRegExpStr() {
    const strList = Object.keys(this.#children).sort(compareKey).map((k) => {
      const c = this.#children[k];
      const childStr = c.buildRegExpStr();
      return childStr === "" ? "" : (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + childStr;
    }).filter(Boolean);
    if (typeof this.#index === "number" && this.#index !== -1) strList.unshift(`#${this.#index}`);
    if (strList.length === 0) return "";
    if (strList.length === 1) return strList[0];
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
  #index = 0;
  paths = createNullObject();
  insert(path, isStatic) {
    const keys = [];
    if (isStatic) {
      this.#root.insert(path.split(""), -1, [], this.#context, keys);
      this.paths[path] = [
        -1,
        [],
        keys
      ];
      return;
    }
    const paramAssoc = [];
    const groups = [];
    let markedPath = path;
    for (let i = 0; ; ) {
      let replaced = false;
      markedPath = markedPath.replace(/\{(?:\{[\d,]+\}|[^}])+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) break;
    }
    const tokens = markedPath.match(/(?::[^\/]+)|(?:\/\*$)|./gs) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) if (tokens[j].indexOf(mark) !== -1) {
        tokens[j] = tokens[j].replace(mark, groups[i][1]);
        break;
      }
    }
    this.#root.insert(tokens, this.#index, paramAssoc, this.#context, keys);
    this.paths[path] = [
      this.#index++,
      paramAssoc,
      keys
    ];
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") return [
      /^$/,
      [],
      []
    ];
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [
      new RegExp(`^${regexp}`),
      indexReplacementMap,
      paramReplacementMap
    ];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
function endsWithWildcard(keys) {
  const tail = keys[keys.length - 1];
  return tail === "[^]*" || tail === "(?:|/[^]*)";
}
function covers(wildcard, target) {
  const last = wildcard.length - 1;
  for (let i = 0; i < last; i++) if (wildcard[i] !== target[i]) return false;
  return wildcard[last] === "[^]*" || target.length === last || target[last] === "/";
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #handlers;
  #tries;
  constructor() {
    this.#handlers = { ["ALL"]: [] };
    this.#tries = { ["ALL"]: new Trie() };
  }
  #insertPath(method, path) {
    try {
      this.#tries[method].insert(path, !/\*|\/:/.test(path));
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
  }
  add(method, path, handler) {
    const handlers = this.#handlers;
    if (!handlers) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    const tries = this.#tries;
    if (!handlers[method]) {
      tries[method] = new Trie();
      handlers[method] = [...handlers["ALL"]];
      for (const p in tries["ALL"].paths) this.#insertPath(method, p);
    }
    if (path === "/*") path = "*";
    const methods = method === "ALL" ? Object.keys(handlers) : [method];
    const paths = checkOptionalParameter(path) || [path];
    for (const path2 of paths) for (const m of methods) {
      if (!tries[m].paths[path2]) this.#insertPath(m, path2);
      handlers[m].push([handler, path2]);
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = createNullObject();
    for (const method of Object.keys(this.#handlers)) matchers[method] = this.#buildMatcher(method);
    this.#handlers = this.#tries = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const handlers = this.#handlers[method];
    const trie = this.#tries[method];
    const staticMap = createNullObject();
    const handlerData = [];
    const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
    const own = createNullObject();
    const entries = handlers.map(([h, p], i) => {
      (own[p] ??= []).push(i);
      return [h, trie.paths[p][1].reduceRight((map, [key, varIndex]) => {
        map[key] = paramReplacementMap[varIndex];
        return map;
      }, createNullObject())];
    });
    const wildcards = Object.keys(own).filter((p) => endsWithWildcard(trie.paths[p][2]));
    for (const path in trie.paths) {
      const [index, , keys] = trie.paths[path];
      const indexes = [...own[path]];
      for (const p of wildcards) if (p !== path && covers(trie.paths[p][2], keys)) indexes.push(...own[p]);
      const data = indexes.sort((a, b) => a - b).map((i) => entries[i]);
      if (index === -1) {
        const last = Math.max(-1, ...data.flatMap(([, map]) => Object.values(map)));
        staticMap[path] = [data, last === -1 ? emptyParam : path.match(regexp).slice(0, last + 1)];
      } else handlerData[index] = data;
    }
    return [
      regexp,
      indexReplacementMap.map((i) => handlerData[i]),
      staticMap
    ];
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    this.#routes.push([
      method,
      path,
      handler
    ]);
  }
  match(method, path) {
    if (!this.#routes) throw new Error("Fatal error");
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) router.add(...routes[i2]);
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) continue;
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) throw new Error("Fatal error");
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) throw new Error("No active router has been determined yet.");
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = createNullObject();
var order = 0;
var Node3 = class Node4 {
  #methods = [];
  #children = createNullObject();
  #patterns = [];
  #pattern;
  #params = emptyParams;
  insert(method, path, handler) {
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = /* @__PURE__ */ new Set();
    let i = 0;
    for (const p of parts) {
      const nextP = parts[++i];
      const pattern = getPattern(p, nextP) || (nextP === void 0 && p && p.indexOf("*") === p.length - 1 ? p : null);
      const isParam = Array.isArray(pattern);
      const key = isParam ? pattern[0] : pattern || p;
      const child = curNode.#children[key] ||= new Node4();
      if (pattern && !child.#pattern) {
        child.#pattern = pattern;
        curNode.#patterns.push(child);
      }
      curNode = child;
      if (isParam) possibleKeys.add(pattern[1]);
    }
    curNode.#methods.push({ [method]: {
      handler,
      possibleKeys: [...possibleKeys],
      score: ++order
    } });
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m["ALL"];
      if (handlerSet) {
        handlerSet.params = createNullObject();
        handlerSets.push(handlerSet);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          handlerSet.params[key] = params?.[key] && !i2 ? params[key] : nodeParams[key] ?? params?.[key];
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    let curNodes = [this];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else tempNodes.push(nextNode);
        }
        for (const child of node.#patterns) {
          const pattern = child.#pattern;
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (typeof pattern === "string") {
            if (pattern === "*" || part.startsWith(pattern.slice(0, -1))) {
              this.#pushHandlerSets(handlerSets, child, method, node.#params);
              if (pattern === "*") {
                child.#params = params;
                tempNodes.push(child);
              }
            }
            continue;
          }
          const [, name, matcher] = pattern;
          if (!part && matcher === true) continue;
          if (matcher !== true) {
            if (!partOffsets) {
              partOffsets = [];
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.slice(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              if (!Object.hasOwn(params, name)) params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (m[0].length === restPathString.length && child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, node.#params, params);
              for (const _ in child.#children) {
                child.#params = params;
                const componentCount = m[0].match(/\//g)?.length ?? 0;
                (curNodesQueue[componentCount] ||= []).push(child);
                break;
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            if (!Object.hasOwn(params, name)) params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, params, node.#params);
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets[1]) handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node = new Node3();
  add(method, path, handler) {
    for (const result of checkOptionalParameter(path) || [path]) this.#node.insert(method, result, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono3 = class extends Hono {
  /**
  * Creates an instance of the Hono class.
  *
  * @param options - Optional configuration options for the Hono instance.
  */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({ routers: [new RegExpRouter(), new TrieRouter()] });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const opts = {
    origin: "*",
    allowMethods: [
      "GET",
      "HEAD",
      "PUT",
      "POST",
      "DELETE",
      "PATCH",
      "QUERY"
    ],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const exposeHeadersStr = opts.exposeHeaders?.length ? opts.exposeHeaders.join(",") : void 0;
  const allowHeadersStr = opts.allowHeaders?.length ? opts.allowHeaders.join(",") : void 0;
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") return () => optsOrigin;
      else return (origin) => optsOrigin === origin ? origin : null;
    } else if (typeof optsOrigin === "function") return optsOrigin;
    else return (origin) => optsOrigin.includes(origin) ? origin : null;
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") return async (origin, c) => (await optsAllowMethods(origin, c)).join(",");
    else if (Array.isArray(optsAllowMethods)) {
      const methodsStr = optsAllowMethods.join(",");
      return () => methodsStr;
    } else return () => "";
  })(opts.allowMethods);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) set("Access-Control-Allow-Origin", allowOrigin);
    if (opts.credentials) set("Access-Control-Allow-Credentials", "true");
    if (exposeHeadersStr) set("Access-Control-Expose-Headers", exposeHeadersStr);
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") c.res.headers.append("Vary", "Origin");
      if (opts.maxAge != null) set("Access-Control-Max-Age", opts.maxAge.toString());
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods) set("Access-Control-Allow-Methods", allowMethods);
      let headersStr = allowHeadersStr;
      if (!headersStr) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) headersStr = requestHeaders.split(",").map((h) => h.trim()).join(",");
      }
      if (headersStr) {
        set("Access-Control-Allow-Headers", headersStr);
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") c.header("Vary", "Origin", { append: true });
  };
};

// node_modules/hono/dist/utils/color.js
function getColorEnabled() {
  const { process: process2, Deno } = globalThis;
  return !(typeof Deno?.noColor === "boolean" ? Deno.noColor : process2 !== void 0 ? "NO_COLOR" in process2?.env : false);
}
async function getColorEnabledAsync() {
  const { navigator } = globalThis;
  const cfWorkers = "cloudflare:workers";
  return !(navigator !== void 0 && navigator.userAgent === "Cloudflare-Workers" ? await (async () => {
    try {
      return "NO_COLOR" in ((await import(cfWorkers)).env ?? {});
    } catch {
      return false;
    }
  })() : !getColorEnabled());
}

// node_modules/hono/dist/middleware/logger/index.js
var humanize = (times) => {
  const [delimiter, separator] = [",", "."];
  return times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter)).join(separator);
};
var time = (start) => {
  const delta = Date.now() - start;
  return humanize([delta < 1e3 ? delta + "ms" : Math.round(delta / 1e3) + "s"]);
};
var colorStatus = async (status) => {
  if (await getColorEnabledAsync()) switch (status / 100 | 0) {
    case 5:
      return `\x1B[31m${status}\x1B[0m`;
    case 4:
      return `\x1B[33m${status}\x1B[0m`;
    case 3:
      return `\x1B[36m${status}\x1B[0m`;
    case 2:
      return `\x1B[32m${status}\x1B[0m`;
  }
  return `${status}`;
};
async function log(fn, prefix, method, path, status = 0, elapsed) {
  fn(prefix === "<--" ? `${prefix} ${method} ${path}` : `${prefix} ${method} ${path} ${await colorStatus(status)} ${elapsed}`);
}
var logger = (fn = console.log) => {
  return async function logger2(c, next) {
    const { method, url } = c.req;
    const path = url.slice(url.indexOf("/", 8));
    await log(fn, "<--", method, path);
    const start = Date.now();
    await next();
    await log(fn, "-->", method, path, c.res.status, time(start));
  };
};

// node_modules/hono/dist/middleware/pretty-json/index.js
var jsonContentTypeRegex = /^application\/(?:[a-z0-9._-]+\+)?json(?=$|[;\s])/i;
var prettyJSON = (options) => {
  const targetQuery = options?.query ?? "pretty";
  return async function prettyJSON2(c, next) {
    const pretty = options?.force || c.req.query(targetQuery) || c.req.query(targetQuery) === "";
    await next();
    const contentType = c.res.headers.get("Content-Type");
    if (pretty && contentType && jsonContentTypeRegex.test(contentType)) {
      let obj;
      try {
        obj = await c.res.clone().json();
      } catch {
        return;
      }
      c.res = new Response(JSON.stringify(obj, null, options?.space ?? 2), c.res);
      c.res.headers.delete("Content-Length");
    }
  };
};

// src/lib/response.ts
function sendSuccess(c, data, meta, status = 200) {
  return c.json(
    {
      ok: true,
      success: true,
      data,
      ...meta ? { meta } : {}
    },
    status
  );
}
function sendError(c, code, message2, status = 400, details) {
  return c.json(
    {
      ok: false,
      error: {
        code,
        message: message2,
        details: details ?? null
      }
    },
    status
  );
}

// src/lib/config.ts
var import_dotenv = __toESM(require_dist());
import_dotenv.default.config();
var rawJwtSecret = process.env.JWT_SECRET;
if (!rawJwtSecret) {
  if (process.env.NODE_ENV === "production") {
    console.error("\u{1F6A8} [CRITICAL SECURITY ERROR]: JWT_SECRET is not set in environment variables! Using insecure fallback is disabled in production.");
  } else {
    console.warn("\u26A0\uFE0F [DEV WARNING]: JWT_SECRET is not set. Using local development fallback key.");
  }
}
var JWT_SECRET_STRING = rawJwtSecret || "slam-dunk-dev-only-secret-key-change-in-production";
var JWT_SECRET_ENCODED = new TextEncoder().encode(JWT_SECRET_STRING);
var TRUSTED_DOMAINS = [
  "https://slam-dunk-w.vercel.app",
  "https://slamdunk.vercel.app"
];
function isAllowedOrigin(origin) {
  if (!origin) return true;
  if (origin === "http://localhost:3000" || origin === "http://localhost:4000" || origin === "http://localhost:5173" || origin === "http://127.0.0.1:3000" || origin === "http://127.0.0.1:4000" || origin === "http://127.0.0.1:5173") {
    return true;
  }
  if (TRUSTED_DOMAINS.includes(origin)) {
    return true;
  }
  if (/^https:\/\/slam-dunk-w[a-z0-9-]*\.vercel\.app$/.test(origin)) {
    return true;
  }
  return false;
}

// node_modules/bcryptjs/index.js
var import_crypto2 = __toESM(require("crypto"), 1);
var randomFallback = null;
function randomBytes(len) {
  try {
    return crypto.getRandomValues(new Uint8Array(len));
  } catch {
  }
  try {
    return import_crypto2.default.randomBytes(len);
  } catch {
  }
  if (!randomFallback) {
    throw Error(
      "Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative"
    );
  }
  return randomFallback(len);
}
function setRandomFallback(random) {
  randomFallback = random;
}
function genSaltSync(rounds, seed_length) {
  rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof rounds !== "number")
    throw Error(
      "Illegal arguments: " + typeof rounds + ", " + typeof seed_length
    );
  if (rounds < 4) rounds = 4;
  else if (rounds > 31) rounds = 31;
  var salt = [];
  salt.push("$2b$");
  if (rounds < 10) salt.push("0");
  salt.push(rounds.toString());
  salt.push("$");
  salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
  return salt.join("");
}
function genSalt(rounds, seed_length, callback) {
  if (typeof seed_length === "function")
    callback = seed_length, seed_length = void 0;
  if (typeof rounds === "function") callback = rounds, rounds = void 0;
  if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
  else if (typeof rounds !== "number")
    throw Error("illegal arguments: " + typeof rounds);
  function _async(callback2) {
    nextTick(function() {
      try {
        callback2(null, genSaltSync(rounds));
      } catch (err) {
        callback2(err);
      }
    });
  }
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
function hashSync(password, salt) {
  if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof salt === "number") salt = genSaltSync(salt);
  if (typeof password !== "string" || typeof salt !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
  return _hash(password, salt);
}
function hash(password, salt, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password === "string" && typeof salt === "number")
      genSalt(salt, function(err, salt2) {
        _hash(password, salt2, callback2, progressCallback);
      });
    else if (typeof password === "string" && typeof salt === "string")
      _hash(password, salt, callback2, progressCallback);
    else
      nextTick(
        callback2.bind(
          this,
          Error("Illegal arguments: " + typeof password + ", " + typeof salt)
        )
      );
  }
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
function safeStringCompare(known, unknown) {
  var diff = known.length ^ unknown.length;
  for (var i = 0; i < known.length; ++i) {
    diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
  }
  return diff === 0;
}
function compareSync(password, hash2) {
  if (typeof password !== "string" || typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof hash2);
  if (hash2.length !== 60) return false;
  return safeStringCompare(
    hashSync(password, hash2.substring(0, hash2.length - 31)),
    hash2
  );
}
function compare(password, hashValue, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password !== "string" || typeof hashValue !== "string") {
      nextTick(
        callback2.bind(
          this,
          Error(
            "Illegal arguments: " + typeof password + ", " + typeof hashValue
          )
        )
      );
      return;
    }
    if (hashValue.length !== 60) {
      nextTick(callback2.bind(this, null, false));
      return;
    }
    hash(
      password,
      hashValue.substring(0, 29),
      function(err, comp) {
        if (err) callback2(err);
        else callback2(null, safeStringCompare(comp, hashValue));
      },
      progressCallback
    );
  }
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
function getRounds(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  return parseInt(hash2.split("$")[2], 10);
}
function getSalt(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  if (hash2.length !== 60)
    throw Error("Illegal hash length: " + hash2.length + " != 60");
  return hash2.substring(0, 29);
}
function truncates(password) {
  if (typeof password !== "string")
    throw Error("Illegal arguments: " + typeof password);
  return utf8Length(password) > 72;
}
var nextTick = typeof setImmediate === "function" ? setImmediate : typeof scheduler === "object" && typeof scheduler.postTask === "function" ? scheduler.postTask.bind(scheduler) : setTimeout;
function utf8Length(string) {
  var len = 0, c = 0;
  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;
    else if (c < 2048) len += 2;
    else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
      ++i;
      len += 4;
    } else len += 3;
  }
  return len;
}
function utf8Array(string) {
  var offset = 0, c1, c2;
  var buffer = new Array(utf8Length(string));
  for (var i = 0, k = string.length; i < k; ++i) {
    c1 = string.charCodeAt(i);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }
  return buffer;
}
var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
var BASE64_INDEX = [
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  -1,
  -1,
  -1,
  -1,
  -1
];
function base64_encode(b, len) {
  var off = 0, rs = [], c1, c2;
  if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
  while (off < len) {
    c1 = b[off++] & 255;
    rs.push(BASE64_CODE[c1 >> 2 & 63]);
    c1 = (c1 & 3) << 4;
    if (off >= len) {
      rs.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b[off++] & 255;
    c1 |= c2 >> 4 & 15;
    rs.push(BASE64_CODE[c1 & 63]);
    c1 = (c2 & 15) << 2;
    if (off >= len) {
      rs.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b[off++] & 255;
    c1 |= c2 >> 6 & 3;
    rs.push(BASE64_CODE[c1 & 63]);
    rs.push(BASE64_CODE[c2 & 63]);
  }
  return rs.join("");
}
function base64_decode(s, len) {
  var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
  if (len <= 0) throw Error("Illegal len: " + len);
  while (off < slen - 1 && olen < len) {
    code = s.charCodeAt(off++);
    c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    code = s.charCodeAt(off++);
    c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c1 == -1 || c2 == -1) break;
    o = c1 << 2 >>> 0;
    o |= (c2 & 48) >> 4;
    rs.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c3 == -1) break;
    o = (c2 & 15) << 4 >>> 0;
    o |= (c3 & 60) >> 2;
    rs.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    o = (c3 & 3) << 6 >>> 0;
    o |= c4;
    rs.push(String.fromCharCode(o));
    ++olen;
  }
  var res = [];
  for (off = 0; off < olen; off++) res.push(rs[off].charCodeAt(0));
  return res;
}
var BCRYPT_SALT_LEN = 16;
var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
var BLOWFISH_NUM_ROUNDS = 16;
var MAX_EXECUTION_TIME = 100;
var P_ORIG = [
  608135816,
  2242054355,
  320440878,
  57701188,
  2752067618,
  698298832,
  137296536,
  3964562569,
  1160258022,
  953160567,
  3193202383,
  887688300,
  3232508343,
  3380367581,
  1065670069,
  3041331479,
  2450970073,
  2306472731
];
var S_ORIG = [
  3509652390,
  2564797868,
  805139163,
  3491422135,
  3101798381,
  1780907670,
  3128725573,
  4046225305,
  614570311,
  3012652279,
  134345442,
  2240740374,
  1667834072,
  1901547113,
  2757295779,
  4103290238,
  227898511,
  1921955416,
  1904987480,
  2182433518,
  2069144605,
  3260701109,
  2620446009,
  720527379,
  3318853667,
  677414384,
  3393288472,
  3101374703,
  2390351024,
  1614419982,
  1822297739,
  2954791486,
  3608508353,
  3174124327,
  2024746970,
  1432378464,
  3864339955,
  2857741204,
  1464375394,
  1676153920,
  1439316330,
  715854006,
  3033291828,
  289532110,
  2706671279,
  2087905683,
  3018724369,
  1668267050,
  732546397,
  1947742710,
  3462151702,
  2609353502,
  2950085171,
  1814351708,
  2050118529,
  680887927,
  999245976,
  1800124847,
  3300911131,
  1713906067,
  1641548236,
  4213287313,
  1216130144,
  1575780402,
  4018429277,
  3917837745,
  3693486850,
  3949271944,
  596196993,
  3549867205,
  258830323,
  2213823033,
  772490370,
  2760122372,
  1774776394,
  2652871518,
  566650946,
  4142492826,
  1728879713,
  2882767088,
  1783734482,
  3629395816,
  2517608232,
  2874225571,
  1861159788,
  326777828,
  3124490320,
  2130389656,
  2716951837,
  967770486,
  1724537150,
  2185432712,
  2364442137,
  1164943284,
  2105845187,
  998989502,
  3765401048,
  2244026483,
  1075463327,
  1455516326,
  1322494562,
  910128902,
  469688178,
  1117454909,
  936433444,
  3490320968,
  3675253459,
  1240580251,
  122909385,
  2157517691,
  634681816,
  4142456567,
  3825094682,
  3061402683,
  2540495037,
  79693498,
  3249098678,
  1084186820,
  1583128258,
  426386531,
  1761308591,
  1047286709,
  322548459,
  995290223,
  1845252383,
  2603652396,
  3431023940,
  2942221577,
  3202600964,
  3727903485,
  1712269319,
  422464435,
  3234572375,
  1170764815,
  3523960633,
  3117677531,
  1434042557,
  442511882,
  3600875718,
  1076654713,
  1738483198,
  4213154764,
  2393238008,
  3677496056,
  1014306527,
  4251020053,
  793779912,
  2902807211,
  842905082,
  4246964064,
  1395751752,
  1040244610,
  2656851899,
  3396308128,
  445077038,
  3742853595,
  3577915638,
  679411651,
  2892444358,
  2354009459,
  1767581616,
  3150600392,
  3791627101,
  3102740896,
  284835224,
  4246832056,
  1258075500,
  768725851,
  2589189241,
  3069724005,
  3532540348,
  1274779536,
  3789419226,
  2764799539,
  1660621633,
  3471099624,
  4011903706,
  913787905,
  3497959166,
  737222580,
  2514213453,
  2928710040,
  3937242737,
  1804850592,
  3499020752,
  2949064160,
  2386320175,
  2390070455,
  2415321851,
  4061277028,
  2290661394,
  2416832540,
  1336762016,
  1754252060,
  3520065937,
  3014181293,
  791618072,
  3188594551,
  3933548030,
  2332172193,
  3852520463,
  3043980520,
  413987798,
  3465142937,
  3030929376,
  4245938359,
  2093235073,
  3534596313,
  375366246,
  2157278981,
  2479649556,
  555357303,
  3870105701,
  2008414854,
  3344188149,
  4221384143,
  3956125452,
  2067696032,
  3594591187,
  2921233993,
  2428461,
  544322398,
  577241275,
  1471733935,
  610547355,
  4027169054,
  1432588573,
  1507829418,
  2025931657,
  3646575487,
  545086370,
  48609733,
  2200306550,
  1653985193,
  298326376,
  1316178497,
  3007786442,
  2064951626,
  458293330,
  2589141269,
  3591329599,
  3164325604,
  727753846,
  2179363840,
  146436021,
  1461446943,
  4069977195,
  705550613,
  3059967265,
  3887724982,
  4281599278,
  3313849956,
  1404054877,
  2845806497,
  146425753,
  1854211946,
  1266315497,
  3048417604,
  3681880366,
  3289982499,
  290971e4,
  1235738493,
  2632868024,
  2414719590,
  3970600049,
  1771706367,
  1449415276,
  3266420449,
  422970021,
  1963543593,
  2690192192,
  3826793022,
  1062508698,
  1531092325,
  1804592342,
  2583117782,
  2714934279,
  4024971509,
  1294809318,
  4028980673,
  1289560198,
  2221992742,
  1669523910,
  35572830,
  157838143,
  1052438473,
  1016535060,
  1802137761,
  1753167236,
  1386275462,
  3080475397,
  2857371447,
  1040679964,
  2145300060,
  2390574316,
  1461121720,
  2956646967,
  4031777805,
  4028374788,
  33600511,
  2920084762,
  1018524850,
  629373528,
  3691585981,
  3515945977,
  2091462646,
  2486323059,
  586499841,
  988145025,
  935516892,
  3367335476,
  2599673255,
  2839830854,
  265290510,
  3972581182,
  2759138881,
  3795373465,
  1005194799,
  847297441,
  406762289,
  1314163512,
  1332590856,
  1866599683,
  4127851711,
  750260880,
  613907577,
  1450815602,
  3165620655,
  3734664991,
  3650291728,
  3012275730,
  3704569646,
  1427272223,
  778793252,
  1343938022,
  2676280711,
  2052605720,
  1946737175,
  3164576444,
  3914038668,
  3967478842,
  3682934266,
  1661551462,
  3294938066,
  4011595847,
  840292616,
  3712170807,
  616741398,
  312560963,
  711312465,
  1351876610,
  322626781,
  1910503582,
  271666773,
  2175563734,
  1594956187,
  70604529,
  3617834859,
  1007753275,
  1495573769,
  4069517037,
  2549218298,
  2663038764,
  504708206,
  2263041392,
  3941167025,
  2249088522,
  1514023603,
  1998579484,
  1312622330,
  694541497,
  2582060303,
  2151582166,
  1382467621,
  776784248,
  2618340202,
  3323268794,
  2497899128,
  2784771155,
  503983604,
  4076293799,
  907881277,
  423175695,
  432175456,
  1378068232,
  4145222326,
  3954048622,
  3938656102,
  3820766613,
  2793130115,
  2977904593,
  26017576,
  3274890735,
  3194772133,
  1700274565,
  1756076034,
  4006520079,
  3677328699,
  720338349,
  1533947780,
  354530856,
  688349552,
  3973924725,
  1637815568,
  332179504,
  3949051286,
  53804574,
  2852348879,
  3044236432,
  1282449977,
  3583942155,
  3416972820,
  4006381244,
  1617046695,
  2628476075,
  3002303598,
  1686838959,
  431878346,
  2686675385,
  1700445008,
  1080580658,
  1009431731,
  832498133,
  3223435511,
  2605976345,
  2271191193,
  2516031870,
  1648197032,
  4164389018,
  2548247927,
  300782431,
  375919233,
  238389289,
  3353747414,
  2531188641,
  2019080857,
  1475708069,
  455242339,
  2609103871,
  448939670,
  3451063019,
  1395535956,
  2413381860,
  1841049896,
  1491858159,
  885456874,
  4264095073,
  4001119347,
  1565136089,
  3898914787,
  1108368660,
  540939232,
  1173283510,
  2745871338,
  3681308437,
  4207628240,
  3343053890,
  4016749493,
  1699691293,
  1103962373,
  3625875870,
  2256883143,
  3830138730,
  1031889488,
  3479347698,
  1535977030,
  4236805024,
  3251091107,
  2132092099,
  1774941330,
  1199868427,
  1452454533,
  157007616,
  2904115357,
  342012276,
  595725824,
  1480756522,
  206960106,
  497939518,
  591360097,
  863170706,
  2375253569,
  3596610801,
  1814182875,
  2094937945,
  3421402208,
  1082520231,
  3463918190,
  2785509508,
  435703966,
  3908032597,
  1641649973,
  2842273706,
  3305899714,
  1510255612,
  2148256476,
  2655287854,
  3276092548,
  4258621189,
  236887753,
  3681803219,
  274041037,
  1734335097,
  3815195456,
  3317970021,
  1899903192,
  1026095262,
  4050517792,
  356393447,
  2410691914,
  3873677099,
  3682840055,
  3913112168,
  2491498743,
  4132185628,
  2489919796,
  1091903735,
  1979897079,
  3170134830,
  3567386728,
  3557303409,
  857797738,
  1136121015,
  1342202287,
  507115054,
  2535736646,
  337727348,
  3213592640,
  1301675037,
  2528481711,
  1895095763,
  1721773893,
  3216771564,
  62756741,
  2142006736,
  835421444,
  2531993523,
  1442658625,
  3659876326,
  2882144922,
  676362277,
  1392781812,
  170690266,
  3921047035,
  1759253602,
  3611846912,
  1745797284,
  664899054,
  1329594018,
  3901205900,
  3045908486,
  2062866102,
  2865634940,
  3543621612,
  3464012697,
  1080764994,
  553557557,
  3656615353,
  3996768171,
  991055499,
  499776247,
  1265440854,
  648242737,
  3940784050,
  980351604,
  3713745714,
  1749149687,
  3396870395,
  4211799374,
  3640570775,
  1161844396,
  3125318951,
  1431517754,
  545492359,
  4268468663,
  3499529547,
  1437099964,
  2702547544,
  3433638243,
  2581715763,
  2787789398,
  1060185593,
  1593081372,
  2418618748,
  4260947970,
  69676912,
  2159744348,
  86519011,
  2512459080,
  3838209314,
  1220612927,
  3339683548,
  133810670,
  1090789135,
  1078426020,
  1569222167,
  845107691,
  3583754449,
  4072456591,
  1091646820,
  628848692,
  1613405280,
  3757631651,
  526609435,
  236106946,
  48312990,
  2942717905,
  3402727701,
  1797494240,
  859738849,
  992217954,
  4005476642,
  2243076622,
  3870952857,
  3732016268,
  765654824,
  3490871365,
  2511836413,
  1685915746,
  3888969200,
  1414112111,
  2273134842,
  3281911079,
  4080962846,
  172450625,
  2569994100,
  980381355,
  4109958455,
  2819808352,
  2716589560,
  2568741196,
  3681446669,
  3329971472,
  1835478071,
  660984891,
  3704678404,
  4045999559,
  3422617507,
  3040415634,
  1762651403,
  1719377915,
  3470491036,
  2693910283,
  3642056355,
  3138596744,
  1364962596,
  2073328063,
  1983633131,
  926494387,
  3423689081,
  2150032023,
  4096667949,
  1749200295,
  3328846651,
  309677260,
  2016342300,
  1779581495,
  3079819751,
  111262694,
  1274766160,
  443224088,
  298511866,
  1025883608,
  3806446537,
  1145181785,
  168956806,
  3641502830,
  3584813610,
  1689216846,
  3666258015,
  3200248200,
  1692713982,
  2646376535,
  4042768518,
  1618508792,
  1610833997,
  3523052358,
  4130873264,
  2001055236,
  3610705100,
  2202168115,
  4028541809,
  2961195399,
  1006657119,
  2006996926,
  3186142756,
  1430667929,
  3210227297,
  1314452623,
  4074634658,
  4101304120,
  2273951170,
  1399257539,
  3367210612,
  3027628629,
  1190975929,
  2062231137,
  2333990788,
  2221543033,
  2438960610,
  1181637006,
  548689776,
  2362791313,
  3372408396,
  3104550113,
  3145860560,
  296247880,
  1970579870,
  3078560182,
  3769228297,
  1714227617,
  3291629107,
  3898220290,
  166772364,
  1251581989,
  493813264,
  448347421,
  195405023,
  2709975567,
  677966185,
  3703036547,
  1463355134,
  2715995803,
  1338867538,
  1343315457,
  2802222074,
  2684532164,
  233230375,
  2599980071,
  2000651841,
  3277868038,
  1638401717,
  4028070440,
  3237316320,
  6314154,
  819756386,
  300326615,
  590932579,
  1405279636,
  3267499572,
  3150704214,
  2428286686,
  3959192993,
  3461946742,
  1862657033,
  1266418056,
  963775037,
  2089974820,
  2263052895,
  1917689273,
  448879540,
  3550394620,
  3981727096,
  150775221,
  3627908307,
  1303187396,
  508620638,
  2975983352,
  2726630617,
  1817252668,
  1876281319,
  1457606340,
  908771278,
  3720792119,
  3617206836,
  2455994898,
  1729034894,
  1080033504,
  976866871,
  3556439503,
  2881648439,
  1522871579,
  1555064734,
  1336096578,
  3548522304,
  2579274686,
  3574697629,
  3205460757,
  3593280638,
  3338716283,
  3079412587,
  564236357,
  2993598910,
  1781952180,
  1464380207,
  3163844217,
  3332601554,
  1699332808,
  1393555694,
  1183702653,
  3581086237,
  1288719814,
  691649499,
  2847557200,
  2895455976,
  3193889540,
  2717570544,
  1781354906,
  1676643554,
  2592534050,
  3230253752,
  1126444790,
  2770207658,
  2633158820,
  2210423226,
  2615765581,
  2414155088,
  3127139286,
  673620729,
  2805611233,
  1269405062,
  4015350505,
  3341807571,
  4149409754,
  1057255273,
  2012875353,
  2162469141,
  2276492801,
  2601117357,
  993977747,
  3918593370,
  2654263191,
  753973209,
  36408145,
  2530585658,
  25011837,
  3520020182,
  2088578344,
  530523599,
  2918365339,
  1524020338,
  1518925132,
  3760827505,
  3759777254,
  1202760957,
  3985898139,
  3906192525,
  674977740,
  4174734889,
  2031300136,
  2019492241,
  3983892565,
  4153806404,
  3822280332,
  352677332,
  2297720250,
  60907813,
  90501309,
  3286998549,
  1016092578,
  2535922412,
  2839152426,
  457141659,
  509813237,
  4120667899,
  652014361,
  1966332200,
  2975202805,
  55981186,
  2327461051,
  676427537,
  3255491064,
  2882294119,
  3433927263,
  1307055953,
  942726286,
  933058658,
  2468411793,
  3933900994,
  4215176142,
  1361170020,
  2001714738,
  2830558078,
  3274259782,
  1222529897,
  1679025792,
  2729314320,
  3714953764,
  1770335741,
  151462246,
  3013232138,
  1682292957,
  1483529935,
  471910574,
  1539241949,
  458788160,
  3436315007,
  1807016891,
  3718408830,
  978976581,
  1043663428,
  3165965781,
  1927990952,
  4200891579,
  2372276910,
  3208408903,
  3533431907,
  1412390302,
  2931980059,
  4132332400,
  1947078029,
  3881505623,
  4168226417,
  2941484381,
  1077988104,
  1320477388,
  886195818,
  18198404,
  3786409e3,
  2509781533,
  112762804,
  3463356488,
  1866414978,
  891333506,
  18488651,
  661792760,
  1628790961,
  3885187036,
  3141171499,
  876946877,
  2693282273,
  1372485963,
  791857591,
  2686433993,
  3759982718,
  3167212022,
  3472953795,
  2716379847,
  445679433,
  3561995674,
  3504004811,
  3574258232,
  54117162,
  3331405415,
  2381918588,
  3769707343,
  4154350007,
  1140177722,
  4074052095,
  668550556,
  3214352940,
  367459370,
  261225585,
  2610173221,
  4209349473,
  3468074219,
  3265815641,
  314222801,
  3066103646,
  3808782860,
  282218597,
  3406013506,
  3773591054,
  379116347,
  1285071038,
  846784868,
  2669647154,
  3771962079,
  3550491691,
  2305946142,
  453669953,
  1268987020,
  3317592352,
  3279303384,
  3744833421,
  2610507566,
  3859509063,
  266596637,
  3847019092,
  517658769,
  3462560207,
  3443424879,
  370717030,
  4247526661,
  2224018117,
  4143653529,
  4112773975,
  2788324899,
  2477274417,
  1456262402,
  2901442914,
  1517677493,
  1846949527,
  2295493580,
  3734397586,
  2176403920,
  1280348187,
  1908823572,
  3871786941,
  846861322,
  1172426758,
  3287448474,
  3383383037,
  1655181056,
  3139813346,
  901632758,
  1897031941,
  2986607138,
  3066810236,
  3447102507,
  1393639104,
  373351379,
  950779232,
  625454576,
  3124240540,
  4148612726,
  2007998917,
  544563296,
  2244738638,
  2330496472,
  2058025392,
  1291430526,
  424198748,
  50039436,
  29584100,
  3605783033,
  2429876329,
  2791104160,
  1057563949,
  3255363231,
  3075367218,
  3463963227,
  1469046755,
  985887462
];
var C_ORIG = [
  1332899944,
  1700884034,
  1701343084,
  1684370003,
  1668446532,
  1869963892
];
function _encipher(lr, off, P, S) {
  var n, l = lr[off], r = lr[off + 1];
  l ^= P[0];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[1];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[2];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[3];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[4];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[5];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[6];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[7];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[8];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[9];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[10];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[11];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[12];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[13];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[14];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[15];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[16];
  lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
  lr[off + 1] = l;
  return lr;
}
function _streamtoword(data, offp) {
  for (var i = 0, word = 0; i < 4; ++i)
    word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
  return { key: word, offp };
}
function _key(key, P, S) {
  var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
  for (i = 0; i < plen; i += 2)
    lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
  for (i = 0; i < slen; i += 2)
    lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
function _ekskey(data, key, P, S) {
  var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
  offp = 0;
  for (i = 0; i < plen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
  for (i = 0; i < slen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
function _crypt(b, salt, rounds, callback, progressCallback) {
  var cdata = C_ORIG.slice(), clen = cdata.length, err;
  if (rounds < 4 || rounds > 31) {
    err = Error("Illegal number of rounds (4-31): " + rounds);
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.length !== BCRYPT_SALT_LEN) {
    err = Error(
      "Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN
    );
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  rounds = 1 << rounds >>> 0;
  var P, S, i = 0, j;
  if (typeof Int32Array === "function") {
    P = new Int32Array(P_ORIG);
    S = new Int32Array(S_ORIG);
  } else {
    P = P_ORIG.slice();
    S = S_ORIG.slice();
  }
  _ekskey(salt, b, P, S);
  function next() {
    if (progressCallback) progressCallback(i / rounds);
    if (i < rounds) {
      var start = Date.now();
      for (; i < rounds; ) {
        i = i + 1;
        _key(b, P, S);
        _key(salt, P, S);
        if (Date.now() - start > MAX_EXECUTION_TIME) break;
      }
    } else {
      for (i = 0; i < 64; i++)
        for (j = 0; j < clen >> 1; j++) _encipher(cdata, j << 1, P, S);
      var ret = [];
      for (i = 0; i < clen; i++)
        ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
      if (callback) {
        callback(null, ret);
        return;
      } else return ret;
    }
    if (callback) nextTick(next);
  }
  if (typeof callback !== "undefined") {
    next();
  } else {
    var res;
    while (true) if (typeof (res = next()) !== "undefined") return res || [];
  }
}
function _hash(password, salt, callback, progressCallback) {
  var err;
  if (typeof password !== "string" || typeof salt !== "string") {
    err = Error("Invalid string / salt: Not a string");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var minor, offset;
  if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
    err = Error("Invalid salt version: " + salt.substring(0, 2));
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
  else {
    minor = salt.charAt(2);
    if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
      err = Error("Invalid salt revision: " + salt.substring(2, 4));
      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }
    offset = 4;
  }
  if (salt.charAt(offset + 2) > "$") {
    err = Error("Missing salt rounds");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
  password += minor >= "a" ? "\0" : "";
  var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
  function finish(bytes) {
    var res = [];
    res.push("$2");
    if (minor >= "a") res.push(minor);
    res.push("$");
    if (rounds < 10) res.push("0");
    res.push(rounds.toString());
    res.push("$");
    res.push(base64_encode(saltb, saltb.length));
    res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
    return res.join("");
  }
  if (typeof callback == "undefined")
    return finish(_crypt(passwordb, saltb, rounds));
  else {
    _crypt(
      passwordb,
      saltb,
      rounds,
      function(err2, bytes) {
        if (err2) callback(err2, null);
        else callback(null, finish(bytes));
      },
      progressCallback
    );
  }
}
function encodeBase64(bytes, length) {
  return base64_encode(bytes, length);
}
function decodeBase64(string, length) {
  return base64_decode(string, length);
}
var bcryptjs_default = {
  setRandomFallback,
  genSaltSync,
  genSalt,
  hashSync,
  hash,
  compareSync,
  compare,
  getRounds,
  getSalt,
  truncates,
  encodeBase64,
  decodeBase64
};

// src/routes/auth.routes.ts
var import_crypto3 = __toESM(require("crypto"));

// node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var strictDecoder = new TextDecoder("utf-8", { fatal: true });
var UINT32_RANGE = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0), buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers)
    buf.set(buffer, i), i += buffer.length;
  return buf;
}
var NON_ASCII = /[^\x00-\x7f]/;
function encode(string) {
  if (typeof string == "string" && string.length >= 128) {
    if (NON_ASCII.test(string))
      throw new TypeError("non-ASCII string encountered in encode()");
    return encoder.encode(string);
  }
  const bytes = new Uint8Array(string.length);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code > 127)
      throw new TypeError("non-ASCII string encountered in encode()");
    bytes[i] = code;
  }
  return bytes;
}
function encodeBase642(input, url = false) {
  if (Uint8Array.prototype.toBase64)
    return input.toBase64({ alphabet: url ? "base64url" : "base64", omitPadding: url });
  const CHUNK_SIZE = 32768, arr = [];
  for (let i = 0; i < input.length; i += CHUNK_SIZE)
    arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
  const encoded = btoa(arr.join(""));
  return url ? encoded.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") : encoded;
}
function decodeBase642(encoded, url = false) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(encoded, { alphabet: url ? "base64url" : "base64" });
  if (url) {
    if (encoded.includes("+") || encoded.includes("/"))
      throw new TypeError("Invalid base64url");
    encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  }
  const binary = atob(encoded), bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++)
    bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } }), this.claim = claim, this.reason = reason, this.payload = payload;
  }
};
var JWTExpired = class extends JOSEError {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } }), this.claim = claim, this.reason = reason, this.payload = payload;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
};
var JOSENotSupported = class extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};
var JWSInvalid = class extends JOSEError {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
};
var JWTInvalid = class extends JOSEError {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
  }
};

// node_modules/jose/dist/webapi/util/base64url.js
var invalid = "The input to be decoded is not correctly encoded.";
function decode(input) {
  try {
    return decodeBase642(typeof input == "string" ? input : decoder.decode(input), true);
  } catch (cause) {
    throw new TypeError(invalid, { cause });
  }
}
function encode2(input) {
  return encodeBase642(typeof input == "string" ? encoder.encode(input) : input, true);
}

// node_modules/jose/dist/webapi/lib/validate.js
function isObject(input) {
  if (typeof input != "object" || input === null || Object.prototype.toString.call(input) !== "[object Object]")
    return false;
  const prototype = Object.getPrototypeOf(input);
  return prototype === null || Object.getPrototypeOf(prototype) === null;
}
function isDisjoint(...headers) {
  const parameters = /* @__PURE__ */ new Set();
  for (const header of headers)
    if (header)
      for (const parameter of Object.keys(header)) {
        if (parameters.has(parameter))
          return false;
        parameters.add(parameter);
      }
  return true;
}
function assertNotSet(value, name) {
  if (value !== void 0)
    throw new TypeError(`${name} can only be called once`);
}
function decodeBase64url(value, label, ErrorClass) {
  try {
    return decode(value);
  } catch (cause) {
    throw new ErrorClass(`Failed to base64url decode the ${label}`, { cause });
  }
}
function encodeAsciiMember(value, label, ErrorClass) {
  try {
    return encode(value);
  } catch (cause) {
    throw new ErrorClass(`The ${label} is not a valid base64url string`, { cause });
  }
}
function parseJoseHeader(encodedProtectedHeader, ErrorClass, message2) {
  let parsed;
  try {
    parsed = JSON.parse(strictDecoder.decode(decode(encodedProtectedHeader)));
  } catch (cause) {
    throw new ErrorClass(message2, { cause });
  }
  if (!isObject(parsed))
    throw new ErrorClass(message2);
  return parsed;
}
var JWS_RECOGNIZED = { __proto__: null, b64: true };
function validateAlgorithms(option, algorithms) {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s != "string")))
    throw new TypeError(`"${option}" option must be an array of strings`);
  return algorithms === void 0 ? void 0 : new Set(algorithms);
}
function validateCritDuplicates(Err, protectedHeader) {
  const { crit } = protectedHeader ?? {};
  if (Array.isArray(crit) && new Set(crit).size !== crit.length)
    throw new Err('"crit" (Critical) Header Parameter MUST NOT contain duplicate values');
}
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0)
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!protectedHeader || protectedHeader.crit === void 0)
    return [];
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input != "string" || input.length === 0))
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  const recognized = recognizedOption === void 0 ? recognizedDefault : { __proto__: null, ...recognizedOption, ...recognizedDefault };
  for (const parameter of protectedHeader.crit) {
    if (!(parameter in recognized))
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    if (!Object.hasOwn(joseHeader, parameter) || joseHeader[parameter] === void 0)
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    if (recognized[parameter] && (!Object.hasOwn(protectedHeader, parameter) || protectedHeader[parameter] === void 0))
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
  }
  return protectedHeader.crit;
}
function validateB64(protectedHeader, extensions) {
  if (extensions.includes("b64")) {
    const b64 = protectedHeader.b64;
    if (typeof b64 != "boolean")
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    return b64;
  }
  return true;
}
function serializeJoseHeader(Err, header) {
  let serialized, parsed;
  try {
    serialized = JSON.stringify(header), parsed = JSON.parse(serialized);
  } catch (cause) {
    throw new Err("JOSE Header is not valid JSON", { cause });
  }
  if (!isObject(parsed))
    throw new Err("JOSE Header is not a JSON object");
  return [parsed, serialized];
}

// node_modules/jose/dist/webapi/lib/key.js
var tag = (key) => key[Symbol.toStringTag];
var jwkMatchesOp = (entry, key, usage) => {
  const { alg } = entry;
  if (key.use !== void 0) {
    const expected = usage === "sign" || usage === "verify" ? "sig" : "enc";
    if (key.use !== expected)
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
  }
  if (key.alg !== void 0 && key.alg !== alg)
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  if (Array.isArray(key.key_ops)) {
    const expectedKeyOp = usage === "encrypt" || usage === "decrypt" ? entry.ops?.[usage === "encrypt" ? 0 : 1] : usage;
    if (expectedKeyOp && !key.key_ops.includes(expectedKeyOp))
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
  }
};
async function prepareKey(entry, key, usage) {
  const { alg, secret } = entry, requiresPrivateKey = usage === "decrypt" || usage === "sign";
  if (secret && key instanceof Uint8Array)
    return key;
  let normalized, keyObject;
  if (isObject(key)) {
    if (normalized = normalizeJwk(key), typeof normalized.kty != "string")
      throw invalidKeyType(alg, key, secret);
    if (!(secret ? normalized.kty === "oct" && typeof normalized.k == "string" : normalized.kty !== "oct" && (requiresPrivateKey ? normalized.kty === "AKP" && typeof normalized.priv == "string" || typeof normalized.d == "string" : normalized.d === void 0 && normalized.priv === void 0)))
      throw new TypeError(secret ? 'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present' : `JSON Web Key for this operation must be a ${requiresPrivateKey ? "private" : "public"} JWK`);
    if (jwkMatchesOp(entry, normalized, usage), normalized.kty === "oct")
      return decode(normalized.k);
    if (!Object.isFrozen(key)) {
      const { key_ops } = key;
      Array.isArray(key_ops) && Object.freeze(key_ops), Object.freeze(key);
    }
  } else {
    if (!isKeyLike(key))
      throw invalidKeyType(alg, key, secret);
    const expectedType = secret ? "secret" : requiresPrivateKey ? "private" : "public";
    if (key.type !== expectedType && (secret || ["secret", "public", "private"].includes(key.type)))
      throw new TypeError(`${tag(key)} instances must be of type "${expectedType}" for the ${alg} algorithm`);
    if (isCryptoKey(key))
      return key;
    if (keyObject = key, keyObject.type === "secret")
      return keyObject.export();
  }
  cache ||= /* @__PURE__ */ new WeakMap();
  const cacheKey = key;
  let cached = cache.get(cacheKey);
  if (cached?.[alg])
    return cached[alg];
  if (cached || cache.set(cacheKey, cached = {}), keyObject && typeof keyObject.toCryptoKey == "function") {
    const isPublic = keyObject.type === "public", crv = nist[keyObject.asymmetricKeyDetails?.namedCurve], params = entry.resolve?.({ crv, asymmetricKeyType: keyObject.asymmetricKeyType }) ?? entry.subtle;
    return cached[alg] = keyObject.toCryptoKey(params, isPublic, entry.usages[isPublic ? 0 : 1]);
  }
  return normalized ??= keyObject.export({ format: "jwk" }), normalized.alg = alg, cached[alg] = await jwkToKey(entry, normalized);
}
var cache;
var nist = {
  __proto__: null,
  prime256v1: "P-256",
  secp384r1: "P-384",
  secp521r1: "P-521"
};
var isCryptoKey = (key) => {
  if (key?.[Symbol.toStringTag] === "CryptoKey")
    return true;
  try {
    return key instanceof CryptoKey;
  } catch {
    return false;
  }
};
var isKeyObject = (key) => key?.[Symbol.toStringTag] === "KeyObject";
var isKeyLike = (key) => isCryptoKey(key) || isKeyObject(key);
function message(msg, actual, ...types) {
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else types.length === 2 ? msg += `one of type ${types[0]} or ${types[1]}.` : msg += `of type ${types[0]}.`;
  return actual == null ? msg += ` Received ${actual}` : typeof actual == "function" && actual.name ? msg += ` Received function ${actual.name}` : typeof actual == "object" && actual != null && actual.constructor?.name && (msg += ` Received an instance of ${actual.constructor.name}`), msg;
}
function invalidKeyType(alg, actual, secret) {
  const types = ["CryptoKey", "KeyObject", "JSON Web Key"];
  return secret && types.push("Uint8Array"), new TypeError(message(`Key for the ${alg} algorithm must be `, actual, ...types));
}
var unusable = (name, prop = "algorithm.name") => new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage))
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
}
function checkModulusLength(alg, key) {
  const { modulusLength } = key.algorithm;
  if (typeof modulusLength != "number" || modulusLength < 2048)
    throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
}
function checkCryptoKey(key, expected, usage) {
  const algorithm = key.algorithm;
  if (algorithm.name !== expected.name)
    throw unusable(expected.name);
  if (expected.hash && algorithm.hash?.name !== expected.hash)
    throw unusable(expected.hash, "algorithm.hash");
  if (expected.namedCurve && algorithm.namedCurve !== expected.namedCurve)
    throw unusable(expected.namedCurve, "algorithm.namedCurve");
  if (expected.length !== void 0 && algorithm.length !== expected.length)
    throw unusable(expected.length, "algorithm.length");
  checkUsage(key, usage);
}
function snapshotJwk(jwk) {
  return { __proto__: null, ...jwk };
}
function normalizeJwk(jwk) {
  const normalized = snapshotJwk(jwk);
  if (normalized.ext !== void 0 && typeof normalized.ext != "boolean")
    throw new TypeError('"ext" (Extractable) Parameter must be a boolean');
  if (normalized.key_ops !== void 0) {
    const value = normalized.key_ops, keyOps = Array.isArray(value) ? [...value] : void 0;
    if (!keyOps || keyOps.some((operation) => typeof operation != "string") || new Set(keyOps).size !== keyOps.length)
      throw new TypeError('"key_ops" (Key Operations) Parameter must be an array of unique strings');
    normalized.key_ops = keyOps;
  }
  return normalized;
}
async function jwkToKey(entry, jwk, extractable) {
  if (!entry.kty.includes(jwk.kty))
    throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  const algorithm = entry.resolve?.({ kty: jwk.kty, crv: jwk.crv }) ?? entry.subtle, isPrivate = !!(jwk.d || jwk.priv), keyData = { ...jwk, ext: extractable ?? jwk.ext };
  return keyData.kty !== "AKP" && delete keyData.alg, delete keyData.use, crypto.subtle.importKey("jwk", keyData, algorithm, keyData.ext ?? !isPrivate, jwk.key_ops ?? entry.usages[isPrivate ? 1 : 0]);
}
async function rawKey(key, expected, usage, extractable = false) {
  return key instanceof Uint8Array && (key = await crypto.subtle.importKey("raw", key, expected, extractable, [usage])), checkCryptoKey(key, expected, usage), key;
}

// node_modules/jose/dist/webapi/lib/key_descriptor.js
function table(entries) {
  const out = { __proto__: null };
  for (const alg in entries)
    out[alg] = { ...entries[alg], alg };
  return out;
}

// node_modules/jose/dist/webapi/lib/jws_algorithms.js
var sig = [["verify"], ["sign"]];
function hmac(bits) {
  const subtle = { name: "HMAC", hash: `SHA-${bits}` };
  return { kty: ["oct"], secret: true, subtle, signing: subtle, usages: sig };
}
function rsa(bits, saltLength) {
  const subtle = { name: saltLength ? "RSA-PSS" : "RSASSA-PKCS1-v1_5", hash: `SHA-${bits}` };
  return {
    kty: ["RSA"],
    subtle,
    signing: saltLength ? { ...subtle, saltLength } : subtle,
    usages: sig,
    minRsaBits: 2048
  };
}
function ecdsa(crv, bits) {
  return {
    kty: ["EC"],
    crv,
    subtle: { name: "ECDSA", namedCurve: crv },
    signing: { name: "ECDSA", hash: `SHA-${bits}` },
    usages: sig
  };
}
function eddsa() {
  const subtle = { name: "Ed25519" };
  return {
    kty: ["OKP"],
    crv: "Ed25519",
    subtle,
    signing: subtle,
    usages: sig
  };
}
function mldsa(parameterSet) {
  const subtle = { name: `ML-DSA-${parameterSet}` };
  return {
    kty: ["AKP"],
    subtle,
    signing: subtle,
    usages: sig
  };
}
var JWS = table({
  HS256: hmac(256),
  HS384: hmac(384),
  HS512: hmac(512),
  RS256: rsa(256),
  RS384: rsa(384),
  RS512: rsa(512),
  PS256: rsa(256, 32),
  PS384: rsa(384, 48),
  PS512: rsa(512, 64),
  ES256: ecdsa("P-256", 256),
  ES384: ecdsa("P-384", 384),
  ES512: ecdsa("P-521", 512),
  EdDSA: eddsa(),
  Ed25519: eddsa(),
  "ML-DSA-44": mldsa(44),
  "ML-DSA-65": mldsa(65),
  "ML-DSA-87": mldsa(87)
});
function jwsAlgorithm(alg) {
  const entry = typeof alg == "string" ? JWS[alg] : void 0;
  if (!entry)
    throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  return entry;
}

// node_modules/jose/dist/webapi/lib/jws_verify.js
function prepareVerify(options) {
  return [options && validateAlgorithms("algorithms", options.algorithms), options?.crit];
}
function parseProtectedHeader(encodedProtectedHeader) {
  return encodedProtectedHeader === void 0 ? {} : parseJoseHeader(encodedProtectedHeader, JWSInvalid, "JWS Protected Header is invalid");
}
function encodeCompactUnencodedPayload(payload) {
  try {
    return encode(payload);
  } catch (cause) {
    throw new JWSInvalid("JWS Compact Serialization payload must use only ASCII characters", {
      cause
    });
  }
}
async function verifySignature(jws, shared, key, encodeUnencodedPayload, parsedProtected) {
  const { protected: encodedProtectedHeader, header, payload: inputPayload } = jws, protectedHeader = parsedProtected ?? parseProtectedHeader(encodedProtectedHeader);
  if (!isDisjoint(protectedHeader, header))
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  const joseHeader = { ...protectedHeader, ...header }, b64 = validateB64(protectedHeader, validateCrit(JWSInvalid, JWS_RECOGNIZED, shared[1], protectedHeader, joseHeader)), { alg } = joseHeader;
  if (typeof alg != "string" || !alg)
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  if (shared[0] && !shared[0].has(alg))
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  if (b64) {
    if (typeof inputPayload != "string")
      throw new JWSInvalid("JWS Payload must be a string");
  } else if (typeof inputPayload != "string" && !(inputPayload instanceof Uint8Array))
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  const signingPayload = b64 || typeof inputPayload != "string" ? inputPayload : encodeUnencodedPayload(inputPayload);
  let resolvedKey = false;
  typeof key == "function" && (key = await key(protectedHeader, jws), resolvedKey = true);
  const entry = jwsAlgorithm(alg), signingInput = concat(encodedProtectedHeader !== void 0 ? encode(encodedProtectedHeader) : new Uint8Array(), encode("."), typeof signingPayload == "string" ? shared[2] ??= encodeAsciiMember(signingPayload, "payload", JWSInvalid) : signingPayload), signature = decodeBase64url(jws.signature, "signature", JWSInvalid), verificationKey = await prepareKey(entry, key, "verify"), cryptoKey = await rawKey(verificationKey, entry.subtle, "verify");
  entry.minRsaBits && checkModulusLength(entry.alg, cryptoKey);
  let verified = false;
  try {
    verified = await crypto.subtle.verify(entry.signing, cryptoKey, signature, signingInput);
  } catch (cause) {
    throw new JWSSignatureVerificationFailed(void 0, { cause });
  }
  if (!verified)
    throw new JWSSignatureVerificationFailed();
  const result = { payload: typeof signingPayload == "string" ? decodeBase64url(signingPayload, "payload", JWSInvalid) : signingPayload };
  return encodedProtectedHeader !== void 0 && (result.protectedHeader = protectedHeader), header !== void 0 && (result.unprotectedHeader = header), resolvedKey ? [{ ...result, key: verificationKey }, b64] : [result, b64];
}
async function verifyCompact(jws, shared, key) {
  if (jws instanceof Uint8Array && (jws = decoder.decode(jws)), typeof jws != "string")
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3)
    throw new JWSInvalid("Invalid Compact JWS");
  return verifySignature({ payload, protected: protectedHeader, signature }, shared, key, encodeCompactUnencodedPayload);
}

// node_modules/jose/dist/webapi/lib/jwt_claims_set.js
var epoch = (date) => Math.floor(date.getTime() / 1e3);
var multipliers = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
  w: 604800,
  y: 31557600
};
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var checkFailed = "check_failed";
function invalidDuration() {
  throw new TypeError("Invalid time period format");
}
function secs(str) {
  typeof str != "string" && invalidDuration();
  const matched = REGEX.exec(str);
  (!matched || matched[4] && matched[1]) && invalidDuration();
  const value = parseFloat(matched[2]), durationSeconds = Math.round(value * multipliers[matched[3][0].toLowerCase()]);
  return Number.isFinite(durationSeconds) || invalidDuration(), matched[1] === "-" || matched[4] === "ago" ? -durationSeconds : durationSeconds;
}
function validateInput(label, input) {
  if (!Number.isFinite(input))
    throw new TypeError(`Invalid ${label} input`);
  return input;
}
function validateStringClaim(claim, value) {
  if (typeof value != "string")
    throw new TypeError(`"${claim}" claim must be a string`);
}
function validateAudienceClaim(value) {
  if (typeof value != "string" && (!Array.isArray(value) || Array.from(value).some((member) => typeof member != "string")))
    throw new TypeError('"aud" claim must be a string or an array of strings');
}
function numericDate(value, label) {
  return typeof value == "number" ? validateInput(label, value) : value instanceof Date ? validateInput(label, epoch(value)) : epoch(/* @__PURE__ */ new Date()) + secs(value);
}
var normalizeTyp = (value) => {
  const normalized = value.toLowerCase();
  return value.includes("/") ? normalized : `application/${normalized}`;
};
var checkAudiencePresence = (audPayload, audOption) => typeof audPayload == "string" ? audOption.includes(audPayload) : Array.isArray(audPayload) ? audOption.some((aud) => audPayload.includes(aud)) : false;
function validateNumericDate(claimsSet, claim, required = false) {
  const value = claimsSet[claim];
  if (!(value === void 0 && !required)) {
    if (typeof value != "number")
      throw new JWTClaimValidationFailed(`"${claim}" claim must be a number`, claimsSet, claim, "invalid");
    return value;
  }
}
function unexpectedClaim(claimsSet, claim) {
  throw new JWTClaimValidationFailed(`unexpected "${claim}" claim value`, claimsSet, claim, checkFailed);
}
function validateClaimsSet(protectedHeader, claimsSetBytes, options = {}) {
  let claimsSet;
  try {
    claimsSet = JSON.parse(strictDecoder.decode(claimsSetBytes));
  } catch (cause) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object", { cause });
  }
  if (!isObject(claimsSet))
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  const { typ } = options;
  if (typ !== void 0 && (typeof protectedHeader.typ != "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ)))
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', claimsSet, "typ", checkFailed);
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options, presenceCheck = [...requiredClaims];
  maxTokenAge !== void 0 && presenceCheck.push("iat"), audience !== void 0 && presenceCheck.push("aud"), subject !== void 0 && presenceCheck.push("sub"), issuer !== void 0 && presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse()))
    if (!Object.hasOwn(claimsSet, claim))
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claimsSet, claim, "missing");
  issuer !== void 0 && !(Array.isArray(issuer) ? issuer : [issuer]).includes(claimsSet.iss) && unexpectedClaim(claimsSet, "iss"), subject !== void 0 && claimsSet.sub !== subject && unexpectedClaim(claimsSet, "sub"), audience !== void 0 && !checkAudiencePresence(claimsSet.aud, typeof audience == "string" ? [audience] : audience) && unexpectedClaim(claimsSet, "aud");
  const { clockTolerance } = options;
  let tolerance = 0;
  if (typeof clockTolerance == "string")
    tolerance = secs(clockTolerance);
  else if (clockTolerance !== void 0) {
    if (typeof clockTolerance != "number")
      throw new TypeError("Invalid clockTolerance option type");
    tolerance = clockTolerance;
  }
  validateInput("clockTolerance option", tolerance);
  const { currentDate } = options, now = validateInput("currentDate option", epoch(currentDate === void 0 ? /* @__PURE__ */ new Date() : currentDate)), iat = validateNumericDate(claimsSet, "iat", maxTokenAge !== void 0), nbf = validateNumericDate(claimsSet, "nbf");
  if (nbf !== void 0 && nbf > now + tolerance)
    throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', claimsSet, "nbf", checkFailed);
  const exp = validateNumericDate(claimsSet, "exp");
  if (exp !== void 0 && exp <= now - tolerance)
    throw new JWTExpired('"exp" claim timestamp check failed', claimsSet, "exp", checkFailed);
  if (maxTokenAge !== void 0) {
    const age = now - iat, max = validateInput("maxTokenAge option", typeof maxTokenAge == "number" ? maxTokenAge : secs(maxTokenAge));
    if (age - tolerance > max)
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', claimsSet, "iat", checkFailed);
    if (age < -tolerance)
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', claimsSet, "iat", checkFailed);
  }
  return claimsSet;
}
var producerClaimsSets;
function producerClaimsSet(producer) {
  return producerClaimsSets.get(producer);
}
function jwtClaimsSetBytes(producer) {
  const claimsSet = producerClaimsSet(producer);
  for (const claim of ["iat", "nbf", "exp"]) {
    const value = claimsSet[claim];
    if (typeof value == "number" && !Number.isFinite(value))
      throw new TypeError(`"${claim}" claim must be a finite number`);
  }
  return encoder.encode(JSON.stringify(claimsSet));
}
var JWTClaimsBuilder = class {
  constructor(claimsSet = {}) {
    if (!isObject(claimsSet))
      throw new TypeError("JWT Claims Set MUST be an object");
    (producerClaimsSets ||= /* @__PURE__ */ new WeakMap()).set(this, structuredClone(claimsSet));
  }
  setIssuer(value) {
    return validateStringClaim("iss", value), producerClaimsSet(this).iss = value, this;
  }
  setSubject(value) {
    return validateStringClaim("sub", value), producerClaimsSet(this).sub = value, this;
  }
  setAudience(value) {
    return validateAudienceClaim(value), producerClaimsSet(this).aud = value, this;
  }
  setJti(value) {
    return validateStringClaim("jti", value), producerClaimsSet(this).jti = value, this;
  }
  setNotBefore(value) {
    return producerClaimsSet(this).nbf = numericDate(value, "setNotBefore"), this;
  }
  setExpirationTime(value) {
    return producerClaimsSet(this).exp = numericDate(value, "setExpirationTime"), this;
  }
  setIssuedAt(value) {
    const claimsSet = producerClaimsSet(this);
    return value === void 0 ? claimsSet.iat = epoch(/* @__PURE__ */ new Date()) : typeof value == "string" ? claimsSet.iat = validateInput("setIssuedAt", epoch(/* @__PURE__ */ new Date()) + secs(value)) : claimsSet.iat = numericDate(value, "setIssuedAt"), this;
  }
};

// node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const [verified, b64] = await verifyCompact(jwt, prepareVerify(options), key);
  if (!b64)
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  return { ...verified, payload };
}

// node_modules/jose/dist/webapi/lib/jws_sign.js
async function createSignature(input, key, rejectUnencoded) {
  let [payload, protectedHeader, unprotectedHeader, crit] = input, encodedProtectedHeader = "";
  if (protectedHeader !== void 0) {
    const normalized = serializeJoseHeader(JWSInvalid, protectedHeader);
    protectedHeader = normalized[0], encodedProtectedHeader = encode2(normalized[1]);
  }
  if (unprotectedHeader !== void 0 && (unprotectedHeader = serializeJoseHeader(JWSInvalid, unprotectedHeader)[0]), !protectedHeader && !unprotectedHeader)
    throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
  if (!isDisjoint(protectedHeader, unprotectedHeader))
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  const joseHeader = { ...protectedHeader, ...unprotectedHeader };
  validateCritDuplicates(JWSInvalid, protectedHeader);
  const b64 = validateB64(protectedHeader, validateCrit(JWSInvalid, JWS_RECOGNIZED, crit, protectedHeader, joseHeader));
  b64 || rejectUnencoded?.();
  const { alg } = joseHeader;
  if (typeof alg != "string" || !alg)
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  const entry = jwsAlgorithm(alg);
  let encodedPayload = "", signingPayload = payload, signingInput;
  if (b64) {
    const encodedPayloadCache = input[4];
    encodedPayloadCache ? (encodedPayload = encodedPayloadCache[0] ??= encode2(payload), signingPayload = encodedPayloadCache[1] ??= encode(encodedPayload)) : (encodedPayload = encode2(payload), signingInput = encoder.encode(`${encodedProtectedHeader}.${encodedPayload}`));
  }
  signingInput ??= concat(encode(encodedProtectedHeader), encode("."), signingPayload);
  const signingKey = await rawKey(await prepareKey(entry, key, "sign"), entry.subtle, "sign");
  entry.minRsaBits && checkModulusLength(entry.alg, signingKey);
  const jws = {
    signature: encode2(new Uint8Array(await crypto.subtle.sign(entry.signing, signingKey, signingInput))),
    payload: encodedPayload
  };
  return protectedHeader && (jws.protected = encodedProtectedHeader), unprotectedHeader && (jws.header = unprotectedHeader), [jws, b64];
}
async function createCompactSignature(payload, protectedHeader, crit, key, rejectUnencoded) {
  const [jws] = await createSignature([payload, protectedHeader, void 0, crit], key, rejectUnencoded);
  return `${jws.protected}.${jws.payload}.${jws.signature}`;
}

// node_modules/jose/dist/webapi/jwt/sign.js
var SignJWT_base = JWTClaimsBuilder;
var SignJWT = class extends SignJWT_base {
  #protectedHeader;
  setProtectedHeader(protectedHeader) {
    return assertNotSet(this.#protectedHeader, "setProtectedHeader"), this.#protectedHeader = protectedHeader, this;
  }
  async sign(key, options) {
    return createCompactSignature(jwtClaimsSetBytes(this), this.#protectedHeader, options?.crit, key, () => {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    });
  }
};

// src/lib/prisma.ts
var import_node_dns = __toESM(require("node:dns"));
var import_dotenv2 = __toESM(require_dist());
var import_client = require("@prisma/client");
var import_adapter_pg = require("@prisma/adapter-pg");
var import_pg = __toESM(require("pg"));
if (import_node_dns.default.setDefaultResultOrder) {
  import_node_dns.default.setDefaultResultOrder("ipv4first");
}
import_dotenv2.default.config();
var connectionString = process.env.DATABASE_URL || "";
if (!connectionString) {
  console.error("\u26A0\uFE0F [CRITICAL] DATABASE_URL is missing! Please set DATABASE_URL in Vercel Environment Variables.");
}
var isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
var isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NODE_ENV === "production");
var pool = new import_pg.default.Pool({
  connectionString: connectionString || void 0,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  max: isServerless ? Number(process.env.PG_POOL_MAX) || 2 : 10,
  idleTimeoutMillis: isServerless ? 1e4 : 3e4,
  connectionTimeoutMillis: 5e3
});
var adapter = new import_adapter_pg.PrismaPg(pool);
var prisma = global.prismaInstance || new import_client.PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  global.prismaInstance = prisma;
}

// src/middleware/auth.ts
async function optionalAuthMiddleware(c, next) {
  const authHeader = c.req.header("Authorization");
  let token = "";
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  } else {
    const cookieHeader = c.req.header("Cookie") || "";
    const sessionMatch = cookieHeader.match(/session=([^;]+)/);
    if (sessionMatch) {
      token = sessionMatch[1];
    }
  }
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET_ENCODED);
      c.set("user", {
        userId: payload.userId || payload.sub || payload.id,
        email: payload.email,
        role: payload.role || "user",
        name: payload.name
      });
    } catch {
    }
  }
  await next();
}
async function authMiddleware(c, next) {
  await optionalAuthMiddleware(c, async () => {
  });
  const user = c.get("user");
  if (!user) {
    return sendError(c, "UNAUTHORIZED", "\u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u062E\u062F\u0645\u0629", 401);
  }
  await next();
}
async function adminOnlyMiddleware(c, next) {
  await optionalAuthMiddleware(c, async () => {
  });
  const user = c.get("user");
  if (!user || user.role !== "admin") {
    return sendError(c, "FORBIDDEN", "\u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u062A\u062A\u0637\u0644\u0628 \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0641 \u0627\u0644\u0625\u062F\u0627\u0631\u064A (Admin)", 403);
  }
  await next();
}

// src/routes/auth.routes.ts
var authRoutes = new Hono3();
async function generateTokens(user) {
  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name
  }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("15m").sign(JWT_SECRET_ENCODED);
  const refreshToken = import_crypto3.default.randomBytes(40).toString("hex");
  const refreshTokenHash = import_crypto3.default.createHash("sha256").update(refreshToken).digest("hex");
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);
  await prisma.session.create({
    data: {
      userId: user.id,
      refreshTokenHash,
      expiresAt
    }
  });
  return { token, refreshToken };
}
authRoutes.post("/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;
    if (!email || !password) {
      return sendError(c, "VALIDATION_ERROR", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646", 400);
    }
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });
    if (!user) {
      return sendError(c, "INVALID_CREDENTIALS", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", 401);
    }
    const isMatch = await bcryptjs_default.compare(password, user.password);
    if (!isMatch) {
      return sendError(c, "INVALID_CREDENTIALS", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", 401);
    }
    const { token, refreshToken } = await generateTokens(user);
    return sendSuccess(c, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      },
      token,
      refreshToken
    });
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644", 500);
  }
});
authRoutes.post("/register", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return sendError(c, "VALIDATION_ERROR", "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629", 400);
    }
    const normalizedEmail = email.toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return sendError(c, "USER_EXISTS", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062C\u0644 \u0628\u0627\u0644\u0641\u0639\u0644", 409);
    }
    const hashedPassword = await bcryptjs_default.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: "user"
      }
    });
    const { token, refreshToken } = await generateTokens(user);
    return sendSuccess(
      c,
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token,
        refreshToken
      },
      void 0,
      201
    );
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628", 500);
  }
});
authRoutes.post("/refresh", async (c) => {
  try {
    const { refreshToken } = await c.req.json();
    if (!refreshToken) {
      return sendError(c, "MISSING_TOKEN", "\u0631\u0645\u0632 \u0627\u0644\u062A\u062C\u062F\u064A\u062F \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const refreshTokenHash = import_crypto3.default.createHash("sha256").update(refreshToken).digest("hex");
    const session = await prisma.session.findUnique({
      where: { refreshTokenHash },
      include: { user: true }
    });
    if (!session || session.revokedAt || /* @__PURE__ */ new Date() > session.expiresAt) {
      return sendError(c, "INVALID_TOKEN", "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u062C\u0644\u0633\u0629 \u0627\u0644\u062A\u062C\u062F\u064A\u062F", 401);
    }
    const newToken = await new SignJWT({
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      name: session.user.name
    }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("15m").sign(JWT_SECRET_ENCODED);
    const newRefreshToken = import_crypto3.default.randomBytes(40).toString("hex");
    const newRefreshTokenHash = import_crypto3.default.createHash("sha256").update(newRefreshToken).digest("hex");
    const newExpiresAt = /* @__PURE__ */ new Date();
    newExpiresAt.setDate(newExpiresAt.getDate() + 30);
    await prisma.$transaction([
      prisma.session.update({
        where: { id: session.id },
        data: { revokedAt: /* @__PURE__ */ new Date() }
      }),
      prisma.session.create({
        data: {
          userId: session.user.id,
          refreshTokenHash: newRefreshTokenHash,
          expiresAt: newExpiresAt
        }
      })
    ]);
    return sendSuccess(c, {
      token: newToken,
      refreshToken: newRefreshToken,
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role
      }
    });
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u0645\u0632", 500);
  }
});
authRoutes.get("/me", authMiddleware, async (c) => {
  const authUser = c.get("user");
  const user = await prisma.user.findUnique({
    where: { id: authUser.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      avatar: true,
      gender: true,
      phoneNumber: true,
      birthDate: true,
      subscription: true,
      createdAt: true
    }
  });
  if (!user) {
    return sendError(c, "USER_NOT_FOUND", "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
  }
  return sendSuccess(c, user);
});
authRoutes.post("/logout", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    if (body.refreshToken) {
      const hash2 = import_crypto3.default.createHash("sha256").update(body.refreshToken).digest("hex");
      await prisma.session.updateMany({
        where: { refreshTokenHash: hash2 },
        data: { revokedAt: /* @__PURE__ */ new Date() }
      });
    }
  } catch {
  }
  return sendSuccess(c, { message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0628\u0646\u062C\u0627\u062D" });
});

// src/routes/sessions.routes.ts
var sessionsRoutes = new Hono3();
sessionsRoutes.use("*", authMiddleware);
sessionsRoutes.get("/", async (c) => {
  try {
    const user = c.get("user");
    const sessions = await prisma.session.findMany({
      where: {
        userId: user.userId,
        revokedAt: null,
        expiresAt: { gt: /* @__PURE__ */ new Date() }
      },
      select: {
        id: true,
        deviceName: true,
        userAgent: true,
        ip: true,
        createdAt: true,
        expiresAt: true
      },
      orderBy: { createdAt: "desc" }
    });
    return sendSuccess(c, sessions);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629", 500);
  }
});
sessionsRoutes.delete("/:id", async (c) => {
  try {
    const user = c.get("user");
    const id = c.req.param("id");
    await prisma.session.updateMany({
      where: {
        id,
        userId: user.userId
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0629 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    return sendError(c, "REVOKE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0629", 500);
  }
});
sessionsRoutes.delete("/", async (c) => {
  try {
    const user = c.get("user");
    await prisma.session.updateMany({
      where: {
        userId: user.userId,
        revokedAt: null
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u0625\u0646\u0647\u0627\u0621 \u0643\u0627\u0641\u0629 \u0627\u0644\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629" });
  } catch (error) {
    return sendError(c, "REVOKE_ALL_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0627\u062A", 500);
  }
});

// src/routes/animes.routes.ts
var animesRoutes = new Hono3();
animesRoutes.get("/", async (c) => {
  try {
    const q = c.req.query("q")?.toLowerCase().trim();
    const genre = c.req.query("genre");
    const status = c.req.query("status");
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;
    const where = {};
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } }
      ];
    }
    if (genre) {
      where.genres = { has: genre };
    }
    if (status && status !== "all") {
      where.status = { equals: status, mode: "insensitive" };
    }
    const [total, animes] = await Promise.all([
      prisma.anime.count({ where }),
      prisma.anime.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { episodes: true } }
        }
      })
    ]);
    return sendSuccess(c, animes, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", 500);
  }
});
animesRoutes.get("/featured", async (c) => {
  try {
    const featured = await prisma.anime.findMany({
      where: { isFeatured: true },
      take: 6,
      orderBy: { rating: "desc" }
    });
    return sendSuccess(c, featured);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0645\u064A\u0632\u0629", 500);
  }
});
animesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const anime = await prisma.anime.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: "asc" }
        },
        reviews: {
          take: 10,
          orderBy: { createdAt: "desc" },
          include: {
            user: {
              select: { id: true, name: true, avatar: true }
            }
          }
        }
      }
    });
    if (!anime) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
    }
    return sendSuccess(c, anime);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644", 500);
  }
});
animesRoutes.get("/:id/episodes", async (c) => {
  try {
    const id = c.req.param("id");
    const episodes = await prisma.episode.findMany({
      where: { animeId: id },
      orderBy: { episodeNumber: "asc" },
      include: { servers: true }
    });
    return sendSuccess(c, episodes);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062D\u0644\u0642\u0627\u062A", 500);
  }
});
animesRoutes.get("/characters/all", async (c) => {
  try {
    const team = c.req.query("team");
    const where = team ? { team: { contains: team, mode: "insensitive" } } : {};
    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" }
    });
    return sendSuccess(c, characters);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A", 500);
  }
});

// src/routes/characters.routes.ts
var charactersRoutes = new Hono3();
charactersRoutes.get("/", async (c) => {
  try {
    const team = c.req.query("team");
    const role = c.req.query("role");
    const where = {};
    if (team) where.team = { contains: team, mode: "insensitive" };
    if (role) where.role = { contains: role, mode: "insensitive" };
    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" }
    });
    return sendSuccess(c, characters);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A", 500);
  }
});
charactersRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const character = await prisma.character.findUnique({
      where: { id }
    });
    if (!character) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
    }
    return sendSuccess(c, character);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
charactersRoutes.post("/", adminOnlyMiddleware, async (c) => {
  try {
    const body = await c.req.json();
    const { id, name, name_ar, name_en, name_jp, team, position, number, height, weight, image, description, role } = body;
    if (!name) {
      return sendError(c, "VALIDATION_ERROR", "\u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const charId = id || name.toLowerCase().replace(/\s+/g, "-");
    const created = await prisma.character.create({
      data: {
        id: charId,
        name: name.trim(),
        name_ar: name_ar || null,
        name_en: name_en || null,
        name_jp: name_jp || null,
        team: team || null,
        position: position || null,
        number: number ? String(number) : null,
        height: height || null,
        weight: weight || null,
        image: image || null,
        description: description || null,
        role: role || null
      }
    });
    return sendSuccess(c, created, void 0, 201);
  } catch (error) {
    return sendError(c, "CREATE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
charactersRoutes.put("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const updated = await prisma.character.update({
      where: { id },
      data: {
        name: body.name,
        name_ar: body.name_ar,
        name_en: body.name_en,
        name_jp: body.name_jp,
        team: body.team,
        position: body.position,
        number: body.number ? String(body.number) : void 0,
        height: body.height,
        weight: body.weight,
        image: body.image,
        description: body.description,
        role: body.role
      }
    });
    return sendSuccess(c, updated);
  } catch (error) {
    return sendError(c, "UPDATE_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
charactersRoutes.delete("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.character.delete({
      where: { id }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    return sendError(c, "DELETE_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});

// src/data/episodes.json
var episodes_default = [
  {
    id: "1",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 1",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 1 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 1,
    episodeNumber: 1,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/tmRgHIwT#IxstEywcSnPbylNPbfVaSQr69lcvIkRNgxTxKzAn_S0",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-1",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/tmRgHIwT#IxstEywcSnPbylNPbfVaSQr69lcvIkRNgxTxKzAn_S0",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "2",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 2",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 2 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 2,
    episodeNumber: 2,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/ZjoFTaTT#ZyyP7paDKzr5QXRsOzVBthjzwZSQasCZX-4yRyZoBM0",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-2",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/ZjoFTaTT#ZyyP7paDKzr5QXRsOzVBthjzwZSQasCZX-4yRyZoBM0",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "3",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 3",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 3 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 3,
    episodeNumber: 3,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wjBHVKJA#gpKXfah_5Yge8QIQ59CV4m6V9uhaMYk9mik85rTay4s",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-3",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wjBHVKJA#gpKXfah_5Yge8QIQ59CV4m6V9uhaMYk9mik85rTay4s",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "4",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 4",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 4 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 4,
    episodeNumber: 4,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Qn5EGYya#9n2kaK3gDv1mGsoJyKW7e0NbeMmUBriJ6QAUFBsls2w",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-4",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Qn5EGYya#9n2kaK3gDv1mGsoJyKW7e0NbeMmUBriJ6QAUFBsls2w",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "5",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 5",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 5 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 5,
    episodeNumber: 5,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/5q4E3I6b#mIYyPSNX4n0Ae0A85P0ubpRL9OWK_dJlbahhYGi8ZFk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-5",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/5q4E3I6b#mIYyPSNX4n0Ae0A85P0ubpRL9OWK_dJlbahhYGi8ZFk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "6",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 6",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 6 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 6,
    episodeNumber: 6,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/8rx0QQKC#UV5FvrkftoCoMjO3nkcanLOPdFv010loXpPuwFZRspc",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-6",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/8rx0QQKC#UV5FvrkftoCoMjO3nkcanLOPdFv010loXpPuwFZRspc",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "7",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 7",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 7 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 7,
    episodeNumber: 7,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/guxDyZSa#gRHULWjE2jK7f0dOsJaZy6tZNlaorCFMCGtu5qaSn0E",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-7",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/guxDyZSa#gRHULWjE2jK7f0dOsJaZy6tZNlaorCFMCGtu5qaSn0E",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "8",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 8",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 8 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 8,
    episodeNumber: 8,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/8jpzmapY#r5xEkzW-3Bcc5j1RGbl7PRM1UzFNIurdxn7Nz5NTHWg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-8",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/8jpzmapY#r5xEkzW-3Bcc5j1RGbl7PRM1UzFNIurdxn7Nz5NTHWg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "9",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 9",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 9 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 9,
    episodeNumber: 9,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/V34zkKIL#lhfjEWI6erbvKREOd7diUjjZ5J0-LRJrufprv56tyK0",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-9",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/V34zkKIL#lhfjEWI6erbvKREOd7diUjjZ5J0-LRJrufprv56tyK0",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "10",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 10",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 10 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 10,
    episodeNumber: 10,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Qy5VQBAS#yFRpPA3awM55htlrDwKerGqdyXOQxWjP91lgUc8zyPc",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-10",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Qy5VQBAS#yFRpPA3awM55htlrDwKerGqdyXOQxWjP91lgUc8zyPc",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "11",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 11",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 11 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 11,
    episodeNumber: 11,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/QnxTmTwJ#z5-p2_a9UWlss56HmX9eaLnbs_TUe7WMb0T797KpS3U",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-11",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/QnxTmTwJ#z5-p2_a9UWlss56HmX9eaLnbs_TUe7WMb0T797KpS3U",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "12",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 12",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 12 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 12,
    episodeNumber: 12,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/hrR0BYAC#fg9oqiQQ_EJ_r0aGyswAOFxPMYbCPS6IfAFadFOQtVs",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-12",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/hrR0BYAC#fg9oqiQQ_EJ_r0aGyswAOFxPMYbCPS6IfAFadFOQtVs",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "13",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 13",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 13 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 13,
    episodeNumber: 13,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/xqpFXLDA#3o7V5tsNIOa0NOYxyxDQ6Y6Y3P1KLNXmkI-SDUuet04",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-13",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/xqpFXLDA#3o7V5tsNIOa0NOYxyxDQ6Y6Y3P1KLNXmkI-SDUuet04",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "14",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 14",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 14 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 14,
    episodeNumber: 14,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/lnwjCBgI#i2Bt5p6vj48Lxr4G_vHEoSVr0LbPmJKjM8mqLRnEKts",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-14",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/lnwjCBgI#i2Bt5p6vj48Lxr4G_vHEoSVr0LbPmJKjM8mqLRnEKts",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "15",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 15",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 15 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 15,
    episodeNumber: 15,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9v4XQCjT#3P-W6DTLqBZI8-BHEUZrQAkBlTllSz9VEx1XnCJSxUQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-15",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9v4XQCjT#3P-W6DTLqBZI8-BHEUZrQAkBlTllSz9VEx1XnCJSxUQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "16",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 16",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 16 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 16,
    episodeNumber: 16,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/8ixnlQ4D#Ex28_5s_WEJdxAzaiJVzpla2cp0wSdL3yJVp_EvjxNE",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-16",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/8ixnlQ4D#Ex28_5s_WEJdxAzaiJVzpla2cp0wSdL3yJVp_EvjxNE",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "17",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 17",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 17 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 17,
    episodeNumber: 17,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/tvoFXYzT#C08W7T7RAnawqSOMCeCn880UUSCL0qb2_GIdhtx8srU",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-17",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/tvoFXYzT#C08W7T7RAnawqSOMCeCn880UUSCL0qb2_GIdhtx8srU",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "19",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 19",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 19 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 19,
    episodeNumber: 19,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/QvZWiSSR#dl989tTaI1q5uLpdnns8P25tnBCkXB-75qXXyqyvj20",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-19",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/QvZWiSSR#dl989tTaI1q5uLpdnns8P25tnBCkXB-75qXXyqyvj20",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "20",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 20",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 20 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 20,
    episodeNumber: 20,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/I6I2ESwC#3h9Xet4rZ8XJoy_W82hq3KQyCsG7I3oFqed7kNO28xY",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-20",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/I6I2ESwC#3h9Xet4rZ8XJoy_W82hq3KQyCsG7I3oFqed7kNO28xY",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "21",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 21",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 21 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 21,
    episodeNumber: 21,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/RqJyWChJ#LcASwHiDMazxMIplblDN6NoZu1WgE042TIJ1jyy0mOg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-21",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/RqJyWChJ#LcASwHiDMazxMIplblDN6NoZu1WgE042TIJ1jyy0mOg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "22",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 22",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 22 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 22,
    episodeNumber: 22,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/4yozCa5J#Lwuquulm49ndPqJDno9SQ27IGQEo5uIO1sor2rud4sM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-22",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/4yozCa5J#Lwuquulm49ndPqJDno9SQ27IGQEo5uIO1sor2rud4sM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "23",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 23",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 23 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 23,
    episodeNumber: 23,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/17wTwQrD#wF0tL7_IYorpmSqkfdj1U7NISDJK3SXJJmpgkaMzlRA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-23",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/17wTwQrD#wF0tL7_IYorpmSqkfdj1U7NISDJK3SXJJmpgkaMzlRA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "24",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 24",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 24 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 24,
    episodeNumber: 24,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/A7p3hYJZ#4SBLwrim_wfQTU33YT2TaHmJ0XfWm34OEi-FenTfokE",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-24",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/A7p3hYJZ#4SBLwrim_wfQTU33YT2TaHmJ0XfWm34OEi-FenTfokE",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "25",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 25",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 25 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 25,
    episodeNumber: 25,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/02hR2QgR#SOJJ1m7gobJH_q4pzN9SJfm29-FKkcpFcHhHueaS2Zg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-25",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/02hR2QgR#SOJJ1m7gobJH_q4pzN9SJfm29-FKkcpFcHhHueaS2Zg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "26",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 26",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 26 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 26,
    episodeNumber: 26,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/onhzUYpR#244oeOd1TeOLRJUnOTbgD7H0Z5Q4IlUolOhNsNkwu4s",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-26",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/onhzUYpR#244oeOd1TeOLRJUnOTbgD7H0Z5Q4IlUolOhNsNkwu4s",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "27",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 27",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 27 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 27,
    episodeNumber: 27,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/cy4l2YjA#JyFB3cZXu6YFj7uKIFUhKScK5wX-wouHLl3oqpAEn6c",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-27",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/cy4l2YjA#JyFB3cZXu6YFj7uKIFUhKScK5wX-wouHLl3oqpAEn6c",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "28",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 28",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 28 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 28,
    episodeNumber: 28,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Qv513I5D#75loKLT9r5jJZRXb7rECi5vpoI7mjoiX9KvooZm7dwA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-28",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Qv513I5D#75loKLT9r5jJZRXb7rECi5vpoI7mjoiX9KvooZm7dwA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "29",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 29",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 29 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 29,
    episodeNumber: 29,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/1vAjXayb#dRHhMe3_qwjyUJn1yaht28JDtmRt92RvbgjWTS9YBqs",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-29",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/1vAjXayb#dRHhMe3_qwjyUJn1yaht28JDtmRt92RvbgjWTS9YBqs",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "30",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 30",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 30 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 30,
    episodeNumber: 30,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/FqB1XIwK#6fCZj38usInTxQya8diGln9NKVr5kT20DNX1WEOTwFQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-30",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/FqB1XIwK#6fCZj38usInTxQya8diGln9NKVr5kT20DNX1WEOTwFQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "31",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 31",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 31 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 31,
    episodeNumber: 31,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/J7IHTYqJ#vRI3XqY7xYv4bj6ycYMQQFxz4IkzeiCvgZo1Lfkhhp8",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-31",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/J7IHTYqJ#vRI3XqY7xYv4bj6ycYMQQFxz4IkzeiCvgZo1Lfkhhp8",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "32",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 32",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 32 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 32,
    episodeNumber: 32,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/pipSiQJY#1I4wZ5miQr7wNzX28TmrbHCPJTTLGZDlwp2PYnDhsTk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-32",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/pipSiQJY#1I4wZ5miQr7wNzX28TmrbHCPJTTLGZDlwp2PYnDhsTk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "33",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 33",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 33 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 33,
    episodeNumber: 33,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/J7R2UASJ#QNxQde57AjpXw7Q5IR97jRH5dVZHh9_iRORb5aQhytI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-33",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/J7R2UASJ#QNxQde57AjpXw7Q5IR97jRH5dVZHh9_iRORb5aQhytI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "34",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 34",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 34 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 34,
    episodeNumber: 34,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/l3pQVC6Y#eqZ0xz7wjHp_lt683j3_QYFTCp4rLTNxL0KcXqCC9Mg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-34",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/l3pQVC6Y#eqZ0xz7wjHp_lt683j3_QYFTCp4rLTNxL0KcXqCC9Mg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "35",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 35",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 35 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 35,
    episodeNumber: 35,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/kqxi0IoQ#5OjVanwuooAOQq9Jj1v8oeg1iYoXRBktRdhQluxgkE4",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-35",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/kqxi0IoQ#5OjVanwuooAOQq9Jj1v8oeg1iYoXRBktRdhQluxgkE4",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "36",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 36",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 36 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 36,
    episodeNumber: 36,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/xmBTnITR#NjwYu1tJ7eot1MFIQcUOcoNxUJXlLLrxUwyNNxf1Ff0",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-36",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/xmBTnITR#NjwYu1tJ7eot1MFIQcUOcoNxUJXlLLrxUwyNNxf1Ff0",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "37",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 37",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 37 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 37,
    episodeNumber: 37,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wrYRxChb#LjAO5cQgCu4rG0k-ib2zvKJRWThFPpMaibkbDo9zAwk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-37",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wrYRxChb#LjAO5cQgCu4rG0k-ib2zvKJRWThFPpMaibkbDo9zAwk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "38",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 38",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 38 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 38,
    episodeNumber: 38,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9yxE1BQS#vZGw8ynSCuo-ep6DsMQiZXamUlGOFmTANxzGrhe9oZM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-38",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9yxE1BQS#vZGw8ynSCuo-ep6DsMQiZXamUlGOFmTANxzGrhe9oZM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "39",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 39",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 39 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 39,
    episodeNumber: 39,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/cyhBkJLD#JijlDLBS7ucBpt-vMp8bo8k8eu1ualcAyajTW09KKxc",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-39",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/cyhBkJLD#JijlDLBS7ucBpt-vMp8bo8k8eu1ualcAyajTW09KKxc",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "40",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 40",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 40 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 40,
    episodeNumber: 40,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/p35gHJZB#ssX1T0Sui_-3jZFFkh840IlQ57nN5MP3meUkc7fNjdE",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-40",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/p35gHJZB#ssX1T0Sui_-3jZFFkh840IlQ57nN5MP3meUkc7fNjdE",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "41",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 41",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 41 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 41,
    episodeNumber: 41,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wmo2WD6Z#i6GCKF_ngjFxvmy29TR_MSZSkQeqAkZc8_qzpzu6eOQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-41",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wmo2WD6Z#i6GCKF_ngjFxvmy29TR_MSZSkQeqAkZc8_qzpzu6eOQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "42",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 42",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 42 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 42,
    episodeNumber: 42,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/FmIjET7K#Sy7WPnHHfgUygnrUDj7za1uYKn8JvuSl1TDGgdTEf-E",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-42",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/FmIjET7K#Sy7WPnHHfgUygnrUDj7za1uYKn8JvuSl1TDGgdTEf-E",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "43",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 43",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 43 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 43,
    episodeNumber: 43,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/YjwVjJDK#k-xjp7gqvDYH67q0aWGELw1bihn-qISNuQI7XFcVfb4",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-43",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/YjwVjJDK#k-xjp7gqvDYH67q0aWGELw1bihn-qISNuQI7XFcVfb4",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "44",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 44",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 44 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 44,
    episodeNumber: 44,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/8uBHSSbB#vQp-wq_5oN82JR4fJOdNDHdE_8DEaxPCi6f_Nc_7PHM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-44",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/8uBHSSbB#vQp-wq_5oN82JR4fJOdNDHdE_8DEaxPCi6f_Nc_7PHM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "45",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 45",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 45 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 45,
    episodeNumber: 45,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/F65j0Ixa#SpFi0PEAgfJRKsEosuCJejNVKpWdAsn7bIQ9iqpDLKA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-45",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/F65j0Ixa#SpFi0PEAgfJRKsEosuCJejNVKpWdAsn7bIQ9iqpDLKA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "46",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 46",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 46 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 46,
    episodeNumber: 46,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/kuQUUBwK#u3bMELL2O-p4BD4MJPod87J69JP_xED_BR47IlxMjmQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-46",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/kuQUUBwK#u3bMELL2O-p4BD4MJPod87J69JP_xED_BR47IlxMjmQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "47",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 47",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 47 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 47,
    episodeNumber: 47,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/RzJSiJ6T#mB2i_KgCSsWVacHBu71NeuFKG5-R4f7RoIt3RH8ACZg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-47",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/RzJSiJ6T#mB2i_KgCSsWVacHBu71NeuFKG5-R4f7RoIt3RH8ACZg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "48",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 48",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 48 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 48,
    episodeNumber: 48,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/0qpTmaqT#pjzdsMF9Od1LOtkDArJLd0cPFNOVO5XaFC95V4pKMBM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-48",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/0qpTmaqT#pjzdsMF9Od1LOtkDArJLd0cPFNOVO5XaFC95V4pKMBM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "49",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 49",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 49 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 49,
    episodeNumber: 49,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/ZnYgRSwL#JPZ8X7Qnh4e2yMxyMTdzPA86zCV8Fk0sShVwUzv_mvI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-49",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/ZnYgRSwL#JPZ8X7Qnh4e2yMxyMTdzPA86zCV8Fk0sShVwUzv_mvI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "50",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 50",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 50 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 50,
    episodeNumber: 50,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/ZuYhzTqb#vRdzOBBWyVmOIJNJpK8CAA_Ig30sxPy3i4onh9HNUJE",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-50",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/ZuYhzTqb#vRdzOBBWyVmOIJNJpK8CAA_Ig30sxPy3i4onh9HNUJE",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "51",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 51",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 51 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 51,
    episodeNumber: 51,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/8v5SiTTA#yG5aLtoJSKuVoDJ9QerTA97xgWuGWYosrRzB5ipLOAc",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-51",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/8v5SiTTA#yG5aLtoJSKuVoDJ9QerTA97xgWuGWYosrRzB5ipLOAc",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "52",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 52",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 52 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 52,
    episodeNumber: 52,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/BiZTDRiI#DOqlNq6Tw_UZHmGfduCfQJqYwtHqBwJ__X1V2HeWhww",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-52",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/BiZTDRiI#DOqlNq6Tw_UZHmGfduCfQJqYwtHqBwJ__X1V2HeWhww",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "53",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 53",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 53 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 53,
    episodeNumber: 53,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/0zABARLb#9LvQ2B-VhKgvN2ycVzU2RX3jFSFkLx6cFKOYqms0r10",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-53",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/0zABARLb#9LvQ2B-VhKgvN2ycVzU2RX3jFSFkLx6cFKOYqms0r10",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "54",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 54",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 54 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 54,
    episodeNumber: 54,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Yro2EBrI#Su_78_O5ndU2ckQtq89q6V5tMQ9lp901ldGZU5z2olo",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-54",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Yro2EBrI#Su_78_O5ndU2ckQtq89q6V5tMQ9lp901ldGZU5z2olo",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "55",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 55",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 55 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 55,
    episodeNumber: 55,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wvphkB7S#3XLYhq-2VHIyKo6pnd7eAotKCcGvURv10t9XAwq2q5I",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-55",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wvphkB7S#3XLYhq-2VHIyKo6pnd7eAotKCcGvURv10t9XAwq2q5I",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "56",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 56",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 56 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 56,
    episodeNumber: 56,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/5vYBgRaY#ZwKjxQkdpSt1Pg1_yzTqWO6NfOfykG_bcWyallzew4k",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-56",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/5vYBgRaY#ZwKjxQkdpSt1Pg1_yzTqWO6NfOfykG_bcWyallzew4k",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "57",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 57",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 57 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 57,
    episodeNumber: 57,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wr4jzboC#j6Ef2kCxmcpbd9EY4uEv3fpTiR6eFoiMWXwJhgGNcYw",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-57",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wr4jzboC#j6Ef2kCxmcpbd9EY4uEv3fpTiR6eFoiMWXwJhgGNcYw",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "58",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 58",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 58 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 58,
    episodeNumber: 58,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/ku4yhSQB#lPe5RHQPbCIUg-a-3Kwzd218ct5YaEUdGj2I3McRkbY",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-58",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/ku4yhSQB#lPe5RHQPbCIUg-a-3Kwzd218ct5YaEUdGj2I3McRkbY",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "59",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 59",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 59 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 59,
    episodeNumber: 59,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Y24GjQiJ#V02jglRqqev_mXvcZOyLNUzqTiDaSkc1g3SKwUmO9v8",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-59",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Y24GjQiJ#V02jglRqqev_mXvcZOyLNUzqTiDaSkc1g3SKwUmO9v8",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "60",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 60",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 60 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 1,
    seasonNumber: 1,
    episode_number: 60,
    episodeNumber: 60,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9uYxlZYa#-mAH6YKZNbVhiCz8HhRxuLcHMhmtEXgBHNK0_NIZvtg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-60",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9uYxlZYa#-mAH6YKZNbVhiCz8HhRxuLcHMhmtEXgBHNK0_NIZvtg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "61",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 61",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 61 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 61,
    episodeNumber: 61,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/FqgjnQKB#YKqtkbyJps5upobKHERDORXwGgTLRtvkSGSlIaCoIkw",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-61",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/FqgjnQKB#YKqtkbyJps5upobKHERDORXwGgTLRtvkSGSlIaCoIkw",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "62",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 62",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 62 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 62,
    episodeNumber: 62,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/guoGnI7Z#JxualpQn9-zXrHZxgGi8HrKGbG0ItQFCdx79jb9X-zs",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-62",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/guoGnI7Z#JxualpQn9-zXrHZxgGi8HrKGbG0ItQFCdx79jb9X-zs",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "63",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 63",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 63 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 63,
    episodeNumber: 63,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/k24lmbRI#_RxoaG7V41uTcOdbkwYNav2fwwZK6EgKBmcODL78Azg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-63",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/k24lmbRI#_RxoaG7V41uTcOdbkwYNav2fwwZK6EgKBmcODL78Azg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "64",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 64",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 64 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 64,
    episodeNumber: 64,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/AzI1gRAK#Hfsw0rEDQaCJHyF9zpnhfIxWJQ4x_nvOsowTL2oLZtI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-64",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/AzI1gRAK#Hfsw0rEDQaCJHyF9zpnhfIxWJQ4x_nvOsowTL2oLZtI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "65",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 65",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 65 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 65,
    episodeNumber: 65,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wmw0ESzR#JEdAUdMlrzZkLZyKA-Dq-ynE9iiN70QkpJz-U82PvlU",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-65",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wmw0ESzR#JEdAUdMlrzZkLZyKA-Dq-ynE9iiN70QkpJz-U82PvlU",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "66",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 66",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 66 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 66,
    episodeNumber: 66,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/YvoRHYTZ#iAzjBhnts_ulZTb6KiYKn4_NFsWQ2L-dATHzMxOkKRM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-66",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/YvoRHYTZ#iAzjBhnts_ulZTb6KiYKn4_NFsWQ2L-dATHzMxOkKRM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "67",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 67",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 67 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 67,
    episodeNumber: 67,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/d7BHnYRJ#8z933mE0j80tRnVnRiDR-nr6_Cej7-cUVGwSwDJMVw8",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-67",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/d7BHnYRJ#8z933mE0j80tRnVnRiDR-nr6_Cej7-cUVGwSwDJMVw8",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "68",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 68",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 68 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 68,
    episodeNumber: 68,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/hjgCxbID#T_xNYpBgqHhXuIoXdaPurYYFAaQf-kK01WCJAKu5czA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-68",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/hjgCxbID#T_xNYpBgqHhXuIoXdaPurYYFAaQf-kK01WCJAKu5czA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "69",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 69",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 69 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 69,
    episodeNumber: 69,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wyIT2Dha#FF6YSR8nd7S1CziGsJe4HnFWuxnmxwgBZadmioQh8AU",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-69",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wyIT2Dha#FF6YSR8nd7S1CziGsJe4HnFWuxnmxwgBZadmioQh8AU",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "70",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 70",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 70 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 70,
    episodeNumber: 70,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/cmwlESSC#Ad3JtBNklqvKWcMMsFRKyAbhyL3gMYNeZMvpP0hTYjI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-70",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/cmwlESSC#Ad3JtBNklqvKWcMMsFRKyAbhyL3gMYNeZMvpP0hTYjI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "71",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 71",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 71 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 71,
    episodeNumber: 71,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/M7YWWSzR#5pGjnzZiGQcVOB3Oqy6hAhFm6U0MCQpO4f1DExwohRU",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-71",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/M7YWWSzR#5pGjnzZiGQcVOB3Oqy6hAhFm6U0MCQpO4f1DExwohRU",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "72",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 72",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 72 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 72,
    episodeNumber: 72,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/VnoQULAb#bSONXD9zgnY2xRvt87JxpzmaomlSW27Fr7mMXQuY524",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-72",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/VnoQULAb#bSONXD9zgnY2xRvt87JxpzmaomlSW27Fr7mMXQuY524",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "73",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 73",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 73 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 73,
    episodeNumber: 73,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/cm52lSJQ#Vvk7N3Ketf31S4qjOQPzQItpWNJqBJhtVLum6GgEQVU",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-73",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/cm52lSJQ#Vvk7N3Ketf31S4qjOQPzQItpWNJqBJhtVLum6GgEQVU",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "74",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 74",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 74 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 74,
    episodeNumber: 74,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/guBX3b7Z#bB9EsQgnCRibZ9fObnJGBK3R-1QJDP76A81zY3Br8G4",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-74",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/guBX3b7Z#bB9EsQgnCRibZ9fObnJGBK3R-1QJDP76A81zY3Br8G4",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "75",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 75",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 75 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 75,
    episodeNumber: 75,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/V7RB2CrR#w_kWnOyYXYpI0yFcgGC-JzOSFjJYN6_u1tBMqSO7QPk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-75",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/V7RB2CrR#w_kWnOyYXYpI0yFcgGC-JzOSFjJYN6_u1tBMqSO7QPk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "76",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 76",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 76 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 76,
    episodeNumber: 76,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/I742hYQJ#hnGJN0sT1G4H_PQ_cEJNHxIN7TaYWCzdGPsTJeRKBiE",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-76",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/I742hYQJ#hnGJN0sT1G4H_PQ_cEJNHxIN7TaYWCzdGPsTJeRKBiE",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "77",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 77",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 77 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 77,
    episodeNumber: 77,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/giwxmRYT#ddBBw0qy_pA5PZ4_-4UAyz1pw-eV15HBvjzR_JvTXpM",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-77",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/giwxmRYT#ddBBw0qy_pA5PZ4_-4UAyz1pw-eV15HBvjzR_JvTXpM",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "78",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 78",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 78 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 78,
    episodeNumber: 78,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/gihmAYqZ#EWO52OacyWVpxdtcndfu9EWN29ld5flxsMLffGHuyf0",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-78",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/gihmAYqZ#EWO52OacyWVpxdtcndfu9EWN29ld5flxsMLffGHuyf0",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "79",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 79",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 79 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 79,
    episodeNumber: 79,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9nhWGD4Q#1aBilE-3gtH3LgzAr2EfRWzzyBeqFpm-85JBtwq_rvw",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-79",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9nhWGD4Q#1aBilE-3gtH3LgzAr2EfRWzzyBeqFpm-85JBtwq_rvw",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "80",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 80",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 80 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 80,
    episodeNumber: 80,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/cvIHVYRA#Nbcdi83T20oTFTOLskK9aPvJPVqrncI20smJswQfpYc2",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-80",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/cvIHVYRA#Nbcdi83T20oTFTOLskK9aPvJPVqrncI20smJswQfpYc2",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "81",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 81",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 81 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 81,
    episodeNumber: 81,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/xvBlyLhL#Io9QuvHetVf4NHUqNrxXdXJoXfLFSjeopLZJX-AoDxw",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-81",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/xvBlyLhL#Io9QuvHetVf4NHUqNrxXdXJoXfLFSjeopLZJX-AoDxw",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "82",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 82",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 82 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 82,
    episodeNumber: 82,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/VrozUA6Y#k8zeqAcmiN2M67nDwK4lK_2xzfCzkaR6adJ-8Oqpa_A",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-82",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/VrozUA6Y#k8zeqAcmiN2M67nDwK4lK_2xzfCzkaR6adJ-8Oqpa_A",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "83",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 83",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 83 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 83,
    episodeNumber: 83,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/4yRjgYLJ#7UTGbSxz9elRArjGPSbeJZj9TFZCPTBjXbX8aq6dgUQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-83",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/4yRjgYLJ#7UTGbSxz9elRArjGPSbeJZj9TFZCPTBjXbX8aq6dgUQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "84",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 84",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 84 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 84,
    episodeNumber: 84,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/drQUAaoA#nSHqb0BMSCnBPDHDn_bieS4lRtheAdLiK1o7TeApG2c",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-84",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/drQUAaoA#nSHqb0BMSCnBPDHDn_bieS4lRtheAdLiK1o7TeApG2c",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "85",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 85",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 85 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 85,
    episodeNumber: 85,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/kromSDSK#clF3XgCN-OyUHSw47-3GkyzgEMKKb0MAivVts32zrcg",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-85",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/kromSDSK#clF3XgCN-OyUHSw47-3GkyzgEMKKb0MAivVts32zrcg",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "86",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 86",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 86 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 86,
    episodeNumber: 86,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/ZiIhCDKA#-hF1Deeb7JkLSUBK9GS0AwoFWIu7moRLVPW2OUe8o3Y",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-86",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/ZiIhCDKA#-hF1Deeb7JkLSUBK9GS0AwoFWIu7moRLVPW2OUe8o3Y",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "87",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 87",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 87 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 87,
    episodeNumber: 87,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/tz4HRDyD#-dCzcmUle5PH0E2mb3djqZ2QA9uhySltFC3YE84lvo8",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-87",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/tz4HRDyD#-dCzcmUle5PH0E2mb3djqZ2QA9uhySltFC3YE84lvo8",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "88",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 88",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 88 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 88,
    episodeNumber: 88,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/t7AWCRgY#kaLENkP_Fvo4Mi0oypHHWVeHlHNJ5W9UXaQpAFqu_YI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-88",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/t7AWCRgY#kaLENkP_Fvo4Mi0oypHHWVeHlHNJ5W9UXaQpAFqu_YI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "89",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 89",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 89 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 89,
    episodeNumber: 89,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/t7IE0agK#05v0GC28C9_28Rkz0Sk-3yPcvp-DKAg9YxyTrW2KCNA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-89",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/t7IE0agK#05v0GC28C9_28Rkz0Sk-3yPcvp-DKAg9YxyTrW2KCNA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "90",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 90",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 90 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 90,
    episodeNumber: 90,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/4uYX3SQJ#D2EIxuwJ-2yXLnVp9Uh8INuN3PnLGC9x1Oe1lXZh7a8",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-90",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/4uYX3SQJ#D2EIxuwJ-2yXLnVp9Uh8INuN3PnLGC9x1Oe1lXZh7a8",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "91",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 91",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 91 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 91,
    episodeNumber: 91,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9qI1mZpL#rKOeQ3EQstgHLNo7XWhatv6rOwoK1qb2c3T9p1kYtVA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-91",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9qI1mZpL#rKOeQ3EQstgHLNo7XWhatv6rOwoK1qb2c3T9p1kYtVA",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "92",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 92",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 92 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 92,
    episodeNumber: 92,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/wzpBXQwD#W8OCjygOpr0hN3m0IjuEgm52w-dDrSWhh31hszac2ak",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-92",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/wzpBXQwD#W8OCjygOpr0hN3m0IjuEgm52w-dDrSWhh31hszac2ak",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "93",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 93",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 93 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 93,
    episodeNumber: 93,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/1uoX1aZZ#k3jQE-p5HcjY1aTKbzj1pGnZlwkZpYM2ojWvnSIKPX4",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-93",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/1uoX1aZZ#k3jQE-p5HcjY1aTKbzj1pGnZlwkZpYM2ojWvnSIKPX4",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "94",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 94",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 94 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 94,
    episodeNumber: 94,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/QyxmEa7b#SWkk3JIbvTuApS9pA8CmJeSeUrwwkfYIrR3QwQ1an9c",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-94",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/QyxmEa7b#SWkk3JIbvTuApS9pA8CmJeSeUrwwkfYIrR3QwQ1an9c",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "95",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 95",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 95 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 95,
    episodeNumber: 95,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/NyYUwbib#BzwV6F77IJEcfDoR_BWZEc2wAWsnX26C4QSJ8SAgyPk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-95",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/NyYUwbib#BzwV6F77IJEcfDoR_BWZEc2wAWsnX26C4QSJ8SAgyPk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "96",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 96",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 96 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 96,
    episodeNumber: 96,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/EuwyULRb#4bORyizFE2VDwozOorOPd5-_nTiN6XX9eDqpX3KR6BI",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-96",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/EuwyULRb#4bORyizFE2VDwozOorOPd5-_nTiN6XX9eDqpX3KR6BI",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "97",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 97",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 97 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 97,
    episodeNumber: 97,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/9iQmSZgQ#3C6bIK2YWE2fOzjBgONammfKmAedKTuCDubU7dbt2tc",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-97",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/9iQmSZgQ#3C6bIK2YWE2fOzjBgONammfKmAedKTuCDubU7dbt2tc",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "98",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 98",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 98 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 98,
    episodeNumber: 98,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/Z7I33YDS#iw-XRlcdV-YlT8U_z5-kB_chSlmJUDeJ3rDq6-X5B7w",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-98",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/Z7I33YDS#iw-XRlcdV-YlT8U_z5-kB_chSlmJUDeJ3rDq6-X5B7w",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "99",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 99",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 99 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 99,
    episodeNumber: 99,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/EvQ3RBrb#Lmo6m11zn_30dRzP9hirq-x5-L_tak_w8MwElBhUvzQ",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-99",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/EvQ3RBrb#Lmo6m11zn_30dRzP9hirq-x5-L_tak_w8MwElBhUvzQ",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "100",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 100",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 100 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 100,
    episodeNumber: 100,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/h3oEVKQJ#PZtxpOVR6oat9p12Dy1neYvtO1gyLpADQuRd__Px2rk",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-100",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/h3oEVKQJ#PZtxpOVR6oat9p12Dy1neYvtO1gyLpADQuRd__Px2rk",
        quality: "1080p FHD"
      }
    ]
  },
  {
    id: "101",
    title: "\u0627\u0644\u062D\u0644\u0642\u0629 101",
    description: "\u0627\u0644\u062D\u0644\u0642\u0629 101 \u0645\u0646 \u0623\u0646\u0645\u064A \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643. \u062A\u0627\u0628\u0639 \u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0648\u0641\u0631\u064A\u0642 \u0634\u0648\u0647\u0648\u0643\u0648 \u0641\u064A \u0637\u0631\u064A\u0642\u0647\u0645 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    season: 2,
    seasonNumber: 2,
    episode_number: 101,
    episodeNumber: 101,
    thumbnail: "/logoep.jpg",
    duration: "23:30",
    mega_link: "https://mega.nz/file/J3RnTLLT#OYp72LPc_wU46y9y36OfdfM1SKYdhGGb2pDk_p9bHhA",
    video_url: "",
    animeId: "slam-dunk",
    servers: [
      {
        id: "srv-mega-101",
        name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
        url: "https://mega.nz/file/J3RnTLLT#OYp72LPc_wU46y9y36OfdfM1SKYdhGGb2pDk_p9bHhA",
        quality: "1080p FHD"
      }
    ]
  }
];

// src/routes/episodes.routes.ts
var episodesRoutes = new Hono3();
function detectServerType(url, explicitType) {
  if (explicitType && ["hls", "mp4", "embed", "mega"].includes(explicitType)) {
    return explicitType;
  }
  const lower = url.toLowerCase();
  if (lower.includes("mega.nz") || lower.includes("mega.io")) return "mega";
  if (lower.includes(".m3u8")) return "hls";
  if (lower.includes(".mp4")) return "mp4";
  if (lower.includes("embed") || lower.includes("iframe") || lower.includes("ok.ru") || lower.includes("dailymotion") || lower.includes("streamtape") || lower.includes("vidmoly") || lower.includes("dood")) {
    return "embed";
  }
  return "hls";
}
episodesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    let episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        anime: {
          select: { id: true, title: true, coverImage: true, bannerImage: true }
        },
        servers: {
          orderBy: [
            { isWorking: "desc" },
            { priority: "asc" }
          ]
        }
      }
    });
    if (!episode && !isNaN(Number(id))) {
      episode = await prisma.episode.findFirst({
        where: { episodeNumber: Number(id) },
        include: {
          anime: {
            select: { id: true, title: true, coverImage: true, bannerImage: true }
          },
          servers: {
            orderBy: [
              { isWorking: "desc" },
              { priority: "asc" }
            ]
          }
        }
      });
    }
    if (!episode) {
      const staticEp = episodes_default.find(
        (e) => String(e.id) === id || String(e.episodeNumber) === id || String(e.episode_number) === id
      );
      if (!staticEp) {
        return sendError(c, "NOT_FOUND", "\u0627\u0644\u062D\u0644\u0642\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
      }
      const staticServers = staticEp.servers && staticEp.servers.length > 0 ? staticEp.servers.map((s, idx) => ({
        id: s.id || `srv-static-${idx + 1}`,
        name: s.name || `\u0633\u064A\u0631\u0641\u0631 ${idx + 1}`,
        url: s.url,
        quality: s.quality || "1080p FHD",
        type: detectServerType(s.url, s.type),
        priority: s.priority || idx + 1,
        isWorking: true
      })) : staticEp.mega_link ? [
        {
          id: `srv-mega-${id}`,
          name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
          url: staticEp.mega_link,
          quality: "1080p FHD",
          type: "mega",
          priority: 1,
          isWorking: true
        }
      ] : [];
      return sendSuccess(c, {
        id: String(staticEp.id),
        animeId: staticEp.animeId || "slam-dunk",
        title: staticEp.title,
        description: staticEp.description || "",
        thumbnail: staticEp.thumbnail || "/logoep.jpg",
        duration: staticEp.duration || "23:30",
        durationSeconds: 1410,
        episodeNumber: Number(staticEp.episodeNumber || staticEp.episode_number || 1),
        seasonNumber: Number(staticEp.seasonNumber || 1),
        introStart: 0,
        introEnd: 90,
        outroStart: 1320,
        outroEnd: 1410,
        anime: {
          id: "slam-dunk",
          title: "\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643 (Slam Dunk)",
          coverImage: "/hero-bg.jpg"
        },
        servers: staticServers,
        comments: [],
        nextEpisode: null,
        prevEpisode: null
      });
    }
    let formattedServers = episode.servers.map((s) => ({
      id: s.id,
      name: s.name,
      url: s.url,
      quality: s.quality || "1080p FHD",
      type: detectServerType(s.url, s.type),
      priority: s.priority,
      isWorking: s.isWorking,
      lastCheckedAt: s.lastCheckedAt
    }));
    if (formattedServers.length === 0) {
      const staticEp = episodes_default.find(
        (e) => String(e.id) === episode.id || Number(e.episodeNumber || e.episode_number) === episode.episodeNumber
      );
      if (staticEp?.servers && staticEp.servers.length > 0) {
        formattedServers = staticEp.servers.map((s, idx) => ({
          id: s.id || `srv-fb-${idx + 1}`,
          name: s.name || `\u0633\u064A\u0631\u0641\u0631 ${idx + 1}`,
          url: s.url,
          quality: s.quality || "1080p FHD",
          type: detectServerType(s.url, s.type),
          priority: idx + 1,
          isWorking: true,
          lastCheckedAt: null
        }));
      } else if (staticEp?.mega_link) {
        formattedServers = [
          {
            id: `srv-mega-${episode.id}`,
            name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
            url: staticEp.mega_link,
            quality: "1080p FHD",
            type: "mega",
            priority: 1,
            isWorking: true,
            lastCheckedAt: null
          }
        ];
      }
    }
    const [prevEp, nextEp, comments] = await Promise.all([
      prisma.episode.findFirst({
        where: {
          animeId: episode.animeId,
          episodeNumber: episode.episodeNumber - 1
        },
        select: { id: true, episodeNumber: true, title: true, thumbnail: true }
      }),
      prisma.episode.findFirst({
        where: {
          animeId: episode.animeId,
          episodeNumber: episode.episodeNumber + 1
        },
        select: { id: true, episodeNumber: true, title: true, thumbnail: true }
      }),
      prisma.comment.findMany({
        where: { episodeId: episode.id },
        orderBy: { createdAt: "desc" },
        take: 50
      })
    ]);
    return sendSuccess(c, {
      ...episode,
      servers: formattedServers,
      comments,
      prevEpisode: prevEp,
      nextEpisode: nextEp
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0644\u0642\u0629", 500);
  }
});
episodesRoutes.post("/:id/comments", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const user = c.get("user");
    const body = await c.req.json();
    const { content } = body;
    if (!content || !content.trim()) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const comment = await prisma.comment.create({
      data: {
        episodeId,
        userId: user.userId,
        userName: user.name || "\u0645\u0633\u062A\u062E\u062F\u0645",
        content: content.trim()
      }
    });
    return sendSuccess(c, comment, void 0, 201);
  } catch (error) {
    return sendError(c, "CREATE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0642", 500);
  }
});
episodesRoutes.post("/:id/rate", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const user = c.get("user");
    const { rating } = await c.req.json();
    const numericRating = Math.min(5, Math.max(1, parseInt(rating, 10)));
    const rateRecord = await prisma.episodeRating.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId
        }
      },
      update: { rating: numericRating },
      create: {
        userId: user.userId,
        episodeId,
        rating: numericRating
      }
    });
    return sendSuccess(c, rateRecord);
  } catch (error) {
    return sendError(c, "RATE_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645", 500);
  }
});

// src/routes/me.routes.ts
var meRoutes = new Hono3();
meRoutes.use("*", authMiddleware);
meRoutes.get("/progress", async (c) => {
  try {
    const user = c.get("user");
    const progressList = await prisma.watchProgress.findMany({
      where: { userId: user.userId },
      orderBy: { updatedAt: "desc" },
      take: 30
    });
    return sendSuccess(c, progressList);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});
meRoutes.post("/progress", async (c) => {
  try {
    const user = c.get("user");
    const body = await c.req.json();
    const { episodeId, positionSeconds, durationSeconds, completed } = body;
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const pos = parseFloat(positionSeconds) || 0;
    const dur = parseFloat(durationSeconds) || 0;
    const isCompleted = completed ?? (dur > 0 && pos / dur > 0.9);
    const record = await prisma.watchProgress.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId
        }
      },
      update: {
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted
      },
      create: {
        userId: user.userId,
        episodeId,
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted
      }
    });
    return sendSuccess(c, record);
  } catch (error) {
    return sendError(c, "SAVE_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0641\u0638 \u062A\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});
meRoutes.get("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const favorites = await prisma.favorite.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: "desc" }
    });
    return sendSuccess(c, favorites);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0645\u0641\u0636\u0644\u0629", 500);
  }
});
meRoutes.post("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const { targetId, targetType = "anime" } = await c.req.json();
    if (!targetId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const existing = await prisma.favorite.findUnique({
      where: {
        userId_targetType_targetId: {
          userId: user.userId,
          targetType,
          targetId
        }
      }
    });
    if (existing) {
      await prisma.favorite.delete({
        where: { id: existing.id }
      });
      return sendSuccess(c, { isFavorited: false, message: "\u062A\u0645\u062A \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" });
    }
    await prisma.favorite.create({
      data: {
        userId: user.userId,
        targetType,
        targetId
      }
    });
    return sendSuccess(c, { isFavorited: true, message: "\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" }, void 0, 201);
  } catch (error) {
    return sendError(c, "FAV_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0641\u0636\u0644\u0629", 500);
  }
});
meRoutes.get("/history", async (c) => {
  try {
    const user = c.get("user");
    const history = await prisma.history.findMany({
      where: { userId: user.userId },
      orderBy: { watchedAt: "desc" },
      take: 50
    });
    return sendSuccess(c, history);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0633\u062C\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});

// src/data/animes.json
var animes_default = [
  {
    id: "slam-dunk",
    title: "\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643 (Slam Dunk)",
    description: "\u0647\u0627\u0646\u0627\u0645\u064A\u062A\u0634\u064A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A \u0647\u0648 \u062C\u0627\u0646\u062D \u0633\u064A\u0626 \u0627\u0644\u0633\u0645\u0639\u0629 \u064A\u062E\u0634\u0627\u0647 \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064A \u0645\u062F\u0631\u0633\u062A\u0647. \u0628\u0639\u062F \u0631\u0641\u0636\u0647 \u0645\u0646 \u0642\u0628\u0644 50 \u0641\u062A\u0627\u0629\u060C \u064A\u0644\u062A\u0642\u064A \u0628\u0647\u0627\u0631\u0648\u0643\u0648 \u0623\u0643\u0627\u062C\u064A\u060C \u0627\u0644\u0641\u062A\u0627\u0629 \u0627\u0644\u062A\u064A \u0633\u062A\u0642\u0648\u062F\u0647 \u0625\u0644\u0649 \u0639\u0627\u0644\u0645 \u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxpjOV_-f3YQQLUb_T_57HXpyZ4NIlMatMg&s",
    bannerImage: "/hero-bg.jpg",
    type: "TV Series",
    status: "completed",
    totalEpisodes: 101,
    releaseYear: 1993,
    genres: [
      "Sports",
      "Comedy",
      "School",
      "Shounen"
    ],
    title_en: "Slam Dunk",
    title_jp: null,
    trailerUrl: null,
    rating: 9,
    isFeatured: false,
    isTrending: false,
    planet: "\u0631\u064A\u0627\u0636\u0629",
    studio: "Toei Animation",
    ageRating: "+16",
    audioLanguage: "dubbed",
    quality: "4K",
    updatedAt: "2026-10-13T11:23:07.040Z",
    createdAt: "2026-10-10T05:47:30.684Z",
    title_ar: "\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643"
  },
  {
    id: "conan",
    title: "\u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646 (Detective Conan)",
    description: "\u0645\u0633\u0644\u0633\u0644 \u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646\u060C \u0623\u0646\u0645\u064A \u0627\u0644\u063A\u0645\u0648\u0636 \u0648\u0627\u0644\u062C\u0631\u064A\u0645\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0623\u064A\u0642\u0648\u0646\u064A.",
    coverImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhAVFRUVFRUXFRUXFRUVFxUXFRUWFxUVFRcYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lHyYtLS0tLy0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOoA1wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAABBAADBAcFBgMIAgMAAAABAAIDEQQhMQUSQWEGEyJRcYGRBzJCobFSYnLB0fAUIzNDU4KSosLh8SSyFWPS/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQIAAwQF/8QAKhEAAgICAgICAgEDBQAAAAAAAAECEQMhEjEEQSJREzJhcbHRBRQjQlL/2gAMAwEAAhEDEQA/APJyUWmpLVyK2x9pbUaLRAS2i1HaLTCElotR2ltQhKClBUNp28iAmBS2og5OBStDRY9Cbvd6miw0jvdje78LXO+gVEtGuDshQr42PiD/AGL/AEr6psmyMQNYH+Q3vpaq5L7L0mUU0qSWJzfeaW/iBb9VEUQgSkJQmlCwCkq7tLZkkIYX6PaD4GrLDzCTYeF62eNlZb1u/C3tG/Gq811O08YyWR+Hk9w0Gv8AsSD4vCzXlzKrlJp0gpKtnE2ktSYvDuje6N4pzTR/IjkdVEnACEJFAAhCFCCpLTbQtiMA60WmoUIOtFpqEQUPQmWhSwUPRaYFdiwoAuQ+V/UpXNLsZQcuiGNhOgVuCONhubMfZDt2/OiT5Uqk+0eEYod9fQKg95JsmzzVUptlsYRidfh+kuDj/p4Ug/ayP+o24+inPSt7/cLByzJ+f6LjIN2+3dcuCvnZzDo/XMaFUfijey9ZZVSOgdtrEH+0/wBLf0SDbM/96fRv6LEihlZo4OHcbB8irgR4R+g85fZqs2/Nodxw5t/Sk12Iwsn9XDBpPxR5eZAr81mIQ/HH0NzZen6Mhw3sNMJB9l1B3rpfIgLn8TA9jt17S1w4EV/2Oa6LCYKXd62E3Wu6e0DxBB1+dq+zGRYgdViWAO4O0o8j8Dvkfkk5Nfz/AHH0/wCDN6INDGzTke40Nb4nMj/09VTcbJJzJzPO9Vq4/CnDwNgFkOkc4vqg77I8arL7qx5ZA0Wf++SaG7kJP6JNqytkiBealZQaf7xl+6ebbu+61iqfdfIS4DIanRreRccgoEyJ/UElpSmqEHITUKEGWlCSkLYYBbRaRAUALaLSJVLCCElq3hGgAyO0Gg7ykcqQYq2SsY2Ibzve4D8h+qz8TiXPOenAcAmzzF5s+ndyUapL/wCECeA08SPEWPUfomIUASdQeFO8Dfy1+SVr/hdpw72n98FEApOuPHPxz+eoUCL1r2mg4+uSnj2k8a0fKvoqzngjSu7imKEs6PBzscLINcj2gfPI/vNTSQZbzTvN4kZFv4m8PHTmubw2ILDY8x3rdw0+j2EjuPEd4StfQ8XZf2RjjE/XsuFG9B3O8j8rWx/GQT9idgY8ZZnj91/5H5rAJa7ua70af/yfl4IxANAkZjsu8WjsnzbX+UquUFJ37LVNpUdUzBHdMUh6yM+674m9wPhwcFzOPwsUDj1gMjxoHdmMA3ukNBt5PjXopdnbXkiy95v2Tw/CeH0VzpA1mJw/WsB3oiTR1Ay3weVUfJVpSjKn0M2pLXZyuMxjpDmeyPdaAA0DkBkPJVUqFeIIUwpzkihGNQgoUACEtIIW1HObFjYXGgM1aZCxvvO3j3DRVg41Xrz8UrCo4tkU0ulbLhxTW+6z6D6Jn/yJ+z8/+FX3S4gAfvvVs7kIzzcfXy7gqpqMS3HKciWK3e/GAOeZ9KWbj5QTut91uXnxThi3EucToMhwBOQ+pVNVFzBCEKABCEKEHxiw78N/MJinwPvgHRwIPmFFIwgkHUZKBJIdD2QSM87041RTesH2G/6v1SQybrgRw+Y4hS4uCqc33XZjlyUIRbw+z6E/nanweK3Hcd068uaqoUIdGCn9Ya3eHDlXd6n1WdsvEWN06jTwV5CixMFr9Gp6kLDpICK5iyPlY81kKbBybsjHdzmn0ItLNXFoaLp2ZG0MP1Ur4/suIHh8J9KVcFbnTSKsVl8TGOPj2m/RoWSzCuOgSqWk2Pxd0iNMcn3SjeUwGqGlCRCgpIhLSWluRzGNShCfhm24XoMz4DNRulYFG3RZ3hEyz7x4fl5LLkeXGybKfipy9xPDhyCjAWXbdm3SVILSIQgQFPgsK+V4YxpLj8gNSeSmbhKgMzh7z+rj8W057vTLxJ7l13s+2bUbpyM5HbjD91gLnEeL2gf4Es58VY8IOTo5XaGztyGCUe7IHgn7zJHj5tA9FnL0PB7L6/Zpi+Jj5t38TZXn81564EGiKIyI7iNQhCV2ScaoWN9EHuIPotTGYAvt7MyG2WgagakeGWSyVt7M2mY3xO1yrxItpaeTga80zAq9mIrWGxArcf7p48Qe9avSvZIjcJos4pe03kTnR7v1WPhsMX5DWwB3Em6bfAmjXfSiaasjTTojmjLTWvceBHeEPicAHEdk6O1HhY48lIyVzCWubYB7THZePNp5hbeF2bJumbBvEjNJI3AFzeO5Iw5Ea9rLkUW6IlZz8UhaQRqFvQyhzQRx+XJRdThpTT7wkvc4Ewu9c2fTmq5w78O8CSt12j2kOa4faa4ZEIWFaNAFBXT7Ahw2JYcLM4MmbZw07Wudv3mYXgC3gagajtDKqODisDJHKYpGlrw4NIN8aoi86III5EJbHLXSRgfjGNP90313nlWIsO0CslhdJ8VvYmSj7pDR/hGfztZpx0hyLzXisssUpJbNkMyhaNrBbCfi8SY4eJsk6AcSuvl9k53Duznfri0bt/VVvZLteGKdzZCBvtAaT3jha9gx20Io2F7ngNAuyRSuVVt9FOR70j5jx+z3wSOikFOYaP6hC0+mG1WYjFySs90mge8DK0IwbcU2RpJmIglI5It6Zy2hCkL6B5ivmLUrY1DO2kJ/qSH7IhT3NoDmkjGYU+McKB7rVSXxbLZP5JFZT4HDGSRkY+JwF9w4uPICz5Lutl+zOaWUwOkDJH4NmJhy7L89wtJ5Hdvk4LA6E1HjmtlbThvsAcM2yDgQdDk4eJST0rHh8nRFtUP/AIHCe6GXNugWXE73ac46DM1uju1zodc3Y7IGxiPHOhc1me/I10e9lvXG40LLnad5XNbViL3CPerDsxTmR3QO7JIeteCdQ05Xw3m5ZlbWA6PRYh+5g8MZGiwZZXva0kfZawtsZHMkBVuLlot5VsTYPSRkBdFNukF5eJIjvt7QF2BnqCcr10WB0vigMpkgkDg7NwAcKPfZFfsc10WN2J/D779zCyCGaOCdvVvO4ZRvNdZkNgWG6nNx7iqe0NiyBgxQwToY3ah4bJC69CDrGDwsAZijnm34+MuQryXHjaOJTt7Ku45eev0C38NgYZD1Lv5Rcf5bz70Tz/ZS/bjJ912o81l7W2TLhn7kraJzBBtrh3tP7KNq6BxdWb3R3GjEQvwUupBdC4/a1czx+IcwVk7FmbG+WOWMvDm7m4OLmvGXePizGYNFZkchaQ5pIIIII1BBsEea6roZN120DKWtBLHvIAyDuy0uHdZJPLepK/imxl8mkRYyOaRjGT4Wi5xZHiHu3HfdZK7IF3C3AX6qOTZeMwBE4c1nDJwO9xLS34h/2u06Q7WjZcQY2aR4p0RosrvlOjay+XIin0W2BLNLG/e64CX+Hc89p2Gc2J0wELHmi0hu618lDeqrvNYOUl1oaajF9mDDipcW7cnMUG8MnviLQ83VM3uyT533WreH6GBrrbjIrNgjq2vsHL3XEg+i9pZ0CwHVuZLEZi8U6SVxe+yK3maNidzYGpMF0RwEuHYTBBIHsY/rGxRhryWN/mN7OQIojlSs4S9OivnG9qzzObYeKweGY+2YjCse2Sqc2WF10XMeO1GLFWHEAkGqJV3pUDiMdherp94eKRslAGTfe7qus3cgb3boV2idMh1mzejb8JijCx5fgZIXl0T3F7YnBzQ0N3rIDgXZfdce6uK6A4e8TFKw9hrnsa89olpD2MonWgQc8tMlTLV33/kti7qujgekexp8JiHw4ius94uaba8Ps77SQMib4DMFZZC9I9tzv/Jw4IG91LrI4jrXBv0J8yvNini7VjMc15ViTHyuG66V5HcXEj0VUBSBhUaTImxpQlIQoKPKanFNW1IwNkofkoZzaCmpZMMUhkQT5W2COWSQDVOtIuixn0U/aEZwOB2hC4PkwkLHOYCN6SF8TW4iKvt5BwH2owOK8e9oMV4luJa4B8461zm0G9ZYIcwDTKjzq9bK5dsjgKBNd1ml6Ps8ibZwJpwLG74I0dE5rXnwIYT+8qsj4tP0WYlyTXszISzFbM3WMG/AWlwHvAtdbntJ+00uPm4cF7JsLZTYIo46FtzJaN0E7pbpwABIpeI7EhOGmEkZtpJZLHdksvJzeYyNeI4r17Zm3xugSEkUKeO1Y4Ega+ItLGag6fTHnBzja7R51sCMTYrGYPEg/wDk9YHj4jNhJjK0AZZlm8vY27j2Ct1zHNy0LXNcMstCCCuW2r0WgxMpxMD2daa3szV7u7vW3Njt3snLMAc7gj2VLAzqpMYIY6yZFI9z6/8AraQK8dO8LXUWuTZkbd0kc30g6GdWTLERJD1jw0N7RjaHEGF/B7QQ5tHSqOetLbuxnymBhLa7TQHW4t7G+QXZl3uVeul8SuznxY6tkMTNyKMANaTbiAKBce/XvzN2s8tt4P2QfV1fOgf8y5uTN8/idLHh+FS9nEYr2fmrZML+zu0PIl36LM2dsrF4adxYy90Br+1uBzXAOLQ45A6G+GWosL0l+LYHbhdTjVA8b0z+Sc9tdoDPjzBq/PIelJVnl7GeCP8A1KnRro7gxfXNcGvDsjTQC7XfIJsizRuvkodi7DxmDlcRUsMkbonvjc/+Yxt/w8zXMadyVhqs8sxxtajCCLGicwkG2ktJ4tJafUZqzF5XHUlYmXxeW4ujUwrMfiouommeGPG7JIGCFzmkUQ2gDfMUO+9D2n8RGyo2C92mhrc9wDIA8G0OBz7rXI9HonyPJfJI5rRo6R5BLu8E0cr15LpAGtbwa1o5AAD6BWZPLUv1VFMfFcf2Zh9Oce4QOjZk+YFpcKtkQ/qOvwO6Ob74FZPQnZJbuabsI7tXFpFa51ZN+CY/rMbM50Ytlgbxvda1p7LSe+7cRrZrvrm/aN0wEDDs7CPO8LGImGov3o2n7RvtEaDs63WanJ0atRR3EfRPDbRxBxcw342sEUIvsua1zi6TnbnEDk0HisP2idAMNFh3SRN3QAfI19FL7JuncJwzcNMdx8LQAeDmjQ+K6Xae0osdeHbnH8Z7xyVraceK7KVyUrfR80xxWVeZhxS93m6A7O6ssEIBr3h73ja8W6S4E4XEPh3rDTke8HRM7ui3FOGzHmakTXOtCKRW9sHJlJ5SFdBI5TY2kbqkYFJuqONkU6K7IydE50JGoW/sTBNcLPetDaEEbY3b1aGvHhSVRoZzbRyHVre6KdIRhi6OUXC82eJYSKJri0gCx/0sVzlCRZUyY4yVMOPJKMrR6Jj9nAASRfzInC7HaocCDxHP1V7o7jQR1d3Vlhu8uLbPEa+HguG6P7elwpodqMm3Rk/Nh+F3yPzXb4PaOCxFOY9jZNdRHICOJHxfMLnZscoqntfZ0sOSEncXT+jacwE2QL76z9UrGAaADvoUoInHRzzf+Cnc2nd+Wo+Zk6kcc/Ekj0OSy7Wma1vaAyXk3Pn8I8+PgPknsbQ+p4k95Spr74V55/JAJDNgY3OD3Nsjma5WNCrCZuO4u9AB9bR1XeXH/ER/60FLIlXQPYLu90nurPyORKTtd7T5EfmU5sYGgHjx8ytno/s/fdvuHYZ83foNfRTsD0a+x8HJHEBbAT2nW0nM8PeGgoJm0Z4gD/ETNbE33y9zWMcf7sD4hxIJPAZ2ayOk/Sh4Y5mDLS+v6pzaPwD4j97QZe9w8s2hHvu3ngtk+IE3ZNkuY46gkkkagk+TRnHaT2iRwSk05aT9nWdMPaaAww7PaRlu9eRuho0/ksIu/vGq4A6ryVwzzzPEnUniStjEYU9yz5IlfjmvRM3juPQuDxLo3BzDRHzXUdH+nUkEluYCw+9WviFyJKYrXFMzXWj2if2kYfctr7NZDO78F5Tt3aTsTO6V3xHLwGiobhShRR3bdgdLpFuHC96ErcQhHYdFHeQSkKFuTOTJDg5StdeShDV1Xs4wLJcawSAEAFwB4kaJ0Vsfsno9jg3rI4XUe8ajwKx9sSykkSZUdKqj4L6WwsTWheIe17q24ymVZYC6u9RkRwNpzTSjtOYCSB3pEWND3PUDl7P7PvZdBLCJsWC7e91oJaB6KD2l+zXD4fDuxOFtnV0XMskFvEi9Cj3oC+zx+PI2Mj3jI5aHJdTsjplPHTZKmb9408D8fHzB8Vyy2ujWwJMVJutO6OLjwCrljjPTRZHLKG0z0DZvSXDTUBIGOPwP7JvuB0d5ErXXnGC2Bh5sWIIZjJG0F0khAAeGkAiPvFkDePMjIC++m2TX9B5ioABozjoAAdg5NyGoWPL4dfqzdj83/wBosoWRLisVH78TXcAWgkH0J+YC0MBsrHT5kGFvh1Z9XW4eICzfgndGn/c46uy090bP6rjdWImUZXDga+BvN2vC1XxG2nTNDQQyKso2Hskfedq/zy5Wup2D0XijcC4b5uyK7JPe683mzxy5LgukBbBjJ42NqMSEhv2d4Bxod1k5IeR4eWWJ/j7Xr7Q3jebiWVc+vT9Jk0rlm4yEEZgEdxzT3YjLVLGQcyVxcWOSejt5cySKhwLKzFrndsYQMdloV0eNnDdCue2lNvLo4FJS2c9zsxZGKMBWJFCV049GHIknaDfKRIlTlTYIQhEAwJwCaltakc6RLGFawWJfC9skbt1zTYKoh6UyEp+RVxO7l9qmL3NwMYHVW9n60uFx2MfM90kji5zjZJUBSJGy1RSBPhdRB4gg+hT4mWrIw+iKQJM9s9n/AE+h/h3NltgibvONZAcSsLpr7UYcTC+CHDyFrxRdIWsBHeACT60sPptLDhcNDgIAN5zWzYl/Ek5xxk+PbI/AuIViiuxF1RH1QUoea3Q40dRZojmNEiQJqQxPhZnNNtc5pqraS01xFjOsh6KxJtedmYnm8etfQ8c1ViGpVvBYV8zgyJheXEAAZ5nvPALBmfzdHTwR/wCFWdQOnbt0FuGG+Yg0vdI8U8XbgxuRadaJHAcM6m2+nOIxIjY2R8IYCHdW+Ru84mrc4Gy0ACrPE66mTaXQXFxytiZGZd5rTvCgATqHZ5AEHPuUm2OgWJgibI0dabcJWsF7hByIGrh+fjkr5MEVgTTVFmKZzWj+a80PeL3EnjZJKr4uN7XvbJe+HEOBzIIyo8/zWFg3zNkZHvPjO8CAbaRum7Ad4Lfx2L66WSX+8kkfXdvPca8tFZ4MGpu2Wf6plUscVGNIqBuZzI45c9cjlr9Upc8aEH5JXcD5ev8AzSctWTxMOTco7OZDyssFSejLxk7viBHj+uizpZV0qxNtYXdAe0VnTgMhrk7996yZPBWNXFmzH5rk6kjKe5R2glMJVSVFrlY60JqUFMKKhAKFCDUhKVNK1HPoGZlbWFwopYdq7HtEgUfVFMDRNtaFoAI1WWpsTiC5QoMMSWOSlK/Ek5BVaU0IzRV9EaLE8znkue4ucdSdTQofIV5Jqjee0OYIUiuTFEKRjwdClKaYh3fko7IdV7NYGP2hG17d4ObKK5hhcD/pXscuBbC9srG9lop413Wn4x+HXwvvXjPs4fW0sNzc9v8AmhkaPmQvfFRl7IRMHbcfus+r1X6w7u609p75AD3APdvO8hpzLRxVmIAdho0AocjYAHojZ+H3C6R/ac572xtHACR5ocybJPcB3KsKVl2DCM+JrbdwIFkCr8dR8l4ZtAjr5a0dJI4f5z+VL3iFm7bnZu49wA+FvL6r5+HaALhdi/Mq/wAftsk9JIJXDQkAnTv8hxTmlUm7Mja7faKIzok1ff3/AF8FeC1K/ZUwUMsQe1zTobHhlr6qZQiUAtbxeXEeGZv6eqjIjj3tIJB1Bo+I1TbWjt+Ddlvg8X5jI/kfNZq5UocW0dSEuUUxUqahKMOQhChBLSJSkWgwjSkpOKVFEG0lASpaRBYgCkiKZSV+Tb5hFfYGgxPA9xUzDkPAJpG8PFEOgViXysHoekCVIU4pYwOLdFIyVnvxva9v4mODhfKwvpvY20YsXBHPHm2RoPNp0c01xBBB5hfLq9D9kXSnqJv4SV1RTOHVknJkxyrkH5D8QHeVXkjasaLPaIYwJHUPhZ9XpmBh95xNnflA+6OtdkPPM9/kKkhdcjvws+r1Tx21I8NA+aQ5NdJQ4vcZH7rG8z8szoFm9lmqMf2h7c6iDqmOqWYEZatj0e7kT7o8SRovJ1a2ptCTESullNucfJoGjW9wA/XUlU3O9eC3Y4cIlEpWxDmeQ18eA/P0T0jRSVWIUbI+gSeAJ9Fj7Pn6ycng1hDfAUB5535q5tmSonfepvrr8gVR6Os7TzyA9T/wkk/kkMlqy1t+Deiviw35HI/vkuYWvt3H7x3Gnsg5n7RH5BZFrF5DTno2ePahsEIQqbNABKkQgQcm0lpKtBhEpKhCgaBCElprEaFT9221+8lEp2NpPDZHohhfXZOSnUGIe3Tj3qESkcVOfHQeN7LyFDHODrkfkplYmn0I1QIBQhEB7X7POnLJoX/xczWSwRgvc411kbL/AJvN2YBA40fipcFt3pVJjsW0klsLHSdTHpW9vHfeOLyD5DIcSeQrv/fNT4CQiRh+8B65fmkjBJ2FvR1LnUkaOJ1+nJKG/wDaVaCsEIVbFY+OP3nZ/ZGZ/wCPNRuiFHbludHG0WTZ/IHw95R4+UQxiJmpFud46+v0Cv4Dt3KRRdk0a00cPM2fRNbBF1hPvv1Nmw3uvgOXFV1exrrRjYbZrngud2WAE2ctASKHcstdTt6QiEgcaDj3An8zl6rllk8hJSSNeC2mwShIlCzmgVCEKBH0kITkLSYRqEpCRCg2IkTk1QArBZUk0laalEIT6ztXRj8RG9lFzSNUsbbNaK0WN7hn/wBps4puWWYSfjrY/O9FeVlGk6OYjmO5JM6zfIIezKxp+8il6eg9rZaZKCkbICTXD5qmpMOc/HJMsjbA4Ha7O6HF8Ye+RwLgCA0NIFj7xF/LxOq5zacBw8pjcbLaIcNCDoa1B4UdCCu12d01w3VgSl0b2gAt3HOBoatLQcvGlwvSLaQxGIfK0ENNBoOtAceepWHx83kPJJT6NGTHi4rj2dRBi2P914PK8/TVV8XtWNmQO8e4aeZXMRnIeCcur+R0Y+Gy7idqSPyvdHc3L1OqpBTYWHfdu1mQa8QLz9K81ewmBEsdt7L2muTshRPcUu2NpEjIsRI2t5rG6bt7tDmGi/IrSwOG6toaAOZs5nv0WdhsCxr90SvEg4DdbzrPI/NbIvjnz0+SsiiuRHi4N9jm/aBHnw+a4pd2uQ2vBuTPHAneH+LP636Kjyo9SL/GltoppQkShYjYOCEBCgSRCELQYhE1OTSmACQhKhBkCF+dHyU6pTK8FbjlehZL2RSat8fqiZthGI4fiClTdtoX6ZnKWCSsjoU7GDPyUCz/AKsu/ZEkzQDkf+FGChCDewomxA0cOKIWAijqn/2f771FHw/F+SsfdiLqi5h8G8tJaN4N1rXPl5FMIWzsD3nfhH1WniYGurea058QCruGtFfMzNg4Qg9YchVN53qfBXdlxbofzkfXgDQ+iuqLD6H8T/8A2KtUaEbsxMZEZMSWjlZ7gALK3wFlbI/qynn/ALitZCK9kkCwuk0PuP8AFp+o/wBy3VjdJvcZ+P8A2lJn/Rj4f3RzwSoQuadEUIQEKBP/2Q==",
    type: "TV Series",
    status: "completed",
    totalEpisodes: 150,
    releaseYear: null,
    genres: [
      "\u063A\u0645\u0648\u0636"
    ],
    title_en: "Detective Conan",
    title_jp: null,
    bannerImage: null,
    trailerUrl: null,
    rating: 9,
    isFeatured: true,
    isTrending: false,
    planet: "\u063A\u0645\u0648\u0636",
    studio: "Toei Animation",
    ageRating: "+16",
    audioLanguage: "dubbed",
    quality: "4K",
    createdAt: "2026-10-10T05:48:35.118Z",
    updatedAt: "2026-10-13T10:23:37.604Z",
    title_ar: "\u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646"
  }
];

// src/data/characters.json
var characters_default = [
  {
    id: "conan-edogawa",
    animeId: "conan",
    name: "Conan Edogawa",
    name_ar: "\u0643\u0648\u0646\u0627\u0646 \u0625\u064A\u062F\u0648\u063A\u0627\u0648\u0627",
    name_en: "Conan Edogawa",
    name_jp: "\u6C5F\u6238\u5DDD \u30B3\u30CA\u30F3",
    role: "\u0628\u0637\u0644 \u0631\u0626\u064A\u0633\u064A (\u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0639\u0628\u0642\u0631\u064A)",
    team: "\u0641\u0631\u064A\u0642 \u0627\u0644\u062A\u062D\u0631\u064A\u0627\u062A \u0627\u0644\u0635\u063A\u064A\u0631",
    position: "\u0645\u062D\u0642\u0642 \u0648\u0645\u0633\u062A\u0646\u062A\u062C",
    voiceActorJa: "\u0645\u064A\u0646\u0627\u0645\u064A \u062A\u0627\u0643\u0627\u064A\u0627\u0645\u0627 (Minami Takayama)",
    voiceActorAr: "\u0622\u0645\u0627\u0644 \u0633\u0639\u062F \u0627\u0644\u062F\u064A\u0646",
    description: "\u0633\u064A\u0646\u0634\u064A \u0643\u0648\u062F\u0648 \u0628\u0639\u062F \u0623\u0646 \u062A\u0642\u0644\u0635 \u062C\u0633\u062F\u0647 \u0628\u0641\u0639\u0644 \u0639\u0642\u0627\u0631 APTX 4869\u060C \u064A\u0639\u064A\u0634 \u0645\u062A\u0646\u0643\u0631\u0627\u064B \u0643\u0637\u0641\u0644 \u0641\u064A \u0645\u0646\u0632\u0644 \u062A\u0648\u063A\u0648 \u0645\u0648\u0631\u064A \u0644\u062D\u0644 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u063A\u0627\u0645\u0636\u0629 \u0648\u0645\u0637\u0627\u0631\u062F\u0629 \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0621 \u0648\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u062C\u0633\u062F\u0647 \u0627\u0644\u062D\u0642\u064A\u0642\u064A.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80"
  },
  {
    id: "shinichi-kudo",
    animeId: "conan",
    name: "Shinichi Kudo",
    name_ar: "\u0633\u064A\u0646\u0634\u064A \u0643\u0648\u062F\u0648",
    name_en: "Shinichi Kudo",
    name_jp: "\u5DE5\u85E4 \u65B0\u4E00",
    role: "\u0634\u0627\u0631\u0644\u0648\u0643 \u0647\u0648\u0644\u0645\u0632 \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u062D\u062F\u064A\u062B",
    team: "\u062B\u0627\u0646\u0648\u064A\u0629 \u062A\u064A\u062A\u0627\u0646",
    position: "\u0645\u062A\u062D\u0631\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629",
    voiceActorJa: "\u0643\u0627\u0628\u064A\u0647 \u064A\u0627\u0645\u0627\u063A\u0648\u062A\u0634\u064A (Kappei Yamaguchi)",
    voiceActorAr: "\u0632\u064A\u0627\u062F \u0627\u0644\u0631\u0641\u0627\u0639\u064A / \u0631\u0623\u0641\u062A \u0628\u0627\u0632\u0648",
    description: "\u0645\u062A\u062D\u0631\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0628\u0642\u0631\u064A \u0627\u0644\u0645\u0634\u0647\u0648\u0631 \u0628\u0630\u0643\u0627\u0626\u0647 \u0627\u0644\u062D\u0627\u062F \u0648\u0627\u0633\u062A\u0646\u062A\u0627\u062C\u0627\u062A\u0647 \u0627\u0644\u0645\u0630\u0647\u0644\u0629 \u0627\u0644\u062A\u064A \u062A\u0636\u0627\u0647\u064A \u0634\u0627\u0631\u0644\u0648\u0643 \u0647\u0648\u0644\u0645\u0632\u060C \u064A\u0633\u0639\u0649 \u062F\u0627\u0626\u0645\u0627\u064B \u0644\u0643\u0634\u0641 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0648\u0627\u062D\u062F\u0629.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
  },
  {
    id: "ran-mouri",
    animeId: "conan",
    name: "Ran Mouri",
    name_ar: "\u0631\u0627\u0646 \u0645\u0648\u0631\u064A",
    name_en: "Ran Mouri",
    name_jp: "\u6BDB\u5229 \u862D",
    role: "\u0628\u0637\u0644\u0629 \u0627\u0644\u0642\u0635\u0629 \u0648\u0643\u0627\u0628\u062A\u0646 \u0627\u0644\u0643\u0627\u0631\u0627\u062A\u064A\u0647",
    team: "\u0646\u0627\u062F\u064A \u0643\u0627\u0631\u0627\u062A\u064A\u0647 \u062B\u0627\u0646\u0648\u064A\u0629 \u062A\u064A\u062A\u0627\u0646",
    position: "\u0643\u0627\u0628\u062A\u0646 \u0641\u0631\u064A\u0642 \u0627\u0644\u0643\u0627\u0631\u0627\u062A\u064A\u0647",
    voiceActorJa: "\u0648\u0627\u0643\u0627\u0646\u0627 \u064A\u0627\u0645\u0627\u0632\u0627\u0643\u064A (Wakana Yamazaki)",
    voiceActorAr: "\u0633\u0645\u0631 \u0643\u0648\u0643\u0634",
    description: "\u0635\u062F\u064A\u0642\u0629 \u0637\u0641\u0648\u0644\u0629 \u0633\u064A\u0646\u0634\u064A \u0643\u0648\u062F\u0648 \u0648\u0627\u0628\u0646\u0629 \u062A\u0648\u063A\u0648 \u0645\u0648\u0631\u064A\u060C \u0628\u0637\u0644\u0629 \u0627\u0644\u0643\u0627\u0631\u0627\u062A\u064A\u0647 \u0641\u064A \u0645\u0646\u0637\u0642\u0629 \u0637\u0648\u0643\u064A\u0648 \u0630\u0627\u062A \u0627\u0644\u0642\u0644\u0628 \u0627\u0644\u0631\u0642\u064A\u0642 \u0648\u0627\u0644\u0634\u062C\u0627\u0639\u0629 \u0627\u0644\u0641\u0627\u0626\u0642\u0629 \u0641\u064A \u062D\u0645\u0627\u064A\u0629 \u0623\u0635\u062F\u0642\u0627\u0626\u0647\u0627.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80"
  },
  {
    id: "kogoro-mouri",
    animeId: "conan",
    name: "Kogoro Mouri",
    name_ar: "\u062A\u0648\u063A\u0648 \u0645\u0648\u0631\u064A",
    name_en: "Kogoro Mouri",
    name_jp: "\u6BDB\u5229 \u5C0F\u4E94\u90CE",
    role: "\u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0646\u0627\u0626\u0645 \u0627\u0644\u0634\u0647\u064A\u0631",
    team: "\u0648\u0643\u0627\u0644\u0629 \u0645\u0648\u0631\u064A \u0644\u0644\u062A\u062D\u0631\u064A\u0627\u062A",
    position: "\u0645\u062D\u0642\u0642 \u062E\u0627\u0635",
    voiceActorJa: "\u0623\u0643\u064A\u0631\u0627 \u0643\u0627\u0645\u064A\u0627 / \u0631\u064A\u0643\u064A\u0627 \u0643\u0648\u064A\u0627\u0645\u0627",
    voiceActorAr: "\u0645\u0631\u0648\u0627\u0646 \u0641\u0631\u062D\u0627\u062A",
    description: "\u0634\u0631\u0637\u064A \u0633\u0627\u0628\u0642 \u0648\u0645\u062D\u0642\u0642 \u062E\u0627\u0635 \u0641\u064A \u0637\u0648\u0643\u064A\u0648\u060C \u0627\u0634\u062A\u0647\u0631 \u0641\u064A \u0623\u0631\u062C\u0627\u0621 \u0627\u0644\u064A\u0627\u0628\u0627\u0646 \u0628\u0644\u0642\u0628 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0646\u0627\u0626\u0645 \u0628\u0641\u0636\u0644 \u062D\u0644\u0648\u0644 \u0643\u0648\u0646\u0627\u0646 \u0627\u0644\u0630\u0643\u064A\u0629 \u0644\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0639\u0642\u062F\u0629.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80"
  },
  {
    id: "ai-haibara",
    animeId: "conan",
    name: "Ai Haibara",
    name_ar: "\u0647\u064A\u0628\u0627\u0631\u0627 \u0622\u064A (\u0634\u064A\u0647\u0648 \u0645\u064A\u0627\u0646\u0648)",
    name_en: "Ai Haibara",
    name_jp: "\u7070\u539F \u54C0",
    role: "\u0639\u0627\u0644\u0645\u0629 \u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0621 \u0648\u0645\u0628\u062A\u0643\u0631\u0629 \u0627\u0644\u0639\u0642\u0627\u0631",
    team: "\u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0621 \u0633\u0627\u0628\u0642\u0627\u064B",
    position: "\u0639\u0627\u0644\u0645\u0629 \u0643\u064A\u0645\u064A\u0627\u0621 \u0648\u0623\u062F\u0648\u064A\u0629",
    voiceActorJa: "\u0645\u064A\u063A\u0648\u0645\u064A \u0647\u0627\u064A\u0627\u0634\u064A\u0628\u0627\u0631\u0627 (Megumi Hayashibara)",
    voiceActorAr: "\u0641\u0627\u062A\u0646 \u0639\u064A\u062F\u0648",
    description: "\u0627\u0644\u0639\u0627\u0644\u0645\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0621 \u0627\u0644\u0645\u0644\u0642\u0628\u0629 \u0628\u0640 \u0634\u064A\u0631\u064A\u060C \u0635\u0646\u0639\u062A \u0639\u0642\u0627\u0631 APTX 4869 \u062B\u0645 \u062A\u0646\u0627\u0648\u0644\u062A\u0647 \u0644\u0644\u0646\u062C\u0627\u0629 \u0628\u062D\u064A\u0627\u062A\u0647\u0627\u060C \u0648\u062A\u062A\u0639\u0627\u0648\u0646 \u0645\u0639 \u0643\u0648\u0646\u0627\u0646 \u0648\u0627\u0644\u0628\u0631\u0648\u0641\u064A\u0633\u0648\u0631 \u0623\u063A\u0627\u0633\u0627 \u0644\u0635\u0646\u0639 \u0627\u0644\u062A\u0631\u064A\u0627\u0642 \u0627\u0644\u0645\u0636\u0627\u062F.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&q=80"
  },
  {
    id: "hanamichi-sakuragi",
    animeId: "slam-dunk",
    name: "Hanamichi Sakuragi",
    name_ar: "\u062D\u0633\u0627\u0646 (\u0647\u0627\u0646\u0627\u0645\u064A\u062A\u0634\u064A \u0633\u0627\u0643\u0648\u0631\u0627\u062C\u064A)",
    name_en: "Hanamichi Sakuragi",
    name_jp: "\u685C\u6728 \u82B1\u9053",
    role: "\u0628\u0637\u0644 \u0627\u0644\u0642\u0635\u0629 \u0648\u0645\u0644\u0643 \u0627\u0644\u0645\u0631\u062A\u062F\u0627\u062A",
    team: "\u0641\u0631\u064A\u0642 \u0627\u0644\u0635\u0642\u0648\u0631 (Shohoku)",
    position: "\u0645\u0647\u0627\u062C\u0645 \u0642\u0648\u064A (Power Forward)",
    number: "10",
    height: "189.2 cm",
    weight: "83 kg",
    voiceActorJa: "\u062A\u0627\u0643\u064A\u0634\u064A \u0643\u0648\u0633\u0627\u0648 (Takeshi Kusao)",
    voiceActorAr: "\u0639\u0627\u062F\u0644 \u0623\u0628\u0648 \u062D\u0633\u0648\u0646",
    description: "\u0627\u0644\u0628\u0637\u0644 \u0627\u0644\u0645\u0628\u062A\u062F\u0626 \u0627\u0644\u0639\u0628\u0642\u0631\u064A \u0635\u0627\u062D\u0628 \u0627\u0644\u0634\u0639\u0631 \u0627\u0644\u0623\u062D\u0645\u0631 \u0648\u0627\u0644\u0639\u0632\u064A\u0645\u0629 \u0627\u0644\u0641\u0648\u0644\u0627\u0630\u064A\u0629\u060C \u0628\u062F\u0623 \u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629 \u0645\u0635\u0627\u062F\u0641\u0629 \u0644\u064A\u062A\u062D\u0648\u0644 \u0625\u0644\u0649 \u0633\u064A\u062F \u0627\u0644\u0643\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u062F\u0629 \u0648\u0633\u0644\u0627\u062D \u0627\u0644\u0635\u0642\u0648\u0631 \u0627\u0644\u062D\u0627\u0633\u0645.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARaixDwClMBk8VjPmR1Q2rUIzdPzwaLu2UN88LAaneAT68-Dt1lyWDu-0gkKtii62D2siPahcfHX4SFVz3C3ign3Ab0TRwZXQSb7CIPBeuWZDXQrKYufhHb07FXgObV8byTeeQEjhmD0JGOHPuJ6crdhM7akhITM1MepDnWa_wDBnvnNco4IYOGt659sF1WSCFyKDMcDNWPrC9fEF1R_xhCvvamv9DhG2ws40iHFKDLtDpbhs8NwJP"
  },
  {
    id: "kaede-rukawa",
    animeId: "slam-dunk",
    name: "Kaede Rukawa",
    name_ar: "\u0641\u0627\u062F\u064A (\u0643\u0627\u064A\u062F\u064A \u0631\u0648\u0643\u0627\u0648\u0627)",
    name_en: "Kaede Rukawa",
    name_jp: "\u6D41\u5DDD \u6953",
    role: "\u0627\u0644\u0647\u062F\u0651\u0627\u0641 \u0648\u0646\u062C\u0645 \u0627\u0644\u0641\u0631\u064A\u0642 \u0627\u0644\u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A",
    team: "\u0641\u0631\u064A\u0642 \u0627\u0644\u0635\u0642\u0648\u0631 (Shohoku)",
    position: "\u0645\u0647\u0627\u062C\u0645 \u0635\u063A\u064A\u0631 (Small Forward)",
    number: "11",
    height: "187 cm",
    weight: "75 kg",
    voiceActorJa: "\u0647\u064A\u0643\u0627\u0631\u0648 \u0645\u064A\u062F\u0648\u0631\u064A\u0643\u0627\u0648\u0627 (Hikaru Midorikawa)",
    voiceActorAr: "\u0631\u0623\u0641\u062A \u0628\u0627\u0632\u0648",
    description: "\u0627\u0644\u0646\u062C\u0645 \u0627\u0644\u0635\u0627\u0639\u062F \u0627\u0644\u0647\u0627\u062F\u0626 \u0648\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0647\u0627\u0631\u0629 \u0641\u064A \u0645\u0642\u0627\u0637\u0639\u0629 \u0643\u0627\u0646\u0627\u063A\u0627\u0648\u0627\u060C \u0643\u0631\u0651\u0633 \u062D\u064A\u0627\u062A\u0647 \u0644\u064A\u0643\u0648\u0646 \u0644\u0627\u0639\u0628 \u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629 \u0631\u0642\u0645 1 \u0641\u064A \u0627\u0644\u064A\u0627\u0628\u0627\u0646.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFCBkEUZo8xV4WIupmc5uNpKqdnyHvRtXxO9kMzYTpVkAux1wiez5BMTP4wHyZzuwwVZOg_wpgku3f7SnzUPb-4AGdqIsO36pWFPLcHgbVL64MitADw-y54oNHCZX-4R68Oz9JjSkUHPj2bxQcK1UB22KBS5LnDGWFtCTle9at7MijbCu1PebjShS7NLnq718Qqm3TY2AhyBuHK0i-Pu5wO9kEtxsnSQlwrIRAINlXkAbGKHpT3o3v"
  },
  {
    id: "takenori-akagi",
    animeId: "slam-dunk",
    name: "Takenori Akagi",
    name_ar: "\u0633\u0639\u062F (\u062A\u0627\u0643\u064A\u0646\u0648\u0631\u064A \u0623\u0643\u0627\u062C\u064A)",
    name_en: "Takenori Akagi",
    name_jp: "\u8D64\u6728 \u525B\u61B2",
    role: "\u0642\u0627\u0626\u062F \u0627\u0644\u0641\u0631\u064A\u0642 \u0648\u062D\u0627\u0645\u064A \u0639\u0631\u064A\u0646 \u0627\u0644\u0633\u0644\u0629",
    team: "\u0641\u0631\u064A\u0642 \u0627\u0644\u0635\u0642\u0648\u0631 (Shohoku)",
    position: "\u0644\u0627\u0639\u0628 \u0648\u0633\u0637 (Center)",
    number: "4",
    height: "197 cm",
    weight: "90 kg",
    voiceActorJa: "\u0643\u064A\u0648\u0643\u064A \u064A\u0627\u0646\u0627\u062F\u0627 (Kiyoyuki Yanada)",
    voiceActorAr: "\u0645\u0631\u0648\u0627\u0646 \u0641\u0631\u062D\u0627\u062A",
    description: "\u0642\u0627\u0626\u062F \u0641\u0631\u064A\u0642 \u0627\u0644\u0635\u0642\u0648\u0631 \u0627\u0644\u0645\u0644\u0642\u0628 \u0628\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627 \u0648\u0635\u062E\u0631\u0629 \u0627\u0644\u062F\u0641\u0627\u0639 \u0627\u0644\u0635\u0644\u0628\u0629\u060C \u0642\u0627\u062F \u0627\u0644\u0641\u0631\u064A\u0642 \u0628\u062D\u0632\u0645 \u0648\u0634\u063A\u0641 \u0644\u0627 \u064A\u0644\u064A\u0646 \u0644\u062A\u062D\u0642\u064A\u0642 \u062D\u0644\u0645 \u0627\u0644\u062A\u0623\u0647\u0644 \u0644\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmq2nceLUBxfoOJqYBIc68pDPpefSLxVY7M152CuX1IFOvAxGj2Rpzxp5F0gSr9Y-BCCe6usdJzndy7g6LaB-KJ-OxcCkIZlzk3STd-PC5P66C7xc8q6jnEjHoVG329FisGcXuAgmQrr3_GIOV33yYYRqCVtaAfyqBqZo5cPhodjoVnHmyLZe0S9_WXU_A9aFSXfY6j_doWh4QTJJsde1fCHFuQxJN7NBNo5kvNQnkZOAusJIra160"
  }
];

// src/routes/mobile.routes.ts
var mobileRoutes = new Hono3();
var fallbackEpMap = /* @__PURE__ */ new Map();
for (const ep of episodes_default) {
  fallbackEpMap.set(String(ep.id), ep);
  if (ep.episodeNumber) fallbackEpMap.set(String(ep.episodeNumber), ep);
  if (ep.episode_number) fallbackEpMap.set(String(ep.episode_number), ep);
}
function formatEpisode(ep, fallbackAnimeId) {
  const epIdStr = String(ep.id);
  const epNum = ep.episodeNumber || ep.episode_number || 1;
  const fallbackEp = fallbackEpMap.get(epIdStr) || fallbackEpMap.get(String(epNum));
  let servers = ep.servers && ep.servers.length > 0 ? ep.servers : [];
  if (servers.length === 0 && fallbackEp) {
    if (fallbackEp.servers && fallbackEp.servers.length > 0) {
      servers = fallbackEp.servers;
    } else if (fallbackEp.mega_link) {
      servers = [
        {
          id: `srv-mega-${epIdStr}`,
          name: "\u0633\u064A\u0631\u0641\u0631 \u0645\u064A\u062C\u0627 \u0627\u0644\u0633\u0631\u064A\u0639",
          url: fallbackEp.mega_link,
          quality: "1080p FHD"
        }
      ];
    }
  }
  return {
    id: epIdStr,
    animeId: ep.animeId || fallbackAnimeId || "slam-dunk",
    title: ep.title,
    description: ep.description || fallbackEp?.description || "",
    thumbnail: ep.thumbnail || fallbackEp?.thumbnail || "/logoep.jpg",
    duration: ep.duration || fallbackEp?.duration || "23:30",
    episodeNumber: Number(epNum),
    episode_number: Number(epNum),
    seasonNumber: Number(ep.seasonNumber || ep.season_number || 1),
    season_number: Number(ep.seasonNumber || ep.season_number || 1),
    introStart: ep.introStart ?? 0,
    introEnd: ep.introEnd ?? 90,
    outroStart: ep.outroStart ?? (ep.durationSeconds ? ep.durationSeconds - 90 : 1320),
    outroEnd: ep.outroEnd ?? (ep.durationSeconds || 1410),
    servers: servers.map((s, idx) => {
      const url = s.url || "";
      const lower = url.toLowerCase();
      let sType = s.type || "hls";
      if (lower.includes("mega.nz") || lower.includes("mega.io")) sType = "mega";
      else if (lower.includes(".m3u8")) sType = "hls";
      else if (lower.includes(".mp4")) sType = "mp4";
      else if (lower.includes("embed") || lower.includes("iframe") || lower.includes("ok.ru") || lower.includes("vidmoly")) sType = "embed";
      return {
        id: s.id || `srv-${Math.random().toString(36).substring(2, 7)}`,
        name: s.name,
        url: s.url,
        quality: s.quality || "1080p FHD",
        type: sType,
        priority: s.priority || idx + 1,
        isWorking: s.isWorking !== void 0 ? Boolean(s.isWorking) : true
      };
    }),
    createdAt: ep.createdAt ? typeof ep.createdAt === "string" ? ep.createdAt : ep.createdAt.toISOString() : (/* @__PURE__ */ new Date()).toISOString()
  };
}
mobileRoutes.get("/home", optionalAuthMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const [slider, latestDb, charactersDb, settings, progress] = await Promise.all([
      // 1. Featured Slider
      prisma.anime.findMany({
        where: { isFeatured: true },
        take: 5,
        orderBy: { rating: "desc" },
        select: {
          id: true,
          title: true,
          description: true,
          coverImage: true,
          bannerImage: true,
          rating: true,
          genres: true,
          type: true,
          status: true,
          totalEpisodes: true
        }
      }),
      // 2. Latest Episodes
      prisma.episode.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        include: {
          anime: { select: { id: true, title: true, coverImage: true } },
          servers: true
        }
      }),
      // 3. Shohoku Roster Characters
      prisma.character.findMany({
        take: 10,
        orderBy: { number: "asc" }
      }),
      // 4. Global Settings
      prisma.settings.findUnique({
        where: { id: "global" }
      }),
      // 5. User Continue Watching (if authenticated)
      user ? prisma.watchProgress.findMany({
        where: { userId: user.userId, completed: false },
        take: 10,
        orderBy: { updatedAt: "desc" }
      }) : Promise.resolve([])
    ]);
    const formattedLatest = (latestDb && latestDb.length > 0 ? latestDb : episodes_default.slice(0, 12)).map(
      (ep) => formatEpisode(ep)
    );
    return sendSuccess(c, {
      slider: slider && slider.length > 0 ? slider : animes_default.slice(0, 5),
      continueWatching: progress,
      latest: formattedLatest,
      latestEpisodes: formattedLatest,
      characters: charactersDb && charactersDb.length > 0 ? charactersDb : characters_default.slice(0, 10),
      settings: settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        admobEnabled: false
      }
    });
  } catch (error) {
    console.error("Mobile Home Error:", error);
    const staticLatest = episodes_default.slice(0, 12).map((ep) => formatEpisode(ep));
    return sendSuccess(c, {
      slider: animes_default.slice(0, 5),
      continueWatching: [],
      latest: staticLatest,
      latestEpisodes: staticLatest,
      characters: characters_default.slice(0, 10),
      settings: { siteName: "Slam Dunk", maintenanceMode: false, admobEnabled: false }
    });
  }
});
mobileRoutes.get("/animes/:id/episodes", async (c) => {
  const id = c.req.param("id");
  try {
    let episodes = await prisma.episode.findMany({
      where: { animeId: id },
      orderBy: { episodeNumber: "asc" },
      include: { servers: true }
    });
    if (!episodes || episodes.length === 0) {
      const filtered = episodes_default.filter(
        (ep) => ep.animeId === id || id === "slam-dunk"
      );
      episodes = filtered;
    }
    const formatted = episodes.map((ep) => formatEpisode(ep, id));
    return sendSuccess(c, formatted);
  } catch (error) {
    console.warn("Mobile Anime Episodes Error, using fallback:", error.message);
    const filtered = episodes_default.filter(
      (ep) => ep.animeId === id || id === "slam-dunk"
    );
    const formatted = filtered.map((ep) => formatEpisode(ep, id));
    return sendSuccess(c, formatted);
  }
});
mobileRoutes.get("/animes", async (c) => {
  try {
    const type = c.req.query("type");
    const status = c.req.query("status");
    const genre = c.req.query("genre");
    const where = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (genre) where.genres = { has: genre };
    let animes = await prisma.anime.findMany({
      where,
      orderBy: { updatedAt: "desc" }
    });
    if (!animes || animes.length === 0) {
      let filtered = animes_default;
      if (type) filtered = filtered.filter((a) => a.type === type);
      if (status) filtered = filtered.filter((a) => a.status === status);
      if (genre) filtered = filtered.filter((a) => a.genres?.includes(genre));
      animes = filtered;
    }
    return sendSuccess(c, animes);
  } catch (error) {
    return sendSuccess(c, animes_default);
  }
});
mobileRoutes.get("/animes/:id", async (c) => {
  const id = c.req.param("id");
  try {
    let anime = await prisma.anime.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: "asc" },
          include: { servers: true }
        }
      }
    });
    if (!anime) {
      const found = animes_default.find((a) => a.id === id);
      if (found) {
        anime = {
          ...found,
          episodes: episodes_default.filter((ep) => ep.animeId === id || id === "slam-dunk").map((ep) => formatEpisode(ep, id))
        };
      }
    } else if (anime.episodes) {
      anime.episodes = anime.episodes.map((ep) => formatEpisode(ep, id));
    }
    if (!anime) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0623\u0646\u0645\u064A \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
    }
    return sendSuccess(c, anime);
  } catch (error) {
    const found = animes_default.find((a) => a.id === id);
    if (found) {
      return sendSuccess(c, {
        ...found,
        episodes: episodes_default.filter((ep) => ep.animeId === id || id === "slam-dunk").map((ep) => formatEpisode(ep, id))
      });
    }
    return sendError(c, "FETCH_ERROR", "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644", 500);
  }
});
mobileRoutes.get("/episodes/:id", async (c) => {
  const id = c.req.param("id");
  try {
    let episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        servers: true,
        anime: { select: { id: true, title: true, coverImage: true } }
      }
    });
    if (!episode && !isNaN(Number(id))) {
      episode = await prisma.episode.findFirst({
        where: { episodeNumber: Number(id) },
        include: {
          servers: true,
          anime: { select: { id: true, title: true, coverImage: true } }
        }
      });
    }
    if (!episode) {
      const fallback = fallbackEpMap.get(id);
      if (fallback) {
        return sendSuccess(c, formatEpisode(fallback));
      }
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u062D\u0644\u0642\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
    }
    const formatted = formatEpisode(episode);
    return sendSuccess(c, {
      ...formatted,
      animeTitle: episode.anime?.title || "\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643",
      animeCover: episode.anime?.coverImage || "/hero-bg.jpg"
    });
  } catch (error) {
    const fallback = fallbackEpMap.get(id);
    if (fallback) {
      return sendSuccess(c, formatEpisode(fallback));
    }
    return sendError(c, "FETCH_ERROR", "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0644\u0642\u0629", 500);
  }
});
mobileRoutes.get("/characters", async (c) => {
  try {
    const animeId = c.req.query("animeId");
    const where = animeId && animeId !== "all" ? { animeId } : {};
    let characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" }
    });
    if (!characters || characters.length === 0) {
      let filtered = characters_default;
      if (animeId && animeId !== "all") {
        filtered = filtered.filter(
          (char) => char.animeId?.toLowerCase() === animeId.toLowerCase()
        );
      }
      characters = filtered;
    }
    return sendSuccess(c, characters);
  } catch (error) {
    return sendSuccess(c, characters_default);
  }
});
mobileRoutes.get("/search", async (c) => {
  try {
    const q = c.req.query("q")?.trim() || "";
    if (!q) {
      return sendSuccess(c, { animes: [], episodes: [] });
    }
    const [animeResults, episodeResults] = await Promise.all([
      prisma.anime.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } }
          ]
        },
        take: 10
      }),
      prisma.episode.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } }
          ]
        },
        include: { servers: true },
        take: 20
      })
    ]);
    let animes = animeResults;
    let episodes = episodeResults;
    if (animes.length === 0 && episodes.length === 0) {
      const lower = q.toLowerCase();
      animes = animes_default.filter(
        (a) => a.title?.toLowerCase().includes(lower) || a.description?.toLowerCase().includes(lower)
      );
      episodes = episodes_default.filter(
        (ep) => ep.title?.toLowerCase().includes(lower) || ep.description?.toLowerCase().includes(lower)
      ).slice(0, 20);
    }
    return sendSuccess(c, {
      animes,
      episodes: episodes.map((ep) => formatEpisode(ep))
    });
  } catch (error) {
    return sendSuccess(c, { animes: [], episodes: [] });
  }
});
mobileRoutes.get("/config", async (c) => {
  try {
    const settings = await prisma.settings.findUnique({
      where: { id: "global" }
    });
    return sendSuccess(
      c,
      settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        latestVersion: "1.0.0",
        updateUrl: "https://slam-dunk-w.vercel.app/download",
        admobEnabled: false
      }
    );
  } catch (error) {
    return sendError(c, "CONFIG_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642", 500);
  }
});
mobileRoutes.get("/plans", async (c) => {
  try {
    const plans = await prisma.plan.findMany({
      where: { isActive: true },
      orderBy: { price: "asc" }
    });
    return sendSuccess(c, plans);
  } catch (error) {
    return sendError(c, "PLANS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643", 500);
  }
});
mobileRoutes.post("/plans", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const { planId } = await c.req.json();
    const plan = await prisma.plan.findUnique({
      where: { id: planId }
    });
    if (!plan) {
      return sendError(c, "PLAN_NOT_FOUND", "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
    }
    const sub = await prisma.userSubscription.upsert({
      where: { userId: user.userId },
      update: {
        planType: plan.name,
        isActive: true,
        startDate: /* @__PURE__ */ new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
      },
      create: {
        userId: user.userId,
        planType: plan.name,
        isActive: true,
        startDate: /* @__PURE__ */ new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
      }
    });
    return sendSuccess(c, sub);
  } catch (error) {
    return sendError(c, "SUB_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643", 500);
  }
});
mobileRoutes.get("/health", (c) => {
  return sendSuccess(c, {
    status: "ok",
    service: "Mobile V1 API",
    version: "2.5.0",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message2;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message2 = "Required";
      } else {
        message2 = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message2 = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message2 = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message2 = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message2 = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message2 = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message2 = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message2 = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message2 = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message2 = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message2 = `${message2} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message2 = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message2 = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message2 = `Invalid ${issue.validation}`;
      } else {
        message2 = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message2 = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message2 = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message2 = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message2 = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message2 = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message2 = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message2 = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message2 = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message2 = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message2 = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message2 = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message2 = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message2 = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message2 = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message2 = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message2 = "Number must be finite";
      break;
    default:
      message2 = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message: message2 };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message2) => typeof message2 === "string" ? { message: message2 } : message2 || {};
  errorUtil2.toString = (message2) => typeof message2 === "string" ? message2 : message2?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message: message2 } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message2 ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message2 ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message2 ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message2) {
    const getIssueProperties = (val) => {
      if (typeof message2 === "string" || typeof message2 === "undefined") {
        return { message: message2 };
      } else if (typeof message2 === "function") {
        return message2(val);
      } else {
        return message2;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message2) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message2)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message2) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message2) });
  }
  url(message2) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message2) });
  }
  emoji(message2) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message2) });
  }
  uuid(message2) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message2) });
  }
  nanoid(message2) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message2) });
  }
  cuid(message2) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message2) });
  }
  cuid2(message2) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message2) });
  }
  ulid(message2) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message2) });
  }
  base64(message2) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message2) });
  }
  base64url(message2) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message2)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message2) {
    return this._addCheck({ kind: "date", message: message2 });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message2) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message2) });
  }
  regex(regex, message2) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message2)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message2) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message2)
    });
  }
  endsWith(value, message2) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message2)
    });
  }
  min(minLength, message2) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message2)
    });
  }
  max(maxLength, message2) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message2)
    });
  }
  length(len, message2) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message2)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message2) {
    return this.min(1, errorUtil.errToObj(message2));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message2) {
    return this.setLimit("min", value, true, errorUtil.toString(message2));
  }
  gt(value, message2) {
    return this.setLimit("min", value, false, errorUtil.toString(message2));
  }
  lte(value, message2) {
    return this.setLimit("max", value, true, errorUtil.toString(message2));
  }
  lt(value, message2) {
    return this.setLimit("max", value, false, errorUtil.toString(message2));
  }
  setLimit(kind, value, inclusive, message2) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message2)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message2) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message2)
    });
  }
  positive(message2) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message2)
    });
  }
  negative(message2) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message2)
    });
  }
  nonpositive(message2) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message2)
    });
  }
  nonnegative(message2) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message2)
    });
  }
  multipleOf(value, message2) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message2)
    });
  }
  finite(message2) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message2)
    });
  }
  safe(message2) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message2)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message2)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message2) {
    return this.setLimit("min", value, true, errorUtil.toString(message2));
  }
  gt(value, message2) {
    return this.setLimit("min", value, false, errorUtil.toString(message2));
  }
  lte(value, message2) {
    return this.setLimit("max", value, true, errorUtil.toString(message2));
  }
  lt(value, message2) {
    return this.setLimit("max", value, false, errorUtil.toString(message2));
  }
  setLimit(kind, value, inclusive, message2) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message2)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message2) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message2)
    });
  }
  negative(message2) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message2)
    });
  }
  nonpositive(message2) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message2)
    });
  }
  nonnegative(message2) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message2)
    });
  }
  multipleOf(value, message2) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message2)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message2) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message2)
    });
  }
  max(maxDate, message2) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message2)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message2) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message2) }
    });
  }
  max(maxLength, message2) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message2) }
    });
  }
  length(len, message2) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message2) }
    });
  }
  nonempty(message2) {
    return this.min(1, message2);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message2) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message2 !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message2).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message2) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message2) }
    });
  }
  max(maxSize, message2) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message2) }
    });
  }
  size(size, message2) {
    return this.min(size, message2).max(size, message2);
  }
  nonempty(message2) {
    return this.min(1, message2);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/routes/admin.routes.ts
var adminRoutes = new Hono3();
adminRoutes.use("*", adminOnlyMiddleware);
adminRoutes.get("/stats", async (c) => {
  try {
    const [usersCount, animesCount, episodesCount, commentsCount, reportsCount] = await Promise.all([
      prisma.user.count(),
      prisma.anime.count(),
      prisma.episode.count(),
      prisma.comment.count(),
      prisma.report.count({ where: { status: "pending" } })
    ]);
    return sendSuccess(c, {
      totalUsers: usersCount,
      totalAnimes: animesCount,
      totalEpisodes: episodesCount,
      totalComments: commentsCount,
      pendingReports: reportsCount
    });
  } catch (error) {
    return sendError(c, "STATS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645", 500);
  }
});
adminRoutes.get("/users", async (c) => {
  try {
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;
    const [total, users] = await Promise.all([
      prisma.user.count(),
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          subscription: true
        }
      })
    ]);
    return sendSuccess(c, users, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return sendError(c, "USERS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646", 500);
  }
});
adminRoutes.get("/servers", async (c) => {
  try {
    const episodeId = c.req.query("episodeId");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 episodeId \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const servers = await prisma.server.findMany({
      where: { episodeId },
      orderBy: [{ priority: "asc" }, { isWorking: "desc" }]
    });
    return sendSuccess(c, servers);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0633\u064A\u0631\u0641\u0631\u0627\u062A \u0627\u0644\u062D\u0644\u0642\u0629", 500);
  }
});
var serverSchema = external_exports.object({
  episodeId: external_exports.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628"),
  name: external_exports.string().min(1, "\u0627\u0633\u0645 \u0627\u0644\u0633\u064A\u0631\u0641\u0631 \u0645\u0637\u0644\u0648\u0628"),
  url: external_exports.string().url("\u0631\u0627\u0628\u0637 \u0627\u0644\u0633\u064A\u0631\u0641\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0627\u0628\u0637\u0627\u064B \u0635\u0627\u0644\u062D\u0627\u064B"),
  type: external_exports.enum(["hls", "mp4", "embed", "mega"]).default("hls"),
  quality: external_exports.string().optional().default("1080p FHD"),
  priority: external_exports.number().int().min(1).default(1),
  isWorking: external_exports.boolean().default(true)
});
adminRoutes.post("/servers", async (c) => {
  try {
    const body = await c.req.json();
    const parsed = serverSchema.safeParse(body);
    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u064A\u0631\u0641\u0631 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629", 400);
    }
    const server = await prisma.server.create({
      data: parsed.data
    });
    return sendSuccess(c, server, void 0, 201);
  } catch (error) {
    return sendError(c, "CREATE_SERVER_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0633\u064A\u0631\u0641\u0631", 500);
  }
});
adminRoutes.put("/servers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const updated = await prisma.server.update({
      where: { id },
      data: {
        name: body.name,
        url: body.url,
        type: body.type,
        quality: body.quality,
        priority: body.priority !== void 0 ? Number(body.priority) : void 0,
        isWorking: body.isWorking !== void 0 ? Boolean(body.isWorking) : void 0,
        lastCheckedAt: /* @__PURE__ */ new Date()
      }
    });
    return sendSuccess(c, updated);
  } catch (error) {
    return sendError(c, "UPDATE_SERVER_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u064A\u0631\u0641\u0631", 500);
  }
});
adminRoutes.delete("/servers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.server.delete({
      where: { id }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0633\u064A\u0631\u0641\u0631 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    return sendError(c, "DELETE_SERVER_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u0633\u064A\u0631\u0641\u0631", 500);
  }
});
adminRoutes.patch("/episodes/:id/timecodes", async (c) => {
  try {
    const id = c.req.param("id");
    const { introStart, introEnd, outroStart, outroEnd, durationSeconds } = await c.req.json();
    const updated = await prisma.episode.update({
      where: { id },
      data: {
        introStart: introStart !== void 0 ? Number(introStart) : void 0,
        introEnd: introEnd !== void 0 ? Number(introEnd) : void 0,
        outroStart: outroStart !== void 0 ? Number(outroStart) : void 0,
        outroEnd: outroEnd !== void 0 ? Number(outroEnd) : void 0,
        durationSeconds: durationSeconds !== void 0 ? Number(durationSeconds) : void 0
      },
      select: {
        id: true,
        title: true,
        episodeNumber: true,
        introStart: true,
        introEnd: true,
        outroStart: true,
        outroEnd: true,
        durationSeconds: true
      }
    });
    return sendSuccess(c, {
      episode: updated,
      message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062A\u0648\u0642\u064A\u062A\u0627\u062A \u062A\u062E\u0637\u064A \u0627\u0644\u0634\u0627\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    return sendError(c, "TIMECODE_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u062A\u0648\u0642\u064A\u062A\u0627\u062A \u0627\u0644\u0634\u0627\u0631\u0627\u062A", 500);
  }
});
adminRoutes.post("/settings", async (c) => {
  try {
    const body = await c.req.json();
    const safeData = {};
    if (typeof body.siteName === "string") safeData.siteName = body.siteName;
    if (typeof body.logoUrl === "string") safeData.logoUrl = body.logoUrl;
    if (typeof body.faviconUrl === "string") safeData.faviconUrl = body.faviconUrl;
    if (typeof body.maintenanceMode === "boolean") safeData.maintenanceMode = body.maintenanceMode;
    if (typeof body.maintenanceMessage === "string") safeData.maintenanceMessage = body.maintenanceMessage;
    if (typeof body.latestVersion === "string") safeData.latestVersion = body.latestVersion;
    if (typeof body.updateUrl === "string") safeData.updateUrl = body.updateUrl;
    if (typeof body.admobEnabled === "boolean") safeData.admobEnabled = body.admobEnabled;
    if (typeof body.admobAppId === "string") safeData.admobAppId = body.admobAppId;
    if (typeof body.admobBannerId === "string") safeData.admobBannerId = body.admobBannerId;
    if (typeof body.admobInterstitialId === "string") safeData.admobInterstitialId = body.admobInterstitialId;
    const updated = await prisma.settings.upsert({
      where: { id: "global" },
      update: safeData,
      create: {
        id: "global",
        ...safeData
      }
    });
    return sendSuccess(c, updated);
  } catch (error) {
    return sendError(c, "SETTINGS_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A", 500);
  }
});

// src/lib/planets-presets.ts
var DEFAULT_PLANETS_SETTINGS = {
  displayMode: "hybrid",
  soundEffectsEnabled: true,
  autoRotate3D: true,
  homeStyle: "compact_grid"
};
var DEFAULT_ADMIN_PLANETS = [
  {
    id: "sports",
    name: "\u0643\u0648\u0643\u0628 \u0631\u064A\u0627\u0636\u0629",
    arabicGenre: "\u0631\u064A\u0627\u0636\u0629",
    genreKey: "Sports",
    badge: "\u{1F3C0}",
    icon: "sports_basketball",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u062A\u062D\u062F\u064A \u0648\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 \u0627\u0644\u0634\u0631\u064A\u0641\u0629",
    description: "\u0645\u0648\u0637\u0646 \u0627\u0644\u0631\u0645\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0645\u0629\u060C \u0627\u0644\u0647\u062A\u0627\u0641\u0627\u062A \u0627\u0644\u062C\u0645\u0627\u0647\u064A\u0631\u064A\u0629\u060C \u0648\u0627\u0644\u0631\u0648\u062D \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0627\u0644\u062E\u0627\u0644\u062F\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062D\u064A\u0644.",
    anthemSnippet: "\u0641\u064A \u0643\u0644 \u0631\u0643\u0644\u0629\u060C \u0641\u064A \u0643\u0644 \u0631\u0645\u064A\u0629\u060C \u0628\u0627\u0644\u0639\u0632\u0645 \u0648\u0627\u0644\u0625\u0635\u0631\u0627\u0631 \u0646\u062D\u0642\u0642 \u0627\u0644\u0646\u0635\u0631!",
    flagshipWorks: ["\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643", "\u0643\u0627\u0628\u062A\u0646 \u0645\u0627\u062C\u062F", "\u0628\u064A \u0628\u0644\u064A\u062F", "\u0634\u0628\u062D \u0628\u064A\u0646 \u0627\u0644\u0645\u0644\u0627\u0639\u0628"],
    color: "#dc2626",
    bgClass: "bg-red-500/15 border-red-500/30 text-red-400",
    glowColor: "rgba(220, 38, 38, 0.4)",
    isEnabled: true,
    order: 1,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(239, 68, 68, 0.8)",
      ringTilt: 25,
      textureStyle: "sports",
      rotationSpeed: 1.2,
      atmosphereGlow: "#ef4444",
      scale: 1.05
    }
  },
  {
    id: "action",
    name: "\u0643\u0648\u0643\u0628 \u0623\u0643\u0634\u0646",
    arabicGenre: "\u0623\u0643\u0634\u0646",
    genreKey: "Action",
    badge: "\u2694\uFE0F",
    icon: "swords",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u0634\u062C\u0627\u0639\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0643 \u0627\u0644\u0645\u0635\u064A\u0631\u064A\u0629",
    description: "\u0635\u0631\u062E\u0627\u062A \u0627\u0644\u0642\u062A\u0627\u0644\u060C \u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0646\u064A\u0646\u062C\u0627 \u0648\u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062E\u0627\u0631\u0642\u064A\u0646 \u0641\u064A \u0645\u0648\u0627\u062C\u0647\u0629 \u0642\u0648\u0649 \u0627\u0644\u0638\u0644\u0627\u0645 \u0644\u0625\u0646\u0642\u0627\u0630 \u0627\u0644\u0643\u0648\u0646.",
    anthemSnippet: "\u0643\u0627\u0644\u0628\u0631\u0642 \u0641\u064A \u0627\u0644\u0633\u0645\u0627\u0621\u060C \u0643\u0627\u0644\u0633\u064A\u0644 \u062D\u064A\u0646 \u064A\u0646\u0647\u0645\u0631\u060C \u0644\u0627 \u064A\u0646\u062D\u0646\u064A \u0627\u0644\u0641\u0627\u0631\u0633 \u0627\u0644\u062D\u0642 \u0648\u0644\u0627 \u064A\u0646\u0643\u0633\u0631!",
    flagshipWorks: ["\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062F\u064A\u062C\u064A\u062A\u0627\u0644", "\u0633\u064A\u0641 \u0627\u0644\u0646\u0627\u0631", "\u062F\u0631\u0627\u063A\u0648\u0646 \u0628\u0648\u0644", "\u0623\u062C\u0646\u062D\u0629 \u0643\u0627\u0646\u062F\u0627\u0645"],
    color: "#ea580c",
    bgClass: "bg-orange-500/15 border-orange-500/30 text-orange-400",
    glowColor: "rgba(234, 88, 12, 0.4)",
    isEnabled: true,
    order: 2,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(234, 88, 12, 0.85)",
      ringTilt: 35,
      textureStyle: "action",
      rotationSpeed: 1.4,
      atmosphereGlow: "#ea580c",
      scale: 1.15
    }
  },
  {
    id: "adventure",
    name: "\u0643\u0648\u0643\u0628 \u0645\u063A\u0627\u0645\u0631\u0627\u062A",
    arabicGenre: "\u0645\u063A\u0627\u0645\u0631\u0627\u062A",
    genreKey: "Adventure",
    badge: "\u{1F680}",
    icon: "explore",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u062E\u064A\u0627\u0644 \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641\u064A\u0629 \u0627\u0644\u0643\u0628\u0631\u0649",
    description: "\u0639\u0648\u0627\u0644\u0645 \u0627\u0644\u062E\u064A\u0627\u0644 \u0627\u0644\u0641\u0633\u064A\u062D\u0629\u060C \u0627\u0644\u062C\u0632\u0631 \u0627\u0644\u063A\u0627\u0645\u0636\u0629\u060C \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0623\u0633\u0637\u0648\u0631\u064A\u0629 \u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0643\u0646\u0648\u0632 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0635\u062F\u0627\u0642\u0629.",
    anthemSnippet: "\u0645\u0647\u0645\u0627 \u0637\u0627\u0644 \u0627\u0644\u0637\u0631\u064A\u0642 \u0648\u0635\u0639\u0628 \u0627\u0644\u0645\u0633\u064A\u0631\u060C \u062E\u0644\u0641 \u0627\u0644\u0623\u0641\u0642 \u064A\u0646\u062A\u0638\u0631\u0646\u0627 \u0627\u0644\u0645\u062C\u062F \u0627\u0644\u0643\u0628\u064A\u0631!",
    flagshipWorks: ["\u062F\u0627\u064A \u0627\u0644\u0634\u062C\u0627\u0639", "\u0627\u0644\u0642\u0646\u0627\u0635", "\u0647\u0632\u064A\u0645 \u0627\u0644\u0631\u0639\u062F", "\u0639\u0647\u062F \u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621"],
    color: "#f59e0b",
    bgClass: "bg-amber-500/15 border-amber-500/30 text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.4)",
    isEnabled: true,
    order: 3,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(245, 158, 11, 0.75)",
      ringTilt: 20,
      textureStyle: "adventure",
      rotationSpeed: 1,
      atmosphereGlow: "#f59e0b",
      scale: 1.1
    }
  },
  {
    id: "comedy",
    name: "\u0643\u0648\u0643\u0628 \u0643\u0648\u0645\u064A\u062F\u064A\u0627",
    arabicGenre: "\u0643\u0648\u0645\u064A\u062F\u064A\u0627",
    genreKey: "Comedy",
    badge: "\u{1F604}",
    icon: "sentiment_very_satisfied",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0636\u062D\u0643 \u0648\u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u0637\u0631\u0627\u0626\u0641 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629",
    description: "\u0645\u0648\u0627\u0642\u0641 \u064A\u0648\u0645\u064A\u0629 \u0637\u0631\u064A\u0641\u0629 \u0648\u0634\u062E\u0635\u064A\u0627\u062A \u063A\u0631\u064A\u0628\u0629 \u0627\u0644\u0623\u0637\u0648\u0627\u0631 \u0644\u062C\u0631\u0639\u0627\u062A \u0644\u0627 \u062A\u062A\u0648\u0642\u0641 \u0645\u0646 \u0627\u0644\u0636\u062D\u0643 \u0648\u0627\u0644\u0628\u0647\u062C\u0629.",
    anthemSnippet: "\u0627\u0628\u062A\u0633\u0645 \u0644\u0644\u062D\u064A\u0627\u0629 \u062A\u0628\u062A\u0633\u0645 \u0644\u0643\u060C \u0648\u0627\u0635\u0646\u0639 \u0645\u0646 \u0643\u0644 \u0639\u062B\u0631\u0629 \u0637\u0631\u0641\u0629 \u0648\u0636\u062D\u0643\u0629!",
    flagshipWorks: ["\u0627\u0644\u0642\u0646\u0627\u0639 \u0627\u0644\u0623\u062E\u0636\u0631", "\u062A\u0627\u0645\u0627 \u0648\u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621", "\u0627\u0644\u0636\u0627\u062D\u0643\u0648\u0646", "\u0645\u0633\u062A\u0631 \u0628\u064A\u0646"],
    color: "#10b981",
    bgClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    isEnabled: true,
    order: 4,
    threeDConfig: {
      hasRings: false,
      ringColor: "rgba(16, 185, 129, 0.6)",
      ringTilt: 15,
      textureStyle: "comedy",
      rotationSpeed: 1.3,
      atmosphereGlow: "#10b981",
      scale: 0.96
    }
  },
  {
    id: "emerald",
    name: "\u0643\u0648\u0643\u0628 \u0632\u0645\u0631\u062F\u0629",
    arabicGenre: "\u0632\u0645\u0631\u062F\u0629",
    genreKey: "Drama",
    badge: "\u{1F48E}",
    icon: "diamond",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0641\u062A\u064A\u0627\u062A \u0648\u0627\u0644\u0631\u0642\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u0646\u0628\u064A\u0644\u0629",
    description: "\u0642\u0635\u0635 \u0627\u0644\u0643\u0641\u0627\u062D \u0648\u0627\u0644\u0623\u0645\u0644\u060C \u0627\u0644\u0635\u062F\u0627\u0642\u0629 \u0627\u0644\u0635\u0627\u062F\u0642\u0629\u060C \u0648\u0631\u0642\u0629 \u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u062A\u064A \u062A\u0628\u0646\u064A \u062C\u0633\u0648\u0631\u0627\u064B \u0645\u0646 \u0627\u0644\u0646\u0648\u0631 \u0641\u064A \u0623\u0635\u0639\u0628 \u0627\u0644\u0638\u0631\u0648\u0641.",
    anthemSnippet: "\u0643\u0627\u0644\u0632\u0647\u0631\u0629 \u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D \u062A\u0646\u0634\u0631 \u0639\u0637\u0631 \u0627\u0644\u0623\u0645\u0644\u060C \u0648\u0627\u0644\u0642\u0644\u0628 \u0627\u0644\u0635\u0627\u0641\u064A \u064A\u0647\u0632\u0645 \u0623\u0635\u0639\u0628 \u0627\u0644\u0645\u062D\u0646!",
    flagshipWorks: ["\u062F\u0631\u0648\u0628 \u0631\u064A\u0645\u064A", "\u0633\u0627\u0644\u064A", "\u0644\u064A\u062F\u064A \u0623\u0648\u0633\u0643\u0627\u0631", "\u0633\u0646\u062F\u0631\u064A\u0644\u0627"],
    color: "#ec4899",
    bgClass: "bg-pink-500/15 border-pink-500/30 text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.4)",
    isEnabled: true,
    order: 5,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(236, 72, 153, 0.8)",
      ringTilt: -25,
      textureStyle: "emerald",
      rotationSpeed: 0.85,
      atmosphereGlow: "#ec4899",
      scale: 1.02
    }
  },
  {
    id: "mystery",
    name: "\u0643\u0648\u0643\u0628 \u063A\u0645\u0648\u0636",
    arabicGenre: "\u063A\u0645\u0648\u0636",
    genreKey: "Mystery",
    badge: "\u{1F50D}",
    icon: "search",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0623\u0644\u063A\u0627\u0632 \u0648\u0627\u0644\u062A\u062D\u0642\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u062D\u0627\u062F",
    description: "\u062E\u064A\u0648\u0637 \u0627\u0644\u062C\u0631\u0627\u0626\u0645 \u0627\u0644\u0645\u0639\u0642\u062F\u0629\u060C \u0641\u0643 \u0627\u0644\u0634\u0641\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0639\u0635\u064A\u0629\u060C \u0648\u0645\u0637\u0627\u0631\u062F\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0645\u0647\u0645\u0627 \u0643\u0627\u0646\u062A \u0645\u062D\u062C\u0648\u0628\u0629 \u0639\u0646 \u0627\u0644\u0623\u0639\u064A\u0646.",
    anthemSnippet: "\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u062F\u0627\u0626\u0645\u0627\u064B \u0648\u0627\u062D\u062F\u0629\u060C \u0648\u0639\u064A\u0646 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0630\u0643\u064A \u0644\u0627 \u062A\u063A\u0641\u0644 \u0639\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644!",
    flagshipWorks: ["\u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646", "\u0627\u0644\u0645\u062D\u0642\u0642 \u0631\u064A\u0645\u064A", "\u0634\u0627\u0631\u0644\u0648\u0643 \u0647\u0648\u0644\u0645\u0632", "\u0628\u0627\u062A\u0645\u0627\u0646"],
    color: "#06b6d4",
    bgClass: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    isEnabled: true,
    order: 6,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(6, 182, 212, 0.65)",
      ringTilt: 45,
      textureStyle: "mystery",
      rotationSpeed: 0.7,
      atmosphereGlow: "#06b6d4",
      scale: 1
    }
  },
  {
    id: "scifi",
    name: "\u0643\u0648\u0643\u0628 \u0639\u0644\u0648\u0645",
    arabicGenre: "\u0639\u0644\u0648\u0645",
    genreKey: "Sci-Fi",
    badge: "\u{1F52C}",
    icon: "rocket_launch",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0648\u0627\u0644\u0643\u0648\u0646 \u0627\u0644\u0641\u0633\u064A\u062D",
    description: "\u0622\u0641\u0627\u0642 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u060C \u0645\u062C\u0631\u0627\u062A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u060C \u0648\u0627\u0644\u0631\u0648\u0628\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 \u0641\u064A \u062E\u062F\u0645\u0629 \u0627\u0644\u0628\u0634\u0631\u064A\u0629.",
    anthemSnippet: "\u0628\u0627\u0644\u0639\u0644\u0645 \u0648\u0627\u0644\u0625\u0631\u0627\u062F\u0629 \u0646\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0646\u062C\u0648\u0645 \u0648\u0646\u0628\u0646\u064A \u063A\u062F \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0645\u0634\u0631\u0642!",
    flagshipWorks: ["\u063A\u0631\u0646\u062F\u0627\u064A\u0632\u0631", "\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062C\u0632\u064A\u0631\u0629", "\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0646\u062E\u064A\u0644", "\u0628\u0627\u0635 \u0627\u0644\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0639\u062C\u064A\u0628"],
    color: "#14b8a6",
    bgClass: "bg-teal-500/15 border-teal-500/30 text-teal-400",
    glowColor: "rgba(20, 184, 166, 0.4)",
    isEnabled: true,
    order: 7,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(20, 184, 166, 0.75)",
      ringTilt: -15,
      textureStyle: "scifi",
      rotationSpeed: 1.35,
      atmosphereGlow: "#14b8a6",
      scale: 1.08
    }
  },
  {
    id: "classics",
    name: "\u0643\u0648\u0643\u0628 \u062A\u0627\u0631\u064A\u062E",
    arabicGenre: "\u062A\u0627\u0631\u064A\u062E",
    genreKey: "Historical",
    badge: "\u{1F4DC}",
    icon: "history_edu",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0639\u0628\u0631 \u0648\u0627\u0644\u0623\u0645\u062C\u0627\u062F \u0648\u0633\u064A\u0631 \u0627\u0644\u0643\u0628\u0627\u0631 \u0627\u0644\u062E\u0627\u0644\u062F\u0629",
    description: "\u0623\u0631\u0634\u064A\u0641 \u0627\u0644\u0632\u0647\u0631\u0629 \u0627\u0644\u0630\u0647\u0628\u064A \u0648\u0633\u064A\u0631 \u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0627\u0644\u062A\u064A \u0623\u0644\u0647\u0645\u062A \u0623\u062C\u064A\u0627\u0644\u0627\u064B \u0639\u0628\u0631 \u0627\u0644\u0632\u0645\u0627\u0646.",
    anthemSnippet: "\u0645\u0646 \u0645\u0627\u0636\u064A\u0646\u0627 \u0627\u0644\u0639\u0631\u064A\u0642 \u0646\u0633\u062A\u0644\u0647\u0645 \u0627\u0644\u0639\u0628\u0631\u060C \u0644\u0646\u0633\u064A\u0631 \u0641\u064A \u062F\u0631\u0628 \u0627\u0644\u0645\u062C\u062F \u0648\u0627\u0644\u0638\u0641\u0631!",
    flagshipWorks: ["\u0635\u0642\u0648\u0631 \u0627\u0644\u0623\u0631\u0636", "\u0627\u0644\u0631\u0645\u064A\u0629 \u0627\u0644\u0645\u0644\u062A\u0647\u0628\u0629", "\u0645\u0627\u0648\u0643\u0644\u064A", "\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0643\u0646\u0632"],
    color: "#d97706",
    bgClass: "bg-amber-600/15 border-amber-600/30 text-amber-500",
    glowColor: "rgba(217, 119, 6, 0.4)",
    isEnabled: true,
    order: 8,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(217, 119, 6, 0.7)",
      ringTilt: 30,
      textureStyle: "classics",
      rotationSpeed: 0.6,
      atmosphereGlow: "#d97706",
      scale: 1.12
    }
  },
  {
    id: "movies",
    name: "\u0643\u0648\u0643\u0628 \u0623\u0641\u0644\u0627\u0645",
    arabicGenre: "\u0623\u0641\u0644\u0627\u0645",
    genreKey: "Movie",
    badge: "\u{1F3AC}",
    icon: "movie",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0643\u0628\u0631\u0649 \u0648\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0642\u0629",
    description: "\u0623\u0631\u0648\u0639 \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u062D\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u062C\u0648\u062F\u0629 \u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u0641\u0627\u0626\u0642\u0629 4K.",
    anthemSnippet: "\u062A\u062C\u0631\u0628\u0629 \u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u062A\u0623\u0633\u0631 \u0627\u0644\u062D\u0648\u0627\u0633 \u0648\u062A\u0646\u0642\u0644\u0643 \u0625\u0644\u0649 \u0642\u0644\u0628 \u0627\u0644\u0642\u0635\u0629!",
    flagshipWorks: ["\u0641\u064A\u0644\u0645 \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643", "\u0641\u064A\u0644\u0645 \u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646", "\u0641\u064A\u0644\u0645 \u0648\u0646 \u0628\u064A\u0633 \u0631\u064A\u062F"],
    color: "#8b5cf6",
    bgClass: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    glowColor: "rgba(139, 92, 246, 0.4)",
    isEnabled: true,
    order: 9,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(139, 92, 246, 0.8)",
      ringTilt: 18,
      textureStyle: "movies",
      rotationSpeed: 0.9,
      atmosphereGlow: "#8b5cf6",
      scale: 1.05
    }
  },
  {
    id: "bonbon",
    name: "\u0643\u0648\u0643\u0628 \u0628\u0648\u0646 \u0628\u0648\u0646",
    arabicGenre: "\u0623\u0637\u0641\u0627\u0644",
    genreKey: "Kids",
    badge: "\u{1F36D}",
    icon: "child_care",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0635\u063A\u0627\u0631 \u0648\u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u0628\u062F\u0627\u064A\u0627\u062A \u0627\u0644\u0644\u0637\u064A\u0641\u0629",
    description: "\u062D\u0643\u0627\u064A\u0627\u062A \u062A\u0631\u0628\u0648\u064A\u0629 \u062F\u0627\u0641\u0626\u0629 \u0648\u0631\u0633\u0648\u0645 \u0645\u062A\u062D\u0631\u0643\u0629 \u0645\u0631\u062D\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643\u0627\u0641\u0629 \u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u0627\u0644\u0628\u0631\u0627\u0639\u0645.",
    anthemSnippet: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u0635\u063A\u0627\u0631 \u062D\u064A\u062B \u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u0627\u0644\u0623\u062D\u0644\u0627\u0645 \u0627\u0644\u0648\u0631\u062F\u064A\u0629!",
    flagshipWorks: ["\u0628\u0627\u0628\u0627\u0631 \u0627\u0644\u0641\u064A\u0644", "\u0628\u064A\u0644 \u0648\u0633\u0628\u0627\u0633\u062A\u064A\u0627\u0646", "\u0641\u0644\u0648\u0646\u0629", "\u062A\u0627\u0645\u0627 \u0648\u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621"],
    color: "#f43f5e",
    bgClass: "bg-rose-500/15 border-rose-500/30 text-rose-400",
    glowColor: "rgba(244, 63, 94, 0.4)",
    isEnabled: true,
    order: 10,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(244, 63, 94, 0.75)",
      ringTilt: -20,
      textureStyle: "bonbon",
      rotationSpeed: 1.1,
      atmosphereGlow: "#f43f5e",
      scale: 0.94
    }
  }
];

// src/routes/planets.routes.ts
var planetsRoutes = new Hono3();
planetsRoutes.get("/", async (c) => {
  try {
    const enabledPlanets = DEFAULT_ADMIN_PLANETS.filter((p) => p.isEnabled).sort(
      (a, b) => a.order - b.order
    );
    return sendSuccess(c, {
      planets: enabledPlanets,
      settings: DEFAULT_PLANETS_SETTINGS
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u0648\u0627\u0643\u0628", 500);
  }
});
planetsRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const planet = DEFAULT_ADMIN_PLANETS.find((p) => p.id === id);
    if (!planet) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0643\u0648\u0643\u0628 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
    }
    const matchingAnimes = await prisma.anime.findMany({
      where: {
        OR: [
          { genres: { has: planet.genreKey } },
          { genres: { has: planet.arabicGenre } }
        ]
      },
      take: 20
    });
    return sendSuccess(c, {
      planet,
      animes: matchingAnimes
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0648\u0643\u0628", 500);
  }
});

// src/routes/reports.routes.ts
var reportsRoutes = new Hono3();
var createReportSchema = external_exports.object({
  targetType: external_exports.enum(["link", "server", "episode", "comment"]).default("link"),
  targetId: external_exports.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u0637\u0644\u0648\u0628"),
  reason: external_exports.string().min(3, "\u0633\u0628\u0628 \u0627\u0644\u0628\u0644\u0627\u063A \u0645\u0637\u0644\u0648\u0628 (\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 3 \u0623\u062D\u0631\u0641)")
});
reportsRoutes.post("/", optionalAuthMiddleware, async (c) => {
  try {
    const rawBody = await c.req.json();
    const parsed = createReportSchema.safeParse(rawBody);
    if (!parsed.success) {
      return sendError(
        c,
        "VALIDATION_ERROR",
        parsed.error.errors[0]?.message || "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0628\u0644\u0627\u063A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629",
        400,
        parsed.error.format()
      );
    }
    const { targetType, targetId, reason } = parsed.data;
    const authUser = c.get("user");
    const report = await prisma.report.create({
      data: {
        userId: authUser?.userId || null,
        targetType,
        targetId,
        reason,
        status: "pending"
      }
    });
    if (targetType === "server" || targetType === "link") {
      await prisma.server.updateMany({
        where: { id: targetId },
        data: { lastCheckedAt: /* @__PURE__ */ new Date() }
      }).catch(() => {
      });
    }
    return sendSuccess(
      c,
      {
        reportId: report.id,
        message: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0628\u0644\u0627\u063A\u0643 \u0628\u0646\u062C\u0627\u062D \u0648\u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0628\u0641\u062D\u0635 \u0648\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u064A\u0631\u0641\u0631 \u0641\u064A \u0623\u0633\u0631\u0639 \u0648\u0642\u062A."
      },
      void 0,
      201
    );
  } catch (error) {
    return sendError(c, "CREATE_REPORT_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0628\u0644\u0627\u063A", 500);
  }
});
reportsRoutes.get("/", adminOnlyMiddleware, async (c) => {
  try {
    const status = c.req.query("status") || "pending";
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;
    const where = status === "all" ? {} : { status };
    const [total, reports] = await Promise.all([
      prisma.report.count({ where }),
      prisma.report.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit
      })
    ]);
    return sendSuccess(c, reports, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return sendError(c, "FETCH_REPORTS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u0644\u0627\u063A\u0627\u062A", 500);
  }
});
reportsRoutes.patch("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { status } = body;
    if (!["pending", "resolved", "dismissed"].includes(status)) {
      return sendError(c, "VALIDATION_ERROR", "\u0627\u0644\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629. \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646: pending \u0623\u0648 resolved \u0623\u0648 dismissed", 400);
    }
    const updated = await prisma.report.update({
      where: { id },
      data: { status }
    });
    return sendSuccess(c, {
      report: updated,
      message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0628\u0644\u0627\u063A \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    return sendError(c, "UPDATE_REPORT_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u0644\u0627\u063A", 500);
  }
});

// src/index.ts
var app = new Hono3();
app.use("*", logger());
app.use("*", prettyJSON());
app.use(
  "*",
  cors({
    origin: (origin) => {
      if (isAllowedOrigin(origin)) {
        return origin || "*";
      }
      return "https://slam-dunk-w.vercel.app";
    },
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600
  })
);
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.6.0"
  });
});
app.get("/", (c) => {
  return c.json({
    status: "ok",
    message: "Welcome to ANIME DAZE Standalone Streaming API Gateway",
    documentation: "/api/v1/animes",
    health: "/health",
    version: "2.6.0"
  });
});
app.get("/api", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.6.0"
  });
});
app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.6.0"
  });
});
app.route("/api/v1/auth/sessions", sessionsRoutes);
app.route("/api/v1/auth", authRoutes);
app.route("/api/v1/animes", animesRoutes);
app.route("/api/v1/characters", charactersRoutes);
app.route("/api/v1/episodes", episodesRoutes);
app.route("/api/v1/me", meRoutes);
app.route("/api/v1/planets", planetsRoutes);
app.route("/api/planets", planetsRoutes);
app.route("/api/v1/reports", reportsRoutes);
app.route("/api/mobile/v1", mobileRoutes);
app.route("/api/admin", adminRoutes);
app.notFound((c) => {
  return sendError(c, "NOT_FOUND", `\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F: ${c.req.method} ${c.req.path}`, 404);
});
app.onError((err, c) => {
  console.error("Hono Application Error:", err);
  const isProd = process.env.NODE_ENV === "production";
  const safeMessage = isProd ? "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B" : err.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639 \u0641\u064A \u062E\u0627\u062F\u0645 \u0627\u0644\u0640 API";
  return sendError(c, "INTERNAL_SERVER_ERROR", safeMessage, 500);
});
var index_default = app;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
const { handle } = require('@hono/node-server/vercel'); module.exports = handle(app); module.exports.default = module.exports;
