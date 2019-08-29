<template>
  <div class="media">
    <a :href="mediaLink" target="_blank">
      <svg style="width:16px;height:16px" viewBox="0 0 24 24">
        <path fill="#ffffff" :d="icon" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "mediaIcon",
  props: {
    mediaLink: String,
    icon: String
  }
};
</script>

<style scoped>
.media {
  border: 1px solid white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
  margin-right: 8px;
  text-align: center;
}
</style>

