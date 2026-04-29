const trimTrailingSlash = (value = '') => value.replace(/\/+$/, '');

export const runtimeConfig = {
  blogApiUrl: trimTrailingSlash(process.env.REACT_APP_BLOG_API_URL || ''),
  emailjs: {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
  }
};

export const hasEmailJsConfig = Boolean(
  runtimeConfig.emailjs.serviceId &&
  runtimeConfig.emailjs.templateId &&
  runtimeConfig.emailjs.publicKey
);

export default runtimeConfig;
