<template>
  <div class="flex items-center justify-between  py-2 px-5 bg-[#E3E3E3] text-black-ssb rounded opacity-50 text-sm-1">
    <input type="text" :placeholder="$t('yourAddress')" class="input bg-transparent outline-0 py-2 w-1/2">
    <button class="pl-5 border-l border-gray py-2">
      {{$t('subscribe')}}
    </button>
  </div>
</template>
<style scoped>
.input::placeholder {
  color: #909090;
}
</style>
