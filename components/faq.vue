<template>
  <div class="px-7 py-[18px] bg-background rounded-lg">
    <div class="flex items-center justify-between cursor-pointer"
    @click="$emit('click')">
      <h1 class="font-medium text-base-2">
        {{faq.title}}
      </h1>
      <svg
      class="fill-black-ssb w-6 h-6"
      :class="activeFaq === faq.id ? 'rotate-180' : ''">
        <use xlink:href="#arrow"></use>
      </svg>
    </div>
    <p class="mt-3 text-gray text-base-1" v-if="activeFaq === faq.id">
      {{faq.description}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'FAQ',
  props: ['faq', 'activeFaq'],
}
</script>
