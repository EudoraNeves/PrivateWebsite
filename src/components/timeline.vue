<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="(company, index) in companies" :key="index" large>
        <template v-slot:icon>
          <a :href="$t(company + '-link')" target="_blank">
            <v-avatar>
              <img class="companyLogo" :src="require('../assets/imgs/' + company + '.png')" />
            </v-avatar>
          </a>
        </template>
        <template v-slot:opposite>
          <div>{{ $t(company + '-name') }}</div>
          <div class="time">{{ $t(company + '-time') }}</div>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            <h3>{{ $t(company + '-title') }}</h3>
          </v-card-title>
          <v-card-text>
            <textarea>{{ $t(company + '-description') }}</textarea>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "timeline",
  props: {
    // companyImgSrc: String,
    // companyName: String,
    // title: String,
    // description: String
  },
  data() {
    return {
      companies: ['têdêcar', 'vado', 'fesco', 'kejian'],

      education: [
        {
          major: "Educational English",
          school: "Huaiyin normal university",
          schoolWebsite: "http://www.hytc.edu.cn/",
          time: "2011/9 - 2015/6",
          details: ""
        },

        {
          major: "web front-end developing",
          school: "sololearn",
          schoolWebsite: "https://www.sololearn.com",
          time: "2018/8 ~ present",
          details: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.v-avatar {
  width: 48px;
  height: 48px;
}

.v-avatar img {
  border-radius: 0;
  object-fit: contain;
}

/* .elevation-2 .v-card-text {
  width: 100%;
  padding-right: 15px;
  box-sizing: content-box;
}
 */
textarea {
  width: 100%;
  min-height: 250px;
}
</style>
