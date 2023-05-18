<template>
  <section class="main__container px-6 xl:px-0">
    <!-- {{$t('searchResult')}} Для {{$route.query.q}} -->
    <InputSearch class="my-10" @submit="submitSearch"
    v-model="value"/>
    <div class="flex items-center justify-between text-[#323856]">
      <h1 class="font-medium text-xl-1 sm:text-3xl-1">
        Результаты поиска “ <span>{{$route.query.q}}</span> ”
      </h1>
      <p class="hidden md:block text-base-1 lg:text-xl-1">
        Найдено 300 результатов
      </p>
    </div>
    <div class="flex flex-col gap-5 my-10">
      <CardSearch v-for="result in searchResults" :key="result.id" :result="result"/>
    </div>
    <Pagination/>
  </section>
</template>
<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      searchResults: [
        {
          id: 1,
          title: 'Кредитные продукты в ССБ: Кредит наличными...',
          description: 'Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов...',
          link: 'https://www.google.com/'
        },
        {
          id: 2,
          title: 'Кредитные продукты в ССБ: Кредит наличными...',
          description: 'Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов...',
          link: 'https://www.google.com/'
        },
        {
          id: 3,
          title: 'Кредитные продукты в ССБ: Кредит наличными...',
          description: 'Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов...',
          link: 'https://www.google.com/'
        },
        {
          id: 4,
          title: 'Кредитные продукты в ССБ: Кредит наличными...',
          description: 'Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов...',
          link: 'https://www.google.com/'
        },
        {
          id: 5,
          title: 'Кредитные продукты в ССБ: Кредит наличными...',
          description: 'Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов...',
          link: 'https://www.google.com/'
        },
      ],
      value: ''
    }
  },
  methods: {
    submitSearch(value) {
      this.$router.push(this.localePath(`/search?q=${value}`))
    },
  }
}
</script>
