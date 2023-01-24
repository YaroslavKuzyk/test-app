export const state = () => ({
  isAuth: false,
  notification: false,
});

export const getters = {
  getAuth(state) {
    return state.isAuth;
  },
  getNotification(state) {
    return state.notification
  }
};
export const mutations = {
  SET_AUTH(state, payload) {
    state.isAuth = payload;
  },

  SET_NOTIFICATION(state, payload) {
      state.notification = payload
  }
};

export const actions = {
  authenticated({ commit }) {
    if (localStorage.getItem("token")) {
      commit("SET_AUTH", true);
    }
  },
};
