// *Vue:
import {createApp} from 'vue';
// *Vue integrations:
import store from './stores/store.mjs';
import router from './router.mjs';
// *Root component:
import VRoot from './v-root.vue';

const app = createApp(VRoot);

// app.config.productionTip = process?.env?.NODE_ENV === 'development';
// app.config.performance = process?.env?.NODE_ENV === 'development';

app.use(router);
app.use(store);

// app.provide('state', store.globalState);

app.mount('#app');
