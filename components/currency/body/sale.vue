<template>
  <div class="w-full bg-background flex flex-col gap-6 rounded-xl p-4 sm:p-10">
    <div class="flex flex-col gap-2">
      <CurrencyTitleLight>
        Продать
      </CurrencyTitleLight>
      <CurrencyInput placeholder="100" :currency="activeCurrencySale" :list="currencyList"
      @click="(item) => activeCurrencySale = item.text"/>
    </div>
    <div class="flex flex-col gap-2">
      <CurrencyTitleLight>
        Купить
      </CurrencyTitleLight>
      <CurrencyInput placeholder="1 240.00" :currency="activeCurrencyBuy" :list="currencyList"
      @click="(item) => activeCurrencyBuy = item.text"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CurrencySaleComponent',
  data() {
    return {
      currencyList: [
        {
          id: 1,
          text: 'USD'
        },
        {
          id: 2,
          text: 'RUB'
        },
        {
          id: 3,
          text: 'EUR'
        }
      ],
      activeCurrencySale: 'TJS',
      activeCurrencyBuy: 'TJS',
    }
  },
}
</script>
