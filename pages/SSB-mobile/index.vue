<template>
  <section>
    <Banner :banner="banner"/>
    <div class="max-w-[1062px] mx-auto py-20 px-6 lg:px-0">
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
    <div class="mt-0 lg:mt-20">
      <div class="bg-[#FBFBFB] lg:bg-background">
        <div class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-[82px] justify-between items-center main__container px-6 xl:px-0 py-[60px] lg:py-10">
          <div class="flex items-center gap-[9px] bg-white p-3 lg:p-10">
            <img src="/image/star.svg" alt="Star Icon" class="block lg:hidden w-10 h-10">
            <div>
              <h1 class="text-black-ssb text-xl-1 sm:text-2xl-1 mb-2 sm:mb-3">
                InTouch
              </h1>
              <p class="text-light text-sm-2 sm:text-base-1">
                Принимая во внимание показатели успешности, внедрение современных методик требует анализа благоприятных перспектив. Однозначно, явные признаки победы институционализации смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Но активно развивающиеся страны третьего мира могут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                Разнообразный и богатый опыт говорит нам, что внедрение современных методик не даёт нам иного выбора, кроме определения модели развития. Для современного мира перспективное планирование, в своём классическом представлении, допускает внедрение модели развития. Каждый из нас понимает очевидную вещь: синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса поставленных обществом задач. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Также как выбранный нами инновационный путь требует от нас анализа первоочередных требований.
              </p>
            </div>
          </div>
          <img src="/image/phone.webp" alt="Phone" class=" w-[253px] lg:w-[295px] h-[510px] lg:h-[594px]">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SSB-mobile',
  data() {
    return {
      banner: {
        name: 'Мобильное приложение ССБ',
        description: 'Лучший мобильный банкинг',
        img: {
          src: '/image/rko.webp',
          alt: 'SSB mobile'
        },
        buttonDownload: {
          text: 'Скачать',
          link: 'https://www.google.com/'
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
    }
  }
}
</script>
