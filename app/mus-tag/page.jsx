// pages/mus-tag.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const MusTagPage = () => {
  const audioExtractorData = {
    name: 'MusTag',
    icon: 'https://mus-tag.vercel.app/icons/icon-512.webp',
    description: 'Зчитує теги з музичних файлів',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://mus-tag.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default MusTagPage;
