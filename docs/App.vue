<template>
  <v-app>
    <v-navigation-drawer app>
      <Menu></Menu>
    </v-navigation-drawer>
    <v-toolbar color="light-blue" dark app>
      <v-toolbar-title>{{$route.path|myf}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid style="position:relative">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Menu from './Menu.vue'
export default {
  components: {
    Menu
  },
  filters: {
    myf(s) {
      if (s) {
        return s.slice(1).replace('bs-', '')
      } else {
        return ''
      }
    }
  },
  mounted() {
    if (this.$route.path === '/') {
      // this.$router.push('start')
    }
  }
}
</script>

