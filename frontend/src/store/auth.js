import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    token: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null);
      router.push('/login');
    },
    register({ commit, state }) {
      commit('setRegisterError', null);
      return HTTP()
        .post('auth/register', {
          email: state.registerEmail,
          password: state.registerPassword,
        })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setRegisterError', 'Error Occured, while creating your account.');
        });
    },
    login({ commit, state }) {
      commit('setLoginError', null);
      return HTTP()
        .post('auth/login', {
          email: state.loginEmail,
          password: state.loginPassword,
        })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setLoginError', 'Wrong Credencials, try again');
        });
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },

    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setloginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
  },
};
