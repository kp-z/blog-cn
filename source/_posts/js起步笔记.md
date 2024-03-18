---
title: 我的Threejs起步笔记
cover: https://img-1253324855.cos.ap-chengdu.myqcloud.com/picgo/20210803015458.png
tags:
  - js
  - web
  - 3d
  - 笔记
  - 知识库
category:
  - 技术
  - web
abbrlink: 31211
---
> [Three.js](https://threejs.org) 是一款运行在浏览器中的 3D 引擎，你可以用它创建各种三维场景，包括了摄影机、光影、材质等各种对象。你可以在它的主页上看到许多精彩的演示。

![https://img-1253324855.cos.ap-chengdu.myqcloud.com/picgo/20210803003715.png](https://img-1253324855.cos.ap-chengdu.myqcloud.com/picgo/20210803003715.png)

从现在起开始学习three.js作为以后开发AR项目的起步，每次看到别人做的炫酷的three.js应用都非常羡慕，大家如果对3D、AR等等概念有兴趣的话一定要了解一下，这篇文章作为我的three.js首篇笔记，简单介绍一下three.js的基本操作，已收录在[黑鲸知识库里](https://www.notion.so/wikiwhale/3633a659e2a1478eaf6c8904c86de401)，欢迎大家关注后续的文章，也希望帮助不知道three.js的同学了解一下这个好玩的js库。如果大家感兴趣可以添加本站的交流微信群，一起讨论交流一下。

- [官方网站](https://threejs.org)
- [官方事例](https://threejs.org/examples/#webgl_animation_cloth)
- [本站的交流微信群](https://img-1253324855.cos.ap-chengdu.myqcloud.com/Myweb_COS_2.0/img/wechatcode.jpg)

## 通过一个简单的例子来认识Three.js

---

- 为了真正能够让你的场景借助three.js来进行显示，我们需要以下几个对象：场景、相机和渲染器，这样我们就能透过摄像机渲染出场景, 下面是一个创建cube场景的小例子，你可以点击js查看源码及说明。

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="VwbBLQg" data-preview="true" data-user="uzizkp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uzizkp/pen/VwbBLQg">
  Threejs练习1</a> by Kp (<a href="https://codepen.io/uzizkp">@uzizkp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 安装

---

- NPM安装

```basic
npm install --save three
```

所有安装 three.js 的方式都依赖于 ES modules（参见 Eloquent JavaScript: ECMAScript Modules）。ES modules使你能够在最终项目中包含所需库的一小部分。

然后你就可以将它导入你的JS里代码了：

```jsx
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';

const scene = new THREE.Scene();

// 方式 2: 仅导入你所需要的部分
import { Scene } from 'three';

const scene = new Scene();
```

并非所有功能都可以通过 three 模块来直接访问（也称为“裸导入”）。three.js 中其它较为流行的部分 —— 如控制器（control）、加载器（loader）以及后期处理效果（post-processing effect） —— 必须从 examples/jsm 子目录下导入。

你可以从 [Eloquent JavaScript: Installing with npm](https://eloquentjavascript.net/20_node.html#h_J6hW/SmL/a) 来了解更多有关 npm 模块的信息。

- 通过CDN安装

---

```jsx
<script type="module">

  // 通过访问 https://cdn.skypack.dev/three 来查找最新版本。

import * as THREE from 'https://cdn.skypack.dev/three@<version>';

const scene = new THREE.Scene();

</script>
```

## WebGL兼容性检查（WebGL compatibility check）

---

虽然这个问题现在已经变得越来不明显，但不可否定的是，某些设备以及浏览器直到现在仍然不支持WebGL。以下的方法可以帮助你检测当前用户所使用的环境是否支持WebGL，如果不支持，将会向用户提示一条信息。

请将[https://github.com/mrdoob/three.js/blob/master/examples/jsm/WebGL.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/WebGL.js)引入到你的文件，并在尝试开始渲染之前先运行该文件。

```jsx
if (WEBGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
    const warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
```

## 画线

---

初步了解了three.js后，我们来尝试尝试一些简单的操作，比如画线

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="vYmaKaX" data-preview="true" data-user="uzizkp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uzizkp/pen/vYmaKaX">
  Three.js练习2</a> by Kp (<a href="https://codepen.io/uzizkp">@uzizkp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 载入3D模型

---

目前，3D模型的格式有成千上万种可供选择，但每一种格式都具有不同的目的、用途以及复杂性。 虽然 three.js已经提供了多种导入工具， 但是选择正确的文件格式以及工作流程将可以节省很多时间，以及避免遭受很多挫折。某些格式难以使用，或者实时体验效率低下，或者目前尚未得到完全支持。

如果有可能的话，推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本， 都可以被很好地支持。由于glTF这种格式是专注于在程序运行时呈现三维物体的，所以它的传输效率非常高，且加载速度非常快。 功能方面则包括了网格、材质、纹理、皮肤、骨骼、变形目标、动画、灯光和摄像机。

公共领域的glTF文件可以在网上找到，例如 [Sketchfab](https://sketchfab.com/models?features=downloadable&sort_by=-likeCount&type=models)，或者很多工具包含了glTF的导出功能：

- [Blender](https://www.blender.org/) by the Blender Foundation
- [Substance Painter](https://www.allegorithmic.com/products/substance-painter) by Allegorithmic
- [Modo](https://www.foundry.com/products/modo) by Foundry
- [Toolbag](https://www.marmoset.co/toolbag/) by Marmoset
- [Houdini](https://www.sidefx.com/products/houdini/) by SideFX
- [Cinema 4D](https://labs.maxon.net/?p=3360) by MAXON
- [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) by the Khronos Group
- [FBX2GLTF](https://github.com/facebookincubator/FBX2glTF) by Facebook
- [OBJ2GLTF](https://github.com/AnalyticalGraphicsInc/obj2gltf) by Analytical Graphics Inc
- …and [还有更多](http://github.khronos.org/glTF-Project-Explorer/)

### 加载

Three.js的examples文件夹里有少数加载器（如ObjectLoader）默认包含在three.js中例如使用loaders里的GLTFLoader来加载模型--其他加载器应单独添加到你的应用程序中。

```jsx
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
```

一旦你引入了一个加载器，你就已经准备好为场景添加模型了。不同加载器之间可能具有不同的语法 —— 当使用其它格式的时候请参阅该格式加载器的示例以及文档。对于glTF，使用全局script的用法类似：

```jsx
const loader = new GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
```

推荐使用glTF（gl传输格式）来对三维物体进行导入和导出，由于glTF这种格式专注于在程序运行时呈现三维物体，因此它的传输效率非常高，且加载速度非常快。

## viewport相关的meta标签

```jsx
<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
```

这些标签用于在移动端浏览器上控制视口的大小和缩放（页面内容可能会以与可视区域不同的大小来呈现）。

[Safari: Using the Viewport](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)

[MDN: Using the viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

## 一些有用的链接（Useful links)

- 帮助论坛

Three.js官方使用[forum](https://discourse.threejs.org/)（官方论坛） 和 [Stack Overflow](http://stackoverflow.com/tags/three.js/info)来处理帮助请求。 如果你需要一些帮助，这才是你所要去的地方。请**一定不要**在GitHub上提issue来寻求帮助。

- 教程以及课程
- three.js入门
    - [Three.js Fundamentals starting lesson](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html)
    - [Beginning with 3D WebGL](https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-1-the-scene) by [Rachel Smith](https://codepen.io/rachsmith/).
    - [Animating scenes with WebGL and three.js](https://www.august.com.au/blog/animating-scenes-with-webgl-three-js/)
- 更加广泛、高级的文章与教程
    - [Discover three.js](https://discoverthreejs.com/)
    - [Three.js Fundamentals](https://threejsfundamentals.org/)
    - [Collection of tutorials](http://blog.cjgammon.com/) by [CJ Gammon](http://www.cjgammon.com/).
    - [Glossy spheres in three.js](https://medium.com/soffritti.pierfrancesco/glossy-spheres-in-three-js-bfd2785d4857).
    - [Interactive 3D Graphics](https://www.udacity.com/course/cs291) - a free course on Udacity that teaches the fundamentals of 3D Graphics, and uses three.js as its coding tool.
    - [Aerotwist](https://aerotwist.com/tutorials/) tutorials by [Paul Lewis](https://github.com/paullewis/).
    - [Learning Three.js](http://learningthreejs.com/) – a blog with articles dedicated to teaching three.js
    - [Three.js Bookshelf](https://discourse.threejs.org/t/three-js-bookshelf/2468) - Looking for more resources about three.js or computer graphics in general? Check out the selection of literature recommended by the community.
- 新闻与更新
    - [Three.js on Twitter](https://twitter.com/hashtag/threejs)
    - [Three.js on reddit](http://www.reddit.com/r/threejs/)
    - [WebGL on reddit](http://www.reddit.com/r/webgl/)
    - [Learning WebGL Blog](http://learningwebgl.com/blog/) – The authoritive news source for WebGL.
- 示例
    - [three-seed](https://github.com/edwinwebb/three-seed/) - three.js starter project with ES6 and Webpack
    - [Professor Stemkoskis Examples](http://stemkoski.github.io/Three.js/index.html) - a collection of beginner friendly examples built using three.js r60.
    - [Official three.js examples](https://threejs.org/examples/) - these examples are maintained as part of the three.js repository, and always use the latest version of three.js.
    - [Official three.js dev branch examples](https://raw.githack.com/mrdoob/three.js/dev/examples/) - Same as the above, except these use the dev branch of three.js, and are used to check that everything is working as three.js being is developed.
- 工具
    - [physgl.org](http://www.physgl.org/) - JavaScript front-end with wrappers to three.js, to bring WebGL graphics to students learning physics and math.
    - [Whitestorm.js](https://whsjs.readme.io/) – Modular three.js framework with AmmoNext physics plugin.
    - [Three.js Inspector](http://zz85.github.io/zz85-bookmarklets/threelabs.html)
    - [ThreeNodes.js](http://idflood.github.io/ThreeNodes.js/).
    - [comment-tagged-templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates) - VSCode extension syntax highlighting for tagged template strings, like: glsl.js.
    - [WebXR-emulator-extension](https://github.com/MozillaReality/WebXR-emulator-extension)
- WebGL参考
    - [webgl-reference-card.pdf](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf) - Reference of all WebGL and GLSL keywords, terminology, syntax and definitions.
