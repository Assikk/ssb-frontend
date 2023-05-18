<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="my-6">
      Кредитные карты
    </Titles>
    <div class="flex flex-col gap-6 mb-6">
      <CardProduct v-for="card in cards" :key="card.id"
      :card="card"
      :list="cards"/>
    </div>
    <Pagination/>
  </section>
</template>
<script>
export default {
  name: 'Cards',
  data() {
    return {
      cards: [
        {
          id: 1,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 1',
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
        {
          id: 2,
          img: {
            src: '/image/bag.png',
            alt: 'Bag'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 2',
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
        {
          id: 3,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 3',
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
        {
          id: 4,
          img: {
            src: '/image/bag.png',
            alt: 'Bag'
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
        {
          id: 5,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 5',
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
        {
          id: 6,
          img: {
            src: '/image/bag.png',
            alt: 'Bag'
          },
          type: 'cards',
          name: 'Кредитная карта “100 дней” 6',
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
            {
              id: 1,
              title: 'до 70%',
              description: 'кэшбек на покупки у наших партнеров'
            },
          ]
        },
      ]
    }
  }
}
</script>
