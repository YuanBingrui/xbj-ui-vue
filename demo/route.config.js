import navConfig from './nav.config'

const addRouter = function (dirPath) {
  return () => import(`./components/${dirPath}.vue`)
}

const routes = function () {
  let route = []
  navConfig.forEach((nav) => {
    nav.children.forEach((item) => {
      route.push({
        path: '/' + item.path,
        name: item.path,
        meta: {
          title: item.title
        },
        component: addRouter(item.dirPath)
      })
    })
  })
  route.push({
    path: '/',
    redirect: '/topmenu'
  })
  return route
}

export default routes()
