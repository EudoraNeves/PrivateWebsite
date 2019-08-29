<template>
  <div class="wavyCircles">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
import { delay } from "q";
// import mediasicon from "@/components/mediasicon.vue";

export default {
  name: "wavyCircle",

  components: {},

  props: {},

  data() {
    return {};
  },

  methods: {
    circleSizing() {
      let circles = document.getElementsByClassName("circle");
      for (let i = 0; i <= circles.length - 1; i++) {
        circles[i].style.top = 10 * i + 50 + "px";
        circles[i].style.bottom = 10 * i + 50 + "px";
        circles[i].style.left = 10 * i + 50 + "px";
        circles[i].style.right = 10 * i + 50 + "px";
        circles[i].style['animation-delay'] = 0.1 * (circles.length-i) + "s";
      }
    }
  },

  mounted: function() {
    this.circleSizing();
  }
};
</script>

<style lang="scss" scoped>
.wavyCircles {
  width: 300px;
  height: 300px;
  background: #000000;
  margin: auto;
  position: relative;

  transform-style: preserve-3d;
  transform: perspective(600px) rotateX(60deg);

  .circle {
    border: 1px solid #00bcd4;
    border-radius: 50%;

    position: absolute;
    left: 50px;
    right: 50px;
    top: 50px;
    bottom: 50px;

    animation: wave 3s ease-in infinite;
    transform: translate3d(550px 550px -100px)
    // transform: translateZ(-100px);
  }

  @keyframes wave {
    0%, 100% {
      transform: translate3d(550px 550px -100px);
    }
    50% {
      transform: translateZ(100px);
    }
  }
}
</style>