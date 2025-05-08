// pages/txtdiff.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const TxtDiffPage = () => {
  const Data = {
    name: 'Text Compare',
    icon: 'https://txtdiff.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/txtdiff-icons/icon-512.webp',
    description: 'Порівнює два тексти',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://txtdiff.vercel.app',
    codeLink: 'https://github.com/AlecCross/txtdiff',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default TxtDiffPage;
