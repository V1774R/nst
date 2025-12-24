import styled from "styled-components"

const Card = styled.div`
    width: 340px;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    padding: 26px;
    border-radius: 8px;
    border: 1px solid #868686;    
    a{
        margin: auto;
    }
    p.indisponivel{
        margin: auto;
        font-weight: bold;
        font-size: 0.8rem;
        color: #c0c0c0;
    }
    
`

const Nome = styled.p`
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #ffffff;
    font-weight: bolder;

    
`
const Responsavel = styled.p`
    font-size: 0.8rem;
    margin-bottom: 4px;
    color: #afafaf;
`
const Status = styled.p`
    font-size: 0.8rem;
    margin-bottom: 16px;
    font-weight: bold;
`
const Descricao = styled.p`
    margin: auto;
    width: 300px;
    text-align: justify;
    font-size: 0.78rem;
    margin-top: 16px;
    margin-bottom: 16px;
    color: #afafaf;
    
;
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