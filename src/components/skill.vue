<template>
  <div class="skills">
    <div class="skill" v-for="(tech, index) in techs" :key="index">
      <div class="text-center">
        <v-progress-circular
          :rotate="-90"
          :size="110"
          :width="5"
          :value="$t(tech + '-paintValue')"
          color="#00BCD4"
        >{{ $t(tech + '-value') }}</v-progress-circular>
      </div>
      <div class="skillInfo">
        <div class="skillName">{{ $t(tech + '-name') }}</div>
        <div class="skillDegreeYear">{{ $t(tech + '-degree') }}, {{ $t(tech + '-year') }}</div>
        <div class="skillDescription">{{ $t(tech + '-description') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "canvass",

  components: {},

  props: {},

  data() {
    return {
      techs: ['html5', 'css3', 'vue', 'js', 'jQuery'],
      skills: [
        {
          paintValue: "90",
          value: "90%",
          name: "HTML5",
          degree: "excellent",
          year: "1 year",
          description:
            "Able to develop independently with HTML and HTML5, had some practice daily"
        },
        {
          paintValue: "80",
          value: "80%",
          name: "CSS3",
          degree: "good",
          year: "1 year",
          description:
            "Able to develop independently with CSS and CSS3, had some practice daily"
        },
        {
          paintValue: "60",
          value: "60%",
          name: "VUE.JS",
          degree: "so-so",
          year: "1 year",
          description:"Understand basic concepts of Vue.js and its components library vuetify, able to develop independently. Had some practice daily."
        },
        {
          paintValue: "40",
          value: "40%",
          name: "JAVASCRIPT (ES6)",
          degree: "raw",
          year: "1 year",
          description:
            "Understand basic concepts of Javascript, had some practice daily but need to check for help online frequently."
        },
        {
          paintValue: "40",
          value: "40%",
          name: "JQUERY",
          degree: "raw",
          year: "1 year",
          description:
            "Understand basic concepts of jQuery. Familiar with its plugins like pictures' lazy-loading, full-page scrolling, bootstrap and its components and plugins, etc."
        }
      ]
    };
  },

  methods: {
    whatever() {
      return JSON.stringify(this.skills)
    }
  }
};
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.skill {
  width: 320px;
  min-height: 300px;
}

.v-progress-circular {
  margin: 1rem;
}

.skillPercentage {
  line-height: 110px;
}

.skillName {
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.skillDegreeYear {
  color: #8a8a8a;
  margin-bottom: 15px;
  font-size: 14px;
}

.skillDescription {
  color: #666;
  font-size: 14px;
}
</style>
