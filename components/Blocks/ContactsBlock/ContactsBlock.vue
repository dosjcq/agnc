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
            <a href="mail.ru">contact@agnc.ru </a>
          </div>
          <div class="contact">
            <p>Instagram</p>
            <a href="https://www.instagram.com/studio_agnc/">@studio_agnc</a>
          </div>
          <div class="contact">
            <p>Телеграм</p>
            <a href="google.com">t.me/agnc</a>
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
      console.log("hello");
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
  padding: 14.5px 0;
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
}

input:focus-visible {
  border-left: none;
  border-right: none;
  border-color: black;
  outline: none;
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
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 25px;
  }

  .userContactsForm {
    margin-bottom: 40px;
  }
}
</style>
