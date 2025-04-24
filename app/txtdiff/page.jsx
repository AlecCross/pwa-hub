// pages/txtdiff.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const TxtDiffPage = () => {
  const audioExtractorData = {
    name: 'Text Compare',
    icon: 'apps-icons/txtdiff-icons/icon-512.webp',
    description: 'Копіює текст з зображенняі',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://txtdiff.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default TxtDiffPage;
