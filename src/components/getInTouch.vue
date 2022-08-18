<template>
  <div class="getInTouch">
    <div class="profile">
      <img :src="`${publicPath}profile-photo.png`" />
    </div>
    <div class="text">
      <p v-html="$t('self-introduction')"></p>
      <p v-html="$t('service')"></p>
      <ul class="services">
        <li>
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path
              fill="#00BCD4"
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg> {{ $t('service1') }}
        </li>
        <li>
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path
              fill="#00BCD4"
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg> {{ $t('service2') }}
        </li>
      </ul>
      <p>
        {{ $t('email') }}
        <a href="mailto:1052288068@qq.com">hainazheng1991.com</a> {{ $t('call') }}
        <a href="tel:008615355156713">+352 621522397</a>
      </p>
      <mediaIcons iconsClassName="mediasBottom" iconClassName="mediaBottom"></mediaIcons>
    </div>
  </div>
</template>

<script>
import mediaIcons from "@/components/mediaIcons.vue";

export default {
  name: "getInTouch",
  props: {},
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    mediaIcons
  }
};
</script>

<style lang="scss" scoped>
.getInTouch {
  display: flex;
  flex-direction: row;
  text-align: left;
}
.profile img {
  width: 120px;
  height: 130px;
  margin: 0 auto;
  border-radius: 50%;
}

.text {
  margin: 30px;
  color: #666;
}

.text a {
  color: #00bcd4;
}

.text ul {
  margin: 0 0 15px 30px;
  list-style: none;
}

li,
p {
  margin-bottom: 15px;
}

svg {
  margin-right: 5px;
  width: 24px;
  height: 24px;
}

path {
  fill: #666 !important;
}
</style>
