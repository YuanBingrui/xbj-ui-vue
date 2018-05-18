import navConfig from './nav.config.json'

const loadDoc = function (path) {
  return () => import(`./docs/${path}.md`)
}

const routes = function () {
  let route = []
  navConfig.forEach((nav) => {
    nav.children.forEach((item) => {
      route.push({
        path: '/' + item.path,
        component: loadDoc(item.path)
      })
    })
  })
  route.push({
    path: '/',
    redirect: '/quickstart'
  })
  return route
}

export default routes()
