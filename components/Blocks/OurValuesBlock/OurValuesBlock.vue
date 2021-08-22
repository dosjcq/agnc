<template>
  <div class="ourValuesBlock">
    <div class="basePadding">
      <h2>НАШИ ЦЕННОСТИ</h2>
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
              <h5>Клиентоориентированность</h5>
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
  font-size: 36px;
  line-height: 44.28px;
  margin-left: 7.5vw;
}

h2 {
  margin-bottom: 30px;
}

.leftText {
  width: 50%;
}

.ourValuePoint:not(:last-child) {
  margin-bottom: 61px;
}

.ourValuePoint:nth-child(2) {
  margin-bottom: 50px;
}
</style>
