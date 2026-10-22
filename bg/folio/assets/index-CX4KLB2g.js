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
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) t(l);
    new MutationObserver((l) => {
      for (const f of l) if (f.type === "childList") for (const s of f.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function W(l) {
      const f = {};
      return l.integrity && (f.integrity = l.integrity), l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? f.credentials = "include" : l.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function t(l) {
      if (l.ep) return;
      l.ep = true;
      const f = W(l);
      fetch(l.href, f);
    }
  })();
  (function() {
    var A = new URLSearchParams(location.search), k = A.get("bg") === "1", W = window.parent && window.parent !== window, t = k ? "bg" : "game";
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
        t === "bg" && (i.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && i.cancelable && i.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), s(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, i = false, n = 0, R = 0, g = null, h = 0.17, N = 0.66, V = 2.2;
      function F() {
        g = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function P() {
        g || F(), e.view.spherical.phi = Math.min(Math.PI * 0.49, g.phi + h);
        var r = window.innerWidth <= 800, o = r ? 0.45 : N, S = r ? 1.5 : V;
        e.view.zoom.baseRatio = o, e.view.zoom.smoothedRatio = o, e.view.focusPoint.position.y = g.focusY + S;
      }
      function C() {
        g && (e.view.spherical.phi = g.phi, e.view.zoom.baseRatio = g.baseRatio, e.view.zoom.smoothedRatio = g.smoothedRatio, e.view.focusPoint.position.y = g.focusY, g = null);
      }
      function _(r) {
        if (i !== r) {
          i = r;
          var o = e.rendering && e.rendering.renderer;
          if (!(!o || !o.setAnimationLoop)) if (r) {
            n = performance.now();
            try {
              o.setAnimationLoop(null);
            } catch {
            }
          } else {
            n || (n = performance.now()), R += performance.now() - n, n = 0;
            try {
              o.setAnimationLoop(function(S) {
                e.ticker.update(S - R);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return i;
      }, e.ticker.events.on("tick", function() {
        t === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, P(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function L() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function K() {
        if (t === "game") return;
        if (C(), _(false), t = "game", window.__hexoBg = false, j(), document.documentElement.classList.remove("hexo-bg"), !L()) {
          f("town-game-entered");
          return;
        }
        var r = 0;
        function o() {
          if (r++, e.reveal.step >= 1 || !L()) {
            f("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || r >= 40 ? f("town-game-entered") : o();
          }, 400);
        }
        o();
      }
      function a() {
        t !== "bg" && (j(), F(), t = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), f("town-game-left"));
      }
      window.addEventListener("message", function(r) {
        if (!(r.source !== window.parent && r.source !== window)) {
          var o = r.data;
          !o || typeof o != "object" || (o.type === "town-bg-pause" ? _(true) : o.type === "town-bg-resume" ? _(false) : o.type === "town-bg-enter" ? K() : o.type === "town-bg-leave" && a());
        }
      });
      function y() {
        try {
          var r = window.game;
          if (!r) return false;
          if (r.menu && (r.menu.state === 1 || r.menu.state === 2) || r.modals && (r.modals.state === 1 || r.modals.state === 2)) return true;
          var o = r.world || {};
          if (o.whispers && o.whispers.menu && o.whispers.menu.inputFlag && o.whispers.menu.inputFlag.isOpen || o.areas && o.areas.circuit && o.areas.circuit.menu && o.areas.circuit.menu.inputFlag && o.areas.circuit.menu.inputFlag.isOpen) return true;
        } catch {
        }
        return false;
      }
      function x(r) {
        try {
          if (!r || !r.element) return;
          r.state === 4 && r.element.dispatchEvent(new Event("transitionend"));
        } catch {
        }
      }
      function j() {
        try {
          var r = window.game;
          if (!r) return;
          r.menu && ((r.menu.state === 1 || r.menu.state === 2) && r.menu.close(), x(r.menu)), r.modals && ((r.modals.state === 1 || r.modals.state === 2) && r.modals.close(), x(r.modals));
        } catch {
        }
      }
      window.addEventListener("keydown", function(r) {
        r.key !== "Escape" && r.code !== "Escape" || t === "game" && (y() || (r.preventDefault(), r.stopImmediatePropagation(), f("town-game-exit")));
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
          mode: t,
          flying: false,
          locked: t === "bg",
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
      function d(r) {
        e.viewport.pixelRatio = r, e.rendering.renderer.setPixelRatio(r), e.rendering.renderer.setSize(e.viewport.width, e.viewport.height);
      }
      function m(r) {
        var o = r === 1 ? 1.5 : r === 2 ? 1.25 : c.base;
        return Math.min(c.base, o);
      }
      function v() {
        return t === "game" && !i && e.reveal && e.reveal.step >= 2;
      }
      function D(r) {
        if (v() && (c.since || (c.since = r), c.frames++), r - c.t >= 3e3) {
          var o = c.frames * 1e3 / (r - c.t);
          c.frames = 0, c.t = r, v() && c.base > 1.25 && c.since && r - c.since >= 8e3 && (o < 40 ? (c.low++, c.good = 0) : o > 55 ? (c.good++, c.low = 0) : (c.low = 0, c.good = 0), c.low >= 2 && c.stage < 2 ? (c.stage++, d(m(c.stage)), c.low = 0) : c.good >= 4 && c.stage > 0 && (c.stage--, d(m(c.stage)), c.good = 0));
        }
        window.requestAnimationFrame(D);
      }
      window.requestAnimationFrame(D), f("town-bg-ready", {
        mode: t,
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
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.respawns && t.world && t.world.intro && t.materials) {
        clearInterval(k);
        try {
          W(t);
        } catch (l) {
          console.warn("[hero] init failed", l);
        }
      }
      A > 240 && clearInterval(k);
    }, 250);
    function W(t) {
      var l = 3.2, f = -0.03;
      try {
        var s = 1 / 0;
        t.scene.updateMatrixWorld(true), t.scene.traverse(function(e) {
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
      var H = t.respawns.getDefault().position;
      t.resourcesLoader.load([
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
            var y = a.geometry.toNonIndexed();
            y.computeVertexNormals(), a.geometry = y;
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
          t.materials.updateObject(i);
        } catch (a) {
          console.warn("[hero] material", a);
        }
        R.forEach(function(a) {
          a.folio = a.mesh.material;
        });
        function g(a) {
          R.forEach(function(y) {
            var x = a ? y.orig : y.folio;
            x && (y.mesh.material = x, a && (x.color && x.color.setScalar(0.55), x.emissive && (x.emissive.setRGB(0.05, 0.03, 0.06), x.emissiveIntensity = 1), x.needsUpdate = true));
          });
        }
        var h = t.view && t.view.spherical ? t.view.spherical.theta : 0, N = Math.sin(h), V = Math.cos(h), F = Math.cos(h), P = -Math.sin(h), C = H.x + N * 2.15, _ = H.z + V * 2.15, L = Math.atan2(-V, N);
        i.scale.setScalar(0.01), i.position.set(C, f - 0.5 * l, _), i.rotation.y = L, window.__heroFolio = i;
        var K = setInterval(function() {
          var a = false;
          try {
            a = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!a) return;
          clearInterval(K), t.scene.add(i);
          var y = 0, x = setInterval(function() {
            y += 1;
            var p = Math.min(1, y / 12);
            i.scale.setScalar(l * (0.2 + 0.8 * p)), p >= 1 && clearInterval(x);
          }, 33), j = {
            x: i.position.clone().set(1, 0, 0),
            y: i.position.clone().set(0, 1, 0),
            z: i.position.clone().set(0, 0, 1)
          }, c = i.position.clone();
          function d(p, z, B) {
            m(p, j[z], B);
          }
          function m(p, z, B) {
            if (p) {
              var O = p.quaternion.clone().setFromAxisAngle(z, B * Math.PI / 180), M = p.parent.quaternion.clone();
              p.parent.getWorldQuaternion(M);
              var q = M.clone().invert().multiply(O).multiply(M).multiply(p.userData.rest);
              p.quaternion.copy(q);
            }
          }
          var v = null, D = null, r = false, o = 0, S = 0;
          try {
            var Q = t.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: C,
                y: f + 0.5 * l,
                z: _
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
            v = Q.body, D = Q.colliders[0], D.setSensor(true);
          } catch (p) {
            console.warn("[hero] physics", p);
          }
          function w() {
            if (r = false, g(false), i.rotation.set(0, L, 0), i.position.set(C, f - 0.5 * l, _), i.scale.setScalar(l), E = 0, S = performance.now() + 1800, !!v) try {
              D.setSensor(true), v.setBodyType(t.RAPIER.RigidBodyType.KinematicPositionBased, true), v.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setTranslation({
                x: C,
                y: f + 0.5 * l,
                z: _
              }, true);
            } catch (p) {
              console.warn("[hero] reset", p);
            }
          }
          window.__heroLaunch = Y, window.__heroReset = w;
          function Y(p, z, B) {
            r = true, g(true), o = performance.now();
            var O = Math.sqrt(p * p + z * z) || 1;
            p /= O, z /= O;
            var M = Math.min(15, Math.max(6, B * 1.5));
            try {
              D.setSensor(false), v.setBodyType(t.RAPIER.RigidBodyType.Dynamic, true), v.wakeUp(), v.setLinearDamping(0.5), v.setAngularDamping(0.9), v.setLinvel({
                x: p * M,
                y: Math.min(4.5, M * 0.32),
                z: z * M
              }, true), v.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (ie) {
              console.warn("[hero] launch", ie);
            }
            var q = i.rotation.y, G = Math.sin(q), T = Math.cos(q), I = i.position.clone().set(G, 0, T);
            m(n.legA, I, 24), m(n.legB, I, -16), m(n.kneeA, I, -26), m(n.kneeB, I, 20), m(n.armA, I, -60), m(n.armB, I, 60);
          }
          var u = performance.now(), b = u, E = 0, U = 0;
          t.ticker.events.on("tick", function() {
            var p = performance.now(), z = Math.min(0.05, (p - b) / 1e3);
            b = p;
            var B = (p - u) / 1e3;
            if (r && v) {
              var O = v.translation(), M = v.rotation(), q = i.position.clone().set(0, -l, 0).applyQuaternion(M);
              i.position.set(O.x + q.x, O.y + q.y, O.z + q.z), i.quaternion.set(M.x, M.y, M.z, M.w), (O.y < -5 || p - o > 5e3) && w();
              return;
            }
            var q = Math.sin(B * 0.5) * 0.75, G = Math.cos(B * 0.5) * 0.75 * 0.5, T = Math.abs(G), I = Math.min(1, T / 0.25);
            E += (0.7 + T * 4) * z, i.position.x = C + F * q, i.position.z = _ + P * q;
            for (var ie = Math.atan2(-(P * (G >= 0 ? 1 : -1)), F * (G >= 0 ? 1 : -1)), ee = ie - L; ee > Math.PI; ) ee -= Math.PI * 2;
            for (; ee < -Math.PI; ) ee += Math.PI * 2;
            L += ee * (0.08 + (1 - I) * 0.05), i.rotation.y = L;
            var J = Math.sin(E), ce = Math.cos(L), ue = -Math.sin(L), pe = Math.sin(L), de = Math.cos(L), Z = c.clone().set(pe, 0, de), se = c.clone().set(ce, 0, ue);
            if (m(n.legA, Z, 26 * J * I), m(n.legB, Z, -26 * J * I), m(n.kneeA, Z, -32 * Math.max(0, -J) * I), m(n.kneeB, Z, 32 * Math.max(0, J) * I), m(n.armA, Z, -18 * J * I), m(n.armB, Z, 18 * J * I), d(n.spine1, "y", 4 * J * I), m(n.spine0, se, 2 * Math.cos(E) * I), d(n.head, "y", -2.5 * J * I), m(n.head, se, -1 * Math.cos(E) * I), U++, U % 4 === 0) {
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
              var te = t.physicalVehicle;
              if (te && te.position && p > S) {
                var ne = i.position.x - te.position.x, ae = i.position.z - te.position.z, fe = Math.sqrt(ne * ne + ae * ae), le = te.xzSpeed || 0;
                le > 1.2 && fe < 2.3 && Y(ne, ae, le);
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
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.world && t.world.intro && t.world.benches && t.materials && t.ticker) {
        clearInterval(k);
        try {
          W(t);
        } catch (l) {
          console.warn("[oscar] init failed", l);
        }
      }
      A > 240 && clearInterval(k);
    }, 250);
    function W(t) {
      var l = 0.8, f = 0.276, s = -0.11, H = 0.6, e = -0.02;
      t.resourcesLoader.load([
        [
          "oscarSleep",
          "cat/oscar-sleep.glb?v=fb6d9a0c6b9b",
          "gltf"
        ]
      ]).then(function(i) {
        var n = i.oscarSleep.scene;
        n.traverse(function(w) {
          if (w.isMesh && (w.castShadow = true, w.receiveShadow = true, w.geometry && w.geometry.index)) {
            var Y = w.geometry.toNonIndexed();
            Y.computeVertexNormals(), w.geometry = Y;
          }
        });
        try {
          t.materials.updateObject(n);
        } catch (w) {
          console.warn("[oscar] material", w);
        }
        n.traverse(function(w) {
          !w.isMesh || !w.material || !w.material.emissive || (w.material.emissive.setHex(1708554), w.material.needsUpdate = true);
        });
        for (var R = t.world.intro.center, g = t.world.benches.objects, h = null, N = 1 / 0, V = 0; V < g.length; V++) {
          var F = g[V];
          if (!(!F || !F.visual || !F.visual.object3D)) {
            var P = F.visual.object3D, C = P.position.x - R.x, _ = P.position.z - R.z, L = C * C + _ * _;
            L < N && (N = L, h = P);
          }
        }
        if (!h) {
          console.warn("[oscar] bench not found");
          return;
        }
        h.updateMatrixWorld(true);
        var K = h.scale ? h.scale.x : 1, a = h.scale ? h.scale.y : 1, y = h.scale ? h.scale.z : 1, x = h.position.y + s * a, j = h.position.clone().set(H * K, 0, e * y);
        j.applyQuaternion(h.quaternion);
        var c = h.position.x + j.x, d = h.position.z + j.z;
        n.scale.setScalar(l), n.position.set(c, x + f * l, d), n.quaternion.copy(h.quaternion);
        var m = null, v = i.oscarSleep.animations && i.oscarSleep.animations[0] || null;
        if (v) {
          m = new ve(n);
          var D = m.clipAction(v);
          D.setLoop(he, 1 / 0), D.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var r = new X(16757350, 16, 3.6, 2);
        r.position.set(c - 0.55, x + 1.25, d + 0.95), t.scene.add(r);
        var o = new X(9399295, 10, 3.2, 2);
        o.position.set(c + 0.95, x + 1, d - 0.95), t.scene.add(o);
        var S = new X(16764826, 4, 2, 2);
        S.position.set(c + 0.15, x + 0.5, d + 1.15), t.scene.add(S), window.__oscarLights = {
          key: r,
          rim: o,
          fill: S
        };
        var Q = setInterval(function() {
          var w = false;
          try {
            w = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (w) {
            clearInterval(Q), t.scene.add(n), window.__oscarFolio = n;
            var Y = n.position.y, u = {
              mixer: m,
              action: D || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = u, t.ticker.events.on("tick", function() {
              if (u.ticks++, u.delta = t.ticker.delta, m) m.update(t.ticker.delta);
              else {
                var b = t.ticker.elapsed || 0, E = 1 + 0.013 * Math.sin(b / 4 * Math.PI * 2);
                n.scale.setScalar(l * E), n.position.y = Y + 4e-3 * E;
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var A = 1.6, k = -0.11, W = 0.3, t = 0, l = setInterval(function() {
      t++;
      var s = window.game;
      if (s && s.resourcesLoader && s.scene && s.world && s.world.intro && s.world.benches && s.materials && s.ticker && s.respawns && s.physics) {
        clearInterval(l);
        try {
          f(s);
        } catch (H) {
          console.warn("[lady] init failed", H);
        }
      }
      t > 240 && clearInterval(l);
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
            var b = u.geometry.toNonIndexed();
            b.computeVertexNormals(), u.geometry = b;
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
        for (var i = s.respawns.getDefault().position, n = [], R = s.world.benches.objects, g = 0; g < R.length; g++) {
          var h = R[g];
          if (!(!h || !h.visual || !h.visual.object3D)) {
            var N = h.visual.object3D, V = N.position.x - i.x, F = N.position.z - i.z;
            n.push({
              obj: N,
              d: V * V + F * F
            });
          }
        }
        n.sort(function(u, b) {
          return u.d - b.d;
        });
        var P = n.length > 1 ? n[1].obj : n[0].obj;
        if (!P) {
          console.warn("[lady] bench not found");
          return;
        }
        P.updateMatrixWorld(true);
        var C = P.scale, _ = P.quaternion, L = P.position, K = L.y + k * C.y, a = new we(0, 0, W * C.z).applyQuaternion(_);
        e.scale.setScalar(A), e.position.set(L.x + a.x, K + 0.5 * A + 5e-3, L.z + a.z), e.quaternion.copy(_);
        var y = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, x = new X(16761994, 46, 7, 2);
        x.position.set(e.position.x + 1.4, K + 2.4, e.position.z + 1.8), s.scene.add(x);
        var j = new X(9399295, 26, 6, 2);
        j.position.set(e.position.x - 1.8, K + 2.1, e.position.z - 1.4), s.scene.add(j);
        var c = new X(16767408, 12, 4, 2);
        c.position.set(e.position.x + 0.1, K + 1.5, e.position.z + 2.4), s.scene.add(c);
        var d = null, m = null, v = false, D = 0, r = 0, o = 2.4;
        try {
          var S = s.physics.getPhysical({
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
          d = S.body, m = S.colliders[0], m.setSensor(true);
          try {
            d.setRotation({
              x: _.x,
              y: _.y,
              z: _.z,
              w: _.w
            }, true);
          } catch {
          }
        } catch (u) {
          console.warn("[lady] physics", u);
        }
        function Q() {
          if (v = false, e.position.copy(y.position), e.quaternion.copy(y.quaternion), e.scale.setScalar(A), r = performance.now() + 1600, !!d) try {
            m.setSensor(true), d.setBodyType(s.RAPIER.RigidBodyType.KinematicPositionBased, true), d.setLinvel({
              x: 0,
              y: 0,
              z: 0
            }, true), d.setAngvel({
              x: 0,
              y: 0,
              z: 0
            }, true), d.setTranslation({
              x: y.position.x,
              y: y.position.y,
              z: y.position.z
            }, true), d.setRotation({
              x: y.quaternion.x,
              y: y.quaternion.y,
              z: y.quaternion.z,
              w: y.quaternion.w
            }, true);
          } catch (u) {
            console.warn("[lady] reset", u);
          }
        }
        function w(u, b, E) {
          if (!v) {
            v = true, D = performance.now();
            var U = Math.sqrt(u * u + b * b) || 1;
            u /= U, b /= U;
            var p = Math.min(16, Math.max(6, E * 1.6));
            if (e.scale.setScalar(A), !d) {
              var z = e, B = z.position.x, O = z.position.z, M = z.position.y, q = performance.now(), G = setInterval(function() {
                var T = (performance.now() - q) / 1e3;
                z.position.set(B + u * p * T, M + 3.2 * T - 9.8 * T * T * 0.5, O + b * p * T), z.rotation.x += T * 3, T > 2.4 && (clearInterval(G), Q());
              }, 16);
              return;
            }
            try {
              m.setSensor(false), d.setBodyType(s.RAPIER.RigidBodyType.Dynamic, true), d.wakeUp(), d.setLinearDamping(0.35), d.setAngularDamping(0.6), d.setLinvel({
                x: u * p,
                y: Math.min(5, 2 + p * 0.28),
                z: b * p
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
        window.__ladyLaunch = w, window.__ladyReset = Q;
        var Y = setInterval(function() {
          var u = false;
          try {
            u = s.world.intro.label && s.world.intro.label.scale.x > 0.6;
          } catch {
          }
          u && (clearInterval(Y), s.scene.add(e), window.__ladyFolio = e, window.__ladyBench = P, s.ticker.events.on("tick", function() {
            var b = performance.now();
            if (d && v) {
              var E = d.translation(), U = d.rotation();
              e.position.set(E.x, E.y, E.z), e.quaternion.set(U.x, U.y, U.z, U.w), (E.y < -5 || b - D > 6e3) && Q();
              return;
            }
            var p = s.ticker.elapsed || 0, z = 1 + 35e-4 * Math.sin(p / 5 * Math.PI * 2);
            if (e.scale.setScalar(A * z), d) {
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
              if (B && B.position && b > r) {
                var O = e.position.x - B.position.x, M = e.position.z - B.position.z, q = Math.sqrt(O * O + M * M), G = B.xzSpeed || 0;
                G > 1 && q < o && w(O, M, G);
              }
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
