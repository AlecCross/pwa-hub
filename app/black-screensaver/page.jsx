// pages/black-screensaver-pwa.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const AmoledSaverPage = () => {
  const audioExtractorData = {
    name: 'Amoled Saver',
    icon: 'https://amoled-saver.vercel.app/icon-512.webp',
    description: 'Застосунок для зеежен вашго аоед дсплею золи вбн включениж',
    screenshots: [
      'https://amoled-saver.vercel.app/screenshot-phone-1.webp',
      'https://amoled-saver.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://amoled-saver.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default AmoledSaverPage;
