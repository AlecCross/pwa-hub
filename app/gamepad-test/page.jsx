// pages/apps-icons.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const AmoledSaverPage = () => {
  const audioExtractorData = {
    name: 'Gamepad Test',
    icon: 'apps-icons/gamepad-test/icon-512x512.webp',
    description: 'Тест працездатності геймпаду',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://gamepad-test.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default AmoledSaverPage;
