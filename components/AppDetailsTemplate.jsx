"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/AppDetailsTemplate.module.css'; // Імпортуємо стилі

// Іконка "назад" (можете замінити на свій SVG або шрифт-іконку)
const BackIcon = () => <span className={styles.backIcon}>←</span>;

const AppDetailsTemplate = ({ app }) => {
    const [iconLoaded, setIconLoaded] = useState(true); // Стан для відстеження завантаження іконки
    
    const handleIconError = () => {
    setIconLoaded(false); // Встановлюємо стан помилки, якщо завантаження не вдалося
    };

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backButton}>
                <BackIcon /> На головну
            </Link>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    {iconLoaded ? (
                        <img 
                            src={app.icon} 
                            alt={app.name} 
                            className={styles.icon}
                            onError={handleIconError}
                        />
                    ) : (
                        <img 
                            src={app.iconLocal} 
                            alt={app.name} 
                            className={styles.icon} 
                        />
                    )} 
                </div>
                <h2 className={styles.title}>{app.name}</h2>
                <div className={styles.actions}>
                    {app.link && (
                        <Link href={app.link} target="_blank" rel="noopener noreferrer" className={styles.appButton}>
                            Перейти до застосунку
                        </Link>
                    )}
                    {app.codeLink && (
                        <Link href={app.codeLink} target="_blank" rel="noopener noreferrer" className={styles.codeButton}>
                            Код на GitHub
                        </Link>
                    )}
                </div>
            </div>

            {app.screenshots && app.screenshots.length > 0 && (
                <div className={styles.screenshotsSection}>
                    <h3 className={styles.screenshotsTitle}>Скріншоти</h3>
                    <div className={styles.screenshotsContainer}>
                        {app.screenshots.map((screenshot, index) => (
                            <div key={index} className={styles.screenshotWrapper}>
                                <img src={screenshot} alt={`Скріншот ${index + 1}`} className={styles.screenshot} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <p className={styles.description}>{app.description}</p>
        </div>
    );
};

export default AppDetailsTemplate;
