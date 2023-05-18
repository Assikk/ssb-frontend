<template>
  <div>
    <Sliders :sliders="sliders"/>
    <div class="main__container px-6 xl:px-0">
      <BannerPresident class="my-20"/>
      <Titles>
        Популярные продукты
      </Titles>
      <div class="mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CardPopular v-for="product in popularProducts" :key="product.id" :product="product"/>
      </div>
    </div>
    <BannerMobile/>
    <div class="main__container px-6 xl:px-0">
      <div class="my-20">
        <Titles>
          Заявки
        </Titles>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
          <CardApplication v-for="application in applications" :key="application.id"
          :application="application"/>
        </div>
      </div>
      <Titles class="mt-20">
        Расчитать кредит
      </Titles>
    </div>
      <CalculatorCredit class="mt-4 sm:mt-10"/>
      <div class="main__container px-6 xl:px-0">
        <div class="my-20">
          <SlidersSingle/>
        </div>
        <div>
          <Titles>
            Курс валют
          </Titles>
          <Currency class="mt-4"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-20">
          <CardLink v-for="link in links.slice(0,3)" :key="link.id" :link="link" type="deafult"/>
        </div>
        <div>
          <Titles>
            Новости
          </Titles>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          <CardNews type="date" v-for="item in news" :key="item.id" :item="item"/>
        </div>
        <div class="my-20">
          <Titles>
            Мы в интернете
          </Titles>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-10">
            <CardSocial v-for="item in social" :key="item.id" :item="item"/>
          </div>
        </div>
        <div>
          <Titles>
            Полезные ссылки
          </Titles>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          <CardLink v-for="link in links" :key="link.id" :link="link" type="useful"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
      popularProducts: [
        {
          id: 1,
          img: {
            src: '/image/istehsolot_sodirot.webp',
            alt: 'Istehsolot_sodirot'
          },
          type: 'credits',
          name: 'Рушди соҳибкорӣ',
          description: 'Хариду фурӯши молу маҳсулот, хизматрасонӣ, иҷрои кор, сохтмон, хариди биноҳо, дигар иншоотҳо, воситаҳои асосӣ, барои оғоз ё васеъ намудани фаъолияти соҳибкорӣ',
          advantages: [
            {
              id: 1,
              title: 'Меъёри фоиз (солона)',
              description: '18 % бо сомони'
            },
            {
              id: 2,
              title: 'Ҳаҷми қарз',
              description: 'аз 1 000 сомонӣ'
            },
            // {
            //   id: 3,
            //   title: 'кэшбек на покупки у наших партнеров',
            //   description: 'до 70%'
            // },
          ]
        },
        {
          id: 2,
          img: {
            src: '/image/rushdi_sohibkori3 1.webp',
            alt: 'rushdi_sohibkori3 1'
          },
          type: 'deposits',
          name: 'Рушди истеҳсолот ва содирот',
          description: 'Сохтмон ва хариди биноҳо ва дигар иншоотҳои вобаста ба истеҳсолот. Хариди воситаҳои асосӣ, хариди ашёи хом, васеъ намудани ҳудуди истеҳсолот',
          advantages: [
            {
              id: 1,
              title: 'Ҳаҷми қарз:',
              description: 'аз  30 000 сомонӣ'
            },
            {
              id: 2,
              title: 'Меъёри фоиз (солона):',
              description: '16 %'
            },
            // {
            //   id: 3,
            //   title: 'до 70%',
            //   description: 'кэшбек на покупки у наших партнеров'
            // },
          ]
        },
        {
          id: 3,
          img: {
            src: '/image/barakati_istiklol.webp',
            alt: 'Barakati_istiklol'
          },
          type: 'cards',
          name: 'Баракати Истиқлол',
          description: 'Дастрасӣ ба қарзҳо барои ҳама намуди  мақсадҳои истеъмолӣ',
          advantages: [
            {
              id: 1,
              title: 'Ҳаҷми қарз:',
              description: 'аз 1000 сомонӣ'
            },
            {
              id: 2,
              title: 'Меъёри фоиз (солона):',
              description: '24% бо сомонӣ'
            },
            // {
            //   id: 3,
            //   title: 'до 70%',
            //   description: 'кэшбек на покупки у наших партнеров'
            // },
          ]
        },
        {
          id: 4,
          img: {
            src: '/image/credit.webp',
            alt: 'Credit Icon'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 4',
          description: 'Самая приобретаемая и самая выгодная карта в данный момент',
          advantages: [
            {
              id: 1,
              title: '100 дней',
              description: 'бесплатного обслуживания'
            },
            {
              id: 2,
              title: 'до 5 000 сомони',
              description: 'наличные и переводы без процентов'
            },
            // {
            //   id: 3,
            //   title: 'до 70%',
            //   description: 'кэшбек на покупки у наших партнеров'
            // },
          ]
        },
      ],
      applications: [
        {
          id: 1,
          name: 'Банкоматы и отделения',
          img: {
            src: '/image/applications/atm.svg',
            alt: 'ATM Icon'
          }
        },
        {
          id: 2,
          name: 'Кредитные карты',
          img: {
            src: '/image/applications/card.svg',
            alt: 'Credit card Icon'
          }
        },
        {
          id: 3,
          name: 'Онлайн-банкинг',
          img: {
            src: '/image/applications/banking.svg',
            alt: 'Online Banking Icon'
          }
        },
        {
          id: 4,
          name: 'Активация карты / Замена пин-кода',
          img: {
            src: '/image/applications/key.svg',
            alt: 'Key Icon'
          }
        },
        {
          id: 6,
          name: 'База знаний',
          img: {
            src: '/image/applications/search.svg',
            alt: 'Search Icon'
          }
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
