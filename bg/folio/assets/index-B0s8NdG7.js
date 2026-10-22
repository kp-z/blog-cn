const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BT3-4Og0.js","./three-BPWavq8k.js","./vendor-BcHL05hW.js","./areas-Cy-leeCm.js","./tweakpane-C39D8eO8.js","./gsap-BcKM28WW.js","./camera-controls-ByztGhiL.js"])))=>i.map(i=>d[i]);
import { _ as me, __tla as __tla_0 } from "./areas-Cy-leeCm.js";
import { bJ as ve, bK as he, bL as X, V as we } from "./three-BPWavq8k.js";
import "./tweakpane-C39D8eO8.js";
import "./vendor-BcHL05hW.js";
import "./gsap-BcKM28WW.js";
import "./camera-controls-ByztGhiL.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const k = document.createElement("link").relList;
    if (k && k.supports && k.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
      for (const f of l) if (f.type === "childList") for (const s of f.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function W(l) {
      const f = {};
      return l.integrity && (f.integrity = l.integrity), l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? f.credentials = "include" : l.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function r(l) {
      if (l.ep) return;
      l.ep = true;
      const f = W(l);
      fetch(l.href, f);
    }
  })();
  (function() {
    var A = new URLSearchParams(location.search), k = A.get("bg") === "1", W = window.parent && window.parent !== window, r = k ? "bg" : "game";
    window.__hexoBg = k, k && document.documentElement.classList.add("hexo-bg"), me(() => import("./index-BT3-4Og0.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var l = document.createElement("style");
    l.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important;width:52px !important;height:34px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important;width:52px !important;height:34px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:rgba(10,18,24,.42) !important;border:1px solid rgba(255,255,255,.38) !important;border-right:2px solid rgba(255,255,255,.78) !important;border-radius:9px !important;box-sizing:border-box !important;width:100% !important;height:100% !important;-webkit-backdrop-filter:blur(8px) !important;backdrop-filter:blur(8px) !important}.menu-trigger .button-inner::after,.map-trigger .button-inner::after{display:none !important}.menu-trigger .icon-container,.map-trigger .icon-container{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}html:not(.is-mode-touch) .menu-trigger:hover .button-inner,html:not(.is-mode-touch) .map-trigger:hover .button-inner{transform:none !important;background:rgba(10,18,24,.6) !important}@media (min-width:801px){.menu .inner{width:min(860px,calc(100% - 160px)) !important;height:min(520px,calc(100% - 160px)) !important}.menu .contents .content .content-inner{width:100% !important}.map{width:760px !important;height:760px !important;max-width:68vmin !important;max-height:68vmin !important}}@media only screen and (max-width:800px) and (orientation:portrait){.menu .inner{height:calc((100% - 54px) * 2 / 3) !important}}", document.head.appendChild(l);
    function f(e, i) {
      if (W) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, i || {}), "*");
      } catch {
      }
    }
    function s(e, i) {
      var n = setInterval(function() {
        var R = false;
        try {
          R = e();
        } catch {
        }
        R && (clearInterval(n), i());
      }, 200);
    }
    var H = [
      "keydown",
      "keyup",
      "keypress",
      "pointerdown",
      "pointermove",
      "pointerup",
      "wheel",
      "touchstart",
      "touchmove",
      "touchend"
    ];
    H.forEach(function(e) {
      window.addEventListener(e, function(i) {
        r === "bg" && (i.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && i.cancelable && i.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), s(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, i = false, n = 0, R = 0, x = null, h = 0.17, C = 0.66, N = 2.2;
      function F() {
        x = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function P() {
        x || F(), e.view.spherical.phi = Math.min(Math.PI * 0.49, x.phi + h);
        var t = window.innerWidth <= 800, o = t ? 0.45 : C, w = t ? 1.5 : N;
        e.view.zoom.baseRatio = o, e.view.zoom.smoothedRatio = o, e.view.focusPoint.position.y = x.focusY + w;
      }
      function j() {
        x && (e.view.spherical.phi = x.phi, e.view.zoom.baseRatio = x.baseRatio, e.view.zoom.smoothedRatio = x.smoothedRatio, e.view.focusPoint.position.y = x.focusY, x = null);
      }
      function L(t) {
        if (i !== t) {
          i = t;
          var o = e.rendering && e.rendering.renderer;
          if (!(!o || !o.setAnimationLoop)) if (t) {
            n = performance.now();
            try {
              o.setAnimationLoop(null);
            } catch {
            }
          } else {
            n || (n = performance.now()), R += performance.now() - n, n = 0;
            try {
              o.setAnimationLoop(function(w) {
                e.ticker.update(w - R);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return i;
      }, e.ticker.events.on("tick", function() {
        r === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, P(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function M() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function K() {
        if (r === "game") return;
        if (j(), L(false), r = "game", window.__hexoBg = false, V(), document.documentElement.classList.remove("hexo-bg"), !M()) {
          f("town-game-entered");
          return;
        }
        var t = 0;
        function o() {
          if (t++, e.reveal.step >= 1 || !M()) {
            f("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || t >= 40 ? f("town-game-entered") : o();
          }, 400);
        }
        o();
      }
      function a() {
        r !== "bg" && (V(), F(), r = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), f("town-game-left"));
      }
      window.addEventListener("message", function(t) {
        if (!(t.source !== window.parent && t.source !== window)) {
          var o = t.data;
          !o || typeof o != "object" || (o.type === "town-bg-pause" ? L(true) : o.type === "town-bg-resume" ? L(false) : o.type === "town-bg-enter" ? K() : o.type === "town-bg-leave" && a());
        }
      });
      function g() {
        try {
          var t = window.game;
          if (!t) return false;
          if (t.menu && (t.menu.state === 1 || t.menu.state === 2) || t.modals && (t.modals.state === 1 || t.modals.state === 2)) return true;
          var o = t.world || {};
          if (o.whispers && o.whispers.menu && o.whispers.menu.inputFlag && o.whispers.menu.inputFlag.isOpen || o.areas && o.areas.circuit && o.areas.circuit.menu && o.areas.circuit.menu.inputFlag && o.areas.circuit.menu.inputFlag.isOpen) return true;
          var w = o.areas || {};
          if (w.projects && (w.projects.state === 3 || w.projects.state === 4) || w.lab && (w.lab.state === 3 || w.lab.state === 4) || w.circuit && (w.circuit.state === 2 || w.circuit.state === 3)) return true;
        } catch {
        }
        return false;
      }
      function b(t) {
        try {
          if (!t || !t.element) return;
          t.state === 4 && t.element.dispatchEvent(new Event("transitionend"));
        } catch {
        }
      }
      function V() {
        try {
          var t = window.game;
          if (!t) return;
          t.menu && ((t.menu.state === 1 || t.menu.state === 2) && t.menu.close(), b(t.menu)), t.modals && ((t.modals.state === 1 || t.modals.state === 2) && t.modals.close(), b(t.modals));
          var o = t.world && t.world.areas || {};
          o.projects && (o.projects.state === 3 || o.projects.state === 4) && o.projects.close(), o.lab && (o.lab.state === 3 || o.lab.state === 4) && o.lab.close();
        } catch {
        }
      }
      window.addEventListener("keydown", function(t) {
        t.key !== "Escape" && t.code !== "Escape" || r === "game" && (g() || (t.preventDefault(), t.stopImmediatePropagation(), f("town-game-exit")));
      }, {
        capture: true,
        passive: false
      }), document.addEventListener("pointerdown", function() {
        try {
          e.audio && e.audio.unlock && e.audio.unlock();
        } catch {
        }
      }, {
        once: true
      }), window.__townReady = true, window.__townState = function() {
        return {
          mode: r,
          flying: false,
          locked: r === "bg",
          player: {
            x: 0,
            y: 0,
            z: 0
          },
          camera: {
            x: 0,
            y: 0,
            z: 0
          }
        };
      };
      var c = {
        frames: 0,
        t: performance.now(),
        stage: 0,
        good: 0,
        low: 0,
        since: 0,
        base: e.viewport.pixelRatio
      };
      function d(t) {
        e.viewport.pixelRatio = t, e.rendering.renderer.setPixelRatio(t), e.rendering.renderer.setSize(e.viewport.width, e.viewport.height);
      }
      function m(t) {
        var o = t === 1 ? 1.5 : t === 2 ? 1.25 : c.base;
        return Math.min(c.base, o);
      }
      function v() {
        return r === "game" && !i && e.reveal && e.reveal.step >= 2;
      }
      function D(t) {
        if (v() && (c.since || (c.since = t), c.frames++), t - c.t >= 3e3) {
          var o = c.frames * 1e3 / (t - c.t);
          c.frames = 0, c.t = t, v() && c.base > 1.25 && c.since && t - c.since >= 8e3 && (o < 40 ? (c.low++, c.good = 0) : o > 55 ? (c.good++, c.low = 0) : (c.low = 0, c.good = 0), c.low >= 2 && c.stage < 2 ? (c.stage++, d(m(c.stage)), c.low = 0) : c.good >= 4 && c.stage > 0 && (c.stage--, d(m(c.stage)), c.good = 0));
        }
        window.requestAnimationFrame(D);
      }
      window.requestAnimationFrame(D), f("town-bg-ready", {
        mode: r,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var A = 0, k = setInterval(function() {
      A++;
      var r = window.game;
      if (r && r.resourcesLoader && r.scene && r.respawns && r.world && r.world.intro && r.materials) {
        clearInterval(k);
        try {
          W(r);
        } catch (l) {
          console.warn("[hero] init failed", l);
        }
      }
      A > 240 && clearInterval(k);
    }, 250);
    function W(r) {
      var l = 3.2, f = -0.03;
      try {
        var s = 1 / 0;
        r.scene.updateMatrixWorld(true), r.scene.traverse(function(e) {
          if (e.isMesh && e.geometry && e.name && e.name.toLowerCase().indexOf("wheel") === 0) {
            e.geometry.computeBoundingBox();
            var i = e.geometry.boundingBox;
            if (i) {
              var n = i.min.clone().applyMatrix4(e.matrixWorld);
              n.y < s && (s = n.y);
            }
          }
        }), isFinite(s) && (f = s);
      } catch (e) {
        console.warn("[hero] wheel floor", e);
      }
      var H = r.respawns.getDefault().position;
      r.resourcesLoader.load([
        [
          "heroFolio",
          "hero/hero-folio.glb?v=564ab35fb30a",
          "gltf"
        ]
      ]).then(function(e) {
        var i = e.heroFolio.scene, n = {};
        i.traverse(function(a) {
          if (a.isBone) {
            a.userData.rest = a.quaternion.clone(), a.name === "tripo1_Left_Limb_0" ? n.legA = a : a.name === "tripo1_Right_Limb_0" ? n.legB = a : a.name === "tripo1_Left_Limb_1" ? n.kneeA = a : a.name === "tripo1_Right_Limb_1" ? n.kneeB = a : a.name === "tripoHead_0" ? n.head = a : a.name === "tripoSpine_0" ? n.spine0 = a : a.name === "tripoSpine_1" ? n.spine1 = a : a.name === "tripo0_Left_Limb_0" ? n.armA = a : a.name === "tripo0_Right_Limb_0" ? n.armB = a : a.name === "tripo1_Left_Limb_3" ? n.toeA = a : a.name === "tripo1_Right_Limb_3" && (n.toeB = a);
            return;
          }
          if (a.isMesh && (a.castShadow = true, a.receiveShadow = true, a.geometry && a.geometry.index)) {
            var g = a.geometry.toNonIndexed();
            g.computeVertexNormals(), a.geometry = g;
          }
        });
        var R = [];
        i.traverse(function(a) {
          a.isMesh && R.push({
            mesh: a,
            orig: a.material
          });
        });
        try {
          r.materials.updateObject(i);
        } catch (a) {
          console.warn("[hero] material", a);
        }
        R.forEach(function(a) {
          a.folio = a.mesh.material;
        });
        function x(a) {
          R.forEach(function(g) {
            var b = a ? g.orig : g.folio;
            b && (g.mesh.material = b, a && (b.color && b.color.setScalar(0.55), b.emissive && (b.emissive.setRGB(0.05, 0.03, 0.06), b.emissiveIntensity = 1), b.needsUpdate = true));
          });
        }
        var h = r.view && r.view.spherical ? r.view.spherical.theta : 0, C = Math.sin(h), N = Math.cos(h), F = Math.cos(h), P = -Math.sin(h), j = H.x + C * 2.15, L = H.z + N * 2.15, M = Math.atan2(-N, C);
        i.scale.setScalar(0.01), i.position.set(j, f - 0.5 * l, L), i.rotation.y = M, window.__heroFolio = i;
        var K = setInterval(function() {
          var a = false;
          try {
            a = r.world.intro.label && r.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!a) return;
          clearInterval(K), r.scene.add(i);
          var g = 0, b = setInterval(function() {
            g += 1;
            var p = Math.min(1, g / 12);
            i.scale.setScalar(l * (0.2 + 0.8 * p)), p >= 1 && clearInterval(b);
          }, 33), V = {
            x: i.position.clone().set(1, 0, 0),
            y: i.position.clone().set(0, 1, 0),
            z: i.position.clone().set(0, 0, 1)
          }, c = i.position.clone();
          function d(p, I, B) {
            m(p, V[I], B);
          }
          function m(p, I, B) {
            if (p) {
              var O = p.quaternion.clone().setFromAxisAngle(I, B * Math.PI / 180), z = p.parent.quaternion.clone();
              p.parent.getWorldQuaternion(z);
              var q = z.clone().invert().multiply(O).multiply(z).multiply(p.userData.rest);
              p.quaternion.copy(q);
            }
          }
          var v = null, D = null, t = false, o = 0, w = 0;
          try {
            var Y = r.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: j,
                y: f + 0.5 * l,
                z: L
              },
              colliders: [
                {
                  shape: "cylinder",
                  parameters: [
                    l * 0.5,
                    l * 0.17
                  ]
                }
              ],
              mass: 55,
              friction: 0.9,
              restitution: 0.2,
              category: "object",
              linearDamping: 0.2,
              angularDamping: 0.3
            });
            v = Y.body, D = Y.colliders[0], D.setSensor(true);
          } catch (p) {
            console.warn("[hero] physics", p);
          }
          function y() {
            if (t = false, x(false), i.rotation.set(0, M, 0), i.position.set(j, f - 0.5 * l, L), i.scale.setScalar(l), E = 0, w = performance.now() + 1800, !!v) try {
              D.setSensor(true), v.setBodyType(r.RAPIER.RigidBodyType.KinematicPositionBased, true), v.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setTranslation({
                x: j,
                y: f + 0.5 * l,
                z: L
              }, true);
            } catch (p) {
              console.warn("[hero] reset", p);
            }
          }
          window.__heroLaunch = Q, window.__heroReset = y;
          function Q(p, I, B) {
            t = true, x(true), o = performance.now();
            var O = Math.sqrt(p * p + I * I) || 1;
            p /= O, I /= O;
            var z = Math.min(15, Math.max(6, B * 1.5));
            try {
              D.setSensor(false), v.setBodyType(r.RAPIER.RigidBodyType.Dynamic, true), v.wakeUp(), v.setLinearDamping(0.5), v.setAngularDamping(0.9), v.setLinvel({
                x: p * z,
                y: Math.min(4.5, z * 0.32),
                z: I * z
              }, true), v.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (ie) {
              console.warn("[hero] launch", ie);
            }
            var q = i.rotation.y, G = Math.sin(q), T = Math.cos(q), S = i.position.clone().set(G, 0, T);
            m(n.legA, S, 24), m(n.legB, S, -16), m(n.kneeA, S, -26), m(n.kneeB, S, 20), m(n.armA, S, -60), m(n.armB, S, 60);
          }
          var u = performance.now(), _ = u, E = 0, U = 0;
          r.ticker.events.on("tick", function() {
            var p = performance.now(), I = Math.min(0.05, (p - _) / 1e3);
            _ = p;
            var B = (p - u) / 1e3;
            if (t && v) {
              var O = v.translation(), z = v.rotation(), q = i.position.clone().set(0, -l, 0).applyQuaternion(z);
              i.position.set(O.x + q.x, O.y + q.y, O.z + q.z), i.quaternion.set(z.x, z.y, z.z, z.w), (O.y < -5 || p - o > 5e3) && y();
              return;
            }
            var q = Math.sin(B * 0.5) * 0.75, G = Math.cos(B * 0.5) * 0.75 * 0.5, T = Math.abs(G), S = Math.min(1, T / 0.25);
            E += (0.7 + T * 4) * I, i.position.x = j + F * q, i.position.z = L + P * q;
            for (var ie = Math.atan2(-(P * (G >= 0 ? 1 : -1)), F * (G >= 0 ? 1 : -1)), ee = ie - M; ee > Math.PI; ) ee -= Math.PI * 2;
            for (; ee < -Math.PI; ) ee += Math.PI * 2;
            M += ee * (0.08 + (1 - S) * 0.05), i.rotation.y = M;
            var J = Math.sin(E), ce = Math.cos(M), ue = -Math.sin(M), pe = Math.sin(M), de = Math.cos(M), Z = c.clone().set(pe, 0, de), se = c.clone().set(ce, 0, ue);
            if (m(n.legA, Z, 26 * J * S), m(n.legB, Z, -26 * J * S), m(n.kneeA, Z, -32 * Math.max(0, -J) * S), m(n.kneeB, Z, 32 * Math.max(0, J) * S), m(n.armA, Z, -18 * J * S), m(n.armB, Z, 18 * J * S), d(n.spine1, "y", 4 * J * S), m(n.spine0, se, 2 * Math.cos(E) * S), d(n.head, "y", -2.5 * J * S), m(n.head, se, -1 * Math.cos(E) * S), U++, U % 4 === 0) {
              i.updateMatrixWorld(true);
              var re = 1 / 0;
              i.traverse(function($) {
                if ($.isSkinnedMesh && $.computeBoundingBox && ($.computeBoundingBox(), $.boundingBox)) {
                  var oe = $.boundingBox.min.clone();
                  $.localToWorld(oe), oe.y < re && (re = oe.y);
                }
              }), isFinite(re) && (i.position.y += (f - re) * 0.5);
            }
            if (v) {
              try {
                v.setNextKinematicTranslation({
                  x: i.position.x,
                  y: i.position.y + l,
                  z: i.position.z
                }), v.setNextKinematicRotation({
                  x: i.quaternion.x,
                  y: i.quaternion.y,
                  z: i.quaternion.z,
                  w: i.quaternion.w
                });
              } catch {
              }
              var te = r.physicalVehicle;
              if (te && te.position && p > w) {
                var ne = i.position.x - te.position.x, ae = i.position.z - te.position.z, fe = Math.sqrt(ne * ne + ae * ae), le = te.xzSpeed || 0;
                le > 1.2 && fe < 2.3 && Q(ne, ae, le);
              }
            }
          }, 9), console.log("[hero] folio hero loaded");
        }, 300);
      }).catch(function(e) {
        console.warn("[hero] load failed", e);
      });
    }
  })();
  (function() {
    var A = 0, k = setInterval(function() {
      A++;
      var r = window.game;
      if (r && r.resourcesLoader && r.scene && r.world && r.world.intro && r.world.benches && r.materials && r.ticker) {
        clearInterval(k);
        try {
          W(r);
        } catch (l) {
          console.warn("[oscar] init failed", l);
        }
      }
      A > 240 && clearInterval(k);
    }, 250);
    function W(r) {
      var l = 0.8, f = 0.276, s = -0.11, H = 0.6, e = -0.02;
      r.resourcesLoader.load([
        [
          "oscarSleep",
          "cat/oscar-sleep.glb?v=fb6d9a0c6b9b",
          "gltf"
        ]
      ]).then(function(i) {
        var n = i.oscarSleep.scene;
        n.traverse(function(y) {
          if (y.isMesh && (y.castShadow = true, y.receiveShadow = true, y.geometry && y.geometry.index)) {
            var Q = y.geometry.toNonIndexed();
            Q.computeVertexNormals(), y.geometry = Q;
          }
        });
        try {
          r.materials.updateObject(n);
        } catch (y) {
          console.warn("[oscar] material", y);
        }
        n.traverse(function(y) {
          !y.isMesh || !y.material || !y.material.emissive || (y.material.emissive.setHex(1708554), y.material.needsUpdate = true);
        });
        for (var R = r.world.intro.center, x = r.world.benches.objects, h = null, C = 1 / 0, N = 0; N < x.length; N++) {
          var F = x[N];
          if (!(!F || !F.visual || !F.visual.object3D)) {
            var P = F.visual.object3D, j = P.position.x - R.x, L = P.position.z - R.z, M = j * j + L * L;
            M < C && (C = M, h = P);
          }
        }
        if (!h) {
          console.warn("[oscar] bench not found");
          return;
        }
        h.updateMatrixWorld(true);
        var K = h.scale ? h.scale.x : 1, a = h.scale ? h.scale.y : 1, g = h.scale ? h.scale.z : 1, b = h.position.y + s * a, V = h.position.clone().set(H * K, 0, e * g);
        V.applyQuaternion(h.quaternion);
        var c = h.position.x + V.x, d = h.position.z + V.z;
        n.scale.setScalar(l), n.position.set(c, b + f * l, d), n.quaternion.copy(h.quaternion);
        var m = null, v = i.oscarSleep.animations && i.oscarSleep.animations[0] || null;
        if (v) {
          m = new ve(n);
          var D = m.clipAction(v);
          D.setLoop(he, 1 / 0), D.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var t = new X(16757350, 16, 3.6, 2);
        t.position.set(c - 0.55, b + 1.25, d + 0.95), r.scene.add(t);
        var o = new X(9399295, 10, 3.2, 2);
        o.position.set(c + 0.95, b + 1, d - 0.95), r.scene.add(o);
        var w = new X(16764826, 4, 2, 2);
        w.position.set(c + 0.15, b + 0.5, d + 1.15), r.scene.add(w), window.__oscarLights = {
          key: t,
          rim: o,
          fill: w
        };
        var Y = setInterval(function() {
          var y = false;
          try {
            y = r.world.intro.label && r.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (y) {
            clearInterval(Y), r.scene.add(n), window.__oscarFolio = n;
            var Q = n.position.y, u = {
              mixer: m,
              action: D || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = u, r.ticker.events.on("tick", function() {
              if (u.ticks++, u.delta = r.ticker.delta, m) m.update(r.ticker.delta);
              else {
                var _ = r.ticker.elapsed || 0, E = 1 + 0.013 * Math.sin(_ / 4 * Math.PI * 2);
                n.scale.setScalar(l * E), n.position.y = Q + 4e-3 * E;
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var A = 1.6, k = -0.11, W = 0.3, r = 0, l = setInterval(function() {
      r++;
      var s = window.game;
      if (s && s.resourcesLoader && s.scene && s.world && s.world.intro && s.world.benches && s.materials && s.ticker && s.respawns && s.physics) {
        clearInterval(l);
        try {
          f(s);
        } catch (H) {
          console.warn("[lady] init failed", H);
        }
      }
      r > 240 && clearInterval(l);
    }, 250);
    function f(s) {
      s.resourcesLoader.load([
        [
          "seasideLady",
          "lady/seaside-lady.glb?v=27c355ac0a59",
          "gltf"
        ]
      ]).then(function(H) {
        var e = H.seasideLady.scene;
        e.traverse(function(u) {
          if (u.isMesh && (u.castShadow = true, u.receiveShadow = true, u.geometry && u.geometry.index)) {
            var _ = u.geometry.toNonIndexed();
            _.computeVertexNormals(), u.geometry = _;
          }
        });
        try {
          s.materials.updateObject(e);
        } catch (u) {
          console.warn("[lady] material", u);
        }
        e.traverse(function(u) {
          !u.isMesh || !u.material || !u.material.emissive || (u.material.emissive.setHex(1840400), u.material.emissiveIntensity = 1, u.material.needsUpdate = true);
        });
        for (var i = s.respawns.getDefault().position, n = [], R = s.world.benches.objects, x = 0; x < R.length; x++) {
          var h = R[x];
          if (!(!h || !h.visual || !h.visual.object3D)) {
            var C = h.visual.object3D, N = C.position.x - i.x, F = C.position.z - i.z;
            n.push({
              obj: C,
              d: N * N + F * F
            });
          }
        }
        n.sort(function(u, _) {
          return u.d - _.d;
        });
        var P = n.length > 1 ? n[1].obj : n[0].obj;
        if (!P) {
          console.warn("[lady] bench not found");
          return;
        }
        P.updateMatrixWorld(true);
        var j = P.scale, L = P.quaternion, M = P.position, K = M.y + k * j.y, a = new we(0, 0, W * j.z).applyQuaternion(L);
        e.scale.setScalar(A), e.position.set(M.x + a.x, K + 0.5 * A + 5e-3, M.z + a.z), e.quaternion.copy(L);
        var g = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, b = new X(16761994, 46, 7, 2);
        b.position.set(e.position.x + 1.4, K + 2.4, e.position.z + 1.8), s.scene.add(b);
        var V = new X(9399295, 26, 6, 2);
        V.position.set(e.position.x - 1.8, K + 2.1, e.position.z - 1.4), s.scene.add(V);
        var c = new X(16767408, 12, 4, 2);
        c.position.set(e.position.x + 0.1, K + 1.5, e.position.z + 2.4), s.scene.add(c);
        var d = null, m = null, v = false, D = 0, t = 0, o = 2.4;
        try {
          var w = s.physics.getPhysical({
            type: "kinematicPositionBased",
            position: {
              x: e.position.x,
              y: e.position.y,
              z: e.position.z
            },
            colliders: [
              {
                shape: "cylinder",
                parameters: [
                  0.5 * A,
                  0.34 * A
                ]
              }
            ],
            mass: 55,
            friction: 0.9,
            restitution: 0.25,
            category: "object",
            linearDamping: 0.25,
            angularDamping: 0.4
          });
          d = w.body, m = w.colliders[0], m.setSensor(true);
          try {
            d.setRotation({
              x: L.x,
              y: L.y,
              z: L.z,
              w: L.w
            }, true);
          } catch {
          }
        } catch (u) {
          console.warn("[lady] physics", u);
        }
        function Y() {
          if (v = false, e.position.copy(g.position), e.quaternion.copy(g.quaternion), e.scale.setScalar(A), t = performance.now() + 1600, !!d) try {
            m.setSensor(true), d.setBodyType(s.RAPIER.RigidBodyType.KinematicPositionBased, true), d.setLinvel({
              x: 0,
              y: 0,
              z: 0
            }, true), d.setAngvel({
              x: 0,
              y: 0,
              z: 0
            }, true), d.setTranslation({
              x: g.position.x,
              y: g.position.y,
              z: g.position.z
            }, true), d.setRotation({
              x: g.quaternion.x,
              y: g.quaternion.y,
              z: g.quaternion.z,
              w: g.quaternion.w
            }, true);
          } catch (u) {
            console.warn("[lady] reset", u);
          }
        }
        function y(u, _, E) {
          if (!v) {
            v = true, D = performance.now();
            var U = Math.sqrt(u * u + _ * _) || 1;
            u /= U, _ /= U;
            var p = Math.min(16, Math.max(6, E * 1.6));
            if (e.scale.setScalar(A), !d) {
              var I = e, B = I.position.x, O = I.position.z, z = I.position.y, q = performance.now(), G = setInterval(function() {
                var T = (performance.now() - q) / 1e3;
                I.position.set(B + u * p * T, z + 3.2 * T - 9.8 * T * T * 0.5, O + _ * p * T), I.rotation.x += T * 3, T > 2.4 && (clearInterval(G), Y());
              }, 16);
              return;
            }
            try {
              m.setSensor(false), d.setBodyType(s.RAPIER.RigidBodyType.Dynamic, true), d.wakeUp(), d.setLinearDamping(0.35), d.setAngularDamping(0.6), d.setLinvel({
                x: u * p,
                y: Math.min(5, 2 + p * 0.28),
                z: _ * p
              }, true), d.setAngvel({
                x: (Math.random() - 0.5) * 9,
                y: (Math.random() - 0.5) * 9,
                z: (Math.random() - 0.5) * 9
              }, true);
            } catch (T) {
              console.warn("[lady] launch", T);
            }
          }
        }
        window.__ladyLaunch = y, window.__ladyReset = Y;
        var Q = setInterval(function() {
          var u = false;
          try {
            u = s.world.intro.label && s.world.intro.label.scale.x > 0.6;
          } catch {
          }
          u && (clearInterval(Q), s.scene.add(e), window.__ladyFolio = e, window.__ladyBench = P, s.ticker.events.on("tick", function() {
            var _ = performance.now();
            if (d && v) {
              var E = d.translation(), U = d.rotation();
              e.position.set(E.x, E.y, E.z), e.quaternion.set(U.x, U.y, U.z, U.w), (E.y < -5 || _ - D > 6e3) && Y();
              return;
            }
            var p = s.ticker.elapsed || 0, I = 1 + 35e-4 * Math.sin(p / 5 * Math.PI * 2);
            if (e.scale.setScalar(A * I), d) {
              try {
                d.setNextKinematicTranslation({
                  x: e.position.x,
                  y: e.position.y,
                  z: e.position.z
                }), d.setNextKinematicRotation({
                  x: e.quaternion.x,
                  y: e.quaternion.y,
                  z: e.quaternion.z,
                  w: e.quaternion.w
                });
              } catch {
              }
              var B = s.physicalVehicle;
              if (B && B.position && _ > t) {
                var O = e.position.x - B.position.x, z = e.position.z - B.position.z, q = Math.sqrt(O * O + z * z), G = B.xzSpeed || 0;
                G > 1 && q < o && y(O, z, G);
              }
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
