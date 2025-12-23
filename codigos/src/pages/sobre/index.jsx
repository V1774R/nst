import styled, { keyframes } from "styled-components";
import { FaTools } from "react-icons/fa";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.06); }
  100% { transform: scale(1); }
`;

const Container = styled.section`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: #0f172a; /* slate-900 */
  color: #e5e7eb;      /* gray-200 */
  text-align: center;
`;

const Card = styled.div`
  max-width: 640px;
  width: 100%;
  background: #111827; /* gray-900 */
  border: 1px solid #1f2937; /* gray-800 */
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
`;

const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: #1f2937; /* gray-800 */
  animation: ${pulse} 2.2s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 8px 0 6px;
  letter-spacing: 0.3px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #9ca3af; /* gray-400 */
  margin-bottom: 20px;
`;

const Hint = styled.p`
  font-size: 0.95rem;
  color: #93c5fd; /* blue-300 */
`;

export const Sobre = () => {
  return (
    <Container aria-label="Página em construção">
      <Card>
        <IconWrap>
          <FaTools size={34} color="#93c5fd" aria-hidden="true" />
        </IconWrap>
        <Title>Página em construção</Title>
        <Subtitle>Estamos preparando algo especial por aqui.</Subtitle>
        <Hint>Volte mais tarde ou navegue pelos outros itens do menu.</Hint>
      </Card>
    </Container>
  );
};
