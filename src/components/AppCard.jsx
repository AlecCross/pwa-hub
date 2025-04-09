import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AppIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
`;

const AppTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const AppDescription = styled.p`
  margin-bottom: 1rem;
`;

const AppCard = ({ app }) => {
  return (
    <Card>
      <AppIcon src={app.icon} alt={app.name} />
      <AppTitle>{app.name}</AppTitle>
      <AppDescription>{app.description}</AppDescription>
      <Link href={app.link}>
        <button>Перейти</button>
      </Link>
    </Card>
  );
};

export default AppCard;
