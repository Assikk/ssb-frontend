<template>
  <div class="bg-[#F3F4FC] pt-16 px-[23px] xl:px-0 pb-[60px] xl:pb-[138px]">
    <div class="relative main__container">
      <VueSlickCarousel :arrows="false" :dots="true" ref="carousel">
        <div class="max-w-[1056px] mx-auto items-center !flex flex-col-reverse xl:flex-row gap-8 xl:gap-0" v-for="slider in sliders" :key="slider.id">
          <div class="w-full xl:w-2/3">
            <h1 class="text-2xl-1 xl:text-3xl-1 text-center xl:text-left font-medium mb-4">
              {{slider.title}}
            </h1>
            <p class="text-center xl:text-left text-base mb-8 xl:mb-12">
              {{slider.description}}
            </p>
            <div class="flex justify-center flex-col sm:flex-row xl:justify-start items-center gap-6">
              <Button @click="orderProduct(slider)" :primary="true">
                Заказать
              </Button>
              <Button class="w-full sm:w-auto" :outlined="true" @click="goSinglePage(slider)">
                Подробнее
              </Button>
            </div>
          </div>
          <div class="w-full xl:w-1/3">
            <img class="w-[222px] sm:w-auto mx-auto" :src="slider.img.src" :alt="slider.img.alt">
          </div>
        </div>
        <template #customPaging="name">
          <div>
            {{ name }}
          </div>
        </template>
      </VueSlickCarousel>
      <svg class="fill-primary xl:fill-black-ssb w-[28px] sm:w-[52px] h-[28px] sm:h-[52px] rotate-90 absolute top-1/4 xl:top-1/2 cursor-pointer"
      @click="$refs.carousel.prev()">
        <use xlink:href="#arrow"/>
      </svg>
      <svg class="fill-primary xl:fill-black-ssb w-[28px] sm:w-[52px] h-[28px] sm:h-[52px] -rotate-90 absolute top-1/4 xl:top-1/2 right-0 cursor-pointer"
      @click="$refs.carousel.next()">
        <use xlink:href="#arrow"/>
      </svg>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Slider',
  props: ['sliders'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
      openList: 'application/openList',
    }),
    orderProduct(slider) {
      this.changeApplication(true)
      this.changeProduct(slider)
      this.openList(this.sliders)
    },
    goSinglePage(slider) {
      this.$router.push(this.localePath(slider.type) + `/${slider.id}?type=${this.$route.query.type}`)
    }
  },
}
</script>
<style scoped>
::v-deep .slick-dots {
  display: flex !important;
  justify-content: space-around;
  gap: 1.5rem;
}
::v-deep .slick-dots li {
  background: white;
  padding: 1rem;
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #909090;
  border-radius: 4px;
  opacity: 0.7;
}
::v-deep .slick-dots .slick-active {
  background: #FCE8E8;
  color: #FF1F1F
}
</style>
