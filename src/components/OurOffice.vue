<template>
    <div class="min-w-full h-auto mt-44 ">
            <div class="flex justify-center items-center">
                <h1 class=" text-white-2 font-montserrat font-extrabold text-[84px] <sm:text-[35px] text-center leading-[84px] <sm:leading-[40px] uppercase mx-auto">our offices</h1>
            </div>
            <div class="flex justify-center items-center mx-auto ">
                <div class="mt-20 w-[1210px] <sm:w-[375px] <sm:flex-col flex flex-wrap gap-8">
                    <Office 
                    v-for="office in offices" 
                    :key="office.id" 
                    :office="office"
                    />
                </div>
            </div>
    </div>
</template>

<script>
import Office from './Office.vue'
import jsonData from '../office.json'

export default {
    components: {
        Office
    },
    data (){
        return {offices: jsonData}
    }
    
}
</script>