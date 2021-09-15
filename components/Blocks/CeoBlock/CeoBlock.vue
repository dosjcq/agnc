<template>
  <div class="ceoBlock">
    <div class="basePadding">
      <div class="aboutCeo">
        <div class="ceoImg">
          <img src="~/assets/images/CEO_AGNC.png" alt="CEO" width="100%" />
        </div>
        <div class="ceoInfo">
          <div class="ceoName">
            <h3>ОЛЬГА СВИЧИНСКАЯ</h3>
            <p class="ceoPosition ">Основатель и CEO AGNC</p>
          </div>
          <div class="companyHistory">
            <p class="ceoHistory text">
              Основание AGNC в знаковом 2020 году стало логичным и органичным
              продолжением десятилетней карьеры журналиста Ольги Свичинской в
              главных модных глянцевых изданиях России, в числе которых журналы
              Interview, Harper's Bazaar и InStyle. В последнем она успешно
              совмещала роль заместителя главного редактора и креативного
              директора. Руководство командой редакторов, разработка креативного
              видения, ответственность за производство лучшего модного контента
              в стране и постоянные коммуникации с рекламодателями и
              маркетологами позволили ей досконально изучить PR-индустрию, а
              также обрести контакты по всему миру и развить в себе
              клиентоориентированный подход.
            </p>
            <p class="ceoHistory text">
              Создание собственного коммуникационного агентства дало ей
              возможность применить свою экспертизу и опыт работы в
              медиаиндустрии, чтобы AGNC могло предоставлять локальным брендам
              полный спектр услуг для их развития и продвижения как на
              российском, так и на международном рынке.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.from(".ceoImg", {
      scrollTrigger: {
        trigger: ".ceoImg",
        start: "top 75%"
      },
      delay: 0.3,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0
    });
    gsap.from(".ceoInfo", {
      scrollTrigger: {
        trigger: ".ceoInfo",
        start: "top 75%"
      },
      delay: 0.6,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0
    });
  }
};
</script>

<style scoped>
.ceoBlock {
  margin-top: 200px;
}

.aboutCeo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  /* grid-column-gap: 95px; */
}

.ceoInfo {
  display: grid;
  grid-template-rows: repeat(2, auto);
}

.ceoName {
  align-self: start;
  margin-bottom: 12px;
}

.ceoImg {
  width: 100%;
  padding-right: 5.938vw;
}

img {
  max-height: 800px;
  object-fit: contain;
}

.ceoPosition {
  line-height: 32.78px;
  font-size: 1.5vw;
}

.companyHistory {
  align-self: end;
}

.ceoHistory:last-child {
  margin-top: 20px;
}

@media (max-width: 1100px) {
  .ceoImg {
    padding-right: 40px;
  }

  .ceoInfo {
    display: grid;
  }

  img {
    /* max-height: 800px; */
    object-fit: contain;
  }

  .companyHistory {
    align-self: end;
  }
}

@media (max-width: 800px) {
  .ceoBlock {
    margin-top: 150px;
  }

  .ceoPosition {
    line-height: 20.49px;
    font-size: 2.344vw;
  }
}

@media (max-width: 640px) {
  .aboutCeo {
    display: block;
  }

  .ceoImg {
    padding-right: 0;
  }

  .ceoPosition {
    line-height: 20.49px;
    font-size: 15px;
  }

  .ceoInfo {
    display: block;
    margin-top: 20px;
  }

  .companyHistory {
    align-self: none;
    margin-top: 20px;
  }
}
</style>
