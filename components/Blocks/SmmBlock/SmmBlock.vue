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
              <li>Анализ целевой аудитории</li>
              <li>Анализ ваших конкурентов</li>
              <li>Разработка SMM-стратегии</li>
              <li>Разработка Tone of Voice</li>
              <li>Разработка контент-стратегии</li>
              <li>Определение ключевых маркетинговых сообщений</li>
              <li>Разработка и реализация рекламных кампаний</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
