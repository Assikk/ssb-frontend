<template>
  <section class="px-6 xl:px-0">
    <div class="flex flex-col gap-6 max-w-[846px] mx-auto pt-6">
      <h1 class="text-black-ssb font-medium text-2xl-1">
        Специалист по информационной безопасности 2
      </h1>
      <div class="flex items-center gap-10">
        <div>
          <h2 class="text-black-ssb font-medium text-base-2 mb-2">
            Крайний срок подачи анкет
          </h2>
          <p class="text-gray text-sm-1">
            20.04.2021 16:00:00
          </p>
        </div>
        <div>
          <h2 class="text-black-ssb font-medium text-base-2 mb-2">
            Регион
          </h2>
          <p class="text-gray text-sm-1">
            г. Худжанд, Головной офис
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-black-ssb font-medium text-base-2 mb-2">
          Основные обязанности:
        </h2>
        <ul class="flex flex-col gap-2 ml-6">
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-black-ssb font-medium text-base-2 mb-2">
          Требования
        </h2>
        <ul class="flex flex-col gap-2 ml-6">
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-black-ssb font-medium text-base-2 mb-2">
          Условия
        </h2>
        <ul class="flex flex-col gap-2 ml-6">
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
          <li class="text-sm-1 text-gray list-disc">
            В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов,
          </li>
        </ul>
      </div>
      <div class="text-right">
        <Button :primary="true" @click="openApplication">
          Подать заявку
        </Button>
      </div>
    </div>
  </section>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'SingleVacancy',
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplicationVacancy',
    }),
    openApplication() {
      let payload = {
        status: true,
        title: 'Специалист по информационной безопасности 3'
      }
      this.changeApplication(payload)
    }
  }
}
</script>
