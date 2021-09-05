<template>
  <div class="swiperBlock" id="influencers">
    <div class="basePadding">
      <div class="swiperContent">
        <div class="swiperHeading">
          <h2>ИНФЛЮЕНСЕРЫ</h2>
        </div>
        <div class="marginFromCenter">
          <p class="text">
            Сообщество, которое окружает агентство является самым перспективным,
            молодым и желанным для брендов, которые идут в ногу со временем
          </p>
        </div>
      </div>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <a href="https://www.instagram.com/lidiaivankova/">
          <img
            src="~/assets/images/influencers/@lidiaivankova-min.jpg"
            alt="Лида Иванькова"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Лида Иванькова</p>
          <p class="infCareer">Владелица студии красоты My Dear Body</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/darinafzv/">
          <img
            src="~/assets/images/influencers/@darinafzv-min.jpg"
            alt="Дарина Фаизова"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Дарина Фаизова</p>
          <p class="infCareer">Режиссер</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/alex_maniovich/">
          <img
            src="~/assets/images/influencers/@alex_maniovich-min.jpg"
            alt="Саша Маниович"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Саша Маниович</p>
          <p class="infCareer">Дизайнер украшений Maniovich.Am</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/dariaksenz/">
          <img
            src="~/assets/images/influencers/@dariaksenz-min.jpg"
            alt="Даша Ксенз"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Даша Ксенз</p>
          <p class="infCareer">Дизайнер спортивной одежды Almond Crew</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/joolssss/">
          <img
            src="~/assets/images/influencers/@joolssss-min.jpg"
            alt="Юля Ксесошвили"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Юля Ксесошвили</p>
          <p class="infCareer">Pop-events в Краснодаре</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/polina_zvezdina/">
          <img
            src="~/assets/images/influencers/@polina_zvezdina-min.jpg"
            alt="Полина Звездина"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Полина Звездина</p>
          <p class="infCareer">Владелица магазина косметики Perf.ace</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/vasergeeva/">
          <img
            src="~/assets/images/influencers/@vasergeeva-min.jpg"
            alt="Лера Сергеева"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Лера Сергеева</p>
          <p class="infCareer">Сет-дизайнер Lucky Group</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/azarovaka/">
          <img
            src="~/assets/images/influencers/@azarovaka-min.jpg"
            alt="Ксения Азарова"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Ксения Азарова</p>
          <p class="infCareer">Главный байер ЦУМ</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="https://www.instagram.com/svichinskaya/">
          <img
            class="lastSlide"
            src="~/assets/images/influencers/@olgaSvichinskaya-min.jpg"
            alt="Ольга Свичинская"
            width="100%"
          />
        </a>
        <div class="infData">
          <p class="infName">Ольга Свичинская</p>
          <p class="infCareer">Владелица агенства AGNC</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 4.5,
        // centeredSlides: true,
        spaceBetween: 50,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1101: {
            slidesPerView: 4.5,
          },
          801: {
            slidesPerView: 3.5,
          },
          480: {
            slidesPerView: 2.5,
          },
          0: {
            slidesPerView: 1.5,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.lastSlide {
  padding-right: 100px;
}

.swiperBlock {
  margin-top: 250px;
  background: #9389d2;
  padding: 120px 0;
}

.swiperContent {
  display: flex;
  align-items: flex-start;
}

h2,
p {
  color: #fff;
}

h2 {
  line-height: 1;
}

p {
  max-width: 33vw;
}

.infData {
  margin-top: 9px;
}

.infName {
  font-weight: 500;
  font-size: 26px;
  line-height: 31.49px;
}

.infCareer {
  font-weight: 400;
  font-size: 18px;
  line-height: 24.59px;
}

.swiperHeading {
  width: 50%;
}

.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}

.swiper {
  margin-top: 60px;
  padding-left: 10.938vw;
  /* white-space: nowrap;
  padding-right: 10.938vw; */
}

/* .swiper-container {
  padding-right: 10.938vw;
} */

@media (max-width: 1100px) {
  .swiperBlock {
    margin-top: 200px;
    padding: 100px 0;
  }

  .swiper {
    margin-top: 50px;
    padding-left: 30px;
  }

  .swiper-container {
    padding-right: 30px;
  }

  h2 {
    font-size: 48px; /* 60 px */
    line-height: 58.13px; /* 72.66 px */
  }
}

@media (max-width: 800px) {
  .swiperBlock {
    margin-top: 250px;
    background: #9389d2;
    padding: 60px 0;
  }

  .swiper {
    margin-top: 40px;
    padding-left: 15px;
  }

  .swiper-container {
    padding-right: 15px;
  }

  .swiperContent {
    display: block;
  }

  p {
    max-width: 45.313vw;
  }

  p.text {
    font-size: 14px;
    line-height: 150%;
  }

  .morePadding {
    margin-top: 15px;
  }

  .swiperHeading {
    width: 100%;
  }

  .swiper {
    margin-top: 40px;
    padding-left: 15px;
  }
}

@media (max-width: 550px) {
  .swiperBlock {
    margin-top: 250px;
    background: #9389d2;
    padding: 60px 0;
  }

  .swiperContent {
    display: block;
  }

  p {
    max-width: none;
  }

  h2 {
    font-size: 36px;
    line-height: 43.6px;
  }

  .morePadding {
    margin-top: 15px;
  }

  .swiperHeading {
    width: 100%;
  }

  .swiper {
    margin-top: 40px;
    padding-left: 15px;
  }
}
</style>
