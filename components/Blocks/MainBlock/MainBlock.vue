<template>
  <div class="mainBlock">
    <TheHeader />
    <section class="basePadding">
      <div class="morePadding">
        <div class="mainItem">
          <div class="mainHeading d">AGNC —</div>
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

export default {
  name: "MainBlock",
  components: {
    TheHeader
  }
};
</script>

<style scoped>
.mainBlock {
  background: rgba(147, 137, 210, 0.5);
  backdrop-filter: blur(248.4px);
  height: 100vh;
}

section {
  margin-top: 80px;
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

@media (max-width: 1024px) {
  section {
    margin-top: 45px;
  }

  .mainItem:nth-child(2) .mainHeading:first-child {
    margin-right: 17px;
  }

  .mainHeading {
    font-size: 9.375vw;
  }

  .mainBlockText {
    display: none;
  }

  .mainItem:nth-child(4) {
    justify-content: center;
  }
}
</style>
