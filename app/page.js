"use client"

import styled from 'styled-components';
import AppCard from '../components/AppCard';

const Container = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5 колонок в рядку
  gap: 1rem;
`;

const AppIcon = styled.img`
  width: 250px; // Фіксований розмір зображення
  height: 250px; // Фіксований розмір зображення
  object-fit: contain; // Зберігає пропорції зображення
  margin-bottom: 0.5rem;
`;


const apps = [
  {
    name: 'Розкладка',
    description: 'Перетворювач розкладки клавіатури',
    link: 'https://rozkladka.vercel.app/',
    icon: '/apps-icons/Rozkladka/icon-512.webp', 
  },
  {
    name: 'Img2Text Liard',
    description: 'Розпізнавання тексту з зображень',
    link: 'https://img2text-liard.vercel.app/',
    icon: '/apps-icons/img2text/icon-512.webp', 
  },
  {
    name: 'Next PWA Icons',
    description: 'Генератор іконок для PWA',
    link: 'https://next-pwa-icons.vercel.app/',
    icon: '/apps-icons/icons for PWA Webp/icon-512.webp', 
  },
  {
    name: 'TxtDiff',
    description: 'Порівняння текстових файлів',
    link: 'https://txtdiff.vercel.app/',
    icon: '/apps-icons/txtdiff-icons/icon-512.webp', 
  },
  {
    name: 'PWA Player',
    description: 'Аудіо- та відеопрогравач',
    link: 'https://pwa-player.vercel.app/',
    icon: '/apps-icons/pwa-player/icon-512.webp', 
  },
  {
    name: 'Next Stopwatch',
    description: 'Секундомір та таймер',
    link: 'https://next-stopwatch.vercel.app/',
    icon: '/apps-icons/stopwatch/icon-512.webp', 
  },
  {
    name: 'Next Audio Extractor',
    description: 'Витягнення аудіо з відео',
    link: 'https://next-audio-extractor.vercel.app/',
    icon: '/apps-icons/AudioExtractorPWA-icons/icon-512.webp', 
  },
  {
    name: 'Amoled Saver',
    description: 'Збереження заряду AMOLED-екрану',
    link: 'https://amoled-saver.vercel.app/',
    icon: '/apps-icons/Black Screensaver PWA icons/icon-512.webp', 
  },
  {
    name: 'Next FFmpeg',
    description: 'Інтерфейс для FFmpeg',
    link: 'https://next-ffmpeg.vercel.app',
    icon: '/apps-icons/ffmpeg/icon-512x512.png', 
  },
  {
    name: 'RGB Wall',
    description: 'Create Walpaper',
    link: 'https://rgb-wall.vercel.app',
    icon: '/apps-icons/rgb-wall/icon-512.webp', 
  },
  {
    name: 'Gumi-sounds',
    description: 'funny notification',
    link: 'https://gumi-sounds.vercel.app',
    icon: '/apps-icons/Gumi-sounds/icon-512-512.webp',
  },
];

export default function Home() {
  return (
    <Container>
      <h1>Мій PWA-хаб</h1>
      <Grid>
        {apps.map((app) => (
          <AppCard key={app.link} app={app} />
        ))}
      </Grid>
    </Container>
  );
}
