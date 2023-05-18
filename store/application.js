export const state = () => ({
  isApplication: false,
  isApplicationVacancy: false,
  activeVacancy: null,
  active: {},
  list: []
})

export const mutations = {
  changeApplication(state, payload) {
    state.active = {}
    state.isApplication = payload
  },
  changeApplicationVacancy(state, payload) {
    state.isApplicationVacancy = payload.status
    state.activeVacancy = payload.title
  },
  changeProduct(state, payload) {
    state.active = payload
  },
  openList(state, payload) {
    state.list = payload
  }
}
