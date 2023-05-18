<template>
  <section>
    <!-- Start block Banner -->
    <Banner :banner="banner"/>
    <!-- End block Banner -->
    <div class="main__container px-4 xl:px-0">
      <!-- Start block Advantages -->
      <BlocksAdvantagesOutlined class="mt-20" :advantages="advantages"/>
      <!-- End block Advantages -->
      <!-- Start block Banner -->
      <BannerOrder :banner="bannerOder" class="mt-[115px] mb-20"/>
      <!-- End block Banner -->
      <!-- Start block Calculator -->
        <!-- Start title Calculator -->
        <Titles class="text-left sm:text-center">
          Ваш доход по вкладу
        </Titles>
        <!-- End title Calculator -->
      </div>
      <div class="main__container sm:px-0 lg:px-4 xl:px-0">
        <CalculatorDeposit class="mt-10 mb-20" :deposit="deposit"/>
        <!-- End block Calculator -->
      </div>
  </section>
</template>
<script>
export default {
  name: 'SinglePageDepositComponent',
  data() {
    return {
      banner: {
        id: 10,
        type: '/deposits',
        name: 'ССБ-счёт',
        description: 'Максимальный доход с первого месяца',
        img: {
          src: '/image/coin.webp',
          alt: 'Coin'
        },
        buttonOpenApplication: {
          text: 'Открыть'
        },
        buttonSinglePage: {
          text: 'Подробнее'
        }
      },
      advantages: [
        {
          id: 1,
          title: 'Высокий доход',
          description: 'До 20% годовых с первого месяца',
          img: {
            src: '/image/advantages/outlined/card-green.svg',
            alt: 'Card Green Icon'
          }
        },
        {
          id: 2,
          title: 'Деньги защищены',
          description: 'Средства застрахованы',
          img: {
            src: '/image/advantages/outlined/card-green.svg',
            alt: 'Card Green Icon'
          }
        },
        {
          id: 3,
          title: 'Пополнение и снятие',
          description: 'Пополнение и снятие со счёта в любое время',
          img: {
            src: '/image/advantages/outlined/wallet-pink.svg',
            alt: 'Wallet Pink Icon'
          }
        },
        {
          id: 4,
          title: 'Валюта',
          description: 'Сомони, доллары и рубли',
          img: {
            src: '/image/advantages/outlined/dollar-blue.svg',
            alt: 'Dollar Blue Icon'
          }
        },
      ],
      bannerOder: {
        background: '#EAEDFA',
        img: {
          src: '/image/bannerOrder/wallet.webp',
          alt: 'Wallet Image'
        },
        title: 'Получите 50 сомони после первого пополнения счета',
        advantages: [
          {
            id: 1,
            text: 'Закажите бесплатную дебетовую ССБ-карту на этой странице'
          },
          {
            id: 2,
            text: 'Получите доставкой или в отделении.'
          },
          {
            id: 3,
            text: 'Сделайте любую покупку и получите 1000 ₽ от ССБ'
          },
        ],
        description: 'В акции можно участвовать, если вы старше 18 лет.'
      },
      deposit: {
        id: 1,
        name: 'Тестовое имя депозита',
        minAmount: 1000,
        maxAmount: 30000,
        activeAmount: 15000,
        minTerm: 2,
        maxTerm: 24,
        activeTerm: 12,
        rate: 13.66
      }
    }
  },
}
</script>
