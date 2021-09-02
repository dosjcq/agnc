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
  line-height: 22.59px;
  font-size: 18px;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

button:hover {
  border-color: #9389d2;
  color: #9389d2;
}

@media (max-width: 640px) {
  .button {
    border-radius: 110px/45px;
    padding: 4px 21px;
    font-weight: 400;
    line-height: 20.08px;
    font-size: 16px;
  }
}
</style>
