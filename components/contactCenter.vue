<template>
  <div>
    <p class="text-sm-1 font-medium mb-[10px]">
      {{item.phone}}
    </p>
    <p class="text-small-base-1">
      {{item.text}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ContactCenter',
  props: ['item']
}
</script>
