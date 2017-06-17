import Vue from 'vue';
import HTTP from './../http';

export default {
  data() {
    return {
      msg: "This is Shin",
      event: {
        title: null,
        description: null,
        startAt: null,
        endAt: null,
        movieLink: null,
      }
    };
  },
  methods: {
    async send() {
      try {
        await HTTP.post('/api/events', {
          event: this.event,
        });
        window.location.href = '/';
      } catch (e) {
        alert("Something went wrong!");
      }
    },
    fill() {
      this.event = {
        title: "70s Heavy Rock",
        description: "Bring you back in time!",
        startAt: "2017-10-01 00:00:00",
        endAt: "2017-10-01 02:00:00",
        movieLink: "https://www.youtube.com/watch?v=0RmmS8dt_ik"
      }
    }
  },
  mounted() {
  },
};
