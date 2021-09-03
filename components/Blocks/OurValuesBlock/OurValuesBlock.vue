<template>
  <div class="ourValuesBlock">
    <div class="basePadding">
      <h2 class="animate-heading">НАШИ ЦЕННОСТИ</h2>
      <div class="ourValuesContent">
        <div class="ourValuePoints">
          <div class="ourValuePoint">
            <div class="numberWithPoint">
              <p class="numberPoint">01</p>
              <h5>Полноценная интеграция</h5>
            </div>
            <div class="leftText ">
              <p class="text marginFromCenter">
                С каждым новым проектом мы полноценно погружаемся в индустрию
                каждого клиента и становимся полноценной частью команды вашего
                бренда.
              </p>
            </div>
          </div>
          <div class="ourValuePoint">
            <div class="numberWithPoint">
              <p class="numberPoint">02</p>
              <h5>Последние тренды</h5>
            </div>
            <div class="leftText">
              <p class="text marginFromCenter">
                Мы всегда держим руку на пульсе последних глобальных трендов
                каждой индустрии наших клиентов и последних маркетинговых
                инструментов и не перестаем учиться новому каждый день.
              </p>
            </div>
          </div>
          <div class="ourValuePoint">
            <div class="numberWithPoint">
              <p class="numberPoint">03</p>
              <h5 class="clientFull">Клиентоориентированность</h5>
              <h5 class="clientHalf">
                <span>Клиентоориенти-</span>
                <span>рованость</span>
              </h5>
            </div>
            <div class="leftText">
              <p class="text marginFromCenter">
                Мы стремимся выстраивать долгосрочные и доверительные отношения
                с нашими клиентами, приходя на помощь по любому важному вопросу
              </p>
            </div>
          </div>
          <div class="ourValuePoint">
            <div class="numberWithPoint">
              <p class="numberPoint">04</p>
              <h5>Профессионализм</h5>
            </div>
            <div class="leftText">
              <p class="text marginFromCenter">
                Наши сотрудники - самые талантливые профессионалы индустрии,
                способные которые обеспечивают высочайший уровень клиентского
                сервиса и знающие все о маркетинге и коммуникациях.
              </p>
            </div>
          </div>
          <div class="ourValuePoint">
            <div class="numberWithPoint">
              <p class="numberPoint">05</p>
              <h5>Коммьюнити</h5>
            </div>
            <div class="leftText ">
              <p class="text marginFromCenter">
                Мы верим, что лояльное сообщество являются ключом к развитию
                брендов, росту их узнаваемости и коммерческому успеху и
                повышению качества коммуникаций со своей аудиторией.
              </p>
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
    gsap.from(".animate-heading", {
      scrollTrigger: {
        trigger: ".animate-heading",
        start: "top bottom"
      },
      delay: 0.2,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0
    });
    gsap.from(".ourValuePoint", {
      scrollTrigger: {
        trigger: ".ourValuePoint",
        start: "top bottom"
      },
      delay: 0.2,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0,
      stagger: 0.2
    });
  }
};
</script>

<style scoped>
.ourValuesBlock {
  margin-top: 200px;
}

.ourValuePoint {
  display: flex;
  align-items: flex-end;
}

.numberWithPoint {
  display: flex;
  width: 50%;
  align-items: flex-end;
}

p.numberPoint {
  font-family: "Cormorant Garamond", serif;
  font-size: 3.75vw;
  line-height: 1;
  color: #4f4f4f;
}

h5 {
  margin-left: 7.5vw;
}

.clientHalf {
  display: none;
}

h2 {
  margin-bottom: 30px;
}

.leftText {
  width: 50%;
}

.ourValuePoint:not(:last-child) {
  margin-bottom: 60px;
}

@media (max-width: 1100px) {
  .ourValuePoint {
    align-items: center;
  }

  .numberWithPoint {
    align-items: center;
  }

  .clientFull {
    display: none;
  }

  .clientHalf {
    display: block;
  }
}

@media (max-width: 800px) {
  .ourValuePoints {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }

  .ourValuePoint {
    display: block;
  }

  h5 {
    margin-left: 8px;
  }

  p.numberPoint {
    font-size: 5.625vw;
  }

  .numberWithPoint {
    width: 100%;
  }

  .leftText {
    width: 100%;
    margin-top: 4px;
  }
}

@media (max-width: 550px) {
  .numberWithPoint {
    align-items: flex-end;
  }

  h5 {
    font-size: 24px;
    line-height: 29.52px;
    font-weight: 500;
    margin-left: 5px;
  }

  p.numberPoint {
    font-size: 36px;
    line-height: 1;
  }

  .ourValuePoints {
    display: block;
  }

  .ourValuePoint {
    display: block;
  }

  .numberWithPoint {
    width: 100%;
  }

  .leftText {
    width: 100%;
    margin-top: 10px;
  }

  .clientFull {
    display: block;
  }

  .clientHalf {
    display: none;
  }
}
</style>
