<template>
  <div class="border border-divider rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-6">
    <div class="w-full lg:w-2/6">
      <img :src="card.img.src" :alt="card.img.alt" class="w-[361px] h-[182px] mx-auto">
    </div>
    <div class="w-full lg:w-4/6">
      <h2 class="font-medium text-xl-1 sm:text-2xl-1 mb-2">
        {{card.name}}
      </h2>
      <p class="text-sm-1 sm:text-base text-gray mb-6">
        {{card.description}}
      </p>
      <div class="flex justify-between lg:justify-start flex-col md:flex-row gap-4 mb-6">
        <div class="w-full md:w-[230px]" v-for="(advantage, index) in card.advantages" :key="index">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">{{advantage.title}}</h3>
          <p class="text-sm-1 text-gray">
            {{advantage.description}}
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse sm:flex-row gap-6 sm:gap-0 items-center justify-between">
        <NuxtLink :to="localePath('/FAQ')" class="text-gray text-base-1 text-right sm:text-left w-full sm:w-auto">
          Остались вопросы?
        </NuxtLink>
        <div class="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-4">
          <Button @click="$router.push(localePath(card.type) + `/${card.id}?type=${$route.query.type}`)" :outlined="true">
            Подробнее
          </Button>
          <Button @click="openApplication" :primary="true">
            Оформить
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CardProduct',
  props: ['card', 'list'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
      openList: 'application/openList',
    }),
    openApplication() {
      this.changeApplication(true)
      this.changeProduct(this.card)
      this.openList(this.list)
    },
  }
}
</script>
