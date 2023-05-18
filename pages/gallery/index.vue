<template>
  <section>
    <div class="main__container px-6 xl:px-0 ">
      <div class="py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <Titles>
          Галерея
        </Titles>
        <div class="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-6 text-xl-1">
          <p class="cursor-pointer"
          :class="type === 'photo' ? 'text-black-ssb font-medium' : 'text-light'"
          @click="type = 'photo'">
            Фотографии
          </p>
          <p class="cursor-pointer"
          :class="type === 'video' ? 'text-black-ssb font-medium' : 'text-light'"
          @click="type = 'video'">
            Видео
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <img :src="item.img.src" :alt="item.img.alt" :class="item.isMain ? 'sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-3 w-full h-full' : 'w-full sm:w-[302px] h-full sm:h-[163px]'"
        v-for="item in images" :key="item.id">
      </div>
      <div class="mt-6">
        <Button :outlined="true" :arrow="true" class="mx-auto">
          Посмотреть еще
        </Button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      type: 'photo',
      images: [
        {
          id: 1,
          isMain: true,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 2,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 3,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 4,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 5,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 6,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 7,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 8,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 9,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 10,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 11,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
        {
          id: 12,
          img: {
            src: '/image/gallery.webp',
            alt: 'Gallery'
          }
        },
      ]
    }
  }
}
</script>
