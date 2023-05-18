<template>
  <div class="relative overflow-auto sm:overflow-hidden w-full h-auto sm:h-[318px] py-10 px-4 sm:p-10 rounded-xl" :class="banner.background">
    <div class="w-full sm:w-[70%] h-full flex flex-col justify-start sm:justify-between gap-6 sm:gap-0">
      <img src="/image/bank.webp" alt="" class="block sm:hidden w-[232px] h-[256px] mx-auto ">
      <div class="flex flex-col gap-3 sm:gap-4">
        <TitlesXl2-1BlackSSB>
          {{banner.title}}
        </TitlesXl2-1BlackSSB>
        <TextsBase1Gray>
          {{banner.description}}
        </TextsBase1Gray>
      </div>
      <Button :outlined="true" class="w-full sm:w-fit">
        {{banner.button}}
      </Button>
    </div>
    <img src="/image/bank.webp" alt="" class="hidden sm:block absolute -bottom-[10%] -right-[5%] w-[221px] h-[247px]">
  </div>
</template>
<script>
export default {
  name: 'LegalPersonBannerComponent',
  props: ['banner']
}
</script>
