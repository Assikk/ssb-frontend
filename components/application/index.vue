<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="changeApplication(false)"
    ></div>
    <div class="w-[360px] md:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl">
      <h1 class="text-center font-medium text-lg-1 lg:text-2xl-1">
        Оформите заявку и получите кредит
      </h1>
      <form @submit.prevent="example" class="flex flex-col gap-6 lg:gap-10 mt-10 mb-6 lg:mb-11">
        <Select v-if="active.name" :active="active.name"
        :list="list"
        @click="clickItem"/>
        <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
          <ValidationProvider :rules="{required:true, min:6}" v-slot="{ errors }" class="w-full sm:w-1/2 h-[70px]">
            <Input type="text" placeholder="Фамилия*"
            v-model="product.surname"
            :error="errors[0]"/>
          </ValidationProvider>
          <ValidationProvider :rules="{required:true, min:6}" v-slot="{errors}" class="w-full sm:w-1/2 h-[70px]">
            <Input type="text" placeholder="Имя*"
            v-model="product.name"
            :error="errors[0]"/>
          </ValidationProvider>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
          <ValidationProvider :rules="{min:6}" v-slot="{errors}" class="w-full sm:w-1/2 h-[70px]">
            <Input type="text" placeholder="Отчество"
            v-model="product.patronymic"
            :error="errors[0]"/>
          </ValidationProvider>
          <Select :active="product.region.name" :list="regions"
          @click="(item) => product.region = item"
          class="w-full sm:w-1/2"/>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start gap-6">
          <ValidationProvider :rules="{required:true, min:9}" v-slot="{errors}" class="w-full h-[70px]">
            <Input type="tel" placeholder="Номер телефона*"
            v-model="product.phone"
            :error="errors[0]"/>
          </ValidationProvider>
          <Button class="w-full lg:w-auto" :primary="true">
            Оформить
          </Button>
        </div>
      </form>
      <Introduction/>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Application',
  data() {
    return {
      value: '',
      regions: [
        {
          id: 1,
          name: 'Регион 1'
        },
        {
          id: 2,
          name: 'Регион 2'
        },
        {
          id: 3,
          name: 'Регион 3'
        },
        {
          id: 4,
          name: 'Регион 4'
        },
        {
          id: 5,
          name: 'Регион 5'
        },
        {
          id: 6,
          name: 'Регион 6'
        },
      ],
      product: {
        nameProduct: this.active,
        region: {
          name: 'Регион*'
        },
        surname: null,
        name: null,
        patronymic: null,
        phone: null
      },
    }
  },
  computed: {
    ...mapState({
      active: state => state.application.active,
      list: state => state.application.list
    })
  },
  methods: {
    ...mapMutations({
      changeProduct: 'application/changeProduct',
      changeApplication: 'application/changeApplication',
      changeSuccess: 'success/changeSuccess',
    }),
    clickItem(item) {
      this.changeProduct(item)
    },
    example() {
      console.log(this.product);
      this.changeApplication(false),
      this.changeSuccess(true)
    },
  }
}
</script>
<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
