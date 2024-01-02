<template>
    <div class="max-w-[793px] w-full <sm:max-w-[329px] <sm:w-full flex-col text-global-white mt-[173px] ml-20 flex <sm:mx-auto <sm:mt-[125px] font-montserrat relative <sm:flex <sm:justify-center <sm:items-center">
        <div class="max-w-[640px] w-full <sm:max-w-[329px] <sm:w-full">
            <h1 class="uppercase font-extrabold relative text-[92px] <sm:text-[48px] <sm:leading-[48px] leading-[88px]">
            contact us
            </h1>
        </div>
        <div class="max-w-[587px] w-full <sm:max-w-[329px] <sm:w-full mt-6">
            <div class="font-medium text-[32px] leading-[44px] <sm:text-[20px] <sm:leading-tight">
                Let’s create something awesome together
            </div>
        </div>
            <form action="#" class="mt-12 <sm:mt-10 flex-col">
                <div class="flex flex-col gap-2">
                    <label for="fullName" class="text-label-colour-1 font-semibold">Full name</label>
                    <input type="text" class="h-[52px] max-w-[381px] w-full <sm:max-w-[327px] <sm:w-full rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
                </div>
                <div class="flex mt-8 gap-8 <sm:mt-6 <sm:flex-col ">
                    <div class="flex flex-col w-1/2 gap-2 <sm:w-full">
                        <label for="phoneNumber" class=" text-left text-label-colour-1 font-semibold">Phone number</label>
                        <div class="flex mt-2">
                            <div class="max-w-[94px] w-full h-[52px] bg-[#1b1d24] rounded-l-[11px] flex gap-3">
                                <div class="text-[16px] font-medium pl-5 py-[15px]">+60</div>
                                <div class="w-6 h-6 mt-[10px] mb-[10px] mr-2">
                                    <div class="py-1 px-[6px] text-[16px] font-bold">v</div>
                                </div>
                            </div>
                            <input type="text" class="w-full h-[52px] rounded-r-[12px] border-input-bg bg-input-bg border-[1px] ">
                        </div>
                            
                    </div>
                    <div class="flex flex-col w-1/2 gap-2 <sm:w-full">
                        <label for="workEmail" class=" text-left text-label-colour-1 font-semibold">Work email</label>
                        <input type="text" class="mt-2 h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
                    </div>     
                </div>           
                    <p class="text-label-colour-1 font-semibold text-[14px] mt-10 <sm:mt-8">I want to </p>
                    <div class="mt-[22px] flex gap-[46px] <sm:flex-col <sm:gap-6">
                        <div class="flex gap-2">
                            <input type="radio" name="client" id="client">
                            <label for="client">Become a client</label>
                        </div>
                        <div class="flex gap-2">
                            <input type="radio" name="team" id="team">
                            <label for="team">Join the team</label>
                        </div>
                        <div class="flex gap-2">
                            <input type="radio" name="investor" id="investor">
                            <label for="investor">Investor</label>
                        </div>
                        <div class="flex gap-2">
                            <input type="radio" name="other" id="other">
                            <label for="other">Other</label>
                        </div>
                    </div>                
                <div class="mt-[42px] ">
                    <p class="text-label-colour-1 font-bold">Tell us more</p>
                    <textarea class="mt-2 pt-6 pl-6 max-w-[793px] w-full h-[230px] <sm:max-w-[327px] <sm:w-full bg-[#0e1015] rounded-[12px] border-solid border-[1px] border-input-border text-[16px] font-medium" placeholder="Briefly describe your message here"></textarea>
                </div>
                
                <div class="mt-[44px] flex gap-[11px]">
                    <input type="checkbox" name="" id="">
                    <label for="">I want to subscribe to the occasional insightful materials from GrowthOps. (optional)</label>
                </div>
                <div class="mt-[23px] flex gap-[11px] <sm:mt-[28px]">
                    <input type="checkbox" name="" id="">
                    <label for="">I have read and agree to the website’s privacy policy.</label>
                </div>
                <div class="bg-[#33ff85] rounded-[48px] w-[151px] h-[54px] border-solid border-[1px] px-10 py-4 mt-[50px] shadow-submitBtn">
                    <input class="text-global-white font-extrabold text-[18px]" type="submit" value="Submit" >
                </div>
            </form>
    </div>
</template>
