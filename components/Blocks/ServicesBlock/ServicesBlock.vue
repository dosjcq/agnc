<template>
  <div class="servicesBlock" id="services">
    <div class="basePadding">
      <div class="morePadding">
        <div class="servicesContent">
          <div class="headingServices">
            <h1>УСЛУГИ АГЕНТСТВА</h1>
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
                          Аудит вашего бренда и консультации по его развитию
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
                        <li>Разработка бренд-стратегии 360°</li>
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
                        <li>Стратегические партнерства</li>
                        <li>
                          PR-поддержка в ключевых локальных СМИ (Print+Digital)
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
                        Организация под ключ фото- видео- съемок
                      </p>
                      <ul>
                        <li>Разработка креативных концепций</li>
                        <li>Производство фото- и видеоконтента</li>
                        <li>Разработка графических и motion креативов</li>
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
                        <li>PR-поддержка</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">STYLING</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <p class="headingAccordion">
                        Персональный имидж-консалтинг – разработка фирменного
                        стиля и реализация
                        <span class="ester">х Ester Shenkman</span>
                      </p>
                      <ul>
                        <li>Консультация</li>
                        <li>Разбор гардероба</li>
                        <li>Шопинг</li>
                        <li>Интеграции в мероприятия партнеров</li>
                        <li>Сопровождение</li>
                      </ul>
                    </div>
                  </template>
                </accordion-item>

                <accordion-item>
                  <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                  <template slot="accordion-trigger">
                    <p class="accordion-heading">BRANDING & DESIGN</p>
                  </template>
                  <!-- This slot will handle all the content that is passed to the accordion -->
                  <template slot="accordion-content">
                    <div class="contentAccord">
                      <ul>
                        <li>Брендинг</li>
                        <li>Разработка фирменного стиля</li>
                        <li>Создание удобных интерфейсов</li>
                        <li>Дизайн продукта</li>
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
                        Разработка идеи вашего онлайн-курса
                      </p>
                      <ul>
                        <li>Производство обучающего фото- и видеоконтента</li>
                        <li>Организация онлайн-школы для вашего бизнеса</li>
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
                          рассчитаны на глубокое погружение друг в друга и в
                          себя.
                        </li>
                        <!-- <li>
                          Экологичный просветительский проект
                          <a
                            href="https://www.instagram.com/reverse.russia/?hl=ru"
                            >REVERSE</a
                          >
                        </li>
                        <li>Студия (coming soon)</li>
                        <li>Курсы AGNC (coming soon)</li>
                        <li>Book (coming soon)</li>
                        <li>YouTube (coming soon)</li> -->
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
                        <li>Продвижение по различным каналам коммуникаций</li>
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
    AccordionItem
  },
  methods: {
    scrollToContacts() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#contacts", offsetY: 70 }
      });
    }
  }
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
  margin-bottom: 8px;
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

.fullAccordionContent {
  width: 50%;
}

@media (max-width: 1024px) {
  .servicesBlock {
    margin-top: 200px;
  }
}

@media (max-width: 640px) {
  .servicesBlock {
    margin-top: 150px;
  }

  .fullAccordionContent {
    width: 100%;
  }

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

  .headingAccordion {
    font-size: 18px;
  }
}

@media (max-width: 440px) {
  .ester {
    display: block;
  }
}

@media (max-width: 426px) {
  .ester {
    display: inline;
  }
}
</style>
