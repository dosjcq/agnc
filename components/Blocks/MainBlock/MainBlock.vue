<template>
  <div class="mainBlock">
    <TheHeader />
    <section class="basePadding" :class="{ readyShow: ready }">
      <div class="morePadding">
        <div class="mainItem">
          <div class="mainHeading">AGNC —</div>
          <p class=" mainBlockText first">
            Помогаем нашим клиентам обрести лояльную аудиторию и широкую
            узнаваемость, популяризировать их экологические и благотворительные
            инициативы.
          </p>
        </div>
        <div class="mainItem">
          <div class="mainHeading ">это</div>
          <div class="mainHeading ">креативное</div>
        </div>
        <div class="mainItem">
          <div class="mainHeading ">коммуникационное</div>
        </div>
        <div class="mainItem">
          <p class=" mainBlockText second">
            Мы оказываем услуги по разработке креативных концепций для развития
            прогрессивных брендов
          </p>
          <div class="mainHeading ">агенство</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader";
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);
export default {
  name: "MainBlock",
  components: {
    TheHeader
  },
  data() {
    return {
      ready: true
    };
  },
  mounted() {
    gsap.from(".mainHeading", {
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
      y: 100,
      opacity: 0,
      stagger: 0.15
    });
    gsap.from(".mainBlockText", {
      delay: 1,
      duration: 0.8,
      ease: "power2.out",
      y: 50,
      opacity: 0,
      stagger: 0.15
    });

    this.ready = !this.ready;
  }
  // function() {
  //   gsap.from(".mainHeading", {
  //     scrollTrigger: {
  //       trigger: ".mainHeading",
  //       toggleActions: "restart pause resume reverse",
  //       start: "top 50%"
  //     },
  //     duration: 2,
  //     ease: "circ.out",
  //     y: 100,
  //     opacity: 0,
  //     stagger: 0.2
  //   });
  // },
};
</script>

<style scoped>
.readyShow {
  display: none;
}

.split-line {
  overflow: hidden;
}

.mainBlock {
  background-image: url("~/assets/images/BG.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

section {
  margin: auto 0;
  padding-bottom: 40px;
}

.mainItem {
  display: flex;
  align-items: center;
}

.mainItem:nth-child(2) .mainHeading:first-child {
  margin-right: 45px;
}

.mainHeading {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 8.438vw;
  line-height: 1;
  color: #141414;
}

.mainBlockText {
  font-weight: 400;
  font-size: 1vw;
  line-height: 1;
  box-sizing: border-box;
  width: 22.938vw;
  vertical-align: bottom;
}

.first {
  width: 22.938vw;
  margin-left: 40px;
}

.second {
  width: 12.438vw;
  margin-right: 29px;
}

@media (max-width: 1100px) {
  .mainItem:nth-child(2) .mainHeading:first-child {
    margin-right: 15px;
  }

  /* section {
    margin-top: 144px;
  } */

  .mainHeading {
    font-size: 10.375vw;
  }

  .mainBlockText {
    display: none;
  }

  .mainItem:nth-child(4) {
    justify-content: center;
  }
}

@media (max-width: 800px) {
  .mainItem:nth-child(2) .mainHeading:first-child {
    margin-right: 17px;
  }

  .mainHeading {
    font-size: 11.875vw;
  }
}

@media (max-width: 550px) {
  .mainBlock {
    display: flex;
    flex-direction: column;
  }

  section {
    margin: auto 0;
    padding-bottom: 70px;
  }
}
</style>
