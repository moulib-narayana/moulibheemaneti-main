export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.config.errorHandler = (error) => {

    console.error("Global error handler caught: ", error);

  }

})
