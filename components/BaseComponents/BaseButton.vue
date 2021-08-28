<template>
  <button class="button"><slot></slot></button>
</template>

<style lang="css" scoped>
.button {
  background-color: none;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 120px/35px;
  padding: 13px 20px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  line-height: 27px;
  font-size: 1.125vw;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
}

@media (max-width: 640px) {
  .button {
    border-radius: 110px/45px;
    padding: 4px 21px;
    font-weight: 400;
    line-height: 20px;
    font-size: 16px;
  }
}
</style>
