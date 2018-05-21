<template>
  <div id="menu-box">
    <div class="logo-box">
      <img v-if="logoImg" :src="logoImg">
    </div>
    <div class="menu-body">
      <ul>
        <li
          ref="menuItem"
          v-for="(menuItem, index) in menuList"
          :key="index"
          @click="currentMenu(index)"
          @mouseenter="mouseHover(index)"
          @mouseleave="mouseLeave">
          <a :href="menuItem.href">{{ menuItem.name }}</a>
        </li>
      </ul>
      <span ref="slideBox"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    primaryColor: {
      type: String,
      default: '#42b983'
    },
    slideSpeed: {
      type: String,
      default: '0.7s'
    },
    logoImg: {
      type: String
    },
    menuList: {
      validator: (val) => val instanceof Array
    }
  },
  data () {
    return {
      menuIndex: 0,
      leftValue: 0
    }
  },
  mounted () {
    this.currentMenu(this.menuIndex)
    if (this.primaryColor) {
      document.getElementById('menu-box').style.setProperty('--primary-color', this.primaryColor)
    }
    if (this.slideSpeed) {
      document.getElementById('menu-box').style.setProperty('--slide-speed', this.slideSpeed)
    }
  },
  methods: {
    currentMenu (index) {
      this.menuIndex = index
      this.mouseHover(index)
    },
    mouseHover (index) {
      this.getLeftValue(index)
      this.$refs.slideBox.style.width = this.$refs.menuItem[index].getBoundingClientRect().width + 'px'
      this.$refs.slideBox.style.left = this.leftValue + 'px'
    },
    mouseLeave () {
      this.getLeftValue(this.menuIndex)
      this.$refs.slideBox.style.width = this.$refs.menuItem[this.menuIndex].getBoundingClientRect().width + 'px'
      this.$refs.slideBox.style.left = this.leftValue + 'px'
    },
    getLeftValue (index) {
      this.leftValue = 0
      for (let i = 0; i < index; i++) {
        this.leftValue = this.leftValue + this.$refs.menuItem[i].getBoundingClientRect().width
      }
    }
  }
}
</script>

<style scoped>
#menu-box {
  --primary-color: '';
  --slide-speed: '';
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px var(--primary-color) solid;
  position: sticky;
  padding: 2px 0 10px 0;
}
.logo-box {
  margin-left: 50px;
  display: flex;
  align-items: center;
}
.logo-box img {
  width: 50px;
  height: 50px;
}
.menu-body {
  position: relative;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  transition: width 2s ease 1s;
}
a {
  text-decoration: none;
  color: var(--primary-color);
  padding: 20px 10px;
  text-align: center;
  margin: 0 10px;
}
span {
  height: 5px;
  background-color: var(--primary-color);
  border-radius: 2.5px;
  position: absolute;
  transition:left var(--slide-speed);
}
</style>
