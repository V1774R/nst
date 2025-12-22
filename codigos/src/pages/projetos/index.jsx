import styled from "styled-components"
import { CardPorjeto } from "../../components/cardProjeto"


const projetos = [
  {
    id: 1,
    nome: "Sistema de Gestão Operacional (SGO)",
    descricao: "Plataforma para registro de ocorrências, patrulhamento, despacho e relatórios.",
    status: "em_andamento",
    responsavel: "NST-GMR",
    tags: ["operacional", "ocorrencias", "relatorios"]
  },
  {
    id: 2,
    nome: "Portal Institucional da Guarda Municipal",
    descricao: "Site oficial com informações, serviços ao cidadão e seção de transparência.",
    status: "planejado",
    responsavel: "Comunicacao & NST-GMR",
    tags: ["portal", "institucional", "transparencia"]
  },
  {
    id: 3,
    nome: "Aplicativo de Comunicação Interna",
    descricao: "App mobile com mensagens seguras, avisos e grupos de patrulha.",
    status: "em_andamento",
    responsavel: "NST-GMR",
    tags: ["mobile", "comunicacao", "seguranca"]
  },
  {
    id: 4,
    nome: "Sistema de Controle de Frotas",
    descricao: "Gestão de veículos, manutenção preventiva e rastreamento básico.",
    status: "em_andamento",
    responsavel: "Logistica & NST-GMR",
    tags: ["frotas", "manutencao", "rastreamento"]
  },
  {
    id: 5,
    nome: "Plataforma de Treinamento Online",
    descricao: "Cursos EAD, trilhas de capacitação e avaliação de desempenho.",
    status: "concluido",
    responsavel: "RH & NST-GMR",
    tags: ["ead", "treinamento", "capacitação"]
  },
  {
    id: 6,
    nome: "Sistema de Gestão de Recursos Humanos",
    descricao: "Escalas, férias, ponto eletrônico e documentos funcionais.",
    status: "planejado",
    responsavel: "RH & NST-GMR",
    tags: ["rh", "escalas", "ponto"]
  },
  {
    id: 7,
    nome: "Central de Monitoramento Integrada",
    descricao: "Integração de câmeras, sensores e alertas em tempo real.",
    status: "descoberta",
    responsavel: "Operacoes & NST-GMR",
    tags: ["monitoramento", "iot", "video"]
  },
  {
    id: 8,
    nome: "SAC Digital do Cidadão",
    descricao: "Canal online para solicitações, denúncias e acompanhamento de protocolos.",
    status: "em_andamento",
    responsavel: "Ouvidoria & NST-GMR",
    tags: ["sac", "protocolos", "cidadao"]
  },
  {
    id: 9,
    nome: "Modernização de Infraestrutura de TI",
    descricao: "Atualização de servidores, rede, backups e políticas de segurança.",
    status: "em_andamento",
    responsavel: "Infra & NST-GMR",
    tags: ["infra", "rede", "seguranca"]
  },
  {
    id: 10,
    nome: "Dashboard de Indicadores de Segurança",
    descricao: "Painéis interativos com métricas operacionais e análise de dados.",
    status: "concluido",
    responsavel: "Inteligencia & NST-GMR",
    tags: ["dados", "bi", "indicadores"]
  }
] //simulando conexao com banco.


//depois fazer get em curso da api do porta













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

    return(
        <AreaCards>
            {
                projetos.map(projeto => (
                    <CardPorjeto key={projeto.id} nome={projeto.nome} status={projeto.status} responsavel={projeto.responsavel} descricao={projeto.descricao}/>
                ))
            }
        </AreaCards>
    )
}

