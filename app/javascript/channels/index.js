// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.


import Vue from 'vue'


const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)



document.addEventListener('DOMContentLoaded', () => {



  const app = new Vue({
    el: '#app',
    data: {
      x: 0,
      y: 0,
      message: 'Hello, world!!',
      url: 'https://google.com',
      urlTwitter: 'https://google.com',
      attribute: 'href',
      number: 0,
      countevent: 'click',
      twitterObject: {
        href: 'https://twitter.com',
        id: '31'
      }
    },
    computed: {
      lessThanThree: function() {
        return this.number < 3 ? "Less than three" : "Eq or gt than three";
      }
    },
    methods: {
      reverseMessage: function() {
//        this.message = this.message.split('').reverse().join('');


      },
      changeMousePosition(event, ratio) {
//        event.stopPropagation();
//        console.log(event);
        this.x = event.clientX * ratio;
        this.y = event.clientY * ratio;
      },
      countUp: function(times) {
        this.number += times;
      },
      myAlert : function() {
        console.log("enter");

      }
    }
  });



  console.log(app)
})





