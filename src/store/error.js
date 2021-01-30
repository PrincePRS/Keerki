export default {
    namespaced: true,
    state: {
      validations: 200
    },
    mutations: {
      setValidationError(state, error) {
        state.validations = error;
      }
    }
  }