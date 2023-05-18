export default {
  onlineBanking: 'Online banking',
  search: 'Search',
  searchResult: 'Search results',
  subscribe: 'Subscribe',
  yourAddress: 'Your address',
  credits: 'Loans',
  deposits: 'Deposits',
  transfers: 'Money transfers',
  headerListPage: [
    {
      id: 1,
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Individuals',
      mobileText: 'Inidividuals',
      child: [
        {
          link: `/deposits?type=${1}`,
          name: 'deposits',
          text: 'Deposits'
        },
        {
          link: `/credits?type=${1}`,
          name: 'credits',
          text: 'Loans'
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Money transfers'
        },
        {
          link: `/cards?type=${1}`,
          name: 'cards',
          text: 'Cards'
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Settlement and cash services'
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Safe operations'
        },
        {
          link: '/',
          text: 'SSB Mobile'
        },
      ]
    },
    {
      id: 2,
      link: `/legal-person?type=${2}`,
      svg: '#twoPerson',
      text: 'Legal entities',
      mobileText: 'Legal ent.',
      child: [
        {
          link: `/deposits?type=${2}`,
          name: 'deposits',
          text: 'Deposits'
        },
        {
          link: `/credits?type=${2}`,
          name: 'credits',
          text: 'Loans'
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Settlement and cash services'
        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Services'
        },
        {
          link: `/SSB-mobile?type=${2}`,
          name: 'SSB-mobile',
          text: 'SSB Mobile'
        },
      ]
    },
    {
      id: 3,
      link: `/financial-organization?type=${3}`,
      svg: '#dollar',
      text: 'Financial institutions',
      mobileText: 'Fin institutions',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Correspondence'
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Property sale'
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Interbank lending'
        },
        {
          link: `/services?type=${3}`,
          name: 'services',
          text: 'Services'
        },
      ]
    },
    {
      id: 4,
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'About us',
      mobileText: 'About us',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'About Bank '
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Documents'
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: "Bank's history"
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Press center'
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Management Board'
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Structure'
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Gallery'
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Addresses'
        }
      ]
    },
  ],
  footer: [
    {
      id: 1,
      name: 'Bank',
      classWidth: 'w-[27%]'
    },
    {
      id: 2,
      name: 'Services',
      classWidth: 'w-[27%]',
      showChild: false,
      child: [
        {
          id: 1,
          link: `/?type=${1}`,
          text: 'Inidividuals',
          child: [
            {
              link: `/deposits?type=${1}`,
              name: 'deposits',
              text: 'Deposits'
            },
            {
              link: `/credits?type=${1}`,
              name: 'credits',
              text: 'Loans'
            },
            {
              link: `/transfers?type=${1}`,
              name: 'transfers',
              text: 'Money transfers'
            },
            {
              link: `/cards?type=${1}`,
              name: 'cards',
              text: 'Cards'
            },
            {
              link: `/rko?type=${1}`,
              name: 'rko',
              text: 'Settlement and cash services'
            },
            {
              link: `/safe-operations?type=${1}`,
              name: 'safe-operations',
              text: 'Safe operations'
            },
            {
              link: '/',
              text: 'SSB Mobile'
            },
          ]
        },
        {
          id: 2,
          link: `/legal-person?type=${2}`,
          text: 'Legal entities',
          child: [
            {
              link: `/deposits?type=${2}`,
              name: 'deposits',
              text: 'Deposits'
            },
            {
              link: `/credits?type=${2}`,
              name: 'credits',
              text: 'Loans'
            },
            {
              link: `/rko?type=${2}`,
              name: 'rko',
              text: 'Settlement and cash services'
            },
            {
              link: `/services?type=${2}`,
              name: 'services',
              text: 'Services'
            },
            {
              link: `/SSB-mobile?type=${2}`,
              name: 'SSB-mobile',
              text: 'SSB Mobile'
            },
          ]
        },
        {
          id: 3,
          link: `/financial-organization?type=${3}`,
          text: 'Financial institutions',
          child: [
            {
              link: `/correspondence?type=${3}`,
              name: 'correspondence',
              text: 'Correspondence'
            },
            {
              link: `/sale?type=${3}`,
              name: 'sale',
              text: 'Property sale'
            },
            {
              link: `/interbank-lending?type=${3}`,
              name: 'interbank-lending',
              text: 'Interbank lending'
            },
            {
              link: `/services?type=${3}`,
              name: 'services',
              text: 'Services'
            },
          ]
        },
        {
          id: 4,
          link: `/about?type=${4}`,
          text: 'About us',
          child: [
            {
              link: `/about-bank?type=${4}`,
              name: 'about-bank',
              text: 'About Bank '
            },
            {
              link: `/documents?type=${4}`,
              name: 'documents',
              text: 'Documents'
            },
            {
              link: `/history?type=${4}`,
              name: 'history',
              text: "Bank's history"
            },
            {
              link: `/press-center?type=${4}`,
              name: 'press-center',
              text: 'Press center'
            },
            {
              link: `/head?type=${4}`,
              name: 'head',
              text: 'Management Board'
            },
            {
              link: `/structure?type=${4}`,
              name: 'structure',
              text: 'Structure'
            },
            {
              link: `/gallery?type=${4}`,
              name: 'gallery',
              text: 'Gallery'
            },
            {
              link: `/addresses?type=${4}`,
              name: 'addresses',
              text: 'Addresses'
            }
          ]
        },
      ]
    },
    {
      id: 3,
      name: 'Announcements',
      classWidth: 'w-[19%]',
      showChild: false,
      child: [
        {
          text: 'Vacancies',
          link: '/vacancy'
        },
        {
          text: 'Tenders',
          link: '/tenders'
        },
        {
          text: 'Property sale',
          link: '/sale'
        },
        {
          text: 'News',
          link: '/news'
        },
      ],
    },
    {
      id: 4,
      name: 'Subscribe to our newsletter',
      classWidth: 'w-[27%]',
      child: 'Подписавшись  на нашу новостную рассылку, Вам будут приходить новости  еженедельно.'
    },
  ]
}
