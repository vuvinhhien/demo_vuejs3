import { createStore } from "vuex";

import { spinnerModule } from "./modules";

const store = createStore({
  modules: {
    spinner: spinnerModule,
  },
});

export default store;
