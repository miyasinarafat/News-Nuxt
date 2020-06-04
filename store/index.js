import axios from "@/plugins/axios";

export const state = () => ({
  ids: []
});

export const mutations = {
  setIds(state, ids) {
    state.ids = ids
  }
};

export const actions = {
  async nuxtServerInit({commit}) {
    const response = await axios.get('topstories.json');
    const ids = response.data;
    commit('setIds', ids);
  }
};
