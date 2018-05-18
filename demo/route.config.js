import navConfig from './nav.config.json'

const addRouter = function (dirPath) {
  return () => import(`./components/${dirPath}.vue`)
}

const routes = function () {
  let route = []
  let childRoute = []
  navConfig.forEach((nav) => {
    nav.children.forEach((item) => {
      childRoute.push({
        path: '/' + item.path,
        component: addRouter(item.dirPath)
      })
    })
  })
  route.push({
    path: '/',
    component: () => import('./App'),
    children: childRoute
  })
  return route
}

export default routes()
