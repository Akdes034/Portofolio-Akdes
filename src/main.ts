import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/index.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComment, faMinus } from '@fortawesome/free-solid-svg-icons'



// Add icons to the library
library.add(faGithub, faLinkedin, faTwitter);
library.add(faComment, faMinus)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
