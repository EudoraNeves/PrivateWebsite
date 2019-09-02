<template v-slot:education>
  <div class="education">
    <div class="educationItem" v-for="(education, index) in educations" :key="index">
      <h3 class="degree">{{ education.degree }}</h3>
      <div class="construction">{{ education.school }}</div>
      <div class="time">{{ education.time }}</div>
      <br />
      <div class="description" v-html="education.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "education",
  props: {
    // companyImgSrc: String,
    // companyName: String,
    // title: String,
    // description: String
  },
  data() {
    return {
      educations: [
        {
          degree: "web front-end developing",
          school: "sololearn",
          schoolWebsite: "https://www.sololearn.com",
          time: "2018/8 ~ present",
          description:
            "<a href='https://www.sololearn.com/'>Sololearn</a> is the largest online community of mobile code learners.<br /><br /> Course finished: <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <b>Jquery</b><br /><br/>Other skills: <b>Vue.js</b>"
        },

        {
          degree: "Educational English",
          school: "Huaiyin normal university",
          schoolWebsite: "http://www.hytc.edu.cn/",
          time: "2011/9 - 2015/6",
          description: ""
        }
      ]
    };
  },

  methods: {
    changeVhtmlStyle () {
      let textHrefSoloLearn = document.getElementsByClassName('description')[0].childNodes[0]
      textHrefSoloLearn.style.color = '#000000'
    }
  },

  mounted: function() {
    this.changeVhtmlStyle()
  }
};
</script>

<style lang="scss" scoped>
.education {
  display: flex;
  flex-direction: row;
  text-align: left;
}

.educationItem {
  margin-bottom: 45px;
  padding: 0 15px;
  flex: 1;
}

.description {
  color: #666;
}

.education .educationItem .description:chi {
  color: #000000 !important;
}
</style>
