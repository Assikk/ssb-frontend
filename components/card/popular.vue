<template>
  <div class="overflow-hidden flex flex-col justify-between z-100 relative py-8 px-6 border border-[#E5E5E5] rounded-xl">
    <h1 class="font-medium text-2xl-1 mb-2">
      {{product.name}}
    </h1>
    <p class="text-gray text-base-1">
      {{product.description}}
    </p>
    <ul class="flex flex-col gap-6 my-[44px] w-3/4">
      <li v-for="advantage in product.advantages" :key="advantage.id">
        <p class="text-gray text-base-1">
          {{advantage.title}}
        </p>
        <p class="text-black-ssb font-medium text-xl-1">
          {{advantage.description}}
        </p>
      </li>
    </ul>
    <Button @click="$router.push(localePath(product.type) + `/${product.id}?type=${$route.query.type}`)" :outlined="true" class="w-max">
      Подробнее
    </Button>
    <img :src="product.img.src" :alt="product.img.alt" class="absolute bottom-0 right-[-20%] h-[215px]">
  </div>
</template>
<script>
export default {
  name: 'ProductPopular',
  props: ['product']

}
</script>
