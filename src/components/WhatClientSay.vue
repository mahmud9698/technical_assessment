<template>
  <div class="mt-[203px] <sm:mt-[146px] flex flex-col justify-center items-center font-montserrat text-white-2">
      <div class="max-w-[1000px] w-full <sm:max-w-[327px] <sm:w-full">
          <h1 class="uppercase text-[88px] <sm:text-[35px] font-extrabold leading-[84px] <sm:leading-[40px] text-center">what clients says</h1>
      </div>
      
      <div class="flex justify-center items-center mt-[88px] <sm:mt-10">
          <div class="rounded-[30px] p-[6px] border-solid border-[#2b2b2b] border-[1px] flex relative gap-[10px]">
              <div
                  v-for="category in Object.keys(testimonials)"
                  :key="category"
                  @click="changeCategory(category)"
                  :class="{
                      'bg-primary-cyan-base rounded-[30px] py-3 px-5 font-bold text-fade-colour-2': selectedCategory === category,
                      'rounded-[30px] font-normal py-3 px-5 cursor-pointer': selectedCategory !== category,
                      'cursor-not-allowed': selectedCategory === category
                  }"
                  >
                      {{ category }}
              </div>
          </div>
      </div>
      <div class="mt-16 <sm:mt-[61px] flex max-w-[1000px] w-full <sm:max-w-[375px]">
          <div class="w-[10.5%] justify-start text-primary-cyan-base font-bold text-[40px]">“</div>
          <div class="w-[89.5%] font-medium text-[24px] <sm:text-[20px] leading-[36px] <sm:leading-[32px]">
              {{ testimonials[selectedCategory].text }}
          </div>
      </div>
      <div class="mt-16 <sm:mt-12 flex max-w-[1000px] <sm:max-w-[375px] w-full">
          <div class="w-[10.5%]"></div>
          <div class="w-[89.5%]">
              <div class="text-[16px] font-bold">
                  {{ testimonials[selectedCategory].author }}
              </div>
              <div class="mt-3 text-wwd-text-colour text-[16px] font-normal">
                  {{ testimonials[selectedCategory].position }}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
      selectedCategory: 'Telco',
          testimonials: {
              'Telco': {
                  text: 'Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.',
                  author: 'Jasmine Lee',
                  position: '[Position 1], [Company Name 1]'
              },
              'Insurance': {
                  text: 'Through this venture, XYZ Insurance has demonstrated its expertise in navigating complex challenges. We are confident that the revamped INSURENOW.COM will provide us with deeper insights, empowering us to make informed decisions backed by data. This will lead to innovative digital solutions that truly serve our clients needs.',
                  author: 'Jasmine Lee 2',
                  position: '[Position 2], [Company Name 2]'
              },
              'Fintech': {
                  text: 'In this endeavor, ABC FinTech has showcased its prowess in steering our financial platform towards new heights. We are optimistic that the reimagined FINTECHADVANCE.ME will furnish us with additional analytics, facilitating data-driven choices. This will pave the way for cutting-edge digital experiences benefiting our users.',
                  author: 'Jasmine Lee 3',
                  position: '[Position 3], [Company Name 3]'
              },
              'IT': {
                  text: 'Through this project, XYZ IT Solutions has proven its ability to propel our technological infrastructure forward. We are convinced that the updated ITSOL.COM will endow us with enhanced insights, enabling us to formulate strategic decisions rooted in data. This will culminate in revolutionary digital initiatives for the betterment of our stakeholders',
                  author: 'Jasmine Lee 4',
                  position: '[Position 4], [Company Name 4]'
              }
          }
  };
},
methods: {
  // Method to change the selected category
  changeCategory(category) {
    this.selectedCategory = category;
  }
}
};
</script>