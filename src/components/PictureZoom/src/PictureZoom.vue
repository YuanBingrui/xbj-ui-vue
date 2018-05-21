<template>
  <div
    class="picture-zoom-box"
    :ref="id"
    @mousemove="mousemove"
    @mouseover="mouseover"
    @mouseleave="mouseleave">
    <img
      class="zoom-img"
      :src="imgUrl"
      alt="picture-zoom" />
    <div class="mouse-cover-box"></div>
  </div>
</template>

<script>
export default {
  name: 'PictureZoom',
  props: {
    scale: {
      type: Number,
      default: 2
    },
    imgUrl: {
      type: String,
      require: true
    },
    bigImgUrl: {
      type: String,
      default: null
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: null,
      coverBox: null,
      imgBox: null,
      imgWrap: null,
      img: null,
      canvas: null,
      ctx: null,
      rectTimesX: 0,
      rectTimesY: 0,
      imgTimesX: 0,
      imgTimesY: 0,
      init: false
    }
  },
  created () {
    // 随机生成唯一的ID
    let charStr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let maxPositon = charStr.length
    let str = ''
    for (let i = 0; i < 10; i++) {
      str += charStr.charAt(Math.floor(Math.random() * maxPositon))
    }
    this.id = str
  },
  mounted () {
    this.$nextTick(() => {
      this.initBox()
    })
  },
  methods: {
    initBox () {
      let box = this.$refs[this.id]
      this.imgBox = box

      // 初始化coverBox
      this.coverBox = box.querySelector('.mouse-cover-box')
      this.coverBox.style.width = (this.imgBox.offsetWidth / this.scale) + 'px'
      this.coverBox.style.height = (this.imgBox.offsetHeight / this.scale) + 'px'
      this.coverBox.style.left = '-100%'
      this.coverBox.style.top = '-100%'

      // 获取图片元素并获取图片元素原始大小计算比率
      this.imgWrap = box.querySelector('.zoom-img')
      let imgSrc
      if (this.bigImgUrl) {
        imgSrc = this.bigImgUrl
      } else {
        imgSrc = this.imgWrap.src
      }
      this.img = new Image()
      this.img.src = imgSrc
      this.img.onload = () => {
        this.rectTimesX = this.coverBox.offsetWidth / this.imgWrap.offsetWidth
        this.rectTimesY = this.coverBox.offsetHeight / this.imgWrap.offsetHeight
        this.imgTimesX = this.img.width / this.imgWrap.offsetWidth
        this.imgTimesY = this.img.height / this.imgWrap.offsetHeight
        this.init = true
      }

      // 初始化显示大图的canvas
      if (!this.canvas) {
        this.canvas = document.createElement('canvas')
        this.canvas.style.position = 'absolute'
        this.canvas.style.left = this.imgBox.offsetLeft + this.imgBox.offsetWidth + 10 + 'px'
        this.canvas.style.top = this.imgBox.offsetTop + 'px'
        this.canvas.style.border = '1px #eee solid'
        this.canvas.style.zIndex = '9999'
        this.canvas.height = this.imgBox.offsetHeight
        this.canvas.width = this.imgBox.offsetWidth
        this.canvas.style.display = 'none'
        document.body.appendChild(this.canvas)
      }
      this.ctx = this.canvas.getContext('2d')
    },
    mousemove (event) {
      if (!this.init) {
        return false
      }

      let _this = this

      // 获取实际的offset
      function offset (curEle) {
        let totalLeft = 0
        let totalTop = 0
        let parentEle = curEle.offsetParent
        // 首先加上本身的左偏移和上偏移
        totalLeft += curEle.offsetLeft
        totalTop += curEle.offsetTop

        // 累加body以下所有父级参照物的边框和偏移
        while (parentEle) {
          if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
            totalLeft += parentEle.clientLeft
            totalTop += parentEle.clientTop
          }

          totalLeft += parentEle.offsetLeft
          totalTop += parentEle.offsetTop

          parentEle = parentEle.offsetParent
        }
        return {
          left: totalLeft,
          top: totalTop
        }
      }

      // 对鼠标当前的左边进行转化
      function getPositionXY (event) {
        return {
          x: event.clientX - (_this.coverBox.offsetWidth / 2),
          y: event.clientY - (_this.coverBox.offsetHeight / 2)
        }
      }

      let curPosition = getPositionXY(event)
      let imgWrap = offset(this.imgWrap)
      let range = {
        minX: imgWrap.left,
        maxX: imgWrap.left + this.imgWrap.offsetWidth - this.coverBox.offsetWidth,
        minY: imgWrap.top - document.documentElement.scrollTop,
        maxY: imgWrap.top - document.documentElement.scrollTop + this.imgWrap.offsetHeight - this.coverBox.offsetHeight
      }
      if (curPosition.x > range.maxX) {
        curPosition.x = range.maxX
      }
      if (curPosition.x < range.minX) {
        curPosition.x = range.minX
      }
      if (curPosition.y > range.maxY) {
        curPosition.y = range.maxY
      }
      if (curPosition.y < range.minY) {
        curPosition.y = range.minY
      }

      this.coverBox.style.left = curPosition.x + 'px'
      this.coverBox.style.top = curPosition.y + 'px'
      // 清空画布
      this.ctx.clearRect(0, 0, this.imgWrap.offsetWidth, this.imgWrap.offsetHeight)

      // 将切好的图渲染到画布上
      let startX = curPosition.x - (imgWrap.left - document.documentElement.scrollLeft)
      let startY = curPosition.y - (imgWrap.top - document.documentElement.scrollTop)
      this.ctx.drawImage(this.img, startX * this.imgTimesX, startY * this.imgTimesY, this.img.width * this.rectTimesX, this.img.height * this.rectTimesY, 0, 0, this.imgBox.offsetWidth, this.imgBox.offsetHeight)
    },
    mouseover (event) {
      if (!this.init) {
        return false
      }

      if (!this.scroll) {
        // 阻止其默认的鼠标滚动事件

        // 其他浏览器
        event.currentTarget.addEventListener('mousewheel', function (ev) {
          ev.preventDefault()
        }, false)

        // firefox浏览器
        event.currentTarget.addEventListener('DOMMouseScroll', function (ev) {
          ev.preventDefault()
        }, false)
      }

      this.coverBox.style.display = 'block'
      this.canvas.style.display = 'block'
    },
    mouseleave () {
      if (!this.init) {
        return false
      }

      this.coverBox.style.display = 'none'
      this.canvas.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.picture-zoom-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.zoom-img {
  width: 100%;
  height: 100%;
}
.mouse-cover-box {
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  cursor: move;
}
</style>
