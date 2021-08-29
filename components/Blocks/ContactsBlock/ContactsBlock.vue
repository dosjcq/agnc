<template>
  <div class="contactBlock">
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
          <div class="userContactsForm">
            <p class="inputGroup">Ваши контакты</p>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Почта" />
          </div>
          <div class="servicesForm">
            <p class="inputGroup">Услуги</p>
            <input type="text" placeholder="Выберите услугу" />
            <textarea
              cols="10"
              rows="5"
              placeholder="Расскажите про вашу задачу"
            ></textarea>
            <base-button>Оставить бриф</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/BaseComponents/BaseButton";

export default {
  name: "TheHeader",
  components: {
    BaseButton
  }
};
</script>

<style scoped>
.contactBlock {
  margin-top: 250px;
}

.contactContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto);
}

.contactHeading {
  width: 50%;
}

h2 {
  margin-bottom: 18px;
}

.contactHeadingText {
  max-width: 28.5vw;
}

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

@media (max-width: 480px) {
  .contactContent {
    display: grid;
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
}
</style>
