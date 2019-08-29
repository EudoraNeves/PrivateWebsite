<template>
  <div class="page">
    <div class="header">
      <div class="firstLine">
        <mediaIcons iconClassName="mediaHeader"></mediaIcons>
        <div class="hireDownload">
          <a href="tel: 15355156713"><hireDownload buttonText="hire me"></hireDownload></a>
          <a :href="`${publicPath}cv_eudora.docx`" download>
            <hireDownload buttonText="download my resume"></hireDownload>
          </a>
        </div>
      </div>
      <div class="secondLine">
        <intro
          name="Eudora Neves"
          profession="Web Front-end Developer"
          briefIntro="My major was English and I've been trying to take full use of it, but unfortunately, I was not quite sure what I want until now. I feel appreciated with my husband who helped bring me to software developing and i found it's my direction to go."
        ></intro>
      </div>
      <div class="thirdLine">
        <contact email="1052288068@qq.com" phone="+86 15355156713" web="#"></contact>
      </div>
      <div class="fourthLine">
        <navigators></navigators>
      </div>
    </div>

    <div class="contents">
      <section id="experienceSection">
        <h2 class="sectionTitle">work experience</h2>
        <div class="sectionContent">
          <timeline></timeline>
        </div>
      </section>
      <section id="educationSection">
        <h2 class="sectionTitle">education / training</h2>
        <div class="sectionContent">
          <education></education>
        </div>
      </section>
      <section id="skillsSection">
        <h2 class="sectionTitle">skills</h2>
        <div class="sectionContent">
          <skill></skill>
        </div>
      </section>
      <section id="recommendationSection">
        <h2 class="sectionTitle">recommendation letters</h2>
        <div class="sectionContent">
          <recommendation></recommendation>
        </div>
      </section>
      <section id="projectsSection">
        <h2 class="sectionTitle">projects</h2>
        <div class="sectionContent projectContent">
          <projects></projects>
          <div class="cssAnimation">
            <h1 class="cssAnimationTitlle">CSS (canvas, animation)</h1>
            <div class="cssAnimationWork">
              <canvass></canvass>
              <wavyCircle></wavyCircle>
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection">
        <h2 class="sectionTitle">Get in Touch</h2>
        <div class="sectionContent">
          <getInTouch></getInTouch>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mediaIcon from "@/components/mediaIcon.vue";
import mediaIcons from "@/components/mediaIcons.vue";
import hireDownload from "@/components/hireDownload.vue";
import intro from "@/components/intro.vue";
import contact from "@/components/contact.vue";
import navigators from "@/components/navigators.vue";
import timeline from "@/components/timeline.vue";
import education from "@/components/education.vue";
import recommendation from "@/components/recommendation.vue";
import projects from "@/components/projects.vue";
import axios from "axios";
// import JQuery from "JQuery";
import canvass from "@/components/canvass.vue";
import skill from "@/components/skill.vue";
import wavyCircle from "@/components/wavyCircle.vue";
import getInTouch from "@/components/getInTouch.vue";

export default {
  name: "home",

  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },

  components: {
    mediaIcon,
    mediaIcons,
    hireDownload,
    intro,
    contact,
    navigators,
    timeline,
    education,
    recommendation,
    projects,
    canvass,
    skill,
    wavyCircle,
    getInTouch
  },

  methods: {
    // wechat() {
    //   let wechat = document.getElementsByClassName("mediasHeader")[0]
    //     .childNodes[2];
    //   wechat.addEventListener("click", alertWechat);
    //   function alertWechat() {
    //     alert("add me in weChat: eudora_neves");
    //     wechat.childNodes[0].removeAttribute("href");
    //   }
    // },
    downloadFile() {
      axios({
        url: "../assets/imgs/cv_eudora.docx",
        method: "GET",
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "eudoraCV.docx"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    }

    // changeSVG() {
    //   let bottomSVGWidth = document.getElementsByClassName("mediaBottom")[0]
    //     .childNodes[0].childNodes[0].style.width;
    //   let bottomSVGHeight = document.getElementsByClassName("mediaBottom")[0]
    //     .childNodes[0].childNodes[0].style.height;

    //   bottomSVGWidth = 21 + "px";
    //   bottomSVGHeight = 24 + "px";

    //   console.log(bottomSVGWidth)
    // }
  },
  mounted: function() {
    // this.wechat();
    // this.changeSVG();
  }
};
</script>

<style>
* {
  font-family: "roboto", sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: #ffffff;
}

button:hover {
  text-shadow: 0 0 10px #ffffff;
  background-color: #00A5BB;
}

.header {
  /* height: 717px; */
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: column;
}

.firstLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 120px;
  background-color: #00bcd4;
}
.medias {
  padding-left: 15px;
}

.mediaHeader {
  border: 2px solid rgba(255, 255, 255, 0.8);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
  margin-right: 8px;
  text-align: center;
}

.mediaBottom {
  width: 21px;
  height: 36px;
  line-height: 36px;
  margin-right: 10px;
}

.mediaBottom:first-child {
  margin-left: -15px !important;
}

.mediaBottom a svg {
  width: 24px !important;
  height: 36px !important;
}

.mediaBottom a svg path {
  fill: #8a8a8a;
}
.mediasHeader:nth-child(3) {
}

.hireDownload {
  display: flex;
  flex-direction: row;
}

.secondLine {
  background-color: #00a5bb;
  position: relative;
}

.selfie {
  position: absolute;
  top: -80px;
  left: 50%;
  margin-left: -80px;
}

.introText {
  padding: 90px 0 60px 0;
}

.thirdLine {
  background-color: #008fa1;
}

.fourthLine {
  background-color: #007888;
  height: 60px;
}

/*sections*/
/* section {
  content: "dddd";
  width: 1050px;
  height: 500px;
  padding: 45px;
  background-clip: padding-box;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14)
} */

.contents {
  padding: 60px 15px;
  background-color: #f5f5f5;
}

section {
  width: 1050px;
  min-height: 200px;
  margin: 0 auto 45px auto;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background: #ffffff;
  padding: 45px;
  border-radius: 2px;
  background-clip: padding-box;

  text-align: center;
}

.sectionTitle {
  margin-bottom: 45px;
  text-transform: capitalize;
}

h1 h2 h3 h4 h5 h6 {
  font-weight: 500;
}

h3 {
  color: #00bcd4;
  font-size: 18px;
}

.time {
  color: #8a8a8a;
  font-size: 14px;
}
.construction {
  font-size: 16px;
  font-weight: 300;
}

.projectContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cssAnimation {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cssAnimationTitlle {
  margin-top: 20px !important;
}

.cssAnimationWork {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

