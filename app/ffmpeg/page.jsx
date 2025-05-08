// pages/ffmpeg-pwa.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const AmoledSaverPage = () => {
  const Data = {
    name: 'Stickers Converter',
    icon: 'apps-icons/ffmpeg/icon-512x512.png',
    iconLocal: '/apps-icons/ffmpeg/icon-512x512.png',
    description: 'Конвертер відео стікерів для Telegram',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://next-ffmpeg.vercel.app',
    codeLink: 'https://github.com/AlecCross/next-ffmpeg',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default AmoledSaverPage;
