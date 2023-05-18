<template>
  <div class="relative">
    <div class="flex items-center gap-2 cursor-pointer" @click="isShow = !isShow">
      <img src="/image/lang.svg" alt="Lang Icon" class="w-[22.2px] h-[22.2px]">
      <p class="text-primary">
        {{activeLang}}
      </p>
    </div>
    <transition name="fade">
      <ul v-if="isShow" class="list bg-white absolute top-6 w-full text-center rounded z-10">
        <li
        class="relative h-12 cursor-pointer"
        v-for="item in lang" :key="item.id"
        :class="$i18n.locale === item.locale ? 'bg-primary-light text-primary' : 'hover:text-primary hover:bg-primary-light'"
        @click="changeLanguage(item)">
          <p class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {{item.text}}
          </p>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Lang',
  data() {
    return {
      isShow: false,
      lang: [
        {
          id: 1,
          text: 'RU',
          locale: 'ru'
        },
        {
          id: 2,
          text: 'TJ',
          locale: 'tj'
        },
        {
          id: 3,
          text: 'EN',
          locale: 'en'
        }
      ],
      activeLang: this.$route.path.startsWith('/en') ? 'EN' : this.$route.path.startsWith('/tj') ? 'TJ' : 'RU'
    }
  },
  methods: {
    ...mapMutations({
      // Мутация, изменяющая язык (language_id)
      change_language: 'language/CHANGE_LANGUAGE'
    }),

    changeLanguage(item) {
      this.activeLang = item.text
      this.change_language(item.id)
      this.$i18n.setLocale(item.locale)

      this.isShow = false
    }
  },
}
</script>
<style scoped>
.list {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
