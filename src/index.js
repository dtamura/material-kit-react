// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { datadogRum } from '@datadog/browser-rum';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

datadogRum.init({
  applicationId: 'c9a0577e-d95e-49ff-81bd-26b998c466fb',
  clientToken: 'pub45c33a9c4a34af5b91df4ddeb4f24d7e',
  site: 'datadoghq.com',
  service: 'sample',
  env: 'prod',
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
  useSecureSessionCookie: true,
  trackSessionAcrossSubdomains: true,
  allowedTracingOrigins: [/https:\/\/.*\.gcp\.dtamura\.com/]
});
