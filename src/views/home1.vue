<template>
  <div class="page">
    <button @click="backToTop()" id="myBtn" title="Go to top">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="rgba(255,255,0,0.6)"
          stroke="#fff"
          d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z"
        />
      </svg>
    </button>
    <div class="header">
      <div class="firstLine">
        <mediaIcons iconsClassName="mediasHeader" iconClassName="mediaHeader"></mediaIcons>
        <div class="hireDownload">
          <div class="locale-changer">
            <select v-model="$i18n.locale" class="locale-select" @click="setDownloadCV()">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.abbreviation">
                <img :src="lang.flag" />
                {{ lang.text }}
              </option>
            </select>
          </div>

          <a href="tel: 15355156713">
            <hireDownload :buttonText="$t('buttonText1')"></hireDownload>
          </a>
          <a :href="`${publicPath}haina_cv-${locale.toUpperCase()}.docx`" download>
            <hireDownload :buttonText="$t('buttonText2')"></hireDownload>
          </a>
        </div>
      </div>
      <div class="secondLine">
        <intro :name="$t('name')" :profession="$t('profession')" :briefIntro="$t('briefIntro')"></intro>
      </div>
      <div class="thirdLine">
        <contact email="1052288068@qq.com" phone="+86 15355156713" web="https://haina.website"></contact>
      </div>
      <div class="fourthLine">
        <navigators></navigators>
      </div>
    </div>
    <div class="contents">
      <section id="experienceSection">
        <h2 class="sectionTitle">{{ $t('work-experience') }}</h2>
        <div class="sectionContent">
          <timeline></timeline>
        </div>
      </section>
      <section id="educationSection">
        <h2 class="sectionTitle">{{ $t('education-training') }}</h2>
        <div class="sectionContent">
          <education></education>
        </div>
      </section>
      <section id="skillsSection">
        <h2 class="sectionTitle">{{ $t('skills') }}</h2>
        <div class="sectionContent">
          <skill></skill>
        </div>
      </section>
      <section id="recommendationSection">
        <h2 class="sectionTitle">{{ $t('recommendation') }}</h2>
        <div class="sectionContent">
          <recommendation></recommendation>
        </div>
      </section>
      <section id="projectsSection">
        <h2 class="sectionTitle">{{ $t('projects') }}</h2>
        <div class="sectionContent projectContent">
          <projects></projects>
          <div class="cssAnimation">
            <h1 class="cssAnimationTitlle">CSS (canvas, animation)</h1>
            <div class="cssAnimationWork">
              <div class="animation">
                <h4>canvas:</h4>
                <canvass></canvass>
              </div>
              <div class="animation">
                <h4>animation:</h4>
                <wavyCircle></wavyCircle>
              </div>
              <div class="animation">
                <h4>animation+JS:</h4>
                <animationStar></animationStar>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection">
        <h2 class="sectionTitle">{{ $t('get-in-touch') }}</h2>
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
import wavyCircle from "@/components/wavyCircle.vue";
import animationStar from "@/components/animationStar.vue";
import skill from "@/components/skill.vue";
import getInTouch from "@/components/getInTouch.vue";

export default {
  name: "home",

  data() {
    return {
      publicPath: process.env.BASE_URL,
      langs: [
        {
          abbreviation: "cn",
          text: "中文",
          flag: require("../assets/imgs/china.png")
        },
        {
          abbreviation: "en",
          text: "English",
          flag: require("../assets/imgs/uk.png")
        }
      ],
      locale: "en"
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
    animationStar,
    skill,
    wavyCircle,
    getInTouch
  },

  methods: {
    wechat() {
      let wechatHeader = document.getElementsByClassName("mediasHeader")[0]
        .childNodes[2];
      let wechatBottom = document.getElementsByClassName("mediasBottom")[0]
        .childNodes[2];
      wechatHeader.addEventListener("click", alertWechat);
      wechatBottom.addEventListener("click", alertWechat);

      function alertWechat() {
        alert("add me in weChat: eudora_neves");
        wechatHeader.childNodes[0].removeAttribute("href");
        wechatBottom.childNodes[0].removeAttribute("href");
      }
    },

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
    },

    topBtnAppear() {
      //Get the button:
      let mybutton = document.getElementById("myBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
    },

    backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },

    setDownloadCV() {
      let e = document.getElementsByClassName("locale-select")[0];
      this.locale = e.options[e.selectedIndex].value;
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
    this.wechat();
    this.topBtnAppear();
    // this.changeSVG();
    //this.cv();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  max-height: 100%;
}

a {
  text-decoration: none;
  color: #ffffff;
}

button:hover {
  text-shadow: 0 0 10px #ffffff;
  background-color: #00a5bb;
}

.header {
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
.mediasHeader,
.mediasBottom {
  padding-left: 15px;
  display: flex;
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

//CSS animation
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
  flex-wrap: wrap;
  justify-content: space-between;
}

#myBtn {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #c9c9c2; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 5px 20px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}

//language switch
.locale-changer {
  color: #000000;
  height: 25px;
  margin-right: 10px;
  margin-top: 10px;
  outline: none;
  font-size: 12px;
  select {
    padding: 3px;
    outline: none;
    option {
      background-color: transparent;
    }
  }
}

@media only screen and (max-width: 414px) {
  .mediaHeader {
    width: 24px;
    height: 24px;
    line-height: 24px !important;

    a svg {
      width: 14px !important;
      height: 14px !important;
    }
  }

  .hireDownload button {
    min-height: 24px;
    font-size: 10px;
    line-height: 12px;
  }

  section {
    width: 100%;
  }

  .getInTouch {
    flex-direction: column !important;

    .profile img {
      margin-left: 25%;
    }
  }

  .briefIntro {
    width: 90% !important;
  }

  .navigators .navItem {
    padding-right: 10px;

    a {
      font-size: 11px;
    }
  }

  .projectsContainer {
    .project {
      min-width: 80%;
    }
  }
  .v-timeline-item__divider {
    display: none !important;
  }
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
    .v-timeline-item--before,
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
    .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }

  .v-timeline-item__body {
    max-width: 100% !important;
    margin-right: -40px !important;
    .v-card__text {
      font-size: 12px !important;
    }
  }

  .v-timeline-item__opposite {
    max-width: calc(40% - 46px) !important;
    text-align: left !important;
    margin-left: -50px !important;
    padding-left: -50px !important;
    font-size: 12px !important;
    .time {
      font-size: 10px !important;
    }
  }
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before {
    left: calc(15% - 15px) !important;
  }
}
</style>

