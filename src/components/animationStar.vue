<template>
  <div class="animation">
    <h3></h3>
    <!-- <div class="animationStars" ref="animationStars" v-html="svgs"> -->
    <div class="animationStars" ref="animationStars">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24" :class="[randomPosition]">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="yellow" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "animationStar",
  components: {},
  props: {},
  data() {
    return {
      svgs: [],
      viewbox: "0 0 24 24",
      path: "M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"
    };
  },
  methods: {
    // addStars() {
    //   for (var i = 0; i <= 15; i++) {
    //     var svgEle =
    //       "<svg style='width:24px;height:24px;position:absolute;' viewBox='0 0 24 24'><path fill='yellow' d='M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z' /></svg>";
    //     this.svgs.push(svgEle);
    //     console.log(this.$refs.animationStars.childNodes)
    //   }
    // },
    randomPosition() {
      // get all svg nodes
      //方法一： var svgs = this.$refs.animationStars.childNodes; 获取的是nodelist, 不是array
      //方法二：document.querySelectorAll("selector")
      var svgs = document.querySelectorAll(".animationStars>svg");
      svgs.forEach(el => {
        // el.style.left = Math.random() * 280 + "px";
        // el.style.top = Math.random() * 150 + "px"
        Object.assign(el.style, {
          left: Math.random() * 280 + "px",
          top: Math.random() * 150 + "px"
        });
      });
    },

    randomPositionChange() {
      setInterval(() => {
        this.randomPosition();
      }, 6000); 
      //setInterval(this.randomPosition(), 200)这样是错误的，因为setInterval()是pure JS function, 这里的this指的是window object,所以必须是arrow函数(因为这是在vue里面创建的function,所以里面的this获得的是vue对象。
    },

    blink() {
      var svgs = this.$refs.animationStars.childNodes;

      //因为var svg获取的是nodelist, 要讲其转成array,用： [].slice.call()
      var svgsArray = [].slice.call(
        document.querySelectorAll(".animationStars>svg")
      );
      let oddStars = svgsArray.filter((item, index) => {
        return index % 2 == 0;
      });
      let evenStars = svgsArray.filter((item, index) => {
        return index % 2 == 1;
      });
    }
  },
  mounted: function() {
    // this.addStars();
    this.randomPosition();
    this.blink();
    this.randomPositionChange();
  }
};
</script>

<style lang="scss" scoped>

.animation {
  margin: 60px 0!important;
  width: 300px;
  height: 186px;
  border: 1px solid black;
  margin: 15px;
  background-color: black;
  position: relative;
  svg {
    position: absolute;
  }
}

svg:nth-child(odd) {
  animation: fadeToggleOdd 2s linear infinite alternate;
}

svg:nth-child(even) {
  animation: fadeToggleEven 2s linear infinite 1s alternate;
}

@keyframes fadeToggleOdd {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeToggleEven {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>