<template>
  <div class="servicesBlock" id="services">
    <div class="basePadding">
      <div class="morePadding">
        <div class="servicesContent">
          <div class="headingServices">
            <h1>УСЛУГИ АГЕНСТВА</h1>
          </div>
          <div class="fullAccordionContent">
            <div class="accordion">
              <!--begin -->
              <accordion>
                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">
                      CONSULTING & BRAND DEVELOPMENT
                    </p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">Consulting</p>
                      <ul>
                        <li>
                          Аудит вашего бренда и консультации по его улучшению
                        </li>
                      </ul>
                      <p class="headingAccordion" style="margin-top: 16px">
                        Brand Development
                      </p>
                      <ul>
                        <li>Анализ рынка и маркетинговые исследования</li>
                        <li>
                          Разработка концепции вашего продукта с нуля и создание
                          его конкурентного преимущества
                        </li>
                        <li>Разработка фирменного стиля и бренд-бука</li>
                        <li>Разработка бренд-стратегии 360</li>
                        <li>Бренд-менеджмент</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">PR & MARKETING</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Продвижение и повышение узнаваемости брендов
                      </p>
                      <ul>
                        <li>Создание истории вашего бренда</li>
                        <li>Разработка позиционирования бренда</li>
                        <li>Разработка коммуникационной стратегии</li>
                        <li>Определение целей</li>
                        <li>Медиапланирование</li>
                        <li>Консалтинг</li>
                        <li>Определение ключевого маркетингового сообщения</li>
                        <li>Стратегичесие партнерства</li>
                        <li>
                          Pr-поддержка ключевых локальных СМИ (Print+Digital)
                        </li>
                        <li>Influencer marketing</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">CONTENT PRODUCTION</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Ведение под ключ фото- видео- съемок
                      </p>
                      <ul>
                        <li>Создание истории вашего бренда</li>
                        <li>Разработка позиционирования бренда</li>
                        <li>Разработка коммуникационной стратегии</li>
                        <li>Определение целей</li>
                        <li>Медиапланирование</li>
                        <li>Консалтинг</li>
                        <li>Определение ключевого маркетингового сообщения</li>
                        <li>Стратегичесие партнерства</li>
                        <li>
                          Pr-поддержка ключевых локальных СМИ (Print+Digital)
                        </li>
                        <li>Influencer marketing</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">EVENT MARKETING</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Организация и проведение мероприятий
                      </p>
                      <ul>
                        <li>Разработка концепций мероприятий</li>
                        <li>Guest Management</li>
                        <li>Декор</li>
                        <li>Интеграции в мероприятия партнеров</li>
                        <li>Pr-поддержка</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">STYLIST</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Персональный имидж консалтинг - разработка фирменного
                        стиля и реализация х Ester Shenkman
                      </p>
                      <ul>
                        <li>Консультация</li>
                        <li>Разбор гардероба</li>
                        <li>Шопинг</li>
                        <li>Интеграции в мероприятия партнеров</li>
                        <li>Ревизия гардероба</li>
                        <li>Сопровождение</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">BRANDING / DESIGN</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion"></p>
                      <ul>
                        <li>Консультация</li>
                        <li>Разбор гардероба</li>
                        <li>Шопинг</li>
                        <li>Интеграции в мероприятия партнеров</li>
                        <li>Ревизия гардероба</li>
                        <li>Сопровождение</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">BOOKS</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Разработка и производство полиграфической продукции для
                        вашего бизнеса
                      </p>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">ONLINE COURSES</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Разработка идеи вашего онлайн курса
                      </p>
                      <ul>
                        <li>Производство обучающего фото и видео-контента</li>
                        <li>Организации онлайн школы для вашего бизнеса</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">ORIGINALS</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">Оригинальные проекты AGNC</p>
                      <ul>
                        <li>
                          <a href="http://my-cardgame.com/3/"
                            >Настольная игры МЫ</a
                          ><br />Игра создана для того, чтобы узнать друг друга
                          ближе и завести интересный разговор, а также для
                          развития эмоционального интеллекта. Все вопросы
                          разработаны вместе с профессиональным коучем и
                          рассчитаны на глубокое погружение друг в друга и себя.
                        </li>
                        <li>
                          Экологичный просветительский проект
                          <a
                            href="https://www.instagram.com/reverse.russia/?hl=ru"
                            >REVERSE</a
                          >
                        </li>
                        <li>Студия (cooming soon)</li>
                        <li>Курсы AGNC (cooming soon)</li>
                        <li>Book (cooming soon)</li>
                        <li>YouTube (cooming soon)</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>
                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">CREATIVE SERVICES</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion"></p>
                      <ul>
                        <li>
                          Разработка визуального направления и креативной
                          стратегии вашего аккаунта
                        </li>
                        <li>Art Direction</li>
                        <li>Продюсирование фото и видео-контента</li>
                        <li>Разработка графических креативов</li>
                        <li>Производство иллюстраций и моушен-креативов</li>
                        <li>Копирайтинг</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>
                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">ВЗАИМОДЕЙСТВИЕ С АУДИТОРИЕЙ</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion"></p>
                      <ul>
                        <li>Конкурсы и Giveaways</li>
                        <li>Кросс-промо</li>
                        <li>Партнерские интеграции</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>
                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">ЛИЧНЫЙ PR</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Разработка и продвижение персонального бренда
                      </p>
                      <ul>
                        <li>Аудит личного бренда</li>
                        <li>Разработка стратегии</li>
                        <li>Продвижение по различным каналам коммуникации</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>
              </accordion>
            </div>
            <!--end -->
            <!-- <base-button>Оставить заявку</base-button> -->
            <li class="ellipseButton" @click="scrollToContacts">
              Оставить заявку
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "~/components/BaseComponents/Accordion/Accordion";
import AccordionItem from "~/components/BaseComponents/Accordion/AccordionItem";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default {
  components: {
    Accordion,
    AccordionItem,
  },
  methods: {
    scrollToContacts() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#contacts", offsetY: 70 },
      });
    },
  },
};
</script>

<style scoped>
.servicesBlock {
  margin-top: 250px;
  background-color: #92ff6b;
}

.servicesContent {
  display: flex;
  align-items: flex-start;
  padding: 120px 0;
}

.accordion {
  margin-bottom: 40px;
}

.headingServices {
  width: 50%;
}

h1 {
  max-width: 21.438vw;
}

p {
  cursor: pointer;
  color: #141414;
}

.headingAccordion {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 16px;
}

ul {
  margin-top: 8px;
  list-style-type: disc;
  list-style-position: inside;
}

li {
  font-size: 20px;
  line-height: 150%;
  font-weight: 400;
}

li.ellipseButton {
  font-size: 18px;
  line-height: 120%;
  display: inline-block;
  /* padding: 16px 16px; */
}

li.ellipseButton::before {
  content: "";
  border: 1px solid #141414;
  left: 50%;
  height: 3rem;
  position: absolute;
  width: 130%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  top: 50%;
}

li.ellipseButton:hover::before {
  border-color: #9389d2;
}

a {
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  line-height: 180%;
  font-weight: 400;
  text-decoration: underline;
}

.contentAccord {
  margin-top: 20px;
}

.accordion-heading {
  font-size: 24px;
  font-weight: normal;
  line-height: 33px;
}

@media (max-width: 1024px) {
  .servicesBlock {
    margin-top: 200px;
  }
}

@media (max-width: 640px) {
  li {
    font-size: 16px;
  }

  .servicesContent {
    display: block;

    padding: 70px 0 120px 0;
  }

  .accordion {
    margin-top: 30px;
  }

  .accordion-heading {
    font-size: 20px;
    font-weight: normal;
    line-height: 27.32px;
  }
}
</style>
