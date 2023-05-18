<template>
  <div class="w-full bg-background rounded-xl p-4 sm:p-10 grid grid-cols-3 sm:grid-cols-4 justify-items-center gap-[19px]">
    <div class="main_block">
      <div class="block_item_one">
        <div class="opacity-0 w-6 sm:w-8 h-6 sm:h-8">
        </div>
        <CurrencyTextSmDarkGray>
          Валюта
        </CurrencyTextSmDarkGray>
      </div>
      <div class="block_item_one">
        <img src="/image/flags/america.svg" alt="America Flag Icon" class="w-6 sm:w-8 h-6 sm:h-8">
        <div>
          <CurrencyTitleDark class="mb-1">
            USD
          </CurrencyTitleDark>
          <CurrencyTextSmDarkGray>
            Долл. США
          </CurrencyTextSmDarkGray>
        </div>
      </div>
      <div class="block_item_one">
        <img src="/image/flags/europe.svg" alt="Europe Flag Icon" class="w-6 sm:w-8 h-6 sm:h-8">
        <div>
          <CurrencyTitleDark class="mb-1">
            EUR
          </CurrencyTitleDark>
          <CurrencyTextSmDarkGray>
            Евро
          </CurrencyTextSmDarkGray>
        </div>
      </div>
      <div class="block_item_one">
        <img src="/image/flags/russia.svg" alt="Russia Flag Icon" class="w-6 sm:w-8 h-6 sm:h-8">
        <div>
          <CurrencyTitleDark class="mb-1">
            RUB
          </CurrencyTitleDark>
          <CurrencyTextSmDarkGray>
            Росс. Рубль
          </CurrencyTextSmDarkGray>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex flex-col gap-[19px] w-max">
      <CurrencyTextSmDarkGray class="title">
        Курс НБТ
      </CurrencyTextSmDarkGray>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          12.40
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/green.svg" alt="Green Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          13.30
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          0.14
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
    </div>
    <div class="main_block">
      <CurrencyTextSmDarkGray class="title">
        Купить
      </CurrencyTextSmDarkGray>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          12.40
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/green.svg" alt="Green Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          13.30
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          0.14
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
    </div>
    <div class="main_block">
      <CurrencyTextSmDarkGray class="title">
        Продать
      </CurrencyTextSmDarkGray>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          12.40
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/green.svg" alt="Green Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          13.30
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
      <div class="block_item_second">
        <CurrencyTitleDark class="w-4/5 text-end">
          0.14
        </CurrencyTitleDark>
        <div class="w-1/5">
          <img src="/image/arrows/red.svg" alt="Red Arrow" class="min-w-[1rem] min-h-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CurrencyBodyInfoComponent',
}
</script>
<style lang="postcss" scoped>
  .main_block {
    @apply flex flex-col gap-[19px] w-max
  }
  .block_item_one {
    @apply flex items-center gap-3 sm:gap-4
  }
  .block_item_second {
    @apply flex items-center gap-1 h-[37px] sm:h-[44px]
  }
  .title {
    @apply flex items-center h-6 sm:h-8
  }
</style>
