<template>
  <h1 class="font-medium"
  :class="small ? 'text-xl-1 sm:text-3xl-1' : 'text-2xl-1 sm:text-3xl-1'">
    <slot/>
  </h1>
</template>
<script>
export default {
  name: 'TitleComponent',
  props: ['small']
}
</script>
