import { av as h, bM as l } from "./three-BPWavq8k.js";
import { G as m } from "./areas-Cy-leeCm.js";
import "./vendor-BcHL05hW.js";
import "./tweakpane-C39D8eO8.js";
import "./gsap-BcKM28WW.js";
import "./camera-controls-ByztGhiL.js";
h.prototype.copy = function(t, o = true) {
  if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), o === true) for (let e = 0; e < t.children.length; e++) {
    const r = t.children[e];
    this.add(r.clone());
  }
  return this;
};
const n = `
 \u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 
 \u2588\u2588\u2551 \u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557
 \u2588\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D
 \u2588\u2588\u2554\u2550\u2588\u2588\u2557 \u2588\u2588\u2554\u2550\u2550\u2550\u255D 
 \u2588\u2588\u2551  \u2588\u2588\u2557\u2588\u2588\u2551     
 \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     

\u2554\u2550 Intro \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Thanks for visiting my 3D world, you sneaky developer!
\u2551 This homepage is an adaptation of Bruno Simon's open-source folio-2025 (MIT license),
\u2551 with the world content replaced by mine.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Socials \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Mail           \u21D2 z.kp@outlook.com
\u2551 Blog           \u21D2 https://zkpeace.com/blog-cn/
\u2551 GitHub         \u21D2 https://github.com/kp-z
\u2551 Bilibili       \u21D2 https://space.bilibili.com/109909977
\u2551 Instagram      \u21D2 https://www.instagram.com/zkpjy/
\u2551 500px          \u21D2 https://500px.com.cn/kpeace
\u2551 Telegram       \u21D2 https://t.me/kpzhang
\u2551 Zhihu          \u21D2 https://www.zhihu.com/club/1365658701693595648
\u2551 Notion         \u21D2 https://blackwhale.notion.site/f90b2f3ed8af4dea985085052c775aa0
\u2551 Douban         \u21D2 https://www.douban.com/people/twilight0518/
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Debug \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 You can access the debug mode by adding #debug at the end of the URL and reloading.
\u2551 Press [V] to toggle the free camera.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Three.js \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Three.js is the library used to render this 3D world (release: ${l})
\u2551 https://threejs.org/
\u2551 It was created by mr.doob (https://x.com/mrdoob, https://github.com/mrdoob),
\u2551 followed by hundreds of awesome developers,
\u2551 one of which being Sunag (https://x.com/sea3dformat, https://github.com/sunag) who added TSL,
\u2551 enabling the use of both WebGL and WebGPU, making this world possible.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Three.js Journey \u2550\u2550\u2550\u2550\u2557
\u2551 Want to learn Three.js? Bruno made this huge course.
\u2551 https://threejs-journey.com/
\u2551 It contains everything you need to start building awesome stuff with Three.js (and much more).
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Source code \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 The original folio-2025 code is on GitHub under MIT license.
\u2551 https://github.com/brunosimon/folio-2025
\u2551 Even the Blender files are there, so have fun!
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Musics \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 The music you hear was made especially for this portfolio by Kounine (Linktree).
\u2551 https://linktr.ee/Kounine
\u2551 They are now under CC0 license, meaning you can do whatever you want with them!
\u2551 https://github.com/brunosimon/folio-2025/tree/main/static/sounds/musics
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Some more links \u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Rapier (Physics library)  \u21D2 https://rapier.rs/
\u2551 Howler.js (Audio library) \u21D2 https://howlerjs.com/
\u2551 Amatic SC (Fonts)         \u21D2 https://fonts.google.com/specimen/Amatic+SC
\u2551 Nunito (Fonts).           \u21D2 https://fonts.google.com/specimen/Nunito?query=Nunito
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`;
let s = "", a = [];
const d = { letter: "color: #ffffff; font: 400 1em monospace;", pipe: "color: #D66FFF; font: 400 1em monospace;" };
let i = null;
for (let t = 0; t < n.length; t++) {
  const o = n[t], e = o.match(/[╔║═╗╚╝╔╝]/) ? "pipe" : "letter";
  e !== i && (i = e, s += "%c", a.push(d[i])), s += o;
}
const p = [s, ...a];
console.log(...p);
const c = new m();
window.game = c;
