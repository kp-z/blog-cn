---
title: 小米智能家居联动HomeKit
abbrlink: 240
date: 2022-03-23 05:01:39
cover: '/cdn/cover/18.png'
top_img: false
categories:
    - 生活
    - 智能家居
tags:
    - 智能家居
    - 未完成
description: 如果你玩过智能家居，想必也知道不同大厂品牌的智能家居都在构建自己的壁垒，由于不同品牌的智能家居系统优缺点十分明显，自然而然的有玩家想要打破品牌的壁垒，融合各家的优点，打造专属于自己智能家居场景。在众多品牌智能家居中米家价格便宜种类全，可玩性很高，而apple智能家居系统使用体验是最好的，结合这两个系统的产品成为了包括我在内的众多玩家的第一选择。关于小米智能家居联动homekit的方案，网上已经有大量的教程，在网络通畅的情况下实现起来其实并不困难。总的来说就是将不同协议的智能家居设备通过HomeAssistant系统（简称HA）进行管理，并且通过HomeAssistant系统进行联动。虽然HA的管理比较简单，但是联动的实现比较复杂，需要自己根据情况去实现。这里就记录一下，我一个10平的小房间的配置过程。
---

如果你玩过智能家居，想必也知道不同大厂品牌的智能家居都在构建自己的壁垒，由于不同品牌的智能家居系统优缺点十分明显，自然而然的有玩家想要打破品牌的壁垒，融合各家的优点，打造专属于自己智能家居场景。在众多品牌智能家居中米家价格便宜种类全，可玩性很高，而apple智能家居系统使用体验是最好的，结合这两个系统的产品成为了包括我在内的众多玩家的第一选择。关于小米智能家居联动homekit的方案，网上已经有大量的教程，在网络通畅的情况下实现起来其实并不困难。总的来说就是将不同协议的智能家居设备通过HomeAssistant系统（简称HA）进行管理，并且通过HomeAssistant系统进行联动。虽然HA的管理比较简单，但是联动的实现比较复杂，需要自己根据情况去实现。这里就记录一下，我一个10平的小房间的配置过程。

## 了解[HomeAssistant](https://www.home-assistant.io/)

> Awaken your home
Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server.

[管理界面示例](https://demo.home-assistant.io/#/lovelace/1)

作为一个开源的智能家居系统，HA拥有庞大的用户社区，并且可以非常灵活的部署和配置。


## 配置了解HomeAssistant系统

## HomeAssistant Community Store

## 米家产品与Homekit

[查询xiomi-miot支持的小米设备](https://home.miot-spec.com/)
- 🔌 [插座](https://home.miot-spec.com/s/plug) / [开关](https://home.miot-spec.com/s/switch)
- 💡 [智能灯](https://home.miot-spec.com/s/light)
- ❄️ [空调](https://home.miot-spec.com/s/aircondition) / [空调伴侣](https://home.miot-spec.com/s/acpartner) / [温控器](https://home.miot-spec.com/s/airrtc)
- 🌀 [风扇](https://home.miot-spec.com/s/fan) / [凉霸](https://home.miot-spec.com/s/ven_fan)
- 🛀 [浴霸](https://home.miot-spec.com/s/bhf_light) / 🔥 [取暖器](https://home.miot-spec.com/s/heater)
- 📷 [摄像头](https://home.miot-spec.com/s/camera) / [猫眼/可视门铃](https://home.miot-spec.com/s/cateye) [❓️](https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-903078604)
- 📺 [电视](https://home.miot-spec.com/s/tv) / 📽️ [投影仪](https://home.miot-spec.com/s/projector) / [机顶盒](https://home.miot-spec.com/s/tvbox)
- 🗣️ [小爱音箱](https://home.miot-spec.com/s/wifispeaker) [❓️](https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-885989099)
- 🎮️ [万能遥控器](https://home.miot-spec.com/s/chuangmi.remote) [❓️](https://github.com/al-one/hass-xiaomi-miot/commit/fbcc8063783e53b9480574536a034d338634f4e8#commitcomment-56563663)
- 🔐 [智能门锁](https://home.miot-spec.com/s/lock) / 🚪 [智慧门](https://home.miot-spec.com/s/door)
- 👕 [洗衣机](https://home.miot-spec.com/s/washer) / [冰箱](https://home.miot-spec.com/s/fridge)
- 🚰 [净水器](https://home.miot-spec.com/s/waterpuri) / [饮水机](https://home.miot-spec.com/s/kettle)
- ♻️ [空气净化器](https://home.miot-spec.com/s/airpurifier) / [新风机](https://home.miot-spec.com/s/airfresh)
- 🌡 [温湿度传感器](https://home.miot-spec.com/s/sensor_ht) / [水侵传感器](https://home.miot-spec.com/s/flood) / [烟雾传感器](https://home.miot-spec.com/s/sensor_smoke)
- 🥘 [电饭煲](https://home.miot-spec.com/s/cooker) / [压力锅](https://home.miot-spec.com/s/pre_cooker)
- 🍲 [电磁炉](https://home.miot-spec.com/s/ihcooker) / [烤箱](https://home.miot-spec.com/s/oven) / [微波炉](https://home.miot-spec.com/s/microwave)
- 🍗 [空气炸锅](https://home.miot-spec.com/s/fryer) / [多功能锅](https://home.miot-spec.com/s/mfcp)
- 🍵 [养生壶](https://home.miot-spec.com/s/health_pot) / ☕️ [咖啡机](https://home.miot-spec.com/s/coffee)
- 🍹 [破壁机](https://home.miot-spec.com/s/juicer) / [搅拌机](https://home.miot-spec.com/s/juicer) / [果蔬清洗机](https://home.miot-spec.com/s/f_washer)
- ♨️ [热水器](https://home.miot-spec.com/s/waterheater) / [油烟机](https://home.miot-spec.com/s/hood) / [洗碗机](https://home.miot-spec.com/s/dishwasher)
- 🦠 [消毒柜](https://home.miot-spec.com/s/steriliser)
- 🪟 [窗帘电机](https://home.miot-spec.com/s/curtain) / [开窗器](https://home.miot-spec.com/s/wopener) / [晾衣机](https://home.miot-spec.com/s/airer)
- 🧹 [扫地/扫拖机器人](https://home.miot-spec.com/s/vacuum) / [擦地机](https://home.miot-spec.com/s/.mop)
- 💦 [加湿器](https://home.miot-spec.com/s/humidifier) / [除湿器](https://home.miot-spec.com/s/derh)
- 🍃 [空气检测仪](https://home.miot-spec.com/s/airmonitor) / 🪴 [植物监测仪](https://home.miot-spec.com/s/plantmonitor)
- 🛏 [电动床](https://home.miot-spec.com/s/bed) / [电热毯/水暖床垫](https://home.miot-spec.com/s/blanket) / 😴 [睡眠监测仪](https://home.miot-spec.com/s/lunar)
- 💆 [按摩椅](https://home.miot-spec.com/s/massage) / [按摩仪](https://home.miot-spec.com/s/magic_touch)
- 🏃 [走步机](https://home.miot-spec.com/s/walkingpad) / [跑步机](https://home.miot-spec.com/s/treadmill) / [升降桌](https://home.miot-spec.com/s/desk)
- 🚽 [马桶(盖)](https://home.miot-spec.com/s/toilet) /️ [毛巾架](https://home.miot-spec.com/s/.tow) /️ 🪥 [牙刷](https://home.miot-spec.com/s/toothbrush)
- 🐱 [宠物喂食器](https://home.miot-spec.com/s/feeder) / ⛲ [宠物饮水机](https://home.miot-spec.com/s/pet_waterer) / 🐟 [鱼缸](https://home.miot-spec.com/s/fishbowl)
- 🦟 [驱蚊器](https://home.miot-spec.com/s/mosq) / [消毒/灭菌灯](https://home.miot-spec.com/s/s_lamp)
- 🚘 [智能后视镜](https://home.miot-spec.com/s/rv_mirror) / [抬头显示HUD](https://home.miot-spec.com/s/hud)
- ⌚️ [智能/儿童手表](https://home.miot-spec.com/s/watch) / [手环](https://home.miot-spec.com/s/bracelet)
- 🚶 [人体传感器](https://home.miot-spec.com/s/motion) / 🧲 [门窗传感器](https://home.miot-spec.com/s/magnet) [❓️](https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-909031222)
- 📳 [动静贴](https://home.miot-spec.com/s/vibration)
- 🌐 [路由器](https://home.miot-spec.com/s/router) / 🖨 [打印机](https://home.miot-spec.com/s/printer)


## 万恶的局域网

## 参考资料

* [HACHINA中文网](https://www.hachina.io/)
* [HA官网](https://www.home-assistant.io/)

