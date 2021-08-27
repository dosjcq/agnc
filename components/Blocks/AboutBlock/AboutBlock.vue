<template>
  <div class="aboutBlock">
    <div class="basePadding">
      <div class="morePadding">
        <div class="introduceContent ">
          <h5>
            Предоставляем полный спектр маркетинговых и креативных услуг брендам
            категории fashion, beauty и lifestyle для их развития и продвижения
            как на Российском, так и международных рынках.
          </h5>
        </div>
        <div class="moreAboutContent">
          <p class="text moreAboutContentText">
            AGNC - это также community единомышленников и успешных молодых людей
            , над развитием которого мы работаем каждый день, чтобы помочь нашим
            клиентам быть услышанными. На данный момент портфолио агентства
            состоит более чем из 20-ти лидеров мнений, разделяющих наши
            ценности, цели и образ жизни.
          </p>
          <p class="text moreAboutContentText marginFromCenter">
            Также, AGNC планирует развиваться как самостоятельный бренд и
            медиа-ресурс, способного не только оказывать полноценный спектр
            услуг своим клиентам, но и создавать собственные уникальные проекты
            и продукты. Здесь мы видим свой потенциал бесконечным.
          </p>
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

@media (max-width: 640px) {
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
}
</style>
