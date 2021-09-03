<template>
  <div class="aboutBlock" id="about">
    <div class="basePadding">
      <div class="morePadding">
        <div class="displayContent">
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
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "MainBlock",
  components: {
    TheHeader
  },
  mounted: function() {
    gsap.from(".introduceContent", {
      scrollTrigger: {
        trigger: ".introduceContent",
        start: "top bottom"
      },
      delay: 0.3,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0
    });
    gsap.from(".moreAboutContentText", {
      scrollTrigger: {
        trigger: ".moreAboutContentText",
        start: "top bottom"
      },
      delay: 0.5,
      duration: 0.6,
      ease: "power2.out",
      y: 50,
      opacity: 0,
      stagger: 0.5
    });
  }
};
</script>

<style scoped>
.aboutBlock {
  margin-top: 200px;
}

.introduceContent {
  width: 60.813vw;
}

.moreAboutContent {
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
}

.moreAboutContentText {
  width: 50%;
}

@media (max-width: 1100px) {
  .aboutBlock {
    margin-top: 150px;
  }

  .introduceContent {
    width: 81.445vw;
  }
}

@media (max-width: 800px) {
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

@media (max-width: 550px) {
  .introduceContent {
    width: 100%;
  }

  .moreAboutContent {
    margin-top: 20px;
  }

  .moreAboutContentText {
    max-width: 100%;
  }

  .moreAboutContentText:last-child {
    margin-top: 22px;
  }
}
</style>
