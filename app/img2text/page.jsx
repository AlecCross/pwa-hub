// pages/img2text.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const Image2TextPage = () => {
  const Data = {
    name: 'Image to Text',
    icon: 'apps-icons/img2text/icon-512.webp',
    iconLocal: '/apps-icons/img2text/icon-512.webp',
    description: 'Копіює текст з зображення',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://img2text-pwa.vercel.app',
    codeLink: 'https://github.com/AlecCross/img2text',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default Image2TextPage;
