<template>
  <div class="aboutBlock">
    <div class="basePadding">
      <div class="morePadding">
        <div class="wideDisplayContent">
          <div class="introduceContent ">
            <h5>
              Предоставляем полный спектр маркетинговых и креативных услуг
              брендам категории fashion, beauty и lifestyle для их развития и
              продвижения как на Российском, так и международных рынках.
            </h5>
          </div>
          <div class="moreAboutContent">
            <p class="text moreAboutContentText">
              AGNC - это также community единомышленников и успешных молодых
              людей , над развитием которого мы работаем каждый день, чтобы
              помочь нашим клиентам быть услышанными. На данный момент портфолио
              агентства состоит более чем из 20-ти лидеров мнений, разделяющих
              наши ценности, цели и образ жизни.
            </p>
            <p class="text moreAboutContentText marginFromCenter">
              Также, AGNC планирует развиваться как самостоятельный бренд и
              медиа-ресурс, способного не только оказывать полноценный спектр
              услуг своим клиентам, но и создавать собственные уникальные
              проекты и продукты. Здесь мы видим свой потенциал бесконечным.
            </p>
          </div>
        </div>
        <div class="smallDisplayContent">
          <div>
            <h5>
              Мы оказываем услуги по разработке креативных концепций для
              развития прогрессивных брендов.
            </h5>
          </div>
          <div class="moreAboutContent">
            <p class="text moreAboutContentText">
              Мы помогаем нашим клиентам не только обретать лояльную аудиторию и
              широкую узнаваемость, но и популяризировать их экологичные и
              благотворительные инициативы.
            </p>
            <p class="text moreAboutContentText ">
              Также AGNC планирует развивать диджитальную pop-up галерею для
              артистов разных жанров, в которой художники, музыканты,
              иллюстраторы и фотографы смогут ярко заявить о себе.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutBlock {
  margin-top: 200px;
}

.introduceContent {
  width: 60.813vw;
}

.moreAboutContent {
  display: flex;
  align-items: start;
  margin-top: 30px;
}

.moreAboutContentText {
  width: 50%;
}

.smallDisplayContent {
  display: none;
}

@media (max-width: 640px) {
  .wideDisplayContent {
    display: none;
  }

  .smallDisplayContent {
    display: block;
  }

  .moreAboutContent {
    display: block;
  }

  .moreAboutContentText {
    max-width: 68.438vw;
    width: auto;
  }

  .moreAboutContentText:last-child {
    margin-top: 22px;
  }
}
</style>
