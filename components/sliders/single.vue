<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <BannerSingle v-for="num in 6" :key="num"/>
    </VueSlickCarousel>
  </div>
</template>
<script>
export default {
  name: 'SliderSingle',
  data() {
    return {
      settings: {
        "dots": true,
        "arrows": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 2,
        "slidesToScroll": 2,
      }
    }
  }
}
</script>
<style scoped>
::v-deep .slick-track {
  display: flex !important;
  gap: 1.5rem !important;
}
::v-deep .slick-dots {
  bottom: -35px !important;
}
::v-deep .slick-dots li {
  width: 52px;
  height: 3px;
  border-radius: 30px;
  background: #D2D2D3;
}
::v-deep .slick-dots .slick-active {
  background: #FF1F1F;
}
::v-deep .slick-dots li button:before {
  opacity: 0 !important;
}
::v-deep .slick-dots li .slick-active  button:before {
  opacity: 0 !important;
}
</style>
