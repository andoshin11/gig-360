import Vue from 'vue';
import HTTP from './../http';

export default {
  computed: {
  },
  data() {
    return {
      events: null,
      activities: [
        {
          content: "Omg this is awesome! Give me more 360 youtube videos now!﻿",
          likes: 1095,
          user: {
            thumbnail: "https://yt3.ggpht.com/-QMwavTBl1MU/AAAAAAAAAAI/AAAAAAAAAAA/Mbv8rOrzleo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "SimsFinch",
          }
        },
        {
          content: "Was awesome directing this video! Love the song and loved the challenge of working in 360 :D﻿",
          likes: 1676,
          user: {
            thumbnail: "https://yt3.ggpht.com/-shpq0q_oQLY/AAAAAAAAAAI/AAAAAAAAAAA/y_8l2ZBxBLY/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Kurt Hugo Schneider",
          }
        },
        {
          content: "I was looking ridiccoulus moving my phone in the air 😂😂﻿",
          likes: 770,
          user: {
            thumbnail: "https://yt3.ggpht.com/-mfJDH1qqFBE/AAAAAAAAAAI/AAAAAAAAAAA/hKDv6_7kkUQ/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Cornelius Heintz",
          }
        },
        {
          content: "OH MY GOD. WHAAAAT.﻿",
          likes: 649,
          user: {
            thumbnail: "https://yt3.ggpht.com/-05NfAm0fsyE/AAAAAAAAAAI/AAAAAAAAAAA/e7dLQW62cxg/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Beckii Whiting",
          }
        },
        {
          content: "You can move the video soooooo cooool !!!!!﻿",
          likes: 4,
          user: {
            thumbnail: "https://yt3.ggpht.com/-5ReEqRFoMEM/AAAAAAAAAAI/AAAAAAAAAAA/0_0mCv8kZwU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Macarena Chamberlain",
          }
        },
        {
          content: "When I pause the video I feel like I just froze time but I can still look around﻿",
          likes: 587,
          user: {
            thumbnail: "https://yt3.ggpht.com/-HXjYzwdWP8o/AAAAAAAAAAI/AAAAAAAAAAA/eiFzj6ZZYOQ/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Mr. Ravioli",
          }
        },
        {
          content: "This is so amazing!!!! 😍﻿",
          likes: 2,
          user: {
            thumbnail: "https://yt3.ggpht.com/-ygBDXXP6XXY/AAAAAAAAAAI/AAAAAAAAAAA/r3AjZ7J4IOk/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Gustavo Mendonça",
          }
        },
        {
          content: "OMG i can move the camera im buggin out. Someone bring me back to life﻿",
          likes: 562,
          user: {
            thumbnail: "https://yt3.ggpht.com/-fVcpQxYL8zA/AAAAAAAAAAI/AAAAAAAAAAA/oiPVDnroCUQ/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "theinator25",
          }
        },
        {
          content: "this is the best video I've seen in my life , this great! :o﻿",
          likes: 1,
          user: {
            thumbnail: "https://yt3.ggpht.com/-p5kYjyNUVAI/AAAAAAAAAAI/AAAAAAAAAAA/DWL68iHIHPY/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            name: "Zoee Anahii",
          }
        },
      ],
    };
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
    embedUrl(url) {
      if (url) {
        const video_id = url.split("=");
        return "http://www.youtube.com/embed/" + video_id[1];
      } else {
        return null;
      }
    },
    eventUrl(event){
        return "/events/" + event.id;
    },
    random() {
      return Math.floor(( Math.random() * ( ( 7000 + 1 ) - 2000 ) ) + 2000);
    }
  },
  mounted() {
    this.fetch();
  },
};
