// pages/gamepad-est.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const GumiSoundsPage = () => {
  const audioExtractorData = {
    name: 'Gumi Sounds',
    icon: 'https://gumi-sounds.vercel.app/icons/icon-512.webp',
    description: 'Прикольні звуки на повідомлення, від папуги Gumi',
    screenshots: [
      'https://gumi-sounds.vercel.app/screenshot-phone-1.webp',
      'https://gumi-sounds.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://gumi-sounds.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default GumiSoundsPage;
