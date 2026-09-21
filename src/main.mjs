// *Vue:
import {createApp} from 'vue';
import router from './router.mjs';
// *Root component:
import VRoot from './v-root.vue';

const app = createApp(VRoot);


app.use(router);

app.mount('#app');
