import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App';
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import {BrowserRouter} from 'react-router-dom';


import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <I18nextProvider i18n= {i18n}>
          <App />
      </I18nextProvider>
    </BrowserRouter>

)
