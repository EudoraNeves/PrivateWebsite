<template>
  <div class="intro">
    <div class="selfie">
      <img src="../assets/selfie.jpg" />
    </div>
    <div class="introText">
      <h1 class="name">{{ name }}</h1>
      <div class="profession">{{ profession }}</div>
      <div class="briefIntro">{{ briefIntro }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "intro",
  components: {
  },
  props: {
    // selfie: String,
    name: String,
    profession: String,
    briefIntro: String
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
.selfie img {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #ffffff;
}

.name {
  font-weight: 500;
  font-size: 48px;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  text-align: center;
}

.profession {
  font-size: 28px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  text-align: center;
}

.briefIntro {
  width: 800px;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
