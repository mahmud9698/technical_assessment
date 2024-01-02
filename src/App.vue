<template>
  <div>
    <div class="relative bg-[#000000] slide">
      <LandingPage />
      <Masthead />
      <AboutGo />
      <WhatWeDo />
      <UnforgettableResult />
      <WhatClientSay />
      <SuperProud />
      <LetsChat />
      <ContactUs/>
      <OurOffice/>
      <Footerr />
      <div class="clear-both">

      </div>
    </div>
    
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue"
import Masthead from "./components/MastHead.vue"
import WhatWeDo from "./components/WhatWeDo.vue"
import ContactUs from "./components/ContactUs.vue"
import OurOffice from "./components/OurOffice.vue"
import LetsChat from "./components/LetsChat.vue"
import Footerr from "./components/Footerr.vue"
import AboutGo from "./components/AboutGo.vue"
import UnforgettableResult from "./components/UnforgettableResult.vue"
import WhatClientSay from "./components/WhatClientSay.vue"
import SuperProud from "./components/SuperProud.vue"
export default {
  name: "App",
  components: { LandingPage, Masthead, WhatWeDo, ContactUs, OurOffice, LetsChat, Footerr, AboutGo, UnforgettableResult, WhatClientSay, SuperProud },
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