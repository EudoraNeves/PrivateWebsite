<template v-slot:education>
  <div class="education">
    <div class="educationItem" v-for="(school, index) in schools" :key="index">
      <h3 class="degree">{{ $t(school + '-degree') }}</h3>
      <div class="construction"><a :href="$t(school + '-schoolWebsite')">{{ $t(school + '-school') }}</a></div>
      <div class="time">{{ $t(school + '-time') + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + $t(school + '-location') }}</div>
      <br />
      <div class="description" v-html="$t(school + '-description')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "education",
  props: {
  },
  data() {
    return {
      schools: ['numericALL', 'sololearn', 'university'],
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
a {
  color: #8a8a8a;
}
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
