<template>
    <div class="font-montserrat text-white-2">
        <div class="w-[382px] <sm:w-full h-full flex-col items-start justify-start rounded-[24px] border-solid border-[#f5f5f514] border-2 py-6 px-8">
            <p class="text-gray-grey-nobel <sm:text-primary-cyan-base text-[12px] font-semibold uppercase"> {{ office.region }}</p>
            <h1 class="mt-2 text-primary-cyan-base ga text-[24px] font-extrabold">{{ office.city }}</h1>
            <div class="flex mt-6">
                <img class="py-1 pl-[6px] pr-[2px] w-6 h-6" src="../assets/our office/phone.png" alt="">
                <div class="text-global-white text-[16px] font-medium ml-3">{{ office.phone }}</div>
            </div>
            <div class="flex mt-3">
                <img class="py-1 px-1 w-6 h-6" src="../assets/our office/at.png" alt="">
                <div class="text-global-white text-[16px] font-medium ml-3">{{ office.email }}</div>
            </div>
            <div class="flex mt-3">
                <img class="py-1 px-[6px] w-6 h-6" src="../assets/our office/location-dot.png" alt="">
                <div class="text-global-white text-[16px] font-medium ml-3">{{ office.address }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'office',
    props: ['office']
}
</script>

<style>
    
</style>