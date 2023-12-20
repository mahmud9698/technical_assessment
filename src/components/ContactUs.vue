<template>
    <!-- <div class="pt-6 pr-12 pb-[22px] pl-12">
        <R2Menu />
    </div> -->
    <!-- <div class="pl-20 pt-[58px] box-border relative text-global-white bg-[#010101] font-montserrat flex flex-col">
        <div class="">
            <h1
                class="w-[640px] h-[88px] uppercase tracking-[-0.12em] text-global-white not-italic text-[96px] leading-[88px] font-extrabold">
                contact us
            </h1>
            <p class="mt-6 w-[587px] text-[32px] font-medium leading-[44px] tracking-[-0.02em] ">Let's create something awesome together</p>
        </div>
        <form action="#">
            <div>
                <label for="fullName" class="mt-12 text-left text-label-colour-1 font-semibold">Full name</label>
                <input type="text" class="mt-2 w-[381px] h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
            </div>
            <div>
                <label for="phoneNumber" class="mt-12 text-left text-label-colour-1 font-semibold">Phone Number</label>
                <input type="text" class="mt-2 w-[381px] h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
            </div>
            <div>
                <label for="workEmail" class="mt-12 text-left text-label-colour-1 font-semibold">Email</label>
                <input type="text" class="mt-2 w-[381px] h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
            </div>
            <div>
                <p>I want to </p>
                <div class="i-want-to">
                    <input type="radio" name="client" id="client">
                    <label for="client">Become a client</label>
                    <input type="radio" name="team" id="team">
                    <label for="team">Join the team</label>
                    <input type="radio" name="investor" id="investor">
                    <label for="investor">Investor</label>
                    <input type="radio" name="other" id="other">
                    <label for="other">Other</label>
                </div>
            </div>
            <div>
                <p>Tell us more</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="Briefly describe your message here"></textarea>
            </div>
            <div>
                <input type="checkbox" name="" id="">
                <label for="">I want to subscribe to the occasional insightful materials from GrowthOps. (optional)</label>
                <input type="checkbox" name="" id="">
                <label for="">I have read and agree to the website’s privacy policy.</label>
            </div>
            <div class="submit">
                <input type="submit" value="Submit" >
            </div>
        </form>
        
    </div> -->

    <div class="max-w-[722px] text-global-white flex flex-col <md:mx-[23px] <md:mt-[53px] font-montserrat relative <md:justify-center <md:items-center">
        <div class="text-left">
            <h1 class="uppercase font-extrabold relative text-[96px] <md:text-[48px] <md:leading-[48px] leading-[88px]">
            contact us
            </h1>
            <p class="mt-6 font-medium text-[32px] <md:text-[20px] ">
                Let’s create something awesome together
            </p>
        </div>
        <form action="#">
                <div class="flex flex-col">
                    <label for="fullName" class="mt-12 <md:mt-10 text-left text-label-colour-1 font-semibold">Full name</label>
                    <input type="text" class="mt-2 h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
                </div>
                <div class="flex flex-col">
                    <label for="phoneNumber" class="mt-8 <md:mt-6 text-left text-label-colour-1 font-semibold">Phone number</label>
                    <input type="text" class="mt-2 h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
                </div>
                <div class="flex flex-col">
                    <label for="workEmail" class="mt-8 <md:mt-6 text-left text-label-colour-1 font-semibold">Work email</label>
                    <input type="text" class="mt-2 h-[52px] rounded-[12px] border-input-bg bg-input-bg border-[1px] ">
                </div>                
                    <p class="text-label-colour-1 font-semibold text-[14px] mt-10 <md:mt-8">I want to </p>
                    <div class="mt-[22px] flex flex-col">
                        <input type="radio" name="client" id="client">
                        <label for="client">Become a client</label>
                        <input type="radio" name="team" id="team">
                        <label for="team">Join the team</label>
                        <input type="radio" name="investor" id="investor">
                        <label for="investor">Investor</label>
                        <input type="radio" name="other" id="other">
                        <label for="other">Other</label>
                    </div>                
                <div>
                    <p>Tell us more</p>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Briefly describe your message here"></textarea>
                </div>
                <div>
                    <input type="checkbox" name="" id="">
                    <label for="">I want to subscribe to the occasional insightful materials from GrowthOps. (optional)</label>
                    <input type="checkbox" name="" id="">
                    <label for="">I have read and agree to the website’s privacy policy.</label>
                </div>
                <div class="submit">
                    <input type="submit" value="Submit" >
                </div>
        </form>
    </div>
</template>
