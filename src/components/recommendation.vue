<template>
  <div class="carousel">
    <div class="containerRecommendation">
      <div class="slider">
        <div class="slide" v-for="(recommendation, index) in recommendations" :key="index">
          <div class="iconHolder">
            <svg style="width:36px;height:36px" viewBox="0 0 24 24">
              <path fill="#fff" d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />
            </svg>
          </div>

          <div class="recommedationText">
            <p>{{ recommendation.quote }}</p>
            <div class="source">
              <div class="name">{{ recommendation.name }}</div>
              <div class="position">{{ recommendation.position }}</div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
    <ul class="indicators">
      <a href=""><li class="indicator"></li></a>
      <a href=""><li class="indicator"></li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommendation",
  props: {},
  data() {
    return {
      recommendations: [
        {
          quote:
            "I've been extremely impressed with not only your ability and intelligence, but also your attitude towards the work you are doing. It is so lovely to see someone so much wanting to get things right and accurate.\
I am of the strong belief that you are going to so well in Vado, and you are already one of our highly valued members of staff.",
          name: "Dan Carter",
          position: "area sales manager, Vado"
        },
        {
          quote:
            "I can recommend her strongly. She is smart and has a very fast grasp of new stuff”, “She is creative and always tried to find the best solution when problem occurred”, “I know she will continue to find success in any jobs because of her descent characteristic and working attitude.",
          name: "Cissy Shen",
          position: "department manager, Fesco Lines China"
        },
        {
          quote:
            "I've been extremely impressed with not only your ability and intelligence, but also your attitude towards the work you are doing. It is so lovely to see someone so much wanting to get things right and accurate.\
I am of the strong belief that you are going to so well in Vado, and you are already one of our highly valued members of staff.",
          name: "Dan Carter",
          position: "area sales manager, Vado"
        }
      ]
    };
  }
};
</script>

<style scoped>
p {
  margin: 0 0 1rem;
  line-height: 1.5;
  font-size: 22px;
  font-weight: 300;
  color: #666;
}

.containerRecommendation {
  min-height: 200px;
  text-align: left;
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

  overflow: hidden;
}

.slider {
  padding: 0.5px;
  width: 300%;
  height: 100%;
  display: flex;
  flex-direction: row;

  animation: slide 9s ease-in infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  45% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-33%);
  }

  95% {
    transform: translateX(-33%);
  }

  100% {
    transform: translateX(-66%);
  }
}

.slide {
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  width: 100%;
}

.name {
  font-size: 16px;
}

.position {
  color: #8a8a8a;
}

.indicators {
  display: flex;
  justify-content: center;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #bdbdbd;
  margin: 0 8px;
  border-radius: 50%;
  opacity: 0.5;
  list-style: none;
  cursor: pointer;
}

.iconHolder {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #00bcd4;
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-right: 15px;
}
</style>
