<template>
  <div class="getInTouch">
    <div class="profile">
      <img :src="`${publicPath}selfie.jpg`" />
    </div>
    <div class="text">
      <p>
        I'm a new mummy and started self learning of web front-end developing since my pregnancy in March, 2018. During the time staying at home, I spent around 4 hours daily during weekdays on learning and practising. My husband, a senior developer thinks I'm doing okay and should be good for the first job. <strong>So contact me if you're interested in hiring (currently living in Shanghai)</strong>. 
      </p>
      <p>
        <strong>Also, if you're just seeking for a small projects building, I'm also here. I can help with following: </strong>
      </p>
      <ul class="services">
        <li>
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path
              fill="#00BCD4"
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg>website modification / rebuiding
        </li>
        <li>
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path
              fill="#00BCD4"
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg>mini program developing
        </li>
      </ul>
      <p>
        Drop me a line at
        <a href="mailto:1052288068@qq.com">1052288068@qq.com</a> or call me at
        <a href="tel:008615355156713">+86 15355156713</a>
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
  data () {
      return {
          publicPath: process.env.BASE_URL
      }
  },
  components: {
    mediaIcons
  }
};
</script>

<style scoped>
.getInTouch {
  display: flex;
  flex-direction: row;
  text-align: left;
}
.profile img {
  width: 120px;
  height: 120px;
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
