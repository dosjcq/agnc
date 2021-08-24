<template>
  <header>
    <div class="logo">
      <img src="~/assets/images/AGNC.svg" alt="AGNC" />
    </div>
    <div class="navigation">
      <ul class="textManrope">
        <li>Об агенстве</li>
        <li>Услуги</li>
        <li>Инфлюенсеры</li>
        <li>Партнеры</li>
      </ul>
      <base-button>Оставить заявку</base-button>
    </div>
  </header>
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

<style lang="css" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.938vw;
  padding-top: 20px;
}

.navigation {
  display: flex;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin-right: 30px;
  font-weight: 400;
  line-height: 27px;
  font-size: 1.125vw;
}
</style>
