<template>
  <section>
    <Banner :banner="banner"/>
    <div class="max-w-[1062px] mx-auto py-20 px-6 xl:px-0">
      <Titles class="text-center mb-6">
        Наши преимущества
      </Titles>
      <div class="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardAdvantage v-for="advantage in advantages" :key="advantage.id" :advantage="advantage"/>
      </div>
      <div class="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardAdvantage v-for="advantage in advantages.slice(0,3)" :key="advantage.id" :advantage="advantage"/>
      </div>
      <div class="hidden lg:flex gap-10 mt-10 justify-center">
        <CardAdvantage class="max-w-[327px]" v-for="advantage in advantages.slice(3,5)" :key="advantage.id" :advantage="advantage"/>
      </div>
    </div>
    <BannerMobile/>
    <div class="max-w-[1062px] mx-auto mt-[80px] px-6 lg:px-0">
      <h2 class="text-center font-medium text-2xl-1 mb-6">
        Миссия ССБ
      </h2>
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 mb-[80px]">
        <p class="text-base-1 text-light">
          Также как постоянное информационно-пропагандистское обеспечение нашей деятельности прекрасно подходит для реализации новых предложений. Идейные соображения высшего порядка, а также сложившаяся структура организации предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. В рамках спецификации современных стандартов, базовые сценарии поведения пользователей представлены в исключительно положительном свете. И нет сомнений, что тщательные исследования конкурентов своевременно верифицированы.
        </p>
        <img src="/image/mission.webp" alt="Mission SSB" class="w-[410px] h-[176px]">
      </div>
      <h2 class="text-center font-medium text-2xl-1 mb-6">
        Наши ценности
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardValues v-for="value in values" :key="value.id" :value="value"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      banner: {
        name: 'Межбанковское кредитование',
        description: 'Удобное надежное и безопасное место для хранения ценностей',
        img: {
          src: '/image/ssb.webp',
          alt: 'SSB'
        }
      },
      advantages: [
        {
          id: 1,
          title: '1 млн+',
          description: 'Пользователей нам доверяют',
          img: {
            src: '/image/advantages/person.webp',
            alt: 'Person Icon'
          },
          mobile: {
            src: '/image/advantages/person-mobile.webp',
            alt: 'Person Icon'
          }
        },
        {
          id: 2,
          title: '3000',
          description: 'Банкоматов по всей стране',
          img: {
            src: '/image/advantages/wallet.webp',
            alt: 'Wallet Icon'
          },
          mobile: {
            src: '/image/advantages/wallet-mobile.webp',
            alt: 'Wallet Icon'
          }
        },
        {
          id: 3,
          title: '28',
          description: 'Лет на рынке Таджикистана',
          img: {
            src: '/image/advantages/done.webp',
            alt: 'Done Icon'
          },
          mobile: {
            src: '/image/advantages/done-mobile.webp',
            alt: 'Done Icon'
          }
        },
        {
          id: 4,
          title: '163',
          description: 'Центра банковского обслуживания',
          img: {
            src: '/image/advantages/centre.webp',
            alt: 'Centre Icon'
          },
          mobile: {
            src: '/image/advantages/centre-mobile.webp',
            alt: 'Centre Icon'
          }
        },
        {
          id: 5,
          title: '22',
          description: 'Филиала в 3-х регионах',
          img: {
            src: '/image/advantages/filial.webp',
            alt: 'Filial Icon'
          },
          mobile: {
            src: '/image/advantages/filial-mobile.webp',
            alt: 'Filial Icon'
          }
        },
      ],
      values: [
        {
          id: 1,
          isReverse: false,
          img: {
            src: '/image/heart.webp',
            alt: 'Heart'
          },
          title: 'Давайте не забывать',
          description: 'Начало повседневной работы по формированию позиции создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий!'
        },
        {
          id: 2,
          isReverse: true,
          img: {
            src: '/image/heart.webp',
            alt: 'Heart'
          },
          title: 'Давайте не забывать',
          description: 'Начало повседневной работы по формированию позиции создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий!'
        },
        {
          id: 3,
          isReverse: false,
          img: {
            src: '/image/heart.webp',
            alt: 'Heart'
          },
          title: 'Давайте не забывать',
          description: 'Начало повседневной работы по формированию позиции создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий!'
        },
        {
          id: 4,
          isReverse: true,
          img: {
            src: '/image/heart.webp',
            alt: 'Heart'
          },
          title: 'Давайте не забывать',
          description: 'Начало повседневной работы по формированию позиции создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий!'
        },
      ]
    }
  }
}
</script>
