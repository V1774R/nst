import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
`

const Titulo = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 12px;
  color: #ffffff;
`

const Subtitulo = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #cbd5e1;
`

const Card = styled.article`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.25);
`

const Texto = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #e6edf5;
  margin-bottom: 18px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 24px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Bloco = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
`

const BlocoTitulo = styled.h3`
  font-size: 1.05rem;
  color: #ffffff;
  margin-bottom: 8px;
`

const BlocoTexto = styled.p`
  font-size: 0.98rem;
  color: #dbe5f1;
  line-height: 1.6;
`

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
  margin: 22px 0;
`

const Destaque = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 8px;
`

const Tag = styled.span`
  background: rgba(56, 173, 169, 0.18);
  border: 1px solid rgba(56, 173, 169, 0.35);
  color: #b9f3ef;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.9rem;
`

export const Sobre = () => {
  return (
      <Wrapper>
        <Header>
          <Titulo>Núcleo Setorial de Tecnologia</Titulo>
          <Subtitulo>Guarda Civil Municipal do Recife</Subtitulo>
        </Header>

        <Card>
          <Texto>
            O Núcleo Setorial de Tecnologia da Guarda Civil Municipal do Recife tem como missão
            integrar inovação e segurança para fortalecer o trabalho da corporação. Atuamos no
            desenvolvimento e na gestão de soluções digitais que apoiam a modernização dos
            serviços públicos, promovendo eficiência, transparência e proximidade com a comunidade.
          </Texto>

          <Texto>
            Somos responsáveis por implementar ferramentas tecnológicas que otimizam processos
            internos, elevam a qualidade operacional e contribuem para a tomada de decisões
            estratégicas. Buscamos continuamente novas formas de aplicar tecnologia em benefício
            da cidade, valorizando a cidadania, a segurança e o compromisso institucional.
          </Texto>

          <Divider />

          <Grid>
            <Bloco>
              <BlocoTitulo>Missão</BlocoTitulo>
              <BlocoTexto>
                Unir inovação e segurança pública por meio de soluções digitais que
                aumentem a eficiência, a transparência e o impacto social do serviço.
              </BlocoTexto>
            </Bloco>

            <Bloco>
              <BlocoTitulo>Visão</BlocoTitulo>
              <BlocoTexto>
                Ser referência em transformação digital na segurança municipal,
                impulsionando uma cultura de dados, automação e melhoria contínua.
              </BlocoTexto>
            </Bloco>

            <Bloco>
              <BlocoTitulo>Valores</BlocoTitulo>
              <BlocoTexto>
                Ética, serviço à comunidade, colaboração, segurança da informação,
                responsabilidade com recursos públicos e foco no usuário.
              </BlocoTexto>
            </Bloco>
          </Grid>

          <Divider />

          <Bloco>
            <BlocoTitulo>Foco de atuação</BlocoTitulo>
            <BlocoTexto>
              Desenvolvemos e sustentamos sistemas internos, dashboards operacionais,
              integrações entre plataformas, padronização de dados e automações de rotinas.
              Também apoiamos projetos de capacitação digital e governança de TI.
            </BlocoTexto>

            <Destaque>
              <Tag>Transformação digital</Tag>
              <Tag>Gestão de dados</Tag>
              <Tag>Automação de processos</Tag>
              <Tag>Segurança da informação</Tag>
            </Destaque>
          </Bloco>
        </Card>
      </Wrapper>
  )
}
