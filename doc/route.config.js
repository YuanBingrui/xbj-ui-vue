import navConfig from './nav.config.json'

const addRouter = function (dirPath) {
  return () => import(`./docs/${dirPath}.md`)
}

const routes = function () {
  let route = []
  let childRouter = []
  route.push({
    path: '/',
    redirect: '/home',
    component: () => import('./views/main-layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('./views/home.vue')
      },
      {
        path: 'main-components',
        name: 'main-components',
        redirect: 'main-components/introduction',
        meta: {
          title: '组件'
        },
        component: () => import('./views/main-components.vue'),
        children: childRouter
      }
    ]
  })

  childRouter.push({
    path: 'introduction',
    name: 'introduction',
    meta: {
      title: '介绍'
    },
    component: () => import('./views/introduction.vue')
  })
  navConfig.forEach((nav) => {
    nav.children.forEach((item) => {
      childRouter.push({
        path: item.path,
        name: item.path,
        meta: {
          title: item.title
        },
        component: addRouter(item.dirPath)
      })
    })
  })

  return route
}

export default routes()
