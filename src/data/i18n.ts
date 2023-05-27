import { createI18nContext } from "@solid-primitives/i18n";
import parmas from "./parmas";
const dict = {
  zh: {
    back: "返回",
    about: "关于",
    jump: "跳转",
    jump_to: "即将访问: {{ url }}",
  },
  en: {
    back: "Back",
    about: "About",
    jump: "Jump",
    jump_to: "Just about to visit: {{ url }}",
  },
};
const lang_enabled = ['zh', 'en'];
const getLang = () => {
  let lang = parmas.lang || localStorage.getItem('lang');
  if (lang && lang_enabled.includes(lang)) {
    return lang;
  }
  else {
    lang = navigator.language.substring(0, 2);
    if (lang_enabled.includes(lang)) {
      return lang;
    } else {
      return lang_enabled[0];
    }
  }
};
export default createI18nContext(dict, getLang());