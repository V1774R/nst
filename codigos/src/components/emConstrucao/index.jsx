import {FaTools} from 'react-icons/fa'
import styled from 'styled-components'

const Card = styled.div`
  max-width: 640px;
  width: 100%;
  background: #141414; /* gray-900 */
  border: 1px solid #696969; /* gray-800 */
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
`

const FundoIcone = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: #000000; /* gray-800 */

`

const Titulo = styled.h1`
  font-size: 1.75rem;
  margin: 8px 0 6px;
  letter-spacing: 0.3px;
  color: #949494;
`

const SubTitulo = styled.p`
  font-size: 1rem;
  color: #636363; /* gray-400 */
  margin-bottom: 20px;
`


export const EmConstrucao = () => {
    return (
        <Card>
            <FundoIcone>
                <FaTools size={34} color="#ffffff" aria-hidden="true" />
            </FundoIcone>
            <Titulo>Página em construção</Titulo>
            <SubTitulo>Estamos preparando algo especial por aqui.</SubTitulo>
        </Card>
    )
}