<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto" max-width="600">
        <v-img class="white--text align-end" height="300px" :src="user.photo">
          <v-card-title>{{ user.name }}</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>Email: {{ user.email }}</div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>
