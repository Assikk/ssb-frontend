<template>
  <div class="flex flex-col gap-6 justify-start sm:justify-between p-8 sm:p-10 border-2 border-primary-light rounded-xl"
  :class="item.date ? 'min-h-fit sm:min-h-[326px]' : ''">
    <div>
      <p v-if="item.date" class="text-primary text-base-1 mb-4">
        {{item.date}}
      </p>
      <p v-if="item.title" class="text-light font-medium text-xl-1 mb-4">
        {{item.title}}
      </p>
      <p class="text-light" :class="item.date ? 'text-xl-1' : 'text-sm-1'">
        {{item.description}}
      </p>
    </div>
    <Button :outlined="true" class="w-fit"
    @click="$router.push(localePath('/news') + `/${item.id}?type=${$route.query.type}`)">
      Подробнее
    </Button>
  </div>
</template>
<script>
export default {
  name: 'CardNews',
  props: ['item']
}
</script>
