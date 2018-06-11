import VueRouter from 'vue-router'

const routes = [
  {
    path: '/bs-scroll',
    component: _ => require(['./md/scroll.md'], _)
    // }, {
    //   path: '/bs-vtree',
    //   component: _ => require(['./components/VTree/VTreeDemo.vue'], _)
  }, {
    path: '/bs-cover',
    component: _ => require(['./md/cover.md'], _)
  }, {
    path: '/bs-video',
    component: _ => require(['./md/video.md'], _)
    // }, {
    //   path: '/bs-calendar',
    //   component: _ => require(['./md/calendar.md'], _)
  }, {
    path: '/bs-crumb',
    component: _ => require(['./md/crumb.md'], _)
  },
  {
    path: '/bs-timeline',
    component: _ => require(['./md/timeline.md'], _)
    // }, {
    //   path: '/bs-progress-bar',
    //   component: _ => require(['./md/progressBar.md'], _)
    // }, {
    //   path: '/bs-video-progress',
    //   component: _ => require(['./md/videoProgress.md'], _)
  }, {
    path: '/bs-calendar',
    component: _ => require(['./md/calendar.md'], _)
  }, {
    path: '/videoDemo',
    component: _ => require(['./md/videoDemo.md'], _)
  }, {
    path: '/videoDoc',
    component: _ => require(['./md/videoDoc.md'], _)
  }, {
    path: '/bs-tree',
    component: _ => require(['./md/tree.md'], _)
  }, {
    path: '/bs-select',
    component: _ => require(['./md/select.md'], _)
  }, {
    path: '/install',
    component: _ => require(['./md/install.md'], _)
  }, {
    path: '/start',
    component: _ => require(['./md/start.md'], _)
  }, {
    path: '/disable',
    component: _ => require(['./md/disable.md'], _)
  }
]

export default new VueRouter({ routes })
