<template>
  <div class="fill-height">
    <v-container
      fluid
      grid-list-md
      text-xs-center
      fill-height
      class="no-padding"
    >
      <v-layout align-space-around fill-height row wrap>
        <v-flex xs3 class="bg-white">
          <LoginForm />
        </v-flex>
        <v-flex xs9>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex xs10 offset-xs1 text-center>
                <div class="hello">
                  Добро пожаловать в профиль пользователя
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm'
export default {
  components: { LoginForm },
  layout: 'login',
}
</script>
<style lang="scss" scoped>
.bg-white {
  background-color: rgba(255, 255, 255, 0.9);
}
.hello {
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  margin-left: 100px;
}
</style>
