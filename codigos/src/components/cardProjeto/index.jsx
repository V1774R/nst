import styled from "styled-components"

const Card = styled.div`
    width: 340px;
    background-color: #cacaca ;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    border-radius: 4px;
    a{
        margin: auto;
    }
    p.indisponivel{
        margin: auto;
        font-weight: bold;
        font-size: 0.8rem;
    }
    
`

const Nome = styled.h1`
    font-size: 1.5rem;
    
`

const Descricao = styled.p`
    text-align: justify;
    font-size: 0.9rem;
`

const Status = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
`

const Responsavel = styled.p`
    font-weight: bold;
`
export const CardPorjeto = ({nome, status, responsavel, descricao, url}) => {
    return (
        <Card>
            <Nome> {nome} </Nome>
            <Responsavel>Responsavel: {responsavel}</Responsavel>
            <Status style={{color: status.cor}}>Status: {status.texto}</Status>
            
            <hr />
            <Descricao>
                {descricao}
            </Descricao>
            {
                url ? (
                    <a href={url} target="_blank">
                        <button>Visualizar projeto</button>
                    </a>                    
                ):(
                    <p className="indisponivel">Visualização não disponível.</p>
                )
            }
        </Card>
    )
}