import styled from "styled-components"
import { CardPorjeto } from "../../components/cardProjeto"


const projetos = [
  {
    id: 1,
    nome: "BO-e Frontend",
    descricao: "Interface web da plataforma BO-e, desenvolvida em React. Responsável pela experiência do usuário no registro de ocorrências e relatórios da GCMR, oferecendo navegação intuitiva, formulários dinâmicos e integração direta com os serviços do backend.",
    status: {texto: "Implantação (MPV)", cor: "#064416"},
    responsavel: "NST-GMR",
    url: "https://boegcmr-front.homolog.app.emprel.gov.br/"
  },
  {
    id: 2,
    nome: "BO-e Backend",
    descricao: "Serviço de backend da plataforma BO-e, construído em Spring Boot. Responsável pelo processamento de dados, autenticação, persistência em banco de dados e integração com sistemas internos da GCMR, garantindo segurança e escalabilidade para o produto.",
    status: {texto: "Implantação (MPV)", cor: "#247438"},
    responsavel: "NST-GMR",
    url: "https://boegcmr-rest.homolog.app.emprel.gov.br/"
  },
  {
    id: 3,
    nome: "CFIP Frontend",
    descricao: "Interface web do sistema CFIP, desenvolvida em React. Voltada para o setor de instrução da GCMR, oferece aos agentes acesso a cursos, treinamentos e materiais didáticos, com navegação intuitiva e integração direta ao backend.",
    status: {texto: "Em desenvolvimento", cor: "#247438"},
    responsavel: "NST-GMR",
    url: "http://cfip.front.nst.vps-kinghost.net"
  },
  {
    id: 4,
    nome: "CFIP Backend",
    descricao: "Serviço de backend do sistema CFIP, construído em Spring Boot. Responsável pela gestão de cursos, inscrições, controle de progresso dos agentes e integração com sistemas internos, garantindo segurança e escalabilidade.",
    status: {texto: "Em processo de diagramação.", cor: "#000000"},
    responsavel: "NST-GMR",
    url: null
  },
  {
    id: 5,
    nome: "Portal GCMR Frontend",
    descricao: "Interface web do Portal GCMR, desenvolvida em React. Permite aos agentes visualizar escalas, solicitar extras, realizar permutas, consultar faltas e postos de serviço, tudo em um ambiente centralizado e acessível.",
    status: {texto: "Em desenvolvimento", cor: "#247438"},
    responsavel: "NST-GMR",
    url: "http://portal.front.nst.vps-kinghost.net"
  },
  {
    id: 6,
    nome: "Portal GCMR Backend",
    descricao: "Serviço de backend do Portal GCMR, construído em Spring Boot. Responsável pelo processamento de dados relacionados às escalas, permutas, faltas e gestão de pessoal, garantindo integração com sistemas internos e segurança da informação.",
    status: {texto: "Em desenvolvimento", cor: "#247438"},
    responsavel: "NST-GMR",
    url: "http://portal.api.nst.vps-kinghost.net"
  }
]



const AreaCards = styled.div`
    overflow: auto;
    display: flex;
    gap: 8px;
    flex-direction: column;
    
    &::-webkit-scrollbar{
        display: none;
    }

    
`

export const Projetos = () => {

  return (
    <AreaCards>
      {
        projetos.map(projeto => (
          <CardPorjeto key={projeto.id} nome={projeto.nome} status={projeto.status} responsavel={projeto.responsavel} descricao={projeto.descricao} url={projeto.url} />
        ))
      }
    </AreaCards>
  )
}

