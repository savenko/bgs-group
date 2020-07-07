<template>
  <div>
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex xs10 offset-xs1>
          <v-img
            align-center
            class="mb-3"
            max-height="100"
            contain
            src="/logo.png"
          />
        </v-flex>
        <v-flex xs-12>
          <h1 class="text-xs-center mb-5">Авторизация</h1>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model.trim="form.login"
              label="Логин"
              :rules="loginRules"
              required
            ></v-text-field>
            <v-text-field
              v-model.trim="form.password"
              :rules="passwordRules"
              type="password"
              label="Пароль"
              required
            ></v-text-field>
            <v-container pa-0>
              <v-layout align-center>
                <v-flex xs6>
                  <a href="#" @click.prevent="dialogRestorePassword = true"
                    >Забыли пароль?</a
                  >
                </v-flex>
                <v-flex xs6>
                  <v-btn
                    :loading="isLoading"
                    :disabled="isLoading"
                    block
                    large
                    color="primary"
                    @click="onSubmit"
                    >Войти
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>

    <!--        PopUp reset -->
    <v-dialog v-model="dialogRestorePassword" max-width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Востановление пароля
        </v-card-title>
        <v-card-text>
          Для восстановления доступа, пожалуйста, обратитесь к администратору
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialogRestorePassword = false">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  $_veeValidate: {
    validator: 'new',
  },
  name: 'LoginForm',
  data() {
    return {
      dialogRestorePassword: false,
      isLoading: false,
      loginRules: [(v) => !!v || 'Логин обязателен'],
      passwordRules: [(v) => !!v || 'Пароль обязателен'],
      form: {
        login: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    async onSubmit() {
      const result = await this.$refs.form.validate()
      if (result) {
        this.isLoading = true
        try {
          await this.login(this.form)
          this.$router.push('/lk')
        } catch (e) {
          this.dialogEnterError = true
        } finally {
          this.isLoading = false
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  font-size: 34px;
}
</style>
