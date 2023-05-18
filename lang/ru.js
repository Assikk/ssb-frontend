export default {
  onlineBanking: 'Онлайн-банкинг',
  search: 'Поиск',
  searchResult: 'Результат поиска',
  subscribe: 'Подписаться',
  yourAddress: 'Ваша почта',
  credits: 'Кредиты',
  deposits: 'Вклады',
  transfers: 'Денежные переводы',
  headerListPage: [
    {
      id: 1,
      url: '/',
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Частным лицам',
      mobileText: 'Частным',
      child: [
        {
          link: `/deposits?type=${1}`,
          name: 'deposits',
          text: 'Вклады'
        },
        {
          link: `/credits?type=${1}`,
          name: 'credits',
          text: 'Кредиты'
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Денежные переводы'
        },
        {
          link: `/cards?type=${1}`,
          name: 'cards',
          text: 'Карты'
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Расчетно-кассовое обслуживание'
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Сейфовые операции'
        },
        {
          link: `/SSB-mobile?type=${1}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл'
        },
      ]
    },
    {
      id: 2,
      url: '/legal-person',
      link: `/legal-person?type=${2}`,
      svg: '#twoPerson',
      text: 'Юридическим лицам',
      mobileText: 'Юр. лицам',
      child: [
        {
          link: `/deposits?type=${2}`,
          name: 'deposits',
          text: 'Вклады'
        },
        {
          link: `/credits?type=${2}`,
          name: 'credits',
          text: 'Кредиты'
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Расчетно-кассовое обслуживание'
        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Сервисы и услуги'
        },
        {
          link: `/SSB-mobile?type=${2}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл'
        },
      ]
    },
    {
      id: 3,
      url: '/financial-organization',
      link: `/financial-organization?type=${3}`,
      svg: '#dollar',
      text: 'Финансовым организациям',
      mobileText: 'Фин. орг.',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Корреспонденция'
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Продажа имущества'
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Межбанковское кредитование'
        },
        {
          link: `/services?type=${3}`,
          name: 'services',
          text: 'Сервисы и услуги'
        },
      ]
    },
    {
      id: 4,
      url: '/about',
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'О нас',
      mobileText: 'О нас',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'О банке'
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Документы'
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: 'История банка'
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Пресс-центр'
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Руководство'
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Структура'
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Галерея'
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Адреса'
        }
      ]
    },
  ],
  footer: [
    {
      id: 1,
      name: 'Банк',
      classWidth: 'w-[27%]'
    },
    {
      id: 2,
      name: 'Услуги',
      classWidth: 'w-[27%]',
      showChild: false,
      child: [
        {
          id: 1,
          link: `/?type=${1}`,
          text: 'Частным лицам',
          child: [
            {
              link: `/deposits?type=${1}`,
              name: 'deposits',
              text: 'Вклады'
            },
            {
              link: `/credits?type=${1}`,
              name: 'credits',
              text: 'Кредиты'
            },
            {
              link: `/transfers?type=${1}`,
              name: 'transfers',
              text: 'Денежные переводы'
            },
            {
              link: `/cards?type=${1}`,
              name: 'cards',
              text: 'Карты'
            },
            {
              link: `/rko?type=${1}`,
              name: 'rko',
              text: 'Расчетно-кассовое обслуживание'
            },
            {
              link: `/safe-operations?type=${1}`,
              name: 'safe-operations',
              text: 'Сейфовые операции'
            },
            {
              link: `/SSB-mobile?type=${1}`,
              name: 'SSB-mobile',
              text: 'ССБ мобайл'
            },
          ]
        },
        {
          id: 2,
          link: `/legal-person?type=${2}`,
          text: 'Юридическим лицам',
          child: [
            {
              link: `/deposits?type=${2}`,
              name: 'deposits',
              text: 'Вклады'
            },
            {
              link: `/credits?type=${2}`,
              name: 'credits',
              text: 'Кредиты'
            },
            {
              link: `/rko?type=${2}`,
              name: 'rko',
              text: 'Расчетно-кассовое обслуживание'
            },
            {
              link: `/services?type=${2}`,
              name: 'services',
              text: 'Сервисы и услуги'
            },
            {
              link: `/SSB-mobile?type=${2}`,
              name: 'SSB-mobile',
              text: 'ССБ мобайл'
            },
          ]
        },
        {
          id: 3,
          link: `/financial-organization?type=${3}`,
          text: 'Финансовым организациям',
          child: [
            {
              link: `/correspondence?type=${3}`,
              name: 'correspondence',
              text: 'Корреспонденция'
            },
            {
              link: `/sale?type=${3}`,
              name: 'sale',
              text: 'Продажа имущества'
            },
            {
              link: `/interbank-lending?type=${3}`,
              name: 'interbank-lending',
              text: 'Межбанковское кредитование'
            },
            {
              link: `/services?type=${3}`,
              name: 'services',
              text: 'Сервисы и услуги'
            },
          ]
        },
        {
          id: 4,
          link: `/about?type=${4}`,
          text: 'О нас',
          child: [
            {
              link: `/about-bank?type=${4}`,
              name: 'about-bank',
              text: 'О банке'
            },
            {
              link: `/documents?type=${4}`,
              name: 'documents',
              text: 'Документы'
            },
            {
              link: `/history?type=${4}`,
              name: 'history',
              text: 'История банка'
            },
            {
              link: `/press-center?type=${4}`,
              name: 'press-center',
              text: 'Пресс-центр'
            },
            {
              link: `/head?type=${4}`,
              name: 'head',
              text: 'Руководство'
            },
            {
              link: `/structure?type=${4}`,
              name: 'structure',
              text: 'Структура'
            },
            {
              link: `/gallery?type=${4}`,
              name: 'gallery',
              text: 'Галерея'
            },
            {
              link: `/addresses?type=${4}`,
              name: 'addresses',
              text: 'Адреса'
            }
          ]
        },
      ]
    },
    {
      id: 3,
      name: 'Объявления',
      classWidth: 'w-[19%]',
      showChild: false,
      child: [
        {
          text: 'Вакансии',
          link: '/vacancy'
        },
        {
          text: 'Тендеры',
          link: '/tenders'
        },
        {
          text: 'Продажа имущества',
          link: '/sale'
        },
        {
          text: 'Новости',
          link: '/news'
        },
      ],
    },
    {
      id: 4,
      name: 'Подпишитесь на нашу рассылку',
      classWidth: 'w-[27%]',
      child: 'Подписавшись  на нашу новостную рассылку, Вам будут приходить новости  еженедельно.'
    },
  ]
}
