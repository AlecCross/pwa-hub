// pages/gamepad-est.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const GumiSoundsPage = () => {
  const Data = {
    name: 'Gumi Sounds',
    icon: 'https://gumi-sounds.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/gumi-sounds/icon-512-512.webp',
    description: 'Прикольні звуки на повідомлення, від папуги Gumi',
    screenshots: [
      'https://gumi-sounds.vercel.app/screenshot-phone-1.webp',
      'https://gumi-sounds.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://gumi-sounds.vercel.app',
    codeLink: 'https://github.com/AlecCross/gumi-sounds',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default GumiSoundsPage;
