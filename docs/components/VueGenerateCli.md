# 生成vue文件cli

## 介绍

平时在用vue开发的时候，每次都要手动新建一个vue文件，比较麻烦，发现官网提供的cli并没有提供新建vue文件的命令(至少在写这个cli之前)，于是打算自己动手写一个这样的cli，于是就有了这个cli。

cli默认生成文件的根目录为src，同时还可以自己指定根目录，不仅可以生成单独的vue文件，还可以批量生成vue文件，及分离出css文件，同时文件的命名可以选择-连接或者大驼峰的方式。

[github(https://github.com/YuanBingrui/vue-generate-cli)](https://github.com/YuanBingrui/vue-generate-cli)

## 安装

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g vue-generate-cli
or
$ yarn global add vue-generate-cli
```

::: warning
因为这是一个脚手架工具，所以不能通过xbj-ui-vue引入，这里主要是为了方便放在一起来介绍。
:::

## 使用

``` bash
// default generate a new file in components directory
$ vue-g g <filename>
or
// generate a new file in custom directory
$ vue-g g <dirname> <filename>
or
// generate more new files in custom directory
$ vue-g g <dirname> <filename01> <filename02> <filename03> <filename(2N+1)>
or
// generate more new files in custom path
$ vue-g g path <filename01> <filename02> <filename03> <filename(2N+1)>
or
// generate a new files in custom path with -P and -C option
$ vue-g g path <filename01> <filename02> <filename03> -P -C
// -P filename is PascalCase format
// -C generate CSS file
```

### 初始文件的模板

```
<template>
  <div class="my-component"></div>
</template>

<script>
export default {
  name: 'my-component',
  data () {
    return {

    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.my-component {

}
</style>
```

## 例子

``` bash
$ vue-g g my-component
or
$ vue-g g libs my-component
or
$ vue-g g libs my-component01 my-component02 my-component03
or
$ vue-g g ./components/libs my-component01 my-component02 my-component03
```
