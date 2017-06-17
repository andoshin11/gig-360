import page from './../utils/page';
import Vue from 'vue';

import eventField from './event_field.vue';

page('events', 'show', () => {
  new Vue({
    el: '#event-field',
    render(createElement) {
      return createElement(eventField);
    }
  });
});
