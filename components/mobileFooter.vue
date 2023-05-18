<template>
  <footer>
    <div class="bg-background">
      <div class="py-4 px-6 border-b border-black-ssb/10">
        <Logo className="w-[123px] h-[42px]"/>
      </div>
      <div class="px-6 py-4 border-b border-black-ssb/10" v-for="(item, index) in $t('footer').slice(1,3)" :key="index">
        <div class="flex justify-between text-base"
        @click="item.showChild = !item.showChild">
          <p>{{item.name}}</p>
          <svg class="fill-light w-5 h-5" :class="item.showChild ? 'rotate-180' : ''">
            <use xlink:href="#arrow"></use>
          </svg>
        </div>
        <ul v-if="item.showChild">
          <li class="p-4" v-for="(link, index) in item.child" :key="index"
          @click="clickPage(item, link)"
          :class="$route.path.endsWith(link.link) ? 'text-primary' : 'hover:text-primary'">
            {{link.text}}
          </li>
        </ul>
      </div>
      <div class="px-6 py-4 flex flex-col gap-4">
        <h2 class="font-medium text-lg-1">
          {{$t('footer[3].name')}}
        </h2>
        <p class="text-small-base-1">
          {{$t('footer[3].child')}}
        </p>
        <Subscription/>
      </div>
      <div class="px-6 py-4 border-y border-black-ssb/10 grid grid-cols-2 gap-x-[30.5px] gap-y-6">
        <ContactCenter
          v-for="(phone, index) in phones" :key="index"
          :item="phone"/>
      </div>
      <div class="px-6 py-4 border-y border-black-ssb/10 flex items-center gap-4">
        <a :href="icon.link" v-for="(icon, index) in icons" :key="index"
        target="_blank">
          <img :src="icon.src" :alt="icon.alt" class="w-8 h-8">
        </a>
      </div>
      <div class="px-6 py-4">
        <h2 class="font-medium text-lg-1 mb-4">
          Информация
        </h2>
        <p class="text-sm">
          Идейные соображения высшего порядка, а также синтетическое тестирование создаёт предпосылки для стандартных подходов. Прежде всего, курс на социально-ориентированный национальный проект напрямую зависит от направлений прогрессивного развития.
А ещё сторонники тоталитаризма в науке ограничены исключительно образом мышления. Вот вам яркий пример современных тенденций — современная методология разработки требует от нас анализа укрепления моральных ценностей. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
        </p>
      </div>
    </div>
    <div class="bg-[#F2F2F2]">
      <div class="flex items-center justify-between px-6 py-4">
        <img src="/image/livo.svg" alt="Livo Logo" class="w-[47px] h-[22px]">
        <p class="text-small-base-1">
          © 2022  “Саноатсодиротбонк”
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'MobileFooter',
  data() {
    return {
      phones: [
        {
          text: 'Рабочий',
          phone: '+992 00-000-00-00'
        },
        {
          text: 'Служебный',
          phone: '+992 00-000-00-01'
        },
        {
          text: 'Домашний',
          phone: '+992 00-000-00-02'
        },
        {
          text: 'Запасной',
          phone: '+992 00-000-00-03'
        },
      ],
      icons: [
        {
          alt: 'facebook',
          src: '/image/social/facebook.svg',
          link: 'https://ru-ru.facebook.com/'
        },
        {
          alt: 'twitter',
          src: '/image/social/twitter.svg',
          link: 'https://twitter.com/?lang=ru'
        },
        {
          alt: 'linkedin',
          src: '/image/social/linkedin.svg',
          link: 'https://ru.linkedin.com/'
        },
      ],
    }
  },
  methods: {
    clickPage(item, link) {
      item.showChild = false
      this.$emit('changePage', link)
    }
  }
}
</script>
