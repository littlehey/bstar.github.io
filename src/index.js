import bsCover from './components/cover.vue'
import bsVideo from './components/videoFrame.vue'
import bsScroll from './components/scroll/scroll.vue'
import bsCrumb from './components/crumb.vue'
import bsTimeline from './components/timeline.vue'
import bsProgressBar from './components/progressBar.vue'
// import bsVideoProgress from './components/videoProgress.vue'
import bsCalendar from './components/calendar.vue'
import bsTree from './components/VTree/Tree.vue'
import bsSelect from './components/select.vue'
import playback from './videoImp/playback'
import preview from './videoImp/preview'
import local from './videoImp/local'
import disable from './directives/disable'
import 'font-awesome/css/font-awesome.min.css'


const components = {
  bsScroll,
  bsCover,
  bsVideo,
  bsCrumb,
  bsTimeline,
  bsProgressBar,
  // bsVideoProgress,
  bsCalendar,
  bsTree,
  bsSelect
}

const directives = {
  disable
}

const bsvue = {
  install(Vue) {
    Object.values(components).forEach(item => Vue.component(item.name, item))
    Object.values(directives).forEach(item => Vue.directive(item.name, item))
  },
  ...components,
  ...directives
}

export default bsvue
export { playback, preview, local }
