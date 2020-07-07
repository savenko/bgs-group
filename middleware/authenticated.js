export default function ({ store, redirect }) {
  console.log(store.getters['auth/isLogin'])
  if (!store.getters['auth/isLogin']) {
    return redirect('/login')
  }
}
