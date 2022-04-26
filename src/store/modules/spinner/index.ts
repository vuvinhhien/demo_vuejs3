const spinnerModule = {
  namespaced: true,
  state: {
    isLoading: false,
  },
  getters: {},
  actions: {
    setIsLoadingAction(context: any, payload: any) {
      context.commit("setIsLoadingMutation", { isLoading: payload.isLoading });
    },
  },
  mutations: {
    setIsLoadingMutation(state: any, payload: any) {
      state.isLoading = payload.isLoading;
    },
  },
};

export default spinnerModule;
