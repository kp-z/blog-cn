function y(n) {
  return n == null;
}
function Gs(n) {
  return n !== null && typeof n == "object";
}
function Es(n) {
  return n !== null && typeof n == "object";
}
function fc(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] !== e[t]) return false;
  return true;
}
function wt(n, e) {
  return Array.from(/* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(e)])).reduce((i, s) => {
    const r = n[s], o = e[s];
    return Es(r) && Es(o) ? Object.assign(Object.assign({}, i), { [s]: wt(r, o) }) : Object.assign(Object.assign({}, i), { [s]: s in e ? o : r });
  }, {});
}
function Ys(n) {
  return Gs(n) ? "target" in n : false;
}
const gc = { alreadydisposed: () => "View has been already disposed", invalidparams: (n) => `Invalid parameters for '${n.name}'`, nomatchingcontroller: (n) => `No matching controller for '${n.key}'`, nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`, notbindable: () => "Value is not bindable", notcompatible: (n) => `Not compatible with  plugin '${n.id}'`, propertynotfound: (n) => `Property '${n.name}' not found`, shouldneverhappen: () => "This error should never happen" };
let U = class It {
  static alreadyDisposed() {
    return new It({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new It({ type: "notbindable" });
  }
  static notCompatible(e, t) {
    return new It({ type: "notcompatible", context: { id: `${e}.${t}` } });
  }
  static propertyNotFound(e) {
    return new It({ type: "propertynotfound", context: { name: e } });
  }
  static shouldNeverHappen() {
    return new It({ type: "shouldneverhappen" });
  }
  constructor(e) {
    var t;
    this.message = (t = gc[e.type](e.context)) !== null && t !== void 0 ? t : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
  }
  toString() {
    return this.message;
  }
}, Ao = class oa {
  constructor(e, t) {
    this.obj_ = e, this.key = t;
  }
  static isBindable(e) {
    return !(e === null || typeof e != "object" && typeof e != "function");
  }
  read() {
    return this.obj_[this.key];
  }
  write(e) {
    this.obj_[this.key] = e;
  }
  writeProperty(e, t) {
    const i = this.read();
    if (!oa.isBindable(i)) throw U.notBindable();
    if (!(e in i)) throw U.propertyNotFound(e);
    i[e] = t;
  }
}, D = class {
  constructor() {
    this.observers_ = {};
  }
  on(e, t, i) {
    var s;
    let r = this.observers_[e];
    return r || (r = this.observers_[e] = []), r.push({ handler: t, key: (s = i == null ? void 0 : i.key) !== null && s !== void 0 ? s : t }), this;
  }
  off(e, t) {
    const i = this.observers_[e];
    return i && (this.observers_[e] = i.filter((s) => s.key !== t)), this;
  }
  emit(e, t) {
    const i = this.observers_[e];
    i && i.forEach((s) => {
      s.handler(t);
    });
  }
}, Cc = class {
  constructor(e, t) {
    var i;
    this.constraint_ = t == null ? void 0 : t.constraint, this.equals_ = (i = t == null ? void 0 : t.equals) !== null && i !== void 0 ? i : ((s, r) => s === r), this.emitter = new D(), this.rawValue_ = e;
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.constraint_ ? this.constraint_.constrain(e) : e, r = this.rawValue_;
    this.equals_(r, s) && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.rawValue_ = s, this.emitter.emit("change", { options: i, previousRawValue: r, rawValue: s, sender: this }));
  }
}, Pc = class {
  constructor(e) {
    this.emitter = new D(), this.value_ = e;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.value_;
    s === e && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.value_ = e, this.emitter.emit("change", { options: i, previousRawValue: s, rawValue: this.value_, sender: this }));
  }
}, xc = class {
  constructor(e) {
    this.emitter = new D(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = e, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(e) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), { sender: this }));
  }
  onValueChange_(e) {
    this.emitter.emit("change", Object.assign(Object.assign({}, e), { sender: this }));
  }
};
function k(n, e) {
  const t = e == null ? void 0 : e.constraint, i = e == null ? void 0 : e.equals;
  return !t && !i ? new Pc(n) : new Cc(n, e);
}
function yc(n) {
  return [new xc(n), (e, t) => {
    n.setRawValue(e, t);
  }];
}
let v = class la {
  constructor(e) {
    this.emitter = new D(), this.valMap_ = e;
    for (const t in this.valMap_) this.valMap_[t].emitter.on("change", () => {
      this.emitter.emit("change", { key: t, sender: this });
    });
  }
  static createCore(e) {
    return Object.keys(e).reduce((i, s) => Object.assign(i, { [s]: k(e[s]) }), {});
  }
  static fromObject(e) {
    const t = this.createCore(e);
    return new la(t);
  }
  get(e) {
    return this.valMap_[e].rawValue;
  }
  set(e, t) {
    this.valMap_[e].rawValue = t;
  }
  value(e) {
    return this.valMap_[e];
  }
}, Nn = class {
  constructor(e) {
    this.values = v.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    return Math.min(Math.max(e, i), t);
  }
}, Ec = class {
  constructor(e) {
    this.values = v.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    let s = e;
    return y(i) || (s = Math.max(s, i)), y(t) || (s = Math.min(s, t)), s;
  }
}, kc = class {
  constructor(e, t = 0) {
    this.step = e, this.origin = t;
  }
  constrain(e) {
    const t = this.origin % this.step, i = Math.round((e - t) / this.step);
    return t + i * this.step;
  }
}, Vc = class {
  constructor(e) {
    this.text = e;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
};
const $c = { "**": (n, e) => Math.pow(n, e), "*": (n, e) => n * e, "/": (n, e) => n / e, "%": (n, e) => n % e, "+": (n, e) => n + e, "-": (n, e) => n - e, "<<": (n, e) => n << e, ">>": (n, e) => n >> e, ">>>": (n, e) => n >>> e, "&": (n, e) => n & e, "^": (n, e) => n ^ e, "|": (n, e) => n | e };
let Sc = class {
  constructor(e, t, i) {
    this.left = t, this.operator = e, this.right = i;
  }
  evaluate() {
    const e = $c[this.operator];
    if (!e) throw new Error(`unexpected binary operator: '${this.operator}`);
    return e(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ");
  }
};
const Lc = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
let Mc = class {
  constructor(e, t) {
    this.operator = e, this.expression = t;
  }
  evaluate() {
    const e = Lc[this.operator];
    if (!e) throw new Error(`unexpected unary operator: '${this.operator}`);
    return e(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
};
function Xs(n) {
  return (e, t) => {
    for (let i = 0; i < n.length; i++) {
      const s = n[i](e, t);
      if (s !== "") return s;
    }
    return "";
  };
}
function yn(n, e) {
  var t;
  const i = n.substr(e).match(/^\s+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function Ac(n, e) {
  const t = n.substr(e, 1);
  return t.match(/^[1-9]$/) ? t : "";
}
function En(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function Tc(n, e) {
  const t = En(n, e);
  if (t !== "") return t;
  const i = n.substr(e, 1);
  if (e += 1, i !== "-" && i !== "+") return "";
  const s = En(n, e);
  return s === "" ? "" : i + s;
}
function Ws(n, e) {
  const t = n.substr(e, 1);
  if (e += 1, t.toLowerCase() !== "e") return "";
  const i = Tc(n, e);
  return i === "" ? "" : t + i;
}
function aa(n, e) {
  const t = n.substr(e, 1);
  if (t === "0") return t;
  const i = Ac(n, e);
  return e += i.length, i === "" ? "" : i + En(n, e);
}
function Oc(n, e) {
  const t = aa(n, e);
  if (e += t.length, t === "") return "";
  const i = n.substr(e, 1);
  if (e += i.length, i !== ".") return "";
  const s = En(n, e);
  return e += s.length, t + i + s + Ws(n, e);
}
function Dc(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== ".") return "";
  const i = En(n, e);
  return e += i.length, i === "" ? "" : t + i + Ws(n, e);
}
function Rc(n, e) {
  const t = aa(n, e);
  return e += t.length, t === "" ? "" : t + Ws(n, e);
}
const jc = Xs([Oc, Dc, Rc]);
function Bc(n, e) {
  var t;
  const i = n.substr(e).match(/^[01]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function Nc(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0b") return "";
  const i = Bc(n, e);
  return i === "" ? "" : t + i;
}
function Ic(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-7]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function Fc(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0o") return "";
  const i = Ic(n, e);
  return i === "" ? "" : t + i;
}
function Kc(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9a-f]+/i);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function Uc(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0x") return "";
  const i = Kc(n, e);
  return i === "" ? "" : t + i;
}
const zc = Xs([Nc, Fc, Uc]), Hc = Xs([zc, jc]);
function qc(n, e) {
  const t = Hc(n, e);
  return e += t.length, t === "" ? null : { evaluable: new Vc(t), cursor: e };
}
function Gc(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== "(") return null;
  const i = pa(n, e);
  if (!i) return null;
  e = i.cursor, e += yn(n, e).length;
  const s = n.substr(e, 1);
  return e += s.length, s !== ")" ? null : { evaluable: i.evaluable, cursor: e };
}
function Yc(n, e) {
  var t;
  return (t = qc(n, e)) !== null && t !== void 0 ? t : Gc(n, e);
}
function ua(n, e) {
  const t = Yc(n, e);
  if (t) return t;
  const i = n.substr(e, 1);
  if (e += i.length, i !== "+" && i !== "-" && i !== "~") return null;
  const s = ua(n, e);
  return s ? (e = s.cursor, { cursor: e, evaluable: new Mc(i, s.evaluable) }) : null;
}
function Xc(n, e, t) {
  t += yn(e, t).length;
  const i = n.filter((s) => e.startsWith(s, t))[0];
  return i ? (t += i.length, t += yn(e, t).length, { cursor: t, operator: i }) : null;
}
function Wc(n, e) {
  return (t, i) => {
    const s = n(t, i);
    if (!s) return null;
    i = s.cursor;
    let r = s.evaluable;
    for (; ; ) {
      const o = Xc(e, t, i);
      if (!o) break;
      i = o.cursor;
      const l = n(t, i);
      if (!l) return null;
      i = l.cursor, r = new Sc(o.operator, r, l.evaluable);
    }
    return r ? { cursor: i, evaluable: r } : null;
  };
}
const Zc = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((n, e) => Wc(n, e), ua);
function pa(n, e) {
  return e += yn(n, e).length, Zc(n, e);
}
function Jc(n) {
  const e = pa(n, 0);
  return !e || e.cursor + yn(n, e.cursor).length !== n.length ? null : e.evaluable;
}
function Ne(n) {
  var e;
  const t = Jc(n);
  return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0 ? e : null;
}
function ca(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string") {
    const e = Ne(n);
    if (!y(e)) return e;
  }
  return 0;
}
function Qc(n) {
  return String(n);
}
function Q(n) {
  return (e) => e.toFixed(Math.max(Math.min(n, 20), 0));
}
function g(n, e, t, i, s) {
  const r = (n - e) / (t - e);
  return i + r * (s - i);
}
function To(n) {
  return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
}
function R(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function ha(n, e) {
  return (n % e + e) % e;
}
function eh(n, e) {
  return y(n.step) ? Math.max(To(e), 2) : To(n.step);
}
function da(n) {
  var e;
  return (e = n.step) !== null && e !== void 0 ? e : 1;
}
function ma(n, e) {
  var t;
  const i = Math.abs((t = n.step) !== null && t !== void 0 ? t : e);
  return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
}
function va(n, e) {
  return y(n.step) ? null : new kc(n.step, e);
}
function ba(n) {
  return !y(n.max) && !y(n.min) ? new Nn({ max: n.max, min: n.min }) : !y(n.max) || !y(n.min) ? new Ec({ max: n.max, min: n.min }) : null;
}
function wa(n, e) {
  var t, i, s;
  return { formatter: (t = n.format) !== null && t !== void 0 ? t : Q(eh(n, e)), keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : da(n), pointerScale: (s = n.pointerScale) !== null && s !== void 0 ? s : ma(n, e) };
}
function _a(n) {
  return { format: n.optional.function, keyScale: n.optional.number, max: n.optional.number, min: n.optional.number, pointerScale: n.optional.number, step: n.optional.number };
}
function Zs(n) {
  return { constraint: n.constraint, textProps: v.fromObject(wa(n.params, n.initialValue)) };
}
let kt = class {
  constructor(e) {
    this.controller = e;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get("disabled");
  }
  set disabled(e) {
    this.controller.viewProps.set("disabled", e);
  }
  get hidden() {
    return this.controller.viewProps.get("hidden");
  }
  set hidden(e) {
    this.controller.viewProps.set("hidden", e);
  }
  dispose() {
    this.controller.viewProps.set("disposed", true);
  }
  importState(e) {
    return this.controller.importState(e);
  }
  exportState() {
    return this.controller.exportState();
  }
}, ki = class {
  constructor(e) {
    this.target = e;
  }
}, In = class extends ki {
  constructor(e, t, i) {
    super(e), this.value = t, this.last = i ?? true;
  }
}, th = class extends ki {
  constructor(e, t) {
    super(e), this.expanded = t;
  }
}, nh = class extends ki {
  constructor(e, t) {
    super(e), this.index = t;
  }
};
class ih extends ki {
  constructor(e, t) {
    super(e), this.native = t;
  }
}
let kn = class extends kt {
  constructor(e) {
    super(e), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new D(), this.controller.value.emitter.on("change", this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(e) {
    this.controller.tag = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(e) {
    const t = this.controller.value;
    this.emitter_.emit("change", new In(this, t.binding.target.read(), e.options.last));
  }
};
class sh {
  constructor(e, t) {
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = t, this.value_ = e, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.emitter = new D();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(e) {
    this.value_.rawValue = e;
  }
  setRawValue(e, t) {
    this.value_.setRawValue(e, t);
  }
  fetch() {
    this.value_.rawValue = this.binding.read();
  }
  push() {
    this.binding.write(this.value_.rawValue);
  }
  onValueBeforeChange_(e) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), { sender: this }));
  }
  onValueChange_(e) {
    this.push(), this.emitter.emit("change", Object.assign(Object.assign({}, e), { sender: this }));
  }
}
function rh(n) {
  if (!("binding" in n)) return false;
  const e = n.binding;
  return Ys(e) && "read" in e && "write" in e;
}
function oh(n, e) {
  const i = Object.keys(e).reduce((s, r) => {
    if (s === void 0) return;
    const o = e[r], l = o(n[r]);
    return l.succeeded ? Object.assign(Object.assign({}, s), { [r]: l.value }) : void 0;
  }, {});
  return i;
}
function lh(n, e) {
  return n.reduce((t, i) => {
    if (t === void 0) return;
    const s = e(i);
    if (!(!s.succeeded || s.value === void 0)) return [...t, s.value];
  }, []);
}
function ah(n) {
  return n === null ? false : typeof n == "object";
}
function Me(n) {
  return (e) => (t) => {
    if (!e && t === void 0) return { succeeded: false, value: void 0 };
    if (e && t === void 0) return { succeeded: true, value: void 0 };
    const i = n(t);
    return i !== void 0 ? { succeeded: true, value: i } : { succeeded: false, value: void 0 };
  };
}
function Oo(n) {
  return { custom: (e) => Me(e)(n), boolean: Me((e) => typeof e == "boolean" ? e : void 0)(n), number: Me((e) => typeof e == "number" ? e : void 0)(n), string: Me((e) => typeof e == "string" ? e : void 0)(n), function: Me((e) => typeof e == "function" ? e : void 0)(n), constant: (e) => Me((t) => t === e ? e : void 0)(n), raw: Me((e) => e)(n), object: (e) => Me((t) => {
    if (ah(t)) return oh(t, e);
  })(n), array: (e) => Me((t) => {
    if (Array.isArray(t)) return lh(t, e);
  })(n) };
}
const ks = { optional: Oo(true), required: Oo(false) };
function S(n, e) {
  const t = e(ks), i = ks.required.object(t)(n);
  return i.succeeded ? i.value : void 0;
}
function se(n, e, t, i) {
  if (e && !e(n)) return false;
  const s = S(n, t);
  return s ? i(s) : false;
}
function re(n, e) {
  var t;
  return wt((t = n == null ? void 0 : n()) !== null && t !== void 0 ? t : {}, e);
}
function bt(n) {
  return "value" in n;
}
function fa(n) {
  if (!Gs(n) || !("binding" in n)) return false;
  const e = n.binding;
  return Ys(e);
}
const Pe = "http://www.w3.org/2000/svg";
function di(n) {
  n.offsetHeight;
}
function uh(n, e) {
  const t = n.style.transition;
  n.style.transition = "none", e(), n.style.transition = t;
}
function Js(n) {
  return n.ontouchstart !== void 0;
}
function ph() {
  return globalThis;
}
function ch() {
  return ph().document;
}
function hh(n) {
  const e = n.ownerDocument.defaultView;
  return e && "document" in e ? n.getContext("2d", { willReadFrequently: true }) : null;
}
const dh = { check: '<path d="M2 8l4 4l8 -8"/>', dropdown: '<path d="M5 7h6l-3 3 z"/>', p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>' };
function Vi(n, e) {
  const t = n.createElementNS(Pe, "svg");
  return t.innerHTML = dh[e], t;
}
function ga(n, e, t) {
  n.insertBefore(e, n.children[t]);
}
function Qs(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function Ca(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function mh(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Pa(n) {
  return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
}
function je(n, e) {
  n.emitter.on("change", (t) => {
    e(t.rawValue);
  }), e(n.rawValue);
}
function xe(n, e, t) {
  je(n.value(e), t);
}
const vh = "tp";
function _(n) {
  return (t, i) => [vh, "-", n, "v", t ? `_${t}` : "", i ? `-${i}` : ""].join("");
}
const pn = _("lbl");
function bh(n, e) {
  const t = n.createDocumentFragment();
  return e.split(`
`).map((s) => n.createTextNode(s)).forEach((s, r) => {
    r > 0 && t.appendChild(n.createElement("br")), t.appendChild(s);
  }), t;
}
let xa = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(pn()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(pn("l")), xe(t.props, "label", (r) => {
      y(r) ? this.element.classList.add(pn(void 0, "nol")) : (this.element.classList.remove(pn(void 0, "nol")), mh(i), i.appendChild(bh(e, r)));
    }), this.element.appendChild(i), this.labelElement = i;
    const s = e.createElement("div");
    s.classList.add(pn("v")), this.element.appendChild(s), this.valueElement = s;
  }
}, ya = class {
  constructor(e, t) {
    this.props = t.props, this.valueController = t.valueController, this.viewProps = t.valueController.viewProps, this.view = new xa(e, { props: t.props, viewProps: this.viewProps }), this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(e) {
    return se(e, null, (t) => ({ label: t.optional.string }), (t) => (this.props.set("label", t.label), true));
  }
  exportProps() {
    return re(null, { label: this.props.get("label") });
  }
};
function wh() {
  return ["veryfirst", "first", "last", "verylast"];
}
const Do = _(""), Ro = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
let $i = class {
  constructor(e) {
    this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
    const t = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      wh().forEach((i) => {
        t.classList.remove(Do(void 0, Ro[i]));
      }), this.blade.get("positions").forEach((i) => {
        t.classList.add(Do(void 0, Ro[i]));
      });
    }), this.viewProps.handleDispose(() => {
      Qs(t);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(e) {
    this.parent_ = e, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(e) {
    return se(e, null, (t) => ({ disabled: t.required.boolean, hidden: t.required.boolean }), (t) => (this.viewProps.importState(t), true));
  }
  exportState() {
    return re(null, Object.assign({}, this.viewProps.exportState()));
  }
}, _t = class extends $i {
  constructor(e, t) {
    if (t.value !== t.valueController.value) throw U.shouldNeverHappen();
    const i = t.valueController.viewProps, s = new ya(e, { blade: t.blade, props: t.props, valueController: t.valueController });
    super(Object.assign(Object.assign({}, t), { view: new xa(e, { props: t.props, viewProps: i }), viewProps: i })), this.labelController = s, this.value = t.value, this.valueController = t.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(e) {
    return se(e, (t) => {
      var i, s, r;
      return super.importState(t) && this.labelController.importProps(t) && ((r = (s = (i = this.valueController).importProps) === null || s === void 0 ? void 0 : s.call(i, e)) !== null && r !== void 0 ? r : true);
    }, (t) => ({ value: t.optional.raw }), (t) => (t.value && (this.value.rawValue = t.value), true));
  }
  exportState() {
    var e, t, i;
    return re(() => super.exportState(), Object.assign(Object.assign({ value: this.value.rawValue }, this.labelController.exportProps()), (i = (t = (e = this.valueController).exportProps) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : {}));
  }
};
function jo(n) {
  const e = Object.assign({}, n);
  return delete e.value, e;
}
class Ea extends _t {
  constructor(e, t) {
    super(e, t), this.tag = t.tag;
  }
  importState(e) {
    return se(e, (t) => super.importState(jo(e)), (t) => ({ tag: t.optional.string }), (t) => (this.tag = t.tag, true));
  }
  exportState() {
    return re(() => jo(super.exportState()), { binding: { key: this.value.binding.target.key, value: this.value.binding.target.read() }, tag: this.tag });
  }
}
function _h(n) {
  return bt(n) && fa(n.value);
}
class fh extends Ea {
  importState(e) {
    return se(e, (t) => super.importState(t), (t) => ({ binding: t.required.object({ value: t.required.raw }) }), (t) => (this.value.binding.inject(t.binding.value), this.value.fetch(), true));
  }
}
function gh(n) {
  return bt(n) && rh(n.value);
}
function ka(n, e) {
  for (; n.length < e; ) n.push(void 0);
}
function Ch(n) {
  const e = [];
  return ka(e, n), e;
}
function Ph(n) {
  const e = n.indexOf(void 0);
  return e < 0 ? n : n.slice(0, e);
}
function xh(n, e) {
  const t = [...Ph(n), e];
  return t.length > n.length ? t.splice(0, t.length - n.length) : ka(t, n.length), t;
}
class yh {
  constructor(e) {
    this.emitter = new D(), this.onTick_ = this.onTick_.bind(this), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = e.binding, this.value_ = k(Ch(e.bufferSize)), this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.ticker = e.ticker, this.ticker.emitter.on("tick", this.onTick_), this.fetch();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(e) {
    this.value_.rawValue = e;
  }
  setRawValue(e, t) {
    this.value_.setRawValue(e, t);
  }
  fetch() {
    this.value_.rawValue = xh(this.value_.rawValue, this.binding.read());
  }
  onTick_() {
    this.fetch();
  }
  onValueBeforeChange_(e) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), { sender: this }));
  }
  onValueChange_(e) {
    this.emitter.emit("change", Object.assign(Object.assign({}, e), { sender: this }));
  }
}
function Eh(n) {
  if (!("binding" in n)) return false;
  const e = n.binding;
  return Ys(e) && "read" in e && !("write" in e);
}
class kh extends Ea {
  exportState() {
    return re(() => super.exportState(), { binding: { readonly: true } });
  }
}
function Vh(n) {
  return bt(n) && Eh(n.value);
}
let $h = class extends kt {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get title() {
    var e;
    return (e = this.controller.buttonController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.buttonController.props.set("title", e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller.buttonController.emitter.on(e, (r) => {
      i(new ih(this, r.nativeEvent));
    }), this;
  }
  off(e, t) {
    return this.controller.buttonController.emitter.off(e, t), this;
  }
};
function Sh(n, e, t) {
  t ? n.classList.add(e) : n.classList.remove(e);
}
function Qt(n, e) {
  return (t) => {
    Sh(n, e, t);
  };
}
function er(n, e) {
  je(n, (t) => {
    e.textContent = t ?? "";
  });
}
const Zi = _("btn");
let Lh = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Zi()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("button");
    i.classList.add(Zi("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(Zi("t")), er(t.props.value("title"), s), this.buttonElement.appendChild(s);
  }
}, Mh = class {
  constructor(e, t) {
    this.emitter = new D(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new Lh(e, { props: this.props, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(e) {
    return se(e, null, (t) => ({ title: t.optional.string }), (t) => (this.props.set("title", t.title), true));
  }
  exportProps() {
    return re(null, { title: this.props.get("title") });
  }
  onClick_(e) {
    this.emitter.emit("click", { nativeEvent: e, sender: this });
  }
}, Bo = class extends $i {
  constructor(e, t) {
    const i = new Mh(e, { props: t.buttonProps, viewProps: t.viewProps }), s = new ya(e, { blade: t.blade, props: t.labelProps, valueController: i });
    super({ blade: t.blade, view: s.view, viewProps: t.viewProps }), this.buttonController = i, this.labelController = s;
  }
  importState(e) {
    return se(e, (t) => super.importState(t) && this.buttonController.importProps(t) && this.labelController.importProps(t), () => ({}), () => true);
  }
  exportState() {
    return re(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
}, Va = class {
  constructor(e) {
    const [t, i] = e.split("-"), s = t.split(".");
    this.major = parseInt(s[0], 10), this.minor = parseInt(s[1], 10), this.patch = parseInt(s[2], 10), this.prerelease = i ?? null;
  }
  toString() {
    const e = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
  }
};
const en = new Va("2.0.5");
function X(n) {
  return Object.assign({ core: en }, n);
}
const Ah = X({ id: "button", type: "blade", accept(n) {
  const e = S(n, (t) => ({ title: t.required.string, view: t.required.constant("button"), label: t.optional.string }));
  return e ? { params: e } : null;
}, controller(n) {
  return new Bo(n.document, { blade: n.blade, buttonProps: v.fromObject({ title: n.params.title }), labelProps: v.fromObject({ label: n.params.label }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof Bo ? new $h(n.controller) : null;
} });
function Th(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
}
function Oh(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
}
function Dh(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
}
function Rh(n) {
  return Gs(n) ? "refresh" in n && typeof n.refresh == "function" : false;
}
function jh(n, e) {
  if (!Ao.isBindable(n)) throw U.notBindable();
  return new Ao(n, e);
}
let Bh = class {
  constructor(e, t) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = e, this.emitter_ = new D(), this.pool_ = t, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((e) => this.pool_.createApi(e));
  }
  addBinding(e, t, i) {
    const s = i ?? {}, r = this.controller_.element.ownerDocument, o = this.pool_.createBinding(r, jh(e, t), s), l = this.pool_.createBindingApi(o);
    return this.add(l, s.index);
  }
  addFolder(e) {
    return Oh(this, e);
  }
  addButton(e) {
    return Th(this, e);
  }
  addTab(e) {
    return Dh(this, e);
  }
  add(e, t) {
    const i = e.controller;
    return this.controller_.rack.add(i, t), e;
  }
  remove(e) {
    this.controller_.rack.remove(e.controller);
  }
  addBlade(e) {
    const t = this.controller_.element.ownerDocument, i = this.pool_.createBlade(t, e), s = this.pool_.createApi(i);
    return this.add(s, e.index);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
  refresh() {
    this.children.forEach((e) => {
      Rh(e) && e.refresh();
    });
  }
  onRackValueChange_(e) {
    const t = e.bladeController, i = this.pool_.createApi(t), s = fa(t.value) ? t.value.binding : null;
    this.emitter_.emit("change", new In(i, s ? s.target.read() : t.value.rawValue, e.options.last));
  }
}, tr = class extends kt {
  constructor(e, t) {
    super(e), this.rackApi_ = new Bh(e.rackController, t);
  }
  refresh() {
    this.rackApi_.refresh();
  }
}, nr = class extends $i {
  constructor(e) {
    super({ blade: e.blade, view: e.view, viewProps: e.rackController.viewProps }), this.rackController = e.rackController;
  }
  importState(e) {
    return se(e, (t) => super.importState(t), (t) => ({ children: t.required.array(t.required.raw) }), (t) => this.rackController.rack.children.every((i, s) => i.importState(t.children[s])));
  }
  exportState() {
    return re(() => super.exportState(), { children: this.rackController.rack.children.map((e) => e.exportState()) });
  }
};
function Vs(n) {
  return "rackController" in n;
}
let Nh = class {
  constructor(e) {
    this.emitter = new D(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(e) {
    for (const t of this.allItems()) if (e(t)) return t;
    return null;
  }
  includes(e) {
    return this.cache_.has(e);
  }
  add(e, t) {
    if (this.includes(e)) throw U.shouldNeverHappen();
    const i = t !== void 0 ? t : this.items_.length;
    this.items_.splice(i, 0, e), this.cache_.add(e);
    const s = this.extract_(e);
    s && (s.emitter.on("add", this.onSubListAdd_), s.emitter.on("remove", this.onSubListRemove_), s.allItems().forEach((r) => {
      this.cache_.add(r);
    })), this.emitter.emit("add", { index: i, item: e, root: this, target: this });
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    if (t < 0) return;
    this.items_.splice(t, 1), this.cache_.delete(e);
    const i = this.extract_(e);
    i && (i.allItems().forEach((s) => {
      this.cache_.delete(s);
    }), i.emitter.off("add", this.onSubListAdd_), i.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", { index: t, item: e, root: this, target: this });
  }
  onSubListAdd_(e) {
    this.cache_.add(e.item), this.emitter.emit("add", { index: e.index, item: e.item, root: this, target: e.target });
  }
  onSubListRemove_(e) {
    this.cache_.delete(e.item), this.emitter.emit("remove", { index: e.index, item: e.item, root: this, target: e.target });
  }
};
function Ih(n, e) {
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    if (bt(i) && i.value === e) return i;
  }
  return null;
}
function Fh(n) {
  return Vs(n) ? n.rackController.rack.bcSet_ : null;
}
let Kh = class {
  constructor(e) {
    var t, i;
    this.emitter = new D(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null, (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Nh(Fh), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(e, t) {
    var i;
    (i = e.parent) === null || i === void 0 || i.remove(e), e.parent = this, this.bcSet_.add(e, t);
  }
  remove(e) {
    e.parent = null, this.bcSet_.remove(e);
  }
  find(e) {
    return this.bcSet_.allItems().filter(e);
  }
  onSetAdd_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("add", { bladeController: e.item, index: e.index, root: t, sender: this }), !t) return;
    const i = e.item;
    if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_), i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), i.viewProps.handleDispose(this.onChildDispose_), bt(i)) i.value.emitter.on("change", this.onChildValueChange_);
    else if (Vs(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.on("layout", this.onRackLayout_), r.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("remove", { bladeController: e.item, root: t, sender: this }), !t) return;
    const i = e.item;
    if (bt(i)) i.value.emitter.off("change", this.onChildValueChange_);
    else if (Vs(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.off("layout", this.onRackLayout_), r.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const e = this.bcSet_.items.filter((s) => !s.viewProps.get("hidden")), t = e[0], i = e[e.length - 1];
    this.bcSet_.items.forEach((s) => {
      const r = [];
      s === t && (r.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && r.push("veryfirst")), s === i && (r.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && r.push("verylast")), s.blade.set("positions", r);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildViewPropsChange_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildDispose_() {
    this.bcSet_.items.filter((t) => t.viewProps.get("disposed")).forEach((t) => {
      this.bcSet_.remove(t);
    });
  }
  onChildValueChange_(e) {
    const t = Ih(this.find(bt), e.sender);
    if (!t) throw U.alreadyDisposed();
    this.emitter.emit("valuechange", { bladeController: t, options: e.options, sender: this });
  }
  onRackLayout_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onRackValueChange_(e) {
    this.emitter.emit("valuechange", { bladeController: e.bladeController, options: e.options, sender: this });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
}, ir = class {
  constructor(e) {
    this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = e.element, this.viewProps = e.viewProps;
    const t = new Kh({ blade: e.root ? void 0 : e.blade, viewProps: e.viewProps });
    t.emitter.on("add", this.onRackAdd_), t.emitter.on("remove", this.onRackRemove_), this.rack = t, this.viewProps.handleDispose(() => {
      for (let i = this.rack.children.length - 1; i >= 0; i--) this.rack.children[i].viewProps.set("disposed", true);
    });
  }
  onRackAdd_(e) {
    e.root && ga(this.element, e.bladeController.view.element, e.index);
  }
  onRackRemove_(e) {
    e.root && Qs(e.bladeController.view.element);
  }
};
function tn() {
  return new v({ positions: k([], { equals: fc }) });
}
let sr = class $a extends v {
  constructor(e) {
    super(e);
  }
  static create(e) {
    const t = { completed: true, expanded: e, expandedHeight: null, shouldFixHeight: false, temporaryExpanded: null }, i = v.createCore(t);
    return new $a(i);
  }
  get styleExpanded() {
    var e;
    return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) return "0";
    const e = this.get("expandedHeight");
    return this.get("shouldFixHeight") && !y(e) ? `${e}px` : "auto";
  }
  bindExpandedClass(e, t) {
    const i = () => {
      this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
    };
    xe(this, "expanded", i), xe(this, "temporaryExpanded", i);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
  }
};
function Uh(n, e) {
  let t = 0;
  return uh(e, () => {
    n.set("expandedHeight", null), n.set("temporaryExpanded", true), di(e), t = e.clientHeight, n.set("temporaryExpanded", null), di(e);
  }), t;
}
function No(n, e) {
  e.style.height = n.styleHeight;
}
function rr(n, e) {
  n.value("expanded").emitter.on("beforechange", () => {
    if (n.set("completed", false), y(n.get("expandedHeight"))) {
      const t = Uh(n, e);
      t > 0 && n.set("expandedHeight", t);
    }
    n.set("shouldFixHeight", true), di(e);
  }), n.emitter.on("change", () => {
    No(n, e);
  }), No(n, e), e.addEventListener("transitionend", (t) => {
    t.propertyName === "height" && n.cleanUpTransition();
  });
}
let Sa = class extends tr {
  constructor(e, t) {
    super(e, t), this.emitter_ = new D(), this.controller.foldable.value("expanded").emitter.on("change", (i) => {
      this.emitter_.emit("fold", new th(this, i.sender.rawValue));
    }), this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    });
  }
  get expanded() {
    return this.controller.foldable.get("expanded");
  }
  set expanded(e) {
    this.controller.foldable.set("expanded", e);
  }
  get title() {
    return this.controller.props.get("title");
  }
  set title(e) {
    this.controller.props.set("title", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    return this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
};
const La = _("cnt");
let zh = class {
  constructor(e, t) {
    var i;
    this.className_ = _((i = t.viewName) !== null && i !== void 0 ? i : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), La()), t.viewProps.bindClassModifiers(this.element), this.foldable_ = t.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), xe(this.foldable_, "completed", Qt(this.element, this.className_(void 0, "cpl")));
    const s = e.createElement("button");
    s.classList.add(this.className_("b")), xe(t.props, "title", (u) => {
      y(u) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
    }), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    r.classList.add(this.className_("i")), this.element.appendChild(r);
    const o = e.createElement("div");
    o.classList.add(this.className_("t")), er(t.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
    const l = e.createElement("div");
    l.classList.add(this.className_("m")), this.buttonElement.appendChild(l);
    const a = e.createElement("div");
    a.classList.add(this.className_("c")), this.element.appendChild(a), this.containerElement = a;
  }
}, $s = class extends nr {
  constructor(e, t) {
    var i;
    const s = sr.create((i = t.expanded) !== null && i !== void 0 ? i : true), r = new zh(e, { foldable: s, props: t.props, viewName: t.root ? "rot" : void 0, viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new ir({ blade: t.blade, element: r.containerElement, root: t.root, viewProps: t.viewProps }), view: r })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = t.props, this.foldable = s, rr(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    }), this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(e) {
    return se(e, (t) => super.importState(t), (t) => ({ expanded: t.required.boolean, title: t.optional.string }), (t) => (this.foldable.set("expanded", t.expanded), this.props.set("title", t.title), true));
  }
  exportState() {
    return re(() => super.exportState(), { expanded: this.foldable.get("expanded"), title: this.props.get("title") });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
};
const Hh = X({ id: "folder", type: "blade", accept(n) {
  const e = S(n, (t) => ({ title: t.required.string, view: t.required.constant("folder"), expanded: t.optional.boolean }));
  return e ? { params: e } : null;
}, controller(n) {
  return new $s(n.document, { blade: n.blade, expanded: n.params.expanded, props: v.fromObject({ title: n.params.title }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof $s ? new Sa(n.controller, n.pool) : null;
} }), qh = _("");
function Io(n, e) {
  return Qt(n, qh(void 0, e));
}
let Vt = class Ma extends v {
  constructor(e) {
    var t;
    super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = yc(k(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(e) {
    var t, i, s;
    const r = e ?? {};
    return new Ma(v.createCore({ disabled: (t = r.disabled) !== null && t !== void 0 ? t : false, disposed: false, hidden: (i = r.hidden) !== null && i !== void 0 ? i : false, parent: (s = r.parent) !== null && s !== void 0 ? s : null }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(e) {
    je(this.globalDisabled_, Io(e, "disabled")), xe(this, "hidden", Io(e, "hidden"));
  }
  bindDisabled(e) {
    je(this.globalDisabled_, (t) => {
      e.disabled = t;
    });
  }
  bindTabIndex(e) {
    je(this.globalDisabled_, (t) => {
      e.tabIndex = t ? -1 : 0;
    });
  }
  handleDispose(e) {
    this.value("disposed").emitter.on("change", (t) => {
      t && e();
    });
  }
  importState(e) {
    this.set("disabled", e.disabled), this.set("hidden", e.hidden);
  }
  exportState() {
    return { disabled: this.get("disabled"), hidden: this.get("hidden") };
  }
  getGlobalDisabled_() {
    const e = this.get("parent");
    return (e ? e.globalDisabled.rawValue : false) || this.get("disabled");
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(e) {
    var t;
    const i = e.previousRawValue;
    i == null ? void 0 : i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
  }
};
const Fo = _("tbp");
let Gh = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Fo()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Fo("c")), this.element.appendChild(i), this.containerElement = i;
  }
};
const cn = _("tbi");
let Yh = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(cn()), t.viewProps.bindClassModifiers(this.element), xe(t.props, "selected", (r) => {
      r ? this.element.classList.add(cn(void 0, "sel")) : this.element.classList.remove(cn(void 0, "sel"));
    });
    const i = e.createElement("button");
    i.classList.add(cn("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(cn("t")), er(t.props.value("title"), s), this.buttonElement.appendChild(s), this.titleElement = s;
  }
}, Xh = class {
  constructor(e, t) {
    this.emitter = new D(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new Yh(e, { props: t.props, viewProps: t.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}, Ss = class extends nr {
  constructor(e, t) {
    const i = new Gh(e, { viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new ir({ blade: t.blade, element: i.containerElement, viewProps: t.viewProps }), view: i })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new Xh(e, { props: t.itemProps, viewProps: Vt.create() }), this.ic_.emitter.on("click", this.onItemClick_), this.props = t.props, xe(this.props, "selected", (s) => {
      this.itemController.props.set("selected", s), this.viewProps.set("hidden", !s);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(e) {
    return se(e, (t) => super.importState(t), (t) => ({ selected: t.required.boolean, title: t.required.string }), (t) => (this.ic_.props.set("selected", t.selected), this.ic_.props.set("title", t.title), true));
  }
  exportState() {
    return re(() => super.exportState(), { selected: this.ic_.props.get("selected"), title: this.ic_.props.get("title") });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
}, Wh = class extends tr {
  constructor(e, t) {
    super(e, t), this.emitter_ = new D(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = t, this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(e) {
    const t = this.controller.view.element.ownerDocument, i = new Ss(t, { blade: tn(), itemProps: v.fromObject({ selected: false, title: e.title }), props: v.fromObject({ selected: false }), viewProps: Vt.create() }), s = this.pool_.createApi(i);
    return this.rackApi_.add(s, e.index);
  }
  removePage(e) {
    this.rackApi_.remove(this.rackApi_.children[e]);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
  onSelect_(e) {
    this.emitter_.emit("select", new nh(this, e.rawValue));
  }
}, Zh = class extends tr {
  get title() {
    var e;
    return (e = this.controller.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.itemController.props.set("title", e);
  }
  get selected() {
    return this.controller.props.get("selected");
  }
  set selected(e) {
    this.controller.props.set("selected", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
};
const Ko = -1;
let Jh = class {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = k(true), this.selectedIndex = k(Ko), this.items_ = [];
  }
  add(e, t) {
    const i = t ?? this.items_.length;
    this.items_.splice(i, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    t < 0 || (this.items_.splice(t, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = Ko, this.empty.rawValue = true;
      return;
    }
    const e = this.items_.findIndex((t) => t.rawValue);
    e < 0 ? (this.items_.forEach((t, i) => {
      t.rawValue = i === 0;
    }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((t, i) => {
      t.rawValue = i === e;
    }), this.selectedIndex.rawValue = e), this.empty.rawValue = false;
  }
  onItemSelectedChange_(e) {
    if (e.rawValue) {
      const t = this.items_.findIndex((i) => i === e.sender);
      this.items_.forEach((i, s) => {
        i.rawValue = s === t;
      }), this.selectedIndex.rawValue = t;
    } else this.keepSelection_();
  }
};
const hn = _("tab");
let Qh = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(hn(), La()), t.viewProps.bindClassModifiers(this.element), je(t.empty, Qt(this.element, hn(void 0, "nop")));
    const i = e.createElement("div");
    i.classList.add(hn("t")), this.element.appendChild(i), this.itemsElement = i;
    const s = e.createElement("div");
    s.classList.add(hn("i")), this.element.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(hn("c")), this.element.appendChild(r), this.contentsElement = r;
  }
}, Uo = class extends nr {
  constructor(e, t) {
    const i = new Jh(), s = new Qh(e, { empty: i.empty, viewProps: t.viewProps });
    super({ blade: t.blade, rackController: new ir({ blade: t.blade, element: s.contentsElement, viewProps: t.viewProps }), view: s }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
    const r = this.rackController.rack;
    r.emitter.on("add", this.onRackAdd_), r.emitter.on("remove", this.onRackRemove_), this.tab = i;
  }
  add(e, t) {
    this.rackController.rack.add(e, t);
  }
  remove(e) {
    this.rackController.rack.remove(this.rackController.rack.children[e]);
  }
  onRackAdd_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    ga(this.view.itemsElement, t.itemController.view.element, e.index), t.itemController.viewProps.set("parent", this.viewProps), this.tab.add(t.props.value("selected"));
  }
  onRackRemove_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    Qs(t.itemController.view.element), t.itemController.viewProps.set("parent", null), this.tab.remove(t.props.value("selected"));
  }
};
const Aa = X({ id: "tab", type: "blade", accept(n) {
  const e = S(n, (t) => ({ pages: t.required.array(t.required.object({ title: t.required.string })), view: t.required.constant("tab") }));
  return !e || e.pages.length === 0 ? null : { params: e };
}, controller(n) {
  const e = new Uo(n.document, { blade: n.blade, viewProps: n.viewProps });
  return n.params.pages.forEach((t) => {
    const i = new Ss(n.document, { blade: tn(), itemProps: v.fromObject({ selected: false, title: t.title }), props: v.fromObject({ selected: false }), viewProps: Vt.create() });
    e.add(i);
  }), e;
}, api(n) {
  return n.controller instanceof Uo ? new Wh(n.controller, n.pool) : n.controller instanceof Ss ? new Zh(n.controller, n.pool) : null;
} });
function ed(n, e) {
  const t = n.accept(e.params);
  if (!t) return null;
  const i = S(e.params, (s) => ({ disabled: s.optional.boolean, hidden: s.optional.boolean }));
  return n.controller({ blade: tn(), document: e.document, params: Object.assign(Object.assign({}, t.params), { disabled: i == null ? void 0 : i.disabled, hidden: i == null ? void 0 : i.hidden }), viewProps: Vt.create({ disabled: i == null ? void 0 : i.disabled, hidden: i == null ? void 0 : i.hidden }) });
}
let or = class extends kn {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(e) {
    this.controller.valueController.props.set("options", e);
  }
}, td = class {
  constructor() {
    this.disabled = false, this.emitter = new D();
  }
  dispose() {
  }
  tick() {
    this.disabled || this.emitter.emit("tick", { sender: this });
  }
}, nd = class {
  constructor(e, t) {
    this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = e, this.emitter = new D(), this.interval_ = t, this.setTimer_();
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(e) {
    this.disabled_ = e, this.disabled_ ? this.clearTimer_() : this.setTimer_();
  }
  dispose() {
    this.clearTimer_();
  }
  clearTimer_() {
    if (this.timerId_ === null) return;
    const e = this.doc_.defaultView;
    e && e.clearInterval(this.timerId_), this.timerId_ = null;
  }
  setTimer_() {
    if (this.clearTimer_(), this.interval_ <= 0) return;
    const e = this.doc_.defaultView;
    e && (this.timerId_ = e.setInterval(this.onTick_, this.interval_));
  }
  onTick_() {
    this.disabled_ || this.emitter.emit("tick", { sender: this });
  }
}, Fn = class {
  constructor(e) {
    this.constraints = e;
  }
  constrain(e) {
    return this.constraints.reduce((t, i) => i.constrain(t), e);
  }
};
function mi(n, e) {
  if (n instanceof e) return n;
  if (n instanceof Fn) {
    const t = n.constraints.reduce((i, s) => i || (s instanceof e ? s : null), null);
    if (t) return t;
  }
  return null;
}
let Kn = class {
  constructor(e) {
    this.values = v.fromObject({ options: e });
  }
  constrain(e) {
    const t = this.values.get("options");
    return t.length === 0 || t.filter((s) => s.value === e).length > 0 ? e : t[0].value;
  }
};
function Un(n) {
  var e;
  const t = ks;
  if (Array.isArray(n)) return (e = S({ items: n }, (i) => ({ items: i.required.array(i.required.object({ text: i.required.string, value: i.required.raw })) }))) === null || e === void 0 ? void 0 : e.items;
  if (typeof n == "object") return t.required.raw(n).value;
}
function lr(n) {
  if (Array.isArray(n)) return n;
  const e = [];
  return Object.keys(n).forEach((t) => {
    e.push({ text: t, value: n[t] });
  }), e;
}
function ar(n) {
  return y(n) ? null : new Kn(lr(n));
}
const Ji = _("lst");
let id = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.element = e.createElement("div"), this.element.classList.add(Ji()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("select");
    i.classList.add(Ji("s")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.selectElement = i;
    const s = e.createElement("div");
    s.classList.add(Ji("m")), s.appendChild(Vi(e, "dropdown")), this.element.appendChild(s), t.value.emitter.on("change", this.onValueChange_), this.value_ = t.value, xe(this.props_, "options", (r) => {
      Ca(this.selectElement), r.forEach((o) => {
        const l = e.createElement("option");
        l.textContent = o.text, this.selectElement.appendChild(l);
      }), this.update_();
    });
  }
  update_() {
    const e = this.props_.get("options").map((t) => t.value);
    this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
}, ot = class {
  constructor(e, t) {
    this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new id(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = this.props.get("options")[t.selectedIndex].value;
  }
  importProps(e) {
    return se(e, null, (t) => ({ options: t.required.custom(Un) }), (t) => (this.props.set("options", lr(t.options)), true));
  }
  exportProps() {
    return re(null, { options: this.props.get("options") });
  }
};
const zo = _("pop");
let sd = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(zo()), t.viewProps.bindClassModifiers(this.element), je(t.shows, Qt(this.element, zo(void 0, "v")));
  }
}, Ta = class {
  constructor(e, t) {
    this.shows = k(false), this.viewProps = t.viewProps, this.view = new sd(e, { shows: this.shows, viewProps: this.viewProps });
  }
};
const Ho = _("txt");
let rd = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Ho()), t.viewProps.bindClassModifiers(this.element), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_);
    const i = e.createElement("input");
    i.classList.add(Ho("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onChange_), this.value_ = t.value, this.refresh();
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}, Vn = class {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = t.parser, this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new rd(e, { props: t.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    y(s) || (this.value.rawValue = s), this.view.refresh();
  }
};
function od(n) {
  return String(n);
}
function Oa(n) {
  return n === "false" ? false : !!n;
}
function qo(n) {
  return od(n);
}
function ld(n) {
  return (e) => n.reduce((t, i) => t !== null ? t : i(e), null);
}
const ad = Q(0);
function vi(n) {
  return ad(n) + "%";
}
function Da(n) {
  return String(n);
}
function Ls(n) {
  return n;
}
function nn({ primary: n, secondary: e, forward: t, backward: i }) {
  let s = false;
  function r(o) {
    s || (s = true, o(), s = false);
  }
  n.emitter.on("change", (o) => {
    r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), e.emitter.on("change", (o) => {
    r(() => {
      n.setRawValue(i(n.rawValue, e.rawValue), o.options);
    }), r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), r(() => {
    e.setRawValue(t(n.rawValue, e.rawValue), { forceEmit: false, last: true });
  });
}
function Z(n, e) {
  const t = n * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
  return e.upKey ? +t : e.downKey ? -t : 0;
}
function $n(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowDown", shiftKey: n.shiftKey, upKey: n.key === "ArrowUp" };
}
function Ie(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowLeft", shiftKey: n.shiftKey, upKey: n.key === "ArrowRight" };
}
function ud(n) {
  return n === "ArrowUp" || n === "ArrowDown";
}
function Ra(n) {
  return ud(n) || n === "ArrowLeft" || n === "ArrowRight";
}
function Qi(n, e) {
  var t, i;
  const s = e.ownerDocument.defaultView, r = e.getBoundingClientRect();
  return { x: n.pageX - (((t = s && s.scrollX) !== null && t !== void 0 ? t : 0) + r.left), y: n.pageY - (((i = s && s.scrollY) !== null && i !== void 0 ? i : 0) + r.top) };
}
let $t = class {
  constructor(e) {
    this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new D(), e.addEventListener("touchstart", this.onTouchStart_, { passive: false }), e.addEventListener("touchmove", this.onTouchMove_, { passive: true }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(e) {
    const t = this.elem_.getBoundingClientRect();
    return { bounds: { width: t.width, height: t.height }, point: e ? { x: e.x, y: e.y } : null };
  }
  onMouseDown_(e) {
    var t;
    e.preventDefault(), (t = e.currentTarget) === null || t === void 0 || t.focus();
    const i = this.elem_.ownerDocument;
    i.addEventListener("mousemove", this.onDocumentMouseMove_), i.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(Qi(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseMove_(e) {
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(Qi(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseUp_(e) {
    const t = this.elem_.ownerDocument;
    t.removeEventListener("mousemove", this.onDocumentMouseMove_), t.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(Qi(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onTouchStart_(e) {
    e.preventDefault();
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchMove_(e) {
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchEnd_(e) {
    var t;
    const i = (t = e.targetTouches.item(0)) !== null && t !== void 0 ? t : this.lastTouch_, s = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(i ? { x: i.clientX - s.left, y: i.clientY - s.top } : void 0), sender: this, shiftKey: e.shiftKey });
  }
};
const le = _("txt");
let pd = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(le(), le(void 0, "num")), t.arrayPosition && this.element.classList.add(le(void 0, t.arrayPosition)), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(le("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = t.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(le()), this.inputElement.classList.add(le("i"));
    const s = e.createElement("div");
    s.classList.add(le("k")), this.element.appendChild(s), this.knobElement = s;
    const r = e.createElementNS(Pe, "svg");
    r.classList.add(le("g")), this.knobElement.appendChild(r);
    const o = e.createElementNS(Pe, "path");
    o.classList.add(le("gb")), r.appendChild(o), this.guideBodyElem_ = o;
    const l = e.createElementNS(Pe, "path");
    l.classList.add(le("gh")), r.appendChild(l), this.guideHeadElem_ = l;
    const a = e.createElement("div");
    a.classList.add(_("tt")()), this.knobElement.appendChild(a), this.tooltipElem_ = a, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.refresh();
  }
  onDraggingChange_(e) {
    if (e.rawValue === null) {
      this.element.classList.remove(le(void 0, "drg"));
      return;
    }
    this.element.classList.add(le(void 0, "drg"));
    const t = e.rawValue / this.props_.get("pointerScale"), i = t + (t > 0 ? -1 : t < 0 ? 1 : 0), s = R(-i, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + s},0 L${i},4 L${i + s},8`, `M ${t},-1 L${t},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
    const r = this.props_.get("formatter");
    this.tooltipElem_.textContent = r(this.value.rawValue), this.tooltipElem_.style.left = `${t}px`;
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}, zn = class {
  constructor(e, t) {
    var i;
    this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = t.parser, this.props = t.props, this.sliderProps_ = (i = t.sliderProps) !== null && i !== void 0 ? i : null, this.value = t.value, this.viewProps = t.viewProps, this.dragging_ = k(null), this.view = new pd(e, { arrayPosition: t.arrayPosition, dragging: this.dragging_, props: this.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const s = new $t(this.view.knobElement);
    s.emitter.on("down", this.onPointerDown_), s.emitter.on("move", this.onPointerMove_), s.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(e) {
    var t, i;
    const s = (t = this.sliderProps_) === null || t === void 0 ? void 0 : t.get("min"), r = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max");
    let o = e;
    return s !== void 0 && (o = Math.max(o, s)), r !== void 0 && (o = Math.min(o, r)), o;
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    y(s) || (this.value.rawValue = this.constrainValue_(s)), this.view.refresh();
  }
  onInputKeyDown_(e) {
    const t = Z(this.props.get("keyScale"), $n(e));
    t !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), { forceEmit: false, last: false });
  }
  onInputKeyUp_(e) {
    Z(this.props.get("keyScale"), $n(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
  onPointerDown_() {
    this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
  }
  computeDraggingValue_(e) {
    if (!e.point) return null;
    const t = e.point.x - e.bounds.width / 2;
    return this.constrainValue_(this.originRawValue_ + t * this.props.get("pointerScale"));
  }
  onPointerMove_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: false, last: false }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
  }
  onPointerUp_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: true, last: true }), this.dragging_.rawValue = null);
  }
};
const es = _("sld");
let cd = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(es()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(es("t")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.trackElement = i;
    const s = e.createElement("div");
    s.classList.add(es("k")), this.trackElement.appendChild(s), this.knobElement = s, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.update_();
  }
  update_() {
    const e = R(g(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${e}%`;
  }
  onChange_() {
    this.update_();
  }
}, hd = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.props = t.props, this.view = new cd(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new $t(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    e.point && this.value.setRawValue(g(R(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("min"), this.props.get("max")), t);
  }
  onPointerDownOrMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = Z(this.props.get("keyScale"), Ie(e));
    t !== 0 && this.value.setRawValue(this.value.rawValue + t, { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    Z(this.props.get("keyScale"), Ie(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const ts = _("sldtxt");
let dd = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ts());
    const i = e.createElement("div");
    i.classList.add(ts("s")), this.sliderView_ = t.sliderView, i.appendChild(this.sliderView_.element), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ts("t")), this.textView_ = t.textView, s.appendChild(this.textView_.element), this.element.appendChild(s);
  }
}, bi = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.sliderC_ = new hd(e, { props: t.sliderProps, value: t.value, viewProps: this.viewProps }), this.textC_ = new zn(e, { parser: t.parser, props: t.textProps, sliderProps: t.sliderProps, value: t.value, viewProps: t.viewProps }), this.view = new dd(e, { sliderView: this.sliderC_.view, textView: this.textC_.view });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(e) {
    return se(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => {
      const i = this.sliderC_.props;
      return i.set("max", t.max), i.set("min", t.min), true;
    });
  }
  exportProps() {
    const e = this.sliderC_.props;
    return re(null, { max: e.get("max"), min: e.get("min") });
  }
};
function ja(n) {
  return { sliderProps: new v({ keyScale: n.keyScale, max: n.max, min: n.min }), textProps: new v({ formatter: k(n.formatter), keyScale: n.keyScale, pointerScale: k(n.pointerScale) }) };
}
const md = { containerUnitSize: "cnt-usz" };
function Ba(n) {
  return `--${md[n]}`;
}
function Sn(n) {
  return _a(n);
}
function et(n) {
  if (Es(n)) return S(n, Sn);
}
function Oe(n, e) {
  if (!n) return;
  const t = [], i = va(n, e);
  i && t.push(i);
  const s = ba(n);
  return s && t.push(s), new Fn(t);
}
function vd(n) {
  return n ? n.major === en.major : false;
}
function Na(n) {
  if (n === "inline" || n === "popup") return n;
}
function Hn(n, e) {
  n.write(e);
}
const ni = _("ckb");
let bd = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(ni()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("label");
    i.classList.add(ni("l")), this.element.appendChild(i), this.labelElement = i;
    const s = e.createElement("input");
    s.classList.add(ni("i")), s.type = "checkbox", this.labelElement.appendChild(s), this.inputElement = s, t.viewProps.bindDisabled(this.inputElement);
    const r = e.createElement("div");
    r.classList.add(ni("w")), this.labelElement.appendChild(r);
    const o = Vi(e, "check");
    r.appendChild(o), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}, wd = class {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new bd(e, { value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
  }
  onInputChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = t.checked, e.preventDefault(), e.stopPropagation();
  }
  onLabelMouseDown_(e) {
    e.preventDefault();
  }
};
function _d(n) {
  const e = [], t = ar(n.options);
  return t && e.push(t), new Fn(e);
}
const fd = X({ id: "input-bool", type: "input", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = S(e, (i) => ({ options: i.optional.custom(Un), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Oa, constraint: (n) => _d(n.params), writer: (n) => Hn }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && mi(i, Kn);
  return s ? new ot(e, { props: new v({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new wd(e, { value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof ot ? new or(n.controller) : null;
} }), ct = _("col");
let gd = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ct()), t.foldable.bindExpandedClass(this.element, ct(void 0, "expanded")), xe(t.foldable, "completed", Qt(this.element, ct(void 0, "cpl")));
    const i = e.createElement("div");
    i.classList.add(ct("h")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ct("s")), i.appendChild(s), this.swatchElement = s;
    const r = e.createElement("div");
    if (r.classList.add(ct("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(ct("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
};
function Cd(n, e, t) {
  const i = R(n / 255, 0, 1), s = R(e / 255, 0, 1), r = R(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u = 0, p = 0;
  const c = (l + o) / 2;
  return a !== 0 && (p = a / (1 - Math.abs(o + l - 1)), i === o ? u = (s - r) / a : s === o ? u = 2 + (r - i) / a : u = 4 + (i - s) / a, u = u / 6 + (u < 0 ? 1 : 0)), [u * 360, p * 100, c * 100];
}
function Pd(n, e, t) {
  const i = (n % 360 + 360) % 360, s = R(e / 100, 0, 1), r = R(t / 100, 0, 1), o = (1 - Math.abs(2 * r - 1)) * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o / 2;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function xd(n, e, t) {
  const i = R(n / 255, 0, 1), s = R(e / 255, 0, 1), r = R(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u;
  a === 0 ? u = 0 : o === i ? u = 60 * (((s - r) / a % 6 + 6) % 6) : o === s ? u = 60 * ((r - i) / a + 2) : u = 60 * ((i - s) / a + 4);
  const p = o === 0 ? 0 : a / o, c = o;
  return [u, p * 100, c * 100];
}
function Ia(n, e, t) {
  const i = ha(n, 360), s = R(e / 100, 0, 1), r = R(t / 100, 0, 1), o = r * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function yd(n, e, t) {
  const i = t + e * (100 - Math.abs(2 * t - 100)) / 200;
  return [n, i !== 0 ? e * (100 - Math.abs(2 * t - 100)) / i : 0, t + e * (100 - Math.abs(2 * t - 100)) / 200];
}
function Ed(n, e, t) {
  const i = 100 - Math.abs(t * (200 - e) / 100 - 100);
  return [n, i !== 0 ? e * t / i : 0, t * (200 - e) / 200];
}
function ye(n) {
  return [n[0], n[1], n[2]];
}
function Si(n, e) {
  return [n[0], n[1], n[2], e];
}
const kd = { hsl: { hsl: (n, e, t) => [n, e, t], hsv: yd, rgb: Pd }, hsv: { hsl: Ed, hsv: (n, e, t) => [n, e, t], rgb: Ia }, rgb: { hsl: Cd, hsv: xd, rgb: (n, e, t) => [n, e, t] } };
function Yt(n, e) {
  return [e === "float" ? 1 : n === "rgb" ? 255 : 360, e === "float" ? 1 : n === "rgb" ? 255 : 100, e === "float" ? 1 : n === "rgb" ? 255 : 100];
}
function Vd(n, e) {
  return n === e ? e : ha(n, e);
}
function Fa(n, e, t) {
  var i;
  const s = Yt(e, t);
  return [e === "rgb" ? R(n[0], 0, s[0]) : Vd(n[0], s[0]), R(n[1], 0, s[1]), R(n[2], 0, s[2]), R((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1)];
}
function Go(n, e, t, i) {
  const s = Yt(e, t), r = Yt(e, i);
  return n.map((o, l) => o / s[l] * r[l]);
}
function Ka(n, e, t) {
  const i = Go(n, e.mode, e.type, "int"), s = kd[e.mode][t.mode](...i);
  return Go(s, t.mode, "int", t.type);
}
let P = class Ua {
  static black() {
    return new Ua([0, 0, 0], "rgb");
  }
  constructor(e, t) {
    this.type = "int", this.mode = t, this.comps_ = Fa(e, t, this.type);
  }
  getComponents(e) {
    return Si(Ka(ye(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
};
const ze = _("colp");
let $d = class {
  constructor(e, t) {
    this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(ze()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(ze("hsv"));
    const s = e.createElement("div");
    s.classList.add(ze("sv")), this.svPaletteView_ = t.svPaletteView, s.appendChild(this.svPaletteView_.element), i.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(ze("h")), this.hPaletteView_ = t.hPaletteView, r.appendChild(this.hPaletteView_.element), i.appendChild(r), this.element.appendChild(i);
    const o = e.createElement("div");
    if (o.classList.add(ze("rgb")), this.textsView_ = t.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), t.alphaViews) {
      this.alphaViews_ = { palette: t.alphaViews.palette, text: t.alphaViews.text };
      const l = e.createElement("div");
      l.classList.add(ze("a"));
      const a = e.createElement("div");
      a.classList.add(ze("ap")), a.appendChild(this.alphaViews_.palette.element), l.appendChild(a);
      const u = e.createElement("div");
      u.classList.add(ze("at")), u.appendChild(this.alphaViews_.text.element), l.appendChild(u), this.element.appendChild(l);
    }
  }
  get allFocusableElements() {
    const e = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map((t) => t.inputElement)];
    return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
  }
};
function Sd(n) {
  return n === "int" ? "int" : n === "float" ? "float" : void 0;
}
function ur(n) {
  return S(n, (e) => ({ color: e.optional.object({ alpha: e.optional.boolean, type: e.optional.custom(Sd) }), expanded: e.optional.boolean, picker: e.optional.custom(Na), readonly: e.optional.constant(false) }));
}
function ft(n) {
  return n ? 0.1 : 1;
}
function za(n) {
  var e;
  return (e = n.color) === null || e === void 0 ? void 0 : e.type;
}
let pr = class {
  constructor(e, t) {
    this.type = "float", this.mode = t, this.comps_ = Fa(e, t, this.type);
  }
  getComponents(e) {
    return Si(Ka(ye(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
};
const Ld = { int: (n, e) => new P(n, e), float: (n, e) => new pr(n, e) };
function cr(n, e, t) {
  return Ld[t](n, e);
}
function Md(n) {
  return n.type === "float";
}
function Ad(n) {
  return n.type === "int";
}
function Td(n) {
  const e = n.getComponents(), t = Yt(n.mode, "int");
  return new P([Math.round(g(e[0], 0, 1, 0, t[0])), Math.round(g(e[1], 0, 1, 0, t[1])), Math.round(g(e[2], 0, 1, 0, t[2])), e[3]], n.mode);
}
function Od(n) {
  const e = n.getComponents(), t = Yt(n.mode, "int");
  return new pr([g(e[0], 0, t[0], 0, 1), g(e[1], 0, t[1], 0, 1), g(e[2], 0, t[2], 0, 1), e[3]], n.mode);
}
function q(n, e) {
  if (n.type === e) return n;
  if (Ad(n) && e === "float") return Od(n);
  if (Md(n) && e === "int") return Td(n);
  throw U.shouldNeverHappen();
}
function Dd(n, e) {
  return n.alpha === e.alpha && n.mode === e.mode && n.notation === e.notation && n.type === e.type;
}
function ce(n, e) {
  const t = n.match(/^(.+)%$/);
  return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(n), e);
}
const Rd = { deg: (n) => n, grad: (n) => n * 360 / 400, rad: (n) => n * 360 / (2 * Math.PI), turn: (n) => n * 360 };
function Ha(n) {
  const e = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!e) return parseFloat(n);
  const t = parseFloat(e[1]), i = e[2];
  return Rd[i](t);
}
function qa(n) {
  const e = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [ce(e[1], 255), ce(e[2], 255), ce(e[3], 255)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function jd(n) {
  const e = qa(n);
  return e ? new P(e, "rgb") : null;
}
function Ga(n) {
  const e = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [ce(e[1], 255), ce(e[2], 255), ce(e[3], 255), ce(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function Bd(n) {
  const e = Ga(n);
  return e ? new P(e, "rgb") : null;
}
function Ya(n) {
  const e = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [Ha(e[1]), ce(e[2], 100), ce(e[3], 100)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function Nd(n) {
  const e = Ya(n);
  return e ? new P(e, "hsl") : null;
}
function Xa(n) {
  const e = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [Ha(e[1]), ce(e[2], 100), ce(e[3], 100), ce(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function Id(n) {
  const e = Xa(n);
  return e ? new P(e, "hsl") : null;
}
function Wa(n) {
  const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
  const t = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null;
}
function Fd(n) {
  const e = Wa(n);
  return e ? new P(e, "rgb") : null;
}
function Za(n) {
  const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), g(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)];
  const t = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), g(parseInt(t[4], 16), 0, 255, 0, 1)] : null;
}
function Kd(n) {
  const e = Za(n);
  return e ? new P(e, "rgb") : null;
}
function Ja(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function Ud(n) {
  return (e) => {
    const t = Ja(e);
    return t ? cr(t, "rgb", n) : null;
  };
}
function Qa(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), parseFloat(e[4])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function zd(n) {
  return (e) => {
    const t = Qa(e);
    return t ? cr(t, "rgb", n) : null;
  };
}
const Hd = [{ parser: Wa, result: { alpha: false, mode: "rgb", notation: "hex" } }, { parser: Za, result: { alpha: true, mode: "rgb", notation: "hex" } }, { parser: qa, result: { alpha: false, mode: "rgb", notation: "func" } }, { parser: Ga, result: { alpha: true, mode: "rgb", notation: "func" } }, { parser: Ya, result: { alpha: false, mode: "hsl", notation: "func" } }, { parser: Xa, result: { alpha: true, mode: "hsl", notation: "func" } }, { parser: Ja, result: { alpha: false, mode: "rgb", notation: "object" } }, { parser: Qa, result: { alpha: true, mode: "rgb", notation: "object" } }];
function qd(n) {
  return Hd.reduce((e, { parser: t, result: i }) => e || (t(n) ? i : null), null);
}
function Gd(n, e = "int") {
  const t = qd(n);
  return t ? t.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, t), { type: "int" }) : t.notation === "func" ? Object.assign(Object.assign({}, t), { type: e }) : null : null;
}
function qn(n) {
  const e = [Fd, Kd, jd, Bd, Nd, Id];
  e.push(Ud("int"), zd("int"));
  const t = ld(e);
  return (i) => {
    const s = t(i);
    return s ? q(s, n) : null;
  };
}
function Yd(n) {
  const e = qn("int");
  if (typeof n != "string") return P.black();
  const t = e(n);
  return t ?? P.black();
}
function eu(n) {
  const e = R(Math.floor(n), 0, 255).toString(16);
  return e.length === 1 ? `0${e}` : e;
}
function hr(n, e = "#") {
  const t = ye(n.getComponents("rgb")).map(eu).join("");
  return `${e}${t}`;
}
function dr(n, e = "#") {
  const t = n.getComponents("rgb"), i = [t[0], t[1], t[2], t[3] * 255].map(eu).join("");
  return `${e}${i}`;
}
function tu(n) {
  const e = Q(0), t = q(n, "int");
  return `rgb(${ye(t.getComponents("rgb")).map((s) => e(s)).join(", ")})`;
}
function ri(n) {
  const e = Q(2), t = Q(0);
  return `rgba(${q(n, "int").getComponents("rgb").map((r, o) => (o === 3 ? e : t)(r)).join(", ")})`;
}
function Xd(n) {
  const e = [Q(0), vi, vi], t = q(n, "int");
  return `hsl(${ye(t.getComponents("hsl")).map((s, r) => e[r](s)).join(", ")})`;
}
function Wd(n) {
  const e = [Q(0), vi, vi, Q(2)];
  return `hsla(${q(n, "int").getComponents("hsl").map((s, r) => e[r](s)).join(", ")})`;
}
function nu(n, e) {
  const t = Q(e === "float" ? 2 : 0), i = ["r", "g", "b"], s = q(n, e);
  return `{${ye(s.getComponents("rgb")).map((o, l) => `${i[l]}: ${t(o)}`).join(", ")}}`;
}
function Zd(n) {
  return (e) => nu(e, n);
}
function iu(n, e) {
  const t = Q(2), i = Q(e === "float" ? 2 : 0), s = ["r", "g", "b", "a"];
  return `{${q(n, e).getComponents("rgb").map((l, a) => {
    const u = a === 3 ? t : i;
    return `${s[a]}: ${u(l)}`;
  }).join(", ")}}`;
}
function Jd(n) {
  return (e) => iu(e, n);
}
const Qd = [{ format: { alpha: false, mode: "rgb", notation: "hex", type: "int" }, stringifier: hr }, { format: { alpha: true, mode: "rgb", notation: "hex", type: "int" }, stringifier: dr }, { format: { alpha: false, mode: "rgb", notation: "func", type: "int" }, stringifier: tu }, { format: { alpha: true, mode: "rgb", notation: "func", type: "int" }, stringifier: ri }, { format: { alpha: false, mode: "hsl", notation: "func", type: "int" }, stringifier: Xd }, { format: { alpha: true, mode: "hsl", notation: "func", type: "int" }, stringifier: Wd }, ...["int", "float"].reduce((n, e) => [...n, { format: { alpha: false, mode: "rgb", notation: "object", type: e }, stringifier: Zd(e) }, { format: { alpha: true, mode: "rgb", notation: "object", type: e }, stringifier: Jd(e) }], [])];
function su(n) {
  return Qd.reduce((e, t) => e || (Dd(t.format, n) ? t.stringifier : null), null);
}
const dn = _("apl");
let em = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(dn()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(dn("b")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(dn("c")), i.appendChild(s), this.colorElem_ = s;
    const r = e.createElement("div");
    r.classList.add(dn("m")), this.element.appendChild(r), this.markerElem_ = r;
    const o = e.createElement("div");
    o.classList.add(dn("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e.getComponents("rgb"), i = new P([t[0], t[1], t[2], 0], "rgb"), s = new P([t[0], t[1], t[2], 255], "rgb"), r = ["to right", ri(i), ri(s)];
    this.colorElem_.style.background = `linear-gradient(${r.join(",")})`, this.previewElem_.style.backgroundColor = ri(e);
    const o = g(t[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, tm = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new em(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new $t(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = e.point.x / e.bounds.width, s = this.value.rawValue, [r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new P([r, o, l, i], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = Z(ft(true), Ie(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new P([s, r, o, l + t], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    Z(ft(true), Ie(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const Tt = _("coltxt");
function nm(n) {
  const e = n.createElement("select"), t = [{ text: "RGB", value: "rgb" }, { text: "HSL", value: "hsl" }, { text: "HSV", value: "hsv" }, { text: "HEX", value: "hex" }];
  return e.appendChild(t.reduce((i, s) => {
    const r = n.createElement("option");
    return r.textContent = s.text, r.value = s.value, i.appendChild(r), i;
  }, n.createDocumentFragment())), e;
}
let im = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Tt()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Tt("m")), this.modeElem_ = nm(e), this.modeElem_.classList.add(Tt("ms")), i.appendChild(this.modeSelectElement), t.viewProps.bindDisabled(this.modeElem_);
    const s = e.createElement("div");
    s.classList.add(Tt("mm")), s.appendChild(Vi(e, "dropdown")), i.appendChild(s), this.element.appendChild(i);
    const r = e.createElement("div");
    r.classList.add(Tt("w")), this.element.appendChild(r), this.inputsElem_ = r, this.inputViews_ = t.inputViews, this.applyInputViews_(), je(t.mode, (o) => {
      this.modeElem_.value = o;
    });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(e) {
    this.inputViews_ = e, this.applyInputViews_();
  }
  applyInputViews_() {
    Ca(this.inputsElem_);
    const e = this.element.ownerDocument;
    this.inputViews_.forEach((t) => {
      const i = e.createElement("div");
      i.classList.add(Tt("c")), i.appendChild(t.element), this.inputsElem_.appendChild(i);
    });
  }
};
function sm(n) {
  return Q(n === "float" ? 2 : 0);
}
function rm(n, e, t) {
  const i = Yt(n, e)[t];
  return new Nn({ min: 0, max: i });
}
function om(n, e, t) {
  return new zn(n, { arrayPosition: t === 0 ? "fst" : t === 2 ? "lst" : "mid", parser: e.parser, props: v.fromObject({ formatter: sm(e.colorType), keyScale: ft(false), pointerScale: e.colorType === "float" ? 0.01 : 1 }), value: k(0, { constraint: rm(e.colorMode, e.colorType, t) }), viewProps: e.viewProps });
}
function lm(n, e) {
  const t = { colorMode: e.colorMode, colorType: e.colorType, parser: Ne, viewProps: e.viewProps };
  return [0, 1, 2].map((i) => {
    const s = om(n, t, i);
    return nn({ primary: e.value, secondary: s.value, forward(r) {
      return q(r, e.colorType).getComponents(e.colorMode)[i];
    }, backward(r, o) {
      const l = e.colorMode, u = q(r, e.colorType).getComponents(l);
      u[i] = o;
      const p = cr(Si(ye(u), u[3]), l, e.colorType);
      return q(p, "int");
    } }), s;
  });
}
function am(n, e) {
  const t = new Vn(n, { parser: qn("int"), props: v.fromObject({ formatter: hr }), value: k(P.black()), viewProps: e.viewProps });
  return nn({ primary: e.value, secondary: t.value, forward: (i) => new P(ye(i.getComponents()), i.mode), backward: (i, s) => new P(Si(ye(s.getComponents(i.mode)), i.getComponents()[3]), i.mode) }), [t];
}
function um(n) {
  return n !== "hex";
}
let pm = class {
  constructor(e, t) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = t.colorType, this.value = t.value, this.viewProps = t.viewProps, this.colorMode = k(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new im(e, { mode: this.colorMode, inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view], viewProps: this.viewProps }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(e) {
    const t = this.colorMode.rawValue;
    return um(t) ? lm(e, { colorMode: t, colorType: this.colorType_, value: this.value, viewProps: this.viewProps }) : am(e, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(e) {
    const t = e.currentTarget;
    this.colorMode.rawValue = t.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((i) => i.view);
  }
};
const ns = _("hpl");
let cm = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(ns()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(ns("c")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ns("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue, [t] = e.getComponents("hsv");
    this.markerElem_.style.backgroundColor = tu(new P([t, 100, 100], "hsv"));
    const i = g(t, 0, 360, 0, 100);
    this.markerElem_.style.left = `${i}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, hm = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new cm(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new $t(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = g(R(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), s = this.value.rawValue, [, r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new P([i, r, o, l], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = Z(ft(false), Ie(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new P([s + t, r, o, l], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    Z(ft(false), Ie(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const is = _("svp"), Yo = 64;
let dm = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(is()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("canvas");
    i.height = Yo, i.width = Yo, i.classList.add(is("c")), this.element.appendChild(i), this.canvasElement = i;
    const s = e.createElement("div");
    s.classList.add(is("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = hh(this.canvasElement);
    if (!e) return;
    const i = this.value.rawValue.getComponents("hsv"), s = this.canvasElement.width, r = this.canvasElement.height, o = e.getImageData(0, 0, s, r), l = o.data;
    for (let p = 0; p < r; p++) for (let c = 0; c < s; c++) {
      const L = g(c, 0, s, 0, 100), be = g(p, 0, r, 100, 0), ee = Ia(i[0], L, be), W = (p * s + c) * 4;
      l[W] = ee[0], l[W + 1] = ee[1], l[W + 2] = ee[2], l[W + 3] = 255;
    }
    e.putImageData(o, 0, 0);
    const a = g(i[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${a}%`;
    const u = g(i[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${u}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, mm = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new dm(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new $t(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = g(e.point.x, 0, e.bounds.width, 0, 100), s = g(e.point.y, 0, e.bounds.height, 100, 0), [r, , , o] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new P([r, i, s, o], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    Ra(e.key) && e.preventDefault();
    const [t, i, s, r] = this.value.rawValue.getComponents("hsv"), o = ft(false), l = Z(o, Ie(e)), a = Z(o, $n(e));
    l === 0 && a === 0 || this.value.setRawValue(new P([t, i + l, s + a, r], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    const t = ft(false), i = Z(t, Ie(e)), s = Z(t, $n(e));
    i === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}, vm = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.hPaletteC_ = new hm(e, { value: this.value, viewProps: this.viewProps }), this.svPaletteC_ = new mm(e, { value: this.value, viewProps: this.viewProps }), this.alphaIcs_ = t.supportsAlpha ? { palette: new tm(e, { value: this.value, viewProps: this.viewProps }), text: new zn(e, { parser: Ne, props: v.fromObject({ pointerScale: 0.01, keyScale: 0.1, formatter: Q(2) }), value: k(0, { constraint: new Nn({ min: 0, max: 1 }) }), viewProps: this.viewProps }) } : null, this.alphaIcs_ && nn({ primary: this.value, secondary: this.alphaIcs_.text.value, forward: (i) => i.getComponents()[3], backward: (i, s) => {
      const r = i.getComponents();
      return r[3] = s, new P(r, i.mode);
    } }), this.textsC_ = new pm(e, { colorType: t.colorType, value: this.value, viewProps: this.viewProps }), this.view = new $d(e, { alphaViews: this.alphaIcs_ ? { palette: this.alphaIcs_.palette.view, text: this.alphaIcs_.text.view } : null, hPaletteView: this.hPaletteC_.view, supportsAlpha: t.supportsAlpha, svPaletteView: this.svPaletteC_.view, textsView: this.textsC_.view, viewProps: this.viewProps });
  }
  get textsController() {
    return this.textsC_;
  }
};
const ss = _("colsw");
let bm = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.element = e.createElement("div"), this.element.classList.add(ss()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(ss("sw")), this.element.appendChild(i), this.swatchElem_ = i;
    const s = e.createElement("button");
    s.classList.add(ss("b")), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = dr(e);
  }
  onValueChange_() {
    this.update_();
  }
}, wm = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new bm(e, { value: this.value, viewProps: this.viewProps });
  }
}, mr = class {
  constructor(e, t) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = sr.create(t.expanded), this.swatchC_ = new wm(e, { value: this.value, viewProps: this.viewProps });
    const i = this.swatchC_.view.buttonElement;
    i.addEventListener("blur", this.onButtonBlur_), i.addEventListener("click", this.onButtonClick_), this.textC_ = new Vn(e, { parser: t.parser, props: v.fromObject({ formatter: t.formatter }), value: this.value, viewProps: this.viewProps }), this.view = new gd(e, { foldable: this.foldable_, pickerLayout: t.pickerLayout }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = t.pickerLayout === "popup" ? new Ta(e, { viewProps: this.viewProps }) : null;
    const s = new vm(e, { colorType: t.colorType, supportsAlpha: t.supportsAlpha, value: this.value, viewProps: this.viewProps });
    s.view.allFocusableElements.forEach((r) => {
      r.addEventListener("blur", this.onPopupChildBlur_), r.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = s, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(s.view.element), nn({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (r) => r, backward: (r, o) => o })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), rr(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Pa(e);
    i && t.contains(i) || i && i === this.swatchC_.view.buttonElement && !Js(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
  }
};
function _m(n) {
  return ye(n.getComponents("rgb")).reduce((e, t) => e << 8 | Math.floor(t) & 255, 0);
}
function fm(n) {
  return n.getComponents("rgb").reduce((e, t, i) => {
    const s = Math.floor(i === 3 ? t * 255 : t) & 255;
    return e << 8 | s;
  }, 0) >>> 0;
}
function gm(n) {
  return new P([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
}
function Cm(n) {
  return new P([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, g(n & 255, 0, 255, 0, 1)], "rgb");
}
function Pm(n) {
  return typeof n != "number" ? P.black() : gm(n);
}
function xm(n) {
  return typeof n != "number" ? P.black() : Cm(n);
}
function oi(n, e) {
  return typeof n != "object" || y(n) ? false : e in n && typeof n[e] == "number";
}
function ru(n) {
  return oi(n, "r") && oi(n, "g") && oi(n, "b");
}
function ou(n) {
  return ru(n) && oi(n, "a");
}
function lu(n) {
  return ru(n);
}
function vr(n, e) {
  if (n.mode !== e.mode || n.type !== e.type) return false;
  const t = n.getComponents(), i = e.getComponents();
  for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return false;
  return true;
}
function Xo(n) {
  return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function ym(n) {
  const e = su(n);
  return e ? (t, i) => {
    Hn(t, e(i));
  } : null;
}
function Em(n) {
  const e = n ? fm : _m;
  return (t, i) => {
    Hn(t, e(i));
  };
}
function km(n, e, t) {
  const s = q(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b), n.writeProperty("a", s.a);
}
function Vm(n, e, t) {
  const s = q(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b);
}
function $m(n, e) {
  return (t, i) => {
    n ? km(t, i, e) : Vm(t, i, e);
  };
}
function Sm(n) {
  var e;
  return !!(!((e = n == null ? void 0 : n.color) === null || e === void 0) && e.alpha);
}
function Lm(n) {
  return n ? (e) => dr(e, "0x") : (e) => hr(e, "0x");
}
function Mm(n) {
  return "color" in n || n.view === "color";
}
const Am = X({ id: "input-color-number", type: "input", accept: (n, e) => {
  if (typeof n != "number" || !Mm(e)) return null;
  const t = ur(e);
  return t ? { initialValue: n, params: Object.assign(Object.assign({}, t), { supportsAlpha: Sm(e) }) } : null;
}, binding: { reader: (n) => n.params.supportsAlpha ? xm : Pm, equals: vr, writer: (n) => Em(n.params.supportsAlpha) }, controller: (n) => {
  var e, t;
  return new mr(n.document, { colorType: "int", expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: Lm(n.params.supportsAlpha), parser: qn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.supportsAlpha, value: n.value, viewProps: n.viewProps });
} });
function Tm(n, e) {
  if (!lu(n)) return q(P.black(), e);
  if (e === "int") {
    const t = Xo(n);
    return new P(t, "rgb");
  }
  if (e === "float") {
    const t = Xo(n);
    return new pr(t, "rgb");
  }
  return q(P.black(), "int");
}
function Om(n) {
  return ou(n);
}
function Dm(n) {
  return (e) => {
    const t = Tm(e, n);
    return q(t, "int");
  };
}
function Rm(n, e) {
  return (t) => n ? iu(t, e) : nu(t, e);
}
const jm = X({ id: "input-color-object", type: "input", accept: (n, e) => {
  var t;
  if (!lu(n)) return null;
  const i = ur(e);
  return i ? { initialValue: n, params: Object.assign(Object.assign({}, i), { colorType: (t = za(e)) !== null && t !== void 0 ? t : "int" }) } : null;
}, binding: { reader: (n) => Dm(n.params.colorType), equals: vr, writer: (n) => $m(Om(n.initialValue), n.params.colorType) }, controller: (n) => {
  var e, t;
  const i = ou(n.initialValue);
  return new mr(n.document, { colorType: n.params.colorType, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: Rm(i, n.params.colorType), parser: qn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: i, value: n.value, viewProps: n.viewProps });
} }), Bm = X({ id: "input-color-string", type: "input", accept: (n, e) => {
  if (typeof n != "string" || e.view === "text") return null;
  const t = Gd(n, za(e));
  if (!t) return null;
  const i = su(t);
  if (!i) return null;
  const s = ur(e);
  return s ? { initialValue: n, params: Object.assign(Object.assign({}, s), { format: t, stringifier: i }) } : null;
}, binding: { reader: () => Yd, equals: vr, writer: (n) => {
  const e = ym(n.params.format);
  if (!e) throw U.notBindable();
  return e;
} }, controller: (n) => {
  var e, t;
  return new mr(n.document, { colorType: n.params.format.type, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: n.params.stringifier, parser: qn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.format.alpha, value: n.value, viewProps: n.viewProps });
} });
let br = class {
  constructor(e) {
    this.components = e.components, this.asm_ = e.assembly;
  }
  constrain(e) {
    const t = this.asm_.toComponents(e).map((i, s) => {
      var r, o;
      return (o = (r = this.components[s]) === null || r === void 0 ? void 0 : r.constrain(i)) !== null && o !== void 0 ? o : i;
    });
    return this.asm_.fromComponents(t);
  }
};
const Wo = _("pndtxt");
let Nm = class {
  constructor(e, t) {
    this.textViews = t.textViews, this.element = e.createElement("div"), this.element.classList.add(Wo()), this.textViews.forEach((i) => {
      const s = e.createElement("div");
      s.classList.add(Wo("a")), s.appendChild(i.element), this.element.appendChild(s);
    });
  }
};
function Im(n, e, t) {
  return new zn(n, { arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid", parser: e.parser, props: e.axes[t].textProps, value: k(0, { constraint: e.axes[t].constraint }), viewProps: e.viewProps });
}
let wr = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.acs_ = t.axes.map((i, s) => Im(e, t, s)), this.acs_.forEach((i, s) => {
      nn({ primary: this.value, secondary: i.value, forward: (r) => t.assembly.toComponents(r)[s], backward: (r, o) => {
        const l = t.assembly.toComponents(r);
        return l[s] = o, t.assembly.fromComponents(l);
      } });
    }), this.view = new Nm(e, { textViews: this.acs_.map((i) => i.view) });
  }
  get textControllers() {
    return this.acs_;
  }
}, Fm = class extends kn {
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.sliderController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.sliderController.props.set("min", e);
  }
};
function Km(n, e) {
  const t = [], i = va(n, e);
  i && t.push(i);
  const s = ba(n);
  s && t.push(s);
  const r = ar(n.options);
  return r && t.push(r), new Fn(t);
}
const Um = X({ id: "input-number", type: "input", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = S(e, (i) => Object.assign(Object.assign({}, _a(i)), { options: i.optional.custom(Un), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => ca, constraint: (n) => Km(n.params, n.initialValue), writer: (n) => Hn }, controller: (n) => {
  const e = n.value, t = n.constraint, i = t && mi(t, Kn);
  if (i) return new ot(n.document, { props: new v({ options: i.values.value("options") }), value: e, viewProps: n.viewProps });
  const s = wa(n.params, e.rawValue), r = t && mi(t, Nn);
  return r ? new bi(n.document, Object.assign(Object.assign({}, ja(Object.assign(Object.assign({}, s), { keyScale: k(s.keyScale), max: r.values.value("max"), min: r.values.value("min") }))), { parser: Ne, value: e, viewProps: n.viewProps })) : new zn(n.document, { parser: Ne, props: v.fromObject(s), value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof bi ? new Fm(n.controller) : n.controller.valueController instanceof ot ? new or(n.controller) : null;
} });
let it = class {
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(e) {
    if (y(e)) return false;
    const t = e.x, i = e.y;
    return !(typeof t != "number" || typeof i != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
};
const au = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new it(...n) }, Ot = _("p2d");
let zm = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Ot()), t.viewProps.bindClassModifiers(this.element), je(t.expanded, Qt(this.element, Ot(void 0, "expanded")));
    const i = e.createElement("div");
    i.classList.add(Ot("h")), this.element.appendChild(i);
    const s = e.createElement("button");
    s.classList.add(Ot("b")), s.appendChild(Vi(e, "p2dpad")), t.viewProps.bindDisabled(s), i.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    if (r.classList.add(Ot("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(Ot("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
};
const He = _("p2dp");
let Hm = class {
  constructor(e, t) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = e.createElement("div"), this.element.classList.add(He()), t.layout === "popup" && this.element.classList.add(He(void 0, "p")), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(He("p")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.padElement = i;
    const s = e.createElementNS(Pe, "svg");
    s.classList.add(He("g")), this.padElement.appendChild(s), this.svgElem_ = s;
    const r = e.createElementNS(Pe, "line");
    r.classList.add(He("ax")), r.setAttributeNS(null, "x1", "0"), r.setAttributeNS(null, "y1", "50%"), r.setAttributeNS(null, "x2", "100%"), r.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(r);
    const o = e.createElementNS(Pe, "line");
    o.classList.add(He("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
    const l = e.createElementNS(Pe, "line");
    l.classList.add(He("l")), l.setAttributeNS(null, "x1", "50%"), l.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(l), this.lineElem_ = l;
    const a = e.createElement("div");
    a.classList.add(He("m")), this.padElement.appendChild(a), this.markerElem_ = a, t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [e, t] = this.value.rawValue.getComponents(), i = this.props_.get("max"), s = g(e, -i, +i, 0, 100), r = g(t, -i, +i, 0, 100), o = this.props_.get("invertsY") ? 100 - r : r;
    this.lineElem_.setAttributeNS(null, "x2", `${s}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${s}%`, this.markerElem_.style.top = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
};
function Zo(n, e, t) {
  return [Z(e[0], Ie(n)), Z(e[1], $n(n)) * (t ? 1 : -1)];
}
let qm = class {
  constructor(e, t) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new Hm(e, { layout: t.layout, props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new $t(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = this.props.get("max"), s = g(e.point.x, 0, e.bounds.width, -i, +i), r = g(this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -i, +i);
    this.value.setRawValue(new it(s, r), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onPadKeyDown_(e) {
    Ra(e.key) && e.preventDefault();
    const [t, i] = Zo(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(new it(this.value.rawValue.x + t, this.value.rawValue.y + i), { forceEmit: false, last: false });
  }
  onPadKeyUp_(e) {
    const [t, i] = Zo(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}, Gm = class {
  constructor(e, t) {
    var i, s;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = sr.create(t.expanded), this.popC_ = t.pickerLayout === "popup" ? new Ta(e, { viewProps: this.viewProps }) : null;
    const r = new qm(e, { layout: t.pickerLayout, props: new v({ invertsY: k(t.invertsY), max: k(t.max), xKeyScale: t.axes[0].textProps.value("keyScale"), yKeyScale: t.axes[1].textProps.value("keyScale") }), value: this.value, viewProps: this.viewProps });
    r.view.allFocusableElements.forEach((o) => {
      o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = r, this.textC_ = new wr(e, { assembly: au, axes: t.axes, parser: t.parser, value: this.value, viewProps: this.viewProps }), this.view = new zm(e, { expanded: this.foldable_.value("expanded"), pickerLayout: t.pickerLayout, viewProps: this.viewProps }), this.view.textElement.appendChild(this.textC_.view.element), (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_), (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), nn({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (o) => o, backward: (o, l) => l })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), rr(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Pa(e);
    i && t.contains(i) || i && i === this.view.buttonElement && !Js(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
  }
};
function Ym(n) {
  return it.isObject(n) ? new it(n.x, n.y) : new it();
}
function Xm(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y);
}
function Wm(n, e) {
  return new br({ assembly: au, components: [Oe(Object.assign(Object.assign({}, n), n.x), e.x), Oe(Object.assign(Object.assign({}, n), n.y), e.y)] });
}
function Jo(n, e) {
  var t, i;
  if (!y(n.min) || !y(n.max)) return Math.max(Math.abs((t = n.min) !== null && t !== void 0 ? t : 0), Math.abs((i = n.max) !== null && i !== void 0 ? i : 0));
  const s = da(n);
  return Math.max(Math.abs(s) * 10, Math.abs(e) * 10);
}
function Zm(n, e) {
  var t, i;
  const s = Jo(wt(n, (t = n.x) !== null && t !== void 0 ? t : {}), e.x), r = Jo(wt(n, (i = n.y) !== null && i !== void 0 ? i : {}), e.y);
  return Math.max(s, r);
}
function Jm(n) {
  if (!("y" in n)) return false;
  const e = n.y;
  return e && "inverted" in e ? !!e.inverted : false;
}
const Qm = X({ id: "input-point2d", type: "input", accept: (n, e) => {
  if (!it.isObject(n)) return null;
  const t = S(e, (i) => Object.assign(Object.assign({}, Sn(i)), { expanded: i.optional.boolean, picker: i.optional.custom(Na), readonly: i.optional.constant(false), x: i.optional.custom(et), y: i.optional.object(Object.assign(Object.assign({}, Sn(i)), { inverted: i.optional.boolean })) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: () => Ym, constraint: (n) => Wm(n.params, n.initialValue), equals: it.equals, writer: () => Xm }, controller: (n) => {
  var e, t;
  const i = n.document, s = n.value, r = n.constraint, o = [n.params.x, n.params.y];
  return new Gm(i, { axes: s.rawValue.getComponents().map((l, a) => {
    var u;
    return Zs({ constraint: r.components[a], initialValue: l, params: wt(n.params, (u = o[a]) !== null && u !== void 0 ? u : {}) });
  }), expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, invertsY: Jm(n.params), max: Zm(n.params, s.rawValue), parser: Ne, pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", value: s, viewProps: n.viewProps });
} });
let Kt = class {
  constructor(e = 0, t = 0, i = 0) {
    this.x = e, this.y = t, this.z = i;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(e) {
    if (y(e)) return false;
    const t = e.x, i = e.y, s = e.z;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
};
const uu = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new Kt(...n) };
function ev(n) {
  return Kt.isObject(n) ? new Kt(n.x, n.y, n.z) : new Kt();
}
function tv(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z);
}
function nv(n, e) {
  return new br({ assembly: uu, components: [Oe(Object.assign(Object.assign({}, n), n.x), e.x), Oe(Object.assign(Object.assign({}, n), n.y), e.y), Oe(Object.assign(Object.assign({}, n), n.z), e.z)] });
}
const iv = X({ id: "input-point3d", type: "input", accept: (n, e) => {
  if (!Kt.isObject(n)) return null;
  const t = S(e, (i) => Object.assign(Object.assign({}, Sn(i)), { readonly: i.optional.constant(false), x: i.optional.custom(et), y: i.optional.custom(et), z: i.optional.custom(et) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => ev, constraint: (n) => nv(n.params, n.initialValue), equals: Kt.equals, writer: (n) => tv }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z];
  return new wr(n.document, { assembly: uu, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return Zs({ constraint: t.components[r], initialValue: s, params: wt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: Ne, value: e, viewProps: n.viewProps });
} });
let Ut = class {
  constructor(e = 0, t = 0, i = 0, s = 0) {
    this.x = e, this.y = t, this.z = i, this.w = s;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(e) {
    if (y(e)) return false;
    const t = e.x, i = e.y, s = e.z, r = e.w;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number" || typeof r != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
};
const pu = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new Ut(...n) };
function sv(n) {
  return Ut.isObject(n) ? new Ut(n.x, n.y, n.z, n.w) : new Ut();
}
function rv(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z), n.writeProperty("w", e.w);
}
function ov(n, e) {
  return new br({ assembly: pu, components: [Oe(Object.assign(Object.assign({}, n), n.x), e.x), Oe(Object.assign(Object.assign({}, n), n.y), e.y), Oe(Object.assign(Object.assign({}, n), n.z), e.z), Oe(Object.assign(Object.assign({}, n), n.w), e.w)] });
}
const lv = X({ id: "input-point4d", type: "input", accept: (n, e) => {
  if (!Ut.isObject(n)) return null;
  const t = S(e, (i) => Object.assign(Object.assign({}, Sn(i)), { readonly: i.optional.constant(false), w: i.optional.custom(et), x: i.optional.custom(et), y: i.optional.custom(et), z: i.optional.custom(et) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => sv, constraint: (n) => ov(n.params, n.initialValue), equals: Ut.equals, writer: (n) => rv }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z, n.params.w];
  return new wr(n.document, { assembly: pu, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return Zs({ constraint: t.components[r], initialValue: s, params: wt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: Ne, value: e, viewProps: n.viewProps });
} });
function av(n) {
  const e = [], t = ar(n.options);
  return t && e.push(t), new Fn(e);
}
const uv = X({ id: "input-string", type: "input", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = S(e, (i) => ({ readonly: i.optional.constant(false), options: i.optional.custom(Un) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Da, constraint: (n) => av(n.params), writer: (n) => Hn }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && mi(i, Kn);
  return s ? new ot(e, { props: new v({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new Vn(e, { parser: (r) => r, props: v.fromObject({ formatter: Ls }), value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof ot ? new or(n.controller) : null;
} }), Gn = { monitor: { defaultInterval: 200, defaultRows: 3 } }, Qo = _("mll");
let pv = class {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(Qo()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("textarea");
    i.classList.add(Qo("i")), i.style.height = `calc(var(${Ba("containerUnitSize")}) * ${t.rows})`, i.readOnly = true, t.viewProps.bindDisabled(i), this.element.appendChild(i), this.textareaElem_ = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.textareaElem_, t = e.scrollTop === e.scrollHeight - e.clientHeight, i = [];
    this.value.rawValue.forEach((s) => {
      s !== void 0 && i.push(this.formatter_(s));
    }), e.textContent = i.join(`
`), t && (e.scrollTop = e.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}, _r = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new pv(e, { formatter: t.formatter, rows: t.rows, value: this.value, viewProps: this.viewProps });
  }
};
const el = _("sgl");
let cv = class {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(el()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(el("i")), i.readOnly = true, i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e[e.length - 1];
    this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
}, fr = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new cv(e, { formatter: t.formatter, value: this.value, viewProps: this.viewProps });
  }
};
const hv = X({ id: "monitor-bool", type: "monitor", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = S(e, (i) => ({ readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Oa }, controller: (n) => {
  var e;
  return n.value.rawValue.length === 1 ? new fr(n.document, { formatter: qo, value: n.value, viewProps: n.viewProps }) : new _r(n.document, { formatter: qo, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Gn.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
} });
let dv = class extends kn {
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.props.set("min", e);
  }
};
const qe = _("grl");
let mv = class {
  constructor(e, t) {
    this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(qe()), t.viewProps.bindClassModifiers(this.element), this.formatter_ = t.formatter, this.props_ = t.props, this.cursor_ = t.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
    const i = e.createElementNS(Pe, "svg");
    i.classList.add(qe("g")), i.style.height = `calc(var(${Ba("containerUnitSize")}) * ${t.rows})`, this.element.appendChild(i), this.svgElem_ = i;
    const s = e.createElementNS(Pe, "polyline");
    this.svgElem_.appendChild(s), this.lineElem_ = s;
    const r = e.createElement("div");
    r.classList.add(qe("t"), _("tt")()), this.element.appendChild(r), this.tooltipElem_ = r, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const { clientWidth: e, clientHeight: t } = this.element, i = this.value.rawValue.length - 1, s = this.props_.get("min"), r = this.props_.get("max"), o = [];
    this.value.rawValue.forEach((c, L) => {
      if (c === void 0) return;
      const be = g(L, 0, i, 0, e), ee = g(c, s, r, t, 0);
      o.push([be, ee].join(","));
    }), this.lineElem_.setAttributeNS(null, "points", o.join(" "));
    const l = this.tooltipElem_, a = this.value.rawValue[this.cursor_.rawValue];
    if (a === void 0) {
      l.classList.remove(qe("t", "a"));
      return;
    }
    const u = g(this.cursor_.rawValue, 0, i, 0, e), p = g(a, s, r, t, 0);
    l.style.left = `${u}px`, l.style.top = `${p}px`, l.textContent = `${this.formatter_(a)}`, l.classList.contains(qe("t", "a")) || (l.classList.add(qe("t", "a"), qe("t", "in")), di(l), l.classList.remove(qe("t", "in")));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}, cu = class {
  constructor(e, t) {
    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.cursor_ = k(-1), this.view = new mv(e, { cursor: this.cursor_, formatter: t.formatter, rows: t.rows, props: this.props, value: this.value, viewProps: this.viewProps }), !Js(e)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    else {
      const i = new $t(this.view.element);
      i.emitter.on("down", this.onGraphPointerDown_), i.emitter.on("move", this.onGraphPointerMove_), i.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(e) {
    return se(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => (this.props.set("max", t.max), this.props.set("min", t.min), true));
  }
  exportProps() {
    return re(null, { max: this.props.get("max"), min: this.props.get("min") });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(e) {
    const { clientWidth: t } = this.view.element;
    this.cursor_.rawValue = Math.floor(g(e.offsetX, 0, t, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(e) {
    this.onGraphPointerMove_(e);
  }
  onGraphPointerMove_(e) {
    if (!e.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(g(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
};
function Ms(n) {
  return y(n.format) ? Q(2) : n.format;
}
function vv(n) {
  var e;
  return n.value.rawValue.length === 1 ? new fr(n.document, { formatter: Ms(n.params), value: n.value, viewProps: n.viewProps }) : new _r(n.document, { formatter: Ms(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Gn.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
}
function bv(n) {
  var e, t, i;
  return new cu(n.document, { formatter: Ms(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Gn.monitor.defaultRows, props: v.fromObject({ max: (t = n.params.max) !== null && t !== void 0 ? t : 100, min: (i = n.params.min) !== null && i !== void 0 ? i : 0 }), value: n.value, viewProps: n.viewProps });
}
function tl(n) {
  return n.view === "graph";
}
const wv = X({ id: "monitor-number", type: "monitor", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = S(e, (i) => ({ format: i.optional.function, max: i.optional.number, min: i.optional.number, readonly: i.required.constant(true), rows: i.optional.number, view: i.optional.string }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { defaultBufferSize: (n) => tl(n) ? 64 : 1, reader: (n) => ca }, controller: (n) => tl(n.params) ? bv(n) : vv(n), api: (n) => n.controller.valueController instanceof cu ? new dv(n.controller) : null }), _v = X({ id: "monitor-string", type: "monitor", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = S(e, (i) => ({ multiline: i.optional.boolean, readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Da }, controller: (n) => {
  var e;
  const t = n.value;
  return t.rawValue.length > 1 || n.params.multiline ? new _r(n.document, { formatter: Ls, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Gn.monitor.defaultRows, value: t, viewProps: n.viewProps }) : new fr(n.document, { formatter: Ls, value: t, viewProps: n.viewProps });
} });
class fv {
  constructor() {
    this.map_ = /* @__PURE__ */ new Map();
  }
  get(e) {
    var t;
    return (t = this.map_.get(e)) !== null && t !== void 0 ? t : null;
  }
  has(e) {
    return this.map_.has(e);
  }
  add(e, t) {
    return this.map_.set(e, t), e.viewProps.handleDispose(() => {
      this.map_.delete(e);
    }), t;
  }
}
class gv {
  constructor(e) {
    this.target = e.target, this.reader_ = e.reader, this.writer_ = e.writer;
  }
  read() {
    return this.reader_(this.target.read());
  }
  write(e) {
    this.writer_(this.target, e);
  }
  inject(e) {
    this.write(this.reader_(e));
  }
}
function Cv(n, e) {
  var t;
  const i = n.accept(e.target.read(), e.params);
  if (y(i)) return null;
  const s = { target: e.target, initialValue: i.initialValue, params: i.params }, r = S(e.params, (c) => ({ disabled: c.optional.boolean, hidden: c.optional.boolean, label: c.optional.string, tag: c.optional.string })), o = n.binding.reader(s), l = n.binding.constraint ? n.binding.constraint(s) : void 0, a = new gv({ reader: o, target: e.target, writer: n.binding.writer(s) }), u = new sh(k(o(i.initialValue), { constraint: l, equals: n.binding.equals }), a), p = n.controller({ constraint: l, document: e.document, initialValue: i.initialValue, params: i.params, value: u, viewProps: Vt.create({ disabled: r == null ? void 0 : r.disabled, hidden: r == null ? void 0 : r.hidden }) });
  return new fh(e.document, { blade: tn(), props: v.fromObject({ label: "label" in e.params ? (t = r == null ? void 0 : r.label) !== null && t !== void 0 ? t : null : e.target.key }), tag: r == null ? void 0 : r.tag, value: u, valueController: p });
}
class Pv {
  constructor(e) {
    this.target = e.target, this.reader_ = e.reader;
  }
  read() {
    return this.reader_(this.target.read());
  }
}
function xv(n, e) {
  return e === 0 ? new td() : new nd(n, e ?? Gn.monitor.defaultInterval);
}
function yv(n, e) {
  var t, i, s;
  const r = n.accept(e.target.read(), e.params);
  if (y(r)) return null;
  const o = { target: e.target, initialValue: r.initialValue, params: r.params }, l = S(e.params, (L) => ({ bufferSize: L.optional.number, disabled: L.optional.boolean, hidden: L.optional.boolean, interval: L.optional.number, label: L.optional.string })), a = n.binding.reader(o), u = (i = (t = l == null ? void 0 : l.bufferSize) !== null && t !== void 0 ? t : n.binding.defaultBufferSize && n.binding.defaultBufferSize(r.params)) !== null && i !== void 0 ? i : 1, p = new yh({ binding: new Pv({ reader: a, target: e.target }), bufferSize: u, ticker: xv(e.document, l == null ? void 0 : l.interval) }), c = n.controller({ document: e.document, params: r.params, value: p, viewProps: Vt.create({ disabled: l == null ? void 0 : l.disabled, hidden: l == null ? void 0 : l.hidden }) });
  return c.viewProps.bindDisabled(p.ticker), c.viewProps.handleDispose(() => {
    p.ticker.dispose();
  }), new kh(e.document, { blade: tn(), props: v.fromObject({ label: "label" in e.params ? (s = l == null ? void 0 : l.label) !== null && s !== void 0 ? s : null : e.target.key }), value: p, valueController: c });
}
class Ev {
  constructor(e) {
    this.pluginsMap_ = { blades: [], inputs: [], monitors: [] }, this.apiCache_ = e;
  }
  getAll() {
    return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors];
  }
  register(e, t) {
    if (!vd(t.core)) throw U.notCompatible(e, t.id);
    t.type === "blade" ? this.pluginsMap_.blades.unshift(t) : t.type === "input" ? this.pluginsMap_.inputs.unshift(t) : t.type === "monitor" && this.pluginsMap_.monitors.unshift(t);
  }
  createInput_(e, t, i) {
    return this.pluginsMap_.inputs.reduce((s, r) => s ?? Cv(r, { document: e, target: t, params: i }), null);
  }
  createMonitor_(e, t, i) {
    return this.pluginsMap_.monitors.reduce((s, r) => s ?? yv(r, { document: e, params: i, target: t }), null);
  }
  createBinding(e, t, i) {
    const s = t.read();
    if (y(s)) throw new U({ context: { key: t.key }, type: "nomatchingcontroller" });
    const r = this.createInput_(e, t, i);
    if (r) return r;
    const o = this.createMonitor_(e, t, i);
    if (o) return o;
    throw new U({ context: { key: t.key }, type: "nomatchingcontroller" });
  }
  createBlade(e, t) {
    const i = this.pluginsMap_.blades.reduce((s, r) => s ?? ed(r, { document: e, params: t }), null);
    if (!i) throw new U({ type: "nomatchingview", context: { params: t } });
    return i;
  }
  createInputBindingApi_(e) {
    const t = this.pluginsMap_.inputs.reduce((i, s) => {
      var r, o;
      return i || ((o = (r = s.api) === null || r === void 0 ? void 0 : r.call(s, { controller: e })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(e, t ?? new kn(e));
  }
  createMonitorBindingApi_(e) {
    const t = this.pluginsMap_.monitors.reduce((i, s) => {
      var r, o;
      return i || ((o = (r = s.api) === null || r === void 0 ? void 0 : r.call(s, { controller: e })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(e, t ?? new kn(e));
  }
  createBindingApi(e) {
    if (this.apiCache_.has(e)) return this.apiCache_.get(e);
    if (gh(e)) return this.createInputBindingApi_(e);
    if (Vh(e)) return this.createMonitorBindingApi_(e);
    throw U.shouldNeverHappen();
  }
  createApi(e) {
    if (this.apiCache_.has(e)) return this.apiCache_.get(e);
    if (_h(e)) return this.createBindingApi(e);
    const t = this.pluginsMap_.blades.reduce((i, s) => i ?? s.api({ controller: e, pool: this }), null);
    if (!t) throw U.shouldNeverHappen();
    return this.apiCache_.add(e, t);
  }
}
const kv = new fv();
function Vv() {
  const n = new Ev(kv);
  return [Qm, iv, lv, uv, Um, Bm, jm, Am, fd, hv, _v, wv, Ah, Hh, Aa].forEach((e) => {
    n.register("core", e);
  }), n;
}
class $v extends kt {
  constructor(e) {
    super(e), this.emitter_ = new D(), this.controller.value.emitter.on("change", (t) => {
      this.emitter_.emit("change", new In(this, t.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(e) {
    this.controller.valueController.props.set("options", e);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(e) {
    this.controller.value.rawValue = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
}
class Sv extends kt {
}
class Lv extends kt {
  constructor(e) {
    super(e), this.emitter_ = new D(), this.controller.value.emitter.on("change", (t) => {
      this.emitter_.emit("change", new In(this, t.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.sliderController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.sliderController.props.set("min", e);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(e) {
    this.controller.value.rawValue = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
}
class Mv extends kt {
  constructor(e) {
    super(e), this.emitter_ = new D(), this.controller.value.emitter.on("change", (t) => {
      this.emitter_.emit("change", new In(this, t.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get formatter() {
    return this.controller.valueController.props.get("formatter");
  }
  set formatter(e) {
    this.controller.valueController.props.set("formatter", e);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(e) {
    this.controller.value.rawValue = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }, { key: t }), this;
  }
  off(e, t) {
    return this.emitter_.off(e, t), this;
  }
}
const Av = /* @__PURE__ */ (function() {
  return { id: "list", type: "blade", core: en, accept(n) {
    const e = S(n, (t) => ({ options: t.required.custom(Un), value: t.required.raw, view: t.required.constant("list"), label: t.optional.string }));
    return e ? { params: e } : null;
  }, controller(n) {
    const e = new Kn(lr(n.params.options)), t = k(n.params.value, { constraint: e }), i = new ot(n.document, { props: new v({ options: e.values.value("options") }), value: t, viewProps: n.viewProps });
    return new _t(n.document, { blade: n.blade, props: v.fromObject({ label: n.params.label }), value: t, valueController: i });
  }, api(n) {
    return !(n.controller instanceof _t) || !(n.controller.valueController instanceof ot) ? null : new $v(n.controller);
  } };
})();
class Tv extends Sa {
  constructor(e, t) {
    super(e, t);
  }
  get element() {
    return this.controller.view.element;
  }
}
class Ov extends $s {
  constructor(e, t) {
    super(e, { expanded: t.expanded, blade: t.blade, props: t.props, root: true, viewProps: t.viewProps });
  }
}
const nl = _("spr");
class Dv {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(nl()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("hr");
    i.classList.add(nl("r")), this.element.appendChild(i);
  }
}
class il extends $i {
  constructor(e, t) {
    super(Object.assign(Object.assign({}, t), { view: new Dv(e, { viewProps: t.viewProps }) }));
  }
}
const Rv = { id: "separator", type: "blade", core: en, accept(n) {
  const e = S(n, (t) => ({ view: t.required.constant("separator") }));
  return e ? { params: e } : null;
}, controller(n) {
  return new il(n.document, { blade: n.blade, viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof il ? new Sv(n.controller) : null;
} }, jv = { id: "slider", type: "blade", core: en, accept(n) {
  const e = S(n, (t) => ({ max: t.required.number, min: t.required.number, view: t.required.constant("slider"), format: t.optional.function, label: t.optional.string, value: t.optional.number }));
  return e ? { params: e } : null;
}, controller(n) {
  var e, t;
  const i = (e = n.params.value) !== null && e !== void 0 ? e : 0, s = new Nn({ max: n.params.max, min: n.params.min }), r = k(i, { constraint: s }), o = new bi(n.document, Object.assign(Object.assign({}, ja({ formatter: (t = n.params.format) !== null && t !== void 0 ? t : Qc, keyScale: k(1), max: s.values.value("max"), min: s.values.value("min"), pointerScale: ma(n.params, i) })), { parser: Ne, value: r, viewProps: n.viewProps }));
  return new _t(n.document, { blade: n.blade, props: v.fromObject({ label: n.params.label }), value: r, valueController: o });
}, api(n) {
  return !(n.controller instanceof _t) || !(n.controller.valueController instanceof bi) ? null : new Lv(n.controller);
} }, Bv = /* @__PURE__ */ (function() {
  return { id: "text", type: "blade", core: en, accept(n) {
    const e = S(n, (t) => ({ parse: t.required.function, value: t.required.raw, view: t.required.constant("text"), format: t.optional.function, label: t.optional.string }));
    return e ? { params: e } : null;
  }, controller(n) {
    var e;
    const t = k(n.params.value), i = new Vn(n.document, { parser: n.params.parse, props: v.fromObject({ formatter: (e = n.params.format) !== null && e !== void 0 ? e : ((s) => String(s)) }), value: t, viewProps: n.viewProps });
    return new _t(n.document, { blade: n.blade, props: v.fromObject({ label: n.params.label }), value: t, valueController: i });
  }, api(n) {
    return !(n.controller instanceof _t) || !(n.controller.valueController instanceof Vn) ? null : new Mv(n.controller);
  } };
})();
function Nv(n) {
  const e = n.createElement("div");
  return e.classList.add(_("dfw")()), n.body && n.body.appendChild(e), e;
}
function Iv(n, e, t) {
  if (n.querySelector(`style[data-tp-style=${e}]`)) return;
  const i = n.createElement("style");
  i.dataset.tpStyle = e, i.textContent = t, n.head.appendChild(i);
}
class my extends Tv {
  constructor(e) {
    var t, i;
    const s = e ?? {}, r = (t = s.document) !== null && t !== void 0 ? t : ch(), o = Vv(), l = new Ov(r, { expanded: s.expanded, blade: tn(), props: v.fromObject({ title: s.title }), viewProps: Vt.create() });
    super(l, o), this.pool_ = o, this.containerElem_ = (i = s.container) !== null && i !== void 0 ? i : Nv(r), this.containerElem_.appendChild(this.element), this.doc_ = r, this.usesDefaultWrapper_ = !s.container, this.setUpDefaultPlugins_();
  }
  get document() {
    if (!this.doc_) throw U.alreadyDisposed();
    return this.doc_;
  }
  dispose() {
    const e = this.containerElem_;
    if (!e) throw U.alreadyDisposed();
    if (this.usesDefaultWrapper_) {
      const t = e.parentElement;
      t && t.removeChild(e);
    }
    this.containerElem_ = null, this.doc_ = null, super.dispose();
  }
  registerPlugin(e) {
    e.css && Iv(this.document, `plugin-${e.id}`, e.css), ("plugin" in e ? [e.plugin] : "plugins" in e ? e.plugins : []).forEach((i) => {
      this.pool_.register(e.id, i);
    });
  }
  setUpDefaultPlugins_() {
    this.registerPlugin({ id: "default", css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}', plugins: [Av, Rv, jv, Aa, Bv] });
  }
}
new Va("4.0.5");
function E(n) {
  return n == null;
}
function gr(n) {
  return n !== null && typeof n == "object";
}
function As(n) {
  return n !== null && typeof n == "object";
}
function Fv(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] !== e[t]) return false;
  return true;
}
function gt(n, e) {
  return Array.from(/* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(e)])).reduce((i, s) => {
    const r = n[s], o = e[s];
    return As(r) && As(o) ? Object.assign(Object.assign({}, i), { [s]: gt(r, o) }) : Object.assign(Object.assign({}, i), { [s]: s in e ? o : r });
  }, {});
}
function Kv(n) {
  return gr(n) ? "target" in n : false;
}
const Uv = { alreadydisposed: () => "View has been already disposed", invalidparams: (n) => `Invalid parameters for '${n.name}'`, nomatchingcontroller: (n) => `No matching controller for '${n.key}'`, nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`, notbindable: () => "Value is not bindable", notcompatible: (n) => `Not compatible with  plugin '${n.id}'`, propertynotfound: (n) => `Property '${n.name}' not found`, shouldneverhappen: () => "This error should never happen" };
let Fe = class Ft {
  static alreadyDisposed() {
    return new Ft({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new Ft({ type: "notbindable" });
  }
  static notCompatible(e, t) {
    return new Ft({ type: "notcompatible", context: { id: `${e}.${t}` } });
  }
  static propertyNotFound(e) {
    return new Ft({ type: "propertynotfound", context: { name: e } });
  }
  static shouldNeverHappen() {
    return new Ft({ type: "shouldneverhappen" });
  }
  constructor(e) {
    var t;
    this.message = (t = Uv[e.type](e.context)) !== null && t !== void 0 ? t : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
  }
  toString() {
    return this.message;
  }
}, sl = class hu {
  constructor(e, t) {
    this.obj_ = e, this.key = t;
  }
  static isBindable(e) {
    return !(e === null || typeof e != "object" && typeof e != "function");
  }
  read() {
    return this.obj_[this.key];
  }
  write(e) {
    this.obj_[this.key] = e;
  }
  writeProperty(e, t) {
    const i = this.read();
    if (!hu.isBindable(i)) throw Fe.notBindable();
    if (!(e in i)) throw Fe.propertyNotFound(e);
    i[e] = t;
  }
}, H = class {
  constructor() {
    this.observers_ = {};
  }
  on(e, t) {
    let i = this.observers_[e];
    return i || (i = this.observers_[e] = []), i.push({ handler: t }), this;
  }
  off(e, t) {
    const i = this.observers_[e];
    return i && (this.observers_[e] = i.filter((s) => s.handler !== t)), this;
  }
  emit(e, t) {
    const i = this.observers_[e];
    i && i.forEach((s) => {
      s.handler(t);
    });
  }
}, zv = class {
  constructor(e, t) {
    var i;
    this.constraint_ = t == null ? void 0 : t.constraint, this.equals_ = (i = t == null ? void 0 : t.equals) !== null && i !== void 0 ? i : ((s, r) => s === r), this.emitter = new H(), this.rawValue_ = e;
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.constraint_ ? this.constraint_.constrain(e) : e, r = this.rawValue_;
    this.equals_(r, s) && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.rawValue_ = s, this.emitter.emit("change", { options: i, previousRawValue: r, rawValue: s, sender: this }));
  }
}, Hv = class {
  constructor(e) {
    this.emitter = new H(), this.value_ = e;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.value_;
    s === e && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.value_ = e, this.emitter.emit("change", { options: i, previousRawValue: s, rawValue: this.value_, sender: this }));
  }
}, qv = class {
  constructor(e) {
    this.emitter = new H(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = e, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(e) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), { sender: this }));
  }
  onValueChange_(e) {
    this.emitter.emit("change", Object.assign(Object.assign({}, e), { sender: this }));
  }
};
function M(n, e) {
  const t = e == null ? void 0 : e.constraint, i = e == null ? void 0 : e.equals;
  return !t && !i ? new Hv(n) : new zv(n, e);
}
function Gv(n) {
  return [new qv(n), (e, t) => {
    n.setRawValue(e, t);
  }];
}
let d = class du {
  constructor(e) {
    this.emitter = new H(), this.valMap_ = e;
    for (const t in this.valMap_) this.valMap_[t].emitter.on("change", () => {
      this.emitter.emit("change", { key: t, sender: this });
    });
  }
  static createCore(e) {
    return Object.keys(e).reduce((i, s) => Object.assign(i, { [s]: M(e[s]) }), {});
  }
  static fromObject(e) {
    const t = this.createCore(e);
    return new du(t);
  }
  get(e) {
    return this.valMap_[e].rawValue;
  }
  set(e, t) {
    this.valMap_[e].rawValue = t;
  }
  value(e) {
    return this.valMap_[e];
  }
}, Yn = class {
  constructor(e) {
    this.values = d.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    return Math.min(Math.max(e, i), t);
  }
}, Cr = class {
  constructor(e) {
    this.values = d.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    let s = e;
    return E(i) || (s = Math.max(s, i)), E(t) || (s = Math.min(s, t)), s;
  }
}, Yv = class {
  constructor(e, t = 0) {
    this.step = e, this.origin = t;
  }
  constrain(e) {
    const t = this.origin % this.step, i = Math.round((e - t) / this.step);
    return t + i * this.step;
  }
}, Xv = class {
  constructor(e) {
    this.text = e;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
};
const Wv = { "**": (n, e) => Math.pow(n, e), "*": (n, e) => n * e, "/": (n, e) => n / e, "%": (n, e) => n % e, "+": (n, e) => n + e, "-": (n, e) => n - e, "<<": (n, e) => n << e, ">>": (n, e) => n >> e, ">>>": (n, e) => n >>> e, "&": (n, e) => n & e, "^": (n, e) => n ^ e, "|": (n, e) => n | e };
let Zv = class {
  constructor(e, t, i) {
    this.left = t, this.operator = e, this.right = i;
  }
  evaluate() {
    const e = Wv[this.operator];
    if (!e) throw new Error(`unexpected binary operator: '${this.operator}`);
    return e(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ");
  }
};
const Jv = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
let Qv = class {
  constructor(e, t) {
    this.operator = e, this.expression = t;
  }
  evaluate() {
    const e = Jv[this.operator];
    if (!e) throw new Error(`unexpected unary operator: '${this.operator}`);
    return e(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
};
function Pr(n) {
  return (e, t) => {
    for (let i = 0; i < n.length; i++) {
      const s = n[i](e, t);
      if (s !== "") return s;
    }
    return "";
  };
}
function Ln(n, e) {
  var t;
  const i = n.substr(e).match(/^\s+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function eb(n, e) {
  const t = n.substr(e, 1);
  return t.match(/^[1-9]$/) ? t : "";
}
function Mn(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function tb(n, e) {
  const t = Mn(n, e);
  if (t !== "") return t;
  const i = n.substr(e, 1);
  if (e += 1, i !== "-" && i !== "+") return "";
  const s = Mn(n, e);
  return s === "" ? "" : i + s;
}
function xr(n, e) {
  const t = n.substr(e, 1);
  if (e += 1, t.toLowerCase() !== "e") return "";
  const i = tb(n, e);
  return i === "" ? "" : t + i;
}
function mu(n, e) {
  const t = n.substr(e, 1);
  if (t === "0") return t;
  const i = eb(n, e);
  return e += i.length, i === "" ? "" : i + Mn(n, e);
}
function nb(n, e) {
  const t = mu(n, e);
  if (e += t.length, t === "") return "";
  const i = n.substr(e, 1);
  if (e += i.length, i !== ".") return "";
  const s = Mn(n, e);
  return e += s.length, t + i + s + xr(n, e);
}
function ib(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== ".") return "";
  const i = Mn(n, e);
  return e += i.length, i === "" ? "" : t + i + xr(n, e);
}
function sb(n, e) {
  const t = mu(n, e);
  return e += t.length, t === "" ? "" : t + xr(n, e);
}
const rb = Pr([nb, ib, sb]);
function ob(n, e) {
  var t;
  const i = n.substr(e).match(/^[01]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function lb(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0b") return "";
  const i = ob(n, e);
  return i === "" ? "" : t + i;
}
function ab(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-7]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function ub(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0o") return "";
  const i = ab(n, e);
  return i === "" ? "" : t + i;
}
function pb(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9a-f]+/i);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function cb(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0x") return "";
  const i = pb(n, e);
  return i === "" ? "" : t + i;
}
const hb = Pr([lb, ub, cb]), db = Pr([hb, rb]);
function mb(n, e) {
  const t = db(n, e);
  return e += t.length, t === "" ? null : { evaluable: new Xv(t), cursor: e };
}
function vb(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== "(") return null;
  const i = bu(n, e);
  if (!i) return null;
  e = i.cursor, e += Ln(n, e).length;
  const s = n.substr(e, 1);
  return e += s.length, s !== ")" ? null : { evaluable: i.evaluable, cursor: e };
}
function bb(n, e) {
  var t;
  return (t = mb(n, e)) !== null && t !== void 0 ? t : vb(n, e);
}
function vu(n, e) {
  const t = bb(n, e);
  if (t) return t;
  const i = n.substr(e, 1);
  if (e += i.length, i !== "+" && i !== "-" && i !== "~") return null;
  const s = vu(n, e);
  return s ? (e = s.cursor, { cursor: e, evaluable: new Qv(i, s.evaluable) }) : null;
}
function wb(n, e, t) {
  t += Ln(e, t).length;
  const i = n.filter((s) => e.startsWith(s, t))[0];
  return i ? (t += i.length, t += Ln(e, t).length, { cursor: t, operator: i }) : null;
}
function _b(n, e) {
  return (t, i) => {
    const s = n(t, i);
    if (!s) return null;
    i = s.cursor;
    let r = s.evaluable;
    for (; ; ) {
      const o = wb(e, t, i);
      if (!o) break;
      i = o.cursor;
      const l = n(t, i);
      if (!l) return null;
      i = l.cursor, r = new Zv(o.operator, r, l.evaluable);
    }
    return r ? { cursor: i, evaluable: r } : null;
  };
}
const fb = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((n, e) => _b(n, e), vu);
function bu(n, e) {
  return e += Ln(n, e).length, fb(n, e);
}
function gb(n) {
  const e = bu(n, 0);
  return !e || e.cursor + Ln(n, e.cursor).length !== n.length ? null : e.evaluable;
}
function _e(n) {
  var e;
  const t = gb(n);
  return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0 ? e : null;
}
function yr(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string") {
    const e = _e(n);
    if (!E(e)) return e;
  }
  return 0;
}
function F(n) {
  return (e) => e.toFixed(Math.max(Math.min(n, 20), 0));
}
function h(n, e, t, i, s) {
  const r = (n - e) / (t - e);
  return i + r * (s - i);
}
function rl(n) {
  return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
}
function V(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function wu(n, e) {
  return (n % e + e) % e;
}
function Cb(n, e) {
  return E(n.step) ? Math.max(rl(e), 2) : rl(n.step);
}
function _u(n) {
  var e;
  return (e = n.step) !== null && e !== void 0 ? e : 1;
}
function Pb(n, e) {
  var t;
  const i = Math.abs((t = n.step) !== null && t !== void 0 ? t : e);
  return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
}
function Er(n, e) {
  return E(n.step) ? null : new Yv(n.step, e);
}
function kr(n) {
  return !E(n.max) && !E(n.min) ? new Yn({ max: n.max, min: n.min }) : !E(n.max) || !E(n.min) ? new Cr({ max: n.max, min: n.min }) : null;
}
function Vr(n, e) {
  var t, i, s;
  return { formatter: (t = n.format) !== null && t !== void 0 ? t : F(Cb(n, e)), keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : _u(n), pointerScale: (s = n.pointerScale) !== null && s !== void 0 ? s : Pb(n, e) };
}
function $r(n) {
  return { format: n.optional.function, keyScale: n.optional.number, max: n.optional.number, min: n.optional.number, pointerScale: n.optional.number, step: n.optional.number };
}
function Sr(n) {
  return { constraint: n.constraint, textProps: d.fromObject(Vr(n.params, n.initialValue)) };
}
let St = class {
  constructor(e) {
    this.controller = e;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get("disabled");
  }
  set disabled(e) {
    this.controller.viewProps.set("disabled", e);
  }
  get hidden() {
    return this.controller.viewProps.get("hidden");
  }
  set hidden(e) {
    this.controller.viewProps.set("hidden", e);
  }
  dispose() {
    this.controller.viewProps.set("disposed", true);
  }
  importState(e) {
    return this.controller.importState(e);
  }
  exportState() {
    return this.controller.exportState();
  }
}, Lt = class {
  constructor(e) {
    this.target = e;
  }
}, Li = class extends Lt {
  constructor(e, t, i) {
    super(e), this.value = t, this.last = i ?? true;
  }
}, xb = class extends Lt {
  constructor(e, t) {
    super(e), this.expanded = t;
  }
}, yb = class extends Lt {
  constructor(e, t) {
    super(e), this.index = t;
  }
}, Lr = class extends St {
  constructor(e) {
    super(e), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new H(), this.controller.value.emitter.on("change", this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(e) {
    this.controller.tag = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(e) {
    const t = this.controller.value;
    this.emitter_.emit("change", new Li(this, t.binding.target.read(), e.options.last));
  }
};
function Eb(n, e) {
  const i = Object.keys(e).reduce((s, r) => {
    if (s === void 0) return;
    const o = e[r], l = o(n[r]);
    return l.succeeded ? Object.assign(Object.assign({}, s), { [r]: l.value }) : void 0;
  }, {});
  return i;
}
function kb(n, e) {
  return n.reduce((t, i) => {
    if (t === void 0) return;
    const s = e(i);
    if (!(!s.succeeded || s.value === void 0)) return [...t, s.value];
  }, []);
}
function Vb(n) {
  return n === null ? false : typeof n == "object";
}
function Ae(n) {
  return (e) => (t) => {
    if (!e && t === void 0) return { succeeded: false, value: void 0 };
    if (e && t === void 0) return { succeeded: true, value: void 0 };
    const i = n(t);
    return i !== void 0 ? { succeeded: true, value: i } : { succeeded: false, value: void 0 };
  };
}
function ol(n) {
  return { custom: (e) => Ae(e)(n), boolean: Ae((e) => typeof e == "boolean" ? e : void 0)(n), number: Ae((e) => typeof e == "number" ? e : void 0)(n), string: Ae((e) => typeof e == "string" ? e : void 0)(n), function: Ae((e) => typeof e == "function" ? e : void 0)(n), constant: (e) => Ae((t) => t === e ? e : void 0)(n), raw: Ae((e) => e)(n), object: (e) => Ae((t) => {
    if (Vb(t)) return Eb(t, e);
  })(n), array: (e) => Ae((t) => {
    if (Array.isArray(t)) return kb(t, e);
  })(n) };
}
const Ts = { optional: ol(true), required: ol(false) };
function A(n, e) {
  const t = e(Ts), i = Ts.required.object(t)(n);
  return i.succeeded ? i.value : void 0;
}
function ge(n, e, t, i) {
  if (e && !e(n)) return false;
  const s = A(n, t);
  return s ? i(s) : false;
}
function Ce(n, e) {
  var t;
  return gt((t = n == null ? void 0 : n()) !== null && t !== void 0 ? t : {}, e);
}
function li(n) {
  return "value" in n;
}
function $b(n) {
  if (!gr(n) || !("binding" in n)) return false;
  const e = n.binding;
  return Kv(e);
}
const B = "http://www.w3.org/2000/svg";
function wi(n) {
  n.offsetHeight;
}
function Sb(n, e) {
  const t = n.style.transition;
  n.style.transition = "none", e(), n.style.transition = t;
}
function Mi(n) {
  return n.ontouchstart !== void 0;
}
function Lb(n) {
  const e = n.ownerDocument.defaultView;
  return e && "document" in e ? n.getContext("2d", { willReadFrequently: true }) : null;
}
const Mb = { check: '<path d="M2 8l4 4l8 -8"/>', dropdown: '<path d="M5 7h6l-3 3 z"/>', p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>' };
function Ai(n, e) {
  const t = n.createElementNS(B, "svg");
  return t.innerHTML = Mb[e], t;
}
function fu(n, e, t) {
  n.insertBefore(e, n.children[t]);
}
function Mr(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function gu(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function Ab(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Ar(n) {
  return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
}
function me(n, e) {
  n.emitter.on("change", (t) => {
    e(t.rawValue);
  }), e(n.rawValue);
}
function ve(n, e, t) {
  me(n.value(e), t);
}
const Tb = "tp";
function m(n) {
  return (t, i) => [Tb, "-", n, "v", t ? `_${t}` : "", i ? `-${i}` : ""].join("");
}
const mn = m("lbl");
function Ob(n, e) {
  const t = n.createDocumentFragment();
  return e.split(`
`).map((s) => n.createTextNode(s)).forEach((s, r) => {
    r > 0 && t.appendChild(n.createElement("br")), t.appendChild(s);
  }), t;
}
let Cu = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(mn()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(mn("l")), ve(t.props, "label", (r) => {
      E(r) ? this.element.classList.add(mn(void 0, "nol")) : (this.element.classList.remove(mn(void 0, "nol")), Ab(i), i.appendChild(Ob(e, r)));
    }), this.element.appendChild(i), this.labelElement = i;
    const s = e.createElement("div");
    s.classList.add(mn("v")), this.element.appendChild(s), this.valueElement = s;
  }
}, Ti = class {
  constructor(e, t) {
    this.props = t.props, this.valueController = t.valueController, this.viewProps = t.valueController.viewProps, this.view = new Cu(e, { props: t.props, viewProps: this.viewProps }), this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(e) {
    return ge(e, null, (t) => ({ label: t.optional.string }), (t) => (this.props.set("label", t.label), true));
  }
  exportProps() {
    return Ce(null, { label: this.props.get("label") });
  }
};
function Db() {
  return ["veryfirst", "first", "last", "verylast"];
}
const ll = m(""), al = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
let Xn = class {
  constructor(e) {
    this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
    const t = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      Db().forEach((i) => {
        t.classList.remove(ll(void 0, al[i]));
      }), this.blade.get("positions").forEach((i) => {
        t.classList.add(ll(void 0, al[i]));
      });
    }), this.viewProps.handleDispose(() => {
      Mr(t);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(e) {
    this.parent_ = e, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(e) {
    return ge(e, null, (t) => ({ disabled: t.required.boolean, hidden: t.required.boolean }), (t) => (this.viewProps.importState(t), true));
  }
  exportState() {
    return Ce(null, Object.assign({}, this.viewProps.exportState()));
  }
};
class _i extends Xn {
  constructor(e, t) {
    if (t.value !== t.valueController.value) throw Fe.shouldNeverHappen();
    const i = t.valueController.viewProps, s = new Ti(e, { blade: t.blade, props: t.props, valueController: t.valueController });
    super(Object.assign(Object.assign({}, t), { view: new Cu(e, { props: t.props, viewProps: i }), viewProps: i })), this.labelController = s, this.value = t.value, this.valueController = t.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(e) {
    return ge(e, (t) => {
      var i, s, r;
      return super.importState(t) && this.labelController.importProps(t) && ((r = (s = (i = this.valueController).importProps) === null || s === void 0 ? void 0 : s.call(i, e)) !== null && r !== void 0 ? r : true);
    }, (t) => ({ value: t.optional.raw }), (t) => (t.value && (this.value.rawValue = t.value), true));
  }
  exportState() {
    var e, t, i;
    return Ce(() => super.exportState(), Object.assign(Object.assign({ value: this.value.rawValue }, this.labelController.exportProps()), (i = (t = (e = this.valueController).exportProps) === null || t === void 0 ? void 0 : t.call(e)) !== null && i !== void 0 ? i : {}));
  }
}
function Pu(n, e) {
  for (; n.length < e; ) n.push(void 0);
}
function Rb(n) {
  const e = [];
  return Pu(e, n), e;
}
function jb(n) {
  const e = n.indexOf(void 0);
  return e < 0 ? n : n.slice(0, e);
}
function Bb(n, e) {
  const t = [...jb(n), e];
  return t.length > n.length ? t.splice(0, t.length - n.length) : Pu(t, n.length), t;
}
let Nb = class extends St {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get title() {
    var e;
    return (e = this.controller.buttonController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.buttonController.props.set("title", e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller.buttonController.emitter.on(e, () => {
      i(new Lt(this));
    }), this;
  }
};
function Ib(n, e, t) {
  t ? n.classList.add(e) : n.classList.remove(e);
}
function at(n, e) {
  return (t) => {
    Ib(n, e, t);
  };
}
function Tr(n, e) {
  me(n, (t) => {
    e.textContent = t ?? "";
  });
}
const rs = m("btn");
let Fb = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(rs()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("button");
    i.classList.add(rs("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(rs("t")), Tr(t.props.value("title"), s), this.buttonElement.appendChild(s);
  }
}, xu = class {
  constructor(e, t) {
    this.emitter = new H(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new Fb(e, { props: this.props, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(e) {
    return ge(e, null, (t) => ({ title: t.optional.string }), (t) => (this.props.set("title", t.title), true));
  }
  exportProps() {
    return Ce(null, { title: this.props.get("title") });
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}, ul = class extends Xn {
  constructor(e, t) {
    const i = new xu(e, { props: t.buttonProps, viewProps: t.viewProps }), s = new Ti(e, { blade: t.blade, props: t.labelProps, valueController: i });
    super({ blade: t.blade, view: s.view, viewProps: t.viewProps }), this.buttonController = i, this.labelController = s;
  }
  importState(e) {
    return ge(e, (t) => super.importState(t) && this.buttonController.importProps(t) && this.labelController.importProps(t), () => ({}), () => true);
  }
  exportState() {
    return Ce(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
}, Kb = class {
  constructor(e) {
    const [t, i] = e.split("-"), s = t.split(".");
    this.major = parseInt(s[0], 10), this.minor = parseInt(s[1], 10), this.patch = parseInt(s[2], 10), this.prerelease = i ?? null;
  }
  toString() {
    const e = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
  }
};
const Ub = new Kb("2.0.0-beta.2");
function T(n) {
  return Object.assign({ core: Ub }, n);
}
T({ id: "button", type: "blade", accept(n) {
  const e = A(n, (t) => ({ title: t.required.string, view: t.required.constant("button"), label: t.optional.string }));
  return e ? { params: e } : null;
}, controller(n) {
  return new ul(n.document, { blade: n.blade, buttonProps: d.fromObject({ title: n.params.title }), labelProps: d.fromObject({ label: n.params.label }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof ul ? new Nb(n.controller) : null;
} });
function zb(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
}
function Hb(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
}
function qb(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
}
function Gb(n) {
  return gr(n) ? "refresh" in n && typeof n.refresh == "function" : false;
}
function Yb(n, e) {
  if (!sl.isBindable(n)) throw Fe.notBindable();
  return new sl(n, e);
}
let Xb = class {
  constructor(e, t) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = e, this.emitter_ = new H(), this.pool_ = t, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((e) => this.pool_.createApi(e));
  }
  addBinding(e, t, i) {
    const s = i ?? {}, r = this.controller_.element.ownerDocument, o = this.pool_.createBinding(r, Yb(e, t), s), l = this.pool_.createBindingApi(o);
    return this.add(l, s.index);
  }
  addFolder(e) {
    return Hb(this, e);
  }
  addButton(e) {
    return zb(this, e);
  }
  addTab(e) {
    return qb(this, e);
  }
  add(e, t) {
    const i = e.controller;
    return this.controller_.rack.add(i, t), e;
  }
  remove(e) {
    this.controller_.rack.remove(e.controller);
  }
  addBlade(e) {
    const t = this.controller_.element.ownerDocument, i = this.pool_.createBlade(t, e), s = this.pool_.createApi(i);
    return this.add(s, e.index);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.children.forEach((e) => {
      Gb(e) && e.refresh();
    });
  }
  onRackValueChange_(e) {
    const t = e.bladeController, i = this.pool_.createApi(t), s = $b(t.value) ? t.value.binding : null;
    this.emitter_.emit("change", new Li(i, s ? s.target.read() : t.value.rawValue, e.options.last));
  }
}, Or = class extends St {
  constructor(e, t) {
    super(e), this.rackApi_ = new Xb(e.rackController, t);
  }
}, Dr = class extends Xn {
  constructor(e) {
    super({ blade: e.blade, view: e.view, viewProps: e.rackController.viewProps }), this.rackController = e.rackController;
  }
  importState(e) {
    return ge(e, (t) => super.importState(t), (t) => ({ children: t.required.array(t.required.raw) }), (t) => this.rackController.rack.children.every((i, s) => i.importState(t.children[s])));
  }
  exportState() {
    return Ce(() => super.exportState(), { children: this.rackController.rack.children.map((e) => e.exportState()) });
  }
};
function Os(n) {
  return "rackController" in n;
}
let Wb = class {
  constructor(e) {
    this.emitter = new H(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(e) {
    for (const t of this.allItems()) if (e(t)) return t;
    return null;
  }
  includes(e) {
    return this.cache_.has(e);
  }
  add(e, t) {
    if (this.includes(e)) throw Fe.shouldNeverHappen();
    const i = t !== void 0 ? t : this.items_.length;
    this.items_.splice(i, 0, e), this.cache_.add(e);
    const s = this.extract_(e);
    s && (s.emitter.on("add", this.onSubListAdd_), s.emitter.on("remove", this.onSubListRemove_), s.allItems().forEach((r) => {
      this.cache_.add(r);
    })), this.emitter.emit("add", { index: i, item: e, root: this, target: this });
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    if (t < 0) return;
    this.items_.splice(t, 1), this.cache_.delete(e);
    const i = this.extract_(e);
    i && (i.allItems().forEach((s) => {
      this.cache_.delete(s);
    }), i.emitter.off("add", this.onSubListAdd_), i.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", { index: t, item: e, root: this, target: this });
  }
  onSubListAdd_(e) {
    this.cache_.add(e.item), this.emitter.emit("add", { index: e.index, item: e.item, root: this, target: e.target });
  }
  onSubListRemove_(e) {
    this.cache_.delete(e.item), this.emitter.emit("remove", { index: e.index, item: e.item, root: this, target: e.target });
  }
};
function Zb(n, e) {
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    if (li(i) && i.value === e) return i;
  }
  return null;
}
function Jb(n) {
  return Os(n) ? n.rackController.rack.bcSet_ : null;
}
let Qb = class {
  constructor(e) {
    var t, i;
    this.emitter = new H(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null, (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Wb(Jb), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(e, t) {
    var i;
    (i = e.parent) === null || i === void 0 || i.remove(e), e.parent = this, this.bcSet_.add(e, t);
  }
  remove(e) {
    e.parent = null, this.bcSet_.remove(e);
  }
  find(e) {
    return this.bcSet_.allItems().filter(e);
  }
  onSetAdd_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("add", { bladeController: e.item, index: e.index, root: t, sender: this }), !t) return;
    const i = e.item;
    if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_), i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), i.viewProps.handleDispose(this.onChildDispose_), li(i)) i.value.emitter.on("change", this.onChildValueChange_);
    else if (Os(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.on("layout", this.onRackLayout_), r.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("remove", { bladeController: e.item, root: t, sender: this }), !t) return;
    const i = e.item;
    if (li(i)) i.value.emitter.off("change", this.onChildValueChange_);
    else if (Os(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.off("layout", this.onRackLayout_), r.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const e = this.bcSet_.items.filter((s) => !s.viewProps.get("hidden")), t = e[0], i = e[e.length - 1];
    this.bcSet_.items.forEach((s) => {
      const r = [];
      s === t && (r.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && r.push("veryfirst")), s === i && (r.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && r.push("verylast")), s.blade.set("positions", r);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildViewPropsChange_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildDispose_() {
    this.bcSet_.items.filter((t) => t.viewProps.get("disposed")).forEach((t) => {
      this.bcSet_.remove(t);
    });
  }
  onChildValueChange_(e) {
    const t = Zb(this.find(li), e.sender);
    if (!t) throw Fe.alreadyDisposed();
    this.emitter.emit("valuechange", { bladeController: t, options: e.options, sender: this });
  }
  onRackLayout_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onRackValueChange_(e) {
    this.emitter.emit("valuechange", { bladeController: e.bladeController, options: e.options, sender: this });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
}, Rr = class {
  constructor(e) {
    this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = e.element, this.viewProps = e.viewProps;
    const t = new Qb({ blade: e.root ? void 0 : e.blade, viewProps: e.viewProps });
    t.emitter.on("add", this.onRackAdd_), t.emitter.on("remove", this.onRackRemove_), this.rack = t, this.viewProps.handleDispose(() => {
      for (let i = this.rack.children.length - 1; i >= 0; i--) this.rack.children[i].viewProps.set("disposed", true);
    });
  }
  onRackAdd_(e) {
    e.root && fu(this.element, e.bladeController.view.element, e.index);
  }
  onRackRemove_(e) {
    e.root && Mr(e.bladeController.view.element);
  }
};
function yu() {
  return new d({ positions: M([], { equals: Fv }) });
}
let Oi = class Eu extends d {
  constructor(e) {
    super(e);
  }
  static create(e) {
    const t = { completed: true, expanded: e, expandedHeight: null, shouldFixHeight: false, temporaryExpanded: null }, i = d.createCore(t);
    return new Eu(i);
  }
  get styleExpanded() {
    var e;
    return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) return "0";
    const e = this.get("expandedHeight");
    return this.get("shouldFixHeight") && !E(e) ? `${e}px` : "auto";
  }
  bindExpandedClass(e, t) {
    const i = () => {
      this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
    };
    ve(this, "expanded", i), ve(this, "temporaryExpanded", i);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
  }
};
function ew(n, e) {
  let t = 0;
  return Sb(e, () => {
    n.set("expandedHeight", null), n.set("temporaryExpanded", true), wi(e), t = e.clientHeight, n.set("temporaryExpanded", null), wi(e);
  }), t;
}
function pl(n, e) {
  e.style.height = n.styleHeight;
}
function Di(n, e) {
  n.value("expanded").emitter.on("beforechange", () => {
    if (n.set("completed", false), E(n.get("expandedHeight"))) {
      const t = ew(n, e);
      t > 0 && n.set("expandedHeight", t);
    }
    n.set("shouldFixHeight", true), wi(e);
  }), n.emitter.on("change", () => {
    pl(n, e);
  }), pl(n, e), e.addEventListener("transitionend", (t) => {
    t.propertyName === "height" && n.cleanUpTransition();
  });
}
let tw = class extends Or {
  constructor(e, t) {
    super(e, t), this.emitter_ = new H(), this.controller.foldable.value("expanded").emitter.on("change", (i) => {
      this.emitter_.emit("fold", new xb(this, i.sender.rawValue));
    }), this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    });
  }
  get expanded() {
    return this.controller.foldable.get("expanded");
  }
  set expanded(e) {
    this.controller.foldable.set("expanded", e);
  }
  get title() {
    return this.controller.props.get("title");
  }
  set title(e) {
    this.controller.props.set("title", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    return this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.rackApi_.refresh();
  }
};
const ku = m("cnt");
let nw = class {
  constructor(e, t) {
    var i;
    this.className_ = m((i = t.viewName) !== null && i !== void 0 ? i : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), ku()), t.viewProps.bindClassModifiers(this.element), this.foldable_ = t.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), ve(this.foldable_, "completed", at(this.element, this.className_(void 0, "cpl")));
    const s = e.createElement("button");
    s.classList.add(this.className_("b")), ve(t.props, "title", (u) => {
      E(u) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
    }), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    r.classList.add(this.className_("i")), this.element.appendChild(r);
    const o = e.createElement("div");
    o.classList.add(this.className_("t")), Tr(t.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
    const l = e.createElement("div");
    l.classList.add(this.className_("m")), this.buttonElement.appendChild(l);
    const a = e.createElement("div");
    a.classList.add(this.className_("c")), this.element.appendChild(a), this.containerElement = a;
  }
}, cl = class extends Dr {
  constructor(e, t) {
    var i;
    const s = Oi.create((i = t.expanded) !== null && i !== void 0 ? i : true), r = new nw(e, { foldable: s, props: t.props, viewName: t.root ? "rot" : void 0, viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new Rr({ blade: t.blade, element: r.containerElement, root: t.root, viewProps: t.viewProps }), view: r })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = t.props, this.foldable = s, Di(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    }), this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(e) {
    return ge(e, (t) => super.importState(t), (t) => ({ expanded: t.required.boolean, title: t.optional.string }), (t) => (this.foldable.set("expanded", t.expanded), this.props.set("title", t.title), true));
  }
  exportState() {
    return Ce(() => super.exportState(), { expanded: this.foldable.get("expanded"), title: this.props.get("title") });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
};
T({ id: "folder", type: "blade", accept(n) {
  const e = A(n, (t) => ({ title: t.required.string, view: t.required.constant("folder"), expanded: t.optional.boolean }));
  return e ? { params: e } : null;
}, controller(n) {
  return new cl(n.document, { blade: n.blade, expanded: n.params.expanded, props: d.fromObject({ title: n.params.title }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof cl ? new tw(n.controller, n.pool) : null;
} });
const iw = m("");
function hl(n, e) {
  return at(n, iw(void 0, e));
}
let Ct = class Vu extends d {
  constructor(e) {
    var t;
    super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = Gv(M(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(e) {
    var t, i, s;
    const r = e ?? {};
    return new Vu(d.createCore({ disabled: (t = r.disabled) !== null && t !== void 0 ? t : false, disposed: false, hidden: (i = r.hidden) !== null && i !== void 0 ? i : false, parent: (s = r.parent) !== null && s !== void 0 ? s : null }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(e) {
    me(this.globalDisabled_, hl(e, "disabled")), ve(this, "hidden", hl(e, "hidden"));
  }
  bindDisabled(e) {
    me(this.globalDisabled_, (t) => {
      e.disabled = t;
    });
  }
  bindTabIndex(e) {
    me(this.globalDisabled_, (t) => {
      e.tabIndex = t ? -1 : 0;
    });
  }
  handleDispose(e) {
    this.value("disposed").emitter.on("change", (t) => {
      t && e();
    });
  }
  importState(e) {
    this.set("disabled", e.disabled), this.set("hidden", e.hidden);
  }
  exportState() {
    return { disabled: this.get("disabled"), hidden: this.get("hidden") };
  }
  getGlobalDisabled_() {
    const e = this.get("parent");
    return (e ? e.globalDisabled.rawValue : false) || this.get("disabled");
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(e) {
    var t;
    const i = e.previousRawValue;
    i == null ? void 0 : i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
  }
};
const dl = m("tbp");
let sw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(dl()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(dl("c")), this.element.appendChild(i), this.containerElement = i;
  }
};
const vn = m("tbi");
let rw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(vn()), t.viewProps.bindClassModifiers(this.element), ve(t.props, "selected", (r) => {
      r ? this.element.classList.add(vn(void 0, "sel")) : this.element.classList.remove(vn(void 0, "sel"));
    });
    const i = e.createElement("button");
    i.classList.add(vn("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(vn("t")), Tr(t.props.value("title"), s), this.buttonElement.appendChild(s), this.titleElement = s;
  }
}, ow = class {
  constructor(e, t) {
    this.emitter = new H(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new rw(e, { props: t.props, viewProps: t.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}, Ds = class extends Dr {
  constructor(e, t) {
    const i = new sw(e, { viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new Rr({ blade: t.blade, element: i.containerElement, viewProps: t.viewProps }), view: i })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new ow(e, { props: t.itemProps, viewProps: Ct.create() }), this.ic_.emitter.on("click", this.onItemClick_), this.props = t.props, ve(this.props, "selected", (s) => {
      this.itemController.props.set("selected", s), this.viewProps.set("hidden", !s);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(e) {
    return ge(e, (t) => super.importState(t), (t) => ({ selected: t.required.boolean, title: t.required.string }), (t) => (this.ic_.props.set("selected", t.selected), this.ic_.props.set("title", t.title), true));
  }
  exportState() {
    return Ce(() => super.exportState(), { selected: this.ic_.props.get("selected"), title: this.ic_.props.get("title") });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
}, lw = class extends Or {
  constructor(e, t) {
    super(e, t), this.emitter_ = new H(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = t, this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(e) {
    const t = this.controller.view.element.ownerDocument, i = new Ds(t, { blade: yu(), itemProps: d.fromObject({ selected: false, title: e.title }), props: d.fromObject({ selected: false }), viewProps: Ct.create() }), s = this.pool_.createApi(i);
    return this.rackApi_.add(s, e.index);
  }
  removePage(e) {
    this.rackApi_.remove(this.rackApi_.children[e]);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  onSelect_(e) {
    this.emitter_.emit("select", new yb(this, e.rawValue));
  }
}, aw = class extends Or {
  get title() {
    var e;
    return (e = this.controller.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.itemController.props.set("title", e);
  }
  get selected() {
    return this.controller.props.get("selected");
  }
  set selected(e) {
    this.controller.props.set("selected", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
  refresh() {
    this.rackApi_.refresh();
  }
};
const ml = -1;
let uw = class {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = M(true), this.selectedIndex = M(ml), this.items_ = [];
  }
  add(e, t) {
    const i = t ?? this.items_.length;
    this.items_.splice(i, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    t < 0 || (this.items_.splice(t, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = ml, this.empty.rawValue = true;
      return;
    }
    const e = this.items_.findIndex((t) => t.rawValue);
    e < 0 ? (this.items_.forEach((t, i) => {
      t.rawValue = i === 0;
    }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((t, i) => {
      t.rawValue = i === e;
    }), this.selectedIndex.rawValue = e), this.empty.rawValue = false;
  }
  onItemSelectedChange_(e) {
    if (e.rawValue) {
      const t = this.items_.findIndex((i) => i === e.sender);
      this.items_.forEach((i, s) => {
        i.rawValue = s === t;
      }), this.selectedIndex.rawValue = t;
    } else this.keepSelection_();
  }
};
const bn = m("tab");
let pw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(bn(), ku()), t.viewProps.bindClassModifiers(this.element), me(t.empty, at(this.element, bn(void 0, "nop")));
    const i = e.createElement("div");
    i.classList.add(bn("t")), this.element.appendChild(i), this.itemsElement = i;
    const s = e.createElement("div");
    s.classList.add(bn("i")), this.element.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(bn("c")), this.element.appendChild(r), this.contentsElement = r;
  }
}, vl = class extends Dr {
  constructor(e, t) {
    const i = new uw(), s = new pw(e, { empty: i.empty, viewProps: t.viewProps });
    super({ blade: t.blade, rackController: new Rr({ blade: t.blade, element: s.contentsElement, viewProps: t.viewProps }), view: s }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
    const r = this.rackController.rack;
    r.emitter.on("add", this.onRackAdd_), r.emitter.on("remove", this.onRackRemove_), this.tab = i;
  }
  add(e, t) {
    this.rackController.rack.add(e, t);
  }
  remove(e) {
    this.rackController.rack.remove(this.rackController.rack.children[e]);
  }
  onRackAdd_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    fu(this.view.itemsElement, t.itemController.view.element, e.index), t.itemController.viewProps.set("parent", this.viewProps), this.tab.add(t.props.value("selected"));
  }
  onRackRemove_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    Mr(t.itemController.view.element), t.itemController.viewProps.set("parent", null), this.tab.remove(t.props.value("selected"));
  }
};
T({ id: "tab", type: "blade", accept(n) {
  const e = A(n, (t) => ({ pages: t.required.array(t.required.object({ title: t.required.string })), view: t.required.constant("tab") }));
  return !e || e.pages.length === 0 ? null : { params: e };
}, controller(n) {
  const e = new vl(n.document, { blade: n.blade, viewProps: n.viewProps });
  return n.params.pages.forEach((t) => {
    const i = new Ds(n.document, { blade: yu(), itemProps: d.fromObject({ selected: false, title: t.title }), props: d.fromObject({ selected: false }), viewProps: Ct.create() });
    e.add(i);
  }), e;
}, api(n) {
  return n.controller instanceof vl ? new lw(n.controller, n.pool) : n.controller instanceof Ds ? new aw(n.controller, n.pool) : null;
} });
let jr = class extends Lr {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(e) {
    this.controller.valueController.props.set("options", e);
  }
};
class cw {
  constructor() {
    this.disabled = false, this.emitter = new H();
  }
  dispose() {
  }
  tick() {
    this.disabled || this.emitter.emit("tick", { sender: this });
  }
}
class hw {
  constructor(e, t) {
    this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = e, this.emitter = new H(), this.interval_ = t, this.setTimer_();
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(e) {
    this.disabled_ = e, this.disabled_ ? this.clearTimer_() : this.setTimer_();
  }
  dispose() {
    this.clearTimer_();
  }
  clearTimer_() {
    if (this.timerId_ === null) return;
    const e = this.doc_.defaultView;
    e && e.clearInterval(this.timerId_), this.timerId_ = null;
  }
  setTimer_() {
    if (this.clearTimer_(), this.interval_ <= 0) return;
    const e = this.doc_.defaultView;
    e && (this.timerId_ = e.setInterval(this.onTick_, this.interval_));
  }
  onTick_() {
    this.disabled_ || this.emitter.emit("tick", { sender: this });
  }
}
let sn = class {
  constructor(e) {
    this.constraints = e;
  }
  constrain(e) {
    return this.constraints.reduce((t, i) => i.constrain(t), e);
  }
};
function An(n, e) {
  if (n instanceof e) return n;
  if (n instanceof sn) {
    const t = n.constraints.reduce((i, s) => i || (s instanceof e ? s : null), null);
    if (t) return t;
  }
  return null;
}
let Ri = class {
  constructor(e) {
    this.values = d.fromObject({ options: e });
  }
  constrain(e) {
    const t = this.values.get("options");
    return t.length === 0 || t.filter((s) => s.value === e).length > 0 ? e : t[0].value;
  }
};
function ji(n) {
  var e;
  const t = Ts;
  if (Array.isArray(n)) return (e = A({ items: n }, (i) => ({ items: i.required.array(i.required.object({ text: i.required.string, value: i.required.raw })) }))) === null || e === void 0 ? void 0 : e.items;
  if (typeof n == "object") return t.required.raw(n).value;
}
function $u(n) {
  if (Array.isArray(n)) return n;
  const e = [];
  return Object.keys(n).forEach((t) => {
    e.push({ text: t, value: n[t] });
  }), e;
}
function Br(n) {
  return E(n) ? null : new Ri($u(n));
}
const os = m("lst");
let dw = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.element = e.createElement("div"), this.element.classList.add(os()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("select");
    i.classList.add(os("s")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.selectElement = i;
    const s = e.createElement("div");
    s.classList.add(os("m")), s.appendChild(Ai(e, "dropdown")), this.element.appendChild(s), t.value.emitter.on("change", this.onValueChange_), this.value_ = t.value, ve(this.props_, "options", (r) => {
      gu(this.selectElement), r.forEach((o) => {
        const l = e.createElement("option");
        l.textContent = o.text, this.selectElement.appendChild(l);
      }), this.update_();
    });
  }
  update_() {
    const e = this.props_.get("options").map((t) => t.value);
    this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
}, Xt = class {
  constructor(e, t) {
    this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new dw(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = this.props.get("options")[t.selectedIndex].value;
  }
  importProps(e) {
    return ge(e, null, (t) => ({ options: t.required.custom(ji) }), (t) => (this.props.set("options", $u(t.options)), true));
  }
  exportProps() {
    return Ce(null, { options: this.props.get("options") });
  }
};
const bl = m("pop");
let mw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(bl()), t.viewProps.bindClassModifiers(this.element), me(t.shows, at(this.element, bl(void 0, "v")));
  }
}, Nr = class {
  constructor(e, t) {
    this.shows = M(false), this.viewProps = t.viewProps, this.view = new mw(e, { shows: this.shows, viewProps: this.viewProps });
  }
};
const wl = m("txt");
let vw = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(wl()), t.viewProps.bindClassModifiers(this.element), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_);
    const i = e.createElement("input");
    i.classList.add(wl("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onChange_), this.value_ = t.value, this.refresh();
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}, Bi = class {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = t.parser, this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new vw(e, { props: t.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    E(s) || (this.value.rawValue = s), this.view.refresh();
  }
};
function bw(n) {
  return String(n);
}
function Ir(n) {
  return n === "false" ? false : !!n;
}
function _l(n) {
  return bw(n);
}
function ww(n) {
  return (e) => n.reduce((t, i) => t !== null ? t : i(e), null);
}
const _w = F(0);
function fi(n) {
  return _w(n) + "%";
}
function Fr(n) {
  return String(n);
}
function Rs(n) {
  return n;
}
function Mt({ primary: n, secondary: e, forward: t, backward: i }) {
  let s = false;
  function r(o) {
    s || (s = true, o(), s = false);
  }
  n.emitter.on("change", (o) => {
    r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), e.emitter.on("change", (o) => {
    r(() => {
      n.setRawValue(i(n.rawValue, e.rawValue), o.options);
    }), r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), r(() => {
    e.setRawValue(t(n.rawValue, e.rawValue), { forceEmit: false, last: true });
  });
}
function N(n, e) {
  const t = n * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
  return e.upKey ? +t : e.downKey ? -t : 0;
}
function Pt(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowDown", shiftKey: n.shiftKey, upKey: n.key === "ArrowUp" };
}
function fe(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowLeft", shiftKey: n.shiftKey, upKey: n.key === "ArrowRight" };
}
function fw(n) {
  return n === "ArrowUp" || n === "ArrowDown";
}
function gi(n) {
  return fw(n) || n === "ArrowLeft" || n === "ArrowRight";
}
function ls(n, e) {
  var t, i;
  const s = e.ownerDocument.defaultView, r = e.getBoundingClientRect();
  return { x: n.pageX - (((t = s && s.scrollX) !== null && t !== void 0 ? t : 0) + r.left), y: n.pageY - (((i = s && s.scrollY) !== null && i !== void 0 ? i : 0) + r.top) };
}
let Ue = class {
  constructor(e) {
    this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new H(), e.addEventListener("touchstart", this.onTouchStart_, { passive: false }), e.addEventListener("touchmove", this.onTouchMove_, { passive: true }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(e) {
    const t = this.elem_.getBoundingClientRect();
    return { bounds: { width: t.width, height: t.height }, point: e ? { x: e.x, y: e.y } : null };
  }
  onMouseDown_(e) {
    var t;
    e.preventDefault(), (t = e.currentTarget) === null || t === void 0 || t.focus();
    const i = this.elem_.ownerDocument;
    i.addEventListener("mousemove", this.onDocumentMouseMove_), i.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(ls(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseMove_(e) {
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(ls(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseUp_(e) {
    const t = this.elem_.ownerDocument;
    t.removeEventListener("mousemove", this.onDocumentMouseMove_), t.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(ls(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onTouchStart_(e) {
    e.preventDefault();
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchMove_(e) {
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchEnd_(e) {
    var t;
    const i = (t = e.targetTouches.item(0)) !== null && t !== void 0 ? t : this.lastTouch_, s = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(i ? { x: i.clientX - s.left, y: i.clientY - s.top } : void 0), sender: this, shiftKey: e.shiftKey });
  }
};
const ae = m("txt");
let gw = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(ae(), ae(void 0, "num")), t.arrayPosition && this.element.classList.add(ae(void 0, t.arrayPosition)), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(ae("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = t.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(ae()), this.inputElement.classList.add(ae("i"));
    const s = e.createElement("div");
    s.classList.add(ae("k")), this.element.appendChild(s), this.knobElement = s;
    const r = e.createElementNS(B, "svg");
    r.classList.add(ae("g")), this.knobElement.appendChild(r);
    const o = e.createElementNS(B, "path");
    o.classList.add(ae("gb")), r.appendChild(o), this.guideBodyElem_ = o;
    const l = e.createElementNS(B, "path");
    l.classList.add(ae("gh")), r.appendChild(l), this.guideHeadElem_ = l;
    const a = e.createElement("div");
    a.classList.add(m("tt")()), this.knobElement.appendChild(a), this.tooltipElem_ = a, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.refresh();
  }
  onDraggingChange_(e) {
    if (e.rawValue === null) {
      this.element.classList.remove(ae(void 0, "drg"));
      return;
    }
    this.element.classList.add(ae(void 0, "drg"));
    const t = e.rawValue / this.props_.get("pointerScale"), i = t + (t > 0 ? -1 : t < 0 ? 1 : 0), s = V(-i, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + s},0 L${i},4 L${i + s},8`, `M ${t},-1 L${t},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
    const r = this.props_.get("formatter");
    this.tooltipElem_.textContent = r(this.value.rawValue), this.tooltipElem_.style.left = `${t}px`;
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}, Wn = class {
  constructor(e, t) {
    var i;
    this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = t.parser, this.props = t.props, this.sliderProps_ = (i = t.sliderProps) !== null && i !== void 0 ? i : null, this.value = t.value, this.viewProps = t.viewProps, this.dragging_ = M(null), this.view = new gw(e, { arrayPosition: t.arrayPosition, dragging: this.dragging_, props: this.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const s = new Ue(this.view.knobElement);
    s.emitter.on("down", this.onPointerDown_), s.emitter.on("move", this.onPointerMove_), s.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(e) {
    var t, i;
    const s = (t = this.sliderProps_) === null || t === void 0 ? void 0 : t.get("min"), r = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max");
    let o = e;
    return s !== void 0 && (o = Math.max(o, s)), r !== void 0 && (o = Math.min(o, r)), o;
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    E(s) || (this.value.rawValue = this.constrainValue_(s)), this.view.refresh();
  }
  onInputKeyDown_(e) {
    const t = N(this.props.get("keyScale"), Pt(e));
    t !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), { forceEmit: false, last: false });
  }
  onInputKeyUp_(e) {
    N(this.props.get("keyScale"), Pt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
  onPointerDown_() {
    this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
  }
  computeDraggingValue_(e) {
    if (!e.point) return null;
    const t = e.point.x - e.bounds.width / 2;
    return this.constrainValue_(this.originRawValue_ + t * this.props.get("pointerScale"));
  }
  onPointerMove_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: false, last: false }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
  }
  onPointerUp_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: true, last: true }), this.dragging_.rawValue = null);
  }
};
const as = m("sld");
let Cw = class {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(as()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(as("t")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.trackElement = i;
    const s = e.createElement("div");
    s.classList.add(as("k")), this.trackElement.appendChild(s), this.knobElement = s, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.update_();
  }
  update_() {
    const e = V(h(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${e}%`;
  }
  onChange_() {
    this.update_();
  }
}, Pw = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.props = t.props, this.view = new Cw(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ue(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    e.point && this.value.setRawValue(h(V(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("min"), this.props.get("max")), t);
  }
  onPointerDownOrMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = N(this.props.get("keyScale"), fe(e));
    t !== 0 && this.value.setRawValue(this.value.rawValue + t, { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    N(this.props.get("keyScale"), fe(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const us = m("sldtxt");
let xw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(us());
    const i = e.createElement("div");
    i.classList.add(us("s")), this.sliderView_ = t.sliderView, i.appendChild(this.sliderView_.element), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(us("t")), this.textView_ = t.textView, s.appendChild(this.textView_.element), this.element.appendChild(s);
  }
}, fl = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.sliderC_ = new Pw(e, { props: t.sliderProps, value: t.value, viewProps: this.viewProps }), this.textC_ = new Wn(e, { parser: t.parser, props: t.textProps, sliderProps: t.sliderProps, value: t.value, viewProps: t.viewProps }), this.view = new xw(e, { sliderView: this.sliderC_.view, textView: this.textC_.view });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(e) {
    return ge(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => {
      const i = this.sliderC_.props;
      return i.set("max", t.max), i.set("min", t.min), true;
    });
  }
  exportProps() {
    const e = this.sliderC_.props;
    return Ce(null, { max: e.get("max"), min: e.get("min") });
  }
};
function yw(n) {
  return { sliderProps: new d({ keyScale: n.keyScale, max: n.max, min: n.min }), textProps: new d({ formatter: M(n.formatter), keyScale: n.keyScale, pointerScale: M(n.pointerScale) }) };
}
const Ew = { containerUnitSize: "cnt-usz" };
function Su(n) {
  return `--${Ew[n]}`;
}
class Lu {
  constructor(e, t) {
    const i = m(t.viewName);
    this.element = e.createElement("div"), this.element.classList.add(i()), t.viewProps.bindClassModifiers(this.element);
  }
}
function Tn(n) {
  return $r(n);
}
function tt(n) {
  if (As(n)) return A(n, Tn);
}
function De(n, e) {
  if (!n) return;
  const t = [], i = Er(n, e);
  i && t.push(i);
  const s = kr(n);
  return s && t.push(s), new sn(t);
}
function Mu(n) {
  if (n === "inline" || n === "popup") return n;
}
function ut(n, e) {
  n.write(e);
}
const ii = m("ckb");
let kw = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(ii()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("label");
    i.classList.add(ii("l")), this.element.appendChild(i);
    const s = e.createElement("input");
    s.classList.add(ii("i")), s.type = "checkbox", i.appendChild(s), this.inputElement = s, t.viewProps.bindDisabled(this.inputElement);
    const r = e.createElement("div");
    r.classList.add(ii("w")), i.appendChild(r);
    const o = Ai(e, "check");
    r.appendChild(o), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}, Vw = class {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new kw(e, { value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = t.checked;
  }
};
function $w(n) {
  const e = [], t = Br(n.options);
  return t && e.push(t), new sn(e);
}
T({ id: "input-bool", type: "input", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = A(e, (i) => ({ options: i.optional.custom(ji), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Ir, constraint: (n) => $w(n.params), writer: (n) => ut }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && An(i, Ri);
  return s ? new Xt(e, { props: new d({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new Vw(e, { value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof Xt ? new jr(n.controller) : null;
} });
const ht = m("col");
let Sw = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ht()), t.foldable.bindExpandedClass(this.element, ht(void 0, "expanded")), ve(t.foldable, "completed", at(this.element, ht(void 0, "cpl")));
    const i = e.createElement("div");
    i.classList.add(ht("h")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ht("s")), i.appendChild(s), this.swatchElement = s;
    const r = e.createElement("div");
    if (r.classList.add(ht("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(ht("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
};
function Lw(n, e, t) {
  const i = V(n / 255, 0, 1), s = V(e / 255, 0, 1), r = V(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u = 0, p = 0;
  const c = (l + o) / 2;
  return a !== 0 && (p = a / (1 - Math.abs(o + l - 1)), i === o ? u = (s - r) / a : s === o ? u = 2 + (r - i) / a : u = 4 + (i - s) / a, u = u / 6 + (u < 0 ? 1 : 0)), [u * 360, p * 100, c * 100];
}
function Mw(n, e, t) {
  const i = (n % 360 + 360) % 360, s = V(e / 100, 0, 1), r = V(t / 100, 0, 1), o = (1 - Math.abs(2 * r - 1)) * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o / 2;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function Aw(n, e, t) {
  const i = V(n / 255, 0, 1), s = V(e / 255, 0, 1), r = V(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u;
  a === 0 ? u = 0 : o === i ? u = 60 * (((s - r) / a % 6 + 6) % 6) : o === s ? u = 60 * ((r - i) / a + 2) : u = 60 * ((i - s) / a + 4);
  const p = o === 0 ? 0 : a / o, c = o;
  return [u, p * 100, c * 100];
}
function Au(n, e, t) {
  const i = wu(n, 360), s = V(e / 100, 0, 1), r = V(t / 100, 0, 1), o = r * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function Tw(n, e, t) {
  const i = t + e * (100 - Math.abs(2 * t - 100)) / 200;
  return [n, i !== 0 ? e * (100 - Math.abs(2 * t - 100)) / i : 0, t + e * (100 - Math.abs(2 * t - 100)) / 200];
}
function Ow(n, e, t) {
  const i = 100 - Math.abs(t * (200 - e) / 100 - 100);
  return [n, i !== 0 ? e * t / i : 0, t * (200 - e) / 200];
}
function Ee(n) {
  return [n[0], n[1], n[2]];
}
function Ni(n, e) {
  return [n[0], n[1], n[2], e];
}
const Dw = { hsl: { hsl: (n, e, t) => [n, e, t], hsv: Tw, rgb: Mw }, hsv: { hsl: Ow, hsv: (n, e, t) => [n, e, t], rgb: Au }, rgb: { hsl: Lw, hsv: Aw, rgb: (n, e, t) => [n, e, t] } };
function Wt(n, e) {
  return [e === "float" ? 1 : n === "rgb" ? 255 : 360, e === "float" ? 1 : n === "rgb" ? 255 : 100, e === "float" ? 1 : n === "rgb" ? 255 : 100];
}
function Rw(n, e) {
  return n === e ? e : wu(n, e);
}
function Tu(n, e, t) {
  var i;
  const s = Wt(e, t);
  return [e === "rgb" ? V(n[0], 0, s[0]) : Rw(n[0], s[0]), V(n[1], 0, s[1]), V(n[2], 0, s[2]), V((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1)];
}
function gl(n, e, t, i) {
  const s = Wt(e, t), r = Wt(e, i);
  return n.map((o, l) => o / s[l] * r[l]);
}
function Ou(n, e, t) {
  const i = gl(n, e.mode, e.type, "int"), s = Dw[e.mode][t.mode](...i);
  return gl(s, t.mode, "int", t.type);
}
let x = class Du {
  static black() {
    return new Du([0, 0, 0], "rgb");
  }
  constructor(e, t) {
    this.type = "int", this.mode = t, this.comps_ = Tu(e, t, this.type);
  }
  getComponents(e) {
    return Ni(Ou(Ee(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
};
const Ge = m("colp");
let jw = class {
  constructor(e, t) {
    this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(Ge()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Ge("hsv"));
    const s = e.createElement("div");
    s.classList.add(Ge("sv")), this.svPaletteView_ = t.svPaletteView, s.appendChild(this.svPaletteView_.element), i.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(Ge("h")), this.hPaletteView_ = t.hPaletteView, r.appendChild(this.hPaletteView_.element), i.appendChild(r), this.element.appendChild(i);
    const o = e.createElement("div");
    if (o.classList.add(Ge("rgb")), this.textsView_ = t.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), t.alphaViews) {
      this.alphaViews_ = { palette: t.alphaViews.palette, text: t.alphaViews.text };
      const l = e.createElement("div");
      l.classList.add(Ge("a"));
      const a = e.createElement("div");
      a.classList.add(Ge("ap")), a.appendChild(this.alphaViews_.palette.element), l.appendChild(a);
      const u = e.createElement("div");
      u.classList.add(Ge("at")), u.appendChild(this.alphaViews_.text.element), l.appendChild(u), this.element.appendChild(l);
    }
  }
  get allFocusableElements() {
    const e = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map((t) => t.inputElement)];
    return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
  }
};
function Bw(n) {
  return n === "int" ? "int" : n === "float" ? "float" : void 0;
}
function Kr(n) {
  return A(n, (e) => ({ color: e.optional.object({ alpha: e.optional.boolean, type: e.optional.custom(Bw) }), expanded: e.optional.boolean, picker: e.optional.custom(Mu), readonly: e.optional.constant(false) }));
}
function xt(n) {
  return n ? 0.1 : 1;
}
function Ru(n) {
  var e;
  return (e = n.color) === null || e === void 0 ? void 0 : e.type;
}
let Ur = class {
  constructor(e, t) {
    this.type = "float", this.mode = t, this.comps_ = Tu(e, t, this.type);
  }
  getComponents(e) {
    return Ni(Ou(Ee(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
};
const Nw = { int: (n, e) => new x(n, e), float: (n, e) => new Ur(n, e) };
function zr(n, e, t) {
  return Nw[t](n, e);
}
function Iw(n) {
  return n.type === "float";
}
function Fw(n) {
  return n.type === "int";
}
function Kw(n) {
  const e = n.getComponents(), t = Wt(n.mode, "int");
  return new x([Math.round(h(e[0], 0, 1, 0, t[0])), Math.round(h(e[1], 0, 1, 0, t[1])), Math.round(h(e[2], 0, 1, 0, t[2])), e[3]], n.mode);
}
function Uw(n) {
  const e = n.getComponents(), t = Wt(n.mode, "int");
  return new Ur([h(e[0], 0, t[0], 0, 1), h(e[1], 0, t[1], 0, 1), h(e[2], 0, t[2], 0, 1), e[3]], n.mode);
}
function G(n, e) {
  if (n.type === e) return n;
  if (Fw(n) && e === "float") return Uw(n);
  if (Iw(n) && e === "int") return Kw(n);
  throw Fe.shouldNeverHappen();
}
function zw(n, e) {
  return n.alpha === e.alpha && n.mode === e.mode && n.notation === e.notation && n.type === e.type;
}
function he(n, e) {
  const t = n.match(/^(.+)%$/);
  return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(n), e);
}
const Hw = { deg: (n) => n, grad: (n) => n * 360 / 400, rad: (n) => n * 360 / (2 * Math.PI), turn: (n) => n * 360 };
function ju(n) {
  const e = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!e) return parseFloat(n);
  const t = parseFloat(e[1]), i = e[2];
  return Hw[i](t);
}
function Bu(n) {
  const e = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [he(e[1], 255), he(e[2], 255), he(e[3], 255)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function qw(n) {
  const e = Bu(n);
  return e ? new x(e, "rgb") : null;
}
function Nu(n) {
  const e = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [he(e[1], 255), he(e[2], 255), he(e[3], 255), he(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function Gw(n) {
  const e = Nu(n);
  return e ? new x(e, "rgb") : null;
}
function Iu(n) {
  const e = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [ju(e[1]), he(e[2], 100), he(e[3], 100)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function Yw(n) {
  const e = Iu(n);
  return e ? new x(e, "hsl") : null;
}
function Fu(n) {
  const e = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [ju(e[1]), he(e[2], 100), he(e[3], 100), he(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function Xw(n) {
  const e = Fu(n);
  return e ? new x(e, "hsl") : null;
}
function Ku(n) {
  const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
  const t = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null;
}
function Ww(n) {
  const e = Ku(n);
  return e ? new x(e, "rgb") : null;
}
function Uu(n) {
  const e = n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), h(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)];
  const t = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), h(parseInt(t[4], 16), 0, 255, 0, 1)] : null;
}
function Zw(n) {
  const e = Uu(n);
  return e ? new x(e, "rgb") : null;
}
function zu(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function Jw(n) {
  return (e) => {
    const t = zu(e);
    return t ? zr(t, "rgb", n) : null;
  };
}
function Hu(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), parseFloat(e[4])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function Qw(n) {
  return (e) => {
    const t = Hu(e);
    return t ? zr(t, "rgb", n) : null;
  };
}
const e_ = [{ parser: Ku, result: { alpha: false, mode: "rgb", notation: "hex" } }, { parser: Uu, result: { alpha: true, mode: "rgb", notation: "hex" } }, { parser: Bu, result: { alpha: false, mode: "rgb", notation: "func" } }, { parser: Nu, result: { alpha: true, mode: "rgb", notation: "func" } }, { parser: Iu, result: { alpha: false, mode: "hsl", notation: "func" } }, { parser: Fu, result: { alpha: true, mode: "hsl", notation: "func" } }, { parser: zu, result: { alpha: false, mode: "rgb", notation: "object" } }, { parser: Hu, result: { alpha: true, mode: "rgb", notation: "object" } }];
function t_(n) {
  return e_.reduce((e, { parser: t, result: i }) => e || (t(n) ? i : null), null);
}
function n_(n, e = "int") {
  const t = t_(n);
  return t ? t.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, t), { type: "int" }) : t.notation === "func" ? Object.assign(Object.assign({}, t), { type: e }) : null : null;
}
function Zn(n) {
  const e = [Ww, Zw, qw, Gw, Yw, Xw];
  e.push(Jw("int"), Qw("int"));
  const t = ww(e);
  return (i) => {
    const s = t(i);
    return s ? G(s, n) : null;
  };
}
function i_(n) {
  const e = Zn("int");
  if (typeof n != "string") return x.black();
  const t = e(n);
  return t ?? x.black();
}
function qu(n) {
  const e = V(Math.floor(n), 0, 255).toString(16);
  return e.length === 1 ? `0${e}` : e;
}
function Hr(n, e = "#") {
  const t = Ee(n.getComponents("rgb")).map(qu).join("");
  return `${e}${t}`;
}
function qr(n, e = "#") {
  const t = n.getComponents("rgb"), i = [t[0], t[1], t[2], t[3] * 255].map(qu).join("");
  return `${e}${i}`;
}
function Gu(n) {
  const e = F(0), t = G(n, "int");
  return `rgb(${Ee(t.getComponents("rgb")).map((s) => e(s)).join(", ")})`;
}
function ai(n) {
  const e = F(2), t = F(0);
  return `rgba(${G(n, "int").getComponents("rgb").map((r, o) => (o === 3 ? e : t)(r)).join(", ")})`;
}
function s_(n) {
  const e = [F(0), fi, fi], t = G(n, "int");
  return `hsl(${Ee(t.getComponents("hsl")).map((s, r) => e[r](s)).join(", ")})`;
}
function r_(n) {
  const e = [F(0), fi, fi, F(2)];
  return `hsla(${G(n, "int").getComponents("hsl").map((s, r) => e[r](s)).join(", ")})`;
}
function Yu(n, e) {
  const t = F(e === "float" ? 2 : 0), i = ["r", "g", "b"], s = G(n, e);
  return `{${Ee(s.getComponents("rgb")).map((o, l) => `${i[l]}: ${t(o)}`).join(", ")}}`;
}
function o_(n) {
  return (e) => Yu(e, n);
}
function Xu(n, e) {
  const t = F(2), i = F(e === "float" ? 2 : 0), s = ["r", "g", "b", "a"];
  return `{${G(n, e).getComponents("rgb").map((l, a) => {
    const u = a === 3 ? t : i;
    return `${s[a]}: ${u(l)}`;
  }).join(", ")}}`;
}
function l_(n) {
  return (e) => Xu(e, n);
}
const a_ = [{ format: { alpha: false, mode: "rgb", notation: "hex", type: "int" }, stringifier: Hr }, { format: { alpha: true, mode: "rgb", notation: "hex", type: "int" }, stringifier: qr }, { format: { alpha: false, mode: "rgb", notation: "func", type: "int" }, stringifier: Gu }, { format: { alpha: true, mode: "rgb", notation: "func", type: "int" }, stringifier: ai }, { format: { alpha: false, mode: "hsl", notation: "func", type: "int" }, stringifier: s_ }, { format: { alpha: true, mode: "hsl", notation: "func", type: "int" }, stringifier: r_ }, ...["int", "float"].reduce((n, e) => [...n, { format: { alpha: false, mode: "rgb", notation: "object", type: e }, stringifier: o_(e) }, { format: { alpha: true, mode: "rgb", notation: "object", type: e }, stringifier: l_(e) }], [])];
function Wu(n) {
  return a_.reduce((e, t) => e || (zw(t.format, n) ? t.stringifier : null), null);
}
const wn = m("apl");
let u_ = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(wn()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(wn("b")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(wn("c")), i.appendChild(s), this.colorElem_ = s;
    const r = e.createElement("div");
    r.classList.add(wn("m")), this.element.appendChild(r), this.markerElem_ = r;
    const o = e.createElement("div");
    o.classList.add(wn("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e.getComponents("rgb"), i = new x([t[0], t[1], t[2], 0], "rgb"), s = new x([t[0], t[1], t[2], 255], "rgb"), r = ["to right", ai(i), ai(s)];
    this.colorElem_.style.background = `linear-gradient(${r.join(",")})`, this.previewElem_.style.backgroundColor = ai(e);
    const o = h(t[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, p_ = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new u_(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ue(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = e.point.x / e.bounds.width, s = this.value.rawValue, [r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new x([r, o, l, i], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = N(xt(true), fe(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new x([s, r, o, l + t], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    N(xt(true), fe(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const Dt = m("coltxt");
function c_(n) {
  const e = n.createElement("select"), t = [{ text: "RGB", value: "rgb" }, { text: "HSL", value: "hsl" }, { text: "HSV", value: "hsv" }, { text: "HEX", value: "hex" }];
  return e.appendChild(t.reduce((i, s) => {
    const r = n.createElement("option");
    return r.textContent = s.text, r.value = s.value, i.appendChild(r), i;
  }, n.createDocumentFragment())), e;
}
let h_ = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Dt()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Dt("m")), this.modeElem_ = c_(e), this.modeElem_.classList.add(Dt("ms")), i.appendChild(this.modeSelectElement), t.viewProps.bindDisabled(this.modeElem_);
    const s = e.createElement("div");
    s.classList.add(Dt("mm")), s.appendChild(Ai(e, "dropdown")), i.appendChild(s), this.element.appendChild(i);
    const r = e.createElement("div");
    r.classList.add(Dt("w")), this.element.appendChild(r), this.inputsElem_ = r, this.inputViews_ = t.inputViews, this.applyInputViews_(), me(t.mode, (o) => {
      this.modeElem_.value = o;
    });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(e) {
    this.inputViews_ = e, this.applyInputViews_();
  }
  applyInputViews_() {
    gu(this.inputsElem_);
    const e = this.element.ownerDocument;
    this.inputViews_.forEach((t) => {
      const i = e.createElement("div");
      i.classList.add(Dt("c")), i.appendChild(t.element), this.inputsElem_.appendChild(i);
    });
  }
};
function d_(n) {
  return F(n === "float" ? 2 : 0);
}
function m_(n, e, t) {
  const i = Wt(n, e)[t];
  return new Yn({ min: 0, max: i });
}
function v_(n, e, t) {
  return new Wn(n, { arrayPosition: t === 0 ? "fst" : t === 2 ? "lst" : "mid", parser: e.parser, props: d.fromObject({ formatter: d_(e.colorType), keyScale: xt(false), pointerScale: e.colorType === "float" ? 0.01 : 1 }), value: M(0, { constraint: m_(e.colorMode, e.colorType, t) }), viewProps: e.viewProps });
}
function b_(n, e) {
  const t = { colorMode: e.colorMode, colorType: e.colorType, parser: _e, viewProps: e.viewProps };
  return [0, 1, 2].map((i) => {
    const s = v_(n, t, i);
    return Mt({ primary: e.value, secondary: s.value, forward(r) {
      return G(r, e.colorType).getComponents(e.colorMode)[i];
    }, backward(r, o) {
      const l = e.colorMode, u = G(r, e.colorType).getComponents(l);
      u[i] = o;
      const p = zr(Ni(Ee(u), u[3]), l, e.colorType);
      return G(p, "int");
    } }), s;
  });
}
function w_(n, e) {
  const t = new Bi(n, { parser: Zn("int"), props: d.fromObject({ formatter: Hr }), value: M(x.black()), viewProps: e.viewProps });
  return Mt({ primary: e.value, secondary: t.value, forward: (i) => new x(Ee(i.getComponents()), i.mode), backward: (i, s) => new x(Ni(Ee(s.getComponents(i.mode)), i.getComponents()[3]), i.mode) }), [t];
}
function __(n) {
  return n !== "hex";
}
let f_ = class {
  constructor(e, t) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = t.colorType, this.value = t.value, this.viewProps = t.viewProps, this.colorMode = M(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new h_(e, { mode: this.colorMode, inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view], viewProps: this.viewProps }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(e) {
    const t = this.colorMode.rawValue;
    return __(t) ? b_(e, { colorMode: t, colorType: this.colorType_, value: this.value, viewProps: this.viewProps }) : w_(e, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(e) {
    const t = e.currentTarget;
    this.colorMode.rawValue = t.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((i) => i.view);
  }
};
const ps = m("hpl");
let g_ = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(ps()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(ps("c")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ps("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue, [t] = e.getComponents("hsv");
    this.markerElem_.style.backgroundColor = Gu(new x([t, 100, 100], "hsv"));
    const i = h(t, 0, 360, 0, 100);
    this.markerElem_.style.left = `${i}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, C_ = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new g_(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ue(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = h(V(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), s = this.value.rawValue, [, r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new x([i, r, o, l], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = N(xt(false), fe(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new x([s + t, r, o, l], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    N(xt(false), fe(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
};
const cs = m("svp"), Cl = 64;
let P_ = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(cs()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("canvas");
    i.height = Cl, i.width = Cl, i.classList.add(cs("c")), this.element.appendChild(i), this.canvasElement = i;
    const s = e.createElement("div");
    s.classList.add(cs("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = Lb(this.canvasElement);
    if (!e) return;
    const i = this.value.rawValue.getComponents("hsv"), s = this.canvasElement.width, r = this.canvasElement.height, o = e.getImageData(0, 0, s, r), l = o.data;
    for (let p = 0; p < r; p++) for (let c = 0; c < s; c++) {
      const L = h(c, 0, s, 0, 100), be = h(p, 0, r, 100, 0), ee = Au(i[0], L, be), W = (p * s + c) * 4;
      l[W] = ee[0], l[W + 1] = ee[1], l[W + 2] = ee[2], l[W + 3] = 255;
    }
    e.putImageData(o, 0, 0);
    const a = h(i[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${a}%`;
    const u = h(i[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${u}%`;
  }
  onValueChange_() {
    this.update_();
  }
}, x_ = class {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new P_(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ue(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = h(e.point.x, 0, e.bounds.width, 0, 100), s = h(e.point.y, 0, e.bounds.height, 100, 0), [r, , , o] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new x([r, i, s, o], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    gi(e.key) && e.preventDefault();
    const [t, i, s, r] = this.value.rawValue.getComponents("hsv"), o = xt(false), l = N(o, fe(e)), a = N(o, Pt(e));
    l === 0 && a === 0 || this.value.setRawValue(new x([t, i + l, s + a, r], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    const t = xt(false), i = N(t, fe(e)), s = N(t, Pt(e));
    i === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}, y_ = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.hPaletteC_ = new C_(e, { value: this.value, viewProps: this.viewProps }), this.svPaletteC_ = new x_(e, { value: this.value, viewProps: this.viewProps }), this.alphaIcs_ = t.supportsAlpha ? { palette: new p_(e, { value: this.value, viewProps: this.viewProps }), text: new Wn(e, { parser: _e, props: d.fromObject({ pointerScale: 0.01, keyScale: 0.1, formatter: F(2) }), value: M(0, { constraint: new Yn({ min: 0, max: 1 }) }), viewProps: this.viewProps }) } : null, this.alphaIcs_ && Mt({ primary: this.value, secondary: this.alphaIcs_.text.value, forward: (i) => i.getComponents()[3], backward: (i, s) => {
      const r = i.getComponents();
      return r[3] = s, new x(r, i.mode);
    } }), this.textsC_ = new f_(e, { colorType: t.colorType, value: this.value, viewProps: this.viewProps }), this.view = new jw(e, { alphaViews: this.alphaIcs_ ? { palette: this.alphaIcs_.palette.view, text: this.alphaIcs_.text.view } : null, hPaletteView: this.hPaletteC_.view, supportsAlpha: t.supportsAlpha, svPaletteView: this.svPaletteC_.view, textsView: this.textsC_.view, viewProps: this.viewProps });
  }
  get textsController() {
    return this.textsC_;
  }
};
const hs = m("colsw");
let E_ = class {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.element = e.createElement("div"), this.element.classList.add(hs()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(hs("sw")), this.element.appendChild(i), this.swatchElem_ = i;
    const s = e.createElement("button");
    s.classList.add(hs("b")), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = qr(e);
  }
  onValueChange_() {
    this.update_();
  }
}, k_ = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new E_(e, { value: this.value, viewProps: this.viewProps });
  }
}, Gr = class {
  constructor(e, t) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Oi.create(t.expanded), this.swatchC_ = new k_(e, { value: this.value, viewProps: this.viewProps });
    const i = this.swatchC_.view.buttonElement;
    i.addEventListener("blur", this.onButtonBlur_), i.addEventListener("click", this.onButtonClick_), this.textC_ = new Bi(e, { parser: t.parser, props: d.fromObject({ formatter: t.formatter }), value: this.value, viewProps: this.viewProps }), this.view = new Sw(e, { foldable: this.foldable_, pickerLayout: t.pickerLayout }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = t.pickerLayout === "popup" ? new Nr(e, { viewProps: this.viewProps }) : null;
    const s = new y_(e, { colorType: t.colorType, supportsAlpha: t.supportsAlpha, value: this.value, viewProps: this.viewProps });
    s.view.allFocusableElements.forEach((r) => {
      r.addEventListener("blur", this.onPopupChildBlur_), r.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = s, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(s.view.element), Mt({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (r) => r, backward: (r, o) => o })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Di(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Ar(e);
    i && t.contains(i) || i && i === this.swatchC_.view.buttonElement && !Mi(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
  }
};
function V_(n) {
  return Ee(n.getComponents("rgb")).reduce((e, t) => e << 8 | Math.floor(t) & 255, 0);
}
function $_(n) {
  return n.getComponents("rgb").reduce((e, t, i) => {
    const s = Math.floor(i === 3 ? t * 255 : t) & 255;
    return e << 8 | s;
  }, 0) >>> 0;
}
function S_(n) {
  return new x([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
}
function L_(n) {
  return new x([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, h(n & 255, 0, 255, 0, 1)], "rgb");
}
function M_(n) {
  return typeof n != "number" ? x.black() : S_(n);
}
function A_(n) {
  return typeof n != "number" ? x.black() : L_(n);
}
function ui(n, e) {
  return typeof n != "object" || E(n) ? false : e in n && typeof n[e] == "number";
}
function Zu(n) {
  return ui(n, "r") && ui(n, "g") && ui(n, "b");
}
function Ju(n) {
  return Zu(n) && ui(n, "a");
}
function Qu(n) {
  return Zu(n);
}
function Yr(n, e) {
  if (n.mode !== e.mode || n.type !== e.type) return false;
  const t = n.getComponents(), i = e.getComponents();
  for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return false;
  return true;
}
function Pl(n) {
  return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function T_(n) {
  const e = Wu(n);
  return e ? (t, i) => {
    ut(t, e(i));
  } : null;
}
function O_(n) {
  const e = n ? $_ : V_;
  return (t, i) => {
    ut(t, e(i));
  };
}
function D_(n, e, t) {
  const s = G(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b), n.writeProperty("a", s.a);
}
function R_(n, e, t) {
  const s = G(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b);
}
function j_(n, e) {
  return (t, i) => {
    n ? D_(t, i, e) : R_(t, i, e);
  };
}
function B_(n) {
  var e;
  return !!(!((e = n == null ? void 0 : n.color) === null || e === void 0) && e.alpha);
}
function N_(n) {
  return n ? (e) => qr(e, "0x") : (e) => Hr(e, "0x");
}
function I_(n) {
  return "color" in n || n.view === "color";
}
T({ id: "input-color-number", type: "input", accept: (n, e) => {
  if (typeof n != "number" || !I_(e)) return null;
  const t = Kr(e);
  return t ? { initialValue: n, params: Object.assign(Object.assign({}, t), { supportsAlpha: B_(e) }) } : null;
}, binding: { reader: (n) => n.params.supportsAlpha ? A_ : M_, equals: Yr, writer: (n) => O_(n.params.supportsAlpha) }, controller: (n) => {
  var e, t;
  return new Gr(n.document, { colorType: "int", expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: N_(n.params.supportsAlpha), parser: Zn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.supportsAlpha, value: n.value, viewProps: n.viewProps });
} });
function F_(n, e) {
  if (!Qu(n)) return G(x.black(), e);
  if (e === "int") {
    const t = Pl(n);
    return new x(t, "rgb");
  }
  if (e === "float") {
    const t = Pl(n);
    return new Ur(t, "rgb");
  }
  return G(x.black(), "int");
}
function K_(n) {
  return Ju(n);
}
function U_(n) {
  return (e) => {
    const t = F_(e, n);
    return G(t, "int");
  };
}
function z_(n, e) {
  return (t) => n ? Xu(t, e) : Yu(t, e);
}
T({ id: "input-color-object", type: "input", accept: (n, e) => {
  var t;
  if (!Qu(n)) return null;
  const i = Kr(e);
  return i ? { initialValue: n, params: Object.assign(Object.assign({}, i), { colorType: (t = Ru(e)) !== null && t !== void 0 ? t : "int" }) } : null;
}, binding: { reader: (n) => U_(n.params.colorType), equals: Yr, writer: (n) => j_(K_(n.initialValue), n.params.colorType) }, controller: (n) => {
  var e, t;
  const i = Ju(n.initialValue);
  return new Gr(n.document, { colorType: n.params.colorType, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: z_(i, n.params.colorType), parser: Zn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: i, value: n.value, viewProps: n.viewProps });
} });
T({ id: "input-color-string", type: "input", accept: (n, e) => {
  if (typeof n != "string" || e.view === "text") return null;
  const t = n_(n, Ru(e));
  if (!t) return null;
  const i = Wu(t);
  if (!i) return null;
  const s = Kr(e);
  return s ? { initialValue: n, params: Object.assign(Object.assign({}, s), { format: t, stringifier: i }) } : null;
}, binding: { reader: () => i_, equals: Yr, writer: (n) => {
  const e = T_(n.params.format);
  if (!e) throw Fe.notBindable();
  return e;
} }, controller: (n) => {
  var e, t;
  return new Gr(n.document, { colorType: n.params.format.type, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: n.params.stringifier, parser: Zn("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.format.alpha, value: n.value, viewProps: n.viewProps });
} });
let Ii = class {
  constructor(e) {
    this.components = e.components, this.asm_ = e.assembly;
  }
  constrain(e) {
    const t = this.asm_.toComponents(e).map((i, s) => {
      var r, o;
      return (o = (r = this.components[s]) === null || r === void 0 ? void 0 : r.constrain(i)) !== null && o !== void 0 ? o : i;
    });
    return this.asm_.fromComponents(t);
  }
};
const xl = m("pndtxt");
let H_ = class {
  constructor(e, t) {
    this.textViews = t.textViews, this.element = e.createElement("div"), this.element.classList.add(xl()), this.textViews.forEach((i) => {
      const s = e.createElement("div");
      s.classList.add(xl("a")), s.appendChild(i.element), this.element.appendChild(s);
    });
  }
};
function q_(n, e, t) {
  return new Wn(n, { arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid", parser: e.parser, props: e.axes[t].textProps, value: M(0, { constraint: e.axes[t].constraint }), viewProps: e.viewProps });
}
let rn = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.acs_ = t.axes.map((i, s) => q_(e, t, s)), this.acs_.forEach((i, s) => {
      Mt({ primary: this.value, secondary: i.value, forward: (r) => t.assembly.toComponents(r)[s], backward: (r, o) => {
        const l = t.assembly.toComponents(r);
        return l[s] = o, t.assembly.fromComponents(l);
      } });
    }), this.view = new H_(e, { textViews: this.acs_.map((i) => i.view) });
  }
  get textControllers() {
    return this.acs_;
  }
}, G_ = class extends Lr {
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.sliderController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.sliderController.props.set("min", e);
  }
};
function Y_(n, e) {
  const t = [], i = Er(n, e);
  i && t.push(i);
  const s = kr(n);
  s && t.push(s);
  const r = Br(n.options);
  return r && t.push(r), new sn(t);
}
T({ id: "input-number", type: "input", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = A(e, (i) => Object.assign(Object.assign({}, $r(i)), { options: i.optional.custom(ji), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => yr, constraint: (n) => Y_(n.params, n.initialValue), writer: (n) => ut }, controller: (n) => {
  const e = n.value, t = n.constraint, i = t && An(t, Ri);
  if (i) return new Xt(n.document, { props: new d({ options: i.values.value("options") }), value: e, viewProps: n.viewProps });
  const s = Vr(n.params, e.rawValue), r = t && An(t, Yn);
  return r ? new fl(n.document, Object.assign(Object.assign({}, yw(Object.assign(Object.assign({}, s), { keyScale: M(s.keyScale), max: r.values.value("max"), min: r.values.value("min") }))), { parser: _e, value: e, viewProps: n.viewProps })) : new Wn(n.document, { parser: _e, props: d.fromObject(s), value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof fl ? new G_(n.controller) : n.controller.valueController instanceof Xt ? new jr(n.controller) : null;
} });
let st = class {
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(e) {
    if (E(e)) return false;
    const t = e.x, i = e.y;
    return !(typeof t != "number" || typeof i != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
};
const ep = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new st(...n) }, Rt = m("p2d");
let X_ = class {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Rt()), t.viewProps.bindClassModifiers(this.element), me(t.expanded, at(this.element, Rt(void 0, "expanded")));
    const i = e.createElement("div");
    i.classList.add(Rt("h")), this.element.appendChild(i);
    const s = e.createElement("button");
    s.classList.add(Rt("b")), s.appendChild(Ai(e, "p2dpad")), t.viewProps.bindDisabled(s), i.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    if (r.classList.add(Rt("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(Rt("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
};
const Ye = m("p2dp");
let W_ = class {
  constructor(e, t) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = e.createElement("div"), this.element.classList.add(Ye()), t.layout === "popup" && this.element.classList.add(Ye(void 0, "p")), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Ye("p")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.padElement = i;
    const s = e.createElementNS(B, "svg");
    s.classList.add(Ye("g")), this.padElement.appendChild(s), this.svgElem_ = s;
    const r = e.createElementNS(B, "line");
    r.classList.add(Ye("ax")), r.setAttributeNS(null, "x1", "0"), r.setAttributeNS(null, "y1", "50%"), r.setAttributeNS(null, "x2", "100%"), r.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(r);
    const o = e.createElementNS(B, "line");
    o.classList.add(Ye("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
    const l = e.createElementNS(B, "line");
    l.classList.add(Ye("l")), l.setAttributeNS(null, "x1", "50%"), l.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(l), this.lineElem_ = l;
    const a = e.createElement("div");
    a.classList.add(Ye("m")), this.padElement.appendChild(a), this.markerElem_ = a, t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [e, t] = this.value.rawValue.getComponents(), i = this.props_.get("max"), s = h(e, -i, +i, 0, 100), r = h(t, -i, +i, 0, 100), o = this.props_.get("invertsY") ? 100 - r : r;
    this.lineElem_.setAttributeNS(null, "x2", `${s}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${s}%`, this.markerElem_.style.top = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
};
function yl(n, e, t) {
  return [N(e[0], fe(n)), N(e[1], Pt(n)) * (t ? 1 : -1)];
}
let Z_ = class {
  constructor(e, t) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new W_(e, { layout: t.layout, props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ue(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = this.props.get("max"), s = h(e.point.x, 0, e.bounds.width, -i, +i), r = h(this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -i, +i);
    this.value.setRawValue(new st(s, r), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onPadKeyDown_(e) {
    gi(e.key) && e.preventDefault();
    const [t, i] = yl(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(new st(this.value.rawValue.x + t, this.value.rawValue.y + i), { forceEmit: false, last: false });
  }
  onPadKeyUp_(e) {
    const [t, i] = yl(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}, J_ = class {
  constructor(e, t) {
    var i, s;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Oi.create(t.expanded), this.popC_ = t.pickerLayout === "popup" ? new Nr(e, { viewProps: this.viewProps }) : null;
    const r = new Z_(e, { layout: t.pickerLayout, props: new d({ invertsY: M(t.invertsY), max: M(t.max), xKeyScale: t.axes[0].textProps.value("keyScale"), yKeyScale: t.axes[1].textProps.value("keyScale") }), value: this.value, viewProps: this.viewProps });
    r.view.allFocusableElements.forEach((o) => {
      o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = r, this.textC_ = new rn(e, { assembly: ep, axes: t.axes, parser: t.parser, value: this.value, viewProps: this.viewProps }), this.view = new X_(e, { expanded: this.foldable_.value("expanded"), pickerLayout: t.pickerLayout, viewProps: this.viewProps }), this.view.textElement.appendChild(this.textC_.view.element), (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_), (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), Mt({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (o) => o, backward: (o, l) => l })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Di(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Ar(e);
    i && t.contains(i) || i && i === this.view.buttonElement && !Mi(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
  }
};
function Q_(n) {
  return st.isObject(n) ? new st(n.x, n.y) : new st();
}
function ef(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y);
}
function tf(n, e) {
  return new Ii({ assembly: ep, components: [De(Object.assign(Object.assign({}, n), n.x), e.x), De(Object.assign(Object.assign({}, n), n.y), e.y)] });
}
function El(n, e) {
  var t, i;
  if (!E(n.min) || !E(n.max)) return Math.max(Math.abs((t = n.min) !== null && t !== void 0 ? t : 0), Math.abs((i = n.max) !== null && i !== void 0 ? i : 0));
  const s = _u(n);
  return Math.max(Math.abs(s) * 10, Math.abs(e) * 10);
}
function nf(n, e) {
  var t, i;
  const s = El(gt(n, (t = n.x) !== null && t !== void 0 ? t : {}), e.x), r = El(gt(n, (i = n.y) !== null && i !== void 0 ? i : {}), e.y);
  return Math.max(s, r);
}
function sf(n) {
  if (!("y" in n)) return false;
  const e = n.y;
  return e && "inverted" in e ? !!e.inverted : false;
}
T({ id: "input-point2d", type: "input", accept: (n, e) => {
  if (!st.isObject(n)) return null;
  const t = A(e, (i) => Object.assign(Object.assign({}, Tn(i)), { expanded: i.optional.boolean, picker: i.optional.custom(Mu), readonly: i.optional.constant(false), x: i.optional.custom(tt), y: i.optional.object(Object.assign(Object.assign({}, Tn(i)), { inverted: i.optional.boolean })) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: () => Q_, constraint: (n) => tf(n.params, n.initialValue), equals: st.equals, writer: () => ef }, controller: (n) => {
  var e, t;
  const i = n.document, s = n.value, r = n.constraint, o = [n.params.x, n.params.y];
  return new J_(i, { axes: s.rawValue.getComponents().map((l, a) => {
    var u;
    return Sr({ constraint: r.components[a], initialValue: l, params: gt(n.params, (u = o[a]) !== null && u !== void 0 ? u : {}) });
  }), expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, invertsY: sf(n.params), max: nf(n.params, s.rawValue), parser: _e, pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", value: s, viewProps: n.viewProps });
} });
let zt = class {
  constructor(e = 0, t = 0, i = 0) {
    this.x = e, this.y = t, this.z = i;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(e) {
    if (E(e)) return false;
    const t = e.x, i = e.y, s = e.z;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
};
const tp = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new zt(...n) };
function rf(n) {
  return zt.isObject(n) ? new zt(n.x, n.y, n.z) : new zt();
}
function of(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z);
}
function lf(n, e) {
  return new Ii({ assembly: tp, components: [De(Object.assign(Object.assign({}, n), n.x), e.x), De(Object.assign(Object.assign({}, n), n.y), e.y), De(Object.assign(Object.assign({}, n), n.z), e.z)] });
}
T({ id: "input-point3d", type: "input", accept: (n, e) => {
  if (!zt.isObject(n)) return null;
  const t = A(e, (i) => Object.assign(Object.assign({}, Tn(i)), { readonly: i.optional.constant(false), x: i.optional.custom(tt), y: i.optional.custom(tt), z: i.optional.custom(tt) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => rf, constraint: (n) => lf(n.params, n.initialValue), equals: zt.equals, writer: (n) => of }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z];
  return new rn(n.document, { assembly: tp, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return Sr({ constraint: t.components[r], initialValue: s, params: gt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: _e, value: e, viewProps: n.viewProps });
} });
let Ht = class {
  constructor(e = 0, t = 0, i = 0, s = 0) {
    this.x = e, this.y = t, this.z = i, this.w = s;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(e) {
    if (E(e)) return false;
    const t = e.x, i = e.y, s = e.z, r = e.w;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number" || typeof r != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
};
const np = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new Ht(...n) };
function af(n) {
  return Ht.isObject(n) ? new Ht(n.x, n.y, n.z, n.w) : new Ht();
}
function uf(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z), n.writeProperty("w", e.w);
}
function pf(n, e) {
  return new Ii({ assembly: np, components: [De(Object.assign(Object.assign({}, n), n.x), e.x), De(Object.assign(Object.assign({}, n), n.y), e.y), De(Object.assign(Object.assign({}, n), n.z), e.z), De(Object.assign(Object.assign({}, n), n.w), e.w)] });
}
T({ id: "input-point4d", type: "input", accept: (n, e) => {
  if (!Ht.isObject(n)) return null;
  const t = A(e, (i) => Object.assign(Object.assign({}, Tn(i)), { readonly: i.optional.constant(false), w: i.optional.custom(tt), x: i.optional.custom(tt), y: i.optional.custom(tt), z: i.optional.custom(tt) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => af, constraint: (n) => pf(n.params, n.initialValue), equals: Ht.equals, writer: (n) => uf }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z, n.params.w];
  return new rn(n.document, { assembly: np, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return Sr({ constraint: t.components[r], initialValue: s, params: gt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: _e, value: e, viewProps: n.viewProps });
} });
function cf(n) {
  const e = [], t = Br(n.options);
  return t && e.push(t), new sn(e);
}
T({ id: "input-string", type: "input", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = A(e, (i) => ({ readonly: i.optional.constant(false), options: i.optional.custom(ji) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Fr, constraint: (n) => cf(n.params), writer: (n) => ut }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && An(i, Ri);
  return s ? new Xt(e, { props: new d({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new Bi(e, { parser: (r) => r, props: d.fromObject({ formatter: Rs }), value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof Xt ? new jr(n.controller) : null;
} });
const Jn = { monitor: { defaultInterval: 200, defaultRows: 3 } }, kl = m("mll");
let hf = class {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(kl()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("textarea");
    i.classList.add(kl("i")), i.style.height = `calc(var(${Su("containerUnitSize")}) * ${t.rows})`, i.readOnly = true, t.viewProps.bindDisabled(i), this.element.appendChild(i), this.textareaElem_ = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.textareaElem_, t = e.scrollTop === e.scrollHeight - e.clientHeight, i = [];
    this.value.rawValue.forEach((s) => {
      s !== void 0 && i.push(this.formatter_(s));
    }), e.textContent = i.join(`
`), t && (e.scrollTop = e.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}, Xr = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new hf(e, { formatter: t.formatter, rows: t.rows, value: this.value, viewProps: this.viewProps });
  }
};
const Vl = m("sgl");
let df = class {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(Vl()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(Vl("i")), i.readOnly = true, i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e[e.length - 1];
    this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
}, Wr = class {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new df(e, { formatter: t.formatter, value: this.value, viewProps: this.viewProps });
  }
};
T({ id: "monitor-bool", type: "monitor", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = A(e, (i) => ({ readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Ir }, controller: (n) => {
  var e;
  return n.value.rawValue.length === 1 ? new Wr(n.document, { formatter: _l, value: n.value, viewProps: n.viewProps }) : new Xr(n.document, { formatter: _l, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Jn.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
} });
let mf = class extends Lr {
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.props.set("min", e);
  }
};
const Xe = m("grl");
let vf = class {
  constructor(e, t) {
    this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Xe()), t.viewProps.bindClassModifiers(this.element), this.formatter_ = t.formatter, this.props_ = t.props, this.cursor_ = t.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
    const i = e.createElementNS(B, "svg");
    i.classList.add(Xe("g")), i.style.height = `calc(var(${Su("containerUnitSize")}) * ${t.rows})`, this.element.appendChild(i), this.svgElem_ = i;
    const s = e.createElementNS(B, "polyline");
    this.svgElem_.appendChild(s), this.lineElem_ = s;
    const r = e.createElement("div");
    r.classList.add(Xe("t"), m("tt")()), this.element.appendChild(r), this.tooltipElem_ = r, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const e = this.svgElem_.getBoundingClientRect(), t = this.value.rawValue.length - 1, i = this.props_.get("min"), s = this.props_.get("max"), r = [];
    this.value.rawValue.forEach((p, c) => {
      if (p === void 0) return;
      const L = h(c, 0, t, 0, e.width), be = h(p, i, s, e.height, 0);
      r.push([L, be].join(","));
    }), this.lineElem_.setAttributeNS(null, "points", r.join(" "));
    const o = this.tooltipElem_, l = this.value.rawValue[this.cursor_.rawValue];
    if (l === void 0) {
      o.classList.remove(Xe("t", "a"));
      return;
    }
    const a = h(this.cursor_.rawValue, 0, t, 0, e.width), u = h(l, i, s, e.height, 0);
    o.style.left = `${a}px`, o.style.top = `${u}px`, o.textContent = `${this.formatter_(l)}`, o.classList.contains(Xe("t", "a")) || (o.classList.add(Xe("t", "a"), Xe("t", "in")), wi(o), o.classList.remove(Xe("t", "in")));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}, Zr = class {
  constructor(e, t) {
    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.cursor_ = M(-1), this.view = new vf(e, { cursor: this.cursor_, formatter: t.formatter, rows: t.rows, props: this.props, value: this.value, viewProps: this.viewProps }), !Mi(e)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    else {
      const i = new Ue(this.view.element);
      i.emitter.on("down", this.onGraphPointerDown_), i.emitter.on("move", this.onGraphPointerMove_), i.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(e) {
    return ge(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => (this.props.set("max", t.max), this.props.set("min", t.min), true));
  }
  exportProps() {
    return Ce(null, { max: this.props.get("max"), min: this.props.get("min") });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(e) {
    const t = this.view.element.getBoundingClientRect();
    this.cursor_.rawValue = Math.floor(h(e.offsetX, 0, t.width, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(e) {
    this.onGraphPointerMove_(e);
  }
  onGraphPointerMove_(e) {
    if (!e.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(h(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
};
function js(n) {
  return E(n.format) ? F(2) : n.format;
}
function bf(n) {
  var e;
  return n.value.rawValue.length === 1 ? new Wr(n.document, { formatter: js(n.params), value: n.value, viewProps: n.viewProps }) : new Xr(n.document, { formatter: js(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Jn.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
}
function wf(n) {
  var e, t, i;
  return new Zr(n.document, { formatter: js(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Jn.monitor.defaultRows, props: d.fromObject({ max: (t = n.params.max) !== null && t !== void 0 ? t : 100, min: (i = n.params.min) !== null && i !== void 0 ? i : 0 }), value: n.value, viewProps: n.viewProps });
}
function $l(n) {
  return n.view === "graph";
}
T({ id: "monitor-number", type: "monitor", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = A(e, (i) => ({ format: i.optional.function, max: i.optional.number, min: i.optional.number, readonly: i.required.constant(true), rows: i.optional.number, view: i.optional.string }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { defaultBufferSize: (n) => $l(n) ? 64 : 1, reader: (n) => yr }, controller: (n) => $l(n.params) ? wf(n) : bf(n), api: (n) => n.controller.valueController instanceof Zr ? new mf(n.controller) : null });
T({ id: "monitor-string", type: "monitor", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = A(e, (i) => ({ multiline: i.optional.boolean, readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Fr }, controller: (n) => {
  var e;
  const t = n.value;
  return t.rawValue.length > 1 || n.params.multiline ? new Xr(n.document, { formatter: Rs, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Jn.monitor.defaultRows, value: t, viewProps: n.viewProps }) : new Wr(n.document, { formatter: Rs, value: t, viewProps: n.viewProps });
} });
class ip {
  constructor(e) {
    this.controller_ = e;
  }
  get disabled() {
    return this.controller_.viewProps.get("disabled");
  }
  set disabled(e) {
    this.controller_.viewProps.set("disabled", e);
  }
  get title() {
    var e;
    return (e = this.controller_.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller_.props.set("title", e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller_.emitter.on(e, () => {
      i(new Lt(this));
    }), this;
  }
}
class _f extends Lt {
  constructor(e, t, i) {
    super(e), this.cell = t, this.index = i;
  }
}
class sp extends St {
  constructor(e) {
    super(e), this.cellToApiMap_ = /* @__PURE__ */ new Map(), this.emitter_ = new H();
    const t = this.controller.valueController;
    t.cellControllers.forEach((i, s) => {
      const r = new ip(i);
      this.cellToApiMap_.set(i, r), i.emitter.on("click", () => {
        const o = s % t.size[0], l = Math.floor(s / t.size[0]);
        this.emitter_.emit("click", { event: new _f(this, r, [o, l]) });
      });
    });
  }
  cell(e, t) {
    const i = this.controller.valueController, s = i.cellControllers[t * i.size[0] + e];
    return this.cellToApiMap_.get(s);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s.event);
    }), this;
  }
}
class rp {
  constructor(e, t) {
    this.size = t.size;
    const [i, s] = this.size, r = [];
    for (let o = 0; o < s; o++) for (let l = 0; l < i; l++) {
      const a = new xu(e, { props: d.fromObject(Object.assign({}, t.cellConfig(l, o))), viewProps: Ct.create() });
      r.push(a);
    }
    this.cellCs_ = r, this.viewProps = Ct.create(), this.viewProps.handleDispose(() => {
      this.cellCs_.forEach((o) => {
        o.viewProps.set("disposed", true);
      });
    }), this.view = new Lu(e, { viewProps: this.viewProps, viewName: "btngrid" }), this.view.element.style.gridTemplateColumns = `repeat(${i}, 1fr)`, this.cellCs_.forEach((o) => {
      this.view.element.appendChild(o.view.element);
    });
  }
  get cellControllers() {
    return this.cellCs_;
  }
}
class Sl extends Xn {
  constructor(e, t) {
    const i = t.valueController, s = new Ti(e, { blade: t.blade, props: t.labelProps, valueController: i });
    super({ blade: t.blade, view: s.view, viewProps: i.viewProps }), this.valueController = i, this.labelController = s;
  }
}
const ff = T({ id: "buttongrid", type: "blade", accept(n) {
  const e = A(n, (t) => ({ cells: t.required.function, size: t.required.array(t.required.number), view: t.required.constant("buttongrid"), label: t.optional.string }));
  return e ? { params: e } : null;
}, controller(n) {
  return new Sl(n.document, { blade: n.blade, labelProps: d.fromObject({ label: n.params.label }), valueController: new rp(n.document, { cellConfig: n.params.cells, size: n.params.size }) });
}, api(n) {
  return n.controller instanceof Sl ? new sp(n.controller) : null;
} });
class op extends St {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get value() {
    return this.controller.valueController.value.rawValue;
  }
  set value(e) {
    this.controller.valueController.value.rawValue = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller.valueController.value.emitter.on(e, (s) => {
      i(new Li(this, s.rawValue, s.options.last));
    }), this;
  }
}
function ue(n, e, t) {
  return n * (1 - t) + e * t;
}
const gf = 20, Cf = 1e-3, ds = 100;
function Pf(n, e) {
  let t = 0.25, i = 0.5, s = -1;
  for (let r = 0; r < gf; r++) {
    const [o, l] = n.curve(i);
    if (i += t * (o < e ? 1 : -1), s = l, t *= 0.5, Math.abs(e - o) < Cf) break;
  }
  return s;
}
class lt {
  constructor(e = 0, t = 0, i = 1, s = 1) {
    this.cache_ = [], this.comps_ = [e, t, i, s];
  }
  get x1() {
    return this.comps_[0];
  }
  get y1() {
    return this.comps_[1];
  }
  get x2() {
    return this.comps_[2];
  }
  get y2() {
    return this.comps_[3];
  }
  static isObject(e) {
    return E(e) || !Array.isArray(e) ? false : typeof e[0] == "number" && typeof e[1] == "number" && typeof e[2] == "number" && typeof e[3] == "number";
  }
  static equals(e, t) {
    return e.x1 === t.x1 && e.y1 === t.y1 && e.x2 === t.x2 && e.y2 === t.y2;
  }
  curve(e) {
    const t = ue(0, this.x1, e), i = ue(0, this.y1, e), s = ue(this.x1, this.x2, e), r = ue(this.y1, this.y2, e), o = ue(this.x2, 1, e), l = ue(this.y2, 1, e), a = ue(t, s, e), u = ue(i, r, e), p = ue(s, o, e), c = ue(r, l, e);
    return [ue(a, p, e), ue(u, c, e)];
  }
  y(e) {
    if (this.cache_.length === 0) {
      const t = [];
      for (let i = 0; i < ds; i++) t.push(Pf(this, h(i, 0, ds - 1, 0, 1)));
      this.cache_ = t;
    }
    return this.cache_[Math.round(h(V(e, 0, 1), 0, 1, 0, ds - 1))];
  }
  toObject() {
    return [this.comps_[0], this.comps_[1], this.comps_[2], this.comps_[3]];
  }
}
const Jr = { toComponents: (n) => n.toObject(), fromComponents: (n) => new lt(...n) };
function xf(n) {
  const e = F(2);
  return `cubic-bezier(${n.toObject().map((i) => e(i)).join(", ")})`;
}
const Ll = [0, 0.5, 0.5, 1];
function yf(n) {
  const e = n.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);
  if (!e) return new lt(...Ll);
  const t = [e[1], e[2], e[3], e[4]].reduce((i, s) => {
    if (!i) return null;
    const r = Number(s);
    return isNaN(r) ? null : [...i, r];
  }, []);
  return new lt(...t ?? Ll);
}
const dt = m("cbz");
class lp {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(dt()), t.viewProps.bindClassModifiers(this.element), t.foldable.bindExpandedClass(this.element, dt(void 0, "expanded")), ve(t.foldable, "completed", at(this.element, dt(void 0, "cpl")));
    const i = e.createElement("div");
    i.classList.add(dt("h")), this.element.appendChild(i);
    const s = e.createElement("button");
    s.classList.add(dt("b")), t.viewProps.bindDisabled(s);
    const r = e.createElementNS(B, "svg");
    r.innerHTML = '<path d="M2 13C8 13 8 3 14 3"/>', s.appendChild(r), i.appendChild(s), this.buttonElement = s;
    const o = e.createElement("div");
    if (o.classList.add(dt("t")), i.appendChild(o), this.textElement = o, t.pickerLayout === "inline") {
      const l = e.createElement("div");
      l.classList.add(dt("p")), this.element.appendChild(l), this.pickerElement = l;
    } else this.pickerElement = null;
  }
}
const ms = m("cbzp");
class ap {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ms()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(ms("g")), this.element.appendChild(i), this.graphElement = i;
    const s = e.createElement("div");
    s.classList.add(ms("t")), this.element.appendChild(s), this.textElement = s;
  }
}
function up(n, e) {
  const t = new MutationObserver((s) => {
    for (const r of s) r.type === "childList" && r.addedNodes.forEach((o) => {
      o.contains(o) && (e(), t.disconnect());
    });
  }), i = n.ownerDocument;
  t.observe(i.body, { attributes: true, childList: true, subtree: true });
}
const We = m("cbzg");
function Ef(n, e) {
  return (t) => e(n(t));
}
class pp {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(We()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(We("p")), this.element.appendChild(i), this.previewElement = i;
    const s = e.createElementNS(B, "svg");
    s.classList.add(We("g")), this.element.appendChild(s), this.svgElem_ = s;
    const r = e.createElementNS(B, "path");
    r.classList.add(We("u")), this.svgElem_.appendChild(r), this.guideElem_ = r;
    const o = e.createElementNS(B, "polyline");
    o.classList.add(We("l")), this.svgElem_.appendChild(o), this.lineElem_ = o, this.handleElems_ = [e.createElement("div"), e.createElement("div")], this.handleElems_.forEach((l) => {
      l.classList.add(We("h")), this.element.appendChild(l);
    }), this.vectorElems_ = [e.createElementNS(B, "line"), e.createElementNS(B, "line")], this.vectorElems_.forEach((l) => {
      l.classList.add(We("v")), this.svgElem_.appendChild(l);
    }), this.value_ = t.value, this.value_.emitter.on("change", this.onValueChange_.bind(this)), this.sel_ = t.selection, this.handleElems_.forEach((l, a) => {
      me(this.sel_, Ef((u) => u === a, at(l, We("h", "sel"))));
    }), up(this.element, () => {
      this.refresh();
    });
  }
  getVertMargin_(e) {
    return e * 0.25;
  }
  valueToPosition(e, t) {
    const { clientWidth: i, clientHeight: s } = this.element, r = this.getVertMargin_(s);
    return { x: h(e, 0, 1, 0, i), y: h(t, 0, 1, s - r, r) };
  }
  positionToValue(e, t) {
    const i = this.element.getBoundingClientRect(), s = i.width, r = i.height, o = this.getVertMargin_(r);
    return { x: V(h(e, 0, s, 0, 1), 0, 1), y: h(t, r - o, o, 0, 1) };
  }
  refresh() {
    this.guideElem_.setAttributeNS(null, "d", [0, 1].map((r) => {
      const o = this.valueToPosition(0, r), l = this.valueToPosition(1, r);
      return [`M ${o.x},${o.y}`, `L ${l.x},${l.y}`].join(" ");
    }).join(" "));
    const e = this.value_.rawValue, t = [];
    let i = 0;
    for (; ; ) {
      const r = this.valueToPosition(...e.curve(i));
      if (t.push([r.x, r.y].join(",")), i >= 1) break;
      i = Math.min(i + 0.05, 1);
    }
    this.lineElem_.setAttributeNS(null, "points", t.join(" "));
    const s = e.toObject();
    [0, 1].forEach((r) => {
      const o = this.valueToPosition(r, r), l = this.valueToPosition(s[r * 2], s[r * 2 + 1]), a = this.vectorElems_[r];
      a.setAttributeNS(null, "x1", String(o.x)), a.setAttributeNS(null, "y1", String(o.y)), a.setAttributeNS(null, "x2", String(l.x)), a.setAttributeNS(null, "y2", String(l.y));
      const u = this.handleElems_[r];
      u.style.left = `${l.x}px`, u.style.top = `${l.y}px`;
    });
  }
  onValueChange_() {
    this.refresh();
  }
}
const Ml = 24, Al = 400, Tl = 1e3, jt = m("cbzprv");
class cp {
  constructor(e, t) {
    this.stopped_ = true, this.startTime_ = -1, this.onDispose_ = this.onDispose_.bind(this), this.onTimer_ = this.onTimer_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(jt()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElementNS(B, "svg");
    i.classList.add(jt("g")), this.element.appendChild(i), this.svgElem_ = i;
    const s = e.createElementNS(B, "path");
    s.classList.add(jt("t")), this.svgElem_.appendChild(s), this.ticksElem_ = s;
    const r = e.createElement("div");
    r.classList.add(jt("m")), this.element.appendChild(r), this.markerElem_ = r, this.value_ = t.value, this.value_.emitter.on("change", this.onValueChange_), t.viewProps.handleDispose(this.onDispose_), up(this.element, () => {
      this.refresh();
    });
  }
  play() {
    this.stop(), this.updateMarker_(0), this.markerElem_.classList.add(jt("m", "a")), this.startTime_ = (/* @__PURE__ */ new Date()).getTime() + Al, this.stopped_ = false, requestAnimationFrame(this.onTimer_);
  }
  stop() {
    this.stopped_ = true, this.markerElem_.classList.remove(jt("m", "a"));
  }
  onDispose_() {
    this.stop();
  }
  updateMarker_(e) {
    const t = this.value_.rawValue.y(V(e, 0, 1));
    this.markerElem_.style.left = `${t * 100}%`;
  }
  refresh() {
    const { clientWidth: e, clientHeight: t } = this.svgElem_, i = [], s = this.value_.rawValue;
    for (let r = 0; r < Ml; r++) {
      const o = h(r, 0, Ml - 1, 0, 1), l = h(s.y(o), 0, 1, 0, e);
      i.push(`M ${l},0 v${t}`);
    }
    this.ticksElem_.setAttributeNS(null, "d", i.join(" "));
  }
  onTimer_() {
    if (this.startTime_ === null) return;
    const e = (/* @__PURE__ */ new Date()).getTime() - this.startTime_, t = e / Tl;
    this.updateMarker_(t), e > Tl + Al && this.stop(), this.stopped_ || requestAnimationFrame(this.onTimer_);
  }
  onValueChange_() {
    this.refresh(), this.play();
  }
}
function Bs(n, e, t, i) {
  const s = t - n, r = i - e;
  return Math.sqrt(s * s + r * r);
}
function kf(n, e, t, i) {
  const s = Bs(n, e, t, i), r = Math.atan2(i - e, t - n), o = Math.round(r / (Math.PI / 4)) * Math.PI / 4;
  return { x: n + Math.cos(o) * s, y: e + Math.sin(o) * s };
}
class hp {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.keyScale_ = t.keyScale, this.value = t.value, this.sel_ = M(0), this.viewProps = t.viewProps, this.view = new pp(e, { selection: this.sel_, value: this.value, viewProps: this.viewProps }), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_), this.prevView_ = new cp(e, { value: this.value, viewProps: this.viewProps }), this.prevView_.element.addEventListener("mousedown", (s) => {
      s.stopImmediatePropagation(), s.preventDefault(), this.prevView_.play();
    }), this.view.previewElement.appendChild(this.prevView_.element);
    const i = new Ue(this.view.element);
    i.emitter.on("down", this.onPointerDown_), i.emitter.on("move", this.onPointerMove_), i.emitter.on("up", this.onPointerUp_);
  }
  refresh() {
    this.view.refresh(), this.prevView_.refresh(), this.prevView_.play();
  }
  updateValue_(e, t, i) {
    const s = this.sel_.rawValue, r = this.value.rawValue.toObject(), o = this.view.positionToValue(e.x, e.y), l = t ? kf(s, s, o.x, o.y) : o;
    r[s * 2] = l.x, r[s * 2 + 1] = l.y, this.value.setRawValue(new lt(...r), i);
  }
  onPointerDown_(e) {
    const t = e.data;
    if (!t.point) return;
    const i = this.value.rawValue, s = this.view.valueToPosition(i.x1, i.y1), r = Bs(t.point.x, t.point.y, s.x, s.y), o = this.view.valueToPosition(i.x2, i.y2), l = Bs(t.point.x, t.point.y, o.x, o.y);
    this.sel_.rawValue = r <= l ? 0 : 1, this.updateValue_(t.point, e.shiftKey, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    const t = e.data;
    t.point && this.updateValue_(t.point, e.shiftKey, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    const t = e.data;
    t.point && this.updateValue_(t.point, e.shiftKey, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    gi(e.key) && e.preventDefault();
    const t = this.sel_.rawValue, i = this.value.rawValue.toObject(), s = this.keyScale_.rawValue;
    i[t * 2] += N(s, fe(e)), i[t * 2 + 1] += N(s, Pt(e)), this.value.setRawValue(new lt(...i), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    gi(e.key) && e.preventDefault();
    const t = this.keyScale_.rawValue, i = N(t, fe(e)), s = N(t, Pt(e));
    i === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class dp {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new ap(e, { viewProps: this.viewProps }), this.gc_ = new hp(e, { keyScale: t.axis.textProps.value("keyScale"), value: this.value, viewProps: this.viewProps }), this.view.graphElement.appendChild(this.gc_.view.element);
    const i = Object.assign(Object.assign({}, t.axis), { constraint: new Cr({ max: 1, min: 0 }) }), s = Object.assign(Object.assign({}, t.axis), { constraint: void 0 });
    this.tc_ = new rn(e, { assembly: Jr, axes: [i, s, i, s], parser: _e, value: this.value, viewProps: this.viewProps }), this.view.textElement.appendChild(this.tc_.view.element);
  }
  get allFocusableElements() {
    return [this.gc_.view.element, ...this.tc_.view.textViews.map((e) => e.inputElement)];
  }
  refresh() {
    this.gc_.refresh();
  }
}
class Ns {
  constructor(e, t) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Oi.create(t.expanded), this.view = new lp(e, { foldable: this.foldable_, pickerLayout: t.pickerLayout, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("blur", this.onButtonBlur_), this.view.buttonElement.addEventListener("click", this.onButtonClick_), this.tc_ = new Bi(e, { parser: yf, props: d.fromObject({ formatter: xf }), value: this.value, viewProps: this.viewProps }), this.view.textElement.appendChild(this.tc_.view.element), this.popC_ = t.pickerLayout === "popup" ? new Nr(e, { viewProps: this.viewProps }) : null;
    const i = new dp(e, { axis: t.axis, value: this.value, viewProps: this.viewProps });
    i.allFocusableElements.forEach((s) => {
      s.addEventListener("blur", this.onPopupChildBlur_), s.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = i, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), me(this.popC_.shows, (s) => {
      s && i.refresh();
    }), Mt({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (s) => s, backward: (s, r) => r })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Di(this.foldable_, this.view.pickerElement));
  }
  onButtonBlur_(e) {
    if (!this.popC_) return;
    const t = e.relatedTarget;
    (!t || !this.popC_.view.element.contains(t)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Ar(e);
    i && t.contains(i) || i && i === this.view.buttonElement && !Mi(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ && e.key === "Escape" && (this.popC_.shows.rawValue = false);
  }
}
function Vf() {
  return new Ii({ assembly: Jr, components: [0, 1, 2, 3].map((n) => n % 2 === 0 ? new Cr({ min: 0, max: 1 }) : void 0) });
}
const $f = T({ id: "cubicbezier", type: "blade", accept(n) {
  const e = A(n, (t) => ({ value: t.required.array(t.required.number), view: t.required.constant("cubicbezier"), expanded: t.optional.boolean, label: t.optional.string, picker: t.optional.custom((i) => i === "inline" || i === "popup" ? i : void 0) }));
  return e ? { params: e } : null;
}, controller(n) {
  var e, t;
  const i = new lt(...n.params.value), s = M(i, { constraint: Vf(), equals: lt.equals }), r = new Ns(n.document, { axis: { textProps: d.fromObject({ keyScale: 0.1, pointerScale: 0.01, formatter: F(2) }) }, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", value: s, viewProps: n.viewProps });
  return new _i(n.document, { blade: n.blade, props: d.fromObject({ label: n.params.label }), value: s, valueController: r });
}, api(n) {
  return !(n.controller instanceof _i) || !(n.controller.valueController instanceof Ns) ? null : new op(n.controller);
} });
class mp extends St {
  get fps() {
    return this.controller.valueController.fps;
  }
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.props.set("min", e);
  }
  begin() {
    this.controller.valueController.begin();
  }
  end() {
    this.controller.valueController.end();
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller.valueController.ticker.emitter.on(e, () => {
      i(new Lt(this));
    }), this;
  }
}
const Ol = 20;
class vp {
  constructor() {
    this.start_ = null, this.duration_ = 0, this.fps_ = null, this.frameCount_ = 0, this.timestamps_ = [];
  }
  get duration() {
    return this.duration_;
  }
  get fps() {
    return this.fps_;
  }
  begin(e) {
    this.start_ = e.getTime();
  }
  calculateFps_(e) {
    if (this.timestamps_.length === 0) return null;
    const t = this.timestamps_[0];
    return 1e3 * (this.frameCount_ - t.frameCount) / (e - t.time);
  }
  compactTimestamps_() {
    if (this.timestamps_.length <= Ol) return;
    const e = this.timestamps_.length - Ol;
    this.timestamps_.splice(0, e);
    const t = this.timestamps_[0].frameCount;
    this.timestamps_.forEach((i) => {
      i.frameCount -= t;
    }), this.frameCount_ -= t;
  }
  end(e) {
    if (this.start_ === null) return;
    const t = e.getTime();
    this.duration_ = t - this.start_, this.start_ = null, this.fps_ = this.calculateFps_(t), this.timestamps_.push({ frameCount: this.frameCount_, time: t }), ++this.frameCount_, this.compactTimestamps_();
  }
}
const _n = m("fps");
class bp {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(_n()), t.viewProps.bindClassModifiers(this.element), this.graphElement = e.createElement("div"), this.graphElement.classList.add(_n("g")), this.element.appendChild(this.graphElement);
    const i = e.createElement("div");
    i.classList.add(_n("l")), this.element.appendChild(i);
    const s = e.createElement("span");
    s.classList.add(_n("v")), s.textContent = "--", i.appendChild(s), this.valueElement = s;
    const r = e.createElement("span");
    r.classList.add(_n("u")), r.textContent = "FPS", i.appendChild(r);
  }
}
class wp {
  constructor(e, t) {
    this.stopwatch_ = new vp(), this.onTick_ = this.onTick_.bind(this), this.ticker = t.ticker, this.ticker.emitter.on("tick", this.onTick_), this.props = t.props, this.value_ = t.value, this.viewProps = t.viewProps, this.view = new bp(e, { viewProps: this.viewProps }), this.graphC_ = new Zr(e, { formatter: F(0), props: this.props, rows: t.rows, value: this.value_, viewProps: this.viewProps }), this.view.graphElement.appendChild(this.graphC_.view.element), this.viewProps.handleDispose(() => {
      this.graphC_.viewProps.set("disposed", true), this.ticker.dispose();
    });
  }
  get fps() {
    return this.stopwatch_.fps;
  }
  begin() {
    this.stopwatch_.begin(/* @__PURE__ */ new Date());
  }
  end() {
    this.stopwatch_.end(/* @__PURE__ */ new Date());
  }
  onTick_() {
    const e = this.fps;
    if (e !== null) {
      const t = this.value_.rawValue;
      this.value_.rawValue = Bb(t, e), this.view.valueElement.textContent = e.toFixed(0);
    }
  }
}
class Dl extends Xn {
  constructor(e, t) {
    const i = t.valueController, s = new Ti(e, { blade: t.blade, props: t.labelProps, valueController: i });
    super({ blade: t.blade, view: s.view, viewProps: i.viewProps }), this.valueController = i, this.labelController = s;
  }
}
function Sf(n, e) {
  return e === 0 ? new cw() : new hw(n, e ?? Jn.monitor.defaultInterval);
}
const Lf = T({ id: "fpsgraph", type: "blade", accept(n) {
  const e = A(n, (t) => ({ view: t.required.constant("fpsgraph"), interval: t.optional.number, label: t.optional.string, rows: t.optional.number, max: t.optional.number, min: t.optional.number }));
  return e ? { params: e } : null;
}, controller(n) {
  var e, t, i, s;
  const r = (e = n.params.interval) !== null && e !== void 0 ? e : 500;
  return new Dl(n.document, { blade: n.blade, labelProps: d.fromObject({ label: n.params.label }), valueController: new wp(n.document, { props: d.fromObject({ max: (t = n.params.max) !== null && t !== void 0 ? t : 90, min: (i = n.params.min) !== null && i !== void 0 ? i : 0 }), rows: (s = n.params.rows) !== null && s !== void 0 ? s : 2, ticker: Sf(n.document, r), value: M(Rb(80)), viewProps: n.viewProps }) });
}, api(n) {
  return n.controller instanceof Dl ? new mp(n.controller) : null;
} });
class ie {
  constructor(e, t) {
    this.min = e, this.max = t;
  }
  static isObject(e) {
    if (typeof e != "object" || e === null) return false;
    const t = e.min, i = e.max;
    return !(typeof t != "number" || typeof i != "number");
  }
  static equals(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  get length() {
    return this.max - this.min;
  }
  toObject() {
    return { min: this.min, max: this.max };
  }
}
const Qr = { fromComponents: (n) => new ie(n[0], n[1]), toComponents: (n) => [n.min, n.max] };
class eo {
  constructor(e) {
    this.edge = e;
  }
  constrain(e) {
    var t, i, s, r, o, l, a, u;
    if (e.min <= e.max) return new ie((i = (t = this.edge) === null || t === void 0 ? void 0 : t.constrain(e.min)) !== null && i !== void 0 ? i : e.min, (r = (s = this.edge) === null || s === void 0 ? void 0 : s.constrain(e.max)) !== null && r !== void 0 ? r : e.max);
    const p = (e.min + e.max) / 2;
    return new ie((l = (o = this.edge) === null || o === void 0 ? void 0 : o.constrain(p)) !== null && l !== void 0 ? l : p, (u = (a = this.edge) === null || a === void 0 ? void 0 : a.constrain(p)) !== null && u !== void 0 ? u : p);
  }
}
const vs = m("rsltxt");
class _p {
  constructor(e, t) {
    this.sliderView_ = t.sliderView, this.textView_ = t.textView, this.element = e.createElement("div"), this.element.classList.add(vs());
    const i = e.createElement("div");
    i.classList.add(vs("s")), i.appendChild(this.sliderView_.element), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(vs("t")), s.appendChild(this.textView_.element), this.element.appendChild(s);
  }
}
const mt = m("rsl");
class fp {
  constructor(e, t) {
    this.onSliderPropsChange_ = this.onSliderPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.sliderProps_ = t.sliderProps, this.sliderProps_.emitter.on("change", this.onSliderPropsChange_), this.element = e.createElement("div"), this.element.classList.add(mt()), t.viewProps.bindClassModifiers(this.element), this.value_ = t.value, this.value_.emitter.on("change", this.onValueChange_);
    const i = e.createElement("div");
    i.classList.add(mt("t")), this.element.appendChild(i), this.trackElement = i;
    const s = e.createElement("div");
    s.classList.add(mt("b")), i.appendChild(s), this.barElement = s;
    const r = ["min", "max"].map((o) => {
      const l = e.createElement("div");
      return l.classList.add(mt("k"), mt("k", o)), i.appendChild(l), l;
    });
    this.knobElements = [r[0], r[1]], this.update_();
  }
  valueToX_(e) {
    const t = this.sliderProps_.get("min"), i = this.sliderProps_.get("max");
    return V(h(e, t, i, 0, 1), 0, 1) * 100;
  }
  update_() {
    const e = this.value_.rawValue;
    e.length === 0 ? this.element.classList.add(mt(void 0, "zero")) : this.element.classList.remove(mt(void 0, "zero"));
    const t = [this.valueToX_(e.min), this.valueToX_(e.max)];
    this.barElement.style.left = `${t[0]}%`, this.barElement.style.right = `${100 - t[1]}%`, this.knobElements.forEach((i, s) => {
      i.style.left = `${t[s]}%`;
    });
  }
  onSliderPropsChange_() {
    this.update_();
  }
  onValueChange_() {
    this.update_();
  }
}
class gp {
  constructor(e, t) {
    this.grabbing_ = null, this.grabOffset_ = 0, this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.sliderProps = t.sliderProps, this.viewProps = t.viewProps, this.value = t.value, this.view = new fp(e, { sliderProps: this.sliderProps, value: this.value, viewProps: t.viewProps });
    const i = new Ue(this.view.trackElement);
    i.emitter.on("down", this.onPointerDown_), i.emitter.on("move", this.onPointerMove_), i.emitter.on("up", this.onPointerUp_);
  }
  ofs_() {
    return this.grabbing_ === "min" ? this.view.knobElements[0].getBoundingClientRect().width / 2 : this.grabbing_ === "max" ? -this.view.knobElements[1].getBoundingClientRect().width / 2 : 0;
  }
  valueFromData_(e) {
    if (!e.point) return null;
    const t = (e.point.x + this.ofs_()) / e.bounds.width, i = this.sliderProps.get("min"), s = this.sliderProps.get("max");
    return h(t, 0, 1, i, s);
  }
  onPointerDown_(e) {
    if (!e.data.point) return;
    const t = e.data.point.x / e.data.bounds.width, i = this.value.rawValue, s = this.sliderProps.get("min"), r = this.sliderProps.get("max"), o = h(i.min, s, r, 0, 1), l = h(i.max, s, r, 0, 1);
    Math.abs(l - t) <= 0.025 ? this.grabbing_ = "max" : Math.abs(o - t) <= 0.025 ? this.grabbing_ = "min" : t >= o && t <= l ? (this.grabbing_ = "length", this.grabOffset_ = h(t - o, 0, 1, 0, r - s)) : t < o ? (this.grabbing_ = "min", this.onPointerMove_(e)) : t > l && (this.grabbing_ = "max", this.onPointerMove_(e));
  }
  applyPointToValue_(e, t) {
    const i = this.valueFromData_(e);
    if (i === null) return;
    const s = this.sliderProps.get("min"), r = this.sliderProps.get("max");
    if (this.grabbing_ === "min") this.value.setRawValue(new ie(i, this.value.rawValue.max), t);
    else if (this.grabbing_ === "max") this.value.setRawValue(new ie(this.value.rawValue.min, i), t);
    else if (this.grabbing_ === "length") {
      const o = this.value.rawValue.length;
      let l = i - this.grabOffset_, a = l + o;
      l < s ? (l = s, a = s + o) : a > r && (l = r - o, a = r), this.value.setRawValue(new ie(l, a), t);
    }
  }
  onPointerMove_(e) {
    this.applyPointToValue_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.applyPointToValue_(e.data, { forceEmit: true, last: true }), this.grabbing_ = null;
  }
}
class Cp {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.sc_ = new gp(e, t);
    const i = { constraint: t.constraint, textProps: t.textProps };
    this.tc_ = new rn(e, { assembly: Qr, axes: [i, i], parser: t.parser, value: this.value, viewProps: t.viewProps }), this.view = new _p(e, { sliderView: this.sc_.view, textView: this.tc_.view });
  }
  get textController() {
    return this.tc_;
  }
}
function Mf(n) {
  return ie.isObject(n) ? new ie(n.min, n.max) : new ie(0, 0);
}
function Af(n, e) {
  n.writeProperty("max", e.max), n.writeProperty("min", e.min);
}
function Tf(n) {
  const e = [], t = kr(n);
  t && e.push(t);
  const i = Er(n);
  return i && e.push(i), new eo(new sn(e));
}
const Of = T({ id: "input-interval", type: "input", accept: (n, e) => {
  if (!ie.isObject(n)) return null;
  const t = A(e, (i) => Object.assign(Object.assign({}, $r(i)), { readonly: i.optional.constant(false) }));
  return t ? { initialValue: new ie(n.min, n.max), params: t } : null;
}, binding: { reader: (n) => Mf, constraint: (n) => Tf(n.params), equals: ie.equals, writer: (n) => Af }, controller(n) {
  const e = n.value, t = n.constraint;
  if (!(t instanceof eo)) throw Fe.shouldNeverHappen();
  const i = (e.rawValue.min + e.rawValue.max) / 2, s = d.fromObject(Vr(n.params, i)), r = t.edge && An(t.edge, Yn);
  if (r) return new Cp(n.document, { constraint: t.edge, parser: _e, sliderProps: new d({ keyScale: s.value("keyScale"), max: r.values.value("max"), min: r.values.value("min") }), textProps: s, value: e, viewProps: n.viewProps });
  const o = { constraint: t.edge, textProps: s };
  return new rn(n.document, { assembly: Qr, axes: [o, o], parser: _e, value: e, viewProps: n.viewProps });
} });
class Pp {
  constructor(e) {
    this.controller_ = e;
  }
  get disabled() {
    return this.controller_.viewProps.get("disabled");
  }
  set disabled(e) {
    this.controller_.viewProps.set("disabled", e);
  }
  get title() {
    var e;
    return (e = this.controller_.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller_.props.set("title", e);
  }
}
class xp extends Li {
  constructor(e, t, i, s, r) {
    super(e, s, r), this.cell = t, this.index = i;
  }
}
class yp extends St {
  constructor(e) {
    super(e), this.cellToApiMap_ = /* @__PURE__ */ new Map(), this.controller.valueController.cellControllers.forEach((i) => {
      const s = new Pp(i);
      this.cellToApiMap_.set(i, s);
    });
  }
  get value() {
    return this.controller.value;
  }
  cell(e, t) {
    const i = this.controller.valueController, s = i.cellControllers[t * i.size[0] + e];
    return this.cellToApiMap_.get(s);
  }
  on(e, t) {
    const i = t.bind(this);
    this.controller.value.emitter.on(e, (s) => {
      const r = this.controller.valueController, o = r.findCellByValue(s.rawValue);
      if (!o) return;
      const l = this.cellToApiMap_.get(o);
      if (!l) return;
      const a = r.cellControllers.indexOf(o);
      i(new xp(this, l, [a % r.size[0], Math.floor(a / r.size[0])], s.rawValue));
    });
  }
}
const fn = m("rad");
class Ep {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(fn()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("label");
    i.classList.add(fn("l")), this.element.appendChild(i);
    const s = e.createElement("input");
    s.classList.add(fn("i")), s.name = t.name, s.type = "radio", t.viewProps.bindDisabled(s), i.appendChild(s), this.inputElement = s;
    const r = e.createElement("div");
    r.classList.add(fn("b")), i.appendChild(r);
    const o = e.createElement("div");
    o.classList.add(fn("t")), r.appendChild(o), ve(t.props, "title", (l) => {
      o.textContent = l;
    });
  }
}
class kp {
  constructor(e, t) {
    this.props = t.props, this.viewProps = t.viewProps, this.view = new Ep(e, { name: t.name, props: this.props, viewProps: this.viewProps });
  }
}
class Ci {
  constructor(e, t) {
    this.cellCs_ = [], this.cellValues_ = [], this.onCellInputChange_ = this.onCellInputChange_.bind(this), this.size = t.size;
    const [i, s] = this.size;
    for (let r = 0; r < s; r++) for (let o = 0; o < i; o++) {
      const l = new kp(e, { name: t.groupName, props: d.fromObject(Object.assign({}, t.cellConfig(o, r))), viewProps: Ct.create() });
      this.cellCs_.push(l), this.cellValues_.push(t.cellConfig(o, r).value);
    }
    this.value = t.value, me(this.value, (r) => {
      const o = this.findCellByValue(r);
      o && (o.view.inputElement.checked = true);
    }), this.viewProps = Ct.create(), this.view = new Lu(e, { viewProps: this.viewProps, viewName: "radgrid" }), this.view.element.style.gridTemplateColumns = `repeat(${i}, 1fr)`, this.cellCs_.forEach((r) => {
      r.view.inputElement.addEventListener("change", this.onCellInputChange_), this.view.element.appendChild(r.view.element);
    });
  }
  get cellControllers() {
    return this.cellCs_;
  }
  findCellByValue(e) {
    const t = this.cellValues_.findIndex((i) => i === e);
    return t < 0 ? null : this.cellCs_[t];
  }
  onCellInputChange_(e) {
    const t = e.currentTarget, i = this.cellCs_.findIndex((s) => s.view.inputElement === t);
    i < 0 || (this.value.rawValue = this.cellValues_[i]);
  }
}
const Df = (function() {
  return T({ id: "radiogrid", type: "blade", accept(n) {
    const e = A(n, (t) => ({ cells: t.required.function, groupName: t.required.string, size: t.required.array(t.required.number), value: t.required.raw, view: t.required.constant("radiogrid"), label: t.optional.string }));
    return e ? { params: e } : null;
  }, controller(n) {
    const e = M(n.params.value);
    return new _i(n.document, { blade: n.blade, props: d.fromObject({ label: n.params.label }), value: e, valueController: new Ci(n.document, { groupName: n.params.groupName, cellConfig: n.params.cells, size: n.params.size, value: e }) });
  }, api(n) {
    return !(n.controller instanceof _i) || !(n.controller.valueController instanceof Ci) ? null : new yp(n.controller);
  } });
})();
function to(n) {
  return T({ id: "input-radiogrid", type: "input", accept(e, t) {
    if (!n.isType(e)) return null;
    const i = A(t, (s) => ({ cells: s.required.function, groupName: s.required.string, size: s.required.array(s.required.number), view: s.required.constant("radiogrid") }));
    return i ? { initialValue: e, params: i } : null;
  }, binding: n.binding, controller: (e) => new Ci(e.document, { cellConfig: e.params.cells, groupName: e.params.groupName, size: e.params.size, value: e.value }) });
}
const Rf = to({ isType: (n) => typeof n == "number", binding: { reader: (n) => yr, writer: (n) => ut } }), jf = to({ isType: (n) => typeof n == "string", binding: { reader: (n) => Fr, writer: (n) => ut } }), Bf = to({ isType: (n) => typeof n == "boolean", binding: { reader: (n) => Ir, writer: (n) => ut } }), Nf = "essentials", If = '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--cnt-usp);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1 * var(--cnt-hp));position:absolute;right:calc(-1 * var(--cnt-hp));top:var(--cnt-usz)}.tp-cbzpv_t{margin-top:var(--cnt-usp)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--cnt-usz) * 5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--cnt-usz));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--cnt-usz) - 8px);margin-top:calc((var(--cnt-usz) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}', Ff = [ff, $f, Lf, Of, Df, Bf, Rf, jf], ek = Object.freeze(Object.defineProperty({ __proto__: null, ButtonCellApi: ip, ButtonGridApi: sp, ButtonGridController: rp, CubicBezier: lt, CubicBezierApi: op, CubicBezierAssembly: Jr, CubicBezierController: Ns, CubicBezierGraphController: hp, CubicBezierGraphView: pp, CubicBezierPickerController: dp, CubicBezierPickerView: ap, CubicBezierPreviewView: cp, CubicBezierView: lp, FpsGraphBladeApi: mp, FpsGraphController: wp, FpsView: bp, Fpswatch: vp, Interval: ie, IntervalAssembly: Qr, IntervalConstraint: eo, RadioCellApi: Pp, RadioController: kp, RadioGridApi: yp, RadioGridController: Ci, RadioView: Ep, RangeSliderController: gp, RangeSliderTextController: Cp, RangeSliderTextView: _p, RangeSliderView: fp, TpRadioGridChangeEvent: xp, css: If, id: Nf, plugins: Ff }, Symbol.toStringTag, { value: "Module" }));
function $(n) {
  return n == null;
}
function no(n) {
  return n !== null && typeof n == "object";
}
function Is(n) {
  return n !== null && typeof n == "object";
}
function Kf(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] !== e[t]) return false;
  return true;
}
function yt(n, e) {
  return Array.from(/* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(e)])).reduce((i, s) => {
    const r = n[s], o = e[s];
    return Is(r) && Is(o) ? Object.assign(Object.assign({}, i), { [s]: yt(r, o) }) : Object.assign(Object.assign({}, i), { [s]: s in e ? o : r });
  }, {});
}
function Uf(n) {
  return no(n) ? "target" in n : false;
}
const zf = { alreadydisposed: () => "View has been already disposed", invalidparams: (n) => `Invalid parameters for '${n.name}'`, nomatchingcontroller: (n) => `No matching controller for '${n.key}'`, nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`, notbindable: () => "Value is not bindable", notcompatible: (n) => `Not compatible with  plugin '${n.id}'`, propertynotfound: (n) => `Property '${n.name}' not found`, shouldneverhappen: () => "This error should never happen" };
class te {
  static alreadyDisposed() {
    return new te({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new te({ type: "notbindable" });
  }
  static notCompatible(e, t) {
    return new te({ type: "notcompatible", context: { id: `${e}.${t}` } });
  }
  static propertyNotFound(e) {
    return new te({ type: "propertynotfound", context: { name: e } });
  }
  static shouldNeverHappen() {
    return new te({ type: "shouldneverhappen" });
  }
  constructor(e) {
    var t;
    this.message = (t = zf[e.type](e.context)) !== null && t !== void 0 ? t : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
  }
  toString() {
    return this.message;
  }
}
class Pi {
  constructor(e, t) {
    this.obj_ = e, this.key = t;
  }
  static isBindable(e) {
    return !(e === null || typeof e != "object" && typeof e != "function");
  }
  read() {
    return this.obj_[this.key];
  }
  write(e) {
    this.obj_[this.key] = e;
  }
  writeProperty(e, t) {
    const i = this.read();
    if (!Pi.isBindable(i)) throw te.notBindable();
    if (!(e in i)) throw te.propertyNotFound(e);
    i[e] = t;
  }
}
class oe {
  constructor() {
    this.observers_ = {};
  }
  on(e, t) {
    let i = this.observers_[e];
    return i || (i = this.observers_[e] = []), i.push({ handler: t }), this;
  }
  off(e, t) {
    const i = this.observers_[e];
    return i && (this.observers_[e] = i.filter((s) => s.handler !== t)), this;
  }
  emit(e, t) {
    const i = this.observers_[e];
    i && i.forEach((s) => {
      s.handler(t);
    });
  }
}
class Hf {
  constructor(e, t) {
    var i;
    this.constraint_ = t == null ? void 0 : t.constraint, this.equals_ = (i = t == null ? void 0 : t.equals) !== null && i !== void 0 ? i : ((s, r) => s === r), this.emitter = new oe(), this.rawValue_ = e;
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.constraint_ ? this.constraint_.constrain(e) : e, r = this.rawValue_;
    this.equals_(r, s) && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.rawValue_ = s, this.emitter.emit("change", { options: i, previousRawValue: r, rawValue: s, sender: this }));
  }
}
class qf {
  constructor(e) {
    this.emitter = new oe(), this.value_ = e;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(e) {
    this.setRawValue(e, { forceEmit: false, last: true });
  }
  setRawValue(e, t) {
    const i = t ?? { forceEmit: false, last: true }, s = this.value_;
    s === e && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.value_ = e, this.emitter.emit("change", { options: i, previousRawValue: s, rawValue: this.value_, sender: this }));
  }
}
class Gf {
  constructor(e) {
    this.emitter = new oe(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = e, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(e) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), { sender: this }));
  }
  onValueChange_(e) {
    this.emitter.emit("change", Object.assign(Object.assign({}, e), { sender: this }));
  }
}
function j(n, e) {
  const t = e == null ? void 0 : e.constraint, i = e == null ? void 0 : e.equals;
  return !t && !i ? new qf(n) : new Hf(n, e);
}
function Yf(n) {
  return [new Gf(n), (e, t) => {
    n.setRawValue(e, t);
  }];
}
class w {
  constructor(e) {
    this.emitter = new oe(), this.valMap_ = e;
    for (const t in this.valMap_) this.valMap_[t].emitter.on("change", () => {
      this.emitter.emit("change", { key: t, sender: this });
    });
  }
  static createCore(e) {
    return Object.keys(e).reduce((i, s) => Object.assign(i, { [s]: j(e[s]) }), {});
  }
  static fromObject(e) {
    const t = this.createCore(e);
    return new w(t);
  }
  get(e) {
    return this.valMap_[e].rawValue;
  }
  set(e, t) {
    this.valMap_[e].rawValue = t;
  }
  value(e) {
    return this.valMap_[e];
  }
}
class Fi {
  constructor(e) {
    this.values = w.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    return Math.min(Math.max(e, i), t);
  }
}
class Xf {
  constructor(e) {
    this.values = w.fromObject({ max: e.max, min: e.min });
  }
  constrain(e) {
    const t = this.values.get("max"), i = this.values.get("min");
    let s = e;
    return $(i) || (s = Math.max(s, i)), $(t) || (s = Math.min(s, t)), s;
  }
}
class Wf {
  constructor(e, t = 0) {
    this.step = e, this.origin = t;
  }
  constrain(e) {
    const t = this.origin % this.step, i = Math.round((e - t) / this.step);
    return t + i * this.step;
  }
}
class Zf {
  constructor(e) {
    this.text = e;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
}
const Jf = { "**": (n, e) => Math.pow(n, e), "*": (n, e) => n * e, "/": (n, e) => n / e, "%": (n, e) => n % e, "+": (n, e) => n + e, "-": (n, e) => n - e, "<<": (n, e) => n << e, ">>": (n, e) => n >> e, ">>>": (n, e) => n >>> e, "&": (n, e) => n & e, "^": (n, e) => n ^ e, "|": (n, e) => n | e };
class Qf {
  constructor(e, t, i) {
    this.left = t, this.operator = e, this.right = i;
  }
  evaluate() {
    const e = Jf[this.operator];
    if (!e) throw new Error(`unexpected binary operator: '${this.operator}`);
    return e(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ");
  }
}
const eg = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
class tg {
  constructor(e, t) {
    this.operator = e, this.expression = t;
  }
  evaluate() {
    const e = eg[this.operator];
    if (!e) throw new Error(`unexpected unary operator: '${this.operator}`);
    return e(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
}
function io(n) {
  return (e, t) => {
    for (let i = 0; i < n.length; i++) {
      const s = n[i](e, t);
      if (s !== "") return s;
    }
    return "";
  };
}
function On(n, e) {
  var t;
  const i = n.substr(e).match(/^\s+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function ng(n, e) {
  const t = n.substr(e, 1);
  return t.match(/^[1-9]$/) ? t : "";
}
function Dn(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function ig(n, e) {
  const t = Dn(n, e);
  if (t !== "") return t;
  const i = n.substr(e, 1);
  if (e += 1, i !== "-" && i !== "+") return "";
  const s = Dn(n, e);
  return s === "" ? "" : i + s;
}
function so(n, e) {
  const t = n.substr(e, 1);
  if (e += 1, t.toLowerCase() !== "e") return "";
  const i = ig(n, e);
  return i === "" ? "" : t + i;
}
function Vp(n, e) {
  const t = n.substr(e, 1);
  if (t === "0") return t;
  const i = ng(n, e);
  return e += i.length, i === "" ? "" : i + Dn(n, e);
}
function sg(n, e) {
  const t = Vp(n, e);
  if (e += t.length, t === "") return "";
  const i = n.substr(e, 1);
  if (e += i.length, i !== ".") return "";
  const s = Dn(n, e);
  return e += s.length, t + i + s + so(n, e);
}
function rg(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== ".") return "";
  const i = Dn(n, e);
  return e += i.length, i === "" ? "" : t + i + so(n, e);
}
function og(n, e) {
  const t = Vp(n, e);
  return e += t.length, t === "" ? "" : t + so(n, e);
}
const lg = io([sg, rg, og]);
function ag(n, e) {
  var t;
  const i = n.substr(e).match(/^[01]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function ug(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0b") return "";
  const i = ag(n, e);
  return i === "" ? "" : t + i;
}
function pg(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-7]+/);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function cg(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0o") return "";
  const i = pg(n, e);
  return i === "" ? "" : t + i;
}
function hg(n, e) {
  var t;
  const i = n.substr(e).match(/^[0-9a-f]+/i);
  return (t = i && i[0]) !== null && t !== void 0 ? t : "";
}
function dg(n, e) {
  const t = n.substr(e, 2);
  if (e += t.length, t.toLowerCase() !== "0x") return "";
  const i = hg(n, e);
  return i === "" ? "" : t + i;
}
const mg = io([ug, cg, dg]), vg = io([mg, lg]);
function bg(n, e) {
  const t = vg(n, e);
  return e += t.length, t === "" ? null : { evaluable: new Zf(t), cursor: e };
}
function wg(n, e) {
  const t = n.substr(e, 1);
  if (e += t.length, t !== "(") return null;
  const i = Sp(n, e);
  if (!i) return null;
  e = i.cursor, e += On(n, e).length;
  const s = n.substr(e, 1);
  return e += s.length, s !== ")" ? null : { evaluable: i.evaluable, cursor: e };
}
function _g(n, e) {
  var t;
  return (t = bg(n, e)) !== null && t !== void 0 ? t : wg(n, e);
}
function $p(n, e) {
  const t = _g(n, e);
  if (t) return t;
  const i = n.substr(e, 1);
  if (e += i.length, i !== "+" && i !== "-" && i !== "~") return null;
  const s = $p(n, e);
  return s ? (e = s.cursor, { cursor: e, evaluable: new tg(i, s.evaluable) }) : null;
}
function fg(n, e, t) {
  t += On(e, t).length;
  const i = n.filter((s) => e.startsWith(s, t))[0];
  return i ? (t += i.length, t += On(e, t).length, { cursor: t, operator: i }) : null;
}
function gg(n, e) {
  return (t, i) => {
    const s = n(t, i);
    if (!s) return null;
    i = s.cursor;
    let r = s.evaluable;
    for (; ; ) {
      const o = fg(e, t, i);
      if (!o) break;
      i = o.cursor;
      const l = n(t, i);
      if (!l) return null;
      i = l.cursor, r = new Qf(o.operator, r, l.evaluable);
    }
    return r ? { cursor: i, evaluable: r } : null;
  };
}
const Cg = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((n, e) => gg(n, e), $p);
function Sp(n, e) {
  return e += On(n, e).length, Cg(n, e);
}
function Pg(n) {
  const e = Sp(n, 0);
  return !e || e.cursor + On(n, e.cursor).length !== n.length ? null : e.evaluable;
}
function ke(n) {
  var e;
  const t = Pg(n);
  return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0 ? e : null;
}
function Ki(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string") {
    const e = ke(n);
    if (!$(e)) return e;
  }
  return 0;
}
function z(n) {
  return (e) => e.toFixed(Math.max(Math.min(n, 20), 0));
}
function C(n, e, t, i, s) {
  const r = (n - e) / (t - e);
  return i + r * (s - i);
}
function Fs(n) {
  return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
}
function O(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function Lp(n, e) {
  return (n % e + e) % e;
}
function xg(n, e) {
  return $(n.step) ? Math.max(Fs(e), 2) : Fs(n.step);
}
function Mp(n) {
  var e;
  return (e = n.step) !== null && e !== void 0 ? e : 1;
}
function yg(n, e) {
  var t;
  const i = Math.abs((t = n.step) !== null && t !== void 0 ? t : e);
  return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
}
function ro(n, e) {
  return $(n.step) ? null : new Wf(n.step, e);
}
function oo(n) {
  return !$(n.max) && !$(n.min) ? new Fi({ max: n.max, min: n.min }) : !$(n.max) || !$(n.min) ? new Xf({ max: n.max, min: n.min }) : null;
}
function Ui(n, e) {
  var t, i, s;
  return { formatter: (t = n.format) !== null && t !== void 0 ? t : z(xg(n, e)), keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : Mp(n), pointerScale: (s = n.pointerScale) !== null && s !== void 0 ? s : yg(n, e) };
}
function zi(n) {
  return { format: n.optional.function, keyScale: n.optional.number, max: n.optional.number, min: n.optional.number, pointerScale: n.optional.number, step: n.optional.number };
}
function lo(n) {
  return { constraint: n.constraint, textProps: w.fromObject(Ui(n.params, n.initialValue)) };
}
class ao {
  constructor(e) {
    this.controller = e;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get("disabled");
  }
  set disabled(e) {
    this.controller.viewProps.set("disabled", e);
  }
  get hidden() {
    return this.controller.viewProps.get("hidden");
  }
  set hidden(e) {
    this.controller.viewProps.set("hidden", e);
  }
  dispose() {
    this.controller.viewProps.set("disposed", true);
  }
  importState(e) {
    return this.controller.importState(e);
  }
  exportState() {
    return this.controller.exportState();
  }
}
class Hi {
  constructor(e) {
    this.target = e;
  }
}
class Ap extends Hi {
  constructor(e, t, i) {
    super(e), this.value = t, this.last = i ?? true;
  }
}
class Eg extends Hi {
  constructor(e, t) {
    super(e), this.expanded = t;
  }
}
class kg extends Hi {
  constructor(e, t) {
    super(e), this.index = t;
  }
}
class uo extends ao {
  constructor(e) {
    super(e), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new oe(), this.controller.value.emitter.on("change", this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(e) {
    this.controller.tag = e;
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(e) {
    const t = this.controller.value;
    this.emitter_.emit("change", new Ap(this, t.binding.target.read(), e.options.last));
  }
}
function Vg(n, e) {
  const i = Object.keys(e).reduce((s, r) => {
    if (s === void 0) return;
    const o = e[r], l = o(n[r]);
    return l.succeeded ? Object.assign(Object.assign({}, s), { [r]: l.value }) : void 0;
  }, {});
  return i;
}
function $g(n, e) {
  return n.reduce((t, i) => {
    if (t === void 0) return;
    const s = e(i);
    if (!(!s.succeeded || s.value === void 0)) return [...t, s.value];
  }, []);
}
function Sg(n) {
  return n === null ? false : typeof n == "object";
}
function Te(n) {
  return (e) => (t) => {
    if (!e && t === void 0) return { succeeded: false, value: void 0 };
    if (e && t === void 0) return { succeeded: true, value: void 0 };
    const i = n(t);
    return i !== void 0 ? { succeeded: true, value: i } : { succeeded: false, value: void 0 };
  };
}
function Rl(n) {
  return { custom: (e) => Te(e)(n), boolean: Te((e) => typeof e == "boolean" ? e : void 0)(n), number: Te((e) => typeof e == "number" ? e : void 0)(n), string: Te((e) => typeof e == "string" ? e : void 0)(n), function: Te((e) => typeof e == "function" ? e : void 0)(n), constant: (e) => Te((t) => t === e ? e : void 0)(n), raw: Te((e) => e)(n), object: (e) => Te((t) => {
    if (Sg(t)) return Vg(t, e);
  })(n), array: (e) => Te((t) => {
    if (Array.isArray(t)) return $g(t, e);
  })(n) };
}
const Ks = { optional: Rl(true), required: Rl(false) };
function I(n, e) {
  const t = e(Ks), i = Ks.required.object(t)(n);
  return i.succeeded ? i.value : void 0;
}
function Se(n, e, t, i) {
  if (e && !e(n)) return false;
  const s = I(n, t);
  return s ? i(s) : false;
}
function Le(n, e) {
  var t;
  return yt((t = n == null ? void 0 : n()) !== null && t !== void 0 ? t : {}, e);
}
function pi(n) {
  return "value" in n;
}
function Lg(n) {
  if (!no(n) || !("binding" in n)) return false;
  const e = n.binding;
  return Uf(e);
}
const ne = "http://www.w3.org/2000/svg";
function xi(n) {
  n.offsetHeight;
}
function Mg(n, e) {
  const t = n.style.transition;
  n.style.transition = "none", e(), n.style.transition = t;
}
function po(n) {
  return n.ontouchstart !== void 0;
}
function Ag(n) {
  const e = n.ownerDocument.defaultView;
  return e && "document" in e ? n.getContext("2d", { willReadFrequently: true }) : null;
}
const Tg = { check: '<path d="M2 8l4 4l8 -8"/>', dropdown: '<path d="M5 7h6l-3 3 z"/>', p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>' };
function qi(n, e) {
  const t = n.createElementNS(ne, "svg");
  return t.innerHTML = Tg[e], t;
}
function Tp(n, e, t) {
  n.insertBefore(e, n.children[t]);
}
function Rn(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function Op(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function Og(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Dp(n) {
  return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
}
function Be(n, e) {
  n.emitter.on("change", (t) => {
    e(t.rawValue);
  }), e(n.rawValue);
}
function Ve(n, e, t) {
  Be(n.value(e), t);
}
const Dg = "tp";
function b(n) {
  return (t, i) => [Dg, "-", n, "v", t ? `_${t}` : "", i ? `-${i}` : ""].join("");
}
const gn = b("lbl");
function Rg(n, e) {
  const t = n.createDocumentFragment();
  return e.split(`
`).map((s) => n.createTextNode(s)).forEach((s, r) => {
    r > 0 && t.appendChild(n.createElement("br")), t.appendChild(s);
  }), t;
}
class jg {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(gn()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(gn("l")), Ve(t.props, "label", (r) => {
      $(r) ? this.element.classList.add(gn(void 0, "nol")) : (this.element.classList.remove(gn(void 0, "nol")), Og(i), i.appendChild(Rg(e, r)));
    }), this.element.appendChild(i), this.labelElement = i;
    const s = e.createElement("div");
    s.classList.add(gn("v")), this.element.appendChild(s), this.valueElement = s;
  }
}
class Bg {
  constructor(e, t) {
    this.props = t.props, this.valueController = t.valueController, this.viewProps = t.valueController.viewProps, this.view = new jg(e, { props: t.props, viewProps: this.viewProps }), this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(e) {
    return Se(e, null, (t) => ({ label: t.optional.string }), (t) => (this.props.set("label", t.label), true));
  }
  exportProps() {
    return Le(null, { label: this.props.get("label") });
  }
}
function Ng() {
  return ["veryfirst", "first", "last", "verylast"];
}
const jl = b(""), Bl = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
class Rp {
  constructor(e) {
    this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
    const t = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      Ng().forEach((i) => {
        t.classList.remove(jl(void 0, Bl[i]));
      }), this.blade.get("positions").forEach((i) => {
        t.classList.add(jl(void 0, Bl[i]));
      });
    }), this.viewProps.handleDispose(() => {
      Rn(t);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(e) {
    this.parent_ = e, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(e) {
    return Se(e, null, (t) => ({ disabled: t.required.boolean, hidden: t.required.boolean }), (t) => (this.viewProps.importState(t), true));
  }
  exportState() {
    return Le(null, Object.assign({}, this.viewProps.exportState()));
  }
}
class Ig extends ao {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(e) {
    this.controller.labelController.props.set("label", e);
  }
  get title() {
    var e;
    return (e = this.controller.buttonController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.buttonController.props.set("title", e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.controller.buttonController.emitter.on(e, () => {
      i(new Hi(this));
    }), this;
  }
}
function Fg(n, e, t) {
  t ? n.classList.add(e) : n.classList.remove(e);
}
function on(n, e) {
  return (t) => {
    Fg(n, e, t);
  };
}
function co(n, e) {
  Be(n, (t) => {
    e.textContent = t ?? "";
  });
}
const bs = b("btn");
class Kg {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(bs()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("button");
    i.classList.add(bs("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(bs("t")), co(t.props.value("title"), s), this.buttonElement.appendChild(s);
  }
}
class Ug {
  constructor(e, t) {
    this.emitter = new oe(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new Kg(e, { props: this.props, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(e) {
    return Se(e, null, (t) => ({ title: t.optional.string }), (t) => (this.props.set("title", t.title), true));
  }
  exportProps() {
    return Le(null, { title: this.props.get("title") });
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}
class Nl extends Rp {
  constructor(e, t) {
    const i = new Ug(e, { props: t.buttonProps, viewProps: t.viewProps }), s = new Bg(e, { blade: t.blade, props: t.labelProps, valueController: i });
    super({ blade: t.blade, view: s.view, viewProps: t.viewProps }), this.buttonController = i, this.labelController = s;
  }
  importState(e) {
    return Se(e, (t) => super.importState(t) && this.buttonController.importProps(t) && this.labelController.importProps(t), () => ({}), () => true);
  }
  exportState() {
    return Le(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
}
class zg {
  constructor(e) {
    const [t, i] = e.split("-"), s = t.split(".");
    this.major = parseInt(s[0], 10), this.minor = parseInt(s[1], 10), this.patch = parseInt(s[2], 10), this.prerelease = i ?? null;
  }
  toString() {
    const e = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
  }
}
const Hg = new zg("2.0.0-beta.2");
function K(n) {
  return Object.assign({ core: Hg }, n);
}
K({ id: "button", type: "blade", accept(n) {
  const e = I(n, (t) => ({ title: t.required.string, view: t.required.constant("button"), label: t.optional.string }));
  return e ? { params: e } : null;
}, controller(n) {
  return new Nl(n.document, { blade: n.blade, buttonProps: w.fromObject({ title: n.params.title }), labelProps: w.fromObject({ label: n.params.label }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof Nl ? new Ig(n.controller) : null;
} });
function qg(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
}
function Gg(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
}
function Yg(n, e) {
  return n.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
}
function Xg(n) {
  return no(n) ? "refresh" in n && typeof n.refresh == "function" : false;
}
function Wg(n, e) {
  if (!Pi.isBindable(n)) throw te.notBindable();
  return new Pi(n, e);
}
class Zg {
  constructor(e, t) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = e, this.emitter_ = new oe(), this.pool_ = t, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((e) => this.pool_.createApi(e));
  }
  addBinding(e, t, i) {
    const s = i ?? {}, r = this.controller_.element.ownerDocument, o = this.pool_.createBinding(r, Wg(e, t), s), l = this.pool_.createBindingApi(o);
    return this.add(l, s.index);
  }
  addFolder(e) {
    return Gg(this, e);
  }
  addButton(e) {
    return qg(this, e);
  }
  addTab(e) {
    return Yg(this, e);
  }
  add(e, t) {
    const i = e.controller;
    return this.controller_.rack.add(i, t), e;
  }
  remove(e) {
    this.controller_.rack.remove(e.controller);
  }
  addBlade(e) {
    const t = this.controller_.element.ownerDocument, i = this.pool_.createBlade(t, e), s = this.pool_.createApi(i);
    return this.add(s, e.index);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.children.forEach((e) => {
      Xg(e) && e.refresh();
    });
  }
  onRackValueChange_(e) {
    const t = e.bladeController, i = this.pool_.createApi(t), s = Lg(t.value) ? t.value.binding : null;
    this.emitter_.emit("change", new Ap(i, s ? s.target.read() : t.value.rawValue, e.options.last));
  }
}
class ho extends ao {
  constructor(e, t) {
    super(e), this.rackApi_ = new Zg(e.rackController, t);
  }
}
class mo extends Rp {
  constructor(e) {
    super({ blade: e.blade, view: e.view, viewProps: e.rackController.viewProps }), this.rackController = e.rackController;
  }
  importState(e) {
    return Se(e, (t) => super.importState(t), (t) => ({ children: t.required.array(t.required.raw) }), (t) => this.rackController.rack.children.every((i, s) => i.importState(t.children[s])));
  }
  exportState() {
    return Le(() => super.exportState(), { children: this.rackController.rack.children.map((e) => e.exportState()) });
  }
}
function Us(n) {
  return "rackController" in n;
}
class Jg {
  constructor(e) {
    this.emitter = new oe(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(e) {
    for (const t of this.allItems()) if (e(t)) return t;
    return null;
  }
  includes(e) {
    return this.cache_.has(e);
  }
  add(e, t) {
    if (this.includes(e)) throw te.shouldNeverHappen();
    const i = t !== void 0 ? t : this.items_.length;
    this.items_.splice(i, 0, e), this.cache_.add(e);
    const s = this.extract_(e);
    s && (s.emitter.on("add", this.onSubListAdd_), s.emitter.on("remove", this.onSubListRemove_), s.allItems().forEach((r) => {
      this.cache_.add(r);
    })), this.emitter.emit("add", { index: i, item: e, root: this, target: this });
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    if (t < 0) return;
    this.items_.splice(t, 1), this.cache_.delete(e);
    const i = this.extract_(e);
    i && (i.allItems().forEach((s) => {
      this.cache_.delete(s);
    }), i.emitter.off("add", this.onSubListAdd_), i.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", { index: t, item: e, root: this, target: this });
  }
  onSubListAdd_(e) {
    this.cache_.add(e.item), this.emitter.emit("add", { index: e.index, item: e.item, root: this, target: e.target });
  }
  onSubListRemove_(e) {
    this.cache_.delete(e.item), this.emitter.emit("remove", { index: e.index, item: e.item, root: this, target: e.target });
  }
}
function Qg(n, e) {
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    if (pi(i) && i.value === e) return i;
  }
  return null;
}
function eC(n) {
  return Us(n) ? n.rackController.rack.bcSet_ : null;
}
class tC {
  constructor(e) {
    var t, i;
    this.emitter = new oe(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null, (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Jg(eC), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(e, t) {
    var i;
    (i = e.parent) === null || i === void 0 || i.remove(e), e.parent = this, this.bcSet_.add(e, t);
  }
  remove(e) {
    e.parent = null, this.bcSet_.remove(e);
  }
  find(e) {
    return this.bcSet_.allItems().filter(e);
  }
  onSetAdd_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("add", { bladeController: e.item, index: e.index, root: t, sender: this }), !t) return;
    const i = e.item;
    if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_), i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), i.viewProps.handleDispose(this.onChildDispose_), pi(i)) i.value.emitter.on("change", this.onChildValueChange_);
    else if (Us(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.on("layout", this.onRackLayout_), r.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(e) {
    this.updatePositions_();
    const t = e.target === e.root;
    if (this.emitter.emit("remove", { bladeController: e.item, root: t, sender: this }), !t) return;
    const i = e.item;
    if (pi(i)) i.value.emitter.off("change", this.onChildValueChange_);
    else if (Us(i)) {
      const s = i.rackController.rack;
      if (s) {
        const r = s.emitter;
        r.off("layout", this.onRackLayout_), r.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const e = this.bcSet_.items.filter((s) => !s.viewProps.get("hidden")), t = e[0], i = e[e.length - 1];
    this.bcSet_.items.forEach((s) => {
      const r = [];
      s === t && (r.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && r.push("veryfirst")), s === i && (r.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && r.push("verylast")), s.blade.set("positions", r);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildViewPropsChange_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildDispose_() {
    this.bcSet_.items.filter((t) => t.viewProps.get("disposed")).forEach((t) => {
      this.bcSet_.remove(t);
    });
  }
  onChildValueChange_(e) {
    const t = Qg(this.find(pi), e.sender);
    if (!t) throw te.alreadyDisposed();
    this.emitter.emit("valuechange", { bladeController: t, options: e.options, sender: this });
  }
  onRackLayout_(e) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onRackValueChange_(e) {
    this.emitter.emit("valuechange", { bladeController: e.bladeController, options: e.options, sender: this });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
}
class vo {
  constructor(e) {
    this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = e.element, this.viewProps = e.viewProps;
    const t = new tC({ blade: e.root ? void 0 : e.blade, viewProps: e.viewProps });
    t.emitter.on("add", this.onRackAdd_), t.emitter.on("remove", this.onRackRemove_), this.rack = t, this.viewProps.handleDispose(() => {
      for (let i = this.rack.children.length - 1; i >= 0; i--) this.rack.children[i].viewProps.set("disposed", true);
    });
  }
  onRackAdd_(e) {
    e.root && Tp(this.element, e.bladeController.view.element, e.index);
  }
  onRackRemove_(e) {
    e.root && Rn(e.bladeController.view.element);
  }
}
function jp() {
  return new w({ positions: j([], { equals: Kf }) });
}
class Qn extends w {
  constructor(e) {
    super(e);
  }
  static create(e) {
    const t = { completed: true, expanded: e, expandedHeight: null, shouldFixHeight: false, temporaryExpanded: null }, i = w.createCore(t);
    return new Qn(i);
  }
  get styleExpanded() {
    var e;
    return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) return "0";
    const e = this.get("expandedHeight");
    return this.get("shouldFixHeight") && !$(e) ? `${e}px` : "auto";
  }
  bindExpandedClass(e, t) {
    const i = () => {
      this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
    };
    Ve(this, "expanded", i), Ve(this, "temporaryExpanded", i);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
  }
}
function nC(n, e) {
  let t = 0;
  return Mg(e, () => {
    n.set("expandedHeight", null), n.set("temporaryExpanded", true), xi(e), t = e.clientHeight, n.set("temporaryExpanded", null), xi(e);
  }), t;
}
function Il(n, e) {
  e.style.height = n.styleHeight;
}
function bo(n, e) {
  n.value("expanded").emitter.on("beforechange", () => {
    if (n.set("completed", false), $(n.get("expandedHeight"))) {
      const t = nC(n, e);
      t > 0 && n.set("expandedHeight", t);
    }
    n.set("shouldFixHeight", true), xi(e);
  }), n.emitter.on("change", () => {
    Il(n, e);
  }), Il(n, e), e.addEventListener("transitionend", (t) => {
    t.propertyName === "height" && n.cleanUpTransition();
  });
}
class iC extends ho {
  constructor(e, t) {
    super(e, t), this.emitter_ = new oe(), this.controller.foldable.value("expanded").emitter.on("change", (i) => {
      this.emitter_.emit("fold", new Eg(this, i.sender.rawValue));
    }), this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    });
  }
  get expanded() {
    return this.controller.foldable.get("expanded");
  }
  set expanded(e) {
    this.controller.foldable.set("expanded", e);
  }
  get title() {
    return this.controller.props.get("title");
  }
  set title(e) {
    this.controller.props.set("title", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    return this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  refresh() {
    this.rackApi_.refresh();
  }
}
const Bp = b("cnt");
class sC {
  constructor(e, t) {
    var i;
    this.className_ = b((i = t.viewName) !== null && i !== void 0 ? i : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), Bp()), t.viewProps.bindClassModifiers(this.element), this.foldable_ = t.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), Ve(this.foldable_, "completed", on(this.element, this.className_(void 0, "cpl")));
    const s = e.createElement("button");
    s.classList.add(this.className_("b")), Ve(t.props, "title", (u) => {
      $(u) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
    }), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    r.classList.add(this.className_("i")), this.element.appendChild(r);
    const o = e.createElement("div");
    o.classList.add(this.className_("t")), co(t.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
    const l = e.createElement("div");
    l.classList.add(this.className_("m")), this.buttonElement.appendChild(l);
    const a = e.createElement("div");
    a.classList.add(this.className_("c")), this.element.appendChild(a), this.containerElement = a;
  }
}
class Fl extends mo {
  constructor(e, t) {
    var i;
    const s = Qn.create((i = t.expanded) !== null && i !== void 0 ? i : true), r = new sC(e, { foldable: s, props: t.props, viewName: t.root ? "rot" : void 0, viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new vo({ blade: t.blade, element: r.containerElement, root: t.root, viewProps: t.viewProps }), view: r })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = t.props, this.foldable = s, bo(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    }), this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(e) {
    return Se(e, (t) => super.importState(t), (t) => ({ expanded: t.required.boolean, title: t.optional.string }), (t) => (this.foldable.set("expanded", t.expanded), this.props.set("title", t.title), true));
  }
  exportState() {
    return Le(() => super.exportState(), { expanded: this.foldable.get("expanded"), title: this.props.get("title") });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
}
K({ id: "folder", type: "blade", accept(n) {
  const e = I(n, (t) => ({ title: t.required.string, view: t.required.constant("folder"), expanded: t.optional.boolean }));
  return e ? { params: e } : null;
}, controller(n) {
  return new Fl(n.document, { blade: n.blade, expanded: n.params.expanded, props: w.fromObject({ title: n.params.title }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof Fl ? new iC(n.controller, n.pool) : null;
} });
const rC = b("");
function Kl(n, e) {
  return on(n, rC(void 0, e));
}
class ei extends w {
  constructor(e) {
    var t;
    super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = Yf(j(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(e) {
    var t, i, s;
    const r = e ?? {};
    return new ei(w.createCore({ disabled: (t = r.disabled) !== null && t !== void 0 ? t : false, disposed: false, hidden: (i = r.hidden) !== null && i !== void 0 ? i : false, parent: (s = r.parent) !== null && s !== void 0 ? s : null }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(e) {
    Be(this.globalDisabled_, Kl(e, "disabled")), Ve(this, "hidden", Kl(e, "hidden"));
  }
  bindDisabled(e) {
    Be(this.globalDisabled_, (t) => {
      e.disabled = t;
    });
  }
  bindTabIndex(e) {
    Be(this.globalDisabled_, (t) => {
      e.tabIndex = t ? -1 : 0;
    });
  }
  handleDispose(e) {
    this.value("disposed").emitter.on("change", (t) => {
      t && e();
    });
  }
  importState(e) {
    this.set("disabled", e.disabled), this.set("hidden", e.hidden);
  }
  exportState() {
    return { disabled: this.get("disabled"), hidden: this.get("hidden") };
  }
  getGlobalDisabled_() {
    const e = this.get("parent");
    return (e ? e.globalDisabled.rawValue : false) || this.get("disabled");
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(e) {
    var t;
    const i = e.previousRawValue;
    i == null ? void 0 : i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
  }
}
const Ul = b("tbp");
class oC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Ul()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Ul("c")), this.element.appendChild(i), this.containerElement = i;
  }
}
const Cn = b("tbi");
class lC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Cn()), t.viewProps.bindClassModifiers(this.element), Ve(t.props, "selected", (r) => {
      r ? this.element.classList.add(Cn(void 0, "sel")) : this.element.classList.remove(Cn(void 0, "sel"));
    });
    const i = e.createElement("button");
    i.classList.add(Cn("b")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = e.createElement("div");
    s.classList.add(Cn("t")), co(t.props.value("title"), s), this.buttonElement.appendChild(s), this.titleElement = s;
  }
}
class aC {
  constructor(e, t) {
    this.emitter = new oe(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new lC(e, { props: t.props, viewProps: t.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}
class zs extends mo {
  constructor(e, t) {
    const i = new oC(e, { viewProps: t.viewProps });
    super(Object.assign(Object.assign({}, t), { rackController: new vo({ blade: t.blade, element: i.containerElement, viewProps: t.viewProps }), view: i })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new aC(e, { props: t.itemProps, viewProps: ei.create() }), this.ic_.emitter.on("click", this.onItemClick_), this.props = t.props, Ve(this.props, "selected", (s) => {
      this.itemController.props.set("selected", s), this.viewProps.set("hidden", !s);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(e) {
    return Se(e, (t) => super.importState(t), (t) => ({ selected: t.required.boolean, title: t.required.string }), (t) => (this.ic_.props.set("selected", t.selected), this.ic_.props.set("title", t.title), true));
  }
  exportState() {
    return Le(() => super.exportState(), { selected: this.ic_.props.get("selected"), title: this.ic_.props.get("title") });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
}
class uC extends ho {
  constructor(e, t) {
    super(e, t), this.emitter_ = new oe(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = t, this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(e) {
    const t = this.controller.view.element.ownerDocument, i = new zs(t, { blade: jp(), itemProps: w.fromObject({ selected: false, title: e.title }), props: w.fromObject({ selected: false }), viewProps: ei.create() }), s = this.pool_.createApi(i);
    return this.rackApi_.add(s, e.index);
  }
  removePage(e) {
    this.rackApi_.remove(this.rackApi_.children[e]);
  }
  on(e, t) {
    const i = t.bind(this);
    return this.emitter_.on(e, (s) => {
      i(s);
    }), this;
  }
  onSelect_(e) {
    this.emitter_.emit("select", new kg(this, e.rawValue));
  }
}
class pC extends ho {
  get title() {
    var e;
    return (e = this.controller.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
  }
  set title(e) {
    this.controller.itemController.props.set("title", e);
  }
  get selected() {
    return this.controller.props.get("selected");
  }
  set selected(e) {
    this.controller.props.set("selected", e);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(e) {
    return this.rackApi_.addButton(e);
  }
  addFolder(e) {
    return this.rackApi_.addFolder(e);
  }
  addTab(e) {
    return this.rackApi_.addTab(e);
  }
  add(e, t) {
    this.rackApi_.add(e, t);
  }
  remove(e) {
    this.rackApi_.remove(e);
  }
  addBinding(e, t, i) {
    return this.rackApi_.addBinding(e, t, i);
  }
  addBlade(e) {
    return this.rackApi_.addBlade(e);
  }
  refresh() {
    this.rackApi_.refresh();
  }
}
const zl = -1;
class cC {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = j(true), this.selectedIndex = j(zl), this.items_ = [];
  }
  add(e, t) {
    const i = t ?? this.items_.length;
    this.items_.splice(i, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
  }
  remove(e) {
    const t = this.items_.indexOf(e);
    t < 0 || (this.items_.splice(t, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = zl, this.empty.rawValue = true;
      return;
    }
    const e = this.items_.findIndex((t) => t.rawValue);
    e < 0 ? (this.items_.forEach((t, i) => {
      t.rawValue = i === 0;
    }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((t, i) => {
      t.rawValue = i === e;
    }), this.selectedIndex.rawValue = e), this.empty.rawValue = false;
  }
  onItemSelectedChange_(e) {
    if (e.rawValue) {
      const t = this.items_.findIndex((i) => i === e.sender);
      this.items_.forEach((i, s) => {
        i.rawValue = s === t;
      }), this.selectedIndex.rawValue = t;
    } else this.keepSelection_();
  }
}
const Pn = b("tab");
class hC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Pn(), Bp()), t.viewProps.bindClassModifiers(this.element), Be(t.empty, on(this.element, Pn(void 0, "nop")));
    const i = e.createElement("div");
    i.classList.add(Pn("t")), this.element.appendChild(i), this.itemsElement = i;
    const s = e.createElement("div");
    s.classList.add(Pn("i")), this.element.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(Pn("c")), this.element.appendChild(r), this.contentsElement = r;
  }
}
class Hl extends mo {
  constructor(e, t) {
    const i = new cC(), s = new hC(e, { empty: i.empty, viewProps: t.viewProps });
    super({ blade: t.blade, rackController: new vo({ blade: t.blade, element: s.contentsElement, viewProps: t.viewProps }), view: s }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
    const r = this.rackController.rack;
    r.emitter.on("add", this.onRackAdd_), r.emitter.on("remove", this.onRackRemove_), this.tab = i;
  }
  add(e, t) {
    this.rackController.rack.add(e, t);
  }
  remove(e) {
    this.rackController.rack.remove(this.rackController.rack.children[e]);
  }
  onRackAdd_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    Tp(this.view.itemsElement, t.itemController.view.element, e.index), t.itemController.viewProps.set("parent", this.viewProps), this.tab.add(t.props.value("selected"));
  }
  onRackRemove_(e) {
    if (!e.root) return;
    const t = e.bladeController;
    Rn(t.itemController.view.element), t.itemController.viewProps.set("parent", null), this.tab.remove(t.props.value("selected"));
  }
}
K({ id: "tab", type: "blade", accept(n) {
  const e = I(n, (t) => ({ pages: t.required.array(t.required.object({ title: t.required.string })), view: t.required.constant("tab") }));
  return !e || e.pages.length === 0 ? null : { params: e };
}, controller(n) {
  const e = new Hl(n.document, { blade: n.blade, viewProps: n.viewProps });
  return n.params.pages.forEach((t) => {
    const i = new zs(n.document, { blade: jp(), itemProps: w.fromObject({ selected: false, title: t.title }), props: w.fromObject({ selected: false }), viewProps: ei.create() });
    e.add(i);
  }), e;
}, api(n) {
  return n.controller instanceof Hl ? new uC(n.controller, n.pool) : n.controller instanceof zs ? new pC(n.controller, n.pool) : null;
} });
class wo extends uo {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(e) {
    this.controller.valueController.props.set("options", e);
  }
}
class ln {
  constructor(e) {
    this.constraints = e;
  }
  constrain(e) {
    return this.constraints.reduce((t, i) => i.constrain(t), e);
  }
}
function yi(n, e) {
  if (n instanceof e) return n;
  if (n instanceof ln) {
    const t = n.constraints.reduce((i, s) => i || (s instanceof e ? s : null), null);
    if (t) return t;
  }
  return null;
}
class Gi {
  constructor(e) {
    this.values = w.fromObject({ options: e });
  }
  constrain(e) {
    const t = this.values.get("options");
    return t.length === 0 || t.filter((s) => s.value === e).length > 0 ? e : t[0].value;
  }
}
function Yi(n) {
  var e;
  const t = Ks;
  if (Array.isArray(n)) return (e = I({ items: n }, (i) => ({ items: i.required.array(i.required.object({ text: i.required.string, value: i.required.raw })) }))) === null || e === void 0 ? void 0 : e.items;
  if (typeof n == "object") return t.required.raw(n).value;
}
function Np(n) {
  if (Array.isArray(n)) return n;
  const e = [];
  return Object.keys(n).forEach((t) => {
    e.push({ text: t, value: n[t] });
  }), e;
}
function _o(n) {
  return $(n) ? null : new Gi(Np(n));
}
const ws = b("lst");
class dC {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.element = e.createElement("div"), this.element.classList.add(ws()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("select");
    i.classList.add(ws("s")), t.viewProps.bindDisabled(i), this.element.appendChild(i), this.selectElement = i;
    const s = e.createElement("div");
    s.classList.add(ws("m")), s.appendChild(qi(e, "dropdown")), this.element.appendChild(s), t.value.emitter.on("change", this.onValueChange_), this.value_ = t.value, Ve(this.props_, "options", (r) => {
      Op(this.selectElement), r.forEach((o) => {
        const l = e.createElement("option");
        l.textContent = o.text, this.selectElement.appendChild(l);
      }), this.update_();
    });
  }
  update_() {
    const e = this.props_.get("options").map((t) => t.value);
    this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
}
class Zt {
  constructor(e, t) {
    this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new dC(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = this.props.get("options")[t.selectedIndex].value;
  }
  importProps(e) {
    return Se(e, null, (t) => ({ options: t.required.custom(Yi) }), (t) => (this.props.set("options", Np(t.options)), true));
  }
  exportProps() {
    return Le(null, { options: this.props.get("options") });
  }
}
const ql = b("pop");
class mC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ql()), t.viewProps.bindClassModifiers(this.element), Be(t.shows, on(this.element, ql(void 0, "v")));
  }
}
class Ip {
  constructor(e, t) {
    this.shows = j(false), this.viewProps = t.viewProps, this.view = new mC(e, { shows: this.shows, viewProps: this.viewProps });
  }
}
const Gl = b("txt");
class vC {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Gl()), t.viewProps.bindClassModifiers(this.element), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_);
    const i = e.createElement("input");
    i.classList.add(Gl("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onChange_), this.value_ = t.value, this.refresh();
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class fo {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = t.parser, this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new vC(e, { props: t.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    $(s) || (this.value.rawValue = s), this.view.refresh();
  }
}
function bC(n) {
  return String(n);
}
function Fp(n) {
  return n === "false" ? false : !!n;
}
function Yl(n) {
  return bC(n);
}
function wC(n) {
  return (e) => n.reduce((t, i) => t !== null ? t : i(e), null);
}
const _C = z(0);
function Ei(n) {
  return _C(n) + "%";
}
function Kp(n) {
  return String(n);
}
function Hs(n) {
  return n;
}
function an({ primary: n, secondary: e, forward: t, backward: i }) {
  let s = false;
  function r(o) {
    s || (s = true, o(), s = false);
  }
  n.emitter.on("change", (o) => {
    r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), e.emitter.on("change", (o) => {
    r(() => {
      n.setRawValue(i(n.rawValue, e.rawValue), o.options);
    }), r(() => {
      e.setRawValue(t(n.rawValue, e.rawValue), o.options);
    });
  }), r(() => {
    e.setRawValue(t(n.rawValue, e.rawValue), { forceEmit: false, last: true });
  });
}
function J(n, e) {
  const t = n * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
  return e.upKey ? +t : e.downKey ? -t : 0;
}
function jn(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowDown", shiftKey: n.shiftKey, upKey: n.key === "ArrowUp" };
}
function Ke(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowLeft", shiftKey: n.shiftKey, upKey: n.key === "ArrowRight" };
}
function fC(n) {
  return n === "ArrowUp" || n === "ArrowDown";
}
function Up(n) {
  return fC(n) || n === "ArrowLeft" || n === "ArrowRight";
}
function _s(n, e) {
  var t, i;
  const s = e.ownerDocument.defaultView, r = e.getBoundingClientRect();
  return { x: n.pageX - (((t = s && s.scrollX) !== null && t !== void 0 ? t : 0) + r.left), y: n.pageY - (((i = s && s.scrollY) !== null && i !== void 0 ? i : 0) + r.top) };
}
class pt {
  constructor(e) {
    this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new oe(), e.addEventListener("touchstart", this.onTouchStart_, { passive: false }), e.addEventListener("touchmove", this.onTouchMove_, { passive: true }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(e) {
    const t = this.elem_.getBoundingClientRect();
    return { bounds: { width: t.width, height: t.height }, point: e ? { x: e.x, y: e.y } : null };
  }
  onMouseDown_(e) {
    var t;
    e.preventDefault(), (t = e.currentTarget) === null || t === void 0 || t.focus();
    const i = this.elem_.ownerDocument;
    i.addEventListener("mousemove", this.onDocumentMouseMove_), i.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(_s(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseMove_(e) {
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(_s(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onDocumentMouseUp_(e) {
    const t = this.elem_.ownerDocument;
    t.removeEventListener("mousemove", this.onDocumentMouseMove_), t.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(_s(e, this.elem_)), sender: this, shiftKey: e.shiftKey });
  }
  onTouchStart_(e) {
    e.preventDefault();
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchMove_(e) {
    const t = e.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", { altKey: e.altKey, data: this.computePosition_(t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0), sender: this, shiftKey: e.shiftKey }), this.lastTouch_ = t;
  }
  onTouchEnd_(e) {
    var t;
    const i = (t = e.targetTouches.item(0)) !== null && t !== void 0 ? t : this.lastTouch_, s = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", { altKey: e.altKey, data: this.computePosition_(i ? { x: i.clientX - s.left, y: i.clientY - s.top } : void 0), sender: this, shiftKey: e.shiftKey });
  }
}
const pe = b("txt");
class gC {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(pe(), pe(void 0, "num")), t.arrayPosition && this.element.classList.add(pe(void 0, t.arrayPosition)), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(pe("i")), i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = t.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(pe()), this.inputElement.classList.add(pe("i"));
    const s = e.createElement("div");
    s.classList.add(pe("k")), this.element.appendChild(s), this.knobElement = s;
    const r = e.createElementNS(ne, "svg");
    r.classList.add(pe("g")), this.knobElement.appendChild(r);
    const o = e.createElementNS(ne, "path");
    o.classList.add(pe("gb")), r.appendChild(o), this.guideBodyElem_ = o;
    const l = e.createElementNS(ne, "path");
    l.classList.add(pe("gh")), r.appendChild(l), this.guideHeadElem_ = l;
    const a = e.createElement("div");
    a.classList.add(b("tt")()), this.knobElement.appendChild(a), this.tooltipElem_ = a, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.refresh();
  }
  onDraggingChange_(e) {
    if (e.rawValue === null) {
      this.element.classList.remove(pe(void 0, "drg"));
      return;
    }
    this.element.classList.add(pe(void 0, "drg"));
    const t = e.rawValue / this.props_.get("pointerScale"), i = t + (t > 0 ? -1 : t < 0 ? 1 : 0), s = O(-i, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + s},0 L${i},4 L${i + s},8`, `M ${t},-1 L${t},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
    const r = this.props_.get("formatter");
    this.tooltipElem_.textContent = r(this.value.rawValue), this.tooltipElem_.style.left = `${t}px`;
  }
  refresh() {
    const e = this.props_.get("formatter");
    this.inputElement.value = e(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class un {
  constructor(e, t) {
    var i;
    this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = t.parser, this.props = t.props, this.sliderProps_ = (i = t.sliderProps) !== null && i !== void 0 ? i : null, this.value = t.value, this.viewProps = t.viewProps, this.dragging_ = j(null), this.view = new gC(e, { arrayPosition: t.arrayPosition, dragging: this.dragging_, props: this.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const s = new pt(this.view.knobElement);
    s.emitter.on("down", this.onPointerDown_), s.emitter.on("move", this.onPointerMove_), s.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(e) {
    var t, i;
    const s = (t = this.sliderProps_) === null || t === void 0 ? void 0 : t.get("min"), r = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max");
    let o = e;
    return s !== void 0 && (o = Math.max(o, s)), r !== void 0 && (o = Math.min(o, r)), o;
  }
  onInputChange_(e) {
    const i = e.currentTarget.value, s = this.parser_(i);
    $(s) || (this.value.rawValue = this.constrainValue_(s)), this.view.refresh();
  }
  onInputKeyDown_(e) {
    const t = J(this.props.get("keyScale"), jn(e));
    t !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), { forceEmit: false, last: false });
  }
  onInputKeyUp_(e) {
    J(this.props.get("keyScale"), jn(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
  onPointerDown_() {
    this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
  }
  computeDraggingValue_(e) {
    if (!e.point) return null;
    const t = e.point.x - e.bounds.width / 2;
    return this.constrainValue_(this.originRawValue_ + t * this.props.get("pointerScale"));
  }
  onPointerMove_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: false, last: false }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
  }
  onPointerUp_(e) {
    const t = this.computeDraggingValue_(e.data);
    t !== null && (this.value.setRawValue(t, { forceEmit: true, last: true }), this.dragging_.rawValue = null);
  }
}
const fs = b("sld");
class CC {
  constructor(e, t) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(fs()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(fs("t")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.trackElement = i;
    const s = e.createElement("div");
    s.classList.add(fs("k")), this.trackElement.appendChild(s), this.knobElement = s, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.update_();
  }
  update_() {
    const e = O(C(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${e}%`;
  }
  onChange_() {
    this.update_();
  }
}
class PC {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.props = t.props, this.view = new CC(e, { props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new pt(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    e.point && this.value.setRawValue(C(O(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("min"), this.props.get("max")), t);
  }
  onPointerDownOrMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = J(this.props.get("keyScale"), Ke(e));
    t !== 0 && this.value.setRawValue(this.value.rawValue + t, { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    J(this.props.get("keyScale"), Ke(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const gs = b("sldtxt");
class xC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(gs());
    const i = e.createElement("div");
    i.classList.add(gs("s")), this.sliderView_ = t.sliderView, i.appendChild(this.sliderView_.element), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(gs("t")), this.textView_ = t.textView, s.appendChild(this.textView_.element), this.element.appendChild(s);
  }
}
class Xl {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.sliderC_ = new PC(e, { props: t.sliderProps, value: t.value, viewProps: this.viewProps }), this.textC_ = new un(e, { parser: t.parser, props: t.textProps, sliderProps: t.sliderProps, value: t.value, viewProps: t.viewProps }), this.view = new xC(e, { sliderView: this.sliderC_.view, textView: this.textC_.view });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(e) {
    return Se(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => {
      const i = this.sliderC_.props;
      return i.set("max", t.max), i.set("min", t.min), true;
    });
  }
  exportProps() {
    const e = this.sliderC_.props;
    return Le(null, { max: e.get("max"), min: e.get("min") });
  }
}
function yC(n) {
  return { sliderProps: new w({ keyScale: n.keyScale, max: n.max, min: n.min }), textProps: new w({ formatter: j(n.formatter), keyScale: n.keyScale, pointerScale: j(n.pointerScale) }) };
}
const EC = { containerUnitSize: "cnt-usz" };
function zp(n) {
  return `--${EC[n]}`;
}
function Bn(n) {
  return zi(n);
}
function nt(n) {
  if (Is(n)) return I(n, Bn);
}
function Re(n, e) {
  if (!n) return;
  const t = [], i = ro(n, e);
  i && t.push(i);
  const s = oo(n);
  return s && t.push(s), new ln(t);
}
function Hp(n) {
  if (n === "inline" || n === "popup") return n;
}
function At(n, e) {
  n.write(e);
}
const si = b("ckb");
class kC {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(si()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("label");
    i.classList.add(si("l")), this.element.appendChild(i);
    const s = e.createElement("input");
    s.classList.add(si("i")), s.type = "checkbox", i.appendChild(s), this.inputElement = s, t.viewProps.bindDisabled(this.inputElement);
    const r = e.createElement("div");
    r.classList.add(si("w")), i.appendChild(r);
    const o = qi(e, "check");
    r.appendChild(o), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}
class VC {
  constructor(e, t) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new kC(e, { value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const t = e.currentTarget;
    this.value.rawValue = t.checked;
  }
}
function $C(n) {
  const e = [], t = _o(n.options);
  return t && e.push(t), new ln(e);
}
K({ id: "input-bool", type: "input", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = I(e, (i) => ({ options: i.optional.custom(Yi), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Fp, constraint: (n) => $C(n.params), writer: (n) => At }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && yi(i, Gi);
  return s ? new Zt(e, { props: new w({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new VC(e, { value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof Zt ? new wo(n.controller) : null;
} });
const vt = b("col");
class SC {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(vt()), t.foldable.bindExpandedClass(this.element, vt(void 0, "expanded")), Ve(t.foldable, "completed", on(this.element, vt(void 0, "cpl")));
    const i = e.createElement("div");
    i.classList.add(vt("h")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(vt("s")), i.appendChild(s), this.swatchElement = s;
    const r = e.createElement("div");
    if (r.classList.add(vt("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(vt("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
function LC(n, e, t) {
  const i = O(n / 255, 0, 1), s = O(e / 255, 0, 1), r = O(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u = 0, p = 0;
  const c = (l + o) / 2;
  return a !== 0 && (p = a / (1 - Math.abs(o + l - 1)), i === o ? u = (s - r) / a : s === o ? u = 2 + (r - i) / a : u = 4 + (i - s) / a, u = u / 6 + (u < 0 ? 1 : 0)), [u * 360, p * 100, c * 100];
}
function MC(n, e, t) {
  const i = (n % 360 + 360) % 360, s = O(e / 100, 0, 1), r = O(t / 100, 0, 1), o = (1 - Math.abs(2 * r - 1)) * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o / 2;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function AC(n, e, t) {
  const i = O(n / 255, 0, 1), s = O(e / 255, 0, 1), r = O(t / 255, 0, 1), o = Math.max(i, s, r), l = Math.min(i, s, r), a = o - l;
  let u;
  a === 0 ? u = 0 : o === i ? u = 60 * (((s - r) / a % 6 + 6) % 6) : o === s ? u = 60 * ((r - i) / a + 2) : u = 60 * ((i - s) / a + 4);
  const p = o === 0 ? 0 : a / o, c = o;
  return [u, p * 100, c * 100];
}
function qp(n, e, t) {
  const i = Lp(n, 360), s = O(e / 100, 0, 1), r = O(t / 100, 0, 1), o = r * s, l = o * (1 - Math.abs(i / 60 % 2 - 1)), a = r - o;
  let u, p, c;
  return i >= 0 && i < 60 ? [u, p, c] = [o, l, 0] : i >= 60 && i < 120 ? [u, p, c] = [l, o, 0] : i >= 120 && i < 180 ? [u, p, c] = [0, o, l] : i >= 180 && i < 240 ? [u, p, c] = [0, l, o] : i >= 240 && i < 300 ? [u, p, c] = [l, 0, o] : [u, p, c] = [o, 0, l], [(u + a) * 255, (p + a) * 255, (c + a) * 255];
}
function TC(n, e, t) {
  const i = t + e * (100 - Math.abs(2 * t - 100)) / 200;
  return [n, i !== 0 ? e * (100 - Math.abs(2 * t - 100)) / i : 0, t + e * (100 - Math.abs(2 * t - 100)) / 200];
}
function OC(n, e, t) {
  const i = 100 - Math.abs(t * (200 - e) / 100 - 100);
  return [n, i !== 0 ? e * t / i : 0, t * (200 - e) / 200];
}
function $e(n) {
  return [n[0], n[1], n[2]];
}
function Xi(n, e) {
  return [n[0], n[1], n[2], e];
}
const DC = { hsl: { hsl: (n, e, t) => [n, e, t], hsv: TC, rgb: MC }, hsv: { hsl: OC, hsv: (n, e, t) => [n, e, t], rgb: qp }, rgb: { hsl: LC, hsv: AC, rgb: (n, e, t) => [n, e, t] } };
function Jt(n, e) {
  return [e === "float" ? 1 : n === "rgb" ? 255 : 360, e === "float" ? 1 : n === "rgb" ? 255 : 100, e === "float" ? 1 : n === "rgb" ? 255 : 100];
}
function RC(n, e) {
  return n === e ? e : Lp(n, e);
}
function Gp(n, e, t) {
  var i;
  const s = Jt(e, t);
  return [e === "rgb" ? O(n[0], 0, s[0]) : RC(n[0], s[0]), O(n[1], 0, s[1]), O(n[2], 0, s[2]), O((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1)];
}
function Wl(n, e, t, i) {
  const s = Jt(e, t), r = Jt(e, i);
  return n.map((o, l) => o / s[l] * r[l]);
}
function Yp(n, e, t) {
  const i = Wl(n, e.mode, e.type, "int"), s = DC[e.mode][t.mode](...i);
  return Wl(s, t.mode, "int", t.type);
}
class f {
  static black() {
    return new f([0, 0, 0], "rgb");
  }
  constructor(e, t) {
    this.type = "int", this.mode = t, this.comps_ = Gp(e, t, this.type);
  }
  getComponents(e) {
    return Xi(Yp($e(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
}
const Ze = b("colp");
class jC {
  constructor(e, t) {
    this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(Ze()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Ze("hsv"));
    const s = e.createElement("div");
    s.classList.add(Ze("sv")), this.svPaletteView_ = t.svPaletteView, s.appendChild(this.svPaletteView_.element), i.appendChild(s);
    const r = e.createElement("div");
    r.classList.add(Ze("h")), this.hPaletteView_ = t.hPaletteView, r.appendChild(this.hPaletteView_.element), i.appendChild(r), this.element.appendChild(i);
    const o = e.createElement("div");
    if (o.classList.add(Ze("rgb")), this.textsView_ = t.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), t.alphaViews) {
      this.alphaViews_ = { palette: t.alphaViews.palette, text: t.alphaViews.text };
      const l = e.createElement("div");
      l.classList.add(Ze("a"));
      const a = e.createElement("div");
      a.classList.add(Ze("ap")), a.appendChild(this.alphaViews_.palette.element), l.appendChild(a);
      const u = e.createElement("div");
      u.classList.add(Ze("at")), u.appendChild(this.alphaViews_.text.element), l.appendChild(u), this.element.appendChild(l);
    }
  }
  get allFocusableElements() {
    const e = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map((t) => t.inputElement)];
    return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
  }
}
function BC(n) {
  return n === "int" ? "int" : n === "float" ? "float" : void 0;
}
function go(n) {
  return I(n, (e) => ({ color: e.optional.object({ alpha: e.optional.boolean, type: e.optional.custom(BC) }), expanded: e.optional.boolean, picker: e.optional.custom(Hp), readonly: e.optional.constant(false) }));
}
function Et(n) {
  return n ? 0.1 : 1;
}
function Xp(n) {
  var e;
  return (e = n.color) === null || e === void 0 ? void 0 : e.type;
}
class Co {
  constructor(e, t) {
    this.type = "float", this.mode = t, this.comps_ = Gp(e, t, this.type);
  }
  getComponents(e) {
    return Xi(Yp($e(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const e = this.getComponents("rgb");
    return { r: e[0], g: e[1], b: e[2], a: e[3] };
  }
}
const NC = { int: (n, e) => new f(n, e), float: (n, e) => new Co(n, e) };
function Po(n, e, t) {
  return NC[t](n, e);
}
function IC(n) {
  return n.type === "float";
}
function FC(n) {
  return n.type === "int";
}
function KC(n) {
  const e = n.getComponents(), t = Jt(n.mode, "int");
  return new f([Math.round(C(e[0], 0, 1, 0, t[0])), Math.round(C(e[1], 0, 1, 0, t[1])), Math.round(C(e[2], 0, 1, 0, t[2])), e[3]], n.mode);
}
function UC(n) {
  const e = n.getComponents(), t = Jt(n.mode, "int");
  return new Co([C(e[0], 0, t[0], 0, 1), C(e[1], 0, t[1], 0, 1), C(e[2], 0, t[2], 0, 1), e[3]], n.mode);
}
function Y(n, e) {
  if (n.type === e) return n;
  if (FC(n) && e === "float") return UC(n);
  if (IC(n) && e === "int") return KC(n);
  throw te.shouldNeverHappen();
}
function zC(n, e) {
  return n.alpha === e.alpha && n.mode === e.mode && n.notation === e.notation && n.type === e.type;
}
function de(n, e) {
  const t = n.match(/^(.+)%$/);
  return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(n), e);
}
const HC = { deg: (n) => n, grad: (n) => n * 360 / 400, rad: (n) => n * 360 / (2 * Math.PI), turn: (n) => n * 360 };
function Wp(n) {
  const e = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!e) return parseFloat(n);
  const t = parseFloat(e[1]), i = e[2];
  return HC[i](t);
}
function Zp(n) {
  const e = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [de(e[1], 255), de(e[2], 255), de(e[3], 255)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function qC(n) {
  const e = Zp(n);
  return e ? new f(e, "rgb") : null;
}
function Jp(n) {
  const e = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [de(e[1], 255), de(e[2], 255), de(e[3], 255), de(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function GC(n) {
  const e = Jp(n);
  return e ? new f(e, "rgb") : null;
}
function Qp(n) {
  const e = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [Wp(e[1]), de(e[2], 100), de(e[3], 100)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function YC(n) {
  const e = Qp(n);
  return e ? new f(e, "hsl") : null;
}
function ec(n) {
  const e = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!e) return null;
  const t = [Wp(e[1]), de(e[2], 100), de(e[3], 100), de(e[4], 1)];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function XC(n) {
  const e = ec(n);
  return e ? new f(e, "hsl") : null;
}
function tc(n) {
  const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
  const t = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null;
}
function WC(n) {
  const e = tc(n);
  return e ? new f(e, "rgb") : null;
}
function nc(n) {
  const e = n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), C(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)];
  const t = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), C(parseInt(t[4], 16), 0, 255, 0, 1)] : null;
}
function ZC(n) {
  const e = nc(n);
  return e ? new f(e, "rgb") : null;
}
function ic(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
}
function JC(n) {
  return (e) => {
    const t = ic(e);
    return t ? Po(t, "rgb", n) : null;
  };
}
function sc(n) {
  const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!e) return null;
  const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), parseFloat(e[4])];
  return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
}
function QC(n) {
  return (e) => {
    const t = sc(e);
    return t ? Po(t, "rgb", n) : null;
  };
}
const e0 = [{ parser: tc, result: { alpha: false, mode: "rgb", notation: "hex" } }, { parser: nc, result: { alpha: true, mode: "rgb", notation: "hex" } }, { parser: Zp, result: { alpha: false, mode: "rgb", notation: "func" } }, { parser: Jp, result: { alpha: true, mode: "rgb", notation: "func" } }, { parser: Qp, result: { alpha: false, mode: "hsl", notation: "func" } }, { parser: ec, result: { alpha: true, mode: "hsl", notation: "func" } }, { parser: ic, result: { alpha: false, mode: "rgb", notation: "object" } }, { parser: sc, result: { alpha: true, mode: "rgb", notation: "object" } }];
function t0(n) {
  return e0.reduce((e, { parser: t, result: i }) => e || (t(n) ? i : null), null);
}
function n0(n, e = "int") {
  const t = t0(n);
  return t ? t.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, t), { type: "int" }) : t.notation === "func" ? Object.assign(Object.assign({}, t), { type: e }) : null : null;
}
function ti(n) {
  const e = [WC, ZC, qC, GC, YC, XC];
  e.push(JC("int"), QC("int"));
  const t = wC(e);
  return (i) => {
    const s = t(i);
    return s ? Y(s, n) : null;
  };
}
function i0(n) {
  const e = ti("int");
  if (typeof n != "string") return f.black();
  const t = e(n);
  return t ?? f.black();
}
function rc(n) {
  const e = O(Math.floor(n), 0, 255).toString(16);
  return e.length === 1 ? `0${e}` : e;
}
function xo(n, e = "#") {
  const t = $e(n.getComponents("rgb")).map(rc).join("");
  return `${e}${t}`;
}
function yo(n, e = "#") {
  const t = n.getComponents("rgb"), i = [t[0], t[1], t[2], t[3] * 255].map(rc).join("");
  return `${e}${i}`;
}
function oc(n) {
  const e = z(0), t = Y(n, "int");
  return `rgb(${$e(t.getComponents("rgb")).map((s) => e(s)).join(", ")})`;
}
function ci(n) {
  const e = z(2), t = z(0);
  return `rgba(${Y(n, "int").getComponents("rgb").map((r, o) => (o === 3 ? e : t)(r)).join(", ")})`;
}
function s0(n) {
  const e = [z(0), Ei, Ei], t = Y(n, "int");
  return `hsl(${$e(t.getComponents("hsl")).map((s, r) => e[r](s)).join(", ")})`;
}
function r0(n) {
  const e = [z(0), Ei, Ei, z(2)];
  return `hsla(${Y(n, "int").getComponents("hsl").map((s, r) => e[r](s)).join(", ")})`;
}
function lc(n, e) {
  const t = z(e === "float" ? 2 : 0), i = ["r", "g", "b"], s = Y(n, e);
  return `{${$e(s.getComponents("rgb")).map((o, l) => `${i[l]}: ${t(o)}`).join(", ")}}`;
}
function o0(n) {
  return (e) => lc(e, n);
}
function ac(n, e) {
  const t = z(2), i = z(e === "float" ? 2 : 0), s = ["r", "g", "b", "a"];
  return `{${Y(n, e).getComponents("rgb").map((l, a) => {
    const u = a === 3 ? t : i;
    return `${s[a]}: ${u(l)}`;
  }).join(", ")}}`;
}
function l0(n) {
  return (e) => ac(e, n);
}
const a0 = [{ format: { alpha: false, mode: "rgb", notation: "hex", type: "int" }, stringifier: xo }, { format: { alpha: true, mode: "rgb", notation: "hex", type: "int" }, stringifier: yo }, { format: { alpha: false, mode: "rgb", notation: "func", type: "int" }, stringifier: oc }, { format: { alpha: true, mode: "rgb", notation: "func", type: "int" }, stringifier: ci }, { format: { alpha: false, mode: "hsl", notation: "func", type: "int" }, stringifier: s0 }, { format: { alpha: true, mode: "hsl", notation: "func", type: "int" }, stringifier: r0 }, ...["int", "float"].reduce((n, e) => [...n, { format: { alpha: false, mode: "rgb", notation: "object", type: e }, stringifier: o0(e) }, { format: { alpha: true, mode: "rgb", notation: "object", type: e }, stringifier: l0(e) }], [])];
function uc(n) {
  return a0.reduce((e, t) => e || (zC(t.format, n) ? t.stringifier : null), null);
}
const xn = b("apl");
class u0 {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(xn()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(xn("b")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(xn("c")), i.appendChild(s), this.colorElem_ = s;
    const r = e.createElement("div");
    r.classList.add(xn("m")), this.element.appendChild(r), this.markerElem_ = r;
    const o = e.createElement("div");
    o.classList.add(xn("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e.getComponents("rgb"), i = new f([t[0], t[1], t[2], 0], "rgb"), s = new f([t[0], t[1], t[2], 255], "rgb"), r = ["to right", ci(i), ci(s)];
    this.colorElem_.style.background = `linear-gradient(${r.join(",")})`, this.previewElem_.style.backgroundColor = ci(e);
    const o = C(t[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class p0 {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new u0(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new pt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = e.point.x / e.bounds.width, s = this.value.rawValue, [r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new f([r, o, l, i], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = J(Et(true), Ke(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new f([s, r, o, l + t], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    J(Et(true), Ke(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const Bt = b("coltxt");
function c0(n) {
  const e = n.createElement("select"), t = [{ text: "RGB", value: "rgb" }, { text: "HSL", value: "hsl" }, { text: "HSV", value: "hsv" }, { text: "HEX", value: "hex" }];
  return e.appendChild(t.reduce((i, s) => {
    const r = n.createElement("option");
    return r.textContent = s.text, r.value = s.value, i.appendChild(r), i;
  }, n.createDocumentFragment())), e;
}
class h0 {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Bt()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Bt("m")), this.modeElem_ = c0(e), this.modeElem_.classList.add(Bt("ms")), i.appendChild(this.modeSelectElement), t.viewProps.bindDisabled(this.modeElem_);
    const s = e.createElement("div");
    s.classList.add(Bt("mm")), s.appendChild(qi(e, "dropdown")), i.appendChild(s), this.element.appendChild(i);
    const r = e.createElement("div");
    r.classList.add(Bt("w")), this.element.appendChild(r), this.inputsElem_ = r, this.inputViews_ = t.inputViews, this.applyInputViews_(), Be(t.mode, (o) => {
      this.modeElem_.value = o;
    });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(e) {
    this.inputViews_ = e, this.applyInputViews_();
  }
  applyInputViews_() {
    Op(this.inputsElem_);
    const e = this.element.ownerDocument;
    this.inputViews_.forEach((t) => {
      const i = e.createElement("div");
      i.classList.add(Bt("c")), i.appendChild(t.element), this.inputsElem_.appendChild(i);
    });
  }
}
function d0(n) {
  return z(n === "float" ? 2 : 0);
}
function m0(n, e, t) {
  const i = Jt(n, e)[t];
  return new Fi({ min: 0, max: i });
}
function v0(n, e, t) {
  return new un(n, { arrayPosition: t === 0 ? "fst" : t === 2 ? "lst" : "mid", parser: e.parser, props: w.fromObject({ formatter: d0(e.colorType), keyScale: Et(false), pointerScale: e.colorType === "float" ? 0.01 : 1 }), value: j(0, { constraint: m0(e.colorMode, e.colorType, t) }), viewProps: e.viewProps });
}
function b0(n, e) {
  const t = { colorMode: e.colorMode, colorType: e.colorType, parser: ke, viewProps: e.viewProps };
  return [0, 1, 2].map((i) => {
    const s = v0(n, t, i);
    return an({ primary: e.value, secondary: s.value, forward(r) {
      return Y(r, e.colorType).getComponents(e.colorMode)[i];
    }, backward(r, o) {
      const l = e.colorMode, u = Y(r, e.colorType).getComponents(l);
      u[i] = o;
      const p = Po(Xi($e(u), u[3]), l, e.colorType);
      return Y(p, "int");
    } }), s;
  });
}
function w0(n, e) {
  const t = new fo(n, { parser: ti("int"), props: w.fromObject({ formatter: xo }), value: j(f.black()), viewProps: e.viewProps });
  return an({ primary: e.value, secondary: t.value, forward: (i) => new f($e(i.getComponents()), i.mode), backward: (i, s) => new f(Xi($e(s.getComponents(i.mode)), i.getComponents()[3]), i.mode) }), [t];
}
function _0(n) {
  return n !== "hex";
}
class f0 {
  constructor(e, t) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = t.colorType, this.value = t.value, this.viewProps = t.viewProps, this.colorMode = j(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new h0(e, { mode: this.colorMode, inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view], viewProps: this.viewProps }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(e) {
    const t = this.colorMode.rawValue;
    return _0(t) ? b0(e, { colorMode: t, colorType: this.colorType_, value: this.value, viewProps: this.viewProps }) : w0(e, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(e) {
    const t = e.currentTarget;
    this.colorMode.rawValue = t.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((i) => i.view);
  }
}
const Cs = b("hpl");
class g0 {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Cs()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("div");
    i.classList.add(Cs("c")), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(Cs("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue, [t] = e.getComponents("hsv");
    this.markerElem_.style.backgroundColor = oc(new f([t, 100, 100], "hsv"));
    const i = C(t, 0, 360, 0, 100);
    this.markerElem_.style.left = `${i}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class C0 {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new g0(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new pt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = C(O(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), s = this.value.rawValue, [, r, o, l] = s.getComponents("hsv");
    this.value.setRawValue(new f([i, r, o, l], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    const t = J(Et(false), Ke(e));
    if (t === 0) return;
    const i = this.value.rawValue, [s, r, o, l] = i.getComponents("hsv");
    this.value.setRawValue(new f([s + t, r, o, l], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    J(Et(false), Ke(e)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const Ps = b("svp"), Zl = 64;
class P0 {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Ps()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
    const i = e.createElement("canvas");
    i.height = Zl, i.width = Zl, i.classList.add(Ps("c")), this.element.appendChild(i), this.canvasElement = i;
    const s = e.createElement("div");
    s.classList.add(Ps("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
  }
  update_() {
    const e = Ag(this.canvasElement);
    if (!e) return;
    const i = this.value.rawValue.getComponents("hsv"), s = this.canvasElement.width, r = this.canvasElement.height, o = e.getImageData(0, 0, s, r), l = o.data;
    for (let p = 0; p < r; p++) for (let c = 0; c < s; c++) {
      const L = C(c, 0, s, 0, 100), be = C(p, 0, r, 100, 0), ee = qp(i[0], L, be), W = (p * s + c) * 4;
      l[W] = ee[0], l[W + 1] = ee[1], l[W + 2] = ee[2], l[W + 3] = 255;
    }
    e.putImageData(o, 0, 0);
    const a = C(i[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${a}%`;
    const u = C(i[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${u}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class x0 {
  constructor(e, t) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new P0(e, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new pt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = C(e.point.x, 0, e.bounds.width, 0, 100), s = C(e.point.y, 0, e.bounds.height, 100, 0), [r, , , o] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new f([r, i, s, o], "hsv"), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onKeyDown_(e) {
    Up(e.key) && e.preventDefault();
    const [t, i, s, r] = this.value.rawValue.getComponents("hsv"), o = Et(false), l = J(o, Ke(e)), a = J(o, jn(e));
    l === 0 && a === 0 || this.value.setRawValue(new f([t, i + l, s + a, r], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(e) {
    const t = Et(false), i = J(t, Ke(e)), s = J(t, jn(e));
    i === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class y0 {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.hPaletteC_ = new C0(e, { value: this.value, viewProps: this.viewProps }), this.svPaletteC_ = new x0(e, { value: this.value, viewProps: this.viewProps }), this.alphaIcs_ = t.supportsAlpha ? { palette: new p0(e, { value: this.value, viewProps: this.viewProps }), text: new un(e, { parser: ke, props: w.fromObject({ pointerScale: 0.01, keyScale: 0.1, formatter: z(2) }), value: j(0, { constraint: new Fi({ min: 0, max: 1 }) }), viewProps: this.viewProps }) } : null, this.alphaIcs_ && an({ primary: this.value, secondary: this.alphaIcs_.text.value, forward: (i) => i.getComponents()[3], backward: (i, s) => {
      const r = i.getComponents();
      return r[3] = s, new f(r, i.mode);
    } }), this.textsC_ = new f0(e, { colorType: t.colorType, value: this.value, viewProps: this.viewProps }), this.view = new jC(e, { alphaViews: this.alphaIcs_ ? { palette: this.alphaIcs_.palette.view, text: this.alphaIcs_.text.view } : null, hPaletteView: this.hPaletteC_.view, supportsAlpha: t.supportsAlpha, svPaletteView: this.svPaletteC_.view, textsView: this.textsC_.view, viewProps: this.viewProps });
  }
  get textsController() {
    return this.textsC_;
  }
}
const xs = b("colsw");
class E0 {
  constructor(e, t) {
    this.onValueChange_ = this.onValueChange_.bind(this), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.element = e.createElement("div"), this.element.classList.add(xs()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(xs("sw")), this.element.appendChild(i), this.swatchElem_ = i;
    const s = e.createElement("button");
    s.classList.add(xs("b")), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s, this.update_();
  }
  update_() {
    const e = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = yo(e);
  }
  onValueChange_() {
    this.update_();
  }
}
class k0 {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new E0(e, { value: this.value, viewProps: this.viewProps });
  }
}
class Eo {
  constructor(e, t) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Qn.create(t.expanded), this.swatchC_ = new k0(e, { value: this.value, viewProps: this.viewProps });
    const i = this.swatchC_.view.buttonElement;
    i.addEventListener("blur", this.onButtonBlur_), i.addEventListener("click", this.onButtonClick_), this.textC_ = new fo(e, { parser: t.parser, props: w.fromObject({ formatter: t.formatter }), value: this.value, viewProps: this.viewProps }), this.view = new SC(e, { foldable: this.foldable_, pickerLayout: t.pickerLayout }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = t.pickerLayout === "popup" ? new Ip(e, { viewProps: this.viewProps }) : null;
    const s = new y0(e, { colorType: t.colorType, supportsAlpha: t.supportsAlpha, value: this.value, viewProps: this.viewProps });
    s.view.allFocusableElements.forEach((r) => {
      r.addEventListener("blur", this.onPopupChildBlur_), r.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = s, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(s.view.element), an({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (r) => r, backward: (r, o) => o })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), bo(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Dp(e);
    i && t.contains(i) || i && i === this.swatchC_.view.buttonElement && !po(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
  }
}
function V0(n) {
  return $e(n.getComponents("rgb")).reduce((e, t) => e << 8 | Math.floor(t) & 255, 0);
}
function $0(n) {
  return n.getComponents("rgb").reduce((e, t, i) => {
    const s = Math.floor(i === 3 ? t * 255 : t) & 255;
    return e << 8 | s;
  }, 0) >>> 0;
}
function S0(n) {
  return new f([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
}
function L0(n) {
  return new f([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, C(n & 255, 0, 255, 0, 1)], "rgb");
}
function M0(n) {
  return typeof n != "number" ? f.black() : S0(n);
}
function A0(n) {
  return typeof n != "number" ? f.black() : L0(n);
}
function hi(n, e) {
  return typeof n != "object" || $(n) ? false : e in n && typeof n[e] == "number";
}
function pc(n) {
  return hi(n, "r") && hi(n, "g") && hi(n, "b");
}
function cc(n) {
  return pc(n) && hi(n, "a");
}
function hc(n) {
  return pc(n);
}
function ko(n, e) {
  if (n.mode !== e.mode || n.type !== e.type) return false;
  const t = n.getComponents(), i = e.getComponents();
  for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return false;
  return true;
}
function Jl(n) {
  return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function T0(n) {
  const e = uc(n);
  return e ? (t, i) => {
    At(t, e(i));
  } : null;
}
function O0(n) {
  const e = n ? $0 : V0;
  return (t, i) => {
    At(t, e(i));
  };
}
function D0(n, e, t) {
  const s = Y(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b), n.writeProperty("a", s.a);
}
function R0(n, e, t) {
  const s = Y(e, t).toRgbaObject();
  n.writeProperty("r", s.r), n.writeProperty("g", s.g), n.writeProperty("b", s.b);
}
function j0(n, e) {
  return (t, i) => {
    n ? D0(t, i, e) : R0(t, i, e);
  };
}
function B0(n) {
  var e;
  return !!(!((e = n == null ? void 0 : n.color) === null || e === void 0) && e.alpha);
}
function N0(n) {
  return n ? (e) => yo(e, "0x") : (e) => xo(e, "0x");
}
function I0(n) {
  return "color" in n || n.view === "color";
}
K({ id: "input-color-number", type: "input", accept: (n, e) => {
  if (typeof n != "number" || !I0(e)) return null;
  const t = go(e);
  return t ? { initialValue: n, params: Object.assign(Object.assign({}, t), { supportsAlpha: B0(e) }) } : null;
}, binding: { reader: (n) => n.params.supportsAlpha ? A0 : M0, equals: ko, writer: (n) => O0(n.params.supportsAlpha) }, controller: (n) => {
  var e, t;
  return new Eo(n.document, { colorType: "int", expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: N0(n.params.supportsAlpha), parser: ti("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.supportsAlpha, value: n.value, viewProps: n.viewProps });
} });
function F0(n, e) {
  if (!hc(n)) return Y(f.black(), e);
  if (e === "int") {
    const t = Jl(n);
    return new f(t, "rgb");
  }
  if (e === "float") {
    const t = Jl(n);
    return new Co(t, "rgb");
  }
  return Y(f.black(), "int");
}
function K0(n) {
  return cc(n);
}
function U0(n) {
  return (e) => {
    const t = F0(e, n);
    return Y(t, "int");
  };
}
function z0(n, e) {
  return (t) => n ? ac(t, e) : lc(t, e);
}
K({ id: "input-color-object", type: "input", accept: (n, e) => {
  var t;
  if (!hc(n)) return null;
  const i = go(e);
  return i ? { initialValue: n, params: Object.assign(Object.assign({}, i), { colorType: (t = Xp(e)) !== null && t !== void 0 ? t : "int" }) } : null;
}, binding: { reader: (n) => U0(n.params.colorType), equals: ko, writer: (n) => j0(K0(n.initialValue), n.params.colorType) }, controller: (n) => {
  var e, t;
  const i = cc(n.initialValue);
  return new Eo(n.document, { colorType: n.params.colorType, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: z0(i, n.params.colorType), parser: ti("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: i, value: n.value, viewProps: n.viewProps });
} });
K({ id: "input-color-string", type: "input", accept: (n, e) => {
  if (typeof n != "string" || e.view === "text") return null;
  const t = n0(n, Xp(e));
  if (!t) return null;
  const i = uc(t);
  if (!i) return null;
  const s = go(e);
  return s ? { initialValue: n, params: Object.assign(Object.assign({}, s), { format: t, stringifier: i }) } : null;
}, binding: { reader: () => i0, equals: ko, writer: (n) => {
  const e = T0(n.params.format);
  if (!e) throw te.notBindable();
  return e;
} }, controller: (n) => {
  var e, t;
  return new Eo(n.document, { colorType: n.params.format.type, expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, formatter: n.params.stringifier, parser: ti("int"), pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", supportsAlpha: n.params.format.alpha, value: n.value, viewProps: n.viewProps });
} });
class Vo {
  constructor(e) {
    this.components = e.components, this.asm_ = e.assembly;
  }
  constrain(e) {
    const t = this.asm_.toComponents(e).map((i, s) => {
      var r, o;
      return (o = (r = this.components[s]) === null || r === void 0 ? void 0 : r.constrain(i)) !== null && o !== void 0 ? o : i;
    });
    return this.asm_.fromComponents(t);
  }
}
const Ql = b("pndtxt");
class H0 {
  constructor(e, t) {
    this.textViews = t.textViews, this.element = e.createElement("div"), this.element.classList.add(Ql()), this.textViews.forEach((i) => {
      const s = e.createElement("div");
      s.classList.add(Ql("a")), s.appendChild(i.element), this.element.appendChild(s);
    });
  }
}
function q0(n, e, t) {
  return new un(n, { arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid", parser: e.parser, props: e.axes[t].textProps, value: j(0, { constraint: e.axes[t].constraint }), viewProps: e.viewProps });
}
class $o {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.acs_ = t.axes.map((i, s) => q0(e, t, s)), this.acs_.forEach((i, s) => {
      an({ primary: this.value, secondary: i.value, forward: (r) => t.assembly.toComponents(r)[s], backward: (r, o) => {
        const l = t.assembly.toComponents(r);
        return l[s] = o, t.assembly.fromComponents(l);
      } });
    }), this.view = new H0(e, { textViews: this.acs_.map((i) => i.view) });
  }
  get textControllers() {
    return this.acs_;
  }
}
class G0 extends uo {
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.sliderController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.sliderController.props.set("min", e);
  }
}
function Y0(n, e) {
  const t = [], i = ro(n, e);
  i && t.push(i);
  const s = oo(n);
  s && t.push(s);
  const r = _o(n.options);
  return r && t.push(r), new ln(t);
}
K({ id: "input-number", type: "input", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, zi(i)), { options: i.optional.custom(Yi), readonly: i.optional.constant(false) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Ki, constraint: (n) => Y0(n.params, n.initialValue), writer: (n) => At }, controller: (n) => {
  const e = n.value, t = n.constraint, i = t && yi(t, Gi);
  if (i) return new Zt(n.document, { props: new w({ options: i.values.value("options") }), value: e, viewProps: n.viewProps });
  const s = Ui(n.params, e.rawValue), r = t && yi(t, Fi);
  return r ? new Xl(n.document, Object.assign(Object.assign({}, yC(Object.assign(Object.assign({}, s), { keyScale: j(s.keyScale), max: r.values.value("max"), min: r.values.value("min") }))), { parser: ke, value: e, viewProps: n.viewProps })) : new un(n.document, { parser: ke, props: w.fromObject(s), value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof Xl ? new G0(n.controller) : n.controller.valueController instanceof Zt ? new wo(n.controller) : null;
} });
class rt {
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(e) {
    if ($(e)) return false;
    const t = e.x, i = e.y;
    return !(typeof t != "number" || typeof i != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
}
const dc = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new rt(...n) }, Nt = b("p2d");
class X0 {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(Nt()), t.viewProps.bindClassModifiers(this.element), Be(t.expanded, on(this.element, Nt(void 0, "expanded")));
    const i = e.createElement("div");
    i.classList.add(Nt("h")), this.element.appendChild(i);
    const s = e.createElement("button");
    s.classList.add(Nt("b")), s.appendChild(qi(e, "p2dpad")), t.viewProps.bindDisabled(s), i.appendChild(s), this.buttonElement = s;
    const r = e.createElement("div");
    if (r.classList.add(Nt("t")), i.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
      const o = e.createElement("div");
      o.classList.add(Nt("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
const Je = b("p2dp");
class W0 {
  constructor(e, t) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = e.createElement("div"), this.element.classList.add(Je()), t.layout === "popup" && this.element.classList.add(Je(void 0, "p")), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("div");
    i.classList.add(Je("p")), t.viewProps.bindTabIndex(i), this.element.appendChild(i), this.padElement = i;
    const s = e.createElementNS(ne, "svg");
    s.classList.add(Je("g")), this.padElement.appendChild(s), this.svgElem_ = s;
    const r = e.createElementNS(ne, "line");
    r.classList.add(Je("ax")), r.setAttributeNS(null, "x1", "0"), r.setAttributeNS(null, "y1", "50%"), r.setAttributeNS(null, "x2", "100%"), r.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(r);
    const o = e.createElementNS(ne, "line");
    o.classList.add(Je("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
    const l = e.createElementNS(ne, "line");
    l.classList.add(Je("l")), l.setAttributeNS(null, "x1", "50%"), l.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(l), this.lineElem_ = l;
    const a = e.createElement("div");
    a.classList.add(Je("m")), this.padElement.appendChild(a), this.markerElem_ = a, t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [e, t] = this.value.rawValue.getComponents(), i = this.props_.get("max"), s = C(e, -i, +i, 0, 100), r = C(t, -i, +i, 0, 100), o = this.props_.get("invertsY") ? 100 - r : r;
    this.lineElem_.setAttributeNS(null, "x2", `${s}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${s}%`, this.markerElem_.style.top = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
}
function ea(n, e, t) {
  return [J(e[0], Ke(n)), J(e[1], jn(n)) * (t ? 1 : -1)];
}
class Z0 {
  constructor(e, t) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new W0(e, { layout: t.layout, props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new pt(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(e, t) {
    if (!e.point) return;
    const i = this.props.get("max"), s = C(e.point.x, 0, e.bounds.width, -i, +i), r = C(this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -i, +i);
    this.value.setRawValue(new rt(s, r), t);
  }
  onPointerDown_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerMove_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: false, last: false });
  }
  onPointerUp_(e) {
    this.handlePointerEvent_(e.data, { forceEmit: true, last: true });
  }
  onPadKeyDown_(e) {
    Up(e.key) && e.preventDefault();
    const [t, i] = ea(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(new rt(this.value.rawValue.x + t, this.value.rawValue.y + i), { forceEmit: false, last: false });
  }
  onPadKeyUp_(e) {
    const [t, i] = ea(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    t === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class J0 {
  constructor(e, t) {
    var i, s;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Qn.create(t.expanded), this.popC_ = t.pickerLayout === "popup" ? new Ip(e, { viewProps: this.viewProps }) : null;
    const r = new Z0(e, { layout: t.pickerLayout, props: new w({ invertsY: j(t.invertsY), max: j(t.max), xKeyScale: t.axes[0].textProps.value("keyScale"), yKeyScale: t.axes[1].textProps.value("keyScale") }), value: this.value, viewProps: this.viewProps });
    r.view.allFocusableElements.forEach((o) => {
      o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = r, this.textC_ = new $o(e, { assembly: dc, axes: t.axes, parser: t.parser, value: this.value, viewProps: this.viewProps }), this.view = new X0(e, { expanded: this.foldable_.value("expanded"), pickerLayout: t.pickerLayout, viewProps: this.viewProps }), this.view.textElement.appendChild(this.textC_.view.element), (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_), (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), an({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (o) => o, backward: (o, l) => l })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), bo(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(e) {
    if (!this.popC_) return;
    const t = this.view.element, i = e.relatedTarget;
    (!i || !t.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(e) {
    if (!this.popC_) return;
    const t = this.popC_.view.element, i = Dp(e);
    i && t.contains(i) || i && i === this.view.buttonElement && !po(t.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(e) {
    this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
  }
}
function Q0(n) {
  return rt.isObject(n) ? new rt(n.x, n.y) : new rt();
}
function eP(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y);
}
function tP(n, e) {
  return new Vo({ assembly: dc, components: [Re(Object.assign(Object.assign({}, n), n.x), e.x), Re(Object.assign(Object.assign({}, n), n.y), e.y)] });
}
function ta(n, e) {
  var t, i;
  if (!$(n.min) || !$(n.max)) return Math.max(Math.abs((t = n.min) !== null && t !== void 0 ? t : 0), Math.abs((i = n.max) !== null && i !== void 0 ? i : 0));
  const s = Mp(n);
  return Math.max(Math.abs(s) * 10, Math.abs(e) * 10);
}
function nP(n, e) {
  var t, i;
  const s = ta(yt(n, (t = n.x) !== null && t !== void 0 ? t : {}), e.x), r = ta(yt(n, (i = n.y) !== null && i !== void 0 ? i : {}), e.y);
  return Math.max(s, r);
}
function iP(n) {
  if (!("y" in n)) return false;
  const e = n.y;
  return e && "inverted" in e ? !!e.inverted : false;
}
K({ id: "input-point2d", type: "input", accept: (n, e) => {
  if (!rt.isObject(n)) return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, Bn(i)), { expanded: i.optional.boolean, picker: i.optional.custom(Hp), readonly: i.optional.constant(false), x: i.optional.custom(nt), y: i.optional.object(Object.assign(Object.assign({}, Bn(i)), { inverted: i.optional.boolean })) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: () => Q0, constraint: (n) => tP(n.params, n.initialValue), equals: rt.equals, writer: () => eP }, controller: (n) => {
  var e, t;
  const i = n.document, s = n.value, r = n.constraint, o = [n.params.x, n.params.y];
  return new J0(i, { axes: s.rawValue.getComponents().map((l, a) => {
    var u;
    return lo({ constraint: r.components[a], initialValue: l, params: yt(n.params, (u = o[a]) !== null && u !== void 0 ? u : {}) });
  }), expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : false, invertsY: iP(n.params), max: nP(n.params, s.rawValue), parser: ke, pickerLayout: (t = n.params.picker) !== null && t !== void 0 ? t : "popup", value: s, viewProps: n.viewProps });
} });
class qt {
  constructor(e = 0, t = 0, i = 0) {
    this.x = e, this.y = t, this.z = i;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(e) {
    if ($(e)) return false;
    const t = e.x, i = e.y, s = e.z;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
const mc = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new qt(...n) };
function sP(n) {
  return qt.isObject(n) ? new qt(n.x, n.y, n.z) : new qt();
}
function rP(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z);
}
function oP(n, e) {
  return new Vo({ assembly: mc, components: [Re(Object.assign(Object.assign({}, n), n.x), e.x), Re(Object.assign(Object.assign({}, n), n.y), e.y), Re(Object.assign(Object.assign({}, n), n.z), e.z)] });
}
K({ id: "input-point3d", type: "input", accept: (n, e) => {
  if (!qt.isObject(n)) return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, Bn(i)), { readonly: i.optional.constant(false), x: i.optional.custom(nt), y: i.optional.custom(nt), z: i.optional.custom(nt) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => sP, constraint: (n) => oP(n.params, n.initialValue), equals: qt.equals, writer: (n) => rP }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z];
  return new $o(n.document, { assembly: mc, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return lo({ constraint: t.components[r], initialValue: s, params: yt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: ke, value: e, viewProps: n.viewProps });
} });
class Gt {
  constructor(e = 0, t = 0, i = 0, s = 0) {
    this.x = e, this.y = t, this.z = i, this.w = s;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(e) {
    if ($(e)) return false;
    const t = e.x, i = e.y, s = e.z, r = e.w;
    return !(typeof t != "number" || typeof i != "number" || typeof s != "number" || typeof r != "number");
  }
  static equals(e, t) {
    return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
}
const vc = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new Gt(...n) };
function lP(n) {
  return Gt.isObject(n) ? new Gt(n.x, n.y, n.z, n.w) : new Gt();
}
function aP(n, e) {
  n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z), n.writeProperty("w", e.w);
}
function uP(n, e) {
  return new Vo({ assembly: vc, components: [Re(Object.assign(Object.assign({}, n), n.x), e.x), Re(Object.assign(Object.assign({}, n), n.y), e.y), Re(Object.assign(Object.assign({}, n), n.z), e.z), Re(Object.assign(Object.assign({}, n), n.w), e.w)] });
}
K({ id: "input-point4d", type: "input", accept: (n, e) => {
  if (!Gt.isObject(n)) return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, Bn(i)), { readonly: i.optional.constant(false), w: i.optional.custom(nt), x: i.optional.custom(nt), y: i.optional.custom(nt), z: i.optional.custom(nt) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => lP, constraint: (n) => uP(n.params, n.initialValue), equals: Gt.equals, writer: (n) => aP }, controller: (n) => {
  const e = n.value, t = n.constraint, i = [n.params.x, n.params.y, n.params.z, n.params.w];
  return new $o(n.document, { assembly: vc, axes: e.rawValue.getComponents().map((s, r) => {
    var o;
    return lo({ constraint: t.components[r], initialValue: s, params: yt(n.params, (o = i[r]) !== null && o !== void 0 ? o : {}) });
  }), parser: ke, value: e, viewProps: n.viewProps });
} });
function pP(n) {
  const e = [], t = _o(n.options);
  return t && e.push(t), new ln(e);
}
K({ id: "input-string", type: "input", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = I(e, (i) => ({ readonly: i.optional.constant(false), options: i.optional.custom(Yi) }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Kp, constraint: (n) => pP(n.params), writer: (n) => At }, controller: (n) => {
  const e = n.document, t = n.value, i = n.constraint, s = i && yi(i, Gi);
  return s ? new Zt(e, { props: new w({ options: s.values.value("options") }), value: t, viewProps: n.viewProps }) : new fo(e, { parser: (r) => r, props: w.fromObject({ formatter: Hs }), value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof Zt ? new wo(n.controller) : null;
} });
const Wi = { monitor: { defaultRows: 3 } }, na = b("mll");
class cP {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(na()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("textarea");
    i.classList.add(na("i")), i.style.height = `calc(var(${zp("containerUnitSize")}) * ${t.rows})`, i.readOnly = true, t.viewProps.bindDisabled(i), this.element.appendChild(i), this.textareaElem_ = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.textareaElem_, t = e.scrollTop === e.scrollHeight - e.clientHeight, i = [];
    this.value.rawValue.forEach((s) => {
      s !== void 0 && i.push(this.formatter_(s));
    }), e.textContent = i.join(`
`), t && (e.scrollTop = e.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}
class So {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new cP(e, { formatter: t.formatter, rows: t.rows, value: this.value, viewProps: this.viewProps });
  }
}
const ia = b("sgl");
class hP {
  constructor(e, t) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(ia()), t.viewProps.bindClassModifiers(this.element);
    const i = e.createElement("input");
    i.classList.add(ia("i")), i.readOnly = true, i.type = "text", t.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  update_() {
    const e = this.value.rawValue, t = e[e.length - 1];
    this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
}
class Lo {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.view = new hP(e, { formatter: t.formatter, value: this.value, viewProps: this.viewProps });
  }
}
K({ id: "monitor-bool", type: "monitor", accept: (n, e) => {
  if (typeof n != "boolean") return null;
  const t = I(e, (i) => ({ readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Fp }, controller: (n) => {
  var e;
  return n.value.rawValue.length === 1 ? new Lo(n.document, { formatter: Yl, value: n.value, viewProps: n.viewProps }) : new So(n.document, { formatter: Yl, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Wi.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
} });
class dP extends uo {
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(e) {
    this.controller.valueController.props.set("max", e);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(e) {
    this.controller.valueController.props.set("min", e);
  }
}
const Qe = b("grl");
class mP {
  constructor(e, t) {
    this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Qe()), t.viewProps.bindClassModifiers(this.element), this.formatter_ = t.formatter, this.props_ = t.props, this.cursor_ = t.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
    const i = e.createElementNS(ne, "svg");
    i.classList.add(Qe("g")), i.style.height = `calc(var(${zp("containerUnitSize")}) * ${t.rows})`, this.element.appendChild(i), this.svgElem_ = i;
    const s = e.createElementNS(ne, "polyline");
    this.svgElem_.appendChild(s), this.lineElem_ = s;
    const r = e.createElement("div");
    r.classList.add(Qe("t"), b("tt")()), this.element.appendChild(r), this.tooltipElem_ = r, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const e = this.svgElem_.getBoundingClientRect(), t = this.value.rawValue.length - 1, i = this.props_.get("min"), s = this.props_.get("max"), r = [];
    this.value.rawValue.forEach((p, c) => {
      if (p === void 0) return;
      const L = C(c, 0, t, 0, e.width), be = C(p, i, s, e.height, 0);
      r.push([L, be].join(","));
    }), this.lineElem_.setAttributeNS(null, "points", r.join(" "));
    const o = this.tooltipElem_, l = this.value.rawValue[this.cursor_.rawValue];
    if (l === void 0) {
      o.classList.remove(Qe("t", "a"));
      return;
    }
    const a = C(this.cursor_.rawValue, 0, t, 0, e.width), u = C(l, i, s, e.height, 0);
    o.style.left = `${a}px`, o.style.top = `${u}px`, o.textContent = `${this.formatter_(l)}`, o.classList.contains(Qe("t", "a")) || (o.classList.add(Qe("t", "a"), Qe("t", "in")), xi(o), o.classList.remove(Qe("t", "in")));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}
class bc {
  constructor(e, t) {
    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.cursor_ = j(-1), this.view = new mP(e, { cursor: this.cursor_, formatter: t.formatter, rows: t.rows, props: this.props, value: this.value, viewProps: this.viewProps }), !po(e)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    else {
      const i = new pt(this.view.element);
      i.emitter.on("down", this.onGraphPointerDown_), i.emitter.on("move", this.onGraphPointerMove_), i.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(e) {
    return Se(e, null, (t) => ({ max: t.required.number, min: t.required.number }), (t) => (this.props.set("max", t.max), this.props.set("min", t.min), true));
  }
  exportProps() {
    return Le(null, { max: this.props.get("max"), min: this.props.get("min") });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(e) {
    const t = this.view.element.getBoundingClientRect();
    this.cursor_.rawValue = Math.floor(C(e.offsetX, 0, t.width, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(e) {
    this.onGraphPointerMove_(e);
  }
  onGraphPointerMove_(e) {
    if (!e.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(C(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
}
function qs(n) {
  return $(n.format) ? z(2) : n.format;
}
function vP(n) {
  var e;
  return n.value.rawValue.length === 1 ? new Lo(n.document, { formatter: qs(n.params), value: n.value, viewProps: n.viewProps }) : new So(n.document, { formatter: qs(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Wi.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
}
function bP(n) {
  var e, t, i;
  return new bc(n.document, { formatter: qs(n.params), rows: (e = n.params.rows) !== null && e !== void 0 ? e : Wi.monitor.defaultRows, props: w.fromObject({ max: (t = n.params.max) !== null && t !== void 0 ? t : 100, min: (i = n.params.min) !== null && i !== void 0 ? i : 0 }), value: n.value, viewProps: n.viewProps });
}
function sa(n) {
  return n.view === "graph";
}
K({ id: "monitor-number", type: "monitor", accept: (n, e) => {
  if (typeof n != "number") return null;
  const t = I(e, (i) => ({ format: i.optional.function, max: i.optional.number, min: i.optional.number, readonly: i.required.constant(true), rows: i.optional.number, view: i.optional.string }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { defaultBufferSize: (n) => sa(n) ? 64 : 1, reader: (n) => Ki }, controller: (n) => sa(n.params) ? bP(n) : vP(n), api: (n) => n.controller.valueController instanceof bc ? new dP(n.controller) : null });
K({ id: "monitor-string", type: "monitor", accept: (n, e) => {
  if (typeof n != "string") return null;
  const t = I(e, (i) => ({ multiline: i.optional.boolean, readonly: i.required.constant(true), rows: i.optional.number }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Kp }, controller: (n) => {
  var e;
  const t = n.value;
  return t.rawValue.length > 1 || n.params.multiline ? new So(n.document, { formatter: Hs, rows: (e = n.params.rows) !== null && e !== void 0 ? e : Wi.monitor.defaultRows, value: t, viewProps: n.viewProps }) : new Lo(n.document, { formatter: Hs, value: t, viewProps: n.viewProps });
} });
const we = b("ckr");
class wP {
  constructor(e, t) {
    this.tickElems_ = [], this.labelElems_ = [], this.boundsWidth_ = -1, this.onShowsTooltipChange_ = this.onShowsTooltipChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.formatters_ = t.formatters, this.unit_ = t.unit, this.element = e.createElement("div"), this.element.classList.add(we(), we(void 0, `m${t.seriesId}`)), t.viewProps.bindClassModifiers(this.element), this.value_ = t.value, this.value_.emitter.on("change", this.onValueChange_), t.showsTooltip.emitter.on("change", this.onShowsTooltipChange_);
    const i = e.createElement("div");
    i.classList.add(we("w")), this.element.appendChild(i), this.offsetElem_ = e.createElement("div"), this.offsetElem_.classList.add(we("o")), i.appendChild(this.offsetElem_), this.svgElem_ = e.createElementNS(ne, "svg"), this.svgElem_.classList.add(we("g")), this.offsetElem_.appendChild(this.svgElem_), this.tooltipElem_ = e.createElement("div"), this.tooltipElem_.classList.add(b("tt")(), we("tt")), this.element.appendChild(this.tooltipElem_), this.waitToBeAdded_();
  }
  waitToBeAdded_() {
    const e = new IntersectionObserver((t) => {
      t.forEach((i) => {
        i.target !== this.element || i.intersectionRatio === 0 || (this.update(), e.disconnect());
      });
    }, { root: null });
    e.observe(this.element);
  }
  rebuildScaleIfNeeded_(e) {
    if (this.boundsWidth_ === e) return;
    this.boundsWidth_ = e, this.tickElems_.forEach((u) => {
      Rn(u);
    }), this.tickElems_ = [], this.labelElems_.forEach((u) => {
      Rn(u);
    }), this.labelElems_ = [];
    const t = this.element.ownerDocument, i = this.unit_.ticks, s = this.unit_.pixels, l = ((Math.ceil(e / 2 / s) + 1) * 2 + 1) * i, a = s / i;
    for (let u = 0; u < l; u++) {
      const p = u * a;
      if (u % i === 0) {
        const c = t.createElementNS(ne, "line");
        c.classList.add(we("mjt")), c.setAttributeNS(null, "x1", String(p)), c.setAttributeNS(null, "y1", "0"), c.setAttributeNS(null, "x2", String(p)), c.setAttributeNS(null, "y2", "2"), this.svgElem_.appendChild(c), this.tickElems_.push(c);
        const L = t.createElement("div");
        L.classList.add(we("l")), L.style.left = `${p}px`, this.offsetElem_.appendChild(L), this.labelElems_.push(L);
      } else {
        const c = t.createElementNS(ne, "line");
        c.classList.add(we("mnt")), c.setAttributeNS(null, "x1", String(p)), c.setAttributeNS(null, "y1", "0"), c.setAttributeNS(null, "x2", String(p)), c.setAttributeNS(null, "y2", "2"), this.svgElem_.appendChild(c), this.tickElems_.push(c);
      }
    }
  }
  updateScale_(e) {
    const t = this.unit_.value, i = this.unit_.pixels, s = this.value_.rawValue, r = Math.ceil(e / 2 / i) + 1, o = s - s % t - t * r, l = (u) => 1 - Math.pow(O(Math.abs(s - u) / (e / 2 * (t / i)), 0, 1), 10);
    this.labelElems_.forEach((u, p) => {
      const c = o + p * t;
      u.textContent = this.formatters_.ring(c), u.style.opacity = String(l(c));
    });
    const a = this.unit_.ticks;
    this.tickElems_.forEach((u, p) => {
      const c = o + p / a * t;
      u.style.opacity = String(l(c));
    });
  }
  update() {
    const e = this.element.getBoundingClientRect().width, t = this.unit_.value, i = this.unit_.pixels, s = this.value_.rawValue, r = Math.ceil(e / 2 / i) + 1, o = (s % t + t * r) * (i / t), l = e / 2 - o;
    this.offsetElem_.style.transform = `translateX(${l}px)`, this.tooltipElem_.textContent = this.formatters_.text(s), this.rebuildScaleIfNeeded_(e), this.updateScale_(e);
  }
  onValueChange_() {
    this.update();
  }
  onShowsTooltipChange_(e) {
    e.rawValue ? this.element.classList.add(we(void 0, "tt")) : this.element.classList.remove(we(void 0, "tt"));
  }
}
class Mo {
  constructor(e, t) {
    this.ox_ = 0, this.ov_ = 0, this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.tooltipEnabled_ = t.tooltipEnabled, this.unit_ = t.unit, this.showsTooltip_ = j(false), this.view = new wP(e, { formatters: t.formatters, seriesId: t.seriesId, showsTooltip: this.showsTooltip_, unit: t.unit, value: this.value, viewProps: this.viewProps });
    const i = new pt(this.view.element);
    i.emitter.on("down", this.onPointerDown_), i.emitter.on("move", this.onPointerMove_), i.emitter.on("up", this.onPointerUp_);
  }
  onPointerDown_(e) {
    const t = e.data;
    t.point && (this.ox_ = t.point.x, this.ov_ = this.value.rawValue, this.tooltipEnabled_ && (this.showsTooltip_.rawValue = true));
  }
  onPointerMove_(e) {
    const t = e.data;
    if (!t.point) return;
    const i = t.point.x - this.ox_, s = this.unit_.pixels, r = this.unit_.value;
    this.value.setRawValue(this.ov_ - i / s * r, { forceEmit: false, last: false });
  }
  onPointerUp_() {
    this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true }), this.showsTooltip_.rawValue = false;
  }
}
const ys = b("ckrtxt");
class _P {
  constructor(e, t) {
    this.element = e.createElement("div"), this.element.classList.add(ys());
    const i = e.createElement("div");
    i.classList.add(ys("r")), i.appendChild(t.ringView.element), this.element.appendChild(i);
    const s = e.createElement("div");
    s.classList.add(ys("t")), s.appendChild(t.textView.element), this.element.appendChild(s);
  }
}
class wc {
  constructor(e, t) {
    this.value = t.value, this.viewProps = t.viewProps, this.rc_ = new Mo(e, { formatters: { ring: t.ringFormatter, text: t.textProps.get("formatter") }, seriesId: t.seriesId, tooltipEnabled: false, unit: t.ringUnit, value: this.value, viewProps: this.viewProps }), this.tc_ = new un(e, { parser: t.parser, props: t.textProps, value: this.value, viewProps: this.viewProps }), this.view = new _P(e, { ringView: this.rc_.view, textView: this.tc_.view });
  }
}
function _c(n) {
  const e = [], t = oo(n);
  t && e.push(t);
  const i = ro(n);
  return i && e.push(i), new ln(e);
}
function fP(n) {
  return n === 0 || n === 1 || n === 2 ? n : void 0;
}
function ra(n) {
  return n !== void 0 ? String(n) : "0";
}
function gP(n) {
  const e = z(Fs(n.value));
  return (t) => {
    const i = e(t), s = i.substr(0, 1);
    return i + (s === "-" || s === "+" ? " " : "");
  };
}
const CP = K({ id: "input-ring", type: "input", accept(n, e) {
  if (typeof n != "number") return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, zi(i)), { series: i.optional.custom(fP), unit: i.optional.object({ pixels: i.required.number, ticks: i.required.number, value: i.required.number }), view: i.required.constant("cameraring"), wide: i.optional.boolean }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Ki, constraint: (n) => _c(n.params), writer: (n) => At }, controller(n) {
  var e, t, i;
  const s = (e = n.params.unit) !== null && e !== void 0 ? e : { ticks: 5, pixels: 40, value: 10 }, r = gP(s), o = Ui(n.params, n.initialValue);
  if (n.params.wide) return new Mo(n.document, { formatters: { ring: r, text: o.formatter }, seriesId: (t = ra(n.params.series)) !== null && t !== void 0 ? t : "0", tooltipEnabled: true, unit: s, value: n.value, viewProps: n.viewProps });
  const l = w.fromObject(o);
  return new wc(n.document, { parser: ke, ringFormatter: r, ringUnit: s, seriesId: (i = ra(n.params.series)) !== null && i !== void 0 ? i : "0", textProps: l, value: n.value, viewProps: n.viewProps });
} }), PP = K({ id: "input-wheel", type: "input", accept(n, e) {
  if (typeof n != "number") return null;
  const t = I(e, (i) => Object.assign(Object.assign({}, zi(i)), { amount: i.optional.number, view: i.required.constant("camerawheel"), wide: i.optional.boolean }));
  return t ? { initialValue: n, params: t } : null;
}, binding: { reader: (n) => Ki, constraint: (n) => _c(n.params), writer: (n) => At }, controller(n) {
  var e, t;
  const i = z(0), s = Ui(n.params, n.initialValue);
  return n.params.wide ? new Mo(n.document, { formatters: { ring: i, text: s.formatter }, seriesId: "w", tooltipEnabled: true, unit: { ticks: 10, pixels: 40, value: ((e = n.params.amount) !== null && e !== void 0 ? e : s.pointerScale) * 40 }, value: n.value, viewProps: n.viewProps }) : new wc(n.document, { parser: ke, ringFormatter: i, ringUnit: { ticks: 10, pixels: 40, value: ((t = n.params.amount) !== null && t !== void 0 ? t : s.pointerScale) * 40 }, seriesId: "w", textProps: w.fromObject(s), value: n.value, viewProps: n.viewProps });
} }), xP = "camerakit", yP = '.tp-ckrv_w{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-ckrv_w{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-ckrv_w:hover{background-color:var(--in-bg-h)}.tp-ckrv_w:focus{background-color:var(--in-bg-f)}.tp-ckrv_w:active{background-color:var(--in-bg-a)}.tp-ckrv_w:disabled{opacity:.5}.tp-ckrv{position:relative}.tp-ckrv.tp-v-disabled{opacity:.5}.tp-ckrv::before{background-color:var(--grv-fg);bottom:0;content:"";height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-ckrv::after{background-color:var(--in-fg);content:"";left:0;margin:auto;position:absolute;right:0}.tp-ckrv_w{cursor:pointer;height:calc(var(--cnt-usz));overflow:hidden}.tp-ckrv_o{height:100%;left:0;position:relative}.tp-ckrv_g{display:block;height:2px;overflow:visible;position:absolute;width:100%}.tp-ckrv_mjt{stroke:var(--in-fg);stroke-width:2;transform-origin:bottom}.tp-ckrv_mnt{stroke:var(--in-fg);stroke-width:1;transform-origin:bottom}.tp-ckrv_l{color:var(--in-fg);font-size:.9em;pointer-events:none;position:absolute;top:0;transform:translateX(-50%);white-space:pre}.tp-ckrv_tt{left:50%;top:-4px;visibility:hidden}.tp-ckrv.tp-ckrv-tt .tp-ckrv_tt{visibility:visible}.tp-ckrv.tp-ckrv-m0::before{display:none}.tp-ckrv.tp-ckrv-m0::after{bottom:0;height:6px;width:2px}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_g{bottom:0;margin:auto;transform:translateY(3px);top:0}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_mjt{transform:scaleY(3)}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_mnt{transform:scaleY(2)}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_l{line-height:8px;transform:translateX(-50%) scale(0.8)}.tp-ckrv.tp-ckrv-m1::before{display:none}.tp-ckrv.tp-ckrv-m1::after{bottom:0;height:8px;width:2px}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_g{bottom:0}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_mjt{stroke-width:1;transform:scaleY(4)}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_mnt{transform:scaleY(2)}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_l{line-height:12px}.tp-ckrv.tp-ckrv-m2::before{transform:translateY(3px)}.tp-ckrv.tp-ckrv-m2::after{border-radius:2px;bottom:1px;height:4px;width:4px}.tp-ckrv.tp-ckrv-m2 .tp-ckrv_g{display:none}.tp-ckrv.tp-ckrv-m2 .tp-ckrv_l{line-height:12px;transform:translateX(-50%)}.tp-ckrv.tp-ckrv-mw::before,.tp-ckrv.tp-ckrv-mw::after{display:none}.tp-ckrv.tp-ckrv-mw .tp-ckrv_g{bottom:0;opacity:.2}.tp-ckrv.tp-ckrv-mw .tp-ckrv_mjt,.tp-ckrv.tp-ckrv-mw .tp-ckrv_mnt{stroke:var(--in-fg);stroke-width:2;transform:scaleY(10)}.tp-ckrv.tp-ckrv-mw .tp-ckrv_l{display:none}.tp-ckrtxtv{display:flex}.tp-ckrtxtv_r{flex:2}.tp-ckrtxtv_t{flex:1;margin-left:4px}', EP = [CP, PP], tk = Object.freeze(Object.defineProperty({ __proto__: null, css: yP, id: xP, plugins: EP }, Symbol.toStringTag, { value: "Module" }));
export {
  tk as C,
  ek as E,
  my as P
};
