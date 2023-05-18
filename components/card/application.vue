<template>
  <div class="flex items-center gap-4 p-4 bg-white shadow-white/40 rounded-xl cursor-pointer"
  @click="openApplication">
    <img :src="application.img.src" :alt="application.img.alt" class="w-[50px] h-[50px]">
    <p class="text-sm-1 text-light">
      {{application.name}}
    </p>
  </div>
</template>
<script>
import {mapMutations} from  'vuex'
export default {
  name: 'Application',
  props: ['application'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
    }),
    openApplication() {
      this.changeApplication(true)
      this.changeProduct(this.application)
    }
  }
}
</script>
