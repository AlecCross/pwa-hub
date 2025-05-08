// pages/audio-extractor.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const AudioExtractorPage = () => {
  const Data = {
    name: 'Audio Extractor PWA',
    icon: 'apps-icons/audio-extractor-pwa-icons/icon-512.webp',
    iconLocal: '/apps-icons/audio-extractor-pwa-icons/icon-512.webp',
    description: 'Застосунок для вилучення аудіо з відео.',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://next-audio-extractor.vercel.app',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default AudioExtractorPage;
