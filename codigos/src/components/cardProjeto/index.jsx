import styled from "styled-components"

const Card = styled.div`
    width: 100%;
    height: auto;
    min-height: 220px;
    background-color: #c5c5c5 ;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px;
    border-radius: 4px;
`

const Nome = styled.h1`
    font-size: 1.4rem;
`

const Descricao = styled.p`
    text-align: justify;
`

const Status = styled.p`
    font-size: 0.9rem;
`

const Responsavel = styled.p`
    font-weight: bold;
`
export const CardPorjeto = ({nome, status, responsavel, descricao}) => {
    return (
        <Card>
            <Nome> {nome} </Nome>
            <Status>Status: {status}</Status>
            <Responsavel>Responsavel: {responsavel}</Responsavel>
            <hr />
            <Descricao>
                {descricao}
            </Descricao>
        </Card>
    )
}