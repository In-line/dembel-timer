// vue.config.js
module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'hy',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
