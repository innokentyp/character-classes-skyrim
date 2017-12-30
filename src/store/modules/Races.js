export default {
  namespaced: true,
  state: {
    all: [
      {
        name: 'Altmer',
        description: 'High Elf',
        origin: 'Summerset Isles'
      },
      {
        name: 'Argonian',
        description: null,
        origin: 'Black Marsh'
      },
      {
        name: 'Bosmer',
        description: 'Wood Elf',
        origin: 'Valenwood'
      }
    ]
  },
  getters: {
    all (state) {
      return [...state.all]
    }
  }
}
