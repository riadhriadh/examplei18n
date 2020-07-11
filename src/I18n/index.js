import i18n from "i18next";
const resources = {
    en: {
      translation: {
        "welcome": "Welcome to React and react-i18next"
      }
    },
    fr: {
        translation: {
          "welcome": "Bonjour  React et react-i18next"
        }
      }
  };
  i18n.init({
    resources,
    lng: "en"
  });

  export default i18n;