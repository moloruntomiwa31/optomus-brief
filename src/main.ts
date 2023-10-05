import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faPenToSquare,
  faBookmark,
  faHeart,
  faContactBook,
  faSquarePlus,
  faCircleLeft,
  faFaceSmile,
  faCircleCheck,
  faCircleQuestion,
  faSquare,
  faArrowAltCircleUp,
  faSadTear,
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faUser,
  faPenToSquare,
  faBookmark,
  faHeart,
  faContactBook,
  faSquarePlus,
  faCircleLeft,
  faFaceSmile,
  faCircleCheck,
  faCircleQuestion,
  faSquare,
  faArrowAltCircleUp,
  faSadTear,
  faArrowAltCircleUp
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
