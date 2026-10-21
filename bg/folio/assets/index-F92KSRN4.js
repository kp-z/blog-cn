const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Sd-XrHWD.js","./three-CIs3HPlJ.js","./vendor-BcHL05hW.js","./areas-DoOSkXCo.js","./tweakpane-C39D8eO8.js","./gsap-BcKM28WW.js","./camera-controls-ByztGhiL.js"])))=>i.map(i=>d[i]);
import { _ as H, __tla as __tla_0 } from "./areas-DoOSkXCo.js";
import "./tweakpane-C39D8eO8.js";
import "./vendor-BcHL05hW.js";
import "./three-CIs3HPlJ.js";
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
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver((n) => {
      for (const o of n) if (o.type === "childList") for (const d of o.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function B(n) {
      const o = {};
      return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(n) {
      if (n.ep) return;
      n.ep = true;
      const o = B(n);
      fetch(n.href, o);
    }
  })();
  (function() {
    var M = new URLSearchParams(location.search), c = M.get("bg") === "1", B = window.parent && window.parent !== window, r = c ? "bg" : "game";
    window.__hexoBg = c, c && document.documentElement.classList.add("hexo-bg"), H(() => import("./index-Sd-XrHWD.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
    var n = document.createElement("style");
    n.textContent = "html.hexo-bg .menu-trigger,html.hexo-bg .map-trigger,html.hexo-bg .touch-buttons,html.hexo-bg .notifications,html.hexo-bg .modals,html.hexo-bg .menu,html.hexo-bg .fonts-loader{display:none !important}html.hexo-bg,html.hexo-bg *{cursor:default !important}.menu-trigger{top:auto !important;bottom:78px !important;right:18px !important}.map-trigger{top:auto !important;bottom:132px !important;right:18px !important}.menu-trigger .button-inner,.map-trigger .button-inner{background:radial-gradient(ellipse at bottom right,#C21515,#46123B) !important}", document.head.appendChild(n);
    var o = document.createElement("button");
    o.id = "hint", o.type = "button", o.textContent = "?", o.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:2147483000;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.85);background:rgba(255,250,241,.72);color:#31413d;font:700 15px/1 ui-monospace,Menlo,monospace;cursor:help;display:none;", document.body.appendChild(o), c || (o.style.display = "flex");
    function d(e, l) {
      if (B) try {
        window.parent.postMessage(Object.assign({
          type: e
        }, l || {}), "*");
      } catch {
      }
    }
    function I(e, l) {
      var u = setInterval(function() {
        var h = false;
        try {
          h = e();
        } catch {
        }
        h && (clearInterval(u), l());
      }, 200);
    }
    var i = [
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
    i.forEach(function(e) {
      window.addEventListener(e, function(l) {
        r === "bg" && (l.stopImmediatePropagation(), e !== "pointermove" && e !== "touchmove" && l.cancelable && l.preventDefault());
      }, {
        capture: true,
        passive: false
      });
    }), I(function() {
      return window.game && window.game.view && window.game.view.spherical && window.game.world && window.game.world.intro && window.game.rendering && window.game.ticker && window.game.reveal && window.game.reveal.step >= 0 && window.game.world.intro.label && window.game.world.intro.label.scale.x > 0.6;
    }, function() {
      var e = window.game, l = false, u = 0, h = 0;
      function v(s) {
        if (l !== s) {
          l = s;
          var t = e.rendering && e.rendering.renderer;
          if (!(!t || !t.setAnimationLoop)) if (s) {
            u = performance.now();
            try {
              t.setAnimationLoop(null);
            } catch {
            }
          } else {
            u || (u = performance.now()), h += performance.now() - u, u = 0;
            try {
              t.setAnimationLoop(function(p) {
                e.ticker.update(p - h);
              });
            } catch {
            }
          }
        }
      }
      window.__folioPaused = function() {
        return l;
      }, e.ticker.events.on("tick", function() {
        r === "bg" && (e.view.spherical.theta += e.ticker.delta * 0.06, e.world.intro && (e.world.intro.label && (e.world.intro.label.visible = false), e.world.intro.soundButton && e.world.intro.soundButton.mesh && (e.world.intro.soundButton.mesh.visible = false)));
      }, 9);
      function A() {
        return !!(e.world && e.world.intro && e.reveal && e.reveal.step < 1);
      }
      function P() {
        if (r === "game") return;
        if (v(false), r = "game", window.__hexoBg = false, document.documentElement.classList.remove("hexo-bg"), o.style.display = "flex", !A()) {
          d("town-game-entered");
          return;
        }
        var s = 0;
        function t() {
          if (s++, e.reveal.step >= 1 || !A()) {
            d("town-game-entered");
            return;
          }
          try {
            e.inputs.events.trigger("introStart");
          } catch {
          }
          setTimeout(function() {
            e.reveal.step >= 1 || s >= 40 ? d("town-game-entered") : t();
          }, 400);
        }
        t();
      }
      function k() {
        r !== "bg" && (r = "bg", window.__hexoBg = true, document.documentElement.classList.add("hexo-bg"), o.style.display = "none", d("town-game-left"));
      }
      window.addEventListener("message", function(s) {
        if (!(s.source !== window.parent && s.source !== window)) {
          var t = s.data;
          !t || typeof t != "object" || (t.type === "town-bg-pause" ? v(true) : t.type === "town-bg-resume" ? v(false) : t.type === "town-bg-enter" ? P() : t.type === "town-bg-leave" && k());
        }
      });
      var m = 0;
      o.addEventListener("pointerdown", function() {
        r === "game" && (m = setTimeout(function() {
          m = 0, d("town-game-exit");
        }, 800));
      }), [
        "pointerup",
        "pointercancel",
        "pointerleave"
      ].forEach(function(s) {
        o.addEventListener(s, function() {
          m && (clearTimeout(m), m = 0);
        });
      }), window.addEventListener("keydown", function(s) {
        s.key === "Escape" && r === "game" && d("town-game-exit");
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
      }, d("town-bg-ready", {
        mode: r,
        caps: [
          "enter",
          "leave"
        ]
      });
    });
  })();
  (function() {
    var M = 0, c = setInterval(function() {
      M++;
      var r = window.game;
      if (r && r.resourcesLoader && r.scene && r.respawns && r.world && r.world.intro && r.materials) {
        clearInterval(c);
        try {
          B(r);
        } catch (n) {
          console.warn("[hero] init failed", n);
        }
      }
      M > 240 && clearInterval(c);
    }, 250);
    function B(r) {
      var n = 3.2, o = 0.65, d = r.respawns.getDefault().position;
      r.resourcesLoader.load([
        [
          "heroFolio",
          "hero/hero-folio.glb",
          "gltf"
        ]
      ]).then(function(I) {
        var i = I.heroFolio.scene, e = {};
        i.traverse(function(t) {
          if (t.isBone) {
            t.userData.rest = t.quaternion.clone(), t.name === "tripo1_Left_Limb_0" ? e.legA = t : t.name === "tripo1_Right_Limb_0" ? e.legB = t : t.name === "tripo1_Left_Limb_1" ? e.kneeA = t : t.name === "tripo1_Right_Limb_1" ? e.kneeB = t : t.name === "tripoHead_0" ? e.head = t : t.name === "tripoSpine_0" ? e.spine0 = t : t.name === "tripoSpine_1" ? e.spine1 = t : t.name === "tripo1_Left_Limb_3" ? e.toeA = t : t.name === "tripo1_Right_Limb_3" && (e.toeB = t);
            return;
          }
          if (t.isMesh && (t.castShadow = true, t.receiveShadow = true, t.geometry && t.geometry.index)) {
            var p = t.geometry.toNonIndexed();
            p.computeVertexNormals(), t.geometry = p;
          }
        });
        try {
          r.materials.updateObject(i);
        } catch (t) {
          console.warn("[hero] material", t);
        }
        var l = r.view && r.view.spherical ? r.view.spherical.theta : 0, u = Math.sin(l), h = Math.cos(l), v = Math.cos(l), A = -Math.sin(l), P = d.x + u * 2.15, k = d.z + h * 2.15, m = Math.atan2(-h, u);
        i.scale.setScalar(0.01), i.position.set(P, o - 0.5 * n, k), i.rotation.y = m, window.__heroFolio = i;
        var s = setInterval(function() {
          var t = false;
          try {
            t = r.world.intro.label && r.world.intro.label.scale.x > 0.6;
          } catch {
          }
          if (!t) return;
          clearInterval(s), r.scene.add(i);
          var p = 0, D = setInterval(function() {
            p += 1;
            var a = Math.min(1, p / 12);
            i.scale.setScalar(n * (0.2 + 0.8 * a)), a >= 1 && clearInterval(D);
          }, 33), N = {
            x: i.position.clone().set(1, 0, 0),
            y: i.position.clone().set(0, 1, 0),
            z: i.position.clone().set(0, 0, 1)
          };
          function w(a, x, _) {
            if (a) {
              var O = a.quaternion.clone().setFromAxisAngle(N[x], _ * Math.PI / 180), y = a.parent.quaternion.clone();
              a.parent.getWorldQuaternion(y);
              var F = y.clone().invert().multiply(O).multiply(y).multiply(a.userData.rest);
              a.quaternion.copy(F);
            }
          }
          var g = i.position.clone();
          i.position.y = 0, i.scale.setScalar(n), i.updateMatrixWorld(true);
          var b = 1 / 0;
          e.toeA && (e.toeA.getWorldPosition(g), b = Math.min(b, g.y)), e.toeB && (e.toeB.getWorldPosition(g), b = Math.min(b, g.y));
          var z = 1 / 0;
          i.traverse(function(a) {
            if (a.isMesh && a.geometry) {
              a.geometry.computeBoundingBox();
              var x = a.geometry.boundingBox;
              if (x) {
                var _ = x.min.clone().applyMatrix4(a.matrixWorld);
                z = Math.min(z, _.y);
              }
            }
          });
          var j = isFinite(b) && isFinite(z) ? b - z : 0.05 * n;
          i.position.y = o - 0.5 * n;
          var T = performance.now(), q = T, S = 0;
          r.ticker.events.on("tick", function() {
            var a = performance.now(), x = Math.min(0.05, (a - q) / 1e3);
            q = a;
            var _ = (a - T) / 1e3, O = Math.sin(_ * 0.9) * 0.8, y = Math.cos(_ * 0.9) * 0.8 * 0.9, F = Math.abs(y), f = Math.min(1, F / 0.3);
            S += (0.8 + F * 6) * x, i.position.x = P + v * O, i.position.z = k + A * O;
            for (var G = Math.atan2(-(A * (y >= 0 ? 1 : -1)), v * (y >= 0 ? 1 : -1)), E = G - m; E > Math.PI; ) E -= Math.PI * 2;
            for (; E < -Math.PI; ) E += Math.PI * 2;
            m += E * (0.08 + (1 - f) * 0.05), i.rotation.y = m;
            var L = Math.sin(S);
            w(e.legA, "z", 24 * L * f), w(e.legB, "z", -24 * L * f), w(e.kneeA, "z", -18 * Math.max(0, -L) * f), w(e.kneeB, "z", 18 * Math.max(0, L) * f), w(e.spine1, "y", 5 * L * f), w(e.spine0, "z", 2.2 * Math.cos(S) * f), w(e.head, "y", -3 * L * f), w(e.head, "z", -1.2 * Math.cos(S) * f);
            var C = 1 / 0, R = 1 / 0;
            e.toeA && (e.toeA.getWorldPosition(g), C = g.y), e.toeB && (e.toeB.getWorldPosition(g), R = g.y);
            var W = Math.min(C, R) - j;
            if (isFinite(W)) {
              var V = o - W;
              i.position.y += V * 0.5;
            }
          }, 9), console.log("[hero] folio hero loaded");
        }, 300);
      }).catch(function(I) {
        console.warn("[hero] load failed", I);
      });
    }
  })();
});
