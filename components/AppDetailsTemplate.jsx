// components/AppDetailsTemplate.jsx

"use client"
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-align: center;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

const ScreenshotsSection = styled.div`
  width: 100%;
`;

const ScreenshotsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ScreenshotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  overflow-x: auto; /* Додаємо горизонтальну прокрутку для великої кількості скріншотів */
  padding-bottom: 1rem; /* Запас для прокрутки */
`;

const ScreenshotWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9; /* Типове співвідношення сторін скріншотів */
  object-fit: cover;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

const AppButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1e8e3e; /* Зелений колір, схожий на кнопку "Встановити" */
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #15652d;
  }
`;

const CodeButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #4285f4; /* Синій колір, схожий на посилання на код */
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1a53b8;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
  z-index: 10; /* Щоб кнопка була над іншим вмістом */

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Іконка "назад" (можете замінити на свій SVG або шрифт-іконку)
const BackIcon = styled.span`
  font-size: 1.2rem;
`;

const AppDetailsTemplate = ({ app }) => {
  return (
    <Container>
      <BackButton href="/">
        <BackIcon>←</BackIcon> На головну
      </BackButton>
      <Header>
        <IconWrapper>
          <Icon src={app.icon} alt={app.name} />
        </IconWrapper>
        <Title>{app.name}</Title>
        <Actions>
        {app.link && (
          <AppButton href={app.link} target="_blank" rel="noopener noreferrer">
            Перейти до застосунку
          </AppButton>
        )}
        {app.codeLink && (
          <CodeButton href={app.codeLink} target="_blank" rel="noopener noreferrer">
            Код на GitHub
          </CodeButton>
        )}
      </Actions>
        
      </Header>

      {app.screenshots && app.screenshots.length > 0 && (
        <ScreenshotsSection>
          <ScreenshotsTitle>Скріншоти</ScreenshotsTitle>
          <ScreenshotsContainer>
            {app.screenshots.map((screenshot, index) => (
              <ScreenshotWrapper key={index}>
                <Screenshot src={screenshot} alt={`Скріншот ${index + 1}`} />
              </ScreenshotWrapper>
            ))}
          </ScreenshotsContainer>
        </ScreenshotsSection>
      )}
      <Description>{app.description}</Description>
    </Container>
  );
};

export default AppDetailsTemplate;
