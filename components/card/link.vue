<template>
  <div class="w-full bg-background flex items-center gap-3 rounded-xl"
  :class="types[type]">
    <img :src="link.image.src" :alt="link.image.src" class="w-[60px] h-[60px]">
    <p class="text-center text-light">
      {{link.text}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'LinkCardComponent',
  props: ['link', 'type'],
  data() {
    return {
      types: {
        deafult: 'px-[10.5px] xl:px-[52px] py-[19px] xl:py-8 text-base-1',
        useful: 'p-4 text-sm-2'
      }
    }
  }
}
</script>
