<template>
  <div class="picture-box">
    <picture-zoom :img-url="imgUrl" :scale="scale"></picture-zoom>
  </div>
</template>

<script>

export default {
  name: 'XBJPictureZoom',
  data () {
    return {
      imgUrl : '../../../static/imgDemo.jpg',
      scale: 4
    }
  }
}
</script>

<style scoped>
.picture-box{
  width: 500px;
  height: 300px;
  border: 1px #eee solid;
}
</style>
