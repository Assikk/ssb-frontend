<template>
  <div class="h-[70px]">
    <div class="relative bg-white px-5 py-3 rounded w-full text-base-1 placeholder:text-gray text-black-ssb">
      <div @click="isShowList = !isShowList" class="flex justify-between items-center cursor-pointer">
        <p>
          {{active}}
        </p>
        <svg v-if="list.length > 0" class="fill-black-ssb w-6 h-6"
        :class="isShowList ? 'rotate-180' : ''">
          <use xlink:href="#arrow"></use>
        </svg>
        </div>
        <ul v-if="isShowList" class="z-10 drop-shadow-xl absolute top-[3.2rem] left-0 bg-white py-3 rounded w-full">
          <li v-for="item in list" :key="item.id" class="px-5 py-2 cursor-pointer hover:bg-primary-light hover:text-primary"
          @click="clickItem(item)">
            {{item.name}}
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Select',
  props: ['active', 'list'],
  data() {
    return {
      isShowList: false
    }
  },
  methods: {
    clickItem(item) {
      this.isShowList = false
      this.$emit('click', item)
    }
  }
}
</script>
