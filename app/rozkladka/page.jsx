// pages/rozkladka.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const RozkladkaRozkladka = () => {
  const audioExtractorData = {
    name: 'Rozkladka',
    icon: 'apps-icons/rozkladka/icon-512.webp',
    description: 'Якщо надрукував текст не на тій розкладці',
    screenshots: [
      '/apps-icons/default-pwa-icon/icon-512.webp',
      '/apps-icons/default-pwa-icon/icon-512.webp',
    ],
    link: 'https://rozkladka.vercel.app',
  };

  return <AppDetailsTemplate app={audioExtractorData} />;
};

export default RozkladkaRozkladka;
