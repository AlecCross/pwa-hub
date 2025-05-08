"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/AppCard.module.css'; // Імпортуємо стилі

const AppCard = ({ app }) => {
    const [iconLoaded, setIconLoaded] = useState(true); // Стан для відстеження завантаження іконки

    const handleIconError = () => {
    setIconLoaded(false); // Встановлюємо стан помилки, якщо завантаження не вдалося
    };

    return (
        <Link href={`/${app.path}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.card}>
                {iconLoaded ? (
                        <img 
                            src={app.icon} 
                            alt={app.name} 
                            className={styles.appIcon} 
                            onError={handleIconError}
                        />
                    ) : (
                        <img 
                            src={app.iconLocal} 
                            alt={app.name} 
                            className={styles.appIcon} 
                        />
                    )} 
                    <h3 className={styles.appTitle}>{app.name}</h3>
            </div>
        </Link>
    );
};

export default AppCard;
