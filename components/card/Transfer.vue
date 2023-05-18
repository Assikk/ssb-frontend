<template>
  <div class="bg-background rounded-xl flex flex-col sm:flex-row  items-center gap-6 p-6 sm:p-0">
    <img :src="transfer.img.src" :alt="transfer.img.alt" class="w-[200px] h-[200px]">
    <div class="py-0 sm:py-4">
      <h1 class="font-medium text-2xl-1">
        {{transfer.title}}
      </h1>
      <p class="my-3 text-light text-base-1">
        {{transfer.description}}
      </p>
      <div>
        <Button class="w-full sm:w-auto" :outlined="true"
        @click="$router.push(localePath(transfer.type) + `/${transfer.id}?type=${$route.query.type}`)">
          Подробнее
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardTransfer',
  props: ['transfer']
}
</script>
