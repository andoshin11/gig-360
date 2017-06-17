import Vue from 'vue';
import HTTP from './../http';

export default {
  computed: {
  },
  data() {
    return {
      msg: "sup?"
    }
  },
  methods: {
    async fetch() {
      try {
        const {events: events} = await HTTP.get(`/api/events/`);
        this.events = events;
      } catch (e) {
        alert("Something went wrong!");
      }
    },
  },
  mounted() {
    // this.fetch();
  },
};
