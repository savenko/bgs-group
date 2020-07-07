<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'login',
    },
  },
}
</script>

<style lang="scss">
body.login #app {
  background-image: url('/login_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
