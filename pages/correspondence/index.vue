<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="mt-6 mb-8">
      Корреспонденция
    </Titles>
    <div class="hidden lg:grid grid-cols-[8%_10%_27%_13%_20%_22%]">
      <div v-for="(item, index) in header" :key="index" :class="`font-medium text-xl-1 px-6 py-3 bg-${item.color}`">
        {{item.text}}
      </div>
    </div>
    <div class="grid grid-cols-none lg:grid-cols-[8%_10%_27%_11%_20%_24%] border border-divider rounded-xl lg:rounded-none lg:border-0 mb-6 lg:mb-0"
    :class="item.id % 2 === 1 ? 'lg:bg-background' : 'lg:bg-white'"
    v-for="item in body" :key="item.id">
      <p class="hidden lg:block line">
        {{item.id}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.country}}
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.nameBank}}
      </p>
      <p class="line bg-background lg:bg-transparent">
        {{item.currency}}
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.numberScore}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.requisites}}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Correspondence',
  data() {
    return {
      header: [
        {
          text: '№',
        },
        {
          text: 'Страна',
          color: 'white'
        },
        {
          text: 'Наименование банка',
          color: 'white'
        },
        {
          text: 'Валюта',
        },
        {
          text: 'Номер счета',
          color: 'white'
        },
        {
          text: 'Реквизиты',
        },
      ],
      body: [
        {
          id: 1,
          country: 'Германия',
          nameBank: 'Commerzbank AG Frankfurt/Main SWIFT:COBADEFF',
          currency: 'EUR',
          numberScore: '400886559400EUR',
          requisites: '',
          background: 'background'
        },
        {
          id: 2,
          country: 'Россия',
          nameBank: ' "Сберегательный Банк Российской Федерации. SWIFT:SABRRUMMSABRRUMM012',
          currency: 'RUB USD EUR',
          numberScore: '30111810700000000076',
          requisites: 'BANK OF NEW YORK, New York, USA SWIFT:IRVTUS3N к/с 30101810400000000225 В ОПЕРУ МГТУ Банка России БИК 044525225 ИНН 7707083893'
        },
        {
          id: 3,
          country: 'Германия',
          nameBank: 'Commerzbank AG Frankfurt/Main SWIFT:COBADEFF',
          currency: 'EUR',
          numberScore: '400886559400EUR',
          requisites: ''
        },
        {
          id: 4,
          country: 'Россия',
          nameBank: ' "Сберегательный Банк Российской Федерации. SWIFT:SABRRUMMSABRRUMM012',
          currency: 'RUB USD EUR',
          numberScore: '30111810700000000076',
          requisites: 'BANK OF NEW YORK, New York, USA SWIFT:IRVTUS3N к/с 30101810400000000225 В ОПЕРУ МГТУ Банка России БИК 044525225 ИНН 7707083893'
        },
        {
          id: 5,
          country: 'Германия',
          nameBank: 'Commerzbank AG Frankfurt/Main SWIFT:COBADEFF',
          currency: 'EUR',
          numberScore: '400886559400EUR',
          requisites: ''
        },
        {
          id: 6,
          country: 'Россия',
          nameBank: ' "Сберегательный Банк Российской Федерации. SWIFT:SABRRUMMSABRRUMM012',
          currency: 'RUB USD EUR',
          numberScore: '30111810700000000076',
          requisites: 'BANK OF NEW YORK, New York, USA SWIFT:IRVTUS3N к/с 30101810400000000225 В ОПЕРУ МГТУ Банка России БИК 044525225 ИНН 7707083893'
        },
        {
          id: 7,
          country: 'Германия',
          nameBank: 'Commerzbank AG Frankfurt/Main SWIFT:COBADEFF',
          currency: 'EUR',
          numberScore: '400886559400EUR',
          requisites: ''
        },
        {
          id: 8,
          country: 'Россия',
          nameBank: ' "Сберегательный Банк Российской Федерации. SWIFT:SABRRUMMSABRRUMM012',
          currency: 'RUB USD EUR',
          numberScore: '30111810700000000076',
          requisites: 'BANK OF NEW YORK, New York, USA SWIFT:IRVTUS3N к/с 30101810400000000225 В ОПЕРУ МГТУ Банка России БИК 044525225 ИНН 7707083893'
        },
        {
          id: 9,
          country: 'Германия',
          nameBank: 'Commerzbank AG Frankfurt/Main SWIFT:COBADEFF',
          currency: 'EUR',
          numberScore: '400886559400EUR',
          requisites: ''
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
