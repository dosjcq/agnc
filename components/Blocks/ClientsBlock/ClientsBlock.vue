<template>
  <div class="clientsBlock">
    <div class="basePadding">
      <div class="morePadding">
        <div class="clientsContent">
          <div class="clientsHeading">
            <h2>КЛИЕНТЫ</h2>
            <p class="text">
              Также AGNC планирует развивать диджитальную pop-up галерею для
              артистов разных жанров
            </p>
          </div>
          <div class="clientsAgencies">
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/Exalter-1 1.png"
                alt="EXALTER"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/perface.png"
                alt="perface"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/sibolle.png"
                alt="sibolle"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/MAISON_SYBARITE.png"
                alt="MAISON SYBARITE"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/DN.png"
                alt="Дари Надежду"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/RosesLace.png"
                alt="Roces Lace"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/apeiron.png"
                alt="apeiron"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/almond.png"
                alt="almond"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/sculpt.png"
                alt="sculpt"
                width="100%"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/maniovich.png"
                alt="maniovich"
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
    gsap.from(".clientsAgencies", {
      scrollTrigger: {
        trigger: ".clientsAgencies",
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
.clientsBlock {
  margin-top: 250px;
}

.clientsContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
}

/* .clientsHeading {
  width: 50%;
} */

p.text {
  max-width: 24.125vw;
}

.clientsAgencies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 65px;
  align-items: center;
  justify-items: center;
}

.clientsLogos:last-child {
  grid-column: 2 / 3;
}

@media (max-width: 1100px) {
  .clientsBlock {
    margin-top: 150px;
  }

  p.text {
    max-width: 31.25vw;
  }

  .clientsAgencies {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 50px;
  }
}

@media (max-width: 800px) {
  p.text {
    max-width: 38.281vw;
  }

  .clientsAgencies {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 34px;
    grid-row-gap: 60px;
  }
}

@media (max-width: 550px) {
  .clientsContent {
    display: block;
  }

  .clientsHeading {
    width: 100%;
  }

  .clientsAgencies {
    justify-items: center;
    margin-top: 57px;
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
