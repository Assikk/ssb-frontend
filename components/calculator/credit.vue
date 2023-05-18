<template>
  <div class="max-w-auto sm:max-w-[1280px] mx-0 sm:mx-auto bg-background p-6 sm:p-10 flex flex-col lg:flex-row gap-6 lg:gap-[60px] rounded-xl">
    <div class="w-full lg:w-3/5 flex flex-col gap-8">
      <div>
        <TitlesXl-1Gray class="mb-2">
          Тип кредита
        </TitlesXl-1Gray>
        <Select :active="activeCredit.name" :list="credits" @click="change"/>
      </div>
      <div>
        <div class="flex items-center justify-between text-base-1 mb-2">
          <TextsBase-1BlackSSB>
            Сумма кредита
          </TextsBase-1BlackSSB>
          <div class="bg-white min-w-[142px] sm:min-w-[180px] py-3 px-5 text-gray">
            <p class="text-sm-1 sm:text-base-1">
              <span class="text-lg-1 sm:text-xl-1 text-black-ssb font-medium">{{activeCredit.activeAmount}}</span> TJS
            </p>
          </div>
        </div>
        <input class="w-full" :min="activeCredit.minAmount" :max="activeCredit.maxAmount" step="1000" type="range"
        @input="changeAmount($event.target.value)"
        v-model="activeCredit.activeAmount">
        <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
          <p>
            {{activeCredit.minAmount}}
          </p>
          <p class="hidden sm:block">
            {{activeCredit.maxAmount / 2}}
          </p>
          <p>
            {{activeCredit.maxAmount}}
          </p>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between text-base-1 mb-2">
          <p class="text-black-ssb">
            Срок кредита
          </p>
          <div class="bg-white min-w-[142px] sm:min-w-[180px] py-3 px-5 text-gray">
            <p class="text-sm-1 sm:text-base-1">
              <span class="text-lg-1 sm:text-xl-1 text-black-ssb font-medium">{{activeCredit.activeTerm}}</span> месяцев
            </p>
          </div>
        </div>
        <input class="w-full" :min="activeCredit.minTerm" :max="activeCredit.maxTerm" step="1" type="range"
        @input="changeTerm($event.target.value)"
        v-model="activeCredit.activeTerm">
        <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
          <p>
            {{activeCredit.minTerm}} месяца
          </p>
          <p class="hidden sm:block">
            {{activeCredit.maxTerm / 2}} месяца
          </p>
          <p>
            {{activeCredit.maxTerm}} месяца
          </p>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <input type="reset">
        <p class="text-sm-1 sm:text-base-1 text-black-ssb">
          Я постоянный клиент банка
        </p>
      </div>
    </div>
    <div class="w-full lg:w-2/5 flex flex-col gap-[46px]">
      <div>
        <p class="text-sm-1 sm:text-base-1 text-gray">
          Ежемесячный платеж
        </p>
        <p class="font-medium text-xl-1 sm:text-2xl-1 text-primary">
          1 034 сомони
        </p>
      </div>
      <div class="flex gap-4 sm:gap-6">
        <div class="w-1/2 md:w-auto">
          <p class="text-small-base-1 sm:text-base-1 text-gray">
            Вам понадобится
          </p>
          <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
            Паспорт РТ
          </p>
        </div>
        <div class="w-1/2 md:w-auto">
          <p class="text-small-base-1 sm:text-base-1 text-gray">
            Вероятность одобрения
          </p>
          <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
            +50% за заполнение заявки
          </p>
        </div>
      </div>
      <div class="flex gap-4 sm:gap-6">
        <div class="w-1/2 md:w-auto">
          <p class="text-small-base-1 sm:text-base-1 text-gray">
            Сумма кредита
          </p>
          <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
            {{activeCredit.activeAmount}} сомони
          </p>
        </div>
        <div class="w-1/2 md:w-auto">
          <p class="text-small-base-1 sm:text-base-1 text-gray">
            Срок кредита
          </p>
          <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
            {{activeCredit.activeTerm}} месяцев
          </p>
        </div>
      </div>
      <Button :primary="true" class="!w-full" @click="openApplication(true)">
        Оформить онлайн
      </Button>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CreditCalculatorComponent',
  data() {
    return {
      activeCredit: {
        name: 'Дастрас - 24% годовых',
        minAmount: 1000,
        maxAmount: 25000,
        activeAmount: 5000,
        minTerm: 1,
        maxTerm: 24,
        activeTerm: 6
      },
      credits: [
        {
          id: 1,
          name: 'Дастрас - 24% годовых',
          minAmount: 1000,
          maxAmount: 25000,
          minTerm: 6,
          maxTerm: 36
        },
        {
          id: 2,
          name: 'Дастрас - 20% годовых',
          minAmount: 2000,
          maxAmount: 35000,
          minTerm: 3,
          maxTerm: 42
        },
        {
          id: 3,
          name: 'Дастрас - 34% годовых',
          minAmount: 3000,
          maxAmount: 55000,
          minTerm: 1,
          maxTerm: 12
        },
        {
          id: 4,
          name: 'Дастрас - 14% годовых',
          minAmount: 10000,
          maxAmount: 250000,
          minTerm: 12,
          maxTerm: 78
        },
      ]
    }
  },
  methods: {
    ...mapMutations({
      openApplication: 'application/changeApplication'
    }),
    change(item) {
      this.activeCredit = item
      console.log(this.activeCredit.activeAmount);
    },
    changeAmount(val) {
      this.activeCredit.activeAmount = val
    },
    changeTerm(val) {
      this.activeCredit.activeTerm = val
    }
  }
}
</script>
<style scoped>
/*Inut range*/
/*chrome*/
input[type="range"] {
  -webkit-appearance: none;
  background:  #FCE8E8;
  border-radius: 20px;
  height: 4px;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #FF1F1F;
  margin-top: -6px;
  position: relative;
  z-index: 10;
}
input[type="range"]:focus {
  outline: none;
}
/*opera*/
input[type="range"] {
  /*required for proper track sizing in FF*/
  width: 100%;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #FF1F1F;
}
/*hide the outline behind the border*/
input[type="range"]:-moz-focusring {
  outline: 1px solid transparent;
  outline-offset: -1px;
}
</style>
