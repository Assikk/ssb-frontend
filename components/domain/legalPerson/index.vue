<template>
  <div>
    <!-- Start block Slider -->
    <Sliders :sliders="sliders"/>

    <!-- End block Slider -->
    <div class="main__container px-4 xl:px-0">

      <!-- Start block businness -->
      <div class="my-20">
        <Titles class="mb-10">
          Для бизнеса
        </Titles>
        <div class="my-6 mx-0 sm:mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DomainLegalPersonCard v-for="card in businnessCards" :key="card.id" :card="card"/>
        </div>
      </div>
      <!-- End block businness -->

      <!-- Start block support businness -->
      <div>
        <Titles class="mb-10">
          Меры поддержки бизнеса
        </Titles>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DomainLegalPersonBanner v-for="banner in supportBusinness" :key="banner.id" :banner="banner"/>
        </div>
      </div>
      <!-- End block suppor businness -->
    </div>

    <!-- Start block Calculator -->
    <div class="my-20">
      <div class="main__container px-4 xl:px-0 ">
        <Titles class="mb-10">
          Расчитать кредит
        </Titles>
      </div>
      <div class="main__container px-0 sm:px-4 xl:px-0">
        <CalculatorCredit/>
      </div>
    </div>
    <!-- End block Calculator -->

    <!-- Start block banners -->
    <div class="main__container px-4 xl:px-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <BannerSingle v-for="num in 2" :key="num"/>
      </div>
    <!-- End block banners -->

      <!-- Start block Currency -->
      <Currency class="my-20"/>
      <!-- End block Currency -->

      <!-- Start block Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <CardLink v-for="link in links.slice(0,3)" :key="link.id" :link="link" type="deafult"/>
      </div>
      <!-- End block Links -->

      <!-- Start block News -->
      <div class="my-20">
        <Titles>
          Новости
        </Titles>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          <CardNews type="date" v-for="item in news" :key="item.id" :item="item"/>
        </div>
      </div>
      <!-- End block News -->

      <!-- Start block Social Links -->
      <Titles>
        Мы в интернете
      </Titles>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-10">
        <CardSocial v-for="item in social" :key="item.id" :item="item"/>
      </div>
      <!-- End block Social Links -->

      <!-- Start block Links -->
      <div class="mt-20">
        <Titles>
          Полезные ссылки
        </Titles>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        <CardLink v-for="link in links" :key="link.id" :link="link" type="useful"/>
        </div>
      </div>
      <!-- End block Links -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'LegalPersonComponent',
  data() {
    return {
      sliders: [
        {
          id: 1,
          name: 'Карта ССБ 1',
          type: 'deposits',
          title: 'Получите до 1 000 сомони кэшбэка с Картой ССБ 1',
          description: 'Закажите до 30 мая',
          img: {
            src: '/image/map.webp',
            alt: 'Map Image'
          }
        },
        {
          id: 2,
          name: 'Карта ССБ 2',
          type: 'credits',
          title: 'Получите до 1 000 сомони кэшбэка с Картой ССБ 2',
          description: 'Закажите до 31 мая',
          img: {
            src: '/image/coin.webp',
            alt: 'Coin'
          }
        },
        {
          id: 3,
          name: 'Карта ССБ 3',
          type: 'cards',
          title: 'Получите до 1 000 сомони кэшбэка с Картой ССБ 3',
          description: 'Закажите до 32 мая',
          img: {
            src: '/image/coin.webp',
            alt: 'Coin'
          }
        },
        {
          id: 4,
          name: 'Карта ССБ 4',
          type: 'deposits',
          title: 'Получите до 1 000 сомони кэшбэка с Картой ССБ 4',
          description: 'Закажите до 33 мая',
          img: {
            src: '/image/coin.webp',
            alt: 'Coin'
          }
        },
      ],
      businnessCards: [
        {
          id: 1,
          background: 'bg-[#EBF9F1]',
          title: 'Регистрация бизнеса',
          description: 'Оформим документы и отправим в налоговую',
          button: 'Подробнее'
        },
        {
          id: 2,
          background: 'bg-[#F5F7F9]',
          title: 'Бесплатный счёт для бизнеса',
          description: 'Откроем за один день',
          button: 'Подробнее'
        },
        {
          id: 3,
          background: 'bg-[#E0F0FF]',
          title: 'Регистрация бизнеса',
          description: 'Оформим документы и отправим в налоговую',
          button: 'Подробнее'
        },
      ],
      supportBusinness: [
        {
          id: 1,
          background: 'bg-[#EDF7FD]',
          title: 'Расчётный счёт и сервисы для бизнеса за 0 Сомони',
          description: 'Бесплатный доступ к сервисам навсегда',
          img: {
            src: '/image/bank.webp',
            alt: 'bank Image'
          },
          button: 'Подробнее'
        },
        {
          id: 2,
          background: 'bg-[#ECEBFE]',
          title: 'Расчётный счёт и сервисы для бизнеса за 0 Сомони',
          description: 'Бесплатный доступ к сервисам навсегда',
          img: {
            src: '/image/bank.webp',
            alt: 'bank Image'
          },
          button: 'Подробнее'
        },
        {
          id: 3,
          background: 'bg-[#EEEFF6]',
          title: 'Расчётный счёт и сервисы для бизнеса за 0 Сомони',
          description: 'Бесплатный доступ к сервисам навсегда',
          img: {
            src: '/image/bank.webp',
            alt: 'bank Image'
          },
          button: 'Подробнее'
        },
        {
          id: 4,
          background: 'bg-[#EFF8FB]',
          title: 'Расчётный счёт и сервисы для бизнеса за 0 Сомони',
          description: 'Бесплатный доступ к сервисам навсегда',
          img: {
            src: '/image/bank.webp',
            alt: 'bank Image'
          },
          button: 'Подробнее'
        },
      ],
      links: [
        {
          id: 1,
          text: 'Паёми Президенти Ҷумҳурии Тоҷикистон, Пешвои миллат муҳтарам Эмомалӣ Раҳмон',
          image: {
            src: '/image/links/president.svg',
            alt: 'President Image'
          }
        },
        {
          id: 2,
          text: '30-солагии Истиқлолияти Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/links/mountains.svg',
            alt: 'Mountains Image'
          }
        },
        {
          id: 3,
          text: 'Солҳои рушди сайёҳӣ ва ҳунарҳои мардумӣ',
          image: {
            src: '/image/links/emblem.svg',
            alt: 'Emblem Image'
          }
        },
        {
          id: 4,
          text: '30-солагии Истиқлолияти Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/links/blazon.svg',
            alt: 'Blazon Image'
          }
        },
      ],
      news: [
        {
          id: 1,
          date: '29.04.2022',
          description: 'Внезапно, был сорван доклад председателя совхоза'
        },
        {
          id: 2,
          date: '19.04.2022',
          description: 'Оказывается, звук клавиш печатной машинки бодрит!'
        },
        {
          id: 3,
          date: '18.04.2022',
          description: 'Финансовый мир очнулся: логотип крупнейшей компании по производству мыльных пузырей стал нашим флагом в борьбе с ложью'
        },
      ],
      social: [
        {
          id: 1,
          image: {
            src: '/image/social/instagram.svg',
            alt: 'Instagram Icon'
          },
          text: 'Instagram',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://www.instagram.com/'
          }
        },
        {
          id: 2,
          image: {
            src: '/image/social/telegram.svg',
            alt: 'Telegram Icon'
          },
          text: 'Телеграм',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://web.telegram.org/'
          }
        },
        {
          id: 3,
          image: {
            src: '/image/social/facebook.svg',
            alt: 'Facebook Icon'
          },
          text: 'Facebook',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://ru-ru.facebook.com/  '
          }
        },
        {
          id: 4,
          image: {
            src: '/image/social/linkedin.svg',
            alt: 'Linkedln Icon'
          },
          text: 'Linkedln',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://ru.linkedin.com/'
          }
        },
        {
          id: 5,
          image: {
            src: '/image/social/twitter.svg',
            alt: 'Twitter Icon'
          },
          text: 'Twitter',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://twitter.com/?lang=ru'
          }
        },
        {
          id: 6,
          image: {
            src: '/image/social/vk.svg',
            alt: 'Вконтакте Icon'
          },
          text: 'Вконтакте',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://vk.com/'
          }
        },
      ]
    }
  }
}
</script>
