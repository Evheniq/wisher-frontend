import { createApp } from "vue";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./index.scss";

library.add(faPlus);
library.add(faXmark);
library.add(faSpinner);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
