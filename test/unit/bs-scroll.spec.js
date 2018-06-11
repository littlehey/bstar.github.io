import Vue from 'vue'
import bsScroll from '../../src/components/scroll/scroll.vue'
import bsVue from '../../src/index.js'
Vue.use(bsVue)

describe('test bs-scroll', () => {
  it('组件默认height应该是100%', () => {
    const vm = new Vue(bsScroll).$mount()
    expect(vm.height).toEqual('100%')
  })
  it('传入color测试', () => {
    const color = '#a0a0a0'
    const Scroll = Vue.extend(bsScroll)
    const vm = new Scroll({ propsData: { option: { color } } }).$mount()
    expect(vm.doptions.color).toEqual(color)
  })
  it('全局变量设置测试', () => {
    const color = '#909090'
    Vue.Scroll.defaultOption.background = color
    const vm = new Vue(bsScroll).$mount()
    expect(vm.doptions.background).toEqual(color)
  })
})
