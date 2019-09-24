<template v-slot:education>
  <div class="education">
    <div class="educationItem" v-for="(school, index) in schools" :key="index">
      <h3 class="degree">{{ $t(school + '-degree') }}</h3>
      <div class="construction">{{ $t(school + '-school') }}</div>
      <div class="time">{{ $t(school + '-time') }}</div>
      <br />
      <div class="description" v-html="$t(school + '-description')"></div>
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
      schools: ['sololearn', 'university'],
    };
  },

  methods: {
    // changeVhtmlStyle () {
    //   let textHrefSoloLearn = document.getElementsByClassName('description')[0].childNodes[0]
    //   textHrefSoloLearn.style.color = '#000000'
    // }
  },

  mounted: function() {
    // this.changeVhtmlStyle()
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

.description a {
  color: #000000 !important;
}
</style>
