const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DY3K4kyn.js","./three-BPWavq8k.js","./vendor-BcHL05hW.js","./areas-BQGDnaiF.js","./tweakpane-C39D8eO8.js","./gsap-BcKM28WW.js","./camera-controls-ByztGhiL.js"])))=>i.map(i=>d[i]);
import { _ as ge, __tla as __tla_0 } from "./areas-BQGDnaiF.js";
import { bJ as be, bK as ze, bL as fe, Q as pe, V as de } from "./three-BPWavq8k.js";
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
    const D = document.createElement("link").relList;
    if (D && D.supports && D.supports("modulepreload")) return;
    for (const v of document.querySelectorAll('link[rel="modulepreload"]')) r(v);
    new MutationObserver((v) => {
      for (const z of v) if (z.type === "childList") for (const f of z.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function re(v) {
      const z = {};
      return v.integrity && (z.integrity = v.integrity), v.referrerPolicy && (z.referrerPolicy = v.referrerPolicy), v.crossOrigin === "use-credentials" ? z.credentials = "include" : v.crossOrigin === "anonymous" ? z.credentials = "omit" : z.credentials = "same-origin", z;
    }
    function r(v) {
      if (v.ep) return;
      v.ep = true;
      const z = re(v);
      fetch(v.href, z);
    }
  })();
  (function() {
    var V = new URLSearchParams(location.search), D = V.get("bg") === "1", re = window.parent && window.parent !== window, r = D ? "bg" : "game";
    window.__hexoBg = D, D && document.documentElement.classList.add("hexo-bg"), ge(() => import("./index-DY3K4kyn.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var v = document.createElement("style");
    v.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important;width:52px !important;height:34px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important;width:52px !important;height:34px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:rgba(10,18,24,.42) !important;border:1px solid rgba(255,255,255,.38) !important;border-right:2px solid rgba(255,255,255,.78) !important;border-radius:9px !important;box-sizing:border-box !important;width:100% !important;height:100% !important;-webkit-backdrop-filter:blur(8px) !important;backdrop-filter:blur(8px) !important}.menu-trigger .button-inner::after,.map-trigger .button-inner::after{display:none !important}.menu-trigger .icon-container,.map-trigger .icon-container{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}html:not(.is-mode-touch) .menu-trigger:hover .button-inner,html:not(.is-mode-touch) .map-trigger:hover .button-inner{transform:none !important;background:rgba(10,18,24,.6) !important}@media (min-width:801px){.menu .inner{width:min(860px,calc(100% - 160px)) !important;height:min(520px,calc(100% - 160px)) !important}.menu .contents .content .content-inner{width:100% !important}.map{width:760px !important;height:760px !important;max-width:68vmin !important;max-height:68vmin !important}}@media only screen and (max-width:800px) and (orientation:portrait){.menu .inner{height:calc((100% - 54px) * 2 / 3) !important}}", document.head.appendChild(v);
    function z(e, M) {
      if (re) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, M || {}), "*");
      } catch {
      }
    }
    function f(e, M) {
      var s = setInterval(function() {
        var a = false;
        try {
          a = e();
        } catch {
        }
        a && (clearInterval(s), M());
      }, 200);
    }
    var ne = [
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
    ne.forEach(function(e) {
      window.addEventListener(e, function(M) {
        r === "bg" && (M.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && M.cancelable && M.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), f(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, M = false, s = 0, a = 0, l = null, h = 0.17, T = 0.66, I = 2.2;
      function q() {
        l = {
          phi: e.view.spherical.phi,
          baseRatio: e.view.zoom.baseRatio,
          smoothedRatio: e.view.zoom.smoothedRatio,
          focusY: e.view.focusPoint.position.y
        };
      }
      function O() {
        l || q(), e.view.spherical.phi = Math.min(Math.PI * 0.49, l.phi + h);
        var t = window.innerWidth <= 800, n = t ? 0.45 : T, x = t ? 1.5 : I;
        e.view.zoom.baseRatio = n, e.view.zoom.smoothedRatio = n, e.view.focusPoint.position.y = l.focusY + x;
      }
      function P() {
        l && (e.view.spherical.phi = l.phi, e.view.zoom.baseRatio = l.baseRatio, e.view.zoom.smoothedRatio = l.smoothedRatio, e.view.focusPoint.position.y = l.focusY, l = null);
      }
      function N(t) {
        if (M !== t) {
          M = t;
          var n = e.rendering && e.rendering.renderer;
          if (!(!n || !n.setAnimationLoop)) if (t) {
            s = performance.now();
            try {
              n.setAnimationLoop(null);
            } catch {
            }
          } else {
            s || (s = performance.now()), a += performance.now() - s, s = 0;
            try {
              n.setAnimationLoop(function(x) {
                e.ticker.update(x - a);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return M;
      }, e.ticker.events.on("tick", function() {
        r === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, O(), e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function F() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function j() {
        if (r === "game") return;
        if (P(), N(false), r = "game", window.__hexoBg = false, i(), document.documentElement.classList.remove("hexo-bg"), !F()) {
          z("town-game-entered");
          return;
        }
        var t = 0;
        function n() {
          if (t++, e.reveal.step >= 1 || !F()) {
            z("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || t >= 40 ? z("town-game-entered") : n();
          }, 400);
        }
        n();
      }
      function R() {
        r !== "bg" && (i(), q(), r = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), z("town-game-left"));
      }
      window.addEventListener("message", function(t) {
        if (!(t.source !== window.parent && t.source !== window)) {
          var n = t.data;
          !n || typeof n != "object" || (n.type === "town-bg-pause" ? N(true) : n.type === "town-bg-resume" ? N(false) : n.type === "town-bg-enter" ? j() : n.type === "town-bg-leave" && R());
        }
      });
      function Q() {
        try {
          var t = window.game;
          if (!t) return false;
          if (t.menu && (t.menu.state === 1 || t.menu.state === 2) || t.modals && (t.modals.state === 1 || t.modals.state === 2)) return true;
          var n = t.world || {};
          if (n.whispers && n.whispers.menu && n.whispers.menu.inputFlag && n.whispers.menu.inputFlag.isOpen || n.areas && n.areas.circuit && n.areas.circuit.menu && n.areas.circuit.menu.inputFlag && n.areas.circuit.menu.inputFlag.isOpen) return true;
          var x = n.areas || {};
          if (x.projects && (x.projects.state === 3 || x.projects.state === 4) || x.lab && (x.lab.state === 3 || x.lab.state === 4) || x.circuit && (x.circuit.state === 2 || x.circuit.state === 3)) return true;
        } catch {
        }
        return false;
      }
      function ie(t) {
        try {
          if (!t || !t.element) return;
          t.state === 4 && t.element.dispatchEvent(new Event("transitionend"));
        } catch {
        }
      }
      function i() {
        try {
          var t = window.game;
          if (!t) return;
          t.menu && ((t.menu.state === 1 || t.menu.state === 2) && t.menu.close(), ie(t.menu)), t.modals && ((t.modals.state === 1 || t.modals.state === 2) && t.modals.close(), ie(t.modals));
          var n = t.world && t.world.areas || {};
          n.projects && (n.projects.state === 3 || n.projects.state === 4) && n.projects.close(), n.lab && (n.lab.state === 3 || n.lab.state === 4) && n.lab.close();
        } catch {
        }
      }
      window.addEventListener("keydown", function(t) {
        t.key !== "Escape" && t.code !== "Escape" || r === "game" && (Q() || (t.preventDefault(), t.stopImmediatePropagation(), z("town-game-exit")));
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
      function L(t) {
        e.viewport.pixelRatio = t, e.rendering.renderer.setPixelRatio(t), e.rendering.renderer.setSize(e.viewport.width, e.viewport.height);
      }
      function Z(t) {
        var n = t === 1 ? 1.5 : t === 2 ? 1.25 : c.base;
        return Math.min(c.base, n);
      }
      function G() {
        return r === "game" && !M && e.reveal && e.reveal.step >= 2;
      }
      function K(t) {
        if (G() && (c.since || (c.since = t), c.frames++), t - c.t >= 3e3) {
          var n = c.frames * 1e3 / (t - c.t);
          c.frames = 0, c.t = t, G() && c.base > 1.25 && c.since && t - c.since >= 8e3 && (n < 40 ? (c.low++, c.good = 0) : n > 55 ? (c.good++, c.low = 0) : (c.low = 0, c.good = 0), c.low >= 2 && c.stage < 2 ? (c.stage++, L(Z(c.stage)), c.low = 0) : c.good >= 4 && c.stage > 0 && (c.stage--, L(Z(c.stage)), c.good = 0));
        }
        window.requestAnimationFrame(K);
      }
      window.requestAnimationFrame(K), z("town-bg-ready", {
        mode: r,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var V = 0, D = setInterval(function() {
      V++;
      var r = window.game;
      if (r && r.resourcesLoader && r.scene && r.respawns && r.world && r.world.intro && r.materials) {
        clearInterval(D);
        try {
          re(r);
        } catch (v) {
          console.warn("[zkp] init failed", v);
        }
      }
      V > 240 && clearInterval(D);
    }, 250);
    function re(r) {
      var v = 3.2, z = [], f = -0.03;
      function ne() {
        z = [];
        try {
          r.scene.updateMatrixWorld(true), r.scene.traverse(function(s) {
            s.isMesh && s.geometry && s.name && s.name.toLowerCase().indexOf("wheel") === 0 && z.push(s);
          });
        } catch (s) {
          console.warn("[zkp] collect wheels", s);
        }
      }
      function e(s, a, l) {
        var h = 1 / 0;
        try {
          for (var T = 0; T < z.length; T++) {
            var I = z[T];
            if (I.geometry) {
              I.geometry.boundingBox || I.geometry.computeBoundingBox();
              var q = I.geometry.boundingBox;
              if (q) {
                var O = I.matrixWorld.elements;
                if (!(s !== null && Math.hypot(O[12] - s, O[14] - a) > l)) {
                  var P = q.min.clone().applyMatrix4(I.matrixWorld);
                  P.y < h && (h = P.y);
                }
              }
            }
          }
        } catch (N) {
          console.warn("[zkp] wheel floor", N);
        }
        return isFinite(h) ? (f = h, h) : null;
      }
      ne();
      var M = r.respawns.getDefault().position;
      r.resourcesLoader.load([
        [
          "zkpFolio",
          "zkp/zkp-folio.glb?v=564ab35fb30a",
          "gltf"
        ]
      ]).then(function(s) {
        var a = s.zkpFolio.scene, l = {};
        a.traverse(function(i) {
          if (i.isBone) {
            i.userData.rest = i.quaternion.clone(), i.name === "tripo1_Left_Limb_0" ? l.legA = i : i.name === "tripo1_Right_Limb_0" ? l.legB = i : i.name === "tripo1_Left_Limb_1" ? l.kneeA = i : i.name === "tripo1_Right_Limb_1" ? l.kneeB = i : i.name === "tripoHead_0" ? l.head = i : i.name === "tripoSpine_0" ? l.spine0 = i : i.name === "tripoSpine_1" ? l.spine1 = i : i.name === "tripo0_Left_Limb_0" ? l.armA = i : i.name === "tripo0_Right_Limb_0" ? l.armB = i : i.name === "tripo1_Left_Limb_3" ? l.toeA = i : i.name === "tripo1_Right_Limb_3" && (l.toeB = i);
            return;
          }
          if (i.isMesh && (i.castShadow = true, i.receiveShadow = true, i.geometry && i.geometry.index)) {
            var c = i.geometry.toNonIndexed();
            c.computeVertexNormals(), i.geometry = c;
          }
        });
        var h = [];
        a.traverse(function(i) {
          i.isMesh && h.push({
            mesh: i,
            orig: i.material
          });
        });
        try {
          r.materials.updateObject(a);
        } catch (i) {
          console.warn("[zkp] material", i);
        }
        h.forEach(function(i) {
          i.folio = i.mesh.material;
        });
        function T(i) {
          h.forEach(function(c) {
            var L = i ? c.orig : c.folio;
            L && (c.mesh.material = L, i && (L.color && L.color.setScalar(0.55), L.emissive && (L.emissive.setRGB(0.05, 0.03, 0.06), L.emissiveIntensity = 1), L.needsUpdate = true));
          });
        }
        var I = r.view && r.view.spherical ? r.view.spherical.theta : 0, q = Math.sin(I), O = Math.cos(I), P = Math.cos(I), N = -Math.sin(I), F = M.x + q * 2.15, j = M.z + O * 2.15, R = Math.atan2(-O, q), Q = e(F, j, 14);
        (Q === null || !isFinite(Q)) && (Q = f), a.scale.setScalar(0.01), a.position.set(F, Q, j), a.rotation.y = R, window.__zkpFolio = a;
        var ie = setInterval(function() {
          var i = false;
          try {
            i = r.world.intro.label && r.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!i) return;
          clearInterval(ie), r.scene.add(a);
          var c = 0, L = setInterval(function() {
            c += 1;
            var u = Math.min(1, c / 12);
            a.scale.setScalar(v * (0.2 + 0.8 * u)), u >= 1 && clearInterval(L);
          }, 33), Z = {
            x: a.position.clone().set(1, 0, 0),
            y: a.position.clone().set(0, 1, 0),
            z: a.position.clone().set(0, 0, 1)
          }, G = a.position.clone();
          function K(u, o, p) {
            t(u, Z[o], p);
          }
          function t(u, o, p) {
            if (u) {
              var b = u.quaternion.clone().setFromAxisAngle(o, p * Math.PI / 180), g = u.parent.quaternion.clone();
              u.parent.getWorldQuaternion(g);
              var w = g.clone().invert().multiply(b).multiply(g).multiply(u.userData.rest);
              u.quaternion.copy(w);
            }
          }
          var n = null, x = null, Y = false, ue = 0, ee = 0;
          try {
            var se = r.physics.getPhysical({
              type: "kinematicPositionBased",
              position: {
                x: F,
                y: a.position.y + 0.5 * v,
                z: j
              },
              colliders: [
                {
                  shape: "cylinder",
                  parameters: [
                    v * 0.5,
                    v * 0.17
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
            n = se.body, x = se.colliders[0], x.setSensor(true);
          } catch (u) {
            console.warn("[zkp] physics", u);
          }
          function le() {
            Y = false, T(false), a.rotation.set(0, R, 0);
            var u = e(F, j, 14);
            if ((u === null || !isFinite(u)) && (u = a.position.y), a.position.set(F, u, j), a.scale.setScalar(v), A = 0, ee = performance.now() + 1800, !!n) try {
              x.setSensor(true), n.setBodyType(r.RAPIER.RigidBodyType.KinematicPositionBased, true), n.setLinvel({
                x: 0,
                y: 0,
                z: 0
              }, true), n.setAngvel({
                x: 0,
                y: 0,
                z: 0
              }, true), n.setTranslation({
                x: F,
                y: a.position.y + 0.5 * v,
                z: j
              }, true);
            } catch (o) {
              console.warn("[zkp] reset", o);
            }
          }
          window.__zkpLaunch = d, window.__zkpReset = le;
          function d(u, o, p) {
            Y = true, T(true), ue = performance.now();
            var b = Math.sqrt(u * u + o * o) || 1;
            u /= b, o /= b;
            var g = Math.min(15, Math.max(6, p * 1.5));
            try {
              x.setSensor(false), n.setBodyType(r.RAPIER.RigidBodyType.Dynamic, true), n.wakeUp(), n.setLinearDamping(0.5), n.setAngularDamping(0.9), n.setLinvel({
                x: u * g,
                y: Math.min(4.5, g * 0.32),
                z: o * g
              }, true), n.setAngvel({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10
              }, true);
            } catch (E) {
              console.warn("[zkp] launch", E);
            }
            var w = a.rotation.y, C = Math.sin(w), B = Math.cos(w), y = a.position.clone().set(C, 0, B);
            t(l.legA, y, 24), t(l.legB, y, -16), t(l.kneeA, y, -26), t(l.kneeB, y, 20), t(l.armA, y, -60), t(l.armB, y, 60);
          }
          var m = performance.now(), U = m, A = 0, S = 0;
          r.ticker.events.on("tick", function() {
            var u = performance.now(), o = Math.min(0.05, (u - U) / 1e3);
            U = u;
            var p = (u - m) / 1e3;
            if (Y && n) {
              var b = n.translation(), g = n.rotation(), w = a.position.clone().set(0, -v, 0).applyQuaternion(g);
              a.position.set(b.x + w.x, b.y + w.y, b.z + w.z), a.quaternion.set(g.x, g.y, g.z, g.w), (b.y < -5 || u - ue > 5e3) && le();
              return;
            }
            var w = Math.sin(p * 0.5) * 0.75, C = Math.cos(p * 0.5) * 0.75 * 0.5, B = Math.abs(C), y = Math.min(1, B / 0.25);
            A += (0.7 + B * 4) * o, a.position.x = F + P * w, a.position.z = j + N * w;
            for (var E = Math.atan2(-(N * (C >= 0 ? 1 : -1)), P * (C >= 0 ? 1 : -1)), k = E - R; k > Math.PI; ) k -= Math.PI * 2;
            for (; k < -Math.PI; ) k += Math.PI * 2;
            R += k * (0.08 + (1 - y) * 0.05), a.rotation.y = R;
            var _ = Math.sin(A), W = Math.cos(R), $ = -Math.sin(R), ae = Math.sin(R), X = Math.cos(R), H = G.clone().set(ae, 0, X), J = G.clone().set(W, 0, $);
            if (t(l.legA, H, 26 * _ * y), t(l.legB, H, -26 * _ * y), t(l.kneeA, H, -32 * Math.max(0, -_) * y), t(l.kneeB, H, 32 * Math.max(0, _) * y), t(l.armA, H, -18 * _ * y), t(l.armB, H, 18 * _ * y), K(l.spine1, "y", 4 * _ * y), t(l.spine0, J, 2 * Math.cos(A) * y), K(l.head, "y", -2.5 * _ * y), t(l.head, J, -1 * Math.cos(A) * y), S++, S % 4 === 0) {
              a.updateMatrixWorld(true);
              var te = 1 / 0;
              if (a.traverse(function(ce) {
                if (ce.isSkinnedMesh && ce.computeBoundingBox && (ce.computeBoundingBox(), ce.boundingBox)) {
                  var we = ce.boundingBox.min.clone();
                  ce.localToWorld(we), we.y < te && (te = we.y);
                }
              }), isFinite(te)) {
                var oe = e(a.position.x, a.position.z, 14);
                (oe === null || !isFinite(oe)) && (oe = f), oe !== null && isFinite(oe) && (a.position.y += (oe - te) * 0.5);
              }
            }
            if (n) {
              try {
                n.setNextKinematicTranslation({
                  x: a.position.x,
                  y: a.position.y + v,
                  z: a.position.z
                }), n.setNextKinematicRotation({
                  x: a.quaternion.x,
                  y: a.quaternion.y,
                  z: a.quaternion.z,
                  w: a.quaternion.w
                });
              } catch {
              }
              var ve = r.physicalVehicle;
              if (ve && ve.position && u > ee) {
                var me = a.position.x - ve.position.x, he = a.position.z - ve.position.z, xe = Math.sqrt(me * me + he * he), ye = ve.xzSpeed || 0;
                ye > 1.2 && xe < 2.3 && d(me, he, ye);
              }
            }
          }, 9), console.log("[zkp] folio hero loaded");
        }, 300);
      }).catch(function(s) {
        console.warn("[zkp] load failed", s);
      });
    }
  })();
  (function() {
    var V = 0, D = setInterval(function() {
      V++;
      var r = window.game;
      if (r && r.resourcesLoader && r.scene && r.world && r.world.intro && r.world.benches && r.materials && r.ticker) {
        clearInterval(D);
        try {
          re(r);
        } catch (v) {
          console.warn("[oscar] init failed", v);
        }
      }
      V > 240 && clearInterval(D);
    }, 250);
    function re(r) {
      var v = 0.8, z = 0.276, f = -0.11, ne = 0.6, e = -0.02;
      r.resourcesLoader.load([
        [
          "oscarSleep",
          "oscar/oscar-sleep.glb?v=fb6d9a0c6b9b",
          "gltf"
        ]
      ]).then(function(M) {
        var s = M.oscarSleep.scene;
        s.traverse(function(o) {
          if (o.isMesh && (o.castShadow = true, o.receiveShadow = true, o.geometry && o.geometry.index)) {
            var p = o.geometry.toNonIndexed();
            p.computeVertexNormals(), o.geometry = p;
          }
        });
        try {
          r.materials.updateObject(s);
        } catch (o) {
          console.warn("[oscar] material", o);
        }
        s.traverse(function(o) {
          !o.isMesh || !o.material || !o.material.emissive || (o.material.emissive.setHex(1708554), o.material.needsUpdate = true);
        });
        for (var a = r.world.intro.center, l = r.world.benches.objects, h = null, T = null, I = 1 / 0, q = 0; q < l.length; q++) {
          var O = l[q];
          if (!(!O || !O.visual || !O.visual.object3D)) {
            var P = O.visual.object3D, N = P.position.x - a.x, F = P.position.z - a.z, j = N * N + F * F;
            j < I && (I = j, h = P, T = O);
          }
        }
        if (!h) {
          console.warn("[oscar] bench not found");
          return;
        }
        window.__oscarBench = h, h.updateMatrixWorld(true);
        var R = h.scale ? h.scale.x : 1, Q = h.scale ? h.scale.y : 1, ie = h.scale ? h.scale.z : 1, i = h.position.y + f * Q, c = h.position.clone().set(ne * R, 0, e * ie);
        c.applyQuaternion(h.quaternion);
        var L = h.position.x + c.x, Z = h.position.z + c.z;
        s.scale.setScalar(v), s.position.set(L, i + z * v, Z), s.quaternion.copy(h.quaternion);
        var G = null, K = M.oscarSleep.animations && M.oscarSleep.animations[0] || null;
        if (K) {
          G = new be(s);
          var t = G.clipAction(K);
          t.setLoop(ze, 1 / 0), t.play();
        } else console.warn("[oscar] no animation clip, fallback to procedural breathing");
        var n = new fe(16757350, 16, 3.6, 2);
        n.position.set(L - 0.55, i + 1.25, Z + 0.95), r.scene.add(n);
        var x = new fe(9399295, 10, 3.2, 2);
        x.position.set(L + 0.95, i + 1, Z - 0.95), r.scene.add(x);
        var Y = new fe(16764826, 4, 2, 2);
        Y.position.set(L + 0.15, i + 0.5, Z + 1.15), r.scene.add(Y), window.__oscarLights = {
          key: n,
          rim: x,
          fill: Y
        };
        function ue(o) {
          if (!o || !o.physical || !o.physical.body) return null;
          var p = o.physical.body, b = p.translation(), g = p.rotation(), w = {
            x: b.x,
            y: b.y,
            z: b.z
          }, C = new pe(g.x, g.y, g.z, g.w);
          try {
            p.setLinearDamping(6), p.setAngularDamping(6);
          } catch {
          }
          var B = {
            offset: {
              x: 0,
              y: 0,
              z: 0
            }
          };
          return r.ticker.events.on("tick", function() {
            try {
              var y = p.translation(), E = y.x - w.x, k = y.y - w.y, _ = y.z - w.z, W = Math.sqrt(E * E + _ * _);
              if (p.isSleeping() && W < 0.02) {
                B.offset.x = E, B.offset.y = k, B.offset.z = _;
                return;
              }
              p.isSleeping() && p.wakeUp();
              var $ = Math.min(1, 0.06 / Math.max(W, 1e-6));
              p.setTranslation({
                x: w.x + E * $ * 0.75,
                y: w.y,
                z: w.z + _ * $ * 0.75
              }, true);
              var ae = p.linvel();
              p.setLinvel({
                x: ae.x * 0.5,
                y: ae.y * 0.5,
                z: ae.z * 0.5
              }, true);
              var X = p.angvel();
              p.setAngvel({
                x: X.x * 0.5,
                y: X.y * 0.5,
                z: X.z * 0.5
              }, true);
              var H = p.rotation(), J = new pe(H.x, H.y, H.z, H.w);
              J.slerp(C, 0.3), p.setRotation({
                x: J.x,
                y: J.y,
                z: J.z,
                w: J.w
              }, true);
              var te = p.translation();
              B.offset.x = te.x - w.x, B.offset.y = te.y - w.y, B.offset.z = te.z - w.z;
            } catch {
            }
          }, 11), B;
        }
        var ee = ue(T), se = s.position.clone(), le = s.quaternion.clone(), d = 0, m = 0, U = {
          x: 0,
          z: 0
        }, A = 0;
        function S(o, p) {
          var b = performance.now();
          if (!(b < A)) {
            A = b + 900, d = b, m = b + 650;
            var g = Math.sqrt(o * o + p * p) || 1;
            U.x = o / g, U.z = p / g;
            try {
              var w = r.audio.groups.get("hitDefault");
              w && w.playRandomNext(1, s.position);
            } catch {
            }
          }
        }
        window.__oscarHit = S;
        var u = setInterval(function() {
          var o = false;
          try {
            o = r.world.intro.label && r.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (o) {
            clearInterval(u), r.scene.add(s), window.__oscarFolio = s, s.position.y;
            var p = {
              mixer: G,
              action: t || null,
              ticks: 0,
              delta: 0
            };
            window.__oscarDebug = p, r.ticker.events.on("tick", function() {
              var b = performance.now();
              if (p.ticks++, p.delta = r.ticker.delta, G) G.update(r.ticker.delta);
              else {
                var g = r.ticker.elapsed || 0, w = 1 + 0.013 * Math.sin(g / 4 * Math.PI * 2);
                s.scale.setScalar(v * w);
              }
              var C = ee ? ee.offset.x : 0, B = ee ? ee.offset.z : 0, y = se.x + C, E = se.y, k = se.z + B;
              if (b < m) {
                var _ = (b - d) / 650, W = 1 - _, $ = Math.sin(_ * Math.PI * 6) * W, ae = Math.sin(Math.min(1, _) * Math.PI) * 0.12;
                s.position.set(y + U.x * 0.05 * $, E + ae, k + U.z * 0.05 * $), s.quaternion.copy(le).multiply(new pe().setFromAxisAngle(new de(0, 0, 1), $ * 0.25));
              } else s.position.set(y, E, k), s.quaternion.copy(le);
              var X = r.physicalVehicle;
              if (X && X.position) {
                var H = s.position.x - X.position.x, J = s.position.z - X.position.z, te = Math.sqrt(H * H + J * J), oe = X.xzSpeed || 0;
                oe > 1 && te < 2.2 && S(H, J);
              }
            }, 12);
          }
        }, 100);
      });
    }
  })();
  (function() {
    var V = 1.6, D = -0.11, re = 0.3, r = 0, v = setInterval(function() {
      r++;
      var f = window.game;
      if (f && f.resourcesLoader && f.scene && f.world && f.world.intro && f.world.benches && f.materials && f.ticker && f.respawns && f.physics) {
        clearInterval(v);
        try {
          z(f);
        } catch (ne) {
          console.warn("[zc] init failed", ne);
        }
      }
      r > 240 && clearInterval(v);
    }, 250);
    function z(f) {
      f.resourcesLoader.load([
        [
          "zc",
          "zc/zc-folio.glb?v=27c355ac0a59",
          "gltf"
        ]
      ]).then(function(ne) {
        var e = ne.zc.scene;
        e.traverse(function(d) {
          if (d.isMesh && (d.castShadow = true, d.receiveShadow = true, d.geometry && d.geometry.index)) {
            var m = d.geometry.toNonIndexed();
            m.computeVertexNormals(), d.geometry = m;
          }
        });
        try {
          f.materials.updateObject(e);
        } catch (d) {
          console.warn("[zc] material", d);
        }
        e.traverse(function(d) {
          !d.isMesh || !d.material || !d.material.emissive || (d.material.emissive.setHex(1840400), d.material.emissiveIntensity = 1, d.material.needsUpdate = true);
        });
        for (var M = f.respawns.getDefault().position, s = [], a = f.world.benches.objects, l = 0; l < a.length; l++) {
          var h = a[l];
          if (!(!h || !h.visual || !h.visual.object3D)) {
            var T = h.visual.object3D, I = T.position.x - M.x, q = T.position.z - M.z;
            s.push({
              item: h,
              obj: T,
              d: I * I + q * q
            });
          }
        }
        s.sort(function(d, m) {
          return d.d - m.d;
        });
        var O = s.length > 1 ? s[1] : s[0], P = O.obj, N = O.item;
        if (!P) {
          console.warn("[zc] bench not found");
          return;
        }
        P.updateMatrixWorld(true);
        var F = P.scale, j = P.quaternion, R = P.position, Q = R.y + D * F.y, ie = new de(0, 0, re * F.z).applyQuaternion(j);
        e.scale.setScalar(V), e.position.set(R.x + ie.x, Q + 0.5 * V + 5e-3, R.z + ie.z), e.quaternion.copy(j);
        var i = {
          position: e.position.clone(),
          quaternion: e.quaternion.clone()
        }, c = new fe(16761994, 46, 7, 2);
        c.position.set(e.position.x + 1.4, Q + 2.4, e.position.z + 1.8), f.scene.add(c);
        var L = new fe(9399295, 26, 6, 2);
        L.position.set(e.position.x - 1.8, Q + 2.1, e.position.z - 1.4), f.scene.add(L);
        var Z = new fe(16767408, 12, 4, 2);
        Z.position.set(e.position.x + 0.1, Q + 1.5, e.position.z + 2.4), f.scene.add(Z);
        function G(d) {
          if (!d || !d.physical || !d.physical.body) return null;
          var m = d.physical.body, U = m.translation(), A = m.rotation(), S = {
            x: U.x,
            y: U.y,
            z: U.z
          }, u = new pe(A.x, A.y, A.z, A.w);
          try {
            m.setLinearDamping(6), m.setAngularDamping(6);
          } catch {
          }
          var o = {
            offset: {
              x: 0,
              y: 0,
              z: 0
            }
          };
          return f.ticker.events.on("tick", function() {
            try {
              var p = m.translation(), b = p.x - S.x, g = p.y - S.y, w = p.z - S.z, C = Math.sqrt(b * b + w * w);
              if (m.isSleeping() && C < 0.02) {
                o.offset.x = b, o.offset.y = g, o.offset.z = w;
                return;
              }
              m.isSleeping() && m.wakeUp();
              var B = Math.min(1, 0.06 / Math.max(C, 1e-6));
              m.setTranslation({
                x: S.x + b * B * 0.75,
                y: S.y,
                z: S.z + w * B * 0.75
              }, true);
              var y = m.linvel();
              m.setLinvel({
                x: y.x * 0.5,
                y: y.y * 0.5,
                z: y.z * 0.5
              }, true);
              var E = m.angvel();
              m.setAngvel({
                x: E.x * 0.5,
                y: E.y * 0.5,
                z: E.z * 0.5
              }, true);
              var k = m.rotation(), _ = new pe(k.x, k.y, k.z, k.w);
              _.slerp(u, 0.3), m.setRotation({
                x: _.x,
                y: _.y,
                z: _.z,
                w: _.w
              }, true);
              var W = m.translation();
              o.offset.x = W.x - S.x, o.offset.y = W.y - S.y, o.offset.z = W.z - S.z;
            } catch {
            }
          }, 11), o;
        }
        var K = G(N), t = 0, n = 0, x = {
          x: 0,
          z: 0
        }, Y = 0, ue = 2.4;
        function ee(d, m, U) {
          var A = performance.now();
          if (!(A < Y)) {
            Y = A + 900, t = A, n = A + 700;
            var S = Math.sqrt(d * d + m * m) || 1;
            x.x = d / S, x.z = m / S;
            try {
              var u = f.audio.groups.get("hitDefault");
              u && u.playRandomNext(1, e.position);
            } catch {
            }
          }
        }
        function se() {
          e.position.copy(i.position), e.quaternion.copy(i.quaternion), e.scale.setScalar(V), Y = performance.now() + 600;
        }
        window.__zcHit = ee, window.__zcReset = se;
        var le = setInterval(function() {
          var d = false;
          try {
            d = f.world.intro.label && f.world.intro.label.scale.x > 0.6;
          } catch {
          }
          d && (clearInterval(le), f.scene.add(e), window.__zcFolio = e, window.__zcBench = P, f.ticker.events.on("tick", function() {
            var m = performance.now(), U = f.ticker.elapsed || 0, A = K ? K.offset.x : 0, S = K ? K.offset.z : 0, u = i.position.x + A, o = i.position.z + S;
            if (m < n) {
              var p = (m - t) / 700, b = 1 - p, g = Math.sin(p * Math.PI * 5) * b, w = g * 0.16, C = g * 0.1, B = new pe().setFromAxisAngle(new de(1, 0, 0), w), y = new pe().setFromAxisAngle(new de(0, 0, 1), C);
              e.position.set(u + x.x * 0.06 * g, i.position.y + Math.max(0, g) * 0.015, o + x.z * 0.06 * g), e.quaternion.copy(i.quaternion).multiply(B).multiply(y), e.scale.setScalar(V);
            } else {
              e.position.set(u, i.position.y, o), e.quaternion.copy(i.quaternion);
              var E = 1 + 35e-4 * Math.sin(U / 5 * Math.PI * 2);
              e.scale.setScalar(V * E);
            }
            var k = f.physicalVehicle;
            if (k && k.position && m > Y) {
              var _ = i.position.x - k.position.x, W = i.position.z - k.position.z, $ = Math.sqrt(_ * _ + W * W), ae = k.xzSpeed || 0;
              ae > 1 && $ < ue && ee(_, W);
            }
          }, 9));
        }, 100);
      });
    }
  })();
});
