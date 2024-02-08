// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Check } from "lucide-react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      draggable={true}
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="notes">
          <Check className="badge" />
          <h3>Alívio rápido de Tensões Familiares</h3>
          <p>
            Práticas Musicais Simples: Descubra como atividades musicais fáceis
            e divertidas podem acalmar ambientes tensos, gerando alegria
            instantânea na sua casa.
            <br />
            <br />
            Comunicação Efetiva: Explore técnicas de comunicação que podem ser
            aplicadas imediatamente, melhorando a interação com seu filho e
            reduzindo mal-entendidos e frustrações.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="notes">
          <Check className="badge" />
          <h3>Gestão de Comportamento</h3>
          <p>
            Disciplina Positiva ao Alcance: Implemente estratégias práticas de
            disciplina positiva que proporcionam resultados visíveis no
            comportamento da criança, sem a necessidade de recorrer a métodos
            punitivos.
            <br />
            <br />
            Conexão e Empatia Instantâneas: Utilize a música para criar uma
            conexão imediata com seu filho, facilitando a compreensão mútua e o
            respeito.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="notes">
          <Check className="badge" />
          <h3>Resultados na Rotina Diária</h3>
          <p>
            Rotina Harmoniosa com Música: Integre a música à sua rotina diária,
            transformando momentos como a hora de dormir, tomar banho e escovar
            os dentes em experiências mais suaves e tranquilas.
            <br />
            <br />
            Momentos de Aprendizado Divertidos: Transforme desafios educacionais
            em experiências de aprendizado envolventes, lúdicas e eficazes,
            gerando interesse e entusiasmo imediatos nas criança
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
