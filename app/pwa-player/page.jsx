// pages/pwa-player.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const PWAPlayerPage = () => {
  const Data = {
    name: 'PWA Player',
    icon: 'https://pwa-player.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/pwa-player/icon-512.webp',
    description: 'Плеєр папок',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://pwa-player.vercel.app',
    codeLink: 'https://github.com/AlecCross/pwa-player',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default PWAPlayerPage;
