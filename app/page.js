"use client"

import React from 'react';
import AppCard from '../components/AppCard';
import styles from './Home.module.css'; // Імпортуємо стилі з Home.module.css

const apps = [
    {
        name: 'Next Audio Extractor',
        link: 'https://next-audio-extractor.vercel.app/',
        icon: '/apps-icons/audio-extractor-pwa-icons/icon-512.webp',
        iconLocal: '/apps-icons/audio-extractor-pwa-icons/icon-512.webp',
        path: 'audio-extractor',
    },
    {
        name: 'Amoled Saver',
        link: 'https://amoled-saver.vercel.app/',
        icon: 'https://amoled-saver.vercel.app/icon-512.webp',
        iconLocal: '/apps-icons/black-screensaver-pwa-icons/icon-512.webp',
        path: 'black-screensaver',
    },
    {
        name: 'Next FFmpeg',
        link: 'https://next-ffmpeg.vercel.app',
        icon: '/apps-icons/ffmpeg/icon-512x512.png',
        iconLocal: '/apps-icons/ffmpeg/icon-512x512.png',
        path: 'ffmpeg',
    },
    {
        name: 'Gamepad Test',
        link: 'https://gamepad-test.vercel.app',
        icon: '/apps-icons/gamepad-test/icon-512x512.webp',
        iconLocal: '/apps-icons/gamepad-test/icon-512x512.webp',
        path: 'gamepad-test',
    },
    {
        name: 'Gumi-sounds',
        link: 'https://gumi-sounds.vercel.app',
        icon: 'https://gumi-sounds.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/gumi-sounds/icon-512-512.webp',
        path: 'gumi-sounds',
    },
    {
        name: 'Next PWA Icons',
        link: 'https://next-pwa-icons.vercel.app/',
        icon: 'https://next-pwa-icons.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/icons-for-pwa-webp/icon-512.webp',
        path: 'icons-for-pwa',
    },
    {
        name: 'Img2Text',
        link: 'https://img2text-liard.vercel.app/',
        icon: '/apps-icons/img2text/icon-512.webp',
        iconLocal: '/apps-icons/img2text/icon-512.webp',
        path: 'img2text',
    },
    {
        name: 'MusTag',
        link: 'https://mus-tag.vercel.app',
        icon: 'https://mus-tag.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/mus-tag/icon-512.webp',
        path: 'mus-tag',
    },
    {
        name: 'PWA Player',
        link: 'https://pwa-player.vercel.app/',
        icon: 'https://pwa-player.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/pwa-player/icon-512.webp',
        path: 'pwa-player',
    },
    {
        name: 'RGB Wall',
        link: 'https://rgb-wall.vercel.app',
        icon: '/apps-icons/rgb-wall/icon-512.webp',
        iconLocal: '/apps-icons/rgb-wall/icon-512.webp',
        path: 'rgb-wall',
    },
    {
        name: 'Розкладка',
        link: 'https://rozkladka.vercel.app/',
        icon: 'https://rozkladka.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/rozkladka/icon-512.webp',
        path: 'rozkladka',
    },
    {
        name: 'Next Stopwatch',
        link: 'https://next-stopwatch.vercel.app/',
        icon: 'https://next-stopwatch.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/stopwatch/icon-512.webp',
        path: 'stopwatch',
    },
    {
        name: 'TxtDiff',
        link: 'https://txtdiff.vercel.app/',
        icon: 'https://txtdiff.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/txtdiff-icons/icon-512.webp',
        path: 'txtdiff',
    },
    {
        name: 'PWArchiver',
        link: 'https://pwarchiver.vercel.app/',
        icon: 'https://pwarchiver.vercel.app/icons/icon-512.webp',
        iconLocal: '/apps-icons/pwarchiver/icon-512.webp',
        path: 'pwarchiver',
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
