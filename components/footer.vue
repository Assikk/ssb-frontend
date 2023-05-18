<template>
  <footer class="bg-background">
    <div class="bg-[#29293D]">
      <nav class="main__container flex items-center py-8 text-white font-medium text-xl-1 lg:px-6 xl:px-0">
        <p :class="item.classWidth"
        v-for="item in $t('footer')" :key="item.id">
          {{item.name}}
        </p>
      </nav>
    </div>
    <div class="main__container lg:px-6 xl:px-0">
      <div class="flex mt-[47px] mb-9 text-sm-1">
        <div class="w-[27%] flex items-center">
          <Logo className="w-[202px] h-[69px]"/>
        </div>
        <div class="w-[27%]">
          <ul class="flex flex-col gap-2">
            <li v-for="item in $t('footer[1].child')" :key="item.id"
            class="cursor-pointer"
            :class="$route.query.type == item.id ? 'text-primary' : 'hover:text-primary'"
            @click="$emit('changePage', item)">
              {{item.text}}
            </li>
          </ul>
        </div>
        <div class="w-[19%]">
          <ul class="flex flex-col gap-2">
            <li v-for="(item, index) in $t('footer[2].child')" :key="index"
            class="cursor-pointer"
            :class="$route.path.endsWith(item.link) ? 'text-primary' : 'hover:text-primary'"
            @click="$router.push(localePath(item.link))">
              {{item.text}}
            </li>
          </ul>
        </div>
        <div class="w-[27%] flex flex-col justify-between">
          <p>
            {{$t('footer[3].child')}}
          </p>
          <Subscription/>
        </div>
      </div>
      <div class="border-y border-black-ssb/10 py-8 flex items-center justify-between">
        <div class="w-2/3 flex justify-between">
          <ContactCenter
          v-for="(phone, index) in phones" :key="index"
          :item="phone"/>
        </div>
        <div class="w-1/3 flex gap-4 justify-end">
          <a :href="icon.link" v-for="(icon, index) in icons" :key="index"
          target="_blank">
            <img :src="icon.src" :alt="icon.alt" class="w-8 h-8">
          </a>
        </div>
      </div>
      <div class="mt-8 mb-[73px]">
        <h3 class="font-medium text-xl-1 mb-4">
          {{description.title}}
        </h3>
        <p class="text-small-base-1">
          {{description.text}}
        </p>
      </div>
    </div>
    <div class="bg-[#F2F2F2]">
      <div class="main__container lg:px-6 xl:px-0 flex justify-between items-center py-8">
        <img src="/image/livo.svg" alt="Livo Logo" class="w-[47px] h-[23px]">
        <p class="text-sm-1">
          © 2022  “Саноатсодиротбонк”
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
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
      description: {
        title: 'Информация',
        text: 'Идейные соображения высшего порядка, а также синтетическое тестирование создаёт предпосылки для стандартных подходов. Прежде всего, курс на социально-ориентированный национальный проект напрямую зависит от направлений прогрессивного развития. А ещё сторонники тоталитаризма в науке ограничены исключительно образом мышления. Вот вам яркий пример современных тенденций — современная методология разработки требует от нас анализа укрепления моральных ценностей. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.'
      }
    }
  }
}
</script>
