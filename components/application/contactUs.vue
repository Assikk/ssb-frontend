<template>
  <div class="flex flex-col gap-6 max-w-[737px] mx-auto">
    <Titles>
      Форма обратной связи
    </Titles>
    <div class="flex flex-col sm:flex-row items-center gap-6">
      <Input type="text" placeholder="Фамилия*"
      v-model="contact.surname"/>
      <Input type="text" placeholder="Имя*"
      v-model="contact.name"/>
    </div>
    <Input type="text" placeholder="Мобильный телефон*"
    v-model="contact.phone"/>
    <Input type="text" placeholder="Электронная почта*"
    v-model="contact.email"/>
    <TextArea placeholder="Комментарий*" v-model="contact.comment"/>
    <Button :primary="true"
    @click="changeSuccess(true)">
      Оформить
    </Button>
    <Introduction class="text-center"/>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ContactUsForm',
  data() {
    return {
      contact: {
        surname: '',
        name: '',
        phone: '',
        email: '',
        comment: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      changeSuccess: 'success/changeSuccess'
    })
  }
}
</script>
