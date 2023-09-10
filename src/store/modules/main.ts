import { defineStore } from 'pinia'

export const useMainStore = defineStore('manStore', {
  state: () => ({
    isInChapter: false,
  }),
  actions: {
    setChapterStatus(status: boolean) {
      this.isInChapter = status
    },
  },
})
