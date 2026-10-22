const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rapier-BFoi23lB.js","./vendor-BcHL05hW.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as Qs, E as Js, C as ei } from "./tweakpane-C39D8eO8.js";
import { n as ti, s as st, e as si, v as ii, m as is, h as nt } from "./vendor-BcHL05hW.js";
import { S as he, V as y, R as Kt, G as at, a as ps, u as d, v as E, M as O, F as b, b as w, p as Z, c as ft, d as jt, I as De, s as _, m as ge, f as F, e as C, g as D, h as Qe, i as H, P as Xt, Q as ot, E as dt, n as ai, j as ni, T as oi, k, l as fs, o as A, W as ri, q as li, r as hi, t as ci, w as di, x as ui, y as mi, z as gi, K as pi, D as fi, A as vi, B as bi, C as Rt, H as X, J as yi, L as vs, N as Ke, O as ne, U as le, X as bs, Y as et, Z as Q, _ as as, $ as M, a0 as vt, a1 as Ae, a2 as ys, a3 as wi, a4 as Y, a5 as P, a6 as Be, a7 as Le, a8 as qt, a9 as rt, aa as xi, ab as ke, ac as Ce, ad as Yt, ae as ws, af as We, ag as Et, ah as It, ai as _e, aj as tt, ak as Pi, al as Ze, am as Si, an as Zt, ao as W, ap as bt, aq as ee, ar as Je, as as re, at as Ne, au as lt, av as $e, aw as _t, ax as xs, ay as Ti, az as Mi, aA as j, aB as Ve, aC as de, aD as Ft, aE as mt, aF as Ps, aG as Ss, aH as te, aI as gt, aJ as ki, aK as Ci, aL as Ai, aM as Ts, aN as Ms, aO as zt, aP as yt, aQ as ks, aR as Cs, aS as wt, aT as As, aU as Lt, aV as Ot, aW as Es, aX as Is, aY as Ei, aZ as Qt, a_ as Jt, a$ as ut, b0 as At, b1 as Bs, b2 as Wt, b3 as Fe, b4 as Ii, b5 as Bi, b6 as es, b7 as Ni, b8 as Ns, b9 as ns, ba as Ds, bb as Rs, bc as Di, bd as Ri, be as qe, bf as Fi, bg as Fs, bh as zi, bi as zs, bj as ts, bk as pt, bl as os, bm as it, bn as Li, bo as Bt, bp as Oi, bq as Ui, br as Ls, bs as Gi, bt as ji, bu as qi, bv as Os, bw as Vi, bx as xe, by as rs, bz as Me, bA as Hi, bB as Wi, bC as $i, bD as Ki, bE as Pt, bF as Xi, bG as Yi, bH as Zi, bI as _i } from "./three-BPWavq8k.js";
import { g as f } from "./gsap-BcKM28WW.js";
import { C as Us } from "./camera-controls-ByztGhiL.js";
let T, ea;
let __tla = (async () => {
  let Qi, Ji, ls;
  Qi = "modulepreload";
  Ji = function(m, e) {
    return new URL(m, e).href;
  };
  ls = {};
  ea = function(e, t, s) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      let r = function(h) {
        return Promise.all(h.map((c) => Promise.resolve(c).then((u) => ({
          status: "fulfilled",
          value: u
        }), (u) => ({
          status: "rejected",
          reason: u
        }))));
      };
      const n = document.getElementsByTagName("link"), o = document.querySelector("meta[property=csp-nonce]"), l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      i = r(t.map((h) => {
        if (h = Ji(h, s), h in ls) return;
        ls[h] = true;
        const c = h.endsWith(".css"), u = c ? '[rel="stylesheet"]' : "";
        if (s) for (let p = n.length - 1; p >= 0; p--) {
          const v = n[p];
          if (v.href === h && (!c || v.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${h}"]${u}`)) return;
        const g = document.createElement("link");
        if (g.rel = c ? "stylesheet" : Qi, c || (g.as = "script"), g.crossOrigin = "", g.href = h, l && g.setAttribute("nonce", l), document.head.appendChild(g), c) return new Promise((p, v) => {
          g.addEventListener("load", p), g.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${h}`)));
        });
      }));
    }
    function a(n) {
      const o = new Event("vite:preloadError", {
        cancelable: true
      });
      if (o.payload = n, window.dispatchEvent(o), !o.defaultPrevented) throw n;
    }
    return i.then((n) => {
      for (const o of n || []) o.status === "rejected" && a(o.reason);
      return e().catch(a);
    });
  };
  class ta {
    constructor() {
      this.active = location.hash.match(/debug/i), this.active && (this.panel = new Qs(), this.panel.registerPlugin(Js), this.panel.registerPlugin(ei), addEventListener("keydown", (e) => {
        e.code === "KeyH" && (this.panel.hidden = !this.panel.hidden);
      }));
    }
    addManualBinding(e, t, s, i, a, n = false) {
      const o = {};
      return o.manual = n, o.manualValue = t[s], o.update = () => {
        t[s] = o.manual ? o.manualValue : a();
      }, this.active && (o.instance = e.addBinding(o, "manualValue", i), o.instance.on("change", () => {
        o.manual = true;
      }), this.addButtons(e, {
        manual: () => {
          o.manual = true, o.manualValue = t[s], o.instance.refresh();
        },
        auto: () => {
          o.manual = false, o.update(), o.manualValue = t[s];
        }
      }, "")), o;
    }
    addThreeColorBinding(e, t, s) {
      return e.addBinding({
        color: t.getHex(he)
      }, "color", {
        label: s,
        view: "color"
      }).on("change", (i) => {
        t.set(i.value);
      });
    }
    addButtons(e, t, s = "") {
      const i = Object.keys(t);
      e.addBlade({
        view: "buttongrid",
        size: [
          i.length,
          1
        ],
        cells: (a, n) => ({
          title: [
            i
          ][n][a]
        }),
        label: s
      }).on("click", (a) => {
        t[a.cell.title](a.cell.title);
      });
    }
  }
  class se {
    constructor() {
      this.callbacks = {};
    }
    on(e, t, s = 1) {
      return this.callbacks[e] instanceof Array || (this.callbacks[e] = []), this.callbacks[e][s] instanceof Array || (this.callbacks[e][s] = []), this.callbacks[e][s].push(t), this;
    }
    off(e, t = null) {
      if (typeof t == "function") for (const s in this.callbacks[e]) {
        const i = this.callbacks[e][s], a = i.indexOf(t);
        a !== -1 && i.splice(a, 1);
      }
      else this.callbacks[e] instanceof Array && delete this.callbacks[e];
      return this;
    }
    trigger(e, t = []) {
      if (this.callbacks[e] instanceof Array) for (const s in this.callbacks[e]) for (const i of this.callbacks[e][s]) i.apply(this, t);
      return this;
    }
  }
  function He(m, e, t) {
    return Math.max(e, Math.min(m, t));
  }
  function ss(m, e, t, s, i) {
    return (m - e) * (i - s) / (t - e) + s;
  }
  function L(m, e, t, s, i) {
    return He((m - e) * (i - s) / (t - e) + s, s < i ? s : i, s > i ? s : i);
  }
  function ye(m, e, t) {
    return (1 - t) * m + t * e;
  }
  function Gs(m, e, t) {
    const s = He((m - e) / (t - e), 0, 1);
    return s * s * (3 - 2 * s);
  }
  function sa(m, e) {
    return (m % e + e) % e;
  }
  function ia(m, e, t) {
    let s = (e - m + t) % t;
    return s > t / 2 && (s -= t), s;
  }
  function aa(m, e, t, s, i, a, n) {
    const o = t - m, l = s - e, r = m - i, h = e - a, c = o * o + l * l, u = 2 * (r * o + h * l), g = r * r + h * h - n * n, p = u * u - 4 * c * g;
    if (p < 0) return [];
    const v = [], x = Math.sqrt(p), S = (-u - x) / (2 * c), I = (-u + x) / (2 * c);
    return S >= 0 && S <= 1 && v.push({
      x: m + S * o,
      y: e + S * l
    }), I >= 0 && I <= 1 && p !== 0 && v.push({
      x: m + I * o,
      y: e + I * l
    }), v;
  }
  const na = 2 * Math.PI;
  var oa = function(m, e) {
    return (m % e + e) % e;
  }, ra = function(m) {
    return oa(m + Math.PI, na) - Math.PI;
  };
  function Nt(m, e) {
    return ra(e - m);
  }
  function js(m, e) {
    const t = m.x - e.x, s = m.y - e.y;
    return Math.sqrt(t * t + s * s);
  }
  function la(m, e, t, s) {
    const i = e.x - m.x, a = e.y - m.y, n = t.x - m.x, o = t.y - m.y, l = (n * i + o * a) / (i * i + a * a);
    let r = null;
    return l < 0 ? r = m : l > 1 ? r = e : r = {
      x: m.x + l * i,
      y: m.y + l * a
    }, js(r, t) <= s;
  }
  function ha(m, e) {
    let t = false;
    for (let s = 0, i = e.length - 1; s < e.length; i = s++) {
      const a = e[s].x, n = e[s].y, o = e[i].x, l = e[i].y;
      n > m.y != l > m.y && m.x < (o - a) * (m.y - n) / (l - n) + a && (t = !t);
    }
    return t;
  }
  function ca(m, e, t) {
    for (const s of t) if (js(s, m) <= e) return true;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], a = t[(s + 1) % t.length];
      if (la(i, a, m, e)) return true;
    }
    return !!ha(m, t);
  }
  class da {
    constructor() {
      this.events = new se(), this.setMappings(), this.setType(), this.setButtons(), this.setJoysticks();
    }
    setMappings() {
      this.mappings = {}, this.mappings.list = {}, this.mappings.list.standard = [
        {
          name: "cross",
          type: "button",
          action: "buttonRaw",
          index: 0
        },
        {
          name: "circle",
          type: "button",
          action: "buttonRaw",
          index: 1
        },
        {
          name: "square",
          type: "button",
          action: "buttonRaw",
          index: 2
        },
        {
          name: "triangle",
          type: "button",
          action: "buttonRaw",
          index: 3
        },
        {
          name: "l1",
          type: "button",
          action: "buttonRaw",
          index: 4
        },
        {
          name: "r1",
          type: "button",
          action: "buttonRaw",
          index: 5
        },
        {
          name: "l2",
          type: "button",
          action: "buttonRaw",
          index: 6
        },
        {
          name: "r2",
          type: "button",
          action: "buttonRaw",
          index: 7
        },
        {
          name: "select",
          type: "button",
          action: "buttonRaw",
          index: 8
        },
        {
          name: "start",
          type: "button",
          action: "buttonRaw",
          index: 9
        },
        {
          name: "l3",
          type: "button",
          action: "buttonRaw",
          index: 10
        },
        {
          name: "r3",
          type: "button",
          action: "buttonRaw",
          index: 11
        },
        {
          name: "up",
          type: "button",
          action: "buttonRaw",
          index: 12
        },
        {
          name: "down",
          type: "button",
          action: "buttonRaw",
          index: 13
        },
        {
          name: "left",
          type: "button",
          action: "buttonRaw",
          index: 14
        },
        {
          name: "right",
          type: "button",
          action: "buttonRaw",
          index: 15
        },
        {
          name: "left",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            0,
            1
          ]
        },
        {
          name: "right",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            2,
            3
          ]
        }
      ], this.mappings.list.windowsFirefoxPS5 = [
        {
          name: "cross",
          type: "button",
          action: "buttonRaw",
          index: 1
        },
        {
          name: "circle",
          type: "button",
          action: "buttonRaw",
          index: 2
        },
        {
          name: "square",
          type: "button",
          action: "buttonRaw",
          index: 0
        },
        {
          name: "triangle",
          type: "button",
          action: "buttonRaw",
          index: 3
        },
        {
          name: "l1",
          type: "button",
          action: "buttonRaw",
          index: 4
        },
        {
          name: "r1",
          type: "button",
          action: "buttonRaw",
          index: 5
        },
        {
          name: "l2",
          type: "button",
          action: "axisToTrigger",
          index: 3
        },
        {
          name: "r2",
          type: "button",
          action: "axisToTrigger",
          index: 4
        },
        {
          name: "select",
          type: "button",
          action: "buttonRaw",
          index: 8
        },
        {
          name: "start",
          type: "button",
          action: "buttonRaw",
          index: 9
        },
        {
          name: "l3",
          type: "button",
          action: "buttonRaw",
          index: 10
        },
        {
          name: "r3",
          type: "button",
          action: "buttonRaw",
          index: 11
        },
        {
          name: "up",
          type: "button",
          action: "axisToArrow",
          index: 9,
          angles: [
            -1,
            -0.7142857142857143,
            1
          ]
        },
        {
          name: "down",
          type: "button",
          action: "axisToArrow",
          index: 9,
          angles: [
            -0.1428571428571429,
            0.1428571428571428,
            0.4285714285714286
          ]
        },
        {
          name: "left",
          type: "button",
          action: "axisToArrow",
          index: 9,
          angles: [
            0.4285714285714286,
            0.7142857142857142,
            1
          ]
        },
        {
          name: "right",
          type: "button",
          action: "axisToArrow",
          index: 9,
          angles: [
            -0.7142857142857143,
            -0.4285714285714286,
            -0.1428571428571429
          ]
        },
        {
          name: "left",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            0,
            1
          ]
        },
        {
          name: "right",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            2,
            5
          ]
        }
      ], this.mappings.list.macOSFirefoxPS5 = [
        {
          name: "cross",
          type: "button",
          action: "buttonRaw",
          index: 1
        },
        {
          name: "circle",
          type: "button",
          action: "buttonRaw",
          index: 2
        },
        {
          name: "square",
          type: "button",
          action: "buttonRaw",
          index: 0
        },
        {
          name: "triangle",
          type: "button",
          action: "buttonRaw",
          index: 3
        },
        {
          name: "l1",
          type: "button",
          action: "buttonRaw",
          index: 4
        },
        {
          name: "r1",
          type: "button",
          action: "buttonRaw",
          index: 5
        },
        {
          name: "l2",
          type: "button",
          action: "axisToTrigger",
          index: 4
        },
        {
          name: "r2",
          type: "button",
          action: "axisToTrigger",
          index: 5
        },
        {
          name: "select",
          type: "button",
          action: "buttonRaw",
          index: 8
        },
        {
          name: "start",
          type: "button",
          action: "buttonRaw",
          index: 9
        },
        {
          name: "l3",
          type: "button",
          action: "buttonRaw",
          index: 10
        },
        {
          name: "r3",
          type: "button",
          action: "buttonRaw",
          index: 11
        },
        {
          name: "up",
          type: "button",
          action: "axisToArrow",
          index: 6,
          angles: [
            -1,
            -0.7142857142857143,
            1
          ]
        },
        {
          name: "down",
          type: "button",
          action: "axisToArrow",
          index: 6,
          angles: [
            -0.1428571428571429,
            0.1428571428571428,
            0.4285714285714286
          ]
        },
        {
          name: "left",
          type: "button",
          action: "axisToArrow",
          index: 6,
          angles: [
            0.4285714285714286,
            0.7142857142857142,
            1
          ]
        },
        {
          name: "right",
          type: "button",
          action: "axisToArrow",
          index: 6,
          angles: [
            -0.7142857142857143,
            -0.4285714285714286,
            -0.1428571428571429
          ]
        },
        {
          name: "left",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            0,
            1
          ]
        },
        {
          name: "right",
          type: "joystick",
          action: "axesToCircle",
          indexes: [
            2,
            3
          ]
        }
      ];
      const e = 0.2, t = 0.2;
      this.mappings.getNameForGamepad = (s) => s.mapping === "standard" ? "standard" : s.axes.length === 10 ? "windowsFirefoxPS5" : s.axes.length === 7 ? "macOSFirefoxPS5" : "standard", this.mappings.parseGamepad = (s) => {
        const i = this.mappings.getNameForGamepad(s), a = this.mappings.list[i], n = {};
        n.buttons = {}, n.joysticks = {};
        for (const o of a) {
          if (o.type === "button") {
            const l = {
              name: o.name,
              value: 0
            };
            if (n.buttons[o.name] = l, o.action === "buttonRaw") {
              const r = s.buttons[o.index];
              r && (l.value = r.value);
            } else if (o.action === "axisToTrigger") {
              const r = s.axes[o.index];
              r && (l.value = r * 0.5 + 0.5);
            } else if (o.action === "axisToArrow") {
              const r = s.axes[o.index];
              if (r) {
                const h = r;
                let c = false;
                for (const u of o.angles) Math.abs(u - h) < 0.1 && (c = true);
                c && (l.value = 1);
              }
            }
            l.pressed = l.value > t;
          }
          if (o.type === "joystick") {
            const l = {
              name: o.name,
              x: 0,
              y: 0,
              safeX: 0,
              safeY: 0,
              angle: 0,
              radius: 0,
              safeRadius: 0,
              active: false
            };
            n.joysticks[o.name] = l, o.action === "axesToCircle" && (l.x = s.axes[o.indexes[0]], l.safeX = L(Math.abs(l.x), e, 1, 0, 1) * Math.sign(l.x), l.y = s.axes[o.indexes[1]], l.safeY = L(Math.abs(l.y), e, 1, 0, 1) * Math.sign(l.y), l.angle = Math.atan2(l.y, l.x), l.radius = Math.hypot(l.y, l.x), l.safeRadius = L(l.radius, e, 1, 0, 1), l.active = l.radius > e);
          }
        }
        return n;
      };
    }
    setType() {
      this.type = "default", document.documentElement.classList.add(`is-gamepad-${this.type}`);
    }
    setButtons() {
      this.buttons = {};
      for (const e of this.mappings.list.standard) e.type === "button" && (this.buttons[e.name] = {
        name: e.name,
        value: 0,
        pressed: 0
      });
    }
    setJoysticks() {
      this.joysticks = {};
      for (const e of this.mappings.list.standard) e.type === "joystick" && (this.joysticks[e.name] = {
        name: e.name,
        x: 0,
        y: 0,
        radius: 0,
        angle: 0,
        active: false
      });
    }
    update() {
      let e = null;
      for (const i of navigator.getGamepads()) i !== null && (e = i);
      if (e === null) return;
      const t = this.mappings.parseGamepad(e);
      for (const i in this.buttons) {
        const a = this.buttons[i], n = t.buttons[i], o = a.value, l = a.pressed;
        Object.assign(a, n), n.pressed ? l || this.events.trigger("down", [
          a
        ]) : l && this.events.trigger("up", [
          a
        ]), n.value !== o && this.events.trigger("change", [
          a
        ]);
      }
      for (const i in this.joysticks) {
        const a = this.joysticks[i], n = t.joysticks[i];
        Object.assign(a, n);
      }
      let s = "default";
      if (/xbox/i.test(e.id) ? s = "xbox" : /playstation|dualshock|dualsense|ps\d/i.test(e.id) && (s = "playstation"), s !== this.type) {
        const i = this.type;
        this.type = s, document.documentElement.classList.remove(`is-gamepad-${i}`), document.documentElement.classList.add(`is-gamepad-${this.type}`), this.events.trigger("typeChange", [
          this.type
        ]);
      }
    }
  }
  const _ze = class _ze {
    constructor(e) {
      this.element = e, this.events = new se(), this.current = {
        x: 0,
        y: 0
      }, this.delta = {
        x: 0,
        y: 0
      }, this.upcoming = {
        x: 0,
        y: 0
      }, this.isDown = false, this.mode = _ze.MODE_MOUSE, this.upcomingDown = false, this.hasMoved = false, this.upcomingTouches = [], this.touches = [], this.pinch = {
        ratio: 1,
        ratioDelta: 0,
        baseDistance: 0,
        distance: 0,
        distanceDelta: 0
      }, this.element.addEventListener("mousemove", (t) => {
        t.preventDefault(), this.mode = _ze.MODE_MOUSE, this.upcoming.x = t.clientX, this.upcoming.y = t.clientY;
      }), this.element.addEventListener("mousedown", (t) => {
        t.preventDefault(), this.mode = _ze.MODE_MOUSE, this.upcomingDown = true, this.current.x = t.clientX, this.current.y = t.clientY, this.upcoming.x = t.clientX, this.upcoming.y = t.clientY;
      }), addEventListener("mouseup", (t) => {
        t.preventDefault(), this.upcomingDown = false;
      }), this.element.addEventListener("touchmove", (t) => {
        this.mode = _ze.MODE_TOUCH, this.upcomingTouches = [
          ...t.touches
        ];
        let s = 0, i = 0;
        for (const a of this.upcomingTouches) s += a.clientX, i += a.clientY;
        s /= this.upcomingTouches.length, i /= this.upcomingTouches.length, this.upcoming.x = s, this.upcoming.y = i;
      }, {
        passive: true
      }), this.element.addEventListener("touchstart", (t) => {
        this.mode = _ze.MODE_TOUCH, this.upcomingDown = true, this.upcomingTouches = [
          ...t.touches
        ];
        let s = 0, i = 0;
        for (const a of this.upcomingTouches) s += a.clientX, i += a.clientY;
        s /= this.upcomingTouches.length, i /= this.upcomingTouches.length, this.current.x = s, this.current.y = i, this.upcoming.x = s, this.upcoming.y = i;
      }, {
        passive: true
      }), this.element.addEventListener("touchend", (t) => {
        t.preventDefault(), this.upcomingTouches = [
          ...t.touches
        ], (this.upcomingTouches.length === 0 || this.upcomingTouches.length === 1) && (this.upcomingDown = false);
      }), this.element.addEventListener("contextmenu", (t) => {
        t.preventDefault();
      });
    }
    update() {
      if (this.delta.x = this.upcoming.x - this.current.x, this.delta.y = this.upcoming.y - this.current.y, this.current.x = this.upcoming.x, this.current.y = this.upcoming.y, this.upcomingTouches.length >= 2) {
        let e = 0;
        for (let s = 0; s < this.upcomingTouches.length; s++) for (let i = s + 1; i < this.upcomingTouches.length; i++) {
          const a = this.upcomingTouches[s].clientX - this.upcomingTouches[i].clientX, n = this.upcomingTouches[s].clientY - this.upcomingTouches[i].clientY, o = Math.sqrt(a * a, n * n);
          o > e && (e = o);
        }
        this.pinch.distanceDelta = e - this.pinch.distance, this.pinch.distance = e, this.upcomingTouches.length > this.touches.length && (this.pinch.distanceDelta = 0, this.pinch.baseDistance = this.pinch.distance);
        const t = this.pinch.distance / this.pinch.baseDistance;
        t !== this.pinch.ratio && (this.pinch.ratioDelta = t - this.pinch.ratio, this.pinch.ratio = t, this.events.trigger("pinch"));
      } else this.pinch.baseDistance = 0, this.pinch.distance = 0, this.pinch.distanceDelta = 0;
      this.touches = [
        ...this.upcomingTouches
      ], this.hasMoved = this.delta.x !== 0 || this.delta.y !== 0, this.upcomingDown !== this.isDown && (this.isDown = this.upcomingDown, this.isDown ? this.events.trigger("down") : this.events.trigger("up")), this.hasMoved && this.events.trigger("move");
    }
  };
  __publicField(_ze, "MODE_MOUSE", 1);
  __publicField(_ze, "MODE_TOUCH", 2);
  let ze = _ze;
  class ua {
    constructor() {
      this.events = new se(), this.pressed = [], window.addEventListener("blur", () => {
        for (const e of this.pressed) this.events.trigger("up", [
          e
        ]);
        this.pressed = [];
      }), addEventListener("keydown", (e) => {
        document.activeElement.matches("input, textarea, [contenteditable]") && e.code !== "Escape" || (this.pressed.push(e.code, e.key), this.events.trigger("down", [
          e.code,
          e.key
        ]));
      }), addEventListener("keyup", (e) => {
        const t = this.pressed.indexOf(e.code);
        t !== -1 && this.pressed.splice(t, 1);
        const s = this.pressed.indexOf(e.key);
        s !== -1 && this.pressed.splice(s, 1), this.events.trigger("up", [
          e.code,
          e.key
        ]);
      });
    }
  }
  class ma {
    constructor() {
      this.events = new se(), this.active = false, this.element = document.querySelector(".js-touch-buttons"), this.overlay = this.element.querySelector(".js-overlay"), this.list = /* @__PURE__ */ new Set(), this.setItems();
    }
    setItems() {
      this.items = /* @__PURE__ */ new Map();
      const e = this.element.querySelectorAll(".js-button");
      for (const t of e) {
        const s = {
          name: t.dataset.name,
          visible: false,
          element: t
        };
        this.items.set(s.name, s), s.element.addEventListener("click", () => {
          this.events.trigger("click", [
            s.name
          ]), this.events.trigger(s.name);
        });
      }
    }
    updateItems() {
      let e = 0;
      this.items.forEach((t) => {
        this.list.has(t.name) ? (t.visible || (t.visible = true, t.element.classList.add("is-visible")), e++) : t.visible && (t.visible = false, t.element.classList.remove("is-visible"));
      }), e ? this.overlay.classList.add("is-visible") : this.overlay.classList.remove("is-visible");
    }
    addItems(e = []) {
      for (const t of e) this.list.add(t);
      this.updateItems();
    }
    removeItems(e = []) {
      for (const t of e) this.list.delete(t);
      this.updateItems();
    }
    clearItems() {
      this.list.clear(), this.updateItems();
    }
    activate() {
      this.active || (this.active = true, this.element.classList.add("is-active"));
    }
    deactivate() {
      this.active && (this.active = false, this.element.classList.remove("is-active"));
    }
  }
  class ga {
    constructor() {
      this.events = new se(), addEventListener("wheel", (e) => {
        const t = ti(e);
        this.events.trigger("roll", [
          e.shiftKey ? t.spinX : t.spinY
        ]);
      }, {
        passive: true
      });
    }
  }
  class pa {
    constructor() {
      this.game = T.getInstance(), this.events = new se(), this.position = new y(), this.raycaster = new Kt(), this.active = false, this.animated = false, this.angle = 0, this.progress = 0, this.smallestAngle = 0, this.targetAngle = 0, this.forward = true, this.inRadiusLow = false, this.setMeshes();
    }
    setMeshes() {
      this.group = new at(), this.group.visible = false, this.game.scene.add(this.group), this.edgesThickness = 0.1, this.outlineThickness = 0.2, this.progressRadiusLow = 2, this.progressRadiusHigh = 4.5, this.forwardAmplitude = Math.PI * 1.5;
      const e = new ps(this.progressRadiusLow - this.edgesThickness - this.outlineThickness, this.progressRadiusHigh + this.edgesThickness + this.outlineThickness, 20, 1);
      e.rotateX(-Math.PI * 0.5), this.uniforms = {}, this.uniforms.position = d(E()), this.uniforms.progress = d(1), this.uniforms.forward = d(1), this.uniforms.progressStartAngle = d(0), this.uniforms.progressEndAngle = d(0), this.uniforms.colorMultiplier = d(1);
      const t = new O({
        transparent: true,
        wireframe: false,
        depthWrite: false
      });
      t.outputNode = b(() => {
        const s = w(Z.xz), i = ft(s.y, s.x), a = jt(i).sub(this.forwardAmplitude * 0.5).toVar();
        De(this.uniforms.forward.lessThan(0.5), () => {
          a.assign(a.negate());
        });
        const n = _(a, 0), o = jt(s.length().sub(this.progressRadiusLow)).toVar(), l = jt(s.length().sub(this.progressRadiusHigh)).toVar(), r = _(o, this.edgesThickness / 2).toVar(), h = _(o, this.outlineThickness / 2).toVar(), c = _(l, this.edgesThickness / 2).mul(n).toVar(), u = _(l, this.outlineThickness / 2).toVar(), g = ge(r, c), p = ge(h, u), v = s.length().sub(this.progressRadiusLow).sub(this.uniforms.progress.mul(this.progressRadiusHigh - this.progressRadiusLow - this.outlineThickness / 2)).toVar(), x = s.length().sub(this.progressRadiusLow + this.outlineThickness / 2).negate();
        v.assign(ge(v, x));
        const S = _(v, 0).toVar(), I = F(0).toVar();
        De(i.greaterThan(this.uniforms.progressStartAngle).and(i.lessThan(this.uniforms.progressEndAngle)), () => {
          I.assign(1);
        }), S.assign(S.mul(I));
        const B = _(v, this.outlineThickness / 4).mul(n), U = ge(p, B), q = ge(g, S).toVar();
        U.lessThan(1e-5).discard();
        const G = U.mul(0.35).add(q.mul(0.75));
        return C(E(q).mul(this.uniforms.colorMultiplier), G);
      })(), this.mesh = new D(e, t), this.group.add(this.mesh);
    }
    setCoordinates(e, t, s, i) {
      const a = Qe(t - 0.25, 0.1, 0.65);
      this.position.set(e, a, s), this.group.position.copy(this.position), this.uniforms.position.value.copy(this.position), this.angle = i, this.mesh.rotation.y = -i;
    }
    updateFromPointer(e, t) {
      if (t.trigger === "start" ? e.touches.length == 1 && (this.active = true) : t.trigger === "end" && (this.active = false, this.inRadiusLow && this.events.trigger("tap"), this.inRadiusLow = false), (t.trigger === "start" || t.trigger === "change") && this.active) if (e.touches.length == 1) {
        const s = new H(e.current.x / this.game.viewport.width * 2 - 1, -(e.current.y / this.game.viewport.height * 2 - 1));
        this.raycaster.setFromCamera(s, this.game.view.defaultCamera);
        const i = new Xt(new y(0, 1, 0), -this.position.y), a = new y();
        this.raycaster.ray.intersectPlane(i, a);
        const n = this.position.distanceTo(a);
        this.targetAngle = Math.atan2(a.z - this.position.z, a.x - this.position.x), this.progress = Qe((n - this.progressRadiusLow) / (this.progressRadiusHigh - this.progressRadiusLow), 0, 1), this.uniforms.progress.value = this.progress, t.trigger === "start" ? this.progress === 0 && (this.inRadiusLow = true) : t.trigger === "change" && this.progress > 0 && (this.inRadiusLow = false);
      } else this.active = false;
    }
    jump() {
      this.animated = true, f.to(this.mesh.position, {
        y: 1,
        duration: 0.1,
        ease: "power2.out",
        overwrite: true,
        onComplete: () => {
          f.to(this.mesh.position, {
            y: 0,
            duration: 0.6,
            ease: "power4.inOut",
            overwrite: true,
            onComplete: () => {
              this.animated = false;
            }
          });
        }
      });
    }
    update() {
      if (this.active || this.animated) {
        this.smallestAngle = Nt(this.angle, this.targetAngle);
        let e = Math.abs(this.smallestAngle);
        this.forward = e < this.forwardAmplitude / 2, this.uniforms.forward.value = this.forward ? 1 : 0, this.forward || (this.smallestAngle = Nt(this.angle + Math.PI, this.targetAngle)), this.forward ? (this.uniforms.progressStartAngle.value = Math.min(0, this.smallestAngle), this.uniforms.progressEndAngle.value = Math.max(0, this.smallestAngle)) : this.smallestAngle > 0 ? (this.uniforms.progressStartAngle.value = -Math.PI, this.uniforms.progressEndAngle.value = -Math.PI + this.smallestAngle) : (this.uniforms.progressStartAngle.value = Math.PI + this.smallestAngle, this.uniforms.progressEndAngle.value = Math.PI), this.uniforms.colorMultiplier.value = this.progress === 1 ? 1.5 : 1, this.group.visible = true;
      } else this.group.visible = false;
    }
  }
  class fa extends Set {
    constructor(e, ...t) {
      super(...t), this.callback = e;
    }
    add(e) {
      const t = this.has(e), s = super.add(e);
      return t || this.callback({
        type: "add",
        value: e
      }), s;
    }
    delete(e) {
      const t = this.has(e), s = super.delete(e);
      return t && this.callback({
        type: "delete",
        value: e
      }), s;
    }
    clear() {
      const e = this.size > 0, t = [
        ...this
      ];
      super.clear(), e && this.callback({
        type: "clear",
        previousValues: t
      });
    }
  }
  const _K = class _K {
    constructor(e = [], t = []) {
      this.game = T.getInstance(), this.events = new se(), this.actions = /* @__PURE__ */ new Map(), this.filters = new fa((s) => {
        if (s.type === "add") document.documentElement.classList.add(`input-filter-${s.value}`);
        else if (s.type === "delete") document.documentElement.classList.remove(`input-filter-${s.value}`);
        else if (s.type === "clear") for (const i of s.previousValues) document.documentElement.classList.remove(`input-filter-${i}`);
      }), this.mode = _K.MODE_MOUSEKEYBOARD, this.setKeyboard(), this.setGamepad(), this.setPointer(), this.setWheel(), this.setInteractiveButtons(), this.setNipple(), this.addActions(e);
      for (const s of t) this.filters.add(s);
      this.game.ticker.events.on("tick", () => {
        this.update();
      }, 0), document.documentElement.classList.add("is-mode-mouse-keyboard");
    }
    setKeyboard() {
      this.keyboard = new ua(), this.keyboard.events.on("down", (e, t) => {
        this.updateMode(_K.MODE_MOUSEKEYBOARD), this.start(`Keyboard.${e}`), this.start(`Keyboard.${t}`);
      }), this.keyboard.events.on("up", (e, t) => {
        this.updateMode(_K.MODE_MOUSEKEYBOARD), this.end(`Keyboard.${e}`), this.end(`Keyboard.${t}`);
      });
    }
    setGamepad() {
      this.gamepad = new da(), this.gamepad.events.on("down", (e) => {
        this.updateMode(_K.MODE_GAMEPAD), this.start(`Gamepad.${e.name}`, e.value);
      }), this.gamepad.events.on("up", (e) => {
        this.updateMode(_K.MODE_GAMEPAD), this.end(`Gamepad.${e.name}`);
      }), this.gamepad.events.on("typeChange", (e) => {
        this.updateMode(_K.MODE_GAMEPAD);
      }), this.gamepad.events.on("change", (e) => {
        this.updateMode(_K.MODE_GAMEPAD), this.change(`Gamepad.${e.name}`, e.value);
      }), this.gamepad.events.on("joystickChange", (e) => {
        this.change(`Gamepad.joystick${e.name.charAt(0).toUpperCase() + e.name.slice(1)}`, {
          x: e.x,
          y: e.y,
          radius: e.radius,
          active: e.active
        });
      });
    }
    setPointer() {
      this.pointer = new ze(this.game.canvasElement), this.pointer.events.on("down", () => {
        this.updateMode(this.pointer.mode === ze.MODE_MOUSE ? _K.MODE_MOUSEKEYBOARD : _K.MODE_TOUCH), this.start("Pointer.any", {
          x: this.pointer.current.x,
          y: this.pointer.current.y
        });
      }), this.pointer.events.on("up", () => {
        this.updateMode(this.pointer.mode === ze.MODE_MOUSE ? _K.MODE_MOUSEKEYBOARD : _K.MODE_TOUCH), this.end("Pointer.any", {
          x: this.pointer.current.x,
          y: this.pointer.current.y
        });
      }), this.pointer.events.on("move", () => {
        this.change("Pointer.any", {
          x: this.pointer.current.x,
          y: this.pointer.current.y
        });
      });
    }
    setWheel() {
      this.wheel = new ga(), this.wheel.events.on("roll", (e) => {
        this.updateMode(_K.MODE_MOUSEKEYBOARD), this.start("Wheel.roll", e, false);
      });
    }
    setInteractiveButtons() {
      this.interactiveButtons = new ma();
    }
    setNipple() {
      this.nipple = new pa(), this.addActions([
        {
          name: "nipplePointer",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Pointer.any"
          ]
        }
      ]), this.events.on("nipplePointer", (e) => {
        this.mode === _K.MODE_TOUCH && this.nipple.updateFromPointer(this.pointer, e);
      });
    }
    addActions(e) {
      for (const t of e) {
        const s = {
          ...t
        };
        s.active = false, s.value = 0, s.trigger = null, s.activeKeys = /* @__PURE__ */ new Set(), this.actions.set(t.name, s);
      }
    }
    checkCategory(e) {
      if (this.filters.size === 0 || e.categories.length === 0) return true;
      for (const t of e.categories) if (this.filters.has(t)) return true;
      return false;
    }
    start(e, t = 1, s = true) {
      const i = [
        ...this.actions.values()
      ].filter((a) => a.keys.indexOf(e) !== -1);
      for (const a of i) a && this.checkCategory(a) && (a.value = t, a.activeKeys.add(e), a.trigger = "start", s ? a.active || (a.active = true, this.events.trigger("actionStart", [
        a
      ]), this.events.trigger(a.name, [
        a
      ])) : (this.events.trigger("actionStart", [
        a
      ]), this.events.trigger(a.name, [
        a
      ])));
    }
    end(e, t = 0) {
      const s = [
        ...this.actions.values()
      ].filter((i) => i.keys.indexOf(e) !== -1);
      for (const i of s) i && i.active && (i.activeKeys.delete(e), i.activeKeys.size === 0 && (i.active = false, i.value = t, i.trigger = "end", this.events.trigger("actionEnd", [
        i
      ]), this.events.trigger(i.name, [
        i
      ])));
    }
    change(e, t = 1) {
      const s = [
        ...this.actions.values()
      ].filter((i) => i.keys.indexOf(e) !== -1);
      for (const i of s) if (i && this.checkCategory(i)) {
        let a = false;
        if (typeof t == "number") i.value !== t && (a = true);
        else if (typeof t == "object") {
          const n = Object.keys(t);
          for (const o of n) i.value[o] !== t[o] && (a = true);
        }
        a && (i.value = t, i.trigger = "change", this.events.trigger("actionChange", [
          i
        ]), this.events.trigger(i.name, [
          i
        ]));
      }
    }
    updateMode(e) {
      if (e === this.mode) return;
      const t = this.mode;
      this.mode = e, this.mode === _K.MODE_TOUCH ? this.interactiveButtons.activate() : this.interactiveButtons.deactivate();
      const s = [
        null,
        "mouse-keyboard",
        "gamepad",
        "touch"
      ];
      document.documentElement.classList.remove(`is-mode-${s[t]}`), document.documentElement.classList.add(`is-mode-${s[this.mode]}`), this.events.trigger("modeChange", [
        this.mode
      ]);
    }
    update() {
      this.pointer.update(), this.gamepad.update(), this.nipple.update();
    }
  };
  __publicField(_K, "MODE_MOUSEKEYBOARD", 1);
  __publicField(_K, "MODE_GAMEPAD", 2);
  __publicField(_K, "MODE_TOUCH", 3);
  let K = _K;
  class va {
    constructor() {
      this.game = T.getInstance(), this.world = new this.game.RAPIER.World({
        x: 0,
        y: -9.81,
        z: 0
      }), this.eventQueue = new this.game.RAPIER.EventQueue(true), this.physicals = [], this.groups = {
        all: 1,
        object: 2,
        bumper: 4
      }, this.categories = {
        floor: this.groups.all << 16 | this.groups.all,
        object: (this.groups.all | this.groups.object) << 16 | (this.groups.all | this.groups.bumper),
        bumper: this.groups.bumper << 16 | this.groups.object
      }, this.frictionRules = {
        average: this.game.RAPIER.CoefficientCombineRule.Average,
        min: this.game.RAPIER.CoefficientCombineRule.Min,
        max: this.game.RAPIER.CoefficientCombineRule.Max,
        multiply: this.game.RAPIER.CoefficientCombineRule.Multiply
      }, this.game.ticker.events.on("tick", () => {
        this.update();
      }, 3), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u2B07\uFE0F Physics",
        expanded: false
      }), this.debugPanel.addBinding(this.world.gravity, "y", {
        min: -20,
        max: 20,
        step: 0.01
      }));
    }
    getBinaryGroups(e) {
      let t = 0;
      for (const s of e) t |= this.groups[s];
      return t;
    }
    getPhysical(e) {
      const t = {};
      t.waterGravityMultiplier = typeof e.waterGravityMultiplier < "u" ? e.waterGravityMultiplier : -1.5, t.linearDamping = typeof e.linearDamping < "u" ? e.linearDamping : 0.1, t.angularDamping = typeof e.angularDamping < "u" ? e.angularDamping : 0.1;
      let s = this.game.RAPIER.RigidBodyDesc;
      e.type === "dynamic" || typeof e.type > "u" ? (t.type = "dynamic", s = s.dynamic()) : e.type === "fixed" ? (t.type = "fixed", s = s.fixed()) : e.type === "kinematicPositionBased" ? (t.type = "kinematicPositionBased", s = s.kinematicPositionBased()) : e.type === "kinematicVelocityBased" && (t.type = "kinematicVelocityBased", s = s.kinematicVelocityBased()), typeof e.position < "u" && s.setTranslation(e.position.x, e.position.y, e.position.z), typeof e.rotation < "u" && s.setRotation(e.rotation), typeof e.canSleep < "u" && s.setCanSleep(e.canSleep), s.setLinearDamping(t.linearDamping), s.setAngularDamping(t.angularDamping), typeof e.sleeping < "u" && s.setSleeping(e.sleeping), typeof e.enabled < "u" && s.setEnabled(e.enabled), t.body = this.world.createRigidBody(s);
      let i = {};
      typeof e.collidersOverwrite < "u" && (i = e.collidersOverwrite), t.colliders = [];
      for (let a of e.colliders) {
        let n = this.game.RAPIER.ColliderDesc;
        a = {
          ...a,
          ...i
        }, a.shape === "cuboid" && (n = n.cuboid(...a.parameters)), a.shape === "ball" && (n = n.ball(...a.parameters)), a.shape === "cylinder" ? n = n.cylinder(...a.parameters) : a.shape === "trimesh" ? n = n.trimesh(...a.parameters) : a.shape === "hull" ? n = n.convexHull(...a.parameters) : a.shape === "heightfield" && (n = n.heightfield(...a.parameters)), a.position && (n = n.setTranslation(a.position.x, a.position.y, a.position.z)), a.quaternion && (n = n.setRotation(a.quaternion)), n = n.setDensity(0.1), typeof a.mass < "u" && (typeof a.centerOfMass < "u" ? n = n.setMassProperties(a.mass, a.centerOfMass, {
          x: 1,
          y: 1,
          z: 1
        }, new ot().setFromAxisAngle(new dt(0, 1, 0), -Math.PI * 0)) : n = n.setMass(a.mass)), typeof e.mass < "u" && (n = n.setMass(e.mass / e.colliders.length)), typeof e.friction < "u" ? n = n.setFriction(e.friction) : typeof a.friction < "u" ? n = n.setFriction(a.friction) : n = n.setFriction(0.2), typeof e.frictionRule < "u" && (n = n.setFrictionCombineRule(this.frictionRules[e.frictionRule])), typeof e.restitution < "u" ? n = n.setRestitution(e.restitution) : typeof a.restitution < "u" ? n = n.setRestitution(a.restitution) : n = n.setRestitution(0.15);
        let o = "object";
        typeof e.category < "u" ? o = e.category : typeof a.category < "u" && (o = a.category), n = n.setCollisionGroups(this.categories[o]), (typeof e.onCollision == "function" || typeof e.contactThreshold < "u") && (n = n.setActiveEvents(this.game.RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS), n = n.setContactForceEventThreshold(typeof e.contactThreshold < "u" ? e.contactThreshold : 15), typeof e.onCollision == "function" && (t.onCollision = e.onCollision));
        const l = this.world.createCollider(n, t.body);
        t.colliders.push(l);
      }
      return t.initialState = {
        position: {
          x: t.body.translation().x,
          y: t.body.translation().y,
          z: t.body.translation().z
        },
        rotation: t.body.rotation(),
        sleeping: t.body.isSleeping()
      }, this.physicals.push(t), t;
    }
    update() {
      this.world.timestep = this.game.ticker.deltaScaled;
      for (const e of this.physicals) Math.max(-e.body.translation().y, this.game.water.surfaceElevation) > 0 ? (e.body.setLinearDamping(1), e.body.setAngularDamping(1)) : (e.body.setLinearDamping(e.linearDamping), e.body.setAngularDamping(e.angularDamping));
      this.world.step(this.eventQueue), this.eventQueue.drainContactForceEvents((e) => {
        var _a2, _b, _c, _d, _e2, _f;
        const t = this.world.getCollider(e.collider1()), s = this.world.getCollider(e.collider2()), i = t.parent(), a = s.parent(), n = (_c = (_b = (_a2 = i.userData) == null ? void 0 : _a2.object) == null ? void 0 : _b.physical) == null ? void 0 : _c.onCollision, o = (_f = (_e2 = (_d = a.userData) == null ? void 0 : _d.object) == null ? void 0 : _e2.physical) == null ? void 0 : _f.onCollision;
        if (typeof n == "function" || typeof o == "function") {
          const l = i.mass(), r = a.mass(), h = e.maxForceMagnitude() / (l + r), c = i.translation(), u = a.translation(), g = c.x === 0 && c.y === 0 && c.z === 0 ? u : c;
          typeof n == "function" && n(h, g), typeof o == "function" && o(h, g);
        }
      });
    }
  }
  class ba extends oi {
    static get type() {
      return "CheapDOFNode";
    }
    constructor(e) {
      super("vec4"), this.textureNode = e, this.size = d(2), this.separation = d(1.25), this.start = d(0.2), this.end = d(0.5), this.repeats = d(25), this.amount = d(3e-3);
    }
    setup() {
      return b(() => {
        const t = k().y.sub(0.5).abs().smoothstep(this.start, this.end), s = fs(this.textureNode, t.mul(this.amount), {
          repeats: this.repeats,
          premultipliedAlpha: true
        });
        return A(this.textureNode, s, t);
      })();
    }
  }
  const ya = (m) => ai(new ba(ni(m)));
  class wa {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F4F8} Rendering",
        expanded: false
      }));
    }
    start() {
      this.setStats(), this.game.ticker.events.on("tick", () => {
        this.render();
      }, 998), this.game.viewport.events.on("change", () => {
        this.resize();
      });
    }
    async setRenderer() {
      return this.renderer = new ri({
        canvas: this.game.canvasElement,
        powerPreference: "high-performance",
        forceWebGL: false,
        antialias: this.game.viewport.pixelRatio < 2
      }), this.renderer.setSize(this.game.viewport.width, this.game.viewport.height), this.renderer.setPixelRatio(this.game.viewport.pixelRatio), this.renderer.sortObjects = false, this.renderer.domElement.classList.add("experience"), this.renderer.shadowMap.enabled = true, this.renderer.setOpaqueSort((e, t) => e.renderOrder - t.renderOrder), this.renderer.setTransparentSort((e, t) => e.renderOrder - t.renderOrder), location.hash.match(/inspector/i) && (this.renderer.inspector = new li()), this.renderer.setAnimationLoop((e) => {
        this.game.ticker.update(e);
      }), this.renderer.init();
    }
    setPostprocessing() {
      this.postProcessing = new hi(this.renderer);
      const e = ci(this.game.scene, this.game.view.camera), t = e.getTextureNode("output");
      this.bloomPass = di(t), this.bloomPass._nMips = this.game.quality.level === 0 ? 5 : 2, this.bloomPass.threshold.value = 1, this.bloomPass.strength.value = 0.25, this.bloomPass.smoothWidth.value = 1, this.cheapDOFPass = ya(ui(e));
      const s = (i) => {
        i === 0 ? this.postProcessing.outputNode = this.cheapDOFPass.add(this.bloomPass) : i === 1 && (this.postProcessing.outputNode = t.add(this.bloomPass)), this.postProcessing.needsUpdate = true;
      };
      if (s(this.game.quality.level), this.game.quality.events.on("change", s), this.game.debug.active) {
        const i = this.debugPanel.addFolder({
          title: "bloom",
          expanded: false
        });
        i.addBinding(this.bloomPass.threshold, "value", {
          label: "threshold",
          min: 0,
          max: 2,
          step: 0.01
        }), i.addBinding(this.bloomPass.strength, "value", {
          label: "strength",
          min: 0,
          max: 3,
          step: 0.01
        }), i.addBinding(this.bloomPass.radius, "value", {
          label: "radius",
          min: 0,
          max: 1,
          step: 0.01
        }), i.addBinding(this.bloomPass.smoothWidth, "value", {
          label: "smoothWidth",
          min: 0,
          max: 1,
          step: 0.01
        });
        const a = this.debugPanel.addFolder({
          title: "blur",
          expanded: true
        });
        a.addBinding(this.cheapDOFPass.start, "value", {
          label: "start",
          min: 0,
          max: 0.5,
          step: 1e-3
        }), a.addBinding(this.cheapDOFPass.end, "value", {
          label: "end",
          min: 0,
          max: 0.5,
          step: 1e-3
        }), a.addBinding(this.cheapDOFPass.repeats, "value", {
          label: "repeats",
          min: 1,
          max: 100,
          step: 1
        }), a.addBinding(this.cheapDOFPass.amount, "value", {
          label: "amount",
          min: 0,
          max: 0.02,
          step: 1e-4
        });
      }
    }
    setStats() {
      if (location.hash.match(/stats/i) && (this.stats = {}, this.stats.feed = {}, this.stats.update = () => {
        this.stats.feed.drawCalls = this.renderer.info.render.drawCalls.toLocaleString(), this.stats.feed.triangles = this.renderer.info.render.triangles.toLocaleString(), this.stats.feed.geometries = this.renderer.info.memory.geometries.toLocaleString(), this.stats.feed.textures = this.renderer.info.memory.textures.toLocaleString();
      }, this.stats.update(), this.game.debug.active)) {
        const e = this.debugPanel.addFolder({
          title: "Stats",
          expanded: true
        });
        for (const t in this.stats.feed) e.addBinding(this.stats.feed, t, {
          readonly: true
        });
      }
    }
    resize() {
      this.renderer.setSize(this.game.viewport.width, this.game.viewport.height), this.renderer.setPixelRatio(this.game.viewport.pixelRatio);
    }
    async render() {
      var _a2;
      if (window.__hexoBg) {
        this.hexoBgLastRender = this.hexoBgLastRender || 0;
        const e = performance.now();
        if (e - this.hexoBgLastRender < 1e3 / 30) return;
        this.hexoBgLastRender = e;
      }
      this.postProcessing.render(), this.stats && this.stats.update(), ((_a2 = this.game.monitoring) == null ? void 0 : _a2.stats) && (this.game.rendering.renderer.resolveTimestampsAsync(mi.RENDER), this.game.monitoring.stats.update());
    }
  }
  class xa {
    constructor() {
      this.game = T.getInstance(), this.loaders = /* @__PURE__ */ new Map(), this.cache = /* @__PURE__ */ new Map();
    }
    getLoader(e) {
      if (this.loaders.has(e)) return this.loaders.get(e);
      let t = null;
      if (e === "texture") t = new gi();
      else if (e === "textureKtx") t = new pi(), t.setTranscoderPath("./basis/"), t.detectSupport(this.game.rendering.renderer);
      else if (e === "draco") t = new fi(), t.setDecoderPath("./draco/"), t.preload();
      else if (e === "gltf") {
        const s = this.getLoader("draco"), i = this.getLoader("textureKtx");
        t = new vi(), t.setDRACOLoader(s), t.setKTX2Loader(i);
      }
      return this.loaders.set(e, t), t;
    }
    load(e, t = null) {
      return new Promise((s, i) => {
        let a = e.length;
        const n = {}, o = () => {
          a--, typeof t == "function" && t(a, e.length), a === 0 && s(n);
        }, l = (h, c) => {
          typeof h[3] < "u" && h[3](c), n[h[0]] = c, this.cache.set(h[1], c);
        }, r = (h) => {
          console.log(`Resources > Couldn't load file ${h[1]}`), i(h[1]);
        };
        for (const h of e) this.cache.has(h[1]) ? (n[h[0]] = this.cache.get(h[1]), o()) : this.getLoader(h[2]).load(h[1], (u) => {
          l(h, u), o();
        }, void 0, r);
      });
    }
  }
  class Pa {
    constructor() {
      this.game = T.getInstance(), this.elapsed = 0, this.delta = 1 / 60, this.maxDelta = 1 / 30, this.scale = 2, this.deltaScaled = this.delta * this.scale, this.elapsedScaled = 0, this.waits = [], this.lastDeltas = [], this.elapsedUniform = d(this.elapsed), this.deltaUniform = d(this.delta), this.elapsedScaledUniform = d(this.elapsedScaled), this.deltaScaledUniform = d(this.deltaScaled), this.events = new se();
    }
    update(e) {
      const t = e / 1e3;
      this.delta = Math.min(t - this.elapsed, this.maxDelta), this.elapsed = t, this.deltaScaled = this.delta * this.scale, this.elapsedScaled += this.deltaScaled, this.lastDeltas.unshift(this.delta);
      const s = this.lastDeltas.length, i = 30;
      s > i && this.lastDeltas.splice(i, s - i), this.deltaAverage = this.lastDeltas.reduce((a, n) => a + n) / s, this.elapsedUniform.value = this.elapsed, this.deltaUniform.value = this.delta, this.elapsedScaledUniform.value = this.elapsedScaled, this.deltaScaledUniform.value = this.deltaScaled;
      for (let a = 0; a < this.waits.length; a++) {
        const n = this.waits[a];
        n[0]--, n[0] === 0 && (n[1](), this.waits.splice(a, 1), a--);
      }
      this.events.trigger("tick");
    }
    wait(e, t) {
      this.waits.push([
        e,
        t
      ]);
    }
  }
  class Sa {
    constructor() {
      this.game = T.getInstance(), this.defaultScale = 2, this._scale = this.defaultScale, this.game.ticker.scale = this.scale, f.globalTimeline.timeScale(this.scale), this.setBulletTime(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 0), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u23F1\uFE0F Time",
        expanded: false
      }), this.debugPanel.addBinding(this, "defaultScale", {
        min: 0,
        max: 5,
        step: 0.01
      }), this.debugPanel.addButton({
        title: "bullet time"
      }).on("click", () => {
        this.bulletTime.activate();
      }));
    }
    setBulletTime() {
      this.bulletTime = {}, this.bulletTime.active = false, this.bulletTime.endTime = null, this.bulletTime.scale = 0.5, this.bulletTime.progress = 0, this.bulletTime.inSpeed = 3, this.bulletTime.outSpeed = 0.3, this.bulletTime.activate = (e = 1.5) => {
        if (this.bulletTime.active) {
          const t = Date.now() + e * 1e3;
          this.bulletTime.endTime = Math.max(this.bulletTime.endTime, t);
        } else this.bulletTime.endTime = Date.now() + e * 1e3;
        this.bulletTime.active = true;
      };
    }
    update() {
      Date.now() > this.bulletTime.endTime && (this.bulletTime.active = false);
      const e = this.bulletTime.active ? this.bulletTime.inSpeed : this.bulletTime.outSpeed;
      this.bulletTime.progress += (this.bulletTime.active ? 1 : -1) * this.game.ticker.delta * e, this.bulletTime.progress = He(this.bulletTime.progress, 0, 1), this.scale = ss(this.bulletTime.progress, 0, 1, this.defaultScale, this.bulletTime.scale);
    }
    set scale(e) {
      this._scale = e, this.game.ticker.scale = this.scale, f.globalTimeline.timeScale(e);
    }
    get scale() {
      return this._scale;
    }
  }
  const _be = class _be {
    constructor() {
      this.game = T.getInstance(), this.state = _be.STATE_DEFAULT, this.accelerating = 0, this.steering = 0, this.boosting = 0, this.braking = 0, this.suspensions = [
        "low",
        "low",
        "low",
        "low"
      ];
      const e = this.game.respawns.getDefault();
      this.position = e.position.clone(), this.basePosition = this.position.clone(), this.position2 = new H(this.position.x, this.position.z), this.rotationY = 0, this.setSounds(), this.setInputs(), this.setDistanceDriven(), this.setUnstuck(), this.setFlip(), this.setTimePlayed(), this.game.physicalVehicle.chassis.physical.initialState.position.x = e.position.x, this.game.physicalVehicle.chassis.physical.initialState.position.y = e.position.y, this.game.physicalVehicle.chassis.physical.initialState.position.z = e.position.z, this.game.physicalVehicle.moveTo(e.position, e.rotation), this.game.ticker.events.on("tick", () => {
        this.updatePrePhysics();
      }, 1), this.game.ticker.events.on("tick", () => {
        this.updatePostPhysics();
      }, 6);
    }
    setSounds() {
      this.sounds = {}, this.sounds.suspensions = this.game.audio.register({
        path: "sounds/vehicle/suspensions/Robotic_Lifeforms_2_-_Air_Source_-_Piston_Studio_Chair_07.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.1,
        onPlay: (e, t) => {
          e.volume = 0.3 + t * 0.08, e.rate = 0.9 + Math.random() * 0.2;
        }
      }), this.sounds.honk = this.game.audio.register({
        path: "sounds/vehicle/honk/Car Horn Long 4.mp3",
        autoplay: true,
        loop: true,
        volume: 0.4,
        antiSpam: 0.1,
        onPlaying: (e) => {
          e.volume = this.game.inputs.actions.get("honk").active ? 0.5 : 0;
        }
      }), this.sounds.spring1 = this.game.audio.register({
        path: "sounds/vehicle/springs/HandleSqueak_BW.60329.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 1,
        onPlay: (e, t) => {
          e.volume = 0.05 + t * 0.02, e.rate = 1 + Math.random() * 0.1;
        }
      }), this.sounds.spring2 = this.game.audio.register({
        path: "sounds/vehicle/springs/SpringMetalMovements_1u54Y_01.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.2,
        onPlay: (e, t) => {
          e.volume = 0.05 + t * 0.1, e.rate = 0.9 + Math.random() * 0.4;
        }
      }), this.game.audio.register({
        group: "wheelsOnFloor",
        path: "sounds/vehicle/floor/wheels-on-pebbles-road.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (e) => {
          const s = L(Math.abs(this.game.physicalVehicle.position.y - 1.08), 0, 2, 1, 0), i = Math.min(1, this.game.physicalVehicle.xzSpeed * 0.1);
          e.volume = s * i * 0.25;
        }
      }), this.game.audio.register({
        group: "wheelsOnFloor",
        path: "sounds/vehicle/floor/Source Stone Loop Small Rubbing Pebbles On Concrete 02.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (e) => {
          const t = (1 - Math.abs(this.game.physicalVehicle.forwardRatio)) * 0.6;
          let s = Math.max(t, this.game.player.braking) * this.game.physicalVehicle.xzSpeed * 0.15 * this.game.physicalVehicle.wheels.inContactCount / 4;
          s = Qe(s, 0, 1);
          const a = s * 0.4 - e.volume;
          a > 0 ? e.volume += a * this.game.ticker.deltaScaled * 20 : e.volume += a * this.game.ticker.deltaScaled * 5, e.rate = 0.8;
        }
      }), this.game.audio.register({
        path: "sounds/vehicle/engine/muscle car engine loop idle.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (e) => {
          const t = Math.abs(this.game.player.accelerating) * 0.5, s = this.game.player.boosting + 1, a = Math.max(0.05, t * s * 0.8) - e.volume, n = a > 0 ? 10 : 2.5;
          e.volume += a * this.game.ticker.deltaScaled * n;
          const o = L(t * s, 0, 1, 0.6, 1.1);
          e.rate += (o - e.rate) * this.game.ticker.deltaScaled * 5;
        }
      }), this.game.audio.register({
        path: "sounds/vehicle/spin/41051 Glass stone turning loop 09-full.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (e) => {
          const t = Qe(this.game.physicalVehicle.xzSpeed * 0.1, 0, 1), i = t * 0.3 - e.volume, a = i > 0 ? 10 : 2.5;
          e.volume += i * this.game.ticker.deltaScaled * a;
          const n = L(t, 0, 1, 1, 2);
          e.rate += (n - e.rate) * this.game.ticker.deltaScaled * 5;
        }
      }), this.game.audio.register({
        path: "sounds/vehicle/energy/Energy_-_force_field_8_loop.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (e) => {
          const t = 0.5 + Math.abs(this.game.player.accelerating) * 0.5, s = this.game.player.boosting, a = t * s * 0.3 - e.volume, n = a > 0 ? 10 : 1;
          e.volume += a * this.game.ticker.deltaScaled * n;
          const o = 0.95 + Math.abs(this.game.player.accelerating) * 2;
          e.rate += (o - e.rate) * this.game.ticker.deltaScaled * 5;
        }
      });
    }
    setInputs() {
      this.game.inputs.addActions([
        {
          name: "forward",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.ArrowUp",
            "Keyboard.KeyW",
            "Gamepad.up",
            "Gamepad.r2"
          ]
        },
        {
          name: "right",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.ArrowRight",
            "Keyboard.KeyD",
            "Gamepad.right"
          ]
        },
        {
          name: "backward",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.ArrowDown",
            "Keyboard.KeyS",
            "Gamepad.down",
            "Gamepad.l2"
          ]
        },
        {
          name: "left",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.ArrowLeft",
            "Keyboard.KeyA",
            "Gamepad.left"
          ]
        },
        {
          name: "boost",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.ShiftLeft",
            "Keyboard.ShiftRight",
            "Gamepad.circle"
          ]
        },
        {
          name: "brake",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.KeyB",
            "Keyboard.ControlLeft",
            "Gamepad.square"
          ]
        },
        {
          name: "respawn",
          categories: [
            "wandering"
          ],
          keys: [
            "Keyboard.KeyR",
            "Gamepad.select"
          ]
        },
        {
          name: "suspensions",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad5",
            "Keyboard.Space",
            "Gamepad.triangle"
          ]
        },
        {
          name: "suspensionsFront",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad8"
          ]
        },
        {
          name: "suspensionsBack",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad2"
          ]
        },
        {
          name: "suspensionsRight",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad6",
            "Gamepad.r1"
          ]
        },
        {
          name: "suspensionsLeft",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad4",
            "Gamepad.l1"
          ]
        },
        {
          name: "suspensionsFrontLeft",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad7",
            "Keyboard.Digit2"
          ]
        },
        {
          name: "suspensionsFrontRight",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad9",
            "Keyboard.Digit3"
          ]
        },
        {
          name: "suspensionsBackRight",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad3",
            "Keyboard.Digit4"
          ]
        },
        {
          name: "suspensionsBackLeft",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Keyboard.Numpad1",
            "Keyboard.Digit1"
          ]
        },
        {
          name: "interact",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.Enter",
            "Keyboard.KeyE",
            "Keyboard.KeyF",
            "Gamepad.cross"
          ]
        },
        {
          name: "honk",
          categories: [
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Keyboard.KeyH",
            "Gamepad.l3"
          ]
        }
      ]), this.game.inputs.events.on("respawn", (s) => {
        this.state === _be.STATE_DEFAULT && s.active && this.respawn();
      }), this.game.inputs.events.on("honk", (s) => {
        s.active && this.honk();
      });
      const e = () => {
        if (this.state !== _be.STATE_DEFAULT) return;
        const s = [
          this.game.inputs.actions.get("suspensions").active || this.game.inputs.actions.get("suspensionsFront").active || this.game.inputs.actions.get("suspensionsRight").active || this.game.inputs.actions.get("suspensionsFrontRight").active,
          this.game.inputs.actions.get("suspensions").active || this.game.inputs.actions.get("suspensionsFront").active || this.game.inputs.actions.get("suspensionsLeft").active || this.game.inputs.actions.get("suspensionsFrontLeft").active,
          this.game.inputs.actions.get("suspensions").active || this.game.inputs.actions.get("suspensionsBack").active || this.game.inputs.actions.get("suspensionsRight").active || this.game.inputs.actions.get("suspensionsBackRight").active,
          this.game.inputs.actions.get("suspensions").active || this.game.inputs.actions.get("suspensionsBack").active || this.game.inputs.actions.get("suspensionsLeft").active || this.game.inputs.actions.get("suspensionsBackLeft").active
        ], i = this.game.inputs.actions.get("suspensions").active ? "high" : "mid";
        for (let n = 0; n < 4; n++) this.suspensions[n] = s[n] ? i : "low";
        const a = s[0] + s[1] + s[2] + s[3];
        a && (this.sounds.suspensions.play(a), this.game.inputs.actions.get("suspensions").active || this.game.achievements.addProgress("suspensions"));
      };
      this.game.inputs.events.on("suspensions", e), this.game.inputs.events.on("suspensionsFront", e), this.game.inputs.events.on("suspensionsBack", e), this.game.inputs.events.on("suspensionsRight", e), this.game.inputs.events.on("suspensionsLeft", e), this.game.inputs.events.on("suspensionsFrontLeft", e), this.game.inputs.events.on("suspensionsFrontRight", e), this.game.inputs.events.on("suspensionsBackRight", e), this.game.inputs.events.on("suspensionsBackLeft", e), this.game.inputs.events.on("suspensions", () => {
        this.game.inputs.mode === K.MODE_TOUCH && this.game.inputs.nipple.jump();
      });
      let t = null;
      this.game.inputs.nipple.events.on("tap", () => {
        this.game.inputs.nipple.jump();
        for (let s = 0; s < 4; s++) this.suspensions[s] = "high";
        t && clearTimeout(t), t = setTimeout(() => {
          for (let s = 0; s < 4; s++) this.suspensions[s] = "low";
        }, 200);
      });
    }
    setDistanceDriven() {
      this.distanceDriven = {};
      const e = localStorage.getItem("distanceDriven");
      this.distanceDriven.value = e ? parseInt(e) : 0, this.distanceDriven.floored = Math.floor(this.distanceDriven.value), this.distanceDriven.reset = () => {
        localStorage.removeItem("distanceDriven"), this.distanceDriven.value = 0, this.distanceDriven.floored = 0;
      };
    }
    setUnstuck() {
      this.unstuck = {}, this.unstuck.duration = 3, this.unstuck.delay = null, this.game.physicalVehicle.events.on("rightSideUp", () => {
        this.unstuck.delay && this.unstuck.delay.kill();
      });
      const e = () => {
        this.unstuck.delay = f.delayedCall(this.unstuck.duration, () => {
          this.unstuck.delay = null, this.state === _be.STATE_DEFAULT && this.game.physicalVehicle.upsideDown.active && (this.game.physicalVehicle.flip.jump(), this.sounds.suspensions.play(4), this.game.physicalVehicle.upsideDown.ratio > 0.75 && this.game.achievements.setProgress("upsideDown", 1), e());
        });
      };
      this.game.physicalVehicle.events.on("upsideDown", (t) => {
        this.unstuck.delay && this.unstuck.delay.kill(), e();
      }), this.game.physicalVehicle.events.on("stuck", () => {
        this.game.inputs.interactiveButtons.addItems([
          "unstuck"
        ]);
      }), this.game.physicalVehicle.events.on("unstuck", () => {
        this.game.inputs.interactiveButtons.removeItems([
          "unstuck"
        ]);
      }), this.game.inputs.interactiveButtons.events.on("unstuck", () => {
        this.game.inputs.interactiveButtons.removeItems([
          "unstuck"
        ]), this.respawn();
      });
    }
    setFlip() {
      this.game.physicalVehicle.events.on("flip", (e) => {
        e > 0 ? this.game.achievements.setProgress("frontFlip", 1) : this.game.achievements.setProgress("backFlip", 1);
      });
    }
    setTimePlayed() {
      const e = localStorage.getItem("timePlayed");
      this.timePlayed = {}, this.timePlayed.all = e ? parseFloat(e) : 0, this.timePlayed.session = 0, this.timePlayed.achieved = false, setInterval(() => {
        localStorage.setItem("timePlayed", this.timePlayed.all);
      }, 1e3);
    }
    respawn(e = null, t = null) {
      this.game.overlay.show(() => {
        typeof t == "function" && t();
        let s = e ? this.game.respawns.getByName(e) : this.game.respawns.getClosest(this.position);
        this.game.physicalVehicle.moveTo(s.position, s.rotation), this.state = _be.STATE_DEFAULT, this.game.overlay.hide();
      });
    }
    die() {
      this.state = _be.STATE_LOCKED, f.delayedCall(2, () => {
        this.respawn(null, () => {
          this.state = _be.STATE_DEFAULT;
        });
      });
    }
    honk() {
      const e = Math.floor(Math.random() * 4), t = this.suspensions[e];
      this.suspensions[e] = "mid", f.delayedCall(0.15, () => {
        this.suspensions[e] === "mid" && (this.suspensions[e] = t);
      }), this.game.achievements.addProgress("honk");
    }
    updatePrePhysics() {
      if (this.accelerating = 0, this.steering = 0, this.boosting = 0, this.braking = 0, this.state === _be.STATE_DEFAULT && (this.game.inputs.actions.get("forward").active && (this.accelerating += this.game.inputs.actions.get("forward").value), this.game.inputs.actions.get("backward").active && (this.accelerating -= this.game.inputs.actions.get("backward").value), this.game.inputs.actions.get("boost").active && (this.boosting = 1), this.game.inputs.actions.get("brake").active && (this.accelerating = 0, this.braking = 1), this.game.inputs.actions.get("right").active && (this.steering -= 1), this.game.inputs.actions.get("left").active && (this.steering += 1), this.steering === 0 && this.game.inputs.gamepad.joysticks.left.active && (this.steering = -this.game.inputs.gamepad.joysticks.left.safeX), this.game.inputs.nipple.active && this.game.inputs.nipple.progress > 0)) {
        this.game.view.focusPoint.isTracking || this.game.ticker.wait(5, () => {
          this.game.inputs.nipple.active && (this.game.view.focusPoint.isTracking = true);
        }), this.accelerating = Math.pow(this.game.inputs.nipple.progress, 3);
        const t = Math.abs(this.game.inputs.nipple.smallestAngle) / ((Math.PI * 2 - this.game.inputs.nipple.forwardAmplitude) / 2), s = Math.sign(this.game.inputs.nipple.smallestAngle), i = -Math.min(t, 1) * s;
        this.steering = i, this.game.inputs.nipple.forward || (this.accelerating *= -1, this.steering *= -1);
      }
    }
    updatePostPhysics() {
      this.position.copy(this.game.physicalVehicle.position), this.position2 = new H(this.position.x, this.position.z), this.game.view.focusPoint.trackedPosition.copy(this.position), this.boosting && this.accelerating && this.game.physicalVehicle.speed > 15 ? this.game.view.speedLines.strength = 1 : this.game.view.speedLines.strength = 0, this.game.view.speedLines.worldTarget.copy(this.position), this.game.tracks.focusPoint.set(this.position.x, this.position.z), this.rotationY = Math.atan2(this.game.physicalVehicle.forward.z, this.game.physicalVehicle.forward.x), this.game.inputs.nipple.setCoordinates(this.position.x, this.position.y, this.position.z, this.rotationY), this.game.physicalVehicle.wheels.justTouchedCount > 1 && (this.sounds.spring1.play(this.game.physicalVehicle.wheels.justTouchedCount), this.sounds.spring2.play(this.game.physicalVehicle.wheels.justTouchedCount)), this.timePlayed.all += this.game.ticker.delta, this.timePlayed.session += this.game.ticker.delta, !this.timePlayed.achieved && this.timePlayed.session > this.game.dayCycles.duration && (this.timePlayed.achieved = true, this.game.achievements.setProgress("fullDay", 1)), this.position2.length() > 120 && this.game.achievements.setProgress("sea", 1);
      const t = Math.floor(this.position.y);
      this.game.achievements.groups.get("goHigh") && t > this.game.achievements.groups.get("goHigh").progress && this.game.achievements.setProgress("goHigh", t), this.distanceDriven.value += this.game.physicalVehicle.xzSpeed * this.game.ticker.deltaScaled;
      const s = Math.floor(this.distanceDriven.value);
      s !== this.distanceDriven.floored && (localStorage.setItem("distanceDriven", s), this.distanceDriven.floored = s);
      const i = Math.floor(this.distanceDriven.value / 1e3);
      this.game.achievements.groups.get("distanceDriven") && i > this.game.achievements.groups.get("distanceDriven").progress && this.game.achievements.setProgress("distanceDriven", i);
    }
  };
  __publicField(_be, "STATE_DEFAULT", 1);
  __publicField(_be, "STATE_LOCKED", 2);
  let be = _be;
  Us.install({
    THREE: bi
  });
  const Vt = new st.alea("speedLines");
  const _ve = class _ve {
    constructor(e = 1920 / 1080) {
      this.game = T.getInstance(), this.mode = _ve.MODE_DEFAULT, this.position = new y(), this.delta = new y(), this.idealRatio = e, this.ratioOverflow = Math.max(1, this.idealRatio / this.game.viewport.ratio) - 1, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F3A5} View",
        expanded: false
      }), this.debugPanel.addBinding(this, "mode", {
        options: {
          default: _ve.MODE_DEFAULT,
          free: _ve.MODE_FREE
        }
      }).on("change", () => {
        this.setMode(this.mode);
      })), this.setFocusPoint(), this.setZoom(), this.setSpherical(), this.setRoll(), this.setCameras(), this.setOptimalArea(), this.setFree(), this.setCinematic(), this.setSpeedLines(), this.setMapControls(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 7), this.update(), this.game.viewport.events.on("change", () => {
        this.resize();
      }), this.game.viewport.events.on("throttleChange", () => {
        this.throttleResize();
      }, 1), this.game.debug.active && (this.game.inputs.addActions([
        {
          name: "viewToggle",
          categories: [],
          keys: [
            "Keyboard.KeyV"
          ]
        }
      ]), this.game.inputs.events.on("viewToggle", (t) => {
        t.active && this.toggleMode();
      }));
    }
    toggleMode() {
      this.setMode(this.mode === _ve.MODE_FREE ? _ve.MODE_DEFAULT : _ve.MODE_FREE);
    }
    setMode(e) {
      this.mode = e, this.focusPoint.smoothedPosition.copy(this.focusPoint.position), this.freeMode.enabled = this.mode === _ve.MODE_FREE, this.freeMode.setTarget(this.focusPoint.position.x, this.focusPoint.position.y, this.focusPoint.position.z), this.freeMode.setPosition(this.camera.position.x, this.camera.position.y, this.camera.position.z);
    }
    setFocusPoint() {
      const e = this.game.respawns.getDefault();
      this.focusPoint = {}, this.focusPoint.trackedPosition = new y(e.position.x, 0, e.position.z), this.focusPoint.isTracking = true, this.focusPoint.position = this.focusPoint.trackedPosition.clone(), this.focusPoint.smoothedPosition = this.focusPoint.trackedPosition.clone(), this.focusPoint.isEased = true, this.focusPoint.easing = 1, this.focusPoint.magnet = {}, this.focusPoint.magnet.active = true, this.focusPoint.magnet.multiplier = 0.25;
      const t = [
        "forward",
        "right",
        "backward",
        "left",
        "boost",
        "brake",
        "respawn",
        "suspensions",
        "suspensionsFront",
        "suspensionsBack",
        "suspensionsRight",
        "suspensionsLeft",
        "suspensionsFrontLeft",
        "suspensionsFrontRight",
        "suspensionsBackRight",
        "suspensionsBackLeft",
        "interact",
        "whisper"
      ];
      this.game.inputs.events.on("actionStart", (s) => {
        t.indexOf(s.name) !== -1 && (this.focusPoint.isTracking = true);
      }), this.focusPoint.helper = new D(new Rt(0.5, 32, 32), new O({
        color: new X("orange").multiplyScalar(4),
        wireframe: false
      })), this.focusPoint.helper.visible = false, this.focusPoint.helper.userData.preventPreRender = true, this.game.scene.add(this.focusPoint.helper), this.game.debug.active && this.debugPanel.addFolder({
        title: "Magnet",
        expanded: true
      }).addBinding(this.focusPoint.magnet, "multiplier", {
        min: 0,
        max: 1,
        step: 1e-4
      });
    }
    setOptimalArea() {
      this.optimalArea = {}, this.optimalArea.needsUpdate = true, this.optimalArea.position = new y(), this.optimalArea.basePosition = new y(), this.optimalArea.nearPosition = new y(), this.optimalArea.farPosition = new y(), this.optimalArea.nearDistance = null, this.optimalArea.farDistance = null, this.optimalArea.radius = 0, this.optimalArea.raycaster = new Kt(), this.optimalArea.quad2 = [
        {
          base: new H(),
          offseted: new H(),
          helper: null
        },
        {
          base: new H(),
          offseted: new H(),
          helper: null
        },
        {
          base: new H(),
          offseted: new H(),
          helper: null
        },
        {
          base: new H(),
          offseted: new H(),
          helper: null
        }
      ], this.optimalArea.floorPlane = new Xt(new y(0, 1, 0), 0), this.optimalArea.update = () => {
        const e = this.defaultCamera.position.clone(), t = this.defaultCamera.quaternion.clone();
        let s = this.spherical.radius.edges.max + this.ratioOverflow * this.spherical.radius.nonIdealRatioOffset;
        this.game.quality.level === 0 && (s *= 1 - this.zoom.speedAmplitude);
        const i = new y();
        i.setFromSphericalCoords(s, this.spherical.phi, this.spherical.theta), this.defaultCamera.position.set(0, 0, 0).add(i), this.defaultCamera.lookAt(new y()), this.defaultCamera.updateProjectionMatrix(), this.defaultCamera.updateWorldMatrix(), this.optimalArea.raycaster.setFromCamera(new H(1, -1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.nearPosition), this.optimalArea.quad2[0].base.x = this.optimalArea.nearPosition.x, this.optimalArea.quad2[0].base.y = this.optimalArea.nearPosition.z, this.optimalArea.raycaster.setFromCamera(new H(-1, 1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.farPosition), this.optimalArea.quad2[2].base.x = this.optimalArea.farPosition.x, this.optimalArea.quad2[2].base.y = this.optimalArea.farPosition.z;
        const a = this.optimalArea.nearPosition.clone().lerp(this.optimalArea.farPosition, 0.5);
        this.optimalArea.raycaster.setFromCamera(new H(-1, -1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.nearPosition), this.optimalArea.quad2[3].base.x = this.optimalArea.nearPosition.x, this.optimalArea.quad2[3].base.y = this.optimalArea.nearPosition.z, this.optimalArea.raycaster.setFromCamera(new H(1, 1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.farPosition), this.optimalArea.quad2[1].base.x = this.optimalArea.farPosition.x, this.optimalArea.quad2[1].base.y = this.optimalArea.farPosition.z;
        const n = this.optimalArea.nearPosition.clone().lerp(this.optimalArea.farPosition, 0.5);
        this.optimalArea.basePosition = a.clone().lerp(n, 0.5), this.optimalArea.radius = this.optimalArea.basePosition.distanceTo(this.optimalArea.farPosition), this.optimalArea.raycaster.setFromCamera(new H(0, -1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.nearPosition), this.optimalArea.raycaster.setFromCamera(new H(0, 1), this.defaultCamera), this.optimalArea.raycaster.ray.intersectPlane(this.optimalArea.floorPlane, this.optimalArea.farPosition), this.optimalArea.nearDistance = this.defaultCamera.position.distanceTo(this.optimalArea.nearPosition), this.optimalArea.farDistance = this.defaultCamera.position.distanceTo(this.optimalArea.farPosition), this.defaultCamera.position.copy(e), this.defaultCamera.quaternion.copy(t), this.optimalArea.needsUpdate = false;
      };
    }
    setZoom() {
      if (this.zoom = {}, this.zoom.baseRatio = 0.6, this.zoom.ratio = this.zoom.baseRatio, this.zoom.smoothedRatio = this.zoom.baseRatio, this.zoom.speedAmplitude = -0.4, this.zoom.speedEdge = {
        min: 5,
        max: 40
      }, this.zoom.sensitivity = 0.05, this.zoom.toggle = 0, this.zoom.toggleLast = -1, this.game.inputs.addActions([
        {
          name: "zoom",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Wheel.roll"
          ]
        },
        {
          name: "zoomToggle",
          categories: [
            "wandering",
            "racing"
          ],
          keys: [
            "Gamepad.r3"
          ]
        }
      ]), this.game.inputs.events.on("zoom", (e) => {
        this.zoom.baseRatio -= e.value * this.zoom.sensitivity, this.zoom.baseRatio = He(this.zoom.baseRatio, 0, 1);
      }), this.game.inputs.events.on("zoomToggle", (e) => {
        e.active ? (this.zoom.toggle -= this.zoom.toggleLast, this.zoom.toggleLast = this.zoom.toggle) : this.zoom.toggle = 0;
      }), this.game.debug.active) {
        const e = this.debugPanel.addFolder({
          title: "Zoom",
          expanded: false
        });
        e.addBinding(this.zoom, "speedAmplitude", {
          min: 0,
          max: 1,
          step: 1e-3
        }), e.addBinding(this.zoom, "speedEdge", {
          min: 0,
          max: 100,
          step: 1e-3
        }), e.addBinding(this.zoom, "sensitivity", {
          min: 0,
          max: 0.5,
          step: 1e-4
        });
      }
    }
    setSpherical() {
      if (this.spherical = {}, this.spherical.phi = Math.PI * (this.game.quality.level === 0 ? 0.31 : 0.27), this.spherical.theta = Math.PI * 0.25, this.spherical.radius = {}, this.spherical.radius.edges = {
        min: 15,
        max: 30
      }, this.spherical.radius.current = ye(this.spherical.radius.edges.min, this.spherical.radius.edges.max, 1 - this.zoom.smoothedRatio), this.spherical.radius.nonIdealRatioOffset = 9, this.spherical.offset = new y(), this.spherical.offset.setFromSphericalCoords(this.spherical.radius.current, this.spherical.phi, this.spherical.theta), this.game.debug.active) {
        const e = this.debugPanel.addFolder({
          title: "Spherical",
          expanded: false
        });
        e.addBinding(this.spherical, "phi", {
          min: 0,
          max: Math.PI * 0.5,
          step: 1e-3
        }), e.addBinding(this.spherical, "theta", {
          min: -Math.PI,
          max: Math.PI,
          step: 1e-3
        }), e.addBinding(this.spherical.radius, "edges", {
          min: 0,
          max: 100,
          step: 1e-3
        });
      }
    }
    setRoll() {
      if (this.roll = {}, this.roll.value = 0, this.roll.velocity = 0, this.roll.speed = 0, this.roll.damping = 4, this.roll.pullStrength = 100, this.roll.kickStrength = 1, this.roll.kick = (e = 1) => {
        this.roll.speed = e * this.roll.kickStrength * (Math.random() < 0.5 ? -1 : 1);
      }, this.game.debug.active) {
        const e = this.debugPanel.addFolder({
          title: "Roll",
          expanded: false
        });
        e.addButton({
          title: "kick"
        }).on("click", () => {
          this.roll.kick();
        }), e.addBinding(this.roll, "damping", {
          min: 0,
          max: 20,
          step: 0.1
        }), e.addBinding(this.roll, "pullStrength", {
          min: 0,
          max: 400,
          step: 0.1
        }), e.addBinding(this.roll, "kickStrength", {
          min: 0,
          max: 10,
          step: 0.1
        });
      }
    }
    setCameras() {
      this.camera = new yi(25, this.game.viewport.ratio, 0.1, 200), this.camera.position.setFromSphericalCoords(this.spherical.radius.current, this.spherical.phi, this.spherical.theta), this.defaultCamera = this.camera.clone(), this.freeCamera = this.camera.clone(), this.game.scene.add(this.camera, this.defaultCamera, this.freeCamera), this.cameraHelper = new vs(this.defaultCamera), this.cameraHelper.visible = false, this.cameraHelper.userData.preventPreRender = true, this.game.scene.add(this.cameraHelper), this.game.debug.active && this.debugPanel.addBinding(this.cameraHelper, "visible", {
        label: "cameraHelper"
      });
    }
    setFree() {
      this.freeMode = new Us(this.freeCamera, this.game.domElement), this.freeMode.enabled = this.mode === _ve.MODE_FREE, this.freeMode.smoothTime = 0.075, this.freeMode.draggingSmoothTime = 0.075, this.freeMode.dollySpeed = 0.2;
    }
    setCinematic() {
      this.cinematic = {}, this.cinematic.active = false, this.cinematic.progress = 0, this.cinematic.position = new y(), this.cinematic.target = new y(), this.cinematic.dummy = this.camera.clone(), this.cinematic.nonIdealRatioOffset = 10, this.cinematic.start = (e, t) => {
        var _a2;
        if (this.cinematic.active = true, this.cinematic.position = e.clone(), this.cinematic.target = t.clone(), (_a2 = this.cinematic.targetHelper) == null ? void 0 : _a2.position.copy(this.cinematic.target), this.ratioOverflow > 0) {
          const s = this.cinematic.position.clone().sub(this.cinematic.target).setLength(this.ratioOverflow * this.cinematic.nonIdealRatioOffset);
          this.cinematic.position.add(s);
        }
        f.to(this.cinematic, {
          progress: 1,
          duration: 1.5,
          ease: "power2.inOut",
          overwrite: true
        }), f.to(this.game.rendering.cheapDOFPass.strength, {
          value: 0,
          duration: 1.5,
          ease: "power2.inOut",
          overwrite: true
        });
      }, this.cinematic.end = () => {
        this.cinematic.active = false, f.to(this.cinematic, {
          progress: 0,
          duration: 1,
          ease: "power2.inOut",
          overwrite: true
        }), f.to(this.game.rendering.cheapDOFPass.strength, {
          value: 1.5,
          duration: 1.5,
          ease: "power2.inOut",
          overwrite: true
        });
      };
    }
    setSpeedLines() {
      this.speedLines = {}, this.speedLines.strength = 0, this.speedLines.smoothedStrength = d(this.speedLines.strength), this.speedLines.worldTarget = new y(), this.speedLines.clipSpaceTarget = d(new y()), this.speedLines.speed = d(12);
      const e = 30, t = new Float32Array(e * 3 * 3), s = new Float32Array(e * 3), i = new Float32Array(e * 3), a = new Float32Array(e * 3), n = Math.hypot(1, 1);
      for (let o = 0; o < e; o++) {
        const l = o * 9, r = o * 3, h = new H(0, 1), c = Math.PI * 2 * Vt();
        h.rotateAround(new H(), c);
        const u = Vt() * 0.01 + 2e-3, g = h.clone().rotateAround(new H(), u), p = h.clone().rotateAround(new H(), -u);
        h.multiplyScalar(n), g.multiplyScalar(n), p.multiplyScalar(n), t[l + 0] = g.x, t[l + 1] = g.y, t[l + 2] = 0, t[l + 3] = h.x, t[l + 4] = h.y, t[l + 5] = 0, t[l + 6] = p.x, t[l + 7] = p.y, t[l + 8] = 0, s[r + 0] = o, s[r + 1] = o, s[r + 2] = o;
        const v = Vt() * 0.4 + 0.4;
        i[r + 0] = v, i[r + 1] = v, i[r + 2] = v, a[r + 0] = 0, a[r + 1] = 1, a[r + 2] = 0;
      }
      if (this.speedLines.geometry = new Ke(), this.speedLines.geometry.setAttribute("position", new ne(t, 3)), this.speedLines.geometry.setAttribute("timeRandomness", new ne(s, 1)), this.speedLines.geometry.setAttribute("distance", new ne(i, 1)), this.speedLines.geometry.setAttribute("tipness", new ne(a, 1)), this.speedLines.material = new O({
        wireframe: false,
        depthWrite: false,
        depthTest: false
      }), this.speedLines.material.vertexNode = b(() => {
        const o = le("timeRandomness"), l = le("distance"), r = le("tipness"), h = this.game.ticker.elapsedScaledUniform.mul(this.speedLines.speed).add(o).sin().div(2).add(0.5), c = A(Z.xy, this.speedLines.clipSpaceTarget.xy, r.mul(h).mul(l).mul(this.speedLines.smoothedStrength));
        return C(c, 0, 1);
      })(), this.speedLines.material.outputNode = C(1), this.speedLines.mesh = new D(this.speedLines.geometry, this.speedLines.material), this.speedLines.mesh.frustumCulled = false, this.speedLines.mesh.renderOrder = 10, this.game.scene.add(this.speedLines.mesh), this.game.debug.active) {
        const o = this.debugPanel.addFolder({
          title: "Speed lines",
          expanded: false
        });
        o.addBinding(this.speedLines, "strength", {
          label: "strength",
          min: 0,
          max: 1,
          step: 1e-3
        }), o.addBinding(this.speedLines.speed, "value", {
          label: "speed",
          min: 0,
          max: 100,
          step: 1e-3
        });
      }
    }
    resize() {
      this.ratioOverflow = Math.max(1, this.idealRatio / this.game.viewport.ratio) - 1, this.camera.aspect = this.game.viewport.width / this.game.viewport.height, this.camera.updateProjectionMatrix(), this.defaultCamera.aspect = this.game.viewport.width / this.game.viewport.height, this.defaultCamera.updateProjectionMatrix(), this.freeCamera.aspect = this.game.viewport.width / this.game.viewport.height, this.freeCamera.updateProjectionMatrix();
    }
    throttleResize() {
      this.optimalArea.update();
    }
    setMapControls() {
      this.game.inputs.addActions([
        {
          name: "viewMapPointer",
          categories: [
            "intro",
            "wandering"
          ],
          keys: [
            "Pointer.any"
          ]
        }
      ]), this.game.inputs.events.on("viewMapPointer", (e) => {
        if (this.mode === _ve.MODE_DEFAULT && e.active) {
          if (this.game.inputs.pointer.mode === ze.MODE_MOUSE || this.game.inputs.pointer.touches.length >= 2) {
            this.focusPoint.isTracking = false;
            const t = new H(this.game.inputs.pointer.delta.x, this.game.inputs.pointer.delta.y);
            t.rotateAround(new H(), -this.spherical.theta);
            const s = Math.min(this.game.viewport.width, this.game.viewport.height);
            t.multiplyScalar(10 / s), this.focusPoint.position.x -= t.x * 2, this.focusPoint.position.z -= t.y * 2;
          }
          this.zoom.baseRatio += this.game.inputs.pointer.pinch.distanceDelta * 5e-3, this.zoom.baseRatio = He(this.zoom.baseRatio, 0, 1);
        }
      });
    }
    update() {
      if (this.mode === _ve.MODE_DEFAULT && this.game.inputs.gamepad.joysticks.right.active && !this.cinematic.active) {
        this.focusPoint.isTracking = false;
        const n = new H(this.game.inputs.gamepad.joysticks.right.x, this.game.inputs.gamepad.joysticks.right.y);
        n.rotateAround(new H(), -this.spherical.theta), n.multiplyScalar(20 * this.game.ticker.delta), this.focusPoint.position.x += n.x, this.focusPoint.position.z += n.y;
      }
      if (this.focusPoint.isTracking && (this.focusPoint.position.x = this.focusPoint.trackedPosition.x, this.focusPoint.position.z = this.focusPoint.trackedPosition.z), this.focusPoint.magnet.active) {
        const n = {
          x: this.focusPoint.trackedPosition.x - this.focusPoint.position.x,
          z: this.focusPoint.trackedPosition.z - this.focusPoint.position.z
        }, l = Math.hypot(n.x, n.z) * this.focusPoint.magnet.multiplier;
        this.focusPoint.position.x += l * n.x * this.game.ticker.delta, this.focusPoint.position.z += l * n.z * this.game.ticker.delta;
      }
      const e = ss(this.focusPoint.easing, 0, 1, 1, this.game.ticker.delta * 10), t = this.focusPoint.smoothedPosition.clone().lerp(this.focusPoint.position, e), s = t.clone().sub(this.focusPoint.smoothedPosition), i = Math.hypot(s.x, s.z) / this.game.ticker.delta;
      if (this.focusPoint.smoothedPosition.copy(t), this.focusPoint.helper.visible && this.focusPoint.helper.position.copy(t), this.mode === _ve.MODE_DEFAULT) {
        this.zoom.toggle !== 0 && (this.zoom.baseRatio += this.zoom.toggle * 0.01, this.zoom.baseRatio = He(this.zoom.baseRatio, 0, 1));
        const n = Gs(i, this.zoom.speedEdge.min, this.zoom.speedEdge.max);
        this.zoom.ratio = this.zoom.baseRatio, this.focusPoint.isTracking && this.game.quality.level === 0 && (this.zoom.ratio += this.zoom.speedAmplitude * n), this.zoom.smoothedRatio = ye(this.zoom.smoothedRatio, this.zoom.ratio, this.game.ticker.delta * 10);
      }
      const a = this.spherical.radius.edges.max + this.ratioOverflow * this.spherical.radius.nonIdealRatioOffset;
      this.spherical.radius.current = ye(this.spherical.radius.edges.min, a, 1 - this.zoom.smoothedRatio), this.spherical.offset.setFromSphericalCoords(this.spherical.radius.current, this.spherical.phi, this.spherical.theta), this.position.copy(this.focusPoint.smoothedPosition).add(this.spherical.offset), this.delta = this.position.clone().sub(this.defaultCamera.position), this.defaultCamera.position.copy(this.position), this.defaultCamera.rotation.set(0, 0, 0), this.defaultCamera.lookAt(this.focusPoint.smoothedPosition), this.roll.velocity = -this.roll.value * this.roll.pullStrength * this.game.ticker.deltaScaled, this.roll.speed += this.roll.velocity, this.roll.value += this.roll.speed * this.game.ticker.deltaScaled, this.roll.speed *= 1 - this.roll.damping * this.game.ticker.deltaScaled, this.defaultCamera.rotation.z += this.roll.value, this.cinematic.progress > 0 && (this.cinematic.dummy.position.copy(this.cinematic.position), this.cinematic.dummy.lookAt(this.cinematic.target), this.defaultCamera.position.lerp(this.cinematic.dummy.position, this.cinematic.progress), this.defaultCamera.quaternion.slerp(this.cinematic.dummy.quaternion, this.cinematic.progress)), this.mode === _ve.MODE_DEFAULT ? (this.camera.position.copy(this.defaultCamera.position), this.camera.quaternion.copy(this.defaultCamera.quaternion)) : this.mode === _ve.MODE_FREE && (this.freeMode.update(this.game.ticker.delta), this.camera.position.copy(this.freeCamera.position), this.camera.quaternion.copy(this.freeCamera.quaternion)), this.camera.updateMatrixWorld(), this.defaultCamera.updateMatrixWorld(), this.freeCamera.updateMatrixWorld(), this.optimalArea.needsUpdate && this.optimalArea.update(), this.optimalArea.position.copy(this.optimalArea.basePosition).add(new y(this.focusPoint.smoothedPosition.x, 0, this.focusPoint.smoothedPosition.z));
      for (const n of this.optimalArea.quad2) n.offseted.x = n.base.x + this.focusPoint.position.x, n.offseted.y = n.base.y + this.focusPoint.position.z;
      if (this.optimalArea.quad2Helper && this.optimalArea.quad2Helper.visible) {
        const n = new bs();
        n.setPositions([
          this.optimalArea.quad2[0].offseted.x,
          0.5,
          this.optimalArea.quad2[0].offseted.y,
          this.optimalArea.quad2[1].offseted.x,
          0.5,
          this.optimalArea.quad2[1].offseted.y,
          this.optimalArea.quad2[2].offseted.x,
          0.5,
          this.optimalArea.quad2[2].offseted.y,
          this.optimalArea.quad2[3].offseted.x,
          0.5,
          this.optimalArea.quad2[3].offseted.y,
          this.optimalArea.quad2[0].offseted.x,
          0.5,
          this.optimalArea.quad2[0].offseted.y
        ]), this.optimalArea.quad2Helper.geometry = n;
      }
      this.speedLines.clipSpaceTarget.value.copy(this.speedLines.worldTarget), this.speedLines.clipSpaceTarget.value.project(this.camera), this.speedLines.smoothedStrength.value = ye(this.speedLines.smoothedStrength.value, this.speedLines.strength, this.game.ticker.delta * 2);
    }
  };
  __publicField(_ve, "MODE_DEFAULT", 1);
  __publicField(_ve, "MODE_FREE", 2);
  let ve = _ve;
  class Ta {
    constructor(e) {
      this.domElement = e, this.events = new se(), this.measure(), this.setResize();
    }
    measure() {
      const e = this.domElement.getBoundingClientRect();
      this.width = e.width, this.height = e.height, this.ratio = this.width / this.height, this.pixelRatioPure = window.devicePixelRatio, this.pixelRatioMax = 2, this.pixelRatio = Math.min(this.pixelRatioPure, this.pixelRatioMax);
    }
    setResize() {
      let t = null;
      addEventListener("resize", () => {
        this.measure(), this.events.trigger("change"), t && clearTimeout(t), t = setTimeout(() => {
          t = null, this.events.trigger("throttleChange");
        }, 400);
      });
    }
  }
  const _V = class _V extends et {
    constructor(e = {}) {
      super(), this.game = T.getInstance(), this.depthWrite = e.depthWrite ?? true, this.depthTest = e.depthTest ?? true, this.side = e.side ?? as, this.wireframe = e.wireframe ?? false, this.transparent = e.transparent ?? false, this.shadowSide = e.shadowSide ?? as, this.hasCoreShadows = e.hasCoreShadows ?? true, this.hasDropShadows = e.hasDropShadows ?? true, this.hasLightBounce = e.hasLightBounce ?? true, this.hasFog = e.hasFog ?? true, this.hasWater = e.hasWater ?? true, this.hasReveal = e.hasReveal ?? true, this._colorNode = e.colorNode ?? M(16777215), this._normalNode = e.normalNode ?? vt, this._alphaNode = e.alphaNode ?? F(1), this._shadowNode = e.shadowNode ?? F(0), this.alphaTest = e.alphaTest ?? 0.1, this.normalNode = this._normalNode;
      const t = F(1).toVar();
      this.hasDropShadows && (this.receivedShadowNode = b(([s]) => (t.mulAssign(s.r), F(1)))), this.outputNode = b(() => {
        const s = this._colorNode.toVar(), i = this._colorNode.toVar(), a = this._normalNode.toVar();
        if ((this.side === Ae || this.side === ys) && De(wi.not(), () => {
          a.mulAssign(-1);
        }), this.hasLightBounce) {
          const l = a.dot(E(0, -1, 0)).smoothstep(this.game.lighting.lightBounceEdgeLow, this.game.lighting.lightBounceEdgeHigh), r = this.game.lighting.lightBounceDistance.sub(ge(0, Q.y)).div(this.game.lighting.lightBounceDistance).max(0).pow(2), h = this.game.terrain.terrainNode(Q.xz), c = this.game.terrain.colorNode(h);
          i.assign(A(i, c, l.mul(r).mul(this.game.lighting.lightBounceMultiplier)));
        }
        if (this.hasWater) {
          const l = Q.y.sub(this.game.water.surfaceElevationUniform).abs().greaterThan(this.game.water.surfaceThicknessUniform);
          i.assign(l.select(i, M("#ffffff"))), s.assign(l.select(s, M("#ffffff")));
        }
        i.mulAssign(this.game.lighting.colorUniform.mul(this.game.lighting.intensityUniform));
        let n = F(0);
        this.hasCoreShadows && (n = a.dot(this.game.lighting.directionUniform).smoothstep(this.game.lighting.coreShadowEdgeHigh, this.game.lighting.coreShadowEdgeLow));
        let o = F(0);
        if (this.hasDropShadows && (o = t.oneMinus()), this.hasCoreShadows || this.hasDropShadows) {
          const l = ge(n, o, this._shadowNode).clamp(0, 1), r = s.rgb.mul(this.game.lighting.shadowColor).rgb;
          i.assign(A(i, r, l));
        }
        return this.hasFog && i.assign(this.game.fog.strength.mix(i, this.game.fog.color)), this._alphaNode.lessThan(this.alphaTest).discard(), this.hasReveal && i.assign(_V.revealDiscardNodeBuilder(this.game, i)), C(i, this._alphaNode);
      })();
    }
  };
  __publicField(_V, "revealDiscardNodeBuilder", (e, t) => b(([s]) => {
    const i = Q.xz.sub(e.reveal.position2Uniform).length();
    i.greaterThan(e.reveal.distance).discard();
    const a = i.step(e.reveal.distance.sub(e.reveal.thickness)), n = e.reveal.color.mul(e.reveal.intensity);
    return A(s.rgb, n, a);
  })(t));
  let V = _V;
  class Ma {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u23E5 Floor",
        expanded: false
      })), this.geometry = this.game.resources.terrainModel.scene.children[0].geometry, this.subdivision = this.game.terrain.subdivision, this.setVisual(), this.setPhysical(), this.setBedRock(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setVisual() {
      this.size = Math.round(this.game.view.optimalArea.radius * 2) + 1, this.halfSize = this.size * 0.5, this.cellSize = 1.5, this.subdivisions = this.size / this.cellSize;
      let e = new Y(this.size, this.size, this.subdivisions, this.subdivisions);
      e.rotateX(-Math.PI * 0.5), e.deleteAttribute("normal");
      const t = this.game.terrain.terrainNode(Q.xz), s = d(M("#ffcf8b")), i = d(M("#a87762")), a = d(0.175), n = d(0.03), o = b(() => {
        const r = this.game.terrain.colorNode(t), h = t.r, c = Q.xz.mul(n), u = P(this.game.noises.perlin, c).r, g = P(this.game.resources.floorSlabsTexture, Q.xz.mul(a)).r, p = A(i, s, g), v = h.mul(u);
        return A(r, p, v);
      })(), l = new V({
        colorNode: o,
        normalNode: E(0, 1, 0),
        shadowNode: t.g,
        hasWater: false,
        hasLightBounce: false,
        wireframe: false
      });
      l.positionNode = b(() => {
        const r = Be(Be(k().x, k().y).mul(20), 1), h = Le;
        return h.y.addAssign(t.b.mul(-1.5).mul(r)), h;
      })(), this.mesh = new D(e, l), this.mesh.receiveShadow = true, this.game.scene.add(this.mesh), this.game.viewport.events.on("throttleChange", () => {
        this.size = Math.round(this.game.view.optimalArea.radius * 2) + 1, this.halfSize = this.size * 0.5, this.subdivisions = this.size, e.dispose(), e = new Y(this.size, this.size, this.subdivisions, this.subdivisions), e.rotateX(-Math.PI * 0.5), e.deleteAttribute("normal"), this.mesh.geometry = e;
      }, 2), this.game.debug.active && (this.debugPanel.addBinding(a, "value", {
        label: "slabTextureFrequency",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(n, "value", {
        label: "slabNoiseFrequency",
        min: 0,
        max: 0.1,
        step: 1e-3
      }), this.game.debug.addThreeColorBinding(this.debugPanel, s.value, "slabHighColor"), this.game.debug.addThreeColorBinding(this.debugPanel, i.value, "slabLowColor"));
    }
    setPhysical() {
      const e = this.geometry.attributes.position, t = e.count, s = Math.sqrt(t), i = new Float32Array(t), a = this.game.terrain.size / 2;
      for (let o = 0; o < t; o++) {
        const l = e.array[o * 3 + 0], r = e.array[o * 3 + 1], h = e.array[o * 3 + 2], c = Math.round((l / (a * 2) + 0.5) * (s - 1)), g = Math.round((h / (a * 2) + 0.5) * (s - 1)) + c * s;
        i[g] = r;
      }
      const n = this.game.objects.add(null, {
        type: "fixed",
        friction: 0.2,
        restitution: 0.15,
        colliders: [
          {
            shape: "heightfield",
            parameters: [
              s - 1,
              s - 1,
              i,
              {
                x: this.game.terrain.size,
                y: 1,
                z: this.game.terrain.size
              }
            ],
            category: "floor"
          }
        ]
      });
      this.physical = n.physical;
    }
    setBedRock() {
      this.bedRock = {}, this.bedRock.halfHeight = 0.5, this.bedRock.halfWidth = 6, this.bedRock.enabled = false, this.bedRock.physical = this.game.physics.getPhysical({
        type: "kinematicPositionBased",
        position: new y(0, this.game.water.depthElevation - this.bedRock.halfHeight, 0),
        frictionRule: "min",
        friction: 0.5,
        enabled: true,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              this.bedRock.halfWidth,
              this.bedRock.halfHeight,
              this.bedRock.halfWidth
            ]
          }
        ]
      });
    }
    update() {
      if (this.mesh.position.x = Math.round(this.game.view.optimalArea.position.x / this.cellSize) * this.cellSize, this.mesh.position.z = Math.round(this.game.view.optimalArea.position.z / this.cellSize) * this.cellSize, Math.abs(this.game.player.position.x) > this.game.terrain.size / 2 - this.bedRock.halfWidth || Math.abs(this.game.player.position.z) > this.game.terrain.size / 2 - this.bedRock.halfWidth) {
        this.bedRock.enabled || (this.bedRock.enabled = true, this.bedRock.physical.body.setEnabled(true));
        const e = Math.round(this.game.player.position.x), t = Math.round(this.game.player.position.z);
        this.bedRock.physical.body.setNextKinematicTranslation({
          x: e,
          y: this.game.water.depthElevation - this.bedRock.halfHeight,
          z: t
        }), this.bedRock.physical.body.setLinvel({
          x: 0,
          y: 0,
          z: 0
        });
      } else this.bedRock.enabled && (this.bedRock.enabled = false, this.bedRock.physical.body.setEnabled(false));
    }
  }
  const ka = b(([m]) => {
    const e = E(1, 0, 0), t = E(0, 1, 0), s = E(0, 0, 1), i = m.dot(e).abs(), a = m.dot(t).abs(), n = m.dot(s).abs(), o = e;
    return De(n.greaterThan(i), () => {
      o.assign(s);
    }), De(a.greaterThan(i).and(a.greaterThan(n)), () => {
      o.assign(t);
    }), o;
  }), hs = b(([m, e]) => {
    const t = m.yz, s = m.xz, i = m.xy;
    let a = t;
    return a = A(a, s, e.y), a = A(a, i, e.z), a;
  }), Ca = b(([m, e, t, s, i]) => {
    const a = m.div(e).add(s), n = _(a.fract().sub(0.5).abs(), i.oneMinus().mul(0.5)), o = A(n.x, 1, n.y).oneMinus(), l = _(a.sub(0.5).fract().sub(0.5).abs().mul(2), t).mul(o);
    return A(l.x, 1, l.y);
  }), Aa = b(([m, e, t, s, i, a]) => {
    const n = t, o = m.div(e).add(s), l = o.fwidth().mul(a), r = qt(n, l, 1), h = l.mul(1.5), c = _(o.fract().sub(0.5).abs(), i.oneMinus().mul(0.5)), u = A(c.x, 1, c.y).oneMinus(), g = o.fract().mul(2).sub(1).abs().oneMinus();
    let p = rt(r.add(h), r.sub(h), g);
    return p = p.mul(qt(n.div(r), 0, 1)), p = A(p, n, qt(l.mul(2).sub(1), 0, 1)).mul(u), A(p.x, 1, p.y);
  });
  class $t {
    constructor(e = 16777215, t = 1, s = 0.05, i = 1, a = w(0)) {
      this.color = d(M(e)), this.scale = d(t), this.thickness = d(s), this.cross = d(i), this.offset = d(a);
    }
  }
  class Ea extends xi {
    constructor(e) {
      super(), this.normals = false, this.lights = false, this.isMeshGridMaterial = true, this.testNode = null, this.scaleNode = d(1), this.reference = "uv", this.antialiased = true, this.color = new X(0), this.lines = [
        new $t()
      ], this.setValues(e);
      const t = ka(vt), s = t.fwidth().length().oneMinus().clamp(0, 1);
      let i = k();
      this.reference === "worldTriplanar" ? i = hs(Q, t) : this.reference === "worldX" ? i = Q.yz : this.reference === "worldY" ? i = Q.xz : this.reference === "worldZ" ? i = Q.xy : this.reference === "localTriplanar" ? i = hs(positionLocal, t) : this.reference === "localX" ? i = positionLocal.yz : this.reference === "localY" ? i = positionLocal.xz : this.reference === "localZ" && (i = positionLocal.xy);
      let a = d(this.color);
      for (const n of this.lines) {
        const o = this.antialiased ? Aa(i, n.scale.mul(this.scaleNode), n.thickness, n.offset, n.cross, s) : Ca(i, n.scale.mul(this.scaleNode), n.thickness, n.offset, n.cross);
        a = A(a, n.color, o);
      }
      this.outputNode = C(a, 1);
    }
    get scale() {
      return this.scaleNode.value;
    }
    set scale(e) {
      this.scaleNode.value = e;
    }
  }
  class Ia {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F310} Grid",
        expanded: false
      })), this.setVisual();
    }
    setVisual() {
      const e = [
        new $t("#8d55ff", 10, 0.02, 0.2),
        new $t("#675369", 100, 2e-3, 1)
      ], t = new Ea({
        color: 1775903,
        scale: 1e-3,
        antialiased: true,
        reference: "uv",
        side: Ae,
        lines: e
      }), s = new V({
        colorNode: t.outputNode.rgb,
        hasWater: false,
        hasReveal: false,
        hasLightBounce: false
      });
      t.outputNode = b(() => (Q.xz.sub(this.game.reveal.position2Uniform).length().lessThan(this.game.reveal.distance).discard(), s.outputNode))(), this.mesh = new D(new Y(100, 100), t), this.mesh.position.y = 0, this.mesh.rotation.x = -Math.PI * 0.5;
      const i = this.game.respawns.getDefault();
      if (this.mesh.position.x = i.position.x, this.mesh.position.z = i.position.z, this.game.scene.add(this.mesh), this.game.debug.active) {
        this.debugPanel.addBinding(t, "scale", {
          min: 0,
          max: 2e-3,
          step: 1e-4
        });
        for (const a of e) {
          const n = this.debugPanel.addFolder({
            title: "Line",
            expanded: false
          });
          n.addBinding(a.scale, "value", {
            label: "scale",
            min: 0,
            max: 1,
            step: 1e-3
          }), n.addBinding(a.thickness, "value", {
            label: "thickness",
            min: 0,
            max: 1,
            step: 1e-3
          }), n.addBinding(a.offset, "value", {
            label: "offset",
            min: 0,
            max: 1,
            step: 1e-3
          }), n.addBinding(a.cross, "value", {
            label: "cross",
            min: 0,
            max: 1,
            step: 1e-3
          }), n.addBinding({
            color: "#" + a.color.value.getHexString(he)
          }, "color").on("change", (o) => a.color.value.set(o.value));
        }
      }
    }
    show() {
      this.game.scene.add(this.mesh);
    }
    destroy() {
      this.mesh.material.dispose(), this.mesh.geometry.dispose(), this.mesh.removeFromParent();
    }
  }
  class Ba {
    constructor() {
      this.game = T.getInstance(), this.subdivisions = 280;
      const e = this.game.view.optimalArea.radius;
      this.size = e * 2, this.count = this.subdivisions * this.subdivisions, this.fragmentSize = this.size / this.subdivisions, this.surface = this.size * this.size, this.surfaceIdeal = 2e3, this.surfaceOverflow = Math.max(0, this.surface - this.surfaceIdeal) / this.surfaceIdeal, this.setGeometry(), this.setMaterial(), this.setMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10), this.game.viewport.events.on("throttleChange", () => {
        const t = this.game.view.optimalArea.radius;
        this.size = t * 2, this.surface = this.size * this.size, this.surfaceOverflow = Math.max(0, this.surface - this.surfaceIdeal) / this.surfaceIdeal, this.sizeUniform.value = this.size, this.bladeWidth.value = 0.1 * (1 + this.surfaceOverflow * 0.4), this.bladeHeight.value = 0.6 * (1 + this.surfaceOverflow * 0.4), this.geometry.dispose(), this.setGeometry(), this.mesh.geometry = this.geometry;
      }, 2);
    }
    setGeometry() {
      const e = new Float32Array(this.count * 3 * 2), t = new Float32Array(this.count * 3);
      for (let s = 0; s < this.subdivisions; s++) {
        const i = (s / this.subdivisions - 0.5) * this.size + this.fragmentSize * 0.5;
        for (let a = 0; a < this.subdivisions; a++) {
          const n = (a / this.subdivisions - 0.5) * this.size + this.fragmentSize * 0.5, o = s * this.subdivisions + a, l = o * 3, r = o * 6, h = i + (Math.random() - 0.5) * this.fragmentSize, c = n + (Math.random() - 0.5) * this.fragmentSize;
          e[r] = h, e[r + 1] = c, e[r + 2] = h, e[r + 3] = c, e[r + 4] = h, e[r + 5] = c, t[l] = Math.random(), t[l + 1] = Math.random(), t[l + 2] = Math.random();
        }
      }
      this.geometry = new Ke(), this.geometry.boundingSphere = new ke(new y(), 1), this.geometry.setAttribute("position", new ne(e, 2)), this.geometry.setAttribute("heightRandomness", new ne(t, 1));
    }
    setMaterial() {
      this.center = d(new H());
      const e = Ce(Yt.toFloat().mod(3)), t = Ce(_(e, 0.5)), s = Ce(w()), i = Ce(w());
      this.bladeWidth = d(0.1 * (1 + this.surfaceOverflow * 0.5)), this.bladeHeight = d(0.6 * (1 + this.surfaceOverflow * 0.5)), this.bladeHeightRandomness = d(0.6), this.sizeUniform = d(this.size);
      const a = ws([
        0,
        1,
        1,
        0,
        -1,
        0
      ]), n = 0.1, o = this.game.terrain.terrainNode(i), l = o.g, r = _(o.g.sub(0.4), n), h = t.oneMinus().mul(l);
      if (this.material = new V({
        colorNode: this.game.terrain.colorNode(o),
        normalNode: E(0, 1, 0),
        hasWater: false,
        hasLightBounce: false,
        shadowNode: h
      }), this.material.positionNode = b(() => {
        const u = le("position").sub(this.center), g = this.sizeUniform.mul(0.5);
        u.x.assign(We(u.x.add(g), this.sizeUniform).sub(g)), u.y.assign(We(u.y.add(g), this.sizeUniform).sub(g));
        const p = E(u.x, 0, u.y).add(E(this.center.x, 0, this.center.y)), v = Et.mul(p);
        i.assign(v.xz);
        const x = P(this.game.noises.perlin, i.mul(0.0321)).r.add(0.5), S = this.bladeHeight.mul(this.bladeHeightRandomness.mul(le("heightRandomness")).add(this.bladeHeightRandomness.oneMinus())).mul(x).mul(l), I = E(a.element(e.mod(3).mul(2)).mul(this.bladeWidth).mul(l), a.element(e.mod(3).mul(2).add(1)).mul(S), 0), B = p.add(I), U = ft(v.z.sub(It.z), v.x.sub(It.x)).add(-Math.PI * 0.5);
        return B.xz.assign(_e(B.xz, U, v.xz)), s.assign(this.game.wind.offsetNode(v.xz).mul(t).mul(S).mul(2)), B.addAssign(E(s.x, 0, s.y)), B.y.addAssign(r.mul(100)), B;
      })(), this.game.debug.active) {
        const c = this.game.debug.panel.addFolder({
          title: "\u{1F331} Grass",
          expanded: false
        });
        c.addBinding(this.bladeWidth, "value", {
          label: "bladeWidth",
          min: 0,
          max: 1,
          step: 1e-3
        }), c.addBinding(this.bladeHeight, "value", {
          label: "bladeHeight",
          min: 0,
          max: 2,
          step: 1e-3
        }), c.addBinding(this.bladeHeightRandomness, "value", {
          label: "bladeHeightRandomness",
          min: 0,
          max: 1,
          step: 1e-3
        });
      }
    }
    setMesh() {
      this.mesh = new D(this.geometry, this.material), this.mesh.frustumCulled = false, this.mesh.receiveShadow = true, this.game.scene.add(this.mesh);
    }
    update() {
      this.center.value.set(this.game.view.optimalArea.position.x, this.game.view.optimalArea.position.z);
    }
  }
  class Na {
    constructor() {
      this.game = T.getInstance(), this.hasRipples = false, this.hasIce = false, this.hasSplashes = false, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F30A} Water surface",
        expanded: false
      }), this.ripplesDebugPanel = this.debugPanel.addFolder({
        title: "Ripples",
        expanded: true
      }), this.iceDebugPanel = this.debugPanel.addFolder({
        title: "Ice",
        expanded: true
      }), this.splashesDebugPanel = this.debugPanel.addFolder({
        title: "Splashes",
        expanded: true
      }), this.shoreDebugPanel = this.debugPanel.addFolder({
        title: "shore",
        expanded: true
      }), this.blurDebugPanel = this.debugPanel.addFolder({
        title: "blur",
        expanded: true
      })), this.setGeometry(), this.setNodes(), this.setMaterial(), this.setMesh(), this.setIce(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setGeometry() {
      this.geometry = new Y(1, 1, 1, 1), this.geometry.rotateX(-Math.PI * 0.5);
    }
    setNodes() {
      this.ripplesRatio = d(1);
      const e = d(10), t = d(0.1), s = d(0.345);
      this.ripplesRatioBinding = this.game.debug.addManualBinding(this.ripplesDebugPanel, this.ripplesRatio, "value", {
        label: "ripplesRatio",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => L(this.game.weather.temperature.value, 0, -3, 1, 0));
      const i = b(([x]) => {
        const I = x.b.add(this.game.wind.localTime.mul(0.5)).mul(e).floor(), B = P(this.game.noises.perlin, Q.xz.add(I.div(s)).mul(t)).r, U = x.b.add(this.game.wind.localTime.mul(0.5)).mul(e).mod(1).sub(x.b.remap(0, 1, -0.3, 1).oneMinus()).add(B);
        return U.assign(this.ripplesRatio.remap(0, 1, -1, -0.4).step(U)), U;
      });
      this.game.debug.active && (this.ripplesDebugPanel.addBinding(e, "value", {
        label: "ripplesSlopeFrequency",
        min: 0,
        max: 50,
        step: 0.01
      }), this.ripplesDebugPanel.addBinding(t, "value", {
        label: "ripplesNoiseFrequency",
        min: 0,
        max: 1,
        step: 0.01
      }), this.ripplesDebugPanel.addBinding(s, "value", {
        label: "ripplesNoiseOffset",
        min: 0,
        max: 1,
        step: 1e-3
      })), this.iceRatio = d(0);
      const a = d(0.3);
      this.iceRatioBinding = this.game.debug.addManualBinding(this.iceDebugPanel, this.iceRatio, "value", {
        label: "iceRatio",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => L(this.game.weather.temperature.value, 0, -5, 0, 1));
      const n = b(([x]) => {
        const S = P(this.game.noises.voronoi, Q.xz.mul(a)).g, I = x.b.remapClamp(0, this.iceRatio, 0, 1).toVar();
        return I.assign(S.step(I)), I;
      });
      this.game.debug.active && this.iceDebugPanel.addBinding(a, "value", {
        label: "iceNoiseFrequency",
        min: 0,
        max: 1,
        step: 0.01
      }), this.splashesRatio = d(0);
      const o = d(0.33), l = d(6), r = d(0.3), h = d(0.14), c = d(1);
      this.splashesRatioBinding = this.game.debug.addManualBinding(this.splashesDebugPanel, this.splashesRatio, "value", {
        label: "splashesRatio",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => Math.pow(this.game.weather.rain.value, 2));
      const u = b(() => {
        const x = P(this.game.noises.voronoi, Q.xz.mul(o)), S = P(this.game.noises.perlin, Q.xz.mul(o.mul(0.25))).r, I = x.r, B = tt(x.b.mul(123456)).add(S), U = this.game.wind.localTime.mul(l).add(B);
        I.assign(I.sub(U).mod(1));
        const q = x.g.remapClamp(h, c, 0, 1), G = r.mul(q);
        I.assign(I.step(G).oneMinus());
        const J = tt(x.b.mul(654321)).add(S).mod(1);
        return J.assign(this.splashesRatio.step(J)), I.assign(I.mul(J)), I;
      });
      this.game.debug.active && (this.splashesDebugPanel.addBinding(o, "value", {
        label: "splashesNoiseFrequency",
        min: 0,
        max: 1,
        step: 0.01
      }), this.splashesDebugPanel.addBinding(l, "value", {
        label: "splashesTimeFrequency",
        min: 0,
        max: 100,
        step: 0.1
      }), this.splashesDebugPanel.addBinding(r, "value", {
        label: "splashesThickness",
        min: 0,
        max: 1,
        step: 0.01
      }), this.splashesDebugPanel.addBinding(h, "value", {
        label: "splashesEdgeAttenuationLow",
        min: 0,
        max: 1,
        step: 0.01
      }), this.splashesDebugPanel.addBinding(c, "value", {
        label: "splashesEdgeAttenuationHigh",
        min: 0,
        max: 1,
        step: 0.01
      }));
      const g = d(0.17), p = b(([x]) => g.step(x.b));
      this.game.debug.active && this.shoreDebugPanel.addBinding(g, "value", {
        label: "shoreEdge",
        min: 0,
        max: 0.3,
        step: 1e-3
      }), this.detailsMask = () => b(() => {
        const x = this.game.terrain.terrainNode(Q.xz), S = F(0);
        return this.hasRipples && S.assign(ge(S, i(x))), this.hasIce && S.assign(ge(S, n(x))), this.hasSplashes && S.assign(ge(S, u())), S.assign(ge(S, p(x))), S;
      })();
      const v = d(0.01);
      this.blurOutputNode = b(() => {
        const x = fs(Pi(Ze), 0.01, {
          repeats: 25,
          premultipliedAlpha: true
        });
        return E(x);
      }), this.game.debug.active && this.blurDebugPanel.addBinding(v, "value", {
        label: "blurStrength",
        min: 0,
        max: 0.1
      });
    }
    setMaterial() {
      const e = new V({
        depthWrite: false,
        colorNode: M(16777215),
        alphaNode: this.detailsMask(),
        alphaTest: 0,
        hasCoreShadows: false,
        hasDropShadows: true,
        hasLightBounce: false,
        hasFog: true,
        hasWater: false,
        transparent: true
      }), t = e.outputNode, s = b(() => {
        const a = this.blurOutputNode(), n = t.a, o = C(t.rgb, 1);
        return Si(n.lessThan(0.5), a, o);
      })(), i = (a) => {
        a === 0 ? e.outputNode = s : a === 1 && (e.outputNode = t), e.needsUpdate = true;
      };
      i(this.game.quality.level), this.game.quality.events.on("change", i), e.maskShadowNode = this.detailsMask().greaterThan(0.5), this.material ? (this.material.dispose(), this.material = e, this.mesh.material = this.material) : this.material = e;
    }
    setMesh() {
      this.mesh = new D(this.geometry, this.material);
      const e = this.game.view.optimalArea.radius;
      this.mesh.scale.setScalar(e * 2), this.mesh.position.y = this.game.water.surfaceElevation, this.mesh.castShadow = true, this.mesh.receiveShadow = true, this.game.scene.children.unshift(this.mesh), this.game.viewport.events.on("throttleChange", () => {
        const t = this.game.view.optimalArea.radius;
        this.mesh.scale.setScalar(t * 2);
      }, 2);
    }
    setIce() {
      this.ice = {}, this.ice.halfThickness = 0.5, this.ice.physical = this.game.physics.getPhysical({
        type: "kinematicPositionBased",
        position: new y(0, this.game.water.surfaceElevation - this.ice.halfThickness, 0),
        frictionRule: "min",
        friction: 0.02,
        enabled: false,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              256,
              this.ice.halfThickness,
              256
            ]
          }
        ]
      });
    }
    update() {
      this.ripplesRatioBinding.update(), this.iceRatioBinding.update(), this.splashesRatioBinding.update(), this.mesh.position.x = this.game.view.optimalArea.position.x, this.mesh.position.z = this.game.view.optimalArea.position.z, this.mesh.renderOrder = 1;
      const e = this.ripplesRatio.value > 1e-4, t = this.iceRatio.value > 1e-4, s = this.splashesRatio.value > 1e-4;
      (e !== this.hasRipples || t !== this.hasIce || s !== this.hasSplashes) && (this.hasRipples = e, this.hasIce = t, this.hasSplashes = s, this.setMaterial());
      const i = ye(0.5, 0.02, this.iceRatio.value);
      this.ice.physical.body.collider(0).setFriction(i), this.ice.physical.body.setNextKinematicTranslation({
        x: 0,
        y: ye(-1.5 - this.ice.halfThickness, this.game.water.surfaceElevation - this.ice.halfThickness, this.iceRatio.value),
        z: 0
      }), this.iceRatio.value > 0 ? this.ice.physical.body.isEnabled() || this.game.objects.enable(this.ice) : this.ice.physical.body.isEnabled() && this.game.objects.disable(this.ice);
    }
  }
  class qs {
    constructor(e) {
      this.items = /* @__PURE__ */ new Map(), e && this.parse(e);
    }
    parse(e) {
      e.traverse((t) => {
        const i = t.name.match(/^ref(?:erence)?([^0-9]+)([0-9]+)?$/);
        if (i) {
          const a = i[1].charAt(0).toLowerCase() + i[1].slice(1);
          this.items.has(a) ? this.items.get(a).push(t) : this.items.set(a, [
            t
          ]);
        }
      });
    }
    getStartingWith(e) {
      const t = /* @__PURE__ */ new Map();
      return this.items.forEach((s, i) => {
        if (i.startsWith(e)) {
          let a = i.replace(new RegExp(`^${e}(.+)$`), "$1");
          a = a.charAt(0).toLowerCase() + a.slice(1), t.set(a, s);
        }
      }), t;
    }
  }
  class Pe {
    constructor(e) {
      this.game = T.getInstance(), this.model = e, this.isIn = false, this.events = new se(), this.references = new qs(), this.setObjects(), this.setBounding(), this.setFrustum(), this.game.ticker.events.on("tick", () => {
        this.frustum && this.frustum.test(), typeof this.update == "function" && (!this.frustum || this.frustum.isIn) && this.update();
      }, 10);
    }
    setObjects() {
      var _a2;
      this.objects = {}, this.objects.items = [], this.objects.hideable = [];
      const e = [
        ...this.model.children
      ];
      for (const t of e) {
        if (typeof t.userData.preventAutoAdd > "u" || t.userData.preventAutoAdd === false) {
          const s = this.game.objects.addFromModel(t, {}, {
            position: t.position.add(this.model.position),
            rotation: t.quaternion,
            sleeping: true,
            mass: t.userData.mass
          });
          this.objects.items.push(s), (s.visual && (!s.physical || ((_a2 = s.physical) == null ? void 0 : _a2.type) === "fixed") && typeof t.userData.preventFrustum > "u" || t.userData.preventFrustum === false) && this.objects.hideable.push(s.visual.object3D);
        }
        this.references.parse(t);
      }
    }
    setBounding() {
      let e = this.references.items.get("zoneBounding");
      if (!e) return;
      e = e[0];
      const t = e.position.clone(), s = e.scale.x, i = this.game.zones.create("cylinder", t, s);
      i.events.on("enter", () => {
        this.isIn = true, this.events.trigger("boundingIn");
      }), i.events.on("leave", () => {
        this.isIn = false, this.events.trigger("boundingOut");
      });
    }
    setFrustum() {
      let e = this.references.items.get("zoneFrustum");
      e && (this.frustum = {}, this.frustum.position = new H(e[0].position.x, e[0].position.z), this.frustum.radius = e[0].scale.x, this.frustum.isIn = null, this.frustum.alwaysVisible = false, this.frustum.test = () => {
        if (this.frustum.alwaysVisible || ca(this.frustum.position, this.frustum.radius, [
          this.game.view.optimalArea.quad2[0].offseted,
          this.game.view.optimalArea.quad2[1].offseted,
          this.game.view.optimalArea.quad2[2].offseted,
          this.game.view.optimalArea.quad2[3].offseted
        ])) {
          if (this.frustum.isIn === false || this.frustum.isIn === null) {
            for (const s of this.objects.hideable) s.visible = true;
            typeof helper < "u" && helper.material.color.set("#44ff88").multiplyScalar(2), this.frustum.isIn = true, this.events.trigger("frustumIn");
          }
        } else if (this.frustum.isIn === true || this.frustum.isIn === null) {
          for (const s of this.objects.hideable) s.visible = false;
          typeof helper < "u" && helper.material.color.set("#ff4488").multiplyScalar(2), this.frustum.isIn = false, this.events.trigger("frustumOut");
        }
      });
    }
  }
  class Da extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F480} Altar",
        expanded: false
      })), this.value = 0, this.position = this.references.items.get("altar")[0].position.clone(), this.color = d(M("#ff544d")), this.emissive = d(8), this.progressUniform = d(0), this.setSounds(), this.setBeam(), this.setBeamParticles(), this.setGlyphs(), this.setCounter(), this.setDeathZone(), this.setData(), this.setAchievement(), this.game.server.connected || this.updateText("..."), this.game.server.events.on("disconnected", () => {
        this.updateText("...");
      }), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, this.color.value, "color"), this.debugPanel.addBinding(this.emissive, "value", {
        label: "emissive",
        min: 0,
        max: 10,
        step: 0.1
      }));
    }
    setSounds() {
      this.sounds = {}, this.sounds.chimers = this.game.audio.register({
        path: "sounds/magic/Ghostly Whisper Background Loop 9.mp3",
        autoplay: true,
        loop: true,
        volume: 0.15,
        positions: this.references.items.get("altar")[0].position,
        distanceFade: 20
      }), this.sounds.deathBell1 = this.game.audio.register({
        path: "sounds/bell/Death Hit.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4
      }), this.sounds.deathBell2 = this.game.audio.register({
        path: "sounds/bell/Epic Bell Impact Hit.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4
      });
    }
    setBeam() {
      this.height = 6, this.beamAttenuation = d(2);
      const t = new Zt(2.5, 2.5, this.height, 32, 1, true);
      t.translate(0, this.height * 0.5, 0);
      const s = new O({
        side: Ae
      });
      s.outputNode = b(() => {
        const r = k(), h = w(r.x.mul(6).add(r.y.mul(-2)), r.y.mul(1).sub(this.game.ticker.elapsedScaledUniform.mul(0.2))), c = P(this.game.noises.perlin, h).r;
        c.addAssign(r.y.mul(this.beamAttenuation.add(1)));
        const u = this.color.mul(this.emissive), g = this.game.fog.strength.mix(E(0), this.game.fog.color), p = _(0.65, c), v = A(u, g, p);
        return c.greaterThan(1).discard(), C(v, 1);
      })();
      const i = new D(t, s);
      i.position.copy(this.position), this.game.scene.add(i), this.objects.hideable.push(i);
      const a = new Y(2.5 * 2, 2.5 * 2, 1, 1), n = this.game.resources.satanStarTexture;
      n.minFilter = W, n.magFilter = W, n.generateMipmaps = false;
      const o = new O({
        transparent: true
      });
      o.outputNode = b(() => {
        const r = k().sub(0.5).mul(1.7).add(0.5);
        r.y.assign(r.y.oneMinus());
        const h = P(n, r).r, c = this.game.fog.strength.mix(E(0), this.game.fog.color), u = this.color.mul(this.emissive), g = A(c, u, h);
        return C(g, 1);
      })();
      const l = new D(a, o);
      l.position.copy(this.position), l.rotation.x = -Math.PI * 0.5, this.game.scene.add(l), this.objects.hideable.push(l), this.animateBeam = () => {
        f.to(this.beamAttenuation, {
          value: 0,
          ease: "power2.out",
          duration: 0.4,
          onComplete: () => {
            f.to(this.beamAttenuation, {
              value: 2,
              ease: "power2.in",
              duration: 3
            });
          }
        });
      };
    }
    setBeamParticles() {
      const t = d(0), s = new Float32Array(450), i = new Float32Array(150), a = new Float32Array(150);
      for (let u = 0; u < 150; u++) {
        const g = u * 3, p = new bt((1 - Math.pow(1 - Math.random(), 2)) * 5, Math.random() * Math.PI * 0.4, Math.random() * Math.PI * 2), v = new y().setFromSpherical(p);
        s[g + 0] = v.x, s[g + 1] = v.y, s[g + 2] = v.z, i[u] = Math.random(), a[u] = Math.random();
      }
      const n = ee(s, "vec3").toAttribute(), o = ee(i, "float").toAttribute(), l = ee(a, "float").toAttribute(), r = new Je();
      r.outputNode = b(() => {
        const u = k().sub(0.5).length(), g = this.game.fog.strength.mix(E(0), this.game.fog.color), p = this.color.mul(this.emissive), v = A(g, p, _(u, 0.35));
        return u.greaterThan(0.5).discard(), C(v, 1);
      })(), r.positionNode = b(() => {
        const u = t.remapClamp(0, 0.5, 1, 0).pow(6).oneMinus(), g = n.toVar().mulAssign(u);
        return g.y.addAssign(t.mul(l)), g;
      })(), r.scaleNode = b(() => rt(1, 0.3, t).mul(o))();
      const h = new Y(0.2, 0.2), c = new D(h, r);
      c.count = 150, c.position.copy(this.position), c.position.y -= 0.1, this.game.scene.add(c), this.objects.hideable.push(c), this.animateBeamParticles = () => {
        f.fromTo(t, {
          value: 0
        }, {
          value: 1,
          ease: "linear",
          duration: 3
        });
      };
    }
    setGlyphs() {
      const t = new Float32Array(120), s = new Float32Array(40);
      for (let g = 0; g < 40; g++) {
        const p = Math.PI * 2 * Math.random(), v = Math.random() * 5, x = Math.random() * 8;
        t[g * 3 + 0] = Math.sin(p) * x, t[g * 3 + 1] = v, t[g * 3 + 2] = Math.cos(p) * x, s[g] = 0.2 + Math.random() * 0.8;
      }
      const i = ee(t, "vec3").toAttribute(), a = ee(s, "float").toAttribute(), n = new Je({
        transparent: true
      }), o = Ce(F(0));
      n.positionNode = b(() => {
        o.assign(this.game.ticker.elapsedScaledUniform.mul(0.05).add(F(re).div(40)).fract());
        const g = i.toVar();
        return g.y.addAssign(o.mul(a)), g;
      })(), n.scaleNode = b(() => Be(o.remapClamp(0, 0.1, 0, 1), o.remapClamp(0.7, 0.8, 1, 0), 1).mul(0.2))();
      const l = this.game.materials.getFromName("emissiveBlueRadialGradient"), r = this.game.materials.getFromName("emissiveOrangeRadialGradient");
      n.outputNode = b(() => {
        const g = k().toVar();
        return g.x.addAssign(re), g.x.divAssign(32), P(this.game.resources.achievementsGlyphsTexture, g).r.lessThan(0.5).discard(), A(r.outputNode, l.outputNode, F(re).div(40).step(this.progressUniform));
      })();
      const h = new Y(1, 1), c = new D(h, n);
      c.renderOrder = 3, c.position.x = this.position.x, c.position.y = 0, c.position.z = this.position.z, c.count = 40, this.game.scene.add(c), this.objects.hideable.push(c);
      let u = true;
      this.events.on("frustumIn", () => {
        u && (this.game.ticker.wait(2, () => {
          c.geometry.boundingSphere.center.y = 2, c.geometry.boundingSphere.radius = 5;
        }), u = false);
      });
    }
    setCounter() {
      this.width = 256, this.height = this.width * 0.25, this.font = `700 ${this.height}px "Amatic SC"`;
      const s = document.createElement("canvas");
      s.width = this.width, s.height = this.height, this.textTexture = new Ne(s), this.textTexture.colorSpace = he, this.textTexture.minFilter = W, this.textTexture.magFilter = W, this.textTexture.generateMipmaps = false, this.context = s.getContext("2d"), this.context.font = this.font;
      const i = new Y(3, 3 * 0.25, 1, 1), a = new O({
        transparent: true
      });
      a.outputNode = b(() => {
        const n = P(this.textTexture, k()), o = this.game.fog.strength.mix(E(0), this.game.fog.color), l = this.color.mul(this.emissive), r = A(o, l, n.g);
        return n.r.add(n.g).lessThan(0.5).discard(), C(r, 1);
      })(), this.mesh = new D(i, a), this.references.items.get("counter")[0].add(this.mesh);
    }
    setDeathZone() {
      const e = this.position.clone();
      e.y -= 1.25, this.game.zones.create("sphere", e, 2.5).events.on("enter", () => {
        this.animateBeam(), this.animateBeamParticles(), this.data.insert(), this.updateText(this.value + 1), this.game.player.die(), this.sounds.deathBell2.play(), f.delayedCall(2.2, () => {
          this.sounds.deathBell1.play();
        }), this.game.achievements.setProgress("sacrifice", 1);
      });
    }
    setData() {
      this.data = {}, this.data.insert = () => {
        this.game.server.send({
          type: "cataclysmInsert"
        });
      }, this.game.server.events.on("message", (e) => {
        (e.type === "init" || e.type === "cataclysmUpdate") && (this.updateText(e.cataclysmCount), this.progressUniform.value = e.cataclysmProgress);
      }), this.game.server.initData && (this.updateText(this.game.server.initData.cataclysmCount), this.progressUniform.value = this.game.server.initData.cataclysmProgress);
    }
    updateText(e) {
      let t = null;
      if (typeof e == "number") {
        if (e === this.value) return;
        this.value = e, t = e.toLocaleString("en-US");
      } else t = e;
      this.context.font = this.font, this.context.fillStyle = "#000000", this.context.fillRect(0, 0, this.width, this.height), this.context.font = this.font, this.context.textAlign = "center", this.context.textBaseline = "middle", this.context.strokeStyle = "#ff0000", this.context.lineWidth = this.height * 0.15, this.context.strokeText(t, this.width * 0.5, this.height * 0.55), this.context.fillStyle = "#00ff00", this.context.fillText(t, this.width * 0.5, this.height * 0.55), this.textTexture.needsUpdate = true, f.to(this.mesh.scale, {
        x: 1.5,
        y: 1.5,
        duration: 0.3,
        overwrite: true,
        onComplete: () => {
          f.to(this.mesh.scale, {
            x: 1,
            y: 1,
            duration: 2,
            ease: "elastic.out(1,0.3)",
            overwrite: true
          });
        }
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "altar");
      });
    }
  }
  class ue {
    constructor(e = [], t = null, s = true) {
      this.game = T.getInstance(), this.references = e, this.group = t, this.count = this.references.length, this.needsUpdate = false, this.setMeshes(), s && this.game.ticker.events.on("tick", () => {
        this.update();
      }, 13), this.update();
    }
    setMeshes() {
      this.meshes = [], this.group.traverse((e) => {
        if (e.isMesh) {
          const t = {};
          e.updateMatrix(), e.updateWorldMatrix(), t.localMatrix = e.matrix, t.instance = new lt(e.geometry, e.material, this.count), t.instance.name = e.name, t.instance.castShadow = e.castShadow, t.instance.receiveShadow = e.receiveShadow, t.instance.frustumCulled = e.frustumCulled, this.game.scene.add(t.instance), this.meshes.push(t);
        }
      });
    }
    static getReferencesFromChildren(e) {
      const t = [];
      for (const s of e) {
        const i = new $e();
        i.position.copy(s.position), i.rotation.copy(s.rotation), i.scale.copy(s.scale), i.needsUpdate = true, t.push(i);
      }
      return t;
    }
    static getBaseAndReferencesFromInstances(e) {
      const t = e[0].clone();
      t.position.set(0, 0, 0), t.rotation.set(0, 0, 0);
      const s = ue.getReferencesFromChildren(e);
      return [
        t,
        s
      ];
    }
    updateBoundings() {
      for (const e of this.meshes) e.instance.computeBoundingSphere();
    }
    update() {
      let e = 0, t = 0;
      for (const s of this.references) {
        if (this.needsUpdate || s.needsUpdate) {
          e++, s.needsUpdate = false, s.updateMatrixWorld();
          for (const i of this.meshes) {
            const a = i.localMatrix.clone().premultiply(s.matrixWorld);
            i.instance.setMatrixAt(t, a);
          }
        }
        t++;
      }
      if (e) for (const s of this.meshes) s.instance.instanceMatrix.needsUpdate = true;
      this.needsUpdate = false;
    }
  }
  const _N = class _N {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F539} Interactive Areas",
        expanded: false
      })), this.items = [], this.activeItem = null, this.revealed = false, this.temporaryHidden = true, this.needsTest = false, this.setSounds(), this.setGeometries(), this.setMaterials(), this.setKeyIcon(), this.setInputs(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 9);
    }
    setSounds() {
      this.sounds = {}, this.sounds.reveal = this.game.audio.register({
        group: "reveal",
        path: "sounds/paper/PaperMovement_fNAyV_01-3.mp3",
        autoplay: false,
        volume: 0.25
      }), this.sounds.conceal = this.game.audio.register({
        group: "reveal",
        path: "sounds/paper/PaperMovement_fNAyV_01-2.mp3",
        autoplay: false,
        volume: 0.25
      });
    }
    setGeometries() {
      this.geometries = {}, this.geometries.plane = new Y(2, 2), this.geometries.label = new Y(1, 1, 1, 1), this.geometries.label.translate(0.5, 0, 0);
    }
    setMaterials() {
      this.materials = {}, this.playerPosition = d(w()), this.backColor = d(M("#251f2b")), this.frontColor = d(M("#ffffff")), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, this.backColor.value, "backColor"), this.game.debug.addThreeColorBinding(this.debugPanel, this.frontColor.value, "lineColor"));
    }
    setKeyIcon() {
      const e = new et({
        transparent: true,
        depthTest: false
      }), t = b(([i]) => (i.lessThan(0.5).discard(), C(E(this.frontColor), 1)));
      e.outputNode = t(P(this.game.resources.interactivePointsKeyIconEnterTexture, w(k().x, k().y.oneMinus())).r);
      const s = new D(this.geometries.plane, e);
      s.renderOrder = 8, s.scale.setScalar(0), s.position.z = 0.01, s.visible = false, this.game.inputs.gamepad.events.on("typeChange", () => {
        if (this.game.inputs.mode === K.MODE_GAMEPAD) {
          let i = this.game.resources.interactivePointsKeyIconCrossTexture;
          this.game.inputs.gamepad.type === "xbox" && (i = this.game.resources.interactivePointsKeyIconATexture), e.outputNode = t(P(i, w(k().x, k().y.oneMinus())).r), e.needsUpdate = true;
        }
      }), this.game.inputs.events.on("modeChange", () => {
        if (this.game.inputs.mode === K.MODE_GAMEPAD) {
          let i = this.game.resources.interactivePointsKeyIconCrossTexture;
          this.game.inputs.gamepad.type === "xbox" && (i = this.game.resources.interactivePointsKeyIconATexture), e.outputNode = t(P(i, w(k().x, k().y.oneMinus())).r), e.needsUpdate = true;
        } else this.game.inputs.mode === K.MODE_MOUSEKEYBOARD ? (e.outputNode = t(P(this.game.resources.interactivePointsKeyIconEnterTexture, w(k().x, k().y.oneMinus())).r), e.needsUpdate = true) : this.game.inputs.mode === K.MODE_TOUCH && (s.visible = false);
      }), this.keyIcon = s;
    }
    setInputs() {
      this.game.inputs.events.on("interact", (e) => {
        e.active && this.activeItem && this.activeItem.state === _N.STATE_OPEN && this.activeItem.interact();
      }), this.game.inputs.interactiveButtons.events.on("interact", () => {
        this.activeItem && this.activeItem.state === _N.STATE_OPEN && this.activeItem.interact();
      });
    }
    create(e, t = "", s = _N.ALIGN_LEFT, i = _N.STATE_CONCEALED, a = null, n = null, o = null, l = null) {
      const r = e.clone(), h = new at();
      h.rotation.reorder("YXZ"), h.rotation.x = -Math.PI * 0.15, h.rotation.y = Math.PI * 0.25, h.position.copy(r), h.scale.setScalar(0.85), this.game.scene.add(h);
      const c = [], u = 64, g = s === _N.ALIGN_LEFT ? 60 : 12, p = s === _N.ALIGN_LEFT ? 12 : 60, v = 2, x = `700 ${u}px "Amatic SC"`, S = document.createElement("canvas");
      S.style.position = "fixed", S.style.zIndex = 999, S.style.top = 0, S.style.left = 0;
      const I = S.getContext("2d");
      I.font = x;
      const B = I.measureText(t), U = Math.ceil(B.width) + g + p + 2;
      S.width = U, S.height = u, I.fillStyle = "#000000", I.fillRect(0, 0, U, u), I.font = x, I.fillStyle = "#ffffff", I.textAlign = "start", I.textBaseline = "middle", I.fillText(t, g + 1, u * 0.5 + v);
      const q = new Ne(S);
      q.minFilter = W, q.magFilter = W, q.generateMipmaps = false, q.needsUpdate = true;
      const G = new et({
        transparent: true,
        depthTest: true
      });
      c.push(G);
      const oe = d(1);
      G.outputNode = b(() => {
        const we = w(k().x.sub(oe), k().y), Oe = P(q, we).r;
        we.x.greaterThan(1).discard(), we.x.lessThan(0).discard();
        const Ue = this.game.fog.strength.mix(this.backColor, this.game.fog.color), ht = A(Ue, this.frontColor, Oe);
        return C(E(ht), 1);
      })();
      const J = new D(this.geometries.label, G);
      J.renderOrder = 6, J.scale.x = 0.75 * U / u, J.scale.y = 0.75, J.position.z = -0.01, J.position.x = s === _N.ALIGN_LEFT ? 0 : -J.scale.x, J.visible = false, h.add(J);
      const pe = new et({
        transparent: true,
        depthTest: true
      });
      c.push(pe);
      const fe = d(0), Ee = d(0.15), Ie = d(0.175);
      pe.outputNode = b(() => {
        const we = k(), Oe = ge(we.x.sub(0.5).abs(), we.y.sub(0.5).abs()).mul(2), Ue = fe.sub(Oe).sub(Ie).abs(), ht = _(Ue, Ee.mul(0.5));
        Oe.greaterThan(fe).discard();
        const Ut = this.game.fog.strength.mix(this.backColor, this.game.fog.color), Gt = A(Ut, this.frontColor, ht);
        return C(E(Gt), 1);
      })();
      const Se = new D(this.geometries.plane, pe);
      Se.renderOrder = 7, Se.rotation.z = Math.PI * 0.25, Se.visible = false, h.add(Se);
      const R = {};
      return R.position = new H(e.x, e.z), R.interactCallback = a, R.revealCallback = n, R.concealCallback = o, R.hideCallback = l, R.isIn = false, R.state = this.temporaryHidden ? _N.STATE_HIDDEN : i, R.recoveryState = i, R.materials = c, this.items.push(R), R.intersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(r, 0.75),
        onClick: () => {
          R.state !== _N.STATE_HIDDEN && R.interact();
        },
        onEnter: () => {
          R.state !== _N.STATE_HIDDEN && (R !== this.activeItem && this.activeItem !== null && this.activeItem.conceal(), this.activeItem = R, R.reveal());
        },
        onLeave: () => {
          this.activeItem === R && R.state !== _N.STATE_HIDDEN && (R.conceal(), this.activeItem = null);
        }
      }), R.hide = () => {
        R.state !== _N.STATE_HIDDEN && (R.state = _N.STATE_HIDDEN, R.intersect.active = false, f.to(fe, {
          value: 0,
          ease: "back.in(4.5)",
          duration: 0.6,
          overwrite: true
        }), f.to(Ee, {
          value: 0.15,
          ease: "back.in(4.5)",
          duration: 0.6,
          overwrite: true
        }), f.to(Ie, {
          value: 0.175,
          ease: "back.in(4.5)",
          duration: 0.6,
          overwrite: true,
          onComplete: () => {
            Se.visible = false, J.visible = false;
          }
        }), f.to(this.keyIcon.scale, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power2.in",
          duration: 0.6,
          overwrite: true,
          onComplete: () => {
            this.keyIcon.visible = false;
          }
        }), f.to(oe, {
          value: 1,
          ease: "power2.in",
          duration: 0.6,
          overwrite: true
        }), this.activeItem && this.activeItem === R && (this.activeItem = null), typeof R.hideCallback == "function" && R.hideCallback());
      }, R.reveal = () => {
        if (R.state !== _N.STATE_OPEN) {
          R.state = _N.STATE_OPEN, R.intersect.active = true, Se.visible = true, J.visible = true, h.add(this.keyIcon), f.to(fe, {
            value: 0.5,
            ease: "elastic.out(1.3,0.4)",
            duration: 1.5,
            overwrite: true
          }), f.to(Ee, {
            value: 0.075,
            ease: "elastic.out(1.3,0.4)",
            duration: 1.5,
            overwrite: true
          }), f.to(Ie, {
            value: 0.15,
            ease: "elastic.out(1.3,0.4)",
            duration: 1.5,
            overwrite: true
          }), this.game.inputs.mode !== K.MODE_TOUCH && (this.keyIcon.visible = true, this.keyIcon.scale.setScalar(0), f.to(this.keyIcon.scale, {
            x: 0.25,
            y: 0.25,
            z: 0.25,
            ease: "elastic.out(1.3,0.8)",
            duration: 1.5,
            delay: 0.6,
            overwrite: true
          })), f.to(oe, {
            value: 0,
            ease: "power2.out",
            duration: 0.6,
            delay: 0.2,
            overwrite: true
          });
          for (const we of R.materials) we.depthTest = false, we.needsUpdate = true;
          this.sounds.reveal.play(), typeof R.revealCallback == "function" && R.revealCallback();
        }
      }, R.conceal = () => {
        if (R.state === _N.STATE_CONCEALED) return;
        const we = R.state;
        R.state = _N.STATE_CONCEALED, R.intersect.active = true, Se.visible = true;
        const Oe = we === _N.STATE_HIDDEN ? "power2.out" : "back.in(4.5)";
        f.to(fe, {
          value: 0.25,
          ease: Oe,
          duration: 0.6,
          delay: 0.2,
          overwrite: true
        }), f.to(Ee, {
          value: 0.15,
          ease: Oe,
          duration: 0.6,
          delay: 0.2,
          overwrite: true
        }), f.to(Ie, {
          value: 0.175,
          ease: Oe,
          duration: 0.6,
          delay: 0.2,
          overwrite: true,
          onComplete: () => {
            J.visible = false;
            for (const Ue of R.materials) Ue.depthTest = true, Ue.needsUpdate = true;
          }
        }), this.activeItem === R && f.to(this.keyIcon.scale, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power2.in",
          duration: 0.6,
          overwrite: true,
          onComplete: () => {
            this.keyIcon.visible = false;
          }
        }), f.to(oe, {
          value: s === _N.ALIGN_LEFT ? -1 : 1,
          ease: "power2.in",
          duration: 0.6,
          overwrite: true
        }), this.sounds.conceal.play(), typeof R.concealCallback == "function" && R.concealCallback();
      }, R.interact = () => {
        f.to(fe, {
          value: 0.6,
          ease: "power2.out",
          duration: 0.1,
          overwrite: true,
          onComplete: () => {
            f.to(fe, {
              value: 0.5,
              ease: "elastic.out(1.3,0.6)",
              duration: 1.5,
              overwrite: true
            });
          }
        }), typeof R.interactCallback == "function" && R.interactCallback();
      }, R.show = () => {
        R.isIn ? R.reveal() : R.conceal(), this.needsTest = true;
      }, i === _N.STATE_CONCEALED && (this.revealed ? (R.state = i, R.intersect.active = false, Se.visible = true, fe.value = 0.25) : (R.state = _N.STATE_HIDDEN, R.showAfterReveal = true)), this.game.debug.active && (this.debugPanel.addBinding(fe, "value", {
        label: "threshold",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(Ee, "value", {
        label: "lineThickness",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(Ie, "value", {
        label: "lineOffset",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(oe, "value", {
        label: "labelOffset",
        min: 0,
        max: 1,
        step: 1e-3
      })), R;
    }
    update() {
      if (Math.hypot(this.playerPosition.value.x - this.game.player.position2.x, this.playerPosition.value.y - this.game.player.position2.y) > 0.2 || this.needsTest) {
        this.needsTest = false, this.playerPosition.value.copy(this.game.player.position2);
        let t = 1 / 0, s = null;
        for (const i of this.items) {
          const a = Math.hypot(i.position.x - this.game.player.position2.x, i.position.y - this.game.player.position2.y);
          a < 2.5 ? a < t && i.state !== _N.STATE_HIDDEN && (s = i) : i.isIn && (i.isIn = false, i.state !== _N.STATE_HIDDEN && i.conceal());
        }
        s ? (s !== this.activeItem && this.activeItem !== null && (this.activeItem.isIn = false, this.activeItem.conceal()), (!s.isIn || this.activeItem === null) && (this.activeItem = s, s.isIn = true, s.reveal())) : this.activeItem = null;
      }
    }
    temporaryHide() {
      this.temporaryHidden = true;
      for (const e of this.items) e.recoveryState = e.state, e.hide();
    }
    recover() {
      this.temporaryHidden = false;
      for (const e of this.items) e.recoveryState !== _N.STATE_HIDDEN && e.show();
    }
  };
  __publicField(_N, "ALIGN_LEFT", 1);
  __publicField(_N, "ALIGN_RIGHT", 2);
  __publicField(_N, "STATE_HIDDEN", 3);
  __publicField(_N, "STATE_OPEN", 4);
  __publicField(_N, "STATE_CONCEALED", 5);
  let N = _N;
  class Ra extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F36A} Cookie Stand",
        expanded: false
      })), this.setSound(), this.setBlower(), this.setBanner(), this.setParticles(), this.setOvenHeat(), this.setCookies(), this.setActualCookies(), this.setInteractivePoint(), this.setCounter(), this.setAchievement();
    }
    setSound() {
      this.sounds = {}, this.sounds.ding = this.game.audio.register({
        path: "sounds/ding/Cash Register 03.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.15,
        onPlay: (e) => {
          e.volume = 0.3 + Math.random() * 0.2, e.rate = 1 + Math.random() * 0.05;
        }
      });
    }
    setBlower() {
      this.blower = this.references.items.get("blower")[0];
    }
    setBanner() {
      const e = F(0).toVarying(), t = this.references.items.get("banner")[0];
      t.material.positionNode = b(() => {
        const s = k(), i = Z.toVar(), a = s.mul(w(0.35, 0.175)).sub(w(0.1, 0.05).mul(this.game.ticker.elapsedScaledUniform)), n = P(this.game.noises.perlin, a).r;
        e.assign(n.mul(s.y).mul(this.game.wind.strength));
        const o = E(0.5, 0, 1);
        return i.addAssign(o.mul(e)), i;
      })();
    }
    setParticles() {
      const e = this.game.materials.getFromName("emissiveOrangeRadialGradient"), t = 30, s = d(3), i = new Float32Array(t * 3), a = new Float32Array(t);
      this.localTime = d(0);
      for (let g = 0; g < t; g++) {
        const p = g * 3, v = Math.PI * 2 * Math.random(), x = Math.pow(Math.random(), 1.5) * 0.4;
        i[p + 0] = Math.cos(v) * x, i[p + 1] = Math.random(), i[p + 2] = Math.sin(v) * x, a[g] = Math.random() * 1 + 0.75;
      }
      const n = ee(i, "vec3").toAttribute(), o = ee(a, "float").toAttribute(), l = new Je();
      l.outputNode = e.outputNode;
      const r = F(0).toVar();
      l.positionNode = b(() => {
        const g = n.toVar();
        r.assign(g.y.add(this.localTime.mul(g.y)).fract()), g.y.assign(r.mul(s));
        const p = _(0.8, r).mul(100);
        return g.y.addAssign(p), g;
      })(), l.scaleNode = b(() => {
        const g = r.remapClamp(0.5, 1, 1, 0);
        return o.mul(g);
      })();
      const h = new _t(0.015, 8), c = new D(h, l);
      c.position.copy(this.references.items.get("chimney")[0].position), c.count = t, this.game.scene.add(c);
      let u = true;
      this.events.on("frustumIn", () => {
        u && (this.game.ticker.wait(2, () => {
          c.geometry.boundingSphere.center.y = 1, c.geometry.boundingSphere.radius = 1;
        }), u = false);
      }), this.objects.hideable.push(c);
    }
    setOvenHeat() {
      const e = new O({
        side: Ae,
        transparent: true,
        depthTest: true,
        depthWrite: false
      });
      e.outputNode = b(() => {
        const t = k().mul(w(2, 0.2));
        t.y.addAssign(this.game.ticker.elapsedScaledUniform.mul(0.05));
        const i = P(this.game.noises.perlin, t).r.mul(k().y.pow(2)), a = i.smoothstep(0, 0.5), n = A(M("#ff3e00"), M("#ff8641"), a).mul(i.add(1).mul(2));
        return C(E(n), i);
      })(), this.ovenHeat = this.references.items.get("ovenHeat")[0], this.ovenHeat.material = e, this.ovenHeat.castShadow = false;
    }
    setCookies() {
      const e = this.references.items.get("cookie")[0];
      e.castShadow = true, e.receiveShadow = true, e.frustumCulled = true, e.position.set(0, 0, 0), this.game.materials.updateObject(e), this.cookies = {}, this.cookies.spawnerPosition = this.references.items.get("spawner")[0].position, this.cookies.count = 20, this.cookies.visibleCount = 0, this.cookies.realCount = this.cookies.count + 2, this.cookies.currentIndex = 0, this.cookies.mass = 0.02, this.cookies.objects = [];
      const t = [];
      for (let s = 0; s < this.cookies.realCount; s++) {
        const i = s >= this.cookies.count, a = new $e();
        i ? (a.position.copy(this.references.items.get("table")[0].position), a.position.y += (s - this.cookies.count) * 0.25) : (a.position.copy(this.cookies.spawnerPosition), a.position.y += 99), a.needsUpdate = true, t.push(a);
        const n = this.game.objects.add({
          model: a,
          updateMaterials: false,
          castShadow: false,
          receiveShadow: false,
          parent: null
        }, {
          type: "dynamic",
          position: a.position,
          rotation: a.quaternion,
          friction: 0.7,
          sleeping: true,
          enabled: i,
          mass: this.cookies.mass,
          colliders: [
            {
              shape: "cylinder",
              parameters: [
                0.55 / 2,
                1.25 / 2
              ],
              category: "object"
            }
          ],
          waterGravityMultiplier: -1
        });
        this.cookies.objects.push(n);
      }
      this.cookies.instancedGroup = new ue(t, e);
    }
    setActualCookies() {
      this.actualCookies = {}, this.actualCookies.count = 0;
      const e = document.cookie.split("; ");
      for (const t of e) {
        const s = t.match("^acceptedCookies=([0-9]+)");
        s && (this.actualCookies.count = parseInt(s[1]));
      }
    }
    setInteractivePoint() {
      this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Accept cookie", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.accept();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setCounter() {
      this.counter = {}, this.counter.value = 0, this.counter.panel = this.references.items.get("counterPanel")[0], this.counter.texture = null, this.counter.initialised = false, this.counter.maxScale = 0;
      const e = 64, t = 2, s = `700 ${e}px "Amatic SC"`, i = document.createElement("canvas");
      i.style.position = "fixed", i.style.zIndex = 999, i.style.top = 0, i.style.left = 0;
      const a = i.getContext("2d");
      a.font = s, this.counter.init = () => {
        if (this.counter.initialised) return;
        this.counter.initialised = true, i.width = 256, i.height = e, this.counter.texture = new Ne(i), this.counter.texture.minFilter = W, this.counter.texture.magFilter = W, this.counter.texture.generateMipmaps = false;
        const n = new Y(1, 1), o = new V({
          alphaNode: P(this.counter.texture).r,
          hasWater: false,
          hasLightBounce: false
        }), l = new D(n, o);
        l.position.copy(this.references.items.get("counterLabel")[0].position), l.quaternion.copy(this.references.items.get("counterLabel")[0].quaternion), l.receiveShadow = true, l.scale.y = 0.75, l.scale.x = i.width / i.height * 0.75, this.game.scene.add(l), this.counter.update(), this.counter.update();
      }, this.counter.add = () => {
        this.counter.value++, this.throttleAmount++, this.counter.update();
      }, this.counter.update = () => {
        if (!this.counter.initialised) return;
        const n = this.counter.value.toLocaleString("en-US"), o = a.measureText(n), r = (Math.ceil(o.width) + 30) / 105;
        a.fillStyle = "#000000", a.fillRect(0, 0, i.width, i.height), a.font = s, a.fillStyle = "#ffffff", a.textAlign = "center", a.textBaseline = "middle", a.fillText(n, i.width / 2, i.height * 0.5 + t), r > this.counter.maxScale && (this.counter.maxScale = r, this.counter.panel.scale.x = r), this.counter.texture.needsUpdate = true;
      }, this.throttleAmount = 0, this.counter.throttleUpdate = () => {
        this.throttleAmount > 0 && (this.game.server.send({
          type: "cookiesInsert",
          amount: this.throttleAmount
        }), this.throttleAmount = 0);
      }, setInterval(() => {
        this.counter.throttleUpdate();
      }, 1e3), this.game.server.events.on("message", (n) => {
        (n.type === "init" || n.type === "cookiesUpdate") && n.cookiesCount > this.counter.value && (this.counter.value = n.cookiesCount, this.counter.update());
      }), this.game.server.initData && (this.counter.value = this.game.server.initData.cookiesCount), this.game.server.connected && this.counter.init(), this.game.server.events.on("connected", () => {
        this.counter.init();
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "cookie");
      });
    }
    accept() {
      const e = this.cookies.objects[this.cookies.currentIndex], t = this.cookies.spawnerPosition.clone();
      t.z += Math.random() - 0.5, e.physical.body.setTranslation(t), e.physical.body.setEnabled(true), this.game.ticker.wait(2, () => {
        const s = {
          x: (Math.random() - 0.5) * this.cookies.mass * 2,
          y: Math.random() * this.cookies.mass * 3,
          z: this.cookies.mass * 7
        };
        e.physical.body.applyImpulse(s, true), e.physical.body.applyTorqueImpulse({
          x: 0,
          y: 0,
          z: 0
        }, true);
      }), this.cookies.currentIndex = (this.cookies.currentIndex + 1) % this.cookies.count, this.cookies.visibleCount = Math.min(this.cookies.visibleCount + 1, this.cookies.count), this.ovenHeat.scale.z = 2, f.to(this.ovenHeat.scale, {
        z: 1,
        overwrite: true,
        duration: 2,
        delay: 0.2,
        ease: "power1.inOut"
      }), this.counter.add(), this.sounds.ding.play(), document.cookie = `acceptedCookies=${++this.actualCookies.count}`, this.game.achievements.addProgress("cookie");
    }
    update() {
      const e = (Math.sin(this.game.ticker.elapsedScaled) * 0.3 + 0.5) * 0.3;
      if (this.localTime.value += this.game.ticker.deltaScaled * e, this.blower.scale.y = Math.sin(this.game.ticker.elapsedScaled + Math.PI) * 0.25 + 0.75, this.cookies.visibleCount) {
        let t = true;
        for (const s of this.cookies.objects) t = t && s.physical.body.isSleeping();
        t || this.cookies.instancedGroup.updateBoundings();
      }
      for (const t of this.cookies.objects) !t.physical.body.isSleeping() && t.physical.body.isEnabled() && (t.visual.object3D.needsUpdate = true);
    }
  }
  class Fa extends Pe {
    constructor(e) {
      super(e), this.localTime = d(0), this.setLetters(), this.setKiosk(), this.setControls(), this.setBonfire(), this.setAchievement();
    }
    setLetters() {
      const e = this.objects.items.filter((p) => p.visual && p.visual.object3D && /^refLetters/i.test(p.visual.object3D.name));
      if (!e.length) return;
      const t = e.map((p) => p.visual.object3D);
      for (const p of e) {
        p.visual.object3D.visible = false;
        try {
          p.physical && p.physical.body && typeof p.physical.body.setEnabled == "function" && p.physical.body.setEnabled(false);
        } catch {
        }
      }
      const s = t[0], i = t[1] || t[0], a = new y(), n = new y();
      s.getWorldPosition(a), i.getWorldPosition(n);
      const o = s.getWorldQuaternion(new ot()), r = new xs().setFromObject(s).getSize(new y()), h = Math.max(0.5, r.y), c = () => new V({
        colorNode: M(15911328),
        side: Ae,
        hasWater: false,
        hasLightBounce: false
      }), u = [
        c(),
        c()
      ];
      new Ti().load("./fonts/helvetiker_bold.typeface.json", (p) => {
        const v = (x, S, I) => {
          const B = new Mi(x, {
            font: p,
            size: 1,
            depth: 0.55,
            curveSegments: 8,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.04,
            bevelSegments: 2
          });
          B.computeBoundingBox();
          const U = B.boundingBox, q = h / Math.max(1e-3, U.max.y - U.min.y);
          B.scale(q, q, q), B.computeBoundingBox();
          const G = B.boundingBox;
          B.translate(-(G.min.x + G.max.x) / 2, -(G.min.y + G.max.y) / 2, -(G.min.z + G.max.z) / 2), B.computeBoundingBox();
          const oe = B.boundingBox, J = {
            x: Math.max(0.05, (oe.max.x - oe.min.x) / 2),
            y: Math.max(0.05, (oe.max.y - oe.min.y) / 2),
            z: Math.max(0.05, (oe.max.z - oe.min.z) / 2)
          }, pe = new D(B, I);
          pe.name = "hexoLetter" + x, pe.position.copy(S), pe.quaternion.copy(o), pe.castShadow = true, pe.receiveShadow = true, this.game.objects.add({
            model: pe,
            updateMaterials: false,
            parent: this.game.scene
          }, {
            type: "dynamic",
            position: S,
            rotation: o,
            sleeping: true,
            mass: 1.4,
            friction: 0.6,
            restitution: 0.25,
            linearDamping: 0.15,
            angularDamping: 0.35,
            contactThreshold: 5,
            colliders: [
              {
                shape: "cuboid",
                parameters: [
                  J.x,
                  J.y,
                  J.z
                ]
              }
            ],
            onCollision: (fe, Ee) => {
              const Ie = this.game.audio && this.game.audio.groups ? this.game.audio.groups.get("hitBrick") : null;
              Ie && Ie.playRandomNext(fe, Ee);
            }
          });
        };
        v("K", n, u[0]), v("P", a, u[1]);
      });
    }
    setKiosk() {
      this.game.interactivePoints.create(this.references.items.get("kioskInteractivePoint")[0].position, "Map", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.game.inputs.interactiveButtons.clearItems(), this.game.modals.open("map");
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setControls() {
      const e = this.game.interactivePoints.create(this.references.items.get("controlsInteractivePoint")[0].position, "Controls", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.game.inputs.interactiveButtons.clearItems(), this.game.menu.open("controls"), e.hide();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }), t = this.game.menu.items.get("controls");
      t.events.on("close", () => {
        e.show();
      }), t.events.on("open", () => {
        this.game.inputs.mode === K.MODE_GAMEPAD ? t.tabs.goTo("gamepad") : this.game.inputs.mode === K.MODE_MOUSEKEYBOARD ? t.tabs.goTo("mouse-keyboard") : this.game.inputs.mode === K.MODE_TOUCH && t.tabs.goTo("touch");
      });
    }
    setBonfire() {
      const e = this.references.items.get("bonfireHashes")[0].position;
      let t = null;
      {
        const i = this.game.materials.getFromName("emissiveOrangeRadialGradient"), a = 30, n = d(5), o = new Float32Array(a * 3), l = new Float32Array(a);
        for (let p = 0; p < a; p++) {
          const v = p * 3, x = Math.PI * 2 * Math.random(), S = Math.pow(Math.random(), 1.5) * 1;
          o[v + 0] = Math.cos(x) * S, o[v + 1] = Math.random(), o[v + 2] = Math.sin(x) * S, l[p] = 0.02 + Math.random() * 0.06;
        }
        const r = ee(o, "vec3").toAttribute(), h = ee(l, "float").toAttribute(), c = new Je();
        c.outputNode = i.outputNode;
        const u = F(0).toVar();
        c.positionNode = b(() => {
          const p = r.toVar();
          u.assign(p.y.add(this.localTime.mul(p.y)).fract()), p.y.assign(u.mul(n)), p.xz.addAssign(this.game.wind.direction.mul(u));
          const v = _(0.8, u).mul(100);
          return p.y.addAssign(v), p;
        })(), c.scaleNode = b(() => {
          const p = u.remapClamp(0.5, 1, 1, 0);
          return h.mul(p);
        })();
        const g = new _t(0.5, 8);
        t = new D(g, c), t.visible = false, t.position.copy(e), t.count = a, this.game.scene.add(t);
      }
      {
        const i = b(() => {
          const o = k(1), l = o.sub(0.5).length(), r = P(this.game.noises.voronoi, o).g;
          return r.subAssign(l.remap(0, 0.5, 0.3, 0)), r;
        })(), a = new V({
          colorNode: M(7301767),
          alphaNode: i,
          hasWater: false,
          hasLightBounce: false
        }), n = this.references.items.get("bonfireHashes")[0];
        n.material = a;
      }
      const s = this.references.items.get("bonfireBurn")[0];
      s.visible = false, this.game.interactivePoints.create(this.references.items.get("bonfireInteractivePoint")[0].position, "Res(e)t", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.game.reset(), f.delayedCall(2, () => {
          t.visible = true, s.visible = true, this.game.ticker.wait(2, () => {
            t.geometry.boundingSphere.center.y = 2, t.geometry.boundingSphere.radius = 2;
          }), this.game.audio.groups.get("campfire").items[0].positions.push(e);
        });
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "landing");
      }), this.events.on("boundingOut", () => {
        this.game.achievements.setProgress("landingLeave", 1);
      });
    }
    update() {
      this.localTime.value += this.game.ticker.deltaScaled * 0.1;
    }
  }
  const Te = [
    {
      title: "Arm Robot",
      titleSmall: [
        "Arm",
        "Robot"
      ],
      url: "https://zkpeace.com/blog-cn/posts/12591/",
      attributes: {
        role: "Vision Inspection",
        at: "Personal Project",
        with: "Motion Planning"
      },
      distinctions: [],
      images: [
        "arm-robot.jpg"
      ]
    },
    {
      title: "Cognitive Robot",
      titleSmall: [
        "Cognitive",
        "Robot"
      ],
      url: "https://zkpeace.com/blog-cn/posts/27207/",
      attributes: {
        role: "Object Perception",
        at: "Personal Project",
        with: "Pose Estimation"
      },
      distinctions: [],
      images: [
        "cg-perception.jpg"
      ]
    },
    {
      title: "Find a Room",
      titleSmall: [
        "Find",
        "a Room"
      ],
      url: "https://zkpeace.com/blog-cn/posts/771/",
      attributes: {
        role: "WeChat Mini Program",
        at: "Official Docs",
        with: "Campus Rental"
      },
      distinctions: [],
      images: [
        "find-room.jpg"
      ]
    },
    {
      title: "zkpeace.com",
      titleSmall: [
        "zkpeace",
        "com"
      ],
      url: "https://zkpeace.com/blog-cn/posts/16907/",
      attributes: {
        role: "Personal Site",
        at: "Blog 2.0",
        with: "Hexo + 3D"
      },
      distinctions: [],
      images: [
        "zkpeace.jpg"
      ]
    },
    {
      title: "Bee QuickRef",
      titleSmall: [
        "Bee",
        "QuickRef"
      ],
      url: "https://zkpeace.com/blog-cn/posts/61713/",
      attributes: {
        role: "Cheat Sheet",
        at: "Info Aggregation",
        with: "Productivity"
      },
      distinctions: [],
      images: [
        "bee-quickref.jpg"
      ]
    },
    {
      title: "Black Whale Wiki",
      titleSmall: [
        "Black",
        "Whale"
      ],
      url: "https://zkpeace.com/blog-cn/posts/30954/",
      attributes: {
        role: "Knowledge Base",
        at: "Smart System",
        with: "Doc Curation"
      },
      distinctions: [],
      images: [
        "heijing-kb.jpg"
      ]
    },
    {
      title: "This Image, Not That",
      titleSmall: [
        "This Image",
        "Not That"
      ],
      url: "https://zkpeace.com/blog-cn/posts/16005/",
      attributes: {
        role: "Graph Neural Network",
        at: "Research Notes",
        with: "OGB Analysis"
      },
      distinctions: [],
      images: [
        "graph-classification.jpg"
      ]
    }
  ];
  let cs = 0;
  class Ye {
    constructor(e = "Comic Sans", t = "400", s = 10, i = null, a = null, n = 1, o = "center", l = 1) {
      this.lines = [], this.font = `${t} ${s * n}px "${e}"`, this.width = Math.ceil(i * n), this.height = Math.ceil(a * n), this.horizontalAlign = o, this.lineHeight = l * n, this.setCanvas(), this.setTexture();
    }
    setCanvas() {
      this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style.position = "fixed", this.canvas.style.zIndex = 999, this.canvas.style.top = `${cs}px`, this.canvas.style.left = 0, cs += this.height + 10, this.context = this.canvas.getContext("2d"), this.context.font = this.font;
    }
    setTexture() {
      this.texture = new Ne(this.canvas), this.texture.colorSpace = he, this.texture.minFilter = W, this.texture.magFilter = W, this.texture.flipY = false, this.texture.generateMipmaps = false;
    }
    updateText(e) {
      this.lines = [], typeof e == "string" ? this.lines.push(e) : e instanceof Array && (this.lines = e), this.draw();
    }
    getMeasure() {
      const e = {};
      e.width = 0;
      for (const t of this.lines) {
        const s = this.context.measureText(t);
        s.width > e.width && (e.width = s.width);
      }
      return e;
    }
    draw() {
      this.context.fillStyle = "#000000", this.context.fillRect(0, 0, this.width, this.height), this.context.textAlign = this.horizontalAlign, this.context.textBaseline = "middle", this.context.fillStyle = "#ffffff";
      let e = 0;
      for (const t of this.lines) {
        const s = this.height / 2 + (e - (this.lines.length - 1) / 2) * this.lineHeight;
        let i = null;
        this.horizontalAlign === "center" ? i = this.width / 2 : this.horizontalAlign === "left" ? i = 0 : this.horizontalAlign === "right" && (i = this.width), this.context.fillText(t, i, s), e++;
      }
      this.texture.needsUpdate = true;
    }
  }
  const _z = class _z extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F528} Projects",
        expanded: false
      })), this.state = _z.STATE_CLOSED, this.setSounds(), this.setInteractivePoint(), this.setInputs(), this.setCinematic(), this.setShadeMix(), this.setTexts(), this.setHover(), this.setNavigation(), this.setImages(), this.setPagination(), this.setAttributes(), this.setAdjacents(), this.setTitle(), this.setUrl(), this.setDistinctions(), this.setBlackBoard(), this.setOven(), this.setGrinder(), this.setAnvil(), this.setAchievement(), this.changeProject(0, _z.DIRECTION_NEXT, false, true), this.game.debug.active && (this.debugPanel.addButton({
        title: "open",
        label: "open"
      }).on("click", () => {
        this.open();
      }), this.debugPanel.addButton({
        title: "close",
        label: "close"
      }).on("click", () => {
        this.close();
      }));
    }
    setSounds() {
      this.sounds = {}, this.sounds.anvil = this.game.audio.register({
        path: "sounds/anvil/METLImpt_Anvil Single Hammer Strike Hammers_GENHD1-01372.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1,
        positions: this.references.items.get("anvil")[0].position,
        distanceFade: 18,
        onPlay: (e) => {
          e.volume = 0.1 + Math.random() * 0.1, e.rate = 1 + Math.random() * 0.02;
        }
      });
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Projects", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.open();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setInputs() {
      this.game.inputs.events.on("left", (e) => {
        e.active && this.previous();
      }), this.game.inputs.events.on("right", (e) => {
        e.active && this.next();
      }), this.game.inputs.events.on("forward", (e) => {
        e.active && !e.activeKeys.has("Gamepad.r2") && this.previous();
      }), this.game.inputs.events.on("backward", (e) => {
        e.active && !e.activeKeys.has("Gamepad.l2") && this.next();
      }), this.game.inputs.events.on("interact", (e) => {
        !e.active && this.state === _z.STATE_OPEN && this.url.open();
      }), this.game.inputs.interactiveButtons.events.on("previous", () => {
        this.state === _z.STATE_OPEN && this.previous();
      }), this.game.inputs.interactiveButtons.events.on("next", () => {
        this.state === _z.STATE_OPEN && this.next();
      }), this.game.inputs.interactiveButtons.events.on("open", () => {
        this.state === _z.STATE_OPEN && this.url.open();
      }), this.game.inputs.interactiveButtons.events.on("close", () => {
        this.state === _z.STATE_OPEN && this.close();
      });
    }
    setCinematic() {
      this.cinematic = {}, this.cinematic.position = new y(), this.cinematic.positionOffset = new y(4.65, 4, 4.85), this.cinematic.target = new y(), this.cinematic.targetOffset = new y(-3, 1.6, -4.6);
      const e = () => {
        const t = this.references.items.get("interactivePoint")[0].position.clone();
        t.y = 0, this.cinematic.position.copy(t).add(this.cinematic.positionOffset), this.cinematic.target.copy(t).add(this.cinematic.targetOffset);
      };
      if (e(), this.game.debug.active) {
        const t = this.debugPanel.addFolder({
          title: "cinematic",
          expanded: false
        });
        t.addBinding(this.cinematic.positionOffset, "x", {
          label: "positionX",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.positionOffset, "y", {
          label: "positionY",
          min: 0,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.positionOffset, "z", {
          label: "positionZ",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "x", {
          label: "targetX",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "y", {
          label: "targetY",
          min: 0,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "z", {
          label: "targetZ",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e);
      }
    }
    setShadeMix() {
      if (this.shadeMix = {}, this.shadeMix.images = {}, this.shadeMix.images.min = 0.1, this.shadeMix.images.max = 0.65, this.shadeMix.images.mixUniform = d(this.shadeMix.images.min), this.shadeMix.texts = {}, this.shadeMix.texts.min = 0.1, this.shadeMix.texts.max = 0.3, this.shadeMix.texts.mixUniform = d(this.shadeMix.texts.min), this.game.debug.active) {
        const e = this.debugPanel.addFolder({
          title: "Shader mix",
          expanded: true
        }), t = () => {
          this.state === _z.STATE_OPEN || this.state === _z.STATE_OPENING ? (this.shadeMix.images.mixUniform.value = this.shadeMix.images.max, this.shadeMix.texts.mixUniform.value = this.shadeMix.texts.max) : (this.shadeMix.images.mixUniform.value = this.shadeMix.images.min, this.shadeMix.texts.mixUniform.value = this.shadeMix.texts.min);
        };
        e.addBinding(this.shadeMix.images, "min", {
          label: "imagesMin",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.images, "max", {
          label: "imagesMax",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.texts, "min", {
          label: "textsMin",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.texts, "max", {
          label: "textsMax",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t);
      }
    }
    setTexts() {
      this.texts = {}, this.texts.density = 200, this.texts.fontFamily = "Amatic SC", this.texts.fontWeight = 700, this.texts.fontSizeMultiplier = 1, this.texts.baseColor = M("#ffffff"), this.texts.createMaterialOnMesh = (e, t) => {
        const s = new V({
          hasWater: false,
          alphaNode: P(t).r,
          transparent: true
        }), i = s.outputNode;
        s.outputNode = b(() => C(A(i.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), i.a))(), e.castShadow = false, e.receiveShadow = false, e.material = s;
      };
    }
    setHover() {
      this.hover = {}, this.hover.baseColor = M("#ffffff"), this.hover.inactiveMaterial = new V({
        colorNode: this.hover.baseColor,
        hasWater: false
      });
      const e = this.hover.inactiveMaterial.outputNode;
      this.hover.inactiveMaterial.outputNode = b(() => C(A(e.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), 1))(), this.hover.activeMaterial = new O({
        transparent: true
      }), this.hover.activeMaterial.outputNode = C(this.hover.baseColor.mul(1.5), F(1));
    }
    setNavigation() {
      this.navigation = {}, this.navigation.index = 0, this.navigation.current = null, this.navigation.next = null, this.navigation.previous = null;
    }
    setImages() {
      this.images = {}, this.images.initiated = false, this.images.width = 1920 * 0.5, this.images.height = 1080 * 0.5, this.images.index = 0, this.images.direction = _z.DIRECTION_NEXT, this.images.resources = /* @__PURE__ */ new Map(), this.images.loadProgress = d(0), this.images.animationProgress = d(0), this.images.animationDirection = d(0), this.images.mesh = this.references.items.get("images")[0], this.images.mesh.receiveShadow = true, this.images.mesh.castShadow = false, this.images.mesh.visible = false, this.images.init = (e) => {
        this.images.initiated = true, this.images.mesh.visible = true;
        const t = this.images.resources.get(e);
        this.images.textureOld = t.texture.clone(), this.images.textureNew = t.texture.clone();
        const s = b(() => {
          const a = k().toVar(), n = k().toVar();
          n.x.addAssign(this.images.animationProgress.oneMinus().mul(-0.25).mul(this.images.animationDirection)), a.x.addAssign(this.images.animationProgress.mul(0.25).mul(this.images.animationDirection));
          const o = P(this.images.textureOld, a).rgb, l = P(this.images.textureNew, n).rgb;
          l.assign(A(M("#333333"), l, this.images.loadProgress));
          const r = k().x.toVar();
          De(this.images.animationDirection.greaterThan(0), () => {
            r.assign(r.oneMinus());
          });
          const h = _(this.images.animationProgress, r);
          return A(l, o, h);
        })();
        this.images.material = new V({
          colorNode: s,
          hasWater: false
        });
        const i = this.images.material.outputNode;
        this.images.material.outputNode = b(() => C(A(i.rgb, s, this.shadeMix.images.mixUniform), i.a))(), this.images.mesh.material = this.images.material;
      }, this.images.loadEnded = (e) => {
        if (this.images.initiated || this.images.init(e), this.navigation.current.images[this.images.index] === e) {
          const t = this.images.getResourceAndLoad(e);
          this.images.textureNew.copy(t.texture), this.images.textureNew.needsUpdate = true, f.to(this.images.loadProgress, {
            value: 1,
            duration: 1,
            overwrite: true
          }), this.images.loadSibling();
        }
      }, this.images.loadSibling = () => {
        let e = this.navigation.index, t = this.images.index;
        this.images.direction === _z.DIRECTION_PREVIOUS ? t -= 1 : t += 1, t < 0 ? (e -= 1, e < 0 && (e = Te.length - 1), t = Te[e].images.length - 1) : t > this.navigation.current.images.length - 1 && (e += 1, e > Te.length - 1 && (e = 0), t = 0);
        const s = Te[e].images[t];
        this.images.getResourceAndLoad(s);
      }, this.images.getResourceAndLoad = (e) => {
        const t = `projects/images/${e}`;
        let s = this.images.resources.get(e);
        if (!s) {
          s = {}, s.loaded = false;
          const i = /\.(jpe?g|png|webp)$/i.test(e);
          this.game.resourcesLoader.getLoader(i ? "texture" : "textureKtx").load(t, (n) => {
            i && (n.colorSpace = he, n.flipY = false, n.needsUpdate = true), s.texture = n, s.colorSpace = he, s.flipY = false, s.magFilter = j, s.minFilter = j, s.generateMipmaps = false, s.loaded = true, this.images.loadEnded(e);
          }), this.images.resources.set(e, s);
        }
        return s;
      }, this.images.update = (e) => {
        this.images.direction = e;
        const t = this.navigation.current.images[this.images.index], s = this.images.getResourceAndLoad(t);
        s.loaded ? (this.images.loadSibling(), this.images.loadProgress.value = 1) : this.images.loadProgress.value = 0, this.images.initiated && (this.images.textureOld.copy(this.images.textureNew), this.images.textureOld.needsUpdate = true, s.loaded && (this.images.textureNew.copy(s.texture), this.images.textureNew.needsUpdate = true)), f.fromTo(this.images.animationProgress, {
          value: 0
        }, {
          value: 1,
          duration: 1,
          ease: "power2.inOut",
          overwrite: true
        }), this.images.animationDirection.value = e === _z.DIRECTION_NEXT ? 1 : -1;
      };
    }
    setPagination() {
      this.pagination = {}, this.pagination.inter = 0.2, this.pagination.group = this.references.items.get("pagination")[0].children[0], this.pagination.items = [];
      let e = 0;
      const t = this.references.items.get("intersectPagination");
      for (const r of this.pagination.group.children) if (r instanceof D) {
        const h = {};
        h.index = e, h.visible = false, h.mesh = r, h.mesh.position.x = this.pagination.inter * e, h.mesh.visible = false, h.mesh.material = this.hover.inactiveMaterial, h.intersectReference = t[e], h.intersect = this.game.rayCursor.addIntersect({
          active: false,
          shape: new ke(new y(), h.intersectReference.scale.x),
          onClick: () => {
            this.changeImage(h.index);
          },
          onEnter: () => {
            h.mesh.material = this.hover.activeMaterial;
          },
          onLeave: () => {
            h.mesh.material = this.hover.inactiveMaterial;
          }
        }), h.intersectReference.getWorldPosition(h.intersect.shape.center), this.pagination.items.push(h), e++;
      }
      const s = this.references.items.get("intersectPreviousImage")[0], i = new y();
      s.getWorldPosition(i);
      const a = this.references.items.get("arrowPreviousImage")[0];
      a.material = this.hover.inactiveMaterial, this.pagination.previousIntersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(i, s.scale.x),
        onClick: () => {
          this.previous();
        },
        onEnter: () => {
          a.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          a.material = this.hover.inactiveMaterial;
        }
      });
      const n = this.references.items.get("intersectNextImage")[0], o = new y();
      n.getWorldPosition(o);
      const l = this.references.items.get("arrowNextImage")[0];
      l.material = this.hover.inactiveMaterial, this.pagination.nextIntersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(o, n.scale.x),
        onClick: () => {
          this.next();
        },
        onEnter: () => {
          l.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          l.material = this.hover.inactiveMaterial;
        }
      }), this.pagination.update = () => {
        let r = 0;
        for (const c of this.pagination.items) r <= this.navigation.current.images.length - 1 ? c.visible || (f.to(c.mesh.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: "power1.inOut",
          overwrite: true
        }), c.mesh.visible = true, c.visible = true, c.intersect.active = this.state === _z.STATE_OPENING || this.state === _z.STATE_OPEN) : c.visible && (f.to(c.mesh.scale, {
          x: 0.01,
          y: 0.01,
          z: 0.01,
          duration: 0.5,
          ease: "power1.inOut",
          overwrite: true,
          onComplete: () => {
            c.mesh.visible = false;
          }
        }), c.visible = false, c.intersect.active = false), c.mesh.rotation.z = this.images.index === r ? 0 : Math.PI, r++;
        const h = -(this.navigation.current.images.length - 1) * this.pagination.inter / 2;
        f.to(this.pagination.group.position, {
          x: h,
          duration: 0.5,
          ease: "power1.inOut",
          overwrite: true,
          onComplete: () => {
            for (const c of this.pagination.items) c.intersectReference.getWorldPosition(c.intersect.shape.center);
          }
        });
      };
    }
    setAttributes() {
      this.attributes = {}, this.attributes.group = this.references.items.get("attributes")[0], this.attributes.inter = 0.75, this.attributes.names = [
        "role",
        "at",
        "with"
      ], this.attributes.items = {}, this.attributes.status = "hidden", this.attributes.originalY = this.attributes.group.position.y;
      for (const e of this.attributes.group.children) {
        const t = {};
        t.group = e, t.visible = false, t.group.visible = false;
        const s = t.group.children.find((i) => i.name.startsWith("text"));
        t.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.23, 1.4, 0.45, this.texts.density, "center", 0.2), this.texts.createMaterialOnMesh(s, t.textCanvas.texture), this.attributes.items[e.name] = t;
      }
      this.attributes.update = () => {
        if (this.attributes.status === "hiding") return;
        this.attributes.status = "hiding";
        let e = 0;
        for (const t of this.attributes.names) {
          const s = this.attributes.items[t];
          f.to(s.group.scale, {
            x: 0.01,
            y: 0.01,
            z: 0.01,
            duration: 0.5,
            delay: 0.1 * e,
            ease: "power2.in",
            overwrite: true
          }), e++;
        }
        f.delayedCall(1, () => {
          this.attributes.status = "visible";
          let t = 0;
          for (const s of this.attributes.names) {
            const i = this.attributes.items[s], a = this.navigation.current.attributes[s];
            a && (i.group.visible = true, f.to(i.group.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 1,
              delay: 0.2 * t,
              ease: "back.out(2)",
              overwrite: true
            }), i.textCanvas.updateText(a), i.group.position.y = -t * 0.75, t++);
          }
          this.attributes.group.position.y = this.attributes.originalY + (t - 1) * 0.75 / 2;
        });
      };
    }
    setAdjacents() {
      this.adjacents = {}, this.adjacents.status = "hidden", this.adjacents.previous = {}, this.adjacents.previous.group = this.references.items.get("previous")[0], this.adjacents.previous.inner = this.adjacents.previous.group.children[0], this.adjacents.previous.textMesh = this.adjacents.previous.inner.children.find((o) => o.name.startsWith("text")), this.adjacents.previous.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.3, 1.25, 0.75, this.texts.density, "center", 0.3), this.texts.createMaterialOnMesh(this.adjacents.previous.textMesh, this.adjacents.previous.textCanvas.texture);
      const e = this.references.items.get("arrowPreviousProject")[0];
      e.material = this.hover.inactiveMaterial;
      const t = this.references.items.get("intersectPreviousProject")[0], s = new y();
      t.getWorldPosition(s), this.adjacents.previous.intersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(s, t.scale.x),
        onClick: () => {
          this.previousProject(true);
        },
        onEnter: () => {
          e.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          e.material = this.hover.inactiveMaterial;
        }
      }), this.adjacents.next = {}, this.adjacents.next.group = this.references.items.get("next")[0], this.adjacents.next.inner = this.adjacents.next.group.children[0], this.adjacents.next.textMesh = this.adjacents.next.inner.children.find((o) => o.name.startsWith("text")), this.adjacents.next.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.3, 1.25, 0.75, this.texts.density, "center", 0.3), this.texts.createMaterialOnMesh(this.adjacents.next.textMesh, this.adjacents.next.textCanvas.texture);
      const i = this.references.items.get("arrowNextProject")[0];
      i.material = this.hover.inactiveMaterial;
      const a = this.references.items.get("intersectNextProject")[0], n = new y();
      a.getWorldPosition(n), this.adjacents.next.intersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(n, a.scale.x),
        onClick: () => {
          this.nextProject();
        },
        onEnter: () => {
          i.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          i.material = this.hover.inactiveMaterial;
        }
      }), this.adjacents.update = () => {
        this.adjacents.status !== "hiding" && (this.adjacents.status = "hiding", f.to(this.adjacents.previous.inner.rotation, {
          z: Math.PI * 0.5,
          duration: 0.5,
          delay: 0,
          ease: "power2.in",
          overwrite: true
        }), f.to(this.adjacents.next.inner.rotation, {
          z: -Math.PI * 0.5,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.in",
          overwrite: true
        }), f.delayedCall(1, () => {
          this.adjacents.status = "visible", f.to(this.adjacents.previous.inner.rotation, {
            z: 0,
            duration: 1,
            delay: 0,
            ease: "back.out(2)",
            overwrite: true
          }), f.to(this.adjacents.next.inner.rotation, {
            z: 0,
            duration: 1,
            delay: 0.4,
            ease: "back.out(2)",
            overwrite: true
          }), this.adjacents.previous.textCanvas.updateText(this.navigation.previous.titleSmall), this.adjacents.next.textCanvas.updateText(this.navigation.next.titleSmall);
        }));
      };
    }
    setTitle() {
      this.title = {}, this.title.status = "hidden", this.title.group = this.references.items.get("title")[0], this.title.inner = this.title.group.children[0], this.title.textMesh = this.title.inner.children.find((e) => e.name.startsWith("text")), this.title.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.4, 4, 0.6, this.texts.density, "center"), this.texts.createMaterialOnMesh(this.title.textMesh, this.title.textCanvas.texture), this.title.update = (e) => {
        if (this.title.status === "hiding") return;
        this.title.status = "hiding";
        const t = e === _z.DIRECTION_NEXT ? -1 : 1;
        this.title.inner.rotation.x = 0, f.to(this.title.inner.rotation, {
          x: Math.PI * t,
          duration: 1,
          delay: 0,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => {
            this.title.status = "visible", f.to(this.title.inner.rotation, {
              x: Math.PI * 2 * t,
              duration: 1,
              delay: 0,
              ease: "back.out(2)",
              overwrite: true
            }), this.title.textCanvas.updateText(this.navigation.current.title);
          }
        });
      };
    }
    setUrl() {
      this.url = {}, this.url.status = "hidden", this.url.group = this.references.items.get("url")[0], this.url.inner = this.url.group.children[0], this.url.textMesh = this.url.inner.children.find((i) => i.name.startsWith("text")), this.url.panel = this.url.inner.children.find((i) => i.name.startsWith("panel")), this.url.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.23, 4, 0.2, this.texts.density, "center"), this.url.mixStrength = d(0);
      const e = new V({
        colorNode: this.texts.baseColor,
        hasWater: false,
        alphaNode: P(this.url.textCanvas.texture).r,
        transparent: true
      }), t = e.outputNode;
      e.outputNode = b(() => C(A(A(t.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), this.texts.baseColor.mul(1.5), this.url.mixStrength), t.a))(), this.url.textMesh.castShadow = false, this.url.textMesh.receiveShadow = false, this.url.textMesh.material = e;
      const s = this.references.items.get("intersectUrl")[0];
      s.visible = false, this.url.intersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: s,
        onClick: () => {
          this.url.open();
        },
        onEnter: () => {
          this.url.mixStrength.value = 1;
        },
        onLeave: () => {
          this.url.mixStrength.value = 0;
        }
      }), this.url.update = (i) => {
        if (this.url.status === "hiding") return;
        this.url.status = "hiding";
        const a = i === _z.DIRECTION_NEXT ? -1 : 1;
        this.url.inner.rotation.x = 0, f.to(this.url.inner.rotation, {
          x: Math.PI * a,
          duration: 1,
          delay: 0.3,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => {
            this.url.status = "visible", f.to(this.url.inner.rotation, {
              x: Math.PI * 2 * a,
              duration: 1,
              delay: 0,
              ease: "back.out(2)",
              overwrite: true
            }), this.url.textCanvas.updateText(this.navigation.current.url.replace(/https?:\/\//, ""));
            const n = this.url.textCanvas.getMeasure().width / this.texts.density;
            this.url.panel.scale.x = n + 0.2;
          }
        });
      }, this.url.open = () => {
        this.navigation.current.url && window.open(this.navigation.current.url, "_blank");
      };
    }
    setDistinctions() {
      this.distinctions = {}, this.distinctions.status = "hidden", this.distinctions.group = this.references.items.get("distinctions")[0], this.distinctions.names = [
        "awwwards",
        "cssda",
        "fwa"
      ], this.distinctions.items = {}, this.distinctions.items.awwwards = this.distinctions.group.children.find((e) => e.name.startsWith("awwwards")), this.distinctions.items.fwa = this.distinctions.group.children.find((e) => e.name.startsWith("fwa")), this.distinctions.items.cssda = this.distinctions.group.children.find((e) => e.name.startsWith("cssda")), this.distinctions.positions = [
        [
          [
            0,
            0
          ]
        ],
        [
          [
            -0.4582188129425049,
            -0.2090435028076172
          ],
          [
            0.4859628677368164,
            0.47049903869628906
          ]
        ],
        [
          [
            -0.7032163143157959,
            -0.2090439796447754
          ],
          [
            0.8216180801391602,
            -0.16075992584228516
          ],
          [
            0.1332714557647705,
            0.47049903869628906
          ]
        ]
      ], this.distinctions.update = () => {
        if (this.distinctions.status === "hiding") return;
        this.distinctions.status = "hiding";
        let e = 0;
        for (const t of this.distinctions.names) {
          const s = this.distinctions.items[t];
          f.to(s.scale, {
            x: 0.01,
            y: 0.01,
            z: 0.01,
            duration: 0.5,
            delay: 0.1 * e,
            ease: "power2.in",
            overwrite: true
          }), e++;
        }
        f.delayedCall(1, () => {
          this.distinctions.status = "visible";
          let t = 0;
          const s = this.distinctions.positions[this.navigation.current.distinctions.length - 1];
          for (const i of this.navigation.current.distinctions) {
            const a = this.distinctions.items[i];
            a.visible = true, f.to(a.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 1,
              delay: 0.2 * t,
              ease: "back.out(2)",
              overwrite: true
            }), a.position.x = s[t][0], a.position.z = s[t][1], t++;
          }
        });
      };
    }
    setPendulum() {
      this.references.items.get("balls")[0].rotation.reorder("YXZ"), f.timeline({
        yoyo: true,
        repeat: -1
      }).to(this.references.items.get("balls")[0].rotation, {
        x: 0.75,
        ease: "power2.out",
        delay: 0.75,
        duration: 0.75
      }), f.timeline({
        yoyo: true,
        repeat: -1,
        delay: 1.5
      }).to(this.references.items.get("balls")[1].rotation, {
        x: -0.75,
        ease: "power2.out",
        delay: 0.75,
        duration: 0.75
      });
    }
    setBlackBoard() {
      this.blackBoard = {}, this.blackBoard.active = true, this.blackBoard.group = this.references.items.get("blackBoard")[0], this.blackBoard.parent = this.blackBoard.group.parent, this.blackBoard.timeline = f.timeline({
        repeat: -1,
        repeatDelay: 5,
        paused: true,
        onRepeat: () => {
          (this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING || !this.blackBoard.active) && this.blackBoard.timeline.pause();
        }
      }), this.blackBoard.timeline.to(this.blackBoard.group.position, {
        y: 0.25,
        ease: "power2.out",
        duration: 0.7
      }, 2), this.blackBoard.timeline.to(this.blackBoard.group.position, {
        y: 0,
        ease: "power2.in",
        duration: 0.7
      }, 0.7 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0.1,
        duration: 0.15
      }, 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: -0.1,
        duration: 0.3
      }, 0.15 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0.1,
        duration: 0.3
      }, 0.45 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: -0.1,
        duration: 0.3
      }, 0.75 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0,
        duration: 0.3
      }, 1.05 + 2), this.blackBoard.labelsGamepadPlaystation = this.references.items.get("blackboardLabelsGamepadPlaystation")[0], this.blackBoard.labelsGamepadXbox = this.references.items.get("blackboardLabelsGamepadXbox")[0], this.blackBoard.labelsMouseKeyboard = this.references.items.get("blackboardLabelsMouseKeyboard")[0], this.blackBoard.labelsGamepadPlaystation.castShadow = false, this.blackBoard.labelsGamepadXbox.castShadow = false, this.blackBoard.labelsMouseKeyboard.castShadow = false, this.blackBoard.labelsGamepadPlaystation.visible = false, this.blackBoard.labelsGamepadXbox.visible = false, this.game.inputs.events.on("modeChange", () => {
        this.game.inputs.mode === K.MODE_GAMEPAD ? (this.game.inputs.gamepad.type === "xbox" ? (this.blackBoard.labelsGamepadXbox.visible = true, this.blackBoard.labelsGamepadPlaystation.visible = false) : (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = true), this.blackBoard.labelsMouseKeyboard.visible = false, this.blackBoard.parent.add(this.blackBoard.group)) : this.game.inputs.mode === K.MODE_MOUSEKEYBOARD ? (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = false, this.blackBoard.labelsMouseKeyboard.visible = true, this.blackBoard.parent.add(this.blackBoard.group)) : this.game.inputs.mode === K.MODE_TOUCH && this.blackBoard.parent.remove(this.blackBoard.group);
      }), this.game.inputs.gamepad.events.on("typeChange", () => {
        this.game.inputs.mode === K.MODE_GAMEPAD && (this.game.inputs.gamepad.type === "xbox" ? (this.blackBoard.labelsGamepadXbox.visible = true, this.blackBoard.labelsGamepadPlaystation.visible = false) : (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = true));
      });
    }
    setOven() {
      this.oven = {}, this.oven.blower = this.references.items.get("blower")[0], this.oven.charcoal = this.references.items.get("charcoal")[0], this.oven.threshold = d(0.2);
      const e = b(() => {
        const s = k(), i = P(this.game.noises.voronoi, s).g;
        return i.subAssign(this.oven.threshold), i;
      })(), t = new V({
        colorNode: M(7301767),
        alphaNode: e,
        hasWater: false,
        hasLightBounce: false
      });
      this.oven.charcoal.material = t, this.oven.thresholdBinding = this.game.debug.addManualBinding(this.debugPanel, this.oven.threshold, "value", {
        label: "ovenThreshold",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => -Math.sin(this.game.ticker.elapsedScaled - 0.5) * 0.1 + 0.25);
    }
    setGrinder() {
      this.grinder = this.references.items.get("grinder")[0];
    }
    setAnvil() {
      this.anvil = {}, this.anvil.frequency = 1, this.anvil.loopTime = 0, this.anvil.hammer = this.references.items.get("hammer")[0], this.anvil.hammer.rotation.reorder("ZXY"), this.anvil.blade = this.references.items.get("blade")[0];
      const e = new V({
        colorNode: M("#a88c7f")
      }), t = d(M("#ff8641")), s = d(M("#ff3e00")), i = d(1.7), a = e.outputNode;
      e.outputNode = b(() => {
        const n = k(1).toVar(), o = A(t, s, k().sub(0.5).length().mul(10)), l = o.div(Ve(o)).mul(i), r = n.y.smoothstep(0.4, 0.9), h = A(a.rgb, l, r);
        return C(h.rgb, 1);
      })(), this.anvil.blade.material = e;
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "projects");
      });
    }
    open() {
      if (this.state === _z.STATE_OPEN || this.state === _z.STATE_OPENING) return;
      this.state = _z.STATE_OPENING, this.stateTransition && this.stateTransition.kill(), this.stateTransition = f.delayedCall(1.5, () => {
        this.state = _z.STATE_OPEN, this.stateTransition = null;
      }), this.game.inputs.filters.delete("wandering"), this.game.inputs.filters.add("cinematic"), this.game.view.cinematic.start(this.cinematic.position, this.cinematic.target), this.game.interactivePoints.temporaryHide(), f.to(this.shadeMix.images.mixUniform, {
        value: this.shadeMix.images.max,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true
      }), f.to(this.shadeMix.texts.mixUniform, {
        value: this.shadeMix.texts.max,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true
      }), this.blackBoard.active && (this.blackBoard.timeline.repeat(-1), this.blackBoard.timeline.resume());
      for (const t of this.pagination.items) t.intersect.active = t.visible;
      this.adjacents.next.intersect.active = true, this.adjacents.previous.intersect.active = true, this.pagination.previousIntersect.active = true, this.pagination.nextIntersect.active = true, this.url.intersect.active = true, this.game.physicalVehicle.deactivate(), this.game.inputs.interactiveButtons.clearItems(), this.game.inputs.interactiveButtons.addItems([
        "previous",
        "next",
        "open",
        "close"
      ]);
      const e = this.game.audio.groups.get("click");
      e && e.play(true), this.game.achievements.setProgress("projects", this.navigation.current.title);
    }
    close() {
      if (this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING) return;
      this.state = _z.STATE_CLOSING, this.stateTransition && this.stateTransition.kill(), this.stateTransition = f.delayedCall(1.5, () => {
        this.state = _z.STATE_CLOSED, this.stateTransition = null;
      }), this.game.inputs.filters.delete("cinematic"), this.game.inputs.filters.add("wandering"), this.game.view.cinematic.end(), f.to(this.shadeMix.images.mixUniform, {
        value: this.shadeMix.images.min,
        duration: 1.5,
        ease: "power2.inOut",
        overwrite: true
      }), f.to(this.shadeMix.texts.mixUniform, {
        value: this.shadeMix.texts.min,
        duration: 1.5,
        ease: "power2.inOut",
        overwrite: true
      }), f.delayedCall(1, () => {
        this.game.interactivePoints.recover();
      });
      for (const t of this.pagination.items) t.intersect.active = false;
      this.adjacents.next.intersect.active = false, this.adjacents.previous.intersect.active = false, this.pagination.previousIntersect.active = false, this.pagination.nextIntersect.active = false, this.url.intersect.active = false, this.game.physicalVehicle.activate(), this.game.inputs.interactiveButtons.clearItems([]);
      const e = this.game.audio.groups.get("click");
      e && e.play(false);
    }
    previous() {
      this.images.index > 0 ? this.previousImage() : this.previousProject(false);
    }
    previousImage() {
      this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING || (this.changeImage(this.images.index - 1, _z.DIRECTION_PREVIOUS), this.blackBoard.active = false);
    }
    previousProject(e = false) {
      this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING || (this.changeProject(this.navigation.index - 1, _z.DIRECTION_PREVIOUS, e), this.blackBoard.active = false);
    }
    next() {
      this.images.index < this.navigation.current.images.length - 1 ? this.nextImage() : this.nextProject();
    }
    nextImage() {
      this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING || (this.changeImage(this.images.index + 1, _z.DIRECTION_NEXT), this.blackBoard.active = false);
    }
    nextProject() {
      this.state === _z.STATE_CLOSED || this.state === _z.STATE_CLOSING || (this.changeProject(this.navigation.index + 1, _z.DIRECTION_NEXT), this.blackBoard.active = false);
    }
    changeProject(e = 0, t = _z.DIRECTION_NEXT, s = false, i = false) {
      let a = e;
      a > Te.length - 1 ? a = 0 : a < 0 && (a = Te.length - 1), this.navigation.index = a, this.navigation.current = Te[this.navigation.index], this.navigation.previous = Te[this.navigation.index - 1 < 0 ? Te.length - 1 : this.navigation.index - 1], this.navigation.next = Te[(this.navigation.index + 1) % Te.length], this.attributes.update(), this.adjacents.update(), this.title.update(t), this.url.update(t), this.distinctions.update();
      let n = null;
      s ? n = 0 : n = t === _z.DIRECTION_NEXT ? 0 : this.navigation.current.images.length - 1, i || (this.game.audio.groups.get("click").play(), this.game.audio.groups.get("assemble").play()), this.changeImage(n, t, i), this.state === _z.STATE_OPEN && this.game.achievements.setProgress("projects", this.navigation.current.title);
    }
    changeImage(e = 0, t = null, s = false) {
      t === null && (t = e > this.images.index ? _z.DIRECTION_NEXT : _z.DIRECTION_PREVIOUS), this.images.index = e, this.images.update(t), this.pagination.update(), s || (this.game.audio.groups.get("click").play(), this.game.audio.groups.get("slide").play());
    }
    update() {
      this.oven.blower.scale.y = Math.sin(this.game.ticker.elapsedScaled) * 0.2 + 0.8, this.oven.thresholdBinding.update(), this.grinder.rotation.z = -this.game.ticker.elapsedScaled * 0.75;
      const e = this.game.ticker.elapsedScaled * this.anvil.frequency + Math.PI * 0.25;
      this.anvil.hammer.rotation.x = Math.pow(1 - Math.abs(Math.sin(e)), 5) - 1;
      const t = e / Math.PI % 1;
      t < this.anvil.loopTime && this.sounds.anvil.play(), this.anvil.loopTime = t;
    }
  };
  __publicField(_z, "DIRECTION_PREVIOUS", 1);
  __publicField(_z, "DIRECTION_NEXT", 2);
  __publicField(_z, "STATE_OPEN", 3);
  __publicField(_z, "STATE_OPENING", 4);
  __publicField(_z, "STATE_CLOSED", 5);
  __publicField(_z, "STATE_CLOSING", 6);
  let z = _z;
  const me = [
    {
      title: "Digital",
      url: "https://zkpeace.com/blog-cn/gallery/sketching/",
      image: "digital.jpg",
      imageMini: "digital-mini.jpg"
    },
    {
      title: "Photography",
      url: "https://zkpeace.com/blog-cn/gallery/photography/",
      image: "photography.jpg",
      imageMini: "photography-mini.jpg"
    },
    {
      title: "Drone",
      url: "https://zkpeace.com/blog-cn/gallery/sky/",
      image: "drone.jpg",
      imageMini: "drone-mini.jpg"
    },
    {
      title: "Street",
      url: "https://zkpeace.com/blog-cn/gallery/street/",
      image: "street.jpg",
      imageMini: "street-mini.jpg"
    },
    {
      title: "People",
      url: "https://zkpeace.com/blog-cn/gallery/people/",
      image: "people.jpg",
      imageMini: "people-mini.jpg"
    },
    {
      title: "500px",
      url: "https://500px.com.cn/kpeace",
      image: "500px.jpg",
      imageMini: "500px-mini.jpg"
    },
    {
      title: "Transcribe",
      url: "https://zkpeace.com/blog-cn/gallery/transcribe/",
      image: "transcribe.jpg",
      imageMini: "transcribe-mini.jpg"
    },
    {
      title: "Selfish",
      url: "https://zkpeace.com/blog-cn/gallery/selfish/",
      image: "selfish.jpg",
      imageMini: "selfish-mini.jpg"
    },
    {
      title: "Archive",
      url: "https://zkpeace.com/blog-cn/gallery/archive/",
      image: "archive.jpg",
      imageMini: "archive-mini.jpg"
    }
  ];
  const _$ = class _$ extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F9EA} Lab",
        expanded: false
      })), this.state = _$.STATE_CLOSED, this.setSounds(), this.setInteractivePoint(), this.setInputs(), this.setCinematic(), this.setShadeMix(), this.setTexts(), this.setHover(), this.setNavigation(), this.setImages(), this.setAdjacents(), this.setTitle(), this.setUrl(), this.setScroller(), this.setPendulum(), this.setBlackBoard(), this.setCandleFlames(), this.setCauldron(), this.setAchievement(), this.changeProject(0, null, true), this.scroller.progress = this.scroller.targetProgress, this.scroller.animate(), this.game.debug.active && (this.debugPanel.addButton({
        title: "open",
        label: "open"
      }).on("click", () => {
        this.open();
      }), this.debugPanel.addButton({
        title: "close",
        label: "close"
      }).on("click", () => {
        this.close();
      }));
    }
    setSounds() {
      this.sounds = {}, this.sounds.scroll = this.game.audio.register({
        path: "sounds/mecanism/05947 light wooden cart riding on cobblestone - looping.mp3",
        autoplay: true,
        loop: true,
        volume: 0.5,
        positions: this.references.items.get("mecanism")[0].position,
        onPlaying: (e) => {
          const t = Math.abs(this.scroller.speed);
          e.volume = L(t, 0, 6, 0, 0.5), e.rate = L(t, 0, 6, 0.95, 1.05);
        }
      });
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Gallery", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.open();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setInputs() {
      this.game.inputs.events.on("left", (e) => {
        e.active && this.previous();
      }), this.game.inputs.events.on("right", (e) => {
        e.active && this.next();
      }), this.game.inputs.events.on("forward", (e) => {
        e.active && !e.activeKeys.has("Gamepad.r2") && this.previous();
      }), this.game.inputs.events.on("backward", (e) => {
        e.active && !e.activeKeys.has("Gamepad.l2") && this.next();
      }), this.game.inputs.events.on("interact", (e) => {
        !e.active && this.state === _$.STATE_OPEN && this.url.open();
      }), this.game.inputs.interactiveButtons.events.on("previous", () => {
        this.state === _$.STATE_OPEN && this.previous();
      }), this.game.inputs.interactiveButtons.events.on("next", () => {
        this.state === _$.STATE_OPEN && this.next();
      }), this.game.inputs.interactiveButtons.events.on("open", () => {
        this.state === _$.STATE_OPEN && this.url.open();
      }), this.game.inputs.interactiveButtons.events.on("close", () => {
        this.state === _$.STATE_OPEN && this.close();
      });
    }
    setCinematic() {
      this.cinematic = {}, this.cinematic.position = new y(), this.cinematic.positionOffset = new y(4.35, 4, 4), this.cinematic.target = new y(), this.cinematic.targetOffset = new y(-1.75, 1.9, -3);
      const e = () => {
        const t = this.references.items.get("interactivePoint")[0].position.clone();
        t.y = 0, this.cinematic.position.copy(t).add(this.cinematic.positionOffset), this.cinematic.target.copy(t).add(this.cinematic.targetOffset);
      };
      if (e(), this.game.debug.active) {
        const t = this.debugPanel.addFolder({
          title: "cinematic",
          expanded: false
        });
        t.addBinding(this.cinematic.positionOffset, "x", {
          label: "positionX",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.positionOffset, "y", {
          label: "positionY",
          min: 0,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.positionOffset, "z", {
          label: "positionZ",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "x", {
          label: "targetX",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "y", {
          label: "targetY",
          min: 0,
          max: 10,
          step: 0.05
        }).on("change", e), t.addBinding(this.cinematic.targetOffset, "z", {
          label: "targetZ",
          min: -10,
          max: 10,
          step: 0.05
        }).on("change", e);
      }
    }
    setShadeMix() {
      if (this.shadeMix = {}, this.shadeMix.images = {}, this.shadeMix.images.min = 0.1, this.shadeMix.images.max = 0.65, this.shadeMix.images.mixUniform = d(this.shadeMix.images.min), this.shadeMix.texts = {}, this.shadeMix.texts.min = 0.1, this.shadeMix.texts.max = 0.3, this.shadeMix.texts.mixUniform = d(this.shadeMix.texts.min), this.game.debug.active) {
        const e = this.debugPanel.addFolder({
          title: "Shader mix",
          expanded: true
        }), t = () => {
          this.state === _$.STATE_OPEN || this.state === _$.STATE_OPENING ? (this.shadeMix.images.mixUniform.value = this.shadeMix.images.max, this.shadeMix.texts.mixUniform.value = this.shadeMix.texts.max) : (this.shadeMix.images.mixUniform.value = this.shadeMix.images.min, this.shadeMix.texts.mixUniform.value = this.shadeMix.texts.min);
        };
        e.addBinding(this.shadeMix.images, "min", {
          label: "imagesMin",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.images, "max", {
          label: "imagesMax",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.texts, "min", {
          label: "textsMin",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t), e.addBinding(this.shadeMix.texts, "max", {
          label: "textsMax",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", t);
      }
    }
    setTexts() {
      this.texts = {}, this.texts.density = 200, this.texts.fontFamily = "Amatic SC", this.texts.fontWeight = 700, this.texts.fontSizeMultiplier = 1, this.texts.baseColor = M("#ffffff"), this.texts.createMaterialOnMesh = (e, t) => {
        const s = new V({
          hasWater: false,
          alphaNode: P(t).r,
          transparent: true
        }), i = s.outputNode;
        s.outputNode = b(() => C(A(i.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), i.a))(), e.castShadow = false, e.receiveShadow = false, e.material = s;
      };
    }
    setHover() {
      this.hover = {}, this.hover.baseColor = M("#ffffff"), this.hover.inactiveMaterial = new V({
        colorNode: this.hover.baseColor,
        hasWater: false
      });
      const e = this.hover.inactiveMaterial.outputNode;
      this.hover.inactiveMaterial.outputNode = b(() => C(A(e.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), 1))(), this.hover.activeMaterial = new O({
        transparent: true
      }), this.hover.activeMaterial.outputNode = C(this.hover.baseColor.mul(1.5), F(1));
    }
    setNavigation() {
      this.navigation = {}, this.navigation.index = -1, this.navigation.current = null, this.navigation.next = null, this.navigation.previous = null, this.navigation.direction = _$.DIRECTION_NEXT;
    }
    setImages() {
      this.images = {}, this.images.initiated = false, this.images.width = 1920 * 0.5, this.images.height = 1080 * 0.5, this.images.resources = /* @__PURE__ */ new Map(), this.images.loadProgress = d(0), this.images.animationProgress = d(0), this.images.animationDirection = d(0), this.images.mesh = this.references.items.get("images")[0], this.images.mesh.receiveShadow = true, this.images.mesh.castShadow = false, this.images.mesh.visible = false, this.images.init = (e) => {
        this.images.initiated = true, this.images.mesh.visible = true;
        const t = this.images.resources.get(e);
        this.images.textureOld = t.texture.clone(), this.images.textureNew = t.texture.clone();
        const s = b(() => {
          const a = k().toVar(), n = k().toVar();
          n.x.addAssign(this.images.animationProgress.oneMinus().mul(-0.25).mul(this.images.animationDirection)), a.x.addAssign(this.images.animationProgress.mul(0.25).mul(this.images.animationDirection));
          const o = P(this.images.textureOld, a).rgb, l = P(this.images.textureNew, n).rgb;
          l.assign(A(M("#333333"), l, this.images.loadProgress));
          const r = k().x.toVar();
          De(this.images.animationDirection.greaterThan(0), () => {
            r.assign(r.oneMinus());
          });
          const h = _(this.images.animationProgress, r);
          return A(l, o, h);
        })();
        this.images.material = new V({
          colorNode: s,
          hasWater: false
        });
        const i = this.images.material.outputNode;
        this.images.material.outputNode = b(() => C(A(i.rgb, s, this.shadeMix.images.mixUniform), i.a))(), this.images.mesh.material = this.images.material;
      }, this.images.loadEnded = (e) => {
        if (this.images.initiated || this.images.init(e), this.navigation.current.image === e) {
          const t = this.images.getResourceAndLoad(e);
          this.images.textureNew.copy(t.texture), this.images.textureNew.needsUpdate = true, f.to(this.images.loadProgress, {
            value: 1,
            duration: 1,
            overwrite: true
          }), this.images.loadSibling();
        }
      }, this.images.loadSibling = () => {
        let e = this.navigation.index;
        this.navigation.direction === _$.DIRECTION_PREVIOUS ? e -= 1 : e += 1, e < 0 && (e = me.length - 1), e > me.length - 1 && (e = 0);
        const t = me[e].image;
        this.images.getResourceAndLoad(t);
      }, this.images.getResourceAndLoad = (e) => {
        const t = `lab/images/${e}`;
        let s = this.images.resources.get(e);
        if (!s) {
          s = {}, s.loaded = false;
          const i = /\.(jpe?g|png|webp)$/i.test(e);
          this.game.resourcesLoader.getLoader(i ? "texture" : "textureKtx").load(t, (n) => {
            i && (n.colorSpace = he, n.flipY = false, n.needsUpdate = true), s.texture = n, s.colorSpace = he, s.flipY = false, s.magFilter = j, s.minFilter = j, s.generateMipmaps = false, s.loaded = true, this.images.loadEnded(e);
          }), this.images.resources.set(e, s);
        }
        return s;
      }, this.images.update = () => {
        const e = this.navigation.current.image, t = this.images.getResourceAndLoad(e);
        t.loaded ? (this.images.loadSibling(), this.images.loadProgress.value = 1) : this.images.loadProgress.value = 0, this.images.initiated && (this.images.textureOld.copy(this.images.textureNew), this.images.textureOld.needsUpdate = true, t.loaded && (this.images.textureNew.copy(t.texture), this.images.textureNew.needsUpdate = true)), f.fromTo(this.images.animationProgress, {
          value: 0
        }, {
          value: 1,
          duration: 1,
          ease: "power2.inOut",
          overwrite: true
        }), this.images.animationDirection.value = this.navigation.direction === _$.DIRECTION_NEXT ? 1 : -1;
      };
    }
    setAdjacents() {
      this.adjacents = {};
      const e = this.references.items.get("arrowPrevious")[0];
      e.material = this.hover.inactiveMaterial;
      const t = this.references.items.get("intersectPrevious")[0], s = new y();
      t.getWorldPosition(s), this.adjacents.previousIntersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(s, t.scale.x),
        onClick: () => {
          this.previous(true);
        },
        onEnter: () => {
          e.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          e.material = this.hover.inactiveMaterial;
        }
      });
      const i = this.references.items.get("arrowNext")[0];
      i.material = this.hover.inactiveMaterial;
      const a = this.references.items.get("intersectNext")[0], n = new y();
      a.getWorldPosition(n), this.adjacents.nextIntersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: new ke(n, a.scale.x),
        onClick: () => {
          this.next();
        },
        onEnter: () => {
          i.material = this.hover.activeMaterial;
        },
        onLeave: () => {
          i.material = this.hover.inactiveMaterial;
        }
      });
    }
    setTitle() {
      this.title = {}, this.title.status = "hidden", this.title.group = this.references.items.get("title")[0], this.title.inner = this.title.group.children[0], this.title.textMesh = this.title.inner.children.find((e) => e.name.startsWith("text")), this.title.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.4, 4, 0.6, this.texts.density, "center"), this.texts.createMaterialOnMesh(this.title.textMesh, this.title.textCanvas.texture), this.title.update = (e) => {
        if (this.title.status === "hiding") return;
        this.title.status = "hiding";
        const t = e === _$.DIRECTION_NEXT ? -1 : 1;
        this.title.inner.rotation.x = 0, f.to(this.title.inner.rotation, {
          x: Math.PI * t,
          duration: 1,
          delay: 0,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => {
            this.title.status = "visible", f.to(this.title.inner.rotation, {
              x: Math.PI * 2 * t,
              duration: 1,
              delay: 0,
              ease: "back.out(2)",
              overwrite: true
            }), this.title.textCanvas.updateText(this.navigation.current.title);
          }
        });
      };
    }
    setUrl() {
      this.url = {}, this.url.status = "hidden", this.url.group = this.references.items.get("url")[0], this.url.inner = this.url.group.children[0], this.url.textMesh = this.url.inner.children.find((i) => i.name.startsWith("text")), this.url.panel = this.url.inner.children.find((i) => i.name.startsWith("panel")), this.url.textCanvas = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.23, 4, 0.2, this.texts.density, "center"), this.url.mixStrength = d(0);
      const e = new V({
        colorNode: this.texts.baseColor,
        hasWater: false,
        alphaNode: P(this.url.textCanvas.texture).r,
        transparent: true
      }), t = e.outputNode;
      e.outputNode = b(() => C(A(A(t.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), this.texts.baseColor.mul(1.5), this.url.mixStrength), t.a))(), this.url.textMesh.castShadow = false, this.url.textMesh.receiveShadow = false, this.url.textMesh.material = e;
      const s = this.references.items.get("intersectUrl")[0];
      s.visible = false, this.url.intersect = this.game.rayCursor.addIntersect({
        active: false,
        shape: s,
        onClick: () => {
          this.url.open();
        },
        onEnter: () => {
          this.url.mixStrength.value = 1;
        },
        onLeave: () => {
          this.url.mixStrength.value = 0;
        }
      }), this.url.update = (i) => {
        if (this.url.status === "hiding") return;
        this.url.status = "hiding";
        const a = i === _$.DIRECTION_NEXT ? -1 : 1;
        this.url.inner.rotation.x = 0, f.to(this.url.inner.rotation, {
          x: Math.PI * a,
          duration: 1,
          delay: 0.3,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => {
            this.url.status = "visible", f.to(this.url.inner.rotation, {
              x: Math.PI * 2 * a,
              duration: 1,
              delay: 0,
              ease: "back.out(2)",
              overwrite: true
            }), this.url.textCanvas.updateText(this.navigation.current.url.replace(/https?:\/\//, ""));
            const n = this.url.textCanvas.getMeasure().width / this.texts.density;
            this.url.panel.scale.x = n + 0.2;
          }
        });
      }, this.url.open = () => {
        this.navigation.current.url && window.open(this.navigation.current.url, "_blank");
      };
    }
    setScroller() {
      this.scroller = {}, this.scroller.repeatAmplitude = 0.5444, this.scroller.chainLeft = this.references.items.get("chainLeft")[0], this.scroller.chainRight = this.references.items.get("chainRight")[0], this.scroller.chainPulley = this.references.items.get("chainPulley")[0], this.scroller.gearA = this.references.items.get("gearA")[0], this.scroller.gearB = this.references.items.get("gearB")[0], this.scroller.gearC = this.references.items.get("gearC")[0], this.scroller.progress = 0, this.scroller.offset = 0, this.scroller.targetProgress = 0, this.scroller.wheelSensitivity = 0.1, this.scroller.easing = 3, this.scroller.speed = 0;
      {
        const e = new V({
          colorNode: M("#6f6a87"),
          alphaNode: Q.y.step(4).oneMinus(),
          hasWater: false,
          hasLightBounce: false
        });
        this.scroller.chainLeft.material = e, this.scroller.chainRight.material = e;
      }
      {
        const e = new V({
          colorNode: M("#6f6a87"),
          alphaNode: Q.y.step(4),
          hasWater: false,
          hasLightBounce: false
        });
        this.scroller.chainPulley.material = e;
      }
      {
        const e = this.references.items.get("mini")[0], t = e.parent;
        e.removeFromParent(), this.scroller.minis = {}, this.scroller.minis.inter = 0.9, this.scroller.minis.items = [], this.scroller.minis.total = me.length * this.scroller.minis.inter, this.scroller.minis.current = null, this.scroller.minis.width = 1920 / 8, this.scroller.minis.height = 1080 / 8;
        let s = 0;
        for (const i of me) {
          const a = {};
          a.index = s, a.y = -s * this.scroller.minis.inter, this.scroller.minis.items.push(a), a.group = e.clone(true), a.group.position.y = a.y, a.group.visible = true, t.add(a.group);
          let n = null, o = null, l = null, r = null;
          for (const h of a.group.children) h.name.startsWith("image") && (n = h), h.name.startsWith("text") && (o = h), h.name.startsWith("panel") && (l = h), h.name.startsWith("intersect") && (r = h);
          n.visible = false, a.startedLoading = false, a.startLoading = () => {
            if (a.startedLoading) return;
            const h = /\.(jpe?g|png|webp)$/i.test(i.imageMini);
            this.game.resourcesLoader.getLoader(h ? "texture" : "textureKtx").load(`lab/images/${i.imageMini}`, (u) => {
              h && (u.colorSpace = he, u.flipY = false, u.needsUpdate = true);
              const g = d(0), p = P(u).rgb;
              f.to(g, {
                value: 1,
                duration: 1,
                overwrite: true
              }), u.colorSpace = he, u.flipY = false, u.magFilter = j, u.minFilter = j, u.generateMipmaps = false;
              const v = new V({
                colorNode: p,
                hasWater: false,
                hasLightBounce: false,
                transparent: true
              }), x = v.outputNode;
              v.outputNode = b(() => C(A(x.rgb, p, this.shadeMix.images.mixUniform), g))(), n.material = v, n.visible = true;
            }), a.startedLoading = true;
          };
          {
            a.textMixStrength = d(0);
            const h = new Ye(this.texts.fontFamily, this.texts.fontWeight, this.texts.fontSizeMultiplier * 0.18, 1.5, 0.2, this.texts.density, "center", 0.2);
            h.updateText(i.title);
            const c = h.getMeasure().width / this.texts.density;
            l.scale.x = c + 0.2;
            const u = new V({
              colorNode: this.texts.baseColor,
              hasWater: false,
              hasLightBounce: false,
              alphaNode: P(h.texture).r,
              transparent: true
            }), g = u.outputNode;
            u.outputNode = b(() => C(A(A(g.rgb, this.texts.baseColor, this.shadeMix.texts.mixUniform), this.texts.baseColor.mul(1.5), a.textMixStrength), g.a))(), o.castShadow = false, o.receiveShadow = false, o.material = u;
          }
          r.visible = false, a.intersect = this.game.rayCursor.addIntersect({
            active: false,
            shape: r,
            onClick: () => {
              this.changeProject(a.index);
            },
            onEnter: () => {
              a.textMixStrength.value = 1;
            },
            onLeave: () => {
              a.index === this.navigation.index ? a.textMixStrength.value = 1 : a.textMixStrength.value = 0;
            }
          }), s++;
        }
      }
      this.scroller.gearA.rotation.reorder("YXZ"), this.scroller.gearB.rotation.reorder("YXZ"), this.scroller.gearC.rotation.reorder("YXZ"), this.scroller.animate = () => {
        const e = (this.scroller.targetProgress - this.scroller.progress) * this.game.ticker.deltaScaled * this.scroller.easing;
        this.scroller.progress += e, this.scroller.offset = this.scroller.progress * this.scroller.minis.inter, this.scroller.speed = e / this.game.ticker.delta, this.scroller.chainLeft.position.y = -this.scroller.repeatAmplitude * 0.5 - this.scroller.offset % this.scroller.repeatAmplitude, this.scroller.chainRight.position.y = -this.scroller.repeatAmplitude * 0.5 + this.scroller.offset % this.scroller.repeatAmplitude, this.scroller.chainPulley.rotation.z = this.scroller.offset * 1.4, this.scroller.gearA.rotation.x = -this.scroller.offset * 1.4, this.scroller.gearB.rotation.x = -this.scroller.gearA.rotation.x * (6 / 12), this.scroller.gearC.rotation.x = -this.scroller.gearB.rotation.x * (6 / 12);
        for (const t of this.scroller.minis.items) {
          t.group.position.y = sa(t.y - this.scroller.offset, this.scroller.minis.total) - 1;
          const s = L(t.group.position.y, 3.3, 3.9, 1, 0);
          t.group.scale.y = s, t.group.visible = s > 0, t.intersect.active = t.group.visible && (this.state === _$.STATE_OPEN || this.state === _$.STATE_OPENING), t.group.visible && !t.startedLoading && t.startLoading();
        }
      }, this.scroller.update = () => {
        const e = me.length - 3.25, t = Math.round((this.scroller.progress + this.navigation.index - e) / me.length) * me.length - this.navigation.index + e;
        this.scroller.targetProgress = t, this.scroller.minis.current && (this.scroller.minis.current.textMixStrength.value = 0);
        const s = this.scroller.minis.items[this.navigation.index];
        s.textMixStrength.value = 1, this.scroller.minis.current = s;
      }, this.game.inputs.addActions([
        {
          name: "labScroll",
          categories: [
            "cinematic"
          ],
          keys: [
            "Wheel.roll"
          ]
        }
      ]), this.game.inputs.events.on("labScroll", (e) => {
        this.scroller.targetProgress -= e.value * this.scroller.wheelSensitivity;
      });
    }
    setPendulum() {
      this.references.items.get("balls")[0].rotation.reorder("YXZ"), f.timeline({
        yoyo: true,
        repeat: -1
      }).to(this.references.items.get("balls")[0].rotation, {
        x: 0.75,
        ease: "power2.out",
        delay: 0.75,
        duration: 0.75
      }), f.timeline({
        yoyo: true,
        repeat: -1,
        delay: 1.5
      }).to(this.references.items.get("balls")[1].rotation, {
        x: -0.75,
        ease: "power2.out",
        delay: 0.75,
        duration: 0.75
      });
    }
    setBlackBoard() {
      this.blackBoard = {}, this.blackBoard.active = true, this.blackBoard.group = this.references.items.get("blackBoard")[0], this.blackBoard.parent = this.blackBoard.group.parent, this.blackBoard.timeline = f.timeline({
        repeat: -1,
        repeatDelay: 5,
        paused: true,
        onRepeat: () => {
          (this.state === _$.STATE_CLOSED || this.state === _$.STATE_CLOSING || !this.blackBoard.active) && this.blackBoard.timeline.pause();
        }
      }), this.blackBoard.timeline.to(this.blackBoard.group.position, {
        y: 0.25,
        ease: "power2.out",
        duration: 0.7
      }, 2), this.blackBoard.timeline.to(this.blackBoard.group.position, {
        y: 0,
        ease: "power2.in",
        duration: 0.7
      }, 0.7 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0.1,
        duration: 0.15
      }, 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: -0.1,
        duration: 0.3
      }, 0.15 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0.1,
        duration: 0.3
      }, 0.45 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: -0.1,
        duration: 0.3
      }, 0.75 + 2), this.blackBoard.timeline.to(this.blackBoard.group.rotation, {
        x: 0,
        duration: 0.3
      }, 1.05 + 2), this.blackBoard.labelsGamepadPlaystation = this.references.items.get("blackboardLabelsGamepadPlaystation")[0], this.blackBoard.labelsGamepadXbox = this.references.items.get("blackboardLabelsGamepadXbox")[0], this.blackBoard.labelsMouseKeyboard = this.references.items.get("blackboardLabelsMouseKeyboard")[0], this.blackBoard.labelsGamepadPlaystation.castShadow = false, this.blackBoard.labelsGamepadXbox.castShadow = false, this.blackBoard.labelsMouseKeyboard.castShadow = false, this.blackBoard.labelsGamepadPlaystation.visible = false, this.blackBoard.labelsGamepadXbox.visible = false, this.game.inputs.events.on("modeChange", () => {
        this.game.inputs.mode === K.MODE_GAMEPAD ? (this.game.inputs.gamepad.type === "xbox" ? (this.blackBoard.labelsGamepadXbox.visible = true, this.blackBoard.labelsGamepadPlaystation.visible = false) : (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = true), this.blackBoard.labelsMouseKeyboard.visible = false, this.blackBoard.parent.add(this.blackBoard.group)) : this.game.inputs.mode === K.MODE_MOUSEKEYBOARD ? (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = false, this.blackBoard.labelsMouseKeyboard.visible = true, this.blackBoard.parent.add(this.blackBoard.group)) : this.game.inputs.mode === K.MODE_TOUCH && this.blackBoard.parent.remove(this.blackBoard.group);
      }), this.game.inputs.gamepad.events.on("typeChange", () => {
        this.game.inputs.mode === K.MODE_GAMEPAD && (this.game.inputs.gamepad.type === "xbox" ? (this.blackBoard.labelsGamepadXbox.visible = true, this.blackBoard.labelsGamepadPlaystation.visible = false) : (this.blackBoard.labelsGamepadXbox.visible = false, this.blackBoard.labelsGamepadPlaystation.visible = true));
      });
    }
    setCandleFlames() {
      const e = this.references.items.get("candleFlame"), t = this.game.materials.getFromName("emissiveOrangeRadialGradient"), s = new O({
        transparent: true
      });
      s.outputNode = t.outputNode, s.positionNode = b(() => {
        const i = Z.toVar(), a = de(this.game.ticker.elapsedScaledUniform.mul(0.3).add(k().y.mul(3))), n = k().y.oneMinus().pow(2).mul(0.06);
        return i.x.addAssign(a.mul(n)), i;
      })();
      for (const i of e) i.scale.setScalar(0), i.visible = false, i.material = s;
      this.game.dayCycles.events.on("night", (i) => {
        if (i) for (const a of e) a.visible = true, f.to(a.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 10,
          ease: "power1.out",
          overwrite: true
        });
        else for (const a of e) f.to(a.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 10,
          ease: "power1.in",
          overwrite: true,
          onComplete: () => {
            a.visible = false;
          }
        });
      });
    }
    setCauldron() {
      this.cauldron = {};
      {
        const e = new O({
          side: Ae,
          transparent: true,
          depthTest: true,
          depthWrite: false
        });
        e.outputNode = b(() => {
          const t = k().mul(w(2, 0.2));
          t.y.addAssign(this.game.ticker.elapsedScaledUniform.mul(0.05));
          const i = P(this.game.noises.perlin, t).r.mul(k().y.pow(2)), a = i.smoothstep(0, 1), n = A(M("#ff3e00"), M("#ff8641"), a).mul(i.add(1).mul(2));
          return C(E(n), i);
        })(), this.cauldron.heat = this.references.items.get("heat")[0], this.cauldron.heat.material = e, this.cauldron.heat.castShadow = false;
      }
      {
        const e = this.game.materials.getFromName("palette"), t = e.clone(), s = d(M("#ff6b2b")), i = d(M("#ff4100")), a = d(1.25), n = e.outputNode;
        if (t.outputNode = b(() => {
          const o = k(1).toVar(), l = A(s, i, o.sub(0.5).length().mul(2)), r = l.div(Ve(l)).mul(a), h = o.sub(0.5).length().mul(2).pow2(), c = A(n.rgb, r, h);
          return C(c.rgb, 1);
        })(), this.cauldron.wood = this.references.items.get("wood")[0], this.cauldron.wood.material = t, this.game.debug.active) {
          const o = this.debugPanel.addFolder({
            title: "burning wood",
            expanded: false
          });
          this.game.debug.addThreeColorBinding(o, s.value, "colorA"), this.game.debug.addThreeColorBinding(o, i.value, "colorB");
        }
      }
      {
        this.cauldron.liquid = {};
        const e = d(M("#ff0083")), t = d(M("#3018eb")), s = d(1.7), i = new O({
          transparent: true
        }), a = A(e, t, k().sub(0.5).length().mul(2));
        if (i.colorNode = a.div(Ve(a)).mul(s), i.fog = false, this.cauldron.liquid.surface = this.references.items.get("liquid")[0], this.cauldron.liquid.surface.material = i, this.game.debug.active) {
          const n = this.debugPanel.addFolder({
            title: "cauldron",
            expanded: false
          });
          this.game.debug.addThreeColorBinding(n, e.value, "colorA"), this.game.debug.addThreeColorBinding(n, t.value, "colorB");
        }
      }
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "lab");
      });
    }
    open() {
      if (this.state === _$.STATE_OPEN || this.state === _$.STATE_OPENING) return;
      this.state = _$.STATE_OPENING, this.stateTransition && this.stateTransition.kill(), this.stateTransition = f.delayedCall(1.5, () => {
        this.state = _$.STATE_OPEN, this.stateTransition = null;
      }), this.game.inputs.filters.delete("wandering"), this.game.inputs.filters.add("cinematic"), this.game.view.cinematic.start(this.cinematic.position, this.cinematic.target), this.game.interactivePoints.temporaryHide(), f.to(this.shadeMix.images.mixUniform, {
        value: this.shadeMix.images.max,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true
      }), f.to(this.shadeMix.texts.mixUniform, {
        value: this.shadeMix.texts.max,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true
      }), this.blackBoard.active && (this.blackBoard.timeline.repeat(-1), this.blackBoard.timeline.resume()), this.adjacents.nextIntersect.active = true, this.adjacents.previousIntersect.active = true, this.url.intersect.active = true, this.game.physicalVehicle.deactivate(), this.game.inputs.interactiveButtons.clearItems(), this.game.inputs.interactiveButtons.addItems([
        "previous",
        "next",
        "open",
        "close"
      ]);
      const e = this.game.audio.groups.get("click");
      e && e.play(true), this.game.achievements.setProgress("lab", this.navigation.current.title);
    }
    close() {
      if (this.state === _$.STATE_CLOSED || this.state === _$.STATE_CLOSING) return;
      this.state = _$.STATE_CLOSING, this.stateTransition && this.stateTransition.kill(), this.stateTransition = f.delayedCall(1.5, () => {
        this.state = _$.STATE_CLOSED, this.stateTransition = null;
      }), this.game.inputs.filters.delete("cinematic"), this.game.inputs.filters.add("wandering"), this.game.view.cinematic.end(), f.to(this.shadeMix.images.mixUniform, {
        value: this.shadeMix.images.min,
        duration: 1.5,
        ease: "power2.inOut",
        overwrite: true
      }), f.to(this.shadeMix.texts.mixUniform, {
        value: this.shadeMix.texts.min,
        duration: 1.5,
        ease: "power2.inOut",
        overwrite: true
      }), f.delayedCall(1, () => {
        this.game.interactivePoints.recover();
      }), this.adjacents.nextIntersect.active = false, this.adjacents.previousIntersect.active = false, this.url.intersect.active = false, this.game.physicalVehicle.activate(), this.game.inputs.interactiveButtons.clearItems();
      const e = this.game.audio.groups.get("click");
      e && e.play(false);
    }
    previous() {
      this.state === _$.STATE_CLOSED || this.state === _$.STATE_CLOSING || (this.changeProject(this.navigation.index - 1, _$.DIRECTION_PREVIOUS), this.blackBoard.active = false);
    }
    next() {
      this.state === _$.STATE_CLOSED || this.state === _$.STATE_CLOSING || (this.changeProject(this.navigation.index + 1, _$.DIRECTION_NEXT), this.blackBoard.active = false);
    }
    changeProject(e = 0, t = null, s = false) {
      let i = e;
      i > me.length - 1 ? i = 0 : i < 0 && (i = me.length - 1), this.navigation.index !== i && (t === null && (t = ia(i, this.navigation.index, me.length) > 0 ? _$.DIRECTION_PREVIOUS : _$.DIRECTION_NEXT), this.navigation.index = i, this.navigation.current = me[this.navigation.index], this.navigation.previous = me[this.navigation.index - 1 < 0 ? me.length - 1 : this.navigation.index - 1], this.navigation.next = me[(this.navigation.index + 1) % me.length], this.navigation.direction = t, this.title.update(t), this.url.update(t), this.images.update(), this.scroller.update(this.navigation.index), s || (this.game.audio.groups.get("click").play(), this.game.audio.groups.get("slide").play(), this.game.audio.groups.get("assemble").play()), this.state === _$.STATE_OPEN && this.game.achievements.setProgress("lab", this.navigation.current.title));
    }
    update() {
      this.state !== _$.STATE_CLOSED && this.scroller.animate();
    }
  };
  __publicField(_$, "DIRECTION_PREVIOUS", 1);
  __publicField(_$, "DIRECTION_NEXT", 2);
  __publicField(_$, "STATE_OPEN", 3);
  __publicField(_$, "STATE_OPENING", 4);
  __publicField(_$, "STATE_CLOSED", 5);
  __publicField(_$, "STATE_CLOSING", 6);
  let $ = _$;
  class za extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F4BC} Career",
        expanded: false
      })), this.setSounds(), this.setLines(), this.setYears(), this.setAchievement();
    }
    setSounds() {
      this.sounds = {}, this.sounds.stoneOut = this.game.audio.register({
        path: "sounds/stoneSlides/stoneSlideOut.mp3",
        autoplay: false,
        loop: false,
        volume: 0.3,
        antiSpam: 0.1,
        positions: new y(),
        distanceFade: 14,
        onPlay: (e, t) => {
          e.positions[0].copy(t.origin), e.rate = 1.2 + t.index * 0.1;
        }
      }), this.sounds.stoneIn = this.game.audio.register({
        path: "sounds/stoneSlides/stoneSlideIn.mp3",
        autoplay: false,
        loop: false,
        volume: 0.2,
        rate: 0.8,
        antiSpam: 0.1,
        positions: new y(),
        distanceFade: 14,
        onPlay: (e, t) => {
          e.positions[0].copy(t.origin);
        }
      });
    }
    setLines() {
      this.lines = {}, this.lines.items = [], this.lines.activeElevation = 2.5, this.lines.padding = 0.25;
      const e = this.references.items.get("line"), t = {
        blue: d(M("#5390ff")),
        orange: d(M("#ff8039")),
        purple: d(M("#b65fff")),
        green: d(M("#a2ffab"))
      };
      for (const i of e) {
        const a = {};
        a.group = i, a.size = parseFloat(a.group.userData.size), a.hasEnd = a.group.userData.hasEnd, a.color = a.group.userData.color, a.texture = this.game.resources[`${a.group.userData.texture}Texture`], a.stone = a.group.children.find((n) => n.name.startsWith("stone")), a.stone.position.y = 0, a.origin = a.group.position.clone(), a.isIn = false, a.isUp = false, a.elevationTarget = 0, a.offsetTarget = 0, a.labelReveal = d(0);
        {
          a.textMesh = a.stone.children.find((l) => l.name.startsWith("careerText"));
          const n = new et({
            transparent: true
          }), o = t[a.color];
          n.outputNode = b(() => {
            const l = k().toVar();
            _(l.x, a.labelReveal).lessThan(0.5).discard();
            const r = P(a.texture, l), h = _(0.1, ge(r.r, r.g)), c = o.div(Ve(o)).mul(1.7), u = M("#251f2b"), g = A(u, c, r.r);
            return C(g, h);
          })(), a.textMesh.castShadow = false, a.textMesh.receiveShadow = false, a.textMesh.material = n;
        }
        this.lines.items.push(a);
      }
      this.lines.items.sort((i, a) => a.origin.z - i.origin.z);
      let s = 0;
      for (const i of this.lines.items) i.index = s++;
      this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, t.blue.value, "blue"), this.game.debug.addThreeColorBinding(this.debugPanel, t.orange.value, "orange"), this.game.debug.addThreeColorBinding(this.debugPanel, t.purple.value, "purple"), this.game.debug.addThreeColorBinding(this.debugPanel, t.green.value, "green"));
    }
    setYears() {
      this.year = {}, this.year.group = this.references.items.get("year")[0], this.year.originZ = this.year.group.position.z, this.year.size = 17, this.year.offsetTarget = 0, this.year.start = 2008, this.year.current = this.year.start;
      const e = 255, t = new Uint8Array([
        e,
        e,
        e,
        e,
        e,
        e,
        0,
        0,
        e,
        e,
        0,
        0,
        0,
        0,
        e,
        e,
        0,
        e,
        e,
        0,
        e,
        e,
        e,
        e,
        e,
        0,
        0,
        e,
        0,
        e,
        e,
        0,
        0,
        e,
        e,
        e,
        0,
        e,
        e,
        0,
        e,
        e,
        e,
        0,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        0,
        0,
        0,
        0,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        0,
        e,
        e
      ]);
      this.year.digitsTexture = new Ft(t, 7, 10, mt, Ps, Ss, te, te, W, W), this.year.digitsTexture.generateMipmaps = false, this.year.digitsTexture.needsUpdate = true, this.year.digits = [];
      const s = this.year.group.children.filter((i) => i.name.startsWith("digit"));
      for (const i of s) {
        const a = {};
        a.mesh = i, a.indexUniform = d(0);
        const n = new O();
        n.outputNode = C(1.7), n.positionNode = b(() => {
          const o = k(1).toVar(), l = a.indexUniform.div(10).add(F(0.5).div(10));
          o.y.assign(l);
          const r = P(this.year.digitsTexture, o).r, h = Z.toVar();
          return h.y.subAssign(r.oneMinus()), h;
        })(), a.mesh.material = n, this.year.digits.push(a);
      }
      this.year.updateDigits = (i = 2025) => {
        const a = `${i}`;
        let n = 0;
        for (const o of this.year.digits) o.indexUniform.value = parseInt(a[n]), n++;
      }, this.year.updateDigits(this.year.current);
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "career");
      });
    }
    update() {
      for (const i of this.lines.items) {
        const a = i.origin.z - this.game.player.position.z;
        a > -this.lines.padding && a < i.size + this.lines.padding * 2 ? i.isIn || (i.isIn = true, f.to(i.labelReveal, {
          value: 1,
          duration: 1,
          delay: 0.3,
          overwrite: true,
          ease: "power2.inOut"
        })) : i.isIn && (i.isIn = false, f.to(i.labelReveal, {
          value: 0,
          duration: 1,
          overwrite: true,
          ease: "power2.inOut"
        })), i.isIn ? i.isUp || (i.isUp = true, this.sounds.stoneOut.play(i)) : a > i.size ? i.hasEnd && i.isUp && (i.isUp = false, f.delayedCall(0.3, () => {
          this.sounds.stoneIn.play(i);
        })) : i.isUp && (i.isUp = false, f.delayedCall(0.3, () => {
          this.sounds.stoneIn.play(i);
        })), i.elevationTarget = i.isUp ? this.lines.activeElevation : 0, i.stone.position.y += (i.elevationTarget - i.stone.position.y) * this.game.ticker.deltaScaled * 3, i.isIn ? i.stone.position.y > 1 && (i.offsetTarget = -Qe(a, 0, i.size)) : a > i.size ? i.offsetTarget = -i.size : i.offsetTarget = 0, i.stone.position.z += (i.offsetTarget - i.stone.position.z) * this.game.ticker.deltaScaled * 10;
      }
      const e = this.year.originZ - this.game.player.position.z;
      e > this.year.size ? this.year.offsetTarget = this.year.size : e < 0 ? this.year.offsetTarget = 0 : this.year.offsetTarget = e;
      const t = this.year.originZ - this.year.offsetTarget;
      this.year.group.position.z += (t - this.year.group.position.z) * this.game.ticker.deltaScaled * 10;
      const s = this.year.start + Math.floor(this.year.offsetTarget);
      s !== this.year.current && (this.year.current = s, this.year.updateDigits(this.year.current));
    }
  }
  const ds = [
    {
      name: "GitHub",
      url: "https://github.com/kp-z",
      align: "right"
    },
    {
      name: "Bilibili",
      url: "https://space.bilibili.com/109909977",
      align: "right"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zkpjy/",
      align: "right"
    },
    {
      name: "500px",
      url: "https://500px.com.cn/kpeace",
      align: "right"
    },
    {
      name: "Telegram",
      url: "https://t.me/kpzhang",
      align: "right"
    },
    {
      name: "Blog",
      url: "https://zkpeace.com/blog-cn/",
      align: "left"
    },
    {
      name: "Zhihu",
      url: "https://www.zhihu.com/club/1365658701693595648",
      align: "left"
    },
    {
      name: "Notion",
      url: "https://blackwhale.notion.site/f90b2f3ed8af4dea985085052c775aa0",
      align: "left"
    },
    {
      name: "Douban",
      url: "https://www.douban.com/people/twilight0518/",
      align: "left"
    }
  ];
  class La extends Pe {
    constructor(e) {
      super(e), this.center = this.references.items.get("center")[0].position, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F468}\u200D\u{1F9B2} Social",
        expanded: false
      })), this.setLinks(), this.setFans(), this.setOnlyFans(), this.setStatue(), this.setAchievement();
    }
    setLinks() {
      let t = 0;
      for (const s of ds) {
        const i = t * Math.PI / (ds.length - 1), a = this.center.clone();
        a.x += Math.cos(i) * 6, a.y = 1, a.z -= Math.sin(i) * 6, this.interactivePoint = this.game.interactivePoints.create(a, s.name, s.align === "left" ? N.ALIGN_LEFT : N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
          s.url ? window.open(s.url, "_blank") : s.modal, this.game.modals.open(s.modal);
        }, () => {
          this.game.inputs.interactiveButtons.addItems([
            "interact"
          ]);
        }, () => {
          this.game.inputs.interactiveButtons.removeItems([
            "interact"
          ]);
        }, () => {
          this.game.inputs.interactiveButtons.removeItems([
            "interact"
          ]);
        }), t++;
      }
    }
    setFans() {
      const e = this.references.items.get("fan")[0];
      e.castShadow = true, e.receiveShadow = true, e.position.set(0, 0, 0), this.game.materials.updateObject(e), e.removeFromParent(), this.fans = {}, this.fans.spawnerPosition = this.references.items.get("onlyFans")[0].position, this.fans.count = 30, this.fans.visibleCount = 0, this.fans.currentIndex = 0, this.fans.mass = 0.02, this.fans.objects = [];
      const t = [];
      for (let s = 0; s < this.fans.count; s++) {
        const i = new $e();
        i.position.copy(this.fans.spawnerPosition), i.position.y += 99, i.needsUpdate = true, t.push(i);
        const a = this.game.objects.add({
          model: i,
          updateMaterials: false,
          castShadow: false,
          receiveShadow: false,
          parent: null
        }, {
          type: "dynamic",
          position: i.position,
          rotation: i.quaternion,
          friction: 0.7,
          mass: this.fans.mass,
          sleeping: true,
          enabled: false,
          colliders: [
            {
              shape: "cuboid",
              parameters: [
                0.45,
                0.65,
                0.45
              ],
              category: "object"
            }
          ],
          waterGravityMultiplier: -1
        });
        this.fans.objects.push(a);
      }
      this.fans.instancedGroup = new ue(t, e), this.fans.pop = () => {
        const s = this.fans.objects[this.fans.currentIndex], i = this.fans.spawnerPosition.clone();
        i.x += (Math.random() - 0.5) * 4, i.y += 4 * Math.random(), i.z += (Math.random() - 0.5) * 4, s.physical.body.setTranslation(i), s.physical.body.setEnabled(true), s.physical.body.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }), s.physical.body.setAngvel({
          x: 0,
          y: 0,
          z: 0
        }), s.physical.body.wakeUp(), this.fans.currentIndex = (this.fans.currentIndex + 1) % this.fans.count, this.fans.visibleCount = Math.min(this.fans.visibleCount + 1, this.fans.count), this.game.audio.groups.get("click").play(true), this.game.achievements.setProgress("fan", 1);
      };
    }
    setOnlyFans() {
      this.game.interactivePoints.create(this.references.items.get("onlyFans")[0].position, "OnlyFans", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.fans.pop();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setStatue() {
      this.statue = {}, this.statue.body = this.references.items.get("statue")[0].userData.object.physical.body, this.statue.down = false;
    }
    setFWA() {
      this.fwa = {};
      let e = 0;
      this.fwa.positions = [
        new y(23.5, 0, -18.5),
        new y(27, 0, -19.5)
      ];
      const t = () => {
        e++;
        const s = this.fwa.positions[e % this.fwa.positions.length];
        this.game.world.confetti.pop(s), setTimeout(t, 500 + Math.random() * 1500);
      };
      setTimeout(t, 2e3), game.interactivePoints.temporaryHide(), this.game.inputs.addActions([
        {
          name: "startFWA",
          categories: [
            "intro",
            "modal",
            "menu",
            "racing",
            "cinematic",
            "wandering"
          ],
          keys: [
            "Keyboard.k"
          ]
        },
        {
          name: "winFWA",
          categories: [
            "intro",
            "modal",
            "menu",
            "racing",
            "cinematic",
            "wandering"
          ],
          keys: [
            "Keyboard.j"
          ]
        }
      ]), this.game.inputs.events.on("startFWA", (s) => {
        s.active && (game.view.zoom.baseRatio = 0.55, game.view.zoom.ratio = 0.55, game.view.zoom.smoothedRatio = 0.55, game.view.focusPoint.position.set(25, 0, -19.2), game.view.focusPoint.isTracking = false, window.setTimeout(() => {
          this.game.view.setMode(ve.MODE_FREE);
        }, 1e3), this.game.weather.override.start({
          humidity: 0,
          electricField: 0,
          clouds: 0,
          wind: 0
        }, 0), this.game.dayCycles.override.start({
          progress: 0.87
        }, 0), document.querySelector(".js-menu-trigger").style.display = "none", document.querySelector(".js-map-trigger").style.display = "none");
      }), this.game.inputs.events.on("winFWA", (s) => {
        s.active && this.game.achievements.setProgress("foty", 1);
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "social");
      });
    }
    update() {
      if (this.fans.visibleCount) {
        let e = true;
        for (const t of this.fans.objects) e = e && t.physical.body.isSleeping();
        e || this.fans.instancedGroup.updateBoundings();
      }
      if (this.statue && !this.statue.down && !this.statue.body.isSleeping()) {
        const e = new y(0, 1, 0);
        e.applyQuaternion(this.statue.body.rotation()), e.y < 0.25 && (this.statue.down = true, this.game.achievements.setProgress("statueDown", 1));
      }
      for (const e of this.fans.objects) !e.physical.body.isSleeping() && e.physical.body.isEnabled() && (e.visual.object3D.needsUpdate = true);
    }
  }
  class Oa extends Pe {
    constructor(e) {
      super(e), this.setCabin(), this.setCandleFlames(), this.setAchievement();
    }
    setCabin() {
      this.cabin = {}, this.cabin.body = this.references.items.get("cabin")[0].userData.object.physical.body, this.cabin.down = false;
    }
    setCandleFlames() {
      const e = this.references.items.get("moon")[0];
      e.visible = this.game.dayCycles.intervalEvents.get("night").inInterval, this.game.dayCycles.events.on("night", (t) => {
        e.visible = t;
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "toilet");
      });
    }
    update() {
      if (!this.cabin.down && !this.cabin.body.isSleeping()) {
        const e = new y(0, 1, 0);
        e.applyQuaternion(this.cabin.body.rotation()), e.y < 0.4 && (this.cabin.down = true, this.game.achievements.setProgress("toiletDown", 1));
      }
    }
  }
  class Ua extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F3B3} Bowling",
        expanded: false
      })), this.won = false, this.wonTime = 0, this.setSounds(), this.setPins(), this.setBall(), this.setRestart(), this.setScreen(), this.setBumpers(), this.setJukebox(), this.setAchievement();
    }
    setSounds() {
      this.sounds = {}, this.sounds.pin = this.game.audio.register({
        path: "sounds/hits/pins/ComedyCrash 6115_16_4.mp3",
        autoplay: false,
        volume: 0.5,
        antiSpam: 0.05,
        positions: new y(),
        distanceFade: 35,
        onPlay: (e, t, s) => {
          e.positions[0].copy(s);
          const i = L(t, 3, 10, 0, 1);
          e.volume = i * 0.5, e.rate = 1.2 - i * 0.2;
        }
      }), this.sounds.rolling = this.game.audio.register({
        path: "sounds/rolling/06290 medium ball rolling lp.mp3",
        autoplay: true,
        loop: true,
        volume: 0.5,
        rate: 0.8,
        positions: new y(),
        distanceFade: 25,
        onPlaying: (e) => {
          e.positions[0].copy(this.ball.position), e.volume = L(this.ball.speed, 0, 5, 0, 0.6);
        }
      });
    }
    setPins() {
      this.pins = {}, this.pins.items = [], this.pins.allSleeping = true, this.pins.boundingUpdateTime = 0;
      const e = ue.getReferencesFromChildren(this.references.items.get("pinPositions")[0].children), t = this.references.items.get("pinPhysicalDynamic")[0];
      t.castShadow = true, t.receiveShadow = true, t.position.set(0, 0, 0), t.rotation.set(0, 0, 0), this.game.materials.updateObject(t);
      const s = this.game.objects.getFromModel(t, {}, {});
      let i = 0;
      for (const a of e) {
        const n = {};
        n.index = i, n.isDown = false, n.isSleeping = true, n.group = a, n.object = this.game.objects.add({
          model: a,
          updateMaterials: false,
          parent: null
        }, {
          type: "dynamic",
          position: a.position,
          rotation: a.quaternion,
          friction: 0.5,
          resitution: 0.5,
          linearDamping: 0.1,
          angularDamping: 0.5,
          sleeping: true,
          colliders: s[1].colliders,
          waterGravityMultiplier: -1,
          mass: 0.02,
          contactThreshold: 5,
          onCollision: (o, l) => {
            this.sounds.pin.play(o, l);
          }
        }), n.body = n.object.physical.body, n.basePosition = n.group.position.clone(), n.baseRotation = n.group.quaternion.clone(), this.pins.items.push(n), i++;
      }
      this.pins.instancedGroup = new ue(e, t), this.pins.reset = () => {
        for (const a of this.pins.items) a.isDown = false, a.body.setTranslation(a.basePosition), a.body.setRotation(a.baseRotation), a.body.resetForces(), a.body.resetTorques(), a.body.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }), a.body.setAngvel({
          x: 0,
          y: 0,
          z: 0
        }), this.game.ticker.wait(2, () => {
          a.body.sleep();
        });
      };
    }
    setBall() {
      const e = this.references.items.get("ball")[0];
      this.ball = {}, this.ball.isSleeping = true, this.ball.body = e.userData.object.physical.body, this.ball.basePosition = e.position.clone(), this.ball.position = new y().copy(this.ball.body.translation()), this.ball.speed = 0, this.ball.reset = () => {
        this.ball.body.setTranslation(this.ball.basePosition), this.ball.body.resetForces(), this.ball.body.resetTorques(), this.ball.body.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }), this.ball.body.setAngvel({
          x: 0,
          y: 0,
          z: 0
        }), this.game.ticker.wait(2, () => {
          this.ball.body.sleep();
        });
      };
    }
    restart() {
      this.won = false, this.pins.reset(), this.ball.reset(), this.screen.reset(), this.pins.instancedGroup.needsUpdate = true, this.game.ticker.wait(1, () => {
        this.restartInteractivePoint.hide();
      });
      const e = this.game.audio.groups.get("click");
      e && e.play(true);
    }
    setRestart() {
      this.restartInteractivePoint = this.game.interactivePoints.create(this.references.items.get("restartInteractivePoint")[0].position, "Restart", N.ALIGN_RIGHT, N.STATE_HIDDEN, () => {
        this.restart();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setScreen() {
      this.screen = {}, this.screen.group = this.references.items.get("screen")[0], this.screen.object = this.screen.group.userData.object, this.screen.x = this.screen.group.position.x, this.screen.max = this.screen.group.position.x, this.screen.min = this.screen.max - (28.2 - 3.81), this.screen.discsMesh = this.references.items.get("discs")[0], this.screen.crossesMesh = this.references.items.get("crosses")[0];
      const e = new Uint8Array(10);
      this.dataTexture = new Ft(e, 10, 1, mt, Ps, Ss, te, te, W, W), this.dataTexture.needsUpdate = true;
      const t = b(([r]) => {
        const h = _(P(this.dataTexture, k()).r.sub(r).abs(), 0.1), c = Z.toVar();
        return c.z.subAssign(h.oneMinus().mul(0.1)), c;
      }), s = d(M("#ffffff")), i = d(2), a = new O();
      a.outputNode = C(s.mul(i), 1), a.positionNode = t(F(0));
      const n = d(M("#ff2b11")), o = d(6), l = new O();
      l.outputNode = C(n.mul(o), 1), l.positionNode = t(0.5), this.screen.discsMesh.material = a, this.screen.crossesMesh.material = l, this.screen.labelStrike = this.references.items.get("labelStrike")[0];
      {
        const r = new O(), h = this.screen.labelStrike.material.map;
        r.outputNode = b(() => (P(h).r.lessThan(0.5).discard(), C(E(2), 1)))(), this.screen.labelStrike.material = r, this.screen.labelStrike.visible = false;
      }
      if (this.screen.reset = () => {
        for (const r of this.pins.items) this.dataTexture.source.data.data[r.index] = 0, this.dataTexture.needsUpdate = true;
      }, this.game.debug.active) {
        const r = this.debugPanel.addFolder({
          title: "Screen",
          expanded: false
        });
        this.game.debug.addThreeColorBinding(r, s.value, "discsColor"), r.addBinding(i, "value", {
          label: "discsStrength",
          min: 0,
          max: 10,
          step: 1e-3
        }), this.game.debug.addThreeColorBinding(r, n.value, "crossesColor"), r.addBinding(o, "value", {
          label: "crossesStrength",
          min: 0,
          max: 10,
          step: 1e-3
        });
      }
    }
    setBumpers() {
      this.bumpers = {}, this.bumpers.mesh = this.references.items.get("bumpers")[0], this.bumpers.object = this.bumpers.mesh.userData.object, this.bumpers.progress = 0, this.bumpers.active = false, this.bumpers.height = Math.abs(this.bumpers.mesh.position.y), this.bumpers.object.physical.body.collider(0).setRestitution(1), this.bumpers.object.physical.body.collider(0).setFriction(0), this.bumpers.object.physical.body.collider(1).setRestitution(1), this.bumpers.object.physical.body.collider(1).setFriction(0), this.bumpers.toggle = () => {
        this.bumpers.active = !this.bumpers.active;
        const e = this.bumpers.active ? 1 : 0;
        f.to(this.bumpers, {
          progress: e,
          duration: 1,
          overwrite: true,
          onUpdate: () => {
            this.bumpers.object.physical.body.setNextKinematicTranslation({
              x: this.bumpers.mesh.position.x,
              y: -(1 - this.bumpers.progress) * this.bumpers.height,
              z: this.bumpers.mesh.position.z
            }), this.bumpers.object.needsUpdate = true;
          }
        }), this.game.player.sounds.suspensions.play();
      }, this.game.interactivePoints.create(this.references.items.get("bumpersInteractivePoint")[0].position, "Bumpers", N.ALIGN_LEFT, N.STATE_CONCEALED, () => {
        this.bumpers.toggle();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setJukebox() {
      const t = new Float32Array(24);
      for (let g = 0; g < 8; g++) {
        const p = g * 3;
        t[p + 0] = (Math.random() - 0.5) * 1, t[p + 1] = (Math.random() - 0.5) * 1, t[p + 2] = (Math.random() - 0.5) * 1;
      }
      const s = new gt(t, 3), i = this.game.ticker.elapsedScaledUniform.mul(0.2).add(re.toFloat().div(8)).fract().toVarying(), a = d(M("#ff994d")), n = d(3.5), o = b(() => {
        const g = w(k().x, k().y.oneMinus()), p = P(this.game.resources.jukeboxMusicNotes, g).r;
        return C(a.mul(n), p);
      })(), l = b(() => {
        const g = ki(s).toVar();
        return g.z.addAssign(i.oneMinus().pow(3).oneMinus()), g.y.addAssign(i), g;
      })(), r = b(() => de(this.game.ticker.elapsedScaledUniform.mul(4).add(re.toFloat())).add(1).mul(0.5).pow(2).oneMinus())(), h = b(() => i.sub(0.5).abs().mul(2).oneMinus().mul(3).min(1))(), c = new Ci({
        outputNode: o,
        positionNode: l,
        rotationNode: r,
        scaleNode: h,
        size: 1.5,
        sizeAttenuation: true,
        alphaToCoverage: true
      }), u = new Ai(c);
      if (u.count = 8, u.position.y = 1, u.position.z = 0.5, this.references.items.get("jukebox")[0].add(u), this.game.interactivePoints.create(this.references.items.get("jukeboxInteractivePoint")[0].position, "Change song", N.ALIGN_LEFT, N.STATE_CONCEALED, () => {
        this.game.audio.mute.active && this.game.audio.mute.deactivate(), this.game.audio.playlist.next();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }), this.game.debug.active) {
        const g = this.debugPanel.addFolder({
          title: "Jukebox",
          expanded: false
        });
        this.game.debug.addThreeColorBinding(g, a.value, "notesColor"), g.addBinding(n, "value", {
          label: "notesStrength",
          min: 0,
          max: 10,
          step: 1e-3
        });
      }
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "bowling");
      });
    }
    update() {
      let e = false;
      const t = He(this.game.player.position.x, this.screen.min, this.screen.max);
      this.screen.x += (t - this.screen.x) * this.game.ticker.deltaScaled * 2;
      const s = Math.sin(this.game.ticker.elapsedScaled * 0.3) * 0.5;
      this.screen.object.physical.body.setNextKinematicTranslation({
        x: this.screen.x,
        y: 0.5 + s,
        z: this.screen.group.position.z
      }), this.screen.object.needsUpdate = true, this.won ? this.screen.labelStrike.visible = (this.game.ticker.elapsedScaled - this.wonTime) % 3 < 1.5 : this.screen.labelStrike.visible = false, this.pins.allSleeping = true;
      let i = false;
      for (const n of this.pins.items) {
        const o = new y(0, 1, 0);
        o.applyQuaternion(n.group.quaternion);
        const l = o.y < 0.5;
        l && n.isDown === false && (n.isDown = l, i = true, this.dataTexture.source.data.data[n.index] = n.isDown ? 128 : 0);
        const r = n.body.isSleeping();
        this.pins.allSleeping = this.pins.allSleeping && r, r !== n.isSleeping && (n.isSleeping = r, n.isSleeping || (e = true)), r || (n.object.visual.object3D.needsUpdate = true);
      }
      i && (this.dataTexture.needsUpdate = true, this.won || this.pins.items.reduce((o, l) => o && l.isDown, true) && (this.won = true, this.wonTime = this.game.ticker.elapsedScaled, this.game.world.confetti && (this.game.world.confetti.pop(this.game.player.position.clone()), this.game.world.confetti.pop(this.screen.group.position.clone().add(new y(-1, -1, 0))), this.game.world.confetti.pop(this.screen.group.position.clone().add(new y(-3.4, -1, 0)))), this.game.achievements.sounds.achieve.play(), this.game.achievements.setProgress("strike", 1))), this.game.ticker.elapsed > this.pins.boundingUpdateTime + 0.2 && (this.pins.boundingUpdateTime = this.game.ticker.elapsed, this.pins.allSleeping || this.pins.instancedGroup.updateBoundings());
      const a = this.ball.body.isSleeping();
      if (a !== this.ball.isSleeping && (this.ball.isSleeping = a, this.ball.isSleeping || (e = true)), a) this.ball.speed = 0;
      else {
        const n = new y().copy(this.ball.body.translation()), o = n.clone().sub(this.ball.position);
        this.ball.position.copy(n), this.ball.speed = o.length() / this.game.ticker.delta;
      }
      e && this.restartInteractivePoint.state === N.STATE_HIDDEN && this.restartInteractivePoint.show();
    }
  }
  const Ga = [
    [
      "Andorra",
      "Andorra",
      "ad"
    ],
    [
      "United Arab Emirates",
      "United Arab Emirates",
      "ae"
    ],
    [
      "Afghanistan",
      "Afganistan",
      "af"
    ],
    [
      "Antigua and Barbuda",
      "Antigua and Barbuda",
      "ag"
    ],
    [
      "Anguilla",
      "Anguilla",
      "ai"
    ],
    [
      "Albania",
      "Albania",
      "al"
    ],
    [
      "Armenia",
      "\u12A0\u122D\u121C\u1292\u12EB",
      "am"
    ],
    [
      "Angola",
      "Angola",
      "ao"
    ],
    [
      "Antarctica",
      "Antarctica",
      "aq"
    ],
    [
      "Argentina",
      "\u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646",
      "ar"
    ],
    [
      "American Samoa",
      "\u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE\u09A8 \u099A\u09BE\u09AE\u09CB\u09F1\u09BE",
      "as"
    ],
    [
      "Austria",
      "Austria",
      "at"
    ],
    [
      "Australia",
      "Australia",
      "au"
    ],
    [
      "Aruba",
      "Aruba",
      "aw"
    ],
    [
      "\xC5land Islands",
      "\xC5land Islands",
      "ax"
    ],
    [
      "Azerbaijan",
      "Az\u0259rbaycan",
      "az"
    ],
    [
      "Bosnia and Herzegovina",
      "Bosnia and Herzegovina",
      "ba"
    ],
    [
      "Barbados",
      "Barbados",
      "bb"
    ],
    [
      "Bangladesh",
      "Bangladesh",
      "bd"
    ],
    [
      "Belgium",
      "\u0411\u0435\u043B\u044C\u0433\u0456\u044F",
      "be"
    ],
    [
      "Burkina Faso",
      "Burkina Faso",
      "bf"
    ],
    [
      "Bulgaria",
      "\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F",
      "bg"
    ],
    [
      "Bahrain",
      "Bahrain",
      "bh"
    ],
    [
      "Burundi",
      "Burundi",
      "bi"
    ],
    [
      "Benin",
      "Benin",
      "bj"
    ],
    [
      "Saint Barth\xE9lemy",
      "Saint Barth\xE9lemy",
      "bl"
    ],
    [
      "Bermuda",
      "Bermudi",
      "bm"
    ],
    [
      "Brunei Darussalam",
      "\u09AC\u09CD\u09B0\u09C1\u09A8\u09C7\u0987",
      "bn"
    ],
    [
      "Bolivia, Plurinational State of",
      "\u0F56\u0F7C\u0F0B\u0F63\u0F72\u0F0B\u0F5D\u0F72\u0F61\u0F0D",
      "bo"
    ],
    [
      "Bonaire, Sint Eustatius and Saba",
      "Bonaire, Sint Eustatius and Saba",
      "bq"
    ],
    [
      "Brazil",
      "Brazil",
      "br"
    ],
    [
      "Bahamas",
      "Bahami",
      "bs"
    ],
    [
      "Bhutan",
      "Bhutan",
      "bt"
    ],
    [
      "Bouvet Island",
      "Bouvet Island",
      "bv"
    ],
    [
      "Botswana",
      "Botswana",
      "bw"
    ],
    [
      "Belarus",
      "Belarus",
      "by"
    ],
    [
      "Belize",
      "Belize",
      "bz"
    ],
    [
      "Canada",
      "Canad\xE0",
      "ca"
    ],
    [
      "Cocos (Keeling) Islands",
      "Cocos (Keeling) Islands",
      "cc"
    ],
    [
      "Congo, The Democratic Republic of the",
      "Congo, The Democratic Republic of the",
      "cd"
    ],
    [
      "Central African Republic",
      "Central African Republic",
      "cf"
    ],
    [
      "Congo",
      "Congo",
      "cg"
    ],
    [
      "Switzerland",
      "Switzerland",
      "ch"
    ],
    [
      "C\xF4te d'Ivoire",
      "C\xF4te d'Ivoire",
      "ci"
    ],
    [
      "Cook Islands",
      "Cook Islands",
      "ck"
    ],
    [
      "Chile",
      "Chile",
      "cl"
    ],
    [
      "Cameroon",
      "Cameroon",
      "cm"
    ],
    [
      "China",
      "China",
      "cn"
    ],
    [
      "Colombia",
      "Colombia",
      "co"
    ],
    [
      "Costa Rica",
      "Costa Rica",
      "cr"
    ],
    [
      "Cuba",
      "Cuba",
      "cu"
    ],
    [
      "Cabo Verde",
      "\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435",
      "cv"
    ],
    [
      "Cura\xE7ao",
      "Cura\xE7ao",
      "cw"
    ],
    [
      "Christmas Island",
      "Christmas Island",
      "cx"
    ],
    [
      "Cyprus",
      "Cyprus",
      "cy"
    ],
    [
      "Czechia",
      "Czechia",
      "cz"
    ],
    [
      "Germany",
      "Deutschland",
      "de"
    ],
    [
      "Djibouti",
      "Djibouti",
      "dj"
    ],
    [
      "Denmark",
      "Denmark",
      "dk"
    ],
    [
      "Dominica",
      "Dominica",
      "dm"
    ],
    [
      "Dominican Republic",
      "Dominican Republic",
      "do"
    ],
    [
      "Algeria",
      "\u0F68\u0F71\u0F63\u0F0B\u0F47\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F61",
      "dz"
    ],
    [
      "Ecuador",
      "Ecuador",
      "ec"
    ],
    [
      "Estonia",
      "Estonia nutome",
      "ee"
    ],
    [
      "Egypt",
      "Egypt",
      "eg"
    ],
    [
      "Western Sahara",
      "Western Sahara",
      "eh"
    ],
    [
      "Eritrea",
      "Eritrea",
      "er"
    ],
    [
      "Spain",
      "Espa\xF1a",
      "es"
    ],
    [
      "Ethiopia",
      "Etioopia",
      "et"
    ],
    [
      "Finland",
      "Suomi",
      "fi"
    ],
    [
      "Fiji",
      "Fiji",
      "fj"
    ],
    [
      "Falkland Islands (Malvinas)",
      "Falkland Islands (Malvinas)",
      "fk"
    ],
    [
      "Micronesia, Federated States of",
      "Micronesia, Federated States of",
      "fm"
    ],
    [
      "Faroe Islands",
      "F\xF8royar",
      "fo"
    ],
    [
      "France",
      "France",
      "fr"
    ],
    [
      "Gabon",
      "an Ghab\xFAin",
      "ga"
    ],
    [
      "United Kingdom",
      "United Kingdom",
      "gb"
    ],
    [
      "Grenada",
      "Grean\xE0da",
      "gd"
    ],
    [
      "Georgia",
      "Georgia",
      "ge"
    ],
    [
      "French Guiana",
      "French Guiana",
      "gf"
    ],
    [
      "Guernsey",
      "Guernsey",
      "gg"
    ],
    [
      "Ghana",
      "Ghana",
      "gh"
    ],
    [
      "Gibraltar",
      "Gibraltar",
      "gi"
    ],
    [
      "Greenland",
      "Groenlandia",
      "gl"
    ],
    [
      "Gambia",
      "Gambia",
      "gm"
    ],
    [
      "Guinea",
      "Guinea",
      "gn"
    ],
    [
      "Guadeloupe",
      "Guadeloupe",
      "gp"
    ],
    [
      "Equatorial Guinea",
      "Equatorial Guinea",
      "gq"
    ],
    [
      "Greece",
      "Greece",
      "gr"
    ],
    [
      "South Georgia and the South Sandwich Islands",
      "South Georgia and the South Sandwich Islands",
      "gs"
    ],
    [
      "Guatemala",
      "Guatemala",
      "gt"
    ],
    [
      "Guam",
      "\u0A97\u0ACD\u0AB5\u0ABE\u0AAE",
      "gu"
    ],
    [
      "Guinea-Bissau",
      "Guinea-Bissau",
      "gw"
    ],
    [
      "Guyana",
      "Guyana",
      "gy"
    ],
    [
      "Hong Kong",
      "Hong Kong",
      "hk"
    ],
    [
      "Heard Island and McDonald Islands",
      "Heard Island and McDonald Islands",
      "hm"
    ],
    [
      "Honduras",
      "Honduras",
      "hn"
    ],
    [
      "Croatia",
      "Hrvatska",
      "hr"
    ],
    [
      "Haiti",
      "Haiti",
      "ht"
    ],
    [
      "Hungary",
      "Magyarorsz\xE1g",
      "hu"
    ],
    [
      "Indonesia",
      "Indonesia",
      "id"
    ],
    [
      "Ireland",
      "Irland",
      "ie"
    ],
    [
      "Israel",
      "Israel",
      "il"
    ],
    [
      "Isle of Man",
      "Isle of Man",
      "im"
    ],
    [
      "India",
      "India",
      "in"
    ],
    [
      "British Indian Ocean Territory",
      "British Indian Ocean Territory",
      "io"
    ],
    [
      "Iraq",
      "Iraq",
      "iq"
    ],
    [
      "Iran, Islamic Republic of",
      "Iran, Islamic Republic of",
      "ir"
    ],
    [
      "Iceland",
      "\xCDsland",
      "is"
    ],
    [
      "Italy",
      "Italia",
      "it"
    ],
    [
      "Jersey",
      "Jersey",
      "je"
    ],
    [
      "Jamaica",
      "Jamaica",
      "jm"
    ],
    [
      "Jordan",
      "Jordan",
      "jo"
    ],
    [
      "Japan",
      "Japan",
      "jp"
    ],
    [
      "Kenya",
      "Kenya",
      "ke"
    ],
    [
      "Kyrgyzstan",
      "Kyrgyzstan",
      "kg"
    ],
    [
      "Cambodia",
      "Cambodia",
      "kh"
    ],
    [
      "Kiribati",
      "Kiribati",
      "ki"
    ],
    [
      "Comoros",
      "\u1780\u17BC\u1798\u17D0\u179A",
      "km"
    ],
    [
      "Saint Kitts and Nevis",
      "\u0CB8\u0CC7\u0C82\u0C9F\u0CCD \u0C95\u0CBF\u0C9F\u0CCD\u0CB8\u0CCD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CA8\u0CC6\u0CB5\u0CBF\u0CB8\u0CCD",
      "kn"
    ],
    [
      "Korea, Democratic People's Republic of",
      "Korea, Democratic People's Republic of",
      "kp"
    ],
    [
      "Korea, Republic of",
      "Korea, Republic of",
      "kr"
    ],
    [
      "Kuwait",
      "Kuwait",
      "kw"
    ],
    [
      "Cayman Islands",
      "\u041A\u0430\u0439\u043C\u0430\u043D \u0430\u0440\u0430\u043B\u0434\u0430\u0440\u044B",
      "ky"
    ],
    [
      "Kazakhstan",
      "Kazakhstan",
      "kz"
    ],
    [
      "Lao People's Democratic Republic",
      "Laotia",
      "la"
    ],
    [
      "Lebanon",
      "Libanon",
      "lb"
    ],
    [
      "Saint Lucia",
      "Saint Lucia",
      "lc"
    ],
    [
      "Liechtenstein",
      "Liechtenstein",
      "li"
    ],
    [
      "Sri Lanka",
      "Sri Lanka",
      "lk"
    ],
    [
      "Liberia",
      "Liberia",
      "lr"
    ],
    [
      "Lesotho",
      "Lesotho",
      "ls"
    ],
    [
      "Lithuania",
      "Lietuva",
      "lt"
    ],
    [
      "Luxembourg",
      "Likisambulu",
      "lu"
    ],
    [
      "Latvia",
      "Latvija",
      "lv"
    ],
    [
      "Libya",
      "Libya",
      "ly"
    ],
    [
      "Morocco",
      "Morocco",
      "ma"
    ],
    [
      "Monaco",
      "Monaco",
      "mc"
    ],
    [
      "Moldova, Republic of",
      "Moldova, Republic of",
      "md"
    ],
    [
      "Montenegro",
      "Montenegro",
      "me"
    ],
    [
      "Saint Martin (French part)",
      "Saint Martin (French part)",
      "mf"
    ],
    [
      "Madagascar",
      "Madagasikara",
      "mg"
    ],
    [
      "Marshall Islands",
      "Marshall Islands",
      "mh"
    ],
    [
      "North Macedonia",
      "\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430",
      "mk"
    ],
    [
      "Mali",
      "\u0D2E\u0D3E\u0D32\u0D3F",
      "ml"
    ],
    [
      "Myanmar",
      "Myanmar",
      "mm"
    ],
    [
      "Mongolia",
      "\u041C\u043E\u043D\u0433\u043E\u043B",
      "mn"
    ],
    [
      "Macao",
      "R.A.S. Macao, China",
      "mo"
    ],
    [
      "Northern Mariana Islands",
      "Northern Mariana Islands",
      "mp"
    ],
    [
      "Martinique",
      "Martinique",
      "mq"
    ],
    [
      "Mauritania",
      "\u092E\u0949\u0930\u093F\u091F\u093E\u0928\u093F\u092F\u093E",
      "mr"
    ],
    [
      "Montserrat",
      "Montserrat",
      "ms"
    ],
    [
      "Malta",
      "Malta",
      "mt"
    ],
    [
      "Mauritius",
      "Mauritius",
      "mu"
    ],
    [
      "Maldives",
      "Maldives",
      "mv"
    ],
    [
      "Malawi",
      "Malawi",
      "mw"
    ],
    [
      "Mexico",
      "Mexico",
      "mx"
    ],
    [
      "Malaysia",
      "\u1019\u101C\u1031\u1038\u101B\u103E\u102C\u1038",
      "my"
    ],
    [
      "Mozambique",
      "Mozambique",
      "mz"
    ],
    [
      "Namibia",
      "Namibia",
      "na"
    ],
    [
      "New Caledonia",
      "New Caledonia",
      "nc"
    ],
    [
      "Niger",
      "\u0928\u093E\u0907\u091C\u0930",
      "ne"
    ],
    [
      "Norfolk Island",
      "Norfolk Island",
      "nf"
    ],
    [
      "Nigeria",
      "Nigeria",
      "ng"
    ],
    [
      "Nicaragua",
      "Nicaragua",
      "ni"
    ],
    [
      "Netherlands",
      "Nederland",
      "nl"
    ],
    [
      "Norway",
      "Norge",
      "no"
    ],
    [
      "Nepal",
      "Nepal",
      "np"
    ],
    [
      "Nauru",
      "Nauru",
      "nr"
    ],
    [
      "Niue",
      "Niue",
      "nu"
    ],
    [
      "New Zealand",
      "New Zealand",
      "nz"
    ],
    [
      "Oman",
      "Omaan",
      "om"
    ],
    [
      "Panama",
      "\u0A2A\u0A28\u0A3E\u0A2E\u0A3E",
      "pa"
    ],
    [
      "Peru",
      "Peru",
      "pe"
    ],
    [
      "French Polynesia",
      "French Polynesia",
      "pf"
    ],
    [
      "Papua New Guinea",
      "Papua New Guinea",
      "pg"
    ],
    [
      "Philippines",
      "Philippines",
      "ph"
    ],
    [
      "Pakistan",
      "Pakistan",
      "pk"
    ],
    [
      "Poland",
      "Polska",
      "pl"
    ],
    [
      "Saint Pierre and Miquelon",
      "Saint Pierre and Miquelon",
      "pm"
    ],
    [
      "Pitcairn",
      "Pitcairn",
      "pn"
    ],
    [
      "Puerto Rico",
      "Puerto Rico",
      "pr"
    ],
    [
      "Palestine, State of",
      "\u0641\u0644\u0633\u0637\u06CC\u0646\u064A \u0633\u064A\u0645\u06D0",
      "ps"
    ],
    [
      "Portugal",
      "Portugal",
      "pt"
    ],
    [
      "Palau",
      "Palau",
      "pw"
    ],
    [
      "Paraguay",
      "Paraguay",
      "py"
    ],
    [
      "Qatar",
      "Qatar",
      "qa"
    ],
    [
      "R\xE9union",
      "R\xE9union",
      "re"
    ],
    [
      "Romania",
      "Rom\xE2nia",
      "ro"
    ],
    [
      "Serbia",
      "Serbia",
      "rs"
    ],
    [
      "Russian Federation",
      "\u0420\u043E\u0441\u0441\u0438\u044F",
      "ru"
    ],
    [
      "Rwanda",
      "U Rwanda",
      "rw"
    ],
    [
      "Saudi Arabia",
      "Saudi Arabia",
      "sa"
    ],
    [
      "Solomon Islands",
      "Solomon Islands",
      "sb"
    ],
    [
      "Seychelles",
      "Seychelles",
      "sc"
    ],
    [
      "Sudan",
      "\u0633\u0648\u068A\u0627\u0646",
      "sd"
    ],
    [
      "Sweden",
      "Ruo\u0167\u0167a",
      "se"
    ],
    [
      "Singapore",
      "S\xEFng\xE4p\xFBru",
      "sg"
    ],
    [
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Helena, Ascension and Tristan da Cunha",
      "sh"
    ],
    [
      "Slovenia",
      "\u0DC3\u0DCA\u0DBD\u0DDD\u0DC0\u0DDA\u0DB1\u0DD2\u0DBA\u0DCF\u0DC0",
      "si"
    ],
    [
      "Svalbard and Jan Mayen",
      "Svalbard and Jan Mayen",
      "sj"
    ],
    [
      "Slovakia",
      "Slovensko",
      "sk"
    ],
    [
      "Sierra Leone",
      "Sierra Leone",
      "sl"
    ],
    [
      "San Marino",
      "San Marino",
      "sm"
    ],
    [
      "Senegal",
      "Senegal",
      "sn"
    ],
    [
      "Somalia",
      "Soomaaliya",
      "so"
    ],
    [
      "Suriname",
      "\u0421\u0443\u0440\u0438\u043D\u0430\u043C",
      "sr"
    ],
    [
      "South Sudan",
      "South Sudan",
      "ss"
    ],
    [
      "Sao Tome and Principe",
      "Sao Tome and Principe",
      "st"
    ],
    [
      "El Salvador",
      "El Salvador",
      "sv"
    ],
    [
      "Sint Maarten (Dutch part)",
      "Sint Maarten (Dutch part)",
      "sx"
    ],
    [
      "Syrian Arab Republic",
      "Syrian Arab Republic",
      "sy"
    ],
    [
      "Eswatini",
      "Eswatini",
      "sz"
    ],
    [
      "Turks and Caicos Islands",
      "Turks and Caicos Islands",
      "tc"
    ],
    [
      "Chad",
      "Chad",
      "td"
    ],
    [
      "French Southern Territories",
      "French Southern Territories",
      "tf"
    ],
    [
      "Togo",
      "\u0422\u043E\u0433\u043E",
      "tg"
    ],
    [
      "Thailand",
      "\u0E44\u0E17\u0E22",
      "th"
    ],
    [
      "Tajikistan",
      "Tajikistan",
      "tj"
    ],
    [
      "Tokelau",
      "Tokelau",
      "tk"
    ],
    [
      "Timor-Leste",
      "Timor-Leste",
      "tl"
    ],
    [
      "Turkmenistan",
      "Turkmenistan",
      "tm"
    ],
    [
      "Tunisia",
      "Tunisia",
      "tn"
    ],
    [
      "Tonga",
      "Tonga",
      "to"
    ],
    [
      "T\xFCrkiye",
      "T\xFCrkiye",
      "tr"
    ],
    [
      "Trinidad and Tobago",
      "\u0422\u0440\u0438\u043D\u0438\u0434\u0430\u0434 \u04BB\u04D9\u043C \u0422\u043E\u0431\u0430\u0433\u043E",
      "tt"
    ],
    [
      "Tuvalu",
      "Tuvalu",
      "tv"
    ],
    [
      "Taiwan, Province of China",
      "Taiwan",
      "tw"
    ],
    [
      "Tanzania, United Republic of",
      "Tanzania, United Republic of",
      "tz"
    ],
    [
      "Ukraine",
      "Ukraine",
      "ua"
    ],
    [
      "Uganda",
      "\u0626\u06C7\u06AF\u0627\u0646\u062F\u0627",
      "ug"
    ],
    [
      "United States Minor Outlying Islands",
      "United States Minor Outlying Islands",
      "um"
    ],
    [
      "United States",
      "United States",
      "us"
    ],
    [
      "Uruguay",
      "Uruguay",
      "uy"
    ],
    [
      "Uzbekistan",
      "O\u02BBzbekiston",
      "uz"
    ],
    [
      "Holy See (Vatican City State)",
      "Holy See (Vatican City State)",
      "va"
    ],
    [
      "Saint Vincent and the Grenadines",
      "Saint Vincent and the Grenadines",
      "vc"
    ],
    [
      "Venezuela, Bolivarian Republic of",
      "Venezuela, Bolivarian Republic of",
      "ve"
    ],
    [
      "Virgin Islands, British",
      "Virgin Islands, British",
      "vg"
    ],
    [
      "Virgin Islands, U.S.",
      "Qu\u1EA7n \u0111\u1EA3o Virgin thu\u1ED9c Hoa K\u1EF3",
      "vi"
    ],
    [
      "Viet Nam",
      "Viet Nam",
      "vn"
    ],
    [
      "Vanuatu",
      "Vanuatu",
      "vu"
    ],
    [
      "Wallis and Futuna",
      "Wallis and Futuna",
      "wf"
    ],
    [
      "Samoa",
      "Samoa",
      "ws"
    ],
    [
      "Kosovo",
      "Republika e Kosov\xEBs",
      "xk"
    ],
    [
      "Yemen",
      "Yemen",
      "ye"
    ],
    [
      "Mayotte",
      "Mayotte",
      "yt"
    ],
    [
      "South Africa",
      "Nanz Feih",
      "za"
    ],
    [
      "Zambia",
      "Zambia",
      "zm"
    ],
    [
      "Zimbabwe",
      "Zimbabwe",
      "zw"
    ],
    [
      "Luffy",
      "Luffy",
      "lf"
    ],
    [
      "Hyrule",
      "Hyrule",
      "hy"
    ],
    [
      "Umbrella Corp.",
      "Umbrella Corporation",
      "ub"
    ],
    [
      "Kojima Production",
      "Kojima Production",
      "kj"
    ],
    [
      "Nerv",
      "Nerv",
      "nv"
    ],
    [
      "Three.js",
      "Three.js",
      "ts"
    ],
    [
      "WebGL",
      "WebGL",
      "wl"
    ],
    [
      "WebGPU",
      "WebGPU",
      "wu"
    ],
    [
      "Three.js Journey",
      "Three.js Journey",
      "jj"
    ]
  ];
  class Vs {
    constructor(e) {
      this.element = e, this.buttonElement = this.element.querySelector(".js-flag-button"), this.currentElement = this.buttonElement.querySelector(".js-flag"), this.selectElement = this.element.querySelector(".js-flag-select"), this.closeElement = this.element.querySelector(".js-flag-close"), this.searchElement = this.element.querySelector(".js-flag-search"), this.removeElement = this.element.querySelector(".js-flag-remove"), this.noResultElement = this.element.querySelector(".js-no-result"), this.scrollerElement = this.element.querySelector(".js-scroller"), this.events = new se(), this.inDOM = false, this.isOpen = false, this.countries = /* @__PURE__ */ new Map(), this.country = null, this.setCountries(), this.setSearch(), this.removeElement.addEventListener("click", (i) => {
        i.preventDefault(), this.select(null);
      }), this.buttonElement.addEventListener("click", (i) => {
        i.preventDefault(), this.open();
      }), this.closeElement.addEventListener("click", (i) => {
        i.preventDefault(), this.close();
      });
      let t = "";
      const s = localStorage.getItem("countryCode");
      if (s && (t = s), t === "") {
        const i = Intl.DateTimeFormat().resolvedOptions().locale;
        if (i) {
          const a = i.split("-");
          a.length && (t = a[a.length - 1].toLowerCase());
        }
      }
      t !== "" && (this.country = this.countries.get(t) ?? null, this.country && (this.currentElement.src = this.country.imageUrl, this.buttonElement.classList.add("has-flag")));
    }
    setCountries() {
      for (const e of Ga) {
        const t = `ui/flags/${e[2]}.webp`, s = document.createElement("div");
        s.classList.add("choice"), s.innerHTML = `
                <img class="js-flag flag" src="${t}" loading="lazy">
                <span class="label">${e[0]} (${e[2]})</span>
            `;
        const i = {};
        i.element = s, i.terms = `${e[0]} ${e[1]} ${e[2]}`, i.imageUrl = t, i.code = e[2], i.element.addEventListener("click", () => {
          this.select(i);
        }), this.countries.set(i.code, i);
      }
    }
    setSearch() {
      const e = (t) => {
        const s = t.trim();
        let i = false;
        s === "" ? (i = true, this.countries.forEach((a) => {
          a.element.style.display = "block";
        })) : this.countries.forEach((a) => {
          a.terms.match(new RegExp(s, "i")) ? (i = true, a.element.style.display = "block") : a.element.style.display = "none";
        }), i ? this.noResultElement.classList.remove("is-visible") : this.noResultElement.classList.add("is-visible");
      };
      this.searchElement.addEventListener("input", () => {
        e(this.searchElement.value);
      });
    }
    addToDOM() {
      this.countries.forEach((e) => {
        this.scrollerElement.appendChild(e.element);
      }), this.inDOM = true;
    }
    open() {
      this.isOpen || (this.inDOM || this.addToDOM(), this.isOpen = true, this.selectElement.classList.add("is-visible"), this.searchElement.focus(), this.country && (this.scrollerElement.scrollTop = this.country.element.offsetTop - 15));
    }
    close() {
      this.isOpen && (this.isOpen = false, this.selectElement.classList.remove("is-visible"));
    }
    select(e = null) {
      e ? (this.country = e, this.currentElement.src = e.imageUrl, this.buttonElement.classList.add("has-flag"), localStorage.setItem("countryCode", e.code)) : (this.country = null, this.buttonElement.classList.remove("has-flag"), localStorage.removeItem("countryCode")), this.events.trigger("change", [
        e
      ]), this.close();
    }
  }
  const St = (m) => {
    const e = Math.floor(m / 60), t = Math.floor(m % 60), s = Math.floor(m * 1e3 % 1e3);
    return `${String(e).padStart(2, "0")}:${String(t).padStart(2, "0")}:${String(s).padStart(3, "0")}`;
  };
  function Hs(m, e = true, t = true, s = true) {
    const i = Math.floor(m / 3600), a = Math.floor(m % 3600 / 60), n = Math.floor(m % 60), o = [];
    return i > 0 && e && o.push(`${i}h`), (i > 0 || a > 0) && t && o.push(`${a}m`), (i > 0 || a > 0 || n > 0) && s && o.push(`${n}s`), o.join(" ");
  }
  const _ie = class _ie extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F6DE} Circuit",
        expanded: false
      })), this.state = _ie.STATE_PENDING, this.setSounds(), this.setStartPosition(), this.setStartingLights(), this.setTimer(), this.setCheckpoints(), this.setResetObjects(), this.setObstacles(), this.setRoad(), this.setRails(), this.setInteractivePoint(), this.setStartAnimation(), this.setRespawn(), this.setBounds(), this.setAirDancers(), this.setBanners(), this.setMenu(), this.setEndModal(), this.setLeaderboard(), this.setResetTime(), this.setPodium(), this.setData(), this.setAchievement(), this.game.materials.getFromName("circuitBrand").map.minFilter = j, this.game.materials.getFromName("circuitBrand").map.magFilter = j;
    }
    setSounds() {
      this.sounds = {}, this.sounds.countdown1 = this.game.audio.register({
        path: "sounds/circuit/countdown/Game Start Countdown 31-1.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1
      }), this.sounds.countdown2 = this.game.audio.register({
        path: "sounds/circuit/countdown/Game Start Countdown 31-2.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1
      }), this.sounds.checkpoint = this.game.audio.register({
        path: "sounds/circuit/checkpoint/Win Score 1.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1,
        onPlay: (e, t) => {
          e.rate = 1 + (t - 1) * 0.06;
        }
      }), this.sounds.finish = this.game.audio.register({
        path: "sounds/circuit/finish/Big Win Fanfare 2.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1
      }), this.sounds.applause = this.game.audio.register({
        path: "sounds/circuit/applause/huge win.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        antiSpam: 0.1
      });
    }
    setStartPosition() {
      const e = this.references.items.get("start")[0];
      this.startPosition = {}, this.startPosition.position = e.position.clone(), this.startPosition.rotation = e.rotation.y;
    }
    setStartingLights() {
      this.startingLights = {}, this.startingLights.mesh = this.references.items.get("startingLights")[0], this.startingLights.mesh.visible = false, this.startingLights.redMaterial = this.game.materials.getFromName("emissiveOrangeRadialGradient"), this.startingLights.greenMaterial = this.game.materials.getFromName("emissiveGreenRadialGradient"), this.startingLights.baseZ = this.startingLights.mesh.position.z, this.startingLights.reset = () => {
        this.startingLights.mesh.visible = false, this.startingLights.mesh.material = this.startingLights.redMaterial;
      };
    }
    setTimer() {
      this.timer = {}, this.timer.visible = true, this.timer.startTime = 0, this.timer.elapsedTime = 0, this.timer.running = false, this.timer.group = this.references.items.get("timer")[0], this.timer.group.rotation.y = Math.PI * 0.1, this.timer.group.visible = false, this.timer.defaultPosition = this.timer.group.position.clone();
      {
        this.timer.digits = {}, this.timer.digits.ratio = 6, this.timer.digits.height = 32, this.timer.digits.width = 192;
        const e = `700 ${this.timer.digits.height}px "Nunito"`, t = document.createElement("canvas");
        t.style.position = "fixed", t.style.zIndex = 999, t.style.top = 0, t.style.left = 0;
        const s = t.getContext("2d");
        s.font = e, t.width = this.timer.digits.height * this.timer.digits.ratio, t.height = this.timer.digits.height, s.fillStyle = "#000000", s.fillRect(0, 0, t.width, t.height), s.font = e, s.fillStyle = "#ffffff", s.textAlign = "center", s.textBaseline = "middle", s.fillText("00:00:000", this.timer.digits.width * 0.5, this.timer.digits.height * 0.5), this.timer.digits.context = s;
        const i = new Ne(t);
        i.minFilter = j, i.magFilter = j, i.generateMipmaps = false, this.timer.digits.texture = i;
        const a = new Y(this.timer.digits.ratio, 1), n = new O({
          alphaMap: this.timer.digits.texture,
          alphaTest: 0.5
        }), o = new D(a, n);
        o.scale.setScalar(0.5), this.timer.group.add(o);
      }
      this.timer.write = (e) => {
        this.timer.digits.context.fillStyle = "#000000", this.timer.digits.context.fillRect(0, 0, this.timer.digits.width, this.timer.digits.height), this.timer.digits.context.fillStyle = "#ffffff", this.timer.digits.context.fillText(e, this.timer.digits.width * 0.5, this.timer.digits.height * 0.5), this.timer.digits.texture.needsUpdate = true;
      }, this.timer.show = () => {
        this.timer.visible = true, this.timer.write("00:00:000"), this.timer.group.position.copy(this.game.player.position), this.timer.group.position.y = 2.5, this.timer.group.scale.setScalar(1), this.timer.group.visible = true;
      }, this.timer.hide = () => {
        const e = {
          scale: 1
        };
        f.to(e, {
          scale: 0,
          duration: 1,
          ease: "back.in(2)",
          onUpdate: () => {
            this.timer.group.scale.setScalar(e.scale);
          }
        }), this.timer.visible = false;
      }, this.timer.start = () => {
        this.timer.running = true, this.timer.startTime = this.game.ticker.elapsed;
      }, this.timer.end = () => {
        this.timer.running = false, this.timer.elapsedTime = this.game.ticker.elapsed - this.timer.startTime;
        const e = St(this.timer.elapsedTime);
        this.timer.write(e), this.endModal.timeElement.textContent = e;
      }, this.timer.update = () => {
        const e = new y();
        this.state === _ie.STATE_PENDING ? (e.x = this.timer.defaultPosition.x, e.y = 2.5, e.z = this.timer.defaultPosition.z) : (e.x = this.game.player.position.x - 2, e.y = 2.5, e.z = this.game.player.position.z + 1), this.timer.group.position.lerp(e, this.game.ticker.deltaScaled * 5), this.timer.running && (this.timer.elapsedTime = this.game.ticker.elapsed - this.timer.startTime, this.timer.write(St(this.timer.elapsedTime)));
      };
    }
    setCheckpoints() {
      this.checkpoints = {}, this.checkpoints.items = [], this.checkpoints.count = 0, this.checkpoints.checkRadius = 2, this.checkpoints.target = null, this.checkpoints.last = null, this.checkpoints.reachedCount = 0, this.checkpoints.timings = [];
      const e = this.references.items.get("checkpoints").sort((n, o) => n.name.localeCompare(o.name));
      let t = 0;
      for (const n of e) {
        const o = {};
        n.rotation.reorder("YXZ"), n.visible = false, o.index = t, o.position = n.position.clone(), o.rotation = n.rotation.y, o.scale = n.scale.x * 0.5, o.respawnPosition = n.position.clone();
        const l = new H(3, 0);
        l.rotateAround(new H(), o.rotation), o.respawnPosition.x += l.y, o.respawnPosition.y = 4, o.respawnPosition.z += l.x, o.center = new H(o.position.x, o.position.z), o.a = new H(o.position.x - o.scale, o.position.z), o.b = new H(o.position.x + o.scale, n.position.z), o.a.rotateAround(o.center, -o.rotation), o.b.rotateAround(o.center, -o.rotation), o.setTarget = () => {
          this.checkpoints.target = o, this.checkpoints.doorTarget.scaleUniform.value = o.scale, this.checkpoints.doorTarget.mesh.visible = true, this.checkpoints.doorTarget.mesh.position.copy(o.position), this.checkpoints.doorTarget.mesh.rotation.y = o.rotation, this.checkpoints.doorTarget.mesh.scale.x = o.scale;
        }, o.reach = () => {
          o === this.checkpoints.target && (this.game.world.confetti && (this.game.world.confetti.pop(new y(o.a.x, 0, o.a.y)), this.game.world.confetti.pop(new y(o.b.x, 0, o.b.y))), this.checkpoints.doorReached.scaleUniform.value = o.scale, this.checkpoints.doorReached.mesh.visible = true, this.checkpoints.doorReached.mesh.position.copy(o.position), this.checkpoints.doorReached.mesh.rotation.y = o.rotation, this.checkpoints.doorReached.mesh.scale.x = o.scale, this.checkpoints.last = o, this.checkpoints.reachedCount++, this.sounds.checkpoint.play(this.checkpoints.reachedCount), this.checkpoints.timings.push(Math.round(this.timer.elapsedTime * 1e3)), this.checkpoints.reachedCount === this.checkpoints.count + 2 ? this.finish() : this.checkpoints.items[this.checkpoints.reachedCount % (this.checkpoints.count + 1)].setTarget(), this.checkpoints.target);
        }, this.checkpoints.count = this.checkpoints.items.length, this.checkpoints.items.push(o), t++;
      }
      const s = d(2), i = b(([n, o]) => {
        const l = k(), r = l.toVar();
        r.y.subAssign(this.game.ticker.elapsedScaledUniform.mul(0.2)), r.mulAssign(w(o, 1).mul(2));
        const h = r.x.add(r.y).fract().step(0.5), c = l.y.oneMinus().mul(h);
        return C(n.mul(s), c);
      }), a = new Y(2, 2);
      {
        this.checkpoints.doorTarget = {}, this.checkpoints.doorTarget.scaleUniform = d(2), this.checkpoints.doorTarget.color = d(M("#32ffc1"));
        const n = new O({
          transparent: true,
          side: Ae
        });
        n.outputNode = i(this.checkpoints.doorTarget.color, this.checkpoints.doorTarget.scaleUniform);
        const o = new D(a, n);
        o.scale.x = 1, o.castShadow = false, o.receiveShadow = false, o.material = n, o.visible = false, this.game.scene.add(o), this.checkpoints.doorTarget.mesh = o;
      }
      {
        this.checkpoints.doorReached = {}, this.checkpoints.doorReached.scaleUniform = d(2), this.checkpoints.doorReached.color = d(M("#cbff62"));
        const n = new O({
          transparent: true,
          side: Ae
        });
        n.outputNode = i(this.checkpoints.doorReached.color, this.checkpoints.doorReached.scaleUniform);
        const o = new D(a, n);
        o.scale.x = 1, o.castShadow = false, o.receiveShadow = false, o.material = n, o.visible = false, this.game.scene.add(o), this.checkpoints.doorReached.mesh = o;
      }
      if (this.game.debug.active) {
        const n = this.debugPanel.addFolder({
          title: "checkpoints"
        });
        this.game.debug.addThreeColorBinding(n, this.checkpoints.doorTarget.color.value, "targetColor"), this.game.debug.addThreeColorBinding(n, this.checkpoints.doorReached.color.value, "reachedColor"), n.addBinding(s, "value", {
          label: "intensity",
          min: 0,
          max: 5,
          step: 0.01
        });
      }
    }
    setResetObjects() {
      this.resetObjects = {}, this.resetObjects.items = [];
      const e = this.references.items.get("objects");
      for (const t of e) this.resetObjects.items.push(t.userData.object);
      this.resetObjects.reset = () => {
        for (const t of this.resetObjects.items) this.game.objects.resetObject(t);
      };
    }
    setObstacles() {
      this.obstacles = {}, this.obstacles.items = [];
      const e = this.references.items.get("obstacles");
      let t = 0;
      for (const s of e) {
        const i = {};
        i.object = s.userData.object, i.osciliationOffset = -t * 1, i.basePosition = i.object.visual.object3D.position.clone(), this.obstacles.items.push(i), t++;
      }
    }
    setRoad() {
      this.roadBody = this.references.items.get("road")[0].userData.object.physical.body, this.roadBody.setEnabled(false);
    }
    setRails() {
      this.rails = {};
      const e = this.references.items.get("rails")[0];
      e.material = e.material.clone(), e.material.side = Ae, this.rails.object = e.userData.object, this.rails.activate = () => {
        this.game.objects.enable(this.rails.object);
      }, this.rails.deactivate = () => {
        this.game.objects.disable(this.rails.object);
      }, this.rails.deactivate();
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Start race!", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        const e = this.game.audio.groups.get("click");
        e && e.play(true), this.restart();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setStartAnimation() {
      this.startAnimation = {}, this.startAnimation.timeline = f.timeline({
        paused: true
      }), this.startAnimation.interDuration = 2, this.startAnimation.endCallback = null, this.startAnimation.timeline.add(() => {
        this.sounds.countdown1.play(), this.startingLights.mesh.visible = true, this.startingLights.mesh.position.z = this.startingLights.baseZ + 0.01;
      }), this.startAnimation.timeline.add(f.delayedCall(this.startAnimation.interDuration, () => {
        this.sounds.countdown1.play(), this.startingLights.mesh.position.z = this.startingLights.baseZ + 0.02;
      })), this.startAnimation.timeline.add(f.delayedCall(this.startAnimation.interDuration, () => {
        this.sounds.countdown1.play(), this.startingLights.mesh.position.z = this.startingLights.baseZ + 0.03;
      })), this.startAnimation.timeline.add(f.delayedCall(this.startAnimation.interDuration, () => {
        this.sounds.countdown2.play(), this.startingLights.mesh.material = this.startingLights.greenMaterial, typeof this.startAnimation.endCallback == "function" && this.startAnimation.endCallback();
      })), this.startAnimation.timeline.add(f.delayedCall(this.startAnimation.interDuration, () => {
      })), this.startAnimation.start = (e) => {
        this.startAnimation.endCallback = e, this.startAnimation.timeline.seek(0), this.startAnimation.timeline.play();
      };
    }
    setRespawn() {
      this.game.inputs.addActions([
        {
          name: "circuitRestart",
          categories: [
            "racing"
          ],
          keys: [
            "Keyboard.KeyR",
            "Gamepad.select"
          ]
        }
      ]), this.game.inputs.events.on("circuitRestart", (e) => {
        e.active && this.restart();
      });
    }
    respawn() {
      if (this.state !== _ie.STATE_RUNNING) return;
      this.game.player.state = be.STATE_LOCKED;
      const e = new y();
      let t = 0;
      this.checkpoints.last ? (e.copy(this.checkpoints.last.respawnPosition), t = this.checkpoints.last.rotation + Math.PI * 0.5) : (e.copy(this.startPosition.position), t = this.startPosition.rotation), this.game.overlay.show(() => {
        f.delayedCall(2, () => {
          this.game.player.state = be.STATE_DEFAULT;
        }), this.game.physicalVehicle.moveTo(e, t), this.game.overlay.hide();
      });
    }
    setBounds() {
      this.bounds = {}, this.bounds.threshold = 0, this.bounds.isOut = false;
    }
    setAirDancers() {
      const e = this.references.items.get("airDancers"), t = 5, s = d(M("#d684ff")), i = e[0].material.clone(), a = F(0).toVarying(), n = F(0).toVarying();
      i.positionNode = b(() => {
        const o = Z.toVar(), l = this.game.ticker.elapsedScaledUniform;
        n.assign(l.mul(0.34).sub(Z.y.div(t * 2)).fract().sub(0.5).mul(2).abs());
        const r = Z.y.div(t), h = de(l.mul(0.678)).mul(0.7), c = de(l.mul(1.4)).mul(0.35), u = de(l.mul(2.4)).mul(0.2);
        a.assign(Ts(h, c, u).mul(r).mul(n).mul(this.game.wind.strength.remap(0, 1, 0.25, 1)));
        const g = w(0, 0);
        return o.xy.assign(_e(o.xy, a, g)), o;
      })(), i.normalNode = b(() => {
        const o = Ms.toVar();
        return o.xy.assign(_e(o.xy, a, w(0))), o;
      })();
      for (const o of e) o.material = i;
      if (this.game.debug.active) {
        const o = this.debugPanel.addFolder({
          title: "airDancers"
        });
        this.game.debug.addThreeColorBinding(o, s.value, "color");
      }
    }
    setBanners() {
      this.banners = this.references.items.get("banners");
    }
    setLeaderboard() {
      this.leaderboard = {}, this.leaderboard.maxTime = 0, this.leaderboard.scores = null;
      const e = 512, t = `700 ${e / 14}px "Nunito"`, s = document.createElement("canvas");
      s.style.position = "fixed", s.style.zIndex = 999, s.style.top = 0, s.style.left = 0;
      const i = s.getContext("2d");
      i.font = t, s.width = e, s.height = e;
      const a = new Ne(s);
      a.minFilter = j, a.magFilter = j, a.colorSpace = he, a.generateMipmaps = false;
      const n = new V({
        colorNode: M("#463F35"),
        hasWater: false
      }), o = n.outputNode;
      n.outputNode = b(() => {
        const p = P(a, k(1));
        return C(A(o.rgb, p.rgb.mul(1.3), p.a), o.a);
      })();
      const l = this.references.items.get("leaderboard")[0];
      l.material = n;
      const r = [
        {
          align: "right",
          x: e * 0.125
        },
        {
          x: e * 0.19
        },
        {
          align: "center",
          x: e * 0.43
        },
        {
          align: "left",
          x: e * 0.725
        }
      ], h = e / 12, c = /* @__PURE__ */ new Map(), u = 54, g = 36;
      this.leaderboard.update = (p = null) => {
        const v = () => {
          if (i.clearRect(0, 0, s.width, s.height), p === null) i.font = t, i.fillStyle = "#ff87a2", i.textBaseline = "middle", i.textAlign = "center", i.fillText("OFFLINE", e * 0.5, e * 0.5);
          else if (p.length === 0) i.font = t, i.fillStyle = "#ffffff", i.textBaseline = "middle", i.textAlign = "center", i.fillText("NO SCORE YET TODAY", e * 0.5, e * 0.5);
          else {
            i.font = t, i.fillStyle = "#ffffff", i.textBaseline = "middle";
            let I = 1;
            for (const B of p) {
              i.textAlign = r[0].align, i.fillText(I, r[0].x, (I + 0.5) * h);
              const U = c.get(B[1]);
              U && i.drawImage(U, r[1].x, (I + 0.4) * h - g / 2, u, g), i.textAlign = r[2].align, i.fillText(B[0], r[2].x, (I + 0.5) * h), i.textAlign = r[2].align, i.fillText(St(B[2] / 1e3), r[3].x, (I + 0.5) * h), I++;
            }
          }
          a.needsUpdate = true;
        }, x = () => {
          S === 0 && v();
        };
        let S = 0;
        if (this.leaderboard.maxTime = 0, this.leaderboard.scores = p, p) for (const I of p) {
          const B = I[1];
          if (B) {
            const U = this.menu.inputFlag.countries.get(B);
            if (U && !c.has(B)) {
              const q = new Image();
              q.onload = () => {
                S--, x();
              }, q.src = U.imageUrl, c.set(B, q), S++;
            }
          }
          I[2] > this.leaderboard.maxTime && (this.leaderboard.maxTime = I[2]);
        }
        x();
      }, this.leaderboard.update(null);
    }
    setResetTime() {
      this.resetTime = {}, this.resetTime.isActive = false, this.resetTime.interval = null, this.resetTime.resetTime = null, this.resetTime.lastTimeToReset = null, this.resetTime.finalFormatedTime = null, this.resetTime.lastTimeDrawn = null;
      const e = 128, t = 32, s = `700 ${t / 1.75}px "Nunito"`, i = document.createElement("canvas");
      i.style.position = "fixed", i.style.zIndex = 999, i.style.top = 0, i.style.left = 0;
      const a = i.getContext("2d");
      a.font = s, i.width = e, i.height = t;
      const n = new Ne(i);
      n.minFilter = j, n.magFilter = j, n.generateMipmaps = false;
      const o = new V({
        colorNode: M("#463F35"),
        hasWater: false
      }), l = o.outputNode;
      o.outputNode = b(() => {
        const c = P(n, k(1)).r;
        return C(A(l.rgb, M("#ffffff").mul(1.3), c), l.a);
      })();
      const r = this.references.items.get("leaderboardReset")[0];
      r.material = o, this.resetTime.activate = (c = 0) => {
        this.resetTime.isActive = true, this.resetTime.resetTime = c, this.resetTime.interval = setInterval(this.resetTime.tryDraw, 1e3), this.resetTime.tryDraw();
      }, this.resetTime.deactivate = () => {
        this.resetTime.isActive = true, this.resetTime.lastTimeDrawn = null, clearInterval(this.resetTime.interval), this.resetTime.draw(null);
      };
      const h = 1440 * 60 * 1e3;
      this.resetTime.tryDraw = () => {
        const c = h - (Date.now() - this.resetTime.resetTime) % h, u = Hs(c / 1e3, true, true, false);
        u !== this.resetTime.lastTimeDrawn && (this.resetTime.lastTimeDrawn = u, this.resetTime.finalFormatedTime = u === "" ? "now" : `in ${u}`, this.resetTime.draw(this.resetTime.finalFormatedTime), this.menu.instance.isOpen && (this.menu.resetTimeElement.textContent = this.resetTime.finalFormatedTime)), this.resetTime.lastTimeToReset = c;
      }, this.resetTime.draw = (c = null) => {
        a.fillStyle = "#000000", a.fillRect(0, 0, i.width, i.height), c !== null && (a.fillStyle = "#ffffff", a.textAlign = "center", a.textBaseline = "middle", a.font = s, a.fillText(c, i.width * 0.5, i.height * 0.5)), n.needsUpdate = true;
      };
    }
    setPodium() {
      this.podium = {}, this.podium.object = this.references.items.get("podium")[0].userData.object, this.podium.confettiPositionA = this.references.items.get("podiumConfettiA")[0].position.clone(), this.podium.confettiPositionB = this.references.items.get("podiumConfettiB")[0].position.clone();
      const e = this.game.respawns.getByName("circuit");
      this.podium.viewFocusPosition = e.position.clone(), this.podium.viewFocusPosition.x -= 4, this.podium.viewFocusPosition.y = 0, this.podium.viewFocusPosition.z -= 3, this.podium.confettiIndex = 0, this.podium.popConfetti = () => {
        this.game.world.confetti && (this.game.world.confetti.pop(this.podium.confettiIndex % 2 === 0 ? this.podium.confettiPositionA : this.podium.confettiPositionB), this.podium.confettiIndex++, this.game.view.focusPoint.isTracking || f.delayedCall(2 + Math.random() * 3, () => {
          this.podium.popConfetti();
        }));
      }, this.podium.show = () => {
        this.game.objects.enable(this.podium.object), this.game.view.focusPoint.isTracking = false, this.game.view.focusPoint.position.copy(this.podium.viewFocusPosition), this.podium.popConfetti();
      }, this.podium.hide = () => {
        this.game.objects.disable(this.podium.object);
      }, this.podium.hide();
    }
    setMenu() {
      this.menu = {}, this.menu.instance = this.game.menu.items.get("circuit"), this.menu.resetTimeElement = this.menu.instance.contentElement.querySelector(".js-reset-time"), this.menu.leaderboardContainerElement = this.menu.instance.contentElement.querySelector(".js-leaderboard-container"), this.menu.leaderboardElement = this.menu.leaderboardContainerElement.querySelector(".js-leaderboard tbody"), this.menu.racingButtons = this.menu.instance.contentElement.querySelector(".js-racing-buttons"), this.menu.leaderboardNeedsUpdate = false, this.menu.instance.events.on("open", () => {
        this.menu.leaderboardNeedsUpdate && this.menu.updateLeaderboard(this.menu.leaderboardNeedsUpdate);
      }), this.menu.updateLeaderboard = (i = null) => {
        if (!this.menu.instance.isOpen) this.menu.leaderboardNeedsUpdate = i;
        else {
          let a = "", n = 1;
          for (const o of i) {
            let l = "";
            const r = this.menu.inputFlag.countries.get(o[1]);
            r && (l = `<img width="27" height="18" src="${r.imageUrl}" loading="lazy">`), a += `
                        <tr>
                            <td>${n}</td>
                            <td>${l}</td>
                            <td>${o[0]}</td>
                            <td>${St(o[2] / 1e3)}</td>
                        </tr>
                    `, n++;
          }
          this.menu.leaderboardElement.innerHTML = a, i.length ? this.menu.leaderboardContainerElement.classList.remove("has-no-score") : this.menu.leaderboardContainerElement.classList.add("has-no-score"), this.menu.leaderboardNeedsUpdate = false;
        }
      }, this.menu.instance.contentElement.querySelector(".js-button-restart").addEventListener("click", (i) => {
        i.preventDefault(), this.restart(), this.game.menu.close();
      }), this.menu.instance.contentElement.querySelector(".js-button-end").addEventListener("click", (i) => {
        i.preventDefault(), (this.state === _ie.STATE_RUNNING || this.state === _ie.STATE_STARTING) && this.finish(true), this.game.menu.close();
      }), this.menu.instance.contentElement.querySelector(".js-button-controls").addEventListener("click", (i) => {
        i.preventDefault(), this.game.menu.open("controls");
      }), this.menu.instance.events.on("open", () => {
        this.resetTime.finalFormatedTime && (this.menu.resetTimeElement.textContent = this.resetTime.finalFormatedTime);
      });
    }
    setEndModal() {
      this.endModal = {}, this.endModal.instance = this.game.modals.items.get("circuit-end"), this.endModal.timeElement = this.endModal.instance.element.querySelector(".js-time"), this.endModal.instance.element.querySelector(".js-button-restart").addEventListener("click", (a) => {
        a.preventDefault(), this.restart(), this.game.modals.close();
      }), this.menu.inputGroup = this.endModal.instance.element.querySelector(".js-input-group"), this.menu.input = this.menu.inputGroup.querySelector(".js-input");
      const t = (a = "", n = false, o = false, l = false, r = false) => {
        let h = a;
        return n && (h = h.trim()), l && (h = h.replace(/[^a-z]/gi, "")), o && (h = h.substring(0, 3)), r && (h = h.toUpperCase()), h;
      }, s = () => {
        const a = t(this.menu.input.value, true, true, true, true);
        a.length === 3 && this.game.server.connected && (this.game.server.send({
          type: "circuitInsert",
          countryCode: this.menu.inputFlag.country ? this.menu.inputFlag.country.code : "",
          tag: a,
          duration: Math.round(this.timer.elapsedTime * 1e3),
          checkpointTimings: this.checkpoints.timings
        }), this.game.achievements.setProgress("circuitLeaderboard", 1), this.game.modals.close());
      }, i = () => {
        this.menu.input.value.length === 3 && this.game.server.connected ? this.menu.inputGroup.classList.add("is-valide") : this.menu.inputGroup.classList.remove("is-valide");
      };
      this.menu.input.addEventListener("input", () => {
        const a = t(this.menu.input.value, false, true, true, true);
        this.menu.input.value = a, i();
      }), this.menu.inputGroup.addEventListener("submit", (a) => {
        a.preventDefault(), s();
      }), this.menu.instance.events.on("closed", () => {
        this.menu.input.value = "", i(), this.menu.inputFlag.close();
      }), this.game.server.events.on("connected", () => {
        i();
      }), this.game.server.events.on("disconnected", () => {
        i();
      }), this.menu.inputFlag = new Vs(this.menu.inputGroup.querySelector(".js-input-flag"));
    }
    restart() {
      this.state !== _ie.STATE_STARTING && (this.frustum.alwaysVisible = true, this.timer.end(), this.state = _ie.STATE_STARTING, this.interactivePoint.hide(), this.game.player.state = be.STATE_LOCKED, this.game.inputs.filters.clear(), this.game.inputs.filters.add("racing"), this.startAnimation.timeline.pause(), this.game.overlay.show(() => {
        this.menu.racingButtons.classList.add("is-active"), this.game.physicalVehicle.moveTo(this.startPosition.position, this.startPosition.rotation), this.game.world.floor && this.game.world.floor.physical.body.setEnabled(false), this.roadBody.setEnabled(true), this.startingLights.reset(), this.checkpoints.doorReached.mesh.visible = false, this.checkpoints.doorTarget.mesh.visible = false, this.checkpoints.items[0].setTarget(), this.checkpoints.reachedCount = 0, this.checkpoints.last = null, this.checkpoints.timings = [], this.resetObjects.reset(), this.game.world.explosiveCrates.reset(), this.game.weather.override.start({
          humidity: 0,
          electricField: 0,
          clouds: 0,
          wind: 0
        }, 0), this.game.dayCycles.override.start({
          progress: 0.85,
          fogNearRatio: 0.65,
          fogFarRatio: 1.25
        }, 0), this.timer.show(), this.rails.activate(), this.podium.hide(), this.game.overlay.hide(() => {
          this.state = _ie.STATE_RUNNING, this.startAnimation.start(() => {
            this.game.player.state = be.STATE_DEFAULT, this.timer.start();
          });
        });
      }));
    }
    setData() {
      this.game.server.events.on("message", (e) => {
        e.type === "init" ? (this.resetTime.activate(e.circuitResetTime), this.leaderboard.update(e.circuitLeaderboard), this.menu.updateLeaderboard(e.circuitLeaderboard)) : e.type === "circuitUpdate" && (this.leaderboard.update(e.circuitLeaderboard), this.menu.updateLeaderboard(e.circuitLeaderboard));
      }), this.game.server.events.on("disconnected", () => {
        this.resetTime.deactivate(), this.leaderboard.update(null), this.menu.updateLeaderboard(null);
      }), this.game.server.initData && (this.resetTime.activate(this.game.server.initData.circuitResetTime), this.leaderboard.update(this.game.server.initData.circuitLeaderboard), this.menu.updateLeaderboard(this.game.server.initData.circuitLeaderboard));
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "circuit");
      });
    }
    finish(e = false) {
      this.state === _ie.STATE_RUNNING && (this.state = _ie.STATE_ENDING, this.timer.end(), e && this.timer.hide(), this.checkpoints.target = null, this.checkpoints.doorTarget.mesh.visible = false, e || this.sounds.finish.play(), f.delayedCall(e ? 1 : 4, () => {
        this.game.overlay.show(() => {
          this.state = _ie.STATE_PENDING, this.frustum.alwaysVisible = false, this.menu.racingButtons.classList.remove("is-active"), this.interactivePoint.show(), this.game.inputs.filters.clear(), this.game.inputs.filters.add("wandering");
          const t = this.game.respawns.getByName("circuit");
          this.game.physicalVehicle.moveTo(t.position, t.rotation), this.game.world.floor && this.game.world.floor.physical.body.setEnabled(true), this.roadBody.setEnabled(false), this.game.weather.override.end(0), this.game.dayCycles.override.end(0), this.checkpoints.doorReached.mesh.visible = false, this.checkpoints.doorTarget.mesh.visible = false, this.startingLights.reset(), this.rails.deactivate(), this.game.world.explosiveCrates.reset(), e || this.podium.show(), e || (this.game.achievements.setProgress("circuitFinish", 1), this.timer.elapsedTime < 30 && this.game.achievements.setProgress("circuitFinishFast", 1)), e || f.delayedCall(2, () => {
            this.sounds.applause.play();
          }), this.game.server.connected && !e && f.delayedCall(1, () => {
            this.leaderboard.scores === null || this.leaderboard.scores.length < 10 || this.timer.elapsedTime * 1e3 < this.leaderboard.maxTime ? this.endModal.instance.element.classList.add("is-top-10") : this.endModal.instance.element.classList.remove("is-top-10"), this.game.modals.open("circuit-end");
          }), this.game.overlay.hide(() => {
            this.state = _ie.STATE_PENDING;
          });
        });
      }));
    }
    update() {
      if (this.state === _ie.STATE_RUNNING) {
        for (const t of this.checkpoints.items) aa(t.a.x, t.a.y, t.b.x, t.b.y, this.game.player.position2.x, this.game.player.position2.y, this.checkpoints.checkRadius).length && t.reach();
        for (const t of this.obstacles.items) {
          const s = t.basePosition.clone(), i = Math.sin(this.timer.elapsedTime * 1.25 + t.osciliationOffset) * 5;
          s.z += i, t.object.physical.body.setNextKinematicTranslation(s), t.object.needsUpdate = true;
        }
        this.game.player.position.y < this.bounds.threshold ? this.bounds.isOut || (this.bounds.isOut = true, this.respawn()) : this.bounds.isOut = false;
      }
      let e = 0;
      for (const t of this.banners) {
        const s = this.game.wind.localTime.value * 10 + e * 0.5, i = Math.sin(s) + Math.sin(s * 2.34) * 0.5 + Math.sin(s * 3.45) * 0.25;
        t.rotation.y = 0.5 + i * 0.5, e++;
      }
      this.timer.update();
    }
  };
  __publicField(_ie, "STATE_PENDING", 1);
  __publicField(_ie, "STATE_STARTING", 2);
  __publicField(_ie, "STATE_RUNNING", 3);
  __publicField(_ie, "STATE_ENDING", 4);
  let ie = _ie;
  class ja extends Ke {
    constructor(e = 1) {
      super(), this.type = "PortalSlabsGeometry", this.parameters = {
        size: e
      };
      const t = new Float32Array(24);
      t[0] = -e, t[1] = 0, t[2] = -e, t[3] = -e, t[4] = 0, t[5] = -e, t[6] = e, t[7] = 0, t[8] = -e, t[9] = e, t[10] = 0, t[11] = -e, t[12] = e, t[13] = 0, t[14] = e, t[15] = e, t[16] = 0, t[17] = e, t[18] = -e, t[19] = 0, t[20] = e, t[21] = -e, t[22] = 0, t[23] = e;
      const s = new Float32Array(8);
      s[0] = 0, s[1] = 1, s[2] = 0, s[3] = 1, s[4] = 0, s[5] = 1, s[6] = 0, s[7] = 1;
      const i = new Uint16Array(24);
      i[0] = 0, i[1] = 3, i[2] = 2, i[3] = 3, i[4] = 0, i[5] = 1, i[6] = 2, i[7] = 5, i[8] = 4, i[9] = 5, i[10] = 2, i[11] = 3, i[12] = 4, i[13] = 7, i[14] = 6, i[15] = 7, i[16] = 4, i[17] = 5, i[18] = 6, i[19] = 1, i[20] = 0, i[21] = 1, i[22] = 6, i[23] = 7, this.setAttribute("position", new ne(t, 3)), this.setAttribute("edge", new ne(s, 3)), this.setIndex(new zt(i, 1));
    }
  }
  class qa extends Ke {
    constructor(e = 1, t = 5) {
      super(), this.type = "PortalSlabsGeometry", this.parameters = {
        size: e,
        columnsCount: t
      };
      const s = new ja(), i = s.attributes.position.count, a = s.index.count, n = s.attributes.position.array, o = s.attributes.edge.array, l = s.index.array, r = t * t, h = new Float32Array(i * r * 3), c = new Float32Array(i * r * 2), u = new Float32Array(i * r), g = new Float32Array(i * r), p = new Float32Array(i * r), v = new Uint16Array(a * r);
      for (let x = 0; x < t; x++) for (let S = 0; S < t; S++) {
        const I = (x - (t - 1) * 0.5) * e, B = (S - (t - 1) * 0.5) * e, U = Math.random();
        let q = S + x * t;
        for (let G = 0; G < i; G++) h[(q * i + G) * 3 + 0] = n[G * 3 + 0] * e / 2 + I, h[(q * i + G) * 3 + 1] = n[G * 3 + 1], h[(q * i + G) * 3 + 2] = n[G * 3 + 2] * e / 2 + B, c[(q * i + G) * 2 + 0] = I, c[(q * i + G) * 2 + 1] = B, u[q * i + G] = o[G], g[q * i + G] = U, p[q * i + G] = Math.hypot(I, B);
        for (let G = 0; G < a; G++) v[q * a + G] = q * i + l[G + 0];
      }
      this.setAttribute("position", new ne(h, 3)), this.setAttribute("center", new ne(c, 2)), this.setAttribute("edge", new ne(u, 1)), this.setAttribute("random", new ne(g, 1)), this.setAttribute("distanceToCenter", new ne(p, 1)), this.setIndex(new zt(v, 1));
    }
  }
  class Va extends Pe {
    constructor(e) {
      super(e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F533} Behind the scene",
        expanded: false
      })), this.center = this.references.items.get("center")[0].position, this.setSounds(), this.setSlabs(), this.setInteractivePoint(), this.setAchievement();
    }
    setSounds() {
      this.sounds = {}, this.sounds.chimers = this.game.audio.register({
        path: "sounds/magic/Environmental Loop Scifi Bright Glassy Wandering Tones Layered 02.mp3",
        autoplay: true,
        loop: true,
        volume: 0.15,
        positions: this.references.items.get("interactivePoint")[0].position,
        distanceFade: 20
      });
    }
    setSlabs() {
      const e = new qa(1.5, 6), t = new yt({
        wireframe: false
      }), s = Ce(F());
      this.vehicleRelativePosition = d(w()), this.bloomColor = d(M("#6053ff")), this.bloomIntensity = d(14), this.starsOffset = d(w(0)), t.positionNode = b(() => {
        const i = le("random"), a = le("edge"), n = le("center"), o = le("distanceToCenter"), l = Z.toVar(), r = de(this.game.ticker.elapsedScaledUniform.mul(0.5).add(i.mul(ks))).mul(0.5), h = n.sub(this.vehicleRelativePosition).length(), c = o.remap(0, 3.5, 3, 0).toVar();
        c.addAssign(r), c.assign(c.clamp(0, 1)), c.addAssign(h.remapClamp(2, 4, -1, 0)), s.assign(c), c.mulAssign(a);
        const u = l.xz.sub(n);
        return u.mulAssign(c), l.xz.subAssign(u), l;
      })(), t.outputNode = b(() => {
        const i = le("edge"), a = s.remapClamp(0.1, 1, 0.5, 0), n = i.remapClamp(0, 1, 0.98, 1), o = i.toVar().sub(0.5).abs().mul(2).add(a).step(n), l = Cs.div(256).fract().add(this.starsOffset), r = P(this.game.resources.behindTheSceneStarsTexture, l).rgb.pow(2).mul(5), h = this.bloomColor.mul(this.bloomIntensity), c = A(r, h, o);
        return C(c, 1);
      })(), this.slabs = new D(e, t), this.slabs.position.copy(this.center), this.slabs.position.y += 0.01, this.game.scene.add(this.slabs), this.objects.hideable.push(this.slabs), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, this.bloomColor.value, "bloomColor"), this.debugPanel.addBinding(this.bloomIntensity, "value", {
        label: "bloomIntensity",
        min: 0,
        max: 20,
        step: 1e-3
      }));
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Behind the scene", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.game.inputs.interactiveButtons.clearItems(), this.game.menu.open("behindTheScene"), this.interactivePoint.hide();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }), this.game.menu.items.get("behindTheScene").events.on("close", () => {
        this.interactivePoint.show();
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "behindTheScene");
      });
    }
    update() {
      this.vehicleRelativePosition.value.x = this.game.physicalVehicle.position.x - this.slabs.position.x, this.vehicleRelativePosition.value.y = this.game.physicalVehicle.position.z - this.slabs.position.z;
      const e = new H(this.game.view.focusPoint.smoothedPosition.x, this.game.view.focusPoint.smoothedPosition.z);
      e.rotateAround(new H(), Math.PI * 0.25), this.starsOffset.value.x = e.x * 0.1, this.starsOffset.value.y = e.y * 0.1;
    }
  }
  const Tt = new st.alea("achievements");
  class Ha extends Pe {
    constructor(e) {
      super(e), this.setSounds(), this.setWaterfall(), this.setPillar(), this.setInteractivePoint(), this.setAchievement();
    }
    setSounds() {
      this.sounds = {}, this.sounds.chimers = this.game.audio.register({
        path: "sounds/magic/Mountain Audio - Small Chimes - Loop.mp3",
        autoplay: true,
        loop: true,
        volume: 0.15,
        positions: this.references.items.get("pillar")[0].position,
        distanceFade: 20
      });
    }
    setWaterfall() {
      const e = d(M(this.game.terrain.colors[1].value)), t = d(M(this.game.terrain.colors[2].value));
      {
        const s = b(() => {
          const n = k().toVar(), o = M();
          {
            const l = n.x.sub(0.5).mul(2).abs().pow3().max(0), r = A(t, e, l);
            o.assign(r);
          }
          {
            const l = n.toVar();
            l.x.assign(l.x.sub(0.5).abs().mul(2));
            const r = l.sub(w(this.game.ticker.elapsedScaledUniform.mul(0.05), 0)).mul(w(0.35, 0.96)), h = P(this.game.noises.voronoi, r).r, c = l.sub(w(this.game.ticker.elapsedScaledUniform.mul(0.041), 0)).mul(w(0.75, 1.28)), u = P(this.game.noises.voronoi, c).r, g = Be(h, u), p = n.x.sub(0.5).abs().mul(2).add(0.5).mul(0.5).oneMinus(), v = g.step(p);
            o.assign(A(o, M("#ffffff"), v));
          }
          return E(o);
        })(), i = new V({
          colorNode: s,
          hasLightBounce: false,
          hasWater: false,
          hasReveal: false
        }), a = this.references.items.get("waterfallStill")[0];
        a.material = i;
      }
      {
        const s = b(() => {
          const n = k().toVar();
          {
            const o = n.sub(w(0, this.game.ticker.elapsedScaledUniform.mul(0.11))).mul(w(0.7, 0.6)), l = P(this.game.noises.voronoi, o).r, r = n.sub(w(0, this.game.ticker.elapsedScaledUniform.mul(0.085))).mul(w(1.5, 0.8)), h = P(this.game.noises.voronoi, r).r, c = Be(l, h), u = n.y.sub(0.5).abs().mul(2).add(0.5).mul(0.5);
            c.lessThan(u).discard();
          }
          return E(1);
        })(), i = new V({
          colorNode: s,
          hasLightBounce: false,
          hasWater: false,
          hasReveal: false
        }), a = this.references.items.get("waterfallDrop")[0];
        a.material = i;
      }
      {
        const s = this.references.items.get("waterfallParticles")[0];
        s.removeFromParent();
        const i = new y(s.geometry.attributes.position.array[0], s.geometry.attributes.position.array[1], s.geometry.attributes.position.array[2]), a = new y(s.geometry.attributes.position.array[3], s.geometry.attributes.position.array[4], s.geometry.attributes.position.array[5]);
        i.applyMatrix4(s.matrixWorld), a.applyMatrix4(s.matrixWorld);
        const n = i.distanceTo(a), o = a.clone().sub(i), l = 100, r = new Float32Array(l * 3), h = new Float32Array(l);
        for (let x = 0; x < l; x++) r[x * 3 + 0] = 0, r[x * 3 + 1] = 0, r[x * 3 + 2] = n * Math.random(), h[x] = Math.PI - Math.PI * 0.5 * Math.random();
        const c = ee(r, "vec3").toAttribute(), u = ee(h, "float").toAttribute(), g = new V({
          hasLightBounce: false,
          hasWater: false,
          hasReveal: false,
          alphaTest: 0.1
        });
        g.positionNode = b(() => {
          const x = this.game.ticker.elapsedScaledUniform.mul(0.2).add(F(re).div(l)).fract(), S = x.oneMinus().mul(0.4), B = Z.toVar().mul(S).add(c).toVar(), U = x.oneMinus().pow2().oneMinus();
          return B.y.addAssign(de(u).mul(U).mul(2)), B.x.addAssign(wt(u).mul(U).mul(1.5)), B;
        })(), g._alphaNode = b(() => k().sub(0.5).length().oneMinus().sub(0.5))();
        const p = new Y(1, 1);
        p.rotateY(-Math.PI * 0.5), p.rotateZ(-Math.PI * 0.25);
        const v = new lt(p, g, l);
        v.receiveShadow = true, v.castShadow = true, v.lookAt(o.multiplyScalar(-1)), v.position.copy(a), v.count = l, this.game.scene.add(v), this.objects.hideable.push(v);
      }
    }
    setPillar() {
      this.pillar = this.references.items.get("pillar")[0];
      {
        const e = this.game.achievements.globalProgress.totalCount, t = new Float32Array(e * 3), s = new Float32Array(e);
        for (let u = 0; u < e; u++) {
          const g = Math.PI * Tt() - Math.PI * 0.25, p = Tt() * 2, v = 2 + Tt() * 0.25;
          t[u * 3 + 0] = Math.sin(g) * v, t[u * 3 + 1] = p, t[u * 3 + 2] = Math.cos(g) * v, s[u] = 0.2 + Tt() * 0.8;
        }
        const i = ee(t, "vec3").toAttribute(), a = ee(s, "float").toAttribute(), n = new Je({}), o = Ce(F(0));
        n.positionNode = b(() => {
          o.assign(this.game.ticker.elapsedScaledUniform.mul(0.05).add(F(re).div(e)).fract());
          const u = i.toVar();
          return u.y.addAssign(o.mul(a)), u;
        })(), n.scaleNode = b(() => Be(o.remapClamp(0, 0.1, 0, 1), o.remapClamp(0.7, 0.8, 1, 0), 1).mul(0.2))();
        const l = this.game.materials.getFromName("emissiveOrangeRadialGradient"), r = this.game.materials.getFromName("emissiveBlueRadialGradient");
        n.outputNode = b(() => {
          const u = k().toVar();
          return u.x.addAssign(re), u.x.divAssign(32), P(this.game.resources.achievementsGlyphsTexture, u).r.lessThan(0.5).discard(), A(r.outputNode, l.outputNode, F(re).div(e).step(this.game.achievements.globalProgress.ratioUniform));
        })();
        const h = new Y(1, 1), c = new D(h, n);
        c.position.x = this.pillar.position.x, c.position.y = 2, c.position.z = this.pillar.position.z, c.count = e, this.game.scene.add(c), this.objects.hideable.push(c);
      }
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Achievements", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        this.game.inputs.interactiveButtons.clearItems(), this.game.menu.open("achievements"), this.interactivePoint.hide();
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }), this.game.menu.items.get("achievements").events.on("close", () => {
        this.interactivePoint.show();
      });
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "achievements");
      });
      const e = this.references.items.get("waterfallZone")[0], t = e.position.clone(), s = e.scale.x;
      this.game.zones.create("cylinder", t, s).events.on("enter", () => {
        this.game.achievements.setProgress("waterfall", 1);
      });
    }
    update() {
      this.pillar.position.y = Math.sin(this.game.ticker.elapsedScaled * 0.1) * 0.25;
    }
  }
  class Wa extends Pe {
    constructor(e) {
      super(e), this.setInteractivePoint(), this.setTV(), this.setAchievement();
    }
    setInteractivePoint() {
      this.interactivePoint = this.game.interactivePoints.create(this.references.items.get("interactivePoint")[0].position, "Time Machine", N.ALIGN_RIGHT, N.STATE_CONCEALED, () => {
        window.open("https://2019.bruno-simon.com");
      }, () => {
        this.game.inputs.interactiveButtons.addItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      }, () => {
        this.game.inputs.interactiveButtons.removeItems([
          "interact"
        ]);
      });
    }
    setTV() {
      let e = true, t = 0;
      const s = [
        this.game.resources.timeMachineScreenFolioTexture,
        this.game.resources.timeMachineScreenMGSTexture
      ], i = this.game.audio.register({
        path: "sounds/tv/alert.mp3",
        autoplay: false,
        loop: false,
        volume: 0.3,
        preload: true
      }), a = this.references.items.get("tv")[0];
      a.userData.object.physical.onCollision = (r, h) => {
        if (e) {
          e = false, t++, o.outputNode = l(), o.needsUpdate = true;
          const c = this.game.audio.groups.get("click");
          c && c.play(true), t === 1 && i.play(), f.delayedCall(1, () => {
            e = true;
          });
        }
      };
      const n = this.references.items.get("screen")[0], o = new O(), l = b(() => {
        const r = w(k().x, k().y), h = P(s[t % s.length], r), c = P(this.game.noises.perlin, w(r.y.add(this.game.ticker.elapsedScaledUniform.mul(0.1)), 0)).r.smoothstep(0, 1);
        return C(h.rgb.mul(c.mul(t % s.length === 0 ? 1 : 3).add(1)), 1);
      });
      o.outputNode = l(), n.material = o;
    }
    setAchievement() {
      this.events.on("boundingIn", () => {
        this.game.achievements.setProgress("areas", "timeMachine");
      });
    }
  }
  class $a {
    constructor() {
      this.game = T.getInstance();
      const e = [
        [
          "achievements",
          Ha
        ],
        [
          "altar",
          Da
        ],
        [
          "behindTheScene",
          Va
        ],
        [
          "bowling",
          Ua
        ],
        [
          "career",
          za
        ],
        [
          "circuit",
          ie
        ],
        [
          "cookie",
          Ra
        ],
        [
          "lab",
          $
        ],
        [
          "landing",
          Fa
        ],
        [
          "projects",
          z
        ],
        [
          "social",
          La
        ],
        [
          "toilet",
          Oa
        ],
        [
          "timeMachine",
          Wa
        ]
      ], t = [
        ...this.game.resources.areasModel.scene.children
      ];
      for (const s of t) for (const [i, a] of e) s.name.startsWith(i) && (this[i] = new a(s));
    }
  }
  class Ws extends Ke {
    constructor(e = []) {
      super(), this.type = "LineGeometry", this.parameters = {
        points: e
      };
      const t = e.length, s = new Float32Array(t * 3 * 2), i = new Float32Array(t * 3 * 2), a = new Float32Array(t * 2), n = new Uint16Array((t - 1) * 2 * 3);
      for (let o = 0; o < t; o++) {
        const l = o * 2, r = o * 6, h = e[o], c = e[Math.min(o + 1, t - 1)];
        s[r + 0] = h.x, s[r + 1] = h.y, s[r + 2] = h.z, s[r + 3] = h.x, s[r + 4] = h.y, s[r + 5] = h.z;
        const u = c.clone().sub(h).normalize();
        i[r + 0] = u.x, i[r + 1] = u.y, i[r + 2] = u.z, i[r + 3] = u.x, i[r + 4] = u.y, i[r + 5] = u.z, a[l + 0] = o / (t - 1), a[l + 1] = o / (t - 1), n[r + 0] = l + 2, n[r + 1] = l, n[r + 2] = l + 1, n[r + 3] = l + 1, n[r + 4] = l + 3, n[r + 5] = l + 2;
      }
      this.setAttribute("position", new ne(s, 3)), this.setAttribute("direction", new ne(i, 3)), this.setAttribute("ratio", new ne(a, 1)), this.setIndex(new zt(n, 1));
    }
  }
  class Ka extends Ws {
    constructor(e = 10, t = 4, s = 1, i = 30) {
      const a = e / 2, n = e / (t - 1), o = [];
      for (let h = 0; h < t; h++) o.push(new y(0, h % 2 - 0.5 * s, -a + h * n));
      const r = new As(o).getPoints(i);
      super(r), this.type = "WindLineGeometry", this.parameters = {
        length: e,
        handlesCount: t,
        amplitude: s,
        divisions: i
      };
    }
  }
  class Mt {
    constructor(e = 0.1, t = E(0, 1, -1)) {
      this.game = T.getInstance(), this.available = true;
      const s = new Ka(), i = new V({
        colorNode: M(16777215),
        normalNode: E(0, 1, 0),
        hasCoreShadows: false,
        hasDropShadows: false,
        hasLightBounce: false,
        hasFog: false,
        hasWater: false,
        transparent: true
      });
      this.thickness = d(e), this.progress = d(0), i.vertexNode = b(() => {
        const a = Et.mul(C(Z, 1)), n = t.normalize(), o = le("ratio"), l = o.sub(0.5).abs().mul(2).oneMinus().smoothstep(0, 1), r = this.progress.mul(3).sub(1), h = o.sub(r).abs().oneMinus().smoothstep(0, 1), c = Lt(this.thickness, l, h), u = Ot(Yt.toFloat().mul(3).sub(2).div(3).mod(2)).sub(0.5), g = n.mul(u.mul(c));
        a.addAssign(C(g, 0));
        const p = Es.mul(a);
        return Is.mul(p);
      })(), this.mesh = new D(s, i), this.mesh.renderOrder = 1, this.mesh.position.y = 2, this.game.scene.add(this.mesh);
    }
  }
  class Xa {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u2307 Wind lines",
        expanded: false
      })), this.intervalRange = {
        min: 300,
        max: 2e3
      }, this.duration = 4, this.translation = 1, this.thickness = 0.1, this.pool = [
        new Mt(),
        new Mt(),
        new Mt(),
        new Mt()
      ];
      const e = () => {
        this.display(), setTimeout(() => {
          e();
        }, this.intervalRange.min + Math.random() * (this.intervalRange.max - this.intervalRange.min));
      };
      this.durationBinding = this.game.debug.addManualBinding(this.debugPanel, this, "duration", {
        min: 0,
        max: 8,
        step: 1e-3
      }, () => L(this.game.weather.wind.value, 0, 1, 8, 2)), this.game.debug.active && (this.debugPanel.addBinding(this, "intervalRange", {
        min: 0,
        max: 4e3,
        step: 1
      }), this.debugPanel.addBinding(this, "duration", {
        min: 0,
        max: 4,
        step: 1e-3
      }), this.debugPanel.addBinding(this, "translation", {
        min: 0,
        max: 4,
        step: 1e-3
      }), this.debugPanel.addBinding(this, "thickness", {
        min: 0,
        max: 1,
        step: 1e-3
      }).on("change", () => {
        for (const t of this.pool) t.thickness.value = this.thickness;
      })), e();
    }
    display() {
      const e = this.pool.find((s) => s.available);
      if (!e) return;
      this.durationBinding.update(), e.mesh.visible = true, e.available = false;
      const t = this.game.wind.angle;
      e.mesh.position.x = this.game.view.focusPoint.position.x + (Math.random() - 0.5) * this.game.view.optimalArea.radius, e.mesh.position.z = this.game.view.focusPoint.position.z + (Math.random() - 0.5) * this.game.view.optimalArea.radius, e.mesh.rotation.y = t, f.to(e.mesh.position, {
        x: e.mesh.position.x + Math.sin(t) * this.translation,
        z: e.mesh.position.z + Math.cos(t) * this.translation,
        duration: this.duration
      }), f.fromTo(e.progress, {
        value: 0
      }, {
        value: 1,
        duration: this.duration,
        onComplete: () => {
          e.mesh.visible = false, e.available = true;
        }
      });
    }
  }
  class Ya {
    constructor() {
      this.game = T.getInstance();
      const e = Math.round(ss(this.game.yearCycles.properties.leaves.value, 0.25, 1, 7, 11));
      this.count = Math.pow(2, e), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F343} Leaves",
        expanded: false
      })), this.setGeometry(), this.setMaterial(), this.setMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setGeometry() {
      this.geometry = new Y(1, 1);
      const e = this.geometry.attributes.position.array;
      e[0] += 0.15, e[3] += 0.15, e[6] -= 0.15, e[9] -= 0.15, this.geometry.rotateX(-Math.PI * 0.5);
    }
    setMaterial() {
      this.focusPoint = d(w()), this.vehicleVelocity = d(E()), this.vehiclePosition = d(E()), this.scale = d(0.25), this.rotationFrequency = d(3), this.rotationElevationMultiplier = d(1), this.pushSidewaysMultiplier = d(20), this.pushMultiplier = d(100), this.windFrequency = d(5e-3), this.windMultiplier = d(0.5), this.upwardMultiplier = d(1), this.defaultDamping = d(1.5), this.waterDamping = d(0.75), this.gravity = d(9.807), this.explosion = d(C(0)), this.tornado = d(C(0)), this.positionBuffer = ee(this.count, "vec3"), this.velocityBuffer = ee(this.count, "vec3");
      const e = new Float32Array(this.count);
      for (let v = 0; v < this.count; v++) e[v] = Math.random() * Math.PI * 2;
      const t = ee(e, "float").toAttribute(), s = new Float32Array(this.count);
      for (let v = 0; v < this.count; v++) s[v] = Math.random() * 0.5 + 0.5;
      const i = ee(s, "float").toAttribute(), a = new Float32Array(this.count);
      for (let v = 0; v < this.count; v++) a[v] = Math.random() * 0.1 + 0.1;
      const n = ee(a, "float"), o = d(M(9785658)), l = d(M(16083514)), r = b(() => {
        const v = tt(re.add(99));
        return E(A(o, l, v));
      })(), h = new Float32Array(this.count * 3);
      for (let v = 0; v < this.count; v++) {
        const x = new y(0, 1, 0);
        x.applyAxisAngle(new y(1, 0, 0), (Math.random() - 0.5) * 2), x.applyAxisAngle(new y(0, 0, 1), (Math.random() - 0.5) * 2), x.toArray(h, v * 3);
      }
      const c = ee(h, "vec3").toAttribute();
      this.material = new V({
        side: Ae,
        colorNode: r,
        normalNode: vt,
        hasWater: false,
        transparent: true
      }), this.material.positionNode = b(() => {
        Ei.assign(Qt.mul(C(c, 0)));
        const v = this.positionBuffer.toAttribute(), x = Z.mul(i).mul(this.scale), S = ge(v.y.mul(this.rotationElevationMultiplier), 0), I = de(v.x.mul(this.rotationFrequency)).mul(S), B = de(v.z.mul(this.rotationFrequency)).mul(S), U = t;
        return x.xy.assign(_e(x.xy, I, w(0))), x.yz.assign(_e(x.yz, B, w(0))), x.xz.assign(_e(x.xz, U, w(0))), x.add(v);
      })(), this.size = F(this.game.view.optimalArea.radius * 2);
      const g = b(() => {
        const v = this.positionBuffer.element(re);
        v.assign(E(tt(re).sub(0.5).mul(this.size), 0, tt(re.add(1)).sub(0.5).mul(this.size)));
        const x = v.xz.mul(0.02), S = P(this.game.noises.perlin, x).r;
        v.x.addAssign(S.mul(15));
      })().compute(this.count);
      this.game.rendering.renderer.computeAsync(g);
      const p = b(() => {
        const v = this.positionBuffer.element(re), x = this.velocityBuffer.element(re), S = n.element(re), I = this.game.terrain.terrainNode(v.xz), B = v.sub(this.vehiclePosition), U = E(B.x, 0, B.z).normalize().mul(this.pushSidewaysMultiplier), q = E(this.vehicleVelocity.x, 0, this.vehicleVelocity.z).mul(this.pushMultiplier), oe = B.length().remapClamp(0.5, 2, 1, 0), J = this.vehicleVelocity.length(), pe = q.add(U).mul(J).mul(oe);
        x.addAssign(pe);
        const fe = v.xz.mul(this.windFrequency).add(this.game.wind.direction.mul(this.game.wind.localTime)).xy, Ee = P(this.game.noises.perlin, fe).r, Ie = this.game.wind.strength.sub(Ee).mul(S).mul(this.windMultiplier).max(0);
        x.x.addAssign(this.game.wind.direction.x.mul(Ie)), x.z.addAssign(this.game.wind.direction.y.mul(Ie));
        const Se = v.xz.sub(this.explosion.xy), we = Se.length().remapClamp(this.explosion.z.mul(0.5), this.explosion.z.mul(1), 0.2, 0), Ue = w(Se.x, Se.y).mul(we).mul(this.explosion.a);
        x.addAssign(E(Ue.x, 0, Ue.y));
        const ht = v.y.remapClamp(0, 6, 1, 0);
        x.y = x.xz.length().min(2).mul(this.upwardMultiplier).mul(ht);
        const Ut = I.b.remapClamp(0.4, 0, this.waterDamping, this.defaultDamping), Gt = _(0.05, v.y).mul(this.defaultDamping), Zs = ge(Ut, Gt).mul(this.game.ticker.deltaScaledUniform);
        x.mulAssign(F(1).sub(Zs)), x.y = x.y.sub(this.gravity.mul(S)), v.addAssign(x.mul(this.game.ticker.deltaScaledUniform));
        const _s = I.b.remapClamp(0.02, 0.13, 0, this.game.water.surfaceElevationUniform).add(0.02);
        v.y.assign(ge(v.y, _s));
        const xt = this.size.mul(0.5);
        v.x.assign(We(v.x.add(xt).sub(this.focusPoint.x), this.size).sub(xt).add(this.focusPoint.x)), v.z.assign(We(v.z.add(xt).sub(this.focusPoint.y), this.size).sub(xt).add(this.focusPoint.y));
      })();
      this.updateCompute = p.compute(this.count), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, o.value, "colorA"), this.game.debug.addThreeColorBinding(this.debugPanel, l.value, "colorB"), this.debugPanel.addBinding(this.scale, "value", {
        label: "scale",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.scale, "value", {
        label: "scale",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.rotationFrequency, "value", {
        label: "rotationFrequency",
        min: 0,
        max: 20,
        step: 1e-3
      }), this.debugPanel.addBinding(this.rotationElevationMultiplier, "value", {
        label: "rotationElevationMultiplier",
        min: 0,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBinding(this.pushSidewaysMultiplier, "value", {
        label: "pushSidewaysMultiplier",
        min: 0,
        max: 300,
        step: 1
      }), this.debugPanel.addBinding(this.pushMultiplier, "value", {
        label: "pushMultiplier",
        min: 0,
        max: 300,
        step: 1
      }), this.debugPanel.addBinding(this.windFrequency, "value", {
        label: "windFrequency",
        min: 0,
        max: 0.02,
        step: 1e-5
      }), this.debugPanel.addBinding(this.windMultiplier, "value", {
        label: "windMultiplier",
        min: 0,
        max: 10,
        step: 1e-4
      }), this.debugPanel.addBinding(this.upwardMultiplier, "value", {
        label: "upwardMultiplier",
        min: 0,
        max: 10,
        step: 0.01
      }), this.debugPanel.addBinding(this.defaultDamping, "value", {
        label: "defaultDamping",
        min: 0,
        max: 10,
        step: 0.01
      }), this.debugPanel.addBinding(this.waterDamping, "value", {
        label: "waterDamping",
        min: 0,
        max: 10,
        step: 0.01
      }), this.debugPanel.addBinding(this.gravity, "value", {
        label: "gravity",
        min: 0,
        max: 20,
        step: 0.01
      }));
    }
    setMesh() {
      this.mesh = new D(this.geometry, this.material), this.mesh.count = this.count, this.mesh.frustumCulled = false, this.mesh.castShadow = true, this.mesh.receiveShadow = true, this.mesh.renderOrder = 2, this.game.scene.add(this.mesh);
    }
    explode(e, t) {
      this.explosion.value.x = e.x, this.explosion.value.y = e.z, this.explosion.value.z = t, this.explosion.value.w = 20;
    }
    update() {
      this.focusPoint.value.set(this.game.view.optimalArea.position.x, this.game.view.optimalArea.position.z), this.vehicleVelocity.value.copy(this.game.physicalVehicle.velocity), this.vehiclePosition.value.copy(this.game.physicalVehicle.position), this.game.rendering.renderer.computeAsync(this.updateCompute), this.explosion.value.w = 0;
    }
  }
  const Re = st.alea("lightning");
  class Za {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u26A1\uFE0F Lightnings",
        expanded: false
      })), this.frequency = 2, this.hitChances = 0, this.currentSecond = Math.floor(Date.now() / 1e3), this.colorA = d(M("#ff4c00")), this.colorB = d(M("#5180ff")), this.intensity = d(3), this.group = new at(), this.game.scene.add(this.group), this.hitChancesBinding = this.game.debug.addManualBinding(this.debugPanel, this, "hitChances", {
        label: "hitChances",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => Math.max(0, this.game.weather.clouds.value) * Math.max(0, this.game.weather.electricField.value) * this.game.weather.humidity.value), this.game.debug.active && (this.debugPanel.addBinding(this, "frequency", {
        min: 0.1,
        max: 10,
        step: 0.1
      }), this.game.debug.addThreeColorBinding(this.debugPanel, this.colorA.value, "colorA"), this.game.debug.addThreeColorBinding(this.debugPanel, this.colorB.value, "colorB"), this.debugPanel.addBinding(this.intensity, "value", {
        label: "intensity",
        min: 0,
        max: 10,
        step: 0.01
      })), this.setSounds(), this.setAnticipationParticles(), this.setArc(), this.setExplosionParticles(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setSounds() {
      this.sounds = {};
      {
        const e = [
          "sounds/thunder/near/THUNDER_GEN-HDF-23300.mp3",
          "sounds/thunder/near/Lightning-Streak-with-Thunder-Crash_TTX028903.mp3",
          "sounds/thunder/near/ThunderSharpStrikingRumblingCrackling_JMDKp_04.mp3"
        ];
        this.sounds.near = [];
        for (const t of e) this.sounds.near.push(this.game.audio.register({
          path: t,
          autoplay: false,
          loop: false,
          volume: 1,
          antiSpam: 0.2,
          positions: new y(),
          onPlay: (s, i) => {
            const a = Math.hypot(i.x - this.game.player.position2.x, i.z - this.game.player.position2.y);
            s.positions[0].copy(i);
            const n = L(a, 0, 20, 0, -0.3);
            s.rate = 1.3 + Math.random() * 0.1 + n;
          }
        }));
      }
      {
        const e = [
          "sounds/thunder/distant/Thunder32GentleCr SIG014001.mp3",
          "sounds/thunder/distant/Thunder44LowRippl SIG015201.mp3"
        ];
        this.sounds.distant = [];
        for (const t of e) this.sounds.distant.push(this.game.audio.register({
          path: t,
          autoplay: false,
          loop: false,
          volume: 0.4,
          antiSpam: 7,
          onPlay: (s) => {
            s.volume = 1 + Math.random() * 0.3, s.rate = 1 + Math.random() * 0.3;
          }
        }));
      }
    }
    setAnticipationParticles() {
      this.anticipationParticles = {}, this.anticipationParticles.count = 32, this.anticipationParticles.duration = 5;
      const e = d(this.anticipationParticles.duration), t = d(0.07), s = d(1.5), i = new Float32Array(this.anticipationParticles.count * 3), a = new Float32Array(this.anticipationParticles.count);
      for (let o = 0; o < this.anticipationParticles.count; o++) {
        const l = o * 3, r = Math.PI * 2 * Re(), h = Re() * 3;
        i[l + 0] = Math.sin(r) * h, i[l + 1] = -Re(), i[l + 2] = Math.cos(r) * h, a[o] = Re() * 0.75 + 0.25;
      }
      this.anticipationParticles.positionAttribute = ee(i, "vec3").toAttribute(), this.anticipationParticles.scaleAttribute = ee(a, "float").toAttribute(), this.anticipationParticles.geometry = new Y(1, 1);
      const n = Ce(E());
      if (this.anticipationParticles.positionNode = b(([o]) => {
        const l = this.game.ticker.elapsedScaledUniform.sub(o);
        n.assign(this.anticipationParticles.positionAttribute);
        const r = Be(l.div(this.anticipationParticles.duration), 1);
        return n.y.addAssign(r.mul(s)), n;
      }), this.anticipationParticles.scaleNode = b(([o]) => {
        const l = this.game.ticker.elapsedScaledUniform.sub(o), r = F(this.anticipationParticles.duration), h = l.remapClamp(r.mul(0.5), r, 1, 0), c = n.y.remapClamp(0, 0.2, 0, 1);
        return this.anticipationParticles.scaleAttribute.mul(t).mul(h).mul(c);
      }), this.anticipationParticles.create = (o, l) => {
        const r = d(this.game.ticker.elapsedScaled), h = new Je({
          transparent: true
        });
        h.colorNode = this.colorB.div(Ve(this.colorB)).mul(this.intensity), h.positionNode = this.anticipationParticles.positionNode(r), h.scaleNode = this.anticipationParticles.scaleNode(r);
        const c = new D(this.anticipationParticles.geometry, h);
        return c.position.copy(o), c.rotation.y = l() * Math.PI * 2, c.count = this.anticipationParticles.count, c.renderOrder = 2, this.group.add(c), c;
      }, this.game.debug.active) {
        const o = this.debugPanel.addFolder({
          title: "Anticipation"
        });
        o.addBinding(this.anticipationParticles, "duration", {
          min: 0,
          max: 10,
          step: 0.01
        }).on("change", () => {
          e.value = this.anticipationParticles.duration;
        }), o.addBinding(t, "value", {
          label: "scale",
          min: 0,
          max: 1,
          step: 1e-3
        }), o.addBinding(s, "value", {
          label: "elevation",
          min: 0,
          max: 5,
          step: 0.01
        });
      }
    }
    setArc() {
      this.arc = {}, this.arc.duration = 3;
      const e = [], t = 15, i = 15 / (t - 1);
      for (let l = 0; l < t; l++) {
        const r = new y((Re() - 0.5) * 1, l * i, (Re() - 0.5) * 1);
        e.push(r);
      }
      this.arc.geometry = new Ws(e);
      const a = d(0.1), n = d(5), o = d(1);
      if (this.arc.vertexNode = b(([l]) => {
        const r = le("ratio"), h = _(r, 0.01), c = this.game.ticker.elapsedScaledUniform.sub(l), u = Be(c.div(this.arc.duration), 1), g = Z.toVar();
        g.xz.mulAssign(u.oneMinus().pow(n).oneMinus().mul(h.oneMinus()).mul(o).add(1));
        const p = Et.mul(C(g, 1)), v = p.xyz.sub(It).normalize(), x = Z.add(le("direction")), I = Et.mul(C(x, 1)).xyz.sub(p.xyz).normalize(), B = Jt(I, v).normalize(), U = r.mul(10).min(1), q = u.oneMinus(), G = Lt(a, U, q), oe = Ot(Yt.toFloat().mul(3).sub(2).div(3).mod(2)).sub(0.5), J = B.mul(oe.mul(G));
        p.addAssign(C(J, 0));
        const pe = Es.mul(p);
        return Is.mul(pe);
      }), this.arc.create = (l, r) => {
        const h = d(this.game.ticker.elapsedScaled), c = new O({
          transparent: true
        }), u = Q.sub(E(l.x, l.y, l.z)).length().div(8).min(1), g = A(this.colorA, this.colorB, u);
        c.colorNode = g.div(Ve(g)).mul(this.intensity), c.fog = false, c.vertexNode = this.arc.vertexNode(h);
        const p = new D(this.arc.geometry, c);
        return p.position.copy(l), p.rotation.y = r() * Math.PI * 2, p.renderOrder = 2, this.group.add(p), p;
      }, this.game.debug.active) {
        const l = this.debugPanel.addFolder({
          title: "Arc"
        });
        l.addBinding(this.arc, "duration", {
          min: 0,
          max: 10,
          step: 0.01
        }), l.addBinding(n, "value", {
          label: "easeOut",
          min: 1,
          max: 10,
          step: 1
        }), l.addBinding(o, "value", {
          label: "driftAmplitude",
          min: 0,
          max: 3,
          step: 1e-3
        }), l.addBinding(a, "value", {
          label: "thickness",
          min: 0,
          max: 1,
          step: 1e-3
        });
      }
    }
    setExplosionParticles() {
      this.explosionParticles = {}, this.explosionParticles.count = 128, this.explosionParticles.duration = 4, this.explosionParticles.fallAmplitude = 1;
      const e = new Float32Array(this.explosionParticles.count * 3), t = new Float32Array(this.explosionParticles.count);
      for (let n = 0; n < this.explosionParticles.count; n++) {
        const o = n * 3, l = new bt(Re(), Re() * 0.5 * Math.PI, Re() * Math.PI * 2), r = new y().setFromSpherical(l);
        e[o + 0] = r.x, e[o + 1] = r.y, e[o + 2] = r.z, t[n] = Re() * 0.75 + 0.25;
      }
      this.explosionParticles.positionAttribute = ee(e, "vec3").toAttribute(), this.explosionParticles.scaleAttribute = ee(t, "float").toAttribute(), this.explosionParticles.geometry = new Y();
      const s = d(0.1), i = d(3), a = d(8);
      if (this.explosionParticles.positionNode = b(([n]) => {
        const o = this.game.ticker.elapsedScaledUniform.sub(n), l = Be(o.div(F(this.explosionParticles.duration).mul(0.75)), 1), r = this.explosionParticles.positionAttribute.toVar();
        return r.mulAssign(l.oneMinus().pow(a).oneMinus().mul(i)), r;
      }), this.explosionParticles.scaleNode = b(([n]) => {
        const l = this.game.ticker.elapsedScaledUniform.sub(n).div(this.explosionParticles.duration).oneMinus().max(0);
        return this.explosionParticles.scaleAttribute.mul(s).mul(l);
      }), this.explosionParticles.create = (n, o) => {
        const l = d(this.game.ticker.elapsedScaled), r = new Je({
          transparent: true
        }), h = Q.sub(E(n.x, n.y, n.z)).length().div(4).min(1), c = A(this.colorA, this.colorB, h);
        r.colorNode = c.div(Ve(c)).mul(this.intensity), r.fog = false, r.positionNode = this.explosionParticles.positionNode(l), r.scaleNode = this.explosionParticles.scaleNode(l);
        const u = new D(this.explosionParticles.geometry, r);
        return u.position.copy(n), u.count = this.explosionParticles.count, u.rotation.y = o() * Math.PI * 2, u.renderOrder = 2, this.group.add(u), f.to(u.position, {
          y: -this.explosionParticles.fallAmplitude,
          duration: this.explosionParticles.duration
        }), u;
      }, this.game.debug.active) {
        const n = this.debugPanel.addFolder({
          title: "Explosion"
        });
        n.addBinding(this.explosionParticles, "duration", {
          min: 0,
          max: 10,
          step: 0.01
        }), n.addBinding(a, "value", {
          label: "easeOut",
          min: 1,
          max: 10,
          step: 1
        }), n.addBinding(s, "value", {
          label: "scale",
          min: 0,
          max: 1,
          step: 1e-3
        }), n.addBinding(i, "value", {
          label: "radius",
          min: 0,
          max: 10,
          step: 1e-3
        }), n.addBinding(this.explosionParticles, "fallAmplitude", {
          min: 0,
          max: 2,
          step: 1e-3
        });
      }
    }
    createRandom(e) {
      const t = this.game.view.focusPoint.position;
      this.create(new y(t.x + (e() - 0.5) * this.game.view.optimalArea.radius * 1, 0, t.z + (e() - 0.5) * this.game.view.optimalArea.radius * 1), e);
    }
    create(e, t) {
      const s = [];
      s.push(this.anticipationParticles.create(e, t)), f.delayedCall(this.anticipationParticles.duration, () => {
        this.sounds.near[Math.floor(Math.random() * this.sounds.near.length)].play(e);
        const i = this.game.explosions.explode(e, 7, 4, true);
        this.game.reveal.step === 2 && i && this.game.achievements.setProgress("lightning", 1), s.push(this.arc.create(e, t)), s.push(this.explosionParticles.create(e, t));
        const a = Math.max(this.arc.duration, this.explosionParticles.duration);
        f.delayedCall(a, () => {
          for (const n of s) n.removeFromParent(), n.material.dispose();
        });
      });
    }
    update() {
      const e = Math.floor(Date.now() / 1e3);
      if (e !== this.currentSecond) {
        this.currentSecond = e, this.hitChancesBinding.update();
        const t = st.alea(this.currentSecond);
        t() < this.hitChances ? this.createRandom(t) : st.alea(this.currentSecond + 999)() < this.hitChances && this.sounds.distant[Math.floor(Math.random() * this.sounds.distant.length)].play();
      }
    }
  }
  class _a {
    constructor() {
      var _a2;
      this.game = T.getInstance(), this.achievementAchieved = (_a2 = this.game.achievements.groups.get("weatherSnow")) == null ? void 0 : _a2.items[0].achieved, this.size = this.game.view.optimalArea.radius * 2, this.halfSize = this.size * 0.5, this.subdivisions = 256, this.subdivisionSize = this.size / this.subdivisions, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u26C7 Snow",
        expanded: false
      })), this.setNodes(), this.setSnowElevation(), this.setGeometry(), this.setMaterial(), this.setMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setNodes() {
      this.roundedPosition = d(w(0)), this.tracksDelta = d(w(0)), this.elevation = d(-1), this.noiseMultiplier = d(1), this.noise1Frequency = d(0.1), this.noise2Frequency = d(0.07), this.waterDropEdgeLow = d(0.185), this.waterDropEdgeHigh = d(0.235), this.waterDropAmplitude = d(1);
      const e = L(this.game.weather.rain.value, 0.05, 0.3, 0, 1) * L(this.game.weather.temperature.value, 0, -5, 0, 1), t = L(this.game.weather.temperature.value, 0, 10, 0, -1);
      this.elevation.value = L(e + t, -1, 1, -1, 0.5), this.elevationNode = b(([s]) => {
        const i = this.elevation.toVar(), a = this.game.terrain.terrainNode(s.xy), n = s.mul(this.noise1Frequency).xy, o = P(this.game.noises.perlin, n).r, l = s.mul(this.noise2Frequency).xy, r = P(this.game.noises.perlin, l).r;
        i.addAssign(o.mul(r).smoothstep(0, 1).mul(this.noiseMultiplier));
        const h = P(this.game.tracks.renderTarget.texture, s.xy.sub(-this.game.tracks.halfSize).sub(this.roundedPosition).add(this.tracksDelta).div(this.game.tracks.size)), c = h.r.oneMinus(), u = h.g.oneMinus().remapClamp(0.5, 1, 0.25, 1), g = Be(c, u);
        return i.mulAssign(g), i.addAssign(a.b.remap(0, 1, 0, -2)), i;
      }), this.elevationBinding = this.game.debug.addManualBinding(this.debugPanel, this.elevation, "value", {
        label: "elevation",
        min: -1,
        max: 1,
        step: 1e-3
      }, () => {
        const s = this.game.weather.snow.value * Math.max(this.game.dayCycles.progressDelta, 0) * 10;
        let i = this.elevation.value + s;
        return i = He(i, -1, 0.5), i;
      });
    }
    setSnowElevation() {
      this.snowElevation = {};
      const e = new O({
        wireframe: false
      }), t = this.subdivisions + 1;
      e.outputNode = b(() => {
        const s = k().sub(0.5).mul(this.size + this.subdivisionSize).add(this.roundedPosition), i = this.elevationNode(s);
        return C(i, 0, 0, 1);
      })(), this.snowElevation.renderTarget = new ut(t, t, {
        depthBuffer: false,
        type: At,
        format: mt,
        minFilter: j,
        magFilter: j,
        wrapS: te,
        wrapT: te
      }), this.snowElevation.texture = this.snowElevation.renderTarget.texture, this.snowElevation.quadMesh = new Bs(e);
    }
    setGeometry() {
      const e = new Float32Array(this.subdivisions * this.subdivisions * 3 * 3 * 2), t = new Float32Array(this.subdivisions * this.subdivisions * 2 * 3 * 2), s = this.subdivisionSize * 0.5, i = [
        s,
        -s,
        -s,
        -s,
        -s,
        s,
        -s,
        s,
        s,
        s,
        s,
        -s
      ];
      let a = 0;
      for (let n = 0; n < this.subdivisions; n++) for (let o = 0; o < this.subdivisions; o++) {
        const l = a * 3 * 3 * 2, r = a * 2 * 3 * 2, h = (n / (this.subdivisions - 1) - 0.5) * (this.size - this.subdivisionSize), c = (o / (this.subdivisions - 1) - 0.5) * (this.size - this.subdivisionSize);
        e[l + 0] = h + i[0], e[l + 1] = 0, e[l + 2] = c + i[1], e[l + 3] = h + i[2], e[l + 4] = 0, e[l + 5] = c + i[3], e[l + 6] = h + i[4], e[l + 7] = 0, e[l + 8] = c + i[5], e[l + 9] = h + i[6], e[l + 10] = 0, e[l + 11] = c + i[7], e[l + 12] = h + i[8], e[l + 13] = 0, e[l + 14] = c + i[9], e[l + 15] = h + i[10], e[l + 16] = 0, e[l + 17] = c + i[11], t[r + 0] = h, t[r + 1] = c, t[r + 2] = h, t[r + 3] = c, t[r + 4] = h, t[r + 5] = c, t[r + 6] = h, t[r + 7] = c, t[r + 8] = h, t[r + 9] = c, t[r + 10] = h, t[r + 11] = c, a++;
      }
      this.geometry = new Ke(), this.geometry.setAttribute("position", new Wt(e, 3)), this.geometry.setAttribute("pivot", new Wt(t, 2));
    }
    setMaterial() {
      this.color = d(M("#ffffff")), this.fadeEdgeHigh = d(0.5), this.fadeEdgeLow = d(0.022), this.normalNeighbourShift = d(0.2);
      const e = Ce(F()), t = Ce(w()), s = Ce(E()), i = le("pivot"), a = Math.PI * 0.5, n = b(([l]) => {
        const r = l.sub(this.roundedPosition).div(this.size).add(0.5), h = P(this.snowElevation.texture, r).r, c = this.game.terrain.terrainNode(l).r;
        return h.sub(c.mul(2));
      });
      this.material = new V({
        normalNode: s,
        alphaNode: e.smoothstep(this.fadeEdgeLow, this.fadeEdgeHigh),
        transparent: true,
        alphaTest: 0.1
      }), this.material.positionNode = b(() => {
        const l = Z.toVar();
        l.x.addAssign(this.roundedPosition.x), l.z.addAssign(this.roundedPosition.y);
        const r = E(i.x, 0, i.y);
        r.x.addAssign(this.roundedPosition.x), r.z.addAssign(this.roundedPosition.y);
        const h = r.add(E(-this.subdivisionSize, 0, -this.subdivisionSize)), c = r.add(E(this.subdivisionSize, 0, -this.subdivisionSize)), u = r.add(E(this.subdivisionSize, 0, this.subdivisionSize)), g = r.add(E(-this.subdivisionSize, 0, this.subdivisionSize));
        r.y.assign(n(r.xz)), h.y.assign(n(h.xz).sub(r.y)), c.y.assign(n(c.xz).sub(r.y)), u.y.assign(n(u.xz).sub(r.y)), g.y.assign(n(g.xz).sub(r.y));
        const p = h.y.sub(u.y).abs(), v = c.y.sub(g.y).abs(), x = F(0);
        De(p.lessThan(v), () => {
          x.assign(a);
        }), l.xz.assign(_e(l.xz, x, r.xz));
        const S = l, I = S.add(E(this.normalNeighbourShift, 0, 0)), B = S.add(E(0, 0, this.normalNeighbourShift.negate()));
        S.y.assign(n(S.xz)), I.y.assign(n(I.xz)), B.y.assign(n(B.xz));
        const U = this.game.terrain.terrainNode(S.xz);
        this.game.terrain.colorNode(U);
        const q = Jt(S.sub(I), S.sub(B)).normalize();
        s.assign(Qt.mul(C(q, 0)));
        const G = U.b.remapClamp(this.waterDropEdgeLow, this.waterDropEdgeHigh, 0, this.waterDropAmplitude.negate());
        return S.y.addAssign(G), e.assign(S.y.sub(U.b.mul(-2))), t.assign(S.xz), S;
      })();
      const o = this.material.outputNode;
      this.glitterViewMultiplier = 4e-4, this.glitterTimeMultiplier = 4e-4, this.glitterVariation = d(0), this.glitterScarcity = d(1e3), this.glitterIntensity = d(2), this.glitterPerlinFrequency = d(0.05), this.glitterHashFrequency = d(0.2), this.material.outputNode = b(() => {
        const l = F(0), r = Q.xz.mul(this.glitterHashFrequency), h = P(this.game.noises.hash, r).r.mul(2).add(this.glitterVariation).mod(2).sub(1).abs();
        l.addAssign(h);
        const c = Q.xz.mul(this.glitterPerlinFrequency), g = P(this.game.noises.perlin, c).r.remapClamp(0, 0.5, 0, 1);
        return l.mulAssign(g), l.assign(l.pow(this.glitterScarcity)), l.mulAssign(this.glitterIntensity), C(o.rgb.add(l), o.a);
      })(), this.game.debug.active && (this.debugPanel.addBinding(this.material, "wireframe"), this.game.debug.addThreeColorBinding(this.debugPanel, this.color.value, "color"), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this.fadeEdgeHigh, "value", {
        label: "fadeEdgeHigh",
        min: -2,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBinding(this.fadeEdgeLow, "value", {
        label: "fadeEdgeLow",
        min: -2,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this.normalNeighbourShift, "value", {
        label: "normalNeighbourShift",
        min: 0,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this.noiseMultiplier, "value", {
        label: "noiseMultiplier",
        min: 0,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBinding(this.noise1Frequency, "value", {
        label: "noise1Frequency",
        min: 0,
        max: 0.4,
        step: 1e-3
      }), this.debugPanel.addBinding(this.noise2Frequency, "value", {
        label: "noise2Frequency",
        min: 0,
        max: 0.4,
        step: 1e-3
      }), this.debugPanel.addBinding(this.waterDropEdgeLow, "value", {
        label: "waterDropEdgeLow",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.waterDropEdgeHigh, "value", {
        label: "waterDropEdgeHigh",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.waterDropAmplitude, "value", {
        label: "waterDropAmplitude",
        min: 0,
        max: 5,
        step: 1e-3
      }), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this, "glitterViewMultiplier", {
        min: 0,
        max: 1e-3,
        step: 1e-6
      }), this.debugPanel.addBinding(this, "glitterTimeMultiplier", {
        min: 0,
        max: 1e-3,
        step: 1e-6
      }), this.debugPanel.addBinding(this.glitterScarcity, "value", {
        label: "glitterScarcity",
        min: 100,
        max: 1e4,
        step: 1
      }), this.debugPanel.addBinding(this.glitterIntensity, "value", {
        label: "glitterIntensity",
        min: 0,
        max: 10,
        step: 0.01
      }), this.debugPanel.addBinding(this.glitterPerlinFrequency, "value", {
        label: "glitterPerlinFrequency",
        min: 0,
        max: 0.1,
        step: 1e-4
      }), this.debugPanel.addBinding(this.glitterHashFrequency, "value", {
        label: "glitterHashFrequency",
        min: 0,
        max: 1,
        step: 1e-4
      }));
    }
    setMesh() {
      this.mesh = new D(this.geometry, this.material), this.mesh.castShadow = false, this.mesh.receiveShadow = true, this.mesh.visible = false, this.mesh.frustumCulled = false, this.game.scene.add(this.mesh);
    }
    update() {
      if (this.elevationBinding.update(), this.elevation.value > -0.9) {
        this.mesh.visible = true, !this.achievementAchieved && this.game.reveal.step === 2 && this.elevation.value > 0 && (this.achievementAchieved = true, this.game.achievements.setProgress("weatherSnow", 1)), this.glitterVariation.value += this.game.ticker.deltaScaled * this.glitterTimeMultiplier + this.game.view.delta.length() * this.glitterViewMultiplier, this.roundedPosition.value.x = Math.round(this.game.view.optimalArea.position.x / this.subdivisionSize) * this.subdivisionSize, this.roundedPosition.value.y = Math.round(this.game.view.optimalArea.position.z / this.subdivisionSize) * this.subdivisionSize, this.tracksDelta.value.set(this.roundedPosition.value.x - this.game.tracks.focusPoint.x, this.roundedPosition.value.y - this.game.tracks.focusPoint.y);
        const e = Fe.resetRendererState(this.game.rendering.renderer);
        this.game.rendering.renderer.setPixelRatio(1), this.game.rendering.renderer.setRenderTarget(this.snowElevation.renderTarget), this.snowElevation.quadMesh.render(this.game.rendering.renderer), this.game.rendering.renderer.setRenderTarget(null), Fe.restoreRendererState(this.game.rendering.renderer, e);
      } else this.mesh.visible = false;
    }
  }
  class Qa {
    constructor() {
      this.game = T.getInstance(), this.visible = false, this.text = "", this.position = new y(), this.pending = null, this.resolution = 64, this.height = this.resolution, this.width = this.resolution * 16, this.textWidth = 0, this.textPaddingHorizontal = 10, this.textOffsetVertical = 2, this.font = `700 ${this.height}px "Amatic SC"`, this.group = new at(), this.group.rotation.reorder("YXZ"), this.group.rotation.x = -Math.PI * 0.25, this.group.rotation.y = Math.PI * 0.25, this.group.visible = false, this.game.scene.add(this.group), this.setCanvas(), this.setMessage(), this.setImage();
    }
    setCanvas() {
      this.canvas = {}, this.canvas.element = document.createElement("canvas"), this.canvas.element.width = this.width, this.canvas.element.height = this.height, this.canvas.texture = new Ne(this.canvas.element), this.canvas.texture.minFilter = W, this.canvas.texture.magFilter = W, this.canvas.texture.generateMipmaps = false, this.context = this.canvas.element.getContext("2d"), this.context.font = this.font;
    }
    setMessage() {
      const e = new Y(1, 1), t = new O({
        color: 2236962,
        transparent: true,
        depthWrite: false,
        depthTest: false
      });
      this.textRatio = d(1), t.outputNode = b(() => {
        const s = k().mul(w(this.textRatio, 1)), i = P(this.canvas.texture, s).r, a = A(M(2236962), M(16777215), i), n = this.game.fog.strength.mix(a, this.game.fog.color);
        return C(n.rgb, 1);
      })(), this.message = new D(e, t), this.message.scale.set(0.01, 0.01, 0.01), this.message.renderOrder = 4, this.group.add(this.message);
    }
    setImage() {
      const t = new Y(0.375, 0.25);
      this.imageTexture = new Ne(), this.imageTexture.colorSpace = he, this.imageTexture.magFilter = W, this.imageTexture.minFilter = W, this.imageTexture.generateMipmaps = false;
      const s = new Image();
      s.addEventListener("load", () => {
        this.imageTexture.colorSpace = he, this.imageTexture.magFilter = W, this.imageTexture.minFilter = W, this.imageTexture.generateMipmaps = false, this.imageTexture.needsUpdate = true;
      }), this.imageTexture.image = s;
      const i = new O({
        color: 16777215,
        transparent: true,
        depthWrite: false,
        depthTest: false
      });
      i.outputNode = b(() => {
        const a = P(this.imageTexture, k()), n = this.game.fog.strength.mix(a, this.game.fog.color);
        return C(n.rgb, 1);
      })(), this.image = new D(t, i), this.image.scale.set(0.01, 0.01, 0.01), this.image.position.y = 0.25, this.image.position.z = 0.2, this.image.rotation.z = -0.15, this.image.renderOrder = 5, this.group.add(this.image);
    }
    tryShow(e = "", t = null, s = null) {
      this.visible ? (this.pending = {
        text: e,
        position: t,
        imageUrl: s
      }, this.hide()) : (this.updateText(e), this.updatePosition(t), this.updateImage(s), this.show());
    }
    hide() {
      f.to(this.message.scale, {
        overwrite: true,
        duration: 0.3,
        x: 0.01,
        y: 0.01,
        z: 0.01,
        onComplete: () => {
          this.visible = false, this.group.visible = false, this.pending && (this.updateText(this.pending.text), this.updatePosition(this.pending.position), this.updateImage(this.pending.imageUrl), this.pending = null, this.show());
        }
      }), f.to(this.image.scale, {
        overwrite: true,
        duration: 0.3,
        x: 0.01,
        y: 0.01,
        z: 0.01
      });
    }
    show() {
      this.visible = true, this.group.visible = true, f.to(this.message.scale, {
        overwrite: true,
        duration: 0.5,
        ease: "back.out(3)",
        x: 0.5 * this.textWidth / this.height,
        y: 0.5 * 1,
        z: 1
      }), this.image.position.x = 0.5 * 0.5 * this.textWidth / this.height, f.to(this.image.scale, {
        overwrite: true,
        duration: 0.5,
        delay: 0.3,
        ease: "back.out(3)",
        x: 1,
        y: 1,
        z: 1
      });
    }
    updateText(e = "") {
      if (e === this.text) return;
      const t = this.context.measureText(e);
      this.textWidth = Math.min(Math.ceil(t.width) + this.textPaddingHorizontal * 2 + 2, this.width), this.textRatio.value = this.textWidth / this.width, this.context.font = this.font, this.context.fillStyle = "#000000", this.context.fillRect(0, 0, this.width, this.height), this.context.font = this.font, this.context.fillStyle = "#ffffff", this.context.textAlign = "start", this.context.textBaseline = "middle", this.context.fillText(e, this.textPaddingHorizontal + 1, this.height * 0.5 + this.textOffsetVertical), this.canvas.texture.needsUpdate = true, this.text = e;
    }
    updatePosition(e = null) {
      e === null || e.equals(this.position) || (this.group.position.copy(e), this.position.copy(e));
    }
    updateImage(e = null) {
      e ? (this.imageTexture.image.src = this.imageTexture.image.src = e, this.image.visible = true) : this.image.visible = false;
    }
  }
  class Ja {
    constructor() {
      this.game = T.getInstance(), this.count = parseInt("30"), this.setSounds(), this.setFlames(), this.setData(), this.setBubble(), this.setMenu(), this.setInputs(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setSounds() {
      this.sounds = {}, this.sounds.ignite = this.game.audio.register({
        path: "sounds/fire/ignite-1.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.1
      }), this.sounds.flicker = this.game.audio.register({
        path: "sounds/fire/Cloth_Movement_Hung_Clothes_Blowing_in_Wind_ODY-1520-031.mp3",
        autoplay: true,
        loop: true,
        volume: 0.5,
        positions: new y(),
        distanceFade: 10
      });
    }
    setFlames() {
      this.revealArray = new Float32Array(this.count), this.revealBuffer = new Ii(this.revealArray, 1), this.revealBufferNeedsUpdate = true;
      const e = Bi(this.revealBuffer, "float", this.count).toAttribute(), t = new Y(1.5, 1.5 * 2, 1, 16);
      t.rotateY(Math.PI * 0.25);
      const s = new O({
        transparent: true,
        wireframe: false,
        depthWrite: false
      });
      s.positionNode = b(() => {
        const i = Z.toVar(), a = tt(re), n = k().y.remapClamp(0.25, 1, 0, 1).mul(0.6), o = w(a, k().y.mul(0.5).sub(this.game.ticker.elapsedScaledUniform.mul(0.1))), l = P(this.game.noises.perlin, o).r.sub(0.5).mul(n);
        return i.x.addAssign(l), i;
      })(), s.outputNode = b(() => {
        const i = w(k().x, k().y.oneMinus()), a = P(this.game.resources.whisperFlameTexture, i).r.sub(e.oneMinus()), n = P(this.game.materials.gradientTexture, w(0, a)), o = rt(0.05, 0.3, a);
        return C(E(n.mul(2)), o.mul(e));
      })(), this.flames = new lt(t, s, this.count), this.flames.renderOrder = 3, this.flames.frustumCulled = false, this.flames.visible = true, this.flames.position.y = 0.25, this.game.scene.children.splice(1, 0, this.flames);
    }
    setData() {
      this.data = {}, this.data.needsUpdate = false, this.data.items = [];
      for (let e = 0; e < this.count; e++) this.data.items.push({
        index: e,
        matrix: new es(),
        position: new y(),
        available: true,
        needsUpdate: false
      });
      if (this.data.findById = (e) => this.data.items.find((t) => t.id === e), this.data.findAvailable = () => {
        const e = this.data.items.find((t) => t.available);
        return e ? (e.available = false, e) : (console.warn("can't find available item"), null);
      }, this.data.insert = (e) => {
        let t = this.data.findById(e.id);
        if (t) {
          const s = {
            value: 1
          };
          f.to(s, {
            value: 0,
            onUpdate: () => {
              this.revealArray[t.index] = s.value, this.revealBufferNeedsUpdate = true;
            },
            onComplete: () => {
              t.message = e.message, t.countryCode = e.countrycode, t.position.set(e.x, e.y, e.z), t.matrix.setPosition(t.position), t.needsUpdate = true, t === this.bubble.closest && (this.bubble.closest = null), f.to(s, {
                value: 1,
                onUpdate: () => {
                  this.revealArray[t.index] = s.value, this.revealBufferNeedsUpdate = true;
                }
              });
            }
          });
        } else if (t = this.data.findAvailable(), t) {
          const s = {
            value: 0
          };
          f.to(s, {
            value: 1,
            onUpdate: () => {
              this.revealArray[t.index] = s.value, this.revealBufferNeedsUpdate = true;
            }
          }), t.id = e.id, t.available = false, t.message = e.message, t.countryCode = e.countrycode, t.position.set(e.x, e.y, e.z), t.matrix.setPosition(t.position), t.needsUpdate = true;
        }
      }, this.data.delete = (e) => {
        let t = this.data.findById(e.id);
        if (t) {
          t.available = true;
          const s = {
            value: 1
          };
          f.to(s, {
            value: 0,
            onUpdate: () => {
              this.revealArray[t.index] = s.value, this.revealBufferNeedsUpdate = true;
            }
          });
        }
      }, this.game.server.events.on("message", (e) => {
        if (e.type === "init" || e.type === "whispersInsert") for (const t of e.whispers) this.data.insert(t);
        else if (e.type === "whispersDelete") for (const t of e.whispers) this.data.delete(t);
      }), this.game.server.initData) for (const e of this.game.server.initData.whispers) this.data.insert(e);
    }
    setBubble() {
      this.bubble = {}, this.bubble.instance = new Qa(), this.bubble.closest = null, this.bubble.minDistance = 3;
    }
    setMenu() {
      this.menu = {}, this.menu.instance = this.game.menu.items.get("whispers"), this.menu.container = this.menu.instance.contentElement, this.menu.inputGroup = this.menu.container.querySelector(".js-input-group"), this.menu.input = this.menu.inputGroup.querySelector(".js-input"), this.menu.previewMessage = this.menu.instance.previewElement.querySelector(".js-preview-message"), this.menu.previewMessageText = this.menu.previewMessage.querySelector(".js-text"), this.menu.previewMessageFlag = this.menu.previewMessage.querySelector(".js-flag");
      const e = (i = "", a = false, n = false, o = false) => {
        let l = i;
        return a && (l = l.trim()), o && (l = l.replace(si(), "")), n && (l = l.substring(0, this.count)), l;
      }, t = () => {
        const i = e(this.menu.input.value, true, true, true);
        i.length && this.game.server.connected && (this.game.server.send({
          type: "whispersInsert",
          message: i,
          countryCode: this.menu.inputFlag.country ? this.menu.inputFlag.country.code : "",
          x: this.game.player.position.x,
          y: this.game.player.position.y,
          z: this.game.player.position.z
        }), this.game.menu.close(), this.game.achievements.setProgress("whisper", 1), f.delayedCall(0.3, () => {
          this.sounds.ignite.play();
        }));
      }, s = () => {
        this.menu.input.value.length && this.game.server.connected ? this.menu.inputGroup.classList.add("is-valide") : this.menu.inputGroup.classList.remove("is-valide");
      };
      this.menu.input.addEventListener("input", () => {
        const i = e(this.menu.input.value, false, true, true);
        this.menu.previewMessageText.textContent = i.length ? i : "Your message here", this.menu.input.textContent !== i && (this.menu.input.value = i), s();
      }), this.menu.previewMessageText.addEventListener("input", (i) => {
        const a = e(this.menu.previewMessageText.textContent, false, true, true);
        this.menu.previewMessageText.textContent !== a && (this.menu.previewMessageText.textContent = a), this.menu.input.value = a, s();
      }), this.menu.previewMessageText.addEventListener("blur", () => {
        const i = e(this.menu.input.value, true, true, true);
        this.menu.previewMessageText.textContent = i !== "" ? i : "Your message here", s();
      }), this.menu.previewMessageText.addEventListener("keydown", (i) => {
        i.key === "Enter" && t();
      }), this.menu.inputGroup.addEventListener("submit", (i) => {
        i.preventDefault(), t();
      }), this.menu.instance.events.on("closed", () => {
        this.menu.previewMessageText.textContent = "Your message here", this.menu.input.value = "", s(), this.menu.inputFlag.close();
      }), this.game.server.events.on("connected", () => {
        s();
      }), this.game.server.events.on("disconnected", () => {
        s();
      }), this.menu.inputFlag = new Vs(this.menu.inputGroup.querySelector(".js-input-flag")), this.menu.inputFlag.events.on("change", (i) => {
        i ? (this.menu.previewMessageFlag.classList.add("is-visible"), this.menu.previewMessageFlag.style.backgroundImage = `url(${i.imageUrl})`) : this.menu.previewMessageFlag.classList.remove("is-visible");
      }), this.menu.inputFlag.country && (this.menu.previewMessageFlag.classList.add("is-visible"), this.menu.previewMessageFlag.style.backgroundImage = `url(${this.menu.inputFlag.country.imageUrl})`);
    }
    setInputs() {
      this.game.inputs.addActions([
        {
          name: "whisper",
          categories: [
            "wandering"
          ],
          keys: [
            "Keyboard.KeyT"
          ]
        }
      ]), this.game.inputs.events.on("whisper", (e) => {
        e.active && this.game.menu.open("whispers");
      });
    }
    update() {
      let e = false;
      for (const i of this.data.items) i.oldRevealValue = this.revealArray[i.index], i.needsUpdate && (e = true);
      if (e) {
        this.data.items.sort((a, n) => a.position.x + a.position.z - (n.position.x + n.position.z));
        let i = 0;
        for (const a of this.data.items) a.index = i++, this.revealArray[a.index] = a.oldRevealValue;
      }
      for (const i of this.data.items) i.needsUpdate && (this.flames.setMatrixAt(i.index, i.matrix), i.needsUpdate = false);
      e && (this.flames.instanceMatrix.needsUpdate = true);
      let t = null, s = 1 / 0;
      for (const i of this.data.items) if (!i.available) {
        const a = this.game.player.position.distanceTo(i.position);
        a < s && (s = a, t = i);
      }
      if (s < this.bubble.minDistance) {
        if (t !== this.bubble.closest) {
          const i = t.position.clone();
          i.y += 1.25;
          let a = null;
          if (t.countryCode) {
            const n = this.menu.inputFlag.countries.get(t.countryCode);
            n && (a = n.imageUrl);
          }
          this.bubble.instance.tryShow(t.message, i, a), this.bubble.closest = t;
        }
      } else this.bubble.closest = null, this.bubble.instance.hide();
      this.revealBufferNeedsUpdate && (this.revealBuffer.needsUpdate = true, this.revealBufferNeedsUpdate = false), t && this.sounds.flicker.positions[0].copy(t.position);
    }
  }
  class en {
    constructor() {
      this.game = T.getInstance(), this.resolution = 512, this.size = 40, this.halfSize = this.size / 2, this.tracks = [], this.focusPoint = new H(), this.camera = new Ni(-this.halfSize, this.halfSize, this.halfSize, -this.halfSize, 0.1, 10), this.camera.position.y = 5, this.camera.rotation.x = -Math.PI * 0.5, this.scene = new Ns(), this.scene.add(this.camera), this.renderTarget = new ut(this.resolution, this.resolution, {
        minFilter: j,
        magFilter: j,
        wrapS: te,
        wrapT: te
      }), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 9);
    }
    setDebugPlane() {
      const e = new O({
        map: this.renderTarget.texture,
        transparent: false,
        depthTest: false,
        depthWrite: false
      });
      e.vertexNode = b(() => {
        const i = ns.x.div(ns.y), a = le("position").mul(E(1, i, 0)).mul(0.5).sub(E(0.75, 0.5, 0));
        return C(a, 1);
      })();
      const t = new Y(1, 1), s = new D(t, e);
      s.position.y = 5, s.position.x = -3, s.frustumCulled = false, s.renderOrder = 1, this.game.scene.add(s);
    }
    add(e) {
      return this.tracks.push(e), this.scene.add(e.trail.mesh), e;
    }
    remove(e) {
      this.tracks = this.tracks.filter((t) => t !== e);
    }
    update() {
      this.camera.position.x = this.focusPoint.x, this.camera.position.z = this.focusPoint.y;
      const e = Fe.resetRendererState(this.game.rendering.renderer);
      this.game.rendering.renderer.setPixelRatio(1), this.game.rendering.renderer.setRenderTarget(this.renderTarget), this.game.rendering.renderer.render(this.scene, this.camera), this.game.rendering.renderer.setRenderTarget(null), Fe.restoreRendererState(this.game.rendering.renderer, e);
    }
  }
  class us {
    constructor(e = 1, t = "r") {
      this.game = T.getInstance(), this.subdivisions = 128, this.timeThrottle = 1 / 30, this.lastTime = 0, this.thickness = e;
      const s = {
        r: E(1, 0, 0),
        g: E(0, 1, 0),
        b: E(0, 0, 1)
      };
      this.channelVec3 = s[t], this.distanceThrottle = 0.2, this.lastPosition = new y(1 / 0, 1 / 0, 1 / 0), this.setDataTexture(), this.setTrail();
    }
    setDataTexture() {
      this.dataTexture = new Ft(new Float32Array(this.subdivisions * 4), this.subdivisions, 1, Ds, Rs);
    }
    setTrail() {
      this.trail = {}, this.trail.geometry = new Y(1, 1, this.subdivisions, 1), this.trail.geometry.translate(0.5, 0, 0), this.trail.material = new O({
        wireframe: false,
        depthTest: false,
        transparent: true,
        blending: Di
      });
      const e = Ce(C());
      this.trail.material.positionNode = b(() => {
        const t = F(1).div(this.subdivisions), s = k().x.sub(t.mul(0.5)), i = w(s, 0.5), a = w(s.sub(t), 0.5);
        e.assign(P(this.dataTexture, i));
        const n = P(this.dataTexture, a), o = ft(e.z.sub(n.z), e.x.sub(n.x)), l = Ri(Z.y).mul(-1), r = w(wt(o.add(l.mul(Math.PI * 0.5))), de(o.add(l.mul(Math.PI * 0.5)))).mul(this.thickness);
        return E(e.x.add(r.x), e.y, e.z.add(r.y));
      })(), this.trail.material.outputNode = b(() => {
        const t = k().x.smoothstep(0.5, 1).oneMinus(), s = k().x.smoothstep(0, 0.05), i = e.a, a = Lt(Ze.x.remapClamp(0, 0.2, 0, 1), Ze.x.remapClamp(0.8, 1, 1, 0), Ze.y.remapClamp(0, 0.2, 0, 1), Ze.y.remapClamp(0.8, 1, 1, 0)), n = k().y.sub(0.5).abs().mul(2).oneMinus(), o = t.mul(s).mul(i).mul(n).mul(a);
        return C(this.channelVec3, o);
      })(), this.trail.mesh = new D(this.trail.geometry, this.trail.material), this.trail.mesh.frustumCulled = false, this.game.scene.add(this.trail.mesh);
    }
    setDebugPlane() {
      this.debugPlane = new D(new Y(8, 1), new yt({
        map: this.dataTexture
      })), this.debugPlane.position.y = 2, this.game.scene.add(this.debugPlane);
    }
    update(e, t) {
      const s = this.dataTexture.source.data.data;
      if (this.game.ticker.elapsed - this.lastTime > this.timeThrottle && this.lastPosition.clone().sub(e).length() > this.distanceThrottle) {
        for (let o = this.subdivisions - 1; o >= 0; o--) {
          const l = o * 4;
          s[l] = s[l - 4], s[l + 1] = s[l - 3], s[l + 2] = s[l - 2], s[l + 3] = s[l - 1];
        }
        this.lastTime = this.game.ticker.elapsed, this.lastPosition.copy(e);
      }
      s[0] = e.x, s[1] = e.y, s[2] = e.z, s[3] = t ? 1 : 0, this.dataTexture.needsUpdate = true;
    }
  }
  const tn = b(([m, e]) => {
    const t = qe(m, e), s = Jt(m, e), i = s.length();
    s.assign(s.normalize());
    const a = t, n = i, o = a.oneMinus();
    return Fi(o.mul(s.x).mul(s.x).add(a), o.mul(s.x).mul(s.y).sub(n.mul(s.z)), o.mul(s.x).mul(s.z).add(n.mul(s.y)), o.mul(s.x).mul(s.y).add(n.mul(s.z)), o.mul(s.y).mul(s.y).add(a), o.mul(s.y).mul(s.z).sub(n.mul(s.x)), o.mul(s.x).mul(s.z).sub(n.mul(s.y)), o.mul(s.y).mul(s.z).add(n.mul(s.x)), o.mul(s.z).mul(s.z).add(a));
  });
  class sn {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F308} Trails",
        expanded: false
      })), this.subdivisions = 32, this.texel = 1 / this.subdivisions, this.distanceThrottle = 0.4, this.emissiveMultiplier = d(5), this.fresnelOffset = d(0.25), this.decay = 0.2, this.items = [], this.setGeometry(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10), this.game.debug.active && (this.debugPanel.addBinding(this.emissiveMultiplier, "value", {
        label: "emissiveMultiplier",
        min: 0,
        max: 10,
        step: 0.01
      }), this.debugPanel.addBinding(this.fresnelOffset, "value", {
        label: "fresnelOffset",
        min: 0,
        max: 1,
        step: 0.01
      }), this.debugPanel.addBinding(this, "decay", {
        min: 0,
        max: 1,
        step: 1e-3
      }));
    }
    setGeometry() {
      this.geometry = new Zt(0.1, 0.1, 1, 4, this.subdivisions, true), this.geometry.rotateY(Math.PI * 0.25), this.geometry.rotateX(-Math.PI * 0.5), this.geometry.translate(0, 0, 0.5), this.geometry.deleteAttribute("uv");
    }
    create() {
      const e = {};
      e.lastPosition = new y(1 / 0, 1 / 0, 1 / 0), e.position = new y(), e.alpha = 0, e.dataTexture = new Ft(new Float32Array(this.subdivisions * 4), this.subdivisions, 1, Ds, Rs);
      const t = new O({
        transparent: true,
        depthWrite: false
      }), s = E().toVarying(), i = F(0).toVarying(), a = F(0).toVarying();
      return t.positionNode = b(() => {
        i.assign(Z.z.oneMinus());
        const n = P(e.dataTexture, w(i, 0.5)), o = n.xyz, r = P(e.dataTexture, w(i.add(this.texel), 0.5)).xyz.sub(o).normalize(), h = tn(r, E(0, 0, -1)), c = E(Z.x, Z.y, 0), u = h.mul(c);
        return s.assign(Qt.mul(C(h.mul(le("normal")), 0))), a.assign(n.w), o.add(u);
      })(), t.outputNode = b(() => {
        const n = s.dot(E(0, 0, 1)).abs().oneMinus(), o = w(0.5, i.oneMinus().sub(n.oneMinus().mul(this.fresnelOffset))), l = P(this.game.materials.gradientTexture, o).rgb.mul(this.emissiveMultiplier);
        return C(E(l), i.oneMinus().mul(a));
      })(), e.mesh = new D(this.geometry, t), e.mesh.renderOrder = 1, e.mesh.frustumCulled = false, this.game.scene.add(e.mesh), this.items.push(e), e;
    }
    update() {
      for (const e of this.items) {
        const t = e.dataTexture.source.data.data;
        if (e.lastPosition.clone().sub(e.position).length() > this.distanceThrottle) {
          for (let a = this.subdivisions - 1; a >= 0; a--) {
            const n = a * 4;
            t[n] = t[n - 4], t[n + 1] = t[n - 3], t[n + 2] = t[n - 2], t[n + 3] = t[n - 1];
          }
          e.lastPosition.copy(e.position);
        }
        for (let a = this.subdivisions - 1; a >= 0; a--) {
          const n = a * 4;
          t[n + 3] = Math.max(t[n + 3] - this.game.ticker.deltaScaled * this.decay, 0);
        }
        t[0] = e.position.x, t[1] = e.position.y, t[2] = e.position.z, t[3] = e.alpha, e.dataTexture.needsUpdate = true;
      }
    }
  }
  class $s {
    constructor(e) {
      this.game = T.getInstance(), this.model = e, this.setParts(), this.setMainGroundTrack(), this.setWheels(), this.setBlinkers(), this.setBackLights(), this.setAntenna(), this.setBoostTrails(), this.setBoostAnimation(), this.setScreenPosition(), this.setPaints(), this.tickCallback = () => {
        this.update();
      }, this.game.ticker.events.on("tick", this.tickCallback, 8);
    }
    destroy() {
      this.game.ticker.events.off("tick", this.tickCallback), this.blinkers && (this.game.inputs.events.off("left", this.blinkers.leftCallback), this.game.inputs.events.off("right", this.blinkers.rightCallback));
      for (let e in this.parts) this.parts[e].removeFromParent();
      this.game.tracks.remove(this.mainGroundTrack);
      for (const e of this.wheels.items) this.game.tracks.remove(e.groundTrack);
    }
    setParts() {
      this.parts = {};
      const e = [
        "bodyPainted",
        "chassis",
        "blinkerLeft",
        "blinkerRight",
        "stopLights",
        "backLights",
        "wheelContainer",
        "antenna",
        "cell1",
        "cell2",
        "cell3",
        "energy"
      ];
      for (let t = 0; t < e.length; t++) e[t] = new RegExp(`^(${e[t]})`, "i");
      this.model.traverse((t) => {
        t.isMesh && (t.receiveShadow = true, t.castShadow = true, t.material.shadowSide = ys);
        for (const s of e) {
          const i = t.name.match(s);
          i && (this.parts[i[0]] = t);
        }
      }), this.parts.chassis.rotation.reorder("YXZ"), this.game.materials.updateObject(this.parts.chassis), this.game.scene.add(this.parts.chassis), this.parts.blinkerLeft && (this.parts.blinkerLeft.visible = false), this.parts.blinkerRight && (this.parts.blinkerRight.visible = false), this.parts.stopLights && (this.parts.stopLights.visible = false), this.parts.backLights && (this.parts.backLights.visible = false), this.game.materials.updateObject(this.parts.wheelContainer);
    }
    setPaints() {
      var _a2, _b, _c;
      this.paints = {}, this.paints.choices = {}, this.paints.choices.red = this.game.materials.getFromName("redGradient"), this.paints.choices.orange = this.game.materials.createGradient("orangeGradient", "#ff940d", "#af0071", (_a2 = this.game.materials.debugPanel) == null ? void 0 : _a2.addFolder({
        title: "orangeGradient"
      })), this.paints.choices.white = this.game.materials.createGradient("whiteGradient", "#ffffff", "#b5b5b5", (_b = this.game.materials.debugPanel) == null ? void 0 : _b.addFolder({
        title: "whiteGradient"
      })), this.paints.choices.black = this.game.materials.createGradient("blackGradient", "#626262", "#262526", (_c = this.game.materials.debugPanel) == null ? void 0 : _c.addFolder({
        title: "blackGradient"
      }));
      {
        const e = this.paints.choices.red.clone(), t = e.outputNode, s = d(M("#ff9c20")), i = d(M("#ff0000")), a = d(7.75);
        if (e.outputNode = b(() => {
          {
            const n = k(1).toVar(), o = n.sub(w(0, this.game.ticker.elapsedScaledUniform.mul(-0.075))).mul(w(0.96 * 1.3, 0.35 * 1.3)), l = P(this.game.noises.voronoi, o).r, r = n.sub(w(0, this.game.ticker.elapsedScaledUniform.mul(-0.041))).mul(w(1.28 * 1.3, 0.75 * 1.3)), h = P(this.game.noises.voronoi, r).r, c = Be(l, h), u = n.y.oneMinus(), g = c.step(u), p = A(s, i, n.y).mul(a);
            t.rgb.assign(A(t.rgb, p, g));
          }
          return t;
        })(), this.paints.choices.flames = e, this.game.debug.active && this.game.materials.debugPanel) {
          const n = this.game.materials.debugPanel.addFolder({
            title: "flames",
            expanded: true
          });
          this.game.debug.addThreeColorBinding(n, s.value, "flamesColorA"), this.game.debug.addThreeColorBinding(n, i.value, "flamesColorB"), n.addBinding(a, "value", {
            label: "emissiveStrength",
            min: 1,
            max: 10,
            step: 1e-3
          });
        }
      }
      {
        const e = new yt({
          wireframe: false
        }), t = d(M("#6053ff")), s = d(30), i = d(10);
        if (e.outputNode = b(() => {
          const a = Cs.div(256).fract(), n = P(this.game.resources.behindTheSceneStarsTexture, a).rgb.pow(2).mul(i), l = Q.sub(It).normalize().dot(vt).remapClamp(-0.2, -0.4, 1, 0), r = t.mul(s), h = A(n, r, l);
          return h.assign(V.revealDiscardNodeBuilder(this.game, h)), C(h, 1);
        })(), this.paints.choices.abyssal = e, this.game.debug.active && this.game.materials.debugPanel) {
          const a = this.game.materials.debugPanel.addFolder({
            title: "abyssal",
            expanded: true
          });
          this.game.debug.addThreeColorBinding(a, t.value, "fresnelColor"), a.addBinding(s, "value", {
            label: "fresnelIntensity",
            min: 1,
            max: 40,
            step: 1e-3
          }), a.addBinding(i, "value", {
            label: "starsIntensity",
            min: 1,
            max: 40,
            step: 1e-3
          });
        }
      }
      this.paints.changeTo = (e = "red") => {
        const t = this.paints.choices[e];
        if (!t) return false;
        this.parts.bodyPainted.material = t;
        for (const s of this.wheels.items) s.painted && (s.painted.material = t);
      }, this.paints.changeTo(this.game.achievements.rewards.current.name), this.game.achievements.events.on("rewardActiveChange", (e) => {
        this.paints.changeTo(e.name);
      });
    }
    setMainGroundTrack() {
      this.mainGroundTrack = this.game.tracks.add(new us(1.5, "g"));
    }
    setWheels() {
      this.wheels = {}, this.wheels.items = [], this.wheels.steering = 0;
      for (let e = 0; e < 4; e++) {
        const t = {};
        t.container = this.parts.wheelContainer.clone(true), this.parts.chassis.add(t.container), t.container.traverse((s) => {
          s.name.match(/^wheelSuspension/) && (t.suspension = s), s.name.match(/^wheelCylinder/) && (t.cylinder = s), s.name.match(/^wheelPainted/) && (t.painted = s);
        }), t.cylinder.position.set(0, 0, 0), (e === 0 || e === 2) && (t.container.rotation.y = Math.PI), t.groundTrack = this.game.tracks.add(new us(0.5, "r")), this.wheels.items.push(t);
      }
    }
    setBlinkers() {
      if (!this.parts.blinkerLeft) return;
      this.blinkers = {};
      let e = false, t = false;
      const s = () => {
        e || (e = true, t = true, this.parts.blinkerLeft.visible = this.game.inputs.actions.get("left").active ? t : false, this.parts.blinkerRight.visible = this.game.inputs.actions.get("right").active ? t : false, f.delayedCall(0.8, i));
      }, i = () => {
        t = !t, this.parts.blinkerLeft.visible = this.game.inputs.actions.get("left").active ? t : false, this.parts.blinkerRight.visible = this.game.inputs.actions.get("right").active ? t : false, !this.game.inputs.actions.get("left").active && !this.game.inputs.actions.get("right").active && !t ? e = false : f.delayedCall(0.8, i);
      };
      this.blinkers.leftCallback = (a) => {
        a.active && s();
      }, this.blinkers.rightCallback = (a) => {
        a.active && s();
      }, this.game.inputs.events.on("left", this.blinkers.leftCallback), this.game.inputs.events.on("right", this.blinkers.rightCallback);
    }
    setBackLights() {
      this.backLights = {}, this.backLights.material = new O({
        colorNode: E(2.2)
      });
    }
    setAntenna() {
      this.parts.antenna && (this.antenna = {}, this.antenna.target = new y(0, 2, 0), this.antenna.target = new y(0, 2, 0), this.antenna.object = this.parts.antenna, this.antenna.head = this.game.resources.vehicle.scene.getObjectByName("antennaHead"), this.antenna.headAxle = this.antenna.head.children[0], this.antenna.headReference = this.antenna.object.getObjectByName("antennaHeadReference"), this.game.materials.updateObject(this.antenna.head), this.game.scene.add(this.antenna.head));
    }
    setBoostTrails() {
      this.boostTrails = {}, this.boostTrails.instance = new sn(), this.boostTrails.leftReference = new $e(), this.boostTrails.leftReference.position.set(-1.28, 0.1, -0.55), this.parts.chassis.add(this.boostTrails.leftReference), this.boostTrails.left = this.boostTrails.instance.create(), this.boostTrails.leftReference.getWorldPosition(this.boostTrails.left.position), this.boostTrails.rightReference = new $e(), this.boostTrails.rightReference.position.set(-1.28, 0.1, 0.55), this.parts.chassis.add(this.boostTrails.rightReference), this.boostTrails.right = this.boostTrails.instance.create(), this.boostTrails.rightReference.getWorldPosition(this.boostTrails.right.position);
    }
    setBoostAnimation() {
      if (this.boostAnimation = {}, this.boostAnimation.mix = 0, this.boostAnimation.speed = 1.2, this.boostAnimation.mixUniform = d(0), this.parts.energy) {
        const e = this.game.materials.getFromName("emissivePurpleRadialGradient").outputNode, t = this.parts.energy.material.outputNode, s = new et();
        s.outputNode = A(t, e, this.boostAnimation.mixUniform), this.parts.energy.material = s;
      }
    }
    setScreenPosition() {
      this.screenPosition = new H(0, 0);
    }
    update() {
      const e = this.game.physicalVehicle;
      this.parts.chassis.position.copy(e.position), this.parts.chassis.quaternion.copy(e.quaternion), this.wheels.steering += (this.game.player.steering * e.steeringAmplitude - this.wheels.steering) * this.game.ticker.deltaScaled * 16;
      const t = e.forwardSpeed / e.wheels.settings.radius * 6e-3;
      for (let a = 0; a < 4; a++) {
        const n = this.wheels.items[a], o = e.wheels.items[a];
        (!this.game.inputs.actions.get("brake").active || this.game.inputs.actions.get("forward").active || this.game.inputs.actions.get("backward").active) && (a === 0 || a === 2 ? n.cylinder.rotation.z += t : n.cylinder.rotation.z -= t), a === 0 && (n.container.rotation.y = Math.PI + this.wheels.steering), a === 1 && (n.container.rotation.y = this.wheels.steering);
        const l = o.suspensionLength;
        let r = o.basePosition.y - l;
        if (r = Math.min(r, -0.5), n.container.position.x = o.basePosition.x, n.container.position.y += (r - n.container.position.y) * 25 * this.game.ticker.deltaScaled, n.container.position.z = o.basePosition.z, n.suspension) {
          const h = Math.abs(n.container.position.y) - 0.5;
          n.suspension.scale.y = h;
        }
        n.groundTrack.update(o.contactPoint, o.inContact);
      }
      if (this.mainGroundTrack.update(e.position, e.position.y < 1.5), this.antenna) {
        const a = Math.atan2(this.antenna.target.x - e.position.x, this.antenna.target.z - e.position.z);
        this.antenna.object.rotation.y = a - this.parts.chassis.rotation.y, this.antenna.headReference.getWorldPosition(this.antenna.head.position), this.antenna.head.lookAt(this.antenna.target);
        const n = this.antenna.target.distanceTo(e.position), o = L(n, 50, 5, 1, 10);
        this.antenna.headAxle.rotation.z += this.game.ticker.deltaScaled * o;
      }
      this.game.player.braking ? (this.parts.stopLights && (this.parts.stopLights.visible = true), this.parts.backLights && (this.parts.backLights.visible = true, this.parts.backLights.material = this.game.materials.getFromName("emissiveOrangeRadialGradient"))) : (this.parts.stopLights && (this.parts.stopLights.visible = false), this.parts.backLights && (this.game.player.accelerating < 0 ? (this.parts.backLights.visible = true, this.parts.backLights.material = this.backLights.material) : this.parts.backLights.visible = false));
      const s = e.goingForward && this.game.player.boosting && this.game.player.accelerating > 0 ? 1 : 0;
      this.boostTrails.leftReference.getWorldPosition(this.boostTrails.left.position), this.boostTrails.left.alpha = s, this.boostTrails.rightReference.getWorldPosition(this.boostTrails.right.position), this.boostTrails.right.alpha = s, this.boostAnimation.mix += (this.game.player.boosting ? 1 : -1) * this.game.ticker.deltaScaled * this.boostAnimation.speed, this.boostAnimation.mix = Qe(this.boostAnimation.mix, 0, 1), this.boostAnimation.mixUniform.value = 1 - Math.pow(1 - this.boostAnimation.mix, 7), this.parts.energy && (this.parts.cell1.position.y = L(this.boostAnimation.mix, 0, 0.6, 0.2, 0), this.parts.cell3.position.y = L(this.boostAnimation.mix, 0.2, 0.8, 0.2, 0), this.parts.cell2.position.y = L(this.boostAnimation.mix, 0.4, 1, 0.2, 0));
      const i = new y();
      i.setFromMatrixPosition(this.parts.chassis.matrixWorld), i.project(this.game.view.camera), this.screenPosition.x = i.x * 0.5 + 0.5, this.screenPosition.y = i.y * -0.5 + 0.5;
    }
  }
  const kt = b(([m, e]) => w(m.x.add(m.y.mul(e.x)), m.y.add(m.x.mul(e.y)))), an = b(([m, e, t, s, i]) => {
    const a = ft(m.z, m.x), n = m.y, o = e.mul(m.y.sub(t)).pow(2).add(s);
    return o.addAssign(de(n.sub(i).mul(20).add(a.mul(2))).mul(0.05)), E(wt(a).mul(o), n, de(a).mul(o));
  });
  class nn {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.tornado.debugPanel), this.setMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setMesh() {
      this.visibility = d(1);
      const e = d(M("#ff544d")), t = d(8), s = d(0.15), i = d(1.7), a = d(0.4), n = d(0.27), o = new Zt(1, 1, 1, 32, 16, true);
      o.translate(0, 0.5, 0);
      const l = new O({
        transparent: true,
        side: Ae,
        wireframe: false,
        depthWrite: true,
        depthTest: true
      });
      l.positionNode = an(Le, i, a, n.sub(0.05), this.game.ticker.elapsedScaledUniform.mul(s).mul(2)), l.outputNode = b(() => {
        const r = this.game.ticker.elapsedScaledUniform.mul(s).negate(), h = k().y.sub(1).pow(2).oneMinus(), c = wt(h.mul(2).add(1).mul(Fs));
        c.assign(zi(c, -1, 1, -1, 1));
        const u = this.visibility.remap(0, 1, -4, 0), g = k().add(w(r.mul(1.1), r.mul(1.1)));
        g.assign(kt(g, w(-1, 0)).mul(w(4, 0.5)));
        const p = P(this.game.noises.perlin, g, 1).r.remap(0.45, 0.7), v = k().add(w(r.mul(0.7), r.mul(0.7)));
        v.assign(kt(v, w(-1, 0)).mul(w(10, 2)));
        const x = P(this.game.noises.perlin, v, 1).r.remap(0.45, 0.7), S = p.mul(x).add(c).add(u);
        S.assign(rt(0, 0.4, S));
        const I = e.mul(t), B = k().add(w(r.mul(0.88), r.mul(0.88))).add(w(0.5));
        B.assign(kt(B, w(-1, 0)).mul(w(3, 0.4)));
        const U = P(this.game.noises.perlin, B, 1).r.remap(0.45, 0.7), q = k().add(w(r.mul(0.66), r.mul(0.66))).add(w(0.5));
        q.assign(kt(q, w(-1, 0)).mul(w(8, 2)));
        const G = P(this.game.noises.perlin, q, 1).r.remap(0.45, 0.7), oe = U.mul(G).add(c).add(u), J = _(0.2, oe), pe = this.game.fog.strength.mix(E(0), this.game.fog.color), fe = ge(S, J);
        fe.lessThan(1e-3).discard();
        const Ee = A(I, pe, J);
        return C(E(Ee), fe);
      })(), this.mesh = new D(o, l), this.mesh.position.x = 30, this.mesh.position.y = 0.5, this.mesh.position.z = -13, this.mesh.scale.set(8, 8, 8), this.game.scene.add(this.mesh), this.game.debug.active && (this.debugPanel.addBinding(this.visibility, "value", {
        label: "visibility",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(i, "value", {
        label: "parabolStrength",
        min: 0,
        max: 4,
        step: 1e-3
      }), this.debugPanel.addBinding(a, "value", {
        label: "parabolOffset",
        min: 0,
        max: 4,
        step: 1e-3
      }), this.debugPanel.addBinding(n, "value", {
        label: "parabolAmplitude",
        min: 0,
        max: 4,
        step: 1e-3
      }));
    }
    update() {
      this.visibility.value = this.game.tornado.strength, this.mesh.visible = !!this.game.tornado.strength, this.mesh.position.copy(this.game.tornado.position);
    }
  }
  const Xe = new st.alea("flowers");
  class on {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F338} Flowers",
        expanded: false
      })), this.setClusters(), this.setGeometry(), this.setMaterial(), this.setInstancedMesh();
    }
    setOne() {
      this.transformMatrices = [];
      const e = new $e();
      e.position.set(0, 0.4, 4), e.scale.set(1, 1, 1), e.updateMatrix(), this.transformMatrices.push(e.matrix);
    }
    setClusters() {
      this.transformMatrices = [];
      for (const e of this.game.resources.flowersReferencesModel.scene.children) {
        const t = e.position, s = 3 + Math.floor(Xe() * 8);
        for (let i = 0; i < s; i++) {
          const a = new $e();
          a.rotation.y = Math.PI * 2 * Xe(), a.position.set(t.x + (Xe() - 0.5) * 3, t.y, t.z + (Xe() - 0.5) * 3);
          const n = 0.6 + Xe() * 0.4;
          a.scale.setScalar(n), a.updateMatrix(), this.transformMatrices.push(a.matrix);
        }
      }
    }
    setGeometry() {
      const t = [];
      for (let s = 0; s < 8; s++) {
        const i = new Y(0.08, 0.08), a = new bt(1, Math.PI * 0.2 * Xe(), Math.PI * 2 * Xe()), n = new y().setFromSpherical(a), o = n.clone().setLength(1 + (Xe() - 0.5) * 0.5);
        o.y -= 0.75;
        const l = new es();
        l.lookAt(n, new y(), new y(0, 1, 0)), l.setPosition(o), l.scale(new y(1, 1, 1).setScalar(1 + (Math.random() - 0.5))), i.applyMatrix4(l), t.push(i);
      }
      this.geometry = zs(t), this.geometry.deleteAttribute("uv");
    }
    setMaterial() {
      const e = d(M("#ffffff"));
      this.material = new V({
        side: Ae,
        colorNode: e,
        hasWater: false
      });
      const t = d(0.25);
      this.material.receivedShadowPositionNode = Le.add(this.game.lighting.directionUniform.mul(t));
      const s = this.game.wind.offsetNode(Le.xz), i = Le.y.clamp(0, 1).mul(1);
      this.material.positionNode = b(({ object: a }) => (ts(a.count, this.instanceMatrix).toStack(), Le.add(E(s.x, 0, s.y).mul(i))))(), this.game.debug.active && this.game.debug.addThreeColorBinding(this.debugPanel, e.value, "baseColor");
    }
    setInstancedMesh() {
      this.mesh = new D(this.geometry, this.material), this.mesh.castShadow = true, this.mesh.receiveShadow = true, this.mesh.count = this.transformMatrices.length, this.mesh.frustumCulled = false, this.game.scene.add(this.mesh), this.instanceMatrix = new gt(new Float32Array(this.mesh.count * 16), 16), this.instanceMatrix.setUsage(pt), this.instanceColorIndex = new gt(new Float32Array(this.colorIndices), 1), this.instanceColorIndex.setUsage(pt);
      let e = 0;
      for (const t of this.transformMatrices) t.toArray(this.instanceMatrix.array, e * 16), e++;
    }
  }
  class rn {
    constructor() {
      this.game = T.getInstance();
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.bricksModel.scene.children);
      e.castShadow = true, e.receiveShadow = true, e.frustumCulled = false, this.game.materials.updateObject(e), this.objects = [];
      for (const s of t) this.objects.push(this.game.objects.add({
        model: s,
        updateMaterials: false,
        castShadow: false,
        receiveShadow: false,
        parent: null
      }, {
        type: "dynamic",
        position: s.position,
        rotation: s.quaternion,
        friction: 0.7,
        mass: 0.1,
        sleeping: true,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              0.75 * 0.75,
              0.5 * 0.75,
              1 * 0.75
            ],
            category: "object"
          }
        ],
        waterGravityMultiplier: -1,
        contactThreshold: 15,
        onCollision: (i, a) => {
          this.game.audio.groups.get("hitBrick").playRandomNext(i, a);
        }
      }));
      this.instancedGroup = new ue(t, e), this.game.ticker.events.on("tick", () => {
        for (const s of this.objects) !s.physical.body.isSleeping() && s.physical.body.isEnabled() && (s.visual.object3D.needsUpdate = true);
      }, 10);
    }
  }
  const ct = new st.alea("foliage");
  class Ks {
    constructor(e, t, s, i = false) {
      this.game = T.getInstance(), this.references = e, this.colorANode = t, this.colorBNode = s, this.seeThrough = i, this.seeThroughMultiplier = 1, this.setGeometry(), this.setMaterial(), this.setFromReferences(), this.setInstancedMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setGeometry() {
      const t = [];
      for (let s = 0; s < 80; s++) {
        const i = new Y(0.8, 0.8), a = new bt(1 - Math.pow(ct(), 3), Math.PI * 2 * ct(), Math.PI * ct()), n = new y().setFromSpherical(a);
        i.rotateZ(ct() * 9999), i.rotateY(0), i.translate(n.x, n.y, n.z);
        const o = n.clone().normalize(), l = new Float32Array(12);
        for (let r = 0; r < 4; r++) {
          const h = r * 3, u = new y(i.attributes.position.array[h], i.attributes.position.array[h + 1], i.attributes.position.array[h + 2]).lerp(o, 0.85);
          l[h] = u.x, l[h + 1] = u.y, l[h + 2] = u.z;
        }
        i.setAttribute("normal", new Wt(l, 3)), t.push(i);
      }
      this.geometry = zs(t);
    }
    setMaterial() {
      this.material = {}, this.material.threshold = d(0.3), this.material.seeThroughPosition = d(w()), this.material.seeThroughEdgeMin = d(0.11), this.material.seeThroughEdgeMax = d(0.57);
      const e = b(() => {
        const i = _e(k(), this.game.wind.offsetNode(Le.xz).length().mul(2.2), w(0.5));
        return P(this.game.resources.foliageTexture, i).r;
      }), t = b(() => {
        let i = F(1);
        if (this.seeThrough) {
          const a = Ze.sub(this.material.seeThroughPosition);
          a.mulAssign(w(os.x.div(os.y), 1));
          const n = a.length(), o = rt(this.material.seeThroughEdgeMin, this.material.seeThroughEdgeMax, n), l = e();
          i.assign(l.mul(o.mul(this.material.threshold.oneMinus()).add(this.material.threshold)));
        } else i.assign(e());
        return i.subAssign(this.material.threshold), i;
      })(), s = b(() => {
        const i = vt.dot(this.game.lighting.directionUniform).smoothstep(0, 1);
        return A(this.colorANode, this.colorBNode, i);
      })();
      this.material.instance = new V({
        colorNode: s,
        alphaNode: t,
        hasWater: false
      }), this.material.instance.positionNode = b(({ object: i }) => (ts(i.count, this.instanceMatrix).toStack(), Le))(), this.material.shadowOffset = d(1), this.material.instance.receivedShadowPositionNode = Le.add(this.game.lighting.directionUniform.mul(this.material.shadowOffset)), this.material.instance.maskShadowNode = P(this.game.resources.foliageTexture).r.greaterThan(0.5);
    }
    setFromReferences() {
      this.transformMatrices = [];
      const e = this.game.view.spherical.offset.clone().normalize();
      for (const t of this.references) {
        const s = t.scale.x, i = new $e(), a = Math.PI * 2 * ct();
        i.up.set(Math.sin(a), Math.cos(a), 0), i.lookAt(e), i.position.copy(t.position), i.scale.setScalar(s), i.updateMatrix(), this.transformMatrices.push(i.matrix);
      }
    }
    setInstancedMesh() {
      this.mesh = new lt(this.geometry, this.material.instance, this.transformMatrices.length), this.mesh.receiveShadow = true, this.mesh.castShadow = true, this.mesh.count = this.transformMatrices.length, this.mesh.frustumCulled = false, this.game.scene.add(this.mesh), this.instanceMatrix = new gt(new Float32Array(this.mesh.count * 16), 16), this.instanceMatrix.setUsage(pt);
      let e = 0;
      for (const t of this.transformMatrices) t.toArray(this.instanceMatrix.array, e * 16), e++;
    }
    update() {
      this.material.seeThroughPosition.value.copy(this.game.world.visualVehicle.screenPosition), this.material.seeThroughEdgeMin.value = 3 / this.game.view.spherical.radius.current * this.seeThroughMultiplier, this.material.seeThroughEdgeMax.value = 15 / this.game.view.spherical.radius.current * this.seeThroughMultiplier;
    }
  }
  class Ht {
    constructor(e, t, s, i, a) {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: `\u{1F333} ${e}`,
        expanded: false
      })), this.visual = t, this.references = s, this.colorA = i, this.colorB = a, this.setModelParts(), this.setBodies(), this.setLeaves(), this.setPhysical();
    }
    setModelParts() {
      this.modelParts = {}, this.modelParts.leaves = [], this.modelParts.body = null, this.visual.traverse((e) => {
        e.isMesh && (e.name.startsWith("treeLeaves") ? this.modelParts.leaves.push(e) : e.name.startsWith("treeBody") && (this.modelParts.body = e));
      });
    }
    setBodies() {
      this.game.materials.updateObject(this.modelParts.body), this.bodies = new lt(this.modelParts.body.geometry, this.modelParts.body.material, this.references.length), this.bodies.instanceMatrix.setUsage(pt), this.bodies.castShadow = true, this.bodies.receiveShadow = true;
      let e = 0;
      for (const t of this.references) this.bodies.setMatrixAt(e, t.matrix), e++;
      this.game.scene.add(this.bodies);
    }
    setLeaves() {
      const e = [];
      for (const i of this.references) for (const a of this.modelParts.leaves) {
        const n = a.matrix.clone().premultiply(i.matrixWorld), o = new $e();
        o.applyMatrix4(n), e.push(o);
      }
      const t = d(M(this.colorA)), s = d(M(this.colorB));
      this.leaves = new Ks(e, t, s, true), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, t.value, "leavesColorA"), this.game.debug.addThreeColorBinding(this.debugPanel, s.value, "leavesColorB"), this.debugPanel.addBinding(this.leaves.material.shadowOffset, "value", {
        label: "shadowOffset",
        min: 0,
        max: 2,
        step: 1e-3
      }), this.debugPanel.addBinding(this.leaves.material.threshold, "value", {
        label: "threshold",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.leaves.material.seeThroughEdgeMin, "value", {
        label: "seeThroughEdgeMin",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.leaves.material.seeThroughEdgeMax, "value", {
        label: "seeThroughEdgeMax",
        min: 0,
        max: 1,
        step: 1e-3
      }));
    }
    setPhysical() {
      for (const e of this.references) this.game.objects.add(null, {
        type: "fixed",
        position: e.position.add(new y(0, 2.5, 0)),
        rotation: e.quaternion,
        friction: 0.7,
        sleeping: true,
        colliders: [
          {
            shape: "cylinder",
            parameters: [
              2.5,
              0.15
            ],
            category: "object"
          }
        ],
        onCollision: (t, s) => {
          this.game.audio.groups.get("hitDefault").playRandomNext(t, s);
        }
      });
    }
  }
  class ln {
    constructor() {
      if (this.game = T.getInstance(), this.colorANode = d(M("#b4b536")), this.colorBNode = d(M("#d8cf3b")), this.foliage = new Ks(this.game.resources.bushesReferences.scene.children, this.colorANode, this.colorBNode), this.game.debug.active) {
        const e = this.game.debug.panel.addFolder({
          title: "\u{1F333} Bushes",
          expanded: false
        });
        this.game.debug.addThreeColorBinding(e, this.colorANode.value, "colorA"), this.game.debug.addThreeColorBinding(e, this.colorBNode.value, "colorB"), e.addBinding(this.foliage.material.shadowOffset, "value", {
          label: "shadowOffset",
          min: 0,
          max: 2,
          step: 1e-3
        });
      }
    }
  }
  class hn {
    constructor() {
      this.game = T.getInstance(), this.geometry = new Rt(0.5, 12, 6), this.emissiveColorA = d(M("red")), this.emissiveColorB = d(M("orange")), this.emissiveStrength = d(8), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F525} Fireballs",
        expanded: false
      }), this.game.debug.addThreeColorBinding(this.debugPanel, this.emissiveColorA.value, "emissiveColorA"), this.game.debug.addThreeColorBinding(this.debugPanel, this.emissiveColorB.value, "emissiveColorB"), this.debugPanel.addBinding(this.emissiveStrength, "value", {
        label: "emissiveStrength",
        min: 0,
        max: 20,
        step: 0.1
      }));
    }
    create(e, t = 5, s = 5) {
      const i = new O({
        wireframe: false
      }), a = d(0.5);
      i.outputNode = b(() => {
        const l = Z.yz.mul(0.8), r = Z.xz.mul(0.8).add(0.8), h = Z.xy.mul(0.8).add(1.6), c = P(this.game.noises.perlin, l, 1).r, u = P(this.game.noises.perlin, r, 1).r, g = P(this.game.noises.perlin, h, 1).r, p = Ms.abs().normalize();
        p.assign(p.div(p.x.add(p.y).add(p.z)));
        const v = Ts(c.mul(p.x), u.mul(p.y), g.mul(p.z)).remap(0.15, 0.9, 0, 1).toVar();
        v.mulAssign(Q.y.mul(2).clamp(0, 1)), v.subAssign(a);
        const x = A(this.emissiveColorA, this.emissiveColorB, v);
        x.mulAssign(this.emissiveStrength);
        const S = this.game.fog.strength.mix(E(0), this.game.fog.color), I = _(v, 0.1), B = A(x, S, I);
        return v.lessThan(0).discard(), C(E(B), 1);
      })();
      const n = new D(this.geometry, i);
      n.position.copy(e), n.rotation.reorder("XYZ"), n.rotation.x = Math.random() * Math.PI * 2, n.rotation.y = Math.random() * Math.PI * 2, this.game.scene.add(n);
      const o = {
        value: 0
      };
      f.fromTo(o, {
        value: 0.5
      }, {
        value: t,
        duration: 0.6,
        delay: 0,
        ease: "power3.out",
        onUpdate: () => {
          n.scale.setScalar(o.value);
        }
      }), f.fromTo(n.rotation, {
        z: 0
      }, {
        z: -1,
        duration: 2.25,
        delay: 0,
        ease: "linear"
      }), f.fromTo(a, {
        value: 0.15
      }, {
        value: 1,
        duration: 2,
        delay: 0.25,
        ease: "linear"
      }), this.game.explosions.explode(e, s, 8), f.delayedCall(2.25, () => {
        n.removeFromParent(), i.dispose();
      });
    }
  }
  class cn {
    constructor() {
      this.game = T.getInstance();
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.explosiveCratesModel.scene.children);
      this.references = t, e.castShadow = true, e.receiveShadow = true, this.game.materials.updateObject(e), this.instancedGroup = new ue(this.references, e), this.items = [];
      let s = 0;
      for (const i of this.references) {
        const a = {};
        a.id = s, a.exploded = false, a.reference = i.clone(), a.object = this.game.objects.add({
          model: i
        }, {
          type: "dynamic",
          position: i.position.clone(),
          rotation: i.quaternion.clone(),
          friction: 0.7,
          mass: 0.02,
          sleeping: true,
          colliders: [
            {
              shape: "cuboid",
              parameters: [
                0.5,
                0.5,
                0.5
              ],
              category: "object"
            }
          ],
          waterGravityMultiplier: -1,
          contactThreshold: 0,
          onCollision: () => {
            this.explode(a);
          }
        }), this.items.push(a), s++;
      }
      this.setSounds(), this.game.ticker.events.on("tick", () => {
        for (const i of this.items) !i.object.physical.body.isSleeping() && i.object.physical.body.isEnabled() && (i.object.visual.object3D.needsUpdate = true);
      }, 10);
    }
    setSounds() {
      this.sounds = {}, this.sounds.triggerClick = this.game.audio.register({
        path: "sounds/clicks/Source Metal Clicks Delicate Light Sharp Clip Mid 07.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.1,
        positions: new y(),
        onPlay: (t, s) => {
          t.positions[0].copy(s), t.volume = 1, t.rate = 0.7 + Math.random() * 1.3;
        }
      });
      const e = [
        "sounds/explosions/SmallImpactMediumE PE281202.mp3",
        "sounds/explosions/SmallImpactMediumE PE281203.mp3"
      ];
      this.sounds.explosions = [];
      for (const t of e) this.sounds.explosions.push(this.game.audio.register({
        path: t,
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.2,
        positions: new y(),
        distanceFade: 25,
        onPlay: (s, i) => {
          s.positions[0].copy(i), s.volume = 1, s.rate = 0.9 + Math.random() * 0.3;
        }
      }));
    }
    explode(e) {
      e.exploded || (e.exploded = true, this.sounds.triggerClick.play(e.reference.position), f.delayedCall(0.4, () => {
        this.sounds.explosions[Math.floor(Math.random() * this.sounds.explosions.length)].play(e.reference.position), this.game.world.fireballs.create(e.object.physical.body.translation()), this.game.objects.disable(e.object), e.object.visual.object3D.position.y += 100, e.object.visual.object3D.needsUpdate = true, this.game.achievements.setProgress("explosiveCrates", e.id);
      }));
    }
    reset() {
      for (const e of this.items) this.game.objects.resetObject(e.object), e.exploded = false, this.game.ticker.wait(2, () => {
        e.object.physical.body.setEnabled(true);
      });
      this.instancedGroup.needsUpdate = true, this.game.objects.list.forEach((e) => {
        e.physical && (e.physical.type === "dynamic" || e.physical.type === "kinematicPositionBased") && e.physical.body.isEnabled() && (e.physical.body.setEnabled(false), this.game.ticker.wait(1, () => {
          e.physical.body.setEnabled(true), e.physical.initialState.sleeping && e.physical.body.sleep();
        }));
      });
    }
  }
  class dn {
    constructor() {
      var _a2;
      this.game = T.getInstance(), this.count = Math.pow(2, 11), this.speed = 0.25, this.achievementAchieved = (_a2 = this.game.achievements.groups.get("weatherRain")) == null ? void 0 : _a2.items[0].achieved, this.setGeometry(), this.setMaterial(), this.setMesh(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10), this.game.viewport.events.on("throttleChange", () => {
        this.size.value = this.game.view.optimalArea.radius * 2;
      }, 2), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F327}\uFE0F Rain",
        expanded: false
      }), this.debugPanel.addBinding(this.elevation, "value", {
        label: "elevation",
        min: 0,
        max: 50,
        step: 0.1
      }), this.debugPanel.addBinding(this.thickness, "value", {
        label: "thickness",
        min: 0,
        max: 0.1,
        step: 1e-3
      })), this.visibleRatioBinding = this.game.debug.addManualBinding(this.debugPanel, this.visibleRatio, "value", {
        label: "visibleRatio",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => Math.pow(this.game.weather.rain.value, 2)), this.lengthRatioBinding = this.game.debug.addManualBinding(this.debugPanel, this.length, "value", {
        label: "length",
        min: 0,
        max: 10,
        step: 1e-3
      }, () => {
        const e = L(this.game.weather.rain.value, 0, 1, 1, 3), t = 1 - Math.pow(1 - Math.max(this.game.weather.snow.value, 0), 4);
        return ye(e, 0.03, t);
      }), this.speedRatioBinding = this.game.debug.addManualBinding(this.debugPanel, this, "speed", {
        label: "speed",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => {
        const e = L(this.game.weather.rain.value, 0, 1, 0.2, 0.4), t = 1 - Math.pow(1 - Math.max(this.game.weather.snow.value, 0), 4);
        return ye(e, 0.05, t);
      }), this.inclineRatioBinding = this.game.debug.addManualBinding(this.debugPanel, this.incline, "value", {
        label: "incline",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => L(this.game.weather.wind.value, 0, 1, 0.1, 0.4));
    }
    setGeometry() {
      const e = new Float32Array(this.count * 4 * 3), t = new Float32Array(this.count * 4 * 2), s = new Float32Array(this.count * 4), i = new Uint16Array(this.count * 6);
      for (let a = 0; a < this.count; a++) {
        const n = Math.random(), o = 0, l = Math.random(), r = Math.random();
        for (let h = 0; h < 4; h++) {
          const c = (a * 4 + h) * 3;
          e[c + 0] = n, e[c + 1] = o, e[c + 2] = l;
          const u = (a * 4 + h) * 2;
          t[u + 0] = 0, t[u + 1] = 0, (h === 0 || h === 1) && (t[u + 0] = 1), (h === 0 || h === 3) && (t[u + 1] = 1), s[a * 4 + h] = r;
        }
        i[a * 6 + 0] = a * 4 + 0, i[a * 6 + 1] = a * 4 + 3, i[a * 6 + 2] = a * 4 + 2, i[a * 6 + 3] = a * 4 + 2, i[a * 6 + 4] = a * 4 + 1, i[a * 6 + 5] = a * 4 + 0;
      }
      this.geometry = new Ke(), this.geometry.setAttribute("position", new ne(e, 3)), this.geometry.setAttribute("offset", new ne(t, 2)), this.geometry.setAttribute("random", new ne(s, 1)), this.geometry.index = new zt(i, 1);
    }
    setMaterial() {
      this.material = new V({
        normalNode: E(0, 1, 0),
        transparent: true,
        wireframe: false,
        hasCoreShadows: true,
        hasDropShadows: false,
        hasLightBounce: false,
        hasFog: false,
        hasWater: false
      }), this.thickness = d(0.015), this.elevation = d(20), this.incline = d(0.2), this.size = d(this.game.view.optimalArea.radius * 2), this.center = d(w()), this.length = d(2), this.localTime = d(0), this.visibleRatio = d(0), this.material.positionNode = b(() => {
        const e = le("position").toVar(), t = le("offset"), s = le("random"), i = w(0.707, -0.707);
        e.xz.mulAssign(this.size), e.xz.subAssign(this.center);
        const a = this.size.mul(0.5);
        e.x.assign(We(e.x.add(a), this.size).sub(a)), e.z.assign(We(e.z.add(a), this.size).sub(a)), e.xz.addAssign(this.center), e.xz.addAssign(i.mul(t.x.mul(this.thickness)));
        const n = this.localTime.add(s).mod(1);
        e.y.assign(this.elevation.add(this.length)), e.y.subAssign(this.length.mul(t.y.oneMinus())), e.y.subAssign(n.mul(this.elevation.add(this.length))), e.y.assign(e.y.clamp(0, this.elevation));
        const o = _(this.visibleRatio, it(s.mul(99)));
        return e.y.addAssign(o.mul(99)), e.xz.addAssign(i.mul(e.y.mul(this.incline).mul(-1))), e;
      })();
    }
    setMesh() {
      this.mesh = new D(this.geometry, this.material), this.mesh.position.y = -0.3, this.mesh.frustumCulled = false, this.mesh.renderOrder = 1, this.game.scene.add(this.mesh);
    }
    update() {
      this.visibleRatioBinding.update(), this.lengthRatioBinding.update(), this.speedRatioBinding.update(), this.inclineRatioBinding.update(), this.mesh.visible = this.visibleRatio.value > 1e-5, this.mesh.visible && (this.center.value.set(this.game.view.optimalArea.position.x, this.game.view.optimalArea.position.z), this.localTime.value += this.game.ticker.deltaScaled * this.speed, !this.achievementAchieved && this.game.reveal.step === 2 && this.visibleRatio.value > 0.04 && this.length.value > 0.2 && (this.achievementAchieved = true, this.game.achievements.setProgress("weatherRain", 1)));
    }
  }
  class un {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F389} Confetti",
        expanded: false
      })), this.pool = [], this.poolSize = 4, this.count = 500, this.geometry = new Y(0.1, 0.2), this.colorsUniform = ws([
        new X("#ffbde7"),
        new X("#eeff95"),
        new X("#84ffb5")
      ]), this.createPool(), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, this.colorsUniform.array[0], "color0"), this.game.debug.addThreeColorBinding(this.debugPanel, this.colorsUniform.array[1], "color1"), this.game.debug.addThreeColorBinding(this.debugPanel, this.colorsUniform.array[2], "color2"), this.debugPanel.addButton({
        title: "pop"
      }).on("click", () => {
        this.pop(this.game.player.position);
      }));
    }
    createPool() {
      for (let e = 0; e < this.poolSize; e++) {
        const t = {};
        t.available = true;
        const s = new Float32Array(this.count), i = new Float32Array(this.count);
        for (let c = 0; c < this.count; c++) s[c] = Math.random(), i[c] = Math.random() * Math.PI * 2;
        const a = ee(s, "float").toAttribute(), n = ee(i, "float").toAttribute(), o = b(() => this.colorsUniform.element(re.mod(3)))(), l = new V({
          colorNode: o,
          hasCoreShadows: true,
          hasDropShadows: false,
          hasLightBounce: false,
          hasFog: true,
          hasWater: false
        });
        t.progressUniform = d(0), t.amplitudeUniform = d(0.7), t.radiusUniform = d(2), t.elevationUniform = d(6);
        const r = t.amplitudeUniform.oneMinus();
        l.positionNode = b(() => {
          ts(this.count, h).toStack();
          const c = Le, u = r.mul(a), g = u.add(t.amplitudeUniform), p = Li(t.progressUniform, u, g, 0, 1).toVar();
          p.assign(p.oneMinus().pow(3).oneMinus());
          const v = p.sub(0.5).mul(2).abs().oneMinus().mul(20).min(1);
          c.mulAssign(v);
          const x = de(n), S = wt(n), I = a.mul(99).fract(), B = x.mul(p).mul(I).mul(t.radiusUniform), U = S.mul(p).mul(I).mul(t.radiusUniform), q = p.mul(2).oneMinus().pow(2).oneMinus().mul(I).mul(t.elevationUniform);
          return E(c.x.add(B), c.y.add(q), c.z.add(U));
        })(), t.mesh = new lt(this.geometry, l, this.count), t.mesh.visible = false, t.mesh.castShadow = true;
        const h = new gt(new Float32Array(this.count * 16), 16);
        h.setUsage(pt);
        for (let c = 0; c < this.count; c++) {
          const u = new es(), g = new y(0, 0, 0), p = new ot().random(), v = new y(1, 1, 1);
          u.compose(g, p, v), u.toArray(h.array, c * 16);
        }
        t.mesh.position.y = 3, this.game.scene.add(t.mesh), this.game.debug.active && this.debugPanel.addBinding(t.progressUniform, "value", {
          label: "confetti.progressUniform",
          min: 0,
          max: 1,
          step: 1e-3
        }), t.pop = (c, u, g) => {
          t.available = false, t.mesh.visible = true, t.mesh.position.copy(c), t.radiusUniform.value = u, t.elevationUniform.value = g, f.fromTo(t.progressUniform, {
            value: 0
          }, {
            value: 1,
            duration: 5,
            onComplete: () => {
              t.available = true, t.mesh.visible = false;
            }
          });
        }, this.pool.push(t);
      }
    }
    pop(e = null, t = 4, s = 6) {
      const i = e ?? new y(this.game.player.position.x, 0, this.game.player.position.z), a = this.pool.find((n) => n.available);
      return a && a.pop(i, t, s), a;
    }
  }
  class mn {
    constructor() {
      this.game = T.getInstance();
      const e = this.game.respawns.getDefault();
      this.center = e.position.clone(), this.setCircle(), this.setLabel(), this.update = this.update.bind(this), this.game.ticker.events.on("tick", this.update, 8);
    }
    setLabel() {
      this.label = new at(), this.label.position.copy(this.center), this.label.rotation.reorder("YXZ"), this.game.quality.level === 0 ? (this.label.position.x += 3.5, this.label.position.z -= 1, this.label.position.y = 3.3, this.label.rotation.y = 0.4) : (this.label.position.x += 2.3, this.label.position.z -= 1.8, this.label.position.y = 3.3, this.label.rotation.y = 0.4, this.label.rotation.x = -0.4), this.label.scale.setScalar(0.01), this.game.scene.add(this.label);
    }
    setCircle() {
      this.circle = {};
      const e = 3.5, t = 0.04;
      this.circle.progress = 0, this.circle.smoothedProgress = d(0);
      const s = new ps(e - t, e, 128, 1), i = new O();
      i.outputNode = b(() => {
        const o = ft(Z.y, Z.x).div(ks).add(0.5).oneMinus();
        return this.circle.smoothedProgress.lessThan(o).discard(), C(this.game.reveal.color.mul(this.game.reveal.intensity), 1);
      })();
      const a = new D(s, i);
      a.position.copy(this.center), a.position.y = 1e-3, a.rotation.x = -Math.PI * 0.5, a.rotation.z = Math.PI * 0.5, this.game.scene.add(a), this.circle.mesh = a, this.circle.hide = (n = null) => {
        const o = {
          scale: 1
        }, l = this.game.debug.active ? 4 : 1;
        f.to(o, {
          scale: 0,
          duration: 1.5 / l,
          ease: "power4.in",
          overwrite: true,
          onUpdate: () => {
            a.scale.setScalar(o.scale);
          },
          onComplete: () => {
            typeof n == "function" && n(), a.removeFromParent();
          }
        });
      };
    }
    setText() {
      this.text = {};
      const e = 1.3, t = new Y(2 * e, 1 * e);
      this.text.textures = /* @__PURE__ */ new Map(), this.text.updateTexture = async () => {
        let a = "mouseKeyboard";
        this.game.inputs.mode === K.MODE_GAMEPAD ? this.game.inputs.gamepad.type === "xbox" ? a = "gamepadXbox" : a = "gamepadPlaystation" : this.game.inputs.mode === K.MODE_TOUCH && (a = "touch");
        let n = this.text.textures.get(a);
        if (n) s.outputNode = b(() => (P(n, w(k().x, k().y.oneMinus())).r.lessThan(0.5).discard(), C(1)))(), s.needsUpdate = true;
        else {
          const o = this.game.resourcesLoader.getLoader("textureKtx"), l = `intro/${a}Label.ktx`;
          o.load(l, (r) => {
            this.text.textures.set(a, r), s.outputNode = b(() => (P(r, w(k().x, k().y.oneMinus())).r.lessThan(0.5).discard(), C(1)))(), s.needsUpdate = true, i.visible = true;
          });
        }
      }, this.text.updateTexture();
      const s = new O({
        transparent: true
      });
      this.game.inputs.gamepad.events.on("typeChange", this.text.updateTexture), this.game.inputs.events.on("modeChange", this.text.updateTexture);
      const i = new D(t, s);
      i.visible = false, this.label.add(i), this.text.mesh = i;
    }
    setSoundButton() {
      this.soundButton = {};
      const e = this.game.resources.soundTexture;
      this.game.audio.mute.active && (e.offset.x = 0.5);
      const t = 0.5, s = new Y(50 / 38 * t, 1 * t), i = d(1), a = new O({
        alphaTest: 0.5,
        alphaMap: e,
        transparent: true,
        outputNode: C(E(1).mul(i), 1)
      }), n = new D(s, a);
      n.position.x = 0.38, n.position.y = -1, this.label.add(n);
      const o = this.label.position.clone();
      o.x += 0.38, o.y += -1, this.soundButton.intersect = this.game.rayCursor.addIntersect({
        active: true,
        shape: new ke(o, 0.5),
        onClick: () => {
          this.game.audio.mute.toggle();
        },
        onEnter: () => {
          f.to(i, {
            value: 1.5,
            duration: 0.3,
            overwrite: true
          });
        },
        onLeave: () => {
          f.to(i, {
            value: 1,
            duration: 0.3,
            overwrite: true
          });
        }
      }), this.game.audio.events.on("muteChange", (l) => {
        e.offset.x = l ? 0.5 : 0;
      }), this.soundButton.mesh = n;
    }
    showLabel() {
      const e = {
        scale: 0
      }, t = this.game.debug.active ? 4 : 1;
      f.to(e, {
        scale: 1,
        duration: 2 / t,
        delay: 1 / t,
        ease: "elastic.out(0.5)",
        overwrite: true,
        onUpdate: () => {
          this.label.scale.setScalar(e.scale);
        }
      });
    }
    hideLabel() {
      const e = this.game.debug.active ? 4 : 1, t = {
        scale: 1
      };
      f.to(t, {
        scale: 0,
        duration: 0.3 / e,
        ease: "power2.in",
        overwrite: true,
        onUpdate: () => {
          this.label.scale.setScalar(t.scale);
        },
        onComplete: () => {
          this.text.mesh.removeFromParent(), this.soundButton.mesh.removeFromParent(), this.game.rayCursor.removeIntersect(this.soundButton.intersect);
        }
      });
    }
    updateProgress(e) {
      this.circle.progress = e;
    }
    update() {
      this.circle.smoothedProgress.value += (this.circle.progress - this.circle.smoothedProgress.value) * this.game.ticker.delta * 10;
    }
    destroy() {
      this.label.removeFromParent(), this.circle.mesh.geometry.dispose(), this.soundButton.mesh.geometry.dispose(), this.text.mesh.geometry.dispose(), this.circle.mesh.material.dispose(), this.soundButton.mesh.material.dispose(), this.text.mesh.material.dispose(), this.game.resources.soundTexture.dispose(), this.text.textures.forEach((e, t) => {
        e.dispose();
      }), this.game.ticker.events.off("tick", this.update), this.game.inputs.gamepad.events.off("typeChange", this.text.updateTexture), this.game.inputs.events.off("modeChange", this.text.updateTexture);
    }
  }
  class gn {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F3EE} Pole lights",
        expanded: false
      }));
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.poleLightsModel.scene.children);
      this.references = t;
      for (const s of e.children) s.name = s.name.replace(/[0-9]+$/i, ""), s.castShadow = true, s.receiveShadow = true;
      this.game.materials.updateObject(e), this.instancedGroup = new ue(this.references, e, false), this.glass = this.instancedGroup.meshes.find((s) => s.instance.name === "glass").instance, this.setPhysics(), this.setFireflies(), this.setSwitchInterval();
    }
    setPhysics() {
      for (const e of this.references) this.game.objects.add(null, {
        type: "fixed",
        position: e.position,
        rotation: e.quaternion,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              0.2,
              1.7,
              0.2
            ],
            category: "object"
          }
        ],
        onCollision: (t, s) => {
          this.game.audio.groups.get("hitDefault").playRandomNext(t, s);
        }
      });
    }
    setFireflies() {
      this.firefliesScale = d(0);
      const e = 5, t = this.references.length * e, s = new Float32Array(t * 3);
      let i = 0;
      for (const c of this.references) for (let u = 0; u < e; u++) {
        const g = i * 3, p = Math.random() * Math.PI * 2;
        s[g + 0] = c.position.x + Math.cos(p), s[g + 1] = c.position.y + 1, s[g + 2] = c.position.z + Math.sin(p), i++;
      }
      const a = ee(s, "vec3").toAttribute(), n = new Je();
      n.outputNode = this.game.materials.getFromName("emissiveOrangeRadialGradient").outputNode;
      const o = this.game.ticker.elapsedScaledUniform.add(tt(re).mul(999)), l = E(de(o.mul(0.4)).mul(0.5), de(o).mul(0.2), de(o.mul(0.3)).mul(0.5));
      n.positionNode = a.add(l), n.scaleNode = this.firefliesScale;
      const r = new _t(0.015, 8), h = new D(r, n);
      h.count = t, h.frustumCulled = false, this.game.scene.add(h);
    }
    setSwitchInterval() {
      const e = (t) => {
        t ? (this.glass.visible = true, f.to(this.firefliesScale, {
          value: 1,
          duration: 5,
          overwrite: true
        })) : (this.glass.visible = false, f.to(this.firefliesScale, {
          value: 0,
          duration: 5,
          overwrite: true
        }));
      };
      this.game.dayCycles.events.on("night", e), e(this.game.dayCycles.intervalEvents.get("night").inInterval);
    }
  }
  class pn {
    constructor() {
      this.game = T.getInstance();
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.lanternsModel.scene.children);
      for (const s of e.children) s.name = s.name.replace(/[0-9]+$/i, ""), s.castShadow = true, s.receiveShadow = true, s.frustumCulled = false;
      this.game.materials.updateObject(e), this.objects = [];
      for (const s of t) this.objects.push(this.game.objects.add({
        model: s,
        updateMaterials: false,
        castShadow: false,
        receiveShadow: false,
        parent: null
      }, {
        type: "dynamic",
        position: s.position,
        rotation: s.quaternion,
        friction: 0.7,
        mass: 0.1,
        sleeping: true,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              0.7 * 0.5,
              1 * 0.5,
              0.7 * 0.5
            ],
            category: "object"
          }
        ],
        waterGravityMultiplier: -1,
        contactThreshold: 10,
        onCollision: (i, a) => {
          this.game.audio.groups.get("hitMetal").playRandomNext(i, a);
        }
      }));
      this.instancedGroup = new ue(t, e), this.game.ticker.events.on("tick", () => {
        for (const s of this.objects) !s.physical.body.isSleeping() && s.physical.body.isEnabled() && (s.visual.object3D.needsUpdate = true);
      }, 10);
    }
  }
  class fn {
    constructor() {
      this.game = T.getInstance();
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.fencesModel.scene.children);
      e.castShadow = true, e.receiveShadow = true, e.frustumCulled = true;
      const s = this.game.objects.getFromModel(e, {}, {});
      this.game.materials.updateObject(e);
      for (const i of e.children) i.name = i.name.replace(/[0-9]+$/i, "");
      this.objects = [];
      for (const i of t) this.objects.push(this.game.objects.add({
        model: i,
        updateMaterials: false,
        parent: null
      }, {
        type: "dynamic",
        position: i.position,
        rotation: i.quaternion,
        friction: 0.7,
        mass: 0.1,
        sleeping: true,
        colliders: s[1].colliders,
        waterGravityMultiplier: -1,
        contactThreshold: 10,
        onCollision: (a, n) => {
        }
      }));
      this.instancedGroup = new ue(t, e), this.game.ticker.events.on("tick", () => {
        for (const i of this.objects) !i.physical.body.isSleeping() && i.physical.body.isEnabled() && (i.visual.object3D.needsUpdate = true);
      }, 10);
    }
  }
  class vn {
    constructor() {
      this.game = T.getInstance();
      const [e, t] = ue.getBaseAndReferencesFromInstances(this.game.resources.benchesModel.scene.children);
      e.castShadow = true, e.receiveShadow = true, e.frustumCulled = true;
      const s = this.game.objects.getFromModel(e, {}, {});
      this.game.materials.updateObject(e), this.objects = [];
      for (const i of t) this.objects.push(this.game.objects.add({
        model: i,
        updateMaterials: false,
        parent: null
      }, {
        type: "dynamic",
        position: i.position,
        rotation: i.quaternion,
        friction: 0.7,
        mass: 0.1,
        sleeping: true,
        colliders: s[1].colliders,
        waterGravityMultiplier: -1,
        contactThreshold: 10,
        onCollision: (a, n) => {
        }
      }));
      this.instancedGroup = new ue(t, e), this.game.ticker.events.on("tick", () => {
        for (const i of this.objects) !i.physical.body.isSleeping() && i.physical.body.isEnabled() && (i.visual.object3D.needsUpdate = true);
      }, 10);
    }
  }
  class bn {
    constructor() {
      this.game = T.getInstance(), this.references = new qs();
      const e = [
        ...this.game.resources.sceneryModel.scene.children
      ];
      for (const t of e) (typeof t.userData.prevent > "u" || t.userData.prevent === false) && this.game.objects.addFromModel(t, {}, {
        position: t.position,
        rotation: t.quaternion,
        sleeping: true,
        mass: t.userData.mass
      }), this.references.parse(t);
      this.setRoad(), this.game.ticker.events.on("tick", () => {
        this.update();
      });
    }
    setRoad() {
      this.road = {};
      const e = this.references.items.get("road")[0];
      this.road.color = d(M("#383039")), this.road.glitterVariation = d(0), this.road.glitterScarcity = d(100), this.road.glitterIntensity = d(0.3), this.road.glitterPerlinFrequency = d(0.05), this.road.glitterHashFrequency = d(0.2);
      const t = b(() => {
        const i = F(0), a = Q.xz.mul(this.road.glitterHashFrequency), n = P(this.game.noises.hash, a).r.mul(2).add(this.road.glitterVariation).mod(2).sub(1).abs();
        i.addAssign(n), i.assign(i.pow(this.road.glitterScarcity)), i.mulAssign(this.road.glitterIntensity);
        const o = Q.xz.mul(this.road.glitterPerlinFrequency), l = P(this.game.noises.perlin, o).r;
        i.mulAssign(l);
        const r = k().y.mul(Fs).sin();
        i.mulAssign(r);
        const h = this.road.color.toVar();
        return h.addAssign(i), E(h);
      })(), s = new V({
        colorNode: t,
        hasLightBounce: false,
        hasWater: false
      });
      if (e.material = s, this.game.debug.active) {
        const i = this.game.debug.panel.addFolder({
          title: "\u{1F6E3}\uFE0F Road",
          expanded: false
        });
        this.game.debug.addThreeColorBinding(i, this.road.color.value, "color"), i.addBinding(this.road.glitterScarcity, "value", {
          label: "glitterScarcity",
          min: 100,
          max: 1e4,
          step: 1
        }), i.addBinding(this.road.glitterIntensity, "value", {
          label: "glitterIntensity",
          min: 0,
          max: 10,
          step: 0.01
        }), i.addBinding(this.road.glitterPerlinFrequency, "value", {
          label: "glitterPerlinFrequency",
          min: 0,
          max: 0.1,
          step: 1e-4
        }), i.addBinding(this.road.glitterHashFrequency, "value", {
          label: "glitterHashFrequency",
          min: 0,
          max: 1,
          step: 1e-4
        });
      }
    }
    update() {
      this.road.glitterVariation.value += this.game.ticker.deltaScaled * 4e-3 + this.game.view.delta.length() * 4e-3;
    }
  }
  class yn {
    constructor() {
      this.game = T.getInstance(), this.step(0);
    }
    step(e) {
      e === 0 ? (this.grid = new Ia(), this.intro = new mn()) : e === 1 ? (this.visualVehicle = new $s(this.game.resources.vehicle.scene), this.floor = new Ma(), this.waterSurface = new Na(), this.grass = new Ba(), this.windLines = new Xa(), this.confetti = new un(), this.leaves = new Ya(), this.rain = new dn(), this.lightnings = new Za(), this.fireballs = new hn(), this.snow = new _a(), this.visualTornado = new nn(), this.bushes = new ln(), this.birchTrees = new Ht("Birch Tree", this.game.resources.birchTreesVisualModel.scene, this.game.resources.birchTreesReferencesModel.scene.children, "#ff4f2b", "#ff903f"), this.oakTrees = new Ht("Oak Tree", this.game.resources.oakTreesVisualModel.scene, this.game.resources.oakTreesReferencesModel.scene.children, "#b4b536", "#d8cf3b"), this.cherryTrees = new Ht("Cherry Tree", this.game.resources.cherryTreesVisualModel.scene, this.game.resources.cherryTreesReferencesModel.scene.children, "#ff6d6d", "#ff9990"), this.flowers = new on(), this.bricks = new rn(), this.fences = new fn(), this.benches = new vn(), this.explosiveCrates = new cn(), this.poleLights = new gn(), this.lanterns = new pn(), this.scenery = new bn(), this.areas = new $a()) : e === 2 && (this.whispers = new Ja());
    }
    setPhysicalFloor() {
      this.game.objects.add(null, {
        type: "fixed",
        friction: 0.25,
        restitution: 0,
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              1e3,
              1,
              1e3
            ],
            position: {
              x: 0,
              y: -1.01,
              z: 0
            },
            category: "floor"
          }
        ]
      });
    }
    setTestKtx() {
      const e = new D(new Bt(10, 10, 10), new O());
      e.material.outputNode = C(P(this.game.resources.paletteTexture).rgb, 1), e.position.copy(this.game.player.position), e.position.y += 2, this.game.scene.add(e);
    }
    setTestShadow() {
      const e = new Bt(0.5, 0.5, 0.5), t = new et();
      t.castShadowNode = C(0, 0, 0, 1);
      const s = new D(e, t);
      s.position.y = 2, s.receiveShadow = true, s.castShadow = true, this.game.scene.add(s);
    }
    setTestMesh() {
      console.log(this.game.rendering.renderer.library);
      const e = new D(new Rt(1, 32, 32), new yt());
      e.position.z = 3, this.game.scene.add(e);
    }
    setAxesHelper() {
      const e = new Oi();
      e.position.y = 0.1, this.game.scene.add(e);
    }
    setCollisionGroupsTest() {
      this.game.objects.add(null, {
        type: "dynamic",
        position: {
          x: 4,
          y: 2,
          z: -1.1
        },
        colliders: [
          {
            shape: "cuboid",
            parameters: [
              0.5,
              0.5,
              0.5
            ],
            category: "floor"
          }
        ]
      });
    }
  }
  class wn {
    constructor() {
      this.game = T.getInstance(), this.useDayCycles = true, this.phi = 0.63, this.theta = 0.72, this.phiAmplitude = 0.62, this.thetaAmplitude = 1.25, this.near = 1, this.spherical = new bt(this.game.view.optimalArea.radius + this.near, this.phi, this.theta), this.direction = new y().setFromSpherical(this.spherical).normalize(), this.directionUniform = d(this.direction), this.colorUniform = d(M("#ffffff")), this.intensityUniform = d(1), this.sunHorizonFactor = 1, this.count = 1, this.mapSize = this.game.quality.level === 0 ? 2048 : 512, this.shadowAmplitude = this.game.view.optimalArea.radius, this.depth = this.game.view.optimalArea.radius * 2, this.shadowBias = -1e-3, this.shadowNormalBias = 0.1, this.shadowRadius = this.game.quality.level === 0 ? 3 : 2, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F4A1} Lighting",
        expanded: false
      })), this.setNodes(), this.setLight(), this.updateShadow(), this.setHelpers(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 9), this.game.viewport.events.on("throttleChange", () => {
        this.spherical.radius = this.game.view.optimalArea.radius, this.shadowAmplitude = this.game.view.optimalArea.radius, this.updateShadow();
      }, 3), this.game.debug.active && (this.debugPanel.addBinding(this, "useDayCycles"), this.debugPanel.addBinding(this, "phi", {
        min: 0,
        max: Math.PI * 0.5
      }).on("change", () => this.updateCoordinates()), this.debugPanel.addBinding(this, "theta", {
        min: -Math.PI,
        max: Math.PI
      }).on("change", () => this.updateCoordinates()), this.debugPanel.addBinding(this, "phiAmplitude", {
        min: 0,
        max: Math.PI
      }).on("change", () => this.updateCoordinates()), this.debugPanel.addBinding(this, "thetaAmplitude", {
        min: -Math.PI,
        max: Math.PI
      }).on("change", () => this.updateCoordinates()), this.debugPanel.addBinding(this.spherical, "radius", {
        min: 0,
        max: 100
      }).on("change", () => this.updateCoordinates()), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this, "near", {
        min: 0.1,
        max: 50,
        step: 0.1
      }).on("change", () => this.updateShadow()), this.debugPanel.addBinding(this, "depth", {
        min: 0.1,
        max: 100,
        step: 0.1
      }).on("change", () => this.updateShadow()), this.debugPanel.addBinding(this, "shadowAmplitude", {
        min: 1,
        max: 50
      }).on("change", () => this.updateShadow()), this.debugPanel.addBinding(this, "shadowBias", {
        min: -0.02,
        max: 0.02
      }).on("change", () => this.updateShadow()), this.debugPanel.addBinding(this, "shadowNormalBias", {
        min: -0.3,
        max: 0.3
      }).on("change", () => this.updateShadow()), this.debugPanel.addBinding(this, "shadowRadius", {
        min: 0,
        max: 10
      }).on("change", () => this.updateShadow()));
    }
    setNodes() {
      this.lightBounceEdgeLow = d(F(-1)), this.lightBounceEdgeHigh = d(F(1)), this.lightBounceDistance = d(F(1.5)), this.lightBounceMultiplier = d(F(1)), this.shadowColor = d(this.game.dayCycles.properties.shadowColor.value), this.bounceColor = d(M("#82487f")), this.coreShadowEdgeLow = d(F(-0.25)), this.coreShadowEdgeHigh = d(F(1)), this.game.debug.active && (this.game.debug.addThreeColorBinding(this.debugPanel, this.bounceColor.value, "bounceColor"), this.debugPanel.addBinding(this.lightBounceEdgeLow, "value", {
        label: "lightBounceEdgeLow",
        min: -1,
        max: 1,
        step: 0.01
      }), this.debugPanel.addBinding(this.lightBounceEdgeHigh, "value", {
        label: "lightBounceEdgeHigh",
        min: -1,
        max: 1,
        step: 0.01
      }), this.debugPanel.addBinding(this.lightBounceDistance, "value", {
        label: "lightBounceDistance",
        min: 0,
        max: 5,
        step: 0.01
      }), this.debugPanel.addBinding(this.lightBounceMultiplier, "value", {
        label: "lightBounceMultiplier",
        min: 0,
        max: 1,
        step: 0.01
      }), this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this.coreShadowEdgeLow, "value", {
        label: "coreShadowEdgeLow",
        min: -1,
        max: 1,
        step: 0.01
      }), this.debugPanel.addBinding(this.coreShadowEdgeHigh, "value", {
        label: "coreShadowEdgeHigh",
        min: -1,
        max: 1,
        step: 0.01
      }));
    }
    setLight() {
      this.light = new Ui(16777215, 5), this.light.position.setFromSpherical(this.spherical), this.light.castShadow = true, this.game.scene.add(this.light), this.game.scene.add(this.light.target);
    }
    setHelpers() {
      this.directionHelper = new D(new Ls(0.25, 1), new O({
        wireframe: true
      })), this.directionHelper.userData.preventPreRender = true, this.directionHelper.visible = false;
      const e = [
        new y(0, 0, 0),
        new y(0, 0, 5)
      ], t = new Ke().setFromPoints(e), s = new Gi({
        color: 16777215
      }), i = new ji(t, s);
      i.userData.preventPreRender = true, this.directionHelper.add(i), this.game.scene.add(this.directionHelper), this.shadowHelper = new vs(this.light.shadow.camera), this.shadowHelper.visible = false, this.shadowHelper.userData.preventPreRender = true, this.game.scene.add(this.shadowHelper), this.game.debug.active && (this.debugPanel.addBinding(this.directionHelper, "visible", {
        label: "directionHelper"
      }), this.debugPanel.addBinding(this.shadowHelper, "visible", {
        label: "shadowHelper"
      }));
    }
    updateShadow() {
      this.light.shadow.camera.top = this.shadowAmplitude, this.light.shadow.camera.right = this.shadowAmplitude, this.light.shadow.camera.bottom = -this.shadowAmplitude, this.light.shadow.camera.left = -this.shadowAmplitude, this.light.shadow.camera.near = this.near, this.light.shadow.camera.far = this.near + this.depth, this.light.shadow.bias = this.shadowBias, this.light.shadow.normalBias = this.shadowNormalBias, this.light.shadow.radius = this.shadowRadius, this.light.shadow.camera.updateProjectionMatrix(), this.light.shadow.mapSize.set(this.mapSize, this.mapSize), this.game.quality.events.on("change", () => {
        this.mapSize = this.game.quality.level === 0 ? 2048 : 512, this.light.shadow.mapSize.set(this.mapSize, this.mapSize);
      });
    }
    updateCoordinates() {
      this.direction.setFromSpherical(this.spherical).normalize();
    }
    update() {
      if (this.useDayCycles) {
        const t = (this.game.dayCycles.progress * 24 + 18) % 24;
        let s, i;
        if (t >= 6 && t < 18) {
          const a = (t - 6) / 12;
          s = 6 + Math.sin(Math.PI * a) * 56, i = -1.15 + a * 2.3;
        } else {
          const n = (t >= 18 ? t - 18 : t + 6) / 12;
          s = 10 + Math.sin(Math.PI * n) * 28, i = -1.15 + n * 2.3;
        }
        this.spherical.theta = i, this.spherical.phi = Math.PI * 0.5 - s * Math.PI / 180, this.sunHorizonFactor = 0.62 + 0.38 * Math.max(0, Math.sin(s * Math.PI / 180));
      } else this.spherical.theta = this.theta, this.spherical.phi = this.phi, this.sunHorizonFactor = 1;
      this.direction.setFromSpherical(this.spherical).normalize();
      const e = this.game.view.optimalArea.position.clone();
      this.light.position.setFromSpherical(this.spherical).add(e), this.light.target.position.copy(e), this.directionHelper.position.copy(this.direction).multiplyScalar(5).add(this.game.view.focusPoint.position), this.directionHelper.lookAt(this.game.view.focusPoint.position), this.colorUniform.value.copy(this.game.dayCycles.properties.lightColor.value), this.intensityUniform.value = this.game.dayCycles.properties.lightIntensity.value * (this.sunHorizonFactor || 1);
    }
  }
  class xn {
    constructor() {
      var _a2, _b, _c, _d, _e2, _f;
      this.game = T.getInstance(), this.list = /* @__PURE__ */ new Map(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F3A8} Materials",
        expanded: false
      })), this.setGradient(), this.setLuminance(), this.createPalette(), this.createEmissiveGradient("emissiveOrangeRadialGradient", "#ff8641", "#ff3e00", 1.7, true, (_a2 = this.debugPanel) == null ? void 0 : _a2.addFolder({
        title: "emissiveOrangeRadialGradient"
      })), this.createEmissiveGradient("emissivePurpleRadialGradient", "#454bbc", "#ff2eb4", 1.7, true, (_b = this.debugPanel) == null ? void 0 : _b.addFolder({
        title: "emissivePurpleRadialGradient"
      })), this.createEmissiveGradient("emissiveBlueRadialGradient", "#91f0ff", "#128fff", 1.7, true, (_c = this.debugPanel) == null ? void 0 : _c.addFolder({
        title: "emissiveBlueRadialGradient"
      })), this.createEmissiveGradient("emissiveGreenRadialGradient", "#f8ffa6", "#74ff00", 1.5, true, (_d = this.debugPanel) == null ? void 0 : _d.addFolder({
        title: "emissiveGreenRadialGradient"
      })), this.createEmissiveGradient("emissiveWhiteRadialGradient", "#ffffff", "#666666", 2.7, false, (_e2 = this.debugPanel) == null ? void 0 : _e2.addFolder({
        title: "emissiveWhiteRadialGradient"
      })), this.createGradient("redGradient", "#ff3a3a", "#721551", (_f = this.debugPanel) == null ? void 0 : _f.addFolder({
        title: "redGradient"
      }));
    }
    createPalette() {
      const e = new V({
        colorNode: P(this.game.resources.paletteTexture).rgb
      });
      this.save("palette", e);
    }
    setGradient() {
      const t = document.createElement("canvas");
      t.width = 1, t.height = 16, this.gradientTexture = new Ne(t), this.gradientTexture.colorSpace = he;
      const s = t.getContext("2d"), i = [
        {
          stop: 0,
          value: "#ffb646"
        },
        {
          stop: 0.5,
          value: "#ff347e"
        },
        {
          stop: 1,
          value: "#01005f"
        }
      ], a = () => {
        const n = s.createLinearGradient(0, 0, 0, 16);
        for (const o of i) n.addColorStop(o.stop, o.value);
        s.fillStyle = n, s.fillRect(0, 0, 1, 16), this.gradientTexture.needsUpdate = true;
      };
      if (a(), this.game.debug.active) {
        const n = this.debugPanel.addFolder({
          title: "gradient"
        });
        for (const o of i) n.addBinding(o, "stop", {
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", a), n.addBinding(o, "value", {
          view: "color"
        }).on("change", a);
      }
    }
    setLuminance() {
      this.luminance = {}, this.luminance.coefficients = new y(), qi.getLuminanceCoefficients(this.luminance.coefficients), this.luminance.get = (e) => e.r * this.luminance.coefficients.x + e.g * this.luminance.coefficients.y + e.b * this.luminance.coefficients.z;
    }
    createEmissive(e = "material", t = "#ffffff", s = 3, i = null) {
      const a = d(M(t)), n = d(s), o = new O({
        transparent: true
      });
      return o.colorNode = a.div(Ve(a)).mul(n), o.fog = false, this.save(e, o), this.game.debug.active && i && (this.game.debug.addThreeColorBinding(i, a.value, "color"), i.addBinding(n, "value", {
        min: 0,
        max: 10,
        step: 0.01
      })), o;
    }
    createEmissiveGradient(e = "material", t = "#ffffff", s = "#ff0000", i = 3, a = true, n = null) {
      const o = d(M(t)), l = d(M(s)), r = d(i), h = new O({
        transparent: true
      });
      let c = A(o, l, k().sub(0.5).length().mul(2));
      a && (c = c.div(Ve(c)));
      const u = b(() => {
        const g = C(c.mul(r), 1);
        return g.assign(V.revealDiscardNodeBuilder(this.game, g)), g;
      });
      return h.outputNode = u(), h.fog = false, this.save(e, h), this.game.debug.active && n && (this.game.debug.addThreeColorBinding(n, o.value, "colorA"), this.game.debug.addThreeColorBinding(n, l.value, "colorB"), n.addBinding(r, "value", {
        min: 0,
        max: 10,
        step: 0.01
      })), h;
    }
    createGradient(e = "material", t = "red", s = "blue", i = null) {
      const a = d(new X(t)), n = d(new X(s)), o = A(a, n, k().y), l = new V({
        colorNode: o
      });
      return this.save(e, l), this.game.debug.active && i && (this.game.debug.addThreeColorBinding(i, a.value, "colorA"), this.game.debug.addThreeColorBinding(i, n.value, "colorB")), l;
    }
    setPreviews() {
      this.previews = {}, this.previews.list = /* @__PURE__ */ new Map(), this.previews.sphereGeometry = new Ls(1, 3), this.previews.boxGeometry = new Bt(1.5, 1.5, 1.5), this.previews.group = new at(), this.previews.group.visible = false, this.previews.group.userData.preventPreRender = true, this.game.scene.add(this.previews.group), this.previews.update = () => {
        this.list.forEach((e, t) => {
          if (!this.previews.list.has(t)) {
            const s = {}, i = e.color.clone(), a = Math.max(i.r, Math.max(i.g, i.b));
            a > 1 && i.set(i.r / a, i.g / a, i.b / a);
            const n = new D(this.previews.boxGeometry, new yt({
              color: i
            }));
            n.position.y = 0.75, n.position.x = this.list.size * 3, n.position.z = 0, n.castShadow = true, n.receiveShadow = true, this.previews.group.add(n);
            const o = new D(this.previews.boxGeometry, e);
            o.position.y = 0.75, o.position.x = this.list.size * 3, o.position.z = 3, o.castShadow = true, o.receiveShadow = true, this.previews.group.add(o);
            const l = new D(this.previews.sphereGeometry, e);
            l.position.z = 6, l.position.y = 0.75, l.position.x = this.list.size * 3, l.castShadow = true, l.receiveShadow = true, this.previews.group.add(l), this.previews.list.set(t, s);
          }
        });
      }, this.game.debug.active && this.debugPanel.addBinding(this.previews.group, "visible", {
        label: "previewsVisibile"
      });
    }
    save(e, t) {
      this.list.set(e, t), this.previews && this.previews.update();
    }
    getFromName(e, t) {
      if (this.list.has(e)) return this.list.get(e);
      const s = this.createFromMaterial(t);
      return this.save(e, s), s;
    }
    createFromMaterial(e) {
      if (e.isMeshLambertNodeMaterial || e.isMeshStandardMaterial) {
        let t = null;
        e.map ? t = P(e.map).rgb : t = M(e.color);
        let s = null;
        e.alphaMap ? s = P(e.alphaMap) : s = F(e.opacity);
        let i = e.transparent, a = false;
        (e.name === "projectsLabels" || e.name === "blackboardLabels") && (a = true, i = true, s = P(e.map).r);
        const n = new V({
          colorNode: t,
          alphaNode: s,
          hasCoreShadows: true,
          hasDropShadows: true,
          transparent: i
        });
        return n.premultipliedAlpha = a, n.map = e.map, n;
      }
      return e;
    }
    copy(e, t) {
      const s = [
        "name",
        "color",
        "transparent"
      ];
      for (const i of s) typeof e[i] < "u" && typeof t[i] < "u" && (t[i] = e[i]);
    }
    updateObject(e) {
      e.traverse((t) => {
        t.isMesh && (typeof t.material.userData.prevent > "u" || !t.material.userData.prevent) && (t.material = this.getFromName(t.material.name, t.material));
      });
    }
  }
  class Pn {
    constructor() {
      this.game = T.getInstance(), this.list = /* @__PURE__ */ new Map(), this.key = 0, this.roundedViewPosition = {
        x: 0,
        z: 0
      }, this.game.ticker.events.on("tick", () => {
        this.update();
      }, 4);
    }
    add(e = null, t = null) {
      const s = {
        visual: null,
        physical: null,
        needsUpdate: false,
        reseting: false
      };
      if (e && e.model) {
        const i = {
          updateMaterials: true,
          castShadow: true,
          receiveShadow: true,
          parent: this.game.scene,
          ...e
        }, a = {};
        a.object3D = e.model, a.parent = i.parent, i.updateMaterials && this.game.materials.updateObject(i.model), (i.castShadow || i.receiveShadow) && i.model.traverse((n) => {
          n.isMesh && (i.castShadow && (n.castShadow = true), i.receiveShadow && (n.receiveShadow = true));
        }), i.parent !== null && i.parent.add(a.object3D), s.visual = a;
      }
      return t && (s.physical = this.game.physics.getPhysical(t)), s.physical && (s.physical.body.userData = {
        object: s
      }), s.visual && (s.visual.object3D.userData.object = s), this.key++, this.list.set(this.key, s), s.visual && s.physical && (t.sleeping || !t.enabled || s.physical.type === "fixed") && (s.visual.object3D.position.copy(s.physical.body.translation()), s.visual.object3D.quaternion.copy(s.physical.body.rotation())), s;
    }
    getFromModel(e, t = {}, s = {}) {
      let i = e.name;
      const a = !!i.match(/physical/i), n = /physical|fixed|dynamic|kinematicPositionBased/gi, o = [];
      if (a) {
        typeof s.type > "u" && (s.type = "fixed", e.name.match(/dynamic/i) ? s.type = "dynamic" : e.name.match(/kinematicPositionBased/i) && (s.type = "kinematicPositionBased")), typeof e.userData.restitution < "u" && (s.restitution = e.userData.restitution), typeof e.userData.friction < "u" && (s.friction = e.userData.friction), typeof e.userData.category < "u" && (s.category = e.userData.category), e.name = i.replaceAll(n, "");
        const l = [
          ...e.children
        ];
        for (const r of l) {
          const h = {
            position: r.position,
            quaternion: r.quaternion
          };
          r.name.match(/^trimesh/i) ? (h.shape = "trimesh", h.parameters = [
            r.geometry.attributes.position.array,
            r.geometry.index.array
          ]) : r.name.match(/^hull/i) ? (h.shape = "hull", h.parameters = [
            r.geometry.attributes.position.array,
            r.geometry.index.array
          ]) : r.name.match(/^cuboid/i) ? (h.shape = "cuboid", h.parameters = [
            r.scale.x * 0.5,
            r.scale.y * 0.5,
            r.scale.z * 0.5
          ]) : r.name.match(/^tube/i) ? (h.shape = "cylinder", h.parameters = [
            r.scale.y * 0.5,
            r.scale.x * 0.5
          ]) : r.name.match(/^ball/i) && (h.shape = "ball", h.parameters = [
            r.scale.y * 0.5
          ]), typeof r.userData.restitution < "u" && (h.restitution = r.userData.restitution), typeof r.userData.friction < "u" && (h.friction = r.userData.friction), typeof r.userData.category < "u" && (h.category = r.userData.category), h.shape && (o.push(h), r.removeFromParent());
        }
      }
      return [
        {
          ...t,
          model: e
        },
        a ? {
          ...s,
          colliders: o
        } : null
      ];
    }
    addFromModel(e, t = {}, s = {}) {
      return this.add(...this.getFromModel(e, t, s));
    }
    resetObject(e) {
      if (!e.physical || e.physical.type !== "dynamic" && e.physical.type !== "kinematicPositionBased" || e.reseting) return;
      e.reseting = true;
      const t = e.physical.body.isEnabled();
      e.physical.body.setEnabled(false), e.physical.body.setTranslation(e.physical.initialState.position, false), e.physical.body.setRotation(e.physical.initialState.rotation, false), e.physical.body.setLinvel({
        x: 0,
        y: 0,
        z: 0
      }, false), e.physical.body.setAngvel({
        x: 0,
        y: 0,
        z: 0
      }, false), e.physical.body.resetForces(), e.physical.body.resetTorques(), this.game.ticker.wait(1, () => {
        e.physical.body.setEnabled(t), e.physical.initialState.sleeping && e.physical.body.sleep(), e.reseting = false, this.game.ticker.wait(1, () => {
          e.needsUpdate = true;
        });
      }), e.visual && (e.visual.parent && e.visual.parent !== e.visual.object3D.parent && e.visual.parent.add(e.visual.object3D), e.visual.object3D.position.copy(e.physical.initialState.position), e.visual.object3D.quaternion.copy(e.physical.initialState.rotation));
    }
    resetAll() {
      this.list.forEach((e) => {
        this.resetObject(e);
      });
    }
    disable(e) {
      e.physical && (e.physical.body.setLinvel({
        x: 0,
        y: 0,
        z: 0
      }, false), e.physical.body.setAngvel({
        x: 0,
        y: 0,
        z: 0
      }, false), e.physical.body.resetForces(), e.physical.body.resetTorques(), e.physical.body.setEnabled(false)), e.visual && e.visual.object3D.removeFromParent();
    }
    enable(e) {
      e.physical && e.physical.body.setEnabled(true), e.visual && e.visual.parent !== e.visual.object3D.parent && e.visual.parent.add(e.visual.object3D);
    }
    update() {
      const e = {
        x: Math.round(this.game.view.focusPoint.position.x),
        z: Math.round(this.game.view.focusPoint.position.z)
      };
      let t = false;
      (e.x !== this.roundedViewPosition.x || e.z !== this.roundedViewPosition.z) && (t = true, this.roundedViewPosition.x = e.x, this.roundedViewPosition.z = e.z), this.list.forEach((s) => {
        const i = s.physical ? s.physical.body.translation() : null;
        if (s.visual && s.physical && (s.needsUpdate || !s.physical.body.isSleeping() && s.physical.body.isEnabled()) && (s.needsUpdate = false, s.visual.object3D.position.copy(i), s.visual.object3D.quaternion.copy(s.physical.body.rotation())), s.physical && (i.y < this.game.water.depthElevation && this.resetObject(s), t)) {
          const a = Math.hypot(this.roundedViewPosition.x - i.x, this.roundedViewPosition.z - i.z);
          s.physical.body.isEnabled() && !s.physical.body.isSleeping() && a > this.game.view.optimalArea.radius && s.physical.body.sleep();
        }
      });
    }
  }
  class Sn {
    constructor() {
      this.game = T.getInstance(), this.colorA = d(M("#ff0000")), this.colorB = d(M("#0000ff")), this.radialCenter = d(w(0, 0)), this.radialStart = d(0), this.radialEnd = d(1);
      const e = w(Os.xy).sub(this.radialCenter).length().smoothstep(this.radialStart, this.radialEnd);
      this.color = A(this.colorA, this.colorB, e), this.game.scene.backgroundNode = this.color, this.near = d(this.game.view.optimalArea.nearDistance), this.far = d(this.game.view.optimalArea.farDistance), this.strength = Vi(this.near, this.far), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10), this.game.debug.active && this.game.debug.panel.addFolder({
        title: "\u2601\uFE0F Fog",
        expanded: false
      }).addBinding(this.radialCenter, "value", {
        value: "offset",
        min: 0,
        max: 1
      });
    }
    update() {
      const e = this.game.view.optimalArea.farDistance - this.game.view.optimalArea.nearDistance;
      this.colorA.value.copy(this.game.dayCycles.properties.fogColorA.value), this.colorB.value.copy(this.game.dayCycles.properties.fogColorB.value), this.near.value = this.game.view.optimalArea.nearDistance + this.game.dayCycles.properties.fogNearRatio.value * e, this.far.value = this.game.view.optimalArea.nearDistance + this.game.dayCycles.properties.fogFarRatio.value * e;
    }
  }
  class Xs {
    constructor(e = "Cycles", t = 10, s = null, i = false, a = 0) {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: e,
        expanded: false
      })), this.name = e, this.duration = t, this.shift = typeof a == "function" ? a : () => a, this.absoluteProgress = s !== null ? s : (Date.now() / 1e3 + this.shift()) / this.duration, this.newAbsoluteProgress = this.absoluteProgress, this.progress = this.absoluteProgress % 1, this.progressDelta = 1, this.keyframesList = [], this.properties = [], this.punctualEvents = /* @__PURE__ */ new Map(), this.intervalEvents = /* @__PURE__ */ new Map(), this.events = new se(), this.newAbsoluteProgressBinding = this.game.debug.addManualBinding(this.debugPanel, this, "newAbsoluteProgress", {
        view: "cameraring",
        series: 0,
        unit: {
          pixels: 100,
          ticks: 4,
          value: 1,
          step: 1e-3
        }
      }, () => s !== null ? s : ((/* @__PURE__ */ new Date()).getTime() / 1e3 + this.shift()) / this.duration, i), this.setKeyframes(), this.setOverride(), this.setIntervals(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 8), this.update(true);
    }
    getKeyframesDescriptions() {
      return [
        [
          {
            properties: {
              test: 0
            },
            stop: 0
          },
          {
            properties: {
              test: 1
            },
            stop: 0.5
          },
          {
            properties: {
              test: 0
            },
            stop: 1
          }
        ]
      ];
    }
    getIntervalDescriptions() {
      return [];
    }
    setKeyframes() {
      const e = this.getKeyframesDescriptions();
      for (const t of e) this.values = this.createKeyframes(t);
    }
    createKeyframes(e) {
      const t = {};
      t.steps = e;
      for (const a in e[0].properties) if (a !== "stop") {
        const n = {};
        n.value = e[0].properties[a], n.overrideValue = null, n.value instanceof X ? (n.type = "color", n.value = n.value.clone()) : typeof n.value == "number" && (n.type = "number", n.value = n.value), this.properties[a] = n;
      }
      const s = e[0], i = e[e.length - 1];
      if (i.stop < 1) {
        const a = {
          ...s
        };
        a.stop = 1 + a.stop, e.push(a);
      }
      if (s.stop > 0) {
        const a = {
          ...i
        };
        a.stop = -(1 - a.stop), e.unshift(a);
      }
      return this.keyframesList.push(t), t;
    }
    update(e = false) {
      this.newAbsoluteProgressBinding.update(), this.progressDelta = this.newAbsoluteProgress - this.absoluteProgress, this.absoluteProgress = this.newAbsoluteProgress;
      const t = this.absoluteProgress % 1;
      this.punctualEvents.forEach((s) => {
        t >= s.progress && this.progress < s.progress && (e ? this.game.ticker.wait(1, () => {
          this.events.trigger(s.name);
        }) : this.events.trigger(s.name));
      }), this.intervalEvents.forEach((s) => {
        const i = t > s.startProgress && t < s.endProgress;
        i && !s.inInterval && (s.inInterval = true, e ? this.game.ticker.wait(1, () => {
          this.events.trigger(s.name, [
            s.inInterval
          ]);
        }) : this.events.trigger(s.name, [
          s.inInterval
        ])), !i && s.inInterval && (s.inInterval = false, e ? this.game.ticker.wait(1, () => {
          this.events.trigger(s.name, [
            s.inInterval
          ]);
        }) : this.events.trigger(s.name, [
          s.inInterval
        ]));
      }), this.progress = t % 1, this.override.strength > 0 && this.override.progress !== null && (this.progress = ye(this.progress, this.override.progress, this.override.strength));
      for (const s of this.keyframesList) {
        let i = -1, a = 0;
        for (const h of s.steps) h.stop <= this.progress && (i = a), a++;
        const n = (i + 1) % s.steps.length, o = s.steps[i], l = s.steps[n];
        let r = 0;
        r = Gs(this.progress, o.stop, l.stop);
        for (const h in this.properties) {
          const c = this.properties[h];
          c.type === "color" ? c.value.lerpColors(o.properties[h], l.properties[h], r) : c.type === "number" && (c.value = ye(o.properties[h], l.properties[h], r)), this.override.strength > 0 && c.overrideValue !== null && (c.type === "color" ? c.value.lerpColors(c.value, c.overrideValue, this.override.strength) : c.type === "number" && (c.value = ye(c.value, c.overrideValue, this.override.strength)));
        }
      }
    }
    setOverride() {
      this.override = {}, this.override.strength = 0, this.override.progress = null, this.override.start = (e = {}, t = 5) => {
        for (const s in this.properties) {
          const i = this.properties[s];
          typeof e[s] < "u" ? i.overrideValue = e[s] : i.overrideValue = null;
        }
        typeof e.progress < "u" && (this.override.progress = e.progress), t === 0 ? this.override.strength = 1 : f.to(this.override, {
          strength: 1,
          duration: t,
          overwrite: true
        });
      }, this.override.end = (e = 5) => {
        e === 0 ? this.override.strength = 0 : f.to(this.override, {
          strength: 0,
          duration: e,
          overwrite: true
        });
      };
    }
    addPunctualEvent(e, t) {
      this.punctualEvents.set(e, {
        name: e,
        progress: t
      });
    }
    setIntervals() {
      const e = this.getIntervalDescriptions();
      for (const t of e) this.addIntervalEvent(t.name, t.start, t.end);
    }
    addIntervalEvent(e, t, s) {
      this.intervalEvents.set(e, {
        name: e,
        startProgress: t,
        endProgress: s,
        inInterval: false
      });
    }
  }
  const Ge = {
    day: {
      revealColor: new X("#5f7dff"),
      revealIntensity: 12,
      electricField: 0,
      temperature: 5,
      lightColor: new X("#fff3e2"),
      lightIntensity: 2,
      shadowColor: new X("#8a80b8"),
      fogColorA: new X("#9fdcff"),
      fogColorB: new X("#d4c8ff"),
      fogNearRatio: 0.42,
      fogFarRatio: 1.25
    },
    dusk: {
      revealColor: new X("#ff86d9"),
      revealIntensity: 5.55,
      electricField: 0.25,
      temperature: 0,
      lightColor: new X("#ff9d64"),
      lightIntensity: 1.7,
      shadowColor: new X("#5b2a9e"),
      fogColorA: new X("#5a6bff"),
      fogColorB: new X("#ff79c9"),
      fogNearRatio: 0.05,
      fogFarRatio: 1.25
    },
    night: {
      revealColor: new X("#b678ff"),
      revealIntensity: 10,
      electricField: 1,
      temperature: -7.5,
      lightColor: new X("#5064ff"),
      lightIntensity: 2.6,
      shadowColor: new X("#2a1b8f"),
      fogColorA: new X("#10266f"),
      fogColorB: new X("#490a42"),
      fogNearRatio: -0.85,
      fogFarRatio: 1
    },
    dawn: {
      revealColor: new X("#ff9d9d"),
      revealIntensity: 4.85,
      electricField: 0.25,
      temperature: 0,
      lightColor: new X("#ffd0a6"),
      lightIntensity: 1.35,
      shadowColor: new X("#8f5f9c"),
      fogColorA: new X("#c7a8ff"),
      fogColorB: new X("#ffb066"),
      fogNearRatio: 0.2,
      fogFarRatio: 1.25
    }
  };
  class Tn extends Xs {
    constructor() {
      super("\u{1F55C} Day Cycles", 1440 * 60, null, false, () => -(/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 - 1080 * 60);
    }
    get presets() {
      return Ge;
    }
    getKeyframesDescriptions() {
      if (this.game.debug.active) {
        this.debugPanel.addBinding(this, "duration", {
          min: 1,
          max: 1440 * 60,
          step: 1
        });
        for (const e in Ge) {
          const t = Ge[e], s = this.debugPanel.addFolder({
            title: e,
            expanded: true
          });
          this.game.debug.addThreeColorBinding(s, t.revealColor, "revealColor"), s.addBinding(t, "revealIntensity", {
            min: 0,
            max: 20,
            step: 1e-3
          }), this.game.debug.addThreeColorBinding(s, t.lightColor, "lightColor"), s.addBinding(t, "lightIntensity", {
            min: 0,
            max: 20
          }), this.game.debug.addThreeColorBinding(s, t.shadowColor, "shadowColor"), this.game.debug.addThreeColorBinding(s, t.fogColorA, "fogColorA"), this.game.debug.addThreeColorBinding(s, t.fogColorB, "fogColorB"), s.addBinding(t, "fogNearRatio", {
            label: "near",
            min: -2,
            max: 2,
            step: 1e-3
          }), s.addBinding(t, "fogFarRatio", {
            label: "far",
            min: -2,
            max: 2,
            step: 1e-3
          });
        }
      }
      return [
        [
          {
            properties: Ge.dusk,
            stop: 0
          },
          {
            properties: Ge.night,
            stop: 0.05
          },
          {
            properties: Ge.night,
            stop: 0.42
          },
          {
            properties: Ge.dawn,
            stop: 0.5
          },
          {
            properties: Ge.day,
            stop: 0.55
          },
          {
            properties: Ge.day,
            stop: 0.95
          }
        ]
      ];
    }
    getIntervalDescriptions() {
      return [
        {
          name: "night",
          start: 0.04,
          end: 0.48
        },
        {
          name: "deepNight",
          start: 0.2,
          end: 0.42
        }
      ];
    }
  }
  class Mn {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F326}\uFE0F Weather",
        expanded: false
      })), this.properties = [], this.setOverride(), this.addProperty("temperature", -15, 40, () => {
        const e = this.game.yearCycles.properties.temperature.value, t = this.game.dayCycles.properties.temperature.value, a = this.noise(this.game.dayCycles.absoluteProgress * 0.4) * 7.5;
        return e + t + a;
      }), this.addProperty("humidity", 0, 1, () => {
        const e = this.game.yearCycles.properties.humidity.value, i = this.noise(this.game.dayCycles.absoluteProgress * 0.36) * 0.2;
        return e + i;
      }), this.addProperty("electricField", -1, 1, () => {
        const e = this.game.dayCycles.properties.electricField.value, i = this.noise(this.game.dayCycles.absoluteProgress * 0.53) * 1;
        return e * i;
      }), this.addProperty("clouds", -1, 1, () => this.noise(this.game.dayCycles.absoluteProgress * 0.44) * 1), this.addProperty("wind", 0, 1, () => this.noise(this.game.dayCycles.absoluteProgress * 1) * 0.5 + 0.5), this.addProperty("rain", 0, 1, () => L(this.humidity.value, 0.65, 1, 0, 1) * L(this.clouds.value, 0, 1, 0, 1)), this.addProperty("snow", -1, 1, () => {
        const e = L(this.rain.value, 0.05, 0.3, 0, 1), t = L(this.temperature.value, 0, -5, 0, 1), s = L(this.temperature.value, 0, 10, 0, -1);
        return e * t + s;
      }), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 8);
    }
    noise(e) {
      return Math.sin(e) * Math.sin(e * 1.678) * Math.sin(e * 2.345);
    }
    addProperty(e, t, s, i) {
      const a = {};
      a.name = e, a.manual = false, a.min = t, a.max = s, a.value = i(), a.overrideValue = null, a.binding = this.game.debug.addManualBinding(this.debugPanel, a, "value", {
        label: e,
        min: a.min,
        max: a.max,
        step: 1e-3
      }, () => {
        let n = i();
        return this.override.strength > 0 && a.overrideValue !== null && (n = ye(n, a.overrideValue, this.override.strength)), n;
      }), this.game.debug.active && (this.debugPanel.addBinding(a, "value", {
        readonly: true
      }), this.debugPanel.addBinding(a, "value", {
        label: `${a.min} -> ${a.max}`,
        readonly: true,
        view: "graph",
        min: a.min,
        max: a.max
      }), this.debugPanel.addBlade({
        view: "separator"
      })), this[e] = a, this.properties.push(a);
    }
    setOverride() {
      this.override = {}, this.override.strength = 0, this.override.start = (e = {}, t = 5) => {
        for (const s of this.properties) typeof e[s.name] < "u" ? s.overrideValue = e[s.name] : s.overrideValue = null;
        t === 0 ? this.override.strength = 1 : f.to(this.override, {
          strength: 1,
          duration: t,
          overwrite: true
        });
      }, this.override.end = (e = 5) => {
        e === 0 ? this.override.strength = 0 : f.to(this.override, {
          strength: 0,
          duration: e,
          overwrite: true
        });
      };
    }
    update() {
      for (const e of this.properties) e.binding.update();
    }
  }
  const Dt = b(([m]) => {
    const e = w(m).toVar();
    return e.assign(w(qe(e, w(127.1, 311.7)), qe(e, w(269.5, 183.3)))), it(de(e).mul(43758.5453123));
  }).setLayout({
    name: "hash",
    type: "vec2",
    inputs: [
      {
        name: "p",
        type: "vec2"
      }
    ]
  }), kn = b(([m, e]) => {
    const t = F(e).toVar(), s = w(m).toVar(), i = w(0).toVar();
    s.mulAssign(t);
    const a = w(Ot(s)).toVar(), n = w(it(s)).toVar(), o = F(1).toVar(), l = F(1).toVar(), r = w(0).toVar();
    return rs({
      start: Me(-1),
      end: Me(1),
      name: "y",
      condition: "<="
    }, ({ y: h }) => {
      rs({
        start: Me(-1),
        end: Me(1),
        name: "x",
        condition: "<="
      }, ({ x: c }) => {
        const u = w(c, h).toVar(), g = w(We(a.add(u), t)).toVar(), p = w(Dt(g)).toVar(), v = w(u.add(p.sub(n))).toVar(), x = F(Hi(v)).toVar();
        De(x.lessThan(o), () => {
          l.assign(o), o.assign(x), r.assign(a.add(u));
        }).ElseIf(x.lessThan(l), () => {
          l.assign(x);
        });
      });
    }), i.assign(it(r.div(t))), E(o, l.sub(o), Dt(i).x);
  }).setLayout({
    name: "voronoi",
    type: "vec3",
    inputs: [
      {
        name: "uv",
        type: "vec2"
      },
      {
        name: "repeat",
        type: "float"
      }
    ]
  }), ms = b(([m, e]) => {
    const t = w(e).toVar(), s = w(m).toVar(), i = w(We(s, t).add(t)).toVar();
    return We(i, t);
  }).setLayout({
    name: "modulo",
    type: "vec2",
    inputs: [
      {
        name: "divident",
        type: "vec2"
      },
      {
        name: "divisor",
        type: "vec2"
      }
    ]
  }), Ct = b(([m]) => {
    const e = w(m).toVar();
    return e.assign(w(qe(e, w(127.1, 311.7)), qe(e, w(269.5, 183.3)))), F(-1).add(Lt(2, it(de(e).mul(43758.5453123))));
  }).setLayout({
    name: "random",
    type: "vec2",
    inputs: [
      {
        name: "value",
        type: "vec2"
      }
    ]
  }), Cn = b(([m, e, t]) => {
    const s = w(t).toVar(), i = F(e).toVar(), a = w(m).toVar();
    a.assign(a.mul(F(i)));
    const n = w(Ot(a)).toVar(), o = w(Wi(a)).toVar(), l = w(it(a)).toVar();
    n.assign(ms(n, s)), o.assign(ms(o, s));
    const r = w(rt(0, 1, l)).toVar(), h = w(Ct(w(n.x, n.y))).toVar(), c = w(Ct(w(o.x, n.y))).toVar(), u = w(Ct(w(n.x, o.y))).toVar(), g = w(Ct(w(o.x, o.y))).toVar(), p = w(it(a)).toVar();
    return A(A(qe(h, p.sub(w(Me(0), Me(0)))), qe(c, p.sub(w(Me(1), Me(0)))), r.x), A(qe(u, p.sub(w(Me(0), Me(1)))), qe(g, p.sub(w(Me(1), Me(1)))), r.x), r.y).mul(0.8).add(0.5);
  }).setLayout({
    name: "perlinNode",
    type: "float",
    inputs: [
      {
        name: "uv",
        type: "vec2"
      },
      {
        name: "cell_amount",
        type: "float"
      },
      {
        name: "period",
        type: "vec2"
      }
    ]
  });
  class An {
    constructor() {
      this.game = T.getInstance(), this.quadMesh = new Bs(), this.resolution = 128, this.setVoronoi(), this.setPerlin(), this.setHash();
    }
    setVoronoi() {
      const e = new ut(this.resolution, this.resolution, {
        depthBuffer: false,
        type: At
      });
      this.voronoi = e.texture, this.voronoi.wrapS = xe, this.voronoi.wrapT = xe;
      const t = new O({
        color: "red",
        wireframe: false
      });
      t.outputNode = C(kn(k(), 8), 0), this.quadMesh.material = t;
      const s = Fe.resetRendererState(this.game.rendering.renderer);
      this.game.rendering.renderer.setPixelRatio(1), this.game.rendering.renderer.setRenderTarget(e), this.quadMesh.render(this.game.rendering.renderer), this.game.rendering.renderer.setRenderTarget(null), Fe.restoreRendererState(this.game.rendering.renderer, s);
    }
    setPerlin() {
      const e = new ut(this.resolution, this.resolution, {
        depthBuffer: false,
        format: mt,
        type: At
      });
      this.perlin = e.texture, this.perlin.wrapS = xe, this.perlin.wrapT = xe;
      const t = new O();
      t.outputNode = C(Cn(k(), 6, 6).remap(0.1, 0.9, 0, 1), Dt(k().mul(128).floor().div(128)).x, 0, 0), this.quadMesh.material = t;
      const s = Fe.resetRendererState(this.game.rendering.renderer);
      this.game.rendering.renderer.setPixelRatio(1), this.game.rendering.renderer.setRenderTarget(e), this.quadMesh.render(this.game.rendering.renderer), this.game.rendering.renderer.setRenderTarget(null), Fe.restoreRendererState(this.game.rendering.renderer, s);
    }
    setHash() {
      const e = new ut(this.resolution, this.resolution, {
        depthBuffer: false,
        format: mt,
        type: At
      });
      this.hash = e.texture, this.hash.wrapS = xe, this.hash.wrapT = xe, this.hash.minFilter = W, this.hash.magFilter = W, this.hash.generateMipmaps = false;
      const t = new O();
      t.outputNode = C(Dt(Os).x, 0, 0, 0), this.quadMesh.material = t;
      const s = Fe.resetRendererState(this.game.rendering.renderer);
      this.game.rendering.renderer.setPixelRatio(1), this.game.rendering.renderer.setRenderTarget(e), this.quadMesh.render(this.game.rendering.renderer), this.game.rendering.renderer.setRenderTarget(null), Fe.restoreRendererState(this.game.rendering.renderer, s);
    }
  }
  class En {
    constructor() {
      this.game = T.getInstance(), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F4A8} Wind",
        expanded: false
      })), this.angle = Math.PI * 0.6, this.direction = d(w(Math.sin(this.angle), Math.cos(this.angle))), this.positionFrequency = d(0.5), this.strength = d(0.5), this.localTime = d(0), this.timeFrequency = 0.1, this.offsetNode = b(([e]) => {
        const t = e.mul(this.positionFrequency), s = t.xy.mul(0.2).add(this.direction.mul(this.localTime)).xy, i = P(this.game.noises.perlin, s).r.sub(0.5), a = t.xy.mul(0.1).add(this.direction.mul(this.localTime.mul(0.2))).xy, o = P(this.game.noises.perlin, a).r.sub(0.5).add(i);
        return w(this.direction.mul(o).mul(this.strength));
      }), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 9), this.strengthBinding = this.game.debug.addManualBinding(this.debugPanel, this.strength, "value", {
        label: "strength",
        min: 0,
        max: 1,
        step: 1e-3
      }, () => L(this.game.weather.wind.value, 0, 1, 0.1, 1)), this.game.debug.active && (this.debugPanel.addBinding(this.positionFrequency, "value", {
        label: "positionFrequency",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this, "timeFrequency", {
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this, "angle", {
        min: -Math.PI,
        max: Math.PI,
        step: 1e-3
      }).on("change", (e) => {
        this.direction.value.set(Math.sin(e.value), Math.cos(e.value));
      }));
    }
    update() {
      this.strengthBinding.update(), this.localTime.value += this.game.ticker.deltaScaled * this.timeFrequency * this.strength.value;
    }
  }
  class In {
    constructor() {
      this.game = T.getInstance(), this.subdivision = 128, this.size = 192, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F3D4}\uFE0F Terrain Data",
        expanded: false
      })), this.setGradient(), this.setNodes(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 10);
    }
    setGradient() {
      const t = document.createElement("canvas");
      t.width = 1, t.height = 16, this.gradientTexture = new Ne(t), this.gradientTexture.colorSpace = he;
      const s = t.getContext("2d");
      this.colors = [
        {
          stop: 0.1,
          value: "#ffa94e"
        },
        {
          stop: 0.3,
          value: "#5bc2b9"
        },
        {
          stop: 0.9,
          value: "#13375f"
        }
      ];
      const i = () => {
        const a = s.createLinearGradient(0, 0, 0, 16);
        for (const n of this.colors) a.addColorStop(n.stop, n.value);
        s.fillStyle = a, s.fillRect(0, 0, 1, 16), this.gradientTexture.needsUpdate = true;
      };
      if (i(), this.game.debug.active) for (const a of this.colors) this.debugPanel.addBinding(a, "stop", {
        min: 0,
        max: 1,
        step: 1e-3
      }).on("change", i), this.debugPanel.addBinding(a, "value", {
        view: "color"
      }).on("change", i);
    }
    setNodes() {
      this.grassColorUniform = d(M("#b8b62e")), this.tracksDelta = d(w(0));
      const e = b(([t]) => t.div(this.subdivision).div(1.5).add(0.5));
      this.terrainNode = b(([t]) => {
        const s = e(t), i = P(this.game.resources.terrainTexture, s), a = P(this.game.tracks.renderTarget.texture, t.sub(-this.game.tracks.halfSize).sub(this.tracksDelta).div(this.game.tracks.size));
        return i.g.mulAssign(a.r.oneMinus()), i;
      }), this.colorNode = b(([t]) => {
        const s = P(this.gradientTexture, w(0, t.b.oneMinus()));
        return s.assign(A(s, this.grassColorUniform, t.g)), s.rgb;
      }), this.game.debug.active && this.game.debug.addThreeColorBinding(this.debugPanel, this.grassColorUniform.value, "grassColor");
    }
    update() {
      this.tracksDelta.value.set(this.game.tracks.focusPoint.x, this.game.tracks.focusPoint.y);
    }
  }
  class Bn {
    constructor() {
      this.game = new T(), this.events = new se();
    }
    explode(e, t = 7, s = 4, i = false, a = 3) {
      var _a2;
      const n = this.game.view.focusPoint.position.distanceTo(e), o = L(n, 2, 15, 1, 0);
      this.game.view.roll.kick(o), (_a2 = this.game.world.leaves) == null ? void 0 : _a2.explode(e, t);
      const l = (h) => {
        const c = new y();
        c.copy(h.body.translation());
        const u = c.clone().sub(e);
        u.y = 0;
        const g = Math.hypot(u.x, u.z), p = L(g, 1, t, 1, 0), v = u.clone().setLength(0.5);
        v.y = 1, v.normalize();
        const x = p * s;
        if (v.setLength(x * h.body.mass()), p > 0) {
          const S = c;
          if (this.game.ticker.wait(1, () => {
            h.body.applyImpulseAtPoint(v, S, true);
          }), h === this.game.physicalVehicle.chassis.physical && x > a) return this.game.time.bulletTime.activate(), true;
        }
        return false;
      };
      let r = false;
      return i ? r = l(this.game.physicalVehicle.chassis.physical) : this.game.objects.list.forEach((h) => {
        h.physical && h.physical.type === "dynamic" && h.physical.body.isEnabled() && (r = r | l(h.physical));
      }), r;
    }
  }
  class Nn extends Xs {
    constructor() {
      super("\u{1F55C} Year Cycles", 3600 * 24 * 365, null, false);
    }
    getKeyframesDescriptions() {
      const e = {
        winter: {
          leaves: 0.25,
          temperature: 5,
          humidity: 0.8,
          clouds: 0.65,
          wind: 0.3
        },
        spring: {
          leaves: 0,
          temperature: 15,
          humidity: 0.65,
          clouds: 0.45,
          wind: 0.2
        },
        summer: {
          leaves: 0.25,
          temperature: 25,
          humidity: 0.5,
          clouds: 0.3,
          wind: 0.1
        },
        fall: {
          leaves: 1,
          temperature: 15,
          humidity: 0.65,
          clouds: 0.65,
          wind: 0.25
        }
      };
      return [
        [
          {
            properties: e.winter,
            stop: 0 + 0.125
          },
          {
            properties: e.spring,
            stop: 0.25 + 0.125
          },
          {
            properties: e.summer,
            stop: 0.5 + 0.125
          },
          {
            properties: e.fall,
            stop: 0.75 + 0.125
          }
        ]
      ];
    }
  }
  class Dn {
    constructor() {
      this.game = T.getInstance(), this.uuid = localStorage.getItem("uuid"), this.uuid || (this.uuid = ii(), localStorage.setItem("uuid", this.uuid)), this.connected = false, this.initData = null, this.events = new se(), document.documentElement.classList.add("is-server-offline");
    }
    start() {
    }
    connect() {
      this.socket = new WebSocket(""), this.socket.binaryType = "arraybuffer", this.socket.addEventListener("open", () => {
        this.connected = true, document.documentElement.classList.remove("is-server-offline"), document.documentElement.classList.add("is-server-online"), this.events.trigger("connected"), this.socket.addEventListener("message", (e) => {
          this.onReceive(e);
        }), this.game.ticker.elapsed > 10 && this.game.notifications.show(`
                    <div class="top">
                        <div class="title">Server connected</div>
                    </div>
                `, "server-connected", 8, null, "server-connected"), this.socket.addEventListener("close", () => {
          document.documentElement.classList.add("is-server-offline"), document.documentElement.classList.remove("is-server-online"), this.connected = false, this.game.notifications.show(`
                    <div class="top">
                        <div class="title">Server disconnected</div>
                    </div>
                `, "server-disconnected", 8, null, "server-disconnected"), this.events.trigger("disconnected");
        });
      });
    }
    onReceive(e) {
      const t = this.decode(e.data);
      this.initData === null && (this.initData = t), this.events.trigger("message", [
        t
      ]);
    }
    send(e) {
      if (!this.connected) return false;
      this.socket.send(this.encode({
        uuid: this.uuid,
        ...e
      }));
    }
    decode(e) {
      return is.decode(new Uint8Array(e));
    }
    encode(e) {
      return is.encode(e);
    }
  }
  class Ys {
    constructor(e) {
      this.game = T.getInstance(), this.element = e, this.setItems();
    }
    setItems() {
      this.items = {}, this.items.navigationContainer = this.element.querySelector(".js-tabs-navigation"), this.items.navigationItems = [
        ...this.items.navigationContainer.querySelectorAll(".js-tabs-navigation-item")
      ], this.items.contentContainer = this.element.querySelector(".js-tabs-content"), this.items.contentItems = [
        ...this.items.contentContainer.querySelectorAll(".js-tabs-content-item")
      ], this.items.list = /* @__PURE__ */ new Map(), this.items.current = null;
      let e = null;
      for (const t of this.items.navigationItems) {
        const s = {};
        s.name = t.dataset.tabsName, s.navigationElement = t, s.contentElement = this.items.contentItems.find((i) => i.classList.contains(s.name)), s.innerElement = s.contentElement.querySelector(".js-tabs-content-inner"), s.navigationElement.addEventListener("click", () => {
          this.goTo(s.name);
        }), typeof s.contentElement.dataset.tabsDefault < "u" && (e = s), this.items.list.set(s.name, s);
      }
      e && this.goTo(e.name);
    }
    goTo(e) {
      var _a2;
      if (e === ((_a2 = this.items.current) == null ? void 0 : _a2.name)) return;
      const t = this.items.list.get(e);
      t && (this.items.current && (this.items.current.contentElement.classList.remove("is-active"), this.items.current.navigationElement.classList.remove("is-active")), this.items.current = t, this.items.current.contentElement.classList.add("is-active"), this.items.current.navigationElement.classList.add("is-active"));
    }
  }
  const _ce = class _ce {
    constructor() {
      this.game = T.getInstance(), this.state = _ce.CLOSED, this.element = document.querySelector(".js-modals"), this.current = null, this.pending = null, this.default = null, this.events = new se(), this.setClose(), this.setItems(), this.preopen(), this.element.addEventListener("transitionend", () => {
        this.onTransitionEnded();
      });
    }
    onTransitionEnded() {
      this.state === _ce.OPENING ? (this.state = _ce.OPEN, this.events.trigger("opened"), this.current.events.trigger("opened")) : this.state === _ce.CLOSING && (this.state = _ce.CLOSED, this.events.trigger("closed"), this.current.events.trigger("closed"), this.current.element.classList.remove("is-displayed"), this.current = null, this.pending ? (this.open(this.pending), this.pending = null) : this.element.classList.remove("is-displayed"));
    }
    setItems() {
      const e = this.element.querySelectorAll(".js-modal");
      this.items = /* @__PURE__ */ new Map();
      for (const t of e) {
        const s = t.dataset.name, i = {
          name: s,
          element: t,
          isOpen: false,
          tabs: null,
          mainFocus: t.querySelector(".js-main-focus"),
          events: new se()
        }, a = t.querySelector(".js-tabs");
        a && (i.tabs = new Ys(a)), this.items.set(s, i), typeof t.dataset.default < "u" && (this.default = i);
      }
    }
    setClose() {
      const e = this.element.querySelectorAll(".js-close");
      for (const t of e) t.addEventListener("click", () => {
        this.pending = null, this.close();
      });
      this.element.addEventListener("click", (t) => {
        t.target === this.element && this.close();
      });
    }
    open(e) {
      const t = this.items.get(e);
      if (t) {
        if (this.state === _ce.OPEN || this.state === _ce.OPENING) {
          if (t === this.current) return;
          this.pending = e, this.close();
        } else if (this.state === _ce.CLOSING) this.pending = e;
        else if (this.state === _ce.CLOSED) {
          const s = this.game.audio.groups.get("click");
          s && s.play(true), this.element.classList.add("is-displayed"), t.element.classList.add("is-displayed"), requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.element.classList.add("is-visible"), t.tabs && t.tabs.resize(), t.mainFocus && t.mainFocus.focus();
            });
          }), this.state = _ce.OPENING, this.current = t, this.game.inputs.filters.clear(), this.game.inputs.filters.add("modal"), t.isOpen = true, this.events.trigger("open"), t.events.trigger("open");
        }
      }
    }
    close() {
      if (this.state === _ce.CLOSING || this.state === _ce.CLOSED) return;
      const e = this.game.audio.groups.get("click");
      e && e.play(false), this.element.classList.remove("is-visible"), this.state = _ce.CLOSING, this.current.isOpen = false, this.events.trigger("close"), this.current.events.trigger("close");
    }
    preopen() {
      this.game.debug.active || this.items.forEach((e) => {
        typeof e.element.dataset.preopen < "u" && this.open(e.name);
      });
    }
  };
  __publicField(_ce, "OPEN", 1);
  __publicField(_ce, "OPENING", 2);
  __publicField(_ce, "CLOSED", 3);
  __publicField(_ce, "CLOSING", 4);
  let ce = _ce;
  class Rn {
    constructor() {
      this.game = T.getInstance(), this.events = new se(), this.steeringAmplitude = 0.5, this.engineForceAmplitude = 300, this.boostMultiplier = 2, this.topSpeed = 5, this.topSpeedBoost = 40, this.brakeAmplitude = 35, this.idleBrake = 0.06, this.reverseBrake = 0.4, this.sideward = new y(0, 0, 1), this.upward = new y(0, 1, 0), this.forward = new y(1, 0, 0), this.position = new y(0, 4, 0), this.quaternion = new ot(), this.velocity = new y(), this.direction = this.forward.clone(), this.speed = 0, this.suspensionsHeights = {
        low: 0.88,
        mid: 1.23,
        high: 1.63
      }, this.suspensionsStiffness = {
        low: 20,
        mid: 30,
        high: 40
      }, this.game.debug.active && (this.debugPanel = this.game.physics.debugPanel.addFolder({
        title: "Vehicle",
        expanded: true
      }), this.debugPanel.addBinding(this, "steeringAmplitude", {
        min: 0,
        max: Math.PI * 0.5,
        step: 0.01
      }), this.debugPanel.addBinding(this, "engineForceAmplitude", {
        min: 1,
        max: 20,
        step: 1
      }), this.debugPanel.addBinding(this, "boostMultiplier", {
        min: 1,
        max: 5,
        step: 0.01
      }), this.debugPanel.addBinding(this, "topSpeed", {
        min: 0,
        max: 20,
        step: 0.1
      }), this.debugPanel.addBinding(this, "topSpeedBoost", {
        min: 0,
        max: 20,
        step: 0.1
      }), this.debugPanel.addBinding(this, "brakeAmplitude", {
        min: 0,
        max: 200,
        step: 0.01
      }), this.debugPanel.addBinding(this, "idleBrake", {
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this, "reverseBrake", {
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.suspensionsHeights, "low", {
        min: 0,
        max: 2,
        step: 0.01
      }), this.debugPanel.addBinding(this.suspensionsHeights, "mid", {
        min: 0,
        max: 2,
        step: 0.01
      }), this.debugPanel.addBinding(this.suspensionsHeights, "high", {
        min: 0,
        max: 2,
        step: 0.01
      }), this.debugPanel.addBinding(this.suspensionsStiffness, "low", {
        min: 0,
        max: 100,
        step: 0.1
      }), this.debugPanel.addBinding(this.suspensionsStiffness, "mid", {
        min: 0,
        max: 100,
        step: 0.1
      }), this.debugPanel.addBinding(this.suspensionsStiffness, "high", {
        min: 0,
        max: 100,
        step: 0.1
      })), this.setChassis(), this.controller = this.game.physics.world.createVehicleController(this.chassis.physical.body), this.setWheels(), this.setStop(), this.setUpsideDown(), this.setStuck(), this.setFlip(), this.game.ticker.events.on("tick", () => {
        this.updatePrePhysics();
      }, 2), this.game.ticker.events.on("tick", () => {
        this.updatePostPhysics();
      }, 5);
    }
    setChassis() {
      this.chassis = {};
      const e = this.game.objects.add(null, {
        type: "dynamic",
        position: this.position,
        friction: 0.4,
        rotation: new ot().setFromAxisAngle(new dt(0, 1, 0), Math.PI * 0),
        colliders: [
          {
            shape: "cuboid",
            mass: 2.5,
            parameters: [
              1.3,
              0.4,
              0.85
            ],
            position: {
              x: 0,
              y: -0.1,
              z: 0
            },
            centerOfMass: {
              x: 0,
              y: -0.5,
              z: 0
            }
          },
          {
            shape: "cuboid",
            mass: 0,
            parameters: [
              0.5,
              0.15,
              0.65
            ],
            position: {
              x: 0,
              y: 0.4,
              z: 0
            }
          },
          {
            shape: "cuboid",
            mass: 0,
            parameters: [
              1.5,
              0.5,
              0.9
            ],
            position: {
              x: 0.1,
              y: -0.2,
              z: 0
            },
            category: "bumper"
          }
        ],
        canSleep: false,
        waterGravityMultiplier: 0,
        onCollision: (t, s) => {
          this.game.audio.groups.get("hitDefault").playRandomNext(t, s);
        }
      });
      this.chassis.physical = e.physical, this.chassis.mass = this.chassis.physical.body.mass();
    }
    setWheels() {
      this.wheels = {}, this.wheels.inContactCount = 0, this.wheels.justTouchedCount = 0, this.wheels.items = [];
      for (let e = 0; e < 4; e++) {
        const t = {};
        t.inContact = false, t.contactPoint = null, t.suspensionLength = null, t.suspensionState = "low", t.lastTouchTime = this.game.ticker.elapsed, this.controller.addWheel(new y(), new y(), new y(), 1, 1), t.basePosition = new y(), this.wheels.items.push(t);
      }
      this.wheels.settings = {
        offset: {
          x: 0.9,
          y: 0,
          z: 0.75
        },
        radius: 0.4,
        directionCs: {
          x: 0,
          y: -1,
          z: 0
        },
        axleCs: {
          x: 0,
          y: 0,
          z: 1
        },
        frictionSlip: 0.9,
        maxSuspensionForce: 150,
        maxSuspensionTravel: 2,
        sideFrictionStiffness: 3,
        suspensionCompression: 10,
        suspensionRelaxation: 2.7,
        suspensionStiffness: 25
      }, this.wheels.updateSettings = () => {
        this.wheels.perimeter = this.wheels.settings.radius * Math.PI * 2;
        const e = [
          new y(this.wheels.settings.offset.x, this.wheels.settings.offset.y, this.wheels.settings.offset.z),
          new y(this.wheels.settings.offset.x, this.wheels.settings.offset.y, -this.wheels.settings.offset.z),
          new y(-this.wheels.settings.offset.x, this.wheels.settings.offset.y, this.wheels.settings.offset.z),
          new y(-this.wheels.settings.offset.x, this.wheels.settings.offset.y, -this.wheels.settings.offset.z)
        ];
        let t = 0;
        for (const s of this.wheels.items) s.basePosition.copy(e[t]), this.controller.setWheelDirectionCs(t, this.wheels.settings.directionCs), this.controller.setWheelAxleCs(t, this.wheels.settings.axleCs), this.controller.setWheelRadius(t, this.wheels.settings.radius), this.controller.setWheelChassisConnectionPointCs(t, s.basePosition), this.controller.setWheelFrictionSlip(t, this.wheels.settings.frictionSlip), this.controller.setWheelMaxSuspensionForce(t, this.wheels.settings.maxSuspensionForce), this.controller.setWheelMaxSuspensionTravel(t, this.wheels.settings.maxSuspensionTravel), this.controller.setWheelSideFrictionStiffness(t, this.wheels.settings.sideFrictionStiffness), this.controller.setWheelSuspensionCompression(t, this.wheels.settings.suspensionCompression), this.controller.setWheelSuspensionRelaxation(t, this.wheels.settings.suspensionRelaxation), t++;
      }, this.wheels.updateSettings(), this.game.debug.active && (this.debugPanel.addBlade({
        view: "separator"
      }), this.debugPanel.addBinding(this.wheels.settings, "offset", {
        min: -1,
        max: 2,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "radius", {
        min: 0,
        max: 1,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "frictionSlip", {
        min: 0,
        max: 1,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "maxSuspensionForce", {
        min: 0,
        max: 1e3,
        step: 1
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "maxSuspensionTravel", {
        min: 0,
        max: 2,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "sideFrictionStiffness", {
        min: 0,
        max: 10,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "suspensionCompression", {
        min: 0,
        max: 30,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "suspensionRelaxation", {
        min: 0,
        max: 10,
        step: 0.01
      }).on("change", this.wheels.updateSettings), this.debugPanel.addBinding(this.wheels.settings, "suspensionStiffness", {
        min: 0,
        max: 100,
        step: 0.1
      }).on("change", this.wheels.updateSettings));
    }
    setStop() {
      this.stop = {}, this.stop.active = true, this.stop.lowThreshold = 0.04, this.stop.highThreshold = 0.7, this.stop.test = () => {
        this.speed < this.stop.lowThreshold ? this.stop.active || (this.stop.active = true, this.events.trigger("stop")) : this.speed > this.stop.highThreshold && this.stop.active && (this.stop.active = false, this.events.trigger("start"));
      };
    }
    setUpsideDown() {
      this.upsideDown = {}, this.upsideDown.active = false, this.upsideDown.ratio = 0, this.upsideDown.threshold = 0.3, this.upsideDown.test = () => {
        this.upsideDown.ratio = this.upward.dot(new y(0, -1, 0)) * 0.5 + 0.5, this.upsideDown.ratio > this.upsideDown.threshold ? this.upsideDown.active || (this.upsideDown.active = true, this.events.trigger("upsideDown", [
          this.upsideDown.ratio
        ])) : this.upsideDown.active && (this.upsideDown.active = false, this.events.trigger("rightSideUp"));
      };
    }
    setStuck() {
      this.stuck = {}, this.stuck.durationTest = 3, this.stuck.durationSaved = 0, this.stuck.savedItems = [], this.stuck.distance = 0, this.stuck.distanceThreshold = 0.5, this.stuck.active = false, this.stuck.accumulate = (e, t) => {
        this.stuck.savedItems.unshift([
          e,
          t
        ]), this.stuck.distance = 0, this.stuck.durationSaved = 0;
        for (let s = 0; s < this.stuck.savedItems.length; s++) {
          const i = this.stuck.savedItems[s];
          if (this.stuck.durationSaved >= this.stuck.durationTest) {
            this.stuck.savedItems.splice(s);
            break;
          } else this.stuck.distance += i[0], this.stuck.durationSaved += i[1];
        }
      }, this.stuck.test = () => {
        this.stuck.durationSaved >= this.stuck.durationTest && this.stuck.distance < this.stuck.distanceThreshold ? this.stuck.active || (this.stuck.active = true, this.events.trigger("stuck")) : this.stuck.active && (this.stuck.active = false, this.events.trigger("unstuck"));
      };
    }
    setFlip() {
      this.flip = {}, this.flip.force = 5;
      let e = false, t = 0, s = 0, i = 0, a = 0;
      this.flip.test = () => {
        this.wheels.inContactCount === 0 && (e || (e = true, t = this.xRotation, s = 0, i = this.zRotation, a = 0)), this.wheels.inContactCount >= 4 ? e && (e = false, Math.abs(s) < 1 && Math.abs(a) > 5 && this.events.trigger("flip", [
          Math.sign(a)
        ])) : e && (s += Nt(t, this.xRotation), t = this.xRotation, a += Nt(i, this.zRotation), i = this.zRotation);
      }, this.flip.jump = () => {
        s = 0, a = 0;
        const n = new y(0, 1, 0), o = n.dot(this.sideward), l = n.dot(this.forward), r = n.dot(this.upward), h = Math.abs(o), c = Math.abs(l), u = Math.abs(r), g = new y(0, 1, 0).multiplyScalar(this.flip.force * this.chassis.mass);
        if (this.chassis.physical.body.applyImpulse(g), u > h && u > c) {
          const p = 0.8 * this.chassis.mass, v = new y(p, 0, 0);
          v.applyQuaternion(this.chassis.physical.body.rotation()), this.chassis.physical.body.applyTorqueImpulse(v);
        } else {
          const p = o * 0.4 * this.chassis.mass, v = -l * 0.8 * this.chassis.mass, x = new y(p, 0, v);
          x.applyQuaternion(this.chassis.physical.body.rotation()), this.chassis.physical.body.applyTorqueImpulse(x);
        }
      }, this.game.debug.active && this.debugPanel.addBinding(this.flip, "force", {
        label: "flipForce",
        min: 0,
        max: 10,
        step: 0.01
      });
    }
    moveTo(e, t = 0) {
      const s = new ot().setFromAxisAngle(new y(0, 1, 0), t);
      this.chassis.physical.body.setTranslation(e), this.chassis.physical.body.setRotation(s), this.chassis.physical.body.setLinvel({
        x: 0,
        y: 0,
        z: 0
      }), this.chassis.physical.body.setAngvel({
        x: 0,
        y: 0,
        z: 0
      }), this.position.copy(e);
    }
    updatePrePhysics() {
      const e = ye(this.topSpeed, this.topSpeedBoost, this.game.player.boosting), t = Math.max(0, this.speed - e);
      let s = this.game.player.accelerating * (1 + this.game.player.boosting * this.boostMultiplier) * this.engineForceAmplitude / (1 + t) * this.game.ticker.deltaScaled, i = this.game.player.braking;
      !this.game.player.braking && Math.abs(this.game.player.accelerating) < 0.1 && (i = this.idleBrake), this.speed > 0.5 && (this.game.player.accelerating > 0 && !this.goingForward || this.game.player.accelerating < 0 && this.goingForward) && (i = this.reverseBrake, s = 0), i *= this.brakeAmplitude * this.game.ticker.deltaScaled;
      const a = this.game.player.steering * this.steeringAmplitude;
      this.controller.setWheelSteering(0, a), this.controller.setWheelSteering(1, a);
      for (let o = 0; o < 4; o++) {
        this.controller.setWheelBrake(o, i), this.controller.setWheelEngineForce(o, s), this.controller.setWheelSuspensionRestLength(o, this.suspensionsHeights[this.game.player.suspensions[o]]), this.controller.setWheelSuspensionStiffness(o, this.suspensionsStiffness[this.game.player.suspensions[o]]);
        const l = this.controller.wheelGroundObject(o);
        if (l && this.game.world.waterSurface) {
          const r = l.parent() === this.game.world.waterSurface.ice.physical.body, h = ye(this.wheels.settings.frictionSlip, 0.04, this.game.world.waterSurface.iceRatio.value);
          this.controller.setWheelFrictionSlip(o, r ? h : this.wheels.settings.frictionSlip);
        }
      }
      const n = this.game.quality.level === 1 ? 1 / 60 : Math.min(1 / 60, this.game.ticker.deltaAverage);
      this.controller.updateVehicle(n);
    }
    updatePostPhysics() {
      const e = new y().copy(this.chassis.physical.body.translation());
      this.velocity = e.clone().sub(this.position), this.direction = this.velocity.clone().normalize(), this.position.copy(e), this.quaternion.copy(this.chassis.physical.body.rotation()), this.sideward.set(0, 0, 1).applyQuaternion(this.quaternion), this.upward.set(0, 1, 0).applyQuaternion(this.quaternion), this.forward.set(1, 0, 0).applyQuaternion(this.quaternion), this.speed = this.velocity.length() / this.game.ticker.deltaScaled, this.xzSpeed = Math.hypot(this.velocity.x, this.velocity.z) / this.game.ticker.deltaScaled, this.forwardRatio = this.direction.dot(this.forward), this.goingForward = this.forwardRatio > 0.5, this.forwardSpeed = this.speed * this.forwardRatio, this.xRotation = new dt().setFromQuaternion(this.quaternion, "XYZ").x, this.yRotation = new dt().setFromQuaternion(this.quaternion, "YXZ").y, this.zRotation = new dt().setFromQuaternion(this.quaternion, "ZYX").z, Math.abs(this.game.player.accelerating) > 0.5 && this.stuck.accumulate(this.velocity.length(), this.game.ticker.deltaScaled);
      let t = 0;
      for (let i = 0; i < 4; i++) {
        const a = this.wheels.items[i], n = this.controller.wheelIsInContact(i);
        n && !a.inContact && (a.lastTouchTime = this.game.ticker.elapsed), a.inContact = n, a.contactPoint = this.controller.wheelContactPoint(i), a.suspensionLength = this.controller.wheelSuspensionLength(i), a.inContact && t++;
      }
      let s = 0;
      if (t > this.wheels.inContactCount) for (const i of this.wheels.items) i.lastTouchTime > this.game.ticker.elapsed - 0.2 && s++;
      this.wheels.inContactCount = t, this.wheels.justTouchedCount = s, this.stop.test(), this.upsideDown.test(), this.stuck.test(), this.flip.test();
    }
    activate() {
      this.chassis.physical.body.setLinvel({
        x: 0,
        y: 0,
        z: 0
      }), this.chassis.physical.body.setAngvel({
        x: 0,
        y: 0,
        z: 0
      }), this.chassis.physical.body.setEnabled(true);
    }
    deactivate() {
      this.chassis.physical.body.setEnabled(false);
    }
  }
  class Fn {
    constructor() {
      this.game = T.getInstance(), this.active = false, this.geometry = new Ke(), this.geometry.setAttribute("position", new ne([], 3)), this.geometry.setAttribute("color", new ne([], 4)), this.material = new $i({
        vertexColors: true
      }), this.lineSegments = new Ki(this.geometry, this.material), this.active && this.game.scene.add(this.lineSegments), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 4), this.game.debug.active && (this.debugPanel = this.game.physics.debugPanel.addFolder({
        title: "Wireframe",
        expanded: true
      }), this.debugPanel.addBinding(this, "active", {
        label: "debug"
      }).on("change", () => {
        this.active ? this.game.scene.add(this.lineSegments) : this.game.scene.remove(this.lineSegments);
      }));
    }
    update() {
      if (!this.active) return;
      const { vertices: e, colors: t } = this.game.physics.world.debugRender();
      this.geometry.attributes.position.array = e, this.geometry.attributes.position.count = e.length / 3, this.geometry.attributes.position.needsUpdate = true, this.geometry.attributes.color.array = t, this.geometry.attributes.color.count = t.length / 4, this.geometry.attributes.color.needsUpdate = true;
    }
  }
  class zn {
    constructor() {
      this.game = T.getInstance(), this.items = [], this.game.ticker.events.on("tick", () => {
        this.update();
      }, 8), this.previewGroup = new at(), this.previewGroup.visible = false, this.previewGroup.userData.preventPreRender = true, this.game.scene.add(this.previewGroup), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F310} Zones",
        expanded: false
      }), this.debugPanel.addBinding(this.previewGroup, "visible", {
        label: "previewVisible"
      }));
    }
    create(e = "sphere", t, s) {
      const i = {
        type: e,
        position: t,
        radius: s,
        isIn: false
      };
      return i.events = new se(), this.items.push(i), i.preview = new D(new Rt(s, 16, 16), new O({
        color: "#ffffff",
        wireframe: true
      })), i.preview.position.copy(t), this.previewGroup.add(i.preview), i;
    }
    update() {
      for (const e of this.items) {
        let t = this.game.player.position, s = e.position;
        e.type === "cylinder" && (t = new H(t.x, t.z), s = new H(s.x, s.z)), t.distanceTo(s) < e.radius ? e.isIn || (e.isIn = true, e.events.trigger("enter", [
          e
        ])) : e.isIn && (e.isIn = false, e.events.trigger("leave", [
          e
        ]));
      }
    }
  }
  class Ln {
    constructor() {
      this.game = T.getInstance(), this.setSounds();
      const e = d(M("#251f2b")), t = d(M("#1d1721"));
      this.progress = d(0), this.patternSize = d(200 * this.game.viewport.pixelRatio), this.strokeSize = d(10), this.inverted = d(0);
      const s = 0.5, i = 1 + s * 2, a = new Y(2, 2), n = new O({
        transparent: true,
        depthTest: false,
        depthWrite: false
      });
      if (n.outputNode = b(() => {
        const o = Pt.x.add(Pt.y).div(this.strokeSize).mod(1).sub(0.5).mul(2).abs(), l = Pt.div(this.patternSize).mod(1), r = P(this.game.resources.overlayPatternTexture, l).a.remap(0, 0.68, 0, 1).toVar();
        De(this.inverted.greaterThan(0.5), () => {
          r.assign(r.oneMinus());
        });
        const h = r.add(o.mul(0.2)).mul(1 / (1 + 0.2)), c = Ze.length().div(1.414).toVar();
        De(this.inverted.greaterThan(0.5), () => {
          c.assign(c.oneMinus());
        }), this.progress.sub(c.mul(s)).mul(i).lessThan(h).discard();
        const g = P(this.game.noises.hash, Pt.div(this.game.noises.resolution)).r.sub(0.5).mul(0.2), p = Ze.length().add(g), v = A(e, t, p);
        return C(v, 1);
      })(), n.vertexNode = C(Z.x, Z.y, 0, 1), this.mesh = new D(a, n), this.mesh.frustumCulled = false, this.mesh.renderOrder = 99, this.mesh.visible = true, this.game.scene.add(this.mesh), this.game.debug.active) {
        const o = this.game.debug.panel.addFolder({
          title: "\u2B1B\uFE0F Overlay",
          expanded: false
        });
        this.game.debug.addThreeColorBinding(o, e.value, "colorA"), this.game.debug.addThreeColorBinding(o, t.value, "colorB"), o.addBinding(this.progress, "value", {
          label: "progress",
          min: 0,
          max: 1,
          step: 1e-3
        }).on("change", () => {
          this.mesh.visible = true;
        }), o.addBinding(this.patternSize, "value", {
          label: "patternSize",
          min: 0,
          max: 500,
          step: 1
        }), o.addBinding(this.strokeSize, "value", {
          label: "strokeSize",
          min: 0,
          max: 50,
          step: 1
        }), o.addBinding(this.inverted, "value", {
          label: "inverted",
          min: 0,
          max: 1,
          step: 1
        }), o.addButton({
          title: "show"
        }).on("click", () => {
          this.show();
        }), o.addButton({
          title: "hide"
        }).on("click", () => {
          this.hide();
        });
      }
      this.game.viewport.events.on("change", () => {
        this.patternSize.value = 200 * this.game.viewport.pixelRatio;
      });
    }
    setSounds() {
      this.sounds = {}, this.sounds.show = this.game.audio.register({
        path: "sounds/swoosh/Swoosh 02.mp3",
        autoplay: false,
        loop: false,
        volume: 0.25
      }), this.sounds.hide = this.game.audio.register({
        path: "sounds/swoosh/Swoosh 05.mp3",
        autoplay: false,
        loop: false,
        volume: 0.25
      });
    }
    show(e) {
      this.inverted.value = 0, this.mesh.visible = true, this.sounds.show.play(), f.to(this.progress, {
        value: 1,
        ease: "power1.inOut",
        overwrite: true,
        duration: 2,
        onComplete: () => {
          typeof e == "function" && e();
        }
      });
    }
    hide(e) {
      this.inverted.value = 1, this.sounds.hide.play(), f.to(this.progress, {
        value: 0,
        ease: "power1.inOut",
        overwrite: true,
        duration: 4,
        onComplete: () => {
          this.mesh.visible = false, typeof e == "function" && e();
        }
      });
    }
    moveOnTop() {
      this.game.scene.add(this.mesh);
    }
  }
  class On {
    constructor() {
      var _a2;
      this.game = T.getInstance(), this.running = false, this.strength = 0, this.resolution = 100, this.position = new y(), this.achievementAchieved = (_a2 = this.game.achievements.groups.get("cataclysm")) == null ? void 0 : _a2.items[0].achieved, this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F32A}\uFE0F Tornado",
        expanded: false
      })), this.setPath(), this.setData(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 9), this.game.debug.active && (this.debugPanel.addButton({
        title: "start"
      }).on("click", () => {
        this.start();
      }), this.debugPanel.addButton({
        title: "stop"
      }).on("click", () => {
        this.stop();
      }));
    }
    setPath() {
      const e = [], t = [
        ...this.game.resources.tornadoPathReferencesModel.scene.children
      ];
      t.sort((i, a) => i.name < a.name ? -1 : i.name > a.name ? 1 : 0);
      for (const i of t) {
        const a = new y(i.position.x, 0, i.position.z);
        e.push(a);
      }
      const s = new As(e, true);
      this.path = s.getSpacedPoints(this.resolution);
    }
    setPreviews() {
      this.previews = {};
      const e = new Bt(0.1, 1, 0.1);
      this.previews.target = new D(e, new O({
        color: "#00ff00"
      })), this.previews.target.scale.y = 10, this.game.scene.add(this.previews.target), this.previews.eased = new D(e, new O({
        color: "#00ffff"
      })), this.previews.eased.scale.y = 10, this.game.scene.add(this.previews.eased);
      const t = [];
      for (const a of this.path) t.push(a.x, a.y, a.z);
      const s = new bs();
      s.setPositions(t);
      const i = new Xi({
        color: "#00ff00",
        linewidth: 5,
        dashed: true,
        dashSize: 0.2,
        gapSize: 0.4,
        alphaToCoverage: true
      });
      this.previews.line = new Yi(s, i), this.previews.line.computeLineDistances(), this.previews.line.scale.set(1, 1, 1), this.previews.line.position.y += 0.5, this.game.scene.add(this.previews.line);
    }
    setData() {
      this.data = {}, this.game.server.events.on("message", (e) => {
        (e.type === "init" || e.type === "cataclysmUpdate") && (e.cataclysmRunning ? this.start() : this.stop());
      }), this.game.server.initData && (this.game.server.initData.cataclysmRunning ? this.start() : this.stop());
    }
    start() {
      if (this.running) return;
      const e = this.game.dayCycles.absoluteProgress * 2;
      this.position.copy(this.getPosition(e)), f.to(this, {
        strength: 1,
        duration: 20,
        ease: "linear",
        overwrite: true
      }), this.game.weather.override.start({
        humidity: 1,
        electricField: 0.5,
        clouds: 1,
        wind: 1
      }, 20), this.game.dayCycles.override.start({
        lightColor: new X("#ff4141"),
        lightIntensity: 1.2,
        shadowColor: new X("#4e009c"),
        fogColorA: new X("#3e53ff"),
        fogColorB: new X("#ff4ce4"),
        fogNearRatio: 0,
        fogFarRatio: 1.25
      }, 20), this.running = true;
    }
    stop() {
      this.running && (f.to(this, {
        strength: 0,
        duration: 20,
        ease: "linear",
        overwrite: true
      }), this.game.weather.override.end(20), this.game.dayCycles.override.end(20), this.running = false);
    }
    getPosition(e) {
      const t = e % 1, s = Math.floor(t * this.resolution), i = (s + 1) % this.resolution, a = t * this.resolution - s, n = this.path[s], o = this.path[i];
      return new y().lerpVectors(n, o, a);
    }
    update() {
      if (this.strength === 0) return;
      const e = this.game.dayCycles.absoluteProgress * 1, t = this.getPosition(e);
      this.position.lerp(t, 0.3 * this.game.ticker.deltaScaled), this.previews && (this.previews.target.position.copy(t), this.previews.eased.position.copy(this.position));
      const s = this.position.clone().sub(this.game.physicalVehicle.position), i = s.length(), a = L(i, 20, 2, 0, 1);
      !this.achievementAchieved && a > 0.5 && (this.achievementAchieved = true, this.game.achievements.setProgress("cataclysm", 1));
      const n = s.clone().normalize(), o = L(i, 8, 2, 0, Math.PI * 0.25);
      n.applyAxisAngle(new y(0, 1, 0), -o);
      const l = L(i, 8, 2, 0, 1);
      n.y = l * 2, n.setLength(a * this.game.ticker.deltaScaled * this.strength * 30), this.game.physicalVehicle.chassis.physical.body.applyImpulse(n);
    }
  }
  class Un {
    constructor(e = "landing") {
      this.game = T.getInstance(), this.defaultName = e, this.setItems();
    }
    setItems() {
      this.items = /* @__PURE__ */ new Map();
      for (const e of this.game.resources.respawnsReferencesModel.scene.children) {
        e.rotation.reorder("YXZ");
        let t = e.name.replace(/^respawn(.+)$/i, "$1");
        t = t.charAt(0).toLowerCase() + t.slice(1);
        const s = {
          name: t,
          position: new y(e.position.x, 4, e.position.z),
          rotation: e.rotation.y
        };
        this.items.set(t, s);
      }
    }
    getByName(e) {
      return this.items.get(e);
    }
    getDefault() {
      return this.items.get(this.defaultName);
    }
    getClosest(e) {
      let t = null, s = 1 / 0;
      return this.items.forEach((i) => {
        const a = Math.hypot(i.position.x - e.x, i.position.z - e.z);
        a < s && (s = a, t = i);
      }), t;
    }
  }
  class Gn {
    constructor() {
      this.game = T.getInstance(), this.initiated = false, this.groups = /* @__PURE__ */ new Map(), this.events = new se(), this.setMute(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 14);
    }
    init() {
      this.initiated = true, this.setPlaylist(), this.setAmbiants(), this.setOneOffs(), this.groups.forEach((e, t) => {
        for (const s of e.items) s.autoplay && !s.playing && s.play();
      });
    }
    register(e = {}) {
      const t = e.group ?? "all";
      let s = this.groups.get(t);
      s || (s = {}, s.items = [], s.lastPlayedId = -1, s.playRandomNext = (...a) => {
        const n = 1 + Math.floor(Math.random() * (s.items.length - 2)), o = (s.lastPlayedId + n) % s.items.length;
        s.items[o].play(...a);
      }, s.play = (...a) => {
        const n = (s.lastPlayedId + 1) % s.items.length;
        s.items[n].play(...a);
      }, this.groups.set(t, s));
      const i = {};
      return i.howl = new nt.Howl({
        src: [
          e.path
        ],
        pool: 2,
        autoplay: (this.initiated && e.autoplay) ?? false,
        loop: e.loop ?? false,
        volume: e.volume ?? 0.5,
        preload: (e.preload ?? true) && !window.__hexoBg,
        onloaderror: () => {
          console.error(`Audio > Load error > ${e.path}`, e);
        },
        onend: () => {
          i.playing = false;
        }
      }), i.positions = e.positions ?? null, i.positions !== null && !(i.positions instanceof Array) && (i.positions = [
        i.positions
      ]), i.distanceFade = e.distanceFade ?? null, i.rate = e.rate ?? 1, i.volume = e.volume ?? 0.5, i.antiSpam = e.antiSpam ?? 0.1, i.lastPlay = -1 / 0, i.onPlaying = e.onPlaying ?? null, i.onPlay = e.onPlay ?? null, i.loaded = (e.preload ?? true) && !window.__hexoBg, i.autoplay = e.autoplay ?? false, i.playing = (this.initiated && e.autoplay) ?? false, i.id = s.items.length, i.play = (...a) => {
        this.initiated && (i.loaded || (i.loaded = true, i.howl.load()), !(i.antiSpam && this.game.ticker.elapsed - i.lastPlay < i.antiSpam) && (typeof i.onPlay == "function" && i.onPlay(i, ...a), i.howl.play(), i.lastPlay = this.game.ticker.elapsed, i.playing = true, s.lastPlayedId = i.id));
      }, s.items.push(i), i;
    }
    setPlaylist() {
      this.playlist = {}, this.playlist.songs = [
        {
          path: "sounds/musics/Sudo.mp3",
          name: "Sudo.mp3"
        },
        {
          path: "sounds/musics/Boy.mp3",
          name: "Boy.mp3"
        },
        {
          path: "sounds/musics/Baguira.mp3",
          name: "Baguira.mp3"
        }
      ], this.playlist.index = Math.floor(Date.now() / 1e3 / 60 / 3) % this.playlist.songs.length, this.playlist.current = null, this.playlist.switching = false;
      for (const e of this.playlist.songs) e.loaded = false, e.sound = new nt.Howl({
        src: [
          e.path
        ],
        pool: 0,
        autoplay: false,
        loop: false,
        preload: false,
        volume: 0.2,
        onend: () => {
          this.playlist.next();
        }
      });
      this.playlist.next = () => {
        this.playlist.switching || (this.playlist.switching = true, this.game.audio.groups.get("discChange").play(), this.playlist.current && this.playlist.current.sound.stop(), f.delayedCall(3, () => {
          this.playlist.index++, this.playlist.index >= this.playlist.songs.length && (this.playlist.index = 0), this.playlist.current = this.playlist.songs[this.playlist.index], this.playlist.current.loaded || this.playlist.current.sound.load(), this.playlist.current.sound.play();
          const e = `
                    <div class="top">
                        <div class="title">Now playing<br /><span class="song-name">${this.playlist.current.name}</span></div>
                        <div class="music-note-icon"></div>
                    </div>
                `;
          this.game.notifications.show(e, "song", 5), this.playlist.switching = false;
        }));
      }, this.playlist.play = () => {
        this.playlist.current = this.playlist.songs[this.playlist.index], this.playlist.current.loaded || this.playlist.current.sound.load(), this.playlist.current.sound.play();
      };
    }
    setAmbiants() {
      var _a2, _b, _c;
      const e = (t = 30) => new y(this.game.view.focusPoint.position.x + (Math.random() < 0.5 ? t : -t), this.game.view.focusPoint.position.y, this.game.view.focusPoint.position.z + (Math.random() < 0.5 ? t : -t));
      {
        const t = [
          "sounds/birdTweets/24074 small bird tweet calling-full-1.mp3",
          "sounds/birdTweets/24074 small bird tweet calling-full-2.mp3",
          "sounds/birdTweets/20711 finch bird isolated tweet-full.mp3",
          "sounds/birdTweets/30673 Yellowhammer bird tweet 3-full.mp3",
          "sounds/birdTweets/31062 Ortolan bird tweet-full.mp3",
          "sounds/birdTweets/31451 Ortolan bunting bird isolated tweet-full.mp3"
        ], s = [];
        for (const a of t) s.push(this.register({
          group: "birdTweet",
          path: a,
          autoplay: false,
          loop: false,
          volume: 0.3,
          positions: new y(),
          onPlay: (n) => {
            n.volume = 0.2 + Math.random() * 0.3, n.rate = 1 + Math.random() * 0.7, n.positions[0].copy(e());
          }
        }));
        const i = () => {
          !this.game.dayCycles.intervalEvents.get("night").inInterval && Math.random() < 0.5 && s[Math.floor(Math.random() * s.length)].play(), f.delayedCall(0.5 + Math.random() * 5, i);
        };
        i();
      }
      {
        const t = this.register({
          group: "owl",
          path: "sounds/owl/OwlHootingReverberantSeveral_Rik8a_03.mp3",
          autoplay: false,
          loop: false,
          volume: 0.3,
          positions: new y(),
          onPlay: (i) => {
            i.volume = 0.2 + Math.random() * 0.25, i.rate = 1 + Math.random() * 0.3, i.positions[0].copy(e());
          }
        }), s = () => {
          this.game.dayCycles.intervalEvents.get("night").inInterval && Math.random() < 0.5 && t.play(), f.delayedCall(30 + Math.random() * 60, s);
        };
        f.delayedCall(30 + Math.random() * 60, s);
      }
      {
        const t = this.register({
          group: "rooster",
          path: "sounds/rooster/rooster-crowing.mp3",
          autoplay: false,
          loop: false,
          volume: 0.1,
          positions: new y(),
          onPlay: (s) => {
            s.volume = 0.1 + Math.random() * 0.2, s.positions[0].copy(e());
          }
        });
        this.game.dayCycles.events.on("night", (s) => {
          s || t.play();
        });
      }
      {
        const t = this.register({
          group: "wolf",
          path: "sounds/wolf/TimberWolvesGroupHowlingSomeWhimpering_S2h0E_04.mp3",
          autoplay: false,
          loop: false,
          volume: 0.1,
          positions: new y(),
          onPlay: (s) => {
            s.volume = 0.1 + Math.random() * 0.2, s.positions[0].copy(e());
          }
        });
        this.game.dayCycles.events.on("deepNight", (s) => {
          s && t.play();
        });
      }
      {
        const t = this.register({
          group: "crickets",
          path: "sounds/crickets/Crickets.mp3",
          autoplay: true,
          loop: true,
          volume: this.game.dayCycles.intervalEvents.get("night").inInterval ? 0.65 : 0
        });
        this.game.dayCycles.events.on("night", (s) => {
          f.to(t, {
            volume: s ? 0.65 : 0,
            duration: 15,
            overwrite: true
          });
        });
      }
      this.register({
        group: "jingleBells",
        path: "sounds/jingleBells/Mountain Audio - Christmas Bells.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (t) => {
          const s = Math.sin(this.game.ticker.elapsedScaled * 0.1) * 0.5 + 0.5, i = Math.max(0, this.game.weather.snow.value) * 0.35 * s, a = i > t.volume ? 5e-3 : 0.05;
          t.volume += (i - t.volume) * this.game.ticker.deltaScaled * a;
        }
      }), this.register({
        group: "rain",
        path: "sounds/rain/soundjay_rain-on-leaves_main-01.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (t) => {
          const s = L(this.game.weather.snow.value, 0, 0.6, 1, 0), i = L(this.game.weather.rain.value, 0.1, 0.6, 0, 1);
          t.volume = i * s;
        }
      }), this.register({
        group: "wind",
        path: "sounds/wind/13582-wind-in-forest-loop.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (t) => {
          t.volume = Math.pow(L(this.game.weather.wind.value, 0.3, 1, 0, 1), 3) * 0.7;
        }
      }), this.register({
        group: "waves",
        path: "sounds/waves/lake-waves.mp3",
        autoplay: true,
        loop: true,
        volume: 0,
        onPlaying: (t) => {
          const s = Math.min(this.game.terrain.size / 2 - Math.abs(this.game.player.position.x), this.game.terrain.size / 2 - Math.abs(this.game.player.position.z));
          t.volume = Math.pow(L(s, 0, 40, 1, 0.1), 2) * 0.7;
        }
      });
      {
        const t = [];
        ((_a2 = this.game.world.areas) == null ? void 0 : _a2.cookie) && t.push(this.game.world.areas.cookie.references.items.get("spawner")[0].position), ((_b = this.game.world.areas) == null ? void 0 : _b.projects) && t.push(this.game.world.areas.projects.references.items.get("oven")[0].position), t.length && this.game.audio.register({
          group: "ovenFire",
          path: "sounds/fire/Mountain Audio - Fire Burning in a Wood Stove 1.mp3",
          autoplay: true,
          loop: true,
          volume: 0.8,
          positions: t,
          distanceFade: 13
        });
      }
      {
        const t = [];
        ((_c = this.game.world.areas) == null ? void 0 : _c.lab) && t.push(this.game.world.areas.lab.references.items.get("fire")[0].position), t.length && this.game.audio.register({
          group: "campfire",
          path: "sounds/fire/Fire Burning.mp3",
          autoplay: true,
          loop: true,
          volume: 1,
          positions: t,
          distanceFade: 13
        });
      }
    }
    setOneOffs() {
      this.register({
        group: "discChange",
        path: "sounds/jukebox/DVDPlayerChangeDisc_BW.49824.mp3",
        autoplay: false,
        loop: false,
        volume: 0.3
      }), this.register({
        group: "slide",
        path: "sounds/mecanism/slide.mp3",
        autoplay: false,
        volume: 0.18
      }), this.register({
        group: "click",
        path: "sounds/mecanism/click.mp3",
        autoplay: false,
        volume: 0.25,
        onPlay: (e, t = true) => {
          e.rate = t ? 1 : 0.6;
        }
      }), this.register({
        group: "assemble",
        path: "sounds/mecanism/assemble.mp3",
        autoplay: false,
        volume: 0.3
      });
      {
        const e = [
          [
            "sounds/hits/defaults/Stone_Hit_Crash_106-2.mp3",
            0.35
          ],
          [
            "sounds/hits/defaults/Stone_Hit_Crash_071-1.mp3",
            0.35
          ],
          [
            "sounds/hits/defaults/Stone_Hit_Crash_106-1.mp3",
            0.35
          ],
          [
            "sounds/hits/defaults/Impact Soft 01.mp3",
            0.8
          ],
          [
            "sounds/hits/defaults/Impact Soft 02.mp3",
            0.8
          ],
          [
            "sounds/hits/defaults/Impact Soft 03.mp3",
            0.8
          ],
          [
            "sounds/hits/defaults/Impact Soft 04.mp3",
            0.8
          ]
        ];
        for (const [t, s] of e) this.register({
          group: "hitDefault",
          path: t,
          autoplay: false,
          volume: s,
          antiSpam: 0.1,
          positions: new y(),
          distanceFade: 20,
          onPlay: (i, a, n) => {
            i.positions[0].copy(n);
            const o = L(a, 0, 200, 0, 1);
            i.volume = s * o, i.rate = 0.9 + Math.random() * 0.2;
          }
        });
      }
      {
        const e = [
          [
            "sounds/hits/bricks/24445 brick light hitting-full-2.mp3",
            0.6
          ],
          [
            "sounds/hits/bricks/41559 Stone brick fall hit 01-full-1.mp3",
            0.6
          ],
          [
            "sounds/hits/bricks/41563 Stone brick fall hit 05-full-1.mp3",
            0.6
          ],
          [
            "sounds/hits/bricks/BrickSetDown_BW.5803-1.mp3",
            0.6
          ]
        ];
        for (const [t, s] of e) this.register({
          group: "hitBrick",
          path: t,
          autoplay: false,
          volume: s,
          antiSpam: 0.1,
          positions: new y(),
          distanceFade: 20,
          onPlay: (i, a, n) => {
            i.positions[0].copy(n), i.volume = s * Math.pow(L(a, 5, 20, 0, 1), 2), i.rate = 0.9 + Math.random() * 0.2;
          }
        });
      }
      {
        const e = [
          [
            "sounds/hits/metal/EQUIPTact_Fire Gear_SDFIRE0411.mp3",
            0.6
          ],
          [
            "sounds/hits/metal/Metal Clip Hit.mp3",
            0.6
          ],
          [
            "sounds/hits/metal/Metalic 3.mp3",
            0.6
          ]
        ];
        for (const [t, s] of e) this.register({
          group: "hitMetal",
          path: t,
          autoplay: false,
          volume: s,
          antiSpam: 0.1,
          positions: new y(),
          distanceFade: 20,
          onPlay: (i, a, n) => {
            i.positions[0].copy(n), i.volume = s * Math.pow(L(a, 5, 20, 0, 1), 2), i.rate = 0.9 + Math.random() * 0.2;
          }
        });
      }
    }
    setMute() {
      this.mute = {}, this.mute.active = false, this.mute.toggle = () => {
        this.mute.active ? this.mute.deactivate() : this.mute.activate();
      }, this.mute.activate = () => {
        this.mute.active || (nt.Howler.mute(true), this.mute.active = true, localStorage.setItem("soundToggle", "1"), document.documentElement.classList.add("is-audio-muted"), this.events.trigger("muteChange", [
          true
        ]));
      }, this.mute.deactivate = () => {
        this.mute.active && (nt.Howler.mute(false), this.mute.active = false, localStorage.setItem("soundToggle", "0"), document.documentElement.classList.remove("is-audio-muted"), this.events.trigger("muteChange", [
          false
        ]));
      };
      const e = localStorage.getItem("soundToggle");
      e !== null && e === "1" && this.mute.activate(), this.game.inputs.addActions([
        {
          name: "mute",
          categories: [
            "intro",
            "modal",
            "menu",
            "racing",
            "cinematic",
            "wandering"
          ],
          keys: [
            "Keyboard.l"
          ]
        }
      ]), this.game.inputs.events.on("mute", (t) => {
        t.active && this.mute.toggle();
      }), window.addEventListener("blur", () => {
        var _a2;
        nt.Howler.mute(true), ((_a2 = this.playlist) == null ? void 0 : _a2.current) && this.playlist.current.sound.pause();
      }), window.addEventListener("focus", () => {
        var _a2;
        this.mute.active || (nt.Howler.mute(false), ((_a2 = this.playlist) == null ? void 0 : _a2.current) && this.playlist.current.sound.play());
      });
    }
    update() {
      this.globalRate = this.game.time.scale / this.game.time.defaultScale, this.groups.forEach((e) => {
        for (const t of e.items) {
          typeof t.onPlaying == "function" && t.onPlaying(t);
          let s = 1;
          if (t.positions && t.howl.playing()) {
            let a = 1 / 0, n = null;
            for (const l of t.positions) {
              const r = l.distanceTo(this.game.view.focusPoint.position);
              r < a && (a = r, n = l);
            }
            const o = n.clone();
            o.applyMatrix4(this.game.view.camera.matrixWorldInverse), o.normalize(), o.z *= 0.1, t.distanceFade && (s = L(a, 0, t.distanceFade, 1, 0)), s > 0 && t.howl.pos(o.x, o.y, o.z);
          }
          t.howl.rate(He(t.rate * this.globalRate, 0.5, 4));
          const i = t.volume * s;
          t.howl.volume(t.volume * s), t.howl.mute(i < 0.01);
        }
      });
    }
  }
  const _ae = class _ae {
    constructor() {
      this.game = T.getInstance(), this.state = _ae.CLOSED, this.element = document.querySelector(".js-menu"), this.current = null, this.default = null, this.events = new se(), this.setTrigger(), this.setClose(), this.setItems(), this.setGamepad(), this.element.addEventListener("transitionend", () => {
        this.onTransitionEnded();
      });
    }
    onTransitionEnded() {
      this.state === _ae.OPENING ? (this.state = _ae.OPEN, this.events.trigger("opened"), this.current.events.trigger("opened")) : this.state === _ae.CLOSING && (this.state = _ae.CLOSED, this.events.trigger("closed"), this.current.events.trigger("closed"), this.element.classList.remove("is-displayed"));
    }
    setTrigger() {
      const e = document.querySelector(".js-menu-trigger");
      e.addEventListener("click", (t) => {
        var _a2, _b, _c, _d;
        t.preventDefault(), ((_b = (_a2 = this.game.world.areas) == null ? void 0 : _a2.circuit) == null ? void 0 : _b.state) === ie.STATE_RUNNING || ((_d = (_c = this.game.world.areas) == null ? void 0 : _c.circuit) == null ? void 0 : _d.state) === ie.STATE_STARTING ? this.open("circuit") : this.open();
      }), e.addEventListener("keydown", (t) => {
        t.preventDefault();
      });
    }
    setClose() {
      const e = this.element.querySelectorAll(".js-close");
      for (const t of e) t.addEventListener("click", () => {
        this.pending = null, this.close();
      });
      this.element.addEventListener("click", (t) => {
        t.target === this.element && this.close();
      });
    }
    setItems() {
      const e = this.element.querySelector(".js-navigation"), t = this.element.querySelector(".js-previews"), s = this.element.querySelector(".js-contents");
      this.items = /* @__PURE__ */ new Map();
      const i = e.querySelectorAll(".js-navigation-item"), a = [
        ...t.querySelectorAll(".js-preview")
      ], n = [
        ...s.querySelectorAll(".js-content")
      ];
      for (const l of i) {
        const r = {};
        r.navigationElement = l, r.name = r.navigationElement.dataset.name, r.previewElement = a.find((c) => c.classList.contains(`${r.name}-preview`)), r.contentElement = n.find((c) => c.classList.contains(`${r.name}-content`)), r.mainFocus = r.contentElement.querySelector(".js-main-focus"), r.isOpen = false, r.events = new se();
        const h = r.contentElement.querySelector(".js-tabs");
        h && (r.tabs = new Ys(h)), r.navigationElement.addEventListener("click", (c) => {
          c.preventDefault(), this.open(r.name);
        }), this.items.set(r.name, r), this.default === null && (this.default = r);
      }
      const o = [
        ...this.items.keys()
      ];
      for (let l = 0; l < o.length; l++) {
        const r = o[l - 1 < 0 ? o.length - 1 : l - 1], h = o[(l + 1) % o.length], c = this.items.get(o[l]);
        c.prevName = r, c.nextName = h;
      }
    }
    setGamepad() {
      this.game.inputs.addActions([
        {
          name: "next",
          categories: [
            "menu"
          ],
          keys: [
            "Gamepad.r1"
          ]
        },
        {
          name: "prev",
          categories: [
            "menu"
          ],
          keys: [
            "Gamepad.l1"
          ]
        }
      ]), this.game.inputs.events.on("next", (e) => {
        e.active && this.open(this.current.nextName);
      }), this.game.inputs.events.on("prev", (e) => {
        e.active && this.open(this.current.prevName);
      });
    }
    open(e = null) {
      let t = e;
      t === null && (this.current ? t = this.current.name : t = this.default.name);
      const s = this.items.get(t);
      if (!s || (this.state === _ae.OPEN || this.state === _ae.OPENING) && s === this.current) return;
      const i = this.game.audio.groups.get("click");
      i && i.play(true), this.current && (this.current.navigationElement.classList.remove("is-active"), this.current.previewElement.classList.remove("is-visible"), this.current.contentElement.classList.remove("is-visible"), this.current.isOpen = false), s.navigationElement.classList.add("is-active"), s.previewElement.classList.add("is-visible"), s.contentElement.classList.add("is-visible"), s.isOpen = true, this.current = s, s.mainFocus && this.game.inputs.mode !== K.MODE_TOUCH && requestAnimationFrame(() => {
        s.mainFocus.focus();
      }), this.game.inputs.filters.clear(), this.game.inputs.filters.add("menu"), this.events.trigger("open"), this.current.events.trigger("open"), (this.state === _ae.CLOSED || this.state === _ae.CLOSING) && (this.state = _ae.OPENING, this.element.classList.add("is-displayed"), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.element.classList.add("is-visible");
        });
      }));
    }
    close() {
      if (this.state === _ae.CLOSING || this.state === _ae.CLOSED) return;
      const e = this.game.audio.groups.get("click");
      e && e.play(false), this.element.classList.remove("is-visible"), this.state = _ae.CLOSING, this.events.trigger("close"), this.current.isOpen = false, this.current.events.trigger("close");
    }
    preopen() {
      this.items.forEach((e) => {
        typeof e.navigationElement.dataset.preopen < "u" && this.open(e.name);
      });
    }
  };
  __publicField(_ae, "OPEN", 1);
  __publicField(_ae, "OPENING", 2);
  __publicField(_ae, "CLOSED", 3);
  __publicField(_ae, "CLOSING", 4);
  let ae = _ae;
  class jn {
    constructor() {
      this.game = T.getInstance(), this.game.inputs.addActions([
        {
          name: "close",
          categories: [
            "modal",
            "menu",
            "racing",
            "cinematic",
            "wandering"
          ],
          keys: [
            "Keyboard.Escape",
            "Gamepad.cross"
          ]
        },
        {
          name: "pause",
          categories: [
            "modal",
            "menu",
            "racing",
            "cinematic",
            "wandering"
          ],
          keys: [
            "Gamepad.start"
          ]
        }
      ]), this.game.inputs.events.on("close", (t) => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m;
        t.active && (((_a2 = this.game.world.whispers) == null ? void 0 : _a2.menu.inputFlag.isOpen) ? this.game.world.whispers.menu.inputFlag.close() : ((_c = (_b = this.game.world.areas) == null ? void 0 : _b.circuit) == null ? void 0 : _c.menu.inputFlag.isOpen) ? this.game.world.areas.circuit.menu.inputFlag.close() : this.game.modals.state === ce.OPEN ? this.game.modals.close() : this.game.menu.state === ae.OPEN || this.game.inputs.mode !== K.MODE_GAMEPAD && this.game.menu.state === ae.OPENING ? this.game.menu.close() : ((_e2 = (_d = this.game.world.areas) == null ? void 0 : _d.circuit) == null ? void 0 : _e2.state) === ie.STATE_RUNNING || ((_g = (_f = this.game.world.areas) == null ? void 0 : _f.circuit) == null ? void 0 : _g.state) === ie.STATE_STARTING ? this.game.menu.open("circuit") : ((_h = this.game.world.areas) == null ? void 0 : _h.projects) && (((_i2 = this.game.world.areas) == null ? void 0 : _i2.projects.state) === z.STATE_OPEN || ((_j = this.game.world.areas) == null ? void 0 : _j.projects.state) === z.STATE_OPENING) ? this.game.world.areas.projects.close() : ((_k = this.game.world.areas) == null ? void 0 : _k.lab) && (((_l = this.game.world.areas) == null ? void 0 : _l.lab.state) === $.STATE_OPEN || ((_m = this.game.world.areas) == null ? void 0 : _m.lab.state) === $.STATE_OPENING) ? this.game.world.areas.lab.close() : t.activeKeys.has("Keyboard.Escape") && this.game.menu.open());
      }), this.game.inputs.events.on("pause", (t) => {
        t.active && (this.game.menu.state === ae.OPEN || this.game.menu.state === ae.OPENING ? this.game.menu.close() : this.game.menu.open("home"));
      }), this.game.modals.events.on("open", () => {
        (this.game.menu.state === ae.OPEN || this.game.menu.state === ae.OPENING) && this.game.menu.close();
      }), this.game.menu.events.on("open", () => {
        (this.game.modals.state === ce.OPEN || this.game.modals.state === ce.OPENING) && this.game.modals.close();
      });
      const e = () => {
        var _a2, _b, _c, _d, _e2, _f;
        this.game.inputs.filters.clear(), ((_b = (_a2 = this.game.world.areas) == null ? void 0 : _a2.circuit) == null ? void 0 : _b.state) === ie.STATE_RUNNING || ((_d = (_c = this.game.world.areas) == null ? void 0 : _c.circuit) == null ? void 0 : _d.state) === ie.STATE_STARTING || ((_f = (_e2 = this.game.world.areas) == null ? void 0 : _e2.circuit) == null ? void 0 : _f.state) === ie.STATE_ENDING ? this.game.inputs.filters.add("racing") : this.game.inputs.filters.add("wandering");
      };
      this.game.modals.events.on("close", e), this.game.menu.events.on("close", e);
    }
  }
  class qn {
    constructor() {
      this.game = T.getInstance(), this.currentIntersect = null, this.intersects = [], this.isAnyIntersecting = false, this.needsTest = false, this.raycaster = new Kt(), this.setPointerTesting();
    }
    addIntersect(e) {
      const t = {
        ...e
      };
      return t.isIntersecting = false, t.isDown = false, t.shape instanceof D ? (t.position = new y(), t.shape.getWorldPosition(t.position)) : t.position = t.shape.center, this.intersects.push(t), this.needsTest = t.active, this.needsTest && this.game.ticker.wait(1, () => {
        this.needsTest && (this.testIntersects("change"), this.needsTest = false);
      }), t;
    }
    removeIntersect(e) {
      this.intersects = this.intersects.filter((t) => t !== e);
    }
    testIntersects(e) {
      if (e === "start" || e === "change") {
        e === "start" ? (this.deltaCursor.y = 0, this.deltaCursor.x = 0) : e === "change" && (this.deltaCursor.x += Math.abs(this.game.inputs.pointer.delta.x), this.deltaCursor.y += Math.abs(this.game.inputs.pointer.delta.y));
        const t = this.intersects.filter((i) => !(!i.active || Math.hypot(this.game.view.focusPoint.position.x - i.position.x, this.game.view.focusPoint.position.z - i.position.z) > this.game.view.optimalArea.radius));
        let s = false;
        if (t.length) {
          const i = new H(this.game.inputs.pointer.current.x / this.game.viewport.width * 2 - 1, -(this.game.inputs.pointer.current.y / this.game.viewport.height * 2 - 1));
          this.raycaster.setFromCamera(i, this.game.view.camera);
          for (const a of t) {
            let n = false;
            a.shape instanceof ke && (n = this.raycaster.ray.intersectsSphere(a.shape)), a.shape instanceof xs && (n = this.raycaster.ray.intersectsBox(a.shape)), a.shape instanceof Xt && (n = this.raycaster.ray.intersectsPlane(a.shape)), a.shape instanceof D && (n = this.raycaster.intersectObject(a.shape).length), n !== a.isIntersecting && (a.isIntersecting = n, a.isIntersecting ? (this.currentIntersect = a, typeof a.onEnter == "function" && a.onEnter()) : typeof a.onLeave == "function" && a.onLeave()), n && (s = true);
          }
          s !== this.isAnyIntersecting && (this.isAnyIntersecting = s, this.isAnyIntersecting ? this.game.canvasElement.style.cursor = "pointer" : this.game.canvasElement.style.cursor = null), s || (this.currentIntersect = null);
        }
        e === "start" && this.currentIntersect && (this.currentIntersect.isDown = true, typeof this.currentIntersect.onDown == "function" && this.currentIntersect.onDown());
      } else if (e === "end") {
        const t = this.intersects.filter((i) => i.active), s = Math.hypot(this.deltaCursor.x, this.deltaCursor.y);
        for (const i of t) i.isIntersecting ? (typeof i.onUp == "function" && i.onUp(), i.isDown && (i.isDown = false, typeof i.onClick == "function" && s < 25 && i.onClick())) : i.isDown && (i.isDown = false, typeof i.onUp == "function" && i.onUp());
      }
    }
    setPointerTesting() {
      this.game.inputs.addActions([
        {
          name: "rayPointer",
          categories: [
            "intro",
            "wandering",
            "racing",
            "cinematic"
          ],
          keys: [
            "Pointer.any"
          ]
        }
      ]), this.deltaCursor = {
        x: 0,
        y: 0
      }, this.game.inputs.events.on("rayPointer", (e) => {
        this.testIntersects(e.trigger);
      });
    }
  }
  class Vn {
    constructor() {
      if (this.game = T.getInstance(), this.surfaceElevation = -0.3, this.depthElevation = -1.5, this.surfaceElevationUniform = d(this.surfaceElevation), this.surfaceThicknessUniform = d(0.013), this.game.debug.active) {
        const e = this.game.debug.panel.addFolder({
          title: "\u{1F4A7} Water",
          expanded: false
        });
        e.addBinding(this.surfaceElevationUniform, "value", {
          label: "surfaceElevation",
          min: -1,
          max: 0,
          step: 1e-3
        }), e.addBinding(this.surfaceThicknessUniform, "value", {
          label: "amplitude",
          min: 0,
          max: 0.5,
          step: 1e-3
        });
      }
    }
  }
  class Hn {
    constructor() {
      this.game = T.getInstance(), this.step = -1;
      const e = this.game.respawns.getDefault();
      this.position = e.position.clone(), this.position2Uniform = d(w(this.position.x, this.position.z)), this.distance = d(0), this.thickness = d(0.05), this.color = d(M("#e88eff")), this.intensity = d(5.5), this.intensityMultiplier = 1, this.sound = this.game.audio.register({
        path: "sounds/reveal/reveal-1.mp3",
        autoplay: false,
        loop: false,
        volume: 0.5,
        preload: true
      }), this.game.debug.active && (this.debugPanel = this.game.debug.panel.addFolder({
        title: "\u{1F4DC} Reveal",
        expanded: false
      }), this.debugPanel.addBinding(this.distance, "value", {
        label: "distance",
        min: 0,
        max: 20,
        step: 0.01
      }), this.debugPanel.addBinding(this.thickness, "value", {
        label: "thickness",
        min: 0,
        max: 1,
        step: 1e-3
      }), this.debugPanel.addBinding(this.intensity, "value", {
        label: "intensity",
        min: 1,
        max: 20,
        step: 1e-3
      })), this.update = this.update.bind(this), this.game.ticker.events.on("tick", this.update, 10);
    }
    updateStep(e) {
      const t = location.hash.match(/skip/i) ? 4 : 1;
      e === 0 ? this.game.world.intro.circle.hide(() => {
        if (this.game.world.grid.show(), this.distance.value = 0, f.to(this.distance, {
          value: 3.5,
          ease: "back.out(1.7)",
          duration: 2 / t,
          overwrite: true
        }), this.game.view.zoom.smoothedRatio = 0.6, this.game.view.zoom.baseRatio = 0.6, f.to(this.game.view.zoom, {
          baseRatio: 0.3,
          ease: "power1.inOut",
          duration: 1.25 / t,
          overwrite: true
        }), this.game.world.intro.setText(), this.game.world.intro.setSoundButton(), this.game.ticker.wait(1, () => {
          this.game.world.intro.showLabel();
        }), this.game.world.cherryTrees && (this.game.world.cherryTrees.leaves.seeThroughMultiplier = 0.5), location.hash.match(/skip/i)) this.updateStep(1);
        else {
          const s = () => {
            this.updateStep(1), this.game.inputs.events.off("introStart", i), this.game.rayCursor.removeIntersect(n);
          }, i = () => {
            s();
          }, a = this.position.clone();
          a.y = 0;
          const n = this.game.rayCursor.addIntersect({
            active: true,
            shape: new ke(a, 3.5),
            onClick: s,
            onEnter: () => {
              f.to(this, {
                intensityMultiplier: 1.22,
                duration: 0.2,
                overwrite: true
              });
            },
            onLeave: () => {
              f.to(this, {
                intensityMultiplier: 1,
                duration: 0.2,
                overwrite: true
              });
            }
          });
          this.game.inputs.addActions([
            {
              name: "introStart",
              categories: [
                "intro"
              ],
              keys: [
                "Gamepad.cross",
                "Keyboard.Enter",
                "Keyboard.ArrowUp",
                "Keyboard.ArrowDown",
                "Keyboard.KeyW",
                "Keyboard.KeyD"
              ]
            }
          ]), this.game.inputs.events.on("introStart", i);
        }
      }) : e === 1 ? (this.game.audio.init(), this.sound.play(), f.to(this.distance, {
        value: 30,
        ease: "back.in(1.3)",
        duration: 2 / t,
        overwrite: true,
        onComplete: () => {
          this.distance.value = 99999;
        }
      }), this.game.world.intro.hideLabel(), this.game.inputs.filters.clear(), this.game.inputs.filters.add("wandering"), this.game.view.focusPoint.isTracking = true, this.game.view.focusPoint.magnet.active = false, f.to(this.game.view.zoom, {
        baseRatio: 0,
        ease: "back.in(1.5)",
        duration: 1.75 / t,
        overwrite: true,
        onComplete: () => {
          this.updateStep(2);
        }
      }), this.game.world.cherryTrees && f.to(this.game.world.cherryTrees.leaves, {
        seeThroughMultiplier: 1,
        ease: "power1.inOut",
        duration: 2 / t,
        overwrite: true
      })) : e === 2 && (this.game.interactivePoints.recover(), this.game.world.step(2), this.game.world.grid.destroy(), this.game.world.intro.destroy(), this.game.world.intro = null, this.game.overlay.moveOnTop(), this.game.server.start(), this.game.menu.preopen(), this.game.ticker.events.off("tick", this.update)), this.step = e;
    }
    update() {
      this.color.value.copy(this.game.dayCycles.properties.revealColor.value), this.intensity.value = this.game.dayCycles.properties.revealIntensity.value * this.intensityMultiplier;
    }
  }
  class Wn {
    constructor(e = false) {
      this.game = T.getInstance();
      let t = 0;
      this.activationCount = 0;
      const s = [
        [
          "ArrowUp",
          "KeyW"
        ],
        [
          "ArrowUp",
          "KeyW"
        ],
        [
          "ArrowDown",
          "KeyS"
        ],
        [
          "ArrowDown",
          "KeyS"
        ],
        [
          "ArrowLeft",
          "KeyA"
        ],
        [
          "ArrowRight",
          "KeyD"
        ],
        [
          "ArrowLeft",
          "KeyA"
        ],
        [
          "ArrowRight",
          "KeyD"
        ],
        [
          "KeyB"
        ],
        [
          "KeyQ",
          "KeyA"
        ]
      ], i = (a) => {
        s[t].indexOf(a.code) !== -1 ? (t++, t === s.length && (this.activate(), e && document.removeEventListener("keydown", i), t = 0)) : t = 0;
      };
      document.addEventListener("keydown", i);
    }
    async activate() {
      const e = [
        "vehicle/oldSchool.glb",
        "vehicle/default.glb"
      ], t = await this.game.resourcesLoader.load([
        [
          "vehicle",
          `${e[this.activationCount % 2]}?cb=${this.activationCount}`,
          "gltf"
        ]
      ]);
      this.game.world.visualVehicle.destroy(), this.game.world.visualVehicle = new $s(t.vehicle.scene), this.game.world.confetti && (this.game.world.confetti.pop(this.game.player.position.clone()), this.game.world.confetti.pop(this.game.player.position.clone().add(new y(1, -1, 1.5))), this.game.world.confetti.pop(this.game.player.position.clone().add(new y(1, -1, -1.5)))), this.activationCount++, this.game.achievements.setProgress("konami", 1);
    }
  }
  const gs = [
    [
      "landingLeave",
      "I\u2019m going on an adventure!",
      "Get out of the landing area.",
      1
    ],
    [
      "areas",
      "Traveler",
      "Vist every area.",
      13,
      true
    ],
    [
      "projects",
      "But can you fix the wifi?",
      "Check every project in the <strong>projects</strong> area.",
      Te.length,
      true
    ],
    [
      "lab",
      "I'm a bit of a curator myself",
      "Check every album in the <strong>gallery</strong> area.",
      me.length,
      true
    ],
    [
      "cookie",
      "Wake & bake",
      "Accept <strong>1</strong> cookies.",
      1
    ],
    [
      "cookie",
      "Making some dough",
      "Accept <strong>10</strong> cookies.",
      10
    ],
    [
      "cookie",
      "So baked right now",
      "Accept <strong>100</strong> cookies.",
      100
    ],
    [
      "cookie",
      "Cookie Clicker",
      "Accept <strong>1000</strong> cookies.",
      1e3
    ],
    [
      "whisper",
      "It's About Sending A Message",
      "Post a whisper.",
      1
    ],
    [
      "sea",
      "Under the sea",
      "Go make friend with the fishes.",
      1
    ],
    [
      "upsideDown",
      "Turtle",
      "Get upside down.",
      1
    ],
    [
      "frontFlip",
      "Teeth first",
      "Do a front flip and land on your 4 wheels.",
      1
    ],
    [
      "backFlip",
      "Flip of faith",
      "Do a back flip and land on your 4 wheels.",
      1
    ],
    [
      "suspensions",
      "Lowrider",
      "Use the vehicle suspensions.",
      4
    ],
    [
      "honk",
      "Honk",
      "Honk me like one of your french driver.",
      10
    ],
    [
      "explosiveCrates",
      "Great Explosion Murder God Dynamight",
      "Blow up every explosive crate.",
      20,
      true
    ],
    [
      "goHigh",
      "Limit the sky",
      "Reach <strong>15 meters</strong> high.",
      15
    ],
    [
      "strike",
      "F*** it, dude. Let's go bowling",
      "Accomplished a strike.",
      1
    ],
    [
      "toiletDown",
      "Do not disturb",
      "Knock down the latrine.",
      1
    ],
    [
      "circuitFinish",
      "Participation medal",
      "Finish a race.",
      1
    ],
    [
      "circuitFinishFast",
      "KA-CHOW!",
      "Finish a race in less than <strong>30s</strong>.",
      1
    ],
    [
      "circuitLeaderboard",
      "Early Bird gets the Worm",
      "Make it to the leaderboard.",
      1
    ],
    [
      "fullDay",
      "Don\u2019t you have work to do?",
      "Spend a full day cycle here in one go.",
      1
    ],
    [
      "distanceDriven",
      "Baby step",
      "Drive 1km.",
      1
    ],
    [
      "distanceDriven",
      "Are we there yet?",
      "Drive 10km.",
      10
    ],
    [
      "distanceDriven",
      "Honey, I\u2019m home!",
      "Drive 100km.",
      100
    ],
    [
      "sacrifice",
      "One for the god of Chaos",
      "Sacrifice yourself into the altar.",
      1
    ],
    [
      "cataclysm",
      "Witness me!",
      "Witness a cataclysm",
      1
    ],
    [
      "weatherSnow",
      "Do you want to build a snowman?",
      "Witness snowy weather.",
      1
    ],
    [
      "weatherRain",
      "I\u2019m singing in the rain",
      "Witness a rainy weather.",
      1
    ],
    [
      "lightning",
      "1.21 Gigawatts!",
      "Get hit by a lightning.",
      1
    ],
    [
      "waterfall",
      "Gamer instinct",
      "What did you expect? A treasure?",
      1
    ],
    [
      "fan",
      "You\u2019re my only fan",
      "Spawn a fan.",
      1
    ],
    [
      "reset",
      "Clean your room",
      "Put back everything as it was.",
      1
    ],
    [
      "statueDown",
      "Revolution!",
      "Tear that statue down.",
      1
    ],
    [
      "konami",
      "Up up down down\u2026",
      "You know the rest.",
      1
    ],
    [
      "debug",
      "It's not a bug, it's a feature",
      "Access the debug UI.",
      1
    ],
    [
      "hacker",
      "Hacker",
      "This one can\u2019t be achieved.",
      1
    ]
  ];
  class $n {
    constructor() {
      this.game = T.getInstance(), this.events = new se(), this.setStorage(), this.setMenu(), this.setSounds(), this.setGroups(), this.setItems(), this.setGlobalProgress(), this.setRewards(), this.setReset();
      const e = this.storage.get();
      for (const t in e) {
        const s = this.groups.get(t);
        if (s) {
          const i = e[t];
          s.setProgress(i, true);
        }
      }
      this.globalProgress.update(), this.rewards.update();
    }
    setStorage() {
      this.storage = {}, this.storage.save = () => {
        const e = {};
        this.groups.forEach((s, i) => {
          s.progress instanceof Set ? s.progress.size && (e[i] = [
            ...s.progress
          ]) : s.progress > 0 && (e[i] = s.progress);
        });
        const t = JSON.stringify(e);
        localStorage.setItem("achievements", t);
      }, this.storage.get = () => {
        const e = localStorage.getItem("achievements");
        return e ? JSON.parse(e) : {};
      };
    }
    setGlobalProgress() {
      this.globalProgress = {}, this.globalProgress.element = this.menu.instance.contentElement.querySelector(".js-global-progress"), this.globalProgress.currentElement = this.globalProgress.element.querySelector(".js-current"), this.globalProgress.totalElement = this.globalProgress.element.querySelector(".js-total"), this.globalProgress.timeElement = this.globalProgress.element.querySelector(".js-time"), this.globalProgress.achieved = false, this.globalProgress.achievedCount = 0, this.globalProgress.totalCount = 0, this.globalProgress.ratioUniform = d(), this.globalProgress.timeStart = 0, this.globalProgress.timeEnd = 0;
      let e = localStorage.getItem("achievementsTimeStart");
      e && (e = parseFloat(e), isNaN(e) || (this.globalProgress.timeStart = e));
      let t = localStorage.getItem("achievementsTimeEnd");
      t && (t = parseFloat(t), isNaN(t) || (this.globalProgress.timeEnd = t)), this.globalProgress.update = () => {
        this.globalProgress.achievedCount = 0, this.globalProgress.totalCount = 0, this.groups.forEach((s) => {
          for (const i of s.items) this.globalProgress.achievedCount += i.achieved ? 1 : 0, this.globalProgress.totalCount++;
        }), this.globalProgress.ratioUniform.value = this.globalProgress.achievedCount / this.globalProgress.totalCount, this.globalProgress.totalElement.textContent = this.globalProgress.totalCount, this.globalProgress.currentElement.textContent = this.globalProgress.achievedCount, this.globalProgress.achievedCount === this.globalProgress.totalCount && (this.globalProgress.achieved || (localStorage.getItem("achievementsTimeEnd") || (this.globalProgress.timeEnd = this.game.player.timePlayed.all, localStorage.setItem("achievementsTimeEnd", this.globalProgress.timeEnd)), this.globalProgress.timeElement.textContent = Hs(this.globalProgress.timeEnd - this.globalProgress.timeStart), this.globalProgress.achieved = true, this.globalProgress.element.classList.add("is-achieved")));
      }, this.globalProgress.reset = () => {
        this.globalProgress.achieved = false, this.globalProgress.currentElement.textContent = 0, this.globalProgress.timeStart = this.game.player.timePlayed.all, this.globalProgress.timeEnd = 0, localStorage.setItem("achievementsTimeStart", this.globalProgress.timeStart), localStorage.removeItem("achievementsTimeEnd"), this.globalProgress.element.classList.remove("is-achieved");
      }, this.globalProgress.update();
    }
    setRewards() {
      this.rewards = {}, this.rewards.elements = this.menu.instance.contentElement.querySelectorAll(".js-reward"), this.rewards.items = /* @__PURE__ */ new Map(), this.rewards.default = null, this.rewards.count = this.rewards.elements.length;
      let e = 0;
      for (const s of this.rewards.elements) {
        const i = {};
        i.name = s.dataset.name, i.element = s, i.threshold = Math.round(e / (this.rewards.count - 1) * this.globalProgress.totalCount), i.locked = true, i.tooltipTextElement = i.element.querySelector(".js-tooltip strong"), i.element.addEventListener("click", (a) => {
          a.preventDefault(), this.rewards.set(i.name) && this.game.menu.close();
        }), typeof s.dataset.default < "u" && (this.rewards.default = i), this.rewards.items.set(i.name, i), e++;
      }
      this.rewards.current = this.rewards.default;
      const t = localStorage.getItem("achievementsReward");
      if (t) {
        const s = this.rewards.items.get(t);
        s && (this.rewards.current = s);
      }
      this.rewards.current.element.classList.add("is-active"), this.rewards.set = (s) => {
        const i = this.rewards.items.get(s);
        return i && !i.locked && i !== this.rewards.current ? (this.rewards.current && this.rewards.current.element.classList.remove("is-active"), this.rewards.current = i, this.rewards.current.element.classList.add("is-active"), this.sounds.paint.play(), this.events.trigger("rewardActiveChange", [
          this.rewards.current
        ]), localStorage.setItem("achievementsReward", i.name), true) : false;
      }, this.rewards.update = () => {
        this.rewards.items.forEach((s) => {
          this.globalProgress.achievedCount >= s.threshold ? s.locked && (s.locked = false, s.element.classList.remove("is-locked"), s.element.classList.remove("has-tooltip")) : (s.locked || (s.locked = true, s.element.classList.add("is-locked"), s.element.classList.add("has-tooltip"), s === this.rewards.current && this.rewards.set(this.rewards.default.name)), s.tooltipTextElement.textContent = s.threshold, s === this.rewards.current && this.rewards.set(this.rewards.default.name));
        });
      };
    }
    setGroups() {
      this.groups = /* @__PURE__ */ new Map();
      for (const [e, t, s, i, a = false] of gs) {
        const n = this.groups.get(e) ?? this.createGroup(e);
        a && !(n.progress instanceof Set) && (n.progress = /* @__PURE__ */ new Set());
      }
    }
    createGroup(e) {
      const t = {
        progress: 0,
        items: []
      };
      return t.setProgress = (s, i = false) => {
        let a = t.progress instanceof Set ? t.progress.size : t.progress;
        if (t.progress instanceof Set) {
          const l = s instanceof Array ? s : [
            s
          ];
          for (const r of l) t.progress.add(r);
        } else s !== t.progress && (t.progress = s);
        const o = (t.progress instanceof Set ? t.progress.size : t.progress) - a;
        return o && t.updateItems(i), o;
      }, t.addProgress = (s = 1) => t.setProgress(t.progress + s), t.updateItems = (s) => {
        const i = t.progress instanceof Set ? t.progress.size : t.progress;
        for (const a of t.items) {
          const n = Math.min(i, a.total);
          a.progressCurrentElement.textContent = n, a.barFillElement.style.transform = `scaleX(${n / a.total})`, !a.achieved && n === a.total && a.achieve(s);
        }
      }, t.reset = () => {
        t.progress instanceof Set ? t.progress = /* @__PURE__ */ new Set() : t.progress = 0;
        for (const s of t.items) s.progressCurrentElement.textContent = 0, s.barFillElement.style.transform = "scaleX(0)", s.achieved = false, s.itemElement.classList.remove("is-achieved");
      }, this.groups.set(e, t), t;
    }
    setItems() {
      const e = this.menu.instance.contentElement.querySelector(".js-items");
      for (const [t, s, i, a] of gs) {
        const n = {
          total: a,
          achieved: false
        };
        this.groups.get(t).items.push(n);
        const l = `
                <div class="title">${s}</div>
                <div class="description">
                    <div class="text">${i}</div>
                    <div class="progress">
                        <div class="check-icon"></div>
                        <span class="check"></span>
                        <span class="current">0</span> / <span>${a}</span>
                    </div>
                </div>
                <div class="bar">
                    <div class="fill"></div>
                </div>
            `;
        n.itemElement = document.createElement("div"), n.itemElement.classList.add("achievement"), n.itemElement.innerHTML = l, n.progressCurrentElement = n.itemElement.querySelector(".current"), n.barFillElement = n.itemElement.querySelector(".bar .fill"), e.append(n.itemElement), n.achieve = (r = true) => {
          if (n.achieved = true, n.itemElement.classList.add("is-achieved"), !r) {
            this.globalProgress.update(), this.rewards.update(), this.game.world.confetti && (this.game.world.confetti.pop(this.game.player.position.clone()), this.game.world.confetti.pop(this.game.player.position.clone().add(new y(1, -1, 1.5))), this.game.world.confetti.pop(this.game.player.position.clone().add(new y(1, -1, -1.5)))), this.sounds.achieve.play();
            const h = `
                        <div class="top">
                            <div class="title">${s}</div>
                            <div class="progress">
                                <div class="check-icon"></div>
                                <span class="check"></span>
                                <span class="current">${a}</span> / <span>${a}</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="description">${i}</div>
                            <div class="open-icon"></div>
                        </div>
                    `;
            this.game.notifications.show(h, "achievement", 4, () => {
              this.game.inputs.interactiveButtons.clearItems(), this.game.menu.open("achievements");
            });
          }
        };
      }
    }
    setMenu() {
      this.menu = {}, this.menu.instance = this.game.menu.items.get("achievements");
    }
    setSounds() {
      this.sounds = {}, this.sounds.achieve = this.game.audio.register({
        path: "sounds/achievements/Money Reward 2.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.5
      }), this.sounds.paint = this.game.audio.register({
        path: "sounds/vehicle/paint/Spray Paint 14.mp3",
        autoplay: false,
        loop: false,
        volume: 0.4,
        antiSpam: 0.5
      });
    }
    setReset() {
      const e = this.menu.instance.contentElement.querySelector(".js-button-reset");
      let t = 0;
      e.addEventListener("click", (s) => {
        s.preventDefault(), t++, t === 1 ? e.textContent = "Are you sure?" : t === 2 ? e.textContent = "Definitely?" : t === 3 && (e.textContent = "Done!", t = 0, this.reset());
      }), e.addEventListener("mouseleave", (s) => {
        s.preventDefault(), t = 0, e.textContent = "Reset achievements";
      });
    }
    setProgress(e, t) {
      const s = this.groups.get(e);
      if (!s) return;
      s.setProgress(t) && this.storage.save();
    }
    addProgress(e) {
      const t = this.groups.get(e);
      if (!t) return;
      t.addProgress() && this.storage.save();
    }
    reset() {
      this.game.player.distanceDriven.reset(), this.groups.forEach((s) => {
        s.reset();
      }), this.globalProgress.reset(), this.storage.save(), this.globalProgress.update(), this.rewards.update();
      const e = this.groups.get("landingLeave");
      e && this.game.world.areas.landing && (this.game.world.areas.landing.isIn || e.setProgress(1));
      const t = this.groups.get("debug");
      t && this.game.debug.active && t.setProgress(1), this.game.tornado && (this.game.tornado.achievementAchieved = false), this.game.world.rainLines && (this.game.world.rainLines.achievementAchieved = false), this.game.world.snow && (this.game.world.snow.achievementAchieved = false);
    }
  }
  const _je = class _je {
    constructor() {
      this.game = T.getInstance(), this.element = this.game.domElement.querySelector(".js-notifications"), this.items = this.element.querySelector(".js-items"), this.pendings = [], this.current = null, this.timeTotal = 0, this.timeLeft = 0, this.timeHold = false, this.state = _je.STATE_HIDDEN, this.game.ticker.events.on("tick", () => {
        this.update();
      }, 14);
    }
    show(e = "", t = "", s = 3, i = null, a = null) {
      if (this.current) return a !== null && this.pendings.length && (this.pendings.find(([l, r, h, c, u]) => u === a) || a === this.current.id) || this.pendings.push([
        e,
        t,
        s,
        i,
        a
      ]), false;
      this.state = _je.STATE_VISIBLE;
      const n = {};
      n.id = a, n.element = document.createElement("div"), n.element.classList.add("notification"), t && n.element.classList.add(`is-${t}`), n.element.innerHTML = e, n.timeBar = document.createElement("div"), n.timeBar.classList.add("time-bar"), n.element.append(n.timeBar), n.element.addEventListener("transitionend", (o) => {
        if (o.target === n.element && n.element.classList.contains("is-leaving") && (this.items.removeChild(n.element), this.current = null, this.state = _je.STATE_HIDDEN, this.pendings.length)) {
          const l = this.pendings.shift();
          this.show(...l);
        }
      }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n.element.classList.add("is-visible");
        });
      }), n.element.addEventListener("click", (o) => {
        o.preventDefault(), typeof i == "function" && i(), this.hide();
      }, {
        once: true
      }), n.element.addEventListener("pointerenter", (o) => {
        o.pointerType !== "touch" && (this.timeHold = true);
      }), n.element.addEventListener("pointerleave", (o) => {
        this.timeHold = false;
      }), this.timeTotal = s, this.timeLeft = s, this.items.append(n.element), this.current = n;
    }
    hide() {
      this.state === _je.STATE_HIDING || this.state === _je.STATE_HIDDEN || (this.state = _je.STATE_HIDING, this.current.element.classList.add("is-leaving"));
    }
    update() {
      if (this.state === _je.STATE_VISIBLE && !this.timeHold) {
        this.timeLeft = Math.max(0, this.timeLeft - this.game.ticker.delta);
        const e = this.timeLeft / this.timeTotal;
        this.current.timeBar.style.transform = `scaleX(${e})`, this.timeLeft === 0 && this.hide();
      }
    }
  };
  __publicField(_je, "STATE_VISIBLE", 1);
  __publicField(_je, "STATE_HIDING", 2);
  __publicField(_je, "STATE_HIDDEN", 3);
  let je = _je;
  class Kn {
    constructor() {
      this.game = T.getInstance(), this.events = new se();
      const e = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (this.level = e ? 1 : 0, this.game.debug.active) {
        const t = this.game.debug.panel.addFolder({
          title: "\u2699\uFE0F Quality",
          expanded: false
        });
        this.game.debug.addButtons(t, {
          low: () => {
            this.changeLevel(1);
          },
          high: () => {
            this.changeLevel(0);
          }
        }, "change");
      }
    }
    changeLevel(e = 0) {
      e !== this.level && (this.level = e, this.events.trigger("change", [
        this.level
      ]));
    }
  }
  class Xn {
    constructor() {
      this.game = T.getInstance(), this.interval = 1 / 60, this.lastTime = 0, this.offset = 0, this.offsetRounded = 0, this.index = 0, this.length = 30, this.carPosition = 10, this.objectInterval = 18, this.game.ticker.events.on("tick", () => {
        this.update();
      }, 14);
    }
    update() {
      this.offset += this.game.physicalVehicle.forwardSpeed * this.game.ticker.deltaScaled;
      const e = Math.floor(this.offset);
      if (this.game.ticker.elapsed - this.lastTime > this.interval && e !== this.offsetRounded) {
        this.lastTime = this.game.ticker.elapsed, this.offsetRounded = e;
        const s = [];
        for (let a = 0; a < this.length; a++) a === this.carPosition && s.push({
          character: "\u{1F697}",
          size: 4,
          position: a
        }), (a - e) % this.objectInterval === 0 && s.push({
          character: "\u{1F333}",
          size: 4,
          position: a
        });
        for (let a = 0; a < s.length - 1; a++) {
          const n = s[a], o = s[a + 1];
          if (n.position + n.size > o.position) {
            const l = n.position + n.size - o.position;
            let r = Math.ceil(l / 2);
            n.position - r < 0 && (r = 0);
            const h = l - r;
            n.position -= r, o.position += h;
          }
        }
        let i = Array(this.length).fill("\xA0");
        for (let a = 0; a < s.length; a++) {
          const n = s[a];
          i.splice(n.position, n.size, n.character);
          for (let o = a + 1; o < s.length; o++) {
            const l = s[o];
            l.position -= n.size - 1;
          }
        }
        document.title = "KP" + i.join("");
      }
    }
  }
  class Yn {
    static render() {
      const e = T.getInstance(), t = new Zi(32), s = new _i(1, 1e5, t);
      e.scene.add(s);
      const i = [];
      e.scene.traverse((a) => {
        a.visible === false && typeof a.userData.preventPreRender > "u" && (a.visible = true, i.push(a));
      }), s.update(e.rendering.renderer, e.scene);
      for (const a of i) a.visible = false;
    }
  }
  class Zn {
    constructor() {
      this.game = T.getInstance(), this.element = this.game.menu.items.get("options").contentElement, this.setSound(), this.setQuality(), this.setRespawn(), this.setReset(), this.setRenderer(), this.setServer();
    }
    setSound() {
      this.element.querySelector(".js-audio-toggle").addEventListener("click", this.game.audio.mute.toggle);
    }
    setQuality() {
      const e = this.element.querySelector(".js-quality-toggle"), t = e.querySelector("span");
      t.textContent = this.game.quality.level === 0 ? "High" : "Low", e.addEventListener("click", () => {
        this.game.quality.changeLevel(this.game.quality.level === 0 ? 1 : 0);
      }), this.game.quality.events.on("change", () => {
        t.textContent = this.game.quality.level === 0 ? "High" : "Low";
      });
    }
    setRespawn() {
      this.element.querySelector(".js-respawn").addEventListener("click", () => {
        this.game.player.respawn(), this.game.menu.close();
      });
    }
    setReset() {
      this.element.querySelector(".js-reset").addEventListener("click", () => {
        this.game.reset(), this.game.menu.close();
      });
    }
    setRenderer() {
      if (this.game.rendering.renderer.backend.isWebGLBackend) {
        const e = this.element.querySelector(".js-renderer");
        e.classList.remove("is-success"), e.classList.add("is-danger");
        const t = e.querySelector("span");
        t.textContent = "WebGL";
        const s = e.querySelector(".js-tooltip");
        s.innerHTML = "Your browser is <strong>not compatible</strong> with WebGPU resulting in performance loss";
      }
    }
    setServer() {
      const e = this.element.querySelector(".js-server");
      if (!e) return;
      const t = e.querySelector("span"), s = e.querySelector(".js-tooltip"), i = (a) => {
        a ? (e.classList.add("is-success"), e.classList.remove("is-danger"), t.textContent = "Online", s.innerHTML = "Enjoy the <strong>multiplayer</strong> features") : (e.classList.remove("is-success"), e.classList.add("is-danger"), t.textContent = "Offline", s.innerHTML = "Should be back soon");
      };
      i(this.game.server.connected), this.game.server.events.on("connected", () => {
        i(true);
      }), this.game.server.events.on("disconnected", () => {
        i(false);
      });
    }
  }
  let _n = class {
    constructor() {
      this.game = T.getInstance(), this.initiated = false, this.modal = this.game.modals.items.get("map"), this.element = this.modal.element.querySelector(".js-map-container"), this.setTrigger(), this.setInputs(), this.modal.events.on("open", () => {
        this.initiated || this.init(), this.texture.update();
      });
    }
    init() {
      this.initiated = true, this.setLocations(), this.setPlayer(), this.setTexture(), this.game.ticker.events.on("tick", () => {
        this.update();
      }, 14);
    }
    setLocations() {
      this.locations = {}, this.locations.items = [
        {
          name: "Achievements",
          respawnName: "achievements",
          offset: {
            x: 0,
            y: -0.01
          }
        },
        {
          name: "Altar",
          respawnName: "altar",
          offset: {
            x: 0,
            y: -0.05
          }
        },
        {
          name: "Behind<br /> the scene",
          respawnName: "behindTheScene",
          offset: {
            x: 0.01,
            y: 0
          }
        },
        {
          name: "Bowling",
          respawnName: "bowling",
          offset: {
            x: -0.08,
            y: 0.03
          }
        },
        {
          name: "Career",
          respawnName: "career",
          offset: {
            x: 0,
            y: -0.06
          }
        },
        {
          name: "Circuit",
          respawnName: "circuit",
          offset: {
            x: -0.08,
            y: -0.05
          }
        },
        {
          name: "Cookie",
          respawnName: "cookie",
          offset: {
            x: -0.02,
            y: -0.01
          }
        },
        {
          name: "Gallery",
          respawnName: "lab",
          offset: {
            x: -0.03,
            y: 0
          }
        },
        {
          name: "Landing",
          respawnName: "landing",
          offset: {
            x: 0.02,
            y: 0
          }
        },
        {
          name: "Projects",
          respawnName: "projects",
          offset: {
            x: 0,
            y: -0.02
          }
        },
        {
          name: "Social",
          respawnName: "social",
          offset: {
            x: -0.01,
            y: -0.04
          }
        },
        {
          name: "Time Machine",
          respawnName: "timeMachine",
          offset: {
            x: 0,
            y: 0
          }
        }
      ];
      for (const e of this.locations.items) {
        const t = this.game.respawns.getByName(e.respawnName), s = this.worldToMap(t.position), i = `
                <div class="pin"></div>
                <div class="name-container">
                    <div class="name">${e.name}</div>
                </div>
            `, a = document.createElement("div");
        a.classList.add("location"), a.innerHTML = i, a.style.left = `${(s.x + e.offset.x) * 100}%`, a.style.top = `${(s.y + e.offset.y) * 100}%`, a.style.zIndex = Math.round(s.y * 1e3), this.element.append(a), a.addEventListener("click", () => {
          this.game.player.respawn(e.respawnName, () => {
            this.game.view.focusPoint.isTracking = true;
          }), this.game.modals.close();
        });
      }
    }
    setPlayer() {
      this.player = {}, this.player.element = this.element.querySelector(".js-player"), this.player.roundedPosition = {
        x: 0,
        y: 0
      };
    }
    setTexture() {
      this.texture = {}, this.texture.element = this.element.querySelector(".js-texture"), this.texture.previousUrl = null, this.texture.element.addEventListener("load", () => {
        this.texture.element.classList.add("is-visible");
      }), this.texture.update = () => {
        const e = this.game.dayCycles.intervalEvents.get("night").inInterval ? "ui/map/map-night.webp" : "ui/map/map-day.webp";
        e !== this.texture.previousUrl && (this.texture.element.classList.remove("is-visible"), this.texture.previousUrl = e, this.texture.element.src = e);
      };
    }
    setTrigger() {
      const e = this.game.domElement.querySelector(".js-map-trigger");
      e.addEventListener("click", (t) => {
        this.game.modals.open("map");
      }), e.addEventListener("keydown", (t) => {
        t.preventDefault();
      });
    }
    setInputs() {
      this.game.inputs.addActions([
        {
          name: "map",
          categories: [
            "modal",
            "menu",
            "wandering"
          ],
          keys: [
            "Keyboard.m",
            "Keyboard.KeyM"
          ]
        }
      ]), this.game.inputs.events.on("map", (e) => {
        e.active && (this.modal.isOpen ? this.game.modals.close() : this.game.modals.open("map"));
      });
    }
    worldToMap(e) {
      let t = e.x, s = typeof e.z < "u" ? e.z : e.y;
      return t /= this.game.terrain.size, s /= this.game.terrain.size, t += 0.5, s += 0.5, t = Qe(t, 0, 1), s = Qe(s, 0, 1), {
        x: t,
        y: s
      };
    }
    update() {
      if (!this.modal.isOpen) return;
      const e = Math.round(this.game.player.position.x), t = Math.round(this.game.player.position.z);
      if (e !== this.player.roundedPosition.x || t !== this.player.roundedPosition.y) {
        this.player.roundedPosition.x = e, this.player.roundedPosition.y = t;
        const s = this.worldToMap(this.player.roundedPosition), i = Math.round(s.x * 1e3) / 10, a = Math.round(s.y * 1e3) / 10;
        this.player.element.style.left = `${i}%`, this.player.element.style.top = `${a}%`, this.player.element.style.transform = `rotate(${-this.game.physicalVehicle.yRotation}rad)`;
      }
    }
  };
  T = class {
    static getInstance() {
      return T.instance;
    }
    constructor() {
      if (T.instance) return T.instance;
      T.instance = this, this.init();
    }
    async init() {
      this.domElement = document.querySelector(".game"), this.canvasElement = this.domElement.querySelector(".js-canvas"), document.documentElement.classList.add("is-started"), this.scene = new Ns(), this.debug = new ta(), this.resourcesLoader = new xa(), this.quality = new Kn(), this.server = new Dn(), this.ticker = new Pa(), this.time = new Sa(), this.dayCycles = new Tn(), this.yearCycles = new Nn(), this.inputs = new K([], [
        "intro"
      ]), this.audio = new Gn(), this.notifications = new je(), this.rayCursor = new qn(), this.viewport = new Ta(this.domElement), this.modals = new ce(), this.menu = new ae(), this.rendering = new wa(), await this.rendering.setRenderer();
      const e = "-compressed", t = "textureKtx", s = "ktx", i = "?cb=1";
      this.resources = await this.resourcesLoader.load([
        [
          "respawnsReferencesModel",
          `respawns/respawnsReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "behindTheSceneStarsTexture",
          `behindTheScene/stars.${s}${i}`,
          t,
          (r) => {
            r.colorSpace = he, r.minFilter = W, r.magFilter = W, r.generateMipmaps = false, r.wrapS = xe, r.wrapT = xe;
          }
        ],
        [
          "soundTexture",
          `intro/sound.${s}${i}`,
          t,
          (r) => {
            r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.repeat.x = 0.5;
          }
        ],
        [
          "paletteTexture",
          `palette.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false, r.colorSpace = he;
          }
        ]
      ]), this.options = new Zn(), this.respawns = new Un("landing"), this.view = new ve(), this.rendering.setPostprocessing(), this.rendering.start(), this.reveal = new Hn(), this.noises = new An(), this.weather = new Mn(), this.wind = new En(), this.tracks = new en(), this.lighting = new wn(), this.fog = new Sn(), this.water = new Vn(), this.materials = new xn(), this.objects = new Pn(), this.explosions = new Bn(), this.world = new yn();
      const a = ea(() => import("./rapier-BFoi23lB.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1]), import.meta.url), n = this.resourcesLoader.load([
        [
          "foliageTexture",
          `foliage/foliageSDF.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false;
          }
        ],
        [
          "bushesReferences",
          `bushes/bushesReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "vehicle",
          `vehicle/default${e}.glb${i}`,
          "gltf"
        ],
        [
          "playgroundVisual",
          `playground/playgroundVisual${e}.glb${i}`,
          "gltf"
        ],
        [
          "playgroundPhysical",
          `playground/playgroundPhysical${e}.glb${i}`,
          "gltf"
        ],
        [
          "flowersReferencesModel",
          `flowers/flowersReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "bricksModel",
          `bricks/bricks${e}.glb${i}`,
          "gltf"
        ],
        [
          "fencesModel",
          `fences/fences${e}.glb${i}`,
          "gltf"
        ],
        [
          "benchesModel",
          `benches/benches${e}.glb${i}`,
          "gltf"
        ],
        [
          "explosiveCratesModel",
          `explosiveCrates/explosiveCrates${e}.glb${i}`,
          "gltf"
        ],
        [
          "lanternsModel",
          `lanterns/lanterns${e}.glb${i}`,
          "gltf"
        ],
        [
          "terrainTexture",
          `terrain/terrain.${s}${i}`,
          t,
          (r) => {
            r.flipY = false;
          }
        ],
        [
          "terrainModel",
          `terrain/terrain${e}.glb${i}`,
          "gltf"
        ],
        [
          "floorSlabsTexture",
          `floor/slabs.${s}`,
          t,
          (r) => {
            r.wrapS = xe, r.wrapT = xe, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false;
          }
        ],
        [
          "birchTreesVisualModel",
          `birchTrees/birchTreesVisual${e}.glb${i}`,
          "gltf"
        ],
        [
          "birchTreesReferencesModel",
          `birchTrees/birchTreesReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "oakTreesVisualModel",
          `oakTrees/oakTreesVisual${e}.glb${i}`,
          "gltf"
        ],
        [
          "oakTreesReferencesModel",
          `oakTrees/oakTreesReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "cherryTreesVisualModel",
          `cherryTrees/cherryTreesVisual${e}.glb${i}`,
          "gltf"
        ],
        [
          "cherryTreesReferencesModel",
          `cherryTrees/cherryTreesReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "sceneryModel",
          `scenery/scenery${e}.glb${i}`,
          "gltf"
        ],
        [
          "areasModel",
          `areas/areas${e}.glb${i}`,
          "gltf"
        ],
        [
          "poleLightsModel",
          `poleLights/poleLights${e}.glb${i}`,
          "gltf"
        ],
        [
          "whisperFlameTexture",
          `whispers/whisperFlame.${s}${i}`,
          t,
          (r) => {
            r.minFilter = j, r.magFilter = j, r.generateMipmaps = false;
          }
        ],
        [
          "satanStarTexture",
          `areas/satanStar.${s}${i}`,
          t,
          (r) => {
            r.minFilter = j, r.magFilter = j, r.generateMipmaps = false;
          }
        ],
        [
          "tornadoPathReferencesModel",
          `tornado/tornadoPathReferences${e}.glb${i}`,
          "gltf"
        ],
        [
          "overlayPatternTexture",
          `overlay/overlayPattern.${s}${i}`,
          t,
          (r) => {
            r.wrapS = xe, r.wrapT = xe, r.magFilter = W, r.minFilter = W, r.generateMipmaps = false;
          }
        ],
        [
          "interactivePointsKeyIconCrossTexture",
          `interactivePoints/interactivePointsKeyIconCross.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false;
          }
        ],
        [
          "interactivePointsKeyIconEnterTexture",
          `interactivePoints/interactivePointsKeyIconEnter.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false;
          }
        ],
        [
          "interactivePointsKeyIconATexture",
          `interactivePoints/interactivePointsKeyIconA.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false;
          }
        ],
        [
          "jukeboxMusicNotes",
          `jukebox/jukeboxMusicNotes.${s}${i}`,
          t,
          (r) => {
            r.minFilter = j, r.magFilter = j, r.generateMipmaps = false;
          }
        ],
        [
          "achievementsGlyphsTexture",
          `achievements/glyphs.${s}${i}`,
          t,
          (r) => {
            r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = xe;
          }
        ],
        [
          "careerFreelancerTexture",
          `career/careerFreelancer.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "careerHeticTexture",
          `career/careerHetic.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "careerImmersiveGardenTexture",
          `career/careerImmersiveGarden.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "careerIRLTeacherTexture",
          `career/careerIRLTeacher.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "careerOnlineTeacherTexture",
          `career/careerOnlineTeacher.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "careerUzikTexture",
          `career/careerUzik.${s}${i}`,
          t,
          (r) => {
            r.flipY = false, r.minFilter = j, r.magFilter = j, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te;
          }
        ],
        [
          "timeMachineScreenMGSTexture",
          `timeMachine/timeMachineScreenMGS.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te, r.colorSpace = he;
          }
        ],
        [
          "timeMachineScreenFolioTexture",
          `timeMachine/timeMachineScreenFolio.${s}${i}`,
          t,
          (r) => {
            r.minFilter = W, r.magFilter = W, r.generateMipmaps = false, r.wrapS = te, r.wrapT = te, r.colorSpace = he;
          }
        ]
      ], (r, h) => {
        this.world.intro.updateProgress(1 - r / h);
      }), [o, l] = await Promise.all([
        n,
        a
      ]);
      this.RAPIER = l, this.resources = {
        ...o,
        ...this.resources
      }, this.terrain = new In(), this.physics = new va(), this.wireframe = new Fn(), this.physicalVehicle = new Rn(), this.zones = new zn(), this.player = new be(), this.closingManager = new jn(), this.interactivePoints = new N(), this.konamiCode = new Wn(), this.achievements = new $n(), this.tornado = new On(), this.map = new _n(), this.title = new Xn(), this.world.step(1), this.overlay = new Ln(), this.quality.level === 0 && this.rendering.renderer.backend.isWebGPUBackend && Yn.render(), this.ticker.wait(3, () => {
        this.reveal.updateStep(0);
      }), this.debug.active && this.achievements.setProgress("debug", 1);
    }
    reset() {
      this.inputs.interactiveButtons.clearItems(), this.player.respawn(null, () => {
        this.objects.resetAll(), this.world.explosiveCrates && this.world.explosiveCrates.reset(), this.world.areas.bowling && this.world.areas.bowling.restart(), this.world.areas.cookie && (this.world.areas.cookie.cookies.instancedGroup.needsUpdate = true), this.world.areas.toilet && (this.world.areas.toilet.cabin.down = false), this.world.areas.social && (this.world.areas.social.statue.down = false, this.world.areas.social.fans.instancedGroup.needsUpdate = true), this.world.benches && (this.world.benches.instancedGroup.needsUpdate = true), this.world.fences && (this.world.fences.instancedGroup.needsUpdate = true), this.world.bricks && (this.world.bricks.instancedGroup.needsUpdate = true), this.world.lanterns && (this.world.lanterns.instancedGroup.needsUpdate = true), f.delayedCall(2, () => {
          this.achievements.setProgress("reset", 1);
        });
      });
    }
  };
})();
export {
  T as G,
  ea as _,
  __tla
};
