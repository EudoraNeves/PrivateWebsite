<template>
  <canvas id="canvas" width="300" height="200"></canvas>
</template>

<script>
import { setInterval } from "timers";
// import mediasicon from "@/components/mediasicon.vue";

export default {
  name: "canvass",

  components: {},

  props: {},

  data() {
    return {
      recW: 30,
      recH: 30,
      cirX: Math.random() * 300,
      cirY: Math.random() * 200,
      cirDx: (Math.random() - 0.5) * 8,
      cirDy: (Math.random() - 0.5) * 8,
      cirR: 20
    };
  },

  methods: {
    draw() {
      let canvas = document.getElementById("canvas");
      let canvasWidth = canvas.width;
      let canvasHeight = canvas.height;
      let c = canvas.getContext("2d");
      //text
      c.fillStyle = "yellow";
      c.font = "20px Arial";
      c.strokeText("canvas", 10, 50);// fillText实心， strokeText空心
      requestAnimationFrame(this.draw);
      // //line
      // c.beginPath();
      // c.moveTo(50, 150);
      // c.lineTo(125, 50);
      // c.lineTo(250, 150);
      // c.lineTo(50, 150);
      // c.strokeStyle = "#00BCD4";
      // c.stroke();

      // //rectangle
      // for (var i = 0; i <= 30; i++) {
      //   let tx = Math.random() * canvasWidth;
      //   let ty = Math.random() * canvasHeight;
      //   c.fillStyle = "rgba(255, 0, 0, 0.5)";
      //   c.fillRect(tx, ty, this.recW, this.recH);
      //   c.fillStyle = "rgba(0, 255, 0, 0.5)";
      //   c.fillRect(tx + 80, ty + 80, this.recW, this.recH);
      //   c.fillStyle = "rgba(0, 0, 255, 0.5)";
      //   c.fillRect(tx + 150, ty + 120, this.recW, this.recH);
      // }

      //circle/arc
      // for (var j = 0; j <= 0; j++) {
      //   let x = Math.random() * canvasWidth;
      //   let y = Math.random() * canvasHeight;
      //   c.beginPath();
      //   c.arc(x, y, 20, 0, Math.PI * 2, false); //c.arc(x, y, r, startAngle, endAngle, drawCounterClockwise: Bool(false))
      //   c.strokeStyle = "#000000";
      //   c.stroke();
      //   x += 1;
      //   y += 1;
      c.clearRect(0, 0, canvasWidth, canvasHeight); //橡皮擦擦掉整个canvas大小的图画
      c.beginPath();
      c.arc(this.cirX, this.cirY, this.cirR, 0, Math.PI * 2, false); //c.arc(x, y, r, startAngle, endAngle, drawCounterClockwise: Bool(false))
      c.strokeStyle = "#00BCD4";
      c.stroke();

      this.cirX += this.cirDx;
      this.cirY += this.cirDy;

      if (this.cirX + this.cirR > canvasWidth || this.cirX - this.cirR < 0) {
        this.cirDx = -this.cirDx;
      }
      if (this.cirY + this.cirR > canvasHeight || this.cirY - this.cirR < 0) {
        this.cirDy = -this.cirDy;
      }
    }

  },

  mounted: function() {
    // this.draw();
    setInterval(this.draw(), 1000);
  }
};
</script>

<style lang="scss" scoped>
canvas {
  margin: 60px 0!important;
  height: 186px;
  background: #000000;
  box-sizing: border-box;
  margin: auto 0;
}
</style>
