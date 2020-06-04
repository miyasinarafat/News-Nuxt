import axios from "@/plugins/axios";

export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
};

export const actions = {
  async nuxtServerInit({commit}) {
    const response = await axios.get('users');
    const users = response.data;
    commit('setUsers', users);
  }
};
