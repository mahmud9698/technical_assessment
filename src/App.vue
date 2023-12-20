<template>
  <div>
    <div class="relative bg-[#000000] slide">
      <LandingPage />
      <!-- <R2MenuExpand /> -->
      <!-- <R2Menu /> -->
      <Masthead />
      <!-- <WhatWeDo /> -->
      <!-- <ContactUs/> -->
      
      
      <!-- <LetsChat /> -->
      <!-- <OurOffice/> -->
      <!-- <Footerr /> -->
      <div class="clear-both">

      </div>
    </div>
    
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue"
import R2Menu from "./components/R2Menu.vue"
import Masthead from "./components/MastHead.vue"
import WhatWeDo from "./components/WhatWeDo.vue"
import ContactUs from "./components/ContactUs.vue"
import OurOffice from "./components/OurOffice.vue"
import R2MenuExpand from "./components/R2MenuExpand.vue"
import LetsChat from "./components/LetsChat.vue"
import Footerr from "./components/Footerr.vue"
export default {
  name: "App",
  components: { LandingPage, Masthead, WhatWeDo, ContactUs, OurOffice, R2MenuExpand, LetsChat,Footerr },
  data() {

  }
}
</script>

<style scoped>
  .slide{
    margin-top: 50vh;
    animation-name: slide-slide;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
  @keyframes slide-slide {
    from {margin-top: 50vh;}
    to {margin-top: 0vh;}
  }
</style>