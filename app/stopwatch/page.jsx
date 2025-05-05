// pages/stopwatch.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const StopwatchPage = () => {
  const audioExtractorData = {
    name: 'Stopwatch',
    icon: 'https://next-stopwatch.vercel.app/icons/icon-512.webp',
    description: 'Найпростіший секундомір',
    screenshots: [
      'https://next-stopwatch.vercel.app/screenshot-phone-1.webp',
      'https://next-stopwatch.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://next-stopwatch.vercel.app/',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default StopwatchPage;
