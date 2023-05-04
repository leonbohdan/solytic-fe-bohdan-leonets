import { createApp } from "vue";
import { createPinia } from "pinia";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "@/plugins/apollo-client";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ApolloProvider(apolloClient));

app.mount("#app");
