// pages/rgb-wall.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const RGBWallPage = () => {
  const Data = {
    name: 'RGB Wall',
    icon: 'apps-icons/rgb-wall/icon-512.webp',
    iconLocal: '/apps-icons/rgb-wall/icon-512.webp',
    description: 'Сторює однотонне RGB зображення на робочий стіл',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://rgb-wall.vercel.app',
    codeLink: 'https://github.com/AlecCross/rgb-wall',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default RGBWallPage;
