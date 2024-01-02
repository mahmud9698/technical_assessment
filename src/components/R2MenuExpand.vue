<template>
    <div class="w-full h-screen top-0 left-0 bg-gradient-to-b from-r2-colour-3 to-r2-colour-2 shadow-customBoxShadow backdrop-blur-xxsm absolute" >
        <div class="w-[1270px] <sm:w-[375px] h-[69px] bg-[#000000] mt-6 mx-auto">
            <div class="float-left h-full w-10 ml-8 flex items-center">
                <img src="../assets/go-logo.svg">
            </div>
            <div class="float-right items-center flex h-full mr-8">
                <div class="text-white-2 text-[14px] font-montserrat font-bold uppercase cursor-pointer my-[26px] mx-auto inline-block" @click="closeMenu">
                    close
                    <img src="../assets/close-icon.svg" class="inline-block ml-2" alt="" >
                </div>
            </div>
        </div>
        <div class="mr-[82px] text-right text-white-2 uppercase font-montserrat">
            <div class="text-white-2 font-black text-[64px] <sm:text-[48px] leading-[78.02px] <sm:leading-[58.51px]">
                <div class="cursor-pointer">Services</div>
                <div class="cursor-pointer mt-10">Work</div>
                <div class="cursor-pointer mt-10">Insight</div>
                <div class="cursor-pointer mt-10">Careers</div>
                <div class="cursor-pointer mt-10">Contact</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        methods: {
        closeMenu() {
            this.$emit ('closeMenu')
        }
    }
};
</script>