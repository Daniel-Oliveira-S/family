import { Check, MoveDown } from "lucide-react";
import "./App.css";
import topImg from "./assets/Group 1 (1).svg";
import divider from "./assets/divider.svg";
import sell from "./assets/div-img.svg";
import kids from "./assets/kids.svg";
import { GearFine, SealCheck } from "@phosphor-icons/react/dist/ssr";
import bookKids from "./assets/book-kids.svg";
import guitar from "./assets/violao.svg";
import family from "./assets/family.svg";
import familyHug from "./assets/family-hug.svg";
import keyboard from "./assets/keyboard.svg";
import dad from "./assets/dad.svg";
import colored from "./assets/colored.svg";
import ukulele from "./assets/ukulele.png";
import boneco from "./assets/boneco.png";
import objectives from "./assets/objectives.png";
import note from "./assets/note.svg";
import selo from "./assets/selo.svg";
import bank from "./assets/bank.svg";
import { useEffect, useState } from "react";
import cross from "./assets/cross.svg";
import check from "./assets/check.svg";
import { Acordion } from "./components/accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/carousel-img";
import test1 from "./assets/test-1.png";
import test2 from "./assets/test-2.png";
import test3 from "./assets/test-3.png";
import test4 from "./assets/test-4.png";
import mobileTop from "./assets/mobile-top.svg";
import "./components/mobile.css";

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 834);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <>
      <main>
        <section id="transform">
          <div id="transform-content" className="container">
            {mobile ? (
              <div id="transform-wrapper">
                <img src={mobileTop} alt="" />

                <div id="wrapper-text">
                  <h1>A música tem o poder de transformar famílias</h1>
                  <p>
                    Qualquer pessoa pode educar seu filho utilizando essa
                    ferramenta, mesmo que não tenha nenhuma habilidade musical
                  </p>
                  <a href="">
                    <p>
                      Assista ao vídeo abaixo e aprenda 3 práticas valiosas:
                    </p>
                    <MoveDown className="move-down" />
                  </a>
                  <div id="tips">
                    <div id="tips-number">
                      <h1 className="number">01</h1>
                      <h1 className="number">02</h1>
                      <h1 className="number">03</h1>
                    </div>
                    <div className="vertical-divider">
                      <div className="purple-divider"></div>
                    </div>
                    <div id="tips-text">
                      <p className="tip-text">
                        Desvende como usar a música para promover uma
                        comunicação empática e assertiva, criando um ambiente
                        familiar harmonioso e compreensivo.
                      </p>
                      <p className="tip-text">
                        Personalize a educação conforme o temperamento da
                        criança, aplicando disciplina positiva para incentivar
                        autonomia e responsabilidade.
                      </p>
                      <p className="tip-text">
                        Explore como a música pode impulsionar o desenvolvimento
                        cognitivo, emocional e social das crianças, gerando
                        memórias positivas e fortalecendo habilidades essencias
                        para a vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id="transform-wrapper">
                <div id="wrapper-text">
                  <h1>A música tem o poder de transformar famílias</h1>
                  <p>
                    Qualquer pessoa pode educar seu filho utilizando essa
                    ferramenta, mesmo que não tenha nenhuma habilidade musical
                  </p>
                  <a href="">
                    <p>
                      Assista ao vídeo abaixo e aprenda 3 práticas valiosas:
                    </p>
                    <MoveDown className="move-down" />
                  </a>
                  <div id="tips">
                    <div id="tips-number">
                      <h1 className="number">01</h1>
                      <h1 className="number">02</h1>
                      <h1 className="number">03</h1>
                    </div>
                    <div className="vertical-divider">
                      <div className="purple-divider"></div>
                    </div>
                    <div id="tips-text">
                      <p className="tip-text">
                        Desvende como usar a música para promover uma
                        comunicação empática e assertiva, criando um ambiente
                        familiar harmonioso e compreensivo.
                      </p>
                      <p className="tip-text">
                        Personalize a educação conforme o temperamento da
                        criança, aplicando disciplina positiva para incentivar
                        autonomia e responsabilidade.
                      </p>
                      <p className="tip-text">
                        Explore como a música pode impulsionar o desenvolvimento
                        cognitivo, emocional e social das crianças, gerando
                        memórias positivas e fortalecendo habilidades essencias
                        para a vida.
                      </p>
                    </div>
                  </div>
                </div>
                <img src={topImg} alt="" />
              </div>
            )}
            <iframe
              className="video"
              src="https://www.youtube.com/embed/u-bPR4OKJvw"
              title="Video de vendas Familias Orquestradas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <a
              className="CTA top"
              href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
            >
              Quero transformar a educação do meu filho com música
            </a>
          </div>
        </section>
        <img src={divider} alt="" className="divider" />
        <section id="testimonials">
          <h1>O que as Famílias Orquestradas estão achando?</h1>
          <div id="testimonials-videos">
            <iframe
              src="https://www.youtube.com/embed/HH2n6ihe1ro"
              title="Depoimento Luizi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/sAOT2IP1zeo"
              title="Depoimento Nana e Mário"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/lhA8uwHAEcI"
              title="Depoimento Amanda"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="prints">
            {mobile ? (
              <Carousel />
            ) : (
              <div className="imgs-prints">
                <img src={test1} alt="" />
                <img src={test2} alt="" />
                <img src={test3} alt="" />
                <img src={test4} alt="" />
              </div>
            )}
          </div>
          <div className="div-text white">
            <h3>
              Descubra como a música pode revolucionar a educação infantil!
              Beneficie-se com:
            </h3>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" />
              <p>Opções de pagamento flexíveis: boleto, PIX.</p>
            </div>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" />
              <p>Garantia de 14 dias para a sua tranquilidade</p>
            </div>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" />
              <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
            </div>
          </div>
          <a
            href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
            className="CTA"
          >
            Quero transformar a educação do meu filho com música
          </a>
        </section>
        <img src={divider} alt="" className="divider" />
        <section id="solutions">
          <div id="solutions-content">
            <h1>Solucões imediatas para Seu Dia a Dia</h1>
            <div id="stick-notes">
              <div className="notes">
                <Check className="badge" />
                <h3>Alívio rápido de Tensões Familiares</h3>
                <p>
                  Práticas Musicais Simples: Descubra como atividades musicais
                  fáceis e divertidas podem acalmar ambientes tensos, gerando
                  alegria instantânea na sua casa.
                  <br />
                  <br />
                  Comunicação Efetiva: Explore técnicas de comunicação que podem
                  ser aplicadas imediatamente, melhorando a interação com seu
                  filho e reduzindo mal-entendidos e frustrações.
                </p>
              </div>
              <div className="notes">
                <Check className="badge" />
                <h3>Gestão de Comportamento</h3>
                <p>
                  Disciplina Positiva ao Alcance: Implemente estratégias
                  práticas de disciplina positiva que proporcionam resultados
                  visíveis no comportamento da criança, sem a necessidade de
                  recorrer a métodos punitivos.
                  <br />
                  <br />
                  Conexão e Empatia Instantâneas: Utilize a música para criar
                  uma conexão imediata com seu filho, facilitando a compreensão
                  mútua e o respeito.
                </p>
              </div>
              <div className="notes">
                <Check className="badge" />
                <h3>Resultados na Rotina Diária</h3>
                <p>
                  Rotina Harmoniosa com Música: Integre a música à sua rotina
                  diária, transformando momentos como a hora de dormir, tomar
                  banho e escovar os dentes em experiências mais suaves e
                  tranquilas.
                  <br />
                  <br />
                  Momentos de Aprendizado Divertidos: Transforme desafios
                  educacionais em experiências de aprendizado envolventes,
                  lúdicas e eficazes, gerando interesse e entusiasmo imediatos
                  nas criança
                </p>
              </div>
            </div>
            <a
              className="CTA"
              href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
            >
              Quero transformar a educação do meu filho com música
            </a>
          </div>
        </section>
        <div className="div-img">
          <p>
            Transforme o aprendizado do seu filho agora! Clique em{" "}
            <strong>
              "Quero transformar a educação do meu filho com música"
            </strong>{" "}
            e comece essa jornada única
          </p>
          <div className="div-img-content">
            <img src={sell} alt="" />
            <div className="div-text">
              <h3>
                Descubra como a música pode revolucionar a educação infantil!
                Beneficie-se com:
              </h3>

              <div className="benefit">
                <SealCheck weight="fill" className="seal" />
                <p>Opções de pagamento flexíveis: boleto, PIX.</p>
              </div>

              <div className="benefit">
                <SealCheck weight="fill" className="seal" />
                <p>Garantia de 14 dias para a sua tranquilidade</p>
              </div>

              <div className="benefit">
                <SealCheck weight="fill" className="seal" />
                <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
              </div>
            </div>
          </div>
        </div>
        <section id="points">
          <div id="points-content">
            {mobile ? (
              <div id="points-img">
                <div className="point">
                  <img src={kids} alt="" />
                  <p>
                    Educar e comunicar-se efetivamente com crianças pequenas é
                    um desafio constante para pais e educadores, muitas vezes
                    resultando em estresse e frustração para ambos os lados.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={bookKids} alt="" />
                  <p>
                    O desenvolvimento na primeira infância é crucial para o
                    bem-estar e sucesso futuro das crianças. As experiências
                    durante este período têm um impacto duradouro.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={guitar} alt="" />
                  <p>
                    A música é uma ferramenta poderosa no desenvolvimento
                    cognitivo, emocional e social das crianças, além de ser um
                    meio muito eficaz de melhorar a comunicação e o aprendizado.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={family} alt="" />
                  <p>
                    Abordagens tradicionais de educação e disciplina não são
                    eficazes para 100% das crianças. Por isso a necessidade de
                    métodos inovadores e adaptativos para atender às diversas
                    necessidades de aprendizado.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={familyHug} alt="" />
                  <p>
                    O envolvimento ativo dos pais no processo educativo é
                    fundamental para reforçar o aprendizado e fortalecer os
                    laços familiares.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={keyboard} alt="" />
                  <p>
                    Embora muitos pais reconheçam a importância da música, é
                    comum se sentirem constrangidos pela falta de recursos,
                    tempo ou conhecimento musical próprio.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={dad} alt="" />
                  <p>
                    Pais e educadores estão constantemente em busca de soluções
                    práticas, eficazes e divertidas para educar e se conectar
                    com as crianças, independentemente de sua experiência
                    musical prévia.
                  </p>
                </div>{" "}
                <div className="point">
                  <img src={colored} alt="" />
                  <p>
                    A boa notícia é que você não precisa ter nenhum conhecimento
                    musical para iniciar a educação musical do seu filho!
                  </p>
                </div>
              </div>
            ) : (
              <div id="points-imgs">
                <div className="point-img">
                  <img src={kids} alt="" />
                  <p>
                    Educar e comunicar-se efetivamente com crianças pequenas é
                    um desafio constante para pais e educadores, muitas vezes
                    resultando em estresse e frustração para ambos os lados.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={bookKids} alt="" />
                  <p>
                    O desenvolvimento na primeira infância é crucial para o
                    bem-estar e sucesso futuro das crianças. As experiências
                    durante este período têm um impacto duradouro.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={guitar} alt="" />
                  <p>
                    A música é uma ferramenta poderosa no desenvolvimento
                    cognitivo, emocional e social das crianças, além de ser um
                    meio muito eficaz de melhorar a comunicação e o aprendizado.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={family} alt="" />
                  <p>
                    Abordagens tradicionais de educação e disciplina não são
                    eficazes para 100% das crianças. Por isso a necessidade de
                    métodos inovadores e adaptativos para atender às diversas
                    necessidades de aprendizado.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={familyHug} alt="" />
                  <p>
                    O envolvimento ativo dos pais no processo educativo é
                    fundamental para reforçar o aprendizado e fortalecer os
                    laços familiares.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={keyboard} alt="" />
                  <p>
                    Embora muitos pais reconheçam a importância da música, é
                    comum se sentirem constrangidos pela falta de recursos,
                    tempo ou conhecimento musical próprio.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={dad} alt="" />
                  <p>
                    Pais e educadores estão constantemente em busca de soluções
                    práticas, eficazes e divertidas para educar e se conectar
                    com as crianças, independentemente de sua experiência
                    musical prévia.
                  </p>
                </div>{" "}
                <div className="point-img">
                  <img src={colored} alt="" />
                  <p>
                    A boa notícia é que você não precisa ter nenhum conhecimento
                    musical para iniciar a educação musical do seu filho!
                  </p>
                </div>
              </div>
            )}
            <div className="blur">
              <div className="blur-img">
                <div className="ilumination-1"></div>
                <div className="ilumination-2"></div>
                <img src={boneco} alt="" />
              </div>

              <div className="blur-text">
                <h1>O que você precisa é de um método.</h1>
                <p>
                  O que é o método Famílias Orquestradas?
                  <br />
                  <br />
                  Este método é uma abordagem única e carinhosa para a educação
                  infantil, usando a música como ferramenta principal. Ele traz
                  benefícios não apenas para as crianças, mas também para os
                  pais, promovendo uma comunicação mais empática, estimulando o
                  desenvolvimento cognitivo e emocional, e fortalecendo os laços
                  familiares. Dessa forma, cria-se um ambiente familiar caloroso
                  e harmonioso, transformando os desafios diários em
                  oportunidades de conexão e aprendizado mútuo.
                </p>
              </div>
            </div>

            <div id="disc">
              <h1>O método é baseado em 4 pilares</h1>
              <div id="disc-grid">
                <div className="gear">
                  <GearFine className="engine" weight="bold" />
                  <h2>Escuta - Desvendando as notas da empatia</h2>
                  <p>
                    Esse módulo é a base. Você vai descobrir se seu filho é Pop,
                    Rock, Reggae ou Bossa Nova. Isso vai te ajudar a se
                    comunicar melhor com quem você ama, e quem te ama vai te
                    escutar com muito mais respeito e abertura.
                  </p>
                </div>
                <div className="gear">
                  <GearFine className="engine" weight="bold" />
                  <h2>Ritmo - ritmando a rotina familiar</h2>
                  <p>
                    Nesse módulo você, seu cônjuge e seus filhos vão compreender
                    que para cultivarem a paz dentro do lar não é necessário
                    pressa, mas sim um ritmo tranquilo e constante.
                  </p>
                </div>
                <div className="gear">
                  <GearFine className="engine" weight="bold" />
                  <h2>Melodia - Regendo a comunicação batuta</h2>
                  <p>
                    Você vai se tornar a maestrina e o maestro que irão reger a
                    rotina da sua casa com uma batuta invisível. Terá acesso a
                    ferramentas de comunicação não verbal que irão sustentar a
                    cumplicidade familiar, gerando uma conexão profunda entre
                    você e todos do seu lar.
                  </p>
                </div>
                <div className="gear">
                  <GearFine className="engine" weight="bold" />
                  <h2>Harmonia - Transformando o lar em sinfonia</h2>
                  <p>
                    No último estágio os momentos em família vão se tornando, a
                    cada dia que passa, um ambiente de amor, harmonia e
                    respeito. Vocês irão juntos, afinar suas habilidades
                    emocionais, aprendendo uns com os outros a evoluírem seus
                    temperamentos, e vão transformando cada experiência vivida
                    em um tempo de paz e harmonia dentro do lar da sua tão
                    sonhada Família Orquestrada!
                  </p>
                </div>
              </div>
            </div>
            <a
              className="CTA"
              href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
            >
              Quero transformar a educação do meu filho com música
            </a>
          </div>
        </section>

        {mobile ? (
          <div className="div-img linear">
            <div className="div-img-content ">
              <img src={sell} alt="" />
              <div className="div-text">
                <h1>
                  Descubra como a música pode revolucionar a educação infantil!
                  Beneficie-se com:
                </h1>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Opções de pagamento flexíveis: boleto, PIX.</p>
                </div>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Garantia de 14 dias para a sua tranquilidade</p>
                </div>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="div-img">
            <div className="div-img-content">
              <div className="div-text">
                <h1>
                  Descubra como a música pode revolucionar a educação infantil!
                  Beneficie-se com:
                </h1>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Opções de pagamento flexíveis: boleto, PIX.</p>
                </div>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Garantia de 14 dias para a sua tranquilidade</p>
                </div>

                <div className="benefit">
                  <SealCheck weight="fill" className="seal" />
                  <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
                </div>
              </div>
              <img src={sell} alt="" />
            </div>
          </div>
        )}

        <section id="compare">
          {mobile ? (
            <div id="compare-content">
              <div className="pattern trad">
                <img src={cross} alt="" />
                <h1>Educação tradicional</h1>
                <p>Focada em regras e disciplina inflexíveis.</p>
                <p>Métodos padronizados, pouco personalizados.</p>
                <p>
                  Comunicação unidirecional e autoritária (de cima para baixo).
                </p>
                <p>
                  Pouco ou nenhum uso de ferramentas criativas, como a música
                  bem direcionada.
                </p>
                <p>
                  Pela sua rigidez, muitas vezes cria tensões e distanciamento
                  entre pais e filhos.
                </p>
                <p>
                  Concentra nos resultados, sem considerar as habilidades
                  individuais e pontos fortes de cada aluno.
                </p>
                <p>
                  Aprendizado centrado na escola, com menos envolvimento dos
                  pais.
                </p>
              </div>
              <div className="pattern edu">
                <img src={check} alt="" />

                <h1>Educação Famílias Orquestradas</h1>
                <p>Harmonia entre disciplina e inteligência emocional.</p>
                <p>
                  Abordagens de ensino adaptadas ao temperamento individual da
                  criança.
                </p>
                <p>
                  Comunicação aberta e empática, facilitando a compreensão mútua
                  sem abrir mão da firmeza e limites adequados.
                </p>
                <p>
                  Uso abrangente da música como ferramenta de ensino e conexão.
                </p>
                <p>
                  Favorecimento de um ambiente familiar muito mais harmonioso e
                  próximo.
                </p>
                <p>
                  Ênfase no PROCESSO de crescimento emocional, criativo e
                  social, além do acadêmico.
                </p>
                <p>
                  Incentivo ao envolvimento ativo dos pais no processo
                  educativo.
                </p>
              </div>
              <a
                href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
                className="CTA purple"
              >
                Quero transformar a educação do meu filho com música
              </a>
            </div>
          ) : (
            <div id="compare-content">
              <div id="compare-titles">
                <h2>Abordagem Disciplinar</h2>
                <h2>
                  Métodos
                  <br />
                  de Ensino
                </h2>
                <h2>Estilo de Comunicação</h2>
                <h2>Uso de Ferramentas Criativas</h2>
                <h2>
                  Relação entre
                  <br />
                  Pais e Filhos
                </h2>
                <h2>Foco do Desenvolvimento</h2>
                <h2>
                  Envolvimento
                  <br />
                  dos Pais
                </h2>
              </div>
              <div className="pattern">
                <h1>Educação tradicional</h1>
                <p>Focada em regras e disciplina inflexíveis.</p>
                <p>Métodos padronizados, pouco personalizados.</p>
                <p>
                  Comunicação unidirecional e autoritária (de cima para baixo).
                </p>
                <p>
                  Pouco ou nenhum uso de ferramentas criativas, como a música
                  bem direcionada.
                </p>
                <p>
                  Pela sua rigidez, muitas vezes cria tensões e distanciamento
                  entre pais e filhos.
                </p>
                <p>
                  Concentra nos resultados, sem considerar as habilidades
                  individuais e pontos fortes de cada aluno.
                </p>
                <p>
                  Aprendizado centrado na escola, com menos envolvimento dos
                  pais.
                </p>
              </div>
              <div className="pattern">
                <h1>Educação Famílias Orquestradas</h1>
                <p>Harmonia entre disciplina e inteligência emocional.</p>
                <p>
                  Abordagens de ensino adaptadas ao temperamento individual da
                  criança.
                </p>
                <p>
                  Comunicação aberta e empática, facilitando a compreensão mútua
                  sem abrir mão da firmeza e limites adequados.
                </p>
                <p>
                  Uso abrangente da música como ferramenta de ensino e conexão.
                </p>
                <p>
                  Favorecimento de um ambiente familiar muito mais harmonioso e
                  próximo.
                </p>
                <p>
                  Ênfase no PROCESSO de crescimento emocional, criativo e
                  social, além do acadêmico.
                </p>
                <p>
                  Incentivo ao envolvimento ativo dos pais no processo
                  educativo.
                </p>
              </div>
            </div>
          )}
          <div className="div-text">
            <h1>
              Descubra como a música pode revolucionar a educação infantil!
              Beneficie-se com:
            </h1>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e5b11b" />
              <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
            </div>
            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e5b11b" />
              <p>Opções de pagamento flexíveis: boleto, PIX.</p>
            </div>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e5b11b" />
              <p>Garantia de 14 dias para a sua tranquilidade</p>
            </div>

            <a
              href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
              className="CTA"
            >
              Quero transformar a educação do meu filho com música
            </a>
          </div>
        </section>

        <section id="bonus">
          <div id="bonus-content">
            <h1 className="see">Veja também os bônus que preparei para você</h1>
            <div className="bonus-flex">
              <div className="bonus">
                <div className="bonus-title">
                  <h1>1</h1>
                  <h2>Hora do banho mental</h2>
                </div>
                <p>
                  A meditação para os pequenos é muito importante. Porque reduz
                  o estresse, melhora a concentração, a atenção, ajuda no
                  controle emocional, aumenta a empatia, a compaixão, melhora o
                  soninho, e ajuda na criatividade e no desenvolvimento
                  cognitivo.
                </p>
              </div>
              <span></span>
              <div className="bonus">
                <div className="bonus-title">
                  <h1>2</h1>
                  <h2>Oração da família orquestrada</h2>
                </div>
                <p>
                  As orações trazem um monte de benefícios pra vida da gente!
                  Fortalece os laços familiares, traz pra perto a compreensão e
                  a empatia, alimenta valores e virtudes, oferece suporte e
                  encorajamento, fortalece a gratidão, a reflexão e a
                  espiritualidade. Cria um ambiente de paz e tranquilidade,
                  independentemente das tensões do dia a dia.
                </p>
              </div>
              <span></span>
              <div className="bonus">
                <div className="bonus-title">
                  <h1>3</h1>
                  <h2>
                    PDF de atividades
                    <br />
                    musicais
                  </h2>
                </div>
                <p>
                  Além de se divertir com atividades musicais junto com seus
                  filhos, você receberá PDFs exclusivos dessas atividades. Esses
                  documentos foram criados para oferecer instruções detalhadas
                  por escrito, permitindo que, a qualquer momento, você possa
                  revisitar as brincadeiras sem a necessidade de assistir
                  novamente às aulas. É como ter um guia prático e organizado
                  para transformar instantaneamente momentos especiais em música
                  em sua casa!
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
            className="CTA"
          >
            Quero transformar a educação do meu filho com música
          </a>
          <div className="div-text repeat">
            <h1>
              Descubra como a música pode revolucionar a educação infantil!
              Beneficie-se com:
            </h1>
            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e4007f" />
              <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
            </div>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e4007f" />
              <p>Opções de pagamento flexíveis: boleto, PIX.</p>
            </div>

            <div className="benefit">
              <SealCheck weight="fill" className="seal" color="#e4007f" />
              <p>Garantia de 14 dias para a sua tranquilidade</p>
            </div>
          </div>
        </section>

        <section id="who" className="who">
          {mobile ? (
            <div id="who-cont" className="who content">
              <img src={ukulele} alt="" />
              <div className="who-txt">
                <h1>
                  Quem é <strong>Sandra Melo?</strong>
                </h1>
                <p>
                  {" "}
                  Sandra Melo, uma musicista apaixonada e mestre pela renomada
                  Sibelius Academy em Helsinki, Finlândia, traz mais de 10 anos
                  de experiência em educação musical e familiar, destacando-se
                  por sua dedicação inabalável à música e ao fortalecimento dos
                  laços familiares.
                  <br />
                  <br />
                  Seu profundo amor pela música impulsionou a criação do Método
                  'Famílias Orquestradas', um programa inovador que vai além de
                  simplesmente ensinar música. Sandra é reconhecida por
                  proporcionar um ambiente acolhedor e inspirador, onde membros
                  da família confiam em sua orientação para promover o
                  desenvolvimento saudável das crianças.
                  <br />
                  <br />
                  Depois de imergir na música e educação infantil, Sandra
                  acredita que a música é uma ferramenta poderosa acessível a
                  todos, mesmo àqueles sem experiência musical anterior. Seu
                  compromisso é capacitar pais e cuidadores, orientando-os a
                  incorporar a música de forma eficaz em suas vidas diárias,
                  fortalecendo a comunicação, a disciplina e os vínculos
                  familiares com confiança e acolhimento.
                  <br />
                  <br />
                  Garantia de 14 Dias: Quero que você se sinta totalmente seguro
                  ao embarcar nessa jornada de transformação familiar. Explore o
                  treinamento por 14 dias e, se por algum motivo não achar que é
                  a escolha certa para sua família, você terá seu investimento
                  de volta. Estamos comprometidos em oferecer uma experiência
                  inesquecível, transparente e confiável para impulsionar sua
                  jornada de forma significativa.
                </p>
              </div>
            </div>
          ) : (
            <div id="who-content" className="who content">
              <div className="ilumination-cyan"></div>
              <div className="ilumination-pink"></div>

              <img src={ukulele} alt="" />
              <div className="who-text">
                <h1>
                  Quem é <strong>Sandra Melo?</strong>
                </h1>
                <p>
                  {" "}
                  Sandra Melo, uma musicista apaixonada e mestre pela renomada
                  Sibelius Academy em Helsinki, Finlândia, traz mais de 10 anos
                  de experiência em educação musical e familiar, destacando-se
                  por sua dedicação inabalável à música e ao fortalecimento dos
                  laços familiares.
                  <br />
                  <br />
                  Seu profundo amor pela música impulsionou a criação do Método
                  'Famílias Orquestradas', um programa inovador que vai além de
                  simplesmente ensinar música. Sandra é reconhecida por
                  proporcionar um ambiente acolhedor e inspirador, onde membros
                  da família confiam em sua orientação para promover o
                  desenvolvimento saudável das crianças.
                  <br />
                  <br />
                  Depois de imergir na música e educação infantil, Sandra
                  acredita que a música é uma ferramenta poderosa acessível a
                  todos, mesmo àqueles sem experiência musical anterior. Seu
                  compromisso é capacitar pais e cuidadores, orientando-os a
                  incorporar a música de forma eficaz em suas vidas diárias,
                  fortalecendo a comunicação, a disciplina e os vínculos
                  familiares com confiança e acolhimento.
                  <br />
                  <br />
                  Garantia de 14 Dias: Quero que você se sinta totalmente seguro
                  ao embarcar nessa jornada de transformação familiar. Explore o
                  treinamento por 14 dias e, se por algum motivo não achar que é
                  a escolha certa para sua família, você terá seu investimento
                  de volta. Estamos comprometidos em oferecer uma experiência
                  inesquecível, transparente e confiável para impulsionar sua
                  jornada de forma significativa.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id="FAQ">
          <Acordion />
        </section>

        <section id="chekout">
          <div id="checkout-content">
            <div id="objectives">
              <img src={objectives} alt="" />
              <div className="objective-text">
                <h1>
                  Você está a um passo de começar uma sinfonia emocionante em
                  direção aos seus objetivos, onde cada nota representa:
                </h1>
                <div className="objectives">
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Comunicação eficaz com os seus filhos</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Desenvolvimento integral das crianças</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Fortalecimento dos laços familiares</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Tempo de qualidade para você e para sua família</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Utilização da música como ferramenta poderosa</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Educação adaptativa, divertida e inovadora</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Transformação positiva do ambiente familiar</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>
                      Bye Bye aos berros, birras e desentendimentos constantes
                    </p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Saúde mental e emocional</p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>
                      Harmonia entre vida pessoal, profissional e espiritual
                    </p>
                  </div>
                  <div className="objective">
                    <img src={note} alt="" />
                    <p>Resultados rápidos e duradouros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="checkout-form">
          <div className="checkout-text">
            {mobile ? (
              <p>
                Adotando uma abordagem musical, você estimula o desenvolvimento
                integral dos seus pequenos, fortalece os laços familiares de
                maneira única e incorpora a música como uma ferramenta poderosa
                em sua jornada educativa.
                <br />
                <br />
                Esteja preparado para experienciar resultados rápidos e
                duradouros. Estamos aqui para te ajudar a afinar cada nota dessa
                trajetória, celebrando suas conquistas ao longo do concerto da
                vida!
              </p>
            ) : (
              <p>
                Adotando uma abordagem musical, você estimula o desenvolvimento
                integral dos seus pequenos, fortalece os laços familiares de
                maneira única e incorpora a música como uma ferramenta poderosa
                em sua jornada educativa. Esteja preparado para experienciar
                resultados rápidos e duradouros. Estamos aqui para te ajudar a
                afinar cada nota dessa trajetória, celebrando suas conquistas ao
                longo do concerto da vida!
              </p>
            )}
          </div>

          {mobile ? (
            <div className=" price">
              <p className="downsell">
                <s>
                  De <strong>R$997,00</strong>
                </s>
              </p>
              <p className="sell">
                12x de {""} <strong>69,70</strong>
              </p>
              <p className="cash">
                ou <strong>R$697,00</strong> à vista
              </p>
              <a
                href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
                className="CTA checkout"
              >
                Quero transformar a educação do meu filho com música
              </a>
              <img src={bank} width={400} alt="" className="" />
            </div>
          ) : (
            <div className="checkout-price .price">
              <p className="downsell">
                <s>
                  De <strong>R$997,00</strong>
                </s>
              </p>
              <p className="sell">
                12x de {""} <strong>69,70</strong>
              </p>
              <p className="cash">
                ou <strong>R$697,00</strong> à vista
              </p>
              <a
                href="https://pay.hotmart.com/error?errorMessage=005&checkoutLoadId=CKTID-D90469626F1-1706885279387-6516"
                className="CTA checkout"
              >
                Quero transformar a educação do meu filho com música
              </a>
              <img src={bank} width={400} alt="" />
            </div>
          )}
          {mobile ? (
            <img src={selo} alt="" className="selo" />
          ) : (
            <img src={selo} alt="" id="selo" className="selo" />
          )}
        </div>
        <div className="div-text repeat pink">
          <h1>
            Descubra como a música pode revolucionar a educação infantil!
            Beneficie-se com:
          </h1>
          <div className="benefit">
            <SealCheck weight="fill" className="seal" color="#e4007f" />
            <p>Suporte ao vivo no Zoom para orientações personalizadas</p>
          </div>

          <div className="benefit">
            <SealCheck weight="fill" className="seal" color="#e4007f" />
            <p>Opções de pagamento flexíveis: boleto, PIX.</p>
          </div>

          <div className="benefit">
            <SealCheck weight="fill" className="seal" color="#e4007f" />
            <p>Garantia de 14 dias para a sua tranquilidade</p>
          </div>
        </div>

        <footer>
          <strong>Aviso Legal:</strong>
          <p>
            As informações neste produto não garantem resultados específicos. Os
            rendimentos podem variar de acordo com a dedicação e abertura de
            cada aluno.
            <br />
            <br />
            Todos os conteúdos fornecidos neste produto são protegidos por
            direitos autorais. Não é permitida a reprodução ou distribuição sem
            permissão por escrito. Qualquer reprodução não autorizada,
            distribuição ou uso indevido pode resultar em penalidades civis e
            criminais de acordo com as leis aplicáveis. Portanto utilize apenas
            para fins pessoais.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
