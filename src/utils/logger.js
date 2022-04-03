import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: 'pub45c33a9c4a34af5b91df4ddeb4f24d7e',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
  version: '1.0.0',
  useSecureSessionCookie: true,
  trackSessionAcrossSubdomains: true
});

datadogLogs.setLoggerGlobalContext({
  env: 'prod',
  service: 'sample-app-browser'
});

export const logger = {
  debug: (message) => {
    datadogLogs.logger.debug(message);
  },
  info: (message, messageContext = null) => {
    datadogLogs.logger.info(message, messageContext);
  },
  warn: (message) => {
    datadogLogs.logger.warn(message);
  },
  error: (message) => {
    datadogLogs.logger.error(message);
  }
};
