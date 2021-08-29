<template>
  <footer class="footerContent">
    <div class="basePadding">
      <div class="footerContainer">
        <div class="infoContent">
          <p class="blackText">© АО «AGNC», 2017-2021</p>
          <p class="greyText">Москва, улица Пушкина, 3с2</p>
        </div>
        <div class="infoContent morePadding">
          <p class="blackText">+7 800 555 35 35</p>
          <p class="greyText">звоните с 10:00 до 20:00</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footerContent {
  margin-top: 100px;
}

.footerContainer {
  display: flex;
  align-items: center;
  border-top: 1px solid #c4c4c4;
  padding: 40px 0 50px 0;
  /* height: 150px; */
}

.infoContent:first-child {
  width: 50%;
}

.infoContent p:first-child {
  color: black;
}

.infoContent p:last-child {
  color: #6c6c6c;
}

@media (max-width: 480px) {
  .footerContainer {
    display: block;
    padding: 30px 0 20px 0;
  }

  .infoContent:first-child {
    width: 100%;
  }

  .infoContent:last-child {
    margin-top: 30px;
    width: 100%;
  }
}
</style>
