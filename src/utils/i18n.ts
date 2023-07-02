import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en_US, id_ID } from '@/constant/translation';

const resources = {
  en: {
    translation: en_US,
  },
  id: {
    translation: id_ID,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
});

export default i18next;
