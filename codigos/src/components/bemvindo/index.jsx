import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  text-align: center;
  width: 100%;
`

const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #ffffff;
`

const Subtitulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  font-weight: 400;
  color: #afafaf;
`

const Texto = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #afafaf;
  text-align: justify;
`

export const BemVindo = () => {
    const navigate = useNavigate()

    return (
        <Card>
            <Titulo>Guarda Civil Municipal do Recife</Titulo>
            <Subtitulo>Núcleo Setorial de Tecnologia</Subtitulo>
            <Texto>
                Bem-vindo ao nosso espaço digital. Aqui, tecnologia e segurança caminham juntas
                para oferecer soluções modernas, eficientes e transparentes.
                Nosso compromisso é inovar e apoiar a corporação com ferramentas que fortalecem
                o serviço público e aproximam a cidade de seus cidadãos.
            </Texto>
            
        </Card>
    )
}
