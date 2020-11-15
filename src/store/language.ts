import Languages from "@/locales";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";

import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

const supportedLanguages = Object.getOwnPropertyNames(Languages);

router.afterEach(async to => {
  const language = to.query.lang;

  if (language && typeof language === "string") {
    await store.dispatch("language/setLanguage", language);
  } else {
    await store.dispatch("language/setLanguage", navigator.languages);
  }
});

@Module({ namespaced: true })
export default class Language extends VuexModule {
  @Mutation
  private async SET_LANGUAGE(language: string | undefined) {
    if (!language) {
      language = "en";
    }

    i18n.locale = language;

    if (router.currentRoute.query.lang !== language) {
      await router.push({ query: { lang: language } });
    }
  }

  /* eslint-disable class-methods-use-this */
  @Action({ commit: "SET_LANGUAGE" })
  public setLanguage(languages: string | string[]) {
    if (typeof languages === "string") {
      return languages;
    }

    return supportedLanguages.find(sl =>
      languages.find((l: string) => (l.split(new RegExp(sl, "gi")).length - 1 > 0 ? sl : null))
    );
  }
}
