<template>
  <div class="swiperBlock">
    <div class="basePadding">
      <div class="swiperContent">
        <div class="swiperHeading">
          <h2>ИНФЛЮЕНСЕРЫ</h2>
        </div>
        <div class="morePadding">
          <p>
            Сообщество, которое окружает агентство является самым перспективным,
            молодым и желанным для брендов, которые идут в ногу со временем
          </p>
        </div>
      </div>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange
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

/* .swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
} */

/* .swiper {
  margin-top: 60px;
  padding-left: 10.938vw;
} */
</style>
