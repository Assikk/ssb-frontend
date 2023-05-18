<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="my-6">
      Продажа имущества
    </Titles>
    <p class="text-base-1 mb-6">
      Для получения информации о приобритении имущества звоните по контактным номерам
    </p>
    <div class="hidden lg:grid grid-cols-[10%_15%_55%_20%] bg-white">
      <div v-for="(item, index) in header" :key="index" class="font-medium text-xl-1 px-6 py-3">
        {{item.text}}
      </div>
    </div>
    <div class="grid grid-cols-none lg:grid-cols-[10%_15%_55%_20%] border border-divider rounded-xl lg:rounded-none lg:border-0 mb-6 lg:mb-0"
    :class="item.id % 2 === 1 ? 'lg:bg-background' : 'lg:bg-white'"
    v-for="item in body" :key="item.id">
      <p class="hidden lg:block line">
        {{item.id}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.country}}
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.nameProperty}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.price}}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SalePage',
  data() {
    return {
      header: [
        {
          text: '№'
        },
        {
          text: 'Город'
        },
        {
          text: 'Наименование имущества'
        },
        {
          text: 'Цена'
        },
      ],
      body: [
        {
          id: 1,
          country: 'Душанбе',
          nameProperty: 'Манзили истикомати дар ш.Вахдат, кучаи Салимзода, хонаи 43',
          price: '250 000',
        },
        {
          id: 2,
          country: 'Душанбе',
          nameProperty: 'Манзили истикомати, ш.Вахдат чам.Б.Бурунов, дехаи Гулобод',
          price: '250 000',
        },
        {
          id: 3,
          country: 'Душанбе',
          nameProperty: 'Маркази савдо ва дилхуши, ш.Душанбе кучаи Фирдавси 61/1',
          price: '250 000',
        },
        {
          id: 4,
          country: 'Бохтар',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
        {
          id: 5,
          country: 'Душанбе',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
        {
          id: 6,
          country: 'Душанбе',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
        {
          id: 7,
          country: 'Душанбе',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
        {
          id: 8,
          country: 'Бохтар',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
        {
          id: 9,
          country: 'Истаравшан',
          nameProperty: 'Хонаи истикомати, н. Хуросон, чамоати Кизил-Калъа, дехаи Хумдон б/р',
          price: '250 000',
        },
      ]
    }
  }
}
</script>
<style lang="postcss" scoped>
  .line{
    @apply text-sm-2 xl:text-base-1 px-6 py-4 lg:py-3
  }
</style>
