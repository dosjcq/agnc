<template>
  <div class="ceoBlock">
    <div class="basePadding">
      <div class="aboutCeo">
        <div class="ceoImg">
          <img src="~/assets/images/CEO_AGNC.png" alt="CEO" width="100%">
        </div>
        <div class="ceoInfo">
          <div class="ceoName headingGaramond">Ольга Свичинская</div>
          <p class="ceoPosition textManrope">Основатель и CEO AGNC</p>
          <div class="companyHistory">
            <p class="ceoHistory textManrope">Основание AGNC в знаковом 2020-м году стало логичным и органичным продолжением десятилетней карьеры журналиста Оли Свичинской в главных модных глянцевых изданиях России, в числе которых журналы Interview, Harper's Bazaar и Instyle. В последнем она успешно совмещала роль заместителя главного редактора и креативного директора. Руководство над командой редакторов, разработка креативного видения, ответственность за производством лучшего модного контента в стране и постоянные коммуникации с рекламодателями и маркетологами позволили ей досконально изучить Pr-индустрию, а также обрести контакты по всему миру и развить в себе клиентоориентированный подход.</p>
            <p class="ceoHistory textManrope"> Создание собственного коммуникационного агентства как нельзя лучше помогло ей применить всю свою экспертизу, контакты и опыт в медиа-индустрии для того, чтобы AGNC мог предоставлять локальным брендам полный спектр услуг для их развития и продвижения как на Российском, так и международном рынке</p>
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
  display: flex;
  align-items: center;
}

.ceoImg {
  width: 50%;
}

.ceoInfo {
  margin-left: 95px;
  width: 50%;
}

.ceoName {
  font-weight: 500;
  line-height: 66.42px;
  font-size: 3.375vw;
}

.ceoPosition {
  font-weight: 400;
  line-height: 32.78px;
  font-size: 1.500vw;
}

.ceoHistory {
  font-weight: 400;
  line-height: 30px;
  font-size: 20px;
}

.ceoHistory{
  margin-top: 86px;
}

.ceoHistory:last-child {
  margin-top: 20px;
}
</style>