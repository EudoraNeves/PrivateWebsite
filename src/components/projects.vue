<template>
  <div class="projectsContainer">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <figure class="figure">
        <img :src="project.imgUrl" alt />
      </figure>
      <div class="projectText">
        <div class="projectName">{{ project.name }}</div>
        <div class="projectTech">{{ project.tech }}</div>
        <a class="projectSource">{{ project.source }}</a>
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
      projects: [
        {
          imgUrl: require("../assets/imgs/projectWeather.png"),
          name: "worldwide weekly weather",
          tech: "html, css, jQuery",
          source: "view on github"
        },
        {
          imgUrl: require("../assets/imgs/projectSBL.png"),
          name: "SBL company page",
          tech: "html, css",
          source: "view on github"
        },
        {
          imgUrl: require("../assets/imgs/projectArtifact.png"),
          name: "SBL company page",
          tech: "html, css, jQuery",
          source: "view on github"
        }
      ]
    };
  }
};
</script>

<style scoped>
.projectsContainer {
  display: flex;
  flex-direction: row;
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
