export default function ({ $axios, store }) {
  $axios.onError(error => {
    //console.log(error)
    if (error.response.status == 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    return Promise.reject(error)
  }),
  $axios.onRequest (() => {
    //console.log('test')
    store.dispatch('validation/clearErrors')
  })
}
