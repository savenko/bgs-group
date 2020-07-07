const userData = {
  name: '',
  email: '',
  photo: '',
}

export const state = () => ({
  user: { ...userData },
})

export const mutations = {
  auth_success(state, data) {
    state.user = data
    this.$cookies.set('user', state.user)
  },
  logout(state) {
    state.user = { ...userData }
    this.$cookies.set('user', state.user)
  },
}

export const getters = {
  isLogin: (state) => !!state.user.name,
}

export const actions = {
  init(context, req) {
    if (req.headers.cookie) {
      const user = this.$cookies.get('user')
      if (user) {
        context.commit('auth_success', user)
      }
    }
  },
  async login({ commit }, user) {
    const { data } = await this.$axios.post('/api/login', user)
    commit('auth_success', data)
  },
  async logout({ commit }) {
    await this.$axios.post('/api/logout')
    commit('logout')
  },
}
