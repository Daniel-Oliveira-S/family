import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css";
export function Acordion() {
  return (
    <div id="main">
      <Accordion className="accordion">
        <AccordionSummary
          className="accordion header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Como receberei o acesso?
        </AccordionSummary>
        <AccordionDetails className=" content">
          O acesso ao Método 'Famílias Orquestradas' será fornecido
          imediatamente após a confirmação do seu pagamento. Todas as
          informações essenciais, incluindo instruções de login e acesso à
          plataforma online, serão enviadas para o seu e-mail, juntamente com
          todos os detalhes necessários. Esteja pronto para iniciar sua jornada
          de transformação familiar!
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          className="header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Em quanto tempo consigo concluir o treinamento?
        </AccordionSummary>
        <AccordionDetails className="content">
          O tempo mínimo recomendado para conclusão do treinamento é de apenas
          30 dias. No entanto, o curso foi projetado para ser flexível,
          adaptando-se ao seu ritmo de aprendizado. Não há um prazo definido
          para concluir as lições, permitindo que você prossiga de acordo com
          sua disponibilidade e conforto. Além disso, você terá acesso ao
          conteúdo por um período de 1 ano, possibilitando que se mantenha
          atualizada com as novas oficinas e atividades que serão incorporadas
          ao longo do tempo.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          className="accordion header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Posso parcelar o pagamento?
        </AccordionSummary>
        <AccordionDetails className=" content">
          Sim, entendemos o quanto é importante tornar o acesso mais fácil para
          você. Oferecemos opções de pagamento parcelado, para que você possa
          desfrutar do Método 'Famílias Orquestradas' de maneira conveniente,
          ajustando-se ao seu orçamento. Consulte nossa página de pagamento para
          descobrir mais sobre as opções de parcelamento disponíveis.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          className="accordion header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Não sei nada de música, consigo aplicar o método?
        </AccordionSummary>
        <AccordionDetails className=" content">
          Com certeza! Se você não tem nenhum conhecimento musical, não se
          preocupe. O Método 'Famílias Orquestradas' foi cuidadosamente criado
          para ser inclusivo, adequando-se a todos, independentemente do seu
          nível de familiaridade com a música. Estarei ao seu lado, te guiando
          no passo a passo, tornando a música não apenas acessível, mas também
          uma experiência divertida, especialmente para iniciantes. Vamos
          explorar juntos as bases musicais de maneira simples e prática.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          className="accordion header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Em quanto tempo consigo colher resultados?
        </AccordionSummary>
        <AccordionDetails className=" content">
          Os resultados palpáveis e duradouros começam a se manifestar em apenas
          30 dias, mas muitos participantes compartilham experiências positivas
          quase imediatamente após começarem a aplicar o Método 'Famílias
          Orquestradas'. Desde as primeiras atividades, você vai notar melhorias
          significativas na comunicação, disciplina e nas relações familiares. A
          jornada não apenas cria um ambiente familiar mais harmonioso, repleto
          de momentos de qualidade, mas também contribui para o desenvolvimento
          saudável e contínuo de seus filhos. Essas mudanças edificantes se
          estendem ao longo dos anos, construindo um caminho sólido para o
          futuro de sua família.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
