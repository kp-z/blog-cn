import { av as h, bJ as l } from "./three-CIs3HPlJ.js";
import { G as m } from "./areas-DoOSkXCo.js";
import "./vendor-BcHL05hW.js";
import "./tweakpane-C39D8eO8.js";
import "./gsap-BcKM28WW.js";
import "./camera-controls-ByztGhiL.js";
h.prototype.copy = function(t, o = true) {
  if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), o === true) for (let e = 0; e < t.children.length; e++) {
    const a = t.children[e];
    this.add(a.clone());
  }
  return this;
};
const n = `
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557                   
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D                   
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557                   
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551                   
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551                   
\u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D                   
                                                                       
\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557     \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551
\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551
\u2588\u2588\u2551     \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551     \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D
\u255A\u2550\u255D      \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u255D      \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D 

\u2554\u2550 Intro \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Thank you for visiting my portfolio, you sneaky developer!
\u2551 If you are curious about the stack and how I built this project, here\u2019s everything you need to know.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Socials \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Mail           \u21D2 simon.bruno.77@gmail.com
\u2551 X              \u21D2 https://x.com/bruno_simon
\u2551 BlueSKy        \u21D2 https://bsky.app/profile/bruno-simon.bsky.social
\u2551 Discord public \u21D2 https://discord.com/channels/769928116701233152/1445064878384480288
\u2551 Discord PM     \u21D2 https://discord.com/users/202907325722263553
\u2551 Youtube        \u21D2 https://www.youtube.com/@BrunoSimon
\u2551 Twitch         \u21D2 https://www.twitch.tv/bruno_simon_dev
\u2551 GitHub         \u21D2 https://github.com/brunosimon
\u2551 LinkedIn       \u21D2 https://www.linkedin.com/in/simonbruno77/
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Debug \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 You can access the debug mode by adding #debug at the end of the URL and reloading.
\u2551 Press [V] to toggle the free camera.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Three.js \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Three.js is the library I\u2019m using to render this 3D world (release: ${l})
\u2551 https://threejs.org/
\u2551 It was created by mr.doob (https://x.com/mrdoob, https://github.com/mrdoob),
\u2551 followed by hundreds of awesome developers,
\u2551 one of which being Sunag (https://x.com/sea3dformat, https://github.com/sunag) who added TSL,
\u2551 enabling the use of both WebGL and WebGPU, making this portfolio possible.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Three.js Journey \u2550\u2550\u2550\u2550\u2557
\u2551 If you want to learn Three.js, I got you covered with this huge course.
\u2551 https://threejs-journey.com/
\u2551 It contains everything you need to start building awesome stuff with Three.js (and much more).
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Devlogs \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 I\u2019ve been making devlogs since the very start of this portfolio
\u2551 and you can find them all on my Youtube channel.
\u2551 https://www.youtube.com/@BrunoSimon
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Source code \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 The code is available on GitHub under MIT license. Even the Blender files are there, so have fun!
\u2551 https://github.com/brunosimon/folio-2025
\u2551 For security reasons, I\u2019m not sharing the server code, but the portfolio works without it.
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Musics \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551 The music you hear was made especially for this portfolio by the awesome Kounine (Linktree).
\u2551 https://linktr.ee/Kounine
\u2551 They are now under CC0 license, meaning you can do whatever you want with them!
\u2551 Download them here.
\u2551 https://github.com/brunosimon/folio-2025/tree/main/static/sounds/musics
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

\u2554\u2550 Some more links \u2550\u2550\u2550\u2550\u2550\u2557
\u2551 Rapier (Physics library)  \u21D2 https://rapier.rs/
\u2551 Howler.js (Audio library) \u21D2 https://howlerjs.com/
\u2551 Amatic SC (Fonts)         \u21D2 https://fonts.google.com/specimen/Amatic+SC
\u2551 Nunito (Fonts).           \u21D2 https://fonts.google.com/specimen/Nunito?query=Nunito
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`;
let s = "", r = [];
const d = { letter: "color: #ffffff; font: 400 1em monospace;", pipe: "color: #D66FFF; font: 400 1em monospace;" };
let i = null;
for (let t = 0; t < n.length; t++) {
  const o = n[t], e = o.match(/[╔║═╗╚╝╔╝]/) ? "pipe" : "letter";
  e !== i && (i = e, s += "%c", r.push(d[i])), s += o;
}
const c = [s, ...r];
console.log(...c);
const u = new m();
window.game = u;
