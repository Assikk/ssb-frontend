<template>
  <section class="mt-6">
    <div class="flex flex-col gap-10" v-for="block in blocks" :key="block.id" :class="block.id % 2 === 1 ? 'bg-background' : 'bg-transparent'">
      <div class="main__container px-6 xl:px-0">
        <div class="py-10">
          <SubTitle>
            {{block.title}}
          </SubTitle>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <Document v-for="document in block.documents" :key="document.id" :document="document"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'DocumentsPage',
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: 'Информация для банков',
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
        },
        {
          id: 2,
          title: 'Информация для банков',
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
        },
        {
          id: 3,
          title: 'Информация для банков',
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
      ]
    }
  }
}
</script>
