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
      <base-button class="wideDispaly">Оставить заявку</base-button>
      <base-button class="smallDisplay">Меню</base-button>
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
  align-items: center;
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

.smallDisplay {
  display: none;
}

@media (max-width: 1024px) {
  header {
    margin: 0 2.93vw;
  }

  li {
    list-style: none;
    margin-right: 30px;
    font-weight: 400;
    line-height: 27px;
    font-size: 1.125vw;
  }

  li:nth-child(3) {
    display: none;
  }
}

@media (max-width: 480px) {
  ul {
    display: none;
  }

  .wideDispaly {
    display: none;
  }

  .smallDisplay {
    display: block;
  }
}
</style>
