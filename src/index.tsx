import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from './store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// utils i18n
import '@/utils/i18n';

import './index.css';

import App from './App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container!);

root.render(
  <ReduxProvider store={store}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </ReduxProvider>,
);

serviceWorkerRegistration.register();
