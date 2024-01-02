<template>
    <div class="absolute h-screen w-screen z-10 flex bg-colour-1 animation">
        <div class="flex <sm:block mt-[337px] <sm:mt-[44px] mx-auto w-[1206px] <sm:w-[327px] mb-auto relative">
            <div class="w-[860px] <sm:w-[327px] text-global-white font-montserrat text-left text-[128px] <sm:text-[53px] leading-116 font-extrabold ">
                We’re
                GrowthOps
            </div>
            <div class="flex bg-white-2 mt-auto w-[346px] <sm:w-[171px] h-[156px] <sm:h-[89px] rounded-[80px] ml-[50px] <sm:ml-0 <sm:mt-[6px] rotate-[-9.469deg] ">
                <div class="text-colour-1 m-auto font-montserrat text-[96px] <sm:text-[40px] leading-116 font-extrabold ">
                    Asia 
                </div>
            </div>
        </div>
        
        
    </div>
</template>
<style scoped>
    .animation{
        margin-top: 0;
        animation-name: slide;
        animation-duration: 3s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }
    @keyframes slide {
        from{
            margin-top: 0;
        }
        to {
            margin-top: -500vh;
        }
    }
</style>

  
