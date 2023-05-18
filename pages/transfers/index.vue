<template>
  <section class="main__container px-6 xl:px-0">
    <h1 class="font-medium text-3xl-1 my-6">
      {{$t('transfers')}}
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <CardTransfer v-for="transfer in transfers" :key="transfer.id"
    :transfer="transfer"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Transfers',
  data() {
    return {
      transfers: [
        {
          id: 1,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 1',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 2,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 2',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 3,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 3',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 4,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 4',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 5,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 5',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 6,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 6',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },
        {
          id: 7,
          img: {
            src: '/image/contact.webp',
            alt: 'Contact',
          },
          type: 'transfers',
            title: 'Contact 7',
            description: 'Интеллект, по определению, как правило подчеркивает даосизм. По определению, подчеркивает даосизм.'
        },

      ]
    }
  }
}
</script>
