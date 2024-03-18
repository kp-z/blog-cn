---
title: CHANNEL
date: 2021-04-11 00:04:02
top_img: false
comments: false
type: 'flat'
aside: false
---


<link rel="stylesheet" href="https://blog-1253324855.cos.ap-shanghai.myqcloud.com/css/fm-style.css">
<div id="fm-container">
  <div class="fm-wrapper" id="fm-player">
    <div class="player">
      <div class="player__top">
        <div class="player-cover" >
          <iframe id="fm-video-player" class="player-cover__item" src="//player.bilibili.com/player.html?aid=60317759&bvid=BV1oV411p727&cid=363694258&page=1&danmaku=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
        <div class="player-controls">
          <div class="player-controls__item -favorite active" @click="favorite">
            <i class="fas fa-heart icon"></i>
          </div>
          <a href="https://www.bilibili.com/video/BV1oV411p727?share_source=copy_web" id="fm-video-link" target="_blank" class="player-controls__item">
            <i class="fas fa-external-link-alt icon"></i>
          </a>
          <div class="player-controls__item" id = "pre-fm-video">
            <i class="fas fa-arrow-left icon"></i>
          </div>
          <div class="player-controls__item" id="next-fm-video">
            <i class="fas fa-arrow-right icon"></i>
          </div>
          <!-- <div class="player-controls__item -xl js-play" @click="play"> -->
          <div class="player-controls__item -xl" id="random-fm-video">
            <!-- <i class="far fa-pause-circle icon"></i> -->
            <svg t="1622973493445" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" width="200" height="200"><path d="M425.984 12.288c-43.008 43.008-12.288 69.632 81.92 69.632 182.272 2.048 358.4 126.976 413.696 296.96 32.768 98.304 16.384 258.048-30.72 331.776l-38.912 57.344L839.68 716.8c-6.144-28.672-24.576-51.2-40.96-51.2-22.528 0-30.72 28.672-30.72 112.64v112.64l118.784 6.144c94.208 4.096 116.736 0 116.736-26.624 0-16.384-18.432-30.72-40.96-30.72-51.2 0-51.2-4.096 0-102.4C1124.352 419.84 911.36 43.008 546.816 6.144c-57.344-6.144-112.64-4.096-120.832 6.144zM24.576 157.696c4.096 20.48 22.528 34.816 43.008 34.816 43.008-4.096 43.008-4.096-10.24 100.352C26.624 354.304 12.288 417.792 12.288 512 10.24 735.232 139.264 915.456 362.496 995.328c124.928 43.008 272.384 30.72 272.384-24.576 0-20.48-28.672-28.672-102.4-28.672C200.704 942.08-14.336 618.496 126.976 329.728l47.104-94.208 10.24 61.44c6.144 36.864 22.528 61.44 40.96 61.44 22.528 0 30.72-26.624 30.72-112.64V133.12l-118.784-6.144C30.72 120.832 18.432 124.928 24.576 157.696z" p-id="2687"></path></svg>
          </div>
        </div>
      </div>
      <div class="progress">
        <div class="progress__top">
          <div class="album-info">
            <!-- <div class="album-info__name">电台</div> -->
            <!-- <div class="album-info__track"><p id="fm-video-title">[原创]四月份的野餐</p></div> -->
          </div>
          <!-- <div class="progress__duration">
          </div> -->
        </div>
        <!-- <div class="progress__bar" @click="clickProgress">
          <div class="progress__current" :style="{ width : barWidth }"></div>
        </div> -->
        <!-- <div class="progress__time">
          <a href="https://space.bilibili.com/109909977" style="opticy: .5">
                <svg t="1623771808930" style="transform: translateY(2px)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1584" width="16" height="16"><path d="M775.168 143.7696a51.8656 51.8656 0 0 1 0 73.3184l-47.36 47.36h48.4864A155.5456 155.5456 0 0 1 931.84 420.0448v311.04a155.5456 155.5456 0 0 1-155.4944 155.4944H257.8944A155.4944 155.4944 0 0 1 102.4 731.0848V420.0448a155.5456 155.5456 0 0 1 155.4944-155.5456h48.384l-47.3088-47.36a51.8144 51.8144 0 1 1 73.2672-73.3184l109.9776 109.9776a51.2 51.2 0 0 1 8.192 10.6496H583.68a50.5856 50.5856 0 0 1 8.2432-10.7008l109.9776-109.9776a51.8656 51.8656 0 0 1 73.3184 0z m1.1264 224.768H257.8944c-27.136 0-49.664 20.9408-51.712 47.9744l-0.1024 3.9424v311.04c0 27.2896 21.1456 49.664 47.9744 51.6608l3.84 0.1536h518.4c27.136 0 49.7152-20.8896 51.712-47.9744l0.1536-3.84V420.4544c0-28.672-23.2448-51.8656-51.8656-51.8656z m-414.72 103.68c28.672 0 51.8656 23.2448 51.8656 51.8656v51.8144a51.8656 51.8656 0 0 1-103.68 0v-51.8144c0-28.672 23.2448-51.8656 51.8656-51.8656z m311.04 0c28.672 0 51.8656 23.2448 51.8656 51.8656v51.8144a51.8656 51.8656 0 0 1-103.68 0v-51.8144c0-28.672 23.2448-51.8656 51.8144-51.8656z" p-id="1585"></path></svg>
            </a>
        </div> -->
      </div>
      <div v-cloak></div>
    </div>
  </div>
</div>
<script data-pjax src="https://cdn.jsdelivr.net/gh/Uzizkp/jscdn@main/blog/js/channel.js"></script>
