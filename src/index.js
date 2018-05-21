import TopMenu from './components/TopMenu/index'
import PictureZoom from './components/PictureZoom/index'

const components = [
  TopMenu,
  PictureZoom
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  TopMenu,
  PictureZoom
}

export default {
  install,
  TopMenu,
  PictureZoom
}
