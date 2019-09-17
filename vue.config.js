module.exports = {
  // devServer: {
  //   host: 'my.page.com',
  //   port: 80,
  //   https: false
  // },
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/scss/abstracts/_variables.scss";
        @import "@/assets/scss/abstracts/_mixins.scss";
        @import "@/assets/scss/abstracts/_functions.scss";
        `,
      },
    },
  },
};
