import { I18nContext } from "@solid-primitives/i18n";
import i18nctx from "./data/i18n";
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found.',
  );
}

render(
  () => (
    <Router>
      <I18nContext.Provider value={i18nctx}>
        <App />
      </I18nContext.Provider>
    </Router>
  ),
  root,
);
