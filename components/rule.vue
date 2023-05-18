<template>
  <div>
    <h2 class="font-medium text-2xl-1 mb-2">
      {{rule.title}}
    </h2>
    <p class="text-base">
      {{rule.description}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Rule',
  props: ['rule']
}
</script>
