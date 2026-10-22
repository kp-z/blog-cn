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
    const S = document.createElement("link").relList;
    if (S && S.supports && S.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) t(c);
    new MutationObserver((c) => {
      for (const f of c) if (f.type === "childList") for (const l of f.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && t(l);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function U(c) {
      const f = {};
      return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function t(c) {
      if (c.ep) return;
      c.ep = true;
      const f = U(c);
      fetch(c.href, f);
    }
  })();
  (function() {
    var z = new URLSearchParams(location.search), S = z.get("bg") === "1", U = window.parent && window.parent !== window, t = S ? "bg" : "game";
    window.__hexoBg = S, S && document.documentElement.classList.add("hexo-bg"), me(() => import("./index-BT3-4Og0.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var c = document.createElement("style");
    c.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important;width:52px !important;height:34px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important;width:52px !important;height:34px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:rgba(10,18,24,.42) !important;border:1px solid rgba(255,255,255,.38) !important;border-right:2px solid rgba(255,255,255,.78) !important;border-radius:9px !important;box-sizing:border-box !important;width:100% !important;height:100% !important;-webkit-backdrop-filter:blur(8px) !important;backdrop-filter:blur(8px) !important}.menu-trigger .button-inner::after,.map-trigger .button-inner::after{display:none !important}.menu-trigger .icon-container,.map-trigger .icon-container{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}html:not(.is-mode-touch) .menu-trigger:hover .button-inner,html:not(.is-mode-touch) .map-trigger:hover .button-inner{transform:none !important;background:rgba(10,18,24,.6) !important}@media (min-width:801px){.menu .inner{width:min(860px,calc(100% - 160px)) !important;height:min(520px,calc(100% - 160px)) !important}.menu .contents .content .content-inner{width:100% !important}.map{width:760px !important;height:760px !important;max-width:68vmin !important;max-height:68vmin !important}}@media only screen and (max-width:800px) and (orientation:portrait){.menu .inner{height:calc((100% - 54px) * 2 / 3) !important}}", document.head.appendChild(c);
    function f(e, r) {
      if (U) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, r || {}), "*");
      } catch {
      }
    }
    function l(e, r) {
      var i = setInterval(function() {
        var A = false;
        try {
          A = e();
        } catch {
        }
        A && (clearInterval(i), r());
      }, 200);
    }
    var N = [
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
    N.forEach(function(e) {
      window.addEventListener(e, function(r) {
        t === "bg" && (r.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && r.cancelable && r.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), l(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, r = false, i = 0, A = 0, h = null, m = 0.17, D = 0.66, F = 2.2;
      function E() {
        h = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function B() {
        h || E(), e.view.spherical.phi = Math.min(Math.PI * 0.49, h.phi + m);
        var n = window.innerWidth <= 800, s = n ? 0.45 : D, _ = n ? 1.5 : F;
        e.view.zoom.baseRatio = s, e.view.zoom.smoothedRatio = s, e.view.focusPoint.position.y = h.focusY + _;
      }
      function T() {
        h && (e.view.spherical.phi = h.phi, e.view.zoom.baseRatio = h.baseRatio, e.view.zoom.smoothedRatio = h.smoothedRatio, e.view.focusPoint.position.y = h.focusY, h = null);
      }
      function g(n) {
        if (r !== n) {
          r = n;
          var s = e.rendering && e.rendering.renderer;
          if (!(!s || !s.setAnimationLoop)) if (n) {
            i = performance.now();
            try {
              s.setAnimationLoop(null);
            } catch {
            }
          } else {
            i || (i = performance.now()), A += performance.now() - i, i = 0;
            try {
              s.setAnimationLoop(function(_) {
                e.ticker.update(_ - A);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return r;
      }, e.ticker.events.on("tick", function() {
        t === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, B(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function x() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function V() {
        if (t === "game") return;
        if (T(), g(false), t = "game", window.__hexoBg = false, document.documentElement.classList.remove("hexo-bg"), !x()) {
          f("town-game-entered");
          return;
        }
        var n = 0;
        function s() {
          if (n++, e.reveal.step >= 1 || !x()) {
            f("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || n >= 40 ? f("town-game-entered") : s();
          }, 400);
        }
        s();
      }
      function a() {
        t !== "bg" && (E(), t = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), f("town-game-left"));
      }
      window.addEventListener("message", function(n) {
        if (!(n.source !== window.parent && n.source !== window)) {
          var s = n.data;
          !s || typeof s != "object" || (s.type === "town-bg-pause" ? g(true) : s.type === "town-bg-resume" ? g(false) : s.type === "town-bg-enter" ? V() : s.type === "town-bg-leave" && a());
        }
      }), window.addEventListener("keydown", function(n) {
        n.key === "Escape" && t === "game" && f("town-game-exit");
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
      var o = {
        frames: 0,
        t: performance.now(),
        stage: 0,
        good: 0,
        low: 0,
        since: 0,
        base: e.viewport.pixelRatio
      };
      function w(n) {
        e.viewport.pixelRatio = n, e.rendering.renderer.setPixelRatio(n), e.rendering.renderer.setSize(e.viewport.width, e.viewport.height);
      }
      function C(n) {
        var s = n === 1 ? 1.5 : n === 2 ? 1.25 : o.base;
        return Math.min(o.base, s);
      }
      function O() {
        return t === "game" && !r && e.reveal && e.reveal.step >= 2;
      }
      function u(n) {
        if (O() && (o.since || (o.since = n), o.frames++), n - o.t >= 3e3) {
          var s = o.frames * 1e3 / (n - o.t);
          o.frames = 0, o.t = n, O() && o.base > 1.25 && o.since && n - o.since >= 8e3 && (s < 40 ? (o.low++, o.good = 0) : s > 55 ? (o.good++, o.low = 0) : (o.low = 0, o.good = 0), o.low >= 2 && o.stage < 2 ? (o.stage++, w(C(o.stage)), o.low = 0) : o.good >= 4 && o.stage > 0 && (o.stage--, w(C(o.stage)), o.good = 0));
        }
        window.requestAnimationFrame(u);
      }
      window.requestAnimationFrame(u), f("town-bg-ready", {
        mode: t,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var z = 0, S = setInterval(function() {
      z++;
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.respawns && t.world && t.world.intro && t.materials) {
        clearInterval(S);
        try {
          U(t);
        } catch (c) {
          console.warn("[hero] init failed", c);
        }
      }
      z > 240 && clearInterval(S);
    }, 250);
    function U(t) {
      var c = 3.2, f = -0.03;
      try {
        var l = 1 / 0;
        t.scene.updateMatrixWorld(true), t.scene.traverse(function(e) {
          if (e.isMesh && e.geometry && e.name && e.name.toLowerCase().indexOf("wheel") === 0) {
            e.geometry.computeBoundingBox();
            var r = e.geometry.boundingBox;
            if (r) {
              var i = r.min.clone().applyMatrix4(e.matrixWorld);
              i.y < l && (l = i.y);
            }
          }
        }), isFinite(l) && (f = l);
      } catch (e) {
        console.warn("[hero] wheel floor", e);
      }
      var N = t.respawns.getDefault().position;
      t.resourcesLoader.load([
        [
          "heroFolio",
          "hero/hero-folio.glb?v=564ab35fb30a",
          "gltf"
        ]
      ]).then(function(e) {
        var r = e.heroFolio.scene, i = {};
        r.traverse(function(a) {
          if (a.isBone) {
            a.userData.rest = a.quaternion.clone(), a.name === "tripo1_Left_Limb_0" ? i.legA = a : a.name === "tripo1_Right_Limb_0" ? i.legB = a : a.name === "tripo1_Left_Limb_1" ? i.kneeA = a : a.name === "tripo1_Right_Limb_1" ? i.kneeB = a : a.name === "tripoHead_0" ? i.head = a : a.name === "tripoSpine_0" ? i.spine0 = a : a.name === "tripoSpine_1" ? i.spine1 = a : a.name === "tripo0_Left_Limb_0" ? i.armA = a : a.name === "tripo0_Right_Limb_0" ? i.armB = a : a.name === "tripo1_Left_Limb_3" ? i.toeA = a : a.name === "tripo1_Right_Limb_3" && (i.toeB = a);
            return;
          }
          if (a.isMesh && (a.castShadow = true, a.receiveShadow = true, a.geometry && a.geometry.index)) {
            var o = a.geometry.toNonIndexed();
            o.computeVertexNormals(), a.geometry = o;
          }
        });
        var A = [];
        r.traverse(function(a) {
          a.isMesh && A.push({
            mesh: a,
            orig: a.material
          });
        });
        try {
          t.materials.updateObject(r);
        } catch (a) {
          console.warn("[hero] material", a);
        }
        A.forEach(function(a) {
          a.folio = a.mesh.material;
        });
        function h(a) {
          A.forEach(function(o) {
            var w = a ? o.orig : o.folio;
            w && (o.mesh.material = w, a && (w.color && w.color.setScalar(0.55), w.emissive && (w.emissive.setRGB(0.05, 0.03, 0.06), w.emissiveIntensity = 1), w.needsUpdate = true));
          });
        }
        var m = t.view && t.view.spherical ? t.view.spherical.theta : 0, D = Math.sin(m), F = Math.cos(m), E = Math.cos(m), B = -Math.sin(m), T = N.x + D * 2.15, g = N.z + F * 2.15, x = Math.atan2(-F, D);
        r.scale.setScalar(0.01), r.position.set(T, f - 0.5 * c, g), r.rotation.y = x, window.__heroFolio = r;
        var V = setInterval(function() {
          var a = false;
          try {
            a = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!a) return;
          clearInterval(V), t.scene.add(r);
          var o = 0, w = setInterval(function() {
            o += 1;
            var p = Math.min(1, o / 12);
            r.scale.setScalar(c * (0.2 + 0.8 * p)), p >= 1 && clearInterval(w);
          }, 33), C = {
            x: r.position.clone().set(1, 0, 0),
            y: r.position.clone().set(0, 1, 0),
            z: r.position.clone().set(0, 0, 1)
          }, O = r.position.clone();
          function u(p, L, I) {
            n(p, C[L], I);
          }
          function n(p, L, I) {
            if (p) {
              var R = p.quaternion.clone().setFromAxisAngle(L, I * Math.PI / 180), b = p.parent.quaternion.clone();
              p.parent.getWorldQuaternion(b);
              var P = b.clone().invert().multiply(R).multiply(b).multiply(p.userData.rest);
              p.quaternion.copy(P);
            }
          }
          var s = null, _ = null, j = false, Y = 0, G = 0;
          try {
            var Q = t.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: T,
                y: f + 0.5 * c,
                z: g
              },
              colliders: [
                {
                  shape: "cylinder",
                  parameters: [
                    c * 0.5,
                    c * 0.17
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
            s = Q.body, _ = Q.colliders[0], _.setSensor(true);
          } catch (p) {
            console.warn("[hero] physics", p);
          }
          function v() {
            if (j = false, h(false), r.rotation.set(0, x, 0), r.position.set(T, f - 0.5 * c, g), r.scale.setScalar(c), k = 0, G = performance.now() + 1800, !!s) try {
              _.setSensor(true), s.setBodyType(t.RAPIER.RigidBodyType.KinematicPositionBased, true), s.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), s.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), s.setTranslation({
                x: T,
                y: f + 0.5 * c,
                z: g
              }, true);
            } catch (p) {
              console.warn("[hero] reset", p);
            }
          }
          window.__heroLaunch = W, window.__heroReset = v;
          function W(p, L, I) {
            j = true, h(true), Y = performance.now();
            var R = Math.sqrt(p * p + L * L) || 1;
            p /= R, L /= R;
            var b = Math.min(15, Math.max(6, I * 1.5));
            try {
              _.setSensor(false), s.setBodyType(t.RAPIER.RigidBodyType.Dynamic, true), s.wakeUp(), s.setLinearDamping(0.5), s.setAngularDamping(0.9), s.setLinvel({
                x: p * b,
                y: Math.min(4.5, b * 0.32),
                z: L * b
              }, true), s.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (ie) {
              console.warn("[hero] launch", ie);
            }
            var P = r.rotation.y, K = Math.sin(P), q = Math.cos(P), M = r.position.clone().set(K, 0, q);
            n(i.legA, M, 24), n(i.legB, M, -16), n(i.kneeA, M, -26), n(i.kneeB, M, 20), n(i.armA, M, -60), n(i.armB, M, 60);
          }
          var d = performance.now(), y = d, k = 0, H = 0;
          t.ticker.events.on("tick", function() {
            var p = performance.now(), L = Math.min(0.05, (p - y) / 1e3);
            y = p;
            var I = (p - d) / 1e3;
            if (j && s) {
              var R = s.translation(), b = s.rotation(), P = r.position.clone().set(0, -c, 0).applyQuaternion(b);
              r.position.set(R.x + P.x, R.y + P.y, R.z + P.z), r.quaternion.set(b.x, b.y, b.z, b.w), (R.y < -5 || p - Y > 5e3) && v();
              return;
            }
            var P = Math.sin(I * 0.5) * 0.75, K = Math.cos(I * 0.5) * 0.75 * 0.5, q = Math.abs(K), M = Math.min(1, q / 0.25);
            k += (0.7 + q * 4) * L, r.position.x = T + E * P, r.position.z = g + B * P;
            for (var ie = Math.atan2(-(B * (K >= 0 ? 1 : -1)), E * (K >= 0 ? 1 : -1)), ee = ie - x; ee > Math.PI; ) ee -= Math.PI * 2;
            for (; ee < -Math.PI; ) ee += Math.PI * 2;
            x += ee * (0.08 + (1 - M) * 0.05), r.rotation.y = x;
            var J = Math.sin(k), ce = Math.cos(x), de = -Math.sin(x), pe = Math.sin(x), ue = Math.cos(x), Z = O.clone().set(pe, 0, ue), se = O.clone().set(ce, 0, de);
            if (n(i.legA, Z, 26 * J * M), n(i.legB, Z, -26 * J * M), n(i.kneeA, Z, -32 * Math.max(0, -J) * M), n(i.kneeB, Z, 32 * Math.max(0, J) * M), n(i.armA, Z, -18 * J * M), n(i.armB, Z, 18 * J * M), u(i.spine1, "y", 4 * J * M), n(i.spine0, se, 2 * Math.cos(k) * M), u(i.head, "y", -2.5 * J * M), n(i.head, se, -1 * Math.cos(k) * M), H++, H % 4 === 0) {
              r.updateMatrixWorld(true);
              var re = 1 / 0;
              r.traverse(function($) {
                if ($.isSkinnedMesh && $.computeBoundingBox && ($.computeBoundingBox(), $.boundingBox)) {
                  var oe = $.boundingBox.min.clone();
                  $.localToWorld(oe), oe.y < re && (re = oe.y);
                }
              }), isFinite(re) && (r.position.y += (f - re) * 0.5);
            }
            if (s) {
              try {
                s.setNextKinematicTranslation({
                  x: r.position.x,
                  y: r.position.y + c,
                  z: r.position.z
                }), s.setNextKinematicRotation({
                  x: r.quaternion.x,
                  y: r.quaternion.y,
                  z: r.quaternion.z,
                  w: r.quaternion.w
                });
              } catch {
              }
              var te = t.physicalVehicle;
              if (te && te.position && p > G) {
                var ne = r.position.x - te.position.x, ae = r.position.z - te.position.z, fe = Math.sqrt(ne * ne + ae * ae), le = te.xzSpeed || 0;
                le > 1.2 && fe < 2.3 && W(ne, ae, le);
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
    var z = 0, S = setInterval(function() {
      z++;
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.world && t.world.intro && t.world.benches && t.materials && t.ticker) {
        clearInterval(S);
        try {
          U(t);
        } catch (c) {
          console.warn("[oscar] init failed", c);
        }
      }
      z > 240 && clearInterval(S);
    }, 250);
    function U(t) {
      var c = 0.8, f = 0.276, l = -0.11, N = 0.6, e = -0.02;
      t.resourcesLoader.load([
        [
          "oscarSleep",
          "cat/oscar-sleep.glb?v=fb6d9a0c6b9b",
          "gltf"
        ]
      ]).then(function(r) {
        var i = r.oscarSleep.scene;
        i.traverse(function(v) {
          if (v.isMesh && (v.castShadow = true, v.receiveShadow = true, v.geometry && v.geometry.index)) {
            var W = v.geometry.toNonIndexed();
            W.computeVertexNormals(), v.geometry = W;
          }
        });
        try {
          t.materials.updateObject(i);
        } catch (v) {
          console.warn("[oscar] material", v);
        }
        i.traverse(function(v) {
          !v.isMesh || !v.material || !v.material.emissive || (v.material.emissive.setHex(1708554), v.material.needsUpdate = true);
        });
        for (var A = t.world.intro.center, h = t.world.benches.objects, m = null, D = 1 / 0, F = 0; F < h.length; F++) {
          var E = h[F];
          if (!(!E || !E.visual || !E.visual.object3D)) {
            var B = E.visual.object3D, T = B.position.x - A.x, g = B.position.z - A.z, x = T * T + g * g;
            x < D && (D = x, m = B);
          }
        }
        if (!m) {
          console.warn("[oscar] bench not found");
          return;
        }
        m.updateMatrixWorld(true);
        var V = m.scale ? m.scale.x : 1, a = m.scale ? m.scale.y : 1, o = m.scale ? m.scale.z : 1, w = m.position.y + l * a, C = m.position.clone().set(N * V, 0, e * o);
        C.applyQuaternion(m.quaternion);
        var O = m.position.x + C.x, u = m.position.z + C.z;
        i.scale.setScalar(c), i.position.set(O, w + f * c, u), i.quaternion.copy(m.quaternion);
        var n = null, s = r.oscarSleep.animations && r.oscarSleep.animations[0] || null;
        if (s) {
          n = new ve(i);
          var _ = n.clipAction(s);
          _.setLoop(he, 1 / 0), _.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var j = new X(16757350, 16, 3.6, 2);
        j.position.set(O - 0.55, w + 1.25, u + 0.95), t.scene.add(j);
        var Y = new X(9399295, 10, 3.2, 2);
        Y.position.set(O + 0.95, w + 1, u - 0.95), t.scene.add(Y);
        var G = new X(16764826, 4, 2, 2);
        G.position.set(O + 0.15, w + 0.5, u + 1.15), t.scene.add(G), window.__oscarLights = {
          key: j,
          rim: Y,
          fill: G
        };
        var Q = setInterval(function() {
          var v = false;
          try {
            v = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (v) {
            clearInterval(Q), t.scene.add(i), window.__oscarFolio = i;
            var W = i.position.y, d = {
              mixer: n,
              action: _ || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = d, t.ticker.events.on("tick", function() {
              if (d.ticks++, d.delta = t.ticker.delta, n) n.update(t.ticker.delta);
              else {
                var y = t.ticker.elapsed || 0, k = 1 + 0.013 * Math.sin(y / 4 * Math.PI * 2);
                i.scale.setScalar(c * k), i.position.y = W + 4e-3 * k;
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var z = 1.6, S = -0.11, U = 0.3, t = 0, c = setInterval(function() {
      t++;
      var l = window.game;
      if (l && l.resourcesLoader && l.scene && l.world && l.world.intro && l.world.benches && l.materials && l.ticker && l.respawns && l.physics) {
        clearInterval(c);
        try {
          f(l);
        } catch (N) {
          console.warn("[lady] init failed", N);
        }
      }
      t > 240 && clearInterval(c);
    }, 250);
    function f(l) {
      l.resourcesLoader.load([
        [
          "seasideLady",
          "lady/seaside-lady.glb?v=27c355ac0a59",
          "gltf"
        ]
      ]).then(function(N) {
        var e = N.seasideLady.scene;
        e.traverse(function(d) {
          if (d.isMesh && (d.castShadow = true, d.receiveShadow = true, d.geometry && d.geometry.index)) {
            var y = d.geometry.toNonIndexed();
            y.computeVertexNormals(), d.geometry = y;
          }
        });
        try {
          l.materials.updateObject(e);
        } catch (d) {
          console.warn("[lady] material", d);
        }
        e.traverse(function(d) {
          !d.isMesh || !d.material || !d.material.emissive || (d.material.emissive.setHex(1840400), d.material.emissiveIntensity = 1, d.material.needsUpdate = true);
        });
        for (var r = l.respawns.getDefault().position, i = [], A = l.world.benches.objects, h = 0; h < A.length; h++) {
          var m = A[h];
          if (!(!m || !m.visual || !m.visual.object3D)) {
            var D = m.visual.object3D, F = D.position.x - r.x, E = D.position.z - r.z;
            i.push({
              obj: D,
              d: F * F + E * E
            });
          }
        }
        i.sort(function(d, y) {
          return d.d - y.d;
        });
        var B = i.length > 1 ? i[1].obj : i[0].obj;
        if (!B) {
          console.warn("[lady] bench not found");
          return;
        }
        B.updateMatrixWorld(true);
        var T = B.scale, g = B.quaternion, x = B.position, V = x.y + S * T.y, a = new we(0, 0, U * T.z).applyQuaternion(g);
        e.scale.setScalar(z), e.position.set(x.x + a.x, V + 0.5 * z + 5e-3, x.z + a.z), e.quaternion.copy(g);
        var o = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, w = new X(16761994, 46, 7, 2);
        w.position.set(e.position.x + 1.4, V + 2.4, e.position.z + 1.8), l.scene.add(w);
        var C = new X(9399295, 26, 6, 2);
        C.position.set(e.position.x - 1.8, V + 2.1, e.position.z - 1.4), l.scene.add(C);
        var O = new X(16767408, 12, 4, 2);
        O.position.set(e.position.x + 0.1, V + 1.5, e.position.z + 2.4), l.scene.add(O);
        var u = null, n = null, s = false, _ = 0, j = 0, Y = 2.4;
        try {
          var G = l.physics.getPhysical({
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
                  0.5 * z,
                  0.34 * z
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
          u = G.body, n = G.colliders[0], n.setSensor(true);
          try {
            u.setRotation({
              x: g.x,
              y: g.y,
              z: g.z,
              w: g.w
            }, true);
          } catch {
          }
        } catch (d) {
          console.warn("[lady] physics", d);
        }
        function Q() {
          if (s = false, e.position.copy(o.position), e.quaternion.copy(o.quaternion), e.scale.setScalar(z), j = performance.now() + 1600, !!u) try {
            n.setSensor(true), u.setBodyType(l.RAPIER.RigidBodyType.KinematicPositionBased, true), u.setLinvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setAngvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setTranslation({
              x: o.position.x,
              y: o.position.y,
              z: o.position.z
            }, true), u.setRotation({
              x: o.quaternion.x,
              y: o.quaternion.y,
              z: o.quaternion.z,
              w: o.quaternion.w
            }, true);
          } catch (d) {
            console.warn("[lady] reset", d);
          }
        }
        function v(d, y, k) {
          if (!s) {
            s = true, _ = performance.now();
            var H = Math.sqrt(d * d + y * y) || 1;
            d /= H, y /= H;
            var p = Math.min(16, Math.max(6, k * 1.6));
            if (e.scale.setScalar(z), !u) {
              var L = e, I = L.position.x, R = L.position.z, b = L.position.y, P = performance.now(), K = setInterval(function() {
                var q = (performance.now() - P) / 1e3;
                L.position.set(I + d * p * q, b + 3.2 * q - 9.8 * q * q * 0.5, R + y * p * q), L.rotation.x += q * 3, q > 2.4 && (clearInterval(K), Q());
              }, 16);
              return;
            }
            try {
              n.setSensor(false), u.setBodyType(l.RAPIER.RigidBodyType.Dynamic, true), u.wakeUp(), u.setLinearDamping(0.35), u.setAngularDamping(0.6), u.setLinvel({
                x: d * p,
                y: Math.min(5, 2 + p * 0.28),
                z: y * p
              }, true), u.setAngvel({
                x: (Math.random() - 0.5) * 9,
                y: (Math.random() - 0.5) * 9,
                z: (Math.random() - 0.5) * 9
              }, true);
            } catch (q) {
              console.warn("[lady] launch", q);
            }
          }
        }
        window.__ladyLaunch = v, window.__ladyReset = Q;
        var W = setInterval(function() {
          var d = false;
          try {
            d = l.world.intro.label && l.world.intro.label.scale.x > 0.6;
          } catch {
          }
          d && (clearInterval(W), l.scene.add(e), window.__ladyFolio = e, window.__ladyBench = B, l.ticker.events.on("tick", function() {
            var y = performance.now();
            if (u && s) {
              var k = u.translation(), H = u.rotation();
              e.position.set(k.x, k.y, k.z), e.quaternion.set(H.x, H.y, H.z, H.w), (k.y < -5 || y - _ > 6e3) && Q();
              return;
            }
            var p = l.ticker.elapsed || 0, L = 1 + 35e-4 * Math.sin(p / 5 * Math.PI * 2);
            if (e.scale.setScalar(z * L), u) {
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
              var I = l.physicalVehicle;
              if (I && I.position && y > j) {
                var R = e.position.x - I.position.x, b = e.position.z - I.position.z, P = Math.sqrt(R * R + b * b), K = I.xzSpeed || 0;
                K > 1 && P < Y && v(R, b, K);
              }
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
