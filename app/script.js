new Vue({
  el: "#app",
  data: {
    health: 100,
    ended: false,
  },
  methods: {
    punch() {
      // if (this.health <= 0) {
      //   this.ended = true;
      // } else {
      //   this.health -= 10;
      // }

      this.health <= 0 ? (this.ended = true) : (this.health -= 10);
    },
    restart() {
      this.health = 100;
      this.ended = false;
    },
  },
  computed: {},
});
