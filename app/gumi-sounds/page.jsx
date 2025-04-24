// pages/gamepad-est.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const GumiSoundsPage = () => {
  const audioExtractorData = {
    name: 'Gumi Sounds',
    icon: '/apps-icons/gumi-sounds/icon-512-512.webp',
    description: 'Прикольні звуки на повідомлення, від папуги Gumi',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://gamepad-test.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default GumiSoundsPage;
