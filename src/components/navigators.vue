<template>
  <div class="navigators">
    <div class="navItem">
      <a href="#experienceSection">{{ $t('nav-experience') }}</a>
    </div>
    <div class="navItem">
      <a href="#educationSection">{{ $t('nav-education') }}</a>
    </div>
    <div class="navItem">
      <a href="#skillsSection">{{ $t('skills') }}</a>
    </div>
    <div class="navItem">
      <a href="#recommendationSection">{{ $t('nav-recommendation') }}</a>
    </div>
    <div class="navItem">
      <a href="#projectsSection">{{ $t('projects') }}</a>
    </div>
    <div class="navItem">
      <a href="#contactSection">{{ $t('nav-contact') }}</a>
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
