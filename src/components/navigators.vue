<template>
  <div class="navigators" :class="{ navBarFixed: isFixed }" ref="navigators">
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
  props: {},
  data() {
    return {
      isFixed: false
    };
  },
  methods: {
    initTimer: function() {
      if (window.pageYOffset >= 655) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }

    // fixNavBar: function(e) {
    //   let navBar = this.$refs.navigators;
    //   let navBaroffsetTop = navBar.offsetTop; //console.log(navBaroffsetTop), it's always "0"??
    //   let documentScrollTop = document.body.scrollTop;
    //   // let documentScrollTop = window.pageYOffset;

    //   console.log(1);
    //   console.log(documentScrollTop);

    //   window.onscroll = function() {
    //     if (
    //       documentScrollTop >= navBaroffsetTop ||
    //       document.documentElement.scrollTop >= navBaroffsetTop
    //     ) {
    //       this.isFixed = true;
    //     } else {
    //       this.isFixed = false;
    //     }
    //   };
    // }
  },
  mounted: function() {
    setInterval(() => {
      this.initTimer();
    }, 50);
    // this.fixNavBar();

    // window.onscroll = this.fixNavBar() //WRONG, should be like window.onscroll = this.fixNavBar. if you put parentheses after function name, this will call the function and assign the value to window.onscroll while window.onscroll is expecting a handler of type function.
  }

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

.navBarFixed {
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  background-color: #007888;
  z-index: 999;
}
</style>
