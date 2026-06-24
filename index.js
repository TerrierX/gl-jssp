var D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var Bt = {};
/*! Axios v1.18.1 Copyright (c) 2026 Matt Zabriskie and contributors */
function Mt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: An } = Object.prototype, { getPrototypeOf: he } = Object, { iterator: Oe, toStringTag: jt } = Symbol, Ce = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Ae = (t, e) => {
  let n = t;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Ce(n, e))
      return !0;
    n = he(n);
  }
  return !1;
}, Rn = (t, e) => t != null && Ae(t, e) ? t[e] : void 0, et = /* @__PURE__ */ ((t) => (e) => {
  const n = An.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), $ = (t) => (t = t.toLowerCase(), (e) => et(e) === t), je = (t) => (e) => typeof e === t, { isArray: ue } = Array, pe = je("undefined");
function me(t) {
  return t !== null && !pe(t) && t.constructor !== null && !pe(t.constructor) && M(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const kt = $("ArrayBuffer");
function On(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && kt(t.buffer), e;
}
const Tn = je("string"), M = je("function"), Ht = je("number"), we = (t) => t !== null && typeof t == "object", Sn = (t) => t === !0 || t === !1, Pe = (t) => {
  if (!we(t))
    return !1;
  const e = he(t);
  return (e === null || e === Object.prototype || he(e) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Ae(t, jt) && !Ae(t, Oe);
}, vn = (t) => {
  if (!we(t) || me(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, xn = $("Date"), Nn = $("File"), Ln = (t) => !!(t && typeof t.uri < "u"), Fn = (t) => t && typeof t.getParts < "u", Pn = $("Blob"), Un = $("FileList"), In = (t) => we(t) && M(t.pipe);
function Cn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof D < "u" ? D : {};
}
const Et = Cn(), bt = typeof Et.FormData < "u" ? Et.FormData : void 0, Dn = (t) => {
  if (!t) return !1;
  if (bt && t instanceof bt) return !0;
  const e = he(t);
  if (!e || e === Object.prototype || !M(t.append)) return !1;
  const n = et(t);
  return n === "formdata" || // detect form-data instance
  n === "object" && M(t.toString) && t.toString() === "[object FormData]";
}, Bn = $("URLSearchParams"), [Mn, jn, kn, Hn] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map($), zn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), ue(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    if (me(t))
      return;
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let c;
    for (r = 0; r < o; r++)
      c = s[r], e.call(null, t[c], c, t);
  }
}
function zt(t, e) {
  if (me(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : D, qt = (t) => !pe(t) && t !== ae;
function We(...t) {
  const { caseless: e, skipUndefined: n } = qt(this) && this || {}, r = {}, i = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const c = e && typeof o == "string" && zt(r, o) || o, f = Ce(r, c) ? r[c] : void 0;
    Pe(f) && Pe(s) ? r[c] = We(f, s) : Pe(s) ? r[c] = We({}, s) : ue(s) ? r[c] = s.slice() : (!n || !pe(s)) && (r[c] = s);
  };
  for (let s = 0, o = t.length; s < o; s++) {
    const c = t[s];
    if (!c || me(c) || (Te(c, i), typeof c != "object" || ue(c)))
      continue;
    const f = Object.getOwnPropertySymbols(c);
    for (let p = 0; p < f.length; p++) {
      const y = f[p];
      er.call(c, y) && i(c[y], y);
    }
  }
  return r;
}
const qn = (t, e, n, { allOwnKeys: r } = {}) => (Te(
  e,
  (i, s) => {
    n && M(i) ? Object.defineProperty(t, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Mt(i, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, s, {
      __proto__: null,
      value: i,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), t), Gn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), $n = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    __proto__: null,
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    __proto__: null,
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Jn = (t, e, n, r) => {
  let i, s, o;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, t, e)) && !c[o] && (e[o] = t[o], c[o] = !0);
    t = n !== !1 && he(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Vn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Kn = (t) => {
  if (!t) return null;
  if (ue(t)) return t;
  let e = t.length;
  if (!Ht(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Wn = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && he(Uint8Array)), Xn = (t, e) => {
  const r = (t && t[Oe]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, Yn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Qn = $("HTMLFormElement"), Zn = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
  return r.toUpperCase() + i;
}), { propertyIsEnumerable: er } = Object.prototype, tr = $("RegExp"), Gt = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Te(n, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(t, r);
}, nr = (t) => {
  Gt(t, (e, n) => {
    if (M(t) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = t[n];
    if (M(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, rr = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return ue(t) ? r(t) : r(String(t).split(e)), n;
}, sr = () => {
}, ir = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function or(t) {
  return !!(t && M(t.append) && t[jt] === "FormData" && t[Oe]);
}
const ar = (t) => {
  const e = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (we(r)) {
      if (e.has(r))
        return;
      if (me(r))
        return r;
      if (!("toJSON" in r)) {
        e.add(r);
        const i = ue(r) ? [] : {};
        return Te(r, (s, o) => {
          const c = n(s);
          !pe(c) && (i[o] = c);
        }), e.delete(r), i;
      }
    }
    return r;
  };
  return n(t);
}, cr = $("AsyncFunction"), ur = (t) => t && (we(t) || M(t)) && M(t.then) && M(t.catch), $t = ((t, e) => t ? setImmediate : e ? ((n, r) => (ae.addEventListener(
  "message",
  ({ source: i, data: s }) => {
    i === ae && s === n && r.length && r.shift()();
  },
  !1
), (i) => {
  r.push(i), ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", M(ae.postMessage)), lr = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || $t, Jt = (t) => t != null && M(t[Oe]), fr = (t) => t != null && Ae(t, Oe) && Jt(t);
var d = {
  isArray: ue,
  isArrayBuffer: kt,
  isBuffer: me,
  isFormData: Dn,
  isArrayBufferView: On,
  isString: Tn,
  isNumber: Ht,
  isBoolean: Sn,
  isObject: we,
  isPlainObject: Pe,
  isEmptyObject: vn,
  isReadableStream: Mn,
  isRequest: jn,
  isResponse: kn,
  isHeaders: Hn,
  isUndefined: pe,
  isDate: xn,
  isFile: Nn,
  isReactNativeBlob: Ln,
  isReactNative: Fn,
  isBlob: Pn,
  isRegExp: tr,
  isFunction: M,
  isStream: In,
  isURLSearchParams: Bn,
  isTypedArray: Wn,
  isFileList: Un,
  forEach: Te,
  merge: We,
  extend: qn,
  trim: zn,
  stripBOM: Gn,
  inherits: $n,
  toFlatObject: Jn,
  kindOf: et,
  kindOfTest: $,
  endsWith: Vn,
  toArray: Kn,
  forEachEntry: Xn,
  matchAll: Yn,
  isHTMLForm: Qn,
  hasOwnProperty: Ce,
  hasOwnProp: Ce,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Ae,
  getSafeProp: Rn,
  reduceDescriptors: Gt,
  freezeMethods: nr,
  toObjectSet: rr,
  toCamelCase: Zn,
  noop: sr,
  toFiniteNumber: ir,
  findKey: zt,
  global: ae,
  isContextDefined: qt,
  isSpecCompliantForm: or,
  toJSONObject: ar,
  isAsyncFn: cr,
  isThenable: ur,
  setImmediate: $t,
  asap: lr,
  isIterable: Jt,
  isSafeIterable: fr
};
const dr = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var hr = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || e[n] && dr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
};
function pr(t) {
  let e = 0, n = t.length;
  for (; e < n; ) {
    const r = t.charCodeAt(e);
    if (r !== 9 && r !== 32)
      break;
    e += 1;
  }
  for (; n > e; ) {
    const r = t.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
const yr = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), mr = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function tt(t, e) {
  return d.isArray(t) ? t.map((n) => tt(n, e)) : pr(String(t).replace(e, ""));
}
const wr = (t) => tt(t, yr), Er = (t) => tt(t, mr);
function Vt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return d.forEach(t.toJSON(), (n, r) => {
    e[r] = Er(n);
  }), e;
}
const _t = Symbol("internals");
function ge(t) {
  return t && String(t).trim().toLowerCase();
}
function Ue(t) {
  return t === !1 || t == null ? t : d.isArray(t) ? t.map(Ue) : wr(String(t));
}
function br(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const _r = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function $e(t, e, n, r, i) {
  if (d.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!d.isString(e)) {
    if (d.isString(r))
      return e.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(e);
  }
}
function gr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Ar(t, e) {
  const n = d.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class B {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(c, f, p) {
      const y = ge(f);
      if (!y)
        return;
      const m = d.findKey(i, y);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || f] = Ue(c));
    }
    const o = (c, f) => d.forEach(c, (p, y) => s(p, y, f));
    if (d.isPlainObject(e) || e instanceof this.constructor)
      o(e, n);
    else if (d.isString(e) && (e = e.trim()) && !_r(e))
      o(hr(e), n);
    else if (d.isObject(e) && d.isSafeIterable(e)) {
      let c = /* @__PURE__ */ Object.create(null), f, p;
      for (const y of e) {
        if (!d.isArray(y))
          throw new TypeError("Object iterator must return a key-value pair");
        p = y[0], d.hasOwnProp(c, p) ? (f = c[p], c[p] = d.isArray(f) ? [...f, y[1]] : [f, y[1]]) : c[p] = y[1];
      }
      o(c, n);
    } else
      e != null && s(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = ge(e), e) {
      const r = d.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return br(i);
        if (d.isFunction(n))
          return n.call(this, i, r);
        if (d.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ge(e), e) {
      const r = d.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || $e(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = ge(o), o) {
        const c = d.findKey(r, o);
        c && (!n || $e(r, r[c], c, n)) && (delete r[c], i = !0);
      }
    }
    return d.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || $e(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return d.forEach(this, (i, s) => {
      const o = d.findKey(r, s);
      if (o) {
        n[o] = Ue(i), delete n[s];
        return;
      }
      const c = e ? gr(s) : String(s).trim();
      c !== s && delete n[s], n[c] = Ue(i), r[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && d.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[_t] = this[_t] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const c = ge(o);
      r[c] || (Ar(i, o), r[c] = !0);
    }
    return d.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
B.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
d.reduceDescriptors(B.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(B);
const Rr = "[REDACTED ****]";
function Or(t) {
  if (d.hasOwnProp(t, "toJSON"))
    return !0;
  let e = Object.getPrototypeOf(t);
  for (; e && e !== Object.prototype; ) {
    if (d.hasOwnProp(e, "toJSON"))
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}
function Tr(t, e) {
  const n = new Set(e.map((s) => String(s).toLowerCase())), r = [], i = (s) => {
    if (s === null || typeof s != "object" || d.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof B && (s = s.toJSON()), r.push(s);
    let o;
    if (d.isArray(s))
      o = [], s.forEach((c, f) => {
        const p = i(c);
        d.isUndefined(p) || (o[f] = p);
      });
    else {
      if (!d.isPlainObject(s) && Or(s))
        return r.pop(), s;
      o = /* @__PURE__ */ Object.create(null);
      for (const [c, f] of Object.entries(s)) {
        const p = n.has(c.toLowerCase()) ? Rr : i(f);
        d.isUndefined(p) || (o[c] = p);
      }
    }
    return r.pop(), o;
  };
  return i(t);
}
class A extends Error {
  static from(e, n, r, i, s, o) {
    const c = new A(e.message, n || e.code, r, i, s);
    return Object.defineProperty(c, "cause", {
      __proto__: null,
      value: e,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), c.name = e.name, e.status != null && c.status == null && (c.status = e.status), o && Object.assign(c, o), c;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, n, r, i, s) {
    super(e), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    const e = this.config, n = e && d.hasOwnProp(e, "redact") ? e.redact : void 0, r = d.isArray(n) && n.length > 0 ? Tr(e, n) : d.toJSONObject(e);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
}
A.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
A.ERR_BAD_OPTION = "ERR_BAD_OPTION";
A.ECONNABORTED = "ECONNABORTED";
A.ETIMEDOUT = "ETIMEDOUT";
A.ECONNREFUSED = "ECONNREFUSED";
A.ERR_NETWORK = "ERR_NETWORK";
A.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
A.ERR_DEPRECATED = "ERR_DEPRECATED";
A.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
A.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
A.ERR_CANCELED = "ERR_CANCELED";
A.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
A.ERR_INVALID_URL = "ERR_INVALID_URL";
A.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var Sr = null;
const Kt = 100;
function Xe(t) {
  return d.isPlainObject(t) || d.isArray(t);
}
function Wt(t) {
  return d.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Je(t, e, n) {
  return t ? t.concat(e).map(function(i, s) {
    return i = Wt(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function vr(t) {
  return d.isArray(t) && !t.some(Xe);
}
const xr = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ke(t, e, n) {
  if (!d.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = d.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(l, u) {
      return !d.isUndefined(u[l]);
    }
  );
  const r = n.metaTokens, i = n.visitor || O, s = n.dots, o = n.indexes, c = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? Kt : n.maxDepth, p = c && d.isSpecCompliantForm(e), y = [];
  if (!d.isFunction(i))
    throw new TypeError("visitor must be a function");
  function m(a) {
    if (a === null) return "";
    if (d.isDate(a))
      return a.toISOString();
    if (d.isBoolean(a))
      return a.toString();
    if (!p && d.isBlob(a))
      throw new A("Blob is not supported. Use a Buffer instead.");
    if (d.isArrayBuffer(a) || d.isTypedArray(a)) {
      if (p && typeof c == "function")
        return new c([a]);
      if (typeof Buffer < "u")
        return Buffer.from(a);
      throw new A("Blob is not supported. Use a Buffer instead.", A.ERR_NOT_SUPPORT);
    }
    return a;
  }
  function S(a) {
    if (a > f)
      throw new A(
        "Object is too deeply nested (" + a + " levels). Max depth: " + f,
        A.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function _(a, l) {
    if (f === 1 / 0)
      return JSON.stringify(a);
    const u = [];
    return JSON.stringify(a, function(w, E) {
      if (!d.isObject(E))
        return E;
      for (; u.length && u[u.length - 1] !== this; )
        u.pop();
      return u.push(E), S(l + u.length - 1), E;
    });
  }
  function O(a, l, u) {
    let h = a;
    if (d.isReactNative(e) && d.isReactNativeBlob(a))
      return e.append(Je(u, l, s), m(a)), !1;
    if (a && !u && typeof a == "object") {
      if (d.endsWith(l, "{}"))
        l = r ? l : l.slice(0, -2), a = _(a, 1);
      else if (d.isArray(a) && vr(a) || (d.isFileList(a) || d.endsWith(l, "[]")) && (h = d.toArray(a)))
        return l = Wt(l), h.forEach(function(E, R) {
          !(d.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Je([l], R, s) : o === null ? l : l + "[]",
            m(E)
          );
        }), !1;
    }
    return Xe(a) ? !0 : (e.append(Je(u, l, s), m(a)), !1);
  }
  const g = Object.assign(xr, {
    defaultVisitor: O,
    convertValue: m,
    isVisitable: Xe
  });
  function b(a, l, u = 0) {
    if (!d.isUndefined(a)) {
      if (S(u), y.indexOf(a) !== -1)
        throw new Error("Circular reference detected in " + l.join("."));
      y.push(a), d.forEach(a, function(w, E) {
        (!(d.isUndefined(w) || w === null) && i.call(e, w, d.isString(E) ? E.trim() : E, l, g)) === !0 && b(w, l ? l.concat(E) : [E], u + 1);
      }), y.pop();
    }
  }
  if (!d.isObject(t))
    throw new TypeError("data must be an object");
  return b(t), e;
}
function gt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(r) {
    return e[r];
  });
}
function nt(t, e) {
  this._pairs = [], t && ke(t, this, e);
}
const Xt = nt.prototype;
Xt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Xt.toString = function(e) {
  const n = e ? (r) => e.call(this, r, gt) : gt;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Nr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Yt(t, e, n) {
  if (!e)
    return t;
  t = t || "";
  const r = d.isFunction(n) ? {
    serialize: n
  } : n, i = d.getSafeProp(r, "encode") || Nr, s = d.getSafeProp(r, "serialize");
  let o;
  if (s ? o = s(e, r) : o = d.isURLSearchParams(e) ? e.toString() : new nt(e, r).toString(i), o) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class At {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    d.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
var rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Lr = typeof URLSearchParams < "u" ? URLSearchParams : nt, Fr = typeof FormData < "u" ? FormData : null, Pr = typeof Blob < "u" ? Blob : null, Ur = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Lr,
    FormData: Fr,
    Blob: Pr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const st = typeof window < "u" && typeof document < "u", Ye = typeof navigator == "object" && navigator || void 0, Ir = st && (!Ye || ["ReactNative", "NativeScript", "NS"].indexOf(Ye.product) < 0), Cr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dr = st && window.location.href || "http://localhost";
var Br = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: st,
  hasStandardBrowserEnv: Ir,
  hasStandardBrowserWebWorkerEnv: Cr,
  navigator: Ye,
  origin: Dr
}), I = {
  ...Br,
  ...Ur
};
function Mr(t, e) {
  return ke(t, new I.classes.URLSearchParams(), {
    visitor: function(n, r, i, s) {
      return I.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
const Rt = Kt;
function Qt(t) {
  if (t > Rt)
    throw new A(
      "FormData field is too deeply nested (" + t + " levels). Max depth: " + Rt,
      A.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function jr(t) {
  const e = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(t)) !== null; )
    Qt(e.length), e.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return e;
}
function kr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function Zt(t) {
  function e(n, r, i, s) {
    Qt(s);
    let o = n[s++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), f = s >= n.length;
    return o = !o && d.isArray(i) ? i.length : o, f ? (d.hasOwnProp(i, o) ? i[o] = d.isArray(i[o]) ? i[o].concat(r) : [i[o], r] : i[o] = r, !c) : ((!d.hasOwnProp(i, o) || !d.isObject(i[o])) && (i[o] = []), e(n, r, i[o], s) && d.isArray(i[o]) && (i[o] = kr(i[o])), !c);
  }
  if (d.isFormData(t) && d.isFunction(t.entries)) {
    const n = {};
    return d.forEachEntry(t, (r, i) => {
      e(jr(r), i, n, 0);
    }), n;
  }
  return null;
}
const de = (t, e) => t != null && d.hasOwnProp(t, e) ? t[e] : void 0;
function Hr(t, e, n) {
  if (d.isString(t))
    try {
      return (e || JSON.parse)(t), d.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(t);
}
const Se = {
  transitional: rt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, n) {
      const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = d.isObject(e);
      if (s && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
        return i ? JSON.stringify(Zt(e)) : e;
      if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e) || d.isReadableStream(e))
        return e;
      if (d.isArrayBufferView(e))
        return e.buffer;
      if (d.isURLSearchParams(e))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let c;
      if (s) {
        const f = de(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Mr(e, f).toString();
        if ((c = d.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const p = de(this, "env"), y = p && p.FormData;
          return ke(
            c ? { "files[]": e } : e,
            y && new y(),
            f
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), Hr(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const n = de(this, "transitional") || Se.transitional, r = n && n.forcedJSONParsing, i = de(this, "responseType"), s = i === "json";
      if (d.isResponse(e) || d.isReadableStream(e))
        return e;
      if (e && d.isString(e) && (r && !i || s)) {
        const c = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(e, de(this, "parseReviver"));
        } catch (f) {
          if (c)
            throw f.name === "SyntaxError" ? A.from(f, A.ERR_BAD_RESPONSE, this, null, de(this, "response")) : f;
        }
      }
      return e;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (t) => {
  Se.headers[t] = {};
});
function Ve(t, e) {
  const n = this || Se, r = e || n, i = B.from(r.headers);
  let s = r.data;
  return d.forEach(t, function(c) {
    s = c.call(n, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function en(t) {
  return !!(t && t.__CANCEL__);
}
class ve extends A {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, r) {
    super(e ?? "canceled", A.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
function tn(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new A(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? A.ERR_BAD_REQUEST : A.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function zr(t) {
  const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
  return e && e[1] || "";
}
function qr(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const p = Date.now(), y = r[s];
    o || (o = p), n[i] = f, r[i] = p;
    let m = s, S = 0;
    for (; m !== i; )
      S += n[m++], m = m % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), p - o < e)
      return;
    const _ = y && p - y;
    return _ ? Math.round(S * 1e3 / _) : void 0;
  };
}
function Gr(t, e) {
  let n = 0, r = 1e3 / e, i, s;
  const o = (p, y = Date.now()) => {
    n = y, i = null, s && (clearTimeout(s), s = null), t(...p);
  };
  return [(...p) => {
    const y = Date.now(), m = y - n;
    m >= r ? o(p, y) : (i = p, s || (s = setTimeout(() => {
      s = null, o(i);
    }, r - m)));
  }, () => i && o(i)];
}
const De = (t, e, n = 3) => {
  let r = 0;
  const i = qr(50, 250);
  return Gr((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const o = s.loaded, c = s.lengthComputable ? s.total : void 0, f = c != null ? Math.min(o, c) : o, p = Math.max(0, f - r), y = i(p);
    r = Math.max(r, f);
    const m = {
      loaded: f,
      total: c,
      progress: c ? f / c : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && c ? (c - f) / y : void 0,
      event: s,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(m);
  }, n);
}, Ot = (t, e) => {
  const n = t != null;
  return [
    (r) => e[0]({
      lengthComputable: n,
      total: t,
      loaded: r
    }),
    e[1]
  ];
}, Tt = (t) => (...e) => d.asap(() => t(...e));
var $r = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, I.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, Jr = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, s, o) {
      if (typeof document > "u") return;
      const c = [`${t}=${encodeURIComponent(e)}`];
      d.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), d.isString(r) && c.push(`path=${r}`), d.isString(i) && c.push(`domain=${i}`), s === !0 && c.push("secure"), d.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.split(";");
      for (let n = 0; n < e.length; n++) {
        const r = e[n].replace(/^\s+/, ""), i = r.indexOf("=");
        if (i !== -1 && r.slice(0, i) === t)
          try {
            return decodeURIComponent(r.slice(i + 1));
          } catch {
            return r.slice(i + 1);
          }
      }
      return null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Vr(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Kr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
const Wr = /^https?:(?!\/\/)/i, Xr = /[\t\n\r]/g;
function Yr(t) {
  let e = 0;
  for (; e < t.length && t.charCodeAt(e) <= 32; )
    e++;
  return t.slice(e);
}
function Qr(t) {
  return Yr(t).replace(Xr, "");
}
function St(t, e) {
  if (typeof t == "string" && Wr.test(Qr(t)))
    throw new A(
      'Invalid URL: missing "//" after protocol',
      A.ERR_INVALID_URL,
      e
    );
}
function nn(t, e, n, r) {
  St(e, r);
  let i = !Vr(e);
  return t && (i || n === !1) ? (St(t, r), Kr(t, e)) : e;
}
const vt = (t) => t instanceof B ? { ...t } : t;
function le(t, e) {
  t = t || {}, e = e || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(y, m, S, _) {
    return d.isPlainObject(y) && d.isPlainObject(m) ? d.merge.call({ caseless: _ }, y, m) : d.isPlainObject(m) ? d.merge({}, m) : d.isArray(m) ? m.slice() : m;
  }
  function i(y, m, S, _) {
    if (d.isUndefined(m)) {
      if (!d.isUndefined(y))
        return r(void 0, y, S, _);
    } else return r(y, m, S, _);
  }
  function s(y, m) {
    if (!d.isUndefined(m))
      return r(void 0, m);
  }
  function o(y, m) {
    if (d.isUndefined(m)) {
      if (!d.isUndefined(y))
        return r(void 0, y);
    } else return r(void 0, m);
  }
  function c(y) {
    const m = d.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (!d.isUndefined(m))
      if (d.isPlainObject(m)) {
        if (d.hasOwnProp(m, y))
          return m[y];
      } else
        return;
    const S = d.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (d.isPlainObject(S) && d.hasOwnProp(S, y))
      return S[y];
  }
  function f(y, m, S) {
    if (d.hasOwnProp(e, S))
      return r(y, m);
    if (d.hasOwnProp(t, S))
      return r(void 0, y);
  }
  const p = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: f,
    headers: (y, m, S) => i(vt(y), vt(m), S, !0)
  };
  return d.forEach(Object.keys({ ...t, ...e }), function(m) {
    if (m === "__proto__" || m === "constructor" || m === "prototype") return;
    const S = d.hasOwnProp(p, m) ? p[m] : i, _ = d.hasOwnProp(t, m) ? t[m] : void 0, O = d.hasOwnProp(e, m) ? e[m] : void 0, g = S(_, O, m);
    d.isUndefined(g) && S !== f || (n[m] = g);
  }), d.hasOwnProp(e, "validateStatus") && d.isUndefined(e.validateStatus) && c("validateStatusUndefinedResolves") === !1 && (d.hasOwnProp(t, "validateStatus") ? n.validateStatus = r(void 0, t.validateStatus) : delete n.validateStatus), n;
}
const Zr = ["content-type", "content-length"];
function es(t, e, n) {
  if (n !== "content-only") {
    t.set(e);
    return;
  }
  Object.entries(e || {}).forEach(([r, i]) => {
    Zr.includes(r.toLowerCase()) && t.set(r, i);
  });
}
const ts = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
);
function rn(t) {
  const e = le({}, t), n = (S) => d.hasOwnProp(e, S) ? e[S] : void 0, r = n("data");
  let i = n("withXSRFToken");
  const s = n("xsrfHeaderName"), o = n("xsrfCookieName");
  let c = n("headers");
  const f = n("auth"), p = n("baseURL"), y = n("allowAbsoluteUrls"), m = n("url");
  if (e.headers = c = B.from(c), e.url = Yt(
    nn(p, m, y, e),
    n("params"),
    n("paramsSerializer")
  ), f) {
    const S = d.getSafeProp(f, "username") || "", _ = d.getSafeProp(f, "password") || "";
    try {
      c.set(
        "Authorization",
        "Basic " + btoa(S + ":" + (_ ? ts(_) : ""))
      );
    } catch (O) {
      throw A.from(O, A.ERR_BAD_OPTION_VALUE, t);
    }
  }
  if (d.isFormData(r) && (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv || d.isReactNative(r) ? c.setContentType(void 0) : d.isFunction(r.getHeaders) && es(c, r.getHeaders(), n("formDataHeaderPolicy"))), I.hasStandardBrowserEnv && (d.isFunction(i) && (i = i(e)), i === !0 || i == null && $r(e.url))) {
    const _ = s && o && Jr.read(o);
    _ && c.set(s, _);
  }
  return e;
}
const ns = typeof XMLHttpRequest < "u";
var rs = ns && function(t) {
  return new Promise(function(n, r) {
    const i = rn(t);
    let s = i.data;
    const o = B.from(i.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: p } = i, y, m, S, _, O;
    function g() {
      _ && _(), O && O(), i.cancelToken && i.cancelToken.unsubscribe(y), i.signal && i.signal.removeEventListener("abort", y);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function a() {
      if (!b)
        return;
      const u = B.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), w = {
        data: !c || c === "text" || c === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: u,
        config: t,
        request: b
      };
      tn(
        function(R) {
          n(R), g();
        },
        function(R) {
          r(R), g();
        },
        w
      ), b = null;
    }
    "onloadend" in b ? b.onloadend = a : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.startsWith("file:")) || setTimeout(a);
    }, b.onabort = function() {
      b && (r(new A("Request aborted", A.ECONNABORTED, t, b)), g(), b = null);
    }, b.onerror = function(h) {
      const w = h && h.message ? h.message : "Network Error", E = new A(w, A.ERR_NETWORK, t, b);
      E.event = h || null, r(E), g(), b = null;
    }, b.ontimeout = function() {
      let h = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const w = i.transitional || rt;
      i.timeoutErrorMessage && (h = i.timeoutErrorMessage), r(
        new A(
          h,
          w.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
          t,
          b
        )
      ), g(), b = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in b && d.forEach(Vt(o), function(h, w) {
      b.setRequestHeader(w, h);
    }), d.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), c && c !== "json" && (b.responseType = i.responseType), p && ([S, O] = De(p, !0), b.addEventListener("progress", S)), f && b.upload && ([m, _] = De(f), b.upload.addEventListener("progress", m), b.upload.addEventListener("loadend", _)), (i.cancelToken || i.signal) && (y = (u) => {
      b && (r(!u || u.type ? new ve(null, t, b) : u), b.abort(), g(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(y), i.signal && (i.signal.aborted ? y() : i.signal.addEventListener("abort", y)));
    const l = zr(i.url);
    if (l && !I.protocols.includes(l)) {
      r(
        new A(
          "Unsupported protocol " + l + ":",
          A.ERR_BAD_REQUEST,
          t
        )
      ), g();
      return;
    }
    b.send(s || null);
  });
};
const ss = (t, e) => {
  if (t = t ? t.filter(Boolean) : [], !e && !t.length)
    return;
  const n = new AbortController();
  let r = !1;
  const i = function(f) {
    if (!r) {
      r = !0, o();
      const p = f instanceof Error ? f : this.reason;
      n.abort(
        p instanceof A ? p : new ve(p instanceof Error ? p.message : p)
      );
    }
  };
  let s = e && setTimeout(() => {
    s = null, i(new A(`timeout of ${e}ms exceeded`, A.ETIMEDOUT));
  }, e);
  const o = () => {
    t && (s && clearTimeout(s), s = null, t.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(i) : f.removeEventListener("abort", i);
    }), t = null);
  };
  t.forEach((f) => f.addEventListener("abort", i, { once: !0 }));
  const { signal: c } = n;
  return c.unsubscribe = () => d.asap(o), c;
}, is = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + e, yield t.slice(r, i), r = i;
}, os = async function* (t, e) {
  for await (const n of as(t))
    yield* is(n, e);
}, as = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, xt = (t, e, n, r) => {
  const i = os(t, e);
  let s = 0, o, c = (f) => {
    o || (o = !0, r && r(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: p, value: y } = await i.next();
          if (p) {
            c(), f.close();
            return;
          }
          let m = y.byteLength;
          if (n) {
            let S = s += m;
            n(S);
          }
          f.enqueue(new Uint8Array(y));
        } catch (p) {
          throw c(p), p;
        }
      },
      cancel(f) {
        return c(f), i.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Be = (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102, cs = (t, e, n) => e + 2 < n && Be(t.charCodeAt(e + 1)) && Be(t.charCodeAt(e + 2));
function us(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let o = r.length;
    const c = r.length;
    for (let _ = 0; _ < c; _++)
      if (r.charCodeAt(_) === 37 && _ + 2 < c) {
        const O = r.charCodeAt(_ + 1), g = r.charCodeAt(_ + 2);
        Be(O) && Be(g) && (o -= 2, _ += 2);
      }
    let f = 0, p = c - 1;
    const y = (_) => _ >= 2 && r.charCodeAt(_ - 2) === 37 && // '%'
    r.charCodeAt(_ - 1) === 51 && // '3'
    (r.charCodeAt(_) === 68 || r.charCodeAt(_) === 100);
    p >= 0 && (r.charCodeAt(p) === 61 ? (f++, p--) : y(p) && (f++, p -= 3)), f === 1 && p >= 0 && (r.charCodeAt(p) === 61 || y(p)) && f++;
    const S = Math.floor(o / 4) * 3 - (f || 0);
    return S > 0 ? S : 0;
  }
  let s = 0;
  for (let o = 0, c = r.length; o < c; o++) {
    const f = r.charCodeAt(o);
    if (f === 37 && cs(r, o, c))
      s += 1, o += 2;
    else if (f < 128)
      s += 1;
    else if (f < 2048)
      s += 2;
    else if (f >= 55296 && f <= 56319 && o + 1 < c) {
      const p = r.charCodeAt(o + 1);
      p >= 56320 && p <= 57343 ? (s += 4, o++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const it = "1.18.1", Nt = 64 * 1024, { isFunction: Le } = d, ls = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
), Lt = (t) => {
  if (!d.isString(t))
    return t;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, Ft = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, fs = (t) => {
  const e = t.indexOf("://");
  let n = t;
  return e !== -1 && (n = n.slice(e + 3)), n.includes("@") || n.includes(":");
}, ds = (t) => {
  const e = d.global !== void 0 && d.global !== null ? d.global : globalThis, { ReadableStream: n, TextEncoder: r } = e;
  t = d.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: e.Request,
      Response: e.Response
    },
    t
  );
  const { fetch: i, Request: s, Response: o } = t, c = i ? Le(i) : typeof fetch == "function", f = Le(s), p = Le(o);
  if (!c)
    return !1;
  const y = c && Le(n), m = c && (typeof r == "function" ? /* @__PURE__ */ ((a) => (l) => a.encode(l))(new r()) : async (a) => new Uint8Array(await new s(a).arrayBuffer())), S = f && y && Ft(() => {
    let a = !1;
    const l = new s(I.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return a = !0, "half";
      }
    }), u = l.headers.has("Content-Type");
    return l.body != null && l.body.cancel(), a && !u;
  }), _ = p && y && Ft(() => d.isReadableStream(new o("").body)), O = {
    stream: _ && ((a) => a.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
    !O[a] && (O[a] = (l, u) => {
      let h = l && l[a];
      if (h)
        return h.call(l);
      throw new A(
        `Response type '${a}' is not supported`,
        A.ERR_NOT_SUPPORT,
        u
      );
    });
  });
  const g = async (a) => {
    if (a == null)
      return 0;
    if (d.isBlob(a))
      return a.size;
    if (d.isSpecCompliantForm(a))
      return (await new s(I.origin, {
        method: "POST",
        body: a
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(a) || d.isArrayBuffer(a))
      return a.byteLength;
    if (d.isURLSearchParams(a) && (a = a + ""), d.isString(a))
      return (await m(a)).byteLength;
  }, b = async (a, l) => {
    const u = d.toFiniteNumber(a.getContentLength());
    return u ?? g(l);
  };
  return async (a) => {
    let {
      url: l,
      method: u,
      data: h,
      signal: w,
      cancelToken: E,
      timeout: R,
      onDownloadProgress: v,
      onUploadProgress: T,
      responseType: k,
      headers: H,
      withCredentials: X = "same-origin",
      fetchOptions: ft,
      maxContentLength: J,
      maxBodyLength: xe
    } = rn(a);
    const Ee = d.isNumber(J) && J > -1, qe = d.isNumber(xe) && xe > -1, En = (N) => d.hasOwnProp(a, N) ? a[N] : void 0;
    let dt = i || fetch;
    k = k ? (k + "").toLowerCase() : "text";
    let Y = ss(
      [w, E && E.toAbortSignal()],
      R
    ), U = null;
    const ie = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let fe, be = null;
    const ht = () => new A(
      "Request body larger than maxBodyLength limit",
      A.ERR_BAD_REQUEST,
      a,
      U
    );
    try {
      let N;
      const z = En("auth");
      if (z) {
        const x = d.getSafeProp(z, "username") || "", j = d.getSafeProp(z, "password") || "";
        N = {
          username: x,
          password: j
        };
      }
      if (fs(l)) {
        const x = new URL(l, I.origin);
        if (!N && (x.username || x.password)) {
          const j = Lt(x.username), Q = Lt(x.password);
          N = {
            username: j,
            password: Q
          };
        }
        (x.username || x.password) && (x.username = "", x.password = "", l = x.href);
      }
      if (N && (H.delete("authorization"), H.set(
        "Authorization",
        "Basic " + btoa(ls((N.username || "") + ":" + (N.password || "")))
      )), Ee && typeof l == "string" && l.startsWith("data:") && us(l) > J)
        throw new A(
          "maxContentLength size of " + J + " exceeded",
          A.ERR_BAD_RESPONSE,
          a,
          U
        );
      if (qe && u !== "get" && u !== "head") {
        const x = await g(h);
        if (typeof x == "number" && isFinite(x) && (fe = x, x > xe))
          throw ht();
      }
      const Ne = qe && (d.isReadableStream(h) || d.isStream(h)), pt = (x, j, Q) => xt(
        x,
        Nt,
        (oe) => {
          if (qe && oe > xe)
            throw be = ht();
          j && j(oe);
        },
        Q
      );
      if (S && u !== "get" && u !== "head" && (T || Ne)) {
        if (fe = fe ?? await b(H, h), fe !== 0 || Ne) {
          let x = new s(l, {
            method: "POST",
            body: h,
            duplex: "half"
          }), j;
          if (d.isFormData(h) && (j = x.headers.get("content-type")) && H.setContentType(j), x.body) {
            const [Q, oe] = T && Ot(
              fe,
              De(Tt(T))
            ) || [];
            h = pt(x.body, Q, oe);
          }
        }
      } else if (Ne && !f && y && u !== "get" && u !== "head")
        h = pt(h);
      else if (Ne && f && !S && u !== "get" && u !== "head")
        throw new A(
          "Stream request bodies are not supported by the current fetch implementation",
          A.ERR_NOT_SUPPORT,
          a,
          U
        );
      d.isString(X) || (X = X ? "include" : "omit");
      const bn = f && "credentials" in s.prototype;
      if (d.isFormData(h)) {
        const x = H.getContentType();
        x && /^multipart\/form-data/i.test(x) && !/boundary=/i.test(x) && H.delete("content-type");
      }
      H.set("User-Agent", "axios/" + it, !1);
      const yt = {
        ...ft,
        signal: Y,
        method: u.toUpperCase(),
        headers: Vt(H.normalize()),
        body: h,
        duplex: "half",
        credentials: bn ? X : void 0
      };
      U = f && new s(l, yt);
      let K = await (f ? dt(U, ft) : dt(l, yt));
      const mt = B.from(K.headers);
      if (Ee) {
        const x = d.toFiniteNumber(mt.getContentLength());
        if (x != null && x > J)
          throw new A(
            "maxContentLength size of " + J + " exceeded",
            A.ERR_BAD_RESPONSE,
            a,
            U
          );
      }
      const Ge = _ && (k === "stream" || k === "response");
      if (_ && K.body && (v || Ee || Ge && ie)) {
        const x = {};
        ["status", "statusText", "headers"].forEach((_e) => {
          x[_e] = K[_e];
        });
        const j = d.toFiniteNumber(mt.getContentLength()), [Q, oe] = v && Ot(
          j,
          De(Tt(v), !0)
        ) || [];
        let wt = 0;
        const _n = (_e) => {
          if (Ee && (wt = _e, wt > J))
            throw new A(
              "maxContentLength size of " + J + " exceeded",
              A.ERR_BAD_RESPONSE,
              a,
              U
            );
          Q && Q(_e);
        };
        K = new o(
          xt(K.body, Nt, _n, () => {
            oe && oe(), ie && ie();
          }),
          x
        );
      }
      k = k || "text";
      let W = await O[d.findKey(O, k) || "text"](
        K,
        a
      );
      if (Ee && !_ && !Ge) {
        let x;
        if (W != null && (typeof W.byteLength == "number" ? x = W.byteLength : typeof W.size == "number" ? x = W.size : typeof W == "string" && (x = typeof r == "function" ? new r().encode(W).byteLength : W.length)), typeof x == "number" && x > J)
          throw new A(
            "maxContentLength size of " + J + " exceeded",
            A.ERR_BAD_RESPONSE,
            a,
            U
          );
      }
      return !Ge && ie && ie(), await new Promise((x, j) => {
        tn(x, j, {
          data: W,
          headers: B.from(K.headers),
          status: K.status,
          statusText: K.statusText,
          config: a,
          request: U
        });
      });
    } catch (N) {
      if (ie && ie(), Y && Y.aborted && Y.reason instanceof A) {
        const z = Y.reason;
        throw z.config = a, U && (z.request = U), N !== z && Object.defineProperty(z, "cause", {
          __proto__: null,
          value: N,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), z;
      }
      if (be)
        throw U && !be.request && (be.request = U), be;
      if (N instanceof A)
        throw U && !N.request && (N.request = U), N;
      if (N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message)) {
        const z = new A(
          "Network Error",
          A.ERR_NETWORK,
          a,
          U,
          N && N.response
        );
        throw Object.defineProperty(z, "cause", {
          __proto__: null,
          value: N.cause || N,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), z;
      }
      throw A.from(N, N && N.code, a, U, N && N.response);
    }
  };
}, hs = /* @__PURE__ */ new Map(), sn = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: i } = e, s = [r, i, n];
  let o = s.length, c = o, f, p, y = hs;
  for (; c--; )
    f = s[c], p = y.get(f), p === void 0 && y.set(f, p = c ? /* @__PURE__ */ new Map() : ds(e)), y = p;
  return p;
};
sn();
const ot = {
  http: Sr,
  xhr: rs,
  fetch: {
    get: sn
  }
};
d.forEach(ot, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { __proto__: null, value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { __proto__: null, value: e });
  }
});
const Pt = (t) => `- ${t}`, ps = (t) => d.isFunction(t) || t === null || t === !1;
function ys(t, e) {
  t = d.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, i;
  const s = {};
  for (let o = 0; o < n; o++) {
    r = t[o];
    let c;
    if (i = r, !ps(r) && (i = ot[(c = String(r)).toLowerCase()], i === void 0))
      throw new A(`Unknown adapter '${c}'`);
    if (i && (d.isFunction(i) || (i = i.get(e))))
      break;
    s[c || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(s).map(
      ([f, p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Pt).join(`
`) : " " + Pt(o[0]) : "as no adapter specified";
    throw new A(
      "There is no suitable adapter to dispatch the request " + c,
      A.ERR_NOT_SUPPORT
    );
  }
  return i;
}
var on = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ys,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ot
};
function Ke(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ve(null, t);
}
function Ut(t) {
  return Ke(t), t.headers = B.from(t.headers), t.data = Ve.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), on.getAdapter(t.adapter || Se.adapter, t)(t).then(
    function(r) {
      Ke(t), t.response = r;
      try {
        r.data = Ve.call(t, t.transformResponse, r);
      } finally {
        delete t.response;
      }
      return r.headers = B.from(r.headers), r;
    },
    function(r) {
      if (!en(r) && (Ke(t), r && r.response)) {
        t.response = r.response;
        try {
          r.response.data = Ve.call(
            t,
            t.transformResponse,
            r.response
          );
        } finally {
          delete t.response;
        }
        r.response.headers = B.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const He = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  He[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const It = {};
He.transitional = function(e, n, r) {
  function i(s, o) {
    return "[Axios v" + it + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, c) => {
    if (e === !1)
      throw new A(
        i(o, " has been removed" + (n ? " in " + n : "")),
        A.ERR_DEPRECATED
      );
    return n && !It[o] && (It[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, o, c) : !0;
  };
};
He.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function ms(t, e, n) {
  if (typeof t != "object" || t === null)
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = Object.prototype.hasOwnProperty.call(e, s) ? e[s] : void 0;
    if (o) {
      const c = t[s], f = c === void 0 || o(c, s, t);
      if (f !== !0)
        throw new A(
          "option " + s + " must be " + f,
          A.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new A("Unknown option " + s, A.ERR_BAD_OPTION);
  }
}
var Ie = {
  assertOptions: ms,
  validators: He
};
const C = Ie.validators;
class ce {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new At(),
      response: new At()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const s = (() => {
          if (!i.stack)
            return "";
          const o = i.stack.indexOf(`
`);
          return o === -1 ? "" : i.stack.slice(o + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const o = s.indexOf(`
`), c = o === -1 ? -1 : s.indexOf(`
`, o + 1), f = c === -1 ? "" : s.slice(c + 1);
            String(r.stack).endsWith(f) || (r.stack += `
` + s);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = le(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && Ie.assertOptions(
      r,
      {
        silentJSONParsing: C.transitional(C.boolean),
        forcedJSONParsing: C.transitional(C.boolean),
        clarifyTimeoutError: C.transitional(C.boolean),
        legacyInterceptorReqResOrdering: C.transitional(C.boolean),
        advertiseZstdAcceptEncoding: C.transitional(C.boolean),
        validateStatusUndefinedResolves: C.transitional(C.boolean)
      },
      !1
    ), i != null && (d.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Ie.assertOptions(
      i,
      {
        encode: C.function,
        serialize: C.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ie.assertOptions(
      n,
      {
        baseUrl: C.spelling("baseURL"),
        withXsrfToken: C.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && d.merge(s.common, s[n.method]);
    s && d.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (O) => {
      delete s[O];
    }), n.headers = B.concat(o, s);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      f = f && g.synchronous;
      const b = n.transitional || rt;
      b && b.legacyInterceptorReqResOrdering ? c.unshift(g.fulfilled, g.rejected) : c.push(g.fulfilled, g.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(g) {
      p.push(g.fulfilled, g.rejected);
    });
    let y, m = 0, S;
    if (!f) {
      const O = [Ut.bind(this), void 0];
      for (O.unshift(...c), O.push(...p), S = O.length, y = Promise.resolve(n); m < S; )
        y = y.then(O[m++], O[m++]);
      return y;
    }
    S = c.length;
    let _ = n;
    for (; m < S; ) {
      const O = c[m++], g = c[m++];
      try {
        _ = O(_);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      y = Ut.call(this, _);
    } catch (O) {
      return Promise.reject(O);
    }
    for (m = 0, S = p.length; m < S; )
      y = y.then(p[m++], p[m++]);
    return y;
  }
  getUri(e) {
    e = le(this.defaults, e);
    const n = nn(e.baseURL, e.url, e.allowAbsoluteUrls, e);
    return Yt(n, e.params, e.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(e) {
  ce.prototype[e] = function(n, r) {
    return this.request(
      le(r || {}, {
        method: e,
        url: n,
        data: r && d.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
d.forEach(["post", "put", "patch", "query"], function(e) {
  function n(r) {
    return function(s, o, c) {
      return this.request(
        le(c || {}, {
          method: e,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: o
        })
      );
    };
  }
  ce.prototype[e] = n(), e !== "query" && (ce.prototype[e + "Form"] = n(!0));
});
class at {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((c) => {
        r.subscribe(c), s = c;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, e(function(s, o, c) {
      r.reason || (r.reason = new ve(s, o, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new at(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function ws(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Es(t) {
  return d.isObject(t) && t.isAxiosError === !0;
}
const Qe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Qe).forEach(([t, e]) => {
  Qe[e] = t;
});
function an(t) {
  const e = new ce(t), n = Mt(ce.prototype.request, e);
  return d.extend(n, ce.prototype, e, { allOwnKeys: !0 }), d.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return an(le(t, i));
  }, n;
}
const F = an(Se);
F.Axios = ce;
F.CanceledError = ve;
F.CancelToken = at;
F.isCancel = en;
F.VERSION = it;
F.toFormData = ke;
F.AxiosError = A;
F.Cancel = F.CanceledError;
F.all = function(e) {
  return Promise.all(e);
};
F.spread = ws;
F.isAxiosError = Es;
F.mergeConfig = le;
F.AxiosHeaders = B;
F.formToJSON = (t) => Zt(d.isHTMLForm(t) ? new FormData(t) : t);
F.getAdapter = on.getAdapter;
F.HttpStatusCode = Qe;
F.default = F;
var bs = F;
const _s = {}, gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _s
}, Symbol.toStringTag, { value: "Module" })), se = /* @__PURE__ */ gn(gs);
var L = {};
L.NTLMFLAG_NEGOTIATE_UNICODE = 1;
L.NTLMFLAG_NEGOTIATE_OEM = 2;
L.NTLMFLAG_REQUEST_TARGET = 4;
L.NTLMFLAG_NEGOTIATE_SIGN = 16;
L.NTLMFLAG_NEGOTIATE_SEAL = 32;
L.NTLMFLAG_NEGOTIATE_DATAGRAM_STYLE = 64;
L.NTLMFLAG_NEGOTIATE_LM_KEY = 128;
L.NTLMFLAG_NEGOTIATE_NETWARE = 256;
L.NTLMFLAG_NEGOTIATE_NTLM_KEY = 512;
L.NTLMFLAG_NEGOTIATE_ANONYMOUS = 2048;
L.NTLMFLAG_NEGOTIATE_DOMAIN_SUPPLIED = 4096;
L.NTLMFLAG_NEGOTIATE_WORKSTATION_SUPPLIED = 8192;
L.NTLMFLAG_NEGOTIATE_LOCAL_CALL = 16384;
L.NTLMFLAG_NEGOTIATE_ALWAYS_SIGN = 32768;
L.NTLMFLAG_TARGET_TYPE_DOMAIN = 65536;
L.NTLMFLAG_TARGET_TYPE_SERVER = 1 << 17;
L.NTLMFLAG_TARGET_TYPE_SHARE = 1 << 18;
L.NTLMFLAG_NEGOTIATE_NTLM2_KEY = 1 << 19;
L.NTLMFLAG_REQUEST_INIT_RESPONSE = 1 << 20;
L.NTLMFLAG_REQUEST_ACCEPT_RESPONSE = 1 << 21;
L.NTLMFLAG_REQUEST_NONNT_SESSION_KEY = 1 << 22;
L.NTLMFLAG_NEGOTIATE_TARGET_INFO = 1 << 23;
L.NTLMFLAG_NEGOTIATE_128 = 1 << 29;
L.NTLMFLAG_NEGOTIATE_KEY_EXCHANGE = 1 << 30;
L.NTLMFLAG_NEGOTIATE_56 = 1 << 31;
var q = {};
q.readUInt32BE = function(e, n) {
  var r = e[0 + n] << 24 | e[1 + n] << 16 | e[2 + n] << 8 | e[3 + n];
  return r >>> 0;
};
q.writeUInt32BE = function(e, n, r) {
  e[0 + r] = n >>> 24, e[1 + r] = n >>> 16 & 255, e[2 + r] = n >>> 8 & 255, e[3 + r] = n & 255;
};
q.ip = function(e, n, r, i) {
  for (var s = 0, o = 0, c = 6; c >= 0; c -= 2) {
    for (var f = 0; f <= 24; f += 8)
      s <<= 1, s |= n >>> f + c & 1;
    for (var f = 0; f <= 24; f += 8)
      s <<= 1, s |= e >>> f + c & 1;
  }
  for (var c = 6; c >= 0; c -= 2) {
    for (var f = 1; f <= 25; f += 8)
      o <<= 1, o |= n >>> f + c & 1;
    for (var f = 1; f <= 25; f += 8)
      o <<= 1, o |= e >>> f + c & 1;
  }
  r[i + 0] = s >>> 0, r[i + 1] = o >>> 0;
};
q.rip = function(e, n, r, i) {
  for (var s = 0, o = 0, c = 0; c < 4; c++)
    for (var f = 24; f >= 0; f -= 8)
      s <<= 1, s |= n >>> f + c & 1, s <<= 1, s |= e >>> f + c & 1;
  for (var c = 4; c < 8; c++)
    for (var f = 24; f >= 0; f -= 8)
      o <<= 1, o |= n >>> f + c & 1, o <<= 1, o |= e >>> f + c & 1;
  r[i + 0] = s >>> 0, r[i + 1] = o >>> 0;
};
q.pc1 = function(e, n, r, i) {
  for (var s = 0, o = 0, c = 7; c >= 5; c--) {
    for (var f = 0; f <= 24; f += 8)
      s <<= 1, s |= n >> f + c & 1;
    for (var f = 0; f <= 24; f += 8)
      s <<= 1, s |= e >> f + c & 1;
  }
  for (var f = 0; f <= 24; f += 8)
    s <<= 1, s |= n >> f + c & 1;
  for (var c = 1; c <= 3; c++) {
    for (var f = 0; f <= 24; f += 8)
      o <<= 1, o |= n >> f + c & 1;
    for (var f = 0; f <= 24; f += 8)
      o <<= 1, o |= e >> f + c & 1;
  }
  for (var f = 0; f <= 24; f += 8)
    o <<= 1, o |= e >> f + c & 1;
  r[i + 0] = s >>> 0, r[i + 1] = o >>> 0;
};
q.r28shl = function(e, n) {
  return e << n & 268435455 | e >>> 28 - n;
};
var Fe = [
  // inL => outL
  14,
  11,
  17,
  4,
  27,
  23,
  25,
  0,
  13,
  22,
  7,
  18,
  5,
  9,
  16,
  24,
  2,
  20,
  12,
  21,
  1,
  8,
  15,
  26,
  // inR => outR
  15,
  4,
  25,
  19,
  9,
  1,
  26,
  16,
  5,
  11,
  23,
  8,
  12,
  7,
  17,
  0,
  22,
  3,
  10,
  14,
  6,
  20,
  27,
  24
];
q.pc2 = function(e, n, r, i) {
  for (var s = 0, o = 0, c = Fe.length >>> 1, f = 0; f < c; f++)
    s <<= 1, s |= e >>> Fe[f] & 1;
  for (var f = c; f < Fe.length; f++)
    o <<= 1, o |= n >>> Fe[f] & 1;
  r[i + 0] = s >>> 0, r[i + 1] = o >>> 0;
};
q.expand = function(e, n, r) {
  var i = 0, s = 0;
  i = (e & 1) << 5 | e >>> 27;
  for (var o = 23; o >= 15; o -= 4)
    i <<= 6, i |= e >>> o & 63;
  for (var o = 11; o >= 3; o -= 4)
    s |= e >>> o & 63, s <<= 6;
  s |= (e & 31) << 1 | e >>> 31, n[r + 0] = i >>> 0, n[r + 1] = s >>> 0;
};
var Ct = [
  14,
  0,
  4,
  15,
  13,
  7,
  1,
  4,
  2,
  14,
  15,
  2,
  11,
  13,
  8,
  1,
  3,
  10,
  10,
  6,
  6,
  12,
  12,
  11,
  5,
  9,
  9,
  5,
  0,
  3,
  7,
  8,
  4,
  15,
  1,
  12,
  14,
  8,
  8,
  2,
  13,
  4,
  6,
  9,
  2,
  1,
  11,
  7,
  15,
  5,
  12,
  11,
  9,
  3,
  7,
  14,
  3,
  10,
  10,
  0,
  5,
  6,
  0,
  13,
  15,
  3,
  1,
  13,
  8,
  4,
  14,
  7,
  6,
  15,
  11,
  2,
  3,
  8,
  4,
  14,
  9,
  12,
  7,
  0,
  2,
  1,
  13,
  10,
  12,
  6,
  0,
  9,
  5,
  11,
  10,
  5,
  0,
  13,
  14,
  8,
  7,
  10,
  11,
  1,
  10,
  3,
  4,
  15,
  13,
  4,
  1,
  2,
  5,
  11,
  8,
  6,
  12,
  7,
  6,
  12,
  9,
  0,
  3,
  5,
  2,
  14,
  15,
  9,
  10,
  13,
  0,
  7,
  9,
  0,
  14,
  9,
  6,
  3,
  3,
  4,
  15,
  6,
  5,
  10,
  1,
  2,
  13,
  8,
  12,
  5,
  7,
  14,
  11,
  12,
  4,
  11,
  2,
  15,
  8,
  1,
  13,
  1,
  6,
  10,
  4,
  13,
  9,
  0,
  8,
  6,
  15,
  9,
  3,
  8,
  0,
  7,
  11,
  4,
  1,
  15,
  2,
  14,
  12,
  3,
  5,
  11,
  10,
  5,
  14,
  2,
  7,
  12,
  7,
  13,
  13,
  8,
  14,
  11,
  3,
  5,
  0,
  6,
  6,
  15,
  9,
  0,
  10,
  3,
  1,
  4,
  2,
  7,
  8,
  2,
  5,
  12,
  11,
  1,
  12,
  10,
  4,
  14,
  15,
  9,
  10,
  3,
  6,
  15,
  9,
  0,
  0,
  6,
  12,
  10,
  11,
  1,
  7,
  13,
  13,
  8,
  15,
  9,
  1,
  4,
  3,
  5,
  14,
  11,
  5,
  12,
  2,
  7,
  8,
  2,
  4,
  14,
  2,
  14,
  12,
  11,
  4,
  2,
  1,
  12,
  7,
  4,
  10,
  7,
  11,
  13,
  6,
  1,
  8,
  5,
  5,
  0,
  3,
  15,
  15,
  10,
  13,
  3,
  0,
  9,
  14,
  8,
  9,
  6,
  4,
  11,
  2,
  8,
  1,
  12,
  11,
  7,
  10,
  1,
  13,
  14,
  7,
  2,
  8,
  13,
  15,
  6,
  9,
  15,
  12,
  0,
  5,
  9,
  6,
  10,
  3,
  4,
  0,
  5,
  14,
  3,
  12,
  10,
  1,
  15,
  10,
  4,
  15,
  2,
  9,
  7,
  2,
  12,
  6,
  9,
  8,
  5,
  0,
  6,
  13,
  1,
  3,
  13,
  4,
  14,
  14,
  0,
  7,
  11,
  5,
  3,
  11,
  8,
  9,
  4,
  14,
  3,
  15,
  2,
  5,
  12,
  2,
  9,
  8,
  5,
  12,
  15,
  3,
  10,
  7,
  11,
  0,
  14,
  4,
  1,
  10,
  7,
  1,
  6,
  13,
  0,
  11,
  8,
  6,
  13,
  4,
  13,
  11,
  0,
  2,
  11,
  14,
  7,
  15,
  4,
  0,
  9,
  8,
  1,
  13,
  10,
  3,
  14,
  12,
  3,
  9,
  5,
  7,
  12,
  5,
  2,
  10,
  15,
  6,
  8,
  1,
  6,
  1,
  6,
  4,
  11,
  11,
  13,
  13,
  8,
  12,
  1,
  3,
  4,
  7,
  10,
  14,
  7,
  10,
  9,
  15,
  5,
  6,
  0,
  8,
  15,
  0,
  14,
  5,
  2,
  9,
  3,
  2,
  12,
  13,
  1,
  2,
  15,
  8,
  13,
  4,
  8,
  6,
  10,
  15,
  3,
  11,
  7,
  1,
  4,
  10,
  12,
  9,
  5,
  3,
  6,
  14,
  11,
  5,
  0,
  0,
  14,
  12,
  9,
  7,
  2,
  7,
  2,
  11,
  1,
  4,
  14,
  1,
  7,
  9,
  4,
  12,
  10,
  14,
  8,
  2,
  13,
  0,
  15,
  6,
  12,
  10,
  9,
  13,
  0,
  15,
  3,
  3,
  5,
  5,
  6,
  8,
  11
];
q.substitute = function(e, n) {
  for (var r = 0, i = 0; i < 4; i++) {
    var s = e >>> 18 - i * 6 & 63, o = Ct[i * 64 + s];
    r <<= 4, r |= o;
  }
  for (var i = 0; i < 4; i++) {
    var s = n >>> 18 - i * 6 & 63, o = Ct[4 * 64 + i * 64 + s];
    r <<= 4, r |= o;
  }
  return r >>> 0;
};
var Dt = [
  16,
  25,
  12,
  11,
  3,
  20,
  4,
  15,
  31,
  17,
  9,
  6,
  27,
  14,
  1,
  22,
  30,
  24,
  8,
  18,
  0,
  5,
  29,
  23,
  13,
  19,
  2,
  26,
  10,
  21,
  28,
  7
];
q.permute = function(e) {
  for (var n = 0, r = 0; r < Dt.length; r++)
    n <<= 1, n |= e >>> Dt[r] & 1;
  return n >>> 0;
};
q.padSplit = function(e, n, r) {
  for (var i = e.toString(2); i.length < n; )
    i = "0" + i;
  for (var s = [], o = 0; o < n; o += r)
    s.push(i.slice(o, o + r));
  return s.join(" ");
};
var ze = cn;
function cn(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
cn.equal = function(e, n, r) {
  if (e != n)
    throw new Error(r || "Assertion failed: " + e + " != " + n);
};
var As = ze;
function G(t) {
  this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0, this.padding = t.padding !== !1;
}
var un = G;
G.prototype._init = function() {
};
G.prototype.update = function(e) {
  return e.length === 0 ? [] : this.type === "decrypt" ? this._updateDecrypt(e) : this._updateEncrypt(e);
};
G.prototype._buffer = function(e, n) {
  for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - n), i = 0; i < r; i++)
    this.buffer[this.bufferOff + i] = e[n + i];
  return this.bufferOff += r, r;
};
G.prototype._flushBuffer = function(e, n) {
  return this._update(this.buffer, 0, e, n), this.bufferOff = 0, this.blockSize;
};
G.prototype._updateEncrypt = function(e) {
  var n = 0, r = 0, i = (this.bufferOff + e.length) / this.blockSize | 0, s = new Array(i * this.blockSize);
  this.bufferOff !== 0 && (n += this._buffer(e, n), this.bufferOff === this.buffer.length && (r += this._flushBuffer(s, r)));
  for (var o = e.length - (e.length - n) % this.blockSize; n < o; n += this.blockSize)
    this._update(e, n, s, r), r += this.blockSize;
  for (; n < e.length; n++, this.bufferOff++)
    this.buffer[this.bufferOff] = e[n];
  return s;
};
G.prototype._updateDecrypt = function(e) {
  for (var n = 0, r = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, s = new Array(i * this.blockSize); i > 0; i--)
    n += this._buffer(e, n), r += this._flushBuffer(s, r);
  return n += this._buffer(e, n), s;
};
G.prototype.final = function(e) {
  var n;
  e && (n = this.update(e));
  var r;
  return this.type === "encrypt" ? r = this._finalEncrypt() : r = this._finalDecrypt(), n ? n.concat(r) : r;
};
G.prototype._pad = function(e, n) {
  if (n === 0)
    return !1;
  for (; n < e.length; )
    e[n++] = 0;
  return !0;
};
G.prototype._finalEncrypt = function() {
  if (!this._pad(this.buffer, this.bufferOff))
    return [];
  var e = new Array(this.blockSize);
  return this._update(this.buffer, 0, e, 0), e;
};
G.prototype._unpad = function(e) {
  return e;
};
G.prototype._finalDecrypt = function() {
  As.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  var e = new Array(this.blockSize);
  return this._flushBuffer(e, 0), this._unpad(e);
};
var Ze = { exports: {} };
typeof Object.create == "function" ? Ze.exports = function(e, n) {
  n && (e.super_ = n, e.prototype = Object.create(n.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Ze.exports = function(e, n) {
  if (n) {
    e.super_ = n;
    var r = function() {
    };
    r.prototype = n.prototype, e.prototype = new r(), e.prototype.constructor = e;
  }
};
var ct = Ze.exports, ln = ze, Rs = ct, P = q, fn = un;
function Os() {
  this.tmp = new Array(2), this.keys = null;
}
function V(t) {
  fn.call(this, t);
  var e = new Os();
  this._desState = e, this.deriveKeys(e, t.key);
}
Rs(V, fn);
var Ts = V;
V.create = function(e) {
  return new V(e);
};
var Ss = [
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1
];
V.prototype.deriveKeys = function(e, n) {
  e.keys = new Array(16 * 2), ln.equal(n.length, this.blockSize, "Invalid key length");
  var r = P.readUInt32BE(n, 0), i = P.readUInt32BE(n, 4);
  P.pc1(r, i, e.tmp, 0), r = e.tmp[0], i = e.tmp[1];
  for (var s = 0; s < e.keys.length; s += 2) {
    var o = Ss[s >>> 1];
    r = P.r28shl(r, o), i = P.r28shl(i, o), P.pc2(r, i, e.keys, s);
  }
};
V.prototype._update = function(e, n, r, i) {
  var s = this._desState, o = P.readUInt32BE(e, n), c = P.readUInt32BE(e, n + 4);
  P.ip(o, c, s.tmp, 0), o = s.tmp[0], c = s.tmp[1], this.type === "encrypt" ? this._encrypt(s, o, c, s.tmp, 0) : this._decrypt(s, o, c, s.tmp, 0), o = s.tmp[0], c = s.tmp[1], P.writeUInt32BE(r, o, i), P.writeUInt32BE(r, c, i + 4);
};
V.prototype._pad = function(e, n) {
  if (this.padding === !1)
    return !1;
  for (var r = e.length - n, i = n; i < e.length; i++)
    e[i] = r;
  return !0;
};
V.prototype._unpad = function(e) {
  if (this.padding === !1)
    return e;
  for (var n = e[e.length - 1], r = e.length - n; r < e.length; r++)
    ln.equal(e[r], n);
  return e.slice(0, e.length - n);
};
V.prototype._encrypt = function(e, n, r, i, s) {
  for (var o = n, c = r, f = 0; f < e.keys.length; f += 2) {
    var p = e.keys[f], y = e.keys[f + 1];
    P.expand(c, e.tmp, 0), p ^= e.tmp[0], y ^= e.tmp[1];
    var m = P.substitute(p, y), S = P.permute(m), _ = c;
    c = (o ^ S) >>> 0, o = _;
  }
  P.rip(c, o, i, s);
};
V.prototype._decrypt = function(e, n, r, i, s) {
  for (var o = r, c = n, f = e.keys.length - 2; f >= 0; f -= 2) {
    var p = e.keys[f], y = e.keys[f + 1];
    P.expand(o, e.tmp, 0), p ^= e.tmp[0], y ^= e.tmp[1];
    var m = P.substitute(p, y), S = P.permute(m), _ = o;
    o = (c ^ S) >>> 0, c = _;
  }
  P.rip(o, c, i, s);
};
var vs = {}, xs = ze, Ns = ct, Me = {};
function Ls(t) {
  xs.equal(t.length, 8, "Invalid IV length"), this.iv = new Array(8);
  for (var e = 0; e < this.iv.length; e++)
    this.iv[e] = t[e];
}
function Fs(t) {
  function e(s) {
    t.call(this, s), this._cbcInit();
  }
  Ns(e, t);
  for (var n = Object.keys(Me), r = 0; r < n.length; r++) {
    var i = n[r];
    e.prototype[i] = Me[i];
  }
  return e.create = function(o) {
    return new e(o);
  }, e;
}
vs.instantiate = Fs;
Me._cbcInit = function() {
  var e = new Ls(this.options.iv);
  this._cbcState = e;
};
Me._update = function(e, n, r, i) {
  var s = this._cbcState, o = this.constructor.super_.prototype, c = s.iv;
  if (this.type === "encrypt") {
    for (var f = 0; f < this.blockSize; f++)
      c[f] ^= e[n + f];
    o._update.call(this, c, 0, r, i);
    for (var f = 0; f < this.blockSize; f++)
      c[f] = r[i + f];
  } else {
    o._update.call(this, e, n, r, i);
    for (var f = 0; f < this.blockSize; f++)
      r[i + f] ^= c[f];
    for (var f = 0; f < this.blockSize; f++)
      c[f] = e[n + f];
  }
};
var Ps = ze, Us = ct, dn = un, ee = Ts;
function Is(t, e) {
  Ps.equal(e.length, 24, "Invalid key length");
  var n = e.slice(0, 8), r = e.slice(8, 16), i = e.slice(16, 24);
  t === "encrypt" ? this.ciphers = [
    ee.create({ type: "encrypt", key: n }),
    ee.create({ type: "decrypt", key: r }),
    ee.create({ type: "encrypt", key: i })
  ] : this.ciphers = [
    ee.create({ type: "decrypt", key: i }),
    ee.create({ type: "encrypt", key: r }),
    ee.create({ type: "decrypt", key: n })
  ];
}
function ye(t) {
  dn.call(this, t);
  var e = new Is(this.type, this.options.key);
  this._edeState = e;
}
Us(ye, dn);
ye.create = function(e) {
  return new ye(e);
};
ye.prototype._update = function(e, n, r, i) {
  var s = this._edeState;
  s.ciphers[0]._update(e, n, r, i), s.ciphers[1]._update(r, i, r, i), s.ciphers[2]._update(r, i, r, i);
};
ye.prototype._pad = ee.prototype._pad;
ye.prototype._unpad = ee.prototype._unpad;
var hn = { exports: {} };
/**
 * [js-md4]{@link https://github.com/emn178/js-md4}
 *
 * @namespace md4
 * @version 0.3.2
 * @author Yi-Cyuan Chen [emn178@gmail.com]
 * @copyright Yi-Cyuan Chen 2015-2027
 * @license MIT
 */
(function(t) {
  (function() {
    var e = typeof window == "object" ? window : {}, n = !e.JS_MD4_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    n && (e = D);
    var r = !e.JS_MD4_NO_COMMON_JS && !0 && t.exports, i = !e.JS_MD4_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", s = "0123456789abcdef".split(""), o = [128, 32768, 8388608, -2147483648], c = [0, 8, 16, 24], f = ["hex", "array", "digest", "buffer", "arrayBuffer"], p = [], y;
    if (i) {
      var m = new ArrayBuffer(68);
      y = new Uint8Array(m), p = new Uint32Array(m);
    }
    var S = function(a) {
      return function(l) {
        return new g(!0).update(l)[a]();
      };
    }, _ = function() {
      var a = S("hex");
      n && (a = O(a)), a.create = function() {
        return new g();
      }, a.update = function(h) {
        return a.create().update(h);
      };
      for (var l = 0; l < f.length; ++l) {
        var u = f[l];
        a[u] = S(u);
      }
      return a;
    }, O = function(a) {
      var l = se, u = se.Buffer, h = function(w) {
        if (typeof w == "string")
          return l.createHash("md4").update(w, "utf8").digest("hex");
        if (i && w instanceof ArrayBuffer)
          w = new Uint8Array(w);
        else if (w.length === void 0)
          return a(w);
        return l.createHash("md4").update(new u(w)).digest("hex");
      };
      return h;
    };
    function g(a) {
      if (a)
        p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0, this.blocks = p, this.buffer8 = y;
      else if (i) {
        var l = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(l), this.blocks = new Uint32Array(l);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    g.prototype.update = function(a) {
      if (!this.finalized) {
        var l = typeof a != "string";
        l && i && a instanceof ArrayBuffer && (a = new Uint8Array(a));
        for (var u, h = 0, w, E = a.length || 0, R = this.blocks, v = this.buffer8; h < E; ) {
          if (this.hashed && (this.hashed = !1, R[0] = R[16], R[16] = R[1] = R[2] = R[3] = R[4] = R[5] = R[6] = R[7] = R[8] = R[9] = R[10] = R[11] = R[12] = R[13] = R[14] = R[15] = 0), l)
            if (i)
              for (w = this.start; h < E && w < 64; ++h)
                v[w++] = a[h];
            else
              for (w = this.start; h < E && w < 64; ++h)
                R[w >> 2] |= a[h] << c[w++ & 3];
          else if (i)
            for (w = this.start; h < E && w < 64; ++h)
              u = a.charCodeAt(h), u < 128 ? v[w++] = u : u < 2048 ? (v[w++] = 192 | u >> 6, v[w++] = 128 | u & 63) : u < 55296 || u >= 57344 ? (v[w++] = 224 | u >> 12, v[w++] = 128 | u >> 6 & 63, v[w++] = 128 | u & 63) : (u = 65536 + ((u & 1023) << 10 | a.charCodeAt(++h) & 1023), v[w++] = 240 | u >> 18, v[w++] = 128 | u >> 12 & 63, v[w++] = 128 | u >> 6 & 63, v[w++] = 128 | u & 63);
          else
            for (w = this.start; h < E && w < 64; ++h)
              u = a.charCodeAt(h), u < 128 ? R[w >> 2] |= u << c[w++ & 3] : u < 2048 ? (R[w >> 2] |= (192 | u >> 6) << c[w++ & 3], R[w >> 2] |= (128 | u & 63) << c[w++ & 3]) : u < 55296 || u >= 57344 ? (R[w >> 2] |= (224 | u >> 12) << c[w++ & 3], R[w >> 2] |= (128 | u >> 6 & 63) << c[w++ & 3], R[w >> 2] |= (128 | u & 63) << c[w++ & 3]) : (u = 65536 + ((u & 1023) << 10 | a.charCodeAt(++h) & 1023), R[w >> 2] |= (240 | u >> 18) << c[w++ & 3], R[w >> 2] |= (128 | u >> 12 & 63) << c[w++ & 3], R[w >> 2] |= (128 | u >> 6 & 63) << c[w++ & 3], R[w >> 2] |= (128 | u & 63) << c[w++ & 3]);
          this.lastByteIndex = w, this.bytes += w - this.start, w >= 64 ? (this.start = w - 64, this.hash(), this.hashed = !0) : this.start = w;
        }
        return this;
      }
    }, g.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var a = this.blocks, l = this.lastByteIndex;
        a[l >> 2] |= o[l & 3], l >= 56 && (this.hashed || this.hash(), a[0] = a[16], a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), a[14] = this.bytes << 3, this.hash();
      }
    }, g.prototype.hash = function() {
      var a, l, u, h, w, E, R, v, T = this.blocks;
      this.first ? (a = T[0] - 1, a = a << 3 | a >>> 29, h = (a & 4023233417 | ~a & 2562383102) + T[1] + 271733878, h = h << 7 | h >>> 25, u = (h & a | ~h & 4023233417) + T[2] - 1732584194, u = u << 11 | u >>> 21, l = (u & h | ~u & a) + T[3] - 271733879, l = l << 19 | l >>> 13) : (a = this.h0, l = this.h1, u = this.h2, h = this.h3, a += (l & u | ~l & h) + T[0], a = a << 3 | a >>> 29, h += (a & l | ~a & u) + T[1], h = h << 7 | h >>> 25, u += (h & a | ~h & l) + T[2], u = u << 11 | u >>> 21, l += (u & h | ~u & a) + T[3], l = l << 19 | l >>> 13), a += (l & u | ~l & h) + T[4], a = a << 3 | a >>> 29, h += (a & l | ~a & u) + T[5], h = h << 7 | h >>> 25, u += (h & a | ~h & l) + T[6], u = u << 11 | u >>> 21, l += (u & h | ~u & a) + T[7], l = l << 19 | l >>> 13, a += (l & u | ~l & h) + T[8], a = a << 3 | a >>> 29, h += (a & l | ~a & u) + T[9], h = h << 7 | h >>> 25, u += (h & a | ~h & l) + T[10], u = u << 11 | u >>> 21, l += (u & h | ~u & a) + T[11], l = l << 19 | l >>> 13, a += (l & u | ~l & h) + T[12], a = a << 3 | a >>> 29, h += (a & l | ~a & u) + T[13], h = h << 7 | h >>> 25, u += (h & a | ~h & l) + T[14], u = u << 11 | u >>> 21, l += (u & h | ~u & a) + T[15], l = l << 19 | l >>> 13, E = l & u, a += (E | l & h | u & h) + T[0] + 1518500249, a = a << 3 | a >>> 29, w = a & l, h += (w | a & u | E) + T[4] + 1518500249, h = h << 5 | h >>> 27, v = h & a, u += (v | h & l | w) + T[8] + 1518500249, u = u << 9 | u >>> 23, R = u & h, l += (R | u & a | v) + T[12] + 1518500249, l = l << 13 | l >>> 19, E = l & u, a += (E | l & h | R) + T[1] + 1518500249, a = a << 3 | a >>> 29, w = a & l, h += (w | a & u | E) + T[5] + 1518500249, h = h << 5 | h >>> 27, v = h & a, u += (v | h & l | w) + T[9] + 1518500249, u = u << 9 | u >>> 23, R = u & h, l += (R | u & a | v) + T[13] + 1518500249, l = l << 13 | l >>> 19, E = l & u, a += (E | l & h | R) + T[2] + 1518500249, a = a << 3 | a >>> 29, w = a & l, h += (w | a & u | E) + T[6] + 1518500249, h = h << 5 | h >>> 27, v = h & a, u += (v | h & l | w) + T[10] + 1518500249, u = u << 9 | u >>> 23, R = u & h, l += (R | u & a | v) + T[14] + 1518500249, l = l << 13 | l >>> 19, E = l & u, a += (E | l & h | R) + T[3] + 1518500249, a = a << 3 | a >>> 29, w = a & l, h += (w | a & u | E) + T[7] + 1518500249, h = h << 5 | h >>> 27, v = h & a, u += (v | h & l | w) + T[11] + 1518500249, u = u << 9 | u >>> 23, l += (u & h | u & a | v) + T[15] + 1518500249, l = l << 13 | l >>> 19, E = l ^ u, a += (E ^ h) + T[0] + 1859775393, a = a << 3 | a >>> 29, h += (E ^ a) + T[8] + 1859775393, h = h << 9 | h >>> 23, v = h ^ a, u += (v ^ l) + T[4] + 1859775393, u = u << 11 | u >>> 21, l += (v ^ u) + T[12] + 1859775393, l = l << 15 | l >>> 17, E = l ^ u, a += (E ^ h) + T[2] + 1859775393, a = a << 3 | a >>> 29, h += (E ^ a) + T[10] + 1859775393, h = h << 9 | h >>> 23, v = h ^ a, u += (v ^ l) + T[6] + 1859775393, u = u << 11 | u >>> 21, l += (v ^ u) + T[14] + 1859775393, l = l << 15 | l >>> 17, E = l ^ u, a += (E ^ h) + T[1] + 1859775393, a = a << 3 | a >>> 29, h += (E ^ a) + T[9] + 1859775393, h = h << 9 | h >>> 23, v = h ^ a, u += (v ^ l) + T[5] + 1859775393, u = u << 11 | u >>> 21, l += (v ^ u) + T[13] + 1859775393, l = l << 15 | l >>> 17, E = l ^ u, a += (E ^ h) + T[3] + 1859775393, a = a << 3 | a >>> 29, h += (E ^ a) + T[11] + 1859775393, h = h << 9 | h >>> 23, v = h ^ a, u += (v ^ l) + T[7] + 1859775393, u = u << 11 | u >>> 21, l += (v ^ u) + T[15] + 1859775393, l = l << 15 | l >>> 17, this.first ? (this.h0 = a + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = u - 1732584194 << 0, this.h3 = h + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + a << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + h << 0);
    }, g.prototype.hex = function() {
      this.finalize();
      var a = this.h0, l = this.h1, u = this.h2, h = this.h3;
      return s[a >> 4 & 15] + s[a & 15] + s[a >> 12 & 15] + s[a >> 8 & 15] + s[a >> 20 & 15] + s[a >> 16 & 15] + s[a >> 28 & 15] + s[a >> 24 & 15] + s[l >> 4 & 15] + s[l & 15] + s[l >> 12 & 15] + s[l >> 8 & 15] + s[l >> 20 & 15] + s[l >> 16 & 15] + s[l >> 28 & 15] + s[l >> 24 & 15] + s[u >> 4 & 15] + s[u & 15] + s[u >> 12 & 15] + s[u >> 8 & 15] + s[u >> 20 & 15] + s[u >> 16 & 15] + s[u >> 28 & 15] + s[u >> 24 & 15] + s[h >> 4 & 15] + s[h & 15] + s[h >> 12 & 15] + s[h >> 8 & 15] + s[h >> 20 & 15] + s[h >> 16 & 15] + s[h >> 28 & 15] + s[h >> 24 & 15];
    }, g.prototype.toString = g.prototype.hex, g.prototype.digest = function() {
      this.finalize();
      var a = this.h0, l = this.h1, u = this.h2, h = this.h3;
      return [
        a & 255,
        a >> 8 & 255,
        a >> 16 & 255,
        a >> 24 & 255,
        l & 255,
        l >> 8 & 255,
        l >> 16 & 255,
        l >> 24 & 255,
        u & 255,
        u >> 8 & 255,
        u >> 16 & 255,
        u >> 24 & 255,
        h & 255,
        h >> 8 & 255,
        h >> 16 & 255,
        h >> 24 & 255
      ];
    }, g.prototype.array = g.prototype.digest, g.prototype.arrayBuffer = function() {
      this.finalize();
      var a = new ArrayBuffer(16), l = new Uint32Array(a);
      return l[0] = this.h0, l[1] = this.h1, l[2] = this.h2, l[3] = this.h3, a;
    }, g.prototype.buffer = g.prototype.arrayBuffer;
    var b = _();
    r ? t.exports = b : e.md4 = b;
  })();
})(hn);
var Cs = hn.exports, ut = se, Ds = Cs;
function Bs(t, e) {
  var n = new Buffer.alloc(24), r = new Buffer.alloc(21).fill(0);
  return e.copy(r), ne(r.slice(0, 7), t).copy(n), ne(r.slice(7, 14), t).copy(n, 8), ne(r.slice(14), t).copy(n, 16), n;
}
function Ms(t) {
  var e = new Buffer.alloc(16), n = new Buffer.alloc(14), r = new Buffer.from("KGS!@#$%", "ascii");
  return t.length > 14 ? (e.fill(0), e) : (n.fill(0), n.write(t.toUpperCase(), 0, "ascii"), Buffer.concat([
    ne(n.slice(0, 7), r),
    ne(n.slice(7), r)
  ]));
}
function ne(t, e) {
  var n = new Buffer.alloc(8);
  n[0] = t[0] & 254, n[1] = t[0] << 7 & 255 | t[1] >> 1, n[2] = t[1] << 6 & 255 | t[2] >> 2, n[3] = t[2] << 5 & 255 | t[3] >> 3, n[4] = t[3] << 4 & 255 | t[4] >> 4, n[5] = t[4] << 3 & 255 | t[5] >> 5, n[6] = t[5] << 2 & 255 | t[6] >> 6, n[7] = t[6] << 1 & 255;
  for (var r = 0; r < 8; r++) {
    for (var i = 0, s = 1; s < 8; s++)
      i += (n[r] >> s) % 2;
    n[r] |= i % 2 === 0 ? 1 : 0;
  }
  var o = o.DES.create({ type: "encrypt", ley: n });
  return o.update(e);
}
function js(t, e) {
  var n = new Buffer.alloc(24), r = new Buffer.alloc(21).fill(0);
  return e.copy(r), ne(r.slice(0, 7), t).copy(n), ne(r.slice(7, 14), t).copy(n, 8), ne(r.slice(14), t).copy(n, 16), n;
}
function ks(t) {
  var e = Ds.create();
  return e.update(new Buffer.from(t, "ucs2")), e.buffer();
}
function pn(t, e, n) {
  var r = ut.createHmac("md5", t);
  return r.update(new Buffer.from(e.toUpperCase() + n, "ucs2")), r.digest();
}
function Hs(t, e, n, r, i) {
  var s = new Buffer.alloc(24), o = pn(n, e, i), c = ut.createHmac("md5", o);
  t.challenge.copy(s, 8), s.write(r || lt(16), 16, "hex"), c.update(s.slice(8));
  var f = c.digest();
  return f.copy(s), s;
}
function zs(t, e, n, r, i) {
  var s = new Buffer.alloc(48 + t.targetInfo.buffer.length), o = pn(n, e, i), c = ut.createHmac("md5", o);
  t.challenge.copy(s, 8), s.writeUInt32BE(16842752, 16), s.writeUInt32LE(0, 20);
  var f = ((Date.now() + 116444736e5) * 1e4).toString(16), p = +("0x" + f.substring(Math.max(0, f.length - 8))), y = +("0x" + f.substring(0, Math.max(0, f.length - 8)));
  s.writeUInt32LE(p, 24, !1), s.writeUInt32LE(y, 28, !1), s.write(r || lt(16), 32, "hex"), s.writeUInt32LE(0, 40), t.targetInfo.buffer.copy(s, 44), s.writeUInt32LE(0, 44 + t.targetInfo.buffer.length), c.update(s.slice(8));
  var m = c.digest();
  return m.copy(s), s;
}
function lt(t) {
  for (var e = ""; e.length < t; )
    e += Math.floor(Math.random() * 16).toString(16);
  return e;
}
var qs = {
  createLMHash: Ms,
  createNTLMHash: ks,
  createLMResponse: Bs,
  createNTLMResponse: js,
  createLMv2Response: Hs,
  createNTLMv2Response: zs,
  createPseudoRandomValue: lt
}, yn = se, te = L, Z = qs, re = "NTLMSSP\0";
function Gs(t, e) {
  var n = 32, r = 0, i = new Buffer.alloc(1024);
  return t = t === void 0 ? yn.hostname() : t, e = e === void 0 ? "" : e, i.write(re, r, re.length, "ascii"), r += re.length, i.writeUInt32LE(1, r), r += 4, i.writeUInt32LE(te.NTLMFLAG_NEGOTIATE_OEM | te.NTLMFLAG_REQUEST_TARGET | te.NTLMFLAG_NEGOTIATE_NTLM_KEY | te.NTLMFLAG_NEGOTIATE_NTLM2_KEY | te.NTLMFLAG_NEGOTIATE_ALWAYS_SIGN, r), r += 4, i.writeUInt16LE(e.length, r), r += 2, i.writeUInt16LE(e.length, r), r += 2, i.writeUInt32LE(e.length === 0 ? 0 : n, r), r += 4, e.length > 0 && (n += i.write(e, n, "ascii")), i.writeUInt16LE(t.length, r), r += 2, i.writeUInt16LE(t.length, r), r += 2, i.writeUInt32LE(t.length === 0 ? 0 : n, r), r += 4, t.length > 0 && (n += i.write(t, n, "ascii")), "NTLM " + i.toString("base64", 0, n);
}
function $s(t) {
  if (t === void 0)
    throw new Error("Invalid argument");
  if (Object.prototype.toString.call(t) !== "[object String]")
    if (t.hasOwnProperty("headers") && t.headers.hasOwnProperty("www-authenticate"))
      t = t.headers["www-authenticate"];
    else
      throw new Error("Invalid argument");
  var e = /^NTLM ([^,\s]+)/.exec(t);
  e && (t = e[1]);
  var n = new Buffer.from(t, "base64"), r = {};
  if (n.toString("ascii", 0, re.length) !== re)
    throw new Error("Invalid message signature: " + t);
  if (n.readUInt32LE(re.length) !== 2)
    throw new Error("Invalid message type (no type 2)");
  return r.flags = n.readUInt32LE(20), r.encoding = r.flags & te.NTLMFLAG_NEGOTIATE_OEM ? "ascii" : "ucs2", r.version = r.flags & te.NTLMFLAG_NEGOTIATE_NTLM2_KEY ? 2 : 1, r.challenge = n.slice(24, 32), r.targetName = function() {
    var i = n.readUInt16LE(12), s = n.readUInt32LE(16);
    if (i === 0)
      return "";
    if (s + i > n.length || s < 32)
      throw new Error("Bad type 2 message");
    return n.toString(r.encoding, s, s + i);
  }(), r.flags & te.NTLMFLAG_NEGOTIATE_TARGET_INFO && (r.targetInfo = function() {
    var i = {}, s = n.readUInt16LE(40), o = n.readUInt32LE(44), c = new Buffer.alloc(s);
    if (n.copy(c, 0, o, o + s), s === 0)
      return i;
    if (o + s > n.length || o < 32)
      throw new Error("Bad type 2 message");
    for (var f = o; f < o + s; ) {
      var p = n.readUInt16LE(f);
      f += 2;
      var y = n.readUInt16LE(f);
      if (f += 2, p === 0)
        break;
      var m = void 0;
      switch (p) {
        case 1:
          m = "SERVER";
          break;
        case 2:
          m = "DOMAIN";
          break;
        case 3:
          m = "FQDN";
          break;
        case 4:
          m = "DNS";
          break;
        case 5:
          m = "PARENT_DNS";
          break;
        default:
          m = "";
          break;
      }
      m && (i[m] = n.toString("ucs2", f, f + y)), f += y;
    }
    return {
      parsed: i,
      buffer: c
    };
  }()), r;
}
function Js(t, e, n, r, i) {
  var s = 52, o = new Buffer.alloc(1024);
  if (r === void 0 && (r = yn.hostname()), i === void 0 && (i = t.targetName), o.write(re, 0, re.length, "ascii"), o.writeUInt32LE(3, 8), t.version === 2) {
    s = 64;
    var c = Z.createNTLMHash(n), f = Z.createPseudoRandomValue(16), p = Z.createLMv2Response(t, e, c, f, i), y = Z.createNTLMv2Response(t, e, c, f, i);
    o.writeUInt16LE(p.length, 12), o.writeUInt16LE(p.length, 14), o.writeUInt32LE(s, 16), p.copy(o, s), s += p.length, o.writeUInt16LE(y.length, 20), o.writeUInt16LE(y.length, 22), o.writeUInt32LE(s, 24), y.copy(o, s), s += y.length;
  } else {
    var m = Z.createLMHash(n), c = Z.createNTLMHash(n), S = Z.createLMResponse(t.challenge, m), _ = Z.createNTLMResponse(t.challenge, c);
    o.writeUInt16LE(S.length, 12), o.writeUInt16LE(S.length, 14), o.writeUInt32LE(s, 16), S.copy(o, s), s += S.length, o.writeUInt16LE(_.length, 20), o.writeUInt16LE(_.length, 22), o.writeUInt32LE(s, 24), _.copy(o, s), s += _.length;
  }
  return o.writeUInt16LE(t.encoding === "ascii" ? i.length : i.length * 2, 28), o.writeUInt16LE(t.encoding === "ascii" ? i.length : i.length * 2, 30), o.writeUInt32LE(s, 32), s += o.write(i, s, t.encoding), o.writeUInt16LE(t.encoding === "ascii" ? e.length : e.length * 2, 36), o.writeUInt16LE(t.encoding === "ascii" ? e.length : e.length * 2, 38), o.writeUInt32LE(s, 40), s += o.write(e, s, t.encoding), o.writeUInt16LE(t.encoding === "ascii" ? r.length : r.length * 2, 44), o.writeUInt16LE(t.encoding === "ascii" ? r.length : r.length * 2, 46), o.writeUInt32LE(s, 48), s += o.write(r, s, t.encoding), t.version === 2 && (o.writeUInt16LE(0, 52), o.writeUInt16LE(0, 54), o.writeUInt32LE(0, 56), o.writeUInt32LE(t.flags, 60)), "NTLM " + o.toString("base64", 0, s);
}
var Vs = {
  createType1Message: Gs,
  decodeType2Message: $s,
  createType3Message: Js
}, Ks = se, Ws = se, mn = Ws.Writable, wn = wn || function(t) {
  setTimeout(t, 0);
}, Xs = Re;
Ks.inherits(Re, mn);
function Re(t) {
  if (!(this instanceof Re)) return new Re(t);
  t = t || {}, mn.call(this, t);
}
Re.prototype._write = function(t, e, n) {
  wn(n);
};
(function(t) {
  var e = D && D.__createBinding || (Object.create ? function(_, O, g, b) {
    b === void 0 && (b = g);
    var a = Object.getOwnPropertyDescriptor(O, g);
    (!a || ("get" in a ? !O.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return O[g];
    } }), Object.defineProperty(_, b, a);
  } : function(_, O, g, b) {
    b === void 0 && (b = g), _[b] = O[g];
  }), n = D && D.__setModuleDefault || (Object.create ? function(_, O) {
    Object.defineProperty(_, "default", { enumerable: !0, value: O });
  } : function(_, O) {
    _.default = O;
  }), r = D && D.__importStar || /* @__PURE__ */ function() {
    var _ = function(O) {
      return _ = Object.getOwnPropertyNames || function(g) {
        var b = [];
        for (var a in g) Object.prototype.hasOwnProperty.call(g, a) && (b[b.length] = a);
        return b;
      }, _(O);
    };
    return function(O) {
      if (O && O.__esModule) return O;
      var g = {};
      if (O != null) for (var b = _(O), a = 0; a < b.length; a++) b[a] !== "default" && e(g, O, b[a]);
      return n(g, O), g;
    };
  }(), i = D && D.__awaiter || function(_, O, g, b) {
    function a(l) {
      return l instanceof g ? l : new g(function(u) {
        u(l);
      });
    }
    return new (g || (g = Promise))(function(l, u) {
      function h(R) {
        try {
          E(b.next(R));
        } catch (v) {
          u(v);
        }
      }
      function w(R) {
        try {
          E(b.throw(R));
        } catch (v) {
          u(v);
        }
      }
      function E(R) {
        R.done ? l(R.value) : a(R.value).then(h, w);
      }
      E((b = b.apply(_, O || [])).next());
    });
  }, s = D && D.__generator || function(_, O) {
    var g = { label: 0, sent: function() {
      if (l[0] & 1) throw l[1];
      return l[1];
    }, trys: [], ops: [] }, b, a, l, u = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return u.next = h(0), u.throw = h(1), u.return = h(2), typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function h(E) {
      return function(R) {
        return w([E, R]);
      };
    }
    function w(E) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; u && (u = 0, E[0] && (g = 0)), g; ) try {
        if (b = 1, a && (l = E[0] & 2 ? a.return : E[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, E[1])).done) return l;
        switch (a = 0, l && (E = [E[0] & 2, l.value]), E[0]) {
          case 0:
          case 1:
            l = E;
            break;
          case 4:
            return g.label++, { value: E[1], done: !1 };
          case 5:
            g.label++, a = E[1], E = [0];
            continue;
          case 7:
            E = g.ops.pop(), g.trys.pop();
            continue;
          default:
            if (l = g.trys, !(l = l.length > 0 && l[l.length - 1]) && (E[0] === 6 || E[0] === 2)) {
              g = 0;
              continue;
            }
            if (E[0] === 3 && (!l || E[1] > l[0] && E[1] < l[3])) {
              g.label = E[1];
              break;
            }
            if (E[0] === 6 && g.label < l[1]) {
              g.label = l[1], l = E;
              break;
            }
            if (l && g.label < l[2]) {
              g.label = l[2], g.ops.push(E);
              break;
            }
            l[2] && g.ops.pop(), g.trys.pop();
            continue;
        }
        E = O.call(_, g);
      } catch (R) {
        E = [6, R], a = 0;
      } finally {
        b = l = 0;
      }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  }, o = D && D.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AxiosError = void 0, t.NtlmClient = S;
  var c = r(bs);
  Object.defineProperty(t, "AxiosError", { enumerable: !0, get: function() {
    return c.AxiosError;
  } });
  var f = r(Vs), p = r(se), y = r(se), m = o(Xs);
  function S(_, O) {
    var g = this, b = O ?? {};
    b.httpAgent || (b.httpAgent = new y.Agent({ keepAlive: !0 })), b.httpsAgent || (b.httpsAgent = new p.Agent({ keepAlive: !0 }));
    var a = c.default.create(b);
    return a.interceptors.response.use(function(l) {
      return l;
    }, function(l) {
      return i(g, void 0, void 0, function() {
        var u, h, w, E, R, v, T, k;
        return s(this, function(H) {
          switch (H.label) {
            case 0:
              return u = l.response, u && u.status === 401 && u.headers["www-authenticate"] && u.headers["www-authenticate"].includes("NTLM") && (!u.config.headers["X-retry"] || u.config.headers["X-retry"] !== "false") ? (h = ((T = u.headers["www-authenticate"].split(",").find(function(X) {
                return X.match(/ *NTLM/);
              })) === null || T === void 0 ? void 0 : T.trim()) || "", u.config.headers || (u.config.headers = {}), h.length < 50 ? (w = f.createType1Message(_.workstation, _.domain), u.config.headers.Authorization = w) : (E = f.decodeType2Message((h.match(/^NTLM\s+(.+?)(,|\s+|$)/) || [])[1]), R = f.createType3Message(E, _.username, _.password, _.workstation, _.domain), u.config.headers["X-retry"] = "false", u.config.headers.Authorization = R), u.config.responseType !== "stream" ? [3, 2] : (v = (k = l.response) === null || k === void 0 ? void 0 : k.data, v && !v.readableEnded ? [4, new Promise(function(X) {
                v.pipe((0, m.default)()), v.once("close", X);
              })] : [3, 2])) : [3, 3];
            case 1:
              H.sent(), H.label = 2;
            case 2:
              return [2, a(u.config)];
            case 3:
              throw l;
          }
        });
      });
    }), a;
  }
})(Bt);
async function Ys() {
  return {
    username: {
      displayName: "Benutzername",
      description: "NTLM Benutzername",
      type: "string"
    },
    password: {
      displayName: "Passwort",
      description: "NTLM Passwort",
      type: "password"
    },
    domain: {
      displayName: "Domäne",
      description: "NTLM Domäne",
      type: "string"
    },
    apiUrl: {
      displayName: "API Base URL",
      description: "z.B. [https://api.mycompany.com](https://api.mycompany.com) (ohne /api/mdm/...)",
      type: "string"
    }
  };
}
async function Qs(t) {
  return {
    objects: {
      MDM_AccountName: {
        displayName: "MDM AccountName Prüfung",
        description: "Verwaltung verschiedener Daten aus MDM. Prüft in der Personaldatenbank, ob das Benutzerkürzel vorhanden ist.",
        properties: {
          // Input Parameter
          samAccName: { type: "string" },
          // Output Properties (aus Success/FailMessage)
          title: { type: "string" },
          statusCode: { type: "number" },
          status: { type: "string" },
          message: { type: "string" },
          content: { type: "string" }
        },
        methods: {
          CheckAccount: {
            displayName: "Kürzelexistenz prüfen",
            description: "Prüft in der Personaldatenbank, ob das zu prüfende Benutzerkürzel bereits vorhanden ist",
            type: "read",
            // 'read' da wir ein einzelnes Ergebnis zurückerwarten
            inputs: ["samAccName"],
            requiredInputs: ["samAccName"],
            outputs: ["title", "statusCode", "status", "message", "content"]
          }
        }
      }
    }
  };
}
async function Zs(t, e, n, r) {
  if (t === "MDM_AccountName" && e === "CheckAccount") {
    const i = Bt.NtlmClient({
      username: r.username,
      password: r.password,
      domain: r.domain
    });
    try {
      const s = encodeURIComponent(n.samAccName), o = `${r.apiUrl}/api/mdm/accountname/check?samAccName=${s}`, c = await i.get(o);
      return {
        title: c.data.title || "Erfolg",
        statusCode: c.data.statusCode || c.status,
        status: c.data.status || "SUCCESS",
        message: c.data.message || "",
        content: typeof c.data.content == "object" ? JSON.stringify(c.data.content) : c.data.content
      };
    } catch (s) {
      if (s.response && s.response.data)
        return {
          title: s.response.data.title || "Fehler bei der Ausführung",
          statusCode: s.response.data.statusCode || s.response.status,
          status: s.response.data.status || "OPERATION_FAILED",
          message: s.response.data.message || s.message,
          content: typeof s.response.data.content == "object" ? JSON.stringify(s.response.data.content) : s.response.data.content
        };
      throw new Error(`API Aufruf fehlgeschlagen: ${s.message}`);
    }
  }
  throw new Error(`Methode ${e} für ${t} ist nicht implementiert.`);
}
export {
  Qs as describe,
  Ys as describeConfiguration,
  Zs as execute
};
//# sourceMappingURL=index.js.map
