<template>
  <div class="projectsContainer">
    <div class="project" v-for="(web, index) in webs" :key="index">
      <figure class="figure">
        <img :src="require('../assets/imgs/' + web + '.png')" />
      </figure>
      <div class="projectText">
        <div class="projectName">{{ $t(web + '-name') }}</div>
        <div class="projectTech">{{ $t(web + '-tech') }}</div>
        <a class="projectSource" :href="$t(web + '-source')" target="_blank">{{ $t('github') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  props: {},
  data() {
    return {
      webs: ['weather', 'artifact', 'eudora'],
    };
  }
};
</script>

<style scoped>
.projectsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  text-align: left;
}

.project {
  background-color: #00bcd4;
  width: 247.5px;
  height: 295.781px;
  margin: 0 15px;
  margin-bottom: 30px;
  flex: 1;
}

.figure img {
  width: 100%;
}

.projectText {
  margin: 30px 30px 75px;
}

.projectName {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
}

.projectTech {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 30px;
}
</style>
