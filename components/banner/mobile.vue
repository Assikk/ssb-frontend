<template>
  <div class="bg-[#29293D] text-white">
    <div class="main__container flex flex-col md:flex-row px-6 md:px-0 items-center gap-0 lg:gap-[60px] py-[52px]">
      <div class="w-full md:w-1/2">
        <img src="/image/mobile.webp" alt="Mobile" class="w-full h-full">
      </div>
      <div class="w-full md:w-[430px] flex flex-col gap-8">
        <h1 class="font-medium text-2xl-1">
          Удобно управляйте своими финансами через ССБ мобайл
        </h1>
        <p class="text-base-1">
          С другой стороны, экономическая повестка сегодняшнего дня создаёт предпосылки для поэтапного и последовательного развития общества.
          Для современного мира дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные
        </p>
        <div class="flex items-center gap-3">
          <a target="_blank" :href="item.link" v-for="item in links" :key="item.id">
            <img :src="item.image.src" :alt="item.image.alt" class="w-[160px] h-[50px]">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileBanner',
  data() {
    return {
      links: [
        {
          id: 1,
          image: {
            src: '/image/googlePlay.webp',
            alt: 'Google Play'
          },
          link: 'https://play.google.com/store/apps/details?id=tj.itservice.ssb&hl=ru&gl=US'
        },
        {
          id: 2,
          image: {
            src: '/image/appStore.webp',
            alt: 'App Store'
          },
          link: 'https://apps.apple.com/ru/app/%D1%81%D1%81%D0%B1-%D0%BC%D0%BE%D0%B1%D0%B0%D0%B9%D0%BB/id1596065618'
        },
      ]
    }
  }
}
</script>
