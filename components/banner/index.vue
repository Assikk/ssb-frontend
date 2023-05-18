<template>
  <div class="bg-[#F3F4FC]">
    <div class="px-6 md:px-6 lg:px-0 max-w-[846px] mx-auto py-16 flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-center justify-between">
      <div class="text-center md:text-left w-full md:w-1/2">
        <h1 class="font-medium text-2xl-1 sm:text-3xl-1 mb-3">
          {{banner.name}}
        </h1>
        <p class="text-base">
          {{banner.description}}
        </p>
        <div class="flex justify-center md:justify-start items-center gap-6">
          <Button v-if="banner.buttonOpenApplication" :primary="true" class="!w-fit mt-8"
          @click="openApplication">
            {{banner.buttonOpenApplication.text}}
          </Button>
          <Button v-if="banner.buttonSinglePage" :outlined="true" class="mt-8"
          @click="$router.push(localePath(banner.type) + `/${banner.id}?type=${$route.query.type}`)">
            {{banner.buttonSinglePage.text}}
          </Button>
        </div>
        <a v-if="banner.buttonDownload" :href="banner.buttonDownload.link" target="_blank">
          <Button :primary="true" class="mt-8 w-full md:w-auto">
            {{banner.buttonDownload.text}}
          </Button>
        </a>
        <NuxtLink :to="localePath(banner.buttonLink.link)" v-if="banner.buttonLink">
          <Button :primary="true" class="mt-8">
            {{banner.buttonLink.text}}
          </Button>
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2">
        <img :src="banner.img.src" :alt="banner.img.alt" class="w-[223px] sm:w-auto mx-auto md:ml-auto md:mr-0">
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Banner',
  props: ['banner'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
    }),
    openApplication() {
      this.changeApplication(true)
      this.changeProduct(this.banner)
    }
  }
}
</script>
