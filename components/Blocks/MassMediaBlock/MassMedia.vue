<template>
  <div class="massMediaBlock" id="massMedia">
    <div class="basePadding">
      <div class="morePadding">
        <div class="massMediaContent">
          <div class="massMediaHeading">
            <h2>СМИ</h2>
            <p class="text">
              Мы помогаем нашим клиентам не только обретать лояльную аудиторию и
              широкую узнаваемость
            </p>
          </div>
          <div class="massMediaAgencies">
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Vogue.svg"
                alt="Vogue"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Harper’s Bazaar.svg"
                alt="Vogue"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/InStyle.ru.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Cosmopolitan.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Buro.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Tatler.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/GRAZIA.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Fashion Magazine.svg"
                alt="Elle"
                width="100%"
              />
            </div>
            <div class="massMediaLogos">
              <img
                src="~/assets/images/Logo/СМИ/Glamour.svg"
                alt="Cosmopolitan"
                width="100%"
              />
            </div>
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
    gsap.from(".massMediaAgencies", {
      scrollTrigger: {
        trigger: ".massMediaAgencies",
        start: "top 75%"
      },
      delay: 0.2,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0
    });
  }
};
</script>

<style scoped>
.massMediaBlock {
  margin-top: 250px;
}

.massMediaContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
}

/* .massMediaHeading {
  width: 50%;
} */

p.text {
  max-width: 386px;
}

.massMediaAgencies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 65px;
  align-items: center;
  justify-items: center;
}

@media (max-width: 1100px) {
  .massMediaBlock {
    margin-top: 200px;
  }

  p.text {
    max-width: 32.813vw;
  }

  .massMediaAgencies {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 50px;
  }
}

@media (max-width: 800px) {
  .massMediaBlock {
    margin-top: 150px;
  }

  p.text {
    max-width: 38.281vw;
  }

  .massMediaAgencies {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 34px;
    grid-row-gap: 60px;
  }

  .massMediaContent {
    justify-content: space-between;
  }
}

@media (max-width: 550px) {
  .massMediaContent {
    display: block;
  }

  .massMediaAgencies {
    justify-items: start;
    margin-top: 57px;
  }

  .massMediaHeading {
    width: 100%;
  }

  h2 {
    font-size: 36px;
    line-height: 43.6px;
  }

  p.text {
    max-width: none;
    margin-top: 5px;
  }
}
</style>
