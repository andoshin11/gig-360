import page from './../utils/page';
import Vue from 'vue';

import storeField from './store_field.vue';

page('static_pages', 'store', () => {
  new Vue({
    el: '#store-field',
    render(createElement) {
      return createElement(storeField);
    }
  });
});
