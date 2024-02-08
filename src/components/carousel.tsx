import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import message from "../../public/Vector.svg";
import drum from "../../public/Vector-1.svg";
import heart from "../../public/Vector-2.svg";
import people from "../../public/Vector-3.svg";

export function CarouselTypes() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      loop={true}
      draggable={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className="topic">
          <img src={message} alt="" />
          <h3>Suporte ao vivo semanal comigo</h3>
          <p>
            Toda semana vamos nos reunir em uma sala do zoom para te guiar e te
            ajudar. Em cada encontro vamos explorar um tema diferente e uma nova
            ferramenta. E, é claro, também teremos um momento para tirar todas
            as suas dúvidas.
          </p>
        </div>{" "}
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="topic">
          <img src={drum} alt="" />
          <h3>
            Atividades práticas musicais para a sua família se manter conectada.
          </h3>
          <p>
            As atividades práticas musicais transcendem as palavras, promovendo
            memórias compartilhadas, aliviando o estresse e criando um ambiente
            relaxado e divertido.
          </p>
        </div>{" "}
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="topic">
          <img src={heart} alt="" />
          <h3>Caixa de Ferramentas da disciplina positiva.</h3>
          <p>
            A disciplina positiva tem um papel crucial no desenvolvimento
            integral dos pequenos. Contribui para a formação de uma autoimagem
            positiva, fortalece a confiança em suas habilidades, promove uma
            comunicação empática e afinada, reduz comportamentos desafiadores,
            estimula a autonomia e responsabilidade infantil, resultando em um
            ambiente familiar positivo e altamente encorajador.
          </p>
        </div>{" "}
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="topic">
          <img src={people} alt="" />
          <h3>Comunidade das Famílias Orquestradas no whatsapp.</h3>
          <p>
            Ao ingressar no treinamento, você se tornará parte da Comunidade das
            Famílias Orquestradas no WhatsApp. Nesse grupo exclusivo de alunos,
            você poderá compartilhar experiências com outras mães e pais,
            esclarecer dúvidas e participar de um espaço colaborativo para
            trocar vivências e insights com pessoas que enfrentam desafios
            semelhantes aos seus. Além disso, terá acesso a materiais
            complementares exclusivos para enriquecer ainda mais sua jornada.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
