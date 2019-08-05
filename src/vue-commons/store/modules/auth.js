import axios from 'axios'

export default {
  state: {
    token: localStorage.getItem('access_token') || null
  },
  mutations: {
    retrieve_token(state, token) {
      state.token = token;
    },
    destroy_token(state) {
      state.token = null;
    }
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        if (credentials.username == 'admin' && credentials.password == 'awesome') {
          let token = 'this-is-token';
          localStorage.setItem('access_token', token);
          context.commit('retrieve_token', token);
          resolve('Right');
        } else {
          reject('Wrong');
        }

      }) // nanti loginnya pake yang bawah
      // return new Promise((resolve, reject) => {
      //   axios.post('/login', {
      //     username: credentials.username,
      //     password: credentials.password
      //   })
      //     .then(response => {
      //       const token = response.data.token;
      //       localStorage.setItem('access_token', token);
      //       context.commit('retrieve_token', token);
      //       console.log(response);
      //       resolve(response);
      //     })
      //     .catch(error => {
      //       console.error(error);
      //       reject(error);
      //     })
      // })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('access_token');
              context.commit('destroy_token');
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem('access_token');
              context.commit('destroy_token');
              reject(error);
            })
        })
      }
    },
  }
}
