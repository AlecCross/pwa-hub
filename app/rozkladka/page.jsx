// pages/rozkladka.jsx
import React from 'react';
import AppDetailsTemplate from '../../components/AppDetailsTemplate';

const RozkladkaRozkladka = () => {
  const Data = {
    name: 'Rozkladka',
    icon: 'https://rozkladka.vercel.app/icons/icon-512.webp',
    iconLocal: '/apps-icons/rozkladka/icon-512.webp',
    description: 'Якщо надрукував текст не на тій розкладці',
    screenshots: [
      'https://rozkladka.vercel.app/screenshot-phone-1.webp',
      'https://rozkladka.vercel.app/screenshot-desktop-1.webp',
    ],
    link: 'https://rozkladka.vercel.app',
  };

  return <AppDetailsTemplate app={Data} />;
};

export default RozkladkaRozkladka;
