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
        <img
          src="~/assets/images/influencers/anka.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Анка Ахалая</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/darina.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Дарина Фаизова</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/sari.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Сарина Турецкая</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/tamara.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Тамара mp3</p>
          <p class="infCareer">Певица</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/anka.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Анка Ахалая</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/darina.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Дарина Фаизова</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/sari.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Сарина Турецкая</p>
          <p class="infCareer">Модель</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="~/assets/images/influencers/tamara.png"
          alt="Anka"
          width="100%"
        />
        <div class="infData">
          <p class="infName">Тамара mp3</p>
          <p class="infCareer">Певица</p>
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
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4.5,
        // centeredSlides: true,
        spaceBetween: 50,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1101: {
            slidesPerView: 4.5
          },
          801: {
            slidesPerView: 3.5
          },
          480: {
            slidesPerView: 2.5
          },
          0: {
            slidesPerView: 1.5
          }
        }
      }
    };
  }
};
</script>

<style scoped>
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

@media (max-width: 1100px) {
  .swiperBlock {
    margin-top: 200px;
    padding: 100px 0;
  }

  .swiper {
    margin-top: 50px;
    padding-left: 30px;
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

  .swiperContent {
    display: block;
  }

  p {
    max-width: 45.313vw;
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
