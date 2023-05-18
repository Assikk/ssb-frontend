<template>
  <div class="flex items-center gap-6">
    <img :src="item.img.src" :alt="item.img.alt" class="w-[72px] sm:w-[85px] h-[72px] sm:h-[85px]">
    <div class="flex flex-col gap-[6px]">
      <TitlesXl-1BlackSSB>
        {{item.title}}
      </TitlesXl-1BlackSSB>
      <TextsBase-1Gray :small="true">
        {{item.description}}
      </TextsBase-1Gray>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemOutlineAdvantageComponent',
  props: ['item']
}
</script>
