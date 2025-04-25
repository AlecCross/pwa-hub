"use client"

import React from 'react';
import AppCard from '../components/AppCard';
import styles from './Home.module.css'; // Імпортуємо стилі з Home.module.css

const apps = [
    {
        name: 'Розкладка',
        link: 'https://rozkladka.vercel.app/',
        icon: '/apps-icons/rozkladka/icon-512.webp',
        path: 'rozkladka',
        codeLink: 'https://github.com/AlecCross/rozkladka',
    },
    {
        name: 'Img2Text',
        link: 'https://img2text-liard.vercel.app/',
        icon: '/apps-icons/img2text/icon-512.webp',
        path: 'img2text',
        codeLink: 'https://github.com/AlecCross/img2text',
    },
    {
        name: 'Next PWA Icons',
        link: 'https://next-pwa-icons.vercel.app/',
        icon: '/apps-icons/icons-for-pwa-webp/icon-512.webp',
        path: 'icons-for-pwa',
        codeLink: 'https://github.com/AlecCross/next-pwa-icons',
    },
    {
        name: 'TxtDiff',
        link: 'https://txtdiff.vercel.app/',
        icon: '/apps-icons/txtdiff-icons/icon-512.webp',
        path: 'txtdiff',
        codeLink: 'https://github.com/AlecCross/txtdiff',
    },
    {
        name: 'PWA Player',
        link: 'https://pwa-player.vercel.app/',
        icon: '/apps-icons/pwa-player/icon-512.webp',
        path: 'pwa-player',
        codeLink: 'https://github.com/AlecCross/pwa-player',
    },
    {
        name: 'Next Stopwatch',
        link: 'https://next-stopwatch.vercel.app/',
        icon: '/apps-icons/stopwatch/icon-512.webp',
        path: 'stopwatch',
        codeLink: 'https://github.com/AlecCross/next-stopwatch',
    },
    {
        name: 'Next Audio Extractor',
        link: 'https://next-audio-extractor.vercel.app/',
        icon: '/apps-icons/audio-extractor-pwa-icons/icon-512.webp',
        path: 'audio-extractor',
        codeLink: 'https://github.com/AlecCross/next-audio-extractor',
    },
    {
        name: 'Amoled Saver',
        link: 'https://amoled-saver.vercel.app/',
        icon: '/apps-icons/black-screensaver-pwa-icons/icon-512.webp',
        path: 'black-screensaver',
        codeLink: 'https://github.com/AlecCross/amoled-saver',
    },
    {
        name: 'Next FFmpeg',
        link: 'https://next-ffmpeg.vercel.app',
        icon: '/apps-icons/ffmpeg/icon-512x512.png',
        path: 'ffmpeg',
        codeLink: 'https://github.com/AlecCross/next-ffmpeg',
    },
    {
        name: 'RGB Wall',
        link: 'https://rgb-wall.vercel.app',
        icon: '/apps-icons/rgb-wall/icon-512.webp',
        path: 'rgb-wall',
        codeLink: 'https://github.com/AlecCross/rgb-wall',
    },
    {
        name: 'Gumi-sounds',
        link: 'https://gumi-sounds.vercel.app',
        icon: '/apps-icons/gumi-sounds/icon-512-512.webp',
        path: 'gumi-sounds',
        codeLink: 'https://github.com/AlecCross/gumi-sounds',
    },
    {
        name: 'Gamepad Test',
        link: 'https://gamepad-test.vercel.app',
        icon: '/apps-icons/gamepad-test/icon-512x512.webp',
        path: 'gamepad-test',
        codeLink: 'https://github.com/AlecCross/gamepad-test',
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Мій PWA-хаб</h1>
            <div className={styles.grid}>
                {apps.map((app) => (
                    <AppCard key={app.link} app={app} />
                ))}
            </div>
        </div>
    );
}
