<template>
  <div class="smmBlock">
    <div class="basePadding">
      <div class="morePadding">
        <div class="smmContent">
          <div class="smmHeading">
            <h2>SMM</h2>
            <p class="text">
              Мы предоставляем полный цикл услуг СММ-услуг для брендов, бизнесов
              и амбициозных стартапов и помогает своим клиентам выделяться среди
              конкурентов, расширять аудиторию, быть услышанными и развиваться в
              постоянно меняющемся современном мире digital.
            </p>
          </div>
          <div class="smmSteps">
            <ul>
              <li><span>Анализ целевой аудитории</span></li>
              <li><span>Анализ ваших конкурентов</span></li>
              <li><span>Разработка SMM-стратегии</span></li>
              <li><span>Разработка Tone of Voice</span></li>
              <li><span>Разработка контент-стратегии</span></li>
              <li><span>Определение ключевых маркетинговых сообщений</span></li>
              <li><span>Разработка и реализация рекламных кампаний</span></li>
            </ul>
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
    gsap.from(".smmContent", {
      scrollTrigger: {
        trigger: ".smmContent",
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
.smmBlock {
  margin-top: 200px;
}

.smmContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6.25vw;
  justify-items: start;
}

h2 {
  margin-bottom: 8px;
}

.smmSteps {
  display: inline-block;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: disc;
  color: #9389d2;
}

span {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #333333;
}

li:not(:first-child) {
  margin-top: 20px;
}

.text {
  max-width: 26.063vw;
}

@media (max-width: 1100px) {
  .smmBlock {
    margin-top: 100px;
  }

  .smmContent {
    grid-column-gap: 9.766vw;
  }

  .smmSteps {
    display: inline-block;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #333333;
  }

  li:not(:first-child) {
    margin-top: 23px;
  }

  .text {
    max-width: 39.063vw;
  }
}

@media (max-width: 550px) {
  .smmContent {
    display: block;
  }

  h2 {
    margin-bottom: 10px;
  }

  .text {
    width: 100%;
    max-width: none;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }

  ul {
    margin-top: 15px;
    padding-left: 20px;
  }

  li:not(:first-child) {
    margin-top: 25px;
  }
}
</style>
