<template>
  <section>
    <Banner :banner="banner"/>
    <div class="main__container px-6 xl:px-0">
      <div class="my-20">
        <SubTitle>
          Информация для банков
        </SubTitle>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          <Document v-for="document in documents" :key="document.id" :document="document"/>
        </div>
      </div>
    </div>
    <BannerPrimary @click="openApplication" :banner="guarantees"/>
    <div class="main__container px-6 xl:px-0">
      <div class="my-20">
        <Titles>
          Банковское обслуживание
        </Titles>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          <CardNews v-for="item in bankingServices" :key="item.id" :item="item"/>
        </div>
      </div>
    </div>
    <div class="bg-background">
      <div class="main__container px-6 xl:px-0 py-20">
        <SubTitle>
          Информация для банков
        </SubTitle>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          <Document v-for="document in documents" :key="document.id" :document="document"/>
        </div>
      </div>
    </div>
    <div class="main__container">
      <div class="mt-20 px-6 xl:px-0">
        <Titles>
          Реквизиты и контактные данные
        </Titles>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <CardNews v-for="item in requisites" :key="item.id" :item="item"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'financial-organization-page',
  data() {
    return {
      banner: {
        name: 'Больше данных про наши цифры',
        description: 'Удобное надежное и безопасное место для хранения ценностей',
        buttonLink: {
          link: '/',
          text: 'Подробнее'
        },
        img: {
          src: '/image/statistics.webp',
          alt: 'Statistics Image'
        }
      },
       documents: [
        {
          id: 1,
          name: 'Органический трафик продолжает удивлять 1',
          size: '389,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 2,
          name: 'Органический трафик продолжает удивлять 2',
          size: '329,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 3,
          name: 'Органический трафик продолжает удивлять 3',
          size: '489,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 4,
          name: 'Органический трафик продолжает удивлять 4',
          size: '384,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 5,
          name: 'Органический трафик продолжает удивлять 5',
          size: '3890,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 6,
          name: 'Органический трафик продолжает удивлять 6',
          size: '379,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
      ],
      guarantees: {
        title: 'Аккредитивы и гарантии',
        list: {
          title: 'Наш Банк предлагает следующие услуги по аккредитивам:',
          items: [
            {
              id: 1,
              text: 'Выпуск аккредитивов'
            },
            {
              id: 2,
              text: 'Подтверждение аккредитивов'
            },
            {
              id: 3,
              text: 'Предоставление финансирования по аккредитивам'
            },
            {
              id: 4,
              text: 'Авизование аккредитивов'
            },
            {
              id: 5,
              text: 'Выпуск всех видов гарантий'
            },
            {
              id: 6,
              text: 'Привлечение подтверждения третьих банков'
            },
          ]
        },
        img: {
          src: '/image/Rectangle.webp',
          alt: 'Rectangle Image'
        },
        button: 'Оставить заявку'
      },
      bankingServices: [
        {
          id: 1,
          title: 'Банкнотные операции',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
        {
          id: 2,
          title: 'Платежные поручения',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
        {
          id: 3,
          title: 'Конверсионные операции',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
        {
          id: 4,
          title: 'Межбанковский кредит',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
      ],
      requisites: [
        {
          id: 1,
          title: 'Реквизиты банка',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
        {
          id: 2,
          title: 'Сектор международных отношений',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
        {
          id: 3,
          title: 'Отдел корреспондентских отношений',
          description: 'Интеллект, по определению, подчеркивает даосизм.'
        },
      ]
    }
  },
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication'
    }),
    openApplication() {
      this.changeApplication(true)
    }
  }
}
</script>
