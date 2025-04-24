// pages/stopwatch.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const StopwatchPage = () => {
  const audioExtractorData = {
    name: 'Stopwatch',
    icon: 'apps-icons/stopwatch/icon-512.webp',
    description: 'Найпростіший секундомір',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://stopwatch.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default StopwatchPage;
