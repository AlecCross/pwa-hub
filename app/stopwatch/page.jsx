// pages/stopwatch.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const StopwatchPage = () => {
  const Data = {
    name: 'Stopwatch',
    icon: 'https://next-stopwatch.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/stopwatch/icon-512.webp',
    description: 'Найпростіший секундомір',
    screenshots: [
      'https://next-stopwatch.vercel.app/screenshot-phone-1.webp',
      'https://next-stopwatch.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://next-stopwatch.vercel.app/',
    codeLink: 'https://github.com/AlecCross/next-stopwatch',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default StopwatchPage;
