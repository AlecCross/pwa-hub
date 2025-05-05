// pages/icons-for-pwa.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const PWAIconsPage = () => {
  const audioExtractorData = {
    name: 'PWA-icons',
    icon: 'https://next-pwa-icons.vercel.app/icons/icon-512.webp',
    description: 'Дозволяе зробити з одної іконки - декілька, різночо розміру',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://next-pwa-icons.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default PWAIconsPage;
