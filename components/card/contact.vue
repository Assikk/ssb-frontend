<template>
  <div class="text-center">
    <div class="h-[154px] bg-[#DBE6F2] rounded-lg overflow-hidden">
      <img src="/image/phone.webp" alt="Phone" class="mx-auto mt-8 w-[128px] h-[258px]">
    </div>
    <h3 v-if="contact.application" class="mt-6 mb-3 font-medium text-black-ssb text-base-2">
      В мобильном приложении ССБ
    </h3>
    <h3 v-if="contact.mobile" class="mt-6 mb-3 font-medium text-black-ssb text-base-2">
      По номеру <a :href="`tel:${contact.mobile}`" class="text-primary">{{contact.mobile}}</a> по горячей линии НБТ
    </h3>
    <p class="text-gray text-base-1">
      {{contact.description}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ContactCard',
  props: ['contact']
}
</script>
