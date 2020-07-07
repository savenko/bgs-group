import MockAdapter from 'axios-mock-adapter'

export default function ({ $axios, redirect }) {
  const mock = new MockAdapter($axios)
  mock
    .onPost('/api/login', { login: 'savenko', password: '123456' })
    .reply(200, {
      name: 'savenko',
      email: 'sovahome85@gmail.com',
      photo: '/avatar.jpg',
    })

  mock.onPost('/api/logout').reply(200)
}
