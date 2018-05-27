### 简介

此组件库是自己平时开发遇到可以组件化的功能模块，或者看到一些比较炫酷的效果并研究其原理然后自己动手开发的一系列vue组件，这些组件之间没有任何关联，但还是做了完整和按需引入的处理（主要是为了熟悉webpack）。同时每个组件我都单独发布到了npm仓库上，推荐大家单独引入。这里主要是为了对自己所写的组件做一个整体的介绍。

### 安装

```
# yarn
yarn add xbj-ui-vue -S
# or npm
npm install xbj-ui-vue -S
```

### 整体引入

在 main.js 中写入以下内容：
```
import Vue from 'vue'
import App from './App'
import xbjui from 'xbj-ui-vue'
import 'xbj-ui-vue/dist/css/xbj-ui-theme.css';

Vue.config.productionTip = false

Vue.use(xbjui)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

### 按需引入

```
import Vue from 'vue'
import App from './App'
import { TopMenu } from 'xbj-ui-vue'
import 'xbj-ui-vue/dist/css/xbj-ui-theme.css';

Vue.config.productionTip = false

Vue.use(TopMenu)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```