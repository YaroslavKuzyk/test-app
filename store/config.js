export const state = () => ({
  isAuth: false,
});

export const getters = {
  getAuth(state) {
    return state.isAuth;
  },
};
export const mutations = {
  SET_AUTH(state, payload) {
    state.isAuth = payload;
  },
};

export const actions = {
  authenticated({ commit }) {
    if (localStorage.getItem("token")) {
      commit("SET_AUTH", true);
    }
  },
};
