<template>
  <section>
    <Banner
    :banner="banner"/>
    <div class="max-w-[846px] mx-auto mt-[80px] px-6 lg:px-0">
      <h2 class="font-medium text-2xl-1 mb-2">
        Надежное место
      </h2>
      <p class="text-base mb-8">
        Согласитесь, хранить ценности в матраце, под подушкой или даже в тайнике, спрятанном в гостиной за пейзажем, — это несколько старомодно. ССБ⁠ предлагает вам удобное, надежное и безопасное место для хранения ценностей — индивидуальный банковский сейф.
В индивидуальном сейфе можно хранить деньги, ювелирные изделия, документы, ценные бумаги, произведения искусства — словом, все, чем вы дорожите, и что вам, возможно, хотелось бы скрыть от посторонних глаз.
      </p>
      <h2 class="font-medium text-2xl-1 mb-2">
        Перечень документов, для открытия расчетных счетов юр. лиц.
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <Document v-for="document in documents" :key="document.id" :document="document"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Rko',
  data() {
    return {
      banner: {
        name: 'Расчетно кассовое обслуживание',
        description: 'Удобное надежное и безопасное место для хранения ценностей',
        img: {
          src: '/image/rko.webp',
          alt: 'Rko'
        },
        buttonOpenApplication: {
          text: 'Оставить заявку'
        }
      },
      documents: [
        {
          id: 1,
          name: 'Органический трафик продолжает удивлять 1',
          size: '389,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 2,
          name: 'Органический трафик продолжает удивлять 2',
          size: '329,4 Кб',
          link: '/documents/test.docx',
          type: 'doc'
        },
        {
          id: 3,
          name: 'Органический трафик продолжает удивлять 3',
          size: '489,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 4,
          name: 'Органический трафик продолжает удивлять 4',
          size: '384,4 Кб',
          link: '/documents/test.docx',
          type: 'doc'
        },
        {
          id: 5,
          name: 'Органический трафик продолжает удивлять 5',
          size: '3890,4 Кб',
          link: '/documents/test.docx',
          type: 'pdf'
        },
        {
          id: 6,
          name: 'Органический трафик продолжает удивлять 6',
          size: '379,4 Кб',
          link: '/documents/test.docx',
          type: 'doc'
        },
      ]
    }
  }
}
</script>
