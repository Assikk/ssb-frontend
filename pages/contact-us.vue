<template>
  <section>
    <Banner :banner="banner"/>
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="my-20">
        <h2 class="font-medium text-2xl-1 text-black-ssb text-center mb-4">
          Позвоните нам
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardContact v-for="contact in contacts" :key="contact.id" :contact="contact"/>
        </div>
      </div>
    </div>
    <div class="py-10 bg-background">
      <div class="px-6 lg:px-0">
        <ApplicationContactUs/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      banner: {
        name: 'Как связаться с банком',
        description: 'Удобное надежное и безопасное место для хранения ценностей',
        img: {
          src: '/image/ssb.webp',
          alt: 'SSB Logo'
        }
      },
      contacts: [
        {
          id: 1,
          application: 'В мобильном приложении ССБ',
          description: 'Зайдите в «Профиль» → «Связь с банком» → «Звонок в банк»'
        },
        {
          id: 2,
          mobile: '+992 (44) 600 15 20',
          description: 'Бесплатный звонок доступен на территории Таджикистана'
        },
        {
          id: 3,
          mobile: '(+992) 630 51 08',
          description: 'Стоимость звонка зависит от тарифа вашего оператора связи'
        },
      ]
    }
  }
}
</script>
