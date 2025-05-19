// pages/pwa-player.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const PWArchiver = () => {
  const Data = {
    name: 'PWArchiver',
    icon: 'https://pwarchiver.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/pwarchiver/icon-512.webp',
    description: 'Zip архіватор',
    screenshots: [
      '/apps-icons/pwarchiver/screenshot-phone-1.webp',
      '/apps-icons/pwarchiver/screenshot-desktop-1.webp',
    ],
    link: 'https://pwarchiver.vercel.app',
    codeLink: 'https://github.com/AlecCross/pwarchiver',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default PWArchiver;
