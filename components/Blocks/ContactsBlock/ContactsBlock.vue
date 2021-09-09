<template>
  <div class="contactBlock" id="contacts">
    <div class="basePadding">
      <div class="contactContent">
        <div class="contactHeading">
          <h2>БРИФ И КОНТАКТЫ</h2>
          <p class="contactHeadingText">
            Быстрее всего отвечаем в whatsapp. Но вы также можете рассказать про
            свою задачу здесь, либо написать нам на почту
          </p>
        </div>
        <div class="contacts">
          <div class="contact">
            <p>Почта</p>
            <a href="info@studioagnc.com">info@studioagnc.com</a>
          </div>
          <div class="contact">
            <p>Instagram</p>
            <a href="https://www.instagram.com/studio_agnc/">@studio_agnc</a>
          </div>
        </div>

        <div class="contactForm morePadding">
          <form @submit.prevent="submit">
            <div class="userContactsForm">
              <p class="inputGroup">Ваши контакты</p>
              <input
                required
                type="text"
                placeholder="Имя"
                v-model="userName"
              />
              <input
                inputmode="email"
                required
                type="email"
                placeholder="Почта"
                v-model="userMail"
              />
            </div>
            <div class="servicesForm">
              <p class="inputGroup">Услуги</p>
              <multiselect
                required
                v-model="value"
                :options="options"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Выберите услуги"
                label="name"
                track-by="name"
                :preselect-first="false"
              >
                <template slot="selection.name" slot-scope="{ values, isOpen }"
                  ><span
                    class="multiselect__single"
                    v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span
                  ></template
                >
              </multiselect>

              <textarea
                cols="10"
                rows="5"
                placeholder="Расскажите про вашу задачу"
                v-model="userDetails"
              ></textarea>
            </div>
            <li class="ellipseButton">
              <button type="submit">ОТПРАВИТЬ БРИФ</button>
            </li>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "ContactsBlock",
  components: {
    Multiselect
  },
  data() {
    return {
      userName: "",
      userMail: "",
      userDetails: "",
      value: [],
      sent: false,
      options: [
        { name: "Consulting & Brand Development" },
        { name: "PR & Marketing" },
        { name: "Content Production" },
        { name: "Event Marketing" },
        { name: "Stylist" },
        { name: "Books" },
        { name: "Online Courses" },
        { name: "Originals" },
        { name: "Creative Services" },
        { name: "Взаимодейсвие с аудиторией" },
        { name: "Личный PR" }
      ]
    };
  },
  methods: {
    submit() {
      this.$mail.send("http://j56126583.myjino.ru/", {
        from: "nagibin.artyom@mail.ru",
        subject: "Заказ у агенства AGNC",
        html: `<h2>Имя заказчика:</h2> ${
          this.userName
        }, <h2>Почта заказчика:</h2> <p>${
          this.userMail
        }</p>, Услуги: <ul> ${this.value.map(el => {
          return `<li>${el.name}</li>`;
        })} </ul>, <h2>Описание:</h2> <p>${this.userDetails}</p>`
      });
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.contactBlock {
  margin-top: 250px;
}

.contactContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto);
}

/* .contactHeading {
  width: 50%;
} */

h2 {
  margin-bottom: 18px;
}

/* .contactHeadingText {
  max-width: 28.5vw;
} */

a {
  font-weight: 500;
  font-size: 3vw;
  line-height: 1;
  text-decoration: none;
}

p {
  font-size: 18px;
  line-height: 27px;
}

.contacts {
  grid-row: 2/3;
}

.contactForm {
  grid-row: 1/3;
}

.contact {
  margin-top: 47px;
}

input {
  width: 100%;
  border: 1px solid #141414;
  border-left: none;
  border-right: none;
  padding: 14px 5px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #828282;
}

input:focus {
  border-left: none;
  border-right: none;
  border-color: black;
  outline: none !important;
}

input:focus-visible {
  border-left: none;
  border-right: none;
  border-color: black;
  outline: none !important;
}

.userContactsForm input:nth-child(2) {
  border-bottom: none;
}

input::placeholder {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #828282;
}

.inputGroup {
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 25px;
}

.userContactsForm {
  margin-bottom: 40px;
}

textarea {
  margin-top: 30px;
  width: 100%;
  border: 1px solid #141414;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #828282;
  padding: 10px 0 0 10px;
  margin-bottom: 25px;
}

textarea:focus {
  outline: none !important;
}

textarea:focus-visible {
  outline: none !important;
}

textarea::placeholder {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #828282;
}

li.ellipseButton {
  font-size: 18px;
  line-height: 120%;
  display: inline-block;
  margin-top: 15px;
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

button {
  border: none;
  background: transparent;
}

button:focus {
  outline: none;
}

fieldset[disabled] .multiselect {
  pointer-events: none;
}
.multiselect__spinner {
  position: absolute;
  right: 1px;
  top: 1px;
  width: 48px;
  height: 35px;
  background: #fff;
  display: block;
}
.multiselect__spinner:after,
.multiselect__spinner:before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-top-color: #41b883;
  box-shadow: 0 0 0 1px transparent;
}
.multiselect__spinner:before {
  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
  animation-iteration-count: infinite;
}
.multiselect__spinner:after {
  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
  animation-iteration-count: infinite;
}
.multiselect__loading-enter-active,
.multiselect__loading-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}
.multiselect__loading-enter,
.multiselect__loading-leave-active {
  opacity: 0;
}
.multiselect,
.multiselect__input,
.multiselect__single {
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
.multiselect {
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 40px;
  text-align: left;
  color: #141414;
  border: 1px solid #141414;
  border-left: none;
  border-right: none;
}
.multiselect * {
  box-sizing: border-box;
}
.multiselect:focus {
  outline: none;
}
.multiselect--disabled {
  background: #ededed;
  pointer-events: none;
  opacity: 0.6;
}
.multiselect--active {
  z-index: 50;
}
.multiselect--active:not(.multiselect--above) .multiselect__current,
.multiselect--active:not(.multiselect--above) .multiselect__input,
.multiselect--active:not(.multiselect--above) .multiselect__tags {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.multiselect--active .multiselect__select {
  transform: rotate(90deg);
}
.multiselect--above.multiselect--active .multiselect__current,
.multiselect--above.multiselect--active .multiselect__input,
.multiselect--above.multiselect--active .multiselect__tags {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.multiselect__input,
.multiselect__single {
  position: relative;
  display: inline-block;
  min-height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  background: #fff;
  padding: 0 0 0 5px;
  width: 100%;
  transition: border 0.1s ease;
  box-sizing: border-box;
  margin-bottom: 8px;
  vertical-align: top;
}
.multiselect__input:-ms-input-placeholder {
  color: #828282;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.multiselect__input::placeholder {
  color: #828282;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.multiselect__tag ~ .multiselect__input,
.multiselect__tag ~ .multiselect__single {
  width: auto;
}
.multiselect__input:hover,
.multiselect__single:hover {
  border-color: #cfcfcf;
}
.multiselect__input:focus,
.multiselect__single:focus {
  border-color: #a8a8a8;
  outline: none;
}
.multiselect__single {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #141414;
  padding-left: 0;
  margin: 2px 0 10px 0;
}
.multiselect__tags-wrap {
  display: inline;
}
.multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 12.5px 40px 4.5px 0;
  border-radius: 5px;
  background: #fff;
  font-size: 20px;
}
.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #9389d2;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}
.multiselect__tag-icon {
  cursor: pointer;
  margin-left: 7px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: normal;
  width: 22px;
  text-align: center;
  line-height: 22px;
  transition: all 0.2s ease;
  border-radius: 5px;
}
.multiselect__tag-icon:after {
  content: "\D7";
  color: #141414;
  font-size: 14px;
}
.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #9389d2;
}
.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: #fff;
}
.multiselect__current {
  min-height: 40px;
  overflow: hidden;
  padding: 8px 30px 0 12px;
  white-space: nowrap;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
}
.multiselect__current,
.multiselect__select {
  line-height: 16px;
  box-sizing: border-box;
  display: block;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
}
.multiselect__select {
  background-image: url("@/assets/images/arrow.svg");
  position: absolute;
  width: 30.5px;
  height: 19px;
  right: 1px;
  top: 30%;
  padding: 4px 8px;
  text-align: center;
  transition: transform 0.2s ease;
}
/* .multiselect__select:before {
  position: relative;
  right: 0;
  top: 65%;
  color: #999;
  margin-top: 4px;
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: '';
} */
.multiselect__placeholder {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #828282;
  opacity: 0.5;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
}
.multiselect--active .multiselect__placeholder {
  display: none;
}

/* Выпадающее меню обертка */
.multiselect__content-wrapper {
  position: absolute;
  display: block;
  background: #fff;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
}
.multiselect__content {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  min-width: 100%;
  vertical-align: top;
}
.multiselect--above .multiselect__content-wrapper {
  bottom: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  border-top: 1px solid #e8e8e8;
}
.multiselect__content::webkit-scrollbar {
  display: none;
}
.multiselect__element {
  display: block;
}
.multiselect__option {
  display: block;
  padding: 12px;
  min-height: 40px;
  line-height: 16px;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;
  line-height: 30px;
  color: #141414;
}
.multiselect__option:after {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 40px;
  padding-right: 12px;
  padding-left: 20px;
  font-size: 13px;
}
.multiselect__option--highlight {
  background: #9389d2;
  outline: none;
  color: #fff;
}
.multiselect__option--highlight:after {
  content: attr(data-select);
  background: #9389d2;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
}
.multiselect__option--selected {
  background: #f3f3f3;
  color: #141414;
  font-weight: 400;
}
.multiselect__option--selected:after {
  content: attr(data-selected);
  color: #141414;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: #9389d2;
  color: #fff;
}
.multiselect__option--selected.multiselect__option--highlight:after {
  background: #9389d2;
  content: attr(data-deselect);
  color: #fff;
}
.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: #ededed;
  color: #a6a6a6;
}
.multiselect__option--disabled {
  background: #ededed !important;
  color: #a6a6a6 !important;
  cursor: text;
  pointer-events: none;
}
.multiselect__option--group {
  background: #ededed;
  color: #35495e;
}
.multiselect__option--group.multiselect__option--highlight {
  background: #35495e;
  color: #fff;
}
.multiselect__option--group.multiselect__option--highlight:after {
  background: #35495e;
}
.multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede;
}
.multiselect__option--group-selected.multiselect__option--highlight {
  background: #ff6a6a;
  color: #fff;
}
.multiselect__option--group-selected.multiselect__option--highlight:after {
  background: #ff6a6a;
  content: attr(data-deselect);
  color: #fff;
}
.multiselect-enter-active,
.multiselect-leave-active {
  transition: all 0.15s ease;
}
.multiselect-enter,
.multiselect-leave-active {
  opacity: 0;
}
.multiselect__strong {
  margin-bottom: 8px;
  line-height: 20px;
  display: inline-block;
  vertical-align: top;
}
[dir="rtl"] .multiselect {
  text-align: right;
}
[dir="rtl"] .multiselect__select {
  right: auto;
  left: 1px;
}
[dir="rtl"] .multiselect__tags {
  padding: 8px 8px 0 40px;
}
[dir="rtl"] .multiselect__content {
  text-align: right;
}
[dir="rtl"] .multiselect__option:after {
  right: auto;
  left: 0;
}
[dir="rtl"] .multiselect__clear {
  right: auto;
  left: 12px;
}
[dir="rtl"] .multiselect__spinner {
  right: auto;
  left: 1px;
}
@keyframes spinning {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(2turn);
  }
}

@media (max-width: 1100px) {
  .contactBlock {
    margin-top: 200px;
  }
}

@media (max-width: 800px) {
  .contactBlock {
    margin-top: 150px;
  }

  .contactContent {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }

  .contactHeading {
    width: 100%;
  }

  h2 {
    margin-bottom: 5px;
  }

  .contactHeadingText {
    max-width: 98%;
  }

  a {
    font-size: 42px;
    line-height: 1;
  }

  .contacts {
    margin-top: 100px;
  }

  .contact:not(:first-child) {
    margin-top: 20px;
  }

  .contactForm {
    grid-row: 2/3;
    margin-top: 40px;
  }

  .contacts {
    grid-row: 3/4;
  }

  .inputGroup {
    font-size: 18x;
    line-height: 27px;
    margin-bottom: 10px;
  }

  .userContactsForm {
    margin-bottom: 40px;
  }
}

@media (max-width: 550px) {
  .contactContent {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }

  .contactHeading {
    width: 100%;
  }

  h2 {
    margin-bottom: 5px;
  }

  .contactHeadingText {
    max-width: 98%;
  }

  a {
    font-size: 32px;
    line-height: 1;
  }

  .contacts {
    margin-top: 100px;
  }

  .contact:not(:first-child) {
    margin-top: 20px;
  }

  .contactForm {
    grid-row: 2/3;
    margin-top: 40px;
  }

  .contacts {
    grid-row: 3/4;
  }

  .inputGroup {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 25px;
  }

  .userContactsForm {
    margin-bottom: 40px;
  }
}
</style>
