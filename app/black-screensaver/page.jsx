// pages/black-screensaver-pwa.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const AmoledSaverPage = () => {
  const audioExtractorData = {
    name: 'Amoled Saver',
    icon: 'apps-icons/black-screensaver-pwa-icons/icon-512.webp',
    description: 'Застосунок для зеежен вашго аоед дсплею золи вбн включениж',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://amoled-saver.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default AmoledSaverPage;
