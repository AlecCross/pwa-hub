"use client"
import React from 'react';
import Link from 'next/link';
import styles from '../styles/AppCard.module.css'; // Імпортуємо стилі

const AppCard = ({ app }) => {
    return (
        <Link href={`/${app.path}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.card}>
                <img src={app.icon} alt={app.name} className={styles.appIcon} />
                <h3 className={styles.appTitle}>{app.name}</h3>
                {/* <p className={styles.appDescription}>{app.description}</p> */}
                {/* <Link href={app.link} target="_blank" rel="noopener noreferrer">
          <button>Перейти до застосунку</button>
        </Link> */}
            </div>
        </Link>
    );
};

export default AppCard;
