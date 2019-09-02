<template>
  <div class="navigators">
    <div class="navItem">
      <a href="#experienceSection">Experience</a>
    </div>
    <div class="navItem">
      <a href="#educationSection">Education</a>
    </div>
    <div class="navItem">
      <a href="#skillsSection">Skills</a>
    </div>
    <div class="navItem">
      <a href="#recommendationSection">Recommendation</a>
    </div>
    <div class="navItem">
      <a href="#projectsSection">Projects</a>
    </div>
    <div class="navItem">
      <a href="#contactSection">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigators",
  props: {}
};
</script>

<style scoped>
.navigators {
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.navItem {
  padding-right: 30px;
  line-height: 60px;
}

.navItem a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
</style>
