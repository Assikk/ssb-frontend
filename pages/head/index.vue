<template>
  <section>
    <div class="pt-10 max-w-[845px] mx-auto px-6 lg:px-0">
      <Titles class="mb-6 md:mb-0">
        Учредитель
      </Titles>
      <div class="flex flex-col-reverse md:flex-row items-center md:items-end gap-6 mb-20">
        <div>
          <h2 class="text-center md:text-left mt-6 mb-3 font-medium text-xl-1 md:text-2xl-1 text-black-ssb">
            Андреев Ярослав Сергеевич
          </h2>
          <p class="text-light text-base-1 md:text-base">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы неоднозначны и будут описаны максимально подробно. Значимость этих проблем настолько очевидна, что граница обучения кадров выявляет срочную потребность экспериментов, поражающих по своей масштабности и грандиозности. С учётом сложившейся международной обстановки, глубокий уровень погружения играет определяющее значение для своевременного выполнения сверхзадачи.
          </p>
        </div>
        <img src="/image/emblem.webp" alt="Emblem" class="w-[302px] h-[211px]">
      </div>
      <Titles class="mb-6">
        Руководство
      </Titles>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <CardProfile v-for="item in head" :key="item.id" :item="item"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeadPage',
  data() {
    return {
      head: [
        {
          id: 1,
          name: 'Василенко Карл Николаевич',
          post: 'Сложившаяся структура организации продолжает удивлять'
        },
        {
          id: 2,
          name: 'Курков Иван Петрович',
          post: 'Сложившаяся структура организации продолжает удивлять'
        },
        {
          id: 3,
          name: 'Василенко Кирилл Никитич',
          post: 'Сложившаяся структура организации продолжает удивлять'
        },
        {
          id: 4,
          name: 'Кулешова Елена Валерьевна',
          post: 'Сложившаяся структура организации продолжает удивлять',
          img: {
            src: '/image/profile.webp',
            alt: 'Profile'
          }
        },
        {
          id: 5,
          name: 'Курков Иван Петрович',
          post: 'Сложившаяся структура организации продолжает удивлять',
          img: {
            src: '/image/profile.webp',
            alt: 'Profile'
          }
        },
        {
          id: 6,
          name: 'Петровский Олег Иванович',
          post: 'Сложившаяся структура организации продолжает удивлять',
          img: {
            src: '/image/profile.webp',
            alt: 'Profile'
          }
        },
      ]
    }
  }
}
</script>
