// pages/img2text.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const Image2TextPage = () => {
  const audioExtractorData = {
    name: 'Image to Text',
    icon: 'apps-icons/img2text/icon-512.webp',
    description: 'Копіює текст з зображення',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://img2text.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default Image2TextPage;
