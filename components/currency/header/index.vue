<template>
  <div class="flex items-center justify-between">
    <CurrencyHeaderTab v-if="$route.path === '/'"/>
    <Titles v-else>
      Курс валют
    </Titles>
    <CurrencyTextBaseDarkGray class="hidden md:block">
      {{date}}
    </CurrencyTextBaseDarkGray>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'CurrencyHeaderComponent',
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
      setInterval(() => {
        this.date = moment().format("DD-MM-YYYY HH:mm:ss")
      }, 200)
    },
  },
  mounted() {
    this.getDate()
  }
}
</script>
