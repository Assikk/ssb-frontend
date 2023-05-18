export const state = () => ({
  language_id: 1,
})

export const mutations = {
  CHANGE_LANGUAGE(state, payload) {
    state.language_id = payload
  },
}
