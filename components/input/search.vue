<template>
  <div class="flex items-center justify-between px-5 py-[14px] bg-white rounded">
    <input type="text"
    :placeholder="$route.query.q" class="outline-0 placeholder:text-black-ssb placeholder:text-base-1 w-full"
    @input="fillValue"
    :value="value"
    @keypress.enter="$emit('submit', value)">
    <img src="/image/search.svg" alt="Search Icon" class="w-6 h-6 cursor-pointer" @click="$emit('submit', value)">
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  props: ['value'],
  methods: {
    fillValue(event) {
      this.$emit("input", event.target.value);
    }
  }
}
</script>
