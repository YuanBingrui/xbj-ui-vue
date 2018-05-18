import TopMenu from './components/TopMenu/index'

const components = [
  TopMenu
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  'top-menu': TopMenu
}

module.exports.default = module.exports
