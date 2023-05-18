export default {
  onlineBanking: 'Онлайн Бонкинг',
  search: 'Ҷустуҷӯ',
  searchResult: 'Натиҷаҳои ҷустуҷӯ',
  subscribe: 'Обуна шудан',
  yourAddress: 'Суроғаи шумо',
  credits: 'Қарзҳо',
  deposits: 'Амонатҳо',
  transfers: 'Интиқоли маблағҳо',
  headerListPage: [
    {
      id: 1,
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Ба шахсони воқеӣ',
      mobileText: 'Воқеӣ',
      child: [
        {
          link: `/deposits?type=${1}`,
          name: 'deposits',
          text: 'Амонатҳо'
        },
        {
          link: `/credits?type=${1}`,
          name: 'credits',
          text: 'Қарзҳо'
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Интиқоли маблағҳо'
        },
        {
          link: `/cards?type=${1}`,
          name: 'cards',
          text: 'Кортҳо'
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Хизматрасонии хазинавӣ'
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Амалиётҳои сейфӣ'
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
      svg: '#twoPerson',
      text: 'Ба шахсони ҳуқуқӣ',
      mobileText: 'Ҳуқуқӣ',
      child: [
        {
          link: `/deposits?type=${2}`,
          name: 'deposits',
          text: 'Амонатҳо'
        },
        {
          link: `/credits?type=${2}`,
          name: 'credits',
          text: 'Қарзҳо'
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Хизматрасонии хазинавӣ'
        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Хизматрасониҳо'
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
      svg: '#dollar',
      text: 'Ба ташкилотҳои молиявӣ',
      mobileText: 'Таш. молияви',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Мукотибот'
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Фурӯши амвол'
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Қарзҳои байнибонкӣ'
        },
        {
          link: `/services?type=${3}`,
          name: 'services',
          text: 'Хизматрасониҳо'
        },
      ]
    },
    {
      id: 4,
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'Дар бораи мо',
      mobileText: 'Дар бораи мо',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'Дар бораи бонк'
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Ҳуҷҷатҳо'
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: 'Таърихи бонк'
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Маркази матбуот'
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Роҳбарият'
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Сохтор'
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Галерения'
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Суроғаҳо'
        }
      ]
    },
  ],
  footer: [
    {
      id: 1,
      name: 'Бонк',
      classWidth: 'w-[27%]'
    },
    {
      id: 2,
      name: 'Хизматрасониҳо',
      classWidth: 'w-[27%]',
      showChild: false,
      child: [
        {
          id: 1,
          link: `/?type=${1}`,
          text: 'Ба шахсони воқеӣ',
          child: [
            {
              link: `/deposits?type=${1}`,
              name: 'deposits',
              text: 'Амонатҳо'
            },
            {
              link: `/credits?type=${1}`,
              name: 'credits',
              text: 'Қарзҳо'
            },
            {
              link: `/transfers?type=${1}`,
              name: 'transfers',
              text: 'Интиқоли маблағҳо'
            },
            {
              link: `/cards?type=${1}`,
              name: 'cards',
              text: 'Кортҳо'
            },
            {
              link: `/rko?type=${1}`,
              name: 'rko',
              text: 'Хизматрасонии хазинавӣ'
            },
            {
              link: `/safe-operations?type=${1}`,
              name: 'safe-operations',
              text: 'Амалиётҳои сейфӣ'
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
          text: 'Ба шахсони ҳуқуқӣ',
          child: [
            {
              link: `/deposits?type=${2}`,
              name: 'deposits',
              text: 'Амонатҳо'
            },
            {
              link: `/credits?type=${2}`,
              name: 'credits',
              text: 'Қарзҳо'
            },
            {
              link: `/rko?type=${2}`,
              name: 'rko',
              text: 'Хизматрасонии хазинавӣ'
            },
            {
              link: `/services?type=${2}`,
              name: 'services',
              text: 'Хизматрасониҳо'
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
          text: 'Ба ташкилотҳои молиявӣ',
          child: [
            {
              link: `/correspondence?type=${3}`,
              name: 'correspondence',
              text: 'Мукотибот'
            },
            {
              link: `/sale?type=${3}`,
              name: 'sale',
              text: 'Фурӯши амвол'
            },
            {
              link: `/interbank-lending?type=${3}`,
              name: 'interbank-lending',
              text: 'Қарзҳои байнибонкӣ'
            },
            {
              link: `/services?type=${3}`,
              name: 'services',
              text: 'Хизматрасониҳо'
            },
          ]
        },
        {
          id: 4,
          link: `/about?type=${4}`,
          text: 'Дар бораи мо',
          child: [
            {
              link: `/about-bank?type=${4}`,
              name: 'about-bank',
              text: 'Дар бораи бонк'
            },
            {
              link: `/documents?type=${4}`,
              name: 'documents',
              text: 'Ҳуҷҷатҳо'
            },
            {
              link: `/history?type=${4}`,
              name: 'history',
              text: 'Таърихи бонк'
            },
            {
              link: `/press-center?type=${4}`,
              name: 'press-center',
              text: 'Маркази матбуот'
            },
            {
              link: `/head?type=${4}`,
              name: 'head',
              text: 'Роҳбарият'
            },
            {
              link: `/structure?type=${4}`,
              name: 'structure',
              text: 'Сохтор'
            },
            {
              link: `/gallery?type=${4}`,
              name: 'gallery',
              text: 'Галерения'
            },
            {
              link: `/addresses?type=${4}`,
              name: 'addresses',
              text: 'Суроғаҳо'
            }
          ]
        },
      ]
    },
    {
      id: 3,
      name: 'Эълонҳо',
      classWidth: 'w-[19%]',
      showChild: false,
      child: [
        {
          text: 'Вазифаҳои холӣ',
          link: '/vacancy'
        },
        {
          text: 'Тендерҳо',
          link: '/tenders'
        },
        {
          text: 'Фурӯши амвол',
          link: '/sale'
        },
        {
          text: 'Хабарҳо',
          link: '/news'
        },
      ],
    },
    {
      id: 4,
      name: 'Ба мо обуна шавед',
      classWidth: 'w-[27%]',
      child: 'Подписавшись  на нашу новостную рассылку, Вам будут приходить новости  еженедельно.'
    },
  ]
}
