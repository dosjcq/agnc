<template>
  <div class="ceoBlock">
    <div class="basePadding">
      <div class="aboutCeo">
        <div class="ceoImg">
          <img src="~/assets/images/CEO_AGNC.png" alt="CEO" width="100%" />
        </div>
        <div class="ceoInfo">
          <div class="ceoName">
            <h3>Ольга Свичинская</h3>
            <p class="ceoPosition ">Основатель и CEO AGNC</p>
          </div>
          <div class="companyHistory">
            <p class="ceoHistory text">
              Основание AGNC в знаковом 2020-м году стало логичным и органичным
              продолжением десятилетней карьеры журналиста Оли Свичинской в
              главных модных глянцевых изданиях России, в числе которых журналы
              Interview, Harper's Bazaar и Instyle. В последнем она успешно
              совмещала роль заместителя главного редактора и креативного
              директора. Руководство над командой редакторов, разработка
              креативного видения, ответственность за производством лучшего
              модного контента в стране и постоянные коммуникации с
              рекламодателями и маркетологами позволили ей досконально изучить
              Pr-индустрию, а также обрести контакты по всему миру и развить в
              себе клиентоориентированный подход.
            </p>
            <p class="ceoHistory text">
              Создание собственного коммуникационного агентства как нельзя лучше
              помогло ей применить всю свою экспертизу, контакты и опыт в
              медиа-индустрии для того, чтобы AGNC мог предоставлять локальным
              брендам полный спектр услуг для их развития и продвижения как на
              Российском, так и международном рынке
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ceoBlock {
  margin-top: 200px;
}

.aboutCeo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  /* grid-column-gap: 95px; */
}

.ceoInfo {
  display: grid;
  grid-row-gap: 86px;
}

img {
  max-height: 800px;
  object-fit: contain;
}

.ceoPosition {
  line-height: 32.78px;
  font-size: 1.5vw;
}

.companyHistory {
  align-self: end;
}

.ceoHistory:last-child {
  margin-top: 20px;
}

@media (max-width: 1024px) {
  .ceoImg {
    margin-right: 40px;
  }

  .ceoInfo {
    display: grid;
    grid-row-gap: 115px;
  }

  img {
    max-height: 800px;
    object-fit: contain;
  }

  .companyHistory {
    align-self: end;
  }

  .ceoHistory:last-child {
    display: none;
  }
}
</style>
