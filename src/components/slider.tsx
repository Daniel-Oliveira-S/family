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
        {" "}
        <div className="notes">
          <Check className="badge" />
          <h3>Gestão de Comportamento</h3>
          <p>
            Disciplina Positiva ao Alcance: Implemente estratégias práticas de
            disciplina positiva que proporcionam resultados visíveis no
            comportamento da criança, sem a necessidade de recorrer a métodos
            punitivos.
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
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="notes">
          <Check className="badge" />
          <h3>Momentos de Aprendizados Divertidos</h3>
          <p>
            Transforme desafios educacionais em experiências de aprendizados
            envolventes, divertidos e eficazes, gerando interesse e entusiasmo
            imediatos nos seus filhos.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
