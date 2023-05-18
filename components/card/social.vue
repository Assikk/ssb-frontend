<template>
  <div class="w-full border-2 border-primary-light rounded-xl py-5">
    <img :src="item.image.src" :alt="item.image.alt" class="w-10 h-10 mx-auto">
    <div class="text-center">
      <p class="pt-4 pb-2 text-light text-lg-1 md:text-xl-1 tracking-widest">
        {{item.text}}
      </p>
      <a target="_blank" :href="item.link.link">
        <p class="text-primary text-small-base-1 md:text-sm-1 tracking-widest">
          {{item.link.text}}
        </p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardSocial',
  props: ['item']
}
</script>
