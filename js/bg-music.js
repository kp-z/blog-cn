/*!
 * source/js/bg-music.js —— 全站背景音乐（站点级；用户 2026-10-17 报「网站音乐完全失效」）
 *
 * 由 scripts/background-music.js 用 after_render:html 过滤器注入到每页 </body> 之前（注：不是 hexo.extend.injector，原因见该脚本注释）：
 *   <script>window.__BG_MUSIC_CFG__ = {"src":…,"volume":…,"loop":…}<\/script>
 *   <script src="<root>js/bg-music.js" defer></script>
 *
 * 为什么需要本脚本：
 *   主题 themes/hexo-theme-unicorn/layout/includes/rightside.pug:36 的
 *   button#background-music(onclick="bgMusic()") 在所有页面都存在，
 *   但 window.bgMusic 与 <audio id="bg-music"> 原先只写在
 *   source/_posts/途中的树2.0.md:1696/:1700-1707 的代码围栏里（只当文档渲染），
 *   所以按钮点击后 ReferenceError: bgMusic is not defined，音乐全站失效。
 *
 * 设计要点：
 *   - 音频元素惰性创建（首次点击），preload=none ⇒ 不占首屏带宽；
 *   - 元素挂在 document.body 下：pjax 的 selectors 只替换 #body-wrap 等
 *     （third-party/pjax.pug），body 直属元素跨页存活 ⇒ 站内跳转不断音；
 *   - 无 src / 播放被浏览器策略拒绝时不抛错，图标回落为 fa-music；
 *   - 幂等：重复加载本脚本不会创建第二个 audio（按 id 复用）。
 */
!function(){"use strict";var e="bg-music-wanted",n=window.__BG_MUSIC_CFG__||{},t="string"==typeof n.src?n.src:"",o="number"==typeof n.volume&&n.volume>=0&&n.volume<=1?n.volume:.2,u=!1!==n.loop;function d(e,n){try{null===n?window.sessionStorage.removeItem(e):window.sessionStorage.setItem(e,n)}catch(e){}}function c(){var e,n=document.getElementById("background-music");n&&(n.innerHTML=!(e=document.getElementById("bg-music"))||e.paused||e.ended?'<i class="fas fa-music"></i>':'<i class="fas fa-pause"></i>')}function r(){var n=document.getElementById("bg-music");return n||(t?((n=document.createElement("audio")).id="bg-music",n.className="no-destroy",n.preload="none",n.loop=u,n.volume=o,n.src=t,n.addEventListener("play",c),n.addEventListener("pause",c),n.addEventListener("ended",c),n.addEventListener("error",function(){d(e,null),c(),console.warn("[bg-music] 音频加载失败："+(n.error&&n.error.code))}),document.body.appendChild(n),n):null)}function s(n,t){var o;try{o=n.play()}catch(e){return void c()}o&&"function"==typeof o.then?o.then(function(){c(),t&&d(e,"1")},function(n){c(),t&&d(e,null),console.warn("[bg-music] 播放被拒绝（"+(n&&n.name||"unknown")+"），需用户手势。")}):(c(),t&&d(e,"1"))}window.bgMusic=function(){var n=r();n?n.paused||n.ended?s(n,!0):(n.pause(),d(e,null)):console.warn("[bg-music] 未配置音频地址（backgroundMusic.src 为空）。")},document.addEventListener("pjax:complete",c),document.addEventListener("DOMContentLoaded",function(){if(c(),function(){try{return"1"===window.sessionStorage.getItem(e)}catch(e){return!1}}()){var n=r();n&&(n.paused||n.ended)&&s(n,!1)}}),"loading"!==document.readyState&&c()}();