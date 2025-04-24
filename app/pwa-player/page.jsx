// pages/pwa-player.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const PWAPlayerPage = () => {
  const audioExtractorData = {
    name: 'PWA Player',
    icon: 'apps-icons/pwa-player/icon-512.webp',
    description: 'Плеєр папок',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://pwa-player.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default PWAPlayerPage;
