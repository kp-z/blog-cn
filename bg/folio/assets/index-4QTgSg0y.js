const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-gfTTB43-.js","./three-BPWavq8k.js","./vendor-BcHL05hW.js","./areas-DTgs6KRG.js","./tweakpane-C39D8eO8.js","./gsap-BcKM28WW.js","./camera-controls-ByztGhiL.js"])))=>i.map(i=>d[i]);
import { _ as me, __tla as __tla_0 } from "./areas-DTgs6KRG.js";
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
    const I = document.createElement("link").relList;
    if (I && I.supports && I.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) t(o);
    new MutationObserver((o) => {
      for (const p of o) if (p.type === "childList") for (const a of p.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function U(o) {
      const p = {};
      return o.integrity && (p.integrity = o.integrity), o.referrerPolicy && (p.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? p.credentials = "include" : o.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p;
    }
    function t(o) {
      if (o.ep) return;
      o.ep = true;
      const p = U(o);
      fetch(o.href, p);
    }
  })();
  (function() {
    var M = new URLSearchParams(location.search), I = M.get("bg") === "1", U = window.parent && window.parent !== window, t = I ? "bg" : "game";
    window.__hexoBg = I, I && document.documentElement.classList.add("hexo-bg"), me(() => import("./index-gfTTB43-.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var o = document.createElement("style");
    o.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important;width:52px !important;height:34px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important;width:52px !important;height:34px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:rgba(10,18,24,.42) !important;border:1px solid rgba(255,255,255,.38) !important;border-right:2px solid rgba(255,255,255,.78) !important;border-radius:9px !important;box-sizing:border-box !important;width:100% !important;height:100% !important;-webkit-backdrop-filter:blur(8px) !important;backdrop-filter:blur(8px) !important}.menu-trigger .button-inner::after,.map-trigger .button-inner::after{display:none !important}.menu-trigger .icon-container,.map-trigger .icon-container{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}html:not(.is-mode-touch) .menu-trigger:hover .button-inner,html:not(.is-mode-touch) .map-trigger:hover .button-inner{transform:none !important;background:rgba(10,18,24,.6) !important}@media (min-width:801px){.menu .inner{width:min(860px,calc(100% - 160px)) !important;height:min(520px,calc(100% - 160px)) !important}.menu .contents .content .content-inner{width:100% !important}.map{width:760px !important;height:760px !important;max-width:68vmin !important;max-height:68vmin !important}}@media only screen and (max-width:800px) and (orientation:portrait){.menu .inner{height:calc((100% - 54px) * 2 / 3) !important}}", document.head.appendChild(o);
    function p(e, r) {
      if (U) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, r || {}), "*");
      } catch {
      }
    }
    function a(e, r) {
      var n = setInterval(function() {
        var S = false;
        try {
          S = e();
        } catch {
        }
        S && (clearInterval(n), r());
      }, 200);
    }
    var C = [
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
    C.forEach(function(e) {
      window.addEventListener(e, function(r) {
        t === "bg" && (r.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && r.cancelable && r.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), a(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, r = false, n = 0, S = 0, w = null, f = 0.17, T = 0.66, D = 2.2;
      function q() {
        w = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function A() {
        w || q(), e.view.spherical.phi = Math.min(Math.PI * 0.49, w.phi + f);
        var l = window.innerWidth <= 800, c = l ? 0.45 : T, B = l ? 1.5 : D;
        e.view.zoom.baseRatio = c, e.view.zoom.smoothedRatio = c, e.view.focusPoint.position.y = w.focusY + B;
      }
      function O() {
        w && (e.view.spherical.phi = w.phi, e.view.zoom.baseRatio = w.baseRatio, e.view.zoom.smoothedRatio = w.smoothedRatio, e.view.focusPoint.position.y = w.focusY, w = null);
      }
      function g(l) {
        if (r !== l) {
          r = l;
          var c = e.rendering && e.rendering.renderer;
          if (!(!c || !c.setAnimationLoop)) if (l) {
            n = performance.now();
            try {
              c.setAnimationLoop(null);
            } catch {
            }
          } else {
            n || (n = performance.now()), S += performance.now() - n, n = 0;
            try {
              c.setAnimationLoop(function(B) {
                e.ticker.update(B - S);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return r;
      }, e.ticker.events.on("tick", function() {
        t === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, A(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function x() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function N() {
        if (t === "game") return;
        if (O(), g(false), t = "game", window.__hexoBg = false, document.documentElement.classList.remove("hexo-bg"), !x()) {
          p("town-game-entered");
          return;
        }
        var l = 0;
        function c() {
          if (l++, e.reveal.step >= 1 || !x()) {
            p("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || l >= 40 ? p("town-game-entered") : c();
          }, 400);
        }
        c();
      }
      function i() {
        t !== "bg" && (q(), t = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), p("town-game-left"));
      }
      window.addEventListener("message", function(l) {
        if (!(l.source !== window.parent && l.source !== window)) {
          var c = l.data;
          !c || typeof c != "object" || (c.type === "town-bg-pause" ? g(true) : c.type === "town-bg-resume" ? g(false) : c.type === "town-bg-enter" ? N() : c.type === "town-bg-leave" && i());
        }
      }), window.addEventListener("keydown", function(l) {
        l.key === "Escape" && t === "game" && p("town-game-exit");
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
      }, p("town-bg-ready", {
        mode: t,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var M = 0, I = setInterval(function() {
      M++;
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.respawns && t.world && t.world.intro && t.materials) {
        clearInterval(I);
        try {
          U(t);
        } catch (o) {
          console.warn("[hero] init failed", o);
        }
      }
      M > 240 && clearInterval(I);
    }, 250);
    function U(t) {
      var o = 3.2, p = -0.03;
      try {
        var a = 1 / 0;
        t.scene.updateMatrixWorld(true), t.scene.traverse(function(e) {
          if (e.isMesh && e.geometry && e.name && e.name.toLowerCase().indexOf("wheel") === 0) {
            e.geometry.computeBoundingBox();
            var r = e.geometry.boundingBox;
            if (r) {
              var n = r.min.clone().applyMatrix4(e.matrixWorld);
              n.y < a && (a = n.y);
            }
          }
        }), isFinite(a) && (p = a);
      } catch (e) {
        console.warn("[hero] wheel floor", e);
      }
      var C = t.respawns.getDefault().position;
      t.resourcesLoader.load([
        [
          "heroFolio",
          "hero/hero-folio.glb",
          "gltf"
        ]
      ]).then(function(e) {
        var r = e.heroFolio.scene, n = {};
        r.traverse(function(i) {
          if (i.isBone) {
            i.userData.rest = i.quaternion.clone(), i.name === "tripo1_Left_Limb_0" ? n.legA = i : i.name === "tripo1_Right_Limb_0" ? n.legB = i : i.name === "tripo1_Left_Limb_1" ? n.kneeA = i : i.name === "tripo1_Right_Limb_1" ? n.kneeB = i : i.name === "tripoHead_0" ? n.head = i : i.name === "tripoSpine_0" ? n.spine0 = i : i.name === "tripoSpine_1" ? n.spine1 = i : i.name === "tripo0_Left_Limb_0" ? n.armA = i : i.name === "tripo0_Right_Limb_0" ? n.armB = i : i.name === "tripo1_Left_Limb_3" ? n.toeA = i : i.name === "tripo1_Right_Limb_3" && (n.toeB = i);
            return;
          }
          if (i.isMesh && (i.castShadow = true, i.receiveShadow = true, i.geometry && i.geometry.index)) {
            var l = i.geometry.toNonIndexed();
            l.computeVertexNormals(), i.geometry = l;
          }
        });
        var S = [];
        r.traverse(function(i) {
          i.isMesh && S.push({
            mesh: i,
            orig: i.material
          });
        });
        try {
          t.materials.updateObject(r);
        } catch (i) {
          console.warn("[hero] material", i);
        }
        S.forEach(function(i) {
          i.folio = i.mesh.material;
        });
        function w(i) {
          S.forEach(function(l) {
            var c = i ? l.orig : l.folio;
            c && (l.mesh.material = c, i && (c.color && c.color.setScalar(0.55), c.emissive && (c.emissive.setRGB(0.05, 0.03, 0.06), c.emissiveIntensity = 1), c.needsUpdate = true));
          });
        }
        var f = t.view && t.view.spherical ? t.view.spherical.theta : 0, T = Math.sin(f), D = Math.cos(f), q = Math.cos(f), A = -Math.sin(f), O = C.x + T * 2.15, g = C.z + D * 2.15, x = Math.atan2(-D, T);
        r.scale.setScalar(0.01), r.position.set(O, p - 0.5 * o, g), r.rotation.y = x, window.__heroFolio = r;
        var N = setInterval(function() {
          var i = false;
          try {
            i = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!i) return;
          clearInterval(N), t.scene.add(r);
          var l = 0, c = setInterval(function() {
            l += 1;
            var d = Math.min(1, l / 12);
            r.scale.setScalar(o * (0.2 + 0.8 * d)), d >= 1 && clearInterval(c);
          }, 33), B = {
            x: r.position.clone().set(1, 0, 0),
            y: r.position.clone().set(0, 1, 0),
            z: r.position.clone().set(0, 0, 1)
          }, V = r.position.clone();
          function u(d, _, z) {
            m(d, B[_], z);
          }
          function m(d, _, z) {
            if (d) {
              var R = d.quaternion.clone().setFromAxisAngle(_, z * Math.PI / 180), b = d.parent.quaternion.clone();
              d.parent.getWorldQuaternion(b);
              var P = b.clone().invert().multiply(R).multiply(b).multiply(d.userData.rest);
              d.quaternion.copy(P);
            }
          }
          var v = null, F = null, j = false, Y = 0, G = 0;
          try {
            var Q = t.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: O,
                y: p + 0.5 * o,
                z: g
              },
              colliders: [
                {
                  shape: "cylinder",
                  parameters: [
                    o * 0.5,
                    o * 0.17
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
            v = Q.body, F = Q.colliders[0], F.setSensor(true);
          } catch (d) {
            console.warn("[hero] physics", d);
          }
          function h() {
            if (j = false, w(false), r.rotation.set(0, x, 0), r.position.set(O, p - 0.5 * o, g), r.scale.setScalar(o), k = 0, G = performance.now() + 1800, !!v) try {
              F.setSensor(true), v.setBodyType(t.RAPIER.RigidBodyType.KinematicPositionBased, true), v.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), v.setTranslation({
                x: O,
                y: p + 0.5 * o,
                z: g
              }, true);
            } catch (d) {
              console.warn("[hero] reset", d);
            }
          }
          window.__heroLaunch = W, window.__heroReset = h;
          function W(d, _, z) {
            j = true, w(true), Y = performance.now();
            var R = Math.sqrt(d * d + _ * _) || 1;
            d /= R, _ /= R;
            var b = Math.min(15, Math.max(6, z * 1.5));
            try {
              F.setSensor(false), v.setBodyType(t.RAPIER.RigidBodyType.Dynamic, true), v.wakeUp(), v.setLinearDamping(0.5), v.setAngularDamping(0.9), v.setLinvel({
                x: d * b,
                y: Math.min(4.5, b * 0.32),
                z: _ * b
              }, true), v.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (ne) {
              console.warn("[hero] launch", ne);
            }
            var P = r.rotation.y, K = Math.sin(P), E = Math.cos(P), L = r.position.clone().set(K, 0, E);
            m(n.legA, L, 24), m(n.legB, L, -16), m(n.kneeA, L, -26), m(n.kneeB, L, 20), m(n.armA, L, -60), m(n.armB, L, 60);
          }
          var s = performance.now(), y = s, k = 0, H = 0;
          t.ticker.events.on("tick", function() {
            var d = performance.now(), _ = Math.min(0.05, (d - y) / 1e3);
            y = d;
            var z = (d - s) / 1e3;
            if (j && v) {
              var R = v.translation(), b = v.rotation(), P = r.position.clone().set(0, -o, 0).applyQuaternion(b);
              r.position.set(R.x + P.x, R.y + P.y, R.z + P.z), r.quaternion.set(b.x, b.y, b.z, b.w), (R.y < -5 || d - Y > 5e3) && h();
              return;
            }
            var P = Math.sin(z * 0.5) * 0.75, K = Math.cos(z * 0.5) * 0.75 * 0.5, E = Math.abs(K), L = Math.min(1, E / 0.25);
            k += (0.7 + E * 4) * _, r.position.x = O + q * P, r.position.z = g + A * P;
            for (var ne = Math.atan2(-(A * (K >= 0 ? 1 : -1)), q * (K >= 0 ? 1 : -1)), ee = ne - x; ee > Math.PI; ) ee -= Math.PI * 2;
            for (; ee < -Math.PI; ) ee += Math.PI * 2;
            x += ee * (0.08 + (1 - L) * 0.05), r.rotation.y = x;
            var J = Math.sin(k), ce = Math.cos(x), de = -Math.sin(x), pe = Math.sin(x), ue = Math.cos(x), Z = V.clone().set(pe, 0, ue), se = V.clone().set(ce, 0, de);
            if (m(n.legA, Z, 26 * J * L), m(n.legB, Z, -26 * J * L), m(n.kneeA, Z, -32 * Math.max(0, -J) * L), m(n.kneeB, Z, 32 * Math.max(0, J) * L), m(n.armA, Z, -18 * J * L), m(n.armB, Z, 18 * J * L), u(n.spine1, "y", 4 * J * L), m(n.spine0, se, 2 * Math.cos(k) * L), u(n.head, "y", -2.5 * J * L), m(n.head, se, -1 * Math.cos(k) * L), H++, H % 4 === 0) {
              r.updateMatrixWorld(true);
              var re = 1 / 0;
              r.traverse(function($) {
                if ($.isSkinnedMesh && $.computeBoundingBox && ($.computeBoundingBox(), $.boundingBox)) {
                  var oe = $.boundingBox.min.clone();
                  $.localToWorld(oe), oe.y < re && (re = oe.y);
                }
              }), isFinite(re) && (r.position.y += (p - re) * 0.5);
            }
            if (v) {
              try {
                v.setNextKinematicTranslation({
                  x: r.position.x,
                  y: r.position.y + o,
                  z: r.position.z
                }), v.setNextKinematicRotation({
                  x: r.quaternion.x,
                  y: r.quaternion.y,
                  z: r.quaternion.z,
                  w: r.quaternion.w
                });
              } catch {
              }
              var te = t.physicalVehicle;
              if (te && te.position && d > G) {
                var ie = r.position.x - te.position.x, ae = r.position.z - te.position.z, fe = Math.sqrt(ie * ie + ae * ae), le = te.xzSpeed || 0;
                le > 1.2 && fe < 2.3 && W(ie, ae, le);
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
    var M = 0, I = setInterval(function() {
      M++;
      var t = window.game;
      if (t && t.resourcesLoader && t.scene && t.world && t.world.intro && t.world.benches && t.materials && t.ticker) {
        clearInterval(I);
        try {
          U(t);
        } catch (o) {
          console.warn("[oscar] init failed", o);
        }
      }
      M > 240 && clearInterval(I);
    }, 250);
    function U(t) {
      var o = 0.8, p = 0.276, a = -0.11, C = 0.6, e = -0.02;
      t.resourcesLoader.load([
        [
          "oscarSleep",
          "cat/oscar-sleep.glb",
          "gltf"
        ]
      ]).then(function(r) {
        var n = r.oscarSleep.scene;
        n.traverse(function(h) {
          if (h.isMesh && (h.castShadow = true, h.receiveShadow = true, h.geometry && h.geometry.index)) {
            var W = h.geometry.toNonIndexed();
            W.computeVertexNormals(), h.geometry = W;
          }
        });
        try {
          t.materials.updateObject(n);
        } catch (h) {
          console.warn("[oscar] material", h);
        }
        n.traverse(function(h) {
          !h.isMesh || !h.material || !h.material.emissive || (h.material.emissive.setHex(1708554), h.material.needsUpdate = true);
        });
        for (var S = t.world.intro.center, w = t.world.benches.objects, f = null, T = 1 / 0, D = 0; D < w.length; D++) {
          var q = w[D];
          if (!(!q || !q.visual || !q.visual.object3D)) {
            var A = q.visual.object3D, O = A.position.x - S.x, g = A.position.z - S.z, x = O * O + g * g;
            x < T && (T = x, f = A);
          }
        }
        if (!f) {
          console.warn("[oscar] bench not found");
          return;
        }
        f.updateMatrixWorld(true);
        var N = f.scale ? f.scale.x : 1, i = f.scale ? f.scale.y : 1, l = f.scale ? f.scale.z : 1, c = f.position.y + a * i, B = f.position.clone().set(C * N, 0, e * l);
        B.applyQuaternion(f.quaternion);
        var V = f.position.x + B.x, u = f.position.z + B.z;
        n.scale.setScalar(o), n.position.set(V, c + p * o, u), n.quaternion.copy(f.quaternion);
        var m = null, v = r.oscarSleep.animations && r.oscarSleep.animations[0] || null;
        if (v) {
          m = new ve(n);
          var F = m.clipAction(v);
          F.setLoop(he, 1 / 0), F.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var j = new X(16757350, 16, 3.6, 2);
        j.position.set(V - 0.55, c + 1.25, u + 0.95), t.scene.add(j);
        var Y = new X(9399295, 10, 3.2, 2);
        Y.position.set(V + 0.95, c + 1, u - 0.95), t.scene.add(Y);
        var G = new X(16764826, 4, 2, 2);
        G.position.set(V + 0.15, c + 0.5, u + 1.15), t.scene.add(G), window.__oscarLights = {
          key: j,
          rim: Y,
          fill: G
        };
        var Q = setInterval(function() {
          var h = false;
          try {
            h = t.world.intro.label && t.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (h) {
            clearInterval(Q), t.scene.add(n), window.__oscarFolio = n;
            var W = n.position.y, s = {
              mixer: m,
              action: F || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = s, t.ticker.events.on("tick", function() {
              if (s.ticks++, s.delta = t.ticker.delta, m) m.update(t.ticker.delta);
              else {
                var y = t.ticker.elapsed || 0, k = 1 + 0.013 * Math.sin(y / 4 * Math.PI * 2);
                n.scale.setScalar(o * k), n.position.y = W + 4e-3 * k;
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var M = 1.6, I = -0.11, U = 0.3, t = 0, o = setInterval(function() {
      t++;
      var a = window.game;
      if (a && a.resourcesLoader && a.scene && a.world && a.world.intro && a.world.benches && a.materials && a.ticker && a.respawns && a.physics) {
        clearInterval(o);
        try {
          p(a);
        } catch (C) {
          console.warn("[lady] init failed", C);
        }
      }
      t > 240 && clearInterval(o);
    }, 250);
    function p(a) {
      a.resourcesLoader.load([
        [
          "seasideLady",
          "lady/seaside-lady.glb",
          "gltf"
        ]
      ]).then(function(C) {
        var e = C.seasideLady.scene;
        e.traverse(function(s) {
          if (s.isMesh && (s.castShadow = true, s.receiveShadow = true, s.geometry && s.geometry.index)) {
            var y = s.geometry.toNonIndexed();
            y.computeVertexNormals(), s.geometry = y;
          }
        });
        try {
          a.materials.updateObject(e);
        } catch (s) {
          console.warn("[lady] material", s);
        }
        e.traverse(function(s) {
          !s.isMesh || !s.material || !s.material.emissive || (s.material.emissive.setHex(1840400), s.material.emissiveIntensity = 1, s.material.needsUpdate = true);
        });
        for (var r = a.respawns.getDefault().position, n = [], S = a.world.benches.objects, w = 0; w < S.length; w++) {
          var f = S[w];
          if (!(!f || !f.visual || !f.visual.object3D)) {
            var T = f.visual.object3D, D = T.position.x - r.x, q = T.position.z - r.z;
            n.push({
              obj: T,
              d: D * D + q * q
            });
          }
        }
        n.sort(function(s, y) {
          return s.d - y.d;
        });
        var A = n.length > 1 ? n[1].obj : n[0].obj;
        if (!A) {
          console.warn("[lady] bench not found");
          return;
        }
        A.updateMatrixWorld(true);
        var O = A.scale, g = A.quaternion, x = A.position, N = x.y + I * O.y, i = new we(0, 0, U * O.z).applyQuaternion(g);
        e.scale.setScalar(M), e.position.set(x.x + i.x, N + 0.5 * M + 5e-3, x.z + i.z), e.quaternion.copy(g);
        var l = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, c = new X(16761994, 46, 7, 2);
        c.position.set(e.position.x + 1.4, N + 2.4, e.position.z + 1.8), a.scene.add(c);
        var B = new X(9399295, 26, 6, 2);
        B.position.set(e.position.x - 1.8, N + 2.1, e.position.z - 1.4), a.scene.add(B);
        var V = new X(16767408, 12, 4, 2);
        V.position.set(e.position.x + 0.1, N + 1.5, e.position.z + 2.4), a.scene.add(V);
        var u = null, m = null, v = false, F = 0, j = 0, Y = 2.4;
        try {
          var G = a.physics.getPhysical({
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
                  0.5 * M,
                  0.34 * M
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
          u = G.body, m = G.colliders[0], m.setSensor(true);
          try {
            u.setRotation({
              x: g.x,
              y: g.y,
              z: g.z,
              w: g.w
            }, true);
          } catch {
          }
        } catch (s) {
          console.warn("[lady] physics", s);
        }
        function Q() {
          if (v = false, e.position.copy(l.position), e.quaternion.copy(l.quaternion), e.scale.setScalar(M), j = performance.now() + 1600, !!u) try {
            m.setSensor(true), u.setBodyType(a.RAPIER.RigidBodyType.KinematicPositionBased, true), u.setLinvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setAngvel({
              x: 0,
              y: 0,
              z: 0
            }, true), u.setTranslation({
              x: l.position.x,
              y: l.position.y,
              z: l.position.z
            }, true), u.setRotation({
              x: l.quaternion.x,
              y: l.quaternion.y,
              z: l.quaternion.z,
              w: l.quaternion.w
            }, true);
          } catch (s) {
            console.warn("[lady] reset", s);
          }
        }
        function h(s, y, k) {
          if (!v) {
            v = true, F = performance.now();
            var H = Math.sqrt(s * s + y * y) || 1;
            s /= H, y /= H;
            var d = Math.min(16, Math.max(6, k * 1.6));
            if (e.scale.setScalar(M), !u) {
              var _ = e, z = _.position.x, R = _.position.z, b = _.position.y, P = performance.now(), K = setInterval(function() {
                var E = (performance.now() - P) / 1e3;
                _.position.set(z + s * d * E, b + 3.2 * E - 9.8 * E * E * 0.5, R + y * d * E), _.rotation.x += E * 3, E > 2.4 && (clearInterval(K), Q());
              }, 16);
              return;
            }
            try {
              m.setSensor(false), u.setBodyType(a.RAPIER.RigidBodyType.Dynamic, true), u.wakeUp(), u.setLinearDamping(0.35), u.setAngularDamping(0.6), u.setLinvel({
                x: s * d,
                y: Math.min(5, 2 + d * 0.28),
                z: y * d
              }, true), u.setAngvel({
                x: (Math.random() - 0.5) * 9,
                y: (Math.random() - 0.5) * 9,
                z: (Math.random() - 0.5) * 9
              }, true);
            } catch (E) {
              console.warn("[lady] launch", E);
            }
          }
        }
        window.__ladyLaunch = h, window.__ladyReset = Q;
        var W = setInterval(function() {
          var s = false;
          try {
            s = a.world.intro.label && a.world.intro.label.scale.x > 0.6;
          } catch {
          }
          s && (clearInterval(W), a.scene.add(e), window.__ladyFolio = e, window.__ladyBench = A, a.ticker.events.on("tick", function() {
            var y = performance.now();
            if (u && v) {
              var k = u.translation(), H = u.rotation();
              e.position.set(k.x, k.y, k.z), e.quaternion.set(H.x, H.y, H.z, H.w), (k.y < -5 || y - F > 6e3) && Q();
              return;
            }
            var d = a.ticker.elapsed || 0, _ = 1 + 35e-4 * Math.sin(d / 5 * Math.PI * 2);
            if (e.scale.setScalar(M * _), u) {
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
              var z = a.physicalVehicle;
              if (z && z.position && y > j) {
                var R = e.position.x - z.position.x, b = e.position.z - z.position.z, P = Math.sqrt(R * R + b * b), K = z.xzSpeed || 0;
                K > 1 && P < Y && h(R, b, K);
              }
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
