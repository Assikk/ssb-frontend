<template>
  <p class="text-sm-1 lg:text-base-1 text-dark">
    Нажимая кнопку «Оформить» я подтверждаю, что ознакомлен и согласен с <span @click="goToRulesCard" class="cursor-pointer text-bllue hover:border-b hover:border-bllue">условиями выпуска и обслуживания дебетовых карт</span> и на <span class="text-bllue hover:border-b hover:border-bllue">обработку моих персональных данных</span>
  </p>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Introduction',
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication'
    }),
    goToRulesCard() {
      this.$router.push(this.localePath('rules-card'))
      this.changeApplication(false)
    }
  }

}
</script>
