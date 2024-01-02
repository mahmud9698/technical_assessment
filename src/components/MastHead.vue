<template>
  <R2MenuExpand v-if="showr2Menu" @closeMenu = "closeMenu" />
  <div class="<sm:w-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/rim-background.svg')]">
    <div class="w-full h-[115px] border-[2px] border-solid border-transparent">
      <div class="w-[1270px] <sm:w-[375px] h-[69px] border-2 border-[#F5F5F514] rounded-[64px] bg-[#000000] mt-6 mx-auto">
        <div class="float-left h-full w-10 ml-8 flex items-center">
          <img src="../assets/go-logo.svg" alt="">
        </div>
        <div class="float-right mr-8 h-full items-center flex">
          <div class="text-white-2 cursor-pointer my-[26px] mx-auto text-[14px] font-montserrat font-bold uppercase"
            @click="openSide">
            menu
            <img class="inline-block ml-2" src="../assets/menu-icon.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1270px] <sm:w-[327px] mt-[130px] <sm:mt-[70px] mx-auto">
      <div class="text-[96px] <sm:text-[53px] font-montserrat font-extrabold text-white-2">
        <p class="uppercase text-left mt-7">your new breed</p>
        <p class="uppercase text-right mt-7">end to end</p>
        <p class="uppercase text-left mt-7 ml-20 <sm:ml-0">digital ally</p>
      </div>
    </div>
    <div class="w-full h-[519px] mt-[143px] bg-gradient-to-b from-fade-colour-1 to-fade-colour-2">

    </div>
  </div>
</template>
 

<script>
import R2MenuExpand from './R2MenuExpand.vue';

export default {
    data() {
        return {
            showr2Menu: false,
        };
    },
    methods: {
        openSide() {
            this.showr2Menu = true;
        },
        closeMenu(){
            this.showr2Menu = false;
        }
        
    },
    components: { R2MenuExpand }
};
</script>
  