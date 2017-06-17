import page from './../utils/page';
import Vue from 'vue';

import eventForm from './event_form.vue';

page('events', 'new', () => {
  new Vue({
    el: '#event-form',
    render(createElement) {
      return createElement(eventForm);
    }
  });
});
