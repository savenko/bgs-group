export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    Promise.all([await dispatch('auth/init', req)])
  },
}
