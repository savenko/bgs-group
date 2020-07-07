<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="onLogout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
  methods: {
    ...mapActions('auth', ['logout']),
    async onLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
}
</script>
