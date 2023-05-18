<template>
  <section>
    <div class="main__container px-6 xl:px-0 pt-6">
      <div class="flex justify-between items-start flex-col sm:flex-row gap-2 sm:items-center">
        <Titles>
          Новости
        </Titles>
        <NuxtLink :to="localePath(`/news?type=${4}`)" class="text-primary font-medium text-base-2">
          Перейти к ответам прессе
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <CardNews v-for="item in news" :key="item.id" :item="item"/>
      </div>
      <Pagination/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      news: [
        {
          id: 1,
          date: '29.04.2022',
          description: 'Внезапно, был сорван доклад председателя совхоза'
        },
        {
          id: 2,
          date: '19.04.2022',
          description: 'Оказывается, звук клавиш печатной машинки бодрит!'
        },
        {
          id: 3,
          date: '18.04.2022',
          description: 'Финансовый мир очнулся: логотип крупнейшей компании по производству мыльных пузырей стал нашим флагом в борьбе с ложью'
        },
        {
          id: 4,
          date: '29.04.2022',
          description: 'Внезапно, был сорван доклад председателя совхоза'
        },
        {
          id: 5,
          date: '19.04.2022',
          description: 'Оказывается, звук клавиш печатной машинки бодрит!'
        },
        {
          id: 6,
          date: '18.04.2022',
          description: 'Финансовый мир очнулся: логотип крупнейшей компании по производству мыльных пузырей стал нашим флагом в борьбе с ложью'
        },
        {
          id: 7,
          date: '29.04.2022',
          description: 'Внезапно, был сорван доклад председателя совхоза'
        },
        {
          id: 8,
          date: '19.04.2022',
          description: 'Оказывается, звук клавиш печатной машинки бодрит!'
        },
        {
          id: 9,
          date: '18.04.2022',
          description: 'Финансовый мир очнулся: логотип крупнейшей компании по производству мыльных пузырей стал нашим флагом в борьбе с ложью готип крупнейшей компании по производству мыльных пузырей стал нашим флагом в борьбе с ложью'
        },
      ]
    }
  }
}
</script>
