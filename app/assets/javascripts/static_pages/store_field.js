import Vue from 'vue';
import HTTP from './../http';

export default {
  computed: {
  },
  data() {
    return {
      items: null,
    }
  },
  methods: {
    async fetch() {
      try {
        const {items: items} = await HTTP.get(`/api/items/`);
        this.items = items;
      } catch (e) {
        alert("Something went wrong!");
      }
    },
  },
  mounted() {
    this.fetch();
  },
};
