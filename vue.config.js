module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/scss/abstracts/_variables.scss";
        @import "@/assets/scss/abstracts/_mixins.scss";
        @import "@/assets/scss/abstracts/_functions.scss";
        `
      }
    }
  },
};
