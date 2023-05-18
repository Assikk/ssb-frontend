<template>
  <section class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 p-4 md:p-6 border border-divider rounded-2xl">
    <div>
      <h1 class="font-medium text-2xl-1 text-black-ssb">
        {{title}}
      </h1>
      <p class="mt-2 mb-4 md:mb-[52px] text-gray text-base-1">
        {{description}}
      </p>
      <p class="text-right md:text-left text-black-ssb text-base">
        {{author}}
      </p>
    </div>
    <img :src="img.src" :alt="img.alt" class="w-full h-full">
  </section>
</template>
<script>
export default {
  name: 'PresidentBanner',
  data() {
    return {
      title: 'Паёми Президент',
      description: 'Барои сарфакорона ва мақсаднок истифода бурдани маблағҳои буҷетӣ ҳангоми хариди давлатӣ ва пешгирии омилҳои коррупсионӣ дар ин самт зарур аст, ки низоми хариди электронии молу маҳсулот бо истифода аз технологияҳои муосири иттилоотӣ ҷорӣ карда шавад.',
      author: 'Эмомали Раҳмон',
      img: {
        src: '/image/president.webp',
        alt: 'President'
      }
    }
  }
}
</script>
