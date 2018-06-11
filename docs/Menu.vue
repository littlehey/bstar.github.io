<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="menu in menus" :key="menu.title" :value="ifShow(menu.list)">
      <div slot="header">{{menu.title}}</div>
      <v-list :dense="true">
        <v-list-tile v-for="item in menu.list" :key="item.title" @click="$router.push(item.path || 'bs-'+item.title)">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import router from './router'
import menus from './menu'
export default {
  data() {
    return {
      menus
    }
  },
  methods: {
    ifShow(list) {
      const path = this.$route.path
      let res = false
      list.map(item => {
        if ('/' + item.path === path) {
          res = true
        } else if ('/bs-' + item.title === path) {
          res = true
        }
      })
      return res
    }
  }
}
</script>

