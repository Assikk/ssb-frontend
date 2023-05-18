<template>
  <div class="grid gap-10 grid-cols-1 sm:grid-cols-2" :class="`lg:grid-cols-${advantages.length}`">
    <BlocksAdvantagesOutlinedItem v-for="advantage in advantages" :key="advantage.id" :item="advantage"/>
  </div>
</template>
<script>
export default {
  name: 'OutlineAdvantagesComponent',
  props: ['advantages']
}
</script>
