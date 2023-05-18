<template>
  <div class="bg-background py-6 px-4 md:p-10 rounded-xl">
    <div class="flex flex-col md:flex-row gap-6 md:gap-[60px]">
      <div class="w-full md:w-3/5 flex flex-col gap-6 sm:gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <TextsBase-1BlackSSB>
              Ежемесячные расходы
            </TextsBase-1BlackSSB>
            <CalculatorInput :amount="deposit.activeAmount" text="TJS"/>
          </div>
          <CalculatorInputRange :min="deposit.minAmount" :max="deposit.maxAmount" :step="1000"
          @change="(val) => deposit.activeAmount = val" v-model="deposit.activeAmount"/>
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <TextsSm-1Light>
              {{deposit.minAmount}} сомони
            </TextsSm-1Light>
            <TextsSm-1Light class="hidden sm:block">
              {{deposit.maxAmount / 2}} сомони
            </TextsSm-1Light>
            <TextsSm-1Light>
              {{deposit.maxAmount}} сомони
            </TextsSm-1Light>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <TextsBase-1BlackSSB>
              Срок вклада
            </TextsBase-1BlackSSB>
            <CalculatorInput :amount="deposit.activeTerm" text="месяцев"/>
          </div>
          <CalculatorInputRange  :min="deposit.minTerm" :max="deposit.maxTerm" :step="1"
          v-model="deposit.activeTerm" @change="(val) => deposit.activeTerm = val"/>
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <TextsSm-1Light>
              {{deposit.minTerm}} месяцев
            </TextsSm-1Light>
            <TextsSm-1Light class="hidden sm:block">
              {{deposit.maxTerm / 2}} месяцев
            </TextsSm-1Light>
            <TextsSm-1Light>
              {{deposit.maxTerm}} месяцев
            </TextsSm-1Light>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/5 flex flex-col gap-5">
        <TitlesXl2-1BlackSSB>
          Вы получите
        </TitlesXl2-1BlackSSB>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            Сумма в конце срока
          </TextsBase1Gray>
          <TitlesXl2-1Primary>
            14 098 сомони
          </TitlesXl2-1Primary>
        </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            Доход по вкладу
          </TextsBase1Gray>
          <TextsXl-1BlackSSB>
            + 4 098 ₽
          </TextsXl-1BlackSSB>
        </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            Процентная ставка
          </TextsBase1Gray>
          <TextsXl-1BlackSSB>
            13,66 %
          </TextsXl-1BlackSSB>
        </div>
        <Button :primary="true" class="!w-full" @click="openApplication(true)">
          Оформить онлайн
        </Button>
      </div>
    </div>
    <TextsBase-1Gray class="mt-8">
      Расчёт калькулятора предварительный и не является публичной офертой
    </TextsBase-1Gray>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'DepositCalculatorComponent',
  props: ['deposit'],
  methods: {
    ...mapMutations({
      openApplication: 'application/changeApplication'
    }),
  }
}
</script>
