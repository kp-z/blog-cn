const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DY3K4kyn.js","./three-BPWavq8k.js","./vendor-BcHL05hW.js","./areas-BQGDnaiF.js","./tweakpane-C39D8eO8.js","./gsap-BcKM28WW.js","./camera-controls-ByztGhiL.js"])))=>i.map(i=>d[i]);
import { _ as ye, __tla as __tla_0 } from "./areas-BQGDnaiF.js";
import { bJ as ge, bK as xe, bL as te, V as be } from "./three-BPWavq8k.js";
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
    const P = document.createElement("link").relList;
    if (P && P.supports && P.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) i(d);
    new MutationObserver((d) => {
      for (const h of d) if (h.type === "childList") for (const c of h.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function Y(d) {
      const h = {};
      return d.integrity && (h.integrity = d.integrity), d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? h.credentials = "include" : d.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
    }
    function i(d) {
      if (d.ep) return;
      d.ep = true;
      const h = Y(d);
      fetch(d.href, h);
    }
  })();
  (function() {
    var S = new URLSearchParams(location.search), P = S.get("bg") === "1", Y = window.parent && window.parent !== window, i = P ? "bg" : "game";
    window.__hexoBg = P, P && document.documentElement.classList.add("hexo-bg"), ye(() => import("./index-DY3K4kyn.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var d = document.createElement("style");
    d.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important;width:52px !important;height:34px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important;width:52px !important;height:34px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:rgba(10,18,24,.42) !important;border:1px solid rgba(255,255,255,.38) !important;border-right:2px solid rgba(255,255,255,.78) !important;border-radius:9px !important;box-sizing:border-box !important;width:100% !important;height:100% !important;-webkit-backdrop-filter:blur(8px) !important;backdrop-filter:blur(8px) !important}.menu-trigger .button-inner::after,.map-trigger .button-inner::after{display:none !important}.menu-trigger .icon-container,.map-trigger .icon-container{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}html:not(.is-mode-touch) .menu-trigger:hover .button-inner,html:not(.is-mode-touch) .map-trigger:hover .button-inner{transform:none !important;background:rgba(10,18,24,.6) !important}@media (min-width:801px){.menu .inner{width:min(860px,calc(100% - 160px)) !important;height:min(520px,calc(100% - 160px)) !important}.menu .contents .content .content-inner{width:100% !important}.map{width:760px !important;height:760px !important;max-width:68vmin !important;max-height:68vmin !important}}@media only screen and (max-width:800px) and (orientation:portrait){.menu .inner{height:calc((100% - 54px) * 2 / 3) !important}}", document.head.appendChild(d);
    function h(e, g) {
      if (Y) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, g || {}), "*");
      } catch {
      }
    }
    function c(e, g) {
      var l = setInterval(function() {
        var a = false;
        try {
          a = e();
        } catch {
        }
        a && (clearInterval(l), g());
      }, 200);
    }
    var Q = [
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
    Q.forEach(function(e) {
      window.addEventListener(e, function(g) {
        i === "bg" && (g.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && g.cancelable && g.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), c(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, g = false, l = 0, a = 0, o = null, m = 0.17, E = 0.66, x = 2.2;
      function A() {
        o = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function z() {
        o || A(), e.view.spherical.phi = Math.min(Math.PI * 0.49, o.phi + m);
        var t = window.innerWidth <= 800, n = t ? 0.45 : E, v = t ? 1.5 : x;
        e.view.zoom.baseRatio = n, e.view.zoom.smoothedRatio = n, e.view.focusPoint.position.y = o.focusY + v;
      }
      function T() {
        o && (e.view.spherical.phi = o.phi, e.view.zoom.baseRatio = o.baseRatio, e.view.zoom.smoothedRatio = o.smoothedRatio, e.view.focusPoint.position.y = o.focusY, o = null);
      }
      function _(t) {
        if (g !== t) {
          g = t;
          var n = e.rendering && e.rendering.renderer;
          if (!(!n || !n.setAnimationLoop)) if (t) {
            l = performance.now();
            try {
              n.setAnimationLoop(null);
            } catch {
            }
          } else {
            l || (l = performance.now()), a += performance.now() - l, l = 0;
            try {
              n.setAnimationLoop(function(v) {
                e.ticker.update(v - a);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return g;
      }, e.ticker.events.on("tick", function() {
        i === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, z(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function I() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function B() {
        if (i === "game") return;
        if (T(), _(false), i = "game", window.__hexoBg = false, r(), document.documentElement.classList.remove("hexo-bg"), !I()) {
          h("town-game-entered");
          return;
        }
        var t = 0;
        function n() {
          if (t++, e.reveal.step >= 1 || !I()) {
            h("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || t >= 40 ? h("town-game-entered") : n();
          }, 400);
        }
        n();
      }
      function R() {
        i !== "bg" && (r(), A(), i = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), h("town-game-left"));
      }
      window.addEventListener("message", function(t) {
        if (!(t.source !== window.parent && t.source !== window)) {
          var n = t.data;
          !n || typeof n != "object" || (n.type === "town-bg-pause" ? _(true) : n.type === "town-bg-resume" ? _(false) : n.type === "town-bg-enter" ? B() : n.type === "town-bg-leave" && R());
        }
      });
      function M() {
        try {
          var t = window.game;
          if (!t) return false;
          if (t.menu && (t.menu.state === 1 || t.menu.state === 2) || t.modals && (t.modals.state === 1 || t.modals.state === 2)) return true;
          var n = t.world || {};
          if (n.whispers && n.whispers.menu && n.whispers.menu.inputFlag && n.whispers.menu.inputFlag.isOpen || n.areas && n.areas.circuit && n.areas.circuit.menu && n.areas.circuit.menu.inputFlag && n.areas.circuit.menu.inputFlag.isOpen) return true;
          var v = n.areas || {};
          if (v.projects && (v.projects.state === 3 || v.projects.state === 4) || v.lab && (v.lab.state === 3 || v.lab.state === 4) || v.circuit && (v.circuit.state === 2 || v.circuit.state === 3)) return true;
        } catch {
        }
        return false;
      }
      function j(t) {
        try {
          if (!t || !t.element) return;
          t.state === 4 && t.element.dispatchEvent(new Event("transitionend"));
        } catch {
        }
      }
      function r() {
        try {
          var t = window.game;
          if (!t) return;
          t.menu && ((t.menu.state === 1 || t.menu.state === 2) && t.menu.close(), j(t.menu)), t.modals && ((t.modals.state === 1 || t.modals.state === 2) && t.modals.close(), j(t.modals));
          var n = t.world && t.world.areas || {};
          n.projects && (n.projects.state === 3 || n.projects.state === 4) && n.projects.close(), n.lab && (n.lab.state === 3 || n.lab.state === 4) && n.lab.close();
        } catch {
        }
      }
      window.addEventListener("keydown", function(t) {
        t.key !== "Escape" && t.code !== "Escape" || i === "game" && (M() || (t.preventDefault(), t.stopImmediatePropagation(), h("town-game-exit")));
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
          mode: i,
          flying: false,
          locked: i === "bg",
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
      var s = {
        frames: 0,
        t: performance.now(),
        stage: 0,
        good: 0,
        low: 0,
        since: 0,
        base: e.viewport.pixelRatio
      };
      function u(t) {
        e.viewport.pixelRatio = t, e.rendering.renderer.setPixelRatio(t), e.rendering.renderer.setSize(e.viewport.width, e.viewport.height);
      }
      function q(t) {
        var n = t === 1 ? 1.5 : t === 2 ? 1.25 : s.base;
        return Math.min(s.base, n);
      }
      function F() {
        return i === "game" && !g && e.reveal && e.reveal.step >= 2;
      }
      function C(t) {
        if (F() && (s.since || (s.since = t), s.frames++), t - s.t >= 3e3) {
          var n = s.frames * 1e3 / (t - s.t);
          s.frames = 0, s.t = t, F() && s.base > 1.25 && s.since && t - s.since >= 8e3 && (n < 40 ? (s.low++, s.good = 0) : n > 55 ? (s.good++, s.low = 0) : (s.low = 0, s.good = 0), s.low >= 2 && s.stage < 2 ? (s.stage++, u(q(s.stage)), s.low = 0) : s.good >= 4 && s.stage > 0 && (s.stage--, u(q(s.stage)), s.good = 0));
        }
        window.requestAnimationFrame(C);
      }
      window.requestAnimationFrame(C), h("town-bg-ready", {
        mode: i,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var S = 0, P = setInterval(function() {
      S++;
      var i = window.game;
      if (i && i.resourcesLoader && i.scene && i.respawns && i.world && i.world.intro && i.materials) {
        clearInterval(P);
        try {
          Y(i);
        } catch (d) {
          console.warn("[zkp] init failed", d);
        }
      }
      S > 240 && clearInterval(P);
    }, 250);
    function Y(i) {
      var d = 3.2, h = [], c = -0.03;
      function Q() {
        h = [];
        try {
          i.scene.updateMatrixWorld(true), i.scene.traverse(function(l) {
            l.isMesh && l.geometry && l.name && l.name.toLowerCase().indexOf("wheel") === 0 && h.push(l);
          });
        } catch (l) {
          console.warn("[zkp] collect wheels", l);
        }
      }
      function e(l, a, o) {
        var m = 1 / 0;
        try {
          for (var E = 0; E < h.length; E++) {
            var x = h[E];
            if (x.geometry) {
              x.geometry.boundingBox || x.geometry.computeBoundingBox();
              var A = x.geometry.boundingBox;
              if (A) {
                var z = x.matrixWorld.elements;
                if (!(l !== null && Math.hypot(z[12] - l, z[14] - a) > o)) {
                  var T = A.min.clone().applyMatrix4(x.matrixWorld);
                  T.y < m && (m = T.y);
                }
              }
            }
          }
        } catch (_) {
          console.warn("[zkp] wheel floor", _);
        }
        return isFinite(m) ? (c = m, m) : null;
      }
      Q();
      var g = i.respawns.getDefault().position;
      i.resourcesLoader.load([
        [
          "zkpFolio",
          "zkp/zkp-folio.glb?v=564ab35fb30a",
          "gltf"
        ]
      ]).then(function(l) {
        var a = l.zkpFolio.scene, o = {};
        a.traverse(function(r) {
          if (r.isBone) {
            r.userData.rest = r.quaternion.clone(), r.name === "tripo1_Left_Limb_0" ? o.legA = r : r.name === "tripo1_Right_Limb_0" ? o.legB = r : r.name === "tripo1_Left_Limb_1" ? o.kneeA = r : r.name === "tripo1_Right_Limb_1" ? o.kneeB = r : r.name === "tripoHead_0" ? o.head = r : r.name === "tripoSpine_0" ? o.spine0 = r : r.name === "tripoSpine_1" ? o.spine1 = r : r.name === "tripo0_Left_Limb_0" ? o.armA = r : r.name === "tripo0_Right_Limb_0" ? o.armB = r : r.name === "tripo1_Left_Limb_3" ? o.toeA = r : r.name === "tripo1_Right_Limb_3" && (o.toeB = r);
            return;
          }
          if (r.isMesh && (r.castShadow = true, r.receiveShadow = true, r.geometry && r.geometry.index)) {
            var s = r.geometry.toNonIndexed();
            s.computeVertexNormals(), r.geometry = s;
          }
        });
        var m = [];
        a.traverse(function(r) {
          r.isMesh && m.push({
            mesh: r,
            orig: r.material
          });
        });
        try {
          i.materials.updateObject(a);
        } catch (r) {
          console.warn("[zkp] material", r);
        }
        m.forEach(function(r) {
          r.folio = r.mesh.material;
        });
        function E(r) {
          m.forEach(function(s) {
            var u = r ? s.orig : s.folio;
            u && (s.mesh.material = u, r && (u.color && u.color.setScalar(0.55), u.emissive && (u.emissive.setRGB(0.05, 0.03, 0.06), u.emissiveIntensity = 1), u.needsUpdate = true));
          });
        }
        var x = i.view && i.view.spherical ? i.view.spherical.theta : 0, A = Math.sin(x), z = Math.cos(x), T = Math.cos(x), _ = -Math.sin(x), I = g.x + A * 2.15, B = g.z + z * 2.15, R = Math.atan2(-z, A), M = e(I, B, 14);
        (M === null || !isFinite(M)) && (M = c), a.scale.setScalar(0.01), a.position.set(I, M, B), a.rotation.y = R, window.__zkpFolio = a;
        var j = setInterval(function() {
          var r = false;
          try {
            r = i.world.intro.label && i.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!r) return;
          clearInterval(j), i.scene.add(a);
          var s = 0, u = setInterval(function() {
            s += 1;
            var f = Math.min(1, s / 12);
            a.scale.setScalar(d * (0.2 + 0.8 * f)), f >= 1 && clearInterval(u);
          }, 33), q = {
            x: a.position.clone().set(1, 0, 0),
            y: a.position.clone().set(0, 1, 0),
            z: a.position.clone().set(0, 0, 1)
          }, F = a.position.clone();
          function C(f, L, H) {
            t(f, q[L], H);
          }
          function t(f, L, H) {
            if (f) {
              var O = f.quaternion.clone().setFromAxisAngle(L, H * Math.PI / 180), y = f.parent.quaternion.clone();
              f.parent.getWorldQuaternion(y);
              var W = y.clone().invert().multiply(O).multiply(y).multiply(f.userData.rest);
              f.quaternion.copy(W);
            }
          }
          var n = null, v = null, K = false, w = 0, J = 0;
          try {
            var p = i.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: I,
                y: a.position.y + 0.5 * d,
                z: B
              },
              colliders: [
                {
                  shape: "cylinder",
                  parameters: [
                    d * 0.5,
                    d * 0.17
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
            n = p.body, v = p.colliders[0], v.setSensor(true);
          } catch (f) {
            console.warn("[zkp] physics", f);
          }
          function b() {
            K = false, E(false), a.rotation.set(0, R, 0);
            var f = e(I, B, 14);
            if ((f === null || !isFinite(f)) && (f = a.position.y), a.position.set(I, f, B), a.scale.setScalar(d), D = 0, J = performance.now() + 1800, !!n) try {
              v.setSensor(true), n.setBodyType(i.RAPIER.RigidBodyType.KinematicPositionBased, true), n.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), n.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), n.setTranslation({
                x: I,
                y: a.position.y + 0.5 * d,
                z: B
              }, true);
            } catch (L) {
              console.warn("[zkp] reset", L);
            }
          }
          window.__zkpLaunch = V, window.__zkpReset = b;
          function V(f, L, H) {
            K = true, E(true), w = performance.now();
            var O = Math.sqrt(f * f + L * L) || 1;
            f /= O, L /= O;
            var y = Math.min(15, Math.max(6, H * 1.5));
            try {
              v.setSensor(false), n.setBodyType(i.RAPIER.RigidBodyType.Dynamic, true), n.wakeUp(), n.setLinearDamping(0.5), n.setAngularDamping(0.9), n.setLinvel({
                x: f * y,
                y: Math.min(4.5, y * 0.32),
                z: L * y
              }, true), n.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (se) {
              console.warn("[zkp] launch", se);
            }
            var W = a.rotation.y, ie = Math.sin(W), ae = Math.cos(W), k = a.position.clone().set(ie, 0, ae);
            t(o.legA, k, 24), t(o.legB, k, -16), t(o.kneeA, k, -26), t(o.kneeB, k, 20), t(o.armA, k, -60), t(o.armB, k, 60);
          }
          var N = performance.now(), U = N, D = 0, G = 0;
          i.ticker.events.on("tick", function() {
            var f = performance.now(), L = Math.min(0.05, (f - U) / 1e3);
            U = f;
            var H = (f - N) / 1e3;
            if (K && n) {
              var O = n.translation(), y = n.rotation(), W = a.position.clone().set(0, -d, 0).applyQuaternion(y);
              a.position.set(O.x + W.x, O.y + W.y, O.z + W.z), a.quaternion.set(y.x, y.y, y.z, y.w), (O.y < -5 || f - w > 5e3) && b();
              return;
            }
            var W = Math.sin(H * 0.5) * 0.75, ie = Math.cos(H * 0.5) * 0.75 * 0.5, ae = Math.abs(ie), k = Math.min(1, ae / 0.25);
            D += (0.7 + ae * 4) * L, a.position.x = I + T * W, a.position.z = B + _ * W;
            for (var se = Math.atan2(-(_ * (ie >= 0 ? 1 : -1)), T * (ie >= 0 ? 1 : -1)), ne = se - R; ne > Math.PI; ) ne -= Math.PI * 2;
            for (; ne < -Math.PI; ) ne += Math.PI * 2;
            R += ne * (0.08 + (1 - k) * 0.05), a.rotation.y = R;
            var $ = Math.sin(D), fe = Math.cos(R), me = -Math.sin(R), ve = Math.sin(R), he = Math.cos(R), X = F.clone().set(ve, 0, he), pe = F.clone().set(fe, 0, me);
            if (t(o.legA, X, 26 * $ * k), t(o.legB, X, -26 * $ * k), t(o.kneeA, X, -32 * Math.max(0, -$) * k), t(o.kneeB, X, 32 * Math.max(0, $) * k), t(o.armA, X, -18 * $ * k), t(o.armB, X, 18 * $ * k), C(o.spine1, "y", 4 * $ * k), t(o.spine0, pe, 2 * Math.cos(D) * k), C(o.head, "y", -2.5 * $ * k), t(o.head, pe, -1 * Math.cos(D) * k), G++, G % 4 === 0) {
              a.updateMatrixWorld(true);
              var oe = 1 / 0;
              if (a.traverse(function(Z) {
                if (Z.isSkinnedMesh && Z.computeBoundingBox && (Z.computeBoundingBox(), Z.boundingBox)) {
                  var ue = Z.boundingBox.min.clone();
                  Z.localToWorld(ue), ue.y < oe && (oe = ue.y);
                }
              }), isFinite(oe)) {
                var ee = e(a.position.x, a.position.z, 14);
                (ee === null || !isFinite(ee)) && (ee = c), ee !== null && isFinite(ee) && (a.position.y += (ee - oe) * 0.5);
              }
            }
            if (n) {
              try {
                n.setNextKinematicTranslation({
                  x: a.position.x,
                  y: a.position.y + d,
                  z: a.position.z
                }), n.setNextKinematicRotation({
                  x: a.quaternion.x,
                  y: a.quaternion.y,
                  z: a.quaternion.z,
                  w: a.quaternion.w
                });
              } catch {
              }
              var re = i.physicalVehicle;
              if (re && re.position && f > J) {
                var le = a.position.x - re.position.x, ce = a.position.z - re.position.z, we = Math.sqrt(le * le + ce * ce), de = re.xzSpeed || 0;
                de > 1.2 && we < 2.3 && V(le, ce, de);
              }
            }
          }, 9), console.log("[zkp] folio hero loaded");
        }, 300);
      }).catch(function(l) {
        console.warn("[zkp] load failed", l);
      });
    }
  })();
  (function() {
    var S = 0, P = setInterval(function() {
      S++;
      var i = window.game;
      if (i && i.resourcesLoader && i.scene && i.world && i.world.intro && i.world.benches && i.materials && i.ticker) {
        clearInterval(P);
        try {
          Y(i);
        } catch (d) {
          console.warn("[oscar] init failed", d);
        }
      }
      S > 240 && clearInterval(P);
    }, 250);
    function Y(i) {
      var d = 0.8, h = 0.276, c = -0.11, Q = 0.6, e = -0.02;
      i.resourcesLoader.load([
        [
          "oscarSleep",
          "oscar/oscar-sleep.glb?v=fb6d9a0c6b9b",
          "gltf"
        ]
      ]).then(function(g) {
        var l = g.oscarSleep.scene;
        l.traverse(function(w) {
          if (w.isMesh && (w.castShadow = true, w.receiveShadow = true, w.geometry && w.geometry.index)) {
            var J = w.geometry.toNonIndexed();
            J.computeVertexNormals(), w.geometry = J;
          }
        });
        try {
          i.materials.updateObject(l);
        } catch (w) {
          console.warn("[oscar] material", w);
        }
        l.traverse(function(w) {
          !w.isMesh || !w.material || !w.material.emissive || (w.material.emissive.setHex(1708554), w.material.needsUpdate = true);
        });
        for (var a = i.world.intro.center, o = i.world.benches.objects, m = null, E = 1 / 0, x = 0; x < o.length; x++) {
          var A = o[x];
          if (!(!A || !A.visual || !A.visual.object3D)) {
            var z = A.visual.object3D, T = z.position.x - a.x, _ = z.position.z - a.z, I = T * T + _ * _;
            I < E && (E = I, m = z);
          }
        }
        if (!m) {
          console.warn("[oscar] bench not found");
          return;
        }
        m.updateMatrixWorld(true);
        var B = m.scale ? m.scale.x : 1, R = m.scale ? m.scale.y : 1, M = m.scale ? m.scale.z : 1, j = m.position.y + c * R, r = m.position.clone().set(Q * B, 0, e * M);
        r.applyQuaternion(m.quaternion);
        var s = m.position.x + r.x, u = m.position.z + r.z;
        l.scale.setScalar(d), l.position.set(s, j + h * d, u), l.quaternion.copy(m.quaternion);
        var q = null, F = g.oscarSleep.animations && g.oscarSleep.animations[0] || null;
        if (F) {
          q = new ge(l);
          var C = q.clipAction(F);
          C.setLoop(xe, 1 / 0), C.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var t = new te(16757350, 16, 3.6, 2);
        t.position.set(s - 0.55, j + 1.25, u + 0.95), i.scene.add(t);
        var n = new te(9399295, 10, 3.2, 2);
        n.position.set(s + 0.95, j + 1, u - 0.95), i.scene.add(n);
        var v = new te(16764826, 4, 2, 2);
        v.position.set(s + 0.15, j + 0.5, u + 1.15), i.scene.add(v), window.__oscarLights = {
          key: t,
          rim: n,
          fill: v
        };
        var K = setInterval(function() {
          var w = false;
          try {
            w = i.world.intro.label && i.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (w) {
            clearInterval(K), i.scene.add(l), window.__oscarFolio = l;
            var J = l.position.y, p = {
              mixer: q,
              action: C || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = p, i.ticker.events.on("tick", function() {
              if (p.ticks++, p.delta = i.ticker.delta, q) q.update(i.ticker.delta);
              else {
                var b = i.ticker.elapsed || 0, V = 1 + 0.013 * Math.sin(b / 4 * Math.PI * 2);
                l.scale.setScalar(d * V), l.position.y = J + 4e-3 * V;
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var S = 1.6, P = -0.11, Y = 0.3, i = 0, d = setInterval(function() {
      i++;
      var c = window.game;
      if (c && c.resourcesLoader && c.scene && c.world && c.world.intro && c.world.benches && c.materials && c.ticker && c.respawns && c.physics) {
        clearInterval(d);
        try {
          h(c);
        } catch (Q) {
          console.warn("[zc] init failed", Q);
        }
      }
      i > 240 && clearInterval(d);
    }, 250);
    function h(c) {
      c.resourcesLoader.load([
        [
          "zc",
          "zc/zc-folio.glb?v=27c355ac0a59",
          "gltf"
        ]
      ]).then(function(Q) {
        var e = Q.zc.scene;
        e.traverse(function(p) {
          if (p.isMesh && (p.castShadow = true, p.receiveShadow = true, p.geometry && p.geometry.index)) {
            var b = p.geometry.toNonIndexed();
            b.computeVertexNormals(), p.geometry = b;
          }
        });
        try {
          c.materials.updateObject(e);
        } catch (p) {
          console.warn("[zc] material", p);
        }
        e.traverse(function(p) {
          !p.isMesh || !p.material || !p.material.emissive || (p.material.emissive.setHex(1840400), p.material.emissiveIntensity = 1, p.material.needsUpdate = true);
        });
        for (var g = c.respawns.getDefault().position, l = [], a = c.world.benches.objects, o = 0; o < a.length; o++) {
          var m = a[o];
          if (!(!m || !m.visual || !m.visual.object3D)) {
            var E = m.visual.object3D, x = E.position.x - g.x, A = E.position.z - g.z;
            l.push({
              obj: E,
              d: x * x + A * A
            });
          }
        }
        l.sort(function(p, b) {
          return p.d - b.d;
        });
        var z = l.length > 1 ? l[1].obj : l[0].obj;
        if (!z) {
          console.warn("[zc] bench not found");
          return;
        }
        z.updateMatrixWorld(true);
        var T = z.scale, _ = z.quaternion, I = z.position, B = I.y + P * T.y, R = new be(0, 0, Y * T.z).applyQuaternion(_);
        e.scale.setScalar(S), e.position.set(I.x + R.x, B + 0.5 * S + 5e-3, I.z + R.z), e.quaternion.copy(_);
        var M = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, j = new te(16761994, 46, 7, 2);
        j.position.set(e.position.x + 1.4, B + 2.4, e.position.z + 1.8), c.scene.add(j);
        var r = new te(9399295, 26, 6, 2);
        r.position.set(e.position.x - 1.8, B + 2.1, e.position.z - 1.4), c.scene.add(r);
        var s = new te(16767408, 12, 4, 2);
        s.position.set(e.position.x + 0.1, B + 1.5, e.position.z + 2.4), c.scene.add(s);
        var u = null, q = null, F = false, C = 0, t = 0, n = 2.4;
        try {
          var v = c.physics.getPhysical({
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
                  0.5 * S,
                  0.34 * S
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
          u = v.body, q = v.colliders[0], q.setSensor(true);
          try {
            u.setRotation({
              x: _.x,
              y: _.y,
              z: _.z,
              w: _.w
            }, true);
          } catch {
          }
        } catch (p) {
          console.warn("[zc] physics", p);
        }
        function K() {
          if (F = false, e.position.copy(M.position), e.quaternion.copy(M.quaternion), e.scale.setScalar(S), t = performance.now() + 1600, !!u) try {
            q.setSensor(true), u.setBodyType(c.RAPIER.RigidBodyType.KinematicPositionBased, true), u.setLinvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setAngvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setTranslation({
              x: M.position.x,
              y: M.position.y,
              z: M.position.z
            }, true), u.setRotation({
              x: M.quaternion.x,
              y: M.quaternion.y,
              z: M.quaternion.z,
              w: M.quaternion.w
            }, true);
          } catch (p) {
            console.warn("[zc] reset", p);
          }
        }
        function w(p, b, V) {
          if (!F) {
            F = true, C = performance.now();
            var N = Math.sqrt(p * p + b * b) || 1;
            p /= N, b /= N;
            var U = Math.min(16, Math.max(6, V * 1.6));
            if (e.scale.setScalar(S), !u) {
              var D = e, G = D.position.x, f = D.position.z, L = D.position.y, H = performance.now(), O = setInterval(function() {
                var y = (performance.now() - H) / 1e3;
                D.position.set(G + p * U * y, L + 3.2 * y - 9.8 * y * y * 0.5, f + b * U * y), D.rotation.x += y * 3, y > 2.4 && (clearInterval(O), K());
              }, 16);
              return;
            }
            try {
              q.setSensor(false), u.setBodyType(c.RAPIER.RigidBodyType.Dynamic, true), u.wakeUp(), u.setLinearDamping(0.35), u.setAngularDamping(0.6), u.setLinvel({
                x: p * U,
                y: Math.min(5, 2 + U * 0.28),
                z: b * U
              }, true), u.setAngvel({
                x: (Math.random() - 0.5) * 9,
                y: (Math.random() - 0.5) * 9,
                z: (Math.random() - 0.5) * 9
              }, true);
            } catch (y) {
              console.warn("[zc] launch", y);
            }
          }
        }
        window.__zcLaunch = w, window.__zcReset = K;
        var J = setInterval(function() {
          var p = false;
          try {
            p = c.world.intro.label && c.world.intro.label.scale.x > 0.6;
          } catch {
          }
          p && (clearInterval(J), c.scene.add(e), window.__zcFolio = e, window.__zcBench = z, c.ticker.events.on("tick", function() {
            var b = performance.now();
            if (u && F) {
              var V = u.translation(), N = u.rotation();
              e.position.set(V.x, V.y, V.z), e.quaternion.set(N.x, N.y, N.z, N.w), (V.y < -5 || b - C > 6e3) && K();
              return;
            }
            var U = c.ticker.elapsed || 0, D = 1 + 35e-4 * Math.sin(U / 5 * Math.PI * 2);
            if (e.scale.setScalar(S * D), u) {
              try {
                u.setNextKinematicTranslation({
                  x: e.position.x,
                  y: e.position.y,
                  z: e.position.z
                }), u.setNextKinematicRotation({
                  x: e.quaternion.x,
                  y: e.quaternion.y,
                  z: e.quaternion.z,
                  w: e.quaternion.w
                });
              } catch {
              }
              var G = c.physicalVehicle;
              if (G && G.position && b > t) {
                var f = e.position.x - G.position.x, L = e.position.z - G.position.z, H = Math.sqrt(f * f + L * L), O = G.xzSpeed || 0;
                O > 1 && H < n && w(f, L, O);
              }
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
