// components/AppDetailsTemplate.jsx
import React from 'react';
import styles from '../styles/AppDetails.module.css'; // Створіть цей файл пізніше

const AppDetailsTemplate = ({ app }) => {
  if (!app) {
    return <div>Застосунок не знайдено.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{app.name}</h1>
      {app.icon && <img src={app.icon} alt={app.name} className={styles.icon} />}
      <p className={styles.description}>{app.description}</p>

      {app.screenshots && app.screenshots.length > 0 && (
        <div className={styles.screenshots}>
          <h2>Скріншоти</h2>
          <div className={styles.screenshotsGrid}>
            {app.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${app.name} скріншот ${index + 1}`}
                className={styles.screenshotImage}
              />
            ))}
          </div>
        </div>
      )}

      {app.link && (
        <div className={styles.linkContainer}>
          <a href={app.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            Перейти до застосунку
          </a>
        </div>
      )}

      {/* Додайте інші деталі застосунку, які вам потрібні */}
    </div>
  );
};

export default AppDetailsTemplate;
